"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["622"],{89679:function(t,e,o){o.r(e);o(26847),o(27530);var i=o(73742),a=o(59048),d=o(7616),n=o(83378),r=(o(23753),o(95814)),l=o(8498);let s,c,p=t=>t;class h extends a.oi{showDialog(t){this.title=t.title,this.content=t.content,this._opened=!0}closeDialog(){this._opened=!1}render(){return this._opened?(0,a.dy)(s||(s=p` <ha-dialog open @closed="${0}" .heading="${0}" hideactions> <ha-markdown .content="${0}" dialogInitialFocus></ha-markdown> </ha-dialog> `),this.closeDialog,(0,n.i)(this.hass,this.title),this.content||""):a.Ld}static get styles(){return[r.yu,l.l,(0,a.iv)(c||(c=p`@media all and (max-width:450px),all and (max-height:500px){ha-markdown{padding:16px}}`))]}constructor(...t){super(...t),this._opened=!1}}(0,i.__decorate)([(0,d.Cb)({attribute:!1})],h.prototype,"hass",void 0),(0,i.__decorate)([(0,d.Cb)()],h.prototype,"title",void 0),(0,i.__decorate)([(0,d.Cb)()],h.prototype,"content",void 0),(0,i.__decorate)([(0,d.SB)()],h.prototype,"_opened",void 0),h=(0,i.__decorate)([(0,d.Mo)("dialog-hassio-markdown")],h)},83378:function(t,e,o){o.d(e,{i:()=>g});o(26847),o(27530),o(44776);var i=o(73742),a=o(24004),d=o(75907),n=o(59048),r=o(7616);o(60115),o(81777);let l,s,c,p=t=>t;const h=["button","ha-list-item"],g=(t,e)=>{var o;return(0,n.dy)(l||(l=p` <div class="header_title"> <ha-icon-button .label="${0}" .path="${0}" dialogAction="close" class="header_button"></ha-icon-button> <span>${0}</span> </div> `),null!==(o=null==t?void 0:t.localize("ui.common.close"))&&void 0!==o?o:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",e)};class m extends a.M{scrollToPos(t,e){var o;null===(o=this.contentElement)||void 0===o||o.scrollTo(t,e)}renderHeading(){return(0,n.dy)(s||(s=p`<slot name="heading"> ${0} </slot>`),super.renderHeading())}firstUpdated(){var t;super.firstUpdated(),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(t=this.contentElement)||void 0===t||t.addEventListener("scroll",this._onScroll,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.contentElement.removeEventListener("scroll",this._onScroll)}_updateScrolledAttribute(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}constructor(...t){super(...t),this._onScroll=()=>{this._updateScrolledAttribute()}}}m.styles=[d.W,(0,n.iv)(c||(c=p`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`))],m=(0,i.__decorate)([(0,r.Mo)("ha-dialog")],m)}}]);
//# sourceMappingURL=622.f07bf678ecd9b646.js.map