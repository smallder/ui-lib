/**
 * Objects manager with lazy initializtion
 */
lib.Manager = lib.extends(lib.Object, {
	/**
	 * @property {Object} items
	 * Objects registry
	 */
	items: {},
	
	/**
	 * Register an object
	 * @param {String} id Object ID
	 * @param {Function} constructorClass Object constructor
	 * @param {Array} constructorArguments Constructor arguments
	 */
	register: function(id, constructorClass, constructorArguments) {
		if (this.items[id] !== undefined) {
			throw 'Item "' + id + '" is already registered';
		}
		
		this.items[id] = {
			constructor: constructorClass,
			arguments: constructorArguments,
			instance: null
		};
	},
	
	/**
	 * Returns the object instance
	 * @param {String} id Object ID
	 * @return {Object}
	 */
	getInstance: function(id) {
		if (this.items[id] === undefined) {
			throw 'Item "' + id + '" is not registered';
		}
		var item = this.items[id];
		if (item.instance === null) {
			item.instance = new item.constructor(item.arguments);
		}
		
		return item.instance;
	}
});
