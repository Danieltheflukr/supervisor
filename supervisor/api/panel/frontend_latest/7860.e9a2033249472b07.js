export const ids=["7860"];export const modules={73729:function(i,e,t){t.d(e,{i:()=>p});var o=t(44249),a=t(72621),r=t(74966),n=t(51408),s=t(57243),d=t(50778),l=t(8338);t(23043);const c=["button","ha-list-item"],p=(i,e)=>s.dy` <div class="header_title"> <ha-icon-button .label="${i?.localize("ui.dialogs.generic.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> <span>${e}</span> </div> `;(0,o.Z)([(0,d.Mo)("ha-dialog")],(function(i,e){class t extends e{constructor(...e){super(...e),i(this)}}return{F:t,d:[{kind:"field",key:l.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,e){this.contentElement?.scrollTo(i,e)}},{kind:"method",key:"renderHeading",value:function(){return s.dy`<slot name="heading"> ${(0,a.Z)(t,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,a.Z)(t,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(t,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,s.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),r.M)},77333:function(i,e,t){t.r(e),t.d(e,{HaImagecropperDialog:()=>p});var o=t(44249),a=(t(75656),t(50100),t(18084),t(31622),t(65509)),r=t.n(a),n=t(93528),s=t(57243),d=t(50778),l=t(35359),c=(t(73729),t(28008));let p=(0,o.Z)([(0,d.Mo)("image-cropper-dialog")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,d.IO)("img",!0)],key:"_image",value:void 0},{kind:"field",key:"_cropper",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_isTargetAspectRatio",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._params=i,this._open=!0}},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._params=void 0,this._cropper?.destroy(),this._cropper=void 0,this._isTargetAspectRatio=!1}},{kind:"method",key:"updated",value:function(i){i.has("_params")&&this._params&&(this._cropper?this._cropper.replace(URL.createObjectURL(this._params.file)):(this._image.src=URL.createObjectURL(this._params.file),this._cropper=new(r())(this._image,{aspectRatio:this._params.options.aspectRatio,viewMode:1,dragMode:"move",minCropBoxWidth:50,ready:()=>{this._isTargetAspectRatio=this._checkMatchAspectRatio(),URL.revokeObjectURL(this._image.src)}})))}},{kind:"method",key:"_checkMatchAspectRatio",value:function(){const i=this._params?.options.aspectRatio;if(!i)return!0;const e=this._cropper.getImageData();if(e.aspectRatio===i)return!0;if(e.naturalWidth>e.naturalHeight){const t=e.naturalWidth/i;return Math.abs(t-e.naturalHeight)<=1}const t=e.naturalHeight*i;return Math.abs(t-e.naturalWidth)<=1}},{kind:"method",key:"render",value:function(){return s.dy`<ha-dialog @closed="${this.closeDialog}" scrimClickAction escapeKeyAction .open="${this._open}"> <div class="container ${(0,l.$)({round:Boolean(this._params?.options.round)})}"> <img alt="${this.hass.localize("ui.dialogs.image_cropper.crop_image")}"> </div> <mwc-button slot="secondaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.common.cancel")} </mwc-button> ${this._isTargetAspectRatio?s.dy`<mwc-button slot="primaryAction" @click="${this._useOriginal}"> ${this.hass.localize("ui.dialogs.image_cropper.use_original")} </mwc-button>`:s.Ld} <mwc-button slot="primaryAction" @click="${this._cropImage}"> ${this.hass.localize("ui.dialogs.image_cropper.crop")} </mwc-button> </ha-dialog>`}},{kind:"method",key:"_cropImage",value:function(){this._cropper.getCroppedCanvas().toBlob((i=>{if(!i)return;const e=new File([i],this._params.file.name,{type:this._params.options.type||this._params.file.type});this._params.croppedCallback(e),this.closeDialog()}),this._params.options.type||this._params.file.type,this._params.options.quality)}},{kind:"method",key:"_useOriginal",value:function(){this._params.croppedCallback(this._params.file),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[c.yu,s.iv`${(0,s.$m)(n)} .container{max-width:640px}img{max-width:100%}.container.round .cropper-face,.container.round .cropper-view-box{border-radius:50%}.cropper-line,.cropper-point,.cropper-point.point-se::before{background-color:var(--primary-color)}`]}}]}}),s.oi)}};
//# sourceMappingURL=7860.e9a2033249472b07.js.map