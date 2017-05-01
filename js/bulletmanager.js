const PIXI = require( 'pixi.js' );
const SPEED = 7;

export default class BulletManager {
	constructor(game) {
		this.game = game;
		this.game.on('update', this.update.bind(this));
		this.activeBullets = [];
		this.passiveBullets = [];
		this.texture = PIXI.Texture.fromImage( '/img/bullet.png' );
	}

	add(x, y, alpha, spaceShip) {
		if( this.passiveBullets.length === 0 ) {
			this.createBullet();
		}

		const bullet = this.passiveBullets.pop();
		bullet.tint = spaceShip.tint;
		bullet.position.x = x;
		bullet.position.y = y;
		bullet.rotation = alpha;
		bullet.source = spaceShip;
		this.activeBullets.push(bullet);
	}

	update() {
    this.activeBullets.forEach((bullet, i) => {
			bullet.position.x += Math.sin(bullet.rotation) * SPEED;
			bullet.position.y -= Math.cos(bullet.rotation) * SPEED;

			if(
				bullet.position.x < 0 ||
				bullet.position.x > this.game.renderer.width ||
				bullet.position.y < 0 ||
				bullet.position.y > this.game.renderer.height
			) {
				this.recycleBullet(bullet, i);
			} else {
        this.game.spaceShips.forEach((spaceShip, index) => {
          if(spaceShip == bullet.source) return;
					if(this.game.spaceShips[index].checkHit(bullet.position)) {
						this.recycleBullet(bullet, i);
					}
        });
			}
    });
	}

	recycleBullet(bullet, i) {
		bullet.position.x = -50;
		bullet.position.y = -50;
		bullet.rotation = 0;
		bullet.source = null;
		this.activeBullets.splice(i, 1);
		this.passiveBullets.push(bullet);
	}

	createBullet() {
		const bullet = new PIXI.Sprite(this.texture);
		bullet.position.x = -50;
		bullet.position.y = -50;
		bullet.anchor.x = 0.5;
		bullet.anchor.y = 0.5;
		bullet.rotation = 0;
		this.passiveBullets.push(bullet);
		this.game.stage.addChild(bullet);
	}
}
