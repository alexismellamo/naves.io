import Game from './game'
import loader from './loader';
import Spaceship from './spaceship';
import ServerClient from './server-client';
// const deepstream = require('deepstream.io-client-js')

const SERVER_URL = 'wss:///';
const sc = new ServerClient(SERVER_URL);
loader.load(sc, () => {
  new Game(document.body, sc);
});
// const ds = deepstream('ws://b7a2eef1.ngrok.io')
// loader.load(ds, () => {
//   new Game(document.body, ds);
// })
