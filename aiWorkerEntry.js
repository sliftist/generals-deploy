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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileDirFlags.ts", filename: "/root/generals/node_modules/typenode/compileDirFlags.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileDirFlags.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileDirFlags.ts","loaded":true,"sourceSHA256":"265c6f85eeb907386d25b75dc6b11c37b787f788b64d51924d57c5f052b4c91f","size":8100,"version":1,"evalStartTime":1782298135884,"evalEndTime":1782298135885}, moduleFnc: (function compileDirFlags_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", filename: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","loaded":true,"sourceSHA256":"9701d799d870e1117bdda5b6b1ef57e9d2a55fd14630e2d7a8416ad72c2e0fb7","size":3670,"version":1,"evalStartTime":1782298135885.01,"evalEndTime":1782298135885.02}, moduleFnc: (function compileRecordModuleRequires_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","loaded":true,"sourceSHA256":"30c072ee646adbd818d776f22b2185a81c98ee3dfbd308e1b34876cdabb03dff","size":9004,"version":1,"evalStartTime":1782298135886.01,"evalEndTime":1782298135891.03}, moduleFnc: (function bundler_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/js-sha256/src/sha256.js", filename: "/root/generals/node_modules/js-sha256/src/sha256.js", isModuleMain: "/root/generals/node_modules/js-sha256", paths: ["/root/generals/node_modules/js-sha256/src/node_modules","/root/generals/node_modules/js-sha256/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/js-sha256/src/sha256.js","path":"/root/generals/node_modules/js-sha256/src","filename":"/root/generals/node_modules/js-sha256/src/sha256.js","loaded":true,"sourceSHA256":"2db6c8e554fbee14672368a0d7551a8ddd841ee96c91526eb7987a0179cfc717","size":18769,"version":1,"evalStartTime":1782298135887,"evalEndTime":1782298135887.01}, moduleFnc: (function sha_js(exports, require, module, __filename, __dirname) { /**
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","loaded":true,"sourceSHA256":"49578775d45f6354669c3f29f6c2318f95495af6eea1d9cd136c89626f76394e","size":34216,"version":1,"evalStartTime":1782298135888,"evalEndTime":1782298135888.01}, moduleFnc: (function bundleRequire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","loaded":true,"sourceSHA256":"59f01474432e6ffc76323e5e684ce5f7931537223999780ab735af331faac1d2","size":16004,"version":1,"evalStartTime":1782298135888.02,"evalEndTime":1782298135891}, moduleFnc: (function bundleWrapper_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","loaded":true,"sourceSHA256":"18c7fe69d9133c820e876a09f89bca1d68337a67d8b1a04589d48e371a77cbe2","size":36358,"version":1,"evalStartTime":1782298135889,"evalEndTime":1782298135890.05,"allowclient":true}, moduleFnc: (function caching_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","loaded":true,"sourceSHA256":"9fb24f97ff53337f0c2b79dcb2cf03699e768351e01ce8199c98a968c81669a4","size":58046,"version":1,"evalStartTime":1782298135889.01,"evalEndTime":1782298135890.04,"allowclient":true}, moduleFnc: (function misc_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","loaded":true,"sourceSHA256":"b3eafb6059634f367bc20abd9732161ad4f3498f56a540361080950856a4cb2a","size":1258,"version":1,"evalStartTime":1782298135890,"evalEndTime":1782298135890.01,"allowclient":true}, moduleFnc: (function types_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.canHaveChildren = void 0;
function canHaveChildren(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
exports.canHaveChildren = canHaveChildren;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "ea937c29143cb2e8959e6cd066d49be7fe410ccd03431380474bf4dd84de697f"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","loaded":true,"sourceSHA256":"75f76504af1be1552a350c93a747273950b42fb0959d5acee5ecfecb4a092947","size":55197,"version":1,"evalStartTime":1782298135890.02,"evalEndTime":1782298135890.03,"allowclient":true}, moduleFnc: (function format_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", filename: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","loaded":true,"sourceSHA256":"1c98494daf4e65ea335f9e33d3b29c8238ff78e910fdc9aade2a916c6104c869","size":27639,"version":1,"evalStartTime":1782298135891.01,"evalEndTime":1782298135891.02}, moduleFnc: (function sourceMaps_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts", filename: "/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts","loaded":true,"sourceSHA256":"650997b309ba17f2e16794b02dde8bfca94d688657e87d026ebd4202d6f57641","size":5509,"version":1,"evalStartTime":1782298135892,"evalEndTime":1782298135900.05,"allowclient":true,"hotreload":true}, moduleFnc: (function aiWorkerEntry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/index.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/index.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/index.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/index.ts","loaded":true,"sourceSHA256":"dfea00e109d9eb9e32651337a34df69a5c9aee9926cf02e0a990f9e62aeb498c","size":3159,"version":1,"evalStartTime":1782298135892.01,"evalEndTime":1782298135900.04,"allowclient":true,"hotreload":true}, moduleFnc: (function index_ts(exports, require, module, __filename, __dirname) { "use strict";
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
require("./coordinate");
require("./dominion");
require("./dominionFront");
require("./dominionSplit");
require("./dominionSplit2");
require("./evalGreedy");
require("./rollout");
require("./evalCoarse");
require("./expandFlow");
require("./mcGoal");
var registry_1 = require("./registry");
Object.defineProperty(exports, "getStrategy", { enumerable: true, get: function () { return registry_1.getStrategy; } , configurable: true});
Object.defineProperty(exports, "getStrategyIds", { enumerable: true, get: function () { return registry_1.getStrategyIds; } , configurable: true});
Object.defineProperty(exports, "registerStrategy", { enumerable: true, get: function () { return registry_1.registerStrategy; } , configurable: true});
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "7e5bafb71ccb4a2ea2298110a04958a4691c12d83bba5a8009449879080efec6"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/beeline.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/beeline.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/beeline.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/beeline.ts","loaded":true,"sourceSHA256":"848c5637384d6c2602928f092df5ba3faaf78baad9045f22b232ef5960d422a4","size":1801,"version":1,"evalStartTime":1782298135892.02,"evalEndTime":1782298135893.04,"allowclient":true,"hotreload":true}, moduleFnc: (function beeline_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/aiPlanner.ts", filename: "/root/generals-build/src/gameUI2/ai/aiPlanner.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/aiPlanner.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/aiPlanner.ts","loaded":true,"sourceSHA256":"d6697eb76225c96a5c8c41966e527f2ccd5ff92d073140d79225abb23f1b2bca","size":6469,"version":1,"evalStartTime":1782298135892.03,"evalEndTime":1782298135892.04,"allowclient":true,"hotreload":true}, moduleFnc: (function aiPlanner_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/growthPolicy.ts", filename: "/root/generals-build/src/gameUI2/ai/growthPolicy.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/growthPolicy.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/growthPolicy.ts","loaded":true,"sourceSHA256":"71bfc7326d48614ee5d3203421801b379adfb580fd35340e948bf13127c5c804","size":5151,"version":1,"evalStartTime":1782298135893,"evalEndTime":1782298135893.01,"allowclient":true,"hotreload":true}, moduleFnc: (function growthPolicy_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/registry.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/registry.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/registry.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/registry.ts","loaded":true,"sourceSHA256":"d5b6dde5c65a18cd67e7ac01b9995e7ed8cf22343a854f39332777c21462089c","size":3244,"version":1,"evalStartTime":1782298135893.02,"evalEndTime":1782298135893.03,"allowclient":true,"hotreload":true}, moduleFnc: (function registry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts","loaded":true,"sourceSHA256":"42ac0bb2c7df5abbe4cba4c4fb36234fb3615d5a2e6c1aed46ae1efecb99b581","size":8560,"version":1,"evalStartTime":1782298135893.05,"evalEndTime":1782298135893.06,"allowclient":true,"hotreload":true}, moduleFnc: (function greedyCity_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts","loaded":true,"sourceSHA256":"567b5b5d6f14cbc2cf50ec2d2dfa917a57eae5a6ffb77ab92bae1a89d66d511c","size":10544,"version":1,"evalStartTime":1782298135893.07,"evalEndTime":1782298135893.08,"allowclient":true,"hotreload":true}, moduleFnc: (function consolidate_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts","loaded":true,"sourceSHA256":"39df806529aa4e98f854c3e21b7f4a47d1667eebd527031017286fb08016ba99","size":9404,"version":1,"evalStartTime":1782298135894,"evalEndTime":1782298135894.01,"allowclient":true,"hotreload":true}, moduleFnc: (function focusFire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts","loaded":true,"sourceSHA256":"bc9a06e39651d8cba4c0554a8ba44d0a3f10fe58e085df12f715696f80f385ea","size":13603,"version":1,"evalStartTime":1782298135894.02,"evalEndTime":1782298135894.03,"allowclient":true,"hotreload":true}, moduleFnc: (function focusWeakestFaction_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts","loaded":true,"sourceSHA256":"033e12e03577ad3c6680b10c2cd3eb3709497520393a4cc7b23dfee27335b469","size":16481,"version":1,"evalStartTime":1782298135894.04,"evalEndTime":1782298135894.05,"allowclient":true,"hotreload":true}, moduleFnc: (function monteCarlo_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts","loaded":true,"sourceSHA256":"9480e88e9e35e2d5fcb4afb7b809a46f34f78376372a755792f1394c368c57c7","size":19093,"version":1,"evalStartTime":1782298135895,"evalEndTime":1782298135895.01,"allowclient":true,"hotreload":true}, moduleFnc: (function threatAware_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts","loaded":true,"sourceSHA256":"e0ede60979f51a76b5cd550ad98ed95e8602729519014a1cab4ce8a333c0244b","size":20947,"version":1,"evalStartTime":1782298135895.02,"evalEndTime":1782298135895.03,"allowclient":true,"hotreload":true}, moduleFnc: (function influenceMap_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/territory.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/territory.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/territory.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/territory.ts","loaded":true,"sourceSHA256":"a245c15149db037cdd3adcf62c12863688c90d7b29ba7c86e10a8e40701c93d9","size":18502,"version":1,"evalStartTime":1782298135895.04,"evalEndTime":1782298135895.05,"allowclient":true,"hotreload":true}, moduleFnc: (function territory_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/snowball.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/snowball.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/snowball.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/snowball.ts","loaded":true,"sourceSHA256":"42872bd3d0f2c5bc432ca97f46159fbacfd52bff50bed8d5d6a25ff16ad04d11","size":21112,"version":1,"evalStartTime":1782298135896,"evalEndTime":1782298135896.01,"allowclient":true,"hotreload":true}, moduleFnc: (function snowball_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts","loaded":true,"sourceSHA256":"625aa4320e1cfaa78500cede40e5fc0f503b88737a51d308ce8234751377f563","size":27793,"version":1,"evalStartTime":1782298135896.02,"evalEndTime":1782298135896.03,"allowclient":true,"hotreload":true}, moduleFnc: (function coordinate_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Coordinated assignment AI. Same combat-gated, defend, retreat logic as the champ (threatAware),
// but adds a GLOBAL assignment pass so our generals don't all pile onto the single best city while
// other capturable cities sit untaken. We greedily assign each general a DISTINCT enemy city
// (best (general,city) pairs first), capturing more cities per turn => faster economy => more wins.
// A city only needs more than one attacker if a single general can't crack it; such over-strength
// cities stay open to multiple generals.
// config: safety, distWeight, garrisonWeight, capitalBonus, defendWeight, enemyMove.
(0, registry_1.registerStrategy)("coordinate", (snapshot, ctx) => {
    const cfg = ctx.config;
    const safety = num(cfg.safety, 1.0);
    const distWeight = num(cfg.distWeight, 1);
    const garrisonWeight = num(cfg.garrisonWeight, 0.4);
    const capitalBonus = num(cfg.capitalBonus, 5);
    const defendWeight = num(cfg.defendWeight, 4);
    const enemyMove = num(cfg.enemyMove, 1.5);
    const popWeight = num(cfg.popWeight, 0); // >0: prefer high-population (economically valuable) cities
    const pathAware = cfg.pathAware === true; // route by passable distance instead of straight hex distance
    const { factionId, generals, cities, tiles, terrainSpeeds } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyCities = cities.filter(c => c.factionId !== factionId);
    const ourCities = cities.filter(c => c.factionId === factionId);
    // Path-aware distance: BFS over passable tiles from each of our generals, so a city walled off by
    // mountains/water isn't treated as "near". Falls back to hex distance when pathAware is off or a
    // tile is unreachable.
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    if (pathAware)
        for (const t of tiles) {
            const s = terrainSpeeds[t.terrainType];
            if (s && s > 0)
                tileSet.add(key(t.x, t.y));
        }
    const bfsCache = new Map();
    const bfsFrom = (g) => {
        var _a;
        let cached = bfsCache.get(g.id);
        if (cached)
            return cached;
        const dist = new Map();
        const start = key(g.x, g.y);
        dist.set(start, 0);
        let frontier = [{ x: g.x, y: g.y }];
        while (frontier.length) {
            const nextF = [];
            for (const cur of frontier) {
                const cd = (_a = dist.get(key(cur.x, cur.y))) !== null && _a !== void 0 ? _a : 0;
                for (let dx = -1; dx <= 1; dx++)
                    for (let dy = -1; dy <= 1; dy++) {
                        if (dx === 0 && dy === 0)
                            continue;
                        const nx = cur.x + dx, ny = cur.y + dy;
                        const nk = key(nx, ny);
                        if (!tileSet.has(nk) || dist.has(nk))
                            continue;
                        if ((0, aiPlanner_1.hexDistance)(cur, { x: nx, y: ny }) !== 1)
                            continue;
                        dist.set(nk, cd + 1);
                        nextF.push({ x: nx, y: ny });
                    }
            }
            frontier = nextF;
        }
        bfsCache.set(g.id, dist);
        return cached = dist;
    };
    const distOf = (g, p) => {
        if (!pathAware)
            return (0, aiPlanner_1.hexDistance)(g, p);
        const d = bfsFrom(g).get(key(p.x, p.y));
        return d === undefined ? (0, aiPlanner_1.hexDistance)(g, p) : d;
    };
    const cityValue = (c) => { var _a; return (c.isCapital ? capitalBonus : 0) - garrisonWeight * c.garrison + popWeight * ((_a = c.population) !== null && _a !== void 0 ? _a : 0); };
    const target = new Map();
    const pairs = [];
    for (const g of ours) {
        for (const c of enemyCities) {
            const soloable = g.totalUnits > c.garrison * safety;
            const score = cityValue(c) - distWeight * distOf(g, c);
            pairs.push({ gid: g.id, city: c, score, soloable });
        }
    }
    pairs.sort((a, b) => b.score - a.score);
    const cityTaken = new Set();
    for (const p of pairs) {
        if (!p.soloable)
            continue; // only the assignment of winnable solo captures is exclusive
        if (target.has(p.gid))
            continue;
        if (cityTaken.has(p.city.id))
            continue;
        target.set(p.gid, { x: p.city.x, y: p.city.y });
        cityTaken.add(p.city.id);
    }
    // 2) Generals with no assigned city: defend a threatened city, else gang up on the best
    //    remaining city (even if already claimed — needed for over-strength targets), else retreat.
    const threatenedCity = (oc) => enemyGenerals.some(e => (0, aiPlanner_1.hexDistance)(e, oc) <= combatDist(e.totalUnits) + enemyMove);
    const refuge = (g) => {
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
            if (o.id === g.id || o.totalUnits <= g.totalUnits)
                continue;
            const d = (0, aiPlanner_1.hexDistance)(g, o);
            if (d < bestD) {
                bestD = d;
                best = { x: o.x, y: o.y };
            }
        }
        return best;
    };
    for (const g of ours) {
        if (target.has(g.id))
            continue;
        const S = g.totalUnits;
        let best;
        let bestScore = -Infinity;
        for (const oc of ourCities) {
            if (!threatenedCity(oc))
                continue;
            const score = defendWeight - distWeight * distOf(g, oc);
            if (score > bestScore) {
                bestScore = score;
                best = { x: oc.x, y: oc.y };
            }
        }
        // help take the most valuable city we can contribute to (closest big one)
        for (const c of enemyCities) {
            const score = cityValue(c) - distWeight * distOf(g, c);
            if (score > bestScore) {
                bestScore = score;
                best = { x: c.x, y: c.y };
            }
        }
        const underThreat = enemyGenerals.some(e => e.totalUnits > S * safety && (0, aiPlanner_1.hexDistance)(e, g) <= combatDist(e.totalUnits) + enemyMove);
        if (underThreat && (!best || bestScore < 0)) {
            const r = refuge(g);
            if (r)
                best = r;
        }
        if (best)
            target.set(g.id, best);
    }
    const orders = [];
    for (const g of ours) {
        const t = target.get(g.id);
        if (t)
            orders.push({ generalId: g.id, targetPosition: t });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "5d3e9d4c86a66cc1d177a01f96517118004cb5e875f4b9afae85ab45be2f5422"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominion.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominion.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominion.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominion.ts","loaded":true,"sourceSHA256":"552ab7df74e2e9172a0c4e7b4df9ff515c2aaeded2fc5fe2fac65f21944e5dfc","size":23792,"version":1,"evalStartTime":1782298135896.04,"evalEndTime":1782298135897,"allowclient":true,"hotreload":true}, moduleFnc: (function dominion_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Dominion AI — directly optimizes the actual win condition (land). Tile ownership goes to whoever
// has the highest army influence on it, where influence = strength / (distance+1)^FALLOFF
// (inverse-square in the live engine). Each general moves to the position that maximizes the number
// of tiles our faction would DOMINATE (our influence > every rival's), counting only tiles within
// influence range — so generals naturally fan out to cover the map without overlapping (overlap wins
// no extra tiles), while refusing fights against stronger stacks and grabbing capturable cities.
// config: falloff, radius, threatWeight, threatMargin, captureBonus, ownBias.
(0, registry_1.registerStrategy)("dominion", (snapshot, ctx) => {
    const cfg = ctx.config;
    const falloff = num(cfg.falloff, 6); // mirror ARMY_FALLOFF_EXPONENT in the engine
    const radius = num(cfg.radius, 5); // tiles beyond this contribute negligible influence
    const threatWeight = num(cfg.threatWeight, 30);
    const threatMargin = num(cfg.threatMargin, 1.0);
    const captureBonus = num(cfg.captureBonus, 8);
    const ownBias = num(cfg.ownBias, 1.0); // how much our influence must exceed rivals' to count as ours
    const hardAvoid = cfg.hardAvoid === true; // never step within a stronger stack's reach (vs soft penalty)
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const s = terrainSpeeds[t.terrainType];
        if (s && s > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (tileSet.has(key(nx, ny)) && (0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        return out;
    };
    const inf = (strength, d) => strength / Math.pow(d + 1, falloff);
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyOrNeutralCities = cities.filter(c => c.factionId !== factionId);
    // Base influence per tile: rivals' max (fixed) and our faction's total EXCLUDING the general we
    // are currently moving (added back per-candidate). Precompute the rival max and our base sum.
    const rivalMax = new Map();
    const ourBase = new Map();
    for (const t of tiles) {
        const tk = key(t.x, t.y);
        let rivals = 0;
        let ourSum = 0;
        for (const g of generals) {
            const d = (0, aiPlanner_1.hexDistance)(t, g);
            if (d > radius)
                continue;
            const v = inf(g.totalUnits, d);
            if (g.factionId === factionId)
                ourSum += v;
            else if (v > rivals)
                rivals = v;
        }
        rivalMax.set(tk, rivals);
        ourBase.set(tk, ourSum);
    }
    const orders = [];
    for (const gen of ours) {
        const S = gen.totalUnits;
        const cityAt = new Map(enemyOrNeutralCities.map(c => [key(c.x, c.y), c]));
        // Tiles this general can affect (near its current OR a candidate position).
        const affected = tiles.filter(t => (0, aiPlanner_1.hexDistance)(t, gen) <= radius + 1);
        const coverageFor = (cx, cy) => {
            var _a, _b;
            let owned = 0;
            for (const t of affected) {
                const tk = key(t.x, t.y);
                const dCur = (0, aiPlanner_1.hexDistance)(t, gen);
                const dCand = (0, aiPlanner_1.hexDistance)(t, { x: cx, y: cy });
                // our faction influence with this general relocated to the candidate
                const our = ((_a = ourBase.get(tk)) !== null && _a !== void 0 ? _a : 0) - inf(S, dCur) + inf(S, dCand);
                if (our > ((_b = rivalMax.get(tk)) !== null && _b !== void 0 ? _b : 0) * ownBias && our > 0)
                    owned++;
            }
            return owned;
        };
        // A tile is "unsafe" if a stronger enemy stack could fight us there (within its combat reach
        // +1 step). With hardAvoid, such tiles are never chosen — fixing dominion's habit of walking
        // thin stacks into stronger enemies for a bit more coverage. Otherwise it's only penalized.
        const unsafe = (cx, cy) => {
            for (const e of enemyGenerals) {
                if (e.totalUnits <= S * threatMargin)
                    continue;
                if ((0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e) <= combatDist(e.totalUnits) + 1)
                    return true;
            }
            return false;
        };
        const scoreOf = (cx, cy) => {
            let score = coverageFor(cx, cy);
            if (!hardAvoid) {
                for (const e of enemyGenerals) {
                    if (e.totalUnits <= S * threatMargin)
                        continue;
                    const d = (0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e);
                    const reach = combatDist(e.totalUnits);
                    if (d <= reach + 1)
                        score -= threatWeight * (reach + 1 - d + 1);
                }
            }
            const c = cityAt.get(key(cx, cy));
            if (c && S > c.garrison)
                score += captureBonus;
            return score;
        };
        // When using hardAvoid, only consider safe candidates (staying put is always allowed).
        const candidates = neighborsOf(gen.x, gen.y).filter(n => !hardAvoid || !unsafe(n.x, n.y));
        let best;
        let bestScore = scoreOf(gen.x, gen.y);
        for (const n of candidates) {
            const sc = scoreOf(n.x, n.y);
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
 /* _JS_SOURCE_HASH = "cbfd2e3f11250d770e95d38511e7ecf8a6da504ccb692f2f86534a412dbd906c"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts","loaded":true,"sourceSHA256":"df31669904b5569eb30c50572d639484b59e2cab773c31e146f8a343054f8889","size":24629,"version":1,"evalStartTime":1782298135897.01,"evalEndTime":1782298135897.02,"allowclient":true,"hotreload":true}, moduleFnc: (function dominionFront_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Dominion + FRONTIER weighting. Same as "dominion" (each general moves to maximize the tiles our
// faction dominates under the influence model, refusing fights vs clearly-stronger stacks and
// grabbing cities) — EXCEPT a held tile is worth much more when it's near the enemy. A unit sitting
// in the safe interior/back line holds tiles that are ours regardless of whether it's there, so it
// achieves nothing; the value lives at the contested front, close to the enemy. So a held tile near
// an enemy general counts as 1, while a deep-interior tile (no enemy within frontierRange) counts as
// only `interiorValue`. Generals therefore push forward to hold the border instead of loitering in
// the rear. hardAvoid still keeps them just outside a stronger stack's reach.
//
// config (plus everything dominion reads): frontierRange, interiorValue.
(0, registry_1.registerStrategy)("dominionFront", (snapshot, ctx) => {
    const cfg = ctx.config;
    const falloff = num(cfg.falloff, 6);
    const radius = num(cfg.radius, 5);
    const threatWeight = num(cfg.threatWeight, 30);
    const threatMargin = num(cfg.threatMargin, 1.0);
    const captureBonus = num(cfg.captureBonus, 8);
    const ownBias = num(cfg.ownBias, 1.0);
    const hardAvoid = cfg.hardAvoid === true;
    // A tile counts fully when an enemy general is within frontierRange of it; otherwise it's worth
    // only interiorValue. Lower interiorValue = more aggressively forward.
    const frontierRange = num(cfg.frontierRange, 7);
    const interiorValue = num(cfg.interiorValue, 0.15);
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const s = terrainSpeeds[t.terrainType];
        if (s && s > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (tileSet.has(key(nx, ny)) && (0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        return out;
    };
    const inf = (strength, d) => strength / Math.pow(d + 1, falloff);
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyOrNeutralCities = cities.filter(c => c.factionId !== factionId);
    const rivalMax = new Map();
    const ourBase = new Map();
    // Frontier factor per tile: 1 if any enemy general is within frontierRange, else interiorValue.
    const frontier = new Map();
    for (const t of tiles) {
        const tk = key(t.x, t.y);
        let rivals = 0;
        let ourSum = 0;
        for (const g of generals) {
            const d = (0, aiPlanner_1.hexDistance)(t, g);
            if (d > radius)
                continue;
            const v = inf(g.totalUnits, d);
            if (g.factionId === factionId)
                ourSum += v;
            else if (v > rivals)
                rivals = v;
        }
        rivalMax.set(tk, rivals);
        ourBase.set(tk, ourSum);
        let nearEnemy = false;
        for (const e of enemyGenerals) {
            if ((0, aiPlanner_1.hexDistance)(t, e) <= frontierRange) {
                nearEnemy = true;
                break;
            }
        }
        frontier.set(tk, nearEnemy ? 1 : interiorValue);
    }
    const orders = [];
    for (const gen of ours) {
        const S = gen.totalUnits;
        const cityAt = new Map(enemyOrNeutralCities.map(c => [key(c.x, c.y), c]));
        const affected = tiles.filter(t => (0, aiPlanner_1.hexDistance)(t, gen) <= radius + 1);
        // Population-of-frontier-weighted coverage: each dominated tile contributes its frontier
        // factor instead of a flat 1, so forward (contested) tiles dominate the score.
        const coverageFor = (cx, cy) => {
            var _a, _b, _c;
            let value = 0;
            for (const t of affected) {
                const tk = key(t.x, t.y);
                const dCur = (0, aiPlanner_1.hexDistance)(t, gen);
                const dCand = (0, aiPlanner_1.hexDistance)(t, { x: cx, y: cy });
                const our = ((_a = ourBase.get(tk)) !== null && _a !== void 0 ? _a : 0) - inf(S, dCur) + inf(S, dCand);
                if (our > ((_b = rivalMax.get(tk)) !== null && _b !== void 0 ? _b : 0) * ownBias && our > 0)
                    value += (_c = frontier.get(tk)) !== null && _c !== void 0 ? _c : interiorValue;
            }
            return value;
        };
        const unsafe = (cx, cy) => {
            for (const e of enemyGenerals) {
                if (e.totalUnits <= S * threatMargin)
                    continue;
                if ((0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e) <= combatDist(e.totalUnits) + 1)
                    return true;
            }
            return false;
        };
        const scoreOf = (cx, cy) => {
            let score = coverageFor(cx, cy);
            if (!hardAvoid) {
                for (const e of enemyGenerals) {
                    if (e.totalUnits <= S * threatMargin)
                        continue;
                    const d = (0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e);
                    const reach = combatDist(e.totalUnits);
                    if (d <= reach + 1)
                        score -= threatWeight * (reach + 1 - d + 1);
                }
            }
            const c = cityAt.get(key(cx, cy));
            if (c && S > c.garrison)
                score += captureBonus;
            return score;
        };
        const candidates = neighborsOf(gen.x, gen.y).filter(n => !hardAvoid || !unsafe(n.x, n.y));
        let best;
        let bestScore = scoreOf(gen.x, gen.y);
        for (const n of candidates) {
            const sc = scoreOf(n.x, n.y);
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
 /* _JS_SOURCE_HASH = "b4f1e015872d87c53649874468f442314c0c8255c45d8b934a62e9eb68a509a0"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts","loaded":true,"sourceSHA256":"7310d0f328383028fc26b3f6a0fb33ad4ca2ba935e8eb2633dd6be98fc333a75","size":13384,"version":1,"evalStartTime":1782298135897.03,"evalEndTime":1782298135897.04,"allowclient":true,"hotreload":true}, moduleFnc: (function dominionSplit_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const registry_1 = require("./registry");
// Dominion + selective splitting. Movement is delegated verbatim to the champion "dominion" strategy
// (so this can only differ by adding splits, never by moving worse). On top of that, an
// OVER-CONCENTRATED general splits: one holding well more than an even share of the faction's army,
// whose halves would each still out-stack nearby enemies, and which has uncovered expansion targets
// (enemy/neutral cities) nearby. Dominion's value rewards fanning out (overlapping influence wins no
// extra tiles), so redistributing a bloated stack into two lets the faction dominate two clusters.
// Aggressive splitting fragments into weak stacks that get picked off, so the bar is deliberately
// high and capped per turn.
//
// config (plus everything dominion reads): splitMin, concentration, safeMargin, expandRange,
// minTargets, maxSplitsPerTurn.
(0, registry_1.registerStrategy)("dominionSplit", async (snapshot, ctx) => {
    const cfg = ctx.config;
    const splitMin = num(cfg.splitMin, 40); // absolute floor on stack size to split
    const concentration = num(cfg.concentration, 1.5); // must hold >= this * an even share
    const safeMargin = num(cfg.safeMargin, 1.1); // each half must beat nearby enemies by this
    const expandRange = num(cfg.expandRange, 8); // range to look for targets / threats
    const minTargets = num(cfg.minTargets, 1); // uncovered cities nearby needed
    const maxSplitsPerTurn = num(cfg.maxSplitsPerTurn, 2);
    // Which movement strategy to layer splitting on top of. Defaults to the plain champion
    // "dominion"; set to "dominionFront" to bias movement toward the contested front line.
    const moveStrategy = typeof cfg.moveStrategy === "string" && cfg.moveStrategy || "dominion";
    const orders = await Promise.resolve((0, registry_1.getStrategy)(moveStrategy)(snapshot, ctx));
    const orderByGeneral = new Map(orders.map(o => [o.generalId, o]));
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    const enemies = generals.filter(g => g.factionId !== factionId);
    const targets = cities.filter(c => c.factionId !== factionId);
    const factionArmy = ours.reduce((s, g) => s + g.totalUnits, 0);
    let generalCount = ours.length;
    let splitsThisTurn = 0;
    // Split the biggest stacks first.
    for (const gen of [...ours].sort((a, b) => b.totalUnits - a.totalUnits)) {
        if (splitsThisTurn >= maxSplitsPerTurn)
            break;
        if (gen.totalUnits < splitMin)
            continue;
        const evenShare = factionArmy / Math.max(1, generalCount);
        if (gen.totalUnits < evenShare * concentration)
            continue;
        let maxEnemyNear = 0;
        for (const e of enemies) {
            if ((0, aiPlanner_1.hexDistance)(e, gen) <= expandRange && e.totalUnits > maxEnemyNear)
                maxEnemyNear = e.totalUnits;
        }
        // Splitting costs half the army, so each resulting general keeps only ~a quarter of the
        // original stack. Require that quarter to still out-stack nearby enemies.
        if (gen.totalUnits / 4 < maxEnemyNear * safeMargin)
            continue;
        const nearbyTargets = targets.filter(c => (0, aiPlanner_1.hexDistance)(c, gen) <= expandRange).length;
        if (nearbyTargets < minTargets)
            continue;
        const order = orderByGeneral.get(gen.id);
        if (order) {
            order.split = true;
        }
        else {
            orders.push({ generalId: gen.id, split: true });
        }
        generalCount++;
        splitsThisTurn++;
    }
    return orders;
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "deb1208fdd43a7f155237c49bac3c050e79ed1923dc70fed6ad39792f3832757"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts","loaded":true,"sourceSHA256":"6e0d64d311ec1ef6950613ab3e6d7dbfa2aae170428b945b6088c6e96f611230","size":16212,"version":1,"evalStartTime":1782298135898,"evalEndTime":1782298135898.01,"allowclient":true,"hotreload":true}, moduleFnc: (function dominionSplit_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const registry_1 = require("./registry");
// Dominion + CITY-AWARE splitting (gen-split-2). Movement is delegated verbatim to the champ
// "dominion", so this can only differ by adding splits. The placement that decides games weights
// each held city at ~50x a unit of army, so the highest-value thing a faction can do is cover and
// capture MORE cities. A single stack can only sit in one place; splitting lets the two halves each
// go claim a different city cluster.
//
// The previous heuristic (dominionSplit) split whenever an over-concentrated stack had >=1 nearby
// target. That over-fires when the targets are all on one side (one stack already reaches them) and
// under-values the real win: two SEPARATED capturable cities a single stack can't both hold. So
// here a general only splits when:
//   - it is over-concentrated (holds >> an even share of the faction army), AND
//   - after paying the split cost (each half keeps ~a quarter of the original), each half can still
//     safely out-stack nearby enemy stacks, AND
//   - there are >= 2 capturable cities within range whose halves it out-garrisons, that are far
//     enough apart (>= minSeparation) that one stack cannot cover both — so the split genuinely
//     buys a second cluster rather than fragmenting for nothing.
//
// config (plus everything dominion reads): splitMin, concentration, safeMargin, expandRange,
// minSeparation, maxSplitsPerTurn.
(0, registry_1.registerStrategy)("dominionSplit2", async (snapshot, ctx) => {
    const cfg = ctx.config;
    const splitMin = num(cfg.splitMin, 40); // absolute floor on stack size to split
    const concentration = num(cfg.concentration, 1.4); // must hold >= this * an even share
    const safeMargin = num(cfg.safeMargin, 1.1); // each half must beat threats/garrisons by this
    const expandRange = num(cfg.expandRange, 8); // range to look for targets / threats
    const minSeparation = num(cfg.minSeparation, 5); // two targets must be at least this far apart
    const maxSplitsPerTurn = num(cfg.maxSplitsPerTurn, 2);
    const orders = await Promise.resolve((0, registry_1.getStrategy)("dominion")(snapshot, ctx));
    const orderByGeneral = new Map(orders.map(o => [o.generalId, o]));
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    const enemies = generals.filter(g => g.factionId !== factionId);
    const targets = cities.filter(c => c.factionId !== factionId);
    const factionArmy = ours.reduce((s, g) => s + g.totalUnits, 0);
    let generalCount = ours.length;
    let splitsThisTurn = 0;
    // Biggest stacks first — those are the ones worth redistributing.
    for (const gen of [...ours].sort((a, b) => b.totalUnits - a.totalUnits)) {
        if (splitsThisTurn >= maxSplitsPerTurn)
            break;
        if (gen.totalUnits < splitMin)
            continue;
        const evenShare = factionArmy / Math.max(1, generalCount);
        if (gen.totalUnits < evenShare * concentration)
            continue;
        // Each resulting general keeps ~a quarter of the original stack (split costs half the army).
        const halfStrength = gen.totalUnits / 4;
        let maxEnemyNear = 0;
        for (const e of enemies) {
            if ((0, aiPlanner_1.hexDistance)(e, gen) <= expandRange && e.totalUnits > maxEnemyNear)
                maxEnemyNear = e.totalUnits;
        }
        if (halfStrength < maxEnemyNear * safeMargin)
            continue;
        // Cities each half could actually take (out-garrison after the split cost), within range.
        const capturable = targets.filter(c => (0, aiPlanner_1.hexDistance)(c, gen) <= expandRange && halfStrength > c.garrison * safeMargin);
        if (capturable.length < 2)
            continue;
        // Require two of them to be far enough apart that ONE stack can't cover both — that's the
        // case where splitting wins a second cluster instead of just thinning a stack.
        let separated = false;
        for (let i = 0; i < capturable.length && !separated; i++) {
            for (let j = i + 1; j < capturable.length; j++) {
                if ((0, aiPlanner_1.hexDistance)(capturable[i], capturable[j]) >= minSeparation) {
                    separated = true;
                    break;
                }
            }
        }
        if (!separated)
            continue;
        const order = orderByGeneral.get(gen.id);
        if (order)
            order.split = true;
        else
            orders.push({ generalId: gen.id, split: true });
        generalCount++;
        splitsThisTurn++;
    }
    return orders;
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "cccb7365a8d0fd517939f2c98865c3a43a7bb9f467e1fb47949590d8af0784fa"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts","loaded":true,"sourceSHA256":"7533f7a046d3790107dc3c1c64ca368ea0d83fbe9fff102a25e499d83a3da353","size":26581,"version":1,"evalStartTime":1782298135898.02,"evalEndTime":1782298135898.03,"allowclient":true,"hotreload":true}, moduleFnc: (function evalGreedy_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Eval-function greedy. Like dominion it scores candidate positions by the tiles our faction would
// DOMINATE under the engine's influence model, but it optimizes ECONOMIC value rather than raw land:
// a dominated tile that holds a city counts for its population (the thing that actually drives food
// and army cap), and capturing a city is worth its population. Plus the proven safety trait: never
// step within a clearly-stronger stack's reach. The objective is "grow the economy I control",
// which is what actually wins games (territory -> food -> army -> win).
// config: falloff, radius, tileValue, cityPopWeight, capturePopWeight, threatMargin.
(0, registry_1.registerStrategy)("evalGreedy", (snapshot, ctx) => {
    var _a, _b, _c, _d, _e;
    const cfg = ctx.config;
    const falloff = num(cfg.falloff, 6);
    const radius = num(cfg.radius, 6);
    const tileValue = num(cfg.tileValue, 1);
    const cityPopWeight = num(cfg.cityPopWeight, 0.02);
    const capturePopWeight = num(cfg.capturePopWeight, 0.05);
    const threatMargin = num(cfg.threatMargin, 1.3);
    // Joint planning: number of coordinate-descent passes. 1 = independent greedy (each general only
    // sees allies' CURRENT influence). >=2 = re-plan against allies' INTENDED next positions, so
    // generals don't pile into the same frontier. Pass 1 reproduces the original behavior exactly.
    const jointPasses = Math.max(1, Math.round(num(cfg.jointPasses, 1)));
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const s = terrainSpeeds[t.terrainType];
        if (s && s > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (tileSet.has(key(nx, ny)) && (0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        return out;
    };
    const inf = (strength, d) => strength / Math.pow(d + 1, falloff);
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyOrNeutralCities = cities.filter(c => c.factionId !== factionId);
    // City population by tile (for valuing dominated/captured city tiles economically).
    const cityPopAt = new Map();
    for (const c of cities)
        cityPopAt.set(key(c.x, c.y), (_a = c.population) !== null && _a !== void 0 ? _a : 0);
    const captureCityAt = new Map(enemyOrNeutralCities.map(c => [key(c.x, c.y), c]));
    // Enemy (rival) influence per tile — fixed across passes.
    const rivalMax = new Map();
    for (const t of tiles) {
        const tk = key(t.x, t.y);
        let rivals = 0;
        for (const e of enemyGenerals) {
            const d = (0, aiPlanner_1.hexDistance)(t, e);
            if (d > radius)
                continue;
            const v = inf(e.totalUnits, d);
            if (v > rivals)
                rivals = v;
        }
        rivalMax.set(tk, rivals);
    }
    const affectedByGen = new Map();
    for (const g of ours)
        affectedByGen.set(g.id, tiles.filter(t => (0, aiPlanner_1.hexDistance)(t, g) <= radius + 1));
    const unsafeFor = (S, cx, cy) => {
        for (const e of enemyGenerals) {
            if (e.totalUnits <= S * threatMargin)
                continue;
            if ((0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e) <= combatDist(e.totalUnits) + 1)
                return true;
        }
        return false;
    };
    // Where each of our generals plans to be next turn (init = current). Refined over passes.
    const planned = new Map();
    for (const g of ours)
        planned.set(g.id, { x: g.x, y: g.y });
    for (let pass = 0; pass < jointPasses; pass++) {
        // Our total influence per tile from everyone's PLANNED positions (pass 0 = current positions).
        const ourTotal = new Map();
        for (const t of tiles) {
            const tk = key(t.x, t.y);
            let sum = 0;
            for (const g of ours) {
                const p = (_b = planned.get(g.id)) !== null && _b !== void 0 ? _b : { x: g.x, y: g.y };
                const d = (0, aiPlanner_1.hexDistance)(t, p);
                if (d > radius)
                    continue;
                sum += inf(g.totalUnits, d);
            }
            ourTotal.set(tk, sum);
        }
        for (const gen of ours) {
            const S = gen.totalUnits;
            const pPlanned = (_c = planned.get(gen.id)) !== null && _c !== void 0 ? _c : { x: gen.x, y: gen.y };
            const affected = (_d = affectedByGen.get(gen.id)) !== null && _d !== void 0 ? _d : [];
            const econValueAt = (cx, cy) => {
                var _a, _b, _c, _d;
                let value = 0;
                for (const t of affected) {
                    const tk = key(t.x, t.y);
                    // allies' influence here, excluding this general's own planned contribution
                    const baseExcl = ((_a = ourTotal.get(tk)) !== null && _a !== void 0 ? _a : 0) - inf(S, (0, aiPlanner_1.hexDistance)(t, pPlanned));
                    const our = baseExcl + inf(S, (0, aiPlanner_1.hexDistance)(t, { x: cx, y: cy }));
                    if (our > ((_b = rivalMax.get(tk)) !== null && _b !== void 0 ? _b : 0) && our > 0) {
                        value += tileValue + cityPopWeight * ((_c = cityPopAt.get(tk)) !== null && _c !== void 0 ? _c : 0);
                    }
                }
                const c = captureCityAt.get(key(cx, cy));
                if (c && S > c.garrison)
                    value += capturePopWeight * ((_d = c.population) !== null && _d !== void 0 ? _d : 0);
                return value;
            };
            const candidates = neighborsOf(gen.x, gen.y).filter(n => !unsafeFor(S, n.x, n.y));
            let best = { x: gen.x, y: gen.y };
            let bestScore = econValueAt(gen.x, gen.y);
            for (const n of candidates) {
                const sc = econValueAt(n.x, n.y);
                if (sc > bestScore) {
                    bestScore = sc;
                    best = n;
                }
            }
            planned.set(gen.id, best);
        }
    }
    const orders = [];
    for (const gen of ours) {
        const p = (_e = planned.get(gen.id)) !== null && _e !== void 0 ? _e : { x: gen.x, y: gen.y };
        if (p.x !== gen.x || p.y !== gen.y)
            orders.push({ generalId: gen.id, targetPosition: p });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "27763837ca690e9c592ec1ec51a36e6971160530e15e1d40a90fab30a5838b8d"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/rollout.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/rollout.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/rollout.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/rollout.ts","loaded":true,"sourceSHA256":"edbe4bd2a8c72a8ef5369780d6b1c0702930d47d4c19374d428f894c4cead51f","size":27528,"version":1,"evalStartTime":1782298135898.04,"evalEndTime":1782298135899,"allowclient":true,"hotreload":true}, moduleFnc: (function rollout_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Rollout search (the "MCTS-ish" menu item). For each of our generals, it evaluates each candidate
// first move by SIMULATING a few turns ahead and scoring the projected population-weighted territory
// our faction would dominate — instead of only the immediate 1-step coverage that dominion/evalGreedy
// use. Forward model (kept cheap + worker-safe):
//   - our generals follow a greedy coverage-maximizing policy each simulated turn,
//   - armies grow ~10%/turn (matches the growth mechanic),
//   - enemies are treated as a STATIC influence field (they move little over a short horizon),
//   - hard threat-avoidance: never step within a clearly-stronger stack's reach.
// The point is to test whether multi-turn foresight beats greedy 1-step. config: falloff, radius,
// depth, growth, threatMargin, cityPopWeight, capturePopWeight.
(0, registry_1.registerStrategy)("rollout", (snapshot, ctx) => {
    var _a;
    const cfg = ctx.config;
    const falloff = num(cfg.falloff, 6);
    const radius = num(cfg.radius, 5);
    const depth = Math.max(1, Math.round(num(cfg.depth, 3)));
    const growth = num(cfg.growth, 1.1);
    const threatMargin = num(cfg.threatMargin, 1.3);
    const cityPopWeight = num(cfg.cityPopWeight, 0.02);
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const s = terrainSpeeds[t.terrainType];
        if (s && s > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (tileSet.has(key(nx, ny)) && (0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        return out;
    };
    const inf = (strength, d) => strength / Math.pow(d + 1, falloff);
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const cityPopAt = new Map();
    for (const c of cities)
        cityPopAt.set(key(c.x, c.y), (_a = c.population) !== null && _a !== void 0 ? _a : 0);
    // Static rival influence field (from current enemy positions).
    const rivalField = new Map();
    for (const t of tiles) {
        const tk = key(t.x, t.y);
        let r = 0;
        for (const e of enemyGenerals) {
            const d = (0, aiPlanner_1.hexDistance)(t, e);
            if (d <= radius)
                r = Math.max(r, inf(e.totalUnits, d));
        }
        rivalField.set(tk, r);
    }
    const unsafeFor = (S, cx, cy) => {
        for (const e of enemyGenerals) {
            if (e.totalUnits <= S * threatMargin)
                continue;
            if ((0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e) <= combatDist(e.totalUnits) + 1)
                return true;
        }
        return false;
    };
    // Local coverage gain for placing a unit of strength s at (cx,cy), given the rest of our field.
    const tilesNear = (x, y) => tiles.filter(t => (0, aiPlanner_1.hexDistance)(t, { x, y }) <= radius);
    const coverageGainAt = (unit, cx, cy, restField) => {
        var _a, _b, _c;
        let v = 0;
        for (const t of tilesNear(cx, cy)) {
            const tk = key(t.x, t.y);
            const our = ((_a = restField.get(tk)) !== null && _a !== void 0 ? _a : 0) + inf(unit.s, (0, aiPlanner_1.hexDistance)(t, { x: cx, y: cy }));
            if (our > ((_b = rivalField.get(tk)) !== null && _b !== void 0 ? _b : 0) && our > 0)
                v += 1 + cityPopWeight * ((_c = cityPopAt.get(tk)) !== null && _c !== void 0 ? _c : 0);
        }
        return v;
    };
    const fieldExcluding = (units, skip) => {
        const f = new Map();
        units.forEach((u, i) => {
            var _a;
            if (i === skip)
                return;
            for (const t of tilesNear(u.x, u.y)) {
                const tk = key(t.x, t.y);
                f.set(tk, ((_a = f.get(tk)) !== null && _a !== void 0 ? _a : 0) + inf(u.s, (0, aiPlanner_1.hexDistance)(t, u)));
            }
        });
        return f;
    };
    const greedyStep = (units, i) => {
        const u = units[i];
        const rest = fieldExcluding(units, i);
        let best = { x: u.x, y: u.y };
        let bestV = coverageGainAt(u, u.x, u.y, rest);
        for (const n of neighborsOf(u.x, u.y)) {
            if (unsafeFor(u.s, n.x, n.y))
                continue;
            const v = coverageGainAt(u, n.x, n.y, rest);
            if (v > bestV) {
                bestV = v;
                best = n;
            }
        }
        u.x = best.x;
        u.y = best.y;
    };
    const totalCoverage = (units) => {
        var _a, _b, _c;
        const f = new Map();
        for (const u of units)
            for (const t of tilesNear(u.x, u.y)) {
                const tk = key(t.x, t.y);
                f.set(tk, ((_a = f.get(tk)) !== null && _a !== void 0 ? _a : 0) + inf(u.s, (0, aiPlanner_1.hexDistance)(t, u)));
            }
        let v = 0;
        for (const [tk, our] of f)
            if (our > ((_b = rivalField.get(tk)) !== null && _b !== void 0 ? _b : 0) && our > 0)
                v += 1 + cityPopWeight * ((_c = cityPopAt.get(tk)) !== null && _c !== void 0 ? _c : 0);
        return v;
    };
    const orders = [];
    for (let gi = 0; gi < ours.length; gi++) {
        if (Date.now() > ctx.deadlineMs - 500)
            break; // safety: bail before the hard kill
        const gen = ours[gi];
        // Evaluate each safe first move by rolling out `depth` turns with the greedy policy.
        const evalFirstMove = (fx, fy) => {
            const units = ours.map((g, i) => ({ x: i === gi ? fx : g.x, y: i === gi ? fy : g.y, s: g.totalUnits }));
            for (let step = 1; step < depth; step++) {
                for (let i = 0; i < units.length; i++)
                    greedyStep(units, i);
                for (const u of units)
                    u.s *= growth;
            }
            return totalCoverage(units);
        };
        let best;
        let bestScore = evalFirstMove(gen.x, gen.y);
        for (const n of neighborsOf(gen.x, gen.y)) {
            if (unsafeFor(gen.totalUnits, n.x, n.y))
                continue;
            const sc = evalFirstMove(n.x, n.y);
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
 /* _JS_SOURCE_HASH = "b2616ac70756564ac2b937181f9cf73d41e74c0c22c0fbca71ec6ed558047469"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts","loaded":true,"sourceSHA256":"c9ef5e8b28aeecd72cb30fb5aa16f5ac065fcaa7b7613e51901d903c2e881189","size":44900,"version":1,"evalStartTime":1782298135899.01,"evalEndTime":1782298135899.04,"allowclient":true,"hotreload":true}, moduleFnc: (function evalCoarse_ts(exports, require, module, __filename, __dirname) { "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule && mod.default) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
const boardFeatures_1 = require("../boardFeatures");
const evalWeights_json_1 = __importDefault(require("../evalWeights.json"));
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// evalCoarse — evaluation-based lookahead with COARSE simulation.
//
// Idea (per the design brief): instead of greedy 1-step coverage, pick each general's target by
// projecting the whole board a few steps forward at HIGH movement speed — so a handful of steps
// approximates many turns of marching — and scoring the resulting position with a board-evaluation
// function that rewards holding our own territory AND denying/containing the enemy's (net dominated
// land, population-weighted), plus capturable cities. The forward policy: every general heads to a
// cheap strategic target (nearest takeable enemy/neutral city, else the nearest enemy stack to
// engage/contain); the general under evaluation is forced to the candidate target. Deterministic for
// now; weights are config knobs so they can later be fit to win outcomes.
//
// config: falloff, radius, coarseSpeed, steps, growth, containWeight, cityWeight, cityPopWeight,
// lookRange, threatMargin, hardAvoid.
(0, registry_1.registerStrategy)("evalCoarse", (snapshot, ctx) => {
    var _a, _b;
    const cfg = ctx.config;
    const falloff = num(cfg.falloff, 6);
    const radius = num(cfg.radius, 6);
    const coarseSpeed = Math.max(1, num(cfg.coarseSpeed, 4));
    const steps = Math.max(1, Math.round(num(cfg.steps, 3)));
    const growth = num(cfg.growth, 1.1);
    const containWeight = num(cfg.containWeight, 1.0);
    const cityWeight = num(cfg.cityWeight, 10);
    const cityPopWeight = num(cfg.cityPopWeight, 0.02);
    const lookRange = num(cfg.lookRange, 6);
    const threatMargin = num(cfg.threatMargin, 1.3);
    const hardAvoid = cfg.hardAvoid !== false;
    const learned = cfg.learned === true; // use the fitted value function instead of the hand eval
    // Coarse combat in the projection (so army share — the top win predictor — actually responds to
    // moves): a stack within combat range of a STRONGER enemy bleeds `combatLoss`; the stronger side
    // pays a small `winnerCost`. Weak stacks melt near strong enemies = positioning/containment shows
    // up in the eval.
    const combatLoss = num(cfg.combatLoss, 0.3);
    const winnerCost = num(cfg.winnerCost, 0.05);
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const s = terrainSpeeds[t.terrainType];
        if (s && s > 0)
            tileSet.add(key(t.x, t.y));
    }
    const passable = (x, y) => tileSet.has(key(x, y));
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (passable(nx, ny) && (0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        return out;
    };
    const inf = (s, d) => s / Math.pow(d + 1, falloff);
    const ours = generals.filter(g => g.factionId === factionId);
    if (ours.length === 0)
        return (0, growthPolicy_1.withGrowth)(snapshot, cfg, []);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const cityPopAt = new Map();
    for (const c of cities)
        cityPopAt.set(key(c.x, c.y), (_a = c.population) !== null && _a !== void 0 ? _a : 0);
    const otherCities = cities.filter(c => c.factionId !== factionId);
    // Tiles we bother scoring: those within `radius` of any general (everything else is empty/neutral
    // and contributes nothing to either side). Fixed up-front to bound cost.
    const relevant = [];
    {
        const seen = new Set();
        for (const g of generals) {
            for (const t of tiles) {
                if ((0, aiPlanner_1.hexDistance)(t, g) > radius)
                    continue;
                const tk = key(t.x, t.y);
                if (seen.has(tk))
                    continue;
                seen.add(tk);
                relevant.push({ x: t.x, y: t.y, w: 1 + cityPopWeight * ((_b = cityPopAt.get(tk)) !== null && _b !== void 0 ? _b : 0) });
            }
        }
    }
    const baseUnits = generals.map(g => ({ x: g.x, y: g.y, s: g.totalUnits, faction: g.factionId, id: g.id }));
    // Cheap strategic target for a unit: nearest enemy/neutral city it currently out-garrisons, else
    // the nearest enemy stack (to engage / contain it), else hold.
    const defaultTarget = (u, units) => {
        let bestCity;
        let bestCityD = Infinity;
        for (const c of cities) {
            if (c.factionId === u.faction)
                continue;
            if (u.s <= c.garrison)
                continue;
            const d = (0, aiPlanner_1.hexDistance)(u, c);
            if (d < bestCityD) {
                bestCityD = d;
                bestCity = c;
            }
        }
        let bestEnemy;
        let bestEnemyD = Infinity;
        for (const v of units) {
            if (v.faction === u.faction)
                continue;
            const d = (0, aiPlanner_1.hexDistance)(u, v);
            if (d < bestEnemyD) {
                bestEnemyD = d;
                bestEnemy = v;
            }
        }
        if (bestCity && (!bestEnemy || bestCityD <= bestEnemyD + 3))
            return bestCity;
        if (bestEnemy)
            return bestEnemy;
        return { x: u.x, y: u.y };
    };
    const stepToward = (u, tgt, speed) => {
        for (let i = 0; i < speed; i++) {
            if (u.x === tgt.x && u.y === tgt.y)
                return;
            let best;
            let bestD = (0, aiPlanner_1.hexDistance)(u, tgt);
            for (const n of neighborsOf(u.x, u.y)) {
                const d = (0, aiPlanner_1.hexDistance)(n, tgt);
                if (d < bestD) {
                    bestD = d;
                    best = n;
                }
            }
            if (!best)
                return;
            u.x = best.x;
            u.y = best.y;
        }
    };
    const applyCombat = (units) => {
        const sBefore = units.map(u => u.s);
        for (let i = 0; i < units.length; i++) {
            let maxEnemy = 0;
            for (let j = 0; j < units.length; j++) {
                if (units[j].faction === units[i].faction)
                    continue;
                const range = Math.max(combatDist(sBefore[i]), combatDist(sBefore[j]));
                if ((0, aiPlanner_1.hexDistance)(units[i], units[j]) <= range && sBefore[j] > maxEnemy)
                    maxEnemy = sBefore[j];
            }
            if (maxEnemy <= 0)
                continue;
            units[i].s *= maxEnemy > sBefore[i] ? (1 - combatLoss) : (1 - winnerCost);
        }
    };
    const project = (overrideId, overrideTarget) => {
        const units = baseUnits.map(u => ({ ...u }));
        for (let s = 0; s < steps; s++) {
            for (const u of units) {
                const tgt = u.id === overrideId ? overrideTarget : defaultTarget(u, units);
                stepToward(u, tgt, coarseSpeed);
            }
            applyCombat(units);
            for (const u of units)
                u.s *= growth;
        }
        return units;
    };
    // Net population-weighted territory we'd dominate minus what the enemy dominates (containment).
    const evalBoard = (units) => {
        let score = 0;
        for (const t of relevant) {
            let our = 0, rival = 0;
            for (const u of units) {
                const d = (0, aiPlanner_1.hexDistance)(t, u);
                if (d > radius)
                    continue;
                const v = inf(u.s, d);
                if (u.faction === factionId)
                    our += v;
                else if (v > rival)
                    rival = v;
            }
            if (our > rival && our > 0)
                score += t.w;
            else if (rival > our && rival > 0)
                score -= containWeight * t.w;
        }
        // Reward capturable enemy/neutral cities our nearest stack can take.
        for (const c of otherCities) {
            let canTake = false;
            for (const u of units) {
                if (u.faction === factionId && (0, aiPlanner_1.hexDistance)(u, c) <= 1 && u.s > c.garrison) {
                    canTake = true;
                    break;
                }
            }
            if (canTake)
                score += cityWeight;
        }
        return score;
    };
    // Learned value function: score the projected board via the fitted feature weights. Cities get a
    // coarse capture (a stronger adjacent unit takes them) so the city-share feature responds to moves.
    const projectedCities = (units) => otherCities.concat(cities.filter(c => c.factionId === factionId)).map(c => {
        let owner = c.factionId;
        let bestS = c.garrison;
        for (const u of units) {
            if ((0, aiPlanner_1.hexDistance)(u, c) <= 1 && u.s > bestS) {
                bestS = u.s;
                owner = u.faction;
            }
        }
        return { x: c.x, y: c.y, faction: owner };
    });
    const featTiles = relevant.map(t => ({ x: t.x, y: t.y, w: t.w }));
    const evalBoardLearned = (units) => {
        const features = (0, boardFeatures_1.computeBoardFeatures)({
            units: units.map(u => ({ x: u.x, y: u.y, s: u.s, faction: u.faction })),
            cities: projectedCities(units),
            tiles: featTiles,
            falloff,
            radius,
        }, factionId);
        return (0, boardFeatures_1.scoreFeatures)(features, evalWeights_json_1.default.weights);
    };
    const scoreBoard = learned ? evalBoardLearned : evalBoard;
    const unsafe = (S, x, y) => {
        for (const e of enemyGenerals) {
            if (e.totalUnits <= S * threatMargin)
                continue;
            if ((0, aiPlanner_1.hexDistance)({ x, y }, e) <= combatDist(e.totalUnits) + 1)
                return true;
        }
        return false;
    };
    // Candidate targets for a general: hold, the 8 directional probes at lookRange, and nearby
    // enemy/neutral cities. Filtered to passable + (under hardAvoid) safe.
    const candidatesFor = (g) => {
        const out = [{ x: g.x, y: g.y }];
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
        for (const [dx, dy] of dirs) {
            const tx = g.x + dx * lookRange, ty = g.y + dy * lookRange;
            if (passable(tx, ty))
                out.push({ x: tx, y: ty });
        }
        for (const c of otherCities) {
            if ((0, aiPlanner_1.hexDistance)(g, c) <= lookRange + 4)
                out.push({ x: c.x, y: c.y });
        }
        return out.filter(p => !hardAvoid || (p.x === g.x && p.y === g.y) || !unsafe(g.totalUnits, p.x, p.y));
    };
    const orders = [];
    for (const g of ours) {
        if (Date.now() > ctx.deadlineMs - 500)
            break; // cooperative deadline
        let bestTarget;
        let bestScore = -Infinity;
        for (const cand of candidatesFor(g)) {
            const sc = scoreBoard(project(g.id, cand));
            if (sc > bestScore) {
                bestScore = sc;
                bestTarget = cand;
            }
        }
        if (bestTarget && (bestTarget.x !== g.x || bestTarget.y !== g.y)) {
            orders.push({ generalId: g.id, targetPosition: bestTarget });
        }
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "f8f14d3a740c742e9aa7becdfbab8e1541b386c06597decff9e96b9fa0112076"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/boardFeatures.ts", filename: "/root/generals-build/src/gameUI2/ai/boardFeatures.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/boardFeatures.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/boardFeatures.ts","loaded":true,"sourceSHA256":"2570a6bccadb9a72c0ce44329793175744bc1099043218fd03c5c152962c5cd4","size":11199,"version":1,"evalStartTime":1782298135899.02,"evalEndTime":1782298135899.03,"allowclient":true,"hotreload":true}, moduleFnc: (function boardFeatures_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.scoreFeatures = exports.computeBoardFeatures = exports.FEATURE_NAMES = void 0;
// Worker-safe (no engine/mobx/preact imports). Board features for predicting WHICH FACTION WINS,
// computed from a positions+strengths config so the SAME function scores both real game states (when
// fitting weights from sim outcomes) and the AI's projected lookahead states (evalCoarse). Keeping
// them identical is what lets a value function learned from "what states win" drive the search.
const aiPlanner_1 = require("./aiPlanner");
// Order matters — weights line up positionally. [0] is the bias term.
exports.FEATURE_NAMES = ["bias", "domAdvantage", "ourDomShare", "armyShare", "cityShare", "frontierShare", "landPerArmy"];
function computeBoardFeatures(cfg, factionId) {
    const { units, cities, tiles, falloff, radius } = cfg;
    let ourDom = 0, enemyDom = 0, total = 0;
    for (const t of tiles) {
        let our = 0, rival = 0;
        for (const u of units) {
            const d = (0, aiPlanner_1.hexDistance)(t, u);
            if (d > radius)
                continue;
            const v = u.s / Math.pow(d + 1, falloff);
            if (u.faction === factionId)
                our += v;
            else if (v > rival)
                rival = v;
        }
        total += t.w;
        if (our > rival && our > 0)
            ourDom += t.w;
        else if (rival > our && rival > 0)
            enemyDom += t.w;
    }
    const ourDomShare = total > 0 ? ourDom / total : 0;
    const domAdvantage = total > 0 ? (ourDom - enemyDom) / total : 0;
    let ourArmy = 0, totalArmy = 0;
    for (const u of units) {
        totalArmy += u.s;
        if (u.faction === factionId)
            ourArmy += u.s;
    }
    const armyShare = totalArmy > 0 ? ourArmy / totalArmy : 0;
    let ourCities = 0;
    for (const c of cities)
        if (c.faction === factionId)
            ourCities++;
    const cityShare = cities.length > 0 ? ourCities / cities.length : 0;
    let frontArmy = 0;
    for (const u of units) {
        if (u.faction !== factionId)
            continue;
        let near = false;
        for (const v of units) {
            if (v.faction !== factionId && (0, aiPlanner_1.hexDistance)(u, v) <= radius) {
                near = true;
                break;
            }
        }
        if (near)
            frontArmy += u.s;
    }
    const frontierShare = ourArmy > 0 ? frontArmy / ourArmy : 0;
    const landPerArmy = ourArmy > 0 ? ourDom / ourArmy : 0; // territory per unit — sustainability proxy
    return [1, domAdvantage, ourDomShare, armyShare, cityShare, frontierShare, landPerArmy];
}
exports.computeBoardFeatures = computeBoardFeatures;
function scoreFeatures(features, weights) {
    let s = 0;
    const n = Math.min(features.length, weights.length);
    for (let i = 0; i < n; i++)
        s += features[i] * weights[i];
    return s;
}
exports.scoreFeatures = scoreFeatures;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "04a46b26ea1078d4003e09f8bc9b885d5581a73317c2d57b4c89e6897fd2cbe8"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/evalWeights.json", filename: "/root/generals-build/src/gameUI2/ai/evalWeights.json", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/evalWeights.json","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/evalWeights.json","loaded":true,"allowclient":true,"hotreload":true}, moduleFnc: (function evalWeights_json(exports, require, module, __filename, __dirname) { /* No contents */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/expandFlow.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/expandFlow.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/expandFlow.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/expandFlow.ts","loaded":true,"sourceSHA256":"5fc880ab692a8f6deb4fdd37503898088795dc494ce422e4195408387428c81c","size":31455,"version":1,"evalStartTime":1782298135900,"evalEndTime":1782298135900.01,"allowclient":true,"hotreload":true}, moduleFnc: (function expandFlow_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
// Expansion / flow-field movement — the NON-GREEDY replacement for `dominion`'s 1-step hill-climb.
//
// dominion only looks at a general's 6 neighbours and moves only if a neighbour STRICTLY raises its
// current dominated-tile count; once it sits on a local maximum it holds forever (measured: generals
// were 77-90% idle), so generals never march toward distant open territory. This strategy instead
// gives every general a LONG-RANGE GOAL:
//   1. Domination: tile is "ours" if our influence (strength/(d+1)^falloff, summed over our generals)
//      beats every rival's there. Build a desirability D(tile) = how much currently-un-dominated
//      valuable territory a general standing on `tile` would cover (its influence disk).
//   2. Influence-aware pathfinding: BFS each general over the safe passable graph and send it toward
//      the reachable tile maximising D - travelCost*distance (and capturable-city bonus). It commits
//      to a far objective and steps one hex along the shortest path — so it actually crosses the map
//      to claim open ground instead of idling.
//   3. Anti-overlap: assign generals largest-first; once one claims a region, later generals are
//      penalised for targeting the same area, so the faction fans out instead of clumping.
// Refuses to step within a stronger stack's reach (hardAvoid), like dominion.
//
// config: falloff, radius, threatMargin, hardAvoid, travelCost, captureBonus, ownBias, overlapWeight,
// plus growthPolicy's knobs.
(0, registry_1.registerStrategy)("expandFlow", (snapshot, ctx) => {
    var _a, _b;
    const cfg = ctx.config;
    const falloff = num(cfg.falloff, 6);
    const radius = num(cfg.radius, 5);
    const threatMargin = num(cfg.threatMargin, 1.3);
    const hardAvoid = cfg.hardAvoid !== false; // default ON
    const travelCost = num(cfg.travelCost, 0.6); // covered-tiles forfeited per hex of travel
    const captureBonus = num(cfg.captureBonus, 20);
    const ownBias = num(cfg.ownBias, 1.0);
    const overlapWeight = num(cfg.overlapWeight, 0.5); // anti-clumping penalty near already-claimed regions
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const s = terrainSpeeds[t.terrainType];
        if (s && s > 0)
            tileSet.add(key(t.x, t.y));
    }
    const passable = tiles.filter(t => tileSet.has(key(t.x, t.y)));
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (tileSet.has(key(nx, ny)) && (0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        return out;
    };
    const inf = (strength, d) => strength / Math.pow(d + 1, falloff);
    const ours = generals.filter(g => g.factionId === factionId);
    const enemies = generals.filter(g => g.factionId !== factionId);
    const capturable = new Map(cities.filter(c => c.factionId !== factionId).map(c => [key(c.x, c.y), c]));
    // Domination per tile: our summed influence vs the strongest rival's. A tile we don't yet
    // dominate is worth claiming.
    const valueByTile = new Map();
    for (const t of passable) {
        const tk = key(t.x, t.y);
        let rival = 0, ourSum = 0;
        for (const g of generals) {
            const d = (0, aiPlanner_1.hexDistance)(t, g);
            if (d > radius)
                continue;
            const v = inf(g.totalUnits, d);
            if (g.factionId === factionId)
                ourSum += v;
            else if (v > rival)
                rival = v;
        }
        const oursDominated = ourSum > rival * ownBias && ourSum > 0;
        // Worth of claiming this tile this turn (0 if we already hold it). Capturable cities are worth
        // much more than open land.
        let worth = oursDominated ? 0 : 1;
        if (capturable.has(tk))
            worth += captureBonus;
        valueByTile.set(tk, worth);
    }
    // Desirability of STANDING on a tile = the un-claimed worth within its influence disk. Box scan
    // (2r+1)^2 around each center, filtered to hex distance <= radius.
    const desirability = (cx, cy, claimedCenters) => {
        let sum = 0;
        for (let x = cx - radius; x <= cx + radius; x++)
            for (let y = cy - radius; y <= cy + radius; y++) {
                const tk = key(x, y);
                const w = valueByTile.get(tk);
                if (!w)
                    continue;
                if ((0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, { x, y }) > radius)
                    continue;
                sum += w;
            }
        // Anti-overlap: discount tiles near a region another general already committed to.
        let penalty = 0;
        for (const c of claimedCenters) {
            const d = (0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, c);
            if (d < radius * 2)
                penalty += overlapWeight * (radius * 2 - d);
        }
        return sum - penalty;
    };
    // A tile is unsafe if a stronger enemy stack could reach us there.
    const unsafeFor = (cx, cy, S) => {
        for (const e of enemies) {
            if (e.totalUnits <= S * threatMargin)
                continue;
            if ((0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e) <= combatDist(e.totalUnits) + 1)
                return true;
        }
        return false;
    };
    const orders = [];
    const claimedCenters = [];
    // Largest stacks choose objectives first (they cover more and should get the prime regions).
    for (const gen of [...ours].sort((a, b) => b.totalUnits - a.totalUnits)) {
        const S = gen.totalUnits;
        // BFS over the safe passable graph from this general, tracking travel distance + parent so we
        // can both score reachable tiles and recover the first step toward the chosen objective.
        const dist = new Map();
        const parent = new Map();
        const start = key(gen.x, gen.y);
        dist.set(start, 0);
        const queue = [{ x: gen.x, y: gen.y }];
        let qi = 0;
        while (qi < queue.length) {
            const cur = queue[qi++];
            const cd = (_a = dist.get(key(cur.x, cur.y))) !== null && _a !== void 0 ? _a : 0;
            for (const n of neighborsOf(cur.x, cur.y)) {
                const nk = key(n.x, n.y);
                if (dist.has(nk))
                    continue;
                // Never path a step into a tile a stronger stack can fight us on (when hardAvoid).
                if (hardAvoid && unsafeFor(n.x, n.y, S))
                    continue;
                dist.set(nk, cd + 1);
                parent.set(nk, key(cur.x, cur.y));
                queue.push(n);
            }
        }
        // Pick the reachable objective with the best desirability net of travel.
        let bestKey = start;
        let bestScore = desirability(gen.x, gen.y, claimedCenters);
        for (const [tk, d] of dist) {
            const [xs, ys] = tk.split(",");
            const x = +xs, y = +ys;
            let score = desirability(x, y, claimedCenters) - travelCost * d;
            const city = capturable.get(tk);
            if (city && S > city.garrison)
                score += captureBonus; // standing on a city we can take
            if (score > bestScore) {
                bestScore = score;
                bestKey = tk;
            }
        }
        // Record the claimed region so the next general fans out elsewhere.
        const [bx, by] = bestKey.split(",");
        claimedCenters.push({ x: +bx, y: +by });
        if (bestKey === start)
            continue; // already on the best objective — hold
        // Recover the first hop along the shortest path to the objective.
        let step = bestKey;
        while (((_b = parent.get(step)) !== null && _b !== void 0 ? _b : start) !== start) {
            const p = parent.get(step);
            if (!p)
                break;
            step = p;
        }
        const [sx, sy] = step.split(",");
        orders.push({ generalId: gen.id, targetPosition: { x: +sx, y: +sy } });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "57a64cce6070adc031ba998e8d6d881920d722946fb8859b313da3f62d43d85f"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/mcGoal.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/mcGoal.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/mcGoal.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/mcGoal.ts","loaded":true,"sourceSHA256":"156261ee7ff69f40c1d8d80e7d4f821506d508a2c93aca5c282e6b7ef26fa382","size":34653,"version":1,"evalStartTime":1782298135900.02,"evalEndTime":1782298135900.03,"allowclient":true,"hotreload":true}, moduleFnc: (function mcGoal_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const growthPolicy_1 = require("../growthPolicy");
const registry_1 = require("./registry");
function combatDist(count) {
    return Math.ceil(Math.log10(count + 1)) + 0.5;
}
// Goal-sampling search — the "what if I went there?" AI. Greedy/neighbour search can't discover a
// distant objective (e.g. "march down and take the Mediterranean") because no single step improves
// the board yet. Instead, for each general we SAMPLE many candidate destinations across the whole
// reachable map (random tiles + every capturable city + holding still), and for each one score the
// board AS IF that general controlled that spot: how much territory our faction would dominate with
// the general's influence projected there (grown for the travel time), minus a small travel cost and
// an anti-overlap penalty so generals spread to different objectives. We then step one hex along the
// shortest path toward the best-scoring destination — and re-plan every turn (receding horizon).
// Enemies are treated as static over the short horizon; we refuse to path into a stronger stack.
//
// config: falloff, radius, threatMargin, hardAvoid, samples, travelCost, cityPopWeight, ownBias,
// overlapWeight, growth, growthHorizon (+ growthPolicy knobs).
(0, registry_1.registerStrategy)("mcGoal", (snapshot, ctx) => {
    var _a, _b, _c, _d, _e;
    const cfg = ctx.config;
    const falloff = num(cfg.falloff, 6);
    const radius = num(cfg.radius, 5);
    const threatMargin = num(cfg.threatMargin, 1.6);
    const hardAvoid = cfg.hardAvoid !== false;
    const samples = Math.max(1, Math.round(num(cfg.samples, 200)));
    const travelCost = num(cfg.travelCost, 0.4);
    const cityPopWeight = num(cfg.cityPopWeight, 0.02);
    const ownBias = num(cfg.ownBias, 1.0);
    const overlapWeight = num(cfg.overlapWeight, 0.5);
    const growth = num(cfg.growth, 1.1);
    const growthHorizon = num(cfg.growthHorizon, 6);
    const { factionId, tiles, terrainSpeeds, generals, cities } = snapshot;
    const key = (x, y) => `${x},${y}`;
    const tileSet = new Set();
    for (const t of tiles) {
        const s = terrainSpeeds[t.terrainType];
        if (s && s > 0)
            tileSet.add(key(t.x, t.y));
    }
    const neighborsOf = (x, y) => {
        const out = [];
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0)
                    continue;
                const nx = x + dx, ny = y + dy;
                if (tileSet.has(key(nx, ny)) && (0, aiPlanner_1.hexDistance)({ x, y }, { x: nx, y: ny }) === 1)
                    out.push({ x: nx, y: ny });
            }
        return out;
    };
    const inf = (strength, d) => strength / Math.pow(d + 1, falloff);
    const ours = generals.filter(g => g.factionId === factionId);
    const enemies = generals.filter(g => g.factionId !== factionId);
    const capturable = new Map(cities.filter(c => c.factionId !== factionId).map(c => [key(c.x, c.y), c]));
    const cityPop = new Map(tiles.map(t => [key(t.x, t.y), 0]));
    for (const c of cities)
        cityPop.set(key(c.x, c.y), (_a = c.population) !== null && _a !== void 0 ? _a : 0);
    // Static fields: strongest rival influence per tile, and our faction's TOTAL influence per tile.
    const rivalMax = new Map();
    const ourTotal = new Map();
    for (const t of tiles) {
        const tk = key(t.x, t.y);
        let rival = 0, ourSum = 0;
        for (const g of generals) {
            const d = (0, aiPlanner_1.hexDistance)(t, g);
            if (d > radius)
                continue;
            const v = inf(g.totalUnits, d);
            if (g.factionId === factionId)
                ourSum += v;
            else if (v > rival)
                rival = v;
        }
        rivalMax.set(tk, rival);
        ourTotal.set(tk, ourSum);
    }
    const unsafeFor = (cx, cy, S) => {
        for (const e of enemies) {
            if (e.totalUnits <= S * threatMargin)
                continue;
            if ((0, aiPlanner_1.hexDistance)({ x: cx, y: cy }, e) <= combatDist(e.totalUnits) + 1)
                return true;
        }
        return false;
    };
    const orders = [];
    const claimed = [];
    // Biggest stacks pick objectives first (they cover the most and should claim the prime ground).
    for (const gen of [...ours].sort((a, b) => b.totalUnits - a.totalUnits)) {
        const S = gen.totalUnits;
        const genCurrent = { x: gen.x, y: gen.y };
        // Our faction influence EXCLUDING this general — the fixed backdrop we project the general onto.
        const baseExcl = new Map();
        for (const t of tiles) {
            const tk = key(t.x, t.y);
            baseExcl.set(tk, ((_b = ourTotal.get(tk)) !== null && _b !== void 0 ? _b : 0) - inf(S, (0, aiPlanner_1.hexDistance)(t, genCurrent)));
        }
        // BFS over the safe passable graph: travel distance + parent (to recover the first step).
        const dist = new Map();
        const parent = new Map();
        dist.set(key(gen.x, gen.y), 0);
        const queue = [genCurrent];
        let qi = 0;
        while (qi < queue.length) {
            const cur = queue[qi++];
            const cd = (_c = dist.get(key(cur.x, cur.y))) !== null && _c !== void 0 ? _c : 0;
            for (const n of neighborsOf(cur.x, cur.y)) {
                const nk = key(n.x, n.y);
                if (dist.has(nk))
                    continue;
                if (hardAvoid && unsafeFor(n.x, n.y, S))
                    continue;
                dist.set(nk, cd + 1);
                parent.set(nk, key(cur.x, cur.y));
                queue.push(n);
            }
        }
        const reachable = [...dist.keys()];
        // NEW territory this general would win by being at (px,py): tiles it FLIPS to ours (our other
        // generals don't already dominate them). Counting only the marginal gain — not total coverage —
        // is what makes a destination in open/contested ground beat sitting inside our own territory.
        const scoreAt = (px, py, sp) => {
            var _a, _b, _c;
            let gained = 0;
            for (let x = px - radius; x <= px + radius; x++)
                for (let y = py - radius; y <= py + radius; y++) {
                    const tk = key(x, y);
                    if (!tileSet.has(tk))
                        continue;
                    const d = (0, aiPlanner_1.hexDistance)({ x: px, y: py }, { x, y });
                    if (d > radius)
                        continue;
                    const rival = ((_a = rivalMax.get(tk)) !== null && _a !== void 0 ? _a : 0) * ownBias;
                    const base = (_b = baseExcl.get(tk)) !== null && _b !== void 0 ? _b : 0;
                    if (base > rival && base > 0)
                        continue; // already ours via another general — no gain
                    const our = base + inf(sp, d);
                    if (our > rival && our > 0)
                        gained += 1 + cityPopWeight * ((_c = cityPop.get(tk)) !== null && _c !== void 0 ? _c : 0);
                }
            return gained;
        };
        // Candidate destinations: hold + every reachable capturable city + a random sample of the map.
        const candidateKeys = new Set([key(gen.x, gen.y)]);
        for (const ck of capturable.keys())
            if (dist.has(ck))
                candidateKeys.add(ck);
        for (let i = 0; i < samples && reachable.length > 0; i++) {
            candidateKeys.add(reachable[Math.floor(Math.random() * reachable.length)]);
        }
        let bestKey = key(gen.x, gen.y);
        let bestScore = -Infinity;
        for (const ck of candidateKeys) {
            const d = (_d = dist.get(ck)) !== null && _d !== void 0 ? _d : 0;
            const [xs, ys] = ck.split(",");
            const px = +xs, py = +ys;
            const sp = S * Math.pow(growth, Math.min(growthHorizon, d));
            let score = scoreAt(px, py, sp) - travelCost * d;
            const city = capturable.get(ck);
            if (city && S > city.garrison)
                score += 1; // bonus for being able to take a city outright
            for (const c of claimed) {
                const cd = (0, aiPlanner_1.hexDistance)({ x: px, y: py }, c);
                if (cd < radius * 2)
                    score -= overlapWeight * (radius * 2 - cd);
            }
            if (score > bestScore) {
                bestScore = score;
                bestKey = ck;
            }
        }
        const [bx, by] = bestKey.split(",");
        claimed.push({ x: +bx, y: +by });
        if (bestKey === key(gen.x, gen.y))
            continue; // already on the best objective — hold
        // First hop along the shortest path to the chosen objective.
        let step = bestKey;
        const start = key(gen.x, gen.y);
        while (((_e = parent.get(step)) !== null && _e !== void 0 ? _e : start) !== start) {
            const p = parent.get(step);
            if (!p)
                break;
            step = p;
        }
        const [sx, sy] = step.split(",");
        orders.push({ generalId: gen.id, targetPosition: { x: +sx, y: +sy } });
    }
    return (0, growthPolicy_1.withGrowth)(snapshot, cfg, orders);
});
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "7d32dee6ff6365dffbeccea8cf306c2c77b6e857ff3a9e1ce045397decca93c8"; */
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

;globalThis.__BUNDLE_HASH__ = "a6d2ac0a19fddb740b661485a94096cf41ff15a4ead47636baf6d3eb45e33e2e";;(function bundleRequire(config) {
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
;globalThis.require("/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts");
;});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGlsZURpckZsYWdzLnRzIiwiY29tcGlsZVJlY29yZE1vZHVsZVJlcXVpcmVzLnRzIiwiYnVuZGxlci50cyIsImJ1bmRsZVJlcXVpcmUudHMiLCJidW5kbGVXcmFwcGVyLnRzIiwiY2FjaGluZy50cyIsIm1pc2MudHMiLCJ0eXBlcy50cyIsImZvcm1hdC50cyIsInNvdXJjZU1hcHMudHMiLCJhaVdvcmtlckVudHJ5LnRzIiwiaW5kZXgudHMiLCJiZWVsaW5lLnRzIiwiYWlQbGFubmVyLnRzIiwiZ3Jvd3RoUG9saWN5LnRzIiwicmVnaXN0cnkudHMiLCJncmVlZHlDaXR5LnRzIiwiY29uc29saWRhdGUudHMiLCJmb2N1c0ZpcmUudHMiLCJmb2N1c1dlYWtlc3RGYWN0aW9uLnRzIiwibW9udGVDYXJsby50cyIsInRocmVhdEF3YXJlLnRzIiwiaW5mbHVlbmNlTWFwLnRzIiwidGVycml0b3J5LnRzIiwic25vd2JhbGwudHMiLCJjb29yZGluYXRlLnRzIiwiZG9taW5pb24udHMiLCJkb21pbmlvbkZyb250LnRzIiwiZG9taW5pb25TcGxpdC50cyIsImRvbWluaW9uU3BsaXQyLnRzIiwiZXZhbEdyZWVkeS50cyIsInJvbGxvdXQudHMiLCJldmFsQ29hcnNlLnRzIiwiYm9hcmRGZWF0dXJlcy50cyIsImV4cGFuZEZsb3cudHMiLCJtY0dvYWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgICAgIExvb2tzIGZvciBhZGphY2VudCB4LmZsYWcgZmlsZXMsIHNldHRpbmcgYW4geCBmbGFnIG9uIHRoZSBtb2R1bGUgaWYgdGhleSBleGlzdC5cbiAqICAgICAgLSBBbHNvIGNoZWNrcyBwYXJlbnQgZGlyZWN0b3JpZXNcbiAqIFxuICogICAgICAtIEV4LCBpZiB0ZXN0LmpzIGhhcyBhIHNpYmxpbmcgZmlsZSBjYWxsZWQgYWxsb3djbGllbnQuZmxhZywgdGhlbiB0aGUgdGVzdC5qc1xuICogICAgICAgICAgbW9kdWxlIGhhcyBhbGxvd2NsaWVudCA9IHRydWUgc2V0IG9uIGl0LlxuICovXG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG4vLyBOT1RFOiBOb3QgdXNpbmcgaW1wb3J0LCBhcyB0aGUgdHlwZXMgY29tcGxhaW4gYWJvdXQgd2hhdCB3ZSBhcmUgZG9pbmcgdG9vIG11Y2guXG5jb25zdCBNb2R1bGUgPSByZXF1aXJlKFwibW9kdWxlXCIpO1xuXG4vLyBXZSBuZWVkIGF0IGxlYXN0IDEgZXhwb3J0LCB0byBmb3JjZSB0aGlzIHRvIGJlIHRyZWF0ZWQgbGlrZSBhIG1vZHVsZVxuZXhwb3J0IGNvbnN0IGZvcmNlTW9kdWxlID0gdHJ1ZTtcblxubGV0IGZsYWdzUGVyRGlyOiB7IFtkaXJuYW1lOiBzdHJpbmddOiB7IFtmbGFnOiBzdHJpbmddOiB0cnVlIH0gfSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBnZXRGbGFnc0ZvckRpcihkaXI6IHN0cmluZykge1xuICAgIGxldCBmbGFncyA9IGZsYWdzUGVyRGlyW2Rpcl07XG4gICAgaWYgKCFmbGFncykge1xuICAgICAgICBmbGFncyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGZsYWdzUGVyRGlyW2Rpcl0gPSBmbGFncztcbiAgICAgICAgbGV0IGZpbGVzSW5EaXI6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmlsZXNJbkRpciA9IGZzLnJlYWRkaXJTeW5jKGRpcik7XG4gICAgICAgIH0gY2F0Y2ggeyB9XG4gICAgICAgIGlmIChmaWxlc0luRGlyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBmbGFnIG9mIGZpbGVzSW5EaXIuZmlsdGVyKHggPT4geC5lbmRzV2l0aChcIi5mbGFnXCIpKSkge1xuICAgICAgICAgICAgICAgIGZsYWdzW2ZsYWcuc2xpY2UoMCwgLVwiLmZsYWdcIi5sZW5ndGgpXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsYWdzO1xufVxuXG5jb25zdCBiYXNlID0gTW9kdWxlLnByb3RvdHlwZS5sb2FkO1xuTW9kdWxlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHRoaXM6IE5vZGVKUy5Nb2R1bGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gYmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKHRoaXMuZmlsZW5hbWUpIHtcbiAgICAgICAgbGV0IGZsYWdzOiB7IFtmbGFnOiBzdHJpbmddOiB0cnVlIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgIGxldCBkaXJQYXJ0cyA9IHRoaXMuZmlsZW5hbWUucmVwbGFjZSgvXFxcXC9nLCBcIi9cIikuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGlyUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmxhZ3MsIGdldEZsYWdzRm9yRGlyKGRpclBhcnRzLnNsaWNlKDAsIGkpLmpvaW4oXCIvXCIpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGZsYWdzKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBmbGFnc1trZXldO1xuICAgICAgICAgICAgLy8gTk9URTogRG9uJ3Qgc2V0IGZsYWdzIHdoaWNoIGFyZSBFWFBMSUNJVExZIHNldCB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKCh0aGlzIGFzIGFueSlba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAodGhpcyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59OyIsIi8qKlxuICogICAgICBBZGRzIG1vZHVsZS5yZXF1aXJlcywgd2hpY2ggaW5kaWNhdGVzIHRoZSByZXN1bHQgb2YgZXZlcnkgcmVxdWlyZSBwZXIgbW9kdWxlLlxuICovXG5cbi8vIE5PVEU6IE5vdCB1c2luZyBpbXBvcnQsIGFzIHRoZSB0eXBlcyBjb21wbGFpbiBhYm91dCB3aGF0IHdlIGFyZSBkb2luZyB0b28gbXVjaC5cbmNvbnN0IE1vZHVsZSA9IGV2YWwoXCJyZXF1aXJlXCIpKFwibW9kdWxlXCIpO1xuXG4vLyBXZSBuZWVkIGF0IGxlYXN0IDEgZXhwb3J0LCB0byBmb3JjZSB0aGlzIHRvIGJlIHRyZWF0ZWQgbGlrZSBhIG1vZHVsZVxuZXhwb3J0IGNvbnN0IGZvcmNlTW9kdWxlID0gdHJ1ZTtcblxuY29uc3QgYmFzZSA9IE1vZHVsZS5wcm90b3R5cGUucmVxdWlyZTtcbk1vZHVsZS5wcm90b3R5cGUucmVxdWlyZSA9IGZ1bmN0aW9uICh0aGlzOiBOb2RlSlMuTW9kdWxlLCByZXF1ZXN0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlcXVpcmVzID0gdGhpcy5yZXF1aXJlcyB8fCB7fTtcbiAgICB0aGlzLmFzeW5jUmVxdWlyZXMgPSB0aGlzLmFzeW5jUmVxdWlyZXMgfHwge31cbiAgICBpZiAodGhpcy5ldmFsRW5kVGltZSAmJiAhdGhpcy5yZXF1aXJlc1tyZXF1ZXN0XSkge1xuICAgICAgICB0aGlzLmFzeW5jUmVxdWlyZXNbcmVxdWVzdF0gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBOT1RFOiBEb2luZyByZXNvbHZlRmlsZW5hbWUgb24gZXZlcnkgcmVxdWlyZSBicmVha3MgYSBsb3Qgb2YgdGhlIGNhY2hpbmcgTm9kZUpTIGRvZXNcbiAgICAvLyAgdG8gdHJ5IHRvIGF2b2lkIGNhbGxpbmcgcmVzb2x2ZUZpbGVuYW1lLiBIb3dldmVyLi4uIHRoZWlyIGNhY2hpbmcgaXMgcHJvYmFibHkgbm8gbG9uZ2VyXG4gICAgLy8gIG5lZWRlZCBhbnltb3JlLlxuICAgIHRoaXMucmVxdWlyZXNbcmVxdWVzdF0gPSBNb2R1bGUuX3Jlc29sdmVGaWxlbmFtZShyZXF1ZXN0LCB0aGlzLCBmYWxzZSk7XG5cblxuICAgIHJldHVybiBiYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59OyIsImltcG9ydCB7IHNoYTI1NiB9IGZyb20gXCJqcy1zaGEyNTZcIjtcbmltcG9ydCB7IGJ1bmRsZVJlcXVpcmUsIEJ1bmRsZVJlcXVpcmVDb25maWcgfSBmcm9tIFwiLi9idW5kbGVSZXF1aXJlXCI7XG5pbXBvcnQgeyB3cmFwTW9kdWxlIH0gZnJvbSBcIi4vYnVuZGxlV3JhcHBlclwiO1xuaW1wb3J0IHsgYWRkVG9JblByb2dyZXNzU291cmNlTWFwLCBlbmNvZGVTb3VyY2VNYXBMaW5lQ29tbWVudCwgZmluYWxpemVJblByb2dyZXNzU291cmNlTWFwLCBnZXRJblByb2dyZXNzU291cmNlTWFwLCBJblByb2dyZXNzU291cmNlTWFwLCByZW1vdmVTb3VyY2VNYXAgfSBmcm9tIFwiLi9zb3VyY2VNYXBzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidW5kbGUoY29uZmlnOiB7XG4gICAgbW9kdWxlczogKHR5cGVvZiByZXF1aXJlLmNhY2hlW1wiXCJdKVtdO1xuICAgIHJvb3RQYXRoOiBzdHJpbmc7XG4gICAgZW50cnlQb2ludHM6IHN0cmluZ1tdO1xufSk6IFByb21pc2U8e1xuICAgIGJ1bmRsZTogc3RyaW5nO1xufT4ge1xuICAgIGNvbnN0IHsgbW9kdWxlcywgcm9vdFBhdGgsIGVudHJ5UG9pbnRzIH0gPSBjb25maWc7XG5cbiAgICAvLyBOT1RFOiBXZSBDT1VMRCB1c2UgYW4gXCJpbmRleCBzb3VyY2UgbWFwXCIsIHdoaWNoIGNvbnRhaW5zIG90aGVyIHNvdXJjZW1hcHNcbiAgICAvLyAgYW5kIGdpdmVzIG9mZnNldHMgZm9yIHRoZW0uIEhvd2V2ZXIuLi4gdG9vbGluZyBzdXBwb3J0IHdpbGwgaXMgYmV0dGVyXG4gICAgLy8gIGZvciByZWd1bGFyIHNvdXJjZW1hcHMsIGFuZCBpdCdzIG1vcmUgZmxleGlibGUuXG5cbiAgICBsZXQgaW5Qcm9ncmVzc1NvdXJjZU1hcDogSW5Qcm9ncmVzc1NvdXJjZU1hcCA9IHtcbiAgICAgICAgc291cmNlczogW10sXG4gICAgICAgIG1hcHBpbmdzOiBbXSxcbiAgICB9O1xuXG4gICAgbGV0IGNvZGUgPSBcIlwiO1xuICAgIGxldCBjdXJMaW5lQ291bnQgPSAwO1xuICAgIGZvciAobGV0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgIGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuICAgICAgICBsZXQgbmV3Q29kZSA9IHdyYXBNb2R1bGUobW9kdWxlKTtcblxuICAgICAgICBsZXQgeyBzb3VyY2VNYXAsIGNvZGU6IG5ld0NvZGUyIH0gPSByZW1vdmVTb3VyY2VNYXAobmV3Q29kZSk7XG4gICAgICAgIG5ld0NvZGUgPSBuZXdDb2RlMjtcbiAgICAgICAgaWYgKHNvdXJjZU1hcCkge1xuICAgICAgICAgICAgbGV0IGluUHJvZ3Jlc3MgPSBnZXRJblByb2dyZXNzU291cmNlTWFwKHNvdXJjZU1hcCk7XG4gICAgICAgICAgICBmb3IgKGxldCBtYXBwaW5nIG9mIGluUHJvZ3Jlc3MubWFwcGluZ3MpIHtcbiAgICAgICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZExpbmUgKz0gY3VyTGluZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVG9JblByb2dyZXNzU291cmNlTWFwKGluUHJvZ3Jlc3NTb3VyY2VNYXAsIGluUHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSArPSBuZXdDb2RlICsgXCJcXG5cIjtcbiAgICAgICAgY3VyTGluZUNvdW50ICs9IChuZXdDb2RlLm1hdGNoKC9cXG4vZykgfHwgW10pLmxlbmd0aCArIDE7XG4gICAgfVxuICAgIGNvZGUgKz0gXCJcXG4vKiBJbmxpbmVkIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbjogKi9cXG5cIjtcbiAgICBjb2RlICs9IGBcXG47XFxuJHtmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgXCIvYnVmZmVyLmpzXCIpLnRvU3RyaW5nKCl9XFxuO1xcbmA7XG4gICAgY29kZSArPSBgXFxuO2dsb2JhbFRoaXMuX19CVU5ETEVfSEFTSF9fID0gJHtKU09OLnN0cmluZ2lmeShzaGEyNTYoY29kZSkpfTtgO1xuICAgIGxldCBidW5kbGVDb25maWc6IEJ1bmRsZVJlcXVpcmVDb25maWcgPSB7XG4gICAgICAgIHJvb3RQYXRoLFxuICAgIH07XG4gICAgY29kZSArPSBgOygke2J1bmRsZVJlcXVpcmUudG9TdHJpbmcoKX0pKCR7SlNPTi5zdHJpbmdpZnkoYnVuZGxlQ29uZmlnKX0pO2A7XG4gICAgLy8gRGVsYXkgdGhlIGluaXRpYWwgcmVxdWlyZXMsIHNvIG91ciBleHRlbnNpb24gY2FuIGJvb3QgYW5kIHdlIGNhbiBkZWJ1ZyBzdGFydHVwIGVycm9yc1xuICAgIGNvZGUgKz0gXCJcXG47c2V0VGltZW91dCgoKSA9PiB7XCI7XG4gICAgZm9yIChsZXQgZW50cnlQb2ludCBvZiBlbnRyeVBvaW50cykge1xuICAgICAgICBjb2RlICs9IGBcXG47Z2xvYmFsVGhpcy5yZXF1aXJlKCR7SlNPTi5zdHJpbmdpZnkoZW50cnlQb2ludCl9KTtgO1xuICAgIH1cbiAgICBjb2RlICs9IFwiXFxuO30pO1wiO1xuICAgIGNvZGUgKz0gXCJcXG5cIiArIGVuY29kZVNvdXJjZU1hcExpbmVDb21tZW50KGZpbmFsaXplSW5Qcm9ncmVzc1NvdXJjZU1hcChpblByb2dyZXNzU291cmNlTWFwKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVuZGxlOiBjb2RlLFxuICAgIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICB2YXIgX19CVU5ETEVfSEFTSF9fOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QnVuZGxlSGFzaChjb2RlOiBzdHJpbmcpIHtcbiAgICBsZXQgbWF0Y2ggPSBjb2RlLm1hdGNoKC87Z2xvYmFsVGhpcy5fX0JVTkRMRV9IQVNIX18gPSBcIihbXlwiXSspXCI7Lyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWF0Y2hbMV07XG59IiwiaW1wb3J0IHsgU2VyaWFsaXplZE1vZHVsZSB9IGZyb20gXCIuL2J1bmRsZVdyYXBwZXJcIjtcblxuLy8gU2V0cyBnbG9iYWxUaGlzLnJlcXVpcmUgPSAuLi4sIHV0aWxpemluZyByZWdpc3RlcmVkTW9kdWxlcyAoZnJvbSBidW5kbGVXcmFwcGVyLnRzKSB3aGVuIHJlcXVpcmUgaXMgY2FsbGVkXG5leHBvcnQgaW50ZXJmYWNlIEJ1bmRsZVJlcXVpcmVDb25maWcge1xuICAgIHJvb3RQYXRoOiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gYnVuZGxlUmVxdWlyZShjb25maWc6IEJ1bmRsZVJlcXVpcmVDb25maWcpIHtcbiAgICBnbG9iYWxUaGlzLnByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3MgfHwge1xuICAgICAgICBlbnY6IHtcbiAgICAgICAgICAgIE5PREVfRU5WOiBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgdmVyc2lvbnM6IHt9LFxuICAgICAgICBvbjogKCkgPT4geyB9LFxuICAgIH07XG4gICAgLy8gVXNlIHByb2R1Y3Rpb24sIGZvciBjb25zaXN0ZW5jeSAoYW5kIHNvIG1vYnggZG9lc24ndCBicmVhaylcbiAgICBnbG9iYWxUaGlzLnByb2Nlc3MuZW52Lk5PREVfRU5WID0gZ2xvYmFsVGhpcy5wcm9jZXNzLmVudi5OT0RFX0VOViB8fCBcInByb2R1Y3Rpb25cIjtcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLndpbmRvdyA9IChnbG9iYWxUaGlzIGFzIGFueSkud2luZG93IHx8IGdsb2JhbFRoaXM7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5nbG9iYWwgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLmdsb2JhbCB8fCBnbG9iYWxUaGlzO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuc2V0SW1tZWRpYXRlID0gKGdsb2JhbFRoaXMgYXMgYW55KS5zZXRJbW1lZGlhdGUgfHwgZ2xvYmFsVGhpcy5zZXRUaW1lb3V0O1xuXG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5CT09URURfRURHRV9OT0RFID0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IGJ1aWx0SW5Nb2R1bGVFeHBvcnRzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSA9IHtcbiAgICAgICAgd29ya2VyX3RocmVhZHM6IHtcbiAgICAgICAgICAgIGlzTWFpblRocmVhZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXRpbDoge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS91dGlsLmh0bWwjdXRpbF91dGlsX2luaGVyaXRzX2NvbnN0cnVjdG9yX3N1cGVyY29uc3RydWN0b3JcbiAgICAgICAgICAgIGluaGVyaXRzKGNvbnN0cnVjdG9yOiBhbnksIHN1cGVyQ29uc3RydWN0b3I6IGFueSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBUZXh0RGVjb2RlcjogVGV4dERlY29kZXIsXG4gICAgICAgICAgICBUZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1ZmZlcjogeyBCdWZmZXIgfSxcbiAgICAgICAgc3RyZWFtOiB7XG4gICAgICAgICAgICAvLyBIQUNLOiBOZWVkZWQgdG8gZ2V0IFNBWCBKUyB0byB3b3JrIGNvcnJlY3RseS5cbiAgICAgICAgICAgIFN0cmVhbTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgVHJhbnNmb3JtOiBmdW5jdGlvbiAoKSB7IH0sXG5cbiAgICAgICAgICAgIFdyaXRhYmxlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVyczoge1xuICAgICAgICAgICAgLy8gVE9ETzogQWRkIGFsbCBtZW1iZXJzIG9mIHRpbWVyc1xuICAgICAgICAgICAgc2V0SW1tZWRpYXRlOiBnbG9iYWxUaGlzLnNldEltbWVkaWF0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRfcHJvY2Vzczoge30sXG4gICAgICAgIGV2ZW50czogY2xhc3MgRXZlbnRFbWl0dGVyIHsgfSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCBidWlsdEluUmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICAgIGxldCBhbGxCdWlsdEluTW9kdWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBhbGxCdWlsdEluTW9kdWxlcy5hZGQoXCJlbGVjdHJvblwiKTtcbiAgICAgICAgYWxsQnVpbHRJbk1vZHVsZXMuYWRkKFwib3JpZ2luYWwtZnNcIik7XG4gICAgICAgIGFsbEJ1aWx0SW5Nb2R1bGVzLmFkZChcInZzY29kZVwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgYnVpbHRzIGlucyB0byB1c2UgdGhlIGFjdHVhbCBidWlsdCBpbnMhXG4gICAgICAgICAgICBsZXQgeyBidWlsdGluTW9kdWxlcyB9ID0gcmVxdWlyZShcIm5vZGU6bW9kdWxlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGJ1aWx0aW5Nb2R1bGVzKSB7XG4gICAgICAgICAgICAgICAgYWxsQnVpbHRJbk1vZHVsZXMuYWRkKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggeyB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGFsbEJ1aWx0SW5Nb2R1bGVzKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYnVpbHRJbk1vZHVsZUV4cG9ydHMsIGtleSwge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWx0SW5SZXF1aXJlKGtleSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSnVzdCBwYXRoLnJlc29sdmUgKGJ1dCBuZWVkcyB0byBiZSByZWltcGxlbWVudGVkLCBiZWNhdXNlIHdlIGNhbid0IHVzZSBpbXBvcnRzKVxuICAgIGZ1bmN0aW9uIHBhdGhSZXNvbHZlKC4uLnBhdGhzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgICAgIC8vIFN0YXJ0IHdpdGggZW1wdHkgcGF0aCBzZWdtZW50cyBhcnJheVxuICAgICAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBpc1dpbmRvd3NQYXRoID0gZmFsc2U7XG5cbiAgICAgICAgcGF0aHMgPSBwYXRocy5tYXAoeCA9PiB4LnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpKTtcblxuICAgICAgICAvLyBQcm9jZXNzIGVhY2ggcGF0aCBhcmd1bWVudFxuICAgICAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBXaW5kb3dzIGRyaXZlIGxldHRlciAoZS5nLiwgQzovKVxuICAgICAgICAgICAgaWYgKC9eW0EtWmEtel06Ly50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgaXNXaW5kb3dzUGF0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyaXZlIGxldHRlciBmb3IgcHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhvdXREcml2ZSA9IHBhdGguc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgaWYgKHdpdGhvdXREcml2ZS5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IFtwYXRoLnNsaWNlKDAsIDIpXTsgLy8gS2VlcCBkcml2ZSBsZXR0ZXIgYW5kIHJlc2V0IHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm8gbGVhZGluZyBzbGFzaCwga2VlcCBjdXJyZW50IHNlZ21lbnRzIChyZWxhdGl2ZSB0byBjdXJyZW50IGRyaXZlIHBhdGgpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDAgfHwgIXNlZ21lbnRzWzBdLm1hdGNoKC9eW0EtWmEtel06LykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gW3BhdGguc2xpY2UoMCwgMildO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcmVzdCBvZiB0aGUgcGF0aCBwYXJ0c1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goLi4ud2l0aG91dERyaXZlLnNwbGl0KFwiL1wiKS5maWx0ZXIoeCA9PiB4KSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGFic29sdXRlIHBhdGgsIHJlc2V0IHNlZ21lbnRzIGJ1dCBrZWVwIGRyaXZlIGxldHRlciBpZiBwcmVzZW50XG4gICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc1dpbmRvd3NQYXRoICYmIHNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgc2VnbWVudHNbMF0ubWF0Y2goL15bQS1aYS16XTovKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcml2ZSA9IHNlZ21lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IFtkcml2ZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNwbGl0IHBhdGggaW50byBzZWdtZW50cyBhbmQgcHJvY2VzcyBlYWNoXG4gICAgICAgICAgICBjb25zdCBwYXRoUGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKS5maWx0ZXIoeCA9PiB4KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXRoUGFydHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydCA9PT0gXCIuLlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHBvcCBvZmYgdGhlIGRyaXZlIGxldHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gKGlzV2luZG93c1BhdGggPyAxIDogMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ICE9PSBcIi5cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VnbWVudCBpZiBub3QgY3VycmVudCBkaXJlY3RvcnkgbWFya2VyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tYmluZSBzZWdtZW50cyBpbnRvIGZpbmFsIHBhdGhcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNlZ21lbnRzLmpvaW4oXCIvXCIpO1xuICAgICAgICBpZiAoIWlzV2luZG93c1BhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiL1wiICsgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpcm5hbWUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHBhdGguc3BsaXQoXCIvXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1aXJlQ2FjaGU6IHsgW2lkOiBzdHJpbmddOiBOb2RlSlMuTW9kdWxlIH0gPSB7fTtcblxuICAgIGxldCByb290TW9kdWxlID0gY3JlYXRlTW9kdWxlKHtcbiAgICAgICAgcGFyZW50TW9kdWxlOiB1bmRlZmluZWQsXG4gICAgICAgIHJlc29sdmVBYnNvbHV0ZVBhdGg6IGNvbmZpZy5yb290UGF0aCArIFwiL3Jvb3RQbGFjZWhvbGRlclwiLFxuICAgIH0pO1xuICAgIGdsb2JhbFRoaXMucmVxdWlyZSA9IHJvb3RNb2R1bGUucmVxdWlyZSBhcyBhbnk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2R1bGUoY29uZmlnOiB7XG4gICAgICAgIHBhcmVudE1vZHVsZTogTm9kZUpTLk1vZHVsZSB8IHVuZGVmaW5lZDtcbiAgICAgICAgcmVzb2x2ZUFic29sdXRlUGF0aDogc3RyaW5nO1xuICAgIH0pOiBOb2RlSlMuTW9kdWxlIHtcbiAgICAgICAgY29uc3QgeyBwYXJlbnRNb2R1bGUsIHJlc29sdmVBYnNvbHV0ZVBhdGggfSA9IGNvbmZpZztcbiAgICAgICAgbGV0IGNhY2hlZCA9IHJlcXVpcmVDYWNoZVtyZXNvbHZlQWJzb2x1dGVQYXRoXTtcbiAgICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VyaWFsaXplZCA9IGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXM/LltyZXNvbHZlQWJzb2x1dGVQYXRoXTtcblxuICAgICAgICBsZXQgbmV3TW9kdWxlOiBOb2RlSlMuTW9kdWxlID0ge1xuICAgICAgICAgICAgaWQ6IHJlc29sdmVBYnNvbHV0ZVBhdGgsXG4gICAgICAgICAgICBmaWxlbmFtZTogcmVzb2x2ZUFic29sdXRlUGF0aCxcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnRNb2R1bGUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBpc1ByZWxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhdGg6IGRpcm5hbWUocmVzb2x2ZUFic29sdXRlUGF0aCksXG4gICAgICAgICAgICBwYXRoczogc2VyaWFsaXplZD8ucGF0aHMgfHwgW10sXG4gICAgICAgICAgICByZXF1aXJlOiByZXF1aXJlRm5jLFxuICAgICAgICAgICAgbG9hZCxcbiAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgIG5ld01vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBuZXdNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgcGFyZW50TW9kdWxlLmNoaWxkcmVuLnB1c2gobmV3TW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2VyaWFsaXplZD8ubW9kdWxlRmllbGRzIHx8IHt9KSkge1xuICAgICAgICAgICAgaWYgKGtleSBpbiBuZXdNb2R1bGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgKG5ld01vZHVsZSBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlLnBhdGhzID0gKHJlcXVlc3Q6IHN0cmluZykgPT4gW107XG5cbiAgICAgICAgcmVxdWlyZUNhY2hlW25ld01vZHVsZS5pZF0gPSBuZXdNb2R1bGU7XG4gICAgICAgIHJlcXVpcmVGbmMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIHJlcXVpcmVGbmMuY2FjaGUgPSByZXF1aXJlQ2FjaGU7XG4gICAgICAgIHJlcXVpcmVGbmMubWFpbiA9IG5ld01vZHVsZTtcbiAgICAgICAgcmVxdWlyZUZuYy5leHRlbnNpb25zID0gXCJleHRlbnNpb24gbm90IGltcGxlbWVudGVkIHlldFwiIGFzIGFueTtcblxuICAgICAgICAvLyBSZXNvbHZlcyBmaWxlIGV4dGVuc2lvbnNcbiAgICAgICAgZnVuY3Rpb24gaW5uZXJSZXNvbHZlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IFtcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIHBhdGggKyBcIi5qc1wiLFxuICAgICAgICAgICAgICAgIHBhdGggKyBcIi50c1wiLFxuICAgICAgICAgICAgICAgIHBhdGggKyBcIi50c3hcIixcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGxldCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIGxldCByZWdpc3RlcmVkID0gZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcz8uW2NhbmRpZGF0ZV07XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcbiAgICAgICAgICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlubmVyUmVzb2x2ZShwYXRoUmVzb2x2ZShuZXdNb2R1bGUucGF0aCwgcGF0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBzZWFyY2ggYWxsIHBhdGhzXG4gICAgICAgICAgICBmb3IgKGxldCBzZWFyY2hSb290IG9mIHNlcmlhbGl6ZWQ/LnBhdGhzIHx8IFtdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZSA9IGlubmVyUmVzb2x2ZShwYXRoUmVzb2x2ZShzZWFyY2hSb290LCBwYXRoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlZ2lzdGVyZWQgPSBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzPy5bY2FuZGlkYXRlXTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJdCBpcyBwcm9iYWJseSBcImZzXCIgb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgTW9kdWxlICR7cGF0aH0gbm90IGZvdW5kYCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXF1aXJlRm5jKHBhdGg6IHN0cmluZykge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gYnVpbHRJbk1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbHRJbk1vZHVsZUV4cG9ydHNbcGF0aCBhcyBrZXlvZiB0eXBlb2YgYnVpbHRJbk1vZHVsZUV4cG9ydHNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc29sdmVkID0gcmVzb2x2ZShwYXRoKTtcbiAgICAgICAgICAgIGxldCBzdWJNb2R1bGUgPSBjcmVhdGVNb2R1bGUoe1xuICAgICAgICAgICAgICAgIHBhcmVudE1vZHVsZTogbmV3TW9kdWxlLFxuICAgICAgICAgICAgICAgIHJlc29sdmVBYnNvbHV0ZVBhdGg6IHJlc29sdmVkLFxuICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgICAgc3ViTW9kdWxlLmxvYWQobmV3TW9kdWxlLmZpbGVuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBzdWJNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgICAgICBpZiAobmV3TW9kdWxlLmxvYWRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgLy8gTk9URTogU2V0IGxvYWRlZCBpbW1lZGlhdGVseSwgaW4gY2FzZSB3ZSBoYXZlIGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuICAgICAgICAgICAgbmV3TW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChzZXJpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZC5tb2R1bGVGbmMobmV3TW9kdWxlLmV4cG9ydHMsIHJlcXVpcmVGbmMsIG5ld01vZHVsZSwgbmV3TW9kdWxlLmZpbGVuYW1lLCBuZXdNb2R1bGUucGF0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBiZWluZyBpbXBvcnRlZCBieSB0aGUgcm9vdCBtb2R1bGUsIHdlIG5lZWQgdG8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5wYXJlbnRNb2R1bGU/LnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCByZXF1aXJlZCBtb2R1bGUgJHtKU09OLnN0cmluZ2lmeShjb25maWcucmVzb2x2ZUFic29sdXRlUGF0aCl9LCBoYXZlICR7SlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcyB8fCB7fSkpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdNb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm94eShcbiAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiZGVmYXVsdFwiKSByZXR1cm4gbmV3TW9kdWxlLmV4cG9ydHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBNb2R1bGUgJHtuZXdNb2R1bGUuZmlsZW5hbWV9IGlzIG5vdCBhdmFpbGFibGUuIEl0IG1pZ2h0IGhhdmUgbm90IGJlZW4gaW1wb3J0ZWQgaW4gTm9kZS5qcyBkdWUgdG8gYSBmbGFnIHdoaWNoIGlzIGNoZWNraW5nIHRoZSBicm93c2VyIG9yIGFuIGVudmlyb25tZW50IHZhcmlhYmxlLiBJdCBtaWdodCBhbHNvIGJlIHRoYXQgdGhlIGVudHJ5IHBvaW50IGlzIHdlaXJkbHkgY29uZmlndXJlZCBhbmQgY291bGQgbm90IGJlIGRldGVjdGVkLmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdNb2R1bGU7XG4gICAgfVxufSIsImltcG9ydCB7IGNhY2hlIH0gZnJvbSBcInNvY2tldC1mdW5jdGlvbi9zcmMvY2FjaGluZ1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuY29uc3QgZ2V0UGFja2FnZUpzb25QYXRoID0gY2FjaGUoKGRpcmVjdG9yeTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICBpZiAoIWRpcmVjdG9yeS5pbmNsdWRlcyhcIi9cIikgJiYgIWRpcmVjdG9yeS5pbmNsdWRlcyhcIlxcXFxcIikpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IHBhY2thZ2VKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkaXJlY3RvcnksIFwicGFja2FnZS5qc29uXCIpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHBhY2thZ2VKc29uUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHBhY2thZ2VKc29uUGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGdldFBhY2thZ2VKc29uUGF0aChwYXRoLmRpcm5hbWUoZGlyZWN0b3J5KSk7XG59KTtcbmNvbnN0IGdldE1haW5QYXRoID0gY2FjaGUoKGRpcmVjdG9yeTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICBsZXQgcGFja2FnZUpzb25QYXRoID0gZ2V0UGFja2FnZUpzb25QYXRoKGRpcmVjdG9yeSk7XG4gICAgaWYgKCFwYWNrYWdlSnNvblBhdGgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgbGV0IHBhY2thZ2VKc29uID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGFja2FnZUpzb25QYXRoLCBcInV0ZjhcIikpIGFzIHtcbiAgICAgICAgbWFpbj86IHN0cmluZztcbiAgICAgICAgZXhwb3J0cz86IHtcbiAgICAgICAgICAgIFwiLlwiPzoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmU/OiBzdHJpbmc7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgbGV0IGRpciA9IHBhdGguZGlybmFtZShwYWNrYWdlSnNvblBhdGgpO1xuICAgIGxldCBtYWluTmFtZSA9IHBhY2thZ2VKc29uLmV4cG9ydHM/LltcIi5cIl0/LnJlcXVpcmUgfHwgcGFja2FnZUpzb24ubWFpbjtcbiAgICBpZiAoIW1haW5OYW1lKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIFwiaW5kZXguanNcIikpKSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXguanNcIjtcbiAgICAgICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIFwiaW5kZXgudHNcIikpKSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXgudHNcIjtcbiAgICAgICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIFwiaW5kZXgudHN4XCIpKSkge1xuICAgICAgICAgICAgbWFpbk5hbWUgPSBcImluZGV4LnRzeFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbk5hbWUgPSBcImluZGV4LmpzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIHRoZSBuZWdhdGl2ZSB2YWx1ZSBFU00gZXhwb3J0cyB0aGluZy5cbiAgICBsZXQgbWFpblBhdGggPSBwYXRoLnJlc29sdmUoZGlyLCBtYWluTmFtZSk7XG4gICAgcmV0dXJuIG1haW5QYXRoO1xufSk7XG5cblxuLy8gV3JhcHMgdGhlIG1vZHVsZSBzbyBpdCByZWdpc3RlcnMgaXRzZWxmIHdoZW4gdGhlIHJldHVybmVkIGNvZGUgaXMgZXZhbHVhdGVkXG4vLyAgLSBTZWUgaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9tb2R1bGVzLmh0bWwjdGhlLW1vZHVsZS13cmFwcGVyXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1vZHVsZShtb2R1bGU6IE5vZGVKUy5Nb2R1bGUpOiBzdHJpbmcge1xuICAgIGxldCBjb250ZW50cyA9IChtb2R1bGUgYXMgYW55KS5tb2R1bGVDb250ZW50cyB8fCBcIi8qIE5vIGNvbnRlbnRzICovXCI7XG5cbiAgICAvLyBOT1RFOiBkZWJ1Z05hbWUgb25seSBtYXR0ZXJzIGR1cmluZyBtb2R1bGUgZXZhbHVhdGlvbi4gQWZ0ZXIgdGhhdCB0aGUgc291cmNlbWFwIHNob3VsZCB3b3JrLlxuICAgIGxldCBkZWJ1Z05hbWUgPSBtb2R1bGUuZmlsZW5hbWVcbiAgICAgICAgLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpXG4gICAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgICAgLnNsaWNlKC0xKVswXVxuICAgICAgICAucmVwbGFjZSgvXFwuL2csIFwiX1wiKVxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVpfXS9nLCBcIlwiKTtcblxuICAgIGxldCB3cmFwcGVkID0gYChmdW5jdGlvbiAke2RlYnVnTmFtZX0oZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHsgJHtjb250ZW50c31cbiAgICB9KWA7XG5cbiAgICBsZXQgbW9kdWxlRmllbGRzOiB7IFtmbGFnOiBzdHJpbmddOiB1bmtub3duOyB9ID0ge307XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1vZHVsZSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZUZpZWxkc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLmxlbmd0aCA8IDE1MCkge1xuICAgICAgICAgICAgbW9kdWxlRmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZUZpZWxkc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbW9kdWxlTWFpbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGxldCBkaXJuYW1lID0gcGF0aC5kaXJuYW1lKG1vZHVsZS5maWxlbmFtZSk7XG4gICAgbGV0IHBhY2thZ2VKc29uUGF0aCA9IGdldFBhY2thZ2VKc29uUGF0aChkaXJuYW1lKTtcbiAgICBpZiAocGFja2FnZUpzb25QYXRoKSB7XG4gICAgICAgIGxldCBtYWluUGF0aCA9IGdldE1haW5QYXRoKGRpcm5hbWUpO1xuICAgICAgICBpZiAobWFpblBhdGg/LnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSA9PT0gbW9kdWxlLmZpbGVuYW1lLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSkge1xuICAgICAgICAgICAgLy8gVGhlbiB3ZSBhcmUgdGhlIG1haW4gb2YgdGhlIG1vZHVsZVxuICAgICAgICAgICAgbW9kdWxlTWFpbiA9IHBhdGguZGlybmFtZShwYWNrYWdlSnNvblBhdGgpLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5PVEU6IFdlIGNhbid0IGhhdmUgbmV3IGxpbmVzLCBvciB0aGV5IGJyZWFrIHNvdXJjZSBtYXBzXG4gICAgbGV0IG9ialdyYXBwZWQgPSBge2BcbiAgICAgICAgKyBgIGlkOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZS5pZC5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpfSxgXG4gICAgICAgICsgYCBmaWxlbmFtZTogJHtKU09OLnN0cmluZ2lmeShtb2R1bGUuZmlsZW5hbWUucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpKX0sYFxuICAgICAgICArIGAgaXNNb2R1bGVNYWluOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZU1haW4pfSxgXG4gICAgICAgICsgYCBwYXRoczogJHtKU09OLnN0cmluZ2lmeShtb2R1bGUucGF0aHMubWFwKHAgPT4gcC5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpKX0sYFxuICAgICAgICArIGAgbW9kdWxlRmllbGRzOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZUZpZWxkcyl9LGBcbiAgICAgICAgKyBgIG1vZHVsZUZuYzogJHt3cmFwcGVkfWBcbiAgICAgICAgKyBgIH1gO1xuXG4gICAgZnVuY3Rpb24gaW5pdE1vZHVsZShzZXJpYWxpemVkOiBTZXJpYWxpemVkTW9kdWxlKSB7XG4gICAgICAgIGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXMgPSBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzIHx8IHt9O1xuICAgICAgICBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzW3NlcmlhbGl6ZWQuaWRdID0gc2VyaWFsaXplZDtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWQuaXNNb2R1bGVNYWluKSB7XG4gICAgICAgICAgICBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzW3NlcmlhbGl6ZWQuaXNNb2R1bGVNYWluXSA9IHNlcmlhbGl6ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYDsoJHtpbml0TW9kdWxlLnRvU3RyaW5nKCkucmVwbGFjZUFsbChcIlxcblwiLCBcIiBcIil9KSgke29ialdyYXBwZWR9KTtgO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgdmFyIHJlZ2lzdGVyZWRNb2R1bGVzOiB7IFtpZDogc3RyaW5nXTogU2VyaWFsaXplZE1vZHVsZTsgfSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemVkTW9kdWxlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG5cbiAgICAvLyBUaGUgbWFpbiBtYWluIHdlIHJlcHJlc2VudC4gRXgsIFwiL2FpMy9ub2RlX21vZHVsZXMvdHlwZXNhZmVjc3NcIlxuICAgIGlzTW9kdWxlTWFpbj86IHN0cmluZztcblxuICAgIC8vIFBhdGhzIHdoaWNoIHRoZSByZXF1aXJlIGZ1bmN0aW9uIHNlYXJjaGVzIGZvciBub24tcmVsYXRpdmUgaW1wb3J0c1xuICAgIHBhdGhzOiBzdHJpbmdbXTtcblxuICAgIC8vIEZpZWxkcyB0byBiZSBzZXQgb24gdGhlIG1vZHVsZSwgd2hlbiBpdCBpcyBjcmVhdGVkXG4gICAgbW9kdWxlRmllbGRzOiB7IFtmbGFnOiBzdHJpbmddOiB1bmtub3duOyB9O1xuXG4gICAgbW9kdWxlRm5jOiAoZXhwb3J0czogYW55LCByZXF1aXJlOiBhbnksIG1vZHVsZTogYW55LCBfX2ZpbGVuYW1lOiBzdHJpbmcsIF9fZGlybmFtZTogc3RyaW5nKSA9PiB1bmtub3duO1xufSIsImltcG9ydCB7IGFycmF5RXF1YWwgfSBmcm9tIFwiLi9taXNjXCI7XG5pbXBvcnQgeyBBbnlGdW5jdGlvbiwgQXJncywgY2FuSGF2ZUNoaWxkcmVuIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhenk8VD4oZmFjdG9yeTogKCkgPT4gVCkge1xuICAgIGxldCB2YWx1ZTogeyB2YWx1ZTogVCB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB7IHZhbHVlOiBmYWN0b3J5KCkgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUudmFsdWU7XG4gICAgfTtcbiAgICBnZXQucmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgZ2V0LnNldCA9IChuZXdWYWx1ZTogVCkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHsgdmFsdWU6IG5ld1ZhbHVlIH07XG4gICAgfTtcbiAgICByZXR1cm4gZ2V0O1xufVxuXG4vLyBOT1RFOiBUaGUgcmVhc29uIHdlIG5lZWQgdG8gcGVyaW9kaWNhbGx5IGNsZWFyLCBpcyBiZWNhdXNlIHNvbWV0aW1lcyBhIHZlcnkgc21hbGxcbi8vICAgICAgcGFydCBvZiBhIGxhcmdlIHBheWxvYWQgKGV4LCBwZXJzaXN0ZWQgb3ZlcnJpZGVzKSBpcyBjYWNoZWQsIHdoaWNoIHRoZW4gcmVzdWx0c1xuLy8gICAgICBpbiB0aGUgd2hvbGUgcGF5bG9hZCBiZWluZyBjYWNoZWQsIHdoaWNoIHJlc3VsdHMgaW4gYSBsb3Qgb2YgbWVtb3J5IGJlaW5nIHVzZWQuXG5cbi8vIElNUE9SVEFOVCEgVGhlIGNsZWFudXAgZnVuY3Rpb25zIENBTk5PVCBjbG9zZSB1cG9uIGFueXRoaW5nLCBvciBlbHNlIHRoZXkgd2lsbCBjYXVzZSBsZWFrcyFcbi8vICBBbGwgZGF0YSB0aGV5IHVzZSBzaG91bGQgYmUgaW4gZGF0YS5cbmludGVyZmFjZSBDbGVhbnVwRm5jPFQgZXh0ZW5kcyBvYmplY3Q+IHtcbiAgICAoZGF0YTogVCk6IHZvaWQ7XG59XG5cblxuLy8gTk9URTogRW1wdHkgYXJyYXlzIGFyZSBzbyBjb21tb24sIHRoYXQgaXQgaXMgdXNlZnVsIHRvIHJlcHJlc2VudCB0aGVtIGFzIHRoZSBzYW1lXG4vLyAgZW10cHkgYXJyYXksIHRvIGluY3JlYXNlIGNhY2hlIGhpdCByYXRlcy5cbmNvbnN0IGVtcHR5QXJyYXk6IGFueVtdID0gW107XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVFbXB0eUFycmF5PFQ+KGFycmF5OiBUW10pOiBUW10ge1xuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBlbXB0eUFycmF5O1xuICAgIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlPE91dHB1dCwgS2V5LCBVbnRyYWNrZWQgZXh0ZW5kcyB1bmtub3duW10+KFxuICAgIGdldFZhbHVlOiAoa2V5OiBLZXksIC4uLnVudHJhY2tlZDogVW50cmFja2VkKSA9PiBPdXRwdXRcbik6IHtcbiAgICAoa2V5OiBLZXksIC4uLnVudHJhY2tlZDogVW50cmFja2VkKTogT3V0cHV0O1xuICAgIC8vIE5PVEU6IElmIHlvdSB3YW50IHRvIGNsZWFyIGFsbCwganVzdCBtYWtlIGEgbmV3IGNhY2hlIVxuICAgIGNsZWFyKGtleTogS2V5KTogdm9pZDtcbiAgICBjbGVhckFsbCgpOiB2b2lkO1xuICAgIGZvcmNlU2V0KGtleTogS2V5LCB2YWx1ZTogT3V0cHV0KTogdm9pZDtcbiAgICBnZXRBbGxLZXlzKCk6IEtleVtdO1xuICAgIGdldChrZXk6IEtleSk6IE91dHB1dCB8IHVuZGVmaW5lZDtcbn0ge1xuICAgIGxldCBzdGFydGluZ0NhbGN1bGF0aW5nID0gbmV3IFNldDxLZXk+KCk7XG4gICAgbGV0IHZhbHVlcyA9IG5ldyBNYXA8S2V5LCBPdXRwdXQ+KCk7XG4gICAgZnVuY3Rpb24gY2FjaGUoaW5wdXQ6IEtleSwgLi4udW50cmFja2VkOiBVbnRyYWNrZWQpIHtcbiAgICAgICAgbGV0IGtleSA9IGlucHV0O1xuICAgICAgICBpZiAodmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmdldChrZXkpIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRpbmdDYWxjdWxhdGluZy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgLy8gVE9ETzogRml4IHRoZSB0eXBlcyBoZXJlLCBieSB0aHJvd2luZywgYW5kIHRoZW4gZm9yIHRoZSBjYXNlc1xuICAgICAgICAgICAgLy8gIHRoYXQgZG9uJ3QgdGhyb3csIG1ha2Ugb3VyIG91dHB1dCB0eXBlIGluY2x1ZGUgdW5kZWZpbmVkXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlKGlucHV0LCAuLi51bnRyYWNrZWQpO1xuICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNhY2hlLmNsZWFyID0gKGtleTogS2V5KSA9PiB7XG4gICAgICAgIHZhbHVlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5kZWxldGUoa2V5KTtcbiAgICB9O1xuICAgIGNhY2hlLmZvcmNlU2V0ID0gKGtleTogS2V5LCB2YWx1ZTogT3V0cHV0KSA9PiB7XG4gICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG4gICAgfTtcbiAgICBjYWNoZS5nZXRBbGxLZXlzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLnZhbHVlcy5rZXlzKCldO1xuICAgIH07XG4gICAgY2FjaGUuZ2V0ID0gKGtleTogS2V5KSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuZ2V0KGtleSk7XG4gICAgfTtcbiAgICBjYWNoZS5jbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgdmFsdWVzLmNsZWFyKCk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuY2xlYXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBjYWNoZTtcbn1cblxuXG4vKiogTWFrZXMgYSBjYWNoZSB0aGF0IGxpbWl0cyB0aGUgbnVtYmVyIG9mIGVudHJpZXMsIGFsbG93aW5nIHlvdSB0byBwdXQgYXJiaXRyYXJ5IGRhdGEgaW4gaXRcbiAqICAgICAgd2l0aG91dCB3b3JyeWluZyBhYm91dCBsZWFraW5nIG1lbW9yeVxuICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlTGltaXRlZDxPdXRwdXQsIEtleT4oXG4gICAgLy8gTk9URTogV2UgY2FuJ3QgY2FsY3VsYXRlIHdoYXQgbGltaXQgc2hvdWxkIGJlIGJhc2VkIG9uIGNvbXBhcmluZyB0aGUgZXZhbHVhdGlvbiB0aW1lXG4gICAgLy8gIGFuZCB0aGUgdGltZSB0byBjb21wYXJlIGFnYWluc3QgdGhlIHZhbHVlcy4gQmVjYXVzZSwgZXZlbiBpZiBmaW5kaW5nIGEgbWF0Y2ggdGFrZXMgZmFyIGxvbmdlciB0aGFuXG4gICAgLy8gIGNhbGN1bGF0aW5nLCBrZWVwaW5nIGEgY29uc2lzdGVudCBvdXRwdXQgY2FuIHNhdmUgKGEgY29uc2lkZXJhYmxlIGFtb3VudCBvZikgdGltZSBpbiBkb3duc3RyZWFtIGNhY2hlcy5cbiAgICBtYXhDb3VudDogbnVtYmVyLFxuICAgIGdldFZhbHVlOiAoa2V5OiBLZXkpID0+IE91dHB1dFxuKSB7XG4gICAgbGV0IHN0YXJ0aW5nQ2FsY3VsYXRpbmcgPSBuZXcgU2V0PEtleT4oKTtcbiAgICBsZXQgdmFsdWVzID0gbmV3IE1hcDxLZXksIE91dHB1dD4oKTtcbiAgICBmdW5jdGlvbiBnZXQoaW5wdXQ6IEtleSk6IE91dHB1dCB7XG4gICAgICAgIGxldCBrZXkgPSBpbnB1dDtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5nZXQoa2V5KSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0aW5nQ2FsY3VsYXRpbmcuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3ljbGljIGFjY2VzcyBpbiBjYWNoZWApO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG5cbiAgICAgICAgLy8gQ2xlYXIgd2hlbiBpdCBnZXRzIHRvbyBiaWcuIFRoaXMgaXMga2luZCBvZiBsaWtlIGEgd29yc2VcbiAgICAgICAgLy8gIGxlYXN0IHJlY2VudGx5IHVzZWQgY2FjaGUsIGJlY2F1c2UgZW50cmllcyB0aGF0IGFyZSBhY2Nlc3NlZFxuICAgICAgICAvLyAgb2Z0ZW4gd2lsbCBxdWlja2x5IGdldCBwdXQgYmFjayBpbi4gVGhpcyBpcyBlZmZlY3RpdmUgYXMgbG9uZ1xuICAgICAgICAvLyAgYXMgYWNjZXNzZXMgdGFrZSBzaW1pbGFyIGFtb3VudHMgb2YgdGltZS4gSWYgdGhlcmUgaXMgYSB2ZXJ5IHNsb3dcbiAgICAgICAgLy8gIGFuZCB2ZXJ5IGNvbW1vbmx5IGFjY2Vzc2VkIHZhbHVlLCBpdCBjb3VsZCBiZSBldmljdGVkIGJ5IG1hbnkgdmVyeVxuICAgICAgICAvLyAgZmFzdCBhY2Nlc3Nlcywgd2hpY2ggd291bGQgYmUgdW5mb3J0dW5hdGUuXG4gICAgICAgIGlmICh2YWx1ZXMuc2l6ZSA+PSBtYXhDb3VudCkge1xuICAgICAgICAgICAgdmFsdWVzLmNsZWFyKCk7XG4gICAgICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZShpbnB1dCk7XG4gICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0W1wiZm9yY2VTZXRcIl0gPSAoa2V5OiBLZXksIHZhbHVlOiBPdXRwdXQpID0+IHtcbiAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICB9O1xuICAgIGdldFtcImNsZWFyS2V5XCJdID0gKGtleTogS2V5KSA9PiB7XG4gICAgICAgIHZhbHVlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5kZWxldGUoa2V5KTtcbiAgICB9O1xuICAgIGdldFtcImNsZWFyXCJdID0gKCkgPT4ge1xuICAgICAgICB2YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5jbGVhcigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVXZWFrPE91dHB1dCwgS2V5IGV4dGVuZHMgb2JqZWN0PihnZXRWYWx1ZTogKGtleTogS2V5KSA9PiBPdXRwdXQpOiAoa2V5OiBLZXkpID0+IE91dHB1dCB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nOiBuZXcgV2Vha1NldDxLZXk+KCksXG4gICAgICAgIHZhbHVlczogbmV3IFdlYWtNYXA8S2V5LCBPdXRwdXQ+KCksXG4gICAgfTtcblxuICAgIHJldHVybiAoaW5wdXQpID0+IHtcbiAgICAgICAgbGV0IGtleSA9IGlucHV0O1xuICAgICAgICBpZiAoc3RhdGUudmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudmFsdWVzLmdldChrZXkpIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhcnRpbmdDYWxjdWxhdGluZy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDeWNsaWMgYWNjZXNzIGluIGNhY2hlV2Vha2ApO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlKGlucHV0KTtcbiAgICAgICAgc3RhdGUudmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59XG5cbi8vIEEgbGlzdCBjYWNoZSwgd2hpY2guLi4gbWF5YmUgZmFzdGVyIHRoYW4gYSBNYXA/XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVMaXN0PFZhbHVlPihcbiAgICBnZXRMZW5ndGg6ICgpID0+IG51bWJlcixcbiAgICBnZXRWYWx1ZTogKGluZGV4OiBudW1iZXIpID0+IFZhbHVlLFxuKTogeyAoaW5kZXg6IG51bWJlcik6IFZhbHVlOyB9IHtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGNhY2hlOiBbXSBhcyBWYWx1ZVtdLFxuICAgICAgICBsZW5ndGg6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIGdldExlbmd0aCxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldChpOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNhY2hlID0gc3RhdGUuY2FjaGU7XG4gICAgICAgIGxldCBsZW5ndGggPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gc3RhdGUubGVuZ3RoID0gc3RhdGUuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluZGV4IG91dCBvZiBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShpIGluIGNhY2hlKSkge1xuICAgICAgICAgICAgY2FjaGVbaV0gPSBnZXRWYWx1ZShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVbaV07XG4gICAgfTtcbiAgICByZXR1cm4gZ2V0O1xufVxuXG5mdW5jdGlvbiBjYWNoZUFycmF5RXF1YWxDbGVhbnVwKHN0YXRlOiBhbnkpIHtcbiAgICBzdGF0ZS5jYWNoZSA9IFtdO1xufVxuXG4vKiogQSBjYWNoZSBoYWxmIHdheSBiZXR3ZWVuIGNhY2hpbmcgYmFzZWQgb24gPT09IGFuZCBjYWNoaW5nIGJhc2VkIG9uIGhhc2guIENhY2hlc1xuICogICAgICBiYXNlZCBvbiBhcnJheUVxdWFsLCB3aGljaCBkb2VzID09PSBvbiBhbGwgdmFsdWVzIGluIGFuIGFycmF5LiBSZXF1aXJlcyBsb2NhbGl6ZWRcbiAqICAgICAgY2FjaGluZyAoYXMgdGhlIGNvbXBhcmlzb25zIGRvbid0IHNjYWxlIHdpdGggbWFueSBjYW5kaWRhdGVzLCB1bmxpa2UgaGFzaGluZyksXG4gKiAgICAgIGhvd2V2ZXIgd29ya3Mgd2l0aCBub24gdHJpdmFsIHRyYW5zZm9ybWF0aW9ucyAoZXgsIHJlc29sdmluZyBtYW55IHBlcnNpc3RlZCBvdmVycmlkZXNcbiAqICAgICAgdG8gZ2V0IGEgdmFsdWUpLCB1bmxpa2UgY2FjaGUoKS5cbiAqICBBbHNvLCBsaW1pdHMgaXRzZWxmLCBtb3JlIG9mIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRoYW4gbWVtb3J5IG9wdGltaXphdGlvbiwgYXMgaXQgc2NhbGVzXG4gKiAgICAgIHZlcnkgcG9vcmx5IHdpdGggdGhlIG51bWJlciBvZiBjYW5kaWRhdGVzLlxuICogIFxuICogIFRJTUlORzogQWJvdXQgNnVzIHdpdGggbGltaXQgPSAxMDAsIGFycmF5IHNpemUgPSAyOTQsIGFuZCB0aGUgY2FjaGUgYmVpbmcgZnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlQXJyYXlFcXVhbDxJbnB1dCBleHRlbmRzIHVua25vd25bXSB8IHVuZGVmaW5lZCwgT3V0cHV0PihcbiAgICBtYXA6IChhcnJheXM6IElucHV0KSA9PiBPdXRwdXQsXG4gICAgbGltaXQgPSAxMFxuKToge1xuICAgIChhcnJheTogSW5wdXQpOiBPdXRwdXQ7XG4gICAgY2xlYXIoYXJyYXk6IElucHV0KTogdm9pZDtcbiAgICBjbGVhckFsbCgpOiB2b2lkO1xufSB7XG4gICAgbGV0IHN0YXRlOiB7XG4gICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgICBpbnB1dDogSW5wdXQ7XG4gICAgICAgICAgICBvdXRwdXQ6IE91dHB1dDtcbiAgICAgICAgfVtdXG4gICAgfSA9IHsgY2FjaGU6IFtdIH07XG4gICAgZnVuY3Rpb24gaXNNYXRjaChsaHM6IElucHV0LCByaHM6IElucHV0KSB7XG4gICAgICAgIGlmIChsaHMgPT09IHJocykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxocyA9PT0gdW5kZWZpbmVkIHx8IHJocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFycmF5RXF1YWwobGhzLCByaHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAoaW5wdXQ6IElucHV0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2FjaGUgPSBzdGF0ZS5jYWNoZTtcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBjYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKG9iai5pbnB1dCwgaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmoub3V0cHV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBtYXAoaW5wdXQpO1xuICAgICAgICAgICAgY2FjaGUudW5zaGlmdCh7IGlucHV0LCBvdXRwdXQgfSk7XG4gICAgICAgICAgICB3aGlsZSAoY2FjaGUubGVuZ3RoID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFyKGFycmF5OiBJbnB1dCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGF0ZS5jYWNoZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaChzdGF0ZS5jYWNoZVtpXS5pbnB1dCwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jYWNoZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJBbGwoKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY2FjaGUgPSBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApO1xufVxuXG4vKiogQ2FjaGVzIHdoZW4gYXJndW1lbnRzIGFyZSA9PT0uIFNlZSBjYWNoZUFycmF5RXF1YWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUFyZ3NFcXVhbDxGbmMgZXh0ZW5kcyBBbnlGdW5jdGlvbj4oXG4gICAgZm5jOiBGbmMsXG4gICAgbGltaXQgPSAxMFxuKTogRm5jICYgeyBjbGVhciguLi5hcmdzOiBBcmdzPEZuYz4pOiB2b2lkIH0ge1xuICAgIGxldCBjYWNoZSA9IGNhY2hlQXJyYXlFcXVhbChmdW5jdGlvbiBjYWNoZUFyZ3NFcXVhbChhcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgcmV0dXJuIGZuYyguLi5hcmdzKTtcbiAgICB9LCBsaW1pdCk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICgoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUoYXJncyk7XG4gICAgICAgIH0pIGFzIEZuYyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXIoYXJncyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlSlNPTkFyZ3NFcXVhbDxGbmMgZXh0ZW5kcyBBbnlGdW5jdGlvbj4oXG4gICAgZm5jOiBGbmMsXG4gICAgbGltaXQgPSAxMFxuKSB7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVMaW1pdGVkKGxpbWl0LCAoYXJnc0pTT046IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gZm5jKC4uLkpTT04ucGFyc2UoYXJnc0pTT04pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZShKU09OLnN0cmluZ2lmeShhcmdzKSk7XG4gICAgICAgIH0pIGFzIEZuYyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXJLZXkoSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyQWxsKCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVTaGFsbG93Q29uZmlnQXJnRXF1YWw8Rm5jIGV4dGVuZHMgQW55RnVuY3Rpb24+KFxuICAgIGZuYzogRm5jLFxuICAgIGxpbWl0ID0gMTBcbik6IEZuYyAmIHtcbiAgICBjbGVhcihjb25maWdPYmo6IEFyZ3M8Rm5jPlswXSk6IHZvaWQ7XG4gICAgY2xlYXJBbGwoKTogdm9pZDtcbn0ge1xuICAgIGxldCBjYWNoZSA9IGNhY2hlQXJyYXlFcXVhbCgoa3Zwc0ZsYXQ6IHVua25vd25bXSkgPT4ge1xuICAgICAgICBvdXRwdXQubWlzc0NvdW50Kys7XG4gICAgICAgIGxldCBhcmc6IGFueTtcbiAgICAgICAgaWYgKGt2cHNGbGF0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgYXJnID0ga3Zwc0ZsYXRbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQga3ZwczogW3Vua25vd24sIHVua25vd25dW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga3Zwc0ZsYXQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICBrdnBzLnB1c2goW2t2cHNGbGF0W2ldLCBrdnBzRmxhdFtpICsgMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZyA9IE9iamVjdC5mcm9tRW50cmllcyhrdnBzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm5jKGFyZyk7XG4gICAgfSwgbGltaXQpO1xuICAgIGZ1bmN0aW9uIGdldEtWUHMoY29uZmlnQXJnOiBvYmplY3QpIHtcbiAgICAgICAgaWYgKCFjYW5IYXZlQ2hpbGRyZW4oY29uZmlnQXJnKSB8fCBBcnJheS5pc0FycmF5KGNvbmZpZ0FyZykpIHtcbiAgICAgICAgICAgIHJldHVybiBbY29uZmlnQXJnXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZ0FyZyk7XG4gICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICByZXR1cm4ga2V5cy5mbGF0TWFwKGtleSA9PiBba2V5LCBjb25maWdBcmdba2V5XV0pO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgKChjb25maWdBcmc6IG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgb3V0cHV0LmNhbGxDb3VudCsrO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlKGdldEtWUHMoY29uZmlnQXJnKSk7XG4gICAgICAgIH0pIGFzIEZuYyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoY29uZmlnQXJnOiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhcihnZXRLVlBzKGNvbmZpZ0FyZykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyQWxsKCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbENvdW50OiAwLFxuICAgICAgICAgICAgbWlzc0NvdW50OiAwLFxuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlcm5hbENhY2hlPEtleSwgVmFsdWU+KCk6IHtcbiAgICBnZXQ6IChrZXk6IEtleSkgPT4gVmFsdWUgfCB1bmRlZmluZWQ7XG4gICAgc2V0OiAoa2V5OiBLZXksIHZhbHVlOiBWYWx1ZSkgPT4gdm9pZDtcbn0ge1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgTWFwPEtleSwgVmFsdWU+KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiAoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmdldChrZXkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgIH07XG59IiwiaW1wb3J0IHsgY2FuSGF2ZUNoaWxkcmVuLCBNYXliZVByb21pc2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4vZm9ybWF0dGluZy9mb3JtYXRcIjtcblxuZXhwb3J0IGNvbnN0IHRpbWVJblNlY29uZCA9IDEwMDA7XG5leHBvcnQgY29uc3QgdGltZUluTWludXRlID0gdGltZUluU2Vjb25kICogNjA7XG5leHBvcnQgY29uc3QgdGltZUluSG91ciA9IHRpbWVJbk1pbnV0ZSAqIDYwO1xuZXhwb3J0IGNvbnN0IHRpbWVJbkRheSA9IHRpbWVJbkhvdXIgKiAyNDtcbmV4cG9ydCBjb25zdCB0aW1lSW5XZWVrID0gdGltZUluRGF5ICogNztcbmV4cG9ydCBjb25zdCB0aW1lSW5ZZWFyID0gdGltZUluRGF5ICogMzY1O1xuXG5leHBvcnQgdHlwZSBXYXRjaGFibGU8VD4gPSAoY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gdm9pZCkgPT4gTWF5YmVQcm9taXNlPHZvaWQ+O1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEVycm9yU3RhY2tUb0Vycm9yKGVycm9yOiBzdHJpbmcpOiBFcnJvciB7XG4gICAgbGV0IGVycm9yT2JqID0gbmV3IEVycm9yKCk7XG4gICAgZXJyb3JPYmouc3RhY2sgPSBTdHJpbmcoZXJyb3IpO1xuICAgIGVycm9yT2JqLm1lc3NhZ2UgPSBTdHJpbmcoZXJyb3IpLnNwbGl0KFwiXFxuXCIpWzBdLnNsaWNlKFwiRXJyb3I6IFwiLmxlbmd0aCk7XG4gICAgcmV0dXJuIGVycm9yT2JqO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaGEyNTZIYXNoKGJ1ZmZlcjogQnVmZmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVxdWlyZShcImNyeXB0b1wiKS5jcmVhdGVIYXNoKFwic2hhMjU2XCIpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdChcImhleFwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaGEyNTZIYXNoQnVmZmVyKGJ1ZmZlcjogQnVmZmVyIHwgc3RyaW5nKTogQnVmZmVyIHtcbiAgICByZXR1cm4gcmVxdWlyZShcImNyeXB0b1wiKS5jcmVhdGVIYXNoKFwic2hhMjU2XCIpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdCgpO1xufVxuLyoqIEFzeW5jLCBidXQgd29ya3MgYm90aCBjbGllbnRzaWRlIGFuZCBzZXJ2ZXJzaWRlLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNoYTI1Nkhhc2hQcm9taXNlKGJ1ZmZlcjogQnVmZmVyKSB7XG4gICAgaWYgKGlzTm9kZSgpKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiY3J5cHRvXCIpLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KFwiaGV4XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBidWYgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIGJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShidWYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaGEyNTZCdWZmZXJQcm9taXNlKGJ1ZmZlcjogQnVmZmVyKTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICBpZiAoaXNOb2RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJjcnlwdG9cIikuY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYnVmID0gYXdhaXQgd2luZG93LmNyeXB0by5zdWJ0bGUuZGlnZXN0KFwiU0hBLTI1NlwiLCBidWZmZXIpO1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oYnVmKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RXF1YWwoYTogeyBba2V5OiBudW1iZXJdOiB1bmtub3duOyBsZW5ndGg6IG51bWJlciB9LCBiOiB7IFtrZXk6IG51bWJlcl06IHVua25vd247IGxlbmd0aDogbnVtYmVyIH0sKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgKGdsb2JhbFRoaXMgYXMgYW55KS5Xb3JrZXJHbG9iYWxTY29wZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVRydWUoKSB7XG4gICAgcmV0dXJuIGlzTm9kZSgpIGFzIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXJTdWZmaXhlZChjb3VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0TnVtYmVyKGNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3QoY291bnQ6IG51bWJlcikge1xuICAgIGxldCBhcnI6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlRnJlZXplPFQ+KG9iajogVCk6IFQge1xuICAgIGlmICghY2FuSGF2ZUNoaWxkcmVuKG9iaikpIHJldHVybiBvYmo7XG4gICAgbGV0IHZpc2l0ZWQgPSBuZXcgU2V0PHVua25vd24+KCk7XG4gICAgZnVuY3Rpb24gaXRlcmF0ZShvYmo6IHVua25vd24pIHtcbiAgICAgICAgaWYgKCFjYW5IYXZlQ2hpbGRyZW4ob2JqKSkgcmV0dXJuO1xuICAgICAgICBpZiAodmlzaXRlZC5oYXMob2JqKSkgcmV0dXJuO1xuICAgICAgICB2aXNpdGVkLmFkZChvYmopO1xuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KG9iaikpIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICAgICAgICBsZXQga2V5cyA9IGdldEtleXMob2JqKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgIGl0ZXJhdGUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGl0ZXJhdGUob2JqKTtcbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0IHR5cGUgQXJyYXlCdWZmZXJWaWV3VHlwZXMgPSBVaW50OEFycmF5IHwgSW50OEFycmF5IHwgVWludDE2QXJyYXkgfCBJbnQxNkFycmF5IHwgVWludDMyQXJyYXkgfCBJbnQzMkFycmF5IHwgQmlnVWludDY0QXJyYXkgfCBCaWdJbnQ2NEFycmF5IHwgRmxvYXQ2NEFycmF5IHwgRmxvYXQzMkFycmF5IHwgVWludDhDbGFtcGVkQXJyYXk7XG5leHBvcnQgdHlwZSBCdWZmZXJUeXBlID0gQXJyYXlCdWZmZXIgfCBTaGFyZWRBcnJheUJ1ZmZlciB8IEFycmF5QnVmZmVyVmlld1R5cGVzO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQnVmZmVyVHlwZShvYmo6IHVua25vd24pOiBvYmogaXMgQnVmZmVyVHlwZSB7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIW9iaikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZ2xvYmFsLlNoYXJlZEFycmF5QnVmZmVyICYmIG9iaiBpbnN0YW5jZW9mIGdsb2JhbC5TaGFyZWRBcnJheUJ1ZmZlcikgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleXMob2JqOiB1bmtub3duKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChvYmogaW5zdGFuY2VvZiBNZXNzYWdlUG9ydCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGxldCBrZXlBcnJheTogUHJvcGVydHlLZXlbXTtcbiAgICBpZiAoaXNCdWZmZXJUeXBlKG9iaikpIHtcbiAgICAgICAga2V5QXJyYXkgPSBbXTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAvLyBOT1RFOiBXZSBjb252ZXJ0IHRoZSBpbmRleGVzIHRvIHN0cmluZ3MsIGJlY2F1c2UgdGhhdCBpcyB3aGF0IGphdmFzY3JpcHQgZG9lcyxcbiAgICAgICAgLy8gIGFuZCBkaWZmZXJpbmcgZnJvbSBpdCBjYXVzZXMgcmVncmVzc2lvbnMgdGhhdCB3ZSBzaW1wbHkgY2Fubm90IHJlY3RpZnkgKGl0IGJyZWFrcyBoYXNoaW5nXG4gICAgICAgIC8vICBjb25zaXN0ZW5jeSkuXG4gICAgICAgIGtleUFycmF5ID0gQXJyYXkob2JqLmxlbmd0aCkuZmlsbCgwKS5tYXAoKHgsIGkpID0+IFN0cmluZyhpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5QXJyYXkgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIH1cbiAgICBmb3IgKGxldCBzeW1ib2wgb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKSB7XG4gICAgICAgIGxldCBrZXkgPSBTeW1ib2wua2V5Rm9yKHN5bWJvbCk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGtleUFycmF5LnB1c2goc3ltYm9sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5QXJyYXk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nS2V5czxUIGV4dGVuZHMge30+KG9iajogVCk6ICgoa2V5b2YgVCkgJiBzdHJpbmcpW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopIGFzIGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleUJ5PFQsIEs+KGFycjogVFtdLCBnZXRLZXk6ICh2YWx1ZTogVCkgPT4gSyk6IE1hcDxLLCBUPiB7XG4gICAgbGV0IG1hcCA9IG5ldyBNYXA8SywgVD4oKTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFycikge1xuICAgICAgICBtYXAuc2V0KGdldEtleShpdGVtKSwgaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG5leHBvcnQgZnVuY3Rpb24ga2V5QnlBcnJheTxULCBLPihhcnI6IFRbXSwgZ2V0S2V5OiAodmFsdWU6IFQpID0+IEspOiBNYXA8SywgVFtdPiB7XG4gICAgbGV0IG1hcCA9IG5ldyBNYXA8SywgVFtdPigpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgIGxldCBrZXkgPSBnZXRLZXkoaXRlbSk7XG4gICAgICAgIGxldCBhcnIgPSBtYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYXJyKSB7XG4gICAgICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBhcnIpO1xuICAgICAgICB9XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lSlNPTjxUPihvYmo6IFQpOiBUIHtcbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHJldHVybiBvYmo7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgLy8gSXQgaXMgcG9zc2libGUgZm9yIGFuIG9iamVjdCB0byBub3QgYmUgZGVmaW5lZCwgYnV0IHJldHVybiB1bmRlZmluZWQgd2hlbiBKU09OLnN0cmluZ2lmaWVkLFxuICAgIC8vICB2aWEgb3ZlcnJpZGluZyB0aGUgdG9KU09OIG1ldGhvZC5cbiAgICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQgYXMgYW55O1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9taXNlT2JqPFQgPSB2b2lkPiB7XG4gICAgcHVibGljIHByb21pc2U6IFByb21pc2U8VD47XG4gICAgcHVibGljIHZhbHVlOiB7IHZhbHVlPzogVDsgZXJyb3I/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZDtcbiAgICAvKiogUmVzb2x2ZSBjYWxsZWQgZG9lcyBub3QgbWVhbiB0aGUgdmFsdWUgaXMgcmVhZHksIGFzIGl0IG1heSBiZSByZXNvbHZlZCB3aXRoIGEgcHJvbWlzZS4gKi9cbiAgICBwdWJsaWMgcmVzb2x2ZUNhbGxlZD86IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgcmVzb2x2ZSA9ICh2YWx1ZTogVCB8IFByb21pc2U8VD4pID0+IHtcbiAgICAgICAgdGhpcy5yZXNvbHZlQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHZhbHVlLnRoZW4oXG4gICAgICAgICAgICAgICAgdmFsdWUgPT4gdGhpcy52YWx1ZSA9IHsgdmFsdWUgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLnZhbHVlID0geyBlcnJvciB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB7IHZhbHVlIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICBwdWJsaWMgcmVqZWN0ID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5iYXNlUmVqZWN0KGVycm9yKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBiYXNlUmVzb2x2ZSE6ICh2YWx1ZTogVCB8IFByb21pc2U8VD4pID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBiYXNlUmVqZWN0ITogKGVycm9yOiBhbnkpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5iYXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oXG4gICAgICAgICAgICB2YWx1ZSA9PiB0aGlzLnZhbHVlID0geyB2YWx1ZSB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy52YWx1ZSA9IHsgZXJyb3IgfVxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb21pc2VPYmo8VCA9IHZvaWQ+KCk6IFByb21pc2VPYmo8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iajxUPigpO1xufVxuXG4vLyBBbGxvd3MgYW4gaW1tZWRpYXRlIGNhbGwsIHRoZW4gZGVsYXlzIHRoZSBuZXh0IGNhbGwgdW50aWwgdGhlIGZpcnN0IGNhbGwgZmluaXNoZXMgKyBkZWxheVxuLy8gIC0gRHJvcHMgYWxsIGJ1dCB0aGUgbGF0ZXN0IGNhbGwsIGJ1dCBvbmx5IHJlc29sdmVzIHRoZSBwcm9taXNlcyByZXR1cm4gdG8gYWxsXG4vLyAgICAgIGNhbGxzIG9uY2UgdGhlIGxhdGVzdCBjYWxsIGZpbmlzaGVzLlxuLy8gIC0gRXNlbnRpYWxseSB0aGUgc2FtZSBhcyBzYXlpbmcgXCJkb24ndCBydW4gdGhpcyBmdW5jdGlvbiB0b28gb2Z0ZW4sIGRvbid0IHJ1biBpdCBpbiBwYXJhbGxlbCxcbi8vICAgICAgYW5kIGRvbid0IGxldCBmdW5jdGlvbnMgcnVucyBiZSB0b28gY2xvc2UgdG9nZXRoZXJcIi5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUZ1bmN0aW9uPEFyZ3MgZXh0ZW5kcyBhbnlbXT4oXG4gICAgZGVsYXk6IG51bWJlcixcbiAgICBmbmM6ICguLi5hcmdzOiBBcmdzKSA9PiBNYXliZVByb21pc2U8dm9pZD5cbik6ICguLi5hcmdzOiBBcmdzKSA9PiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgbmV4dEFsbG93ZWRDYWxsID0gMDtcbiAgICBsZXQgcGVuZGluZ0FyZ3M6IHsgYXJnczogQXJnczsgcHJvbWlzZU9iajogUHJvbWlzZU9iajx2b2lkPiB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGZ1bmN0aW9uIGRvQ2FsbChhcmdzOiBBcmdzLCBwcm9taXNlT2JqOiBQcm9taXNlT2JqPHZvaWQ+KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZm5jKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcHJvbWlzZU9iai5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIC8vIE5PVEU6IFRoZSBjYWxsZXIgc2hvdWxkIGhhbmRsZSB0aGUgcHJvbWlzZS4gSWYgbm90LCB0aGV5IHByb2JhYmx5XG4gICAgICAgICAgICAgICAgLy8gIHdhbnQgdGhlIHVucmVzb2x2ZWQgcHJvbWlzZSByZWplY3Rpb24sIHNvIHRoZXkgY2FuIGhhbmRsZSBpdCBwcm9wZXJseS5cbiAgICAgICAgICAgICAgICB2b2lkIHJlc3VsdC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gRGF0ZS5ub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgICAgICAgICBydW5OZXh0Q2FsbCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0QWxsb3dlZENhbGwgPSBEYXRlLm5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICAgICAgcnVuTmV4dENhbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBwcm9taXNlT2JqLnJlamVjdChlKTtcbiAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IERhdGUubm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIHJ1bk5leHRDYWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuTmV4dENhbGwoKSB7XG4gICAgICAgIGlmIChuZXh0QWxsb3dlZENhbGwgPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXBlbmRpbmdBcmdzKSByZXR1cm47XG4gICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHRpbWUgPiBuZXh0QWxsb3dlZENhbGwpIHtcbiAgICAgICAgICAgIC8vIFNldCBuZXh0QWxsb3dlZENhbGwgdG8gaW5maW5pdHksIHRvIHByZXZlbnQgbmV3IGNhbGxzIGZyb20gcnVubmluZ1xuICAgICAgICAgICAgLy8gIHVudGlsIGRvQ2FsbCBmaW5pc2hlcy5cbiAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgICAgICAgIC8vIERlbGF5LCBzbyB3ZSBkb24ndCB0dXJuIGEgc2VyaWVzIG9mIHNlcXVlbnRpYWwgY2FsbHMgdG8gYSBzZXJpZXMgb2YgbmVzdGVkIGNhbGxzXG4gICAgICAgICAgICAvLyAgKHdoaWNoIHdpbGwgY2F1c2UgYSBzdGFjayBvdmVyZmxvdylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gcGVuZGluZ0FyZ3M7XG4gICAgICAgICAgICAgICAgcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCFhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1wb3NzaWJsZSwgcGVuZGluZ0FyZ3Mgd2FzIHJlc2V0IHdoZW4gd2Ugc2hvdWxkbid0IGhhdmUgZXZlbiBiZWVuIGluIGEgY2FsbGApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvQ2FsbChhcmdzLmFyZ3MsIGFyZ3MucHJvbWlzZU9iaik7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuTmV4dENhbGwsIG5leHRBbGxvd2VkQ2FsbCAtIHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJnczogQXJncyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAocGVuZGluZ0FyZ3MpIHtcbiAgICAgICAgICAgIHBlbmRpbmdBcmdzLmFyZ3MgPSBhcmdzO1xuICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmdBcmdzLnByb21pc2VPYmoucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBwZW5kaW5nQXJncyA9IHsgYXJncywgcHJvbWlzZU9iajogcHJvbWlzZU9iaigpIH07XG4gICAgICAgIHJ1bk5leHRDYWxsKCk7XG4gICAgICAgIHJldHVybiBwZW5kaW5nQXJncy5wcm9taXNlT2JqLnByb21pc2U7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dElkKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpICsgXCJfXCIgKyBNYXRoLnJhbmRvbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlGcm9tT3JkZXJPYmplY3Q8VD4ob2JqOiB7IFtvcmRlcjogbnVtYmVyXTogVCB9KTogVFtdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gb2JqLnNsaWNlKCk7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaikuc29ydCgoYSwgYikgPT4gK2FbMF0gLSArYlswXSkubWFwKHggPT4geFsxXSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkICYmIHggIT09IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdDxUPihhcnI6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgdHlwZSBPYmplY3RWYWx1ZXM8VD4gPSBUW2tleW9mIFRdO1xuZXhwb3J0IGZ1bmN0aW9uIGVudHJpZXM8T2JqIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+KG9iajogT2JqKTogW2tleW9mIE9iaiwgT2JqZWN0VmFsdWVzPE9iaj5dW10ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopIGFzIGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXM8T2JqIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+KG9iajogT2JqKTogKGtleW9mIE9iailbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydDxUPihhcnI6IFRbXSwgc29ydEtleTogKG9iajogVCkgPT4gdW5rbm93bikge1xuICAgIGlmIChhcnIubGVuZ3RoIDw9IDEpIHJldHVybiBhcnI7XG4gICAgYXJyLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoc29ydEtleShhKSwgc29ydEtleShiKSkpO1xuICAgIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290RG9tYWluKGhvc3RuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoaG9zdG5hbWUuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKSB7XG4gICAgICAgIGhvc3RuYW1lID0gaG9zdG5hbWUuc2xpY2UoXCJodHRwczovL1wiLmxlbmd0aCk7XG4gICAgfVxuICAgIGhvc3RuYW1lID0gaG9zdG5hbWUuc3BsaXQoXCIvXCIpWzBdO1xuICAgIGxldCBwYXJ0cyA9IGhvc3RuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICBob3N0bmFtZSA9IHBhcnRzLnNsaWNlKC0yKS5qb2luKFwiLlwiKTtcbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KFwiOlwiKVswXTtcbiAgICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBjbGFzcyBRdWV1ZUxpbWl0ZWQ8VD4ge1xuICAgIHByaXZhdGUgaXRlbXM6IFRbXSA9IFtdO1xuICAgIHByaXZhdGUgbmV4dEluZGV4ID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1heENvdW50OiBudW1iZXIpIHsgfVxuXG4gICAgcHVibGljIHB1c2goaXRlbTogVCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zW3RoaXMubmV4dEluZGV4XSA9IGl0ZW07XG4gICAgICAgIHRoaXMubmV4dEluZGV4ID0gKHRoaXMubmV4dEluZGV4ICsgMSkgJSB0aGlzLm1heENvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxVbm9yZGVyZWQoKTogVFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLm5leHRJbmRleCA9IDA7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0T2xkZXN0KCk6IFQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubmV4dEluZGV4IC0gMTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCArPSB0aGlzLm1heENvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJhc2ljPFQsIFY+KGFycmF5OiBUW10sIGdldFZhbDogKHZhbDogVCkgPT4gViwgc2VhcmNoVmFsdWU6IFYpOiBudW1iZXIge1xuICAgIHJldHVybiBiaW5hcnlTZWFyY2hJbmRleChhcnJheS5sZW5ndGgsIGkgPT4gY29tcGFyZShnZXRWYWwoYXJyYXlbaV0pLCBzZWFyY2hWYWx1ZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJhc2ljMjxULCBWPihhcnJheTogVFtdLCBnZXRWYWw6ICh2YWw6IFQpID0+IFYsIHNlYXJjaFZhbHVlOiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoSW5kZXgoYXJyYXkubGVuZ3RoLCBpID0+IGNvbXBhcmUoZ2V0VmFsKGFycmF5W2ldKSwgZ2V0VmFsKHNlYXJjaFZhbHVlKSkpO1xufVxuXG4vKipcbiAqICBTZWFyY2hlcyBpbmRleGVzLCBhbGxvd2luZyB5b3UgdG8gcXVlcnkgc3RydWN0dXJlcyB0aGF0IGFyZW4ndCBhcnJheXMuIFRvIHNlYXJjaCBhbiBhcnJheSwgdXNlOlxuICogICAgICBgYmluYXJ5U2VhcmNoSW5kZXgoYXJyYXkubGVuZ3RoLCBpID0+IGNvbXBhcmUoYXJyYXlbaV0sIHNlYXJjaFZhbHVlKSlgXG4gKiBcbiAqICAgICAgTk9URTogSWYgdGhlcmUgYXJlIGR1cGxpY2F0ZXMsIHJldHVybnMgdGhlIGZpcnN0IG1hdGNoLlxuICogXG4gKiAgICAgIE5PVEU6IElmIHRoZSB2YWx1ZSBjYW4ndCBiZSBmb3VuZCwgcmV0dXJucyB0aGUgYml0d2lzZSBuZWdhdGlvbiBvZiB0aGUgaW5kZXggd2hlcmUgaXQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogXG4gKiAgICAgIE5PVEU6IFdpdGggYGlmIChpbmRleCA8IDApIGluZGV4ID0gfmluZGV4O2AgeW91IHdpbGwgZ2V0IGFuIGluZGV4IG9mIHRoZSB2YWx1ZSA+PSB0aGUgdGFyZ2V0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoSW5kZXgobGlzdENvdW50OiBudW1iZXIsIGNvbXBhcmU6IChsaHNJbmRleDogbnVtYmVyKSA9PiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChsaXN0Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIH4wO1xuICAgIH1cbiAgICBsZXQgbWluID0gMDtcbiAgICBsZXQgbWF4ID0gbGlzdENvdW50IC0gMTtcbiAgICB3aGlsZSAobWluIDwgbWF4KSB7XG4gICAgICAgIGxldCBmaW5nZXJJbmRleCA9IE1hdGguZmxvb3IoKG1heCArIG1pbikgLyAyKTtcbiAgICAgICAgbGV0IGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUoZmluZ2VySW5kZXgpO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlIDwgMCkge1xuICAgICAgICAgICAgbWluID0gZmluZ2VySW5kZXggKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF4ID0gZmluZ2VySW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNvbXBhcmlzb24gPSBjb21wYXJlKG1pbik7XG4gICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHJldHVybiBtaW47XG4gICAgaWYgKGNvbXBhcmlzb24gPiAwKSByZXR1cm4gfm1pbjtcbiAgICByZXR1cm4gfihtaW4gKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUobGhzOiB1bmtub3duLCByaHM6IHVua25vd24pOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgbGhzICE9PSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlKHR5cGVvZiBsaHMsIHR5cGVvZiByaHMpO1xuICAgIH1cbiAgICBpZiAobGhzID09PSByaHMpIHJldHVybiAwO1xuICAgIGlmIChsaHMgPT09IG51bGwgJiYgcmhzICE9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgaWYgKGxocyAhPT0gbnVsbCAmJiByaHMgPT09IG51bGwpIHJldHVybiAxO1xuICAgIGlmICh0eXBlb2YgbGhzID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4obGhzKSkge1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihyaHMpKSByZXR1cm4gMDtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNOYU4ocmhzKSkgcmV0dXJuICsxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsaHMgYXMgYW55IDwgKHJocyBhcyBhbnkpKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIDE7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5KGxoczogdW5rbm93bltdLCByaHM6IHVua25vd25bXSk6IG51bWJlciB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihsaHMubGVuZ3RoLCByaHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wYXJpc29uID0gY29tcGFyZShsaHNbaV0sIHJoc1tpXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uICE9PSAwKSByZXR1cm4gY29tcGFyaXNvbjtcbiAgICB9XG4gICAgcmV0dXJuIGxocy5sZW5ndGggLSByaHMubGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0SW50b1NvcnRlZExpc3Q8VD4obGlzdDogVFtdLCBtYXA6ICh2YWw6IFQpID0+IHN0cmluZyB8IG51bWJlciwgZWxlbWVudDogVCkge1xuICAgIGxldCBzZWFyY2hWYWx1ZSA9IG1hcChlbGVtZW50KTtcbiAgICBsZXQgaW5kZXggPSBiaW5hcnlTZWFyY2hJbmRleChsaXN0Lmxlbmd0aCwgaSA9PiBjb21wYXJlKG1hcChsaXN0W2ldKSwgc2VhcmNoVmFsdWUpKTtcbiAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IH5pbmRleDtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMCwgZWxlbWVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbVNvcnRlZExpc3Q8VD4obGlzdDogVFtdLCBtYXA6ICh2YWw6IFQpID0+IHN0cmluZyB8IG51bWJlciwgc2VhcmNoVmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGxldCBpbmRleCA9IGJpbmFyeVNlYXJjaEluZGV4KGxpc3QubGVuZ3RoLCBpID0+IGNvbXBhcmUobWFwKGxpc3RbaV0pLCBzZWFyY2hWYWx1ZSkpO1xuICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dFRvRXJyb3I8VD4odGltZTogbnVtYmVyLCBwOiBQcm9taXNlPFQ+LCBlcnI6ICgpID0+IEVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIoKSksIHRpbWUpO1xuICAgICAgICBwLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KS5maW5hbGx5KCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KSk7XG4gICAgfSk7XG59XG5cbi8vIE5PVEU6IEJvdGggZXJyb3JzIGFuZCB0aW1lb3V0cyBhcmUgY29udmVydGVkIHRvIHVuZGVmaW5lZFxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXRUb1VuZGVmaW5lZDxUPih0aW1lOiBudW1iZXIsIHA6IFByb21pc2U8VD4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VCB8IHVuZGVmaW5lZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgdGltZW91dFRvVW5kZWZpbmVkIHRpbWVkIG91dCBhZnRlciAke3RpbWV9YCk7XG4gICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgICBwLnRoZW4ocmVzb2x2ZSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGB0aW1lb3V0VG9VbmRlZmluZWQgZXJyb3I6ICR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5maW5hbGx5KCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGltZW91dFRvVW5kZWZpbmVkU2lsZW50PFQ+KHRpbWU6IG51bWJlciwgcDogUHJvbWlzZTxUPikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgICBwLnRoZW4oXG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5maW5hbGx5KCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclRvV2FybmluZzxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogdm9pZCB7XG4gICAgLy8gUmV0dXJuIHRoZSBwcm9taXNlLCBzbyB0aGV5IGNhbiB3YWl0IGlmIHRoZXkgd2FudCwgYnV0IGhhdmUgdGhlIHJldHVybiB0eXBlIGJlIHZvaWQsXG4gICAgLy8gIHNvIHRoYXQgdGhleSBkb24ndCBoYXZlIHRvIGF3YWl0IGl0LlxuICAgIHJldHVybiBwcm9taXNlLmNhdGNoKGUgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oZS5zdGFjayk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55O1xuICAgIH0pIGFzIGFueTtcbn1cbiIsImV4cG9ydCB0eXBlIE1heWJlUHJvbWlzZTxUPiA9IFQgfCBQcm9taXNlPFQ+O1xuXG5leHBvcnQgdHlwZSBBcmdzPFQ+ID0gVCBleHRlbmRzICguLi5hcmdzOiBpbmZlciBWKSA9PiBhbnkgPyBWIDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIEFueUZ1bmN0aW9uID0gKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuSGF2ZUNoaWxkcmVuKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgeyBba2V5IGluIFByb3BlcnR5S2V5XTogdW5rbm93biB9IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKG1pbGxpc2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkLCBtYXhBYnNvbHV0ZVZhbHVlPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG1pbGxpc2Vjb25kcyAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiXCI7XG4gICAgaWYgKG1pbGxpc2Vjb25kcyA9PT0gMCkgcmV0dXJuIFwiMG1zXCI7XG4gICAgaWYgKG1pbGxpc2Vjb25kcyA8IDApIHtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgZm9ybWF0VGltZSgtbWlsbGlzZWNvbmRzLCBtYXhBYnNvbHV0ZVZhbHVlKTtcbiAgICB9XG4gICAgbGV0IHNjYWxlID0gbWlsbGlzZWNvbmRzO1xuICAgIGlmIChtYXhBYnNvbHV0ZVZhbHVlKSB7XG4gICAgICAgIHNjYWxlID0gTWF0aC5tYXgoc2NhbGUsIG1heEFic29sdXRlVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoc2NhbGUgPCAxIC8gMTAwMCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzICogMTAwMCAqIDEwMDAsIDMpICsgXCJuc1wiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgKiAxMDAwLCAzKSArIFwidXNcIjtcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMTAwMCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzLCAzKSArIFwibXNcIjtcbiAgICAgICAgLy8gVXNlIHNlY29uZHMgdW50aWwgd2UgaGF2ZSAxMCBtaW51dGVzLCBhcyBkZWNpbWFsIG1pbnV0ZXMgYXJlIGNvbmZ1c2luZ1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwICogNjAgKiAxMCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzIC8gMTAwMCwgMykgKyBcInNcIjtcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMTAwMCAqIDYwICogNjApIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcyAvIDEwMDAgLyA2MCwgMykgKyBcIm1cIjtcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMTAwMCAqIDYwICogNjAgKiAyNCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzIC8gMTAwMCAvIDYwIC8gNjAsIDMpICsgXCJoXCI7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgMTAwMCAqIDYwICogNjAgKiAyNCAqIDEwKSB7XG4gICAgICAgIC8vICAgICBsZXQgcmVtYWluaW5nID0gTWF0aC5yb3VuZChtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICAgICAgLy8gICAgIGxldCBzZWNvbmRzID0gcmVtYWluaW5nICUgNjA7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLT0gc2Vjb25kcztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAvPSA2MDtcbiAgICAgICAgLy8gICAgIGxldCBtaW51dGVzID0gcmVtYWluaW5nICUgNjA7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLT0gbWludXRlcztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAvPSA2MDtcbiAgICAgICAgLy8gICAgIGxldCBob3VycyA9IHJlbWFpbmluZztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAtPSBob3VycztcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAvPSAyNDtcbiAgICAgICAgLy8gICAgIGxldCBkYXlzID0gcmVtYWluaW5nO1xuICAgICAgICAvLyAgICAgbGV0IHRpbWUgPSBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICAgICAgLy8gICAgIGlmIChkYXlzID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIGlmIChkYXlzID09PSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRpbWUgPSBgMSBkYXkgJHt0aW1lfWA7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGltZSA9IGAke2RheXN9IGRheXMgJHt0aW1lfWA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIHRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheXMgPSBNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpO1xuICAgICAgICByZXR1cm4gYCR7ZGF5c30gZGF5c2A7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0RGVjaW1hbHMobWF4QWJzb2x1dGVWYWx1ZTogbnVtYmVyLCB0YXJnZXREaWdpdHM6IG51bWJlcikge1xuICAgIGxldCBpbnREaWdpdHMgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAobWF4QWJzb2x1dGVWYWx1ZSkgKyAxKTtcbiAgICBpZiAoaW50RGlnaXRzIDwgMCkgaW50RGlnaXRzID0gMTtcbiAgICBsZXQgZGVjaW1hbERpZ2l0cyA9IHRhcmdldERpZ2l0cyAtIGludERpZ2l0cztcbiAgICAvLyBIYXBwZW5zIGlmIHRoZSBudW1iZXIgaXMgc28gY2xvc2UgdG8gaGF2aW5nIHRvbyBtYW55IGRpZ2l0cyB0aGF0IE1hdGgubG9nMTAgcm91bmRzIGl0IG92ZXIuXG4gICAgaWYgKGRlY2ltYWxEaWdpdHMgPCAwKSB7XG4gICAgICAgIGRlY2ltYWxEaWdpdHMgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZGVjaW1hbERpZ2l0cztcbn1cblxuLyoqIEFkZHMgZGVjaW1hbCBkaWdpdHMgdG8gcmVhY2ggZGlnaXRzLiBJZiB0aGUgbnVtYmVyIGlzIHNpbXBseSB0b28gbGFyZ2UsIGl0IHdvbid0IHJlbW92ZVxuICogICAgICBkaWdpdHMsIHRoZXJlIHdpbGwgaW5zdGVhZCBqdXN0IGJlIG5vIGRlY2ltYWwgcG9pbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNYXhEZWNpbWFscyhudW06IG51bWJlciwgdGFyZ2V0RGlnaXRzOiBudW1iZXIsIG1heEFic29sdXRlVmFsdWU/OiBudW1iZXIsIGV4YWN0RGVjaW1hbHM/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgbnVtICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCIwXCI7XG4gICAgLy8gdG9GaXhlZCBoYXMgYSBtYXggb2YgMTAwIGRpZ2l0c1xuICAgIGlmICh0YXJnZXREaWdpdHMgPiAxMDApIHRhcmdldERpZ2l0cyA9IDEwMDtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShudW0pKSByZXR1cm4gbnVtLnRvRml4ZWQodGFyZ2V0RGlnaXRzKTtcblxuICAgIGlmIChudW0gPCAwKSByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMoLW51bSwgdGFyZ2V0RGlnaXRzLCBtYXhBYnNvbHV0ZVZhbHVlLCBleGFjdERlY2ltYWxzKTtcblxuICAgIC8vIFRJTUlORzpcbiAgICAvLyAgfjUwbnMgICB0b1N0cmluZ1xuICAgIC8vICB+NDAwbnMgIHRvTG9jYWxlU3RyaW5nXG4gICAgLy8gIH41MDBucyAgdG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiKVxuICAgIC8vICB+MjB1cyAgIHRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSlcbiAgICAvLyBTbywgd2UgYXJlIGF2b2lkaW5nIHVzaW5nIHRvTG9jYWxlU3RyaW5nLCBmb3Igbm93LlxuXG4gICAgbWF4QWJzb2x1dGVWYWx1ZSA9IG1heEFic29sdXRlVmFsdWUgPz8gTWF0aC5hYnMobnVtKTtcblxuICAgIGxldCB0YXJnZXREZWNpbWFscyA9IGV4YWN0RGVjaW1hbHMgPz8gZ2V0VGFyZ2V0RGVjaW1hbHMobWF4QWJzb2x1dGVWYWx1ZSwgdGFyZ2V0RGlnaXRzKTtcbiAgICBsZXQgdGV4dCA9IG51bS50b0ZpeGVkKHRhcmdldERlY2ltYWxzKTtcbiAgICBsZXQgcGFydHMgPSB0ZXh0LnNwbGl0KFwiLlwiKTtcbiAgICBsZXQgaW50ZWdlciA9IHBhcnRzWzBdO1xuICAgIGxldCBkZWNpbWFscyA9IHBhcnRzWzFdID8/IFwiXCI7XG5cbiAgICBpZiAoZXhhY3REZWNpbWFscykge1xuICAgICAgICB3aGlsZSAoZGVjaW1hbHMubGVuZ3RoIDwgZXhhY3REZWNpbWFscykge1xuICAgICAgICAgICAgZGVjaW1hbHMgKz0gXCIwXCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZGVjaW1hbHNbZGVjaW1hbHMubGVuZ3RoIC0gMV0gPT09IFwiMFwiKSB7XG4gICAgICAgICAgICBkZWNpbWFscyA9IGRlY2ltYWxzLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuXG4gICAgLy8gTk9URTogT05MWSBhZGQgY29tbWEgZ3JvdXBzIGlmIGl0IGlzID4gNCBkaWdpdHMuIEFzIDQyMzRLIGlzIGVhc2lseSByZWFkLCBhbmQgY29tbWFzXG4gICAgLy8gIG9ubHkgcmVhbGx5IG1hdHRlciBmb3IgbnVtYmVycyBzdWNoIGFzIDQyMzQ1MjNLLCB3aGljaCBpcyBoYXJkIHRvIHJlYWQuXG4gICAgaWYgKGludGVnZXIubGVuZ3RoID4gNCkge1xuICAgICAgICBmb3IgKGxldCBpID0gaW50ZWdlci5sZW5ndGg7IGkgPiAwOyBpIC09IDMpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGkgLSAzO1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xuICAgICAgICAgICAgbGV0IHN0ciA9IGludGVnZXIuc2xpY2Uoc3RhcnQsIGkpO1xuICAgICAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IFwiLFwiICsgb3V0cHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0ID0gc3RyICsgb3V0cHV0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gaW50ZWdlcjtcbiAgICB9XG5cbiAgICBpZiAoZGVjaW1hbHMpIHtcbiAgICAgICAgb3V0cHV0ICs9IFwiLlwiICsgZGVjaW1hbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqIEFjdHVhbGx5IGZvcm1hdHMgYW55IG51bWJlciwgaW5jbHVkaW5nIGRlY2ltYWxzLCBieSB1c2luZyBLLCBNIGFuZCBCIHN1ZmZpeGVzIHRvIGdldCBzbWFsbGVyIHZhbHVlc1xuICogICAgICBUT0RPOiBTdXBwb3J0IHVLLCB1TSBhbmQgdUIgc3VmZml4ZXMgZm9yIHZlcnkgc21hbGwgbnVtYmVycz9cbiAqICAgICAgPD0gNiBjaGFyYWN0ZXJzICg8PSA1IGlmIHBvc2l0aXZlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKGNvdW50OiBudW1iZXIgfCB1bmRlZmluZWQsIG1heEFic29sdXRlVmFsdWU/OiBudW1iZXIsIG5vRGVjaW1hbD86IGJvb2xlYW4sIHNwZWNpYWxDdXJyZW5jeT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgY291bnQgIT09IFwibnVtYmVyXCIpIHJldHVybiBcIjBcIjtcbiAgICBpZiAoY291bnQgPCAwKSB7XG4gICAgICAgIHJldHVybiBcIi1cIiArIGZvcm1hdE51bWJlcigtY291bnQsIG1heEFic29sdXRlVmFsdWUsIG5vRGVjaW1hbCwgc3BlY2lhbEN1cnJlbmN5KTtcbiAgICB9XG5cbiAgICBtYXhBYnNvbHV0ZVZhbHVlID0gbWF4QWJzb2x1dGVWYWx1ZSA/PyBNYXRoLmFicyhjb3VudCk7XG5cbiAgICBsZXQgbWF4RGVjaW1hbHMgPSAzO1xuXG4gICAgLy8gTk9URTogV2UgZG9uJ3Qgc3dpdGNoIHVuaXRzIGFzIHNvb24gYXMgd2UgcG9zc2libGUgY2FuLCBiZWNhdXNlLi4uXG4gICAgLy8gIDMuNTk0IHZzIDMuNTg0IGlzIGhhcmRlciB0byBxdWlja2x5IGRpc3Rpbmd1aXNoIGNvbXBhcmVkIHRvIDM1OTQgYW5kIDM1ODQsXG4gICAgLy8gIHRoZSBkZWNpbWFsIHNpbXBseSBtYWtlcyBpdCBoYXJkZXIgdG8gcmVhZCwgYW5kIGxhcmdlci5cbiAgICAvLyBOT1RFOiBUaGlzIG51bWJlciBzaG91bGQgcHJldmVudCB1cyBmcm9tIGV2ZXIgdXNpbmcgNSBkaWdpdHMsIHNvIHRoYXQgd2UgbmV2ZXIgbmVlZCBjb21tYXNcbiAgICAvLyAgRm9yIGV4YW1wbGUsIGlmIHRoZSBmYWN0b3IgaXMgMTAgdGhlbiwgOTk5OS41IGlzIGtlcHQgd2l0aCBhIGRpdmlzb3Igb2YgMSwgYW5kIHRoZW4gcm91bmRzIHVwIHRvXG4gICAgLy8gIFwiMTAsMDAwXCIuIFNvIHdlIHdhbnQgYW55IHZhbHVlIHdoaWNoIHJvdW5kcyB1cCBhdCA1IGRpZ2l0cyB0byBiZSBwdXQgaW4gdGhlIG5leHQgZ3JvdXAgKGFuZCBoYXZpbmdcbiAgICAvLyAgZXh0cmEgdmFsdWVzIHB1dCBpbiB0aGUgbmV4dCBncm91cCBpcyBmaW5lLCBhcyB3ZSB3b24ndCBzaG93IHRoZSBkZWNpbWFsIHZhbHVlIGFueXdheXMsIHNvIGl0IG9ubHlcbiAgICAvLyAgbWVhbnMgOTk5OSB3cmFwcyBhcm91bmQgdG8gMTBLIGEgYml0IGZhc3RlcikuXG4gICAgY29uc3QgZXh0cmFGYWN0b3IgPSA5Ljk5OTQ5OTk5O1xuICAgIGxldCBkaXZpc29yID0gMTtcbiAgICBsZXQgc3VmZml4ID0gXCJcIjtcbiAgICBsZXQgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA9IGZhbHNlO1xuICAgIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAwMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDExO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMTA7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDk7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gODtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDc7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDY7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4xKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gNTtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgaWYgKHNwZWNpYWxDdXJyZW5jeSkge1xuICAgICAgICAgICAgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiS1wiO1xuICAgICAgICBkaXZpc29yID0gMTAwMDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogMTAwMCAqIDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIk1cIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiAxMDAwO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIkJcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiAxMDAwICogMTAwMDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiVFwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWZmaXggPSBcIlFcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwO1xuICAgIH1cbiAgICBjb3VudCAvPSBkaXZpc29yO1xuICAgIG1heEFic29sdXRlVmFsdWUgLz0gZGl2aXNvcjtcbiAgICBpZiAobm9EZWNpbWFsKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMoY291bnQsIG1heERlY2ltYWxzLCBtYXhBYnNvbHV0ZVZhbHVlLCBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID8gMiA6IHVuZGVmaW5lZCkgKyBzdWZmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRCaW5hcnlOdW1iZXIoY291bnQ6IG51bWJlciB8IHVuZGVmaW5lZCwgbWF4QWJzb2x1dGVWYWx1ZT86IG51bWJlciwgbm9EZWNpbWFsPzogYm9vbGVhbiwgc3BlY2lhbEN1cnJlbmN5PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBjb3VudCAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiMFwiO1xuICAgIGlmIChjb3VudCA8IDApIHtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgZm9ybWF0TnVtYmVyKC1jb3VudCwgbWF4QWJzb2x1dGVWYWx1ZSwgbm9EZWNpbWFsLCBzcGVjaWFsQ3VycmVuY3kpO1xuICAgIH1cblxuICAgIG1heEFic29sdXRlVmFsdWUgPSBtYXhBYnNvbHV0ZVZhbHVlID8/IE1hdGguYWJzKGNvdW50KTtcblxuICAgIC8vIE5PVEU6IFdlIGRvbid0IHN3aXRjaCB1bml0cyBhcyBzb29uIGFzIHdlIHBvc3NpYmxlIGNhbiwgYmVjYXVzZS4uLlxuICAgIC8vICAzLjU5NCB2cyAzLjU4NCBpcyBoYXJkZXIgdG8gcXVpY2tseSBkaXN0aW5ndWlzaCBjb21wYXJlZCB0byAzNTk0IGFuZCAzNTg0LFxuICAgIC8vICB0aGUgZGVjaW1hbCBzaW1wbHkgbWFrZXMgaXQgaGFyZGVyIHRvIHJlYWQsIGFuZCBsYXJnZXIuXG4gICAgLy8gTk9URTogVGhpcyBudW1iZXIgc2hvdWxkIHByZXZlbnQgdXMgZnJvbSBldmVyIHVzaW5nIDUgZGlnaXRzLCBzbyB0aGF0IHdlIG5ldmVyIG5lZWQgY29tbWFzXG4gICAgLy8gIEZvciBleGFtcGxlLCBpZiB0aGUgZmFjdG9yIGlzIDEwIHRoZW4sIDk5OTkuNSBpcyBrZXB0IHdpdGggYSBkaXZpc29yIG9mIDEsIGFuZCB0aGVuIHJvdW5kcyB1cCB0b1xuICAgIC8vICBcIjEwLDAwMFwiLiBTbyB3ZSB3YW50IGFueSB2YWx1ZSB3aGljaCByb3VuZHMgdXAgYXQgNSBkaWdpdHMgdG8gYmUgcHV0IGluIHRoZSBuZXh0IGdyb3VwIChhbmQgaGF2aW5nXG4gICAgLy8gIGV4dHJhIHZhbHVlcyBwdXQgaW4gdGhlIG5leHQgZ3JvdXAgaXMgZmluZSwgYXMgd2Ugd29uJ3Qgc2hvdyB0aGUgZGVjaW1hbCB2YWx1ZSBhbnl3YXlzLCBzbyBpdCBvbmx5XG4gICAgLy8gIG1lYW5zIDk5OTkgd3JhcHMgYXJvdW5kIHRvIDEwSyBhIGJpdCBmYXN0ZXIpLlxuICAgIGNvbnN0IGV4dHJhRmFjdG9yID0gOS45OTk0OTk5OTtcbiAgICBsZXQgZGl2aXNvciA9IDE7XG4gICAgbGV0IHN1ZmZpeCA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPSBmYWxzZTtcbiAgICBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMjQgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBpZiAoc3BlY2lhbEN1cnJlbmN5KSB7XG4gICAgICAgICAgICBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMjQgKiAxMDI0ICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJLXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDI0O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMjQgKiAxMDI0ICogMTAyNCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiTVwiO1xuICAgICAgICBkaXZpc29yID0gMTAyNCAqIDEwMjQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3VmZml4ID0gXCJHXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDI0ICogMTAyNCAqIDEwMjQ7XG4gICAgfVxuICAgIGNvdW50IC89IGRpdmlzb3I7XG4gICAgbWF4QWJzb2x1dGVWYWx1ZSAvPSBkaXZpc29yO1xuXG4gICAgbGV0IG1heERlY2ltYWxzID0gbm9EZWNpbWFsID8gMCA6IDM7XG5cbiAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMoY291bnQsIG1heERlY2ltYWxzLCBtYXhBYnNvbHV0ZVZhbHVlLCBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID8gMiA6IHVuZGVmaW5lZCkgKyBzdWZmaXg7XG59XG5cbi8qKiBZWVlZL01NL0REIEhIOk1NOlNTIFBNL0FNICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgbGV0IHN0clRpbWUgPSBwKGhvdXJzKSArIFwiOlwiICsgcChtaW51dGVzKSArIFwiOlwiICsgcChzZWNvbmRzKSArIFwiIFwiICsgYW1wbTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBwKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBwKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgc3RyVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lRGV0YWlsZWQodGltZTogbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBsZXQgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBsZXQgbWlsbGlzZWNvbmRzU3RyaW5nID0gbWlsbGlzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIwXCIpO1xuXG4gICAgbGV0IHRpbWVTdHJpbmcgPSB0aW1lLnRvU3RyaW5nKCk7XG4gICAgbGV0IGRlY2ltYWxJbmRleCA9IHRpbWVTdHJpbmcuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGRlY2ltYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGV0IGZyYWN0aW9uYWxQYXJ0ID0gdGltZVN0cmluZy5zdWJzdHJpbmcoZGVjaW1hbEluZGV4ICsgMSk7XG4gICAgICAgIG1pbGxpc2Vjb25kc1N0cmluZyArPSBmcmFjdGlvbmFsUGFydDtcbiAgICB9XG5cbiAgICBsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgbGV0IHN0clRpbWUgPSBwKGhvdXJzKSArIFwiOlwiICsgcChtaW51dGVzKSArIFwiOlwiICsgcChzZWNvbmRzKSArIFwiLlwiICsgbWlsbGlzZWNvbmRzU3RyaW5nICsgXCIgXCIgKyBhbXBtO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIHAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHAoZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBzdHJUaW1lO1xufVxuXG5cbi8vIExvb2t1cCB0YWJsZSBmb3IgY29tbW9uIHRpbWV6b25lIGFiYnJldmlhdGlvbnMgYnkgVVRDIG9mZnNldCAoaW4gbWludXRlcylcbmNvbnN0IHRpbWV6b25lQWJicmV2aWF0aW9uczogeyBbb2Zmc2V0TWludXRlczogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgLy8gVVRDIGFuZCBHTVRcbiAgICBcIjBcIjogXCJVVENcIixcblxuICAgIC8vIFVTL0NhbmFkYSB0aW1lem9uZXNcbiAgICBcIjMwMFwiOiBcIkVTVFwiLCAgICAgLy8gVVRDLTUgKEVhc3Rlcm4gU3RhbmRhcmQgVGltZSlcbiAgICBcIjI0MFwiOiBcIkVEVFwiLCAgICAgLy8gVVRDLTQgKEVhc3Rlcm4gRGF5bGlnaHQgVGltZSlcbiAgICBcIjM2MFwiOiBcIkNTVFwiLCAgICAgLy8gVVRDLTYgKENlbnRyYWwgU3RhbmRhcmQgVGltZSkgXG4gICAgXCI0MjBcIjogXCJNU1RcIiwgICAgIC8vIFVUQy03IChNb3VudGFpbiBTdGFuZGFyZCBUaW1lKVxuICAgIFwiNDgwXCI6IFwiUFNUXCIsICAgICAvLyBVVEMtOCAoUGFjaWZpYyBTdGFuZGFyZCBUaW1lKVxuXG4gICAgLy8gRXVyb3BlYW4gdGltZXpvbmVzXG4gICAgXCItNjBcIjogXCJDRVRcIiwgICAgIC8vIFVUQysxIChDZW50cmFsIEV1cm9wZWFuIFRpbWUpXG4gICAgXCItMTIwXCI6IFwiQ0VTVFwiLCAgIC8vIFVUQysyIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKVxuXG4gICAgLy8gT3RoZXIgY29tbW9uIHRpbWV6b25lc1xuICAgIFwiLTQ4MFwiOiBcIkNTVFwiLCAgICAvLyBVVEMrOCAoQ2hpbmEgU3RhbmRhcmQgVGltZSlcbiAgICBcIi01NDBcIjogXCJKU1RcIiwgICAgLy8gVVRDKzkgKEphcGFuIFN0YW5kYXJkIFRpbWUpXG4gICAgXCItMzMwXCI6IFwiSVNUXCIsICAgIC8vIFVUQys1OjMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxuICAgIFwiLTU3MFwiOiBcIkFDU1RcIiwgICAvLyBVVEMrOTozMCAoQXVzdHJhbGlhbiBDZW50cmFsIFN0YW5kYXJkIFRpbWUpXG4gICAgXCItNjAwXCI6IFwiQUVTVFwiLCAgIC8vIFVUQysxMCAoQXVzdHJhbGlhbiBFYXN0ZXJuIFN0YW5kYXJkIFRpbWUpXG59O1xuXG5cbi8vIFlZWVktTU0tRERfSEgtTU0tU1MubW1tIFRJTUVaT05FXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RmlsZVRpbWVzdGFtcExvY2FsKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBwKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIGxldCBkYXkgPSBwKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBsZXQgaG91cnMgPSBwKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgbGV0IG1pbnV0ZXMgPSBwKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICBsZXQgc2Vjb25kcyA9IHAoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgIGxldCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGxldCBtaWxsaXNlY29uZHNTdHJpbmcgPSBtaWxsaXNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgzLCBcIjBcIik7XG5cbiAgICBsZXQgdGltZVN0cmluZyA9IHRpbWUudG9TdHJpbmcoKTtcbiAgICBsZXQgZGVjaW1hbEluZGV4ID0gdGltZVN0cmluZy5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoZGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBsZXQgZnJhY3Rpb25hbFBhcnQgPSB0aW1lU3RyaW5nLnN1YnN0cmluZyhkZWNpbWFsSW5kZXggKyAxKTtcbiAgICAgICAgbWlsbGlzZWNvbmRzU3RyaW5nICs9IGZyYWN0aW9uYWxQYXJ0O1xuICAgIH1cbiAgICAvLyBHZXQgdGltZXpvbmUgb2Zmc2V0IGluIG1pbnV0ZXMgKG5lZ2F0aXZlIG9mIGdldFRpbWV6b25lT2Zmc2V0IGJlY2F1c2UgaXQgcmV0dXJucyBvcHBvc2l0ZSBzaWduKVxuICAgIGxldCB0aW1lem9uZU9mZnNldE1pbnV0ZXMgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICAvLyBMb29rIHVwIHRoZSBhYmJyZXZpYXRpb24gb3IgZmFsbGJhY2sgdG8gbnVtZXJpYyBmb3JtYXRcbiAgICBsZXQgdGltZXpvbmVTdHJpbmcgPSB0aW1lem9uZUFiYnJldmlhdGlvbnNbdGltZXpvbmVPZmZzZXRNaW51dGVzLnRvU3RyaW5nKCldO1xuICAgIGlmICghdGltZXpvbmVTdHJpbmcpIHtcbiAgICAgICAgLy8gRmFsbGJhY2s6IGZvcm1hdCBhcyDCsUhITU1cbiAgICAgICAgbGV0IG9mZnNldFNpZ24gPSB0aW1lem9uZU9mZnNldE1pbnV0ZXMgPj0gMCA/IFwiK1wiIDogXCItXCI7XG4gICAgICAgIGxldCBvZmZzZXRIb3VycyA9IHAoTWF0aC5mbG9vcihNYXRoLmFicyh0aW1lem9uZU9mZnNldE1pbnV0ZXMpIC8gNjApKTtcbiAgICAgICAgbGV0IG9mZnNldE1pbnMgPSBwKE1hdGguYWJzKHRpbWV6b25lT2Zmc2V0TWludXRlcykgJSA2MCk7XG4gICAgICAgIHRpbWV6b25lU3RyaW5nID0gYCR7b2Zmc2V0U2lnbn0ke29mZnNldEhvdXJzfSR7b2Zmc2V0TWluc31gO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1fJHtob3Vyc30tJHttaW51dGVzfS0ke3NlY29uZHN9LiR7bWlsbGlzZWNvbmRzU3RyaW5nfV8ke3RpbWV6b25lU3RyaW5nfWA7XG59XG5cbi8qKiAyMDI0IEphbnVhcnkgMSwgTW9uZGF5LCAxMjo1MzowMnBtICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TmljZURhdGVUaW1lKHRpbWU6IG51bWJlcikge1xuICAgIGZ1bmN0aW9uIHAoczogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGxldCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgbGV0IGFtcG0gPSBob3VycyA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgIGxldCBzdHJUaW1lID0gcChob3VycykgKyBcIjpcIiArIHAobWludXRlcykgKyBcIjpcIiArIHAoc2Vjb25kcykgKyBhbXBtO1xuICAgIGxldCBkYXlzID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiIFwiICsgZGF0ZS50b0xvY2FsZVN0cmluZyhcImRlZmF1bHRcIiwgeyBtb250aDogXCJsb25nXCIgfSkgKyBcIiBcIiArIGRhdGUuZ2V0RGF0ZSgpICsgXCIsIFwiICsgZGF5c1tkYXRlLmdldERheSgpXSArIFwiLCBcIiArIHN0clRpbWU7XG59XG5cbi8qKiAyMDI0IEphbnVhcnkgMSwgTW9uZGF5LCAxMjo1MzowMnBtICg0IG1vbnRocyBhZ28pICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFZlcnlOaWNlRGF0ZVRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRpbWUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke2Zvcm1hdE5pY2VEYXRlVGltZSh0aW1lKX0gKCR7Zm9ybWF0VGltZShEYXRlLm5vdygpIC0gdGltZSl9KWA7XG59XG5cbi8qKiBZWVlZL01NL0REICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZSh0aW1lOiBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBwKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBwKGRhdGUuZ2V0RGF0ZSgpKTtcbn1cblxuLyoqIDw9IDYgY2hhcmFjdGVycyAoPD0gNSBpZiBwb3NpdGl2ZSkgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuIFwiMCVcIjtcbiAgICAvLyAxIGRlY2ltYWwgcG9pbnQsIHNvIHdlIGhhdmUgNSBjaGFyYWN0ZXJzIChqdXN0IGxpa2UgZm9ybWF0TnVtYmVyIHJldHVybnMgNSBjaGFyYWN0ZXJzKVxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMCkgLyAxMCArIFwiJVwiO1xufSIsIlxuZXhwb3J0IHR5cGUgU291cmNlTWFwID0ge1xuICAgIHZlcnNpb246IG51bWJlcjtcbiAgICBmaWxlOiBzdHJpbmc7XG4gICAgc291cmNlUm9vdDogXCJcIixcbiAgICBzb3VyY2VzOiBzdHJpbmdbXTtcbiAgICBzb3VyY2VzQ29udGVudDogc3RyaW5nW107XG4gICAgbmFtZXM6IG5ldmVyW107XG4gICAgbWFwcGluZ3M6IHN0cmluZztcbn07XG5leHBvcnQgdHlwZSBTb3VyY2VNYXBwaW5nID0ge1xuICAgIGdlbmVyYXRlZExpbmU6IG51bWJlcjtcbiAgICBnZW5lcmF0ZWRDb2x1bW46IG51bWJlcjtcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xuICAgIG9yaWdpbmFsTGluZTogbnVtYmVyO1xuICAgIG9yaWdpbmFsQ29sdW1uOiBudW1iZXI7XG59O1xuZXhwb3J0IHR5cGUgSW5Qcm9ncmVzc1NvdXJjZU1hcCA9IHtcbiAgICBzb3VyY2VzOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgY29udGVudHM6IHN0cmluZztcbiAgICB9W107XG4gICAgbWFwcGluZ3M6IFNvdXJjZU1hcHBpbmdbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTb3VyY2VNYXAoY29udGVudDogc3RyaW5nKToge1xuICAgIHNvdXJjZU1hcDogU291cmNlTWFwIHwgdW5kZWZpbmVkO1xuICAgIGNvZGU6IHN0cmluZztcbn0ge1xuICAgIC8vIFJlbW92ZSBhbnkgdXJsIG1hcHBpbmdzIChzbyBOT1QgZGF0YSBvbmVzKVxuICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcL1xcLyMgc291cmNlTWFwcGluZ1VSTD0oPyFkYXRhOilbXlxcc10rJC9tLCBcIi8vIHJlbW92ZWQgdXJsIHNvdXJjZW1hcFwiKTtcblxuICAgIGNvbnN0IHNvdXJjZU1hcFJlZ2V4ID0gL1xcL1xcLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtiYXNlNjQsKFteXFxzXSspJC9tO1xuICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaChzb3VyY2VNYXBSZWdleCk7XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7IHNvdXJjZU1hcDogdW5kZWZpbmVkLCBjb2RlOiBjb250ZW50IH07XG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZU1hcEpzb24gPSBCdWZmZXIuZnJvbShtYXRjaFsxXSwgXCJiYXNlNjRcIikudG9TdHJpbmcoKTtcbiAgICAvLyBIQUNLOiBJZiB0aGUgc291cmNlbWFwIGlzIGludmFsaWQsIHRyeSB0byByZW1vdmUgdHJhaWxpbmcgY2hhcmFjdGVycy4gRm9yIHNvbWUgcmVhc29uIHdlIHNvbWV0aW1lcyBoYXZlXG4gICAgLy8gIGV4dHJhIGNoYXJhY3RlcnMgYXQgdGhlIGVuZD8gQWxzbyB0cnkgdG8gYWRkIHNvbWUgY2hhcmFjdGVycyB0b28/XG4gICAgZnVuY3Rpb24gaXNKU09OKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgaWYgKGlzSlNPTihzb3VyY2VNYXBKc29uKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc291cmNlTWFwSnNvbiA9IHNvdXJjZU1hcEpzb24uc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICBpZiAoIWlzSlNPTihzb3VyY2VNYXBKc29uKSkge1xuICAgICAgICBpZiAoaXNKU09OKHNvdXJjZU1hcEpzb24gKyBcIl19XCIpKSB7XG4gICAgICAgICAgICBzb3VyY2VNYXBKc29uID0gc291cmNlTWFwSnNvbiArIFwiXX1cIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZU1hcCA9IEpTT04ucGFyc2Uoc291cmNlTWFwSnNvbikgYXMgU291cmNlTWFwO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlbWFwIGxpbmUgYnV0IGtlZXAgdGhlIGNvZGVcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShzb3VyY2VNYXBSZWdleCwgXCIvLyBtZXJnZWQgaW5saW5lIHNvdXJjZW1hcFwiKTtcblxuICAgICAgICByZXR1cm4geyBzb3VyY2VNYXAsIGNvZGU6IGNvbnRlbnQgfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgc291cmNlIG1hcDogJHtzb3VyY2VNYXBKc29ufWApO1xuICAgICAgICByZXR1cm4geyBzb3VyY2VNYXA6IHVuZGVmaW5lZCwgY29kZTogY29udGVudCB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlY29kZU1hcHBpbmdzKG1hcHBpbmdzOiBzdHJpbmcpOiBTb3VyY2VNYXBwaW5nW10ge1xuICAgIGNvbnN0IHZscVRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG4gICAgY29uc3QgdmxxRGVjb2RlID0gbmV3IE1hcChBcnJheS5mcm9tKHZscVRhYmxlKS5tYXAoKGMsIGkpID0+IFtjLCBpXSkpO1xuXG4gICAgZnVuY3Rpb24gZGVjb2RlVkxRKHN0cjogc3RyaW5nLCBwb3M6IHsgdmFsdWU6IG51bWJlciB9KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgICAgIGxldCBzaGlmdCA9IDA7XG4gICAgICAgIGxldCBjb250aW51YXRpb246IGJvb2xlYW47XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3QgYyA9IHN0cltwb3MudmFsdWUrK107XG4gICAgICAgICAgICBjb25zdCBkaWdpdCA9IHZscURlY29kZS5nZXQoYyk7XG4gICAgICAgICAgICBpZiAoZGlnaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBWTFEgY2hhcmFjdGVyOiAke0pTT04uc3RyaW5naWZ5KGMpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWF0aW9uID0gKGRpZ2l0ICYgMzIpID4gMDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGlnaXQgJiAzMTtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZSA8PCBzaGlmdDtcbiAgICAgICAgICAgIHNoaWZ0ICs9IDU7XG4gICAgICAgIH0gd2hpbGUgKGNvbnRpbnVhdGlvbik7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkTmVnYXRlID0gcmVzdWx0ICYgMTtcbiAgICAgICAgcmVzdWx0ID4+Pj0gMTtcbiAgICAgICAgcmV0dXJuIHNob3VsZE5lZ2F0ZSA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBTb3VyY2VNYXBwaW5nW10gPSBbXTtcbiAgICBsZXQgZ2VuZXJhdGVkTGluZSA9IDE7XG4gICAgbGV0IGdlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgbGV0IHNvdXJjZUluZGV4ID0gMDtcbiAgICBsZXQgb3JpZ2luYWxMaW5lID0gMTtcbiAgICBsZXQgb3JpZ2luYWxDb2x1bW4gPSAwO1xuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBtYXBwaW5ncy5zcGxpdChcIjtcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gc2VnbWVudHNbaV07XG4gICAgICAgIGlmICghbGluZSkge1xuICAgICAgICAgICAgZ2VuZXJhdGVkTGluZSsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBnZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBsaW5lLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgICAgICAgICAgaWYgKCFmaWVsZCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHsgdmFsdWU6IDAgfTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnREYXRhID0gW107XG5cbiAgICAgICAgICAgIHdoaWxlIChwb3MudmFsdWUgPCBmaWVsZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50RGF0YS5wdXNoKGRlY29kZVZMUShmaWVsZCwgcG9zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWdtZW50RGF0YS5sZW5ndGggPCA0KSBjb250aW51ZTtcblxuICAgICAgICAgICAgZ2VuZXJhdGVkQ29sdW1uICs9IHNlZ21lbnREYXRhWzBdO1xuICAgICAgICAgICAgc291cmNlSW5kZXggKz0gc2VnbWVudERhdGFbMV07XG4gICAgICAgICAgICBvcmlnaW5hbExpbmUgKz0gc2VnbWVudERhdGFbMl07XG4gICAgICAgICAgICBvcmlnaW5hbENvbHVtbiArPSBzZWdtZW50RGF0YVszXTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlZExpbmUsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVkQ29sdW1uLFxuICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4LFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsTGluZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbHVtbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdlbmVyYXRlZExpbmUrKztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEluUHJvZ3Jlc3NTb3VyY2VNYXAoc291cmNlTWFwOiBTb3VyY2VNYXApOiBJblByb2dyZXNzU291cmNlTWFwIHtcbiAgICBjb25zdCBzb3VyY2VzID0gc291cmNlTWFwLnNvdXJjZXMubWFwKChuYW1lLCBpKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBjb250ZW50czogc291cmNlTWFwLnNvdXJjZXNDb250ZW50W2ldIHx8IFwiXCIsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgbWFwcGluZ3MgPSBkZWNvZGVNYXBwaW5ncyhzb3VyY2VNYXAubWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlcyxcbiAgICAgICAgbWFwcGluZ3MsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvSW5Qcm9ncmVzc1NvdXJjZU1hcChpblByb2dyZXNzOiBJblByb2dyZXNzU291cmNlTWFwLCBuZXdNYXBwaW5nczogSW5Qcm9ncmVzc1NvdXJjZU1hcCkge1xuICAgIGNvbnN0IHNvdXJjZUluZGV4T2Zmc2V0ID0gaW5Qcm9ncmVzcy5zb3VyY2VzLmxlbmd0aDtcblxuICAgIC8vIEFkZCBuZXcgc291cmNlc1xuICAgIGluUHJvZ3Jlc3Muc291cmNlcy5wdXNoKC4uLm5ld01hcHBpbmdzLnNvdXJjZXMpO1xuXG4gICAgLy8gQWRkIG1hcHBpbmdzIHdpdGggYWRqdXN0ZWQgc291cmNlIGluZGljZXNcbiAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2YgbmV3TWFwcGluZ3MubWFwcGluZ3MpIHtcbiAgICAgICAgaW5Qcm9ncmVzcy5tYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIC4uLm1hcHBpbmcsXG4gICAgICAgICAgICBzb3VyY2VJbmRleDogbWFwcGluZy5zb3VyY2VJbmRleCArIHNvdXJjZUluZGV4T2Zmc2V0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5hbGl6ZUluUHJvZ3Jlc3NTb3VyY2VNYXAoaW5Qcm9ncmVzczogSW5Qcm9ncmVzc1NvdXJjZU1hcCk6IFNvdXJjZU1hcCB7XG4gICAgY29uc3QgdmxxVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuICAgIGZ1bmN0aW9uIGVuY29kZVZMUSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgLy8gQ29udmVydCB0byB6aWd6YWcgZW5jb2RpbmdcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA8IDAgPyAoLXZhbHVlIDw8IDEpIHwgMSA6IHZhbHVlIDw8IDE7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCBkaWdpdCA9IHZhbHVlICYgMzE7XG4gICAgICAgICAgICB2YWx1ZSA+Pj49IDU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGlnaXQgfD0gMzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gdmxxVGFibGVbZGlnaXRdO1xuICAgICAgICB9IHdoaWxlICh2YWx1ZSA+IDApO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gU29ydCBtYXBwaW5ncyBieSBnZW5lcmF0ZWQgcG9zaXRpb25cbiAgICBjb25zdCBzb3J0ZWRNYXBwaW5ncyA9IFsuLi5pblByb2dyZXNzLm1hcHBpbmdzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmdlbmVyYXRlZExpbmUgIT09IGIuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIGEuZ2VuZXJhdGVkTGluZSAtIGIuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5nZW5lcmF0ZWRDb2x1bW4gLSBiLmdlbmVyYXRlZENvbHVtbjtcbiAgICB9KTtcblxuICAgIC8vIEdlbmVyYXRlIHRoZSBtYXBwaW5ncyBzdHJpbmdcbiAgICBsZXQgcHJldkdlbkxpbmUgPSAxO1xuICAgIGxldCBwcmV2R2VuQ29sdW1uID0gMDtcbiAgICBsZXQgcHJldlNvdXJjZUluZGV4ID0gMDtcbiAgICBsZXQgcHJldk9yaWdMaW5lID0gMTtcbiAgICBsZXQgcHJldk9yaWdDb2x1bW4gPSAwO1xuXG4gICAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGN1cnJlbnRMaW5lOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHNvcnRlZE1hcHBpbmdzKSB7XG4gICAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPiBwcmV2R2VuTGluZSkge1xuICAgICAgICAgICAgbGluZXMucHVzaChjdXJyZW50TGluZS5qb2luKFwiLFwiKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcHJldkdlbkxpbmUgKyAxOyBpIDwgbWFwcGluZy5nZW5lcmF0ZWRMaW5lOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudExpbmUgPSBbXTtcbiAgICAgICAgICAgIHByZXZHZW5Db2x1bW4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IFtcbiAgICAgICAgICAgIGVuY29kZVZMUShtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtIHByZXZHZW5Db2x1bW4pLFxuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcuc291cmNlSW5kZXggLSBwcmV2U291cmNlSW5kZXgpLFxuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gcHJldk9yaWdMaW5lKSxcbiAgICAgICAgICAgIGVuY29kZVZMUShtYXBwaW5nLm9yaWdpbmFsQ29sdW1uIC0gcHJldk9yaWdDb2x1bW4pLFxuICAgICAgICBdO1xuXG4gICAgICAgIGN1cnJlbnRMaW5lLnB1c2goc2VnbWVudC5qb2luKFwiXCIpKTtcblxuICAgICAgICBwcmV2R2VuTGluZSA9IG1hcHBpbmcuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgcHJldkdlbkNvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuICAgICAgICBwcmV2U291cmNlSW5kZXggPSBtYXBwaW5nLnNvdXJjZUluZGV4O1xuICAgICAgICBwcmV2T3JpZ0xpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZTtcbiAgICAgICAgcHJldk9yaWdDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50TGluZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goY3VycmVudExpbmUuam9pbihcIixcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IDMsXG4gICAgICAgIGZpbGU6IFwiXCIsXG4gICAgICAgIHNvdXJjZVJvb3Q6IFwiXCIsXG4gICAgICAgIHNvdXJjZXM6IGluUHJvZ3Jlc3Muc291cmNlcy5tYXAocyA9PiBzLm5hbWUpLFxuICAgICAgICBzb3VyY2VzQ29udGVudDogaW5Qcm9ncmVzcy5zb3VyY2VzLm1hcChzID0+IHMuY29udGVudHMpLFxuICAgICAgICBuYW1lczogW10sXG4gICAgICAgIG1hcHBpbmdzOiBsaW5lcy5qb2luKFwiO1wiKSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVNvdXJjZU1hcExpbmVDb21tZW50KHNvdXJjZU1hcDogU291cmNlTWFwKTogc3RyaW5nIHtcbiAgICBjb25zdCBzb3VyY2VNYXBKc29uID0gSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKTtcbiAgICBjb25zdCBiYXNlNjQgPSBCdWZmZXIuZnJvbShzb3VyY2VNYXBKc29uKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICAvLyBOT1RFOiBEb24ndCB3cml0ZSBpdCBhcyBvbmUgc3RyaW5nLCBhcyB0aGVuIHdlIGFyZSBkZXRlY3RlZCBhcyBhIHNvdXJjZW1hcCwgYW5kIGJyZWFrIHNvdXJjZW1hcHMuLi5cbiAgICByZXR1cm4gXCIvL1wiICsgYCMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCR7YmFzZTY0fWA7XG59IiwiLy8gQnVuZGxlZCB3ZWItd29ya2VyIGVudHJ5LiBCdWlsdCBpbnRvIDxkZXBsb3k+L2FpV29ya2VyRW50cnkuanMgYnkgc2NyaXB0cy9idWlsZC50cyBhbmQgbG9hZGVkXG4vLyBmcm9tIHRoZXJlIGJ5IGFpV29ya2VyUG9vbC50cyAoYnJvd3NlciBwYXRoKS4gRGlzcGF0Y2hlcyB0byBhIHJlZ2lzdGVyZWQgc3RyYXRlZ3kgYnkgaWQuXG5pbXBvcnQgeyBnZXRTdHJhdGVneSB9IGZyb20gXCIuL3N0cmF0ZWdpZXMvaW5kZXhcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyUmVxdWVzdCB9IGZyb20gXCIuL2FpVHlwZXNcIjtcblxuaW50ZXJmYWNlIFdvcmtlclNlbGYge1xuICAgIG9ubWVzc2FnZTogKChlOiBNZXNzYWdlRXZlbnQ8QUlXb3JrZXJSZXF1ZXN0PikgPT4gdm9pZCkgfCBudWxsO1xuICAgIHBvc3RNZXNzYWdlKGRhdGE6IHVua25vd24pOiB2b2lkO1xufVxuXG4vLyBHYXRlIG9uIGBzZWxmYCBleGlzdGluZyDigJQgdGhlIGJ1bmRsZXIgcnVucyB1cyB0aHJvdWdoIG5vZGUgZmlyc3QgdG8gcmVjb3JkIHJlcXVpcmUuY2FjaGUsIGFuZFxuLy8gbm9kZSBkb2Vzbid0IGhhdmUgYHNlbGZgLiBJbnNpZGUgYSByZWFsIHdlYiB3b3JrZXIgYHNlbGZgIGlzIGRlZmluZWQgYW5kIHdlIHdpcmUgdXAuXG5pZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCB3b3JrZXJTY29wZSA9IHNlbGYgYXMgdW5rbm93biBhcyBXb3JrZXJTZWxmO1xuICAgIHdvcmtlclNjb3BlLm9ubWVzc2FnZSA9IGFzeW5jIChlOiBNZXNzYWdlRXZlbnQ8QUlXb3JrZXJSZXF1ZXN0PikgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBlLmRhdGE7XG4gICAgICAgIGlmICghcmVxIHx8ICFyZXEuc25hcHNob3QpIHtcbiAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcImVycm9yXCIsIG1lc3NhZ2U6IFwibm8gcmVxdWVzdC9zbmFwc2hvdFwiIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdHJhdGVneSA9IGdldFN0cmF0ZWd5KHJlcS5zdHJhdGVneUlkKTtcbiAgICAgICAgICAgIGNvbnN0IG9uUHJvZ3Jlc3MgPSAob3JkZXJzOiBBSVdvcmtlck9yZGVyW10pID0+IHtcbiAgICAgICAgICAgICAgICB3b3JrZXJTY29wZS5wb3N0TWVzc2FnZSh7IHN0YXR1czogXCJwcm9ncmVzc1wiLCBvcmRlcnMgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgc3RyYXRlZ3kocmVxLnNuYXBzaG90LCB7XG4gICAgICAgICAgICAgICAgY29uZmlnOiByZXEuY29uZmlnLFxuICAgICAgICAgICAgICAgIGRlYWRsaW5lTXM6IERhdGUubm93KCkgKyByZXEudGltZW91dE1zLFxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcImRvbmVcIiwgb3JkZXJzIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycik7XG4gICAgICAgICAgICB3b3JrZXJTY29wZS5wb3N0TWVzc2FnZSh7IHN0YXR1czogXCJlcnJvclwiLCBtZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsIi8vIEltcG9ydGluZyB0aGlzIG1vZHVsZSByZWdpc3RlcnMgZXZlcnkgYnVpbHQtaW4gc3RyYXRlZ3kgYXMgYSBzaWRlIGVmZmVjdC4gQm90aCB0aGUgd29ya2VyIGVudHJ5XG4vLyBhbmQgdGhlIG5vZGUgc2ltIGltcG9ydCBpdCBzbyBnZXRTdHJhdGVneSgpIGNhbiByZXNvbHZlIGFueSBpZC5cbmltcG9ydCBcIi4vYmVlbGluZVwiO1xuaW1wb3J0IFwiLi9ncmVlZHlDaXR5XCI7XG5pbXBvcnQgXCIuL2NvbnNvbGlkYXRlXCI7XG5pbXBvcnQgXCIuL2ZvY3VzRmlyZVwiO1xuaW1wb3J0IFwiLi9mb2N1c1dlYWtlc3RGYWN0aW9uXCI7XG5pbXBvcnQgXCIuL21vbnRlQ2FybG9cIjtcbmltcG9ydCBcIi4vdGhyZWF0QXdhcmVcIjtcbmltcG9ydCBcIi4vaW5mbHVlbmNlTWFwXCI7XG5pbXBvcnQgXCIuL3RlcnJpdG9yeVwiO1xuaW1wb3J0IFwiLi9zbm93YmFsbFwiO1xuaW1wb3J0IFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgXCIuL2RvbWluaW9uXCI7XG5pbXBvcnQgXCIuL2RvbWluaW9uRnJvbnRcIjtcbmltcG9ydCBcIi4vZG9taW5pb25TcGxpdFwiO1xuaW1wb3J0IFwiLi9kb21pbmlvblNwbGl0MlwiO1xuaW1wb3J0IFwiLi9ldmFsR3JlZWR5XCI7XG5pbXBvcnQgXCIuL3JvbGxvdXRcIjtcbmltcG9ydCBcIi4vZXZhbENvYXJzZVwiO1xuaW1wb3J0IFwiLi9leHBhbmRGbG93XCI7XG5pbXBvcnQgXCIuL21jR29hbFwiO1xuXG5leHBvcnQgeyBnZXRTdHJhdGVneSwgZ2V0U3RyYXRlZ3lJZHMsIHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuIiwiaW1wb3J0IHsgcGxhbkJlZWxpbmVPcmRlcnMgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIHYxIGJhc2VsaW5lOiBldmVyeSBnZW5lcmFsIGJlZWxpbmVzIHRvd2FyZCB0aGUgbmVhcmVzdCBlbmVteSBjaXR5LCBncm93aW5nIHdoZW4gZm9vZCBhbGxvd3MuXG4vLyBUaGlzIGlzIGFsc28gdGhlIGRlZmF1bHQgYWdlbnQgZm9yIG5vcm1hbCBicm93c2VyIHBsYXksIHNvIGdyb3d0aCBpcyBvbiBieSBkZWZhdWx0IHRoZXJlLlxucmVnaXN0ZXJTdHJhdGVneShcImJlZWxpbmVcIiwgKHNuYXBzaG90LCBjdHgpID0+IHdpdGhHcm93dGgoc25hcHNob3QsIGN0eC5jb25maWcsIHBsYW5CZWVsaW5lT3JkZXJzKHNuYXBzaG90KSkpO1xuIiwiLy8gUHVyZSBBSSBwbGFubmluZyDigJQgbm8gRE9NLCBubyB3b3JrZXIgZ2xvYmFscywgbm8gc2NoZW1hIGltcG9ydHMuIFNoYXJlZCBieSB0aGUgd2ViLXdvcmtlciBlbnRyeVxuLy8gKGFpV29ya2VyRW50cnkudHMpIGFuZCB0aGUgaW4tcHJvY2VzcyBub2RlIHBhdGggKGFpV29ya2VyUG9vbC50cyBpbiBub2RlKS4gS2VlcGluZyBpdCBkZXBlbmRlbmN5LVxuLy8gZnJlZSBrZWVwcyB0aGUgd29ya2VyIGJ1bmRsZSB0aW55IGFuZCBsZXRzIHRoZSBub2RlIHNpbXVsYXRpb24gY2FsbCBpdCBkaXJlY3RseS5cbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3QgfSBmcm9tIFwiLi9haVR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9mZnNldFRvQ3ViZShwOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KSB7XG4gICAgY29uc3QgY29sID0gcC54O1xuICAgIGNvbnN0IHJvdyA9IGNvbCAlIDIgPT09IDAgPyBwLnkgOiBwLnkgLSAwLjU7XG4gICAgY29uc3QgY3ViZV94ID0gY29sO1xuICAgIGNvbnN0IGN1YmVfeiA9IHJvdyAtIChjb2wgLSAoY29sICYgMSkpIC8gMjtcbiAgICBjb25zdCBjdWJlX3kgPSAtY3ViZV94IC0gY3ViZV96O1xuICAgIHJldHVybiB7IHg6IGN1YmVfeCwgeTogY3ViZV95LCB6OiBjdWJlX3ogfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoZXhEaXN0YW5jZShhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KTogbnVtYmVyIHtcbiAgICBjb25zdCBjYSA9IG9mZnNldFRvQ3ViZShhKTtcbiAgICBjb25zdCBjYiA9IG9mZnNldFRvQ3ViZShiKTtcbiAgICByZXR1cm4gKE1hdGguYWJzKGNhLnggLSBjYi54KSArIE1hdGguYWJzKGNhLnkgLSBjYi55KSArIE1hdGguYWJzKGNhLnogLSBjYi56KSkgLyAyO1xufVxuXG4vLyB2MSBzdHJhdGVneTogZWFjaCBvZiBvdXIgZ2VuZXJhbHMgYmVlbGluZXMgdG93YXJkIHRoZSBuZWFyZXN0IGVuZW15IGNpdHkuXG5leHBvcnQgZnVuY3Rpb24gcGxhbkJlZWxpbmVPcmRlcnMoc25hcHNob3Q6IEFJV29ya2VyU25hcHNob3QpOiBBSVdvcmtlck9yZGVyW10ge1xuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW5lcmFsIG9mIG91ckdlbmVyYWxzKSB7XG4gICAgICAgIGxldCB0YXJnZXQ6IHR5cGVvZiBlbmVteUNpdGllc1tudW1iZXJdIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGVuZW15Q2l0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZ2VuZXJhbCwgY2l0eSk7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XG4gICAgICAgICAgICAgICAgYmVzdERpc3QgPSBkO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuZXJhbC5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcnM7XG59XG4iLCJpbXBvcnQgeyBBSVdvcmtlck9yZGVyLCBBSVdvcmtlclNuYXBzaG90IH0gZnJvbSBcIi4vYWlUeXBlc1wiO1xuXG4vLyBTaGFyZWQgZ3Jvd3RoIGRlY2lzaW9uLCB3cmFwcGVkIGFyb3VuZCBhIHN0cmF0ZWd5J3MgbW92ZSBvcmRlcnMgc28gZXZlcnkgb25lIG9mIG91ciBnZW5lcmFsc1xuLy8gZ2V0cyBhIGdyb3d0aE1vZGUgc2V0IChhbmQgZ2VuZXJhbHMgd2l0aG91dCBhIG1vdmUgc3RpbGwgZ2V0IGEgZ3Jvdy9ob2xkIG9yZGVyKS5cbi8vXG4vLyBjb25maWcuZ3JvdyBjb250cm9scyBpdDpcbi8vICAgXCJuZXZlclwiICAgICAgICAgICAg4oCUIG5ldmVyIGdyb3cuXG4vLyAgIFwiYWx3YXlzXCIgICAgICAgICAgIOKAlCBhbHdheXMgZ3JvdyAocmlza3Mgc3RhcnZhdGlvbiBpZiBmb29kIG5ldCA8IDApLlxuLy8gICBcIndoZW5Gb29kUG9zaXRpdmVcIiDigJQgZ3JvdyBvbmx5IHdoZW4gdGhlIGZhY3Rpb24ncyBmb29kIG5ldCBpcyA+PSAwIChkZWZhdWx0KS4gVGhpcyBpcyB0aGUgc2FmZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsLXB1cnBvc2UgcG9saWN5OiBidWlsZCB1cCB3aGlsZSB0aGUgZWNvbm9teSBzdXN0YWlucyBpdC5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoR3Jvd3RoKFxuICAgIHNuYXBzaG90OiBBSVdvcmtlclNuYXBzaG90LFxuICAgIGNvbmZpZzogeyBncm93PzogdW5rbm93bjsgfSxcbiAgICBtb3ZlT3JkZXJzOiBBSVdvcmtlck9yZGVyW10sXG4pOiBBSVdvcmtlck9yZGVyW10ge1xuICAgIGNvbnN0IGdyb3cgPSB0eXBlb2YgY29uZmlnLmdyb3cgPT09IFwic3RyaW5nXCIgPyBjb25maWcuZ3JvdyA6IFwid2hlbkZvb2RQb3NpdGl2ZVwiO1xuICAgIGNvbnN0IHNob3VsZEdyb3cgPSBncm93ID09PSBcImFsd2F5c1wiXG4gICAgICAgIHx8IChncm93ICE9PSBcIm5ldmVyXCIgJiYgc25hcHNob3QuZm9vZC5uZXQgPj0gMCk7XG5cbiAgICBjb25zdCBieUdlbmVyYWwgPSBuZXcgTWFwPHN0cmluZywgQUlXb3JrZXJPcmRlcj4oKTtcbiAgICBmb3IgKGNvbnN0IG8gb2YgbW92ZU9yZGVycykge1xuICAgICAgICBieUdlbmVyYWwuc2V0KG8uZ2VuZXJhbElkLCB7IC4uLm8sIGdyb3d0aE1vZGU6IHNob3VsZEdyb3cgfSk7XG4gICAgfVxuICAgIC8vIEVuc3VyZSBldmVyeSBvbmUgb2Ygb3VyIGdlbmVyYWxzIGhhcyBhbiBvcmRlciBjYXJyeWluZyB0aGUgZ3Jvd3RoIGRlY2lzaW9uLCBldmVuIGlmIHRoZVxuICAgIC8vIHN0cmF0ZWd5IGdhdmUgaXQgbm8gbW92ZSB0aGlzIHR1cm4uXG4gICAgZm9yIChjb25zdCBnIG9mIHNuYXBzaG90LmdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnLmZhY3Rpb25JZCAhPT0gc25hcHNob3QuZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFieUdlbmVyYWwuaGFzKGcuaWQpKSB7XG4gICAgICAgICAgICBieUdlbmVyYWwuc2V0KGcuaWQsIHsgZ2VuZXJhbElkOiBnLmlkLCBncm93dGhNb2RlOiBzaG91bGRHcm93IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGJ5R2VuZXJhbC52YWx1ZXMoKSk7XG59XG4iLCJpbXBvcnQgeyBBSVN0cmF0ZWd5IH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcblxuLy8gU3RyYXRlZ3kgcmVnaXN0cnkuIEV2ZXJ5IEFJIGlzIGEgbmFtZWQsIGhhbmQtd3JpdHRlbiBzdHJhdGVneS4gV2hlbiBhIHN0cmF0ZWd5IGlzIHJldmlzZWQsIGdpdmVcbi8vIGl0IGEgTkVXIGlkIHNvIHByaW9yIHZlcnNpb25zIGtlZXAgd29ya2luZyBhbmQgcmVtYWluIGNvbXBhcmFibGUgaW4gdG91cm5hbWVudHMuXG5jb25zdCBzdHJhdGVnaWVzID0gbmV3IE1hcDxzdHJpbmcsIEFJU3RyYXRlZ3k+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0cmF0ZWd5KGlkOiBzdHJpbmcsIHN0cmF0ZWd5OiBBSVN0cmF0ZWd5KSB7XG4gICAgaWYgKHN0cmF0ZWdpZXMuaGFzKGlkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBBSSBzdHJhdGVneSBpZDogJHtpZH1gKTtcbiAgICB9XG4gICAgc3RyYXRlZ2llcy5zZXQoaWQsIHN0cmF0ZWd5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmF0ZWd5KGlkOiBzdHJpbmcpOiBBSVN0cmF0ZWd5IHtcbiAgICBjb25zdCBzID0gc3RyYXRlZ2llcy5nZXQoaWQpO1xuICAgIGlmICghcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gQUkgc3RyYXRlZ3kgaWQ6ICR7aWR9LiBSZWdpc3RlcmVkOiAke0pTT04uc3RyaW5naWZ5KGdldFN0cmF0ZWd5SWRzKCkpfWApO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmF0ZWd5SWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShzdHJhdGVnaWVzLmtleXMoKSk7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBDb25maWd1cmFibGUgZ3JlZWR5IHRhcmdldC1waWNrZXIuIEVhY2ggZ2VuZXJhbCBpbmRlcGVuZGVudGx5IHNjb3JlcyBjYW5kaWRhdGUgdGFyZ2V0cyBhbmQgbW92ZXNcbi8vIHRvd2FyZCB0aGUgYmVzdCBvbmUuIFNjb3JlID0gZGlzdFdlaWdodCpkaXN0YW5jZSArIGdhcnJpc29uV2VpZ2h0KmdhcnJpc29uIOKIkiBjYXBpdGFsQm9udXMoaWYgY2FwaXRhbCkuXG4vLyBMb3dlciBzY29yZSB3aW5zLCBzbyBoaWdoIGRpc3RXZWlnaHQgPSBwcmVmZXIgY2xvc2VyLCBoaWdoIGdhcnJpc29uV2VpZ2h0ID0gcHJlZmVyIHNvZnRlciB0YXJnZXRzLFxuLy8gY2FwaXRhbEJvbnVzIHB1bGxzIHRvd2FyZCBlbmVteSBjYXBpdGFscy4gV2l0aCB0YXJnZXRHZW5lcmFscywgZW5lbXkgZ2VuZXJhbHMgKHRyZWF0ZWQgYXNcbi8vIGdhcnJpc29uID0gdGhlaXIgdW5pdCBjb3VudCkgYXJlIGFsc28gY2FuZGlkYXRlcy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJncmVlZHlDaXR5XCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMCk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91ckdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91ckdlbmVyYWxzKSB7XG4gICAgICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGdlbiwgdClcbiAgICAgICAgICAgICAgICArIGdhcnJpc29uV2VpZ2h0ICogdC5nYXJyaXNvblxuICAgICAgICAgICAgICAgIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG4gICAgICAgICAgICBpZiAoc2NvcmUgPCBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICAgICAgICBiZXN0ID0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogYmVzdC54LCB5OiBiZXN0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIEZvcmNlLWNvbmNlbnRyYXRpb24gc3RyYXRlZ3kuIEEgZ2VuZXJhbCB3ZWFrZXIgdGhhbiBtZXJnZUZyYWN0aW9uIMOXIHRoZSBmYWN0aW9uJ3Mgc3Ryb25nZXN0XG4vLyBnZW5lcmFsIG1vdmVzIHRvd2FyZCB0aGF0IHN0cm9uZ2VzdCBhbGx5IHRvIHN0YWNrIHVwIChzYW1lLXRpbGUgc2FtZS1mYWN0aW9uIHVuaXRzIGZpZ2h0IHRvZ2V0aGVyLFxuLy8gc28gY29uY2VudHJhdGlvbiB3aW5zIGZpZ2h0cykuIEV2ZXJ5b25lIGVsc2UgYXR0YWNrcyB0aGUgYmVzdCBlbmVteSB0YXJnZXQsIHNjb3JlZCBsaWtlXG4vLyBncmVlZHlDaXR5IChkaXN0V2VpZ2h0wrdkaXN0YW5jZSArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvbiDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLCBvcHRpb25hbGx5XG4vLyBhbHNvIGh1bnRpbmcgZW5lbXkgZ2VuZXJhbHMuXG5yZWdpc3RlclN0cmF0ZWd5KFwiY29uc29saWRhdGVcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcbiAgICBjb25zdCB0YXJnZXRHZW5lcmFscyA9IGNmZy50YXJnZXRHZW5lcmFscyA9PT0gdHJ1ZTtcbiAgICBjb25zdCBtZXJnZUZyYWN0aW9uID0gbnVtKGNmZy5tZXJnZUZyYWN0aW9uLCAwLjgpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGxldCBzdHJvbmdlc3QgPSBvdXJzWzBdO1xuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSBpZiAoZy50b3RhbFVuaXRzID4gc3Ryb25nZXN0LnRvdGFsVW5pdHMpIHN0cm9uZ2VzdCA9IGc7XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91cnMpIHtcbiAgICAgICAgLy8gV2VhayBnZW5lcmFsIHdpdGggYSBzdHJvbmdlciBhbGx5IHRvIG1lcmdlIGludG8g4oaSIGdvIHN0YWNrIHVwLlxuICAgICAgICBpZiAoZ2VuLmlkICE9PSBzdHJvbmdlc3QuaWQgJiYgZ2VuLnRvdGFsVW5pdHMgPCBtZXJnZUZyYWN0aW9uICogc3Ryb25nZXN0LnRvdGFsVW5pdHMpIHtcbiAgICAgICAgICAgIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiB7IHg6IHN0cm9uZ2VzdC54LCB5OiBzdHJvbmdlc3QueSB9IH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGJlc3Q6IFRhcmdldCB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZ2VuLCB0KVxuICAgICAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAgICAgLSAodC5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcbiAgICAgICAgICAgIGlmIChzY29yZSA8IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHQ7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogYmVzdC54LCB5OiBiZXN0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIENvb3JkaW5hdGVkIGZvY3VzLWZpcmU6IHRoZSB3aG9sZSBmYWN0aW9uIHBpY2tzIE9ORSBnbG9iYWwgdGFyZ2V0IGFuZCBldmVyeSBnZW5lcmFsIGNvbnZlcmdlcyBvblxuLy8gaXQsIG5hdHVyYWxseSBzdGFja2luZyBpbnRvIGEgc2luZ2xlIGhhbW1lci4gVGhlIHRhcmdldCBpcyBzY29yZWQgZnJvbSB0aGUgZmFjdGlvbidzIGNlbnRyb2lkXG4vLyAoZGlzdFdlaWdodMK3ZGlzdCArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvbiDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLiBXaGVuIHRoZSB0YXJnZXQgaXMgY2FwdHVyZWRcbi8vIHRoZSBuZXh0IGNhbGwgcmUtcGlja3MsIHNvIHRoZSBkb29tc3RhY2sgcm9sbHMgZnJvbSBvYmplY3RpdmUgdG8gb2JqZWN0aXZlLlxucmVnaXN0ZXJTdHJhdGVneShcImZvY3VzRmlyZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNSk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGN4ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLngsIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY3kgPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueSwgMCkgLyBvdXJzLmxlbmd0aDtcbiAgICBjb25zdCBjZW50cm9pZCA9IHsgeDogY3gsIHk6IGN5IH07XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICBsZXQgYmVzdDogVGFyZ2V0IHwgdW5kZWZpbmVkO1xuICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICBjb25zdCBzY29yZSA9IGRpc3RXZWlnaHQgKiBoZXhEaXN0YW5jZShjZW50cm9pZCwgdClcbiAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAtICh0LmlzQ2FwaXRhbCA/IGNhcGl0YWxCb251cyA6IDApO1xuICAgICAgICBpZiAoc2NvcmUgPCBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2NvcmU7IGJlc3QgPSB0OyB9XG4gICAgfVxuICAgIGlmICghYmVzdCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gYmVzdDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBTbm93YmFsbCBmb2N1czogY29uY2VudHJhdGUgdGhlIHdob2xlIGZhY3Rpb24gb24gdGhlIFdFQUtFU1Qgc3Vydml2aW5nIGVuZW15IGZhY3Rpb24sIHRvXG4vLyBlbGltaW5hdGUgb3Bwb25lbnRzIG9uZSBhdCBhIHRpbWUgKGZld2VyIGVuZW1pZXMgPSBjb21wb3VuZGluZyBhZHZhbnRhZ2UpLiBBbW9uZyB0aGF0IGZhY3Rpb24nc1xuLy8gY2l0aWVzIHdlIHBpY2sgdGhlIG9uZSBiZXN0IHNjb3JlZCBmcm9tIG91ciBjZW50cm9pZCAoZGlzdFdlaWdodMK3ZGlzdCArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvblxuLy8g4oiSIGNhcGl0YWxCb251c8K3aXNDYXBpdGFsKS4gSWYgdGhlIHdlYWtlc3QgZmFjdGlvbiBoYXMgbm8gY2l0aWVzIGxlZnQgd2UgZmFsbCBiYWNrIHRvIGl0cyBuZWFyZXN0XG4vLyBnZW5lcmFsLCB0aGVuIHRvIGFueSBlbmVteSBjaXR5LlxucmVnaXN0ZXJTdHJhdGVneShcImZvY3VzV2Vha2VzdEZhY3Rpb25cIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgaWYgKG91cnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBjeCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy54LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGN5ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnksIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY2VudHJvaWQgPSB7IHg6IGN4LCB5OiBjeSB9O1xuXG4gICAgLy8gVG90YWwgc3RyZW5ndGggcGVyIGVuZW15IGZhY3Rpb24gPSBpdHMgZ2VuZXJhbHMnIHN0YWNrZWQgdW5pdHMgKyBpdHMgY2l0aWVzJyBnYXJyaXNvbnMuXG4gICAgY29uc3Qgc3RyZW5ndGhCeUZhY3Rpb24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHN0cmVuZ3RoQnlGYWN0aW9uLnNldChnLmZhY3Rpb25JZCwgKHN0cmVuZ3RoQnlGYWN0aW9uLmdldChnLmZhY3Rpb25JZCkgPz8gMCkgKyBnLnRvdGFsVW5pdHMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGMgb2YgY2l0aWVzKSB7XG4gICAgICAgIGlmIChjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgc3RyZW5ndGhCeUZhY3Rpb24uc2V0KGMuZmFjdGlvbklkLCAoc3RyZW5ndGhCeUZhY3Rpb24uZ2V0KGMuZmFjdGlvbklkKSA/PyAwKSArIGMuZ2Fycmlzb24pO1xuICAgIH1cbiAgICBpZiAoc3RyZW5ndGhCeUZhY3Rpb24uc2l6ZSA9PT0gMCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgbGV0IHdlYWtlc3Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBsZXQgd2Vha2VzdFN0cmVuZ3RoID0gSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBbZmlkLCBzXSBvZiBzdHJlbmd0aEJ5RmFjdGlvbikge1xuICAgICAgICBpZiAocyA8IHdlYWtlc3RTdHJlbmd0aCkgeyB3ZWFrZXN0U3RyZW5ndGggPSBzOyB3ZWFrZXN0ID0gZmlkOyB9XG4gICAgfVxuXG4gICAgdHlwZSBUYXJnZXQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBnYXJyaXNvbjogbnVtYmVyOyBpc0NhcGl0YWw6IGJvb2xlYW47IH07XG4gICAgY29uc3Qgc2NvcmUgPSAodDogVGFyZ2V0KSA9PiBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoY2VudHJvaWQsIHQpXG4gICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG5cbiAgICBjb25zdCBwaWNrID0gKGNhbmRzOiBUYXJnZXRbXSk6IFRhcmdldCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7IGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIGNhbmRzKSB7IGNvbnN0IHMgPSBzY29yZSh0KTsgaWYgKHMgPCBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gczsgYmVzdCA9IHQ7IH0gfVxuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICB9O1xuXG4gICAgbGV0IHRhcmdldCA9IHBpY2soY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkID09PSB3ZWFrZXN0KVxuICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpKTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICB0YXJnZXQgPSBwaWNrKGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSB3ZWFrZXN0KVxuICAgICAgICAgICAgLm1hcChnID0+ICh7IHg6IGcueCwgeTogZy55LCBnYXJyaXNvbjogZy50b3RhbFVuaXRzLCBpc0NhcGl0YWw6IGZhbHNlIH0pKSk7XG4gICAgfVxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldCA9IHBpY2soY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpXG4gICAgICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpKTtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIFtdKTtcblxuICAgIGNvbnN0IHQgPSB0YXJnZXQ7XG4gICAgY29uc3Qgb3JkZXJzID0gb3Vycy5tYXAoZyA9PiAoeyBnZW5lcmFsSWQ6IGcuaWQsIHRhcmdldFBvc2l0aW9uOiB7IHg6IHQueCwgeTogdC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBNb250ZS1DYXJsbyBvcGVuaW5nIHBpY2tlci4gRm9yIGVhY2ggY2FuZGlkYXRlIGZpcnN0LXRhcmdldCwgcnVuIGd1aWRlZCByb2xsb3V0cyBvbiBhIGxpZ2h0d2VpZ2h0XG4vLyBpbnRlcm5hbCBtb2RlbCAob3VyIHdob2xlIGFybXkgYXMgb25lIHN0YWNrIHNub3diYWxsaW5nIHRocm91Z2ggZW5lbXkgY2l0aWVzIHVuZGVyIGEgZ3JlZWR5XG4vLyBkZXRlcm1pbmlzdGljIHBvbGljeSwgd2l0aCByYW5kb21pemVkIHRpZS1icmVha2luZyA9IHRoZSBNQyBzYW1wbGluZykuIFNjb3JlIGVhY2ggY2FuZGlkYXRlIGJ5IGhvd1xuLy8gbXVjaCBpdCBsZXRzIHVzIHNub3diYWxsOyBzZW5kIHRoZSB3aG9sZSBmYWN0aW9uIGF0IHRoZSBiZXN0IG9wZW5pbmcuIEFwcHJveGltYXRlIGJ5IGRlc2lnbiDigJQgdGhlXG4vLyBzdHJhdGVneSBvbmx5IGhhcyB0aGUgc25hcHNob3QsIG5vdCB0aGUgcmVhbCBlbmdpbmUg4oCUIGJ1dCBpdCBkZW1vbnN0cmF0ZXMgZGV0ZXJtaW5pc3RpYy1wb2xpY3ktXG4vLyBndWlkZWQgTUMgYW5kIGlzIGEgdG91cm5hbWVudCBleHBlcmltZW50LlxuLy9cbi8vIGNvbmZpZzogZGlzdFdlaWdodCwgZ2Fycmlzb25XZWlnaHQsIGNhcGl0YWxCb251cywgcm9sbG91dHMgKHBlciBjYW5kaWRhdGUpLCByb2xsb3V0VHVybnMsXG4vLyB0b3BLICh0aWUtYnJlYWsgYnJlYWR0aCBmb3IgdGhlIHJvbGxvdXQgcG9saWN5KSwgY29tYmF0RmFjdG9yLCBsb3NzRnJhYy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJtb250ZUNhcmxvXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMC41KTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgMCk7XG4gICAgY29uc3Qgcm9sbG91dHMgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKG51bShjZmcucm9sbG91dHMsIDYwKSkpO1xuICAgIGNvbnN0IHJvbGxvdXRUdXJucyA9IG51bShjZmcucm9sbG91dFR1cm5zLCA2MCk7XG4gICAgY29uc3QgdG9wSyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IobnVtKGNmZy50b3BLLCAzKSkpO1xuICAgIGNvbnN0IGNvbWJhdEZhY3RvciA9IG51bShjZmcuY29tYmF0RmFjdG9yLCAxLjApO1xuICAgIGNvbnN0IGxvc3NGcmFjID0gbnVtKGNmZy5sb3NzRnJhYywgMC41KTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgaWYgKG91cnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgY29uc3Qgb3VyU3RyZW5ndGggPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcudG90YWxVbml0cywgMCk7XG5cbiAgICBjb25zdCBjeCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy54LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGN5ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnksIDApIC8gb3Vycy5sZW5ndGg7XG5cbiAgICB0eXBlIENpdHkgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBnYXJyaXNvbjogbnVtYmVyOyBpc0NhcGl0YWw6IGJvb2xlYW47IH07XG4gICAgY29uc3QgZW5lbXlDaXRpZXM6IENpdHlbXSA9IGNpdGllc1xuICAgICAgICAuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgLm1hcChjID0+ICh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pKTtcbiAgICBpZiAoZW5lbXlDaXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBbXSk7XG5cbiAgICBjb25zdCBjaXR5U2NvcmUgPSAoZnJvbTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSwgYzogQ2l0eSkgPT5cbiAgICAgICAgZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGZyb20sIGMpICsgZ2Fycmlzb25XZWlnaHQgKiBjLmdhcnJpc29uIC0gKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG5cbiAgICAvLyBPbmUgcm9sbG91dCBmcm9tIGEgZm9yY2VkIGZpcnN0IHRhcmdldDogc25vd2JhbGwgZ3JlZWRpbHkgKHJhbmRvbWl6ZWQgYW1vbmcgdGhlIHRvcC1LIGJlc3QgYnlcbiAgICAvLyBzY29yZSkgdW50aWwgdGltZSBydW5zIG91dCBvciB3ZSBjYW4ndCBiZWF0IHRoZSBuZXh0IGdhcnJpc29uLiBSZXR1cm5zIGNhcHR1cmVkIFwidmFsdWVcIi5cbiAgICBjb25zdCByb2xsb3V0ID0gKGZpcnN0OiBDaXR5KTogbnVtYmVyID0+IHtcbiAgICAgICAgbGV0IHN0cmVuZ3RoID0gb3VyU3RyZW5ndGg7XG4gICAgICAgIGxldCBwb3MgPSB7IHg6IGN4LCB5OiBjeSB9O1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBlbmVteUNpdGllcy5zbGljZSgpO1xuICAgICAgICBsZXQgdCA9IDA7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgIGxldCBmb3JjZWQ6IENpdHkgfCB1bmRlZmluZWQgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKHJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0OiBDaXR5IHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGZvcmNlZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGZvcmNlZDtcbiAgICAgICAgICAgICAgICBmb3JjZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtlZCA9IHJlbWFpbmluZy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGNpdHlTY29yZShwb3MsIGEpIC0gY2l0eVNjb3JlKHBvcywgYikpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHJhbmtlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLm1pbih0b3BLLCByYW5rZWQubGVuZ3RoKSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIGJyZWFrO1xuICAgICAgICAgICAgdCArPSBoZXhEaXN0YW5jZShwb3MsIHRhcmdldCk7IC8vIH4xIHRpbGUvdHVyblxuICAgICAgICAgICAgaWYgKHQgPiByb2xsb3V0VHVybnMpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHN0cmVuZ3RoIDw9IHRhcmdldC5nYXJyaXNvbiAqIGNvbWJhdEZhY3RvcikgYnJlYWs7IC8vIGNhbid0IHRha2UgaXRcbiAgICAgICAgICAgIHN0cmVuZ3RoIC09IHRhcmdldC5nYXJyaXNvbiAqIGxvc3NGcmFjO1xuICAgICAgICAgICAgdmFsdWUgKz0gMSArICh0YXJnZXQuaXNDYXBpdGFsID8gMSA6IDApO1xuICAgICAgICAgICAgcG9zID0geyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSByZW1haW5pbmcuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGkgPj0gMCkgcmVtYWluaW5nLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCBiZXN0OiBDaXR5IHwgdW5kZWZpbmVkO1xuICAgIGxldCBiZXN0QXZnID0gLUluZmluaXR5O1xuICAgIGZvciAoY29uc3QgY2FuZCBvZiBlbmVteUNpdGllcykge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb2xsb3V0czsgcisrKSBzdW0gKz0gcm9sbG91dChjYW5kKTtcbiAgICAgICAgY29uc3QgYXZnID0gc3VtIC8gcm9sbG91dHM7XG4gICAgICAgIGlmIChhdmcgPiBiZXN0QXZnKSB7IGJlc3RBdmcgPSBhdmc7IGJlc3QgPSBjYW5kOyB9XG4gICAgfVxuICAgIGlmICghYmVzdCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gYmVzdDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3RHZW5lcmFsIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gRW5naW5lIGNvbWJhdCByZWFjaCBmb3IgYSBzdGFjayBvZiBgY291bnRgIHVuaXRzIChtaXJyb3JzIGdldENvbWJhdERpc3RhbmNlIGluIHRoZSBlbmdpbmUpLlxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIFRocmVhdC1hd2FyZSB2YWx1ZSBBSS4gRWFjaCBnZW5lcmFsIGNob29zZXMgYW1vbmcgQVRUQUNLIC8gREVGRU5EIC8gUkVUUkVBVCBpbnN0ZWFkIG9mIGJsaW5kbHlcbi8vIHJ1bm5pbmcgYXQgdGhlIG5lYXJlc3QgY2l0eTpcbi8vICAgLSBBVFRBQ0sgYW4gZW5lbXkgY2l0eSBvbmx5IGlmIG91ciBzdGFjayBjYW4gYWN0dWFsbHkgYmVhdCBpdHMgZ2Fycmlzb24gKGNvbWJhdC1nYXRlZCksIHNjb3JlZFxuLy8gICAgIGJ5IHZhbHVlIChsb3cgZ2Fycmlzb24sIGNhcGl0YWxzLCBjbG9zZW5lc3MpLlxuLy8gICAtIERFRkVORCBhbiBvd25lZCBjaXR5IHRoYXQgYW4gZW5lbXkgc3RhY2sgY2FuIHJlYWNoIHNvb24sIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byBtYXR0ZXIuXG4vLyAgIC0gUkVUUkVBVCB0b3dhcmQgdGhlIG5lYXJlc3QgZnJpZW5kbHkgY2l0eS9nZW5lcmFsIHdoZW4gYSBzdHJvbmdlciBlbmVteSBzdGFjayBjYW4gY2F0Y2ggdXMgYW5kXG4vLyAgICAgd2UgaGF2ZSBubyB3aW5uaW5nIGF0dGFjayDigJQgaW5zdGVhZCBvZiBmZWVkaW5nIGl0LlxuLy8gY29uZmlnOiBzYWZldHkgKHdpbiBtYXJnaW4pLCBkaXN0V2VpZ2h0LCBnYXJyaXNvbldlaWdodCwgY2FwaXRhbEJvbnVzLCBkZWZlbmRXZWlnaHQsIGVuZW15TW92ZS5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJ0aHJlYXRBd2FyZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBzYWZldHkgPSBudW0oY2ZnLnNhZmV0eSwgMS4xNSk7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjQpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCA1KTtcbiAgICBjb25zdCBkZWZlbmRXZWlnaHQgPSBudW0oY2ZnLmRlZmVuZFdlaWdodCwgOCk7XG4gICAgY29uc3QgZW5lbXlNb3ZlID0gbnVtKGNmZy5lbmVteU1vdmUsIDEuNSk7IC8vIGFzc3VtZWQgZW5lbXkgdGlsZXMvdHVybiBmb3IgdGhyZWF0IGxvb2thaGVhZFxuICAgIGNvbnN0IGh1bnRXZWlnaHQgPSBudW0oY2ZnLmh1bnRXZWlnaHQsIDApOyAvLyA+MDogYWxzbyBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZWFrZXIgdGhhbiB1cywgdG8gZWxpbWluYXRlIHRoZW1cblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG91ckNpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IG5lYXJlc3RGcmllbmRseVJlZnVnZSA9IChnOiBBSVdvcmtlclNuYXBzaG90R2VuZXJhbCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3REID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBvdXJDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnLCBjKTtcbiAgICAgICAgICAgIGlmIChkID4gMCAmJiBkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG91cnMpIHtcbiAgICAgICAgICAgIGlmIChvLmlkID09PSBnLmlkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChvLnRvdGFsVW5pdHMgPD0gZy50b3RhbFVuaXRzKSBjb250aW51ZTsgLy8gb25seSBmbGVlIHRvd2FyZCBzb21lb25lIHN0cm9uZ2VyXG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZywgbyk7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IHsgeDogby54LCB5OiBvLnkgfTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91cnMpIHtcbiAgICAgICAgY29uc3QgUyA9IGdlbi50b3RhbFVuaXRzO1xuXG4gICAgICAgIC8vIElzIGEgc3Ryb25nZXIgZW5lbXkgYWJsZSB0byByZWFjaCB1cyBuZXh0IHR1cm4/XG4gICAgICAgIGxldCB1bmRlclRocmVhdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogc2FmZXR5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWNoID0gY29tYmF0RGlzdChlLnRvdGFsVW5pdHMpICsgZW5lbXlNb3ZlO1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIGdlbikgPD0gcmVhY2gpIHsgdW5kZXJUaHJlYXQgPSB0cnVlOyBicmVhazsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmVzdCBBVFRBQ0sgd2UgY2FuIGFjdHVhbGx5IHdpbi5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBlbmVteUNpdGllcykge1xuICAgICAgICAgICAgaWYgKFMgPD0gYy5nYXJyaXNvbiAqIHNhZmV0eSkgY29udGludWU7IC8vIGNhbid0IHRha2UgaXQg4oCUIGRvbid0IGZlZWQgaXRcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnZW4sIGMpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSAoYy5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKSAtIGRpc3RXZWlnaHQgKiBkIC0gZ2Fycmlzb25XZWlnaHQgKiBjLmdhcnJpc29uO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIVU5UOiBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZSBjYW4gYmVhdCwgdG8gYWN0dWFsbHkgZWxpbWluYXRlIHRoZW0gKGNsb3NlIG91dCB0aGUgZ2FtZSkuXG4gICAgICAgIGlmIChodW50V2VpZ2h0ID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoUyA8PSBlLnRvdGFsVW5pdHMgKiBzYWZldHkpIGNvbnRpbnVlOyAvLyBvbmx5IGh1bnQgcHJleSB3ZSBiZWF0XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGdlbiwgZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBodW50V2VpZ2h0IC0gZGlzdFdlaWdodCAqIGQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBlLngsIHk6IGUueSB9OyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBERUZFTkQ6IGFuIG93bmVkIGNpdHkgYW4gZW5lbXkgc3RhY2sgY2FuIHJlYWNoIHNvb24g4oCUIHB1bGwgYSBuZWFyYnkgZ2VuZXJhbCBiYWNrLlxuICAgICAgICBmb3IgKGNvbnN0IG9jIG9mIG91ckNpdGllcykge1xuICAgICAgICAgICAgbGV0IHRocmVhdGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIG9jKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyBlbmVteU1vdmUpIHsgdGhyZWF0ZW5lZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRocmVhdGVuZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGdlbiwgb2MpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkZWZlbmRXZWlnaHQgLSBkaXN0V2VpZ2h0ICogZDtcbiAgICAgICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHsgeDogb2MueCwgeTogb2MueSB9OyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSRVRSRUFUIHdoZW4gdGhyZWF0ZW5lZCBhbmQgbm90aGluZyB3b3J0aCBkb2luZy5cbiAgICAgICAgaWYgKHVuZGVyVGhyZWF0ICYmICghYmVzdCB8fCBiZXN0U2NvcmUgPCAwKSkge1xuICAgICAgICAgICAgY29uc3QgcmVmdWdlID0gbmVhcmVzdEZyaWVuZGx5UmVmdWdlKGdlbik7XG4gICAgICAgICAgICBpZiAocmVmdWdlKSBiZXN0ID0gcmVmdWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3QgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBJbmZsdWVuY2UgLyBmbG93LWZpZWxkIEFJLiBJbnN0ZWFkIG9mIGJlZWxpbmluZyBhdCB0aGUgbmVhcmVzdCBjaXR5ICh3aGljaCBpZ25vcmVzIHRlcnJhaW4gYW5kXG4vLyB3YWxrcyBpbnRvIHN0cm9uZ2VyIHN0YWNrcyksIHdlIGJ1aWxkIHR3byBzY2FsYXIgZmllbGRzIG92ZXIgdGhlIHBhc3NhYmxlIG1hcCBhbmQgaGF2ZSBlYWNoXG4vLyBnZW5lcmFsIGZvbGxvdyB0aGUgZ3JhZGllbnQgb25lIHN0ZXAgcGVyIHR1cm46XG4vLyAgIC0gYXR0cmFjdGlvbjogbWF4LXBsdXMgQkZTIHNlZWRlZCBhdCBlbmVteSBjaXRpZXMgKHNvZnQgKyBjYXBpdGFsID0gbW9yZSB2YWx1ZSksIGRlY2F5aW5nIHBlclxuLy8gICAgIHN0ZXAsIHNvIGEgZ2VuZXJhbCBmbG93cyB0b3dhcmQgdGhlIGJlc3QgcmVhY2hhYmxlIHRhcmdldCBBUk9VTkQgbW91bnRhaW5zL3dhdGVyLlxuLy8gICAtIGRhbmdlcjogbWF4LXBsdXMgQkZTIHNlZWRlZCBhdCBlbmVteSBnZW5lcmFsIHN0YWNrcyAodmFsdWUgPSB0aGVpciBzdHJlbmd0aCksIGRlY2F5aW5nIHBlclxuLy8gICAgIHN0ZXAsIHNvIHRpbGVzIG5lYXIgYSBzdHJvbmcgZW5lbXkgYXJlIHBlbmFsaXNlZC5cbi8vIEVhY2ggZ2VuZXJhbCBtb3ZlcyB0byB0aGUgbmVpZ2hib3VyIG1heGltaXNpbmcgYXR0cmFjdGlvbiAtIHJlcGVsV2VpZ2h0Km1heCgwLCBkYW5nZXIgLSBvd25TdGFjayksXG4vLyBpLmUuIGl0IGFkdmFuY2VzIG9uIHZhbHVlIGJ1dCByZWZ1c2VzIHRvIHN0ZXAgaW50byBhIGZvcmNlIHN0cm9uZ2VyIHRoYW4gaXRzZWxmLiBFbWVyZ2VudFxuLy8gYXR0YWNrIC8gZmxhbmsgLyBhdm9pZCBiZWhhdmlvdXIgd2l0aCBubyBwZXItdGFyZ2V0IHNwZWNpYWwtY2FzaW5nLlxuLy8gY29uZmlnOiBhdHRyYWN0RGVjYXksIGRhbmdlckRlY2F5LCByZXBlbFdlaWdodCwgY2FwaXRhbEJvbnVzLCBnYXJyaXNvblBlbmFsdHksIGJhc2VDaXR5VmFsdWUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiaW5mbHVlbmNlTWFwXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGF0dHJhY3REZWNheSA9IG51bShjZmcuYXR0cmFjdERlY2F5LCAxKTtcbiAgICBjb25zdCBkYW5nZXJEZWNheSA9IG51bShjZmcuZGFuZ2VyRGVjYXksIDEuNSk7XG4gICAgY29uc3QgcmVwZWxXZWlnaHQgPSBudW0oY2ZnLnJlcGVsV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgNDApO1xuICAgIGNvbnN0IGdhcnJpc29uUGVuYWx0eSA9IG51bShjZmcuZ2Fycmlzb25QZW5hbHR5LCAwLjMpO1xuICAgIGNvbnN0IGJhc2VDaXR5VmFsdWUgPSBudW0oY2ZnLmJhc2VDaXR5VmFsdWUsIDYwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICAvLyBQYXNzYWJsZSB0aWxlIGdyYXBoLlxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07XG4gICAgICAgIGlmIChzcGVlZCAmJiBzcGVlZCA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpO1xuICAgIH1cbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKGtleShueCwgbnkpKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuXG4gICAgLy8gTWF4LXBsdXMgQkZTOiBlYWNoIHNvdXJjZSBpbmplY3RzIGEgdmFsdWUgdGhhdCBkZWNheXMgYnkgYGRlY2F5YCBwZXIgcGFzc2FibGUgc3RlcDsgZXZlcnkgdGlsZVxuICAgIC8vIGtlZXBzIHRoZSBoaWdoZXN0IHZhbHVlIHJlYWNoaW5nIGl0LiBTaW1wbGUgRGlqa3N0cmEtc3R5bGUgcmVsYXhhdGlvbiB3aXRoIGEgdmFsdWUgcHJpb3JpdHkuXG4gICAgY29uc3QgcHJvcGFnYXRlID0gKHNvdXJjZXM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHZhbHVlOiBudW1iZXI7IH1bXSwgZGVjYXk6IG51bWJlcik6IE1hcDxzdHJpbmcsIG51bWJlcj4gPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIC8vIFByaW9yaXR5IGJ5IHZhbHVlIGRlc2MgdmlhIHJlcGVhdGVkIG1heC1zY2FuIG92ZXIgYW4gYWN0aXZlIGZyb250aWVyLiBUaWxlcyBhcmUgZmV3LCBhbmQgd2VcbiAgICAgICAgLy8gb25seSByZWxheCB3aGVuIHdlIGltcHJvdmUsIHNvIHRoaXMgc3RheXMgY2hlYXAuXG4gICAgICAgIGNvbnN0IGZyb250aWVyOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB2YWx1ZTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXkocy54LCBzLnkpO1xuICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoKGZpZWxkLmdldChrKSA/PyAtSW5maW5pdHkpIDwgcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZpZWxkLnNldChrLCBzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBmcm9udGllci5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChmcm9udGllci5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHBvcCB0aGUgaGlnaGVzdC12YWx1ZSBmcm9udGllciBlbnRyeVxuICAgICAgICAgICAgbGV0IGJpID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnRpZXIubGVuZ3RoOyBpKyspIGlmIChmcm9udGllcltpXS52YWx1ZSA+IGZyb250aWVyW2JpXS52YWx1ZSkgYmkgPSBpO1xuICAgICAgICAgICAgY29uc3QgY3VyID0gZnJvbnRpZXIuc3BsaWNlKGJpLCAxKVswXTtcbiAgICAgICAgICAgIGlmICgoZmllbGQuZ2V0KGtleShjdXIueCwgY3VyLnkpKSA/PyAtSW5maW5pdHkpID4gY3VyLnZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG52ID0gY3VyLnZhbHVlIC0gZGVjYXk7XG4gICAgICAgICAgICBpZiAobnYgPD0gMCkgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG4gb2YgbmVpZ2hib3JzT2YoY3VyLngsIGN1ci55KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5rID0ga2V5KG4ueCwgbi55KTtcbiAgICAgICAgICAgICAgICBpZiAoKGZpZWxkLmdldChuaykgPz8gLUluZmluaXR5KSA+PSBudikgY29udGludWU7XG4gICAgICAgICAgICAgICAgZmllbGQuc2V0KG5rLCBudik7XG4gICAgICAgICAgICAgICAgZnJvbnRpZXIucHVzaCh7IHg6IG4ueCwgeTogbi55LCB2YWx1ZTogbnYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRyYWN0U291cmNlcyA9IGNpdGllc1xuICAgICAgICAuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgLm1hcChjID0+ICh7XG4gICAgICAgICAgICB4OiBjLngsIHk6IGMueSxcbiAgICAgICAgICAgIHZhbHVlOiBiYXNlQ2l0eVZhbHVlICsgKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCkgLSBnYXJyaXNvblBlbmFsdHkgKiBjLmdhcnJpc29uLFxuICAgICAgICB9KSlcbiAgICAgICAgLmZpbHRlcihzID0+IHMudmFsdWUgPiAwKTtcbiAgICBjb25zdCBkYW5nZXJTb3VyY2VzID0gZ2VuZXJhbHNcbiAgICAgICAgLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpXG4gICAgICAgIC5tYXAoZyA9PiAoeyB4OiBnLngsIHk6IGcueSwgdmFsdWU6IGcudG90YWxVbml0cyB9KSk7XG5cbiAgICBjb25zdCBhdHRyYWN0ID0gcHJvcGFnYXRlKGF0dHJhY3RTb3VyY2VzLCBhdHRyYWN0RGVjYXkpO1xuICAgIGNvbnN0IGRhbmdlciA9IHByb3BhZ2F0ZShkYW5nZXJTb3VyY2VzLCBkYW5nZXJEZWNheSk7XG5cbiAgICBjb25zdCBzY29yZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgb3duU3RhY2s6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBhID0gYXR0cmFjdC5nZXQoa2V5KHgsIHkpKSA/PyAwO1xuICAgICAgICBjb25zdCBkID0gZGFuZ2VyLmdldChrZXkoeCwgeSkpID8/IDA7XG4gICAgICAgIHJldHVybiBhIC0gcmVwZWxXZWlnaHQgKiBNYXRoLm1heCgwLCBkIC0gb3duU3RhY2spO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnZW4uZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBoZXJlID0gc2NvcmUoZ2VuLngsIGdlbi55LCBnZW4udG90YWxVbml0cyk7XG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gaGVyZTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmUobi54LCBuLnksIGdlbi50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIEVuZ2luZSBjb21iYXQgcmVhY2ggZm9yIGEgc3RhY2sgb2YgYGNvdW50YCB1bml0cyAobWlycm9ycyBnZXRDb21iYXREaXN0YW5jZSBpbiB0aGUgZW5naW5lKS5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBUZXJyaXRvcnkgLyBjb250YWlubWVudCBBSSDigJQgdGhlIHVzZXIncyBjb3JlIHN0cmF0ZWd5OiBkb24ndCBmaWdodCBiYXR0bGVzIHlvdSdkIGxvc2UsIGluc3RlYWRcbi8vIG1heGltaXplIHRoZSBMQU5EIHlvdSBob2xkICh0aWxlIG93bmVyc2hpcCBkcmlmdHMgdG8gd2hvZXZlciBoYXMgdW5pdHMgbmVhcmJ5KSwgZXZlbiB3aGlsZVxuLy8gb3V0bnVtYmVyZWQsIGJ5IHNwcmVhZGluZyBvdXQgYW5kIFwibmV0dGluZ1wiIHRoZSBlbmVteS4gTW9yZSBsYW5kIC0+IG1vcmUgZm9vZCAtPiBiaWdnZXIgYXJtaWVzIC0+XG4vLyBldmVudHVhbGx5IHlvdSBjYW4gd2luIHRoZSBmaWdodHMgeW91IHdlcmUgYXZvaWRpbmcuXG4vL1xuLy8gRWFjaCBnZW5lcmFsIHNjb3JlcyBpdHMgcGFzc2FibGUgbmVpZ2hib3VycyAoYW5kIHN0YXlpbmcgcHV0KTpcbi8vICAgKyBhZHZhbmNlOiAgcHVzaCB0b3dhcmQgZW5lbXktaGVsZCBzcGFjZSAobmVnYXRpdmUgZGlzdGFuY2UgdG8gbmVhcmVzdCBlbmVteSBnZW5lcmFsL2NpdHkpIHNvIHdlXG4vLyAgICAgICAgICAgICAgIGNvbnRlc3QgdGhlaXIgdGVycml0b3J5IHJhdGhlciB0aGFuIGh1ZGRsaW5nIGF0IGhvbWUuXG4vLyAgICsgc3ByZWFkOiAgIHJld2FyZCBkaXN0YW5jZSBmcm9tIG91ciBPV04gZ2VuZXJhbHMgKGNhcHBlZCkgc28gdGhlIGFybXkgZmFucyBvdXQgaW50byBhIG5ldFxuLy8gICAgICAgICAgICAgICBpbnN0ZWFkIG9mIHN0YWNraW5nIG9uIG9uZSB0aWxlIChvdmVybGFwcGluZyBjb3ZlcmFnZSB3aW5zIG5vIGV4dHJhIGxhbmQpLlxuLy8gICAtIHRocmVhdDogICBoZWF2eSBwZW5hbHR5IGZvciBzdGVwcGluZyB3aXRoaW4gY29tYmF0IHJlYWNoIG9mIGFuIGVuZW15IHN0YWNrIFNUUk9OR0VSIHRoYW4gdXMg4oCUXG4vLyAgICAgICAgICAgICAgIHRoYXQncyB0aGUgZmlnaHQgd2UgcmVmdXNlLlxuLy8gICArIGNhcHR1cmU6ICBiaWcgYm9udXMgZm9yIG1vdmluZyBvbnRvIGEgY2l0eSB3ZSBjYW4gdGFrZSAoZ2Fycmlzb24gPCBvdXIgc3RhY2spIOKAlCBmcmVlIGxhbmQuXG4vLyBjb25maWc6IGFkdmFuY2VXZWlnaHQsIHNwcmVhZFdlaWdodCwgc3ByZWFkQ2FwLCB0aHJlYXRXZWlnaHQsIHRocmVhdE1hcmdpbiwgY2FwdHVyZUJvbnVzLlxucmVnaXN0ZXJTdHJhdGVneShcInRlcnJpdG9yeVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBhZHZhbmNlV2VpZ2h0ID0gbnVtKGNmZy5hZHZhbmNlV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBzcHJlYWRXZWlnaHQgPSBudW0oY2ZnLnNwcmVhZFdlaWdodCwgMik7XG4gICAgY29uc3Qgc3ByZWFkQ2FwID0gbnVtKGNmZy5zcHJlYWRDYXAsIDYpO1xuICAgIGNvbnN0IHRocmVhdFdlaWdodCA9IG51bShjZmcudGhyZWF0V2VpZ2h0LCAxMik7XG4gICAgY29uc3QgdGhyZWF0TWFyZ2luID0gbnVtKGNmZy50aHJlYXRNYXJnaW4sIDEuMSk7XG4gICAgY29uc3QgY2FwdHVyZUJvbnVzID0gbnVtKGNmZy5jYXB0dXJlQm9udXMsIDUwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdO1xuICAgICAgICBpZiAoc3BlZWQgJiYgc3BlZWQgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTtcbiAgICB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrZXkobngsIG55KSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlBbmNob3JzID0gWy4uLmVuZW15R2VuZXJhbHMsIC4uLmVuZW15T3JOZXV0cmFsQ2l0aWVzXTtcblxuICAgIGNvbnN0IG1pbkRpc3RUbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcHRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgYmVzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHRzKSBiZXN0ID0gTWF0aC5taW4oYmVzdCwgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHApKTtcbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGFsbGllcyA9IG91cnMuZmlsdGVyKG8gPT4gby5pZCAhPT0gZ2VuLmlkKTtcbiAgICAgICAgY29uc3QgY2l0eUF0ID0gbmV3IE1hcChlbmVteU9yTmV1dHJhbENpdGllcy5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcblxuICAgICAgICBjb25zdCBzY29yZVRpbGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgIC8vIGFkdmFuY2UgdG93YXJkIGVuZW15IHNwYWNlIChjb250ZXN0IHRoZWlyIGxhbmQpXG4gICAgICAgICAgICBpZiAoZW5lbXlBbmNob3JzLmxlbmd0aCkgc2NvcmUgKz0gYWR2YW5jZVdlaWdodCAqIC1taW5EaXN0VG8oeCwgeSwgZW5lbXlBbmNob3JzKTtcbiAgICAgICAgICAgIC8vIHNwcmVhZCBvdXQgZnJvbSBvdXIgb3duIGdlbmVyYWxzIHRvIGNvdmVyIG1vcmUgYXJlYSAoY2FwcGVkKVxuICAgICAgICAgICAgaWYgKGFsbGllcy5sZW5ndGgpIHNjb3JlICs9IHNwcmVhZFdlaWdodCAqIE1hdGgubWluKHNwcmVhZENhcCwgbWluRGlzdFRvKHgsIHksIGFsbGllcykpO1xuICAgICAgICAgICAgLy8gcmVmdXNlIHRvIHN0ZXAgd2l0aGluIHJlYWNoIG9mIGEgc3Ryb25nZXIgZW5lbXkgc3RhY2tcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFjaCA9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoeyB4LCB5IH0sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChkIDw9IHJlYWNoICsgMSkgc2NvcmUgLT0gdGhyZWF0V2VpZ2h0ICogKHJlYWNoICsgMSAtIGQgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGdyYWIgdW5kZWZlbmRlZCAvIHdlYWsgbGFuZFxuICAgICAgICAgICAgY29uc3QgYyA9IGNpdHlBdC5nZXQoa2V5KHgsIHkpKTtcbiAgICAgICAgICAgIGlmIChjICYmIFMgPiBjLmdhcnJpc29uKSBzY29yZSArPSBjYXB0dXJlQm9udXM7XG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBzY29yZVRpbGUoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmVUaWxlKG4ueCwgbi55KTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBTbm93YmFsbCBBSSDigJQgdGhlIGZ1bGwgdmVyc2lvbiBvZiB0aGUgdXNlcidzIHN0cmF0ZWd5LiBUZXJyaXRvcnkvY29udGFpbm1lbnQgRUFSTFkgKHNwcmVhZCwgdGFrZVxuLy8gbGFuZCwgcmVmdXNlIGxvc2luZyBmaWdodHMsIGdyb3cpLCB0aGVuIENPTlZFUlQgdGhlIGVjb25vbWljIGxlYWQgaW50byBraWxsczpcbi8vICAgLSBodW50OiBhY3RpdmVseSBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZSBjYW4gYmVhdCAod2Vha2VyIHRoYW4gb3VyIHN0YWNrKSB0byBkZXN0cm95IHRoZW0g4oCUIHlvdVxuLy8gICAgIGNhbid0IHdpbiBieSBob2xkaW5nIGxhbmQgZm9yZXZlciwgeW91IGhhdmUgdG8gZWxpbWluYXRlIHRoZSBlbmVteSBvbmNlIHlvdSBvdXQtc2NhbGUgdGhlbS5cbi8vICAgLSBwcmVzczogb25jZSBvdXIgZmFjdGlvbiBvdXQtYXJtaWVzIHRoZSBzdHJvbmdlc3QgZW5lbXksIHJlbGF4IHRocmVhdC1hdm9pZGFuY2UgYW5kIHB1c2gsIHNvXG4vLyAgICAgdGhlIGxlYWQgaXMgY29udmVydGVkIHRvIGEgd2luIGluc3RlYWQgb2Ygc3RhbGxpbmcuXG4vLyAgIC0gdGhyZWF0OiBzdGlsbCByZWZ1c2UgZmlnaHRzIGFnYWluc3Qgc3RhY2tzIHN0cm9uZ2VyIHRoYW4gdXMgKHRoZSB3aG9sZSBwb2ludCBvZiBzbm93YmFsbGluZykuXG4vLyBjb25maWc6IGFkdmFuY2VXZWlnaHQsIHNwcmVhZFdlaWdodCwgc3ByZWFkQ2FwLCB0aHJlYXRXZWlnaHQsIHRocmVhdE1hcmdpbiwgY2FwdHVyZUJvbnVzLFxuLy8gICAgICAgICBodW50V2VpZ2h0LCBraWxsTWFyZ2luLCBwcmVzc01hcmdpbiwgcHJlc3NSZWxheC5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJzbm93YmFsbFwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBhZHZhbmNlV2VpZ2h0ID0gbnVtKGNmZy5hZHZhbmNlV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBzcHJlYWRXZWlnaHQgPSBudW0oY2ZnLnNwcmVhZFdlaWdodCwgMik7XG4gICAgY29uc3Qgc3ByZWFkQ2FwID0gbnVtKGNmZy5zcHJlYWRDYXAsIDYpO1xuICAgIGNvbnN0IHRocmVhdFdlaWdodCA9IG51bShjZmcudGhyZWF0V2VpZ2h0LCAxOCk7XG4gICAgY29uc3QgdGhyZWF0TWFyZ2luID0gbnVtKGNmZy50aHJlYXRNYXJnaW4sIDEuMCk7XG4gICAgY29uc3QgY2FwdHVyZUJvbnVzID0gbnVtKGNmZy5jYXB0dXJlQm9udXMsIDYwKTtcbiAgICBjb25zdCBodW50V2VpZ2h0ID0gbnVtKGNmZy5odW50V2VpZ2h0LCA0KTtcbiAgICBjb25zdCBraWxsTWFyZ2luID0gbnVtKGNmZy5raWxsTWFyZ2luLCAxLjI1KTsgLy8gb25seSBodW50IGdlbmVyYWxzIHdlIGJlYXQgYnkgdGhpcyBmYWN0b3JcbiAgICBjb25zdCBwcmVzc01hcmdpbiA9IG51bShjZmcucHJlc3NNYXJnaW4sIDEuMTUpOyAvLyBcImFoZWFkXCIgb25jZSBvdXIgYXJteSA+PSB0aGlzICogdG9wIGVuZW15IGFybXlcbiAgICBjb25zdCBwcmVzc1JlbGF4ID0gbnVtKGNmZy5wcmVzc1JlbGF4LCAwLjQpOyAvLyB0aHJlYXQgd2VpZ2h0IG11bHRpcGxpZXIgd2hpbGUgcHJlc3NpbmdcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdO1xuICAgICAgICBpZiAoc3BlZWQgJiYgc3BlZWQgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTtcbiAgICB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrZXkobngsIG55KSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlBbmNob3JzID0gWy4uLmVuZW15R2VuZXJhbHMsIC4uLmVuZW15T3JOZXV0cmFsQ2l0aWVzXTtcblxuICAgIC8vIEFyZSB3ZSBhaGVhZCBvdmVyYWxsPyBDb21wYXJlIG91ciB0b3RhbCBhcm15IHRvIHRoZSBzdHJvbmdlc3Qgc2luZ2xlIGVuZW15IGZhY3Rpb24ncyBhcm15LlxuICAgIGNvbnN0IGFybXlCeUZhY3Rpb24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykgYXJteUJ5RmFjdGlvbi5zZXQoZy5mYWN0aW9uSWQsIChhcm15QnlGYWN0aW9uLmdldChnLmZhY3Rpb25JZCkgPz8gMCkgKyBnLnRvdGFsVW5pdHMpO1xuICAgIGNvbnN0IG91ckFybXkgPSBhcm15QnlGYWN0aW9uLmdldChmYWN0aW9uSWQpID8/IDA7XG4gICAgbGV0IHRvcEVuZW15QXJteSA9IDA7XG4gICAgZm9yIChjb25zdCBbZmlkLCBhXSBvZiBhcm15QnlGYWN0aW9uKSBpZiAoZmlkICE9PSBmYWN0aW9uSWQpIHRvcEVuZW15QXJteSA9IE1hdGgubWF4KHRvcEVuZW15QXJteSwgYSk7XG4gICAgY29uc3QgcHJlc3NpbmcgPSBvdXJBcm15ID49IHRvcEVuZW15QXJteSAqIHByZXNzTWFyZ2luO1xuICAgIGNvbnN0IGVmZlRocmVhdFdlaWdodCA9IHByZXNzaW5nID8gdGhyZWF0V2VpZ2h0ICogcHJlc3NSZWxheCA6IHRocmVhdFdlaWdodDtcblxuICAgIGNvbnN0IG1pbkRpc3RUbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcHRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgYmVzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHRzKSBiZXN0ID0gTWF0aC5taW4oYmVzdCwgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHApKTtcbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGFsbGllcyA9IG91cnMuZmlsdGVyKG8gPT4gby5pZCAhPT0gZ2VuLmlkKTtcbiAgICAgICAgY29uc3QgY2l0eUF0ID0gbmV3IE1hcChlbmVteU9yTmV1dHJhbENpdGllcy5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcbiAgICAgICAgY29uc3QgcHJleSA9IGVuZW15R2VuZXJhbHMuZmlsdGVyKGUgPT4gUyA+IGUudG90YWxVbml0cyAqIGtpbGxNYXJnaW4pO1xuXG4gICAgICAgIGNvbnN0IHNjb3JlVGlsZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICAgICAgaWYgKGVuZW15QW5jaG9ycy5sZW5ndGgpIHNjb3JlICs9IGFkdmFuY2VXZWlnaHQgKiAtbWluRGlzdFRvKHgsIHksIGVuZW15QW5jaG9ycyk7XG4gICAgICAgICAgICBpZiAoYWxsaWVzLmxlbmd0aCkgc2NvcmUgKz0gc3ByZWFkV2VpZ2h0ICogTWF0aC5taW4oc3ByZWFkQ2FwLCBtaW5EaXN0VG8oeCwgeSwgYWxsaWVzKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhY2ggPSBjb21iYXREaXN0KGUudG90YWxVbml0cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHsgeCwgeSB9LCBlKTtcbiAgICAgICAgICAgICAgICBpZiAoZCA8PSByZWFjaCArIDEpIHNjb3JlIC09IGVmZlRocmVhdFdlaWdodCAqIChyZWFjaCArIDEgLSBkICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjID0gY2l0eUF0LmdldChrZXkoeCwgeSkpO1xuICAgICAgICAgICAgaWYgKGMgJiYgUyA+IGMuZ2Fycmlzb24pIHNjb3JlICs9IGNhcHR1cmVCb251cztcbiAgICAgICAgICAgIC8vIGh1bnQga2lsbGFibGUgZW5lbXkgZ2VuZXJhbHMgKHN0cm9uZyBwdWxsIHRvd2FyZCB0aGUgbmVhcmVzdCBvbmUpXG4gICAgICAgICAgICBpZiAocHJleS5sZW5ndGgpIHNjb3JlICs9IGh1bnRXZWlnaHQgKiAtbWluRGlzdFRvKHgsIHksIHByZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gc2NvcmVUaWxlKGdlbi54LCBnZW4ueSk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZihnZW4ueCwgZ2VuLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBzYyA9IHNjb3JlVGlsZShuLngsIG4ueSk7XG4gICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3QgPSBuOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3RDaXR5LCBBSVdvcmtlclNuYXBzaG90R2VuZXJhbCB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBDb29yZGluYXRlZCBhc3NpZ25tZW50IEFJLiBTYW1lIGNvbWJhdC1nYXRlZCwgZGVmZW5kLCByZXRyZWF0IGxvZ2ljIGFzIHRoZSBjaGFtcCAodGhyZWF0QXdhcmUpLFxuLy8gYnV0IGFkZHMgYSBHTE9CQUwgYXNzaWdubWVudCBwYXNzIHNvIG91ciBnZW5lcmFscyBkb24ndCBhbGwgcGlsZSBvbnRvIHRoZSBzaW5nbGUgYmVzdCBjaXR5IHdoaWxlXG4vLyBvdGhlciBjYXB0dXJhYmxlIGNpdGllcyBzaXQgdW50YWtlbi4gV2UgZ3JlZWRpbHkgYXNzaWduIGVhY2ggZ2VuZXJhbCBhIERJU1RJTkNUIGVuZW15IGNpdHlcbi8vIChiZXN0IChnZW5lcmFsLGNpdHkpIHBhaXJzIGZpcnN0KSwgY2FwdHVyaW5nIG1vcmUgY2l0aWVzIHBlciB0dXJuID0+IGZhc3RlciBlY29ub215ID0+IG1vcmUgd2lucy5cbi8vIEEgY2l0eSBvbmx5IG5lZWRzIG1vcmUgdGhhbiBvbmUgYXR0YWNrZXIgaWYgYSBzaW5nbGUgZ2VuZXJhbCBjYW4ndCBjcmFjayBpdDsgc3VjaCBvdmVyLXN0cmVuZ3RoXG4vLyBjaXRpZXMgc3RheSBvcGVuIHRvIG11bHRpcGxlIGdlbmVyYWxzLlxuLy8gY29uZmlnOiBzYWZldHksIGRpc3RXZWlnaHQsIGdhcnJpc29uV2VpZ2h0LCBjYXBpdGFsQm9udXMsIGRlZmVuZFdlaWdodCwgZW5lbXlNb3ZlLlxucmVnaXN0ZXJTdHJhdGVneShcImNvb3JkaW5hdGVcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3Qgc2FmZXR5ID0gbnVtKGNmZy5zYWZldHksIDEuMCk7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjQpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCA1KTtcbiAgICBjb25zdCBkZWZlbmRXZWlnaHQgPSBudW0oY2ZnLmRlZmVuZFdlaWdodCwgNCk7XG4gICAgY29uc3QgZW5lbXlNb3ZlID0gbnVtKGNmZy5lbmVteU1vdmUsIDEuNSk7XG4gICAgY29uc3QgcG9wV2VpZ2h0ID0gbnVtKGNmZy5wb3BXZWlnaHQsIDApOyAvLyA+MDogcHJlZmVyIGhpZ2gtcG9wdWxhdGlvbiAoZWNvbm9taWNhbGx5IHZhbHVhYmxlKSBjaXRpZXNcbiAgICBjb25zdCBwYXRoQXdhcmUgPSBjZmcucGF0aEF3YXJlID09PSB0cnVlOyAvLyByb3V0ZSBieSBwYXNzYWJsZSBkaXN0YW5jZSBpbnN0ZWFkIG9mIHN0cmFpZ2h0IGhleCBkaXN0YW5jZVxuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMsIHRpbGVzLCB0ZXJyYWluU3BlZWRzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG91ckNpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcblxuICAgIC8vIFBhdGgtYXdhcmUgZGlzdGFuY2U6IEJGUyBvdmVyIHBhc3NhYmxlIHRpbGVzIGZyb20gZWFjaCBvZiBvdXIgZ2VuZXJhbHMsIHNvIGEgY2l0eSB3YWxsZWQgb2ZmIGJ5XG4gICAgLy8gbW91bnRhaW5zL3dhdGVyIGlzbid0IHRyZWF0ZWQgYXMgXCJuZWFyXCIuIEZhbGxzIGJhY2sgdG8gaGV4IGRpc3RhbmNlIHdoZW4gcGF0aEF3YXJlIGlzIG9mZiBvciBhXG4gICAgLy8gdGlsZSBpcyB1bnJlYWNoYWJsZS5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBpZiAocGF0aEF3YXJlKSBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHsgY29uc3QgcyA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07IGlmIChzICYmIHMgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTsgfVxuICAgIGNvbnN0IGJmc0NhY2hlID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIG51bWJlcj4+KCk7XG4gICAgY29uc3QgYmZzRnJvbSA9IChnOiBBSVdvcmtlclNuYXBzaG90R2VuZXJhbCk6IE1hcDxzdHJpbmcsIG51bWJlcj4gPT4ge1xuICAgICAgICBsZXQgY2FjaGVkID0gYmZzQ2FjaGUuZ2V0KGcuaWQpO1xuICAgICAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICAgICAgICBjb25zdCBkaXN0ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBrZXkoZy54LCBnLnkpO1xuICAgICAgICBkaXN0LnNldChzdGFydCwgMCk7XG4gICAgICAgIGxldCBmcm9udGllciA9IFt7IHg6IGcueCwgeTogZy55IH1dO1xuICAgICAgICB3aGlsZSAoZnJvbnRpZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0RjogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGN1ciBvZiBmcm9udGllcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNkID0gZGlzdC5nZXQoa2V5KGN1ci54LCBjdXIueSkpID8/IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBueCA9IGN1ci54ICsgZHgsIG55ID0gY3VyLnkgKyBkeTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmsgPSBrZXkobngsIG55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhuaykgfHwgZGlzdC5oYXMobmspKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGN1ciwgeyB4OiBueCwgeTogbnkgfSkgIT09IDEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBkaXN0LnNldChuaywgY2QgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEYucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcm9udGllciA9IG5leHRGO1xuICAgICAgICB9XG4gICAgICAgIGJmc0NhY2hlLnNldChnLmlkLCBkaXN0KTtcbiAgICAgICAgcmV0dXJuIGNhY2hlZCA9IGRpc3Q7XG4gICAgfTtcbiAgICBjb25zdCBkaXN0T2YgPSAoZzogQUlXb3JrZXJTbmFwc2hvdEdlbmVyYWwsIHA6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0pOiBudW1iZXIgPT4ge1xuICAgICAgICBpZiAoIXBhdGhBd2FyZSkgcmV0dXJuIGhleERpc3RhbmNlKGcsIHApO1xuICAgICAgICBjb25zdCBkID0gYmZzRnJvbShnKS5nZXQoa2V5KHAueCwgcC55KSk7XG4gICAgICAgIHJldHVybiBkID09PSB1bmRlZmluZWQgPyBoZXhEaXN0YW5jZShnLCBwKSA6IGQ7XG4gICAgfTtcbiAgICBjb25zdCBjaXR5VmFsdWUgPSAoYzogQUlXb3JrZXJTbmFwc2hvdENpdHkpOiBudW1iZXIgPT5cbiAgICAgICAgKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCkgLSBnYXJyaXNvbldlaWdodCAqIGMuZ2Fycmlzb24gKyBwb3BXZWlnaHQgKiAoYy5wb3B1bGF0aW9uID8/IDApO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0+KCk7XG5cbiAgICAvLyAxKSBHbG9iYWwgYXNzaWdubWVudCBvZiBnZW5lcmFscyB0byBkaXN0aW5jdCBjYXB0dXJhYmxlIGNpdGllcywgYmVzdCBwYWlycyBmaXJzdC5cbiAgICB0eXBlIFBhaXIgPSB7IGdpZDogc3RyaW5nOyBjaXR5OiB0eXBlb2YgZW5lbXlDaXRpZXNbbnVtYmVyXTsgc2NvcmU6IG51bWJlcjsgc29sb2FibGU6IGJvb2xlYW47IH07XG4gICAgY29uc3QgcGFpcnM6IFBhaXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBlbmVteUNpdGllcykge1xuICAgICAgICAgICAgY29uc3Qgc29sb2FibGUgPSBnLnRvdGFsVW5pdHMgPiBjLmdhcnJpc29uICogc2FmZXR5O1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBjaXR5VmFsdWUoYykgLSBkaXN0V2VpZ2h0ICogZGlzdE9mKGcsIGMpO1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7IGdpZDogZy5pZCwgY2l0eTogYywgc2NvcmUsIHNvbG9hYmxlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhaXJzLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcbiAgICBjb25zdCBjaXR5VGFrZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHAgb2YgcGFpcnMpIHtcbiAgICAgICAgaWYgKCFwLnNvbG9hYmxlKSBjb250aW51ZTsgLy8gb25seSB0aGUgYXNzaWdubWVudCBvZiB3aW5uYWJsZSBzb2xvIGNhcHR1cmVzIGlzIGV4Y2x1c2l2ZVxuICAgICAgICBpZiAodGFyZ2V0LmhhcyhwLmdpZCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoY2l0eVRha2VuLmhhcyhwLmNpdHkuaWQpKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0LnNldChwLmdpZCwgeyB4OiBwLmNpdHkueCwgeTogcC5jaXR5LnkgfSk7XG4gICAgICAgIGNpdHlUYWtlbi5hZGQocC5jaXR5LmlkKTtcbiAgICB9XG5cbiAgICAvLyAyKSBHZW5lcmFscyB3aXRoIG5vIGFzc2lnbmVkIGNpdHk6IGRlZmVuZCBhIHRocmVhdGVuZWQgY2l0eSwgZWxzZSBnYW5nIHVwIG9uIHRoZSBiZXN0XG4gICAgLy8gICAgcmVtYWluaW5nIGNpdHkgKGV2ZW4gaWYgYWxyZWFkeSBjbGFpbWVkIOKAlCBuZWVkZWQgZm9yIG92ZXItc3RyZW5ndGggdGFyZ2V0cyksIGVsc2UgcmV0cmVhdC5cbiAgICBjb25zdCB0aHJlYXRlbmVkQ2l0eSA9IChvYzogdHlwZW9mIG91ckNpdGllc1tudW1iZXJdKSA9PlxuICAgICAgICBlbmVteUdlbmVyYWxzLnNvbWUoZSA9PiBoZXhEaXN0YW5jZShlLCBvYykgPD0gY29tYmF0RGlzdChlLnRvdGFsVW5pdHMpICsgZW5lbXlNb3ZlKTtcbiAgICBjb25zdCByZWZ1Z2UgPSAoZzogQUlXb3JrZXJTbmFwc2hvdEdlbmVyYWwpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygb3VyQ2l0aWVzKSB7IGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnLCBjKTsgaWYgKGQgPiAwICYmIGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3QgPSB7IHg6IGMueCwgeTogYy55IH07IH0gfVxuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3VycykgeyBpZiAoby5pZCA9PT0gZy5pZCB8fCBvLnRvdGFsVW5pdHMgPD0gZy50b3RhbFVuaXRzKSBjb250aW51ZTsgY29uc3QgZCA9IGhleERpc3RhbmNlKGcsIG8pOyBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IHsgeDogby54LCB5OiBvLnkgfTsgfSB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGcgb2Ygb3Vycykge1xuICAgICAgICBpZiAodGFyZ2V0LmhhcyhnLmlkKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IFMgPSBnLnRvdGFsVW5pdHM7XG5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3Qgb2Mgb2Ygb3VyQ2l0aWVzKSB7XG4gICAgICAgICAgICBpZiAoIXRocmVhdGVuZWRDaXR5KG9jKSkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IGRlZmVuZFdlaWdodCAtIGRpc3RXZWlnaHQgKiBkaXN0T2YoZywgb2MpO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBvYy54LCB5OiBvYy55IH07IH1cbiAgICAgICAgfVxuICAgICAgICAvLyBoZWxwIHRha2UgdGhlIG1vc3QgdmFsdWFibGUgY2l0eSB3ZSBjYW4gY29udHJpYnV0ZSB0byAoY2xvc2VzdCBiaWcgb25lKVxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgZW5lbXlDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gY2l0eVZhbHVlKGMpIC0gZGlzdFdlaWdodCAqIGRpc3RPZihnLCBjKTtcbiAgICAgICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHsgeDogYy54LCB5OiBjLnkgfTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdW5kZXJUaHJlYXQgPSBlbmVteUdlbmVyYWxzLnNvbWUoZSA9PlxuICAgICAgICAgICAgZS50b3RhbFVuaXRzID4gUyAqIHNhZmV0eSAmJiBoZXhEaXN0YW5jZShlLCBnKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyBlbmVteU1vdmUpO1xuICAgICAgICBpZiAodW5kZXJUaHJlYXQgJiYgKCFiZXN0IHx8IGJlc3RTY29yZSA8IDApKSB7XG4gICAgICAgICAgICBjb25zdCByID0gcmVmdWdlKGcpO1xuICAgICAgICAgICAgaWYgKHIpIGJlc3QgPSByO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSB0YXJnZXQuc2V0KGcuaWQsIGJlc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnIG9mIG91cnMpIHtcbiAgICAgICAgY29uc3QgdCA9IHRhcmdldC5nZXQoZy5pZCk7XG4gICAgICAgIGlmICh0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHQgfSk7XG4gICAgfVxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5mdW5jdGlvbiBjb21iYXREaXN0KGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2cxMChjb3VudCArIDEpKSArIDAuNTtcbn1cblxuLy8gRG9taW5pb24gQUkg4oCUIGRpcmVjdGx5IG9wdGltaXplcyB0aGUgYWN0dWFsIHdpbiBjb25kaXRpb24gKGxhbmQpLiBUaWxlIG93bmVyc2hpcCBnb2VzIHRvIHdob2V2ZXJcbi8vIGhhcyB0aGUgaGlnaGVzdCBhcm15IGluZmx1ZW5jZSBvbiBpdCwgd2hlcmUgaW5mbHVlbmNlID0gc3RyZW5ndGggLyAoZGlzdGFuY2UrMSleRkFMTE9GRlxuLy8gKGludmVyc2Utc3F1YXJlIGluIHRoZSBsaXZlIGVuZ2luZSkuIEVhY2ggZ2VuZXJhbCBtb3ZlcyB0byB0aGUgcG9zaXRpb24gdGhhdCBtYXhpbWl6ZXMgdGhlIG51bWJlclxuLy8gb2YgdGlsZXMgb3VyIGZhY3Rpb24gd291bGQgRE9NSU5BVEUgKG91ciBpbmZsdWVuY2UgPiBldmVyeSByaXZhbCdzKSwgY291bnRpbmcgb25seSB0aWxlcyB3aXRoaW5cbi8vIGluZmx1ZW5jZSByYW5nZSDigJQgc28gZ2VuZXJhbHMgbmF0dXJhbGx5IGZhbiBvdXQgdG8gY292ZXIgdGhlIG1hcCB3aXRob3V0IG92ZXJsYXBwaW5nIChvdmVybGFwIHdpbnNcbi8vIG5vIGV4dHJhIHRpbGVzKSwgd2hpbGUgcmVmdXNpbmcgZmlnaHRzIGFnYWluc3Qgc3Ryb25nZXIgc3RhY2tzIGFuZCBncmFiYmluZyBjYXB0dXJhYmxlIGNpdGllcy5cbi8vIGNvbmZpZzogZmFsbG9mZiwgcmFkaXVzLCB0aHJlYXRXZWlnaHQsIHRocmVhdE1hcmdpbiwgY2FwdHVyZUJvbnVzLCBvd25CaWFzLlxucmVnaXN0ZXJTdHJhdGVneShcImRvbWluaW9uXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGZhbGxvZmYgPSBudW0oY2ZnLmZhbGxvZmYsIDYpOyAvLyBtaXJyb3IgQVJNWV9GQUxMT0ZGX0VYUE9ORU5UIGluIHRoZSBlbmdpbmVcbiAgICBjb25zdCByYWRpdXMgPSBudW0oY2ZnLnJhZGl1cywgNSk7IC8vIHRpbGVzIGJleW9uZCB0aGlzIGNvbnRyaWJ1dGUgbmVnbGlnaWJsZSBpbmZsdWVuY2VcbiAgICBjb25zdCB0aHJlYXRXZWlnaHQgPSBudW0oY2ZnLnRocmVhdFdlaWdodCwgMzApO1xuICAgIGNvbnN0IHRocmVhdE1hcmdpbiA9IG51bShjZmcudGhyZWF0TWFyZ2luLCAxLjApO1xuICAgIGNvbnN0IGNhcHR1cmVCb251cyA9IG51bShjZmcuY2FwdHVyZUJvbnVzLCA4KTtcbiAgICBjb25zdCBvd25CaWFzID0gbnVtKGNmZy5vd25CaWFzLCAxLjApOyAvLyBob3cgbXVjaCBvdXIgaW5mbHVlbmNlIG11c3QgZXhjZWVkIHJpdmFscycgdG8gY291bnQgYXMgb3Vyc1xuICAgIGNvbnN0IGhhcmRBdm9pZCA9IGNmZy5oYXJkQXZvaWQgPT09IHRydWU7IC8vIG5ldmVyIHN0ZXAgd2l0aGluIGEgc3Ryb25nZXIgc3RhY2sncyByZWFjaCAodnMgc29mdCBwZW5hbHR5KVxuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcblxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykgeyBjb25zdCBzID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTsgaWYgKHMgJiYgcyA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpOyB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgIGlmICh0aWxlU2V0LmhhcyhrZXkobngsIG55KSkgJiYgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHsgeDogbngsIHk6IG55IH0pID09PSAxKSBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgY29uc3QgaW5mID0gKHN0cmVuZ3RoOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gc3RyZW5ndGggLyBNYXRoLnBvdyhkICsgMSwgZmFsbG9mZik7XG5cbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15T3JOZXV0cmFsQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuXG4gICAgLy8gQmFzZSBpbmZsdWVuY2UgcGVyIHRpbGU6IHJpdmFscycgbWF4IChmaXhlZCkgYW5kIG91ciBmYWN0aW9uJ3MgdG90YWwgRVhDTFVESU5HIHRoZSBnZW5lcmFsIHdlXG4gICAgLy8gYXJlIGN1cnJlbnRseSBtb3ZpbmcgKGFkZGVkIGJhY2sgcGVyLWNhbmRpZGF0ZSkuIFByZWNvbXB1dGUgdGhlIHJpdmFsIG1heCBhbmQgb3VyIGJhc2Ugc3VtLlxuICAgIGNvbnN0IHJpdmFsTWF4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBjb25zdCBvdXJCYXNlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICBsZXQgcml2YWxzID0gMDtcbiAgICAgICAgbGV0IG91clN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHQsIGcpO1xuICAgICAgICAgICAgaWYgKGQgPiByYWRpdXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgdiA9IGluZihnLnRvdGFsVW5pdHMsIGQpO1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIG91clN1bSArPSB2O1xuICAgICAgICAgICAgZWxzZSBpZiAodiA+IHJpdmFscykgcml2YWxzID0gdjtcbiAgICAgICAgfVxuICAgICAgICByaXZhbE1heC5zZXQodGssIHJpdmFscyk7XG4gICAgICAgIG91ckJhc2Uuc2V0KHRrLCBvdXJTdW0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGNpdHlBdCA9IG5ldyBNYXAoZW5lbXlPck5ldXRyYWxDaXRpZXMubWFwKGMgPT4gW2tleShjLngsIGMueSksIGNdKSk7XG4gICAgICAgIC8vIFRpbGVzIHRoaXMgZ2VuZXJhbCBjYW4gYWZmZWN0IChuZWFyIGl0cyBjdXJyZW50IE9SIGEgY2FuZGlkYXRlIHBvc2l0aW9uKS5cbiAgICAgICAgY29uc3QgYWZmZWN0ZWQgPSB0aWxlcy5maWx0ZXIodCA9PiBoZXhEaXN0YW5jZSh0LCBnZW4pIDw9IHJhZGl1cyArIDEpO1xuXG4gICAgICAgIGNvbnN0IGNvdmVyYWdlRm9yID0gKGN4OiBudW1iZXIsIGN5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IG93bmVkID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBhZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkQ3VyID0gaGV4RGlzdGFuY2UodCwgZ2VuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkQ2FuZCA9IGhleERpc3RhbmNlKHQsIHsgeDogY3gsIHk6IGN5IH0pO1xuICAgICAgICAgICAgICAgIC8vIG91ciBmYWN0aW9uIGluZmx1ZW5jZSB3aXRoIHRoaXMgZ2VuZXJhbCByZWxvY2F0ZWQgdG8gdGhlIGNhbmRpZGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IG91ciA9IChvdXJCYXNlLmdldCh0aykgPz8gMCkgLSBpbmYoUywgZEN1cikgKyBpbmYoUywgZENhbmQpO1xuICAgICAgICAgICAgICAgIGlmIChvdXIgPiAocml2YWxNYXguZ2V0KHRrKSA/PyAwKSAqIG93bkJpYXMgJiYgb3VyID4gMCkgb3duZWQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvd25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBIHRpbGUgaXMgXCJ1bnNhZmVcIiBpZiBhIHN0cm9uZ2VyIGVuZW15IHN0YWNrIGNvdWxkIGZpZ2h0IHVzIHRoZXJlICh3aXRoaW4gaXRzIGNvbWJhdCByZWFjaFxuICAgICAgICAvLyArMSBzdGVwKS4gV2l0aCBoYXJkQXZvaWQsIHN1Y2ggdGlsZXMgYXJlIG5ldmVyIGNob3NlbiDigJQgZml4aW5nIGRvbWluaW9uJ3MgaGFiaXQgb2Ygd2Fsa2luZ1xuICAgICAgICAvLyB0aGluIHN0YWNrcyBpbnRvIHN0cm9uZ2VyIGVuZW1pZXMgZm9yIGEgYml0IG1vcmUgY292ZXJhZ2UuIE90aGVyd2lzZSBpdCdzIG9ubHkgcGVuYWxpemVkLlxuICAgICAgICBjb25zdCB1bnNhZmUgPSAoY3g6IG51bWJlciwgY3k6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50b3RhbFVuaXRzIDw9IFMgKiB0aHJlYXRNYXJnaW4pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHg6IGN4LCB5OiBjeSB9LCBlKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2NvcmVPZiA9IChjeDogbnVtYmVyLCBjeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgIGxldCBzY29yZSA9IGNvdmVyYWdlRm9yKGN4LCBjeSk7XG4gICAgICAgICAgICBpZiAoIWhhcmRBdm9pZCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh7IHg6IGN4LCB5OiBjeSB9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhY2ggPSBjb21iYXREaXN0KGUudG90YWxVbml0cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkIDw9IHJlYWNoICsgMSkgc2NvcmUgLT0gdGhyZWF0V2VpZ2h0ICogKHJlYWNoICsgMSAtIGQgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjID0gY2l0eUF0LmdldChrZXkoY3gsIGN5KSk7XG4gICAgICAgICAgICBpZiAoYyAmJiBTID4gYy5nYXJyaXNvbikgc2NvcmUgKz0gY2FwdHVyZUJvbnVzO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFdoZW4gdXNpbmcgaGFyZEF2b2lkLCBvbmx5IGNvbnNpZGVyIHNhZmUgY2FuZGlkYXRlcyAoc3RheWluZyBwdXQgaXMgYWx3YXlzIGFsbG93ZWQpLlxuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gbmVpZ2hib3JzT2YoZ2VuLngsIGdlbi55KS5maWx0ZXIobiA9PiAhaGFyZEF2b2lkIHx8ICF1bnNhZmUobi54LCBuLnkpKTtcbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBzY29yZU9mKGdlbi54LCBnZW4ueSk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzYyA9IHNjb3JlT2Yobi54LCBuLnkpO1xuICAgICAgICAgICAgaWYgKHNjID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjOyBiZXN0ID0gbjsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogYmVzdCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIERvbWluaW9uICsgRlJPTlRJRVIgd2VpZ2h0aW5nLiBTYW1lIGFzIFwiZG9taW5pb25cIiAoZWFjaCBnZW5lcmFsIG1vdmVzIHRvIG1heGltaXplIHRoZSB0aWxlcyBvdXJcbi8vIGZhY3Rpb24gZG9taW5hdGVzIHVuZGVyIHRoZSBpbmZsdWVuY2UgbW9kZWwsIHJlZnVzaW5nIGZpZ2h0cyB2cyBjbGVhcmx5LXN0cm9uZ2VyIHN0YWNrcyBhbmRcbi8vIGdyYWJiaW5nIGNpdGllcykg4oCUIEVYQ0VQVCBhIGhlbGQgdGlsZSBpcyB3b3J0aCBtdWNoIG1vcmUgd2hlbiBpdCdzIG5lYXIgdGhlIGVuZW15LiBBIHVuaXQgc2l0dGluZ1xuLy8gaW4gdGhlIHNhZmUgaW50ZXJpb3IvYmFjayBsaW5lIGhvbGRzIHRpbGVzIHRoYXQgYXJlIG91cnMgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGl0J3MgdGhlcmUsIHNvIGl0XG4vLyBhY2hpZXZlcyBub3RoaW5nOyB0aGUgdmFsdWUgbGl2ZXMgYXQgdGhlIGNvbnRlc3RlZCBmcm9udCwgY2xvc2UgdG8gdGhlIGVuZW15LiBTbyBhIGhlbGQgdGlsZSBuZWFyXG4vLyBhbiBlbmVteSBnZW5lcmFsIGNvdW50cyBhcyAxLCB3aGlsZSBhIGRlZXAtaW50ZXJpb3IgdGlsZSAobm8gZW5lbXkgd2l0aGluIGZyb250aWVyUmFuZ2UpIGNvdW50cyBhc1xuLy8gb25seSBgaW50ZXJpb3JWYWx1ZWAuIEdlbmVyYWxzIHRoZXJlZm9yZSBwdXNoIGZvcndhcmQgdG8gaG9sZCB0aGUgYm9yZGVyIGluc3RlYWQgb2YgbG9pdGVyaW5nIGluXG4vLyB0aGUgcmVhci4gaGFyZEF2b2lkIHN0aWxsIGtlZXBzIHRoZW0ganVzdCBvdXRzaWRlIGEgc3Ryb25nZXIgc3RhY2sncyByZWFjaC5cbi8vXG4vLyBjb25maWcgKHBsdXMgZXZlcnl0aGluZyBkb21pbmlvbiByZWFkcyk6IGZyb250aWVyUmFuZ2UsIGludGVyaW9yVmFsdWUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiZG9taW5pb25Gcm9udFwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBmYWxsb2ZmID0gbnVtKGNmZy5mYWxsb2ZmLCA2KTtcbiAgICBjb25zdCByYWRpdXMgPSBudW0oY2ZnLnJhZGl1cywgNSk7XG4gICAgY29uc3QgdGhyZWF0V2VpZ2h0ID0gbnVtKGNmZy50aHJlYXRXZWlnaHQsIDMwKTtcbiAgICBjb25zdCB0aHJlYXRNYXJnaW4gPSBudW0oY2ZnLnRocmVhdE1hcmdpbiwgMS4wKTtcbiAgICBjb25zdCBjYXB0dXJlQm9udXMgPSBudW0oY2ZnLmNhcHR1cmVCb251cywgOCk7XG4gICAgY29uc3Qgb3duQmlhcyA9IG51bShjZmcub3duQmlhcywgMS4wKTtcbiAgICBjb25zdCBoYXJkQXZvaWQgPSBjZmcuaGFyZEF2b2lkID09PSB0cnVlO1xuICAgIC8vIEEgdGlsZSBjb3VudHMgZnVsbHkgd2hlbiBhbiBlbmVteSBnZW5lcmFsIGlzIHdpdGhpbiBmcm9udGllclJhbmdlIG9mIGl0OyBvdGhlcndpc2UgaXQncyB3b3J0aFxuICAgIC8vIG9ubHkgaW50ZXJpb3JWYWx1ZS4gTG93ZXIgaW50ZXJpb3JWYWx1ZSA9IG1vcmUgYWdncmVzc2l2ZWx5IGZvcndhcmQuXG4gICAgY29uc3QgZnJvbnRpZXJSYW5nZSA9IG51bShjZmcuZnJvbnRpZXJSYW5nZSwgNyk7XG4gICAgY29uc3QgaW50ZXJpb3JWYWx1ZSA9IG51bShjZmcuaW50ZXJpb3JWYWx1ZSwgMC4xNSk7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgdGlsZXMsIHRlcnJhaW5TcGVlZHMsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuXG4gICAgY29uc3Qga2V5ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBgJHt4fSwke3l9YDtcbiAgICBjb25zdCB0aWxlU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7IGNvbnN0IHMgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdOyBpZiAocyAmJiBzID4gMCkgdGlsZVNldC5hZGQoa2V5KHQueCwgdC55KSk7IH1cbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbnggPSB4ICsgZHgsIG55ID0geSArIGR5O1xuICAgICAgICAgICAgaWYgKHRpbGVTZXQuaGFzKGtleShueCwgbnkpKSAmJiBoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBjb25zdCBpbmYgPSAoc3RyZW5ndGg6IG51bWJlciwgZDogbnVtYmVyKSA9PiBzdHJlbmd0aCAvIE1hdGgucG93KGQgKyAxLCBmYWxsb2ZmKTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG5cbiAgICBjb25zdCByaXZhbE1heCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgY29uc3Qgb3VyQmFzZSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgLy8gRnJvbnRpZXIgZmFjdG9yIHBlciB0aWxlOiAxIGlmIGFueSBlbmVteSBnZW5lcmFsIGlzIHdpdGhpbiBmcm9udGllclJhbmdlLCBlbHNlIGludGVyaW9yVmFsdWUuXG4gICAgY29uc3QgZnJvbnRpZXIgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgIGxldCByaXZhbHMgPSAwO1xuICAgICAgICBsZXQgb3VyU3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodCwgZyk7XG4gICAgICAgICAgICBpZiAoZCA+IHJhZGl1cykgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCB2ID0gaW5mKGcudG90YWxVbml0cywgZCk7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgb3VyU3VtICs9IHY7XG4gICAgICAgICAgICBlbHNlIGlmICh2ID4gcml2YWxzKSByaXZhbHMgPSB2O1xuICAgICAgICB9XG4gICAgICAgIHJpdmFsTWF4LnNldCh0aywgcml2YWxzKTtcbiAgICAgICAgb3VyQmFzZS5zZXQodGssIG91clN1bSk7XG4gICAgICAgIGxldCBuZWFyRW5lbXkgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHsgaWYgKGhleERpc3RhbmNlKHQsIGUpIDw9IGZyb250aWVyUmFuZ2UpIHsgbmVhckVuZW15ID0gdHJ1ZTsgYnJlYWs7IH0gfVxuICAgICAgICBmcm9udGllci5zZXQodGssIG5lYXJFbmVteSA/IDEgOiBpbnRlcmlvclZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91cnMpIHtcbiAgICAgICAgY29uc3QgUyA9IGdlbi50b3RhbFVuaXRzO1xuICAgICAgICBjb25zdCBjaXR5QXQgPSBuZXcgTWFwKGVuZW15T3JOZXV0cmFsQ2l0aWVzLm1hcChjID0+IFtrZXkoYy54LCBjLnkpLCBjXSkpO1xuICAgICAgICBjb25zdCBhZmZlY3RlZCA9IHRpbGVzLmZpbHRlcih0ID0+IGhleERpc3RhbmNlKHQsIGdlbikgPD0gcmFkaXVzICsgMSk7XG5cbiAgICAgICAgLy8gUG9wdWxhdGlvbi1vZi1mcm9udGllci13ZWlnaHRlZCBjb3ZlcmFnZTogZWFjaCBkb21pbmF0ZWQgdGlsZSBjb250cmlidXRlcyBpdHMgZnJvbnRpZXJcbiAgICAgICAgLy8gZmFjdG9yIGluc3RlYWQgb2YgYSBmbGF0IDEsIHNvIGZvcndhcmQgKGNvbnRlc3RlZCkgdGlsZXMgZG9taW5hdGUgdGhlIHNjb3JlLlxuICAgICAgICBjb25zdCBjb3ZlcmFnZUZvciA9IChjeDogbnVtYmVyLCBjeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgYWZmZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZEN1ciA9IGhleERpc3RhbmNlKHQsIGdlbik7XG4gICAgICAgICAgICAgICAgY29uc3QgZENhbmQgPSBoZXhEaXN0YW5jZSh0LCB7IHg6IGN4LCB5OiBjeSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXIgPSAob3VyQmFzZS5nZXQodGspID8/IDApIC0gaW5mKFMsIGRDdXIpICsgaW5mKFMsIGRDYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAob3VyID4gKHJpdmFsTWF4LmdldCh0aykgPz8gMCkgKiBvd25CaWFzICYmIG91ciA+IDApIHZhbHVlICs9IGZyb250aWVyLmdldCh0aykgPz8gaW50ZXJpb3JWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1bnNhZmUgPSAoY3g6IG51bWJlciwgY3k6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50b3RhbFVuaXRzIDw9IFMgKiB0aHJlYXRNYXJnaW4pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHg6IGN4LCB5OiBjeSB9LCBlKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2NvcmVPZiA9IChjeDogbnVtYmVyLCBjeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgIGxldCBzY29yZSA9IGNvdmVyYWdlRm9yKGN4LCBjeSk7XG4gICAgICAgICAgICBpZiAoIWhhcmRBdm9pZCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh7IHg6IGN4LCB5OiBjeSB9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhY2ggPSBjb21iYXREaXN0KGUudG90YWxVbml0cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkIDw9IHJlYWNoICsgMSkgc2NvcmUgLT0gdGhyZWF0V2VpZ2h0ICogKHJlYWNoICsgMSAtIGQgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjID0gY2l0eUF0LmdldChrZXkoY3gsIGN5KSk7XG4gICAgICAgICAgICBpZiAoYyAmJiBTID4gYy5nYXJyaXNvbikgc2NvcmUgKz0gY2FwdHVyZUJvbnVzO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZWlnaGJvcnNPZihnZW4ueCwgZ2VuLnkpLmZpbHRlcihuID0+ICFoYXJkQXZvaWQgfHwgIXVuc2FmZShuLngsIG4ueSkpO1xuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IHNjb3JlT2YoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmVPZihuLngsIG4ueSk7XG4gICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3QgPSBuOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgZ2V0U3RyYXRlZ3ksIHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBEb21pbmlvbiArIHNlbGVjdGl2ZSBzcGxpdHRpbmcuIE1vdmVtZW50IGlzIGRlbGVnYXRlZCB2ZXJiYXRpbSB0byB0aGUgY2hhbXBpb24gXCJkb21pbmlvblwiIHN0cmF0ZWd5XG4vLyAoc28gdGhpcyBjYW4gb25seSBkaWZmZXIgYnkgYWRkaW5nIHNwbGl0cywgbmV2ZXIgYnkgbW92aW5nIHdvcnNlKS4gT24gdG9wIG9mIHRoYXQsIGFuXG4vLyBPVkVSLUNPTkNFTlRSQVRFRCBnZW5lcmFsIHNwbGl0czogb25lIGhvbGRpbmcgd2VsbCBtb3JlIHRoYW4gYW4gZXZlbiBzaGFyZSBvZiB0aGUgZmFjdGlvbidzIGFybXksXG4vLyB3aG9zZSBoYWx2ZXMgd291bGQgZWFjaCBzdGlsbCBvdXQtc3RhY2sgbmVhcmJ5IGVuZW1pZXMsIGFuZCB3aGljaCBoYXMgdW5jb3ZlcmVkIGV4cGFuc2lvbiB0YXJnZXRzXG4vLyAoZW5lbXkvbmV1dHJhbCBjaXRpZXMpIG5lYXJieS4gRG9taW5pb24ncyB2YWx1ZSByZXdhcmRzIGZhbm5pbmcgb3V0IChvdmVybGFwcGluZyBpbmZsdWVuY2Ugd2lucyBub1xuLy8gZXh0cmEgdGlsZXMpLCBzbyByZWRpc3RyaWJ1dGluZyBhIGJsb2F0ZWQgc3RhY2sgaW50byB0d28gbGV0cyB0aGUgZmFjdGlvbiBkb21pbmF0ZSB0d28gY2x1c3RlcnMuXG4vLyBBZ2dyZXNzaXZlIHNwbGl0dGluZyBmcmFnbWVudHMgaW50byB3ZWFrIHN0YWNrcyB0aGF0IGdldCBwaWNrZWQgb2ZmLCBzbyB0aGUgYmFyIGlzIGRlbGliZXJhdGVseVxuLy8gaGlnaCBhbmQgY2FwcGVkIHBlciB0dXJuLlxuLy9cbi8vIGNvbmZpZyAocGx1cyBldmVyeXRoaW5nIGRvbWluaW9uIHJlYWRzKTogc3BsaXRNaW4sIGNvbmNlbnRyYXRpb24sIHNhZmVNYXJnaW4sIGV4cGFuZFJhbmdlLFxuLy8gbWluVGFyZ2V0cywgbWF4U3BsaXRzUGVyVHVybi5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJkb21pbmlvblNwbGl0XCIsIGFzeW5jIChzbmFwc2hvdCwgY3R4KTogUHJvbWlzZTxBSVdvcmtlck9yZGVyW10+ID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IHNwbGl0TWluID0gbnVtKGNmZy5zcGxpdE1pbiwgNDApOyAgICAgICAgICAgIC8vIGFic29sdXRlIGZsb29yIG9uIHN0YWNrIHNpemUgdG8gc3BsaXRcbiAgICBjb25zdCBjb25jZW50cmF0aW9uID0gbnVtKGNmZy5jb25jZW50cmF0aW9uLCAxLjUpOyAvLyBtdXN0IGhvbGQgPj0gdGhpcyAqIGFuIGV2ZW4gc2hhcmVcbiAgICBjb25zdCBzYWZlTWFyZ2luID0gbnVtKGNmZy5zYWZlTWFyZ2luLCAxLjEpOyAgICAgICAvLyBlYWNoIGhhbGYgbXVzdCBiZWF0IG5lYXJieSBlbmVtaWVzIGJ5IHRoaXNcbiAgICBjb25zdCBleHBhbmRSYW5nZSA9IG51bShjZmcuZXhwYW5kUmFuZ2UsIDgpOyAgICAgICAvLyByYW5nZSB0byBsb29rIGZvciB0YXJnZXRzIC8gdGhyZWF0c1xuICAgIGNvbnN0IG1pblRhcmdldHMgPSBudW0oY2ZnLm1pblRhcmdldHMsIDEpOyAgICAgICAgIC8vIHVuY292ZXJlZCBjaXRpZXMgbmVhcmJ5IG5lZWRlZFxuICAgIGNvbnN0IG1heFNwbGl0c1BlclR1cm4gPSBudW0oY2ZnLm1heFNwbGl0c1BlclR1cm4sIDIpO1xuICAgIC8vIFdoaWNoIG1vdmVtZW50IHN0cmF0ZWd5IHRvIGxheWVyIHNwbGl0dGluZyBvbiB0b3Agb2YuIERlZmF1bHRzIHRvIHRoZSBwbGFpbiBjaGFtcGlvblxuICAgIC8vIFwiZG9taW5pb25cIjsgc2V0IHRvIFwiZG9taW5pb25Gcm9udFwiIHRvIGJpYXMgbW92ZW1lbnQgdG93YXJkIHRoZSBjb250ZXN0ZWQgZnJvbnQgbGluZS5cbiAgICBjb25zdCBtb3ZlU3RyYXRlZ3kgPSB0eXBlb2YgY2ZnLm1vdmVTdHJhdGVneSA9PT0gXCJzdHJpbmdcIiAmJiBjZmcubW92ZVN0cmF0ZWd5IHx8IFwiZG9taW5pb25cIjtcblxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShnZXRTdHJhdGVneShtb3ZlU3RyYXRlZ3kpKHNuYXBzaG90LCBjdHgpKTtcbiAgICBjb25zdCBvcmRlckJ5R2VuZXJhbCA9IG5ldyBNYXAob3JkZXJzLm1hcChvID0+IFtvLmdlbmVyYWxJZCwgb10pKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbWllcyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IHRhcmdldHMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG5cbiAgICBjb25zdCBmYWN0aW9uQXJteSA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy50b3RhbFVuaXRzLCAwKTtcbiAgICBsZXQgZ2VuZXJhbENvdW50ID0gb3Vycy5sZW5ndGg7XG4gICAgbGV0IHNwbGl0c1RoaXNUdXJuID0gMDtcblxuICAgIC8vIFNwbGl0IHRoZSBiaWdnZXN0IHN0YWNrcyBmaXJzdC5cbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBbLi4ub3Vyc10uc29ydCgoYSwgYikgPT4gYi50b3RhbFVuaXRzIC0gYS50b3RhbFVuaXRzKSkge1xuICAgICAgICBpZiAoc3BsaXRzVGhpc1R1cm4gPj0gbWF4U3BsaXRzUGVyVHVybikgYnJlYWs7XG4gICAgICAgIGlmIChnZW4udG90YWxVbml0cyA8IHNwbGl0TWluKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBldmVuU2hhcmUgPSBmYWN0aW9uQXJteSAvIE1hdGgubWF4KDEsIGdlbmVyYWxDb3VudCk7XG4gICAgICAgIGlmIChnZW4udG90YWxVbml0cyA8IGV2ZW5TaGFyZSAqIGNvbmNlbnRyYXRpb24pIGNvbnRpbnVlO1xuXG4gICAgICAgIGxldCBtYXhFbmVteU5lYXIgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbWllcykge1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIGdlbikgPD0gZXhwYW5kUmFuZ2UgJiYgZS50b3RhbFVuaXRzID4gbWF4RW5lbXlOZWFyKSBtYXhFbmVteU5lYXIgPSBlLnRvdGFsVW5pdHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BsaXR0aW5nIGNvc3RzIGhhbGYgdGhlIGFybXksIHNvIGVhY2ggcmVzdWx0aW5nIGdlbmVyYWwga2VlcHMgb25seSB+YSBxdWFydGVyIG9mIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCBzdGFjay4gUmVxdWlyZSB0aGF0IHF1YXJ0ZXIgdG8gc3RpbGwgb3V0LXN0YWNrIG5lYXJieSBlbmVtaWVzLlxuICAgICAgICBpZiAoZ2VuLnRvdGFsVW5pdHMgLyA0IDwgbWF4RW5lbXlOZWFyICogc2FmZU1hcmdpbikgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgbmVhcmJ5VGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKGMgPT4gaGV4RGlzdGFuY2UoYywgZ2VuKSA8PSBleHBhbmRSYW5nZSkubGVuZ3RoO1xuICAgICAgICBpZiAobmVhcmJ5VGFyZ2V0cyA8IG1pblRhcmdldHMpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IG9yZGVyID0gb3JkZXJCeUdlbmVyYWwuZ2V0KGdlbi5pZCk7XG4gICAgICAgIGlmIChvcmRlcikge1xuICAgICAgICAgICAgb3JkZXIuc3BsaXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgc3BsaXQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2VuZXJhbENvdW50Kys7XG4gICAgICAgIHNwbGl0c1RoaXNUdXJuKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVycztcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyBnZXRTdHJhdGVneSwgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIERvbWluaW9uICsgQ0lUWS1BV0FSRSBzcGxpdHRpbmcgKGdlbi1zcGxpdC0yKS4gTW92ZW1lbnQgaXMgZGVsZWdhdGVkIHZlcmJhdGltIHRvIHRoZSBjaGFtcFxuLy8gXCJkb21pbmlvblwiLCBzbyB0aGlzIGNhbiBvbmx5IGRpZmZlciBieSBhZGRpbmcgc3BsaXRzLiBUaGUgcGxhY2VtZW50IHRoYXQgZGVjaWRlcyBnYW1lcyB3ZWlnaHRzXG4vLyBlYWNoIGhlbGQgY2l0eSBhdCB+NTB4IGEgdW5pdCBvZiBhcm15LCBzbyB0aGUgaGlnaGVzdC12YWx1ZSB0aGluZyBhIGZhY3Rpb24gY2FuIGRvIGlzIGNvdmVyIGFuZFxuLy8gY2FwdHVyZSBNT1JFIGNpdGllcy4gQSBzaW5nbGUgc3RhY2sgY2FuIG9ubHkgc2l0IGluIG9uZSBwbGFjZTsgc3BsaXR0aW5nIGxldHMgdGhlIHR3byBoYWx2ZXMgZWFjaFxuLy8gZ28gY2xhaW0gYSBkaWZmZXJlbnQgY2l0eSBjbHVzdGVyLlxuLy9cbi8vIFRoZSBwcmV2aW91cyBoZXVyaXN0aWMgKGRvbWluaW9uU3BsaXQpIHNwbGl0IHdoZW5ldmVyIGFuIG92ZXItY29uY2VudHJhdGVkIHN0YWNrIGhhZCA+PTEgbmVhcmJ5XG4vLyB0YXJnZXQuIFRoYXQgb3Zlci1maXJlcyB3aGVuIHRoZSB0YXJnZXRzIGFyZSBhbGwgb24gb25lIHNpZGUgKG9uZSBzdGFjayBhbHJlYWR5IHJlYWNoZXMgdGhlbSkgYW5kXG4vLyB1bmRlci12YWx1ZXMgdGhlIHJlYWwgd2luOiB0d28gU0VQQVJBVEVEIGNhcHR1cmFibGUgY2l0aWVzIGEgc2luZ2xlIHN0YWNrIGNhbid0IGJvdGggaG9sZC4gU29cbi8vIGhlcmUgYSBnZW5lcmFsIG9ubHkgc3BsaXRzIHdoZW46XG4vLyAgIC0gaXQgaXMgb3Zlci1jb25jZW50cmF0ZWQgKGhvbGRzID4+IGFuIGV2ZW4gc2hhcmUgb2YgdGhlIGZhY3Rpb24gYXJteSksIEFORFxuLy8gICAtIGFmdGVyIHBheWluZyB0aGUgc3BsaXQgY29zdCAoZWFjaCBoYWxmIGtlZXBzIH5hIHF1YXJ0ZXIgb2YgdGhlIG9yaWdpbmFsKSwgZWFjaCBoYWxmIGNhbiBzdGlsbFxuLy8gICAgIHNhZmVseSBvdXQtc3RhY2sgbmVhcmJ5IGVuZW15IHN0YWNrcywgQU5EXG4vLyAgIC0gdGhlcmUgYXJlID49IDIgY2FwdHVyYWJsZSBjaXRpZXMgd2l0aGluIHJhbmdlIHdob3NlIGhhbHZlcyBpdCBvdXQtZ2Fycmlzb25zLCB0aGF0IGFyZSBmYXJcbi8vICAgICBlbm91Z2ggYXBhcnQgKD49IG1pblNlcGFyYXRpb24pIHRoYXQgb25lIHN0YWNrIGNhbm5vdCBjb3ZlciBib3RoIOKAlCBzbyB0aGUgc3BsaXQgZ2VudWluZWx5XG4vLyAgICAgYnV5cyBhIHNlY29uZCBjbHVzdGVyIHJhdGhlciB0aGFuIGZyYWdtZW50aW5nIGZvciBub3RoaW5nLlxuLy9cbi8vIGNvbmZpZyAocGx1cyBldmVyeXRoaW5nIGRvbWluaW9uIHJlYWRzKTogc3BsaXRNaW4sIGNvbmNlbnRyYXRpb24sIHNhZmVNYXJnaW4sIGV4cGFuZFJhbmdlLFxuLy8gbWluU2VwYXJhdGlvbiwgbWF4U3BsaXRzUGVyVHVybi5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJkb21pbmlvblNwbGl0MlwiLCBhc3luYyAoc25hcHNob3QsIGN0eCk6IFByb21pc2U8QUlXb3JrZXJPcmRlcltdPiA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBzcGxpdE1pbiA9IG51bShjZmcuc3BsaXRNaW4sIDQwKTsgICAgICAgICAgICAgLy8gYWJzb2x1dGUgZmxvb3Igb24gc3RhY2sgc2l6ZSB0byBzcGxpdFxuICAgIGNvbnN0IGNvbmNlbnRyYXRpb24gPSBudW0oY2ZnLmNvbmNlbnRyYXRpb24sIDEuNCk7ICAvLyBtdXN0IGhvbGQgPj0gdGhpcyAqIGFuIGV2ZW4gc2hhcmVcbiAgICBjb25zdCBzYWZlTWFyZ2luID0gbnVtKGNmZy5zYWZlTWFyZ2luLCAxLjEpOyAgICAgICAgLy8gZWFjaCBoYWxmIG11c3QgYmVhdCB0aHJlYXRzL2dhcnJpc29ucyBieSB0aGlzXG4gICAgY29uc3QgZXhwYW5kUmFuZ2UgPSBudW0oY2ZnLmV4cGFuZFJhbmdlLCA4KTsgICAgICAgIC8vIHJhbmdlIHRvIGxvb2sgZm9yIHRhcmdldHMgLyB0aHJlYXRzXG4gICAgY29uc3QgbWluU2VwYXJhdGlvbiA9IG51bShjZmcubWluU2VwYXJhdGlvbiwgNSk7ICAgIC8vIHR3byB0YXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgdGhpcyBmYXIgYXBhcnRcbiAgICBjb25zdCBtYXhTcGxpdHNQZXJUdXJuID0gbnVtKGNmZy5tYXhTcGxpdHNQZXJUdXJuLCAyKTtcblxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShnZXRTdHJhdGVneShcImRvbWluaW9uXCIpKHNuYXBzaG90LCBjdHgpKTtcbiAgICBjb25zdCBvcmRlckJ5R2VuZXJhbCA9IG5ldyBNYXAob3JkZXJzLm1hcChvID0+IFtvLmdlbmVyYWxJZCwgb10pKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbWllcyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IHRhcmdldHMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG5cbiAgICBjb25zdCBmYWN0aW9uQXJteSA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy50b3RhbFVuaXRzLCAwKTtcbiAgICBsZXQgZ2VuZXJhbENvdW50ID0gb3Vycy5sZW5ndGg7XG4gICAgbGV0IHNwbGl0c1RoaXNUdXJuID0gMDtcblxuICAgIC8vIEJpZ2dlc3Qgc3RhY2tzIGZpcnN0IOKAlCB0aG9zZSBhcmUgdGhlIG9uZXMgd29ydGggcmVkaXN0cmlidXRpbmcuXG4gICAgZm9yIChjb25zdCBnZW4gb2YgWy4uLm91cnNdLnNvcnQoKGEsIGIpID0+IGIudG90YWxVbml0cyAtIGEudG90YWxVbml0cykpIHtcbiAgICAgICAgaWYgKHNwbGl0c1RoaXNUdXJuID49IG1heFNwbGl0c1BlclR1cm4pIGJyZWFrO1xuICAgICAgICBpZiAoZ2VuLnRvdGFsVW5pdHMgPCBzcGxpdE1pbikgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgZXZlblNoYXJlID0gZmFjdGlvbkFybXkgLyBNYXRoLm1heCgxLCBnZW5lcmFsQ291bnQpO1xuICAgICAgICBpZiAoZ2VuLnRvdGFsVW5pdHMgPCBldmVuU2hhcmUgKiBjb25jZW50cmF0aW9uKSBjb250aW51ZTtcblxuICAgICAgICAvLyBFYWNoIHJlc3VsdGluZyBnZW5lcmFsIGtlZXBzIH5hIHF1YXJ0ZXIgb2YgdGhlIG9yaWdpbmFsIHN0YWNrIChzcGxpdCBjb3N0cyBoYWxmIHRoZSBhcm15KS5cbiAgICAgICAgY29uc3QgaGFsZlN0cmVuZ3RoID0gZ2VuLnRvdGFsVW5pdHMgLyA0O1xuXG4gICAgICAgIGxldCBtYXhFbmVteU5lYXIgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbWllcykge1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIGdlbikgPD0gZXhwYW5kUmFuZ2UgJiYgZS50b3RhbFVuaXRzID4gbWF4RW5lbXlOZWFyKSBtYXhFbmVteU5lYXIgPSBlLnRvdGFsVW5pdHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbGZTdHJlbmd0aCA8IG1heEVuZW15TmVhciAqIHNhZmVNYXJnaW4pIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENpdGllcyBlYWNoIGhhbGYgY291bGQgYWN0dWFsbHkgdGFrZSAob3V0LWdhcnJpc29uIGFmdGVyIHRoZSBzcGxpdCBjb3N0KSwgd2l0aGluIHJhbmdlLlxuICAgICAgICBjb25zdCBjYXB0dXJhYmxlID0gdGFyZ2V0cy5maWx0ZXIoYyA9PlxuICAgICAgICAgICAgaGV4RGlzdGFuY2UoYywgZ2VuKSA8PSBleHBhbmRSYW5nZSAmJiBoYWxmU3RyZW5ndGggPiBjLmdhcnJpc29uICogc2FmZU1hcmdpblxuICAgICAgICApO1xuICAgICAgICBpZiAoY2FwdHVyYWJsZS5sZW5ndGggPCAyKSBjb250aW51ZTtcblxuICAgICAgICAvLyBSZXF1aXJlIHR3byBvZiB0aGVtIHRvIGJlIGZhciBlbm91Z2ggYXBhcnQgdGhhdCBPTkUgc3RhY2sgY2FuJ3QgY292ZXIgYm90aCDigJQgdGhhdCdzIHRoZVxuICAgICAgICAvLyBjYXNlIHdoZXJlIHNwbGl0dGluZyB3aW5zIGEgc2Vjb25kIGNsdXN0ZXIgaW5zdGVhZCBvZiBqdXN0IHRoaW5uaW5nIGEgc3RhY2suXG4gICAgICAgIGxldCBzZXBhcmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXB0dXJhYmxlLmxlbmd0aCAmJiAhc2VwYXJhdGVkOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNhcHR1cmFibGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoY2FwdHVyYWJsZVtpXSwgY2FwdHVyYWJsZVtqXSkgPj0gbWluU2VwYXJhdGlvbikgeyBzZXBhcmF0ZWQgPSB0cnVlOyBicmVhazsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc2VwYXJhdGVkKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBvcmRlciA9IG9yZGVyQnlHZW5lcmFsLmdldChnZW4uaWQpO1xuICAgICAgICBpZiAob3JkZXIpIG9yZGVyLnNwbGl0ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCBzcGxpdDogdHJ1ZSB9KTtcbiAgICAgICAgZ2VuZXJhbENvdW50Kys7XG4gICAgICAgIHNwbGl0c1RoaXNUdXJuKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVycztcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBFdmFsLWZ1bmN0aW9uIGdyZWVkeS4gTGlrZSBkb21pbmlvbiBpdCBzY29yZXMgY2FuZGlkYXRlIHBvc2l0aW9ucyBieSB0aGUgdGlsZXMgb3VyIGZhY3Rpb24gd291bGRcbi8vIERPTUlOQVRFIHVuZGVyIHRoZSBlbmdpbmUncyBpbmZsdWVuY2UgbW9kZWwsIGJ1dCBpdCBvcHRpbWl6ZXMgRUNPTk9NSUMgdmFsdWUgcmF0aGVyIHRoYW4gcmF3IGxhbmQ6XG4vLyBhIGRvbWluYXRlZCB0aWxlIHRoYXQgaG9sZHMgYSBjaXR5IGNvdW50cyBmb3IgaXRzIHBvcHVsYXRpb24gKHRoZSB0aGluZyB0aGF0IGFjdHVhbGx5IGRyaXZlcyBmb29kXG4vLyBhbmQgYXJteSBjYXApLCBhbmQgY2FwdHVyaW5nIGEgY2l0eSBpcyB3b3J0aCBpdHMgcG9wdWxhdGlvbi4gUGx1cyB0aGUgcHJvdmVuIHNhZmV0eSB0cmFpdDogbmV2ZXJcbi8vIHN0ZXAgd2l0aGluIGEgY2xlYXJseS1zdHJvbmdlciBzdGFjaydzIHJlYWNoLiBUaGUgb2JqZWN0aXZlIGlzIFwiZ3JvdyB0aGUgZWNvbm9teSBJIGNvbnRyb2xcIixcbi8vIHdoaWNoIGlzIHdoYXQgYWN0dWFsbHkgd2lucyBnYW1lcyAodGVycml0b3J5IC0+IGZvb2QgLT4gYXJteSAtPiB3aW4pLlxuLy8gY29uZmlnOiBmYWxsb2ZmLCByYWRpdXMsIHRpbGVWYWx1ZSwgY2l0eVBvcFdlaWdodCwgY2FwdHVyZVBvcFdlaWdodCwgdGhyZWF0TWFyZ2luLlxucmVnaXN0ZXJTdHJhdGVneShcImV2YWxHcmVlZHlcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZmFsbG9mZiA9IG51bShjZmcuZmFsbG9mZiwgNik7XG4gICAgY29uc3QgcmFkaXVzID0gbnVtKGNmZy5yYWRpdXMsIDYpO1xuICAgIGNvbnN0IHRpbGVWYWx1ZSA9IG51bShjZmcudGlsZVZhbHVlLCAxKTtcbiAgICBjb25zdCBjaXR5UG9wV2VpZ2h0ID0gbnVtKGNmZy5jaXR5UG9wV2VpZ2h0LCAwLjAyKTtcbiAgICBjb25zdCBjYXB0dXJlUG9wV2VpZ2h0ID0gbnVtKGNmZy5jYXB0dXJlUG9wV2VpZ2h0LCAwLjA1KTtcbiAgICBjb25zdCB0aHJlYXRNYXJnaW4gPSBudW0oY2ZnLnRocmVhdE1hcmdpbiwgMS4zKTtcbiAgICAvLyBKb2ludCBwbGFubmluZzogbnVtYmVyIG9mIGNvb3JkaW5hdGUtZGVzY2VudCBwYXNzZXMuIDEgPSBpbmRlcGVuZGVudCBncmVlZHkgKGVhY2ggZ2VuZXJhbCBvbmx5XG4gICAgLy8gc2VlcyBhbGxpZXMnIENVUlJFTlQgaW5mbHVlbmNlKS4gPj0yID0gcmUtcGxhbiBhZ2FpbnN0IGFsbGllcycgSU5URU5ERUQgbmV4dCBwb3NpdGlvbnMsIHNvXG4gICAgLy8gZ2VuZXJhbHMgZG9uJ3QgcGlsZSBpbnRvIHRoZSBzYW1lIGZyb250aWVyLiBQYXNzIDEgcmVwcm9kdWNlcyB0aGUgb3JpZ2luYWwgYmVoYXZpb3IgZXhhY3RseS5cbiAgICBjb25zdCBqb2ludFBhc3NlcyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQobnVtKGNmZy5qb2ludFBhc3NlcywgMSkpKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHsgY29uc3QgcyA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07IGlmIChzICYmIHMgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTsgfVxuICAgIGNvbnN0IG5laWdoYm9yc09mID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgIGlmIChkeCA9PT0gMCAmJiBkeSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICBpZiAodGlsZVNldC5oYXMoa2V5KG54LCBueSkpICYmIGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIGNvbnN0IGluZiA9IChzdHJlbmd0aDogbnVtYmVyLCBkOiBudW1iZXIpID0+IHN0cmVuZ3RoIC8gTWF0aC5wb3coZCArIDEsIGZhbGxvZmYpO1xuXG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15R2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteU9yTmV1dHJhbENpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICAvLyBDaXR5IHBvcHVsYXRpb24gYnkgdGlsZSAoZm9yIHZhbHVpbmcgZG9taW5hdGVkL2NhcHR1cmVkIGNpdHkgdGlsZXMgZWNvbm9taWNhbGx5KS5cbiAgICBjb25zdCBjaXR5UG9wQXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIGNpdHlQb3BBdC5zZXQoa2V5KGMueCwgYy55KSwgYy5wb3B1bGF0aW9uID8/IDApO1xuICAgIGNvbnN0IGNhcHR1cmVDaXR5QXQgPSBuZXcgTWFwKGVuZW15T3JOZXV0cmFsQ2l0aWVzLm1hcChjID0+IFtrZXkoYy54LCBjLnkpLCBjXSkpO1xuXG4gICAgLy8gRW5lbXkgKHJpdmFsKSBpbmZsdWVuY2UgcGVyIHRpbGUg4oCUIGZpeGVkIGFjcm9zcyBwYXNzZXMuXG4gICAgY29uc3Qgcml2YWxNYXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgIGxldCByaXZhbHMgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHQsIGUpO1xuICAgICAgICAgICAgaWYgKGQgPiByYWRpdXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgdiA9IGluZihlLnRvdGFsVW5pdHMsIGQpO1xuICAgICAgICAgICAgaWYgKHYgPiByaXZhbHMpIHJpdmFscyA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgcml2YWxNYXguc2V0KHRrLCByaXZhbHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFmZmVjdGVkQnlHZW4gPSBuZXcgTWFwPHN0cmluZywgdHlwZW9mIHRpbGVzPigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSBhZmZlY3RlZEJ5R2VuLnNldChnLmlkLCB0aWxlcy5maWx0ZXIodCA9PiBoZXhEaXN0YW5jZSh0LCBnKSA8PSByYWRpdXMgKyAxKSk7XG4gICAgY29uc3QgdW5zYWZlRm9yID0gKFM6IG51bWJlciwgY3g6IG51bWJlciwgY3k6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHg6IGN4LCB5OiBjeSB9LCBlKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIFdoZXJlIGVhY2ggb2Ygb3VyIGdlbmVyYWxzIHBsYW5zIHRvIGJlIG5leHQgdHVybiAoaW5pdCA9IGN1cnJlbnQpLiBSZWZpbmVkIG92ZXIgcGFzc2VzLlxuICAgIGNvbnN0IHBsYW5uZWQgPSBuZXcgTWFwPHN0cmluZywgeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfT4oKTtcbiAgICBmb3IgKGNvbnN0IGcgb2Ygb3VycykgcGxhbm5lZC5zZXQoZy5pZCwgeyB4OiBnLngsIHk6IGcueSB9KTtcblxuICAgIGZvciAobGV0IHBhc3MgPSAwOyBwYXNzIDwgam9pbnRQYXNzZXM7IHBhc3MrKykge1xuICAgICAgICAvLyBPdXIgdG90YWwgaW5mbHVlbmNlIHBlciB0aWxlIGZyb20gZXZlcnlvbmUncyBQTEFOTkVEIHBvc2l0aW9ucyAocGFzcyAwID0gY3VycmVudCBwb3NpdGlvbnMpLlxuICAgICAgICBjb25zdCBvdXJUb3RhbCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGcgb2Ygb3Vycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwbGFubmVkLmdldChnLmlkKSA/PyB7IHg6IGcueCwgeTogZy55IH07XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHQsIHApO1xuICAgICAgICAgICAgICAgIGlmIChkID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gaW5mKGcudG90YWxVbml0cywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXJUb3RhbC5zZXQodGssIHN1bSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICAgICAgY29uc3QgUyA9IGdlbi50b3RhbFVuaXRzO1xuICAgICAgICAgICAgY29uc3QgcFBsYW5uZWQgPSBwbGFubmVkLmdldChnZW4uaWQpID8/IHsgeDogZ2VuLngsIHk6IGdlbi55IH07XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZCA9IGFmZmVjdGVkQnlHZW4uZ2V0KGdlbi5pZCkgPz8gW107XG4gICAgICAgICAgICBjb25zdCBlY29uVmFsdWVBdCA9IChjeDogbnVtYmVyLCBjeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBhZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbGllcycgaW5mbHVlbmNlIGhlcmUsIGV4Y2x1ZGluZyB0aGlzIGdlbmVyYWwncyBvd24gcGxhbm5lZCBjb250cmlidXRpb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZUV4Y2wgPSAob3VyVG90YWwuZ2V0KHRrKSA/PyAwKSAtIGluZihTLCBoZXhEaXN0YW5jZSh0LCBwUGxhbm5lZCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXIgPSBiYXNlRXhjbCArIGluZihTLCBoZXhEaXN0YW5jZSh0LCB7IHg6IGN4LCB5OiBjeSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXIgPiAocml2YWxNYXguZ2V0KHRrKSA/PyAwKSAmJiBvdXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aWxlVmFsdWUgKyBjaXR5UG9wV2VpZ2h0ICogKGNpdHlQb3BBdC5nZXQodGspID8/IDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBjYXB0dXJlQ2l0eUF0LmdldChrZXkoY3gsIGN5KSk7XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgUyA+IGMuZ2Fycmlzb24pIHZhbHVlICs9IGNhcHR1cmVQb3BXZWlnaHQgKiAoYy5wb3B1bGF0aW9uID8/IDApO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gbmVpZ2hib3JzT2YoZ2VuLngsIGdlbi55KS5maWx0ZXIobiA9PiAhdW5zYWZlRm9yKFMsIG4ueCwgbi55KSk7XG4gICAgICAgICAgICBsZXQgYmVzdCA9IHsgeDogZ2VuLngsIHk6IGdlbi55IH07XG4gICAgICAgICAgICBsZXQgYmVzdFNjb3JlID0gZWNvblZhbHVlQXQoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2MgPSBlY29uVmFsdWVBdChuLngsIG4ueSk7XG4gICAgICAgICAgICAgICAgaWYgKHNjID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjOyBiZXN0ID0gbjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxhbm5lZC5zZXQoZ2VuLmlkLCBiZXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBwID0gcGxhbm5lZC5nZXQoZ2VuLmlkKSA/PyB7IHg6IGdlbi54LCB5OiBnZW4ueSB9O1xuICAgICAgICBpZiAocC54ICE9PSBnZW4ueCB8fCBwLnkgIT09IGdlbi55KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogcCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIFJvbGxvdXQgc2VhcmNoICh0aGUgXCJNQ1RTLWlzaFwiIG1lbnUgaXRlbSkuIEZvciBlYWNoIG9mIG91ciBnZW5lcmFscywgaXQgZXZhbHVhdGVzIGVhY2ggY2FuZGlkYXRlXG4vLyBmaXJzdCBtb3ZlIGJ5IFNJTVVMQVRJTkcgYSBmZXcgdHVybnMgYWhlYWQgYW5kIHNjb3JpbmcgdGhlIHByb2plY3RlZCBwb3B1bGF0aW9uLXdlaWdodGVkIHRlcnJpdG9yeVxuLy8gb3VyIGZhY3Rpb24gd291bGQgZG9taW5hdGUg4oCUIGluc3RlYWQgb2Ygb25seSB0aGUgaW1tZWRpYXRlIDEtc3RlcCBjb3ZlcmFnZSB0aGF0IGRvbWluaW9uL2V2YWxHcmVlZHlcbi8vIHVzZS4gRm9yd2FyZCBtb2RlbCAoa2VwdCBjaGVhcCArIHdvcmtlci1zYWZlKTpcbi8vICAgLSBvdXIgZ2VuZXJhbHMgZm9sbG93IGEgZ3JlZWR5IGNvdmVyYWdlLW1heGltaXppbmcgcG9saWN5IGVhY2ggc2ltdWxhdGVkIHR1cm4sXG4vLyAgIC0gYXJtaWVzIGdyb3cgfjEwJS90dXJuIChtYXRjaGVzIHRoZSBncm93dGggbWVjaGFuaWMpLFxuLy8gICAtIGVuZW1pZXMgYXJlIHRyZWF0ZWQgYXMgYSBTVEFUSUMgaW5mbHVlbmNlIGZpZWxkICh0aGV5IG1vdmUgbGl0dGxlIG92ZXIgYSBzaG9ydCBob3Jpem9uKSxcbi8vICAgLSBoYXJkIHRocmVhdC1hdm9pZGFuY2U6IG5ldmVyIHN0ZXAgd2l0aGluIGEgY2xlYXJseS1zdHJvbmdlciBzdGFjaydzIHJlYWNoLlxuLy8gVGhlIHBvaW50IGlzIHRvIHRlc3Qgd2hldGhlciBtdWx0aS10dXJuIGZvcmVzaWdodCBiZWF0cyBncmVlZHkgMS1zdGVwLiBjb25maWc6IGZhbGxvZmYsIHJhZGl1cyxcbi8vIGRlcHRoLCBncm93dGgsIHRocmVhdE1hcmdpbiwgY2l0eVBvcFdlaWdodCwgY2FwdHVyZVBvcFdlaWdodC5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJyb2xsb3V0XCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGZhbGxvZmYgPSBudW0oY2ZnLmZhbGxvZmYsIDYpO1xuICAgIGNvbnN0IHJhZGl1cyA9IG51bShjZmcucmFkaXVzLCA1KTtcbiAgICBjb25zdCBkZXB0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQobnVtKGNmZy5kZXB0aCwgMykpKTtcbiAgICBjb25zdCBncm93dGggPSBudW0oY2ZnLmdyb3d0aCwgMS4xKTtcbiAgICBjb25zdCB0aHJlYXRNYXJnaW4gPSBudW0oY2ZnLnRocmVhdE1hcmdpbiwgMS4zKTtcbiAgICBjb25zdCBjaXR5UG9wV2VpZ2h0ID0gbnVtKGNmZy5jaXR5UG9wV2VpZ2h0LCAwLjAyKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHsgY29uc3QgcyA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07IGlmIChzICYmIHMgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTsgfVxuICAgIGNvbnN0IG5laWdoYm9yc09mID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgIGlmIChkeCA9PT0gMCAmJiBkeSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICBpZiAodGlsZVNldC5oYXMoa2V5KG54LCBueSkpICYmIGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIGNvbnN0IGluZiA9IChzdHJlbmd0aDogbnVtYmVyLCBkOiBudW1iZXIpID0+IHN0cmVuZ3RoIC8gTWF0aC5wb3coZCArIDEsIGZhbGxvZmYpO1xuXG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15R2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBjaXR5UG9wQXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIGNpdHlQb3BBdC5zZXQoa2V5KGMueCwgYy55KSwgYy5wb3B1bGF0aW9uID8/IDApO1xuXG4gICAgLy8gU3RhdGljIHJpdmFsIGluZmx1ZW5jZSBmaWVsZCAoZnJvbSBjdXJyZW50IGVuZW15IHBvc2l0aW9ucykuXG4gICAgY29uc3Qgcml2YWxGaWVsZCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7XG4gICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgbGV0IHIgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykgeyBjb25zdCBkID0gaGV4RGlzdGFuY2UodCwgZSk7IGlmIChkIDw9IHJhZGl1cykgciA9IE1hdGgubWF4KHIsIGluZihlLnRvdGFsVW5pdHMsIGQpKTsgfVxuICAgICAgICByaXZhbEZpZWxkLnNldCh0aywgcik7XG4gICAgfVxuICAgIGNvbnN0IHVuc2FmZUZvciA9IChTOiBudW1iZXIsIGN4OiBudW1iZXIsIGN5OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoeyB4OiBjeCwgeTogY3kgfSwgZSkgPD0gY29tYmF0RGlzdChlLnRvdGFsVW5pdHMpICsgMSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB0eXBlIFVuaXQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzOiBudW1iZXI7IH07XG4gICAgLy8gTG9jYWwgY292ZXJhZ2UgZ2FpbiBmb3IgcGxhY2luZyBhIHVuaXQgb2Ygc3RyZW5ndGggcyBhdCAoY3gsY3kpLCBnaXZlbiB0aGUgcmVzdCBvZiBvdXIgZmllbGQuXG4gICAgY29uc3QgdGlsZXNOZWFyID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB0aWxlcy5maWx0ZXIodCA9PiBoZXhEaXN0YW5jZSh0LCB7IHgsIHkgfSkgPD0gcmFkaXVzKTtcbiAgICBjb25zdCBjb3ZlcmFnZUdhaW5BdCA9ICh1bml0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzOiBudW1iZXI7IH0sIGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHJlc3RGaWVsZDogTWFwPHN0cmluZywgbnVtYmVyPik6IG51bWJlciA9PiB7XG4gICAgICAgIGxldCB2ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHRpbGVzTmVhcihjeCwgY3kpKSB7XG4gICAgICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgICAgICBjb25zdCBvdXIgPSAocmVzdEZpZWxkLmdldCh0aykgPz8gMCkgKyBpbmYodW5pdC5zLCBoZXhEaXN0YW5jZSh0LCB7IHg6IGN4LCB5OiBjeSB9KSk7XG4gICAgICAgICAgICBpZiAob3VyID4gKHJpdmFsRmllbGQuZ2V0KHRrKSA/PyAwKSAmJiBvdXIgPiAwKSB2ICs9IDEgKyBjaXR5UG9wV2VpZ2h0ICogKGNpdHlQb3BBdC5nZXQodGspID8/IDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG4gICAgY29uc3QgZmllbGRFeGNsdWRpbmcgPSAodW5pdHM6IFVuaXRbXSwgc2tpcDogbnVtYmVyKTogTWFwPHN0cmluZywgbnVtYmVyPiA9PiB7XG4gICAgICAgIGNvbnN0IGYgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgICAgICB1bml0cy5mb3JFYWNoKCh1LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2tpcCkgcmV0dXJuO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHRpbGVzTmVhcih1LngsIHUueSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgICAgICAgICAgZi5zZXQodGssIChmLmdldCh0aykgPz8gMCkgKyBpbmYodS5zLCBoZXhEaXN0YW5jZSh0LCB1KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcbiAgICBjb25zdCBncmVlZHlTdGVwID0gKHVuaXRzOiBVbml0W10sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB1ID0gdW5pdHNbaV07XG4gICAgICAgIGNvbnN0IHJlc3QgPSBmaWVsZEV4Y2x1ZGluZyh1bml0cywgaSk7XG4gICAgICAgIGxldCBiZXN0ID0geyB4OiB1LngsIHk6IHUueSB9O1xuICAgICAgICBsZXQgYmVzdFYgPSBjb3ZlcmFnZUdhaW5BdCh1LCB1LngsIHUueSwgcmVzdCk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZih1LngsIHUueSkpIHtcbiAgICAgICAgICAgIGlmICh1bnNhZmVGb3IodS5zLCBuLngsIG4ueSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgdiA9IGNvdmVyYWdlR2FpbkF0KHUsIG4ueCwgbi55LCByZXN0KTtcbiAgICAgICAgICAgIGlmICh2ID4gYmVzdFYpIHsgYmVzdFYgPSB2OyBiZXN0ID0gbjsgfVxuICAgICAgICB9XG4gICAgICAgIHUueCA9IGJlc3QueDsgdS55ID0gYmVzdC55O1xuICAgIH07XG4gICAgY29uc3QgdG90YWxDb3ZlcmFnZSA9ICh1bml0czogVW5pdFtdKTogbnVtYmVyID0+IHtcbiAgICAgICAgY29uc3QgZiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykgZm9yIChjb25zdCB0IG9mIHRpbGVzTmVhcih1LngsIHUueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgICAgIGYuc2V0KHRrLCAoZi5nZXQodGspID8/IDApICsgaW5mKHUucywgaGV4RGlzdGFuY2UodCwgdSkpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdiA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW3RrLCBvdXJdIG9mIGYpIGlmIChvdXIgPiAocml2YWxGaWVsZC5nZXQodGspID8/IDApICYmIG91ciA+IDApIHYgKz0gMSArIGNpdHlQb3BXZWlnaHQgKiAoY2l0eVBvcEF0LmdldCh0aykgPz8gMCk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGdpID0gMDsgZ2kgPCBvdXJzLmxlbmd0aDsgZ2krKykge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSA+IGN0eC5kZWFkbGluZU1zIC0gNTAwKSBicmVhazsgLy8gc2FmZXR5OiBiYWlsIGJlZm9yZSB0aGUgaGFyZCBraWxsXG4gICAgICAgIGNvbnN0IGdlbiA9IG91cnNbZ2ldO1xuICAgICAgICAvLyBFdmFsdWF0ZSBlYWNoIHNhZmUgZmlyc3QgbW92ZSBieSByb2xsaW5nIG91dCBgZGVwdGhgIHR1cm5zIHdpdGggdGhlIGdyZWVkeSBwb2xpY3kuXG4gICAgICAgIGNvbnN0IGV2YWxGaXJzdE1vdmUgPSAoZng6IG51bWJlciwgZnk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bml0czogVW5pdFtdID0gb3Vycy5tYXAoKGcsIGkpID0+ICh7IHg6IGkgPT09IGdpID8gZnggOiBnLngsIHk6IGkgPT09IGdpID8gZnkgOiBnLnksIHM6IGcudG90YWxVbml0cyB9KSk7XG4gICAgICAgICAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8IGRlcHRoOyBzdGVwKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXRzLmxlbmd0aDsgaSsrKSBncmVlZHlTdGVwKHVuaXRzLCBpKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHUucyAqPSBncm93dGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG90YWxDb3ZlcmFnZSh1bml0cyk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gZXZhbEZpcnN0TW92ZShnZW4ueCwgZ2VuLnkpO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgbmVpZ2hib3JzT2YoZ2VuLngsIGdlbi55KSkge1xuICAgICAgICAgICAgaWYgKHVuc2FmZUZvcihnZW4udG90YWxVbml0cywgbi54LCBuLnkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gZXZhbEZpcnN0TW92ZShuLngsIG4ueSk7XG4gICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3QgPSBuOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgY29tcHV0ZUJvYXJkRmVhdHVyZXMsIHNjb3JlRmVhdHVyZXMsIEZlYXRDaXR5IH0gZnJvbSBcIi4uL2JvYXJkRmVhdHVyZXNcIjtcbmltcG9ydCBldmFsV2VpZ2h0cyBmcm9tIFwiLi4vZXZhbFdlaWdodHMuanNvblwiO1xuXG5mdW5jdGlvbiBjb21iYXREaXN0KGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2cxMChjb3VudCArIDEpKSArIDAuNTtcbn1cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuXG4vLyBldmFsQ29hcnNlIOKAlCBldmFsdWF0aW9uLWJhc2VkIGxvb2thaGVhZCB3aXRoIENPQVJTRSBzaW11bGF0aW9uLlxuLy9cbi8vIElkZWEgKHBlciB0aGUgZGVzaWduIGJyaWVmKTogaW5zdGVhZCBvZiBncmVlZHkgMS1zdGVwIGNvdmVyYWdlLCBwaWNrIGVhY2ggZ2VuZXJhbCdzIHRhcmdldCBieVxuLy8gcHJvamVjdGluZyB0aGUgd2hvbGUgYm9hcmQgYSBmZXcgc3RlcHMgZm9yd2FyZCBhdCBISUdIIG1vdmVtZW50IHNwZWVkIOKAlCBzbyBhIGhhbmRmdWwgb2Ygc3RlcHNcbi8vIGFwcHJveGltYXRlcyBtYW55IHR1cm5zIG9mIG1hcmNoaW5nIOKAlCBhbmQgc2NvcmluZyB0aGUgcmVzdWx0aW5nIHBvc2l0aW9uIHdpdGggYSBib2FyZC1ldmFsdWF0aW9uXG4vLyBmdW5jdGlvbiB0aGF0IHJld2FyZHMgaG9sZGluZyBvdXIgb3duIHRlcnJpdG9yeSBBTkQgZGVueWluZy9jb250YWluaW5nIHRoZSBlbmVteSdzIChuZXQgZG9taW5hdGVkXG4vLyBsYW5kLCBwb3B1bGF0aW9uLXdlaWdodGVkKSwgcGx1cyBjYXB0dXJhYmxlIGNpdGllcy4gVGhlIGZvcndhcmQgcG9saWN5OiBldmVyeSBnZW5lcmFsIGhlYWRzIHRvIGFcbi8vIGNoZWFwIHN0cmF0ZWdpYyB0YXJnZXQgKG5lYXJlc3QgdGFrZWFibGUgZW5lbXkvbmV1dHJhbCBjaXR5LCBlbHNlIHRoZSBuZWFyZXN0IGVuZW15IHN0YWNrIHRvXG4vLyBlbmdhZ2UvY29udGFpbik7IHRoZSBnZW5lcmFsIHVuZGVyIGV2YWx1YXRpb24gaXMgZm9yY2VkIHRvIHRoZSBjYW5kaWRhdGUgdGFyZ2V0LiBEZXRlcm1pbmlzdGljIGZvclxuLy8gbm93OyB3ZWlnaHRzIGFyZSBjb25maWcga25vYnMgc28gdGhleSBjYW4gbGF0ZXIgYmUgZml0IHRvIHdpbiBvdXRjb21lcy5cbi8vXG4vLyBjb25maWc6IGZhbGxvZmYsIHJhZGl1cywgY29hcnNlU3BlZWQsIHN0ZXBzLCBncm93dGgsIGNvbnRhaW5XZWlnaHQsIGNpdHlXZWlnaHQsIGNpdHlQb3BXZWlnaHQsXG4vLyBsb29rUmFuZ2UsIHRocmVhdE1hcmdpbiwgaGFyZEF2b2lkLlxucmVnaXN0ZXJTdHJhdGVneShcImV2YWxDb2Fyc2VcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZmFsbG9mZiA9IG51bShjZmcuZmFsbG9mZiwgNik7XG4gICAgY29uc3QgcmFkaXVzID0gbnVtKGNmZy5yYWRpdXMsIDYpO1xuICAgIGNvbnN0IGNvYXJzZVNwZWVkID0gTWF0aC5tYXgoMSwgbnVtKGNmZy5jb2Fyc2VTcGVlZCwgNCkpO1xuICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChudW0oY2ZnLnN0ZXBzLCAzKSkpO1xuICAgIGNvbnN0IGdyb3d0aCA9IG51bShjZmcuZ3Jvd3RoLCAxLjEpO1xuICAgIGNvbnN0IGNvbnRhaW5XZWlnaHQgPSBudW0oY2ZnLmNvbnRhaW5XZWlnaHQsIDEuMCk7XG4gICAgY29uc3QgY2l0eVdlaWdodCA9IG51bShjZmcuY2l0eVdlaWdodCwgMTApO1xuICAgIGNvbnN0IGNpdHlQb3BXZWlnaHQgPSBudW0oY2ZnLmNpdHlQb3BXZWlnaHQsIDAuMDIpO1xuICAgIGNvbnN0IGxvb2tSYW5nZSA9IG51bShjZmcubG9va1JhbmdlLCA2KTtcbiAgICBjb25zdCB0aHJlYXRNYXJnaW4gPSBudW0oY2ZnLnRocmVhdE1hcmdpbiwgMS4zKTtcbiAgICBjb25zdCBoYXJkQXZvaWQgPSBjZmcuaGFyZEF2b2lkICE9PSBmYWxzZTtcbiAgICBjb25zdCBsZWFybmVkID0gY2ZnLmxlYXJuZWQgPT09IHRydWU7IC8vIHVzZSB0aGUgZml0dGVkIHZhbHVlIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGhhbmQgZXZhbFxuICAgIC8vIENvYXJzZSBjb21iYXQgaW4gdGhlIHByb2plY3Rpb24gKHNvIGFybXkgc2hhcmUg4oCUIHRoZSB0b3Agd2luIHByZWRpY3RvciDigJQgYWN0dWFsbHkgcmVzcG9uZHMgdG9cbiAgICAvLyBtb3Zlcyk6IGEgc3RhY2sgd2l0aGluIGNvbWJhdCByYW5nZSBvZiBhIFNUUk9OR0VSIGVuZW15IGJsZWVkcyBgY29tYmF0TG9zc2A7IHRoZSBzdHJvbmdlciBzaWRlXG4gICAgLy8gcGF5cyBhIHNtYWxsIGB3aW5uZXJDb3N0YC4gV2VhayBzdGFja3MgbWVsdCBuZWFyIHN0cm9uZyBlbmVtaWVzID0gcG9zaXRpb25pbmcvY29udGFpbm1lbnQgc2hvd3NcbiAgICAvLyB1cCBpbiB0aGUgZXZhbC5cbiAgICBjb25zdCBjb21iYXRMb3NzID0gbnVtKGNmZy5jb21iYXRMb3NzLCAwLjMpO1xuICAgIGNvbnN0IHdpbm5lckNvc3QgPSBudW0oY2ZnLndpbm5lckNvc3QsIDAuMDUpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuXG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykgeyBjb25zdCBzID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTsgaWYgKHMgJiYgcyA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpOyB9XG4gICAgY29uc3QgcGFzc2FibGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHRpbGVTZXQuaGFzKGtleSh4LCB5KSk7XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgIGlmIChwYXNzYWJsZShueCwgbnkpICYmIGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIGNvbnN0IGluZiA9IChzOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gcyAvIE1hdGgucG93KGQgKyAxLCBmYWxsb2ZmKTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIFtdKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG5cbiAgICBjb25zdCBjaXR5UG9wQXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIGNpdHlQb3BBdC5zZXQoa2V5KGMueCwgYy55KSwgYy5wb3B1bGF0aW9uID8/IDApO1xuICAgIGNvbnN0IG90aGVyQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuXG4gICAgLy8gVGlsZXMgd2UgYm90aGVyIHNjb3Jpbmc6IHRob3NlIHdpdGhpbiBgcmFkaXVzYCBvZiBhbnkgZ2VuZXJhbCAoZXZlcnl0aGluZyBlbHNlIGlzIGVtcHR5L25ldXRyYWxcbiAgICAvLyBhbmQgY29udHJpYnV0ZXMgbm90aGluZyB0byBlaXRoZXIgc2lkZSkuIEZpeGVkIHVwLWZyb250IHRvIGJvdW5kIGNvc3QuXG4gICAgY29uc3QgcmVsZXZhbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgfVtdID0gW107XG4gICAge1xuICAgICAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHQsIGcpID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHRrKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgc2Vlbi5hZGQodGspO1xuICAgICAgICAgICAgICAgIHJlbGV2YW50LnB1c2goeyB4OiB0LngsIHk6IHQueSwgdzogMSArIGNpdHlQb3BXZWlnaHQgKiAoY2l0eVBvcEF0LmdldCh0aykgPz8gMCkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0eXBlIFVuaXQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzOiBudW1iZXI7IGZhY3Rpb246IHN0cmluZzsgaWQ6IHN0cmluZzsgfTtcbiAgICBjb25zdCBiYXNlVW5pdHM6IFVuaXRbXSA9IGdlbmVyYWxzLm1hcChnID0+ICh7IHg6IGcueCwgeTogZy55LCBzOiBnLnRvdGFsVW5pdHMsIGZhY3Rpb246IGcuZmFjdGlvbklkLCBpZDogZy5pZCB9KSk7XG5cbiAgICAvLyBDaGVhcCBzdHJhdGVnaWMgdGFyZ2V0IGZvciBhIHVuaXQ6IG5lYXJlc3QgZW5lbXkvbmV1dHJhbCBjaXR5IGl0IGN1cnJlbnRseSBvdXQtZ2Fycmlzb25zLCBlbHNlXG4gICAgLy8gdGhlIG5lYXJlc3QgZW5lbXkgc3RhY2sgKHRvIGVuZ2FnZSAvIGNvbnRhaW4gaXQpLCBlbHNlIGhvbGQuXG4gICAgY29uc3QgZGVmYXVsdFRhcmdldCA9ICh1OiBVbml0LCB1bml0czogVW5pdFtdKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSA9PiB7XG4gICAgICAgIGxldCBiZXN0Q2l0eTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDsgbGV0IGJlc3RDaXR5RCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY2l0aWVzKSB7XG4gICAgICAgICAgICBpZiAoYy5mYWN0aW9uSWQgPT09IHUuZmFjdGlvbikgY29udGludWU7XG4gICAgICAgICAgICBpZiAodS5zIDw9IGMuZ2Fycmlzb24pIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHUsIGMpO1xuICAgICAgICAgICAgaWYgKGQgPCBiZXN0Q2l0eUQpIHsgYmVzdENpdHlEID0gZDsgYmVzdENpdHkgPSBjOyB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJlc3RFbmVteTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDsgbGV0IGJlc3RFbmVteUQgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCB2IG9mIHVuaXRzKSB7XG4gICAgICAgICAgICBpZiAodi5mYWN0aW9uID09PSB1LmZhY3Rpb24pIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHUsIHYpO1xuICAgICAgICAgICAgaWYgKGQgPCBiZXN0RW5lbXlEKSB7IGJlc3RFbmVteUQgPSBkOyBiZXN0RW5lbXkgPSB2OyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3RDaXR5ICYmICghYmVzdEVuZW15IHx8IGJlc3RDaXR5RCA8PSBiZXN0RW5lbXlEICsgMykpIHJldHVybiBiZXN0Q2l0eTtcbiAgICAgICAgaWYgKGJlc3RFbmVteSkgcmV0dXJuIGJlc3RFbmVteTtcbiAgICAgICAgcmV0dXJuIHsgeDogdS54LCB5OiB1LnkgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RlcFRvd2FyZCA9ICh1OiBVbml0LCB0Z3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0sIHNwZWVkOiBudW1iZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGVlZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodS54ID09PSB0Z3QueCAmJiB1LnkgPT09IHRndC55KSByZXR1cm47XG4gICAgICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDsgbGV0IGJlc3REID0gaGV4RGlzdGFuY2UodSwgdGd0KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZih1LngsIHUueSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UobiwgdGd0KTtcbiAgICAgICAgICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IG47IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmVzdCkgcmV0dXJuO1xuICAgICAgICAgICAgdS54ID0gYmVzdC54OyB1LnkgPSBiZXN0Lnk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXBwbHlDb21iYXQgPSAodW5pdHM6IFVuaXRbXSkgPT4ge1xuICAgICAgICBjb25zdCBzQmVmb3JlID0gdW5pdHMubWFwKHUgPT4gdS5zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bml0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG1heEVuZW15ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdW5pdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodW5pdHNbal0uZmFjdGlvbiA9PT0gdW5pdHNbaV0uZmFjdGlvbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBNYXRoLm1heChjb21iYXREaXN0KHNCZWZvcmVbaV0pLCBjb21iYXREaXN0KHNCZWZvcmVbal0pKTtcbiAgICAgICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UodW5pdHNbaV0sIHVuaXRzW2pdKSA8PSByYW5nZSAmJiBzQmVmb3JlW2pdID4gbWF4RW5lbXkpIG1heEVuZW15ID0gc0JlZm9yZVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXhFbmVteSA8PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIHVuaXRzW2ldLnMgKj0gbWF4RW5lbXkgPiBzQmVmb3JlW2ldID8gKDEgLSBjb21iYXRMb3NzKSA6ICgxIC0gd2lubmVyQ29zdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdCA9IChvdmVycmlkZUlkOiBzdHJpbmcsIG92ZXJyaWRlVGFyZ2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KTogVW5pdFtdID0+IHtcbiAgICAgICAgY29uc3QgdW5pdHMgPSBiYXNlVW5pdHMubWFwKHUgPT4gKHsgLi4udSB9KSk7XG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc3RlcHM7IHMrKykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGd0ID0gdS5pZCA9PT0gb3ZlcnJpZGVJZCA/IG92ZXJyaWRlVGFyZ2V0IDogZGVmYXVsdFRhcmdldCh1LCB1bml0cyk7XG4gICAgICAgICAgICAgICAgc3RlcFRvd2FyZCh1LCB0Z3QsIGNvYXJzZVNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGx5Q29tYmF0KHVuaXRzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykgdS5zICo9IGdyb3d0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5pdHM7XG4gICAgfTtcblxuICAgIC8vIE5ldCBwb3B1bGF0aW9uLXdlaWdodGVkIHRlcnJpdG9yeSB3ZSdkIGRvbWluYXRlIG1pbnVzIHdoYXQgdGhlIGVuZW15IGRvbWluYXRlcyAoY29udGFpbm1lbnQpLlxuICAgIGNvbnN0IGV2YWxCb2FyZCA9ICh1bml0czogVW5pdFtdKTogbnVtYmVyID0+IHtcbiAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHJlbGV2YW50KSB7XG4gICAgICAgICAgICBsZXQgb3VyID0gMCwgcml2YWwgPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHQsIHUpO1xuICAgICAgICAgICAgICAgIGlmIChkID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gaW5mKHUucywgZCk7XG4gICAgICAgICAgICAgICAgaWYgKHUuZmFjdGlvbiA9PT0gZmFjdGlvbklkKSBvdXIgKz0gdjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gcml2YWwpIHJpdmFsID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdXIgPiByaXZhbCAmJiBvdXIgPiAwKSBzY29yZSArPSB0Lnc7XG4gICAgICAgICAgICBlbHNlIGlmIChyaXZhbCA+IG91ciAmJiByaXZhbCA+IDApIHNjb3JlIC09IGNvbnRhaW5XZWlnaHQgKiB0Lnc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV3YXJkIGNhcHR1cmFibGUgZW5lbXkvbmV1dHJhbCBjaXRpZXMgb3VyIG5lYXJlc3Qgc3RhY2sgY2FuIHRha2UuXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBvdGhlckNpdGllcykge1xuICAgICAgICAgICAgbGV0IGNhblRha2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykgeyBpZiAodS5mYWN0aW9uID09PSBmYWN0aW9uSWQgJiYgaGV4RGlzdGFuY2UodSwgYykgPD0gMSAmJiB1LnMgPiBjLmdhcnJpc29uKSB7IGNhblRha2UgPSB0cnVlOyBicmVhazsgfSB9XG4gICAgICAgICAgICBpZiAoY2FuVGFrZSkgc2NvcmUgKz0gY2l0eVdlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgfTtcblxuICAgIC8vIExlYXJuZWQgdmFsdWUgZnVuY3Rpb246IHNjb3JlIHRoZSBwcm9qZWN0ZWQgYm9hcmQgdmlhIHRoZSBmaXR0ZWQgZmVhdHVyZSB3ZWlnaHRzLiBDaXRpZXMgZ2V0IGFcbiAgICAvLyBjb2Fyc2UgY2FwdHVyZSAoYSBzdHJvbmdlciBhZGphY2VudCB1bml0IHRha2VzIHRoZW0pIHNvIHRoZSBjaXR5LXNoYXJlIGZlYXR1cmUgcmVzcG9uZHMgdG8gbW92ZXMuXG4gICAgY29uc3QgcHJvamVjdGVkQ2l0aWVzID0gKHVuaXRzOiBVbml0W10pOiBGZWF0Q2l0eVtdID0+IG90aGVyQ2l0aWVzLmNvbmNhdChjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkpLm1hcChjID0+IHtcbiAgICAgICAgbGV0IG93bmVyID0gYy5mYWN0aW9uSWQ7IGxldCBiZXN0UyA9IGMuZ2Fycmlzb247XG4gICAgICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykgeyBpZiAoaGV4RGlzdGFuY2UodSwgYykgPD0gMSAmJiB1LnMgPiBiZXN0UykgeyBiZXN0UyA9IHUuczsgb3duZXIgPSB1LmZhY3Rpb247IH0gfVxuICAgICAgICByZXR1cm4geyB4OiBjLngsIHk6IGMueSwgZmFjdGlvbjogb3duZXIgfTtcbiAgICB9KTtcbiAgICBjb25zdCBmZWF0VGlsZXMgPSByZWxldmFudC5tYXAodCA9PiAoeyB4OiB0LngsIHk6IHQueSwgdzogdC53IH0pKTtcbiAgICBjb25zdCBldmFsQm9hcmRMZWFybmVkID0gKHVuaXRzOiBVbml0W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGNvbXB1dGVCb2FyZEZlYXR1cmVzKHtcbiAgICAgICAgICAgIHVuaXRzOiB1bml0cy5tYXAodSA9PiAoeyB4OiB1LngsIHk6IHUueSwgczogdS5zLCBmYWN0aW9uOiB1LmZhY3Rpb24gfSkpLFxuICAgICAgICAgICAgY2l0aWVzOiBwcm9qZWN0ZWRDaXRpZXModW5pdHMpLFxuICAgICAgICAgICAgdGlsZXM6IGZlYXRUaWxlcyxcbiAgICAgICAgICAgIGZhbGxvZmYsXG4gICAgICAgICAgICByYWRpdXMsXG4gICAgICAgIH0sIGZhY3Rpb25JZCk7XG4gICAgICAgIHJldHVybiBzY29yZUZlYXR1cmVzKGZlYXR1cmVzLCBldmFsV2VpZ2h0cy53ZWlnaHRzKTtcbiAgICB9O1xuICAgIGNvbnN0IHNjb3JlQm9hcmQgPSBsZWFybmVkID8gZXZhbEJvYXJkTGVhcm5lZCA6IGV2YWxCb2FyZDtcblxuICAgIGNvbnN0IHVuc2FmZSA9IChTOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZS50b3RhbFVuaXRzIDw9IFMgKiB0aHJlYXRNYXJnaW4pIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeCwgeSB9LCBlKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIENhbmRpZGF0ZSB0YXJnZXRzIGZvciBhIGdlbmVyYWw6IGhvbGQsIHRoZSA4IGRpcmVjdGlvbmFsIHByb2JlcyBhdCBsb29rUmFuZ2UsIGFuZCBuZWFyYnlcbiAgICAvLyBlbmVteS9uZXV0cmFsIGNpdGllcy4gRmlsdGVyZWQgdG8gcGFzc2FibGUgKyAodW5kZXIgaGFyZEF2b2lkKSBzYWZlLlxuICAgIGNvbnN0IGNhbmRpZGF0ZXNGb3IgPSAoZzogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdG90YWxVbml0czogbnVtYmVyOyB9KTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbeyB4OiBnLngsIHk6IGcueSB9XTtcbiAgICAgICAgY29uc3QgZGlycyA9IFtbMSwgMF0sIFstMSwgMF0sIFswLCAxXSwgWzAsIC0xXSwgWzEsIDFdLCBbLTEsIC0xXSwgWzEsIC0xXSwgWy0xLCAxXV07XG4gICAgICAgIGZvciAoY29uc3QgW2R4LCBkeV0gb2YgZGlycykge1xuICAgICAgICAgICAgY29uc3QgdHggPSBnLnggKyBkeCAqIGxvb2tSYW5nZSwgdHkgPSBnLnkgKyBkeSAqIGxvb2tSYW5nZTtcbiAgICAgICAgICAgIGlmIChwYXNzYWJsZSh0eCwgdHkpKSBvdXQucHVzaCh7IHg6IHR4LCB5OiB0eSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygb3RoZXJDaXRpZXMpIHsgaWYgKGhleERpc3RhbmNlKGcsIGMpIDw9IGxvb2tSYW5nZSArIDQpIG91dC5wdXNoKHsgeDogYy54LCB5OiBjLnkgfSk7IH1cbiAgICAgICAgcmV0dXJuIG91dC5maWx0ZXIocCA9PiAhaGFyZEF2b2lkIHx8IChwLnggPT09IGcueCAmJiBwLnkgPT09IGcueSkgfHwgIXVuc2FmZShnLnRvdGFsVW5pdHMsIHAueCwgcC55KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnIG9mIG91cnMpIHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgPiBjdHguZGVhZGxpbmVNcyAtIDUwMCkgYnJlYWs7IC8vIGNvb3BlcmF0aXZlIGRlYWRsaW5lXG4gICAgICAgIGxldCBiZXN0VGFyZ2V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGNhbmQgb2YgY2FuZGlkYXRlc0ZvcihnKSkge1xuICAgICAgICAgICAgY29uc3Qgc2MgPSBzY29yZUJvYXJkKHByb2plY3QoZy5pZCwgY2FuZCkpO1xuICAgICAgICAgICAgaWYgKHNjID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjOyBiZXN0VGFyZ2V0ID0gY2FuZDsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0VGFyZ2V0ICYmIChiZXN0VGFyZ2V0LnggIT09IGcueCB8fCBiZXN0VGFyZ2V0LnkgIT09IGcueSkpIHtcbiAgICAgICAgICAgIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnLmlkLCB0YXJnZXRQb3NpdGlvbjogYmVzdFRhcmdldCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcbiIsIi8vIFdvcmtlci1zYWZlIChubyBlbmdpbmUvbW9ieC9wcmVhY3QgaW1wb3J0cykuIEJvYXJkIGZlYXR1cmVzIGZvciBwcmVkaWN0aW5nIFdISUNIIEZBQ1RJT04gV0lOUyxcbi8vIGNvbXB1dGVkIGZyb20gYSBwb3NpdGlvbnMrc3RyZW5ndGhzIGNvbmZpZyBzbyB0aGUgU0FNRSBmdW5jdGlvbiBzY29yZXMgYm90aCByZWFsIGdhbWUgc3RhdGVzICh3aGVuXG4vLyBmaXR0aW5nIHdlaWdodHMgZnJvbSBzaW0gb3V0Y29tZXMpIGFuZCB0aGUgQUkncyBwcm9qZWN0ZWQgbG9va2FoZWFkIHN0YXRlcyAoZXZhbENvYXJzZSkuIEtlZXBpbmdcbi8vIHRoZW0gaWRlbnRpY2FsIGlzIHdoYXQgbGV0cyBhIHZhbHVlIGZ1bmN0aW9uIGxlYXJuZWQgZnJvbSBcIndoYXQgc3RhdGVzIHdpblwiIGRyaXZlIHRoZSBzZWFyY2guXG5pbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuL2FpUGxhbm5lclwiO1xuXG5leHBvcnQgdHlwZSBGZWF0VW5pdCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHM6IG51bWJlcjsgZmFjdGlvbjogc3RyaW5nOyB9O1xuZXhwb3J0IHR5cGUgRmVhdENpdHkgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBmYWN0aW9uOiBzdHJpbmc7IH07IC8vIGZhY3Rpb24gPSBjdXJyZW50IGNvbnRyb2xsZXJcbmV4cG9ydCB0eXBlIEZlYXRUaWxlID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyB9OyAgICAgICAgLy8gcmVsZXZhbnQgKG5lYXIgdW5pdHMpLCBwb3B1bGF0aW9uLXdlaWdodGVkXG5cbmV4cG9ydCB0eXBlIEZlYXRDb25maWcgPSB7XG4gICAgdW5pdHM6IEZlYXRVbml0W107XG4gICAgY2l0aWVzOiBGZWF0Q2l0eVtdO1xuICAgIHRpbGVzOiBGZWF0VGlsZVtdO1xuICAgIGZhbGxvZmY6IG51bWJlcjtcbiAgICByYWRpdXM6IG51bWJlcjtcbn07XG5cbi8vIE9yZGVyIG1hdHRlcnMg4oCUIHdlaWdodHMgbGluZSB1cCBwb3NpdGlvbmFsbHkuIFswXSBpcyB0aGUgYmlhcyB0ZXJtLlxuZXhwb3J0IGNvbnN0IEZFQVRVUkVfTkFNRVMgPSBbXCJiaWFzXCIsIFwiZG9tQWR2YW50YWdlXCIsIFwib3VyRG9tU2hhcmVcIiwgXCJhcm15U2hhcmVcIiwgXCJjaXR5U2hhcmVcIiwgXCJmcm9udGllclNoYXJlXCIsIFwibGFuZFBlckFybXlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQm9hcmRGZWF0dXJlcyhjZmc6IEZlYXRDb25maWcsIGZhY3Rpb25JZDogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHsgdW5pdHMsIGNpdGllcywgdGlsZXMsIGZhbGxvZmYsIHJhZGl1cyB9ID0gY2ZnO1xuICAgIGxldCBvdXJEb20gPSAwLCBlbmVteURvbSA9IDAsIHRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgbGV0IG91ciA9IDAsIHJpdmFsID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodCwgdSk7XG4gICAgICAgICAgICBpZiAoZCA+IHJhZGl1cykgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCB2ID0gdS5zIC8gTWF0aC5wb3coZCArIDEsIGZhbGxvZmYpO1xuICAgICAgICAgICAgaWYgKHUuZmFjdGlvbiA9PT0gZmFjdGlvbklkKSBvdXIgKz0gdjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHYgPiByaXZhbCkgcml2YWwgPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRvdGFsICs9IHQudztcbiAgICAgICAgaWYgKG91ciA+IHJpdmFsICYmIG91ciA+IDApIG91ckRvbSArPSB0Lnc7XG4gICAgICAgIGVsc2UgaWYgKHJpdmFsID4gb3VyICYmIHJpdmFsID4gMCkgZW5lbXlEb20gKz0gdC53O1xuICAgIH1cbiAgICBjb25zdCBvdXJEb21TaGFyZSA9IHRvdGFsID4gMCA/IG91ckRvbSAvIHRvdGFsIDogMDtcbiAgICBjb25zdCBkb21BZHZhbnRhZ2UgPSB0b3RhbCA+IDAgPyAob3VyRG9tIC0gZW5lbXlEb20pIC8gdG90YWwgOiAwO1xuXG4gICAgbGV0IG91ckFybXkgPSAwLCB0b3RhbEFybXkgPSAwO1xuICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykgeyB0b3RhbEFybXkgKz0gdS5zOyBpZiAodS5mYWN0aW9uID09PSBmYWN0aW9uSWQpIG91ckFybXkgKz0gdS5zOyB9XG4gICAgY29uc3QgYXJteVNoYXJlID0gdG90YWxBcm15ID4gMCA/IG91ckFybXkgLyB0b3RhbEFybXkgOiAwO1xuXG4gICAgbGV0IG91ckNpdGllcyA9IDA7XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykgaWYgKGMuZmFjdGlvbiA9PT0gZmFjdGlvbklkKSBvdXJDaXRpZXMrKztcbiAgICBjb25zdCBjaXR5U2hhcmUgPSBjaXRpZXMubGVuZ3RoID4gMCA/IG91ckNpdGllcyAvIGNpdGllcy5sZW5ndGggOiAwO1xuXG4gICAgbGV0IGZyb250QXJteSA9IDA7XG4gICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7XG4gICAgICAgIGlmICh1LmZhY3Rpb24gIT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIGxldCBuZWFyID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgdiBvZiB1bml0cykgeyBpZiAodi5mYWN0aW9uICE9PSBmYWN0aW9uSWQgJiYgaGV4RGlzdGFuY2UodSwgdikgPD0gcmFkaXVzKSB7IG5lYXIgPSB0cnVlOyBicmVhazsgfSB9XG4gICAgICAgIGlmIChuZWFyKSBmcm9udEFybXkgKz0gdS5zO1xuICAgIH1cbiAgICBjb25zdCBmcm9udGllclNoYXJlID0gb3VyQXJteSA+IDAgPyBmcm9udEFybXkgLyBvdXJBcm15IDogMDtcbiAgICBjb25zdCBsYW5kUGVyQXJteSA9IG91ckFybXkgPiAwID8gb3VyRG9tIC8gb3VyQXJteSA6IDA7IC8vIHRlcnJpdG9yeSBwZXIgdW5pdCDigJQgc3VzdGFpbmFiaWxpdHkgcHJveHlcblxuICAgIHJldHVybiBbMSwgZG9tQWR2YW50YWdlLCBvdXJEb21TaGFyZSwgYXJteVNoYXJlLCBjaXR5U2hhcmUsIGZyb250aWVyU2hhcmUsIGxhbmRQZXJBcm15XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjb3JlRmVhdHVyZXMoZmVhdHVyZXM6IG51bWJlcltdLCB3ZWlnaHRzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgbGV0IHMgPSAwO1xuICAgIGNvbnN0IG4gPSBNYXRoLm1pbihmZWF0dXJlcy5sZW5ndGgsIHdlaWdodHMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgcyArPSBmZWF0dXJlc1tpXSAqIHdlaWdodHNbaV07XG4gICAgcmV0dXJuIHM7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBFeHBhbnNpb24gLyBmbG93LWZpZWxkIG1vdmVtZW50IOKAlCB0aGUgTk9OLUdSRUVEWSByZXBsYWNlbWVudCBmb3IgYGRvbWluaW9uYCdzIDEtc3RlcCBoaWxsLWNsaW1iLlxuLy9cbi8vIGRvbWluaW9uIG9ubHkgbG9va3MgYXQgYSBnZW5lcmFsJ3MgNiBuZWlnaGJvdXJzIGFuZCBtb3ZlcyBvbmx5IGlmIGEgbmVpZ2hib3VyIFNUUklDVExZIHJhaXNlcyBpdHNcbi8vIGN1cnJlbnQgZG9taW5hdGVkLXRpbGUgY291bnQ7IG9uY2UgaXQgc2l0cyBvbiBhIGxvY2FsIG1heGltdW0gaXQgaG9sZHMgZm9yZXZlciAobWVhc3VyZWQ6IGdlbmVyYWxzXG4vLyB3ZXJlIDc3LTkwJSBpZGxlKSwgc28gZ2VuZXJhbHMgbmV2ZXIgbWFyY2ggdG93YXJkIGRpc3RhbnQgb3BlbiB0ZXJyaXRvcnkuIFRoaXMgc3RyYXRlZ3kgaW5zdGVhZFxuLy8gZ2l2ZXMgZXZlcnkgZ2VuZXJhbCBhIExPTkctUkFOR0UgR09BTDpcbi8vICAgMS4gRG9taW5hdGlvbjogdGlsZSBpcyBcIm91cnNcIiBpZiBvdXIgaW5mbHVlbmNlIChzdHJlbmd0aC8oZCsxKV5mYWxsb2ZmLCBzdW1tZWQgb3ZlciBvdXIgZ2VuZXJhbHMpXG4vLyAgICAgIGJlYXRzIGV2ZXJ5IHJpdmFsJ3MgdGhlcmUuIEJ1aWxkIGEgZGVzaXJhYmlsaXR5IEQodGlsZSkgPSBob3cgbXVjaCBjdXJyZW50bHktdW4tZG9taW5hdGVkXG4vLyAgICAgIHZhbHVhYmxlIHRlcnJpdG9yeSBhIGdlbmVyYWwgc3RhbmRpbmcgb24gYHRpbGVgIHdvdWxkIGNvdmVyIChpdHMgaW5mbHVlbmNlIGRpc2spLlxuLy8gICAyLiBJbmZsdWVuY2UtYXdhcmUgcGF0aGZpbmRpbmc6IEJGUyBlYWNoIGdlbmVyYWwgb3ZlciB0aGUgc2FmZSBwYXNzYWJsZSBncmFwaCBhbmQgc2VuZCBpdCB0b3dhcmRcbi8vICAgICAgdGhlIHJlYWNoYWJsZSB0aWxlIG1heGltaXNpbmcgRCAtIHRyYXZlbENvc3QqZGlzdGFuY2UgKGFuZCBjYXB0dXJhYmxlLWNpdHkgYm9udXMpLiBJdCBjb21taXRzXG4vLyAgICAgIHRvIGEgZmFyIG9iamVjdGl2ZSBhbmQgc3RlcHMgb25lIGhleCBhbG9uZyB0aGUgc2hvcnRlc3QgcGF0aCDigJQgc28gaXQgYWN0dWFsbHkgY3Jvc3NlcyB0aGUgbWFwXG4vLyAgICAgIHRvIGNsYWltIG9wZW4gZ3JvdW5kIGluc3RlYWQgb2YgaWRsaW5nLlxuLy8gICAzLiBBbnRpLW92ZXJsYXA6IGFzc2lnbiBnZW5lcmFscyBsYXJnZXN0LWZpcnN0OyBvbmNlIG9uZSBjbGFpbXMgYSByZWdpb24sIGxhdGVyIGdlbmVyYWxzIGFyZVxuLy8gICAgICBwZW5hbGlzZWQgZm9yIHRhcmdldGluZyB0aGUgc2FtZSBhcmVhLCBzbyB0aGUgZmFjdGlvbiBmYW5zIG91dCBpbnN0ZWFkIG9mIGNsdW1waW5nLlxuLy8gUmVmdXNlcyB0byBzdGVwIHdpdGhpbiBhIHN0cm9uZ2VyIHN0YWNrJ3MgcmVhY2ggKGhhcmRBdm9pZCksIGxpa2UgZG9taW5pb24uXG4vL1xuLy8gY29uZmlnOiBmYWxsb2ZmLCByYWRpdXMsIHRocmVhdE1hcmdpbiwgaGFyZEF2b2lkLCB0cmF2ZWxDb3N0LCBjYXB0dXJlQm9udXMsIG93bkJpYXMsIG92ZXJsYXBXZWlnaHQsXG4vLyBwbHVzIGdyb3d0aFBvbGljeSdzIGtub2JzLlxucmVnaXN0ZXJTdHJhdGVneShcImV4cGFuZEZsb3dcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZmFsbG9mZiA9IG51bShjZmcuZmFsbG9mZiwgNik7XG4gICAgY29uc3QgcmFkaXVzID0gbnVtKGNmZy5yYWRpdXMsIDUpO1xuICAgIGNvbnN0IHRocmVhdE1hcmdpbiA9IG51bShjZmcudGhyZWF0TWFyZ2luLCAxLjMpO1xuICAgIGNvbnN0IGhhcmRBdm9pZCA9IGNmZy5oYXJkQXZvaWQgIT09IGZhbHNlOyAvLyBkZWZhdWx0IE9OXG4gICAgY29uc3QgdHJhdmVsQ29zdCA9IG51bShjZmcudHJhdmVsQ29zdCwgMC42KTsgICAvLyBjb3ZlcmVkLXRpbGVzIGZvcmZlaXRlZCBwZXIgaGV4IG9mIHRyYXZlbFxuICAgIGNvbnN0IGNhcHR1cmVCb251cyA9IG51bShjZmcuY2FwdHVyZUJvbnVzLCAyMCk7XG4gICAgY29uc3Qgb3duQmlhcyA9IG51bShjZmcub3duQmlhcywgMS4wKTtcbiAgICBjb25zdCBvdmVybGFwV2VpZ2h0ID0gbnVtKGNmZy5vdmVybGFwV2VpZ2h0LCAwLjUpOyAvLyBhbnRpLWNsdW1waW5nIHBlbmFsdHkgbmVhciBhbHJlYWR5LWNsYWltZWQgcmVnaW9uc1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuXG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykgeyBjb25zdCBzID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTsgaWYgKHMgJiYgcyA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpOyB9XG4gICAgY29uc3QgcGFzc2FibGUgPSB0aWxlcy5maWx0ZXIodCA9PiB0aWxlU2V0LmhhcyhrZXkodC54LCB0LnkpKSk7XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgIGlmICh0aWxlU2V0LmhhcyhrZXkobngsIG55KSkgJiYgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHsgeDogbngsIHk6IG55IH0pID09PSAxKSBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgY29uc3QgaW5mID0gKHN0cmVuZ3RoOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gc3RyZW5ndGggLyBNYXRoLnBvdyhkICsgMSwgZmFsbG9mZik7XG5cbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbWllcyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGNhcHR1cmFibGUgPSBuZXcgTWFwKGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKS5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcblxuICAgIC8vIERvbWluYXRpb24gcGVyIHRpbGU6IG91ciBzdW1tZWQgaW5mbHVlbmNlIHZzIHRoZSBzdHJvbmdlc3Qgcml2YWwncy4gQSB0aWxlIHdlIGRvbid0IHlldFxuICAgIC8vIGRvbWluYXRlIGlzIHdvcnRoIGNsYWltaW5nLlxuICAgIGNvbnN0IHZhbHVlQnlUaWxlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgcGFzc2FibGUpIHtcbiAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICBsZXQgcml2YWwgPSAwLCBvdXJTdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGcgb2YgZ2VuZXJhbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh0LCBnKTtcbiAgICAgICAgICAgIGlmIChkID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBpbmYoZy50b3RhbFVuaXRzLCBkKTtcbiAgICAgICAgICAgIGlmIChnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBvdXJTdW0gKz0gdjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHYgPiByaXZhbCkgcml2YWwgPSB2O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91cnNEb21pbmF0ZWQgPSBvdXJTdW0gPiByaXZhbCAqIG93bkJpYXMgJiYgb3VyU3VtID4gMDtcbiAgICAgICAgLy8gV29ydGggb2YgY2xhaW1pbmcgdGhpcyB0aWxlIHRoaXMgdHVybiAoMCBpZiB3ZSBhbHJlYWR5IGhvbGQgaXQpLiBDYXB0dXJhYmxlIGNpdGllcyBhcmUgd29ydGhcbiAgICAgICAgLy8gbXVjaCBtb3JlIHRoYW4gb3BlbiBsYW5kLlxuICAgICAgICBsZXQgd29ydGggPSBvdXJzRG9taW5hdGVkID8gMCA6IDE7XG4gICAgICAgIGlmIChjYXB0dXJhYmxlLmhhcyh0aykpIHdvcnRoICs9IGNhcHR1cmVCb251cztcbiAgICAgICAgdmFsdWVCeVRpbGUuc2V0KHRrLCB3b3J0aCk7XG4gICAgfVxuXG4gICAgLy8gRGVzaXJhYmlsaXR5IG9mIFNUQU5ESU5HIG9uIGEgdGlsZSA9IHRoZSB1bi1jbGFpbWVkIHdvcnRoIHdpdGhpbiBpdHMgaW5mbHVlbmNlIGRpc2suIEJveCBzY2FuXG4gICAgLy8gKDJyKzEpXjIgYXJvdW5kIGVhY2ggY2VudGVyLCBmaWx0ZXJlZCB0byBoZXggZGlzdGFuY2UgPD0gcmFkaXVzLlxuICAgIGNvbnN0IGRlc2lyYWJpbGl0eSA9IChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjbGFpbWVkQ2VudGVyczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdKTogbnVtYmVyID0+IHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IHggPSBjeCAtIHJhZGl1czsgeCA8PSBjeCArIHJhZGl1czsgeCsrKSBmb3IgKGxldCB5ID0gY3kgLSByYWRpdXM7IHkgPD0gY3kgKyByYWRpdXM7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgdGsgPSBrZXkoeCwgeSk7XG4gICAgICAgICAgICBjb25zdCB3ID0gdmFsdWVCeVRpbGUuZ2V0KHRrKTtcbiAgICAgICAgICAgIGlmICghdykgY29udGludWU7XG4gICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoeyB4OiBjeCwgeTogY3kgfSwgeyB4LCB5IH0pID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgIHN1bSArPSB3O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFudGktb3ZlcmxhcDogZGlzY291bnQgdGlsZXMgbmVhciBhIHJlZ2lvbiBhbm90aGVyIGdlbmVyYWwgYWxyZWFkeSBjb21taXR0ZWQgdG8uXG4gICAgICAgIGxldCBwZW5hbHR5ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIGNsYWltZWRDZW50ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoeyB4OiBjeCwgeTogY3kgfSwgYyk7XG4gICAgICAgICAgICBpZiAoZCA8IHJhZGl1cyAqIDIpIHBlbmFsdHkgKz0gb3ZlcmxhcFdlaWdodCAqIChyYWRpdXMgKiAyIC0gZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bSAtIHBlbmFsdHk7XG4gICAgfTtcblxuICAgIC8vIEEgdGlsZSBpcyB1bnNhZmUgaWYgYSBzdHJvbmdlciBlbmVteSBzdGFjayBjb3VsZCByZWFjaCB1cyB0aGVyZS5cbiAgICBjb25zdCB1bnNhZmVGb3IgPSAoY3g6IG51bWJlciwgY3k6IG51bWJlciwgUzogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVtaWVzKSB7XG4gICAgICAgICAgICBpZiAoZS50b3RhbFVuaXRzIDw9IFMgKiB0aHJlYXRNYXJnaW4pIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeDogY3gsIHk6IGN5IH0sIGUpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIDEpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBjb25zdCBjbGFpbWVkQ2VudGVyczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG5cbiAgICAvLyBMYXJnZXN0IHN0YWNrcyBjaG9vc2Ugb2JqZWN0aXZlcyBmaXJzdCAodGhleSBjb3ZlciBtb3JlIGFuZCBzaG91bGQgZ2V0IHRoZSBwcmltZSByZWdpb25zKS5cbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBbLi4ub3Vyc10uc29ydCgoYSwgYikgPT4gYi50b3RhbFVuaXRzIC0gYS50b3RhbFVuaXRzKSkge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG5cbiAgICAgICAgLy8gQkZTIG92ZXIgdGhlIHNhZmUgcGFzc2FibGUgZ3JhcGggZnJvbSB0aGlzIGdlbmVyYWwsIHRyYWNraW5nIHRyYXZlbCBkaXN0YW5jZSArIHBhcmVudCBzbyB3ZVxuICAgICAgICAvLyBjYW4gYm90aCBzY29yZSByZWFjaGFibGUgdGlsZXMgYW5kIHJlY292ZXIgdGhlIGZpcnN0IHN0ZXAgdG93YXJkIHRoZSBjaG9zZW4gb2JqZWN0aXZlLlxuICAgICAgICBjb25zdCBkaXN0ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBrZXkoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgZGlzdC5zZXQoc3RhcnQsIDApO1xuICAgICAgICBjb25zdCBxdWV1ZTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW3sgeDogZ2VuLngsIHk6IGdlbi55IH1dO1xuICAgICAgICBsZXQgcWkgPSAwO1xuICAgICAgICB3aGlsZSAocWkgPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHF1ZXVlW3FpKytdO1xuICAgICAgICAgICAgY29uc3QgY2QgPSBkaXN0LmdldChrZXkoY3VyLngsIGN1ci55KSkgPz8gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZihjdXIueCwgY3VyLnkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmsgPSBrZXkobi54LCBuLnkpO1xuICAgICAgICAgICAgICAgIGlmIChkaXN0LmhhcyhuaykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIC8vIE5ldmVyIHBhdGggYSBzdGVwIGludG8gYSB0aWxlIGEgc3Ryb25nZXIgc3RhY2sgY2FuIGZpZ2h0IHVzIG9uICh3aGVuIGhhcmRBdm9pZCkuXG4gICAgICAgICAgICAgICAgaWYgKGhhcmRBdm9pZCAmJiB1bnNhZmVGb3Iobi54LCBuLnksIFMpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkaXN0LnNldChuaywgY2QgKyAxKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc2V0KG5rLCBrZXkoY3VyLngsIGN1ci55KSk7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBpY2sgdGhlIHJlYWNoYWJsZSBvYmplY3RpdmUgd2l0aCB0aGUgYmVzdCBkZXNpcmFiaWxpdHkgbmV0IG9mIHRyYXZlbC5cbiAgICAgICAgbGV0IGJlc3RLZXkgPSBzdGFydDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IGRlc2lyYWJpbGl0eShnZW4ueCwgZ2VuLnksIGNsYWltZWRDZW50ZXJzKTtcbiAgICAgICAgZm9yIChjb25zdCBbdGssIGRdIG9mIGRpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IFt4cywgeXNdID0gdGsuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgY29uc3QgeCA9ICt4cywgeSA9ICt5cztcbiAgICAgICAgICAgIGxldCBzY29yZSA9IGRlc2lyYWJpbGl0eSh4LCB5LCBjbGFpbWVkQ2VudGVycykgLSB0cmF2ZWxDb3N0ICogZDtcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSBjYXB0dXJhYmxlLmdldCh0ayk7XG4gICAgICAgICAgICBpZiAoY2l0eSAmJiBTID4gY2l0eS5nYXJyaXNvbikgc2NvcmUgKz0gY2FwdHVyZUJvbnVzOyAvLyBzdGFuZGluZyBvbiBhIGNpdHkgd2UgY2FuIHRha2VcbiAgICAgICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdEtleSA9IHRrOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWNvcmQgdGhlIGNsYWltZWQgcmVnaW9uIHNvIHRoZSBuZXh0IGdlbmVyYWwgZmFucyBvdXQgZWxzZXdoZXJlLlxuICAgICAgICBjb25zdCBbYngsIGJ5XSA9IGJlc3RLZXkuc3BsaXQoXCIsXCIpO1xuICAgICAgICBjbGFpbWVkQ2VudGVycy5wdXNoKHsgeDogK2J4LCB5OiArYnkgfSk7XG5cbiAgICAgICAgaWYgKGJlc3RLZXkgPT09IHN0YXJ0KSBjb250aW51ZTsgLy8gYWxyZWFkeSBvbiB0aGUgYmVzdCBvYmplY3RpdmUg4oCUIGhvbGRcblxuICAgICAgICAvLyBSZWNvdmVyIHRoZSBmaXJzdCBob3AgYWxvbmcgdGhlIHNob3J0ZXN0IHBhdGggdG8gdGhlIG9iamVjdGl2ZS5cbiAgICAgICAgbGV0IHN0ZXAgPSBiZXN0S2V5O1xuICAgICAgICB3aGlsZSAoKHBhcmVudC5nZXQoc3RlcCkgPz8gc3RhcnQpICE9PSBzdGFydCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IHBhcmVudC5nZXQoc3RlcCk7XG4gICAgICAgICAgICBpZiAoIXApIGJyZWFrO1xuICAgICAgICAgICAgc3RlcCA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3N4LCBzeV0gPSBzdGVwLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogK3N4LCB5OiArc3kgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5mdW5jdGlvbiBjb21iYXREaXN0KGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2cxMChjb3VudCArIDEpKSArIDAuNTtcbn1cblxuLy8gR29hbC1zYW1wbGluZyBzZWFyY2gg4oCUIHRoZSBcIndoYXQgaWYgSSB3ZW50IHRoZXJlP1wiIEFJLiBHcmVlZHkvbmVpZ2hib3VyIHNlYXJjaCBjYW4ndCBkaXNjb3ZlciBhXG4vLyBkaXN0YW50IG9iamVjdGl2ZSAoZS5nLiBcIm1hcmNoIGRvd24gYW5kIHRha2UgdGhlIE1lZGl0ZXJyYW5lYW5cIikgYmVjYXVzZSBubyBzaW5nbGUgc3RlcCBpbXByb3Zlc1xuLy8gdGhlIGJvYXJkIHlldC4gSW5zdGVhZCwgZm9yIGVhY2ggZ2VuZXJhbCB3ZSBTQU1QTEUgbWFueSBjYW5kaWRhdGUgZGVzdGluYXRpb25zIGFjcm9zcyB0aGUgd2hvbGVcbi8vIHJlYWNoYWJsZSBtYXAgKHJhbmRvbSB0aWxlcyArIGV2ZXJ5IGNhcHR1cmFibGUgY2l0eSArIGhvbGRpbmcgc3RpbGwpLCBhbmQgZm9yIGVhY2ggb25lIHNjb3JlIHRoZVxuLy8gYm9hcmQgQVMgSUYgdGhhdCBnZW5lcmFsIGNvbnRyb2xsZWQgdGhhdCBzcG90OiBob3cgbXVjaCB0ZXJyaXRvcnkgb3VyIGZhY3Rpb24gd291bGQgZG9taW5hdGUgd2l0aFxuLy8gdGhlIGdlbmVyYWwncyBpbmZsdWVuY2UgcHJvamVjdGVkIHRoZXJlIChncm93biBmb3IgdGhlIHRyYXZlbCB0aW1lKSwgbWludXMgYSBzbWFsbCB0cmF2ZWwgY29zdCBhbmRcbi8vIGFuIGFudGktb3ZlcmxhcCBwZW5hbHR5IHNvIGdlbmVyYWxzIHNwcmVhZCB0byBkaWZmZXJlbnQgb2JqZWN0aXZlcy4gV2UgdGhlbiBzdGVwIG9uZSBoZXggYWxvbmcgdGhlXG4vLyBzaG9ydGVzdCBwYXRoIHRvd2FyZCB0aGUgYmVzdC1zY29yaW5nIGRlc3RpbmF0aW9uIOKAlCBhbmQgcmUtcGxhbiBldmVyeSB0dXJuIChyZWNlZGluZyBob3Jpem9uKS5cbi8vIEVuZW1pZXMgYXJlIHRyZWF0ZWQgYXMgc3RhdGljIG92ZXIgdGhlIHNob3J0IGhvcml6b247IHdlIHJlZnVzZSB0byBwYXRoIGludG8gYSBzdHJvbmdlciBzdGFjay5cbi8vXG4vLyBjb25maWc6IGZhbGxvZmYsIHJhZGl1cywgdGhyZWF0TWFyZ2luLCBoYXJkQXZvaWQsIHNhbXBsZXMsIHRyYXZlbENvc3QsIGNpdHlQb3BXZWlnaHQsIG93bkJpYXMsXG4vLyBvdmVybGFwV2VpZ2h0LCBncm93dGgsIGdyb3d0aEhvcml6b24gKCsgZ3Jvd3RoUG9saWN5IGtub2JzKS5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJtY0dvYWxcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZmFsbG9mZiA9IG51bShjZmcuZmFsbG9mZiwgNik7XG4gICAgY29uc3QgcmFkaXVzID0gbnVtKGNmZy5yYWRpdXMsIDUpO1xuICAgIGNvbnN0IHRocmVhdE1hcmdpbiA9IG51bShjZmcudGhyZWF0TWFyZ2luLCAxLjYpO1xuICAgIGNvbnN0IGhhcmRBdm9pZCA9IGNmZy5oYXJkQXZvaWQgIT09IGZhbHNlO1xuICAgIGNvbnN0IHNhbXBsZXMgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKG51bShjZmcuc2FtcGxlcywgMjAwKSkpO1xuICAgIGNvbnN0IHRyYXZlbENvc3QgPSBudW0oY2ZnLnRyYXZlbENvc3QsIDAuNCk7XG4gICAgY29uc3QgY2l0eVBvcFdlaWdodCA9IG51bShjZmcuY2l0eVBvcFdlaWdodCwgMC4wMik7XG4gICAgY29uc3Qgb3duQmlhcyA9IG51bShjZmcub3duQmlhcywgMS4wKTtcbiAgICBjb25zdCBvdmVybGFwV2VpZ2h0ID0gbnVtKGNmZy5vdmVybGFwV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGdyb3d0aCA9IG51bShjZmcuZ3Jvd3RoLCAxLjEpO1xuICAgIGNvbnN0IGdyb3d0aEhvcml6b24gPSBudW0oY2ZnLmdyb3d0aEhvcml6b24sIDYpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuXG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykgeyBjb25zdCBzID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTsgaWYgKHMgJiYgcyA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpOyB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgIGlmICh0aWxlU2V0LmhhcyhrZXkobngsIG55KSkgJiYgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHsgeDogbngsIHk6IG55IH0pID09PSAxKSBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgY29uc3QgaW5mID0gKHN0cmVuZ3RoOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gc3RyZW5ndGggLyBNYXRoLnBvdyhkICsgMSwgZmFsbG9mZik7XG5cbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbWllcyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGNhcHR1cmFibGUgPSBuZXcgTWFwKGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKS5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcbiAgICBjb25zdCBjaXR5UG9wID0gbmV3IE1hcCh0aWxlcy5tYXAodCA9PiBba2V5KHQueCwgdC55KSwgMF0pKTtcbiAgICBmb3IgKGNvbnN0IGMgb2YgY2l0aWVzKSBjaXR5UG9wLnNldChrZXkoYy54LCBjLnkpLCBjLnBvcHVsYXRpb24gPz8gMCk7XG5cbiAgICAvLyBTdGF0aWMgZmllbGRzOiBzdHJvbmdlc3Qgcml2YWwgaW5mbHVlbmNlIHBlciB0aWxlLCBhbmQgb3VyIGZhY3Rpb24ncyBUT1RBTCBpbmZsdWVuY2UgcGVyIHRpbGUuXG4gICAgY29uc3Qgcml2YWxNYXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGNvbnN0IG91clRvdGFsID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICBsZXQgcml2YWwgPSAwLCBvdXJTdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGcgb2YgZ2VuZXJhbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh0LCBnKTtcbiAgICAgICAgICAgIGlmIChkID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBpbmYoZy50b3RhbFVuaXRzLCBkKTtcbiAgICAgICAgICAgIGlmIChnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBvdXJTdW0gKz0gdjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHYgPiByaXZhbCkgcml2YWwgPSB2O1xuICAgICAgICB9XG4gICAgICAgIHJpdmFsTWF4LnNldCh0aywgcml2YWwpO1xuICAgICAgICBvdXJUb3RhbC5zZXQodGssIG91clN1bSk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5zYWZlRm9yID0gKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIFM6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbWllcykge1xuICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHg6IGN4LCB5OiBjeSB9LCBlKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgY29uc3QgY2xhaW1lZDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG5cbiAgICAvLyBCaWdnZXN0IHN0YWNrcyBwaWNrIG9iamVjdGl2ZXMgZmlyc3QgKHRoZXkgY292ZXIgdGhlIG1vc3QgYW5kIHNob3VsZCBjbGFpbSB0aGUgcHJpbWUgZ3JvdW5kKS5cbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBbLi4ub3Vyc10uc29ydCgoYSwgYikgPT4gYi50b3RhbFVuaXRzIC0gYS50b3RhbFVuaXRzKSkge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGdlbkN1cnJlbnQgPSB7IHg6IGdlbi54LCB5OiBnZW4ueSB9O1xuXG4gICAgICAgIC8vIE91ciBmYWN0aW9uIGluZmx1ZW5jZSBFWENMVURJTkcgdGhpcyBnZW5lcmFsIOKAlCB0aGUgZml4ZWQgYmFja2Ryb3Agd2UgcHJvamVjdCB0aGUgZ2VuZXJhbCBvbnRvLlxuICAgICAgICBjb25zdCBiYXNlRXhjbCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICAgICAgYmFzZUV4Y2wuc2V0KHRrLCAob3VyVG90YWwuZ2V0KHRrKSA/PyAwKSAtIGluZihTLCBoZXhEaXN0YW5jZSh0LCBnZW5DdXJyZW50KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQkZTIG92ZXIgdGhlIHNhZmUgcGFzc2FibGUgZ3JhcGg6IHRyYXZlbCBkaXN0YW5jZSArIHBhcmVudCAodG8gcmVjb3ZlciB0aGUgZmlyc3Qgc3RlcCkuXG4gICAgICAgIGNvbnN0IGRpc3QgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgICAgICBkaXN0LnNldChrZXkoZ2VuLngsIGdlbi55KSwgMCk7XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gW2dlbkN1cnJlbnRdO1xuICAgICAgICBsZXQgcWkgPSAwO1xuICAgICAgICB3aGlsZSAocWkgPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHF1ZXVlW3FpKytdO1xuICAgICAgICAgICAgY29uc3QgY2QgPSBkaXN0LmdldChrZXkoY3VyLngsIGN1ci55KSkgPz8gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZihjdXIueCwgY3VyLnkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmsgPSBrZXkobi54LCBuLnkpO1xuICAgICAgICAgICAgICAgIGlmIChkaXN0LmhhcyhuaykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoYXJkQXZvaWQgJiYgdW5zYWZlRm9yKG4ueCwgbi55LCBTKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGlzdC5zZXQobmssIGNkICsgMSk7XG4gICAgICAgICAgICAgICAgcGFyZW50LnNldChuaywga2V5KGN1ci54LCBjdXIueSkpO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhY2hhYmxlID0gWy4uLmRpc3Qua2V5cygpXTtcblxuICAgICAgICAvLyBORVcgdGVycml0b3J5IHRoaXMgZ2VuZXJhbCB3b3VsZCB3aW4gYnkgYmVpbmcgYXQgKHB4LHB5KTogdGlsZXMgaXQgRkxJUFMgdG8gb3VycyAob3VyIG90aGVyXG4gICAgICAgIC8vIGdlbmVyYWxzIGRvbid0IGFscmVhZHkgZG9taW5hdGUgdGhlbSkuIENvdW50aW5nIG9ubHkgdGhlIG1hcmdpbmFsIGdhaW4g4oCUIG5vdCB0b3RhbCBjb3ZlcmFnZSDigJRcbiAgICAgICAgLy8gaXMgd2hhdCBtYWtlcyBhIGRlc3RpbmF0aW9uIGluIG9wZW4vY29udGVzdGVkIGdyb3VuZCBiZWF0IHNpdHRpbmcgaW5zaWRlIG91ciBvd24gdGVycml0b3J5LlxuICAgICAgICBjb25zdCBzY29yZUF0ID0gKHB4OiBudW1iZXIsIHB5OiBudW1iZXIsIHNwOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IGdhaW5lZCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gcHggLSByYWRpdXM7IHggPD0gcHggKyByYWRpdXM7IHgrKykgZm9yIChsZXQgeSA9IHB5IC0gcmFkaXVzOyB5IDw9IHB5ICsgcmFkaXVzOyB5KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ayA9IGtleSh4LCB5KTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKHRrKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHsgeDogcHgsIHk6IHB5IH0sIHsgeCwgeSB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZCA+IHJhZGl1cykgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgcml2YWwgPSAocml2YWxNYXguZ2V0KHRrKSA/PyAwKSAqIG93bkJpYXM7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IGJhc2VFeGNsLmdldCh0aykgPz8gMDtcbiAgICAgICAgICAgICAgICBpZiAoYmFzZSA+IHJpdmFsICYmIGJhc2UgPiAwKSBjb250aW51ZTsgLy8gYWxyZWFkeSBvdXJzIHZpYSBhbm90aGVyIGdlbmVyYWwg4oCUIG5vIGdhaW5cbiAgICAgICAgICAgICAgICBjb25zdCBvdXIgPSBiYXNlICsgaW5mKHNwLCBkKTtcbiAgICAgICAgICAgICAgICBpZiAob3VyID4gcml2YWwgJiYgb3VyID4gMCkgZ2FpbmVkICs9IDEgKyBjaXR5UG9wV2VpZ2h0ICogKGNpdHlQb3AuZ2V0KHRrKSA/PyAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnYWluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2FuZGlkYXRlIGRlc3RpbmF0aW9uczogaG9sZCArIGV2ZXJ5IHJlYWNoYWJsZSBjYXB0dXJhYmxlIGNpdHkgKyBhIHJhbmRvbSBzYW1wbGUgb2YgdGhlIG1hcC5cbiAgICAgICAgY29uc3QgY2FuZGlkYXRlS2V5cyA9IG5ldyBTZXQ8c3RyaW5nPihba2V5KGdlbi54LCBnZW4ueSldKTtcbiAgICAgICAgZm9yIChjb25zdCBjayBvZiBjYXB0dXJhYmxlLmtleXMoKSkgaWYgKGRpc3QuaGFzKGNrKSkgY2FuZGlkYXRlS2V5cy5hZGQoY2spO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXMgJiYgcmVhY2hhYmxlLmxlbmd0aCA+IDA7IGkrKykge1xuICAgICAgICAgICAgY2FuZGlkYXRlS2V5cy5hZGQocmVhY2hhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlYWNoYWJsZS5sZW5ndGgpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVzdEtleSA9IGtleShnZW4ueCwgZ2VuLnkpO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGNrIG9mIGNhbmRpZGF0ZUtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkaXN0LmdldChjaykgPz8gMDtcbiAgICAgICAgICAgIGNvbnN0IFt4cywgeXNdID0gY2suc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgY29uc3QgcHggPSAreHMsIHB5ID0gK3lzO1xuICAgICAgICAgICAgY29uc3Qgc3AgPSBTICogTWF0aC5wb3coZ3Jvd3RoLCBNYXRoLm1pbihncm93dGhIb3Jpem9uLCBkKSk7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSBzY29yZUF0KHB4LCBweSwgc3ApIC0gdHJhdmVsQ29zdCAqIGQ7XG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gY2FwdHVyYWJsZS5nZXQoY2spO1xuICAgICAgICAgICAgaWYgKGNpdHkgJiYgUyA+IGNpdHkuZ2Fycmlzb24pIHNjb3JlICs9IDE7IC8vIGJvbnVzIGZvciBiZWluZyBhYmxlIHRvIHRha2UgYSBjaXR5IG91dHJpZ2h0XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY2xhaW1lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNkID0gaGV4RGlzdGFuY2UoeyB4OiBweCwgeTogcHkgfSwgYyk7XG4gICAgICAgICAgICAgICAgaWYgKGNkIDwgcmFkaXVzICogMikgc2NvcmUgLT0gb3ZlcmxhcFdlaWdodCAqIChyYWRpdXMgKiAyIC0gY2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0S2V5ID0gY2s7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtieCwgYnldID0gYmVzdEtleS5zcGxpdChcIixcIik7XG4gICAgICAgIGNsYWltZWQucHVzaCh7IHg6ICtieCwgeTogK2J5IH0pO1xuICAgICAgICBpZiAoYmVzdEtleSA9PT0ga2V5KGdlbi54LCBnZW4ueSkpIGNvbnRpbnVlOyAvLyBhbHJlYWR5IG9uIHRoZSBiZXN0IG9iamVjdGl2ZSDigJQgaG9sZFxuXG4gICAgICAgIC8vIEZpcnN0IGhvcCBhbG9uZyB0aGUgc2hvcnRlc3QgcGF0aCB0byB0aGUgY2hvc2VuIG9iamVjdGl2ZS5cbiAgICAgICAgbGV0IHN0ZXAgPSBiZXN0S2V5O1xuICAgICAgICBjb25zdCBzdGFydCA9IGtleShnZW4ueCwgZ2VuLnkpO1xuICAgICAgICB3aGlsZSAoKHBhcmVudC5nZXQoc3RlcCkgPz8gc3RhcnQpICE9PSBzdGFydCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IHBhcmVudC5nZXQoc3RlcCk7XG4gICAgICAgICAgICBpZiAoIXApIGJyZWFrO1xuICAgICAgICAgICAgc3RlcCA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3N4LCBzeV0gPSBzdGVwLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogK3N4LCB5OiArc3kgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7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Q0FBNEM7QUFDNUMsRUFBRTtBQUNGLDRGQUE0RjtBQUM1RiwyRUFBMkU7QUFDM0UsSUFBQSwyQkFBZ0IsRUFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFtQixFQUFFO0lBQzlELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFeEMsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9ELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRzNELE1BQU0sV0FBVyxHQUFXLE1BQU07U0FDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7U0FDdEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBQSx5QkFBVSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbkUsTUFB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RUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQW1CLEVBQUU7SUFDOUQsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLDREQUE0RDtJQUNyRyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLDhEQUE4RDtJQUV4RyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUN2RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQztJQUM3RCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQztJQUN0RSxNQUFNLFdB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QUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzFCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO1lBQzNELElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELEtBQUssTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUM7WUFBQyxJQUFJLElBQUEsdUJBQVcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUM7Z0JBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDdEcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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