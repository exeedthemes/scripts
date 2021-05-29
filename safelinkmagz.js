var CryptoJS=CryptoJS||function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=n.WordArray=i.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;i>o;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else if(r.length>65535)for(var o=0;i>o;o+=4)e[n+o>>>2]=r[o>>>2];else e.push.apply(e,r);return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;e>n;n+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),s=r.enc={},a=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new o.init(r,e/2)}},c=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new o.init(r,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,s=this.blockSize,a=4*s,c=i/a;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var f=c*s,u=t.min(4*f,i);if(f){for(var h=0;f>h;h+=s)this._doProcessBlock(n,h);var p=n.splice(0,f);r.sigBytes-=u}return new o.init(p,u)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(n.Hasher=u.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new h.HMAC.init(t,r).finalize(e)}}}),r.algo={});return r}(Math);!function(){{var t=CryptoJS,e=t.lib,r=e.WordArray,n=t.enc;n.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;r>o;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,f=s<<16|a<<8|c,u=0;4>u&&r>o+.75*u;u++)i.push(n.charAt(f>>>6*(3-u)&63));var h=n.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(t){var e=t.length,n=this._map,i=n.charAt(64);if(i){var o=t.indexOf(i);-1!=o&&(e=o)}for(var s=[],a=0,c=0;e>c;c++)if(c%4){var f=n.indexOf(t.charAt(c-1))<<c%4*2,u=n.indexOf(t.charAt(c))>>>6-c%4*2;s[a>>>2]|=(f|u)<<24-a%4*8,a++}return r.create(s,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}}(),function(t){function e(t,e,r,n,i,o,s){var a=t+(e&r|~e&n)+i+s;return(a<<o|a>>>32-o)+e}function r(t,e,r,n,i,o,s){var a=t+(e&n|r&~n)+i+s;return(a<<o|a>>>32-o)+e}function n(t,e,r,n,i,o,s){var a=t+(e^r^n)+i+s;return(a<<o|a>>>32-o)+e}function i(t,e,r,n,i,o,s){var a=t+(r^(e|~n))+i+s;return(a<<o|a>>>32-o)+e}var o=CryptoJS,s=o.lib,a=s.WordArray,c=s.Hasher,f=o.algo,u=[];!function(){for(var e=0;64>e;e++)u[e]=4294967296*t.abs(t.sin(e+1))|0}();var h=f.MD5=c.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,o){for(var s=0;16>s;s++){var a=o+s,c=t[a];t[a]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var f=this._hash.words,h=t[o+0],p=t[o+1],l=t[o+2],d=t[o+3],v=t[o+4],y=t[o+5],g=t[o+6],_=t[o+7],m=t[o+8],S=t[o+9],B=t[o+10],x=t[o+11],k=t[o+12],C=t[o+13],z=t[o+14],w=t[o+15],E=f[0],D=f[1],M=f[2],b=f[3];E=e(E,D,M,b,h,7,u[0]),b=e(b,E,D,M,p,12,u[1]),M=e(M,b,E,D,l,17,u[2]),D=e(D,M,b,E,d,22,u[3]),E=e(E,D,M,b,v,7,u[4]),b=e(b,E,D,M,y,12,u[5]),M=e(M,b,E,D,g,17,u[6]),D=e(D,M,b,E,_,22,u[7]),E=e(E,D,M,b,m,7,u[8]),b=e(b,E,D,M,S,12,u[9]),M=e(M,b,E,D,B,17,u[10]),D=e(D,M,b,E,x,22,u[11]),E=e(E,D,M,b,k,7,u[12]),b=e(b,E,D,M,C,12,u[13]),M=e(M,b,E,D,z,17,u[14]),D=e(D,M,b,E,w,22,u[15]),E=r(E,D,M,b,p,5,u[16]),b=r(b,E,D,M,g,9,u[17]),M=r(M,b,E,D,x,14,u[18]),D=r(D,M,b,E,h,20,u[19]),E=r(E,D,M,b,y,5,u[20]),b=r(b,E,D,M,B,9,u[21]),M=r(M,b,E,D,w,14,u[22]),D=r(D,M,b,E,v,20,u[23]),E=r(E,D,M,b,S,5,u[24]),b=r(b,E,D,M,z,9,u[25]),M=r(M,b,E,D,d,14,u[26]),D=r(D,M,b,E,m,20,u[27]),E=r(E,D,M,b,C,5,u[28]),b=r(b,E,D,M,l,9,u[29]),M=r(M,b,E,D,_,14,u[30]),D=r(D,M,b,E,k,20,u[31]),E=n(E,D,M,b,y,4,u[32]),b=n(b,E,D,M,m,11,u[33]),M=n(M,b,E,D,x,16,u[34]),D=n(D,M,b,E,z,23,u[35]),E=n(E,D,M,b,p,4,u[36]),b=n(b,E,D,M,v,11,u[37]),M=n(M,b,E,D,_,16,u[38]),D=n(D,M,b,E,B,23,u[39]),E=n(E,D,M,b,C,4,u[40]),b=n(b,E,D,M,h,11,u[41]),M=n(M,b,E,D,d,16,u[42]),D=n(D,M,b,E,g,23,u[43]),E=n(E,D,M,b,S,4,u[44]),b=n(b,E,D,M,k,11,u[45]),M=n(M,b,E,D,w,16,u[46]),D=n(D,M,b,E,l,23,u[47]),E=i(E,D,M,b,h,6,u[48]),b=i(b,E,D,M,_,10,u[49]),M=i(M,b,E,D,z,15,u[50]),D=i(D,M,b,E,y,21,u[51]),E=i(E,D,M,b,k,6,u[52]),b=i(b,E,D,M,d,10,u[53]),M=i(M,b,E,D,B,15,u[54]),D=i(D,M,b,E,p,21,u[55]),E=i(E,D,M,b,m,6,u[56]),b=i(b,E,D,M,w,10,u[57]),M=i(M,b,E,D,g,15,u[58]),D=i(D,M,b,E,C,21,u[59]),E=i(E,D,M,b,v,6,u[60]),b=i(b,E,D,M,x,10,u[61]),M=i(M,b,E,D,l,15,u[62]),D=i(D,M,b,E,S,21,u[63]),f[0]=f[0]+E|0,f[1]=f[1]+D|0,f[2]=f[2]+M|0,f[3]=f[3]+b|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(n/4294967296),s=n;r[(i+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[(i+64>>>9<<4)+14]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,f=0;4>f;f++){var u=c[f];c[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var t=c.clone.call(this);return t._hash=this._hash.clone(),t}});o.MD5=c._createHelper(h),o.HmacMD5=c._createHmacHelper(h)}(Math),function(){var t=CryptoJS,e=t.lib,r=e.Base,n=e.WordArray,i=t.algo,o=i.MD5,s=i.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=r.hasher.create(),o=n.create(),s=o.words,a=r.keySize,c=r.iterations;s.length<a;){f&&i.update(f);var f=i.update(t).finalize(e);i.reset();for(var u=1;c>u;u++)f=i.finalize(f),i.reset();o.concat(f)}return o.sigBytes=4*a,o}});t.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,n=r.Base,i=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc,a=(s.Utf8,s.Base64),c=e.algo,f=c.EvpKDF,u=r.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?x:m}return function(e){return{encrypt:function(r,n,i){return t(n).encrypt(e,r,n,i)},decrypt:function(r,n,i){return t(n).decrypt(e,r,n,i)}}}}()}),h=(r.StreamCipher=u.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),e.mode={}),p=r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),l=h.CBC=function(){function e(e,r,n){var i=this._iv;if(i){var o=i;this._iv=t}else var o=this._prevBlock;for(var s=0;n>s;s++)e[r+s]^=o[s]}var r=p.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize;e.call(this,t,r,i),n.encryptBlock(t,r),this._prevBlock=t.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize,o=t.slice(r,r+i);n.decryptBlock(t,r),e.call(this,t,r,i),this._prevBlock=o}}),r}(),d=e.pad={},v=d.Pkcs7={pad:function(t,e){for(var r=4*e,n=r-t.sigBytes%r,o=n<<24|n<<16|n<<8|n,s=[],a=0;n>a;a+=4)s.push(o);var c=i.create(s,n);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},y=(r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:l,padding:v}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,r=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=r.createEncryptor;else{var n=r.createDecryptor;this._minBufferSize=1}this._mode=n.call(r,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{var e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),g=e.format={},_=g.OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;if(r)var n=i.create([1398893684,1701076831]).concat(r).concat(e);else var n=e;return n.toString(a)},parse:function(t){var e=a.parse(t),r=e.words;if(1398893684==r[0]&&1701076831==r[1]){var n=i.create(r.slice(2,4));r.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:n})}},m=r.SerializableCipher=n.extend({cfg:n.extend({format:_}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n),o=i.finalize(e),s=i.cfg;return y.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=t.createDecryptor(r,n).finalize(e.ciphertext);return i},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),S=e.kdf={},B=S.OpenSSL={execute:function(t,e,r,n){n||(n=i.random(8));var o=f.create({keySize:e+r}).compute(t,n),s=i.create(o.words.slice(e),4*r);return o.sigBytes=4*e,y.create({key:o,iv:s,salt:n})}},x=r.PasswordBasedCipher=m.extend({cfg:m.cfg.extend({kdf:B}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=n.kdf.execute(r,t.keySize,t.ivSize);n.iv=i.iv;var o=m.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(r,t.keySize,t.ivSize,e.salt);n.iv=i.iv;var o=m.decrypt.call(this,t,e,i.key,n);return o}})}(),function(){var t=CryptoJS,e=t.lib,r=e.BlockCipher,n=t.algo,i=[],o=[],s=[],a=[],c=[],f=[],u=[],h=[],p=[],l=[];!function(){for(var t=[],e=0;256>e;e++)t[e]=128>e?e<<1:e<<1^283;for(var r=0,n=0,e=0;256>e;e++){var d=n^n<<1^n<<2^n<<3^n<<4;d=d>>>8^255&d^99,i[r]=d,o[d]=r;var v=t[r],y=t[v],g=t[y],_=257*t[d]^16843008*d;s[r]=_<<24|_>>>8,a[r]=_<<16|_>>>16,c[r]=_<<8|_>>>24,f[r]=_;var _=16843009*g^65537*y^257*v^16843008*r;u[d]=_<<24|_>>>8,h[d]=_<<16|_>>>16,p[d]=_<<8|_>>>24,l[d]=_,r?(r=v^t[t[t[g^v]]],n^=t[t[n]]):r=n=1}}();var d=[0,1,2,4,8,16,32,64,128,27,54],v=n.AES=r.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,n=this._nRounds=r+6,o=4*(n+1),s=this._keySchedule=[],a=0;o>a;a++)if(r>a)s[a]=e[a];else{var c=s[a-1];a%r?r>6&&a%r==4&&(c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c]):(c=c<<8|c>>>24,c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c],c^=d[a/r|0]<<24),s[a]=s[a-r]^c}for(var f=this._invKeySchedule=[],v=0;o>v;v++){var a=o-v;if(v%4)var c=s[a];else var c=s[a-4];f[v]=4>v||4>=a?c:u[i[c>>>24]]^h[i[c>>>16&255]]^p[i[c>>>8&255]]^l[i[255&c]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,a,c,f,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,u,h,p,l,o);var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,o,s,a){for(var c=this._nRounds,f=t[e]^r[0],u=t[e+1]^r[1],h=t[e+2]^r[2],p=t[e+3]^r[3],l=4,d=1;c>d;d++){var v=n[f>>>24]^i[u>>>16&255]^o[h>>>8&255]^s[255&p]^r[l++],y=n[u>>>24]^i[h>>>16&255]^o[p>>>8&255]^s[255&f]^r[l++],g=n[h>>>24]^i[p>>>16&255]^o[f>>>8&255]^s[255&u]^r[l++],_=n[p>>>24]^i[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[l++];f=v,u=y,h=g,p=_}var v=(a[f>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&p])^r[l++],y=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[p>>>8&255]<<8|a[255&f])^r[l++],g=(a[h>>>24]<<24|a[p>>>16&255]<<16|a[f>>>8&255]<<8|a[255&u])^r[l++],_=(a[p>>>24]<<24|a[f>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^r[l++];t[e]=v,t[e+1]=y,t[e+2]=g,t[e+3]=_},keySize:8});t.AES=r._createHelper(v)}();var aesCrypto={};!function(t){"use strict";t.formatter={prefix:"",stringify:function(t){var r=this.prefix;return r+=t.salt.toString(),r+=t.ciphertext.toString()},parse:function(t){var r=CryptoJS.lib.CipherParams.create({}),e=this.prefix.length;return 0!==t.indexOf(this.prefix)?r:(r.ciphertext=CryptoJS.enc.Hex.parse(t.substring(16+e)),r.salt=CryptoJS.enc.Hex.parse(t.substring(e,16+e)),r)}},t.encrypt=function(r,e){try{return CryptoJS.AES.encrypt(r,e,{format:t.formatter}).toString()}catch(n){return""}},t.decrypt=function(r,e){try{var n=CryptoJS.AES.decrypt(r,e,{format:t.formatter});return n.toString(CryptoJS.enc.Utf8)}catch(i){return""}}}(aesCrypto);
function convertstr(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
}
var aesCrypto = {};
! function (t) {
    "use strict";
    t.formatter = {
        prefix: "",
        stringify: function (t) {
            var r = this.prefix;
            return r += t.salt.toString(), r += t.ciphertext.toString()
        },
        parse: function (t) {
            var r = CryptoJS.lib.CipherParams.create({}),
                e = this.prefix.length;
            return 0 !== t.indexOf(this.prefix) ? r : (r.ciphertext = CryptoJS.enc.Hex.parse(t.substring(16 + e)), r.salt = CryptoJS.enc.Hex.parse(t.substring(e, 16 + e)), r)
        }
    }, t.encrypt = function (r, e) {
        try {
            return CryptoJS.AES.encrypt(r, e, {
                format: t.formatter
            }).toString()
        } catch (n) {
            return ""
        }
    }, t.decrypt = function (r, e) {
        try {
            var n = CryptoJS.AES.decrypt(r, e, {
                format: t.formatter
            });
            return n.toString(CryptoJS.enc.Utf8)
        } catch (i) {
            return ""
        }
    }
}(aesCrypto);
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory(global):typeof define==="function"&&define.amd?define(factory):factory(global)})(typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64;var version="2.5.1";var buffer;if(typeof module!=="undefined"&&module.exports){try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=undefined}}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64tab=function(bin){var t={};for(var i=0,l=bin.length;i<l;i++)t[bin.charAt(i)]=i;return t}(b64chars);var fromCharCode=String.fromCharCode;var cb_utob=function(c){if(c.length<2){var cc=c.charCodeAt(0);return cc<128?c:cc<2048?fromCharCode(192|cc>>>6)+fromCharCode(128|cc&63):fromCharCode(224|cc>>>12&15)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}else{var cc=65536+(c.charCodeAt(0)-55296)*1024+(c.charCodeAt(1)-56320);return fromCharCode(240|cc>>>18&7)+fromCharCode(128|cc>>>12&63)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}};var re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;var utob=function(u){return u.replace(re_utob,cb_utob)};var cb_encode=function(ccc){var padlen=[0,2,1][ccc.length%3],ord=ccc.charCodeAt(0)<<16|(ccc.length>1?ccc.charCodeAt(1):0)<<8|(ccc.length>2?ccc.charCodeAt(2):0),chars=[b64chars.charAt(ord>>>18),b64chars.charAt(ord>>>12&63),padlen>=2?"=":b64chars.charAt(ord>>>6&63),padlen>=1?"=":b64chars.charAt(ord&63)];return chars.join("")};var btoa=global.btoa?function(b){return global.btoa(b)}:function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)};var _encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(u){return(u.constructor===buffer.constructor?u:buffer.from(u)).toString("base64")}:function(u){return(u.constructor===buffer.constructor?u:new buffer(u)).toString("base64")}:function(u){return btoa(utob(u))};var encode=function(u,urisafe){return!urisafe?_encode(String(u)):_encode(String(u)).replace(/[+\/]/g,function(m0){return m0=="+"?"-":"_"}).replace(/=/g,"")};var encodeURI=function(u){return encode(u,true)};var re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=(7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3),offset=cp-65536;return fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320);case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var cb_decode=function(cccc){var len=cccc.length,padlen=len%4,n=(len>0?b64tab[cccc.charAt(0)]<<18:0)|(len>1?b64tab[cccc.charAt(1)]<<12:0)|(len>2?b64tab[cccc.charAt(2)]<<6:0)|(len>3?b64tab[cccc.charAt(3)]:0),chars=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(n&255)];chars.length-=[0,0,2,1][padlen];return chars.join("")};var _atob=global.atob?function(a){return global.atob(a)}:function(a){return a.replace(/\S{1,4}/g,cb_decode)};var atob=function(a){return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g,""))};var _decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(a){return(a.constructor===buffer.constructor?a:buffer.from(a,"base64")).toString()}:function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(_atob(a))};var decode=function(a){return _decode(String(a).replace(/[-_]/g,function(m0){return m0=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};var noConflict=function(){var Base64=global.Base64;global.Base64=_Base64;return Base64};global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer};if(typeof Object.defineProperty==="function"){var noEnum=function(v){return{value:v,enumerable:false,writable:true,configurable:true}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)}));Object.defineProperty(String.prototype,"toBase64",noEnum(function(urisafe){return encode(this,urisafe)}));Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,true)}))}}if(global["Meteor"]){Base64=global.Base64}if(typeof module!=="undefined"&&module.exports){module.exports.Base64=global.Base64}else if(typeof define==="function"&&define.amd){define([],function(){return global.Base64})}return{Base64:global.Base64}});
var tLik = window.location.href;
tLik = tLik.replace("?m=0", "");
tLik = tLik.replace("%3D", "");
tLik = tLik.replace("%3D%3D", "");
tLik = tLik.replace("&m=1", "")
tLik = tLik.replace("?m=1", "");
tLik = tLik.replace("&m=0", "");
var SafeLingmagz_0x32fdb0 = function () {
    var _0x1dcba5 = {};
    _0x1dcba5.sbwHK = '1|5|3|0|2|' + '4';
    _0x1dcba5.yQHku = 'disabled';
    _0x1dcba5.uGxWu = 'true';
    _0x1dcba5.MsMwr = function (_0x5dfede, _0x46adb1) {
        return _0x5dfede === _0x46adb1;
    };
    _0x1dcba5.QJRpg = 'VCJrp';
    _0x1dcba5.yWTIR = function (_0x2720e4, _0x302b73) {
        return _0x2720e4 === _0x302b73;
    };
    _0x1dcba5['fWwEf'] = 'ZdXPA';
    var _0x110f38 = _0x1dcba5;
    var _0x5ec4e2 = true;
    return function (_0x11f486, _0x48f64b) {
        var _0x55ed61 = {};
        _0x55ed61.mxbyu = _0x110f38.sbwHK;
        _0x55ed61['mdndr'] = 'Copy';
        _0x55ed61.Tnzze = 'outputLink';
        _0x55ed61.OaBfq = _0x110f38.yQHku;
        _0x55ed61.MtzwO = _0x110f38.uGxWu;
        _0x55ed61.XvVPD = function (_0x2fc5b8, _0x48da0c) {
            return _0x110f38['MsMwr'](_0x2fc5b8, _0x48da0c);
        };
        _0x55ed61.webyk = _0x110f38.QJRpg;
        _0x55ed61['RVxNw'] = 'NAJGv';
        _0x55ed61['EUxSf'] = function (_0x2892fb, _0x2e660f) {
            return _0x110f38.yWTIR(_0x2892fb, _0x2e660f);
        };
        _0x55ed61.LruWQ = 'ZHGij';
        var _0x1f567c = _0x55ed61;
        if (_0x110f38.fWwEf === _0x110f38.fWwEf) {
            var _0x2c1cfc = _0x5ec4e2 ? function () {
                var _0x3a19de = {};
                _0x3a19de.wnKoM = _0x1f567c.mxbyu;
                _0x3a19de['flvCw'] = 'SelectAll';
                _0x3a19de.HKwRG = _0x1f567c.mdndr;
                _0x3a19de.ufviU = _0x1f567c['Tnzze'];
                _0x3a19de['Eccdw'] = _0x1f567c['OaBfq'];
                _0x3a19de.XfiuR = _0x1f567c.MtzwO;
                var _0x3c9856 = _0x3a19de;
                if (_0x1f567c.XvVPD(_0x1f567c.webyk, _0x1f567c['RVxNw'])) {
                    var _0x37a3fc = document['createElement']('a');
                    _0x37a3fc.target = click_target_button2;
                    _0x37a3fc.href = url_Halaman_Copy;
                    _0x37a3fc.click();
                } else {
                    if (_0x48f64b) {
                        if (_0x1f567c.EUxSf(_0x1f567c.LruWQ, _0x1f567c.LruWQ)) {
                            var _0x42947d = _0x48f64b.apply(_0x11f486, arguments);
                            _0x48f64b = null;
                            return _0x42947d;
                        } else {
                            var _0x5c5a90 = _0x3c9856.wnKoM.split('|');
                            var _0x39cf99 = 0x0;
                            while (true) {
                                switch (_0x5c5a90[_0x39cf99++]) {
                                case '0':
                                    document['execCommand'](_0x3c9856.flvCw);
                                    continue;
                                case '1':
                                    document['getElementById']('outputLink').removeAttribute('disabled');
                                    continue;
                                case '2':
                                    document['execCommand'](_0x3c9856['HKwRG']);
                                    continue;
                                case '3':
                                    document['getElementById']('outputLink').select();
                                    continue;
                                case '4':
                                    document.getElementById(_0x3c9856.ufviU)['setAttribute'](_0x3c9856.Eccdw, _0x3c9856.XfiuR);
                                    continue;
                                case '5':
                                    document.getElementById('outputLink').focus();
                                    continue;
                                }
                                break;
                            }
                        }
                    }
                }
            } : function () {};
            _0x5ec4e2 = true;
            return _0x2c1cfc;
        } else {
            var _0x180b05 = ambillinku3;
        }
    };
}();
var SafeLingmagz_0x3769ad = SafeLingmagz_0x32fdb0(this, function () {
    var _0x4b3836 = {};
    _0x4b3836.otSKL = 'nameFileCopy';
    _0x4b3836['BmRgv'] = 'SF=';
    _0x4b3836.taITS = 'OUmDd';
    _0x4b3836.FQMiW = 'gAzsf';
    _0x4b3836.xmEjN = 'return /" + this + \"/';
    _0x4b3836.TbwSo = '^([^ ]+( +' + '[^ ]+)+)+[' + '^ ]}';
    var _0xbb3b3c = _0x4b3836;
    var _0x55f5b7 = function () {
        if (_0xbb3b3c.taITS === _0xbb3b3c.FQMiW) {
            document.getElementById(_0xbb3b3c.otSKL).innerHTML = decryptAllUrl['split']('NF=')[0x1]['split'](_0xbb3b3c.BmRgv)[0x0];
        } else {
            var _0x2fb25f = _0x55f5b7['constructor'](_0xbb3b3c.xmEjN)().compile(_0xbb3b3c.TbwSo);
            return !_0x2fb25f.test(SafeLingmagz_0x3769ad);
        }
    };
    return _0x55f5b7();
});
SafeLingmagz_0x3769ad();
var NotifErorAktifasi = `\
<div id="` + 'pasteblog"' + `>\
<div cla` + 'ss="PanelG' + `enerate">\
` + "<div id='a" + 'reaGenerat' + `e'>\
<div>D` + 'omain Anda <b>' + window['location'].hostname + ('</b><span ' + "style='col" + 'or:red;font-weight:bold;\'> Belum Di Aktifasi</span' + `>.</div>\
<` + 'div>Silahkan Hubungi Developer Untuk Mengaktifkan Domain</div>\x0a<br/>\x0a<div style=' + '\'color:#00ff37;font-weight:bol' + "d;'>Contac" + 't Developer :</div>\x0a' + '<div><b>Whatsapp : <' + '/b>0838-1174-6714</d' + `iv>\
<div><` + 'b>E-mail :' + ' </b>abdiusu@gmail.com</div>\x0a<div><b>web : </b><a ' + "href='http" + 's://www.maskoding.com\' target=' + "'_blank'>w" + 'ww.maskoding.com</a>' + `</div>\
</d` + `iv>\
</div>` + '\x0a</div>\x0a');

