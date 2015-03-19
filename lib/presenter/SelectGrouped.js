/**
 * Select Grouped presenter
 */

lib.ns('lib.presenter');

lib.presenter.SelectGrouped = lib.extends(lib.presenter.Select, {
});

lib.mixin(
	lib.presenter.SelectGrouped,
	lib.mixins.Groupable
);