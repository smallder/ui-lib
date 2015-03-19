/**
 * Listable Presenter mixin
 */

lib.ns('lib.mixins');

lib.mixins.ListablePresenter = function(name) {};

lib.mixins.ListablePresenter.mixinId = 'ListablePresenter';

lib.apply(lib.mixins.ListablePresenter.prototype, {
	listPosition: 0,
	listPositionStart: 0,
	listPositionMin: 0,
	listDargStart: 0,
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
				this.view.setPosition(this.listPosition);
				break;
				
			case 'dragend':
				break;
		}
	}
});
