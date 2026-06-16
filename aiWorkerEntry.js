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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileDirFlags.ts", filename: "/root/generals/node_modules/typenode/compileDirFlags.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileDirFlags.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileDirFlags.ts","loaded":true,"sourceSHA256":"265c6f85eeb907386d25b75dc6b11c37b787f788b64d51924d57c5f052b4c91f","size":8100,"version":1,"evalStartTime":1781591215127,"evalEndTime":1781591215128}, moduleFnc: (function compileDirFlags_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", filename: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","loaded":true,"sourceSHA256":"9701d799d870e1117bdda5b6b1ef57e9d2a55fd14630e2d7a8416ad72c2e0fb7","size":3670,"version":1,"evalStartTime":1781591215129,"evalEndTime":1781591215129.01}, moduleFnc: (function compileRecordModuleRequires_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","loaded":true,"sourceSHA256":"30c072ee646adbd818d776f22b2185a81c98ee3dfbd308e1b34876cdabb03dff","size":9004,"version":1,"evalStartTime":1781591215130,"evalEndTime":1781591215135}, moduleFnc: (function bundler_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/js-sha256/src/sha256.js", filename: "/root/generals/node_modules/js-sha256/src/sha256.js", isModuleMain: "/root/generals/node_modules/js-sha256", paths: ["/root/generals/node_modules/js-sha256/src/node_modules","/root/generals/node_modules/js-sha256/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/js-sha256/src/sha256.js","path":"/root/generals/node_modules/js-sha256/src","filename":"/root/generals/node_modules/js-sha256/src/sha256.js","loaded":true,"sourceSHA256":"2db6c8e554fbee14672368a0d7551a8ddd841ee96c91526eb7987a0179cfc717","size":18769,"version":1,"evalStartTime":1781591215130.01,"evalEndTime":1781591215131}, moduleFnc: (function sha_js(exports, require, module, __filename, __dirname) { /**
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","loaded":true,"sourceSHA256":"49578775d45f6354669c3f29f6c2318f95495af6eea1d9cd136c89626f76394e","size":34216,"version":1,"evalStartTime":1781591215131.01,"evalEndTime":1781591215131.02}, moduleFnc: (function bundleRequire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","loaded":true,"sourceSHA256":"59f01474432e6ffc76323e5e684ce5f7931537223999780ab735af331faac1d2","size":16004,"version":1,"evalStartTime":1781591215132,"evalEndTime":1781591215134.04}, moduleFnc: (function bundleWrapper_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","loaded":true,"sourceSHA256":"18c7fe69d9133c820e876a09f89bca1d68337a67d8b1a04589d48e371a77cbe2","size":36358,"version":1,"evalStartTime":1781591215132.01,"evalEndTime":1781591215134.03,"allowclient":true}, moduleFnc: (function caching_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","loaded":true,"sourceSHA256":"9fb24f97ff53337f0c2b79dcb2cf03699e768351e01ce8199c98a968c81669a4","size":58046,"version":1,"evalStartTime":1781591215133,"evalEndTime":1781591215134.02,"allowclient":true}, moduleFnc: (function misc_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","loaded":true,"sourceSHA256":"b3eafb6059634f367bc20abd9732161ad4f3498f56a540361080950856a4cb2a","size":1258,"version":1,"evalStartTime":1781591215133.01,"evalEndTime":1781591215133.02,"allowclient":true}, moduleFnc: (function types_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.canHaveChildren = void 0;
function canHaveChildren(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
exports.canHaveChildren = canHaveChildren;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "ea937c29143cb2e8959e6cd066d49be7fe410ccd03431380474bf4dd84de697f"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","loaded":true,"sourceSHA256":"75f76504af1be1552a350c93a747273950b42fb0959d5acee5ecfecb4a092947","size":55197,"version":1,"evalStartTime":1781591215134,"evalEndTime":1781591215134.01,"allowclient":true}, moduleFnc: (function format_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", filename: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","loaded":true,"sourceSHA256":"1c98494daf4e65ea335f9e33d3b29c8238ff78e910fdc9aade2a916c6104c869","size":27639,"version":1,"evalStartTime":1781591215134.05,"evalEndTime":1781591215134.06}, moduleFnc: (function sourceMaps_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/aiWorkerEntry.ts", filename: "/root/generals/src/gameUI2/ai/aiWorkerEntry.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/aiWorkerEntry.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/aiWorkerEntry.ts","loaded":true,"sourceSHA256":"650997b309ba17f2e16794b02dde8bfca94d688657e87d026ebd4202d6f57641","size":5509,"version":1,"evalStartTime":1781591215135.01,"evalEndTime":1781591215138.04,"allowclient":true,"hotreload":true}, moduleFnc: (function aiWorkerEntry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/index.ts", filename: "/root/generals/src/gameUI2/ai/strategies/index.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/index.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/index.ts","loaded":true,"sourceSHA256":"2185a04eddd6b5cc089b464b1a6f98386c85921562f1c5f5d0c53fccc35a52a6","size":2080,"version":1,"evalStartTime":1781591215135.02,"evalEndTime":1781591215138.03,"allowclient":true,"hotreload":true}, moduleFnc: (function index_ts(exports, require, module, __filename, __dirname) { "use strict";
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
var registry_1 = require("./registry");
Object.defineProperty(exports, "getStrategy", { enumerable: true, get: function () { return registry_1.getStrategy; } , configurable: true});
Object.defineProperty(exports, "getStrategyIds", { enumerable: true, get: function () { return registry_1.getStrategyIds; } , configurable: true});
Object.defineProperty(exports, "registerStrategy", { enumerable: true, get: function () { return registry_1.registerStrategy; } , configurable: true});
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "e5af26f510e26c6fa1e7f617b664adeea31f4ffdae0f5f0d8a21e631230b8ca9"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/beeline.ts", filename: "/root/generals/src/gameUI2/ai/strategies/beeline.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/beeline.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/beeline.ts","loaded":true,"sourceSHA256":"b38a5a2768ff20c2aaa8b255b5957ea6789e7c595af15a5ec39670fb3e6c66c8","size":1243,"version":1,"evalStartTime":1781591215136,"evalEndTime":1781591215136.05,"allowclient":true,"hotreload":true}, moduleFnc: (function beeline_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
const aiPlanner_1 = require("../aiPlanner");
const registry_1 = require("./registry");
// v1 baseline: every general beelines toward the nearest enemy city. Ignores config + deadline.
(0, registry_1.registerStrategy)("beeline", (snapshot) => (0, aiPlanner_1.planBeelineOrders)(snapshot));
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "0257b6c9c0f0bf5a088557ba459f4b32e40b04eaacacb3fb8d5458e143f6eedb"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/aiPlanner.ts", filename: "/root/generals/src/gameUI2/ai/aiPlanner.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/aiPlanner.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/aiPlanner.ts","loaded":true,"sourceSHA256":"d6697eb76225c96a5c8c41966e527f2ccd5ff92d073140d79225abb23f1b2bca","size":6469,"version":1,"evalStartTime":1781591215136.01,"evalEndTime":1781591215136.02,"allowclient":true,"hotreload":true}, moduleFnc: (function aiPlanner_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/registry.ts", filename: "/root/generals/src/gameUI2/ai/strategies/registry.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/registry.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/registry.ts","loaded":true,"sourceSHA256":"d5b6dde5c65a18cd67e7ac01b9995e7ed8cf22343a854f39332777c21462089c","size":3244,"version":1,"evalStartTime":1781591215136.03,"evalEndTime":1781591215136.04,"allowclient":true,"hotreload":true}, moduleFnc: (function registry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/greedyCity.ts", filename: "/root/generals/src/gameUI2/ai/strategies/greedyCity.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/greedyCity.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/greedyCity.ts","loaded":true,"sourceSHA256":"42ac0bb2c7df5abbe4cba4c4fb36234fb3615d5a2e6c1aed46ae1efecb99b581","size":8560,"version":1,"evalStartTime":1781591215136.06,"evalEndTime":1781591215137.02,"allowclient":true,"hotreload":true}, moduleFnc: (function greedyCity_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/growthPolicy.ts", filename: "/root/generals/src/gameUI2/ai/growthPolicy.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/growthPolicy.ts","path":"/root/generals/src/gameUI2/ai","filename":"/root/generals/src/gameUI2/ai/growthPolicy.ts","loaded":true,"sourceSHA256":"71bfc7326d48614ee5d3203421801b379adfb580fd35340e948bf13127c5c804","size":5151,"version":1,"evalStartTime":1781591215137,"evalEndTime":1781591215137.01,"allowclient":true,"hotreload":true}, moduleFnc: (function growthPolicy_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/consolidate.ts", filename: "/root/generals/src/gameUI2/ai/strategies/consolidate.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/consolidate.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/consolidate.ts","loaded":true,"sourceSHA256":"567b5b5d6f14cbc2cf50ec2d2dfa917a57eae5a6ffb77ab92bae1a89d66d511c","size":10544,"version":1,"evalStartTime":1781591215137.03,"evalEndTime":1781591215137.04,"allowclient":true,"hotreload":true}, moduleFnc: (function consolidate_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/focusFire.ts", filename: "/root/generals/src/gameUI2/ai/strategies/focusFire.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/focusFire.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/focusFire.ts","loaded":true,"sourceSHA256":"39df806529aa4e98f854c3e21b7f4a47d1667eebd527031017286fb08016ba99","size":9404,"version":1,"evalStartTime":1781591215137.05,"evalEndTime":1781591215137.06,"allowclient":true,"hotreload":true}, moduleFnc: (function focusFire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts", filename: "/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/focusWeakestFaction.ts","loaded":true,"sourceSHA256":"bc9a06e39651d8cba4c0554a8ba44d0a3f10fe58e085df12f715696f80f385ea","size":13603,"version":1,"evalStartTime":1781591215137.07,"evalEndTime":1781591215138,"allowclient":true,"hotreload":true}, moduleFnc: (function focusWeakestFaction_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts", filename: "/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts", isModuleMain: undefined, paths: ["/root/generals/src/gameUI2/ai/strategies/node_modules","/root/generals/src/gameUI2/ai/node_modules","/root/generals/src/gameUI2/node_modules","/root/generals/src/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts","path":"/root/generals/src/gameUI2/ai/strategies","filename":"/root/generals/src/gameUI2/ai/strategies/monteCarlo.ts","loaded":true,"sourceSHA256":"033e12e03577ad3c6680b10c2cd3eb3709497520393a4cc7b23dfee27335b469","size":16481,"version":1,"evalStartTime":1781591215138.01,"evalEndTime":1781591215138.02,"allowclient":true,"hotreload":true}, moduleFnc: (function monteCarlo_ts(exports, require, module, __filename, __dirname) { "use strict";
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

;globalThis.__BUNDLE_HASH__ = "3edc1b192ee80d9874c34277840c8bf717f2a867475a5823fd2644c94e213f98";;(function bundleRequire(config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGlsZURpckZsYWdzLnRzIiwiY29tcGlsZVJlY29yZE1vZHVsZVJlcXVpcmVzLnRzIiwiYnVuZGxlci50cyIsImJ1bmRsZVJlcXVpcmUudHMiLCJidW5kbGVXcmFwcGVyLnRzIiwiY2FjaGluZy50cyIsIm1pc2MudHMiLCJ0eXBlcy50cyIsImZvcm1hdC50cyIsInNvdXJjZU1hcHMudHMiLCJhaVdvcmtlckVudHJ5LnRzIiwiaW5kZXgudHMiLCJiZWVsaW5lLnRzIiwiYWlQbGFubmVyLnRzIiwicmVnaXN0cnkudHMiLCJncmVlZHlDaXR5LnRzIiwiZ3Jvd3RoUG9saWN5LnRzIiwiY29uc29saWRhdGUudHMiLCJmb2N1c0ZpcmUudHMiLCJmb2N1c1dlYWtlc3RGYWN0aW9uLnRzIiwibW9udGVDYXJsby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICAgICAgTG9va3MgZm9yIGFkamFjZW50IHguZmxhZyBmaWxlcywgc2V0dGluZyBhbiB4IGZsYWcgb24gdGhlIG1vZHVsZSBpZiB0aGV5IGV4aXN0LlxuICogICAgICAtIEFsc28gY2hlY2tzIHBhcmVudCBkaXJlY3Rvcmllc1xuICogXG4gKiAgICAgIC0gRXgsIGlmIHRlc3QuanMgaGFzIGEgc2libGluZyBmaWxlIGNhbGxlZCBhbGxvd2NsaWVudC5mbGFnLCB0aGVuIHRoZSB0ZXN0LmpzXG4gKiAgICAgICAgICBtb2R1bGUgaGFzIGFsbG93Y2xpZW50ID0gdHJ1ZSBzZXQgb24gaXQuXG4gKi9cblxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5cbi8vIE5PVEU6IE5vdCB1c2luZyBpbXBvcnQsIGFzIHRoZSB0eXBlcyBjb21wbGFpbiBhYm91dCB3aGF0IHdlIGFyZSBkb2luZyB0b28gbXVjaC5cbmNvbnN0IE1vZHVsZSA9IHJlcXVpcmUoXCJtb2R1bGVcIik7XG5cbi8vIFdlIG5lZWQgYXQgbGVhc3QgMSBleHBvcnQsIHRvIGZvcmNlIHRoaXMgdG8gYmUgdHJlYXRlZCBsaWtlIGEgbW9kdWxlXG5leHBvcnQgY29uc3QgZm9yY2VNb2R1bGUgPSB0cnVlO1xuXG5sZXQgZmxhZ3NQZXJEaXI6IHsgW2Rpcm5hbWU6IHN0cmluZ106IHsgW2ZsYWc6IHN0cmluZ106IHRydWUgfSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGdldEZsYWdzRm9yRGlyKGRpcjogc3RyaW5nKSB7XG4gICAgbGV0IGZsYWdzID0gZmxhZ3NQZXJEaXJbZGlyXTtcbiAgICBpZiAoIWZsYWdzKSB7XG4gICAgICAgIGZsYWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZmxhZ3NQZXJEaXJbZGlyXSA9IGZsYWdzO1xuICAgICAgICBsZXQgZmlsZXNJbkRpcjogc3RyaW5nW10gfCB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaWxlc0luRGlyID0gZnMucmVhZGRpclN5bmMoZGlyKTtcbiAgICAgICAgfSBjYXRjaCB7IH1cbiAgICAgICAgaWYgKGZpbGVzSW5EaXIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGZsYWcgb2YgZmlsZXNJbkRpci5maWx0ZXIoeCA9PiB4LmVuZHNXaXRoKFwiLmZsYWdcIikpKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3NbZmxhZy5zbGljZSgwLCAtXCIuZmxhZ1wiLmxlbmd0aCldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxhZ3M7XG59XG5cbmNvbnN0IGJhc2UgPSBNb2R1bGUucHJvdG90eXBlLmxvYWQ7XG5Nb2R1bGUucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAodGhpczogTm9kZUpTLk1vZHVsZSkge1xuICAgIGxldCByZXN1bHQgPSBiYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodGhpcy5maWxlbmFtZSkge1xuICAgICAgICBsZXQgZmxhZ3M6IHsgW2ZsYWc6IHN0cmluZ106IHRydWUgfSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgbGV0IGRpclBhcnRzID0gdGhpcy5maWxlbmFtZS5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKS5zcGxpdChcIi9cIikuc2xpY2UoMCwgLTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkaXJQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmbGFncywgZ2V0RmxhZ3NGb3JEaXIoZGlyUGFydHMuc2xpY2UoMCwgaSkuam9pbihcIi9cIikpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZmxhZ3MpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZsYWdzW2tleV07XG4gICAgICAgICAgICAvLyBOT1RFOiBEb24ndCBzZXQgZmxhZ3Mgd2hpY2ggYXJlIEVYUExJQ0lUTFkgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoKHRoaXMgYXMgYW55KVtrZXldICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLyoqXG4gKiAgICAgIEFkZHMgbW9kdWxlLnJlcXVpcmVzLCB3aGljaCBpbmRpY2F0ZXMgdGhlIHJlc3VsdCBvZiBldmVyeSByZXF1aXJlIHBlciBtb2R1bGUuXG4gKi9cblxuLy8gTk9URTogTm90IHVzaW5nIGltcG9ydCwgYXMgdGhlIHR5cGVzIGNvbXBsYWluIGFib3V0IHdoYXQgd2UgYXJlIGRvaW5nIHRvbyBtdWNoLlxuY29uc3QgTW9kdWxlID0gZXZhbChcInJlcXVpcmVcIikoXCJtb2R1bGVcIik7XG5cbi8vIFdlIG5lZWQgYXQgbGVhc3QgMSBleHBvcnQsIHRvIGZvcmNlIHRoaXMgdG8gYmUgdHJlYXRlZCBsaWtlIGEgbW9kdWxlXG5leHBvcnQgY29uc3QgZm9yY2VNb2R1bGUgPSB0cnVlO1xuXG5jb25zdCBiYXNlID0gTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlO1xuTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlID0gZnVuY3Rpb24gKHRoaXM6IE5vZGVKUy5Nb2R1bGUsIHJlcXVlc3Q6IHN0cmluZykge1xuICAgIHRoaXMucmVxdWlyZXMgPSB0aGlzLnJlcXVpcmVzIHx8IHt9O1xuICAgIHRoaXMuYXN5bmNSZXF1aXJlcyA9IHRoaXMuYXN5bmNSZXF1aXJlcyB8fCB7fVxuICAgIGlmICh0aGlzLmV2YWxFbmRUaW1lICYmICF0aGlzLnJlcXVpcmVzW3JlcXVlc3RdKSB7XG4gICAgICAgIHRoaXMuYXN5bmNSZXF1aXJlc1tyZXF1ZXN0XSA9IHRydWU7XG4gICAgfVxuICAgIC8vIE5PVEU6IERvaW5nIHJlc29sdmVGaWxlbmFtZSBvbiBldmVyeSByZXF1aXJlIGJyZWFrcyBhIGxvdCBvZiB0aGUgY2FjaGluZyBOb2RlSlMgZG9lc1xuICAgIC8vICB0byB0cnkgdG8gYXZvaWQgY2FsbGluZyByZXNvbHZlRmlsZW5hbWUuIEhvd2V2ZXIuLi4gdGhlaXIgY2FjaGluZyBpcyBwcm9iYWJseSBubyBsb25nZXJcbiAgICAvLyAgbmVlZGVkIGFueW1vcmUuXG4gICAgdGhpcy5yZXF1aXJlc1tyZXF1ZXN0XSA9IE1vZHVsZS5fcmVzb2x2ZUZpbGVuYW1lKHJlcXVlc3QsIHRoaXMsIGZhbHNlKTtcblxuXG4gICAgcmV0dXJuIGJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07IiwiaW1wb3J0IHsgc2hhMjU2IH0gZnJvbSBcImpzLXNoYTI1NlwiO1xuaW1wb3J0IHsgYnVuZGxlUmVxdWlyZSwgQnVuZGxlUmVxdWlyZUNvbmZpZyB9IGZyb20gXCIuL2J1bmRsZVJlcXVpcmVcIjtcbmltcG9ydCB7IHdyYXBNb2R1bGUgfSBmcm9tIFwiLi9idW5kbGVXcmFwcGVyXCI7XG5pbXBvcnQgeyBhZGRUb0luUHJvZ3Jlc3NTb3VyY2VNYXAsIGVuY29kZVNvdXJjZU1hcExpbmVDb21tZW50LCBmaW5hbGl6ZUluUHJvZ3Jlc3NTb3VyY2VNYXAsIGdldEluUHJvZ3Jlc3NTb3VyY2VNYXAsIEluUHJvZ3Jlc3NTb3VyY2VNYXAsIHJlbW92ZVNvdXJjZU1hcCB9IGZyb20gXCIuL3NvdXJjZU1hcHNcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1bmRsZShjb25maWc6IHtcbiAgICBtb2R1bGVzOiAodHlwZW9mIHJlcXVpcmUuY2FjaGVbXCJcIl0pW107XG4gICAgcm9vdFBhdGg6IHN0cmluZztcbiAgICBlbnRyeVBvaW50czogc3RyaW5nW107XG59KTogUHJvbWlzZTx7XG4gICAgYnVuZGxlOiBzdHJpbmc7XG59PiB7XG4gICAgY29uc3QgeyBtb2R1bGVzLCByb290UGF0aCwgZW50cnlQb2ludHMgfSA9IGNvbmZpZztcblxuICAgIC8vIE5PVEU6IFdlIENPVUxEIHVzZSBhbiBcImluZGV4IHNvdXJjZSBtYXBcIiwgd2hpY2ggY29udGFpbnMgb3RoZXIgc291cmNlbWFwc1xuICAgIC8vICBhbmQgZ2l2ZXMgb2Zmc2V0cyBmb3IgdGhlbS4gSG93ZXZlci4uLiB0b29saW5nIHN1cHBvcnQgd2lsbCBpcyBiZXR0ZXJcbiAgICAvLyAgZm9yIHJlZ3VsYXIgc291cmNlbWFwcywgYW5kIGl0J3MgbW9yZSBmbGV4aWJsZS5cblxuICAgIGxldCBpblByb2dyZXNzU291cmNlTWFwOiBJblByb2dyZXNzU291cmNlTWFwID0ge1xuICAgICAgICBzb3VyY2VzOiBbXSxcbiAgICAgICAgbWFwcGluZ3M6IFtdLFxuICAgIH07XG5cbiAgICBsZXQgY29kZSA9IFwiXCI7XG4gICAgbGV0IGN1ckxpbmVDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgaWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gICAgICAgIGxldCBuZXdDb2RlID0gd3JhcE1vZHVsZShtb2R1bGUpO1xuXG4gICAgICAgIGxldCB7IHNvdXJjZU1hcCwgY29kZTogbmV3Q29kZTIgfSA9IHJlbW92ZVNvdXJjZU1hcChuZXdDb2RlKTtcbiAgICAgICAgbmV3Q29kZSA9IG5ld0NvZGUyO1xuICAgICAgICBpZiAoc291cmNlTWFwKSB7XG4gICAgICAgICAgICBsZXQgaW5Qcm9ncmVzcyA9IGdldEluUHJvZ3Jlc3NTb3VyY2VNYXAoc291cmNlTWFwKTtcbiAgICAgICAgICAgIGZvciAobGV0IG1hcHBpbmcgb2YgaW5Qcm9ncmVzcy5tYXBwaW5ncykge1xuICAgICAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkTGluZSArPSBjdXJMaW5lQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUb0luUHJvZ3Jlc3NTb3VyY2VNYXAoaW5Qcm9ncmVzc1NvdXJjZU1hcCwgaW5Qcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlICs9IG5ld0NvZGUgKyBcIlxcblwiO1xuICAgICAgICBjdXJMaW5lQ291bnQgKz0gKG5ld0NvZGUubWF0Y2goL1xcbi9nKSB8fCBbXSkubGVuZ3RoICsgMTtcbiAgICB9XG4gICAgY29kZSArPSBcIlxcbi8qIElubGluZWQgYnVmZmVyIGltcGxlbWVudGF0aW9uOiAqL1xcblwiO1xuICAgIGNvZGUgKz0gYFxcbjtcXG4ke2ZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyBcIi9idWZmZXIuanNcIikudG9TdHJpbmcoKX1cXG47XFxuYDtcbiAgICBjb2RlICs9IGBcXG47Z2xvYmFsVGhpcy5fX0JVTkRMRV9IQVNIX18gPSAke0pTT04uc3RyaW5naWZ5KHNoYTI1Nihjb2RlKSl9O2A7XG4gICAgbGV0IGJ1bmRsZUNvbmZpZzogQnVuZGxlUmVxdWlyZUNvbmZpZyA9IHtcbiAgICAgICAgcm9vdFBhdGgsXG4gICAgfTtcbiAgICBjb2RlICs9IGA7KCR7YnVuZGxlUmVxdWlyZS50b1N0cmluZygpfSkoJHtKU09OLnN0cmluZ2lmeShidW5kbGVDb25maWcpfSk7YDtcbiAgICAvLyBEZWxheSB0aGUgaW5pdGlhbCByZXF1aXJlcywgc28gb3VyIGV4dGVuc2lvbiBjYW4gYm9vdCBhbmQgd2UgY2FuIGRlYnVnIHN0YXJ0dXAgZXJyb3JzXG4gICAgY29kZSArPSBcIlxcbjtzZXRUaW1lb3V0KCgpID0+IHtcIjtcbiAgICBmb3IgKGxldCBlbnRyeVBvaW50IG9mIGVudHJ5UG9pbnRzKSB7XG4gICAgICAgIGNvZGUgKz0gYFxcbjtnbG9iYWxUaGlzLnJlcXVpcmUoJHtKU09OLnN0cmluZ2lmeShlbnRyeVBvaW50KX0pO2A7XG4gICAgfVxuICAgIGNvZGUgKz0gXCJcXG47fSk7XCI7XG4gICAgY29kZSArPSBcIlxcblwiICsgZW5jb2RlU291cmNlTWFwTGluZUNvbW1lbnQoZmluYWxpemVJblByb2dyZXNzU291cmNlTWFwKGluUHJvZ3Jlc3NTb3VyY2VNYXApKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBidW5kbGU6IGNvZGUsXG4gICAgfTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBfX0JVTkRMRV9IQVNIX186IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RCdW5kbGVIYXNoKGNvZGU6IHN0cmluZykge1xuICAgIGxldCBtYXRjaCA9IGNvZGUubWF0Y2goLztnbG9iYWxUaGlzLl9fQlVORExFX0hBU0hfXyA9IFwiKFteXCJdKylcIjsvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBtYXRjaFsxXTtcbn0iLCJpbXBvcnQgeyBTZXJpYWxpemVkTW9kdWxlIH0gZnJvbSBcIi4vYnVuZGxlV3JhcHBlclwiO1xuXG4vLyBTZXRzIGdsb2JhbFRoaXMucmVxdWlyZSA9IC4uLiwgdXRpbGl6aW5nIHJlZ2lzdGVyZWRNb2R1bGVzIChmcm9tIGJ1bmRsZVdyYXBwZXIudHMpIHdoZW4gcmVxdWlyZSBpcyBjYWxsZWRcbmV4cG9ydCBpbnRlcmZhY2UgQnVuZGxlUmVxdWlyZUNvbmZpZyB7XG4gICAgcm9vdFBhdGg6IHN0cmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBidW5kbGVSZXF1aXJlKGNvbmZpZzogQnVuZGxlUmVxdWlyZUNvbmZpZykge1xuICAgIGdsb2JhbFRoaXMucHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcyB8fCB7XG4gICAgICAgIGVudjoge1xuICAgICAgICAgICAgTk9ERV9FTlY6IFwicHJvZHVjdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICB2ZXJzaW9uczoge30sXG4gICAgICAgIG9uOiAoKSA9PiB7IH0sXG4gICAgfTtcbiAgICAvLyBVc2UgcHJvZHVjdGlvbiwgZm9yIGNvbnNpc3RlbmN5IChhbmQgc28gbW9ieCBkb2Vzbid0IGJyZWFrKVxuICAgIGdsb2JhbFRoaXMucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBnbG9iYWxUaGlzLnByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwicHJvZHVjdGlvblwiO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkud2luZG93ID0gKGdsb2JhbFRoaXMgYXMgYW55KS53aW5kb3cgfHwgZ2xvYmFsVGhpcztcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLmdsb2JhbCA9IChnbG9iYWxUaGlzIGFzIGFueSkuZ2xvYmFsIHx8IGdsb2JhbFRoaXM7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5zZXRJbW1lZGlhdGUgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLnNldEltbWVkaWF0ZSB8fCBnbG9iYWxUaGlzLnNldFRpbWVvdXQ7XG5cbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLkJPT1RFRF9FREdFX05PREUgPSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgYnVpbHRJbk1vZHVsZUV4cG9ydHM6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9ID0ge1xuICAgICAgICB3b3JrZXJfdGhyZWFkczoge1xuICAgICAgICAgICAgaXNNYWluVGhyZWFkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB1dGlsOiB7XG4gICAgICAgICAgICAvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL3V0aWwuaHRtbCN1dGlsX3V0aWxfaW5oZXJpdHNfY29uc3RydWN0b3Jfc3VwZXJjb25zdHJ1Y3RvclxuICAgICAgICAgICAgaW5oZXJpdHMoY29uc3RydWN0b3I6IGFueSwgc3VwZXJDb25zdHJ1Y3RvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRleHREZWNvZGVyOiBUZXh0RGVjb2RlcixcbiAgICAgICAgICAgIFRleHRFbmNvZGVyOiBUZXh0RW5jb2RlcixcbiAgICAgICAgfSxcbiAgICAgICAgYnVmZmVyOiB7IEJ1ZmZlciB9LFxuICAgICAgICBzdHJlYW06IHtcbiAgICAgICAgICAgIC8vIEhBQ0s6IE5lZWRlZCB0byBnZXQgU0FYIEpTIHRvIHdvcmsgY29ycmVjdGx5LlxuICAgICAgICAgICAgU3RyZWFtOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICBUcmFuc2Zvcm06IGZ1bmN0aW9uICgpIHsgfSxcblxuICAgICAgICAgICAgV3JpdGFibGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdGltZXJzOiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBBZGQgYWxsIG1lbWJlcnMgb2YgdGltZXJzXG4gICAgICAgICAgICBzZXRJbW1lZGlhdGU6IGdsb2JhbFRoaXMuc2V0SW1tZWRpYXRlLFxuICAgICAgICB9LFxuICAgICAgICBjaGlsZF9wcm9jZXNzOiB7fSxcbiAgICAgICAgZXZlbnRzOiBjbGFzcyBFdmVudEVtaXR0ZXIgeyB9LFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiByZXF1aXJlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IGJ1aWx0SW5SZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgbGV0IGFsbEJ1aWx0SW5Nb2R1bGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgIGFsbEJ1aWx0SW5Nb2R1bGVzLmFkZChcImVsZWN0cm9uXCIpO1xuICAgICAgICBhbGxCdWlsdEluTW9kdWxlcy5hZGQoXCJvcmlnaW5hbC1mc1wiKTtcbiAgICAgICAgYWxsQnVpbHRJbk1vZHVsZXMuYWRkKFwidnNjb2RlXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBidWlsdHMgaW5zIHRvIHVzZSB0aGUgYWN0dWFsIGJ1aWx0IGlucyFcbiAgICAgICAgICAgIGxldCB7IGJ1aWx0aW5Nb2R1bGVzIH0gPSByZXF1aXJlKFwibm9kZTptb2R1bGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgYnVpbHRpbk1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICBhbGxCdWlsdEluTW9kdWxlcy5hZGQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7IH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgYWxsQnVpbHRJbk1vZHVsZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShidWlsdEluTW9kdWxlRXhwb3J0cywga2V5LCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbHRJblJlcXVpcmUoa2V5KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBKdXN0IHBhdGgucmVzb2x2ZSAoYnV0IG5lZWRzIHRvIGJlIHJlaW1wbGVtZW50ZWQsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGltcG9ydHMpXG4gICAgZnVuY3Rpb24gcGF0aFJlc29sdmUoLi4ucGF0aHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCBlbXB0eSBwYXRoIHNlZ21lbnRzIGFycmF5XG4gICAgICAgIGxldCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IGlzV2luZG93c1BhdGggPSBmYWxzZTtcblxuICAgICAgICBwYXRocyA9IHBhdGhzLm1hcCh4ID0+IHgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIikpO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZWFjaCBwYXRoIGFyZ3VtZW50XG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFdpbmRvd3MgZHJpdmUgbGV0dGVyIChlLmcuLCBDOi8pXG4gICAgICAgICAgICBpZiAoL15bQS1aYS16XTovLnRlc3QocGF0aCkpIHtcbiAgICAgICAgICAgICAgICBpc1dpbmRvd3NQYXRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJpdmUgbGV0dGVyIGZvciBwcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aG91dERyaXZlID0gcGF0aC5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICBpZiAod2l0aG91dERyaXZlLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gW3BhdGguc2xpY2UoMCwgMildOyAvLyBLZWVwIGRyaXZlIGxldHRlciBhbmQgcmVzZXQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBsZWFkaW5nIHNsYXNoLCBrZWVwIGN1cnJlbnQgc2VnbWVudHMgKHJlbGF0aXZlIHRvIGN1cnJlbnQgZHJpdmUgcGF0aClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCB8fCAhc2VnbWVudHNbMF0ubWF0Y2goL15bQS1aYS16XTovKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBbcGF0aC5zbGljZSgwLCAyKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSByZXN0IG9mIHRoZSBwYXRoIHBhcnRzXG4gICAgICAgICAgICAgICAgc2VnbWVudHMucHVzaCguLi53aXRob3V0RHJpdmUuc3BsaXQoXCIvXCIpLmZpbHRlcih4ID0+IHgpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgYWJzb2x1dGUgcGF0aCwgcmVzZXQgc2VnbWVudHMgYnV0IGtlZXAgZHJpdmUgbGV0dGVyIGlmIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzV2luZG93c1BhdGggJiYgc2VnbWVudHMubGVuZ3RoID4gMCAmJiBzZWdtZW50c1swXS5tYXRjaCgvXltBLVphLXpdOi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlID0gc2VnbWVudHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gW2RyaXZlXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3BsaXQgcGF0aCBpbnRvIHNlZ21lbnRzIGFuZCBwcm9jZXNzIGVhY2hcbiAgICAgICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IHBhdGguc3BsaXQoXCIvXCIpLmZpbHRlcih4ID0+IHgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhdGhQYXJ0cykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0ID09PSBcIi4uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcG9wIG9mZiB0aGUgZHJpdmUgbGV0dGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAoaXNXaW5kb3dzUGF0aCA/IDEgOiAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQgIT09IFwiLlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZWdtZW50IGlmIG5vdCBjdXJyZW50IGRpcmVjdG9yeSBtYXJrZXJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21iaW5lIHNlZ21lbnRzIGludG8gZmluYWwgcGF0aFxuICAgICAgICBsZXQgcmVzdWx0ID0gc2VnbWVudHMuam9pbihcIi9cIik7XG4gICAgICAgIGlmICghaXNXaW5kb3dzUGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCIvXCIgKyByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlybmFtZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gcGF0aC5zcGxpdChcIi9cIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVpcmVDYWNoZTogeyBbaWQ6IHN0cmluZ106IE5vZGVKUy5Nb2R1bGUgfSA9IHt9O1xuXG4gICAgbGV0IHJvb3RNb2R1bGUgPSBjcmVhdGVNb2R1bGUoe1xuICAgICAgICBwYXJlbnRNb2R1bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgcmVzb2x2ZUFic29sdXRlUGF0aDogY29uZmlnLnJvb3RQYXRoICsgXCIvcm9vdFBsYWNlaG9sZGVyXCIsXG4gICAgfSk7XG4gICAgZ2xvYmFsVGhpcy5yZXF1aXJlID0gcm9vdE1vZHVsZS5yZXF1aXJlIGFzIGFueTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZShjb25maWc6IHtcbiAgICAgICAgcGFyZW50TW9kdWxlOiBOb2RlSlMuTW9kdWxlIHwgdW5kZWZpbmVkO1xuICAgICAgICByZXNvbHZlQWJzb2x1dGVQYXRoOiBzdHJpbmc7XG4gICAgfSk6IE5vZGVKUy5Nb2R1bGUge1xuICAgICAgICBjb25zdCB7IHBhcmVudE1vZHVsZSwgcmVzb2x2ZUFic29sdXRlUGF0aCB9ID0gY29uZmlnO1xuICAgICAgICBsZXQgY2FjaGVkID0gcmVxdWlyZUNhY2hlW3Jlc29sdmVBYnNvbHV0ZVBhdGhdO1xuICAgICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZXJpYWxpemVkID0gZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcz8uW3Jlc29sdmVBYnNvbHV0ZVBhdGhdO1xuXG4gICAgICAgIGxldCBuZXdNb2R1bGU6IE5vZGVKUy5Nb2R1bGUgPSB7XG4gICAgICAgICAgICBpZDogcmVzb2x2ZUFic29sdXRlUGF0aCxcbiAgICAgICAgICAgIGZpbGVuYW1lOiByZXNvbHZlQWJzb2x1dGVQYXRoLFxuICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudE1vZHVsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIGlzUHJlbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGF0aDogZGlybmFtZShyZXNvbHZlQWJzb2x1dGVQYXRoKSxcbiAgICAgICAgICAgIHBhdGhzOiBzZXJpYWxpemVkPy5wYXRocyB8fCBbXSxcbiAgICAgICAgICAgIHJlcXVpcmU6IHJlcXVpcmVGbmMsXG4gICAgICAgICAgICBsb2FkLFxuICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgbmV3TW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG5ld01vZHVsZS5leHBvcnRzO1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICBwYXJlbnRNb2R1bGUuY2hpbGRyZW4ucHVzaChuZXdNb2R1bGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzZXJpYWxpemVkPy5tb2R1bGVGaWVsZHMgfHwge30pKSB7XG4gICAgICAgICAgICBpZiAoa2V5IGluIG5ld01vZHVsZSkgY29udGludWU7XG4gICAgICAgICAgICAobmV3TW9kdWxlIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUucGF0aHMgPSAocmVxdWVzdDogc3RyaW5nKSA9PiBbXTtcblxuICAgICAgICByZXF1aXJlQ2FjaGVbbmV3TW9kdWxlLmlkXSA9IG5ld01vZHVsZTtcbiAgICAgICAgcmVxdWlyZUZuYy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgcmVxdWlyZUZuYy5jYWNoZSA9IHJlcXVpcmVDYWNoZTtcbiAgICAgICAgcmVxdWlyZUZuYy5tYWluID0gbmV3TW9kdWxlO1xuICAgICAgICByZXF1aXJlRm5jLmV4dGVuc2lvbnMgPSBcImV4dGVuc2lvbiBub3QgaW1wbGVtZW50ZWQgeWV0XCIgYXMgYW55O1xuXG4gICAgICAgIC8vIFJlc29sdmVzIGZpbGUgZXh0ZW5zaW9uc1xuICAgICAgICBmdW5jdGlvbiBpbm5lclJlc29sdmUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzID0gW1xuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgcGF0aCArIFwiLmpzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCArIFwiLnRzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCArIFwiLnRzeFwiLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZ2lzdGVyZWQgPSBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzPy5bY2FuZGlkYXRlXTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xuICAgICAgICAgICAgaWYgKHBhdGguc3RhcnRzV2l0aChcIi5cIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJSZXNvbHZlKHBhdGhSZXNvbHZlKG5ld01vZHVsZS5wYXRoLCBwYXRoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHNlYXJjaCBhbGwgcGF0aHNcbiAgICAgICAgICAgIGZvciAobGV0IHNlYXJjaFJvb3Qgb2Ygc2VyaWFsaXplZD8ucGF0aHMgfHwgW10pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlID0gaW5uZXJSZXNvbHZlKHBhdGhSZXNvbHZlKHNlYXJjaFJvb3QsIHBhdGgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVnaXN0ZXJlZCA9IGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXM/LltjYW5kaWRhdGVdO1xuICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWdpc3RlcmVkLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEl0IGlzIHByb2JhYmx5IFwiZnNcIiBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGBNb2R1bGUgJHtwYXRofSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlcXVpcmVGbmMocGF0aDogc3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbiBidWlsdEluTW9kdWxlRXhwb3J0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsdEluTW9kdWxlRXhwb3J0c1twYXRoIGFzIGtleW9mIHR5cGVvZiBidWlsdEluTW9kdWxlRXhwb3J0c107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQgPSByZXNvbHZlKHBhdGgpO1xuICAgICAgICAgICAgbGV0IHN1Yk1vZHVsZSA9IGNyZWF0ZU1vZHVsZSh7XG4gICAgICAgICAgICAgICAgcGFyZW50TW9kdWxlOiBuZXdNb2R1bGUsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZUFic29sdXRlUGF0aDogcmVzb2x2ZWQsXG4gICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgICBzdWJNb2R1bGUubG9hZChuZXdNb2R1bGUuZmlsZW5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHN1Yk1vZHVsZS5leHBvcnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgICAgIGlmIChuZXdNb2R1bGUubG9hZGVkKSByZXR1cm47XG4gICAgICAgICAgICAvLyBOT1RFOiBTZXQgbG9hZGVkIGltbWVkaWF0ZWx5LCBpbiBjYXNlIHdlIGhhdmUgYSBjaXJjdWxhciBkZXBlbmRlbmN5XG4gICAgICAgICAgICBuZXdNb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLm1vZHVsZUZuYyhuZXdNb2R1bGUuZXhwb3J0cywgcmVxdWlyZUZuYywgbmV3TW9kdWxlLCBuZXdNb2R1bGUuZmlsZW5hbWUsIG5ld01vZHVsZS5wYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGJlaW5nIGltcG9ydGVkIGJ5IHRoZSByb290IG1vZHVsZSwgd2UgbmVlZCB0byB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLnBhcmVudE1vZHVsZT8ucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIHJlcXVpcmVkIG1vZHVsZSAke0pTT04uc3RyaW5naWZ5KGNvbmZpZy5yZXNvbHZlQWJzb2x1dGVQYXRoKX0sIGhhdmUgJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzIHx8IHt9KSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld01vZHVsZS5leHBvcnRzID0gbmV3IFByb3h5KFxuICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJkZWZhdWx0XCIpIHJldHVybiBuZXdNb2R1bGUuZXhwb3J0cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYE1vZHVsZSAke25ld01vZHVsZS5maWxlbmFtZX0gaXMgbm90IGF2YWlsYWJsZS4gSXQgbWlnaHQgaGF2ZSBub3QgYmVlbiBpbXBvcnRlZCBpbiBOb2RlLmpzIGR1ZSB0byBhIGZsYWcgd2hpY2ggaXMgY2hlY2tpbmcgdGhlIGJyb3dzZXIgb3IgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUuIEl0IG1pZ2h0IGFsc28gYmUgdGhhdCB0aGUgZW50cnkgcG9pbnQgaXMgd2VpcmRseSBjb25maWd1cmVkIGFuZCBjb3VsZCBub3QgYmUgZGV0ZWN0ZWQuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld01vZHVsZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwic29ja2V0LWZ1bmN0aW9uL3NyYy9jYWNoaW5nXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCBnZXRQYWNrYWdlSnNvblBhdGggPSBjYWNoZSgoZGlyZWN0b3J5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIGlmICghZGlyZWN0b3J5LmluY2x1ZGVzKFwiL1wiKSAmJiAhZGlyZWN0b3J5LmluY2x1ZGVzKFwiXFxcXFwiKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgcGFja2FnZUpzb25QYXRoID0gcGF0aC5yZXNvbHZlKGRpcmVjdG9yeSwgXCJwYWNrYWdlLmpzb25cIik7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocGFja2FnZUpzb25QYXRoKSkge1xuICAgICAgICByZXR1cm4gcGFja2FnZUpzb25QYXRoO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UGFja2FnZUpzb25QYXRoKHBhdGguZGlybmFtZShkaXJlY3RvcnkpKTtcbn0pO1xuY29uc3QgZ2V0TWFpblBhdGggPSBjYWNoZSgoZGlyZWN0b3J5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIGxldCBwYWNrYWdlSnNvblBhdGggPSBnZXRQYWNrYWdlSnNvblBhdGgoZGlyZWN0b3J5KTtcbiAgICBpZiAoIXBhY2thZ2VKc29uUGF0aCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBsZXQgcGFja2FnZUpzb24gPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYWNrYWdlSnNvblBhdGgsIFwidXRmOFwiKSkgYXMge1xuICAgICAgICBtYWluPzogc3RyaW5nO1xuICAgICAgICBleHBvcnRzPzoge1xuICAgICAgICAgICAgXCIuXCI/OiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZT86IHN0cmluZztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBsZXQgZGlyID0gcGF0aC5kaXJuYW1lKHBhY2thZ2VKc29uUGF0aCk7XG4gICAgbGV0IG1haW5OYW1lID0gcGFja2FnZUpzb24uZXhwb3J0cz8uW1wiLlwiXT8ucmVxdWlyZSB8fCBwYWNrYWdlSnNvbi5tYWluO1xuICAgIGlmICghbWFpbk5hbWUpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgXCJpbmRleC5qc1wiKSkpIHtcbiAgICAgICAgICAgIG1haW5OYW1lID0gXCJpbmRleC5qc1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgXCJpbmRleC50c1wiKSkpIHtcbiAgICAgICAgICAgIG1haW5OYW1lID0gXCJpbmRleC50c1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgXCJpbmRleC50c3hcIikpKSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXgudHN4XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXguanNcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgdGhlIG5lZ2F0aXZlIHZhbHVlIEVTTSBleHBvcnRzIHRoaW5nLlxuICAgIGxldCBtYWluUGF0aCA9IHBhdGgucmVzb2x2ZShkaXIsIG1haW5OYW1lKTtcbiAgICByZXR1cm4gbWFpblBhdGg7XG59KTtcblxuXG4vLyBXcmFwcyB0aGUgbW9kdWxlIHNvIGl0IHJlZ2lzdGVycyBpdHNlbGYgd2hlbiB0aGUgcmV0dXJuZWQgY29kZSBpcyBldmFsdWF0ZWRcbi8vICAtIFNlZSBodHRwczovL25vZGVqcy5vcmcvYXBpL21vZHVsZXMuaHRtbCN0aGUtbW9kdWxlLXdyYXBwZXJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwTW9kdWxlKG1vZHVsZTogTm9kZUpTLk1vZHVsZSk6IHN0cmluZyB7XG4gICAgbGV0IGNvbnRlbnRzID0gKG1vZHVsZSBhcyBhbnkpLm1vZHVsZUNvbnRlbnRzIHx8IFwiLyogTm8gY29udGVudHMgKi9cIjtcblxuICAgIC8vIE5PVEU6IGRlYnVnTmFtZSBvbmx5IG1hdHRlcnMgZHVyaW5nIG1vZHVsZSBldmFsdWF0aW9uLiBBZnRlciB0aGF0IHRoZSBzb3VyY2VtYXAgc2hvdWxkIHdvcmsuXG4gICAgbGV0IGRlYnVnTmFtZSA9IG1vZHVsZS5maWxlbmFtZVxuICAgICAgICAucmVwbGFjZSgvXFxcXC9nLCBcIi9cIilcbiAgICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgICAuc2xpY2UoLTEpWzBdXG4gICAgICAgIC5yZXBsYWNlKC9cXC4vZywgXCJfXCIpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWl9dL2csIFwiXCIpO1xuXG4gICAgbGV0IHdyYXBwZWQgPSBgKGZ1bmN0aW9uICR7ZGVidWdOYW1lfShleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkgeyAke2NvbnRlbnRzfVxuICAgIH0pYDtcblxuICAgIGxldCBtb2R1bGVGaWVsZHM6IHsgW2ZsYWc6IHN0cmluZ106IHVua25vd247IH0gPSB7fTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobW9kdWxlKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgbW9kdWxlRmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUubGVuZ3RoIDwgMTUwKSB7XG4gICAgICAgICAgICBtb2R1bGVGaWVsZHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbW9kdWxlRmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtb2R1bGVNYWluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGRpcm5hbWUgPSBwYXRoLmRpcm5hbWUobW9kdWxlLmZpbGVuYW1lKTtcbiAgICBsZXQgcGFja2FnZUpzb25QYXRoID0gZ2V0UGFja2FnZUpzb25QYXRoKGRpcm5hbWUpO1xuICAgIGlmIChwYWNrYWdlSnNvblBhdGgpIHtcbiAgICAgICAgbGV0IG1haW5QYXRoID0gZ2V0TWFpblBhdGgoZGlybmFtZSk7XG4gICAgICAgIGlmIChtYWluUGF0aD8ucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpID09PSBtb2R1bGUuZmlsZW5hbWUucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpKSB7XG4gICAgICAgICAgICAvLyBUaGVuIHdlIGFyZSB0aGUgbWFpbiBvZiB0aGUgbW9kdWxlXG4gICAgICAgICAgICBtb2R1bGVNYWluID0gcGF0aC5kaXJuYW1lKHBhY2thZ2VKc29uUGF0aCkucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTk9URTogV2UgY2FuJ3QgaGF2ZSBuZXcgbGluZXMsIG9yIHRoZXkgYnJlYWsgc291cmNlIG1hcHNcbiAgICBsZXQgb2JqV3JhcHBlZCA9IGB7YFxuICAgICAgICArIGAgaWQ6ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlLmlkLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSl9LGBcbiAgICAgICAgKyBgIGZpbGVuYW1lOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZS5maWxlbmFtZS5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpfSxgXG4gICAgICAgICsgYCBpc01vZHVsZU1haW46ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlTWFpbil9LGBcbiAgICAgICAgKyBgIHBhdGhzOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZS5wYXRocy5tYXAocCA9PiBwLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSkpfSxgXG4gICAgICAgICsgYCBtb2R1bGVGaWVsZHM6ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlRmllbGRzKX0sYFxuICAgICAgICArIGAgbW9kdWxlRm5jOiAke3dyYXBwZWR9YFxuICAgICAgICArIGAgfWA7XG5cbiAgICBmdW5jdGlvbiBpbml0TW9kdWxlKHNlcmlhbGl6ZWQ6IFNlcmlhbGl6ZWRNb2R1bGUpIHtcbiAgICAgICAgZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcyA9IGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXMgfHwge307XG4gICAgICAgIGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXNbc2VyaWFsaXplZC5pZF0gPSBzZXJpYWxpemVkO1xuICAgICAgICBpZiAoc2VyaWFsaXplZC5pc01vZHVsZU1haW4pIHtcbiAgICAgICAgICAgIGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXNbc2VyaWFsaXplZC5pc01vZHVsZU1haW5dID0gc2VyaWFsaXplZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBgOygke2luaXRNb2R1bGUudG9TdHJpbmcoKS5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiIFwiKX0pKCR7b2JqV3JhcHBlZH0pO2A7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICB2YXIgcmVnaXN0ZXJlZE1vZHVsZXM6IHsgW2lkOiBzdHJpbmddOiBTZXJpYWxpemVkTW9kdWxlOyB9IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZWRNb2R1bGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZmlsZW5hbWU6IHN0cmluZztcblxuICAgIC8vIFRoZSBtYWluIG1haW4gd2UgcmVwcmVzZW50LiBFeCwgXCIvYWkzL25vZGVfbW9kdWxlcy90eXBlc2FmZWNzc1wiXG4gICAgaXNNb2R1bGVNYWluPzogc3RyaW5nO1xuXG4gICAgLy8gUGF0aHMgd2hpY2ggdGhlIHJlcXVpcmUgZnVuY3Rpb24gc2VhcmNoZXMgZm9yIG5vbi1yZWxhdGl2ZSBpbXBvcnRzXG4gICAgcGF0aHM6IHN0cmluZ1tdO1xuXG4gICAgLy8gRmllbGRzIHRvIGJlIHNldCBvbiB0aGUgbW9kdWxlLCB3aGVuIGl0IGlzIGNyZWF0ZWRcbiAgICBtb2R1bGVGaWVsZHM6IHsgW2ZsYWc6IHN0cmluZ106IHVua25vd247IH07XG5cbiAgICBtb2R1bGVGbmM6IChleHBvcnRzOiBhbnksIHJlcXVpcmU6IGFueSwgbW9kdWxlOiBhbnksIF9fZmlsZW5hbWU6IHN0cmluZywgX19kaXJuYW1lOiBzdHJpbmcpID0+IHVua25vd247XG59IiwiaW1wb3J0IHsgYXJyYXlFcXVhbCB9IGZyb20gXCIuL21pc2NcIjtcbmltcG9ydCB7IEFueUZ1bmN0aW9uLCBBcmdzLCBjYW5IYXZlQ2hpbGRyZW4gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGF6eTxUPihmYWN0b3J5OiAoKSA9PiBUKSB7XG4gICAgbGV0IHZhbHVlOiB7IHZhbHVlOiBUIH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHsgdmFsdWU6IGZhY3RvcnkoKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS52YWx1ZTtcbiAgICB9O1xuICAgIGdldC5yZXNldCA9ICgpID0+IHtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBnZXQuc2V0ID0gKG5ld1ZhbHVlOiBUKSA9PiB7XG4gICAgICAgIHZhbHVlID0geyB2YWx1ZTogbmV3VmFsdWUgfTtcbiAgICB9O1xuICAgIHJldHVybiBnZXQ7XG59XG5cbi8vIE5PVEU6IFRoZSByZWFzb24gd2UgbmVlZCB0byBwZXJpb2RpY2FsbHkgY2xlYXIsIGlzIGJlY2F1c2Ugc29tZXRpbWVzIGEgdmVyeSBzbWFsbFxuLy8gICAgICBwYXJ0IG9mIGEgbGFyZ2UgcGF5bG9hZCAoZXgsIHBlcnNpc3RlZCBvdmVycmlkZXMpIGlzIGNhY2hlZCwgd2hpY2ggdGhlbiByZXN1bHRzXG4vLyAgICAgIGluIHRoZSB3aG9sZSBwYXlsb2FkIGJlaW5nIGNhY2hlZCwgd2hpY2ggcmVzdWx0cyBpbiBhIGxvdCBvZiBtZW1vcnkgYmVpbmcgdXNlZC5cblxuLy8gSU1QT1JUQU5UISBUaGUgY2xlYW51cCBmdW5jdGlvbnMgQ0FOTk9UIGNsb3NlIHVwb24gYW55dGhpbmcsIG9yIGVsc2UgdGhleSB3aWxsIGNhdXNlIGxlYWtzIVxuLy8gIEFsbCBkYXRhIHRoZXkgdXNlIHNob3VsZCBiZSBpbiBkYXRhLlxuaW50ZXJmYWNlIENsZWFudXBGbmM8VCBleHRlbmRzIG9iamVjdD4ge1xuICAgIChkYXRhOiBUKTogdm9pZDtcbn1cblxuXG4vLyBOT1RFOiBFbXB0eSBhcnJheXMgYXJlIHNvIGNvbW1vbiwgdGhhdCBpdCBpcyB1c2VmdWwgdG8gcmVwcmVzZW50IHRoZW0gYXMgdGhlIHNhbWVcbi8vICBlbXRweSBhcnJheSwgdG8gaW5jcmVhc2UgY2FjaGUgaGl0IHJhdGVzLlxuY29uc3QgZW1wdHlBcnJheTogYW55W10gPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUVtcHR5QXJyYXk8VD4oYXJyYXk6IFRbXSk6IFRbXSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGVtcHR5QXJyYXk7XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGU8T3V0cHV0LCBLZXksIFVudHJhY2tlZCBleHRlbmRzIHVua25vd25bXT4oXG4gICAgZ2V0VmFsdWU6IChrZXk6IEtleSwgLi4udW50cmFja2VkOiBVbnRyYWNrZWQpID0+IE91dHB1dFxuKToge1xuICAgIChrZXk6IEtleSwgLi4udW50cmFja2VkOiBVbnRyYWNrZWQpOiBPdXRwdXQ7XG4gICAgLy8gTk9URTogSWYgeW91IHdhbnQgdG8gY2xlYXIgYWxsLCBqdXN0IG1ha2UgYSBuZXcgY2FjaGUhXG4gICAgY2xlYXIoa2V5OiBLZXkpOiB2b2lkO1xuICAgIGNsZWFyQWxsKCk6IHZvaWQ7XG4gICAgZm9yY2VTZXQoa2V5OiBLZXksIHZhbHVlOiBPdXRwdXQpOiB2b2lkO1xuICAgIGdldEFsbEtleXMoKTogS2V5W107XG4gICAgZ2V0KGtleTogS2V5KTogT3V0cHV0IHwgdW5kZWZpbmVkO1xufSB7XG4gICAgbGV0IHN0YXJ0aW5nQ2FsY3VsYXRpbmcgPSBuZXcgU2V0PEtleT4oKTtcbiAgICBsZXQgdmFsdWVzID0gbmV3IE1hcDxLZXksIE91dHB1dD4oKTtcbiAgICBmdW5jdGlvbiBjYWNoZShpbnB1dDogS2V5LCAuLi51bnRyYWNrZWQ6IFVudHJhY2tlZCkge1xuICAgICAgICBsZXQga2V5ID0gaW5wdXQ7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuZ2V0KGtleSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGluZ0NhbGN1bGF0aW5nLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggdGhlIHR5cGVzIGhlcmUsIGJ5IHRocm93aW5nLCBhbmQgdGhlbiBmb3IgdGhlIGNhc2VzXG4gICAgICAgICAgICAvLyAgdGhhdCBkb24ndCB0aHJvdywgbWFrZSBvdXIgb3V0cHV0IHR5cGUgaW5jbHVkZSB1bmRlZmluZWRcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoaW5wdXQsIC4uLnVudHJhY2tlZCk7XG4gICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FjaGUuY2xlYXIgPSAoa2V5OiBLZXkpID0+IHtcbiAgICAgICAgdmFsdWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmRlbGV0ZShrZXkpO1xuICAgIH07XG4gICAgY2FjaGUuZm9yY2VTZXQgPSAoa2V5OiBLZXksIHZhbHVlOiBPdXRwdXQpID0+IHtcbiAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICB9O1xuICAgIGNhY2hlLmdldEFsbEtleXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4udmFsdWVzLmtleXMoKV07XG4gICAgfTtcbiAgICBjYWNoZS5nZXQgPSAoa2V5OiBLZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5nZXQoa2V5KTtcbiAgICB9O1xuICAgIGNhY2hlLmNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICB2YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5jbGVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8qKiBNYWtlcyBhIGNhY2hlIHRoYXQgbGltaXRzIHRoZSBudW1iZXIgb2YgZW50cmllcywgYWxsb3dpbmcgeW91IHRvIHB1dCBhcmJpdHJhcnkgZGF0YSBpbiBpdFxuICogICAgICB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IGxlYWtpbmcgbWVtb3J5XG4gICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVMaW1pdGVkPE91dHB1dCwgS2V5PihcbiAgICAvLyBOT1RFOiBXZSBjYW4ndCBjYWxjdWxhdGUgd2hhdCBsaW1pdCBzaG91bGQgYmUgYmFzZWQgb24gY29tcGFyaW5nIHRoZSBldmFsdWF0aW9uIHRpbWVcbiAgICAvLyAgYW5kIHRoZSB0aW1lIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgdmFsdWVzLiBCZWNhdXNlLCBldmVuIGlmIGZpbmRpbmcgYSBtYXRjaCB0YWtlcyBmYXIgbG9uZ2VyIHRoYW5cbiAgICAvLyAgY2FsY3VsYXRpbmcsIGtlZXBpbmcgYSBjb25zaXN0ZW50IG91dHB1dCBjYW4gc2F2ZSAoYSBjb25zaWRlcmFibGUgYW1vdW50IG9mKSB0aW1lIGluIGRvd25zdHJlYW0gY2FjaGVzLlxuICAgIG1heENvdW50OiBudW1iZXIsXG4gICAgZ2V0VmFsdWU6IChrZXk6IEtleSkgPT4gT3V0cHV0XG4pIHtcbiAgICBsZXQgc3RhcnRpbmdDYWxjdWxhdGluZyA9IG5ldyBTZXQ8S2V5PigpO1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgTWFwPEtleSwgT3V0cHV0PigpO1xuICAgIGZ1bmN0aW9uIGdldChpbnB1dDogS2V5KTogT3V0cHV0IHtcbiAgICAgICAgbGV0IGtleSA9IGlucHV0O1xuICAgICAgICBpZiAodmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmdldChrZXkpIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRpbmdDYWxjdWxhdGluZy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDeWNsaWMgYWNjZXNzIGluIGNhY2hlYCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcblxuICAgICAgICAvLyBDbGVhciB3aGVuIGl0IGdldHMgdG9vIGJpZy4gVGhpcyBpcyBraW5kIG9mIGxpa2UgYSB3b3JzZVxuICAgICAgICAvLyAgbGVhc3QgcmVjZW50bHkgdXNlZCBjYWNoZSwgYmVjYXVzZSBlbnRyaWVzIHRoYXQgYXJlIGFjY2Vzc2VkXG4gICAgICAgIC8vICBvZnRlbiB3aWxsIHF1aWNrbHkgZ2V0IHB1dCBiYWNrIGluLiBUaGlzIGlzIGVmZmVjdGl2ZSBhcyBsb25nXG4gICAgICAgIC8vICBhcyBhY2Nlc3NlcyB0YWtlIHNpbWlsYXIgYW1vdW50cyBvZiB0aW1lLiBJZiB0aGVyZSBpcyBhIHZlcnkgc2xvd1xuICAgICAgICAvLyAgYW5kIHZlcnkgY29tbW9ubHkgYWNjZXNzZWQgdmFsdWUsIGl0IGNvdWxkIGJlIGV2aWN0ZWQgYnkgbWFueSB2ZXJ5XG4gICAgICAgIC8vICBmYXN0IGFjY2Vzc2VzLCB3aGljaCB3b3VsZCBiZSB1bmZvcnR1bmF0ZS5cbiAgICAgICAgaWYgKHZhbHVlcy5zaXplID49IG1heENvdW50KSB7XG4gICAgICAgICAgICB2YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlKGlucHV0KTtcbiAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBnZXRbXCJmb3JjZVNldFwiXSA9IChrZXk6IEtleSwgdmFsdWU6IE91dHB1dCkgPT4ge1xuICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmFkZChrZXkpO1xuICAgIH07XG4gICAgZ2V0W1wiY2xlYXJLZXlcIl0gPSAoa2V5OiBLZXkpID0+IHtcbiAgICAgICAgdmFsdWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmRlbGV0ZShrZXkpO1xuICAgIH07XG4gICAgZ2V0W1wiY2xlYXJcIl0gPSAoKSA9PiB7XG4gICAgICAgIHZhbHVlcy5jbGVhcigpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmNsZWFyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZVdlYWs8T3V0cHV0LCBLZXkgZXh0ZW5kcyBvYmplY3Q+KGdldFZhbHVlOiAoa2V5OiBLZXkpID0+IE91dHB1dCk6IChrZXk6IEtleSkgPT4gT3V0cHV0IHtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmc6IG5ldyBXZWFrU2V0PEtleT4oKSxcbiAgICAgICAgdmFsdWVzOiBuZXcgV2Vha01hcDxLZXksIE91dHB1dD4oKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChpbnB1dCkgPT4ge1xuICAgICAgICBsZXQga2V5ID0gaW5wdXQ7XG4gICAgICAgIGlmIChzdGF0ZS52YWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS52YWx1ZXMuZ2V0KGtleSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGFydGluZ0NhbGN1bGF0aW5nLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEN5Y2xpYyBhY2Nlc3MgaW4gY2FjaGVXZWFrYCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoaW5wdXQpO1xuICAgICAgICBzdGF0ZS52YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbn1cblxuLy8gQSBsaXN0IGNhY2hlLCB3aGljaC4uLiBtYXliZSBmYXN0ZXIgdGhhbiBhIE1hcD9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUxpc3Q8VmFsdWU+KFxuICAgIGdldExlbmd0aDogKCkgPT4gbnVtYmVyLFxuICAgIGdldFZhbHVlOiAoaW5kZXg6IG51bWJlcikgPT4gVmFsdWUsXG4pOiB7IChpbmRleDogbnVtYmVyKTogVmFsdWU7IH0ge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgY2FjaGU6IFtdIGFzIFZhbHVlW10sXG4gICAgICAgIGxlbmd0aDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0KGk6IG51bWJlcikge1xuICAgICAgICBsZXQgY2FjaGUgPSBzdGF0ZS5jYWNoZTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBzdGF0ZS5sZW5ndGggPSBzdGF0ZS5nZXRMZW5ndGgoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IDAgfHwgaSA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5kZXggb3V0IG9mIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGkgaW4gY2FjaGUpKSB7XG4gICAgICAgICAgICBjYWNoZVtpXSA9IGdldFZhbHVlKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVtpXTtcbiAgICB9O1xuICAgIHJldHVybiBnZXQ7XG59XG5cbmZ1bmN0aW9uIGNhY2hlQXJyYXlFcXVhbENsZWFudXAoc3RhdGU6IGFueSkge1xuICAgIHN0YXRlLmNhY2hlID0gW107XG59XG5cbi8qKiBBIGNhY2hlIGhhbGYgd2F5IGJldHdlZW4gY2FjaGluZyBiYXNlZCBvbiA9PT0gYW5kIGNhY2hpbmcgYmFzZWQgb24gaGFzaC4gQ2FjaGVzXG4gKiAgICAgIGJhc2VkIG9uIGFycmF5RXF1YWwsIHdoaWNoIGRvZXMgPT09IG9uIGFsbCB2YWx1ZXMgaW4gYW4gYXJyYXkuIFJlcXVpcmVzIGxvY2FsaXplZFxuICogICAgICBjYWNoaW5nIChhcyB0aGUgY29tcGFyaXNvbnMgZG9uJ3Qgc2NhbGUgd2l0aCBtYW55IGNhbmRpZGF0ZXMsIHVubGlrZSBoYXNoaW5nKSxcbiAqICAgICAgaG93ZXZlciB3b3JrcyB3aXRoIG5vbiB0cml2YWwgdHJhbnNmb3JtYXRpb25zIChleCwgcmVzb2x2aW5nIG1hbnkgcGVyc2lzdGVkIG92ZXJyaWRlc1xuICogICAgICB0byBnZXQgYSB2YWx1ZSksIHVubGlrZSBjYWNoZSgpLlxuICogIEFsc28sIGxpbWl0cyBpdHNlbGYsIG1vcmUgb2YgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdGhhbiBtZW1vcnkgb3B0aW1pemF0aW9uLCBhcyBpdCBzY2FsZXNcbiAqICAgICAgdmVyeSBwb29ybHkgd2l0aCB0aGUgbnVtYmVyIG9mIGNhbmRpZGF0ZXMuXG4gKiAgXG4gKiAgVElNSU5HOiBBYm91dCA2dXMgd2l0aCBsaW1pdCA9IDEwMCwgYXJyYXkgc2l6ZSA9IDI5NCwgYW5kIHRoZSBjYWNoZSBiZWluZyBmdWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVBcnJheUVxdWFsPElucHV0IGV4dGVuZHMgdW5rbm93bltdIHwgdW5kZWZpbmVkLCBPdXRwdXQ+KFxuICAgIG1hcDogKGFycmF5czogSW5wdXQpID0+IE91dHB1dCxcbiAgICBsaW1pdCA9IDEwXG4pOiB7XG4gICAgKGFycmF5OiBJbnB1dCk6IE91dHB1dDtcbiAgICBjbGVhcihhcnJheTogSW5wdXQpOiB2b2lkO1xuICAgIGNsZWFyQWxsKCk6IHZvaWQ7XG59IHtcbiAgICBsZXQgc3RhdGU6IHtcbiAgICAgICAgY2FjaGU6IHtcbiAgICAgICAgICAgIGlucHV0OiBJbnB1dDtcbiAgICAgICAgICAgIG91dHB1dDogT3V0cHV0O1xuICAgICAgICB9W11cbiAgICB9ID0geyBjYWNoZTogW10gfTtcbiAgICBmdW5jdGlvbiBpc01hdGNoKGxoczogSW5wdXQsIHJoczogSW5wdXQpIHtcbiAgICAgICAgaWYgKGxocyA9PT0gcmhzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGhzID09PSB1bmRlZmluZWQgfHwgcmhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJyYXlFcXVhbChsaHMsIHJocykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIChpbnB1dDogSW5wdXQpID0+IHtcbiAgICAgICAgICAgIGxldCBjYWNoZSA9IHN0YXRlLmNhY2hlO1xuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gob2JqLmlucHV0LCBpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5vdXRwdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG91dHB1dCA9IG1hcChpbnB1dCk7XG4gICAgICAgICAgICBjYWNoZS51bnNoaWZ0KHsgaW5wdXQsIG91dHB1dCB9KTtcbiAgICAgICAgICAgIHdoaWxlIChjYWNoZS5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoYXJyYXk6IElucHV0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXRlLmNhY2hlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKHN0YXRlLmNhY2hlW2ldLmlucHV0LCBhcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNhY2hlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYWNoZSA9IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICk7XG59XG5cbi8qKiBDYWNoZXMgd2hlbiBhcmd1bWVudHMgYXJlID09PS4gU2VlIGNhY2hlQXJyYXlFcXVhbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlQXJnc0VxdWFsPEZuYyBleHRlbmRzIEFueUZ1bmN0aW9uPihcbiAgICBmbmM6IEZuYyxcbiAgICBsaW1pdCA9IDEwXG4pOiBGbmMgJiB7IGNsZWFyKC4uLmFyZ3M6IEFyZ3M8Rm5jPik6IHZvaWQgfSB7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVBcnJheUVxdWFsKGZ1bmN0aW9uIGNhY2hlQXJnc0VxdWFsKGFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICByZXR1cm4gZm5jKC4uLmFyZ3MpO1xuICAgIH0sIGxpbWl0KTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZShhcmdzKTtcbiAgICAgICAgfSkgYXMgRm5jLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhciguLi5hcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhcihhcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVKU09OQXJnc0VxdWFsPEZuYyBleHRlbmRzIEFueUZ1bmN0aW9uPihcbiAgICBmbmM6IEZuYyxcbiAgICBsaW1pdCA9IDEwXG4pIHtcbiAgICBsZXQgY2FjaGUgPSBjYWNoZUxpbWl0ZWQobGltaXQsIChhcmdzSlNPTjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBmbmMoLi4uSlNPTi5wYXJzZShhcmdzSlNPTikpO1xuICAgIH0pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlKEpTT04uc3RyaW5naWZ5KGFyZ3MpKTtcbiAgICAgICAgfSkgYXMgRm5jLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhciguLi5hcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhcktleShKU09OLnN0cmluZ2lmeShhcmdzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJBbGwoKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZVNoYWxsb3dDb25maWdBcmdFcXVhbDxGbmMgZXh0ZW5kcyBBbnlGdW5jdGlvbj4oXG4gICAgZm5jOiBGbmMsXG4gICAgbGltaXQgPSAxMFxuKTogRm5jICYge1xuICAgIGNsZWFyKGNvbmZpZ09iajogQXJnczxGbmM+WzBdKTogdm9pZDtcbiAgICBjbGVhckFsbCgpOiB2b2lkO1xufSB7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVBcnJheUVxdWFsKChrdnBzRmxhdDogdW5rbm93bltdKSA9PiB7XG4gICAgICAgIG91dHB1dC5taXNzQ291bnQrKztcbiAgICAgICAgbGV0IGFyZzogYW55O1xuICAgICAgICBpZiAoa3Zwc0ZsYXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBhcmcgPSBrdnBzRmxhdFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBrdnBzOiBbdW5rbm93biwgdW5rbm93bl1bXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrdnBzRmxhdC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgIGt2cHMucHVzaChba3Zwc0ZsYXRbaV0sIGt2cHNGbGF0W2kgKyAxXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnID0gT2JqZWN0LmZyb21FbnRyaWVzKGt2cHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbmMoYXJnKTtcbiAgICB9LCBsaW1pdCk7XG4gICAgZnVuY3Rpb24gZ2V0S1ZQcyhjb25maWdBcmc6IG9iamVjdCkge1xuICAgICAgICBpZiAoIWNhbkhhdmVDaGlsZHJlbihjb25maWdBcmcpIHx8IEFycmF5LmlzQXJyYXkoY29uZmlnQXJnKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtjb25maWdBcmddO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnQXJnKTtcbiAgICAgICAga2V5cy5zb3J0KCk7XG4gICAgICAgIHJldHVybiBrZXlzLmZsYXRNYXAoa2V5ID0+IFtrZXksIGNvbmZpZ0FyZ1trZXldXSk7XG4gICAgfVxuICAgIGxldCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAoKGNvbmZpZ0FyZzogb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBvdXRwdXQuY2FsbENvdW50Kys7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUoZ2V0S1ZQcyhjb25maWdBcmcpKTtcbiAgICAgICAgfSkgYXMgRm5jLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhcihjb25maWdBcmc6IG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyKGdldEtWUHMoY29uZmlnQXJnKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJBbGwoKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxsQ291bnQ6IDAsXG4gICAgICAgICAgICBtaXNzQ291bnQ6IDAsXG4gICAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVybmFsQ2FjaGU8S2V5LCBWYWx1ZT4oKToge1xuICAgIGdldDogKGtleTogS2V5KSA9PiBWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBzZXQ6IChrZXk6IEtleSwgdmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xufSB7XG4gICAgbGV0IHZhbHVlcyA9IG5ldyBNYXA8S2V5LCBWYWx1ZT4oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn0iLCJpbXBvcnQgeyBjYW5IYXZlQ2hpbGRyZW4sIE1heWJlUHJvbWlzZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi9mb3JtYXR0aW5nL2Zvcm1hdFwiO1xuXG5leHBvcnQgY29uc3QgdGltZUluU2Vjb25kID0gMTAwMDtcbmV4cG9ydCBjb25zdCB0aW1lSW5NaW51dGUgPSB0aW1lSW5TZWNvbmQgKiA2MDtcbmV4cG9ydCBjb25zdCB0aW1lSW5Ib3VyID0gdGltZUluTWludXRlICogNjA7XG5leHBvcnQgY29uc3QgdGltZUluRGF5ID0gdGltZUluSG91ciAqIDI0O1xuZXhwb3J0IGNvbnN0IHRpbWVJbldlZWsgPSB0aW1lSW5EYXkgKiA3O1xuZXhwb3J0IGNvbnN0IHRpbWVJblllYXIgPSB0aW1lSW5EYXkgKiAzNjU7XG5cbmV4cG9ydCB0eXBlIFdhdGNoYWJsZTxUPiA9IChjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKSA9PiBNYXliZVByb21pc2U8dm9pZD47XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RXJyb3JTdGFja1RvRXJyb3IoZXJyb3I6IHN0cmluZyk6IEVycm9yIHtcbiAgICBsZXQgZXJyb3JPYmogPSBuZXcgRXJyb3IoKTtcbiAgICBlcnJvck9iai5zdGFjayA9IFN0cmluZyhlcnJvcik7XG4gICAgZXJyb3JPYmoubWVzc2FnZSA9IFN0cmluZyhlcnJvcikuc3BsaXQoXCJcXG5cIilbMF0uc2xpY2UoXCJFcnJvcjogXCIubGVuZ3RoKTtcbiAgICByZXR1cm4gZXJyb3JPYmo7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYTI1Nkhhc2goYnVmZmVyOiBCdWZmZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiByZXF1aXJlKFwiY3J5cHRvXCIpLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KFwiaGV4XCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNoYTI1Nkhhc2hCdWZmZXIoYnVmZmVyOiBCdWZmZXIgfCBzdHJpbmcpOiBCdWZmZXIge1xuICAgIHJldHVybiByZXF1aXJlKFwiY3J5cHRvXCIpLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KCk7XG59XG4vKiogQXN5bmMsIGJ1dCB3b3JrcyBib3RoIGNsaWVudHNpZGUgYW5kIHNlcnZlcnNpZGUuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhMjU2SGFzaFByb21pc2UoYnVmZmVyOiBCdWZmZXIpIHtcbiAgICBpZiAoaXNOb2RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJjcnlwdG9cIikuY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoXCJoZXhcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJ1ZiA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgYnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJ1ZikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNoYTI1NkJ1ZmZlclByb21pc2UoYnVmZmVyOiBCdWZmZXIpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICAgIGlmIChpc05vZGUoKSkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcImNyeXB0b1wiKS5jcmVhdGVIYXNoKFwic2hhMjU2XCIpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBidWYgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIGJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShidWYpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbChhOiB7IFtrZXk6IG51bWJlcl06IHVua25vd247IGxlbmd0aDogbnVtYmVyIH0sIGI6IHsgW2tleTogbnVtYmVyXTogdW5rbm93bjsgbGVuZ3RoOiBudW1iZXIgfSwpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiAoZ2xvYmFsVGhpcyBhcyBhbnkpLldvcmtlckdsb2JhbFNjb3BlID09PSBcInVuZGVmaW5lZFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVHJ1ZSgpIHtcbiAgICByZXR1cm4gaXNOb2RlKCkgYXMgdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlclN1ZmZpeGVkKGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIoY291bnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdChjb3VudDogbnVtYmVyKSB7XG4gICAgbGV0IGFycjogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVGcmVlemU8VD4ob2JqOiBUKTogVCB7XG4gICAgaWYgKCFjYW5IYXZlQ2hpbGRyZW4ob2JqKSkgcmV0dXJuIG9iajtcbiAgICBsZXQgdmlzaXRlZCA9IG5ldyBTZXQ8dW5rbm93bj4oKTtcbiAgICBmdW5jdGlvbiBpdGVyYXRlKG9iajogdW5rbm93bikge1xuICAgICAgICBpZiAoIWNhbkhhdmVDaGlsZHJlbihvYmopKSByZXR1cm47XG4gICAgICAgIGlmICh2aXNpdGVkLmhhcyhvYmopKSByZXR1cm47XG4gICAgICAgIHZpc2l0ZWQuYWRkKG9iaik7XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKSkgcmV0dXJuO1xuICAgICAgICBPYmplY3QuZnJlZXplKG9iaik7XG4gICAgICAgIGxldCBrZXlzID0gZ2V0S2V5cyhvYmopO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgaXRlcmF0ZShvYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXRlcmF0ZShvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnQgdHlwZSBBcnJheUJ1ZmZlclZpZXdUeXBlcyA9IFVpbnQ4QXJyYXkgfCBJbnQ4QXJyYXkgfCBVaW50MTZBcnJheSB8IEludDE2QXJyYXkgfCBVaW50MzJBcnJheSB8IEludDMyQXJyYXkgfCBCaWdVaW50NjRBcnJheSB8IEJpZ0ludDY0QXJyYXkgfCBGbG9hdDY0QXJyYXkgfCBGbG9hdDMyQXJyYXkgfCBVaW50OENsYW1wZWRBcnJheTtcbmV4cG9ydCB0eXBlIEJ1ZmZlclR5cGUgPSBBcnJheUJ1ZmZlciB8IFNoYXJlZEFycmF5QnVmZmVyIHwgQXJyYXlCdWZmZXJWaWV3VHlwZXM7XG5leHBvcnQgZnVuY3Rpb24gaXNCdWZmZXJUeXBlKG9iajogdW5rbm93bik6IG9iaiBpcyBCdWZmZXJUeXBlIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghb2JqKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHJldHVybiB0cnVlO1xuICAgIGlmIChnbG9iYWwuU2hhcmVkQXJyYXlCdWZmZXIgJiYgb2JqIGluc3RhbmNlb2YgZ2xvYmFsLlNoYXJlZEFycmF5QnVmZmVyKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5cyhvYmo6IHVua25vd24pIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2VQb3J0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgbGV0IGtleUFycmF5OiBQcm9wZXJ0eUtleVtdO1xuICAgIGlmIChpc0J1ZmZlclR5cGUob2JqKSkge1xuICAgICAgICBrZXlBcnJheSA9IFtdO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIC8vIE5PVEU6IFdlIGNvbnZlcnQgdGhlIGluZGV4ZXMgdG8gc3RyaW5ncywgYmVjYXVzZSB0aGF0IGlzIHdoYXQgamF2YXNjcmlwdCBkb2VzLFxuICAgICAgICAvLyAgYW5kIGRpZmZlcmluZyBmcm9tIGl0IGNhdXNlcyByZWdyZXNzaW9ucyB0aGF0IHdlIHNpbXBseSBjYW5ub3QgcmVjdGlmeSAoaXQgYnJlYWtzIGhhc2hpbmdcbiAgICAgICAgLy8gIGNvbnNpc3RlbmN5KS5cbiAgICAgICAga2V5QXJyYXkgPSBBcnJheShvYmoubGVuZ3RoKS5maWxsKDApLm1hcCgoeCwgaSkgPT4gU3RyaW5nKGkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlBcnJheSA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuICAgIGZvciAobGV0IHN5bWJvbCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikpIHtcbiAgICAgICAgbGV0IGtleSA9IFN5bWJvbC5rZXlGb3Ioc3ltYm9sKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAga2V5QXJyYXkucHVzaChzeW1ib2wpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlBcnJheTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJpbmdLZXlzPFQgZXh0ZW5kcyB7fT4ob2JqOiBUKTogKChrZXlvZiBUKSAmIHN0cmluZylbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5Qnk8VCwgSz4oYXJyOiBUW10sIGdldEtleTogKHZhbHVlOiBUKSA9PiBLKTogTWFwPEssIFQ+IHtcbiAgICBsZXQgbWFwID0gbmV3IE1hcDxLLCBUPigpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgIG1hcC5zZXQoZ2V0S2V5KGl0ZW0pLCBpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBrZXlCeUFycmF5PFQsIEs+KGFycjogVFtdLCBnZXRLZXk6ICh2YWx1ZTogVCkgPT4gSyk6IE1hcDxLLCBUW10+IHtcbiAgICBsZXQgbWFwID0gbmV3IE1hcDxLLCBUW10+KCk7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcbiAgICAgICAgbGV0IGtleSA9IGdldEtleShpdGVtKTtcbiAgICAgICAgbGV0IGFyciA9IG1hcC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFhcnIpIHtcbiAgICAgICAgICAgIGFyciA9IFtdO1xuICAgICAgICAgICAgbWFwLnNldChrZXksIGFycik7XG4gICAgICAgIH1cbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmVKU09OPFQ+KG9iajogVCk6IFQge1xuICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkgcmV0dXJuIG9iajtcbiAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAvLyBJdCBpcyBwb3NzaWJsZSBmb3IgYW4gb2JqZWN0IHRvIG5vdCBiZSBkZWZpbmVkLCBidXQgcmV0dXJuIHVuZGVmaW5lZCB3aGVuIEpTT04uc3RyaW5naWZpZWQsXG4gICAgLy8gIHZpYSBvdmVycmlkaW5nIHRoZSB0b0pTT04gbWV0aG9kLlxuICAgIGlmIChzdHIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb21pc2VPYmo8VCA9IHZvaWQ+IHtcbiAgICBwdWJsaWMgcHJvbWlzZTogUHJvbWlzZTxUPjtcbiAgICBwdWJsaWMgdmFsdWU6IHsgdmFsdWU/OiBUOyBlcnJvcj86IHN0cmluZyB9IHwgdW5kZWZpbmVkO1xuICAgIC8qKiBSZXNvbHZlIGNhbGxlZCBkb2VzIG5vdCBtZWFuIHRoZSB2YWx1ZSBpcyByZWFkeSwgYXMgaXQgbWF5IGJlIHJlc29sdmVkIHdpdGggYSBwcm9taXNlLiAqL1xuICAgIHB1YmxpYyByZXNvbHZlQ2FsbGVkPzogYm9vbGVhbjtcblxuICAgIHB1YmxpYyByZXNvbHZlID0gKHZhbHVlOiBUIHwgUHJvbWlzZTxUPikgPT4ge1xuICAgICAgICB0aGlzLnJlc29sdmVDYWxsZWQgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgdmFsdWUudGhlbihcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PiB0aGlzLnZhbHVlID0geyB2YWx1ZSB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMudmFsdWUgPSB7IGVycm9yIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHsgdmFsdWUgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhc2VSZXNvbHZlKHZhbHVlKTtcbiAgICB9O1xuICAgIHB1YmxpYyByZWplY3QgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmJhc2VSZWplY3QoZXJyb3IpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGJhc2VSZXNvbHZlITogKHZhbHVlOiBUIHwgUHJvbWlzZTxUPikgPT4gdm9pZDtcbiAgICBwcml2YXRlIGJhc2VSZWplY3QhOiAoZXJyb3I6IGFueSkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLmJhc2VSZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb21pc2UudGhlbihcbiAgICAgICAgICAgIHZhbHVlID0+IHRoaXMudmFsdWUgPSB7IHZhbHVlIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLnZhbHVlID0geyBlcnJvciB9XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZU9iajxUID0gdm9pZD4oKTogUHJvbWlzZU9iajxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqPFQ+KCk7XG59XG5cbi8vIEFsbG93cyBhbiBpbW1lZGlhdGUgY2FsbCwgdGhlbiBkZWxheXMgdGhlIG5leHQgY2FsbCB1bnRpbCB0aGUgZmlyc3QgY2FsbCBmaW5pc2hlcyArIGRlbGF5XG4vLyAgLSBEcm9wcyBhbGwgYnV0IHRoZSBsYXRlc3QgY2FsbCwgYnV0IG9ubHkgcmVzb2x2ZXMgdGhlIHByb21pc2VzIHJldHVybiB0byBhbGxcbi8vICAgICAgY2FsbHMgb25jZSB0aGUgbGF0ZXN0IGNhbGwgZmluaXNoZXMuXG4vLyAgLSBFc2VudGlhbGx5IHRoZSBzYW1lIGFzIHNheWluZyBcImRvbid0IHJ1biB0aGlzIGZ1bmN0aW9uIHRvbyBvZnRlbiwgZG9uJ3QgcnVuIGl0IGluIHBhcmFsbGVsLFxuLy8gICAgICBhbmQgZG9uJ3QgbGV0IGZ1bmN0aW9ucyBydW5zIGJlIHRvbyBjbG9zZSB0b2dldGhlclwiLlxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlRnVuY3Rpb248QXJncyBleHRlbmRzIGFueVtdPihcbiAgICBkZWxheTogbnVtYmVyLFxuICAgIGZuYzogKC4uLmFyZ3M6IEFyZ3MpID0+IE1heWJlUHJvbWlzZTx2b2lkPlxuKTogKC4uLmFyZ3M6IEFyZ3MpID0+IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBuZXh0QWxsb3dlZENhbGwgPSAwO1xuICAgIGxldCBwZW5kaW5nQXJnczogeyBhcmdzOiBBcmdzOyBwcm9taXNlT2JqOiBQcm9taXNlT2JqPHZvaWQ+IH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgZnVuY3Rpb24gZG9DYWxsKGFyZ3M6IEFyZ3MsIHByb21pc2VPYmo6IFByb21pc2VPYmo8dm9pZD4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmbmMoLi4uYXJncyk7XG4gICAgICAgICAgICBwcm9taXNlT2JqLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTk9URTogVGhlIGNhbGxlciBzaG91bGQgaGFuZGxlIHRoZSBwcm9taXNlLiBJZiBub3QsIHRoZXkgcHJvYmFibHlcbiAgICAgICAgICAgICAgICAvLyAgd2FudCB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIHJlamVjdGlvbiwgc28gdGhleSBjYW4gaGFuZGxlIGl0IHByb3Blcmx5LlxuICAgICAgICAgICAgICAgIHZvaWQgcmVzdWx0LmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0QWxsb3dlZENhbGwgPSBEYXRlLm5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bk5leHRDYWxsKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IERhdGUubm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgICAgICBydW5OZXh0Q2FsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgICAgIHByb21pc2VPYmoucmVqZWN0KGUpO1xuICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gRGF0ZS5ub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgcnVuTmV4dENhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBydW5OZXh0Q2FsbCgpIHtcbiAgICAgICAgaWYgKG5leHRBbGxvd2VkQ2FsbCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSByZXR1cm47XG4gICAgICAgIGlmICghcGVuZGluZ0FyZ3MpIHJldHVybjtcbiAgICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAodGltZSA+IG5leHRBbGxvd2VkQ2FsbCkge1xuICAgICAgICAgICAgLy8gU2V0IG5leHRBbGxvd2VkQ2FsbCB0byBpbmZpbml0eSwgdG8gcHJldmVudCBuZXcgY2FsbHMgZnJvbSBydW5uaW5nXG4gICAgICAgICAgICAvLyAgdW50aWwgZG9DYWxsIGZpbmlzaGVzLlxuICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICAgICAgLy8gRGVsYXksIHNvIHdlIGRvbid0IHR1cm4gYSBzZXJpZXMgb2Ygc2VxdWVudGlhbCBjYWxscyB0byBhIHNlcmllcyBvZiBuZXN0ZWQgY2FsbHNcbiAgICAgICAgICAgIC8vICAod2hpY2ggd2lsbCBjYXVzZSBhIHN0YWNrIG92ZXJmbG93KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBwZW5kaW5nQXJncztcbiAgICAgICAgICAgICAgICBwZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbXBvc3NpYmxlLCBwZW5kaW5nQXJncyB3YXMgcmVzZXQgd2hlbiB3ZSBzaG91bGRuJ3QgaGF2ZSBldmVuIGJlZW4gaW4gYSBjYWxsYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9DYWxsKGFyZ3MuYXJncywgYXJncy5wcm9taXNlT2JqKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5OZXh0Q2FsbCwgbmV4dEFsbG93ZWRDYWxsIC0gdGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzOiBBcmdzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmIChwZW5kaW5nQXJncykge1xuICAgICAgICAgICAgcGVuZGluZ0FyZ3MuYXJncyA9IGFyZ3M7XG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZ0FyZ3MucHJvbWlzZU9iai5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHBlbmRpbmdBcmdzID0geyBhcmdzLCBwcm9taXNlT2JqOiBwcm9taXNlT2JqKCkgfTtcbiAgICAgICAgcnVuTmV4dENhbGwoKTtcbiAgICAgICAgcmV0dXJuIHBlbmRpbmdBcmdzLnByb21pc2VPYmoucHJvbWlzZTtcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0SWQoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyBcIl9cIiArIE1hdGgucmFuZG9tKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUZyb21PcmRlck9iamVjdDxUPihvYmo6IHsgW29yZGVyOiBudW1iZXJdOiBUIH0pOiBUW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmouc2xpY2UoKTtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5zb3J0KChhLCBiKSA9PiArYVswXSAtICtiWzBdKS5tYXAoeCA9PiB4WzFdKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQgJiYgeCAhPT0gbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCB0eXBlIE9iamVjdFZhbHVlczxUPiA9IFRba2V5b2YgVF07XG5leHBvcnQgZnVuY3Rpb24gZW50cmllczxPYmogZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4ob2JqOiBPYmopOiBba2V5b2YgT2JqLCBPYmplY3RWYWx1ZXM8T2JqPl1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaikgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5czxPYmogZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4ob2JqOiBPYmopOiAoa2V5b2YgT2JqKVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKSBhcyBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0PFQ+KGFycjogVFtdLCBzb3J0S2V5OiAob2JqOiBUKSA9PiB1bmtub3duKSB7XG4gICAgaWYgKGFyci5sZW5ndGggPD0gMSkgcmV0dXJuIGFycjtcbiAgICBhcnIuc29ydCgoYSwgYikgPT4gY29tcGFyZShzb3J0S2V5KGEpLCBzb3J0S2V5KGIpKSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3REb21haW4oaG9zdG5hbWU6IHN0cmluZykge1xuICAgIGlmIChob3N0bmFtZS5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICAgICAgaG9zdG5hbWUgPSBob3N0bmFtZS5zbGljZShcImh0dHBzOi8vXCIubGVuZ3RoKTtcbiAgICB9XG4gICAgaG9zdG5hbWUgPSBob3N0bmFtZS5zcGxpdChcIi9cIilbMF07XG4gICAgbGV0IHBhcnRzID0gaG9zdG5hbWUuc3BsaXQoXCIuXCIpO1xuICAgIGhvc3RuYW1lID0gcGFydHMuc2xpY2UoLTIpLmpvaW4oXCIuXCIpO1xuICAgIGhvc3RuYW1lID0gaG9zdG5hbWUuc3BsaXQoXCI6XCIpWzBdO1xuICAgIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXVlTGltaXRlZDxUPiB7XG4gICAgcHJpdmF0ZSBpdGVtczogVFtdID0gW107XG4gICAgcHJpdmF0ZSBuZXh0SW5kZXggPSAwO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWF4Q291bnQ6IG51bWJlcikgeyB9XG5cbiAgICBwdWJsaWMgcHVzaChpdGVtOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXNbdGhpcy5uZXh0SW5kZXhdID0gaXRlbTtcbiAgICAgICAgdGhpcy5uZXh0SW5kZXggPSAodGhpcy5uZXh0SW5kZXggKyAxKSAlIHRoaXMubWF4Q291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbFVub3JkZXJlZCgpOiBUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMubmV4dEluZGV4ID0gMDtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRPbGRlc3QoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5uZXh0SW5kZXggLSAxO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IHRoaXMubWF4Q291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoQmFzaWM8VCwgVj4oYXJyYXk6IFRbXSwgZ2V0VmFsOiAodmFsOiBUKSA9PiBWLCBzZWFyY2hWYWx1ZTogVik6IG51bWJlciB7XG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaEluZGV4KGFycmF5Lmxlbmd0aCwgaSA9PiBjb21wYXJlKGdldFZhbChhcnJheVtpXSksIHNlYXJjaFZhbHVlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoQmFzaWMyPFQsIFY+KGFycmF5OiBUW10sIGdldFZhbDogKHZhbDogVCkgPT4gViwgc2VhcmNoVmFsdWU6IFQpOiBudW1iZXIge1xuICAgIHJldHVybiBiaW5hcnlTZWFyY2hJbmRleChhcnJheS5sZW5ndGgsIGkgPT4gY29tcGFyZShnZXRWYWwoYXJyYXlbaV0pLCBnZXRWYWwoc2VhcmNoVmFsdWUpKSk7XG59XG5cbi8qKlxuICogIFNlYXJjaGVzIGluZGV4ZXMsIGFsbG93aW5nIHlvdSB0byBxdWVyeSBzdHJ1Y3R1cmVzIHRoYXQgYXJlbid0IGFycmF5cy4gVG8gc2VhcmNoIGFuIGFycmF5LCB1c2U6XG4gKiAgICAgIGBiaW5hcnlTZWFyY2hJbmRleChhcnJheS5sZW5ndGgsIGkgPT4gY29tcGFyZShhcnJheVtpXSwgc2VhcmNoVmFsdWUpKWBcbiAqIFxuICogICAgICBOT1RFOiBJZiB0aGVyZSBhcmUgZHVwbGljYXRlcywgcmV0dXJucyB0aGUgZmlyc3QgbWF0Y2guXG4gKiBcbiAqICAgICAgTk9URTogSWYgdGhlIHZhbHVlIGNhbid0IGJlIGZvdW5kLCByZXR1cm5zIHRoZSBiaXR3aXNlIG5lZ2F0aW9uIG9mIHRoZSBpbmRleCB3aGVyZSBpdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBcbiAqICAgICAgTk9URTogV2l0aCBgaWYgKGluZGV4IDwgMCkgaW5kZXggPSB+aW5kZXg7YCB5b3Ugd2lsbCBnZXQgYW4gaW5kZXggb2YgdGhlIHZhbHVlID49IHRoZSB0YXJnZXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2hJbmRleChsaXN0Q291bnQ6IG51bWJlciwgY29tcGFyZTogKGxoc0luZGV4OiBudW1iZXIpID0+IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGxpc3RDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gfjA7XG4gICAgfVxuICAgIGxldCBtaW4gPSAwO1xuICAgIGxldCBtYXggPSBsaXN0Q291bnQgLSAxO1xuICAgIHdoaWxlIChtaW4gPCBtYXgpIHtcbiAgICAgICAgbGV0IGZpbmdlckluZGV4ID0gTWF0aC5mbG9vcigobWF4ICsgbWluKSAvIDIpO1xuICAgICAgICBsZXQgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShmaW5nZXJJbmRleCk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgPCAwKSB7XG4gICAgICAgICAgICBtaW4gPSBmaW5nZXJJbmRleCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXggPSBmaW5nZXJJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgY29tcGFyaXNvbiA9IGNvbXBhcmUobWluKTtcbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkgcmV0dXJuIG1pbjtcbiAgICBpZiAoY29tcGFyaXNvbiA+IDApIHJldHVybiB+bWluO1xuICAgIHJldHVybiB+KG1pbiArIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZShsaHM6IHVua25vd24sIHJoczogdW5rbm93bik6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBsaHMgIT09IHR5cGVvZiByaHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmUodHlwZW9mIGxocywgdHlwZW9mIHJocyk7XG4gICAgfVxuICAgIGlmIChsaHMgPT09IHJocykgcmV0dXJuIDA7XG4gICAgaWYgKGxocyA9PT0gbnVsbCAmJiByaHMgIT09IG51bGwpIHJldHVybiAtMTtcbiAgICBpZiAobGhzICE9PSBudWxsICYmIHJocyA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKHR5cGVvZiBsaHMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihsaHMpKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHJocykpIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihyaHMpKSByZXR1cm4gKzE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxocyBhcyBhbnkgPCAocmhzIGFzIGFueSkpIHJldHVybiAtMTtcbiAgICByZXR1cm4gMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXJyYXkobGhzOiB1bmtub3duW10sIHJoczogdW5rbm93bltdKTogbnVtYmVyIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKGxocy5sZW5ndGgsIHJocy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBhcmlzb24gPSBjb21wYXJlKGxoc1tpXSwgcmhzW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gIT09IDApIHJldHVybiBjb21wYXJpc29uO1xuICAgIH1cbiAgICByZXR1cm4gbGhzLmxlbmd0aCAtIHJocy5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRJbnRvU29ydGVkTGlzdDxUPihsaXN0OiBUW10sIG1hcDogKHZhbDogVCkgPT4gc3RyaW5nIHwgbnVtYmVyLCBlbGVtZW50OiBUKSB7XG4gICAgbGV0IHNlYXJjaFZhbHVlID0gbWFwKGVsZW1lbnQpO1xuICAgIGxldCBpbmRleCA9IGJpbmFyeVNlYXJjaEluZGV4KGxpc3QubGVuZ3RoLCBpID0+IGNvbXBhcmUobWFwKGxpc3RbaV0pLCBzZWFyY2hWYWx1ZSkpO1xuICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gfmluZGV4O1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAwLCBlbGVtZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tU29ydGVkTGlzdDxUPihsaXN0OiBUW10sIG1hcDogKHZhbDogVCkgPT4gc3RyaW5nIHwgbnVtYmVyLCBzZWFyY2hWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgbGV0IGluZGV4ID0gYmluYXJ5U2VhcmNoSW5kZXgobGlzdC5sZW5ndGgsIGkgPT4gY29tcGFyZShtYXAobGlzdFtpXSksIHNlYXJjaFZhbHVlKSk7XG4gICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0VG9FcnJvcjxUPih0aW1lOiBudW1iZXIsIHA6IFByb21pc2U8VD4sIGVycjogKCkgPT4gRXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVycigpKSwgdGltZSk7XG4gICAgICAgIHAudGhlbihyZXNvbHZlLCByZWplY3QpLmZpbmFsbHkoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpKTtcbiAgICB9KTtcbn1cblxuLy8gTk9URTogQm90aCBlcnJvcnMgYW5kIHRpbWVvdXRzIGFyZSBjb252ZXJ0ZWQgdG8gdW5kZWZpbmVkXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dFRvVW5kZWZpbmVkPFQ+KHRpbWU6IG51bWJlciwgcDogUHJvbWlzZTxUPikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGB0aW1lb3V0VG9VbmRlZmluZWQgdGltZWQgb3V0IGFmdGVyICR7dGltZX1gKTtcbiAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICAgIHAudGhlbihyZXNvbHZlLFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHRpbWVvdXRUb1VuZGVmaW5lZCBlcnJvcjogJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApLmZpbmFsbHkoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0VG9VbmRlZmluZWRTaWxlbnQ8VD4odGltZTogbnVtYmVyLCBwOiBQcm9taXNlPFQ+KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQgfCB1bmRlZmluZWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICAgIHAudGhlbihcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApLmZpbmFsbHkoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yVG9XYXJuaW5nPFQ+KHByb21pc2U6IFByb21pc2U8VD4pOiB2b2lkIHtcbiAgICAvLyBSZXR1cm4gdGhlIHByb21pc2UsIHNvIHRoZXkgY2FuIHdhaXQgaWYgdGhleSB3YW50LCBidXQgaGF2ZSB0aGUgcmV0dXJuIHR5cGUgYmUgdm9pZCxcbiAgICAvLyAgc28gdGhhdCB0aGV5IGRvbid0IGhhdmUgdG8gYXdhaXQgaXQuXG4gICAgcmV0dXJuIHByb21pc2UuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihlLnN0YWNrKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgfSkgYXMgYW55O1xufVxuIiwiZXhwb3J0IHR5cGUgTWF5YmVQcm9taXNlPFQ+ID0gVCB8IFByb21pc2U8VD47XG5cbmV4cG9ydCB0eXBlIEFyZ3M8VD4gPSBUIGV4dGVuZHMgKC4uLmFyZ3M6IGluZmVyIFYpID0+IGFueSA/IFYgOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgQW55RnVuY3Rpb24gPSAoLi4uYXJnczogYW55KSA9PiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5IYXZlQ2hpbGRyZW4odmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyB7IFtrZXkgaW4gUHJvcGVydHlLZXldOiB1bmtub3duIH0ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUobWlsbGlzZWNvbmRzOiBudW1iZXIgfCB1bmRlZmluZWQsIG1heEFic29sdXRlVmFsdWU/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgbWlsbGlzZWNvbmRzICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCJcIjtcbiAgICBpZiAobWlsbGlzZWNvbmRzID09PSAwKSByZXR1cm4gXCIwbXNcIjtcbiAgICBpZiAobWlsbGlzZWNvbmRzIDwgMCkge1xuICAgICAgICByZXR1cm4gXCItXCIgKyBmb3JtYXRUaW1lKC1taWxsaXNlY29uZHMsIG1heEFic29sdXRlVmFsdWUpO1xuICAgIH1cbiAgICBsZXQgc2NhbGUgPSBtaWxsaXNlY29uZHM7XG4gICAgaWYgKG1heEFic29sdXRlVmFsdWUpIHtcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heChzY2FsZSwgbWF4QWJzb2x1dGVWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChzY2FsZSA8IDEgLyAxMDAwKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgKiAxMDAwICogMTAwMCwgMykgKyBcIm5zXCI7XG4gICAgfSBlbHNlIGlmIChzY2FsZSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcyAqIDEwMDAsIDMpICsgXCJ1c1wiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMsIDMpICsgXCJtc1wiO1xuICAgICAgICAvLyBVc2Ugc2Vjb25kcyB1bnRpbCB3ZSBoYXZlIDEwIG1pbnV0ZXMsIGFzIGRlY2ltYWwgbWludXRlcyBhcmUgY29uZnVzaW5nXG4gICAgfSBlbHNlIGlmIChzY2FsZSA8IDEwMDAgKiA2MCAqIDEwKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgLyAxMDAwLCAzKSArIFwic1wiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwICogNjAgKiA2MCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzIC8gMTAwMCAvIDYwLCAzKSArIFwibVwiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwICogNjAgKiA2MCAqIDI0KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgLyAxMDAwIC8gNjAgLyA2MCwgMykgKyBcImhcIjtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChtaWxsaXNlY29uZHMgPCAxMDAwICogNjAgKiA2MCAqIDI0ICogMTApIHtcbiAgICAgICAgLy8gICAgIGxldCByZW1haW5pbmcgPSBNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgICAgICAvLyAgICAgbGV0IHNlY29uZHMgPSByZW1haW5pbmcgJSA2MDtcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAtPSBzZWNvbmRzO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC89IDYwO1xuICAgICAgICAvLyAgICAgbGV0IG1pbnV0ZXMgPSByZW1haW5pbmcgJSA2MDtcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAtPSBtaW51dGVzO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC89IDYwO1xuICAgICAgICAvLyAgICAgbGV0IGhvdXJzID0gcmVtYWluaW5nO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC09IGhvdXJzO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC89IDI0O1xuICAgICAgICAvLyAgICAgbGV0IGRheXMgPSByZW1haW5pbmc7XG4gICAgICAgIC8vICAgICBsZXQgdGltZSA9IGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgICAgICAvLyAgICAgaWYgKGRheXMgPiAwKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGRheXMgPT09IDEpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGltZSA9IGAxIGRheSAke3RpbWV9YDtcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aW1lID0gYCR7ZGF5c30gZGF5cyAke3RpbWV9YDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gdGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF5cyA9IE1hdGgucm91bmQobWlsbGlzZWNvbmRzIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCk7XG4gICAgICAgIHJldHVybiBgJHtkYXlzfSBkYXlzYDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXREZWNpbWFscyhtYXhBYnNvbHV0ZVZhbHVlOiBudW1iZXIsIHRhcmdldERpZ2l0czogbnVtYmVyKSB7XG4gICAgbGV0IGludERpZ2l0cyA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChtYXhBYnNvbHV0ZVZhbHVlKSArIDEpO1xuICAgIGlmIChpbnREaWdpdHMgPCAwKSBpbnREaWdpdHMgPSAxO1xuICAgIGxldCBkZWNpbWFsRGlnaXRzID0gdGFyZ2V0RGlnaXRzIC0gaW50RGlnaXRzO1xuICAgIC8vIEhhcHBlbnMgaWYgdGhlIG51bWJlciBpcyBzbyBjbG9zZSB0byBoYXZpbmcgdG9vIG1hbnkgZGlnaXRzIHRoYXQgTWF0aC5sb2cxMCByb3VuZHMgaXQgb3Zlci5cbiAgICBpZiAoZGVjaW1hbERpZ2l0cyA8IDApIHtcbiAgICAgICAgZGVjaW1hbERpZ2l0cyA9IDA7XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsRGlnaXRzO1xufVxuXG4vKiogQWRkcyBkZWNpbWFsIGRpZ2l0cyB0byByZWFjaCBkaWdpdHMuIElmIHRoZSBudW1iZXIgaXMgc2ltcGx5IHRvbyBsYXJnZSwgaXQgd29uJ3QgcmVtb3ZlXG4gKiAgICAgIGRpZ2l0cywgdGhlcmUgd2lsbCBpbnN0ZWFkIGp1c3QgYmUgbm8gZGVjaW1hbCBwb2ludC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1heERlY2ltYWxzKG51bTogbnVtYmVyLCB0YXJnZXREaWdpdHM6IG51bWJlciwgbWF4QWJzb2x1dGVWYWx1ZT86IG51bWJlciwgZXhhY3REZWNpbWFscz86IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT09IFwibnVtYmVyXCIpIHJldHVybiBcIjBcIjtcbiAgICAvLyB0b0ZpeGVkIGhhcyBhIG1heCBvZiAxMDAgZGlnaXRzXG4gICAgaWYgKHRhcmdldERpZ2l0cyA+IDEwMCkgdGFyZ2V0RGlnaXRzID0gMTAwO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG51bSkpIHJldHVybiBudW0udG9GaXhlZCh0YXJnZXREaWdpdHMpO1xuXG4gICAgaWYgKG51bSA8IDApIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscygtbnVtLCB0YXJnZXREaWdpdHMsIG1heEFic29sdXRlVmFsdWUsIGV4YWN0RGVjaW1hbHMpO1xuXG4gICAgLy8gVElNSU5HOlxuICAgIC8vICB+NTBucyAgIHRvU3RyaW5nXG4gICAgLy8gIH40MDBucyAgdG9Mb2NhbGVTdHJpbmdcbiAgICAvLyAgfjUwMG5zICB0b0xvY2FsZVN0cmluZyhcImVuLXVzXCIpXG4gICAgLy8gIH4yMHVzICAgdG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KVxuICAgIC8vIFNvLCB3ZSBhcmUgYXZvaWRpbmcgdXNpbmcgdG9Mb2NhbGVTdHJpbmcsIGZvciBub3cuXG5cbiAgICBtYXhBYnNvbHV0ZVZhbHVlID0gbWF4QWJzb2x1dGVWYWx1ZSA/PyBNYXRoLmFicyhudW0pO1xuXG4gICAgbGV0IHRhcmdldERlY2ltYWxzID0gZXhhY3REZWNpbWFscyA/PyBnZXRUYXJnZXREZWNpbWFscyhtYXhBYnNvbHV0ZVZhbHVlLCB0YXJnZXREaWdpdHMpO1xuICAgIGxldCB0ZXh0ID0gbnVtLnRvRml4ZWQodGFyZ2V0RGVjaW1hbHMpO1xuICAgIGxldCBwYXJ0cyA9IHRleHQuc3BsaXQoXCIuXCIpO1xuICAgIGxldCBpbnRlZ2VyID0gcGFydHNbMF07XG4gICAgbGV0IGRlY2ltYWxzID0gcGFydHNbMV0gPz8gXCJcIjtcblxuICAgIGlmIChleGFjdERlY2ltYWxzKSB7XG4gICAgICAgIHdoaWxlIChkZWNpbWFscy5sZW5ndGggPCBleGFjdERlY2ltYWxzKSB7XG4gICAgICAgICAgICBkZWNpbWFscyArPSBcIjBcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChkZWNpbWFsc1tkZWNpbWFscy5sZW5ndGggLSAxXSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgIGRlY2ltYWxzID0gZGVjaW1hbHMuc2xpY2UoMCwgLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG5cbiAgICAvLyBOT1RFOiBPTkxZIGFkZCBjb21tYSBncm91cHMgaWYgaXQgaXMgPiA0IGRpZ2l0cy4gQXMgNDIzNEsgaXMgZWFzaWx5IHJlYWQsIGFuZCBjb21tYXNcbiAgICAvLyAgb25seSByZWFsbHkgbWF0dGVyIGZvciBudW1iZXJzIHN1Y2ggYXMgNDIzNDUyM0ssIHdoaWNoIGlzIGhhcmQgdG8gcmVhZC5cbiAgICBpZiAoaW50ZWdlci5sZW5ndGggPiA0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbnRlZ2VyLmxlbmd0aDsgaSA+IDA7IGkgLT0gMykge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gaSAtIDM7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XG4gICAgICAgICAgICBsZXQgc3RyID0gaW50ZWdlci5zbGljZShzdGFydCwgaSk7XG4gICAgICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gXCIsXCIgKyBvdXRwdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQgPSBzdHIgKyBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBpbnRlZ2VyO1xuICAgIH1cblxuICAgIGlmIChkZWNpbWFscykge1xuICAgICAgICBvdXRwdXQgKz0gXCIuXCIgKyBkZWNpbWFscztcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKiogQWN0dWFsbHkgZm9ybWF0cyBhbnkgbnVtYmVyLCBpbmNsdWRpbmcgZGVjaW1hbHMsIGJ5IHVzaW5nIEssIE0gYW5kIEIgc3VmZml4ZXMgdG8gZ2V0IHNtYWxsZXIgdmFsdWVzXG4gKiAgICAgIFRPRE86IFN1cHBvcnQgdUssIHVNIGFuZCB1QiBzdWZmaXhlcyBmb3IgdmVyeSBzbWFsbCBudW1iZXJzP1xuICogICAgICA8PSA2IGNoYXJhY3RlcnMgKDw9IDUgaWYgcG9zaXRpdmUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIoY291bnQ6IG51bWJlciB8IHVuZGVmaW5lZCwgbWF4QWJzb2x1dGVWYWx1ZT86IG51bWJlciwgbm9EZWNpbWFsPzogYm9vbGVhbiwgc3BlY2lhbEN1cnJlbmN5PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBjb3VudCAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiMFwiO1xuICAgIGlmIChjb3VudCA8IDApIHtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgZm9ybWF0TnVtYmVyKC1jb3VudCwgbWF4QWJzb2x1dGVWYWx1ZSwgbm9EZWNpbWFsLCBzcGVjaWFsQ3VycmVuY3kpO1xuICAgIH1cblxuICAgIG1heEFic29sdXRlVmFsdWUgPSBtYXhBYnNvbHV0ZVZhbHVlID8/IE1hdGguYWJzKGNvdW50KTtcblxuICAgIGxldCBtYXhEZWNpbWFscyA9IDM7XG5cbiAgICAvLyBOT1RFOiBXZSBkb24ndCBzd2l0Y2ggdW5pdHMgYXMgc29vbiBhcyB3ZSBwb3NzaWJsZSBjYW4sIGJlY2F1c2UuLi5cbiAgICAvLyAgMy41OTQgdnMgMy41ODQgaXMgaGFyZGVyIHRvIHF1aWNrbHkgZGlzdGluZ3Vpc2ggY29tcGFyZWQgdG8gMzU5NCBhbmQgMzU4NCxcbiAgICAvLyAgdGhlIGRlY2ltYWwgc2ltcGx5IG1ha2VzIGl0IGhhcmRlciB0byByZWFkLCBhbmQgbGFyZ2VyLlxuICAgIC8vIE5PVEU6IFRoaXMgbnVtYmVyIHNob3VsZCBwcmV2ZW50IHVzIGZyb20gZXZlciB1c2luZyA1IGRpZ2l0cywgc28gdGhhdCB3ZSBuZXZlciBuZWVkIGNvbW1hc1xuICAgIC8vICBGb3IgZXhhbXBsZSwgaWYgdGhlIGZhY3RvciBpcyAxMCB0aGVuLCA5OTk5LjUgaXMga2VwdCB3aXRoIGEgZGl2aXNvciBvZiAxLCBhbmQgdGhlbiByb3VuZHMgdXAgdG9cbiAgICAvLyAgXCIxMCwwMDBcIi4gU28gd2Ugd2FudCBhbnkgdmFsdWUgd2hpY2ggcm91bmRzIHVwIGF0IDUgZGlnaXRzIHRvIGJlIHB1dCBpbiB0aGUgbmV4dCBncm91cCAoYW5kIGhhdmluZ1xuICAgIC8vICBleHRyYSB2YWx1ZXMgcHV0IGluIHRoZSBuZXh0IGdyb3VwIGlzIGZpbmUsIGFzIHdlIHdvbid0IHNob3cgdGhlIGRlY2ltYWwgdmFsdWUgYW55d2F5cywgc28gaXQgb25seVxuICAgIC8vICBtZWFucyA5OTk5IHdyYXBzIGFyb3VuZCB0byAxMEsgYSBiaXQgZmFzdGVyKS5cbiAgICBjb25zdCBleHRyYUZhY3RvciA9IDkuOTk5NDk5OTk7XG4gICAgbGV0IGRpdmlzb3IgPSAxO1xuICAgIGxldCBzdWZmaXggPSBcIlwiO1xuICAgIGxldCBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID0gZmFsc2U7XG4gICAgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMTI7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMTE7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSAxMDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gOTtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSA4O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gNztcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gNjtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSA1O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBpZiAoc3BlY2lhbEN1cnJlbmN5KSB7XG4gICAgICAgICAgICBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJLXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDAwO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiTVwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDA7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiQlwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDAgKiAxMDAwO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJUXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiUVwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDA7XG4gICAgfVxuICAgIGNvdW50IC89IGRpdmlzb3I7XG4gICAgbWF4QWJzb2x1dGVWYWx1ZSAvPSBkaXZpc29yO1xuICAgIGlmIChub0RlY2ltYWwpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhjb3VudCwgbWF4RGVjaW1hbHMsIG1heEFic29sdXRlVmFsdWUsIGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPyAyIDogdW5kZWZpbmVkKSArIHN1ZmZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEJpbmFyeU51bWJlcihjb3VudDogbnVtYmVyIHwgdW5kZWZpbmVkLCBtYXhBYnNvbHV0ZVZhbHVlPzogbnVtYmVyLCBub0RlY2ltYWw/OiBib29sZWFuLCBzcGVjaWFsQ3VycmVuY3k/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIGNvdW50ICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCIwXCI7XG4gICAgaWYgKGNvdW50IDwgMCkge1xuICAgICAgICByZXR1cm4gXCItXCIgKyBmb3JtYXROdW1iZXIoLWNvdW50LCBtYXhBYnNvbHV0ZVZhbHVlLCBub0RlY2ltYWwsIHNwZWNpYWxDdXJyZW5jeSk7XG4gICAgfVxuXG4gICAgbWF4QWJzb2x1dGVWYWx1ZSA9IG1heEFic29sdXRlVmFsdWUgPz8gTWF0aC5hYnMoY291bnQpO1xuXG4gICAgLy8gTk9URTogV2UgZG9uJ3Qgc3dpdGNoIHVuaXRzIGFzIHNvb24gYXMgd2UgcG9zc2libGUgY2FuLCBiZWNhdXNlLi4uXG4gICAgLy8gIDMuNTk0IHZzIDMuNTg0IGlzIGhhcmRlciB0byBxdWlja2x5IGRpc3Rpbmd1aXNoIGNvbXBhcmVkIHRvIDM1OTQgYW5kIDM1ODQsXG4gICAgLy8gIHRoZSBkZWNpbWFsIHNpbXBseSBtYWtlcyBpdCBoYXJkZXIgdG8gcmVhZCwgYW5kIGxhcmdlci5cbiAgICAvLyBOT1RFOiBUaGlzIG51bWJlciBzaG91bGQgcHJldmVudCB1cyBmcm9tIGV2ZXIgdXNpbmcgNSBkaWdpdHMsIHNvIHRoYXQgd2UgbmV2ZXIgbmVlZCBjb21tYXNcbiAgICAvLyAgRm9yIGV4YW1wbGUsIGlmIHRoZSBmYWN0b3IgaXMgMTAgdGhlbiwgOTk5OS41IGlzIGtlcHQgd2l0aCBhIGRpdmlzb3Igb2YgMSwgYW5kIHRoZW4gcm91bmRzIHVwIHRvXG4gICAgLy8gIFwiMTAsMDAwXCIuIFNvIHdlIHdhbnQgYW55IHZhbHVlIHdoaWNoIHJvdW5kcyB1cCBhdCA1IGRpZ2l0cyB0byBiZSBwdXQgaW4gdGhlIG5leHQgZ3JvdXAgKGFuZCBoYXZpbmdcbiAgICAvLyAgZXh0cmEgdmFsdWVzIHB1dCBpbiB0aGUgbmV4dCBncm91cCBpcyBmaW5lLCBhcyB3ZSB3b24ndCBzaG93IHRoZSBkZWNpbWFsIHZhbHVlIGFueXdheXMsIHNvIGl0IG9ubHlcbiAgICAvLyAgbWVhbnMgOTk5OSB3cmFwcyBhcm91bmQgdG8gMTBLIGEgYml0IGZhc3RlcikuXG4gICAgY29uc3QgZXh0cmFGYWN0b3IgPSA5Ljk5OTQ5OTk5O1xuICAgIGxldCBkaXZpc29yID0gMTtcbiAgICBsZXQgc3VmZml4ID0gXCJcIjtcbiAgICBsZXQgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA9IGZhbHNlO1xuICAgIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAyNCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIGlmIChzcGVjaWFsQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAyNCAqIDEwMjQgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIktcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMjQ7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAyNCAqIDEwMjQgKiAxMDI0ICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJNXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDI0ICogMTAyNDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWZmaXggPSBcIkdcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMjQgKiAxMDI0ICogMTAyNDtcbiAgICB9XG4gICAgY291bnQgLz0gZGl2aXNvcjtcbiAgICBtYXhBYnNvbHV0ZVZhbHVlIC89IGRpdmlzb3I7XG5cbiAgICBsZXQgbWF4RGVjaW1hbHMgPSBub0RlY2ltYWwgPyAwIDogMztcblxuICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhjb3VudCwgbWF4RGVjaW1hbHMsIG1heEFic29sdXRlVmFsdWUsIGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPyAyIDogdW5kZWZpbmVkKSArIHN1ZmZpeDtcbn1cblxuLyoqIFlZWVkvTU0vREQgSEg6TU06U1MgUE0vQU0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlVGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcbiAgICBsZXQgc3RyVGltZSA9IHAoaG91cnMpICsgXCI6XCIgKyBwKG1pbnV0ZXMpICsgXCI6XCIgKyBwKHNlY29uZHMpICsgXCIgXCIgKyBhbXBtO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIHAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHAoZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWVEZXRhaWxlZCh0aW1lOiBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGxldCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGxldCBtaWxsaXNlY29uZHNTdHJpbmcgPSBtaWxsaXNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgzLCBcIjBcIik7XG5cbiAgICBsZXQgdGltZVN0cmluZyA9IHRpbWUudG9TdHJpbmcoKTtcbiAgICBsZXQgZGVjaW1hbEluZGV4ID0gdGltZVN0cmluZy5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoZGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBsZXQgZnJhY3Rpb25hbFBhcnQgPSB0aW1lU3RyaW5nLnN1YnN0cmluZyhkZWNpbWFsSW5kZXggKyAxKTtcbiAgICAgICAgbWlsbGlzZWNvbmRzU3RyaW5nICs9IGZyYWN0aW9uYWxQYXJ0O1xuICAgIH1cblxuICAgIGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcbiAgICBsZXQgc3RyVGltZSA9IHAoaG91cnMpICsgXCI6XCIgKyBwKG1pbnV0ZXMpICsgXCI6XCIgKyBwKHNlY29uZHMpICsgXCIuXCIgKyBtaWxsaXNlY29uZHNTdHJpbmcgKyBcIiBcIiArIGFtcG07XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgcChkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiL1wiICsgcChkYXRlLmdldERhdGUoKSkgKyBcIiBcIiArIHN0clRpbWU7XG59XG5cblxuLy8gTG9va3VwIHRhYmxlIGZvciBjb21tb24gdGltZXpvbmUgYWJicmV2aWF0aW9ucyBieSBVVEMgb2Zmc2V0IChpbiBtaW51dGVzKVxuY29uc3QgdGltZXpvbmVBYmJyZXZpYXRpb25zOiB7IFtvZmZzZXRNaW51dGVzOiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICAvLyBVVEMgYW5kIEdNVFxuICAgIFwiMFwiOiBcIlVUQ1wiLFxuXG4gICAgLy8gVVMvQ2FuYWRhIHRpbWV6b25lc1xuICAgIFwiMzAwXCI6IFwiRVNUXCIsICAgICAvLyBVVEMtNSAoRWFzdGVybiBTdGFuZGFyZCBUaW1lKVxuICAgIFwiMjQwXCI6IFwiRURUXCIsICAgICAvLyBVVEMtNCAoRWFzdGVybiBEYXlsaWdodCBUaW1lKVxuICAgIFwiMzYwXCI6IFwiQ1NUXCIsICAgICAvLyBVVEMtNiAoQ2VudHJhbCBTdGFuZGFyZCBUaW1lKSBcbiAgICBcIjQyMFwiOiBcIk1TVFwiLCAgICAgLy8gVVRDLTcgKE1vdW50YWluIFN0YW5kYXJkIFRpbWUpXG4gICAgXCI0ODBcIjogXCJQU1RcIiwgICAgIC8vIFVUQy04IChQYWNpZmljIFN0YW5kYXJkIFRpbWUpXG5cbiAgICAvLyBFdXJvcGVhbiB0aW1lem9uZXNcbiAgICBcIi02MFwiOiBcIkNFVFwiLCAgICAgLy8gVVRDKzEgKENlbnRyYWwgRXVyb3BlYW4gVGltZSlcbiAgICBcIi0xMjBcIjogXCJDRVNUXCIsICAgLy8gVVRDKzIgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG5cbiAgICAvLyBPdGhlciBjb21tb24gdGltZXpvbmVzXG4gICAgXCItNDgwXCI6IFwiQ1NUXCIsICAgIC8vIFVUQys4IChDaGluYSBTdGFuZGFyZCBUaW1lKVxuICAgIFwiLTU0MFwiOiBcIkpTVFwiLCAgICAvLyBVVEMrOSAoSmFwYW4gU3RhbmRhcmQgVGltZSlcbiAgICBcIi0zMzBcIjogXCJJU1RcIiwgICAgLy8gVVRDKzU6MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG4gICAgXCItNTcwXCI6IFwiQUNTVFwiLCAgIC8vIFVUQys5OjMwIChBdXN0cmFsaWFuIENlbnRyYWwgU3RhbmRhcmQgVGltZSlcbiAgICBcIi02MDBcIjogXCJBRVNUXCIsICAgLy8gVVRDKzEwIChBdXN0cmFsaWFuIEVhc3Rlcm4gU3RhbmRhcmQgVGltZSlcbn07XG5cblxuLy8gWVlZWS1NTS1ERF9ISC1NTS1TUy5tbW0gVElNRVpPTkVcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWxlVGltZXN0YW1wTG9jYWwodGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IHAoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgbGV0IGRheSA9IHAoZGF0ZS5nZXREYXRlKCkpO1xuICAgIGxldCBob3VycyA9IHAoZGF0ZS5nZXRIb3VycygpKTtcbiAgICBsZXQgbWludXRlcyA9IHAoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgIGxldCBzZWNvbmRzID0gcChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgbGV0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgbGV0IG1pbGxpc2Vjb25kc1N0cmluZyA9IG1pbGxpc2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDMsIFwiMFwiKTtcblxuICAgIGxldCB0aW1lU3RyaW5nID0gdGltZS50b1N0cmluZygpO1xuICAgIGxldCBkZWNpbWFsSW5kZXggPSB0aW1lU3RyaW5nLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChkZWNpbWFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxldCBmcmFjdGlvbmFsUGFydCA9IHRpbWVTdHJpbmcuc3Vic3RyaW5nKGRlY2ltYWxJbmRleCArIDEpO1xuICAgICAgICBtaWxsaXNlY29uZHNTdHJpbmcgKz0gZnJhY3Rpb25hbFBhcnQ7XG4gICAgfVxuICAgIC8vIEdldCB0aW1lem9uZSBvZmZzZXQgaW4gbWludXRlcyAobmVnYXRpdmUgb2YgZ2V0VGltZXpvbmVPZmZzZXQgYmVjYXVzZSBpdCByZXR1cm5zIG9wcG9zaXRlIHNpZ24pXG4gICAgbGV0IHRpbWV6b25lT2Zmc2V0TWludXRlcyA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIC8vIExvb2sgdXAgdGhlIGFiYnJldmlhdGlvbiBvciBmYWxsYmFjayB0byBudW1lcmljIGZvcm1hdFxuICAgIGxldCB0aW1lem9uZVN0cmluZyA9IHRpbWV6b25lQWJicmV2aWF0aW9uc1t0aW1lem9uZU9mZnNldE1pbnV0ZXMudG9TdHJpbmcoKV07XG4gICAgaWYgKCF0aW1lem9uZVN0cmluZykge1xuICAgICAgICAvLyBGYWxsYmFjazogZm9ybWF0IGFzIMKxSEhNTVxuICAgICAgICBsZXQgb2Zmc2V0U2lnbiA9IHRpbWV6b25lT2Zmc2V0TWludXRlcyA+PSAwID8gXCIrXCIgOiBcIi1cIjtcbiAgICAgICAgbGV0IG9mZnNldEhvdXJzID0gcChNYXRoLmZsb29yKE1hdGguYWJzKHRpbWV6b25lT2Zmc2V0TWludXRlcykgLyA2MCkpO1xuICAgICAgICBsZXQgb2Zmc2V0TWlucyA9IHAoTWF0aC5hYnModGltZXpvbmVPZmZzZXRNaW51dGVzKSAlIDYwKTtcbiAgICAgICAgdGltZXpvbmVTdHJpbmcgPSBgJHtvZmZzZXRTaWdufSR7b2Zmc2V0SG91cnN9JHtvZmZzZXRNaW5zfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fV8ke2hvdXJzfS0ke21pbnV0ZXN9LSR7c2Vjb25kc30uJHttaWxsaXNlY29uZHNTdHJpbmd9XyR7dGltZXpvbmVTdHJpbmd9YDtcbn1cblxuLyoqIDIwMjQgSmFudWFyeSAxLCBNb25kYXksIDEyOjUzOjAycG0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROaWNlRGF0ZVRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgbGV0IHN0clRpbWUgPSBwKGhvdXJzKSArIFwiOlwiICsgcChtaW51dGVzKSArIFwiOlwiICsgcChzZWNvbmRzKSArIGFtcG07XG4gICAgbGV0IGRheXMgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIgXCIgKyBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZGVmYXVsdFwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KSArIFwiIFwiICsgZGF0ZS5nZXREYXRlKCkgKyBcIiwgXCIgKyBkYXlzW2RhdGUuZ2V0RGF5KCldICsgXCIsIFwiICsgc3RyVGltZTtcbn1cblxuLyoqIDIwMjQgSmFudWFyeSAxLCBNb25kYXksIDEyOjUzOjAycG0gKDQgbW9udGhzIGFnbykgICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VmVyeU5pY2VEYXRlVGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICBpZiAoIXRpbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGltZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Zm9ybWF0TmljZURhdGVUaW1lKHRpbWUpfSAoJHtmb3JtYXRUaW1lKERhdGUubm93KCkgLSB0aW1lKX0pYDtcbn1cblxuLyoqIFlZWVkvTU0vREQgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKHRpbWU6IG51bWJlcikge1xuICAgIGZ1bmN0aW9uIHAoczogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIHAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHAoZGF0ZS5nZXREYXRlKCkpO1xufVxuXG4vKiogPD0gNiBjaGFyYWN0ZXJzICg8PSA1IGlmIHBvc2l0aXZlKSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm4gXCIwJVwiO1xuICAgIC8vIDEgZGVjaW1hbCBwb2ludCwgc28gd2UgaGF2ZSA1IGNoYXJhY3RlcnMgKGp1c3QgbGlrZSBmb3JtYXROdW1iZXIgcmV0dXJucyA1IGNoYXJhY3RlcnMpXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwKSAvIDEwICsgXCIlXCI7XG59IiwiXG5leHBvcnQgdHlwZSBTb3VyY2VNYXAgPSB7XG4gICAgdmVyc2lvbjogbnVtYmVyO1xuICAgIGZpbGU6IHN0cmluZztcbiAgICBzb3VyY2VSb290OiBcIlwiLFxuICAgIHNvdXJjZXM6IHN0cmluZ1tdO1xuICAgIHNvdXJjZXNDb250ZW50OiBzdHJpbmdbXTtcbiAgICBuYW1lczogbmV2ZXJbXTtcbiAgICBtYXBwaW5nczogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIFNvdXJjZU1hcHBpbmcgPSB7XG4gICAgZ2VuZXJhdGVkTGluZTogbnVtYmVyO1xuICAgIGdlbmVyYXRlZENvbHVtbjogbnVtYmVyO1xuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XG4gICAgb3JpZ2luYWxMaW5lOiBudW1iZXI7XG4gICAgb3JpZ2luYWxDb2x1bW46IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBJblByb2dyZXNzU291cmNlTWFwID0ge1xuICAgIHNvdXJjZXM6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBjb250ZW50czogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBtYXBwaW5nczogU291cmNlTWFwcGluZ1tdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNvdXJjZU1hcChjb250ZW50OiBzdHJpbmcpOiB7XG4gICAgc291cmNlTWFwOiBTb3VyY2VNYXAgfCB1bmRlZmluZWQ7XG4gICAgY29kZTogc3RyaW5nO1xufSB7XG4gICAgLy8gUmVtb3ZlIGFueSB1cmwgbWFwcGluZ3MgKHNvIE5PVCBkYXRhIG9uZXMpXG4gICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwvIyBzb3VyY2VNYXBwaW5nVVJMPSg/IWRhdGE6KVteXFxzXSskL20sIFwiLy8gcmVtb3ZlZCB1cmwgc291cmNlbWFwXCIpO1xuXG4gICAgY29uc3Qgc291cmNlTWFwUmVnZXggPSAvXFwvXFwvIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO2Jhc2U2NCwoW15cXHNdKykkL207XG4gICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHNvdXJjZU1hcFJlZ2V4KTtcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHsgc291cmNlTWFwOiB1bmRlZmluZWQsIGNvZGU6IGNvbnRlbnQgfTtcbiAgICB9XG5cbiAgICBsZXQgc291cmNlTWFwSnNvbiA9IEJ1ZmZlci5mcm9tKG1hdGNoWzFdLCBcImJhc2U2NFwiKS50b1N0cmluZygpO1xuICAgIC8vIEhBQ0s6IElmIHRoZSBzb3VyY2VtYXAgaXMgaW52YWxpZCwgdHJ5IHRvIHJlbW92ZSB0cmFpbGluZyBjaGFyYWN0ZXJzLiBGb3Igc29tZSByZWFzb24gd2Ugc29tZXRpbWVzIGhhdmVcbiAgICAvLyAgZXh0cmEgY2hhcmFjdGVycyBhdCB0aGUgZW5kPyBBbHNvIHRyeSB0byBhZGQgc29tZSBjaGFyYWN0ZXJzIHRvbz9cbiAgICBmdW5jdGlvbiBpc0pTT04oc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBpZiAoaXNKU09OKHNvdXJjZU1hcEpzb24pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2VNYXBKc29uID0gc291cmNlTWFwSnNvbi5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIGlmICghaXNKU09OKHNvdXJjZU1hcEpzb24pKSB7XG4gICAgICAgIGlmIChpc0pTT04oc291cmNlTWFwSnNvbiArIFwiXX1cIikpIHtcbiAgICAgICAgICAgIHNvdXJjZU1hcEpzb24gPSBzb3VyY2VNYXBKc29uICsgXCJdfVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc291cmNlTWFwID0gSlNPTi5wYXJzZShzb3VyY2VNYXBKc29uKSBhcyBTb3VyY2VNYXA7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzb3VyY2VtYXAgbGluZSBidXQga2VlcCB0aGUgY29kZVxuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHNvdXJjZU1hcFJlZ2V4LCBcIi8vIG1lcmdlZCBpbmxpbmUgc291cmNlbWFwXCIpO1xuXG4gICAgICAgIHJldHVybiB7IHNvdXJjZU1hcCwgY29kZTogY29udGVudCB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzb3VyY2UgbWFwOiAke3NvdXJjZU1hcEpzb259YCk7XG4gICAgICAgIHJldHVybiB7IHNvdXJjZU1hcDogdW5kZWZpbmVkLCBjb2RlOiBjb250ZW50IH07XG4gICAgfVxufVxuZnVuY3Rpb24gZGVjb2RlTWFwcGluZ3MobWFwcGluZ3M6IHN0cmluZyk6IFNvdXJjZU1hcHBpbmdbXSB7XG4gICAgY29uc3QgdmxxVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbiAgICBjb25zdCB2bHFEZWNvZGUgPSBuZXcgTWFwKEFycmF5LmZyb20odmxxVGFibGUpLm1hcCgoYywgaSkgPT4gW2MsIGldKSk7XG5cbiAgICBmdW5jdGlvbiBkZWNvZGVWTFEoc3RyOiBzdHJpbmcsIHBvczogeyB2YWx1ZTogbnVtYmVyIH0pOiBudW1iZXIge1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAgICAgbGV0IHNoaWZ0ID0gMDtcbiAgICAgICAgbGV0IGNvbnRpbnVhdGlvbjogYm9vbGVhbjtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBjID0gc3RyW3Bvcy52YWx1ZSsrXTtcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gdmxxRGVjb2RlLmdldChjKTtcbiAgICAgICAgICAgIGlmIChkaWdpdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFZMUSBjaGFyYWN0ZXI6ICR7SlNPTi5zdHJpbmdpZnkoYyl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51YXRpb24gPSAoZGlnaXQgJiAzMikgPiAwO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkaWdpdCAmIDMxO1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlIDw8IHNoaWZ0O1xuICAgICAgICAgICAgc2hpZnQgKz0gNTtcbiAgICAgICAgfSB3aGlsZSAoY29udGludWF0aW9uKTtcblxuICAgICAgICBjb25zdCBzaG91bGROZWdhdGUgPSByZXN1bHQgJiAxO1xuICAgICAgICByZXN1bHQgPj4+PSAxO1xuICAgICAgICByZXR1cm4gc2hvdWxkTmVnYXRlID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IFNvdXJjZU1hcHBpbmdbXSA9IFtdO1xuICAgIGxldCBnZW5lcmF0ZWRMaW5lID0gMTtcbiAgICBsZXQgZ2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICBsZXQgc291cmNlSW5kZXggPSAwO1xuICAgIGxldCBvcmlnaW5hbExpbmUgPSAxO1xuICAgIGxldCBvcmlnaW5hbENvbHVtbiA9IDA7XG5cbiAgICBjb25zdCBzZWdtZW50cyA9IG1hcHBpbmdzLnNwbGl0KFwiO1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBzZWdtZW50c1tpXTtcbiAgICAgICAgaWYgKCFsaW5lKSB7XG4gICAgICAgICAgICBnZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IGxpbmUuc3BsaXQoXCIsXCIpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgICAgICBpZiAoIWZpZWxkKSBjb250aW51ZTtcblxuICAgICAgICAgICAgY29uc3QgcG9zID0geyB2YWx1ZTogMCB9O1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudERhdGEgPSBbXTtcblxuICAgICAgICAgICAgd2hpbGUgKHBvcy52YWx1ZSA8IGZpZWxkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnREYXRhLnB1c2goZGVjb2RlVkxRKGZpZWxkLCBwb3MpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlZ21lbnREYXRhLmxlbmd0aCA8IDQpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWRDb2x1bW4gKz0gc2VnbWVudERhdGFbMF07XG4gICAgICAgICAgICBzb3VyY2VJbmRleCArPSBzZWdtZW50RGF0YVsxXTtcbiAgICAgICAgICAgIG9yaWdpbmFsTGluZSArPSBzZWdtZW50RGF0YVsyXTtcbiAgICAgICAgICAgIG9yaWdpbmFsQ29sdW1uICs9IHNlZ21lbnREYXRhWzNdO1xuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVkTGluZSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZWRDb2x1bW4sXG4gICAgICAgICAgICAgICAgc291cmNlSW5kZXgsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxMaW5lLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29sdW1uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2VuZXJhdGVkTGluZSsrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5Qcm9ncmVzc1NvdXJjZU1hcChzb3VyY2VNYXA6IFNvdXJjZU1hcCk6IEluUHJvZ3Jlc3NTb3VyY2VNYXAge1xuICAgIGNvbnN0IHNvdXJjZXMgPSBzb3VyY2VNYXAuc291cmNlcy5tYXAoKG5hbWUsIGkpID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNvbnRlbnRzOiBzb3VyY2VNYXAuc291cmNlc0NvbnRlbnRbaV0gfHwgXCJcIixcbiAgICB9KSk7XG5cbiAgICBjb25zdCBtYXBwaW5ncyA9IGRlY29kZU1hcHBpbmdzKHNvdXJjZU1hcC5tYXBwaW5ncyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2VzLFxuICAgICAgICBtYXBwaW5ncyxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9JblByb2dyZXNzU291cmNlTWFwKGluUHJvZ3Jlc3M6IEluUHJvZ3Jlc3NTb3VyY2VNYXAsIG5ld01hcHBpbmdzOiBJblByb2dyZXNzU291cmNlTWFwKSB7XG4gICAgY29uc3Qgc291cmNlSW5kZXhPZmZzZXQgPSBpblByb2dyZXNzLnNvdXJjZXMubGVuZ3RoO1xuXG4gICAgLy8gQWRkIG5ldyBzb3VyY2VzXG4gICAgaW5Qcm9ncmVzcy5zb3VyY2VzLnB1c2goLi4ubmV3TWFwcGluZ3Muc291cmNlcyk7XG5cbiAgICAvLyBBZGQgbWFwcGluZ3Mgd2l0aCBhZGp1c3RlZCBzb3VyY2UgaW5kaWNlc1xuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiBuZXdNYXBwaW5ncy5tYXBwaW5ncykge1xuICAgICAgICBpblByb2dyZXNzLm1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgLi4ubWFwcGluZyxcbiAgICAgICAgICAgIHNvdXJjZUluZGV4OiBtYXBwaW5nLnNvdXJjZUluZGV4ICsgc291cmNlSW5kZXhPZmZzZXQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsaXplSW5Qcm9ncmVzc1NvdXJjZU1hcChpblByb2dyZXNzOiBJblByb2dyZXNzU291cmNlTWFwKTogU291cmNlTWFwIHtcbiAgICBjb25zdCB2bHFUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xuXG4gICAgZnVuY3Rpb24gZW5jb2RlVkxRKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBDb252ZXJ0IHRvIHppZ3phZyBlbmNvZGluZ1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIDwgMCA/ICgtdmFsdWUgPDwgMSkgfCAxIDogdmFsdWUgPDwgMTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IGRpZ2l0ID0gdmFsdWUgJiAzMTtcbiAgICAgICAgICAgIHZhbHVlID4+Pj0gNTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBkaWdpdCB8PSAzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCArPSB2bHFUYWJsZVtkaWdpdF07XG4gICAgICAgIH0gd2hpbGUgKHZhbHVlID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBTb3J0IG1hcHBpbmdzIGJ5IGdlbmVyYXRlZCBwb3NpdGlvblxuICAgIGNvbnN0IHNvcnRlZE1hcHBpbmdzID0gWy4uLmluUHJvZ3Jlc3MubWFwcGluZ3NdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEuZ2VuZXJhdGVkTGluZSAhPT0gYi5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5nZW5lcmF0ZWRMaW5lIC0gYi5nZW5lcmF0ZWRMaW5lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLmdlbmVyYXRlZENvbHVtbiAtIGIuZ2VuZXJhdGVkQ29sdW1uO1xuICAgIH0pO1xuXG4gICAgLy8gR2VuZXJhdGUgdGhlIG1hcHBpbmdzIHN0cmluZ1xuICAgIGxldCBwcmV2R2VuTGluZSA9IDE7XG4gICAgbGV0IHByZXZHZW5Db2x1bW4gPSAwO1xuICAgIGxldCBwcmV2U291cmNlSW5kZXggPSAwO1xuICAgIGxldCBwcmV2T3JpZ0xpbmUgPSAxO1xuICAgIGxldCBwcmV2T3JpZ0NvbHVtbiA9IDA7XG5cbiAgICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgY3VycmVudExpbmU6IHN0cmluZ1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2Ygc29ydGVkTWFwcGluZ3MpIHtcbiAgICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA+IHByZXZHZW5MaW5lKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGN1cnJlbnRMaW5lLmpvaW4oXCIsXCIpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwcmV2R2VuTGluZSArIDE7IGkgPCBtYXBwaW5nLmdlbmVyYXRlZExpbmU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50TGluZSA9IFtdO1xuICAgICAgICAgICAgcHJldkdlbkNvbHVtbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWdtZW50ID0gW1xuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC0gcHJldkdlbkNvbHVtbiksXG4gICAgICAgICAgICBlbmNvZGVWTFEobWFwcGluZy5zb3VyY2VJbmRleCAtIHByZXZTb3VyY2VJbmRleCksXG4gICAgICAgICAgICBlbmNvZGVWTFEobWFwcGluZy5vcmlnaW5hbExpbmUgLSBwcmV2T3JpZ0xpbmUpLFxuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gLSBwcmV2T3JpZ0NvbHVtbiksXG4gICAgICAgIF07XG5cbiAgICAgICAgY3VycmVudExpbmUucHVzaChzZWdtZW50LmpvaW4oXCJcIikpO1xuXG4gICAgICAgIHByZXZHZW5MaW5lID0gbWFwcGluZy5nZW5lcmF0ZWRMaW5lO1xuICAgICAgICBwcmV2R2VuQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICAgIHByZXZTb3VyY2VJbmRleCA9IG1hcHBpbmcuc291cmNlSW5kZXg7XG4gICAgICAgIHByZXZPcmlnTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuICAgICAgICBwcmV2T3JpZ0NvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRMaW5lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGluZXMucHVzaChjdXJyZW50TGluZS5qb2luKFwiLFwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogMyxcbiAgICAgICAgZmlsZTogXCJcIixcbiAgICAgICAgc291cmNlUm9vdDogXCJcIixcbiAgICAgICAgc291cmNlczogaW5Qcm9ncmVzcy5zb3VyY2VzLm1hcChzID0+IHMubmFtZSksXG4gICAgICAgIHNvdXJjZXNDb250ZW50OiBpblByb2dyZXNzLnNvdXJjZXMubWFwKHMgPT4gcy5jb250ZW50cyksXG4gICAgICAgIG5hbWVzOiBbXSxcbiAgICAgICAgbWFwcGluZ3M6IGxpbmVzLmpvaW4oXCI7XCIpLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU291cmNlTWFwTGluZUNvbW1lbnQoc291cmNlTWFwOiBTb3VyY2VNYXApOiBzdHJpbmcge1xuICAgIGNvbnN0IHNvdXJjZU1hcEpzb24gPSBKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApO1xuICAgIGNvbnN0IGJhc2U2NCA9IEJ1ZmZlci5mcm9tKHNvdXJjZU1hcEpzb24pLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgIC8vIE5PVEU6IERvbid0IHdyaXRlIGl0IGFzIG9uZSBzdHJpbmcsIGFzIHRoZW4gd2UgYXJlIGRldGVjdGVkIGFzIGEgc291cmNlbWFwLCBhbmQgYnJlYWsgc291cmNlbWFwcy4uLlxuICAgIHJldHVybiBcIi8vXCIgKyBgIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJHtiYXNlNjR9YDtcbn0iLCIvLyBCdW5kbGVkIHdlYi13b3JrZXIgZW50cnkuIEJ1aWx0IGludG8gPGRlcGxveT4vYWlXb3JrZXJFbnRyeS5qcyBieSBzY3JpcHRzL2J1aWxkLnRzIGFuZCBsb2FkZWRcbi8vIGZyb20gdGhlcmUgYnkgYWlXb3JrZXJQb29sLnRzIChicm93c2VyIHBhdGgpLiBEaXNwYXRjaGVzIHRvIGEgcmVnaXN0ZXJlZCBzdHJhdGVneSBieSBpZC5cbmltcG9ydCB7IGdldFN0cmF0ZWd5IH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9pbmRleFwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJSZXF1ZXN0IH0gZnJvbSBcIi4vYWlUeXBlc1wiO1xuXG5pbnRlcmZhY2UgV29ya2VyU2VsZiB7XG4gICAgb25tZXNzYWdlOiAoKGU6IE1lc3NhZ2VFdmVudDxBSVdvcmtlclJlcXVlc3Q+KSA9PiB2b2lkKSB8IG51bGw7XG4gICAgcG9zdE1lc3NhZ2UoZGF0YTogdW5rbm93bik6IHZvaWQ7XG59XG5cbi8vIEdhdGUgb24gYHNlbGZgIGV4aXN0aW5nIOKAlCB0aGUgYnVuZGxlciBydW5zIHVzIHRocm91Z2ggbm9kZSBmaXJzdCB0byByZWNvcmQgcmVxdWlyZS5jYWNoZSwgYW5kXG4vLyBub2RlIGRvZXNuJ3QgaGF2ZSBgc2VsZmAuIEluc2lkZSBhIHJlYWwgd2ViIHdvcmtlciBgc2VsZmAgaXMgZGVmaW5lZCBhbmQgd2Ugd2lyZSB1cC5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IHdvcmtlclNjb3BlID0gc2VsZiBhcyB1bmtub3duIGFzIFdvcmtlclNlbGY7XG4gICAgd29ya2VyU2NvcGUub25tZXNzYWdlID0gYXN5bmMgKGU6IE1lc3NhZ2VFdmVudDxBSVdvcmtlclJlcXVlc3Q+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcSA9IGUuZGF0YTtcbiAgICAgICAgaWYgKCFyZXEgfHwgIXJlcS5zbmFwc2hvdCkge1xuICAgICAgICAgICAgd29ya2VyU2NvcGUucG9zdE1lc3NhZ2UoeyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogXCJubyByZXF1ZXN0L3NuYXBzaG90XCIgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gZ2V0U3RyYXRlZ3kocmVxLnN0cmF0ZWd5SWQpO1xuICAgICAgICAgICAgY29uc3Qgb25Qcm9ncmVzcyA9IChvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcInByb2dyZXNzXCIsIG9yZGVycyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBzdHJhdGVneShyZXEuc25hcHNob3QsIHtcbiAgICAgICAgICAgICAgICBjb25maWc6IHJlcS5jb25maWcsXG4gICAgICAgICAgICAgICAgZGVhZGxpbmVNczogRGF0ZS5ub3coKSArIHJlcS50aW1lb3V0TXMsXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd29ya2VyU2NvcGUucG9zdE1lc3NhZ2UoeyBzdGF0dXM6IFwiZG9uZVwiLCBvcmRlcnMgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKTtcbiAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcImVycm9yXCIsIG1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiLy8gSW1wb3J0aW5nIHRoaXMgbW9kdWxlIHJlZ2lzdGVycyBldmVyeSBidWlsdC1pbiBzdHJhdGVneSBhcyBhIHNpZGUgZWZmZWN0LiBCb3RoIHRoZSB3b3JrZXIgZW50cnlcbi8vIGFuZCB0aGUgbm9kZSBzaW0gaW1wb3J0IGl0IHNvIGdldFN0cmF0ZWd5KCkgY2FuIHJlc29sdmUgYW55IGlkLlxuaW1wb3J0IFwiLi9iZWVsaW5lXCI7XG5pbXBvcnQgXCIuL2dyZWVkeUNpdHlcIjtcbmltcG9ydCBcIi4vY29uc29saWRhdGVcIjtcbmltcG9ydCBcIi4vZm9jdXNGaXJlXCI7XG5pbXBvcnQgXCIuL2ZvY3VzV2Vha2VzdEZhY3Rpb25cIjtcbmltcG9ydCBcIi4vbW9udGVDYXJsb1wiO1xuXG5leHBvcnQgeyBnZXRTdHJhdGVneSwgZ2V0U3RyYXRlZ3lJZHMsIHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuIiwiaW1wb3J0IHsgcGxhbkJlZWxpbmVPcmRlcnMgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gdjEgYmFzZWxpbmU6IGV2ZXJ5IGdlbmVyYWwgYmVlbGluZXMgdG93YXJkIHRoZSBuZWFyZXN0IGVuZW15IGNpdHkuIElnbm9yZXMgY29uZmlnICsgZGVhZGxpbmUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiYmVlbGluZVwiLCAoc25hcHNob3QpID0+IHBsYW5CZWVsaW5lT3JkZXJzKHNuYXBzaG90KSk7XG4iLCIvLyBQdXJlIEFJIHBsYW5uaW5nIOKAlCBubyBET00sIG5vIHdvcmtlciBnbG9iYWxzLCBubyBzY2hlbWEgaW1wb3J0cy4gU2hhcmVkIGJ5IHRoZSB3ZWItd29ya2VyIGVudHJ5XG4vLyAoYWlXb3JrZXJFbnRyeS50cykgYW5kIHRoZSBpbi1wcm9jZXNzIG5vZGUgcGF0aCAoYWlXb3JrZXJQb29sLnRzIGluIG5vZGUpLiBLZWVwaW5nIGl0IGRlcGVuZGVuY3ktXG4vLyBmcmVlIGtlZXBzIHRoZSB3b3JrZXIgYnVuZGxlIHRpbnkgYW5kIGxldHMgdGhlIG5vZGUgc2ltdWxhdGlvbiBjYWxsIGl0IGRpcmVjdGx5LlxuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJTbmFwc2hvdCB9IGZyb20gXCIuL2FpVHlwZXNcIjtcblxuZnVuY3Rpb24gb2Zmc2V0VG9DdWJlKHA6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0pIHtcbiAgICBjb25zdCBjb2wgPSBwLng7XG4gICAgY29uc3Qgcm93ID0gY29sICUgMiA9PT0gMCA/IHAueSA6IHAueSAtIDAuNTtcbiAgICBjb25zdCBjdWJlX3ggPSBjb2w7XG4gICAgY29uc3QgY3ViZV96ID0gcm93IC0gKGNvbCAtIChjb2wgJiAxKSkgLyAyO1xuICAgIGNvbnN0IGN1YmVfeSA9IC1jdWJlX3ggLSBjdWJlX3o7XG4gICAgcmV0dXJuIHsgeDogY3ViZV94LCB5OiBjdWJlX3ksIHo6IGN1YmVfeiB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhleERpc3RhbmNlKGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0pOiBudW1iZXIge1xuICAgIGNvbnN0IGNhID0gb2Zmc2V0VG9DdWJlKGEpO1xuICAgIGNvbnN0IGNiID0gb2Zmc2V0VG9DdWJlKGIpO1xuICAgIHJldHVybiAoTWF0aC5hYnMoY2EueCAtIGNiLngpICsgTWF0aC5hYnMoY2EueSAtIGNiLnkpICsgTWF0aC5hYnMoY2EueiAtIGNiLnopKSAvIDI7XG59XG5cbi8vIHYxIHN0cmF0ZWd5OiBlYWNoIG9mIG91ciBnZW5lcmFscyBiZWVsaW5lcyB0b3dhcmQgdGhlIG5lYXJlc3QgZW5lbXkgY2l0eS5cbmV4cG9ydCBmdW5jdGlvbiBwbGFuQmVlbGluZU9yZGVycyhzbmFwc2hvdDogQUlXb3JrZXJTbmFwc2hvdCk6IEFJV29ya2VyT3JkZXJbXSB7XG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91ckdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdlbmVyYWwgb2Ygb3VyR2VuZXJhbHMpIHtcbiAgICAgICAgbGV0IHRhcmdldDogdHlwZW9mIGVuZW15Q2l0aWVzW251bWJlcl0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgZW5lbXlDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnZW5lcmFsLCBjaXR5KTtcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkgY29udGludWU7XG4gICAgICAgIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW5lcmFsLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVycztcbn1cbiIsImltcG9ydCB7IEFJU3RyYXRlZ3kgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuXG4vLyBTdHJhdGVneSByZWdpc3RyeS4gRXZlcnkgQUkgaXMgYSBuYW1lZCwgaGFuZC13cml0dGVuIHN0cmF0ZWd5LiBXaGVuIGEgc3RyYXRlZ3kgaXMgcmV2aXNlZCwgZ2l2ZVxuLy8gaXQgYSBORVcgaWQgc28gcHJpb3IgdmVyc2lvbnMga2VlcCB3b3JraW5nIGFuZCByZW1haW4gY29tcGFyYWJsZSBpbiB0b3VybmFtZW50cy5cbmNvbnN0IHN0cmF0ZWdpZXMgPSBuZXcgTWFwPHN0cmluZywgQUlTdHJhdGVneT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU3RyYXRlZ3koaWQ6IHN0cmluZywgc3RyYXRlZ3k6IEFJU3RyYXRlZ3kpIHtcbiAgICBpZiAoc3RyYXRlZ2llcy5oYXMoaWQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIEFJIHN0cmF0ZWd5IGlkOiAke2lkfWApO1xuICAgIH1cbiAgICBzdHJhdGVnaWVzLnNldChpZCwgc3RyYXRlZ3kpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXRlZ3koaWQ6IHN0cmluZyk6IEFJU3RyYXRlZ3kge1xuICAgIGNvbnN0IHMgPSBzdHJhdGVnaWVzLmdldChpZCk7XG4gICAgaWYgKCFzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBBSSBzdHJhdGVneSBpZDogJHtpZH0uIFJlZ2lzdGVyZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZ2V0U3RyYXRlZ3lJZHMoKSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXRlZ3lJZHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHN0cmF0ZWdpZXMua2V5cygpKTtcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIENvbmZpZ3VyYWJsZSBncmVlZHkgdGFyZ2V0LXBpY2tlci4gRWFjaCBnZW5lcmFsIGluZGVwZW5kZW50bHkgc2NvcmVzIGNhbmRpZGF0ZSB0YXJnZXRzIGFuZCBtb3Zlc1xuLy8gdG93YXJkIHRoZSBiZXN0IG9uZS4gU2NvcmUgPSBkaXN0V2VpZ2h0KmRpc3RhbmNlICsgZ2Fycmlzb25XZWlnaHQqZ2Fycmlzb24g4oiSIGNhcGl0YWxCb251cyhpZiBjYXBpdGFsKS5cbi8vIExvd2VyIHNjb3JlIHdpbnMsIHNvIGhpZ2ggZGlzdFdlaWdodCA9IHByZWZlciBjbG9zZXIsIGhpZ2ggZ2Fycmlzb25XZWlnaHQgPSBwcmVmZXIgc29mdGVyIHRhcmdldHMsXG4vLyBjYXBpdGFsQm9udXMgcHVsbHMgdG93YXJkIGVuZW15IGNhcGl0YWxzLiBXaXRoIHRhcmdldEdlbmVyYWxzLCBlbmVteSBnZW5lcmFscyAodHJlYXRlZCBhc1xuLy8gZ2Fycmlzb24gPSB0aGVpciB1bml0IGNvdW50KSBhcmUgYWxzbyBjYW5kaWRhdGVzLlxucmVnaXN0ZXJTdHJhdGVneShcImdyZWVkeUNpdHlcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwKTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgMCk7XG4gICAgY29uc3QgdGFyZ2V0R2VuZXJhbHMgPSBjZmcudGFyZ2V0R2VuZXJhbHMgPT09IHRydWU7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG4gICAgY29uc3Qgb3VyR2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcblxuICAgIHR5cGUgVGFyZ2V0ID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgZ2Fycmlzb246IG51bWJlcjsgaXNDYXBpdGFsOiBib29sZWFuOyB9O1xuICAgIGNvbnN0IHRhcmdldHM6IFRhcmdldFtdID0gW107XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykge1xuICAgICAgICBpZiAoYy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHRhcmdldHMucHVzaCh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0R2VuZXJhbHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBnLngsIHk6IGcueSwgZ2Fycmlzb246IGcudG90YWxVbml0cywgaXNDYXBpdGFsOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3VyR2VuZXJhbHMpIHtcbiAgICAgICAgbGV0IGJlc3Q6IFRhcmdldCB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZ2VuLCB0KVxuICAgICAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAgICAgLSAodC5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcbiAgICAgICAgICAgIGlmIChzY29yZSA8IGJlc3RTY29yZSkge1xuICAgICAgICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICAgIGJlc3QgPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiBiZXN0LngsIHk6IGJlc3QueSB9IH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJTbmFwc2hvdCB9IGZyb20gXCIuL2FpVHlwZXNcIjtcblxuLy8gU2hhcmVkIGdyb3d0aCBkZWNpc2lvbiwgd3JhcHBlZCBhcm91bmQgYSBzdHJhdGVneSdzIG1vdmUgb3JkZXJzIHNvIGV2ZXJ5IG9uZSBvZiBvdXIgZ2VuZXJhbHNcbi8vIGdldHMgYSBncm93dGhNb2RlIHNldCAoYW5kIGdlbmVyYWxzIHdpdGhvdXQgYSBtb3ZlIHN0aWxsIGdldCBhIGdyb3cvaG9sZCBvcmRlcikuXG4vL1xuLy8gY29uZmlnLmdyb3cgY29udHJvbHMgaXQ6XG4vLyAgIFwibmV2ZXJcIiAgICAgICAgICAgIOKAlCBuZXZlciBncm93LlxuLy8gICBcImFsd2F5c1wiICAgICAgICAgICDigJQgYWx3YXlzIGdyb3cgKHJpc2tzIHN0YXJ2YXRpb24gaWYgZm9vZCBuZXQgPCAwKS5cbi8vICAgXCJ3aGVuRm9vZFBvc2l0aXZlXCIg4oCUIGdyb3cgb25seSB3aGVuIHRoZSBmYWN0aW9uJ3MgZm9vZCBuZXQgaXMgPj0gMCAoZGVmYXVsdCkuIFRoaXMgaXMgdGhlIHNhZmVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhbC1wdXJwb3NlIHBvbGljeTogYnVpbGQgdXAgd2hpbGUgdGhlIGVjb25vbXkgc3VzdGFpbnMgaXQuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEdyb3d0aChcbiAgICBzbmFwc2hvdDogQUlXb3JrZXJTbmFwc2hvdCxcbiAgICBjb25maWc6IHsgZ3Jvdz86IHVua25vd247IH0sXG4gICAgbW92ZU9yZGVyczogQUlXb3JrZXJPcmRlcltdLFxuKTogQUlXb3JrZXJPcmRlcltdIHtcbiAgICBjb25zdCBncm93ID0gdHlwZW9mIGNvbmZpZy5ncm93ID09PSBcInN0cmluZ1wiID8gY29uZmlnLmdyb3cgOiBcIndoZW5Gb29kUG9zaXRpdmVcIjtcbiAgICBjb25zdCBzaG91bGRHcm93ID0gZ3JvdyA9PT0gXCJhbHdheXNcIlxuICAgICAgICB8fCAoZ3JvdyAhPT0gXCJuZXZlclwiICYmIHNuYXBzaG90LmZvb2QubmV0ID49IDApO1xuXG4gICAgY29uc3QgYnlHZW5lcmFsID0gbmV3IE1hcDxzdHJpbmcsIEFJV29ya2VyT3JkZXI+KCk7XG4gICAgZm9yIChjb25zdCBvIG9mIG1vdmVPcmRlcnMpIHtcbiAgICAgICAgYnlHZW5lcmFsLnNldChvLmdlbmVyYWxJZCwgeyAuLi5vLCBncm93dGhNb2RlOiBzaG91bGRHcm93IH0pO1xuICAgIH1cbiAgICAvLyBFbnN1cmUgZXZlcnkgb25lIG9mIG91ciBnZW5lcmFscyBoYXMgYW4gb3JkZXIgY2FycnlpbmcgdGhlIGdyb3d0aCBkZWNpc2lvbiwgZXZlbiBpZiB0aGVcbiAgICAvLyBzdHJhdGVneSBnYXZlIGl0IG5vIG1vdmUgdGhpcyB0dXJuLlxuICAgIGZvciAoY29uc3QgZyBvZiBzbmFwc2hvdC5nZW5lcmFscykge1xuICAgICAgICBpZiAoZy5mYWN0aW9uSWQgIT09IHNuYXBzaG90LmZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIGlmICghYnlHZW5lcmFsLmhhcyhnLmlkKSkge1xuICAgICAgICAgICAgYnlHZW5lcmFsLnNldChnLmlkLCB7IGdlbmVyYWxJZDogZy5pZCwgZ3Jvd3RoTW9kZTogc2hvdWxkR3JvdyB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShieUdlbmVyYWwudmFsdWVzKCkpO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gRm9yY2UtY29uY2VudHJhdGlvbiBzdHJhdGVneS4gQSBnZW5lcmFsIHdlYWtlciB0aGFuIG1lcmdlRnJhY3Rpb24gw5cgdGhlIGZhY3Rpb24ncyBzdHJvbmdlc3Rcbi8vIGdlbmVyYWwgbW92ZXMgdG93YXJkIHRoYXQgc3Ryb25nZXN0IGFsbHkgdG8gc3RhY2sgdXAgKHNhbWUtdGlsZSBzYW1lLWZhY3Rpb24gdW5pdHMgZmlnaHQgdG9nZXRoZXIsXG4vLyBzbyBjb25jZW50cmF0aW9uIHdpbnMgZmlnaHRzKS4gRXZlcnlvbmUgZWxzZSBhdHRhY2tzIHRoZSBiZXN0IGVuZW15IHRhcmdldCwgc2NvcmVkIGxpa2Vcbi8vIGdyZWVkeUNpdHkgKGRpc3RXZWlnaHTCt2Rpc3RhbmNlICsgZ2Fycmlzb25XZWlnaHTCt2dhcnJpc29uIOKIkiBjYXBpdGFsQm9udXPCt2lzQ2FwaXRhbCksIG9wdGlvbmFsbHlcbi8vIGFsc28gaHVudGluZyBlbmVteSBnZW5lcmFscy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJjb25zb2xpZGF0ZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNSk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuICAgIGNvbnN0IG1lcmdlRnJhY3Rpb24gPSBudW0oY2ZnLm1lcmdlRnJhY3Rpb24sIDAuOCk7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGlmIChvdXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gICAgbGV0IHN0cm9uZ2VzdCA9IG91cnNbMF07XG4gICAgZm9yIChjb25zdCBnIG9mIG91cnMpIGlmIChnLnRvdGFsVW5pdHMgPiBzdHJvbmdlc3QudG90YWxVbml0cykgc3Ryb25nZXN0ID0gZztcblxuICAgIHR5cGUgVGFyZ2V0ID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgZ2Fycmlzb246IG51bWJlcjsgaXNDYXBpdGFsOiBib29sZWFuOyB9O1xuICAgIGNvbnN0IHRhcmdldHM6IFRhcmdldFtdID0gW107XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykge1xuICAgICAgICBpZiAoYy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHRhcmdldHMucHVzaCh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0R2VuZXJhbHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBnLngsIHk6IGcueSwgZ2Fycmlzb246IGcudG90YWxVbml0cywgaXNDYXBpdGFsOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICAvLyBXZWFrIGdlbmVyYWwgd2l0aCBhIHN0cm9uZ2VyIGFsbHkgdG8gbWVyZ2UgaW50byDihpIgZ28gc3RhY2sgdXAuXG4gICAgICAgIGlmIChnZW4uaWQgIT09IHN0cm9uZ2VzdC5pZCAmJiBnZW4udG90YWxVbml0cyA8IG1lcmdlRnJhY3Rpb24gKiBzdHJvbmdlc3QudG90YWxVbml0cykge1xuICAgICAgICAgICAgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogc3Ryb25nZXN0LngsIHk6IHN0cm9uZ2VzdC55IH0gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuICAgICAgICBsZXQgYmVzdDogVGFyZ2V0IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiB0YXJnZXRzKSB7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IGRpc3RXZWlnaHQgKiBoZXhEaXN0YW5jZShnZW4sIHQpXG4gICAgICAgICAgICAgICAgKyBnYXJyaXNvbldlaWdodCAqIHQuZ2Fycmlzb25cbiAgICAgICAgICAgICAgICAtICh0LmlzQ2FwaXRhbCA/IGNhcGl0YWxCb251cyA6IDApO1xuICAgICAgICAgICAgaWYgKHNjb3JlIDwgYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0gdDsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiBiZXN0LngsIHk6IGJlc3QueSB9IH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gQ29vcmRpbmF0ZWQgZm9jdXMtZmlyZTogdGhlIHdob2xlIGZhY3Rpb24gcGlja3MgT05FIGdsb2JhbCB0YXJnZXQgYW5kIGV2ZXJ5IGdlbmVyYWwgY29udmVyZ2VzIG9uXG4vLyBpdCwgbmF0dXJhbGx5IHN0YWNraW5nIGludG8gYSBzaW5nbGUgaGFtbWVyLiBUaGUgdGFyZ2V0IGlzIHNjb3JlZCBmcm9tIHRoZSBmYWN0aW9uJ3MgY2VudHJvaWRcbi8vIChkaXN0V2VpZ2h0wrdkaXN0ICsgZ2Fycmlzb25XZWlnaHTCt2dhcnJpc29uIOKIkiBjYXBpdGFsQm9udXPCt2lzQ2FwaXRhbCkuIFdoZW4gdGhlIHRhcmdldCBpcyBjYXB0dXJlZFxuLy8gdGhlIG5leHQgY2FsbCByZS1waWNrcywgc28gdGhlIGRvb21zdGFjayByb2xscyBmcm9tIG9iamVjdGl2ZSB0byBvYmplY3RpdmUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiZm9jdXNGaXJlXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMC41KTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgMCk7XG4gICAgY29uc3QgdGFyZ2V0R2VuZXJhbHMgPSBjZmcudGFyZ2V0R2VuZXJhbHMgPT09IHRydWU7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGlmIChvdXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgY3ggPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueCwgMCkgLyBvdXJzLmxlbmd0aDtcbiAgICBjb25zdCBjeSA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy55LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGNlbnRyb2lkID0geyB4OiBjeCwgeTogY3kgfTtcblxuICAgIHR5cGUgVGFyZ2V0ID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgZ2Fycmlzb246IG51bWJlcjsgaXNDYXBpdGFsOiBib29sZWFuOyB9O1xuICAgIGNvbnN0IHRhcmdldHM6IFRhcmdldFtdID0gW107XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykge1xuICAgICAgICBpZiAoYy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHRhcmdldHMucHVzaCh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0R2VuZXJhbHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBnLngsIHk6IGcueSwgZ2Fycmlzb246IGcudG90YWxVbml0cywgaXNDYXBpdGFsOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgIGZvciAoY29uc3QgdCBvZiB0YXJnZXRzKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGNlbnRyb2lkLCB0KVxuICAgICAgICAgICAgKyBnYXJyaXNvbldlaWdodCAqIHQuZ2Fycmlzb25cbiAgICAgICAgICAgIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG4gICAgICAgIGlmIChzY29yZSA8IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHQ7IH1cbiAgICB9XG4gICAgaWYgKCFiZXN0KSByZXR1cm4gW107XG5cbiAgICBjb25zdCB0YXJnZXQgPSBiZXN0O1xuICAgIGNvbnN0IG9yZGVycyA9IG91cnMubWFwKGcgPT4gKHsgZ2VuZXJhbElkOiBnLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSB9KSk7XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIFNub3diYWxsIGZvY3VzOiBjb25jZW50cmF0ZSB0aGUgd2hvbGUgZmFjdGlvbiBvbiB0aGUgV0VBS0VTVCBzdXJ2aXZpbmcgZW5lbXkgZmFjdGlvbiwgdG9cbi8vIGVsaW1pbmF0ZSBvcHBvbmVudHMgb25lIGF0IGEgdGltZSAoZmV3ZXIgZW5lbWllcyA9IGNvbXBvdW5kaW5nIGFkdmFudGFnZSkuIEFtb25nIHRoYXQgZmFjdGlvbidzXG4vLyBjaXRpZXMgd2UgcGljayB0aGUgb25lIGJlc3Qgc2NvcmVkIGZyb20gb3VyIGNlbnRyb2lkIChkaXN0V2VpZ2h0wrdkaXN0ICsgZ2Fycmlzb25XZWlnaHTCt2dhcnJpc29uXG4vLyDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLiBJZiB0aGUgd2Vha2VzdCBmYWN0aW9uIGhhcyBubyBjaXRpZXMgbGVmdCB3ZSBmYWxsIGJhY2sgdG8gaXRzIG5lYXJlc3Rcbi8vIGdlbmVyYWwsIHRoZW4gdG8gYW55IGVuZW15IGNpdHkuXG5yZWdpc3RlclN0cmF0ZWd5KFwiZm9jdXNXZWFrZXN0RmFjdGlvblwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNSk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGN4ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLngsIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY3kgPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueSwgMCkgLyBvdXJzLmxlbmd0aDtcbiAgICBjb25zdCBjZW50cm9pZCA9IHsgeDogY3gsIHk6IGN5IH07XG5cbiAgICAvLyBUb3RhbCBzdHJlbmd0aCBwZXIgZW5lbXkgZmFjdGlvbiA9IGl0cyBnZW5lcmFscycgc3RhY2tlZCB1bml0cyArIGl0cyBjaXRpZXMnIGdhcnJpc29ucy5cbiAgICBjb25zdCBzdHJlbmd0aEJ5RmFjdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgc3RyZW5ndGhCeUZhY3Rpb24uc2V0KGcuZmFjdGlvbklkLCAoc3RyZW5ndGhCeUZhY3Rpb24uZ2V0KGcuZmFjdGlvbklkKSA/PyAwKSArIGcudG90YWxVbml0cyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICBzdHJlbmd0aEJ5RmFjdGlvbi5zZXQoYy5mYWN0aW9uSWQsIChzdHJlbmd0aEJ5RmFjdGlvbi5nZXQoYy5mYWN0aW9uSWQpID8/IDApICsgYy5nYXJyaXNvbik7XG4gICAgfVxuICAgIGlmIChzdHJlbmd0aEJ5RmFjdGlvbi5zaXplID09PSAwKSByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBbXSk7XG5cbiAgICBsZXQgd2Vha2VzdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGxldCB3ZWFrZXN0U3RyZW5ndGggPSBJbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IFtmaWQsIHNdIG9mIHN0cmVuZ3RoQnlGYWN0aW9uKSB7XG4gICAgICAgIGlmIChzIDwgd2Vha2VzdFN0cmVuZ3RoKSB7IHdlYWtlc3RTdHJlbmd0aCA9IHM7IHdlYWtlc3QgPSBmaWQ7IH1cbiAgICB9XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCBzY29yZSA9ICh0OiBUYXJnZXQpID0+IGRpc3RXZWlnaHQgKiBoZXhEaXN0YW5jZShjZW50cm9pZCwgdClcbiAgICAgICAgKyBnYXJyaXNvbldlaWdodCAqIHQuZ2Fycmlzb24gLSAodC5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcblxuICAgIGNvbnN0IHBpY2sgPSAoY2FuZHM6IFRhcmdldFtdKTogVGFyZ2V0IHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgbGV0IGJlc3Q6IFRhcmdldCB8IHVuZGVmaW5lZDsgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgY2FuZHMpIHsgY29uc3QgcyA9IHNjb3JlKHQpOyBpZiAocyA8IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzOyBiZXN0ID0gdDsgfSB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH07XG5cbiAgICBsZXQgdGFyZ2V0ID0gcGljayhjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgPT09IHdlYWtlc3QpXG4gICAgICAgIC5tYXAoYyA9PiAoeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KSkpO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldCA9IHBpY2soZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IHdlYWtlc3QpXG4gICAgICAgICAgICAubWFwKGcgPT4gKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSkpKTtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0ID0gcGljayhjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgICAgIC5tYXAoYyA9PiAoeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KSkpO1xuICAgIH1cbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgY29uc3QgdCA9IHRhcmdldDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdC54LCB5OiB0LnkgfSB9KSk7XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIE1vbnRlLUNhcmxvIG9wZW5pbmcgcGlja2VyLiBGb3IgZWFjaCBjYW5kaWRhdGUgZmlyc3QtdGFyZ2V0LCBydW4gZ3VpZGVkIHJvbGxvdXRzIG9uIGEgbGlnaHR3ZWlnaHRcbi8vIGludGVybmFsIG1vZGVsIChvdXIgd2hvbGUgYXJteSBhcyBvbmUgc3RhY2sgc25vd2JhbGxpbmcgdGhyb3VnaCBlbmVteSBjaXRpZXMgdW5kZXIgYSBncmVlZHlcbi8vIGRldGVybWluaXN0aWMgcG9saWN5LCB3aXRoIHJhbmRvbWl6ZWQgdGllLWJyZWFraW5nID0gdGhlIE1DIHNhbXBsaW5nKS4gU2NvcmUgZWFjaCBjYW5kaWRhdGUgYnkgaG93XG4vLyBtdWNoIGl0IGxldHMgdXMgc25vd2JhbGw7IHNlbmQgdGhlIHdob2xlIGZhY3Rpb24gYXQgdGhlIGJlc3Qgb3BlbmluZy4gQXBwcm94aW1hdGUgYnkgZGVzaWduIOKAlCB0aGVcbi8vIHN0cmF0ZWd5IG9ubHkgaGFzIHRoZSBzbmFwc2hvdCwgbm90IHRoZSByZWFsIGVuZ2luZSDigJQgYnV0IGl0IGRlbW9uc3RyYXRlcyBkZXRlcm1pbmlzdGljLXBvbGljeS1cbi8vIGd1aWRlZCBNQyBhbmQgaXMgYSB0b3VybmFtZW50IGV4cGVyaW1lbnQuXG4vL1xuLy8gY29uZmlnOiBkaXN0V2VpZ2h0LCBnYXJyaXNvbldlaWdodCwgY2FwaXRhbEJvbnVzLCByb2xsb3V0cyAocGVyIGNhbmRpZGF0ZSksIHJvbGxvdXRUdXJucyxcbi8vIHRvcEsgKHRpZS1icmVhayBicmVhZHRoIGZvciB0aGUgcm9sbG91dCBwb2xpY3kpLCBjb21iYXRGYWN0b3IsIGxvc3NGcmFjLlxucmVnaXN0ZXJTdHJhdGVneShcIm1vbnRlQ2FybG9cIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcbiAgICBjb25zdCByb2xsb3V0cyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IobnVtKGNmZy5yb2xsb3V0cywgNjApKSk7XG4gICAgY29uc3Qgcm9sbG91dFR1cm5zID0gbnVtKGNmZy5yb2xsb3V0VHVybnMsIDYwKTtcbiAgICBjb25zdCB0b3BLID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihudW0oY2ZnLnRvcEssIDMpKSk7XG4gICAgY29uc3QgY29tYmF0RmFjdG9yID0gbnVtKGNmZy5jb21iYXRGYWN0b3IsIDEuMCk7XG4gICAgY29uc3QgbG9zc0ZyYWMgPSBudW0oY2ZnLmxvc3NGcmFjLCAwLjUpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgICBjb25zdCBvdXJTdHJlbmd0aCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy50b3RhbFVuaXRzLCAwKTtcblxuICAgIGNvbnN0IGN4ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLngsIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY3kgPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueSwgMCkgLyBvdXJzLmxlbmd0aDtcblxuICAgIHR5cGUgQ2l0eSA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCBlbmVteUNpdGllczogQ2l0eVtdID0gY2l0aWVzXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKVxuICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpO1xuICAgIGlmIChlbmVteUNpdGllcy5sZW5ndGggPT09IDApIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIFtdKTtcblxuICAgIGNvbnN0IGNpdHlTY29yZSA9IChmcm9tOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9LCBjOiBDaXR5KSA9PlxuICAgICAgICBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZnJvbSwgYykgKyBnYXJyaXNvbldlaWdodCAqIGMuZ2Fycmlzb24gLSAoYy5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcblxuICAgIC8vIE9uZSByb2xsb3V0IGZyb20gYSBmb3JjZWQgZmlyc3QgdGFyZ2V0OiBzbm93YmFsbCBncmVlZGlseSAocmFuZG9taXplZCBhbW9uZyB0aGUgdG9wLUsgYmVzdCBieVxuICAgIC8vIHNjb3JlKSB1bnRpbCB0aW1lIHJ1bnMgb3V0IG9yIHdlIGNhbid0IGJlYXQgdGhlIG5leHQgZ2Fycmlzb24uIFJldHVybnMgY2FwdHVyZWQgXCJ2YWx1ZVwiLlxuICAgIGNvbnN0IHJvbGxvdXQgPSAoZmlyc3Q6IENpdHkpOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgc3RyZW5ndGggPSBvdXJTdHJlbmd0aDtcbiAgICAgICAgbGV0IHBvcyA9IHsgeDogY3gsIHk6IGN5IH07XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IGVuZW15Q2l0aWVzLnNsaWNlKCk7XG4gICAgICAgIGxldCB0ID0gMDtcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgbGV0IGZvcmNlZDogQ2l0eSB8IHVuZGVmaW5lZCA9IGZpcnN0O1xuICAgICAgICB3aGlsZSAocmVtYWluaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQ6IENpdHkgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoZm9yY2VkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZm9yY2VkO1xuICAgICAgICAgICAgICAgIGZvcmNlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFua2VkID0gcmVtYWluaW5nLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gY2l0eVNjb3JlKHBvcywgYSkgLSBjaXR5U2NvcmUocG9zLCBiKSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gcmFua2VkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKHRvcEssIHJhbmtlZC5sZW5ndGgpKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkgYnJlYWs7XG4gICAgICAgICAgICB0ICs9IGhleERpc3RhbmNlKHBvcywgdGFyZ2V0KTsgLy8gfjEgdGlsZS90dXJuXG4gICAgICAgICAgICBpZiAodCA+IHJvbGxvdXRUdXJucykgYnJlYWs7XG4gICAgICAgICAgICBpZiAoc3RyZW5ndGggPD0gdGFyZ2V0LmdhcnJpc29uICogY29tYmF0RmFjdG9yKSBicmVhazsgLy8gY2FuJ3QgdGFrZSBpdFxuICAgICAgICAgICAgc3RyZW5ndGggLT0gdGFyZ2V0LmdhcnJpc29uICogbG9zc0ZyYWM7XG4gICAgICAgICAgICB2YWx1ZSArPSAxICsgKHRhcmdldC5pc0NhcGl0YWwgPyAxIDogMCk7XG4gICAgICAgICAgICBwb3MgPSB7IHg6IHRhcmdldC54LCB5OiB0YXJnZXQueSB9O1xuICAgICAgICAgICAgY29uc3QgaSA9IHJlbWFpbmluZy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoaSA+PSAwKSByZW1haW5pbmcuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IGJlc3Q6IENpdHkgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGJlc3RBdmcgPSAtSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBjYW5kIG9mIGVuZW15Q2l0aWVzKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvbGxvdXRzOyByKyspIHN1bSArPSByb2xsb3V0KGNhbmQpO1xuICAgICAgICBjb25zdCBhdmcgPSBzdW0gLyByb2xsb3V0cztcbiAgICAgICAgaWYgKGF2ZyA+IGJlc3RBdmcpIHsgYmVzdEF2ZyA9IGF2ZzsgYmVzdCA9IGNhbmQ7IH1cbiAgICB9XG4gICAgaWYgKCFiZXN0KSByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBbXSk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBiZXN0O1xuICAgIGNvbnN0IG9yZGVycyA9IG91cnMubWFwKGcgPT4gKHsgZ2VuZXJhbElkOiBnLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSB9KSk7XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdILHVDQUF5QjtBQUV6QixrRkFBa0Y7QUFDbEYsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLHVFQUF1RTtBQUMxRCxRQUFBLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFFaEMsSUFBSSxXQUFXLEdBQW9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkYsU0FBUyxjQUFjLENBQUMsR0FBVztJQUMvQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1QsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLFVBQWdDLENBQUM7UUFDckMsSUFBSSxDQUFDO1lBQ0QsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2IsS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzNELEtBQUss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