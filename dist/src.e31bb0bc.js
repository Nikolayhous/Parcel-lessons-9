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
})({"js/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refs = void 0;
var refs = {
  galleryUl: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]')
};
exports.refs = refs;
},{}],"js/close-modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseModalBtn = CloseModalBtn;

var _refs = require("./refs.js");

var _onEscKeydown = require("./onEscKeydown.js");

//функция для закрывания модалього окна при нажатии на кнопку
function CloseModalBtn() {
  window.removeEventListener('keydown', _onEscKeydown.onEscKeydown);

  _refs.refs.lightbox.classList.remove('is-open');

  _refs.refs.lightboxImage.src = '';
  _refs.refs.lightboxImage.alt = '';
}
},{"./refs.js":"js/refs.js","./onEscKeydown.js":"js/onEscKeydown.js"}],"js/onEscKeydown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onEscKeydown = onEscKeydown;

var _closeModal = require("./close-modal.js");

//функция для закрывания модалього окна при нажатии на esc
function onEscKeydown(event) {
  var ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    (0, _closeModal.CloseModalBtn)();
  }
}

;
},{"./close-modal.js":"js/close-modal.js"}],"js/open-click-gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onOpenClickGallery = onOpenClickGallery;

var _refs = require("./refs.js");

var _onEscKeydown = require("./onEscKeydown.js");

//функция на событие для просмотра изображения в модальгном окне
function onOpenClickGallery(event) {
  window.addEventListener('keydown', _onEscKeydown.onEscKeydown);
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    _refs.refs.lightbox.classList.add('is-open');

    _refs.refs.lightboxImage.src = event.target.getAttribute('data-source');
    _refs.refs.lightboxImage.alt = event.target.alt;
    _refs.refs.lightboxImage.dataset.index = event.target.dataset.index;
  }
}
},{"./refs.js":"js/refs.js","./onEscKeydown.js":"js/onEscKeydown.js"}],"js/onBackdropClick.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onBackdropClick = onBackdropClick;

var _closeModal = require("./close-modal.js");

//функция для закрывания модалього окна при нажатии на бекдроп-оверлей
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    (0, _closeModal.CloseModalBtn)();
  }
}
},{"./close-modal.js":"js/close-modal.js"}],"js/main-objects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.galleryItems = void 0;
var galleryItems = [{
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}]; // export default galleryItems;

exports.galleryItems = galleryItems;
},{}],"js/onarrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onArrowLeft = onArrowLeft;
exports.onArrowRight = onArrowRight;
exports.step = step;

var _mainObjects = require("./main-objects.js");

var _refs = require("./refs.js");

//скрипт для перелистывания картинок клавишами вправо и влево 
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    onArrowLeft();
  }

  if (event.code === "ArrowRight") {
    onArrowRight();
  }
});

function onArrowLeft() {
  var index = +_refs.refs.lightboxImage.dataset.index;

  if (index === 0) {
    step(_mainObjects.galleryItems.length - 1);
    return;
  }

  step(index, -1);
}

function onArrowRight() {
  var index = +_refs.refs.lightboxImage.dataset.index;

  if (index === _mainObjects.galleryItems.length - 1) {
    step(0);
    return;
  }

  step(index, 1);
}

function step(index) {
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  _refs.refs.lightboxImage.dataset.index = "".concat(index + step);
  _refs.refs.lightboxImage.src = _mainObjects.galleryItems[index + step].original;
}
},{"./main-objects.js":"js/main-objects.js","./refs.js":"js/refs.js"}],"js/event.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs.js");

var _openClickGallery = require("./open-click-gallery.js");

var _closeModal = require("./close-modal.js");

var _onBackdropClick = require("./onBackdropClick.js");

var _onarrow = require("./onarrow.js");

_refs.refs.galleryUl.addEventListener('click', _openClickGallery.onOpenClickGallery);

_refs.refs.closeModalBtn.addEventListener('click', _closeModal.CloseModalBtn);

_refs.refs.lightboxOverlay.addEventListener('click', _onBackdropClick.onBackdropClick); //скрипт для перелистывания картинок клавишами вправо и влево 


window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    (0, _onarrow.onArrowLeft)();
  }

  if (event.code === "ArrowRight") {
    (0, _onarrow.onArrowRight)();
  }
});
},{"./refs.js":"js/refs.js","./open-click-gallery.js":"js/open-click-gallery.js","./close-modal.js":"js/close-modal.js","./onBackdropClick.js":"js/onBackdropClick.js","./onarrow.js":"js/onarrow.js"}],"js/create-element-gallery.js":[function(require,module,exports) {
"use strict";

var _mainObjects = require("./main-objects.js");

var _refs = require("./refs.js");

//создал разметку галереи через метод map
// const itemCardsGallery =  createElement ();
function createElement() {
  return _mainObjects.galleryItems.map(function (_ref, index) {
    var original = _ref.original,
        preview = _ref.preview,
        description = _ref.description;
    return "\n        <li class = gallery__item> \n          <a href=\"".concat(original, "\" class = gallery__link>\n            <img \n              class = gallery__image \n              src=\"").concat(preview, "\" \n              alt= \"").concat(description, "\" \n              data-source='").concat(original, "'\n              data-index='").concat(index, "'> \n          </a>\n        </li>\n    ");
  }).join('');
}

;

_refs.refs.galleryUl.insertAdjacentHTML('beforeend', createElement());
},{"./main-objects.js":"js/main-objects.js","./refs.js":"js/refs.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./js/event");

require("./js/create-element-gallery");

require("./js/main-objects.js");

require("./js/refs.js");

require("./js/open-click-gallery.js");

require("./js/close-modal.js");

require("./js/onBackdropClick.js");

require("./js/onarrow.js");
},{"./js/event":"js/event.js","./js/create-element-gallery":"js/create-element-gallery.js","./js/main-objects.js":"js/main-objects.js","./js/refs.js":"js/refs.js","./js/open-click-gallery.js":"js/open-click-gallery.js","./js/close-modal.js":"js/close-modal.js","./js/onBackdropClick.js":"js/onBackdropClick.js","./js/onarrow.js":"js/onarrow.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56376" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map