/**
 * Storable Presenter mixin
 */

lib.ns('lib.mixins');

/**
 * StorablePresenter mixin constructor
 * @param {String} name This mixin name
 */
lib.mixins.StorablePresenter = function(name) {
	this.connectors[name] = function() {
		var def = new lib.Deferred();
		var self = this;
		
		lib.when(
			this.store && this.store.load()
		).then(function(success, message) {
			def.resolve(success, message);
		})
		
		return def;
	}
};

lib.mixins.StorablePresenter.mixinId = 'StorablePresenter';

lib.apply(lib.mixins.StorablePresenter.prototype, {
	/**
	 * @property {Object} connectors
	 * Presenter connectors (inherited from lib.presenter.Base)
	 */
	
	/**
	 * @property {lib.model.Base} store
	 * Store instance
	 */
	store: null,
	
	/**
	 * Sets a store
	 * @param {lib.model.Base} store Store instance
	 */
	setStore: function(store) {
		this.store = store;
		this.store.on('update', this.sync, this);
	}
});
