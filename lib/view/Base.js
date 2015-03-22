/**
 * Base view
 */

lib.ns('lib.view');

lib.view.Base = lib.extends(lib.Object, {
	/**
	 * @property {lib.presenter.Base} presenter
	 * Presenter instance
	 */
	presenter: null,
	
	/**
	 * @property {jQuery} domElement
	 * Base DOM element
	 */
	domElement: null,
	
	/**
	 * @property {String} parentElementSelector
	 * Parent dom element selector (a.k.a. Wrapper)
	 */
	parentElementSelector: '',
	
	/**
	 * View constructor
	 * @param {Object} config View config
	 */
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		lib.override(this, config);
		
		this.setDomElement(this.getDomElementInstance());
		
		this.renderer = this.defaultRenderer;
		
		this.presenter = this.getPresenterInstance();
	},
	
	/**
	 * Creates the DOM element instance
	 * @return {jQuery}
	 */
	getDomElementInstance: function() {
		return $('<div/>');
	},
	
	/**
	 * Sets DOM element instance
	 * @param {jQuery} domElement DOM element instance
	 */
	setDomElement: function(domElement) {
		this.domElement = domElement;
		this.bindEventsHandlers();
	},
	
	/**
	 * Returns event types that view must send to the presenter
	 * @return {Array}
	 */
	getEventsToBind: function() {
		return [];
	},
	
	/**
	 * Binds DOM element evend handlers and sends these to the view
	 */
	bindEventsHandlers: function() {
		var eventsToBind = this.getEventsToBind();
		if (!eventsToBind.length) {
			return;
		}
		var self = this;
		this.domElement.on(
			eventsToBind.join(' '),
			function(event) {
				self.presenter.handleEvent(event.type, event);
			}
		);
	},
	
	/**
	 * Creates the presenter instance
	 * @return {lib.presenter.Base}
	 */
	getPresenterInstance: function() {
		return new lib.presenter.Base(this);
	},
	
	/**
	 * Returns presenter instance
	 * @return {lib.presenter.Base}
	 */
	getPresenter: function() {
		return this.presenter;
	},
	
	/**
	 * Default view renderer
	 */
	defaultRenderer: function() {
		this.domElement.appendTo(this.parentElementSelector);
	},
	
	/**
	 * Renders view wrapper
	 */
	renderWrapper: function(componentId) {
		document.write('<div class="component-wrapper" id="' + componentId + '"></div>');
		this.parentElementSelector = '#' + componentId;
	}
});

lib.mixin(lib.view.Base, lib.mixins.Renderable);

