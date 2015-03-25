/**
 * @var {Object} Root namespace of framework
 */
var lib = (function() {
	/**
	 * @var {Integer} id
	 * Unique ID counter
	 */
	var id = 0;
	
	/**
	 * Lookup in chain of prototypes of method with given name (from the current instance context) and call it
	 * @param {String} method Parents method name
	 * @param {Array} args Method arguments
	 */
	var callParent = function(method, args) {
		var prototype = this.constructor.prototype;
		var caller = this.callParent.caller;
		var context = this.constructor.prototype;
		do {
			var stop = context.hasOwnProperty(method) && context[method] === caller;
			context = context.constructor.superClass;
		} while(context && !stop);
		
		return context ? context[method].apply(this, args || []) : undefined;
	};
	
	return {
		/**
		 * Extends child with a parent
		 * @param {Function} child Child constructor
		 * @param {Function} parent Parent constructor
		 * @param {Object} overrides Child members to override/add
		 * @return {Function} Child constructor
		 */
		extends: function(child, parent, overrides) {
			// for extends(parent, overrides)
			if (arguments.length == 2 && typeof parent == 'object') {
				overrides = parent;
				parent = child;
				child = undefined;
			}
			
			if (typeof overrides != 'object') {
				overrides = {};
			}
			
			if (child === undefined) {
				child = overrides.hasOwnProperty('constructor')
					? overrides.constructor
					: function() {
						this.callParent('constructor', arguments);
					};
			}
			
			var donor = function() {};
			donor.prototype = parent.prototype;
			child.superClass = parent.prototype;
			child.prototype = new donor();
			child.prototype.constructor = child;
			
			for (var key in overrides) {
				if (key == 'constructor') {
					continue;
				}
				if (overrides.hasOwnProperty(key)) {
					child.prototype[key] = overrides[key];
				}
			}
			
			child.prototype.callParent = callParent;
			
			return child;
		},
		
		/**
		 * Adds mixins to the target
		 * @param {Function} target Target constructor
		 * @param {Function} mixin[] Mixins
		 */
		mixin: function(target) {
			var mixins = Array.prototype.slice.call(arguments, 1);
			
			for (var i = 0, len = mixins.length; i < len; i++) {
				var mixin = mixins[i];
				for (var key in mixin) {
					if (key == 'constructor') {
						continue;
					}
					if (target.prototype[key] === undefined) {
						target.prototype[key] = mixin[key];
					}
				}
			}
		},
		
		/**
		 * Apply properties from source to target
		 * @param {Object} target Target object
		 * @param {Object} source Source object
		 * @param {Object} defaults Default values
		 * @return {Object}
		 */
		apply: function(target, source, defaults) {
			if (target === undefined) {
				target = {};
			}
			
			if (typeof defaults == 'object') {
				this.apply(target, defaults);
			}
			
			if (typeof target == 'object' && typeof source == 'object') {
				for (var key in source) {
					if (source.hasOwnProperty(key)) {
						target[key] = source[key];
					}
				}
			}
			
			return target;
		},
		
		/**
		 * Override properties from source to target
		 * @param {Object} target Target object
		 * @param {Object} source Source object
		 * @param {Object} defaults Default values
		 * @return {Object}
		 */
		override: function(target, source, defaults) {
			if (typeof defaults == 'object') {
				this.override(target, defaults);
			}
			
			if (typeof target == 'object' && typeof source == 'object') {
				for (var key in source) {
					if (source.hasOwnProperty(key)
						&& typeof target[key] !== 'undefined'
					) {
						target[key] = source[key];
					}
				}
			}
			
			return target;
		},
		
		/**
		* Initialize namespace
		* @param {String} namespace Namespace
		* @return {Object}
		*/
		ns: function(namespace) {
			var obj = window;
			var parts = namespace.split('.');
			for (var i = 0, length = parts.length; i < length; i++) {
				var name = parts[i];
				obj = obj[name] = obj[name] || {};
			};
			
			return obj;
		},
		
		/**
		* Provide drag events
		* @param {jQuery} domElement DOM element
		* @return {Object}
		*/
		setDraggable: function(domElement) {
			var state = '';
			var setState = function(action, event) {
				switch (action) {
					case 'hold':
						state = 'wait';
						break;
					case 'move':
						if (state == 'wait') {
							trigger('dragstart', event);
							state = 'drag';
						} else if (state == 'drag') {
							trigger('drag', event);
						}
						break;
					case 'release':
						if (state == 'drag') {
							trigger('dragend', event);
						}
						state = '';
						break;
				}
			};
			var trigger = function(eventType, event) {
				event.type = eventType;
				domElement.trigger(event);
			};
			
			domElement.on({
				mousedown: function(event) {
					setState('hold', event);
				},
				mousemove: function(event) {
					setState('move', event);
				},
				mouseleave: function(event) {
					setState('release', event);
				},
				mouseup: function(event) {
					setState('release', event);
				}
			});
		},
		
		/**
		* Deferred constructor
		* @return {jQuery.Deferred}
		*/
		Deferred: $.Deferred,
		
		/**
		* Deferred callback
		* @return {Function}
		*/
		when: $.when,
		
		/**
		 * Return unique id
		 * @param {String} Prefix
		 * @return {String}
		 */
		getId: function(prefix) {
			return (prefix || '') + id++;
		}
	};
})();
