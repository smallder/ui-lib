/**
 * Renderer to create List with suffixes
 */

lib.ns('lib.view.renderer');

lib.view.renderer.ListSuffix = function(suffixField) {
	var self = this;
	
	this.domElement.find('li.item').each(function() {
		var item = $(this).data('item');
		$('<span/>')
			.addClass('item-suffix')
			.html(item[suffixField])
			.appendTo(this);
	});
};