function StatusNonActive(_0x1c82aa, _0x3f1fd1) {
    if (document['getElementById'](_0x1c82aa)) {
        document.getElementById(_0x1c82aa).innerHTML = _0x3f1fd1;
    };
};
var GetDataTemp = 'aktivasi linkmagz';
var direct_to_link = 'aktifasi-safelink.blogspot.com';
$.ajax({
    'url': '//' + direct_to_link + ('/feeds/posts/summary' + '/?alt=json-in-script&orderby=updated&max-results=9999'),
    'type': 'get',
    'dataType': 'jsonp',
    'success': function aku(_0x439137) {
        var _0x58f9f2 = {};
        _0x58f9f2['ENISt'] = function (_0xe32c21, _0x113e90) {
            return _0xe32c21 == _0x113e90;
        };
        _0x58f9f2['GNQQT'] = 'areaButtonHome';
        _0x58f9f2['HFcmO'] = 'areaButtonArtikel1';
        _0x58f9f2.dglvb = 'areaButtonArtikel2';
        _0x58f9f2.xDlSI = 'error Safelink!!, tidak ditemukan element DIV dengan tag id "areaButtonCopy"';
        _0x58f9f2['fiYjB'] = function (_0x55296e) {
            return _0x55296e();
        };
        _0x58f9f2.cjnsl = 'fnGoK';
        _0x58f9f2['xlSxV'] = function (_0xad6261, _0x273e40) {
            return _0xad6261 === _0x273e40;
        };
        _0x58f9f2.akoNv = 'DBnFs';
        _0x58f9f2.BwAfz = function (_0x39a62d, _0x9e776d) {
            return _0x39a62d + _0x9e776d;
        };
        _0x58f9f2.BCCeI = function (_0x31662d, _0xbda1bf) {
            return _0x31662d + _0xbda1bf;
        };
        _0x58f9f2.rDGeb = function (_0x45b76b, _0x3300d7, _0x5a596f) {
            return _0x45b76b(_0x3300d7, _0x5a596f);
        };
        _0x58f9f2.aVpQC = 'xipvz';
        _0x58f9f2.kjjtk = function (_0xd65197) {
            return _0xd65197();
        };
        _0x58f9f2.cieGv = '6|5|0|1|4|3|2';
        _0x58f9f2.JOeIJ = function (_0x28d862, _0x500c1f) {
            return _0x28d862 + _0x500c1f;
        };
        _0x58f9f2.FmcjP = 'smooth';
        _0x58f9f2.fPaDK = 'progresAnimasiLoad';
        _0x58f9f2['ldmxE'] = 'text-align' + ':left;';
        _0x58f9f2.JZssi = function (_0x347699, _0x316a97) {
            return _0x347699 * _0x316a97;
        };
        _0x58f9f2['XnFnu'] = '.progress';
        _0x58f9f2.rARci = '.progress .bar';
        _0x58f9f2.Adkih = function (_0x501eb1, _0x3130e5) {
            return _0x501eb1 + _0x3130e5;
        };
        _0x58f9f2['eskIj'] = 'onclick';
        _0x58f9f2.mKPHl = 'scrollToendBoxku()';
        _0x58f9f2['RTOWr'] = 'buttonArtikel1';
        _0x58f9f2['XNPbV'] = 'return /" ' + '+ this + "/';
        _0x58f9f2.JAmLt = 'Fatuc';
        _0x58f9f2.Lqyxg = '1|0|2|3|4';
        _0x58f9f2.hNHdd = 'outputCopyLinkDownload';
        _0x58f9f2.XHOYe = 'disabled';
        _0x58f9f2.zwIzW = 'SelectAll';
        _0x58f9f2['qozxb'] = 'Copy';
        _0x58f9f2.tWdKY = 'false';
        _0x58f9f2.gIRMe = function (_0x30fc8c, _0x26891e) {
            return _0x30fc8c >= _0x26891e;
        };
        _0x58f9f2['QijnD'] = function (_0x2c8402) {
            return _0x2c8402();
        };
        _0x58f9f2.qWrRE = function (_0x470d5c, _0x4873c1) {
            return _0x470d5c > _0x4873c1;
        };
        _0x58f9f2['ejKNE'] = 'NF=';
        _0x58f9f2.vzbvo = 'SF=';
        _0x58f9f2.cfKLN = 'lineCopy1';
        _0x58f9f2.CEldo = function (_0x37dcc2, _0x139b4f) {
            return _0x37dcc2 !== _0x139b4f;
        };
        _0x58f9f2['lIaTO'] = 'JhdeJ';
        _0x58f9f2['jqOmK'] = 'contentPanel';
        _0x58f9f2['yuezh'] = function (_0x567d04, _0x5235a6) {
            return _0x567d04 + _0x5235a6;
        };
        _0x58f9f2.GMMuB = 'class';
        _0x58f9f2.FwnNF = 'href';
        _0x58f9f2.wLyBu = '_blank';
        _0x58f9f2['SGEoD'] = function (_0x3647fc, _0xc75312) {
            return _0x3647fc === _0xc75312;
        };
        _0x58f9f2['mSIUA'] = 'jxsFl';
        _0x58f9f2.OMRut = 'UI=';
        _0x58f9f2.wrLFf = 'DF=';
        _0x58f9f2.rYyje = 'root';
        _0x58f9f2.ItouB = 'Please Wait...';
        _0x58f9f2.HSNjp = 'AreaOutput';
        _0x58f9f2.byqvU = 'none';
        _0x58f9f2['bJKNO'] = 'true';
        _0x58f9f2.DNAvL = 'KtqNa';
        _0x58f9f2.WFBsG = 'nAKjP';
        _0x58f9f2.CocAb = 'areaGenerate';
        _0x58f9f2.HkpVc = 'buttonGen';
        _0x58f9f2.gQjnC = 'click';
        _0x58f9f2.zQUjn = 'buttonCopy';
        _0x58f9f2.cXEqe = function (_0x25fd09, _0x30da6e) {
            return _0x25fd09 - _0x30da6e;
        };
        _0x58f9f2.XqcHq = function (_0x3d0b11, _0x2764a7) {
            return _0x3d0b11 !== _0x2764a7;
        };
        _0x58f9f2.ALHnA = 'XudEf';
        _0x58f9f2['MQRaR'] = 'Wzhfx';
        _0x58f9f2.vTEAa = 'margin-top' + ': 10px;';
        _0x58f9f2.szmqt = 'style';
        _0x58f9f2.djntB = function (_0x59077f, _0x4a3848) {
            return _0x59077f + _0x4a3848;
        };
        _0x58f9f2.YnIgb = 'lineCopy2';
        _0x58f9f2.MJlFS = 'domain Non Active..';
        _0x58f9f2['msEMq'] = function (_0x22a7ce, _0x3d9561, _0x385155) {
            return _0x22a7ce(_0x3d9561, _0x385155);
        };
        _0x58f9f2.fKTBl = 'areaButtonCopy';
        _0x58f9f2.uMNMi = 'domain Active';
        _0x58f9f2.tnoIa = function (_0x504790, _0x51e9cd) {
            return _0x504790 > _0x51e9cd;
        };
        _0x58f9f2.sqtNM = function (_0x244ae6, _0x4fdcc9) {
            return _0x244ae6 == _0x4fdcc9;
        };
        _0x58f9f2.rGlIz = 'yes';
        _0x58f9f2.reoFW = '#go';
        _0x58f9f2['OEbdi'] = 'BJGhX';
        _0x58f9f2.KPczM = function (_0x23269f, _0x4575d5) {
            return _0x23269f + _0x4575d5;
        };
        _0x58f9f2.sWadl = 'buttonHome';
        _0x58f9f2.GncUz = 'error Safelink!!, tidak ditemukan element DIV dengan tag id "areaButtonHome"';
        _0x58f9f2['KRdyD'] = function (_0x27178e, _0x489dfd) {
            return _0x27178e == _0x489dfd;
        };
        _0x58f9f2['kvUxH'] = 'NextPage';
        _0x58f9f2.IpVgg = function (_0x506a92, _0x443474) {
            return _0x506a92 !== _0x443474;
        };
        _0x58f9f2.tNZVk = 'CwZcn';
        _0x58f9f2.UOEfn = 'Bhnzb';
        _0x58f9f2.Amafz = function (_0x5f0b7b, _0x528d12) {
            return _0x5f0b7b !== _0x528d12;
        };
        _0x58f9f2.TYYZi = 'vUzXf';
        _0x58f9f2.ZoHvG = 'error Safelink!!, tidak ditemukan element DIV dengan tag id "areaButtonArtikel1"';
        _0x58f9f2.nzLqG = 'silahkan refresh ulang, jika pesan ini masih muncul, berarti element DIV dengan tag id "areaButtonArtikel1" memang tidak ada';
        _0x58f9f2.kqias = function (_0x41b892, _0x501278) {
            return _0x41b892 !== _0x501278;
        };
        _0x58f9f2.cbJDg = 'IHCLh';
        _0x58f9f2['KsxNq'] = function (_0x1ee3d3, _0x3a0fc8) {
            return _0x1ee3d3 !== _0x3a0fc8;
        };
        _0x58f9f2['fnViw'] = function (_0x587539, _0x24e449) {
            return _0x587539(_0x24e449);
        };
        _0x58f9f2.pFkCl = function (_0x588c5e, _0xa924b1) {
            return _0x588c5e(_0xa924b1);
        };
        _0x58f9f2.YsBdO = 'nameFileCopy';
        _0x58f9f2['NbWOu'] = 'bsAMo';
        _0x58f9f2.MGteS = 'ADrPi';
        _0x58f9f2.lnqUu = function (_0xfb2bbe, _0x4c533c) {
            return _0xfb2bbe !== _0x4c533c;
        };
        _0x58f9f2.OiVtt = 'JXxYK';
        _0x58f9f2.FpKpa = 'rqZCE';
        _0x58f9f2.YbGXB = 'serverFileCopy';
        _0x58f9f2.UWDee = 'lineCopy3';
        _0x58f9f2.RSVxt = 'buttonCopyLinkDownload';
        _0x58f9f2.njJNq = function (_0x194306, _0x70d494) {
            return _0x194306 !== _0x70d494;
        };
        _0x58f9f2.xKzii = function (_0x257f72, _0x325e73) {
            return _0x257f72 > _0x325e73;
        };
        _0x58f9f2.nscxN = function (_0x5cc7a2) {
            return _0x5cc7a2();
        };
        _0x58f9f2.LDLhd = function (_0x3066a4, _0xa82850) {
            return _0x3066a4 <= _0xa82850;
        };
        _0x58f9f2.fcChJ = function (_0x2ef0fe, _0x25c4b0) {
            return _0x2ef0fe < _0x25c4b0;
        };
        _0x58f9f2.dPeoj = function (_0x3a6ce8, _0x1fbc17) {
            return _0x3a6ce8 === _0x1fbc17;
        };
        _0x58f9f2.TXaQB = 'bTKVs';
        _0x58f9f2.BXiWM = function (_0x27bde2, _0x25711f) {
            return _0x27bde2 < _0x25711f;
        };
        _0x58f9f2.DMmis = function (_0xfc092d, _0x22ec3b) {
            return _0xfc092d === _0x22ec3b;
        };
        _0x58f9f2.OAXwE = function (_0x570975, _0x1f2541) {
            return _0x570975 === _0x1f2541;
        };
        _0x58f9f2.eumOI = 'MUmEI';
        _0x58f9f2['VlPWo'] = 'LpEeI';
        _0x58f9f2.ewwfR = 'XQkwr';
        _0x58f9f2.wuzqX = 'Not Found Fedd';
        _0x58f9f2.yMNaC = function (_0x34b571, _0x1e7210) {
            return _0x34b571 + _0x1e7210;
        };
        _0x58f9f2['SZJSx'] = '?alt=json-in-script';
        _0x58f9f2['bUbrn'] = 'get';
        _0x58f9f2['Mksgz'] = 'jsonp';
        var _0x2ba355 = _0x58f9f2;
        var _0x592b99 = _0x439137.feed;
        var _0x195e29 = _0x592b99.openSearch$totalResults['$t'];
        if (_0x195e29 > 0x96) {
            var _0x2e7545 = 0x96;
        };
        if (_0x2ba355.LDLhd(_0x195e29, 0x96)) {
            var _0x2e7545 = _0x195e29;
        };
        var _0x2a9f74 = new Array();
        var _0x28c79a = new Array();
        for (var _0x3f3bc8 = 0x0; _0x2ba355.fcChJ(_0x3f3bc8, _0x2e7545); _0x3f3bc8++) {
            if (_0x2ba355.dPeoj(_0x592b99['entry'][_0x3f3bc8].link[0x3], undefined)) {
                if (_0x592b99.entry[_0x3f3bc8].link[0x1].rel === undefined) {} else {
                    _0x2a9f74[_0x3f3bc8] = _0x592b99['entry'][_0x3f3bc8].link[0x1].href;
                };
            } else {
                if (_0x2ba355['dPeoj'](_0x2ba355.TXaQB, 'ZmGko')) {
                    if (_0x2ba355.ENISt(tLik, url_Halaman_Copy)) {
                        document.getElementById(_0x2ba355.GNQQT).remove();
                        document['getElementById'](_0x2ba355.HFcmO).remove();
                        document.getElementById(_0x2ba355.dglvb).remove();
                        console.log(_0x2ba355['xDlSI']);
                    };
                } else {
                    _0x2a9f74[_0x3f3bc8] = _0x592b99.entry[_0x3f3bc8]['link'][0x3].href;
                }
            };
        };
        for (var _0x26767a = 0x0; _0x2ba355.BXiWM(_0x26767a, _0x2e7545); _0x26767a++) {
            if (_0x2ba355.DMmis(_0x592b99.entry[_0x26767a].title['$t'], undefined)) {} else {
                if (_0x2ba355.OAXwE(_0x2ba355.eumOI, _0x2ba355.VlPWo)) {
                    var _0x10315e = fn.apply(context, arguments);
                    fn = null;
                    return _0x10315e;
                } else {
                    _0x28c79a[_0x26767a] = _0x592b99.entry[_0x26767a]['title']['$t'];
                }
            };
        };
        if (_0x2ba355.OAXwE(_0x2a9f74[_0x28c79a.indexOf(GetDataTemp)], undefined)) {
            if (_0x2ba355.OAXwE(_0x2ba355.ewwfR, _0x2ba355.ewwfR)) {
                console.log(_0x2ba355.wuzqX);
            } else {
                listlinkku3[_0x3f3bc8] = cewek_cantik3['entry'][_0x3f3bc8].link[0x3].href;
            }
        } else {
            var _0x2e896a = {};
            _0x2e896a.url = _0x2ba355.yMNaC(_0x2a9f74[_0x28c79a.indexOf(GetDataTemp)], _0x2ba355.SZJSx);
            _0x2e896a['type'] = _0x2ba355['bUbrn'];
            _0x2e896a.dataType = _0x2ba355['Mksgz'];
            _0x2e896a.success = function _0x52af72(_0x4f52cb) {
                var _0x5eeda2 = {};
                _0x5eeda2.yttjF = function (_0x1afcf6, _0x57f4c2) {
                    return _0x2ba355['cXEqe'](_0x1afcf6, _0x57f4c2);
                };
                _0x5eeda2.ZsjAM = function (_0x730d01, _0x33907) {
                    return _0x2ba355.XqcHq(_0x730d01, _0x33907);
                };
                _0x5eeda2.hugyG = _0x2ba355.ALHnA;
                _0x5eeda2.dGLsZ = function (_0x6ce364, _0x213df4) {
                    return _0x6ce364 * _0x213df4;
                };
                _0x5eeda2.lbFID = _0x2ba355.MQRaR;
                _0x5eeda2.mFKQU = _0x2ba355.HFcmO;
                _0x5eeda2.Ysavb = function (_0x225db3, _0xdbb4db) {
                    return _0x225db3 + _0xdbb4db;
                };
                _0x5eeda2['SgTcU'] = function (_0x1dcda7, _0x404951) {
                    return _0x2ba355.yuezh(_0x1dcda7, _0x404951);
                };
                _0x5eeda2['nlWMF'] = _0x2ba355['RTOWr'];
                _0x5eeda2.Fglsx = _0x2ba355['eskIj'];
                _0x5eeda2.Otkyp = _0x2ba355.vTEAa;
                _0x5eeda2['rmgYl'] = _0x2ba355.FmcjP;
                _0x5eeda2.RRiFq = _0x2ba355.szmqt;
                _0x5eeda2.sJWYm = 'text-align' + ':left;';
                _0x5eeda2.nNFJC = _0x2ba355.rARci;
                _0x5eeda2.sIqov = _0x2ba355.XnFnu;
                _0x5eeda2['BrQUV'] = function (_0xfb6950, _0x412100, _0x67a466) {
                    return _0xfb6950(_0x412100, _0x67a466);
                };
                _0x5eeda2.QZTIm = function (_0x5bec56, _0x5a4134) {
                    return _0x2ba355.SGEoD(_0x5bec56, _0x5a4134);
                };
                _0x5eeda2.yvqUT = function (_0x1a6a7f, _0xd0cee7) {
                    return _0x2ba355.djntB(_0x1a6a7f, _0xd0cee7);
                };
                _0x5eeda2.gErtb = _0x2ba355.YnIgb;
                var _0x3c6c66 = _0x5eeda2;
                if (_0x2ba355['SGEoD'](_0x4f52cb.entry.content, undefined)) {} else {
                    var _0x2437da = _0x4f52cb.entry.content['$t'];
                    if (_0x2437da.indexOf(window['location'].hostname) < 0x0) {
                        console.log(_0x2ba355['MJlFS']);
                        _0x2ba355['msEMq'](StatusNonActive, _0x2ba355.GNQQT, NotifErorAktifasi);
                        _0x2ba355.msEMq(StatusNonActive, 'areaGenerate', NotifErorAktifasi);
                        _0x2ba355['msEMq'](StatusNonActive, _0x2ba355.fKTBl, NotifErorAktifasi);
                    } else {
                        console.log(_0x2ba355.uMNMi);
                        if (_0x2ba355.tnoIa(window.location['href'].indexOf(Path), 0x0)) {
                            if (_0x2ba355['sqtNM'](Remove_Long_Code_Url, _0x2ba355.rGlIz)) {
                                if (_0x2ba355.XqcHq('RZbEq', 'nDJbZ')) {
                                    var _0x452547 = tLik.split(_0x2ba355.reoFW)[0x0];
                                    window['history']['replaceState']({}, document.title, _0x452547);
                                } else {
                                    listlinkku3[_0x3f3bc8] = cewek_cantik3.entry[_0x3f3bc8].link[0x1].href;
                                }
                            };
                            if (document.getElementById('areaButtonHome')) {
                                if (_0x2ba355.SGEoD('JPWJb', _0x2ba355['OEbdi'])) {
                                    listTitleku3[_0x26767a] = cewek_cantik3.entry[_0x26767a].title['$t'];
                                } else {
                                    document['getElementById'](_0x2ba355.GNQQT)['innerHTML'] = _0x2ba355.KPczM('<button id' + "='buttonHo" + 'me\'>', Text_Button_Home) + '</button>';
                                    document['getElementById'](_0x2ba355.sWadl).addEventListener('click', function () {
                                        var _0x517413 = {};
                                        _0x517413.szjBh = function (_0x42409a, _0x2e2cc1) {
                                            return _0x42409a === _0x2e2cc1;
                                        };
                                        _0x517413.MMUjA = function (_0x1e6a37, _0x53f7fb) {
                                            return _0x1e6a37 === _0x53f7fb;
                                        };
                                        _0x517413.PgqcY = function (_0x165320) {
                                            return _0x2ba355.fiYjB(_0x165320);
                                        };
                                        _0x517413.kUirX = _0x2ba355.cjnsl;
                                        _0x517413.ifkKt = function (_0x5d8258, _0x233ebc) {
                                            return _0x2ba355.xlSxV(_0x5d8258, _0x233ebc);
                                        };
                                        _0x517413.EDBEk = _0x2ba355.akoNv;
                                        _0x517413.bcATX = _0x2ba355.GNQQT;
                                        _0x517413.VtOgi = function (_0x1c3f09, _0x3ec2b7) {
                                            return _0x2ba355.BwAfz(_0x1c3f09, _0x3ec2b7);
                                        };
                                        _0x517413['NNhve'] = function (_0x8b323f, _0x852e29) {
                                            return _0x2ba355.BCCeI(_0x8b323f, _0x852e29);
                                        };
                                        _0x517413.IQtJX = function (_0x12a1de, _0x6e8673, _0x188f1c) {
                                            return _0x2ba355['rDGeb'](_0x12a1de, _0x6e8673, _0x188f1c);
                                        };
                                        _0x517413['qhNLu'] = function (_0x510899, _0x2dc2f0) {
                                            return _0x2ba355['xlSxV'](_0x510899, _0x2dc2f0);
                                        };
                                        _0x517413.fMycf = _0x2ba355.aVpQC;
                                        var _0x32710d = _0x517413;
                                        var _0x3f548b = Time_Loading_Home;

                                        function _0x30317c() {
                                            var _0x4e627c = {};
                                            _0x4e627c.aSssj = function (_0x161326) {
                                                return _0x32710d.PgqcY(_0x161326);
                                            };
                                            _0x4e627c.PQxNh = 'lineCopy3';
                                            var _0x13c393 = _0x4e627c;
                                            if (_0x32710d.kUirX !== 'bEEcl') {
                                                if (_0x3f548b >= 0x0) {
                                                    if (_0x32710d.ifkKt(_0x32710d.EDBEk, 'DBnFs')) {
                                                        document.getElementById(_0x32710d.bcATX).innerHTML = _0x32710d.VtOgi(_0x32710d.VtOgi(_0x32710d.NNhve('<div id=\'timerAnimat' + "ionButton'" + '>', '<span clas' + "s='NotifPlus'>Please" + ' Wait... <' + '/span>'), _0x3f548b), '</div>');
                                                        _0x32710d.IQtJX(setTimeout, function () {
                                                            _0x3f548b += -0x1;
                                                            _0x13c393.aSssj(_0x30317c);
                                                        }, 0x3e8);
                                                    } else {
                                                        if (_0x32710d.szjBh(_0x592b99['entry'][_0x26767a].title['$t'], undefined)) {} else {
                                                            _0x28c79a[_0x26767a] = _0x592b99['entry'][_0x26767a].title['$t'];
                                                        };
                                                    }
                                                } else {
                                                    if (_0x32710d.qhNLu(_0x32710d.fMycf, _0x32710d.fMycf)) {
                                                        document.getElementById(_0x32710d['bcATX']).innerHTML = "<span id='" + 'ButtonNext' + "ToPage' onclick='nextToPage()'" + '>GO TO LINK</span>';
                                                    } else {
                                                        if (_0x32710d['MMUjA'](cewek_cantik3.entry[_0x26767a].title['$t'], undefined)) {} else {
                                                            listTitleku3[_0x26767a] = cewek_cantik3.entry[_0x26767a].title['$t'];
                                                        };
                                                    }
                                                };
                                            } else {
                                                document.getElementById(_0x13c393['PQxNh']).remove();
                                            }
                                        };
                                        _0x2ba355.kjjtk(_0x30317c);
                                    });
                                }
                            } else {
                                console.log(_0x2ba355.GncUz);
                            };
                        };
                        if (_0x2ba355['KRdyD'](localStorage.getItem(_0x2ba355.kvUxH), null) == true) {
                            if (_0x2ba355.IpVgg(_0x2ba355['tNZVk'], _0x2ba355.UOEfn)) {
                                if (document['getElementById'](_0x2ba355.HFcmO)) {
                                    function _0xe5cb6f(_0x2d72cd) {
                                        var _0x2bb8b5 = {};
                                        _0x2bb8b5.UJtoh = 'areaButtonCopy';
                                        var _0x5004b2 = _0x2bb8b5;
                                        for (var _0x416530 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], _0x30d223 = _0x2d72cd, _0x455a5d = new Array(), _0x5db7e9 = 0x0; _0x5db7e9 <= _0x3c6c66.yttjF(_0x30d223, 0x1); _0x5db7e9++) {
                                            if (_0x3c6c66.ZsjAM(_0x3c6c66.hugyG, 'XudEf')) {
                                                document['getElementById'](_0x5004b2.UJtoh).innerHTML = '<span style=\'color:red;\'>Link Not Found!' + '!</span><br/>Please Visit the Original Link From the First Link Start.';
                                            } else {
                                                _0x455a5d[_0x5db7e9] = _0x416530[parseInt(_0x3c6c66.dGLsZ(Math.random(), _0x416530.length))];
                                                _0x455a5d = _0x455a5d;
                                                randomnumber = _0x455a5d.join('');
                                            }
                                        }
                                    };
                                    _0x6f743 = localStorage.getItem('NextPage');
                                    _0x2ba355.QijnD(_0x134627);
                                } else {
                                    if (_0x2ba355.Amafz('uCugo', _0x2ba355.TYYZi)) {
                                        localStorage.removeItem('NextPage');
                                        console.log(_0x2ba355.ZoHvG);
                                        console['log'](_0x2ba355['nzLqG']);
                                    } else {
                                        var _0x109985 = _0x2ba355.cieGv.split('|');
                                        var _0x5d5f66 = 0x0;
                                        while (true) {
                                            switch (_0x109985[_0x5d5f66++]) {
                                            case '0':
                                                var _0x4af554 = {};
                                                _0x4af554.top = _0x2ba355.JOeIJ(document.getElementById(_0x2ba355['HFcmO']).offsetTop, Higth_AutoScrool_To_Botton1);
                                                _0x4af554['behavior'] = _0x2ba355.FmcjP;
                                                window['scrollTo'](_0x4af554);
                                                continue;
                                            case '1':
                                                document['getElementById'](_0x2ba355['fPaDK'])['setAttribute']('style', _0x2ba355['ldmxE']);
                                                continue;
                                            case '2':
                                                _0x2ba355.rDGeb(setTimeout, function () {
                                                    if (document['getElementById'](_0x52c34d.sJqJK)) {
                                                        document.getElementById(_0x52c34d['sJqJK']).innerHTML = _0x52c34d.kSbVl('<button id=\'buttonArtikel1\'>', Text_Button_Artikel_Button1) + '</button>';
                                                        document.getElementById('buttonArtikel1')['setAttribute'](_0x52c34d['LaJNH'], _0x52c34d.eFAFV);
                                                        document.getElementById(_0x52c34d.OKEYM)['setAttribute']('style', 'margin-top' + ': 10px;');
                                                    };
                                                }, _0x2ba355.JZssi(0x3e8, Time_Loading_Artikel_Button1));
                                                continue;
                                            case '3':
                                                document.querySelector(_0x2ba355.XnFnu).className += ' complete';
                                                continue;
                                            case '4':
                                                document.querySelector(_0x2ba355['rARci']).style.transitionDuration = _0x2ba355.Adkih(Time_Loading_Artikel_Button1, 's');
                                                continue;
                                            case '5':
                                                document['getElementById'](_0x2ba355.HFcmO).innerHTML = `\
  <div cl` + 'ass="progr' + `ess" id='p` + 'rogresAnim' + `asiLoad'>\
` + '  <div class="bar">.' + `</div>\
  <` + '/div>\x0a  <d' + "iv id='button1Home'>" + '\x0a  <span i' + "d='Subbutton1Home'>P" + 'lease Wait...</span>' + `\
  </div>\
` + '  ';
                                                continue;
                                            case '6':
                                                var _0x6f0f76 = {};
                                                _0x6f0f76.sJqJK = _0x2ba355['HFcmO'];
                                                _0x6f0f76['kSbVl'] = function (_0x5eecc6, _0x48285b) {
                                                    return _0x2ba355['Adkih'](_0x5eecc6, _0x48285b);
                                                };
                                                _0x6f0f76.LaJNH = _0x2ba355.eskIj;
                                                _0x6f0f76.eFAFV = _0x2ba355.mKPHl;
                                                _0x6f0f76.OKEYM = _0x2ba355.RTOWr;
                                                var _0x52c34d = _0x6f0f76;
                                                continue;
                                            }
                                            break;
                                        }
                                    }
                                };
                            } else {
                                var _0x31a9e1 = firstCall ? function () {
                                    if (fn) {
                                        var _0x4a478a = fn.apply(context, arguments);
                                        fn = null;
                                        return _0x4a478a;
                                    }
                                } : function () {};
                                firstCall = true;
                                return _0x31a9e1;
                            }
                        };

                        function _0x134627() {
                            var _0x577a8a = {};
                            _0x577a8a.hmXCw = function (_0x3db7b1, _0x4e10eb) {
                                return _0x3db7b1 === _0x4e10eb;
                            };
                            _0x577a8a.AFUzS = _0x3c6c66['lbFID'];
                            _0x577a8a.sMZkC = _0x3c6c66.mFKQU;
                            _0x577a8a.zHaUU = function (_0x4d1365, _0x116552) {
                                return _0x3c6c66.Ysavb(_0x4d1365, _0x116552);
                            };
                            _0x577a8a.OKyOB = function (_0x4d3bd2, _0x4e4734) {
                                return _0x3c6c66.SgTcU(_0x4d3bd2, _0x4e4734);
                            };
                            _0x577a8a.gHCMI = _0x3c6c66.nlWMF;
                            _0x577a8a['pVaJd'] = _0x3c6c66.Fglsx;
                            _0x577a8a['egIRH'] = _0x3c6c66['Otkyp'];
                            var _0x351d33 = _0x577a8a;
                            document.getElementById('areaButtonArtikel1')['innerHTML'] = `\
  <div cl` + 'ass="progr' + `ess" id='p` + 'rogresAnim' + `asiLoad'>\
` + '  <div class="bar">.</div>\x0a  <' + `/div>\
  <d` + "iv id='button1Home'>" + `\
  <span i` + "d='Subbutton1Home'>P" + 'lease Wait...</span>' + `\
  </div>\
` + '  ';
                            var _0x27ece0 = {};
                            _0x27ece0.top = _0x3c6c66.SgTcU(document.getElementById(_0x3c6c66.mFKQU).offsetTop, Higth_AutoScrool_To_Botton1);
                            _0x27ece0['behavior'] = _0x3c6c66.rmgYl;
                            window.scrollTo(_0x27ece0);
                            document.getElementById('progresAnimasiLoad')['setAttribute'](_0x3c6c66.RRiFq, _0x3c6c66.sJWYm);
                            document.querySelector(_0x3c6c66['nNFJC']).style.transitionDuration = Time_Loading_Artikel_Button1 + 's';
                            document.querySelector(_0x3c6c66.sIqov).className += ' complete';
                            _0x3c6c66.BrQUV(setTimeout, function () {
                                if (_0x351d33.hmXCw(_0x351d33.AFUzS, 'rNTRv')) {
                                    removeMyScript3();
                                } else {
                                    if (document.getElementById(_0x351d33['sMZkC'])) {
                                        document.getElementById(_0x351d33.sMZkC).innerHTML = _0x351d33.zHaUU(_0x351d33.OKyOB('<button id' + "='buttonArtikel1'>", Text_Button_Artikel_Button1), '</button>');
                                        document['getElementById'](_0x351d33.gHCMI)['setAttribute'](_0x351d33.pVaJd, 'scrollToendBoxku()');
                                        document['getElementById']('buttonArtikel1')['setAttribute']('style', _0x351d33['egIRH']);
                                    };
                                }
                            }, _0x3c6c66['dGLsZ'](0x3e8, Time_Loading_Artikel_Button1));
                        };
                        if (document['getElementById'](_0x2ba355.fKTBl)) {
                            if (_0x2ba355.kqias(_0x2ba355.cbJDg, _0x2ba355.cbJDg)) {
                                var _0x3eda74 = document.createElement('a');
                                _0x3eda74['target'] = click_target_button2;
                                _0x3eda74.href = url_Halaman_Copy;
                                _0x3eda74.click();
                            } else {
                                document.getElementById('areaButtonHome').remove();
                                document['getElementById']('areaButtonArtikel1').remove();
                                document['getElementById']('areaButtonArtikel2').remove();
                                if (_0x2ba355.KRdyD(_0x2ba355.KRdyD(localStorage.getItem(_0x2ba355.kvUxH), null), true)) {
                                    if (_0x2ba355.KsxNq('kbDAs', 'ifhON')) {
                                        document.getElementById(_0x2ba355.fKTBl).innerHTML = '<div class' + "='TitleTextCopy'>Lin" + 'k Download File</div>\x0a <div id' + "='propertyFileCopy'>" + `\
 <table>\
` + " <tr id='lineCopy1'>" + '<td class=' + "'onejrku'>" + 'Name File<' + '/td><td>:<' + '/td><td id' + "='nameFileCopy' class='jrku'><" + '/td></tr>\x0a' + " <tr id='lineCopy2'>" + '<td class=' + "'onejrku'>" + 'Size File<' + '/td><td>:<' + '/td><td id=\'sizeFileCopy\' clas' + "s='jrku'><" + '/td></tr>\x0a <tr id=\'l' + "ineCopy3'>" + '<td class=' + "'onejrku'>" + 'Server Download</td>' + '<td>:</td>' + "<td id='se" + 'rverFileCo' + "py' class=" + "'jrku'></t" + `d></tr>\
 <` + '/table>\x0a <' + `/div>\
 <di` + "v id='area" + 'CopyLinkDo' + `wnload'>\
 ` + '<input id=' + '\'outputCopyLinkDownl' + "oad'></inp" + `ut>\
 <div ` + "class='are" + 'aButtonCop' + "yku'><butt" + 'on id=\'buttonCopyLinkDownload\'' + '>COPY</button><?div>' + `\
 </div>\
 ` + "<div id='m" + 'assageNoti' + "fCopyku'><" + 'span>Copy ' + '& Visit Link To Download File<' + '/span><br/' + '><span><i>' + 'Copy Link Lalu Kunjungi Untuk Mendownload File</i>' + '</span></div>';
                                        var _0x6f743 = localStorage.getItem(_0x2ba355.kvUxH);
                                        localStorage.removeItem(_0x2ba355.kvUxH);
                                        var _0xef64a8 = aesCrypto['decrypt'](_0x2ba355['fnViw'](convertstr, _0x6f743), _0x2ba355['pFkCl'](convertstr, _0x2ba355.rYyje));
                                        if (_0xef64a8.indexOf(_0x2ba355.ejKNE)) {
                                            if (_0xef64a8.split(_0x2ba355.ejKNE)[0x1].split(_0x2ba355.vzbvo)[0x0].split('').length > 0x0) {
                                                document['getElementById'](_0x2ba355['YsBdO']).innerHTML = _0xef64a8.split(_0x2ba355.ejKNE)[0x1].split(_0x2ba355.vzbvo)[0x0];
                                            } else {
                                                document['getElementById'](_0x2ba355['cfKLN']).remove();
                                            };
                                        } else {
                                            if (_0x2ba355.NbWOu === 'bsAMo') {
                                                document.getElementById('lineCopy1').remove();
                                            } else {
                                                var _0xcbfe92 = _0x195e29;
                                            }
                                        };
                                        if (_0xef64a8.indexOf(_0x2ba355.vzbvo)) {
                                            if (_0x2ba355.MGteS === _0x2ba355.MGteS) {
                                                if (_0x2ba355.tnoIa(_0xef64a8.split(_0x2ba355.vzbvo)[0x1].split(_0x2ba355.wrLFf)[0x0]['split']('').length, 0x0)) {
                                                    document['getElementById']('sizeFileCopy').innerHTML = _0xef64a8.split(_0x2ba355.vzbvo)[0x1].split(_0x2ba355.wrLFf)[0x0];
                                                } else {
                                                    if (_0x2ba355.lnqUu(_0x2ba355.OiVtt, 'JXxYK')) {
                                                        var _0x381198 = _0x195e29;
                                                    } else {
                                                        document['getElementById'](_0x2ba355.YnIgb)['remove']();
                                                    }
                                                };
                                            } else {
                                                if (_0x3c6c66.QZTIm(cewek_cantik3.entry[_0x3f3bc8].link[0x1].rel, undefined)) {} else {
                                                    listlinkku3[_0x3f3bc8] = cewek_cantik3.entry[_0x3f3bc8].link[0x1].href;
                                                };
                                            }
                                        } else {
                                            document.getElementById(_0x2ba355.YnIgb).remove();
                                        };
                                        if (_0xef64a8.indexOf(_0x2ba355.wrLFf)) {
                                            if (_0x2ba355['tnoIa'](_0xef64a8['split'](_0x2ba355.wrLFf)[0x1].split('').length, 0x0)) {
                                                if (_0x2ba355.lnqUu(_0x2ba355.FpKpa, 'oMqZD')) {
                                                    document.getElementById(_0x2ba355.YbGXB).innerHTML = _0xef64a8['split'](_0x2ba355.wrLFf)[0x1];
                                                } else {
                                                    document.getElementById('areaButtonHome')['innerHTML'] = _0x3c6c66.SgTcU(_0x3c6c66.yvqUT(_0x3c6c66.yvqUT("<div id='t" + 'imerAnimat' + "ionButton'" + '>', '<span class=\'NotifPlus\'>Please Wait... <' + '/span>'), StartAnimation), '</div>');
                                                    setTimeout(function () {
                                                        StartAnimation += -0x1;
                                                        AnimationTime();
                                                    }, 0x3e8);
                                                }
                                            } else {
                                                document.getElementById(_0x2ba355.UWDee).remove();
                                            };
                                        } else {
                                            document['getElementById']('lineCopy3').remove();
                                        };
                                        document['getElementById'](_0x2ba355.hNHdd).value = _0xef64a8.split(_0x2ba355.OMRut)[0x1].split(_0x2ba355.ejKNE)[0x0];
                                        document.getElementById(_0x2ba355.hNHdd)['setAttribute']('disabled', _0x2ba355.tWdKY);
                                        document['getElementById'](_0x2ba355.RSVxt).addEventListener('click', function () {
                                            var _0x36f679 = {};
                                            _0x36f679.oRxqm = _0x2ba355['XNPbV'];
                                            var _0x38270d = _0x36f679;
                                            if (_0x2ba355.JAmLt === _0x2ba355.JAmLt) {
                                                var _0x4ec204 = _0x2ba355.Lqyxg['split']('|');
                                                var _0x78ca42 = 0x0;
                                                while (true) {
                                                    switch (_0x4ec204[_0x78ca42++]) {
                                                    case '0':
                                                        document.getElementById(_0x2ba355.hNHdd)['focus']();
                                                        continue;
                                                    case '1':
                                                        document['getElementById'](_0x2ba355.hNHdd).removeAttribute(_0x2ba355.XHOYe);
                                                        continue;
                                                    case '2':
                                                        document['execCommand'](_0x2ba355.zwIzW);
                                                        continue;
                                                    case '3':
                                                        document['execCommand'](_0x2ba355.qozxb);
                                                        continue;
                                                    case '4':
                                                        document['getElementById'](_0x2ba355.hNHdd)['setAttribute'](_0x2ba355['XHOYe'], _0x2ba355['tWdKY']);
                                                        continue;
                                                    }
                                                    break;
                                                }
                                            } else {
                                                var _0x560cc6 = {};
                                                _0x560cc6.CxOne = qqGYJn.oRxqm;
                                                var _0x160311 = _0x560cc6;
                                                var _0x30241c = function () {
                                                    var _0x148e80 = _0x30241c['constructor'](_0x160311.CxOne)()['compile']('^([^ ]+( +' + '[^ ]+)+)+[^ ]}');
                                                    return !_0x148e80['test'](SafeLingmagz_0x3769ad);
                                                };
                                                return _0x30241c();
                                            }
                                        });
                                    } else {
                                        var _0xed377f = _0x592b99.entry[_0x3f3bc8].link[0x2].href;
                                        if (_0x2ba355.gIRMe(_0xed377f['indexOf'](direct_to_link), 0x0)) {
                                            _0x2a9f74[_0x3f3bc8] = _0x592b99.entry[_0x3f3bc8].link[0x2].href;
                                        }
                                    }
                                } else {
                                    if (_0x2ba355.njJNq('DuSsK', 'DuSsK')) {
                                        StartAnimation += -0x1;
                                        _0x2ba355['QijnD'](AnimationTime);
                                    } else {
                                        document.getElementById('areaButtonCopy')['innerHTML'] = '<span styl' + "e='color:red;'>Link " + 'Not Found!' + '!</span><br/>Please Visit the Original Link From the First Link Start.';
                                    }
                                };
                            }
                        } else {
                            if (tLik == url_Halaman_Copy) {
                                document.getElementById(_0x2ba355.GNQQT)['remove']();
                                document['getElementById'](_0x2ba355.HFcmO).remove();
                                document['getElementById'](_0x2ba355.dglvb).remove();
                                console.log(_0x2ba355.xDlSI);
                            };
                        };
                        if (_0x2ba355.xKzii(window.location.href.indexOf(Get_Hastag_Generate_Link), 0x0)) {
                            document.getElementById('areaButtonHome').innerHTML = '<div id=\'areaGenerate\'></div>';
                            document['getElementById'](_0x2ba355.GNQQT)['setAttribute'](_0x2ba355.szmqt, 'text-align' + ':left');
                        };
                        if (document.getElementById(_0x2ba355.CocAb)) {
                            _0x2ba355.nscxN(_0x262702);
                        };

                        function _0x262702() {
                            var _0x540380 = {};
                            _0x540380.WAkip = function (_0x20a681, _0x3603fa) {
                                return _0x2ba355.qWrRE(_0x20a681, _0x3603fa);
                            };
                            _0x540380['Mrzrk'] = _0x2ba355.ejKNE;
                            _0x540380['UCAyv'] = _0x2ba355.vzbvo;
                            _0x540380.nIwjE = _0x2ba355.cfKLN;
                            _0x540380['erwWO'] = function (_0x2b4ea4, _0xe242e1) {
                                return _0x2ba355.CEldo(_0x2b4ea4, _0xe242e1);
                            };
                            _0x540380.xereM = _0x2ba355['lIaTO'];
                            _0x540380.ZxfdE = _0x2ba355.jqOmK;
                            _0x540380['sMtEb'] = 'outputLink';
                            _0x540380.fUkcO = function (_0x217092, _0x372da7) {
                                return _0x2ba355.yuezh(_0x217092, _0x372da7);
                            };
                            _0x540380['PaASE'] = _0x2ba355['GMMuB'];
                            _0x540380.GjXVz = 'tesVisitLink';
                            _0x540380.XOpbq = _0x2ba355.FwnNF;
                            _0x540380.qZXSW = 'target';
                            _0x540380['ZELbP'] = _0x2ba355.wLyBu;
                            _0x540380.lTcij = function (_0x1b0894, _0x199dc3) {
                                return _0x2ba355.SGEoD(_0x1b0894, _0x199dc3);
                            };
                            _0x540380.xoEjv = _0x2ba355.mSIUA;
                            _0x540380.cuwWY = 'wWzjR';
                            _0x540380.TkhJt = function (_0x205932, _0x24f795) {
                                return _0x205932 + _0x24f795;
                            };
                            _0x540380['flqkg'] = _0x2ba355.OMRut;
                            _0x540380.Vlaaf = function (_0x246e74, _0x63f27b) {
                                return _0x246e74 + _0x63f27b;
                            };
                            _0x540380.KCROM = 'settigTitleFile';
                            _0x540380.ZITsB = _0x2ba355.wrLFf;
                            _0x540380.srJaI = function (_0x4dd559, _0x1d6e8f) {
                                return _0x4dd559(_0x1d6e8f);
                            };
                            _0x540380.DHwNq = _0x2ba355.rYyje;
                            _0x540380.rnusB = _0x2ba355.ItouB;
                            _0x540380.abEiP = _0x2ba355['HSNjp'];
                            _0x540380.tRGGS = _0x2ba355.byqvU;
                            _0x540380['vxFUl'] = 'zsqtm';
                            _0x540380.yIeoN = 'Copy';
                            _0x540380.RAswS = _0x2ba355.zwIzW;
                            _0x540380.EJbKh = _0x2ba355.XHOYe;
                            _0x540380.EzSpk = _0x2ba355.bJKNO;
                            var _0x11f1d8 = _0x540380;
                            if (_0x2ba355['SGEoD'](_0x2ba355.DNAvL, _0x2ba355['WFBsG'])) {
                                document.getElementById(_0x3c6c66['gErtb']).remove();
                            } else {
                                document.getElementById(_0x2ba355.CocAb).innerHTML = '<div id="pasteblog">' + `\
<div clas` + 's="PanelGe' + `nerate">\
	` + '<div class' + '="titlePanel\">Generate Link</d' + `iv>\
	<div ` + 'class=\'areaInputGenerate\'><input id=\"inputLink" placeholder=' + '"insert Link"></div>' + `\
	<div cla` + "ss='areaBu" + 'ttonGenera' + "te'><butto" + 'n id="buttonGen">Generate</button></div>' + `\
	<div id=` + '"areaOptionSettingFi' + `le">\
		<di` + 'v class="o' + `ptionku">\
` + '			<span style="font-weight: bold;">Name File : <br></span>\x0a\x09\x09\x09<input placeholder="Insert Name File" id="settigTitleFile\">\x0a\x09\x09</div' + `>\
		<div c` + 'lass="opti' + `onku">\
			` + '<span style="font-weight: bold;\">Size File : <br></span>\x0a\x09\x09\x09<input placeholder="Size File" id="settigSizeFile\"' + `>\
		</div>` + `\
		<div cl` + 'ass="optio' + `nku">\
			<` + 'span style=\"font-weight: bold;">Server Download : ' + '<br></span>\x0a\x09\x09\x09<input placeholder=\"Insert Name Server Download" id="settigServerFile\">\x0a\x09\x09<' + `/div>\
	</d` + `iv>\
	<div ` + 'class="none" id="Are' + `aOutput">\
` + '		<input id="outputLink" disabled=\'true\'>\x0a\x09\x09<div c' + "lass='area" + 'ButtonGene' + "rate'><but" + 'ton id="buttonCopy\">Copy</butt' + `on></div>\
` + '		<div style="margin-top: 10px;\"><a id=\"tesVisitLink">Visit ' + ('Link Generate</a></d' + `iv>\
	</div` + '>\x0a\x09<div id' + '="contentP' + `anel">\
	</` + `div>\
</div` + '></div>');
                                document.getElementById(_0x2ba355.HkpVc)['addEventListener'](_0x2ba355.gQjnC, function () {
                                    if (_0x11f1d8['lTcij'](_0x11f1d8['xoEjv'], _0x11f1d8.cuwWY)) {
                                        if (_0x11f1d8['WAkip'](_0xef64a8.split(_0x11f1d8.Mrzrk)[0x1].split(_0x11f1d8['UCAyv'])[0x0]['split']('').length, 0x0)) {
                                            document.getElementById('nameFileCopy').innerHTML = _0xef64a8.split('NF=')[0x1].split(_0x11f1d8['UCAyv'])[0x0];
                                        } else {
                                            document['getElementById'](_0x11f1d8['nIwjE']).remove();
                                        };
                                    } else {
                                        var _0x5ee3f3 = _0x11f1d8['TkhJt'](_0x11f1d8['flqkg'], document.getElementById('inputLink').value),
                                            _0x4fd868 = _0x11f1d8['Vlaaf']('NF=', document['getElementById'](_0x11f1d8.KCROM).value),
                                            _0x1f01c6 = _0x11f1d8.Vlaaf(_0x11f1d8.UCAyv, document.getElementById('settigSizeFile').value),
                                            _0x3b0b1f = _0x11f1d8.ZITsB + document.getElementById('settigServerFile').value,
                                            _0x4d21ed = aesCrypto.encrypt(_0x11f1d8.srJaI(convertstr, _0x11f1d8.Vlaaf(_0x11f1d8.Vlaaf(_0x11f1d8['Vlaaf'](_0x5ee3f3, _0x4fd868), _0x1f01c6), _0x3b0b1f)), convertstr(_0x11f1d8.DHwNq));
                                        document.getElementById(_0x11f1d8.ZxfdE)['innerHTML'] = _0x11f1d8.rnusB;
                                        document.getElementById(_0x11f1d8['abEiP'])['setAttribute'](_0x11f1d8['PaASE'], _0x11f1d8.tRGGS);
                                        setTimeout(function () {
                                            if (_0x11f1d8.erwWO(_0x11f1d8.xereM, _0x11f1d8.xereM)) {
                                                _0x28c79a[_0x26767a] = _0x592b99.entry[_0x26767a].title['$t'];
                                            } else {
                                                document.getElementById(_0x11f1d8.ZxfdE).innerHTML = '';
                                                document['getElementById'](_0x11f1d8.sMtEb)['value'] = _0x11f1d8.fUkcO(_0x11f1d8.fUkcO(window.location['href'].split(window.location.hostname)[0x0], window.location.hostname), Path) + _0x4d21ed;
                                                document.getElementById('AreaOutput')['removeAttribute'](_0x11f1d8.PaASE);
                                                document.getElementById(_0x11f1d8.GjXVz)['setAttribute'](_0x11f1d8.XOpbq, document['getElementById'](_0x11f1d8['sMtEb']).value);
                                                document['getElementById']('tesVisitLink')['setAttribute'](_0x11f1d8.qZXSW, _0x11f1d8.ZELbP);
                                            }
                                        }, 0x1f4);
                                    }
                                });
                                document['getElementById'](_0x2ba355.zQUjn).addEventListener('click', function () {
                                    if (_0x11f1d8['lTcij']('zsqtm', _0x11f1d8.vxFUl)) {
                                        var _0x3e2cd0 = ('2|5|0|3|1|' + '4').split('|');
                                        var _0x5e59d0 = 0x0;
                                        while (true) {
                                            switch (_0x3e2cd0[_0x5e59d0++]) {
                                            case '0':
                                                document['getElementById'](_0x11f1d8.sMtEb)['select']();
                                                continue;
                                            case '1':
                                                document['execCommand'](_0x11f1d8.yIeoN);
                                                continue;
                                            case '2':
                                                document.getElementById(_0x11f1d8.sMtEb)['removeAttribute']('disabled');
                                                continue;
                                            case '3':
                                                document['execCommand'](_0x11f1d8.RAswS);
                                                continue;
                                            case '4':
                                                document.getElementById(_0x11f1d8.sMtEb)['setAttribute'](_0x11f1d8.EJbKh, _0x11f1d8.EzSpk);
                                                continue;
                                            case '5':
                                                document['getElementById'](_0x11f1d8.sMtEb).focus();
                                                continue;
                                            }
                                            break;
                                        }
                                    } else {
                                        document.getElementById(ID).innerHTML = TextHtml;
                                    }
                                });
                            }
                        };
                    };
                };
            };
            _0x2e896a['async'] = true;
            $.ajax(_0x2e896a);
        };
    },
    'async': true
});

