/**
 * List presenter
 */

lib.ns('lib.presenter');

lib.presenter.List = lib.extends(lib.presenter.Select, {
	/**
	 * General handler of events
	 * @param {String} eventType Event type
	 * @param {jQuery.Event} event Event
	 */
	handleEvent: function(eventType, event) {
		this.listEventHandler(eventType, event);
	}
});

lib.mixin(
	lib.presenter.List,
	lib.mixins.ListablePresenter
);