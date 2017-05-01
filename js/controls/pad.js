import $ from 'jquery';

function Pad (type) {
	this.type = type;

	this.record = null;

	this.radius = null;

	this.cX = null;
	this.cY = null;

	this.rotationType = (type === 'move' ? 'body' : 'turret') + 'Rotation';

	this.activeType = type === 'move' ? 'moving' : 'shooting';

	this.pad = $('.pad.' + type);
	this.area = this.pad.find('.area');
	this.angleIndicator = this.pad.find('.angle-indicator');

	this.area.on('touchstart mousedown', this.onStart.bind(this));
	this.area.on('mousedown mousemove', this.onMouse.bind(this));
	this.area.on('touchstart touchmove', this.onTouch.bind(this));
	this.area.on('mouseup touchend', this.onEnd.bind(this));
}

Pad.prototype.setRecord = function(record) {
	this.record = record;
}

Pad.prototype.setSize = function() {
	const width = this.pad.width();
	const height = this.pad.height();
	const diameter = Math.min(width, height) - 40;

	this.area.css({
		width: diameter,
		height: diameter,
		marginTop: (height - diameter) / 2
	});

	this.radius = diameter / 2;
	this.cX = this.area.offset().left + this.radius;
	this.cY = this.area.offset().top + this.radius;
}

Pad.prototype.onStart = function (event) {
	event.preventDefault();
	this.record.set(this.activeType, true);
}

Pad.prototype.onMouse = function (event) {
	this.setAngle(this.radius, this.radius, event.offsetX, event.offsetY);
}

Pad.prototype.onTouch = function (event) {
	event.preventDefault();
	const touch = event.targetTouches[0];
	if(touch) {
		this.setAngle(this.cX, this.cY, touch.screenX, touch.screenY);
	}
}

Pad.prototype.setAngle = function (cX, cY, pX, pY) {
	const angle =  Math.PI / 2 + Math.atan2(pY - cY, pX - cX);
	this.angleIndicator.css('transform', 'rotate(' + angle + 'rad)');
	this.record.set(this.rotationType, angle);
}

Pad.prototype.onEnd = function() {
	this.record.set(this.activeType, false);
}

export default Pad;
