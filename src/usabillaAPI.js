/**
 * 
 * Wrapper for Usabilla API (https://developers.usabilla.com/)
 * 
*/

var usabillaAPI = (function () {
    return {
        getAuthHeader: function (apiKey, apiSecret, path, queryString) {
            const hostname = "data.usabilla.com"
            const sf = SignatureFactory
            sf.init(apiKey, apiSecret, hostname);
            sf.setUrl(path);
            sf.setQueryParameters(queryString);

            return { 'Authorization': sf.authHeader(), 'x-usbl-date': sf.dates.longdate }
        },
        getAllButtons: function (request) {
            const params = request.configParams;
            const endpoint = "https://data.usabilla.com/live/websites/button"
            const path = '/live/websites/button'
            const queryString = ''
            const headers = this.getAuthHeader(params.api_key, params.api_secret, path, queryString)

            return this.callUsabillaApi(endpoint + '?' + queryString, headers)
        },
        getAllCampaigns: function (request) {
            const params = request.configParams;
            const endpoint = "https://data.usabilla.com/live/websites/campaign"
            const path = '/live/websites/campaign'
            const queryString = ''
            const headers = this.getAuthHeader(params.api_key, params.api_secret, path, queryString)

            return this.callUsabillaApi(endpoint, headers)
        },

        getAllFeedbackItems: function (request) {

            const path = '/live/websites/button/*/feedback'
            const endpoint = "https://data.usabilla.com/live/websites/button/*/feedback";

            return this.callUsabillaApiWithPagination(request, path, endpoint);
        },

        getAllCampaignsResponses: function (request) {

            const path = '/live/websites/campaign/*/results'
            const endpoint = "https://data.usabilla.com/live/websites/campaign/*/results"

            return this.callUsabillaApiWithPagination(request, path, endpoint);
        },

        callUsabillaApi: function (endpoint, headers) {

            const params = {
                headers: headers,
                muteHttpExceptions: true
            }

            // Synchronous 
            const response = UrlFetchApp.fetch(endpoint, params);
            const json_response = JSON.parse(response);
            Logger.log('Call API: ' + endpoint + " " + json_response.items.length);

            return json_response
        },

        callUsabillaApiWithPagination: function (request, path, endpoint) {

            const startDate = new Date(request.dateRange.startDate).getTime();
            const endDate = new Date(request.dateRange.endDate).getTime();

            const response = { items: [] }

            do {
                const queryString = 'since=' + startDate;
                const headers = this.getAuthHeader(request.configParams.api_key, request.configParams.api_secret, path, queryString);
                const ub_response = this.callUsabillaApi(endpoint + '?' + queryString, headers);

                // Check if there is more items (pages)
                if (ub_response.hasMore == true) {
                    // Update startDate to be used in the next request
                    startDate = ub_response.lastTimestamp;
                } else {
                    hasMore = false;
                }

                // Check if response contains items with a date > than endDate
                if (startDate >= endDate) {
                    hasMore = false;
                }

                const fb_items = ub_response.items;

                for (let i = 0; i < fb_items.length; i++) {
                    // Check if item date is inside the desired interval
                    if (new Date(fb_items[i].date).getTime() < endDate)
                        response.items.push(fb_items[i])
                }

            } while (hasMore !== false)

            return response

        }


    }
})()


var CryptoJS = loadCrypto();

