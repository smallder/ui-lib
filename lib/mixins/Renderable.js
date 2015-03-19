/**
 * Renderable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Renderable = function(name) {};

lib.mixins.Renderable.mixinId = 'Renderable';

lib.apply(lib.mixins.Renderable.prototype, {
	renderer: null,
	setRenderer: function(renderer) {
		var prevRenderer = this.renderer || function() {};
		this.renderer = function() {
			return renderer.call(this, prevRenderer.call(this));
		};
	}
});
