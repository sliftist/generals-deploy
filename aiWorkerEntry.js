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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileDirFlags.ts", filename: "/root/generals/node_modules/typenode/compileDirFlags.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileDirFlags.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileDirFlags.ts","loaded":true,"sourceSHA256":"265c6f85eeb907386d25b75dc6b11c37b787f788b64d51924d57c5f052b4c91f","size":8100,"version":1,"evalStartTime":1782196172468,"evalEndTime":1782196172469}, moduleFnc: (function compileDirFlags_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", filename: "/root/generals/node_modules/typenode/compileRecordModuleRequires.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/typenode/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","path":"/root/generals/node_modules/typenode","filename":"/root/generals/node_modules/typenode/compileRecordModuleRequires.ts","loaded":true,"sourceSHA256":"9701d799d870e1117bdda5b6b1ef57e9d2a55fd14630e2d7a8416ad72c2e0fb7","size":3670,"version":1,"evalStartTime":1782196172469.01,"evalEndTime":1782196172469.02}, moduleFnc: (function compileRecordModuleRequires_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundler.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundler.ts","loaded":true,"sourceSHA256":"30c072ee646adbd818d776f22b2185a81c98ee3dfbd308e1b34876cdabb03dff","size":9004,"version":1,"evalStartTime":1782196172470.01,"evalEndTime":1782196172475.04}, moduleFnc: (function bundler_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/js-sha256/src/sha256.js", filename: "/root/generals/node_modules/js-sha256/src/sha256.js", isModuleMain: "/root/generals/node_modules/js-sha256", paths: ["/root/generals/node_modules/js-sha256/src/node_modules","/root/generals/node_modules/js-sha256/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/js-sha256/src/sha256.js","path":"/root/generals/node_modules/js-sha256/src","filename":"/root/generals/node_modules/js-sha256/src/sha256.js","loaded":true,"sourceSHA256":"2db6c8e554fbee14672368a0d7551a8ddd841ee96c91526eb7987a0179cfc717","size":18769,"version":1,"evalStartTime":1782196172471,"evalEndTime":1782196172471.01}, moduleFnc: (function sha_js(exports, require, module, __filename, __dirname) { /**
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleRequire.ts","loaded":true,"sourceSHA256":"49578775d45f6354669c3f29f6c2318f95495af6eea1d9cd136c89626f76394e","size":34216,"version":1,"evalStartTime":1782196172472,"evalEndTime":1782196172472.01}, moduleFnc: (function bundleRequire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", filename: "/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/bundleWrapper.ts","loaded":true,"sourceSHA256":"59f01474432e6ffc76323e5e684ce5f7931537223999780ab735af331faac1d2","size":16004,"version":1,"evalStartTime":1782196172472.02,"evalEndTime":1782196172475.01}, moduleFnc: (function bundleWrapper_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/caching.ts","loaded":true,"sourceSHA256":"18c7fe69d9133c820e876a09f89bca1d68337a67d8b1a04589d48e371a77cbe2","size":36358,"version":1,"evalStartTime":1782196172473,"evalEndTime":1782196172475,"allowclient":true}, moduleFnc: (function caching_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/misc.ts","loaded":true,"sourceSHA256":"9fb24f97ff53337f0c2b79dcb2cf03699e768351e01ce8199c98a968c81669a4","size":58046,"version":1,"evalStartTime":1782196172473.01,"evalEndTime":1782196172474.04,"allowclient":true}, moduleFnc: (function misc_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/types.ts","loaded":true,"sourceSHA256":"b3eafb6059634f367bc20abd9732161ad4f3498f56a540361080950856a4cb2a","size":1258,"version":1,"evalStartTime":1782196172474,"evalEndTime":1782196172474.01,"allowclient":true}, moduleFnc: (function types_ts(exports, require, module, __filename, __dirname) { "use strict";
Object.defineProperty(exports, "__esModule", { value: true , configurable: true});
//exports.canHaveChildren = void 0;
function canHaveChildren(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
exports.canHaveChildren = canHaveChildren;
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "ea937c29143cb2e8959e6cd066d49be7fe410ccd03431380474bf4dd84de697f"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", filename: "/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/src/node_modules","/root/generals/node_modules/sliftutils/node_modules/socket-function/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","path":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting","filename":"/root/generals/node_modules/sliftutils/node_modules/socket-function/src/formatting/format.ts","loaded":true,"sourceSHA256":"75f76504af1be1552a350c93a747273950b42fb0959d5acee5ecfecb4a092947","size":55197,"version":1,"evalStartTime":1782196172474.02,"evalEndTime":1782196172474.03,"allowclient":true}, moduleFnc: (function format_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", filename: "/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts", isModuleMain: undefined, paths: ["/root/generals/node_modules/sliftutils/bundler/node_modules","/root/generals/node_modules/sliftutils/node_modules","/root/generals/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","path":"/root/generals/node_modules/sliftutils/bundler","filename":"/root/generals/node_modules/sliftutils/bundler/sourceMaps.ts","loaded":true,"sourceSHA256":"1c98494daf4e65ea335f9e33d3b29c8238ff78e910fdc9aade2a916c6104c869","size":27639,"version":1,"evalStartTime":1782196172475.02,"evalEndTime":1782196172475.03}, moduleFnc: (function sourceMaps_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts", filename: "/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/aiWorkerEntry.ts","loaded":true,"sourceSHA256":"650997b309ba17f2e16794b02dde8bfca94d688657e87d026ebd4202d6f57641","size":5509,"version":1,"evalStartTime":1782196172476,"evalEndTime":1782196172484.03,"allowclient":true,"hotreload":true}, moduleFnc: (function aiWorkerEntry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/index.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/index.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/index.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/index.ts","loaded":true,"sourceSHA256":"0b232991d43f3d4d42297348935532c8eeaba9a4cb27a252903150aa258eec78","size":3013,"version":1,"evalStartTime":1782196172476.01,"evalEndTime":1782196172484.02,"allowclient":true,"hotreload":true}, moduleFnc: (function index_ts(exports, require, module, __filename, __dirname) { "use strict";
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
var registry_1 = require("./registry");
Object.defineProperty(exports, "getStrategy", { enumerable: true, get: function () { return registry_1.getStrategy; } , configurable: true});
Object.defineProperty(exports, "getStrategyIds", { enumerable: true, get: function () { return registry_1.getStrategyIds; } , configurable: true});
Object.defineProperty(exports, "registerStrategy", { enumerable: true, get: function () { return registry_1.registerStrategy; } , configurable: true});
// merged inline sourcemap
 /* _JS_SOURCE_HASH = "81bf163b4c8bbb4a1186c71346e29eac9e83bf67ee3bb9758845787b475f8572"; */
    }) });
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/beeline.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/beeline.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/beeline.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/beeline.ts","loaded":true,"sourceSHA256":"848c5637384d6c2602928f092df5ba3faaf78baad9045f22b232ef5960d422a4","size":1801,"version":1,"evalStartTime":1782196172476.02,"evalEndTime":1782196172477.04,"allowclient":true,"hotreload":true}, moduleFnc: (function beeline_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/aiPlanner.ts", filename: "/root/generals-build/src/gameUI2/ai/aiPlanner.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/aiPlanner.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/aiPlanner.ts","loaded":true,"sourceSHA256":"d6697eb76225c96a5c8c41966e527f2ccd5ff92d073140d79225abb23f1b2bca","size":6469,"version":1,"evalStartTime":1782196172476.03,"evalEndTime":1782196172476.04,"allowclient":true,"hotreload":true}, moduleFnc: (function aiPlanner_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/growthPolicy.ts", filename: "/root/generals-build/src/gameUI2/ai/growthPolicy.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/growthPolicy.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/growthPolicy.ts","loaded":true,"sourceSHA256":"71bfc7326d48614ee5d3203421801b379adfb580fd35340e948bf13127c5c804","size":5151,"version":1,"evalStartTime":1782196172477,"evalEndTime":1782196172477.01,"allowclient":true,"hotreload":true}, moduleFnc: (function growthPolicy_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/registry.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/registry.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/registry.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/registry.ts","loaded":true,"sourceSHA256":"d5b6dde5c65a18cd67e7ac01b9995e7ed8cf22343a854f39332777c21462089c","size":3244,"version":1,"evalStartTime":1782196172477.02,"evalEndTime":1782196172477.03,"allowclient":true,"hotreload":true}, moduleFnc: (function registry_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/greedyCity.ts","loaded":true,"sourceSHA256":"42ac0bb2c7df5abbe4cba4c4fb36234fb3615d5a2e6c1aed46ae1efecb99b581","size":8560,"version":1,"evalStartTime":1782196172477.05,"evalEndTime":1782196172477.06,"allowclient":true,"hotreload":true}, moduleFnc: (function greedyCity_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/consolidate.ts","loaded":true,"sourceSHA256":"567b5b5d6f14cbc2cf50ec2d2dfa917a57eae5a6ffb77ab92bae1a89d66d511c","size":10544,"version":1,"evalStartTime":1782196172477.07,"evalEndTime":1782196172478,"allowclient":true,"hotreload":true}, moduleFnc: (function consolidate_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/focusFire.ts","loaded":true,"sourceSHA256":"39df806529aa4e98f854c3e21b7f4a47d1667eebd527031017286fb08016ba99","size":9404,"version":1,"evalStartTime":1782196172478.01,"evalEndTime":1782196172478.02,"allowclient":true,"hotreload":true}, moduleFnc: (function focusFire_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/focusWeakestFaction.ts","loaded":true,"sourceSHA256":"bc9a06e39651d8cba4c0554a8ba44d0a3f10fe58e085df12f715696f80f385ea","size":13603,"version":1,"evalStartTime":1782196172478.03,"evalEndTime":1782196172478.04,"allowclient":true,"hotreload":true}, moduleFnc: (function focusWeakestFaction_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/monteCarlo.ts","loaded":true,"sourceSHA256":"033e12e03577ad3c6680b10c2cd3eb3709497520393a4cc7b23dfee27335b469","size":16481,"version":1,"evalStartTime":1782196172478.05,"evalEndTime":1782196172478.06,"allowclient":true,"hotreload":true}, moduleFnc: (function monteCarlo_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/threatAware.ts","loaded":true,"sourceSHA256":"9480e88e9e35e2d5fcb4afb7b809a46f34f78376372a755792f1394c368c57c7","size":19093,"version":1,"evalStartTime":1782196172479,"evalEndTime":1782196172479.01,"allowclient":true,"hotreload":true}, moduleFnc: (function threatAware_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/influenceMap.ts","loaded":true,"sourceSHA256":"e0ede60979f51a76b5cd550ad98ed95e8602729519014a1cab4ce8a333c0244b","size":20947,"version":1,"evalStartTime":1782196172479.02,"evalEndTime":1782196172479.03,"allowclient":true,"hotreload":true}, moduleFnc: (function influenceMap_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/territory.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/territory.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/territory.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/territory.ts","loaded":true,"sourceSHA256":"a245c15149db037cdd3adcf62c12863688c90d7b29ba7c86e10a8e40701c93d9","size":18502,"version":1,"evalStartTime":1782196172479.04,"evalEndTime":1782196172479.05,"allowclient":true,"hotreload":true}, moduleFnc: (function territory_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/snowball.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/snowball.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/snowball.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/snowball.ts","loaded":true,"sourceSHA256":"42872bd3d0f2c5bc432ca97f46159fbacfd52bff50bed8d5d6a25ff16ad04d11","size":21112,"version":1,"evalStartTime":1782196172480,"evalEndTime":1782196172480.01,"allowclient":true,"hotreload":true}, moduleFnc: (function snowball_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/coordinate.ts","loaded":true,"sourceSHA256":"625aa4320e1cfaa78500cede40e5fc0f503b88737a51d308ce8234751377f563","size":27793,"version":1,"evalStartTime":1782196172480.02,"evalEndTime":1782196172480.03,"allowclient":true,"hotreload":true}, moduleFnc: (function coordinate_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominion.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominion.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominion.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominion.ts","loaded":true,"sourceSHA256":"552ab7df74e2e9172a0c4e7b4df9ff515c2aaeded2fc5fe2fac65f21944e5dfc","size":23792,"version":1,"evalStartTime":1782196172480.04,"evalEndTime":1782196172481,"allowclient":true,"hotreload":true}, moduleFnc: (function dominion_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominionFront.ts","loaded":true,"sourceSHA256":"df31669904b5569eb30c50572d639484b59e2cab773c31e146f8a343054f8889","size":24629,"version":1,"evalStartTime":1782196172481.01,"evalEndTime":1782196172481.02,"allowclient":true,"hotreload":true}, moduleFnc: (function dominionFront_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit.ts","loaded":true,"sourceSHA256":"7310d0f328383028fc26b3f6a0fb33ad4ca2ba935e8eb2633dd6be98fc333a75","size":13384,"version":1,"evalStartTime":1782196172481.03,"evalEndTime":1782196172481.04,"allowclient":true,"hotreload":true}, moduleFnc: (function dominionSplit_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/dominionSplit2.ts","loaded":true,"sourceSHA256":"6e0d64d311ec1ef6950613ab3e6d7dbfa2aae170428b945b6088c6e96f611230","size":16212,"version":1,"evalStartTime":1782196172482,"evalEndTime":1782196172482.01,"allowclient":true,"hotreload":true}, moduleFnc: (function dominionSplit_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/evalGreedy.ts","loaded":true,"sourceSHA256":"7533f7a046d3790107dc3c1c64ca368ea0d83fbe9fff102a25e499d83a3da353","size":26581,"version":1,"evalStartTime":1782196172482.02,"evalEndTime":1782196172482.03,"allowclient":true,"hotreload":true}, moduleFnc: (function evalGreedy_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/rollout.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/rollout.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/rollout.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/rollout.ts","loaded":true,"sourceSHA256":"edbe4bd2a8c72a8ef5369780d6b1c0702930d47d4c19374d428f894c4cead51f","size":27528,"version":1,"evalStartTime":1782196172483,"evalEndTime":1782196172483.01,"allowclient":true,"hotreload":true}, moduleFnc: (function rollout_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts", filename: "/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/strategies/node_modules","/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts","path":"/root/generals-build/src/gameUI2/ai/strategies","filename":"/root/generals-build/src/gameUI2/ai/strategies/evalCoarse.ts","loaded":true,"sourceSHA256":"c9ef5e8b28aeecd72cb30fb5aa16f5ac065fcaa7b7613e51901d903c2e881189","size":44900,"version":1,"evalStartTime":1782196172483.02,"evalEndTime":1782196172484.01,"allowclient":true,"hotreload":true}, moduleFnc: (function evalCoarse_ts(exports, require, module, __filename, __dirname) { "use strict";
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
;(function initModule(serialized) {         globalThis.registeredModules = globalThis.registeredModules || {};         globalThis.registeredModules[serialized.id] = serialized;         if (serialized.isModuleMain) {             globalThis.registeredModules[serialized.isModuleMain] = serialized;         }     })({ id: "/root/generals-build/src/gameUI2/ai/boardFeatures.ts", filename: "/root/generals-build/src/gameUI2/ai/boardFeatures.ts", isModuleMain: undefined, paths: ["/root/generals-build/src/gameUI2/ai/node_modules","/root/generals-build/src/gameUI2/node_modules","/root/generals-build/src/node_modules","/root/generals-build/node_modules","/root/node_modules","/node_modules"], moduleFields: {"id":"/root/generals-build/src/gameUI2/ai/boardFeatures.ts","path":"/root/generals-build/src/gameUI2/ai","filename":"/root/generals-build/src/gameUI2/ai/boardFeatures.ts","loaded":true,"sourceSHA256":"2570a6bccadb9a72c0ce44329793175744bc1099043218fd03c5c152962c5cd4","size":11199,"version":1,"evalStartTime":1782196172483.03,"evalEndTime":1782196172484,"allowclient":true,"hotreload":true}, moduleFnc: (function boardFeatures_ts(exports, require, module, __filename, __dirname) { "use strict";
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

;globalThis.__BUNDLE_HASH__ = "4d171e571730dee9a6ab44a37186d1094afcf42b9d93a343620ef100d0710dd1";;(function bundleRequire(config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGlsZURpckZsYWdzLnRzIiwiY29tcGlsZVJlY29yZE1vZHVsZVJlcXVpcmVzLnRzIiwiYnVuZGxlci50cyIsImJ1bmRsZVJlcXVpcmUudHMiLCJidW5kbGVXcmFwcGVyLnRzIiwiY2FjaGluZy50cyIsIm1pc2MudHMiLCJ0eXBlcy50cyIsImZvcm1hdC50cyIsInNvdXJjZU1hcHMudHMiLCJhaVdvcmtlckVudHJ5LnRzIiwiaW5kZXgudHMiLCJiZWVsaW5lLnRzIiwiYWlQbGFubmVyLnRzIiwiZ3Jvd3RoUG9saWN5LnRzIiwicmVnaXN0cnkudHMiLCJncmVlZHlDaXR5LnRzIiwiY29uc29saWRhdGUudHMiLCJmb2N1c0ZpcmUudHMiLCJmb2N1c1dlYWtlc3RGYWN0aW9uLnRzIiwibW9udGVDYXJsby50cyIsInRocmVhdEF3YXJlLnRzIiwiaW5mbHVlbmNlTWFwLnRzIiwidGVycml0b3J5LnRzIiwic25vd2JhbGwudHMiLCJjb29yZGluYXRlLnRzIiwiZG9taW5pb24udHMiLCJkb21pbmlvbkZyb250LnRzIiwiZG9taW5pb25TcGxpdC50cyIsImRvbWluaW9uU3BsaXQyLnRzIiwiZXZhbEdyZWVkeS50cyIsInJvbGxvdXQudHMiLCJldmFsQ29hcnNlLnRzIiwiYm9hcmRGZWF0dXJlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICAgICAgTG9va3MgZm9yIGFkamFjZW50IHguZmxhZyBmaWxlcywgc2V0dGluZyBhbiB4IGZsYWcgb24gdGhlIG1vZHVsZSBpZiB0aGV5IGV4aXN0LlxuICogICAgICAtIEFsc28gY2hlY2tzIHBhcmVudCBkaXJlY3Rvcmllc1xuICogXG4gKiAgICAgIC0gRXgsIGlmIHRlc3QuanMgaGFzIGEgc2libGluZyBmaWxlIGNhbGxlZCBhbGxvd2NsaWVudC5mbGFnLCB0aGVuIHRoZSB0ZXN0LmpzXG4gKiAgICAgICAgICBtb2R1bGUgaGFzIGFsbG93Y2xpZW50ID0gdHJ1ZSBzZXQgb24gaXQuXG4gKi9cblxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5cbi8vIE5PVEU6IE5vdCB1c2luZyBpbXBvcnQsIGFzIHRoZSB0eXBlcyBjb21wbGFpbiBhYm91dCB3aGF0IHdlIGFyZSBkb2luZyB0b28gbXVjaC5cbmNvbnN0IE1vZHVsZSA9IHJlcXVpcmUoXCJtb2R1bGVcIik7XG5cbi8vIFdlIG5lZWQgYXQgbGVhc3QgMSBleHBvcnQsIHRvIGZvcmNlIHRoaXMgdG8gYmUgdHJlYXRlZCBsaWtlIGEgbW9kdWxlXG5leHBvcnQgY29uc3QgZm9yY2VNb2R1bGUgPSB0cnVlO1xuXG5sZXQgZmxhZ3NQZXJEaXI6IHsgW2Rpcm5hbWU6IHN0cmluZ106IHsgW2ZsYWc6IHN0cmluZ106IHRydWUgfSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGdldEZsYWdzRm9yRGlyKGRpcjogc3RyaW5nKSB7XG4gICAgbGV0IGZsYWdzID0gZmxhZ3NQZXJEaXJbZGlyXTtcbiAgICBpZiAoIWZsYWdzKSB7XG4gICAgICAgIGZsYWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZmxhZ3NQZXJEaXJbZGlyXSA9IGZsYWdzO1xuICAgICAgICBsZXQgZmlsZXNJbkRpcjogc3RyaW5nW10gfCB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaWxlc0luRGlyID0gZnMucmVhZGRpclN5bmMoZGlyKTtcbiAgICAgICAgfSBjYXRjaCB7IH1cbiAgICAgICAgaWYgKGZpbGVzSW5EaXIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGZsYWcgb2YgZmlsZXNJbkRpci5maWx0ZXIoeCA9PiB4LmVuZHNXaXRoKFwiLmZsYWdcIikpKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3NbZmxhZy5zbGljZSgwLCAtXCIuZmxhZ1wiLmxlbmd0aCldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxhZ3M7XG59XG5cbmNvbnN0IGJhc2UgPSBNb2R1bGUucHJvdG90eXBlLmxvYWQ7XG5Nb2R1bGUucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAodGhpczogTm9kZUpTLk1vZHVsZSkge1xuICAgIGxldCByZXN1bHQgPSBiYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodGhpcy5maWxlbmFtZSkge1xuICAgICAgICBsZXQgZmxhZ3M6IHsgW2ZsYWc6IHN0cmluZ106IHRydWUgfSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgbGV0IGRpclBhcnRzID0gdGhpcy5maWxlbmFtZS5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKS5zcGxpdChcIi9cIikuc2xpY2UoMCwgLTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkaXJQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmbGFncywgZ2V0RmxhZ3NGb3JEaXIoZGlyUGFydHMuc2xpY2UoMCwgaSkuam9pbihcIi9cIikpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZmxhZ3MpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZsYWdzW2tleV07XG4gICAgICAgICAgICAvLyBOT1RFOiBEb24ndCBzZXQgZmxhZ3Mgd2hpY2ggYXJlIEVYUExJQ0lUTFkgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoKHRoaXMgYXMgYW55KVtrZXldICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLyoqXG4gKiAgICAgIEFkZHMgbW9kdWxlLnJlcXVpcmVzLCB3aGljaCBpbmRpY2F0ZXMgdGhlIHJlc3VsdCBvZiBldmVyeSByZXF1aXJlIHBlciBtb2R1bGUuXG4gKi9cblxuLy8gTk9URTogTm90IHVzaW5nIGltcG9ydCwgYXMgdGhlIHR5cGVzIGNvbXBsYWluIGFib3V0IHdoYXQgd2UgYXJlIGRvaW5nIHRvbyBtdWNoLlxuY29uc3QgTW9kdWxlID0gZXZhbChcInJlcXVpcmVcIikoXCJtb2R1bGVcIik7XG5cbi8vIFdlIG5lZWQgYXQgbGVhc3QgMSBleHBvcnQsIHRvIGZvcmNlIHRoaXMgdG8gYmUgdHJlYXRlZCBsaWtlIGEgbW9kdWxlXG5leHBvcnQgY29uc3QgZm9yY2VNb2R1bGUgPSB0cnVlO1xuXG5jb25zdCBiYXNlID0gTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlO1xuTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlID0gZnVuY3Rpb24gKHRoaXM6IE5vZGVKUy5Nb2R1bGUsIHJlcXVlc3Q6IHN0cmluZykge1xuICAgIHRoaXMucmVxdWlyZXMgPSB0aGlzLnJlcXVpcmVzIHx8IHt9O1xuICAgIHRoaXMuYXN5bmNSZXF1aXJlcyA9IHRoaXMuYXN5bmNSZXF1aXJlcyB8fCB7fVxuICAgIGlmICh0aGlzLmV2YWxFbmRUaW1lICYmICF0aGlzLnJlcXVpcmVzW3JlcXVlc3RdKSB7XG4gICAgICAgIHRoaXMuYXN5bmNSZXF1aXJlc1tyZXF1ZXN0XSA9IHRydWU7XG4gICAgfVxuICAgIC8vIE5PVEU6IERvaW5nIHJlc29sdmVGaWxlbmFtZSBvbiBldmVyeSByZXF1aXJlIGJyZWFrcyBhIGxvdCBvZiB0aGUgY2FjaGluZyBOb2RlSlMgZG9lc1xuICAgIC8vICB0byB0cnkgdG8gYXZvaWQgY2FsbGluZyByZXNvbHZlRmlsZW5hbWUuIEhvd2V2ZXIuLi4gdGhlaXIgY2FjaGluZyBpcyBwcm9iYWJseSBubyBsb25nZXJcbiAgICAvLyAgbmVlZGVkIGFueW1vcmUuXG4gICAgdGhpcy5yZXF1aXJlc1tyZXF1ZXN0XSA9IE1vZHVsZS5fcmVzb2x2ZUZpbGVuYW1lKHJlcXVlc3QsIHRoaXMsIGZhbHNlKTtcblxuXG4gICAgcmV0dXJuIGJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07IiwiaW1wb3J0IHsgc2hhMjU2IH0gZnJvbSBcImpzLXNoYTI1NlwiO1xuaW1wb3J0IHsgYnVuZGxlUmVxdWlyZSwgQnVuZGxlUmVxdWlyZUNvbmZpZyB9IGZyb20gXCIuL2J1bmRsZVJlcXVpcmVcIjtcbmltcG9ydCB7IHdyYXBNb2R1bGUgfSBmcm9tIFwiLi9idW5kbGVXcmFwcGVyXCI7XG5pbXBvcnQgeyBhZGRUb0luUHJvZ3Jlc3NTb3VyY2VNYXAsIGVuY29kZVNvdXJjZU1hcExpbmVDb21tZW50LCBmaW5hbGl6ZUluUHJvZ3Jlc3NTb3VyY2VNYXAsIGdldEluUHJvZ3Jlc3NTb3VyY2VNYXAsIEluUHJvZ3Jlc3NTb3VyY2VNYXAsIHJlbW92ZVNvdXJjZU1hcCB9IGZyb20gXCIuL3NvdXJjZU1hcHNcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1bmRsZShjb25maWc6IHtcbiAgICBtb2R1bGVzOiAodHlwZW9mIHJlcXVpcmUuY2FjaGVbXCJcIl0pW107XG4gICAgcm9vdFBhdGg6IHN0cmluZztcbiAgICBlbnRyeVBvaW50czogc3RyaW5nW107XG59KTogUHJvbWlzZTx7XG4gICAgYnVuZGxlOiBzdHJpbmc7XG59PiB7XG4gICAgY29uc3QgeyBtb2R1bGVzLCByb290UGF0aCwgZW50cnlQb2ludHMgfSA9IGNvbmZpZztcblxuICAgIC8vIE5PVEU6IFdlIENPVUxEIHVzZSBhbiBcImluZGV4IHNvdXJjZSBtYXBcIiwgd2hpY2ggY29udGFpbnMgb3RoZXIgc291cmNlbWFwc1xuICAgIC8vICBhbmQgZ2l2ZXMgb2Zmc2V0cyBmb3IgdGhlbS4gSG93ZXZlci4uLiB0b29saW5nIHN1cHBvcnQgd2lsbCBpcyBiZXR0ZXJcbiAgICAvLyAgZm9yIHJlZ3VsYXIgc291cmNlbWFwcywgYW5kIGl0J3MgbW9yZSBmbGV4aWJsZS5cblxuICAgIGxldCBpblByb2dyZXNzU291cmNlTWFwOiBJblByb2dyZXNzU291cmNlTWFwID0ge1xuICAgICAgICBzb3VyY2VzOiBbXSxcbiAgICAgICAgbWFwcGluZ3M6IFtdLFxuICAgIH07XG5cbiAgICBsZXQgY29kZSA9IFwiXCI7XG4gICAgbGV0IGN1ckxpbmVDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgaWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gICAgICAgIGxldCBuZXdDb2RlID0gd3JhcE1vZHVsZShtb2R1bGUpO1xuXG4gICAgICAgIGxldCB7IHNvdXJjZU1hcCwgY29kZTogbmV3Q29kZTIgfSA9IHJlbW92ZVNvdXJjZU1hcChuZXdDb2RlKTtcbiAgICAgICAgbmV3Q29kZSA9IG5ld0NvZGUyO1xuICAgICAgICBpZiAoc291cmNlTWFwKSB7XG4gICAgICAgICAgICBsZXQgaW5Qcm9ncmVzcyA9IGdldEluUHJvZ3Jlc3NTb3VyY2VNYXAoc291cmNlTWFwKTtcbiAgICAgICAgICAgIGZvciAobGV0IG1hcHBpbmcgb2YgaW5Qcm9ncmVzcy5tYXBwaW5ncykge1xuICAgICAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkTGluZSArPSBjdXJMaW5lQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUb0luUHJvZ3Jlc3NTb3VyY2VNYXAoaW5Qcm9ncmVzc1NvdXJjZU1hcCwgaW5Qcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlICs9IG5ld0NvZGUgKyBcIlxcblwiO1xuICAgICAgICBjdXJMaW5lQ291bnQgKz0gKG5ld0NvZGUubWF0Y2goL1xcbi9nKSB8fCBbXSkubGVuZ3RoICsgMTtcbiAgICB9XG4gICAgY29kZSArPSBcIlxcbi8qIElubGluZWQgYnVmZmVyIGltcGxlbWVudGF0aW9uOiAqL1xcblwiO1xuICAgIGNvZGUgKz0gYFxcbjtcXG4ke2ZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyBcIi9idWZmZXIuanNcIikudG9TdHJpbmcoKX1cXG47XFxuYDtcbiAgICBjb2RlICs9IGBcXG47Z2xvYmFsVGhpcy5fX0JVTkRMRV9IQVNIX18gPSAke0pTT04uc3RyaW5naWZ5KHNoYTI1Nihjb2RlKSl9O2A7XG4gICAgbGV0IGJ1bmRsZUNvbmZpZzogQnVuZGxlUmVxdWlyZUNvbmZpZyA9IHtcbiAgICAgICAgcm9vdFBhdGgsXG4gICAgfTtcbiAgICBjb2RlICs9IGA7KCR7YnVuZGxlUmVxdWlyZS50b1N0cmluZygpfSkoJHtKU09OLnN0cmluZ2lmeShidW5kbGVDb25maWcpfSk7YDtcbiAgICAvLyBEZWxheSB0aGUgaW5pdGlhbCByZXF1aXJlcywgc28gb3VyIGV4dGVuc2lvbiBjYW4gYm9vdCBhbmQgd2UgY2FuIGRlYnVnIHN0YXJ0dXAgZXJyb3JzXG4gICAgY29kZSArPSBcIlxcbjtzZXRUaW1lb3V0KCgpID0+IHtcIjtcbiAgICBmb3IgKGxldCBlbnRyeVBvaW50IG9mIGVudHJ5UG9pbnRzKSB7XG4gICAgICAgIGNvZGUgKz0gYFxcbjtnbG9iYWxUaGlzLnJlcXVpcmUoJHtKU09OLnN0cmluZ2lmeShlbnRyeVBvaW50KX0pO2A7XG4gICAgfVxuICAgIGNvZGUgKz0gXCJcXG47fSk7XCI7XG4gICAgY29kZSArPSBcIlxcblwiICsgZW5jb2RlU291cmNlTWFwTGluZUNvbW1lbnQoZmluYWxpemVJblByb2dyZXNzU291cmNlTWFwKGluUHJvZ3Jlc3NTb3VyY2VNYXApKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBidW5kbGU6IGNvZGUsXG4gICAgfTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBfX0JVTkRMRV9IQVNIX186IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RCdW5kbGVIYXNoKGNvZGU6IHN0cmluZykge1xuICAgIGxldCBtYXRjaCA9IGNvZGUubWF0Y2goLztnbG9iYWxUaGlzLl9fQlVORExFX0hBU0hfXyA9IFwiKFteXCJdKylcIjsvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBtYXRjaFsxXTtcbn0iLCJpbXBvcnQgeyBTZXJpYWxpemVkTW9kdWxlIH0gZnJvbSBcIi4vYnVuZGxlV3JhcHBlclwiO1xuXG4vLyBTZXRzIGdsb2JhbFRoaXMucmVxdWlyZSA9IC4uLiwgdXRpbGl6aW5nIHJlZ2lzdGVyZWRNb2R1bGVzIChmcm9tIGJ1bmRsZVdyYXBwZXIudHMpIHdoZW4gcmVxdWlyZSBpcyBjYWxsZWRcbmV4cG9ydCBpbnRlcmZhY2UgQnVuZGxlUmVxdWlyZUNvbmZpZyB7XG4gICAgcm9vdFBhdGg6IHN0cmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBidW5kbGVSZXF1aXJlKGNvbmZpZzogQnVuZGxlUmVxdWlyZUNvbmZpZykge1xuICAgIGdsb2JhbFRoaXMucHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcyB8fCB7XG4gICAgICAgIGVudjoge1xuICAgICAgICAgICAgTk9ERV9FTlY6IFwicHJvZHVjdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICB2ZXJzaW9uczoge30sXG4gICAgICAgIG9uOiAoKSA9PiB7IH0sXG4gICAgfTtcbiAgICAvLyBVc2UgcHJvZHVjdGlvbiwgZm9yIGNvbnNpc3RlbmN5IChhbmQgc28gbW9ieCBkb2Vzbid0IGJyZWFrKVxuICAgIGdsb2JhbFRoaXMucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBnbG9iYWxUaGlzLnByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwicHJvZHVjdGlvblwiO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkud2luZG93ID0gKGdsb2JhbFRoaXMgYXMgYW55KS53aW5kb3cgfHwgZ2xvYmFsVGhpcztcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLmdsb2JhbCA9IChnbG9iYWxUaGlzIGFzIGFueSkuZ2xvYmFsIHx8IGdsb2JhbFRoaXM7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5zZXRJbW1lZGlhdGUgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLnNldEltbWVkaWF0ZSB8fCBnbG9iYWxUaGlzLnNldFRpbWVvdXQ7XG5cbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLkJPT1RFRF9FREdFX05PREUgPSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgYnVpbHRJbk1vZHVsZUV4cG9ydHM6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9ID0ge1xuICAgICAgICB3b3JrZXJfdGhyZWFkczoge1xuICAgICAgICAgICAgaXNNYWluVGhyZWFkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB1dGlsOiB7XG4gICAgICAgICAgICAvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL3V0aWwuaHRtbCN1dGlsX3V0aWxfaW5oZXJpdHNfY29uc3RydWN0b3Jfc3VwZXJjb25zdHJ1Y3RvclxuICAgICAgICAgICAgaW5oZXJpdHMoY29uc3RydWN0b3I6IGFueSwgc3VwZXJDb25zdHJ1Y3RvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRleHREZWNvZGVyOiBUZXh0RGVjb2RlcixcbiAgICAgICAgICAgIFRleHRFbmNvZGVyOiBUZXh0RW5jb2RlcixcbiAgICAgICAgfSxcbiAgICAgICAgYnVmZmVyOiB7IEJ1ZmZlciB9LFxuICAgICAgICBzdHJlYW06IHtcbiAgICAgICAgICAgIC8vIEhBQ0s6IE5lZWRlZCB0byBnZXQgU0FYIEpTIHRvIHdvcmsgY29ycmVjdGx5LlxuICAgICAgICAgICAgU3RyZWFtOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICBUcmFuc2Zvcm06IGZ1bmN0aW9uICgpIHsgfSxcblxuICAgICAgICAgICAgV3JpdGFibGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdGltZXJzOiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBBZGQgYWxsIG1lbWJlcnMgb2YgdGltZXJzXG4gICAgICAgICAgICBzZXRJbW1lZGlhdGU6IGdsb2JhbFRoaXMuc2V0SW1tZWRpYXRlLFxuICAgICAgICB9LFxuICAgICAgICBjaGlsZF9wcm9jZXNzOiB7fSxcbiAgICAgICAgZXZlbnRzOiBjbGFzcyBFdmVudEVtaXR0ZXIgeyB9LFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiByZXF1aXJlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IGJ1aWx0SW5SZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgbGV0IGFsbEJ1aWx0SW5Nb2R1bGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgIGFsbEJ1aWx0SW5Nb2R1bGVzLmFkZChcImVsZWN0cm9uXCIpO1xuICAgICAgICBhbGxCdWlsdEluTW9kdWxlcy5hZGQoXCJvcmlnaW5hbC1mc1wiKTtcbiAgICAgICAgYWxsQnVpbHRJbk1vZHVsZXMuYWRkKFwidnNjb2RlXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBidWlsdHMgaW5zIHRvIHVzZSB0aGUgYWN0dWFsIGJ1aWx0IGlucyFcbiAgICAgICAgICAgIGxldCB7IGJ1aWx0aW5Nb2R1bGVzIH0gPSByZXF1aXJlKFwibm9kZTptb2R1bGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgYnVpbHRpbk1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICBhbGxCdWlsdEluTW9kdWxlcy5hZGQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7IH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgYWxsQnVpbHRJbk1vZHVsZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShidWlsdEluTW9kdWxlRXhwb3J0cywga2V5LCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbHRJblJlcXVpcmUoa2V5KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBKdXN0IHBhdGgucmVzb2x2ZSAoYnV0IG5lZWRzIHRvIGJlIHJlaW1wbGVtZW50ZWQsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGltcG9ydHMpXG4gICAgZnVuY3Rpb24gcGF0aFJlc29sdmUoLi4ucGF0aHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCBlbXB0eSBwYXRoIHNlZ21lbnRzIGFycmF5XG4gICAgICAgIGxldCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IGlzV2luZG93c1BhdGggPSBmYWxzZTtcblxuICAgICAgICBwYXRocyA9IHBhdGhzLm1hcCh4ID0+IHgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIikpO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZWFjaCBwYXRoIGFyZ3VtZW50XG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFdpbmRvd3MgZHJpdmUgbGV0dGVyIChlLmcuLCBDOi8pXG4gICAgICAgICAgICBpZiAoL15bQS1aYS16XTovLnRlc3QocGF0aCkpIHtcbiAgICAgICAgICAgICAgICBpc1dpbmRvd3NQYXRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJpdmUgbGV0dGVyIGZvciBwcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aG91dERyaXZlID0gcGF0aC5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICBpZiAod2l0aG91dERyaXZlLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gW3BhdGguc2xpY2UoMCwgMildOyAvLyBLZWVwIGRyaXZlIGxldHRlciBhbmQgcmVzZXQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBsZWFkaW5nIHNsYXNoLCBrZWVwIGN1cnJlbnQgc2VnbWVudHMgKHJlbGF0aXZlIHRvIGN1cnJlbnQgZHJpdmUgcGF0aClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCB8fCAhc2VnbWVudHNbMF0ubWF0Y2goL15bQS1aYS16XTovKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBbcGF0aC5zbGljZSgwLCAyKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSByZXN0IG9mIHRoZSBwYXRoIHBhcnRzXG4gICAgICAgICAgICAgICAgc2VnbWVudHMucHVzaCguLi53aXRob3V0RHJpdmUuc3BsaXQoXCIvXCIpLmZpbHRlcih4ID0+IHgpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgYWJzb2x1dGUgcGF0aCwgcmVzZXQgc2VnbWVudHMgYnV0IGtlZXAgZHJpdmUgbGV0dGVyIGlmIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzV2luZG93c1BhdGggJiYgc2VnbWVudHMubGVuZ3RoID4gMCAmJiBzZWdtZW50c1swXS5tYXRjaCgvXltBLVphLXpdOi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlID0gc2VnbWVudHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gW2RyaXZlXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3BsaXQgcGF0aCBpbnRvIHNlZ21lbnRzIGFuZCBwcm9jZXNzIGVhY2hcbiAgICAgICAgICAgIGNvbnN0IHBhdGhQYXJ0cyA9IHBhdGguc3BsaXQoXCIvXCIpLmZpbHRlcih4ID0+IHgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhdGhQYXJ0cykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0ID09PSBcIi4uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcG9wIG9mZiB0aGUgZHJpdmUgbGV0dGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAoaXNXaW5kb3dzUGF0aCA/IDEgOiAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQgIT09IFwiLlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZWdtZW50IGlmIG5vdCBjdXJyZW50IGRpcmVjdG9yeSBtYXJrZXJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21iaW5lIHNlZ21lbnRzIGludG8gZmluYWwgcGF0aFxuICAgICAgICBsZXQgcmVzdWx0ID0gc2VnbWVudHMuam9pbihcIi9cIik7XG4gICAgICAgIGlmICghaXNXaW5kb3dzUGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCIvXCIgKyByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlybmFtZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gcGF0aC5zcGxpdChcIi9cIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVpcmVDYWNoZTogeyBbaWQ6IHN0cmluZ106IE5vZGVKUy5Nb2R1bGUgfSA9IHt9O1xuXG4gICAgbGV0IHJvb3RNb2R1bGUgPSBjcmVhdGVNb2R1bGUoe1xuICAgICAgICBwYXJlbnRNb2R1bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgcmVzb2x2ZUFic29sdXRlUGF0aDogY29uZmlnLnJvb3RQYXRoICsgXCIvcm9vdFBsYWNlaG9sZGVyXCIsXG4gICAgfSk7XG4gICAgZ2xvYmFsVGhpcy5yZXF1aXJlID0gcm9vdE1vZHVsZS5yZXF1aXJlIGFzIGFueTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZShjb25maWc6IHtcbiAgICAgICAgcGFyZW50TW9kdWxlOiBOb2RlSlMuTW9kdWxlIHwgdW5kZWZpbmVkO1xuICAgICAgICByZXNvbHZlQWJzb2x1dGVQYXRoOiBzdHJpbmc7XG4gICAgfSk6IE5vZGVKUy5Nb2R1bGUge1xuICAgICAgICBjb25zdCB7IHBhcmVudE1vZHVsZSwgcmVzb2x2ZUFic29sdXRlUGF0aCB9ID0gY29uZmlnO1xuICAgICAgICBsZXQgY2FjaGVkID0gcmVxdWlyZUNhY2hlW3Jlc29sdmVBYnNvbHV0ZVBhdGhdO1xuICAgICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZXJpYWxpemVkID0gZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcz8uW3Jlc29sdmVBYnNvbHV0ZVBhdGhdO1xuXG4gICAgICAgIGxldCBuZXdNb2R1bGU6IE5vZGVKUy5Nb2R1bGUgPSB7XG4gICAgICAgICAgICBpZDogcmVzb2x2ZUFic29sdXRlUGF0aCxcbiAgICAgICAgICAgIGZpbGVuYW1lOiByZXNvbHZlQWJzb2x1dGVQYXRoLFxuICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudE1vZHVsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIGlzUHJlbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGF0aDogZGlybmFtZShyZXNvbHZlQWJzb2x1dGVQYXRoKSxcbiAgICAgICAgICAgIHBhdGhzOiBzZXJpYWxpemVkPy5wYXRocyB8fCBbXSxcbiAgICAgICAgICAgIHJlcXVpcmU6IHJlcXVpcmVGbmMsXG4gICAgICAgICAgICBsb2FkLFxuICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgbmV3TW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG5ld01vZHVsZS5leHBvcnRzO1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICBwYXJlbnRNb2R1bGUuY2hpbGRyZW4ucHVzaChuZXdNb2R1bGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzZXJpYWxpemVkPy5tb2R1bGVGaWVsZHMgfHwge30pKSB7XG4gICAgICAgICAgICBpZiAoa2V5IGluIG5ld01vZHVsZSkgY29udGludWU7XG4gICAgICAgICAgICAobmV3TW9kdWxlIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUucGF0aHMgPSAocmVxdWVzdDogc3RyaW5nKSA9PiBbXTtcblxuICAgICAgICByZXF1aXJlQ2FjaGVbbmV3TW9kdWxlLmlkXSA9IG5ld01vZHVsZTtcbiAgICAgICAgcmVxdWlyZUZuYy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgcmVxdWlyZUZuYy5jYWNoZSA9IHJlcXVpcmVDYWNoZTtcbiAgICAgICAgcmVxdWlyZUZuYy5tYWluID0gbmV3TW9kdWxlO1xuICAgICAgICByZXF1aXJlRm5jLmV4dGVuc2lvbnMgPSBcImV4dGVuc2lvbiBub3QgaW1wbGVtZW50ZWQgeWV0XCIgYXMgYW55O1xuXG4gICAgICAgIC8vIFJlc29sdmVzIGZpbGUgZXh0ZW5zaW9uc1xuICAgICAgICBmdW5jdGlvbiBpbm5lclJlc29sdmUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzID0gW1xuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgcGF0aCArIFwiLmpzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCArIFwiLnRzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCArIFwiLnRzeFwiLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZ2lzdGVyZWQgPSBnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzPy5bY2FuZGlkYXRlXTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xuICAgICAgICAgICAgaWYgKHBhdGguc3RhcnRzV2l0aChcIi5cIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJSZXNvbHZlKHBhdGhSZXNvbHZlKG5ld01vZHVsZS5wYXRoLCBwYXRoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHNlYXJjaCBhbGwgcGF0aHNcbiAgICAgICAgICAgIGZvciAobGV0IHNlYXJjaFJvb3Qgb2Ygc2VyaWFsaXplZD8ucGF0aHMgfHwgW10pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlID0gaW5uZXJSZXNvbHZlKHBhdGhSZXNvbHZlKHNlYXJjaFJvb3QsIHBhdGgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVnaXN0ZXJlZCA9IGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXM/LltjYW5kaWRhdGVdO1xuICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWdpc3RlcmVkLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEl0IGlzIHByb2JhYmx5IFwiZnNcIiBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGBNb2R1bGUgJHtwYXRofSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlcXVpcmVGbmMocGF0aDogc3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbiBidWlsdEluTW9kdWxlRXhwb3J0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsdEluTW9kdWxlRXhwb3J0c1twYXRoIGFzIGtleW9mIHR5cGVvZiBidWlsdEluTW9kdWxlRXhwb3J0c107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQgPSByZXNvbHZlKHBhdGgpO1xuICAgICAgICAgICAgbGV0IHN1Yk1vZHVsZSA9IGNyZWF0ZU1vZHVsZSh7XG4gICAgICAgICAgICAgICAgcGFyZW50TW9kdWxlOiBuZXdNb2R1bGUsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZUFic29sdXRlUGF0aDogcmVzb2x2ZWQsXG4gICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgICBzdWJNb2R1bGUubG9hZChuZXdNb2R1bGUuZmlsZW5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHN1Yk1vZHVsZS5leHBvcnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgICAgIGlmIChuZXdNb2R1bGUubG9hZGVkKSByZXR1cm47XG4gICAgICAgICAgICAvLyBOT1RFOiBTZXQgbG9hZGVkIGltbWVkaWF0ZWx5LCBpbiBjYXNlIHdlIGhhdmUgYSBjaXJjdWxhciBkZXBlbmRlbmN5XG4gICAgICAgICAgICBuZXdNb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkLm1vZHVsZUZuYyhuZXdNb2R1bGUuZXhwb3J0cywgcmVxdWlyZUZuYywgbmV3TW9kdWxlLCBuZXdNb2R1bGUuZmlsZW5hbWUsIG5ld01vZHVsZS5wYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGJlaW5nIGltcG9ydGVkIGJ5IHRoZSByb290IG1vZHVsZSwgd2UgbmVlZCB0byB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLnBhcmVudE1vZHVsZT8ucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIHJlcXVpcmVkIG1vZHVsZSAke0pTT04uc3RyaW5naWZ5KGNvbmZpZy5yZXNvbHZlQWJzb2x1dGVQYXRoKX0sIGhhdmUgJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhnbG9iYWxUaGlzLnJlZ2lzdGVyZWRNb2R1bGVzIHx8IHt9KSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld01vZHVsZS5leHBvcnRzID0gbmV3IFByb3h5KFxuICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJkZWZhdWx0XCIpIHJldHVybiBuZXdNb2R1bGUuZXhwb3J0cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYE1vZHVsZSAke25ld01vZHVsZS5maWxlbmFtZX0gaXMgbm90IGF2YWlsYWJsZS4gSXQgbWlnaHQgaGF2ZSBub3QgYmVlbiBpbXBvcnRlZCBpbiBOb2RlLmpzIGR1ZSB0byBhIGZsYWcgd2hpY2ggaXMgY2hlY2tpbmcgdGhlIGJyb3dzZXIgb3IgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUuIEl0IG1pZ2h0IGFsc28gYmUgdGhhdCB0aGUgZW50cnkgcG9pbnQgaXMgd2VpcmRseSBjb25maWd1cmVkIGFuZCBjb3VsZCBub3QgYmUgZGV0ZWN0ZWQuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld01vZHVsZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwic29ja2V0LWZ1bmN0aW9uL3NyYy9jYWNoaW5nXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCBnZXRQYWNrYWdlSnNvblBhdGggPSBjYWNoZSgoZGlyZWN0b3J5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIGlmICghZGlyZWN0b3J5LmluY2x1ZGVzKFwiL1wiKSAmJiAhZGlyZWN0b3J5LmluY2x1ZGVzKFwiXFxcXFwiKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgcGFja2FnZUpzb25QYXRoID0gcGF0aC5yZXNvbHZlKGRpcmVjdG9yeSwgXCJwYWNrYWdlLmpzb25cIik7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocGFja2FnZUpzb25QYXRoKSkge1xuICAgICAgICByZXR1cm4gcGFja2FnZUpzb25QYXRoO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UGFja2FnZUpzb25QYXRoKHBhdGguZGlybmFtZShkaXJlY3RvcnkpKTtcbn0pO1xuY29uc3QgZ2V0TWFpblBhdGggPSBjYWNoZSgoZGlyZWN0b3J5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIGxldCBwYWNrYWdlSnNvblBhdGggPSBnZXRQYWNrYWdlSnNvblBhdGgoZGlyZWN0b3J5KTtcbiAgICBpZiAoIXBhY2thZ2VKc29uUGF0aCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBsZXQgcGFja2FnZUpzb24gPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYWNrYWdlSnNvblBhdGgsIFwidXRmOFwiKSkgYXMge1xuICAgICAgICBtYWluPzogc3RyaW5nO1xuICAgICAgICBleHBvcnRzPzoge1xuICAgICAgICAgICAgXCIuXCI/OiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZT86IHN0cmluZztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBsZXQgZGlyID0gcGF0aC5kaXJuYW1lKHBhY2thZ2VKc29uUGF0aCk7XG4gICAgbGV0IG1haW5OYW1lID0gcGFja2FnZUpzb24uZXhwb3J0cz8uW1wiLlwiXT8ucmVxdWlyZSB8fCBwYWNrYWdlSnNvbi5tYWluO1xuICAgIGlmICghbWFpbk5hbWUpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgXCJpbmRleC5qc1wiKSkpIHtcbiAgICAgICAgICAgIG1haW5OYW1lID0gXCJpbmRleC5qc1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgXCJpbmRleC50c1wiKSkpIHtcbiAgICAgICAgICAgIG1haW5OYW1lID0gXCJpbmRleC50c1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgXCJpbmRleC50c3hcIikpKSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXgudHN4XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluTmFtZSA9IFwiaW5kZXguanNcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgdGhlIG5lZ2F0aXZlIHZhbHVlIEVTTSBleHBvcnRzIHRoaW5nLlxuICAgIGxldCBtYWluUGF0aCA9IHBhdGgucmVzb2x2ZShkaXIsIG1haW5OYW1lKTtcbiAgICByZXR1cm4gbWFpblBhdGg7XG59KTtcblxuXG4vLyBXcmFwcyB0aGUgbW9kdWxlIHNvIGl0IHJlZ2lzdGVycyBpdHNlbGYgd2hlbiB0aGUgcmV0dXJuZWQgY29kZSBpcyBldmFsdWF0ZWRcbi8vICAtIFNlZSBodHRwczovL25vZGVqcy5vcmcvYXBpL21vZHVsZXMuaHRtbCN0aGUtbW9kdWxlLXdyYXBwZXJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwTW9kdWxlKG1vZHVsZTogTm9kZUpTLk1vZHVsZSk6IHN0cmluZyB7XG4gICAgbGV0IGNvbnRlbnRzID0gKG1vZHVsZSBhcyBhbnkpLm1vZHVsZUNvbnRlbnRzIHx8IFwiLyogTm8gY29udGVudHMgKi9cIjtcblxuICAgIC8vIE5PVEU6IGRlYnVnTmFtZSBvbmx5IG1hdHRlcnMgZHVyaW5nIG1vZHVsZSBldmFsdWF0aW9uLiBBZnRlciB0aGF0IHRoZSBzb3VyY2VtYXAgc2hvdWxkIHdvcmsuXG4gICAgbGV0IGRlYnVnTmFtZSA9IG1vZHVsZS5maWxlbmFtZVxuICAgICAgICAucmVwbGFjZSgvXFxcXC9nLCBcIi9cIilcbiAgICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgICAuc2xpY2UoLTEpWzBdXG4gICAgICAgIC5yZXBsYWNlKC9cXC4vZywgXCJfXCIpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWl9dL2csIFwiXCIpO1xuXG4gICAgbGV0IHdyYXBwZWQgPSBgKGZ1bmN0aW9uICR7ZGVidWdOYW1lfShleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkgeyAke2NvbnRlbnRzfVxuICAgIH0pYDtcblxuICAgIGxldCBtb2R1bGVGaWVsZHM6IHsgW2ZsYWc6IHN0cmluZ106IHVua25vd247IH0gPSB7fTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobW9kdWxlKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIGNvbnRpbnVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgbW9kdWxlRmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUubGVuZ3RoIDwgMTUwKSB7XG4gICAgICAgICAgICBtb2R1bGVGaWVsZHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbW9kdWxlRmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtb2R1bGVNYWluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGRpcm5hbWUgPSBwYXRoLmRpcm5hbWUobW9kdWxlLmZpbGVuYW1lKTtcbiAgICBsZXQgcGFja2FnZUpzb25QYXRoID0gZ2V0UGFja2FnZUpzb25QYXRoKGRpcm5hbWUpO1xuICAgIGlmIChwYWNrYWdlSnNvblBhdGgpIHtcbiAgICAgICAgbGV0IG1haW5QYXRoID0gZ2V0TWFpblBhdGgoZGlybmFtZSk7XG4gICAgICAgIGlmIChtYWluUGF0aD8ucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpID09PSBtb2R1bGUuZmlsZW5hbWUucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpKSB7XG4gICAgICAgICAgICAvLyBUaGVuIHdlIGFyZSB0aGUgbWFpbiBvZiB0aGUgbW9kdWxlXG4gICAgICAgICAgICBtb2R1bGVNYWluID0gcGF0aC5kaXJuYW1lKHBhY2thZ2VKc29uUGF0aCkucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTk9URTogV2UgY2FuJ3QgaGF2ZSBuZXcgbGluZXMsIG9yIHRoZXkgYnJlYWsgc291cmNlIG1hcHNcbiAgICBsZXQgb2JqV3JhcHBlZCA9IGB7YFxuICAgICAgICArIGAgaWQ6ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlLmlkLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSl9LGBcbiAgICAgICAgKyBgIGZpbGVuYW1lOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZS5maWxlbmFtZS5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpfSxgXG4gICAgICAgICsgYCBpc01vZHVsZU1haW46ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlTWFpbil9LGBcbiAgICAgICAgKyBgIHBhdGhzOiAke0pTT04uc3RyaW5naWZ5KG1vZHVsZS5wYXRocy5tYXAocCA9PiBwLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKSkpfSxgXG4gICAgICAgICsgYCBtb2R1bGVGaWVsZHM6ICR7SlNPTi5zdHJpbmdpZnkobW9kdWxlRmllbGRzKX0sYFxuICAgICAgICArIGAgbW9kdWxlRm5jOiAke3dyYXBwZWR9YFxuICAgICAgICArIGAgfWA7XG5cbiAgICBmdW5jdGlvbiBpbml0TW9kdWxlKHNlcmlhbGl6ZWQ6IFNlcmlhbGl6ZWRNb2R1bGUpIHtcbiAgICAgICAgZ2xvYmFsVGhpcy5yZWdpc3RlcmVkTW9kdWxlcyA9IGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXMgfHwge307XG4gICAgICAgIGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXNbc2VyaWFsaXplZC5pZF0gPSBzZXJpYWxpemVkO1xuICAgICAgICBpZiAoc2VyaWFsaXplZC5pc01vZHVsZU1haW4pIHtcbiAgICAgICAgICAgIGdsb2JhbFRoaXMucmVnaXN0ZXJlZE1vZHVsZXNbc2VyaWFsaXplZC5pc01vZHVsZU1haW5dID0gc2VyaWFsaXplZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBgOygke2luaXRNb2R1bGUudG9TdHJpbmcoKS5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiIFwiKX0pKCR7b2JqV3JhcHBlZH0pO2A7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICB2YXIgcmVnaXN0ZXJlZE1vZHVsZXM6IHsgW2lkOiBzdHJpbmddOiBTZXJpYWxpemVkTW9kdWxlOyB9IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZWRNb2R1bGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZmlsZW5hbWU6IHN0cmluZztcblxuICAgIC8vIFRoZSBtYWluIG1haW4gd2UgcmVwcmVzZW50LiBFeCwgXCIvYWkzL25vZGVfbW9kdWxlcy90eXBlc2FmZWNzc1wiXG4gICAgaXNNb2R1bGVNYWluPzogc3RyaW5nO1xuXG4gICAgLy8gUGF0aHMgd2hpY2ggdGhlIHJlcXVpcmUgZnVuY3Rpb24gc2VhcmNoZXMgZm9yIG5vbi1yZWxhdGl2ZSBpbXBvcnRzXG4gICAgcGF0aHM6IHN0cmluZ1tdO1xuXG4gICAgLy8gRmllbGRzIHRvIGJlIHNldCBvbiB0aGUgbW9kdWxlLCB3aGVuIGl0IGlzIGNyZWF0ZWRcbiAgICBtb2R1bGVGaWVsZHM6IHsgW2ZsYWc6IHN0cmluZ106IHVua25vd247IH07XG5cbiAgICBtb2R1bGVGbmM6IChleHBvcnRzOiBhbnksIHJlcXVpcmU6IGFueSwgbW9kdWxlOiBhbnksIF9fZmlsZW5hbWU6IHN0cmluZywgX19kaXJuYW1lOiBzdHJpbmcpID0+IHVua25vd247XG59IiwiaW1wb3J0IHsgYXJyYXlFcXVhbCB9IGZyb20gXCIuL21pc2NcIjtcbmltcG9ydCB7IEFueUZ1bmN0aW9uLCBBcmdzLCBjYW5IYXZlQ2hpbGRyZW4gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGF6eTxUPihmYWN0b3J5OiAoKSA9PiBUKSB7XG4gICAgbGV0IHZhbHVlOiB7IHZhbHVlOiBUIH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHsgdmFsdWU6IGZhY3RvcnkoKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS52YWx1ZTtcbiAgICB9O1xuICAgIGdldC5yZXNldCA9ICgpID0+IHtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBnZXQuc2V0ID0gKG5ld1ZhbHVlOiBUKSA9PiB7XG4gICAgICAgIHZhbHVlID0geyB2YWx1ZTogbmV3VmFsdWUgfTtcbiAgICB9O1xuICAgIHJldHVybiBnZXQ7XG59XG5cbi8vIE5PVEU6IFRoZSByZWFzb24gd2UgbmVlZCB0byBwZXJpb2RpY2FsbHkgY2xlYXIsIGlzIGJlY2F1c2Ugc29tZXRpbWVzIGEgdmVyeSBzbWFsbFxuLy8gICAgICBwYXJ0IG9mIGEgbGFyZ2UgcGF5bG9hZCAoZXgsIHBlcnNpc3RlZCBvdmVycmlkZXMpIGlzIGNhY2hlZCwgd2hpY2ggdGhlbiByZXN1bHRzXG4vLyAgICAgIGluIHRoZSB3aG9sZSBwYXlsb2FkIGJlaW5nIGNhY2hlZCwgd2hpY2ggcmVzdWx0cyBpbiBhIGxvdCBvZiBtZW1vcnkgYmVpbmcgdXNlZC5cblxuLy8gSU1QT1JUQU5UISBUaGUgY2xlYW51cCBmdW5jdGlvbnMgQ0FOTk9UIGNsb3NlIHVwb24gYW55dGhpbmcsIG9yIGVsc2UgdGhleSB3aWxsIGNhdXNlIGxlYWtzIVxuLy8gIEFsbCBkYXRhIHRoZXkgdXNlIHNob3VsZCBiZSBpbiBkYXRhLlxuaW50ZXJmYWNlIENsZWFudXBGbmM8VCBleHRlbmRzIG9iamVjdD4ge1xuICAgIChkYXRhOiBUKTogdm9pZDtcbn1cblxuXG4vLyBOT1RFOiBFbXB0eSBhcnJheXMgYXJlIHNvIGNvbW1vbiwgdGhhdCBpdCBpcyB1c2VmdWwgdG8gcmVwcmVzZW50IHRoZW0gYXMgdGhlIHNhbWVcbi8vICBlbXRweSBhcnJheSwgdG8gaW5jcmVhc2UgY2FjaGUgaGl0IHJhdGVzLlxuY29uc3QgZW1wdHlBcnJheTogYW55W10gPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUVtcHR5QXJyYXk8VD4oYXJyYXk6IFRbXSk6IFRbXSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGVtcHR5QXJyYXk7XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGU8T3V0cHV0LCBLZXksIFVudHJhY2tlZCBleHRlbmRzIHVua25vd25bXT4oXG4gICAgZ2V0VmFsdWU6IChrZXk6IEtleSwgLi4udW50cmFja2VkOiBVbnRyYWNrZWQpID0+IE91dHB1dFxuKToge1xuICAgIChrZXk6IEtleSwgLi4udW50cmFja2VkOiBVbnRyYWNrZWQpOiBPdXRwdXQ7XG4gICAgLy8gTk9URTogSWYgeW91IHdhbnQgdG8gY2xlYXIgYWxsLCBqdXN0IG1ha2UgYSBuZXcgY2FjaGUhXG4gICAgY2xlYXIoa2V5OiBLZXkpOiB2b2lkO1xuICAgIGNsZWFyQWxsKCk6IHZvaWQ7XG4gICAgZm9yY2VTZXQoa2V5OiBLZXksIHZhbHVlOiBPdXRwdXQpOiB2b2lkO1xuICAgIGdldEFsbEtleXMoKTogS2V5W107XG4gICAgZ2V0KGtleTogS2V5KTogT3V0cHV0IHwgdW5kZWZpbmVkO1xufSB7XG4gICAgbGV0IHN0YXJ0aW5nQ2FsY3VsYXRpbmcgPSBuZXcgU2V0PEtleT4oKTtcbiAgICBsZXQgdmFsdWVzID0gbmV3IE1hcDxLZXksIE91dHB1dD4oKTtcbiAgICBmdW5jdGlvbiBjYWNoZShpbnB1dDogS2V5LCAuLi51bnRyYWNrZWQ6IFVudHJhY2tlZCkge1xuICAgICAgICBsZXQga2V5ID0gaW5wdXQ7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuZ2V0KGtleSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGluZ0NhbGN1bGF0aW5nLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggdGhlIHR5cGVzIGhlcmUsIGJ5IHRocm93aW5nLCBhbmQgdGhlbiBmb3IgdGhlIGNhc2VzXG4gICAgICAgICAgICAvLyAgdGhhdCBkb24ndCB0aHJvdywgbWFrZSBvdXIgb3V0cHV0IHR5cGUgaW5jbHVkZSB1bmRlZmluZWRcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoaW5wdXQsIC4uLnVudHJhY2tlZCk7XG4gICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY2FjaGUuY2xlYXIgPSAoa2V5OiBLZXkpID0+IHtcbiAgICAgICAgdmFsdWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmRlbGV0ZShrZXkpO1xuICAgIH07XG4gICAgY2FjaGUuZm9yY2VTZXQgPSAoa2V5OiBLZXksIHZhbHVlOiBPdXRwdXQpID0+IHtcbiAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICB9O1xuICAgIGNhY2hlLmdldEFsbEtleXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4udmFsdWVzLmtleXMoKV07XG4gICAgfTtcbiAgICBjYWNoZS5nZXQgPSAoa2V5OiBLZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5nZXQoa2V5KTtcbiAgICB9O1xuICAgIGNhY2hlLmNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICB2YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5jbGVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8qKiBNYWtlcyBhIGNhY2hlIHRoYXQgbGltaXRzIHRoZSBudW1iZXIgb2YgZW50cmllcywgYWxsb3dpbmcgeW91IHRvIHB1dCBhcmJpdHJhcnkgZGF0YSBpbiBpdFxuICogICAgICB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IGxlYWtpbmcgbWVtb3J5XG4gICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVMaW1pdGVkPE91dHB1dCwgS2V5PihcbiAgICAvLyBOT1RFOiBXZSBjYW4ndCBjYWxjdWxhdGUgd2hhdCBsaW1pdCBzaG91bGQgYmUgYmFzZWQgb24gY29tcGFyaW5nIHRoZSBldmFsdWF0aW9uIHRpbWVcbiAgICAvLyAgYW5kIHRoZSB0aW1lIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgdmFsdWVzLiBCZWNhdXNlLCBldmVuIGlmIGZpbmRpbmcgYSBtYXRjaCB0YWtlcyBmYXIgbG9uZ2VyIHRoYW5cbiAgICAvLyAgY2FsY3VsYXRpbmcsIGtlZXBpbmcgYSBjb25zaXN0ZW50IG91dHB1dCBjYW4gc2F2ZSAoYSBjb25zaWRlcmFibGUgYW1vdW50IG9mKSB0aW1lIGluIGRvd25zdHJlYW0gY2FjaGVzLlxuICAgIG1heENvdW50OiBudW1iZXIsXG4gICAgZ2V0VmFsdWU6IChrZXk6IEtleSkgPT4gT3V0cHV0XG4pIHtcbiAgICBsZXQgc3RhcnRpbmdDYWxjdWxhdGluZyA9IG5ldyBTZXQ8S2V5PigpO1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgTWFwPEtleSwgT3V0cHV0PigpO1xuICAgIGZ1bmN0aW9uIGdldChpbnB1dDogS2V5KTogT3V0cHV0IHtcbiAgICAgICAgbGV0IGtleSA9IGlucHV0O1xuICAgICAgICBpZiAodmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmdldChrZXkpIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRpbmdDYWxjdWxhdGluZy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDeWNsaWMgYWNjZXNzIGluIGNhY2hlYCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcblxuICAgICAgICAvLyBDbGVhciB3aGVuIGl0IGdldHMgdG9vIGJpZy4gVGhpcyBpcyBraW5kIG9mIGxpa2UgYSB3b3JzZVxuICAgICAgICAvLyAgbGVhc3QgcmVjZW50bHkgdXNlZCBjYWNoZSwgYmVjYXVzZSBlbnRyaWVzIHRoYXQgYXJlIGFjY2Vzc2VkXG4gICAgICAgIC8vICBvZnRlbiB3aWxsIHF1aWNrbHkgZ2V0IHB1dCBiYWNrIGluLiBUaGlzIGlzIGVmZmVjdGl2ZSBhcyBsb25nXG4gICAgICAgIC8vICBhcyBhY2Nlc3NlcyB0YWtlIHNpbWlsYXIgYW1vdW50cyBvZiB0aW1lLiBJZiB0aGVyZSBpcyBhIHZlcnkgc2xvd1xuICAgICAgICAvLyAgYW5kIHZlcnkgY29tbW9ubHkgYWNjZXNzZWQgdmFsdWUsIGl0IGNvdWxkIGJlIGV2aWN0ZWQgYnkgbWFueSB2ZXJ5XG4gICAgICAgIC8vICBmYXN0IGFjY2Vzc2VzLCB3aGljaCB3b3VsZCBiZSB1bmZvcnR1bmF0ZS5cbiAgICAgICAgaWYgKHZhbHVlcy5zaXplID49IG1heENvdW50KSB7XG4gICAgICAgICAgICB2YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmcuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlKGlucHV0KTtcbiAgICAgICAgdmFsdWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBnZXRbXCJmb3JjZVNldFwiXSA9IChrZXk6IEtleSwgdmFsdWU6IE91dHB1dCkgPT4ge1xuICAgICAgICB2YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmFkZChrZXkpO1xuICAgIH07XG4gICAgZ2V0W1wiY2xlYXJLZXlcIl0gPSAoa2V5OiBLZXkpID0+IHtcbiAgICAgICAgdmFsdWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmRlbGV0ZShrZXkpO1xuICAgIH07XG4gICAgZ2V0W1wiY2xlYXJcIl0gPSAoKSA9PiB7XG4gICAgICAgIHZhbHVlcy5jbGVhcigpO1xuICAgICAgICBzdGFydGluZ0NhbGN1bGF0aW5nLmNsZWFyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZVdlYWs8T3V0cHV0LCBLZXkgZXh0ZW5kcyBvYmplY3Q+KGdldFZhbHVlOiAoa2V5OiBLZXkpID0+IE91dHB1dCk6IChrZXk6IEtleSkgPT4gT3V0cHV0IHtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0aW5nQ2FsY3VsYXRpbmc6IG5ldyBXZWFrU2V0PEtleT4oKSxcbiAgICAgICAgdmFsdWVzOiBuZXcgV2Vha01hcDxLZXksIE91dHB1dD4oKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChpbnB1dCkgPT4ge1xuICAgICAgICBsZXQga2V5ID0gaW5wdXQ7XG4gICAgICAgIGlmIChzdGF0ZS52YWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS52YWx1ZXMuZ2V0KGtleSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGFydGluZ0NhbGN1bGF0aW5nLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEN5Y2xpYyBhY2Nlc3MgaW4gY2FjaGVXZWFrYCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuc3RhcnRpbmdDYWxjdWxhdGluZy5hZGQoa2V5KTtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoaW5wdXQpO1xuICAgICAgICBzdGF0ZS52YWx1ZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbn1cblxuLy8gQSBsaXN0IGNhY2hlLCB3aGljaC4uLiBtYXliZSBmYXN0ZXIgdGhhbiBhIE1hcD9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUxpc3Q8VmFsdWU+KFxuICAgIGdldExlbmd0aDogKCkgPT4gbnVtYmVyLFxuICAgIGdldFZhbHVlOiAoaW5kZXg6IG51bWJlcikgPT4gVmFsdWUsXG4pOiB7IChpbmRleDogbnVtYmVyKTogVmFsdWU7IH0ge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgY2FjaGU6IFtdIGFzIFZhbHVlW10sXG4gICAgICAgIGxlbmd0aDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0KGk6IG51bWJlcikge1xuICAgICAgICBsZXQgY2FjaGUgPSBzdGF0ZS5jYWNoZTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBzdGF0ZS5sZW5ndGggPSBzdGF0ZS5nZXRMZW5ndGgoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IDAgfHwgaSA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5kZXggb3V0IG9mIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGkgaW4gY2FjaGUpKSB7XG4gICAgICAgICAgICBjYWNoZVtpXSA9IGdldFZhbHVlKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVtpXTtcbiAgICB9O1xuICAgIHJldHVybiBnZXQ7XG59XG5cbmZ1bmN0aW9uIGNhY2hlQXJyYXlFcXVhbENsZWFudXAoc3RhdGU6IGFueSkge1xuICAgIHN0YXRlLmNhY2hlID0gW107XG59XG5cbi8qKiBBIGNhY2hlIGhhbGYgd2F5IGJldHdlZW4gY2FjaGluZyBiYXNlZCBvbiA9PT0gYW5kIGNhY2hpbmcgYmFzZWQgb24gaGFzaC4gQ2FjaGVzXG4gKiAgICAgIGJhc2VkIG9uIGFycmF5RXF1YWwsIHdoaWNoIGRvZXMgPT09IG9uIGFsbCB2YWx1ZXMgaW4gYW4gYXJyYXkuIFJlcXVpcmVzIGxvY2FsaXplZFxuICogICAgICBjYWNoaW5nIChhcyB0aGUgY29tcGFyaXNvbnMgZG9uJ3Qgc2NhbGUgd2l0aCBtYW55IGNhbmRpZGF0ZXMsIHVubGlrZSBoYXNoaW5nKSxcbiAqICAgICAgaG93ZXZlciB3b3JrcyB3aXRoIG5vbiB0cml2YWwgdHJhbnNmb3JtYXRpb25zIChleCwgcmVzb2x2aW5nIG1hbnkgcGVyc2lzdGVkIG92ZXJyaWRlc1xuICogICAgICB0byBnZXQgYSB2YWx1ZSksIHVubGlrZSBjYWNoZSgpLlxuICogIEFsc28sIGxpbWl0cyBpdHNlbGYsIG1vcmUgb2YgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdGhhbiBtZW1vcnkgb3B0aW1pemF0aW9uLCBhcyBpdCBzY2FsZXNcbiAqICAgICAgdmVyeSBwb29ybHkgd2l0aCB0aGUgbnVtYmVyIG9mIGNhbmRpZGF0ZXMuXG4gKiAgXG4gKiAgVElNSU5HOiBBYm91dCA2dXMgd2l0aCBsaW1pdCA9IDEwMCwgYXJyYXkgc2l6ZSA9IDI5NCwgYW5kIHRoZSBjYWNoZSBiZWluZyBmdWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVBcnJheUVxdWFsPElucHV0IGV4dGVuZHMgdW5rbm93bltdIHwgdW5kZWZpbmVkLCBPdXRwdXQ+KFxuICAgIG1hcDogKGFycmF5czogSW5wdXQpID0+IE91dHB1dCxcbiAgICBsaW1pdCA9IDEwXG4pOiB7XG4gICAgKGFycmF5OiBJbnB1dCk6IE91dHB1dDtcbiAgICBjbGVhcihhcnJheTogSW5wdXQpOiB2b2lkO1xuICAgIGNsZWFyQWxsKCk6IHZvaWQ7XG59IHtcbiAgICBsZXQgc3RhdGU6IHtcbiAgICAgICAgY2FjaGU6IHtcbiAgICAgICAgICAgIGlucHV0OiBJbnB1dDtcbiAgICAgICAgICAgIG91dHB1dDogT3V0cHV0O1xuICAgICAgICB9W11cbiAgICB9ID0geyBjYWNoZTogW10gfTtcbiAgICBmdW5jdGlvbiBpc01hdGNoKGxoczogSW5wdXQsIHJoczogSW5wdXQpIHtcbiAgICAgICAgaWYgKGxocyA9PT0gcmhzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGhzID09PSB1bmRlZmluZWQgfHwgcmhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJyYXlFcXVhbChsaHMsIHJocykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIChpbnB1dDogSW5wdXQpID0+IHtcbiAgICAgICAgICAgIGxldCBjYWNoZSA9IHN0YXRlLmNhY2hlO1xuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gob2JqLmlucHV0LCBpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5vdXRwdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG91dHB1dCA9IG1hcChpbnB1dCk7XG4gICAgICAgICAgICBjYWNoZS51bnNoaWZ0KHsgaW5wdXQsIG91dHB1dCB9KTtcbiAgICAgICAgICAgIHdoaWxlIChjYWNoZS5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXIoYXJyYXk6IElucHV0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXRlLmNhY2hlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKHN0YXRlLmNhY2hlW2ldLmlucHV0LCBhcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNhY2hlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYWNoZSA9IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICk7XG59XG5cbi8qKiBDYWNoZXMgd2hlbiBhcmd1bWVudHMgYXJlID09PS4gU2VlIGNhY2hlQXJyYXlFcXVhbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlQXJnc0VxdWFsPEZuYyBleHRlbmRzIEFueUZ1bmN0aW9uPihcbiAgICBmbmM6IEZuYyxcbiAgICBsaW1pdCA9IDEwXG4pOiBGbmMgJiB7IGNsZWFyKC4uLmFyZ3M6IEFyZ3M8Rm5jPik6IHZvaWQgfSB7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVBcnJheUVxdWFsKGZ1bmN0aW9uIGNhY2hlQXJnc0VxdWFsKGFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICByZXR1cm4gZm5jKC4uLmFyZ3MpO1xuICAgIH0sIGxpbWl0KTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZShhcmdzKTtcbiAgICAgICAgfSkgYXMgRm5jLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhciguLi5hcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhcihhcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVKU09OQXJnc0VxdWFsPEZuYyBleHRlbmRzIEFueUZ1bmN0aW9uPihcbiAgICBmbmM6IEZuYyxcbiAgICBsaW1pdCA9IDEwXG4pIHtcbiAgICBsZXQgY2FjaGUgPSBjYWNoZUxpbWl0ZWQobGltaXQsIChhcmdzSlNPTjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBmbmMoLi4uSlNPTi5wYXJzZShhcmdzSlNPTikpO1xuICAgIH0pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlKEpTT04uc3RyaW5naWZ5KGFyZ3MpKTtcbiAgICAgICAgfSkgYXMgRm5jLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhciguLi5hcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5jbGVhcktleShKU09OLnN0cmluZ2lmeShhcmdzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJBbGwoKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZVNoYWxsb3dDb25maWdBcmdFcXVhbDxGbmMgZXh0ZW5kcyBBbnlGdW5jdGlvbj4oXG4gICAgZm5jOiBGbmMsXG4gICAgbGltaXQgPSAxMFxuKTogRm5jICYge1xuICAgIGNsZWFyKGNvbmZpZ09iajogQXJnczxGbmM+WzBdKTogdm9pZDtcbiAgICBjbGVhckFsbCgpOiB2b2lkO1xufSB7XG4gICAgbGV0IGNhY2hlID0gY2FjaGVBcnJheUVxdWFsKChrdnBzRmxhdDogdW5rbm93bltdKSA9PiB7XG4gICAgICAgIG91dHB1dC5taXNzQ291bnQrKztcbiAgICAgICAgbGV0IGFyZzogYW55O1xuICAgICAgICBpZiAoa3Zwc0ZsYXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBhcmcgPSBrdnBzRmxhdFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBrdnBzOiBbdW5rbm93biwgdW5rbm93bl1bXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrdnBzRmxhdC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgIGt2cHMucHVzaChba3Zwc0ZsYXRbaV0sIGt2cHNGbGF0W2kgKyAxXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnID0gT2JqZWN0LmZyb21FbnRyaWVzKGt2cHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbmMoYXJnKTtcbiAgICB9LCBsaW1pdCk7XG4gICAgZnVuY3Rpb24gZ2V0S1ZQcyhjb25maWdBcmc6IG9iamVjdCkge1xuICAgICAgICBpZiAoIWNhbkhhdmVDaGlsZHJlbihjb25maWdBcmcpIHx8IEFycmF5LmlzQXJyYXkoY29uZmlnQXJnKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtjb25maWdBcmddO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnQXJnKTtcbiAgICAgICAga2V5cy5zb3J0KCk7XG4gICAgICAgIHJldHVybiBrZXlzLmZsYXRNYXAoa2V5ID0+IFtrZXksIGNvbmZpZ0FyZ1trZXldXSk7XG4gICAgfVxuICAgIGxldCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAoKGNvbmZpZ0FyZzogb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBvdXRwdXQuY2FsbENvdW50Kys7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUoZ2V0S1ZQcyhjb25maWdBcmcpKTtcbiAgICAgICAgfSkgYXMgRm5jLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhcihjb25maWdBcmc6IG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLmNsZWFyKGdldEtWUHMoY29uZmlnQXJnKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJBbGwoKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxsQ291bnQ6IDAsXG4gICAgICAgICAgICBtaXNzQ291bnQ6IDAsXG4gICAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVybmFsQ2FjaGU8S2V5LCBWYWx1ZT4oKToge1xuICAgIGdldDogKGtleTogS2V5KSA9PiBWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBzZXQ6IChrZXk6IEtleSwgdmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xufSB7XG4gICAgbGV0IHZhbHVlcyA9IG5ldyBNYXA8S2V5LCBWYWx1ZT4oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn0iLCJpbXBvcnQgeyBjYW5IYXZlQ2hpbGRyZW4sIE1heWJlUHJvbWlzZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi9mb3JtYXR0aW5nL2Zvcm1hdFwiO1xuXG5leHBvcnQgY29uc3QgdGltZUluU2Vjb25kID0gMTAwMDtcbmV4cG9ydCBjb25zdCB0aW1lSW5NaW51dGUgPSB0aW1lSW5TZWNvbmQgKiA2MDtcbmV4cG9ydCBjb25zdCB0aW1lSW5Ib3VyID0gdGltZUluTWludXRlICogNjA7XG5leHBvcnQgY29uc3QgdGltZUluRGF5ID0gdGltZUluSG91ciAqIDI0O1xuZXhwb3J0IGNvbnN0IHRpbWVJbldlZWsgPSB0aW1lSW5EYXkgKiA3O1xuZXhwb3J0IGNvbnN0IHRpbWVJblllYXIgPSB0aW1lSW5EYXkgKiAzNjU7XG5cbmV4cG9ydCB0eXBlIFdhdGNoYWJsZTxUPiA9IChjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKSA9PiBNYXliZVByb21pc2U8dm9pZD47XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RXJyb3JTdGFja1RvRXJyb3IoZXJyb3I6IHN0cmluZyk6IEVycm9yIHtcbiAgICBsZXQgZXJyb3JPYmogPSBuZXcgRXJyb3IoKTtcbiAgICBlcnJvck9iai5zdGFjayA9IFN0cmluZyhlcnJvcik7XG4gICAgZXJyb3JPYmoubWVzc2FnZSA9IFN0cmluZyhlcnJvcikuc3BsaXQoXCJcXG5cIilbMF0uc2xpY2UoXCJFcnJvcjogXCIubGVuZ3RoKTtcbiAgICByZXR1cm4gZXJyb3JPYmo7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYTI1Nkhhc2goYnVmZmVyOiBCdWZmZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiByZXF1aXJlKFwiY3J5cHRvXCIpLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KFwiaGV4XCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNoYTI1Nkhhc2hCdWZmZXIoYnVmZmVyOiBCdWZmZXIgfCBzdHJpbmcpOiBCdWZmZXIge1xuICAgIHJldHVybiByZXF1aXJlKFwiY3J5cHRvXCIpLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KCk7XG59XG4vKiogQXN5bmMsIGJ1dCB3b3JrcyBib3RoIGNsaWVudHNpZGUgYW5kIHNlcnZlcnNpZGUuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhMjU2SGFzaFByb21pc2UoYnVmZmVyOiBCdWZmZXIpIHtcbiAgICBpZiAoaXNOb2RlKCkpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJjcnlwdG9cIikuY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoXCJoZXhcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJ1ZiA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgYnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJ1ZikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNoYTI1NkJ1ZmZlclByb21pc2UoYnVmZmVyOiBCdWZmZXIpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICAgIGlmIChpc05vZGUoKSkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcImNyeXB0b1wiKS5jcmVhdGVIYXNoKFwic2hhMjU2XCIpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBidWYgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIGJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShidWYpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbChhOiB7IFtrZXk6IG51bWJlcl06IHVua25vd247IGxlbmd0aDogbnVtYmVyIH0sIGI6IHsgW2tleTogbnVtYmVyXTogdW5rbm93bjsgbGVuZ3RoOiBudW1iZXIgfSwpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiAoZ2xvYmFsVGhpcyBhcyBhbnkpLldvcmtlckdsb2JhbFNjb3BlID09PSBcInVuZGVmaW5lZFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVHJ1ZSgpIHtcbiAgICByZXR1cm4gaXNOb2RlKCkgYXMgdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlclN1ZmZpeGVkKGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIoY291bnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdChjb3VudDogbnVtYmVyKSB7XG4gICAgbGV0IGFycjogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVGcmVlemU8VD4ob2JqOiBUKTogVCB7XG4gICAgaWYgKCFjYW5IYXZlQ2hpbGRyZW4ob2JqKSkgcmV0dXJuIG9iajtcbiAgICBsZXQgdmlzaXRlZCA9IG5ldyBTZXQ8dW5rbm93bj4oKTtcbiAgICBmdW5jdGlvbiBpdGVyYXRlKG9iajogdW5rbm93bikge1xuICAgICAgICBpZiAoIWNhbkhhdmVDaGlsZHJlbihvYmopKSByZXR1cm47XG4gICAgICAgIGlmICh2aXNpdGVkLmhhcyhvYmopKSByZXR1cm47XG4gICAgICAgIHZpc2l0ZWQuYWRkKG9iaik7XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKSkgcmV0dXJuO1xuICAgICAgICBPYmplY3QuZnJlZXplKG9iaik7XG4gICAgICAgIGxldCBrZXlzID0gZ2V0S2V5cyhvYmopO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgaXRlcmF0ZShvYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXRlcmF0ZShvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnQgdHlwZSBBcnJheUJ1ZmZlclZpZXdUeXBlcyA9IFVpbnQ4QXJyYXkgfCBJbnQ4QXJyYXkgfCBVaW50MTZBcnJheSB8IEludDE2QXJyYXkgfCBVaW50MzJBcnJheSB8IEludDMyQXJyYXkgfCBCaWdVaW50NjRBcnJheSB8IEJpZ0ludDY0QXJyYXkgfCBGbG9hdDY0QXJyYXkgfCBGbG9hdDMyQXJyYXkgfCBVaW50OENsYW1wZWRBcnJheTtcbmV4cG9ydCB0eXBlIEJ1ZmZlclR5cGUgPSBBcnJheUJ1ZmZlciB8IFNoYXJlZEFycmF5QnVmZmVyIHwgQXJyYXlCdWZmZXJWaWV3VHlwZXM7XG5leHBvcnQgZnVuY3Rpb24gaXNCdWZmZXJUeXBlKG9iajogdW5rbm93bik6IG9iaiBpcyBCdWZmZXJUeXBlIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghb2JqKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHJldHVybiB0cnVlO1xuICAgIGlmIChnbG9iYWwuU2hhcmVkQXJyYXlCdWZmZXIgJiYgb2JqIGluc3RhbmNlb2YgZ2xvYmFsLlNoYXJlZEFycmF5QnVmZmVyKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5cyhvYmo6IHVua25vd24pIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2VQb3J0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgbGV0IGtleUFycmF5OiBQcm9wZXJ0eUtleVtdO1xuICAgIGlmIChpc0J1ZmZlclR5cGUob2JqKSkge1xuICAgICAgICBrZXlBcnJheSA9IFtdO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIC8vIE5PVEU6IFdlIGNvbnZlcnQgdGhlIGluZGV4ZXMgdG8gc3RyaW5ncywgYmVjYXVzZSB0aGF0IGlzIHdoYXQgamF2YXNjcmlwdCBkb2VzLFxuICAgICAgICAvLyAgYW5kIGRpZmZlcmluZyBmcm9tIGl0IGNhdXNlcyByZWdyZXNzaW9ucyB0aGF0IHdlIHNpbXBseSBjYW5ub3QgcmVjdGlmeSAoaXQgYnJlYWtzIGhhc2hpbmdcbiAgICAgICAgLy8gIGNvbnNpc3RlbmN5KS5cbiAgICAgICAga2V5QXJyYXkgPSBBcnJheShvYmoubGVuZ3RoKS5maWxsKDApLm1hcCgoeCwgaSkgPT4gU3RyaW5nKGkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlBcnJheSA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuICAgIGZvciAobGV0IHN5bWJvbCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikpIHtcbiAgICAgICAgbGV0IGtleSA9IFN5bWJvbC5rZXlGb3Ioc3ltYm9sKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAga2V5QXJyYXkucHVzaChzeW1ib2wpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlBcnJheTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJpbmdLZXlzPFQgZXh0ZW5kcyB7fT4ob2JqOiBUKTogKChrZXlvZiBUKSAmIHN0cmluZylbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5Qnk8VCwgSz4oYXJyOiBUW10sIGdldEtleTogKHZhbHVlOiBUKSA9PiBLKTogTWFwPEssIFQ+IHtcbiAgICBsZXQgbWFwID0gbmV3IE1hcDxLLCBUPigpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgIG1hcC5zZXQoZ2V0S2V5KGl0ZW0pLCBpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBrZXlCeUFycmF5PFQsIEs+KGFycjogVFtdLCBnZXRLZXk6ICh2YWx1ZTogVCkgPT4gSyk6IE1hcDxLLCBUW10+IHtcbiAgICBsZXQgbWFwID0gbmV3IE1hcDxLLCBUW10+KCk7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcbiAgICAgICAgbGV0IGtleSA9IGdldEtleShpdGVtKTtcbiAgICAgICAgbGV0IGFyciA9IG1hcC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFhcnIpIHtcbiAgICAgICAgICAgIGFyciA9IFtdO1xuICAgICAgICAgICAgbWFwLnNldChrZXksIGFycik7XG4gICAgICAgIH1cbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmVKU09OPFQ+KG9iajogVCk6IFQge1xuICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkgcmV0dXJuIG9iajtcbiAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAvLyBJdCBpcyBwb3NzaWJsZSBmb3IgYW4gb2JqZWN0IHRvIG5vdCBiZSBkZWZpbmVkLCBidXQgcmV0dXJuIHVuZGVmaW5lZCB3aGVuIEpTT04uc3RyaW5naWZpZWQsXG4gICAgLy8gIHZpYSBvdmVycmlkaW5nIHRoZSB0b0pTT04gbWV0aG9kLlxuICAgIGlmIChzdHIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb21pc2VPYmo8VCA9IHZvaWQ+IHtcbiAgICBwdWJsaWMgcHJvbWlzZTogUHJvbWlzZTxUPjtcbiAgICBwdWJsaWMgdmFsdWU6IHsgdmFsdWU/OiBUOyBlcnJvcj86IHN0cmluZyB9IHwgdW5kZWZpbmVkO1xuICAgIC8qKiBSZXNvbHZlIGNhbGxlZCBkb2VzIG5vdCBtZWFuIHRoZSB2YWx1ZSBpcyByZWFkeSwgYXMgaXQgbWF5IGJlIHJlc29sdmVkIHdpdGggYSBwcm9taXNlLiAqL1xuICAgIHB1YmxpYyByZXNvbHZlQ2FsbGVkPzogYm9vbGVhbjtcblxuICAgIHB1YmxpYyByZXNvbHZlID0gKHZhbHVlOiBUIHwgUHJvbWlzZTxUPikgPT4ge1xuICAgICAgICB0aGlzLnJlc29sdmVDYWxsZWQgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgdmFsdWUudGhlbihcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PiB0aGlzLnZhbHVlID0geyB2YWx1ZSB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMudmFsdWUgPSB7IGVycm9yIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHsgdmFsdWUgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhc2VSZXNvbHZlKHZhbHVlKTtcbiAgICB9O1xuICAgIHB1YmxpYyByZWplY3QgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmJhc2VSZWplY3QoZXJyb3IpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGJhc2VSZXNvbHZlITogKHZhbHVlOiBUIHwgUHJvbWlzZTxUPikgPT4gdm9pZDtcbiAgICBwcml2YXRlIGJhc2VSZWplY3QhOiAoZXJyb3I6IGFueSkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLmJhc2VSZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb21pc2UudGhlbihcbiAgICAgICAgICAgIHZhbHVlID0+IHRoaXMudmFsdWUgPSB7IHZhbHVlIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLnZhbHVlID0geyBlcnJvciB9XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZU9iajxUID0gdm9pZD4oKTogUHJvbWlzZU9iajxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqPFQ+KCk7XG59XG5cbi8vIEFsbG93cyBhbiBpbW1lZGlhdGUgY2FsbCwgdGhlbiBkZWxheXMgdGhlIG5leHQgY2FsbCB1bnRpbCB0aGUgZmlyc3QgY2FsbCBmaW5pc2hlcyArIGRlbGF5XG4vLyAgLSBEcm9wcyBhbGwgYnV0IHRoZSBsYXRlc3QgY2FsbCwgYnV0IG9ubHkgcmVzb2x2ZXMgdGhlIHByb21pc2VzIHJldHVybiB0byBhbGxcbi8vICAgICAgY2FsbHMgb25jZSB0aGUgbGF0ZXN0IGNhbGwgZmluaXNoZXMuXG4vLyAgLSBFc2VudGlhbGx5IHRoZSBzYW1lIGFzIHNheWluZyBcImRvbid0IHJ1biB0aGlzIGZ1bmN0aW9uIHRvbyBvZnRlbiwgZG9uJ3QgcnVuIGl0IGluIHBhcmFsbGVsLFxuLy8gICAgICBhbmQgZG9uJ3QgbGV0IGZ1bmN0aW9ucyBydW5zIGJlIHRvbyBjbG9zZSB0b2dldGhlclwiLlxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlRnVuY3Rpb248QXJncyBleHRlbmRzIGFueVtdPihcbiAgICBkZWxheTogbnVtYmVyLFxuICAgIGZuYzogKC4uLmFyZ3M6IEFyZ3MpID0+IE1heWJlUHJvbWlzZTx2b2lkPlxuKTogKC4uLmFyZ3M6IEFyZ3MpID0+IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBuZXh0QWxsb3dlZENhbGwgPSAwO1xuICAgIGxldCBwZW5kaW5nQXJnczogeyBhcmdzOiBBcmdzOyBwcm9taXNlT2JqOiBQcm9taXNlT2JqPHZvaWQ+IH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgZnVuY3Rpb24gZG9DYWxsKGFyZ3M6IEFyZ3MsIHByb21pc2VPYmo6IFByb21pc2VPYmo8dm9pZD4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmbmMoLi4uYXJncyk7XG4gICAgICAgICAgICBwcm9taXNlT2JqLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTk9URTogVGhlIGNhbGxlciBzaG91bGQgaGFuZGxlIHRoZSBwcm9taXNlLiBJZiBub3QsIHRoZXkgcHJvYmFibHlcbiAgICAgICAgICAgICAgICAvLyAgd2FudCB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIHJlamVjdGlvbiwgc28gdGhleSBjYW4gaGFuZGxlIGl0IHByb3Blcmx5LlxuICAgICAgICAgICAgICAgIHZvaWQgcmVzdWx0LmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0QWxsb3dlZENhbGwgPSBEYXRlLm5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bk5leHRDYWxsKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRBbGxvd2VkQ2FsbCA9IERhdGUubm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgICAgICBydW5OZXh0Q2FsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgICAgIHByb21pc2VPYmoucmVqZWN0KGUpO1xuICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gRGF0ZS5ub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgcnVuTmV4dENhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBydW5OZXh0Q2FsbCgpIHtcbiAgICAgICAgaWYgKG5leHRBbGxvd2VkQ2FsbCA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSByZXR1cm47XG4gICAgICAgIGlmICghcGVuZGluZ0FyZ3MpIHJldHVybjtcbiAgICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAodGltZSA+IG5leHRBbGxvd2VkQ2FsbCkge1xuICAgICAgICAgICAgLy8gU2V0IG5leHRBbGxvd2VkQ2FsbCB0byBpbmZpbml0eSwgdG8gcHJldmVudCBuZXcgY2FsbHMgZnJvbSBydW5uaW5nXG4gICAgICAgICAgICAvLyAgdW50aWwgZG9DYWxsIGZpbmlzaGVzLlxuICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICAgICAgLy8gRGVsYXksIHNvIHdlIGRvbid0IHR1cm4gYSBzZXJpZXMgb2Ygc2VxdWVudGlhbCBjYWxscyB0byBhIHNlcmllcyBvZiBuZXN0ZWQgY2FsbHNcbiAgICAgICAgICAgIC8vICAod2hpY2ggd2lsbCBjYXVzZSBhIHN0YWNrIG92ZXJmbG93KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBwZW5kaW5nQXJncztcbiAgICAgICAgICAgICAgICBwZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFsbG93ZWRDYWxsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbXBvc3NpYmxlLCBwZW5kaW5nQXJncyB3YXMgcmVzZXQgd2hlbiB3ZSBzaG91bGRuJ3QgaGF2ZSBldmVuIGJlZW4gaW4gYSBjYWxsYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9DYWxsKGFyZ3MuYXJncywgYXJncy5wcm9taXNlT2JqKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5OZXh0Q2FsbCwgbmV4dEFsbG93ZWRDYWxsIC0gdGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzOiBBcmdzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmIChwZW5kaW5nQXJncykge1xuICAgICAgICAgICAgcGVuZGluZ0FyZ3MuYXJncyA9IGFyZ3M7XG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZ0FyZ3MucHJvbWlzZU9iai5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHBlbmRpbmdBcmdzID0geyBhcmdzLCBwcm9taXNlT2JqOiBwcm9taXNlT2JqKCkgfTtcbiAgICAgICAgcnVuTmV4dENhbGwoKTtcbiAgICAgICAgcmV0dXJuIHBlbmRpbmdBcmdzLnByb21pc2VPYmoucHJvbWlzZTtcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0SWQoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyBcIl9cIiArIE1hdGgucmFuZG9tKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUZyb21PcmRlck9iamVjdDxUPihvYmo6IHsgW29yZGVyOiBudW1iZXJdOiBUIH0pOiBUW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmouc2xpY2UoKTtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5zb3J0KChhLCBiKSA9PiArYVswXSAtICtiWzBdKS5tYXAoeCA9PiB4WzFdKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQgJiYgeCAhPT0gbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCB0eXBlIE9iamVjdFZhbHVlczxUPiA9IFRba2V5b2YgVF07XG5leHBvcnQgZnVuY3Rpb24gZW50cmllczxPYmogZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4ob2JqOiBPYmopOiBba2V5b2YgT2JqLCBPYmplY3RWYWx1ZXM8T2JqPl1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaikgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5czxPYmogZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4ob2JqOiBPYmopOiAoa2V5b2YgT2JqKVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKSBhcyBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0PFQ+KGFycjogVFtdLCBzb3J0S2V5OiAob2JqOiBUKSA9PiB1bmtub3duKSB7XG4gICAgaWYgKGFyci5sZW5ndGggPD0gMSkgcmV0dXJuIGFycjtcbiAgICBhcnIuc29ydCgoYSwgYikgPT4gY29tcGFyZShzb3J0S2V5KGEpLCBzb3J0S2V5KGIpKSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3REb21haW4oaG9zdG5hbWU6IHN0cmluZykge1xuICAgIGlmIChob3N0bmFtZS5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICAgICAgaG9zdG5hbWUgPSBob3N0bmFtZS5zbGljZShcImh0dHBzOi8vXCIubGVuZ3RoKTtcbiAgICB9XG4gICAgaG9zdG5hbWUgPSBob3N0bmFtZS5zcGxpdChcIi9cIilbMF07XG4gICAgbGV0IHBhcnRzID0gaG9zdG5hbWUuc3BsaXQoXCIuXCIpO1xuICAgIGhvc3RuYW1lID0gcGFydHMuc2xpY2UoLTIpLmpvaW4oXCIuXCIpO1xuICAgIGhvc3RuYW1lID0gaG9zdG5hbWUuc3BsaXQoXCI6XCIpWzBdO1xuICAgIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXVlTGltaXRlZDxUPiB7XG4gICAgcHJpdmF0ZSBpdGVtczogVFtdID0gW107XG4gICAgcHJpdmF0ZSBuZXh0SW5kZXggPSAwO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWF4Q291bnQ6IG51bWJlcikgeyB9XG5cbiAgICBwdWJsaWMgcHVzaChpdGVtOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXNbdGhpcy5uZXh0SW5kZXhdID0gaXRlbTtcbiAgICAgICAgdGhpcy5uZXh0SW5kZXggPSAodGhpcy5uZXh0SW5kZXggKyAxKSAlIHRoaXMubWF4Q291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbFVub3JkZXJlZCgpOiBUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMubmV4dEluZGV4ID0gMDtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRPbGRlc3QoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5uZXh0SW5kZXggLSAxO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IHRoaXMubWF4Q291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoQmFzaWM8VCwgVj4oYXJyYXk6IFRbXSwgZ2V0VmFsOiAodmFsOiBUKSA9PiBWLCBzZWFyY2hWYWx1ZTogVik6IG51bWJlciB7XG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaEluZGV4KGFycmF5Lmxlbmd0aCwgaSA9PiBjb21wYXJlKGdldFZhbChhcnJheVtpXSksIHNlYXJjaFZhbHVlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoQmFzaWMyPFQsIFY+KGFycmF5OiBUW10sIGdldFZhbDogKHZhbDogVCkgPT4gViwgc2VhcmNoVmFsdWU6IFQpOiBudW1iZXIge1xuICAgIHJldHVybiBiaW5hcnlTZWFyY2hJbmRleChhcnJheS5sZW5ndGgsIGkgPT4gY29tcGFyZShnZXRWYWwoYXJyYXlbaV0pLCBnZXRWYWwoc2VhcmNoVmFsdWUpKSk7XG59XG5cbi8qKlxuICogIFNlYXJjaGVzIGluZGV4ZXMsIGFsbG93aW5nIHlvdSB0byBxdWVyeSBzdHJ1Y3R1cmVzIHRoYXQgYXJlbid0IGFycmF5cy4gVG8gc2VhcmNoIGFuIGFycmF5LCB1c2U6XG4gKiAgICAgIGBiaW5hcnlTZWFyY2hJbmRleChhcnJheS5sZW5ndGgsIGkgPT4gY29tcGFyZShhcnJheVtpXSwgc2VhcmNoVmFsdWUpKWBcbiAqIFxuICogICAgICBOT1RFOiBJZiB0aGVyZSBhcmUgZHVwbGljYXRlcywgcmV0dXJucyB0aGUgZmlyc3QgbWF0Y2guXG4gKiBcbiAqICAgICAgTk9URTogSWYgdGhlIHZhbHVlIGNhbid0IGJlIGZvdW5kLCByZXR1cm5zIHRoZSBiaXR3aXNlIG5lZ2F0aW9uIG9mIHRoZSBpbmRleCB3aGVyZSBpdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBcbiAqICAgICAgTk9URTogV2l0aCBgaWYgKGluZGV4IDwgMCkgaW5kZXggPSB+aW5kZXg7YCB5b3Ugd2lsbCBnZXQgYW4gaW5kZXggb2YgdGhlIHZhbHVlID49IHRoZSB0YXJnZXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2hJbmRleChsaXN0Q291bnQ6IG51bWJlciwgY29tcGFyZTogKGxoc0luZGV4OiBudW1iZXIpID0+IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGxpc3RDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gfjA7XG4gICAgfVxuICAgIGxldCBtaW4gPSAwO1xuICAgIGxldCBtYXggPSBsaXN0Q291bnQgLSAxO1xuICAgIHdoaWxlIChtaW4gPCBtYXgpIHtcbiAgICAgICAgbGV0IGZpbmdlckluZGV4ID0gTWF0aC5mbG9vcigobWF4ICsgbWluKSAvIDIpO1xuICAgICAgICBsZXQgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShmaW5nZXJJbmRleCk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgPCAwKSB7XG4gICAgICAgICAgICBtaW4gPSBmaW5nZXJJbmRleCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXggPSBmaW5nZXJJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgY29tcGFyaXNvbiA9IGNvbXBhcmUobWluKTtcbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkgcmV0dXJuIG1pbjtcbiAgICBpZiAoY29tcGFyaXNvbiA+IDApIHJldHVybiB+bWluO1xuICAgIHJldHVybiB+KG1pbiArIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZShsaHM6IHVua25vd24sIHJoczogdW5rbm93bik6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBsaHMgIT09IHR5cGVvZiByaHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmUodHlwZW9mIGxocywgdHlwZW9mIHJocyk7XG4gICAgfVxuICAgIGlmIChsaHMgPT09IHJocykgcmV0dXJuIDA7XG4gICAgaWYgKGxocyA9PT0gbnVsbCAmJiByaHMgIT09IG51bGwpIHJldHVybiAtMTtcbiAgICBpZiAobGhzICE9PSBudWxsICYmIHJocyA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKHR5cGVvZiBsaHMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihsaHMpKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHJocykpIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihyaHMpKSByZXR1cm4gKzE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxocyBhcyBhbnkgPCAocmhzIGFzIGFueSkpIHJldHVybiAtMTtcbiAgICByZXR1cm4gMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXJyYXkobGhzOiB1bmtub3duW10sIHJoczogdW5rbm93bltdKTogbnVtYmVyIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKGxocy5sZW5ndGgsIHJocy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBhcmlzb24gPSBjb21wYXJlKGxoc1tpXSwgcmhzW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gIT09IDApIHJldHVybiBjb21wYXJpc29uO1xuICAgIH1cbiAgICByZXR1cm4gbGhzLmxlbmd0aCAtIHJocy5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRJbnRvU29ydGVkTGlzdDxUPihsaXN0OiBUW10sIG1hcDogKHZhbDogVCkgPT4gc3RyaW5nIHwgbnVtYmVyLCBlbGVtZW50OiBUKSB7XG4gICAgbGV0IHNlYXJjaFZhbHVlID0gbWFwKGVsZW1lbnQpO1xuICAgIGxldCBpbmRleCA9IGJpbmFyeVNlYXJjaEluZGV4KGxpc3QubGVuZ3RoLCBpID0+IGNvbXBhcmUobWFwKGxpc3RbaV0pLCBzZWFyY2hWYWx1ZSkpO1xuICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gfmluZGV4O1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAwLCBlbGVtZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tU29ydGVkTGlzdDxUPihsaXN0OiBUW10sIG1hcDogKHZhbDogVCkgPT4gc3RyaW5nIHwgbnVtYmVyLCBzZWFyY2hWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgbGV0IGluZGV4ID0gYmluYXJ5U2VhcmNoSW5kZXgobGlzdC5sZW5ndGgsIGkgPT4gY29tcGFyZShtYXAobGlzdFtpXSksIHNlYXJjaFZhbHVlKSk7XG4gICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0VG9FcnJvcjxUPih0aW1lOiBudW1iZXIsIHA6IFByb21pc2U8VD4sIGVycjogKCkgPT4gRXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVycigpKSwgdGltZSk7XG4gICAgICAgIHAudGhlbihyZXNvbHZlLCByZWplY3QpLmZpbmFsbHkoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpKTtcbiAgICB9KTtcbn1cblxuLy8gTk9URTogQm90aCBlcnJvcnMgYW5kIHRpbWVvdXRzIGFyZSBjb252ZXJ0ZWQgdG8gdW5kZWZpbmVkXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dFRvVW5kZWZpbmVkPFQ+KHRpbWU6IG51bWJlciwgcDogUHJvbWlzZTxUPikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGB0aW1lb3V0VG9VbmRlZmluZWQgdGltZWQgb3V0IGFmdGVyICR7dGltZX1gKTtcbiAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICAgIHAudGhlbihyZXNvbHZlLFxuICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHRpbWVvdXRUb1VuZGVmaW5lZCBlcnJvcjogJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApLmZpbmFsbHkoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0VG9VbmRlZmluZWRTaWxlbnQ8VD4odGltZTogbnVtYmVyLCBwOiBQcm9taXNlPFQ+KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQgfCB1bmRlZmluZWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICAgIHAudGhlbihcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApLmZpbmFsbHkoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yVG9XYXJuaW5nPFQ+KHByb21pc2U6IFByb21pc2U8VD4pOiB2b2lkIHtcbiAgICAvLyBSZXR1cm4gdGhlIHByb21pc2UsIHNvIHRoZXkgY2FuIHdhaXQgaWYgdGhleSB3YW50LCBidXQgaGF2ZSB0aGUgcmV0dXJuIHR5cGUgYmUgdm9pZCxcbiAgICAvLyAgc28gdGhhdCB0aGV5IGRvbid0IGhhdmUgdG8gYXdhaXQgaXQuXG4gICAgcmV0dXJuIHByb21pc2UuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihlLnN0YWNrKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgfSkgYXMgYW55O1xufVxuIiwiZXhwb3J0IHR5cGUgTWF5YmVQcm9taXNlPFQ+ID0gVCB8IFByb21pc2U8VD47XG5cbmV4cG9ydCB0eXBlIEFyZ3M8VD4gPSBUIGV4dGVuZHMgKC4uLmFyZ3M6IGluZmVyIFYpID0+IGFueSA/IFYgOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgQW55RnVuY3Rpb24gPSAoLi4uYXJnczogYW55KSA9PiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5IYXZlQ2hpbGRyZW4odmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyB7IFtrZXkgaW4gUHJvcGVydHlLZXldOiB1bmtub3duIH0ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUobWlsbGlzZWNvbmRzOiBudW1iZXIgfCB1bmRlZmluZWQsIG1heEFic29sdXRlVmFsdWU/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgbWlsbGlzZWNvbmRzICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCJcIjtcbiAgICBpZiAobWlsbGlzZWNvbmRzID09PSAwKSByZXR1cm4gXCIwbXNcIjtcbiAgICBpZiAobWlsbGlzZWNvbmRzIDwgMCkge1xuICAgICAgICByZXR1cm4gXCItXCIgKyBmb3JtYXRUaW1lKC1taWxsaXNlY29uZHMsIG1heEFic29sdXRlVmFsdWUpO1xuICAgIH1cbiAgICBsZXQgc2NhbGUgPSBtaWxsaXNlY29uZHM7XG4gICAgaWYgKG1heEFic29sdXRlVmFsdWUpIHtcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heChzY2FsZSwgbWF4QWJzb2x1dGVWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChzY2FsZSA8IDEgLyAxMDAwKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgKiAxMDAwICogMTAwMCwgMykgKyBcIm5zXCI7XG4gICAgfSBlbHNlIGlmIChzY2FsZSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1heERlY2ltYWxzKG1pbGxpc2Vjb25kcyAqIDEwMDAsIDMpICsgXCJ1c1wiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMsIDMpICsgXCJtc1wiO1xuICAgICAgICAvLyBVc2Ugc2Vjb25kcyB1bnRpbCB3ZSBoYXZlIDEwIG1pbnV0ZXMsIGFzIGRlY2ltYWwgbWludXRlcyBhcmUgY29uZnVzaW5nXG4gICAgfSBlbHNlIGlmIChzY2FsZSA8IDEwMDAgKiA2MCAqIDEwKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgLyAxMDAwLCAzKSArIFwic1wiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwICogNjAgKiA2MCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TWF4RGVjaW1hbHMobWlsbGlzZWNvbmRzIC8gMTAwMCAvIDYwLCAzKSArIFwibVwiO1xuICAgIH0gZWxzZSBpZiAoc2NhbGUgPCAxMDAwICogNjAgKiA2MCAqIDI0KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhtaWxsaXNlY29uZHMgLyAxMDAwIC8gNjAgLyA2MCwgMykgKyBcImhcIjtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChtaWxsaXNlY29uZHMgPCAxMDAwICogNjAgKiA2MCAqIDI0ICogMTApIHtcbiAgICAgICAgLy8gICAgIGxldCByZW1haW5pbmcgPSBNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgICAgICAvLyAgICAgbGV0IHNlY29uZHMgPSByZW1haW5pbmcgJSA2MDtcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAtPSBzZWNvbmRzO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC89IDYwO1xuICAgICAgICAvLyAgICAgbGV0IG1pbnV0ZXMgPSByZW1haW5pbmcgJSA2MDtcbiAgICAgICAgLy8gICAgIHJlbWFpbmluZyAtPSBtaW51dGVzO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC89IDYwO1xuICAgICAgICAvLyAgICAgbGV0IGhvdXJzID0gcmVtYWluaW5nO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC09IGhvdXJzO1xuICAgICAgICAvLyAgICAgcmVtYWluaW5nIC89IDI0O1xuICAgICAgICAvLyAgICAgbGV0IGRheXMgPSByZW1haW5pbmc7XG4gICAgICAgIC8vICAgICBsZXQgdGltZSA9IGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfToke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgICAgICAvLyAgICAgaWYgKGRheXMgPiAwKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGRheXMgPT09IDEpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGltZSA9IGAxIGRheSAke3RpbWV9YDtcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aW1lID0gYCR7ZGF5c30gZGF5cyAke3RpbWV9YDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gdGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF5cyA9IE1hdGgucm91bmQobWlsbGlzZWNvbmRzIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCk7XG4gICAgICAgIHJldHVybiBgJHtkYXlzfSBkYXlzYDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXREZWNpbWFscyhtYXhBYnNvbHV0ZVZhbHVlOiBudW1iZXIsIHRhcmdldERpZ2l0czogbnVtYmVyKSB7XG4gICAgbGV0IGludERpZ2l0cyA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChtYXhBYnNvbHV0ZVZhbHVlKSArIDEpO1xuICAgIGlmIChpbnREaWdpdHMgPCAwKSBpbnREaWdpdHMgPSAxO1xuICAgIGxldCBkZWNpbWFsRGlnaXRzID0gdGFyZ2V0RGlnaXRzIC0gaW50RGlnaXRzO1xuICAgIC8vIEhhcHBlbnMgaWYgdGhlIG51bWJlciBpcyBzbyBjbG9zZSB0byBoYXZpbmcgdG9vIG1hbnkgZGlnaXRzIHRoYXQgTWF0aC5sb2cxMCByb3VuZHMgaXQgb3Zlci5cbiAgICBpZiAoZGVjaW1hbERpZ2l0cyA8IDApIHtcbiAgICAgICAgZGVjaW1hbERpZ2l0cyA9IDA7XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsRGlnaXRzO1xufVxuXG4vKiogQWRkcyBkZWNpbWFsIGRpZ2l0cyB0byByZWFjaCBkaWdpdHMuIElmIHRoZSBudW1iZXIgaXMgc2ltcGx5IHRvbyBsYXJnZSwgaXQgd29uJ3QgcmVtb3ZlXG4gKiAgICAgIGRpZ2l0cywgdGhlcmUgd2lsbCBpbnN0ZWFkIGp1c3QgYmUgbm8gZGVjaW1hbCBwb2ludC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1heERlY2ltYWxzKG51bTogbnVtYmVyLCB0YXJnZXREaWdpdHM6IG51bWJlciwgbWF4QWJzb2x1dGVWYWx1ZT86IG51bWJlciwgZXhhY3REZWNpbWFscz86IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT09IFwibnVtYmVyXCIpIHJldHVybiBcIjBcIjtcbiAgICAvLyB0b0ZpeGVkIGhhcyBhIG1heCBvZiAxMDAgZGlnaXRzXG4gICAgaWYgKHRhcmdldERpZ2l0cyA+IDEwMCkgdGFyZ2V0RGlnaXRzID0gMTAwO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG51bSkpIHJldHVybiBudW0udG9GaXhlZCh0YXJnZXREaWdpdHMpO1xuXG4gICAgaWYgKG51bSA8IDApIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscygtbnVtLCB0YXJnZXREaWdpdHMsIG1heEFic29sdXRlVmFsdWUsIGV4YWN0RGVjaW1hbHMpO1xuXG4gICAgLy8gVElNSU5HOlxuICAgIC8vICB+NTBucyAgIHRvU3RyaW5nXG4gICAgLy8gIH40MDBucyAgdG9Mb2NhbGVTdHJpbmdcbiAgICAvLyAgfjUwMG5zICB0b0xvY2FsZVN0cmluZyhcImVuLXVzXCIpXG4gICAgLy8gIH4yMHVzICAgdG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KVxuICAgIC8vIFNvLCB3ZSBhcmUgYXZvaWRpbmcgdXNpbmcgdG9Mb2NhbGVTdHJpbmcsIGZvciBub3cuXG5cbiAgICBtYXhBYnNvbHV0ZVZhbHVlID0gbWF4QWJzb2x1dGVWYWx1ZSA/PyBNYXRoLmFicyhudW0pO1xuXG4gICAgbGV0IHRhcmdldERlY2ltYWxzID0gZXhhY3REZWNpbWFscyA/PyBnZXRUYXJnZXREZWNpbWFscyhtYXhBYnNvbHV0ZVZhbHVlLCB0YXJnZXREaWdpdHMpO1xuICAgIGxldCB0ZXh0ID0gbnVtLnRvRml4ZWQodGFyZ2V0RGVjaW1hbHMpO1xuICAgIGxldCBwYXJ0cyA9IHRleHQuc3BsaXQoXCIuXCIpO1xuICAgIGxldCBpbnRlZ2VyID0gcGFydHNbMF07XG4gICAgbGV0IGRlY2ltYWxzID0gcGFydHNbMV0gPz8gXCJcIjtcblxuICAgIGlmIChleGFjdERlY2ltYWxzKSB7XG4gICAgICAgIHdoaWxlIChkZWNpbWFscy5sZW5ndGggPCBleGFjdERlY2ltYWxzKSB7XG4gICAgICAgICAgICBkZWNpbWFscyArPSBcIjBcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChkZWNpbWFsc1tkZWNpbWFscy5sZW5ndGggLSAxXSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgIGRlY2ltYWxzID0gZGVjaW1hbHMuc2xpY2UoMCwgLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG5cbiAgICAvLyBOT1RFOiBPTkxZIGFkZCBjb21tYSBncm91cHMgaWYgaXQgaXMgPiA0IGRpZ2l0cy4gQXMgNDIzNEsgaXMgZWFzaWx5IHJlYWQsIGFuZCBjb21tYXNcbiAgICAvLyAgb25seSByZWFsbHkgbWF0dGVyIGZvciBudW1iZXJzIHN1Y2ggYXMgNDIzNDUyM0ssIHdoaWNoIGlzIGhhcmQgdG8gcmVhZC5cbiAgICBpZiAoaW50ZWdlci5sZW5ndGggPiA0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbnRlZ2VyLmxlbmd0aDsgaSA+IDA7IGkgLT0gMykge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gaSAtIDM7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XG4gICAgICAgICAgICBsZXQgc3RyID0gaW50ZWdlci5zbGljZShzdGFydCwgaSk7XG4gICAgICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gXCIsXCIgKyBvdXRwdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQgPSBzdHIgKyBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBpbnRlZ2VyO1xuICAgIH1cblxuICAgIGlmIChkZWNpbWFscykge1xuICAgICAgICBvdXRwdXQgKz0gXCIuXCIgKyBkZWNpbWFscztcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKiogQWN0dWFsbHkgZm9ybWF0cyBhbnkgbnVtYmVyLCBpbmNsdWRpbmcgZGVjaW1hbHMsIGJ5IHVzaW5nIEssIE0gYW5kIEIgc3VmZml4ZXMgdG8gZ2V0IHNtYWxsZXIgdmFsdWVzXG4gKiAgICAgIFRPRE86IFN1cHBvcnQgdUssIHVNIGFuZCB1QiBzdWZmaXhlcyBmb3IgdmVyeSBzbWFsbCBudW1iZXJzP1xuICogICAgICA8PSA2IGNoYXJhY3RlcnMgKDw9IDUgaWYgcG9zaXRpdmUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIoY291bnQ6IG51bWJlciB8IHVuZGVmaW5lZCwgbWF4QWJzb2x1dGVWYWx1ZT86IG51bWJlciwgbm9EZWNpbWFsPzogYm9vbGVhbiwgc3BlY2lhbEN1cnJlbmN5PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBjb3VudCAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiMFwiO1xuICAgIGlmIChjb3VudCA8IDApIHtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgZm9ybWF0TnVtYmVyKC1jb3VudCwgbWF4QWJzb2x1dGVWYWx1ZSwgbm9EZWNpbWFsLCBzcGVjaWFsQ3VycmVuY3kpO1xuICAgIH1cblxuICAgIG1heEFic29sdXRlVmFsdWUgPSBtYXhBYnNvbHV0ZVZhbHVlID8/IE1hdGguYWJzKGNvdW50KTtcblxuICAgIGxldCBtYXhEZWNpbWFscyA9IDM7XG5cbiAgICAvLyBOT1RFOiBXZSBkb24ndCBzd2l0Y2ggdW5pdHMgYXMgc29vbiBhcyB3ZSBwb3NzaWJsZSBjYW4sIGJlY2F1c2UuLi5cbiAgICAvLyAgMy41OTQgdnMgMy41ODQgaXMgaGFyZGVyIHRvIHF1aWNrbHkgZGlzdGluZ3Vpc2ggY29tcGFyZWQgdG8gMzU5NCBhbmQgMzU4NCxcbiAgICAvLyAgdGhlIGRlY2ltYWwgc2ltcGx5IG1ha2VzIGl0IGhhcmRlciB0byByZWFkLCBhbmQgbGFyZ2VyLlxuICAgIC8vIE5PVEU6IFRoaXMgbnVtYmVyIHNob3VsZCBwcmV2ZW50IHVzIGZyb20gZXZlciB1c2luZyA1IGRpZ2l0cywgc28gdGhhdCB3ZSBuZXZlciBuZWVkIGNvbW1hc1xuICAgIC8vICBGb3IgZXhhbXBsZSwgaWYgdGhlIGZhY3RvciBpcyAxMCB0aGVuLCA5OTk5LjUgaXMga2VwdCB3aXRoIGEgZGl2aXNvciBvZiAxLCBhbmQgdGhlbiByb3VuZHMgdXAgdG9cbiAgICAvLyAgXCIxMCwwMDBcIi4gU28gd2Ugd2FudCBhbnkgdmFsdWUgd2hpY2ggcm91bmRzIHVwIGF0IDUgZGlnaXRzIHRvIGJlIHB1dCBpbiB0aGUgbmV4dCBncm91cCAoYW5kIGhhdmluZ1xuICAgIC8vICBleHRyYSB2YWx1ZXMgcHV0IGluIHRoZSBuZXh0IGdyb3VwIGlzIGZpbmUsIGFzIHdlIHdvbid0IHNob3cgdGhlIGRlY2ltYWwgdmFsdWUgYW55d2F5cywgc28gaXQgb25seVxuICAgIC8vICBtZWFucyA5OTk5IHdyYXBzIGFyb3VuZCB0byAxMEsgYSBiaXQgZmFzdGVyKS5cbiAgICBjb25zdCBleHRyYUZhY3RvciA9IDkuOTk5NDk5OTk7XG4gICAgbGV0IGRpdmlzb3IgPSAxO1xuICAgIGxldCBzdWZmaXggPSBcIlwiO1xuICAgIGxldCBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID0gZmFsc2U7XG4gICAgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMTI7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gMTE7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSAxMDtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gOTtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAwMDEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSA4O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDAuMDAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gNztcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjAxKSB7XG4gICAgICAgIG1heERlY2ltYWxzID0gNjtcbiAgICB9IGVsc2UgaWYgKG1heEFic29sdXRlVmFsdWUgPCAwLjEpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSA1O1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBpZiAoc3BlY2lhbEN1cnJlbmN5KSB7XG4gICAgICAgICAgICBjdXJyZW5jeURlY2ltYWxzTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJLXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDAwO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiTVwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDA7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiQlwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDAgKiAxMDAwO1xuICAgIH0gZWxzZSBpZiAobWF4QWJzb2x1dGVWYWx1ZSA8IDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJUXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDAwICogMTAwMCAqIDEwMDAgKiAxMDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1ZmZpeCA9IFwiUVwiO1xuICAgICAgICBkaXZpc29yID0gMTAwMCAqIDEwMDAgKiAxMDAwICogMTAwMCAqIDEwMDA7XG4gICAgfVxuICAgIGNvdW50IC89IGRpdmlzb3I7XG4gICAgbWF4QWJzb2x1dGVWYWx1ZSAvPSBkaXZpc29yO1xuICAgIGlmIChub0RlY2ltYWwpIHtcbiAgICAgICAgbWF4RGVjaW1hbHMgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhjb3VudCwgbWF4RGVjaW1hbHMsIG1heEFic29sdXRlVmFsdWUsIGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPyAyIDogdW5kZWZpbmVkKSArIHN1ZmZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEJpbmFyeU51bWJlcihjb3VudDogbnVtYmVyIHwgdW5kZWZpbmVkLCBtYXhBYnNvbHV0ZVZhbHVlPzogbnVtYmVyLCBub0RlY2ltYWw/OiBib29sZWFuLCBzcGVjaWFsQ3VycmVuY3k/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIGNvdW50ICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCIwXCI7XG4gICAgaWYgKGNvdW50IDwgMCkge1xuICAgICAgICByZXR1cm4gXCItXCIgKyBmb3JtYXROdW1iZXIoLWNvdW50LCBtYXhBYnNvbHV0ZVZhbHVlLCBub0RlY2ltYWwsIHNwZWNpYWxDdXJyZW5jeSk7XG4gICAgfVxuXG4gICAgbWF4QWJzb2x1dGVWYWx1ZSA9IG1heEFic29sdXRlVmFsdWUgPz8gTWF0aC5hYnMoY291bnQpO1xuXG4gICAgLy8gTk9URTogV2UgZG9uJ3Qgc3dpdGNoIHVuaXRzIGFzIHNvb24gYXMgd2UgcG9zc2libGUgY2FuLCBiZWNhdXNlLi4uXG4gICAgLy8gIDMuNTk0IHZzIDMuNTg0IGlzIGhhcmRlciB0byBxdWlja2x5IGRpc3Rpbmd1aXNoIGNvbXBhcmVkIHRvIDM1OTQgYW5kIDM1ODQsXG4gICAgLy8gIHRoZSBkZWNpbWFsIHNpbXBseSBtYWtlcyBpdCBoYXJkZXIgdG8gcmVhZCwgYW5kIGxhcmdlci5cbiAgICAvLyBOT1RFOiBUaGlzIG51bWJlciBzaG91bGQgcHJldmVudCB1cyBmcm9tIGV2ZXIgdXNpbmcgNSBkaWdpdHMsIHNvIHRoYXQgd2UgbmV2ZXIgbmVlZCBjb21tYXNcbiAgICAvLyAgRm9yIGV4YW1wbGUsIGlmIHRoZSBmYWN0b3IgaXMgMTAgdGhlbiwgOTk5OS41IGlzIGtlcHQgd2l0aCBhIGRpdmlzb3Igb2YgMSwgYW5kIHRoZW4gcm91bmRzIHVwIHRvXG4gICAgLy8gIFwiMTAsMDAwXCIuIFNvIHdlIHdhbnQgYW55IHZhbHVlIHdoaWNoIHJvdW5kcyB1cCBhdCA1IGRpZ2l0cyB0byBiZSBwdXQgaW4gdGhlIG5leHQgZ3JvdXAgKGFuZCBoYXZpbmdcbiAgICAvLyAgZXh0cmEgdmFsdWVzIHB1dCBpbiB0aGUgbmV4dCBncm91cCBpcyBmaW5lLCBhcyB3ZSB3b24ndCBzaG93IHRoZSBkZWNpbWFsIHZhbHVlIGFueXdheXMsIHNvIGl0IG9ubHlcbiAgICAvLyAgbWVhbnMgOTk5OSB3cmFwcyBhcm91bmQgdG8gMTBLIGEgYml0IGZhc3RlcikuXG4gICAgY29uc3QgZXh0cmFGYWN0b3IgPSA5Ljk5OTQ5OTk5O1xuICAgIGxldCBkaXZpc29yID0gMTtcbiAgICBsZXQgc3VmZml4ID0gXCJcIjtcbiAgICBsZXQgY3VycmVuY3lEZWNpbWFsc05lZWRlZCA9IGZhbHNlO1xuICAgIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAyNCAqIGV4dHJhRmFjdG9yKSB7XG4gICAgICAgIGlmIChzcGVjaWFsQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAyNCAqIDEwMjQgKiBleHRyYUZhY3Rvcikge1xuICAgICAgICBzdWZmaXggPSBcIktcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMjQ7XG4gICAgfSBlbHNlIGlmIChtYXhBYnNvbHV0ZVZhbHVlIDwgMTAyNCAqIDEwMjQgKiAxMDI0ICogZXh0cmFGYWN0b3IpIHtcbiAgICAgICAgc3VmZml4ID0gXCJNXCI7XG4gICAgICAgIGRpdmlzb3IgPSAxMDI0ICogMTAyNDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWZmaXggPSBcIkdcIjtcbiAgICAgICAgZGl2aXNvciA9IDEwMjQgKiAxMDI0ICogMTAyNDtcbiAgICB9XG4gICAgY291bnQgLz0gZGl2aXNvcjtcbiAgICBtYXhBYnNvbHV0ZVZhbHVlIC89IGRpdmlzb3I7XG5cbiAgICBsZXQgbWF4RGVjaW1hbHMgPSBub0RlY2ltYWwgPyAwIDogMztcblxuICAgIHJldHVybiBmb3JtYXRNYXhEZWNpbWFscyhjb3VudCwgbWF4RGVjaW1hbHMsIG1heEFic29sdXRlVmFsdWUsIGN1cnJlbmN5RGVjaW1hbHNOZWVkZWQgPyAyIDogdW5kZWZpbmVkKSArIHN1ZmZpeDtcbn1cblxuLyoqIFlZWVkvTU0vREQgSEg6TU06U1MgUE0vQU0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlVGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcbiAgICBsZXQgc3RyVGltZSA9IHAoaG91cnMpICsgXCI6XCIgKyBwKG1pbnV0ZXMpICsgXCI6XCIgKyBwKHNlY29uZHMpICsgXCIgXCIgKyBhbXBtO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIHAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHAoZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWVEZXRhaWxlZCh0aW1lOiBudW1iZXIpIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGxldCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGxldCBtaWxsaXNlY29uZHNTdHJpbmcgPSBtaWxsaXNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgzLCBcIjBcIik7XG5cbiAgICBsZXQgdGltZVN0cmluZyA9IHRpbWUudG9TdHJpbmcoKTtcbiAgICBsZXQgZGVjaW1hbEluZGV4ID0gdGltZVN0cmluZy5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoZGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBsZXQgZnJhY3Rpb25hbFBhcnQgPSB0aW1lU3RyaW5nLnN1YnN0cmluZyhkZWNpbWFsSW5kZXggKyAxKTtcbiAgICAgICAgbWlsbGlzZWNvbmRzU3RyaW5nICs9IGZyYWN0aW9uYWxQYXJ0O1xuICAgIH1cblxuICAgIGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcbiAgICBsZXQgc3RyVGltZSA9IHAoaG91cnMpICsgXCI6XCIgKyBwKG1pbnV0ZXMpICsgXCI6XCIgKyBwKHNlY29uZHMpICsgXCIuXCIgKyBtaWxsaXNlY29uZHNTdHJpbmcgKyBcIiBcIiArIGFtcG07XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgcChkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiL1wiICsgcChkYXRlLmdldERhdGUoKSkgKyBcIiBcIiArIHN0clRpbWU7XG59XG5cblxuLy8gTG9va3VwIHRhYmxlIGZvciBjb21tb24gdGltZXpvbmUgYWJicmV2aWF0aW9ucyBieSBVVEMgb2Zmc2V0IChpbiBtaW51dGVzKVxuY29uc3QgdGltZXpvbmVBYmJyZXZpYXRpb25zOiB7IFtvZmZzZXRNaW51dGVzOiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICAvLyBVVEMgYW5kIEdNVFxuICAgIFwiMFwiOiBcIlVUQ1wiLFxuXG4gICAgLy8gVVMvQ2FuYWRhIHRpbWV6b25lc1xuICAgIFwiMzAwXCI6IFwiRVNUXCIsICAgICAvLyBVVEMtNSAoRWFzdGVybiBTdGFuZGFyZCBUaW1lKVxuICAgIFwiMjQwXCI6IFwiRURUXCIsICAgICAvLyBVVEMtNCAoRWFzdGVybiBEYXlsaWdodCBUaW1lKVxuICAgIFwiMzYwXCI6IFwiQ1NUXCIsICAgICAvLyBVVEMtNiAoQ2VudHJhbCBTdGFuZGFyZCBUaW1lKSBcbiAgICBcIjQyMFwiOiBcIk1TVFwiLCAgICAgLy8gVVRDLTcgKE1vdW50YWluIFN0YW5kYXJkIFRpbWUpXG4gICAgXCI0ODBcIjogXCJQU1RcIiwgICAgIC8vIFVUQy04IChQYWNpZmljIFN0YW5kYXJkIFRpbWUpXG5cbiAgICAvLyBFdXJvcGVhbiB0aW1lem9uZXNcbiAgICBcIi02MFwiOiBcIkNFVFwiLCAgICAgLy8gVVRDKzEgKENlbnRyYWwgRXVyb3BlYW4gVGltZSlcbiAgICBcIi0xMjBcIjogXCJDRVNUXCIsICAgLy8gVVRDKzIgKENlbnRyYWwgRXVyb3BlYW4gU3VtbWVyIFRpbWUpXG5cbiAgICAvLyBPdGhlciBjb21tb24gdGltZXpvbmVzXG4gICAgXCItNDgwXCI6IFwiQ1NUXCIsICAgIC8vIFVUQys4IChDaGluYSBTdGFuZGFyZCBUaW1lKVxuICAgIFwiLTU0MFwiOiBcIkpTVFwiLCAgICAvLyBVVEMrOSAoSmFwYW4gU3RhbmRhcmQgVGltZSlcbiAgICBcIi0zMzBcIjogXCJJU1RcIiwgICAgLy8gVVRDKzU6MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG4gICAgXCItNTcwXCI6IFwiQUNTVFwiLCAgIC8vIFVUQys5OjMwIChBdXN0cmFsaWFuIENlbnRyYWwgU3RhbmRhcmQgVGltZSlcbiAgICBcIi02MDBcIjogXCJBRVNUXCIsICAgLy8gVVRDKzEwIChBdXN0cmFsaWFuIEVhc3Rlcm4gU3RhbmRhcmQgVGltZSlcbn07XG5cblxuLy8gWVlZWS1NTS1ERF9ISC1NTS1TUy5tbW0gVElNRVpPTkVcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWxlVGltZXN0YW1wTG9jYWwodGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBmdW5jdGlvbiBwKHM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IHAoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgbGV0IGRheSA9IHAoZGF0ZS5nZXREYXRlKCkpO1xuICAgIGxldCBob3VycyA9IHAoZGF0ZS5nZXRIb3VycygpKTtcbiAgICBsZXQgbWludXRlcyA9IHAoZGF0ZS5nZXRNaW51dGVzKCkpO1xuICAgIGxldCBzZWNvbmRzID0gcChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgbGV0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgbGV0IG1pbGxpc2Vjb25kc1N0cmluZyA9IG1pbGxpc2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDMsIFwiMFwiKTtcblxuICAgIGxldCB0aW1lU3RyaW5nID0gdGltZS50b1N0cmluZygpO1xuICAgIGxldCBkZWNpbWFsSW5kZXggPSB0aW1lU3RyaW5nLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChkZWNpbWFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxldCBmcmFjdGlvbmFsUGFydCA9IHRpbWVTdHJpbmcuc3Vic3RyaW5nKGRlY2ltYWxJbmRleCArIDEpO1xuICAgICAgICBtaWxsaXNlY29uZHNTdHJpbmcgKz0gZnJhY3Rpb25hbFBhcnQ7XG4gICAgfVxuICAgIC8vIEdldCB0aW1lem9uZSBvZmZzZXQgaW4gbWludXRlcyAobmVnYXRpdmUgb2YgZ2V0VGltZXpvbmVPZmZzZXQgYmVjYXVzZSBpdCByZXR1cm5zIG9wcG9zaXRlIHNpZ24pXG4gICAgbGV0IHRpbWV6b25lT2Zmc2V0TWludXRlcyA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIC8vIExvb2sgdXAgdGhlIGFiYnJldmlhdGlvbiBvciBmYWxsYmFjayB0byBudW1lcmljIGZvcm1hdFxuICAgIGxldCB0aW1lem9uZVN0cmluZyA9IHRpbWV6b25lQWJicmV2aWF0aW9uc1t0aW1lem9uZU9mZnNldE1pbnV0ZXMudG9TdHJpbmcoKV07XG4gICAgaWYgKCF0aW1lem9uZVN0cmluZykge1xuICAgICAgICAvLyBGYWxsYmFjazogZm9ybWF0IGFzIMKxSEhNTVxuICAgICAgICBsZXQgb2Zmc2V0U2lnbiA9IHRpbWV6b25lT2Zmc2V0TWludXRlcyA+PSAwID8gXCIrXCIgOiBcIi1cIjtcbiAgICAgICAgbGV0IG9mZnNldEhvdXJzID0gcChNYXRoLmZsb29yKE1hdGguYWJzKHRpbWV6b25lT2Zmc2V0TWludXRlcykgLyA2MCkpO1xuICAgICAgICBsZXQgb2Zmc2V0TWlucyA9IHAoTWF0aC5hYnModGltZXpvbmVPZmZzZXRNaW51dGVzKSAlIDYwKTtcbiAgICAgICAgdGltZXpvbmVTdHJpbmcgPSBgJHtvZmZzZXRTaWdufSR7b2Zmc2V0SG91cnN9JHtvZmZzZXRNaW5zfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fV8ke2hvdXJzfS0ke21pbnV0ZXN9LSR7c2Vjb25kc30uJHttaWxsaXNlY29uZHNTdHJpbmd9XyR7dGltZXpvbmVTdHJpbmd9YDtcbn1cblxuLyoqIDIwMjQgSmFudWFyeSAxLCBNb25kYXksIDEyOjUzOjAycG0gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROaWNlRGF0ZVRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgZnVuY3Rpb24gcChzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgbGV0IHN0clRpbWUgPSBwKGhvdXJzKSArIFwiOlwiICsgcChtaW51dGVzKSArIFwiOlwiICsgcChzZWNvbmRzKSArIGFtcG07XG4gICAgbGV0IGRheXMgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIgXCIgKyBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZGVmYXVsdFwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KSArIFwiIFwiICsgZGF0ZS5nZXREYXRlKCkgKyBcIiwgXCIgKyBkYXlzW2RhdGUuZ2V0RGF5KCldICsgXCIsIFwiICsgc3RyVGltZTtcbn1cblxuLyoqIDIwMjQgSmFudWFyeSAxLCBNb25kYXksIDEyOjUzOjAycG0gKDQgbW9udGhzIGFnbykgICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VmVyeU5pY2VEYXRlVGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICBpZiAoIXRpbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGltZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Zm9ybWF0TmljZURhdGVUaW1lKHRpbWUpfSAoJHtmb3JtYXRUaW1lKERhdGUubm93KCkgLSB0aW1lKX0pYDtcbn1cblxuLyoqIFlZWVkvTU0vREQgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKHRpbWU6IG51bWJlcikge1xuICAgIGZ1bmN0aW9uIHAoczogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIHAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHAoZGF0ZS5nZXREYXRlKCkpO1xufVxuXG4vKiogPD0gNiBjaGFyYWN0ZXJzICg8PSA1IGlmIHBvc2l0aXZlKSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm4gXCIwJVwiO1xuICAgIC8vIDEgZGVjaW1hbCBwb2ludCwgc28gd2UgaGF2ZSA1IGNoYXJhY3RlcnMgKGp1c3QgbGlrZSBmb3JtYXROdW1iZXIgcmV0dXJucyA1IGNoYXJhY3RlcnMpXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwKSAvIDEwICsgXCIlXCI7XG59IiwiXG5leHBvcnQgdHlwZSBTb3VyY2VNYXAgPSB7XG4gICAgdmVyc2lvbjogbnVtYmVyO1xuICAgIGZpbGU6IHN0cmluZztcbiAgICBzb3VyY2VSb290OiBcIlwiLFxuICAgIHNvdXJjZXM6IHN0cmluZ1tdO1xuICAgIHNvdXJjZXNDb250ZW50OiBzdHJpbmdbXTtcbiAgICBuYW1lczogbmV2ZXJbXTtcbiAgICBtYXBwaW5nczogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIFNvdXJjZU1hcHBpbmcgPSB7XG4gICAgZ2VuZXJhdGVkTGluZTogbnVtYmVyO1xuICAgIGdlbmVyYXRlZENvbHVtbjogbnVtYmVyO1xuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XG4gICAgb3JpZ2luYWxMaW5lOiBudW1iZXI7XG4gICAgb3JpZ2luYWxDb2x1bW46IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBJblByb2dyZXNzU291cmNlTWFwID0ge1xuICAgIHNvdXJjZXM6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBjb250ZW50czogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBtYXBwaW5nczogU291cmNlTWFwcGluZ1tdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNvdXJjZU1hcChjb250ZW50OiBzdHJpbmcpOiB7XG4gICAgc291cmNlTWFwOiBTb3VyY2VNYXAgfCB1bmRlZmluZWQ7XG4gICAgY29kZTogc3RyaW5nO1xufSB7XG4gICAgLy8gUmVtb3ZlIGFueSB1cmwgbWFwcGluZ3MgKHNvIE5PVCBkYXRhIG9uZXMpXG4gICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFwvXFwvIyBzb3VyY2VNYXBwaW5nVVJMPSg/IWRhdGE6KVteXFxzXSskL20sIFwiLy8gcmVtb3ZlZCB1cmwgc291cmNlbWFwXCIpO1xuXG4gICAgY29uc3Qgc291cmNlTWFwUmVnZXggPSAvXFwvXFwvIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO2Jhc2U2NCwoW15cXHNdKykkL207XG4gICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKHNvdXJjZU1hcFJlZ2V4KTtcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHsgc291cmNlTWFwOiB1bmRlZmluZWQsIGNvZGU6IGNvbnRlbnQgfTtcbiAgICB9XG5cbiAgICBsZXQgc291cmNlTWFwSnNvbiA9IEJ1ZmZlci5mcm9tKG1hdGNoWzFdLCBcImJhc2U2NFwiKS50b1N0cmluZygpO1xuICAgIC8vIEhBQ0s6IElmIHRoZSBzb3VyY2VtYXAgaXMgaW52YWxpZCwgdHJ5IHRvIHJlbW92ZSB0cmFpbGluZyBjaGFyYWN0ZXJzLiBGb3Igc29tZSByZWFzb24gd2Ugc29tZXRpbWVzIGhhdmVcbiAgICAvLyAgZXh0cmEgY2hhcmFjdGVycyBhdCB0aGUgZW5kPyBBbHNvIHRyeSB0byBhZGQgc29tZSBjaGFyYWN0ZXJzIHRvbz9cbiAgICBmdW5jdGlvbiBpc0pTT04oc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBpZiAoaXNKU09OKHNvdXJjZU1hcEpzb24pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2VNYXBKc29uID0gc291cmNlTWFwSnNvbi5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIGlmICghaXNKU09OKHNvdXJjZU1hcEpzb24pKSB7XG4gICAgICAgIGlmIChpc0pTT04oc291cmNlTWFwSnNvbiArIFwiXX1cIikpIHtcbiAgICAgICAgICAgIHNvdXJjZU1hcEpzb24gPSBzb3VyY2VNYXBKc29uICsgXCJdfVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc291cmNlTWFwID0gSlNPTi5wYXJzZShzb3VyY2VNYXBKc29uKSBhcyBTb3VyY2VNYXA7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzb3VyY2VtYXAgbGluZSBidXQga2VlcCB0aGUgY29kZVxuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHNvdXJjZU1hcFJlZ2V4LCBcIi8vIG1lcmdlZCBpbmxpbmUgc291cmNlbWFwXCIpO1xuXG4gICAgICAgIHJldHVybiB7IHNvdXJjZU1hcCwgY29kZTogY29udGVudCB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzb3VyY2UgbWFwOiAke3NvdXJjZU1hcEpzb259YCk7XG4gICAgICAgIHJldHVybiB7IHNvdXJjZU1hcDogdW5kZWZpbmVkLCBjb2RlOiBjb250ZW50IH07XG4gICAgfVxufVxuZnVuY3Rpb24gZGVjb2RlTWFwcGluZ3MobWFwcGluZ3M6IHN0cmluZyk6IFNvdXJjZU1hcHBpbmdbXSB7XG4gICAgY29uc3QgdmxxVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbiAgICBjb25zdCB2bHFEZWNvZGUgPSBuZXcgTWFwKEFycmF5LmZyb20odmxxVGFibGUpLm1hcCgoYywgaSkgPT4gW2MsIGldKSk7XG5cbiAgICBmdW5jdGlvbiBkZWNvZGVWTFEoc3RyOiBzdHJpbmcsIHBvczogeyB2YWx1ZTogbnVtYmVyIH0pOiBudW1iZXIge1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAgICAgbGV0IHNoaWZ0ID0gMDtcbiAgICAgICAgbGV0IGNvbnRpbnVhdGlvbjogYm9vbGVhbjtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBjID0gc3RyW3Bvcy52YWx1ZSsrXTtcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gdmxxRGVjb2RlLmdldChjKTtcbiAgICAgICAgICAgIGlmIChkaWdpdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFZMUSBjaGFyYWN0ZXI6ICR7SlNPTi5zdHJpbmdpZnkoYyl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51YXRpb24gPSAoZGlnaXQgJiAzMikgPiAwO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkaWdpdCAmIDMxO1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlIDw8IHNoaWZ0O1xuICAgICAgICAgICAgc2hpZnQgKz0gNTtcbiAgICAgICAgfSB3aGlsZSAoY29udGludWF0aW9uKTtcblxuICAgICAgICBjb25zdCBzaG91bGROZWdhdGUgPSByZXN1bHQgJiAxO1xuICAgICAgICByZXN1bHQgPj4+PSAxO1xuICAgICAgICByZXR1cm4gc2hvdWxkTmVnYXRlID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IFNvdXJjZU1hcHBpbmdbXSA9IFtdO1xuICAgIGxldCBnZW5lcmF0ZWRMaW5lID0gMTtcbiAgICBsZXQgZ2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICBsZXQgc291cmNlSW5kZXggPSAwO1xuICAgIGxldCBvcmlnaW5hbExpbmUgPSAxO1xuICAgIGxldCBvcmlnaW5hbENvbHVtbiA9IDA7XG5cbiAgICBjb25zdCBzZWdtZW50cyA9IG1hcHBpbmdzLnNwbGl0KFwiO1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBzZWdtZW50c1tpXTtcbiAgICAgICAgaWYgKCFsaW5lKSB7XG4gICAgICAgICAgICBnZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IGxpbmUuc3BsaXQoXCIsXCIpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgICAgICBpZiAoIWZpZWxkKSBjb250aW51ZTtcblxuICAgICAgICAgICAgY29uc3QgcG9zID0geyB2YWx1ZTogMCB9O1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudERhdGEgPSBbXTtcblxuICAgICAgICAgICAgd2hpbGUgKHBvcy52YWx1ZSA8IGZpZWxkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnREYXRhLnB1c2goZGVjb2RlVkxRKGZpZWxkLCBwb3MpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlZ21lbnREYXRhLmxlbmd0aCA8IDQpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWRDb2x1bW4gKz0gc2VnbWVudERhdGFbMF07XG4gICAgICAgICAgICBzb3VyY2VJbmRleCArPSBzZWdtZW50RGF0YVsxXTtcbiAgICAgICAgICAgIG9yaWdpbmFsTGluZSArPSBzZWdtZW50RGF0YVsyXTtcbiAgICAgICAgICAgIG9yaWdpbmFsQ29sdW1uICs9IHNlZ21lbnREYXRhWzNdO1xuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVkTGluZSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZWRDb2x1bW4sXG4gICAgICAgICAgICAgICAgc291cmNlSW5kZXgsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxMaW5lLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29sdW1uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2VuZXJhdGVkTGluZSsrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5Qcm9ncmVzc1NvdXJjZU1hcChzb3VyY2VNYXA6IFNvdXJjZU1hcCk6IEluUHJvZ3Jlc3NTb3VyY2VNYXAge1xuICAgIGNvbnN0IHNvdXJjZXMgPSBzb3VyY2VNYXAuc291cmNlcy5tYXAoKG5hbWUsIGkpID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNvbnRlbnRzOiBzb3VyY2VNYXAuc291cmNlc0NvbnRlbnRbaV0gfHwgXCJcIixcbiAgICB9KSk7XG5cbiAgICBjb25zdCBtYXBwaW5ncyA9IGRlY29kZU1hcHBpbmdzKHNvdXJjZU1hcC5tYXBwaW5ncyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2VzLFxuICAgICAgICBtYXBwaW5ncyxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9JblByb2dyZXNzU291cmNlTWFwKGluUHJvZ3Jlc3M6IEluUHJvZ3Jlc3NTb3VyY2VNYXAsIG5ld01hcHBpbmdzOiBJblByb2dyZXNzU291cmNlTWFwKSB7XG4gICAgY29uc3Qgc291cmNlSW5kZXhPZmZzZXQgPSBpblByb2dyZXNzLnNvdXJjZXMubGVuZ3RoO1xuXG4gICAgLy8gQWRkIG5ldyBzb3VyY2VzXG4gICAgaW5Qcm9ncmVzcy5zb3VyY2VzLnB1c2goLi4ubmV3TWFwcGluZ3Muc291cmNlcyk7XG5cbiAgICAvLyBBZGQgbWFwcGluZ3Mgd2l0aCBhZGp1c3RlZCBzb3VyY2UgaW5kaWNlc1xuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiBuZXdNYXBwaW5ncy5tYXBwaW5ncykge1xuICAgICAgICBpblByb2dyZXNzLm1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgLi4ubWFwcGluZyxcbiAgICAgICAgICAgIHNvdXJjZUluZGV4OiBtYXBwaW5nLnNvdXJjZUluZGV4ICsgc291cmNlSW5kZXhPZmZzZXQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsaXplSW5Qcm9ncmVzc1NvdXJjZU1hcChpblByb2dyZXNzOiBJblByb2dyZXNzU291cmNlTWFwKTogU291cmNlTWFwIHtcbiAgICBjb25zdCB2bHFUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xuXG4gICAgZnVuY3Rpb24gZW5jb2RlVkxRKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBDb252ZXJ0IHRvIHppZ3phZyBlbmNvZGluZ1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIDwgMCA/ICgtdmFsdWUgPDwgMSkgfCAxIDogdmFsdWUgPDwgMTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IGRpZ2l0ID0gdmFsdWUgJiAzMTtcbiAgICAgICAgICAgIHZhbHVlID4+Pj0gNTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBkaWdpdCB8PSAzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCArPSB2bHFUYWJsZVtkaWdpdF07XG4gICAgICAgIH0gd2hpbGUgKHZhbHVlID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBTb3J0IG1hcHBpbmdzIGJ5IGdlbmVyYXRlZCBwb3NpdGlvblxuICAgIGNvbnN0IHNvcnRlZE1hcHBpbmdzID0gWy4uLmluUHJvZ3Jlc3MubWFwcGluZ3NdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEuZ2VuZXJhdGVkTGluZSAhPT0gYi5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5nZW5lcmF0ZWRMaW5lIC0gYi5nZW5lcmF0ZWRMaW5lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLmdlbmVyYXRlZENvbHVtbiAtIGIuZ2VuZXJhdGVkQ29sdW1uO1xuICAgIH0pO1xuXG4gICAgLy8gR2VuZXJhdGUgdGhlIG1hcHBpbmdzIHN0cmluZ1xuICAgIGxldCBwcmV2R2VuTGluZSA9IDE7XG4gICAgbGV0IHByZXZHZW5Db2x1bW4gPSAwO1xuICAgIGxldCBwcmV2U291cmNlSW5kZXggPSAwO1xuICAgIGxldCBwcmV2T3JpZ0xpbmUgPSAxO1xuICAgIGxldCBwcmV2T3JpZ0NvbHVtbiA9IDA7XG5cbiAgICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgY3VycmVudExpbmU6IHN0cmluZ1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2Ygc29ydGVkTWFwcGluZ3MpIHtcbiAgICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA+IHByZXZHZW5MaW5lKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGN1cnJlbnRMaW5lLmpvaW4oXCIsXCIpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwcmV2R2VuTGluZSArIDE7IGkgPCBtYXBwaW5nLmdlbmVyYXRlZExpbmU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50TGluZSA9IFtdO1xuICAgICAgICAgICAgcHJldkdlbkNvbHVtbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWdtZW50ID0gW1xuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC0gcHJldkdlbkNvbHVtbiksXG4gICAgICAgICAgICBlbmNvZGVWTFEobWFwcGluZy5zb3VyY2VJbmRleCAtIHByZXZTb3VyY2VJbmRleCksXG4gICAgICAgICAgICBlbmNvZGVWTFEobWFwcGluZy5vcmlnaW5hbExpbmUgLSBwcmV2T3JpZ0xpbmUpLFxuICAgICAgICAgICAgZW5jb2RlVkxRKG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gLSBwcmV2T3JpZ0NvbHVtbiksXG4gICAgICAgIF07XG5cbiAgICAgICAgY3VycmVudExpbmUucHVzaChzZWdtZW50LmpvaW4oXCJcIikpO1xuXG4gICAgICAgIHByZXZHZW5MaW5lID0gbWFwcGluZy5nZW5lcmF0ZWRMaW5lO1xuICAgICAgICBwcmV2R2VuQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICAgIHByZXZTb3VyY2VJbmRleCA9IG1hcHBpbmcuc291cmNlSW5kZXg7XG4gICAgICAgIHByZXZPcmlnTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuICAgICAgICBwcmV2T3JpZ0NvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRMaW5lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGluZXMucHVzaChjdXJyZW50TGluZS5qb2luKFwiLFwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogMyxcbiAgICAgICAgZmlsZTogXCJcIixcbiAgICAgICAgc291cmNlUm9vdDogXCJcIixcbiAgICAgICAgc291cmNlczogaW5Qcm9ncmVzcy5zb3VyY2VzLm1hcChzID0+IHMubmFtZSksXG4gICAgICAgIHNvdXJjZXNDb250ZW50OiBpblByb2dyZXNzLnNvdXJjZXMubWFwKHMgPT4gcy5jb250ZW50cyksXG4gICAgICAgIG5hbWVzOiBbXSxcbiAgICAgICAgbWFwcGluZ3M6IGxpbmVzLmpvaW4oXCI7XCIpLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU291cmNlTWFwTGluZUNvbW1lbnQoc291cmNlTWFwOiBTb3VyY2VNYXApOiBzdHJpbmcge1xuICAgIGNvbnN0IHNvdXJjZU1hcEpzb24gPSBKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApO1xuICAgIGNvbnN0IGJhc2U2NCA9IEJ1ZmZlci5mcm9tKHNvdXJjZU1hcEpzb24pLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgIC8vIE5PVEU6IERvbid0IHdyaXRlIGl0IGFzIG9uZSBzdHJpbmcsIGFzIHRoZW4gd2UgYXJlIGRldGVjdGVkIGFzIGEgc291cmNlbWFwLCBhbmQgYnJlYWsgc291cmNlbWFwcy4uLlxuICAgIHJldHVybiBcIi8vXCIgKyBgIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJHtiYXNlNjR9YDtcbn0iLCIvLyBCdW5kbGVkIHdlYi13b3JrZXIgZW50cnkuIEJ1aWx0IGludG8gPGRlcGxveT4vYWlXb3JrZXJFbnRyeS5qcyBieSBzY3JpcHRzL2J1aWxkLnRzIGFuZCBsb2FkZWRcbi8vIGZyb20gdGhlcmUgYnkgYWlXb3JrZXJQb29sLnRzIChicm93c2VyIHBhdGgpLiBEaXNwYXRjaGVzIHRvIGEgcmVnaXN0ZXJlZCBzdHJhdGVneSBieSBpZC5cbmltcG9ydCB7IGdldFN0cmF0ZWd5IH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9pbmRleFwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJSZXF1ZXN0IH0gZnJvbSBcIi4vYWlUeXBlc1wiO1xuXG5pbnRlcmZhY2UgV29ya2VyU2VsZiB7XG4gICAgb25tZXNzYWdlOiAoKGU6IE1lc3NhZ2VFdmVudDxBSVdvcmtlclJlcXVlc3Q+KSA9PiB2b2lkKSB8IG51bGw7XG4gICAgcG9zdE1lc3NhZ2UoZGF0YTogdW5rbm93bik6IHZvaWQ7XG59XG5cbi8vIEdhdGUgb24gYHNlbGZgIGV4aXN0aW5nIOKAlCB0aGUgYnVuZGxlciBydW5zIHVzIHRocm91Z2ggbm9kZSBmaXJzdCB0byByZWNvcmQgcmVxdWlyZS5jYWNoZSwgYW5kXG4vLyBub2RlIGRvZXNuJ3QgaGF2ZSBgc2VsZmAuIEluc2lkZSBhIHJlYWwgd2ViIHdvcmtlciBgc2VsZmAgaXMgZGVmaW5lZCBhbmQgd2Ugd2lyZSB1cC5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IHdvcmtlclNjb3BlID0gc2VsZiBhcyB1bmtub3duIGFzIFdvcmtlclNlbGY7XG4gICAgd29ya2VyU2NvcGUub25tZXNzYWdlID0gYXN5bmMgKGU6IE1lc3NhZ2VFdmVudDxBSVdvcmtlclJlcXVlc3Q+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcSA9IGUuZGF0YTtcbiAgICAgICAgaWYgKCFyZXEgfHwgIXJlcS5zbmFwc2hvdCkge1xuICAgICAgICAgICAgd29ya2VyU2NvcGUucG9zdE1lc3NhZ2UoeyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogXCJubyByZXF1ZXN0L3NuYXBzaG90XCIgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gZ2V0U3RyYXRlZ3kocmVxLnN0cmF0ZWd5SWQpO1xuICAgICAgICAgICAgY29uc3Qgb25Qcm9ncmVzcyA9IChvcmRlcnM6IEFJV29ya2VyT3JkZXJbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcInByb2dyZXNzXCIsIG9yZGVycyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBzdHJhdGVneShyZXEuc25hcHNob3QsIHtcbiAgICAgICAgICAgICAgICBjb25maWc6IHJlcS5jb25maWcsXG4gICAgICAgICAgICAgICAgZGVhZGxpbmVNczogRGF0ZS5ub3coKSArIHJlcS50aW1lb3V0TXMsXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd29ya2VyU2NvcGUucG9zdE1lc3NhZ2UoeyBzdGF0dXM6IFwiZG9uZVwiLCBvcmRlcnMgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKTtcbiAgICAgICAgICAgIHdvcmtlclNjb3BlLnBvc3RNZXNzYWdlKHsgc3RhdHVzOiBcImVycm9yXCIsIG1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiLy8gSW1wb3J0aW5nIHRoaXMgbW9kdWxlIHJlZ2lzdGVycyBldmVyeSBidWlsdC1pbiBzdHJhdGVneSBhcyBhIHNpZGUgZWZmZWN0LiBCb3RoIHRoZSB3b3JrZXIgZW50cnlcbi8vIGFuZCB0aGUgbm9kZSBzaW0gaW1wb3J0IGl0IHNvIGdldFN0cmF0ZWd5KCkgY2FuIHJlc29sdmUgYW55IGlkLlxuaW1wb3J0IFwiLi9iZWVsaW5lXCI7XG5pbXBvcnQgXCIuL2dyZWVkeUNpdHlcIjtcbmltcG9ydCBcIi4vY29uc29saWRhdGVcIjtcbmltcG9ydCBcIi4vZm9jdXNGaXJlXCI7XG5pbXBvcnQgXCIuL2ZvY3VzV2Vha2VzdEZhY3Rpb25cIjtcbmltcG9ydCBcIi4vbW9udGVDYXJsb1wiO1xuaW1wb3J0IFwiLi90aHJlYXRBd2FyZVwiO1xuaW1wb3J0IFwiLi9pbmZsdWVuY2VNYXBcIjtcbmltcG9ydCBcIi4vdGVycml0b3J5XCI7XG5pbXBvcnQgXCIuL3Nub3diYWxsXCI7XG5pbXBvcnQgXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBcIi4vZG9taW5pb25cIjtcbmltcG9ydCBcIi4vZG9taW5pb25Gcm9udFwiO1xuaW1wb3J0IFwiLi9kb21pbmlvblNwbGl0XCI7XG5pbXBvcnQgXCIuL2RvbWluaW9uU3BsaXQyXCI7XG5pbXBvcnQgXCIuL2V2YWxHcmVlZHlcIjtcbmltcG9ydCBcIi4vcm9sbG91dFwiO1xuaW1wb3J0IFwiLi9ldmFsQ29hcnNlXCI7XG5cbmV4cG9ydCB7IGdldFN0cmF0ZWd5LCBnZXRTdHJhdGVneUlkcywgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG4iLCJpbXBvcnQgeyBwbGFuQmVlbGluZU9yZGVycyB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gdjEgYmFzZWxpbmU6IGV2ZXJ5IGdlbmVyYWwgYmVlbGluZXMgdG93YXJkIHRoZSBuZWFyZXN0IGVuZW15IGNpdHksIGdyb3dpbmcgd2hlbiBmb29kIGFsbG93cy5cbi8vIFRoaXMgaXMgYWxzbyB0aGUgZGVmYXVsdCBhZ2VudCBmb3Igbm9ybWFsIGJyb3dzZXIgcGxheSwgc28gZ3Jvd3RoIGlzIG9uIGJ5IGRlZmF1bHQgdGhlcmUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiYmVlbGluZVwiLCAoc25hcHNob3QsIGN0eCkgPT4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY3R4LmNvbmZpZywgcGxhbkJlZWxpbmVPcmRlcnMoc25hcHNob3QpKSk7XG4iLCIvLyBQdXJlIEFJIHBsYW5uaW5nIOKAlCBubyBET00sIG5vIHdvcmtlciBnbG9iYWxzLCBubyBzY2hlbWEgaW1wb3J0cy4gU2hhcmVkIGJ5IHRoZSB3ZWItd29ya2VyIGVudHJ5XG4vLyAoYWlXb3JrZXJFbnRyeS50cykgYW5kIHRoZSBpbi1wcm9jZXNzIG5vZGUgcGF0aCAoYWlXb3JrZXJQb29sLnRzIGluIG5vZGUpLiBLZWVwaW5nIGl0IGRlcGVuZGVuY3ktXG4vLyBmcmVlIGtlZXBzIHRoZSB3b3JrZXIgYnVuZGxlIHRpbnkgYW5kIGxldHMgdGhlIG5vZGUgc2ltdWxhdGlvbiBjYWxsIGl0IGRpcmVjdGx5LlxuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJTbmFwc2hvdCB9IGZyb20gXCIuL2FpVHlwZXNcIjtcblxuZnVuY3Rpb24gb2Zmc2V0VG9DdWJlKHA6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0pIHtcbiAgICBjb25zdCBjb2wgPSBwLng7XG4gICAgY29uc3Qgcm93ID0gY29sICUgMiA9PT0gMCA/IHAueSA6IHAueSAtIDAuNTtcbiAgICBjb25zdCBjdWJlX3ggPSBjb2w7XG4gICAgY29uc3QgY3ViZV96ID0gcm93IC0gKGNvbCAtIChjb2wgJiAxKSkgLyAyO1xuICAgIGNvbnN0IGN1YmVfeSA9IC1jdWJlX3ggLSBjdWJlX3o7XG4gICAgcmV0dXJuIHsgeDogY3ViZV94LCB5OiBjdWJlX3ksIHo6IGN1YmVfeiB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhleERpc3RhbmNlKGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0pOiBudW1iZXIge1xuICAgIGNvbnN0IGNhID0gb2Zmc2V0VG9DdWJlKGEpO1xuICAgIGNvbnN0IGNiID0gb2Zmc2V0VG9DdWJlKGIpO1xuICAgIHJldHVybiAoTWF0aC5hYnMoY2EueCAtIGNiLngpICsgTWF0aC5hYnMoY2EueSAtIGNiLnkpICsgTWF0aC5hYnMoY2EueiAtIGNiLnopKSAvIDI7XG59XG5cbi8vIHYxIHN0cmF0ZWd5OiBlYWNoIG9mIG91ciBnZW5lcmFscyBiZWVsaW5lcyB0b3dhcmQgdGhlIG5lYXJlc3QgZW5lbXkgY2l0eS5cbmV4cG9ydCBmdW5jdGlvbiBwbGFuQmVlbGluZU9yZGVycyhzbmFwc2hvdDogQUlXb3JrZXJTbmFwc2hvdCk6IEFJV29ya2VyT3JkZXJbXSB7XG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91ckdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdlbmVyYWwgb2Ygb3VyR2VuZXJhbHMpIHtcbiAgICAgICAgbGV0IHRhcmdldDogdHlwZW9mIGVuZW15Q2l0aWVzW251bWJlcl0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0RGlzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgZW5lbXlDaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnZW5lcmFsLCBjaXR5KTtcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdERpc3QpIHtcbiAgICAgICAgICAgICAgICBiZXN0RGlzdCA9IGQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkgY29udGludWU7XG4gICAgICAgIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW5lcmFsLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVycztcbn1cbiIsImltcG9ydCB7IEFJV29ya2VyT3JkZXIsIEFJV29ya2VyU25hcHNob3QgfSBmcm9tIFwiLi9haVR5cGVzXCI7XG5cbi8vIFNoYXJlZCBncm93dGggZGVjaXNpb24sIHdyYXBwZWQgYXJvdW5kIGEgc3RyYXRlZ3kncyBtb3ZlIG9yZGVycyBzbyBldmVyeSBvbmUgb2Ygb3VyIGdlbmVyYWxzXG4vLyBnZXRzIGEgZ3Jvd3RoTW9kZSBzZXQgKGFuZCBnZW5lcmFscyB3aXRob3V0IGEgbW92ZSBzdGlsbCBnZXQgYSBncm93L2hvbGQgb3JkZXIpLlxuLy9cbi8vIGNvbmZpZy5ncm93IGNvbnRyb2xzIGl0OlxuLy8gICBcIm5ldmVyXCIgICAgICAgICAgICDigJQgbmV2ZXIgZ3Jvdy5cbi8vICAgXCJhbHdheXNcIiAgICAgICAgICAg4oCUIGFsd2F5cyBncm93IChyaXNrcyBzdGFydmF0aW9uIGlmIGZvb2QgbmV0IDwgMCkuXG4vLyAgIFwid2hlbkZvb2RQb3NpdGl2ZVwiIOKAlCBncm93IG9ubHkgd2hlbiB0aGUgZmFjdGlvbidzIGZvb2QgbmV0IGlzID49IDAgKGRlZmF1bHQpLiBUaGlzIGlzIHRoZSBzYWZlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWwtcHVycG9zZSBwb2xpY3k6IGJ1aWxkIHVwIHdoaWxlIHRoZSBlY29ub215IHN1c3RhaW5zIGl0LlxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhHcm93dGgoXG4gICAgc25hcHNob3Q6IEFJV29ya2VyU25hcHNob3QsXG4gICAgY29uZmlnOiB7IGdyb3c/OiB1bmtub3duOyB9LFxuICAgIG1vdmVPcmRlcnM6IEFJV29ya2VyT3JkZXJbXSxcbik6IEFJV29ya2VyT3JkZXJbXSB7XG4gICAgY29uc3QgZ3JvdyA9IHR5cGVvZiBjb25maWcuZ3JvdyA9PT0gXCJzdHJpbmdcIiA/IGNvbmZpZy5ncm93IDogXCJ3aGVuRm9vZFBvc2l0aXZlXCI7XG4gICAgY29uc3Qgc2hvdWxkR3JvdyA9IGdyb3cgPT09IFwiYWx3YXlzXCJcbiAgICAgICAgfHwgKGdyb3cgIT09IFwibmV2ZXJcIiAmJiBzbmFwc2hvdC5mb29kLm5ldCA+PSAwKTtcblxuICAgIGNvbnN0IGJ5R2VuZXJhbCA9IG5ldyBNYXA8c3RyaW5nLCBBSVdvcmtlck9yZGVyPigpO1xuICAgIGZvciAoY29uc3QgbyBvZiBtb3ZlT3JkZXJzKSB7XG4gICAgICAgIGJ5R2VuZXJhbC5zZXQoby5nZW5lcmFsSWQsIHsgLi4ubywgZ3Jvd3RoTW9kZTogc2hvdWxkR3JvdyB9KTtcbiAgICB9XG4gICAgLy8gRW5zdXJlIGV2ZXJ5IG9uZSBvZiBvdXIgZ2VuZXJhbHMgaGFzIGFuIG9yZGVyIGNhcnJ5aW5nIHRoZSBncm93dGggZGVjaXNpb24sIGV2ZW4gaWYgdGhlXG4gICAgLy8gc3RyYXRlZ3kgZ2F2ZSBpdCBubyBtb3ZlIHRoaXMgdHVybi5cbiAgICBmb3IgKGNvbnN0IGcgb2Ygc25hcHNob3QuZ2VuZXJhbHMpIHtcbiAgICAgICAgaWYgKGcuZmFjdGlvbklkICE9PSBzbmFwc2hvdC5mYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIWJ5R2VuZXJhbC5oYXMoZy5pZCkpIHtcbiAgICAgICAgICAgIGJ5R2VuZXJhbC5zZXQoZy5pZCwgeyBnZW5lcmFsSWQ6IGcuaWQsIGdyb3d0aE1vZGU6IHNob3VsZEdyb3cgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnlHZW5lcmFsLnZhbHVlcygpKTtcbn1cbiIsImltcG9ydCB7IEFJU3RyYXRlZ3kgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuXG4vLyBTdHJhdGVneSByZWdpc3RyeS4gRXZlcnkgQUkgaXMgYSBuYW1lZCwgaGFuZC13cml0dGVuIHN0cmF0ZWd5LiBXaGVuIGEgc3RyYXRlZ3kgaXMgcmV2aXNlZCwgZ2l2ZVxuLy8gaXQgYSBORVcgaWQgc28gcHJpb3IgdmVyc2lvbnMga2VlcCB3b3JraW5nIGFuZCByZW1haW4gY29tcGFyYWJsZSBpbiB0b3VybmFtZW50cy5cbmNvbnN0IHN0cmF0ZWdpZXMgPSBuZXcgTWFwPHN0cmluZywgQUlTdHJhdGVneT4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU3RyYXRlZ3koaWQ6IHN0cmluZywgc3RyYXRlZ3k6IEFJU3RyYXRlZ3kpIHtcbiAgICBpZiAoc3RyYXRlZ2llcy5oYXMoaWQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIEFJIHN0cmF0ZWd5IGlkOiAke2lkfWApO1xuICAgIH1cbiAgICBzdHJhdGVnaWVzLnNldChpZCwgc3RyYXRlZ3kpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXRlZ3koaWQ6IHN0cmluZyk6IEFJU3RyYXRlZ3kge1xuICAgIGNvbnN0IHMgPSBzdHJhdGVnaWVzLmdldChpZCk7XG4gICAgaWYgKCFzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBBSSBzdHJhdGVneSBpZDogJHtpZH0uIFJlZ2lzdGVyZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZ2V0U3RyYXRlZ3lJZHMoKSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXRlZ3lJZHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHN0cmF0ZWdpZXMua2V5cygpKTtcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIENvbmZpZ3VyYWJsZSBncmVlZHkgdGFyZ2V0LXBpY2tlci4gRWFjaCBnZW5lcmFsIGluZGVwZW5kZW50bHkgc2NvcmVzIGNhbmRpZGF0ZSB0YXJnZXRzIGFuZCBtb3Zlc1xuLy8gdG93YXJkIHRoZSBiZXN0IG9uZS4gU2NvcmUgPSBkaXN0V2VpZ2h0KmRpc3RhbmNlICsgZ2Fycmlzb25XZWlnaHQqZ2Fycmlzb24g4oiSIGNhcGl0YWxCb251cyhpZiBjYXBpdGFsKS5cbi8vIExvd2VyIHNjb3JlIHdpbnMsIHNvIGhpZ2ggZGlzdFdlaWdodCA9IHByZWZlciBjbG9zZXIsIGhpZ2ggZ2Fycmlzb25XZWlnaHQgPSBwcmVmZXIgc29mdGVyIHRhcmdldHMsXG4vLyBjYXBpdGFsQm9udXMgcHVsbHMgdG93YXJkIGVuZW15IGNhcGl0YWxzLiBXaXRoIHRhcmdldEdlbmVyYWxzLCBlbmVteSBnZW5lcmFscyAodHJlYXRlZCBhc1xuLy8gZ2Fycmlzb24gPSB0aGVpciB1bml0IGNvdW50KSBhcmUgYWxzbyBjYW5kaWRhdGVzLlxucmVnaXN0ZXJTdHJhdGVneShcImdyZWVkeUNpdHlcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwKTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgMCk7XG4gICAgY29uc3QgdGFyZ2V0R2VuZXJhbHMgPSBjZmcudGFyZ2V0R2VuZXJhbHMgPT09IHRydWU7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG4gICAgY29uc3Qgb3VyR2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcblxuICAgIHR5cGUgVGFyZ2V0ID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgZ2Fycmlzb246IG51bWJlcjsgaXNDYXBpdGFsOiBib29sZWFuOyB9O1xuICAgIGNvbnN0IHRhcmdldHM6IFRhcmdldFtdID0gW107XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykge1xuICAgICAgICBpZiAoYy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHRhcmdldHMucHVzaCh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0R2VuZXJhbHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBnLngsIHk6IGcueSwgZ2Fycmlzb246IGcudG90YWxVbml0cywgaXNDYXBpdGFsOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3VyR2VuZXJhbHMpIHtcbiAgICAgICAgbGV0IGJlc3Q6IFRhcmdldCB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGFyZ2V0cykge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZ2VuLCB0KVxuICAgICAgICAgICAgICAgICsgZ2Fycmlzb25XZWlnaHQgKiB0LmdhcnJpc29uXG4gICAgICAgICAgICAgICAgLSAodC5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcbiAgICAgICAgICAgIGlmIChzY29yZSA8IGJlc3RTY29yZSkge1xuICAgICAgICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICAgIGJlc3QgPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiBiZXN0LngsIHk6IGJlc3QueSB9IH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gRm9yY2UtY29uY2VudHJhdGlvbiBzdHJhdGVneS4gQSBnZW5lcmFsIHdlYWtlciB0aGFuIG1lcmdlRnJhY3Rpb24gw5cgdGhlIGZhY3Rpb24ncyBzdHJvbmdlc3Rcbi8vIGdlbmVyYWwgbW92ZXMgdG93YXJkIHRoYXQgc3Ryb25nZXN0IGFsbHkgdG8gc3RhY2sgdXAgKHNhbWUtdGlsZSBzYW1lLWZhY3Rpb24gdW5pdHMgZmlnaHQgdG9nZXRoZXIsXG4vLyBzbyBjb25jZW50cmF0aW9uIHdpbnMgZmlnaHRzKS4gRXZlcnlvbmUgZWxzZSBhdHRhY2tzIHRoZSBiZXN0IGVuZW15IHRhcmdldCwgc2NvcmVkIGxpa2Vcbi8vIGdyZWVkeUNpdHkgKGRpc3RXZWlnaHTCt2Rpc3RhbmNlICsgZ2Fycmlzb25XZWlnaHTCt2dhcnJpc29uIOKIkiBjYXBpdGFsQm9udXPCt2lzQ2FwaXRhbCksIG9wdGlvbmFsbHlcbi8vIGFsc28gaHVudGluZyBlbmVteSBnZW5lcmFscy5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJjb25zb2xpZGF0ZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNSk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuICAgIGNvbnN0IHRhcmdldEdlbmVyYWxzID0gY2ZnLnRhcmdldEdlbmVyYWxzID09PSB0cnVlO1xuICAgIGNvbnN0IG1lcmdlRnJhY3Rpb24gPSBudW0oY2ZnLm1lcmdlRnJhY3Rpb24sIDAuOCk7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGlmIChvdXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gICAgbGV0IHN0cm9uZ2VzdCA9IG91cnNbMF07XG4gICAgZm9yIChjb25zdCBnIG9mIG91cnMpIGlmIChnLnRvdGFsVW5pdHMgPiBzdHJvbmdlc3QudG90YWxVbml0cykgc3Ryb25nZXN0ID0gZztcblxuICAgIHR5cGUgVGFyZ2V0ID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgZ2Fycmlzb246IG51bWJlcjsgaXNDYXBpdGFsOiBib29sZWFuOyB9O1xuICAgIGNvbnN0IHRhcmdldHM6IFRhcmdldFtdID0gW107XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykge1xuICAgICAgICBpZiAoYy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHRhcmdldHMucHVzaCh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0R2VuZXJhbHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBnLngsIHk6IGcueSwgZ2Fycmlzb246IGcudG90YWxVbml0cywgaXNDYXBpdGFsOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICAvLyBXZWFrIGdlbmVyYWwgd2l0aCBhIHN0cm9uZ2VyIGFsbHkgdG8gbWVyZ2UgaW50byDihpIgZ28gc3RhY2sgdXAuXG4gICAgICAgIGlmIChnZW4uaWQgIT09IHN0cm9uZ2VzdC5pZCAmJiBnZW4udG90YWxVbml0cyA8IG1lcmdlRnJhY3Rpb24gKiBzdHJvbmdlc3QudG90YWxVbml0cykge1xuICAgICAgICAgICAgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogc3Ryb25nZXN0LngsIHk6IHN0cm9uZ2VzdC55IH0gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuICAgICAgICBsZXQgYmVzdDogVGFyZ2V0IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiB0YXJnZXRzKSB7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IGRpc3RXZWlnaHQgKiBoZXhEaXN0YW5jZShnZW4sIHQpXG4gICAgICAgICAgICAgICAgKyBnYXJyaXNvbldlaWdodCAqIHQuZ2Fycmlzb25cbiAgICAgICAgICAgICAgICAtICh0LmlzQ2FwaXRhbCA/IGNhcGl0YWxCb251cyA6IDApO1xuICAgICAgICAgICAgaWYgKHNjb3JlIDwgYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0gdDsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiBiZXN0LngsIHk6IGJlc3QueSB9IH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gQ29vcmRpbmF0ZWQgZm9jdXMtZmlyZTogdGhlIHdob2xlIGZhY3Rpb24gcGlja3MgT05FIGdsb2JhbCB0YXJnZXQgYW5kIGV2ZXJ5IGdlbmVyYWwgY29udmVyZ2VzIG9uXG4vLyBpdCwgbmF0dXJhbGx5IHN0YWNraW5nIGludG8gYSBzaW5nbGUgaGFtbWVyLiBUaGUgdGFyZ2V0IGlzIHNjb3JlZCBmcm9tIHRoZSBmYWN0aW9uJ3MgY2VudHJvaWRcbi8vIChkaXN0V2VpZ2h0wrdkaXN0ICsgZ2Fycmlzb25XZWlnaHTCt2dhcnJpc29uIOKIkiBjYXBpdGFsQm9udXPCt2lzQ2FwaXRhbCkuIFdoZW4gdGhlIHRhcmdldCBpcyBjYXB0dXJlZFxuLy8gdGhlIG5leHQgY2FsbCByZS1waWNrcywgc28gdGhlIGRvb21zdGFjayByb2xscyBmcm9tIG9iamVjdGl2ZSB0byBvYmplY3RpdmUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiZm9jdXNGaXJlXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGRpc3RXZWlnaHQgPSBudW0oY2ZnLmRpc3RXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGdhcnJpc29uV2VpZ2h0ID0gbnVtKGNmZy5nYXJyaXNvbldlaWdodCwgMC41KTtcbiAgICBjb25zdCBjYXBpdGFsQm9udXMgPSBudW0oY2ZnLmNhcGl0YWxCb251cywgMCk7XG4gICAgY29uc3QgdGFyZ2V0R2VuZXJhbHMgPSBjZmcudGFyZ2V0R2VuZXJhbHMgPT09IHRydWU7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGlmIChvdXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgY3ggPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueCwgMCkgLyBvdXJzLmxlbmd0aDtcbiAgICBjb25zdCBjeSA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy55LCAwKSAvIG91cnMubGVuZ3RoO1xuICAgIGNvbnN0IGNlbnRyb2lkID0geyB4OiBjeCwgeTogY3kgfTtcblxuICAgIHR5cGUgVGFyZ2V0ID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgZ2Fycmlzb246IG51bWJlcjsgaXNDYXBpdGFsOiBib29sZWFuOyB9O1xuICAgIGNvbnN0IHRhcmdldHM6IFRhcmdldFtdID0gW107XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykge1xuICAgICAgICBpZiAoYy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIHRhcmdldHMucHVzaCh7IHg6IGMueCwgeTogYy55LCBnYXJyaXNvbjogYy5nYXJyaXNvbiwgaXNDYXBpdGFsOiAhIWMuaXNDYXBpdGFsIH0pO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0R2VuZXJhbHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRzLnB1c2goeyB4OiBnLngsIHk6IGcueSwgZ2Fycmlzb246IGcudG90YWxVbml0cywgaXNDYXBpdGFsOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGxldCBiZXN0OiBUYXJnZXQgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgIGZvciAoY29uc3QgdCBvZiB0YXJnZXRzKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gZGlzdFdlaWdodCAqIGhleERpc3RhbmNlKGNlbnRyb2lkLCB0KVxuICAgICAgICAgICAgKyBnYXJyaXNvbldlaWdodCAqIHQuZ2Fycmlzb25cbiAgICAgICAgICAgIC0gKHQuaXNDYXBpdGFsID8gY2FwaXRhbEJvbnVzIDogMCk7XG4gICAgICAgIGlmIChzY29yZSA8IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzY29yZTsgYmVzdCA9IHQ7IH1cbiAgICB9XG4gICAgaWYgKCFiZXN0KSByZXR1cm4gW107XG5cbiAgICBjb25zdCB0YXJnZXQgPSBiZXN0O1xuICAgIGNvbnN0IG9yZGVycyA9IG91cnMubWFwKGcgPT4gKHsgZ2VuZXJhbElkOiBnLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSB9KSk7XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIFNub3diYWxsIGZvY3VzOiBjb25jZW50cmF0ZSB0aGUgd2hvbGUgZmFjdGlvbiBvbiB0aGUgV0VBS0VTVCBzdXJ2aXZpbmcgZW5lbXkgZmFjdGlvbiwgdG9cbi8vIGVsaW1pbmF0ZSBvcHBvbmVudHMgb25lIGF0IGEgdGltZSAoZmV3ZXIgZW5lbWllcyA9IGNvbXBvdW5kaW5nIGFkdmFudGFnZSkuIEFtb25nIHRoYXQgZmFjdGlvbidzXG4vLyBjaXRpZXMgd2UgcGljayB0aGUgb25lIGJlc3Qgc2NvcmVkIGZyb20gb3VyIGNlbnRyb2lkIChkaXN0V2VpZ2h0wrdkaXN0ICsgZ2Fycmlzb25XZWlnaHTCt2dhcnJpc29uXG4vLyDiiJIgY2FwaXRhbEJvbnVzwrdpc0NhcGl0YWwpLiBJZiB0aGUgd2Vha2VzdCBmYWN0aW9uIGhhcyBubyBjaXRpZXMgbGVmdCB3ZSBmYWxsIGJhY2sgdG8gaXRzIG5lYXJlc3Rcbi8vIGdlbmVyYWwsIHRoZW4gdG8gYW55IGVuZW15IGNpdHkuXG5yZWdpc3RlclN0cmF0ZWd5KFwiZm9jdXNXZWFrZXN0RmFjdGlvblwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNSk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDApO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGN4ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLngsIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY3kgPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueSwgMCkgLyBvdXJzLmxlbmd0aDtcbiAgICBjb25zdCBjZW50cm9pZCA9IHsgeDogY3gsIHk6IGN5IH07XG5cbiAgICAvLyBUb3RhbCBzdHJlbmd0aCBwZXIgZW5lbXkgZmFjdGlvbiA9IGl0cyBnZW5lcmFscycgc3RhY2tlZCB1bml0cyArIGl0cyBjaXRpZXMnIGdhcnJpc29ucy5cbiAgICBjb25zdCBzdHJlbmd0aEJ5RmFjdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgIGlmIChnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgc3RyZW5ndGhCeUZhY3Rpb24uc2V0KGcuZmFjdGlvbklkLCAoc3RyZW5ndGhCeUZhY3Rpb24uZ2V0KGcuZmFjdGlvbklkKSA/PyAwKSArIGcudG90YWxVbml0cyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpIGNvbnRpbnVlO1xuICAgICAgICBzdHJlbmd0aEJ5RmFjdGlvbi5zZXQoYy5mYWN0aW9uSWQsIChzdHJlbmd0aEJ5RmFjdGlvbi5nZXQoYy5mYWN0aW9uSWQpID8/IDApICsgYy5nYXJyaXNvbik7XG4gICAgfVxuICAgIGlmIChzdHJlbmd0aEJ5RmFjdGlvbi5zaXplID09PSAwKSByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBbXSk7XG5cbiAgICBsZXQgd2Vha2VzdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGxldCB3ZWFrZXN0U3RyZW5ndGggPSBJbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IFtmaWQsIHNdIG9mIHN0cmVuZ3RoQnlGYWN0aW9uKSB7XG4gICAgICAgIGlmIChzIDwgd2Vha2VzdFN0cmVuZ3RoKSB7IHdlYWtlc3RTdHJlbmd0aCA9IHM7IHdlYWtlc3QgPSBmaWQ7IH1cbiAgICB9XG5cbiAgICB0eXBlIFRhcmdldCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCBzY29yZSA9ICh0OiBUYXJnZXQpID0+IGRpc3RXZWlnaHQgKiBoZXhEaXN0YW5jZShjZW50cm9pZCwgdClcbiAgICAgICAgKyBnYXJyaXNvbldlaWdodCAqIHQuZ2Fycmlzb24gLSAodC5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcblxuICAgIGNvbnN0IHBpY2sgPSAoY2FuZHM6IFRhcmdldFtdKTogVGFyZ2V0IHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgbGV0IGJlc3Q6IFRhcmdldCB8IHVuZGVmaW5lZDsgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgY2FuZHMpIHsgY29uc3QgcyA9IHNjb3JlKHQpOyBpZiAocyA8IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzOyBiZXN0ID0gdDsgfSB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH07XG5cbiAgICBsZXQgdGFyZ2V0ID0gcGljayhjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgPT09IHdlYWtlc3QpXG4gICAgICAgIC5tYXAoYyA9PiAoeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KSkpO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldCA9IHBpY2soZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IHdlYWtlc3QpXG4gICAgICAgICAgICAubWFwKGcgPT4gKHsgeDogZy54LCB5OiBnLnksIGdhcnJpc29uOiBnLnRvdGFsVW5pdHMsIGlzQ2FwaXRhbDogZmFsc2UgfSkpKTtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0ID0gcGljayhjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgICAgIC5tYXAoYyA9PiAoeyB4OiBjLngsIHk6IGMueSwgZ2Fycmlzb246IGMuZ2Fycmlzb24sIGlzQ2FwaXRhbDogISFjLmlzQ2FwaXRhbCB9KSkpO1xuICAgIH1cbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuXG4gICAgY29uc3QgdCA9IHRhcmdldDtcbiAgICBjb25zdCBvcmRlcnMgPSBvdXJzLm1hcChnID0+ICh7IGdlbmVyYWxJZDogZy5pZCwgdGFyZ2V0UG9zaXRpb246IHsgeDogdC54LCB5OiB0LnkgfSB9KSk7XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIE1vbnRlLUNhcmxvIG9wZW5pbmcgcGlja2VyLiBGb3IgZWFjaCBjYW5kaWRhdGUgZmlyc3QtdGFyZ2V0LCBydW4gZ3VpZGVkIHJvbGxvdXRzIG9uIGEgbGlnaHR3ZWlnaHRcbi8vIGludGVybmFsIG1vZGVsIChvdXIgd2hvbGUgYXJteSBhcyBvbmUgc3RhY2sgc25vd2JhbGxpbmcgdGhyb3VnaCBlbmVteSBjaXRpZXMgdW5kZXIgYSBncmVlZHlcbi8vIGRldGVybWluaXN0aWMgcG9saWN5LCB3aXRoIHJhbmRvbWl6ZWQgdGllLWJyZWFraW5nID0gdGhlIE1DIHNhbXBsaW5nKS4gU2NvcmUgZWFjaCBjYW5kaWRhdGUgYnkgaG93XG4vLyBtdWNoIGl0IGxldHMgdXMgc25vd2JhbGw7IHNlbmQgdGhlIHdob2xlIGZhY3Rpb24gYXQgdGhlIGJlc3Qgb3BlbmluZy4gQXBwcm94aW1hdGUgYnkgZGVzaWduIOKAlCB0aGVcbi8vIHN0cmF0ZWd5IG9ubHkgaGFzIHRoZSBzbmFwc2hvdCwgbm90IHRoZSByZWFsIGVuZ2luZSDigJQgYnV0IGl0IGRlbW9uc3RyYXRlcyBkZXRlcm1pbmlzdGljLXBvbGljeS1cbi8vIGd1aWRlZCBNQyBhbmQgaXMgYSB0b3VybmFtZW50IGV4cGVyaW1lbnQuXG4vL1xuLy8gY29uZmlnOiBkaXN0V2VpZ2h0LCBnYXJyaXNvbldlaWdodCwgY2FwaXRhbEJvbnVzLCByb2xsb3V0cyAocGVyIGNhbmRpZGF0ZSksIHJvbGxvdXRUdXJucyxcbi8vIHRvcEsgKHRpZS1icmVhayBicmVhZHRoIGZvciB0aGUgcm9sbG91dCBwb2xpY3kpLCBjb21iYXRGYWN0b3IsIGxvc3NGcmFjLlxucmVnaXN0ZXJTdHJhdGVneShcIm1vbnRlQ2FybG9cIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZGlzdFdlaWdodCA9IG51bShjZmcuZGlzdFdlaWdodCwgMSk7XG4gICAgY29uc3QgZ2Fycmlzb25XZWlnaHQgPSBudW0oY2ZnLmdhcnJpc29uV2VpZ2h0LCAwLjUpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCAwKTtcbiAgICBjb25zdCByb2xsb3V0cyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IobnVtKGNmZy5yb2xsb3V0cywgNjApKSk7XG4gICAgY29uc3Qgcm9sbG91dFR1cm5zID0gbnVtKGNmZy5yb2xsb3V0VHVybnMsIDYwKTtcbiAgICBjb25zdCB0b3BLID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihudW0oY2ZnLnRvcEssIDMpKSk7XG4gICAgY29uc3QgY29tYmF0RmFjdG9yID0gbnVtKGNmZy5jb21iYXRGYWN0b3IsIDEuMCk7XG4gICAgY29uc3QgbG9zc0ZyYWMgPSBudW0oY2ZnLmxvc3NGcmFjLCAwLjUpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBpZiAob3Vycy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgICBjb25zdCBvdXJTdHJlbmd0aCA9IG91cnMucmVkdWNlKChzLCBnKSA9PiBzICsgZy50b3RhbFVuaXRzLCAwKTtcblxuICAgIGNvbnN0IGN4ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLngsIDApIC8gb3Vycy5sZW5ndGg7XG4gICAgY29uc3QgY3kgPSBvdXJzLnJlZHVjZSgocywgZykgPT4gcyArIGcueSwgMCkgLyBvdXJzLmxlbmd0aDtcblxuICAgIHR5cGUgQ2l0eSA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGdhcnJpc29uOiBudW1iZXI7IGlzQ2FwaXRhbDogYm9vbGVhbjsgfTtcbiAgICBjb25zdCBlbmVteUNpdGllczogQ2l0eVtdID0gY2l0aWVzXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKVxuICAgICAgICAubWFwKGMgPT4gKHsgeDogYy54LCB5OiBjLnksIGdhcnJpc29uOiBjLmdhcnJpc29uLCBpc0NhcGl0YWw6ICEhYy5pc0NhcGl0YWwgfSkpO1xuICAgIGlmIChlbmVteUNpdGllcy5sZW5ndGggPT09IDApIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIFtdKTtcblxuICAgIGNvbnN0IGNpdHlTY29yZSA9IChmcm9tOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9LCBjOiBDaXR5KSA9PlxuICAgICAgICBkaXN0V2VpZ2h0ICogaGV4RGlzdGFuY2UoZnJvbSwgYykgKyBnYXJyaXNvbldlaWdodCAqIGMuZ2Fycmlzb24gLSAoYy5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKTtcblxuICAgIC8vIE9uZSByb2xsb3V0IGZyb20gYSBmb3JjZWQgZmlyc3QgdGFyZ2V0OiBzbm93YmFsbCBncmVlZGlseSAocmFuZG9taXplZCBhbW9uZyB0aGUgdG9wLUsgYmVzdCBieVxuICAgIC8vIHNjb3JlKSB1bnRpbCB0aW1lIHJ1bnMgb3V0IG9yIHdlIGNhbid0IGJlYXQgdGhlIG5leHQgZ2Fycmlzb24uIFJldHVybnMgY2FwdHVyZWQgXCJ2YWx1ZVwiLlxuICAgIGNvbnN0IHJvbGxvdXQgPSAoZmlyc3Q6IENpdHkpOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgc3RyZW5ndGggPSBvdXJTdHJlbmd0aDtcbiAgICAgICAgbGV0IHBvcyA9IHsgeDogY3gsIHk6IGN5IH07XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IGVuZW15Q2l0aWVzLnNsaWNlKCk7XG4gICAgICAgIGxldCB0ID0gMDtcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgbGV0IGZvcmNlZDogQ2l0eSB8IHVuZGVmaW5lZCA9IGZpcnN0O1xuICAgICAgICB3aGlsZSAocmVtYWluaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQ6IENpdHkgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoZm9yY2VkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZm9yY2VkO1xuICAgICAgICAgICAgICAgIGZvcmNlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFua2VkID0gcmVtYWluaW5nLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gY2l0eVNjb3JlKHBvcywgYSkgLSBjaXR5U2NvcmUocG9zLCBiKSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gcmFua2VkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKHRvcEssIHJhbmtlZC5sZW5ndGgpKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkgYnJlYWs7XG4gICAgICAgICAgICB0ICs9IGhleERpc3RhbmNlKHBvcywgdGFyZ2V0KTsgLy8gfjEgdGlsZS90dXJuXG4gICAgICAgICAgICBpZiAodCA+IHJvbGxvdXRUdXJucykgYnJlYWs7XG4gICAgICAgICAgICBpZiAoc3RyZW5ndGggPD0gdGFyZ2V0LmdhcnJpc29uICogY29tYmF0RmFjdG9yKSBicmVhazsgLy8gY2FuJ3QgdGFrZSBpdFxuICAgICAgICAgICAgc3RyZW5ndGggLT0gdGFyZ2V0LmdhcnJpc29uICogbG9zc0ZyYWM7XG4gICAgICAgICAgICB2YWx1ZSArPSAxICsgKHRhcmdldC5pc0NhcGl0YWwgPyAxIDogMCk7XG4gICAgICAgICAgICBwb3MgPSB7IHg6IHRhcmdldC54LCB5OiB0YXJnZXQueSB9O1xuICAgICAgICAgICAgY29uc3QgaSA9IHJlbWFpbmluZy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoaSA+PSAwKSByZW1haW5pbmcuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IGJlc3Q6IENpdHkgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGJlc3RBdmcgPSAtSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBjYW5kIG9mIGVuZW15Q2l0aWVzKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvbGxvdXRzOyByKyspIHN1bSArPSByb2xsb3V0KGNhbmQpO1xuICAgICAgICBjb25zdCBhdmcgPSBzdW0gLyByb2xsb3V0cztcbiAgICAgICAgaWYgKGF2ZyA+IGJlc3RBdmcpIHsgYmVzdEF2ZyA9IGF2ZzsgYmVzdCA9IGNhbmQ7IH1cbiAgICB9XG4gICAgaWYgKCFiZXN0KSByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBbXSk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBiZXN0O1xuICAgIGNvbnN0IG9yZGVycyA9IG91cnMubWFwKGcgPT4gKHsgZ2VuZXJhbElkOiBnLmlkLCB0YXJnZXRQb3NpdGlvbjogeyB4OiB0YXJnZXQueCwgeTogdGFyZ2V0LnkgfSB9KSk7XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJTbmFwc2hvdEdlbmVyYWwgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG4vLyBFbmdpbmUgY29tYmF0IHJlYWNoIGZvciBhIHN0YWNrIG9mIGBjb3VudGAgdW5pdHMgKG1pcnJvcnMgZ2V0Q29tYmF0RGlzdGFuY2UgaW4gdGhlIGVuZ2luZSkuXG5mdW5jdGlvbiBjb21iYXREaXN0KGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2cxMChjb3VudCArIDEpKSArIDAuNTtcbn1cblxuLy8gVGhyZWF0LWF3YXJlIHZhbHVlIEFJLiBFYWNoIGdlbmVyYWwgY2hvb3NlcyBhbW9uZyBBVFRBQ0sgLyBERUZFTkQgLyBSRVRSRUFUIGluc3RlYWQgb2YgYmxpbmRseVxuLy8gcnVubmluZyBhdCB0aGUgbmVhcmVzdCBjaXR5OlxuLy8gICAtIEFUVEFDSyBhbiBlbmVteSBjaXR5IG9ubHkgaWYgb3VyIHN0YWNrIGNhbiBhY3R1YWxseSBiZWF0IGl0cyBnYXJyaXNvbiAoY29tYmF0LWdhdGVkKSwgc2NvcmVkXG4vLyAgICAgYnkgdmFsdWUgKGxvdyBnYXJyaXNvbiwgY2FwaXRhbHMsIGNsb3NlbmVzcykuXG4vLyAgIC0gREVGRU5EIGFuIG93bmVkIGNpdHkgdGhhdCBhbiBlbmVteSBzdGFjayBjYW4gcmVhY2ggc29vbiwgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIG1hdHRlci5cbi8vICAgLSBSRVRSRUFUIHRvd2FyZCB0aGUgbmVhcmVzdCBmcmllbmRseSBjaXR5L2dlbmVyYWwgd2hlbiBhIHN0cm9uZ2VyIGVuZW15IHN0YWNrIGNhbiBjYXRjaCB1cyBhbmRcbi8vICAgICB3ZSBoYXZlIG5vIHdpbm5pbmcgYXR0YWNrIOKAlCBpbnN0ZWFkIG9mIGZlZWRpbmcgaXQuXG4vLyBjb25maWc6IHNhZmV0eSAod2luIG1hcmdpbiksIGRpc3RXZWlnaHQsIGdhcnJpc29uV2VpZ2h0LCBjYXBpdGFsQm9udXMsIGRlZmVuZFdlaWdodCwgZW5lbXlNb3ZlLlxucmVnaXN0ZXJTdHJhdGVneShcInRocmVhdEF3YXJlXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IHNhZmV0eSA9IG51bShjZmcuc2FmZXR5LCAxLjE1KTtcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNCk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDUpO1xuICAgIGNvbnN0IGRlZmVuZFdlaWdodCA9IG51bShjZmcuZGVmZW5kV2VpZ2h0LCA4KTtcbiAgICBjb25zdCBlbmVteU1vdmUgPSBudW0oY2ZnLmVuZW15TW92ZSwgMS41KTsgLy8gYXNzdW1lZCBlbmVteSB0aWxlcy90dXJuIGZvciB0aHJlYXQgbG9va2FoZWFkXG4gICAgY29uc3QgaHVudFdlaWdodCA9IG51bShjZmcuaHVudFdlaWdodCwgMCk7IC8vID4wOiBhbHNvIGNoYXNlIGVuZW15IGdlbmVyYWxzIHdlYWtlciB0aGFuIHVzLCB0byBlbGltaW5hdGUgdGhlbVxuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3Qgb3VyQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuXG4gICAgY29uc3QgbmVhcmVzdEZyaWVuZGx5UmVmdWdlID0gKGc6IEFJV29ya2VyU25hcHNob3RHZW5lcmFsKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdEQgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG91ckNpdGllcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGcsIGMpO1xuICAgICAgICAgICAgaWYgKGQgPiAwICYmIGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3QgPSB7IHg6IGMueCwgeTogYy55IH07IH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3Vycykge1xuICAgICAgICAgICAgaWYgKG8uaWQgPT09IGcuaWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKG8udG90YWxVbml0cyA8PSBnLnRvdGFsVW5pdHMpIGNvbnRpbnVlOyAvLyBvbmx5IGZsZWUgdG93YXJkIHNvbWVvbmUgc3Ryb25nZXJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShnLCBvKTtcbiAgICAgICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0geyB4OiBvLngsIHk6IG8ueSB9OyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG5cbiAgICAgICAgLy8gSXMgYSBzdHJvbmdlciBlbmVteSBhYmxlIHRvIHJlYWNoIHVzIG5leHQgdHVybj9cbiAgICAgICAgbGV0IHVuZGVyVGhyZWF0ID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZS50b3RhbFVuaXRzIDw9IFMgKiBzYWZldHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgcmVhY2ggPSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyBlbmVteU1vdmU7XG4gICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoZSwgZ2VuKSA8PSByZWFjaCkgeyB1bmRlclRocmVhdCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZXN0IEFUVEFDSyB3ZSBjYW4gYWN0dWFsbHkgd2luLlxuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIGVuZW15Q2l0aWVzKSB7XG4gICAgICAgICAgICBpZiAoUyA8PSBjLmdhcnJpc29uICogc2FmZXR5KSBjb250aW51ZTsgLy8gY2FuJ3QgdGFrZSBpdCDigJQgZG9uJ3QgZmVlZCBpdFxuICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKGdlbiwgYyk7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IChjLmlzQ2FwaXRhbCA/IGNhcGl0YWxCb251cyA6IDApIC0gZGlzdFdlaWdodCAqIGQgLSBnYXJyaXNvbldlaWdodCAqIGMuZ2Fycmlzb247XG4gICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2NvcmU7IGJlc3QgPSB7IHg6IGMueCwgeTogYy55IH07IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhVTlQ6IGNoYXNlIGVuZW15IGdlbmVyYWxzIHdlIGNhbiBiZWF0LCB0byBhY3R1YWxseSBlbGltaW5hdGUgdGhlbSAoY2xvc2Ugb3V0IHRoZSBnYW1lKS5cbiAgICAgICAgaWYgKGh1bnRXZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgICAgIGlmIChTIDw9IGUudG90YWxVbml0cyAqIHNhZmV0eSkgY29udGludWU7IC8vIG9ubHkgaHVudCBwcmV5IHdlIGJlYXRcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZ2VuLCBlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZSA9IGh1bnRXZWlnaHQgLSBkaXN0V2VpZ2h0ICogZDtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2NvcmU7IGJlc3QgPSB7IHg6IGUueCwgeTogZS55IH07IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERFRkVORDogYW4gb3duZWQgY2l0eSBhbiBlbmVteSBzdGFjayBjYW4gcmVhY2ggc29vbiDigJQgcHVsbCBhIG5lYXJieSBnZW5lcmFsIGJhY2suXG4gICAgICAgIGZvciAoY29uc3Qgb2Mgb2Ygb3VyQ2l0aWVzKSB7XG4gICAgICAgICAgICBsZXQgdGhyZWF0ZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoZSwgb2MpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIGVuZW15TW92ZSkgeyB0aHJlYXRlbmVkID0gdHJ1ZTsgYnJlYWs7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhyZWF0ZW5lZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoZ2VuLCBvYyk7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IGRlZmVuZFdlaWdodCAtIGRpc3RXZWlnaHQgKiBkO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBvYy54LCB5OiBvYy55IH07IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJFVFJFQVQgd2hlbiB0aHJlYXRlbmVkIGFuZCBub3RoaW5nIHdvcnRoIGRvaW5nLlxuICAgICAgICBpZiAodW5kZXJUaHJlYXQgJiYgKCFiZXN0IHx8IGJlc3RTY29yZSA8IDApKSB7XG4gICAgICAgICAgICBjb25zdCByZWZ1Z2UgPSBuZWFyZXN0RnJpZW5kbHlSZWZ1Z2UoZ2VuKTtcbiAgICAgICAgICAgIGlmIChyZWZ1Z2UpIGJlc3QgPSByZWZ1Z2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJTbmFwc2hvdCB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIEluZmx1ZW5jZSAvIGZsb3ctZmllbGQgQUkuIEluc3RlYWQgb2YgYmVlbGluaW5nIGF0IHRoZSBuZWFyZXN0IGNpdHkgKHdoaWNoIGlnbm9yZXMgdGVycmFpbiBhbmRcbi8vIHdhbGtzIGludG8gc3Ryb25nZXIgc3RhY2tzKSwgd2UgYnVpbGQgdHdvIHNjYWxhciBmaWVsZHMgb3ZlciB0aGUgcGFzc2FibGUgbWFwIGFuZCBoYXZlIGVhY2hcbi8vIGdlbmVyYWwgZm9sbG93IHRoZSBncmFkaWVudCBvbmUgc3RlcCBwZXIgdHVybjpcbi8vICAgLSBhdHRyYWN0aW9uOiBtYXgtcGx1cyBCRlMgc2VlZGVkIGF0IGVuZW15IGNpdGllcyAoc29mdCArIGNhcGl0YWwgPSBtb3JlIHZhbHVlKSwgZGVjYXlpbmcgcGVyXG4vLyAgICAgc3RlcCwgc28gYSBnZW5lcmFsIGZsb3dzIHRvd2FyZCB0aGUgYmVzdCByZWFjaGFibGUgdGFyZ2V0IEFST1VORCBtb3VudGFpbnMvd2F0ZXIuXG4vLyAgIC0gZGFuZ2VyOiBtYXgtcGx1cyBCRlMgc2VlZGVkIGF0IGVuZW15IGdlbmVyYWwgc3RhY2tzICh2YWx1ZSA9IHRoZWlyIHN0cmVuZ3RoKSwgZGVjYXlpbmcgcGVyXG4vLyAgICAgc3RlcCwgc28gdGlsZXMgbmVhciBhIHN0cm9uZyBlbmVteSBhcmUgcGVuYWxpc2VkLlxuLy8gRWFjaCBnZW5lcmFsIG1vdmVzIHRvIHRoZSBuZWlnaGJvdXIgbWF4aW1pc2luZyBhdHRyYWN0aW9uIC0gcmVwZWxXZWlnaHQqbWF4KDAsIGRhbmdlciAtIG93blN0YWNrKSxcbi8vIGkuZS4gaXQgYWR2YW5jZXMgb24gdmFsdWUgYnV0IHJlZnVzZXMgdG8gc3RlcCBpbnRvIGEgZm9yY2Ugc3Ryb25nZXIgdGhhbiBpdHNlbGYuIEVtZXJnZW50XG4vLyBhdHRhY2sgLyBmbGFuayAvIGF2b2lkIGJlaGF2aW91ciB3aXRoIG5vIHBlci10YXJnZXQgc3BlY2lhbC1jYXNpbmcuXG4vLyBjb25maWc6IGF0dHJhY3REZWNheSwgZGFuZ2VyRGVjYXksIHJlcGVsV2VpZ2h0LCBjYXBpdGFsQm9udXMsIGdhcnJpc29uUGVuYWx0eSwgYmFzZUNpdHlWYWx1ZS5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJpbmZsdWVuY2VNYXBcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgYXR0cmFjdERlY2F5ID0gbnVtKGNmZy5hdHRyYWN0RGVjYXksIDEpO1xuICAgIGNvbnN0IGRhbmdlckRlY2F5ID0gbnVtKGNmZy5kYW5nZXJEZWNheSwgMS41KTtcbiAgICBjb25zdCByZXBlbFdlaWdodCA9IG51bShjZmcucmVwZWxXZWlnaHQsIDEpO1xuICAgIGNvbnN0IGNhcGl0YWxCb251cyA9IG51bShjZmcuY2FwaXRhbEJvbnVzLCA0MCk7XG4gICAgY29uc3QgZ2Fycmlzb25QZW5hbHR5ID0gbnVtKGNmZy5nYXJyaXNvblBlbmFsdHksIDAuMyk7XG4gICAgY29uc3QgYmFzZUNpdHlWYWx1ZSA9IG51bShjZmcuYmFzZUNpdHlWYWx1ZSwgNjApO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcblxuICAgIC8vIFBhc3NhYmxlIHRpbGUgZ3JhcGguXG4gICAgY29uc3Qga2V5ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBgJHt4fSwke3l9YDtcbiAgICBjb25zdCB0aWxlU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTtcbiAgICAgICAgaWYgKHNwZWVkICYmIHNwZWVkID4gMCkgdGlsZVNldC5hZGQoa2V5KHQueCwgdC55KSk7XG4gICAgfVxuICAgIGNvbnN0IG5laWdoYm9yc09mID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkeCA9PT0gMCAmJiBkeSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgbnggPSB4ICsgZHgsIG55ID0geSArIGR5O1xuICAgICAgICAgICAgICAgIGlmICghdGlsZVNldC5oYXMoa2V5KG54LCBueSkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHsgeDogbngsIHk6IG55IH0pID09PSAxKSBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG5cbiAgICAvLyBNYXgtcGx1cyBCRlM6IGVhY2ggc291cmNlIGluamVjdHMgYSB2YWx1ZSB0aGF0IGRlY2F5cyBieSBgZGVjYXlgIHBlciBwYXNzYWJsZSBzdGVwOyBldmVyeSB0aWxlXG4gICAgLy8ga2VlcHMgdGhlIGhpZ2hlc3QgdmFsdWUgcmVhY2hpbmcgaXQuIFNpbXBsZSBEaWprc3RyYS1zdHlsZSByZWxheGF0aW9uIHdpdGggYSB2YWx1ZSBwcmlvcml0eS5cbiAgICBjb25zdCBwcm9wYWdhdGUgPSAoc291cmNlczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdmFsdWU6IG51bWJlcjsgfVtdLCBkZWNheTogbnVtYmVyKTogTWFwPHN0cmluZywgbnVtYmVyPiA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAgICAgLy8gUHJpb3JpdHkgYnkgdmFsdWUgZGVzYyB2aWEgcmVwZWF0ZWQgbWF4LXNjYW4gb3ZlciBhbiBhY3RpdmUgZnJvbnRpZXIuIFRpbGVzIGFyZSBmZXcsIGFuZCB3ZVxuICAgICAgICAvLyBvbmx5IHJlbGF4IHdoZW4gd2UgaW1wcm92ZSwgc28gdGhpcyBzdGF5cyBjaGVhcC5cbiAgICAgICAgY29uc3QgZnJvbnRpZXI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHZhbHVlOiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc291cmNlcykge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleShzLngsIHMueSk7XG4gICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKGspKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICgoZmllbGQuZ2V0KGspID8/IC1JbmZpbml0eSkgPCBzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZmllbGQuc2V0KGssIHMudmFsdWUpO1xuICAgICAgICAgICAgICAgIGZyb250aWVyLnB1c2gocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGZyb250aWVyLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gcG9wIHRoZSBoaWdoZXN0LXZhbHVlIGZyb250aWVyIGVudHJ5XG4gICAgICAgICAgICBsZXQgYmkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmcm9udGllci5sZW5ndGg7IGkrKykgaWYgKGZyb250aWVyW2ldLnZhbHVlID4gZnJvbnRpZXJbYmldLnZhbHVlKSBiaSA9IGk7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSBmcm9udGllci5zcGxpY2UoYmksIDEpWzBdO1xuICAgICAgICAgICAgaWYgKChmaWVsZC5nZXQoa2V5KGN1ci54LCBjdXIueSkpID8/IC1JbmZpbml0eSkgPiBjdXIudmFsdWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbnYgPSBjdXIudmFsdWUgLSBkZWNheTtcbiAgICAgICAgICAgIGlmIChudiA8PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZihjdXIueCwgY3VyLnkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmsgPSBrZXkobi54LCBuLnkpO1xuICAgICAgICAgICAgICAgIGlmICgoZmllbGQuZ2V0KG5rKSA/PyAtSW5maW5pdHkpID49IG52KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBmaWVsZC5zZXQobmssIG52KTtcbiAgICAgICAgICAgICAgICBmcm9udGllci5wdXNoKHsgeDogbi54LCB5OiBuLnksIHZhbHVlOiBudiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGF0dHJhY3RTb3VyY2VzID0gY2l0aWVzXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKVxuICAgICAgICAubWFwKGMgPT4gKHtcbiAgICAgICAgICAgIHg6IGMueCwgeTogYy55LFxuICAgICAgICAgICAgdmFsdWU6IGJhc2VDaXR5VmFsdWUgKyAoYy5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKSAtIGdhcnJpc29uUGVuYWx0eSAqIGMuZ2Fycmlzb24sXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKHMgPT4gcy52YWx1ZSA+IDApO1xuICAgIGNvbnN0IGRhbmdlclNvdXJjZXMgPSBnZW5lcmFsc1xuICAgICAgICAuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZClcbiAgICAgICAgLm1hcChnID0+ICh7IHg6IGcueCwgeTogZy55LCB2YWx1ZTogZy50b3RhbFVuaXRzIH0pKTtcblxuICAgIGNvbnN0IGF0dHJhY3QgPSBwcm9wYWdhdGUoYXR0cmFjdFNvdXJjZXMsIGF0dHJhY3REZWNheSk7XG4gICAgY29uc3QgZGFuZ2VyID0gcHJvcGFnYXRlKGRhbmdlclNvdXJjZXMsIGRhbmdlckRlY2F5KTtcblxuICAgIGNvbnN0IHNjb3JlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBvd25TdGFjazogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBhdHRyYWN0LmdldChrZXkoeCwgeSkpID8/IDA7XG4gICAgICAgIGNvbnN0IGQgPSBkYW5nZXIuZ2V0KGtleSh4LCB5KSkgPz8gMDtcbiAgICAgICAgcmV0dXJuIGEgLSByZXBlbFdlaWdodCAqIE1hdGgubWF4KDAsIGQgLSBvd25TdGFjayk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2YgZ2VuZXJhbHMpIHtcbiAgICAgICAgaWYgKGdlbi5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGhlcmUgPSBzY29yZShnZW4ueCwgZ2VuLnksIGdlbi50b3RhbFVuaXRzKTtcbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBoZXJlO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgbmVpZ2hib3JzT2YoZ2VuLngsIGdlbi55KSkge1xuICAgICAgICAgICAgY29uc3Qgc2MgPSBzY29yZShuLngsIG4ueSwgZ2VuLnRvdGFsVW5pdHMpO1xuICAgICAgICAgICAgaWYgKHNjID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjOyBiZXN0ID0gbjsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogYmVzdCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gRW5naW5lIGNvbWJhdCByZWFjaCBmb3IgYSBzdGFjayBvZiBgY291bnRgIHVuaXRzIChtaXJyb3JzIGdldENvbWJhdERpc3RhbmNlIGluIHRoZSBlbmdpbmUpLlxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIFRlcnJpdG9yeSAvIGNvbnRhaW5tZW50IEFJIOKAlCB0aGUgdXNlcidzIGNvcmUgc3RyYXRlZ3k6IGRvbid0IGZpZ2h0IGJhdHRsZXMgeW91J2QgbG9zZSwgaW5zdGVhZFxuLy8gbWF4aW1pemUgdGhlIExBTkQgeW91IGhvbGQgKHRpbGUgb3duZXJzaGlwIGRyaWZ0cyB0byB3aG9ldmVyIGhhcyB1bml0cyBuZWFyYnkpLCBldmVuIHdoaWxlXG4vLyBvdXRudW1iZXJlZCwgYnkgc3ByZWFkaW5nIG91dCBhbmQgXCJuZXR0aW5nXCIgdGhlIGVuZW15LiBNb3JlIGxhbmQgLT4gbW9yZSBmb29kIC0+IGJpZ2dlciBhcm1pZXMgLT5cbi8vIGV2ZW50dWFsbHkgeW91IGNhbiB3aW4gdGhlIGZpZ2h0cyB5b3Ugd2VyZSBhdm9pZGluZy5cbi8vXG4vLyBFYWNoIGdlbmVyYWwgc2NvcmVzIGl0cyBwYXNzYWJsZSBuZWlnaGJvdXJzIChhbmQgc3RheWluZyBwdXQpOlxuLy8gICArIGFkdmFuY2U6ICBwdXNoIHRvd2FyZCBlbmVteS1oZWxkIHNwYWNlIChuZWdhdGl2ZSBkaXN0YW5jZSB0byBuZWFyZXN0IGVuZW15IGdlbmVyYWwvY2l0eSkgc28gd2Vcbi8vICAgICAgICAgICAgICAgY29udGVzdCB0aGVpciB0ZXJyaXRvcnkgcmF0aGVyIHRoYW4gaHVkZGxpbmcgYXQgaG9tZS5cbi8vICAgKyBzcHJlYWQ6ICAgcmV3YXJkIGRpc3RhbmNlIGZyb20gb3VyIE9XTiBnZW5lcmFscyAoY2FwcGVkKSBzbyB0aGUgYXJteSBmYW5zIG91dCBpbnRvIGEgbmV0XG4vLyAgICAgICAgICAgICAgIGluc3RlYWQgb2Ygc3RhY2tpbmcgb24gb25lIHRpbGUgKG92ZXJsYXBwaW5nIGNvdmVyYWdlIHdpbnMgbm8gZXh0cmEgbGFuZCkuXG4vLyAgIC0gdGhyZWF0OiAgIGhlYXZ5IHBlbmFsdHkgZm9yIHN0ZXBwaW5nIHdpdGhpbiBjb21iYXQgcmVhY2ggb2YgYW4gZW5lbXkgc3RhY2sgU1RST05HRVIgdGhhbiB1cyDigJRcbi8vICAgICAgICAgICAgICAgdGhhdCdzIHRoZSBmaWdodCB3ZSByZWZ1c2UuXG4vLyAgICsgY2FwdHVyZTogIGJpZyBib251cyBmb3IgbW92aW5nIG9udG8gYSBjaXR5IHdlIGNhbiB0YWtlIChnYXJyaXNvbiA8IG91ciBzdGFjaykg4oCUIGZyZWUgbGFuZC5cbi8vIGNvbmZpZzogYWR2YW5jZVdlaWdodCwgc3ByZWFkV2VpZ2h0LCBzcHJlYWRDYXAsIHRocmVhdFdlaWdodCwgdGhyZWF0TWFyZ2luLCBjYXB0dXJlQm9udXMuXG5yZWdpc3RlclN0cmF0ZWd5KFwidGVycml0b3J5XCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGFkdmFuY2VXZWlnaHQgPSBudW0oY2ZnLmFkdmFuY2VXZWlnaHQsIDEpO1xuICAgIGNvbnN0IHNwcmVhZFdlaWdodCA9IG51bShjZmcuc3ByZWFkV2VpZ2h0LCAyKTtcbiAgICBjb25zdCBzcHJlYWRDYXAgPSBudW0oY2ZnLnNwcmVhZENhcCwgNik7XG4gICAgY29uc3QgdGhyZWF0V2VpZ2h0ID0gbnVtKGNmZy50aHJlYXRXZWlnaHQsIDEyKTtcbiAgICBjb25zdCB0aHJlYXRNYXJnaW4gPSBudW0oY2ZnLnRocmVhdE1hcmdpbiwgMS4xKTtcbiAgICBjb25zdCBjYXB0dXJlQm9udXMgPSBudW0oY2ZnLmNhcHR1cmVCb251cywgNTApO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcblxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07XG4gICAgICAgIGlmIChzcGVlZCAmJiBzcGVlZCA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpO1xuICAgIH1cbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKGtleShueCwgbnkpKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15R2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteU9yTmV1dHJhbENpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUFuY2hvcnMgPSBbLi4uZW5lbXlHZW5lcmFscywgLi4uZW5lbXlPck5ldXRyYWxDaXRpZXNdO1xuXG4gICAgY29uc3QgbWluRGlzdFRvID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBwdHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSk6IG51bWJlciA9PiB7XG4gICAgICAgIGxldCBiZXN0ID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgcCBvZiBwdHMpIGJlc3QgPSBNYXRoLm1pbihiZXN0LCBoZXhEaXN0YW5jZSh7IHgsIHkgfSwgcCkpO1xuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBvdXJzKSB7XG4gICAgICAgIGNvbnN0IFMgPSBnZW4udG90YWxVbml0cztcbiAgICAgICAgY29uc3QgYWxsaWVzID0gb3Vycy5maWx0ZXIobyA9PiBvLmlkICE9PSBnZW4uaWQpO1xuICAgICAgICBjb25zdCBjaXR5QXQgPSBuZXcgTWFwKGVuZW15T3JOZXV0cmFsQ2l0aWVzLm1hcChjID0+IFtrZXkoYy54LCBjLnkpLCBjXSkpO1xuXG4gICAgICAgIGNvbnN0IHNjb3JlVGlsZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICAgICAgLy8gYWR2YW5jZSB0b3dhcmQgZW5lbXkgc3BhY2UgKGNvbnRlc3QgdGhlaXIgbGFuZClcbiAgICAgICAgICAgIGlmIChlbmVteUFuY2hvcnMubGVuZ3RoKSBzY29yZSArPSBhZHZhbmNlV2VpZ2h0ICogLW1pbkRpc3RUbyh4LCB5LCBlbmVteUFuY2hvcnMpO1xuICAgICAgICAgICAgLy8gc3ByZWFkIG91dCBmcm9tIG91ciBvd24gZ2VuZXJhbHMgdG8gY292ZXIgbW9yZSBhcmVhIChjYXBwZWQpXG4gICAgICAgICAgICBpZiAoYWxsaWVzLmxlbmd0aCkgc2NvcmUgKz0gc3ByZWFkV2VpZ2h0ICogTWF0aC5taW4oc3ByZWFkQ2FwLCBtaW5EaXN0VG8oeCwgeSwgYWxsaWVzKSk7XG4gICAgICAgICAgICAvLyByZWZ1c2UgdG8gc3RlcCB3aXRoaW4gcmVhY2ggb2YgYSBzdHJvbmdlciBlbmVteSBzdGFja1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50b3RhbFVuaXRzIDw9IFMgKiB0aHJlYXRNYXJnaW4pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWNoID0gY29tYmF0RGlzdChlLnRvdGFsVW5pdHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh7IHgsIHkgfSwgZSk7XG4gICAgICAgICAgICAgICAgaWYgKGQgPD0gcmVhY2ggKyAxKSBzY29yZSAtPSB0aHJlYXRXZWlnaHQgKiAocmVhY2ggKyAxIC0gZCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZ3JhYiB1bmRlZmVuZGVkIC8gd2VhayBsYW5kXG4gICAgICAgICAgICBjb25zdCBjID0gY2l0eUF0LmdldChrZXkoeCwgeSkpO1xuICAgICAgICAgICAgaWYgKGMgJiYgUyA+IGMuZ2Fycmlzb24pIHNjb3JlICs9IGNhcHR1cmVCb251cztcbiAgICAgICAgICAgIHJldHVybiBzY29yZTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IHNjb3JlVGlsZShnZW4ueCwgZ2VuLnkpO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgbmVpZ2hib3JzT2YoZ2VuLngsIGdlbi55KSkge1xuICAgICAgICAgICAgY29uc3Qgc2MgPSBzY29yZVRpbGUobi54LCBuLnkpO1xuICAgICAgICAgICAgaWYgKHNjID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjOyBiZXN0ID0gbjsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiZXN0KSBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCB0YXJnZXRQb3NpdGlvbjogYmVzdCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aEdyb3d0aChzbmFwc2hvdCwgY2ZnLCBvcmRlcnMpO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIFNub3diYWxsIEFJIOKAlCB0aGUgZnVsbCB2ZXJzaW9uIG9mIHRoZSB1c2VyJ3Mgc3RyYXRlZ3kuIFRlcnJpdG9yeS9jb250YWlubWVudCBFQVJMWSAoc3ByZWFkLCB0YWtlXG4vLyBsYW5kLCByZWZ1c2UgbG9zaW5nIGZpZ2h0cywgZ3JvdyksIHRoZW4gQ09OVkVSVCB0aGUgZWNvbm9taWMgbGVhZCBpbnRvIGtpbGxzOlxuLy8gICAtIGh1bnQ6IGFjdGl2ZWx5IGNoYXNlIGVuZW15IGdlbmVyYWxzIHdlIGNhbiBiZWF0ICh3ZWFrZXIgdGhhbiBvdXIgc3RhY2spIHRvIGRlc3Ryb3kgdGhlbSDigJQgeW91XG4vLyAgICAgY2FuJ3Qgd2luIGJ5IGhvbGRpbmcgbGFuZCBmb3JldmVyLCB5b3UgaGF2ZSB0byBlbGltaW5hdGUgdGhlIGVuZW15IG9uY2UgeW91IG91dC1zY2FsZSB0aGVtLlxuLy8gICAtIHByZXNzOiBvbmNlIG91ciBmYWN0aW9uIG91dC1hcm1pZXMgdGhlIHN0cm9uZ2VzdCBlbmVteSwgcmVsYXggdGhyZWF0LWF2b2lkYW5jZSBhbmQgcHVzaCwgc29cbi8vICAgICB0aGUgbGVhZCBpcyBjb252ZXJ0ZWQgdG8gYSB3aW4gaW5zdGVhZCBvZiBzdGFsbGluZy5cbi8vICAgLSB0aHJlYXQ6IHN0aWxsIHJlZnVzZSBmaWdodHMgYWdhaW5zdCBzdGFja3Mgc3Ryb25nZXIgdGhhbiB1cyAodGhlIHdob2xlIHBvaW50IG9mIHNub3diYWxsaW5nKS5cbi8vIGNvbmZpZzogYWR2YW5jZVdlaWdodCwgc3ByZWFkV2VpZ2h0LCBzcHJlYWRDYXAsIHRocmVhdFdlaWdodCwgdGhyZWF0TWFyZ2luLCBjYXB0dXJlQm9udXMsXG4vLyAgICAgICAgIGh1bnRXZWlnaHQsIGtpbGxNYXJnaW4sIHByZXNzTWFyZ2luLCBwcmVzc1JlbGF4LlxucmVnaXN0ZXJTdHJhdGVneShcInNub3diYWxsXCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGFkdmFuY2VXZWlnaHQgPSBudW0oY2ZnLmFkdmFuY2VXZWlnaHQsIDEpO1xuICAgIGNvbnN0IHNwcmVhZFdlaWdodCA9IG51bShjZmcuc3ByZWFkV2VpZ2h0LCAyKTtcbiAgICBjb25zdCBzcHJlYWRDYXAgPSBudW0oY2ZnLnNwcmVhZENhcCwgNik7XG4gICAgY29uc3QgdGhyZWF0V2VpZ2h0ID0gbnVtKGNmZy50aHJlYXRXZWlnaHQsIDE4KTtcbiAgICBjb25zdCB0aHJlYXRNYXJnaW4gPSBudW0oY2ZnLnRocmVhdE1hcmdpbiwgMS4wKTtcbiAgICBjb25zdCBjYXB0dXJlQm9udXMgPSBudW0oY2ZnLmNhcHR1cmVCb251cywgNjApO1xuICAgIGNvbnN0IGh1bnRXZWlnaHQgPSBudW0oY2ZnLmh1bnRXZWlnaHQsIDQpO1xuICAgIGNvbnN0IGtpbGxNYXJnaW4gPSBudW0oY2ZnLmtpbGxNYXJnaW4sIDEuMjUpOyAvLyBvbmx5IGh1bnQgZ2VuZXJhbHMgd2UgYmVhdCBieSB0aGlzIGZhY3RvclxuICAgIGNvbnN0IHByZXNzTWFyZ2luID0gbnVtKGNmZy5wcmVzc01hcmdpbiwgMS4xNSk7IC8vIFwiYWhlYWRcIiBvbmNlIG91ciBhcm15ID49IHRoaXMgKiB0b3AgZW5lbXkgYXJteVxuICAgIGNvbnN0IHByZXNzUmVsYXggPSBudW0oY2ZnLnByZXNzUmVsYXgsIDAuNCk7IC8vIHRocmVhdCB3ZWlnaHQgbXVsdGlwbGllciB3aGlsZSBwcmVzc2luZ1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcblxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07XG4gICAgICAgIGlmIChzcGVlZCAmJiBzcGVlZCA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpO1xuICAgIH1cbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKGtleShueCwgbnkpKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15R2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteU9yTmV1dHJhbENpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUFuY2hvcnMgPSBbLi4uZW5lbXlHZW5lcmFscywgLi4uZW5lbXlPck5ldXRyYWxDaXRpZXNdO1xuXG4gICAgLy8gQXJlIHdlIGFoZWFkIG92ZXJhbGw/IENvbXBhcmUgb3VyIHRvdGFsIGFybXkgdG8gdGhlIHN0cm9uZ2VzdCBzaW5nbGUgZW5lbXkgZmFjdGlvbidzIGFybXkuXG4gICAgY29uc3QgYXJteUJ5RmFjdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSBhcm15QnlGYWN0aW9uLnNldChnLmZhY3Rpb25JZCwgKGFybXlCeUZhY3Rpb24uZ2V0KGcuZmFjdGlvbklkKSA/PyAwKSArIGcudG90YWxVbml0cyk7XG4gICAgY29uc3Qgb3VyQXJteSA9IGFybXlCeUZhY3Rpb24uZ2V0KGZhY3Rpb25JZCkgPz8gMDtcbiAgICBsZXQgdG9wRW5lbXlBcm15ID0gMDtcbiAgICBmb3IgKGNvbnN0IFtmaWQsIGFdIG9mIGFybXlCeUZhY3Rpb24pIGlmIChmaWQgIT09IGZhY3Rpb25JZCkgdG9wRW5lbXlBcm15ID0gTWF0aC5tYXgodG9wRW5lbXlBcm15LCBhKTtcbiAgICBjb25zdCBwcmVzc2luZyA9IG91ckFybXkgPj0gdG9wRW5lbXlBcm15ICogcHJlc3NNYXJnaW47XG4gICAgY29uc3QgZWZmVGhyZWF0V2VpZ2h0ID0gcHJlc3NpbmcgPyB0aHJlYXRXZWlnaHQgKiBwcmVzc1JlbGF4IDogdGhyZWF0V2VpZ2h0O1xuXG4gICAgY29uc3QgbWluRGlzdFRvID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBwdHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSk6IG51bWJlciA9PiB7XG4gICAgICAgIGxldCBiZXN0ID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgcCBvZiBwdHMpIGJlc3QgPSBNYXRoLm1pbihiZXN0LCBoZXhEaXN0YW5jZSh7IHgsIHkgfSwgcCkpO1xuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBvdXJzKSB7XG4gICAgICAgIGNvbnN0IFMgPSBnZW4udG90YWxVbml0cztcbiAgICAgICAgY29uc3QgYWxsaWVzID0gb3Vycy5maWx0ZXIobyA9PiBvLmlkICE9PSBnZW4uaWQpO1xuICAgICAgICBjb25zdCBjaXR5QXQgPSBuZXcgTWFwKGVuZW15T3JOZXV0cmFsQ2l0aWVzLm1hcChjID0+IFtrZXkoYy54LCBjLnkpLCBjXSkpO1xuICAgICAgICBjb25zdCBwcmV5ID0gZW5lbXlHZW5lcmFscy5maWx0ZXIoZSA9PiBTID4gZS50b3RhbFVuaXRzICoga2lsbE1hcmdpbik7XG5cbiAgICAgICAgY29uc3Qgc2NvcmVUaWxlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgICAgICBpZiAoZW5lbXlBbmNob3JzLmxlbmd0aCkgc2NvcmUgKz0gYWR2YW5jZVdlaWdodCAqIC1taW5EaXN0VG8oeCwgeSwgZW5lbXlBbmNob3JzKTtcbiAgICAgICAgICAgIGlmIChhbGxpZXMubGVuZ3RoKSBzY29yZSArPSBzcHJlYWRXZWlnaHQgKiBNYXRoLm1pbihzcHJlYWRDYXAsIG1pbkRpc3RUbyh4LCB5LCBhbGxpZXMpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFjaCA9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UoeyB4LCB5IH0sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChkIDw9IHJlYWNoICsgMSkgc2NvcmUgLT0gZWZmVGhyZWF0V2VpZ2h0ICogKHJlYWNoICsgMSAtIGQgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGMgPSBjaXR5QXQuZ2V0KGtleSh4LCB5KSk7XG4gICAgICAgICAgICBpZiAoYyAmJiBTID4gYy5nYXJyaXNvbikgc2NvcmUgKz0gY2FwdHVyZUJvbnVzO1xuICAgICAgICAgICAgLy8gaHVudCBraWxsYWJsZSBlbmVteSBnZW5lcmFscyAoc3Ryb25nIHB1bGwgdG93YXJkIHRoZSBuZWFyZXN0IG9uZSlcbiAgICAgICAgICAgIGlmIChwcmV5Lmxlbmd0aCkgc2NvcmUgKz0gaHVudFdlaWdodCAqIC1taW5EaXN0VG8oeCwgeSwgcHJleSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBzY29yZVRpbGUoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmVUaWxlKG4ueCwgbi55KTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciwgQUlXb3JrZXJTbmFwc2hvdENpdHksIEFJV29ya2VyU25hcHNob3RHZW5lcmFsIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIENvb3JkaW5hdGVkIGFzc2lnbm1lbnQgQUkuIFNhbWUgY29tYmF0LWdhdGVkLCBkZWZlbmQsIHJldHJlYXQgbG9naWMgYXMgdGhlIGNoYW1wICh0aHJlYXRBd2FyZSksXG4vLyBidXQgYWRkcyBhIEdMT0JBTCBhc3NpZ25tZW50IHBhc3Mgc28gb3VyIGdlbmVyYWxzIGRvbid0IGFsbCBwaWxlIG9udG8gdGhlIHNpbmdsZSBiZXN0IGNpdHkgd2hpbGVcbi8vIG90aGVyIGNhcHR1cmFibGUgY2l0aWVzIHNpdCB1bnRha2VuLiBXZSBncmVlZGlseSBhc3NpZ24gZWFjaCBnZW5lcmFsIGEgRElTVElOQ1QgZW5lbXkgY2l0eVxuLy8gKGJlc3QgKGdlbmVyYWwsY2l0eSkgcGFpcnMgZmlyc3QpLCBjYXB0dXJpbmcgbW9yZSBjaXRpZXMgcGVyIHR1cm4gPT4gZmFzdGVyIGVjb25vbXkgPT4gbW9yZSB3aW5zLlxuLy8gQSBjaXR5IG9ubHkgbmVlZHMgbW9yZSB0aGFuIG9uZSBhdHRhY2tlciBpZiBhIHNpbmdsZSBnZW5lcmFsIGNhbid0IGNyYWNrIGl0OyBzdWNoIG92ZXItc3RyZW5ndGhcbi8vIGNpdGllcyBzdGF5IG9wZW4gdG8gbXVsdGlwbGUgZ2VuZXJhbHMuXG4vLyBjb25maWc6IHNhZmV0eSwgZGlzdFdlaWdodCwgZ2Fycmlzb25XZWlnaHQsIGNhcGl0YWxCb251cywgZGVmZW5kV2VpZ2h0LCBlbmVteU1vdmUuXG5yZWdpc3RlclN0cmF0ZWd5KFwiY29vcmRpbmF0ZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBzYWZldHkgPSBudW0oY2ZnLnNhZmV0eSwgMS4wKTtcbiAgICBjb25zdCBkaXN0V2VpZ2h0ID0gbnVtKGNmZy5kaXN0V2VpZ2h0LCAxKTtcbiAgICBjb25zdCBnYXJyaXNvbldlaWdodCA9IG51bShjZmcuZ2Fycmlzb25XZWlnaHQsIDAuNCk7XG4gICAgY29uc3QgY2FwaXRhbEJvbnVzID0gbnVtKGNmZy5jYXBpdGFsQm9udXMsIDUpO1xuICAgIGNvbnN0IGRlZmVuZFdlaWdodCA9IG51bShjZmcuZGVmZW5kV2VpZ2h0LCA0KTtcbiAgICBjb25zdCBlbmVteU1vdmUgPSBudW0oY2ZnLmVuZW15TW92ZSwgMS41KTtcbiAgICBjb25zdCBwb3BXZWlnaHQgPSBudW0oY2ZnLnBvcFdlaWdodCwgMCk7IC8vID4wOiBwcmVmZXIgaGlnaC1wb3B1bGF0aW9uIChlY29ub21pY2FsbHkgdmFsdWFibGUpIGNpdGllc1xuICAgIGNvbnN0IHBhdGhBd2FyZSA9IGNmZy5wYXRoQXdhcmUgPT09IHRydWU7IC8vIHJvdXRlIGJ5IHBhc3NhYmxlIGRpc3RhbmNlIGluc3RlYWQgb2Ygc3RyYWlnaHQgaGV4IGRpc3RhbmNlXG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgZ2VuZXJhbHMsIGNpdGllcywgdGlsZXMsIHRlcnJhaW5TcGVlZHMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3Qgb3VyQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuXG4gICAgLy8gUGF0aC1hd2FyZSBkaXN0YW5jZTogQkZTIG92ZXIgcGFzc2FibGUgdGlsZXMgZnJvbSBlYWNoIG9mIG91ciBnZW5lcmFscywgc28gYSBjaXR5IHdhbGxlZCBvZmYgYnlcbiAgICAvLyBtb3VudGFpbnMvd2F0ZXIgaXNuJ3QgdHJlYXRlZCBhcyBcIm5lYXJcIi4gRmFsbHMgYmFjayB0byBoZXggZGlzdGFuY2Ugd2hlbiBwYXRoQXdhcmUgaXMgb2ZmIG9yIGFcbiAgICAvLyB0aWxlIGlzIHVucmVhY2hhYmxlLlxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGlmIChwYXRoQXdhcmUpIGZvciAoY29uc3QgdCBvZiB0aWxlcykgeyBjb25zdCBzID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTsgaWYgKHMgJiYgcyA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpOyB9XG4gICAgY29uc3QgYmZzQ2FjaGUgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgbnVtYmVyPj4oKTtcbiAgICBjb25zdCBiZnNGcm9tID0gKGc6IEFJV29ya2VyU25hcHNob3RHZW5lcmFsKTogTWFwPHN0cmluZywgbnVtYmVyPiA9PiB7XG4gICAgICAgIGxldCBjYWNoZWQgPSBiZnNDYWNoZS5nZXQoZy5pZCk7XG4gICAgICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQ7XG4gICAgICAgIGNvbnN0IGRpc3QgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgICAgICBjb25zdCBzdGFydCA9IGtleShnLngsIGcueSk7XG4gICAgICAgIGRpc3Quc2V0KHN0YXJ0LCAwKTtcbiAgICAgICAgbGV0IGZyb250aWVyID0gW3sgeDogZy54LCB5OiBnLnkgfV07XG4gICAgICAgIHdoaWxlIChmcm9udGllci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRGOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY3VyIG9mIGZyb250aWVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2QgPSBkaXN0LmdldChrZXkoY3VyLngsIGN1ci55KSkgPz8gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkeCA9PT0gMCAmJiBkeSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG54ID0gY3VyLnggKyBkeCwgbnkgPSBjdXIueSArIGR5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuayA9IGtleShueCwgbnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRpbGVTZXQuaGFzKG5rKSB8fCBkaXN0LmhhcyhuaykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoY3VyLCB7IHg6IG54LCB5OiBueSB9KSAhPT0gMSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3Quc2V0KG5rLCBjZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Ri5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyb250aWVyID0gbmV4dEY7XG4gICAgICAgIH1cbiAgICAgICAgYmZzQ2FjaGUuc2V0KGcuaWQsIGRpc3QpO1xuICAgICAgICByZXR1cm4gY2FjaGVkID0gZGlzdDtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3RPZiA9IChnOiBBSVdvcmtlclNuYXBzaG90R2VuZXJhbCwgcDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSk6IG51bWJlciA9PiB7XG4gICAgICAgIGlmICghcGF0aEF3YXJlKSByZXR1cm4gaGV4RGlzdGFuY2UoZywgcCk7XG4gICAgICAgIGNvbnN0IGQgPSBiZnNGcm9tKGcpLmdldChrZXkocC54LCBwLnkpKTtcbiAgICAgICAgcmV0dXJuIGQgPT09IHVuZGVmaW5lZCA/IGhleERpc3RhbmNlKGcsIHApIDogZDtcbiAgICB9O1xuICAgIGNvbnN0IGNpdHlWYWx1ZSA9IChjOiBBSVdvcmtlclNuYXBzaG90Q2l0eSk6IG51bWJlciA9PlxuICAgICAgICAoYy5pc0NhcGl0YWwgPyBjYXBpdGFsQm9udXMgOiAwKSAtIGdhcnJpc29uV2VpZ2h0ICogYy5nYXJyaXNvbiArIHBvcFdlaWdodCAqIChjLnBvcHVsYXRpb24gPz8gMCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgTWFwPHN0cmluZywgeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfT4oKTtcblxuICAgIC8vIDEpIEdsb2JhbCBhc3NpZ25tZW50IG9mIGdlbmVyYWxzIHRvIGRpc3RpbmN0IGNhcHR1cmFibGUgY2l0aWVzLCBiZXN0IHBhaXJzIGZpcnN0LlxuICAgIHR5cGUgUGFpciA9IHsgZ2lkOiBzdHJpbmc7IGNpdHk6IHR5cGVvZiBlbmVteUNpdGllc1tudW1iZXJdOyBzY29yZTogbnVtYmVyOyBzb2xvYWJsZTogYm9vbGVhbjsgfTtcbiAgICBjb25zdCBwYWlyczogUGFpcltdID0gW107XG4gICAgZm9yIChjb25zdCBnIG9mIG91cnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIGVuZW15Q2l0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzb2xvYWJsZSA9IGcudG90YWxVbml0cyA+IGMuZ2Fycmlzb24gKiBzYWZldHk7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IGNpdHlWYWx1ZShjKSAtIGRpc3RXZWlnaHQgKiBkaXN0T2YoZywgYyk7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHsgZ2lkOiBnLmlkLCBjaXR5OiBjLCBzY29yZSwgc29sb2FibGUgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFpcnMuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xuICAgIGNvbnN0IGNpdHlUYWtlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgcCBvZiBwYWlycykge1xuICAgICAgICBpZiAoIXAuc29sb2FibGUpIGNvbnRpbnVlOyAvLyBvbmx5IHRoZSBhc3NpZ25tZW50IG9mIHdpbm5hYmxlIHNvbG8gY2FwdHVyZXMgaXMgZXhjbHVzaXZlXG4gICAgICAgIGlmICh0YXJnZXQuaGFzKHAuZ2lkKSkgY29udGludWU7XG4gICAgICAgIGlmIChjaXR5VGFrZW4uaGFzKHAuY2l0eS5pZCkpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXQuc2V0KHAuZ2lkLCB7IHg6IHAuY2l0eS54LCB5OiBwLmNpdHkueSB9KTtcbiAgICAgICAgY2l0eVRha2VuLmFkZChwLmNpdHkuaWQpO1xuICAgIH1cblxuICAgIC8vIDIpIEdlbmVyYWxzIHdpdGggbm8gYXNzaWduZWQgY2l0eTogZGVmZW5kIGEgdGhyZWF0ZW5lZCBjaXR5LCBlbHNlIGdhbmcgdXAgb24gdGhlIGJlc3RcbiAgICAvLyAgICByZW1haW5pbmcgY2l0eSAoZXZlbiBpZiBhbHJlYWR5IGNsYWltZWQg4oCUIG5lZWRlZCBmb3Igb3Zlci1zdHJlbmd0aCB0YXJnZXRzKSwgZWxzZSByZXRyZWF0LlxuICAgIGNvbnN0IHRocmVhdGVuZWRDaXR5ID0gKG9jOiB0eXBlb2Ygb3VyQ2l0aWVzW251bWJlcl0pID0+XG4gICAgICAgIGVuZW15R2VuZXJhbHMuc29tZShlID0+IGhleERpc3RhbmNlKGUsIG9jKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyBlbmVteU1vdmUpO1xuICAgIGNvbnN0IHJlZnVnZSA9IChnOiBBSVdvcmtlclNuYXBzaG90R2VuZXJhbCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3REID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBvdXJDaXRpZXMpIHsgY29uc3QgZCA9IGhleERpc3RhbmNlKGcsIGMpOyBpZiAoZCA+IDAgJiYgZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IHsgeDogYy54LCB5OiBjLnkgfTsgfSB9XG4gICAgICAgIGZvciAoY29uc3QgbyBvZiBvdXJzKSB7IGlmIChvLmlkID09PSBnLmlkIHx8IG8udG90YWxVbml0cyA8PSBnLnRvdGFsVW5pdHMpIGNvbnRpbnVlOyBjb25zdCBkID0gaGV4RGlzdGFuY2UoZywgbyk7IGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0geyB4OiBvLngsIHk6IG8ueSB9OyB9IH1cbiAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSB7XG4gICAgICAgIGlmICh0YXJnZXQuaGFzKGcuaWQpKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgUyA9IGcudG90YWxVbml0cztcblxuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBvYyBvZiBvdXJDaXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghdGhyZWF0ZW5lZENpdHkob2MpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gZGVmZW5kV2VpZ2h0IC0gZGlzdFdlaWdodCAqIGRpc3RPZihnLCBvYyk7XG4gICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2NvcmU7IGJlc3QgPSB7IHg6IG9jLngsIHk6IG9jLnkgfTsgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGhlbHAgdGFrZSB0aGUgbW9zdCB2YWx1YWJsZSBjaXR5IHdlIGNhbiBjb250cmlidXRlIHRvIChjbG9zZXN0IGJpZyBvbmUpXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBlbmVteUNpdGllcykge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBjaXR5VmFsdWUoYykgLSBkaXN0V2VpZ2h0ICogZGlzdE9mKGcsIGMpO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7IGJlc3RTY29yZSA9IHNjb3JlOyBiZXN0ID0geyB4OiBjLngsIHk6IGMueSB9OyB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1bmRlclRocmVhdCA9IGVuZW15R2VuZXJhbHMuc29tZShlID0+XG4gICAgICAgICAgICBlLnRvdGFsVW5pdHMgPiBTICogc2FmZXR5ICYmIGhleERpc3RhbmNlKGUsIGcpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIGVuZW15TW92ZSk7XG4gICAgICAgIGlmICh1bmRlclRocmVhdCAmJiAoIWJlc3QgfHwgYmVzdFNjb3JlIDwgMCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSByZWZ1Z2UoZyk7XG4gICAgICAgICAgICBpZiAocikgYmVzdCA9IHI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3QpIHRhcmdldC5zZXQoZy5pZCwgYmVzdCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGcgb2Ygb3Vycykge1xuICAgICAgICBjb25zdCB0ID0gdGFyZ2V0LmdldChnLmlkKTtcbiAgICAgICAgaWYgKHQpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnLmlkLCB0YXJnZXRQb3NpdGlvbjogdCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuXG4vLyBEb21pbmlvbiBBSSDigJQgZGlyZWN0bHkgb3B0aW1pemVzIHRoZSBhY3R1YWwgd2luIGNvbmRpdGlvbiAobGFuZCkuIFRpbGUgb3duZXJzaGlwIGdvZXMgdG8gd2hvZXZlclxuLy8gaGFzIHRoZSBoaWdoZXN0IGFybXkgaW5mbHVlbmNlIG9uIGl0LCB3aGVyZSBpbmZsdWVuY2UgPSBzdHJlbmd0aCAvIChkaXN0YW5jZSsxKV5GQUxMT0ZGXG4vLyAoaW52ZXJzZS1zcXVhcmUgaW4gdGhlIGxpdmUgZW5naW5lKS4gRWFjaCBnZW5lcmFsIG1vdmVzIHRvIHRoZSBwb3NpdGlvbiB0aGF0IG1heGltaXplcyB0aGUgbnVtYmVyXG4vLyBvZiB0aWxlcyBvdXIgZmFjdGlvbiB3b3VsZCBET01JTkFURSAob3VyIGluZmx1ZW5jZSA+IGV2ZXJ5IHJpdmFsJ3MpLCBjb3VudGluZyBvbmx5IHRpbGVzIHdpdGhpblxuLy8gaW5mbHVlbmNlIHJhbmdlIOKAlCBzbyBnZW5lcmFscyBuYXR1cmFsbHkgZmFuIG91dCB0byBjb3ZlciB0aGUgbWFwIHdpdGhvdXQgb3ZlcmxhcHBpbmcgKG92ZXJsYXAgd2luc1xuLy8gbm8gZXh0cmEgdGlsZXMpLCB3aGlsZSByZWZ1c2luZyBmaWdodHMgYWdhaW5zdCBzdHJvbmdlciBzdGFja3MgYW5kIGdyYWJiaW5nIGNhcHR1cmFibGUgY2l0aWVzLlxuLy8gY29uZmlnOiBmYWxsb2ZmLCByYWRpdXMsIHRocmVhdFdlaWdodCwgdGhyZWF0TWFyZ2luLCBjYXB0dXJlQm9udXMsIG93bkJpYXMuXG5yZWdpc3RlclN0cmF0ZWd5KFwiZG9taW5pb25cIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZmFsbG9mZiA9IG51bShjZmcuZmFsbG9mZiwgNik7IC8vIG1pcnJvciBBUk1ZX0ZBTExPRkZfRVhQT05FTlQgaW4gdGhlIGVuZ2luZVxuICAgIGNvbnN0IHJhZGl1cyA9IG51bShjZmcucmFkaXVzLCA1KTsgLy8gdGlsZXMgYmV5b25kIHRoaXMgY29udHJpYnV0ZSBuZWdsaWdpYmxlIGluZmx1ZW5jZVxuICAgIGNvbnN0IHRocmVhdFdlaWdodCA9IG51bShjZmcudGhyZWF0V2VpZ2h0LCAzMCk7XG4gICAgY29uc3QgdGhyZWF0TWFyZ2luID0gbnVtKGNmZy50aHJlYXRNYXJnaW4sIDEuMCk7XG4gICAgY29uc3QgY2FwdHVyZUJvbnVzID0gbnVtKGNmZy5jYXB0dXJlQm9udXMsIDgpO1xuICAgIGNvbnN0IG93bkJpYXMgPSBudW0oY2ZnLm93bkJpYXMsIDEuMCk7IC8vIGhvdyBtdWNoIG91ciBpbmZsdWVuY2UgbXVzdCBleGNlZWQgcml2YWxzJyB0byBjb3VudCBhcyBvdXJzXG4gICAgY29uc3QgaGFyZEF2b2lkID0gY2ZnLmhhcmRBdm9pZCA9PT0gdHJ1ZTsgLy8gbmV2ZXIgc3RlcCB3aXRoaW4gYSBzdHJvbmdlciBzdGFjaydzIHJlYWNoICh2cyBzb2Z0IHBlbmFsdHkpXG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgdGlsZXMsIHRlcnJhaW5TcGVlZHMsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuXG4gICAgY29uc3Qga2V5ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBgJHt4fSwke3l9YDtcbiAgICBjb25zdCB0aWxlU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7IGNvbnN0IHMgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdOyBpZiAocyAmJiBzID4gMCkgdGlsZVNldC5hZGQoa2V5KHQueCwgdC55KSk7IH1cbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbnggPSB4ICsgZHgsIG55ID0geSArIGR5O1xuICAgICAgICAgICAgaWYgKHRpbGVTZXQuaGFzKGtleShueCwgbnkpKSAmJiBoZXhEaXN0YW5jZSh7IHgsIHkgfSwgeyB4OiBueCwgeTogbnkgfSkgPT09IDEpIG91dC5wdXNoKHsgeDogbngsIHk6IG55IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBjb25zdCBpbmYgPSAoc3RyZW5ndGg6IG51bWJlciwgZDogbnVtYmVyKSA9PiBzdHJlbmd0aCAvIE1hdGgucG93KGQgKyAxLCBmYWxsb2ZmKTtcblxuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteUdlbmVyYWxzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlPck5ldXRyYWxDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG5cbiAgICAvLyBCYXNlIGluZmx1ZW5jZSBwZXIgdGlsZTogcml2YWxzJyBtYXggKGZpeGVkKSBhbmQgb3VyIGZhY3Rpb24ncyB0b3RhbCBFWENMVURJTkcgdGhlIGdlbmVyYWwgd2VcbiAgICAvLyBhcmUgY3VycmVudGx5IG1vdmluZyAoYWRkZWQgYmFjayBwZXItY2FuZGlkYXRlKS4gUHJlY29tcHV0ZSB0aGUgcml2YWwgbWF4IGFuZCBvdXIgYmFzZSBzdW0uXG4gICAgY29uc3Qgcml2YWxNYXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGNvbnN0IG91ckJhc2UgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgIGxldCByaXZhbHMgPSAwO1xuICAgICAgICBsZXQgb3VyU3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodCwgZyk7XG4gICAgICAgICAgICBpZiAoZCA+IHJhZGl1cykgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCB2ID0gaW5mKGcudG90YWxVbml0cywgZCk7XG4gICAgICAgICAgICBpZiAoZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCkgb3VyU3VtICs9IHY7XG4gICAgICAgICAgICBlbHNlIGlmICh2ID4gcml2YWxzKSByaXZhbHMgPSB2O1xuICAgICAgICB9XG4gICAgICAgIHJpdmFsTWF4LnNldCh0aywgcml2YWxzKTtcbiAgICAgICAgb3VyQmFzZS5zZXQodGssIG91clN1bSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBvdXJzKSB7XG4gICAgICAgIGNvbnN0IFMgPSBnZW4udG90YWxVbml0cztcbiAgICAgICAgY29uc3QgY2l0eUF0ID0gbmV3IE1hcChlbmVteU9yTmV1dHJhbENpdGllcy5tYXAoYyA9PiBba2V5KGMueCwgYy55KSwgY10pKTtcbiAgICAgICAgLy8gVGlsZXMgdGhpcyBnZW5lcmFsIGNhbiBhZmZlY3QgKG5lYXIgaXRzIGN1cnJlbnQgT1IgYSBjYW5kaWRhdGUgcG9zaXRpb24pLlxuICAgICAgICBjb25zdCBhZmZlY3RlZCA9IHRpbGVzLmZpbHRlcih0ID0+IGhleERpc3RhbmNlKHQsIGdlbikgPD0gcmFkaXVzICsgMSk7XG5cbiAgICAgICAgY29uc3QgY292ZXJhZ2VGb3IgPSAoY3g6IG51bWJlciwgY3k6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgICAgICBsZXQgb3duZWQgPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIGFmZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRDdXIgPSBoZXhEaXN0YW5jZSh0LCBnZW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRDYW5kID0gaGV4RGlzdGFuY2UodCwgeyB4OiBjeCwgeTogY3kgfSk7XG4gICAgICAgICAgICAgICAgLy8gb3VyIGZhY3Rpb24gaW5mbHVlbmNlIHdpdGggdGhpcyBnZW5lcmFsIHJlbG9jYXRlZCB0byB0aGUgY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgY29uc3Qgb3VyID0gKG91ckJhc2UuZ2V0KHRrKSA/PyAwKSAtIGluZihTLCBkQ3VyKSArIGluZihTLCBkQ2FuZCk7XG4gICAgICAgICAgICAgICAgaWYgKG91ciA+IChyaXZhbE1heC5nZXQodGspID8/IDApICogb3duQmlhcyAmJiBvdXIgPiAwKSBvd25lZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG93bmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEEgdGlsZSBpcyBcInVuc2FmZVwiIGlmIGEgc3Ryb25nZXIgZW5lbXkgc3RhY2sgY291bGQgZmlnaHQgdXMgdGhlcmUgKHdpdGhpbiBpdHMgY29tYmF0IHJlYWNoXG4gICAgICAgIC8vICsxIHN0ZXApLiBXaXRoIGhhcmRBdm9pZCwgc3VjaCB0aWxlcyBhcmUgbmV2ZXIgY2hvc2VuIOKAlCBmaXhpbmcgZG9taW5pb24ncyBoYWJpdCBvZiB3YWxraW5nXG4gICAgICAgIC8vIHRoaW4gc3RhY2tzIGludG8gc3Ryb25nZXIgZW5lbWllcyBmb3IgYSBiaXQgbW9yZSBjb3ZlcmFnZS4gT3RoZXJ3aXNlIGl0J3Mgb25seSBwZW5hbGl6ZWQuXG4gICAgICAgIGNvbnN0IHVuc2FmZSA9IChjeDogbnVtYmVyLCBjeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeDogY3gsIHk6IGN5IH0sIGUpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIDEpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY29yZU9mID0gKGN4OiBudW1iZXIsIGN5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gY292ZXJhZ2VGb3IoY3gsIGN5KTtcbiAgICAgICAgICAgIGlmICghaGFyZEF2b2lkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHsgeDogY3gsIHk6IGN5IH0sIGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFjaCA9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgPD0gcmVhY2ggKyAxKSBzY29yZSAtPSB0aHJlYXRXZWlnaHQgKiAocmVhY2ggKyAxIC0gZCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGMgPSBjaXR5QXQuZ2V0KGtleShjeCwgY3kpKTtcbiAgICAgICAgICAgIGlmIChjICYmIFMgPiBjLmdhcnJpc29uKSBzY29yZSArPSBjYXB0dXJlQm9udXM7XG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2hlbiB1c2luZyBoYXJkQXZvaWQsIG9ubHkgY29uc2lkZXIgc2FmZSBjYW5kaWRhdGVzIChzdGF5aW5nIHB1dCBpcyBhbHdheXMgYWxsb3dlZCkuXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZWlnaGJvcnNPZihnZW4ueCwgZ2VuLnkpLmZpbHRlcihuID0+ICFoYXJkQXZvaWQgfHwgIXVuc2FmZShuLngsIG4ueSkpO1xuICAgICAgICBsZXQgYmVzdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IHNjb3JlT2YoZ2VuLngsIGdlbi55KTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjID0gc2NvcmVPZihuLngsIG4ueSk7XG4gICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3QgPSBuOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3QpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5mdW5jdGlvbiBjb21iYXREaXN0KGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2cxMChjb3VudCArIDEpKSArIDAuNTtcbn1cblxuLy8gRG9taW5pb24gKyBGUk9OVElFUiB3ZWlnaHRpbmcuIFNhbWUgYXMgXCJkb21pbmlvblwiIChlYWNoIGdlbmVyYWwgbW92ZXMgdG8gbWF4aW1pemUgdGhlIHRpbGVzIG91clxuLy8gZmFjdGlvbiBkb21pbmF0ZXMgdW5kZXIgdGhlIGluZmx1ZW5jZSBtb2RlbCwgcmVmdXNpbmcgZmlnaHRzIHZzIGNsZWFybHktc3Ryb25nZXIgc3RhY2tzIGFuZFxuLy8gZ3JhYmJpbmcgY2l0aWVzKSDigJQgRVhDRVBUIGEgaGVsZCB0aWxlIGlzIHdvcnRoIG11Y2ggbW9yZSB3aGVuIGl0J3MgbmVhciB0aGUgZW5lbXkuIEEgdW5pdCBzaXR0aW5nXG4vLyBpbiB0aGUgc2FmZSBpbnRlcmlvci9iYWNrIGxpbmUgaG9sZHMgdGlsZXMgdGhhdCBhcmUgb3VycyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgaXQncyB0aGVyZSwgc28gaXRcbi8vIGFjaGlldmVzIG5vdGhpbmc7IHRoZSB2YWx1ZSBsaXZlcyBhdCB0aGUgY29udGVzdGVkIGZyb250LCBjbG9zZSB0byB0aGUgZW5lbXkuIFNvIGEgaGVsZCB0aWxlIG5lYXJcbi8vIGFuIGVuZW15IGdlbmVyYWwgY291bnRzIGFzIDEsIHdoaWxlIGEgZGVlcC1pbnRlcmlvciB0aWxlIChubyBlbmVteSB3aXRoaW4gZnJvbnRpZXJSYW5nZSkgY291bnRzIGFzXG4vLyBvbmx5IGBpbnRlcmlvclZhbHVlYC4gR2VuZXJhbHMgdGhlcmVmb3JlIHB1c2ggZm9yd2FyZCB0byBob2xkIHRoZSBib3JkZXIgaW5zdGVhZCBvZiBsb2l0ZXJpbmcgaW5cbi8vIHRoZSByZWFyLiBoYXJkQXZvaWQgc3RpbGwga2VlcHMgdGhlbSBqdXN0IG91dHNpZGUgYSBzdHJvbmdlciBzdGFjaydzIHJlYWNoLlxuLy9cbi8vIGNvbmZpZyAocGx1cyBldmVyeXRoaW5nIGRvbWluaW9uIHJlYWRzKTogZnJvbnRpZXJSYW5nZSwgaW50ZXJpb3JWYWx1ZS5cbnJlZ2lzdGVyU3RyYXRlZ3koXCJkb21pbmlvbkZyb250XCIsIChzbmFwc2hvdCwgY3R4KTogQUlXb3JrZXJPcmRlcltdID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IGZhbGxvZmYgPSBudW0oY2ZnLmZhbGxvZmYsIDYpO1xuICAgIGNvbnN0IHJhZGl1cyA9IG51bShjZmcucmFkaXVzLCA1KTtcbiAgICBjb25zdCB0aHJlYXRXZWlnaHQgPSBudW0oY2ZnLnRocmVhdFdlaWdodCwgMzApO1xuICAgIGNvbnN0IHRocmVhdE1hcmdpbiA9IG51bShjZmcudGhyZWF0TWFyZ2luLCAxLjApO1xuICAgIGNvbnN0IGNhcHR1cmVCb251cyA9IG51bShjZmcuY2FwdHVyZUJvbnVzLCA4KTtcbiAgICBjb25zdCBvd25CaWFzID0gbnVtKGNmZy5vd25CaWFzLCAxLjApO1xuICAgIGNvbnN0IGhhcmRBdm9pZCA9IGNmZy5oYXJkQXZvaWQgPT09IHRydWU7XG4gICAgLy8gQSB0aWxlIGNvdW50cyBmdWxseSB3aGVuIGFuIGVuZW15IGdlbmVyYWwgaXMgd2l0aGluIGZyb250aWVyUmFuZ2Ugb2YgaXQ7IG90aGVyd2lzZSBpdCdzIHdvcnRoXG4gICAgLy8gb25seSBpbnRlcmlvclZhbHVlLiBMb3dlciBpbnRlcmlvclZhbHVlID0gbW9yZSBhZ2dyZXNzaXZlbHkgZm9yd2FyZC5cbiAgICBjb25zdCBmcm9udGllclJhbmdlID0gbnVtKGNmZy5mcm9udGllclJhbmdlLCA3KTtcbiAgICBjb25zdCBpbnRlcmlvclZhbHVlID0gbnVtKGNmZy5pbnRlcmlvclZhbHVlLCAwLjE1KTtcblxuICAgIGNvbnN0IHsgZmFjdGlvbklkLCB0aWxlcywgdGVycmFpblNwZWVkcywgZ2VuZXJhbHMsIGNpdGllcyB9ID0gc25hcHNob3Q7XG5cbiAgICBjb25zdCBrZXkgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGAke3h9LCR7eX1gO1xuICAgIGNvbnN0IHRpbGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHsgY29uc3QgcyA9IHRlcnJhaW5TcGVlZHNbdC50ZXJyYWluVHlwZV07IGlmIChzICYmIHMgPiAwKSB0aWxlU2V0LmFkZChrZXkodC54LCB0LnkpKTsgfVxuICAgIGNvbnN0IG5laWdoYm9yc09mID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGR4ID0gLTE7IGR4IDw9IDE7IGR4KyspIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgIGlmIChkeCA9PT0gMCAmJiBkeSA9PT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBueCA9IHggKyBkeCwgbnkgPSB5ICsgZHk7XG4gICAgICAgICAgICBpZiAodGlsZVNldC5oYXMoa2V5KG54LCBueSkpICYmIGhleERpc3RhbmNlKHsgeCwgeSB9LCB7IHg6IG54LCB5OiBueSB9KSA9PT0gMSkgb3V0LnB1c2goeyB4OiBueCwgeTogbnkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIGNvbnN0IGluZiA9IChzdHJlbmd0aDogbnVtYmVyLCBkOiBudW1iZXIpID0+IHN0cmVuZ3RoIC8gTWF0aC5wb3coZCArIDEsIGZhbGxvZmYpO1xuXG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15R2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVteU9yTmV1dHJhbENpdGllcyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IHJpdmFsTWF4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBjb25zdCBvdXJCYXNlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAvLyBGcm9udGllciBmYWN0b3IgcGVyIHRpbGU6IDEgaWYgYW55IGVuZW15IGdlbmVyYWwgaXMgd2l0aGluIGZyb250aWVyUmFuZ2UsIGVsc2UgaW50ZXJpb3JWYWx1ZS5cbiAgICBjb25zdCBmcm9udGllciA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7XG4gICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgbGV0IHJpdmFscyA9IDA7XG4gICAgICAgIGxldCBvdXJTdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGcgb2YgZ2VuZXJhbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh0LCBnKTtcbiAgICAgICAgICAgIGlmIChkID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBpbmYoZy50b3RhbFVuaXRzLCBkKTtcbiAgICAgICAgICAgIGlmIChnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSBvdXJTdW0gKz0gdjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHYgPiByaXZhbHMpIHJpdmFscyA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgcml2YWxNYXguc2V0KHRrLCByaXZhbHMpO1xuICAgICAgICBvdXJCYXNlLnNldCh0aywgb3VyU3VtKTtcbiAgICAgICAgbGV0IG5lYXJFbmVteSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykgeyBpZiAoaGV4RGlzdGFuY2UodCwgZSkgPD0gZnJvbnRpZXJSYW5nZSkgeyBuZWFyRW5lbXkgPSB0cnVlOyBicmVhazsgfSB9XG4gICAgICAgIGZyb250aWVyLnNldCh0aywgbmVhckVuZW15ID8gMSA6IGludGVyaW9yVmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBnZW4gb2Ygb3Vycykge1xuICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgIGNvbnN0IGNpdHlBdCA9IG5ldyBNYXAoZW5lbXlPck5ldXRyYWxDaXRpZXMubWFwKGMgPT4gW2tleShjLngsIGMueSksIGNdKSk7XG4gICAgICAgIGNvbnN0IGFmZmVjdGVkID0gdGlsZXMuZmlsdGVyKHQgPT4gaGV4RGlzdGFuY2UodCwgZ2VuKSA8PSByYWRpdXMgKyAxKTtcblxuICAgICAgICAvLyBQb3B1bGF0aW9uLW9mLWZyb250aWVyLXdlaWdodGVkIGNvdmVyYWdlOiBlYWNoIGRvbWluYXRlZCB0aWxlIGNvbnRyaWJ1dGVzIGl0cyBmcm9udGllclxuICAgICAgICAvLyBmYWN0b3IgaW5zdGVhZCBvZiBhIGZsYXQgMSwgc28gZm9yd2FyZCAoY29udGVzdGVkKSB0aWxlcyBkb21pbmF0ZSB0aGUgc2NvcmUuXG4gICAgICAgIGNvbnN0IGNvdmVyYWdlRm9yID0gKGN4OiBudW1iZXIsIGN5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBhZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkQ3VyID0gaGV4RGlzdGFuY2UodCwgZ2VuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkQ2FuZCA9IGhleERpc3RhbmNlKHQsIHsgeDogY3gsIHk6IGN5IH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG91ciA9IChvdXJCYXNlLmdldCh0aykgPz8gMCkgLSBpbmYoUywgZEN1cikgKyBpbmYoUywgZENhbmQpO1xuICAgICAgICAgICAgICAgIGlmIChvdXIgPiAocml2YWxNYXguZ2V0KHRrKSA/PyAwKSAqIG93bkJpYXMgJiYgb3VyID4gMCkgdmFsdWUgKz0gZnJvbnRpZXIuZ2V0KHRrKSA/PyBpbnRlcmlvclZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVuc2FmZSA9IChjeDogbnVtYmVyLCBjeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeDogY3gsIHk6IGN5IH0sIGUpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIDEpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY29yZU9mID0gKGN4OiBudW1iZXIsIGN5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IHNjb3JlID0gY292ZXJhZ2VGb3IoY3gsIGN5KTtcbiAgICAgICAgICAgIGlmICghaGFyZEF2b2lkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGhleERpc3RhbmNlKHsgeDogY3gsIHk6IGN5IH0sIGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFjaCA9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgPD0gcmVhY2ggKyAxKSBzY29yZSAtPSB0aHJlYXRXZWlnaHQgKiAocmVhY2ggKyAxIC0gZCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGMgPSBjaXR5QXQuZ2V0KGtleShjeCwgY3kpKTtcbiAgICAgICAgICAgIGlmIChjICYmIFMgPiBjLmdhcnJpc29uKSBzY29yZSArPSBjYXB0dXJlQm9udXM7XG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IG5laWdoYm9yc09mKGdlbi54LCBnZW4ueSkuZmlsdGVyKG4gPT4gIWhhcmRBdm9pZCB8fCAhdW5zYWZlKG4ueCwgbi55KSk7XG4gICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gc2NvcmVPZihnZW4ueCwgZ2VuLnkpO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc2MgPSBzY29yZU9mKG4ueCwgbi55KTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyBnZXRTdHJhdGVneSwgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbi8vIERvbWluaW9uICsgc2VsZWN0aXZlIHNwbGl0dGluZy4gTW92ZW1lbnQgaXMgZGVsZWdhdGVkIHZlcmJhdGltIHRvIHRoZSBjaGFtcGlvbiBcImRvbWluaW9uXCIgc3RyYXRlZ3lcbi8vIChzbyB0aGlzIGNhbiBvbmx5IGRpZmZlciBieSBhZGRpbmcgc3BsaXRzLCBuZXZlciBieSBtb3Zpbmcgd29yc2UpLiBPbiB0b3Agb2YgdGhhdCwgYW5cbi8vIE9WRVItQ09OQ0VOVFJBVEVEIGdlbmVyYWwgc3BsaXRzOiBvbmUgaG9sZGluZyB3ZWxsIG1vcmUgdGhhbiBhbiBldmVuIHNoYXJlIG9mIHRoZSBmYWN0aW9uJ3MgYXJteSxcbi8vIHdob3NlIGhhbHZlcyB3b3VsZCBlYWNoIHN0aWxsIG91dC1zdGFjayBuZWFyYnkgZW5lbWllcywgYW5kIHdoaWNoIGhhcyB1bmNvdmVyZWQgZXhwYW5zaW9uIHRhcmdldHNcbi8vIChlbmVteS9uZXV0cmFsIGNpdGllcykgbmVhcmJ5LiBEb21pbmlvbidzIHZhbHVlIHJld2FyZHMgZmFubmluZyBvdXQgKG92ZXJsYXBwaW5nIGluZmx1ZW5jZSB3aW5zIG5vXG4vLyBleHRyYSB0aWxlcyksIHNvIHJlZGlzdHJpYnV0aW5nIGEgYmxvYXRlZCBzdGFjayBpbnRvIHR3byBsZXRzIHRoZSBmYWN0aW9uIGRvbWluYXRlIHR3byBjbHVzdGVycy5cbi8vIEFnZ3Jlc3NpdmUgc3BsaXR0aW5nIGZyYWdtZW50cyBpbnRvIHdlYWsgc3RhY2tzIHRoYXQgZ2V0IHBpY2tlZCBvZmYsIHNvIHRoZSBiYXIgaXMgZGVsaWJlcmF0ZWx5XG4vLyBoaWdoIGFuZCBjYXBwZWQgcGVyIHR1cm4uXG4vL1xuLy8gY29uZmlnIChwbHVzIGV2ZXJ5dGhpbmcgZG9taW5pb24gcmVhZHMpOiBzcGxpdE1pbiwgY29uY2VudHJhdGlvbiwgc2FmZU1hcmdpbiwgZXhwYW5kUmFuZ2UsXG4vLyBtaW5UYXJnZXRzLCBtYXhTcGxpdHNQZXJUdXJuLlxucmVnaXN0ZXJTdHJhdGVneShcImRvbWluaW9uU3BsaXRcIiwgYXN5bmMgKHNuYXBzaG90LCBjdHgpOiBQcm9taXNlPEFJV29ya2VyT3JkZXJbXT4gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3Qgc3BsaXRNaW4gPSBudW0oY2ZnLnNwbGl0TWluLCA0MCk7ICAgICAgICAgICAgLy8gYWJzb2x1dGUgZmxvb3Igb24gc3RhY2sgc2l6ZSB0byBzcGxpdFxuICAgIGNvbnN0IGNvbmNlbnRyYXRpb24gPSBudW0oY2ZnLmNvbmNlbnRyYXRpb24sIDEuNSk7IC8vIG11c3QgaG9sZCA+PSB0aGlzICogYW4gZXZlbiBzaGFyZVxuICAgIGNvbnN0IHNhZmVNYXJnaW4gPSBudW0oY2ZnLnNhZmVNYXJnaW4sIDEuMSk7ICAgICAgIC8vIGVhY2ggaGFsZiBtdXN0IGJlYXQgbmVhcmJ5IGVuZW1pZXMgYnkgdGhpc1xuICAgIGNvbnN0IGV4cGFuZFJhbmdlID0gbnVtKGNmZy5leHBhbmRSYW5nZSwgOCk7ICAgICAgIC8vIHJhbmdlIHRvIGxvb2sgZm9yIHRhcmdldHMgLyB0aHJlYXRzXG4gICAgY29uc3QgbWluVGFyZ2V0cyA9IG51bShjZmcubWluVGFyZ2V0cywgMSk7ICAgICAgICAgLy8gdW5jb3ZlcmVkIGNpdGllcyBuZWFyYnkgbmVlZGVkXG4gICAgY29uc3QgbWF4U3BsaXRzUGVyVHVybiA9IG51bShjZmcubWF4U3BsaXRzUGVyVHVybiwgMik7XG4gICAgLy8gV2hpY2ggbW92ZW1lbnQgc3RyYXRlZ3kgdG8gbGF5ZXIgc3BsaXR0aW5nIG9uIHRvcCBvZi4gRGVmYXVsdHMgdG8gdGhlIHBsYWluIGNoYW1waW9uXG4gICAgLy8gXCJkb21pbmlvblwiOyBzZXQgdG8gXCJkb21pbmlvbkZyb250XCIgdG8gYmlhcyBtb3ZlbWVudCB0b3dhcmQgdGhlIGNvbnRlc3RlZCBmcm9udCBsaW5lLlxuICAgIGNvbnN0IG1vdmVTdHJhdGVneSA9IHR5cGVvZiBjZmcubW92ZVN0cmF0ZWd5ID09PSBcInN0cmluZ1wiICYmIGNmZy5tb3ZlU3RyYXRlZ3kgfHwgXCJkb21pbmlvblwiO1xuXG4gICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdldFN0cmF0ZWd5KG1vdmVTdHJhdGVneSkoc25hcHNob3QsIGN0eCkpO1xuICAgIGNvbnN0IG9yZGVyQnlHZW5lcmFsID0gbmV3IE1hcChvcmRlcnMubWFwKG8gPT4gW28uZ2VuZXJhbElkLCBvXSkpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVtaWVzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgdGFyZ2V0cyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IGZhY3Rpb25Bcm15ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnRvdGFsVW5pdHMsIDApO1xuICAgIGxldCBnZW5lcmFsQ291bnQgPSBvdXJzLmxlbmd0aDtcbiAgICBsZXQgc3BsaXRzVGhpc1R1cm4gPSAwO1xuXG4gICAgLy8gU3BsaXQgdGhlIGJpZ2dlc3Qgc3RhY2tzIGZpcnN0LlxuICAgIGZvciAoY29uc3QgZ2VuIG9mIFsuLi5vdXJzXS5zb3J0KChhLCBiKSA9PiBiLnRvdGFsVW5pdHMgLSBhLnRvdGFsVW5pdHMpKSB7XG4gICAgICAgIGlmIChzcGxpdHNUaGlzVHVybiA+PSBtYXhTcGxpdHNQZXJUdXJuKSBicmVhaztcbiAgICAgICAgaWYgKGdlbi50b3RhbFVuaXRzIDwgc3BsaXRNaW4pIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGV2ZW5TaGFyZSA9IGZhY3Rpb25Bcm15IC8gTWF0aC5tYXgoMSwgZ2VuZXJhbENvdW50KTtcbiAgICAgICAgaWYgKGdlbi50b3RhbFVuaXRzIDwgZXZlblNoYXJlICogY29uY2VudHJhdGlvbikgY29udGludWU7XG5cbiAgICAgICAgbGV0IG1heEVuZW15TmVhciA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVtaWVzKSB7XG4gICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoZSwgZ2VuKSA8PSBleHBhbmRSYW5nZSAmJiBlLnRvdGFsVW5pdHMgPiBtYXhFbmVteU5lYXIpIG1heEVuZW15TmVhciA9IGUudG90YWxVbml0cztcbiAgICAgICAgfVxuICAgICAgICAvLyBTcGxpdHRpbmcgY29zdHMgaGFsZiB0aGUgYXJteSwgc28gZWFjaCByZXN1bHRpbmcgZ2VuZXJhbCBrZWVwcyBvbmx5IH5hIHF1YXJ0ZXIgb2YgdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHN0YWNrLiBSZXF1aXJlIHRoYXQgcXVhcnRlciB0byBzdGlsbCBvdXQtc3RhY2sgbmVhcmJ5IGVuZW1pZXMuXG4gICAgICAgIGlmIChnZW4udG90YWxVbml0cyAvIDQgPCBtYXhFbmVteU5lYXIgKiBzYWZlTWFyZ2luKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBuZWFyYnlUYXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoYyA9PiBoZXhEaXN0YW5jZShjLCBnZW4pIDw9IGV4cGFuZFJhbmdlKS5sZW5ndGg7XG4gICAgICAgIGlmIChuZWFyYnlUYXJnZXRzIDwgbWluVGFyZ2V0cykgY29udGludWU7XG5cbiAgICAgICAgY29uc3Qgb3JkZXIgPSBvcmRlckJ5R2VuZXJhbC5nZXQoZ2VuLmlkKTtcbiAgICAgICAgaWYgKG9yZGVyKSB7XG4gICAgICAgICAgICBvcmRlci5zcGxpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmRlcnMucHVzaCh7IGdlbmVyYWxJZDogZ2VuLmlkLCBzcGxpdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBnZW5lcmFsQ291bnQrKztcbiAgICAgICAgc3BsaXRzVGhpc1R1cm4rKztcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXJzO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IGdldFN0cmF0ZWd5LCByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuLy8gRG9taW5pb24gKyBDSVRZLUFXQVJFIHNwbGl0dGluZyAoZ2VuLXNwbGl0LTIpLiBNb3ZlbWVudCBpcyBkZWxlZ2F0ZWQgdmVyYmF0aW0gdG8gdGhlIGNoYW1wXG4vLyBcImRvbWluaW9uXCIsIHNvIHRoaXMgY2FuIG9ubHkgZGlmZmVyIGJ5IGFkZGluZyBzcGxpdHMuIFRoZSBwbGFjZW1lbnQgdGhhdCBkZWNpZGVzIGdhbWVzIHdlaWdodHNcbi8vIGVhY2ggaGVsZCBjaXR5IGF0IH41MHggYSB1bml0IG9mIGFybXksIHNvIHRoZSBoaWdoZXN0LXZhbHVlIHRoaW5nIGEgZmFjdGlvbiBjYW4gZG8gaXMgY292ZXIgYW5kXG4vLyBjYXB0dXJlIE1PUkUgY2l0aWVzLiBBIHNpbmdsZSBzdGFjayBjYW4gb25seSBzaXQgaW4gb25lIHBsYWNlOyBzcGxpdHRpbmcgbGV0cyB0aGUgdHdvIGhhbHZlcyBlYWNoXG4vLyBnbyBjbGFpbSBhIGRpZmZlcmVudCBjaXR5IGNsdXN0ZXIuXG4vL1xuLy8gVGhlIHByZXZpb3VzIGhldXJpc3RpYyAoZG9taW5pb25TcGxpdCkgc3BsaXQgd2hlbmV2ZXIgYW4gb3Zlci1jb25jZW50cmF0ZWQgc3RhY2sgaGFkID49MSBuZWFyYnlcbi8vIHRhcmdldC4gVGhhdCBvdmVyLWZpcmVzIHdoZW4gdGhlIHRhcmdldHMgYXJlIGFsbCBvbiBvbmUgc2lkZSAob25lIHN0YWNrIGFscmVhZHkgcmVhY2hlcyB0aGVtKSBhbmRcbi8vIHVuZGVyLXZhbHVlcyB0aGUgcmVhbCB3aW46IHR3byBTRVBBUkFURUQgY2FwdHVyYWJsZSBjaXRpZXMgYSBzaW5nbGUgc3RhY2sgY2FuJ3QgYm90aCBob2xkLiBTb1xuLy8gaGVyZSBhIGdlbmVyYWwgb25seSBzcGxpdHMgd2hlbjpcbi8vICAgLSBpdCBpcyBvdmVyLWNvbmNlbnRyYXRlZCAoaG9sZHMgPj4gYW4gZXZlbiBzaGFyZSBvZiB0aGUgZmFjdGlvbiBhcm15KSwgQU5EXG4vLyAgIC0gYWZ0ZXIgcGF5aW5nIHRoZSBzcGxpdCBjb3N0IChlYWNoIGhhbGYga2VlcHMgfmEgcXVhcnRlciBvZiB0aGUgb3JpZ2luYWwpLCBlYWNoIGhhbGYgY2FuIHN0aWxsXG4vLyAgICAgc2FmZWx5IG91dC1zdGFjayBuZWFyYnkgZW5lbXkgc3RhY2tzLCBBTkRcbi8vICAgLSB0aGVyZSBhcmUgPj0gMiBjYXB0dXJhYmxlIGNpdGllcyB3aXRoaW4gcmFuZ2Ugd2hvc2UgaGFsdmVzIGl0IG91dC1nYXJyaXNvbnMsIHRoYXQgYXJlIGZhclxuLy8gICAgIGVub3VnaCBhcGFydCAoPj0gbWluU2VwYXJhdGlvbikgdGhhdCBvbmUgc3RhY2sgY2Fubm90IGNvdmVyIGJvdGgg4oCUIHNvIHRoZSBzcGxpdCBnZW51aW5lbHlcbi8vICAgICBidXlzIGEgc2Vjb25kIGNsdXN0ZXIgcmF0aGVyIHRoYW4gZnJhZ21lbnRpbmcgZm9yIG5vdGhpbmcuXG4vL1xuLy8gY29uZmlnIChwbHVzIGV2ZXJ5dGhpbmcgZG9taW5pb24gcmVhZHMpOiBzcGxpdE1pbiwgY29uY2VudHJhdGlvbiwgc2FmZU1hcmdpbiwgZXhwYW5kUmFuZ2UsXG4vLyBtaW5TZXBhcmF0aW9uLCBtYXhTcGxpdHNQZXJUdXJuLlxucmVnaXN0ZXJTdHJhdGVneShcImRvbWluaW9uU3BsaXQyXCIsIGFzeW5jIChzbmFwc2hvdCwgY3R4KTogUHJvbWlzZTxBSVdvcmtlck9yZGVyW10+ID0+IHtcbiAgICBjb25zdCBjZmcgPSBjdHguY29uZmlnO1xuICAgIGNvbnN0IHNwbGl0TWluID0gbnVtKGNmZy5zcGxpdE1pbiwgNDApOyAgICAgICAgICAgICAvLyBhYnNvbHV0ZSBmbG9vciBvbiBzdGFjayBzaXplIHRvIHNwbGl0XG4gICAgY29uc3QgY29uY2VudHJhdGlvbiA9IG51bShjZmcuY29uY2VudHJhdGlvbiwgMS40KTsgIC8vIG11c3QgaG9sZCA+PSB0aGlzICogYW4gZXZlbiBzaGFyZVxuICAgIGNvbnN0IHNhZmVNYXJnaW4gPSBudW0oY2ZnLnNhZmVNYXJnaW4sIDEuMSk7ICAgICAgICAvLyBlYWNoIGhhbGYgbXVzdCBiZWF0IHRocmVhdHMvZ2Fycmlzb25zIGJ5IHRoaXNcbiAgICBjb25zdCBleHBhbmRSYW5nZSA9IG51bShjZmcuZXhwYW5kUmFuZ2UsIDgpOyAgICAgICAgLy8gcmFuZ2UgdG8gbG9vayBmb3IgdGFyZ2V0cyAvIHRocmVhdHNcbiAgICBjb25zdCBtaW5TZXBhcmF0aW9uID0gbnVtKGNmZy5taW5TZXBhcmF0aW9uLCA1KTsgICAgLy8gdHdvIHRhcmdldHMgbXVzdCBiZSBhdCBsZWFzdCB0aGlzIGZhciBhcGFydFxuICAgIGNvbnN0IG1heFNwbGl0c1BlclR1cm4gPSBudW0oY2ZnLm1heFNwbGl0c1BlclR1cm4sIDIpO1xuXG4gICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdldFN0cmF0ZWd5KFwiZG9taW5pb25cIikoc25hcHNob3QsIGN0eCkpO1xuICAgIGNvbnN0IG9yZGVyQnlHZW5lcmFsID0gbmV3IE1hcChvcmRlcnMubWFwKG8gPT4gW28uZ2VuZXJhbElkLCBvXSkpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IG91cnMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKTtcbiAgICBjb25zdCBlbmVtaWVzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgdGFyZ2V0cyA9IGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IGZhY3Rpb25Bcm15ID0gb3Vycy5yZWR1Y2UoKHMsIGcpID0+IHMgKyBnLnRvdGFsVW5pdHMsIDApO1xuICAgIGxldCBnZW5lcmFsQ291bnQgPSBvdXJzLmxlbmd0aDtcbiAgICBsZXQgc3BsaXRzVGhpc1R1cm4gPSAwO1xuXG4gICAgLy8gQmlnZ2VzdCBzdGFja3MgZmlyc3Qg4oCUIHRob3NlIGFyZSB0aGUgb25lcyB3b3J0aCByZWRpc3RyaWJ1dGluZy5cbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBbLi4ub3Vyc10uc29ydCgoYSwgYikgPT4gYi50b3RhbFVuaXRzIC0gYS50b3RhbFVuaXRzKSkge1xuICAgICAgICBpZiAoc3BsaXRzVGhpc1R1cm4gPj0gbWF4U3BsaXRzUGVyVHVybikgYnJlYWs7XG4gICAgICAgIGlmIChnZW4udG90YWxVbml0cyA8IHNwbGl0TWluKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBldmVuU2hhcmUgPSBmYWN0aW9uQXJteSAvIE1hdGgubWF4KDEsIGdlbmVyYWxDb3VudCk7XG4gICAgICAgIGlmIChnZW4udG90YWxVbml0cyA8IGV2ZW5TaGFyZSAqIGNvbmNlbnRyYXRpb24pIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIEVhY2ggcmVzdWx0aW5nIGdlbmVyYWwga2VlcHMgfmEgcXVhcnRlciBvZiB0aGUgb3JpZ2luYWwgc3RhY2sgKHNwbGl0IGNvc3RzIGhhbGYgdGhlIGFybXkpLlxuICAgICAgICBjb25zdCBoYWxmU3RyZW5ndGggPSBnZW4udG90YWxVbml0cyAvIDQ7XG5cbiAgICAgICAgbGV0IG1heEVuZW15TmVhciA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVtaWVzKSB7XG4gICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoZSwgZ2VuKSA8PSBleHBhbmRSYW5nZSAmJiBlLnRvdGFsVW5pdHMgPiBtYXhFbmVteU5lYXIpIG1heEVuZW15TmVhciA9IGUudG90YWxVbml0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFsZlN0cmVuZ3RoIDwgbWF4RW5lbXlOZWFyICogc2FmZU1hcmdpbikgY29udGludWU7XG5cbiAgICAgICAgLy8gQ2l0aWVzIGVhY2ggaGFsZiBjb3VsZCBhY3R1YWxseSB0YWtlIChvdXQtZ2Fycmlzb24gYWZ0ZXIgdGhlIHNwbGl0IGNvc3QpLCB3aXRoaW4gcmFuZ2UuXG4gICAgICAgIGNvbnN0IGNhcHR1cmFibGUgPSB0YXJnZXRzLmZpbHRlcihjID0+XG4gICAgICAgICAgICBoZXhEaXN0YW5jZShjLCBnZW4pIDw9IGV4cGFuZFJhbmdlICYmIGhhbGZTdHJlbmd0aCA+IGMuZ2Fycmlzb24gKiBzYWZlTWFyZ2luXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjYXB0dXJhYmxlLmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFJlcXVpcmUgdHdvIG9mIHRoZW0gdG8gYmUgZmFyIGVub3VnaCBhcGFydCB0aGF0IE9ORSBzdGFjayBjYW4ndCBjb3ZlciBib3RoIOKAlCB0aGF0J3MgdGhlXG4gICAgICAgIC8vIGNhc2Ugd2hlcmUgc3BsaXR0aW5nIHdpbnMgYSBzZWNvbmQgY2x1c3RlciBpbnN0ZWFkIG9mIGp1c3QgdGhpbm5pbmcgYSBzdGFjay5cbiAgICAgICAgbGV0IHNlcGFyYXRlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcHR1cmFibGUubGVuZ3RoICYmICFzZXBhcmF0ZWQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgY2FwdHVyYWJsZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZShjYXB0dXJhYmxlW2ldLCBjYXB0dXJhYmxlW2pdKSA+PSBtaW5TZXBhcmF0aW9uKSB7IHNlcGFyYXRlZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXBhcmF0ZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IG9yZGVyID0gb3JkZXJCeUdlbmVyYWwuZ2V0KGdlbi5pZCk7XG4gICAgICAgIGlmIChvcmRlcikgb3JkZXIuc3BsaXQgPSB0cnVlO1xuICAgICAgICBlbHNlIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHNwbGl0OiB0cnVlIH0pO1xuICAgICAgICBnZW5lcmFsQ291bnQrKztcbiAgICAgICAgc3BsaXRzVGhpc1R1cm4rKztcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXJzO1xufSk7XG5cbmZ1bmN0aW9uIG51bSh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IGZhbGxiYWNrO1xufVxuIiwiaW1wb3J0IHsgaGV4RGlzdGFuY2UgfSBmcm9tIFwiLi4vYWlQbGFubmVyXCI7XG5pbXBvcnQgeyBBSVdvcmtlck9yZGVyIH0gZnJvbSBcIi4uL2FpVHlwZXNcIjtcbmltcG9ydCB7IHdpdGhHcm93dGggfSBmcm9tIFwiLi4vZ3Jvd3RoUG9saWN5XCI7XG5pbXBvcnQgeyByZWdpc3RlclN0cmF0ZWd5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZnVuY3Rpb24gY29tYmF0RGlzdChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nMTAoY291bnQgKyAxKSkgKyAwLjU7XG59XG5cbi8vIEV2YWwtZnVuY3Rpb24gZ3JlZWR5LiBMaWtlIGRvbWluaW9uIGl0IHNjb3JlcyBjYW5kaWRhdGUgcG9zaXRpb25zIGJ5IHRoZSB0aWxlcyBvdXIgZmFjdGlvbiB3b3VsZFxuLy8gRE9NSU5BVEUgdW5kZXIgdGhlIGVuZ2luZSdzIGluZmx1ZW5jZSBtb2RlbCwgYnV0IGl0IG9wdGltaXplcyBFQ09OT01JQyB2YWx1ZSByYXRoZXIgdGhhbiByYXcgbGFuZDpcbi8vIGEgZG9taW5hdGVkIHRpbGUgdGhhdCBob2xkcyBhIGNpdHkgY291bnRzIGZvciBpdHMgcG9wdWxhdGlvbiAodGhlIHRoaW5nIHRoYXQgYWN0dWFsbHkgZHJpdmVzIGZvb2Rcbi8vIGFuZCBhcm15IGNhcCksIGFuZCBjYXB0dXJpbmcgYSBjaXR5IGlzIHdvcnRoIGl0cyBwb3B1bGF0aW9uLiBQbHVzIHRoZSBwcm92ZW4gc2FmZXR5IHRyYWl0OiBuZXZlclxuLy8gc3RlcCB3aXRoaW4gYSBjbGVhcmx5LXN0cm9uZ2VyIHN0YWNrJ3MgcmVhY2guIFRoZSBvYmplY3RpdmUgaXMgXCJncm93IHRoZSBlY29ub215IEkgY29udHJvbFwiLFxuLy8gd2hpY2ggaXMgd2hhdCBhY3R1YWxseSB3aW5zIGdhbWVzICh0ZXJyaXRvcnkgLT4gZm9vZCAtPiBhcm15IC0+IHdpbikuXG4vLyBjb25maWc6IGZhbGxvZmYsIHJhZGl1cywgdGlsZVZhbHVlLCBjaXR5UG9wV2VpZ2h0LCBjYXB0dXJlUG9wV2VpZ2h0LCB0aHJlYXRNYXJnaW4uXG5yZWdpc3RlclN0cmF0ZWd5KFwiZXZhbEdyZWVkeVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBmYWxsb2ZmID0gbnVtKGNmZy5mYWxsb2ZmLCA2KTtcbiAgICBjb25zdCByYWRpdXMgPSBudW0oY2ZnLnJhZGl1cywgNik7XG4gICAgY29uc3QgdGlsZVZhbHVlID0gbnVtKGNmZy50aWxlVmFsdWUsIDEpO1xuICAgIGNvbnN0IGNpdHlQb3BXZWlnaHQgPSBudW0oY2ZnLmNpdHlQb3BXZWlnaHQsIDAuMDIpO1xuICAgIGNvbnN0IGNhcHR1cmVQb3BXZWlnaHQgPSBudW0oY2ZnLmNhcHR1cmVQb3BXZWlnaHQsIDAuMDUpO1xuICAgIGNvbnN0IHRocmVhdE1hcmdpbiA9IG51bShjZmcudGhyZWF0TWFyZ2luLCAxLjMpO1xuICAgIC8vIEpvaW50IHBsYW5uaW5nOiBudW1iZXIgb2YgY29vcmRpbmF0ZS1kZXNjZW50IHBhc3Nlcy4gMSA9IGluZGVwZW5kZW50IGdyZWVkeSAoZWFjaCBnZW5lcmFsIG9ubHlcbiAgICAvLyBzZWVzIGFsbGllcycgQ1VSUkVOVCBpbmZsdWVuY2UpLiA+PTIgPSByZS1wbGFuIGFnYWluc3QgYWxsaWVzJyBJTlRFTkRFRCBuZXh0IHBvc2l0aW9ucywgc29cbiAgICAvLyBnZW5lcmFscyBkb24ndCBwaWxlIGludG8gdGhlIHNhbWUgZnJvbnRpZXIuIFBhc3MgMSByZXByb2R1Y2VzIHRoZSBvcmlnaW5hbCBiZWhhdmlvciBleGFjdGx5LlxuICAgIGNvbnN0IGpvaW50UGFzc2VzID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChudW0oY2ZnLmpvaW50UGFzc2VzLCAxKSkpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcblxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykgeyBjb25zdCBzID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTsgaWYgKHMgJiYgcyA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpOyB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgIGlmICh0aWxlU2V0LmhhcyhrZXkobngsIG55KSkgJiYgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHsgeDogbngsIHk6IG55IH0pID09PSAxKSBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgY29uc3QgaW5mID0gKHN0cmVuZ3RoOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gc3RyZW5ndGggLyBNYXRoLnBvdyhkICsgMSwgZmFsbG9mZik7XG5cbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGVuZW15T3JOZXV0cmFsQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihjID0+IGMuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIC8vIENpdHkgcG9wdWxhdGlvbiBieSB0aWxlIChmb3IgdmFsdWluZyBkb21pbmF0ZWQvY2FwdHVyZWQgY2l0eSB0aWxlcyBlY29ub21pY2FsbHkpLlxuICAgIGNvbnN0IGNpdHlQb3BBdCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykgY2l0eVBvcEF0LnNldChrZXkoYy54LCBjLnkpLCBjLnBvcHVsYXRpb24gPz8gMCk7XG4gICAgY29uc3QgY2FwdHVyZUNpdHlBdCA9IG5ldyBNYXAoZW5lbXlPck5ldXRyYWxDaXRpZXMubWFwKGMgPT4gW2tleShjLngsIGMueSksIGNdKSk7XG5cbiAgICAvLyBFbmVteSAocml2YWwpIGluZmx1ZW5jZSBwZXIgdGlsZSDigJQgZml4ZWQgYWNyb3NzIHBhc3Nlcy5cbiAgICBjb25zdCByaXZhbE1heCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7XG4gICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgbGV0IHJpdmFscyA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodCwgZSk7XG4gICAgICAgICAgICBpZiAoZCA+IHJhZGl1cykgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCB2ID0gaW5mKGUudG90YWxVbml0cywgZCk7XG4gICAgICAgICAgICBpZiAodiA+IHJpdmFscykgcml2YWxzID0gdjtcbiAgICAgICAgfVxuICAgICAgICByaXZhbE1heC5zZXQodGssIHJpdmFscyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWZmZWN0ZWRCeUdlbiA9IG5ldyBNYXA8c3RyaW5nLCB0eXBlb2YgdGlsZXM+KCk7XG4gICAgZm9yIChjb25zdCBnIG9mIG91cnMpIGFmZmVjdGVkQnlHZW4uc2V0KGcuaWQsIHRpbGVzLmZpbHRlcih0ID0+IGhleERpc3RhbmNlKHQsIGcpIDw9IHJhZGl1cyArIDEpKTtcbiAgICBjb25zdCB1bnNhZmVGb3IgPSAoUzogbnVtYmVyLCBjeDogbnVtYmVyLCBjeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7XG4gICAgICAgICAgICBpZiAoZS50b3RhbFVuaXRzIDw9IFMgKiB0aHJlYXRNYXJnaW4pIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGhleERpc3RhbmNlKHsgeDogY3gsIHk6IGN5IH0sIGUpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIDEpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gV2hlcmUgZWFjaCBvZiBvdXIgZ2VuZXJhbHMgcGxhbnMgdG8gYmUgbmV4dCB0dXJuIChpbml0ID0gY3VycmVudCkuIFJlZmluZWQgb3ZlciBwYXNzZXMuXG4gICAgY29uc3QgcGxhbm5lZCA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9PigpO1xuICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSBwbGFubmVkLnNldChnLmlkLCB7IHg6IGcueCwgeTogZy55IH0pO1xuXG4gICAgZm9yIChsZXQgcGFzcyA9IDA7IHBhc3MgPCBqb2ludFBhc3NlczsgcGFzcysrKSB7XG4gICAgICAgIC8vIE91ciB0b3RhbCBpbmZsdWVuY2UgcGVyIHRpbGUgZnJvbSBldmVyeW9uZSdzIFBMQU5ORUQgcG9zaXRpb25zIChwYXNzIDAgPSBjdXJyZW50IHBvc2l0aW9ucykuXG4gICAgICAgIGNvbnN0IG91clRvdGFsID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7XG4gICAgICAgICAgICBjb25zdCB0ayA9IGtleSh0LngsIHQueSk7XG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZyBvZiBvdXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHBsYW5uZWQuZ2V0KGcuaWQpID8/IHsgeDogZy54LCB5OiBnLnkgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodCwgcCk7XG4gICAgICAgICAgICAgICAgaWYgKGQgPiByYWRpdXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHN1bSArPSBpbmYoZy50b3RhbFVuaXRzLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91clRvdGFsLnNldCh0aywgc3VtKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGdlbiBvZiBvdXJzKSB7XG4gICAgICAgICAgICBjb25zdCBTID0gZ2VuLnRvdGFsVW5pdHM7XG4gICAgICAgICAgICBjb25zdCBwUGxhbm5lZCA9IHBsYW5uZWQuZ2V0KGdlbi5pZCkgPz8geyB4OiBnZW4ueCwgeTogZ2VuLnkgfTtcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkID0gYWZmZWN0ZWRCeUdlbi5nZXQoZ2VuLmlkKSA/PyBbXTtcbiAgICAgICAgICAgIGNvbnN0IGVjb25WYWx1ZUF0ID0gKGN4OiBudW1iZXIsIGN5OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIGFmZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsaWVzJyBpbmZsdWVuY2UgaGVyZSwgZXhjbHVkaW5nIHRoaXMgZ2VuZXJhbCdzIG93biBwbGFubmVkIGNvbnRyaWJ1dGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlRXhjbCA9IChvdXJUb3RhbC5nZXQodGspID8/IDApIC0gaW5mKFMsIGhleERpc3RhbmNlKHQsIHBQbGFubmVkKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91ciA9IGJhc2VFeGNsICsgaW5mKFMsIGhleERpc3RhbmNlKHQsIHsgeDogY3gsIHk6IGN5IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91ciA+IChyaXZhbE1heC5nZXQodGspID8/IDApICYmIG91ciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRpbGVWYWx1ZSArIGNpdHlQb3BXZWlnaHQgKiAoY2l0eVBvcEF0LmdldCh0aykgPz8gMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGNhcHR1cmVDaXR5QXQuZ2V0KGtleShjeCwgY3kpKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBTID4gYy5nYXJyaXNvbikgdmFsdWUgKz0gY2FwdHVyZVBvcFdlaWdodCAqIChjLnBvcHVsYXRpb24gPz8gMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBuZWlnaGJvcnNPZihnZW4ueCwgZ2VuLnkpLmZpbHRlcihuID0+ICF1bnNhZmVGb3IoUywgbi54LCBuLnkpKTtcbiAgICAgICAgICAgIGxldCBiZXN0ID0geyB4OiBnZW4ueCwgeTogZ2VuLnkgfTtcbiAgICAgICAgICAgIGxldCBiZXN0U2NvcmUgPSBlY29uVmFsdWVBdChnZW4ueCwgZ2VuLnkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IGVjb25WYWx1ZUF0KG4ueCwgbi55KTtcbiAgICAgICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3QgPSBuOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGFubmVkLnNldChnZW4uaWQsIGJlc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdlbiBvZiBvdXJzKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwbGFubmVkLmdldChnZW4uaWQpID8/IHsgeDogZ2VuLngsIHk6IGdlbi55IH07XG4gICAgICAgIGlmIChwLnggIT09IGdlbi54IHx8IHAueSAhPT0gZ2VuLnkpIG9yZGVycy5wdXNoKHsgZ2VuZXJhbElkOiBnZW4uaWQsIHRhcmdldFBvc2l0aW9uOiBwIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aXRoR3Jvd3RoKHNuYXBzaG90LCBjZmcsIG9yZGVycyk7XG59KTtcblxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG4iLCJpbXBvcnQgeyBoZXhEaXN0YW5jZSB9IGZyb20gXCIuLi9haVBsYW5uZXJcIjtcbmltcG9ydCB7IEFJV29ya2VyT3JkZXIgfSBmcm9tIFwiLi4vYWlUeXBlc1wiO1xuaW1wb3J0IHsgd2l0aEdyb3d0aCB9IGZyb20gXCIuLi9ncm93dGhQb2xpY3lcIjtcbmltcG9ydCB7IHJlZ2lzdGVyU3RyYXRlZ3kgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5mdW5jdGlvbiBjb21iYXREaXN0KGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2cxMChjb3VudCArIDEpKSArIDAuNTtcbn1cblxuLy8gUm9sbG91dCBzZWFyY2ggKHRoZSBcIk1DVFMtaXNoXCIgbWVudSBpdGVtKS4gRm9yIGVhY2ggb2Ygb3VyIGdlbmVyYWxzLCBpdCBldmFsdWF0ZXMgZWFjaCBjYW5kaWRhdGVcbi8vIGZpcnN0IG1vdmUgYnkgU0lNVUxBVElORyBhIGZldyB0dXJucyBhaGVhZCBhbmQgc2NvcmluZyB0aGUgcHJvamVjdGVkIHBvcHVsYXRpb24td2VpZ2h0ZWQgdGVycml0b3J5XG4vLyBvdXIgZmFjdGlvbiB3b3VsZCBkb21pbmF0ZSDigJQgaW5zdGVhZCBvZiBvbmx5IHRoZSBpbW1lZGlhdGUgMS1zdGVwIGNvdmVyYWdlIHRoYXQgZG9taW5pb24vZXZhbEdyZWVkeVxuLy8gdXNlLiBGb3J3YXJkIG1vZGVsIChrZXB0IGNoZWFwICsgd29ya2VyLXNhZmUpOlxuLy8gICAtIG91ciBnZW5lcmFscyBmb2xsb3cgYSBncmVlZHkgY292ZXJhZ2UtbWF4aW1pemluZyBwb2xpY3kgZWFjaCBzaW11bGF0ZWQgdHVybixcbi8vICAgLSBhcm1pZXMgZ3JvdyB+MTAlL3R1cm4gKG1hdGNoZXMgdGhlIGdyb3d0aCBtZWNoYW5pYyksXG4vLyAgIC0gZW5lbWllcyBhcmUgdHJlYXRlZCBhcyBhIFNUQVRJQyBpbmZsdWVuY2UgZmllbGQgKHRoZXkgbW92ZSBsaXR0bGUgb3ZlciBhIHNob3J0IGhvcml6b24pLFxuLy8gICAtIGhhcmQgdGhyZWF0LWF2b2lkYW5jZTogbmV2ZXIgc3RlcCB3aXRoaW4gYSBjbGVhcmx5LXN0cm9uZ2VyIHN0YWNrJ3MgcmVhY2guXG4vLyBUaGUgcG9pbnQgaXMgdG8gdGVzdCB3aGV0aGVyIG11bHRpLXR1cm4gZm9yZXNpZ2h0IGJlYXRzIGdyZWVkeSAxLXN0ZXAuIGNvbmZpZzogZmFsbG9mZiwgcmFkaXVzLFxuLy8gZGVwdGgsIGdyb3d0aCwgdGhyZWF0TWFyZ2luLCBjaXR5UG9wV2VpZ2h0LCBjYXB0dXJlUG9wV2VpZ2h0LlxucmVnaXN0ZXJTdHJhdGVneShcInJvbGxvdXRcIiwgKHNuYXBzaG90LCBjdHgpOiBBSVdvcmtlck9yZGVyW10gPT4ge1xuICAgIGNvbnN0IGNmZyA9IGN0eC5jb25maWc7XG4gICAgY29uc3QgZmFsbG9mZiA9IG51bShjZmcuZmFsbG9mZiwgNik7XG4gICAgY29uc3QgcmFkaXVzID0gbnVtKGNmZy5yYWRpdXMsIDUpO1xuICAgIGNvbnN0IGRlcHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChudW0oY2ZnLmRlcHRoLCAzKSkpO1xuICAgIGNvbnN0IGdyb3d0aCA9IG51bShjZmcuZ3Jvd3RoLCAxLjEpO1xuICAgIGNvbnN0IHRocmVhdE1hcmdpbiA9IG51bShjZmcudGhyZWF0TWFyZ2luLCAxLjMpO1xuICAgIGNvbnN0IGNpdHlQb3BXZWlnaHQgPSBudW0oY2ZnLmNpdHlQb3BXZWlnaHQsIDAuMDIpO1xuXG4gICAgY29uc3QgeyBmYWN0aW9uSWQsIHRpbGVzLCB0ZXJyYWluU3BlZWRzLCBnZW5lcmFscywgY2l0aWVzIH0gPSBzbmFwc2hvdDtcblxuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG4gICAgY29uc3QgdGlsZVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykgeyBjb25zdCBzID0gdGVycmFpblNwZWVkc1t0LnRlcnJhaW5UeXBlXTsgaWYgKHMgJiYgcyA+IDApIHRpbGVTZXQuYWRkKGtleSh0LngsIHQueSkpOyB9XG4gICAgY29uc3QgbmVpZ2hib3JzT2YgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMTsgZHggPD0gMTsgZHgrKykgZm9yIChsZXQgZHkgPSAtMTsgZHkgPD0gMTsgZHkrKykge1xuICAgICAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgIGlmICh0aWxlU2V0LmhhcyhrZXkobngsIG55KSkgJiYgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHsgeDogbngsIHk6IG55IH0pID09PSAxKSBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgY29uc3QgaW5mID0gKHN0cmVuZ3RoOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gc3RyZW5ndGggLyBNYXRoLnBvdyhkICsgMSwgZmFsbG9mZik7XG5cbiAgICBjb25zdCBvdXJzID0gZ2VuZXJhbHMuZmlsdGVyKGcgPT4gZy5mYWN0aW9uSWQgPT09IGZhY3Rpb25JZCk7XG4gICAgY29uc3QgZW5lbXlHZW5lcmFscyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkICE9PSBmYWN0aW9uSWQpO1xuICAgIGNvbnN0IGNpdHlQb3BBdCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykgY2l0eVBvcEF0LnNldChrZXkoYy54LCBjLnkpLCBjLnBvcHVsYXRpb24gPz8gMCk7XG5cbiAgICAvLyBTdGF0aWMgcml2YWwgaW5mbHVlbmNlIGZpZWxkIChmcm9tIGN1cnJlbnQgZW5lbXkgcG9zaXRpb25zKS5cbiAgICBjb25zdCByaXZhbEZpZWxkID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICBsZXQgciA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbmVteUdlbmVyYWxzKSB7IGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh0LCBlKTsgaWYgKGQgPD0gcmFkaXVzKSByID0gTWF0aC5tYXgociwgaW5mKGUudG90YWxVbml0cywgZCkpOyB9XG4gICAgICAgIHJpdmFsRmllbGQuc2V0KHRrLCByKTtcbiAgICB9XG4gICAgY29uc3QgdW5zYWZlRm9yID0gKFM6IG51bWJlciwgY3g6IG51bWJlciwgY3k6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZW5lbXlHZW5lcmFscykge1xuICAgICAgICAgICAgaWYgKGUudG90YWxVbml0cyA8PSBTICogdGhyZWF0TWFyZ2luKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh7IHg6IGN4LCB5OiBjeSB9LCBlKSA8PSBjb21iYXREaXN0KGUudG90YWxVbml0cykgKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHR5cGUgVW5pdCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHM6IG51bWJlcjsgfTtcbiAgICAvLyBMb2NhbCBjb3ZlcmFnZSBnYWluIGZvciBwbGFjaW5nIGEgdW5pdCBvZiBzdHJlbmd0aCBzIGF0IChjeCxjeSksIGdpdmVuIHRoZSByZXN0IG9mIG91ciBmaWVsZC5cbiAgICBjb25zdCB0aWxlc05lYXIgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHRpbGVzLmZpbHRlcih0ID0+IGhleERpc3RhbmNlKHQsIHsgeCwgeSB9KSA8PSByYWRpdXMpO1xuICAgIGNvbnN0IGNvdmVyYWdlR2FpbkF0ID0gKHVuaXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHM6IG51bWJlcjsgfSwgY3g6IG51bWJlciwgY3k6IG51bWJlciwgcmVzdEZpZWxkOiBNYXA8c3RyaW5nLCBudW1iZXI+KTogbnVtYmVyID0+IHtcbiAgICAgICAgbGV0IHYgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXNOZWFyKGN4LCBjeSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgICAgIGNvbnN0IG91ciA9IChyZXN0RmllbGQuZ2V0KHRrKSA/PyAwKSArIGluZih1bml0LnMsIGhleERpc3RhbmNlKHQsIHsgeDogY3gsIHk6IGN5IH0pKTtcbiAgICAgICAgICAgIGlmIChvdXIgPiAocml2YWxGaWVsZC5nZXQodGspID8/IDApICYmIG91ciA+IDApIHYgKz0gMSArIGNpdHlQb3BXZWlnaHQgKiAoY2l0eVBvcEF0LmdldCh0aykgPz8gMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbiAgICBjb25zdCBmaWVsZEV4Y2x1ZGluZyA9ICh1bml0czogVW5pdFtdLCBza2lwOiBudW1iZXIpOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0+IHtcbiAgICAgICAgY29uc3QgZiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIHVuaXRzLmZvckVhY2goKHUsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBza2lwKSByZXR1cm47XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXNOZWFyKHUueCwgdS55KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgICAgICAgICBmLnNldCh0aywgKGYuZ2V0KHRrKSA/PyAwKSArIGluZih1LnMsIGhleERpc3RhbmNlKHQsIHUpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuICAgIGNvbnN0IGdyZWVkeVN0ZXAgPSAodW5pdHM6IFVuaXRbXSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHUgPSB1bml0c1tpXTtcbiAgICAgICAgY29uc3QgcmVzdCA9IGZpZWxkRXhjbHVkaW5nKHVuaXRzLCBpKTtcbiAgICAgICAgbGV0IGJlc3QgPSB7IHg6IHUueCwgeTogdS55IH07XG4gICAgICAgIGxldCBiZXN0ViA9IGNvdmVyYWdlR2FpbkF0KHUsIHUueCwgdS55LCByZXN0KTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKHUueCwgdS55KSkge1xuICAgICAgICAgICAgaWYgKHVuc2FmZUZvcih1LnMsIG4ueCwgbi55KSkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCB2ID0gY292ZXJhZ2VHYWluQXQodSwgbi54LCBuLnksIHJlc3QpO1xuICAgICAgICAgICAgaWYgKHYgPiBiZXN0VikgeyBiZXN0ViA9IHY7IGJlc3QgPSBuOyB9XG4gICAgICAgIH1cbiAgICAgICAgdS54ID0gYmVzdC54OyB1LnkgPSBiZXN0Lnk7XG4gICAgfTtcbiAgICBjb25zdCB0b3RhbENvdmVyYWdlID0gKHVuaXRzOiBVbml0W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBjb25zdCBmID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAgICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSBmb3IgKGNvbnN0IHQgb2YgdGlsZXNOZWFyKHUueCwgdS55KSkge1xuICAgICAgICAgICAgY29uc3QgdGsgPSBrZXkodC54LCB0LnkpO1xuICAgICAgICAgICAgZi5zZXQodGssIChmLmdldCh0aykgPz8gMCkgKyBpbmYodS5zLCBoZXhEaXN0YW5jZSh0LCB1KSkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBbdGssIG91cl0gb2YgZikgaWYgKG91ciA+IChyaXZhbEZpZWxkLmdldCh0aykgPz8gMCkgJiYgb3VyID4gMCkgdiArPSAxICsgY2l0eVBvcFdlaWdodCAqIChjaXR5UG9wQXQuZ2V0KHRrKSA/PyAwKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyczogQUlXb3JrZXJPcmRlcltdID0gW107XG4gICAgZm9yIChsZXQgZ2kgPSAwOyBnaSA8IG91cnMubGVuZ3RoOyBnaSsrKSB7XG4gICAgICAgIGlmIChEYXRlLm5vdygpID4gY3R4LmRlYWRsaW5lTXMgLSA1MDApIGJyZWFrOyAvLyBzYWZldHk6IGJhaWwgYmVmb3JlIHRoZSBoYXJkIGtpbGxcbiAgICAgICAgY29uc3QgZ2VuID0gb3Vyc1tnaV07XG4gICAgICAgIC8vIEV2YWx1YXRlIGVhY2ggc2FmZSBmaXJzdCBtb3ZlIGJ5IHJvbGxpbmcgb3V0IGBkZXB0aGAgdHVybnMgd2l0aCB0aGUgZ3JlZWR5IHBvbGljeS5cbiAgICAgICAgY29uc3QgZXZhbEZpcnN0TW92ZSA9IChmeDogbnVtYmVyLCBmeTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRzOiBVbml0W10gPSBvdXJzLm1hcCgoZywgaSkgPT4gKHsgeDogaSA9PT0gZ2kgPyBmeCA6IGcueCwgeTogaSA9PT0gZ2kgPyBmeSA6IGcueSwgczogZy50b3RhbFVuaXRzIH0pKTtcbiAgICAgICAgICAgIGZvciAobGV0IHN0ZXAgPSAxOyBzdGVwIDwgZGVwdGg7IHN0ZXArKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pdHMubGVuZ3RoOyBpKyspIGdyZWVkeVN0ZXAodW5pdHMsIGkpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykgdS5zICo9IGdyb3d0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b3RhbENvdmVyYWdlKHVuaXRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGJlc3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBldmFsRmlyc3RNb3ZlKGdlbi54LCBnZW4ueSk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBuZWlnaGJvcnNPZihnZW4ueCwgZ2VuLnkpKSB7XG4gICAgICAgICAgICBpZiAodW5zYWZlRm9yKGdlbi50b3RhbFVuaXRzLCBuLngsIG4ueSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3Qgc2MgPSBldmFsRmlyc3RNb3ZlKG4ueCwgbi55KTtcbiAgICAgICAgICAgIGlmIChzYyA+IGJlc3RTY29yZSkgeyBiZXN0U2NvcmUgPSBzYzsgYmVzdCA9IG47IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdCkgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGdlbi5pZCwgdGFyZ2V0UG9zaXRpb246IGJlc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuXG5mdW5jdGlvbiBudW0odjogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2KSA/IHYgOiBmYWxsYmFjaztcbn1cbiIsImltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4uL2FpUGxhbm5lclwiO1xuaW1wb3J0IHsgQUlXb3JrZXJPcmRlciB9IGZyb20gXCIuLi9haVR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoR3Jvd3RoIH0gZnJvbSBcIi4uL2dyb3d0aFBvbGljeVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHJhdGVneSB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBjb21wdXRlQm9hcmRGZWF0dXJlcywgc2NvcmVGZWF0dXJlcywgRmVhdENpdHkgfSBmcm9tIFwiLi4vYm9hcmRGZWF0dXJlc1wiO1xuaW1wb3J0IGV2YWxXZWlnaHRzIGZyb20gXCIuLi9ldmFsV2VpZ2h0cy5qc29uXCI7XG5cbmZ1bmN0aW9uIGNvbWJhdERpc3QoY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLmxvZzEwKGNvdW50ICsgMSkpICsgMC41O1xufVxuZnVuY3Rpb24gbnVtKHY6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogZmFsbGJhY2s7XG59XG5cbi8vIGV2YWxDb2Fyc2Ug4oCUIGV2YWx1YXRpb24tYmFzZWQgbG9va2FoZWFkIHdpdGggQ09BUlNFIHNpbXVsYXRpb24uXG4vL1xuLy8gSWRlYSAocGVyIHRoZSBkZXNpZ24gYnJpZWYpOiBpbnN0ZWFkIG9mIGdyZWVkeSAxLXN0ZXAgY292ZXJhZ2UsIHBpY2sgZWFjaCBnZW5lcmFsJ3MgdGFyZ2V0IGJ5XG4vLyBwcm9qZWN0aW5nIHRoZSB3aG9sZSBib2FyZCBhIGZldyBzdGVwcyBmb3J3YXJkIGF0IEhJR0ggbW92ZW1lbnQgc3BlZWQg4oCUIHNvIGEgaGFuZGZ1bCBvZiBzdGVwc1xuLy8gYXBwcm94aW1hdGVzIG1hbnkgdHVybnMgb2YgbWFyY2hpbmcg4oCUIGFuZCBzY29yaW5nIHRoZSByZXN1bHRpbmcgcG9zaXRpb24gd2l0aCBhIGJvYXJkLWV2YWx1YXRpb25cbi8vIGZ1bmN0aW9uIHRoYXQgcmV3YXJkcyBob2xkaW5nIG91ciBvd24gdGVycml0b3J5IEFORCBkZW55aW5nL2NvbnRhaW5pbmcgdGhlIGVuZW15J3MgKG5ldCBkb21pbmF0ZWRcbi8vIGxhbmQsIHBvcHVsYXRpb24td2VpZ2h0ZWQpLCBwbHVzIGNhcHR1cmFibGUgY2l0aWVzLiBUaGUgZm9yd2FyZCBwb2xpY3k6IGV2ZXJ5IGdlbmVyYWwgaGVhZHMgdG8gYVxuLy8gY2hlYXAgc3RyYXRlZ2ljIHRhcmdldCAobmVhcmVzdCB0YWtlYWJsZSBlbmVteS9uZXV0cmFsIGNpdHksIGVsc2UgdGhlIG5lYXJlc3QgZW5lbXkgc3RhY2sgdG9cbi8vIGVuZ2FnZS9jb250YWluKTsgdGhlIGdlbmVyYWwgdW5kZXIgZXZhbHVhdGlvbiBpcyBmb3JjZWQgdG8gdGhlIGNhbmRpZGF0ZSB0YXJnZXQuIERldGVybWluaXN0aWMgZm9yXG4vLyBub3c7IHdlaWdodHMgYXJlIGNvbmZpZyBrbm9icyBzbyB0aGV5IGNhbiBsYXRlciBiZSBmaXQgdG8gd2luIG91dGNvbWVzLlxuLy9cbi8vIGNvbmZpZzogZmFsbG9mZiwgcmFkaXVzLCBjb2Fyc2VTcGVlZCwgc3RlcHMsIGdyb3d0aCwgY29udGFpbldlaWdodCwgY2l0eVdlaWdodCwgY2l0eVBvcFdlaWdodCxcbi8vIGxvb2tSYW5nZSwgdGhyZWF0TWFyZ2luLCBoYXJkQXZvaWQuXG5yZWdpc3RlclN0cmF0ZWd5KFwiZXZhbENvYXJzZVwiLCAoc25hcHNob3QsIGN0eCk6IEFJV29ya2VyT3JkZXJbXSA9PiB7XG4gICAgY29uc3QgY2ZnID0gY3R4LmNvbmZpZztcbiAgICBjb25zdCBmYWxsb2ZmID0gbnVtKGNmZy5mYWxsb2ZmLCA2KTtcbiAgICBjb25zdCByYWRpdXMgPSBudW0oY2ZnLnJhZGl1cywgNik7XG4gICAgY29uc3QgY29hcnNlU3BlZWQgPSBNYXRoLm1heCgxLCBudW0oY2ZnLmNvYXJzZVNwZWVkLCA0KSk7XG4gICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKG51bShjZmcuc3RlcHMsIDMpKSk7XG4gICAgY29uc3QgZ3Jvd3RoID0gbnVtKGNmZy5ncm93dGgsIDEuMSk7XG4gICAgY29uc3QgY29udGFpbldlaWdodCA9IG51bShjZmcuY29udGFpbldlaWdodCwgMS4wKTtcbiAgICBjb25zdCBjaXR5V2VpZ2h0ID0gbnVtKGNmZy5jaXR5V2VpZ2h0LCAxMCk7XG4gICAgY29uc3QgY2l0eVBvcFdlaWdodCA9IG51bShjZmcuY2l0eVBvcFdlaWdodCwgMC4wMik7XG4gICAgY29uc3QgbG9va1JhbmdlID0gbnVtKGNmZy5sb29rUmFuZ2UsIDYpO1xuICAgIGNvbnN0IHRocmVhdE1hcmdpbiA9IG51bShjZmcudGhyZWF0TWFyZ2luLCAxLjMpO1xuICAgIGNvbnN0IGhhcmRBdm9pZCA9IGNmZy5oYXJkQXZvaWQgIT09IGZhbHNlO1xuICAgIGNvbnN0IGxlYXJuZWQgPSBjZmcubGVhcm5lZCA9PT0gdHJ1ZTsgLy8gdXNlIHRoZSBmaXR0ZWQgdmFsdWUgZnVuY3Rpb24gaW5zdGVhZCBvZiB0aGUgaGFuZCBldmFsXG4gICAgLy8gQ29hcnNlIGNvbWJhdCBpbiB0aGUgcHJvamVjdGlvbiAoc28gYXJteSBzaGFyZSDigJQgdGhlIHRvcCB3aW4gcHJlZGljdG9yIOKAlCBhY3R1YWxseSByZXNwb25kcyB0b1xuICAgIC8vIG1vdmVzKTogYSBzdGFjayB3aXRoaW4gY29tYmF0IHJhbmdlIG9mIGEgU1RST05HRVIgZW5lbXkgYmxlZWRzIGBjb21iYXRMb3NzYDsgdGhlIHN0cm9uZ2VyIHNpZGVcbiAgICAvLyBwYXlzIGEgc21hbGwgYHdpbm5lckNvc3RgLiBXZWFrIHN0YWNrcyBtZWx0IG5lYXIgc3Ryb25nIGVuZW1pZXMgPSBwb3NpdGlvbmluZy9jb250YWlubWVudCBzaG93c1xuICAgIC8vIHVwIGluIHRoZSBldmFsLlxuICAgIGNvbnN0IGNvbWJhdExvc3MgPSBudW0oY2ZnLmNvbWJhdExvc3MsIDAuMyk7XG4gICAgY29uc3Qgd2lubmVyQ29zdCA9IG51bShjZmcud2lubmVyQ29zdCwgMC4wNSk7XG5cbiAgICBjb25zdCB7IGZhY3Rpb25JZCwgdGlsZXMsIHRlcnJhaW5TcGVlZHMsIGdlbmVyYWxzLCBjaXRpZXMgfSA9IHNuYXBzaG90O1xuICAgIGNvbnN0IGtleSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7eH0sJHt5fWA7XG5cbiAgICBjb25zdCB0aWxlU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7IGNvbnN0IHMgPSB0ZXJyYWluU3BlZWRzW3QudGVycmFpblR5cGVdOyBpZiAocyAmJiBzID4gMCkgdGlsZVNldC5hZGQoa2V5KHQueCwgdC55KSk7IH1cbiAgICBjb25zdCBwYXNzYWJsZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdGlsZVNldC5oYXMoa2V5KHgsIHkpKTtcbiAgICBjb25zdCBuZWlnaGJvcnNPZiA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSBmb3IgKGxldCBkeSA9IC0xOyBkeSA8PSAxOyBkeSsrKSB7XG4gICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbnggPSB4ICsgZHgsIG55ID0geSArIGR5O1xuICAgICAgICAgICAgaWYgKHBhc3NhYmxlKG54LCBueSkgJiYgaGV4RGlzdGFuY2UoeyB4LCB5IH0sIHsgeDogbngsIHk6IG55IH0pID09PSAxKSBvdXQucHVzaCh7IHg6IG54LCB5OiBueSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgY29uc3QgaW5mID0gKHM6IG51bWJlciwgZDogbnVtYmVyKSA9PiBzIC8gTWF0aC5wb3coZCArIDEsIGZhbGxvZmYpO1xuXG4gICAgY29uc3Qgb3VycyA9IGdlbmVyYWxzLmZpbHRlcihnID0+IGcuZmFjdGlvbklkID09PSBmYWN0aW9uSWQpO1xuICAgIGlmIChvdXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgW10pO1xuICAgIGNvbnN0IGVuZW15R2VuZXJhbHMgPSBnZW5lcmFscy5maWx0ZXIoZyA9PiBnLmZhY3Rpb25JZCAhPT0gZmFjdGlvbklkKTtcblxuICAgIGNvbnN0IGNpdHlQb3BBdCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgZm9yIChjb25zdCBjIG9mIGNpdGllcykgY2l0eVBvcEF0LnNldChrZXkoYy54LCBjLnkpLCBjLnBvcHVsYXRpb24gPz8gMCk7XG4gICAgY29uc3Qgb3RoZXJDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGMgPT4gYy5mYWN0aW9uSWQgIT09IGZhY3Rpb25JZCk7XG5cbiAgICAvLyBUaWxlcyB3ZSBib3RoZXIgc2NvcmluZzogdGhvc2Ugd2l0aGluIGByYWRpdXNgIG9mIGFueSBnZW5lcmFsIChldmVyeXRoaW5nIGVsc2UgaXMgZW1wdHkvbmV1dHJhbFxuICAgIC8vIGFuZCBjb250cmlidXRlcyBub3RoaW5nIHRvIGVpdGhlciBzaWRlKS4gRml4ZWQgdXAtZnJvbnQgdG8gYm91bmQgY29zdC5cbiAgICBjb25zdCByZWxldmFudDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyB9W10gPSBbXTtcbiAgICB7XG4gICAgICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgZm9yIChjb25zdCBnIG9mIGdlbmVyYWxzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGlsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UodCwgZykgPiByYWRpdXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRrID0ga2V5KHQueCwgdC55KTtcbiAgICAgICAgICAgICAgICBpZiAoc2Vlbi5oYXModGspKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBzZWVuLmFkZCh0ayk7XG4gICAgICAgICAgICAgICAgcmVsZXZhbnQucHVzaCh7IHg6IHQueCwgeTogdC55LCB3OiAxICsgY2l0eVBvcFdlaWdodCAqIChjaXR5UG9wQXQuZ2V0KHRrKSA/PyAwKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR5cGUgVW5pdCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHM6IG51bWJlcjsgZmFjdGlvbjogc3RyaW5nOyBpZDogc3RyaW5nOyB9O1xuICAgIGNvbnN0IGJhc2VVbml0czogVW5pdFtdID0gZ2VuZXJhbHMubWFwKGcgPT4gKHsgeDogZy54LCB5OiBnLnksIHM6IGcudG90YWxVbml0cywgZmFjdGlvbjogZy5mYWN0aW9uSWQsIGlkOiBnLmlkIH0pKTtcblxuICAgIC8vIENoZWFwIHN0cmF0ZWdpYyB0YXJnZXQgZm9yIGEgdW5pdDogbmVhcmVzdCBlbmVteS9uZXV0cmFsIGNpdHkgaXQgY3VycmVudGx5IG91dC1nYXJyaXNvbnMsIGVsc2VcbiAgICAvLyB0aGUgbmVhcmVzdCBlbmVteSBzdGFjayAodG8gZW5nYWdlIC8gY29udGFpbiBpdCksIGVsc2UgaG9sZC5cbiAgICBjb25zdCBkZWZhdWx0VGFyZ2V0ID0gKHU6IFVuaXQsIHVuaXRzOiBVbml0W10pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9ID0+IHtcbiAgICAgICAgbGV0IGJlc3RDaXR5OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkOyBsZXQgYmVzdENpdHlEID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBjaXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChjLmZhY3Rpb25JZCA9PT0gdS5mYWN0aW9uKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh1LnMgPD0gYy5nYXJyaXNvbikgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodSwgYyk7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3RDaXR5RCkgeyBiZXN0Q2l0eUQgPSBkOyBiZXN0Q2l0eSA9IGM7IH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgYmVzdEVuZW15OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkOyBsZXQgYmVzdEVuZW15RCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IHYgb2YgdW5pdHMpIHtcbiAgICAgICAgICAgIGlmICh2LmZhY3Rpb24gPT09IHUuZmFjdGlvbikgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodSwgdik7XG4gICAgICAgICAgICBpZiAoZCA8IGJlc3RFbmVteUQpIHsgYmVzdEVuZW15RCA9IGQ7IGJlc3RFbmVteSA9IHY7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVzdENpdHkgJiYgKCFiZXN0RW5lbXkgfHwgYmVzdENpdHlEIDw9IGJlc3RFbmVteUQgKyAzKSkgcmV0dXJuIGJlc3RDaXR5O1xuICAgICAgICBpZiAoYmVzdEVuZW15KSByZXR1cm4gYmVzdEVuZW15O1xuICAgICAgICByZXR1cm4geyB4OiB1LngsIHk6IHUueSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzdGVwVG93YXJkID0gKHU6IFVuaXQsIHRndDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgfSwgc3BlZWQ6IG51bWJlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwZWVkOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh1LnggPT09IHRndC54ICYmIHUueSA9PT0gdGd0LnkpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBiZXN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9IHwgdW5kZWZpbmVkOyBsZXQgYmVzdEQgPSBoZXhEaXN0YW5jZSh1LCB0Z3QpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuIG9mIG5laWdoYm9yc09mKHUueCwgdS55KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZShuLCB0Z3QpO1xuICAgICAgICAgICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0gbjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFiZXN0KSByZXR1cm47XG4gICAgICAgICAgICB1LnggPSBiZXN0Lng7IHUueSA9IGJlc3QueTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcHBseUNvbWJhdCA9ICh1bml0czogVW5pdFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHNCZWZvcmUgPSB1bml0cy5tYXAodSA9PiB1LnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbWF4RW5lbXkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1bml0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh1bml0c1tqXS5mYWN0aW9uID09PSB1bml0c1tpXS5mYWN0aW9uKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IE1hdGgubWF4KGNvbWJhdERpc3Qoc0JlZm9yZVtpXSksIGNvbWJhdERpc3Qoc0JlZm9yZVtqXSkpO1xuICAgICAgICAgICAgICAgIGlmIChoZXhEaXN0YW5jZSh1bml0c1tpXSwgdW5pdHNbal0pIDw9IHJhbmdlICYmIHNCZWZvcmVbal0gPiBtYXhFbmVteSkgbWF4RW5lbXkgPSBzQmVmb3JlW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heEVuZW15IDw9IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgdW5pdHNbaV0ucyAqPSBtYXhFbmVteSA+IHNCZWZvcmVbaV0gPyAoMSAtIGNvbWJhdExvc3MpIDogKDEgLSB3aW5uZXJDb3N0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKG92ZXJyaWRlSWQ6IHN0cmluZywgb3ZlcnJpZGVUYXJnZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0pOiBVbml0W10gPT4ge1xuICAgICAgICBjb25zdCB1bml0cyA9IGJhc2VVbml0cy5tYXAodSA9PiAoeyAuLi51IH0pKTtcbiAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBzdGVwczsgcysrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0Z3QgPSB1LmlkID09PSBvdmVycmlkZUlkID8gb3ZlcnJpZGVUYXJnZXQgOiBkZWZhdWx0VGFyZ2V0KHUsIHVuaXRzKTtcbiAgICAgICAgICAgICAgICBzdGVwVG93YXJkKHUsIHRndCwgY29hcnNlU3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwbHlDb21iYXQodW5pdHMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB1LnMgKj0gZ3Jvd3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9O1xuXG4gICAgLy8gTmV0IHBvcHVsYXRpb24td2VpZ2h0ZWQgdGVycml0b3J5IHdlJ2QgZG9taW5hdGUgbWludXMgd2hhdCB0aGUgZW5lbXkgZG9taW5hdGVzIChjb250YWlubWVudCkuXG4gICAgY29uc3QgZXZhbEJvYXJkID0gKHVuaXRzOiBVbml0W10pOiBudW1iZXIgPT4ge1xuICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgcmVsZXZhbnQpIHtcbiAgICAgICAgICAgIGxldCBvdXIgPSAwLCByaXZhbCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gaGV4RGlzdGFuY2UodCwgdSk7XG4gICAgICAgICAgICAgICAgaWYgKGQgPiByYWRpdXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBpbmYodS5zLCBkKTtcbiAgICAgICAgICAgICAgICBpZiAodS5mYWN0aW9uID09PSBmYWN0aW9uSWQpIG91ciArPSB2O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgPiByaXZhbCkgcml2YWwgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG91ciA+IHJpdmFsICYmIG91ciA+IDApIHNjb3JlICs9IHQudztcbiAgICAgICAgICAgIGVsc2UgaWYgKHJpdmFsID4gb3VyICYmIHJpdmFsID4gMCkgc2NvcmUgLT0gY29udGFpbldlaWdodCAqIHQudztcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXdhcmQgY2FwdHVyYWJsZSBlbmVteS9uZXV0cmFsIGNpdGllcyBvdXIgbmVhcmVzdCBzdGFjayBjYW4gdGFrZS5cbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG90aGVyQ2l0aWVzKSB7XG4gICAgICAgICAgICBsZXQgY2FuVGFrZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7IGlmICh1LmZhY3Rpb24gPT09IGZhY3Rpb25JZCAmJiBoZXhEaXN0YW5jZSh1LCBjKSA8PSAxICYmIHUucyA+IGMuZ2Fycmlzb24pIHsgY2FuVGFrZSA9IHRydWU7IGJyZWFrOyB9IH1cbiAgICAgICAgICAgIGlmIChjYW5UYWtlKSBzY29yZSArPSBjaXR5V2VpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY29yZTtcbiAgICB9O1xuXG4gICAgLy8gTGVhcm5lZCB2YWx1ZSBmdW5jdGlvbjogc2NvcmUgdGhlIHByb2plY3RlZCBib2FyZCB2aWEgdGhlIGZpdHRlZCBmZWF0dXJlIHdlaWdodHMuIENpdGllcyBnZXQgYVxuICAgIC8vIGNvYXJzZSBjYXB0dXJlIChhIHN0cm9uZ2VyIGFkamFjZW50IHVuaXQgdGFrZXMgdGhlbSkgc28gdGhlIGNpdHktc2hhcmUgZmVhdHVyZSByZXNwb25kcyB0byBtb3Zlcy5cbiAgICBjb25zdCBwcm9qZWN0ZWRDaXRpZXMgPSAodW5pdHM6IFVuaXRbXSk6IEZlYXRDaXR5W10gPT4gb3RoZXJDaXRpZXMuY29uY2F0KGNpdGllcy5maWx0ZXIoYyA9PiBjLmZhY3Rpb25JZCA9PT0gZmFjdGlvbklkKSkubWFwKGMgPT4ge1xuICAgICAgICBsZXQgb3duZXIgPSBjLmZhY3Rpb25JZDsgbGV0IGJlc3RTID0gYy5nYXJyaXNvbjtcbiAgICAgICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7IGlmIChoZXhEaXN0YW5jZSh1LCBjKSA8PSAxICYmIHUucyA+IGJlc3RTKSB7IGJlc3RTID0gdS5zOyBvd25lciA9IHUuZmFjdGlvbjsgfSB9XG4gICAgICAgIHJldHVybiB7IHg6IGMueCwgeTogYy55LCBmYWN0aW9uOiBvd25lciB9O1xuICAgIH0pO1xuICAgIGNvbnN0IGZlYXRUaWxlcyA9IHJlbGV2YW50Lm1hcCh0ID0+ICh7IHg6IHQueCwgeTogdC55LCB3OiB0LncgfSkpO1xuICAgIGNvbnN0IGV2YWxCb2FyZExlYXJuZWQgPSAodW5pdHM6IFVuaXRbXSk6IG51bWJlciA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gY29tcHV0ZUJvYXJkRmVhdHVyZXMoe1xuICAgICAgICAgICAgdW5pdHM6IHVuaXRzLm1hcCh1ID0+ICh7IHg6IHUueCwgeTogdS55LCBzOiB1LnMsIGZhY3Rpb246IHUuZmFjdGlvbiB9KSksXG4gICAgICAgICAgICBjaXRpZXM6IHByb2plY3RlZENpdGllcyh1bml0cyksXG4gICAgICAgICAgICB0aWxlczogZmVhdFRpbGVzLFxuICAgICAgICAgICAgZmFsbG9mZixcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgfSwgZmFjdGlvbklkKTtcbiAgICAgICAgcmV0dXJuIHNjb3JlRmVhdHVyZXMoZmVhdHVyZXMsIGV2YWxXZWlnaHRzLndlaWdodHMpO1xuICAgIH07XG4gICAgY29uc3Qgc2NvcmVCb2FyZCA9IGxlYXJuZWQgPyBldmFsQm9hcmRMZWFybmVkIDogZXZhbEJvYXJkO1xuXG4gICAgY29uc3QgdW5zYWZlID0gKFM6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBlIG9mIGVuZW15R2VuZXJhbHMpIHtcbiAgICAgICAgICAgIGlmIChlLnRvdGFsVW5pdHMgPD0gUyAqIHRocmVhdE1hcmdpbikgY29udGludWU7XG4gICAgICAgICAgICBpZiAoaGV4RGlzdGFuY2UoeyB4LCB5IH0sIGUpIDw9IGNvbWJhdERpc3QoZS50b3RhbFVuaXRzKSArIDEpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gQ2FuZGlkYXRlIHRhcmdldHMgZm9yIGEgZ2VuZXJhbDogaG9sZCwgdGhlIDggZGlyZWN0aW9uYWwgcHJvYmVzIGF0IGxvb2tSYW5nZSwgYW5kIG5lYXJieVxuICAgIC8vIGVuZW15L25ldXRyYWwgY2l0aWVzLiBGaWx0ZXJlZCB0byBwYXNzYWJsZSArICh1bmRlciBoYXJkQXZvaWQpIHNhZmUuXG4gICAgY29uc3QgY2FuZGlkYXRlc0ZvciA9IChnOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB0b3RhbFVuaXRzOiBudW1iZXI7IH0pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9W10gPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH1bXSA9IFt7IHg6IGcueCwgeTogZy55IH1dO1xuICAgICAgICBjb25zdCBkaXJzID0gW1sxLCAwXSwgWy0xLCAwXSwgWzAsIDFdLCBbMCwgLTFdLCBbMSwgMV0sIFstMSwgLTFdLCBbMSwgLTFdLCBbLTEsIDFdXTtcbiAgICAgICAgZm9yIChjb25zdCBbZHgsIGR5XSBvZiBkaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IGcueCArIGR4ICogbG9va1JhbmdlLCB0eSA9IGcueSArIGR5ICogbG9va1JhbmdlO1xuICAgICAgICAgICAgaWYgKHBhc3NhYmxlKHR4LCB0eSkpIG91dC5wdXNoKHsgeDogdHgsIHk6IHR5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBvdGhlckNpdGllcykgeyBpZiAoaGV4RGlzdGFuY2UoZywgYykgPD0gbG9va1JhbmdlICsgNCkgb3V0LnB1c2goeyB4OiBjLngsIHk6IGMueSB9KTsgfVxuICAgICAgICByZXR1cm4gb3V0LmZpbHRlcihwID0+ICFoYXJkQXZvaWQgfHwgKHAueCA9PT0gZy54ICYmIHAueSA9PT0gZy55KSB8fCAhdW5zYWZlKGcudG90YWxVbml0cywgcC54LCBwLnkpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJzOiBBSVdvcmtlck9yZGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGcgb2Ygb3Vycykge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSA+IGN0eC5kZWFkbGluZU1zIC0gNTAwKSBicmVhazsgLy8gY29vcGVyYXRpdmUgZGVhZGxpbmVcbiAgICAgICAgbGV0IGJlc3RUYXJnZXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgY2FuZCBvZiBjYW5kaWRhdGVzRm9yKGcpKSB7XG4gICAgICAgICAgICBjb25zdCBzYyA9IHNjb3JlQm9hcmQocHJvamVjdChnLmlkLCBjYW5kKSk7XG4gICAgICAgICAgICBpZiAoc2MgPiBiZXN0U2NvcmUpIHsgYmVzdFNjb3JlID0gc2M7IGJlc3RUYXJnZXQgPSBjYW5kOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlc3RUYXJnZXQgJiYgKGJlc3RUYXJnZXQueCAhPT0gZy54IHx8IGJlc3RUYXJnZXQueSAhPT0gZy55KSkge1xuICAgICAgICAgICAgb3JkZXJzLnB1c2goeyBnZW5lcmFsSWQ6IGcuaWQsIHRhcmdldFBvc2l0aW9uOiBiZXN0VGFyZ2V0IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhHcm93dGgoc25hcHNob3QsIGNmZywgb3JkZXJzKTtcbn0pO1xuIiwiLy8gV29ya2VyLXNhZmUgKG5vIGVuZ2luZS9tb2J4L3ByZWFjdCBpbXBvcnRzKS4gQm9hcmQgZmVhdHVyZXMgZm9yIHByZWRpY3RpbmcgV0hJQ0ggRkFDVElPTiBXSU5TLFxuLy8gY29tcHV0ZWQgZnJvbSBhIHBvc2l0aW9ucytzdHJlbmd0aHMgY29uZmlnIHNvIHRoZSBTQU1FIGZ1bmN0aW9uIHNjb3JlcyBib3RoIHJlYWwgZ2FtZSBzdGF0ZXMgKHdoZW5cbi8vIGZpdHRpbmcgd2VpZ2h0cyBmcm9tIHNpbSBvdXRjb21lcykgYW5kIHRoZSBBSSdzIHByb2plY3RlZCBsb29rYWhlYWQgc3RhdGVzIChldmFsQ29hcnNlKS4gS2VlcGluZ1xuLy8gdGhlbSBpZGVudGljYWwgaXMgd2hhdCBsZXRzIGEgdmFsdWUgZnVuY3Rpb24gbGVhcm5lZCBmcm9tIFwid2hhdCBzdGF0ZXMgd2luXCIgZHJpdmUgdGhlIHNlYXJjaC5cbmltcG9ydCB7IGhleERpc3RhbmNlIH0gZnJvbSBcIi4vYWlQbGFubmVyXCI7XG5cbmV4cG9ydCB0eXBlIEZlYXRVbml0ID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgczogbnVtYmVyOyBmYWN0aW9uOiBzdHJpbmc7IH07XG5leHBvcnQgdHlwZSBGZWF0Q2l0eSA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGZhY3Rpb246IHN0cmluZzsgfTsgLy8gZmFjdGlvbiA9IGN1cnJlbnQgY29udHJvbGxlclxuZXhwb3J0IHR5cGUgRmVhdFRpbGUgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IH07ICAgICAgICAvLyByZWxldmFudCAobmVhciB1bml0cyksIHBvcHVsYXRpb24td2VpZ2h0ZWRcblxuZXhwb3J0IHR5cGUgRmVhdENvbmZpZyA9IHtcbiAgICB1bml0czogRmVhdFVuaXRbXTtcbiAgICBjaXRpZXM6IEZlYXRDaXR5W107XG4gICAgdGlsZXM6IEZlYXRUaWxlW107XG4gICAgZmFsbG9mZjogbnVtYmVyO1xuICAgIHJhZGl1czogbnVtYmVyO1xufTtcblxuLy8gT3JkZXIgbWF0dGVycyDigJQgd2VpZ2h0cyBsaW5lIHVwIHBvc2l0aW9uYWxseS4gWzBdIGlzIHRoZSBiaWFzIHRlcm0uXG5leHBvcnQgY29uc3QgRkVBVFVSRV9OQU1FUyA9IFtcImJpYXNcIiwgXCJkb21BZHZhbnRhZ2VcIiwgXCJvdXJEb21TaGFyZVwiLCBcImFybXlTaGFyZVwiLCBcImNpdHlTaGFyZVwiLCBcImZyb250aWVyU2hhcmVcIiwgXCJsYW5kUGVyQXJteVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVCb2FyZEZlYXR1cmVzKGNmZzogRmVhdENvbmZpZywgZmFjdGlvbklkOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgeyB1bml0cywgY2l0aWVzLCB0aWxlcywgZmFsbG9mZiwgcmFkaXVzIH0gPSBjZmc7XG4gICAgbGV0IG91ckRvbSA9IDAsIGVuZW15RG9tID0gMCwgdG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aWxlcykge1xuICAgICAgICBsZXQgb3VyID0gMCwgcml2YWwgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBoZXhEaXN0YW5jZSh0LCB1KTtcbiAgICAgICAgICAgIGlmIChkID4gcmFkaXVzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB1LnMgLyBNYXRoLnBvdyhkICsgMSwgZmFsbG9mZik7XG4gICAgICAgICAgICBpZiAodS5mYWN0aW9uID09PSBmYWN0aW9uSWQpIG91ciArPSB2O1xuICAgICAgICAgICAgZWxzZSBpZiAodiA+IHJpdmFsKSByaXZhbCA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgdG90YWwgKz0gdC53O1xuICAgICAgICBpZiAob3VyID4gcml2YWwgJiYgb3VyID4gMCkgb3VyRG9tICs9IHQudztcbiAgICAgICAgZWxzZSBpZiAocml2YWwgPiBvdXIgJiYgcml2YWwgPiAwKSBlbmVteURvbSArPSB0Lnc7XG4gICAgfVxuICAgIGNvbnN0IG91ckRvbVNoYXJlID0gdG90YWwgPiAwID8gb3VyRG9tIC8gdG90YWwgOiAwO1xuICAgIGNvbnN0IGRvbUFkdmFudGFnZSA9IHRvdGFsID4gMCA/IChvdXJEb20gLSBlbmVteURvbSkgLyB0b3RhbCA6IDA7XG5cbiAgICBsZXQgb3VyQXJteSA9IDAsIHRvdGFsQXJteSA9IDA7XG4gICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7IHRvdGFsQXJteSArPSB1LnM7IGlmICh1LmZhY3Rpb24gPT09IGZhY3Rpb25JZCkgb3VyQXJteSArPSB1LnM7IH1cbiAgICBjb25zdCBhcm15U2hhcmUgPSB0b3RhbEFybXkgPiAwID8gb3VyQXJteSAvIHRvdGFsQXJteSA6IDA7XG5cbiAgICBsZXQgb3VyQ2l0aWVzID0gMDtcbiAgICBmb3IgKGNvbnN0IGMgb2YgY2l0aWVzKSBpZiAoYy5mYWN0aW9uID09PSBmYWN0aW9uSWQpIG91ckNpdGllcysrO1xuICAgIGNvbnN0IGNpdHlTaGFyZSA9IGNpdGllcy5sZW5ndGggPiAwID8gb3VyQ2l0aWVzIC8gY2l0aWVzLmxlbmd0aCA6IDA7XG5cbiAgICBsZXQgZnJvbnRBcm15ID0gMDtcbiAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcbiAgICAgICAgaWYgKHUuZmFjdGlvbiAhPT0gZmFjdGlvbklkKSBjb250aW51ZTtcbiAgICAgICAgbGV0IG5lYXIgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCB2IG9mIHVuaXRzKSB7IGlmICh2LmZhY3Rpb24gIT09IGZhY3Rpb25JZCAmJiBoZXhEaXN0YW5jZSh1LCB2KSA8PSByYWRpdXMpIHsgbmVhciA9IHRydWU7IGJyZWFrOyB9IH1cbiAgICAgICAgaWYgKG5lYXIpIGZyb250QXJteSArPSB1LnM7XG4gICAgfVxuICAgIGNvbnN0IGZyb250aWVyU2hhcmUgPSBvdXJBcm15ID4gMCA/IGZyb250QXJteSAvIG91ckFybXkgOiAwO1xuICAgIGNvbnN0IGxhbmRQZXJBcm15ID0gb3VyQXJteSA+IDAgPyBvdXJEb20gLyBvdXJBcm15IDogMDsgLy8gdGVycml0b3J5IHBlciB1bml0IOKAlCBzdXN0YWluYWJpbGl0eSBwcm94eVxuXG4gICAgcmV0dXJuIFsxLCBkb21BZHZhbnRhZ2UsIG91ckRvbVNoYXJlLCBhcm15U2hhcmUsIGNpdHlTaGFyZSwgZnJvbnRpZXJTaGFyZSwgbGFuZFBlckFybXldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NvcmVGZWF0dXJlcyhmZWF0dXJlczogbnVtYmVyW10sIHdlaWdodHM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICBsZXQgcyA9IDA7XG4gICAgY29uc3QgbiA9IE1hdGgubWluKGZlYXR1cmVzLmxlbmd0aCwgd2VpZ2h0cy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSBzICs9IGZlYXR1cmVzW2ldICogd2VpZ2h0c1tpXTtcbiAgICByZXR1cm4gcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdILHVDQUF5QjtBQUV6QixrRkFBa0Y7QUFDbEYsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLHVFQUF1RTtBQUMxRCxRQUFBLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFFaEMsSUFBSSxXQUFXLEdBQW9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkYsU0FBUyxjQUFjLENBQUMsR0FBVztJQUMvQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1QsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLFVBQWdDLENBQUM7UUFDckMsSUFBSSxDQUFDO1lBQ0QsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2IsS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzNELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqRCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUc7SUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFekMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQTZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsMERBQTBEO1lBQzFELElBQUssSUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUM5QixJQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQzs7Ozs7QUN6REY7O0dBRUc7OztBQUVILGtGQUFrRjtBQUNsRixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFekMsdUVBQXVFO0FBQzFELFFBQUEsV0FBVyxHQUFHLElBQUksQ0FBQztBQUVoQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUErQixPQUFlO0lBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQTtJQUM3QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUNELHVGQUF1RjtJQUN2RiwyRkFBMkY7SUFDM0YsbUJBQW1CO0lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFHdkUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUN4QkYseUNBQW1DO0FBQ25DLG1EQUFxRTtBQUNyRSxtREFBNkM7QUFDN0MsNkNBQStLO0FBQy9LLDRDQUFvQjtBQUViLEtBQUssVUFBVSxNQUFNLENBQUMsTUFJNUI7SUFHRyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFbEQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUN6RSxtREFBbUQ7SUFFbkQsSUFBSSxtQkFBbUIsR0FBd0I7UUFDM0MsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUM7SUFFRixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDckIsS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTTtZQUFFLFNBQVM7UUFFdEIsSUFBSSxPQUFPLEdBQUcsSUFBQSwwQkFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUEsNEJBQWUsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ25CLElBQUksU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLFVBQVUsR0FBRyxJQUFBLG1DQUFzQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssSUFBSSxPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxPQUFPLENBQUMsYUFBYSxJQUFJLFlBQVksQ0FBQztZQUMxQyxDQUFDO1lBQ0QsSUFBQSxxQ0FBd0IsRUFBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsSUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxJQUFJLElBQUksMENBQTBDLENBQUM7SUFDbkQsSUFBSSxJQUFJLFFBQVEsWUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztJQUM1RSxJQUFJLElBQUksbUNBQW1DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBQSxrQkFBTSxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzRSxJQUFJLFlBQVksR0FBd0I7UUFDcEMsUUFBUTtLQUNYLENBQUM7SUFDRixJQUFJLElBQUksS0FBSyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUMzRSx3RkFBd0Y7SUFDeEYsSUFBSSxJQUFJLHVCQUF1QixDQUFDO0lBQ2hDLEtBQUssSUFBSSxVQUFVLElBQUksV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLHlCQUF5QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQUNELElBQUksSUFBSSxRQUFRLENBQUM7SUFDakIsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFBLHVDQUEwQixFQUFDLElBQUEsd0NBQTJCLEVBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzVGLE9BQU87UUFDSCxNQUFNLEVBQUUsSUFBSTtLQUNmLENBQUM7QUFDTixDQUFDO0FBdkRELHdCQXVEQztBQU1ELFNBQWdCLGlCQUFpQixDQUFDLElBQVk7SUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ25FLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxTQUFTLENBQUM7SUFDN0IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUpELDhDQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVELFNBQWdCLGFBQWEsQ0FBQyxNQUEyQjtJQUNyRCxVQUFVLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLElBQUk7UUFDdkMsR0FBRyxFQUFFO1lBQ0QsUUFBUSxFQUFFLFlBQVk7U0FDekI7UUFDRCxRQUFRLEVBQUUsRUFBRTtRQUNaLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQ2hCLENBQUM7SUFDRiw4REFBOEQ7SUFDOUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUM7SUFDakYsVUFBa0IsQ0FBQyxNQUFNLEdBQUksVUFBa0IsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDO0lBQ3JFLFVBQWtCLENBQUMsTUFBTSxHQUFJLFVBQWtCLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQztJQUNyRSxVQUFrQixDQUFDLFlBQVksR0FBSSxVQUFrQixDQUFDLFlBQVksSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDO0lBRTVGLFVBQWtCLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBRWpELElBQUksb0JBQW9CLEdBQStCO1FBQ25ELGNBQWMsRUFBRTtZQUNaLFlBQVksRUFBRSxJQUFJO1NBQ3JCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsbUZBQW1GO1lBQ25GLFFBQVEsQ0FBQyxXQUFnQixFQUFFLGdCQUFxQjtnQkFDNUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFDRCxXQUFXLEVBQUUsV0FBVztZQUN4QixXQUFXLEVBQUUsV0FBVztTQUMzQjtRQUNELE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRTtRQUNsQixNQUFNLEVBQUU7WUFDSixnREFBZ0Q7WUFDaEQsTUFBTSxFQUFFLGNBQWMsQ0FBQztZQUN2QixTQUFTLEVBQUUsY0FBYyxDQUFDO1lBRTFCLFFBQVEsRUFBRSxjQUFjLENBQUM7U0FDNUI7UUFDRCxNQUFNLEVBQUU7WUFDSixrQ0FBa0M7WUFDbEMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxZQUFZO1NBQ3hDO1FBQ0QsYUFBYSxFQUFFLEVBQUU7UUFDakIsTUFBTSxFQUFFLE1BQU0sWUFBWTtTQUFJO0tBQ2pDLENBQUM7SUFDRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDMUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDO1lBQ0QscURBQXFEO1lBQ3JELElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsS0FBSyxJQUFJLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDN0IsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDO1FBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQztRQUVYLEtBQUssSUFBSSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtnQkFDN0MsR0FBRztvQkFDQyxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsa0ZBQWtGO0lBQ2xGLFNBQVMsV0FBVyxDQUFDLEdBQUcsS0FBZTtRQUNuQyx1Q0FBdUM7UUFDdkMsSUFBSSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzVCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUxQixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFOUMsNkJBQTZCO1FBQzdCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7WUFDdkIsNkNBQTZDO1lBQzdDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUMxQixhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixxQ0FBcUM7Z0JBQ3JDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUMvQixRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO2dCQUMxRSxDQUFDO3FCQUFNLENBQUM7b0JBQ0osOEVBQThFO29CQUM5RSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3dCQUM1RCxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsaUNBQWlDO2dCQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxTQUFTO1lBQ2IsQ0FBQztZQUVELG9FQUFvRTtZQUNwRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO29CQUMxRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDO3FCQUFNLENBQUM7b0JBQ0osUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQztZQUNMLENBQUM7WUFFRCw0Q0FBNEM7WUFDNUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxLQUFLLE1BQU0sSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDaEIsaUNBQWlDO29CQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDNUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNuQixDQUFDO2dCQUNMLENBQUM7cUJBQU0sSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ3RCLDhDQUE4QztvQkFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBRUQsbUNBQW1DO1FBQ25DLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0QsU0FBUyxPQUFPLENBQUMsSUFBWTtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQW9DLEVBQUUsQ0FBQztJQUV6RCxJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLFFBQVEsR0FBRyxrQkFBa0I7S0FDNUQsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBYyxDQUFDO0lBRS9DLFNBQVMsWUFBWSxDQUFDLE1BR3JCOztRQUNHLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDckQsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDL0MsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFDRCxJQUFJLFVBQVUsR0FBRyxNQUFBLFVBQVUsQ0FBQyxpQkFBaUIsMENBQUcsbUJBQW1CLENBQUMsQ0FBQztRQUVyRSxJQUFJLFNBQVMsR0FBa0I7WUFDM0IsRUFBRSxFQUFFLG1CQUFtQjtZQUN2QixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLFlBQVk7WUFDcEIsUUFBUSxFQUFFLEVBQUU7WUFDWixZQUFZLEVBQUUsS0FBSztZQUNuQixNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsS0FBSyxFQUFFLENBQUEsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLEtBQUssS0FBSSxFQUFFO1lBQzlCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLElBQUk7U0FDQSxDQUFDO1FBQ1QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUEsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFlBQVksS0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3RFLElBQUksR0FBRyxJQUFJLFNBQVM7Z0JBQUUsU0FBUztZQUM5QixTQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRXhDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsK0JBQXNDLENBQUM7UUFFL0QsMkJBQTJCO1FBQzNCLFNBQVMsWUFBWSxDQUFDLElBQVk7O1lBQzlCLElBQUksVUFBVSxHQUFHO2dCQUNiLElBQUk7Z0JBQ0osSUFBSSxHQUFHLEtBQUs7Z0JBQ1osSUFBSSxHQUFHLEtBQUs7Z0JBQ1osSUFBSSxHQUFHLE1BQU07YUFDaEIsQ0FBQztZQUNGLEtBQUssSUFBSSxTQUFTLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQy9CLElBQUksVUFBVSxHQUFHLE1BQUEsVUFBVSxDQUFDLGlCQUFpQiwwQ0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDYixPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7WUFDTCxDQUFDO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELFNBQVMsT0FBTyxDQUFDLElBQVk7O1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBQ0QsOEJBQThCO1lBQzlCLEtBQUssSUFBSSxVQUFVLElBQUksQ0FBQSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsS0FBSyxLQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLFVBQVUsR0FBRyxNQUFBLFVBQVUsQ0FBQyxpQkFBaUIsMENBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQzNELElBQUksVUFBVSxFQUFFLENBQUM7b0JBQ2IsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO1lBQ0wsQ0FBQztZQUNELDZDQUE2QztZQUM3QyxPQUFPLElBQUksQ0FBQztZQUNaLFlBQVk7WUFDWiwrQ0FBK0M7UUFDbkQsQ0FBQztRQUVELFNBQVMsVUFBVSxDQUFDLElBQVk7WUFDNUIsSUFBSSxJQUFJLElBQUksb0JBQW9CLEVBQUUsQ0FBQztnQkFDL0IsT0FBTyxvQkFBb0IsQ0FBQyxJQUF5QyxDQUFDLENBQUM7WUFDM0UsQ0FBQztZQUNELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUM7Z0JBQ3pCLFlBQVksRUFBRSxTQUFTO2dCQUN2QixtQkFBbUIsRUFBRSxRQUFRO2FBQ2hDLENBQVEsQ0FBQztZQUNWLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBRUQsU0FBUyxJQUFJOztZQUNULElBQUksU0FBUyxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUM3QixzRUFBc0U7WUFDdEUsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFeEIsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDYixVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RyxDQUFDO2lCQUFNLENBQUM7Z0JBQ0oseUVBQXlFO2dCQUN6RSxJQUFJLENBQUMsQ0FBQSxNQUFBLE1BQU0sQ0FBQyxZQUFZLDBDQUFFLE1BQU0sQ0FBQSxFQUFFLENBQUM7b0JBQy9CLFFBQVEsQ0FBQztvQkFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdLLENBQUM7Z0JBQ0QsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FDekIsRUFBRSxFQUNGO29CQUNJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUTt3QkFDaEIsSUFBSSxRQUFRLEtBQUssWUFBWTs0QkFBRSxPQUFPLFNBQVMsQ0FBQzt3QkFDaEQsSUFBSSxRQUFRLEtBQUssU0FBUzs0QkFBRSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUM7d0JBRXJELE9BQU8sQ0FBQyxJQUFJLENBQ1IsVUFBVSxTQUFTLENBQUMsUUFBUSw4TkFBOE4sQ0FDN1AsQ0FBQzt3QkFDRixPQUFPLFNBQVMsQ0FBQztvQkFDckIsQ0FBQztpQkFDSixDQUNKLENBQUM7WUFDTixDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDO0FBblFELHNDQW1RQzs7Ozs7Ozs7OztBQ3pRRCx5REFBb0Q7QUFDcEQsZ0RBQXdCO0FBQ3hCLDRDQUFvQjtBQUVwQixNQUFNLGtCQUFrQixHQUFHLElBQUEsZUFBSyxFQUFDLENBQUMsU0FBaUIsRUFBc0IsRUFBRTtJQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN4RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxlQUFlLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsSUFBSSxZQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakMsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNELE9BQU8sa0JBQWtCLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxXQUFXLEdBQUcsSUFBQSxlQUFLLEVBQUMsQ0FBQyxTQUFpQixFQUFzQixFQUFFOztJQUNoRSxJQUFJLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxJQUFJLENBQUMsZUFBZTtRQUFFLE9BQU8sU0FBUyxDQUFDO0lBQ3ZDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBT3BFLENBQUM7SUFDRixJQUFJLEdBQUcsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hDLElBQUksUUFBUSxHQUFHLENBQUEsTUFBQSxNQUFBLFdBQVcsQ0FBQyxPQUFPLDBDQUFHLEdBQUcsQ0FBQywwQ0FBRSxPQUFPLEtBQUksV0FBVyxDQUFDLElBQUksQ0FBQztJQUN2RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDWixJQUFJLFlBQUUsQ0FBQyxVQUFVLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQy9DLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDMUIsQ0FBQzthQUFNLElBQUksWUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEQsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMxQixDQUFDO2FBQU0sSUFBSSxZQUFFLENBQUMsVUFBVSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN2RCxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ0osUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUNELCtDQUErQztJQUMvQyxJQUFJLFFBQVEsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQztBQUdILDhFQUE4RTtBQUM5RSxnRUFBZ0U7QUFDaEUsU0FBZ0IsVUFBVSxDQUFDLE1BQXFCO0lBQzVDLElBQUksUUFBUSxHQUFJLE1BQWMsQ0FBQyxjQUFjLElBQUksbUJBQW1CLENBQUM7SUFFckUsK0ZBQStGO0lBQy9GLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRO1NBQzFCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWixPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNuQixPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWhDLElBQUksT0FBTyxHQUFHLGFBQWEsU0FBUyx1REFBdUQsUUFBUTtPQUNoRyxDQUFDO0lBRUosSUFBSSxZQUFZLEdBQWlDLEVBQUUsQ0FBQztJQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzlDLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVTtZQUFFLFNBQVM7UUFDMUMsSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3QixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7YUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ3pELFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDbkMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksVUFBOEIsQ0FBQztJQUNuQyxJQUFJLE9BQU8sR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxJQUFJLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDNUUscUNBQXFDO1lBQ3JDLFVBQVUsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBSSxVQUFVLEdBQUcsR0FBRztVQUNkLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRztVQUMxRCxjQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUc7VUFDdEUsa0JBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUc7VUFDL0MsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1VBQzVFLGtCQUFrQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHO1VBQ2pELGVBQWUsT0FBTyxFQUFFO1VBQ3hCLElBQUksQ0FBQztJQUVYLFNBQVMsVUFBVSxDQUFDLFVBQTRCO1FBQzVDLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1FBQ2xFLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3pELElBQUksVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3ZFLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxLQUFLLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDO0FBQy9FLENBQUM7QUF4REQsZ0NBd0RDOzs7Ozs7O0FDdEdELGlDQUFvQztBQUNwQyxtQ0FBNkQ7QUFFN0QsU0FBZ0IsSUFBSSxDQUFJLE9BQWdCO0lBQ3BDLElBQUksS0FBSyxHQUE2QixTQUFTLENBQUM7SUFDaEQsU0FBUyxHQUFHO1FBQ1IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1QsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQUEsQ0FBQztJQUNGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2IsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN0QixDQUFDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBVyxFQUFFLEVBQUU7UUFDdEIsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQWZELG9CQWVDO0FBYUQsb0ZBQW9GO0FBQ3BGLDZDQUE2QztBQUM3QyxNQUFNLFVBQVUsR0FBVSxFQUFFLENBQUM7QUFDN0IsU0FBZ0IsZUFBZSxDQUFJLEtBQVU7SUFDekMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLFVBQVUsQ0FBQztJQUMxQyxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBSEQsMENBR0M7QUFFRCxTQUFnQixLQUFLLENBQ2pCLFFBQXVEO0lBVXZELElBQUksbUJBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQztJQUN6QyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0lBQ3BDLFNBQVMsS0FBSyxDQUFDLEtBQVUsRUFBRSxHQUFHLFNBQW9CO1FBQzlDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFRLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDL0IsZ0VBQWdFO1lBQ2hFLDREQUE0RDtZQUM1RCxPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBQ0QsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFRLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkIsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFRLEVBQUUsRUFBRTtRQUNyQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDbEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQS9DRCxzQkErQ0M7QUFHRDs7SUFFSTtBQUNKLFNBQWdCLFlBQVk7QUFDeEIsdUZBQXVGO0FBQ3ZGLHNHQUFzRztBQUN0RywyR0FBMkc7QUFDM0csUUFBZ0IsRUFDaEIsUUFBOEI7SUFFOUIsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO0lBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7SUFDcEMsU0FBUyxHQUFHLENBQUMsS0FBVTtRQUNuQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDaEIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbEIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBUSxDQUFDO1FBQ2xDLENBQUM7UUFDRCxJQUFJLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLDJEQUEyRDtRQUMzRCxnRUFBZ0U7UUFDaEUsaUVBQWlFO1FBQ2pFLHFFQUFxRTtRQUNyRSxzRUFBc0U7UUFDdEUsOENBQThDO1FBQzlDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFRLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkIsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUU7UUFDaEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBaERELG9DQWdEQztBQUVELFNBQWdCLFNBQVMsQ0FBNkIsUUFBOEI7SUFDaEYsSUFBSSxLQUFLLEdBQUc7UUFDUixtQkFBbUIsRUFBRSxJQUFJLE9BQU8sRUFBTztRQUN2QyxNQUFNLEVBQUUsSUFBSSxPQUFPLEVBQWU7S0FDckMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNiLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVEsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQW5CRCw4QkFtQkM7QUFFRCxrREFBa0Q7QUFDbEQsU0FBZ0IsU0FBUyxDQUNyQixTQUF1QixFQUN2QixRQUFrQztJQUVsQyxJQUFJLEtBQUssR0FBRztRQUNSLEtBQUssRUFBRSxFQUFhO1FBQ3BCLE1BQU0sRUFBRSxTQUErQjtRQUN2QyxTQUFTO0tBQ1osQ0FBQztJQUNGLFNBQVMsR0FBRyxDQUFDLENBQVM7UUFDbEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFBQSxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBeEJELDhCQXdCQztBQUVELFNBQVMsc0JBQXNCLENBQUMsS0FBVTtJQUN0QyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBZ0IsZUFBZSxDQUMzQixHQUE4QixFQUM5QixLQUFLLEdBQUcsRUFBRTtJQU1WLElBQUksS0FBSyxHQUtMLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFNBQVMsT0FBTyxDQUFDLEdBQVUsRUFBRSxHQUFVO1FBQ25DLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDekMsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELElBQUksSUFBQSxpQkFBVSxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUNoQixDQUFDLEtBQVksRUFBRSxFQUFFO1FBQ2IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QixLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3BCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDNUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDLEVBQ0Q7UUFDSSxLQUFLLENBQUMsS0FBWTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxRQUFRO1lBQ0osS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUNKLENBQ0osQ0FBQztBQUNOLENBQUM7QUF0REQsMENBc0RDO0FBRUQseURBQXlEO0FBQ3pELFNBQWdCLGNBQWMsQ0FDMUIsR0FBUSxFQUNSLEtBQUssR0FBRyxFQUFFO0lBRVYsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLFNBQVMsY0FBYyxDQUFDLElBQWU7UUFDL0QsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDVixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQ2hCLENBQUMsQ0FBQyxHQUFHLElBQWUsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBUSxFQUNUO1FBQ0ksS0FBSyxDQUFDLEdBQUcsSUFBZTtZQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUM7S0FDSixDQUNKLENBQUM7QUFDTixDQUFDO0FBakJELHdDQWlCQztBQUVELFNBQWdCLGtCQUFrQixDQUM5QixHQUFRLEVBQ1IsS0FBSyxHQUFHLEVBQUU7SUFFVixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1FBQ2pELE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUNoQixDQUFDLENBQUMsR0FBRyxJQUFlLEVBQUUsRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFRLEVBQ1Q7UUFDSSxLQUFLLENBQUMsR0FBRyxJQUFlO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxRQUFRO1lBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLENBQUM7S0FDSixDQUNKLENBQUM7QUFDTixDQUFDO0FBcEJELGdEQW9CQztBQUVELFNBQWdCLDBCQUEwQixDQUN0QyxHQUFRLEVBQ1IsS0FBSyxHQUFHLEVBQUU7SUFLVixJQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsQ0FBQyxRQUFtQixFQUFFLEVBQUU7UUFDaEQsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLElBQUksR0FBUSxDQUFDO1FBQ2IsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQzthQUFNLENBQUM7WUFDSixJQUFJLElBQUksR0FBeUIsRUFBRSxDQUFDO1lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQ0QsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNWLFNBQVMsT0FBTyxDQUFDLFNBQWlCO1FBQzlCLElBQUksQ0FBQyxJQUFBLHVCQUFlLEVBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUN0QixDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQVEsRUFDVDtRQUNJLEtBQUssQ0FBQyxTQUFpQjtZQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxRQUFRO1lBQ0osS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxTQUFTLEVBQUUsQ0FBQztRQUNaLFNBQVMsRUFBRSxDQUFDO0tBQ2YsQ0FDSixDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQTlDRCxnRUE4Q0M7QUFHRCxTQUFnQixhQUFhO0lBSXpCLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUFjLENBQUM7SUFDbkMsT0FBTztRQUNILEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBYkQsc0NBYUM7Ozs7Ozs7QUM1V0QsbUNBQXdEO0FBQ3hELGdEQUFtRDtBQUV0QyxRQUFBLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsUUFBQSxZQUFZLEdBQUcsb0JBQVksR0FBRyxFQUFFLENBQUM7QUFDakMsUUFBQSxVQUFVLEdBQUcsb0JBQVksR0FBRyxFQUFFLENBQUM7QUFDL0IsUUFBQSxTQUFTLEdBQUcsa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBQSxVQUFVLEdBQUcsaUJBQVMsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBQSxVQUFVLEdBQUcsaUJBQVMsR0FBRyxHQUFHLENBQUM7QUFJMUMsU0FBZ0Isd0JBQXdCLENBQUMsS0FBYTtJQUNsRCxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLFFBQVEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFMRCw0REFLQztBQUdELFNBQWdCLFVBQVUsQ0FBQyxNQUF1QjtJQUM5QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRkQsZ0NBRUM7QUFDRCxTQUFnQixnQkFBZ0IsQ0FBQyxNQUF1QjtJQUNwRCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFFLENBQUM7QUFGRCw0Q0FFQztBQUNELHVEQUF1RDtBQUNoRCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsTUFBYztJQUNsRCxJQUFJLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDWCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRSxDQUFDO1NBQU0sQ0FBQztRQUNKLElBQUksR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7QUFDTCxDQUFDO0FBUEQsOENBT0M7QUFDTSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsTUFBYztJQUNwRCxJQUFJLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDWCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFFLENBQUM7U0FBTSxDQUFDO1FBQ0osSUFBSSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0FBQ0wsQ0FBQztBQVBELGtEQU9DO0FBR0QsU0FBZ0IsVUFBVSxDQUFDLENBQTZDLEVBQUUsQ0FBNkM7SUFDbkgsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFORCxnQ0FNQztBQUNELFNBQWdCLE1BQU07SUFDbEIsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksT0FBUSxVQUFrQixDQUFDLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztBQUMzRyxDQUFDO0FBRkQsd0JBRUM7QUFFRCxTQUFnQixVQUFVO0lBQ3RCLE9BQU8sTUFBTSxFQUFVLENBQUM7QUFDNUIsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsS0FBYTtJQUM5QyxPQUFPLElBQUEscUJBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRkQsb0RBRUM7QUFFRCxTQUFnQixJQUFJLENBQUMsS0FBYTtJQUM5QixJQUFJLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQU5ELG9CQU1DO0FBRUQsU0FBZ0IsZUFBZSxDQUFJLEdBQU07SUFDckMsSUFBSSxDQUFDLElBQUEsdUJBQWUsRUFBQyxHQUFHLENBQUM7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBVyxDQUFDO0lBQ2pDLFNBQVMsT0FBTyxDQUFDLEdBQVk7UUFDekIsSUFBSSxDQUFDLElBQUEsdUJBQWUsRUFBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQ2xDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFoQkQsMENBZ0JDO0FBR0QsU0FBZ0IsWUFBWSxDQUFDLEdBQVk7SUFDckMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDMUMsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN2QixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDekMsSUFBSSxHQUFHLFlBQVksV0FBVztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzVDLElBQUksTUFBTSxDQUFDLGlCQUFpQixJQUFJLEdBQUcsWUFBWSxNQUFNLENBQUMsaUJBQWlCO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDckYsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVBELG9DQU9DO0FBQ0QsU0FBZ0IsT0FBTyxDQUFDLEdBQVk7SUFDaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN2RSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFJLEdBQUcsWUFBWSxXQUFXLEVBQUUsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFJLFFBQXVCLENBQUM7SUFDNUIsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNwQixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7U0FBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUM1QixpRkFBaUY7UUFDakYsNkZBQTZGO1FBQzdGLGlCQUFpQjtRQUNqQixRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztTQUFNLENBQUM7UUFDSixRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsS0FBSyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDTixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQXpCRCwwQkF5QkM7QUFDRCxTQUFnQixhQUFhLENBQWUsR0FBTTtJQUM5QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLENBQUM7QUFDbkMsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0IsS0FBSyxDQUFPLEdBQVEsRUFBRSxNQUF1QjtJQUN6RCxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBUSxDQUFDO0lBQzFCLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQU5ELHNCQU1DO0FBQ0QsU0FBZ0IsVUFBVSxDQUFPLEdBQVEsRUFBRSxNQUF1QjtJQUM5RCxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0lBQzVCLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1AsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFaRCxnQ0FZQztBQUVELFNBQWdCLGFBQWEsQ0FBSSxHQUFNO0lBQ25DLElBQUksR0FBRyxLQUFLLFNBQVM7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLDhGQUE4RjtJQUM5RixxQ0FBcUM7SUFDckMsSUFBSSxHQUFHLEtBQUssU0FBUztRQUFFLE9BQU8sU0FBZ0IsQ0FBQztJQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQVBELHNDQU9DO0FBRUQsTUFBYSxVQUFVO0lBd0JuQjtRQWxCTyxZQUFPLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLFlBQVksT0FBTyxFQUFFLENBQUM7Z0JBQzFFLEtBQUssQ0FBQyxJQUFJLENBQ04sS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQy9CLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxDQUNsQyxDQUFDO1lBQ04sQ0FBQztpQkFBTSxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUMzQixDQUFDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFDSyxXQUFNLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQztRQUtFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDYixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFDL0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQ2xDLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFsQ0QsZ0NBa0NDO0FBRUQsU0FBZ0IsVUFBVTtJQUN0QixPQUFPLElBQUksVUFBVSxFQUFLLENBQUM7QUFDL0IsQ0FBQztBQUZELGdDQUVDO0FBRUQsNEZBQTRGO0FBQzVGLGlGQUFpRjtBQUNqRiw0Q0FBNEM7QUFDNUMsaUdBQWlHO0FBQ2pHLDREQUE0RDtBQUM1RCxTQUFnQixnQkFBZ0IsQ0FDNUIsS0FBYSxFQUNiLEdBQTBDO0lBRTFDLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFJLFdBQVcsR0FBNkQsU0FBUyxDQUFDO0lBQ3RGLFNBQVMsTUFBTSxDQUFDLElBQVUsRUFBRSxVQUE0QjtRQUNwRCxJQUFJLENBQUM7WUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMxQixVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLElBQUksTUFBTSxZQUFZLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixvRUFBb0U7Z0JBQ3BFLDBFQUEwRTtnQkFDMUUsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDckIsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7b0JBQ3JDLFdBQVcsRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7aUJBQU0sQ0FBQztnQkFDSixlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDckMsV0FBVyxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNMLENBQUM7UUFBQyxPQUFPLENBQU0sRUFBRSxDQUFDO1lBQ2QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNyQyxXQUFXLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsV0FBVztRQUNoQixJQUFJLGVBQWUsS0FBSyxNQUFNLENBQUMsaUJBQWlCO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLHFFQUFxRTtZQUNyRSwwQkFBMEI7WUFDMUIsZUFBZSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQyxtRkFBbUY7WUFDbkYsdUNBQXVDO1lBQ3ZDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUN2QixXQUFXLEdBQUcsU0FBUyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1IsZUFBZSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO29CQUM3RixPQUFPO2dCQUNYLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUM7YUFBTSxDQUFDO1lBQ0osVUFBVSxDQUFDLFdBQVcsRUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLFVBQVUsR0FBRyxJQUFVO1FBQzFCLElBQUksV0FBVyxFQUFFLENBQUM7WUFDZCxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzFDLENBQUM7UUFDRCxXQUFXLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDakQsV0FBVyxFQUFFLENBQUM7UUFDZCxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQzFDLENBQUMsQ0FBQztBQUNOLENBQUM7QUE1REQsNENBNERDO0FBR0QsU0FBZ0IsTUFBTTtJQUNsQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFGRCx3QkFFQztBQUVELFNBQWdCLG9CQUFvQixDQUFJLEdBQTJCO0lBQy9ELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztBQUN2SCxDQUFDO0FBSEQsb0RBR0M7QUFFRCxTQUFnQixJQUFJLENBQUksR0FBUTtJQUM1QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFGRCxvQkFFQztBQUdELFNBQWdCLE9BQU8sQ0FBeUMsR0FBUTtJQUNwRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFRLENBQUM7QUFDdEMsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsSUFBSSxDQUF5QyxHQUFRO0lBQ2pFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsQ0FBQztBQUNuQyxDQUFDO0FBRkQsb0JBRUM7QUFFRCxTQUFnQixJQUFJLENBQUksR0FBUSxFQUFFLE9BQTRCO0lBQzFELElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFKRCxvQkFJQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxRQUFnQjtJQUMxQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQVRELHNDQVNDO0FBRUQsTUFBYSxZQUFZO0lBR3JCLFlBQTZCLFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFGckMsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzJCLENBQUM7SUFFM0MsSUFBSSxDQUFDLElBQU87UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxRCxDQUFDO0lBRU0sZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNNLEtBQUs7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ00sS0FBSztRQUNSLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ00sU0FBUztRQUNaLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDZixLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQTdCRCxvQ0E2QkM7QUFHRCxTQUFnQixpQkFBaUIsQ0FBTyxLQUFVLEVBQUUsTUFBcUIsRUFBRSxXQUFjO0lBQ3JGLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUN4RixDQUFDO0FBRkQsOENBRUM7QUFDRCxTQUFnQixrQkFBa0IsQ0FBTyxLQUFVLEVBQUUsTUFBcUIsRUFBRSxXQUFjO0lBQ3RGLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBRkQsZ0RBRUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxTQUFpQixFQUFFLE9BQXFDO0lBQ3RGLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUN4QixPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFBTSxDQUFDO1lBQ0osR0FBRyxHQUFHLFdBQVcsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixJQUFJLFVBQVUsS0FBSyxDQUFDO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDakMsSUFBSSxVQUFVLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDaEMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFuQkQsOENBbUJDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFZO0lBQzlDLElBQUksT0FBTyxHQUFHLEtBQUssT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFJLEdBQUcsS0FBSyxHQUFHO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1QyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUk7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxHQUFVLEdBQUksR0FBVztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBakJELDBCQWlCQztBQUNELFNBQWdCLFlBQVksQ0FBQyxHQUFjLEVBQUUsR0FBYztJQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxVQUFVLEtBQUssQ0FBQztZQUFFLE9BQU8sVUFBVSxDQUFDO0lBQzVDLENBQUM7SUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxDQUFDO0FBTkQsb0NBTUM7QUFFRCxTQUFnQixvQkFBb0IsQ0FBSSxJQUFTLEVBQUUsR0FBZ0MsRUFBRSxPQUFVO0lBQzNGLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixJQUFJLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLElBQUksS0FBSyxHQUFHLENBQUM7UUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFMRCxvREFLQztBQUNELFNBQWdCLG9CQUFvQixDQUFJLElBQVMsRUFBRSxHQUFnQyxFQUFFLFdBQTRCO0lBQzdHLElBQUksS0FBSyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEYsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUFFLE9BQU87SUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUpELG9EQUlDO0FBSUQsU0FBZ0IsY0FBYyxDQUFJLElBQVksRUFBRSxDQUFhLEVBQUUsR0FBZ0I7SUFDM0UsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN0QyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUxELHdDQUtDO0FBRUQsNERBQTREO0FBQzVELFNBQWdCLGtCQUFrQixDQUFJLElBQVksRUFBRSxDQUFhO0lBQzdELE9BQU8sSUFBSSxPQUFPLENBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ2xELElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1RCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ1YsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQ0osQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBYkQsZ0RBYUM7QUFDRCxTQUFnQix3QkFBd0IsQ0FBSSxJQUFZLEVBQUUsQ0FBYTtJQUNuRSxPQUFPLElBQUksT0FBTyxDQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNsRCxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsSUFBSSxDQUNGLE9BQU8sRUFDUCxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FDSixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFaRCw0REFZQztBQUVELFNBQWdCLGNBQWMsQ0FBSSxPQUFtQjtJQUNqRCx1RkFBdUY7SUFDdkYsd0NBQXdDO0lBQ3hDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixPQUFPLFNBQWdCLENBQUM7SUFDNUIsQ0FBQyxDQUFRLENBQUM7QUFDZCxDQUFDO0FBUEQsd0NBT0M7Ozs7Ozs7QUNyY0QsU0FBZ0IsZUFBZSxDQUFDLEtBQWM7SUFDMUMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7QUFDdEYsQ0FBQztBQUZELDBDQUVDOzs7Ozs7O0FDUkQsU0FBZ0IsVUFBVSxDQUFDLFlBQWdDLEVBQUUsZ0JBQXlCO0lBQ2xGLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ2hELElBQUksWUFBWSxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNyQyxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNuQixPQUFPLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQ3pCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ25CLE9BQU8saUJBQWlCLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ25FLENBQUM7U0FBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNuQixPQUFPLGlCQUFpQixDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzVELENBQUM7U0FBTSxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUN0QixPQUFPLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakQseUVBQXlFO0lBQzdFLENBQUM7U0FBTSxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8saUJBQWlCLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDM0QsQ0FBQztTQUFNLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDaEMsT0FBTyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEUsQ0FBQztTQUFNLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3JDLE9BQU8saUJBQWlCLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqRSx3REFBd0Q7UUFDeEQsdURBQXVEO1FBQ3ZELG9DQUFvQztRQUNwQyw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLG9DQUFvQztRQUNwQyw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLDRCQUE0QjtRQUM1Qix1SUFBdUk7UUFDdkksc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixzQ0FBc0M7UUFDdEMsbUJBQW1CO1FBQ25CLDZDQUE2QztRQUM3QyxZQUFZO1FBQ1osUUFBUTtRQUNSLG1CQUFtQjtJQUN2QixDQUFDO1NBQU0sQ0FBQztRQUNKLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUMxQixDQUFDO0FBQ0wsQ0FBQztBQWhERCxnQ0FnREM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxnQkFBd0IsRUFBRSxZQUFvQjtJQUM1RSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxJQUFJLFNBQVMsR0FBRyxDQUFDO1FBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNqQyxJQUFJLGFBQWEsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQzdDLDhGQUE4RjtJQUM5RixJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNwQixhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBVEQsOENBU0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxZQUFvQixFQUFFLGdCQUF5QixFQUFFLGFBQXNCOztJQUNsSCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUN4QyxrQ0FBa0M7SUFDbEMsSUFBSSxZQUFZLEdBQUcsR0FBRztRQUFFLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTVELElBQUksR0FBRyxHQUFHLENBQUM7UUFBRSxPQUFPLGlCQUFpQixDQUFDLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUUzRixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMsaUVBQWlFO0lBQ2pFLHFEQUFxRDtJQUVyRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLGNBQWhCLGdCQUFnQixHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFckQsSUFBSSxjQUFjLEdBQUcsYUFBYSxhQUFiLGFBQWEsY0FBYixhQUFhLEdBQUksaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEYsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixJQUFJLFFBQVEsR0FBRyxNQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsbUNBQUksRUFBRSxDQUFDO0lBRTlCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDaEIsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLFFBQVEsSUFBSSxHQUFHLENBQUM7UUFDcEIsQ0FBQztJQUNMLENBQUM7U0FBTSxDQUFDO1FBQ0osT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUMzQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVoQix1RkFBdUY7SUFDdkYsMkVBQTJFO0lBQzNFLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDekMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDO2dCQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUMxQixDQUFDO1lBQ0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7U0FBTSxDQUFDO1FBQ0osTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNYLE1BQU0sSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBeERELDhDQXdEQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLFlBQVksQ0FBQyxLQUF5QixFQUFFLGdCQUF5QixFQUFFLFNBQW1CLEVBQUUsZUFBeUI7SUFDN0gsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDWixPQUFPLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLGNBQWhCLGdCQUFnQixHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBRXBCLHFFQUFxRTtJQUNyRSw4RUFBOEU7SUFDOUUsMkRBQTJEO0lBQzNELDZGQUE2RjtJQUM3RixvR0FBb0c7SUFDcEcsc0dBQXNHO0lBQ3RHLHNHQUFzRztJQUN0RyxpREFBaUQ7SUFDakQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQy9CLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDbkMsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLEVBQUUsQ0FBQztRQUNoQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7U0FBTSxJQUFJLGdCQUFnQixHQUFHLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztTQUFNLElBQUksZ0JBQWdCLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDckMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO1NBQU0sSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7U0FBTSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ25DLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztTQUFNLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDbEMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO1NBQU0sSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7U0FBTSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztTQUFNLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksZUFBZSxFQUFFLENBQUM7WUFDbEIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO1NBQU0sSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQ3RELE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7U0FBTSxJQUFJLGdCQUFnQixHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQzdELE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO1NBQU0sSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDcEUsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO1NBQU0sSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQzNFLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7U0FBTSxDQUFDO1FBQ0osTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQy9DLENBQUM7SUFDRCxLQUFLLElBQUksT0FBTyxDQUFDO0lBQ2pCLGdCQUFnQixJQUFJLE9BQU8sQ0FBQztJQUM1QixJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ1osV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNwSCxDQUFDO0FBakVELG9DQWlFQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLEtBQXlCLEVBQUUsZ0JBQXlCLEVBQUUsU0FBbUIsRUFBRSxlQUF5QjtJQUNuSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNaLE9BQU8sR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELGdCQUFnQixHQUFHLGdCQUFnQixhQUFoQixnQkFBZ0IsY0FBaEIsZ0JBQWdCLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2RCxxRUFBcUU7SUFDckUsOEVBQThFO0lBQzlFLDJEQUEyRDtJQUMzRCw2RkFBNkY7SUFDN0Ysb0dBQW9HO0lBQ3BHLHNHQUFzRztJQUN0RyxzR0FBc0c7SUFDdEcsaURBQWlEO0lBQ2pELE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUMvQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksZUFBZSxFQUFFLENBQUM7WUFDbEIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO1NBQU0sSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQ3RELE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7U0FBTSxJQUFJLGdCQUFnQixHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQzdELE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO1NBQU0sQ0FBQztRQUNKLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUNELEtBQUssSUFBSSxPQUFPLENBQUM7SUFDakIsZ0JBQWdCLElBQUksT0FBTyxDQUFDO0lBRTVCLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEMsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNwSCxDQUFDO0FBeENELGdEQXdDQztBQUVELGdDQUFnQztBQUNoQyxTQUFnQixjQUFjLENBQUMsSUFBWTtJQUN2QyxTQUFTLENBQUMsQ0FBQyxDQUFTO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsOEJBQThCO0lBQzFELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztJQUMxRSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7QUFDdkcsQ0FBQztBQWJELHdDQWFDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBWTtJQUMvQyxTQUFTLENBQUMsQ0FBQyxDQUFTO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQyxJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRWxFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsa0JBQWtCLElBQUksY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtJQUMxRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3JHLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUN2RyxDQUFDO0FBdkJELHdEQXVCQztBQUdELDRFQUE0RTtBQUM1RSxNQUFNLHFCQUFxQixHQUF3QztJQUMvRCxjQUFjO0lBQ2QsR0FBRyxFQUFFLEtBQUs7SUFFVixzQkFBc0I7SUFDdEIsS0FBSyxFQUFFLEtBQUssRUFBTSxnQ0FBZ0M7SUFDbEQsS0FBSyxFQUFFLEtBQUssRUFBTSxnQ0FBZ0M7SUFDbEQsS0FBSyxFQUFFLEtBQUssRUFBTSxpQ0FBaUM7SUFDbkQsS0FBSyxFQUFFLEtBQUssRUFBTSxpQ0FBaUM7SUFDbkQsS0FBSyxFQUFFLEtBQUssRUFBTSxnQ0FBZ0M7SUFFbEQscUJBQXFCO0lBQ3JCLEtBQUssRUFBRSxLQUFLLEVBQU0sZ0NBQWdDO0lBQ2xELE1BQU0sRUFBRSxNQUFNLEVBQUksdUNBQXVDO0lBRXpELHlCQUF5QjtJQUN6QixNQUFNLEVBQUUsS0FBSyxFQUFLLDhCQUE4QjtJQUNoRCxNQUFNLEVBQUUsS0FBSyxFQUFLLDhCQUE4QjtJQUNoRCxNQUFNLEVBQUUsS0FBSyxFQUFLLGlDQUFpQztJQUNuRCxNQUFNLEVBQUUsTUFBTSxFQUFJLDhDQUE4QztJQUNoRSxNQUFNLEVBQUUsTUFBTSxFQUFJLDRDQUE0QztDQUNqRSxDQUFDO0FBR0YsbUNBQW1DO0FBQ25DLFNBQWdCLHdCQUF3QixDQUFDLElBQVk7SUFDakQsU0FBUyxDQUFDLENBQUMsQ0FBUztRQUNoQixPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNuQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFDLElBQUksa0JBQWtCLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFbEUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxrQkFBa0IsSUFBSSxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUNELGtHQUFrRztJQUNsRyxJQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRXJELHlEQUF5RDtJQUN6RCxJQUFJLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQiw0QkFBNEI7UUFDNUIsSUFBSSxVQUFVLEdBQUcscUJBQXFCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4RCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELGNBQWMsR0FBRyxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVELE9BQU8sR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxrQkFBa0IsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUM1RyxDQUFDO0FBbkNELDREQW1DQztBQUVELHlDQUF5QztBQUN6QyxTQUFnQixrQkFBa0IsQ0FBQyxJQUFZO0lBQzNDLFNBQVMsQ0FBQyxDQUFDLENBQVM7UUFDaEIsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyw4QkFBOEI7SUFDMUQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDcEUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUM3SixDQUFDO0FBZEQsZ0RBY0M7QUFFRCx5REFBeUQ7QUFDekQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBWTtJQUMvQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzNCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzVFLENBQUM7QUFSRCx3REFRQztBQUVELGlCQUFpQjtBQUNqQixTQUFnQixVQUFVLENBQUMsSUFBWTtJQUNuQyxTQUFTLENBQUMsQ0FBQyxDQUFTO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDdkYsQ0FBQztBQU5ELGdDQU1DO0FBRUQseUNBQXlDO0FBQ3pDLFNBQWdCLGFBQWEsQ0FBQyxLQUFhO0lBQ3ZDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNyQyx5RkFBeUY7SUFDekYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQy9DLENBQUM7QUFKRCxzQ0FJQzs7Ozs7OztBQ3JXRCxTQUFnQixlQUFlLENBQUMsT0FBZTtJQUkzQyw2Q0FBNkM7SUFDN0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsMENBQTBDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUVsRyxNQUFNLGNBQWMsR0FBRyxpRUFBaUUsQ0FBQztJQUN6RixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTVDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0QsMEdBQTBHO0lBQzFHLHFFQUFxRTtJQUNyRSxTQUFTLE1BQU0sQ0FBQyxHQUFXO1FBQ3ZCLElBQUksQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLFdBQU0sQ0FBQztZQUNMLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDeEIsTUFBTTtRQUNWLENBQUM7UUFDRCxhQUFhLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQy9CLGFBQWEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQWMsQ0FBQztRQUV6RCw4Q0FBOEM7UUFDOUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFFeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUFDLFdBQU0sQ0FBQztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ25ELENBQUM7QUFDTCxDQUFDO0FBaERELDBDQWdEQztBQUNELFNBQVMsY0FBYyxDQUFDLFFBQWdCO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLGtFQUFrRSxDQUFDO0lBQ3BGLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRFLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxHQUFzQjtRQUNsRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLFlBQXFCLENBQUM7UUFFMUIsR0FBRyxDQUFDO1lBQ0EsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFDRCxZQUFZLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDekIsTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDekIsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNmLENBQUMsUUFBUSxZQUFZLEVBQUU7UUFFdkIsTUFBTSxZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLE1BQU0sQ0FBQyxDQUFDO1FBQ2QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sTUFBTSxHQUFvQixFQUFFLENBQUM7SUFDbkMsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUV2QixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNSLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLFNBQVM7UUFDYixDQUFDO1FBRUQsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsU0FBUztZQUVyQixNQUFNLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUN6QixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFFdkIsT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUVELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLFNBQVM7WUFFckMsZUFBZSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxXQUFXLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLFlBQVksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsY0FBYyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osY0FBYzthQUNqQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsYUFBYSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFDRCxTQUFnQixzQkFBc0IsQ0FBQyxTQUFvQjtJQUN2RCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSTtRQUNKLFFBQVEsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7S0FDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSixNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBELE9BQU87UUFDSCxPQUFPO1FBQ1AsUUFBUTtLQUNYLENBQUM7QUFDTixDQUFDO0FBWkQsd0RBWUM7QUFFRCxTQUFnQix3QkFBd0IsQ0FBQyxVQUErQixFQUFFLFdBQWdDO0lBQ3RHLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFFcEQsa0JBQWtCO0lBQ2xCLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWhELDRDQUE0QztJQUM1QyxLQUFLLE1BQU0sT0FBTyxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNyQixHQUFHLE9BQU87WUFDVixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsR0FBRyxpQkFBaUI7U0FDdkQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7QUFiRCw0REFhQztBQUVELFNBQWdCLDJCQUEyQixDQUFDLFVBQStCO0lBQ3ZFLE1BQU0sUUFBUSxHQUFHLGtFQUFrRSxDQUFDO0lBRXBGLFNBQVMsU0FBUyxDQUFDLEtBQWE7UUFDNUIsNkJBQTZCO1FBQzdCLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVuRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDO1lBQ0EsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ1osS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDO1lBQ0QsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUVwQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLE1BQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFELElBQUksQ0FBQyxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEMsT0FBTyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDN0MsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsK0JBQStCO0lBQy9CLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDdEIsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNyQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFFdkIsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLElBQUksV0FBVyxHQUFhLEVBQUUsQ0FBQztJQUUvQixLQUFLLE1BQU0sT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksT0FBTyxDQUFDLGFBQWEsR0FBRyxXQUFXLEVBQUUsQ0FBQztZQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDM0QsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNqQixhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxNQUFNLE9BQU8sR0FBRztZQUNaLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7WUFDaEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUNyRCxDQUFDO1FBRUYsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDcEMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDeEMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDcEMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUM1QixDQUFDO0FBQ04sQ0FBQztBQTdFRCxrRUE2RUM7QUFDRCxTQUFnQiwwQkFBMEIsQ0FBQyxTQUFvQjtJQUMzRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELHNHQUFzRztJQUN0RyxPQUFPLElBQUksR0FBRyxtREFBbUQsTUFBTSxFQUFFLENBQUM7QUFDOUUsQ0FBQztBQUxELGdFQUtDOzs7Ozs7QUNwUUQsZ0dBQWdHO0FBQ2hHLDJGQUEyRjtBQUMzRiw4Q0FBaUQ7QUFRakQsZ0dBQWdHO0FBQ2hHLHVGQUF1RjtBQUN2RixJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsRUFBRSxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQTZCLENBQUM7SUFDbEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBZ0MsRUFBRSxFQUFFO1FBQy9ELE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDO1lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBQSxtQkFBVyxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QyxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtnQkFDM0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUN4QyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07Z0JBQ2xCLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQVM7Z0JBQ3RDLFVBQVU7YUFDYixDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ1gsTUFBTSxPQUFPLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7QUNwQ0Qsa0dBQWtHO0FBQ2xHLGtFQUFrRTtBQUNsRSxxQkFBbUI7QUFDbkIsd0JBQXNCO0FBQ3RCLHlCQUF1QjtBQUN2Qix1QkFBcUI7QUFDckIsaUNBQStCO0FBQy9CLHdCQUFzQjtBQUN0Qix5QkFBdUI7QUFDdkIsMEJBQXdCO0FBQ3hCLHVCQUFxQjtBQUNyQixzQkFBb0I7QUFDcEIsd0JBQXNCO0FBQ3RCLHNCQUFvQjtBQUNwQiwyQkFBeUI7QUFDekIsMkJBQXlCO0FBQ3pCLDRCQUEwQjtBQUMxQix3QkFBc0I7QUFDdEIscUJBQW1CO0FBQ25CLHdCQUFzQjtBQUV0Qix1Q0FBMkU7QUFBbEUsdUdBQUEsV0FBVyxPQUFBO0FBQUUsMEdBQUEsY0FBYyxPQUFBO0FBQUUsNEdBQUEsZ0JBQWdCLE9BQUE7Ozs7OztBQ3JCdEQsNENBQWlEO0FBQ2pELGtEQUE2QztBQUM3Qyx5Q0FBOEM7QUFFOUMsK0ZBQStGO0FBQy9GLDRGQUE0RjtBQUM1RixJQUFBLDJCQUFnQixFQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUEseUJBQVUsRUFBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFBLDZCQUFpQixFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztBQ0Q5RyxTQUFTLFlBQVksQ0FBQyxDQUE0QjtJQUM5QyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDbkIsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUMvQyxDQUFDO0FBQ0QsU0FBZ0IsV0FBVyxDQUFDLENBQTRCLEVBQUUsQ0FBNEI7SUFDbEYsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkYsQ0FBQztBQUpELGtDQUlDO0FBRUQsNEVBQTRFO0FBQzVFLFNBQWdCLGlCQUFpQixDQUFDLFFBQTBCO0lBQ3hELE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUNqRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQztJQUNwRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQztJQUNsRSxNQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO0lBQ25DLEtBQUssTUFBTSxPQUFPLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxNQUE4QyxDQUFDO1FBQ25ELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN4QixLQUFLLE1BQU0sSUFBSSxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUM7Z0JBQ2YsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU07WUFBRSxTQUFTO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQW5CRCw4Q0FtQkM7Ozs7Ozs7QUNyQ0QsK0ZBQStGO0FBQy9GLG1GQUFtRjtBQUNuRixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUNyQyx5RUFBeUU7QUFDekUsbUdBQW1HO0FBQ25HLHlGQUF5RjtBQUN6RixTQUFnQixVQUFVLENBQ3RCLFFBQTBCLEVBQzFCLE1BQTJCLEVBQzNCLFVBQTJCO0lBRTNCLE1BQU0sSUFBSSxHQUFHLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQ2hGLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxRQUFRO1dBQzdCLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVwRCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztJQUNuRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDRCwwRkFBMEY7SUFDMUYsc0NBQXNDO0lBQ3RDLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsU0FBUztZQUFFLFNBQVM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDdkIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQXRCRCxnQ0FzQkM7Ozs7Ozs7QUM5QkQsa0dBQWtHO0FBQ2xHLG1GQUFtRjtBQUNuRixNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztBQUVqRCxTQUFnQixnQkFBZ0IsQ0FBQyxFQUFVLEVBQUUsUUFBb0I7SUFDN0QsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUxELDRDQUtDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEVBQVU7SUFDbEMsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixFQUFFLGlCQUFpQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFORCxrQ0FNQztBQUVELFNBQWdCLGNBQWM7SUFDMUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCx3Q0FFQzs7Ozs7O0FDdkJELDRDQUEyQztBQUUzQyxrREFBNkM7QUFDN0MseUNBQThDO0FBRTlDLG1HQUFtRztBQUNuRyx5R0FBeUc7QUFDekcscUdBQXFHO0FBQ3JHLDRGQUE0RjtBQUM1RixvREFBb0Q7QUFDcEQsSUFBQSwyQkFBZ0IsRUFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFtQixFQUFFO0lBQzlELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUM7SUFFbkQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2pELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBR3BFLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUM3QixLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQUUsU0FBUztRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBQ0QsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqQixLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTO2dCQUFFLFNBQVM7WUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxNQUFNLEdBQW9CLEVBQUUsQ0FBQztJQUNuQyxLQUFLLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBd0IsQ0FBQztRQUM3QixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN0QixNQUFNLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBQSx1QkFBVyxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7a0JBQ3hDLGNBQWMsR0FBRyxDQUFDLENBQUMsUUFBUTtrQkFDM0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksS0FBSyxHQUFHLFNBQVMsRUFBRSxDQUFDO2dCQUNwQixTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLElBQUk7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNELE9BQU8sSUFBQSx5QkFBVSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLEdBQUcsQ0FBQyxDQUFVLEVBQUUsUUFBZ0I7SUFDckMsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDdEUsQ0FBQzs7Ozs7O0FDckRELDRDQUEyQztBQUUzQyxrREFBNkM7QUFDN0MseUNBQThDO0FBRTlDLDhGQUE4RjtBQUM5RixxR0FBcUc7QUFDckcsMEZBQTBGO0FBQzFGLGtHQUFrRztBQUNsRywrQkFBK0I7QUFDL0IsSUFBQSwyQkFBZ0IsRUFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFtQixFQUFFO0lBQy9ELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFbEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFakMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSTtRQUFFLElBQUksQ0FBQyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVTtZQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFHN0UsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO0lBQzdCLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRCxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7Z0JBQUUsU0FBUztZQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO0lBQ25DLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsaUVBQWlFO1FBQ2pFLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkYsU0FBUztRQUNiLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLFNBQVM7UUFDbkMsSUFBSSxJQUF3QixDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLE1BQU0sS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFBLHVCQUFXLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztrQkFDeEMsY0FBYyxHQUFHLENBQUMsQ0FBQyxRQUFRO2tCQUMzQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFLENBQUM7Z0JBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDRCxPQUFPLElBQUEseUJBQVUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxHQUFHLENBQUMsQ0FBVSxFQUFFLFFBQWdCO0lBQ3JDLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ3RFLENBQUM7Ozs7OztBQzdERCw0Q0FBMkM7QUFFM0Msa0RBQTZDO0FBQzdDLHlDQUE4QztBQUU5QyxtR0FBbUc7QUFDbkcsZ0dBQWdHO0FBQ2hHLG9HQUFvRztBQUNwRyw4RUFBOEU7QUFDOUUsSUFBQSwyQkFBZ0IsRUFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFtQixFQUFFO0lBQzdELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUM7SUFFbkQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFakMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0QsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUdsQyxNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFDN0IsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztZQUFFLFNBQVM7UUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNELElBQUksY0FBYyxFQUFFLENBQUM7UUFDakIsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRSxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFcEMsSUFBSSxJQUF3QixDQUFDO0lBQzdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUN6QixLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFBLHVCQUFXLEVBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztjQUM3QyxjQUFjLEdBQUcsQ0FBQyxDQUFDLFFBQVE7Y0FDM0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFHLFNBQVMsRUFBRSxDQUFDO1lBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRXJCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQztJQUNwQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsT0FBTyxJQUFBLHlCQUFVLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsR0FBRyxDQUFDLENBQVUsRUFBRSxRQUFnQjtJQUNyQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN0RSxDQUFDOzs7Ozs7QUN2REQsNENBQTJDO0FBRTNDLGtEQUE2QztBQUM3Qyx5Q0FBOEM7QUFFOUMsMkZBQTJGO0FBQzNGLGtHQUFrRztBQUNsRyxrR0FBa0c7QUFDbEcsbUdBQW1HO0FBQ25HLG1DQUFtQztBQUNuQyxJQUFBLDJCQUFnQixFQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBbUIsRUFBRTs7SUFDdkUsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU5QyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDakQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDN0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUVqQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzRCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBRWxDLDBGQUEwRjtJQUMxRixNQUFNLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBQ3BELEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBQ3hDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBQSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxtQ0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUNELEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBQ3hDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBQSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxtQ0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUEseUJBQVUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXZFLElBQUksT0FBMkIsQ0FBQztJQUNoQyxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFDL0IsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsZUFBZSxFQUFFLENBQUM7WUFBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUFDLENBQUM7SUFDcEUsQ0FBQztJQUdELE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBQSx1QkFBVyxFQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7VUFDNUQsY0FBYyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJFLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBZSxFQUFzQixFQUFFO1FBQ2pELElBQUksSUFBd0IsQ0FBQztRQUFDLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN2RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUM7Z0JBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQUMsQ0FBQztRQUFDLENBQUM7UUFDOUYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQztTQUN4RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUM7YUFDdEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7YUFDdEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDRCxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sSUFBQSx5QkFBVSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbEQsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RixPQUFPLElBQUEseUJBQVUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxHQUFHLENBQUMsQ0FBVSxFQUFFLFFBQWdCO0lBQ3JDLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ3RFLENBQUM7Ozs7OztBQ3ZFRCw0Q0FBMkM7QUFFM0Msa0RBQTZDO0FBQzdDLHlDQUE4QztBQUU5QyxvR0FBb0c7QUFDcEcsOEZBQThGO0FBQzlGLHFHQUFxRztBQUNyRyxvR0FBb0c7QUFDcEcsa0dBQWtHO0FBQ2xHLDRDQUE0QztBQUM1QyxFQUFFO0FBQ0YsNEZBQTRGO0FBQzVGLDJFQUEyRTtBQUMzRSxJQUFBLDJCQUFnQixFQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQW1CLEVBQUU7SUFDOUQsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV4QyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDakQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDN0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNqQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFHM0QsTUFBTSxXQUFXLEdBQVcsTUFBTTtTQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQztTQUN0QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxD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LEVBQUU7O0lBQzVELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkIsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7SUFDMUYsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxpREFBaUQ7SUFDakcsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7SUFFdkYsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFFdkUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFD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SSxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUN6QixNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsNEVBQTRFO1FBQzVFLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHVCQUFXLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0RSxNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQVUsRUFBRTs7WUFDbkQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLElBQUksR0FBRyxJQUFBLHVCQUFXLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFBLHVCQUFXLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDL0MscUVBQXFFO2dCQUNyRSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsbUNBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxJQUFJ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QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDMUIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDM0QsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsS0FBSyxNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUFDLElBQUksSUFBQSx1QkFBVyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQztnQkFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUN0RyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFD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