var SignatureFactory = (function () {
    return {
        init: function (accessKey, secretKey, host) {
            this.accessKey = accessKey;
            this.secretKey = secretKey;
            this.host = host;
            this.method = 'GET';
            this.headers = {};
        },
        setUrl: function (url) {
            // mandatory
            // URL encode wildcard
            this.url = url.replace('*', '%2A');
        },
        setMethod: function (method) {
            // optional
            this.method = method;
        },
        setHeaders: function (headers) {
            // optional
            Object.assign(this.headers, headers);
        },
        setQueryParameters: function (params) {
            // optional
            this.queryParameters = params
        },
        getHeadersToSign: function () {
            // add host to headers
            this.headers.host = this.host;
            var headers = this.headers;
            // delete possible cached Authorization header
            delete headers.Authorization;
            // sort headers alphabetically
            return Object.keys(headers).sort().reduce(function (r, k) {
                return r[k] = headers[k], r;
            }, {})
        },
        /**
         * Example;
         * 'host:https://data.usabilla.com\nx-usbl-date:${this.dates.longdate}\n'
         */
        getCanonicalHeaders: function () {
            var headers = this.getHeadersToSign();
            return Object.keys(headers).map(function (k) {
                return [k, headers[k] + '\n'].join(':')
            }).join('');
        },
        /**
         * Example;
         * 'host;x-usbl-date'
         */
        getSignedHeaders: function () {
            var headers = this.getHeadersToSign();
            return Object.keys(headers).join(';');
        },
        canonicalString: function () {
            /**
             * HTTPRequestMethod
             * CanonicalURI
             * CanonicalQueryString
             * CanonicalHeaders
             * SignedHeaders
             * HexEncode(Hash(RequestPayload))
             */
            return [
                this.method,
                this.url,
                this.queryParameters,
                this.getCanonicalHeaders(),
                this.getSignedHeaders(),
                SignatureFactory.hash('', 'hex')
            ].join('\n');
        },
        stringToSign: function () {
            /**
             * Algorithm
             * RequestDate
             * CredentialScope
             * HashedCanonicalRequest
             */
            return [
                'USBL1-HMAC-SHA256',
                this.dates.longdate,
                this.dates.shortdate + '/' + 'usbl1_request',
                SignatureFactory.hash(this.canonicalString(), 'hex')
            ].join('\n');
        },
        getSignature: function () {
            //const kDate = SignatureFactory.hmac('USBL1' + this.secretKey, this.dates.shortdate);
            const kDate = Utilities.computeHmacSha256Signature(this.dates.shortdate, 'USBL1' + this.secretKey);
            const kSigning = SignatureFactory.hmac(kDate, 'usbl1_request');
            const final = SignatureFactory.hmac(kSigning, this.stringToSign());
            var opa = final.map(function (e) {
                return ("0" + (e < 0 ? e + 256 : e).toString(16)).slice(-2);
            }).join("");
            return opa
        },
        authHeader: function () {
            this.dates = SignatureFactory.getDateTime();
            this.headers['x-usbl-date'] = this.dates.longdate;
            return ["USBL1-HMAC-SHA256 Credential=".concat(this.accessKey, "/").concat(this.dates.shortdate, "/usbl1_request"), "SignedHeaders=".concat(this.getSignedHeaders()), "Signature=".concat(this.getSignature())].join(', ');
        },
        getDateTime: function () {
            const date = (new Date())
                .toJSON()
                .replace(/[\-:.]/g, '');
            return {
                shortdate: date.substr(0, 8),
                longdate: "".concat(date.substr(0, 15), "Z")
            };
        },
        hmac: function (key, string) {
            //return CryptoJS.SHA256.HMAC( string, key);
            return Utilities.computeHmacSha256Signature(Utilities.newBlob(string).getBytes(), key);
        },
        hash: function (string) {
            return CryptoJS.SHA256(string);
        }

    }


})()


