;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/index.js", filename: "/root/generals/node_modules/typenode/index.js", isModuleMain: "/root/generals/node_modules/typenode", paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/index.js","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/index.js","loaded":true,"TYPENODE_INSTALL":true}, moduleFnc: (function index_js(exports, require, module, __filename, __dirname) { /* No contents */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileYarnInstall.js", filename: "/root/generals/node_modules/typenode/compileYarnInstall.js", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileYarnInstall.js","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileYarnInstall.js","loaded":true}, moduleFnc: (function compileYarnInstall_js(exports, require, module, __filename, __dirname) { /* No contents */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileTS.js", filename: "/root/generals/node_modules/typenode/compileTS.js", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileTS.js","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileTS.js","loaded":true}, moduleFnc: (function compileTS_js(exports, require, module, __filename, __dirname) { /* No contents */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileCache.js", filename: "/root/generals/node_modules/typenode/compileCache.js", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileCache.js","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileCache.js","loaded":true}, moduleFnc: (function compileCache_js(exports, require, module, __filename, __dirname) { /* No contents */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/atomicIO.js", filename: "/root/generals/node_modules/typenode/atomicIO.js", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/atomicIO.js","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/atomicIO.js","loaded":true}, moduleFnc: (function atomicIO_js(exports, require, module, __filename, __dirname) { /* No contents */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileFixESM.js", filename: "/root/generals/node_modules/typenode/compileFixESM.js", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileFixESM.js","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileFixESM.js","loaded":true}, moduleFnc: (function compileFixESM_js(exports, require, module, __filename, __dirname) { /* No contents */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileDirFlags.ts", filename: "/root/generals/node_modules/typenode/compileDirFlags.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileDirFlags.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileDirFlags.ts","loaded":true,"sourceSHA256":"265c6f85eeb907386d25b75dc6b11c37b787f788b64d51924d57c5f052b4c91f","size":8100,"version":1,"evalStartTime":1781595900906,"evalEndTime":1781595900910}, moduleFnc: (function compileDirFlags_ts(exports, require, module, __filename, __dirname) { "use strict";
/**
 *      Looks for adjacent x.flag files, setting an x flag on the module if they exist.
 *      - Also checks parent directories
 *
 *      - Ex, if test.js has a sibling file called allowclient.flag, then the test.js
 *          module has allowclient = true set on it.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
exports.forceModule = void 0;
const fs = __importStar(require("fs"));
// NOTE: Not using import, as the types complain about what we are doing too much.
const Module = require("module");
// We need at least 1 export, to force this to be treated like a module
exports.forceModule = true;
let flagsPerDir = Object.create(null);
function getFlagsForDir(dir) {
    let flags = flagsPerDir[dir];
    if (!flags) {
        flags = Object.create(null);
        flagsPerDir[dir] = flags;
        let filesInDir;
        try {
            filesInDir = fs.readdirSync(dir);
        }
        catch (_a) { }
        if (filesInDir) {
            for (let flag of filesInDir.filter(x => x.endsWith(".flag"))) {
                flags[flag.slice(0, -".flag".length)] = true;
            }
        }
    }
    return flags;
}
const base = Module.prototype.load;
Module.prototype.load = function () {
    let result = base.apply(this, arguments);
    if (this.filename) {
        let flags = Object.create(null);
        let dirParts = this.filename.replace(/\\/g, "/").split("/").slice(0, -1);
        for (let i = 1; i <= dirParts.length; i++) {
            Object.assign(flags, getFlagsForDir(dirParts.slice(0, i).join("/")));
        }
        for (let key in flags) {
            let value = flags[key];
            // NOTE: Don't set flags which are EXPLICITLY set to false
            if (this[key] !== false) {
                this[key] = value;
            }
        }
    }
    return result;
};
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "7fb9d9851324581c58df9886c0ca47908feb14d3419752ce85e087b6bd73d22b"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", filename: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","loaded":true,"sourceSHA256":"9701d799d870e1117bdda5b6b1ef57e9d2a55fd14630e2d7a8416ad72c2e0fb7","size":3670,"version":1,"evalStartTime":1781595900911,"evalEndTime":1781595900911.01}, moduleFnc: (function compileRecordModuleRequires_ts(exports, require, module, __filename, __dirname) { "use strict";
/**
 *      Adds module.requires, which indicates the result of every require per module.
 */
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.forceModule = void 0;
// NOTE: Not using import, as the types complain about what we are doing too much.
const Module = eval("require")("module");
// We need at least 1 export, to force this to be treated like a module
exports.forceModule = true;
const base = Module.prototype.require;
Module.prototype.require = function (request) {
    this.requires = this.requires || {};
    this.asyncRequires = this.asyncRequires || {};
    if (this.evalEndTime && !this.requires[request]) {
        this.asyncRequires[request] = true;
    }
    // NOTE: Doing resolveFilename on every require breaks a lot of the caching NodeJS does
    //  to try to avoid calling resolveFilename. However... their caching is probably no longer
    //  needed anymore.
    this.requires[request] = Module._resolveFilename(request, this, false);
    return base.apply(this, arguments);
};
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "53b9f3a87587b2c181b1b66c3b94ed77732e8c7f25d5043b4cfb68a0998411db"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","loaded":true,"sourceSHA256":"30c072ee646adbd818d776f22b2185a81c98ee3dfbd308e1b34876cdabb03dff","size":9004,"version":1,"evalStartTime":1781595900912,"evalEndTime":1781595900916.06}, moduleFnc: (function bundler_ts(exports, require, module, __filename, __dirname) { "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule && mod.default) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.extractBundleHash = exports.bundle = void 0;
const js_sha256_1 = require("js-sha256");
const bundleRequire_1 = require("./bundleRequire");
const bundleWrapper_1 = require("./bundleWrapper");
const sourceMaps_1 = require("./sourceMaps");
const fs_1 = __importDefault(require("fs"));
async function bundle(config) {
    const { modules, rootPath, entryPoints } = config;
    // NOTE: We COULD use an "index source map", which contains other sourcemaps
    //  and gives offsets for them. However... tooling support will is better
    //  for regular sourcemaps, and it's more flexible.
    let inProgressSourceMap = {
        sources: [],
        mappings: [],
    };
    let code = "";
    let curLineCount = 0;
    for (let module of modules) {
        if (!module)
            continue;
        let newCode = (0, bundleWrapper_1.wrapModule)(module);
        let { sourceMap, code: newCode2 } = (0, sourceMaps_1.removeSourceMap)(newCode);
        newCode = newCode2;
        if (sourceMap) {
            let inProgress = (0, sourceMaps_1.getInProgressSourceMap)(sourceMap);
            for (let mapping of inProgress.mappings) {
                mapping.generatedLine += curLineCount;
            }
            (0, sourceMaps_1.addToInProgressSourceMap)(inProgressSourceMap, inProgress);
        }
        code += newCode + "\n";
        curLineCount += (newCode.match(/\n/g) || []).length + 1;
    }
    code += "\n/* Inlined buffer implementation: */\n";
    code += `\n;\n${fs_1.default.readFileSync(__dirname + "/buffer.js").toString()}\n;\n`;
    code += `\n;globalThis.__BUNDLE_HASH__ = ${JSON.stringify((0, js_sha256_1.sha256)(code))};`;
    let bundleConfig = {
        rootPath,
    };
    code += `;(${bundleRequire_1.bundleRequire.toString()})(${JSON.stringify(bundleConfig)});`;
    // Delay the initial requires, so our extension can boot and we can debug startup errors
    code += "\n;setTimeout(() => {";
    for (let entryPoint of entryPoints) {
        code += `\n;globalThis.require(${JSON.stringify(entryPoint)});`;
    }
    code += "\n;});";
    code += "\n" + (0, sourceMaps_1.encodeSourceMapLineComment)((0, sourceMaps_1.finalizeInProgressSourceMap)(inProgressSourceMap));
    return {
        bundle: code,
    };
}
exports.bundle = bundle;
function extractBundleHash(code) {
    let match = code.match(/;globalThis.__BUNDLE_HASH__ = "([^"]+)";/);
    if (!match)
        return undefined;
    return match[1];
}
exports.extractBundleHash = extractBundleHash;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "195272562986c65a1aea7f7f87d4635e04cfe02662426c8cdca6558ed654ea0e"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/js-sha256/src/sha256.js", filename: "/root/generals/node_modules/js-sha256/src/sha256.js", isModuleMain: "/root/generals/node_modules/js-sha256", paths: ["/root/generals/node_modules/js-sha256/src/node_modules","/root/generals/node_modules/js-sha256/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/js-sha256/src/sha256.js","path":"/root/generals/node_modules/js-sha256/src","filename":"/root/generals/node_modules/js-sha256/src/sha256.js","loaded":true,"sourceSHA256":"2db6c8e554fbee14672368a0d7551a8ddd841ee96c91526eb7987a0179cfc717","size":18769,"version":1,"evalStartTime":1781595900912.01,"evalEndTime":1781595900913}, moduleFnc: (function sha_js(exports, require, module, __filename, __dirname) { /**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2025
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node && process.type != 'renderer';
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = require('crypto')
    var Buffer = require('buffer').Buffer;
    var algorithm = is224 ? 'sha224' : 'sha256';
    var bufferFrom;
    if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
      bufferFrom = Buffer.from;
    } else {
      bufferFrom = function (message) {
        return new Buffer(message);
      };
    }
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >>> 2] |= (0xc0 | (code >>> 6)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >>> 2] |= (0xe0 | (code >>> 12)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >>> 2] |= (0xf0 | (code >>> 18)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >>> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
      this.chromeBugWorkAround = true;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >>> 28) & 0x0F] + HEX_CHARS[(h0 >>> 24) & 0x0F] +
      HEX_CHARS[(h0 >>> 20) & 0x0F] + HEX_CHARS[(h0 >>> 16) & 0x0F] +
      HEX_CHARS[(h0 >>> 12) & 0x0F] + HEX_CHARS[(h0 >>> 8) & 0x0F] +
      HEX_CHARS[(h0 >>> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >>> 28) & 0x0F] + HEX_CHARS[(h1 >>> 24) & 0x0F] +
      HEX_CHARS[(h1 >>> 20) & 0x0F] + HEX_CHARS[(h1 >>> 16) & 0x0F] +
      HEX_CHARS[(h1 >>> 12) & 0x0F] + HEX_CHARS[(h1 >>> 8) & 0x0F] +
      HEX_CHARS[(h1 >>> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >>> 28) & 0x0F] + HEX_CHARS[(h2 >>> 24) & 0x0F] +
      HEX_CHARS[(h2 >>> 20) & 0x0F] + HEX_CHARS[(h2 >>> 16) & 0x0F] +
      HEX_CHARS[(h2 >>> 12) & 0x0F] + HEX_CHARS[(h2 >>> 8) & 0x0F] +
      HEX_CHARS[(h2 >>> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >>> 28) & 0x0F] + HEX_CHARS[(h3 >>> 24) & 0x0F] +
      HEX_CHARS[(h3 >>> 20) & 0x0F] + HEX_CHARS[(h3 >>> 16) & 0x0F] +
      HEX_CHARS[(h3 >>> 12) & 0x0F] + HEX_CHARS[(h3 >>> 8) & 0x0F] +
      HEX_CHARS[(h3 >>> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >>> 28) & 0x0F] + HEX_CHARS[(h4 >>> 24) & 0x0F] +
      HEX_CHARS[(h4 >>> 20) & 0x0F] + HEX_CHARS[(h4 >>> 16) & 0x0F] +
      HEX_CHARS[(h4 >>> 12) & 0x0F] + HEX_CHARS[(h4 >>> 8) & 0x0F] +
      HEX_CHARS[(h4 >>> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >>> 28) & 0x0F] + HEX_CHARS[(h5 >>> 24) & 0x0F] +
      HEX_CHARS[(h5 >>> 20) & 0x0F] + HEX_CHARS[(h5 >>> 16) & 0x0F] +
      HEX_CHARS[(h5 >>> 12) & 0x0F] + HEX_CHARS[(h5 >>> 8) & 0x0F] +
      HEX_CHARS[(h5 >>> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >>> 28) & 0x0F] + HEX_CHARS[(h6 >>> 24) & 0x0F] +
      HEX_CHARS[(h6 >>> 20) & 0x0F] + HEX_CHARS[(h6 >>> 16) & 0x0F] +
      HEX_CHARS[(h6 >>> 12) & 0x0F] + HEX_CHARS[(h6 >>> 8) & 0x0F] +
      HEX_CHARS[(h6 >>> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >>> 28) & 0x0F] + HEX_CHARS[(h7 >>> 24) & 0x0F] +
        HEX_CHARS[(h7 >>> 20) & 0x0F] + HEX_CHARS[(h7 >>> 16) & 0x0F] +
        HEX_CHARS[(h7 >>> 12) & 0x0F] + HEX_CHARS[(h7 >>> 8) & 0x0F] +
        HEX_CHARS[(h7 >>> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >>> 24) & 0xFF, (h0 >>> 16) & 0xFF, (h0 >>> 8) & 0xFF, h0 & 0xFF,
      (h1 >>> 24) & 0xFF, (h1 >>> 16) & 0xFF, (h1 >>> 8) & 0xFF, h1 & 0xFF,
      (h2 >>> 24) & 0xFF, (h2 >>> 16) & 0xFF, (h2 >>> 8) & 0xFF, h2 & 0xFF,
      (h3 >>> 24) & 0xFF, (h3 >>> 16) & 0xFF, (h3 >>> 8) & 0xFF, h3 & 0xFF,
      (h4 >>> 24) & 0xFF, (h4 >>> 16) & 0xFF, (h4 >>> 8) & 0xFF, h4 & 0xFF,
      (h5 >>> 24) & 0xFF, (h5 >>> 16) & 0xFF, (h5 >>> 8) & 0xFF, h5 & 0xFF,
      (h6 >>> 24) & 0xFF, (h6 >>> 16) & 0xFF, (h6 >>> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >>> 24) & 0xFF, (h7 >>> 16) & 0xFF, (h7 >>> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >>> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >>> 12));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >>> 18));
          bytes[index++] = (0x80 | ((code >>> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","loaded":true,"sourceSHA256":"49578775d45f6354669c3f29f6c2318f95495af6eea1d9cd136c89626f76394e","size":34216,"version":1,"evalStartTime":1781595900913.01,"evalEndTime":1781595900913.02}, moduleFnc: (function bundleRequire_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.bundleRequire = void 0;
function bundleRequire(config) {
    globalThis.process = globalThis.process || {
        env: {
            NODE_ENV: "production",
        },
        versions: {},
        on: () => { },
    };
    // Use production, for consistency (and so mobx doesn't break)
    globalThis.process.env.NODE_ENV = globalThis.process.env.NODE_ENV || "production";
    globalThis.window = globalThis.window || globalThis;
    globalThis.global = globalThis.global || globalThis;
    globalThis.setImmediate = globalThis.setImmediate || globalThis.setTimeout;
    globalThis.BOOTED_EDGE_NODE = undefined;
    let builtInModuleExports = {
        worker_threads: {
            isMainThread: true,
        },
        util: {
            // https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor
            inherits(constructor, superConstructor) {
                Object.setPrototypeOf(constructor.prototype, superConstructor.prototype);
            },
            TextDecoder: TextDecoder,
            TextEncoder: TextEncoder,
        },
        buffer: { Buffer },
        stream: {
            // HACK: Needed to get SAX JS to work correctly.
            Stream: function () { },
            Transform: function () { },
            Writable: function () { },
        },
        timers: {
            // TODO: Add all members of timers
            setImmediate: globalThis.setImmediate,
        },
        child_process: {},
        events: class EventEmitter {
        },
    };
    if (typeof require !== "undefined") {
        const builtInRequire = require;
        let allBuiltInModules = new Set();
        allBuiltInModules.add("electron");
        allBuiltInModules.add("original-fs");
        allBuiltInModules.add("vscode");
        try {
            // Change the builts ins to use the actual built ins!
            let { builtinModules } = require("node:module");
            for (let key of builtinModules) {
                allBuiltInModules.add(key);
            }
        }
        catch (_a) { }
        for (let key of allBuiltInModules) {
            Object.defineProperty(builtInModuleExports, key, {
                get() {
                    return builtInRequire(key);
                },
            });
        }
    }
    // Just path.resolve (but needs to be reimplemented, because we can't use imports)
    function pathResolve(...paths) {
        // Start with empty path segments array
        let segments = [];
        let isWindowsPath = false;
        paths = paths.map(x => x.replace(/\\/g, "/"));
        // Process each path argument
        for (const path of paths) {
            // Check for Windows drive letter (e.g., C:/)
            if (/^[A-Za-z]:/.test(path)) {
                isWindowsPath = true;
                // Remove drive letter for processing
                const withoutDrive = path.slice(2);
                if (withoutDrive.startsWith("/")) {
                    segments = [path.slice(0, 2)]; // Keep drive letter and reset segments
                }
                else {
                    // If no leading slash, keep current segments (relative to current drive path)
                    if (segments.length === 0 || !segments[0].match(/^[A-Za-z]:/)) {
                        segments = [path.slice(0, 2)];
                    }
                }
                // Add the rest of the path parts
                segments.push(...withoutDrive.split("/").filter(x => x));
                continue;
            }
            // If absolute path, reset segments but keep drive letter if present
            if (path.startsWith("/")) {
                if (isWindowsPath && segments.length > 0 && segments[0].match(/^[A-Za-z]:/)) {
                    const drive = segments[0];
                    segments = [drive];
                }
                else {
                    segments = [];
                }
            }
            // Split path into segments and process each
            const pathParts = path.split("/").filter(x => x);
            for (const part of pathParts) {
                if (part === "..") {
                    // Don't pop off the drive letter
                    if (segments.length > (isWindowsPath ? 1 : 0)) {
                        segments.pop();
                    }
                }
                else if (part !== ".") {
                    // Add segment if not current directory marker
                    segments.push(part);
                }
            }
        }
        // Combine segments into final path
        let result = segments.join("/");
        if (!isWindowsPath) {
            result = "/" + result;
        }
        return result;
    }
    function dirname(path) {
        return path.split("/").slice(0, -1).join("/");
    }
    const requireCache = {};
    let rootModule = createModule({
        parentModule: undefined,
        resolveAbsolutePath: config.rootPath + "/rootPlaceholder",
    });
    globalThis.require = rootModule.require;
    function createModule(config) {
        var _a;
        const { parentModule, resolveAbsolutePath } = config;
        let cached = requireCache[resolveAbsolutePath];
        if (cached) {
            return cached;
        }
        let serialized = (_a = globalThis.registeredModules) === null || _a === void 0 ? void 0 : _a[resolveAbsolutePath];
        let newModule = {
            id: resolveAbsolutePath,
            filename: resolveAbsolutePath,
            exports: {},
            parent: parentModule,
            children: [],
            isPreloading: false,
            loaded: false,
            path: dirname(resolveAbsolutePath),
            paths: (serialized === null || serialized === void 0 ? void 0 : serialized.paths) || [],
            require: requireFnc,
            load,
        };
        newModule.exports.default = newModule.exports;
        if (parentModule) {
            parentModule.children.push(newModule);
        }
        for (let [key, value] of Object.entries((serialized === null || serialized === void 0 ? void 0 : serialized.moduleFields) || {})) {
            if (key in newModule)
                continue;
            newModule[key] = value;
        }
        resolve.paths = (request) => [];
        requireCache[newModule.id] = newModule;
        requireFnc.resolve = resolve;
        requireFnc.cache = requireCache;
        requireFnc.main = newModule;
        requireFnc.extensions = "extension not implemented yet";
        // Resolves file extensions
        function innerResolve(path) {
            var _a;
            let candidates = [
                path,
                path + ".js",
                path + ".ts",
                path + ".tsx",
            ];
            for (let candidate of candidates) {
                let registered = (_a = globalThis.registeredModules) === null || _a === void 0 ? void 0 : _a[candidate];
                if (registered) {
                    return registered.id;
                }
            }
            return path;
        }
        function resolve(path) {
            var _a;
            path = path.replace(/\\/g, "/");
            if (path.startsWith(".")) {
                return innerResolve(pathResolve(newModule.path, path));
            }
            // We need to search all paths
            for (let searchRoot of (serialized === null || serialized === void 0 ? void 0 : serialized.paths) || []) {
                let candidate = innerResolve(pathResolve(searchRoot, path));
                let registered = (_a = globalThis.registeredModules) === null || _a === void 0 ? void 0 : _a[candidate];
                if (registered) {
                    return registered.id;
                }
            }
            // It is probably "fs" or something like that
            return path;
            // debugger;
            // throw new Error(`Module ${path} not found`);
        }
        function requireFnc(path) {
            if (path in builtInModuleExports) {
                return builtInModuleExports[path];
            }
            let resolved = resolve(path);
            let subModule = createModule({
                parentModule: newModule,
                resolveAbsolutePath: resolved,
            });
            subModule.load(newModule.filename);
            return subModule.exports;
        }
        function load() {
            var _a;
            if (newModule.loaded)
                return;
            // NOTE: Set loaded immediately, in case we have a circular dependency
            newModule.loaded = true;
            if (serialized) {
                serialized.moduleFnc(newModule.exports, requireFnc, newModule, newModule.filename, newModule.path);
            }
            else {
                // If we are being imported by the root module, we need to throw an error
                if (!((_a = config.parentModule) === null || _a === void 0 ? void 0 : _a.parent)) {
                    debugger;
                    throw new Error(`Could not find required module ${JSON.stringify(config.resolveAbsolutePath)}, have ${JSON.stringify(Object.keys(globalThis.registeredModules || {}))}`);
                }
                newModule.exports = new Proxy({}, {
                    get(target, property) {
                        if (property === "__esModule")
                            return undefined;
                        if (property === "default")
                            return newModule.exports;
                        console.warn(`Module ${newModule.filename} is not available. It might have not been imported in Node.js due to a flag which is checking the browser or an environment variable. It might also be that the entry point is weirdly configured and could not be detected.`);
                        return undefined;
                    },
                });
            }
        }
        return newModule;
    }
}
exports.bundleRequire = bundleRequire;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "3a5cb1cf48402a38d7b231875a9c775b74e9d09a18830df9abb4cd229190d2c4"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","loaded":true,"sourceSHA256":"59f01474432e6ffc76323e5e684ce5f7931537223999780ab735af331faac1d2","size":16004,"version":1,"evalStartTime":1781595900914,"evalEndTime":1781595900916.03}, moduleFnc: (function bundleWrapper_ts(exports, require, module, __filename, __dirname) { "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule && mod.default) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.wrapModule = void 0;
const caching_1 = require("socket-function/src/caching");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const getPackageJsonPath = (0, caching_1.cache)((directory) => {
    if (!directory.includes("/") && !directory.includes("\\")) {
        return undefined;
    }
    let packageJsonPath = path_1.default.resolve(directory, "package.json");
    if (fs_1.default.existsSync(packageJsonPath)) {
        return packageJsonPath;
    }
    return getPackageJsonPath(path_1.default.dirname(directory));
});
const getMainPath = (0, caching_1.cache)((directory) => {
    var _a, _b;
    let packageJsonPath = getPackageJsonPath(directory);
    if (!packageJsonPath)
        return undefined;
    let packageJson = JSON.parse(fs_1.default.readFileSync(packageJsonPath, "utf8"));
    let dir = path_1.default.dirname(packageJsonPath);
    let mainName = ((_b = (_a = packageJson.exports) === null || _a === void 0 ? void 0 : _a["."]) === null || _b === void 0 ? void 0 : _b.require) || packageJson.main;
    if (!mainName) {
        if (fs_1.default.existsSync(path_1.default.resolve(dir, "index.js"))) {
            mainName = "index.js";
        }
        else if (fs_1.default.existsSync(path_1.default.resolve(dir, "index.ts"))) {
            mainName = "index.ts";
        }
        else if (fs_1.default.existsSync(path_1.default.resolve(dir, "index.tsx"))) {
            mainName = "index.tsx";
        }
        else {
            mainName = "index.js";
        }
    }
    // Handle the negative value ESM exports thing.
    let mainPath = path_1.default.resolve(dir, mainName);
    return mainPath;
});
// Wraps the module so it registers itself when the returned code is evaluated
//  - See https://nodejs.org/api/modules.html#the-module-wrapper
function wrapModule(module) {
    let contents = module.moduleContents || "/* No contents */";
    // NOTE: debugName only matters during module evaluation. After that the sourcemap should work.
    let debugName = module.filename
        .replace(/\\/g, "/")
        .split("/")
        .slice(-1)[0]
        .replace(/\./g, "_")
        .replace(/[^a-zA-Z_]/g, "");
    let wrapped = `(function ${debugName}(exports, require, module, __filename, __dirname) { ${contents}
    })`;
    let moduleFields = {};
    for (let [key, value] of Object.entries(module)) {
        if (typeof value === "function")
            continue;
        if (typeof value === "boolean") {
            moduleFields[key] = value;
        }
        else if (typeof value === "string" && value.length < 150) {
            moduleFields[key] = value;
        }
        else if (typeof value === "number") {
            moduleFields[key] = value;
        }
    }
    let moduleMain;
    let dirname = path_1.default.dirname(module.filename);
    let packageJsonPath = getPackageJsonPath(dirname);
    if (packageJsonPath) {
        let mainPath = getMainPath(dirname);
        if ((mainPath === null || mainPath === void 0 ? void 0 : mainPath.replaceAll("\\", "/")) === module.filename.replaceAll("\\", "/")) {
            // Then we are the main of the module
            moduleMain = path_1.default.dirname(packageJsonPath).replaceAll("\\", "/");
        }
    }
    // NOTE: We can't have new lines, or they break source maps
    let objWrapped = `{`
        + ` id: ${JSON.stringify(module.id.replaceAll("\\", "/"))},`
        + ` filename: ${JSON.stringify(module.filename.replaceAll("\\", "/"))},`
        + ` isModuleMain: ${JSON.stringify(moduleMain)},`
        + ` paths: ${JSON.stringify(module.paths.map(p => p.replaceAll("\\", "/")))},`
        + ` moduleFields: ${JSON.stringify(moduleFields)},`
        + ` moduleFnc: ${wrapped}`
        + ` }`;
    function initModule(serialized) {
        globalThis.registeredModules = globalThis.registeredModules || {};
        globalThis.registeredModules[serialized.id] = serialized;
        if (serialized.isModuleMain) {
            globalThis.registeredModules[serialized.isModuleMain] = serialized;
        }
    }
    return `;(${initModule.toString().replaceAll("\n", " ")})(${objWrapped});`;
}
exports.wrapModule = wrapModule;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "587a4e8206aa14f5e918dfd3a7249ce18e715c8ffcb585c3062b4748f6aeca4e"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","loaded":true,"sourceSHA256":"18c7fe69d9133c820e876a09f89bca1d68337a67d8b1a04589d48e371a77cbe2","size":36358,"version":1,"evalStartTime":1781595900914.01,"evalEndTime":1781595900916.02,"allowclient":true}, moduleFnc: (function caching_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.externalCache = exports.cacheShallowConfigArgEqual = exports.cacheJSONArgsEqual = exports.cacheArgsEqual = exports.cacheArrayEqual = exports.cacheList = exports.cacheWeak = exports.cacheLimited = exports.cache = exports.cacheEmptyArray = exports.lazy = void 0;
const misc_1 = require("./misc");
const types_1 = require("./types");
function lazy(factory) {
    let value = undefined;
    function get() {
        if (!value) {
            value = { value: factory() };
        }
        return value.value;
    }
    ;
    get.reset = () => {
        value = undefined;
    };
    get.set = (newValue) => {
        value = { value: newValue };
    };
    return get;
}
exports.lazy = lazy;
// NOTE: Empty arrays are so common, that it is useful to represent them as the same
//  emtpy array, to increase cache hit rates.
const emptyArray = [];
function cacheEmptyArray(array) {
    if (array.length === 0)
        return emptyArray;
    return array;
}
exports.cacheEmptyArray = cacheEmptyArray;
function cache(getValue) {
    let startingCalculating = new Set();
    let values = new Map();
    function cache(input, ...untracked) {
        let key = input;
        if (values.has(key)) {
            return values.get(key);
        }
        if (startingCalculating.has(key)) {
            // TODO: Fix the types here, by throwing, and then for the cases
            //  that don't throw, make our output type include undefined
            return undefined;
        }
        startingCalculating.add(key);
        let value = getValue(input, ...untracked);
        values.set(key, value);
        return value;
    }
    cache.clear = (key) => {
        values.delete(key);
        startingCalculating.delete(key);
    };
    cache.forceSet = (key, value) => {
        values.set(key, value);
        startingCalculating.add(key);
    };
    cache.getAllKeys = () => {
        return [...values.keys()];
    };
    cache.get = (key) => {
        return values.get(key);
    };
    cache.clearAll = () => {
        values.clear();
        startingCalculating.clear();
    };
    return cache;
}
exports.cache = cache;
/** Makes a cache that limits the number of entries, allowing you to put arbitrary data in it
 *      without worrying about leaking memory
  */
function cacheLimited(
// NOTE: We can't calculate what limit should be based on comparing the evaluation time
//  and the time to compare against the values. Because, even if finding a match takes far longer than
//  calculating, keeping a consistent output can save (a considerable amount of) time in downstream caches.
maxCount, getValue) {
    let startingCalculating = new Set();
    let values = new Map();
    function get(input) {
        let key = input;
        if (values.has(key)) {
            return values.get(key);
        }
        if (startingCalculating.has(key)) {
            throw new Error(`Cyclic access in cache`);
        }
        startingCalculating.add(key);
        // Clear when it gets too big. This is kind of like a worse
        //  least recently used cache, because entries that are accessed
        //  often will quickly get put back in. This is effective as long
        //  as accesses take similar amounts of time. If there is a very slow
        //  and very commonly accessed value, it could be evicted by many very
        //  fast accesses, which would be unfortunate.
        if (values.size >= maxCount) {
            values.clear();
            startingCalculating.clear();
        }
        let value = getValue(input);
        values.set(key, value);
        return value;
    }
    get["forceSet"] = (key, value) => {
        values.set(key, value);
        startingCalculating.add(key);
    };
    get["clearKey"] = (key) => {
        values.delete(key);
        startingCalculating.delete(key);
    };
    get["clear"] = () => {
        values.clear();
        startingCalculating.clear();
    };
    return get;
}
exports.cacheLimited = cacheLimited;
function cacheWeak(getValue) {
    let state = {
        startingCalculating: new WeakSet(),
        values: new WeakMap(),
    };
    return (input) => {
        let key = input;
        if (state.values.has(key)) {
            return state.values.get(key);
        }
        if (state.startingCalculating.has(key)) {
            throw new Error(`Cyclic access in cacheWeak`);
        }
        state.startingCalculating.add(key);
        let value = getValue(input);
        state.values.set(key, value);
        return value;
    };
}
exports.cacheWeak = cacheWeak;
// A list cache, which... maybe faster than a Map?
function cacheList(getLength, getValue) {
    let state = {
        cache: [],
        length: undefined,
        getLength,
    };
    function get(i) {
        let cache = state.cache;
        let length = state.length;
        if (length === undefined) {
            length = state.length = state.getLength();
        }
        if (i < 0 || i >= length) {
            throw new Error(`Index out of bounds`);
        }
        if (!(i in cache)) {
            cache[i] = getValue(i);
        }
        return cache[i];
    }
    ;
    return get;
}
exports.cacheList = cacheList;
function cacheArrayEqualCleanup(state) {
    state.cache = [];
}
/** A cache half way between caching based on === and caching based on hash. Caches
 *      based on arrayEqual, which does === on all values in an array. Requires localized
 *      caching (as the comparisons don't scale with many candidates, unlike hashing),
 *      however works with non trival transformations (ex, resolving many persisted overrides
 *      to get a value), unlike cache().
 *  Also, limits itself, more of a performance optimization than memory optimization, as it scales
 *      very poorly with the number of candidates.
 *
 *  TIMING: About 6us with limit = 100, array size = 294, and the cache being full.
 */
function cacheArrayEqual(map, limit = 10) {
    let state = { cache: [] };
    function isMatch(lhs, rhs) {
        if (lhs === rhs) {
            return true;
        }
        if (lhs === undefined || rhs === undefined) {
            return false;
        }
        if ((0, misc_1.arrayEqual)(lhs, rhs)) {
            return true;
        }
        return false;
    }
    return Object.assign((input) => {
        let cache = state.cache;
        for (let obj of cache) {
            if (isMatch(obj.input, input)) {
                return obj.output;
            }
        }
        let output = map(input);
        cache.unshift({ input, output });
        while (cache.length > limit) {
            cache.pop();
        }
        return output;
    }, {
        clear(array) {
            for (let i = state.cache.length - 1; i >= 0; i--) {
                if (isMatch(state.cache[i].input, array)) {
                    state.cache.splice(i, 1);
                }
            }
        },
        clearAll() {
            state.cache = [];
        },
    });
}
exports.cacheArrayEqual = cacheArrayEqual;
/** Caches when arguments are ===. See cacheArrayEqual */
function cacheArgsEqual(fnc, limit = 10) {
    let cache = cacheArrayEqual(function cacheArgsEqual(args) {
        return fnc(...args);
    }, limit);
    return Object.assign(((...args) => {
        return cache(args);
    }), {
        clear(...args) {
            cache.clear(args);
        },
    });
}
exports.cacheArgsEqual = cacheArgsEqual;
function cacheJSONArgsEqual(fnc, limit = 10) {
    let cache = cacheLimited(limit, (argsJSON) => {
        return fnc(...JSON.parse(argsJSON));
    });
    return Object.assign(((...args) => {
        return cache(JSON.stringify(args));
    }), {
        clear(...args) {
            cache.clearKey(JSON.stringify(args));
        },
        clearAll() {
            cache.clear();
        }
    });
}
exports.cacheJSONArgsEqual = cacheJSONArgsEqual;
function cacheShallowConfigArgEqual(fnc, limit = 10) {
    let cache = cacheArrayEqual((kvpsFlat) => {
        output.missCount++;
        let arg;
        if (kvpsFlat.length === 1) {
            arg = kvpsFlat[0];
        }
        else {
            let kvps = [];
            for (let i = 0; i < kvpsFlat.length; i += 2) {
                kvps.push([kvpsFlat[i], kvpsFlat[i + 1]]);
            }
            arg = Object.fromEntries(kvps);
        }
        return fnc(arg);
    }, limit);
    function getKVPs(configArg) {
        if (!(0, types_1.canHaveChildren)(configArg) || Array.isArray(configArg)) {
            return [configArg];
        }
        let keys = Object.keys(configArg);
        keys.sort();
        return keys.flatMap(key => [key, configArg[key]]);
    }
    let output = Object.assign(((configArg) => {
        output.callCount++;
        return cache(getKVPs(configArg));
    }), {
        clear(configArg) {
            cache.clear(getKVPs(configArg));
        },
        clearAll() {
            cache.clearAll();
        },
        callCount: 0,
        missCount: 0,
    });
    return output;
}
exports.cacheShallowConfigArgEqual = cacheShallowConfigArgEqual;
function externalCache() {
    let values = new Map();
    return {
        get: (key) => {
            return values.get(key);
        },
        set: (key, value) => {
            values.set(key, value);
        },
    };
}
exports.externalCache = externalCache;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "119deae8a7f148a54a45c41e30d85d963ce78d48a740825d86ac53801a2bb67a"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","loaded":true,"sourceSHA256":"9fb24f97ff53337f0c2b79dcb2cf03699e768351e01ce8199c98a968c81669a4","size":58046,"version":1,"evalStartTime":1781595900915,"evalEndTime":1781595900916.01,"allowclient":true}, moduleFnc: (function misc_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.errorToWarning = exports.timeoutToUndefinedSilent = exports.timeoutToUndefined = exports.timeoutToError = exports.removeFromSortedList = exports.insertIntoSortedList = exports.compareArray = exports.compare = exports.binarySearchIndex = exports.binarySearchBasic2 = exports.binarySearchBasic = exports.QueueLimited = exports.getRootDomain = exports.sort = exports.keys = exports.entries = exports.last = exports.arrayFromOrderObject = exports.nextId = exports.throttleFunction = exports.promiseObj = exports.PromiseObj = exports.deepCloneJSON = exports.keyByArray = exports.keyBy = exports.getStringKeys = exports.getKeys = exports.isBufferType = exports.recursiveFreeze = exports.list = exports.formatNumberSuffixed = exports.isNodeTrue = exports.isNode = exports.arrayEqual = exports.sha256BufferPromise = exports.sha256HashPromise = exports.sha256HashBuffer = exports.sha256Hash = exports.convertErrorStackToError = exports.timeInYear = exports.timeInWeek = exports.timeInDay = exports.timeInHour = exports.timeInMinute = exports.timeInSecond = void 0;
const types_1 = require("./types");
const format_1 = require("./formatting/format");
exports.timeInSecond = 1000;
exports.timeInMinute = exports.timeInSecond * 60;
exports.timeInHour = exports.timeInMinute * 60;
exports.timeInDay = exports.timeInHour * 24;
exports.timeInWeek = exports.timeInDay * 7;
exports.timeInYear = exports.timeInDay * 365;
function convertErrorStackToError(error) {
    let errorObj = new Error();
    errorObj.stack = String(error);
    errorObj.message = String(error).split("\n")[0].slice("Error: ".length);
    return errorObj;
}
exports.convertErrorStackToError = convertErrorStackToError;
function sha256Hash(buffer) {
    return require("crypto").createHash("sha256").update(buffer).digest("hex");
}
exports.sha256Hash = sha256Hash;
function sha256HashBuffer(buffer) {
    return require("crypto").createHash("sha256").update(buffer).digest();
}
exports.sha256HashBuffer = sha256HashBuffer;
/** Async, but works both clientside and serverside. */
async function sha256HashPromise(buffer) {
    if (isNode()) {
        return require("crypto").createHash("sha256").update(buffer).digest("hex");
    }
    else {
        let buf = await window.crypto.subtle.digest("SHA-256", buffer);
        return Buffer.from(buf).toString("hex");
    }
}
exports.sha256HashPromise = sha256HashPromise;
async function sha256BufferPromise(buffer) {
    if (isNode()) {
        return require("crypto").createHash("sha256").update(buffer).digest();
    }
    else {
        let buf = await window.crypto.subtle.digest("SHA-256", buffer);
        return Buffer.from(buf);
    }
}
exports.sha256BufferPromise = sha256BufferPromise;
function arrayEqual(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
exports.arrayEqual = arrayEqual;
function isNode() {
    return typeof document === "undefined" && typeof globalThis.WorkerGlobalScope === "undefined";
}
exports.isNode = isNode;
function isNodeTrue() {
    return isNode();
}
exports.isNodeTrue = isNodeTrue;
function formatNumberSuffixed(count) {
    return (0, format_1.formatNumber)(count);
}
exports.formatNumberSuffixed = formatNumberSuffixed;
function list(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(i);
    }
    return arr;
}
exports.list = list;
function recursiveFreeze(obj) {
    if (!(0, types_1.canHaveChildren)(obj))
        return obj;
    let visited = new Set();
    function iterate(obj) {
        if (!(0, types_1.canHaveChildren)(obj))
            return;
        if (visited.has(obj))
            return;
        visited.add(obj);
        if (ArrayBuffer.isView(obj))
            return;
        Object.freeze(obj);
        let keys = getKeys(obj);
        for (let key of keys) {
            iterate(obj[key]);
        }
    }
    iterate(obj);
    return obj;
}
exports.recursiveFreeze = recursiveFreeze;
function isBufferType(obj) {
    if (typeof obj !== "object")
        return false;
    if (!obj)
        return false;
    if (ArrayBuffer.isView(obj))
        return true;
    if (obj instanceof ArrayBuffer)
        return true;
    if (global.SharedArrayBuffer && obj instanceof global.SharedArrayBuffer)
        return true;
    return false;
}
exports.isBufferType = isBufferType;
function getKeys(obj) {
    if (typeof obj !== "object" && typeof obj !== "function" || obj === null) {
        return [];
    }
    if (obj instanceof MessagePort) {
        return [];
    }
    let keyArray;
    if (isBufferType(obj)) {
        keyArray = [];
    }
    else if (Array.isArray(obj)) {
        // NOTE: We convert the indexes to strings, because that is what javascript does,
        //  and differing from it causes regressions that we simply cannot rectify (it breaks hashing
        //  consistency).
        keyArray = Array(obj.length).fill(0).map((x, i) => String(i));
    }
    else {
        keyArray = Object.keys(obj);
    }
    for (let symbol of Object.getOwnPropertySymbols(obj)) {
        let key = Symbol.keyFor(symbol);
        if (key) {
            keyArray.push(symbol);
        }
    }
    return keyArray;
}
exports.getKeys = getKeys;
function getStringKeys(obj) {
    return Object.keys(obj);
}
exports.getStringKeys = getStringKeys;
function keyBy(arr, getKey) {
    let map = new Map();
    for (let item of arr) {
        map.set(getKey(item), item);
    }
    return map;
}
exports.keyBy = keyBy;
function keyByArray(arr, getKey) {
    let map = new Map();
    for (let item of arr) {
        let key = getKey(item);
        let arr = map.get(key);
        if (!arr) {
            arr = [];
            map.set(key, arr);
        }
        arr.push(item);
    }
    return map;
}
exports.keyByArray = keyByArray;
function deepCloneJSON(obj) {
    if (obj === undefined)
        return obj;
    let str = JSON.stringify(obj);
    // It is possible for an object to not be defined, but return undefined when JSON.stringified,
    //  via overriding the toJSON method.
    if (str === undefined)
        return undefined;
    return JSON.parse(str);
}
exports.deepCloneJSON = deepCloneJSON;
class PromiseObj {
    constructor() {
        this.resolve = (value) => {
            this.resolveCalled = true;
            if (typeof value === "object" && value !== null && value instanceof Promise) {
                value.then(value => this.value = { value }, error => this.value = { error });
            }
            else {
                this.value = { value };
            }
            this.baseResolve(value);
        };
        this.reject = (error) => {
            this.baseReject(error);
        };
        this.promise = new Promise((resolve, reject) => {
            this.baseResolve = resolve;
            this.baseReject = reject;
        });
        this.promise.then(value => this.value = { value }, error => this.value = { error });
    }
}
exports.PromiseObj = PromiseObj;
function promiseObj() {
    return new PromiseObj();
}
exports.promiseObj = promiseObj;
// Allows an immediate call, then delays the next call until the first call finishes + delay
//  - Drops all but the latest call, but only resolves the promises return to all
//      calls once the latest call finishes.
//  - Esentially the same as saying "don't run this function too often, don't run it in parallel,
//      and don't let functions runs be too close together".
function throttleFunction(delay, fnc) {
    let nextAllowedCall = 0;
    let pendingArgs = undefined;
    function doCall(args, promiseObj) {
        try {
            let result = fnc(...args);
            promiseObj.resolve(result);
            if (result instanceof Promise) {
                // NOTE: The caller should handle the promise. If not, they probably
                //  want the unresolved promise rejection, so they can handle it properly.
                void result.finally(() => {
                    nextAllowedCall = Date.now() + delay;
                    runNextCall();
                });
            }
            else {
                nextAllowedCall = Date.now() + delay;
                runNextCall();
            }
        }
        catch (e) {
            promiseObj.reject(e);
            nextAllowedCall = Date.now() + delay;
            runNextCall();
        }
    }
    function runNextCall() {
        if (nextAllowedCall === Number.POSITIVE_INFINITY)
            return;
        if (!pendingArgs)
            return;
        let time = Date.now();
        if (time > nextAllowedCall) {
            // Set nextAllowedCall to infinity, to prevent new calls from running
            //  until doCall finishes.
            nextAllowedCall = Number.POSITIVE_INFINITY;
            // Delay, so we don't turn a series of sequential calls to a series of nested calls
            //  (which will cause a stack overflow)
            setTimeout(() => {
                let args = pendingArgs;
                pendingArgs = undefined;
                if (!args) {
                    nextAllowedCall = 0;
                    console.warn(`Impossible, pendingArgs was reset when we shouldn't have even been in a call`);
                    return;
                }
                doCall(args.args, args.promiseObj);
            }, 0);
        }
        else {
            setTimeout(runNextCall, nextAllowedCall - time);
        }
    }
    return function (...args) {
        if (pendingArgs) {
            pendingArgs.args = args;
            return pendingArgs.promiseObj.promise;
        }
        pendingArgs = { args, promiseObj: promiseObj() };
        runNextCall();
        return pendingArgs.promiseObj.promise;
    };
}
exports.throttleFunction = throttleFunction;
function nextId() {
    return Date.now() + "_" + Math.random();
}
exports.nextId = nextId;
function arrayFromOrderObject(obj) {
    if (Array.isArray(obj))
        return obj.slice();
    return Object.entries(obj).sort((a, b) => +a[0] - +b[0]).map(x => x[1]).filter(x => x !== undefined && x !== null);
}
exports.arrayFromOrderObject = arrayFromOrderObject;
function last(arr) {
    return arr[arr.length - 1];
}
exports.last = last;
function entries(obj) {
    return Object.entries(obj);
}
exports.entries = entries;
function keys(obj) {
    return Object.keys(obj);
}
exports.keys = keys;
function sort(arr, sortKey) {
    if (arr.length <= 1)
        return arr;
    arr.sort((a, b) => compare(sortKey(a), sortKey(b)));
    return arr;
}
exports.sort = sort;
function getRootDomain(hostname) {
    if (hostname.startsWith("https://")) {
        hostname = hostname.slice("https://".length);
    }
    hostname = hostname.split("/")[0];
    let parts = hostname.split(".");
    hostname = parts.slice(-2).join(".");
    hostname = hostname.split(":")[0];
    return hostname;
}
exports.getRootDomain = getRootDomain;
class QueueLimited {
    constructor(maxCount) {
        this.maxCount = maxCount;
        this.items = [];
        this.nextIndex = 0;
    }
    push(item) {
        this.items[this.nextIndex] = item;
        this.nextIndex = (this.nextIndex + 1) % this.maxCount;
    }
    getAllUnordered() {
        return this.items;
    }
    reset() {
        this.items = [];
        this.nextIndex = 0;
    }
    clear() {
        this.reset();
    }
    getOldest() {
        if (this.items.length === 0)
            return undefined;
        let index = this.nextIndex - 1;
        if (index === -1) {
            index += this.maxCount;
        }
        return this.items[index];
    }
}
exports.QueueLimited = QueueLimited;
function binarySearchBasic(array, getVal, searchValue) {
    return binarySearchIndex(array.length, i => compare(getVal(array[i]), searchValue));
}
exports.binarySearchBasic = binarySearchBasic;
function binarySearchBasic2(array, getVal, searchValue) {
    return binarySearchIndex(array.length, i => compare(getVal(array[i]), getVal(searchValue)));
}
exports.binarySearchBasic2 = binarySearchBasic2;
/**
 *  Searches indexes, allowing you to query structures that aren't arrays. To search an array, use:
 *      `binarySearchIndex(array.length, i => compare(array[i], searchValue))`
 *
 *      NOTE: If there are duplicates, returns the first match.
 *
 *      NOTE: If the value can't be found, returns the bitwise negation of the index where it should be inserted.
 *
 *      NOTE: With `if (index < 0) index = ~index;` you will get an index of the value >= the target value.
 */
function binarySearchIndex(listCount, compare) {
    if (listCount === 0) {
        return ~0;
    }
    let min = 0;
    let max = listCount - 1;
    while (min < max) {
        let fingerIndex = Math.floor((max + min) / 2);
        let comparisonValue = compare(fingerIndex);
        if (comparisonValue < 0) {
            min = fingerIndex + 1;
        }
        else {
            max = fingerIndex;
        }
    }
    let comparison = compare(min);
    if (comparison === 0)
        return min;
    if (comparison > 0)
        return ~min;
    return ~(min + 1);
}
exports.binarySearchIndex = binarySearchIndex;
function compare(lhs, rhs) {
    if (typeof lhs !== typeof rhs) {
        return compare(typeof lhs, typeof rhs);
    }
    if (lhs === rhs)
        return 0;
    if (lhs === null && rhs !== null)
        return -1;
    if (lhs !== null && rhs === null)
        return 1;
    if (typeof lhs === "number") {
        if (Number.isNaN(lhs)) {
            if (Number.isNaN(rhs))
                return 0;
            return -1;
        }
        else {
            if (Number.isNaN(rhs))
                return +1;
        }
    }
    if (lhs < rhs)
        return -1;
    return 1;
}
exports.compare = compare;
function compareArray(lhs, rhs) {
    for (let i = 0; i < Math.min(lhs.length, rhs.length); i++) {
        let comparison = compare(lhs[i], rhs[i]);
        if (comparison !== 0)
            return comparison;
    }
    return lhs.length - rhs.length;
}
exports.compareArray = compareArray;
function insertIntoSortedList(list, map, element) {
    let searchValue = map(element);
    let index = binarySearchIndex(list.length, i => compare(map(list[i]), searchValue));
    if (index < 0)
        index = ~index;
    list.splice(index, 0, element);
}
exports.insertIntoSortedList = insertIntoSortedList;
function removeFromSortedList(list, map, searchValue) {
    let index = binarySearchIndex(list.length, i => compare(map(list[i]), searchValue));
    if (index < 0)
        return;
    list.splice(index, 1);
}
exports.removeFromSortedList = removeFromSortedList;
function timeoutToError(time, p, err) {
    return new Promise((resolve, reject) => {
        let timeout = setTimeout(() => reject(err()), time);
        p.then(resolve, reject).finally(() => clearTimeout(timeout));
    });
}
exports.timeoutToError = timeoutToError;
// NOTE: Both errors and timeouts are converted to undefined
function timeoutToUndefined(time, p) {
    return new Promise((resolve, reject) => {
        let timeout = setTimeout(() => {
            console.error(`timeoutToUndefined timed out after ${time}`);
            resolve(undefined);
        }, time);
        p.then(resolve, (err) => {
            console.error(`timeoutToUndefined error: ${err.stack}`);
            resolve(undefined);
        }).finally(() => clearTimeout(timeout));
    });
}
exports.timeoutToUndefined = timeoutToUndefined;
function timeoutToUndefinedSilent(time, p) {
    return new Promise((resolve, reject) => {
        let timeout = setTimeout(() => {
            resolve(undefined);
        }, time);
        p.then(resolve, (err) => {
            resolve(undefined);
        }).finally(() => clearTimeout(timeout));
    });
}
exports.timeoutToUndefinedSilent = timeoutToUndefinedSilent;
function errorToWarning(promise) {
    // Return the promise, so they can wait if they want, but have the return type be void,
    //  so that they don't have to await it.
    return promise.catch(e => {
        console.warn(e.stack);
        return undefined;
    });
}
exports.errorToWarning = errorToWarning;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "04077272e81d90c759613a7245a8791af380a3fe26561f4118d6074ab3ea3054"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","loaded":true,"sourceSHA256":"b3eafb6059634f367bc20abd9732161ad4f3498f56a540361080950856a4cb2a","size":1258,"version":1,"evalStartTime":1781595900915.01,"evalEndTime":1781595900915.02,"allowclient":true}, moduleFnc: (function types_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.canHaveChildren = void 0;
function canHaveChildren(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
exports.canHaveChildren = canHaveChildren;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "ea937c29143cb2e8959e6cd066d49be7fe410ccd03431380474bf4dd84de697f"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","loaded":true,"sourceSHA256":"75f76504af1be1552a350c93a747273950b42fb0959d5acee5ecfecb4a092947","size":55197,"version":1,"evalStartTime":1781595900915.03,"evalEndTime":1781595900916,"allowclient":true}, moduleFnc: (function format_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.formatPercent = exports.formatDate = exports.formatVeryNiceDateTime = exports.formatNiceDateTime = exports.formatFileTimestampLocal = exports.formatDateTimeDetailed = exports.formatDateTime = exports.formatBinaryNumber = exports.formatNumber = exports.formatMaxDecimals = exports.getTargetDecimals = exports.formatTime = void 0;
function formatTime(milliseconds, maxAbsoluteValue) {
    if (typeof milliseconds !== "number")
        return "";
    if (milliseconds === 0)
        return "0ms";
    if (milliseconds < 0) {
        return "-" + formatTime(-milliseconds, maxAbsoluteValue);
    }
    let scale = milliseconds;
    if (maxAbsoluteValue) {
        scale = Math.max(scale, maxAbsoluteValue);
    }
    if (scale < 1 / 1000) {
        return formatMaxDecimals(milliseconds * 1000 * 1000, 3) + "ns";
    }
    else if (scale < 1) {
        return formatMaxDecimals(milliseconds * 1000, 3) + "us";
    }
    else if (scale < 1000) {
        return formatMaxDecimals(milliseconds, 3) + "ms";
        // Use seconds until we have 10 minutes, as decimal minutes are confusing
    }
    else if (scale < 1000 * 60 * 10) {
        return formatMaxDecimals(milliseconds / 1000, 3) + "s";
    }
    else if (scale < 1000 * 60 * 60) {
        return formatMaxDecimals(milliseconds / 1000 / 60, 3) + "m";
    }
    else if (scale < 1000 * 60 * 60 * 24) {
        return formatMaxDecimals(milliseconds / 1000 / 60 / 60, 3) + "h";
        // } else if (milliseconds < 1000 * 60 * 60 * 24 * 10) {
        //     let remaining = Math.round(milliseconds / 1000);
        //     let seconds = remaining % 60;
        //     remaining -= seconds;
        //     remaining /= 60;
        //     let minutes = remaining % 60;
        //     remaining -= minutes;
        //     remaining /= 60;
        //     let hours = remaining;
        //     remaining -= hours;
        //     remaining /= 24;
        //     let days = remaining;
        //     let time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        //     if (days > 0) {
        //         if (days === 1) {
        //             time = `1 day ${time}`;
        //         } else {
        //             time = `${days} days ${time}`;
        //         }
        //     }
        //     return time;
    }
    else {
        let days = Math.round(milliseconds / 1000 / 60 / 60 / 24);
        return `${days} days`;
    }
}
exports.formatTime = formatTime;
function getTargetDecimals(maxAbsoluteValue, targetDigits) {
    let intDigits = Math.floor(Math.log10(maxAbsoluteValue) + 1);
    if (intDigits < 0)
        intDigits = 1;
    let decimalDigits = targetDigits - intDigits;
    // Happens if the number is so close to having too many digits that Math.log10 rounds it over.
    if (decimalDigits < 0) {
        decimalDigits = 0;
    }
    return decimalDigits;
}
exports.getTargetDecimals = getTargetDecimals;
/** Adds decimal digits to reach digits. If the number is simply too large, it won't remove
 *      digits, there will instead just be no decimal point.
 */
function formatMaxDecimals(num, targetDigits, maxAbsoluteValue, exactDecimals) {
    var _a;
    if (typeof num !== "number")
        return "0";
    // toFixed has a max of 100 digits
    if (targetDigits > 100)
        targetDigits = 100;
    if (!Number.isFinite(num))
        return num.toFixed(targetDigits);
    if (num < 0)
        return formatMaxDecimals(-num, targetDigits, maxAbsoluteValue, exactDecimals);
    // TIMING:
    //  ~50ns   toString
    //  ~400ns  toLocaleString
    //  ~500ns  toLocaleString("en-us")
    //  ~20us   toLocaleString("en-us", { maximumFractionDigits: 2 })
    // So, we are avoiding using toLocaleString, for now.
    maxAbsoluteValue = maxAbsoluteValue !== null && maxAbsoluteValue !== void 0 ? maxAbsoluteValue : Math.abs(num);
    let targetDecimals = exactDecimals !== null && exactDecimals !== void 0 ? exactDecimals : getTargetDecimals(maxAbsoluteValue, targetDigits);
    let text = num.toFixed(targetDecimals);
    let parts = text.split(".");
    let integer = parts[0];
    let decimals = (_a = parts[1]) !== null && _a !== void 0 ? _a : "";
    if (exactDecimals) {
        while (decimals.length < exactDecimals) {
            decimals += "0";
        }
    }
    else {
        while (decimals[decimals.length - 1] === "0") {
            decimals = decimals.slice(0, -1);
        }
    }
    let output = "";
    // NOTE: ONLY add comma groups if it is > 4 digits. As 4234K is easily read, and commas
    //  only really matter for numbers such as 4234523K, which is hard to read.
    if (integer.length > 4) {
        for (let i = integer.length; i > 0; i -= 3) {
            let start = i - 3;
            if (start < 0)
                start = 0;
            let str = integer.slice(start, i);
            if (output) {
                output = "," + output;
            }
            output = str + output;
        }
    }
    else {
        output = integer;
    }
    if (decimals) {
        output += "." + decimals;
    }
    return output;
}
exports.formatMaxDecimals = formatMaxDecimals;
/** Actually formats any number, including decimals, by using K, M and B suffixes to get smaller values
 *      TODO: Support uK, uM and uB suffixes for very small numbers?
 *      <= 6 characters (<= 5 if positive)
 */
function formatNumber(count, maxAbsoluteValue, noDecimal, specialCurrency) {
    if (typeof count !== "number")
        return "0";
    if (count < 0) {
        return "-" + formatNumber(-count, maxAbsoluteValue, noDecimal, specialCurrency);
    }
    maxAbsoluteValue = maxAbsoluteValue !== null && maxAbsoluteValue !== void 0 ? maxAbsoluteValue : Math.abs(count);
    let maxDecimals = 3;
    // NOTE: We don't switch units as soon as we possible can, because...
    //  3.594 vs 3.584 is harder to quickly distinguish compared to 3594 and 3584,
    //  the decimal simply makes it harder to read, and larger.
    // NOTE: This number should prevent us from ever using 5 digits, so that we never need commas
    //  For example, if the factor is 10 then, 9999.5 is kept with a divisor of 1, and then rounds up to
    //  "10,000". So we want any value which rounds up at 5 digits to be put in the next group (and having
    //  extra values put in the next group is fine, as we won't show the decimal value anyways, so it only
    //  means 9999 wraps around to 10K a bit faster).
    const extraFactor = 9.99949999;
    let divisor = 1;
    let suffix = "";
    let currencyDecimalsNeeded = false;
    if (maxAbsoluteValue < 0.00000001) {
        maxDecimals = 12;
    }
    else if (maxAbsoluteValue < 0.0000001) {
        maxDecimals = 11;
    }
    else if (maxAbsoluteValue < 0.000001) {
        maxDecimals = 10;
    }
    else if (maxAbsoluteValue < 0.00001) {
        maxDecimals = 9;
    }
    else if (maxAbsoluteValue < 0.0001) {
        maxDecimals = 8;
    }
    else if (maxAbsoluteValue < 0.001) {
        maxDecimals = 7;
    }
    else if (maxAbsoluteValue < 0.01) {
        maxDecimals = 6;
    }
    else if (maxAbsoluteValue < 0.1) {
        maxDecimals = 5;
    }
    else if (maxAbsoluteValue < 1000 * extraFactor) {
        if (specialCurrency) {
            currencyDecimalsNeeded = true;
        }
    }
    else if (maxAbsoluteValue < 1000 * 1000 * extraFactor) {
        suffix = "K";
        divisor = 1000;
    }
    else if (maxAbsoluteValue < 1000 * 1000 * 1000 * extraFactor) {
        suffix = "M";
        divisor = 1000 * 1000;
    }
    else if (maxAbsoluteValue < 1000 * 1000 * 1000 * 1000 * extraFactor) {
        suffix = "B";
        divisor = 1000 * 1000 * 1000;
    }
    else if (maxAbsoluteValue < 1000 * 1000 * 1000 * 1000 * 1000 * extraFactor) {
        suffix = "T";
        divisor = 1000 * 1000 * 1000 * 1000;
    }
    else {
        suffix = "Q";
        divisor = 1000 * 1000 * 1000 * 1000 * 1000;
    }
    count /= divisor;
    maxAbsoluteValue /= divisor;
    if (noDecimal) {
        maxDecimals = 0;
    }
    return formatMaxDecimals(count, maxDecimals, maxAbsoluteValue, currencyDecimalsNeeded ? 2 : undefined) + suffix;
}
exports.formatNumber = formatNumber;
function formatBinaryNumber(count, maxAbsoluteValue, noDecimal, specialCurrency) {
    if (typeof count !== "number")
        return "0";
    if (count < 0) {
        return "-" + formatNumber(-count, maxAbsoluteValue, noDecimal, specialCurrency);
    }
    maxAbsoluteValue = maxAbsoluteValue !== null && maxAbsoluteValue !== void 0 ? maxAbsoluteValue : Math.abs(count);
    // NOTE: We don't switch units as soon as we possible can, because...
    //  3.594 vs 3.584 is harder to quickly distinguish compared to 3594 and 3584,
    //  the decimal simply makes it harder to read, and larger.
    // NOTE: This number should prevent us from ever using 5 digits, so that we never need commas
    //  For example, if the factor is 10 then, 9999.5 is kept with a divisor of 1, and then rounds up to
    //  "10,000". So we want any value which rounds up at 5 digits to be put in the next group (and having
    //  extra values put in the next group is fine, as we won't show the decimal value anyways, so it only
    //  means 9999 wraps around to 10K a bit faster).
    const extraFactor = 9.99949999;
    let divisor = 1;
    let suffix = "";
    let currencyDecimalsNeeded = false;
    if (maxAbsoluteValue < 1024 * extraFactor) {
        if (specialCurrency) {
            currencyDecimalsNeeded = true;
        }
    }
    else if (maxAbsoluteValue < 1024 * 1024 * extraFactor) {
        suffix = "K";
        divisor = 1024;
    }
    else if (maxAbsoluteValue < 1024 * 1024 * 1024 * extraFactor) {
        suffix = "M";
        divisor = 1024 * 1024;
    }
    else {
        suffix = "G";
        divisor = 1024 * 1024 * 1024;
    }
    count /= divisor;
    maxAbsoluteValue /= divisor;
    let maxDecimals = noDecimal ? 0 : 3;
    return formatMaxDecimals(count, maxDecimals, maxAbsoluteValue, currencyDecimalsNeeded ? 2 : undefined) + suffix;
}
exports.formatBinaryNumber = formatBinaryNumber;
/** YYYY/MM/DD HH:MM:SS PM/AM */
function formatDateTime(time) {
    function p(s) {
        return s.toString().padStart(2, "0");
    }
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = p(hours) + ":" + p(minutes) + ":" + p(seconds) + " " + ampm;
    return date.getFullYear() + "/" + p(date.getMonth() + 1) + "/" + p(date.getDate()) + " " + strTime;
}
exports.formatDateTime = formatDateTime;
function formatDateTimeDetailed(time) {
    function p(s) {
        return s.toString().padStart(2, "0");
    }
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let millisecondsString = milliseconds.toString().padStart(3, "0");
    let timeString = time.toString();
    let decimalIndex = timeString.indexOf(".");
    if (decimalIndex !== -1) {
        let fractionalPart = timeString.substring(decimalIndex + 1);
        millisecondsString += fractionalPart;
    }
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = p(hours) + ":" + p(minutes) + ":" + p(seconds) + "." + millisecondsString + " " + ampm;
    return date.getFullYear() + "/" + p(date.getMonth() + 1) + "/" + p(date.getDate()) + " " + strTime;
}
exports.formatDateTimeDetailed = formatDateTimeDetailed;
// Lookup table for common timezone abbreviations by UTC offset (in minutes)
const timezoneAbbreviations = {
    // UTC and GMT
    "0": "UTC",
    // US/Canada timezones
    "300": "EST", // UTC-5 (Eastern Standard Time)
    "240": "EDT", // UTC-4 (Eastern Daylight Time)
    "360": "CST", // UTC-6 (Central Standard Time) 
    "420": "MST", // UTC-7 (Mountain Standard Time)
    "480": "PST", // UTC-8 (Pacific Standard Time)
    // European timezones
    "-60": "CET", // UTC+1 (Central European Time)
    "-120": "CEST", // UTC+2 (Central European Summer Time)
    // Other common timezones
    "-480": "CST", // UTC+8 (China Standard Time)
    "-540": "JST", // UTC+9 (Japan Standard Time)
    "-330": "IST", // UTC+5:30 (India Standard Time)
    "-570": "ACST", // UTC+9:30 (Australian Central Standard Time)
    "-600": "AEST", // UTC+10 (Australian Eastern Standard Time)
};
// YYYY-MM-DD_HH-MM-SS.mmm TIMEZONE
function formatFileTimestampLocal(time) {
    function p(s) {
        return s.toString().padStart(2, "0");
    }
    let date = new Date(time);
    let year = date.getFullYear();
    let month = p(date.getMonth() + 1);
    let day = p(date.getDate());
    let hours = p(date.getHours());
    let minutes = p(date.getMinutes());
    let seconds = p(date.getSeconds());
    let milliseconds = date.getMilliseconds();
    let millisecondsString = milliseconds.toString().padStart(3, "0");
    let timeString = time.toString();
    let decimalIndex = timeString.indexOf(".");
    if (decimalIndex !== -1) {
        let fractionalPart = timeString.substring(decimalIndex + 1);
        millisecondsString += fractionalPart;
    }
    // Get timezone offset in minutes (negative of getTimezoneOffset because it returns opposite sign)
    let timezoneOffsetMinutes = date.getTimezoneOffset();
    // Look up the abbreviation or fallback to numeric format
    let timezoneString = timezoneAbbreviations[timezoneOffsetMinutes.toString()];
    if (!timezoneString) {
        // Fallback: format as ±HHMM
        let offsetSign = timezoneOffsetMinutes >= 0 ? "+" : "-";
        let offsetHours = p(Math.floor(Math.abs(timezoneOffsetMinutes) / 60));
        let offsetMins = p(Math.abs(timezoneOffsetMinutes) % 60);
        timezoneString = `${offsetSign}${offsetHours}${offsetMins}`;
    }
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}.${millisecondsString}_${timezoneString}`;
}
exports.formatFileTimestampLocal = formatFileTimestampLocal;
/** 2024 January 1, Monday, 12:53:02pm */
function formatNiceDateTime(time) {
    function p(s) {
        return s.toString().padStart(2, "0");
    }
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = p(hours) + ":" + p(minutes) + ":" + p(seconds) + ampm;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return date.getFullYear() + " " + date.toLocaleString("default", { month: "long" }) + " " + date.getDate() + ", " + days[date.getDay()] + ", " + strTime;
}
exports.formatNiceDateTime = formatNiceDateTime;
/** 2024 January 1, Monday, 12:53:02pm (4 months ago)  */
function formatVeryNiceDateTime(time) {
    if (!time) {
        return "";
    }
    if (typeof time !== "number") {
        return String(time);
    }
    return `${formatNiceDateTime(time)} (${formatTime(Date.now() - time)})`;
}
exports.formatVeryNiceDateTime = formatVeryNiceDateTime;
/** YYYY/MM/DD */
function formatDate(time) {
    function p(s) {
        return s.toString().padStart(2, "0");
    }
    let date = new Date(time);
    return date.getFullYear() + "/" + p(date.getMonth() + 1) + "/" + p(date.getDate());
}
exports.formatDate = formatDate;
/** <= 6 characters (<= 5 if positive) */
function formatPercent(value) {
    if (Number.isNaN(value))
        return "0%";
    // 1 decimal point, so we have 5 characters (just like formatNumber returns 5 characters)
    return Math.round(value * 1000) / 10 + "%";
}
exports.formatPercent = formatPercent;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "aac760b31b504a1de14ea008e78d2647a5a68554c1244b258dfe180e82cd066b"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", filename: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","loaded":true,"sourceSHA256":"1c98494daf4e65ea335f9e33d3b29c8238ff78e910fdc9aade2a916c6104c869","size":27639,"version":1,"evalStartTime":1781595900916.04,"evalEndTime":1781595900916.05}, moduleFnc: (function sourceMaps_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.encodeSourceMapLineComment = exports.finalizeInProgressSourceMap = exports.addToInProgressSourceMap = exports.getInProgressSourceMap = exports.removeSourceMap = void 0;
function removeSourceMap(content) {
    // Remove any url mappings (so NOT data ones)
    content = content.replace(/\/\/# sourceMappingURL=(?!data:)[^\s]+$/m, "// removed url sourcemap");
    const sourceMapRegex = /\/\/# sourceMappingURL=data:application\/json;base64,([^\s]+)$/m;
    const match = content.match(sourceMapRegex);
    if (!match) {
        return { sourceMap: undefined, code: content };
    }
    let sourceMapJson = Buffer.from(match[1], "base64").toString();
    // HACK: If the sourcemap is invalid, try to remove trailing characters. For some reason we sometimes have
    //  extra characters at the end? Also try to add some characters too?
    function isJSON(str) {
        try {
            JSON.parse(str);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (isJSON(sourceMapJson)) {
            break;
        }
        sourceMapJson = sourceMapJson.slice(0, -1);
    }
    if (!isJSON(sourceMapJson)) {
        if (isJSON(sourceMapJson + "]}")) {
            sourceMapJson = sourceMapJson + "]}";
        }
    }
    try {
        const sourceMap = JSON.parse(sourceMapJson);
        // Remove the sourcemap line but keep the code
        content = content.replace(sourceMapRegex, "// merged inline sourcemap");
        return { sourceMap, code: content };
    }
    catch (_a) {
        console.log(`Invalid source map: ${sourceMapJson}`);
        return { sourceMap: undefined, code: content };
    }
}
exports.removeSourceMap = removeSourceMap;
function decodeMappings(mappings) {
    const vlqTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const vlqDecode = new Map(Array.from(vlqTable).map((c, i) => [c, i]));
    function decodeVLQ(str, pos) {
        let result = 0;
        let shift = 0;
        let continuation;
        do {
            const c = str[pos.value++];
            const digit = vlqDecode.get(c);
            if (digit === undefined) {
                throw new Error(`Invalid VLQ character: ${JSON.stringify(c)}`);
            }
            continuation = (digit & 32) > 0;
            const value = digit & 31;
            result += value << shift;
            shift += 5;
        } while (continuation);
        const shouldNegate = result & 1;
        result >>>= 1;
        return shouldNegate ? -result : result;
    }
    const result = [];
    let generatedLine = 1;
    let generatedColumn = 0;
    let sourceIndex = 0;
    let originalLine = 1;
    let originalColumn = 0;
    const segments = mappings.split(";");
    for (let i = 0; i < segments.length; i++) {
        const line = segments[i];
        if (!line) {
            generatedLine++;
            continue;
        }
        generatedColumn = 0;
        const fields = line.split(",");
        for (const field of fields) {
            if (!field)
                continue;
            const pos = { value: 0 };
            const segmentData = [];
            while (pos.value < field.length) {
                segmentData.push(decodeVLQ(field, pos));
            }
            if (segmentData.length < 4)
                continue;
            generatedColumn += segmentData[0];
            sourceIndex += segmentData[1];
            originalLine += segmentData[2];
            originalColumn += segmentData[3];
            result.push({
                generatedLine,
                generatedColumn,
                sourceIndex,
                originalLine,
                originalColumn,
            });
        }
        generatedLine++;
    }
    return result;
}
function getInProgressSourceMap(sourceMap) {
    const sources = sourceMap.sources.map((name, i) => ({
        name,
        contents: sourceMap.sourcesContent[i] || "",
    }));
    const mappings = decodeMappings(sourceMap.mappings);
    return {
        sources,
        mappings,
    };
}
exports.getInProgressSourceMap = getInProgressSourceMap;
function addToInProgressSourceMap(inProgress, newMappings) {
    const sourceIndexOffset = inProgress.sources.length;
    // Add new sources
    inProgress.sources.push(...newMappings.sources);
    // Add mappings with adjusted source indices
    for (const mapping of newMappings.mappings) {
        inProgress.mappings.push({
            ...mapping,
            sourceIndex: mapping.sourceIndex + sourceIndexOffset,
        });
    }
}
exports.addToInProgressSourceMap = addToInProgressSourceMap;
function finalizeInProgressSourceMap(inProgress) {
    const vlqTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function encodeVLQ(value) {
        // Convert to zigzag encoding
        value = value < 0 ? (-value << 1) | 1 : value << 1;
        let result = "";
        do {
            let digit = value & 31;
            value >>>= 5;
            if (value > 0) {
                digit |= 32;
            }
            result += vlqTable[digit];
        } while (value > 0);
        return result;
    }
    // Sort mappings by generated position
    const sortedMappings = [...inProgress.mappings].sort((a, b) => {
        if (a.generatedLine !== b.generatedLine) {
            return a.generatedLine - b.generatedLine;
        }
        return a.generatedColumn - b.generatedColumn;
    });
    // Generate the mappings string
    let prevGenLine = 1;
    let prevGenColumn = 0;
    let prevSourceIndex = 0;
    let prevOrigLine = 1;
    let prevOrigColumn = 0;
    const lines = [];
    let currentLine = [];
    for (const mapping of sortedMappings) {
        if (mapping.generatedLine > prevGenLine) {
            lines.push(currentLine.join(","));
            for (let i = prevGenLine + 1; i < mapping.generatedLine; i++) {
                lines.push("");
            }
            currentLine = [];
            prevGenColumn = 0;
        }
        const segment = [
            encodeVLQ(mapping.generatedColumn - prevGenColumn),
            encodeVLQ(mapping.sourceIndex - prevSourceIndex),
            encodeVLQ(mapping.originalLine - prevOrigLine),
            encodeVLQ(mapping.originalColumn - prevOrigColumn),
        ];
        currentLine.push(segment.join(""));
        prevGenLine = mapping.generatedLine;
        prevGenColumn = mapping.generatedColumn;
        prevSourceIndex = mapping.sourceIndex;
        prevOrigLine = mapping.originalLine;
        prevOrigColumn = mapping.originalColumn;
    }
    if (currentLine.length > 0) {
        lines.push(currentLine.join(","));
    }
    return {
        version: 3,
        file: "",
        sourceRoot: "",
        sources: inProgress.sources.map(s => s.name),
        sourcesContent: inProgress.sources.map(s => s.contents),
        names: [],
        mappings: lines.join(";"),
    };
}
exports.finalizeInProgressSourceMap = finalizeInProgressSourceMap;
function encodeSourceMapLineComment(sourceMap) {
    const sourceMapJson = JSON.stringify(sourceMap);
    const base64 = Buffer.from(sourceMapJson).toString("base64");
    // NOTE: Don't write it as one string, as then we are detected as a sourcemap, and break sourcemaps...
    return "//" + `# sourceMappingURL=data:application/json;base64,${base64}`;
}
exports.encodeSourceMapLineComment = encodeSourceMapLineComment;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "a98d05723f70be7b0f9c6b0cc95a4273a5bd36169a849a6810ead323c7526aa1"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/aiWorkerEntry.ts", filename: "/root/generals/src/gameUI2/ai/aiWorkerEntry.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/aiWorkerEntry.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/aiWorkerEntry.ts","loaded":true,"sourceSHA256":"650997b309ba17f2e16794b02dde8bfca94d688657e87d026ebd4202d6f57641","size":5509,"version":1,"evalStartTime":1781595900917,"evalEndTime":1781595900921.05,"allowclient":true,"hotreload":true}, moduleFnc: (function aiWorkerEntry_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
// Bundled web-worker entry. Built into <deploy>/aiWorkerEntry.js by scripts/build.ts and loaded
// from there by aiWorkerPool.ts (browser path). Dispatches to a registered strategy by id.
const index_1 = require("./strategies/index");
// Gate on `self` existing — the bundler runs us through node first to record require.cache, and
// node doesn't have `self`. Inside a real web worker `self` is defined and we wire up.
if (typeof self !== "undefined") {
    const workerScope = self;
    workerScope.onmessage = async (e) => {
        const req = e.data;
        if (!req || !req.snapshot) {
            workerScope.postMessage({ status: "error", message: "no request/snapshot" });
            return;
        }
        try {
            const strategy = (0, index_1.getStrategy)(req.strategyId);
            const onProgress = (orders) => {
                workerScope.postMessage({ status: "progress", orders });
            };
            const orders = await strategy(req.snapshot, {
                config: req.config,
                deadlineMs: Date.now() + req.timeoutMs,
                onProgress,
            });
            workerScope.postMessage({ status: "done", orders });
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            workerScope.postMessage({ status: "error", message });
        }
    };
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "6b38c163be9419afe948fcff8852669bba61387cfcb67afc70cc5173187ff83d"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/index.ts", filename: "/root/generals/src/gameUI2/ai/strategies/index.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/index.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/index.ts","loaded":true,"sourceSHA256":"378290a9400ea25c0db36450864f90b5e0fd7fa3f8a07a263d16ce5e5b4ed9f1","size":2388,"version":1,"evalStartTime":1781595900917.01,"evalEndTime":1781595900921.04,"allowclient":true,"hotreload":true}, moduleFnc: (function index_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.registerStrategy = exports.getStrategyIds = exports.getStrategy = void 0;
// Importing this module registers every built-in strategy as a side effect. Both the worker entry
// and the node sim import it so getStrategy() can resolve any id.
require("./beeline");
require("./greedyCity");
require("./consolidate");
require("./focusFire");
require("./focusWeakestFaction");
require("./monteCarlo");
require("./threatAware");
require("./influenceMap");
require("./territory");
require("./snowball");
var registry_1 = require("./registry");
Object.defineProperty(exports, "getStrategy", { enumerable: true, get: function () { return registry_1.getStrategy; } , configurable: true});
Object.defineProperty(exports, "getStrategyIds", { enumerable: true, get: function () { return registry_1.getStrategyIds; } , configurable: true});
Object.defineProperty(exports, "registerStrategy", { enumerable: true, get: function () { return registry_1.registerStrategy; } , configurable: true});
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "e1dd366744245df584d1aaac875421bdc0b7bc6bbf1306ef3f94388ad5872bef"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/beeline.ts", filename: "/root/generals/src/gameUI2/ai/strategies/beeline.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/beeline.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/beeline.ts","loaded":true,"sourceSHA256":"848c5637384d6c2602928f092df5ba3faaf78baad9045f22b232ef5960d422a4","size":1801,"version":1,"evalStartTime":1781595900917.02,"evalEndTime":1781595900918.06,"allowclient":true,"hotreload":true}, moduleFnc: (function beeline_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// v1 baseline: every general beelines toward the nearest enemy city, growing when food allows.
// This is also the default agent for normal browser play, so growth is on by default there.
(0, registry_1.registerStrategy)("beeline", (snapshot, ctx) => (0, growthPolicy_1.withGrowth)(snapshot, ctx.config, (0, aiPlanner_1.planBeelineOrders)(snapshot)));
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "b51454d14f56428f65a672c9edca9fe20ad8c0c7709dd7fd621d050615d828d9"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/aiPlanner.ts", filename: "/root/generals/src/gameUI2/ai/aiPlanner.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/aiPlanner.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/aiPlanner.ts","loaded":true,"sourceSHA256":"d6697eb76225c96a5c8c41966e527f2ccd5ff92d073140d79225abb23f1b2bca","size":6469,"version":1,"evalStartTime":1781595900918,"evalEndTime":1781595900918.01,"allowclient":true,"hotreload":true}, moduleFnc: (function aiPlanner_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.planBeelineOrders = exports.hexDistance = void 0;
function offsetToCube(p) {
    const col = p.x;
    const row = col % 2 === 0 ? p.y : p.y - 0.5;
    const cube_x = col;
    const cube_z = row - (col - (col & 1)) / 2;
    const cube_y = -cube_x - cube_z;
    return { x: cube_x, y: cube_y, z: cube_z };
}
function hexDistance(a, b) {
    const ca = offsetToCube(a);
    const cb = offsetToCube(b);
    return (Math.abs(ca.x - cb.x) + Math.abs(ca.y - cb.y) + Math.abs(ca.z - cb.z)) / 2;
}
exports.hexDistance = hexDistance;
// v1 strategy: each of our generals beelines toward the nearest enemy city.
function planBeelineOrders(snapshot) {
    const { factionId, generals, cities } = snapshot;
    const ourGenerals = generals.filter(g => g.factionId === factionId);
    const enemyCities = cities.filter(c => c.factionId !== factionId);
    const orders = [];
    for (const general of ourGenerals) {
        let target;
        let bestDist = Infinity;
        for (const city of enemyCities) {
            const d = hexDistance(general, city);
            if (d < bestDist) {
                bestDist = d;
                target = city;
            }
        }
        if (!target)
            continue;
        orders.push({ generalId: general.id, targetPosition: { x: target.x, y: target.y } });
    }
    return orders;
}
exports.planBeelineOrders = planBeelineOrders;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "6f5ecbe1731d186587a1200b3194e9fa8be0ff771d49716c371f82297c8dcafa"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/growthPolicy.ts", filename: "/root/generals/src/gameUI2/ai/growthPolicy.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/growthPolicy.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/growthPolicy.ts","loaded":true,"sourceSHA256":"71bfc7326d48614ee5d3203421801b379adfb580fd35340e948bf13127c5c804","size":5151,"version":1,"evalStartTime":1781595900918.02,"evalEndTime":1781595900918.03,"allowclient":true,"hotreload":true}, moduleFnc: (function growthPolicy_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.withGrowth = void 0;
// Shared growth decision, wrapped around a strategy's move orders so every one of our generals
// gets a growthMode set (and generals without a move still get a grow/hold order).
//
// config.grow controls it:
//   "never"            — never grow.
//   "always"           — always grow (risks starvation if food net < 0).
//   "whenFoodPositive" — grow only when the faction's food net is >= 0 (default). This is the safe
//                        general-purpose policy: build up while the economy sustains it.
function withGrowth(snapshot, config, moveOrders) {
    const grow = typeof config.grow === "string" ? config.grow : "whenFoodPositive";
    const shouldGrow = grow === "always"
        || (grow !== "never" && snapshot.food.net >= 0);
    const byGeneral = new Map();
    for (const o of moveOrders) {
        byGeneral.set(o.generalId, { ...o, growthMode: shouldGrow });
    }
    // Ensure every one of our generals has an order carrying the growth decision, even if the
    // strategy gave it no move this turn.
    for (const g of snapshot.generals) {
        if (g.factionId !== snapshot.factionId)
            continue;
        if (!byGeneral.has(g.id)) {
            byGeneral.set(g.id, { generalId: g.id, growthMode: shouldGrow });
        }
    }
    return Array.from(byGeneral.values());
}
exports.withGrowth = withGrowth;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "30b65299a1c20dd76a71897bea026b150bb6b1e2c77b51a9c2753e1be928dc47"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/registry.ts", filename: "/root/generals/src/gameUI2/ai/strategies/registry.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/registry.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/registry.ts","loaded":true,"sourceSHA256":"d5b6dde5c65a18cd67e7ac01b9995e7ed8cf22343a854f39332777c21462089c","size":3244,"version":1,"evalStartTime":1781595900918.04,"evalEndTime":1781595900918.05,"allowclient":true,"hotreload":true}, moduleFnc: (function registry_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.getStrategyIds = exports.getStrategy = exports.registerStrategy = void 0;
// Strategy registry. Every AI is a named, hand-written strategy. When a strategy is revised, give
// it a NEW id so prior versions keep working and remain comparable in tournaments.
const strategies = new Map();
function registerStrategy(id, strategy) {
    if (strategies.has(id)) {
        throw new Error(`Duplicate AI strategy id: ${id}`);
    }
    strategies.set(id, strategy);
}
exports.registerStrategy = registerStrategy;
function getStrategy(id) {
    const s = strategies.get(id);
    if (!s) {
        throw new Error(`Unknown AI strategy id: ${id}. Registered: ${JSON.stringify(getStrategyIds())}`);
    }
    return s;
}
exports.getStrategy = getStrategy;
function getStrategyIds() {
    return Array.from(strategies.keys());
}
exports.getStrategyIds = getStrategyIds;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "4c637ca617a5c1afbaa33027efcabb7cefeb60991b369672b54942d34cb4bdad"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/greedyCity.ts", filename: "/root/generals/src/gameUI2/ai/strategies/greedyCity.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/greedyCity.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/greedyCity.ts","loaded":true,"sourceSHA256":"42ac0bb2c7df5abbe4cba4c4fb36234fb3615d5a2e6c1aed46ae1efecb99b581","size":8560,"version":1,"evalStartTime":1781595900918.07,"evalEndTime":1781595900919,"allowclient":true,"hotreload":true}, moduleFnc: (function greedyCity_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Configurable greedy target-picker. Each general independently scores candidate targets and moves
// toward the best one. Score = distWeight*distance + garrisonWeight*garrison − capitalBonus(if capital).
// Lower score wins, so high distWeight = prefer closer, high garrisonWeight = prefer softer targets,
// capitalBonus pulls toward enemy capitals. With targetGenerals, enemy generals (treated as
// garrison = their unit count) are also candidates.
(0, registry_1.registerStrategy)("greedyCity", (snapshot, ctx) => {
    const cfg = ctx.config;
    const distWeight = num(cfg.distWeight, 1);
    const garrisonWeight = num(cfg.garrisonWeight, 0);
    const capitalBonus = num(cfg.capitalBonus, 0);
    const targetGenerals = cfg.targetGenerals === true;
    const { factionId, generals, cities } = snapshot;
    const ourGenerals = generals.filter(g => g.factionId === factionId);
    const targets = [];
    for (const c of cities) {
        if (c.factionId === factionId)
            continue;
        targets.push({ x: c.x, y: c.y, garrison: c.garrison, isCapital: !!c.isCapital });
    }
    if (targetGenerals) {
        for (const g of generals) {
            if (g.factionId === factionId)
                continue;
            targets.push({ x: g.x, y: g.y, garrison: g.totalUnits, isCapital: false });
        }
    }
    const orders = [];
    for (const gen of ourGenerals) {
        let best;
        let bestScore = Infinity;
        for (const t of targets) {
            const score = distWeight * (0, aiPlanner_1.hexDistance)(gen, t)
                + garrisonWeight * t.garrison
                - (t.isCapital ? capitalBonus : 0);
            if (score < bestScore) {
                bestScore = score;
                best = t;
            }
        }
        if (best)
            orders.push({ generalId: gen.id, targetPosition: { x: best.x, y: best.y } });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "756785fc3712c26b37a5b1a1dc6a63dea1c6e7f5f217427f69c338f9b652f0df"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/consolidate.ts", filename: "/root/generals/src/gameUI2/ai/strategies/consolidate.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/consolidate.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/consolidate.ts","loaded":true,"sourceSHA256":"567b5b5d6f14cbc2cf50ec2d2dfa917a57eae5a6ffb77ab92bae1a89d66d511c","size":10544,"version":1,"evalStartTime":1781595900919.01,"evalEndTime":1781595900919.02,"allowclient":true,"hotreload":true}, moduleFnc: (function consolidate_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Force-concentration strategy. A general weaker than mergeFraction × the faction's strongest
// general moves toward that strongest ally to stack up (same-tile same-faction units fight together,
// so concentration wins fights). Everyone else attacks the best enemy target, scored like
// greedyCity (distWeight·distance + garrisonWeight·garrison − capitalBonus·isCapital), optionally
// also hunting enemy generals.
(0, registry_1.registerStrategy)("consolidate", (snapshot, ctx) => {
    const cfg = ctx.config;
    const distWeight = num(cfg.distWeight, 1);
    const garrisonWeight = num(cfg.garrisonWeight, 0.5);
    const capitalBonus = num(cfg.capitalBonus, 0);
    const targetGenerals = cfg.targetGenerals === true;
    const mergeFraction = num(cfg.mergeFraction, 0.8);
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    if (ours.length === 0)
        return [];
    let strongest = ours[0];
    for (const g of ours)
        if (g.totalUnits > strongest.totalUnits)
            strongest = g;
    const targets = [];
    for (const c of cities) {
        if (c.factionId === factionId)
            continue;
        targets.push({ x: c.x, y: c.y, garrison: c.garrison, isCapital: !!c.isCapital });
    }
    if (targetGenerals) {
        for (const g of generals) {
            if (g.factionId === factionId)
                continue;
            targets.push({ x: g.x, y: g.y, garrison: g.totalUnits, isCapital: false });
        }
    }
    const orders = [];
    for (const gen of ours) {
        // Weak general with a stronger ally to merge into → go stack up.
        if (gen.id !== strongest.id && gen.totalUnits < mergeFraction * strongest.totalUnits) {
            orders.push({ generalId: gen.id, targetPosition: { x: strongest.x, y: strongest.y } });
            continue;
        }
        if (targets.length === 0)
            continue;
        let best;
        let bestScore = Infinity;
        for (const t of targets) {
            const score = distWeight * (0, aiPlanner_1.hexDistance)(gen, t)
                + garrisonWeight * t.garrison
                - (t.isCapital ? capitalBonus : 0);
            if (score < bestScore) {
                bestScore = score;
                best = t;
            }
        }
        if (best)
            orders.push({ generalId: gen.id, targetPosition: { x: best.x, y: best.y } });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "6e197ee8abb135a8186ad38bd31c53ff443d992da20d2c9060188b2b21190786"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/focusFire.ts", filename: "/root/generals/src/gameUI2/ai/strategies/focusFire.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/focusFire.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/focusFire.ts","loaded":true,"sourceSHA256":"39df806529aa4e98f854c3e21b7f4a47d1667eebd527031017286fb08016ba99","size":9404,"version":1,"evalStartTime":1781595900919.03,"evalEndTime":1781595900919.04,"allowclient":true,"hotreload":true}, moduleFnc: (function focusFire_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Coordinated focus-fire: the whole faction picks ONE global target and every general converges on
// it, naturally stacking into a single hammer. The target is scored from the faction's centroid
// (distWeight·dist + garrisonWeight·garrison − capitalBonus·isCapital). When the target is captured
// the next call re-picks, so the doomstack rolls from objective to objective.
(0, registry_1.registerStrategy)("focusFire", (snapshot, ctx) => {
    const cfg = ctx.config;
    const distWeight = num(cfg.distWeight, 1);
    const garrisonWeight = num(cfg.garrisonWeight, 0.5);
    const capitalBonus = num(cfg.capitalBonus, 0);
    const targetGenerals = cfg.targetGenerals === true;
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    if (ours.length === 0)
        return [];
    const cx = ours.reduce((s, g) => s + g.x, 0) / ours.length;
    const cy = ours.reduce((s, g) => s + g.y, 0) / ours.length;
    const centroid = { x: cx, y: cy };
    const targets = [];
    for (const c of cities) {
        if (c.factionId === factionId)
            continue;
        targets.push({ x: c.x, y: c.y, garrison: c.garrison, isCapital: !!c.isCapital });
    }
    if (targetGenerals) {
        for (const g of generals) {
            if (g.factionId === factionId)
                continue;
            targets.push({ x: g.x, y: g.y, garrison: g.totalUnits, isCapital: false });
        }
    }
    if (targets.length === 0)
        return [];
    let best;
    let bestScore = Infinity;
    for (const t of targets) {
        const score = distWeight * (0, aiPlanner_1.hexDistance)(centroid, t)
            + garrisonWeight * t.garrison
            - (t.isCapital ? capitalBonus : 0);
        if (score < bestScore) {
            bestScore = score;
            best = t;
        }
    }
    if (!best)
        return [];
    const target = best;
    const orders = ours.map(g => ({ generalId: g.id, targetPosition: { x: target.x, y: target.y } }));
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "a91d0753f101ea967e487b825d120a32666245168ba5e8552201ad7f97d14cba"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts", filename: "/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts","loaded":true,"sourceSHA256":"bc9a06e39651d8cba4c0554a8ba44d0a3f10fe58e085df12f715696f80f385ea","size":13603,"version":1,"evalStartTime":1781595900919.05,"evalEndTime":1781595900919.06,"allowclient":true,"hotreload":true}, moduleFnc: (function focusWeakestFaction_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Snowball focus: concentrate the whole faction on the WEAKEST surviving enemy faction, to
// eliminate opponents one at a time (fewer enemies = compounding advantage). Among that faction's
// cities we pick the one best scored from our centroid (distWeight·dist + garrisonWeight·garrison
// − capitalBonus·isCapital). If the weakest faction has no cities left we fall back to its nearest
// general, then to any enemy city.
(0, registry_1.registerStrategy)("focusWeakestFaction", (snapshot, ctx) => {
    var _a, _b;
    const cfg = ctx.config;
    const distWeight = num(cfg.distWeight, 1);
    const garrisonWeight = num(cfg.garrisonWeight, 0.5);
    const capitalBonus = num(cfg.capitalBonus, 0);
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    if (ours.length === 0)
        return [];
    const cx = ours.reduce((s, g) => s + g.x, 0) / ours.length;
    const cy = ours.reduce((s, g) => s + g.y, 0) / ours.length;
    const centroid = { x: cx, y: cy };
    // Total strength per enemy faction = its generals' stacked units + its cities' garrisons.
    const strengthByFaction = new Map();
    for (const g of generals) {
        if (g.factionId === factionId)
            continue;
        strengthByFaction.set(g.factionId, ((_a = strengthByFaction.get(g.factionId)) !== null && _a !== void 0 ? _a : 0) + g.totalUnits);
    }
    for (const c of cities) {
        if (c.factionId === factionId)
            continue;
        strengthByFaction.set(c.factionId, ((_b = strengthByFaction.get(c.factionId)) !== null && _b !== void 0 ? _b : 0) + c.garrison);
    }
    if (strengthByFaction.size === 0)
        return (0, growthPolicy_1.withGrowth)(snapshot, cfg, []);
    let weakest;
    let weakestStrength = Infinity;
    for (const [fid, s] of strengthByFaction) {
        if (s < weakestStrength) {
            weakestStrength = s;
            weakest = fid;
        }
    }
    const score = (t) => distWeight * (0, aiPlanner_1.hexDistance)(centroid, t)
        + garrisonWeight * t.garrison - (t.isCapital ? capitalBonus : 0);
    const pick = (cands) => {
        let best;
        let bestScore = Infinity;
        for (const t of cands) {
            const s = score(t);
            if (s < bestScore) {
                bestScore = s;
                best = t;
            }
        }
        return best;
    };
    let target = pick(cities.filter(c => c.factionId === weakest)
        .map(c => ({ x: c.x, y: c.y, garrison: c.garrison, isCapital: !!c.isCapital })));
    if (!target) {
        target = pick(generals.filter(g => g.factionId === weakest)
            .map(g => ({ x: g.x, y: g.y, garrison: g.totalUnits, isCapital: false })));
    }
    if (!target) {
        target = pick(cities.filter(c => c.factionId !== factionId)
            .map(c => ({ x: c.x, y: c.y, garrison: c.garrison, isCapital: !!c.isCapital })));
    }
    if (!target)
        return (0, growthPolicy_1.withGrowth)(snapshot, cfg, []);
    const t = target;
    const orders = ours.map(g => ({ generalId: g.id, targetPosition: { x: t.x, y: t.y } }));
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "ea6962e975f634c944bf87eff2005913ef8c01515cb7bc1dc3b1bc9a6e892fac"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts", filename: "/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts","loaded":true,"sourceSHA256":"033e12e03577ad3c6680b10c2cd3eb3709497520393a4cc7b23dfee27335b469","size":16481,"version":1,"evalStartTime":1781595900920,"evalEndTime":1781595900920.01,"allowclient":true,"hotreload":true}, moduleFnc: (function monteCarlo_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Monte-Carlo opening picker. For each candidate first-target, run guided rollouts on a lightweight
// internal model (our whole army as one stack snowballing through enemy cities under a greedy
// deterministic policy, with randomized tie-breaking = the MC sampling). Score each candidate by how
// much it lets us snowball; send the whole faction at the best opening. Approximate by design — the
// strategy only has the snapshot, not the real engine — but it demonstrates deterministic-policy-
// guided MC and is a tournament experiment.
//
// config: distWeight, garrisonWeight, capitalBonus, rollouts (per candidate), rolloutTurns,
// topK (tie-break breadth for the rollout policy), combatFactor, lossFrac.
(0, registry_1.registerStrategy)("monteCarlo", (snapshot, ctx) => {
    const cfg = ctx.config;
    const distWeight = num(cfg.distWeight, 1);
    const garrisonWeight = num(cfg.garrisonWeight, 0.5);
    const capitalBonus = num(cfg.capitalBonus, 0);
    const rollouts = Math.max(1, Math.floor(num(cfg.rollouts, 60)));
    const rolloutTurns = num(cfg.rolloutTurns, 60);
    const topK = Math.max(1, Math.floor(num(cfg.topK, 3)));
    const combatFactor = num(cfg.combatFactor, 1.0);
    const lossFrac = num(cfg.lossFrac, 0.5);
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    if (ours.length === 0)
        return [];
    const ourStrength = ours.reduce((s, g) => s + g.totalUnits, 0);
    const cx = ours.reduce((s, g) => s + g.x, 0) / ours.length;
    const cy = ours.reduce((s, g) => s + g.y, 0) / ours.length;
    const enemyCities = cities
        .filter(c => c.factionId !== factionId)
        .map(c => ({ x: c.x, y: c.y, garrison: c.garrison, isCapital: !!c.isCapital }));
    if (enemyCities.length === 0)
        return (0, growthPolicy_1.withGrowth)(snapshot, cfg, []);
    const cityScore = (from, c) => distWeight * (0, aiPlanner_1.hexDistance)(from, c) + garrisonWeight * c.garrison - (c.isCapital ? capitalBonus : 0);
    // One rollout from a forced first target: snowball greedily (randomized among the top-K best by
    // score) until time runs out or we can't beat the next garrison. Returns captured "value".
    const rollout = (first) => {
        let strength = ourStrength;
        let pos = { x: cx, y: cy };
        const remaining = enemyCities.slice();
        let t = 0;
        let value = 0;
        let forced = first;
        while (remaining.length > 0) {
            let target;
            if (forced) {
                target = forced;
                forced = undefined;
            }
            else {
                const ranked = remaining.slice().sort((a, b) => cityScore(pos, a) - cityScore(pos, b));
                target = ranked[Math.floor(Math.random() * Math.min(topK, ranked.length))];
            }
            if (!target)
                break;
            t += (0, aiPlanner_1.hexDistance)(pos, target); // ~1 tile/turn
            if (t > rolloutTurns)
                break;
            if (strength <= target.garrison * combatFactor)
                break; // can't take it
            strength -= target.garrison * lossFrac;
            value += 1 + (target.isCapital ? 1 : 0);
            pos = { x: target.x, y: target.y };
            const i = remaining.indexOf(target);
            if (i >= 0)
                remaining.splice(i, 1);
        }
        return value;
    };
    let best;
    let bestAvg = -Infinity;
    for (const cand of enemyCities) {
        let sum = 0;
        for (let r = 0; r < rollouts; r++)
            sum += rollout(cand);
        const avg = sum / rollouts;
        if (avg > bestAvg) {
            bestAvg = avg;
            best = cand;
        }
    }
    if (!best)
        return (0, growthPolicy_1.withGrowth)(snapshot, cfg, []);
    const target = best;
    const orders = ours.map(g => ({ generalId: g.id, targetPosition: { x: target.x, y: target.y } }));
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "5d7cba25993e488110ced446e8969680fa01834dd977b81be00701b5e665545d"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/threatAware.ts", filename: "/root/generals/src/gameUI2/ai/strategies/threatAware.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/threatAware.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/threatAware.ts","loaded":true,"sourceSHA256":"9480e88e9e35e2d5fcb4afb7b809a46f34f78376372a755792f1394c368c57c7","size":19093,"version":1,"evalStartTime":1781595900920.02,"evalEndTime":1781595900920.03,"allowclient":true,"hotreload":true}, moduleFnc: (function threatAware_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Engine combat reach for a stack of `count` units (mirrors getCombatDistance in the engine).
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Threat-aware value AI. Each general chooses among ATTACK / DEFEND / RETREAT instead of blindly
// running at the nearest city:
//   - ATTACK an enemy city only if our stack can actually beat its garrison (combat-gated), scored
//     by value (low garrison, capitals, closeness).
//   - DEFEND an owned city that an enemy stack can reach soon, if we're close enough to matter.
//   - RETREAT toward the nearest friendly city/general when a stronger enemy stack can catch us and
//     we have no winning attack — instead of feeding it.
// config: safety (win margin), distWeight, garrisonWeight, capitalBonus, defendWeight, enemyMove.
(0, registry_1.registerStrategy)("threatAware", (snapshot, ctx) => {
    const cfg = ctx.config;
    const safety = num(cfg.safety, 1.15);
    const distWeight = num(cfg.distWeight, 1);
    const garrisonWeight = num(cfg.garrisonWeight, 0.4);
    const capitalBonus = num(cfg.capitalBonus, 5);
    const defendWeight = num(cfg.defendWeight, 8);
    const enemyMove = num(cfg.enemyMove, 1.5); // assumed enemy tiles/turn for threat lookahead
    const huntWeight = num(cfg.huntWeight, 0); // >0: also chase enemy generals weaker than us, to eliminate them
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyCities = cities.filter(c => c.factionId !== factionId);
    const ourCities = cities.filter(c => c.factionId === factionId);
    const nearestFriendlyRefuge = (g) => {
        let best;
        let bestD = Infinity;
        for (const c of ourCities) {
            const d = (0, aiPlanner_1.hexDistance)(g, c);
            if (d > 0 && d < bestD) {
                bestD = d;
                best = { x: c.x, y: c.y };
            }
        }
        for (const o of ours) {
            if (o.id === g.id)
                continue;
            if (o.totalUnits <= g.totalUnits)
                continue; // only flee toward someone stronger
            const d = (0, aiPlanner_1.hexDistance)(g, o);
            if (d < bestD) {
                bestD = d;
                best = { x: o.x, y: o.y };
            }
        }
        return best;
    };
    const orders = [];
    for (const gen of ours) {
        const S = gen.totalUnits;
        // Is a stronger enemy able to reach us next turn?
        let underThreat = false;
        for (const e of enemyGenerals) {
            if (e.totalUnits <= S * safety)
                continue;
            const reach = combatDist(e.totalUnits) + enemyMove;
            if ((0, aiPlanner_1.hexDistance)(e, gen) <= reach) {
                underThreat = true;
                break;
            }
        }
        // Best ATTACK we can actually win.
        let best;
        let bestScore = -Infinity;
        for (const c of enemyCities) {
            if (S <= c.garrison * safety)
                continue; // can't take it — don't feed it
            const d = (0, aiPlanner_1.hexDistance)(gen, c);
            const score = (c.isCapital ? capitalBonus : 0) - distWeight * d - garrisonWeight * c.garrison;
            if (score > bestScore) {
                bestScore = score;
                best = { x: c.x, y: c.y };
            }
        }
        // HUNT: chase enemy generals we can beat, to actually eliminate them (close out the game).
        if (huntWeight > 0) {
            for (const e of enemyGenerals) {
                if (S <= e.totalUnits * safety)
                    continue; // only hunt prey we beat
                const d = (0, aiPlanner_1.hexDistance)(gen, e);
                const score = huntWeight - distWeight * d;
                if (score > bestScore) {
                    bestScore = score;
                    best = { x: e.x, y: e.y };
                }
            }
        }
        // DEFEND: an owned city an enemy stack can reach soon — pull a nearby general back.
        for (const oc of ourCities) {
            let threatened = false;
            for (const e of enemyGenerals) {
                if ((0, aiPlanner_1.hexDistance)(e, oc) <= combatDist(e.totalUnits) + enemyMove) {
                    threatened = true;
                    break;
                }
            }
            if (!threatened)
                continue;
            const d = (0, aiPlanner_1.hexDistance)(gen, oc);
            const score = defendWeight - distWeight * d;
            if (score > bestScore) {
                bestScore = score;
                best = { x: oc.x, y: oc.y };
            }
        }
        // RETREAT when threatened and nothing worth doing.
        if (underThreat && (!best || bestScore < 0)) {
            const refuge = nearestFriendlyRefuge(gen);
            if (refuge)
                best = refuge;
        }
        if (best)
            orders.push({ generalId: gen.id, targetPosition: best });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "ac683da0474500cb2b5acbcff2db500208227000e46e859ced111a6e9888dac7"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/influenceMap.ts", filename: "/root/generals/src/gameUI2/ai/strategies/influenceMap.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/influenceMap.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/influenceMap.ts","loaded":true,"sourceSHA256":"e0ede60979f51a76b5cd550ad98ed95e8602729519014a1cab4ce8a333c0244b","size":20947,"version":1,"evalStartTime":1781595900920.04,"evalEndTime":1781595900920.05,"allowclient":true,"hotreload":true}, moduleFnc: (function influenceMap_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Influence / flow-field AI. Instead of beelining at the nearest city (which ignores terrain and
// walks into stronger stacks), we build two scalar fields over the passable map and have each
// general follow the gradient one step per turn:
//   - attraction: max-plus BFS seeded at enemy cities (soft + capital = more value), decaying per
//     step, so a general flows toward the best reachable target AROUND mountains/water.
//   - danger: max-plus BFS seeded at enemy general stacks (value = their strength), decaying per
//     step, so tiles near a strong enemy are penalised.
// Each general moves to the neighbour maximising attraction - repelWeight*max(0, danger - ownStack),
// i.e. it advances on value but refuses to step into a force stronger than itself. Emergent
// attack / flank / avoid behaviour with no per-target special-casing.
// config: attractDecay, dangerDecay, repelWeight, capitalBonus, garrisonPenalty, baseCityValue.
(0, registry_1.registerStrategy)("influenceMap", (snapshot, ctx) => {
    const cfg = ctx.config;
    const attractDecay = num(cfg.attractDecay, 1);
    const dangerDecay = num(cfg.dangerDecay, 1.5);
    const repelWeight = num(cfg.repelWeight, 1);
    const capitalBonus = num(cfg.capitalBonus, 40);
    const garrisonPenalty = num(cfg.garrisonPenalty, 0.3);
    const baseCityValue = num(cfg.baseCityValue, 60);
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    // Passable tile graph.
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const speed = terrainSpeeds[t.terrainType];
        if (speed && speed > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (!tileSet.has(key(nx, ny)))
                    continue;
                if ((0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        }
        return out;
    };
    // Max-plus BFS: each source injects a value that decays by `decay` per passable step; every tile
    // keeps the highest value reaching it. Simple Dijkstra-style relaxation with a value priority.
    const propagate = (sources, decay) => {
        var _a, _b, _c;
        const field = new Map();
        // Priority by value desc via repeated max-scan over an active frontier. Tiles are few, and we
        // only relax when we improve, so this stays cheap.
        const frontier = [];
        for (const s of sources) {
            const k = key(s.x, s.y);
            if (!tileSet.has(k))
                continue;
            if (((_a = field.get(k)) !== null && _a !== void 0 ? _a : -Infinity) < s.value) {
                field.set(k, s.value);
                frontier.push(s);
            }
        }
        while (frontier.length) {
            // pop the highest-value frontier entry
            let bi = 0;
            for (let i = 1; i < frontier.length; i++)
                if (frontier[i].value > frontier[bi].value)
                    bi = i;
            const cur = frontier.splice(bi, 1)[0];
            if (((_b = field.get(key(cur.x, cur.y))) !== null && _b !== void 0 ? _b : -Infinity) > cur.value)
                continue;
            const nv = cur.value - decay;
            if (nv <= 0)
                continue;
            for (const n of neighborsOf(cur.x, cur.y)) {
                const nk = key(n.x, n.y);
                if (((_c = field.get(nk)) !== null && _c !== void 0 ? _c : -Infinity) >= nv)
                    continue;
                field.set(nk, nv);
                frontier.push({ x: n.x, y: n.y, value: nv });
            }
        }
        return field;
    };
    const attractSources = cities
        .filter(c => c.factionId !== factionId)
        .map(c => ({
        x: c.x, y: c.y,
        value: baseCityValue + (c.isCapital ? capitalBonus : 0) - garrisonPenalty * c.garrison,
    }))
        .filter(s => s.value > 0);
    const dangerSources = generals
        .filter(g => g.factionId !== factionId)
        .map(g => ({ x: g.x, y: g.y, value: g.totalUnits }));
    const attract = propagate(attractSources, attractDecay);
    const danger = propagate(dangerSources, dangerDecay);
    const score = (x, y, ownStack) => {
        var _a, _b;
        const a = (_a = attract.get(key(x, y))) !== null && _a !== void 0 ? _a : 0;
        const d = (_b = danger.get(key(x, y))) !== null && _b !== void 0 ? _b : 0;
        return a - repelWeight * Math.max(0, d - ownStack);
    };
    const orders = [];
    for (const gen of generals) {
        if (gen.factionId !== factionId)
            continue;
        const here = score(gen.x, gen.y, gen.totalUnits);
        let best;
        let bestScore = here;
        for (const n of neighborsOf(gen.x, gen.y)) {
            const sc = score(n.x, n.y, gen.totalUnits);
            if (sc > bestScore) {
                bestScore = sc;
                best = n;
            }
        }
        if (best)
            orders.push({ generalId: gen.id, targetPosition: best });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "1a6d57523c4d4d7166e3d7eaf5cb40e844f29d31a7fc92e8809779636e339928"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/territory.ts", filename: "/root/generals/src/gameUI2/ai/strategies/territory.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/territory.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/territory.ts","loaded":true,"sourceSHA256":"a245c15149db037cdd3adcf62c12863688c90d7b29ba7c86e10a8e40701c93d9","size":18502,"version":1,"evalStartTime":1781595900921,"evalEndTime":1781595900921.01,"allowclient":true,"hotreload":true}, moduleFnc: (function territory_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Engine combat reach for a stack of `count` units (mirrors getCombatDistance in the engine).
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Territory / containment AI — the user's core strategy: don't fight battles you'd lose, instead
// maximize the LAND you hold (tile ownership drifts to whoever has units nearby), even while
// outnumbered, by spreading out and "netting" the enemy. More land -> more food -> bigger armies ->
// eventually you can win the fights you were avoiding.
//
// Each general scores its passable neighbours (and staying put):
//   + advance:  push toward enemy-held space (negative distance to nearest enemy general/city) so we
//               contest their territory rather than huddling at home.
//   + spread:   reward distance from our OWN generals (capped) so the army fans out into a net
//               instead of stacking on one tile (overlapping coverage wins no extra land).
//   - threat:   heavy penalty for stepping within combat reach of an enemy stack STRONGER than us —
//               that's the fight we refuse.
//   + capture:  big bonus for moving onto a city we can take (garrison < our stack) — free land.
// config: advanceWeight, spreadWeight, spreadCap, threatWeight, threatMargin, captureBonus.
(0, registry_1.registerStrategy)("territory", (snapshot, ctx) => {
    const cfg = ctx.config;
    const advanceWeight = num(cfg.advanceWeight, 1);
    const spreadWeight = num(cfg.spreadWeight, 2);
    const spreadCap = num(cfg.spreadCap, 6);
    const threatWeight = num(cfg.threatWeight, 12);
    const threatMargin = num(cfg.threatMargin, 1.1);
    const captureBonus = num(cfg.captureBonus, 50);
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const speed = terrainSpeeds[t.terrainType];
        if (speed && speed > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (!tileSet.has(key(nx, ny)))
                    continue;
                if ((0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        }
        return out;
    };
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyOrNeutralCities = cities.filter(c => c.factionId !== factionId);
    const enemyAnchors = [...enemyGenerals, ...enemyOrNeutralCities];
    const minDistTo = (x, y, pts) => {
        let best = Infinity;
        for (const p of pts)
            best = Math.min(best, (0, aiPlanner_1.hexDistance)({ x, y }, p));
        return best;
    };
    const orders = [];
    for (const gen of ours) {
        const S = gen.totalUnits;
        const allies = ours.filter(o => o.id !== gen.id);
        const cityAt = new Map(enemyOrNeutralCities.map(c => [key(c.x, c.y), c]));
        const scoreTile = (x, y) => {
            let score = 0;
            // advance toward enemy space (contest their land)
            if (enemyAnchors.length)
                score += advanceWeight * -minDistTo(x, y, enemyAnchors);
            // spread out from our own generals to cover more area (capped)
            if (allies.length)
                score += spreadWeight * Math.min(spreadCap, minDistTo(x, y, allies));
            // refuse to step within reach of a stronger enemy stack
            for (const e of enemyGenerals) {
                if (e.totalUnits <= S * threatMargin)
                    continue;
                const reach = combatDist(e.totalUnits);
                const d = (0, aiPlanner_1.hexDistance)({ x, y }, e);
                if (d <= reach + 1)
                    score -= threatWeight * (reach + 1 - d + 1);
            }
            // grab undefended / weak land
            const c = cityAt.get(key(x, y));
            if (c && S > c.garrison)
                score += captureBonus;
            return score;
        };
        let best;
        let bestScore = scoreTile(gen.x, gen.y);
        for (const n of neighborsOf(gen.x, gen.y)) {
            const sc = scoreTile(n.x, n.y);
            if (sc > bestScore) {
                bestScore = sc;
                best = n;
            }
        }
        if (best)
            orders.push({ generalId: gen.id, targetPosition: best });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "617bd2cd7685ae79b02ddfea1a16de0fa74a2b2d7a73f5b92a7803163ea09437"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/snowball.ts", filename: "/root/generals/src/gameUI2/ai/strategies/snowball.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/snowball.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/snowball.ts","loaded":true,"sourceSHA256":"42872bd3d0f2c5bc432ca97f46159fbacfd52bff50bed8d5d6a25ff16ad04d11","size":21112,"version":1,"evalStartTime":1781595900921.02,"evalEndTime":1781595900921.03,"allowclient":true,"hotreload":true}, moduleFnc: (function snowball_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Snowball AI — the full version of the user's strategy. Territory/containment EARLY (spread, take
// land, refuse losing fights, grow), then CONVERT the economic lead into kills:
//   - hunt: actively chase enemy generals we can beat (weaker than our stack) to destroy them — you
//     can't win by holding land forever, you have to eliminate the enemy once you out-scale them.
//   - press: once our faction out-armies the strongest enemy, relax threat-avoidance and push, so
//     the lead is converted to a win instead of stalling.
//   - threat: still refuse fights against stacks stronger than us (the whole point of snowballing).
// config: advanceWeight, spreadWeight, spreadCap, threatWeight, threatMargin, captureBonus,
//         huntWeight, killMargin, pressMargin, pressRelax.
(0, registry_1.registerStrategy)("snowball", (snapshot, ctx) => {
    var _a, _b;
    const cfg = ctx.config;
    const advanceWeight = num(cfg.advanceWeight, 1);
    const spreadWeight = num(cfg.spreadWeight, 2);
    const spreadCap = num(cfg.spreadCap, 6);
    const threatWeight = num(cfg.threatWeight, 18);
    const threatMargin = num(cfg.threatMargin, 1.0);
    const captureBonus = num(cfg.captureBonus, 60);
    const huntWeight = num(cfg.huntWeight, 4);
    const killMargin = num(cfg.killMargin, 1.25); // only hunt generals we beat by this factor
    const pressMargin = num(cfg.pressMargin, 1.15); // "ahead" once our army >= this * top enemy army
    const pressRelax = num(cfg.pressRelax, 0.4); // threat weight multiplier while pressing
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const speed = terrainSpeeds[t.terrainType];
        if (speed && speed > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (!tileSet.has(key(nx, ny)))
                    continue;
                if ((0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        }
        return out;
    };
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyOrNeutralCities = cities.filter(c => c.factionId !== factionId);
    const enemyAnchors = [...enemyGenerals, ...enemyOrNeutralCities];
    // Are we ahead overall? Compare our total army to the strongest single enemy faction's army.
    const armyByFaction = new Map();
    for (const g of generals)
        armyByFaction.set(g.factionId, ((_a = armyByFaction.get(g.factionId)) !== null && _a !== void 0 ? _a : 0) + g.totalUnits);
    const ourArmy = (_b = armyByFaction.get(factionId)) !== null && _b !== void 0 ? _b : 0;
    let topEnemyArmy = 0;
    for (const [fid, a] of armyByFaction)
        if (fid !== factionId)
            topEnemyArmy = Math.max(topEnemyArmy, a);
    const pressing = ourArmy >= topEnemyArmy * pressMargin;
    const effThreatWeight = pressing ? threatWeight * pressRelax : threatWeight;
    const minDistTo = (x, y, pts) => {
        let best = Infinity;
        for (const p of pts)
            best = Math.min(best, (0, aiPlanner_1.hexDistance)({ x, y }, p));
        return best;
    };
    const orders = [];
    for (const gen of ours) {
        const S = gen.totalUnits;
        const allies = ours.filter(o => o.id !== gen.id);
        const cityAt = new Map(enemyOrNeutralCities.map(c => [key(c.x, c.y), c]));
        const prey = enemyGenerals.filter(e => S > e.totalUnits * killMargin);
        const scoreTile = (x, y) => {
            let score = 0;
            if (enemyAnchors.length)
                score += advanceWeight * -minDistTo(x, y, enemyAnchors);
            if (allies.length)
                score += spreadWeight * Math.min(spreadCap, minDistTo(x, y, allies));
            for (const e of enemyGenerals) {
                if (e.totalUnits <= S * threatMargin)
                    continue;
                const reach = combatDist(e.totalUnits);
                const d = (0, aiPlanner_1.hexDistance)({ x, y }, e);
                if (d <= reach + 1)
                    score -= effThreatWeight * (reach + 1 - d + 1);
            }
            const c = cityAt.get(key(x, y));
            if (c && S > c.garrison)
                score += captureBonus;
            // hunt killable enemy generals (strong pull toward the nearest one)
            if (prey.length)
                score += huntWeight * -minDistTo(x, y, prey);
            return score;
        };
        let best;
        let bestScore = scoreTile(gen.x, gen.y);
        for (const n of neighborsOf(gen.x, gen.y)) {
            const sc = scoreTile(n.x, n.y);
            if (sc > bestScore) {
                bestScore = sc;
                best = n;
            }
        }
        if (best)
            orders.push({ generalId: gen.id, targetPosition: best });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "4006f630a81fcedaf9a31b66433693a4d57ffcf9c05ad754f49b9abaa9ef537b"; */
    }) });

/* Inlined buffer implementation: */

;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */
(function main() {
'use strict'

const base64 = (function () {
    let exports = {};

    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray

    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i]
        revLookup[code.charCodeAt(i)] = i
    }

    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63

    function getLens(b64) {
        var len = b64.length

        if (len % 4 > 0) {
            throw new Error('Invalid string. Length must be a multiple of 4')
        }

        // Trim off extra bytes after placeholder bytes are found
        // See: https://github.com/beatgammit/base64-js/issues/42
        var validLen = b64.indexOf('=')
        if (validLen === -1) validLen = len

        var placeHoldersLen = validLen === len
            ? 0
            : 4 - (validLen % 4)

        return [validLen, placeHoldersLen]
    }

    // base64 is 4/3 + up to two characters of the original data
    function byteLength(b64) {
        var lens = getLens(b64)
        var validLen = lens[0]
        var placeHoldersLen = lens[1]
        return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function _byteLength(b64, validLen, placeHoldersLen) {
        return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function toByteArray(b64) {
        var tmp
        var lens = getLens(b64)
        var validLen = lens[0]
        var placeHoldersLen = lens[1]

        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

        var curByte = 0

        // if there are placeholders, only get up to the last complete 4 chars
        var len = placeHoldersLen > 0
            ? validLen - 4
            : validLen

        var i
        for (i = 0; i < len; i += 4) {
            tmp =
                (revLookup[b64.charCodeAt(i)] << 18) |
                (revLookup[b64.charCodeAt(i + 1)] << 12) |
                (revLookup[b64.charCodeAt(i + 2)] << 6) |
                revLookup[b64.charCodeAt(i + 3)]
            arr[curByte++] = (tmp >> 16) & 0xFF
            arr[curByte++] = (tmp >> 8) & 0xFF
            arr[curByte++] = tmp & 0xFF
        }

        if (placeHoldersLen === 2) {
            tmp =
                (revLookup[b64.charCodeAt(i)] << 2) |
                (revLookup[b64.charCodeAt(i + 1)] >> 4)
            arr[curByte++] = tmp & 0xFF
        }

        if (placeHoldersLen === 1) {
            tmp =
                (revLookup[b64.charCodeAt(i)] << 10) |
                (revLookup[b64.charCodeAt(i + 1)] << 4) |
                (revLookup[b64.charCodeAt(i + 2)] >> 2)
            arr[curByte++] = (tmp >> 8) & 0xFF
            arr[curByte++] = tmp & 0xFF
        }

        return arr
    }

    function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] +
            lookup[num >> 12 & 0x3F] +
            lookup[num >> 6 & 0x3F] +
            lookup[num & 0x3F]
    }

    function encodeChunk(uint8, start, end) {
        var tmp
        var output = []
        for (var i = start; i < end; i += 3) {
            tmp =
                ((uint8[i] << 16) & 0xFF0000) +
                ((uint8[i + 1] << 8) & 0xFF00) +
                (uint8[i + 2] & 0xFF)
            output.push(tripletToBase64(tmp))
        }
        return output.join('')
    }

    function fromByteArray(uint8) {
        var tmp
        var len = uint8.length
        var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
        var parts = []
        var maxChunkLength = 16383 // must be multiple of 3

        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
            parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
        }

        // pad the end with zeros, but make sure to not forget the extra bytes
        if (extraBytes === 1) {
            tmp = uint8[len - 1]
            parts.push(
                lookup[tmp >> 2] +
                lookup[(tmp << 4) & 0x3F] +
                '=='
            )
        } else if (extraBytes === 2) {
            tmp = (uint8[len - 2] << 8) + uint8[len - 1]
            parts.push(
                lookup[tmp >> 10] +
                lookup[(tmp >> 4) & 0x3F] +
                lookup[(tmp << 2) & 0x3F] +
                '='
            )
        }

        return parts.join('')
    }

    return exports;
})();
const ieee754 = (function () {
    let exports = {};
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        let e, m
        const eLen = (nBytes * 8) - mLen - 1
        const eMax = (1 << eLen) - 1
        const eBias = eMax >> 1
        let nBits = -7
        let i = isLE ? (nBytes - 1) : 0
        const d = isLE ? -1 : 1
        let s = buffer[offset + i]

        i += d

        e = s & ((1 << (-nBits)) - 1)
        s >>= (-nBits)
        nBits += eLen
        while (nBits > 0) {
            e = (e * 256) + buffer[offset + i]
            i += d
            nBits -= 8
        }

        m = e & ((1 << (-nBits)) - 1)
        e >>= (-nBits)
        nBits += mLen
        while (nBits > 0) {
            m = (m * 256) + buffer[offset + i]
            i += d
            nBits -= 8
        }

        if (e === 0) {
            e = 1 - eBias
        } else if (e === eMax) {
            return m ? NaN : ((s ? -1 : 1) * Infinity)
        } else {
            m = m + Math.pow(2, mLen)
            e = e - eBias
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        let e, m, c
        let eLen = (nBytes * 8) - mLen - 1
        const eMax = (1 << eLen) - 1
        const eBias = eMax >> 1
        const rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
        let i = isLE ? 0 : (nBytes - 1)
        const d = isLE ? 1 : -1
        const s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

        value = Math.abs(value)

        if (isNaN(value) || value === Infinity) {
            m = isNaN(value) ? 1 : 0
            e = eMax
        } else {
            e = Math.floor(Math.log(value) / Math.LN2)
            if (value * (c = Math.pow(2, -e)) < 1) {
                e--
                c *= 2
            }
            if (e + eBias >= 1) {
                value += rt / c
            } else {
                value += rt * Math.pow(2, 1 - eBias)
            }
            if (value * c >= 2) {
                e++
                c /= 2
            }

            if (e + eBias >= eMax) {
                m = 0
                e = eMax
            } else if (e + eBias >= 1) {
                m = ((value * c) - 1) * Math.pow(2, mLen)
                e = e + eBias
            } else {
                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
                e = 0
            }
        }

        while (mLen >= 8) {
            buffer[offset + i] = m & 0xff
            i += d
            m /= 256
            mLen -= 8
        }

        e = (e << mLen) | m
        eLen += mLen
        while (eLen > 0) {
            buffer[offset + i] = e & 0xff
            i += d
            e /= 256
            eLen -= 8
        }

        buffer[offset + i - d] |= s * 128
    }
    return exports;
})();
const customInspectSymbol =
    (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
        ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
        : null

let exports = globalThis;

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
    console.error(
        'This browser lacks typed array (Uint8Array) support which is required by ' +
        '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
    )
}

function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1)
        const proto = { foo: function () { return 42 } }
        Object.setPrototypeOf(proto, Uint8Array.prototype)
        Object.setPrototypeOf(arr, proto)
        return arr.foo() === 42
    } catch (e) {
        return false
    }
}

Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.buffer
    }
})

Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.byteOffset
    }
})

function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"')
    }
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length)
    Object.setPrototypeOf(buf, Buffer.prototype)
    return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
            throw new TypeError(
                'The "string" argument must be of type string. Received type number'
            )
        }
        return allocUnsafe(arg)
    }
    return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') {
        return fromString(value, encodingOrOffset)
    }

    if (ArrayBuffer.isView(value)) {
        return fromArrayView(value)
    }

    if (value == null) {
        throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
            'or Array-like Object. Received type ' + (typeof value)
        )
    }

    if (isInstance(value, ArrayBuffer) ||
        (value && isInstance(value.buffer, ArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
    }

    if (typeof SharedArrayBuffer !== 'undefined' &&
        (isInstance(value, SharedArrayBuffer) ||
            (value && isInstance(value.buffer, SharedArrayBuffer)))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
    }

    if (typeof value === 'number') {
        throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
        )
    }

    const valueOf = value.valueOf && value.valueOf()
    if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length)
    }

    const b = fromObject(value)
    if (b) return b

    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
        typeof value[Symbol.toPrimitive] === 'function') {
        return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
    }

    throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' + (typeof value)
    )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize(size) {
    if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number')
    } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"')
    }
}

function alloc(size, fill, encoding) {
    assertSize(size)
    if (size <= 0) {
        return createBuffer(size)
    }
    if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpreted as a start offset.
        return typeof encoding === 'string'
            ? createBuffer(size).fill(fill, encoding)
            : createBuffer(size).fill(fill)
    }
    return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
    return alloc(size, fill, encoding)
}

function allocUnsafe(size) {
    assertSize(size)
    return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
    return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(size)
}

function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8'
    }

    if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
    }

    const length = byteLength(string, encoding) | 0
    let buf = createBuffer(length)

    const actual = buf.write(string, encoding)

    if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual)
    }

    return buf
}

function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0
    const buf = createBuffer(length)
    for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255
    }
    return buf
}

function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView)
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
    }
    return fromArrayLike(arrayView)
}

function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds')
    }

    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds')
    }

    let buf
    if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array)
    } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset)
    } else {
        buf = new Uint8Array(array, byteOffset, length)
    }

    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype)

    return buf
}

function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0
        const buf = createBuffer(len)

        if (buf.length === 0) {
            return buf
        }

        obj.copy(buf, 0, 0, len)
        return buf
    }

    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0)
        }
        return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data)
    }
}

function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
            'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
    }
    return length | 0
}

function SlowBuffer(length) {
    if (+length != length) { // eslint-disable-line eqeqeq
        length = 0
    }
    return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true &&
        b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        )
    }

    if (a === b) return 0

    let x = a.length
    let y = b.length

    for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
            x = a[i]
            y = b[i]
            break
        }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
}

Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true
        default:
            return false
    }
}

Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
    }

    if (list.length === 0) {
        return Buffer.alloc(0)
    }

    let i
    if (length === undefined) {
        length = 0
        for (i = 0; i < list.length; ++i) {
            length += list[i].length
        }
    }

    const buffer = Buffer.allocUnsafe(length)
    let pos = 0
    for (i = 0; i < list.length; ++i) {
        let buf = list[i]
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) {
                    buf = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
                }
                buf.copy(buffer, pos)
            } else {
                Uint8Array.prototype.set.call(
                    buffer,
                    buf,
                    pos
                )
            }
        } else if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers')
        } else {
            buf.copy(buffer, pos)
        }
        pos += buf.length
    }
    return buffer
}

function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
        return string.length
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength
    }
    if (typeof string !== 'string') {
        throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
            'Received type ' + typeof string
        )
    }

    const len = string.length
    const mustMatch = (arguments.length > 2 && arguments[2] === true)
    if (!mustMatch && len === 0) return 0

    // Use a for loop to avoid recursion
    let loweredCase = false
    for (; ;) {
        switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                return len
            case 'utf8':
            case 'utf-8':
                return utf8ToBytes(string).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return len * 2
            case 'hex':
                return len >>> 1
            case 'base64':
                return base64ToBytes(string).length
            default:
                if (loweredCase) {
                    return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
                }
                encoding = ('' + encoding).toLowerCase()
                loweredCase = true
        }
    }
}
Buffer.byteLength = byteLength

function slowToString(encoding, start, end) {
    let loweredCase = false

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
        start = 0
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
        return ''
    }

    if (end === undefined || end > this.length) {
        end = this.length
    }

    if (end <= 0) {
        return ''
    }

    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0
    start >>>= 0

    if (end <= start) {
        return ''
    }

    if (!encoding) encoding = 'utf8'

    while (true) {
        switch (encoding) {
            case 'hex':
                return hexSlice(this, start, end)

            case 'utf8':
            case 'utf-8':
                return utf8Slice(this, start, end)

            case 'ascii':
                return asciiSlice(this, start, end)

            case 'latin1':
            case 'binary':
                return latin1Slice(this, start, end)

            case 'base64':
                return base64Slice(this, start, end)

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return utf16leSlice(this, start, end)

            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
                encoding = (encoding + '').toLowerCase()
                loweredCase = true
        }
    }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap(b, n, m) {
    const i = b[n]
    b[n] = b[m]
    b[m] = i
}

Buffer.prototype.swap16 = function swap16() {
    const len = this.length
    if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
    }
    return this
}

Buffer.prototype.swap32 = function swap32() {
    const len = this.length
    if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
    }
    return this
}

Buffer.prototype.swap64 = function swap64() {
    const len = this.length
    if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
    }
    return this
}

Buffer.prototype.toString = function toString() {
    const length = this.length
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect() {
    let str = ''
    const max = exports.INSPECT_MAX_BYTES
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
    if (this.length > max) str += ' ... '
    return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
    Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength)
    }
    if (!Buffer.isBuffer(target)) {
        throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. ' +
            'Received type ' + (typeof target)
        )
    }

    if (start === undefined) {
        start = 0
    }
    if (end === undefined) {
        end = target ? target.length : 0
    }
    if (thisStart === undefined) {
        thisStart = 0
    }
    if (thisEnd === undefined) {
        thisEnd = this.length
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
    }

    if (thisStart >= thisEnd && start >= end) {
        return 0
    }
    if (thisStart >= thisEnd) {
        return -1
    }
    if (start >= end) {
        return 1
    }

    start >>>= 0
    end >>>= 0
    thisStart >>>= 0
    thisEnd >>>= 0

    if (this === target) return 0

    let x = thisEnd - thisStart
    let y = end - start
    const len = Math.min(x, y)

    const thisCopy = this.slice(thisStart, thisEnd)
    const targetCopy = target.slice(start, end)

    for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i]
            y = targetCopy[i]
            break
        }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset
        byteOffset = 0
    } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
    } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
    }
    byteOffset = +byteOffset // Coerce to Number.
    if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1)
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset
    if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0
        else return -1
    }

    // Normalize val
    if (typeof val === 'string') {
        val = Buffer.from(val, encoding)
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
            return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
            } else {
                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
            }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
    }

    throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1
    let arrLength = arr.length
    let valLength = val.length

    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase()
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
                return -1
            }
            indexSize = 2
            arrLength /= 2
            valLength /= 2
            byteOffset /= 2
        }
    }

    function read(buf, i) {
        if (indexSize === 1) {
            return buf[i]
        } else {
            return buf.readUInt16BE(i * indexSize)
        }
    }

    let i
    if (dir) {
        let foundIndex = -1
        for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) foundIndex = i
                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
            } else {
                if (foundIndex !== -1) i -= i - foundIndex
                foundIndex = -1
            }
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
        for (i = byteOffset; i >= 0; i--) {
            let found = true
            for (let j = 0; j < valLength; j++) {
                if (read(arr, i + j) !== read(val, j)) {
                    found = false
                    break
                }
            }
            if (found) return i
        }
    }

    return -1
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0
    const remaining = buf.length - offset
    if (!length) {
        length = remaining
    } else {
        length = Number(length)
        if (length > remaining) {
            length = remaining
        }
    }

    const strLen = string.length

    if (length > strLen / 2) {
        length = strLen / 2
    }
    let i
    for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16)
        if (numberIsNaN(parsed)) return i
        buf[offset + i] = parsed
    }
    return i
}

function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8'
        length = this.length
        offset = 0
        // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
        // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0
        if (isFinite(length)) {
            length = length >>> 0
            if (encoding === undefined) encoding = 'utf8'
        } else {
            encoding = length
            length = undefined
        }
    } else {
        throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
    }

    const remaining = this.length - offset
    if (length === undefined || length > remaining) length = remaining

    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
    }

    if (!encoding) encoding = 'utf8'

    let loweredCase = false
    for (; ;) {
        switch (encoding) {
            case 'hex':
                return hexWrite(this, string, offset, length)

            case 'utf8':
            case 'utf-8':
                return utf8Write(this, string, offset, length)

            case 'ascii':
            case 'latin1':
            case 'binary':
                return asciiWrite(this, string, offset, length)

            case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length)

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return ucs2Write(this, string, offset, length)

            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
                encoding = ('' + encoding).toLowerCase()
                loweredCase = true
        }
    }
}

Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    }
}

function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
    } else {
        return base64.fromByteArray(buf.slice(start, end))
    }
}

function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end)
    const res = []

    let i = start
    while (i < end) {
        const firstByte = buf[i]
        let codePoint = null
        let bytesPerSequence = (firstByte > 0xEF)
            ? 4
            : (firstByte > 0xDF)
                ? 3
                : (firstByte > 0xBF)
                    ? 2
                    : 1

        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint

            switch (bytesPerSequence) {
                case 1:
                    if (firstByte < 0x80) {
                        codePoint = firstByte
                    }
                    break
                case 2:
                    secondByte = buf[i + 1]
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                        if (tempCodePoint > 0x7F) {
                            codePoint = tempCodePoint
                        }
                    }
                    break
                case 3:
                    secondByte = buf[i + 1]
                    thirdByte = buf[i + 2]
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                            codePoint = tempCodePoint
                        }
                    }
                    break
                case 4:
                    secondByte = buf[i + 1]
                    thirdByte = buf[i + 2]
                    fourthByte = buf[i + 3]
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                            codePoint = tempCodePoint
                        }
                    }
            }
        }

        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD
            bytesPerSequence = 1
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000
            res.push(codePoint >>> 10 & 0x3FF | 0xD800)
            codePoint = 0xDC00 | codePoint & 0x3FF
        }

        res.push(codePoint)
        i += bytesPerSequence
    }

    return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray(codePoints) {
    const len = codePoints.length
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    let res = ''
    let i = 0
    while (i < len) {
        res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        )
    }
    return res
}

function asciiSlice(buf, start, end) {
    let ret = ''
    end = Math.min(buf.length, end)

    for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F)
    }
    return ret
}

function latin1Slice(buf, start, end) {
    let ret = ''
    end = Math.min(buf.length, end)

    for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
    }
    return ret
}

function hexSlice(buf, start, end) {
    const len = buf.length

    if (!start || start < 0) start = 0
    if (!end || end < 0 || end > len) end = len

    let out = ''
    for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]]
    }
    return out
}

function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end)
    let res = ''
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
    }
    return res
}

Buffer.prototype.slice = function slice(start, end) {
    const len = this.length
    start = ~~start
    end = end === undefined ? len : ~~end

    if (start < 0) {
        start += len
        if (start < 0) start = 0
    } else if (start > len) {
        start = len
    }

    if (end < 0) {
        end += len
        if (end < 0) end = 0
    } else if (end > len) {
        end = len
    }

    if (end < start) end = start

    const newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype)

    return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
    Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) checkOffset(offset, byteLength, this.length)

        let val = this[offset]
        let mul = 1
        let i = 0
        while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul
        }

        return val
    }

Buffer.prototype.readUintBE =
    Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length)
        }

        let val = this[offset + --byteLength]
        let mul = 1
        while (byteLength > 0 && (mul *= 0x100)) {
            val += this[offset + --byteLength] * mul
        }

        return val
    }

Buffer.prototype.readUint8 =
    Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 1, this.length)
        return this[offset]
    }

Buffer.prototype.readUint16LE =
    Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 2, this.length)
        return this[offset] | (this[offset + 1] << 8)
    }

Buffer.prototype.readUint16BE =
    Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 2, this.length)
        return (this[offset] << 8) | this[offset + 1]
    }

Buffer.prototype.readUint32LE =
    Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)

        return ((this[offset]) |
            (this[offset + 1] << 8) |
            (this[offset + 2] << 16)) +
            (this[offset + 3] * 0x1000000)
    }

Buffer.prototype.readUint32BE =
    Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)

        return (this[offset] * 0x1000000) +
            ((this[offset + 1] << 16) |
                (this[offset + 2] << 8) |
                this[offset + 3])
    }

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0
    validateNumber(offset, 'offset')
    const first = this[offset]
    const last = this[offset + 7]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8)
    }

    const lo = first +
        this[++offset] * 2 ** 8 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 24

    const hi = this[++offset] +
        this[++offset] * 2 ** 8 +
        this[++offset] * 2 ** 16 +
        last * 2 ** 24

    return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0
    validateNumber(offset, 'offset')
    const first = this[offset]
    const last = this[offset + 7]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8)
    }

    const hi = first * 2 ** 24 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        this[++offset]

    const lo = this[++offset] * 2 ** 24 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        last

    return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)

    let val = this[offset]
    let mul = 1
    let i = 0
    while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
    }
    mul *= 0x80

    if (val >= mul) val -= Math.pow(2, 8 * byteLength)

    return val
}

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0
    byteLength = byteLength >>> 0
    if (!noAssert) checkOffset(offset, byteLength, this.length)

    let i = byteLength
    let mul = 1
    let val = this[offset + --i]
    while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul
    }
    mul *= 0x80

    if (val >= mul) val -= Math.pow(2, 8 * byteLength)

    return val
}

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 1, this.length)
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    const val = this[offset] | (this[offset + 1] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 2, this.length)
    const val = this[offset + 1] | (this[offset] << 8)
    return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)

    return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)

    return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0
    validateNumber(offset, 'offset')
    const first = this[offset]
    const last = this[offset + 7]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8)
    }

    const val = this[offset + 4] +
        this[offset + 5] * 2 ** 8 +
        this[offset + 6] * 2 ** 16 +
        (last << 24) // Overflow

    return (BigInt(val) << BigInt(32)) +
        BigInt(first +
            this[++offset] * 2 ** 8 +
            this[++offset] * 2 ** 16 +
            this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0
    validateNumber(offset, 'offset')
    const first = this[offset]
    const last = this[offset + 7]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8)
    }

    const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        this[++offset]

    return (BigInt(val) << BigInt(32)) +
        BigInt(this[++offset] * 2 ** 24 +
            this[++offset] * 2 ** 16 +
            this[++offset] * 2 ** 8 +
            last)
})

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 4, this.length)
    return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0
    if (!noAssert) checkOffset(offset, 8, this.length)
    return ieee754.read(this, offset, false, 52, 8)
}

function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
    Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength) - 1
            checkInt(this, value, offset, byteLength, maxBytes, 0)
        }

        let mul = 1
        let i = 0
        this[offset] = value & 0xFF
        while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = (value / mul) & 0xFF
        }

        return offset + byteLength
    }

Buffer.prototype.writeUintBE =
    Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength) - 1
            checkInt(this, value, offset, byteLength, maxBytes, 0)
        }

        let i = byteLength - 1
        let mul = 1
        this[offset + i] = value & 0xFF
        while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = (value / mul) & 0xFF
        }

        return offset + byteLength
    }

Buffer.prototype.writeUint8 =
    Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
        this[offset] = (value & 0xff)
        return offset + 1
    }

Buffer.prototype.writeUint16LE =
    Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
        this[offset] = (value & 0xff)
        this[offset + 1] = (value >>> 8)
        return offset + 2
    }

Buffer.prototype.writeUint16BE =
    Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
        this[offset] = (value >>> 8)
        this[offset + 1] = (value & 0xff)
        return offset + 2
    }

Buffer.prototype.writeUint32LE =
    Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
        this[offset + 3] = (value >>> 24)
        this[offset + 2] = (value >>> 16)
        this[offset + 1] = (value >>> 8)
        this[offset] = (value & 0xff)
        return offset + 4
    }

Buffer.prototype.writeUint32BE =
    Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
        this[offset] = (value >>> 24)
        this[offset + 1] = (value >>> 16)
        this[offset + 2] = (value >>> 8)
        this[offset + 3] = (value & 0xff)
        return offset + 4
    }

function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7)

    let lo = Number(value & BigInt(0xffffffff))
    buf[offset++] = lo
    lo = lo >> 8
    buf[offset++] = lo
    lo = lo >> 8
    buf[offset++] = lo
    lo = lo >> 8
    buf[offset++] = lo
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
    buf[offset++] = hi
    hi = hi >> 8
    buf[offset++] = hi
    hi = hi >> 8
    buf[offset++] = hi
    hi = hi >> 8
    buf[offset++] = hi
    return offset
}

function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7)

    let lo = Number(value & BigInt(0xffffffff))
    buf[offset + 7] = lo
    lo = lo >> 8
    buf[offset + 6] = lo
    lo = lo >> 8
    buf[offset + 5] = lo
    lo = lo >> 8
    buf[offset + 4] = lo
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
    buf[offset + 3] = hi
    hi = hi >> 8
    buf[offset + 2] = hi
    hi = hi >> 8
    buf[offset + 1] = hi
    hi = hi >> 8
    buf[offset] = hi
    return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
        const limit = Math.pow(2, (8 * byteLength) - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }

    let i = 0
    let mul = 1
    let sub = 0
    this[offset] = value & 0xFF
    while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }

    return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
        const limit = Math.pow(2, (8 * byteLength) - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
    }

    let i = byteLength - 1
    let mul = 1
    let sub = 0
    this[offset + i] = value & 0xFF
    while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
    }

    return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
    if (value < 0) value = 0xff + value + 1
    this[offset] = (value & 0xff)
    return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
    return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
    return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
    if (value < 0) value = 0xffffffff + value + 1
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
    return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4)
    return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value
    offset = offset >>> 0
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8)
    return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
    if (!start) start = 0
    if (!end && end !== 0) end = this.length
    if (targetStart >= target.length) targetStart = target.length
    if (!targetStart) targetStart = 0
    if (end > 0 && end < start) end = start

    // Copy 0 bytes; we're done
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0

    // Fatal error conditions
    if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')

    // Are we oob?
    if (end > this.length) end = this.length
    if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
    }

    const len = end - start

    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end)
    } else {
        Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
        )
    }

    return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start
            start = 0
            end = this.length
        } else if (typeof end === 'string') {
            encoding = end
            end = this.length
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding)
        }
        if (val.length === 1) {
            const code = val.charCodeAt(0)
            if ((encoding === 'utf8' && code < 128) ||
                encoding === 'latin1') {
                // Fast path: If `val` fits into a single byte, use that numeric value.
                val = code
            }
        }
    } else if (typeof val === 'number') {
        val = val & 255
    } else if (typeof val === 'boolean') {
        val = Number(val)
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
    }

    if (end <= start) {
        return this
    }

    start = start >>> 0
    end = end === undefined ? this.length : end >>> 0

    if (!val) val = 0

    let i
    if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
            this[i] = val
        }
    } else {
        const bytes = Buffer.isBuffer(val)
            ? val
            : Buffer.from(val, encoding)
        const len = bytes.length
        if (len === 0) {
            throw new TypeError('The value "' + val +
                '" is invalid for argument "value"')
        }
        for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len]
        }
    }

    return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor() {
            super()

            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            })

            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            // Reset the name to the actual name.
            delete this.name
        }

        get code() {
            return sym
        }

        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            })
        }

        toString() {
            return `${this.name} [${sym}]: ${this.message}`
        }
    }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
    function (name) {
        if (name) {
            return `${name} is outside of buffer bounds`
        }

        return 'Attempt to access memory outside buffer bounds'
    }, RangeError)
E('ERR_INVALID_ARG_TYPE',
    function (name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`
    }, TypeError)
E('ERR_OUT_OF_RANGE',
    function (str, range, input) {
        let msg = `The value of "${str}" is out of range.`
        let received = input
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input))
        } else if (typeof input === 'bigint') {
            received = String(input)
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
                received = addNumericalSeparator(received)
            }
            received += 'n'
        }
        msg += ` It must be ${range}. Received ${received}`
        return msg
    }, RangeError)

function addNumericalSeparator(val) {
    let res = ''
    let i = val.length
    const start = val[0] === '-' ? 1 : 0
    for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`
    }
    return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset')
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
        boundsError(offset, buf.length - (byteLength + 1))
    }
}

function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : ''
        let range
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) {
                range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
            } else {
                range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                    `${(byteLength + 1) * 8 - 1}${n}`
            }
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`
        }
        throw new errors.ERR_OUT_OF_RANGE('value', range, value)
    }
    checkBounds(buf, offset, byteLength)
}

function validateNumber(value, name) {
    if (typeof value !== 'number') {
        throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
    }
}

function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type)
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
    }

    if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
    }

    throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
        `>= ${type ? 1 : 0} and <= ${length}`,
        value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0]
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '')
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return ''
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
        str = str + '='
    }
    return str
}

function utf8ToBytes(string, units) {
    units = units || Infinity
    let codePoint
    const length = string.length
    let leadSurrogate = null
    const bytes = []

    for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                    continue
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                    continue
                }

                // valid lead
                leadSurrogate = codePoint

                continue
            }

            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                leadSurrogate = codePoint
                continue
            }

            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
        } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        }

        leadSurrogate = null

        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break
            bytes.push(codePoint)
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break
            bytes.push(
                codePoint >> 0x6 | 0xC0,
                codePoint & 0x3F | 0x80
            )
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break
            bytes.push(
                codePoint >> 0xC | 0xE0,
                codePoint >> 0x6 & 0x3F | 0x80,
                codePoint & 0x3F | 0x80
            )
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break
            bytes.push(
                codePoint >> 0x12 | 0xF0,
                codePoint >> 0xC & 0x3F | 0x80,
                codePoint >> 0x6 & 0x3F | 0x80,
                codePoint & 0x3F | 0x80
            )
        } else {
            throw new Error('Invalid code point')
        }
    }

    return bytes
}

function asciiToBytes(str) {
    const byteArray = []
    for (let i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF)
    }
    return byteArray
}

function utf16leToBytes(str, units) {
    let c, hi, lo
    const byteArray = []
    for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
    }

    return byteArray
}

function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str))
}

function blitBuffer(src, dst, offset, length) {
    let i
    for (i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i]
    }
    return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type ||
        (obj != null && obj.constructor != null && obj.constructor.name != null &&
            obj.constructor.name === type.name)
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
    const alphabet = '0123456789abcdef'
    const table = new Array(256)
    for (let i = 0; i < 16; ++i) {
        const i16 = i * 16
        for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j]
        }
    }
    return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported')
}
})();
;

;globalThis.__BUNDLE_HASH__ = "51cd18a293d523d0ec74a6c509ebf020c2c4414413a32e3f1de4532af4049bd3";;(function bundleRequire(config) {
    globalThis.process = globalThis.process || {
        env: {
            NODE_ENV: "production",
        },
        versions: {},
        on: () => { },
    };
    // Use production, for consistency (and so mobx doesn't break)
    globalThis.process.env.NODE_ENV = globalThis.process.env.NODE_ENV || "production";
    globalThis.window = globalThis.window || globalThis;
    globalThis.global = globalThis.global || globalThis;
    globalThis.setImmediate = globalThis.setImmediate || globalThis.setTimeout;
    globalThis.BOOTED_EDGE_NODE = undefined;
    let builtInModuleExports = {
        worker_threads: {
            isMainThread: true,
        },
        util: {
            // https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor
            inherits(constructor, superConstructor) {
                Object.setPrototypeOf(constructor.prototype, superConstructor.prototype);
            },
            TextDecoder: TextDecoder,
            TextEncoder: TextEncoder,
        },
        buffer: { Buffer },
        stream: {
            // HACK: Needed to get SAX JS to work correctly.
            Stream: function () { },
            Transform: function () { },
            Writable: function () { },
        },
        timers: {
            // TODO: Add all members of timers
            setImmediate: globalThis.setImmediate,
        },
        child_process: {},
        events: class EventEmitter {
        },
    };
    if (typeof require !== "undefined") {
        const builtInRequire = require;
        let allBuiltInModules = new Set();
        allBuiltInModules.add("electron");
        allBuiltInModules.add("original-fs");
        allBuiltInModules.add("vscode");
        try {
            // Change the builts ins to use the actual built ins!
            let { builtinModules } = require("node:module");
            for (let key of builtinModules) {
                allBuiltInModules.add(key);
            }
        }
        catch (_a) { }
        for (let key of allBuiltInModules) {
            Object.defineProperty(builtInModuleExports, key, {
                get() {
                    return builtInRequire(key);
                },
            });
        }
    }
    // Just path.resolve (but needs to be reimplemented, because we can't use imports)
    function pathResolve(...paths) {
        // Start with empty path segments array
        let segments = [];
        let isWindowsPath = false;
        paths = paths.map(x => x.replace(/\\/g, "/"));
        // Process each path argument
        for (const path of paths) {
            // Check for Windows drive letter (e.g., C:/)
            if (/^[A-Za-z]:/.test(path)) {
                isWindowsPath = true;
                // Remove drive letter for processing
                const withoutDrive = path.slice(2);
                if (withoutDrive.startsWith("/")) {
                    segments = [path.slice(0, 2)]; // Keep drive letter and reset segments
                }
                else {
                    // If no leading slash, keep current segments (relative to current drive path)
                    if (segments.length === 0 || !segments[0].match(/^[A-Za-z]:/)) {
                        segments = [path.slice(0, 2)];
                    }
                }
                // Add the rest of the path parts
                segments.push(...withoutDrive.split("/").filter(x => x));
                continue;
            }
            // If absolute path, reset segments but keep drive letter if present
            if (path.startsWith("/")) {
                if (isWindowsPath && segments.length > 0 && segments[0].match(/^[A-Za-z]:/)) {
                    const drive = segments[0];
                    segments = [drive];
                }
                else {
                    segments = [];
                }
            }
            // Split path into segments and process each
            const pathParts = path.split("/").filter(x => x);
            for (const part of pathParts) {
                if (part === "..") {
                    // Don't pop off the drive letter
                    if (segments.length > (isWindowsPath ? 1 : 0)) {
                        segments.pop();
                    }
                }
                else if (part !== ".") {
                    // Add segment if not current directory marker
                    segments.push(part);
                }
            }
        }
        // Combine segments into final path
        let result = segments.join("/");
        if (!isWindowsPath) {
            result = "/" + result;
        }
        return result;
    }
    function dirname(path) {
        return path.split("/").slice(0, -1).join("/");
    }
    const requireCache = {};
    let rootModule = createModule({
        parentModule: undefined,
        resolveAbsolutePath: config.rootPath + "/rootPlaceholder",
    });
    globalThis.require = rootModule.require;
    function createModule(config) {
        var _a;
        const { parentModule, resolveAbsolutePath } = config;
        let cached = requireCache[resolveAbsolutePath];
        if (cached) {
            return cached;
        }
        let serialized = (_a = globalThis.registeredModules) === null || _a === void 0 ? void 0 : _a[resolveAbsolutePath];
        let newModule = {
            id: resolveAbsolutePath,
            filename: resolveAbsolutePath,
            exports: {},
            parent: parentModule,
            children: [],
            isPreloading: false,
            loaded: false,
            path: dirname(resolveAbsolutePath),
            paths: (serialized === null || serialized === void 0 ? void 0 : serialized.paths) || [],
            require: requireFnc,
            load,
        };
        newModule.exports.default = newModule.exports;
        if (parentModule) {
            parentModule.children.push(newModule);
        }
        for (let [key, value] of Object.entries((serialized === null || serialized === void 0 ? void 0 : serialized.moduleFields) || {})) {
            if (key in newModule)
                continue;
            newModule[key] = value;
        }
        resolve.paths = (request) => [];
        requireCache[newModule.id] = newModule;
        requireFnc.resolve = resolve;
        requireFnc.cache = requireCache;
        requireFnc.main = newModule;
        requireFnc.extensions = "extension not implemented yet";
        // Resolves file extensions
        function innerResolve(path) {
            var _a;
            let candidates = [
                path,
                path + ".js",
                path + ".ts",
                path + ".tsx",
            ];
            for (let candidate of candidates) {
                let registered = (_a = globalThis.registeredModules) === null || _a === void 0 ? void 0 : _a[candidate];
                if (registered) {
                    return registered.id;
                }
            }
            return path;
        }
        function resolve(path) {
            var _a;
            path = path.replace(/\\/g, "/");
            if (path.startsWith(".")) {
                return innerResolve(pathResolve(newModule.path, path));
            }
            // We need to search all paths
            for (let searchRoot of (serialized === null || serialized === void 0 ? void 0 : serialized.paths) || []) {
                let candidate = innerResolve(pathResolve(searchRoot, path));
                let registered = (_a = globalThis.registeredModules) === null || _a === void 0 ? void 0 : _a[candidate];
                if (registered) {
                    return registered.id;
                }
            }
            // It is probably "fs" or something like that
            return path;
            // debugger;
            // throw new Error(`Module ${path} not found`);
        }
        function requireFnc(path) {
            if (path in builtInModuleExports) {
                return builtInModuleExports[path];
            }
            let resolved = resolve(path);
            let subModule = createModule({
                parentModule: newModule,
                resolveAbsolutePath: resolved,
            });
            subModule.load(newModule.filename);
            return subModule.exports;
        }
        function load() {
            var _a;
            if (newModule.loaded)
                return;
            // NOTE: Set loaded immediately, in case we have a circular dependency
            newModule.loaded = true;
            if (serialized) {
                serialized.moduleFnc(newModule.exports, requireFnc, newModule, newModule.filename, newModule.path);
            }
            else {
                // If we are being imported by the root module, we need to throw an error
                if (!((_a = config.parentModule) === null || _a === void 0 ? void 0 : _a.parent)) {
                    debugger;
                    throw new Error(`Could not find required module ${JSON.stringify(config.resolveAbsolutePath)}, have ${JSON.stringify(Object.keys(globalThis.registeredModules || {}))}`);
                }
                newModule.exports = new Proxy({}, {
                    get(target, property) {
                        if (property === "__esModule")
                            return undefined;
                        if (property === "default")
                            return newModule.exports;
                        console.warn(`Module ${newModule.filename} is not available. It might have not been imported in Node.js due to a flag which is checking the browser or an environment variable. It might also be that the entry point is weirdly configured and could not be detected.`);
                        return undefined;
                    },
                });
            }
        }
        return newModule;
    }
})({"rootPath":"/root/generals"});
;setTimeout(() => {
;globalThis.require("/root/generals/src/gameUI2/ai/aiWorkerEntry.ts");
;});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGlsZURpckZsYWdzLnRzIiwiY29tcGlsZVJlY29yZE1vZHVsZVJlcXVpcmVzLnRzIiwiYnVuZGxlci50cyIsImJ1bmRsZVJlcXVpcmUudHMiLCJidW5kbGVXcmFwcGVyLnRzIiwiY2FjaGluZy50cyIsIm1pc2MudHMiLCJ0eXBlcy50cyIsImZvcm1hdC50cyIsInNvdXJjZU1hcHMudHMiLCJhaVdvcmtlckVudHJ5LnRzIiwiaW5kZXgudHMiLCJiZWVsaW5lLnRzIiwiYWlQbGFubmVyLnRzIiwiZ3Jvd3RoUG9saWN5LnRzIiwicmVnaXN0cnkudHMiLCJncmVlZHlDaXR5LnRzIiwiY29uc29saWRhdGUudHMiLCJmb2N1c0ZpcmUudHMiLCJmb2N1c1dlYWtlc3RGYWN0aW9uLnRzIiwibW9udGVDYXJsby50cyIsInRocmVhdEF3YXJlLnRzIiwiaW5mbHVlbmNlTWFwLnRzIiwidGVycml0b3J5LnRzIiwic25vd2JhbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgICAgIExvb2tzIGZvciBhZGphY2VudCB4LmZsYWcgZmlsZXMsIHNldHRpbmcgYW4geCBmbGFnIG9uIHRoZSBtb2R1bGUgaWYgdGhleSBleGlzdC5cbiAqICAgICAgLSBBbHNvIGNoZWNrcyBwYXJlbnQgZGlyZWN0b3JpZXNcbiAqIFxuICogICAgICAtIEV4LCBpZiB0ZXN0LmpzIGhhcyBhIHNpYmxpbmcgZmlsZSBjYWxsZWQgYWxsb3djbGllbnQuZmxhZywgdGhlbiB0aGUgdGVzdC5qc1xuICogICAgICAgICAgbW9kdWxlIGhhcyBhbGxvd2NsaWVudCA9IHRydWUgc2V0IG9uIGl0LlxuICovXG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG4vLyBOT1RFOiBOb3QgdXNpbmcgaW1wb3J0LCBhcyB0aGUgdHlwZXMgY29tcGxhaW4gYWJvdXQgd2hhdCB3ZSBhcmUgZG9pbmcgdG9vIG11Y2guXG5jb25zdCBNb2R1bGUgPSByZXF1aXJlKFwibW9kdWxlXCIpO1xuXG4vLyBXZSBuZWVkIGF0IGxlYXN0IDEgZXhwb3J0LCB0byBmb3JjZSB0aGlzIHRvIGJlIHRyZWF0ZWQgbGlrZSBhIG1vZHVsZVxuZXhwb3J0IGNvbnN0IGZvcmNlTW9kdWxlID0gdHJ1ZTtcblxubGV0IGZsYWdzUGVyRGlyOiB7IFtkaXJuYW1lOiBzdHJpbmddOiB7IFtmbGFnOiBzdHJpbmddOiB0cnVlIH0gfSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBnZXRGbGFnc0ZvckRpcihkaXI6IHN0cmluZykge1xuICAgIGxldCBmbGFncyA9IGZsYWdzUGVyRGlyW2Rpcl07XG4gICAgaWYgKCFmbGFncykge1xuICAgICAgICBmbGFncyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGZsYWdzUGVyRGlyW2Rpcl0gPSBmbGFncztcbiAgICAgICAgbGV0IGZpbGVzSW5EaXI6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmlsZXNJbkRpciA9IGZzLnJlYWRkaXJTeW5jKGRpcik7XG4gICAgICAgIH0gY2F0Y2ggeyB9XG4gICAgICAgIGlmIChmaWxlc0luRGlyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBmbGFnIG9mIGZpbGVzSW5EaXIuZmlsdGVyKHggPT4geC5lbmRzV2l0aChcIi5mbGFnXCIpKSkge1xuICAgICAgICAgICAgICAgIGZsYWdzW2ZsYWcuc2xpY2UoMCwgLVwiLmZsYWdcIi5sZW5ndGgpXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsYWdzO1xufVxuXG5jb25zdCBiYXNlID0gTW9kdWxlLnByb3RvdHlwZS5sb2FkO1xuTW9kdWxlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHRoaXM6IE5vZGVKUy5Nb2R1bGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gYmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKHRoaXMuZmlsZW5hbWUpIHtcbiAgICAgICAgbGV0IGZsYWdzOiB7IFtmbGFnOiBzdHJpbmddOiB0cnVlIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGxldCBkaXJQYXJ0cyA9IHRoaXMuZmlsZW5hbWUucmVwbGFjZSgvXFxcXC9nLCBcIi9cIikuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGlyUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmxhZ3MsIGdldEZsYWdzRm9yRGlyKGRpclBhcnRzLnNsaWNlKDAsIGkpLmpvaW4oXCIvXCIpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGZsYWdzKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBmbGFnc1trZXldO1xuICAgICAgICAgICAgLy8gTk9URTogRG9uJ3Qgc2V0IGZsYWdzIHdoaWNoIGFyZSBFWFBMSUNJVExZIHNldCB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKCh0aGlzIGFzIGFueSlba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAodGhpcyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59OyIsIi8qKlxuICogICAgICBBZGRzIG1vZHVsZS5yZXF1aXJlcywgd2hpY2ggaW5kaWNhdGVzIHRoZSByZXN1bHQgb2YgZXZlcnkgcmVxdWlyZSBwZXIgbW9kdWxlLlxuICovXG5cbi8vIE5PVEU6IE5vdCB1c2luZyBpbXBvcnQsIGFzIHRoZSB0eXBlcyBjb21wbGFpbiBhYm91dCB3aGF0IHdlIGFyZSBkb2luZyB0b28gbXVjaC5cbmNvbnN0IE1vZHVsZSA9IGV2YWwoXCJyZXF1aXJlXCIpKFwibW9kdWxlXCIpO1xuXG4vLyBXZSBuZWVkIGF0IGxlYXN0IDEgZXhwb3J0LCB0byBmb3JjZSB0aGlzIHRvIGJlIHRyZWF0ZWQgbGlrZSBhIG1vZHVsZVxuZXhwb3J0IGNvbnN0IGZvcmNlTW9kdWxlID0gdHJ1ZTtcblxuY29uc3QgYmFzZSA9IE1vZHVsZS5wcm90b3R5cGUucmVxdWlyZTtcbk1vZHVsZS5wcm90b3R5cGUucmVxdWlyZSA9IGZ1bmN0aW9uICh0aGlzOiBOb2RlSlMuTW9kdWxlLCByZXF1ZXN0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlcXVpcmVzID0gdGhpcy5yZXF1aXJlcyB8fCB7fTtcbiAgICB0aGlzLmFzeW5jUmVxdWlyZXMgPSB0aGlzLmFzeW5jUmVxdWlyZXMgfHwge31cbiAgICBpZiAodGhpcy5ldmFsRW5kVGltZSAmJiAhdGhpcy5yZXF1aXJlc1tyZXF1ZXN0XSkge1xuICAgICAgICB0aGlzLmFzeW5jUmVxdWlyZXNbcmVxdWVzdF0gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBOT1RFOiBEb2luZyByZXNvbHZlRmlsZW5hbWUgb24gZXZlcnkgcmVxdWlyZSBicmVha3MgYSBsb3Qgb2YgdGhlIGNhY2hpbmcgTm9kZUpTIGRvZXNcbiAgICAvLyAgdG8gdHJ5IHRvIGF2b2lkIGNhbGxpbmcgcmVzb2x2ZUZpbGVuYW1lLiBIb3dldmVyLi4uIHRoZWlyIGNhY2hpbmcgaXMgcHJvYmFibHkgbm8gbG9uZ2VyXG4gICAgLy8gIG5lZWRlZCBhbnltb3JlLlxuICAgIHRoaXMucmVxdWlyZXNbcmVxdWVzdF0gPSBNb2R1bGUuX3Jlc29sdmVGaWxlbmFtZShyZXF1ZXN0LCB0aGlzLCBmYWxzZSk7XG5cblxuICAgIHJldHVybiBiYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59OyIsImltcG9ydCB7IHNoYTI1NiB9IGZyb20gXCJqcy1zaGEyNTZcIjtcbmltcG9ydCB7IGJ1bmRsZVJlcXVpcmUsIEJ1bmRsZVJlcXVpcmVDb25maWcgfSBmcm9tIFwiLi9idW5kbGVSZXF1aXJlXCI7XG5pbXBvcnQgeyB3cmFwTW9kdWxlIH0gZnJvbSBcIi4vYnVuZGxlV3JhcHBlclwiO1xuaW1wb3J0IHsgYWRkVG9JblByb2dyZXNzU291cmNlTWFwLCBlbmNvZGVTb3VyY2VNYXBMaW5lQ29tbWVudCwgZmluYWxpemVJblByb2dyZXNzU291cmNlTWFwLCBnZXRJblByb2dyZXNzU291cmNlTWFwLCBJblByb2dyZXNzU291cmNlTWFwLCByZW1vdmVTb3VyY2VNYXAgfSBmcm9tIFwiLi9zb3VyY2VNYXBzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidW5kbGUoY29uZmlnOiB7XG4gICAgbW9kdWxlczogKHR5cGVvZiByZXF1aXJlLmNhY2hlW1wiXCJdKVtdO1xuICAgIHJvb3RQYXRoOiBzdHJpbmc7XG4gICAgZW50cnlQb2ludHM6IHN0cmluZ1tdO1xufSk6IFByb21pc2U8e1xuICAgIGJ1bmRsZTogc3RyaW5nO1xufT4ge1xuICAgIGNvbnN0IHsgbW9kdWxlcywgcm9vdFBhdGgsIGVudHJ5UG9pbnRzIH0gPSBjb25maWc7XG5cbiAgICAvLyBOT1RFOiBXZSBDT1VMRCB1c2UgYW4gXCJpbmRleCBzb3VyY2UgbWFwXCIsIHdoaWNoIGNvbnRhaW5zIG90aGVyIHNvdXJjZW1hcHNcbiAgICAvLyAgYW5kIGdpdmVzIG9mZnNldHMgZm9yIHRoZW0uIEhvd2V2ZXIuLi4gdG9vbGluZyBzdXBwb3J0IHdpbGwgaXMgYmV0dGVyXG4gICAgLy8gIGZvciByZWd1bGFyIHNvdXJjZW1hcHMsIGFuZCBpdCdzIG1vcmUgZmxleGlibGUuXG5cbiAgICBsZXQgaW5Qcm9ncmVzc1NvdXJjZU1hcDogSW5Qcm9ncmVzc1NvdXJjZU1hcCA9IHtcbiAgICAgICAgc291cmNlczogW10sXG4gICAgICAgIG1hcHBpbmdzOiBbXSxcbiAgICB9O1xuXG4gICAgbGV0IGNvZGUgPSBcIlwiO1xuICAgIGxldCBjdXJMaW5lQ291bnQgPSAwO1xuICAgIGZvciAobGV0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgIGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuICAgICAgICBsZXQgbmV3Q29kZSA9IHdyYXBNb2R1bGUobW9kdWxlKTtcblxuICAgICAgICBsZXQgeyBzb3VyY2VNYXAsIGNvZGU6IG5ld0NvZGUyIH0gPSByZW1vdmVTb3VyY2VNYXAobmV3Q29kZSk7XG4gICAgICAgIG5ld0NvZGUgPSBuZXdDb2RlMjtcbiAgICAgICAgaWYgKHNvdXJjZU1hcCkge1xuICAgICAgICAgICAgbGV0IGluUHJvZ3Jlc3MgPSBnZXRJblByb2dyZXNzU291cmNlTWFwKHNvdXJjZU1hcCk7XG4gICAgICAgICAgICBmb3IgKGxldCBtYXBwaW5nIG9mIGluUHJvZ3Jlc3MubWFwcGluZ3MpIHtcbiAgICAgICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZExpbmUgKz0gY3VyTGluZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVG9JblByb2dyZXNzU291cmNlTWFwKGluUHJvZ3Jlc3NTb3VyY2VNYXAsIGluUHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSArPSBuZXdDb2RlICsgXCJcXG5cIjtcbiAgICAgICAgY3VyTGluZUNvdW50ICs9IChuZXdDb2RlLm1hdGNoKC9cXG4vZykgfHwgW10pLmxlbmd0aCArIDE7XG4gICAgfVxuICAgIGNvZGUgKz0gXCJcXG4vKiBJbmxpbmVkIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbjogKi9cXG5cIjtcbiAgICBjb2RlICs9IGBcXG47XFxuJHtmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgXCIvYnVmZmVyLmpzXCIpLnRvU3RyaW5nKCl9XFxuO1xcbmA7XG4gICAgY29kZSArPSBgXFxuO2dsb2JhbFRoaXMuX19CVU5ETEVfSEFTSF9fID0gJHtKU09OLnN0cmluZ2lmeShzaGEyNTYoY29kZSkpfTtgO1xuICAgIGxldCBidW5kbGVDb25maWc6IEJ1bmRsZVJlcXVpcmVDb25maWcgPSB7XG4gICAgICAgIHJvb3RQYXRoLFxuICAgIH07XG4gICAgY29kZSArPSBgOygke2J1bmRsZVJlcXVpcmUudG9TdHJpbmcoKX0pKCR7SlNPTi5zdHJpbmdpZnkoYnVuZGxlQ29uZmlnKX0pO2A7XG4gICAgLy8gRGVsYXkgdGhlIGluaXRpYWwgcmVxdWlyZXMsIHNvIG91ciBleHRlbnNpb24gY2FuIGJvb3QgYW5kIHdlIGNhbiBkZWJ1ZyBzdGFydHVwIGVycm9yc1xuICAgIGNvZGUgKz0gXCJcXG47c2V0VGltZW91dCgoKSA9PiB7XCI7XG4gICAgZm9yIChsZXQgZW50cnlQb2ludCBvZiBlbnRyeVBvaW50cykge1xuICAgICAgICBjb2RlICs9IGBcXG47Z2xvYmFsVGhpcy5yZXF1aXJlKCR7SlNPTi5zdHJpbmdpZnkoZW50cnlQb2ludCl9KTtgO1xuICAgIH1cbiAgICBjb2RlICs9IFwiXFxuO30pO1wiO1xuICAgIGNvZGUgKz0gXCJcXG5cIiArIGVuY29kZVNvdXJjZU1hcExpbmVDb21tZW50KGZpbmFsaXplSW5Qcm9ncmVzc1NvdXJjZU1hcChpblByb2dyZXNzU291cmNlTWFwKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVuZGxlOiBjb2RlLFxuICAgIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICB2YXIgX19CVU5ETEVfSEFTSF9fOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QnVuZGxlSGFzaChjb2RlOiBzdHJpbmcpIHtcbiAgICBsZXQgbWF0Y2ggPSBjb2RlLm1hdGNoKC87Z2xvYmFsVGhpcy5fX0JVTkRMRV9IQVNIX18gPSBcIihbXlwiXSspXCI7Lyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWF0Y2hbMV07XG59IiwiaW1wb3J0IHsgU2VyaWFsaXplZE1vZHVsZSB9IGZyb20gXCIuL2J1bmRsZVdyYXBwZXJcIjtcblxuLy8gU2V0cyBnbG9iYWxUaGlzLnJlcXVpcmUgPSAuLi4sIHV0aWxpemluZyByZWdpc3RlcmVkTW9kdWxlcyAoZnJvbSBidW5kbGVXcmFwcGVyLnRzKSB3aGVuIHJlcXVpcmUgaXMgY2FsbGVkXG5leHBvcnQgaW50ZXJmYWNlIEJ1bmRsZVJlcXVpcmVDb25maWcge1xuICAgIHJvb3RQYXRoOiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gYnVuZGxlUmVxdWlyZShjb25maWc6IEJ1bmRsZVJlcXVpcmVDb25maWcpIHtcbiAgICBnbG9iYWxUaGlzLnByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3MgfHwge1xuICAgICAgICBlbnY6IHtcbiAgICAgICAgICAgIE5PREVfRU5WOiBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgdmVyc2lvbnM6IHt9LFxuICAgICAgICBvbjogKCkgPT4geyB9LFxuICAgIH07XG4gICAgLy8gVXNlIHByb2R1Y3Rpb24sIGZvciBjb25zaXN0ZW5jeSAoYW5kIHNvIG1vYnggZG9lc24ndCBicmVhaylcbiAgICBnbG9iYWxUaGlzLnByb2Nlc3MuZW52Lk5PREVfRU5WID0gZ2xvYmFsVGhpcy5wcm9jZXNzLmVudi5OT0RFX0VOViB8fCBcInByb2R1Y3Rpb25cIjtcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLndpbmRvdyA9IChnbG9iYWxUaGlzIGFzIGFueSkud2luZG93IHx8IGdsb2JhbFRoaXM7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5nbG9iYWwgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLmdsb2JhbCB8fCBnbG9iYWxUaGlzO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuc2V0SW1tZWRpYXRlID0gKGdsb2JhbFRoaXMgYXMgYW55KS5zZXRJbW1lZGlhdGUgfHwgZ2xvYmFsVGhpcy5zZXRUaW1lb3V0O1xuXG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5CT09URURfRURHRV9OT0RFID0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IGJ1aWx0SW5Nb2R1bGVFeHBvcnRzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSA9IHtcbiAgICAgICAgd29ya2VyX3RocmVhZHM6IHtcbiAgICAgICAgICAgIGlzTWFpblRocmVhZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXRpbDoge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS91dGlsLmh0bWwjdXRpbF91dGlsX2luaGVyaXRzX2NvbnN0cnVjdG9yX3N1cGVyY29uc3RydWN0b3JcbiAgICAgICAgICAgIGluaGVyaXRzKGNvbnN0cnVjdG9yOiBhbnksIHN1cGVyQ29uc3RydWN0b3I6IGFueSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBUZXh0RGVjb2RlcjogVGV4dERlY29kZXIsXG4gICAgICAgICAgICBUZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1ZmZlcjogeyBCdWZmZXIgfSxcbiAgICAgICAgc3RyZWFtOiB7XG4gICAgICAgICAgICAvLyBIQUNLOiBOZWVkZWQgdG8gZ2V0IFNBWCBKUyB0byB3b3JrIGNvcnJlY3RseS5cbiAgICAgICAgICAgIFN0cmVhbTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgVHJhbnNmb3JtOiBmdW5jdGlvbiAoKSB7IH0sXG5cbiAgICAgICAgICAgIFdyaXRhYmxlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVyczoge1xuICAgICAgICAgICAgLy8gVE9ETzogQWRkIGFsbCBtZW1iZXJzIG9mIHRpbWVyc1xuICAgICAgICAgICAgc2V0SW1tZWRpYXRlOiBnbG9iYWxUaGlzLnNldEltbWVkaWF0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRfcHJvY2Vzczoge30sXG4gICAgICAgIGV2ZW50czogY2xhc3MgRXZlbnRFbWl0dGVyIHsgfSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCBidWlsdEluUmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICAgIGxldCBhbGxCdWlsdEluTW9kdWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBhbGxCdWlsdEluTW9kdWxlcy5hZGQoXCJlbGVjdHJvblwiKTtcbiAgICAgICAgYWxsQnVpbHRJbk1vZHVsZXMuYWRkKFwib3JpZ2luYWwtZnNcIik7XG4gICAgICAgIGFsbEJ1aWx0SW5Nb2R1bGVzLmFkZChcInZzY29kZVwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgYnVpbHRzIGlucyB0byB1c2UgdGhlIGFjdHVhbCBidWlsdCBpbnMhXG4gICAgICAgICAgICBsZXQgeyBidWlsdGluTW9kdWxlcyB9ID0gcmVxdWlyZShcIm5vZGU6bW9kdWxlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGJ1aWx0aW5Nb2R1bGVzKSB7XG4gICAgICAgICAgICAgICAgYWxsQnVpbHRJbk1vZHVsZXMuYWRkKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggeyB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGFsbEJ1aWx0SW5Nb2R1bGVzKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYnVpbHRJbk1vZHVsZUV4cG9ydHMsIGtleSwge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWx0SW5SZXF1aXJlKGtleSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSnVzdCBwYXRoLnJlc29sdmUgKGJ1dCBuZWVkcyB0byBiZSByZWltcGxlbWVudGVkLCBiZWNhdXNlIHdlIGNhbid0IHVzZSBpbXBvcnRzKVxuICAgIGZ1bmN0aW9uIHBhdGhSZXNvbHZlKC4uLnBhdGhzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgICAgIC8vIFN0YXJ0IHdpdGggZW1wdHkgcGF0aCBzZWdtZW50cyBhcnJheVxuICAgICAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBpc1dpbmRvd3NQYXRoID0gZmFsc2U7XG5cbiAgICAgICAgcGF0aHMgPSBwYXRocy5tYXAoeCA9PiB4LnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGVhY2ggcGF0aCBhcmd1bWVudFxuICAgICAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBXaW5kb3dzIGRyaXZlIGxldHRlciAoZS5nLiwgQzovKVxuICAgICAgICAgICAgaWYgKC9eW0EtWmEtel06Ly50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgaXNXaW5kb3dzUGF0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyaXZlIGxldHRlciBmb3IgcHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhvdXREcml2ZSA9IHBhdGguc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgaWYgKHdpdGhvdXREcml2ZS5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IFtwYXRoLnNsaWNlKDAsIDIpXTsgLy8gS2VlcCBkcml2ZSBsZXR0ZXIgYW5kIHJlc2V0IHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm8gbGVhZGluZyBzbGFzaCwga2VlcCBjdXJyZW50IHNlZ21lbnRzIChyZWxhdGl2ZSB0byBjdXJyZW50IGRyaXZlIHBhdGgpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDAgfHwgIXNlZ21lbnRzWzBdLm1hdGNoKC9eW0EtWmEtel06LykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gW3BhdGguc2xpY2UoMCwgMildO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcmVzdCBvZiB0aGUgcGF0aCBwYXJ0c1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goLi4ud2l0aG91dERyaXZlLnNwbGl0KFwiL1wiKS5maWx0ZXIoeCA9PiB4KSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGFic29sdXRlIHBhdGgsIHJlc2V0IHNlZ21lbnRzIGJ1dCBrZWVwIGRyaXZlIGxldHRlciBpZiBwcmVzZW50XG4gICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc1dpbmRvd3NQYXRoICYmIHNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgc2VnbWVudHNbMF0ubWF0Y2goL15bQS1aYS16XTovKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZSA9IHNlZ21lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IFtkcml2ZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNwbGl0IHBhdGggaW50byBzZWdtZW50cyBhbmQgcHJvY2VzcyBlYWNoXG4gICAgICAgICAgICBjb25zdCBwYXRoUGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKS5maWx0ZXIoeCA9PiB4KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXRoUGFydHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydCA9PT0gXCIuLlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHBvcCBvZmYgdGhlIGRyaXZlIGxldHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gKGlzV2luZG93c1BhdGggPyAxIDogMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ICE9PSBcIi5cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VnbWVudCBpZiBub3QgY3VycmVudCBkaXJlY3RvcnkgbWFya2VyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tYmluZSBzZWdtZW50cyBpbnRvIGZpbmFsIHBhdGhcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNlZ21lbnRzLmpvaW4oXCIvXCIpO1xuICAgICAgICBpZiAoIWlzV2luZG93c1BhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiL1wiICsgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpcm5hbWUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHBhdGguc3BsaXQoXCIvXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1aXJlQ2FjaGU6IHsgW2lkOiBzdHJpbmddOiBOb2RlSlMuTW9kdWxlIH0gPSB7fTtcblxuICAgIGxldCByb290TW9kdWxlID0gY3JlYXRlTW9kdWxlKHtcbiAgICAgICAgcGFyZW50TW9kdWxlOiB1bmRlZmluZWQsXG4gICAgICAgIHJlc29sdmVBYnNvbHV0ZVBhdGg6IGNvbmZpZy5yb290UGF0aCArIFwiL3Jvb3RQbGFjZWhvbGRlclwiLFxuICAgIH0pO1xuICAgIGdsb2JhbFRoaXMucmVxdWlyZSA9IHJvb3RNb2R1bGUucmVxdWlyZSBhcyBhbnk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2R1bGUoY29uZmlnOiB7XG4gICAgICAgIHBhcmVudE1vZHVsZTogTm9kZUpTLk1vZHVsZSB8IHVuZGVmaW5lZDtcbiAgICAgICAgcmVzb2x2ZUFic29sdXRlUGF0aDogc3RyaW5nO1xuICAgIH0pOiBOb2RlSlMuTW9kdWxlIHtcbiAgICAgICAgY29uc3QgeyBwYXJlbnRNb2R1bGUsIHJlc29sdmVBYnNvbHV0ZVBhdGggfSA9IGNvbmZpZztcbiAgICAgICAgbGV0IGNhY2hlZCA9IHJlcXVpcmVDYWNoZVtyZXNvbHZlQWJzb2x1dGVQYXRoXTtcbiAgICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VyaWFsaXplZCA9IGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXM/LltyZXNvbHZlQWJzb2x1dGVQYXRoXTtcblxuICAgICAgICBsZXQgbmV3TW9kdWxlOiBOb2RlSlMuTW9kdWxlID0ge1xuICAgICAgICAgICAgaWQ6IHJlc29sdmVBYnNvbHV0ZVBhdGgsXG4gICAgICAgICAgICBmaWxlbmFtZTogcmVzb2x2ZUFic29sdXRlUGF0aCxcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnRNb2R1bGUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBpc1ByZWxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhdGg6IGRpcm5hbWUocmVzb2x2ZUFic29sdXRlUGF0aCksXG4gICAgICAgICAgICBwYXRoczogc2VyaWFsaXplZD8ucGF0aHMgfHwgW10sXG4gICAgICAgICAgICByZXF1aXJlOiByZXF1aXJlRm5jLFxuICAgICAgICAgICAgbG9hZCxcbiAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgIG5ld01vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBuZXdNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgcGFyZW50TW9kdWxlLmNoaWxkcmVuLnB1c2gobmV3TW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2VyaWFsaXplZD8ubW9kdWxlRmllbGRzIHx8IHt9KSkge1xuICAgICAgICAgICAgaWYgKGtleSBpbiBuZXdNb2R1bGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgKG5ld01vZHVsZSBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlLnBhdGhzID0gKHJlcXVlc3Q6IHN0cmluZykgPT4gW107XG5cbiAgICAgICAgcmVxdWlyZUNhY2hlW25ld01vZHVsZS5pZF0gPSBuZXdNb2R1bGU7XG4gICAgICAgIHJlcXVpcmVGbmMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIHJlcXVpcmVGbmMuY2FjaGUgPSByZXF1aXJlQ2FjaGU7XG4gICAgICAgIHJlcXVpcmVGbmMubWFpbiA9IG5ld01vZHVsZTtcbiAgICAgICAgcmVxdWlyZUZuYy5leHRlbnNpb25zID0gXCJleHRlbnNpb24gbm90IGltcGxlbWVudGVkIHlldFwiIGFzIGFueTtcblxuICAgICAgICAvLyBSZXNvbHZlcyBmaWxlIGV4dGVuc2lvbnNcbiAgICAgICAgZnVuY3Rpb24gaW5uZXJSZXNvbHZlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IFtcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIHBhdGggKyBcIi5qc1wiLFxuICAgICAgICAgICAgICAgIHBhdGggKyBcIi50c1wiLFxuICAgICAgICAgICAgICAgIHBhdGggKyBcIi50c3hcIixcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGxldCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIGxldCByZWdpc3RlcmVkID0gZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcz8uW2NhbmRpZGF0ZV07XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcbiAgICAgICAgICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlubmVyUmVzb2x2ZShwYXRoUmVzb2x2ZShuZXdNb2R1bGUucGF0aCwgcGF0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBzZWFyY2ggYWxsIHBhdGhzXG4gICAgICAgICAgICBmb3IgKGxldCBzZWFyY2hSb290IG9mIHNlcmlhbGl6ZWQ/LnBhdGhzIHx8IFtdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZSA9IGlubmVyUmVzb2x2ZShwYXRoUmVzb2x2ZShzZWFyY2hSb290LCBwYXRoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlZ2lzdGVyZWQgPSBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzPy5bY2FuZGlkYXRlXTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJdCBpcyBwcm9iYWJseSBcImZzXCIgb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgTW9kdWxlICR7cGF0aH0gbm90IGZvdW5kYCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXF1aXJlRm5jKHBhdGg6IHN0cmluZykge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gYnVpbHRJbk1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbHRJbk1vZHVsZUV4cG9ydHNbcGF0aCBhcyBrZXlvZiB0eXBlb2YgYnVpbHRJbk1vZHVsZUV4cG9ydHNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc29sdmVkID0gcmVzb2x2ZShwYXRoKTtcbiAgICAgICAgICAgIGxldCBzdWJNb2R1bGUgPSBjcmVhdGVNb2R1bGUoe1xuICAgICAgICAgICAgICAgIHBhcmVudE1vZHVsZTogbmV3TW9kdWxlLFxuICAgICAgICAgICAgICAgIHJlc29sdmVBYnNvbHV0ZVBhdGg6IHJlc29sdmVkLFxuICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgICAgc3ViTW9kdWxlLmxvYWQobmV3TW9kdWxlLmZpbGVuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBzdWJNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgICAgICBpZiAobmV3TW9kdWxlLmxvYWRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgLy8gTk9URTogU2V0IGxvYWRlZCBpbW1lZGlhdGVseSwgaW4gY2FzZSB3ZSBoYXZlIGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuICAgICAgICAgICAgbmV3TW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChzZXJpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZC5tb2R1bGVGbmMobmV3TW9kdWxlLmV4cG9ydHMsIHJlcXVpcmVGbmMsIG5ld01vZHVsZSwgbmV3TW9kdWxlLmZpbGVuYW1lLCBuZXdNb2R1bGUucGF0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBiZWluZyBpbXBvcnRlZCBieSB0aGUgcm9vdCBtb2R1bGUsIHdlIG5lZWQgdG8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5wYXJlbnRNb2R1bGU/LnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCByZXF1aXJlZCBtb2R1bGUgJHtKU09OLnN0cmluZ2lmeShjb25maWcucmVzb2x2ZUFic29sdXRlUGF0aCl9LCBoYXZlICR7SlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcyB8fCB7fSkpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdNb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm94eShcbiAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiZGVmYXVsdFwiKSByZXR1cm4gbmV3TW9kdWxlLmV4cG9ydHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBNb2R1bGUgJHtuZXdNb2R1bGUuZmlsZW5hbWV9IGlzIG5vdCBhdmFpbGFibGUuIEl0IG1pZ2h0IGhhdmUgbm90IGJlZW4gaW1wb3J0ZWQgaW4gTm9kZS5qcyBkdWUgdG8gYSBmbGFnIHdoaWNoIGlzIGNoZWNraW5nIHRoZSBicm93c2VyIG9yIGFuIGVudmlyb25tZW50IHZhcmlhYmxlLiBJdCBtaWdodCBhbHNvIGJlIHRoYXQgdGhlIGVudHJ5IHBvaW50IGlzIHdlaXJkbHkgY29uZmlndXJlZCBhbmQgY291bGQgbm90IGJlIGRldGVjdGVkLmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdNb2R1bGU7XG4gICAgfVxufSIsImltcG9ydCB7IGNhY2hlIH0gZnJvbSBcInNvY2tldC1mdW5jdGlvbi9zcmMvY2FjaGluZ1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuY29uc3QgZ2V0UGFja2FnZUpzb25QYXRoID0gY2FjaGUoKGRpcmVjdG9yeTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICBpZiAoIWRpcmVjdG9yeS5pbmNsdWRlcyhcIi9cIikgJiYgIWRpcmVjdG9yeS5pbmNsdWRlcyhcIlxcXFxcIikpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IHBhY2thZ2VKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkaXJlY3RvcnksIFwicGFja2FnZS5qc29uXCIpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHBhY2thZ2VKc29uUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHBhY2thZ2VKc29uUGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGdldFBhY2thZ2VKc29uUGF0aChwYXRoLmRpcm5hbWUoZGlyZWN0b3J5KSk7XG59KTtcbmNvbnN0IGdldE1haW5QYXRoID0gY2FjaGUoKGRpcmVjdG9yeTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICBsZXQgcGFja2FnZUpzb25QYXRoID0gZ2V0UGFja2FnZUpzb25QYXRoKGRpcmVjdG9yeSk7XG4gICAgaWYgKCFwYWNrYWdlSnNvblBhdGgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgbGV0IHBhY2thZ2VKc29uID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGFja2FnZUpzb25QYXRoLCBcInV0ZjhcIikpIGFzIHtcbiAgICAgICAgbWFpbj86IHN0cmluZztcbiAgICAgICAgZXhwb3J0cz86IHtcbiAgICAgICAgICAgIFwiLlwiPzoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmU/OiBzdHJpbmc7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgbGV0IGRpciA9IHBhdGguZGlybmFtZShwYWNrYWdlSnNvblBhdGgpO1xuICAgIGxldCBtYWluTmFtZSA9IHBhY2thZ2VKc29uLmV4cG9ydHM/LltcIi5cIl0/LnJlcXVpcmUgfHwgcGFja2FnZUpzb24ubWFpbjtcbiAgICBpZiAoIW1haW5OYW1lKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIFwiaW5kZXguanNcIikpKSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXguanNcIjtcbiAgICAgICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIFwiaW5kZXgudHNcIikpKSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXgudHNcIjtcbiAgICAgICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIFwiaW5kZXgudHN4XCIpKSkge1xuICAgICAgICAgICAgbWFpbk5hbWUgPSBcImluZGV4LnRzeFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbk5hbWUgPSBcImluZGV4LmpzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIHRoZSBuZWdhdGl2ZSB2YWx1ZSBFU00gZXhwb3J0cyB0aGluZy5cbiAgICBsZXQgbWFpblBhdGggPSBwYXRoLnJlc29sdmUoZGlyLCBtYWluTmFtZSk7XG4gICAgcmV0dXJuIG1haW5QYXRoO1xufSk7XG5cblxuLy8gV3JhcHMgdGhlIG1vZHVsZSBzbyBpdCByZWdpc3RlcnMgaXRzZWxmIHdoZW4gdGhlIHJldHVybmVkIGNvZGUgaXMgZXZhbHVhdGVkXG4vLyAgLSBTZWUgaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9tb2R1bGVzLmh0bWwjdGhlLW1vZHVsZS13cmFwcGVyXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1vZHVsZShtb2R1bGU6IE5vZGVKUy5Nb2R1bGUpOiBzdHJpbmcge1xuICAgIGxldCBjb250ZW50cyA9IChtb2R1bGUgYXMgYW55KS5tb2R1bGVDb250ZW50cyB8fCBcIi8qIE5vIGNvbnRlbnRzICovXCI7XG5cbiAgICAvLyBOT1RFOiBkZWJ1Z05hbWUgb25seSBtYXR0ZXJzIGR1cmluZyBtb2R1bGUgZXZhbHVhdGlvbi4gQWZ0ZXIgdGhhdCB0aGUgc291cmNlbWFwIHNob3VsZCB3b3JrLlxuICAgIGxldCBkZWJ1Z05hbWUgPSBtb2R1bGUuZmlsZW5hbWVcbiAgICAgICAgLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpXG4gICAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgICAgLnNsaWNlKC0xKVswXVxuICAgICAgICAucmVwbGFjZSgvXFwuL2csIFwiX1wiKVxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVpfXS9nLCBcIlwiKTtcblxuICAgIGxldCB3cmFwcGVkID0gYChmdW5jdGlvbiAke2RlYnVnTmFtZX0oZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHsgJHtjb250ZW50c31cbiAgICB9KWA7XG5cbiAgICBsZXQgbW9kdWxlRmllbGRzOiB7IFtmbGFnOiBzdHJpbmddOiB1bmtub3duOyB9ID0ge307XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1vZHVsZSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZUZpZWxkc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLmxlbmd0aCA8IDE1MCkge1xuICAgICAgICAgICAgbW9kdWxlRmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZUZpZWxkc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbW9kdWxlTWFpbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGxldCBkaXJuYW1lID0gcGF0aC5kaXJuYW1lKG1vZHVsZS5maWxlbmFtZSk7XG4gICAgbGV0IHBhY2thZ2VKc29uUGF0aCA9IGdldFBhY2thZ2VKc29uUGF0aChkaXJuYW1lKTtcbiAgICBpZiAocGFja2FnZUpzb25QYXRoKSB7XG4gICAgICAgIGxldCBtYWluUGF0aCA9IGdldE1haW5QYXRoKGRpcm5hbWUpO1xuICAgICAgICBpZiAobWFpblBhdGg/LnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSA9PT0gbW9kdWxlLmZpbGVuYW1lLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSkge1xuICAgICAgICAgICAgLy8gVGhlbiB3ZSBhcmUgdGhlIG1haW4gb2YgdGhlIG1vZHVsZVxuICAgICAgICAgICAgbW9kdWxlTWFpbiA9IHBhdGguZGlybmFtZShwYWNrYWdlSnNvblBhdGgpLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5PVEU6IFdlIGNhbid0IGhhdmUgbmV3IGxpbmVzLCBvciB0aGV5IGJyZWFrIHNvdXJjZSBtYXBzXG4gICAgbGV0IG9ialdyYXBwZWQgPSBge2BcbiAgICAgICAgKyBgIGlkOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZS5pZC5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpfSxgXG4gICAgICAgICsgYCBmaWxlbmFtZTogJHtKU09OLnN0cmluZ2lmeShtb2R1bGUuZmlsZW5hbWUucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpKX0sYFxuICAgICAgICArIGAgaXNNb2R1bGVNYWluOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZU1haW4pfSxgXG4gICAgICAgICsgYCBwYXRoczogJHtKU09OLnN0cmluZ2lmeShtb2R1bGUucGF0aHMubWFwKHAgPT4gcC5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpKX0sYFxuICAgICAgICArIGAgbW9kdWxlRmllbGRzOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZUZpZWxkcyl9LGBcbiAgICAgICAgKyBgIG1vZHVsZUZuYzogJHt3cmFwcGVkfWBcbiAgICAgICAgKyBgIH1gO1xuXG4gICAgZnVuY3Rpb24gaW5pdE1vZHVsZShzZXJpYWxpemVkOiBTZXJpYWxpemVkTW9kdWxlKSB7XG4gICAgICAgIGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXMgPSBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzIHx8IHt9O1xuICAgICAgICBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzW3NlcmlhbGl6ZWQuaWRdID0gc2VyaWFsaXplZDtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWQuaXNNb2R1bGVNYWluKSB7XG4gICAgICAgICAgICBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzW3NlcmlhbGl6ZWQuaXNNb2R1bGVNYWluXSA9IHNlcmlhbGl6ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYDsoJHtpbml0TW9kdWxlLnRvU3RyaW5nKCkucmVwbGFjZUFsbChcIlxcblwiLCBcIiBcIil9KSgke29ialdyYXBwZWR9KTtgO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgdmFyIHJlZ2lzdGVyZWRNb2R1bGVzOiB7IFtpZDogc3RyaW5nXTogU2VyaWFsaXplZE1vZHVsZTsgfSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemVkTW9kdWxlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG5cbiAgICAvLyBUaGUgbWFpbiBtYWluIHdlIHJlcHJlc2VudC4gRXgsIFwiL2FpMy9ub2RlX21vZHVsZXMvdHlwZXNhZmVjc3NcIlxuICAgIGlzTW9kdWxlTWFpbj86IHN0cmluZztcblxuICAgIC8vIFBhdGhzIHdoaWNoIHRoZSByZXF1aXJlIGZ1bmN0aW9uIHNlYXJjaGVzIGZvciBub24tcmVsYXRpdmUgaW1wb3J0c1xuICAgIHBhdGhzOiBzdHJpbmdbXTtcblxuICAgIC8vIEZpZWxkcyB0byBiZSBzZXQgb24gdGhlIG1vZHVsZSwgd2hlbiBpdCBpcyBjcmVhdGVkXG4gICAgbW9kdWxlRmllbGRzOiB7IFtmbGFnOiBzdHJpbmddOiB1bmtub3duOyB9O1xuXG4gICAgbW9kdWxlRm5jOiAoZXhwb3J0czogYW55LCByZXF1aXJlOiBhbnksIG1vZHVsZTogYW55LCBfX2ZpbGVuYW1lOiBzdHJpbmcsIF9fZGlybmFtZTogc3RyaW5nKSA9PiB1bmtub3duO1xufSIsImltcG9ydCB7IGFycmF5RXF1YWwgfSBmcm9tIFwiLi9taXNjXCI7XG5pbXBvcnQgeyBBbnlGdW5jdGlvbiwgQXJncywgY2FuSGF2ZUNoaWxkcmVuIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhenk8VD4oZmFjdG9yeTogKCkgPT4gVCkge1xuICAgIGxldCB2YWx1ZTogeyB2YWx1ZTogVCB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB7IHZhbHVlOiBmYWN0b3J5KCkgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUudmFsdWU7XG4gICAgfTtcbiAgICBnZXQucmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgZ2V0LnNldCA9IChuZXdWYWx1ZTogVCkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHsgdmFsdWU6IG5ld1ZhbHVlIH07XG4gICAgfTtcbiAgICByZXR1cm4gZ2V0O1xufVxuXG4vLyBOT1RFOiBUaGUgcmVhc29uIHdlIG5lZWQgdG8gcGVyaW9kaWNhbGx5IGNsZWFyLCBpcyBiZWNhdXNlIHNvbWV0aW1lcyBhIHZlcnkgc21hbGxcbi8vICAgICAgcGFydCBvZiBhIGxhcmdlIHBheWxvYWQgKGV4LCBwZXJzaXN0ZWQgb3ZlcnJpZGVzKSBpcyBjYWNoZWQsIHdoaWNoIHRoZW4gcmVzdWx0c1xuLy8gICAgICBpbiB0aGUgd2hvbGUgcGF5bG9hZCBiZWluZyBjYWNoZWQsIHdoaWNoIHJlc3VsdHMgaW4gYSBsb3Qgb2YgbWVtb3J5IGJlaW5nIHVzZWQuXG5cbi8vIElNUE9SVEFOVCEgVGhlIGNsZWFudXAgZnVuY3Rpb25zIENBTk5PVCBjbG9zZSB1cG9uIGFueXRoaW5nLCBvciBlbHNlIHRoZXkgd2lsbCBjYXVzZSBsZWFrcyFcbi8vICBBbGwgZGF0YSB0aGV5IHVzZSBzaG91bGQgYmUgaW4gZGF0YS5cbmludGVyZmFjZSBDbGVhbnVwRm5jPFQgZXh0ZW5kcyBvYmplY3Q+IHtcbiAgICAoZGF0YTogVCk6IHZvaWQ7XG59XG5cblxuLy8gTk9URTogRW1wdHkgYXJyYXlzIGFyZSBzbyBjb21tb24sIHRoYXQgaXQgaXMgdXNlZnVsIHRvIHJlcHJlc2VudCB0aGVtIGFzIHRoZSBzYW1lXG4vLyAgZW10cHkgYXJyYXksIHRvIGluY3JlYXNlIGNhY2hlIGhpdCByYXRlcy5cbmNvbnN0IGVtcHR5QXJyYXk6IGFueVtdID0gW107XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVFbXB0eUFycmF5PFQ+KGFycmF5OiBUW10pOiBUW10ge1xuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBlbXB0eUFycmF5O1xuICAgIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlPE91dHB1dCwgS2V5LCBVbnRyYWNrZWQgZXh0ZW5kcyB1bmtub3duW10+KFxuICAgIGdldFZhbHVlOiAoa2V5OiBLZXksIC4uLnVudHJhY2tlZDogVW50cmFja2VkKSA9PiBPdXRwdXRcbik6IHtcbiAgICAoa2V5OiBLZXksIC4uLnVudHJhY2tlZDogVW50cmFja2VkKTogT3V0cHV0O1xuICAgIC8vIE5PVEU6IElmIHlvdSB3YW50IHRvIGNsZWFyIGFsbCwganVzdCBtYWtlIGEgbmV3IGNhY2hlIVxuICAgIGNsZWFyKGtleTogS2V5KTogdm9pZDtcbiAgICBjbGVhckFsbCgpOiB2b2lkO1xuICAgIGZvcmNlU2V0KGtleTogS2V5LCB2YWx1ZTogT3V0cHV0KTogdm9pZDtcbiAgICBnZXRBbGxLZXlzKCk6IEtleVtdO1xuICAgIGdldChrZXk6IEtleSk6IE91dHB1dCB8IHVuZGVmaW5lZDtcbn0ge1xuICAgIGxldCBzdGFydGluZ0NhbGN1bGF0aW5nID0gbmV3IFNldDxLZXk+KCk7XG4gICAgbGV0IHZhbHVlcyA9IG5ldyBNYXA8S2V5LCBPdXRwdXQ+KCk7XG4gICAgZnVuY3Rpb24gY2FjaGUoaW5wdXQ6IEtleSwgLi4udW50cmFja2VkOiBVbnRyYWNrZWQpIHtcbiAgICAgICAgbGV0IGtleSA9IGlucHV0O1xuICAgICAgICBpZiAodmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmdldChrZXkpIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRpbmdDYWxjdWxhdGluZy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgLy8gVE9ETzogRml4IHRoZSB0eXBlcyBoZXJlLCBieSB0aHJvd2luZywgYW5kIHRoZW4gZm9yIHRoZSBjYXNlc1xuICAgICAgICAgICAgLy8gIHRoYXQgZG9uJ3QgdGhyb3csIG1ha2Ugb3VyIG91dHB1dCB0eXBlIGluY2x1ZGUgdW5kZWZpbmVkXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlKGlucHV0LCAuLi51bnRyYWNrZWQpO1xuICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNhY2hlLmNsZWFyID0gKGtleTogS2V5KSA9PiB7XG4gICAgICAgIHZhbHVlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5kZWxldGUoa2V5KTtcbiAgICB9O1xuICAgIGNhY2hlLmZvcmNlU2V0ID0gKGtleTogS2V5LCB2YWx1ZTogT3V0cHV0KSA9PiB7XG4gICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG4gICAgfTtcbiAgICBjYWNoZS5nZXRBbGxLZXlzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLnZhbHVlcy5rZXlzKCldO1xuICAgIH07XG4gICAgY2FjaGUuZ2V0ID0gKGtleTogS2V5KSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuZ2V0KGtleSk7XG4gICAgfTtcbiAgICBjYWNoZS5jbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgdmFsdWVzLmNsZWFyKCk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuY2xlYXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBjYWNoZTtcbn1cblxuXG4vKiogTWFrZXMgYSBjYWNoZSB0aGF0IGxpbWl0cyB0aGUgbnVtYmVyIG9mIGVudHJpZXMsIGFsbG93aW5nIHlvdSB0byBwdXQgYXJiaXRyYXJ5IGRhdGEgaW4gaXRcbiAqICAgICAgd2l0aG91dCB3b3JyeWluZyBhYm91dCBsZWFraW5nIG1lbW9yeVxuICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlTGltaXRlZDxPdXRwdXQsIEtleT4oXG4gICAgLy8gTk9URTogV2UgY2FuJ3QgY2FsY3VsYXRlIHdoYXQgbGltaXQgc2hvdWxkIGJlIGJhc2VkIG9uIGNvbXBhcmluZyB0aGUgZXZhbHVhdGlvbiB0aW1lXG4gICAgLy8gIGFuZCB0aGUgdGltZSB0byBjb21wYXJlIGFnYWluc3QgdGhlIHZhbHVlcy4gQmVjYXVzZSwgZXZlbiBpZiBmaW5kaW5nIGEgbWF0Y2ggdGFrZXMgZmFyIGxvbmdlciB0aGFuXG4gICAgLy8gIGNhbGN1bGF0aW5nLCBrZWVwaW5nIGEgY29uc2lzdGVudCBvdXRwdXQgY2FuIHNhdmUgKGEgY29uc2lkZXJhYmxlIGFtb3VudCBvZikgdGltZSBpbiBkb3duc3RyZWFtIGNhY2hlcy5cbiAgICBtYXhDb3VudDogbnVtYmVyLFxuICAgIGdldFZhbHVlOiAoa2V5OiBLZXkpID0+IE91dHB1dFxuKSB7XG4gICAgbGV0IHN0YXJ0aW5nQ2FsY3VsYXRpbmcgPSBuZXcgU2V0PEtleT4oKTtcbiAgICBsZXQgdmFsdWVzID0gbmV3IE1hcDxLZXksIE91dHB1dD4oKTtcbiAgICBmdW5jdGlvbiBnZXQoaW5wdXQ6IEtleSk6IE91dHB1dCB7XG4gICAgICAgIGxldCBrZXkgPSBpbnB1dDtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5nZXQoa2V5KSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0aW5nQ2FsY3VsYXRpbmcuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3ljbGljIGFjY2VzcyBpbiBjYWNoZWApO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG5cbiAgICAgICAgLy8gQ2xlYXIgd2hlbiBpdCBnZXRzIHRvbyBiaWcuIFRoaXMgaXMga2luZCBvZiBsaWtlIGEgd29yc2VcbiAgICAgICAgLy8gIGxlYXN0IHJlY2VudGx5IHVzZWQgY2FjaGUsIGJlY2F1c2UgZW50cmllcyB0aGF0IGFyZSBhY2Nlc3NlZFxuICAgICAgICAvLyAgb2Z0ZW4gd2lsbCBxdWlja2x5IGdldCBwdXQgYmFjayBpbi4gVGhpcyBpcyBlZmZlY3RpdmUgYXMgbG9uZ1xuICAgICAgICAvLyAgYXMgYWNjZXNzZXMgdGFrZSBzaW1pbGFyIGFtb3VudHMgb2YgdGltZS4gSWYgdGhlcmUgaXMgYSB2ZXJ5IHNsb3dcbiAgICAgICAgLy8gIGFuZCB2ZXJ5IGNvbW1vbmx5IGFjY2Vzc2VkIHZhbHVlLCBpdCBjb3VsZCBiZSBldmljdGVkIGJ5IG1hbnkgdmVyeVxuICAgICAgICAvLyAgZmFzdCBhY2Nlc3Nlcywgd2hpY2ggd291bGQgYmUgdW5mb3J0dW5hdGUuXG4gICAgICAgIGlmICh2YWx1ZXMuc2l6ZSA+PSBtYXhDb3VudCkge1xuICAgICAgICAgICAgdmFsdWVzLmNsZWFyKCk7XG4gICAgICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZShpbnB1dCk7XG4gICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0W1wiZm9yY2VTZXRcIl0gPSAoa2V5OiBLZXksIHZhbHVlOiBPdXRwdXQpID0+IHtcbiAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICB9O1xuICAgIGdldFtcImNsZWFyS2V5XCJdID0gKGtleTogS2V5KSA9PiB7XG4gICAgICAgIHZhbHVlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5kZWxldGUoa2V5KTtcbiAgICB9O1xuICAgIGdldFtcImNsZWFyXCJdID0gKCkgPT4ge1xuICAgICAgICB2YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5jbGVhcigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVXZWFrPE91dHB1dCwgS2V5IGV4dGVuZHMgb2JqZWN0PihnZXRWYWx1ZTogKGtleTogS2V5KSA9PiBPdXRwdXQpOiAoa2V5OiBLZXkpID0+IE91dHB1dCB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nOiBuZXcgV2Vha1NldDxLZXk+KCksXG4gICAgICAgIHZhbHVlczogbmV3IFdlYWtNYXA8S2V5LCBPdXRwdXQ+KCksXG4gICAgfTtcblxuICAgIHJldHVybiAoaW5wdXQpID0+IHtcbiAgICAgICAgbGV0IGtleSA9IGlucHV0O1xuICAgICAgICBpZiAoc3RhdGUudmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudmFsdWVzLmdldChrZXkpIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhcnRpbmdDYWxjdWxhdGluZy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDeWNsaWMgYWNjZXNzIGluIGNhY2hlV2Vha2ApO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlKGlucHV0KTtcbiAgICAgICAgc3RhdGUudmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59XG5cbi8vIEEgbGlzdCBjYWNoZSwgd2hpY2guLi4gbWF5YmUgZmFzdGVyIHRoYW4gYSBNYXA/XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVMaXN0PFZhbHVlPihcbiAgICBnZXRMZW5ndGg6ICgpID0+IG51bWJlcixcbiAgICBnZXRWYWx1ZTogKGluZGV4OiBudW1iZXIpID0+IFZhbHVlLFxuKTogeyAoaW5kZXg6IG51bWJlcik6IFZhbHVlOyB9IHtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGNhY2hlOiBbXSBhcyBWYWx1ZVtdLFxuICAgICAgICBsZW5ndGg6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIGdldExlbmd0aCxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldChpOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNhY2hlID0gc3RhdGUuY2FjaGU7XG4gICAgICAgIGxldCBsZW5ndGggPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gc3RhdGUubGVuZ3RoID0gc3RhdGUuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluZGV4IG91dCBvZiBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShpIGluIGNhY2hlKSkge1xuICAgICAgICAgICAgY2FjaGVbaV0gPSBnZXRWYWx1ZShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVbaV07XG4gICAgfTtcbiAgICByZXR1cm4gZ2V0O1xufVxuXG5mdW5jdGlvbiBjYWNoZUFycmF5RXF1YWxDbGVhbnVwKHN0YXRlOiBhbnkpIHtcbiAgICBzdGF0ZS5jYWNoZSA9IFtdO1xufVxuXG4vKiogQSBjYWNoZSBoYWxmIHdheSBiZXR3ZWVuIGNhY2hpbmcgYmFzZWQgb24gPT09IGFuZCBjYWNoaW5nIGJhc2VkIG9uIGhhc2guIENhY2hlc1xuICogICAgICBiYXNlZCBvbiBhcnJheUVxdWFsLCB3aGljaCBkb2VzID09PSBvbiBhbGwgdmFsdWVzIGluIGFuIGFycmF5LiBSZXF1aXJlcyBsb2NhbGl6ZWRcbiAqICAgICAgY2FjaGluZyAoYXMgdGhlIGNvbXBhcmlzb25zIGRvbid0IHNjYWxlIHdpdGggbWFueSBjYW5kaWRhdGVzLCB1bmxpa2UgaGFzaGluZyksXG4gKiAgICAgIGhvd2V2ZXIgd29ya3Mgd2l0aCBub24gdHJpdmFsIHRyYW5zZm9ybWF0aW9ucyAoZXgsIHJlc29sdmluZyBtYW55IHBlcnNpc3RlZCBvdmVycmlkZXNcbiAqICAgICAgdG8gZ2V0IGEgdmFsdWUpLCB1bmxpa2UgY2FjaGUoKS5cbiAqICBBbHNvLCBsaW1pdHMgaXRzZWxmLCBtb3JlIG9mIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRoYW4gbWVtb3J5IG9wdGltaXphdGlvbiwgYXMgaXQgc2NhbGVzXG4gKiAgICAgIHZlcnkgcG9vcmx5IHdpdGggdGhlIG51bWJlciBvZiBjYW5kaWRhdGVzLlxuICogIFxuICogIFRJTUlORzogQWJvdXQgNnVzIHdpdGggbGltaXQgPSAxMDAsIGFycmF5IHNpemUgPSAyOTQsIGFuZCB0aGUgY2FjaGUgYmVpbmcgZnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlQXJyYXlFcXVhbDxJbnB1dCBleHRlbmRzIHVua25vd25bXSB8IHVuZGVmaW5lZCwgT3V0cHV0PihcbiAgICBtYXA6IChhcnJheXM6IElucHV0KSA9PiBPdXRwdXQsXG4gICAgbGltaXQgPSAxMFxuKToge1xuICAgIChhcnJheTogSW5wdXQpOiBPdXRwdXQ7XG4gICAgY2xlYXIoYXJyYXk6IElucHV0KTogdm9pZDtcbiAgICBjbGVhckFsbCgpOiB2b2lkO1xufSB7XG4gICAgbGV0IHN0YXRlOiB7XG4gICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgICBpbnB1dDogSW5wdXQ7XG4gICAgICAgICAgICBvdXRwdXQ6IE91dHB1dDtcbiAgICAgICAgfVtdXG4gICAgfSA9IHsgY2FjaGU6IFtdIH07XG4gICAgZnVuY3Rpb24gaXNNYXRjaChsaHM6IElucHV0LCByaHM6IElucHV0KSB7XG4gICAgICAgIGlmIChsaHMgPT09IHJocykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxocyA9PT0gdW5kZWZpbmVkIHx8IHJocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFycmF5RXF1YWwobGhzLCByaHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAoaW5wdXQ6IElucHV0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2FjaGUgPSBzdGF0ZS5jYWNoZTtcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBjYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKG9iai5pbnB1dCwgaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmoub3V0cHV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBtYXAoaW5wdXQpO1xuICAgICAgICAgICAgY2FjaGUudW5zaGlmdCh7IGlucHV0LCBvdXRwdXQgfSk7XG4gICAgICAgICAgICB3aGlsZSAoY2FjaGUubGVuZ3RoID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFyKGFycmF5OiBJbnB1dCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGF0ZS5jYWNoZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaChzdGF0ZS5jYWNoZVtpXS5pbnB1dCwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jYWNoZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJBbGwoKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY2FjaGUgPSBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApO1xufVxuXG4vKiogQ2FjaGVzIHdoZW4gYXJndW1lbnRzIGFyZSA9PT0uIFNlZSBjYWNoZUFycmF5RXF1YWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUFyZ3NFcXVhbDxGbmMgZXh0ZW5kcyBBbnlGdW5jdGlvbj4oXG4gICAgZm5jOiBGbmMsXG4gICAgbGltaXQgPSAxMFxuKTogRm5jICYgeyBjbGVhciguLi5hcmdzOiBBcmdzPEZuYz4pOiB2b2lkIH0ge1xuICAgIGxldCBjYWNoZSA9IGNhY2hlQXJyYXlFcXVhbChmdW5jdGlvbiBjYWNoZUFyZ3NFcXVhbChhcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgcmV0dXJuIGZuYyguLi5hcmdzKTtcbiAgICB9LCBsaW1pdCk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICgoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUoYXJncyk7XG4gICAgICAgIH0pIGFzIEZuYyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXIoYXJncyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlSlNPTkFyZ3NFcXVhbDxGbmMgZXh0ZW5kcyBBbnlGdW5jdGlvbj4oXG4gICAgZm5jOiBGbmMsXG4gICAgbGltaXQgPSAxMFxuKSB7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVMaW1pdGVkKGxpbWl0LCAoYXJnc0pTT046IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gZm5jKC4uLkpTT04ucGFyc2UoYXJnc0pTT04pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZShKU09OLnN0cmluZ2lmeShhcmdzKSk7XG4gICAgICAgIH0pIGFzIEZuYyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXJLZXkoSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyQWxsKCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVTaGFsbG93Q29uZmlnQXJnRXF1YWw8Rm5jIGV4dGVuZHMgQW55RnVuY3Rpb24+KFxuICAgIGZuYzogRm5jLFxuICAgIGxpbWl0ID0gMTBcbik6IEZuYyAmIHtcbiAgICBjbGVhcihjb25maWdPYmo6IEFyZ3M8Rm5jPlswXSk6IHZvaWQ7XG4gICAgY2xlYXJBbGwoKTogdm9pZDtcbn0ge1xuICAgIGxldCBjYWNoZSA9IGNhY2hlQXJyYXlFcXVhbCgoa3Zwc0ZsYXQ6IHVua25vd25bXSkgPT4ge1xuICAgICAgICBvdXRwdXQubWlzc0NvdW50Kys7XG4gICAgICAgIGxldCBhcmc6IGFueTtcbiAgICAgICAgaWYgKGt2cHNGbGF0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgYXJnID0ga3Zwc0ZsYXRbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQga3ZwczogW3Vua25vd24sIHVua25vd25dW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga3Zwc0ZsYXQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICBrdnBzLnB1c2goW2t2cHNGbGF0W2ldLCBrdnBzRmxhdFtpICsgMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZyA9IE9iamVjdC5mcm9tRW50cmllcyhrdnBzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm5jKGFyZyk7XG4gICAgfSwgbGltaXQpO1xuICAgIGZ1bmN0aW9uIGdldEtWUHMoY29uZmlnQXJnOiBvYmplY3QpIHtcbiAgICAgICAgaWYgKCFjYW5IYXZlQ2hpbGRyZW4oY29uZmlnQXJnKSB8fCBBcnJheS5pc0FycmF5KGNvbmZpZ0FyZykpIHtcbiAgICAgICAgICAgIHJldHVybiBbY29uZmlnQXJnXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZ0FyZyk7XG4gICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICByZXR1cm4ga2V5cy5mbGF0TWFwKGtleSA9PiBba2V5LCBjb25maWdBcmdba2V5XV0pO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgKChjb25maWdBcmc6IG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgb3V0cHV0LmNhbGxDb3VudCsrO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlKGdldEtWUHMoY29uZmlnQXJnKSk7XG4gICAgICAgIH0pIGFzIEZuYyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoY29uZmlnQXJnOiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhcihnZXRLVlBzKGNvbmZpZ0FyZykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyQWxsKCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbENvdW50OiAwLFxuICAgICAgICAgICAgbWlzc0NvdW50OiAwLFxuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlcm5hbENhY2hlPEtleSwgVmFsdWU+KCk6IHtcbiAgICBnZXQ6IChrZXk6IEtleSkgPT4gVmFsdWUgfCB1bmRlZmluZWQ7XG4gICAgc2V0OiAoa2V5OiBLZXksIHZhbHVlOiBWYWx1ZSkgPT4gdm9pZDtcbn0ge1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgTWFwPEtleSwgVmFsdWU+KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiAoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmdldChrZXkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgIH07XG59IiwiaW1wb3J0IHsgY2FuSGF2ZUNoaWxkcmVuLCBNYXliZVByb21pc2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4vZm9ybWF0dGluZy9mb3JtYXRcIjtcblxuZXhwb3J0IGNvbnN0IHRpbWVJblNlY29uZCA9IDEwMDA7XG5leHBvcnQgY29uc3QgdGltZUluTWludXRlID0gdGltZUluU2Vjb25kICogNjA7XG5leHBvcnQgY29uc3QgdGltZUluSG91ciA9IHRpbWVJbk1pbnV0ZSAqIDYwO1xuZXhwb3J0IGNvbnN0IHRpbWVJbkRheSA9IHRpbWVJbkhvdXIgKiAyNDtcbmV4cG9ydCBjb25zdCB0aW1lSW5XZWVrID0gdGltZUluRGF5ICogNztcbmV4cG9ydCBjb25zdCB0aW1lSW5ZZWFyID0gdGltZUluRGF5ICogMzY1O1xuXG5leHBvcnQgdHlwZSBXYXRjaGFibGU8VD4gPSAoY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gdm9pZCkgPT4gTWF5YmVQcm9taXNlPHZvaWQ+O1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEVycm9yU3RhY2tUb0Vycm9yKGVycm9yOiBzdHJpbmcpOiBFcnJvciB7XG4gICAgbGV0IGVycm9yT2JqID0gbmV3IEVycm9yKCk7XG4gICAgZXJyb3JPYmouc3RhY2sgPSBTdHJpbmcoZXJyb3IpO1xuICAgIGVycm9yT2JqLm1lc3NhZ2UgPSBTdHJpbmcoZXJyb3IpLnNwbGl0KFwiXFxuXCIpWzBdLnNsaWNlKFwiRXJyb3I6IFwiLmxlbmd0aCk7XG4gICAgcmV0dXJuIGVycm9yT2JqO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaGEyNTZIYXNoKGJ1ZmZlcjogQnVmZmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVxdWlyZShcImNyeXB0b1wiKS5jcmVhdGVIYXNoKFwic2hhMjU2XCIpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdChcImhleFwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaGEyNTZIYXNoQnVmZmVyKGJ1ZmZlcjogQnVmZmVyIHwgc3RyaW5nKTogQnVmZmVyIHtcbiAgICByZXR1cm4gcmVxdWlyZShcImNyeXB0b1wiKS5jcmVhdGVIYXNoKFwic2hhMjU2XCIpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdCgpO1xufVxuLyoqIEFzeW5jLCBidXQgd29ya3MgYm90aCBjbGllbnRzaWRlIGFuZCBzZXJ2ZXJzaWRlLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNoYTI1Nkhhc2hQcm9taXNlKGJ1ZmZlcjogQnVmZmVyKSB7XG4gICAgaWYgKGlzTm9kZSgpKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiY3J5cHRvXCIpLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KFwiaGV4XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBidWYgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIGJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShidWYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaGEyNTZCdWZmZXJQcm9taXNlKGJ1ZmZlcjogQnVmZmVyKTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICBpZiAoaXNOb2RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJjcnlwdG9cIikuY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYnVmID0gYXdhaXQgd2luZG93LmNyeXB0by5zdWJ0bGUuZGlnZXN0KFwiU0hBLTI1NlwiLCBidWZmZXIpO1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oYnVmKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RXF1YWwoYTogeyBba2V5OiBudW1iZXJdOiB1bmtub3duOyBsZW5ndGg6IG51bWJlciB9LCBiOiB7IFtrZXk6IG51bWJlcl06IHVua25vd247IGxlbmd0aDogbnVtYmVyIH0sKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgKGdsb2JhbFRoaXMgYXMgYW55KS5Xb3JrZXJHbG9iYWxTY29wZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVRydWUoKSB7XG4gICAgcmV0dXJuIGlzTm9kZSgpIGFzIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXJTdWZmaXhlZChjb3VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0TnVtYmVyKGNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3QoY291bnQ6IG51bWJlcikge1xuICAgIGxldCBhcnI6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlRnJlZXplPFQ+KG9iajogVCk6IFQge1xuICAgIGlmICghY2FuSGF2ZUNoaWxkcmVuKG9iaikpIHJldHVybiBvYmo7XG4gICAgbGV0IHZpc2l0ZWQgPSBuZXcgU2V0PHVua25vd24+KCk7XG4gICAgZnVuY3Rpb24gaXRlcmF0ZShvYmo6IHVua25vd24pIHtcbiAgICAgICAgaWYgKCFjYW5IYXZlQ2hpbGRyZW4ob2JqKSkgcmV0dXJuO1xuICAgICAgICBpZiAodmlzaXRlZC5oYXMob2JqKSkgcmV0dXJuO1xuICAgICAgICB2aXNpdGVkLmFkZChvYmopO1xuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KG9iaikpIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICAgICAgICBsZXQga2V5cyA9IGdldEtleXMob2JqKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgIGl0ZXJhdGUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGl0ZXJhdGUob2JqKTtcbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0IHR5cGUgQXJyYXlCdWZmZXJWaWV3VHlwZXMgPSBVaW50OEFycmF5IHwgSW50OEFycmF5IHwgVWludDE2QXJyYXkgfCBJbnQxNkFycmF5IHwgVWludDMyQXJyYXkgfCBJbnQzMkFycmF5IHwgQmlnVWludDY0QXJyYXkgfCBCaWdJbnQ2NEFycmF5IHwgRmxvYXQ2NEFycmF5IHwgRmxvYXQzMkFycmF5IHwgVWludDhDbGFtcGVkQXJyYXk7XG5leHBvcnQgdHlwZSBCdWZmZXJUeXBlID0gQXJyYXlCdWZmZXIgfCBTaGFyZWRBcnJheUJ1ZmZlciB8IEFycmF5QnVmZmVyVmlld1R5cGVzO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQnVmZmVyVHlwZShvYmo6IHVua25vd24pOiBvYmogaXMgQnVmZmVyVHlwZSB7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIW9iaikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZ2xvYmFsLlNoYXJlZEFycmF5QnVmZmVyICYmIG9iaiBpbnN0YW5jZW9mIGdsb2JhbC5TaGFyZWRBcnJheUJ1ZmZlcikgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleXMob2JqOiB1bmtub3duKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChvYmogaW5zdGFuY2VvZiBNZXNzYWdlUG9ydCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGxldCBrZXlBcnJheTogUHJvcGVydHlLZXlbXTtcbiAgICBpZiAoaXNCdWZmZXJUeXBlKG9iaikpIHtcbiAgICAgICAga2V5QXJyYXkgPSBbXTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAvLyBOT1RFOiBXZSBjb252ZXJ0IHRoZSBpbmRleGVzIHRvIHN0cmluZ3MsIGJlY2F1c2UgdGhhdCBpcyB3aGF0IGphdmFzY3JpcHQgZG9lcyxcbiAgICAgICAgLy8gIGFuZCBkaWZmZXJpbmcgZnJvbSBpdCBjYXVzZXMgcmVncmVzc2lvbnMgdGhhdCB3ZSBzaW1wbHkgY2Fubm90IHJlY3RpZnkgKGl0IGJyZWFrcyBoYXNoaW5nXG4gICAgICAgIC8vICBjb25zaXN0ZW5jeSkuXG4gICAgICAgIGtleUFycmF5ID0gQXJyYXkob2JqLmxlbmd0aCkuZmlsbCgwKS5tYXAoKHgsIGkpID0+IFN0cmluZyhpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5QXJyYXkgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIH1cbiAgICBmb3IgKGxldCBzeW1ib2wgb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKSB7XG4gICAgICAgIGxldCBrZXkgPSBTeW1ib2wua2V5Rm9yKHN5bWJvbCk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGtleUFycmF5LnB1c2goc3ltYm9sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5QXJyYXk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nS2V5czxUIGV4dGVuZHMge30+KG9iajogVCk6ICgoa2V5b2YgVCkgJiBzdHJpbmcpW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopIGFzIGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleUJ5PFQsIEs+KGFycjogVFtdLCBnZXRLZXk6ICh2YWx1ZTogVCkgPT4gSyk6IE1hcDxLLCBUPiB7XG4gICAgbGV0IG1hcCA9IG5ldyBNYXA8SywgVD4oKTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFycikge1xuICAgICAgICBtYXAuc2V0KGdldEtleShpdGVtKSwgaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG5leHBvcnQgZnVuY3Rpb24ga2V5QnlBcnJheTxULCBLPihhcnI6IFRbXSwgZ2V0S2V5OiAodmFsdWU6IFQpID0+IEspOiBNYXA8SywgVFtdPiB7XG4gICAgbGV0IG1hcCA9IG5ldyBNYXA8SywgVFtdPigpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgIGxldCBrZXkgPSBnZXRLZXkoaXRlbSk7XG4gICAgICAgIGxldCBhcnIgPSBtYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYXJyKSB7XG4gICAgICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBhcnIpO1xuICAgICAgICB9XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lSlNPTjxUPihvYmo6IFQpOiBUIHtcbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybiBvYmo7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgLy8gSXQgaXMgcG9zc2libGUgZm9yIGFuIG9iamVjdCB0byBub3QgYmUgZGVmaW5lZCwgYnV0IHJldHVybiB1bmRlZmluZWQgd2hlbiBKU09OLnN0cmluZ2lmaWVkLFxuICAgIC8vICB2aWEgb3ZlcnJpZGluZyB0aGUgdG9KU09OIG1ldGhvZC5cbiAgICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQgYXMgYW55O1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9taXNlT2JqPFQgPSB2b2lkPiB7XG4gICAgcHVibGljIHByb21pc2U6IFByb21pc2U8VD47XG4gICAgcHVibGljIHZhbHVlOiB7IHZhbHVlPzogVDsgZXJyb3I/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZDtcbiAgICAvKiogUmVzb2x2ZSBjYWxsZWQgZG9lcyBub3QgbWVhbiB0aGUgdmFsdWUgaXMgcmVhZHksIGFzIGl0IG1heSBiZSByZXNvbHZlZCB3aXRoIGEgcHJvbWlzZS4gKi9cbiAgICBwdWJsaWMgcmVzb2x2ZUNhbGxlZD86IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgcmVzb2x2ZSA9ICh2YWx1ZTogVCB8IFByb21pc2U8VD4pID0+IHtcbiAgICAgICAgdGhpcy5yZXNvbHZlQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHZhbHVlLnRoZW4oXG4gICAgICAgICAgICAgICAgdmFsdWUgPT4gdGhpcy52YWx1ZSA9IHsgdmFsdWUgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLnZhbHVlID0geyBlcnJvciB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB7IHZhbHVlIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICBwdWJsaWMgcmVqZWN0ID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5iYXNlUmVqZWN0KGVycm9yKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBiYXNlUmVzb2x2ZSE6ICh2YWx1ZTogVCB8IFByb21pc2U8VD4pID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBiYXNlUmVqZWN0ITogKGVycm9yOiBhbnkpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5iYXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oXG4gICAgICAgICAgICB2YWx1ZSA9PiB0aGlzLnZhbHVlID0geyB2YWx1ZSB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy52YWx1ZSA9IHsgZXJyb3IgfVxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb21pc2VPYmo8VCA9IHZvaWQ+KCk6IFByb21pc2VPYmo8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iajxUPigpO1xufVxuXG4vLyBBbGxvd3MgYW4gaW1tZWRpYXRlIGNhbGwsIHRoZW4gZGVsYXlzIHRoZSBuZXh0IGNhbGwgdW50aWwgdGhlIGZpcnN0IGNhbGwgZmluaXNoZXMgKyBkZWxheVxuLy8gIC0gRHJvcHMgYWxsIGJ1dCB0aGUgbGF0ZXN0IGNhbGwsIGJ1dCBvbmx5IHJlc29sdmVzIHRoZSBwcm9taXNlcyByZXR1cm4gdG8gYWxsXG4vLyAgICAgIGNhbGxzIG9uY2UgdGhlIGxhdGVzdCBjYWxsIGZpbmlzaGVzLlxuLy8gIC0gRXNlbnRpYWxseSB0aGUgc2FtZSBhcyBzYXlpbmcgXCJkb24ndCBydW4gdGhpcyBmdW5jdGlvbiB0b28gb2Z0ZW4sIGRvbid0IHJ1biBpdCBpbiBwYXJhbGxlbCxcbi8vICAgICAgYW5kIGRvbid0IGxldCBmdW5jdGlvbnMgcnVucyBiZSB0b28gY2xvc2UgdG9nZXRoZXJcIi5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUZ1bmN0aW9uPEFyZ3MgZXh0ZW5kcyBhbnlbXT4oXG4gICAgZGVsYXk6IG51bWJlcixcbiAgICBmbmM6ICguLi5hcmdzOiBBcmdzKSA9PiBNYXliZVByb21pc2U8dm9pZD5cbik6ICguLi5hcmdzOiBBcmdzKSA9PiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgbmV4dEFsbG93ZWRDYWxsID0gMDtcbiAgICBsZXQgcGVuZGluZ0FyZ3M6IHsgYXJnczogQXJnczsgcHJvbWlzZU9iajogUHJvbWlzZU9iajx2b2lkPiB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGZ1bmN0aW9uIGRvQ2FsbChhcmdzOiBBcmdzLCBwcm9taXNlT2JqOiBQcm9taXNlT2JqPHZvaWQ+KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZm5jKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcHJvbWlzZU9iai5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIC8vIE5PVEU6IFRoZSBjYWxsZXIgc2hvdWxkIGhhbmRsZSB0aGUgcHJvbWlzZS4gSWYgbm90LCB0aGV5IHByb2JhYmx5XG4gICAgICAgICAgICAgICAgLy8gIHdhbnQgdGhlIHVucmVzb2x2ZWQgcHJvbWlzZSByZWplY3Rpb24sIHNvIHRoZXkgY2FuIGhhbmRsZSBpdCBwcm9wZXJseS5cbiAgICAgICAgICAgICAgICB2b2lkIHJlc3VsdC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gRGF0ZS5ub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgICAgICAgICBydW5OZXh0Q2FsbCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0QWxsb3dlZENhbGwgPSBEYXRlLm5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICAgICAgcnVuTmV4dENhbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBwcm9taXNlT2JqLnJlamVjdChlKTtcbiAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IERhdGUubm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIHJ1bk5leHRDYWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuTmV4dENhbGwoKSB7XG4gICAgICAgIGlmIChuZXh0QWxsb3dlZENhbGwgPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXBlbmRpbmdBcmdzKSByZXR1cm47XG4gICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHRpbWUgPiBuZXh0QWxsb3dlZENhbGwpIHtcbiAgICAgICAgICAgIC8vIFNldCBuZXh0QWxsb3dlZENhbGwgdG8gaW5maW5pdHksIHRvIHByZXZlbnQgbmV3IGNhbGxzIGZyb20gcnVubmluZ1xuICAgICAgICAgICAgLy8gIHVudGlsIGRvQ2FsbCBmaW5pc2hlcy5cbiAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgICAgICAgIC8vIERlbGF5LCBzbyB3ZSBkb24ndCB0dXJuIGEgc2VyaWVzIG9mIHNlcXVlbnRpYWwgY2FsbHMgdG8gYSBzZXJpZXMgb2YgbmVzdGVkIGNhbGxzXG4gICAgICAgICAgICAvLyAgKHdoaWNoIHdpbGwgY2F1c2UgYSBzdGFjayBvdmVyZmxvdylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gcGVuZGluZ0FyZ3M7XG4gICAgICAgICAgICAgICAgcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCFhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1wb3NzaWJsZSwgcGVuZGluZ0FyZ3Mgd2FzIHJlc2V0IHdoZW4gd2Ugc2hvdWxkbid0IGhhdmUgZXZlbiBiZWVuIGluIGEgY2FsbGApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvQ2FsbChhcmdzLmFyZ3MsIGFyZ3MucHJvbWlzZU9iaik7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuTmV4dENhbGwsIG5leHRBbGxvd2VkQ2FsbCAtIHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJnczogQXJncyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAocGVuZGluZ0FyZ3MpIHtcbiAgICAgICAgICAgIHBlbmRpbmdBcmdzLmFyZ3MgPSBhcmdzO1xuICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmdBcmdzLnByb21pc2VPYmoucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBwZW5kaW5nQXJncyA9IHsgYXJncywgcHJvbWlzZU9iajogcHJvbWlzZU9iaigpIH07XG4gICAgICAgIHJ1bk5leHRDYWxsKCk7XG4gICAgICAgIHJldHVybiBwZW5kaW5nQXJncy5wcm9taXNlT2JqLnByb21pc2U7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dElkKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpICsgXCJfXCIgKyBNYXRoLnJhbmRvbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlGcm9tT3JkZXJPYmplY3Q8VD4ob2JqOiB7IFtvcmRlcjogbnVtYmVyXTogVCB9KTogVFtdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gb2JqLnNsaWNlKCk7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaikuc29ydCgoYSwgYikgPT4gK2FbMF0gLSArYlswXSkubWFwKHggPT4geFsxXSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkICYmIHggIT09IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdDxUPihhcnI6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgdHlwZSBPYmplY3RWYWx1ZXM8VD4gPSBUW2tleW9mIFRdO1xuZXhwb3J0IGZ1bmN0aW9uIGVudHJpZXM8T2JqIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+KG9iajogT2JqKTogW2tleW9mIE9iaiwgT2JqZWN0VmFsdWVzPE9iaj5dW10ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopIGFzIGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXM8T2JqIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+KG9iajogT2JqKTogKGtleW9mIE9iailbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydDxUPihhcnI6IFRbXSwgc29ydEtleTogKG9iajogVCkgPT4gdW5rbm93bikge1xuICAgIGlmIChhcnIubGVuZ3RoIDw9IDEpIHJldHVybiBhcnI7XG4gICAgYXJyLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoc29ydEtleShhKSwgc29ydEtleShiKSkpO1xuICAgIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290RG9tYWluKGhvc3RuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoaG9zdG5hbWUuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKSB7XG4gICAgICAgIGhvc3RuYW1lID0gaG9zdG5hbWUuc2xpY2UoXCJodHRwczovL1wiLmxlbmd0aCk7XG4gICAgfVxuICAgIGhvc3RuYW1lID0gaG9zdG5hbWUuc3BsaXQoXCIvXCIpWzBdO1xuICAgIGxldCBwYXJ0cyA9IGhvc3RuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICBob3N0bmFtZSA9IHBhcnRzLnNsaWNlKC0yKS5qb2luKFwiLlwiKTtcbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KFwiOlwiKVswXTtcbiAgICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBjbGFzcyBRdWV1ZUxpbWl0ZWQ8VD4ge1xuICAgIHByaXZhdGUgaXRlbXM6IFRbXSA9IFtdO1xuICAgIHByaXZhdGUgbmV4dEluZGV4ID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1heENvdW50OiBudW1iZXIpIHsgfVxuXG4gICAgcHVibGljIHB1c2goaXRlbTogVCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zW3RoaXMubmV4dEluZGV4XSA9IGl0ZW07XG4gICAgICAgIHRoaXMubmV4dEluZGV4ID0gKHRoaXMubmV4dEluZGV4ICsgMSkgJSB0aGlzLm1heENvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxVbm9yZGVyZWQoKTogVFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLm5leHRJbmRleCA9IDA7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0T2xkZXN0KCk6IFQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubmV4dEluZGV4IC0gMTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCArPSB0aGlzLm1heENvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJhc2ljPFQsIFY+KGFycmF5OiBUW10sIGdldFZhbDogKHZhbDogVCkgPT4gViwgc2VhcmNoVmFsdWU6IFYpOiBudW1iZXIge1xuICAgIHJldHVybiBiaW5hcnlTZWFyY2hJbmRleChhcnJheS5sZW5ndGgsIGkgPT4gY29tcGFyZShnZXRWYWwoYXJyYXlbaV0pLCBzZWFyY2hWYWx1ZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJhc2ljMjxULCBWPihhcnJheTogVFtdLCBnZXRWYWw6ICh2YWw6IFQpID0+IFYsIHNlYXJjaFZhbHVlOiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoSW5kZXgoYXJyYXkubGVuZ3RoLCBpID0+IGNvbXBhcmUoZ2V0VmFsKGFycmF5W2ldKSwgZ2V0VmFsKHNlYXJjaFZhbHVlKSkpO1xufVxuXG4vKipcbiAqICBTZWFyY2hlcyBpbmRleGVzLCBhbGxvd2luZyB5b3UgdG8gcXVlcnkgc3RydWN0dXJlcyB0aGF0IGFyZW4ndCBhcnJheXMuIFRvIHNlYXJjaCBhbiBhcnJheSwgdXNlOlxuICogICAgICBgYmluYXJ5U2VhcmNoSW5kZXgoYXJyYXkubGVuZ3RoLCBpID0+IGNvbXBhcmUoYXJyYXlbaV0sIHNlYXJjaFZhbHVlKSlgXG4gKiBcbiAqICAgICAgTk9URTogSWYgdGhlcmUgYXJlIGR1cGxpY2F0ZXMsIHJldHVybnMgdGhlIGZpcnN0IG1hdGNoLlxuICogXG4gKiAgICAgIE5PVEU6IElmIHRoZSB2YWx1ZSBjYW4ndCBiZSBmb3VuZCwgcmV0dXJucyB0aGUgYml0d2lzZSBuZWdhdGlvbiBvZiB0aGUgaW5kZXggd2hlcmUgaXQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogXG4gKiAgICAgIE5PVEU6IFdpdGggYGlmIChpbmRleCA8IDApIGluZGV4ID0gfmluZGV4O2AgeW91IHdpbGwgZ2V0IGFuIGluZGV4IG9mIHRoZSB2YWx1ZSA+PSB0aGUgdGFyZ2V0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoSW5kZXgobGlzdENvdW50OiBudW1iZXIsIGNvbXBhcmU6IChsaHNJbmRleDogbnVtYmVyKSA9PiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChsaXN0Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIH4wO1xuICAgIH1cbiAgICBsZXQgbWluID0gMDtcbiAgICBsZXQgbWF4ID0gbGlzdENvdW50IC0gMTtcbiAgICB3aGlsZSAobWluIDwgbWF4KSB7XG4gICAgICAgIGxldCBmaW5nZXJJbmRleCA9IE1hdGguZmxvb3IoKG1heCArIG1pbikgLyAyKTtcbiAgICAgICAgbGV0IGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUoZmluZ2VySW5kZXgpO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlIDwgMCkge1xuICAgICAgICAgICAgbWluID0gZmluZ2VySW5kZXggKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF4ID0gZmluZ2VySW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNvbXBhcmlzb24gPSBjb21wYXJlKG1pbik7XG4gICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHJldHVybiBtaW47XG4gICAgaWYgKGNvbXBhcmlzb24gPiAwKSByZXR1cm4gfm1pbjtcbiAgICByZXR1cm4gfihtaW4gKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUobGhzOiB1bmtub3duLCByaHM6IHVua25vd24pOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgbGhzICE9PSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlKHR5cGVvZiBsaHMsIHR5cGVvZiByaHMpO1xuICAgIH1cbiAgICBpZiAobGhzID09PSByaHMpIHJldHVybiAwO1xuICAgIGlmIChsaHMgPT09IG51bGwgJiYgcmhzICE9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgaWYgKGxocyAhPT0gbnVsbCAmJiByaHMgPT09IG51bGwpIHJldHVybiAxO1xuICAgIGlmICh0eXBlb2YgbGhzID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4obGhzKSkge1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihyaHMpKSByZXR1cm4gMDtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNOYU4ocmhzKSkgcmV0dXJuICsxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsaHMgYXMgYW55IDwgKHJocyBhcyBhbnkpKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIDE7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5KGxoczogdW5rbm93bltdLCByaHM6IHVua25vd25bXSk6IG51bWJlciB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihsaHMubGVuZ3RoLCByaHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wYXJpc29uID0gY29tcGFyZShsaHNbaV0sIHJoc1tpXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uICE9PSAwKSByZXR1cm4gY29tcGFyaXNvbjtcbiAgICB9XG4gICAgcmV0dXJuIGxocy5sZW5ndGggLSByaHMubGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0SW50b1NvcnRlZExpc3Q8VD4obGlzdDogVFtdLCBtYXA6ICh2YWw6IFQpID0+IHN0cmluZyB8IG51bWJlciwgZWxlbWVudDogVCkge1xuICAgIGxldCBzZWFyY2hWYWx1ZSA9IG1hcChlbGVtZW50KTtcbiAgICBsZXQgaW5kZXggPSBiaW5hcnlTZWFyY2hJbmRleChsaXN0Lmxlbmd0aCwgaSA9PiBjb21wYXJlKG1hcChsaXN0W2ldKSwgc2VhcmNoVmFsdWUpKTtcbiAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IH5pbmRleDtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMCwgZWxlbWVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbVNvcnRlZExpc3Q8VD4obGlzdDogVFtdLCBtYXA6ICh2YWw6IFQpID0+IHN0cmluZyB8IG51bWJlciwgc2VhcmNoVmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGxldCBpbmRleCA9IGJpbmFyeVNlYXJjaEluZGV4KGxpc3QubGVuZ3RoLCBpID0+IGNvbXBhcmUobWFwKGxpc3RbaV0pLCBzZWFyY2hWYWx1ZSkpO1xuICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dFRvRXJyb3I8VD4odGltZTogbnVtYmVyLCBwOiBQcm9taXNlPFQ+LCBlcnI6ICgpID0+IEVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIoKSksIHRpbWUpO1xuICAgICAgICBwLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KS5maW5hbGx5KCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KSk7XG4gICAgfSk7XG59XG5cbi8vIE5PVEU6IEJvdGggZXJyb3JzIGFuZCB0aW1lb3V0cyBhcmUgY29udmVydGVkIHRvIHVuZGVmaW5lZFxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXRUb1VuZGVmaW5lZDxUPih0aW1lOiBudW1iZXIsIHA6IFByb21pc2U8VD4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VCB8IHVuZGVmaW5lZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgdGltZW91dFRvVW5kZWZpbmVkIHRpbWVkIG91dCBhZnRlciAke3RpbWV9YCk7XG4gICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgICBwLnRoZW4ocmVzb2x2ZSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGB0aW1lb3V0VG9VbmRlZmluZWQgZXJyb3I6ICR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5maW5hbGx5KCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGltZW91dFRvVW5kZWZpbmVkU2lsZW50PFQ+KHRpbWU6IG51bWJlciwgcDogUHJvbWlzZTxUPikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgICBwLnRoZW4oXG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5maW5hbGx5KCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclRvV2FybmluZzxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogdm9pZCB7XG4gICAgLy8gUmV0dXJuIHRoZSBwcm9taXNlLCBzbyB0aGV5IGNhbiB3YWl0IGlmIHRoZXkgd2FudCwgYnV0IGhhdmUgdGhlIHJldHVybiB0eXBlIGJlIHZvaWQsXG4gICAgLy8gIHNvIHRoYXQgdGhleSBkb24ndCBoYXZlIHRvIGF3YWl0IGl0LlxuICAgIHJldHVybiBwcm9taXNlLmNhdGNoKGUgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oZS5zdGFjayk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55O1xuICAgIH0pIGFzIGFueTtcbn1cbiIsImV4cG9ydCB0eXBlIE1heWJlUHJvbWlzZTxUPiA9IFQgfCBQcm9taXNlPFQ+O1xuXG5leHBvcnQgdHlwZSBBcmdzPFQ+ID0gVCBleHRlbmRzICguLi5hcmdzOiBpbmZlciBWKSA9PiBhbnkgPyBWIDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIEFueUZ1bmN0aW9uID0gKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuSGF2ZUNoaWxkcmVuKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgeyBba2V5IGluIFByb3BlcnR5S2V5XTogdW5rbm93biB9IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKG1pbGxpc2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkLCBtYXhBYnNvbHV0ZVZhbHVlPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG1pbGxpc2Vjb25kcyAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiXCI7XG4gICAgaWYgKG1pbGxpc2Vjb25kcyA9PT0gMCkgcmV0dXJuIFwiMG1zXCI7XG4gICAgaWYgKG1pbGxpc2Vjb25kcyA8IDApIHtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgZm9ybWF0VGltZSgtbWlsbGlzZWNvbmRzLCBtYXhBYnNvbHV0ZVZhbHVlKTtcbiAgICB9XG4gICAgbGV0IHNjYWxlID0gbWlsbGlzZWNvbmRzO1xuICAgIGlmIChtYXhBYnNvbHV0ZVZhbHVlKSB7XG4gICAgICAgIHNjYWxlID0gTWF0aC5tYXgoc2NhbGUsIG1heEFic29sdXRlVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoc2NhbGUgPCAxIC8gMTAwMCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzICogMTAwMCAqIDEwMDAsIDMpICsgXCJuc1wiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgKiAxMDAwLCAzKSArIFwidXNcIjtcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMTAwMCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzLCAzKSArIFwibXNcIjtcbiAgICAgICAgLy8gVXNlIHNlY29uZHMgdW50aWwgd2UgaGF2ZSAxMCBtaW51dGVzLCBhcyBkZWNpbWFsIG1pbnV0ZXMgYXJlIGNvbmZ1c2luZ1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwICogNjAgKiAxMCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzIC8gMTAwMCwgMykgKyBcInNcIjtcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMTAwMCAqIDYwICogNjApIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcyAvIDEwMDAgLyA2MCwgMykgKyBcIm1cIjtcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMTAwMCAqIDYwICogNjAgKiAyNCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzIC8gMTAwMCAvIDYwIC8gNjAsIDMpICsgXCJoXCI7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgMTAwMCAqIDYwICogNjAgKiAyNCAqIDEwKSB7XG4gICAgICAgIC8vICAgICBsZXQgcmVtYWluaW5nID0gTWF0aC5yb3VuZChtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICAgICAgLy8gICAgIGxldCBzZWNvbmRzID0gcmVtYWluaW5nICUgNjA7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLT0gc2Vjb25kcztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAvPSA2MDtcbiAgICAgICAgLy8gICAgIGxldCBtaW51dGVzID0gcmVtYWluaW5nICUgNjA7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLT0gbWludXRlcztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAvPSA2MDtcbiAgICAgICAgLy8gICAgIGxldCBob3VycyA9IHJlbWFpbmluZztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAtPSBob3VycztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAvPSAyNDtcbiAgICAgICAgLy8gICAgIGxldCBkYXlzID0gcmVtYWluaW5nO1xuICAgICAgICAvLyAgICAgbGV0IHRpbWUgPSBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICAgICAgLy8gICAgIGlmIChkYXlzID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIGlmIChkYXlzID09PSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRpbWUgPSBgMSBkYXkgJHt0aW1lfWA7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGltZSA9IGAke2RheXN9IGRheXMgJHt0aW1lfWA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIHRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheXMgPSBNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpO1xuICAgICAgICByZXR1cm4gYCR7ZGF5c30gZGF5c2A7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0RGVjaW1hbHMobWF4QWJzb2x1dGVWYWx1ZTogbnVtYmVyLCB0YXJnZXREaWdpdHM6IG51bWJlcikge1xuICAgIGxldCBpbnREaWdpdHMgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAobWF4QWJzb2x1dGVWYWx1ZSkgKyAxKTtcbiAgICBpZiAoaW50RGlnaXRzIDwgMCkgaW50RGlnaXRzID0gMTtcbiAgICBsZXQgZGVjaW1hbERpZ2l0cyA9IHRhcmdldERpZ2l0cyAtIGludERpZ2l0cztcbiAgICAvLyBIYXBwZW5zIGlmIHRoZSBudW1iZXIgaXMgc28gY2xvc2UgdG8gaGF2aW5nIHRvbyBtYW55IGRpZ2l0cyB0aGF0IE1hdGgubG9nMTAgcm91bmRzIGl0IG92ZXIuXG4gICAgaWYgKGRlY2ltYWxEaWdpdHMgPCAwKSB7XG4gICAgICAgIGRlY2ltYWxEaWdpdHMgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZGVjaW1hbERpZ2l0cztcbn1cblxuLyoqIEFkZHMgZGVjaW1hbCBkaWdpdHMgdG8gcmVhY2ggZGlnaXRzLiBJZiB0aGUgbnVtYmVyIGlzIHNpbXBseSB0b28gbGFyZ2UsIGl0IHdvbid0IHJlbW92ZVxuICogICAgICBkaWdpdHMsIHRoZXJlIHdpbGwgaW5zdGVhZCBqdXN0IGJlIG5vIGRlY2ltYWwgcG9pbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNYXhEZWNpbWFscyhudW06IG51bWJlciwgdGFyZ2V0RGlnaXRzOiBudW1iZXIsIG1heEFic29sdXRlVmFsdWU/OiBudW1iZXIsIGV4YWN0RGVjaW1hbHM/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgbnVtICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCIwXCI7XG4gICAgLy8gdG9GaXhlZCBoYXMgYSBtYXggb2YgMTAwIGRpZ2l0c1xuICAgIGlmICh0YXJnZXREaWdpdHMgPiAxMDApIHRhcmdldERpZ2l0cyA9IDEwMDtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShudW0pKSByZXR1cm4gbnVtLnRvRml4ZWQodGFyZ2V0RGlnaXRzKTtcblxuICAgIGlmIChudW0gPCAwKSByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMoLW51bSwgdGFyZ2V0RGlnaXRzLCBtYXhBYnNvbHV0ZVZhbHVlLCBleGFjdERlY2ltYWxzKTtcblxuICAgIC8vIFRJTUlORzpcbiAgICAvLyAgfjUwbnMgICB0b1N0cmluZ1xuICAgIC8vICB+NDAwbnMgIHRvTG9jYWxlU3RyaW5nXG4gICAgLy8gIH41MDBucyAgdG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiKVxuICAgIC8vICB+MjB1cyAgIHRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSlcbiAgICAvLyBTbywgd2UgYXJlIGF2b2lkaW5nIHVzaW5nIHRvTG9jYWxlU3RyaW5nLCBmb3Igbm93LlxuXG4gICAgbWF4QWJzb2x1dGVWYWx1ZSA9IG1heEFic29sdXRlVmFsdWUgPz8gTWF0aC5hYnMobnVtKTtcblxuICAgIGxldCB0YXJnZXREZWNpbWFscyA9IGV4YWN0RGVjaW1hbHMgPz8gZ2V0VGFyZ2V0RGVjaW1hbHMobWF4QWJzb2x1dGVWYWx1ZSwgdGFyZ2V0RGlnaXRzKTtcbiAgICBsZXQgdGV4dCA9IG51bS50b0ZpeGVkKHRhcmdldERlY2ltYWxzKTtcbiAgICBsZXQgcGFydHMgPSB0ZXh0LnNwbGl0KFwiLlwiKTtcbiAgICBsZXQgaW50ZWdlciA9IHBhcnRzWzBdO1xuICAgIGxldCBkZWNpbWFscyA9IHBhcnRzWzFdID8/IFwiXCI7XG5cbiAgICBpZiAoZXhhY3REZWNpbWFscykge1xuICAgICAgICB3aGlsZSAoZGVjaW1hbHMubGVuZ3RoIDwgZXhhY3REZWNpbWFscykge1xuICAgICAgICAgICAgZGVjaW1hbHMgKz0gXCIwXCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZGVjaW1hbHNbZGVjaW1hbHMubGVuZ3RoIC0gMV0gPT09IFwiMFwiKSB7XG4gICAgICAgICAgICBkZWNpbWFscyA9IGRlY2ltYWxzLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuXG4gICAgLy8gTk9URTogT05MWSBhZGQgY29tbWEgZ3JvdXBzIGlmIGl0IGlzID4gNCBkaWdpdHMuIEFzIDQyMzRLIGlzIGVhc2lseSByZWFkLCBhbmQgY29tbWFzXG4gICAgLy8gIG9ubHkgcmVhbGx5IG1hdHRlciBmb3IgbnVtYmVycyBzdWNoIGFzIDQyMzQ1MjNLLCB3aGljaCBpcyBoYXJkIHRvIHJlYWQuXG4gICAgaWYgKGludGVnZXIubGVuZ3RoID4gNCkge1xuICAgICAgICBmb3IgKGxldCBpID0gaW50ZWdlci5sZW5ndGg7IGkgPiAwOyBpIC09IDMpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGkgLSAzO1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xuICAgICAgICAgICAgbGV0IHN0ciA9IGludGVnZXIuc2xpY2Uoc3RhcnQsIGkpO1xuICAgICAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IFwiLFwiICsgb3V0cHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0ID0gc3RyICsgb3V0cHV0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gaW50ZWdlcjtcbiAgICB9XG5cbiAgICBpZiAoZGVjaW1hbHMpIHtcbiAgICAgICAgb3V0cHV0ICs9IFwiLlwiICsgZGVjaW1hbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqIEFjdHVhbGx5IGZvcm1hdHMgYW55IG51bWJlciwgaW5jbHVkaW5nIGRlY2ltYWxzLCBieSB1c2luZyBLLCBNIGFuZCBCIHN1ZmZpeGVzIHRvIGdldCBzbWFsbGVyIHZhbHVlc1xuICogICAgICBUT0RPOiBTdXBwb3J0IHVLLCB1TSBhbmQgdUIgc3VmZml4ZXMgZm9yIHZlcnkgc21hbGwgbnVtYmVycz9cbiAqICAgICAgPD0gNiBjaGFyYWN0ZXJzICg8PSA1IGlmIHBvc2l0aXZlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKGNvdW50OiBudW1iZXIgfCB1bmRlZmluZWQsIG1heEFic29sdXRlVmFsdWU/OiBudW1iZXIsIG5vRGVjaW1hbD86IGJvb2xlYW4sIHNwZWNpYWxDdXJyZW5jeT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgY291bnQgIT09IFwibnVtYmVyXCIpIHJldHVybiBcIjBcIjtcbiAgICBpZiAoY291bnQgPCAwKSB7XG4gICAgICAgIHJldHVybiBcIi1cIiArIGZvcm1hdE51bWJlcigtY291bnQsIG1heEFic29sdXRlVmFsdWUsIG5vRGVjaW1hbCwgc3BlY2lhbEN1cnJlbmN5KTtcbiAgICB9XG5cbiAgICBtYXhBYnNvbHV0ZVZhbHVlID0gbWF4QWJzb2x1dGVWYWx1ZSA/PyBNYXRoLmFicyhjb3VudCk7XG5cbiAgICBsZXQgbWF4RGVjaW1hbHMgPSAzO1xuXG4gICAgLy8gTk9URTogV2UgZG9uJ3Qgc3dpdGNoIHVuaXRzIGFzIHNvb24gYXMgd2UgcG9zc2libGUgY2FuLCBiZWNhdXNlLi4uXG4gICAgLy8gIDMuNTk0IHZzIDMuNTg0IGlzIGhhcmRlciB0byBxdWlja2x5IGRpc3Rpbmd1aXNoIGNvbXBhcmVkIHRvIDM1OTQgYW5kIDM1ODQsXG4gICAgLy8gIHRoZSBkZWNpbWFsIHNpbXBseSBtYWtlcyBpdCBoYXJkZXIgdG8gcmVhZCwgYW5kIGxhcmdlci5cbiAgICAvLyBOT1RFOiBUaGlzIG51bWJlciBzaG91bGQgcHJldmVudCB1cyBmcm9tIGV2ZXIgdXNpbmcgNSBkaWdpdHMsIHNvIHRoYXQgd2UgbmV2ZXIgbmVlZCBjb21tYXNcbiAgICAvLyAgRm9yIGV4YW1wbGUsIGlmIHRoZSBmYWN0b3IgaXMgMTAgdGhlbiwgOTk5OS41IGlzIGtlcHQgd2l0aCBhIGRpdmlzb3Igb2YgMSwgYW5kIHRoZW4gcm91bmRzIHVwIHRvXG4gICAgLy8gIFwiMTAsMDAwXCIuIFNvIHdlIHdhbnQgYW55IHZhbHVlIHdoaWNoIHJvdW5kcyB1cCBhdCA1IGRpZ2l0cyB0byBiZSBwdXQgaW4gdGhlIG5leHQgZ3JvdXAgKGFuZCBoYXZpbmdcbiAgICAvLyAgZXh0cmEgdmFsdWVzIHB1dCBpbiB0aGUgbmV4dCBncm91cCBpcyBmaW5lLCBhcyB3ZSB3b24ndCBzaG93IHRoZSBkZWNpbWFsIHZhbHVlIGFueXdheXMsIHNvIGl0IG9ubHlcbiAgICAvLyAgbWVhbnMgOTk5OSB3cmFwcyBhcm91bmQgdG8gMTBLIGEgYml0IGZhc3RlcikuXG4gICAgY29uc3QgZXh0cmFGYWN0b3IgPSA5Ljk5OTQ5OTk5O1xuICAgIGxldCBkaXZpc29yID0gMTtcbiAgICBsZXQgc3VmZml4ID0gXCJcIjtcbiAgICBsZXQgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA9IGZhbHNlO1xuICAgIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAwMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDExO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMTA7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDk7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gODtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDc7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDY7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4xKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gNTtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgaWYgKHNwZWNpYWxDdXJyZW5jeSkge1xuICAgICAgICAgICAgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiS1wiO1xuICAgICAgICBkaXZpc29yID0gMTAwMDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogMTAwMCAqIDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIk1cIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiAxMDAwO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIkJcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiAxMDAwICogMTAwMDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiVFwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWZmaXggPSBcIlFcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwO1xuICAgIH1cbiAgICBjb3VudCAvPSBkaXZpc29yO1xuICAgIG1heEFic29sdXRlVmFsdWUgLz0gZGl2aXNvcjtcbiAgICBpZiAobm9EZWNpbWFsKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMoY291bnQsIG1heERlY2ltYWxzLCBtYXhBYnNvbHV0ZVZhbHVlLCBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID8gMiA6IHVuZGVmaW5lZCkgKyBzdWZmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRCaW5hcnlOdW1iZXIoY291bnQ6IG51bWJlciB8IHVuZGVmaW5lZCwgbWF4QWJzb2x1dGVWYWx1ZT86IG51bWJlciwgbm9EZWNpbWFsPzogYm9vbGVhbiwgc3BlY2lhbEN1cnJlbmN5PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBjb3VudCAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiMFwiO1xuICAgIGlmIChjb3VudCA8IDApIHtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgZm9ybWF0TnVtYmVyKC1jb3VudCwgbWF4QWJzb2x1dGVWYWx1ZSwgbm9EZWNpbWFsLCBzcGVjaWFsQ3VycmVuY3kpO1xuICAgIH1cblxuICAgIG1heEFic29sdXRlVmFsdWUgPSBtYXhBYnNvbHV0ZVZhbHVlID8/IE1hdGguYWJzKGNvdW50KTtcblxuICAgIC8vIE5PVEU6IFdlIGRvbid0IHN3aXRjaCB1bml0cyBhcyBzb29uIGFzIHdlIHBvc3NpYmxlIGNhbiwgYmVjYXVzZS4uLlxuICAgIC8vICAzLjU5NCB2cyAzLjU4NCBpcyBoYXJkZXIgdG8gcXVpY2tseSBkaXN0aW5ndWlzaCBjb21wYXJlZCB0byAzNTk0IGFuZCAzNTg0LFxuICAgIC8vICB0aGUgZGVjaW1hbCBzaW1wbHkgbWFrZXMgaXQgaGFyZGVyIHRvIHJlYWQsIGFuZCBsYXJnZXIuXG4gICAgLy8gTk9URTogVGhpcyBudW1iZXIgc2hvdWxkIHByZXZlbnQgdXMgZnJvbSBldmVyIHVzaW5nIDUgZGlnaXRzLCBzbyB0aGF0IHdlIG5ldmVyIG5lZWQgY29tbWFzXG4gICAgLy8gIEZvciBleGFtcGxlLCBpZiB0aGUgZmFjdG9yIGlzIDEwIHRoZW4sIDk5OTkuNSBpcyBrZXB0IHdpdGggYSBkaXZpc29yIG9mIDEsIGFuZCB0aGVuIHJvdW5kcyB1cCB0b1xuICAgIC8vICBcIjEwLDAwMFwiLiBTbyB3ZSB3YW50IGFueSB2YWx1ZSB3aGljaCByb3VuZHMgdXAgYXQgNSBkaWdpdHMgdG8gYmUgcHV0IGluIHRoZSBuZXh0IGdyb3VwIChhbmQgaGF2aW5nXG4gICAgLy8gIGV4dHJhIHZhbHVlcyBwdXQgaW4gdGhlIG5leHQgZ3JvdXAgaXMgZmluZSwgYXMgd2Ugd29uJ3Qgc2hvdyB0aGUgZGVjaW1hbCB2YWx1ZSBhbnl3YXlzLCBzbyBpdCBvbmx5XG4gICAgLy8gIG1lYW5zIDk5OTkgd3JhcHMgYXJvdW5kIHRvIDEwSyBhIGJpdCBmYXN0ZXIpLlxuICAgIGNvbnN0IGV4dHJhRmFjdG9yID0gOS45OTk0OTk5OTtcbiAgICBsZXQgZGl2aXNvciA9IDE7XG4gICAgbGV0IHN1ZmZpeCA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPSBmYWxzZTtcbiAgICBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMjQgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBpZiAoc3BlY2lhbEN1cnJlbmN5KSB7XG4gICAgICAgICAgICBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMjQgKiAxMDI0ICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJLXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDI0O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMjQgKiAxMDI0ICogMTAyNCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiTVwiO1xuICAgICAgICBkaXZpc29yID0gMTAyNCAqIDEwMjQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3VmZml4ID0gXCJHXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDI0ICogMTAyNCAqIDEwMjQ7XG4gICAgfVxuICAgIGNvdW50IC89IGRpdmlzb3I7XG4gICAgbWF4QWJzb2x1dGVWYWx1ZSAvPSBkaXZpc29yO1xuXG4gICAgbGV0IG1heERlY2ltYWxzID0gbm9EZWNpbWFsID8gMCA6IDM7XG5cbiAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMoY291bnQsIG1heERlY2ltYWxzLCBtYXhBYnNvbHV0ZVZhbHVlLCBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID8gMiA6IHVuZGVmaW5lZCkgKyBzdWZmaXg7XG59XG5cbi8qKiBZWVlZL01NL0REIEhIOk1NOlNTIFBNL0FNICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgbGV0IHN0clRpbWUgPSBwKGhvdXJzKSArIFwiOlwiICsgcChtaW51dGVzKSArIFwiOlwiICsgcChzZWNvbmRzKSArIFwiIFwiICsgYW1wbTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBwKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBwKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgc3RyVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lRGV0YWlsZWQodGltZTogbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBsZXQgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBsZXQgbWlsbGlzZWNvbmRzU3RyaW5nID0gbWlsbGlzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIwXCIpO1xuXG4gICAgbGV0IHRpbWVTdHJpbmcgPSB0aW1lLnRvU3RyaW5nKCk7XG4gICAgbGV0IGRlY2ltYWxJbmRleCA9IHRpbWVTdHJpbmcuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGRlY2ltYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGV0IGZyYWN0aW9uYWxQYXJ0ID0gdGltZVN0cmluZy5zdWJzdHJpbmcoZGVjaW1hbEluZGV4ICsgMSk7XG4gICAgICAgIG1pbGxpc2Vjb25kc1N0cmluZyArPSBmcmFjdGlvbmFsUGFydDtcbiAgICB9XG5cbiAgICBsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgbGV0IHN0clRpbWUgPSBwKGhvdXJzKSArIFwiOlwiICsgcChtaW51dGVzKSArIFwiOlwiICsgcChzZWNvbmRzKSArIFwiLlwiICsgbWlsbGlzZWNvbmRzU3RyaW5nICsgXCIgXCIgKyBhbXBtO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIHAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHAoZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBzdHJUaW1lO1xufVxuXG5cbi8vIExvb2t1cCB0YWJsZSBmb3IgY29tbW9uIHRpbWV6b25lIGFiYnJldmlhdGlvbnMgYnkgVVRDIG9mZnNldCAoaW4gbWludXRlcylcbmNvbnN0IHRpbWV6b25lQWJicmV2aWF0aW9uczogeyBbb2Zmc2V0TWludXRlczogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgLy8gVVRDIGFuZCBHTVRcbiAgICBcIjBcIjogXCJVVENcIixcblxuICAgIC8vIFVTL0NhbmFkYSB0aW1lem9uZXNcbiAgICBcIjMwMFwiOiBcIkVTVFwiLCAgICAgLy8gVVRDLTUgKEVhc3Rlcm4gU3RhbmRhcmQgVGltZSlcbiAgICBcIjI0MFwiOiBcIkVEVFwiLCAgICAgLy8gVVRDLTQgKEVhc3Rlcm4gRGF5bGlnaHQgVGltZSlcbiAgICBcIjM2MFwiOiBcIkNTVFwiLCAgICAgLy8gVVRDLTYgKENlbnRyYWwgU3RhbmRhcmQgVGltZSkgXG4gICAgXCI0MjBcIjogXCJNU1RcIiwgICAgIC8vIFVUQy03IChNb3VudGFpbiBTdGFuZGFyZCBUaW1lKVxuICAgIFwiNDgwXCI6IFwiUFNUXCIsICAgICAvLyBVVEMtOCAoUGFjaWZpYyBTdGFuZGFyZCBUaW1lKVxuXG4gICAgLy8gRXVyb3BlYW4gdGltZXpvbmVzXG4gICAgXCItNjBcIjogXCJDRVRcIiwgICAgIC8vIFVUQysxIChDZW50cmFsIEV1cm9wZWFuIFRpbWUpXG4gICAgXCItMTIwXCI6IFwiQ0VTVFwiLCAgIC8vIFVUQysyIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKVxuXG4gICAgLy8gT3RoZXIgY29tbW9uIHRpbWV6b25lc1xuICAgIFwiLTQ4MFwiOiBcIkNTVFwiLCAgICAvLyBVVEMrOCAoQ2hpbmEgU3RhbmRhcmQgVGltZSlcbiAgICBcIi01NDBcIjogXCJKU1RcIiwgICAgLy8gVVRDKzkgKEphcGFuIFN0YW5kYXJkIFRpbWUpXG4gICAgXCItMzMwXCI6IFwiSVNUXCIsICAgIC8vIFVUQys1OjMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxuICAgIFwiLTU3MFwiOiBcIkFDU1RcIiwgICAvLyBVVEMrOTozMCAoQXVzdHJhbGlhbiBDZW50cmFsIFN0YW5kYXJkIFRpbWUpXG4gICAgXCItNjAwXCI6IFwiQUVTVFwiLCAgIC8vIFVUQysxMCAoQXVzdHJhbGlhbiBFYXN0ZXJuIFN0YW5kYXJkIFRpbWUpXG59O1xuXG5cbi8vIFlZWVktTU0tRERfSEgtTU0tU1MubW1tIFRJTUVaT05FXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RmlsZVRpbWVzdGFtcExvY2FsKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBwKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIGxldCBkYXkgPSBwKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBsZXQgaG91cnMgPSBwKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgbGV0IG1pbnV0ZXMgPSBwKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICBsZXQgc2Vjb25kcyA9IHAoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgIGxldCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGxldCBtaWxsaXNlY29uZHNTdHJpbmcgPSBtaWxsaXNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgzLCBcIjBcIik7XG5cbiAgICBsZXQgdGltZVN0cmluZyA9IHRpbWUudG9TdHJpbmcoKTtcbiAgICBsZXQgZGVjaW1hbEluZGV4ID0gdGltZVN0cmluZy5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoZGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBsZXQgZnJhY3Rpb25hbFBhcnQgPSB0aW1lU3RyaW5nLnN1YnN0cmluZyhkZWNpbWFsSW5kZXggKyAxKTtcbiAgICAgICAgbWlsbGlzZWNvbmRzU3RyaW5nICs9IGZyYWN0aW9uYWxQYXJ0O1xuICAgIH1cbiAgICAvLyBHZXQgdGltZXpvbmUgb2Zmc2V0IGluIG1pbnV0ZXMgKG5lZ2F0aXZlIG9mIGdldFRpbWV6b25lT2Zmc2V0IGJlY2F1c2UgaXQgcmV0dXJucyBvcHBvc2l0ZSBzaWduKVxuICAgIGxldCB0aW1lem9uZU9mZnNldE1pbnV0ZXMgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICAvLyBMb29rIHVwIHRoZSBhYmJyZXZpYXRpb24gb3IgZmFsbGJhY2sgdG8gbnVtZXJpYyBmb3JtYXRcbiAgICBsZXQgdGltZXpvbmVTdHJpbmcgPSB0aW1lem9uZUFiYnJldmlhdGlvbnNbdGltZXpvbmVPZmZzZXRNaW51dGVzLnRvU3RyaW5nKCldO1xuICAgIGlmICghdGltZXpvbmVTdHJpbmcpIHtcbiAgICAgICAgLy8gRmFsbGJhY2s6IGZvcm1hdCBhcyDCsUhITU1cbiAgICAgICAgbGV0IG9mZnNldFNpZ24gPSB0aW1lem9uZU9mZnNldE1pbnV0ZXMgPj0gMCA/IFwiK1wiIDogXCItXCI7XG4gICAgICAgIGxldCBvZmZzZXRIb3VycyA9IHAoTWF0aC5mbG9vcihNYXRoLmFicyh0aW1lem9uZU9mZnNldE1pbnV0ZXMpIC8gNjApKTtcbiAgICAgICAgbGV0IG9mZnNldE1pbnMgPSBwKE1hdGguYWJzKHRpbWV6b25lT2Zmc2V0TWludXRlcykgJSA2MCk7XG4gICAgICAgIHRpbWV6b25lU3RyaW5nID0gYCR7b2Zmc2V0U2lnbn0ke29mZnNldEhvdXJzfSR7b2Zmc2V0TWluc31gO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1fJHtob3Vyc30tJHttaW51dGVzfS0ke3NlY29uZHN9LiR7bWlsbGlzZWNvbmRzU3RyaW5nfV8ke3RpbWV6b25lU3RyaW5nfWA7XG59XG5cbi8qKiAyMDI0IEphbnVhcnkgMSwgTW9uZGF5LCAxMjo1MzowMnBtICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TmljZURhdGVUaW1lKHRpbWU6IG51bWJlcikge1xuICAgIGZ1bmN0aW9uIHAoczogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGxldCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgbGV0IGFtcG0gPSBob3VycyA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgIGxldCBzdHJUaW1lID0gcChob3VycykgKyBcIjpcIiArIHAobWludXRlcykgKyBcIjpcIiArIHAoc2Vjb25kcykgKyBhbXBtO1xuICAgIGxldCBkYXlzID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiIFwiICsgZGF0ZS50b0xvY2FsZVN0cmluZyhcImRlZmF1bHRcIiwgeyBtb250aDogXCJsb25nXCIgfSkgKyBcIiBcIiArIGRhdGUuZ2V0RGF0ZSgpICsgXCIsIFwiICsgZGF5c1tkYXRlLmdldERheSgpXSArIFwiLCBcIiArIHN0clRpbWU7XG59XG5cbi8qKiAyMDI0IEphbnVhcnkgMSwgTW9uZGF5LCAxMjo1MzowMnBtICg0IG1vbnRocyBhZ28pICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFZlcnlOaWNlRGF0ZVRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRpbWUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke2Zvcm1hdE5pY2VEYXRlVGltZSh0aW1lKX0gKCR7Zm9ybWF0VGltZShEYXRlLm5vdygpIC0gdGltZSl9KWA7XG59XG5cbi8qKiBZWVlZL01NL0REICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZSh0aW1lOiBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBwKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBwKGRhdGUuZ2V0RGF0ZSgpKTtcbn1cblxuLyoqIDw9IDYgY2hhcmFjdGVycyAoPD0gNSBpZiBwb3NpdGl2ZSkgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIFwiMCVcIjtcbiAgICAvLyAxIGRlY2ltYWwgcG9pbnQsIHNvIHdlIGhhdmUgNSBjaGFyYWN0ZXJzIChqdXN0IGxpa2UgZm9ybWF0TnVtYmVyIHJldHVybnMgNSBjaGFyYWN0ZXJzKVxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMCkgLyAxMCArIFwiJVwiO1xufSIsIlxuZXhwb3J0IHR5cGUgU291cmNlTWFwID0ge1xuICAgIHZlcnNpb246IG51bWJlcjtcbiAgICBmaWxlOiBzdHJpbmc7XG4gICAgc291cmNlUm9vdDogXCJcIixcbiAgICBzb3VyY2VzOiBzdHJpbmdbXTtcbiAgICBzb3VyY2VzQ29udGVudDogc3RyaW5nW107XG4gICAgbmFtZXM6IG5ldmVyW107XG4gICAgbWFwcGluZ3M6IHN0cmluZztcbn07XG5leHBvcnQgdHlwZSBTb3VyY2VNYXBwaW5nID0ge1xuICAgIGdlbmVyYXRlZExpbmU6IG51bWJlcjtcbiAgICBnZW5lcmF0ZWRDb2x1bW46IG51bWJlcjtcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xuICAgIG9yaWdpbmFsTGluZTogbnVtYmVyO1xuICAgIG9yaWdpbmFsQ29sdW1uOiBudW1iZXI7XG59O1xuZXhwb3J0IHR5cGUgSW5Qcm9ncmVzc1NvdXJjZU1hcCA9IHtcbiAgICBzb3VyY2VzOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgY29udGVudHM6IHN0cmluZztcbiAgICB9W107XG4gICAgbWFwcGluZ3M6IFNvdXJjZU1hcHBpbmdbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTb3VyY2VNYXAoY29udGVudDogc3RyaW5nKToge1xuICAgIHNvdXJjZU1hcDogU291cmNlTWFwIHwgdW5kZWZpbmVkO1xuICAgIGNvZGU6IHN0cmluZztcbn0ge1xuICAgIC8vIFJlbW92ZSBhbnkgdXJsIG1hcHBpbmdzIChzbyBOT1QgZGF0YSBvbmVzKVxuICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcLyMgc291cmNlTWFwcGluZ1VSTD0oPyFkYXRhOilbXlxcc10rJC9tLCBcIi8vIHJlbW92ZWQgdXJsIHNvdXJjZW1hcFwiKTtcblxuICAgIGNvbnN0IHNvdXJjZU1hcFJlZ2V4ID0gL1xcL1xcLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtiYXNlNjQsKFteXFxzXSspJC9tO1xuICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaChzb3VyY2VNYXBSZWdleCk7XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7IHNvdXJjZU1hcDogdW5kZWZpbmVkLCBjb2RlOiBjb250ZW50IH07XG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZU1hcEpzb24gPSBCdWZmZXIuZnJvbShtYXRjaFsxXSwgXCJiYXNlNjRcIikudG9TdHJpbmcoKTtcbiAgICAvLyBIQUNLOiBJZiB0aGUgc291cmNlbWFwIGlzIGludmFsaWQsIHRyeSB0byByZW1vdmUgdHJhaWxpbmcgY2hhcmFjdGVycy4gRm9yIHNvbWUgcmVhc29uIHdlIHNvbWV0aW1lcyBoYXZlXG4gICAgLy8gIGV4dHJhIGNoYXJhY3RlcnMgYXQgdGhlIGVuZD8gQWxzbyB0cnkgdG8gYWRkIHNvbWUgY2hhcmFjdGVycyB0b28/XG4gICAgZnVuY3Rpb24gaXNKU09OKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgaWYgKGlzSlNPTihzb3VyY2VNYXBKc29uKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc291cmNlTWFwSnNvbiA9IHNvdXJjZU1hcEpzb24uc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICBpZiAoIWlzSlNPTihzb3VyY2VNYXBKc29uKSkge1xuICAgICAgICBpZiAoaXNKU09OKHNvdXJjZU1hcEpzb24gKyBcIl19XCIpKSB7XG4gICAgICAgICAgICBzb3VyY2VNYXBKc29uID0gc291cmNlTWFwSnNvbiArIFwiXX1cIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZU1hcCA9IEpTT04ucGFyc2Uoc291cmNlTWFwSnNvbikgYXMgU291cmNlTWFwO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlbWFwIGxpbmUgYnV0IGtlZXAgdGhlIGNvZGVcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShzb3VyY2VNYXBSZWdleCwgXCIvLyBtZXJnZWQgaW5saW5lIHNvdXJjZW1hcFwiKTtcblxuICAgICAgICByZXR1cm4geyBzb3VyY2VNYXAsIGNvZGU6IGNvbnRlbnQgfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgc291cmNlIG1hcDogJHtzb3VyY2VNYXBKc29ufWApO1xuICAgICAgICByZXR1cm4geyBzb3VyY2VNYXA6IHVuZGVmaW5lZCwgY29kZTogY29udGVudCB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlY29kZU1hcHBpbmdzKG1hcHBpbmdzOiBzdHJpbmcpOiBTb3VyY2VNYXBwaW5nW10ge1xuICAgIGNvbnN0IHZscVRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG4gICAgY29uc3QgdmxxRGVjb2RlID0gbmV3IE1hcChBcnJheS5mcm9tKHZscVRhYmxlKS5tYXAoKGMsIGkpID0+IFtjLCBpXSkpO1xuXG4gICAgZnVuY3Rpb24gZGVjb2RlVkxRKHN0cjogc3RyaW5nLCBwb3M6IHsgdmFsdWU6IG51bWJlciB9KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgICAgIGxldCBzaGlmdCA9IDA7XG4gICAgICAgIGxldCBjb250aW51YXRpb246IGJvb2xlYW47XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3QgYyA9IHN0cltwb3MudmFsdWUrK107XG4gICAgICAgICAgICBjb25zdCBkaWdpdCA9IHZscURlY29kZS5nZXQoYyk7XG4gICAgICAgICAgICBpZiAoZGlnaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBWTFEgY2hhcmFjdGVyOiAke0pTT04uc3RyaW5naWZ5KGMpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWF0aW9uID0gKGRpZ2l0ICYgMzIpID4gMDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGlnaXQgJiAzMTtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZSA8PCBzaGlmdDtcbiAgICAgICAgICAgIHNoaWZ0ICs9IDU7XG4gICAgICAgIH0gd2hpbGUgKGNvbnRpbnVhdGlvbik7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkTmVnYXRlID0gcmVzdWx0ICYgMTtcbiAgICAgICAgcmVzdWx0ID4+Pj0gMTtcbiAgICAgICAgcmV0dXJuIHNob3VsZE5lZ2F0ZSA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBTb3VyY2VNYXBwaW5nW10gPSBbXTtcbiAgICBsZXQgZ2VuZXJhdGVkTGluZSA9IDE7XG4gICAgbGV0IGdlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgbGV0IHNvdXJjZUluZGV4ID0gMDtcbiAgICBsZXQgb3JpZ2luYWxMaW5lID0gMTtcbiAgICBsZXQgb3JpZ2luYWxDb2x1bW4gPSAwO1xuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBtYXBwaW5ncy5zcGxpdChcIjtcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gc2VnbWVudHNbaV07XG4gICAgICAgIGlmICghbGluZSkge1xuICAgICAgICAgICAgZ2VuZXJhdGVkTGluZSsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBnZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBsaW5lLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgICAgICAgICAgaWYgKCFmaWVsZCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHsgdmFsdWU6IDAgfTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnREYXRhID0gW107XG5cbiAgICAgICAgICAgIHdoaWxlIChwb3MudmFsdWUgPCBmaWVsZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50RGF0YS5wdXNoKGRlY29kZVZMUShmaWVsZCwgcG9zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWdtZW50RGF0YS5sZW5ndGggPCA0KSBjb250aW51ZTtcblxuICAgICAgICAgICAgZ2VuZXJhdGVkQ29sdW1uICs9IHNlZ21lbnREYXRhWzBdO1xuICAgICAgICAgICAgc291cmNlSW5kZXggKz0gc2VnbWVudERhdGFbMV07XG4gICAgICAgICAgICBvcmlnaW5hbExpbmUgKz0gc2VnbWVudERhdGFbMl07XG4gICAgICAgICAgICBvcmlnaW5hbENvbHVtbiArPSBzZWdtZW50RGF0YVszXTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlZExpbmUsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVkQ29sdW1uLFxuICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4LFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsTGluZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbHVtbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdlbmVyYXRlZExpbmUrKztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEluUHJvZ3Jlc3NTb3VyY2VNYXAoc291cmNlTWFwOiBTb3VyY2VNYXApOiBJblByb2dyZXNzU291cmNlTWFwIHtcbiAgICBjb25zdCBzb3VyY2VzID0gc291cmNlTWFwLnNvdXJjZXMubWFwKChuYW1lLCBpKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBjb250ZW50czogc291cmNlTWFwLnNvdXJjZXNDb250ZW50W2ldIHx8IFwiXCIsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgbWFwcGluZ3MgPSBkZWNvZGVNYXBwaW5ncyhzb3VyY2VNYXAubWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlcyxcbiAgICAgICAgbWFwcGluZ3MsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvSW5Qcm9ncmVzc1NvdXJjZU1hcChpblByb2dyZXNzOiBJblByb2dyZXNzU291cmNlTWFwLCBuZXdNYXBwaW5nczogSW5Qcm9ncmVzc1NvdXJjZU1hcCkge1xuICAgIGNvbnN0IHNvdXJjZUluZGV4T2Zmc2V0ID0gaW5Qcm9ncmVzcy5zb3VyY2VzLmxlbmd0aDtcblxuICAgIC8vIEFkZCBuZXcgc291cmNlc1xuICAgIGluUHJvZ3Jlc3Muc291cmNlcy5wdXNoKC4uLm5ld01hcHBpbmdzLnNvdXJjZXMpO1xuXG4gICAgLy8gQWRkIG1hcHBpbmdzIHdpdGggYWRqdXN0ZWQgc291cmNlIGluZGljZXNcbiAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2YgbmV3TWFwcGluZ3MubWFwcGluZ3MpIHtcbiAgICAgICAgaW5Qcm9ncmVzcy5tYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIC4uLm1hcHBpbmcsXG4gICAgICAgICAgICBzb3VyY2VJbmRleDogbWFwcGluZy5zb3VyY2VJbmRleCArIHNvdXJjZUluZGV4T2Zmc2V0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5hbGl6ZUluUHJvZ3Jlc3NTb3VyY2VNYXAoaW5Qcm9ncmVzczogSW5Qcm9ncmVzc1NvdXJjZU1hcCk6IFNvdXJjZU1hcCB7XG4gICAgY29uc3QgdmxxVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuICAgIGZ1bmN0aW9uIGVuY29kZVZMUSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgLy8gQ29udmVydCB0byB6aWd6YWcgZW5jb2RpbmdcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA8IDAgPyAoLXZhbHVlIDw8IDEpIHwgMSA6IHZhbHVlIDw8IDE7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCBkaWdpdCA9IHZhbHVlICYgMzE7XG4gICAgICAgICAgICB2YWx1ZSA+Pj49IDU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGlnaXQgfD0gMzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gdmxxVGFibGVbZGlnaXRdO1xuICAgICAgICB9IHdoaWxlICh2YWx1ZSA+IDApO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gU29ydCBtYXBwaW5ncyBieSBnZW5lcmF0ZWQgcG9zaXRpb25cbiAgICBjb25zdCBzb3J0ZWRNYXBwaW5ncyA9IFsuLi5pblByb2dyZXNzLm1hcHBpbmdzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmdlbmVyYXRlZExpbmUgIT09IGIuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIGEuZ2VuZXJhdGVkTGluZSAtIGIuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5nZW5lcmF0ZWRDb2x1bW4gLSBiLmdlbmVyYXRlZENvbHVtbjtcbiAgICB9KTtcblxuICAgIC8vIEdlbmVyYXRlIHRoZSBtYXBwaW5ncyBzdHJpbmdcbiAgICBsZXQgcHJldkdlbkxpbmUgPSAxO1xuICAgIGxldCBwcmV2R2VuQ29sdW1uID0gMDtcbiAgICBsZXQgcHJldlNvdXJjZUluZGV4ID0gMDtcbiAgICBsZXQgcHJldk9yaWdMaW5lID0gMTtcbiAgICBsZXQgcHJldk9yaWdDb2x1bW4gPSAwO1xuXG4gICAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGN1cnJlbnRMaW5lOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHNvcnRlZE1hcHBpbmdzKSB7XG4gICAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPiBwcmV2R2VuTGluZSkge1xuICAgICAgICAgICAgbGluZXMucHVzaChjdXJyZW50TGluZS5qb2luKFwiLFwiKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcHJldkdlbkxpbmUgKyAxOyBpIDwgbWFwcGluZy5nZW5lcmF0ZWRMaW5lOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudExpbmUgPSBbXTtcbiAgICAgICAgICAgIHByZXZHZW5Db2x1bW4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IFtcbiAgICAgICAgICAgIGVuY29kZVZMUShtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtIHByZXZHZW5Db2x1bW4pLFxuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcuc291cmNlSW5kZXggLSBwcmV2U291cmNlSW5kZXgpLFxuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gcHJldk9yaWdMaW5lKSxcbiAgICAgICAgICAgIGVuY29kZVZMUShtYXBwaW5nLm9yaWdpbmFsQ29sdW1uIC0gcHJldk9yaWdDb2x1bW4pLFxuICAgICAgICBdO1xuXG4gICAgICAgIGN1cnJlbnRMaW5lLnB1c2goc2VnbWVudC5qb2luKFwiXCIpKTtcblxuICAgICAgICBwcmV2R2VuTGluZSA9IG1hcHBpbmcuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgcHJldkdlbkNvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuICAgICAgICBwcmV2U291cmNlSW5kZXggPSBtYXBwaW5nLnNvdXJjZUluZGV4O1xuICAgICAgICBwcmV2T3JpZ0xpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZTtcbiAgICAgICAgcHJldk9yaWdDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50TGluZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goY3VycmVudExpbmUuam9pbihcIixcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IDMsXG4gICAgICAgIGZpbGU6IFwiXCIsXG4gICAgICAgIHNvdXJjZVJvb3Q6IFwiXCIsXG4gICAgICAgIHNvdXJjZXM6IGluUHJvZ3Jlc3Muc291cmNlcy5tYXAocyA9PiBzLm5hbWUpLFxuICAgICAgICBzb3VyY2VzQ29udGVudDogaW5Qcm9ncmVzcy5zb3VyY2VzLm1hcChzID0+IHMuY29udGVudHMpLFxuICAgICAgICBuYW1lczogW10sXG4gICAgICAgIG1hcHBpbmdzOiBsaW5lcy5qb2luKFwiO1wiKSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVNvdXJjZU1hcExpbmVDb21tZW50KHNvdXJjZU1hcDogU291cmNlTWFwKTogc3RyaW5nIHtcbiAgICBjb25zdCBzb3VyY2VNYXBKc29uID0gSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKTtcbiAgICBjb25zdCBiYXNlNjQgPSBCdWZmZXIuZnJvbShzb3VyY2VNYXBKc29uKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICAvLyBOT1RFOiBEb24ndCB3cml0ZSBpdCBhcyBvbmUgc3RyaW5nLCBhcyB0aGVuIHdlIGFyZSBkZXRlY3RlZCBhcyBhIHNvdXJjZW1hcCwgYW5kIGJyZWFrIHNvdXJjZW1hcHMuLi5cbiAgICByZXR1cm4gXCIvL1wiICsgYCMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCR7YmFzZTY0fWA7XG59IiwiLy8gQnVuZGxlZCB3ZWItd29ya2VyIGVudHJ5LiBCdWlsdCBpbnRvIDxkZXBsb3k+L2FpV29ya2VyRW50cnkuanMgYnkgc2NyaXB0cy9idWlsZC50cyBhbmQgbG9hZGVkXG4vLyBmcm9tIHRoZXJlIGJ5IGFpV29ya2VyUG9vbC50cyAoYnJvd3NlciBwYXRoKS4gRGlzcGF0Y2hlcyB0byBhIHJlZ2lzdGVyZWQgc3RyYXRlZ3kgYnkgaWQuXG5pbXBvcnQgeyBnZXRTdHJhdGVneSB9IGZyb20gXCIuL3N0cmF0ZWdpZXMvaW5kZXhcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyUmVxdWVzdCB9IGZyb20gXCIuL2FpVHlwZXNcIjtcblxuaW50ZXJmYWNlIFdvcmtlclNlbGYge1xuICAgIG9ubWVzc2FnZTogKChlOiBNZXNzYWdlRXZlbnQ8QUlXb3JrZXJSZXF1ZXN0PikgPT4gdm9pZCkgfCBudWxsO1xuICAgIHBvc3RNZXNzYWdlKGRhdGE6IHVua25vd24pOiB2b2lkO1xufVxuXG4vLyBHYXRlIG9uIGBzZWxmYCBleGlzdGluZyDigJQgdGhlIGJ1bmRsZXIgcnVucyB1cyB0aHJvdWdoIG5vZGUgZmlyc3QgdG8gcmVjb3JkIHJlcXVpcmUuY2FjaGUsIGFuZFxuLy8gbm9kZSBkb2Vzbid0IGhhdmUgYHNlbGZgLiBJbnNpZGUgYSByZWFsIHdlYiB3b3JrZXIgYHNlbGZgIGlzIGRlZmluZWQgYW5kIHdlIHdpcmUgdXAuXG5pZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCB3b3JrZXJTY29wZSA9IHNlbGYgYXMgdW5rbm93biBhcyBXb3JrZXJTZWxmO1xuICAgIHdvcmtlclNjb3BlLm9ubWVzc2FnZSA9IGFzeW5jIChlOiBNZXNzYWdlRXZlbnQ8QUlXb3JrZXJSZXF1ZXN0PikgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBlLmRhdGE7XG4gICAgICAgIGlmICghcmVxIHx8ICFyZXEuc25hcHNob3QpIHtcbiAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcImVycm9yXCIsIG1lc3NhZ2U6IFwibm8gcmVxdWVzdC9zbmFwc2hvdFwiIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdHJhdGVneSA9IGdldFN0cmF0ZWd5KHJlcS5zdHJhdGVneUlkKTtcbiAgICAgICAgICAgIGNvbnN0IG9uUHJvZ3Jlc3MgPSAob3JkZXJzOiBBSVdvcmtlck9yZGVyW10pID0+IHtcbiAgICAgICAgICAgICAgICB3b3JrZXJTY29wZS5wb3N0TWVzc2FnZSh7IHN0YXR1czogXCJwcm9ncmVzc1wiLCBvcmRlcnMgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgc3RyYXRlZ3kocmVxLnNuYXBzaG90LCB7XG4gICAgICAgICAgICAgICAgY29uZmlnOiByZXEuY29uZmlnLFxuICAgICAgICAgICAgICAgIGRlYWRsaW5lTXM6IERhdGUubm93KCkgKyByZXEudGltZW91dE1zLFxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcImRvbmVcIiwgb3JkZXJzIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycik7XG4gICAgICAgICAgICB3b3JrZXJTY29wZS5wb3N0TWVzc2FnZSh7IHN0YXR1czogXCJlcnJvclwiLCBtZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsIi8vIEltcG9ydGluZyB0aGlzIG1vZHVsZSByZWdpc3RlcnMgZXZlcnkgYnVpbHQtaW4gc3RyYXRlZ3kgYXMgYSBzaWRlIGVmZmVjdC4gQm90aCB0aGUgd29ya2VyIGVudHJ5XG4vLyBhbmQgdGhlIG5vZGUgc2ltIGltcG9ydCBpdCBzbyBnZXRTdHJhdGVneSgpIGNhbiByZXNvbHZlIGFueSBpZC5cbmltcG9ydCBcIi4vYmVlbGluZVwiO1xuaW1wb3J0IFwiLi9ncmVlZHlDaXR5XCI7XG5pbXBvcnQgXCIuL2NvbnNvbGlkYXRlXCI7XG5pbXBvcnQgXCIuL2ZvY3VzRmlyZVwiO1xuaW1wb3J0IFwiLi9mb2N1c1dlYWtlc3RGYWN0aW9uXCI7XG5pbXBvcnQgXCIuL21vbnRlQ2FybG9cIjtcbmltcG9ydCBcIi4vdGhyZWF0QXdhcmVcIjtcbmltcG9ydCBcIi4vaW5mbHVlbmNlTWFwXCI7XG5pbXBvcnQgXCIuL3RlcnJpdG9yeVwiO1xuaW1wb3J0IFwiLi9zbm93YmFsbFwiO1xuXG5leHBvcnQgeyBnZXRTdHJhdGVneSwgZ2V0U3RyYXRlZ3lJZHMsIHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuIiwiaW1wb3J0IHsgcGxhbkJlZWxpbmVPcmRlcnMgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIHYxIGJhc2VsaW5lOiBldmVyeSBnZW5lcmFsIGJlZWxpbmVzIHRvd2FyZCB0aGUgbmVhcmVzdCBlbmVteSBjaXR5LCBncm93aW5nIHdoZW4gZm9vZCBhbGxvd3MuXG4vLyBUaGlzIGlzIGFsc28gdGhlIGRlZmF1bHQgYWdlbnQgZm9yIG5vcm1hbCBicm93c2VyIHBsYXksIHNvIGdyb3d0aCBpcyBvbiBieSBkZWZhdWx0IHRoZXJlLlxucmVnaXN0ZXJTdHJhdGVneShcImJlZWxpbmVcIiwgKHNuYXBzaG90LCBjdHgpID0+IHdpdGhHcm93dGgoc25hcHNob3QsIGN0eC5jb25maWcsIHBsYW5CZWVsaW5lT3JkZXJzKHNuYXBzaG90KSkpO1xuIiwiLy8gUHVyZSBBSSBwbGFubmluZyDigJQgbm8gRE9NLCBubyB3b3JrZXIgZ2xvYmFscywgbm8gc2NoZW1hIGltcG9ydHMuIFNoYXJlZCBieSB0aGUgd2ViLXdvcmtlciBlbnRyeVxuLy8gKGFpV29ya2VyRW50cnkudHMpIGFuZCB0aGUgaW4tcHJvY2VzcyBub2RlIHBhdGggKGFpV29ya2VyUG9vbC50cyBpbiBub2RlKS4gS2VlcGluZyBpdCBkZXBlbmRlbmN5LVxuLy8gZnJlZSBrZWVwcyB0aGUgd29ya2VyIGJ1bmRsZSB0aW55IGFuZCBsZXRzIHRoZSBub2RlIHNpbXVsYXRpb24gY2FsbCBpdCBkaXJlY3RseS5cbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3QgfSBmcm9tIFwiLi9haVR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9mZnNldFRvQ3ViZShwOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KSB7XG4gICAgY29uc3QgY29sID0gcC54O1xuICAgIGNvbnN0IHJvdyA9IGNvbCAlIDIgPT09IDAgPyBwLnkgOiBwLnkgLSAwLjU7XG4gICAgY29uc3QgY3ViZV94ID0gY29sO1xuICAgIGNvbnN0IGN1YmVfeiA9IHJvdyAtIChjb2wgLSAoY29sICYgMSkpIC8gMjtcbiAgICBjb25zdCBjdWJlX3kgPSAtY3ViZV94IC0gY3ViZV96O1xuICAgIHJldHVybiB7IHg6IGN1YmVfeCwgeTogY3ViZV95LCB6OiBjdWJlX3ogfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoZXhEaXN0YW5jZShhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KTogbnVtYmVyIHtcbiAgICBjb25zdCBjYSA9IG9mZnNldFRvQ3ViZShhKTtcbiAgICBjb25zdCBjYiA9IG9mZnNldFRvQ3ViZShiKTtcbiAgICByZXR1cm4gKE1hdGguYWJzKGNhLnggLSBjYi54KSArIE1hdGguYWJzKGNhLnkgLSBjYi55KSArIE1hdGguYWJzKGNhLnogLSBjYi56KSkgLyAyO1xufVxuXG4vLyB2MSBzdHJhdGVneTogZWFjaCBvZiBvdXIgZ2VuZXJhbHMgYmVlbGluZXMgdG93YXJkIHRoZSBuZWFyZXN0IGVuZW15IGNpdHkuXG5leHBvcnQgZnVuY3Rpb24gcGxhbkJlZWxpbmVPcmRlcnMoc25hcHNob3Q6IEFJV29ya2VyU25hcHNob3QpOiBBSVdvcmtlck9yZGVyW10ge1xuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW5lcmFsIG9mIG91ckdlbmVyYWxzKSB7XG4gICAgICAgIGxldCB0YXJnZXQ6IHR5cGVvZiBlbmVteUNpdGllc1tudW1iZXJdIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGVuZW15Q2l0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZ2VuZXJhbCwgY2l0eSk7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XG4gICAgICAgICAgICAgICAgYmVzdERpc3QgPSBkO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuZXJhbC5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcnM7XG59XG4iLCJpbXBvcnQgeyBBSVdvcmtlck9yZGVyLCBBSVdvcmtlclNuYXBzaG90IH0gZnJvbSBcIi4vYWlUeXBlc1wiO1xuXG4vLyBTaGFyZWQgZ3Jvd3RoIGRlY2lzaW9uLCB3cmFwcGVkIGFyb3VuZCBhIHN0cmF0ZWd5J3MgbW92ZSBvcmRlcnMgc28gZXZlcnkgb25lIG9mIG91ciBnZW5lcmFsc1xuLy8gZ2V0cyBhIGdyb3d0aE1vZGUgc2V0IChhbmQgZ2VuZXJhbHMgd2l0aG91dCBhIG1vdmUgc3RpbGwgZ2V0IGEgZ3Jvdy9ob2xkIG9yZGVyKS5cbi8vXG4vLyBjb25maWcuZ3JvdyBjb250cm9scyBpdDpcbi8vICAgXCJuZXZlclwiICAgICAgICAgICAg4oCUIG5ldmVyIGdyb3cuXG4vLyAgIFwiYWx3YXlzXCIgICAgICAgICAgIOKAlCBhbHdheXMgZ3JvdyAocmlza3Mgc3RhcnZhdGlvbiBpZiBmb29kIG5ldCA8IDApLlxuLy8gICBcIndoZW5Gb29kUG9zaXRpdmVcIiDigJQgZ3JvdyBvbmx5IHdoZW4gdGhlIGZhY3Rpb24ncyBmb29kIG5ldCBpcyA+PSAwIChkZWZhdWx0KS4gVGhpcyBpcyB0aGUgc2FmZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsLXB1cnBvc2UgcG9saWN5OiBidWlsZCB1cCB3aGlsZSB0aGUgZWNvbm9teSBzdXN0YWlucyBpdC5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoR3Jvd3RoKFxuICAgIHNuYXBzaG90OiBBSVdvcmtlclNuYXBzaG90LFxuICAgIGNvbmZpZzogeyBncm93PzogdW5rbm93bjsgfSxcbiAgICBtb3ZlT3JkZXJzOiBBSVdvcmtlck9yZGVyW10sXG4pOiBBSVdvcmtlck9yZGVyW10ge1xuICAgIGNvbnN0IGdyb3cgPSB0eXBlb2YgY29uZmlnLmdyb3cgPT09IFwic3RyaW5nXCIgPyBjb25maWcuZ3JvdyA6IFwid2hlbkZvb2RQb3NpdGl2ZVwiO1xuICAgIGNvbnN0IHNob3VsZEdyb3cgPSBncm93ID09PSBcImFsd2F5c1wiXG4gICAgICAgIHx8IChncm93ICE9PSBcIm5ldmVyXCIgJiYgc25hcHNob3QuZm9vZC5uZXQgPj0gMCk7XG5cbiAgICBjb25zdCBieUdlbmVyYWwgPSBuZXcgTWFwPHN0cmluZywgQUlXb3JrZXJPcmRlcj4oKTtcbiAgICBmb3IgKGNvbnN0IG8gb2YgbW92ZU9yZGVycykge1xuICAgICAgICBieUdlbmVyYWwuc2V0KG8uZ2VuZXJhbElkLCB7IC4uLm8sIGdyb3d0aE1vZGU6IHNob3VsZEdyb3cgfSk7XG4gICAgfVxuICAgIC8vIEVuc3VyZSBldmVyeSBvbmUgb2Ygb3VyIGdlbmVyYWxzIGhhcyBhbiBvcmRlciBjYXJyeWluZyB0aGUgZ3Jvd3RoIGRlY2lzaW9uLCBldmVuIGlmIHRoZVxuICAgIC8vIHN0cmF0ZWd5IGdhdmUgaXQgbm8gbW92ZSB0aGlzIHR1cm4uXG4gICAgZm9yIChjb25zdCBnIG9mIHNuYXBzaG90LmdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnLmZhY3Rpb25JZCAhPT0gc25hcHNob3QuZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFieUdlbmVyYWwuaGFzKGcuaWQpKSB7XG4gICAgICAgICAgICBieUdlbmVyYWwuc2V0KGcuaWQsIHsgZ2VuZXJhbElkOiBnLmlkLCBncm93dGhNb2RlOiBzaG91bGRHcm93IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGJ5R2VuZXJhbC52YWx1ZXMoKSk7XG59XG4iLCJpbXBvcnQgeyBBSVN0cmF0ZWd5IH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcblxuLy8gU3RyYXRlZ3kgcmVnaXN0cnkuIEV2ZXJ5IEFJIGlzIGEgbmFtZWQsIGhhbmQtd3JpdHRlbiBzdHJhdGVneS4gV2hlbiBhIHN0cmF0ZWd5IGlzIHJldmlzZWQsIGdpdmVcbi8vIGl0IGEgTkVXIGlkIHNvIHByaW9yIHZlcnNpb25zIGtlZXAgd29ya2luZyBhbmQgcmVtYWluIGNvbXBhcmFibGUgaW4gdG91cm5hbWVudHMuXG5jb25zdCBzdHJhdGVnaWVzID0gbmV3IE1hcDxzdHJpbmcsIEFJU3RyYXRlZ3k+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0cmF0ZWd5KGlkOiBzdHJpbmcsIHN0cmF0ZWd5OiBBSVN0cmF0ZWd5KSB7XG4gICAgaWYgKHN0cmF0ZWdpZXMuaGFzKGlkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBBSSBzdHJhdGVneSBpZDogJHtpZH1gKTtcbiAgICB9XG4gICAgc3RyYXRlZ2llcy5zZXQoaWQsIHN0cmF0ZWd5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmF0ZWd5KGlkOiBzdHJpbmcpOiBBSVN0cmF0ZWd5IHtcbiAgICBjb25zdCBzID0gc3RyYXRlZ2llcy5nZXQoaWQpO1xuICAgIGlmICghcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gQUkgc3RyYXRlZ3kgaWQ6ICR7aWR9LiBSZWdpc3RlcmVkOiAke0pTT04uc3RyaW5naWZ5KGdldFN0cmF0ZWd5SWRzKCkpfWApO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmF0ZWd5SWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShzdHJhdGVnaWVzLmtleXMoKSk7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBDb25maWd1cmFibGUgZ3JlZWR5IHRhcmdldC1waWNrZXIuIEVhY2ggZ2VuZXJhbCBpbmRlcGVuZGVudGx5IHNjb3JlcyBjYW5kaWRhdGUgdGFyZ2V0cyBhbmQgbW92ZXNcbi8vIHRvd2FyZCB0aGUgYmVzdCBvbmUuIFNjb3JlID0gZGlzdFdlaWdodCpkaXN0YW5jZSArIGdhcnJpc29uV2VpZ2h0KmdhcnJpc29uIOKIkiBjYXBpdGFsQm9udXMoaWYgY2FwaXRhbCkuXG4vLyBMb3dlciBzY29yZSB3aW5zLCBzbyBoaWdoIGRpc3RXZWlnaHQgPSBwcmVmZXIgY2xvc2VyLCBoaWdoIGdhcnJpc29uV2VpZ2h0ID0gcHJlZmVyIHNvZnRlciB0YXJnZXRzLFxuLy8gY2FwaXRhbEJvbnVzIHB1bGxzIHRvd2FyZCBlbmVteSBjYXBpdGFscy4gV2l0aCB0YXJnZXRHZW5lcmFscywgZW5lbXkgZ2VuZXJhbHMgKHRyZWF0ZWQgYXNcbi8vIGdhcnJpc29uID0gdGhlaXIgdW5pdCBjb3VudCkgYXJlIGFsc28gY2FuZGlkYXRlcy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJncmVlZHlDaXR5XCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMCk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91ckdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91ckdlbmVyYWxzKSB7XG4gICAgICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGdlbiwgdClcbiAgICAgICAgICAgICAgICArIGdhcnJpc29uV2VpZ2h0ICogdC5nYXJyaXNvblxuICAgICAgICAgICAgICAgIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG4gICAgICAgICAgICBpZiAoc2NvcmUgPCBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICAgICAgICBiZXN0ID0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogYmVzdC54LCB5OiBiZXN0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIEZvcmNlLWNvbmNlbnRyYXRpb24gc3RyYXRlZ3kuIEEgZ2VuZXJhbCB3ZWFrZXIgdGhhbiBtZXJnZUZyYWN0aW9uIMOXIHRoZSBmYWN0aW9uJ3Mgc3Ryb25nZXN0XG4vLyBnZW5lcmFsIG1vdmVzIHRvd2FyZCB0aGF0IHN0cm9uZ2VzdCBhbGx5IHRvIHN0YWNrIHVwIChzYW1lLXRpbGUgc2FtZS1mYWN0aW9uIHVuaXRzIGZpZ2h0IHRvZ2V0aGVyLFxuLy8gc28gY29uY2VudHJhdGlvbiB3aW5zIGZpZ2h0cykuIEV2ZXJ5b25lIGVsc2UgYXR0YWNrcyB0aGUgYmVzdCBlbmVteSB0YXJnZXQsIHNjb3JlZCBsaWtlXG4vLyBncmVlZHlDaXR5IChkaXN0V2VpZ2h0wrdkaXN0YW5jZSArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvbiDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLCBvcHRpb25hbGx5XG4vLyBhbHNvIGh1bnRpbmcgZW5lbXkgZ2VuZXJhbHMuXG5yZWdpc3RlclN0cmF0ZWd5KFwiY29uc29saWRhdGVcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcbiAgICBjb25zdCB0YXJnZXRHZW5lcmFscyA9IGNmZy50YXJnZXRHZW5lcmFscyA9PT0gdHJ1ZTtcbiAgICBjb25zdCBtZXJnZUZyYWN0aW9uID0gbnVtKGNmZy5tZXJnZUZyYWN0aW9uLCAwLjgpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGxldCBzdHJvbmdlc3QgPSBvdXJzWzBdO1xuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSBpZiAoZy50b3RhbFVuaXRzID4gc3Ryb25nZXN0LnRvdGFsVW5pdHMpIHN0cm9uZ2VzdCA9IGc7XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91cnMpIHtcbiAgICAgICAgLy8gV2VhayBnZW5lcmFsIHdpdGggYSBzdHJvbmdlciBhbGx5IHRvIG1lcmdlIGludG8g4oaSIGdvIHN0YWNrIHVwLlxuICAgICAgICBpZiAoZ2VuLmlkICE9PSBzdHJvbmdlc3QuaWQgJiYgZ2VuLnRvdGFsVW5pdHMgPCBtZXJnZUZyYWN0aW9uICogc3Ryb25nZXN0LnRvdGFsVW5pdHMpIHtcbiAgICAgICAgICAgIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiB7IHg6IHN0cm9uZ2VzdC54LCB5OiBzdHJvbmdlc3QueSB9IH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGJlc3Q6IFRhcmdldCB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZ2VuLCB0KVxuICAgICAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAgICAgLSAodC5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcbiAgICAgICAgICAgIGlmIChzY29yZSA8IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHQ7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogYmVzdC54LCB5OiBiZXN0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIENvb3JkaW5hdGVkIGZvY3VzLWZpcmU6IHRoZSB3aG9sZSBmYWN0aW9uIHBpY2tzIE9ORSBnbG9iYWwgdGFyZ2V0IGFuZCBldmVyeSBnZW5lcmFsIGNvbnZlcmdlcyBvblxuLy8gaXQsIG5hdHVyYWxseSBzdGFja2luZyBpbnRvIGEgc2luZ2xlIGhhbW1lci4gVGhlIHRhcmdldCBpcyBzY29yZWQgZnJvbSB0aGUgZmFjdGlvbidzIGNlbnRyb2lkXG4vLyAoZGlzdFdlaWdodMK3ZGlzdCArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvbiDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLiBXaGVuIHRoZSB0YXJnZXQgaXMgY2FwdHVyZWRcbi8vIHRoZSBuZXh0IGNhbGwgcmUtcGlja3MsIHNvIHRoZSBkb29tc3RhY2sgcm9sbHMgZnJvbSBvYmplY3RpdmUgdG8gb2JqZWN0aXZlLlxucmVnaXN0ZXJTdHJhdGVneShcImZvY3VzRmlyZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNSk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGN4ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLngsIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY3kgPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueSwgMCkgLyBvdXJzLmxlbmd0aDtcbiAgICBjb25zdCBjZW50cm9pZCA9IHsgeDogY3gsIHk6IGN5IH07XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICBsZXQgYmVzdDogVGFyZ2V0IHwgdW5kZWZpbmVkO1xuICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICBjb25zdCBzY29yZSA9IGRpc3RXZWlnaHQgKiBoZXhEaXN0YW5jZShjZW50cm9pZCwgdClcbiAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAtICh0LmlzQ2FwaXRhbCA/IGNhcGl0YWxCb251cyA6IDApO1xuICAgICAgICBpZiAoc2NvcmUgPCBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2NvcmU7IGJlc3QgPSB0OyB9XG4gICAgfVxuICAgIGlmICghYmVzdCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gYmVzdDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBTbm93YmFsbCBmb2N1czogY29uY2VudHJhdGUgdGhlIHdob2xlIGZhY3Rpb24gb24gdGhlIFdFQUtFU1Qgc3Vydml2aW5nIGVuZW15IGZhY3Rpb24sIHRvXG4vLyBlbGltaW5hdGUgb3Bwb25lbnRzIG9uZSBhdCBhIHRpbWUgKGZld2VyIGVuZW1pZXMgPSBjb21wb3VuZGluZyBhZHZhbnRhZ2UpLiBBbW9uZyB0aGF0IGZhY3Rpb24nc1xuLy8gY2l0aWVzIHdlIHBpY2sgdGhlIG9uZSBiZXN0IHNjb3JlZCBmcm9tIG91ciBjZW50cm9pZCAoZGlzdFdlaWdodMK3ZGlzdCArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvblxuLy8g4oiSIGNhcGl0YWxCb251c8K3aXNDYXBpdGFsKS4gSWYgdGhlIHdlYWtlc3QgZmFjdGlvbiBoYXMgbm8gY2l0aWVzIGxlZnQgd2UgZmFsbCBiYWNrIHRvIGl0cyBuZWFyZXN0XG4vLyBnZW5lcmFsLCB0aGVuIHRvIGFueSBlbmVteSBjaXR5LlxucmVnaXN0ZXJTdHJhdGVneShcImZvY3VzV2Vha2VzdEZhY3Rpb25cIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgaWYgKG91cnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBjeCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy54LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGN5ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnksIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY2VudHJvaWQgPSB7IHg6IGN4LCB5OiBjeSB9O1xuXG4gICAgLy8gVG90YWwgc3RyZW5ndGggcGVyIGVuZW15IGZhY3Rpb24gPSBpdHMgZ2VuZXJhbHMnIHN0YWNrZWQgdW5pdHMgKyBpdHMgY2l0aWVzJyBnYXJyaXNvbnMuXG4gICAgY29uc3Qgc3RyZW5ndGhCeUZhY3Rpb24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHN0cmVuZ3RoQnlGYWN0aW9uLnNldChnLmZhY3Rpb25JZCwgKHN0cmVuZ3RoQnlGYWN0aW9uLmdldChnLmZhY3Rpb25JZCkgPz8gMCkgKyBnLnRvdGFsVW5pdHMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGMgb2YgY2l0aWVzKSB7XG4gICAgICAgIGlmIChjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgc3RyZW5ndGhCeUZhY3Rpb24uc2V0KGMuZmFjdGlvbklkLCAoc3RyZW5ndGhCeUZhY3Rpb24uZ2V0KGMuZmFjdGlvbklkKSA/PyAwKSArIGMuZ2Fycmlzb24pO1xuICAgIH1cbiAgICBpZiAoc3RyZW5ndGhCeUZhY3Rpb24uc2l6ZSA9PT0gMCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgbGV0IHdlYWtlc3Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBsZXQgd2Vha2VzdFN0cmVuZ3RoID0gSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBbZmlkLCBzXSBvZiBzdHJlbmd0aEJ5RmFjdGlvbikge1xuICAgICAgICBpZiAocyA8IHdlYWtlc3RTdHJlbmd0aCkgeyB3ZWFrZXN0U3RyZW5ndGggPSBzOyB3ZWFrZXN0ID0gZmlkOyB9XG4gICAgfVxuXG4gICAgdHlwZSBUYXJnZXQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBnYXJyaXNvbjogbnVtYmVyOyBpc0NhcGl0YWw6IGJvb2xlYW47IH07XG4gICAgY29uc3Qgc2NvcmUgPSAodDogVGFyZ2V0KSA9PiBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoY2VudHJvaWQsIHQpXG4gICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG5cbiAgICBjb25zdCBwaWNrID0gKGNhbmRzOiBUYXJnZXRbXSk6IFRhcmdldCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7IGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIGNhbmRzKSB7IGNvbnN0IHMgPSBzY29yZSh0KTsgaWYgKHMgPCBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gczsgYmVzdCA9IHQ7IH0gfVxuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICB9O1xuXG4gICAgbGV0IHRhcmdldCA9IHBpY2soY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkID09PSB3ZWFrZXN0KVxuICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpKTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICB0YXJnZXQgPSBwaWNrKGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSB3ZWFrZXN0KVxuICAgICAgICAgICAgLm1hcChnID0+ICh7IHg6IGcueCwgeTogZy55LCBnYXJyaXNvbjogZy50b3RhbFVuaXRzLCBpc0NhcGl0YWw6IGZhbHNlIH0pKSk7XG4gICAgfVxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldCA9IHBpY2soY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpXG4gICAgICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpKTtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIFtdKTtcblxuICAgIGNvbnN0IHQgPSB0YXJnZXQ7XG4gICAgY29uc3Qgb3JkZXJzID0gb3Vycy5tYXAoZyA9PiAoeyBnZW5lcmFsSWQ6IGcuaWQsIHRhcmdldFBvc2l0aW9uOiB7IHg6IHQueCwgeTogdC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBNb250ZS1DYXJsbyBvcGVuaW5nIHBpY2tlci4gRm9yIGVhY2ggY2FuZGlkYXRlIGZpcnN0LXRhcmdldCwgcnVuIGd1aWRlZCByb2xsb3V0cyBvbiBhIGxpZ2h0d2VpZ2h0XG4vLyBpbnRlcm5hbCBtb2RlbCAob3VyIHdob2xlIGFybXkgYXMgb25lIHN0YWNrIHNub3diYWxsaW5nIHRocm91Z2ggZW5lbXkgY2l0aWVzIHVuZGVyIGEgZ3JlZWR5XG4vLyBkZXRlcm1pbmlzdGljIHBvbGljeSwgd2l0aCByYW5kb21pemVkIHRpZS1icmVha2luZyA9IHRoZSBNQyBzYW1wbGluZykuIFNjb3JlIGVhY2ggY2FuZGlkYXRlIGJ5IGhvd1xuLy8gbXVjaCBpdCBsZXRzIHVzIHNub3diYWxsOyBzZW5kIHRoZSB3aG9sZSBmYWN0aW9uIGF0IHRoZSBiZXN0IG9wZW5pbmcuIEFwcHJveGltYXRlIGJ5IGRlc2lnbiDigJQgdGhlXG4vLyBzdHJhdGVneSBvbmx5IGhhcyB0aGUgc25hcHNob3QsIG5vdCB0aGUgcmVhbCBlbmdpbmUg4oCUIGJ1dCBpdCBkZW1vbnN0cmF0ZXMgZGV0ZXJtaW5pc3RpYy1wb2xpY3ktXG4vLyBndWlkZWQgTUMgYW5kIGlzIGEgdG91cm5hbWVudCBleHBlcmltZW50LlxuLy9cbi8vIGNvbmZpZzogZGlzdFdlaWdodCwgZ2Fycmlzb25XZWlnaHQsIGNhcGl0YWxCb251cywgcm9sbG91dHMgKHBlciBjYW5kaWRhdGUpLCByb2xsb3V0VHVybnMsXG4vLyB0b3BLICh0aWUtYnJlYWsgYnJlYWR0aCBmb3IgdGhlIHJvbGxvdXQgcG9saWN5KSwgY29tYmF0RmFjdG9yLCBsb3NzRnJhYy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJtb250ZUNhcmxvXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMC41KTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgMCk7XG4gICAgY29uc3Qgcm9sbG91dHMgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKG51bShjZmcucm9sbG91dHMsIDYwKSkpO1xuICAgIGNvbnN0IHJvbGxvdXRUdXJucyA9IG51bShjZmcucm9sbG91dFR1cm5zLCA2MCk7XG4gICAgY29uc3QgdG9wSyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IobnVtKGNmZy50b3BLLCAzKSkpO1xuICAgIGNvbnN0IGNvbWJhdEZhY3RvciA9IG51bShjZmcuY29tYmF0RmFjdG9yLCAxLjApO1xuICAgIGNvbnN0IGxvc3NGcmFjID0gbnVtKGNmZy5sb3NzRnJhYywgMC41KTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgaWYgKG91cnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgY29uc3Qgb3VyU3RyZW5ndGggPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcudG90YWxVbml0cywgMCk7XG5cbiAgICBjb25zdCBjeCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy54LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGN5ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnksIDApIC8gb3Vycy5sZW5ndGg7XG5cbiAgICB0eXBlIENpdHkgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBnYXJyaXNvbjogbnVtYmVyOyBpc0NhcGl0YWw6IGJvb2xlYW47IH07XG4gICAgY29uc3QgZW5lbXlDaXRpZXM6IENpdHlbXSA9IGNpdGllc1xuICAgICAgICAuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgLm1hcChjID0+ICh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pKTtcbiAgICBpZiAoZW5lbXlDaXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBbXSk7XG5cbiAgICBjb25zdCBjaXR5U2NvcmUgPSAoZnJvbTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSwgYzogQ2l0eSkgPT5cbiAgICAgICAgZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGZyb20sIGMpICsgZ2Fycmlzb25XZWlnaHQgKiBjLmdhcnJpc29uIC0gKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG5cbiAgICAvLyBPbmUgcm9sbG91dCBmcm9tIGEgZm9yY2VkIGZpcnN0IHRhcmdldDogc25vd2JhbGwgZ3JlZWRpbHkgKHJhbmRvbWl6ZWQgYW1vbmcgdGhlIHRvcC1LIGJlc3QgYnlcbiAgICAvLyBzY29yZSkgdW50aWwgdGltZSBydW5zIG91dCBvciB3ZSBjYW4ndCBiZWF0IHRoZSBuZXh0IGdhcnJpc29uLiBSZXR1cm5zIGNhcHR1cmVkIFwidmFsdWVcIi5cbiAgICBjb25zdCByb2xsb3V0ID0gKGZpcnN0OiBDaXR5KTogbnVtYmVyID0+IHtcbiAgICAgICAgbGV0IHN0cmVuZ3RoID0gb3VyU3RyZW5ndGg7XG4gICAgICAgIGxldCBwb3MgPSB7IHg6IGN4LCB5OiBjeSB9O1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBlbmVteUNpdGllcy5zbGljZSgpO1xuICAgICAgICBsZXQgdCA9IDA7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgIGxldCBmb3JjZWQ6IENpdHkgfCB1bmRlZmluZWQgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKHJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0OiBDaXR5IHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGZvcmNlZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGZvcmNlZDtcbiAgICAgICAgICAgICAgICBmb3JjZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtlZCA9IHJlbWFpbmluZy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGNpdHlTY29yZShwb3MsIGEpIC0gY2l0eVNjb3JlKHBvcywgYikpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHJhbmtlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLm1pbih0b3BLLCByYW5rZWQubGVuZ3RoKSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIGJyZWFrO1xuICAgICAgICAgICAgdCArPSBoZXhEaXN0YW5jZShwb3MsIHRhcmdldCk7IC8vIH4xIHRpbGUvdHVyblxuICAgICAgICAgICAgaWYgKHQgPiByb2xsb3V0VHVybnMpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHN0cmVuZ3RoIDw9IHRhcmdldC5nYXJyaXNvbiAqIGNvbWJhdEZhY3RvcikgYnJlYWs7IC8vIGNhbid0IHRha2UgaXRcbiAgICAgICAgICAgIHN0cmVuZ3RoIC09IHRhcmdldC5nYXJyaXNvbiAqIGxvc3NGcmFjO1xuICAgICAgICAgICAgdmFsdWUgKz0gMSArICh0YXJnZXQuaXNDYXBpdGFsID8gMSA6IDApO1xuICAgICAgICAgICAgcG9zID0geyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSByZW1haW5pbmcuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGkgPj0gMCkgcmVtYWluaW5nLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCBiZXN0OiBDaXR5IHwgdW5kZWZpbmVkO1xuICAgIGxldCBiZXN0QXZnID0gLUluZmluaXR5O1xuICAgIGZvciAoY29uc3QgY2FuZCBvZiBlbmVteUNpdGllcykge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb2xsb3V0czsgcisrKSBzdW0gKz0gcm9sbG91dChjYW5kKTtcbiAgICAgICAgY29uc3QgYXZnID0gc3VtIC8gcm9sbG91dHM7XG4gICAgICAgIGlmIChhdmcgPiBiZXN0QXZnKSB7IGJlc3RBdmcgPSBhdmc7IGJlc3QgPSBjYW5kOyB9XG4gICAgfVxuICAgIGlmICghYmVzdCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gYmVzdDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3RHZW5lcmFsIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gRW5naW5lIGNvbWJhdCByZWFjaCBmb3IgYSBzdGFjayBvZiBgY291bnRgIHVuaXRzIChtaXJyb3JzIGdldENvbWJhdERpc3RhbmNlIGluIHRoZSBlbmdpbmUpLlxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIFRocmVhdC1hd2FyZSB2YWx1ZSBBSS4gRWFjaCBnZW5lcmFsIGNob29zZXMgYW1vbmcgQVRUQUNLIC8gREVGRU5EIC8gUkVUUkVBVCBpbnN0ZWFkIG9mIGJsaW5kbHlcbi8vIHJ1bm5pbmcgYXQgdGhlIG5lYXJlc3QgY2l0eTpcbi8vICAgLSBBVFRBQ0sgYW4gZW5lbXkgY2l0eSBvbmx5IGlmIG91ciBzdGFjayBjYW4gYWN0dWFsbHkgYmVhdCBpdHMgZ2Fycmlzb24gKGNvbWJhdC1nYXRlZCksIHNjb3JlZFxuLy8gICAgIGJ5IHZhbHVlIChsb3cgZ2Fycmlzb24sIGNhcGl0YWxzLCBjbG9zZW5lc3MpLlxuLy8gICAtIERFRkVORCBhbiBvd25lZCBjaXR5IHRoYXQgYW4gZW5lbXkgc3RhY2sgY2FuIHJlYWNoIHNvb24sIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byBtYXR0ZXIuXG4vLyAgIC0gUkVUUkVBVCB0b3dhcmQgdGhlIG5lYXJlc3QgZnJpZW5kbHkgY2l0eS9nZW5lcmFsIHdoZW4gYSBzdHJvbmdlciBlbmVteSBzdGFjayBjYW4gY2F0Y2ggdXMgYW5kXG4vLyAgICAgd2UgaGF2ZSBubyB3aW5uaW5nIGF0dGFjayDigJQgaW5zdGVhZCBvZiBmZWVkaW5nIGl0LlxuLy8gY29uZmlnOiBzYWZldHkgKHdpbiBtYXJnaW4pLCBkaXN0V2VpZ2h0LCBnYXJyaXNvbldlaWdodCwgY2FwaXRhbEJvbnVzLCBkZWZlbmRXZWlnaHQsIGVuZW15TW92ZS5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJ0aHJlYXRBd2FyZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBzYWZldHkgPSBudW0oY2ZnLnNhZmV0eSwgMS4xNSk7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjQpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCA1KTtcbiAgICBjb25zdCBkZWZlbmRXZWlnaHQgPSBudW0oY2ZnLmRlZmVuZFdlaWdodCwgOCk7XG4gICAgY29uc3QgZW5lbXlNb3ZlID0gbnVtKGNmZy5lbmVteU1vdmUsIDEuNSk7IC8vIGFzc3VtZWQgZW5lbXkgdGlsZXMvdHVybiBmb3IgdGhyZWF0IGxvb2thaGVhZFxuICAgIGNvbnN0IGh1bnRXZWlnaHQgPSBudW0oY2ZnLmh1bnRXZWlnaHQsIDApOyAvLyA+MDogYWxzbyBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZWFrZXIgdGhhbiB1cywgdG8gZWxpbWluYXRlIHRoZW1cblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG91ckNpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IG5lYXJlc3RGcmllbmRseVJlZnVnZSA9IChnOiBBSVdvcmtlclNuYXBzaG90R2VuZXJhbCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3REID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBvdXJDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnLCBjKTtcbiAgICAgICAgICAgIGlmIChkID4gMCAmJiBkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG91cnMpIHtcbiAgICAgICAgICAgIGlmIChvLmlkID09PSBnLmlkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChvLnRvdGFsVW5pdHMgPD0gZy50b3RhbFVuaXRzKSBjb250aW51ZTsgLy8gb25seSBmbGVlIHRvd2FyZCBzb21lb25lIHN0cm9uZ2VyXG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZywgbyk7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IHsgeDogby54LCB5OiBvLnkgfTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91cnMpIHtcbiAgICAgICAgY29uc3QgUyA9IGdlbi50b3RhbFVuaXRzO1xuXG4gICAgICAgIC8vIElzIGEgc3Ryb25nZXIgZW5lbXkgYWJsZSB0byByZWFjaCB1cyBuZXh0IHR1cm4/XG4gICAgICAgIGxldCB1bmRlclRocmVhdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogc2FmZXR5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWNoID0gY29tYmF0RGlzdChlLnRvdGFsVW5pdHMpICsgZW5lbXlNb3ZlO1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIGdlbikgPD0gcmVhY2gpIHsgdW5kZXJUaHJlYXQgPSB0cnVlOyBicmVhazsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmVzdCBBVFRBQ0sgd2UgY2FuIGFjdHVhbGx5IHdpbi5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBlbmVteUNpdGllcykge1xuICAgICAgICAgICAgaWYgKFMgPD0gYy5nYXJyaXNvbiAqIHNhZmV0eSkgY29udGludWU7IC8vIGNhbid0IHRha2UgaXQg4oCUIGRvbid0IGZlZWQgaXRcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnZW4sIGMpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSAoYy5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKSAtIGRpc3RXZWlnaHQgKiBkIC0gZ2Fycmlzb25XZWlnaHQgKiBjLmdhcnJpc29uO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIVU5UOiBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZSBjYW4gYmVhdCwgdG8gYWN0dWFsbHkgZWxpbWluYXRlIHRoZW0gKGNsb3NlIG91dCB0aGUgZ2FtZSkuXG4gICAgICAgIGlmIChodW50V2VpZ2h0ID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoUyA8PSBlLnRvdGFsVW5pdHMgKiBzYWZldHkpIGNvbnRpbnVlOyAvLyBvbmx5IGh1bnQgcHJleSB3ZSBiZWF0XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGdlbiwgZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBodW50V2VpZ2h0IC0gZGlzdFdlaWdodCAqIGQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBlLngsIHk6IGUueSB9OyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBERUZFTkQ6IGFuIG93bmVkIGNpdHkgYW4gZW5lbXkgc3RhY2sgY2FuIHJlYWNoIHNvb24g4oCUIHB1bGwgYSBuZWFyYnkgZ2VuZXJhbCBiYWNrLlxuICAgICAgICBmb3IgKGNvbnN0IG9jIG9mIG91ckNpdGllcykge1xuICAgICAgICAgICAgbGV0IHRocmVhdGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIG9jKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyBlbmVteU1vdmUpIHsgdGhyZWF0ZW5lZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRocmVhdGVuZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGdlbiwgb2MpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkZWZlbmRXZWlnaHQgLSBkaXN0V2VpZ2h0ICogZDtcbiAgICAgICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHsgeDogb2MueCwgeTogb2MueSB9OyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSRVRSRUFUIHdoZW4gdGhyZWF0ZW5lZCBhbmQgbm90aGluZyB3b3J0aCBkb2luZy5cbiAgICAgICAgaWYgKHVuZGVyVGhyZWF0ICYmICghYmVzdCB8fCBiZXN0U2NvcmUgPCAwKSkge1xuICAgICAgICAgICAgY29uc3QgcmVmdWdlID0gbmVhcmVzdEZyaWVuZGx5UmVmdWdlKGdlbik7XG4gICAgICAgICAgICBpZiAocmVmdWdlKSBiZXN0ID0gcmVmdWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3QgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBJbmZsdWVuY2UgLyBmbG93LWZpZWxkIEFJLiBJbnN0ZWFkIG9mIGJlZWxpbmluZyBhdCB0aGUgbmVhcmVzdCBjaXR5ICh3aGljaCBpZ25vcmVzIHRlcnJhaW4gYW5kXG4vLyB3YWxrcyBpbnRvIHN0cm9uZ2VyIHN0YWNrcyksIHdlIGJ1aWxkIHR3byBzY2FsYXIgZmllbGRzIG92ZXIgdGhlIHBhc3NhYmxlIG1hcCBhbmQgaGF2ZSBlYWNoXG4vLyBnZW5lcmFsIGZvbGxvdyB0aGUgZ3JhZGllbnQgb25lIHN0ZXAgcGVyIHR1cm46XG4vLyAgIC0gYXR0cmFjdGlvbjogbWF4LXBsdXMgQkZTIHNlZWRlZCBhdCBlbmVteSBjaXRpZXMgKHNvZnQgKyBjYXBpdGFsID0gbW9yZSB2YWx1ZSksIGRlY2F5aW5nIHBlclxuLy8gICAgIHN0ZXAsIHNvIGEgZ2VuZXJhbCBmbG93cyB0b3dhcmQgdGhlIGJlc3QgcmVhY2hhYmxlIHRhcmdldCBBUk9VTkQgbW91bnRhaW5zL3dhdGVyLlxuLy8gICAtIGRhbmdlcjogbWF4LXBsdXMgQkZTIHNlZWRlZCBhdCBlbmVteSBnZW5lcmFsIHN0YWNrcyAodmFsdWUgPSB0aGVpciBzdHJlbmd0aCksIGRlY2F5aW5nIHBlclxuLy8gICAgIHN0ZXAsIHNvIHRpbGVzIG5lYXIgYSBzdHJvbmcgZW5lbXkgYXJlIHBlbmFsaXNlZC5cbi8vIEVhY2ggZ2VuZXJhbCBtb3ZlcyB0byB0aGUgbmVpZ2hib3VyIG1heGltaXNpbmcgYXR0cmFjdGlvbiAtIHJlcGVsV2VpZ2h0Km1heCgwLCBkYW5nZXIgLSBvd25TdGFjayksXG4vLyBpLmUuIGl0IGFkdmFuY2VzIG9uIHZhbHVlIGJ1dCByZWZ1c2VzIHRvIHN0ZXAgaW50byBhIGZvcmNlIHN0cm9uZ2VyIHRoYW4gaXRzZWxmLiBFbWVyZ2VudFxuLy8gYXR0YWNrIC8gZmxhbmsgLyBhdm9pZCBiZWhhdmlvdXIgd2l0aCBubyBwZXItdGFyZ2V0IHNwZWNpYWwtY2FzaW5nLlxuLy8gY29uZmlnOiBhdHRyYWN0RGVjYXksIGRhbmdlckRlY2F5LCByZXBlbFdlaWdodCwgY2FwaXRhbEJvbnVzLCBnYXJyaXNvblBlbmFsdHksIGJhc2VDaXR5VmFsdWUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiaW5mbHVlbmNlTWFwXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGF0dHJhY3REZWNheSA9IG51bShjZmcuYXR0cmFjdERlY2F5LCAxKTtcbiAgICBjb25zdCBkYW5nZXJEZWNheSA9IG51bShjZmcuZGFuZ2VyRGVjYXksIDEuNSk7XG4gICAgY29uc3QgcmVwZWxXZWlnaHQgPSBudW0oY2ZnLnJlcGVsV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgNDApO1xuICAgIGNvbnN0IGdhcnJpc29uUGVuYWx0eSA9IG51bShjZmcuZ2Fycmlzb25QZW5hbHR5LCAwLjMpO1xuICAgIGNvbnN0IGJhc2VDaXR5VmFsdWUgPSBudW0oY2ZnLmJhc2VDaXR5VmFsdWUsIDYwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICAvLyBQYXNzYWJsZSB0aWxlIGdyYXBoLlxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07XG4gICAgICAgIGlmIChzcGVlZCAmJiBzcGVlZCA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpO1xuICAgIH1cbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKGtleShueCwgbnkpKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuXG4gICAgLy8gTWF4LXBsdXMgQkZTOiBlYWNoIHNvdXJjZSBpbmplY3RzIGEgdmFsdWUgdGhhdCBkZWNheXMgYnkgYGRlY2F5YCBwZXIgcGFzc2FibGUgc3RlcDsgZXZlcnkgdGlsZVxuICAgIC8vIGtlZXBzIHRoZSBoaWdoZXN0IHZhbHVlIHJlYWNoaW5nIGl0LiBTaW1wbGUgRGlqa3N0cmEtc3R5bGUgcmVsYXhhdGlvbiB3aXRoIGEgdmFsdWUgcHJpb3JpdHkuXG4gICAgY29uc3QgcHJvcGFnYXRlID0gKHNvdXJjZXM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHZhbHVlOiBudW1iZXI7IH1bXSwgZGVjYXk6IG51bWJlcik6IE1hcDxzdHJpbmcsIG51bWJlcj4gPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIC8vIFByaW9yaXR5IGJ5IHZhbHVlIGRlc2MgdmlhIHJlcGVhdGVkIG1heC1zY2FuIG92ZXIgYW4gYWN0aXZlIGZyb250aWVyLiBUaWxlcyBhcmUgZmV3LCBhbmQgd2VcbiAgICAgICAgLy8gb25seSByZWxheCB3aGVuIHdlIGltcHJvdmUsIHNvIHRoaXMgc3RheXMgY2hlYXAuXG4gICAgICAgIGNvbnN0IGZyb250aWVyOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB2YWx1ZTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXkocy54LCBzLnkpO1xuICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoKGZpZWxkLmdldChrKSA/PyAtSW5maW5pdHkpIDwgcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZpZWxkLnNldChrLCBzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBmcm9udGllci5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChmcm9udGllci5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHBvcCB0aGUgaGlnaGVzdC12YWx1ZSBmcm9udGllciBlbnRyeVxuICAgICAgICAgICAgbGV0IGJpID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnRpZXIubGVuZ3RoOyBpKyspIGlmIChmcm9udGllcltpXS52YWx1ZSA+IGZyb250aWVyW2JpXS52YWx1ZSkgYmkgPSBpO1xuICAgICAgICAgICAgY29uc3QgY3VyID0gZnJvbnRpZXIuc3BsaWNlKGJpLCAxKVswXTtcbiAgICAgICAgICAgIGlmICgoZmllbGQuZ2V0KGtleShjdXIueCwgY3VyLnkpKSA/PyAtSW5maW5pdHkpID4gY3VyLnZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG52ID0gY3VyLnZhbHVlIC0gZGVjYXk7XG4gICAgICAgICAgICBpZiAobnYgPD0gMCkgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG4gb2YgbmVpZ2hib3JzT2YoY3VyLngsIGN1ci55KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5rID0ga2V5KG4ueCwgbi55KTtcbiAgICAgICAgICAgICAgICBpZiAoKGZpZWxkLmdldChuaykgPz8gLUluZmluaXR5KSA+PSBudikgY29udGludWU7XG4gICAgICAgICAgICAgICAgZmllbGQuc2V0KG5rLCBudik7XG4gICAgICAgICAgICAgICAgZnJvbnRpZXIucHVzaCh7IHg6IG4ueCwgeTogbi55LCB2YWx1ZTogbnYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRyYWN0U291cmNlcyA9IGNpdGllc1xuICAgICAgICAuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgLm1hcChjID0+ICh7XG4gICAgICAgICAgICB4OiBjLngsIHk6IGMueSxcbiAgICAgICAgICAgIHZhbHVlOiBiYXNlQ2l0eVZhbHVlICsgKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCkgLSBnYXJyaXNvblBlbmFsdHkgKiBjLmdhcnJpc29uLFxuICAgICAgICB9KSlcbiAgICAgICAgLmZpbHRlcihzID0+IHMudmFsdWUgPiAwKTtcbiAgICBjb25zdCBkYW5nZXJTb3VyY2VzID0gZ2VuZXJhbHNcbiAgICAgICAgLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpXG4gICAgICAgIC5tYXAoZyA9PiAoeyB4OiBnLngsIHk6IGcueSwgdmFsdWU6IGcudG90YWxVbml0cyB9KSk7XG5cbiAgICBjb25zdCBhdHRyYWN0ID0gcHJvcGFnYXRlKGF0dHJhY3RTb3VyY2VzLCBhdHRyYWN0RGVjYXkpO1xuICAgIGNvbnN0IGRhbmdlciA9IHByb3BhZ2F0ZShkYW5nZXJTb3VyY2VzLCBkYW5nZXJEZWNheSk7XG5cbiAgICBjb25zdCBzY29yZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgb3duU3RhY2s6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBhID0gYXR0cmFjdC5nZXQoa2V5KHgsIHkpKSA/PyAwO1xuICAgICAgICBjb25zdCBkID0gZGFuZ2VyLmdldChrZXkoeCwgeSkpID8/IDA7XG4gICAgICAgIHJldHVybiBhIC0gcmVwZWxXZWlnaHQgKiBNYXRoLm1heCgwLCBkIC0gb3duU3RhY2spO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnZW4uZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBoZXJlID0gc2NvcmUoZ2VuLngsIGdlbi55LCBnZW4udG90YWxVbml0cyk7XG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gaGVyZTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmUobi54LCBuLnksIGdlbi50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIEVuZ2luZSBjb21iYXQgcmVhY2ggZm9yIGEgc3RhY2sgb2YgYGNvdW50YCB1bml0cyAobWlycm9ycyBnZXRDb21iYXREaXN0YW5jZSBpbiB0aGUgZW5naW5lKS5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBUZXJyaXRvcnkgLyBjb250YWlubWVudCBBSSDigJQgdGhlIHVzZXIncyBjb3JlIHN0cmF0ZWd5OiBkb24ndCBmaWdodCBiYXR0bGVzIHlvdSdkIGxvc2UsIGluc3RlYWRcbi8vIG1heGltaXplIHRoZSBMQU5EIHlvdSBob2xkICh0aWxlIG93bmVyc2hpcCBkcmlmdHMgdG8gd2hvZXZlciBoYXMgdW5pdHMgbmVhcmJ5KSwgZXZlbiB3aGlsZVxuLy8gb3V0bnVtYmVyZWQsIGJ5IHNwcmVhZGluZyBvdXQgYW5kIFwibmV0dGluZ1wiIHRoZSBlbmVteS4gTW9yZSBsYW5kIC0+IG1vcmUgZm9vZCAtPiBiaWdnZXIgYXJtaWVzIC0+XG4vLyBldmVudHVhbGx5IHlvdSBjYW4gd2luIHRoZSBmaWdodHMgeW91IHdlcmUgYXZvaWRpbmcuXG4vL1xuLy8gRWFjaCBnZW5lcmFsIHNjb3JlcyBpdHMgcGFzc2FibGUgbmVpZ2hib3VycyAoYW5kIHN0YXlpbmcgcHV0KTpcbi8vICAgKyBhZHZhbmNlOiAgcHVzaCB0b3dhcmQgZW5lbXktaGVsZCBzcGFjZSAobmVnYXRpdmUgZGlzdGFuY2UgdG8gbmVhcmVzdCBlbmVteSBnZW5lcmFsL2NpdHkpIHNvIHdlXG4vLyAgICAgICAgICAgICAgIGNvbnRlc3QgdGhlaXIgdGVycml0b3J5IHJhdGhlciB0aGFuIGh1ZGRsaW5nIGF0IGhvbWUuXG4vLyAgICsgc3ByZWFkOiAgIHJld2FyZCBkaXN0YW5jZSBmcm9tIG91ciBPV04gZ2VuZXJhbHMgKGNhcHBlZCkgc28gdGhlIGFybXkgZmFucyBvdXQgaW50byBhIG5ldFxuLy8gICAgICAgICAgICAgICBpbnN0ZWFkIG9mIHN0YWNraW5nIG9uIG9uZSB0aWxlIChvdmVybGFwcGluZyBjb3ZlcmFnZSB3aW5zIG5vIGV4dHJhIGxhbmQpLlxuLy8gICAtIHRocmVhdDogICBoZWF2eSBwZW5hbHR5IGZvciBzdGVwcGluZyB3aXRoaW4gY29tYmF0IHJlYWNoIG9mIGFuIGVuZW15IHN0YWNrIFNUUk9OR0VSIHRoYW4gdXMg4oCUXG4vLyAgICAgICAgICAgICAgIHRoYXQncyB0aGUgZmlnaHQgd2UgcmVmdXNlLlxuLy8gICArIGNhcHR1cmU6ICBiaWcgYm9udXMgZm9yIG1vdmluZyBvbnRvIGEgY2l0eSB3ZSBjYW4gdGFrZSAoZ2Fycmlzb24gPCBvdXIgc3RhY2spIOKAlCBmcmVlIGxhbmQuXG4vLyBjb25maWc6IGFkdmFuY2VXZWlnaHQsIHNwcmVhZFdlaWdodCwgc3ByZWFkQ2FwLCB0aHJlYXRXZWlnaHQsIHRocmVhdE1hcmdpbiwgY2FwdHVyZUJvbnVzLlxucmVnaXN0ZXJTdHJhdGVneShcInRlcnJpdG9yeVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBhZHZhbmNlV2VpZ2h0ID0gbnVtKGNmZy5hZHZhbmNlV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBzcHJlYWRXZWlnaHQgPSBudW0oY2ZnLnNwcmVhZFdlaWdodCwgMik7XG4gICAgY29uc3Qgc3ByZWFkQ2FwID0gbnVtKGNmZy5zcHJlYWRDYXAsIDYpO1xuICAgIGNvbnN0IHRocmVhdFdlaWdodCA9IG51bShjZmcudGhyZWF0V2VpZ2h0LCAxMik7XG4gICAgY29uc3QgdGhyZWF0TWFyZ2luID0gbnVtKGNmZy50aHJlYXRNYXJnaW4sIDEuMSk7XG4gICAgY29uc3QgY2FwdHVyZUJvbnVzID0gbnVtKGNmZy5jYXB0dXJlQm9udXMsIDUwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdO1xuICAgICAgICBpZiAoc3BlZWQgJiYgc3BlZWQgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTtcbiAgICB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrZXkobngsIG55KSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlBbmNob3JzID0gWy4uLmVuZW15R2VuZXJhbHMsIC4uLmVuZW15T3JOZXV0cmFsQ2l0aWVzXTtcblxuICAgIGNvbnN0IG1pbkRpc3RUbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcHRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgYmVzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHRzKSBiZXN0ID0gTWF0aC5taW4oYmVzdCwgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHApKTtcbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGFsbGllcyA9IG91cnMuZmlsdGVyKG8gPT4gby5pZCAhPT0gZ2VuLmlkKTtcbiAgICAgICAgY29uc3QgY2l0eUF0ID0gbmV3IE1hcChlbmVteU9yTmV1dHJhbENpdGllcy5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcblxuICAgICAgICBjb25zdCBzY29yZVRpbGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgIC8vIGFkdmFuY2UgdG93YXJkIGVuZW15IHNwYWNlIChjb250ZXN0IHRoZWlyIGxhbmQpXG4gICAgICAgICAgICBpZiAoZW5lbXlBbmNob3JzLmxlbmd0aCkgc2NvcmUgKz0gYWR2YW5jZVdlaWdodCAqIC1taW5EaXN0VG8oeCwgeSwgZW5lbXlBbmNob3JzKTtcbiAgICAgICAgICAgIC8vIHNwcmVhZCBvdXQgZnJvbSBvdXIgb3duIGdlbmVyYWxzIHRvIGNvdmVyIG1vcmUgYXJlYSAoY2FwcGVkKVxuICAgICAgICAgICAgaWYgKGFsbGllcy5sZW5ndGgpIHNjb3JlICs9IHNwcmVhZFdlaWdodCAqIE1hdGgubWluKHNwcmVhZENhcCwgbWluRGlzdFRvKHgsIHksIGFsbGllcykpO1xuICAgICAgICAgICAgLy8gcmVmdXNlIHRvIHN0ZXAgd2l0aGluIHJlYWNoIG9mIGEgc3Ryb25nZXIgZW5lbXkgc3RhY2tcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFjaCA9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoeyB4LCB5IH0sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChkIDw9IHJlYWNoICsgMSkgc2NvcmUgLT0gdGhyZWF0V2VpZ2h0ICogKHJlYWNoICsgMSAtIGQgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGdyYWIgdW5kZWZlbmRlZCAvIHdlYWsgbGFuZFxuICAgICAgICAgICAgY29uc3QgYyA9IGNpdHlBdC5nZXQoa2V5KHgsIHkpKTtcbiAgICAgICAgICAgIGlmIChjICYmIFMgPiBjLmdhcnJpc29uKSBzY29yZSArPSBjYXB0dXJlQm9udXM7XG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBzY29yZVRpbGUoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmVUaWxlKG4ueCwgbi55KTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBTbm93YmFsbCBBSSDigJQgdGhlIGZ1bGwgdmVyc2lvbiBvZiB0aGUgdXNlcidzIHN0cmF0ZWd5LiBUZXJyaXRvcnkvY29udGFpbm1lbnQgRUFSTFkgKHNwcmVhZCwgdGFrZVxuLy8gbGFuZCwgcmVmdXNlIGxvc2luZyBmaWdodHMsIGdyb3cpLCB0aGVuIENPTlZFUlQgdGhlIGVjb25vbWljIGxlYWQgaW50byBraWxsczpcbi8vICAgLSBodW50OiBhY3RpdmVseSBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZSBjYW4gYmVhdCAod2Vha2VyIHRoYW4gb3VyIHN0YWNrKSB0byBkZXN0cm95IHRoZW0g4oCUIHlvdVxuLy8gICAgIGNhbid0IHdpbiBieSBob2xkaW5nIGxhbmQgZm9yZXZlciwgeW91IGhhdmUgdG8gZWxpbWluYXRlIHRoZSBlbmVteSBvbmNlIHlvdSBvdXQtc2NhbGUgdGhlbS5cbi8vICAgLSBwcmVzczogb25jZSBvdXIgZmFjdGlvbiBvdXQtYXJtaWVzIHRoZSBzdHJvbmdlc3QgZW5lbXksIHJlbGF4IHRocmVhdC1hdm9pZGFuY2UgYW5kIHB1c2gsIHNvXG4vLyAgICAgdGhlIGxlYWQgaXMgY29udmVydGVkIHRvIGEgd2luIGluc3RlYWQgb2Ygc3RhbGxpbmcuXG4vLyAgIC0gdGhyZWF0OiBzdGlsbCByZWZ1c2UgZmlnaHRzIGFnYWluc3Qgc3RhY2tzIHN0cm9uZ2VyIHRoYW4gdXMgKHRoZSB3aG9sZSBwb2ludCBvZiBzbm93YmFsbGluZykuXG4vLyBjb25maWc6IGFkdmFuY2VXZWlnaHQsIHNwcmVhZFdlaWdodCwgc3ByZWFkQ2FwLCB0aHJlYXRXZWlnaHQsIHRocmVhdE1hcmdpbiwgY2FwdHVyZUJvbnVzLFxuLy8gICAgICAgICBodW50V2VpZ2h0LCBraWxsTWFyZ2luLCBwcmVzc01hcmdpbiwgcHJlc3NSZWxheC5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJzbm93YmFsbFwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBhZHZhbmNlV2VpZ2h0ID0gbnVtKGNmZy5hZHZhbmNlV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBzcHJlYWRXZWlnaHQgPSBudW0oY2ZnLnNwcmVhZFdlaWdodCwgMik7XG4gICAgY29uc3Qgc3ByZWFkQ2FwID0gbnVtKGNmZy5zcHJlYWRDYXAsIDYpO1xuICAgIGNvbnN0IHRocmVhdFdlaWdodCA9IG51bShjZmcudGhyZWF0V2VpZ2h0LCAxOCk7XG4gICAgY29uc3QgdGhyZWF0TWFyZ2luID0gbnVtKGNmZy50aHJlYXRNYXJnaW4sIDEuMCk7XG4gICAgY29uc3QgY2FwdHVyZUJvbnVzID0gbnVtKGNmZy5jYXB0dXJlQm9udXMsIDYwKTtcbiAgICBjb25zdCBodW50V2VpZ2h0ID0gbnVtKGNmZy5odW50V2VpZ2h0LCA0KTtcbiAgICBjb25zdCBraWxsTWFyZ2luID0gbnVtKGNmZy5raWxsTWFyZ2luLCAxLjI1KTsgLy8gb25seSBodW50IGdlbmVyYWxzIHdlIGJlYXQgYnkgdGhpcyBmYWN0b3JcbiAgICBjb25zdCBwcmVzc01hcmdpbiA9IG51bShjZmcucHJlc3NNYXJnaW4sIDEuMTUpOyAvLyBcImFoZWFkXCIgb25jZSBvdXIgYXJteSA+PSB0aGlzICogdG9wIGVuZW15IGFybXlcbiAgICBjb25zdCBwcmVzc1JlbGF4ID0gbnVtKGNmZy5wcmVzc1JlbGF4LCAwLjQpOyAvLyB0aHJlYXQgd2VpZ2h0IG11bHRpcGxpZXIgd2hpbGUgcHJlc3NpbmdcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdO1xuICAgICAgICBpZiAoc3BlZWQgJiYgc3BlZWQgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTtcbiAgICB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrZXkobngsIG55KSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlBbmNob3JzID0gWy4uLmVuZW15R2VuZXJhbHMsIC4uLmVuZW15T3JOZXV0cmFsQ2l0aWVzXTtcblxuICAgIC8vIEFyZSB3ZSBhaGVhZCBvdmVyYWxsPyBDb21wYXJlIG91ciB0b3RhbCBhcm15IHRvIHRoZSBzdHJvbmdlc3Qgc2luZ2xlIGVuZW15IGZhY3Rpb24ncyBhcm15LlxuICAgIGNvbnN0IGFybXlCeUZhY3Rpb24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykgYXJteUJ5RmFjdGlvbi5zZXQoZy5mYWN0aW9uSWQsIChhcm15QnlGYWN0aW9uLmdldChnLmZhY3Rpb25JZCkgPz8gMCkgKyBnLnRvdGFsVW5pdHMpO1xuICAgIGNvbnN0IG91ckFybXkgPSBhcm15QnlGYWN0aW9uLmdldChmYWN0aW9uSWQpID8/IDA7XG4gICAgbGV0IHRvcEVuZW15QXJteSA9IDA7XG4gICAgZm9yIChjb25zdCBbZmlkLCBhXSBvZiBhcm15QnlGYWN0aW9uKSBpZiAoZmlkICE9PSBmYWN0aW9uSWQpIHRvcEVuZW15QXJteSA9IE1hdGgubWF4KHRvcEVuZW15QXJteSwgYSk7XG4gICAgY29uc3QgcHJlc3NpbmcgPSBvdXJBcm15ID49IHRvcEVuZW15QXJteSAqIHByZXNzTWFyZ2luO1xuICAgIGNvbnN0IGVmZlRocmVhdFdlaWdodCA9IHByZXNzaW5nID8gdGhyZWF0V2VpZ2h0ICogcHJlc3NSZWxheCA6IHRocmVhdFdlaWdodDtcblxuICAgIGNvbnN0IG1pbkRpc3RUbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcHRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgYmVzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHRzKSBiZXN0ID0gTWF0aC5taW4oYmVzdCwgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHApKTtcbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGFsbGllcyA9IG91cnMuZmlsdGVyKG8gPT4gby5pZCAhPT0gZ2VuLmlkKTtcbiAgICAgICAgY29uc3QgY2l0eUF0ID0gbmV3IE1hcChlbmVteU9yTmV1dHJhbENpdGllcy5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcbiAgICAgICAgY29uc3QgcHJleSA9IGVuZW15R2VuZXJhbHMuZmlsdGVyKGUgPT4gUyA+IGUudG90YWxVbml0cyAqIGtpbGxNYXJnaW4pO1xuXG4gICAgICAgIGNvbnN0IHNjb3JlVGlsZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICAgICAgaWYgKGVuZW15QW5jaG9ycy5sZW5ndGgpIHNjb3JlICs9IGFkdmFuY2VXZWlnaHQgKiAtbWluRGlzdFRvKHgsIHksIGVuZW15QW5jaG9ycyk7XG4gICAgICAgICAgICBpZiAoYWxsaWVzLmxlbmd0aCkgc2NvcmUgKz0gc3ByZWFkV2VpZ2h0ICogTWF0aC5taW4oc3ByZWFkQ2FwLCBtaW5EaXN0VG8oeCwgeSwgYWxsaWVzKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhY2ggPSBjb21iYXREaXN0KGUudG90YWxVbml0cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHsgeCwgeSB9LCBlKTtcbiAgICAgICAgICAgICAgICBpZiAoZCA8PSByZWFjaCArIDEpIHNjb3JlIC09IGVmZlRocmVhdFdlaWdodCAqIChyZWFjaCArIDEgLSBkICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjID0gY2l0eUF0LmdldChrZXkoeCwgeSkpO1xuICAgICAgICAgICAgaWYgKGMgJiYgUyA+IGMuZ2Fycmlzb24pIHNjb3JlICs9IGNhcHR1cmVCb251cztcbiAgICAgICAgICAgIC8vIGh1bnQga2lsbGFibGUgZW5lbXkgZ2VuZXJhbHMgKHN0cm9uZyBwdWxsIHRvd2FyZCB0aGUgbmVhcmVzdCBvbmUpXG4gICAgICAgICAgICBpZiAocHJleS5sZW5ndGgpIHNjb3JlICs9IGh1bnRXZWlnaHQgKiAtbWluRGlzdFRvKHgsIHksIHByZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gc2NvcmVUaWxlKGdlbi54LCBnZW4ueSk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZihnZW4ueCwgZ2VuLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBzYyA9IHNjb3JlVGlsZShuLngsIG4ueSk7XG4gICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3QgPSBuOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSCx1Q0FBeUI7QUFFekIsa0ZBQWtGO0FBQ2xGLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyx1RUFBdUU7QUFDMUQsUUFBQSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBRWhDLElBQUksV0FBVyxHQUFvRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FB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Q0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDO2FBQ3RELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDO2FBQ3RELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0QsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLElBQUEseUJBQVUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWxELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNqQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEYsT0FBTyxJQUFBLHlCQUFVLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsR0FBRyxDQUFDLENBQVUsRUFBRSxRQUFnQjtJQUNyQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN0RSxDQUFDOzs7Ozs7QUN2RUQsNENBQTJDO0FBRTNDLGtEQUE2QztBQUM3Qyx5Q0FBOEM7QUFFOUMsb0dBQW9HO0FBQ3BHLDhGQUE4RjtBQUM5RixxR0FBcUc7QUFDckcsb0dBQW9HO0FBQ3BHLGtHQUFrRztBQUNsRyw0Q0FBNEM7QUFDNUMsRUFBRTtBQUNGLDRGQUE0RjtBQUM1RiwyRUFBMkU7QUFDM0UsSUFBQSwyQkFBZ0IsRUFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFtQixFQUFFO0lBQzlELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFeEMsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9ELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMs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