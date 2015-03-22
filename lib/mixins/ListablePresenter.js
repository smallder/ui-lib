/**
 * Listable Presenter mixin
 */

lib.ns('lib.mixins');

lib.mixins.ListablePresenter = {
	/**
	 * @property {lib.view.List} view
	 * View instance (inherited from lib.presenter.Base)
	 */
	
	/**
	 * @property {Integer} listPosition
	 * Current list position
	 */
	listPosition: 0,
	
	/**
	 * @property {Integer} listPositionStart
	 * List position before drag start
	 */
	listPositionStart: 0,
	
	/**
	 * @property {Integer} listPositionMin
	 * Minimal list position possible
	 */
	listPositionMin: 0,
	
	/**
	 * @property {Integer} listDargStart
	 * List Y-axis coordinate before drag start
	 */
	listDargStart: 0,
	
	/**
	 * List event handler that calculates and sets a new position
	 * @param {String} eventType Event type
	 * @param {jQuery.Event} event Event
	 */
	listEventHandler: function(eventType, event) {
		switch(eventType) {
			case 'dragstart':
				this.listDargStart = event.pageY;
				this.listPositionStart = this.listPosition;
				this.listPositionMin = this.view.getHeight() - this.view.getListHeight();
				break;
				
			case 'drag':
				var offset = event.pageY - this.listDargStart;
				this.listPosition = Math.min(
					0,
					Math.max(
						this.listPositionStart + offset,
						this.listPositionMin
					)
				);
				this.view.setListPosition(this.listPosition);
				break;
				
			case 'dragend':
				break;
		}
	}
};