function nextToPage() {
    var _0x3d92ee = {};
    _0x3d92ee.ChYwv = 'areaButtonArtikel1';
    _0x3d92ee.BIpWg = function (_0x1ace1c, _0x3d5cc6) {
        return _0x1ace1c + _0x3d5cc6;
    };
    _0x3d92ee.EMfHx = 'buttonArtikel1';
    _0x3d92ee.AkTCj = 'onclick';
    _0x3d92ee.YQsZC = 'scrollToendBoxku()';
    _0x3d92ee.ENyWY = 'sizeFileCopy';
    _0x3d92ee.CSQqn = 'SF=';
    _0x3d92ee['YIdJi'] = '1|4|0|2|3';
    _0x3d92ee.lOHIQ = 'contentPanel';
    _0x3d92ee.aahfk = function (_0x1d7d94, _0x34a798) {
        return _0x1d7d94 + _0x34a798;
    };
    _0x3d92ee.rHCVI = '_blank';
    _0x3d92ee.oMLJJ = 'AreaOutput';
    _0x3d92ee.WGJeN = function (_0x54baaa, _0x135c6b, _0x2dbeae) {
        return _0x54baaa(_0x135c6b, _0x2dbeae);
    };
    _0x3d92ee.tkUqN = 'UI=';
    _0x3d92ee['eEqoT'] = 'inputLink';
    _0x3d92ee.Edjle = 'settigSizeFile';
    _0x3d92ee.BMwFS = 'DF=';
    _0x3d92ee.qxebi = function (_0x313b65, _0xd7c9c6) {
        return _0x313b65(_0xd7c9c6);
    };
    _0x3d92ee.aqivs = function (_0x8976ce, _0x48898f) {
        return _0x8976ce + _0x48898f;
    };
    _0x3d92ee.dHudS = 'root';
    _0x3d92ee.gOdUX = 'SelectAll';
    _0x3d92ee.Nqqln = 'outputLink';
    _0x3d92ee.woDfb = 'true';
    _0x3d92ee.ccxOz = 'Copy';
    _0x3d92ee.wRxLe = 'areaGenerate';
    _0x3d92ee.wmldr = 'buttonGen';
    _0x3d92ee.abKYC = 'click';
    _0x3d92ee['Bcawm'] = 'buttonCopy';
    _0x3d92ee.akuVB = function (_0x5db0ef, _0x1525c9) {
        return _0x5db0ef !== _0x1525c9;
    };
    _0x3d92ee.DMQKu = 'WFAPM';
    _0x3d92ee.Zaksd = 'jKhkZ';
    _0x3d92ee.gGGyX = function (_0x43967f, _0x3123ea) {
        return _0x43967f > _0x3123ea;
    };
    _0x3d92ee.NZHOR = 'fzads';
    _0x3d92ee.bnASx = function (_0x36fb6d, _0x3a7ca4) {
        return _0x36fb6d <= _0x3a7ca4;
    };
    _0x3d92ee.cOuWS = function (_0x5182ff, _0x2b6211) {
        return _0x5182ff === _0x2b6211;
    };
    _0x3d92ee.PhUND = 'VckhI';
    _0x3d92ee.LgJtG = function (_0x56f3d5, _0x36102b) {
        return _0x56f3d5 < _0x36102b;
    };
    _0x3d92ee.lOUdP = 'NwHLM';
    _0x3d92ee.QWcYz = function (_0x514a04, _0x86b0b8) {
        return _0x514a04 >= _0x86b0b8;
    };
    _0x3d92ee.baras = function (_0x3adcaa, _0x2398a2) {
        return _0x3adcaa !== _0x2398a2;
    };
    _0x3d92ee.lACmW = 'fLRrI';
    _0x3d92ee.poRxF = 'VWctn';
    _0x3d92ee.IreVk = 'NextPage';
    _0x3d92ee.tsNbF = function (_0xa9dda4, _0x32c1a6) {
        return _0xa9dda4 * _0x32c1a6;
    };
    _0x3d92ee.IaTYI = 'ButtonNextToPage';
    _0x3d92ee.NsJTW = 'Please Wait..';
    _0x3d92ee['cTybQ'] = 'disabled';
    _0x3d92ee.xdnEv = function (_0x339f15, _0xc0206e) {
        return _0x339f15 + _0xc0206e;
    };
    _0x3d92ee.STMLy = function (_0x510d51, _0x2e23e6) {
        return _0x510d51 + _0x2e23e6;
    };
    _0x3d92ee['vgvHS'] = '/feeds/posts/summary' + '/?alt=json-in-script' + '&orderby=updated&max-results=9999';
    _0x3d92ee.dxCvS = 'jsonp';
    var _0x415d6b = _0x3d92ee;
    document.getElementById(_0x415d6b.IaTYI).innerHTML = _0x415d6b.NsJTW;
    document.getElementById(_0x415d6b['IaTYI']).removeAttribute('onclick');
    document.getElementById('ButtonNextToPage')['setAttribute'](_0x415d6b.cTybQ, _0x415d6b.woDfb);
    var _0x493398 = true;
    var _0x2b8b4a = {};
    _0x2b8b4a.url = _0x415d6b.xdnEv(_0x415d6b.STMLy('//', window.location.hostname), _0x415d6b.vgvHS);
    _0x2b8b4a.type = 'get';
    _0x2b8b4a.dataType = _0x415d6b.dxCvS;
    _0x2b8b4a.success = function _0x42e1c0(_0x3e0617) {
        var _0x3e5575 = {};
        _0x3e5575.jOODo = _0x415d6b.ChYwv;
        _0x3e5575.ayaZd = function (_0x575392, _0x4a0731) {
            return _0x415d6b['BIpWg'](_0x575392, _0x4a0731);
        };
        _0x3e5575.cCmxa = function (_0x183c08, _0x3e7c71) {
            return _0x415d6b.BIpWg(_0x183c08, _0x3e7c71);
        };
        _0x3e5575.GQfjg = _0x415d6b.EMfHx;
        _0x3e5575['HQOpA'] = _0x415d6b.AkTCj;
        _0x3e5575.TqFEO = _0x415d6b['YQsZC'];
        _0x3e5575.BInNr = 'margin-top' + ': 10px;';
        _0x3e5575['zxfZg'] = _0x415d6b['ENyWY'];
        _0x3e5575['ugPKq'] = _0x415d6b.CSQqn;
        _0x3e5575.CdoIK = _0x415d6b.YIdJi;
        _0x3e5575['bznIO'] = _0x415d6b['lOHIQ'];
        _0x3e5575['IyRQC'] = 'href';
        _0x3e5575.dMvvX = function (_0x28cd29, _0x53ca52) {
            return _0x415d6b.aahfk(_0x28cd29, _0x53ca52);
        };
        _0x3e5575.nrzTC = _0x415d6b.rHCVI;
        _0x3e5575.Mjjbz = _0x415d6b.oMLJJ;
        _0x3e5575.XptEi = 'class';
        _0x3e5575.DHXPO = function (_0x249ad9, _0x574600, _0xbfe2f7) {
            return _0x415d6b.WGJeN(_0x249ad9, _0x574600, _0xbfe2f7);
        };
        _0x3e5575.uoypy = function (_0x22e265, _0x3134c0) {
            return _0x415d6b['aahfk'](_0x22e265, _0x3134c0);
        };
        _0x3e5575.Fokvp = _0x415d6b.tkUqN;
        _0x3e5575.DakTC = _0x415d6b['eEqoT'];
        _0x3e5575.atvmG = function (_0x50aa3c, _0x4978f9) {
            return _0x415d6b.aahfk(_0x50aa3c, _0x4978f9);
        };
        _0x3e5575['rinMK'] = _0x415d6b.Edjle;
        _0x3e5575.BYcMC = function (_0x3c7abb, _0x31c3ba) {
            return _0x415d6b.aahfk(_0x3c7abb, _0x31c3ba);
        };
        _0x3e5575['PyQFt'] = _0x415d6b.BMwFS;
        _0x3e5575.ynDUB = function (_0x51fd8e, _0x22b828) {
            return _0x415d6b.qxebi(_0x51fd8e, _0x22b828);
        };
        _0x3e5575.EDkEp = function (_0x37c35, _0x58aff5) {
            return _0x415d6b.aqivs(_0x37c35, _0x58aff5);
        };
        _0x3e5575.OImka = function (_0x2eb089, _0x5c19b7) {
            return _0x2eb089(_0x5c19b7);
        };
        _0x3e5575.oDMid = _0x415d6b['dHudS'];
        _0x3e5575.nauSS = _0x415d6b.gOdUX;
        _0x3e5575.XkudO = _0x415d6b.Nqqln;
        _0x3e5575['zUVZQ'] = _0x415d6b.woDfb;
        _0x3e5575.nvRpw = _0x415d6b.ccxOz;
        _0x3e5575['jsQqe'] = _0x415d6b.wRxLe;
        _0x3e5575.iqhCn = _0x415d6b.wmldr;
        _0x3e5575.iXuaS = _0x415d6b.abKYC;
        _0x3e5575.trTVv = _0x415d6b.Bcawm;
        var _0x5d3889 = _0x3e5575;
        if (_0x415d6b.akuVB(_0x415d6b.DMQKu, _0x415d6b.Zaksd)) {
            var _0x13cf6f = _0x3e0617.feed;
            var _0x5b0376 = _0x13cf6f.openSearch$totalResults['$t'];
            if (_0x415d6b.gGGyX(_0x5b0376, 0x96)) {
                if (_0x415d6b['akuVB'](_0x415d6b.NZHOR, 'lvlFK')) {
                    var _0x4701f6 = 0x96;
                } else {
                    document['getElementById'](_0x5d3889.jOODo).innerHTML = _0x5d3889.ayaZd(_0x5d3889['cCmxa']('<button id' + "='buttonArtikel1'>", Text_Button_Artikel_Button1), '</button>');
                    document['getElementById'](_0x5d3889.GQfjg)['setAttribute'](_0x5d3889.HQOpA, _0x5d3889.TqFEO);
                    document['getElementById'](_0x5d3889.GQfjg)['setAttribute']('style', _0x5d3889.BInNr);
                }
            };
            if (_0x415d6b.bnASx(_0x5b0376, 0x96)) {
                if (_0x415d6b.cOuWS('lJtZs', _0x415d6b['PhUND'])) {
                    console.log('Not Found Fedd');
                } else {
                    var _0x4701f6 = _0x5b0376;
                }
            };
            var _0x4b7a5b = new Array();
            for (var _0xdd8d5d = 0x0; _0x415d6b['LgJtG'](_0xdd8d5d, _0x4701f6); _0xdd8d5d++) {
                if (_0x415d6b.cOuWS(_0x13cf6f.entry[_0xdd8d5d].link[0x4], undefined)) {
                    if (_0x415d6b['akuVB']('LMmLA', _0x415d6b.lOUdP)) {
                        var _0x263f79 = _0x13cf6f['entry'][_0xdd8d5d].link[0x2].href;
                        if (_0x415d6b['QWcYz'](_0x263f79['indexOf'](direct_to_link), 0x0)) {
                            _0x4b7a5b[_0xdd8d5d] = _0x13cf6f.entry[_0xdd8d5d].link[0x2].href;
                        }
                    } else {
                        var _0x3ed664 = 0x96;
                    }
                } else {
                    if (_0x415d6b.baras(_0x415d6b.lACmW, _0x415d6b.poRxF)) {
                        _0x4b7a5b[_0xdd8d5d] = _0x13cf6f.entry[_0xdd8d5d].link[0x4].href;
                    } else {
                        document.getElementById(_0x5d3889.zxfZg).innerHTML = decryptAllUrl['split'](_0x5d3889.ugPKq)[0x1].split('DF=')[0x0];
                    }
                }
            }
            _0x493398 = _0x4b7a5b;
            localStorage['setItem'](_0x415d6b.IreVk, tLik.split(Path)[0x1]);
            window.location['href'] = _0x493398[_0x415d6b['qxebi'](parseInt, _0x415d6b.tsNbF(Math.random(), _0x493398['length']))];
        } else {
            var _0x423186 = {};
            _0x423186.lLsUg = '2|1|5|0|4|' + '3';
            _0x423186.izXDE = _0x5d3889['nauSS'];
            _0x423186.CCQpn = _0x5d3889.XkudO;
            _0x423186.xUZRc = 'disabled';
            _0x423186.rvudH = _0x5d3889['zUVZQ'];
            _0x423186.zzamK = _0x5d3889.nvRpw;
            var _0x429a8e = _0x423186;
            document.getElementById(_0x5d3889['jsQqe'])['innerHTML'] = '<div id="pasteblog">' + `\
<div clas` + 's="PanelGe' + `nerate">\
	` + '<div class' + '="titlePanel">Generate Link</d' + `iv>\
	<div ` + 'class=\'areaInputGene' + "rate'><inp" + 'ut id="inputLink" placeholder="insert Link"></div>' + '\x0a\x09<div cla' + "ss='areaBu" + 'ttonGenera' + "te'><butto" + 'n id=\"buttonGen">Generate</button></div>' + `\
	<div id=` + '"areaOptionSettingFi' + `le">\
		<di` + 'v class="o' + `ptionku">\
` + '\x09\x09\x09<span style="font-weight: bold;">Name File : <b' + `r></span>\
` + '			<input placeholder="Insert Name File\" id=\"settigTitleFile\">\x0a\x09\x09</div' + `>\
		<div c` + 'lass="opti' + `onku">\
			` + '<span style="font-weight: bold;">Size File : <br><' + `/span>\
			` + '<input placeholder="Size File\" id="settigSizeFile\"' + `>\
		</div>` + `\
		<div cl` + 'ass="optio' + `nku">\
			<` + 'span style' + '="font-weight: bold;">Server Download : <br></span' + `>\
			<inpu` + 't placeholder="Insert Name Server Download" id="settigServer' + `File">\
		<` + `/div>\
	</d` + `iv>\
	<div ` + 'class=\"none" id="Are' + `aOutput">\
` + '		<input id="outputLink" disab' + "led='true'" + `>\
		<div c` + "lass='area" + 'ButtonGenerate\'><button id="buttonCopy">' + 'Copy</butt' + `on></div>\
` + '		<div style="margin-top: 10px;\"><a id=\"tesVisitLink\">Visit ' + ('Link Generate</a></d' + `iv>\
	</div` + `>\
	<div id` + '="contentP' + `anel">\
	</` + `div>\
</div` + '></div>');
            document['getElementById'](_0x5d3889['iqhCn'])['addEventListener'](_0x5d3889.iXuaS, function () {
                var _0x5fbf92 = _0x5d3889['CdoIK'].split('|');
                var _0x5327b4 = 0x0;
                while (true) {
                    switch (_0x5fbf92[_0x5327b4++]) {
                    case '0':
                        document.getElementById(_0x5d3889.bznIO).innerHTML = 'Please Wait...';
                        continue;
                    case '1':
                        var _0x3ed838 = {};
                        _0x3ed838.asdrt = 'tesVisitLink';
                        _0x3ed838.tOmkO = _0x5d3889['IyRQC'];
                        _0x3ed838.PxFWM = 'outputLink';
                        _0x3ed838.zcfyK = function (_0x53e09b, _0xa10b69) {
                            return _0x5d3889['dMvvX'](_0x53e09b, _0xa10b69);
                        };
                        _0x3ed838.jnuym = 'target';
                        _0x3ed838.plxxe = _0x5d3889.nrzTC;
                        _0x3ed838.kgjRS = _0x5d3889.Mjjbz;
                        var _0x3db0a3 = _0x3ed838;
                        continue;
                    case '2':
                        document['getElementById'](_0x5d3889.Mjjbz)['setAttribute'](_0x5d3889.XptEi, 'none');
                        continue;
                    case '3':
                        _0x5d3889.DHXPO(setTimeout, function () {
                            var _0x170a66 = '2|1|4|0|3' ['split']('|');
                            var _0x3e6ee3 = 0x0;
                            while (true) {
                                switch (_0x170a66[_0x3e6ee3++]) {
                                case '0':
                                    document['getElementById'](_0x3db0a3.asdrt)['setAttribute'](_0x3db0a3.tOmkO, document.getElementById(_0x3db0a3.PxFWM)['value']);
                                    continue;
                                case '1':
                                    document.getElementById(_0x3db0a3.PxFWM).value = _0x3db0a3.zcfyK(_0x3db0a3.zcfyK(_0x3db0a3.zcfyK(window['location'].href.split(window.location.hostname)[0x0], window.location.hostname), Path), _0x5b63a1);
                                    continue;
                                case '2':
                                    document.getElementById('contentPanel').innerHTML = '';
                                    continue;
                                case '3':
                                    document['getElementById']('tesVisitLink')['setAttribute'](_0x3db0a3.jnuym, _0x3db0a3.plxxe);
                                    continue;
                                case '4':
                                    document.getElementById(_0x3db0a3.kgjRS).removeAttribute('class');
                                    continue;
                                }
                                break;
                            }
                        }, 0x1f4);
                        continue;
                    case '4':
                        var _0x24a0d0 = _0x5d3889.uoypy(_0x5d3889.Fokvp, document.getElementById(_0x5d3889.DakTC).value),
                            _0x4d807c = _0x5d3889.uoypy('NF=', document['getElementById']('settigTitleFile').value),
                            _0x238591 = _0x5d3889.atvmG('SF=', document['getElementById'](_0x5d3889.rinMK).value),
                            _0x85225a = _0x5d3889.BYcMC(_0x5d3889.PyQFt, document.getElementById('settigServerFile')['value']),
                            _0x5b63a1 = aesCrypto.encrypt(_0x5d3889['ynDUB'](convertstr, _0x5d3889.EDkEp(_0x24a0d0 + _0x4d807c, _0x238591) + _0x85225a), _0x5d3889.OImka(convertstr, _0x5d3889['oDMid']));
                        continue;
                    }
                    break;
                }
            });
            document.getElementById(_0x5d3889.trTVv).addEventListener(_0x5d3889.iXuaS, function () {
                var _0x32633c = _0x429a8e.lLsUg.split('|');
                var _0x169735 = 0x0;
                while (true) {
                    switch (_0x32633c[_0x169735++]) {
                    case '0':
                        document['execCommand'](_0x429a8e.izXDE);
                        continue;
                    case '1':
                        document.getElementById(_0x429a8e['CCQpn']).focus();
                        continue;
                    case '2':
                        document['getElementById'](_0x429a8e.CCQpn).removeAttribute(_0x429a8e['xUZRc']);
                        continue;
                    case '3':
                        document.getElementById(_0x429a8e.CCQpn)['setAttribute'](_0x429a8e.xUZRc, _0x429a8e.rvudH);
                        continue;
                    case '4':
                        document['execCommand'](_0x429a8e.zzamK);
                        continue;
                    case '5':
                        document.getElementById(_0x429a8e.CCQpn)['select']();
                        continue;
                    }
                    break;
                }
            });
        }
    };
    _0x2b8b4a.async = true;
    $['ajax'](_0x2b8b4a);
};