// Crypto 
function loadCrypto() {
    var window = {};
    var Crypto = undefined;
    /*
     * Crypto-JS v2.5.3
     * http://code.google.com/p/crypto-js/
     * (c) 2009-2012 by Jeff Mott. All rights reserved.
     * http://code.google.com/p/crypto-js/wiki/License
     */
    // start sha256/CryptoJS
    (typeof Crypto == "undefined" || !Crypto.util) && function () {
        var d = window.Crypto = {}, k = d.util = {
            rotl: function (b, a) { return b << a | b >>> 32 - a }, rotr: function (b, a) { return b << 32 - a | b >>> a }, endian: function (b) { if (b.constructor == Number) return k.rotl(b, 8) & 16711935 | k.rotl(b, 24) & 4278255360; for (var a = 0; a < b.length; a++)b[a] = k.endian(b[a]); return b }, randomBytes: function (b) { for (var a = []; b > 0; b--)a.push(Math.floor(Math.random() * 256)); return a }, bytesToWords: function (b) {
                for (var a = [], c = 0, e = 0; c < b.length; c++, e += 8)a[e >>> 5] |= (b[c] & 255) <<
                    24 - e % 32; return a
            }, wordsToBytes: function (b) { for (var a = [], c = 0; c < b.length * 32; c += 8)a.push(b[c >>> 5] >>> 24 - c % 32 & 255); return a }, bytesToHex: function (b) { for (var a = [], c = 0; c < b.length; c++)a.push((b[c] >>> 4).toString(16)), a.push((b[c] & 15).toString(16)); return a.join("") }, hexToBytes: function (b) { for (var a = [], c = 0; c < b.length; c += 2)a.push(parseInt(b.substr(c, 2), 16)); return a }, bytesToBase64: function (b) {
                if (typeof btoa == "function") return btoa(g.bytesToString(b)); for (var a = [], c = 0; c < b.length; c += 3)for (var e = b[c] << 16 | b[c + 1] <<
                    8 | b[c + 2], p = 0; p < 4; p++)c * 8 + p * 6 <= b.length * 8 ? a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >>> 6 * (3 - p) & 63)) : a.push("="); return a.join("")
            }, base64ToBytes: function (b) {
                if (typeof atob == "function") return g.stringToBytes(atob(b)); for (var b = b.replace(/[^A-Z0-9+\/]/ig, ""), a = [], c = 0, e = 0; c < b.length; e = ++c % 4)e != 0 && a.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c - 1)) & Math.pow(2, -2 * e + 8) - 1) << e * 2 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(c)) >>>
                    6 - e * 2); return a
            }
        }, d = d.charenc = {}; d.UTF8 = { stringToBytes: function (b) { return g.stringToBytes(unescape(encodeURIComponent(b))) }, bytesToString: function (b) { return decodeURIComponent(escape(g.bytesToString(b))) } }; var g = d.Binary = { stringToBytes: function (b) { for (var a = [], c = 0; c < b.length; c++)a.push(b.charCodeAt(c) & 255); return a }, bytesToString: function (b) { for (var a = [], c = 0; c < b.length; c++)a.push(String.fromCharCode(b[c])); return a.join("") } }
    }();
    Crypto = window.Crypto;
    (function () {
        var d = Crypto, k = d.util, g = d.charenc, b = g.UTF8, a = g.Binary, c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921,
            2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], e = d.SHA256 = function (b, c) { var f = k.wordsToBytes(e._sha256(b)); return c && c.asBytes ? f : c && c.asString ? a.bytesToString(f) : k.bytesToHex(f) }; e._sha256 = function (a) {
                a.constructor == String && (a = b.stringToBytes(a)); var e = k.bytesToWords(a), f = a.length * 8, a = [1779033703, 3144134277,
                    1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], d = [], g, m, r, i, n, o, s, t, h, l, j; e[f >> 5] |= 128 << 24 - f % 32; e[(f + 64 >> 9 << 4) + 15] = f; for (t = 0; t < e.length; t += 16) {
                        f = a[0]; g = a[1]; m = a[2]; r = a[3]; i = a[4]; n = a[5]; o = a[6]; s = a[7]; for (h = 0; h < 64; h++) {
                            h < 16 ? d[h] = e[h + t] : (l = d[h - 15], j = d[h - 2], d[h] = ((l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3) + (d[h - 7] >>> 0) + ((j << 15 | j >>> 17) ^ (j << 13 | j >>> 19) ^ j >>> 10) + (d[h - 16] >>> 0)); j = f & g ^ f & m ^ g & m; var u = (f << 30 | f >>> 2) ^ (f << 19 | f >>> 13) ^ (f << 10 | f >>> 22); l = (s >>> 0) + ((i << 26 | i >>> 6) ^ (i << 21 | i >>> 11) ^ (i << 7 | i >>> 25)) +
                                (i & n ^ ~i & o) + c[h] + (d[h] >>> 0); j = u + j; s = o; o = n; n = i; i = r + l >>> 0; r = m; m = g; g = f; f = l + j >>> 0
                        } a[0] += f; a[1] += g; a[2] += m; a[3] += r; a[4] += i; a[5] += n; a[6] += o; a[7] += s
                    } return a
            }; e._blocksize = 16; e._digestsize = 32
    })();
    (function () { var d = Crypto, k = d.util, g = d.charenc, b = g.UTF8, a = g.Binary; d.HMAC = function (c, e, d, g) { e.constructor == String && (e = b.stringToBytes(e)); d.constructor == String && (d = b.stringToBytes(d)); d.length > c._blocksize * 4 && (d = c(d, { asBytes: !0 })); for (var f = d.slice(0), d = d.slice(0), q = 0; q < c._blocksize * 4; q++)f[q] ^= 92, d[q] ^= 54; c = c(f.concat(c(d.concat(e), { asBytes: !0 })), { asBytes: !0 }); return g && g.asBytes ? c : g && g.asString ? a.bytesToString(c) : k.bytesToHex(c) } })();
    // end sha256/CryptoJS

    return window.Crypto;
}