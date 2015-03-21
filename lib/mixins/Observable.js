/**
 * Observable mixin
 */

lib.ns('lib.mixins');

/**
 * Observable mixin constructor
 */
lib.mixins.Observable = function() {
	this.listeners = [];
};

lib.mixins.Observable.mixinId = 'Observable';

lib.apply(lib.mixins.Observable.prototype, {
	/**
	 * @property {Array} listeners
	 * Events listeners
	 */
	listeners: [],
	
	/**
	 * Appends an event listener
	 * @param {String} event Event type
	 * @param {Function} handler Event handler
	 * @param {Object} scope Context
	 */
	on: function(event, handler, scope) {
		if (this.listeners[event] === undefined) {
			this.listeners[event] = [];
		}
		
		this.listeners[event].push({
			handler: handler,
			scope: scope
		})
	},
	
	/**
	 * Removes an event listener
	 * @param {String} event Event type
	 * @param {Function} handler Event handler
	 */
	un: function(event, handler) {
		if (this.listeners[event] === undefined) {
			return;
		}
		
		for (var i = 0, len = this.listeners[event].length; i < len; i++) {
			if (this.listeners[event][i].handler === handler) {
				this.listeners[event][i] = {};
			}
		}
	},
	
	/**
	 * Calls all handlers of the event
	 * @param {String} event Event type
	 */
	fire: function(event) {
		if (this.listeners[event] === undefined) {
			return;
		}
		
		for (var i = 0, len = this.listeners[event].length; i < len; i++) {
			if (this.listeners[event][i].handler) {
				this.listeners[event][i].handler.apply(
					this.listeners[event][i].scope || this,
					arguments
				);
			}
		}
	}
});
