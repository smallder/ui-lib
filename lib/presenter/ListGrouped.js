/**
 * List presenter
 */

lib.ns('lib.presenter');

lib.presenter.ListGrouped = lib.extends(lib.presenter.List, {
});

lib.mixin(
	lib.presenter.ListGrouped,
	lib.mixins.Groupable
);
