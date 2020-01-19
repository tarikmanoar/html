if (self.CavalryLogger) { CavalryLogger.start_js(["Yjqxt"]); }

__d('PopoverMenu.react',['cx','CSS','InlineBlock.react','Popover','PopoverMenu','React','ReactDOM','SubscriptionsHandler','joinClasses','areEqual','setImmediate'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$ReactPopoverMenu1=null,this.$ReactPopoverMenu6=function(){if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null}this.$ReactPopoverMenu7();this.$ReactPopoverMenu3.setMenu(this.$ReactPopoverMenu4(this.props.menu));this.$ReactPopoverMenu5()}.bind(this),this.$ReactPopoverMenu4=function(r){var s=r.props,t=new r.type(s);this.$ReactPopoverMenu1=new (c('SubscriptionsHandler'))();if(s.onItemClick)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('itemclick',s.onItemClick));if(s.onItemFocus)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('focus',s.onItemFocus));if(s.onItemBlur)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('blur',s.onItemBlur));if(s.onChange)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('change',s.onChange));if(this.props.onShow)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('show',this.props.onShow));if(this.props.onHide)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('hide',this.props.onHide));return t}.bind(this),this.getMenu=function(){return this.$ReactPopoverMenu3.getMenu()}.bind(this),this.isShown=function(){return !!(this.$ReactPopoverMenu2&&this.$ReactPopoverMenu2.isShown())}.bind(this),this.showPopover=function(r){this.$ReactPopoverMenu2.showLayer();if(r){var s=this.$ReactPopoverMenu3.getMenu();s.blur();s.focusAnItem(r)}}.bind(this),this.hidePopover=function(){var r=this.$ReactPopoverMenu2;if(r&&r.isShown())r.hideLayer();}.bind(this),this.getFocusedItem=function(){var r=this.$ReactPopoverMenu3.getMenu();return r.getFocusedItem()}.bind(this),this.$ReactPopoverMenu7=function(){var r=this.getMenu();r&&r.forEachItem(function(s){var t=s.getRoot().firstElementChild;t&&c('ReactDOM').unmountComponentAtNode(t)})}.bind(this),n}l.getFirstChild=function(m){'use strict';var n=m.children;return Array.isArray(n)?n[0]:n};l.getButtonSize=function(m){'use strict';var n=l.getFirstChild(m);return n&&n.type.getButtonSize(n.props)};l.prototype.componentDidMount=function(){'use strict';var m=c('ReactDOM').findDOMNode(this.refs.root),n=m.firstChild;c('CSS').addClass(n,"_p");this.$ReactPopoverMenu2=new (c('Popover'))(m,n,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter,'data-testid':this.props['data-testid']});this.$ReactPopoverMenu3=new (c('PopoverMenu'))(this.$ReactPopoverMenu2,n,this.$ReactPopoverMenu4(this.props.menu),this.props.behaviors);this.$ReactPopoverMenu5()};l.prototype.componentDidUpdate=function(m){'use strict';if(!c('areEqual')(m.menu,this.props.menu))c('setImmediate')(this.$ReactPopoverMenu6);if(this.props.alignh!==m.alignh)this.$ReactPopoverMenu3.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==m.disabled)if(this.props.disabled){this.$ReactPopoverMenu3.disable()}else this.$ReactPopoverMenu3.enable();};l.prototype.$ReactPopoverMenu5=function(){'use strict';if(this.props.onReturnWithoutFocusedItem)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu3.subscribe('returnWithoutFocusedItem',this.props.onReturnWithoutFocusedItem));};l.prototype.render=function(){'use strict';var m=c('React').Children.map(this.props.children,function(o,p){if(p===0){return c('React').cloneElement(o,{className:c('joinClasses')(o.props.className,"_p")})}else return o;}),n=Object.assign({},this.props);delete n.onShow;delete n.onHide;delete n.alignh;delete n.position;delete n.layerBehaviors;delete n.behaviors;delete n.menu;delete n.disabled;delete n.disableArrowKeyActivation;delete n.enableActivationOnEnter;return c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},n,{className:c('joinClasses')(this.props.className,"uiPopover"),ref:'root',disabled:null}),m)};l.prototype.componentWillUnmount=function(){'use strict';this.hidePopover();if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null}this.$ReactPopoverMenu3&&this.$ReactPopoverMenu3.destroy()};l.propTypes={alignh:k.oneOf(['left','center','right']),alignv:k.oneOf(['baseline','bottom','middle','top']),position:k.oneOf(['above','below','left','right']),layerBehaviors:k.array,menu:k.object.isRequired,disabled:k.bool,disableArrowKeyActivation:k.bool,enableActivationOnEnter:k.bool,onReturnWithoutFocusedItem:k.func};l.defaultProps={alignv:'middle'};f.exports=l}),null);
__d('MenuItemNoAction',['MenuItem'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('MenuItem'));i=h&&h.prototype;j.prototype.hasAction=function(){'use strict';return false};function j(){'use strict';h.apply(this,arguments)}f.exports=j}),null);
__d('MenuTheme',['cx'],(function a(b,c,d,e,f,g,h){f.exports={className:"_569t"}}),null);
__d('ReactMenu',['cx','Menu','MenuItem','MenuItemNoAction','MenuSelectableItem','MenuTheme','React','SelectableMenu','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l;function m(q){var r=[];c('React').Children.forEach(q,function(s){if(s)r.push(s);});return r}function n(q){q.isReactLegacyFactory={};q.type=q}i=babelHelpers.inherits(o,c('Menu'));j=i&&i.prototype;function o(q,r){'use strict';var s=babelHelpers['extends']({theme:c('MenuTheme'),maxheight:q?q.maxheight:null,className:q?q.className:null},r);j.constructor.call(this,m(q.children),s)}n(o);k=babelHelpers.inherits(p,c('SelectableMenu'));l=k&&k.prototype;function p(q,r){'use strict';var s=babelHelpers['extends']({className:c('joinClasses')("_57di",q?q.className:null),theme:c('MenuTheme'),multiple:q&&q.multiple,closeOnSelectWithMultiple:q&&q.closeOnSelectWithMultiple,maxheight:q?q.maxheight:null},r);l.constructor.call(this,m(q.children),s)}n(p);o.SelectableMenu=p;n(c('MenuItem'));o.Item=c('MenuItem');o.ItemNoAction=c('MenuItemNoAction');n(c('MenuSelectableItem'));o.SelectableItem=c('MenuSelectableItem');f.exports=o}),null);
__d('ReactXUIMenu',['ReactMenu','XUIMenuTheme','XUIMenuWithSquareCorner'],(function a(b,c,d,e,f,g){var h,i,j,k;function l(o){o.isReactLegacyFactory={};o.type=o}h=babelHelpers.inherits(m,c('ReactMenu'));i=h&&h.prototype;function m(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];i.constructor.call(this,o,p)}l(m);j=babelHelpers.inherits(n,c('ReactMenu').SelectableMenu);k=j&&j.prototype;function n(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];k.constructor.call(this,o,p)}l(n);m.SelectableMenu=n;m.Item=c('ReactMenu').Item;m.SelectableItem=c('ReactMenu').SelectableItem;f.exports=m}),null);
__d('UFIOrderingModeSelector.react',['cx','invariant','ix','Image.react','InlineBlock.react','Link.react','PopoverMenu.react','React','ReactXUIMenu'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('ReactXUIMenu').SelectableMenu,n=c('ReactXUIMenu').SelectableItem;k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.onMenuItemClick=function(u,v){this.props.onOrderChanged(v.item.getValue())}.bind(this),q}o.prototype.render=function(){if(this.props.orderingModes.length===0)return null;var p=this.props.orderingModes.filter(function(r){return r.value==this.props.selectedMode}.bind(this)).map(function(r){return r.name}).pop();p||i(0);var q=c('React').createElement(m,{className:"_4tju",onItemClick:this.onMenuItemClick},this.props.orderingModes.map(function(r){return c('React').createElement(n,{key:r.value,value:r.value,label:r.name,selected:r.value===this.props.selectedMode},c('React').createElement('div',{className:"_3scm"},c('React').createElement('div',{className:"_3scn"},r.name),c('React').createElement('div',{className:"_3sco"},r.description)))}.bind(this)));return c('React').createElement('div',{className:"_3scp"},c('React').createElement(c('InlineBlock.react'),null,c('React').createElement(c('PopoverMenu.react'),{className:"_3scs",menu:q,alignh:'right'},c('React').createElement(c('Link.react'),null,p,c('React').createElement(c('Image.react'),{className:"_3sct",src:j("101460")})))))};f.exports=o}),null);
__d('CommentsOrderingModeSelectorUsageTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:CommentsOrderingModeSelectorUsageLoggerConfig',this.$CommentsOrderingModeSelectorUsageTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:CommentsOrderingModeSelectorUsageLoggerConfig',this.$CommentsOrderingModeSelectorUsageTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$CommentsOrderingModeSelectorUsageTypedLogger1={};return this};h.prototype.updateData=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1=babelHelpers['extends']({},this.$CommentsOrderingModeSelectorUsageTypedLogger1,j);return this};h.prototype.setAvailableOrders=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.available_orders=c('GeneratedLoggerUtils').serializeVector(j);return this};h.prototype.setEndOrder=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.end_order=j;return this};h.prototype.setPostFbid=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.post_fbid=j;return this};h.prototype.setPostOwnerFbid=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.post_owner_fbid=j;return this};h.prototype.setStartOrder=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.start_order=j;return this};h.prototype.setVC=function(j){this.$CommentsOrderingModeSelectorUsageTypedLogger1.vc=j;return this};var i={available_orders:true,end_order:true,post_fbid:true,post_owner_fbid:true,start_order:true,vc:true};f.exports=h}),null);
__d('UFIOrderingModeSelectorContainer.react',['CommentsOrderingModeSelectorUsageTypedLogger','Random','React','SubscriptionsHandler','UFIConfig','UFIInstanceAction','UFIOrderingModeSelector.react','UFIOrderingModeStore','UFISharedDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={selectedMode:c('UFIOrderingModeStore').getState().get(this.props.contextArgs.instanceid)},this.$UFIOrderingModeSelectorContainer1=null,this.onOrderChanged=function(q){var r=this.props.feedback;if(r.orderingmodes&&c('UFIConfig').logChangeOrderingModeUsageSampleRate>c('Random').random()){var s=r.orderingmodes.map(function(t){return t.value});new (c('CommentsOrderingModeSelectorUsageTypedLogger'))().setStartOrder(this.state.selectedMode).setEndOrder(q).setPostFbid(r.commentstargetfbid).setPostOwnerFbid(r.ownerid).setAvailableOrders(s).log()}c('UFISharedDispatcher').dispatch(c('UFIInstanceAction').changeOrderingMode(this.props.contextArgs,q))}.bind(this),m}k.prototype.componentDidMount=function(){this.$UFIOrderingModeSelectorContainer1=new (c('SubscriptionsHandler'))();this.$UFIOrderingModeSelectorContainer1.addSubscriptions(c('UFIOrderingModeStore').addListener(function(){if(!this.$UFIOrderingModeSelectorContainer1)return;this.setState({selectedMode:c('UFIOrderingModeStore').getState().get(this.props.contextArgs.instanceid)})}.bind(this)))};k.prototype.componentWillUnmount=function(){if(this.$UFIOrderingModeSelectorContainer1){this.$UFIOrderingModeSelectorContainer1.release();this.$UFIOrderingModeSelectorContainer1=null}};k.prototype.shouldComponentUpdate=function(l,m){return this.state.selectedMode!==m.selectedMode};k.prototype.render=function(){return c('React').createElement(c('UFIOrderingModeSelector.react'),{onOrderChanged:this.onOrderChanged,orderingModes:this.props.feedback.orderingmodes,selectedMode:this.state.selectedMode})};k.propTypes={feedback:j.shape({defaultcommentorderingmode:j.string.isRequired,orderingmodes:j.arrayOf(j.shape({name:j.string.isRequired,description:j.string.isRequired,selected:j.bool.isRequired,value:j.string.isRequired})).isRequired,commentstargetfbid:j.string.isRequired,ownerid:j.string.isRequired}).isRequired,contextArgs:j.object.isRequired};f.exports=k}),null);
__d('MenuSeparator.react',['MenuSeparator'],(function a(b,c,d,e,f,g){function h(j){j.isReactLegacyFactory={};j.type=j}var i=c('MenuSeparator');h(i);f.exports=i}),null);
__d('MorePagerFetchOnScroll',['AsyncRequest','DOMQuery','Event','Style','Vector','throttle'],(function a(b,c,d,e,f,g){var h={};function i(j,k,l){'use strict';this._pager=j;this._offset=k||0;this._hasEventHandlers=false;if(l)this.setup();h[j.id]=this}i.prototype.setup=function(){'use strict';this._scrollParent=c('Style').getScrollParent(this._pager);this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this));if(!this.check()){this._scrollListener=c('Event').listen(this._scrollParent,'scroll',c('throttle')(function(){this.check()}.bind(this),50));this._clickListener=c('Event').listen(this._scrollParent,'click',c('throttle')(function(){this.check()}.bind(this),50));this._hasEventHandlers=true}};i.prototype.check=function(){'use strict';if(!c('DOMQuery').contains(document.body,this._pager)){this.removeEventListeners();return true}var j=c('Vector').getElementPosition(this._pager).y,k=this._scrollParent===window?c('Vector').getViewportDimensions().y:c('Vector').getElementDimensions(this._scrollParent).y,l=this._scrollParent===window?c('Vector').getScrollPosition().y+k:c('Vector').getElementPosition(this._scrollParent).y+k;if(j-this._offset<l){this._inViewHandler();this.removeEventListeners();return true}return false};i.prototype.removeEventListeners=function(){'use strict';if(this._hasEventHandlers){this._scrollListener&&this._scrollListener.remove();this._clickListener&&this._clickListener.remove();this._hasEventHandlers=false}};i.prototype.setPagerInViewHandler=function(j){'use strict';this._inViewHandler=j;return this};i.prototype._defaultPagerInViewHandler=function(){'use strict';var j=c('DOMQuery').scry(this._pager,'a')[0];if(j)c('AsyncRequest').bootstrap(j.getAttribute('ajaxify')||j.href,j);};i.getInstance=function(j){'use strict';return h[j]};f.exports=i}),null);
__d('VideoWithClickPlayPause',['VideoPlayerReason','logVideosClickTracking'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$VideoWithClickPlayPause1=i;this.$VideoWithClickPlayPause2=this.$VideoWithClickPlayPause1.getVideoNode();this.$VideoWithClickPlayPause1.addListener('clickVideo',this.$VideoWithClickPlayPause3.bind(this));if(this.$VideoWithClickPlayPause1.hasSeenClick())this.$VideoWithClickPlayPause3();}h.prototype.$VideoWithClickPlayPause3=function(){'use strict';var i=this.$VideoWithClickPlayPause1.getOption('CommercialBreakVideoAdOverlay','videoController');if(this.$VideoWithClickPlayPause1.isState('playing')){if(this.$VideoWithClickPlayPause1.getOption('VideoWithLiveBroadcast','isLive')||i&&i.getOption('VideoWithLiveBroadcast','isLive')||this.$VideoWithClickPlayPause4())return;this.$VideoWithClickPlayPause1.pause(c('VideoPlayerReason').USER)}else{c('logVideosClickTracking')(this.$VideoWithClickPlayPause2);this.$VideoWithClickPlayPause1.play(c('VideoPlayerReason').USER)}};h.prototype.$VideoWithClickPlayPause4=function(){'use strict';var i=this.$VideoWithClickPlayPause1.getOption('CommercialBreakVideoAdOverlay','videoController'),j=i&&i.getOption('VideoWithInstreamVideo','controller');return j&&!j.getConfig().canPauseAdBreak};f.exports=h}),null);
__d('hasAdblock',['Promise','AdsAdBlockConfig'],(function a(b,c,d,e,f,g){var h=void 0;function i(){var l=document.createElement('div');l.className='AdBox Ad advert';document.body.appendChild(l);return new (c('Promise'))(function(m){var n=window.getComputedStyle&&window.getComputedStyle(l);if(!n){m(false);return}if(n.display==='none'){m(true);return}if(n.MozBinding&&n.MozBinding.indexOf('url')===0){setTimeout(function(){return m(l.clientWidth===0)},5000);return}m(false)})}function j(){var l=document.createElement('img');document.body.appendChild(l);return new (c('Promise'))(function(m){l.onload=function(){var n=window.getComputedStyle&&window.getComputedStyle(l),o=n&&n.display==='none';l.parentNode&&l.parentNode.removeChild(l);m(o)};l.onerror=function(){l.parentNode&&l.parentNode.removeChild(l);m(true)};l.src='//scontent.xx.fbcdn.net/hads-ak-prn2/'+'1487645_6012475414660_1439393861_n.png'})}function k(l){if(h===undefined){c('Promise').all([i()].concat(c('AdsAdBlockConfig').shouldCheckImage?[j()]:[])).done(function(m){h=m.some(function(n){return n});l(h)})}else l(h);}f.exports=k}),null);
__d('PagesEventObserver',['Banzai'],(function a(b,c,d,e,f,g){var h='pages_client_logging',i={VITAL_WAIT:c('Banzai').VITAL_WAIT,logData_DEPRECATED:function j(k,l){var m={delay:l||c('Banzai').VITAL_WAIT};c('Banzai').post(h,k,m)},notify:function j(event,k,l,m,n){var o=babelHelpers['extends']({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||c('Banzai').VITAL_WAIT};c('Banzai').post(h,o,p)},registerLogOnClick:function j(k,l){var m=arguments.length<=2||arguments[2]===undefined?null:arguments[2];k.addEventListener('click',function(){if(m)i.notify(m,l,null,null,null);})}};f.exports=i}),null);