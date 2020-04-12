// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"static/number_0.gif":[function(require,module,exports) {
module.exports = "/number_0.547b94e7.gif";
},{}],"static/number_1.gif":[function(require,module,exports) {
module.exports = "/number_1.59d2997f.gif";
},{}],"static/number_2.gif":[function(require,module,exports) {
module.exports = "/number_2.7a3dad48.gif";
},{}],"static/number_3.gif":[function(require,module,exports) {
module.exports = "/number_3.47efaa14.gif";
},{}],"static/number_4.gif":[function(require,module,exports) {
module.exports = "/number_4.1120bd46.gif";
},{}],"static/number_5.gif":[function(require,module,exports) {
module.exports = "/number_5.4a3c5f1a.gif";
},{}],"static/number_6.gif":[function(require,module,exports) {
module.exports = "/number_6.12775e98.gif";
},{}],"static/number_7.gif":[function(require,module,exports) {
module.exports = "/number_7.4af76f27.gif";
},{}],"static/number_8.gif":[function(require,module,exports) {
module.exports = "/number_8.a78a5628.gif";
},{}],"static/number_9.gif":[function(require,module,exports) {
module.exports = "/number_9.33fc7af7.gif";
},{}],"static/number_neg.gif":[function(require,module,exports) {
module.exports = "/number_neg.91b85119.gif";
},{}],"js/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

var _number_ = _interopRequireDefault(require("../static/number_0.gif"));

var _number_2 = _interopRequireDefault(require("../static/number_1.gif"));

var _number_3 = _interopRequireDefault(require("../static/number_2.gif"));

var _number_4 = _interopRequireDefault(require("../static/number_3.gif"));

var _number_5 = _interopRequireDefault(require("../static/number_4.gif"));

var _number_6 = _interopRequireDefault(require("../static/number_5.gif"));

var _number_7 = _interopRequireDefault(require("../static/number_6.gif"));

var _number_8 = _interopRequireDefault(require("../static/number_7.gif"));

var _number_9 = _interopRequireDefault(require("../static/number_8.gif"));

var _number_10 = _interopRequireDefault(require("../static/number_9.gif"));

