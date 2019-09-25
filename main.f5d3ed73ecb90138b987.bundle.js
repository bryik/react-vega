(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),react_default=__webpack_require__.n(react),src_embed=__webpack_require__(128),EMPTY={};function shallowEqual(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:EMPTY,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:EMPTY,aKeys=Object.keys(a),bKeys=Object.keys(b);return a===b||aKeys.length===bKeys.length&&aKeys.every((function(key){return a[key]===b[key]}))}var NOOP=function NOOP(){};function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var VegaEmbed_VegaEmbed=function(_React$PureComponent){function VegaEmbed(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,VegaEmbed);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(VegaEmbed)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"containerRef",react_default.a.createRef()),_defineProperty(_assertThisInitialized(_this),"viewPromise",void 0),_defineProperty(_assertThisInitialized(_this),"handleError",(function(error){var _this$props$onError=_this.props.onError;(void 0===_this$props$onError?NOOP:_this$props$onError)(error),console.warn(error)})),_defineProperty(_assertThisInitialized(_this),"modifyView",(function(action){_this.viewPromise&&_this.viewPromise.then((function(view){return view&&action(view),!0})).catch(_this.handleError)})),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(VegaEmbed,_React$PureComponent),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(VegaEmbed,[{key:"componentDidMount",value:function componentDidMount(){this.createView()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this2=this,fieldSet=function getUniqueFieldNames(objects){var fields=new Set;return objects.forEach((function(o){Object.keys(o).forEach((function(field){fields.add(field)}))})),fields}([this.props,prevProps]);fieldSet.delete("className"),fieldSet.delete("style"),fieldSet.delete("signalListeners"),!Array.from(fieldSet).some((function(f){return _this2.props[f]!==prevProps[f]}))&&shallowEqual(this.props.signalListeners,prevProps.signalListeners)||(this.clearView(),this.createView())}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.clearView()}},{key:"createView",value:function createView(){var _this$props=this.props,spec=_this$props.spec,onNewView=_this$props.onNewView,_this$props$signalLis=(_this$props.onError,_this$props.signalListeners),signalListeners=void 0===_this$props$signalLis?{}:_this$props$signalLis,options=_objectWithoutProperties(_this$props,["spec","onNewView","onError","signalListeners"]);this.containerRef.current&&(this.viewPromise=Object(src_embed.a)(this.containerRef.current,spec,options).then((function(_ref){var view=_ref.view,signalNames=Object.keys(signalListeners);return signalNames.forEach((function(signalName){try{view.addSignalListener(signalName,signalListeners[signalName])}catch(ex){console.warn("Cannot add invalid signal handler >>",ex)}})),signalNames.length>0&&view.run(),view})).catch(this.handleError),onNewView&&this.modifyView(onNewView))}},{key:"clearView",value:function clearView(){return this.modifyView((function(view){view.finalize()})),this.viewPromise=void 0,this}},{key:"render",value:function render(){var _this$props2=this.props,className=_this$props2.className,style=_this$props2.style;return react_default.a.createElement("div",{ref:this.containerRef,className:className,style:style})}}]),VegaEmbed}(react_default.a.PureComponent);function Vega_typeof(obj){return(Vega_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function Vega_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Vega_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Vega_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function Vega_getPrototypeOf(o){return(Vega_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function Vega_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function Vega_setPrototypeOf(o,p){return(Vega_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function Vega_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,"a",(function(){return Vega_Vega}));var Vega_Vega=function(_React$PureComponent){function Vega(){var _getPrototypeOf2,_this;!function Vega_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Vega);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function Vega_possibleConstructorReturn(self,call){return!call||"object"!==Vega_typeof(call)&&"function"!=typeof call?Vega_assertThisInitialized(self):call}(this,(_getPrototypeOf2=Vega_getPrototypeOf(Vega)).call.apply(_getPrototypeOf2,[this].concat(args))),Vega_defineProperty(Vega_assertThisInitialized(_this),"vegaEmbed",react_default.a.createRef()),Vega_defineProperty(Vega_assertThisInitialized(_this),"handleNewView",(function(view){_this.update();var _this$props$onNewView=_this.props.onNewView;(void 0===_this$props$onNewView?NOOP:_this$props$onNewView)(view)})),_this}return function Vega_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&Vega_setPrototypeOf(subClass,superClass)}(Vega,_React$PureComponent),function Vega_createClass(Constructor,protoProps,staticProps){return protoProps&&Vega_defineProperties(Constructor.prototype,protoProps),staticProps&&Vega_defineProperties(Constructor,staticProps),Constructor}(Vega,[{key:"componentDidMount",value:function componentDidMount(){this.update()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){shallowEqual(this.props.data,prevProps.data)||this.update()}},{key:"update",value:function update(){var _this$props=this.props,data=_this$props.data,spec=_this$props.spec;if(data){var datasetNames=function getDatasetNamesFromSpec(spec){var data=spec.data;if(data){if(Array.isArray(data))return data.map((function(_ref){return _ref.name}));if("string"==typeof data.name)return[data.name]}return[]}(spec).filter((function(name){return data[name]}));this.vegaEmbed.current&&datasetNames.length>0&&this.vegaEmbed.current.modifyView((function(view){datasetNames.forEach((function(name){!function updateData(view,name,value){value&&(!function isFunction(functionToCheck){return!!functionToCheck&&"[object Function]"==={}.toString.call(functionToCheck)}(value)?view.change(name,src_embed.b.changeset().remove((function(){return!0})).insert(value)):value(view.data(name)))}(view,name,data[name])})),view.run()}))}}},{key:"render",value:function render(){var _this$props2=this.props,restProps=(_this$props2.data,Vega_objectWithoutProperties(_this$props2,["data"]));return react_default.a.createElement(VegaEmbed_VegaEmbed,_extends({ref:this.vegaEmbed},restProps,{onNewView:this.handleNewView}))}}]),Vega}(react_default.a.PureComponent);Vega_defineProperty(Vega_Vega,"defaultProps",{data:{}})},288:function(module){module.exports=JSON.parse('{"table":[{"category":"A","amount":28},{"category":"B","amount":55},{"category":"C","amount":43},{"category":"D","amount":91},{"category":"E","amount":81},{"category":"F","amount":53},{"category":"G","amount":19},{"category":"H","amount":87}]}')},289:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(20),__webpack_require__(21),__webpack_require__(17),__webpack_require__(107),__webpack_require__(174),__webpack_require__(2),__webpack_require__(175),__webpack_require__(176),__webpack_require__(10),__webpack_require__(22),__webpack_require__(18);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),dist=__webpack_require__(50),createClassFromSpec=__webpack_require__(628),Vega=__webpack_require__(129),data1=__webpack_require__(288),spec1={$schema:"https://vega.github.io/schema/vega/v5.json",width:400,height:200,padding:{left:5,right:5,top:5,bottom:5},data:[{name:"table",values:[{category:"A",amount:28},{category:"B",amount:55},{category:"C",amount:43},{category:"D",amount:91},{category:"E",amount:81},{category:"F",amount:53},{category:"G",amount:19},{category:"H",amount:87}]}],signals:[{name:"tooltip",value:{},on:[{events:"rect:mouseover",update:"datum"},{events:"rect:mouseout",update:"{}"}]}],scales:[{name:"xscale",type:"band",domain:{data:"table",field:"category"},range:"width"},{name:"yscale",domain:{data:"table",field:"amount"},nice:!0,range:"height"}],axes:[{orient:"bottom",scale:"xscale"},{orient:"left",scale:"yscale"}],marks:[{type:"rect",from:{data:"table"},encode:{enter:{x:{scale:"xscale",field:"category",offset:1},width:{scale:"xscale",band:1,offset:-1},y:{scale:"yscale",field:"amount"},y2:{scale:"yscale",value:0}},update:{fill:{value:"steelblue"}},hover:{fill:{value:"red"}}}},{type:"text",encode:{enter:{align:{value:"center"},baseline:{value:"bottom"},fill:{value:"#333"}},update:{x:{scale:"xscale",signal:"tooltip.category",band:.5},y:{scale:"yscale",signal:"tooltip.amount",offset:-2},text:{signal:"tooltip.amount"},fillOpacity:[{test:"datum === tooltip",value:0},{value:1}]}}}]},spec2={$schema:"https://vega.github.io/schema/vega/v5.json",width:400,height:200,padding:{left:5,right:5,top:5,bottom:5},data:[{name:"table",values:[{category:"A",amount:28},{category:"B",amount:55},{category:"C",amount:43},{category:"D",amount:91},{category:"E",amount:81},{category:"F",amount:53},{category:"G",amount:19},{category:"H",amount:87}]}],signals:[{name:"tooltip",value:{},on:[{events:"rect:mouseover",update:"datum"},{events:"rect:mouseout",update:"{}"}]}],scales:[{name:"xscale",type:"band",domain:{data:"table",field:"category"},range:"width"},{name:"yscale",domain:{data:"table",field:"amount"},nice:!0,range:"height"}],axes:[{orient:"bottom",scale:"xscale"},{orient:"left",scale:"yscale"}],marks:[{type:"rect",from:{data:"table"},encode:{enter:{x:{scale:"xscale",field:"category",offset:10},width:{scale:"xscale",band:.5,offset:-1},y:{scale:"yscale",field:"amount"},y2:{scale:"yscale",value:0}},update:{fill:{value:"green"}},hover:{fill:{value:"yellow"}}}},{type:"text",encode:{enter:{align:{value:"center"},baseline:{value:"bottom"},fill:{value:"#333"}},update:{x:{scale:"xscale",signal:"tooltip.category",band:.5},y:{scale:"yscale",signal:"tooltip.amount",offset:-2},text:{signal:"tooltip.amount"},fillOpacity:[{test:"datum === tooltip",value:0},{value:1}]}}}]};function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}__webpack_require__.d(__webpack_exports__,"a",(function(){return ReactVegaDemo_Demo}));var BarChart=Object(createClassFromSpec.a)({spec:spec1}),_ref=react_default.a.createElement("iframe",{title:"star",src:"https://ghbtns.com/github-btn.html?user=vega&repo=react-vega&type=star&count=true",frameBorder:"0",scrolling:"0",width:"100px",height:"20px"}),_ref2=react_default.a.createElement("h3",null,react_default.a.createElement("code",null,"<Vega>")," React Component"),_ref3=react_default.a.createElement("pre",null,"<Vega data={this.state.data} spec={this.state.spec} onSignalHover={this.handleHover} />"),_ref4=react_default.a.createElement("h3",null,react_default.a.createElement("code",null,"ReactVega.createClassFromSpec()")),_ref5=react_default.a.createElement("pre",null,"const BarChart = ReactVega.createClassFromSpec(barSpec);\n<BarChart data={this.state.data} onSignalHover={this.handleHover} />"),ReactVegaDemo_Demo=function(_React$Component){function Demo(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Demo),(_this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,_getPrototypeOf(Demo).call(this,props))).state={data:data1,info:"",spec:spec1},_this.handleHover=_this.handleHover.bind(_assertThisInitialized(_this)),_this.handleToggleSpec=_this.handleToggleSpec.bind(_assertThisInitialized(_this)),_this.handleUpdateData=_this.handleUpdateData.bind(_assertThisInitialized(_this)),_this.handlers={tooltip:_this.handleHover},_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Demo,_React$Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Demo,[{key:"handleHover",value:function handleHover(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];Object(dist.action)("hover",{limit:5})(args),this.setState({info:JSON.stringify(args)})}},{key:"handleToggleSpec",value:function handleToggleSpec(){var spec=this.state.spec;Object(dist.action)("toggle spec")(spec),spec===spec1?this.setState({spec:spec2}):this.setState({spec:spec1})}},{key:"handleUpdateData",value:function handleUpdateData(){for(var table=[],i=1;20>=i;i+=1)table.push({amount:Math.round(100*Math.random()),category:String.fromCharCode(65+i)});Object(dist.action)("update data")(table),this.setState({data:{table:table}})}},{key:"render",value:function render(){var _this$state=this.state,data=_this$state.data,spec=_this$state.spec,info=_this$state.info;return react_default.a.createElement("div",null,react_default.a.createElement("div",{style:{float:"right"}},_ref),react_default.a.createElement("button",{type:"button",onClick:this.handleToggleSpec},"Toggle Spec"),react_default.a.createElement("button",{type:"button",onClick:this.handleUpdateData},"Update data"),_ref2,"Will recompile when spec changes and update when data changes.",_ref3,react_default.a.createElement(Vega.a,{data:data,spec:spec,signalListeners:this.handlers}),_ref4,"Use the given spec to create a reusable component.",_ref5,react_default.a.createElement(BarChart,{data:data,signalListeners:this.handlers}),react_default.a.createElement("div",null,"Hover info: ",react_default.a.createElement("code",null,info)))}}]),Demo}(react_default.a.Component);ReactVegaDemo_Demo.displayName="Demo",ReactVegaDemo_Demo.__docgenInfo={description:"",methods:[{name:"handleHover",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"handleToggleSpec",docblock:null,modifiers:[],params:[],returns:null},{name:"handleUpdateData",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/ReactVegaDemo.jsx"]={name:"Demo",docgenInfo:ReactVegaDemo_Demo.__docgenInfo,path:"stories/ReactVegaDemo.jsx"})},290:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(20),__webpack_require__(21),__webpack_require__(17),__webpack_require__(107),__webpack_require__(174),__webpack_require__(2),__webpack_require__(175),__webpack_require__(176),__webpack_require__(10),__webpack_require__(22),__webpack_require__(18);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),dist=__webpack_require__(50),createClassFromSpec=__webpack_require__(628),Vega=__webpack_require__(129);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function VegaLite(props){return react_default.a.createElement(Vega.a,_extends({},props,{mode:"vega-lite"}))}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}__webpack_require__.d(__webpack_exports__,"a",(function(){return ReactVegaLiteDemo_Demo}));var data1={myData:[{a:"A",b:20},{a:"B",b:34},{a:"C",b:55},{a:"D",b:19},{a:"E",b:40},{a:"F",b:34},{a:"G",b:91},{a:"H",b:78},{a:"I",b:25}]},data2={myData:[{a:"A",b:28},{a:"B",b:55},{a:"C",b:43},{a:"D",b:91},{a:"E",b:81},{a:"F",b:53},{a:"G",b:19},{a:"H",b:87},{a:"I",b:52}]},spec1={data:{name:"myData"},description:"A simple bar chart with embedded data.",encoding:{x:{field:"a",type:"ordinal"},y:{field:"b",type:"quantitative"}},mark:"bar"},spec2={data:{name:"myData"},description:"A simple bar chart with embedded data.",encoding:{x:{field:"b",type:"quantitative"},y:{field:"a",type:"ordinal"}},mark:"bar"},BarChart=Object(createClassFromSpec.a)({mode:"vega-lite",spec:spec1}),_ref=react_default.a.createElement("iframe",{title:"star",src:"https://ghbtns.com/github-btn.html?user=vega&repo=react-vega&type=star&count=true",frameBorder:"0",scrolling:"0",width:"100px",height:"20px"}),_ref2=react_default.a.createElement("h3",null,react_default.a.createElement("code",null,"<VegaLite>")," React Component"),_ref3=react_default.a.createElement("pre",null,"<VegaLite data={this.state.data} spec={this.state.spec} />"),_ref4=react_default.a.createElement("h3",null,react_default.a.createElement("code",null,"ReactVegaLite.createClassFromLiteSpec()")),_ref5=react_default.a.createElement("pre",null,"const BarChart = ReactVegaLite.createClassFromLiteSpec(spec1);\n<BarChart data={this.state.data} />"),ReactVegaLiteDemo_Demo=function(_React$Component){function Demo(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Demo),(_this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,_getPrototypeOf(Demo).call(this,props))).state={data:data1,info:"",spec:spec1},_this.handleHover=_this.handleHover.bind(_assertThisInitialized(_this)),_this.handleToggleSpec=_this.handleToggleSpec.bind(_assertThisInitialized(_this)),_this.handleUpdateData=_this.handleUpdateData.bind(_assertThisInitialized(_this)),_this.handlers={hover:_this.handleHover},_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Demo,_React$Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Demo,[{key:"handleHover",value:function handleHover(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];Object(dist.action)("hover",{limit:5})(args),this.setState({info:JSON.stringify(args)})}},{key:"handleToggleSpec",value:function handleToggleSpec(){var spec=this.state.spec;Object(dist.action)("toggle spec")(spec),spec===spec1?this.setState({spec:spec2}):this.setState({spec:spec1})}},{key:"handleUpdateData",value:function handleUpdateData(){var data=this.state.data;Object(dist.action)("update data")(data),data===data1?this.setState({data:data2}):data===data2&&this.setState({data:data1})}},{key:"render",value:function render(){var _this$state=this.state,data=_this$state.data,spec=_this$state.spec,info=_this$state.info;return react_default.a.createElement("div",null,react_default.a.createElement("div",{style:{float:"right"}},_ref),react_default.a.createElement("button",{type:"button",onClick:this.handleToggleSpec},"Toggle Spec"),react_default.a.createElement("button",{type:"button",onClick:this.handleUpdateData},"Update data"),_ref2,"Will recompile when spec changes and update when data changes.",_ref3,react_default.a.createElement(VegaLite,{data:data,spec:spec,signalListeners:this.handlers}),_ref4,"Use the given spec to create a reusable component.",_ref5,react_default.a.createElement(BarChart,{data:data,signalListeners:this.handlers}),info)}}]),Demo}(react_default.a.Component);ReactVegaLiteDemo_Demo.displayName="Demo",ReactVegaLiteDemo_Demo.__docgenInfo={description:"",methods:[{name:"handleHover",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"handleToggleSpec",docblock:null,modifiers:[],params:[],returns:null},{name:"handleUpdateData",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/ReactVegaLiteDemo.jsx"]={name:"Demo",docgenInfo:ReactVegaLiteDemo_Demo.__docgenInfo,path:"stories/ReactVegaLiteDemo.jsx"})},292:function(module,exports,__webpack_require__){__webpack_require__(293),__webpack_require__(402),module.exports=__webpack_require__(403)},314:function(module,exports){},403:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(12),__webpack_require__(17),__webpack_require__(10),__webpack_require__(13),__webpack_require__(18);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(64);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{name:"✨ React+Vega",addonPanelInRight:!1,enableShortcuts:!1,goFullScreen:!1,hierarchyRootSeparator:null,hierarchySeparator:/\|/,selectedAddonPanel:void 0,showAddonPanel:!0,showSearchBox:!1,showStoriesPanel:!0,sidebarAnimations:!0,sortStoriesByKind:!1,url:"#"}});var req=__webpack_require__(604);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(217)(module))},604:function(module,exports,__webpack_require__){var map={"./index.stories.js":605};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=604},605:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64),_ReactVegaDemo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(289),_ReactVegaLiteDemo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(290),_ref=(__webpack_require__(606),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactVegaDemo__WEBPACK_IMPORTED_MODULE_2__.a,null));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("react-vega",module).add("Vega",(function(){return _ref}));var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactVegaLiteDemo__WEBPACK_IMPORTED_MODULE_3__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("react-vega",module).add("VegaLite",(function(){return _ref2}))}.call(this,__webpack_require__(217)(module))},606:function(module,exports,__webpack_require__){var content=__webpack_require__(607);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(609)(content,options);content.locals&&(module.exports=content.locals)},607:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(608)(!1)).push([module.i,"body{\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  text-align: center;\n}\n\nh1, h2, h3{\n  font-weight: 300;\n}\n\nh2{\n  color: #777;\n}\n\na, a:link, a:visited{\n  color: #5d7da7;\n  text-decoration: none;\n}\n\na:hover{\n  color: #232d5f;\n  text-decoration: underline;\n}\n\n#app{\n  margin-top: 10px;\n}\n\nfooter{\n  color: #aaa;\n  font-size: 12px;\n  font-weight: 300;\n  padding: 20px;\n  padding-top: 40px;\n}",""])},628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createClassFromSpec}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Vega__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(129);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function createClassFromSpec(_ref){var mode=_ref.mode,spec=_ref.spec,FixedVegaChart=function(_React$PureComponent){function FixedVegaChart(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FixedVegaChart),_possibleConstructorReturn(this,_getPrototypeOf(FixedVegaChart).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(FixedVegaChart,_React$PureComponent),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(FixedVegaChart,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Vega__WEBPACK_IMPORTED_MODULE_1__.a,_extends({mode:mode,spec:spec},this.props))}}]),FixedVegaChart}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);return function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(FixedVegaChart,"getSpec",(function getSpec(){return spec})),FixedVegaChart}}},[[292,1,2]]]);
//# sourceMappingURL=main.f5d3ed73ecb90138b987.bundle.js.map