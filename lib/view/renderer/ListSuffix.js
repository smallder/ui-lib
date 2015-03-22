/**
 * Renderer that creates List with suffixes
 */

lib.ns('lib.view.renderer');

/**
 * Creates suffix for each item of list
 * @param {String} suffixField Field to use as suffix
 */
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
