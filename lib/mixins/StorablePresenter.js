/**
 * Storable Presenter mixin
 */

lib.ns('lib.mixins');

lib.mixins.StorablePresenter = {
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
	 * Init mixin
	 */
	storablePresenterInit: function() {
		this.connectors['StorablePresenter'] = function() {
			var def = new lib.Deferred();
			var self = this;
			
			lib.when(
				this.store && this.store.load()
			).then(function(success, message) {
				def.resolve(success, message);
			})
			
			return def;
		};
	},
	
	/**
	 * Sets a store
	 * @param {lib.model.Base} store Store instance
	 */
	setStore: function(store) {
		this.store = store;
		this.store.on('update', this.sync, this);
	}
};
