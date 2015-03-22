/**
 * Renderable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Renderable = {
	/**
	 * @property {Function} renderer
	 * Renderer
	 */
	renderer: function() {},
	
	/**
	 * Push a new renderer to the stack
	 * @param {Function} renderer Renderer implementation
	 * @param {Array} args Renderer arguments
	 * @param {Boolean} prepend Preppend to previous (append by default)
	 */
	setRenderer: function(renderer, args, prepend) {
		var prevRenderer = this.renderer;
		this.renderer = function() {
			if (!prepend) {
				prevRenderer.apply(this, arguments);
			}
			
			renderer.apply(this, args || []);
			
			if (prepend) {
				prevRenderer.apply(this, arguments);
			}
		};
	},
	
	/**
	 * Calls a renderers stack
	 */
	render: function() {
		this.renderer.apply(this, arguments);
	}
};
