import EXPLOSION_FRAMES from './explosionframes';
const PIXI = require('pixi.js');

class Loader {
	constructor() {
		this.connectionReady = false;
		this.callback = null;

    this.assetLoader = new PIXI.loaders.Loader();
		this.assetLoader.add('/img/spaceship-body.png');
		this.assetLoader.add('/img/spaceship-turret.png');
		this.assetLoader.add('/img/bullet.png');

    this.addExplosionFrames();

		this.assetLoader.once('complete', this.onImagesLoaded.bind(this));
	}

	load(cs, callback) {
		this.callback = callback;
    this.assetLoader.load();
    cs.onLogin(this.onLoggedIn.bind(this));
	}

  addExplosionFrames() {
    EXPLOSION_FRAMES.forEach(url => this.assetLoader.add(url));
  }

  onImagesLoaded() {
    this.imagesReady = true;
		this.checkReady();
  }

	onLoggedIn() {
		this.connectionReady = true;
		this.checkReady();
	}

	checkReady() {
		if(this.connectionReady && this.imagesReady) {
			this.callback();
		}
	}
}

export default new Loader();
