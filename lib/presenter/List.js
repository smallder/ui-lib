/**
 * List presenter
 */

lib.ns('lib.presenter');

lib.presenter.List = lib.extends(lib.presenter.Select, {
	getViewInstance: function(config) {
		return new lib.view.List(config);
	}
});