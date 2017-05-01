class ServerClient {
	constructor(url) {
    this.ws = new WebSocket(url);
    this.ws.onmessage = this.onmessage.bind(this);
    this.records = [];
	}
  onmessage(message) {
    const data = JSON.parse(message.data);
    if (data.player) {
      const record = this.records.find((record) => record.name === data.player);
      if (record) {
        record.update(data)
      }
    }
    if (data.new && this.onNewPlayerCallback) {
      this.onNewPlayerCallback(data.name);
    }
    if(data.channel === 'delete') {
      alert('sorry');
      const recordToRemove = this.records.find(record => record.name === data.player);
      if(recordToRemove) {
        this.records = this.records.filter(record => record.name !== data.player);
      }
    }
  }

  onNewPlayer(callback) {
    this.onNewPlayerCallback = callback;
  }

  getRecord(name) {
    const record = new Record(name, this.ws);
    this.records = [...this.records, record];
    return record;
  }

  onLogin(callback) {
    this.ws.onopen = callback;
  }
}

class Record {
  constructor(name, ws) {
    this.name = name;
    this.data = {};
    this.ws = ws;
    this.ready = false;
    this.setRecord();
  }

  whenIsReady(callback) {
    if(this.ready) {
      callback();
    }
    this.callback = callback;
  }

  update(data) {
    this.data = data;
  }

  async setRecord() {
    try {
      const response = await fetch(`/${this.name}`);
      const data = await response.json();
      this.data = data;
      this.ready = true;
      if (this.callback) {
        this.callback(this);
      }
    } catch (err) {
      console.log(err);
    }
  }

  setInitial(data) {
    this.data = data;
    this.ws.send(JSON.stringify({...data, player: this.name, new: true}));
  }

  set(key, value) {
    const data = {...this.data, [key]: value};
    this.data = data;
    this.ws.send(JSON.stringify({...data, player: this.name}));
  }

  get() {
    return this.data;
  }

  delete() {
    this.ws.send(JSON.stringify({channel: 'delete', player: this.name}))
  }

}

export default ServerClient;
