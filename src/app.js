import Dom from './dom';
import EventHandler from './eventHandler';
import './scss/style.scss';

HTMLElement.prototype.addReadingPositionBar = function(options){
    Dom.createDoms(this)
    EventHandler.setEvent()

    if ('bgColor' in options) {
        Dom.setBgColor(options.bgColor)
    }
    if ('showText' in options && options.showText === false) {
        Dom.disableText()
    }
    if ('barWidth' in options) {
        Dom.setBarWidth(options.barWidth)
    }
    if ('right' in options) {
        Dom.setBarRight(options.right)
    }
    if ('zIndex' in options) {
        Dom.setZIndex(options.zIndex)
    }
};
