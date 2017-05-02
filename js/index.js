import Game from './game'
import loader from './loader';
import Spaceship from './spaceship';
import ServerClient from './server-client';
// const deepstream = require('deepstream.io-client-js')

const SERVER_URL = '<%= @scheme %>' + location.host;

const sc = new ServerClient(SERVER_URL);
loader.load(sc, () => {
  new Game(document.body, sc);
});