function scrollToendBoxku() {
    var _0x11e913 = {};
    _0x11e913['NAVbV'] = function (_0x9124be, _0x4f9e2f) {
        return _0x9124be !== _0x4f9e2f;
    };
    _0x11e913.PBgoE = 'TVrZr';
    _0x11e913.DgOLo = function (_0x54db15, _0x16af64) {
        return _0x54db15 >= _0x16af64;
    };
    _0x11e913.HgMur = 'https://';
    _0x11e913.mORlQ = 'http://';
    _0x11e913.lsxAr = function (_0x5e66a5, _0x2a8974) {
        return _0x5e66a5 == _0x2a8974;
    };
    _0x11e913['oOEIX'] = function (_0x1b1fac, _0x4236bc) {
        return _0x1b1fac == _0x4236bc;
    };
    _0x11e913.ekIEm = function (_0x1fc047, _0x14ecf6) {
        return _0x1fc047 + _0x14ecf6;
    };
    _0x11e913.IzQea = 'areaButtonArtikel2';
    _0x11e913.seovb = function (_0x28e2f9, _0x5de630) {
        return _0x28e2f9 + _0x5de630;
    };
    _0x11e913.dXYyB = 'smooth';
    _0x11e913.IRLmB = 'buttonArtikel2';
    _0x11e913.GuXbb = 'click';
    _0x11e913.OkWTi = 'error Safelink!!, tidak ditemukan element DIV dengan tag id "areaButtonArtikel2\"';
    var _0x388aa3 = _0x11e913;
    if (document['getElementById'](_0x388aa3.IzQea)) {
        document.getElementById(_0x388aa3.IzQea).innerHTML = _0x388aa3.ekIEm(_0x388aa3.seovb('<button id' + "='buttonAr" + 'tikel2\'>', Text_Button_Artikel_Button2), '</button>');
        var _0x45eb45 = {};
        _0x45eb45.top = document.getElementById(_0x388aa3.IzQea)['offsetTop'] + Higth_AutoScrool_To_Botton2;
        _0x45eb45.behavior = _0x388aa3.dXYyB;
        window.scrollTo(_0x45eb45);
        document.getElementById(_0x388aa3.IRLmB).addEventListener(_0x388aa3['GuXbb'], function () {
            if (_0x388aa3.NAVbV(_0x388aa3['PBgoE'], _0x388aa3['PBgoE'])) {
                if (fn) {
                    var _0x45fa51 = fn.apply(context, arguments);
                    fn = null;
                    return _0x45fa51;
                }
            } else {
                var _0x1f65a6 = _0x388aa3.DgOLo(url_Halaman_Copy['indexOf'](_0x388aa3.HgMur), 0x0);
                var _0x49ba4f = url_Halaman_Copy.indexOf(_0x388aa3.mORlQ) >= 0x0;
                if (_0x388aa3.lsxAr(_0x1f65a6, true) && _0x388aa3.oOEIX(_0x49ba4f, true)) {
                    var _0x587367 = document.createElement('a');
                    _0x587367.target = click_target_button2;
                    _0x587367.href = url_Halaman_Copy;
                    _0x587367['click']();
                };
                if (_0x1f65a6 == true && _0x388aa3['oOEIX'](_0x49ba4f, true)) {
                    var _0x587367 = document.createElement('a');
                    _0x587367.target = click_target_button2;
                    _0x587367.href = url_Halaman_Copy;
                    _0x587367.click();
                };
                if (_0x1f65a6 == true && _0x388aa3.oOEIX(_0x49ba4f, true)) {
                    var _0x587367 = document['createElement']('a');
                    _0x587367.target = click_target_button2;
                    _0x587367.href = _0x388aa3.ekIEm('http://', url_Halaman_Copy);
                    _0x587367.click();
                };
            }
        });
    } else {
        console.log(_0x388aa3.OkWTi);
    };
};
var GetDataTemp2 = 'database linkmagz';
$.ajax({
    'url': '//' + direct_to_link + ('/feeds/posts/summary' + '/?alt=json-in-script' + '&orderby=updated&max-results=9999'),
    'type': 'get',
    'dataType': 'jsonp',
    'success': function Paterpan(_0x426612) {
        var _0x2ddcf6 = {};
        _0x2ddcf6['HhNxy'] = '0|1|2|4|3';
        _0x2ddcf6.zZsPy = 'outputCopyLinkDownload';
        _0x2ddcf6.IhQps = 'disabled';
        _0x2ddcf6.GjWsI = 'SelectAll';
        _0x2ddcf6.FkMeX = 'false';
        _0x2ddcf6['IeQrq'] = 'Copy';
        _0x2ddcf6.xEJGD = 'Not Found Fedd';
        _0x2ddcf6.okpJp = function (_0x89d404, _0x1fbb73) {
            return _0x89d404 + _0x1fbb73;
        };
        _0x2ddcf6.nvIGw = 'http://';
        _0x2ddcf6.HSrCC = function (_0x229414, _0x25b7f9, _0x49347c) {
            return _0x229414(_0x25b7f9, _0x49347c);
        };
        _0x2ddcf6['eMNzx'] = function (_0x54fd04, _0x305502) {
            return _0x54fd04 === _0x305502;
        };
        _0x2ddcf6.aTBeL = 'script';
        _0x2ddcf6.wUgbc = function (_0x4ec2b0) {
            return _0x4ec2b0();
        };
        _0x2ddcf6.fsjXL = function (_0x3d148d, _0x2b0956) {
            return _0x3d148d > _0x2b0956;
        };
        _0x2ddcf6.pnSxB = 'Bxdze';
        _0x2ddcf6.Lmrfj = function (_0x1b5e97, _0x4e1934) {
            return _0x1b5e97 <= _0x4e1934;
        };
        _0x2ddcf6.XchSs = function (_0x1aa1db, _0x8f4e10) {
            return _0x1aa1db !== _0x8f4e10;
        };
        _0x2ddcf6.XzHyT = 'HzPRa';
        _0x2ddcf6.ptxWt = 'VvEsX';
        _0x2ddcf6.FreBz = function (_0x4e1888, _0x95bbf0) {
            return _0x4e1888 < _0x95bbf0;
        };
        _0x2ddcf6.CMGcC = 'jsonp';
        var _0x21ad32 = _0x2ddcf6;
        var _0x414264 = _0x426612.feed;
        var _0x1a742a = _0x414264['openSearch$totalResults']['$t'];
        if (_0x21ad32.fsjXL(_0x1a742a, 0x96)) {
            if ('CotWY' === _0x21ad32.pnSxB) {
                var _0x50a551 = _0x21ad32.HhNxy.split('|');
                var _0x5d5c10 = 0x0;
                while (true) {
                    switch (_0x50a551[_0x5d5c10++]) {
                    case '0':
                        document.getElementById(_0x21ad32['zZsPy']).removeAttribute(_0x21ad32.IhQps);
                        continue;
                    case '1':
                        document.getElementById(_0x21ad32.zZsPy).focus();
                        continue;
                    case '2':
                        document['execCommand'](_0x21ad32.GjWsI);
                        continue;
                    case '3':
                        document['getElementById'](_0x21ad32.zZsPy)['setAttribute'](_0x21ad32.IhQps, _0x21ad32['FkMeX']);
                        continue;
                    case '4':
                        document['execCommand'](_0x21ad32.IeQrq);
                        continue;
                    }
                    break;
                }
            } else {
                var _0x4c87de = 0x96;
            }
        };
        if (_0x21ad32['Lmrfj'](_0x1a742a, 0x96)) {
            if (_0x21ad32.XchSs('orosP', _0x21ad32.XzHyT)) {
                var _0x4c87de = _0x1a742a;
            } else {
                console.log(_0x21ad32.xEJGD);
            }
        };
        var _0x50e4fb = new Array();
        var _0x1a923b = new Array();
        for (var _0x217074 = 0x0; _0x217074 < _0x4c87de; _0x217074++) {
            if (_0x21ad32.eMNzx(_0x414264.entry[_0x217074].link[0x3], undefined)) {
                if (_0x414264.entry[_0x217074].link[0x1].rel === undefined) {} else {
                    if (_0x21ad32['XchSs'](_0x21ad32['ptxWt'], 'VvEsX')) {
                        listlinkku01[_0x217074] = surya_sebatang['entry'][_0x217074].link[0x1]['href'];
                    } else {
                        _0x50e4fb[_0x217074] = _0x414264.entry[_0x217074].link[0x1].href;
                    }
                };
            } else {
                _0x50e4fb[_0x217074] = _0x414264.entry[_0x217074].link[0x3].href;
            };
        };
        for (var _0x521383 = 0x0; _0x21ad32.FreBz(_0x521383, _0x4c87de); _0x521383++) {
            if (_0x21ad32.eMNzx(_0x414264['entry'][_0x521383].title['$t'], undefined)) {} else {
                _0x1a923b[_0x521383] = _0x414264.entry[_0x521383].title['$t'];
            };
        };
        if (_0x21ad32.eMNzx(_0x50e4fb[_0x1a923b.indexOf(GetDataTemp2)], undefined)) {
            console.log(_0x21ad32['xEJGD']);
        } else {
            var _0x31d28f = {};
            _0x31d28f['url'] = _0x50e4fb[_0x1a923b.indexOf(GetDataTemp2)] + ('?alt=json-in-script');
            _0x31d28f['type'] = 'get';
            _0x31d28f.dataType = _0x21ad32.CMGcC;
            _0x31d28f['success'] = function _0x2eb84b(_0x461356) {
                var _0x21d0ac = {};
                _0x21d0ac.yiyyf = function (_0x4eb5c7, _0xd1859a) {
                    return _0x21ad32.okpJp(_0x4eb5c7, _0xd1859a);
                };
                _0x21d0ac['JnBhl'] = _0x21ad32.nvIGw;
                _0x21d0ac.hwsWR = 'areaButtonHome';
                _0x21d0ac['BbLZE'] = function (_0x1de6c9) {
                    return _0x1de6c9();
                };
                _0x21d0ac.YRrHW = function (_0x1d09ac, _0x4bb206) {
                    return _0x1d09ac !== _0x4bb206;
                };
                _0x21d0ac.YnCNb = 'gCRZd';
                _0x21d0ac.WwEhI = function (_0xc52fe6, _0x58d054, _0x30794d) {
                    return _0x21ad32.HSrCC(_0xc52fe6, _0x58d054, _0x30794d);
                };
                var _0x309ab8 = _0x21d0ac;
                if (_0x21ad32.eMNzx(_0x461356.entry.content, undefined)) {} else {
                    var _0x4ac68b = _0x461356.entry.content['$t'];
                    var _0x4bd52b = document['createElement'](_0x21ad32.aTBeL);
                    _0x4bd52b.innerHTML = Base64.decode(_0x4ac68b);
                    _0x4bd52b['id'] = 'get01';
                    document.body['appendChild'](_0x4bd52b);
                    _0x21ad32['wUgbc'](_0x560c4a);

                    function _0x560c4a() {
                        var _0x3c370a = {};
                        _0x3c370a.ZXndS = _0x309ab8['hwsWR'];
                        _0x3c370a.CulPa = 'style';
                        _0x3c370a.brwqo = function (_0xc0328f, _0x501d0a) {
                            return _0xc0328f === _0x501d0a;
                        };
                        _0x3c370a.oiHgs = function (_0x2886ca) {
                            return _0x309ab8.BbLZE(_0x2886ca);
                        };
                        var _0x551fcd = _0x3c370a;
                        if (document.getElementById('get01')) {
                            document['getElementById']('get01').remove();
                        } else {
                            if (_0x309ab8.YRrHW('gCRZd', _0x309ab8.YnCNb)) {
                                var _0xeb1b07 = document['createElement']('a');
                                _0xeb1b07.target = click_target_button2;
                                _0xeb1b07['href'] = _0x309ab8.yiyyf(_0x309ab8['JnBhl'], url_Halaman_Copy);
                                _0xeb1b07.click();
                            } else {
                                _0x309ab8['WwEhI'](setTimeout, function () {
                                    var _0x5dbf1e = {};
                                    _0x5dbf1e['vXyab'] = _0x551fcd.ZXndS;
                                    _0x5dbf1e.dOuEs = _0x551fcd.CulPa;
                                    _0x5dbf1e['brVgj'] = 'text-align' + ':left';
                                    var _0x5186cb = _0x5dbf1e;
                                    if (_0x551fcd.brwqo('jbXvY', 'fcDAf')) {
                                        document.getElementById(_0x5186cb.vXyab).innerHTML = "<div id='a" + 'reaGenerat' + "e'></div>";
                                        document.getElementById(_0x5186cb.vXyab)['setAttribute'](_0x5186cb['dOuEs'], _0x5186cb.brVgj);
                                    } else {
                                        _0x551fcd.oiHgs(_0x560c4a);
                                    }
                                }, 0x64);
                            }
                        };
                    };
                };
            };
            _0x31d28f.async = true;
            $.ajax(_0x31d28f);
        };
    },
	 if (adblockJkoding=='on'){
document.addEventListener("DOMContentLoaded", function() {
var AdblockJkoding = document.createElement("div");
AdblockJkoding.innerHTML=`<div id='areaScriptABlock'></div>`;
AdblockJkoding.id= 'myMessage';
document.body.append(AdblockJkoding);
NextAddPanelDetecAdBlock();
});
function NextAddPanelDetecAdBlock() {
  var judulAd = 'AdBlock Detected!!<br/>Matikan AdBlock';
  var notifAd = 'Agar blog tetap berjalan, matikan AdBlock.<br/>Terima kasih.'; 
  var _0xc9cbx2 = document.createElement("div");
  _0xc9cbx2.id = "jkodingAdBlock";
  _0xc9cbx2.innerHTML = '<div class="isiAds"><span class="judul">' + judulAd + '</span><br/><svg viewBox="0 0 24 24"><path d="M13,13H11V7H13M12,17\.3A1\.3,1\.3 0 0,1 10\.7,16A1\.3,1\.3 0 0,1 12,14\.7A1\.3,1\.3 0 0,1 13\.3,16A1\.3,1\.3 0 0,1 12,17\.3M15\.73,3H8\.27L3,8\.27V15\.73L8\.27,21H15\.73L21,15\.73V8\.27L15\.73,3Z"></path></svg><br/>' + notifAd + "</div>";
   setTimeout(function(){
	if(document.getElementById('myMessage')) {
	document.getElementById('myMessage').append(_0xc9cbx2);
};
   },1000);
  };
  };
    'async': true
});
