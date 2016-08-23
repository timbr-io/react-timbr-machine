(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _display = __webpack_require__(1);

	var _display2 = _interopRequireDefault(_display);

	var _dispatcher = __webpack_require__(6);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(13);

	exports.default = {
	  Display: _display2.default,
	  dispatcher: _dispatcher2.default
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _performance = __webpack_require__(3);

	var _performance2 = _interopRequireDefault(_performance);

	var _progress = __webpack_require__(5);

	var _progress2 = _interopRequireDefault(_progress);

	var _dispatcher = __webpack_require__(6);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _autobindDecorator = __webpack_require__(12);

	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DisplayStatus = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
	  _inherits(DisplayStatus, _React$Component);

	  function DisplayStatus(props) {
	    _classCallCheck(this, DisplayStatus);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayStatus).call(this, props));

	    _this.state = {
	      status: {},
	      sparkVals: [],
	      sparkAverages: [],
	      processedVals: null,
	      lastVal: null
	    };
	    _this.state = _this._update(props);
	    return _this;
	  }

	  _createClass(DisplayStatus, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _dispatcher2.default.register(function (payload) {
	        if (_this2.props && _this2.props.comm && _this2.props.comm.comm_id === payload.commId && payload.actionType === 'display_update') {
	          _this2.setState(_this2._update(payload.data));
	        }
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      this.setState(this._update(newProps));
	    }
	  }, {
	    key: '_update',
	    value: function _update(props) {
	      var state = _extends({}, this.state);
	      var _props$status = props.status;
	      var status = _props$status === undefined ? {} : _props$status;

	      state.status = status;

	      if (typeof status.processed !== 'undefined') {
	        var totalQueued = status.processed + status.queue_size;
	        state.processedPercent = status.processed / totalQueued * 100;

	        if (!state.processedVals) {
	          state.processedVals = Array(10).fill(state.processedPercent);
	        } else {
	          state.processedVals.push(state.processedPercent);
	        }

	        if (!state.lastVal) {
	          state.lastVal = status.processed;
	        } else {
	          state.sparkVals.push(status.processed - state.lastVal);
	          state.lastVal = status.processed;

	          if (state.sparkVals.length > 1) {
	            var windowSeconds = 10;
	            var windowVals = state.sparkVals.slice(Math.max(state.sparkVals.length - windowSeconds, 1));
	            state.sparkAverages.push(this.sum(windowVals) / windowVals.length);

	            if (state.sparkAverages.length > 30) {
	              state.sparkAverages.shift();
	            }
	          }
	        }
	      }
	      return state;
	    }
	  }, {
	    key: 'callbacks',
	    value: function callbacks() {
	      if (this.props.cell) {
	        return this.props.cell.get_callbacks();
	      }
	      return {};
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      var _state$status = this.state.status;
	      var status = _state$status === undefined ? {} : _state$status;

	      this.props.comm.send({
	        method: 'toggle',
	        data: {
	          action: status.running ? 'stop' : 'start' }
	      }, this.callbacks());
	    }
	  }, {
	    key: 'sum',
	    value: function sum(vals) {
	      return vals.reduce(function (a, b) {
	        return a + b;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state$status2 = this.state.status;
	      var status = _state$status2 === undefined ? {} : _state$status2;

	      var running = status.running ? 'Running' : 'Stopped';
	      var statusClasses = (0, _classnames2.default)('machinestat-status', {
	        'machinestat-status-running': status.running
	      });

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'machinestat' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Timbr Machine Status'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: statusClasses },
	            running
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'machinestat-row' },
	            _react2.default.createElement(_performance2.default, _extends({}, this.state, { toggle: this.toggle })),
	            _react2.default.createElement(_progress2.default, this.state)
	          )
	        )
	      );
	    }
	  }]);

	  return DisplayStatus;
	}(_react2.default.Component)) || _class;

	exports.default = DisplayStatus;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactSparklines = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Performance(props) {
	  var toggle = props.toggle;
	  var sparkAverages = props.sparkAverages;
	  var status = props.status;


	  var sparkMax = Math.ceil(Math.max.apply(null, sparkAverages));
	  var sparkMin = Math.round(Math.min.apply(null, sparkAverages));
	  var sparkAvg = Math.round(sparkAverages[sparkAverages.length - 1] * 10) / 10;

	  var action = status.running ? 'Stop' : 'Start';

	  return _react2.default.createElement(
	    'div',
	    { className: 'machinestat-performance' },
	    _react2.default.createElement(
	      'div',
	      { className: 'machinestat-label' },
	      'Average per minute'
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'machinestat-table' },
	      _react2.default.createElement(
	        'div',
	        { className: 'machinestat-cell machinestat-cell-tight' },
	        _react2.default.createElement(
	          'div',
	          { className: 'machinestat-performance-high' },
	          sparkMax
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'machinestat-performance-low' },
	          sparkMin
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'machinestat-cell machinestat-cell-padded' },
	        _react2.default.createElement(
	          'div',
	          { className: 'machinestat-sparkline' },
	          _react2.default.createElement(
	            _reactSparklines.Sparklines,
	            { data: sparkAverages, limit: 30, width: 175, height: 25, margin: 5 },
	            _react2.default.createElement(_reactSparklines.SparklinesLine, { color: '#98c000', style: { strokeWidth: 1, stroke: "#98c000", fill: "none" } }),
	            _react2.default.createElement(_reactSparklines.SparklinesSpots, { style: { fill: "#98c000" } })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'machinestat-cell machinestat-cell-tight machinestat-cell-middle' },
	        _react2.default.createElement(
	          'small',
	          null,
	          sparkAvg
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'machinestat-movedown' },
	      _react2.default.createElement(
	        'a',
	        { href: '#', className: 'btn btn-primary', onClick: toggle },
	        action
	      )
	    )
	  );
	};

	exports.default = Performance;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["ReactSparklines"] = factory(require("react"));
		else
			root["ReactSparklines"] = factory(root["React"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "/";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 21);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		exports.default = function (data) {
		    return data.reduce(function (a, b) {
		        return a + b;
		    }) / data.length;
		};

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		exports.default = function (data) {
		    return Math.min.apply(Math, data);
		};

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		exports.default = function (data) {
		    return Math.max.apply(Math, data);
		};

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _mean = __webpack_require__(1);

		var _mean2 = _interopRequireDefault(_mean);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (data) {
		    var dataMean = (0, _mean2.default)(data);
		    var sqDiff = data.map(function (n) {
		        return Math.pow(n - dataMean, 2);
		    });
		    var avgSqDiff = (0, _mean2.default)(sqDiff);
		    return Math.sqrt(avgSqDiff);
		};

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		module.exports = __webpack_require__(6);

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.SparklinesNormalBand = exports.SparklinesReferenceLine = exports.SparklinesSpots = exports.SparklinesBars = exports.SparklinesCurve = exports.SparklinesLine = exports.Sparklines = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(0);

		var _react2 = _interopRequireDefault(_react);

		var _SparklinesLine = __webpack_require__(9);

		var _SparklinesLine2 = _interopRequireDefault(_SparklinesLine);

		var _SparklinesCurve = __webpack_require__(8);

		var _SparklinesCurve2 = _interopRequireDefault(_SparklinesCurve);

		var _SparklinesBars = __webpack_require__(7);

		var _SparklinesBars2 = _interopRequireDefault(_SparklinesBars);

		var _SparklinesSpots = __webpack_require__(12);

		var _SparklinesSpots2 = _interopRequireDefault(_SparklinesSpots);

		var _SparklinesReferenceLine = __webpack_require__(11);

		var _SparklinesReferenceLine2 = _interopRequireDefault(_SparklinesReferenceLine);

		var _SparklinesNormalBand = __webpack_require__(10);

		var _SparklinesNormalBand2 = _interopRequireDefault(_SparklinesNormalBand);

		var _dataToPoints = __webpack_require__(13);

		var _dataToPoints2 = _interopRequireDefault(_dataToPoints);

		var _reactAddonsShallowCompare = __webpack_require__(19);

		var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Sparklines = function (_React$Component) {
		    _inherits(Sparklines, _React$Component);

		    function Sparklines(props) {
		        _classCallCheck(this, Sparklines);

		        return _possibleConstructorReturn(this, Object.getPrototypeOf(Sparklines).call(this, props));
		    }

		    _createClass(Sparklines, [{
		        key: 'shouldComponentUpdate',
		        value: function shouldComponentUpdate(nextProps) {
		            return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
		        }
		    }, {
		        key: 'render',
		        value: function render() {
		            var _props = this.props;
		            var data = _props.data;
		            var limit = _props.limit;
		            var width = _props.width;
		            var height = _props.height;
		            var svgWidth = _props.svgWidth;
		            var svgHeight = _props.svgHeight;
		            var preserveAspectRatio = _props.preserveAspectRatio;
		            var margin = _props.margin;
		            var style = _props.style;
		            var max = _props.max;
		            var min = _props.min;


		            if (data.length === 0) return null;

		            var points = (0, _dataToPoints2.default)({ data: data, limit: limit, width: width, height: height, margin: margin, max: max, min: min });

		            var svgOpts = { style: style, viewBox: '0 0 ' + width + ' ' + height, preserveAspectRatio: preserveAspectRatio };
		            if (svgWidth > 0) svgOpts.width = svgWidth;
		            if (svgHeight > 0) svgOpts.height = svgHeight;

		            return _react2.default.createElement(
		                'svg',
		                svgOpts,
		                _react2.default.Children.map(this.props.children, function (child) {
		                    return _react2.default.cloneElement(child, { points: points, width: width, height: height, margin: margin });
		                })
		            );
		        }
		    }]);

		    return Sparklines;
		}(_react2.default.Component);

		Sparklines.propTypes = {
		    data: _react2.default.PropTypes.array,
		    limit: _react2.default.PropTypes.number,
		    width: _react2.default.PropTypes.number,
		    height: _react2.default.PropTypes.number,
		    svgWidth: _react2.default.PropTypes.number,
		    svgHeight: _react2.default.PropTypes.number,
		    preserveAspectRatio: _react2.default.PropTypes.string,
		    margin: _react2.default.PropTypes.number,
		    style: _react2.default.PropTypes.object,
		    min: _react2.default.PropTypes.number,
		    max: _react2.default.PropTypes.number
		};
		Sparklines.defaultProps = {
		    data: [],
		    width: 240,
		    height: 60,
		    //Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
		    preserveAspectRatio: 'none', //https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
		    margin: 2
		};
		exports.Sparklines = Sparklines;
		exports.SparklinesLine = _SparklinesLine2.default;
		exports.SparklinesCurve = _SparklinesCurve2.default;
		exports.SparklinesBars = _SparklinesBars2.default;
		exports.SparklinesSpots = _SparklinesSpots2.default;
		exports.SparklinesReferenceLine = _SparklinesReferenceLine2.default;
		exports.SparklinesNormalBand = _SparklinesNormalBand2.default;

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(0);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SparklinesBars = function (_React$Component) {
		    _inherits(SparklinesBars, _React$Component);

		    function SparklinesBars() {
		        _classCallCheck(this, SparklinesBars);

		        return _possibleConstructorReturn(this, Object.getPrototypeOf(SparklinesBars).apply(this, arguments));
		    }

		    _createClass(SparklinesBars, [{
		        key: 'render',
		        value: function render() {
		            var _props = this.props;
		            var points = _props.points;
		            var height = _props.height;
		            var style = _props.style;
		            var barWidth = _props.barWidth;

		            var strokeWidth = 1 * (style && style.strokeWidth || 0);
		            var width = barWidth || (points && points.length >= 2 ? Math.ceil(Math.max(0, points[1].x - points[0].x - strokeWidth)) : 0);

		            return _react2.default.createElement(
		                'g',
		                null,
		                points.map(function (p, i) {
		                    return _react2.default.createElement('rect', {
		                        key: i,
		                        x: Math.ceil(p.x - strokeWidth * i),
		                        y: Math.ceil(p.y),
		                        width: Math.ceil(width),
		                        height: Math.ceil(Math.max(0, height - p.y)),
		                        style: style });
		                })
		            );
		        }
		    }]);

		    return SparklinesBars;
		}(_react2.default.Component);

		SparklinesBars.propTypes = {
		    points: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
		    height: _react2.default.PropTypes.number,
		    style: _react2.default.PropTypes.object,
		    barWidth: _react2.default.PropTypes.number
		};
		SparklinesBars.defaultProps = {
		    style: { fill: 'slategray' }
		};
		exports.default = SparklinesBars;

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(0);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SparklinesCurve = function (_React$Component) {
		    _inherits(SparklinesCurve, _React$Component);

		    function SparklinesCurve() {
		        _classCallCheck(this, SparklinesCurve);

		        return _possibleConstructorReturn(this, Object.getPrototypeOf(SparklinesCurve).apply(this, arguments));
		    }

		    _createClass(SparklinesCurve, [{
		        key: "render",
		        value: function render() {
		            var _props = this.props;
		            var points = _props.points;
		            var width = _props.width;
		            var height = _props.height;
		            var margin = _props.margin;
		            var color = _props.color;
		            var style = _props.style;
		            var _props$divisor = _props.divisor;
		            var divisor = _props$divisor === undefined ? 0.25 : _props$divisor;

		            var prev = void 0;
		            var curve = function curve(p) {
		                var res = void 0;
		                if (!prev) {
		                    res = [p.x, p.y];
		                } else {
		                    var len = (p.x - prev.x) * divisor;
		                    res = ["C",
		                    //x1
		                    prev.x + len,
		                    //y1
		                    prev.y,
		                    //x2,
		                    p.x - len,
		                    //y2,
		                    p.y,
		                    //x,
		                    p.x,
		                    //y
		                    p.y];
		                }
		                prev = p;
		                return res;
		            };
		            var linePoints = points.map(function (p) {
		                return curve(p);
		            }).reduce(function (a, b) {
		                return a.concat(b);
		            });
		            var closePolyPoints = ["L" + points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];
		            var fillPoints = linePoints.concat(closePolyPoints);

		            var lineStyle = {
		                stroke: color || style.stroke || 'slategray',
		                strokeWidth: style.strokeWidth || '1',
		                strokeLinejoin: style.strokeLinejoin || 'round',
		                strokeLinecap: style.strokeLinecap || 'round',
		                fill: 'none'
		            };
		            var fillStyle = {
		                stroke: style.stroke || 'none',
		                strokeWidth: '0',
		                fillOpacity: style.fillOpacity || '.1',
		                fill: style.fill || color || 'slategray'
		            };

		            return _react2.default.createElement(
		                "g",
		                null,
		                _react2.default.createElement("path", { d: "M" + fillPoints.join(' '), style: fillStyle }),
		                _react2.default.createElement("path", { d: "M" + linePoints.join(' '), style: lineStyle })
		            );
		        }
		    }]);

		    return SparklinesCurve;
		}(_react2.default.Component);

		SparklinesCurve.propTypes = {
		    color: _react2.default.PropTypes.string,
		    style: _react2.default.PropTypes.object
		};
		SparklinesCurve.defaultProps = {
		    style: {}
		};
		exports.default = SparklinesCurve;

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(0);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SparklinesLine = function (_React$Component) {
		    _inherits(SparklinesLine, _React$Component);

		    function SparklinesLine() {
		        _classCallCheck(this, SparklinesLine);

		        return _possibleConstructorReturn(this, Object.getPrototypeOf(SparklinesLine).apply(this, arguments));
		    }

		    _createClass(SparklinesLine, [{
		        key: 'render',
		        value: function render() {
		            var _props = this.props;
		            var points = _props.points;
		            var width = _props.width;
		            var height = _props.height;
		            var margin = _props.margin;
		            var color = _props.color;
		            var style = _props.style;


		            var linePoints = points.map(function (p) {
		                return [p.x, p.y];
		            }).reduce(function (a, b) {
		                return a.concat(b);
		            });
		            var closePolyPoints = [points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];
		            var fillPoints = linePoints.concat(closePolyPoints);

		            var lineStyle = {
		                stroke: color || style.stroke || 'slategray',
		                strokeWidth: style.strokeWidth || '1',
		                strokeLinejoin: style.strokeLinejoin || 'round',
		                strokeLinecap: style.strokeLinecap || 'round',
		                fill: 'none'
		            };
		            var fillStyle = {
		                stroke: style.stroke || 'none',
		                strokeWidth: '0',
		                fillOpacity: style.fillOpacity || '.1',
		                fill: style.fill || color || 'slategray'
		            };

		            return _react2.default.createElement(
		                'g',
		                null,
		                _react2.default.createElement('polyline', { points: fillPoints.join(' '), style: fillStyle }),
		                _react2.default.createElement('polyline', { points: linePoints.join(' '), style: lineStyle })
		            );
		        }
		    }]);

		    return SparklinesLine;
		}(_react2.default.Component);

		SparklinesLine.propTypes = {
		    color: _react2.default.PropTypes.string,
		    style: _react2.default.PropTypes.object
		};
		SparklinesLine.defaultProps = {
		    style: {}
		};
		exports.default = SparklinesLine;

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(0);

		var _react2 = _interopRequireDefault(_react);

		var _mean = __webpack_require__(1);

		var _mean2 = _interopRequireDefault(_mean);

		var _stdev = __webpack_require__(4);

		var _stdev2 = _interopRequireDefault(_stdev);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SparklinesNormalBand = function (_React$Component) {
		    _inherits(SparklinesNormalBand, _React$Component);

		    function SparklinesNormalBand() {
		        _classCallCheck(this, SparklinesNormalBand);

		        return _possibleConstructorReturn(this, Object.getPrototypeOf(SparklinesNormalBand).apply(this, arguments));
		    }

		    _createClass(SparklinesNormalBand, [{
		        key: 'render',
		        value: function render() {
		            var _props = this.props;
		            var points = _props.points;
		            var margin = _props.margin;
		            var style = _props.style;


		            var ypoints = points.map(function (p) {
		                return p.y;
		            });
		            var dataMean = (0, _mean2.default)(ypoints);
		            var dataStdev = (0, _stdev2.default)(ypoints);

		            return _react2.default.createElement('rect', { x: points[0].x, y: dataMean - dataStdev + margin,
		                width: points[points.length - 1].x - points[0].x, height: _stdev2.default * 2,
		                style: style });
		        }
		    }]);

		    return SparklinesNormalBand;
		}(_react2.default.Component);

		SparklinesNormalBand.propTypes = {
		    style: _react2.default.PropTypes.object
		};
		SparklinesNormalBand.defaultProps = {
		    style: { fill: 'red', fillOpacity: .1 }
		};
		exports.default = SparklinesNormalBand;

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(0);

		var _react2 = _interopRequireDefault(_react);

		var _dataProcessing = __webpack_require__(14);

		var dataProcessing = _interopRequireWildcard(_dataProcessing);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SparklinesReferenceLine = function (_React$Component) {
		    _inherits(SparklinesReferenceLine, _React$Component);

		    function SparklinesReferenceLine() {
		        _classCallCheck(this, SparklinesReferenceLine);

		        return _possibleConstructorReturn(this, Object.getPrototypeOf(SparklinesReferenceLine).apply(this, arguments));
		    }

		    _createClass(SparklinesReferenceLine, [{
		        key: 'render',
		        value: function render() {
		            var _props = this.props;
		            var points = _props.points;
		            var margin = _props.margin;
		            var type = _props.type;
		            var style = _props.style;
		            var value = _props.value;


		            var ypoints = points.map(function (p) {
		                return p.y;
		            });
		            var y = type == 'custom' ? value : dataProcessing[type](ypoints);

		            return _react2.default.createElement('line', {
		                x1: points[0].x, y1: y + margin,
		                x2: points[points.length - 1].x, y2: y + margin,
		                style: style });
		        }
		    }]);

		    return SparklinesReferenceLine;
		}(_react2.default.Component);

		SparklinesReferenceLine.propTypes = {
		    type: _react2.default.PropTypes.oneOf(['max', 'min', 'mean', 'avg', 'median', 'custom']),
		    value: _react2.default.PropTypes.number,
		    style: _react2.default.PropTypes.object
		};
		SparklinesReferenceLine.defaultProps = {
		    type: 'mean',
		    style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
		};
		exports.default = SparklinesReferenceLine;

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(0);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SparklinesSpots = function (_React$Component) {
		    _inherits(SparklinesSpots, _React$Component);

		    function SparklinesSpots() {
		        _classCallCheck(this, SparklinesSpots);

		        return _possibleConstructorReturn(this, Object.getPrototypeOf(SparklinesSpots).apply(this, arguments));
		    }

		    _createClass(SparklinesSpots, [{
		        key: 'lastDirection',
		        value: function lastDirection(points) {

		            Math.sign = Math.sign || function (x) {
		                return x > 0 ? 1 : -1;
		            };

		            return points.length < 2 ? 0 : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
		        }
		    }, {
		        key: 'render',
		        value: function render() {
		            var _props = this.props;
		            var points = _props.points;
		            var width = _props.width;
		            var height = _props.height;
		            var size = _props.size;
		            var style = _props.style;
		            var spotColors = _props.spotColors;


		            var startSpot = _react2.default.createElement('circle', {
		                cx: points[0].x,
		                cy: points[0].y,
		                r: size,
		                style: style });

		            var endSpot = _react2.default.createElement('circle', {
		                cx: points[points.length - 1].x,
		                cy: points[points.length - 1].y,
		                r: size,
		                style: style || { fill: spotColors[this.lastDirection(points)] } });

		            return _react2.default.createElement(
		                'g',
		                null,
		                style && startSpot,
		                endSpot
		            );
		        }
		    }]);

		    return SparklinesSpots;
		}(_react2.default.Component);

		SparklinesSpots.propTypes = {
		    size: _react2.default.PropTypes.number,
		    style: _react2.default.PropTypes.object,
		    spotColors: _react2.default.PropTypes.object
		};
		SparklinesSpots.defaultProps = {
		    size: 2,
		    spotColors: {
		        '-1': 'red',
		        '0': 'black',
		        '1': 'green'
		    }
		};
		exports.default = SparklinesSpots;

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _min = __webpack_require__(2);

		var _min2 = _interopRequireDefault(_min);

		var _max = __webpack_require__(3);

		var _max2 = _interopRequireDefault(_max);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (_ref) {
		    var data = _ref.data;
		    var limit = _ref.limit;
		    var _ref$width = _ref.width;
		    var width = _ref$width === undefined ? 1 : _ref$width;
		    var _ref$height = _ref.height;
		    var height = _ref$height === undefined ? 1 : _ref$height;
		    var _ref$margin = _ref.margin;
		    var margin = _ref$margin === undefined ? 0 : _ref$margin;
		    var _ref$max = _ref.max;
		    var max = _ref$max === undefined ? (0, _max2.default)(data) : _ref$max;
		    var _ref$min = _ref.min;
		    var min = _ref$min === undefined ? (0, _min2.default)(data) : _ref$min;


		    var len = data.length;

		    if (limit && limit < len) {
		        data = data.slice(len - limit);
		    }

		    var vfactor = (height - margin * 2) / (max - min || 2);
		    var hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));

		    return data.map(function (d, i) {
		        return {
		            x: i * hfactor + margin,
		            y: (max === min ? 1 : max - d) * vfactor + margin
		        };
		    });
		};

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.variance = exports.stdev = exports.median = exports.midRange = exports.avg = exports.mean = exports.max = exports.min = undefined;

		var _min2 = __webpack_require__(2);

		var _min3 = _interopRequireDefault(_min2);

		var _mean2 = __webpack_require__(1);

		var _mean3 = _interopRequireDefault(_mean2);

		var _midRange2 = __webpack_require__(16);

		var _midRange3 = _interopRequireDefault(_midRange2);

		var _median2 = __webpack_require__(15);

		var _median3 = _interopRequireDefault(_median2);

		var _stdev2 = __webpack_require__(4);

		var _stdev3 = _interopRequireDefault(_stdev2);

		var _variance2 = __webpack_require__(17);

		var _variance3 = _interopRequireDefault(_variance2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.min = _min3.default;
		exports.max = _min3.default;
		exports.mean = _mean3.default;
		exports.avg = _mean3.default;
		exports.midRange = _midRange3.default;
		exports.median = _median3.default;
		exports.stdev = _stdev3.default;
		exports.variance = _variance3.default;

	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		exports.default = function (data) {
		    return data.sort(function (a, b) {
		        return a - b;
		    })[Math.floor(data.length / 2)];
		};

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _min = __webpack_require__(2);

		var _min2 = _interopRequireDefault(_min);

		var _max = __webpack_require__(3);

		var _max2 = _interopRequireDefault(_max);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (data) {
		    return (0, _max2.default)(data) - (0, _min2.default)(data) / 2;
		};

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _mean = __webpack_require__(1);

		var _mean2 = _interopRequireDefault(_mean);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (data) {
		    var dataMean = (0, _mean2.default)(data);
		    var sq = data.map(function (n) {
		        return Math.pow(n - dataMean, 2);
		    });
		    return (0, _mean2.default)(sq);
		};

	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks
		 * 
		 */

		/*eslint-disable no-self-compare */

		'use strict';

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		/**
		 * inlined Object.is polyfill to avoid requiring consumers ship their own
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		 */
		function is(x, y) {
		  // SameValue algorithm
		  if (x === y) {
		    // Steps 1-5, 7-10
		    // Steps 6.b-6.e: +0 != -0
		    return x !== 0 || 1 / x === 1 / y;
		  } else {
		    // Step 6.a: NaN == NaN
		    return x !== x && y !== y;
		  }
		}

		/**
		 * Performs equality by iterating through keys on an object and returning false
		 * when any key has values which are not strictly equal between the arguments.
		 * Returns true when the values of all keys are strictly equal.
		 */
		function shallowEqual(objA, objB) {
		  if (is(objA, objB)) {
		    return true;
		  }

		  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
		    return false;
		  }

		  var keysA = Object.keys(objA);
		  var keysB = Object.keys(objB);

		  if (keysA.length !== keysB.length) {
		    return false;
		  }

		  // Test for A's keys different from B.
		  for (var i = 0; i < keysA.length; i++) {
		    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
		      return false;
		    }
		  }

		  return true;
		}

		module.exports = shallowEqual;

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(20);

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		* @providesModule shallowCompare
		*/

		'use strict';

		var shallowEqual = __webpack_require__(18);

		/**
		 * Does a shallow comparison for props and state.
		 * See ReactComponentWithPureRenderMixin
		 */
		function shallowCompare(instance, nextProps, nextState) {
		  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
		}

		module.exports = shallowCompare;

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(5);


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sum(vals) {
	  return vals.reduce(function (a, b) {
	    return a + b;
	  });
	}

	function Progress(props) {
	  var status = props.status;
	  var processedPercent = props.processedPercent;
	  var processedVals = props.processedVals;
	  var sparkAverages = props.sparkAverages;


	  var errAvg = 0;
	  var errPercent = void 0;
	  var timeLeft = void 0;

	  if (typeof status.processed !== 'undefined') {
	    errAvg = sum(processedVals) / processedVals.length;
	    errPercent = Math.round(status.errored / status.processed * 10) / 10 * 100 || null;
	    if (sparkAverages.length > 1) {
	      timeLeft = Math.ceil(status.queue_size / (sum(sparkAverages) / sparkAverages.length));
	    }
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: 'machinestat-metastats' },
	    _react2.default.createElement(
	      'div',
	      { className: 'machinestat-progress' },
	      _react2.default.createElement(
	        'div',
	        { className: 'machinestat-progress-key machinestat-label' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.createElement(
	            'li',
	            { className: 'key-queued' },
	            'Queued'
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'key-processed' },
	            'Processed'
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'key-average' },
	            'Average'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'machinestat-progress-graph' },
	        _react2.default.createElement('div', { className: 'machinestat-progress-processed', style: { width: processedPercent + '%' } }),
	        _react2.default.createElement('div', { className: 'machinestat-progress-average', style: { left: errAvg + '%' } }),
	        _react2.default.createElement(
	          'div',
	          { className: 'machinestat-progress-label-processed' },
	          status.processed
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'machinestat-progress-label-queued' },
	          status.queue_size
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'machinestat-movedown' },
	        status.errored > 0 && errPercent ? _react2.default.createElement(
	          'span',
	          null,
	          'Errored: ',
	          status.errored,
	          ' ',
	          _react2.default.createElement(
	            'span',
	            { className: 'machinestat-meta' },
	            '(',
	            errPercent,
	            '%)'
	          )
	        ) : '',
	        ' ',
	        status.processed && timeLeft ? _react2.default.createElement(
	          'span',
	          { className: 'machinestat-indent' },
	          'Est. Completion: ',
	          timeLeft,
	          ' seconds'
	        ) : ''
	      )
	    )
	  );
	};

	exports.default = Progress;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _flux = __webpack_require__(7);

	exports.default = new _flux.Dispatcher();
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(8);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(10);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
	 *
	 * The decorator may be used on classes or methods
	 * ```
	 * @autobind
	 * class FullBound {}
	 *
	 * class PartBound {
	 *   @autobind
	 *   method () {}
	 * }
	 * ```
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autobind;

	function autobind() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  if (args.length === 1) {
	    return boundClass.apply(undefined, args);
	  } else {
	    return boundMethod.apply(undefined, args);
	  }
	}

	/**
	 * Use boundMethod to bind all methods on the target.prototype
	 */
	function boundClass(target) {
	  // (Using reflect to get all keys including symbols)
	  var keys = undefined;
	  // Use Reflect if exists
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    keys = Reflect.ownKeys(target.prototype);
	  } else {
	    keys = Object.getOwnPropertyNames(target.prototype);
	    // use symbols if support is provided
	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
	    }
	  }

	  keys.forEach(function (key) {
	    // Ignore special case target method
	    if (key === 'constructor') {
	      return;
	    }

	    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	    // Only methods need binding
	    if (typeof descriptor.value === 'function') {
	      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
	    }
	  });
	  return target;
	}

	/**
	 * Return a descriptor removing the value and returning a getter
	 * The getter will return a .bind version of the function
	 * and memoize the result against a symbol on the instance
	 */
	function boundMethod(target, key, descriptor) {
	  var fn = descriptor.value;

	  if (typeof fn !== 'function') {
	    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
	  }

	  return {
	    configurable: true,
	    get: function get() {
	      if (this === target.prototype || this.hasOwnProperty(key)) {
	        return fn;
	      }

	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, key, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./timbr_machine.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./timbr_machine.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".machinestat {\n  position: relative;\n}\n.machinestat .machinestat-status {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 11.7px;\n}\n.machinestat .machinestat-status:before {\n  content: '';\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #333333;\n  border-radius: 100%;\n  vertical-align: -1px;\n  margin-right: 2px;\n}\n.machinestat .machinestat-status.machinestat-status-running {\n  color: #98c000;\n}\n.machinestat .machinestat-status.machinestat-status-running:before {\n  background: #98c000;\n}\n.machinestat .machinestat-status.machinestat-status-paused {\n  color: #fbc000;\n}\n.machinestat .machinestat-status.machinestat-status-paused:before {\n  background: #fbc000;\n}\n.machinestat .machinestat-status.machinestat-status-stopped {\n  color: #cccccc;\n}\n.machinestat .machinestat-status.machinestat-status-stopped:before {\n  background: #cccccc;\n}\n.machinestat .machinestat-row {\n  *zoom: 1;\n}\n.machinestat .machinestat-row:before,\n.machinestat .machinestat-row:after {\n  display: table;\n  line-height: 0;\n  content: \"\";\n}\n.machinestat .machinestat-row:after {\n  clear: both;\n}\n.machinestat .machinestat-row .machinestat-performance {\n  float: left;\n  width: 35%;\n  padding-right: 12px;\n}\n.machinestat .machinestat-row .machinestat-performance-high,\n.machinestat .machinestat-row .machinestat-performance-low {\n  font-size: 11.7px;\n  color: #cccccc;\n  line-height: 1;\n  text-align: right;\n}\n.machinestat .machinestat-row .machinestat-performance-low {\n  margin-top: 9px;\n}\n.machinestat .machinestat-row .machinestat-metastats {\n  float: left;\n  width: 65%;\n  padding-left: 12px;\n  text-align: right;\n}\n.machinestat .machinestat-progress {\n  position: relative;\n}\n.machinestat .machinestat-progress .machinestat-progress-key {\n  display: block;\n  *zoom: 1;\n}\n.machinestat .machinestat-progress .machinestat-progress-key:before,\n.machinestat .machinestat-progress .machinestat-progress-key:after {\n  display: table;\n  line-height: 0;\n  content: \"\";\n}\n.machinestat .machinestat-progress .machinestat-progress-key:after {\n  clear: both;\n}\n.machinestat .machinestat-progress .machinestat-progress-key ul {\n  display: block;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  float: right;\n}\n.machinestat .machinestat-progress .machinestat-progress-key li {\n  float: left;\n  margin-left: 12px;\n}\n.machinestat .machinestat-progress .machinestat-progress-key li[class*=key-]:before {\n  content: '';\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  margin-right: 4px;\n  vertical-align: -1px;\n}\n.machinestat .machinestat-progress .machinestat-progress-key li.key-queued:before {\n  background: #e7e7e7;\n}\n.machinestat .machinestat-progress .machinestat-progress-key li.key-processed:before {\n  background: #98c000;\n}\n.machinestat .machinestat-progress .machinestat-progress-key li.key-average:before {\n  background: #fbc000;\n}\n.machinestat .machinestat-progress .machinestat-progress-graph {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  background: #e7e7e7;\n}\n.machinestat .machinestat-progress .machinestat-progress-graph .machinestat-progress-processed {\n  height: 32px;\n  width: 0;\n  background: #98c000;\n}\n.machinestat .machinestat-progress .machinestat-progress-graph .machinestat-progress-average {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 2px;\n  background: #fbc000;\n}\n.machinestat .machinestat-progress .machinestat-progress-graph .machinestat-progress-label-queued,\n.machinestat .machinestat-progress .machinestat-progress-graph .machinestat-progress-label-processed {\n  opacity: 0.5;\n  font-size: 11.7px;\n  line-height: 1;\n}\n.machinestat .machinestat-progress .machinestat-progress-graph .machinestat-progress-label-processed {\n  position: absolute;\n  left: 4px;\n  bottom: 4px;\n}\n.machinestat .machinestat-progress .machinestat-progress-graph .machinestat-progress-label-queued {\n  position: absolute;\n  right: 4px;\n  bottom: 4px;\n}\n.machinestat .machinestat-movedown {\n  margin-top: 12px;\n}\n.machinestat .machinestat-indent {\n  margin-left: 12px;\n}\n.machinestat .machinestat-meta {\n  font-size: 11.7px;\n  font-style: italic;\n  color: #cccccc;\n}\n.machinestat .btn {\n  padding: 1px 28px;\n  border: none;\n}\n.machinestat .machinestat-label {\n  font-size: 11.7px;\n  line-height: 1;\n  margin: 12px 0 4px;\n}\n.machinestat .machinestat-sparkline {\n  width: 100%;\n  height: 32px;\n}\n.machinestat .machinestat-sparkline svg {\n  width: 100%;\n}\n.machinestat .machinestat-table {\n  display: table;\n  width: 100%;\n}\n.machinestat .machinestat-table .machinestat-cell {\n  display: table-cell;\n  vertical-align: top;\n}\n.machinestat .machinestat-table .machinestat-cell.machinestat-cell-tight {\n  width: 1%;\n  white-space: nowrap;\n}\n.machinestat .machinestat-table .machinestat-cell.machinestat-cell-padded {\n  padding: 0 3px;\n}\n.machinestat .machinestat-table .machinestat-cell.machinestat-cell-middle {\n  vertical-align: middle;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;