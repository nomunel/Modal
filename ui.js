'use strict';

/*
 * ModalWindow
 */
(function(global, document){
var fn;
global.ModalWindow = function(){
    this.init.apply(this, arguments);
}
fn = global.ModalWindow.prototype;
fn.init = function(element, maskElm, topVal){
    var self = this,
        i, il;
    self.element = element;
    if (typeof element === 'string') {
        self.element = document.querySelector(element);
    }
    self.maskElm = document.querySelector(maskElm);
    self.topVal = topVal;
}
fn.setOpen = function(openElms){
    var self = this,
        elms = document.querySelectorAll(openElms),
        i, il;
    for(i=0, il=elms.length; i<il; i++){
        elms[i].addEventListener('click', self.modalOpen.bind(self), false);
    }
}
fn.setClose = function(closeElms){
    var self = this,
        elms = document.querySelectorAll(closeElms),
        i, il;
    for(i=0, il=elms.length; i<il; i++){
        elms[i].addEventListener('click', self.modalClose.bind(self), false);
    }
}
fn.modalOpen = function(){
    var self = this;
    self.element.style.display = 'block';
    self.maskElm.style.display = 'block';
    self.maskElm.style.height = document.body.scrollHeight + 'px';
    if(self.topVal != false){
        self.element.style.top = document.body.scrollTop + self.topVal + 'px';
    }

}
fn.modalClose = function(){
    var self = this;
    self.element.style.display = 'none';
    self.maskElm.style.display = 'none';
}
})(this, this.document);