var _number_neg = _interopRequireDefault(require("../static/number_neg.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var COUNTER_NEG = _number_neg.default;
var COUNTER_SRC = [_number_.default, _number_2.default, _number_3.default, _number_4.default, _number_5.default, _number_6.default, _number_7.default, _number_8.default, _number_9.default, _number_10.default];
var FACE_BASE = "0px";
var FACE_LOST = "-80px";
var FACE_WON = "-120px";

var View = /*#__PURE__*/function (_EventTarget) {
  _inherits(View, _EventTarget);

  var _super = _createSuper(View);

  function View(_ref) {
    var _this;

    var model = _ref.model,
        globalOptions = _ref.globalOptions;

    _classCallCheck(this, View);

    _this = _super.call(this);
    _this.globalOptions = globalOptions;
    _this.model = model;
    _this.tileSize = _this.calculateTileSize();
    _this.playground = document.getElementById("playground");
    _this.face = document.getElementById("face-button");
    _this.controls = document.getElementById("controls");

    _this.controls.style.setProperty("--face-position", FACE_BASE);

    _this.playground.style.setProperty("--cols", _this.model.cols);

    _this.playground.style.setProperty("--rows", _this.model.rows);

    _this.playground.style.setProperty("--tile-size", _this.tileSize + "px");

    while (_this.playground.firstChild) {
      _this.playground.removeChild(_this.playground.firstChild);
    }

    _this.setNumber(View.Counters.MINES, _this.model.mineCount);

    _this.initViewListeners();

    return _this;
  }

  _createClass(View, [{
    key: "initViewListeners",
    value: function initViewListeners() {
      this.listeners = [this.onPlaygroundClick.bind(this), this.onPlaygroundRightClick.bind(this), this.onResize.bind(this)];
      this.playground.addEventListener("click", this.listeners[0]);
      this.playground.addEventListener("contextmenu", this.listeners[1]);
      window.addEventListener("resize", this.listeners[2]);
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      if (this.globalOptions.resize) {
        this.tileSize = this.calculateTileSize();
        this.playground.style.setProperty("--tile-size", this.tileSize + "px");
      }
    }
  }, {
    key: "onPlaygroundClick",
    value: function onPlaygroundClick(event) {
      event.preventDefault();
      this.dispatch("click", this.locateClickFromEvent(event));
    }
  }, {
    key: "onPlaygroundRightClick",
    value: function onPlaygroundRightClick(event) {
      event.preventDefault();
      this.dispatch("rightClick", this.locateClickFromEvent(event));
    }
  }, {
    key: "dispatch",
    value: function dispatch(eventName, detail) {
      var event = new CustomEvent(eventName, {
        detail: detail
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "locateClickFromEvent",
    value: function locateClickFromEvent(event) {
      var box = this.playground.getBoundingClientRect();
      var translationX = event.clientX - box.left;
      var translationY = event.clientY - box.top;
      var row = Math.floor(translationY / this.tileSize);
      var col = Math.floor(translationX / this.tileSize);
      console.log("Click en {".concat(col, ",").concat(row, "}"));
      return {
        x: col,
        y: row
      };
    }
  }, {
    key: "revealMap",
    value: function revealMap(map) {
      var _this2 = this;

      // map = [ {x, y, adjacent } ]
      map.forEach(function (_ref2) {
        var x = _ref2.x,
            y = _ref2.y,
            adjacent = _ref2.adjacent;
        return _this2.setTile(x, y, View.Tiles.NUMBER, adjacent);
      });
    }
  }, {
    key: "setTile",
    value: function setTile(x, y, tileType, n) {
      var qs = this.playground.querySelector("[data-row=\"".concat(y, "\"][data-col=\"").concat(x, "\"]"));
      var tile = document.createElement("i");
      tile.classList.add("tile");
      tile.dataset.row = y;
      tile.dataset.col = x;
      tile.style.gridColumn = x + 1; // grid is 1-indexed

      tile.style.gridRow = y + 1;

      switch (tileType) {
        case View.Tiles.FLAG:
          tile.classList.add("flag");
          break;

        case View.Tiles.MARK:
          tile.classList.add("mark");
          break;

        case View.Tiles.NUMBER:
          tile.classList.add("number-".concat(n));
          break;

        case View.Tiles.MINE:
          tile.classList.add("mine");
          break;

        case View.Tiles.MINE_BOOM:
          tile.classList.add("mine-exploded");
          break;

        case View.Tiles.INCORRECT_MINE:
          tile.classList.add("incorrect-mine");
          break;
      }

      if (qs) {
        qs.replaceWith(tile);
      } else {
        this.playground.appendChild(tile);
      }
    }
  }, {
    key: "dropTile",
    value: function dropTile(x, y) {
      var qs = this.playground.querySelector("[data-row=\"".concat(y, "\"][data-col=\"").concat(x, "\"]"));

      if (qs) {
        this.playground.removeChild(qs);
      }
    } // ¿No necesita la view una referencia al model?

  }, {
    key: "gameLost",
    value: function gameLost(lostCoords) {
      this.controls.style.setProperty("--face-position", FACE_LOST);

      for (var x = 0; x < this.model.cols; x++) {
        for (var y = 0; y < this.model.rows; y++) {
          console.log(x + "-" + y + "-" + this.model.isMine(x, y) + "-" + this.model.isFlagged(x, y));

          if (this.model.isMine(x, y) && !this.model.isFlagged(x, y)) {
            this.setTile(x, y, lostCoords.x === x && lostCoords.y === y ? View.Tiles.MINE_BOOM : View.Tiles.MINE);
          } else if (this.model.isMine(x, y) && this.model.isFlagged(x, y)) {
            this.setTile(x, y, View.Tiles.INCORRECT_MINE);
          }
        }
      } // for (let minePos of this.model.mineList) {
      //     this.setTile(
      //         minePos.x,
      //         minePos.y,
      //         lostCoords.x === minePos.x && lostCoords.y === minePos.y ? View.Tiles.MINE_BOOM : View.Tiles.MINE
      //     );
      // }

    }
  }, {
    key: "gameWon",
    value: function gameWon() {
      this.controls.style.setProperty("--face-position", FACE_WON);
    }
  }, {
    key: "setNumber",
    value: function setNumber(which, n) {
      if (n >= 1000 || n <= -1000) {
        console.error("setNumber(".concat(which, ", ").concat(n, "): n too big"));
        n = n % 1000;
      }

      var counter;

      switch (which) {
        case View.Counters.MINES:
          counter = document.getElementById("mine-counter");
          break;

        case View.Counters.TIME:
          counter = document.getElementById("time-counter");
          break;
      }

      var isNegative = false;

      if (n < 0) {
        isNegative = true;
        n *= -1;
      }

      counter.querySelector("img:nth-child(1)").src = isNegative ? COUNTER_NEG : COUNTER_SRC[Math.floor(n / 100)];
      counter.querySelector("img:nth-child(2)").src = COUNTER_SRC[Math.floor(n % 100 / 10)];
      counter.querySelector("img:nth-child(3)").src = COUNTER_SRC[Math.floor(n % 10)];
    }
  }, {
    key: "calculateTileSize",
    value: function calculateTileSize() {
      if (!View.sizeBaseline) {
        var mainCont = document.getElementById("full-container");
        var controls = document.getElementById("controls");
        View.sizeBaseline = {
          uiWidth: controls.clientWidth - mainCont.clientWidth,
          uiHeight: -mainCont.clientHeight
        };
      } // Height uses mainCont height


      var maxHeight = document.body.clientHeight + View.sizeBaseline.uiHeight; // But width is just the borders... so CONTAINER - Controls-width

      var maxWidth = document.body.clientWidth + View.sizeBaseline.uiWidth;
      var size = Math.min(maxWidth / this.model.cols, maxHeight / this.model.rows); // floor...?

      size = Math.floor(size);
      return size;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.playground.removeEventListener("click", this.listeners[0]);
      this.playground.removeEventListener("contextmenu", this.listeners[1]);
      window.removeEventListener("resize", this.listeners[2]);
    }
  }]);

  return View;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

exports.View = View;
Object.getPrototypeOf(View).Tiles = {
  FLAG: 0,
  MARK: 1,
  NUMBER: 2,
  MINE: 3,
  MINE_BOOM: 4,
  INCORRECT_MINE: 5
};
Object.getPrototypeOf(View).Counters = {
  MINES: 0,
  TIME: 1
};
},{"../static/number_0.gif":"static/number_0.gif","../static/number_1.gif":"static/number_1.gif","../static/number_2.gif":"static/number_2.gif","../static/number_3.gif":"static/number_3.gif","../static/number_4.gif":"static/number_4.gif","../static/number_5.gif":"static/number_5.gif","../static/number_6.gif":"static/number_6.gif","../static/number_7.gif":"static/number_7.gif","../static/number_8.gif":"static/number_8.gif","../static/number_9.gif":"static/number_9.gif","../static/number_neg.gif":"static/number_neg.gif"}],"js/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;

var _view = require("./view");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model(_ref) {
    var cols = _ref.cols,
        rows = _ref.rows,
        mines = _ref.mines;

    _classCallCheck(this, Model);

    this.cols = cols;
    this.rows = rows;
    this.mineCount = mines.length;

    var _this$parseField = this.parseField(mines);

    var _this$parseField2 = _slicedToArray(_this$parseField, 2);

    this.field = _this$parseField2[0];
    this.mineList = _this$parseField2[1];
    console.log(this.field);
    console.log(this.mineList); // Intermediate - could be inferred from this.field to avoid mishaps

    this.markedFlags = 0;
  }

  _createClass(Model, [{
    key: "bindView",
    value: function bindView(view) {
      this.view = view;
    }
  }, {
    key: "parseField",
    value: function parseField(mines) {
      var fld = {};
      var lst = [];

      for (var c = 0; c < this.cols; c++) {
        fld[c] = {};
      }

      var _iterator = _createForOfIteratorHelper(mines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          // i = y*rows + x;
          var y = Math.floor(i / this.cols);
          var x = i - this.cols * y;
          fld[x][y] = Model.FieldFlags.MINE;
          lst.push({
            x: x,
            y: y
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return [fld, lst];
    }
  }, {
    key: "isMine",
    value: function isMine(x, y) {
      return this.field[x][y] !== undefined && (this.field[x][y] & Model.FieldFlags.MINE) > 0;
    }
  }, {
    key: "isRevealed",
    value: function isRevealed(x, y) {
      return this.field[x][y] !== undefined && (this.field[x][y] & Model.FieldFlags.REVEALED) > 0;
    }
  }, {
    key: "isFlagged",
    value: function isFlagged(x, y) {
      return this.field[x][y] !== undefined && (this.field[x][y] & Model.FieldFlags.FLAG) > 0;
    } // isRecursive haces las veces de flagholder

  }, {
    key: "revealTile",
    value: function revealTile(x, y, isRecursive) {
      if (this.isMine(x, y)) {
        throw new Error("Mine");
      }

      if (this.isRevealed(x, y) || this.isFlagged(x, y)) {
        return [];
      }

      var map = [];
      var adjacent = this.getAdjacentCount(x, y);
      map.push({
        x: x,
        y: y,
        adjacent: adjacent
      });
      this.field[x][y] |= Model.FieldFlags.REVEALED;

      if (adjacent === 0) {
        // top left
        if (x > 0 && y > 0) map = map.concat(this.revealTile(x - 1, y - 1, true)); // top

        if (y > 0) map = map.concat(this.revealTile(x, y - 1, true)); // top right

        if (y > 0 && x < this.cols - 1) map = map.concat(this.revealTile(x + 1, y - 1, true)); // left

        if (x > 0) map = map.concat(this.revealTile(x - 1, y, true)); // right

        if (x < this.cols - 1) map = map.concat(this.revealTile(x + 1, y, true)); // bottom left

        if (x > 0 && y < this.rows - 1) map = map.concat(this.revealTile(x - 1, y + 1, true)); // bottom

        if (y < this.rows - 1) map = map.concat(this.revealTile(x, y + 1, true)); // bottom right

        if (x < this.cols - 1 && y < this.rows - 1) map = map.concat(this.revealTile(x + 1, y + 1, true));
      }

      if (!isRecursive) {
        this.revealed = map.length;
        this.view.revealMap(map);
      } else {
        return map;
      }
    }
  }, {
    key: "markTileFlag",
    value: function markTileFlag(x, y) {
      this.field[x][y] |= Model.FieldFlags.FLAG;
      this.markedFlags++;
      this.view.setTile(x, y, _view.View.Tiles.FLAG); // Aquí o en setTile? o en Game?

      this.view.setNumber(_view.View.Counters.MINES, this.mineCount - this.markedFlags);
    }
  }, {
    key: "markTile",
    value: function markTile(x, y) {
      // Marks (?) a tile
      this.field[x][y] |= Model.FieldFlags.MARK;
      this.field[x][y] &= ~Model.FieldFlags.FLAG;
      this.view.setTile(x, y, _view.View.Tiles.MARK); // Always subtract one from markedFlags

      this.markedFlags--;
      this.view.setNumber(_view.View.Counters.MINES, this.mineCount - this.markedFlags);
    }
  }, {
    key: "unmarkTile",
    value: function unmarkTile(x, y) {
      // Unmarks a tile. Subtracts from markedFlags only if field.x.y has Model.FieldFlags.FLAG
      var dropFlag = (this.field[x][y] & Model.FieldFlags.FLAG) > 0;
      this.field[x][y] &= ~Model.FieldFlags.MARK;
      this.field[x][y] &= ~Model.FieldFlags.FLAG;
      this.view.dropTile(x, y);

      if (dropFlag) {
        this.markedFlags--;
        this.view.setNumber(_view.View.Counters.MINES, this.mineCount - this.markedFlags);
      }
    }
  }, {
    key: "getTileType",
    value: function getTileType(x, y) {
      // returns FlagTypes
      // If revealed => unknown (invalid op)
      if (!this.field[x][y]) return Model.MarkTypes.UNKNOWN;
      if ((this.field[x][y] & Model.FieldFlags.REVEALED) > 0) return Model.MarkTypes.UNKNOWN;
      if ((this.field[x][y] & Model.FieldFlags.FLAG) > 0) return Model.MarkTypes.FLAGGED;
      if ((this.field[x][y] & Model.FieldFlags.MARK) > 0) return Model.MarkTypes.MARKED;
      return Model.MarkTypes.UNMARKED;
    }
  }, {
    key: "getAdjacentCount",
    value: function getAdjacentCount(x, y) {
      var count = 0;
      if (x > 0 && y > 0 && this.isMine(x - 1, y - 1)) count++;
      if (y > 0 && this.isMine(x, y - 1)) count++;
      if (y > 0 && x < this.cols - 1 && this.isMine(x + 1, y - 1)) count++;
      if (x > 0 && this.isMine(x - 1, y)) count++;
      if (x < this.cols - 1 && this.isMine(x + 1, y)) count++;
      if (x > 0 && y < this.rows - 1 && this.isMine(x - 1, y + 1)) count++;
      if (y < this.rows - 1 && this.isMine(x, y + 1)) count++;
      if (x < this.cols - 1 && y < this.rows - 1 && this.isMine(x + 1, y + 1)) count++;
      return count;
    }
  }, {
    key: "revealed",
    get: function get() {
      return this._revealed || 0;
    },
    set: function set(n) {
      if (!this._revealed) this._revealed = 0;
      this._revealed += n;
    }
  }]);

  return Model;
}();

exports.Model = Model;
Object.getPrototypeOf(Model).FieldFlags = {
  MINE: 1,
  REVEALED: 2,
  FLAG: 4,
  MARK: 8
};
Object.getPrototypeOf(Model).MarkTypes = {
  UNKNOWN: 0,
  UNMARKED: 1,
  FLAGGED: 2,
  MARKED: 3
};
},{"./view":"js/view.js"}],"js/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomInt = randomInt;

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
},{}],"js/game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _model = require("./model");

var _view = require("./view");

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_GLOBAL_OPTIONS = Object.freeze({
  marks: false,
  resize: true
});

var Game = /*#__PURE__*/function () {
  function Game(_ref) {
    var cols = _ref.cols,
        rows = _ref.rows,
        mineCount = _ref.mineCount,
        globalOptions = _ref.globalOptions,
        _ref$mines = _ref.mines,
        mines = _ref$mines === void 0 ? [] : _ref$mines;

    _classCallCheck(this, Game);

    if (mines.length === 0) {
      // Generar minas
      mines = Game.generateMines(rows, cols, mineCount);
    }

    if (!globalOptions) {
      globalOptions = DEFAULT_GLOBAL_OPTIONS;
    }

    this.globalOptions = globalOptions;
    this.model = new _model.Model({
      cols: cols,
      rows: rows,
      mines: mines
    });
    this.view = new _view.View({
      globalOptions: globalOptions,
      cols: cols,
      rows: rows,
      model: this.model
    });
    this.model.bindView(this.view);
    this.gameStarted = false;
    this.interactuable = true;
    this.initListeners();
  }

  _createClass(Game, [{
    key: "initListeners",
    value: function initListeners() {
      this.listeners = [this.onPlaygroundClick.bind(this), this.onPlaygroundRightClick.bind(this)];
      this.view.addEventListener("click", this.listeners[0]);
      this.view.addEventListener("rightClick", this.listeners[1]);
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.gameStarted = true;
      this.startTimer();
    }
  }, {
    key: "stopGame",
    value: function stopGame() {
      this.interactuable = false;
      this.stopTimer();
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      this.timerOn = true;
      this.timerStart = performance.now();
      setTimeout(this.doTimer.bind(this), 1000);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      this.timerOn = false;
    }
  }, {
    key: "doTimer",
    value: function doTimer() {
      if (!this.timerOn) return;
      this.view.setNumber(_view.View.Counters.TIME, Math.floor((performance.now() - this.timerStart) / 1000));
      var nextTimer = (performance.now() - this.timerStart) % 1000;
      setTimeout(this.doTimer.bind(this), 1000 - nextTimer);
    }
  }, {
    key: "onPlaygroundClick",
    value: function onPlaygroundClick(event) {
      if (!this.interactuable) return false;

      if (!this.gameStarted) {
        this.startGame();
      }

      if (this.model.isRevealed(event.detail.x, event.detail.y)) {
        return false; // Noop
      }

      if (this.model.isMine(event.detail.x, event.detail.y)) {
        if (!this.model.isFlagged(event.detail.x, event.detail.y)) {
          this.stopGame();
          this.view.gameLost({
            x: event.detail.x,
            y: event.detail.y
          });
        }
      } else {
        this.model.revealTile(event.detail.x, event.detail.y);
      }

      if (this.isComplete()) {
        this.stopGame();
        this.view.gameWon();
      }
    }
  }, {
    key: "onPlaygroundRightClick",
    value: function onPlaygroundRightClick(event) {
      if (!this.interactuable) return false;

      if (!this.gameStarted) {
        this.startGame();
      }

      if (this.model.isRevealed(event.detail.x, event.detail.y)) {
        return false; // Noop
      }

      switch (this.model.getTileType(event.detail.x, event.detail.y)) {
        case _model.Model.MarkTypes.UNMARKED:
        case _model.Model.MarkTypes.UNKNOWN:
          // Just flag
          this.model.markTileFlag(event.detail.x, event.detail.y);
          break;

        case _model.Model.MarkTypes.FLAGGED:
          // Unmark if !global.marks, mark (?) if true
          if (this.globalOptions.marks) {
            this.model.markTile(event.detail.x, event.detail.y);
          } else {
            this.model.unmarkTile(event.detail.x, event.detail.y);
          }

          break;

        case _model.Model.MarkTypes.MARKED:
          // Always unmark
          this.model.unmarkTile(event.detail.x, event.detail.y);
          break;
      }
    }
  }, {
    key: "isComplete",
    value: function isComplete() {
      return this.model.revealed === this.model.cols * this.model.rows - this.model.mineCount;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.view.removeEventListener("click", this.listeners[0]);
      this.view.removeEventListener("rightClick", this.listeners[1]);
      this.view.destroy();
    }
  }], [{
    key: "generateMines",
    value: function generateMines(rowCount, colCount, mineCount) {
      var max = rowCount * colCount - 1;
      var mines = [];

      while (mines.length < mineCount) {
        var rnd = (0, _utils.randomInt)(0, max);

        if (!mines.includes(rnd)) {
          mines.push(rnd);
        }
      }

      return mines;
    }
  }]);

  return Game;
}();

exports.Game = Game;
},{"./model":"js/model.js","./view":"js/view.js","./utils":"js/utils.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _game = require("./game");

var GAME_MODES = {
  "Beginner": {
    rows: 10,
    cols: 10,
    mineCount: 10
  },
  "Intermediate": {
    rows: 16,
    cols: 16,
    mineCount: 40
  },
  "Expert": {
    rows: 16,
    cols: 31,
    mineCount: 99
  },
  "Custom": {
    rows: 1,
    cols: 1,
    mines: 1
  }
};
window.gi = {};
window.globalOptions = {
  marks: true,
  resize: true,
  difficulty: "Intermediate"
};
window.addEventListener("load", function () {
  window.g = function () {
    var params = {
      globalOptions: window.globalOptions
    };
    Object.assign(params, GAME_MODES[window.globalOptions.difficulty]);
    this.game = new _game.Game(params);
  };

  function newGame() {
    if (window.gi && window.gi.game) {
      window.gi.game.destroy();
    }

    window.gi = {};
    g.call(window.gi);
  }

  function changeDifficulty(difficulty) {
    document.querySelector("li.checked[data-action=change-difficulty]").classList.remove("checked");
    document.querySelector("li[data-action=\"change-difficulty\"][data-difficulty=\"".concat(difficulty, "\"]")).classList.add("checked");
    window.globalOptions.difficulty = difficulty;
    newGame();
  }

  function toggleMarks() {
    window.globalOptions.marks = !window.globalOptions.marks;
    document.querySelector("li[data-action=toggle-marks]").classList.toggle("checked");
  }

  newGame();
  document.getElementById("face-button").addEventListener("click", function () {
    newGame();
  });
  Array.from(document.querySelectorAll("#menubar > li")).forEach(function (li) {
    li.addEventListener("click", function () {
      if (li.classList.contains("open")) {
        li.classList.remove("open");
      } else {
        Array.from(document.querySelectorAll("#menubar > li.open")).forEach(function (l) {
          l.classList.remove("open");
        });
        li.classList.add("open");
      }
    });
  });
  document.querySelector("#menubar").addEventListener("click", function (event) {
    if (!event.target.dataset.action) {
      return;
    }

    switch (event.target.dataset.action) {
      case "new-game":
        newGame();
        break;

      case "change-difficulty":
        changeDifficulty(event.target.dataset.difficulty);
        break;

      case "toggle-marks":
        toggleMarks();
        break;
    }
  });

  if (window.globalOptions.marks) {
    document.querySelector("li[data-action=toggle-marks]").classList.add("checked");
  }

  document.querySelector("li[data-action=\"change-difficulty\"][data-difficulty=\"".concat(window.globalOptions.difficulty, "\"]")).classList.add("checked");
});
},{"./game":"js/game.js"}],"../../../../Programs/nvm/nvm/v12.16.1/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60376" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Programs/nvm/nvm/v12.16.1/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map