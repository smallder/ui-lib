/**
 * Base presenter
 */

lib.ns('lib.presenter');

lib.presenter.Base = lib.extends(lib.Object, {
	model: null,
	view: null,
	connectors: {},
	readyState: null,
	constructor: function(view) {
		this.callParent('constructor', arguments);
		
		this.view = view;
		
		this.readyState = new lib.Deferred();
	},
	ready: function() {
		return this.readyState;
	},
	connect: function() {
		var self = this;
		
		var defers = [this.model.load()];
		for(var key in this.connectors) {
			defers.push(this.connectors[key].call(this));
		}
		lib.when.apply($, defers).then(function(success, message) {
			self.readyState.resolve(success, message);
		});
	},
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
	sync: function() {
		this.view.render();
	},
	getModel: function() {
		return this.model;
	},
	setModel: function(model) {
		this.model = model;
		this.model.on('update', this.sync, this);
	}
});
