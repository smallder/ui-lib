/**
 * Base view
 */

lib.ns('lib.view');

lib.view.Base = lib.extends(lib.Object, {
	presenter: null,
	domElement: null,
	parentElementSelector: '',
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		lib.override(this, config);
		
		this.renderer = this.defaultRenderer;
		
		this.domElement = this.getDomElementInstance();
		
		this.presenter = this.getPresenterInstance();
	},
	getDomElementInstance: function() {
		return $('<div/>');
	},
	getPresenterInstance: function() {
		return new lib.presenter.Base(this);
	},
	getPresenter: function() {
		return this.presenter;
	},
	defaultRenderer: function() {
		this.domElement.appendTo(this.parentElementSelector);
	},
	renderWrapper: function(componentId) {
		document.write('<div class="component-wrapper" id="' + componentId + '"></div>');
		this.parentElementSelector = '#' + componentId;
		
		lib.Application.getInstance().on('ready', function() {
			this.presenter.startUp();
		}, this);
	}
});


lib.mixin(lib.view.Base, lib.mixins.Renderable);
