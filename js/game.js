import SpaceShip from './spaceship';
import BulletManager from './bulletmanager';
const PIXI = require( 'pixi.js' );
const EventEmitter = require( 'events' ).EventEmitter;

class Game extends EventEmitter {
  constructor(element, sc) {
    super();
    this.stage = new PIXI.Container();
    this.sc = sc;
    this.renderer = PIXI.autoDetectRenderer(
      window.innerWidth,
      window.innerHeight,
      { transparent: true },
      false
    );
    this.spaceShips = [];
    this.lastFrameTime = 0;

    this.bulletManager = new BulletManager(this);

    element.appendChild(this.renderer.view);
    requestAnimationFrame(this.tick.bind(this));

		// sc.event.listen('status/.*', this.playerOnlineStatusChanged.bind(this));
    this.sc.onNewPlayer(this.addPlayer.bind(this));
  }

  tick(currentTime) {
    this.emit('update', currentTime - this.lastFrameTime, currentTime);
    this.lastFrameTime = currentTime;
    this.renderer.render(this.stage);
    requestAnimationFrame(this.tick.bind(this));
  }

  playerOnlineStatusChanged(match, isSubscribed) {
		const name = match.replace('status/', '');

		if(isSubscribed) {
			this.addPlayer(name);
		} else {
			this.removePlayer(name);
		}
	}

  addPlayer(name) {
    if (!this.spaceShips.some((space) => space.name === name)) {
		  const x = this.renderer.width * (0.1 + Math.random() * 0.8);
		  const y = this.renderer.height * (0.1 + Math.random() * 0.8);
		  this.spaceShips = [...this.spaceShips, new SpaceShip(this, x, y, name, this.sc)];
    }
	}

  removePlayer(name) {
    const speceshipToRemove = this.spaceShips.find(spaceship => spaceship.name === name);
    if(speceshipToRemove) {
      speceshipToRemove.remove();
      this.spaceShips = this.spaceShips.filter(spaceship => spaceship.name !== name);
    }
	}

}

export default Game;
