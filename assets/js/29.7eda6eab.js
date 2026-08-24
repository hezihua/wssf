(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useShowModule; });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function useInstance() {
  const vm = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* getCurrentInstance */ "d"])();
  if (!vm) throw new Error('must be called in setup');
  const instance = (vm === null || vm === void 0 ? void 0 : vm.proxy) || {};
  return instance;
}
function useShowModule() {
  const recoShowModule = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "h"])(false);
  Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* onMounted */ "e"])(() => {
    recoShowModule.value = true;
  });
  Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* onUpdated */ "f"])(() => {
    recoShowModule.value = false;
    setTimeout(() => {
      recoShowModule.value = true;
    }, 100);
  });
  return {
    recoShowModule
  };
}

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(351),
      utf8 = __webpack_require__(336).utf8,
      isBuffer = __webpack_require__(352),
      bin = __webpack_require__(336).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 351:
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 352:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendLink_vue_vue_type_style_index_0_id_58a4b03a_prod_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendLink_vue_vue_type_style_index_0_id_58a4b03a_prod_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_0_6_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_css_loader_2_1_1_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_3_0_2_stylus_0_54_8_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_3_0_1_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_11_1_cache_loader_3_0_1_css_loader_2_1_1_vue_template_compiler_2_7_16_webpack_4_47_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendLink_vue_vue_type_style_index_0_id_58a4b03a_prod_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.pnpm/@vuepress+core@1.9.10/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"dacb6a92-vue-loader-template"}!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??vue-loader-options!./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/FriendLink.vue?vue&type=template&id=58a4b03a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "friend-link-wrapper"
  }, _vm._l(_vm.dataAddColor, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "friend-link-item",
      attrs: {
        "target": "_blank"
      },
      on: {
        "mouseenter": function ($event) {
          return _vm.showDetail($event);
        },
        "mouseleave": function ($event) {
          return _vm.hideDetail($event);
        }
      }
    }, [_c('span', {
      staticClass: "list-style",
      style: {
        'backgroundColor': item.color
      }
    }), _vm._v("\n    " + _vm._s(item.title) + "\n    "), _c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      staticClass: "popup-window-wrapper"
    }, [_c('div', {
      ref: "popupWindow",
      refInFor: true,
      staticClass: "popup-window",
      style: _vm.popupWindowStyle
    }, [_c('div', {
      staticClass: "logo"
    }, [_c('img', {
      attrs: {
        "src": _vm.getImgUrl(item)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "title"
    }, [_c('h4', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('a', {
      staticClass: "btn-go",
      style: {
        'backgroundColor': item.color
      },
      attrs: {
        "href": item.link,
        "target": "_blank"
      }
    }, [_vm._v("GO")])]), _vm._v(" "), item.desc ? _c('p', [_vm._v(_vm._s(item.desc))]) : _vm._e()])])])])], 1);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/FriendLink.vue?vue&type=template&id=58a4b03a&scoped=true

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/.pnpm/md5@2.2.1/node_modules/md5/md5.js
var md5 = __webpack_require__(350);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// EXTERNAL MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/helpers/other.js
var other = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/helpers/composable.js
var composable = __webpack_require__(319);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.9_webpack@4.47.0/node_modules/babel-loader/lib??ref--3-1!./node_modules/.pnpm/cache-loader@3.0.1_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib??vue-loader-options!./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/FriendLink.vue?vue&type=script&lang=js




