/**
 * Base presenter
 */

lib.ns('lib.presenter');

lib.presenter.Base = lib.extends(lib.Object, {
	/**
	 * @property {lib.model.Base} model
	 * Model instance
	 */
	model: null,
	
	/**
	 * @property {lib.view.Base} view
	 * View instance
	 */
	view: null,
	
	/**
	 * @property {Object} connectors
	 * Async connectors
	 */
	connectors: {},
	
	/**
	 * @property {lib.Deferred} readyState
	 * Presenter ready state holder
	 */
	readyState: null,
	
	/**
	 * Presenter constructor
	 * @param {lib.view.Base} view View instance
	 */
	constructor: function(view) {
		this.callParent('constructor', arguments);
		
		this.view = view;
		
		this.readyState = new lib.Deferred();
	},
	
	/**
	 * Presenters ready deferred callback
	 * @return {lib.Deferred}
	 */
	ready: function() {
		return this.readyState;
	},
	
	/**
	 * Calls all presenter connectors
	 */
	connect: function() {
		var self = this;
		
		var defers = [this.model.load()];
		for (var key in this.connectors) {
			defers.push(this.connectors[key].call(this));
		}
		lib.when.apply($, defers).then(function(success, message) {
			self.readyState.resolve(success, message);
		});
	},
	
	/**
	 * Starts presenter flow
	 */
	startUp: function() {
		var self = this;
		lib.when(
			this.ready()
		).then(function(success, message) {
			if (success) {
				self.sync();
			} else {
				self.view.showError(message);
			}
		});
	},
	
	/**
	 * Sets presenter to actual state
	 */
	sync: function() {
		this.view.render();
	},
	
	/**
	 * Returns presenter model
	 * @return {lib.model.Base}
	 */
	getModel: function() {
		return this.model;
	},
	
	/**
	 * Sets presenter model
	 * @param {lib.model.Base} model Model instance
	 */
	setModel: function(model) {
		this.model = model;
		this.model.on('update', this.sync, this);
	},
	
	/**
	 * General handler of events
	 * @param {String} eventType Event type
	 * @param {jQuery.Event} event Event
	 */
	handleEvent: function(eventType, event) {}
});
