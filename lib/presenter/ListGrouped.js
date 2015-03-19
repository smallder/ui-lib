/**
 * List presenter
 */

lib.ns('lib.presenter');

lib.presenter.ListGrouped = lib.extends(lib.presenter.SelectGrouped, {
	handleEvent: function(eventType, event) {
		this.listEventHandler(eventType, event);
	}
});

lib.mixin(
	lib.presenter.ListGrouped,
	lib.mixins.Groupable,
	lib.mixins.ListablePresenter
);
