const PIXI = require( 'pixi.js' );

const colors = [0x468966, 0xFFF0A5, 0xFFB03B, 0xB64926, 0x8E2800];

const MAX_HEALTH = 10;
const ACCELERATION = 0.01;
const MAX_SPEED = 15;
const FIRE_INTERVAL = 100;
const TURRET_LENGTH = 27;

class SpaceShip {
  constructor(game, x, y, name, ds) {
    this.game = game;
    this.record = ds.getRecord(name);
    this.tint = colors[Math.floor(Math.random() * colors.length)];

		// container
		this.container = new PIXI.Container();
		this.container.position.x = x;
		this.container.position.y = y;

		// body
		this.body = PIXI.Sprite.fromImage(`/img/${Math.random() >= 0.5 ? 'F5S4' : 'spaceship-body'}.png`);
		this.body.tint = this.tint;
		this.body.anchor.x = 0.5;
		this.body.anchor.y = 0.5;
		this.container.addChild(this.body);

		// turret
		this.turret = PIXI.Sprite.fromImage('/img/spaceship-turret.png');
		this.turret.tint = this.tint;
		this.turret.anchor.x = 0.45;
		this.turret.anchor.y = 0.6;
		this.turret.pivot.x = 1;
		this.turret.pivot.y = 7;
		this.container.addChild(this.turret);

    // name
    this.textStyle = { fontFamily : 'Arial', fontSize: '14px', fill: 'rgb(0,255,0)', align : 'center' };
		this.text = new PIXI.Text(name, this.textStyle);
		this.text.anchor.x = 0.5;
		this.text.anchor.y = 0.5;
		this.game.stage.addChild(this.text);

    // ka boom
    this.explosion = new PIXI.extras.AnimatedSprite(global.EXPLOSION_FRAMES.map(PIXI.Texture.fromImage));
		this.explosion.anchor.x = 0.5;
		this.explosion.anchor.y = 0.5;
		this.explosion.loop = false;

    //things
    this.speed = 0;
    this.timeLastBulletFired = 0;
    this.health = MAX_HEALTH;
    this.name = name;
    this.isDestroyed = false;

    this.game.stage.addChild(this.container);

    this.game.on('update', this.update.bind(this));

  }

  checkHit(bulletPosition) {
		if(this.body.containsPoint(bulletPosition)) {
			this.body.tint = 0xFF0000;
			this.turret.tint = 0xFF0000;
      setTimeout(() => {
        this.body.tint = this.tint;
        this.turret.tint = this.tint;
      }, 500);

			this.health -= 1;

			if(this.health <= 0) {
			  this.onDestroyed();
			} else {
				const healtRemain = (this.health / MAX_HEALTH);
				const g = Math.floor(healtRemain * 255);
				const r = Math.floor((1 - healtRemain) * 255);

				// this.text.style = {...this.textStyle, fill: `rgb(${r}, ${g}, 0)`};
				this.text.style = Object.assign(this.textStyle, {fill: `rgb(${r}, ${g}, 0)`});
      }
			return true;
		}
		return false;
	}

  onDestroyed() {
    this.isDestroyed = true;
		this.game.stage.addChild(this.explosion);
		this.explosion.position.x = this.container.position.x;
		this.explosion.position.y = this.container.position.y;
		this.explosion.play();
    this.game.stage.removeChild(this.container);
  }

  remove() {
    this.game.stage.removeChild(this.explosion);
    this.game.stage.removeChild(this.text);
		this.record.delete();
  }

  update(msSinceLastFrame, currentTime) {
    const data = this.record.get();
    if(!this.record.ready || !data.bodyRotation) {
			return;
		}
    console.log(data);

    /*
      t = (vf - vi) / a
      a*t = (vf - vi)
      vf = vi + a*t

      where
        t = msSinceLastFrame
        a = ACCELERATION = 0.01
        vi = this._speed
    */
    this.speed += msSinceLastFrame * ACCELERATION * (data.moving ? 1 : -1);

    this.turret.rotation = data.turretRotation - data.bodyRotation;
    this.container.rotation = data.bodyRotation;

		if(this.speed < 0) {
		  this.speed = 0;
		} else if (this.speed > MAX_SPEED) {
      this.speed = MAX_SPEED;
    }

    this.container.position.x += Math.sin(this.container.rotation) * this.speed;
		this.container.position.y -= Math.cos(this.container.rotation) * this.speed;

    this.text.position.x = this.container.position.x;
		this.text.position.y = this.container.position.y + 45;

    if (this.container.position.x < 0) {
      this.container.position.x = 0;
    } else if (this.container.position.x > this.game.renderer.width){
      this.container.position.x = this.game.renderer.width;
    }

    if (this.container.position.y < 0) {
      this.container.position.y = 0;
    } else if (this.container.position.y > this.game.renderer.height){
      this.container.position.y = this.game.renderer.height;
    }

		if(data.shooting && currentTime > this.timeLastBulletFired + FIRE_INTERVAL) {
			const alpha = data.turretRotation;
			const x = this.container.position.x + Math.sin(alpha) * TURRET_LENGTH;
			const y = this.container.position.y - Math.cos(alpha) * TURRET_LENGTH

			this.game.bulletManager.add(x, y, alpha, this);
			this.timeLastBulletFired = currentTime;
		}

    if(this.isDestroyed) {
			if(this.explosion.currentFrame + 1 === this.explosion.totalFrames) {
				this.game.removePlayer(this.name);
			}
		}
  }
}

export default SpaceShip;