const useDetail = () => {
  const instance = Object(composable["a" /* useInstance */])();
  const isPC = Object(vue_runtime_esm["h" /* ref */])(true);
  const popupWindowStyle = Object(vue_runtime_esm["g" /* reactive */])({
    left: 0,
    top: 0
  });
  const adjustPosition = dom => {
    const {
      offsetWidth
    } = document.body;
    const {
      x,
      width
    } = dom.getBoundingClientRect();
    const distanceToRight = offsetWidth - (x + width);
    if (distanceToRight < 0) {
      const {
        offsetLeft
      } = dom;
      popupWindowStyle.left = offsetLeft + distanceToRight + 'px';
    }
  };
  const showDetail = e => {
    const currentDom = e.target;
    const popupWindowWrapper = currentDom.querySelector('.popup-window-wrapper');
    popupWindowWrapper.style.display = 'block';
    const popupWindow = currentDom.querySelector('.popup-window');
    const infoWrapper = document.querySelector('.info-wrapper');
    const {
      clientWidth
    } = currentDom;
    const {
      clientWidth: windowWidth,
      clientHeight: windowHeight
    } = popupWindow;
    if (isPC) {
      popupWindowStyle.left = (clientWidth - windowWidth) / 2 + 'px';
      popupWindowStyle.top = -windowHeight + 'px';
      infoWrapper.style.overflow = 'visible';
      instance.$nextTick(() => {
        adjustPosition(popupWindow);
      });
    } else {
      const getPosition = function (element) {
        const dc = document;
        const rec = element.getBoundingClientRect();
        let _x = rec.left;
        let _y = rec.top;
        _x += dc.documentElement.scrollLeft || dc.body.scrollLeft;
        _y += dc.documentElement.scrollTop || dc.body.scrollTop;
        return {
          left: _x,
          top: _y
        };
      };
      infoWrapper.style.overflow = 'hidden';
      const left = getPosition(currentDom).left - getPosition(infoWrapper).left;
      popupWindowStyle.left = -left + (infoWrapper.clientWidth - popupWindow.clientWidth) / 2 + 'px';
      popupWindowStyle.top = -windowHeight + 'px';
    }
  };
  const hideDetail = e => {
    const currentDom = e.target.querySelector('.popup-window-wrapper');
    currentDom.style.display = 'none';
  };
  Object(vue_runtime_esm["e" /* onMounted */])(() => {
    isPC.value = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  });
  return {
    popupWindowStyle,
    showDetail,
    hideDetail
  };
};
/* harmony default export */ var FriendLinkvue_type_script_lang_js = (Object(vue_runtime_esm["c" /* defineComponent */])({
  setup(props, ctx) {
    const instance = Object(composable["a" /* useInstance */])();
    const {
      popupWindowStyle,
      showDetail,
      hideDetail
    } = useDetail();
    const dataAddColor = Object(vue_runtime_esm["a" /* computed */])(() => {
      const {
        friendLink = []
      } = instance && instance.$themeConfig;
      return friendLink.map(item => {
        item.color = Object(other["b" /* getOneColor */])();
        return item;
      });
    });
    const getImgUrl = info => {
      const {
        logo = '',
        email = ''
      } = info;
      if (logo && /^http/.test(logo)) return logo;
      if (logo && !/^http/.test(logo)) return instance.$withBase(logo);
      return `//1.gravatar.com/avatar/${md5_default()(email || '')}?s=50&amp;d=mm&amp;r=x`;
    };
    return {
      dataAddColor,
      popupWindowStyle,
      showDetail,
      hideDetail,
      getImgUrl
    };
  }
}));
// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/FriendLink.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FriendLinkvue_type_script_lang_js = (FriendLinkvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/FriendLink.vue?vue&type=style&index=0&id=58a4b03a&prod&lang=stylus&scoped=true
var FriendLinkvue_type_style_index_0_id_58a4b03a_prod_lang_stylus_scoped_true = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-loader@3.0.1_css-loader@2.1.1_vue-template-compiler@2.7.16_webpack@4.47.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/.pnpm/vuepress-theme-reco@1.6.17_chalk@2.4.2_commander@2.20.3_esm@3.2.25_vue-class-component@7.2.6_vuepress@1.9.10/node_modules/vuepress-theme-reco/components/FriendLink.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FriendLinkvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "58a4b03a",
  null
  
)

/* harmony default export */ var FriendLink = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);