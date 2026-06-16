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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileDirFlags.ts", filename: "/root/generals/node_modules/typenode/compileDirFlags.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileDirFlags.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileDirFlags.ts","loaded":true,"sourceSHA256":"265c6f85eeb907386d25b75dc6b11c37b787f788b64d51924d57c5f052b4c91f","size":8100,"version":1,"evalStartTime":1781596404273,"evalEndTime":1781596404274}, moduleFnc: (function compileDirFlags_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", filename: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","loaded":true,"sourceSHA256":"9701d799d870e1117bdda5b6b1ef57e9d2a55fd14630e2d7a8416ad72c2e0fb7","size":3670,"version":1,"evalStartTime":1781596404275,"evalEndTime":1781596404275.01}, moduleFnc: (function compileRecordModuleRequires_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","loaded":true,"sourceSHA256":"30c072ee646adbd818d776f22b2185a81c98ee3dfbd308e1b34876cdabb03dff","size":9004,"version":1,"evalStartTime":1781596404276,"evalEndTime":1781596404281}, moduleFnc: (function bundler_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/js-sha256/src/sha256.js", filename: "/root/generals/node_modules/js-sha256/src/sha256.js", isModuleMain: "/root/generals/node_modules/js-sha256", paths: ["/root/generals/node_modules/js-sha256/src/node_modules","/root/generals/node_modules/js-sha256/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/js-sha256/src/sha256.js","path":"/root/generals/node_modules/js-sha256/src","filename":"/root/generals/node_modules/js-sha256/src/sha256.js","loaded":true,"sourceSHA256":"2db6c8e554fbee14672368a0d7551a8ddd841ee96c91526eb7987a0179cfc717","size":18769,"version":1,"evalStartTime":1781596404276.01,"evalEndTime":1781596404277}, moduleFnc: (function sha_js(exports, require, module, __filename, __dirname) { /**
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","loaded":true,"sourceSHA256":"49578775d45f6354669c3f29f6c2318f95495af6eea1d9cd136c89626f76394e","size":34216,"version":1,"evalStartTime":1781596404277.01,"evalEndTime":1781596404277.02}, moduleFnc: (function bundleRequire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","loaded":true,"sourceSHA256":"59f01474432e6ffc76323e5e684ce5f7931537223999780ab735af331faac1d2","size":16004,"version":1,"evalStartTime":1781596404278,"evalEndTime":1781596404280.04}, moduleFnc: (function bundleWrapper_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","loaded":true,"sourceSHA256":"18c7fe69d9133c820e876a09f89bca1d68337a67d8b1a04589d48e371a77cbe2","size":36358,"version":1,"evalStartTime":1781596404278.01,"evalEndTime":1781596404280.03,"allowclient":true}, moduleFnc: (function caching_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","loaded":true,"sourceSHA256":"9fb24f97ff53337f0c2b79dcb2cf03699e768351e01ce8199c98a968c81669a4","size":58046,"version":1,"evalStartTime":1781596404279,"evalEndTime":1781596404280.02,"allowclient":true}, moduleFnc: (function misc_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","loaded":true,"sourceSHA256":"b3eafb6059634f367bc20abd9732161ad4f3498f56a540361080950856a4cb2a","size":1258,"version":1,"evalStartTime":1781596404279.01,"evalEndTime":1781596404279.02,"allowclient":true}, moduleFnc: (function types_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.canHaveChildren = void 0;
function canHaveChildren(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
exports.canHaveChildren = canHaveChildren;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "ea937c29143cb2e8959e6cd066d49be7fe410ccd03431380474bf4dd84de697f"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","loaded":true,"sourceSHA256":"75f76504af1be1552a350c93a747273950b42fb0959d5acee5ecfecb4a092947","size":55197,"version":1,"evalStartTime":1781596404280,"evalEndTime":1781596404280.01,"allowclient":true}, moduleFnc: (function format_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", filename: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","loaded":true,"sourceSHA256":"1c98494daf4e65ea335f9e33d3b29c8238ff78e910fdc9aade2a916c6104c869","size":27639,"version":1,"evalStartTime":1781596404280.05,"evalEndTime":1781596404280.06}, moduleFnc: (function sourceMaps_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/aiWorkerEntry.ts", filename: "/root/generals/src/gameUI2/ai/aiWorkerEntry.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/aiWorkerEntry.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/aiWorkerEntry.ts","loaded":true,"sourceSHA256":"650997b309ba17f2e16794b02dde8bfca94d688657e87d026ebd4202d6f57641","size":5509,"version":1,"evalStartTime":1781596404281.01,"evalEndTime":1781596404286.02,"allowclient":true,"hotreload":true}, moduleFnc: (function aiWorkerEntry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/index.ts", filename: "/root/generals/src/gameUI2/ai/strategies/index.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/index.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/index.ts","loaded":true,"sourceSHA256":"db7917ae86c08d036aa89c1cc276d7737293f3f8dc5b067cf5e7cc91a19bd7f4","size":2465,"version":1,"evalStartTime":1781596404281.02,"evalEndTime":1781596404286.01,"allowclient":true,"hotreload":true}, moduleFnc: (function index_ts(exports, require, module, __filename, __dirname) { "use strict";
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
var registry_1 = require("./registry");
Object.defineProperty(exports, "getStrategy", { enumerable: true, get: function () { return registry_1.getStrategy; } , configurable: true});
Object.defineProperty(exports, "getStrategyIds", { enumerable: true, get: function () { return registry_1.getStrategyIds; } , configurable: true});
Object.defineProperty(exports, "registerStrategy", { enumerable: true, get: function () { return registry_1.registerStrategy; } , configurable: true});
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "81b27ac4ec69ea2491717a87ee1f7d40306317c66801b001bb9b42dc7d362a4e"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/beeline.ts", filename: "/root/generals/src/gameUI2/ai/strategies/beeline.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/beeline.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/beeline.ts","loaded":true,"sourceSHA256":"848c5637384d6c2602928f092df5ba3faaf78baad9045f22b232ef5960d422a4","size":1801,"version":1,"evalStartTime":1781596404282,"evalEndTime":1781596404282.07,"allowclient":true,"hotreload":true}, moduleFnc: (function beeline_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/aiPlanner.ts", filename: "/root/generals/src/gameUI2/ai/aiPlanner.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/aiPlanner.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/aiPlanner.ts","loaded":true,"sourceSHA256":"d6697eb76225c96a5c8c41966e527f2ccd5ff92d073140d79225abb23f1b2bca","size":6469,"version":1,"evalStartTime":1781596404282.01,"evalEndTime":1781596404282.02,"allowclient":true,"hotreload":true}, moduleFnc: (function aiPlanner_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/growthPolicy.ts", filename: "/root/generals/src/gameUI2/ai/growthPolicy.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/growthPolicy.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/growthPolicy.ts","loaded":true,"sourceSHA256":"71bfc7326d48614ee5d3203421801b379adfb580fd35340e948bf13127c5c804","size":5151,"version":1,"evalStartTime":1781596404282.03,"evalEndTime":1781596404282.04,"allowclient":true,"hotreload":true}, moduleFnc: (function growthPolicy_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/registry.ts", filename: "/root/generals/src/gameUI2/ai/strategies/registry.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/registry.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/registry.ts","loaded":true,"sourceSHA256":"d5b6dde5c65a18cd67e7ac01b9995e7ed8cf22343a854f39332777c21462089c","size":3244,"version":1,"evalStartTime":1781596404282.05,"evalEndTime":1781596404282.06,"allowclient":true,"hotreload":true}, moduleFnc: (function registry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/greedyCity.ts", filename: "/root/generals/src/gameUI2/ai/strategies/greedyCity.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/greedyCity.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/greedyCity.ts","loaded":true,"sourceSHA256":"42ac0bb2c7df5abbe4cba4c4fb36234fb3615d5a2e6c1aed46ae1efecb99b581","size":8560,"version":1,"evalStartTime":1781596404283,"evalEndTime":1781596404283.01,"allowclient":true,"hotreload":true}, moduleFnc: (function greedyCity_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/consolidate.ts", filename: "/root/generals/src/gameUI2/ai/strategies/consolidate.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/consolidate.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/consolidate.ts","loaded":true,"sourceSHA256":"567b5b5d6f14cbc2cf50ec2d2dfa917a57eae5a6ffb77ab92bae1a89d66d511c","size":10544,"version":1,"evalStartTime":1781596404283.02,"evalEndTime":1781596404283.03,"allowclient":true,"hotreload":true}, moduleFnc: (function consolidate_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/focusFire.ts", filename: "/root/generals/src/gameUI2/ai/strategies/focusFire.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/focusFire.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/focusFire.ts","loaded":true,"sourceSHA256":"39df806529aa4e98f854c3e21b7f4a47d1667eebd527031017286fb08016ba99","size":9404,"version":1,"evalStartTime":1781596404283.04,"evalEndTime":1781596404283.05,"allowclient":true,"hotreload":true}, moduleFnc: (function focusFire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts", filename: "/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts","loaded":true,"sourceSHA256":"bc9a06e39651d8cba4c0554a8ba44d0a3f10fe58e085df12f715696f80f385ea","size":13603,"version":1,"evalStartTime":1781596404283.06,"evalEndTime":1781596404284,"allowclient":true,"hotreload":true}, moduleFnc: (function focusWeakestFaction_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts", filename: "/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts","loaded":true,"sourceSHA256":"033e12e03577ad3c6680b10c2cd3eb3709497520393a4cc7b23dfee27335b469","size":16481,"version":1,"evalStartTime":1781596404284.01,"evalEndTime":1781596404284.02,"allowclient":true,"hotreload":true}, moduleFnc: (function monteCarlo_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/threatAware.ts", filename: "/root/generals/src/gameUI2/ai/strategies/threatAware.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/threatAware.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/threatAware.ts","loaded":true,"sourceSHA256":"9480e88e9e35e2d5fcb4afb7b809a46f34f78376372a755792f1394c368c57c7","size":19093,"version":1,"evalStartTime":1781596404284.03,"evalEndTime":1781596404284.04,"allowclient":true,"hotreload":true}, moduleFnc: (function threatAware_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/influenceMap.ts", filename: "/root/generals/src/gameUI2/ai/strategies/influenceMap.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/influenceMap.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/influenceMap.ts","loaded":true,"sourceSHA256":"e0ede60979f51a76b5cd550ad98ed95e8602729519014a1cab4ce8a333c0244b","size":20947,"version":1,"evalStartTime":1781596404284.05,"evalEndTime":1781596404285,"allowclient":true,"hotreload":true}, moduleFnc: (function influenceMap_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/territory.ts", filename: "/root/generals/src/gameUI2/ai/strategies/territory.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/territory.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/territory.ts","loaded":true,"sourceSHA256":"a245c15149db037cdd3adcf62c12863688c90d7b29ba7c86e10a8e40701c93d9","size":18502,"version":1,"evalStartTime":1781596404285.01,"evalEndTime":1781596404285.02,"allowclient":true,"hotreload":true}, moduleFnc: (function territory_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/snowball.ts", filename: "/root/generals/src/gameUI2/ai/strategies/snowball.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/snowball.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/snowball.ts","loaded":true,"sourceSHA256":"42872bd3d0f2c5bc432ca97f46159fbacfd52bff50bed8d5d6a25ff16ad04d11","size":21112,"version":1,"evalStartTime":1781596404285.03,"evalEndTime":1781596404285.04,"allowclient":true,"hotreload":true}, moduleFnc: (function snowball_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/coordinate.ts", filename: "/root/generals/src/gameUI2/ai/strategies/coordinate.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/coordinate.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/coordinate.ts","loaded":true,"sourceSHA256":"3829da1ef6c47d270d33c58aba6d9a8c9ca93ea92330914173266494b4e365ec","size":19244,"version":1,"evalStartTime":1781596404285.05,"evalEndTime":1781596404286,"allowclient":true,"hotreload":true}, moduleFnc: (function coordinate_ts(exports, require, module, __filename, __dirname) { "use strict";
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
    const { factionId, generals, cities } = snapshot;
    const ours = generals.filter(g => g.factionId === factionId);
    const enemyGenerals = generals.filter(g => g.factionId !== factionId);
    const enemyCities = cities.filter(c => c.factionId !== factionId);
    const ourCities = cities.filter(c => c.factionId === factionId);
    const target = new Map();
    const pairs = [];
    for (const g of ours) {
        for (const c of enemyCities) {
            const soloable = g.totalUnits > c.garrison * safety;
            const d = (0, aiPlanner_1.hexDistance)(g, c);
            const score = (c.isCapital ? capitalBonus : 0) - distWeight * d - garrisonWeight * c.garrison;
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
            const score = defendWeight - distWeight * (0, aiPlanner_1.hexDistance)(g, oc);
            if (score > bestScore) {
                bestScore = score;
                best = { x: oc.x, y: oc.y };
            }
        }
        // help take the most valuable city we can contribute to (closest big one)
        for (const c of enemyCities) {
            const score = (c.isCapital ? capitalBonus : 0) - distWeight * (0, aiPlanner_1.hexDistance)(g, c) - garrisonWeight * c.garrison;
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
 /* _JS_SOURCE_HASH = "851a85d400a83180dc5e2636fbf0ed8a35fc28cbb4dd274afde9006d5f30b466"; */
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

;globalThis.__BUNDLE_HASH__ = "592c5663803f2c1d1e85870a05bb123f92e5edbe26b4ba75feb1548868b71be6";;(function bundleRequire(config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGlsZURpckZsYWdzLnRzIiwiY29tcGlsZVJlY29yZE1vZHVsZVJlcXVpcmVzLnRzIiwiYnVuZGxlci50cyIsImJ1bmRsZVJlcXVpcmUudHMiLCJidW5kbGVXcmFwcGVyLnRzIiwiY2FjaGluZy50cyIsIm1pc2MudHMiLCJ0eXBlcy50cyIsImZvcm1hdC50cyIsInNvdXJjZU1hcHMudHMiLCJhaVdvcmtlckVudHJ5LnRzIiwiaW5kZXgudHMiLCJiZWVsaW5lLnRzIiwiYWlQbGFubmVyLnRzIiwiZ3Jvd3RoUG9saWN5LnRzIiwicmVnaXN0cnkudHMiLCJncmVlZHlDaXR5LnRzIiwiY29uc29saWRhdGUudHMiLCJmb2N1c0ZpcmUudHMiLCJmb2N1c1dlYWtlc3RGYWN0aW9uLnRzIiwibW9udGVDYXJsby50cyIsInRocmVhdEF3YXJlLnRzIiwiaW5mbHVlbmNlTWFwLnRzIiwidGVycml0b3J5LnRzIiwic25vd2JhbGwudHMiLCJjb29yZGluYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogICAgICBMb29rcyBmb3IgYWRqYWNlbnQgeC5mbGFnIGZpbGVzLCBzZXR0aW5nIGFuIHggZmxhZyBvbiB0aGUgbW9kdWxlIGlmIHRoZXkgZXhpc3QuXG4gKiAgICAgIC0gQWxzbyBjaGVja3MgcGFyZW50IGRpcmVjdG9yaWVzXG4gKiBcbiAqICAgICAgLSBFeCwgaWYgdGVzdC5qcyBoYXMgYSBzaWJsaW5nIGZpbGUgY2FsbGVkIGFsbG93Y2xpZW50LmZsYWcsIHRoZW4gdGhlIHRlc3QuanNcbiAqICAgICAgICAgIG1vZHVsZSBoYXMgYWxsb3djbGllbnQgPSB0cnVlIHNldCBvbiBpdC5cbiAqL1xuXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcblxuLy8gTk9URTogTm90IHVzaW5nIGltcG9ydCwgYXMgdGhlIHR5cGVzIGNvbXBsYWluIGFib3V0IHdoYXQgd2UgYXJlIGRvaW5nIHRvbyBtdWNoLlxuY29uc3QgTW9kdWxlID0gcmVxdWlyZShcIm1vZHVsZVwiKTtcblxuLy8gV2UgbmVlZCBhdCBsZWFzdCAxIGV4cG9ydCwgdG8gZm9yY2UgdGhpcyB0byBiZSB0cmVhdGVkIGxpa2UgYSBtb2R1bGVcbmV4cG9ydCBjb25zdCBmb3JjZU1vZHVsZSA9IHRydWU7XG5cbmxldCBmbGFnc1BlckRpcjogeyBbZGlybmFtZTogc3RyaW5nXTogeyBbZmxhZzogc3RyaW5nXTogdHJ1ZSB9IH0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gZ2V0RmxhZ3NGb3JEaXIoZGlyOiBzdHJpbmcpIHtcbiAgICBsZXQgZmxhZ3MgPSBmbGFnc1BlckRpcltkaXJdO1xuICAgIGlmICghZmxhZ3MpIHtcbiAgICAgICAgZmxhZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBmbGFnc1BlckRpcltkaXJdID0gZmxhZ3M7XG4gICAgICAgIGxldCBmaWxlc0luRGlyOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbGVzSW5EaXIgPSBmcy5yZWFkZGlyU3luYyhkaXIpO1xuICAgICAgICB9IGNhdGNoIHsgfVxuICAgICAgICBpZiAoZmlsZXNJbkRpcikge1xuICAgICAgICAgICAgZm9yIChsZXQgZmxhZyBvZiBmaWxlc0luRGlyLmZpbHRlcih4ID0+IHguZW5kc1dpdGgoXCIuZmxhZ1wiKSkpIHtcbiAgICAgICAgICAgICAgICBmbGFnc1tmbGFnLnNsaWNlKDAsIC1cIi5mbGFnXCIubGVuZ3RoKV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbGFncztcbn1cblxuY29uc3QgYmFzZSA9IE1vZHVsZS5wcm90b3R5cGUubG9hZDtcbk1vZHVsZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICh0aGlzOiBOb2RlSlMuTW9kdWxlKSB7XG4gICAgbGV0IHJlc3VsdCA9IGJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGlmICh0aGlzLmZpbGVuYW1lKSB7XG4gICAgICAgIGxldCBmbGFnczogeyBbZmxhZzogc3RyaW5nXTogdHJ1ZSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICBsZXQgZGlyUGFydHMgPSB0aGlzLmZpbGVuYW1lLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpLnNwbGl0KFwiL1wiKS5zbGljZSgwLCAtMSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRpclBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZsYWdzLCBnZXRGbGFnc0ZvckRpcihkaXJQYXJ0cy5zbGljZSgwLCBpKS5qb2luKFwiL1wiKSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBmbGFncykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gZmxhZ3Nba2V5XTtcbiAgICAgICAgICAgIC8vIE5PVEU6IERvbid0IHNldCBmbGFncyB3aGljaCBhcmUgRVhQTElDSVRMWSBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICgodGhpcyBhcyBhbnkpW2tleV0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTsiLCIvKipcbiAqICAgICAgQWRkcyBtb2R1bGUucmVxdWlyZXMsIHdoaWNoIGluZGljYXRlcyB0aGUgcmVzdWx0IG9mIGV2ZXJ5IHJlcXVpcmUgcGVyIG1vZHVsZS5cbiAqL1xuXG4vLyBOT1RFOiBOb3QgdXNpbmcgaW1wb3J0LCBhcyB0aGUgdHlwZXMgY29tcGxhaW4gYWJvdXQgd2hhdCB3ZSBhcmUgZG9pbmcgdG9vIG11Y2guXG5jb25zdCBNb2R1bGUgPSBldmFsKFwicmVxdWlyZVwiKShcIm1vZHVsZVwiKTtcblxuLy8gV2UgbmVlZCBhdCBsZWFzdCAxIGV4cG9ydCwgdG8gZm9yY2UgdGhpcyB0byBiZSB0cmVhdGVkIGxpa2UgYSBtb2R1bGVcbmV4cG9ydCBjb25zdCBmb3JjZU1vZHVsZSA9IHRydWU7XG5cbmNvbnN0IGJhc2UgPSBNb2R1bGUucHJvdG90eXBlLnJlcXVpcmU7XG5Nb2R1bGUucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbiAodGhpczogTm9kZUpTLk1vZHVsZSwgcmVxdWVzdDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXF1aXJlcyA9IHRoaXMucmVxdWlyZXMgfHwge307XG4gICAgdGhpcy5hc3luY1JlcXVpcmVzID0gdGhpcy5hc3luY1JlcXVpcmVzIHx8IHt9XG4gICAgaWYgKHRoaXMuZXZhbEVuZFRpbWUgJiYgIXRoaXMucmVxdWlyZXNbcmVxdWVzdF0pIHtcbiAgICAgICAgdGhpcy5hc3luY1JlcXVpcmVzW3JlcXVlc3RdID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gTk9URTogRG9pbmcgcmVzb2x2ZUZpbGVuYW1lIG9uIGV2ZXJ5IHJlcXVpcmUgYnJlYWtzIGEgbG90IG9mIHRoZSBjYWNoaW5nIE5vZGVKUyBkb2VzXG4gICAgLy8gIHRvIHRyeSB0byBhdm9pZCBjYWxsaW5nIHJlc29sdmVGaWxlbmFtZS4gSG93ZXZlci4uLiB0aGVpciBjYWNoaW5nIGlzIHByb2JhYmx5IG5vIGxvbmdlclxuICAgIC8vICBuZWVkZWQgYW55bW9yZS5cbiAgICB0aGlzLnJlcXVpcmVzW3JlcXVlc3RdID0gTW9kdWxlLl9yZXNvbHZlRmlsZW5hbWUocmVxdWVzdCwgdGhpcywgZmFsc2UpO1xuXG5cbiAgICByZXR1cm4gYmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTsiLCJpbXBvcnQgeyBzaGEyNTYgfSBmcm9tIFwianMtc2hhMjU2XCI7XG5pbXBvcnQgeyBidW5kbGVSZXF1aXJlLCBCdW5kbGVSZXF1aXJlQ29uZmlnIH0gZnJvbSBcIi4vYnVuZGxlUmVxdWlyZVwiO1xuaW1wb3J0IHsgd3JhcE1vZHVsZSB9IGZyb20gXCIuL2J1bmRsZVdyYXBwZXJcIjtcbmltcG9ydCB7IGFkZFRvSW5Qcm9ncmVzc1NvdXJjZU1hcCwgZW5jb2RlU291cmNlTWFwTGluZUNvbW1lbnQsIGZpbmFsaXplSW5Qcm9ncmVzc1NvdXJjZU1hcCwgZ2V0SW5Qcm9ncmVzc1NvdXJjZU1hcCwgSW5Qcm9ncmVzc1NvdXJjZU1hcCwgcmVtb3ZlU291cmNlTWFwIH0gZnJvbSBcIi4vc291cmNlTWFwc1wiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVuZGxlKGNvbmZpZzoge1xuICAgIG1vZHVsZXM6ICh0eXBlb2YgcmVxdWlyZS5jYWNoZVtcIlwiXSlbXTtcbiAgICByb290UGF0aDogc3RyaW5nO1xuICAgIGVudHJ5UG9pbnRzOiBzdHJpbmdbXTtcbn0pOiBQcm9taXNlPHtcbiAgICBidW5kbGU6IHN0cmluZztcbn0+IHtcbiAgICBjb25zdCB7IG1vZHVsZXMsIHJvb3RQYXRoLCBlbnRyeVBvaW50cyB9ID0gY29uZmlnO1xuXG4gICAgLy8gTk9URTogV2UgQ09VTEQgdXNlIGFuIFwiaW5kZXggc291cmNlIG1hcFwiLCB3aGljaCBjb250YWlucyBvdGhlciBzb3VyY2VtYXBzXG4gICAgLy8gIGFuZCBnaXZlcyBvZmZzZXRzIGZvciB0aGVtLiBIb3dldmVyLi4uIHRvb2xpbmcgc3VwcG9ydCB3aWxsIGlzIGJldHRlclxuICAgIC8vICBmb3IgcmVndWxhciBzb3VyY2VtYXBzLCBhbmQgaXQncyBtb3JlIGZsZXhpYmxlLlxuXG4gICAgbGV0IGluUHJvZ3Jlc3NTb3VyY2VNYXA6IEluUHJvZ3Jlc3NTb3VyY2VNYXAgPSB7XG4gICAgICAgIHNvdXJjZXM6IFtdLFxuICAgICAgICBtYXBwaW5nczogW10sXG4gICAgfTtcblxuICAgIGxldCBjb2RlID0gXCJcIjtcbiAgICBsZXQgY3VyTGluZUNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICBpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiAgICAgICAgbGV0IG5ld0NvZGUgPSB3cmFwTW9kdWxlKG1vZHVsZSk7XG5cbiAgICAgICAgbGV0IHsgc291cmNlTWFwLCBjb2RlOiBuZXdDb2RlMiB9ID0gcmVtb3ZlU291cmNlTWFwKG5ld0NvZGUpO1xuICAgICAgICBuZXdDb2RlID0gbmV3Q29kZTI7XG4gICAgICAgIGlmIChzb3VyY2VNYXApIHtcbiAgICAgICAgICAgIGxldCBpblByb2dyZXNzID0gZ2V0SW5Qcm9ncmVzc1NvdXJjZU1hcChzb3VyY2VNYXApO1xuICAgICAgICAgICAgZm9yIChsZXQgbWFwcGluZyBvZiBpblByb2dyZXNzLm1hcHBpbmdzKSB7XG4gICAgICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRMaW5lICs9IGN1ckxpbmVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRvSW5Qcm9ncmVzc1NvdXJjZU1hcChpblByb2dyZXNzU291cmNlTWFwLCBpblByb2dyZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgKz0gbmV3Q29kZSArIFwiXFxuXCI7XG4gICAgICAgIGN1ckxpbmVDb3VudCArPSAobmV3Q29kZS5tYXRjaCgvXFxuL2cpIHx8IFtdKS5sZW5ndGggKyAxO1xuICAgIH1cbiAgICBjb2RlICs9IFwiXFxuLyogSW5saW5lZCBidWZmZXIgaW1wbGVtZW50YXRpb246ICovXFxuXCI7XG4gICAgY29kZSArPSBgXFxuO1xcbiR7ZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArIFwiL2J1ZmZlci5qc1wiKS50b1N0cmluZygpfVxcbjtcXG5gO1xuICAgIGNvZGUgKz0gYFxcbjtnbG9iYWxUaGlzLl9fQlVORExFX0hBU0hfXyA9ICR7SlNPTi5zdHJpbmdpZnkoc2hhMjU2KGNvZGUpKX07YDtcbiAgICBsZXQgYnVuZGxlQ29uZmlnOiBCdW5kbGVSZXF1aXJlQ29uZmlnID0ge1xuICAgICAgICByb290UGF0aCxcbiAgICB9O1xuICAgIGNvZGUgKz0gYDsoJHtidW5kbGVSZXF1aXJlLnRvU3RyaW5nKCl9KSgke0pTT04uc3RyaW5naWZ5KGJ1bmRsZUNvbmZpZyl9KTtgO1xuICAgIC8vIERlbGF5IHRoZSBpbml0aWFsIHJlcXVpcmVzLCBzbyBvdXIgZXh0ZW5zaW9uIGNhbiBib290IGFuZCB3ZSBjYW4gZGVidWcgc3RhcnR1cCBlcnJvcnNcbiAgICBjb2RlICs9IFwiXFxuO3NldFRpbWVvdXQoKCkgPT4ge1wiO1xuICAgIGZvciAobGV0IGVudHJ5UG9pbnQgb2YgZW50cnlQb2ludHMpIHtcbiAgICAgICAgY29kZSArPSBgXFxuO2dsb2JhbFRoaXMucmVxdWlyZSgke0pTT04uc3RyaW5naWZ5KGVudHJ5UG9pbnQpfSk7YDtcbiAgICB9XG4gICAgY29kZSArPSBcIlxcbjt9KTtcIjtcbiAgICBjb2RlICs9IFwiXFxuXCIgKyBlbmNvZGVTb3VyY2VNYXBMaW5lQ29tbWVudChmaW5hbGl6ZUluUHJvZ3Jlc3NTb3VyY2VNYXAoaW5Qcm9ncmVzc1NvdXJjZU1hcCkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJ1bmRsZTogY29kZSxcbiAgICB9O1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgdmFyIF9fQlVORExFX0hBU0hfXzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEJ1bmRsZUhhc2goY29kZTogc3RyaW5nKSB7XG4gICAgbGV0IG1hdGNoID0gY29kZS5tYXRjaCgvO2dsb2JhbFRoaXMuX19CVU5ETEVfSEFTSF9fID0gXCIoW15cIl0rKVwiOy8pO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG1hdGNoWzFdO1xufSIsImltcG9ydCB7IFNlcmlhbGl6ZWRNb2R1bGUgfSBmcm9tIFwiLi9idW5kbGVXcmFwcGVyXCI7XG5cbi8vIFNldHMgZ2xvYmFsVGhpcy5yZXF1aXJlID0gLi4uLCB1dGlsaXppbmcgcmVnaXN0ZXJlZE1vZHVsZXMgKGZyb20gYnVuZGxlV3JhcHBlci50cykgd2hlbiByZXF1aXJlIGlzIGNhbGxlZFxuZXhwb3J0IGludGVyZmFjZSBCdW5kbGVSZXF1aXJlQ29uZmlnIHtcbiAgICByb290UGF0aDogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJ1bmRsZVJlcXVpcmUoY29uZmlnOiBCdW5kbGVSZXF1aXJlQ29uZmlnKSB7XG4gICAgZ2xvYmFsVGhpcy5wcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzIHx8IHtcbiAgICAgICAgZW52OiB7XG4gICAgICAgICAgICBOT0RFX0VOVjogXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnNpb25zOiB7fSxcbiAgICAgICAgb246ICgpID0+IHsgfSxcbiAgICB9O1xuICAgIC8vIFVzZSBwcm9kdWN0aW9uLCBmb3IgY29uc2lzdGVuY3kgKGFuZCBzbyBtb2J4IGRvZXNuJ3QgYnJlYWspXG4gICAgZ2xvYmFsVGhpcy5wcm9jZXNzLmVudi5OT0RFX0VOViA9IGdsb2JhbFRoaXMucHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJwcm9kdWN0aW9uXCI7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS53aW5kb3cgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLndpbmRvdyB8fCBnbG9iYWxUaGlzO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuZ2xvYmFsID0gKGdsb2JhbFRoaXMgYXMgYW55KS5nbG9iYWwgfHwgZ2xvYmFsVGhpcztcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLnNldEltbWVkaWF0ZSA9IChnbG9iYWxUaGlzIGFzIGFueSkuc2V0SW1tZWRpYXRlIHx8IGdsb2JhbFRoaXMuc2V0VGltZW91dDtcblxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuQk9PVEVEX0VER0VfTk9ERSA9IHVuZGVmaW5lZDtcblxuICAgIGxldCBidWlsdEluTW9kdWxlRXhwb3J0czogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0gPSB7XG4gICAgICAgIHdvcmtlcl90aHJlYWRzOiB7XG4gICAgICAgICAgICBpc01haW5UaHJlYWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHV0aWw6IHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvdXRpbC5odG1sI3V0aWxfdXRpbF9pbmhlcml0c19jb25zdHJ1Y3Rvcl9zdXBlcmNvbnN0cnVjdG9yXG4gICAgICAgICAgICBpbmhlcml0cyhjb25zdHJ1Y3RvcjogYW55LCBzdXBlckNvbnN0cnVjdG9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY29uc3RydWN0b3IucHJvdG90eXBlLCBzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVGV4dERlY29kZXI6IFRleHREZWNvZGVyLFxuICAgICAgICAgICAgVGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLFxuICAgICAgICB9LFxuICAgICAgICBidWZmZXI6IHsgQnVmZmVyIH0sXG4gICAgICAgIHN0cmVhbToge1xuICAgICAgICAgICAgLy8gSEFDSzogTmVlZGVkIHRvIGdldCBTQVggSlMgdG8gd29yayBjb3JyZWN0bHkuXG4gICAgICAgICAgICBTdHJlYW06IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIFRyYW5zZm9ybTogZnVuY3Rpb24gKCkgeyB9LFxuXG4gICAgICAgICAgICBXcml0YWJsZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICB9LFxuICAgICAgICB0aW1lcnM6IHtcbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCBhbGwgbWVtYmVycyBvZiB0aW1lcnNcbiAgICAgICAgICAgIHNldEltbWVkaWF0ZTogZ2xvYmFsVGhpcy5zZXRJbW1lZGlhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkX3Byb2Nlc3M6IHt9LFxuICAgICAgICBldmVudHM6IGNsYXNzIEV2ZW50RW1pdHRlciB7IH0sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHJlcXVpcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY29uc3QgYnVpbHRJblJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgICBsZXQgYWxsQnVpbHRJbk1vZHVsZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgYWxsQnVpbHRJbk1vZHVsZXMuYWRkKFwiZWxlY3Ryb25cIik7XG4gICAgICAgIGFsbEJ1aWx0SW5Nb2R1bGVzLmFkZChcIm9yaWdpbmFsLWZzXCIpO1xuICAgICAgICBhbGxCdWlsdEluTW9kdWxlcy5hZGQoXCJ2c2NvZGVcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGJ1aWx0cyBpbnMgdG8gdXNlIHRoZSBhY3R1YWwgYnVpbHQgaW5zIVxuICAgICAgICAgICAgbGV0IHsgYnVpbHRpbk1vZHVsZXMgfSA9IHJlcXVpcmUoXCJub2RlOm1vZHVsZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBidWlsdGluTW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGFsbEJ1aWx0SW5Nb2R1bGVzLmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHsgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBhbGxCdWlsdEluTW9kdWxlcykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGJ1aWx0SW5Nb2R1bGVFeHBvcnRzLCBrZXksIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsdEluUmVxdWlyZShrZXkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEp1c3QgcGF0aC5yZXNvbHZlIChidXQgbmVlZHMgdG8gYmUgcmVpbXBsZW1lbnRlZCwgYmVjYXVzZSB3ZSBjYW4ndCB1c2UgaW1wb3J0cylcbiAgICBmdW5jdGlvbiBwYXRoUmVzb2x2ZSguLi5wYXRoczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgICAgICAvLyBTdGFydCB3aXRoIGVtcHR5IHBhdGggc2VnbWVudHMgYXJyYXlcbiAgICAgICAgbGV0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgaXNXaW5kb3dzUGF0aCA9IGZhbHNlO1xuXG4gICAgICAgIHBhdGhzID0gcGF0aHMubWFwKHggPT4geC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKSk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBlYWNoIHBhdGggYXJndW1lbnRcbiAgICAgICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgV2luZG93cyBkcml2ZSBsZXR0ZXIgKGUuZy4sIEM6LylcbiAgICAgICAgICAgIGlmICgvXltBLVphLXpdOi8udGVzdChwYXRoKSkge1xuICAgICAgICAgICAgICAgIGlzV2luZG93c1BhdGggPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkcml2ZSBsZXR0ZXIgZm9yIHByb2Nlc3NpbmdcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRob3V0RHJpdmUgPSBwYXRoLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgIGlmICh3aXRob3V0RHJpdmUuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBbcGF0aC5zbGljZSgwLCAyKV07IC8vIEtlZXAgZHJpdmUgbGV0dGVyIGFuZCByZXNldCBzZWdtZW50c1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIGxlYWRpbmcgc2xhc2gsIGtlZXAgY3VycmVudCBzZWdtZW50cyAocmVsYXRpdmUgdG8gY3VycmVudCBkcml2ZSBwYXRoKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwIHx8ICFzZWdtZW50c1swXS5tYXRjaCgvXltBLVphLXpdOi8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IFtwYXRoLnNsaWNlKDAsIDIpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHJlc3Qgb2YgdGhlIHBhdGggcGFydHNcbiAgICAgICAgICAgICAgICBzZWdtZW50cy5wdXNoKC4uLndpdGhvdXREcml2ZS5zcGxpdChcIi9cIikuZmlsdGVyKHggPT4geCkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBhYnNvbHV0ZSBwYXRoLCByZXNldCBzZWdtZW50cyBidXQga2VlcCBkcml2ZSBsZXR0ZXIgaWYgcHJlc2VudFxuICAgICAgICAgICAgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dzUGF0aCAmJiBzZWdtZW50cy5sZW5ndGggPiAwICYmIHNlZ21lbnRzWzBdLm1hdGNoKC9eW0EtWmEtel06LykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJpdmUgPSBzZWdtZW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBbZHJpdmVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTcGxpdCBwYXRoIGludG8gc2VnbWVudHMgYW5kIHByb2Nlc3MgZWFjaFxuICAgICAgICAgICAgY29uc3QgcGF0aFBhcnRzID0gcGF0aC5zcGxpdChcIi9cIikuZmlsdGVyKHggPT4geCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGF0aFBhcnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQgPT09IFwiLi5cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBwb3Agb2ZmIHRoZSBkcml2ZSBsZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IChpc1dpbmRvd3NQYXRoID8gMSA6IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCAhPT0gXCIuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlZ21lbnQgaWYgbm90IGN1cnJlbnQgZGlyZWN0b3J5IG1hcmtlclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbWJpbmUgc2VnbWVudHMgaW50byBmaW5hbCBwYXRoXG4gICAgICAgIGxldCByZXN1bHQgPSBzZWdtZW50cy5qb2luKFwiL1wiKTtcbiAgICAgICAgaWYgKCFpc1dpbmRvd3NQYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBcIi9cIiArIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXJuYW1lKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBwYXRoLnNwbGl0KFwiL1wiKS5zbGljZSgwLCAtMSkuam9pbihcIi9cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWlyZUNhY2hlOiB7IFtpZDogc3RyaW5nXTogTm9kZUpTLk1vZHVsZSB9ID0ge307XG5cbiAgICBsZXQgcm9vdE1vZHVsZSA9IGNyZWF0ZU1vZHVsZSh7XG4gICAgICAgIHBhcmVudE1vZHVsZTogdW5kZWZpbmVkLFxuICAgICAgICByZXNvbHZlQWJzb2x1dGVQYXRoOiBjb25maWcucm9vdFBhdGggKyBcIi9yb290UGxhY2Vob2xkZXJcIixcbiAgICB9KTtcbiAgICBnbG9iYWxUaGlzLnJlcXVpcmUgPSByb290TW9kdWxlLnJlcXVpcmUgYXMgYW55O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kdWxlKGNvbmZpZzoge1xuICAgICAgICBwYXJlbnRNb2R1bGU6IE5vZGVKUy5Nb2R1bGUgfCB1bmRlZmluZWQ7XG4gICAgICAgIHJlc29sdmVBYnNvbHV0ZVBhdGg6IHN0cmluZztcbiAgICB9KTogTm9kZUpTLk1vZHVsZSB7XG4gICAgICAgIGNvbnN0IHsgcGFyZW50TW9kdWxlLCByZXNvbHZlQWJzb2x1dGVQYXRoIH0gPSBjb25maWc7XG4gICAgICAgIGxldCBjYWNoZWQgPSByZXF1aXJlQ2FjaGVbcmVzb2x2ZUFic29sdXRlUGF0aF07XG4gICAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlcmlhbGl6ZWQgPSBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzPy5bcmVzb2x2ZUFic29sdXRlUGF0aF07XG5cbiAgICAgICAgbGV0IG5ld01vZHVsZTogTm9kZUpTLk1vZHVsZSA9IHtcbiAgICAgICAgICAgIGlkOiByZXNvbHZlQWJzb2x1dGVQYXRoLFxuICAgICAgICAgICAgZmlsZW5hbWU6IHJlc29sdmVBYnNvbHV0ZVBhdGgsXG4gICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50TW9kdWxlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgaXNQcmVsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBwYXRoOiBkaXJuYW1lKHJlc29sdmVBYnNvbHV0ZVBhdGgpLFxuICAgICAgICAgICAgcGF0aHM6IHNlcmlhbGl6ZWQ/LnBhdGhzIHx8IFtdLFxuICAgICAgICAgICAgcmVxdWlyZTogcmVxdWlyZUZuYyxcbiAgICAgICAgICAgIGxvYWQsXG4gICAgICAgIH0gYXMgYW55O1xuICAgICAgICBuZXdNb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbmV3TW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHBhcmVudE1vZHVsZS5jaGlsZHJlbi5wdXNoKG5ld01vZHVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNlcmlhbGl6ZWQ/Lm1vZHVsZUZpZWxkcyB8fCB7fSkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gbmV3TW9kdWxlKSBjb250aW51ZTtcbiAgICAgICAgICAgIChuZXdNb2R1bGUgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZS5wYXRocyA9IChyZXF1ZXN0OiBzdHJpbmcpID0+IFtdO1xuXG4gICAgICAgIHJlcXVpcmVDYWNoZVtuZXdNb2R1bGUuaWRdID0gbmV3TW9kdWxlO1xuICAgICAgICByZXF1aXJlRm5jLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICByZXF1aXJlRm5jLmNhY2hlID0gcmVxdWlyZUNhY2hlO1xuICAgICAgICByZXF1aXJlRm5jLm1haW4gPSBuZXdNb2R1bGU7XG4gICAgICAgIHJlcXVpcmVGbmMuZXh0ZW5zaW9ucyA9IFwiZXh0ZW5zaW9uIG5vdCBpbXBsZW1lbnRlZCB5ZXRcIiBhcyBhbnk7XG5cbiAgICAgICAgLy8gUmVzb2x2ZXMgZmlsZSBleHRlbnNpb25zXG4gICAgICAgIGZ1bmN0aW9uIGlubmVyUmVzb2x2ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBwYXRoICsgXCIuanNcIixcbiAgICAgICAgICAgICAgICBwYXRoICsgXCIudHNcIixcbiAgICAgICAgICAgICAgICBwYXRoICsgXCIudHN4XCIsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgZm9yIChsZXQgY2FuZGlkYXRlIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVnaXN0ZXJlZCA9IGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXM/LltjYW5kaWRhdGVdO1xuICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWdpc3RlcmVkLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XG4gICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiLlwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbm5lclJlc29sdmUocGF0aFJlc29sdmUobmV3TW9kdWxlLnBhdGgsIHBhdGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gc2VhcmNoIGFsbCBwYXRoc1xuICAgICAgICAgICAgZm9yIChsZXQgc2VhcmNoUm9vdCBvZiBzZXJpYWxpemVkPy5wYXRocyB8fCBbXSkge1xuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGUgPSBpbm5lclJlc29sdmUocGF0aFJlc29sdmUoc2VhcmNoUm9vdCwgcGF0aCkpO1xuICAgICAgICAgICAgICAgIGxldCByZWdpc3RlcmVkID0gZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcz8uW2NhbmRpZGF0ZV07XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSXQgaXMgcHJvYmFibHkgXCJmc1wiIG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYE1vZHVsZSAke3BhdGh9IG5vdCBmb3VuZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVxdWlyZUZuYyhwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGlmIChwYXRoIGluIGJ1aWx0SW5Nb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWx0SW5Nb2R1bGVFeHBvcnRzW3BhdGggYXMga2V5b2YgdHlwZW9mIGJ1aWx0SW5Nb2R1bGVFeHBvcnRzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXNvbHZlZCA9IHJlc29sdmUocGF0aCk7XG4gICAgICAgICAgICBsZXQgc3ViTW9kdWxlID0gY3JlYXRlTW9kdWxlKHtcbiAgICAgICAgICAgICAgICBwYXJlbnRNb2R1bGU6IG5ld01vZHVsZSxcbiAgICAgICAgICAgICAgICByZXNvbHZlQWJzb2x1dGVQYXRoOiByZXNvbHZlZCxcbiAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICAgIHN1Yk1vZHVsZS5sb2FkKG5ld01vZHVsZS5maWxlbmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gc3ViTW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICAgICAgaWYgKG5ld01vZHVsZS5sb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgIC8vIE5PVEU6IFNldCBsb2FkZWQgaW1tZWRpYXRlbHksIGluIGNhc2Ugd2UgaGF2ZSBhIGNpcmN1bGFyIGRlcGVuZGVuY3lcbiAgICAgICAgICAgIG5ld01vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoc2VyaWFsaXplZCkge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQubW9kdWxlRm5jKG5ld01vZHVsZS5leHBvcnRzLCByZXF1aXJlRm5jLCBuZXdNb2R1bGUsIG5ld01vZHVsZS5maWxlbmFtZSwgbmV3TW9kdWxlLnBhdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhcmUgYmVpbmcgaW1wb3J0ZWQgYnkgdGhlIHJvb3QgbW9kdWxlLCB3ZSBuZWVkIHRvIHRocm93IGFuIGVycm9yXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcucGFyZW50TW9kdWxlPy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgcmVxdWlyZWQgbW9kdWxlICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnLnJlc29sdmVBYnNvbHV0ZVBhdGgpfSwgaGF2ZSAke0pTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXMgfHwge30pKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3TW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJveHkoXG4gICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImRlZmF1bHRcIikgcmV0dXJuIG5ld01vZHVsZS5leHBvcnRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTW9kdWxlICR7bmV3TW9kdWxlLmZpbGVuYW1lfSBpcyBub3QgYXZhaWxhYmxlLiBJdCBtaWdodCBoYXZlIG5vdCBiZWVuIGltcG9ydGVkIGluIE5vZGUuanMgZHVlIHRvIGEgZmxhZyB3aGljaCBpcyBjaGVja2luZyB0aGUgYnJvd3NlciBvciBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZS4gSXQgbWlnaHQgYWxzbyBiZSB0aGF0IHRoZSBlbnRyeSBwb2ludCBpcyB3ZWlyZGx5IGNvbmZpZ3VyZWQgYW5kIGNvdWxkIG5vdCBiZSBkZXRlY3RlZC5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3TW9kdWxlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjYWNoZSB9IGZyb20gXCJzb2NrZXQtZnVuY3Rpb24vc3JjL2NhY2hpbmdcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmNvbnN0IGdldFBhY2thZ2VKc29uUGF0aCA9IGNhY2hlKChkaXJlY3Rvcnk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgaWYgKCFkaXJlY3RvcnkuaW5jbHVkZXMoXCIvXCIpICYmICFkaXJlY3RvcnkuaW5jbHVkZXMoXCJcXFxcXCIpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBwYWNrYWdlSnNvblBhdGggPSBwYXRoLnJlc29sdmUoZGlyZWN0b3J5LCBcInBhY2thZ2UuanNvblwiKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwYWNrYWdlSnNvblBhdGgpKSB7XG4gICAgICAgIHJldHVybiBwYWNrYWdlSnNvblBhdGg7XG4gICAgfVxuICAgIHJldHVybiBnZXRQYWNrYWdlSnNvblBhdGgocGF0aC5kaXJuYW1lKGRpcmVjdG9yeSkpO1xufSk7XG5jb25zdCBnZXRNYWluUGF0aCA9IGNhY2hlKChkaXJlY3Rvcnk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgbGV0IHBhY2thZ2VKc29uUGF0aCA9IGdldFBhY2thZ2VKc29uUGF0aChkaXJlY3RvcnkpO1xuICAgIGlmICghcGFja2FnZUpzb25QYXRoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGxldCBwYWNrYWdlSnNvbiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhY2thZ2VKc29uUGF0aCwgXCJ1dGY4XCIpKSBhcyB7XG4gICAgICAgIG1haW4/OiBzdHJpbmc7XG4gICAgICAgIGV4cG9ydHM/OiB7XG4gICAgICAgICAgICBcIi5cIj86IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlPzogc3RyaW5nO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGxldCBkaXIgPSBwYXRoLmRpcm5hbWUocGFja2FnZUpzb25QYXRoKTtcbiAgICBsZXQgbWFpbk5hbWUgPSBwYWNrYWdlSnNvbi5leHBvcnRzPy5bXCIuXCJdPy5yZXF1aXJlIHx8IHBhY2thZ2VKc29uLm1haW47XG4gICAgaWYgKCFtYWluTmFtZSkge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUoZGlyLCBcImluZGV4LmpzXCIpKSkge1xuICAgICAgICAgICAgbWFpbk5hbWUgPSBcImluZGV4LmpzXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUoZGlyLCBcImluZGV4LnRzXCIpKSkge1xuICAgICAgICAgICAgbWFpbk5hbWUgPSBcImluZGV4LnRzXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUoZGlyLCBcImluZGV4LnRzeFwiKSkpIHtcbiAgICAgICAgICAgIG1haW5OYW1lID0gXCJpbmRleC50c3hcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5OYW1lID0gXCJpbmRleC5qc1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEhhbmRsZSB0aGUgbmVnYXRpdmUgdmFsdWUgRVNNIGV4cG9ydHMgdGhpbmcuXG4gICAgbGV0IG1haW5QYXRoID0gcGF0aC5yZXNvbHZlKGRpciwgbWFpbk5hbWUpO1xuICAgIHJldHVybiBtYWluUGF0aDtcbn0pO1xuXG5cbi8vIFdyYXBzIHRoZSBtb2R1bGUgc28gaXQgcmVnaXN0ZXJzIGl0c2VsZiB3aGVuIHRoZSByZXR1cm5lZCBjb2RlIGlzIGV2YWx1YXRlZFxuLy8gIC0gU2VlIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvbW9kdWxlcy5odG1sI3RoZS1tb2R1bGUtd3JhcHBlclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNb2R1bGUobW9kdWxlOiBOb2RlSlMuTW9kdWxlKTogc3RyaW5nIHtcbiAgICBsZXQgY29udGVudHMgPSAobW9kdWxlIGFzIGFueSkubW9kdWxlQ29udGVudHMgfHwgXCIvKiBObyBjb250ZW50cyAqL1wiO1xuXG4gICAgLy8gTk9URTogZGVidWdOYW1lIG9ubHkgbWF0dGVycyBkdXJpbmcgbW9kdWxlIGV2YWx1YXRpb24uIEFmdGVyIHRoYXQgdGhlIHNvdXJjZW1hcCBzaG91bGQgd29yay5cbiAgICBsZXQgZGVidWdOYW1lID0gbW9kdWxlLmZpbGVuYW1lXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKVxuICAgICAgICAuc3BsaXQoXCIvXCIpXG4gICAgICAgIC5zbGljZSgtMSlbMF1cbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCBcIl9cIilcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aX10vZywgXCJcIik7XG5cbiAgICBsZXQgd3JhcHBlZCA9IGAoZnVuY3Rpb24gJHtkZWJ1Z05hbWV9KGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7ICR7Y29udGVudHN9XG4gICAgfSlgO1xuXG4gICAgbGV0IG1vZHVsZUZpZWxkczogeyBbZmxhZzogc3RyaW5nXTogdW5rbm93bjsgfSA9IHt9O1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtb2R1bGUpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICBtb2R1bGVGaWVsZHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZS5sZW5ndGggPCAxNTApIHtcbiAgICAgICAgICAgIG1vZHVsZUZpZWxkc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBtb2R1bGVGaWVsZHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1vZHVsZU1haW46IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBsZXQgZGlybmFtZSA9IHBhdGguZGlybmFtZShtb2R1bGUuZmlsZW5hbWUpO1xuICAgIGxldCBwYWNrYWdlSnNvblBhdGggPSBnZXRQYWNrYWdlSnNvblBhdGgoZGlybmFtZSk7XG4gICAgaWYgKHBhY2thZ2VKc29uUGF0aCkge1xuICAgICAgICBsZXQgbWFpblBhdGggPSBnZXRNYWluUGF0aChkaXJuYW1lKTtcbiAgICAgICAgaWYgKG1haW5QYXRoPy5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikgPT09IG1vZHVsZS5maWxlbmFtZS5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpIHtcbiAgICAgICAgICAgIC8vIFRoZW4gd2UgYXJlIHRoZSBtYWluIG9mIHRoZSBtb2R1bGVcbiAgICAgICAgICAgIG1vZHVsZU1haW4gPSBwYXRoLmRpcm5hbWUocGFja2FnZUpzb25QYXRoKS5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOT1RFOiBXZSBjYW4ndCBoYXZlIG5ldyBsaW5lcywgb3IgdGhleSBicmVhayBzb3VyY2UgbWFwc1xuICAgIGxldCBvYmpXcmFwcGVkID0gYHtgXG4gICAgICAgICsgYCBpZDogJHtKU09OLnN0cmluZ2lmeShtb2R1bGUuaWQucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpKX0sYFxuICAgICAgICArIGAgZmlsZW5hbWU6ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlLmZpbGVuYW1lLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSl9LGBcbiAgICAgICAgKyBgIGlzTW9kdWxlTWFpbjogJHtKU09OLnN0cmluZ2lmeShtb2R1bGVNYWluKX0sYFxuICAgICAgICArIGAgcGF0aHM6ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlLnBhdGhzLm1hcChwID0+IHAucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpKSl9LGBcbiAgICAgICAgKyBgIG1vZHVsZUZpZWxkczogJHtKU09OLnN0cmluZ2lmeShtb2R1bGVGaWVsZHMpfSxgXG4gICAgICAgICsgYCBtb2R1bGVGbmM6ICR7d3JhcHBlZH1gXG4gICAgICAgICsgYCB9YDtcblxuICAgIGZ1bmN0aW9uIGluaXRNb2R1bGUoc2VyaWFsaXplZDogU2VyaWFsaXplZE1vZHVsZSkge1xuICAgICAgICBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzID0gZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcyB8fCB7fTtcbiAgICAgICAgZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlc1tzZXJpYWxpemVkLmlkXSA9IHNlcmlhbGl6ZWQ7XG4gICAgICAgIGlmIChzZXJpYWxpemVkLmlzTW9kdWxlTWFpbikge1xuICAgICAgICAgICAgZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlc1tzZXJpYWxpemVkLmlzTW9kdWxlTWFpbl0gPSBzZXJpYWxpemVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGA7KCR7aW5pdE1vZHVsZS50b1N0cmluZygpLnJlcGxhY2VBbGwoXCJcXG5cIiwgXCIgXCIpfSkoJHtvYmpXcmFwcGVkfSk7YDtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciByZWdpc3RlcmVkTW9kdWxlczogeyBbaWQ6IHN0cmluZ106IFNlcmlhbGl6ZWRNb2R1bGU7IH0gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXplZE1vZHVsZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBmaWxlbmFtZTogc3RyaW5nO1xuXG4gICAgLy8gVGhlIG1haW4gbWFpbiB3ZSByZXByZXNlbnQuIEV4LCBcIi9haTMvbm9kZV9tb2R1bGVzL3R5cGVzYWZlY3NzXCJcbiAgICBpc01vZHVsZU1haW4/OiBzdHJpbmc7XG5cbiAgICAvLyBQYXRocyB3aGljaCB0aGUgcmVxdWlyZSBmdW5jdGlvbiBzZWFyY2hlcyBmb3Igbm9uLXJlbGF0aXZlIGltcG9ydHNcbiAgICBwYXRoczogc3RyaW5nW107XG5cbiAgICAvLyBGaWVsZHMgdG8gYmUgc2V0IG9uIHRoZSBtb2R1bGUsIHdoZW4gaXQgaXMgY3JlYXRlZFxuICAgIG1vZHVsZUZpZWxkczogeyBbZmxhZzogc3RyaW5nXTogdW5rbm93bjsgfTtcblxuICAgIG1vZHVsZUZuYzogKGV4cG9ydHM6IGFueSwgcmVxdWlyZTogYW55LCBtb2R1bGU6IGFueSwgX19maWxlbmFtZTogc3RyaW5nLCBfX2Rpcm5hbWU6IHN0cmluZykgPT4gdW5rbm93bjtcbn0iLCJpbXBvcnQgeyBhcnJheUVxdWFsIH0gZnJvbSBcIi4vbWlzY1wiO1xuaW1wb3J0IHsgQW55RnVuY3Rpb24sIEFyZ3MsIGNhbkhhdmVDaGlsZHJlbiB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5PFQ+KGZhY3Rvcnk6ICgpID0+IFQpIHtcbiAgICBsZXQgdmFsdWU6IHsgdmFsdWU6IFQgfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0geyB2YWx1ZTogZmFjdG9yeSgpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlO1xuICAgIH07XG4gICAgZ2V0LnJlc2V0ID0gKCkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIGdldC5zZXQgPSAobmV3VmFsdWU6IFQpID0+IHtcbiAgICAgICAgdmFsdWUgPSB7IHZhbHVlOiBuZXdWYWx1ZSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGdldDtcbn1cblxuLy8gTk9URTogVGhlIHJlYXNvbiB3ZSBuZWVkIHRvIHBlcmlvZGljYWxseSBjbGVhciwgaXMgYmVjYXVzZSBzb21ldGltZXMgYSB2ZXJ5IHNtYWxsXG4vLyAgICAgIHBhcnQgb2YgYSBsYXJnZSBwYXlsb2FkIChleCwgcGVyc2lzdGVkIG92ZXJyaWRlcykgaXMgY2FjaGVkLCB3aGljaCB0aGVuIHJlc3VsdHNcbi8vICAgICAgaW4gdGhlIHdob2xlIHBheWxvYWQgYmVpbmcgY2FjaGVkLCB3aGljaCByZXN1bHRzIGluIGEgbG90IG9mIG1lbW9yeSBiZWluZyB1c2VkLlxuXG4vLyBJTVBPUlRBTlQhIFRoZSBjbGVhbnVwIGZ1bmN0aW9ucyBDQU5OT1QgY2xvc2UgdXBvbiBhbnl0aGluZywgb3IgZWxzZSB0aGV5IHdpbGwgY2F1c2UgbGVha3MhXG4vLyAgQWxsIGRhdGEgdGhleSB1c2Ugc2hvdWxkIGJlIGluIGRhdGEuXG5pbnRlcmZhY2UgQ2xlYW51cEZuYzxUIGV4dGVuZHMgb2JqZWN0PiB7XG4gICAgKGRhdGE6IFQpOiB2b2lkO1xufVxuXG5cbi8vIE5PVEU6IEVtcHR5IGFycmF5cyBhcmUgc28gY29tbW9uLCB0aGF0IGl0IGlzIHVzZWZ1bCB0byByZXByZXNlbnQgdGhlbSBhcyB0aGUgc2FtZVxuLy8gIGVtdHB5IGFycmF5LCB0byBpbmNyZWFzZSBjYWNoZSBoaXQgcmF0ZXMuXG5jb25zdCBlbXB0eUFycmF5OiBhbnlbXSA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlRW1wdHlBcnJheTxUPihhcnJheTogVFtdKTogVFtdIHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gZW1wdHlBcnJheTtcbiAgICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZTxPdXRwdXQsIEtleSwgVW50cmFja2VkIGV4dGVuZHMgdW5rbm93bltdPihcbiAgICBnZXRWYWx1ZTogKGtleTogS2V5LCAuLi51bnRyYWNrZWQ6IFVudHJhY2tlZCkgPT4gT3V0cHV0XG4pOiB7XG4gICAgKGtleTogS2V5LCAuLi51bnRyYWNrZWQ6IFVudHJhY2tlZCk6IE91dHB1dDtcbiAgICAvLyBOT1RFOiBJZiB5b3Ugd2FudCB0byBjbGVhciBhbGwsIGp1c3QgbWFrZSBhIG5ldyBjYWNoZSFcbiAgICBjbGVhcihrZXk6IEtleSk6IHZvaWQ7XG4gICAgY2xlYXJBbGwoKTogdm9pZDtcbiAgICBmb3JjZVNldChrZXk6IEtleSwgdmFsdWU6IE91dHB1dCk6IHZvaWQ7XG4gICAgZ2V0QWxsS2V5cygpOiBLZXlbXTtcbiAgICBnZXQoa2V5OiBLZXkpOiBPdXRwdXQgfCB1bmRlZmluZWQ7XG59IHtcbiAgICBsZXQgc3RhcnRpbmdDYWxjdWxhdGluZyA9IG5ldyBTZXQ8S2V5PigpO1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgTWFwPEtleSwgT3V0cHV0PigpO1xuICAgIGZ1bmN0aW9uIGNhY2hlKGlucHV0OiBLZXksIC4uLnVudHJhY2tlZDogVW50cmFja2VkKSB7XG4gICAgICAgIGxldCBrZXkgPSBpbnB1dDtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5nZXQoa2V5KSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0aW5nQ2FsY3VsYXRpbmcuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEZpeCB0aGUgdHlwZXMgaGVyZSwgYnkgdGhyb3dpbmcsIGFuZCB0aGVuIGZvciB0aGUgY2FzZXNcbiAgICAgICAgICAgIC8vICB0aGF0IGRvbid0IHRocm93LCBtYWtlIG91ciBvdXRwdXQgdHlwZSBpbmNsdWRlIHVuZGVmaW5lZFxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmFkZChrZXkpO1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZShpbnB1dCwgLi4udW50cmFja2VkKTtcbiAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjYWNoZS5jbGVhciA9IChrZXk6IEtleSkgPT4ge1xuICAgICAgICB2YWx1ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuZGVsZXRlKGtleSk7XG4gICAgfTtcbiAgICBjYWNoZS5mb3JjZVNldCA9IChrZXk6IEtleSwgdmFsdWU6IE91dHB1dCkgPT4ge1xuICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmFkZChrZXkpO1xuICAgIH07XG4gICAgY2FjaGUuZ2V0QWxsS2V5cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi52YWx1ZXMua2V5cygpXTtcbiAgICB9O1xuICAgIGNhY2hlLmdldCA9IChrZXk6IEtleSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWVzLmdldChrZXkpO1xuICAgIH07XG4gICAgY2FjaGUuY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIHZhbHVlcy5jbGVhcigpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmNsZWFyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gY2FjaGU7XG59XG5cblxuLyoqIE1ha2VzIGEgY2FjaGUgdGhhdCBsaW1pdHMgdGhlIG51bWJlciBvZiBlbnRyaWVzLCBhbGxvd2luZyB5b3UgdG8gcHV0IGFyYml0cmFyeSBkYXRhIGluIGl0XG4gKiAgICAgIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgbGVha2luZyBtZW1vcnlcbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUxpbWl0ZWQ8T3V0cHV0LCBLZXk+KFxuICAgIC8vIE5PVEU6IFdlIGNhbid0IGNhbGN1bGF0ZSB3aGF0IGxpbWl0IHNob3VsZCBiZSBiYXNlZCBvbiBjb21wYXJpbmcgdGhlIGV2YWx1YXRpb24gdGltZVxuICAgIC8vICBhbmQgdGhlIHRpbWUgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSB2YWx1ZXMuIEJlY2F1c2UsIGV2ZW4gaWYgZmluZGluZyBhIG1hdGNoIHRha2VzIGZhciBsb25nZXIgdGhhblxuICAgIC8vICBjYWxjdWxhdGluZywga2VlcGluZyBhIGNvbnNpc3RlbnQgb3V0cHV0IGNhbiBzYXZlIChhIGNvbnNpZGVyYWJsZSBhbW91bnQgb2YpIHRpbWUgaW4gZG93bnN0cmVhbSBjYWNoZXMuXG4gICAgbWF4Q291bnQ6IG51bWJlcixcbiAgICBnZXRWYWx1ZTogKGtleTogS2V5KSA9PiBPdXRwdXRcbikge1xuICAgIGxldCBzdGFydGluZ0NhbGN1bGF0aW5nID0gbmV3IFNldDxLZXk+KCk7XG4gICAgbGV0IHZhbHVlcyA9IG5ldyBNYXA8S2V5LCBPdXRwdXQ+KCk7XG4gICAgZnVuY3Rpb24gZ2V0KGlucHV0OiBLZXkpOiBPdXRwdXQge1xuICAgICAgICBsZXQga2V5ID0gaW5wdXQ7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuZ2V0KGtleSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGluZ0NhbGN1bGF0aW5nLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEN5Y2xpYyBhY2Nlc3MgaW4gY2FjaGVgKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmFkZChrZXkpO1xuXG4gICAgICAgIC8vIENsZWFyIHdoZW4gaXQgZ2V0cyB0b28gYmlnLiBUaGlzIGlzIGtpbmQgb2YgbGlrZSBhIHdvcnNlXG4gICAgICAgIC8vICBsZWFzdCByZWNlbnRseSB1c2VkIGNhY2hlLCBiZWNhdXNlIGVudHJpZXMgdGhhdCBhcmUgYWNjZXNzZWRcbiAgICAgICAgLy8gIG9mdGVuIHdpbGwgcXVpY2tseSBnZXQgcHV0IGJhY2sgaW4uIFRoaXMgaXMgZWZmZWN0aXZlIGFzIGxvbmdcbiAgICAgICAgLy8gIGFzIGFjY2Vzc2VzIHRha2Ugc2ltaWxhciBhbW91bnRzIG9mIHRpbWUuIElmIHRoZXJlIGlzIGEgdmVyeSBzbG93XG4gICAgICAgIC8vICBhbmQgdmVyeSBjb21tb25seSBhY2Nlc3NlZCB2YWx1ZSwgaXQgY291bGQgYmUgZXZpY3RlZCBieSBtYW55IHZlcnlcbiAgICAgICAgLy8gIGZhc3QgYWNjZXNzZXMsIHdoaWNoIHdvdWxkIGJlIHVuZm9ydHVuYXRlLlxuICAgICAgICBpZiAodmFsdWVzLnNpemUgPj0gbWF4Q291bnQpIHtcbiAgICAgICAgICAgIHZhbHVlcy5jbGVhcigpO1xuICAgICAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoaW5wdXQpO1xuICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGdldFtcImZvcmNlU2V0XCJdID0gKGtleTogS2V5LCB2YWx1ZTogT3V0cHV0KSA9PiB7XG4gICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuYWRkKGtleSk7XG4gICAgfTtcbiAgICBnZXRbXCJjbGVhcktleVwiXSA9IChrZXk6IEtleSkgPT4ge1xuICAgICAgICB2YWx1ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuZGVsZXRlKGtleSk7XG4gICAgfTtcbiAgICBnZXRbXCJjbGVhclwiXSA9ICgpID0+IHtcbiAgICAgICAgdmFsdWVzLmNsZWFyKCk7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuY2xlYXIoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlV2VhazxPdXRwdXQsIEtleSBleHRlbmRzIG9iamVjdD4oZ2V0VmFsdWU6IChrZXk6IEtleSkgPT4gT3V0cHV0KTogKGtleTogS2V5KSA9PiBPdXRwdXQge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZzogbmV3IFdlYWtTZXQ8S2V5PigpLFxuICAgICAgICB2YWx1ZXM6IG5ldyBXZWFrTWFwPEtleSwgT3V0cHV0PigpLFxuICAgIH07XG5cbiAgICByZXR1cm4gKGlucHV0KSA9PiB7XG4gICAgICAgIGxldCBrZXkgPSBpbnB1dDtcbiAgICAgICAgaWYgKHN0YXRlLnZhbHVlcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnZhbHVlcy5nZXQoa2V5KSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnN0YXJ0aW5nQ2FsY3VsYXRpbmcuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3ljbGljIGFjY2VzcyBpbiBjYWNoZVdlYWtgKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5zdGFydGluZ0NhbGN1bGF0aW5nLmFkZChrZXkpO1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZShpbnB1dCk7XG4gICAgICAgIHN0YXRlLnZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xufVxuXG4vLyBBIGxpc3QgY2FjaGUsIHdoaWNoLi4uIG1heWJlIGZhc3RlciB0aGFuIGEgTWFwP1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlTGlzdDxWYWx1ZT4oXG4gICAgZ2V0TGVuZ3RoOiAoKSA9PiBudW1iZXIsXG4gICAgZ2V0VmFsdWU6IChpbmRleDogbnVtYmVyKSA9PiBWYWx1ZSxcbik6IHsgKGluZGV4OiBudW1iZXIpOiBWYWx1ZTsgfSB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBjYWNoZTogW10gYXMgVmFsdWVbXSxcbiAgICAgICAgbGVuZ3RoOiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXQoaTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjYWNoZSA9IHN0YXRlLmNhY2hlO1xuICAgICAgICBsZXQgbGVuZ3RoID0gc3RhdGUubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHN0YXRlLmxlbmd0aCA9IHN0YXRlLmdldExlbmd0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgMCB8fCBpID49IGxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbmRleCBvdXQgb2YgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoaSBpbiBjYWNoZSkpIHtcbiAgICAgICAgICAgIGNhY2hlW2ldID0gZ2V0VmFsdWUoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlW2ldO1xuICAgIH07XG4gICAgcmV0dXJuIGdldDtcbn1cblxuZnVuY3Rpb24gY2FjaGVBcnJheUVxdWFsQ2xlYW51cChzdGF0ZTogYW55KSB7XG4gICAgc3RhdGUuY2FjaGUgPSBbXTtcbn1cblxuLyoqIEEgY2FjaGUgaGFsZiB3YXkgYmV0d2VlbiBjYWNoaW5nIGJhc2VkIG9uID09PSBhbmQgY2FjaGluZyBiYXNlZCBvbiBoYXNoLiBDYWNoZXNcbiAqICAgICAgYmFzZWQgb24gYXJyYXlFcXVhbCwgd2hpY2ggZG9lcyA9PT0gb24gYWxsIHZhbHVlcyBpbiBhbiBhcnJheS4gUmVxdWlyZXMgbG9jYWxpemVkXG4gKiAgICAgIGNhY2hpbmcgKGFzIHRoZSBjb21wYXJpc29ucyBkb24ndCBzY2FsZSB3aXRoIG1hbnkgY2FuZGlkYXRlcywgdW5saWtlIGhhc2hpbmcpLFxuICogICAgICBob3dldmVyIHdvcmtzIHdpdGggbm9uIHRyaXZhbCB0cmFuc2Zvcm1hdGlvbnMgKGV4LCByZXNvbHZpbmcgbWFueSBwZXJzaXN0ZWQgb3ZlcnJpZGVzXG4gKiAgICAgIHRvIGdldCBhIHZhbHVlKSwgdW5saWtlIGNhY2hlKCkuXG4gKiAgQWxzbywgbGltaXRzIGl0c2VsZiwgbW9yZSBvZiBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0aGFuIG1lbW9yeSBvcHRpbWl6YXRpb24sIGFzIGl0IHNjYWxlc1xuICogICAgICB2ZXJ5IHBvb3JseSB3aXRoIHRoZSBudW1iZXIgb2YgY2FuZGlkYXRlcy5cbiAqICBcbiAqICBUSU1JTkc6IEFib3V0IDZ1cyB3aXRoIGxpbWl0ID0gMTAwLCBhcnJheSBzaXplID0gMjk0LCBhbmQgdGhlIGNhY2hlIGJlaW5nIGZ1bGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUFycmF5RXF1YWw8SW5wdXQgZXh0ZW5kcyB1bmtub3duW10gfCB1bmRlZmluZWQsIE91dHB1dD4oXG4gICAgbWFwOiAoYXJyYXlzOiBJbnB1dCkgPT4gT3V0cHV0LFxuICAgIGxpbWl0ID0gMTBcbik6IHtcbiAgICAoYXJyYXk6IElucHV0KTogT3V0cHV0O1xuICAgIGNsZWFyKGFycmF5OiBJbnB1dCk6IHZvaWQ7XG4gICAgY2xlYXJBbGwoKTogdm9pZDtcbn0ge1xuICAgIGxldCBzdGF0ZToge1xuICAgICAgICBjYWNoZToge1xuICAgICAgICAgICAgaW5wdXQ6IElucHV0O1xuICAgICAgICAgICAgb3V0cHV0OiBPdXRwdXQ7XG4gICAgICAgIH1bXVxuICAgIH0gPSB7IGNhY2hlOiBbXSB9O1xuICAgIGZ1bmN0aW9uIGlzTWF0Y2gobGhzOiBJbnB1dCwgcmhzOiBJbnB1dCkge1xuICAgICAgICBpZiAobGhzID09PSByaHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaHMgPT09IHVuZGVmaW5lZCB8fCByaHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJheUVxdWFsKGxocywgcmhzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgKGlucHV0OiBJbnB1dCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhY2hlID0gc3RhdGUuY2FjaGU7XG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2YgY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaChvYmouaW5wdXQsIGlucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLm91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gbWFwKGlucHV0KTtcbiAgICAgICAgICAgIGNhY2hlLnVuc2hpZnQoeyBpbnB1dCwgb3V0cHV0IH0pO1xuICAgICAgICAgICAgd2hpbGUgKGNhY2hlLmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgY2FjaGUucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhcihhcnJheTogSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhdGUuY2FjaGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2goc3RhdGUuY2FjaGVbaV0uaW5wdXQsIGFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2FjaGUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyQWxsKCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNhY2hlID0gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuLyoqIENhY2hlcyB3aGVuIGFyZ3VtZW50cyBhcmUgPT09LiBTZWUgY2FjaGVBcnJheUVxdWFsICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVBcmdzRXF1YWw8Rm5jIGV4dGVuZHMgQW55RnVuY3Rpb24+KFxuICAgIGZuYzogRm5jLFxuICAgIGxpbWl0ID0gMTBcbik6IEZuYyAmIHsgY2xlYXIoLi4uYXJnczogQXJnczxGbmM+KTogdm9pZCB9IHtcbiAgICBsZXQgY2FjaGUgPSBjYWNoZUFycmF5RXF1YWwoZnVuY3Rpb24gY2FjaGVBcmdzRXF1YWwoYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgIHJldHVybiBmbmMoLi4uYXJncyk7XG4gICAgfSwgbGltaXQpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlKGFyZ3MpO1xuICAgICAgICB9KSBhcyBGbmMsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFyKC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyKGFyZ3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUpTT05BcmdzRXF1YWw8Rm5jIGV4dGVuZHMgQW55RnVuY3Rpb24+KFxuICAgIGZuYzogRm5jLFxuICAgIGxpbWl0ID0gMTBcbikge1xuICAgIGxldCBjYWNoZSA9IGNhY2hlTGltaXRlZChsaW1pdCwgKGFyZ3NKU09OOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGZuYyguLi5KU09OLnBhcnNlKGFyZ3NKU09OKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICgoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUoSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgICAgICB9KSBhcyBGbmMsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFyKC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyS2V5KEpTT04uc3RyaW5naWZ5KGFyZ3MpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlU2hhbGxvd0NvbmZpZ0FyZ0VxdWFsPEZuYyBleHRlbmRzIEFueUZ1bmN0aW9uPihcbiAgICBmbmM6IEZuYyxcbiAgICBsaW1pdCA9IDEwXG4pOiBGbmMgJiB7XG4gICAgY2xlYXIoY29uZmlnT2JqOiBBcmdzPEZuYz5bMF0pOiB2b2lkO1xuICAgIGNsZWFyQWxsKCk6IHZvaWQ7XG59IHtcbiAgICBsZXQgY2FjaGUgPSBjYWNoZUFycmF5RXF1YWwoKGt2cHNGbGF0OiB1bmtub3duW10pID0+IHtcbiAgICAgICAgb3V0cHV0Lm1pc3NDb3VudCsrO1xuICAgICAgICBsZXQgYXJnOiBhbnk7XG4gICAgICAgIGlmIChrdnBzRmxhdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGFyZyA9IGt2cHNGbGF0WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGt2cHM6IFt1bmtub3duLCB1bmtub3duXVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGt2cHNGbGF0Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAga3Zwcy5wdXNoKFtrdnBzRmxhdFtpXSwga3Zwc0ZsYXRbaSArIDFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmcgPSBPYmplY3QuZnJvbUVudHJpZXMoa3Zwcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuYyhhcmcpO1xuICAgIH0sIGxpbWl0KTtcbiAgICBmdW5jdGlvbiBnZXRLVlBzKGNvbmZpZ0FyZzogb2JqZWN0KSB7XG4gICAgICAgIGlmICghY2FuSGF2ZUNoaWxkcmVuKGNvbmZpZ0FyZykgfHwgQXJyYXkuaXNBcnJheShjb25maWdBcmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gW2NvbmZpZ0FyZ107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhjb25maWdBcmcpO1xuICAgICAgICBrZXlzLnNvcnQoKTtcbiAgICAgICAgcmV0dXJuIGtleXMuZmxhdE1hcChrZXkgPT4gW2tleSwgY29uZmlnQXJnW2tleV1dKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICgoY29uZmlnQXJnOiBvYmplY3QpID0+IHtcbiAgICAgICAgICAgIG91dHB1dC5jYWxsQ291bnQrKztcbiAgICAgICAgICAgIHJldHVybiBjYWNoZShnZXRLVlBzKGNvbmZpZ0FyZykpO1xuICAgICAgICB9KSBhcyBGbmMsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFyKGNvbmZpZ0FyZzogb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXIoZ2V0S1ZQcyhjb25maWdBcmcpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhckFsbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxDb3VudDogMCxcbiAgICAgICAgICAgIG1pc3NDb3VudDogMCxcbiAgICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZXJuYWxDYWNoZTxLZXksIFZhbHVlPigpOiB7XG4gICAgZ2V0OiAoa2V5OiBLZXkpID0+IFZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIHNldDogKGtleTogS2V5LCB2YWx1ZTogVmFsdWUpID0+IHZvaWQ7XG59IHtcbiAgICBsZXQgdmFsdWVzID0gbmV3IE1hcDxLZXksIFZhbHVlPigpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9O1xufSIsImltcG9ydCB7IGNhbkhhdmVDaGlsZHJlbiwgTWF5YmVQcm9taXNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gXCIuL2Zvcm1hdHRpbmcvZm9ybWF0XCI7XG5cbmV4cG9ydCBjb25zdCB0aW1lSW5TZWNvbmQgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IHRpbWVJbk1pbnV0ZSA9IHRpbWVJblNlY29uZCAqIDYwO1xuZXhwb3J0IGNvbnN0IHRpbWVJbkhvdXIgPSB0aW1lSW5NaW51dGUgKiA2MDtcbmV4cG9ydCBjb25zdCB0aW1lSW5EYXkgPSB0aW1lSW5Ib3VyICogMjQ7XG5leHBvcnQgY29uc3QgdGltZUluV2VlayA9IHRpbWVJbkRheSAqIDc7XG5leHBvcnQgY29uc3QgdGltZUluWWVhciA9IHRpbWVJbkRheSAqIDM2NTtcblxuZXhwb3J0IHR5cGUgV2F0Y2hhYmxlPFQ+ID0gKGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IHZvaWQpID0+IE1heWJlUHJvbWlzZTx2b2lkPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRFcnJvclN0YWNrVG9FcnJvcihlcnJvcjogc3RyaW5nKTogRXJyb3Ige1xuICAgIGxldCBlcnJvck9iaiA9IG5ldyBFcnJvcigpO1xuICAgIGVycm9yT2JqLnN0YWNrID0gU3RyaW5nKGVycm9yKTtcbiAgICBlcnJvck9iai5tZXNzYWdlID0gU3RyaW5nKGVycm9yKS5zcGxpdChcIlxcblwiKVswXS5zbGljZShcIkVycm9yOiBcIi5sZW5ndGgpO1xuICAgIHJldHVybiBlcnJvck9iajtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2hhMjU2SGFzaChidWZmZXI6IEJ1ZmZlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCJjcnlwdG9cIikuY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoXCJoZXhcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hhMjU2SGFzaEJ1ZmZlcihidWZmZXI6IEJ1ZmZlciB8IHN0cmluZyk6IEJ1ZmZlciB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCJjcnlwdG9cIikuY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoKTtcbn1cbi8qKiBBc3luYywgYnV0IHdvcmtzIGJvdGggY2xpZW50c2lkZSBhbmQgc2VydmVyc2lkZS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaGEyNTZIYXNoUHJvbWlzZShidWZmZXI6IEJ1ZmZlcikge1xuICAgIGlmIChpc05vZGUoKSkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcImNyeXB0b1wiKS5jcmVhdGVIYXNoKFwic2hhMjU2XCIpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdChcImhleFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYnVmID0gYXdhaXQgd2luZG93LmNyeXB0by5zdWJ0bGUuZGlnZXN0KFwiU0hBLTI1NlwiLCBidWZmZXIpO1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oYnVmKS50b1N0cmluZyhcImhleFwiKTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhMjU2QnVmZmVyUHJvbWlzZShidWZmZXI6IEJ1ZmZlcik6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgaWYgKGlzTm9kZSgpKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiY3J5cHRvXCIpLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJ1ZiA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgYnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJ1Zik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUVxdWFsKGE6IHsgW2tleTogbnVtYmVyXTogdW5rbm93bjsgbGVuZ3RoOiBudW1iZXIgfSwgYjogeyBba2V5OiBudW1iZXJdOiB1bmtub3duOyBsZW5ndGg6IG51bWJlciB9LCkge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKCkge1xuICAgIHJldHVybiB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIChnbG9iYWxUaGlzIGFzIGFueSkuV29ya2VyR2xvYmFsU2NvcGUgPT09IFwidW5kZWZpbmVkXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVUcnVlKCkge1xuICAgIHJldHVybiBpc05vZGUoKSBhcyB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyU3VmZml4ZWQoY291bnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdE51bWJlcihjb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0KGNvdW50OiBudW1iZXIpIHtcbiAgICBsZXQgYXJyOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZUZyZWV6ZTxUPihvYmo6IFQpOiBUIHtcbiAgICBpZiAoIWNhbkhhdmVDaGlsZHJlbihvYmopKSByZXR1cm4gb2JqO1xuICAgIGxldCB2aXNpdGVkID0gbmV3IFNldDx1bmtub3duPigpO1xuICAgIGZ1bmN0aW9uIGl0ZXJhdGUob2JqOiB1bmtub3duKSB7XG4gICAgICAgIGlmICghY2FuSGF2ZUNoaWxkcmVuKG9iaikpIHJldHVybjtcbiAgICAgICAgaWYgKHZpc2l0ZWQuaGFzKG9iaikpIHJldHVybjtcbiAgICAgICAgdmlzaXRlZC5hZGQob2JqKTtcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhvYmopKSByZXR1cm47XG4gICAgICAgIE9iamVjdC5mcmVlemUob2JqKTtcbiAgICAgICAgbGV0IGtleXMgPSBnZXRLZXlzKG9iaik7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICBpdGVyYXRlKG9ialtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpdGVyYXRlKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydCB0eXBlIEFycmF5QnVmZmVyVmlld1R5cGVzID0gVWludDhBcnJheSB8IEludDhBcnJheSB8IFVpbnQxNkFycmF5IHwgSW50MTZBcnJheSB8IFVpbnQzMkFycmF5IHwgSW50MzJBcnJheSB8IEJpZ1VpbnQ2NEFycmF5IHwgQmlnSW50NjRBcnJheSB8IEZsb2F0NjRBcnJheSB8IEZsb2F0MzJBcnJheSB8IFVpbnQ4Q2xhbXBlZEFycmF5O1xuZXhwb3J0IHR5cGUgQnVmZmVyVHlwZSA9IEFycmF5QnVmZmVyIHwgU2hhcmVkQXJyYXlCdWZmZXIgfCBBcnJheUJ1ZmZlclZpZXdUeXBlcztcbmV4cG9ydCBmdW5jdGlvbiBpc0J1ZmZlclR5cGUob2JqOiB1bmtub3duKTogb2JqIGlzIEJ1ZmZlclR5cGUge1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFvYmopIHJldHVybiBmYWxzZTtcbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KG9iaikpIHJldHVybiB0cnVlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgcmV0dXJuIHRydWU7XG4gICAgaWYgKGdsb2JhbC5TaGFyZWRBcnJheUJ1ZmZlciAmJiBvYmogaW5zdGFuY2VvZiBnbG9iYWwuU2hhcmVkQXJyYXlCdWZmZXIpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlzKG9iajogdW5rbm93bikge1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIiB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgTWVzc2FnZVBvcnQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBsZXQga2V5QXJyYXk6IFByb3BlcnR5S2V5W107XG4gICAgaWYgKGlzQnVmZmVyVHlwZShvYmopKSB7XG4gICAgICAgIGtleUFycmF5ID0gW107XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgLy8gTk9URTogV2UgY29udmVydCB0aGUgaW5kZXhlcyB0byBzdHJpbmdzLCBiZWNhdXNlIHRoYXQgaXMgd2hhdCBqYXZhc2NyaXB0IGRvZXMsXG4gICAgICAgIC8vICBhbmQgZGlmZmVyaW5nIGZyb20gaXQgY2F1c2VzIHJlZ3Jlc3Npb25zIHRoYXQgd2Ugc2ltcGx5IGNhbm5vdCByZWN0aWZ5IChpdCBicmVha3MgaGFzaGluZ1xuICAgICAgICAvLyAgY29uc2lzdGVuY3kpLlxuICAgICAgICBrZXlBcnJheSA9IEFycmF5KG9iai5sZW5ndGgpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBTdHJpbmcoaSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleUFycmF5ID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG4gICAgZm9yIChsZXQgc3ltYm9sIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSkge1xuICAgICAgICBsZXQga2V5ID0gU3ltYm9sLmtleUZvcihzeW1ib2wpO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBrZXlBcnJheS5wdXNoKHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleUFycmF5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmluZ0tleXM8VCBleHRlbmRzIHt9PihvYmo6IFQpOiAoKGtleW9mIFQpICYgc3RyaW5nKVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKSBhcyBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlCeTxULCBLPihhcnI6IFRbXSwgZ2V0S2V5OiAodmFsdWU6IFQpID0+IEspOiBNYXA8SywgVD4ge1xuICAgIGxldCBtYXAgPSBuZXcgTWFwPEssIFQ+KCk7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcbiAgICAgICAgbWFwLnNldChnZXRLZXkoaXRlbSksIGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGtleUJ5QXJyYXk8VCwgSz4oYXJyOiBUW10sIGdldEtleTogKHZhbHVlOiBUKSA9PiBLKTogTWFwPEssIFRbXT4ge1xuICAgIGxldCBtYXAgPSBuZXcgTWFwPEssIFRbXT4oKTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFycikge1xuICAgICAgICBsZXQga2V5ID0gZ2V0S2V5KGl0ZW0pO1xuICAgICAgICBsZXQgYXJyID0gbWFwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWFycikge1xuICAgICAgICAgICAgYXJyID0gW107XG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgYXJyKTtcbiAgICAgICAgfVxuICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZUpTT048VD4ob2JqOiBUKTogVCB7XG4gICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gb2JqO1xuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIC8vIEl0IGlzIHBvc3NpYmxlIGZvciBhbiBvYmplY3QgdG8gbm90IGJlIGRlZmluZWQsIGJ1dCByZXR1cm4gdW5kZWZpbmVkIHdoZW4gSlNPTi5zdHJpbmdpZmllZCxcbiAgICAvLyAgdmlhIG92ZXJyaWRpbmcgdGhlIHRvSlNPTiBtZXRob2QuXG4gICAgaWYgKHN0ciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkIGFzIGFueTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xufVxuXG5leHBvcnQgY2xhc3MgUHJvbWlzZU9iajxUID0gdm9pZD4ge1xuICAgIHB1YmxpYyBwcm9taXNlOiBQcm9taXNlPFQ+O1xuICAgIHB1YmxpYyB2YWx1ZTogeyB2YWx1ZT86IFQ7IGVycm9yPzogc3RyaW5nIH0gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFJlc29sdmUgY2FsbGVkIGRvZXMgbm90IG1lYW4gdGhlIHZhbHVlIGlzIHJlYWR5LCBhcyBpdCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBhIHByb21pc2UuICovXG4gICAgcHVibGljIHJlc29sdmVDYWxsZWQ/OiBib29sZWFuO1xuXG4gICAgcHVibGljIHJlc29sdmUgPSAodmFsdWU6IFQgfCBQcm9taXNlPFQ+KSA9PiB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUNhbGxlZCA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICB2YWx1ZS50aGVuKFxuICAgICAgICAgICAgICAgIHZhbHVlID0+IHRoaXMudmFsdWUgPSB7IHZhbHVlIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy52YWx1ZSA9IHsgZXJyb3IgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0geyB2YWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFzZVJlc29sdmUodmFsdWUpO1xuICAgIH07XG4gICAgcHVibGljIHJlamVjdCA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuYmFzZVJlamVjdChlcnJvcik7XG4gICAgfTtcblxuICAgIHByaXZhdGUgYmFzZVJlc29sdmUhOiAodmFsdWU6IFQgfCBQcm9taXNlPFQ+KSA9PiB2b2lkO1xuICAgIHByaXZhdGUgYmFzZVJlamVjdCE6IChlcnJvcjogYW55KSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZVJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKFxuICAgICAgICAgICAgdmFsdWUgPT4gdGhpcy52YWx1ZSA9IHsgdmFsdWUgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMudmFsdWUgPSB7IGVycm9yIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9taXNlT2JqPFQgPSB2b2lkPigpOiBQcm9taXNlT2JqPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmo8VD4oKTtcbn1cblxuLy8gQWxsb3dzIGFuIGltbWVkaWF0ZSBjYWxsLCB0aGVuIGRlbGF5cyB0aGUgbmV4dCBjYWxsIHVudGlsIHRoZSBmaXJzdCBjYWxsIGZpbmlzaGVzICsgZGVsYXlcbi8vICAtIERyb3BzIGFsbCBidXQgdGhlIGxhdGVzdCBjYWxsLCBidXQgb25seSByZXNvbHZlcyB0aGUgcHJvbWlzZXMgcmV0dXJuIHRvIGFsbFxuLy8gICAgICBjYWxscyBvbmNlIHRoZSBsYXRlc3QgY2FsbCBmaW5pc2hlcy5cbi8vICAtIEVzZW50aWFsbHkgdGhlIHNhbWUgYXMgc2F5aW5nIFwiZG9uJ3QgcnVuIHRoaXMgZnVuY3Rpb24gdG9vIG9mdGVuLCBkb24ndCBydW4gaXQgaW4gcGFyYWxsZWwsXG4vLyAgICAgIGFuZCBkb24ndCBsZXQgZnVuY3Rpb25zIHJ1bnMgYmUgdG9vIGNsb3NlIHRvZ2V0aGVyXCIuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVGdW5jdGlvbjxBcmdzIGV4dGVuZHMgYW55W10+KFxuICAgIGRlbGF5OiBudW1iZXIsXG4gICAgZm5jOiAoLi4uYXJnczogQXJncykgPT4gTWF5YmVQcm9taXNlPHZvaWQ+XG4pOiAoLi4uYXJnczogQXJncykgPT4gUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IG5leHRBbGxvd2VkQ2FsbCA9IDA7XG4gICAgbGV0IHBlbmRpbmdBcmdzOiB7IGFyZ3M6IEFyZ3M7IHByb21pc2VPYmo6IFByb21pc2VPYmo8dm9pZD4gfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBmdW5jdGlvbiBkb0NhbGwoYXJnczogQXJncywgcHJvbWlzZU9iajogUHJvbWlzZU9iajx2b2lkPikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZuYyguLi5hcmdzKTtcbiAgICAgICAgICAgIHByb21pc2VPYmoucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBUaGUgY2FsbGVyIHNob3VsZCBoYW5kbGUgdGhlIHByb21pc2UuIElmIG5vdCwgdGhleSBwcm9iYWJseVxuICAgICAgICAgICAgICAgIC8vICB3YW50IHRoZSB1bnJlc29sdmVkIHByb21pc2UgcmVqZWN0aW9uLCBzbyB0aGV5IGNhbiBoYW5kbGUgaXQgcHJvcGVybHkuXG4gICAgICAgICAgICAgICAgdm9pZCByZXN1bHQuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IERhdGUubm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgICAgICAgICAgcnVuTmV4dENhbGwoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gRGF0ZS5ub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgICAgIHJ1bk5leHRDYWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgICAgcHJvbWlzZU9iai5yZWplY3QoZSk7XG4gICAgICAgICAgICBuZXh0QWxsb3dlZENhbGwgPSBEYXRlLm5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICBydW5OZXh0Q2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bk5leHRDYWxsKCkge1xuICAgICAgICBpZiAobmV4dEFsbG93ZWRDYWxsID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHJldHVybjtcbiAgICAgICAgaWYgKCFwZW5kaW5nQXJncykgcmV0dXJuO1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICh0aW1lID4gbmV4dEFsbG93ZWRDYWxsKSB7XG4gICAgICAgICAgICAvLyBTZXQgbmV4dEFsbG93ZWRDYWxsIHRvIGluZmluaXR5LCB0byBwcmV2ZW50IG5ldyBjYWxscyBmcm9tIHJ1bm5pbmdcbiAgICAgICAgICAgIC8vICB1bnRpbCBkb0NhbGwgZmluaXNoZXMuXG4gICAgICAgICAgICBuZXh0QWxsb3dlZENhbGwgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgICAgICAvLyBEZWxheSwgc28gd2UgZG9uJ3QgdHVybiBhIHNlcmllcyBvZiBzZXF1ZW50aWFsIGNhbGxzIHRvIGEgc2VyaWVzIG9mIG5lc3RlZCBjYWxsc1xuICAgICAgICAgICAgLy8gICh3aGljaCB3aWxsIGNhdXNlIGEgc3RhY2sgb3ZlcmZsb3cpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IHBlbmRpbmdBcmdzO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmICghYXJncykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0QWxsb3dlZENhbGwgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltcG9zc2libGUsIHBlbmRpbmdBcmdzIHdhcyByZXNldCB3aGVuIHdlIHNob3VsZG4ndCBoYXZlIGV2ZW4gYmVlbiBpbiBhIGNhbGxgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb0NhbGwoYXJncy5hcmdzLCBhcmdzLnByb21pc2VPYmopO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bk5leHRDYWxsLCBuZXh0QWxsb3dlZENhbGwgLSB0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHBlbmRpbmdBcmdzKSB7XG4gICAgICAgICAgICBwZW5kaW5nQXJncy5hcmdzID0gYXJncztcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nQXJncy5wcm9taXNlT2JqLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgcGVuZGluZ0FyZ3MgPSB7IGFyZ3MsIHByb21pc2VPYmo6IHByb21pc2VPYmooKSB9O1xuICAgICAgICBydW5OZXh0Q2FsbCgpO1xuICAgICAgICByZXR1cm4gcGVuZGluZ0FyZ3MucHJvbWlzZU9iai5wcm9taXNlO1xuICAgIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRJZCgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSArIFwiX1wiICsgTWF0aC5yYW5kb20oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RnJvbU9yZGVyT2JqZWN0PFQ+KG9iajogeyBbb3JkZXI6IG51bWJlcl06IFQgfSk6IFRbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5zbGljZSgpO1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnNvcnQoKGEsIGIpID0+ICthWzBdIC0gK2JbMF0pLm1hcCh4ID0+IHhbMV0pLmZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCAmJiB4ICE9PSBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3Q8VD4oYXJyOiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuZXhwb3J0IHR5cGUgT2JqZWN0VmFsdWVzPFQ+ID0gVFtrZXlvZiBUXTtcbmV4cG9ydCBmdW5jdGlvbiBlbnRyaWVzPE9iaiBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PihvYmo6IE9iaik6IFtrZXlvZiBPYmosIE9iamVjdFZhbHVlczxPYmo+XVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKSBhcyBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlzPE9iaiBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PihvYmo6IE9iaik6IChrZXlvZiBPYmopW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopIGFzIGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnQ8VD4oYXJyOiBUW10sIHNvcnRLZXk6IChvYmo6IFQpID0+IHVua25vd24pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCA8PSAxKSByZXR1cm4gYXJyO1xuICAgIGFyci5zb3J0KChhLCBiKSA9PiBjb21wYXJlKHNvcnRLZXkoYSksIHNvcnRLZXkoYikpKTtcbiAgICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdERvbWFpbihob3N0bmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGhvc3RuYW1lLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSkge1xuICAgICAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNsaWNlKFwiaHR0cHM6Ly9cIi5sZW5ndGgpO1xuICAgIH1cbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KFwiL1wiKVswXTtcbiAgICBsZXQgcGFydHMgPSBob3N0bmFtZS5zcGxpdChcIi5cIik7XG4gICAgaG9zdG5hbWUgPSBwYXJ0cy5zbGljZSgtMikuam9pbihcIi5cIik7XG4gICAgaG9zdG5hbWUgPSBob3N0bmFtZS5zcGxpdChcIjpcIilbMF07XG4gICAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgY2xhc3MgUXVldWVMaW1pdGVkPFQ+IHtcbiAgICBwcml2YXRlIGl0ZW1zOiBUW10gPSBbXTtcbiAgICBwcml2YXRlIG5leHRJbmRleCA9IDA7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtYXhDb3VudDogbnVtYmVyKSB7IH1cblxuICAgIHB1YmxpYyBwdXNoKGl0ZW06IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtc1t0aGlzLm5leHRJbmRleF0gPSBpdGVtO1xuICAgICAgICB0aGlzLm5leHRJbmRleCA9ICh0aGlzLm5leHRJbmRleCArIDEpICUgdGhpcy5tYXhDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsVW5vcmRlcmVkKCk6IFRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5uZXh0SW5kZXggPSAwO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgcHVibGljIGdldE9sZGVzdCgpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm5leHRJbmRleCAtIDE7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggKz0gdGhpcy5tYXhDb3VudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2hCYXNpYzxULCBWPihhcnJheTogVFtdLCBnZXRWYWw6ICh2YWw6IFQpID0+IFYsIHNlYXJjaFZhbHVlOiBWKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoSW5kZXgoYXJyYXkubGVuZ3RoLCBpID0+IGNvbXBhcmUoZ2V0VmFsKGFycmF5W2ldKSwgc2VhcmNoVmFsdWUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2hCYXNpYzI8VCwgVj4oYXJyYXk6IFRbXSwgZ2V0VmFsOiAodmFsOiBUKSA9PiBWLCBzZWFyY2hWYWx1ZTogVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaEluZGV4KGFycmF5Lmxlbmd0aCwgaSA9PiBjb21wYXJlKGdldFZhbChhcnJheVtpXSksIGdldFZhbChzZWFyY2hWYWx1ZSkpKTtcbn1cblxuLyoqXG4gKiAgU2VhcmNoZXMgaW5kZXhlcywgYWxsb3dpbmcgeW91IHRvIHF1ZXJ5IHN0cnVjdHVyZXMgdGhhdCBhcmVuJ3QgYXJyYXlzLiBUbyBzZWFyY2ggYW4gYXJyYXksIHVzZTpcbiAqICAgICAgYGJpbmFyeVNlYXJjaEluZGV4KGFycmF5Lmxlbmd0aCwgaSA9PiBjb21wYXJlKGFycmF5W2ldLCBzZWFyY2hWYWx1ZSkpYFxuICogXG4gKiAgICAgIE5PVEU6IElmIHRoZXJlIGFyZSBkdXBsaWNhdGVzLCByZXR1cm5zIHRoZSBmaXJzdCBtYXRjaC5cbiAqIFxuICogICAgICBOT1RFOiBJZiB0aGUgdmFsdWUgY2FuJ3QgYmUgZm91bmQsIHJldHVybnMgdGhlIGJpdHdpc2UgbmVnYXRpb24gb2YgdGhlIGluZGV4IHdoZXJlIGl0IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIFxuICogICAgICBOT1RFOiBXaXRoIGBpZiAoaW5kZXggPCAwKSBpbmRleCA9IH5pbmRleDtgIHlvdSB3aWxsIGdldCBhbiBpbmRleCBvZiB0aGUgdmFsdWUgPj0gdGhlIHRhcmdldCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaEluZGV4KGxpc3RDb3VudDogbnVtYmVyLCBjb21wYXJlOiAobGhzSW5kZXg6IG51bWJlcikgPT4gbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAobGlzdENvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB+MDtcbiAgICB9XG4gICAgbGV0IG1pbiA9IDA7XG4gICAgbGV0IG1heCA9IGxpc3RDb3VudCAtIDE7XG4gICAgd2hpbGUgKG1pbiA8IG1heCkge1xuICAgICAgICBsZXQgZmluZ2VySW5kZXggPSBNYXRoLmZsb29yKChtYXggKyBtaW4pIC8gMik7XG4gICAgICAgIGxldCBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKGZpbmdlckluZGV4KTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSA8IDApIHtcbiAgICAgICAgICAgIG1pbiA9IGZpbmdlckluZGV4ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1heCA9IGZpbmdlckluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBjb21wYXJpc29uID0gY29tcGFyZShtaW4pO1xuICAgIGlmIChjb21wYXJpc29uID09PSAwKSByZXR1cm4gbWluO1xuICAgIGlmIChjb21wYXJpc29uID4gMCkgcmV0dXJuIH5taW47XG4gICAgcmV0dXJuIH4obWluICsgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGxoczogdW5rbm93biwgcmhzOiB1bmtub3duKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIGxocyAhPT0gdHlwZW9mIHJocykge1xuICAgICAgICByZXR1cm4gY29tcGFyZSh0eXBlb2YgbGhzLCB0eXBlb2YgcmhzKTtcbiAgICB9XG4gICAgaWYgKGxocyA9PT0gcmhzKSByZXR1cm4gMDtcbiAgICBpZiAobGhzID09PSBudWxsICYmIHJocyAhPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIGlmIChsaHMgIT09IG51bGwgJiYgcmhzID09PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGxocykpIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNOYU4ocmhzKSkgcmV0dXJuIDA7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHJocykpIHJldHVybiArMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobGhzIGFzIGFueSA8IChyaHMgYXMgYW55KSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiAxO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBcnJheShsaHM6IHVua25vd25bXSwgcmhzOiB1bmtub3duW10pOiBudW1iZXIge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4obGhzLmxlbmd0aCwgcmhzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICBsZXQgY29tcGFyaXNvbiA9IGNvbXBhcmUobGhzW2ldLCByaHNbaV0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvbiAhPT0gMCkgcmV0dXJuIGNvbXBhcmlzb247XG4gICAgfVxuICAgIHJldHVybiBsaHMubGVuZ3RoIC0gcmhzLmxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEludG9Tb3J0ZWRMaXN0PFQ+KGxpc3Q6IFRbXSwgbWFwOiAodmFsOiBUKSA9PiBzdHJpbmcgfCBudW1iZXIsIGVsZW1lbnQ6IFQpIHtcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSBtYXAoZWxlbWVudCk7XG4gICAgbGV0IGluZGV4ID0gYmluYXJ5U2VhcmNoSW5kZXgobGlzdC5sZW5ndGgsIGkgPT4gY29tcGFyZShtYXAobGlzdFtpXSksIHNlYXJjaFZhbHVlKSk7XG4gICAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSB+aW5kZXg7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDAsIGVsZW1lbnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21Tb3J0ZWRMaXN0PFQ+KGxpc3Q6IFRbXSwgbWFwOiAodmFsOiBUKSA9PiBzdHJpbmcgfCBudW1iZXIsIHNlYXJjaFZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBsZXQgaW5kZXggPSBiaW5hcnlTZWFyY2hJbmRleChsaXN0Lmxlbmd0aCwgaSA9PiBjb21wYXJlKG1hcChsaXN0W2ldKSwgc2VhcmNoVmFsdWUpKTtcbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXRUb0Vycm9yPFQ+KHRpbWU6IG51bWJlciwgcDogUHJvbWlzZTxUPiwgZXJyOiAoKSA9PiBFcnJvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKCkpLCB0aW1lKTtcbiAgICAgICAgcC50aGVuKHJlc29sdmUsIHJlamVjdCkuZmluYWxseSgoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCkpO1xuICAgIH0pO1xufVxuXG4vLyBOT1RFOiBCb3RoIGVycm9ycyBhbmQgdGltZW91dHMgYXJlIGNvbnZlcnRlZCB0byB1bmRlZmluZWRcbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0VG9VbmRlZmluZWQ8VD4odGltZTogbnVtYmVyLCBwOiBQcm9taXNlPFQ+KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQgfCB1bmRlZmluZWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHRpbWVvdXRUb1VuZGVmaW5lZCB0aW1lZCBvdXQgYWZ0ZXIgJHt0aW1lfWApO1xuICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgcC50aGVuKHJlc29sdmUsXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgdGltZW91dFRvVW5kZWZpbmVkIGVycm9yOiAke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICkuZmluYWxseSgoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCkpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXRUb1VuZGVmaW5lZFNpbGVudDxUPih0aW1lOiBudW1iZXIsIHA6IFByb21pc2U8VD4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VCB8IHVuZGVmaW5lZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgcC50aGVuKFxuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICkuZmluYWxseSgoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JUb1dhcm5pbmc8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IHZvaWQge1xuICAgIC8vIFJldHVybiB0aGUgcHJvbWlzZSwgc28gdGhleSBjYW4gd2FpdCBpZiB0aGV5IHdhbnQsIGJ1dCBoYXZlIHRoZSByZXR1cm4gdHlwZSBiZSB2b2lkLFxuICAgIC8vICBzbyB0aGF0IHRoZXkgZG9uJ3QgaGF2ZSB0byBhd2FpdCBpdC5cbiAgICByZXR1cm4gcHJvbWlzZS5jYXRjaChlID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKGUuc3RhY2spO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIGFzIGFueTtcbiAgICB9KSBhcyBhbnk7XG59XG4iLCJleHBvcnQgdHlwZSBNYXliZVByb21pc2U8VD4gPSBUIHwgUHJvbWlzZTxUPjtcblxuZXhwb3J0IHR5cGUgQXJnczxUPiA9IFQgZXh0ZW5kcyAoLi4uYXJnczogaW5mZXIgVikgPT4gYW55ID8gViA6IG5ldmVyO1xuXG5leHBvcnQgdHlwZSBBbnlGdW5jdGlvbiA9ICguLi5hcmdzOiBhbnkpID0+IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkhhdmVDaGlsZHJlbih2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIHsgW2tleSBpbiBQcm9wZXJ0eUtleV06IHVua25vd24gfSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShtaWxsaXNlY29uZHM6IG51bWJlciB8IHVuZGVmaW5lZCwgbWF4QWJzb2x1dGVWYWx1ZT86IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBtaWxsaXNlY29uZHMgIT09IFwibnVtYmVyXCIpIHJldHVybiBcIlwiO1xuICAgIGlmIChtaWxsaXNlY29uZHMgPT09IDApIHJldHVybiBcIjBtc1wiO1xuICAgIGlmIChtaWxsaXNlY29uZHMgPCAwKSB7XG4gICAgICAgIHJldHVybiBcIi1cIiArIGZvcm1hdFRpbWUoLW1pbGxpc2Vjb25kcywgbWF4QWJzb2x1dGVWYWx1ZSk7XG4gICAgfVxuICAgIGxldCBzY2FsZSA9IG1pbGxpc2Vjb25kcztcbiAgICBpZiAobWF4QWJzb2x1dGVWYWx1ZSkge1xuICAgICAgICBzY2FsZSA9IE1hdGgubWF4KHNjYWxlLCBtYXhBYnNvbHV0ZVZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHNjYWxlIDwgMSAvIDEwMDApIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcyAqIDEwMDAgKiAxMDAwLCAzKSArIFwibnNcIjtcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMSkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzICogMTAwMCwgMykgKyBcInVzXCI7XG4gICAgfSBlbHNlIGlmIChzY2FsZSA8IDEwMDApIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcywgMykgKyBcIm1zXCI7XG4gICAgICAgIC8vIFVzZSBzZWNvbmRzIHVudGlsIHdlIGhhdmUgMTAgbWludXRlcywgYXMgZGVjaW1hbCBtaW51dGVzIGFyZSBjb25mdXNpbmdcbiAgICB9IGVsc2UgaWYgKHNjYWxlIDwgMTAwMCAqIDYwICogMTApIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpICsgXCJzXCI7XG4gICAgfSBlbHNlIGlmIChzY2FsZSA8IDEwMDAgKiA2MCAqIDYwKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgLyAxMDAwIC8gNjAsIDMpICsgXCJtXCI7XG4gICAgfSBlbHNlIGlmIChzY2FsZSA8IDEwMDAgKiA2MCAqIDYwICogMjQpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcyAvIDEwMDAgLyA2MCAvIDYwLCAzKSArIFwiaFwiO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKG1pbGxpc2Vjb25kcyA8IDEwMDAgKiA2MCAqIDYwICogMjQgKiAxMCkge1xuICAgICAgICAvLyAgICAgbGV0IHJlbWFpbmluZyA9IE1hdGgucm91bmQobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgICAgIC8vICAgICBsZXQgc2Vjb25kcyA9IHJlbWFpbmluZyAlIDYwO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC09IHNlY29uZHM7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLz0gNjA7XG4gICAgICAgIC8vICAgICBsZXQgbWludXRlcyA9IHJlbWFpbmluZyAlIDYwO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC09IG1pbnV0ZXM7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLz0gNjA7XG4gICAgICAgIC8vICAgICBsZXQgaG91cnMgPSByZW1haW5pbmc7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLT0gaG91cnM7XG4gICAgICAgIC8vICAgICByZW1haW5pbmcgLz0gMjQ7XG4gICAgICAgIC8vICAgICBsZXQgZGF5cyA9IHJlbWFpbmluZztcbiAgICAgICAgLy8gICAgIGxldCB0aW1lID0gYCR7aG91cnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgICAgIC8vICAgICBpZiAoZGF5cyA+IDApIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZGF5cyA9PT0gMSkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aW1lID0gYDEgZGF5ICR7dGltZX1gO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRpbWUgPSBgJHtkYXlzfSBkYXlzICR7dGltZX1gO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJldHVybiB0aW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkYXlzID0gTWF0aC5yb3VuZChtaWxsaXNlY29uZHMgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KTtcbiAgICAgICAgcmV0dXJuIGAke2RheXN9IGRheXNgO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldERlY2ltYWxzKG1heEFic29sdXRlVmFsdWU6IG51bWJlciwgdGFyZ2V0RGlnaXRzOiBudW1iZXIpIHtcbiAgICBsZXQgaW50RGlnaXRzID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG1heEFic29sdXRlVmFsdWUpICsgMSk7XG4gICAgaWYgKGludERpZ2l0cyA8IDApIGludERpZ2l0cyA9IDE7XG4gICAgbGV0IGRlY2ltYWxEaWdpdHMgPSB0YXJnZXREaWdpdHMgLSBpbnREaWdpdHM7XG4gICAgLy8gSGFwcGVucyBpZiB0aGUgbnVtYmVyIGlzIHNvIGNsb3NlIHRvIGhhdmluZyB0b28gbWFueSBkaWdpdHMgdGhhdCBNYXRoLmxvZzEwIHJvdW5kcyBpdCBvdmVyLlxuICAgIGlmIChkZWNpbWFsRGlnaXRzIDwgMCkge1xuICAgICAgICBkZWNpbWFsRGlnaXRzID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGRlY2ltYWxEaWdpdHM7XG59XG5cbi8qKiBBZGRzIGRlY2ltYWwgZGlnaXRzIHRvIHJlYWNoIGRpZ2l0cy4gSWYgdGhlIG51bWJlciBpcyBzaW1wbHkgdG9vIGxhcmdlLCBpdCB3b24ndCByZW1vdmVcbiAqICAgICAgZGlnaXRzLCB0aGVyZSB3aWxsIGluc3RlYWQganVzdCBiZSBubyBkZWNpbWFsIHBvaW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TWF4RGVjaW1hbHMobnVtOiBudW1iZXIsIHRhcmdldERpZ2l0czogbnVtYmVyLCBtYXhBYnNvbHV0ZVZhbHVlPzogbnVtYmVyLCBleGFjdERlY2ltYWxzPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG51bSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiMFwiO1xuICAgIC8vIHRvRml4ZWQgaGFzIGEgbWF4IG9mIDEwMCBkaWdpdHNcbiAgICBpZiAodGFyZ2V0RGlnaXRzID4gMTAwKSB0YXJnZXREaWdpdHMgPSAxMDA7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobnVtKSkgcmV0dXJuIG51bS50b0ZpeGVkKHRhcmdldERpZ2l0cyk7XG5cbiAgICBpZiAobnVtIDwgMCkgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKC1udW0sIHRhcmdldERpZ2l0cywgbWF4QWJzb2x1dGVWYWx1ZSwgZXhhY3REZWNpbWFscyk7XG5cbiAgICAvLyBUSU1JTkc6XG4gICAgLy8gIH41MG5zICAgdG9TdHJpbmdcbiAgICAvLyAgfjQwMG5zICB0b0xvY2FsZVN0cmluZ1xuICAgIC8vICB+NTAwbnMgIHRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIilcbiAgICAvLyAgfjIwdXMgICB0b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pXG4gICAgLy8gU28sIHdlIGFyZSBhdm9pZGluZyB1c2luZyB0b0xvY2FsZVN0cmluZywgZm9yIG5vdy5cblxuICAgIG1heEFic29sdXRlVmFsdWUgPSBtYXhBYnNvbHV0ZVZhbHVlID8/IE1hdGguYWJzKG51bSk7XG5cbiAgICBsZXQgdGFyZ2V0RGVjaW1hbHMgPSBleGFjdERlY2ltYWxzID8/IGdldFRhcmdldERlY2ltYWxzKG1heEFic29sdXRlVmFsdWUsIHRhcmdldERpZ2l0cyk7XG4gICAgbGV0IHRleHQgPSBudW0udG9GaXhlZCh0YXJnZXREZWNpbWFscyk7XG4gICAgbGV0IHBhcnRzID0gdGV4dC5zcGxpdChcIi5cIik7XG4gICAgbGV0IGludGVnZXIgPSBwYXJ0c1swXTtcbiAgICBsZXQgZGVjaW1hbHMgPSBwYXJ0c1sxXSA/PyBcIlwiO1xuXG4gICAgaWYgKGV4YWN0RGVjaW1hbHMpIHtcbiAgICAgICAgd2hpbGUgKGRlY2ltYWxzLmxlbmd0aCA8IGV4YWN0RGVjaW1hbHMpIHtcbiAgICAgICAgICAgIGRlY2ltYWxzICs9IFwiMFwiO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKGRlY2ltYWxzW2RlY2ltYWxzLmxlbmd0aCAtIDFdID09PSBcIjBcIikge1xuICAgICAgICAgICAgZGVjaW1hbHMgPSBkZWNpbWFscy5zbGljZSgwLCAtMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcblxuICAgIC8vIE5PVEU6IE9OTFkgYWRkIGNvbW1hIGdyb3VwcyBpZiBpdCBpcyA+IDQgZGlnaXRzLiBBcyA0MjM0SyBpcyBlYXNpbHkgcmVhZCwgYW5kIGNvbW1hc1xuICAgIC8vICBvbmx5IHJlYWxseSBtYXR0ZXIgZm9yIG51bWJlcnMgc3VjaCBhcyA0MjM0NTIzSywgd2hpY2ggaXMgaGFyZCB0byByZWFkLlxuICAgIGlmIChpbnRlZ2VyLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGludGVnZXIubGVuZ3RoOyBpID4gMDsgaSAtPSAzKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBpIC0gMztcbiAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGxldCBzdHIgPSBpbnRlZ2VyLnNsaWNlKHN0YXJ0LCBpKTtcbiAgICAgICAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBcIixcIiArIG91dHB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCA9IHN0ciArIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IGludGVnZXI7XG4gICAgfVxuXG4gICAgaWYgKGRlY2ltYWxzKSB7XG4gICAgICAgIG91dHB1dCArPSBcIi5cIiArIGRlY2ltYWxzO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKiBBY3R1YWxseSBmb3JtYXRzIGFueSBudW1iZXIsIGluY2x1ZGluZyBkZWNpbWFscywgYnkgdXNpbmcgSywgTSBhbmQgQiBzdWZmaXhlcyB0byBnZXQgc21hbGxlciB2YWx1ZXNcbiAqICAgICAgVE9ETzogU3VwcG9ydCB1SywgdU0gYW5kIHVCIHN1ZmZpeGVzIGZvciB2ZXJ5IHNtYWxsIG51bWJlcnM/XG4gKiAgICAgIDw9IDYgY2hhcmFjdGVycyAoPD0gNSBpZiBwb3NpdGl2ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcihjb3VudDogbnVtYmVyIHwgdW5kZWZpbmVkLCBtYXhBYnNvbHV0ZVZhbHVlPzogbnVtYmVyLCBub0RlY2ltYWw/OiBib29sZWFuLCBzcGVjaWFsQ3VycmVuY3k/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIGNvdW50ICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCIwXCI7XG4gICAgaWYgKGNvdW50IDwgMCkge1xuICAgICAgICByZXR1cm4gXCItXCIgKyBmb3JtYXROdW1iZXIoLWNvdW50LCBtYXhBYnNvbHV0ZVZhbHVlLCBub0RlY2ltYWwsIHNwZWNpYWxDdXJyZW5jeSk7XG4gICAgfVxuXG4gICAgbWF4QWJzb2x1dGVWYWx1ZSA9IG1heEFic29sdXRlVmFsdWUgPz8gTWF0aC5hYnMoY291bnQpO1xuXG4gICAgbGV0IG1heERlY2ltYWxzID0gMztcblxuICAgIC8vIE5PVEU6IFdlIGRvbid0IHN3aXRjaCB1bml0cyBhcyBzb29uIGFzIHdlIHBvc3NpYmxlIGNhbiwgYmVjYXVzZS4uLlxuICAgIC8vICAzLjU5NCB2cyAzLjU4NCBpcyBoYXJkZXIgdG8gcXVpY2tseSBkaXN0aW5ndWlzaCBjb21wYXJlZCB0byAzNTk0IGFuZCAzNTg0LFxuICAgIC8vICB0aGUgZGVjaW1hbCBzaW1wbHkgbWFrZXMgaXQgaGFyZGVyIHRvIHJlYWQsIGFuZCBsYXJnZXIuXG4gICAgLy8gTk9URTogVGhpcyBudW1iZXIgc2hvdWxkIHByZXZlbnQgdXMgZnJvbSBldmVyIHVzaW5nIDUgZGlnaXRzLCBzbyB0aGF0IHdlIG5ldmVyIG5lZWQgY29tbWFzXG4gICAgLy8gIEZvciBleGFtcGxlLCBpZiB0aGUgZmFjdG9yIGlzIDEwIHRoZW4sIDk5OTkuNSBpcyBrZXB0IHdpdGggYSBkaXZpc29yIG9mIDEsIGFuZCB0aGVuIHJvdW5kcyB1cCB0b1xuICAgIC8vICBcIjEwLDAwMFwiLiBTbyB3ZSB3YW50IGFueSB2YWx1ZSB3aGljaCByb3VuZHMgdXAgYXQgNSBkaWdpdHMgdG8gYmUgcHV0IGluIHRoZSBuZXh0IGdyb3VwIChhbmQgaGF2aW5nXG4gICAgLy8gIGV4dHJhIHZhbHVlcyBwdXQgaW4gdGhlIG5leHQgZ3JvdXAgaXMgZmluZSwgYXMgd2Ugd29uJ3Qgc2hvdyB0aGUgZGVjaW1hbCB2YWx1ZSBhbnl3YXlzLCBzbyBpdCBvbmx5XG4gICAgLy8gIG1lYW5zIDk5OTkgd3JhcHMgYXJvdW5kIHRvIDEwSyBhIGJpdCBmYXN0ZXIpLlxuICAgIGNvbnN0IGV4dHJhRmFjdG9yID0gOS45OTk0OTk5OTtcbiAgICBsZXQgZGl2aXNvciA9IDE7XG4gICAgbGV0IHN1ZmZpeCA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPSBmYWxzZTtcbiAgICBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAwMDAwMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSAxMjtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDAwMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSAxMTtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDEwO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAwMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSA5O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAwMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDg7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSA3O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSA2O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMSkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDU7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIGlmIChzcGVjaWFsQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAwMCAqIDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIktcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDA7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAwMCAqIDEwMDAgKiAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJNXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDAwICogMTAwMDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJCXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDAwICogMTAwMCAqIDEwMDA7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIlRcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3VmZml4ID0gXCJRXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMDtcbiAgICB9XG4gICAgY291bnQgLz0gZGl2aXNvcjtcbiAgICBtYXhBYnNvbHV0ZVZhbHVlIC89IGRpdmlzb3I7XG4gICAgaWYgKG5vRGVjaW1hbCkge1xuICAgICAgICBtYXhEZWNpbWFscyA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKGNvdW50LCBtYXhEZWNpbWFscywgbWF4QWJzb2x1dGVWYWx1ZSwgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA/IDIgOiB1bmRlZmluZWQpICsgc3VmZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QmluYXJ5TnVtYmVyKGNvdW50OiBudW1iZXIgfCB1bmRlZmluZWQsIG1heEFic29sdXRlVmFsdWU/OiBudW1iZXIsIG5vRGVjaW1hbD86IGJvb2xlYW4sIHNwZWNpYWxDdXJyZW5jeT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgY291bnQgIT09IFwibnVtYmVyXCIpIHJldHVybiBcIjBcIjtcbiAgICBpZiAoY291bnQgPCAwKSB7XG4gICAgICAgIHJldHVybiBcIi1cIiArIGZvcm1hdE51bWJlcigtY291bnQsIG1heEFic29sdXRlVmFsdWUsIG5vRGVjaW1hbCwgc3BlY2lhbEN1cnJlbmN5KTtcbiAgICB9XG5cbiAgICBtYXhBYnNvbHV0ZVZhbHVlID0gbWF4QWJzb2x1dGVWYWx1ZSA/PyBNYXRoLmFicyhjb3VudCk7XG5cbiAgICAvLyBOT1RFOiBXZSBkb24ndCBzd2l0Y2ggdW5pdHMgYXMgc29vbiBhcyB3ZSBwb3NzaWJsZSBjYW4sIGJlY2F1c2UuLi5cbiAgICAvLyAgMy41OTQgdnMgMy41ODQgaXMgaGFyZGVyIHRvIHF1aWNrbHkgZGlzdGluZ3Vpc2ggY29tcGFyZWQgdG8gMzU5NCBhbmQgMzU4NCxcbiAgICAvLyAgdGhlIGRlY2ltYWwgc2ltcGx5IG1ha2VzIGl0IGhhcmRlciB0byByZWFkLCBhbmQgbGFyZ2VyLlxuICAgIC8vIE5PVEU6IFRoaXMgbnVtYmVyIHNob3VsZCBwcmV2ZW50IHVzIGZyb20gZXZlciB1c2luZyA1IGRpZ2l0cywgc28gdGhhdCB3ZSBuZXZlciBuZWVkIGNvbW1hc1xuICAgIC8vICBGb3IgZXhhbXBsZSwgaWYgdGhlIGZhY3RvciBpcyAxMCB0aGVuLCA5OTk5LjUgaXMga2VwdCB3aXRoIGEgZGl2aXNvciBvZiAxLCBhbmQgdGhlbiByb3VuZHMgdXAgdG9cbiAgICAvLyAgXCIxMCwwMDBcIi4gU28gd2Ugd2FudCBhbnkgdmFsdWUgd2hpY2ggcm91bmRzIHVwIGF0IDUgZGlnaXRzIHRvIGJlIHB1dCBpbiB0aGUgbmV4dCBncm91cCAoYW5kIGhhdmluZ1xuICAgIC8vICBleHRyYSB2YWx1ZXMgcHV0IGluIHRoZSBuZXh0IGdyb3VwIGlzIGZpbmUsIGFzIHdlIHdvbid0IHNob3cgdGhlIGRlY2ltYWwgdmFsdWUgYW55d2F5cywgc28gaXQgb25seVxuICAgIC8vICBtZWFucyA5OTk5IHdyYXBzIGFyb3VuZCB0byAxMEsgYSBiaXQgZmFzdGVyKS5cbiAgICBjb25zdCBleHRyYUZhY3RvciA9IDkuOTk5NDk5OTk7XG4gICAgbGV0IGRpdmlzb3IgPSAxO1xuICAgIGxldCBzdWZmaXggPSBcIlwiO1xuICAgIGxldCBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID0gZmFsc2U7XG4gICAgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDI0ICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgaWYgKHNwZWNpYWxDdXJyZW5jeSkge1xuICAgICAgICAgICAgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDI0ICogMTAyNCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiS1wiO1xuICAgICAgICBkaXZpc29yID0gMTAyNDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAxMDI0ICogMTAyNCAqIDEwMjQgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIk1cIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMjQgKiAxMDI0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiR1wiO1xuICAgICAgICBkaXZpc29yID0gMTAyNCAqIDEwMjQgKiAxMDI0O1xuICAgIH1cbiAgICBjb3VudCAvPSBkaXZpc29yO1xuICAgIG1heEFic29sdXRlVmFsdWUgLz0gZGl2aXNvcjtcblxuICAgIGxldCBtYXhEZWNpbWFscyA9IG5vRGVjaW1hbCA/IDAgOiAzO1xuXG4gICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKGNvdW50LCBtYXhEZWNpbWFscywgbWF4QWJzb2x1dGVWYWx1ZSwgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA/IDIgOiB1bmRlZmluZWQpICsgc3VmZml4O1xufVxuXG4vKiogWVlZWS9NTS9ERCBISDpNTTpTUyBQTS9BTSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lKHRpbWU6IG51bWJlcikge1xuICAgIGZ1bmN0aW9uIHAoczogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGxldCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgbGV0IGFtcG0gPSBob3VycyA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgIGxldCBzdHJUaW1lID0gcChob3VycykgKyBcIjpcIiArIHAobWludXRlcykgKyBcIjpcIiArIHAoc2Vjb25kcykgKyBcIiBcIiArIGFtcG07XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgcChkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiL1wiICsgcChkYXRlLmdldERhdGUoKSkgKyBcIiBcIiArIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlVGltZURldGFpbGVkKHRpbWU6IG51bWJlcikge1xuICAgIGZ1bmN0aW9uIHAoczogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGxldCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgbGV0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgbGV0IG1pbGxpc2Vjb25kc1N0cmluZyA9IG1pbGxpc2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDMsIFwiMFwiKTtcblxuICAgIGxldCB0aW1lU3RyaW5nID0gdGltZS50b1N0cmluZygpO1xuICAgIGxldCBkZWNpbWFsSW5kZXggPSB0aW1lU3RyaW5nLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChkZWNpbWFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxldCBmcmFjdGlvbmFsUGFydCA9IHRpbWVTdHJpbmcuc3Vic3RyaW5nKGRlY2ltYWxJbmRleCArIDEpO1xuICAgICAgICBtaWxsaXNlY29uZHNTdHJpbmcgKz0gZnJhY3Rpb25hbFBhcnQ7XG4gICAgfVxuXG4gICAgbGV0IGFtcG0gPSBob3VycyA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgIGxldCBzdHJUaW1lID0gcChob3VycykgKyBcIjpcIiArIHAobWludXRlcykgKyBcIjpcIiArIHAoc2Vjb25kcykgKyBcIi5cIiArIG1pbGxpc2Vjb25kc1N0cmluZyArIFwiIFwiICsgYW1wbTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyBwKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBwKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgc3RyVGltZTtcbn1cblxuXG4vLyBMb29rdXAgdGFibGUgZm9yIGNvbW1vbiB0aW1lem9uZSBhYmJyZXZpYXRpb25zIGJ5IFVUQyBvZmZzZXQgKGluIG1pbnV0ZXMpXG5jb25zdCB0aW1lem9uZUFiYnJldmlhdGlvbnM6IHsgW29mZnNldE1pbnV0ZXM6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgIC8vIFVUQyBhbmQgR01UXG4gICAgXCIwXCI6IFwiVVRDXCIsXG5cbiAgICAvLyBVUy9DYW5hZGEgdGltZXpvbmVzXG4gICAgXCIzMDBcIjogXCJFU1RcIiwgICAgIC8vIFVUQy01IChFYXN0ZXJuIFN0YW5kYXJkIFRpbWUpXG4gICAgXCIyNDBcIjogXCJFRFRcIiwgICAgIC8vIFVUQy00IChFYXN0ZXJuIERheWxpZ2h0IFRpbWUpXG4gICAgXCIzNjBcIjogXCJDU1RcIiwgICAgIC8vIFVUQy02IChDZW50cmFsIFN0YW5kYXJkIFRpbWUpIFxuICAgIFwiNDIwXCI6IFwiTVNUXCIsICAgICAvLyBVVEMtNyAoTW91bnRhaW4gU3RhbmRhcmQgVGltZSlcbiAgICBcIjQ4MFwiOiBcIlBTVFwiLCAgICAgLy8gVVRDLTggKFBhY2lmaWMgU3RhbmRhcmQgVGltZSlcblxuICAgIC8vIEV1cm9wZWFuIHRpbWV6b25lc1xuICAgIFwiLTYwXCI6IFwiQ0VUXCIsICAgICAvLyBVVEMrMSAoQ2VudHJhbCBFdXJvcGVhbiBUaW1lKVxuICAgIFwiLTEyMFwiOiBcIkNFU1RcIiwgICAvLyBVVEMrMiAoQ2VudHJhbCBFdXJvcGVhbiBTdW1tZXIgVGltZSlcblxuICAgIC8vIE90aGVyIGNvbW1vbiB0aW1lem9uZXNcbiAgICBcIi00ODBcIjogXCJDU1RcIiwgICAgLy8gVVRDKzggKENoaW5hIFN0YW5kYXJkIFRpbWUpXG4gICAgXCItNTQwXCI6IFwiSlNUXCIsICAgIC8vIFVUQys5IChKYXBhbiBTdGFuZGFyZCBUaW1lKVxuICAgIFwiLTMzMFwiOiBcIklTVFwiLCAgICAvLyBVVEMrNTozMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbiAgICBcIi01NzBcIjogXCJBQ1NUXCIsICAgLy8gVVRDKzk6MzAgKEF1c3RyYWxpYW4gQ2VudHJhbCBTdGFuZGFyZCBUaW1lKVxuICAgIFwiLTYwMFwiOiBcIkFFU1RcIiwgICAvLyBVVEMrMTAgKEF1c3RyYWxpYW4gRWFzdGVybiBTdGFuZGFyZCBUaW1lKVxufTtcblxuXG4vLyBZWVlZLU1NLUREX0hILU1NLVNTLm1tbSBUSU1FWk9ORVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEZpbGVUaW1lc3RhbXBMb2NhbCh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGZ1bmN0aW9uIHAoczogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gcChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICBsZXQgZGF5ID0gcChkYXRlLmdldERhdGUoKSk7XG4gICAgbGV0IGhvdXJzID0gcChkYXRlLmdldEhvdXJzKCkpO1xuICAgIGxldCBtaW51dGVzID0gcChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgbGV0IHNlY29uZHMgPSBwKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICBsZXQgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBsZXQgbWlsbGlzZWNvbmRzU3RyaW5nID0gbWlsbGlzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIwXCIpO1xuXG4gICAgbGV0IHRpbWVTdHJpbmcgPSB0aW1lLnRvU3RyaW5nKCk7XG4gICAgbGV0IGRlY2ltYWxJbmRleCA9IHRpbWVTdHJpbmcuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGRlY2ltYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGV0IGZyYWN0aW9uYWxQYXJ0ID0gdGltZVN0cmluZy5zdWJzdHJpbmcoZGVjaW1hbEluZGV4ICsgMSk7XG4gICAgICAgIG1pbGxpc2Vjb25kc1N0cmluZyArPSBmcmFjdGlvbmFsUGFydDtcbiAgICB9XG4gICAgLy8gR2V0IHRpbWV6b25lIG9mZnNldCBpbiBtaW51dGVzIChuZWdhdGl2ZSBvZiBnZXRUaW1lem9uZU9mZnNldCBiZWNhdXNlIGl0IHJldHVybnMgb3Bwb3NpdGUgc2lnbilcbiAgICBsZXQgdGltZXpvbmVPZmZzZXRNaW51dGVzID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgLy8gTG9vayB1cCB0aGUgYWJicmV2aWF0aW9uIG9yIGZhbGxiYWNrIHRvIG51bWVyaWMgZm9ybWF0XG4gICAgbGV0IHRpbWV6b25lU3RyaW5nID0gdGltZXpvbmVBYmJyZXZpYXRpb25zW3RpbWV6b25lT2Zmc2V0TWludXRlcy50b1N0cmluZygpXTtcbiAgICBpZiAoIXRpbWV6b25lU3RyaW5nKSB7XG4gICAgICAgIC8vIEZhbGxiYWNrOiBmb3JtYXQgYXMgwrFISE1NXG4gICAgICAgIGxldCBvZmZzZXRTaWduID0gdGltZXpvbmVPZmZzZXRNaW51dGVzID49IDAgPyBcIitcIiA6IFwiLVwiO1xuICAgICAgICBsZXQgb2Zmc2V0SG91cnMgPSBwKE1hdGguZmxvb3IoTWF0aC5hYnModGltZXpvbmVPZmZzZXRNaW51dGVzKSAvIDYwKSk7XG4gICAgICAgIGxldCBvZmZzZXRNaW5zID0gcChNYXRoLmFicyh0aW1lem9uZU9mZnNldE1pbnV0ZXMpICUgNjApO1xuICAgICAgICB0aW1lem9uZVN0cmluZyA9IGAke29mZnNldFNpZ259JHtvZmZzZXRIb3Vyc30ke29mZnNldE1pbnN9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9XyR7aG91cnN9LSR7bWludXRlc30tJHtzZWNvbmRzfS4ke21pbGxpc2Vjb25kc1N0cmluZ31fJHt0aW1lem9uZVN0cmluZ31gO1xufVxuXG4vKiogMjAyNCBKYW51YXJ5IDEsIE1vbmRheSwgMTI6NTM6MDJwbSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE5pY2VEYXRlVGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcbiAgICBsZXQgc3RyVGltZSA9IHAoaG91cnMpICsgXCI6XCIgKyBwKG1pbnV0ZXMpICsgXCI6XCIgKyBwKHNlY29uZHMpICsgYW1wbTtcbiAgICBsZXQgZGF5cyA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJkZWZhdWx0XCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pICsgXCIgXCIgKyBkYXRlLmdldERhdGUoKSArIFwiLCBcIiArIGRheXNbZGF0ZS5nZXREYXkoKV0gKyBcIiwgXCIgKyBzdHJUaW1lO1xufVxuXG4vKiogMjAyNCBKYW51YXJ5IDEsIE1vbmRheSwgMTI6NTM6MDJwbSAoNCBtb250aHMgYWdvKSAgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRWZXJ5TmljZURhdGVUaW1lKHRpbWU6IG51bWJlcikge1xuICAgIGlmICghdGltZSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aW1lICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGltZSk7XG4gICAgfVxuICAgIHJldHVybiBgJHtmb3JtYXROaWNlRGF0ZVRpbWUodGltZSl9ICgke2Zvcm1hdFRpbWUoRGF0ZS5ub3coKSAtIHRpbWUpfSlgO1xufVxuXG4vKiogWVlZWS9NTS9ERCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUodGltZTogbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgcChkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiL1wiICsgcChkYXRlLmdldERhdGUoKSk7XG59XG5cbi8qKiA8PSA2IGNoYXJhY3RlcnMgKDw9IDUgaWYgcG9zaXRpdmUpICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybiBcIjAlXCI7XG4gICAgLy8gMSBkZWNpbWFsIHBvaW50LCBzbyB3ZSBoYXZlIDUgY2hhcmFjdGVycyAoanVzdCBsaWtlIGZvcm1hdE51bWJlciByZXR1cm5zIDUgY2hhcmFjdGVycylcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDApIC8gMTAgKyBcIiVcIjtcbn0iLCJcbmV4cG9ydCB0eXBlIFNvdXJjZU1hcCA9IHtcbiAgICB2ZXJzaW9uOiBudW1iZXI7XG4gICAgZmlsZTogc3RyaW5nO1xuICAgIHNvdXJjZVJvb3Q6IFwiXCIsXG4gICAgc291cmNlczogc3RyaW5nW107XG4gICAgc291cmNlc0NvbnRlbnQ6IHN0cmluZ1tdO1xuICAgIG5hbWVzOiBuZXZlcltdO1xuICAgIG1hcHBpbmdzOiBzdHJpbmc7XG59O1xuZXhwb3J0IHR5cGUgU291cmNlTWFwcGluZyA9IHtcbiAgICBnZW5lcmF0ZWRMaW5lOiBudW1iZXI7XG4gICAgZ2VuZXJhdGVkQ29sdW1uOiBudW1iZXI7XG4gICAgc291cmNlSW5kZXg6IG51bWJlcjtcbiAgICBvcmlnaW5hbExpbmU6IG51bWJlcjtcbiAgICBvcmlnaW5hbENvbHVtbjogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIEluUHJvZ3Jlc3NTb3VyY2VNYXAgPSB7XG4gICAgc291cmNlczoge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIGNvbnRlbnRzOiBzdHJpbmc7XG4gICAgfVtdO1xuICAgIG1hcHBpbmdzOiBTb3VyY2VNYXBwaW5nW107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU291cmNlTWFwKGNvbnRlbnQ6IHN0cmluZyk6IHtcbiAgICBzb3VyY2VNYXA6IFNvdXJjZU1hcCB8IHVuZGVmaW5lZDtcbiAgICBjb2RlOiBzdHJpbmc7XG59IHtcbiAgICAvLyBSZW1vdmUgYW55IHVybCBtYXBwaW5ncyAoc28gTk9UIGRhdGEgb25lcylcbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXC8jIHNvdXJjZU1hcHBpbmdVUkw9KD8hZGF0YTopW15cXHNdKyQvbSwgXCIvLyByZW1vdmVkIHVybCBzb3VyY2VtYXBcIik7XG5cbiAgICBjb25zdCBzb3VyY2VNYXBSZWdleCA9IC9cXC9cXC8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247YmFzZTY0LChbXlxcc10rKSQvbTtcbiAgICBjb25zdCBtYXRjaCA9IGNvbnRlbnQubWF0Y2goc291cmNlTWFwUmVnZXgpO1xuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICByZXR1cm4geyBzb3VyY2VNYXA6IHVuZGVmaW5lZCwgY29kZTogY29udGVudCB9O1xuICAgIH1cblxuICAgIGxldCBzb3VyY2VNYXBKc29uID0gQnVmZmVyLmZyb20obWF0Y2hbMV0sIFwiYmFzZTY0XCIpLnRvU3RyaW5nKCk7XG4gICAgLy8gSEFDSzogSWYgdGhlIHNvdXJjZW1hcCBpcyBpbnZhbGlkLCB0cnkgdG8gcmVtb3ZlIHRyYWlsaW5nIGNoYXJhY3RlcnMuIEZvciBzb21lIHJlYXNvbiB3ZSBzb21ldGltZXMgaGF2ZVxuICAgIC8vICBleHRyYSBjaGFyYWN0ZXJzIGF0IHRoZSBlbmQ/IEFsc28gdHJ5IHRvIGFkZCBzb21lIGNoYXJhY3RlcnMgdG9vP1xuICAgIGZ1bmN0aW9uIGlzSlNPTihzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGlmIChpc0pTT04oc291cmNlTWFwSnNvbikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZU1hcEpzb24gPSBzb3VyY2VNYXBKc29uLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgaWYgKCFpc0pTT04oc291cmNlTWFwSnNvbikpIHtcbiAgICAgICAgaWYgKGlzSlNPTihzb3VyY2VNYXBKc29uICsgXCJdfVwiKSkge1xuICAgICAgICAgICAgc291cmNlTWFwSnNvbiA9IHNvdXJjZU1hcEpzb24gKyBcIl19XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzb3VyY2VNYXAgPSBKU09OLnBhcnNlKHNvdXJjZU1hcEpzb24pIGFzIFNvdXJjZU1hcDtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHNvdXJjZW1hcCBsaW5lIGJ1dCBrZWVwIHRoZSBjb2RlXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2Uoc291cmNlTWFwUmVnZXgsIFwiLy8gbWVyZ2VkIGlubGluZSBzb3VyY2VtYXBcIik7XG5cbiAgICAgICAgcmV0dXJuIHsgc291cmNlTWFwLCBjb2RlOiBjb250ZW50IH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBJbnZhbGlkIHNvdXJjZSBtYXA6ICR7c291cmNlTWFwSnNvbn1gKTtcbiAgICAgICAgcmV0dXJuIHsgc291cmNlTWFwOiB1bmRlZmluZWQsIGNvZGU6IGNvbnRlbnQgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWNvZGVNYXBwaW5ncyhtYXBwaW5nczogc3RyaW5nKTogU291cmNlTWFwcGluZ1tdIHtcbiAgICBjb25zdCB2bHFUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xuICAgIGNvbnN0IHZscURlY29kZSA9IG5ldyBNYXAoQXJyYXkuZnJvbSh2bHFUYWJsZSkubWFwKChjLCBpKSA9PiBbYywgaV0pKTtcblxuICAgIGZ1bmN0aW9uIGRlY29kZVZMUShzdHI6IHN0cmluZywgcG9zOiB7IHZhbHVlOiBudW1iZXIgfSk6IG51bWJlciB7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICBsZXQgc2hpZnQgPSAwO1xuICAgICAgICBsZXQgY29udGludWF0aW9uOiBib29sZWFuO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSBzdHJbcG9zLnZhbHVlKytdO1xuICAgICAgICAgICAgY29uc3QgZGlnaXQgPSB2bHFEZWNvZGUuZ2V0KGMpO1xuICAgICAgICAgICAgaWYgKGRpZ2l0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgVkxRIGNoYXJhY3RlcjogJHtKU09OLnN0cmluZ2lmeShjKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVhdGlvbiA9IChkaWdpdCAmIDMyKSA+IDA7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpZ2l0ICYgMzE7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWUgPDwgc2hpZnQ7XG4gICAgICAgICAgICBzaGlmdCArPSA1O1xuICAgICAgICB9IHdoaWxlIChjb250aW51YXRpb24pO1xuXG4gICAgICAgIGNvbnN0IHNob3VsZE5lZ2F0ZSA9IHJlc3VsdCAmIDE7XG4gICAgICAgIHJlc3VsdCA+Pj49IDE7XG4gICAgICAgIHJldHVybiBzaG91bGROZWdhdGUgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDogU291cmNlTWFwcGluZ1tdID0gW107XG4gICAgbGV0IGdlbmVyYXRlZExpbmUgPSAxO1xuICAgIGxldCBnZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgIGxldCBzb3VyY2VJbmRleCA9IDA7XG4gICAgbGV0IG9yaWdpbmFsTGluZSA9IDE7XG4gICAgbGV0IG9yaWdpbmFsQ29sdW1uID0gMDtcblxuICAgIGNvbnN0IHNlZ21lbnRzID0gbWFwcGluZ3Muc3BsaXQoXCI7XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IHNlZ21lbnRzW2ldO1xuICAgICAgICBpZiAoIWxpbmUpIHtcbiAgICAgICAgICAgIGdlbmVyYXRlZExpbmUrKztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICAgICAgY29uc3QgZmllbGRzID0gbGluZS5zcGxpdChcIixcIik7XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgICAgICAgIGlmICghZmllbGQpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBwb3MgPSB7IHZhbHVlOiAwIH07XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50RGF0YSA9IFtdO1xuXG4gICAgICAgICAgICB3aGlsZSAocG9zLnZhbHVlIDwgZmllbGQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudERhdGEucHVzaChkZWNvZGVWTFEoZmllbGQsIHBvcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VnbWVudERhdGEubGVuZ3RoIDwgNCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGdlbmVyYXRlZENvbHVtbiArPSBzZWdtZW50RGF0YVswXTtcbiAgICAgICAgICAgIHNvdXJjZUluZGV4ICs9IHNlZ21lbnREYXRhWzFdO1xuICAgICAgICAgICAgb3JpZ2luYWxMaW5lICs9IHNlZ21lbnREYXRhWzJdO1xuICAgICAgICAgICAgb3JpZ2luYWxDb2x1bW4gKz0gc2VnbWVudERhdGFbM107XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZWRMaW5lLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlZENvbHVtbixcbiAgICAgICAgICAgICAgICBzb3VyY2VJbmRleCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbExpbmUsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb2x1bW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBnZW5lcmF0ZWRMaW5lKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJblByb2dyZXNzU291cmNlTWFwKHNvdXJjZU1hcDogU291cmNlTWFwKTogSW5Qcm9ncmVzc1NvdXJjZU1hcCB7XG4gICAgY29uc3Qgc291cmNlcyA9IHNvdXJjZU1hcC5zb3VyY2VzLm1hcCgobmFtZSwgaSkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY29udGVudHM6IHNvdXJjZU1hcC5zb3VyY2VzQ29udGVudFtpXSB8fCBcIlwiLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IG1hcHBpbmdzID0gZGVjb2RlTWFwcGluZ3Moc291cmNlTWFwLm1hcHBpbmdzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNvdXJjZXMsXG4gICAgICAgIG1hcHBpbmdzLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0luUHJvZ3Jlc3NTb3VyY2VNYXAoaW5Qcm9ncmVzczogSW5Qcm9ncmVzc1NvdXJjZU1hcCwgbmV3TWFwcGluZ3M6IEluUHJvZ3Jlc3NTb3VyY2VNYXApIHtcbiAgICBjb25zdCBzb3VyY2VJbmRleE9mZnNldCA9IGluUHJvZ3Jlc3Muc291cmNlcy5sZW5ndGg7XG5cbiAgICAvLyBBZGQgbmV3IHNvdXJjZXNcbiAgICBpblByb2dyZXNzLnNvdXJjZXMucHVzaCguLi5uZXdNYXBwaW5ncy5zb3VyY2VzKTtcblxuICAgIC8vIEFkZCBtYXBwaW5ncyB3aXRoIGFkanVzdGVkIHNvdXJjZSBpbmRpY2VzXG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIG5ld01hcHBpbmdzLm1hcHBpbmdzKSB7XG4gICAgICAgIGluUHJvZ3Jlc3MubWFwcGluZ3MucHVzaCh7XG4gICAgICAgICAgICAuLi5tYXBwaW5nLFxuICAgICAgICAgICAgc291cmNlSW5kZXg6IG1hcHBpbmcuc291cmNlSW5kZXggKyBzb3VyY2VJbmRleE9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluYWxpemVJblByb2dyZXNzU291cmNlTWFwKGluUHJvZ3Jlc3M6IEluUHJvZ3Jlc3NTb3VyY2VNYXApOiBTb3VyY2VNYXAge1xuICAgIGNvbnN0IHZscVRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG5cbiAgICBmdW5jdGlvbiBlbmNvZGVWTFEodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIENvbnZlcnQgdG8gemlnemFnIGVuY29kaW5nXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPCAwID8gKC12YWx1ZSA8PCAxKSB8IDEgOiB2YWx1ZSA8PCAxO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgZGlnaXQgPSB2YWx1ZSAmIDMxO1xuICAgICAgICAgICAgdmFsdWUgPj4+PSA1O1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIGRpZ2l0IHw9IDMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ICs9IHZscVRhYmxlW2RpZ2l0XTtcbiAgICAgICAgfSB3aGlsZSAodmFsdWUgPiAwKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIFNvcnQgbWFwcGluZ3MgYnkgZ2VuZXJhdGVkIHBvc2l0aW9uXG4gICAgY29uc3Qgc29ydGVkTWFwcGluZ3MgPSBbLi4uaW5Qcm9ncmVzcy5tYXBwaW5nc10uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5nZW5lcmF0ZWRMaW5lICE9PSBiLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmdlbmVyYXRlZExpbmUgLSBiLmdlbmVyYXRlZExpbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEuZ2VuZXJhdGVkQ29sdW1uIC0gYi5nZW5lcmF0ZWRDb2x1bW47XG4gICAgfSk7XG5cbiAgICAvLyBHZW5lcmF0ZSB0aGUgbWFwcGluZ3Mgc3RyaW5nXG4gICAgbGV0IHByZXZHZW5MaW5lID0gMTtcbiAgICBsZXQgcHJldkdlbkNvbHVtbiA9IDA7XG4gICAgbGV0IHByZXZTb3VyY2VJbmRleCA9IDA7XG4gICAgbGV0IHByZXZPcmlnTGluZSA9IDE7XG4gICAgbGV0IHByZXZPcmlnQ29sdW1uID0gMDtcblxuICAgIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBjdXJyZW50TGluZTogc3RyaW5nW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiBzb3J0ZWRNYXBwaW5ncykge1xuICAgICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lID4gcHJldkdlbkxpbmUpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goY3VycmVudExpbmUuam9pbihcIixcIikpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHByZXZHZW5MaW5lICsgMTsgaSA8IG1hcHBpbmcuZ2VuZXJhdGVkTGluZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRMaW5lID0gW107XG4gICAgICAgICAgICBwcmV2R2VuQ29sdW1uID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBbXG4gICAgICAgICAgICBlbmNvZGVWTFEobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLSBwcmV2R2VuQ29sdW1uKSxcbiAgICAgICAgICAgIGVuY29kZVZMUShtYXBwaW5nLnNvdXJjZUluZGV4IC0gcHJldlNvdXJjZUluZGV4KSxcbiAgICAgICAgICAgIGVuY29kZVZMUShtYXBwaW5nLm9yaWdpbmFsTGluZSAtIHByZXZPcmlnTGluZSksXG4gICAgICAgICAgICBlbmNvZGVWTFEobWFwcGluZy5vcmlnaW5hbENvbHVtbiAtIHByZXZPcmlnQ29sdW1uKSxcbiAgICAgICAgXTtcblxuICAgICAgICBjdXJyZW50TGluZS5wdXNoKHNlZ21lbnQuam9pbihcIlwiKSk7XG5cbiAgICAgICAgcHJldkdlbkxpbmUgPSBtYXBwaW5nLmdlbmVyYXRlZExpbmU7XG4gICAgICAgIHByZXZHZW5Db2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcbiAgICAgICAgcHJldlNvdXJjZUluZGV4ID0gbWFwcGluZy5zb3VyY2VJbmRleDtcbiAgICAgICAgcHJldk9yaWdMaW5lID0gbWFwcGluZy5vcmlnaW5hbExpbmU7XG4gICAgICAgIHByZXZPcmlnQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudExpbmUubGVuZ3RoID4gMCkge1xuICAgICAgICBsaW5lcy5wdXNoKGN1cnJlbnRMaW5lLmpvaW4oXCIsXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiAzLFxuICAgICAgICBmaWxlOiBcIlwiLFxuICAgICAgICBzb3VyY2VSb290OiBcIlwiLFxuICAgICAgICBzb3VyY2VzOiBpblByb2dyZXNzLnNvdXJjZXMubWFwKHMgPT4gcy5uYW1lKSxcbiAgICAgICAgc291cmNlc0NvbnRlbnQ6IGluUHJvZ3Jlc3Muc291cmNlcy5tYXAocyA9PiBzLmNvbnRlbnRzKSxcbiAgICAgICAgbmFtZXM6IFtdLFxuICAgICAgICBtYXBwaW5nczogbGluZXMuam9pbihcIjtcIiksXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVTb3VyY2VNYXBMaW5lQ29tbWVudChzb3VyY2VNYXA6IFNvdXJjZU1hcCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc291cmNlTWFwSnNvbiA9IEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCk7XG4gICAgY29uc3QgYmFzZTY0ID0gQnVmZmVyLmZyb20oc291cmNlTWFwSnNvbikudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gICAgLy8gTk9URTogRG9uJ3Qgd3JpdGUgaXQgYXMgb25lIHN0cmluZywgYXMgdGhlbiB3ZSBhcmUgZGV0ZWN0ZWQgYXMgYSBzb3VyY2VtYXAsIGFuZCBicmVhayBzb3VyY2VtYXBzLi4uXG4gICAgcmV0dXJuIFwiLy9cIiArIGAjIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2Jhc2U2NH1gO1xufSIsIi8vIEJ1bmRsZWQgd2ViLXdvcmtlciBlbnRyeS4gQnVpbHQgaW50byA8ZGVwbG95Pi9haVdvcmtlckVudHJ5LmpzIGJ5IHNjcmlwdHMvYnVpbGQudHMgYW5kIGxvYWRlZFxuLy8gZnJvbSB0aGVyZSBieSBhaVdvcmtlclBvb2wudHMgKGJyb3dzZXIgcGF0aCkuIERpc3BhdGNoZXMgdG8gYSByZWdpc3RlcmVkIHN0cmF0ZWd5IGJ5IGlkLlxuaW1wb3J0IHsgZ2V0U3RyYXRlZ3kgfSBmcm9tIFwiLi9zdHJhdGVnaWVzL2luZGV4XCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyLCBBSVdvcmtlclJlcXVlc3QgfSBmcm9tIFwiLi9haVR5cGVzXCI7XG5cbmludGVyZmFjZSBXb3JrZXJTZWxmIHtcbiAgICBvbm1lc3NhZ2U6ICgoZTogTWVzc2FnZUV2ZW50PEFJV29ya2VyUmVxdWVzdD4pID0+IHZvaWQpIHwgbnVsbDtcbiAgICBwb3N0TWVzc2FnZShkYXRhOiB1bmtub3duKTogdm9pZDtcbn1cblxuLy8gR2F0ZSBvbiBgc2VsZmAgZXhpc3Rpbmcg4oCUIHRoZSBidW5kbGVyIHJ1bnMgdXMgdGhyb3VnaCBub2RlIGZpcnN0IHRvIHJlY29yZCByZXF1aXJlLmNhY2hlLCBhbmRcbi8vIG5vZGUgZG9lc24ndCBoYXZlIGBzZWxmYC4gSW5zaWRlIGEgcmVhbCB3ZWIgd29ya2VyIGBzZWxmYCBpcyBkZWZpbmVkIGFuZCB3ZSB3aXJlIHVwLlxuaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3Qgd29ya2VyU2NvcGUgPSBzZWxmIGFzIHVua25vd24gYXMgV29ya2VyU2VsZjtcbiAgICB3b3JrZXJTY29wZS5vbm1lc3NhZ2UgPSBhc3luYyAoZTogTWVzc2FnZUV2ZW50PEFJV29ya2VyUmVxdWVzdD4pID0+IHtcbiAgICAgICAgY29uc3QgcmVxID0gZS5kYXRhO1xuICAgICAgICBpZiAoIXJlcSB8fCAhcmVxLnNuYXBzaG90KSB7XG4gICAgICAgICAgICB3b3JrZXJTY29wZS5wb3N0TWVzc2FnZSh7IHN0YXR1czogXCJlcnJvclwiLCBtZXNzYWdlOiBcIm5vIHJlcXVlc3Qvc25hcHNob3RcIiB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPSBnZXRTdHJhdGVneShyZXEuc3RyYXRlZ3lJZCk7XG4gICAgICAgICAgICBjb25zdCBvblByb2dyZXNzID0gKG9yZGVyczogQUlXb3JrZXJPcmRlcltdKSA9PiB7XG4gICAgICAgICAgICAgICAgd29ya2VyU2NvcGUucG9zdE1lc3NhZ2UoeyBzdGF0dXM6IFwicHJvZ3Jlc3NcIiwgb3JkZXJzIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IHN0cmF0ZWd5KHJlcS5zbmFwc2hvdCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZzogcmVxLmNvbmZpZyxcbiAgICAgICAgICAgICAgICBkZWFkbGluZU1zOiBEYXRlLm5vdygpICsgcmVxLnRpbWVvdXRNcyxcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3b3JrZXJTY29wZS5wb3N0TWVzc2FnZSh7IHN0YXR1czogXCJkb25lXCIsIG9yZGVycyB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpO1xuICAgICAgICAgICAgd29ya2VyU2NvcGUucG9zdE1lc3NhZ2UoeyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCIvLyBJbXBvcnRpbmcgdGhpcyBtb2R1bGUgcmVnaXN0ZXJzIGV2ZXJ5IGJ1aWx0LWluIHN0cmF0ZWd5IGFzIGEgc2lkZSBlZmZlY3QuIEJvdGggdGhlIHdvcmtlciBlbnRyeVxuLy8gYW5kIHRoZSBub2RlIHNpbSBpbXBvcnQgaXQgc28gZ2V0U3RyYXRlZ3koKSBjYW4gcmVzb2x2ZSBhbnkgaWQuXG5pbXBvcnQgXCIuL2JlZWxpbmVcIjtcbmltcG9ydCBcIi4vZ3JlZWR5Q2l0eVwiO1xuaW1wb3J0IFwiLi9jb25zb2xpZGF0ZVwiO1xuaW1wb3J0IFwiLi9mb2N1c0ZpcmVcIjtcbmltcG9ydCBcIi4vZm9jdXNXZWFrZXN0RmFjdGlvblwiO1xuaW1wb3J0IFwiLi9tb250ZUNhcmxvXCI7XG5pbXBvcnQgXCIuL3RocmVhdEF3YXJlXCI7XG5pbXBvcnQgXCIuL2luZmx1ZW5jZU1hcFwiO1xuaW1wb3J0IFwiLi90ZXJyaXRvcnlcIjtcbmltcG9ydCBcIi4vc25vd2JhbGxcIjtcbmltcG9ydCBcIi4vY29vcmRpbmF0ZVwiO1xuXG5leHBvcnQgeyBnZXRTdHJhdGVneSwgZ2V0U3RyYXRlZ3lJZHMsIHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuIiwiaW1wb3J0IHsgcGxhbkJlZWxpbmVPcmRlcnMgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIHYxIGJhc2VsaW5lOiBldmVyeSBnZW5lcmFsIGJlZWxpbmVzIHRvd2FyZCB0aGUgbmVhcmVzdCBlbmVteSBjaXR5LCBncm93aW5nIHdoZW4gZm9vZCBhbGxvd3MuXG4vLyBUaGlzIGlzIGFsc28gdGhlIGRlZmF1bHQgYWdlbnQgZm9yIG5vcm1hbCBicm93c2VyIHBsYXksIHNvIGdyb3d0aCBpcyBvbiBieSBkZWZhdWx0IHRoZXJlLlxucmVnaXN0ZXJTdHJhdGVneShcImJlZWxpbmVcIiwgKHNuYXBzaG90LCBjdHgpID0+IHdpdGhHcm93dGgoc25hcHNob3QsIGN0eC5jb25maWcsIHBsYW5CZWVsaW5lT3JkZXJzKHNuYXBzaG90KSkpO1xuIiwiLy8gUHVyZSBBSSBwbGFubmluZyDigJQgbm8gRE9NLCBubyB3b3JrZXIgZ2xvYmFscywgbm8gc2NoZW1hIGltcG9ydHMuIFNoYXJlZCBieSB0aGUgd2ViLXdvcmtlciBlbnRyeVxuLy8gKGFpV29ya2VyRW50cnkudHMpIGFuZCB0aGUgaW4tcHJvY2VzcyBub2RlIHBhdGggKGFpV29ya2VyUG9vbC50cyBpbiBub2RlKS4gS2VlcGluZyBpdCBkZXBlbmRlbmN5LVxuLy8gZnJlZSBrZWVwcyB0aGUgd29ya2VyIGJ1bmRsZSB0aW55IGFuZCBsZXRzIHRoZSBub2RlIHNpbXVsYXRpb24gY2FsbCBpdCBkaXJlY3RseS5cbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3QgfSBmcm9tIFwiLi9haVR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9mZnNldFRvQ3ViZShwOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KSB7XG4gICAgY29uc3QgY29sID0gcC54O1xuICAgIGNvbnN0IHJvdyA9IGNvbCAlIDIgPT09IDAgPyBwLnkgOiBwLnkgLSAwLjU7XG4gICAgY29uc3QgY3ViZV94ID0gY29sO1xuICAgIGNvbnN0IGN1YmVfeiA9IHJvdyAtIChjb2wgLSAoY29sICYgMSkpIC8gMjtcbiAgICBjb25zdCBjdWJlX3kgPSAtY3ViZV94IC0gY3ViZV96O1xuICAgIHJldHVybiB7IHg6IGN1YmVfeCwgeTogY3ViZV95LCB6OiBjdWJlX3ogfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoZXhEaXN0YW5jZShhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9LCBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KTogbnVtYmVyIHtcbiAgICBjb25zdCBjYSA9IG9mZnNldFRvQ3ViZShhKTtcbiAgICBjb25zdCBjYiA9IG9mZnNldFRvQ3ViZShiKTtcbiAgICByZXR1cm4gKE1hdGguYWJzKGNhLnggLSBjYi54KSArIE1hdGguYWJzKGNhLnkgLSBjYi55KSArIE1hdGguYWJzKGNhLnogLSBjYi56KSkgLyAyO1xufVxuXG4vLyB2MSBzdHJhdGVneTogZWFjaCBvZiBvdXIgZ2VuZXJhbHMgYmVlbGluZXMgdG93YXJkIHRoZSBuZWFyZXN0IGVuZW15IGNpdHkuXG5leHBvcnQgZnVuY3Rpb24gcGxhbkJlZWxpbmVPcmRlcnMoc25hcHNob3Q6IEFJV29ya2VyU25hcHNob3QpOiBBSVdvcmtlck9yZGVyW10ge1xuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW5lcmFsIG9mIG91ckdlbmVyYWxzKSB7XG4gICAgICAgIGxldCB0YXJnZXQ6IHR5cGVvZiBlbmVteUNpdGllc1tudW1iZXJdIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGVuZW15Q2l0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZ2VuZXJhbCwgY2l0eSk7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REaXN0KSB7XG4gICAgICAgICAgICAgICAgYmVzdERpc3QgPSBkO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuZXJhbC5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcnM7XG59XG4iLCJpbXBvcnQgeyBBSVdvcmtlck9yZGVyLCBBSVdvcmtlclNuYXBzaG90IH0gZnJvbSBcIi4vYWlUeXBlc1wiO1xuXG4vLyBTaGFyZWQgZ3Jvd3RoIGRlY2lzaW9uLCB3cmFwcGVkIGFyb3VuZCBhIHN0cmF0ZWd5J3MgbW92ZSBvcmRlcnMgc28gZXZlcnkgb25lIG9mIG91ciBnZW5lcmFsc1xuLy8gZ2V0cyBhIGdyb3d0aE1vZGUgc2V0IChhbmQgZ2VuZXJhbHMgd2l0aG91dCBhIG1vdmUgc3RpbGwgZ2V0IGEgZ3Jvdy9ob2xkIG9yZGVyKS5cbi8vXG4vLyBjb25maWcuZ3JvdyBjb250cm9scyBpdDpcbi8vICAgXCJuZXZlclwiICAgICAgICAgICAg4oCUIG5ldmVyIGdyb3cuXG4vLyAgIFwiYWx3YXlzXCIgICAgICAgICAgIOKAlCBhbHdheXMgZ3JvdyAocmlza3Mgc3RhcnZhdGlvbiBpZiBmb29kIG5ldCA8IDApLlxuLy8gICBcIndoZW5Gb29kUG9zaXRpdmVcIiDigJQgZ3JvdyBvbmx5IHdoZW4gdGhlIGZhY3Rpb24ncyBmb29kIG5ldCBpcyA+PSAwIChkZWZhdWx0KS4gVGhpcyBpcyB0aGUgc2FmZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsLXB1cnBvc2UgcG9saWN5OiBidWlsZCB1cCB3aGlsZSB0aGUgZWNvbm9teSBzdXN0YWlucyBpdC5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoR3Jvd3RoKFxuICAgIHNuYXBzaG90OiBBSVdvcmtlclNuYXBzaG90LFxuICAgIGNvbmZpZzogeyBncm93PzogdW5rbm93bjsgfSxcbiAgICBtb3ZlT3JkZXJzOiBBSVdvcmtlck9yZGVyW10sXG4pOiBBSVdvcmtlck9yZGVyW10ge1xuICAgIGNvbnN0IGdyb3cgPSB0eXBlb2YgY29uZmlnLmdyb3cgPT09IFwic3RyaW5nXCIgPyBjb25maWcuZ3JvdyA6IFwid2hlbkZvb2RQb3NpdGl2ZVwiO1xuICAgIGNvbnN0IHNob3VsZEdyb3cgPSBncm93ID09PSBcImFsd2F5c1wiXG4gICAgICAgIHx8IChncm93ICE9PSBcIm5ldmVyXCIgJiYgc25hcHNob3QuZm9vZC5uZXQgPj0gMCk7XG5cbiAgICBjb25zdCBieUdlbmVyYWwgPSBuZXcgTWFwPHN0cmluZywgQUlXb3JrZXJPcmRlcj4oKTtcbiAgICBmb3IgKGNvbnN0IG8gb2YgbW92ZU9yZGVycykge1xuICAgICAgICBieUdlbmVyYWwuc2V0KG8uZ2VuZXJhbElkLCB7IC4uLm8sIGdyb3d0aE1vZGU6IHNob3VsZEdyb3cgfSk7XG4gICAgfVxuICAgIC8vIEVuc3VyZSBldmVyeSBvbmUgb2Ygb3VyIGdlbmVyYWxzIGhhcyBhbiBvcmRlciBjYXJyeWluZyB0aGUgZ3Jvd3RoIGRlY2lzaW9uLCBldmVuIGlmIHRoZVxuICAgIC8vIHN0cmF0ZWd5IGdhdmUgaXQgbm8gbW92ZSB0aGlzIHR1cm4uXG4gICAgZm9yIChjb25zdCBnIG9mIHNuYXBzaG90LmdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnLmZhY3Rpb25JZCAhPT0gc25hcHNob3QuZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFieUdlbmVyYWwuaGFzKGcuaWQpKSB7XG4gICAgICAgICAgICBieUdlbmVyYWwuc2V0KGcuaWQsIHsgZ2VuZXJhbElkOiBnLmlkLCBncm93dGhNb2RlOiBzaG91bGRHcm93IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGJ5R2VuZXJhbC52YWx1ZXMoKSk7XG59XG4iLCJpbXBvcnQgeyBBSVN0cmF0ZWd5IH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcblxuLy8gU3RyYXRlZ3kgcmVnaXN0cnkuIEV2ZXJ5IEFJIGlzIGEgbmFtZWQsIGhhbmQtd3JpdHRlbiBzdHJhdGVneS4gV2hlbiBhIHN0cmF0ZWd5IGlzIHJldmlzZWQsIGdpdmVcbi8vIGl0IGEgTkVXIGlkIHNvIHByaW9yIHZlcnNpb25zIGtlZXAgd29ya2luZyBhbmQgcmVtYWluIGNvbXBhcmFibGUgaW4gdG91cm5hbWVudHMuXG5jb25zdCBzdHJhdGVnaWVzID0gbmV3IE1hcDxzdHJpbmcsIEFJU3RyYXRlZ3k+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0cmF0ZWd5KGlkOiBzdHJpbmcsIHN0cmF0ZWd5OiBBSVN0cmF0ZWd5KSB7XG4gICAgaWYgKHN0cmF0ZWdpZXMuaGFzKGlkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBBSSBzdHJhdGVneSBpZDogJHtpZH1gKTtcbiAgICB9XG4gICAgc3RyYXRlZ2llcy5zZXQoaWQsIHN0cmF0ZWd5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmF0ZWd5KGlkOiBzdHJpbmcpOiBBSVN0cmF0ZWd5IHtcbiAgICBjb25zdCBzID0gc3RyYXRlZ2llcy5nZXQoaWQpO1xuICAgIGlmICghcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gQUkgc3RyYXRlZ3kgaWQ6ICR7aWR9LiBSZWdpc3RlcmVkOiAke0pTT04uc3RyaW5naWZ5KGdldFN0cmF0ZWd5SWRzKCkpfWApO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmF0ZWd5SWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShzdHJhdGVnaWVzLmtleXMoKSk7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBDb25maWd1cmFibGUgZ3JlZWR5IHRhcmdldC1waWNrZXIuIEVhY2ggZ2VuZXJhbCBpbmRlcGVuZGVudGx5IHNjb3JlcyBjYW5kaWRhdGUgdGFyZ2V0cyBhbmQgbW92ZXNcbi8vIHRvd2FyZCB0aGUgYmVzdCBvbmUuIFNjb3JlID0gZGlzdFdlaWdodCpkaXN0YW5jZSArIGdhcnJpc29uV2VpZ2h0KmdhcnJpc29uIOKIkiBjYXBpdGFsQm9udXMoaWYgY2FwaXRhbCkuXG4vLyBMb3dlciBzY29yZSB3aW5zLCBzbyBoaWdoIGRpc3RXZWlnaHQgPSBwcmVmZXIgY2xvc2VyLCBoaWdoIGdhcnJpc29uV2VpZ2h0ID0gcHJlZmVyIHNvZnRlciB0YXJnZXRzLFxuLy8gY2FwaXRhbEJvbnVzIHB1bGxzIHRvd2FyZCBlbmVteSBjYXBpdGFscy4gV2l0aCB0YXJnZXRHZW5lcmFscywgZW5lbXkgZ2VuZXJhbHMgKHRyZWF0ZWQgYXNcbi8vIGdhcnJpc29uID0gdGhlaXIgdW5pdCBjb3VudCkgYXJlIGFsc28gY2FuZGlkYXRlcy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJncmVlZHlDaXR5XCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMCk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91ckdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91ckdlbmVyYWxzKSB7XG4gICAgICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGdlbiwgdClcbiAgICAgICAgICAgICAgICArIGdhcnJpc29uV2VpZ2h0ICogdC5nYXJyaXNvblxuICAgICAgICAgICAgICAgIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG4gICAgICAgICAgICBpZiAoc2NvcmUgPCBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICAgICAgICBiZXN0ID0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogYmVzdC54LCB5OiBiZXN0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIEZvcmNlLWNvbmNlbnRyYXRpb24gc3RyYXRlZ3kuIEEgZ2VuZXJhbCB3ZWFrZXIgdGhhbiBtZXJnZUZyYWN0aW9uIMOXIHRoZSBmYWN0aW9uJ3Mgc3Ryb25nZXN0XG4vLyBnZW5lcmFsIG1vdmVzIHRvd2FyZCB0aGF0IHN0cm9uZ2VzdCBhbGx5IHRvIHN0YWNrIHVwIChzYW1lLXRpbGUgc2FtZS1mYWN0aW9uIHVuaXRzIGZpZ2h0IHRvZ2V0aGVyLFxuLy8gc28gY29uY2VudHJhdGlvbiB3aW5zIGZpZ2h0cykuIEV2ZXJ5b25lIGVsc2UgYXR0YWNrcyB0aGUgYmVzdCBlbmVteSB0YXJnZXQsIHNjb3JlZCBsaWtlXG4vLyBncmVlZHlDaXR5IChkaXN0V2VpZ2h0wrdkaXN0YW5jZSArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvbiDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLCBvcHRpb25hbGx5XG4vLyBhbHNvIGh1bnRpbmcgZW5lbXkgZ2VuZXJhbHMuXG5yZWdpc3RlclN0cmF0ZWd5KFwiY29uc29saWRhdGVcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcbiAgICBjb25zdCB0YXJnZXRHZW5lcmFscyA9IGNmZy50YXJnZXRHZW5lcmFscyA9PT0gdHJ1ZTtcbiAgICBjb25zdCBtZXJnZUZyYWN0aW9uID0gbnVtKGNmZy5tZXJnZUZyYWN0aW9uLCAwLjgpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGxldCBzdHJvbmdlc3QgPSBvdXJzWzBdO1xuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSBpZiAoZy50b3RhbFVuaXRzID4gc3Ryb25nZXN0LnRvdGFsVW5pdHMpIHN0cm9uZ2VzdCA9IGc7XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91cnMpIHtcbiAgICAgICAgLy8gV2VhayBnZW5lcmFsIHdpdGggYSBzdHJvbmdlciBhbGx5IHRvIG1lcmdlIGludG8g4oaSIGdvIHN0YWNrIHVwLlxuICAgICAgICBpZiAoZ2VuLmlkICE9PSBzdHJvbmdlc3QuaWQgJiYgZ2VuLnRvdGFsVW5pdHMgPCBtZXJnZUZyYWN0aW9uICogc3Ryb25nZXN0LnRvdGFsVW5pdHMpIHtcbiAgICAgICAgICAgIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiB7IHg6IHN0cm9uZ2VzdC54LCB5OiBzdHJvbmdlc3QueSB9IH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGJlc3Q6IFRhcmdldCB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZ2VuLCB0KVxuICAgICAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAgICAgLSAodC5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcbiAgICAgICAgICAgIGlmIChzY29yZSA8IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHQ7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogYmVzdC54LCB5OiBiZXN0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIENvb3JkaW5hdGVkIGZvY3VzLWZpcmU6IHRoZSB3aG9sZSBmYWN0aW9uIHBpY2tzIE9ORSBnbG9iYWwgdGFyZ2V0IGFuZCBldmVyeSBnZW5lcmFsIGNvbnZlcmdlcyBvblxuLy8gaXQsIG5hdHVyYWxseSBzdGFja2luZyBpbnRvIGEgc2luZ2xlIGhhbW1lci4gVGhlIHRhcmdldCBpcyBzY29yZWQgZnJvbSB0aGUgZmFjdGlvbidzIGNlbnRyb2lkXG4vLyAoZGlzdFdlaWdodMK3ZGlzdCArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvbiDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLiBXaGVuIHRoZSB0YXJnZXQgaXMgY2FwdHVyZWRcbi8vIHRoZSBuZXh0IGNhbGwgcmUtcGlja3MsIHNvIHRoZSBkb29tc3RhY2sgcm9sbHMgZnJvbSBvYmplY3RpdmUgdG8gb2JqZWN0aXZlLlxucmVnaXN0ZXJTdHJhdGVneShcImZvY3VzRmlyZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNSk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGN4ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLngsIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY3kgPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueSwgMCkgLyBvdXJzLmxlbmd0aDtcbiAgICBjb25zdCBjZW50cm9pZCA9IHsgeDogY3gsIHk6IGN5IH07XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KTtcbiAgICB9XG4gICAgaWYgKHRhcmdldEdlbmVyYWxzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICBsZXQgYmVzdDogVGFyZ2V0IHwgdW5kZWZpbmVkO1xuICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICBjb25zdCBzY29yZSA9IGRpc3RXZWlnaHQgKiBoZXhEaXN0YW5jZShjZW50cm9pZCwgdClcbiAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAtICh0LmlzQ2FwaXRhbCA/IGNhcGl0YWxCb251cyA6IDApO1xuICAgICAgICBpZiAoc2NvcmUgPCBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2NvcmU7IGJlc3QgPSB0OyB9XG4gICAgfVxuICAgIGlmICghYmVzdCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gYmVzdDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBTbm93YmFsbCBmb2N1czogY29uY2VudHJhdGUgdGhlIHdob2xlIGZhY3Rpb24gb24gdGhlIFdFQUtFU1Qgc3Vydml2aW5nIGVuZW15IGZhY3Rpb24sIHRvXG4vLyBlbGltaW5hdGUgb3Bwb25lbnRzIG9uZSBhdCBhIHRpbWUgKGZld2VyIGVuZW1pZXMgPSBjb21wb3VuZGluZyBhZHZhbnRhZ2UpLiBBbW9uZyB0aGF0IGZhY3Rpb24nc1xuLy8gY2l0aWVzIHdlIHBpY2sgdGhlIG9uZSBiZXN0IHNjb3JlZCBmcm9tIG91ciBjZW50cm9pZCAoZGlzdFdlaWdodMK3ZGlzdCArIGdhcnJpc29uV2VpZ2h0wrdnYXJyaXNvblxuLy8g4oiSIGNhcGl0YWxCb251c8K3aXNDYXBpdGFsKS4gSWYgdGhlIHdlYWtlc3QgZmFjdGlvbiBoYXMgbm8gY2l0aWVzIGxlZnQgd2UgZmFsbCBiYWNrIHRvIGl0cyBuZWFyZXN0XG4vLyBnZW5lcmFsLCB0aGVuIHRvIGFueSBlbmVteSBjaXR5LlxucmVnaXN0ZXJTdHJhdGVneShcImZvY3VzV2Vha2VzdEZhY3Rpb25cIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgaWYgKG91cnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBjeCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy54LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGN5ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnksIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY2VudHJvaWQgPSB7IHg6IGN4LCB5OiBjeSB9O1xuXG4gICAgLy8gVG90YWwgc3RyZW5ndGggcGVyIGVuZW15IGZhY3Rpb24gPSBpdHMgZ2VuZXJhbHMnIHN0YWNrZWQgdW5pdHMgKyBpdHMgY2l0aWVzJyBnYXJyaXNvbnMuXG4gICAgY29uc3Qgc3RyZW5ndGhCeUZhY3Rpb24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykge1xuICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHN0cmVuZ3RoQnlGYWN0aW9uLnNldChnLmZhY3Rpb25JZCwgKHN0cmVuZ3RoQnlGYWN0aW9uLmdldChnLmZhY3Rpb25JZCkgPz8gMCkgKyBnLnRvdGFsVW5pdHMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGMgb2YgY2l0aWVzKSB7XG4gICAgICAgIGlmIChjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgc3RyZW5ndGhCeUZhY3Rpb24uc2V0KGMuZmFjdGlvbklkLCAoc3RyZW5ndGhCeUZhY3Rpb24uZ2V0KGMuZmFjdGlvbklkKSA/PyAwKSArIGMuZ2Fycmlzb24pO1xuICAgIH1cbiAgICBpZiAoc3RyZW5ndGhCeUZhY3Rpb24uc2l6ZSA9PT0gMCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgbGV0IHdlYWtlc3Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBsZXQgd2Vha2VzdFN0cmVuZ3RoID0gSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBbZmlkLCBzXSBvZiBzdHJlbmd0aEJ5RmFjdGlvbikge1xuICAgICAgICBpZiAocyA8IHdlYWtlc3RTdHJlbmd0aCkgeyB3ZWFrZXN0U3RyZW5ndGggPSBzOyB3ZWFrZXN0ID0gZmlkOyB9XG4gICAgfVxuXG4gICAgdHlwZSBUYXJnZXQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBnYXJyaXNvbjogbnVtYmVyOyBpc0NhcGl0YWw6IGJvb2xlYW47IH07XG4gICAgY29uc3Qgc2NvcmUgPSAodDogVGFyZ2V0KSA9PiBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoY2VudHJvaWQsIHQpXG4gICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG5cbiAgICBjb25zdCBwaWNrID0gKGNhbmRzOiBUYXJnZXRbXSk6IFRhcmdldCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7IGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIGNhbmRzKSB7IGNvbnN0IHMgPSBzY29yZSh0KTsgaWYgKHMgPCBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gczsgYmVzdCA9IHQ7IH0gfVxuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICB9O1xuXG4gICAgbGV0IHRhcmdldCA9IHBpY2soY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkID09PSB3ZWFrZXN0KVxuICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpKTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICB0YXJnZXQgPSBwaWNrKGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSB3ZWFrZXN0KVxuICAgICAgICAgICAgLm1hcChnID0+ICh7IHg6IGcueCwgeTogZy55LCBnYXJyaXNvbjogZy50b3RhbFVuaXRzLCBpc0NhcGl0YWw6IGZhbHNlIH0pKSk7XG4gICAgfVxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldCA9IHBpY2soY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpXG4gICAgICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpKTtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIFtdKTtcblxuICAgIGNvbnN0IHQgPSB0YXJnZXQ7XG4gICAgY29uc3Qgb3JkZXJzID0gb3Vycy5tYXAoZyA9PiAoeyBnZW5lcmFsSWQ6IGcuaWQsIHRhcmdldFBvc2l0aW9uOiB7IHg6IHQueCwgeTogdC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBNb250ZS1DYXJsbyBvcGVuaW5nIHBpY2tlci4gRm9yIGVhY2ggY2FuZGlkYXRlIGZpcnN0LXRhcmdldCwgcnVuIGd1aWRlZCByb2xsb3V0cyBvbiBhIGxpZ2h0d2VpZ2h0XG4vLyBpbnRlcm5hbCBtb2RlbCAob3VyIHdob2xlIGFybXkgYXMgb25lIHN0YWNrIHNub3diYWxsaW5nIHRocm91Z2ggZW5lbXkgY2l0aWVzIHVuZGVyIGEgZ3JlZWR5XG4vLyBkZXRlcm1pbmlzdGljIHBvbGljeSwgd2l0aCByYW5kb21pemVkIHRpZS1icmVha2luZyA9IHRoZSBNQyBzYW1wbGluZykuIFNjb3JlIGVhY2ggY2FuZGlkYXRlIGJ5IGhvd1xuLy8gbXVjaCBpdCBsZXRzIHVzIHNub3diYWxsOyBzZW5kIHRoZSB3aG9sZSBmYWN0aW9uIGF0IHRoZSBiZXN0IG9wZW5pbmcuIEFwcHJveGltYXRlIGJ5IGRlc2lnbiDigJQgdGhlXG4vLyBzdHJhdGVneSBvbmx5IGhhcyB0aGUgc25hcHNob3QsIG5vdCB0aGUgcmVhbCBlbmdpbmUg4oCUIGJ1dCBpdCBkZW1vbnN0cmF0ZXMgZGV0ZXJtaW5pc3RpYy1wb2xpY3ktXG4vLyBndWlkZWQgTUMgYW5kIGlzIGEgdG91cm5hbWVudCBleHBlcmltZW50LlxuLy9cbi8vIGNvbmZpZzogZGlzdFdlaWdodCwgZ2Fycmlzb25XZWlnaHQsIGNhcGl0YWxCb251cywgcm9sbG91dHMgKHBlciBjYW5kaWRhdGUpLCByb2xsb3V0VHVybnMsXG4vLyB0b3BLICh0aWUtYnJlYWsgYnJlYWR0aCBmb3IgdGhlIHJvbGxvdXQgcG9saWN5KSwgY29tYmF0RmFjdG9yLCBsb3NzRnJhYy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJtb250ZUNhcmxvXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMC41KTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgMCk7XG4gICAgY29uc3Qgcm9sbG91dHMgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKG51bShjZmcucm9sbG91dHMsIDYwKSkpO1xuICAgIGNvbnN0IHJvbGxvdXRUdXJucyA9IG51bShjZmcucm9sbG91dFR1cm5zLCA2MCk7XG4gICAgY29uc3QgdG9wSyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IobnVtKGNmZy50b3BLLCAzKSkpO1xuICAgIGNvbnN0IGNvbWJhdEZhY3RvciA9IG51bShjZmcuY29tYmF0RmFjdG9yLCAxLjApO1xuICAgIGNvbnN0IGxvc3NGcmFjID0gbnVtKGNmZy5sb3NzRnJhYywgMC41KTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgaWYgKG91cnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgY29uc3Qgb3VyU3RyZW5ndGggPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcudG90YWxVbml0cywgMCk7XG5cbiAgICBjb25zdCBjeCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy54LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGN5ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnksIDApIC8gb3Vycy5sZW5ndGg7XG5cbiAgICB0eXBlIENpdHkgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBnYXJyaXNvbjogbnVtYmVyOyBpc0NhcGl0YWw6IGJvb2xlYW47IH07XG4gICAgY29uc3QgZW5lbXlDaXRpZXM6IENpdHlbXSA9IGNpdGllc1xuICAgICAgICAuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgLm1hcChjID0+ICh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pKTtcbiAgICBpZiAoZW5lbXlDaXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBbXSk7XG5cbiAgICBjb25zdCBjaXR5U2NvcmUgPSAoZnJvbTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSwgYzogQ2l0eSkgPT5cbiAgICAgICAgZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGZyb20sIGMpICsgZ2Fycmlzb25XZWlnaHQgKiBjLmdhcnJpc29uIC0gKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG5cbiAgICAvLyBPbmUgcm9sbG91dCBmcm9tIGEgZm9yY2VkIGZpcnN0IHRhcmdldDogc25vd2JhbGwgZ3JlZWRpbHkgKHJhbmRvbWl6ZWQgYW1vbmcgdGhlIHRvcC1LIGJlc3QgYnlcbiAgICAvLyBzY29yZSkgdW50aWwgdGltZSBydW5zIG91dCBvciB3ZSBjYW4ndCBiZWF0IHRoZSBuZXh0IGdhcnJpc29uLiBSZXR1cm5zIGNhcHR1cmVkIFwidmFsdWVcIi5cbiAgICBjb25zdCByb2xsb3V0ID0gKGZpcnN0OiBDaXR5KTogbnVtYmVyID0+IHtcbiAgICAgICAgbGV0IHN0cmVuZ3RoID0gb3VyU3RyZW5ndGg7XG4gICAgICAgIGxldCBwb3MgPSB7IHg6IGN4LCB5OiBjeSB9O1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBlbmVteUNpdGllcy5zbGljZSgpO1xuICAgICAgICBsZXQgdCA9IDA7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgIGxldCBmb3JjZWQ6IENpdHkgfCB1bmRlZmluZWQgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKHJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0OiBDaXR5IHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGZvcmNlZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGZvcmNlZDtcbiAgICAgICAgICAgICAgICBmb3JjZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtlZCA9IHJlbWFpbmluZy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGNpdHlTY29yZShwb3MsIGEpIC0gY2l0eVNjb3JlKHBvcywgYikpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHJhbmtlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLm1pbih0b3BLLCByYW5rZWQubGVuZ3RoKSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIGJyZWFrO1xuICAgICAgICAgICAgdCArPSBoZXhEaXN0YW5jZShwb3MsIHRhcmdldCk7IC8vIH4xIHRpbGUvdHVyblxuICAgICAgICAgICAgaWYgKHQgPiByb2xsb3V0VHVybnMpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHN0cmVuZ3RoIDw9IHRhcmdldC5nYXJyaXNvbiAqIGNvbWJhdEZhY3RvcikgYnJlYWs7IC8vIGNhbid0IHRha2UgaXRcbiAgICAgICAgICAgIHN0cmVuZ3RoIC09IHRhcmdldC5nYXJyaXNvbiAqIGxvc3NGcmFjO1xuICAgICAgICAgICAgdmFsdWUgKz0gMSArICh0YXJnZXQuaXNDYXBpdGFsID8gMSA6IDApO1xuICAgICAgICAgICAgcG9zID0geyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSByZW1haW5pbmcuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGkgPj0gMCkgcmVtYWluaW5nLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCBiZXN0OiBDaXR5IHwgdW5kZWZpbmVkO1xuICAgIGxldCBiZXN0QXZnID0gLUluZmluaXR5O1xuICAgIGZvciAoY29uc3QgY2FuZCBvZiBlbmVteUNpdGllcykge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb2xsb3V0czsgcisrKSBzdW0gKz0gcm9sbG91dChjYW5kKTtcbiAgICAgICAgY29uc3QgYXZnID0gc3VtIC8gcm9sbG91dHM7XG4gICAgICAgIGlmIChhdmcgPiBiZXN0QXZnKSB7IGJlc3RBdmcgPSBhdmc7IGJlc3QgPSBjYW5kOyB9XG4gICAgfVxuICAgIGlmICghYmVzdCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gYmVzdDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdGFyZ2V0LngsIHk6IHRhcmdldC55IH0gfSkpO1xuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3RHZW5lcmFsIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gRW5naW5lIGNvbWJhdCByZWFjaCBmb3IgYSBzdGFjayBvZiBgY291bnRgIHVuaXRzIChtaXJyb3JzIGdldENvbWJhdERpc3RhbmNlIGluIHRoZSBlbmdpbmUpLlxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIFRocmVhdC1hd2FyZSB2YWx1ZSBBSS4gRWFjaCBnZW5lcmFsIGNob29zZXMgYW1vbmcgQVRUQUNLIC8gREVGRU5EIC8gUkVUUkVBVCBpbnN0ZWFkIG9mIGJsaW5kbHlcbi8vIHJ1bm5pbmcgYXQgdGhlIG5lYXJlc3QgY2l0eTpcbi8vICAgLSBBVFRBQ0sgYW4gZW5lbXkgY2l0eSBvbmx5IGlmIG91ciBzdGFjayBjYW4gYWN0dWFsbHkgYmVhdCBpdHMgZ2Fycmlzb24gKGNvbWJhdC1nYXRlZCksIHNjb3JlZFxuLy8gICAgIGJ5IHZhbHVlIChsb3cgZ2Fycmlzb24sIGNhcGl0YWxzLCBjbG9zZW5lc3MpLlxuLy8gICAtIERFRkVORCBhbiBvd25lZCBjaXR5IHRoYXQgYW4gZW5lbXkgc3RhY2sgY2FuIHJlYWNoIHNvb24sIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byBtYXR0ZXIuXG4vLyAgIC0gUkVUUkVBVCB0b3dhcmQgdGhlIG5lYXJlc3QgZnJpZW5kbHkgY2l0eS9nZW5lcmFsIHdoZW4gYSBzdHJvbmdlciBlbmVteSBzdGFjayBjYW4gY2F0Y2ggdXMgYW5kXG4vLyAgICAgd2UgaGF2ZSBubyB3aW5uaW5nIGF0dGFjayDigJQgaW5zdGVhZCBvZiBmZWVkaW5nIGl0LlxuLy8gY29uZmlnOiBzYWZldHkgKHdpbiBtYXJnaW4pLCBkaXN0V2VpZ2h0LCBnYXJyaXNvbldlaWdodCwgY2FwaXRhbEJvbnVzLCBkZWZlbmRXZWlnaHQsIGVuZW15TW92ZS5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJ0aHJlYXRBd2FyZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBzYWZldHkgPSBudW0oY2ZnLnNhZmV0eSwgMS4xNSk7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjQpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCA1KTtcbiAgICBjb25zdCBkZWZlbmRXZWlnaHQgPSBudW0oY2ZnLmRlZmVuZFdlaWdodCwgOCk7XG4gICAgY29uc3QgZW5lbXlNb3ZlID0gbnVtKGNmZy5lbmVteU1vdmUsIDEuNSk7IC8vIGFzc3VtZWQgZW5lbXkgdGlsZXMvdHVybiBmb3IgdGhyZWF0IGxvb2thaGVhZFxuICAgIGNvbnN0IGh1bnRXZWlnaHQgPSBudW0oY2ZnLmh1bnRXZWlnaHQsIDApOyAvLyA+MDogYWxzbyBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZWFrZXIgdGhhbiB1cywgdG8gZWxpbWluYXRlIHRoZW1cblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG91ckNpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IG5lYXJlc3RGcmllbmRseVJlZnVnZSA9IChnOiBBSVdvcmtlclNuYXBzaG90R2VuZXJhbCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3REID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBvdXJDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnLCBjKTtcbiAgICAgICAgICAgIGlmIChkID4gMCAmJiBkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG91cnMpIHtcbiAgICAgICAgICAgIGlmIChvLmlkID09PSBnLmlkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChvLnRvdGFsVW5pdHMgPD0gZy50b3RhbFVuaXRzKSBjb250aW51ZTsgLy8gb25seSBmbGVlIHRvd2FyZCBzb21lb25lIHN0cm9uZ2VyXG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZywgbyk7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IHsgeDogby54LCB5OiBvLnkgfTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIG91cnMpIHtcbiAgICAgICAgY29uc3QgUyA9IGdlbi50b3RhbFVuaXRzO1xuXG4gICAgICAgIC8vIElzIGEgc3Ryb25nZXIgZW5lbXkgYWJsZSB0byByZWFjaCB1cyBuZXh0IHR1cm4/XG4gICAgICAgIGxldCB1bmRlclRocmVhdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogc2FmZXR5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWNoID0gY29tYmF0RGlzdChlLnRvdGFsVW5pdHMpICsgZW5lbXlNb3ZlO1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIGdlbikgPD0gcmVhY2gpIHsgdW5kZXJUaHJlYXQgPSB0cnVlOyBicmVhazsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmVzdCBBVFRBQ0sgd2UgY2FuIGFjdHVhbGx5IHdpbi5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBlbmVteUNpdGllcykge1xuICAgICAgICAgICAgaWYgKFMgPD0gYy5nYXJyaXNvbiAqIHNhZmV0eSkgY29udGludWU7IC8vIGNhbid0IHRha2UgaXQg4oCUIGRvbid0IGZlZWQgaXRcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnZW4sIGMpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSAoYy5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKSAtIGRpc3RXZWlnaHQgKiBkIC0gZ2Fycmlzb25XZWlnaHQgKiBjLmdhcnJpc29uO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIVU5UOiBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZSBjYW4gYmVhdCwgdG8gYWN0dWFsbHkgZWxpbWluYXRlIHRoZW0gKGNsb3NlIG91dCB0aGUgZ2FtZSkuXG4gICAgICAgIGlmIChodW50V2VpZ2h0ID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoUyA8PSBlLnRvdGFsVW5pdHMgKiBzYWZldHkpIGNvbnRpbnVlOyAvLyBvbmx5IGh1bnQgcHJleSB3ZSBiZWF0XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGdlbiwgZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBodW50V2VpZ2h0IC0gZGlzdFdlaWdodCAqIGQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBlLngsIHk6IGUueSB9OyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBERUZFTkQ6IGFuIG93bmVkIGNpdHkgYW4gZW5lbXkgc3RhY2sgY2FuIHJlYWNoIHNvb24g4oCUIHB1bGwgYSBuZWFyYnkgZ2VuZXJhbCBiYWNrLlxuICAgICAgICBmb3IgKGNvbnN0IG9jIG9mIG91ckNpdGllcykge1xuICAgICAgICAgICAgbGV0IHRocmVhdGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKGUsIG9jKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyBlbmVteU1vdmUpIHsgdGhyZWF0ZW5lZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRocmVhdGVuZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGdlbiwgb2MpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkZWZlbmRXZWlnaHQgLSBkaXN0V2VpZ2h0ICogZDtcbiAgICAgICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHsgeDogb2MueCwgeTogb2MueSB9OyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSRVRSRUFUIHdoZW4gdGhyZWF0ZW5lZCBhbmQgbm90aGluZyB3b3J0aCBkb2luZy5cbiAgICAgICAgaWYgKHVuZGVyVGhyZWF0ICYmICghYmVzdCB8fCBiZXN0U2NvcmUgPCAwKSkge1xuICAgICAgICAgICAgY29uc3QgcmVmdWdlID0gbmVhcmVzdEZyaWVuZGx5UmVmdWdlKGdlbik7XG4gICAgICAgICAgICBpZiAocmVmdWdlKSBiZXN0ID0gcmVmdWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3QgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBJbmZsdWVuY2UgLyBmbG93LWZpZWxkIEFJLiBJbnN0ZWFkIG9mIGJlZWxpbmluZyBhdCB0aGUgbmVhcmVzdCBjaXR5ICh3aGljaCBpZ25vcmVzIHRlcnJhaW4gYW5kXG4vLyB3YWxrcyBpbnRvIHN0cm9uZ2VyIHN0YWNrcyksIHdlIGJ1aWxkIHR3byBzY2FsYXIgZmllbGRzIG92ZXIgdGhlIHBhc3NhYmxlIG1hcCBhbmQgaGF2ZSBlYWNoXG4vLyBnZW5lcmFsIGZvbGxvdyB0aGUgZ3JhZGllbnQgb25lIHN0ZXAgcGVyIHR1cm46XG4vLyAgIC0gYXR0cmFjdGlvbjogbWF4LXBsdXMgQkZTIHNlZWRlZCBhdCBlbmVteSBjaXRpZXMgKHNvZnQgKyBjYXBpdGFsID0gbW9yZSB2YWx1ZSksIGRlY2F5aW5nIHBlclxuLy8gICAgIHN0ZXAsIHNvIGEgZ2VuZXJhbCBmbG93cyB0b3dhcmQgdGhlIGJlc3QgcmVhY2hhYmxlIHRhcmdldCBBUk9VTkQgbW91bnRhaW5zL3dhdGVyLlxuLy8gICAtIGRhbmdlcjogbWF4LXBsdXMgQkZTIHNlZWRlZCBhdCBlbmVteSBnZW5lcmFsIHN0YWNrcyAodmFsdWUgPSB0aGVpciBzdHJlbmd0aCksIGRlY2F5aW5nIHBlclxuLy8gICAgIHN0ZXAsIHNvIHRpbGVzIG5lYXIgYSBzdHJvbmcgZW5lbXkgYXJlIHBlbmFsaXNlZC5cbi8vIEVhY2ggZ2VuZXJhbCBtb3ZlcyB0byB0aGUgbmVpZ2hib3VyIG1heGltaXNpbmcgYXR0cmFjdGlvbiAtIHJlcGVsV2VpZ2h0Km1heCgwLCBkYW5nZXIgLSBvd25TdGFjayksXG4vLyBpLmUuIGl0IGFkdmFuY2VzIG9uIHZhbHVlIGJ1dCByZWZ1c2VzIHRvIHN0ZXAgaW50byBhIGZvcmNlIHN0cm9uZ2VyIHRoYW4gaXRzZWxmLiBFbWVyZ2VudFxuLy8gYXR0YWNrIC8gZmxhbmsgLyBhdm9pZCBiZWhhdmlvdXIgd2l0aCBubyBwZXItdGFyZ2V0IHNwZWNpYWwtY2FzaW5nLlxuLy8gY29uZmlnOiBhdHRyYWN0RGVjYXksIGRhbmdlckRlY2F5LCByZXBlbFdlaWdodCwgY2FwaXRhbEJvbnVzLCBnYXJyaXNvblBlbmFsdHksIGJhc2VDaXR5VmFsdWUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiaW5mbHVlbmNlTWFwXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGF0dHJhY3REZWNheSA9IG51bShjZmcuYXR0cmFjdERlY2F5LCAxKTtcbiAgICBjb25zdCBkYW5nZXJEZWNheSA9IG51bShjZmcuZGFuZ2VyRGVjYXksIDEuNSk7XG4gICAgY29uc3QgcmVwZWxXZWlnaHQgPSBudW0oY2ZnLnJlcGVsV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgNDApO1xuICAgIGNvbnN0IGdhcnJpc29uUGVuYWx0eSA9IG51bShjZmcuZ2Fycmlzb25QZW5hbHR5LCAwLjMpO1xuICAgIGNvbnN0IGJhc2VDaXR5VmFsdWUgPSBudW0oY2ZnLmJhc2VDaXR5VmFsdWUsIDYwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICAvLyBQYXNzYWJsZSB0aWxlIGdyYXBoLlxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07XG4gICAgICAgIGlmIChzcGVlZCAmJiBzcGVlZCA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpO1xuICAgIH1cbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKGtleShueCwgbnkpKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuXG4gICAgLy8gTWF4LXBsdXMgQkZTOiBlYWNoIHNvdXJjZSBpbmplY3RzIGEgdmFsdWUgdGhhdCBkZWNheXMgYnkgYGRlY2F5YCBwZXIgcGFzc2FibGUgc3RlcDsgZXZlcnkgdGlsZVxuICAgIC8vIGtlZXBzIHRoZSBoaWdoZXN0IHZhbHVlIHJlYWNoaW5nIGl0LiBTaW1wbGUgRGlqa3N0cmEtc3R5bGUgcmVsYXhhdGlvbiB3aXRoIGEgdmFsdWUgcHJpb3JpdHkuXG4gICAgY29uc3QgcHJvcGFnYXRlID0gKHNvdXJjZXM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHZhbHVlOiBudW1iZXI7IH1bXSwgZGVjYXk6IG51bWJlcik6IE1hcDxzdHJpbmcsIG51bWJlcj4gPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIC8vIFByaW9yaXR5IGJ5IHZhbHVlIGRlc2MgdmlhIHJlcGVhdGVkIG1heC1zY2FuIG92ZXIgYW4gYWN0aXZlIGZyb250aWVyLiBUaWxlcyBhcmUgZmV3LCBhbmQgd2VcbiAgICAgICAgLy8gb25seSByZWxheCB3aGVuIHdlIGltcHJvdmUsIHNvIHRoaXMgc3RheXMgY2hlYXAuXG4gICAgICAgIGNvbnN0IGZyb250aWVyOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB2YWx1ZTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXkocy54LCBzLnkpO1xuICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoKGZpZWxkLmdldChrKSA/PyAtSW5maW5pdHkpIDwgcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZpZWxkLnNldChrLCBzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBmcm9udGllci5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChmcm9udGllci5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHBvcCB0aGUgaGlnaGVzdC12YWx1ZSBmcm9udGllciBlbnRyeVxuICAgICAgICAgICAgbGV0IGJpID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZnJvbnRpZXIubGVuZ3RoOyBpKyspIGlmIChmcm9udGllcltpXS52YWx1ZSA+IGZyb250aWVyW2JpXS52YWx1ZSkgYmkgPSBpO1xuICAgICAgICAgICAgY29uc3QgY3VyID0gZnJvbnRpZXIuc3BsaWNlKGJpLCAxKVswXTtcbiAgICAgICAgICAgIGlmICgoZmllbGQuZ2V0KGtleShjdXIueCwgY3VyLnkpKSA/PyAtSW5maW5pdHkpID4gY3VyLnZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG52ID0gY3VyLnZhbHVlIC0gZGVjYXk7XG4gICAgICAgICAgICBpZiAobnYgPD0gMCkgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG4gb2YgbmVpZ2hib3JzT2YoY3VyLngsIGN1ci55KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5rID0ga2V5KG4ueCwgbi55KTtcbiAgICAgICAgICAgICAgICBpZiAoKGZpZWxkLmdldChuaykgPz8gLUluZmluaXR5KSA+PSBudikgY29udGludWU7XG4gICAgICAgICAgICAgICAgZmllbGQuc2V0KG5rLCBudik7XG4gICAgICAgICAgICAgICAgZnJvbnRpZXIucHVzaCh7IHg6IG4ueCwgeTogbi55LCB2YWx1ZTogbnYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRyYWN0U291cmNlcyA9IGNpdGllc1xuICAgICAgICAuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgLm1hcChjID0+ICh7XG4gICAgICAgICAgICB4OiBjLngsIHk6IGMueSxcbiAgICAgICAgICAgIHZhbHVlOiBiYXNlQ2l0eVZhbHVlICsgKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCkgLSBnYXJyaXNvblBlbmFsdHkgKiBjLmdhcnJpc29uLFxuICAgICAgICB9KSlcbiAgICAgICAgLmZpbHRlcihzID0+IHMudmFsdWUgPiAwKTtcbiAgICBjb25zdCBkYW5nZXJTb3VyY2VzID0gZ2VuZXJhbHNcbiAgICAgICAgLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpXG4gICAgICAgIC5tYXAoZyA9PiAoeyB4OiBnLngsIHk6IGcueSwgdmFsdWU6IGcudG90YWxVbml0cyB9KSk7XG5cbiAgICBjb25zdCBhdHRyYWN0ID0gcHJvcGFnYXRlKGF0dHJhY3RTb3VyY2VzLCBhdHRyYWN0RGVjYXkpO1xuICAgIGNvbnN0IGRhbmdlciA9IHByb3BhZ2F0ZShkYW5nZXJTb3VyY2VzLCBkYW5nZXJEZWNheSk7XG5cbiAgICBjb25zdCBzY29yZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgb3duU3RhY2s6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBhID0gYXR0cmFjdC5nZXQoa2V5KHgsIHkpKSA/PyAwO1xuICAgICAgICBjb25zdCBkID0gZGFuZ2VyLmdldChrZXkoeCwgeSkpID8/IDA7XG4gICAgICAgIHJldHVybiBhIC0gcmVwZWxXZWlnaHQgKiBNYXRoLm1heCgwLCBkIC0gb3duU3RhY2spO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZ2VuIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnZW4uZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBoZXJlID0gc2NvcmUoZ2VuLngsIGdlbi55LCBnZW4udG90YWxVbml0cyk7XG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gaGVyZTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmUobi54LCBuLnksIGdlbi50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIEVuZ2luZSBjb21iYXQgcmVhY2ggZm9yIGEgc3RhY2sgb2YgYGNvdW50YCB1bml0cyAobWlycm9ycyBnZXRDb21iYXREaXN0YW5jZSBpbiB0aGUgZW5naW5lKS5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBUZXJyaXRvcnkgLyBjb250YWlubWVudCBBSSDigJQgdGhlIHVzZXIncyBjb3JlIHN0cmF0ZWd5OiBkb24ndCBmaWdodCBiYXR0bGVzIHlvdSdkIGxvc2UsIGluc3RlYWRcbi8vIG1heGltaXplIHRoZSBMQU5EIHlvdSBob2xkICh0aWxlIG93bmVyc2hpcCBkcmlmdHMgdG8gd2hvZXZlciBoYXMgdW5pdHMgbmVhcmJ5KSwgZXZlbiB3aGlsZVxuLy8gb3V0bnVtYmVyZWQsIGJ5IHNwcmVhZGluZyBvdXQgYW5kIFwibmV0dGluZ1wiIHRoZSBlbmVteS4gTW9yZSBsYW5kIC0+IG1vcmUgZm9vZCAtPiBiaWdnZXIgYXJtaWVzIC0+XG4vLyBldmVudHVhbGx5IHlvdSBjYW4gd2luIHRoZSBmaWdodHMgeW91IHdlcmUgYXZvaWRpbmcuXG4vL1xuLy8gRWFjaCBnZW5lcmFsIHNjb3JlcyBpdHMgcGFzc2FibGUgbmVpZ2hib3VycyAoYW5kIHN0YXlpbmcgcHV0KTpcbi8vICAgKyBhZHZhbmNlOiAgcHVzaCB0b3dhcmQgZW5lbXktaGVsZCBzcGFjZSAobmVnYXRpdmUgZGlzdGFuY2UgdG8gbmVhcmVzdCBlbmVteSBnZW5lcmFsL2NpdHkpIHNvIHdlXG4vLyAgICAgICAgICAgICAgIGNvbnRlc3QgdGhlaXIgdGVycml0b3J5IHJhdGhlciB0aGFuIGh1ZGRsaW5nIGF0IGhvbWUuXG4vLyAgICsgc3ByZWFkOiAgIHJld2FyZCBkaXN0YW5jZSBmcm9tIG91ciBPV04gZ2VuZXJhbHMgKGNhcHBlZCkgc28gdGhlIGFybXkgZmFucyBvdXQgaW50byBhIG5ldFxuLy8gICAgICAgICAgICAgICBpbnN0ZWFkIG9mIHN0YWNraW5nIG9uIG9uZSB0aWxlIChvdmVybGFwcGluZyBjb3ZlcmFnZSB3aW5zIG5vIGV4dHJhIGxhbmQpLlxuLy8gICAtIHRocmVhdDogICBoZWF2eSBwZW5hbHR5IGZvciBzdGVwcGluZyB3aXRoaW4gY29tYmF0IHJlYWNoIG9mIGFuIGVuZW15IHN0YWNrIFNUUk9OR0VSIHRoYW4gdXMg4oCUXG4vLyAgICAgICAgICAgICAgIHRoYXQncyB0aGUgZmlnaHQgd2UgcmVmdXNlLlxuLy8gICArIGNhcHR1cmU6ICBiaWcgYm9udXMgZm9yIG1vdmluZyBvbnRvIGEgY2l0eSB3ZSBjYW4gdGFrZSAoZ2Fycmlzb24gPCBvdXIgc3RhY2spIOKAlCBmcmVlIGxhbmQuXG4vLyBjb25maWc6IGFkdmFuY2VXZWlnaHQsIHNwcmVhZFdlaWdodCwgc3ByZWFkQ2FwLCB0aHJlYXRXZWlnaHQsIHRocmVhdE1hcmdpbiwgY2FwdHVyZUJvbnVzLlxucmVnaXN0ZXJTdHJhdGVneShcInRlcnJpdG9yeVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBhZHZhbmNlV2VpZ2h0ID0gbnVtKGNmZy5hZHZhbmNlV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBzcHJlYWRXZWlnaHQgPSBudW0oY2ZnLnNwcmVhZFdlaWdodCwgMik7XG4gICAgY29uc3Qgc3ByZWFkQ2FwID0gbnVtKGNmZy5zcHJlYWRDYXAsIDYpO1xuICAgIGNvbnN0IHRocmVhdFdlaWdodCA9IG51bShjZmcudGhyZWF0V2VpZ2h0LCAxMik7XG4gICAgY29uc3QgdGhyZWF0TWFyZ2luID0gbnVtKGNmZy50aHJlYXRNYXJnaW4sIDEuMSk7XG4gICAgY29uc3QgY2FwdHVyZUJvbnVzID0gbnVtKGNmZy5jYXB0dXJlQm9udXMsIDUwKTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdO1xuICAgICAgICBpZiAoc3BlZWQgJiYgc3BlZWQgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTtcbiAgICB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrZXkobngsIG55KSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlBbmNob3JzID0gWy4uLmVuZW15R2VuZXJhbHMsIC4uLmVuZW15T3JOZXV0cmFsQ2l0aWVzXTtcblxuICAgIGNvbnN0IG1pbkRpc3RUbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcHRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgYmVzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHRzKSBiZXN0ID0gTWF0aC5taW4oYmVzdCwgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHApKTtcbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGFsbGllcyA9IG91cnMuZmlsdGVyKG8gPT4gby5pZCAhPT0gZ2VuLmlkKTtcbiAgICAgICAgY29uc3QgY2l0eUF0ID0gbmV3IE1hcChlbmVteU9yTmV1dHJhbENpdGllcy5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcblxuICAgICAgICBjb25zdCBzY29yZVRpbGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgIC8vIGFkdmFuY2UgdG93YXJkIGVuZW15IHNwYWNlIChjb250ZXN0IHRoZWlyIGxhbmQpXG4gICAgICAgICAgICBpZiAoZW5lbXlBbmNob3JzLmxlbmd0aCkgc2NvcmUgKz0gYWR2YW5jZVdlaWdodCAqIC1taW5EaXN0VG8oeCwgeSwgZW5lbXlBbmNob3JzKTtcbiAgICAgICAgICAgIC8vIHNwcmVhZCBvdXQgZnJvbSBvdXIgb3duIGdlbmVyYWxzIHRvIGNvdmVyIG1vcmUgYXJlYSAoY2FwcGVkKVxuICAgICAgICAgICAgaWYgKGFsbGllcy5sZW5ndGgpIHNjb3JlICs9IHNwcmVhZFdlaWdodCAqIE1hdGgubWluKHNwcmVhZENhcCwgbWluRGlzdFRvKHgsIHksIGFsbGllcykpO1xuICAgICAgICAgICAgLy8gcmVmdXNlIHRvIHN0ZXAgd2l0aGluIHJlYWNoIG9mIGEgc3Ryb25nZXIgZW5lbXkgc3RhY2tcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFjaCA9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoeyB4LCB5IH0sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChkIDw9IHJlYWNoICsgMSkgc2NvcmUgLT0gdGhyZWF0V2VpZ2h0ICogKHJlYWNoICsgMSAtIGQgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGdyYWIgdW5kZWZlbmRlZCAvIHdlYWsgbGFuZFxuICAgICAgICAgICAgY29uc3QgYyA9IGNpdHlBdC5nZXQoa2V5KHgsIHkpKTtcbiAgICAgICAgICAgIGlmIChjICYmIFMgPiBjLmdhcnJpc29uKSBzY29yZSArPSBjYXB0dXJlQm9udXM7XG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBzY29yZVRpbGUoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmVUaWxlKG4ueCwgbi55KTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBTbm93YmFsbCBBSSDigJQgdGhlIGZ1bGwgdmVyc2lvbiBvZiB0aGUgdXNlcidzIHN0cmF0ZWd5LiBUZXJyaXRvcnkvY29udGFpbm1lbnQgRUFSTFkgKHNwcmVhZCwgdGFrZVxuLy8gbGFuZCwgcmVmdXNlIGxvc2luZyBmaWdodHMsIGdyb3cpLCB0aGVuIENPTlZFUlQgdGhlIGVjb25vbWljIGxlYWQgaW50byBraWxsczpcbi8vICAgLSBodW50OiBhY3RpdmVseSBjaGFzZSBlbmVteSBnZW5lcmFscyB3ZSBjYW4gYmVhdCAod2Vha2VyIHRoYW4gb3VyIHN0YWNrKSB0byBkZXN0cm95IHRoZW0g4oCUIHlvdVxuLy8gICAgIGNhbid0IHdpbiBieSBob2xkaW5nIGxhbmQgZm9yZXZlciwgeW91IGhhdmUgdG8gZWxpbWluYXRlIHRoZSBlbmVteSBvbmNlIHlvdSBvdXQtc2NhbGUgdGhlbS5cbi8vICAgLSBwcmVzczogb25jZSBvdXIgZmFjdGlvbiBvdXQtYXJtaWVzIHRoZSBzdHJvbmdlc3QgZW5lbXksIHJlbGF4IHRocmVhdC1hdm9pZGFuY2UgYW5kIHB1c2gsIHNvXG4vLyAgICAgdGhlIGxlYWQgaXMgY29udmVydGVkIHRvIGEgd2luIGluc3RlYWQgb2Ygc3RhbGxpbmcuXG4vLyAgIC0gdGhyZWF0OiBzdGlsbCByZWZ1c2UgZmlnaHRzIGFnYWluc3Qgc3RhY2tzIHN0cm9uZ2VyIHRoYW4gdXMgKHRoZSB3aG9sZSBwb2ludCBvZiBzbm93YmFsbGluZykuXG4vLyBjb25maWc6IGFkdmFuY2VXZWlnaHQsIHNwcmVhZFdlaWdodCwgc3ByZWFkQ2FwLCB0aHJlYXRXZWlnaHQsIHRocmVhdE1hcmdpbiwgY2FwdHVyZUJvbnVzLFxuLy8gICAgICAgICBodW50V2VpZ2h0LCBraWxsTWFyZ2luLCBwcmVzc01hcmdpbiwgcHJlc3NSZWxheC5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJzbm93YmFsbFwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBhZHZhbmNlV2VpZ2h0ID0gbnVtKGNmZy5hZHZhbmNlV2VpZ2h0LCAxKTtcbiAgICBjb25zdCBzcHJlYWRXZWlnaHQgPSBudW0oY2ZnLnNwcmVhZFdlaWdodCwgMik7XG4gICAgY29uc3Qgc3ByZWFkQ2FwID0gbnVtKGNmZy5zcHJlYWRDYXAsIDYpO1xuICAgIGNvbnN0IHRocmVhdFdlaWdodCA9IG51bShjZmcudGhyZWF0V2VpZ2h0LCAxOCk7XG4gICAgY29uc3QgdGhyZWF0TWFyZ2luID0gbnVtKGNmZy50aHJlYXRNYXJnaW4sIDEuMCk7XG4gICAgY29uc3QgY2FwdHVyZUJvbnVzID0gbnVtKGNmZy5jYXB0dXJlQm9udXMsIDYwKTtcbiAgICBjb25zdCBodW50V2VpZ2h0ID0gbnVtKGNmZy5odW50V2VpZ2h0LCA0KTtcbiAgICBjb25zdCBraWxsTWFyZ2luID0gbnVtKGNmZy5raWxsTWFyZ2luLCAxLjI1KTsgLy8gb25seSBodW50IGdlbmVyYWxzIHdlIGJlYXQgYnkgdGhpcyBmYWN0b3JcbiAgICBjb25zdCBwcmVzc01hcmdpbiA9IG51bShjZmcucHJlc3NNYXJnaW4sIDEuMTUpOyAvLyBcImFoZWFkXCIgb25jZSBvdXIgYXJteSA+PSB0aGlzICogdG9wIGVuZW15IGFybXlcbiAgICBjb25zdCBwcmVzc1JlbGF4ID0gbnVtKGNmZy5wcmVzc1JlbGF4LCAwLjQpOyAvLyB0aHJlYXQgd2VpZ2h0IG11bHRpcGxpZXIgd2hpbGUgcHJlc3NpbmdcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdO1xuICAgICAgICBpZiAoc3BlZWQgJiYgc3BlZWQgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTtcbiAgICB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlU2V0LmhhcyhrZXkobngsIG55KSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlBbmNob3JzID0gWy4uLmVuZW15R2VuZXJhbHMsIC4uLmVuZW15T3JOZXV0cmFsQ2l0aWVzXTtcblxuICAgIC8vIEFyZSB3ZSBhaGVhZCBvdmVyYWxsPyBDb21wYXJlIG91ciB0b3RhbCBhcm15IHRvIHRoZSBzdHJvbmdlc3Qgc2luZ2xlIGVuZW15IGZhY3Rpb24ncyBhcm15LlxuICAgIGNvbnN0IGFybXlCeUZhY3Rpb24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBnZW5lcmFscykgYXJteUJ5RmFjdGlvbi5zZXQoZy5mYWN0aW9uSWQsIChhcm15QnlGYWN0aW9uLmdldChnLmZhY3Rpb25JZCkgPz8gMCkgKyBnLnRvdGFsVW5pdHMpO1xuICAgIGNvbnN0IG91ckFybXkgPSBhcm15QnlGYWN0aW9uLmdldChmYWN0aW9uSWQpID8/IDA7XG4gICAgbGV0IHRvcEVuZW15QXJteSA9IDA7XG4gICAgZm9yIChjb25zdCBbZmlkLCBhXSBvZiBhcm15QnlGYWN0aW9uKSBpZiAoZmlkICE9PSBmYWN0aW9uSWQpIHRvcEVuZW15QXJteSA9IE1hdGgubWF4KHRvcEVuZW15QXJteSwgYSk7XG4gICAgY29uc3QgcHJlc3NpbmcgPSBvdXJBcm15ID49IHRvcEVuZW15QXJteSAqIHByZXNzTWFyZ2luO1xuICAgIGNvbnN0IGVmZlRocmVhdFdlaWdodCA9IHByZXNzaW5nID8gdGhyZWF0V2VpZ2h0ICogcHJlc3NSZWxheCA6IHRocmVhdFdlaWdodDtcblxuICAgIGNvbnN0IG1pbkRpc3RUbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgcHRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgYmVzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHRzKSBiZXN0ID0gTWF0aC5taW4oYmVzdCwgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHApKTtcbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGFsbGllcyA9IG91cnMuZmlsdGVyKG8gPT4gby5pZCAhPT0gZ2VuLmlkKTtcbiAgICAgICAgY29uc3QgY2l0eUF0ID0gbmV3IE1hcChlbmVteU9yTmV1dHJhbENpdGllcy5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcbiAgICAgICAgY29uc3QgcHJleSA9IGVuZW15R2VuZXJhbHMuZmlsdGVyKGUgPT4gUyA+IGUudG90YWxVbml0cyAqIGtpbGxNYXJnaW4pO1xuXG4gICAgICAgIGNvbnN0IHNjb3JlVGlsZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICAgICAgaWYgKGVuZW15QW5jaG9ycy5sZW5ndGgpIHNjb3JlICs9IGFkdmFuY2VXZWlnaHQgKiAtbWluRGlzdFRvKHgsIHksIGVuZW15QW5jaG9ycyk7XG4gICAgICAgICAgICBpZiAoYWxsaWVzLmxlbmd0aCkgc2NvcmUgKz0gc3ByZWFkV2VpZ2h0ICogTWF0aC5taW4oc3ByZWFkQ2FwLCBtaW5EaXN0VG8oeCwgeSwgYWxsaWVzKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhY2ggPSBjb21iYXREaXN0KGUudG90YWxVbml0cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHsgeCwgeSB9LCBlKTtcbiAgICAgICAgICAgICAgICBpZiAoZCA8PSByZWFjaCArIDEpIHNjb3JlIC09IGVmZlRocmVhdFdlaWdodCAqIChyZWFjaCArIDEgLSBkICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjID0gY2l0eUF0LmdldChrZXkoeCwgeSkpO1xuICAgICAgICAgICAgaWYgKGMgJiYgUyA+IGMuZ2Fycmlzb24pIHNjb3JlICs9IGNhcHR1cmVCb251cztcbiAgICAgICAgICAgIC8vIGh1bnQga2lsbGFibGUgZW5lbXkgZ2VuZXJhbHMgKHN0cm9uZyBwdWxsIHRvd2FyZCB0aGUgbmVhcmVzdCBvbmUpXG4gICAgICAgICAgICBpZiAocHJleS5sZW5ndGgpIHNjb3JlICs9IGh1bnRXZWlnaHQgKiAtbWluRGlzdFRvKHgsIHksIHByZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gc2NvcmVUaWxlKGdlbi54LCBnZW4ueSk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZihnZW4ueCwgZ2VuLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBzYyA9IHNjb3JlVGlsZShuLngsIG4ueSk7XG4gICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3QgPSBuOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3RHZW5lcmFsIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIENvb3JkaW5hdGVkIGFzc2lnbm1lbnQgQUkuIFNhbWUgY29tYmF0LWdhdGVkLCBkZWZlbmQsIHJldHJlYXQgbG9naWMgYXMgdGhlIGNoYW1wICh0aHJlYXRBd2FyZSksXG4vLyBidXQgYWRkcyBhIEdMT0JBTCBhc3NpZ25tZW50IHBhc3Mgc28gb3VyIGdlbmVyYWxzIGRvbid0IGFsbCBwaWxlIG9udG8gdGhlIHNpbmdsZSBiZXN0IGNpdHkgd2hpbGVcbi8vIG90aGVyIGNhcHR1cmFibGUgY2l0aWVzIHNpdCB1bnRha2VuLiBXZSBncmVlZGlseSBhc3NpZ24gZWFjaCBnZW5lcmFsIGEgRElTVElOQ1QgZW5lbXkgY2l0eVxuLy8gKGJlc3QgKGdlbmVyYWwsY2l0eSkgcGFpcnMgZmlyc3QpLCBjYXB0dXJpbmcgbW9yZSBjaXRpZXMgcGVyIHR1cm4gPT4gZmFzdGVyIGVjb25vbXkgPT4gbW9yZSB3aW5zLlxuLy8gQSBjaXR5IG9ubHkgbmVlZHMgbW9yZSB0aGFuIG9uZSBhdHRhY2tlciBpZiBhIHNpbmdsZSBnZW5lcmFsIGNhbid0IGNyYWNrIGl0OyBzdWNoIG92ZXItc3RyZW5ndGhcbi8vIGNpdGllcyBzdGF5IG9wZW4gdG8gbXVsdGlwbGUgZ2VuZXJhbHMuXG4vLyBjb25maWc6IHNhZmV0eSwgZGlzdFdlaWdodCwgZ2Fycmlzb25XZWlnaHQsIGNhcGl0YWxCb251cywgZGVmZW5kV2VpZ2h0LCBlbmVteU1vdmUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiY29vcmRpbmF0ZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBzYWZldHkgPSBudW0oY2ZnLnNhZmV0eSwgMS4wKTtcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNCk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDUpO1xuICAgIGNvbnN0IGRlZmVuZFdlaWdodCA9IG51bShjZmcuZGVmZW5kV2VpZ2h0LCA0KTtcbiAgICBjb25zdCBlbmVteU1vdmUgPSBudW0oY2ZnLmVuZW15TW92ZSwgMS41KTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15Q2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IG91ckNpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9PigpO1xuXG4gICAgLy8gMSkgR2xvYmFsIGFzc2lnbm1lbnQgb2YgZ2VuZXJhbHMgdG8gZGlzdGluY3QgY2FwdHVyYWJsZSBjaXRpZXMsIGJlc3QgcGFpcnMgZmlyc3QuXG4gICAgdHlwZSBQYWlyID0geyBnaWQ6IHN0cmluZzsgY2l0eTogdHlwZW9mIGVuZW15Q2l0aWVzW251bWJlcl07IHNjb3JlOiBudW1iZXI7IHNvbG9hYmxlOiBib29sZWFuOyB9O1xuICAgIGNvbnN0IHBhaXJzOiBQYWlyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGcgb2Ygb3Vycykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgZW5lbXlDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvbG9hYmxlID0gZy50b3RhbFVuaXRzID4gYy5nYXJyaXNvbiAqIHNhZmV0eTtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnLCBjKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCkgLSBkaXN0V2VpZ2h0ICogZCAtIGdhcnJpc29uV2VpZ2h0ICogYy5nYXJyaXNvbjtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goeyBnaWQ6IGcuaWQsIGNpdHk6IGMsIHNjb3JlLCBzb2xvYWJsZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYWlycy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG4gICAgY29uc3QgY2l0eVRha2VuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBwIG9mIHBhaXJzKSB7XG4gICAgICAgIGlmICghcC5zb2xvYWJsZSkgY29udGludWU7IC8vIG9ubHkgdGhlIGFzc2lnbm1lbnQgb2Ygd2lubmFibGUgc29sbyBjYXB0dXJlcyBpcyBleGNsdXNpdmVcbiAgICAgICAgaWYgKHRhcmdldC5oYXMocC5naWQpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNpdHlUYWtlbi5oYXMocC5jaXR5LmlkKSkgY29udGludWU7XG4gICAgICAgIHRhcmdldC5zZXQocC5naWQsIHsgeDogcC5jaXR5LngsIHk6IHAuY2l0eS55IH0pO1xuICAgICAgICBjaXR5VGFrZW4uYWRkKHAuY2l0eS5pZCk7XG4gICAgfVxuXG4gICAgLy8gMikgR2VuZXJhbHMgd2l0aCBubyBhc3NpZ25lZCBjaXR5OiBkZWZlbmQgYSB0aHJlYXRlbmVkIGNpdHksIGVsc2UgZ2FuZyB1cCBvbiB0aGUgYmVzdFxuICAgIC8vICAgIHJlbWFpbmluZyBjaXR5IChldmVuIGlmIGFscmVhZHkgY2xhaW1lZCDigJQgbmVlZGVkIGZvciBvdmVyLXN0cmVuZ3RoIHRhcmdldHMpLCBlbHNlIHJldHJlYXQuXG4gICAgY29uc3QgdGhyZWF0ZW5lZENpdHkgPSAob2M6IHR5cGVvZiBvdXJDaXRpZXNbbnVtYmVyXSkgPT5cbiAgICAgICAgZW5lbXlHZW5lcmFscy5zb21lKGUgPT4gaGV4RGlzdGFuY2UoZSwgb2MpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIGVuZW15TW92ZSk7XG4gICAgY29uc3QgcmVmdWdlID0gKGc6IEFJV29ya2VyU25hcHNob3RHZW5lcmFsKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdEQgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG91ckNpdGllcykgeyBjb25zdCBkID0gaGV4RGlzdGFuY2UoZywgYyk7IGlmIChkID4gMCAmJiBkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9IH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG91cnMpIHsgaWYgKG8uaWQgPT09IGcuaWQgfHwgby50b3RhbFVuaXRzIDw9IGcudG90YWxVbml0cykgY29udGludWU7IGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnLCBvKTsgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3QgPSB7IHg6IG8ueCwgeTogby55IH07IH0gfVxuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBnIG9mIG91cnMpIHtcbiAgICAgICAgaWYgKHRhcmdldC5oYXMoZy5pZCkpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBTID0gZy50b3RhbFVuaXRzO1xuXG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IG9jIG9mIG91ckNpdGllcykge1xuICAgICAgICAgICAgaWYgKCF0aHJlYXRlbmVkQ2l0eShvYykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkZWZlbmRXZWlnaHQgLSBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZywgb2MpO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBvYy54LCB5OiBvYy55IH07IH1cbiAgICAgICAgfVxuICAgICAgICAvLyBoZWxwIHRha2UgdGhlIG1vc3QgdmFsdWFibGUgY2l0eSB3ZSBjYW4gY29udHJpYnV0ZSB0byAoY2xvc2VzdCBiaWcgb25lKVxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgZW5lbXlDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gKGMuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCkgLSBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZywgYykgLSBnYXJyaXNvbldlaWdodCAqIGMuZ2Fycmlzb247XG4gICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2NvcmU7IGJlc3QgPSB7IHg6IGMueCwgeTogYy55IH07IH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVuZGVyVGhyZWF0ID0gZW5lbXlHZW5lcmFscy5zb21lKGUgPT5cbiAgICAgICAgICAgIGUudG90YWxVbml0cyA+IFMgKiBzYWZldHkgJiYgaGV4RGlzdGFuY2UoZSwgZykgPD0gY29tYmF0RGlzdChlLnRvdGFsVW5pdHMpICsgZW5lbXlNb3ZlKTtcbiAgICAgICAgaWYgKHVuZGVyVGhyZWF0ICYmICghYmVzdCB8fCBiZXN0U2NvcmUgPCAwKSkge1xuICAgICAgICAgICAgY29uc3QgciA9IHJlZnVnZShnKTtcbiAgICAgICAgICAgIGlmIChyKSBiZXN0ID0gcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgdGFyZ2V0LnNldChnLmlkLCBiZXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSB7XG4gICAgICAgIGNvbnN0IHQgPSB0YXJnZXQuZ2V0KGcuaWQpO1xuICAgICAgICBpZiAodCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGcuaWQsIHRhcmdldFBvc2l0aW9uOiB0IH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0gsdUNBQXlCO0FBRXpCLGtGQUFrRjtBQUNsRixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsdUVBQXVFO0FBQzFELFFBQUEsV0FBVyxHQUFHLElBQUksQ0FBQztBQUVoQyxJQUFJLFdBQVcsR0FBb0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RixTQUFTLGNBQWMsQ0FBQyxHQUFXO0lBQy9CLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDVCxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFD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QUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV4QyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDakQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDN0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNqQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENB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