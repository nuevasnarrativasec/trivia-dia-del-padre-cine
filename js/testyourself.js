function md5(n) {
    var ht, a = function(n, t) {
            return n << t | n >>> 32 - t
        },
        o = function(n, t) {
            var f, e, r, u, i;
            return (r = n & 2147483648, u = t & 2147483648, f = n & 1073741824, e = t & 1073741824, i = (n & 1073741823) + (t & 1073741823), f & e) ? i ^ 2147483648 ^ r ^ u : f | e ? i & 1073741824 ? i ^ 3221225472 ^ r ^ u : i ^ 1073741824 ^ r ^ u : i ^ r ^ u
        },
        yt = function(n, t, i) {
            return n & t | ~n & i
        },
        pt = function(n, t, i) {
            return n & i | t & ~i
        },
        wt = function(n, t, i) {
            return n ^ t ^ i
        },
        bt = function(n, t, i) {
            return t ^ (n | ~i)
        },
        s = function(n, t, i, r, u, f, e) {
            return n = o(n, o(o(yt(t, i, r), u), e)), o(a(n, f), t)
        },
        h = function(n, t, i, r, u, f, e) {
            return n = o(n, o(o(pt(t, i, r), u), e)), o(a(n, f), t)
        },
        c = function(n, t, i, r, u, f, e) {
            return n = o(n, o(o(wt(t, i, r), u), e)), o(a(n, f), t)
        },
        l = function(n, t, i, r, u, f, e) {
            return n = o(n, o(o(bt(t, i, r), u), e)), o(a(n, f), t)
        },
        kt = function(n) {
            for (var r, u = n.length, o = u + 8, s = (o - o % 64) / 64, e = (s + 1) * 16, i = new Array(e - 1), f = 0, t = 0; t < u;) r = (t - t % 4) / 4, f = t % 4 * 8, i[r] = i[r] | n.charCodeAt(t) << f, t++;
            return r = (t - t % 4) / 4, f = t % 4 * 8, i[r] = i[r] | 128 << f, i[e - 2] = u << 3, i[e - 1] = u >>> 29, i
        },
        v = function(n) {
            for (var i = "", r = "", u, t = 0; t <= 3; t++) u = n >>> t * 8 & 255, r = "0" + u.toString(16), i = i + r.substr(r.length - 2, 2);
            return i
        },
        e = [],
        f, ct, lt, at, vt, t, i, r, u, y = 7,
        p = 12,
        w = 17,
        b = 22,
        k = 5,
        d = 9,
        g = 14,
        nt = 20,
        tt = 4,
        it = 11,
        rt = 16,
        ut = 23,
        ft = 6,
        et = 10,
        ot = 15,
        st = 21;
    for (n = this.utf8_encode(n), e = kt(n), t = 1732584193, i = 4023233417, r = 2562383102, u = 271733878, ht = e.length, f = 0; f < ht; f += 16) ct = t, lt = i, at = r, vt = u, t = s(t, i, r, u, e[f + 0], y, 3614090360), u = s(u, t, i, r, e[f + 1], p, 3905402710), r = s(r, u, t, i, e[f + 2], w, 606105819), i = s(i, r, u, t, e[f + 3], b, 3250441966), t = s(t, i, r, u, e[f + 4], y, 4118548399), u = s(u, t, i, r, e[f + 5], p, 1200080426), r = s(r, u, t, i, e[f + 6], w, 2821735955), i = s(i, r, u, t, e[f + 7], b, 4249261313), t = s(t, i, r, u, e[f + 8], y, 1770035416), u = s(u, t, i, r, e[f + 9], p, 2336552879), r = s(r, u, t, i, e[f + 10], w, 4294925233), i = s(i, r, u, t, e[f + 11], b, 2304563134), t = s(t, i, r, u, e[f + 12], y, 1804603682), u = s(u, t, i, r, e[f + 13], p, 4254626195), r = s(r, u, t, i, e[f + 14], w, 2792965006), i = s(i, r, u, t, e[f + 15], b, 1236535329), t = h(t, i, r, u, e[f + 1], k, 4129170786), u = h(u, t, i, r, e[f + 6], d, 3225465664), r = h(r, u, t, i, e[f + 11], g, 643717713), i = h(i, r, u, t, e[f + 0], nt, 3921069994), t = h(t, i, r, u, e[f + 5], k, 3593408605), u = h(u, t, i, r, e[f + 10], d, 38016083), r = h(r, u, t, i, e[f + 15], g, 3634488961), i = h(i, r, u, t, e[f + 4], nt, 3889429448), t = h(t, i, r, u, e[f + 9], k, 568446438), u = h(u, t, i, r, e[f + 14], d, 3275163606), r = h(r, u, t, i, e[f + 3], g, 4107603335), i = h(i, r, u, t, e[f + 8], nt, 1163531501), t = h(t, i, r, u, e[f + 13], k, 2850285829), u = h(u, t, i, r, e[f + 2], d, 4243563512), r = h(r, u, t, i, e[f + 7], g, 1735328473), i = h(i, r, u, t, e[f + 12], nt, 2368359562), t = c(t, i, r, u, e[f + 5], tt, 4294588738), u = c(u, t, i, r, e[f + 8], it, 2272392833), r = c(r, u, t, i, e[f + 11], rt, 1839030562), i = c(i, r, u, t, e[f + 14], ut, 4259657740), t = c(t, i, r, u, e[f + 1], tt, 2763975236), u = c(u, t, i, r, e[f + 4], it, 1272893353), r = c(r, u, t, i, e[f + 7], rt, 4139469664), i = c(i, r, u, t, e[f + 10], ut, 3200236656), t = c(t, i, r, u, e[f + 13], tt, 681279174), u = c(u, t, i, r, e[f + 0], it, 3936430074), r = c(r, u, t, i, e[f + 3], rt, 3572445317), i = c(i, r, u, t, e[f + 6], ut, 76029189), t = c(t, i, r, u, e[f + 9], tt, 3654602809), u = c(u, t, i, r, e[f + 12], it, 3873151461), r = c(r, u, t, i, e[f + 15], rt, 530742520), i = c(i, r, u, t, e[f + 2], ut, 3299628645), t = l(t, i, r, u, e[f + 0], ft, 4096336452), u = l(u, t, i, r, e[f + 7], et, 1126891415), r = l(r, u, t, i, e[f + 14], ot, 2878612391), i = l(i, r, u, t, e[f + 5], st, 4237533241), t = l(t, i, r, u, e[f + 12], ft, 1700485571), u = l(u, t, i, r, e[f + 3], et, 2399980690), r = l(r, u, t, i, e[f + 10], ot, 4293915773), i = l(i, r, u, t, e[f + 1], st, 2240044497), t = l(t, i, r, u, e[f + 8], ft, 1873313359), u = l(u, t, i, r, e[f + 15], et, 4264355552), r = l(r, u, t, i, e[f + 6], ot, 2734768916), i = l(i, r, u, t, e[f + 13], st, 1309151649), t = l(t, i, r, u, e[f + 4], ft, 4149444226), u = l(u, t, i, r, e[f + 11], et, 3174756917), r = l(r, u, t, i, e[f + 2], ot, 718787259), i = l(i, r, u, t, e[f + 9], st, 3951481745), t = o(t, ct), i = o(i, lt), r = o(r, at), u = o(u, vt);
    var dt = v(t) + v(i) + v(r) + v(u);
    return dt.toLowerCase()
}

function utf8_encode(n) {
    if (n === null || typeof n == "undefined") return "";
    var f = n + "",
        o = "",
        r, u, s = 0;
    r = u = 0;
    s = f.length;
    for (var i = 0; i < s; i++) {
        var t = f.charCodeAt(i),
            e = null;
        if (t < 128) u++;
        else if (t > 127 && t < 2048) e = String.fromCharCode(t >> 6 | 192, t & 63 | 128);
        else if (t & !0) e = String.fromCharCode(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
        else {
            if (t & !0) throw new RangeError("Unmatched trail surrogate at " + i);
            var h = f.charCodeAt(++i);
            if (h & !0) throw new RangeError("Unmatched lead surrogate at " + (i - 1));
            t = ((t & 1023) << 10) + (h & 1023) + 65536;
            e = String.fromCharCode(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128)
        }
        e !== null && (u > r && (o += f.slice(r, u)), o += e, r = u = i + 1)
    }
    return u > r && (o += f.slice(r, s)), o
}(function(n, t) {
    n.store = function(t, i) {
        var r = this;
        if (typeof t == "string")
            if (n.store.drivers[t]) this.driver = n.store.drivers[t];
            else throw new Error("Unknown driver " + t);
        else if (typeof t == "object") {
            var u = !n.isFunction(t.init) || !n.isFunction(t.get) || !n.isFunction(t.set) || !n.isFunction(t.del) || !n.isFunction(t.flush);
            if (u) throw new Error("The specified driver does not fulfill the API requirements");
            this.driver = t
        } else n.each(n.store.drivers, function() {
            return !n.isFunction(this.available) || !this.available() ? !0 : (r.driver = this, r.driver.init() === !1) ? (r.driver = null, !0) : !1
        });
        i || (i = n.store.serializers);
        this.serializers = {};
        n.each(i, function(t) {
            if (!n.isFunction(this.init)) return !0;
            r.serializers[t] = this;
            r.serializers[t].init(r.encoders, r.decoders)
        })
    };
    n.extend(n.store.prototype, {
        get: function(n) {
            var t = this.driver.get(n);
            return this.driver.encodes ? t : this.unserialize(t)
        },
        set: function(n, t) {
            this.driver.set(n, this.driver.encodes ? t : this.serialize(t))
        },
        del: function(n) {
            this.driver.del(n)
        },
        flush: function() {
            this.driver.flush()
        },
        driver: t,
        encoders: [],
        decoders: [],
        serialize: function(t) {
            var i = this;
            return n.each(this.encoders, function() {
                var n = i.serializers[this + ""];
                if (!n || !n.encode) return !0;
                try {
                    t = n.encode(t)
                } catch (r) {}
            }), t
        },
        unserialize: function(t) {
            var i = this;
            return t ? (n.each(this.decoders, function() {
                var n = i.serializers[this + ""];
                if (!n || !n.decode) return !0;
                t = n.decode(t)
            }), t) : t
        }
    });
    n.store.drivers = {
        localStorage: {
            ident: "$.store.drivers.localStorage",
            scope: "browser",
            available: function() {
                try {
                    return !window.localStorage ? !1 : (window.localStorage.setItem("jQuery Store Availability test", !0), window.localStorage.removeItem("jQuery Store Availability test"), !0)
                } catch (n) {
                    return !1
                }
            },
            init: n.noop,
            get: function(n) {
                return window.localStorage.getItem(n)
            },
            set: function(n, t) {
                window.localStorage.setItem(n, t)
            },
            del: function(n) {
                window.localStorage.removeItem(n)
            },
            flush: function() {
                window.localStorage.clear()
            }
        },
        userData: {
            ident: "$.store.drivers.userData",
            element: null,
            nodeName: "userdatadriver",
            scope: "browser",
            initialized: !1,
            available: function() {
                try {
                    return !!(document.documentElement && document.documentElement.addBehavior)
                } catch (n) {
                    return !1
                }
            },
            init: function() {
                if (!this.initialized) try {
                    this.element = document.createElement(this.nodeName);
                    document.documentElement.insertBefore(this.element, document.getElementsByTagName("title")[0]);
                    this.element.addBehavior("#default#userData");
                    this.initialized = !0
                } catch (n) {
                    return !1
                }
            },
            get: function(n) {
                return this.element.load(this.nodeName), this.element.getAttribute(n)
            },
            set: function(n, t) {
                this.element.setAttribute(n, t);
                this.element.save(this.nodeName)
            },
            del: function(n) {
                this.element.removeAttribute(n);
                this.element.save(this.nodeName)
            },
            flush: function() {
                for (var t = this.element.xmlDocument.firstChild.attributes, n = t.length - 1; n >= 0; n--) this.element.removeAttribute(t[n].nodeName);
                this.element.save(this.nodeName)
            }
        },
        windowName: {
            ident: "$.store.drivers.windowName",
            scope: "window",
            cache: {},
            encodes: !0,
            available: function() {
                return !0
            },
            init: function() {
                this.load()
            },
            save: function() {
                window.name = n.store.serializers.json.encode(this.cache)
            },
            load: function() {
                try {
                    this.cache = n.store.serializers.json.decode(window.name + "");
                    typeof this.cache != "object" && (this.cache = {})
                } catch (t) {
                    this.cache = {};
                    window.name = "{}"
                }
            },
            get: function(n) {
                return this.cache[n]
            },
            set: function(n, t) {
                this.cache[n] = t;
                this.save()
            },
            del: function(n) {
                try {
                    delete this.cache[n]
                } catch (i) {
                    this.cache[n] = t
                }
                this.save()
            },
            flush: function() {
                window.name = "{}"
            }
        }
    };
    n.store.serializers = {
        json: {
            ident: "$.store.serializers.json",
            init: function(n, t) {
                n.push("json");
                t.push("json")
            },
            encode: JSON.stringify,
            decode: JSON.parse
        },
        xml: {
            ident: "$.store.serializers.xml",
            init: function(n, t) {
                n.unshift("xml");
                t.push("xml")
            },
            isXML: function(n) {
                var t = (n ? n.ownerDocument || n : 0).documentElement;
                return t ? t.nodeName.toLowerCase() !== "html" : !1
            },
            encode: function(n) {
                if (!n || n._serialized || !this.isXML(n)) return n;
                var t = {
                    _serialized: this.ident,
                    value: n
                };
                try {
                    return t.value = (new XMLSerializer).serializeToString(n), t
                } catch (i) {
                    try {
                        return t.value = n.xml, t
                    } catch (r) {}
                }
                return n
            },
            decode: function(n) {
                if (!n || !n._serialized || n._serialized != this.ident) return n;
                var i = "DOMParser" in window && (new DOMParser).parseFromString;
                return (!i && window.ActiveXObject && (i = function(n) {
                    var t = new ActiveXObject("Microsoft.XMLDOM");
                    return t.async = "false", t.loadXML(n), t
                }), !i) ? t : (n.value = i.call("DOMParser" in window && new DOMParser || window, n.value, "text/xml"), this.isXML(n.value) ? n.value : t)
            }
        }
    }
})(jQuery);
var Tools = {
    articleCanonicalUrl: function() {
        return Tools.getURLParam("articleCanonicalUrl")
    },
    getBrowserLanguage: function() {
        var n = navigator.language || navigator.userLanguage;
        return n && n.toLowerCase()
    },
    articleCanonicalUrlExtended: function() {
        var n = null;
        if (Tools.isFeed()) {
            if (n = Tools.getURLParam("articleCanonicalUrl"), !n || n == "null") return null
        } else {
            if (typeof gameData != "object") return null;
            n = "http://" + document.location.host + "/" + gameData.creatorName + "/" + gameData.gameName
        }
        return n != null && (n = decodeURIComponent(n)), n
    },
    setUserLocation: function(n) {
        try {
            window.userlocation = n.country;
            window.localStorage && (window.localStorage.userLocation = window.userlocation)
        } catch (t) {
            console.log("speed-exception", t)
        }
    },
    getUserLocation: function() {
        return window.userlocation
    },
    loadCSS: function(n, t) {
        try {
            for (var o = document.getElementsByTagName("link"), s = document.getElementsByTagName("style"), i = [], f = 0; f < o.length; f++) i.push(o[f]);
            for (var e = 0; e < s.length; e++) i.push(s[e]);
            for (var r = 0; r < i.length; r++)
                if (i[r].hasOwnProperty("href") && i[r].href.indexOf(n) >= 0 || i[r].hasOwnProperty("id") && i[r].id == n) {
                    t != null && t({
                        result: "success"
                    });
                    return
                }
        } catch (h) {
            console.log("speed-exception", h)
        }
        if (BrowserDetect.browser != "Explorer") $.ajax({
            url: n,
            success: function(i) {
                var r = document.createElement("style");
                r.type = "text/css";
                r.id = n;
                r.innerHTML = i;
                document.getElementsByTagName("head")[0].appendChild(r);
                t != null && t({
                    result: "success"
                })
            },
            error: function() {
                t != null && t({
                    result: "error",
                    url: n
                })
            }
        });
        else {
            var u = document.createElement("link");
            u.rel = "stylesheet";
            u.type = "text/css";
            u.onload = function() {
                t != null && t({
                    result: "success"
                })
            };
            u.href = n;
            document.getElementsByTagName("head")[0].appendChild(u)
        }
    },
    shouldShowShares: function() {
        if (!Tools.isFeed()) return !0;
        var n = Tools.getURLParam("parentUrl");
        return n === null || typeof n == "undefined" ? !1 : n.indexOf("instant-article") >= 0 ? !1 : Tools.getURLParam("useShares") === "false" ? !1 : window.displaySettings && displaySettings.showShares.toLowerCase() == "true"
    },
    getImageUrl: function(n) {
        var t = "",
            r = document.location.protocol,
            i = function() {
                if (n.GameImage == "" || n.GameImage == null) return !1;
                var t = n.GameImage.split(".");
                return isMobile ? t[0] + "_295_125." + t[1] : t[0] + "_560_420." + t[1]
            }();
        if (!i) return !1;
        var u = "/" + n.GameId + "/" + i;
        return t = document.location.host.indexOf("localhost") >= 0 ? "teststorage" : "cdn", r + "/especiales/que-mujer-del-cine-o-television-eres/" + t + u
    },
    loadCSSList: function(n, t) {
        if (n.length == 0) {
            t && t();
            return
        }
        var i = n.pop();
        this.loadCSS(i, function() {
            tools.loadCSSList(n, t)
        })
    },
    createUUID: function() {
        for (var n = [], i = "0123456789abcdef", t = 0; t < 36; t++) n[t] = i.substr(Math.floor(Math.random() * 16), 1);
        n[14] = "4";
        n[19] = i.substr(n[19] & 3 | 8, 1);
        n[8] = n[13] = n[18] = n[23] = "-";
        return n.join("")
    },
    randomWord: function(n) {
        for (var i = "", r = 0; r < 16; r++) {
            var u = r % 2 == 0 ? "bcdfghjklmnpqrstvwxyz" : "aeiou",
                f = Math.floor(Math.random() * u.length),
                t = u.charAt(f);
            n && (t = Math.floor(Math.random() * 2) == 0 ? t : t.toUpperCase());
            i += t
        }
        return n && (i += (new Date).getTime()), i
    },
    getTimeFromMS: function(n) {
        var t = Math.floor(n / 36e5),
            r = n - t * 36e5,
            i = Math.floor(r / 6e4);
        r -= i * 6e4;
        var u = Math.floor(r / 1e3),
            f = t < 10 ? "0" + t : t;
        return f += ":" + (i < 10 ? "0" + i : i), f + (":" + (u < 10 ? "0" + u : u))
    },
    topMessage: function(n, t) {
        clearTimeout(Tools.topMessageTimer);
        t || $("#top_message_inner").empty();
        var i = $("<div><\/div>").html(n).addClass("top_message").appendTo("#top_message_inner");
        $("#top_message_container").css("display", "block");
        Tools.topMessageTimer = setTimeout(function() {
            $("#top_message_close_button").click()
        }, 5e3)
    },
    topMessageTimer: null,
    cancelEvent: function(n) {
        return n.preventDefault(), !1
    },
    isValidImage: function(n, t, i) {
        var r = ["png", "jpg", "jpeg", "gif"];
        t && i && r.pop();
        for (var f = !1, u = 0; u < r.length; u++) {
            var e = r[u];
            if (n.toLowerCase().indexOf(e) >= 0) {
                f = !0;
                break
            }
        }
        return f
    },
    formatTime: function(n) {
        var i = new Date(n),
            t = {
                year: i.getFullYear(),
                month: i.getMonth() + 1,
                day: i.getDate(),
                hours: i.getHours(),
                minutes: i.getMinutes(),
                seconds: i.getSeconds()
            };
        for (var r in t) t[r] < 10 && (t[r] = "0" + t[r]);
        return t.year + "-" + t.month + "-" + t.day + " " + t.hours + ":" + t.minutes + ":" + t.seconds
    },
    getDayOfTheYear: function(n) {
        var t = new Date(n.getFullYear(), 0, 0),
            i = new Date(n).setHours(12),
            r = i - t;
        return Math.floor(r / 864e5)
    },
    getPartOfDay: function(n) {
        var t = n.getHours();
        return t <= 5 ? 1 : t <= 12 ? 2 : t <= 18 ? 3 : 4
    },
    getYearDayAndPart: function() {
        var n = new Date;
        return n.setHours(n.getUTCHours() - 8), "_" + Tools.getDayOfTheYear(n) + "_" + Tools.getPartOfDay(n)
    },
    isValidYoutube: function(n) {
        if (!n) return null;
        var t = n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        return t && t[2].length == 11 ? t[2] : n.length == 11 ? n : !1
    },
    getURLParam: function(n, t) {
        n && (n = n.toLowerCase());
        var f = document.location.toString(),
            t = t === undefined && t !== null ? !0 : t,
            e = f.split("?");
        if (e.length <= 1) return null;
        var l = e[0],
            i = f.substr(l.length + 1);
        t && i.search("#") >= 0 && (i = i.split("#")[0]);
        var o = {};
        if (i) {
            var s = i.split("&");
            try {
                for (var r = 0; r < s.length; r++) {
                    var u = s[r].split("=");
                    if (u.length > 1) {
                        var h = u[0],
                            c = u[1];
                        if (n == h.toLowerCase()) return c;
                        o[h] = c
                    }
                }
            } catch (a) {
                console.log("speed-exception", a)
            }
        } else return null;
        return n == undefined || !n ? o : null
    },
    hasParam: function(n) {
        return n ? location.search.substr(1).split("&").some(function(t) {
            return t.split("=")[0].toLowerCase() === n.toLowerCase()
        }) : (console.warn("can't get empty param"), !1)
    },
    removeDecodedUrlParams: function(n, t) {
        for (var i = n, r = 0; r < t.length; r++) i = Tools.removeDecodedUrlParam(i, t[r]);
        return i
    },
    removeDecodedUrlParam: function(n, t) {
        if (typeof n == "undefined" || n === null) return "";
        if (!t || n.indexOf(t) < 0) return n;
        var i = n.split("?"),
            r = i.length > 1 ? i[1].split("&") : [],
            u = r.filter(function(n) {
                return n.split("=")[0] !== t
            }).join("&");
        return i[0] + "?" + u
    },
    extractParameters: function(n) {
        var u = {};

        function r(t) {
            while (n.search(t) >= 0) n = n.replace(t, "")
        }
        r("'");
        r("{");
        r("}");
        for (var i = n.split(","), t = 0; t < i.length; t++)
            if (i[t].search(":") > 0) {
                var f = i[t].split(":")[0],
                    e = i[t].split(":")[1];
                u[f] = e
            }
        return u
    },
    getUrlRightSide: function() {
        var n;
        try {
            var t = document.location.toString(),
                i = document.location.host,
                r = t.search(i) + i.length + 1;
            n = t.substr(r)
        } catch (u) {
            console.log("speed-exception", u)
        }
        return n
    },
    getCreatorName: function() {
        var n = Tools.getUrlRightSide();
        return n.split("/")[0]
    },
    getGameName: function() {
        var n = Tools.getUrlRightSide(),
            t = n.split("?")[0];
        return t.split("/")[1]
    },
    isGameCreator: function() {
        return window.gameData ? $.cookie("playbuzz").userId === window.gameData.creatorId : !1
    },
    isLoggedInUserOwnChannel: function() {
        return window.UserData ? $.cookie("playbuzz").userId === window.UserData.userId : !1
    },
    isIpad: function() {
        return navigator.userAgent.match(/iPad/i) ? !0 : !1
    }(),
    isIpadFBWebView: function() {
        return navigator.userAgent.match(/FBDV\/iPad/i) ? !0 : !1
    }(),
    asianLocalesRegEx: /^(zh-CN|zh-HK|ko-KR|ja-JP|id-ID)/,
    russianLocalesRegEx: /^(ru|uk)/,
    isMobile: function() {
        return navigator.userAgent.match(/^(mozilla\/5\.0\s\((android;|linux;)\su;\sandroid\s2\.1;\sen-us;\)\sapplewebkit\/525\.10\+{0,1}\s\(khtml,\slike\sgecko\))|(mozilla\/5\.0\s\(windows\snt\s6\.2;\sarm;\strident\/7\.0;\stouch;\srv:11\.0;\swpdesktop;\s(nokia;\s){0,1}lumia\s(1){0,1}\d{3}\)\slike\sgecko)$/i) ? !0 : (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && !navigator.userAgent.match(/iPad/i) ? !0 : !1
    }(),
    isMobileNotTablet: function() {
        return navigator.userAgent.match(/^(mozilla\/5\.0\s\((android;|linux;)\su;\sandroid\s2\.1;\sen-us;\)\sapplewebkit\/525\.10\+{0,1}\s\(khtml,\slike\sgecko\))|(mozilla\/5\.0\s\(windows\snt\s6\.2;\sarm;\strident\/7\.0;\stouch;\srv:11\.0;\swpdesktop;\s(nokia;\s){0,1}lumia\s(1){0,1}\d{3}\)\slike\sgecko)$/i) ? !0 : (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && navigator.userAgent.match(/Mobile/i) && !navigator.userAgent.match(/iPad/i) ? !0 : !1
    }(),
    storage: function() {
        if ($.store) {
            var n = {},
                u = new $.store,
                i, t = !1;

            function r() {
                if (window.gameData) i = "/especiales/que-mujer-del-cine-o-television-eres/" + gameData.gameId;
                else return;
                t = !0
            }
            return n.set = function(f) {
                t || r();
                var e = f ? $.extend(!0, n.getData(), f) : null;
                u.set(i, e)
            }, n.getData = function() {
                return t || r(), u.get(i)
            }, n.resetData = function() {
                t || r();
                n.set(null)
            }, n
        }
    }(),
    linkify: function(n, t) {
        var i, r, u, f = t ? "data-src='" + t + "'" : "";
        for (r = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, i = n.replace(r, '<a onclick="onLinkifiedUrl(this)" {src} class="linkified_url" rel="nofollow" href="$1" target="_blank">$1<\/a>'), u = /(^|[^\/])(www\.[\S]+(\b|$))/gim, i = i.replace(u, '$1<a onclick="onLinkifiedUrl(this)" {src} class="linkified_url" rel="nofollow" href="http://$2" target="_blank">$2<\/a>'), i = i.replace("{src}", f); i.indexOf("__ht__") >= 0;) console.log("replacing!"), i = i.replace("__ht__", "http:");
        return i
    },
    isErez: function() {
        try {
            var n = $.cookie("playbuzz").nickname == "erezr",
                t = Tools.getURLParam("whatami") == "anIdiot";
            return n && t
        } catch (i) {
            return console.log("speed-exception", i), !1
        }
    },
    getURLParamString: function(n, t) {
        var n = n ? n : Tools.getURLParam(null, !1);
        t && n && n[t] !== undefined && delete n[t];
        var i = "?",
            u = "",
            r = 0;
        for (var f in n) {
            var e = decodeURI(n[f]);
            u = r === 0 ? "" : "&";
            i += u + f + "=" + encodeURI(e);
            r++
        }
        return r === 0 && (i = ""), i
    },
    intToString: function(n) {
        for (var t = Math.abs(n), r = n < 0 ? -1 : 1, i = 0; t / 1e3 >= 1;) i++, t /= 1e3;
        return t = t < 10 ? Math.round(t * 10) / 10 : Math.round(t), t * r + ["", "k", "m", "b", "t"][i]
    },
    isNullOrUndefined: function(n, t) {
        return t = t || "", n == undefined || n == null ? t : n
    },
    escape: function(n) {
        return encodeURIComponent(n).replace("!", "%21").replace("'", "%27").replace("~", "%7E").replace("(", "%28").replace(")", "%29").replace("-", "%2D")
    },
    sumTo: function(n, t) {
        var r = 0;
        if (isNaN(n) || isNaN(t)) return 0;
        for (var i = n; i <= t; i++) r += i;
        return r
    },
    isFeed: function() {
        return Tools.getURLParam("feed") == "true"
    },
    isPreview: function() {
        var i = document.location.host + "/",
            r = document.location.toString(),
            n = r.split(i)[1];
        if (n) {
            var t = n.split("/")[0];
            if (t && t.toLowerCase() == "previewgame") return !0
        }
        return !1
    },
    addParamToUrl: function(n, t, i) {
        var f = Tools.isFeed(),
            r = n,
            u = "";
        return r = f ? decodeURIComponent(n) : n, r.indexOf("?") > -1 ? (r.indexOf(t + "=") > -1 && (r = Tools.removeUrlParam(r, t), r = decodeURIComponent(r)), u = "&" + t + "=" + i) : u = "?" + t + "=" + i, encodeURIComponent(r + u)
    },
    replaceAll: function(n, t, i) {
        if (!t || !n) throw new Error("Please verify both arguments are defined");
        return n.split(t).join(i)
    },
    removeUrlParam: function(n, t) {
        n = decodeURIComponent(n);
        var u = n.split("?"),
            e = u[0],
            f = u[1];
        if (f)
            for (var i = f.split("&"), r = 0; r < i.length; r++)
                if (i[r].split("=")[0] == t) {
                    if (i.splice(r, 1), n = e, i.length >= 1) {
                        var o = i.join("&");
                        n += "?" + o
                    }
                    return encodeURIComponent(n)
                }
        return encodeURIComponent(n)
    },
    cleanUrlParamsForShare: function(n) {
        if (typeof n != "string") return n;
        var t = n,
            i = n.split("?");
        if (i.length > 1) {
            t = i[0] + "?";
            var r = i[1].split("&");
            $.each(r, function(n, i) {
                i.indexOf("fb_") !== 0 && i.indexOf("homepageItemLocation") !== 0 && i.indexOf("homepageFeedItemCategory") !== 0 && (t = t + i + "&")
            });
            t = t.substr(0, t.length - 1)
        }
        return t
    },
    parseURL: function(n) {
        var t = document.createElement("a");
        return t.href = n, {
            source: n,
            protocol: t.protocol.replace(":", ""),
            host: t.hostname,
            port: t.port,
            query: t.search,
            hash: t.hash.replace("#", ""),
            path: t.pathname.replace(/^([^/])/, "/$1")
        }
    },
    getUrlParameterByName: function(n) {
        var t = Tools.queryString.parse();
        return t[n]
    },
    queryString: {
        parse: function(n) {
            var i = {};
            if (n = n !== undefined ? n : window.location.search, typeof n == "string" && n.length > 0) {
                n[0] === "?" && (n = n.substring(1));
                n = n.split("&");
                for (var f = 0, o = n.length; f < o; f++) {
                    var u = n[f],
                        e = u.indexOf("="),
                        t, r;
                    e >= 0 ? (t = u.substr(0, e), r = u.substr(e + 1)) : (t = u, r = "");
                    r = decodeURIComponent(r);
                    i[t] === undefined ? i[t] = r : i[t] instanceof Array ? i[t].push(r) : i[t] = [i[t], r]
                }
            }
            return i
        }
    },
    isWinPhone: function() {
        try {
            return navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0
        } catch (n) {
            return console.log("speed-exception", n), !1
        }
    }(),
    isComingFromApp: function() {
        return document.location.toString().toLowerCase().search("frommobileapp") >= 0
    }(),
    isIPhone: function() {
        return navigator.userAgent.match(/iPhone/i) != null
    }(),
    isSafari: function() {
        var n = navigator.userAgent.toLowerCase();
        return n.indexOf("safari") !== -1 && n.indexOf("chrome") === -1 ? !0 : !1
    },
    redirectParent: function(n) {
        var i = window.location.search.toLowerCase().indexOf("parenthost=") !== -1;
        if (i) {
            var t = "openLink";
            window.ctaUtils.isSafari() && (t = "redirectPage");
            try {
                PlayBuzz.core.sendMessageToParent({
                    id: PlayBuzz.core.getURLParam("divId"),
                    name: "action",
                    action: t,
                    url: n
                })
            } catch (r) {
                console.log("failed sending page refresh to background");
                window.open(n)
            }
        } else window.open(n)
    },
    isIOs9AndHigher: function() {
        var n = navigator.userAgent.match(/OS (\d+)_/i);
        return !!n && n.length > 1 ? !isNaN(n[1]) && Number(n[1]) >= 9 : !1
    },
    safeCall: function(n, t, i, r) {
        if (!n) return console.error("Cannot watch non-object");
        if (!t) return console.error("Cannot call undefined");
        if (typeof n[t] == "function") n[t].apply(r || window, i);
        else try {
            Object.watch(n, function u() {
                typeof n[t] == "function" && n[t].apply(r || window, i);
                Object.unwatch(n, u)
            })
        } catch (f) {
            console.log("speed-exception", f);
            console.error("An error has occured while observing ", n)
        }
    },
    loadExternalScriptAndRenderHTML: function(n) {
        return n
    },
    isUrl: function(n) {
        var t = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
        return t.test(n)
    },
    isAlphaNumeric: function(n) {
        var t = n.charCodeAt(0);
        return !(t > 47 && t < 58) && !(t > 64 && t < 91) && !(t > 96 && t < 123) ? !1 : !0
    },
    isWordBreakChar: function(n) {
        return /[\s\t\n\r\.\?\!\)\]\|\\]/.test(n)
    },
    numberAddCommas: function(n) {
        n += "";
        x = n.split(".");
        x1 = x[0];
        x2 = x.length > 1 ? "." + x[1] : "";
        for (var t = /(\d+)(\d{3})/; t.test(x1);) x1 = x1.replace(t, "$1,$2");
        return x1 + x2
    },
    isElementVisible: function(n, t, i) {
        try {
            var u = t,
                f = u + i,
                r = n.offset().top,
                e = r + n.height() - n.height() * .15,
                o = r + n.height()
        } catch (s) {
            console.log("speed-exception", s)
        }
        return r >= u && e * .85 <= f || r <= u && o >= f ? !0 : !1
    },
    firstLetterToUpperCase: function(n) {
        return n ? n.charAt(0).toUpperCase() + n.slice(1) : ""
    },
    showImageBarIfElementIsVisible: function(n, t, i) {
        Tools.isElementVisible(n, t, i) ? n.find(".image_sharing_bar").css("display", "inline-block") : n.find(".image_sharing_bar").css("display", "none")
    },
    setupElementScrollBehavior: function(n, t) {
        if (t) $(document).on(t.type, function() {
            Tools.showImageBarIfElementIsVisible(n, $(window).scrollTop(), $(window).innerHeight())
        });
        else window.onload = function() {
            Tools.showImageBarIfElementIsVisible(n, $(window).scrollTop(), $(window).innerHeight())
        };
        $(window).scroll(function() {
            Tools.showImageBarIfElementIsVisible(n, $(window).scrollTop(), $(window).innerHeight())
        });
        $(document).on("iframeScroll", function(t) {
            var i = t.scrollY - t.offsetTop;
            Tools.showImageBarIfElementIsVisible(n, i, t.windowHeight)
        })
    },
    shuffleArray: function(n) {
        for (var t = n.length - 1; t > 0; t--) {
            var i = Math.floor(Math.random() * (t + 1)),
                r = n[t];
            n[t] = n[i];
            n[i] = r
        }
        return n
    }
};
window.userlocation = function() {
    try {
        return window.localStorage && window.localStorage.userLocation ? window.localStorage.userLocation : null
    } catch (n) {
        console.log("speed-exception", n)
    }
}();
var MonetizationBridge = function() {
    window._fbq = window._fbq || [];

    function t(n, t, i) {
        if (typeof t == "undefined" && (t = 959918433), typeof i != "undefined") var u = i;
        var r = new Image(1, 1);
        r.src = typeof i != "undefined" && i ? "//googleads.g.doubleclick.net/pagead/viewthroughconversion/" + t + "/?guid=ON&script=0" : "//www.googleadservices.com/pagead/conversion/" + t + "/?label=" + n + "&script=0"
    }

    function r(n) {
        var t = document.createElement("img");
        t.setAttribute("src", n);
        t.setAttribute("alt", "outbrain");
        t.setAttribute("height", "1");
        t.setAttribute("width", "1");
        t.setAttribute("border", "0");
        t.style.position = "absolute";
        document.body.appendChild(t)
    }

    function i(n) {
        var r = [],
            t = {},
            i = window.gameData;
        if (i && i.gameId) r.push(i.gameId);
        else return t;
        return t = {
            content_type: "product",
            content_ids: r
        }, n && (t.value = 0, t.currency = "USD"), t
    }
    var n = {};
    return n.adBlockDetected = function() {
        window._fbq.push(["track", "adblock_on_pixel", {}]);
        t("Av4qCNTTlW0Q9b6FvgM", 935419765)
    }, n.userRegister = function() {
        window._fbq.push(["track", "Sign_up", {}]);
        t("rTgYCOz4gmgQ4eLcyQM");
        t("l6JYCL6b_WkQ9b6FvgM", 935419765);
        window._tfa = window._tfa || [];
        _tfa.push({
                notify: "mark",
                type: "Retargeting"
            }),
            function(n, t, i, r, u) {
                var o, f, e;
                n[u] = n[u] || [];
                o = function() {
                    var t = {
                        ti: "5295925"
                    };
                    t.q = n[u];
                    n[u] = new UET(t);
                    n[u].push("pageLoad")
                };
                f = t.createElement(i);
                f.src = r;
                f.async = 1;
                f.onload = f.onreadystatechange = function() {
                    var n = this.readyState;
                    n && n !== "loaded" && n !== "complete" || (o(), f.onload = f.onreadystatechange = null)
                };
                e = t.getElementsByTagName(i)[0];
                e.parentNode.insertBefore(f, e)
            }(window, document, "script", "//bat.bing.com/bat.js", "uetq")
    }, n.createCreatorLoaded = function() {
        window._fbq.push(["track", "Started_creation_pixel", {}])
    }, n.firstTimeCreation = function() {
        window._fbq.push(["track", "ftc", {}]);
        t("8PhzCPbR528Q9b6FvgM", 935419765),
            function(n, t, i, r, u) {
                var o, f, e;
                n[u] = n[u] || [];
                o = function() {
                    var t = {
                        ti: "5624349"
                    };
                    t.q = n[u];
                    n[u] = new UET(t);
                    n[u].push("pageLoad")
                };
                f = t.createElement(i);
                f.src = r;
                f.async = 1;
                f.onload = f.onreadystatechange = function() {
                    var n = this.readyState;
                    n && n !== "loaded" && n !== "complete" || (o(), f.onload = f.onreadystatechange = null)
                };
                e = t.getElementsByTagName(i)[0];
                e.parentNode.insertBefore(f, e)
            }(window, document, "script", "//bat.bing.com/bat.js", "uetq")
    }, n.createSaveDraft = function() {
        t("NlGzCJ6hlmoQ9b6FvgM", 935419765);
        t("YCL3112kQ4eLcyQM", 959918433);
        window._fbq.push(["track", "568445403278652", {}]);
        window._fbq.push(["track", "Item_created", {}]),
            function(n, t, i, r, u) {
                var o, f, e;
                n[u] = n[u] || [];
                o = function() {
                    var t = {
                        ti: "5424045"
                    };
                    t.q = n[u];
                    n[u] = new UET(t);
                    n[u].push("pageLoad")
                };
                f = t.createElement(i);
                f.src = r;
                f.async = 1;
                f.onload = f.onreadystatechange = function() {
                    var n = this.readyState;
                    n && n !== "loaded" && n !== "complete" || (o(), f.onload = f.onreadystatechange = null)
                };
                e = t.getElementsByTagName(i)[0];
                e.parentNode.insertBefore(f, e)
            }(window, document, "script", "//bat.bing.com/bat.js", "uetq")
    }, n.createArticlePublished = function() {
        window._fbq.push(["track", "published_item_pixel", {}]);
        t("Gzq9CPjc_WcQ4eLcyQM"),
            function(n, t, i, r, u) {
                var o, f, e;
                n[u] = n[u] || [];
                o = function() {
                    var t = {
                        ti: "5295926"
                    };
                    t.q = n[u];
                    n[u] = new UET(t);
                    n[u].push("pageLoad")
                };
                f = t.createElement(i);
                f.src = r;
                f.async = 1;
                f.onload = f.onreadystatechange = function() {
                    var n = this.readyState;
                    n && n !== "loaded" && n !== "complete" || (o(), f.onload = f.onreadystatechange = null)
                };
                e = t.getElementsByTagName(i)[0];
                e.parentNode.insertBefore(f, e)
            }(window, document, "script", "//bat.bing.com/bat.js", "uetq")
    }, n.createArticleWasJustPublished = function() {
        t("TU9RCNK2kWoQ9b6FvgM", 935419765);
        window._fbq.push(["track", "Item_Published", {}])
    }, n.StartedItem = function() {
        window._fbq = window._fbq || [];
        window._fbq.push(["track", "start_game"]);
        window._fbq.push(["track", "AddToCart", i()]);
        t("EpkHCMTwo20Q9b6FvgM");
        window._tfa = window._tfa || [];
        _tfa.push({
                notify: "action",
                name: "start_engagement"
            }),
            function(n, t, i, r, u) {
                var o, f, e;
                n[u] = n[u] || [];
                o = function() {
                    var t = {
                        ti: "5295927"
                    };
                    t.q = n[u];
                    n[u] = new UET(t);
                    n[u].push("pageLoad")
                };
                f = t.createElement(i);
                f.src = r;
                f.async = 1;
                f.onload = f.onreadystatechange = function() {
                    var n = this.readyState;
                    n && n !== "loaded" && n !== "complete" || (o(), f.onload = f.onreadystatechange = null)
                };
                e = t.getElementsByTagName(i)[0];
                e.parentNode.insertBefore(f, e)
            }(window, document, "script", "//bat.bing.com/bat.js", "uetq")
    }, n.CompletedItem = function() {
        t("ZcJACMfZqG0Q9b6FvgM", 935419765);
        window._fbq.push(["track", "game_completion"]);
        window._fbq.push(["track", "Purchase", i(!0)])
    }, n.NextPageVisit = function() {
        t("qjWtCLXMmW0Q9b6FvgM", 935419765);
        window._fbq.push(["track", "next_page", {}]);
        window._tfa = window._tfa || [];
        _tfa.push({
            notify: "action",
            name: "next_page"
        });
        r("//traffic.outbrain.com/network/trackpxl?advid=18941&action=view")
    }, n.Remarketing = function() {
        t("", 935419765, !0);
        window._fbq.push(["track", "PageView"]);
        window._fbq.push(["track", "ViewContent", i()]);
        r("//amplifypixel.outbrain.com/pixel?mid=0085347af2f0fdb1eb8239cb2a6aa993e6")
    }, n.CtaClick = function() {
        t("amHdCLr6pW0Q9b6FvgM", 935419765, !1);
        window._fbq.push(["track", "CTA_click", {}])
    }, n.SocialShare = function() {
        t("TumHCMS6pm0Q9b6FvgM", 935419765, !1);
        window._fbq.push(["track", "social_share", {}])
    }, n.Remarketing(), n
};
window.pbMonetizationBridge = window.pbMonetizationBridge || new MonetizationBridge;
window.pbads = window.pbads || {};
window.pbads.utils = window.pbads.utils || {},
    function() {
        $(".thumbsList .liGameSuggestion").hover(function() {
            $(this).find(".txt").fadeIn(200)
        }, function() {
            $(this).find(".txt").fadeOut(100)
        });
        document.location.toString().indexOf("previewGame") == -1 && $(document).ready(function() {
            var n, t, i = function() {
                var r = window.gameData.patternId;
                if (ShareToolsHelpers.isMobileNotTablet && (r == "List" || r == "AbstractFormat") && ($(".socialBar_above_the_game .socialBar").length == 0 || $(".multiple_items_display .social_bar_full_width .socialBar").length == 0) && ($(".socialBar_above_the_game .socialBar").length == 0 && (n = new DynamicShareBar($(".socialBar_above_the_game"))), $(".multiple_items_display .social_bar_full_width .socialBar").length == 0 && (t = new DynamicShareBar($(".multiple_items_display .social_bar_full_width")))), r == "List") {
                    var i = Tools.getURLParam();
                    if (i != null && i.feed == "true") {
                        var f = (i.useShares == "true" || i.useShares == undefined) && (i.social == "true" || i.social == undefined) && displaySettings != null && displaySettings.showShares;
                        f == !1 && $(".listFooter").css("display", "none")
                    }
                    var u = function() {
                        var n = Math.floor(($(".call_to_share_wrapper").outerWidth() - Math.ceil($(".call_to_share_text").outerWidth()) - 1) / 2);
                        n < 10 ? ($(".call_to_share_text").css("padding", "0px"), $(".call_to_share_wrapper").addClass("noDummyLines"), $(".listFooter").addClass("noDummyLines"), $(".list_footer_top_border").css("display", "inline-block")) : $(".call_to_share_wrapper .dummyLine").css("width", n + "px");
                        var t = $("#items_container .items_container div .item_inner"),
                            i = $(t[t.length - 1]).find(".item_freetext").html();
                        i != null && i.length > 0 && $(".listFooter").addClass("textAbove")
                    };
                    $(window).resize(u);
                    u();
                    $(window).load(u)
                }
            };
            if (window.DSBloaded && window.shareBarLoaded && n == null && t == null) i();
            else $(document).on("DSBloaded shareToolsLoaded", function() {
                window.DSBloaded && window.shareBarLoaded && n == null && t == null && i()
            })
        })
    }();
var YoutubePreloader = function() {
    var u = [],
        t = [],
        f = {},
        i = {};

    function e(n, r) {
        var o = $("#" + n.containerId),
            s = o.find(".place_youtube_clip_here");
        s.attr("id", n.iframeId);
        var e = setTimeout(function() {
            r && r({
                result: "timeout"
            })
        }, 2e3);
        try {
            var u = new YT.Player(n.iframeId, n.getYTObject(function(n) {
                clearTimeout(e);
                r && r(n)
            }))
        } catch (h) {
            console.log("speed-exception", h);
            clearTimeout(e);
            r({
                result: "error"
            });
            return
        }
        t.push(u);
        f[n.videoId] = u;
        i[n.iframeId] = u
    }

    function r(t) {
        if (t.length == 0) {
            n.onComplete && n.onComplete();
            return
        }
        var i = t.shift();
        e(i, function() {
            r(t)
        })
    }
    var n = {
        stopAllVideos: function() {
            for (var n = 0; n < t.length; n++) t[n].stopVideo && t[n].stopVideo()
        },
        playClipByIFrameId: function(n) {
            var t = i[n];
            t.playVideo && t.playVideo()
        },
        getClipByIFrameId: function(n) {
            return i[n]
        },
        loadList: function(t, i) {
            u = t;
            i && (n.onComplete = i);
            var f = function() {
                for (var i = [], n = 0; n < t.length; n++) i.push(t[n]);
                return i
            }();
            r(t)
        },
        onComplete: null,
        onClipLoaded: null,
        ClipData: function(t) {
            var u = {
                videoId: null,
                startTime: 0,
                endTime: -1,
                containerId: null,
                width: null,
                height: null,
                YT: null,
                iframeId: Tools.randomWord()
            };
            t = t || {};
            for (var r in u) this[r] = t[r] || u[r];
            var i = this;
            this.getYTObject = function(t) {
                return {
                    width: i.width,
                    height: i.height,
                    events: {
                        onReady: function(r) {
                            i.YT = r.target;
                            var u = {
                                videoId: i.videoId,
                                startSeconds: i.startTime
                            };
                            if (i.endTime > i.startTime && (u.endSeconds = i.endTime), i.YT.cueVideoById(u), n.onClipLoaded) n.onClipLoaded(i);
                            t && t(i)
                        },
                        onStatusChange: function() {}
                    }
                }
            }
        }
    };
    return n
}();
(function() {
    window.Comm || (window.Comm = {
        gameName: "PlayBuzz",
        userId: null,
        session: null,
        APIs: function() {
            var n = window.location.protocol,
                u = window.location.hostname,
                t = u.indexOf("playbuzz.com") >= 0 ? u.split(".")[0] : "www";
            if (u.indexOf("localhost.playbuzz.com") >= 0) return {
                pollVote: n + "//localhost.playbuzz.com/GameReport/home/Vote",
                PostVote: n + "//localhost.playbuzz.com/Gamereport/home/PostVote",
                GetPosts: n + "//localhost.playbuzz.com/Gamereport/home/GetPosts",
                ReportPost: n + "//localhost.playbuzz.com/Gamereport/home/Report",
                getPollResult: n + "//localhost.playbuzz.com/GameReport/home/GetPollsResult",
                DeletePost: n + "//localhost.playbuzz.com/Gamereport/home/DeletePost",
                cropImage: n + "//localhost.playbuzz.com/PlayBuzz.Game.Service/home/CropImage",
                uploadPosts: n + "//localhost.playbuzz.com/PlayBuzz.Game.Service/home/UploadPosts",
                itemTranslate: n + "//localhost.playbuzz.com/PlayBuzz.Game.Service/home/TranslateItem",
                uploadGame: n + "//localhost.playbuzz.com/PlayBuzz.Game.Service/home/UploadGame",
                getLanguage: n + "//localhost.playbuzz.com/PlayBuzz.Game.Service/home/IdentifyLanguage",
                uploadPreview: n + "//localhost.playbuzz.com/PlayBuzz.Game.Service/home/UploadPreview",
                uploadImage: n + "//localhost.playbuzz.com/PlayBuzz.Game.Service/home/UploadImage",
                cropUserImage: n + "//localhost.playbuzz.com/User/home/CropUserImage",
                uploadUserImage: n + "//localhost.playbuzz.com/User/home/UploadUserImage",
                emailRegistration: n + "//localhost.playbuzz.com/User/home/register",
                registerPartner: n + "//localhost.playbuzz.com/User/home/registerPartner",
                updateUser: n + "//localhost.playbuzz.com/User/Home/UpdateUser",
                updateWebsite: n + "//localhost.playbuzz.com/User/Website/UpdateWebsite",
                createWebsite: n + "//localhost.playbuzz.com/User/Website/CreateWebsite",
                deleteWebsite: n + "//localhost.playbuzz.com/User/Website/DeleteWebsite",
                createHub: n + "//localhost.playbuzz.com/User/Website/CreateHub",
                updateHub: n + "//localhost.playbuzz.com/User/Website/UpdateHub",
                deleteHub: n + "//localhost.playbuzz.com/User/Website/DeleteHub",
                addExclude: n + "//localhost.playbuzz.com/User/Website/AddExclude",
                removeExclude: n + "//localhost.playbuzz.com/User/Website/RemoveExclude",
                forgotPassword: n + "//localhost.playbuzz.com/User/home/forgotPassword",
                changePassword: n + "//localhost.playbuzz.com/User/home/changePassword",
                setPassword: n + "//localhost.playbuzz.com/User/home/setPassword",
                login: n + "//localhost.playbuzz.com/User/home/login",
                ChannelsApi: n + "//localhost.playbuzz.com/pbWebApi/channels/",
                socialDataCollection: n + "//localhost:8081/api/v1/facebook-data/",
                baseImageUrl: function() {
                    if (window.Tools) {
                        var n = Tools.getURLParam("useProd") == "true";
                        if (n) return "/especiales/que-mujer-del-cine-o-television-eres/"
                    }
                    return window.cdnUrl ? "//" + window.cdnUrl : "/especiales/que-mujer-del-cine-o-television-eres/"
                }()
            };
            var i = {};
            t == "www" ? (i.socialsToSample = n + "//api.playbuzz.com/SocialsToSample", i.updatedSocialsSample = n + "//api.playbuzz.com/UpdateSocials") : (i.socialsToSample = n + "//api-staging.playbuzz.com/SocialsToSample", i.updatedSocialsSample = n + "//api-staging.playbuzz.com/UpdateSocials");
            var r = t === "www" ? "gr" : t;
            return {
                pollVote: n + "//" + r + ".playbuzz.com/Gamereport/home/Vote",
                PostVote: n + "//" + r + ".playbuzz.com/Gamereport/home/PostVote",
                GetPosts: n + "//" + r + ".playbuzz.com/Gamereport/home/GetPosts",
                ReportPost: n + "//" + r + ".playbuzz.com/Gamereport/home/Report",
                getPollResult: n + "//" + r + ".playbuzz.com/Gamereport/home/GetPollsResult",
                DeletePost: n + "//" + r + ".playbuzz.com/Gamereport/home/DeletePost",
                cropImage: n + "//" + t + ".playbuzz.com/Creator/home/CropImage",
                uploadGame: n + "//" + t + ".playbuzz.com/Creator/home/UploadGame",
                uploadPreview: n + "//" + t + ".playbuzz.com/Creator/home/UploadPreview",
                getLanguage: n + "//" + t + ".playbuzz.com/Creator/home/IdentifyLanguage",
                uploadImage: n + "//" + t + ".playbuzz.com/Creator/home/UploadImage",
                uploadPosts: n + "//" + t + ".playbuzz.com/Creator/home/UploadPosts",
                itemTranslate: n + "//" + t + ".playbuzz.com/Creator/home/TranslateItem",
                cropUserImage: n + "//" + t + ".playbuzz.com/User/home/CropUserImage",
                uploadUserImage: n + "//" + t + ".playbuzz.com/user/home/UploadUserImage",
                emailRegistration: n + "//" + t + ".playbuzz.com/user/home/register",
                registerPartner: n + "//" + t + ".playbuzz.com/user/home/registerPartner",
                updateUser: n + "//" + t + ".playbuzz.com/user/home/UpdateUser",
                updateWebsite: n + "//" + t + ".playbuzz.com/user/Website/UpdateWebsite",
                createWebsite: n + "//" + t + ".playbuzz.com/user/Website/CreateWebsite",
                deleteWebsite: n + "//" + t + ".playbuzz.com/user/Website/DeleteWebsite",
                createHub: n + "//" + t + ".playbuzz.com/User/Website/UpdateHub",
                updateHub: n + "//" + t + ".playbuzz.com/User/Website/CreateHub",
                deleteHub: n + "//" + t + ".playbuzz.com/User/Website/DeleteHub",
                addExclude: n + "//" + t + ".playbuzz.com/User/Website/AddExclude",
                removeExclude: n + "//" + t + ".playbuzz.com/User/Website/RemoveExclude",
                forgotPassword: n + "//" + t + ".playbuzz.com/user/home/forgotPassword",
                changePassword: n + "//" + t + ".playbuzz.com/user/home/changePassword",
                setPassword: n + "//" + t + ".playbuzz.com/User/home/setPassword",
                login: n + "//" + t + ".playbuzz.com/user/home/login",
                ChannelsApi: n + "//" + t + ".playbuzz.com/pbWebApi/channels/",
                socialsToSample: i.socialsToSample,
                updatedSocialsSample: i.updatedSocialsSample,
                socialDataCollection: "https://social-data-collection.playbuzz.com/api/v1/facebook-data/",
                baseImageUrl: window.cdnUrl ? n + "//" + window.cdnUrl : n + "/especiales/que-mujer-del-cine-o-television-eres/"
            }
        }(),
        readCookieData: function() {
            var n = $.cookie("playbuzz");
            n && (Comm.userId = n.userId, Comm.sessionId = n.session)
        },
        getUserId: function() {
            return Comm.readCookieData(), Comm.userId
        },
        queryServer: function(n, t, i, r) {
            return Comm.readCookieData(), t.UserId = Comm.userId, Comm.sendQuery(n, Comm.createDataObject(t), t, i, r)
        },
        queryServerWithoutUserId: function(n, t, i, r) {
            return Comm.readCookieData(), Comm.sendQuery(n, Comm.createDataObject(t), t, i, r)
        },
        createDataObject: function(n) {
            var t = {};
            return t.Signature = Comm.createSignture(n), t.SessionId = Comm.sessionId, $.extend(!0, t, n)
        },
        createSignture: function(n) {
            for (var t = function() {
                    var i = {};
                    for (var t in n) {
                        var r = t.charAt(0).toUpperCase() + t.slice(1, t.length);
                        i[r] = encodeURIComponent(n[t])
                    }
                    return i
                }(), u = function() {
                    if (Object && Object.keys) return Object.keys(t).sort();
                    var n = [];
                    for (var i in t) n.push(i);
                    return n.sort(), n
                }(), i = [], r = 0; r < u.length; r++) i.push(t[u[r]]);
            i.push("abcd");
            try {
                var f = md5(i.join(""))
            } catch (e) {
                console.log("speed-exception", e)
            }
            return f
        },
        sendQuery: function(n, t, i, r, u) {
            return $.ajax({
                url: Comm.APIs[n],
                type: "POST",
                data: t,
                success: function(t) {
                    if (t.response && t.response != "ok" && t.response != "success" && n != "errorLog") {
                        Comm.checkForSpecificErrors(t);
                        u && u(t);
                        return
                    }
                    Comm.responseHandler(t, r)
                },
                error: function(t) {
                    try {
                        $.removeOverlay()
                    } catch (t) {
                        console.log("speed-exception", t)
                    }
                    if (t.status && t.status == "409" && u) {
                        u(t);
                        return
                    }
                    if (n != "errorLog") {
                        var r = {
                            API: n,
                            data: i,
                            errorData: t
                        };
                        if (u) {
                            u(t);
                            return
                        }
                        if (Comm.checkForSpecificErrors(t)) return;
                        document.location.host == "localhost/especiales/test/got/" && alert("An error has occurred while processing your request...")
                    }
                }
            })
        },
        checkForSpecificErrors: function(n) {
            var t = !1;
            try {
                var i = JSON.parse(n.responseText),
                    r = i.eMessage.indexOf("Violation of UNIQUE KEY constraint 'uc_uniqueSEOParams'");
                r >= 0 && (t = !0, alert("An item with the same name already exists in your profile. Please change the title and press save or preview again. "))
            } catch (n) {
                console.log("speed-exception", n)
            }
            return t ? ($.removeOverlay(), !0) : !1
        },
        responseHandler: function(n, t) {
            t && t(n)
        }
    })
})();
var ImagesLoader = function() {
    var t = null,
        i = null,
        n = 0,
        r = [];

    function e() {
        i = {
            onBulkLoaded: null,
            buffer: 2,
            performLoad: !0
        }
    }
    this.loadImages = function(r, f) {
        if (!f || f.performLoad != !1) {
            e();
            $.extend(!0, i, f);
            var h = r.slice();
            t = [];
            for (var s = 0; s < h.length; s++) h[s].images == null || h[s].images == undefined || h[s].images.length == 0 || t.push(h[s]);
            if (n = 0, t.length == 0) {
                u();
                return
            }
            o()
        }
    };
    this.loadNext = function() {
        if (n++, n < t.length) f();
        else return !1
    };
    this.isLoaded = function(n) {
        return r.indexOf(n) >= 0
    };

    function u(n) {
        if (i.onBulkLoaded) i.onBulkLoaded(n)
    }

    function o() {
        var e = Math.min(n + i.buffer, t.length),
            o = 0;
        for (n; n < e; n++) f(function() {
            o++;
            o >= e && u(r)
        })
    }

    function f(i) {
        for (var u = t[n], e = 0, f = 0; f < u.images.length; f++) s(u.images[f], function() {
            e++;
            e >= u.images.length && (r.push(t[n].requestID), i && i(u.requestID))
        })
    }

    function s(n, t) {
        var i = new Image;
        i.onload = i.onerror = function() {
            t && t()
        };
        n.indexOf("http") < 0 && (n = Comm.APIs.baseImageUrl + game.getGameId() + "/" + n);
        i.src = n
    }
    return this
}();
(function() {
    var n = {
        createNewGame: function(n) {
            n && n(Tools.createUUID)
        },
        saveTemplateData: function(n) {
            var i = localStorage[this.gameName],
                t = {};
            i != undefined && (t = JSON.parse(i));
            var r = {
                gameSpecificData: JSON.parse(n.GameSpecificData),
                meta: {
                    gameName: DataHandler.gameData.generalInfo.gameName,
                    gameDescription: n.GameDescription,
                    thumb: n.GameImage
                },
                patternData: JSON.parse(n.TemplateData)
            };
            t[DataHandler.gameData.generalInfo.gameId] = r;
            localStorage[this.gameName] = JSON.stringify(t)
        },
        uploadGame: function(n, t, i) {
            if (window.DataHandler && (n.UserName = design.user.userName, n.GameId = DataHandler.gameData.generalInfo.gameId, n.GameName = DataHandler.gameData.generalInfo.gameName, n.TemplateId = DataHandler.gameData.generalInfo.templateId), Creator && Creator.uploadPosts) try {
                n.externalData = Creator.uploadPosts()
            } catch (r) {
                console.log("speed-exception", r);
                r && r.container && $(r.container).addClass("invalid_element");
                var u = r && r.message || "There was an error saving the article";
                i(r);
                return
            }
            Comm.queryServer("uploadGame", n, t, i)
        },
        uploadPreview: function(n, t, i) {
            window.DataHandler && (n.UserName = design.user.userName, n.GameId = DataHandler.gameData.generalInfo.previewId, n.GameName = DataHandler.gameData.generalInfo.gameName, n.TemplateId = DataHandler.gameData.generalInfo.templateId, n.ParentGameId = design.gameId);
            Creator && Creator.uploadPosts && (n.externalData = Creator.uploadPosts());
            Comm.queryServer("uploadPreview", n, t, i)
        },
        uploadImage: function(n, t) {
            $.createOverlay();
            var i = (new Spinner).spin($("#general_overlay")[0]);
            ImageUploader.upload(n, t)
        },
        cropImage: function(n, t, i, r, u, f, e, o) {
            var s = function() {
                    return window.design ? design.user : window.userManager ? userManager.userData() : $.cookie("playbuzz") ? $.cookie("playbuzz") : void 0
                }(),
                h = {
                    GameId: n,
                    ImageId: t,
                    RefImageId: i,
                    ImageType: r,
                    ImageSize: f,
                    UserName: s.userName || s.nickname
                };
            $.extend(!0, h, u);
            Comm.queryServer("cropImage", h, e, o)
        },
        registerEmail: function(n, t, i) {
            Comm.queryServer("emailRegistration", n, t, i)
        },
        registerPartner: function(n, t, i, r, u, f) {
            var e = {
                email: n,
                partnerName: t,
                nickname: i
            };
            if (r)
                for (var o in r) e[o] = r[o];
            Comm.queryServer("registerPartner", e, u, f)
        },
        login: function(n, t, i) {
            n.accessToken || n.email && n.password ? (n.loginType = window.LoginUserType || "Email", Comm.queryServer("login", n, function(i) {
                t && (i.loginType = n.loginType, t(i))
            }, function(n) {
                i && i(n)
            })) : i ? i("Wrong login credentials!") : alert("Wrong login credentials!")
        },
        forgotPassword: function(n, t, i) {
            Comm.queryServer("forgotPassword", n, t, i)
        },
        changePassword: function(n, t, i, r) {
            var u = {
                oldPassword: n,
                newPassword: t
            };
            Comm.queryServerWithoutUserId("changePassword", u, i, r)
        },
        setPassword: function(n, t, i, r) {
            var u = {
                token: t,
                newPassword: n
            };
            Comm.queryServer("setPassword", u, i, r)
        },
        updateUser: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("updateUser", {
                updateParams: JSON.stringify(n),
                UserName: r.nickname,
                updatedUserId: UserData.userId
            }, t, i)
        },
        updateWebsite: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("updateWebsite", {
                updateParams: JSON.stringify(n),
                UserName: r.nickname,
                updatedWebsiteId: n.WebsiteId
            }, t, i)
        },
        createWebsite: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("createWebsite", {
                UserId: UserData.userId,
                UserName: r.nickname,
                CreateParams: JSON.stringify(n)
            }, t, i)
        },
        deleteWebsite: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("deleteWebsite", {
                UserName: r.nickname,
                deletedWebsiteId: n.WebsiteId
            }, t, i)
        },
        createHub: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("createHub", {
                UserId: UserData.userId,
                UserName: r.nickname,
                WebsiteId: n.WebsiteId,
                CreateParams: JSON.stringify(n)
            }, t, i)
        },
        updateHub: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("updateHub", {
                updateParams: JSON.stringify(n),
                UserName: r.nickname,
                updatedHubId: n.HubId
            }, t, i)
        },
        deleteHub: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("deleteHub", {
                UserName: r.nickname,
                deletedHubId: n.HubId
            }, t, i)
        },
        addExclude: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("addExclude", {
                UserName: r.nickname,
                websiteId: n.WebsiteId,
                excludeId: n.ExcludeId
            }, t, i)
        },
        removeExclude: function(n, t, i) {
            var r = $.cookie("playbuzz");
            if (!r) {
                alert("Can't update information because user isn't logged in.");
                return
            }
            Comm.queryServer("removeExclude", {
                UserName: r.nickname,
                websiteId: n.WebsiteId,
                excludeId: n.ExcludeId
            }, t, i)
        },
        uploadPosts: function(n, t, i, r, u) {
            var f = {
                userName: $.cookie("playbuzz").nickname,
                articleId: window.Creator && Creator.gameId || window.gameData && gameData.gameId,
                parentId: window.Creator && Creator.gameId || window.gameData && gameData.gameId,
                itemId: n || Tools.createUUID(),
                postsData: JSON.stringify(t) || "",
                isPreview: i
            };
            Comm.queryServer("uploadPosts", f, r, u)
        },
        getLanguage: function(n, t, i) {
            Comm.queryServer("getLanguage", n, function(n) {
                t(n)
            }, function() {
                i()
            })
        },
        cropUserImage: function(n, t, i) {
            Comm.queryServer("cropUserImage", n, t, i)
        }
    };
    $.extend(!0, Comm, n)
})();
var userHandler = function() {
    var n = null,
        t = null,
        i = null,
        r = null,
        u = null,
        f = null;
    return this.setUserData = function(e) {
        e != undefined && e != null && (n = e.UserId || e.userId, t = e.SessionId || e.session, i = e.FirstName, r = e.LastName, u = e.FullName, f = e.NickName || e.nickname)
    }, this
}();
jQuery.fn.setInputText = function(n) {
    var t = {
        isNumeral: !1,
        counterField: null,
        minNumber: -9999999,
        maxNumber: 9999999,
        regex: null,
        allowedKeyCodes: null,
        useEnter: null,
        singleLine: !1
    };
    $.extend(!0, t, n);
    var i = $(this).val();
    $(this).css("color", "#818181");
    $(this).focus(function() {
        $(this).val() == i && $(this).val("");
        $(this).css("color", "#000000")
    });
    $(this).blur(function() {
        $(this).val() == "" && ($(this).val(i), $(this).css("color", "#818181"))
    });
    var r = $(this).prop("maxlength");
    if (t.isNumeral && (t.regex = /[0-9]|\./, t.allowedKeyCodes = [8, 46, 37, 39, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 9]), $(this).keydown(function(n) {
            if (n.keyCode == 13 && t.singleLine) {
                $(this).blur();
                return
            }
            if (t.regex != null || t.allowedKeyCodes != null) {
                var i = n.keyCode || n.which;
                i = mapKeyPressToActualCharacter(n.shiftKey, i);
                var r = !1;
                r = t.regex != null && t.allowedKeyCodes == null ? t.regex.test(i) : t.regex == null && t.allowedKeyCodes != null ? t.allowedKeyCodes.indexOf(n.keyCode) >= 0 : !(!t.regex.test(i) && t.allowedKeyCodes.indexOf(n.keyCode) < 0);
                r || (n.returnValue = !1, n.preventDefault && n.preventDefault())
            }
        }), t.isNumeral && $(this).bind("change", function() {
            var n = parseInt($(this).val());
            if (n < t.minNumber && (n = t.minNumber), n > t.maxNumber && (n = t.maxNumber), r < 7 && n.toString().length < r) {
                for (var e = r - n.toString().length, u = "", f = 0; f < e; f++) u += "0";
                u += n;
                $(this).val(u)
            } else $(this).val(n);
            isNaN($(this).val()) && $(this).val(i).css("color", "#818181")
        }), t.counterField != null && t.counterField != undefined) {
        var u = $(this).parent().find(t.counterField);
        u.html(r);
        $(this).bind("keydown keyup change", function() {
            var n = r - $(this).val().length;
            u.html(n)
        })
    }
    if (t.useEnter != null) $(this).on("keyup", function() {
        $(this).blur()
    });
    this[0].defaultText = i;
    this[0].reset = function() {
        $(this).val(i).css("color", "#818181")
    }
};
jQuery.fn.editText = function(n) {
    n != null && ($(this).val(n), $(this).css("color", "#000000"))
};
jQuery.fn.createSelectBox = function(n) {
    var f = $("<div/>").css("text-align", "center").appendTo($(this)),
        t = $("<div/>").addClass("drop_down_list").appendTo($(this)),
        i = $("<div/>").addClass("drop_down_arrow_box").append($("<div/>").addClass("arrow_down"));
    i.appendTo($(this));
    var e = $(this);
    if (n && n.length > 0) {
        f.html(n[0]);
        for (var r = 0; r < n.length; r++) var o = $("<div/>").addClass("drop_down_item").html(n[r]).appendTo(t).click(function() {
            f.html($(this).html());
            i.click();
            var n = jQuery.Event("selection");
            n.item = $(this).html();
            e.trigger(n)
        })
    }
    var u = !1;
    return i.click(function() {
        u ? (u = !1, t.css("display", "none")) : (u = !0, t.css("display", "block"))
    }), $(this)
};
jQuery.fn.showToolTip = function(n) {
    $.removeToolTip();
    var i = {
        header: "Header",
        body: "Tooltip body",
        position: "center"
    };
    $.extend(!0, i, n);
    var r = $(this).offset(),
        u = {
            width: parseInt($(this).css("width")),
            height: parseInt($(this).css("height"))
        },
        e = $("#tooltip_area").length > 0 ? $("#tooltip_area") : $("body"),
        t = $("<div id='general_tool_tip' class='tooltip_base'><\/div>");
    if (e.append(t), i.header != null) var o = $("<h4 class='tooltip_header'><\/h4>").html(i.header).appendTo(t);
    if (i.body != null) var s = $("<p><\/p>").html(i.body).appendTo(t);
    var f = {
        width: parseInt(t.css("width")),
        height: parseInt(t.css("height"))
    };
    switch (i.position) {
        case "center":
            r.top += u.height / 2 - f.height / 2;
            r.left += u.width / 2 - f.width / 2;
            break;
        case "right":
            r.top += u.height / 2 - f.height / 2;
            r.left += u.width + 10;
            var h = $("<div><\/div>").addClass("tooltip_arrow_left").appendTo(t)
    }
    return t.css("top", r.top + "px").css("left", r.left + "px"), t
};
jQuery.fn.getTextfieldData = function() {
    if ($(this).length == 0) return null;
    var t = $(this)[0].defaultText,
        n = $(this).val();
    return t == n || n == "" ? null : n
};
var availableClips = [];
jQuery.fn.initYoutubePlayer = function(n) {
    var i = {
        onBufferingComplete: null,
        onPlayComplete: null,
        autoPlay: !1,
        width: 320,
        height: 240,
        startTime: null,
        endTime: null
    };
    i = $.extend(!0, i, n);
    var r = i.start,
        u = i.end,
        f = i.width,
        e = i.height,
        t;
    return $(this).each(function() {
        t = {
            divID: this.id,
            clipID: this.id.split("||")[0],
            parent: $(this).parent(),
            clip: null,
            interval: null,
            isPlaying: !1,
            stateHandler: Tools.randomWord(!0),
            clipTimeout: null,
            stopVideo: function() {
                clearTimeout(t.clipTimeout);
                try {
                    clearInterval(t.interval);
                    t.clip.stopVideo();
                    t.isPlaying = !1
                } catch (n) {
                    console.log("speed-exception", n)
                }
            },
            playVideo: function(n) {
                if (!t.isPlaying) {
                    if (t.clip == null) {
                        setTimeout(function() {
                            t.playVideo(n)
                        }, 100);
                        return
                    }
                    t.isPlaying = !0;
                    t.clip.seekTo(r, !0);
                    t.interval = setInterval(function() {
                        t.clip.getCurrentTime() >= u && (t.stopVideo(), n && n())
                    }, 10)
                }
            }
        };
        var n = new Youtube;
        n.setClip(t.clipID);
        YoutubeCallbacks[this.id] = function() {
            t.clip = n.HTML5Player;
            availableClips.push(t);
            t.parent.click(function() {
                t.playVideo()
            });
            i.autoPlay && t.playVideo(function() {
                i.onPlayComplete && i.onPlayComplete()
            })
        };
        n.loadClip(this.id, f, e, {
            hideGUI: !0,
            onStateChange: function(n) {
                n.data == 1 ? t.parent.find(".question_clip_overlay").css("opacity", "0") : t.parent.find(".question_clip_overlay").css("opacity", "0.2")
            }
        })
    }), t
};
jQuery.fn.setupForImageUpload = function(n, t) {
    var i = {
        minWidth: 125,
        minHeight: 83,
        width: 560,
        height: 420,
        startX: 0,
        startY: 0,
        callback: null,
        onCancel: null,
        shouldCrop: !0,
        forceAspectRatio: !0,
        allowEditing: !0,
        imageSize: null,
        imageData: null
    };
    i = $.extend(!0, i, t);
    switch (i.imageSize) {
        case "standard":
            i.minWidth = 480;
            i.minHeight = 360;
            break;
        case "thumbnail":
            i.minWidth = 520;
            i.minHeight = 390
    }
    i.width = i.minWidth;
    i.height = i.minHeight;
    i.imageData != null && $(this).css("cursor", "pointer");
    var e = i.imageData == null ? null : i.imageData.originalImageURL,
        r = i.imageData == null ? null : i.imageData.coords,
        h = null,
        o = !1;
    i.imageData != null && i.callback != null && i.callback(i.imageData);
    $(this).bind("dragover", Tools.cancelEvent);
    $(this).bind("dragenter", Tools.cancelEvent);
    $(this).bind("drop", y);
    $(n).change(c);
    var v = this;

    function y(t) {
        t.preventDefault();
        var i = t.originalEvent.dataTransfer.files;
        return $(n)[0].files = i, !1
    }

    function c() {
        var r = this.value;
        if (!($("#crop_container").length > 0)) {
            var t = i.imageSize == "thumbnail";
            Tools.isValidImage(r, t) ? (o = !1, this == $(n)[0] ? Comm.uploadImage($(n), s) : Comm.uploadImage($(this), s), p()) : Tools.topMessage("Please only add .PNG" + (t ? "" : ", .GIF") + ", .JPG or .JPEG files")
        }
    }

    function p() {
        h = setTimeout(function() {
            var n = $("<button class='grey_button_base button2'>Cancel upload<\/button>").css({
                position: "absolute",
                top: "50%",
                left: "50%",
                "margin-top": "30px",
                "margin-left": "-50px"
            }).appendTo("#general_overlay").click(function() {
                o = !0;
                ImageUploader.clearUploader();
                f();
                $.removeOverlay()
            })
        }, 15e3)
    }

    function s(n) {
        if (!o) {
            try {
                n = JSON.parse(n);
                n.croppedImageURL || (n.croppedImageURL = Comm.APIs.baseImageUrl + multiple_quiz.gameId + "/" + n.id + "." + n.fileType)
            } catch (n) {
                console.log("speed-exception", n)
            }
            clearTimeout(h);
            i.shouldCrop && (n.isAnimated == "False" || n.isAnimated == !1) ? w(n) : ($.removeOverlay(), i.callback && i.callback(n))
        }
    }
    var u = null,
        l = i.callback,
        a = i.onCancel;
    i.callback = b;
    i.onCancel = k;

    function w(n) {
        u = n.croppedImageURL ? n.croppedImageURL : n;
        r = null;
        var t = new Image;
        t.onload = function() {
            t.src.split(".").pop() != "gif" && (t.width < i.minWidth || t.height < i.minHeight) ? (alert("The image you're trying to upload is too small. Please use at least a " + i.minWidth + " x " + i.minHeight + " image."), $.removeOverlay(), f()) : (f(), $.cropImage(u, i))
        };
        t.onerror = function() {
            alert("Failed to load image. Please use another one or try again later.");
            $.removeOverlay();
            f()
        };
        t.src = u
    }

    function f() {
        $(n).unbind("change");
        $(n).replaceWith(n = $(n).clone(!0));
        $(n).change(c)
    }

    function b(n) {
        $(v).css("cursor", "pointer");
        r = n.coords;
        e = u;
        l && l(n)
    }

    function k() {
        u = null;
        a && a()
    }
    return i.allowEditing && $(this).click(function(n) {
        if (n.target == this && e != null && r != null) {
            var t = $.extend(!0, {}, i);
            t.startX = r.x;
            t.startY = r.y;
            t.width = r.width;
            t.height = r.height;
            $.cropImage(e, t)
        }
    }), {
        uploadImageFromURL: function(n) {
            $.createOverlay();
            var u = (new Spinner).spin($("#general_overlay")[0]),
                o = $("<button class='grey_button_base button2'>Cancel upload<\/button>").css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    "margin-top": "30px",
                    "margin-left": "-50px"
                }),
                t = null,
                r = !1,
                f = setTimeout(function() {
                    o.appendTo("#general_overlay").click(function() {
                        t != null && t.abort();
                        r = !0;
                        e()
                    })
                }, 15e3),
                h = {
                    Signature: "adhd",
                    SessionId: design.user.sessionId,
                    UserId: design.user.userId,
                    GameId: multiple_quiz.gameId,
                    UserName: design.user.userName,
                    ImageId: Tools.createUUID(),
                    ImageURL: n.val()
                };
            t = $.ajax({
                url: Comm.APIs.uploadImage,
                type: "POST",
                data: h,
                success: function(n) {
                    if (!r) {
                        u.stop();
                        clearTimeout(f);
                        var t = JSON.parse(n),
                            e = Comm.APIs.baseImageUrl + design.gameId + "/" + t.ImageURL;
                        t.isAnimated == "True" && (i.shouldCrop = !1);
                        s(n)
                    }
                },
                error: function() {
                    r || (e(), alert("Failed to load image. Please use another one or try again later."))
                }
            });

            function e() {
                $.removeOverlay();
                u.stop();
                clearTimeout(f)
            }
        }
    }
};
jQuery.fn.loadBackgroundImage = function(n, t, i) {
    var r = (new Spinner).spin($(this).parent()[0]);
    $(r.el).css({
        "z-index": 100,
        position: "absolute",
        left: "50%",
        top: "50%"
    });
    var o = this,
        u = new Image;
    if (u.onload = function() {
            $(o).css({
                "background-image": "url('" + n + "')",
                "background-size": "contain"
            });
            r.stop();
            i && i()
        }, u.src = n, t != null && t != undefined && t != "none" && t.value != null) {
        var f = t.value;
        if (t.type == "url") {
            var e = document.createElement("a");
            e.href = t.value;
            f = e.hostname
        }
        $(this).append($("<div><\/div>").text(f).addClass("image_credentials"))
    }
};
jQuery.removeToolTip = function() {
    $("#general_tool_tip").remove()
};
jQuery.createOverlay = function(n) {
    if (!($("#general_overlay").length > 0) && ($("body").append($("<div/>").attr("id", "general_overlay")), n)) {
        var t = $("#general_overlay")[0];
        t.spinner = (new Spinner).spin(t)
    }
};
jQuery.removeOverlay = function() {
    try {
        var n = $("#general_overlay");
        n[0].hasOwnProperty("spinner") && n[0].spinner.stop();
        n.remove()
    } catch (t) {
        console.log("speed-exception", t)
    }
};
jQuery.cropImage = function(n, t) {
    var i = {
            minWidth: 125,
            minHeight: 83,
            startX: null,
            startY: null,
            width: 125,
            height: 83,
            callback: null,
            onCancel: null,
            imageSize: "standard"
        },
        e = 940,
        h = Math.floor($(window).innerHeight() * .8),
        c = n.split("/"),
        l = c[c.length - 1],
        k = l.split(".")[0],
        o = l.split(".").pop(),
        a = Tools.createUUID();
    $.extend(!0, i, t);
    var s = null,
        v = !1,
        y = !1;
    $.createOverlay();
    var f = (new Spinner).spin($("#general_overlay")[0]),
        u = $("<div><\/div>").attr("id", "crop_container").addClass("popup_container_base image_crop_container").appendTo("body");
    u.css({
        "max-height": h + "px"
    });
    var p = $("<div><\/div>").addClass("image_crop_header_container").appendTo(u),
        it = $("<div><\/div>").html("Crop Image").addClass("image_crop_header").appendTo(p),
        rt = $("<a href='javascript:;'>x<\/a>").addClass("image_crop_close_button").click(function() {
            if (u.remove(), $.removeOverlay(), BrowserDetect.browser != "Chrome" || BrowserDetect.OS != "Mac") {
                var n = parseInt($("body").css("margin-top"));
                $("body").removeClass("no_scroll").css("margin", "0");
                window.scrollTo(0, -n)
            }
            i.onCancel && i.onCancel()
        }).appendTo(p),
        d = $("<div><\/div>").addClass("image_crop_body_container").appendTo(u),
        g = $("<div><\/div>").addClass("image_crop_body_inner").appendTo(d),
        w = $("<div><\/div>").addClass("crop_image_container").appendTo(g),
        nt = $("<div><\/div>").addClass("crop_image_footer_container").appendTo(u),
        ut = $("<button>Done<\/button>").addClass("button_base button2 crop_done_button").click(function() {
            if ($(this).unbind(), u.remove(), !v && i.imageData != null) {
                if ($.removeOverlay(), BrowserDetect.browser != "Chrome" || BrowserDetect.OS != "Mac") {
                    var n = parseInt($("body").css("margin-top"));
                    $("body").removeClass("no_scroll").css("margin", "0");
                    window.scrollTo(0, -n)
                }
                return
            }
            f = (new Spinner).spin($("#general_overlay")[0]);
            Comm.cropImage(multiple_quiz.gameId, a, k, o, s, i.imageSize, tt)
        }).appendTo(nt);

    function tt() {
        if (f.stop(), $.removeOverlay(), BrowserDetect.browser != "Chrome" || BrowserDetect.OS != "Mac") {
            var t = parseInt($("body").css("margin-top"));
            $("body").removeClass("no_scroll").css("margin", "0");
            window.scrollTo(0, -t)
        }
        if (i.callback) {
            var r = Comm.APIs.baseImageUrl + multiple_quiz.gameId + "/" + a + "." + (o.toLowerCase() != "gif" ? "jpg" : o),
                u = {
                    originalImageURL: n,
                    croppedImageURL: r,
                    coords: s
                };
            i.callback(u)
        }
    }

    function b(n) {
        for (var t in n) n[t] = Math.round(n[t]);
        s = {
            x: n.x,
            y: n.y,
            width: n.w,
            height: n.h
        };
        y && (v = !0)
    }
    var r = new Image;
    r.onload = function() {
        var c = [r.width, r.height],
            t = 1;
        r.width > e && (t = e / r.width, r.width = e, r.height *= t);
        var n = h - 130;
        r.height > n && (hRatio = n / r.height, r.height = n, r.width *= hRatio);
        w.css("margin-left", "-" + r.width / 2 + "px");
        $(r).appendTo(w);
        f.stop();
        var l = document.body.scrollTop || document.documentElement.scrollTop;
        u.css("display", "block");
        BrowserDetect.browser == "Chrome" && BrowserDetect.OS == "Mac" || $("body").addClass("no_scroll").css("margin-top", -l + "px");
        var o = i.startX == null ? r.width / 2 - i.minWidth / 2 : i.startX,
            s = i.startY == null ? 0 : i.startY;
        $(r).Jcrop({
            aspectRatio: i.forceAspectRatio ? i.minWidth / i.minHeight : undefined,
            minSize: [i.minWidth, i.minHeight],
            setSelect: [o, s, o + i.width, s + i.height],
            onSelect: b,
            onChange: b,
            trueSize: c
        });
        setTimeout(function() {
            y = !0
        }, 250);
        u.css({
            top: "50%",
            "margin-top": -u.height() / 2 + "px"
        })
    };
    r.onerror = function() {
        Tools.topMessage("We're very sorry, but an error has occured while loading your image. Please try again later.");
        f.stop();
        $.removeOverlay()
    };
    r.src = n
};
$.fn.autogrow = function() {
    return this.filter("textarea").each(function() {
        var n = $(this),
            r = 36,
            u = n.css("lineHeight"),
            i = $("<div><\/div>").css({
                position: "absolute",
                top: -1e4,
                left: -1e4,
                width: $(this).width() - parseInt(n.css("paddingLeft")) - parseInt(n.css("paddingRight")),
                fontSize: n.css("fontSize"),
                fontFamily: n.css("fontFamily"),
                lineHeight: n.css("lineHeight"),
                resize: "none"
            }).appendTo(document.body),
            t = function() {
                var n = function(n, t) {
                        for (var i = 0, r = ""; i < t; i++) r += n;
                        return r
                    },
                    t = this.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function(t) {
                        return n("&nbsp;", t.length - 1) + " "
                    });
                i.html(t);
                $(this).css("height", Math.max(i.height() + 20, r))
            };
        $(this).change(t).keyup(t).keydown(t);
        t.apply(this)
    }), this
};

function mapKeyPressToActualCharacter(n, t) {
    if (t === 27 || t === 8 || t === 9 || t === 20 || t === 16 || t === 17 || t === 91 || t === 13 || t === 92 || t === 18 || typeof n != "boolean" || typeof t != "number") return !1;
    var i = [];
    return i[192] = "~", i[49] = "!", i[50] = "@", i[51] = "#", i[52] = "$", i[53] = "%", i[54] = "^", i[55] = "&", i[56] = "*", i[57] = "(", i[48] = ")", i[109] = "_", i[107] = "+", i[219] = "{", i[221] = "}", i[220] = "|", i[59] = ":", i[222] = '"', i[188] = "<", i[190] = ">", i[191] = "?", i[32] = " ", n ? t >= 65 && t <= 90 ? String.fromCharCode(t) : i[t] : t >= 65 && t <= 90 ? String.fromCharCode(t).toLowerCase() : String.fromCharCode(t)
}

function PlayChangerUser(n) {
    this.userId = n.UserId;
    this.sessionId = n.SessionId || "00000000-0000-0000-0000-000000000001";
    this.firstName = n.FirstName;
    this.lastName = n.LastName;
    this.fullName = n.FullName;
    this.userName = n.Nickname;
    Comm.userId = this.userId
}
/*!
 * clipboard.js v1.5.12
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT Â© Zeno Rocha
 */
if (function(n) {
        if (typeof exports == "object" && typeof module != "undefined") module.exports = n();
        else if (typeof define == "function" && define.amd) define([], n);
        else {
            var t;
            t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this;
            t.Clipboard = n()
        }
    }(function() {
        var n;
        return function t(n, i, r) {
            function u(f, o) {
                if (!i[f]) {
                    if (!n[f]) {
                        var h = typeof require == "function" && require;
                        if (!o && h) return h(f, !0);
                        if (e) return e(f, !0);
                        var c = new Error("Cannot find module '" + f + "'");
                        throw c.code = "MODULE_NOT_FOUND", c;
                    }
                    var s = i[f] = {
                        exports: {}
                    };
                    n[f][0].call(s.exports, function(t) {
                        var i = n[f][1][t];
                        return u(i ? i : t)
                    }, s, s.exports, t, n, i, r)
                }
                return i[f].exports
            }
            for (var e = typeof require == "function" && require, f = 0; f < r.length; f++) u(r[f]);
            return u
        }({
            1: [function(n, t) {
                var i = n("matches-selector");
                t.exports = function(n, t, r) {
                    for (var u = r ? n : n.parentNode; u && u !== document;) {
                        if (i(u, t)) return u;
                        u = u.parentNode
                    }
                }
            }, {
                "matches-selector": 5
            }],
            2: [function(n, t) {
                var i = n("closest");

                function r(n, t, i, r, f) {
                    var e = u.apply(this, arguments);
                    return n.addEventListener(i, e, f), {
                        destroy: function() {
                            n.removeEventListener(i, e, f)
                        }
                    }
                }

                function u(n, t, r, u) {
                    return function(r) {
                        r.delegateTarget = i(r.target, t, !0);
                        r.delegateTarget && u.call(n, r)
                    }
                }
                t.exports = r
            }, {
                closest: 1
            }],
            3: [function(n, t, i) {
                i.node = function(n) {
                    return n !== undefined && n instanceof HTMLElement && n.nodeType === 1
                };
                i.nodeList = function(n) {
                    var t = Object.prototype.toString.call(n);
                    return n !== undefined && (t === "[object NodeList]" || t === "[object HTMLCollection]") && "length" in n && (n.length === 0 || i.node(n[0]))
                };
                i.string = function(n) {
                    return typeof n == "string" || n instanceof String
                };
                i.fn = function(n) {
                    var t = Object.prototype.toString.call(n);
                    return t === "[object Function]"
                }
            }, {}],
            4: [function(n, t) {
                var i = n("./is"),
                    r = n("delegate");

                function u(n, t, r) {
                    if (!n && !t && !r) throw new Error("Missing required arguments");
                    if (!i.string(t)) throw new TypeError("Second argument must be a String");
                    if (!i.fn(r)) throw new TypeError("Third argument must be a Function");
                    if (i.node(n)) return f(n, t, r);
                    if (i.nodeList(n)) return e(n, t, r);
                    if (i.string(n)) return o(n, t, r);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }

                function f(n, t, i) {
                    return n.addEventListener(t, i), {
                        destroy: function() {
                            n.removeEventListener(t, i)
                        }
                    }
                }

                function e(n, t, i) {
                    return Array.prototype.forEach.call(n, function(n) {
                        n.addEventListener(t, i)
                    }), {
                        destroy: function() {
                            Array.prototype.forEach.call(n, function(n) {
                                n.removeEventListener(t, i)
                            })
                        }
                    }
                }

                function o(n, t, i) {
                    return r(document.body, n, t, i)
                }
                t.exports = u
            }, {
                "./is": 3,
                delegate: 2
            }],
            5: [function(n, t) {
                var i = Element.prototype,
                    r = i.matchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector;
                t.exports = u;

                function u(n, t) {
                    if (r) return r.call(n, t);
                    for (var u = n.parentNode.querySelectorAll(t), i = 0; i < u.length; ++i)
                        if (u[i] == n) return !0;
                    return !1
                }
            }, {}],
            6: [function(n, t) {
                function i(n) {
                    var t;
                    if (n.nodeName === "INPUT" || n.nodeName === "TEXTAREA") n.focus(), n.setSelectionRange(0, n.value.length), t = n.value;
                    else {
                        n.hasAttribute("contenteditable") && n.focus();
                        var i = window.getSelection(),
                            r = document.createRange();
                        r.selectNodeContents(n);
                        i.removeAllRanges();
                        i.addRange(r);
                        t = i.toString()
                    }
                    return t
                }
                t.exports = i
            }, {}],
            7: [function(n, t) {
                function i() {}
                i.prototype = {
                    on: function(n, t, i) {
                        var r = this.e || (this.e = {});
                        return (r[n] || (r[n] = [])).push({
                            fn: t,
                            ctx: i
                        }), this
                    },
                    once: function(n, t, i) {
                        var u = this;

                        function r() {
                            u.off(n, r);
                            t.apply(i, arguments)
                        }
                        r._ = t;
                        return this.on(n, r, i)
                    },
                    emit: function(n) {
                        var r = [].slice.call(arguments, 1),
                            i = ((this.e || (this.e = {}))[n] || []).slice(),
                            t = 0,
                            u = i.length;
                        for (t; t < u; t++) i[t].fn.apply(i[t].ctx, r);
                        return this
                    },
                    off: function(n, t) {
                        var u = this.e || (this.e = {}),
                            i = u[n],
                            f = [];
                        if (i && t)
                            for (var r = 0, e = i.length; r < e; r++) i[r].fn !== t && i[r].fn._ !== t && f.push(i[r]);
                        return f.length ? u[n] = f : delete u[n], this
                    }
                };
                t.exports = i
            }, {}],
            8: [function(t, i, r) {
                (function(u, f) {
                    if (typeof n == "function" && n.amd) n(["module", "select"], f);
                    else if (typeof r != "undefined") f(i, t("select"));
                    else {
                        var e = {
                            exports: {}
                        };
                        f(e, u.select);
                        u.clipboardAction = e.exports
                    }
                })(this, function(n, t) {
                    "use strict";
                    var i = r(t);

                    function r(n) {
                        return n && n.__esModule ? n : {
                            "default": n
                        }
                    }
                    var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
                        return typeof n
                    } : function(n) {
                        return n && typeof Symbol == "function" && n.constructor === Symbol ? "symbol" : typeof n
                    };

                    function f(n, t) {
                        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }
                    var e = function() {
                            function n(n, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    i.enumerable = i.enumerable || !1;
                                    i.configurable = !0;
                                    "value" in i && (i.writable = !0);
                                    Object.defineProperty(n, i.key, i)
                                }
                            }
                            return function(t, i, r) {
                                return i && n(t.prototype, i), r && n(t, r), t
                            }
                        }(),
                        o = function() {
                            function n(t) {
                                f(this, n);
                                this.resolveOptions(t);
                                this.initSelection()
                            }
                            return n.prototype.resolveOptions = function() {
                                var n = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                                this.action = n.action;
                                this.emitter = n.emitter;
                                this.target = n.target;
                                this.text = n.text;
                                this.trigger = n.trigger;
                                this.selectedText = ""
                            }, n.prototype.initSelection = function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }, n.prototype.selectFake = function() {
                                var n = this,
                                    t = document.documentElement.getAttribute("dir") == "rtl";
                                this.removeFake();
                                this.fakeHandlerCallback = function() {
                                    return n.removeFake()
                                };
                                this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0;
                                this.fakeElem = document.createElement("textarea");
                                this.fakeElem.style.fontSize = "12pt";
                                this.fakeElem.style.border = "0";
                                this.fakeElem.style.padding = "0";
                                this.fakeElem.style.margin = "0";
                                this.fakeElem.style.position = "absolute";
                                this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px";
                                this.fakeElem.setAttribute("readonly", "");
                                this.fakeElem.value = this.text;
                                document.body.appendChild(this.fakeElem);
                                this.selectedText = i.default(this.fakeElem);
                                this.copyText()
                            }, n.prototype.removeFake = function() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null);
                                this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }, n.prototype.selectTarget = function() {
                                this.selectedText = i.default(this.target);
                                this.copyText()
                            }, n.prototype.copyText = function() {
                                var n = undefined;
                                try {
                                    n = document.execCommand(this.action)
                                } catch (t) {
                                    n = !1
                                }
                                this.handleResult(n)
                            }, n.prototype.handleResult = function(n) {
                                n ? this.emitter.emit("success", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                }) : this.emitter.emit("error", {
                                    action: this.action,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }, n.prototype.clearSelection = function() {
                                this.target && this.target.blur();
                                window.getSelection().removeAllRanges()
                            }, n.prototype.destroy = function() {
                                this.removeFake()
                            }, e(n, [{
                                key: "action",
                                set: function() {
                                    var n = arguments.length <= 0 || arguments[0] === undefined ? "copy" : arguments[0];
                                    if (this._action = n, this._action !== "copy" && this._action !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                },
                                get: function() {
                                    return this._action
                                }
                            }, {
                                key: "target",
                                set: function(n) {
                                    if (n !== undefined)
                                        if (n && (typeof n == "undefined" ? "undefined" : u(n)) === "object" && n.nodeType === 1) {
                                            if (this.action === "copy" && n.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                            if (this.action === "cut" && (n.hasAttribute("readonly") || n.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                            this._target = n
                                        } else throw new Error('Invalid "target" value, use a valid Element');
                                },
                                get: function() {
                                    return this._target
                                }
                            }]), n
                        }();
                    n.exports = o
                })
            }, {
                select: 6
            }],
            9: [function(t, i, r) {
                (function(u, f) {
                    if (typeof n == "function" && n.amd) n(["module", "./clipboard-action", "tiny-emitter", "good-listener"], f);
                    else if (typeof r != "undefined") f(i, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                    else {
                        var e = {
                            exports: {}
                        };
                        f(e, u.clipboardAction, u.tinyEmitter, u.goodListener);
                        u.clipboard = e.exports
                    }
                })(this, function(n, t, i, r) {
                    "use strict";
                    var e = u(t),
                        o = u(i),
                        s = u(r);

                    function u(n) {
                        return n && n.__esModule ? n : {
                            "default": n
                        }
                    }

                    function h(n, t) {
                        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }

                    function c(n, t) {
                        if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && (typeof t == "object" || typeof t == "function") ? t : n
                    }

                    function l(n, t) {
                        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        n.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
                    }
                    var a = function(n) {
                        l(t, n);

                        function t(i, r) {
                            h(this, t);
                            var u = c(this, n.call(this));
                            return u.resolveOptions(r), u.listenClick(i), u
                        }
                        return t.prototype.resolveOptions = function() {
                            var n = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                            this.action = typeof n.action == "function" ? n.action : this.defaultAction;
                            this.target = typeof n.target == "function" ? n.target : this.defaultTarget;
                            this.text = typeof n.text == "function" ? n.text : this.defaultText
                        }, t.prototype.listenClick = function(n) {
                            var t = this;
                            this.listener = s.default(n, "click", function(n) {
                                return t.onClick(n)
                            })
                        }, t.prototype.onClick = function(n) {
                            var t = n.delegateTarget || n.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null);
                            this.clipboardAction = new e.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                trigger: t,
                                emitter: this
                            })
                        }, t.prototype.defaultAction = function(n) {
                            return f("action", n)
                        }, t.prototype.defaultTarget = function(n) {
                            var t = f("target", n);
                            if (t) return document.querySelector(t)
                        }, t.prototype.defaultText = function(n) {
                            return f("html", n)
                        }, t.prototype.destroy = function() {
                            this.listener.destroy();
                            this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }, t
                    }(o.default);

                    function f(n, t) {
                        var i = "data-clipboard-" + n;
                        if (t.hasAttribute(i)) return t.getAttribute(i)
                    }
                    n.exports = a
                })
            }, {
                "./clipboard-action": 8,
                "good-listener": 4,
                "tiny-emitter": 7
            }]
        }, {}, [9])(9)
    }), window.GameEmbed = function(n, t) {
        function e(n) {
            var t = window.format || window.gameData && (gameData.patternId || gameData.PatternId) || n && n.find(".embed_window_wrapepr").attr("pattern-id") || "";
            return t.toLowerCase()
        }

        function r() {
            return t || window.gameData && (gameData.gameId || gameData.GameId)
        }
        var d = $(n).data(),
            u = $.cookie("playbuzz") != null ? $.cookie("playbuzz").userId : "",
            i = {
                "data-height": "auto",
                "data-item": r(),
                "data-tags": "All",
                "data-recommend": "true",
                "data-margin-top": "0",
                "data-game-info": "true",
                "data-comments": "true",
                "data-shares": "true",
                "data-embed-by": u
            },
            o = {
                "data-height": "auto",
                "data-item": r(),
                "data-tags": "All",
                "data-recommend": "true",
                "data-margin-top": "0",
                "data-game-info": "true",
                "data-comments": "true",
                "data-shares": "true",
                "data-full-screen": "true",
                "data-embed-by": u
            },
            s, g = new Clipboard(".copy_to_clipboard");
        this.init = function(t) {
            var i = $.Event("embedWindowClosed");
            t = n;
            $(t).find(".embed_game").on("click embed-clicked", function() {
                $(document).trigger("clickedEmbedButton");
                f($(t));
                $(t).addClass("embed_window_ToggleOn")
            });
            $(t).find(".close_embed_window, .embed_window_background").click(function(n) {
                if (n.target && n.target === n.currentTarget) {
                    if (n.target.className === "copy_to_clipboard") return;
                    $(document).trigger(i);
                    $(t).removeClass("embed_window_ToggleOn");
                    n.stopPropagation()
                }
            });
            $(t).find(".embed_window_param_input, .embed_window_configuration").change(function() {
                c(t);
                f($(t))
            });
            $(t).find(".script_box").on("copy", function() {
                $(document).trigger("copyEmbedCode")
            });
            $(t).find(".script_box").click(function() {
                $(this).select();
                try {
                    var n = document.location.toString().toLowerCase(),
                        t = gameData.gameName,
                        i = gameData.patternId,
                        r = n.search("feed=true") >= 0 ? "embd - getEmbedCode" : "plbz - getEmbedCode";
                    ga("send", "event", r, i, t)
                } catch (u) {
                    console.log("speed-exception", u)
                }
            });
            h();
            b()
        };

        function h() {
            $(".embed_param_cont").css("display", "none");
            $(".hub_description").css("display", "none");
            $(s).find("#HubOrGameText").text("Game")
        }

        function c(n) {
            i["data-height"] = $(n).find(".embed_window_param_input[name='height']").val() != "" ? $(n).find(".embed_window_param_input[name='height']").val() : "auto";
            i["data-embed-by"] = $.cookie("playbuzz").userId;
            i["data-recommend"] = $(n).find(".embed_window_configuration[value='recommendations']").is(":checked");
            i["data-game-info"] = $(n).find(".embed_window_configuration[value='gameInfo']").is(":checked");
            i["data-full-screen"] = $(n).find(".embed_window_configuration[value='fullScreen']").is(":checked");
            i["data-shares"] = $(n).find(".embed_window_configuration[value='useShares']").is(":checked");
            i["data-comments"] = $(n).find(".embed_window_configuration[value='useComments']").is(":checked")
        }

        function f(n) {
            var t = e(n),
                r = t === "bigpicture" && i["data-full-screen"] !== !1,
                u = l(r),
                f = v(),
                s = y(r),
                h = p(i),
                c = w(t, o, i),
                a = u + f + "&lt;div" + s + h + c + "&gt;&lt;/div&gt;";
            n.find(".script_box").html(a)
        }

        function l(n) {
            return n ? a() + "\r\n" : ""
        }

        function a() {
            var n = "<style>.playbuzz-bp-full-screen{z-index: 2147483647; left: 0; top: 0; background: #fff; width: 100%; height: 100%; position: fixed !important}.playbuzz-bp-full-screen .pb_feed_placeholder_container {display: none !important}.playbuzz-bp-full-screen .pb_feed_iframe {height: 100% !important; position: fixed}<\/style>";
            return $("<div/>").text(n).html()
        }

        function v() {
            return '&lt;script type="text/javascript" src="//cdn.playbuzz.com/widget/feed.js"&gt;&lt;/script&gt;\r\n'
        }

        function y(n) {
            return n ? ' class="pb_feed playbuzz-bp-full-screen"' : ' class="pb_feed"'
        }

        function p(n) {
            return ' data-embed-by="' + n["data-embed-by"] + '" data-item="' + n["data-item"] + '" '
        }

        function w(n, t, i) {
            var r = " ";
            for (property in i) {
                var u = i[property].toString() != t[property].toString();
                u && (r += property + '="' + i[property] + '" ')
            }
            return n === "story" && (r += 'data-version="2" '), r
        }

        function b() {
            var n;
            $(".copy_to_clipboard").click(function() {
                var i = $(this);
                setTimeout(function() {
                    i.parent().find(".script_box").click()
                }, 0);
                var t = $(this).parent().find(".copied_message").css("display", "block").animate({
                    opacity: 1
                }, 250);
                clearTimeout(n);
                n = setTimeout(function() {
                    t.animate({
                        opacity: 0
                    }, 250, function() {
                        t.css("display", "none")
                    })
                }, 1500);
                $(document).trigger("copyEmbedCode")
            })
        }
    }, window.HubEmbed = function(n) {
        var u = window.location.pathname.split("/").pop().replace(/%20/g, " "),
            e = $.cookie("playbuzz") != null ? $.cookie("playbuzz").userId : "",
            i = {
                "data-height": "auto",
                "data-tags": u,
                "data-social": "true",
                "data-recommend": "true",
                "data-margin-top": "0",
                "data-game-info": "true",
                "data-embed-by": e,
                "data-profiles": ""
            },
            o = {
                "data-height": "auto",
                "data-tags": u,
                "data-social": "true",
                "data-recommend": "true",
                "data-margin-top": "0",
                "data-game-info": "true",
                "data-embed-by": e,
                "data-profiles": ""
            },
            t;
        this.init = function() {
            t = n;
            $(t).find(".embed_game").on("click embed-clicked", function() {
                var n = $.cookie("playbuzz");
                n !== null && n.origin != "Anonymous" ? ($(t).find(".embed_param_cont").show(), i["data-profiles"] = n.nickname) : ($(t).find(".embed_param_cont").hide(), delete i["data-profiles"]);
                r();
                $(t).addClass("embed_window_ToggleOn")
            });
            $(t).find(".close_embed_window, .embed_window_background").click(function() {
                $(t).removeClass("embed_window_ToggleOn")
            });
            $(t).find(".embed_window_profile").change(function() {
                f(t);
                r()
            });
            $(t).find(".embed_window_tags").change(function() {
                f(t);
                r()
            });
            $(t).find(".embed_window_param_input, .embed_window_configuration").change(function() {
                f(t);
                r()
            });
            $(t).find(".embed_window_wrapepr").click(function(n) {
                n.stopPropagation()
            });
            $(t).find(".script_box").click(function() {
                $(this).select();
                try {
                    var t = document.location.toString().toLowerCase(),
                        n = "",
                        i = t.search("feed=true") >= 0 ? "embd - getEmbedCode" : "plbz - getEmbedCode";
                    ga("send", "event", i, n, "");
                    AwsBridge.getEmbedCode(n)
                } catch (r) {
                    console.log("speed-exception", r)
                }
            });
            h();
            s()
        };

        function s() {
            $(".embed_window_configuration_wrapper").css("display", "none");
            $(t).find("#HubOrGameText").text("Hub");
            $(t).find("#correctTag").text(u)
        }

        function f(n) {
            i["data-height"] = $(n).find(".embed_window_param_input[name='height']").val() != "" ? $(n).find(".embed_window_param_input[name='height']").val() : "auto";
            var r = $(n).find(".embed_window_profile").is(":checked"),
                u = $(n).find(".embed_window_tags").is(":checked"),
                t = $.cookie("playbuzz");
            t && (i["data-profiles"] = r ? t.nickname : "")
        }

        function r() {
            var r = '&lt;script type="text/javascript" src="//cdn.playbuzz.com/widget/feed.js"&gt;&lt;/script&gt;\r\n',
                n, t = "";
            for (n in i) o[n] != undefined && i[n].toString() != o[n].toString() && (t = t + n + '="' + i[n] + '" ');
            defaultPropertys = 'data-embed-by="' + i["data-embed-by"] + '" data-tags="' + i["data-tags"] + '" ';
            r += '\r\n&lt;div class="pb_feed" ' + defaultPropertys + t + "&gt;&lt;/div&gt;";
            $(".script_box").html(r)
        }

        function h() {
            var n;
            $(".copy_to_clipboard").click(function() {
                var i = $(this);
                setTimeout(function() {
                    i.parent().find(".script_box").click()
                }, 0);
                var t = $(this).parent().find(".copied_message").css("display", "block").animate({
                    opacity: 1
                }, 250);
                clearTimeout(n);
                n = setTimeout(function() {
                    t.animate({
                        opacity: 0
                    }, 250, function() {
                        t.css("display", "none")
                    })
                }, 1500);
                $(document).trigger("copyEmbedCode")
            })
        }
        $(".embed_window_param_input").placeholder()
    }, $(document).ready(function() {
        function t() {
            window.gameData == undefined ? r() : i()
        }

        function i() {
            $(".embed_game_container").each(function() {
                window;
                var n = new window.GameEmbed(this);
                n.init(n)
            })
        }

        function r() {
            $(".embed_game_container").each(function() {
                var n = new window.HubEmbed(this);
                n.init(n)
            })
        }
        window.isProfilePage || t();
        var n = u();
        n && $(".embed_window_wrapepr").attr("pattern-id", n);

        function u() {
            var n = window.format || window.gameData && (gameData.patternId || gameData.PatternId) || "";
            return n.toLowerCase()
        }
    }), !jQuery.support.cors && jQuery.ajaxTransport && window.XDomainRequest) {
    var httpRegEx = /^https?:\/\//i,
        getOrPostRegEx = /^get|post$/i,
        sameSchemeRegEx = new RegExp("^" + location.protocol, "i"),
        htmlRegEx = /text\/html/i,
        jsonRegEx = /\/json/i,
        xmlRegEx = /\/xml/i;
    jQuery.ajaxTransport("text html xml json", function(n, t) {
        if (n.crossDomain && n.async && getOrPostRegEx.test(n.type) && httpRegEx.test(n.url) && sameSchemeRegEx.test(n.url)) {
            var i = null,
                r = (t.dataType || "").toLowerCase();
            return {
                send: function(u, f) {
                    i = new XDomainRequest;
                    /^\d+$/.test(t.timeout) && (i.timeout = t.timeout);
                    i.ontimeout = function() {
                        f(500, "timeout")
                    };
                    i.onload = function() {
                        var e = "Content-Length: " + i.responseText.length + "\r\nContent-Type: " + i.contentType,
                            t = {
                                code: 200,
                                message: "success"
                            },
                            u = {
                                text: i.responseText
                            };
                        try {
                            if (r === "html" || htmlRegEx.test(i.contentType)) u.html = i.responseText;
                            else if (r === "json" || r !== "text" && jsonRegEx.test(i.contentType)) try {
                                u.json = jQuery.parseJSON(i.responseText)
                            } catch (s) {
                                t.code = 500;
                                t.message = "parseerror"
                            } else if (r === "xml" || r !== "text" && xmlRegEx.test(i.contentType)) {
                                var n = new ActiveXObject("Microsoft.XMLDOM");
                                n.async = !1;
                                try {
                                    n.loadXML(i.responseText)
                                } catch (s) {
                                    n = undefined
                                }
                                if (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) {
                                    t.code = 500;
                                    t.message = "parseerror";
                                    throw "Invalid XML: " + i.responseText;
                                }
                                u.xml = n
                            }
                        } catch (o) {
                            throw o;
                        } finally {
                            f(t.code, t.message, u, e)
                        }
                    };
                    i.onprogress = function() {};
                    i.onerror = function() {
                        f(500, "error", {
                            text: i.responseText
                        })
                    };
                    var e = "";
                    t.data && (e = jQuery.type(t.data) === "string" ? t.data : jQuery.param(t.data));
                    i.open(n.type, n.url);
                    i.send(e)
                },
                abort: function() {
                    i && i.abort()
                }
            }
        }
    })
}
$(document).ready(function() {
    "use strict";
    var l = "itemTranslate",
        a = 5,
        u = $("#translation-modal"),
        v = $(".translation-modal-available a"),
        tt = $(".jquery-modal"),
        y = "",
        f = "Translate",
        e = !0,
        p = r() ? Tools.getURLParam("modal") : "";
    $("a[href=#translation-modal]").click(function(n) {
        n.preventDefault();
        u.fadeIn({
            during: 1
        }).modal({
            opacity: .5,
            modalClass: "translation-modal",
            showClose: !1,
            clickClose: !0,
            zIndex: 10002
        });
        r() && Tools.isFeed() === !0 && u.css("top", "20%");
        var t = window.pb.analytics.handle.generatePageActionArticle("articlepage", "translate", "prompt");
        window.pb.analytics.handle.sendEvent(t)
    });
    v.click(function(n) {
        n.preventDefault();
        var t = $(this),
            i = t.length > 0 && t.data() ? t.data().href !== undefined ? t.data().href : "" : "";
        if (i !== "") {
            var u = t.length > 0 && t.data() ? t.data().language !== undefined ? t.data().language : "" : "",
                r = document.location.protocol + "//" + document.location.host + "/" + i;
            f = "changeArticleLanguage";
            w(f, y);
            g(r)
        }
    });
    var n = $("div .select-box"),
        i = $("#translate-action-btn"),
        t = $("#input-translated-title"),
        it = t.val();
    n.on("change", function() {
        var i = n.val();
        if (typeof i == "string") {
            var t = n.find("option[value=" + i + "]").eq(0).text();
            t.length === 0 && (t = "the new");
            $("span.modal-text-color").text(window.gameData.gameNameForShare);
            $("#translation-fields-hidden").slideDown("slow");
            $("#input-translated-title").attr("placeholder", "Please enter " + t + " title");
            var r = window.pb.analytics.handle.generatePageActionArticle("articlepage", "translate", "changelanguage");
            window.pb.analytics.handle.sendEvent(r)
        }
    });
    t.keyup(function() {
        var n = t.val();
        typeof n == "string" && (n.length >= a ? i.prop("disabled", !1) : i.prop("disabled", !0))
    }).change(function() {
        var n = window.pb.analytics.handle.generatePageActionArticle("articlepage", "translate", "changetitle");
        window.pb.analytics.handle.sendEvent(n)
    }).focus(function() {
        var n = $(this),
            t = n.data("newVal")
    });
    i.on("click", function(i) {
        if (h()) {
            if (i.preventDefault(), s(), e) {
                var u = window.pb.analytics.handle.generatePageActionArticle("articlepage", "translate", "starttranslation");
                window.pb.analytics.handle.sendEvent(u)
            }
            var r, f = n.val();
            r = $.extend({
                localeToTranslate: f,
                newTitle: t.val(),
                originalItemId: window.gameData.gameId
            }, d());
            $(".jquery-modal").addClass("prevent-click");
            Comm.queryServer(l, r, function(n) {
                o();
                typeof n.urlRedirect == "string" && (window.location.href = n.urlRedirect)
            }, function() {
                o()
            })
        } else nt()
    });
    if (p === "translation") {
        if (!h()) return;
        $("a[href=#translation-modal]").eq(0).click();
        k()
    }

    function o() {
        s();
        $.fn.modal.close()
    }

    function s() {
        var n = $("div .translation-modal-content"),
            r = n.css("display"),
            t = $(".translation-modal-close"),
            u = t.css("display"),
            i = $("#translation-modal-loader"),
            f = i.css("display");
        r === "none" && u === "none" ? (n.css("display", "block"), t.css("display", "block")) : (n.css("display", "none"), t.css("display", "none"));
        f === "none" ? i.css("display", "block") : i.css("display", "none")
    }

    function w(n, t) {
        var i = {
            pageActionType: n,
            pageActionName: t
        };
        AwsBridge.pageAction(i)
    }

    function b(i) {
        t.val(i.title);
        n.val(i.language);
        t.data("oldVal", i.title)
    }

    function k() {
        var f = r(),
            u = f ? Tools.getURLParam("title") !== null ? decodeURI(Tools.getURLParam("title")) : "" : "",
            t = f ? Tools.getURLParam("language") !== null ? decodeURI(Tools.getURLParam("language")) : "" : "",
            o = document.referrer,
            s = o.indexOf("userlogin") > 0 || o.indexOf("Signup") > 0;
        if (u !== "" || t !== "") {
            if (u !== "" || t !== "") {
                var h = {
                    title: u,
                    language: t
                };
                b(h);
                t !== "" && n.trigger("change")
            }
            u !== "" && t !== "" && s && (e = !1, i.click())
        }
    }

    function d() {
        var n = c();
        return n === null ? {} : {
            UserName: n.nickname
        }
    }

    function h() {
        var n = c();
        if (n !== null && typeof n.nickname == "string") {
            var t = n.nickname.toLowerCase();
            return t !== "anonymous_user"
        }
        return !1
    }

    function c() {
        return $.cookie("playbuzz")
    }

    function r() {
        return typeof Tools == "object" && typeof Tools.isFeed == "function"
    }

    function g(n) {
        var t = window.open(n, "_blank");
        t.focus()
    }

    function nt() {
        var u = window.pb.analytics.handle.generatePageActionArticle("articlepage", "translate", "starttranslation"),
            i = pb.analytics.dataHelper.prepareEventForUrl(u);
        pb.analytics.handle.addData(i, "referral", "https://" + document.location.host + document.location.pathname);
        pb.analytics.handle.addData(i, "modal", "translation");
        pb.analytics.handle.addData(i, "title", t.val());
        pb.analytics.handle.addData(i, "language", n.val());
        pb.analytics.handle.addData(i, "referralAction", "translate");
        var f = r() ? Tools.getURLParamString(i) : "";
        document.location = "https://" + document.location.host + "/userlogin/" + f
    }
});
var SocialTracker = function() {
    (function() {
        var n = 0,
            t = setInterval(function() {
                if (n++, n == 60) {
                    clearInterval(t);
                    return
                }
                window.FB && (clearInterval(t), FB.Event.subscribe("edge.create", function(n, t) {
                    var r = null;
                    if (t) {
                        var i = $(t).parent();
                        i && (i.hasClass("fb-like-wrapper") || i.hasClass("menu_socail_item") ? r = "facebooklike_navBar" : i.hasClass("facepile_wrapper") ? r = "facebooklike_slider_old" : i.hasClass("like_slider_like_wrapper") ? r = "facebooklike_slider_new" : i.hasClass("like-box-like-wrapper") && (r = "facebooklike_likebox"))
                    }
                    $(document).trigger("userLikedPage");
                    Analytics.sendSocialEvent(r, document.location.toString(), !1);
                    var u = function() {
                        var t = document.location.toString(),
                            n = t.split("playbuzz.com")[1];
                        if (n == undefined) return t;
                        try {
                            n = n.split("?")[0];
                            n = n.split("#")[0]
                        } catch (i) {
                            return console.log("speed-exception", i), n || t
                        }
                        return n || t
                    }();
                    ga("send", "event", "plbz - socialEvent", "facebookLike", u)
                }), FB.Event.subscribe("comment.create", function(n) {
                    console.log(n);
                    var t = gameData && gameData.patternId.toLowerCase();
                    if (t == "ranklist" || t == "rankedlist") {
                        var i = n.href.split("?");
                        if (i[1]) {
                            var r = function() {
                                for (var t = i[1].split("&"), n = 0; n < t.length; n++)
                                    if (t[n].indexOf("id=") == 0) return t[n].replace("id=", "")
                            }();
                            Analytics.sendSocialEvent("singleItemFacebookComment", document.location.toString(), !1, {
                                eventOrigin: "comment",
                                itemId: r
                            });
                            return
                        }
                    }
                    Analytics.sendSocialEvent("facebookComment", document.location.toString(), !1, {
                        eventOrigin: "comment"
                    })
                }))
            }, 1e3)
    })();
    return {}
}();
(function(n, t) {
    var p = 3,
        u = null,
        e = !1;

    function w() {
        var n = t.cookie("playbuzz");
        if (n) return n;
        try {
            return cookieOrigin = "localStorage", JSON.parse(localStorage.getItem("cookieCopy"))
        } catch (i) {
            return console.log("speed-exception", i), cookieOrigin = null, {}
        }
    }

    function o(n) {
        if (t(n).is("#register_name") && t(n).val().length < 4) {
            var i = t("<span class='required_textfield'>Minimum 4 characters<\/span>");
            return t(n).parent().append(i), null
        }
        if (t(n).val() == "") {
            var i = t("<span class='required_textfield'>Required<\/span>");
            return t(n).parent().append(i), null
        }
        return t(n).val()
    }

    function l(n) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
    }

    function a(n) {
        if (!n) return !1;
        try {
            n = n.trim()
        } catch (t) {
            console.log("speed-exception", t)
        }
        if (n == "" || n.length < 8) return !1;
        return !0
    }
    n.UserProfileWidget = {
        userId: null,
        cancelRedirectOnLogin: !1,
        accessToken: null,
        facebookLogin: function() {
            document.referrer && document.referrer.toLowerCase().search(document.location.host + "/create") >= 0 && n.registeredFrom === undefined && (n.registeredFrom = "Create");
            f();
            e = !1;
            clearTimeout(u);
            n.LoginUserType = "Facebook";
            UserProfileWidget.sendLoginAttemptEvent(n.LoginUserType);
            FB.login(onAuthResponseChange, {
                scope: "email",
                redirect_uri: ""
            })
        },
        googlePlusLogin: function(t) {
            document.referrer && document.referrer.toLowerCase().search(document.location.host + "/create") >= 0 && n.registeredFrom === undefined && (n.registeredFrom = "Create");
            e = !1;
            clearTimeout(u);
            n.LoginUserType = "GooglePlus";
            UserProfileWidget.sendLoginAttemptEvent(n.LoginUserType);
            gapi.auth.signIn(t)
        },
        emailLogin: function() {
            var r = t("#elogin_email_field").val(),
                u = t("#elogin_pass_field").val();
            f();
            n.LoginUserType = "Email";
            UserProfileWidget.sendLoginAttemptEvent(n.LoginUserType);
            s({
                email: r,
                password: u
            });
            var i = Tools.getURLParam("token");
            return i != null && (n.urlToRedirectOnSuccsess = "//" + document.location.host + "/VerifyUser/" + i), !1
        },
        registerEmail: function() {
            t(".required_textfield").remove();
            UserProfileWidget.sendLoginAttemptEvent("Email");
            var e = o(t("#register_name")),
                u = o(t("#register_email_address")),
                i = o(t("#register_password")),
                s = o(t("#confirm_password"));
            if (!a(i)) return alert("Please make sure that you set your password based on the specified guidelines!"), !1;
            if (!e || !u || !i || !s) return !1;
            if (!l(u)) {
                var h = t("<span class='required_textfield'>Invalid email address<\/span>");
                return t("#register_email_address").val("").parent().append(h), !1
            }
            if (i != s) {
                var h = t("<span class='required_textfield'>Must match password<\/span>");
                return t("#confirm_password").val("").parent().append(h), !1
            }
            return f(), Comm.registerEmail({
                firstName: e,
                lastName: "",
                email: u,
                password: i
            }, function(t) {
                var u = typeof Tools != "undefined" && Tools.getURLParam("referral") !== null ? !1 : !0;
                r();
                var i = Tools.getURLParam("referral");
                i && i.toLowerCase && i.toLowerCase().search(document.location.host + "/create") >= 0 && n.registeredFrom === undefined && (t.registeredFrom = "Create");
                t.isNewUser = !0;
                c(t, u)
            }, function(n) {
                if (n.status == 406) {
                    r();
                    var t = null;
                    switch (n.responseJSON.responseCode || n.responseCode) {
                        case 10:
                            t = "This email is already registered!";
                            break;
                        case 14:
                            t = "There were some illegal characters in your name. Please only use letters.";
                            break;
                        default:
                            t = "There was a problem registering your account. Please try with a different name and/or email."
                    }
                    alert(t)
                }
            }), !1
        },
        isLoggedIn: function() {
            var n = t.cookie("playbuzz") && t.cookie("playbuzz").origin.toLowerCase() == "anonymous";
            return t.cookie("playbuzz") != null && !n
        },
        forgotPassword: function() {
            var n = t("#forgot_password_email_address").val();
            return l(n) ? (f(), Comm.forgotPassword({
                email: n
            }, function() {
                alert("Check your mail for instructions to reset the password.");
                r();
                document.location.href = "//" + document.location.host + "/userlogin"
            }, function() {
                alert("Could not reset password. Please try again later.");
                r()
            }), !1) : (alert("Invalid email address."), !1)
        },
        showForgotPassPopup: function(n) {
            t("#forgot_password_popup_container").css("display", "block");
            t("#forgot_password_close_button").unbind().click(function() {
                t("#forgot_password_popup_container").css("display", "none");
                n && n()
            });
            t(".login_popup_bottom").css("display", "none");
            t(".registration_buttons_wrapper").css("display", "none")
        },
        OnVerification: function(r) {
            if (t("#login_popup_cover").css("display", "block"), t("#verification_response").text(""), typeof r == "undefined" && (r = t("#verification_code_input").val()), r != "") switch (n.VerificationType) {
                case "VerifyUser":
                    document.location = "/VerifyUser/" + r;
                    break;
                case "SetPassword":
                    document.location = "/VerifySetPassword/" + r
            } else i("Please enter a code.", !1)
        },
        resendVerification: function() {
            var n = {
                nickname: UserProfileWidget.isLoggedIn() ? t.cookie("playbuzz").nickname : null
            };
            n.nickname == null && (document.location.href = "/userlogin");
            t.ajax({
                url: "/user/home/ResendVerification",
                method: "POST",
                data: n,
                success: UserProfileWidget.SetVerificationResponseByCode
            })
        },
        SetVerificationResponseByCode: function(n) {
            switch (n.statusCode) {
                case "ok":
                    i("Success", !0);
                    break;
                case "success":
                    i("Success", !0);
                    break;
                case "UserNotExists":
                    i("This mail address dose not exists in PlayBuzz.", !1);
                    break;
                case "WrongLoginType":
                    i("You can change password only for an email user.", !1);
                    break;
                case "accessTokenExpired":
                    i('The token last only for 24 hours. You can get a new one by clicking "Resend verification mail".', !1);
                    break;
                case "unknownError":
                    i("Unkown error, please try agian later.", !1);
                    break;
                case "VerificationCodeWrong":
                    i("Invalid code, please try again.", !1);
                    break;
                case "NoTokenToResend":
                    i("No verification code to send.", !1);
                    break;
                case "UserAlreadyActivated":
                    i("The user is already activated.", !1);
                    break;
                case "VerificationCodeHasBeenUsed":
                    i("This verification code had been alreday used.", !1)
            }
        },
        setPassword: function() {
            return newPass = t("#new_password").val(), repeatPass = t("#repeat_new_password").val(), a(newPass) ? newPass && repeatPass ? newPass != repeatPass ? alert("Please make sure you've repeated your new password correctly.") : (f(), Comm.setPassword(newPass, n.token, function() {
                r();
                alert("Congratulations! You have successfully changed your password.");
                document.location.href = "//" + document.location.host + "/userlogin"
            }, function(n) {
                r();
                switch (n.response) {
                    case "UserNotExists":
                        alert("This mail address dose not exists in PlayBuzz.");
                        break;
                    case "WrongLoginType":
                        alert("You can change password only for an email user.");
                        break;
                    case "VerificationCodeWrong":
                        alert("Invalid code, please try again.");
                        break;
                    case "VerificationCodeHasBeenUsed":
                        alert("This verification code had been alreday used.");
                        break;
                    default:
                        alert("Unkown error, please try agian later.")
                }
            })) : alert("Please make sure you've entered all required data before submitting.") : alert("Please make sure that you set your password based on the specified guidelines!"), !1
        },
        verificationForm: function() {
            var n = t("#verification_code_input").val(),
                i = document.location.protocol + "//" + document.location.host + "/VerifyUser";
            n != "" ? document.location.href = i + "/" + n : t("#verification_code_input").focus()
        },
        sendLoginAttemptEvent: function(t) {
            var i = document.location.href.toLowerCase(),
                r = i.search("/userlogin") !== -1 || i.search("/signup") !== -1,
                u = n.pb.analytics.handle.generatePageAction(r ? "loginpage" : "loginpopup", "loginattempt", t);
            n.pb.analytics.handle.sendEvent(u)
        }
    };
    n.onAuthResponseChange = function(i) {
        if (n.LoginUserType == "Facebook" && i.status === "connected") u = setTimeout(v, 1e4), t(document).trigger("performingLogin"), s({
            fbid: i.authResponse.userID,
            accessToken: i.authResponse.accessToken
        });
        else if (n.LoginUserType == "GooglePlus")
            if (i.status.signed_in && i.status.method == "PROMPT") f(), u = setTimeout(v, 1e4), t(document).trigger("performingLogin"), s({
                accessToken: i.code
            });
            else return;
        else h()
    };

    function i(n, i) {
        i && (t(".registration_message").addClass("didSuccess"), t(".verify_user_page").addClass("didSuccess"));
        try {
            t(".resend_container").data().spinner.stop()
        } catch (r) {
            console.log("speed-exception", r)
        }
    }

    function f() {
        t("#login_popup_cover").show();
        var n = (new Spinner).spin(t("#login_popup_cover").get(0));
        t("#login_popup_cover").data({
            spinner: n
        })
    }

    function r() {
        t("#login_popup_cover").hide();
        t("#login_popup_cover").data().spinner.stop()
    }

    function s(n) {
        Comm.login(n, c, h)
    }
    t("#email_login_link").click(function() {
        t(".login_popup_bottom").css("display", "block");
        t(".email_login_opener_text").css("display", "none")
    });
    t(".ShowVreification").click(function() {
        t("#resend_verification_email").attr("disabled", !0);
        t("#verification_code_input").removeAttr("disabled");
        t("#verification_response").addClass("hide")
    });
    t(".cancel_signup_button").click(function(n) {
        n.preventDefault();
        document.location.href = document.referrer
    });
    t(".close_activated_popup , .activated_popup").click(function() {
        t(".formats_container").removeClass("showActivatedPopup")
    });
    t(".resend_verification_btn").click(function(n) {
        n.stopPropagation();
        t(this).addClass("isClicked");
        var i = (new Spinner).spin(t(".resend_container").get(0));
        t(".resend_container").data({
            spinner: i
        });
        UserProfileWidget.resendVerification()
    });
    t(".reActive_btn").click(function() {
        UserProfileWidget.verificationForm()
    });

    function v() {
        t("#login_error_popup_message").css("display", "block");
        t("#login_error_no").unbind().click(function() {
            t("#login_error_popup_message").css("display", "none")
        });
        t("#login_error_yes").unbind().click(function() {
            t("#login_error_popup_message").css("display", "none");
            e = !0;
            r()
        })
    }

    function y() {
        var n = e;
        return e = !1, n
    }

    function h(n) {
        if (clearTimeout(u), !y()) {
            t("#login_error_popup_message").css("display", "none");
            r();
            var i = "";
            if (n) switch (n.responseCode) {
                case 2:
                    i = "This email does not belong to a PlayBuzz user. If you haven't registered before, please do so before continuing.";
                    break;
                case 3:
                    i = "Invalid password. Please try again.";
                    break;
                case 15:
                    i = "Please verify your user";
                    document.location.href = "/VerifyUser";
                    break;
                case 20:
                    i = "Your user is blocked. For more details please contact us.";
                    break;
                case 21:
                    i = "Due to many unsuccessful logins, your account has been temporarily blocked.\nPlease try again in 10 minutes or contact customer support at support@playbuzz.com.";
                    break;
                case 22:
                    i = "Your email address or password are invalid, Please try again.";
                    break;
                case 23:
                    i = "Login type not allowed for admin.\nPlease perform Google+ login.";
                    break;
                case 99:
                    i = "It's seems like your browser configured to block cookies. Please, enable and try again."
            }
            i != "" && alert(i);
            t(document).trigger("loginFailed", i)
        }
    }

    function c(i, r) {
        if (clearTimeout(u), !y()) {
            t("#login_error_popup_message").css("display", "none");
            var e = i.isNewUser;
            if (!i.userData) {
                h(i);
                return
            }
            var f = {
                userId: i.userData.UserId,
                session: i.masterSessionId,
                nickname: i.userData.Nickname,
                created: (new Date).getTime(),
                userWebsites: i.userWebsites,
                hasAccounts: i.hasAccounts,
                origin: i.loginType != undefined ? i.loginType : "email",
                image: i.userData.UserSmallImage,
                version: p
            };
            if (t.cookie("playbuzz") && t.cookie("playbuzz").origin.toLowerCase() == "anonymous" && (f.oldUserId = t.cookie("playbuzz").userId), e ? t.cookie("pb_subs", {
                    channels: []
                }, {
                    expires: 365
                }) : t.cookie("pb_subs", {
                    channels: i.userSubscriptions
                }, {
                    expires: 365
                }), i.loginType == "Facebook" && i.userData.fbDetails && (f.fbid = i.userData.fbDetails.FbId), t.cookie("playbuzz", f, {
                    expires: 365
                }), i.userData.SessionId = i.masterSessionId, !UserProfileWidget.isLoggedIn()) {
                i.responseCode = 99;
                h(i);
                return
            }
            e && pbMonetizationBridge.userRegister();
            var o = n.pb.analytics.handle.generatUserLogin(e === !0, i.loginType);
            if (n.pb.analytics.handle.sendEvent(o), i.isNewUser && (i.response == "ok" || i.responseCode == 0)) {
                i.userData.userBirthDate = i.userBirthDate;
                var s = i.registeredFrom || n.registeredFrom;
                GVBridge.registerUser(i.userData, s);
                GVBridge.trackEvent("user_registered")
            }
            if (i.responseCode === 0) var c = i.isNewUser ? {
                type: "user_register",
                userId: i.userData.UserId,
                timezone: -((new Date).getTimezoneOffset() / 60),
                language: i.userData.Language,
                email: i.userData.Email
            } : {
                type: "user_login",
                userId: i.userData.UserId,
                lastLogin: i.userData.LastLogin
            };
            if (t(document).trigger("userLoggedIn", f), UserProfileWidget.cancelRedirectOnLogin || r) {
                t(".login_popup_title").css("display", "none");
                t(".login_popup_text").css("display", "none");
                t(".registration_form_wrapper").css("display", "none");
                t("#registration_message").css("display", "block");
                t(".cancel_registration").text("Done");
                t(".user_signup_page").addClass("loggedIn");
                return
            }
            n.urlToRedirectOnSuccsess != undefined ? document.location.href = n.urlToRedirectOnSuccsess : setTimeout(function() {
                var n = function() {
                    var n = typeof Tools != "undefined" && Tools.getURLParam("referral") !== null;
                    if (n) {
                        var t = typeof Tools != "undefined" ? Tools.getURLParamString() : "/";
                        return Tools.getURLParam("referral", !1) + Tools.removeDecodedUrlParams(t, ["pb_event_type", "pb_event_pageActionType", "pb_event_pageActionName", "pb_event_pageActionLabel"].concat(["referral"]))
                    }
                    return document.referrer
                }();
                n = n != "" && n.indexOf("userlogin") < 0 && n.indexOf("resetpassword") < 0 ? n.replace("http://", "https://") : "https://" + document.location.host;
                document.location = n
            }, 250)
        }
    }

    function b() {
        var n = t(".email_registration"),
            i = typeof Tools != "undefined" ? Tools.getURLParamString(!1, "referralAction") : "/",
            r = n.attr("href");
        n.attr("href", r + i)
    }
    UserProfileWidget.onLogin = c;
    UserProfileWidget.performLogin = s;
    t(document).ready(function() {
        b();
        UserProfileWidget.isLoggedIn() && t(document).trigger("userLoggedIn", w());
        jQuery.fn.placeholder && t("[placeholder]").placeholder()
    })
})(window, jQuery),
function(n, t, i) {
    var h = Object.prototype.toString.call(n.operamini) == "[object OperaMini]",
        f = "placeholder" in t.createElement("input") && !h,
        o = "placeholder" in t.createElement("textarea") && !h,
        c = i.fn,
        l = i.valHooks,
        a = i.propHooks,
        u, r;
    f && o ? (r = c.placeholder = function() {
        return this
    }, r.input = r.textarea = !0) : (r = c.placeholder = function() {
        var n = this;
        return n.filter((f ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": e,
            "blur.placeholder": s
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), n
    }, r.input = f, r.textarea = o, u = {
        get: function(n) {
            var t = i(n),
                r = t.data("placeholder-password");
            return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : n.value
        },
        set: function(n, t) {
            var r = i(n),
                u = r.data("placeholder-password");
            return u ? u[0].value = t : r.data("placeholder-enabled") ? (t == "" ? (n.value = t, n != v() && s.call(n)) : r.hasClass("placeholder") ? e.call(n, !0, t) || (n.value = t) : n.value = t, r) : n.value = t
        }
    }, f || (l.input = u, a.value = u), o || (l.textarea = u, a.value = u), i(function() {
        i(t).delegate("form", "submit.placeholder", function() {
            var n = i(".placeholder", this).each(e);
            setTimeout(function() {
                n.each(s)
            }, 10)
        })
    }), i(n).bind("beforeunload.placeholder", function() {
        i(".placeholder").each(function() {
            this.value = ""
        })
    }));

    function y(n) {
        var t = {},
            r = /^jQuery\d+$/;
        return i.each(n.attributes, function(n, i) {
            i.specified && !r.test(i.name) && (t[i.name] = i.value)
        }), t
    }

    function e(n, t) {
        var u = this,
            r = i(u);
        if (u.value == r.attr("placeholder") && r.hasClass("placeholder"))
            if (r.data("placeholder-password")) {
                if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), n === !0) return r[0].value = t;
                r.focus()
            } else u.value = "", r.removeClass("placeholder"), u == v() && u.select()
    }

    function s() {
        var t, r = this,
            n = i(r),
            u = this.id;
        if (r.value == "") {
            if (r.type == "password") {
                if (!n.data("placeholder-textinput")) {
                    try {
                        t = n.clone().attr({
                            type: "text"
                        })
                    } catch (f) {
                        t = i("<input>").attr(i.extend(y(this), {
                            type: "text"
                        }))
                    }
                    t.removeAttr("name").data({
                        "placeholder-password": n,
                        "placeholder-id": u
                    }).bind("focus.placeholder", e);
                    n.data({
                        "placeholder-textinput": t,
                        "placeholder-id": u
                    }).before(t)
                }
                n = n.removeAttr("id").hide().prev().attr("id", u).show()
            }
            n.addClass("placeholder");
            n[0].value = n.attr("placeholder")
        } else n.removeClass("placeholder")
    }

    function v() {
        try {
            return t.activeElement
        } catch (n) {}
    }
}(this, document, jQuery);
var pbEndCardItems = [];
$(document).ready(function() {
    if (typeof pbEndCardRecommendation != "undefined" && pbEndCardRecommendation) {
        $(document).on("Game.End.Screen", function() {
            if (pbEndCardItems.length > 0) {
                $(".recommend_content").html("");
                var r = 1;
                for (x in pbEndCardItems) {
                    var o = pbEndCardItems[x].title,
                        s = pbEndCardItems[x].url,
                        l = pbEndCardItems[x].desc,
                        u = pbEndCardItems[x].articleId,
                        f = JSON.parse(pbEndCardItems[x].patternData),
                        h = f.gameThumb.originalImageURL.substr(0, f.gameThumb.originalImageURL.length - 40) + f.gameThumb.croppedImageURL,
                        e = $("<a data-position=" + r + " target='_parent' data-itemid='" + u + "' class='echref' href='" + s + "'><\/a>").append($('<div class="recommend_box" ><\/div>').append($('<div class="recommend_image" />').append($('<img src="' + h + '" />'))).append($('<div class="recommend_text">' + o + "<\/div>")));
                    e.click(function(t) {
                        t.preventDefault();
                        var i = this;
                        n("rec_click", "end_card_" + $(this).attr("data-position"), u);
                        setTimeout(function() {
                            var t = {
                                    domain: pbEndCardRecommendation,
                                    itemID: $(i).attr("data-itemid"),
                                    refItemId: gameData.gameId
                                },
                                n = new Date;
                            n.setTime(n.getTime() + 6e4);
                            $.cookie("pbEndCardRecommendationCookie", JSON.stringify(t), {
                                expires: n,
                                domain: "",
                                path: ""
                            });
                            parent.location.href = $(i).attr("href")
                        }, 200)
                    });
                    $(".recommend_content").append(e);
                    n("rec_impression", "end_card_" + r, u);
                    r++
                }
                var c = setInterval(function() {
                    t($(".end_card_recommendation_page")) && (i(), clearInterval(c))
                }, 200)
            }
        });
        var t = function(n, t) {
                t = t || "visible";
                var u = $(window).height(),
                    i = $(window).scrollTop(),
                    r = $(n).offset().top,
                    f = $(n).height();
                return t === "visible" ? r < u + i && r > i - f : t === "above" ? r < u + i : void 0
            },
            i = function() {
                $(".end_card_recommendation").addClass("recommend_open")
            };
        $.ajax({
            method: "GET",
            url: "//cdn.playbuzz.com/endcard/" + pbEndCardRecommendation + ".json"
        }).done(function(n) {
            if (n.partnerDomain == pbEndCardRecommendation) {
                var i = Tools.shuffleArray(Object.keys(n.activeURLSWithData)),
                    r = 3;
                (window.isMobile || $("#columns_container").width() < 630) && (r = 2);
                var u = 0;
                for (urlNameIndex in i)
                    if (n.activeURLSWithData[i[urlNameIndex]].PatternData.indexOf("cdn") >= 0) {
                        var t = i[urlNameIndex];
                        if (n.activeURLSWithData[t].articleId != gameData.gameId && (pbEndCardItems.push({
                                url: t,
                                title: n.activeURLSWithData[t].GameName,
                                desc: n.activeURLSWithData[t].GameDescription,
                                patternData: n.activeURLSWithData[t].PatternData,
                                articleId: n.activeURLSWithData[t].articleId
                            }), u++, u >= r)) break
                    }
            }
        }).fail(function() {
            console.log("failed fetching endcard recommendations")
        })
    }
    var n = function(n, t, i) {
            var r = {};
            r.pageActionType = n;
            r.pageActionName = t;
            r.pageActionLabel = i;
            AwsBridge.pageAction(r)
        },
        r = function() {
            $.cookie(key, value, {
                domain: "",
                path: ""
            })
        },
        u = function() {
            $.cookie(key, value, {
                domain: "",
                path: ""
            })
        }
});
var likeHandler = likeHandler || function() {
    var n = null,
        t = window.isRecommendationsOverlay,
        i = t ? "pbRecommendationshandler" : "pblikehandler",
        u = this,
        r;
    this.saveCookie = function() {
        $.cookie(i, n, {
            domain: null
        })
    };
    this.updateCookie = function(t) {
        n = t;
        $.cookie(i, n, {
            domain: null
        })
    };
    this.getCookie = function() {
        if (n || (n = $.cookie(i)), n) return n;
        n = function() {
            var n = 0;
            return Tools.isMobile && (n = 1), {
                l: 0,
                lbc: 0,
                lbs: n,
                lsc: 0
            }
        }();
        saveCookie()
    };
    this.showPopup = function(t) {
        (n = getCookie(), n.l === 1 || f() || e()) || (n.lbs === 1 || t ? !window.pbSlider || n.lsc === 1 || window.pbLikeBox && pbLikeBox.isShown || pbSlider.showSlider() : window.pbLikeBox && n.lbc !== 1 && pbLikeBox.showLikeBox())
    };
    this.showPopupOnWindowClose = function(n) {
        t && clearTimeout(r);
        var i = setInterval(function(n) {
            n && n.closed && (clearInterval(i), showPopup())
        }, 500, n)
    };
    $(document).on("userLikedPage", function() {
        n = getCookie();
        $(document).unbind("userLikedPage");
        n.l = 1;
        updateCookie(n);
        window.pbSlider && pbSlider.closePopup();
        window.pbLikeBox && pbLikeBox.hideLikeBox()
    });

    function f() {
        if (t) return !1;
        var n = $.cookie("playbuzz");
        if (n.hasOwnProperty("created")) {
            var i = n.created,
                r = (new Date).getTime();
            if (r - i > 6048e5) return !0
        }
        return !1
    }

    function e() {
        if (t) return !1;
        var f = window.location.href.split("?")[1],
            n = f && f.split("&");
        if (n)
            for (var i = 0; i < n.length; i++) {
                var r = n[i] && n[i].split("=")[0],
                    u = n[i] && n[i].split("=")[1];
                if (r && u && (r = r.toLowerCase(), u = u.toLowerCase()), r === "utm_source" && u === "email" || r === "utm_medium" && u === "page-posts") return !0
            }
        return !1
    }
    $(document).on("Game.Progress.100", function() {
        t && (r = setTimeout(function() {
            u.showPopup()
        }, 6e4))
    });
    return getCookie(), this
}();
(function() {
    window.scopes = function() {
        return {
            scope: function() {
                return {
                    index: 0,
                    items: [],
                    ui: {
                        modal: function(n) {
                            return {
                                scope: {},
                                setScope: function(n) {
                                    this.scope = n
                                },
                                getScope: function() {
                                    return this.scope
                                },
                                scopeElemnet: {},
                                getScopeElement: function() {
                                    return this.scopeElemnet
                                },
                                setScopeElement: function(n) {
                                    return this.scopeElemnet = n, this.getScopeElement()
                                },
                                closeAll: function() {
                                    var n = $(".modal_menu"),
                                        t = $(".modal_display");
                                    n.removeClass("show").addClass("hide");
                                    t.removeClass("focus")
                                },
                                onOpen: function(n) {
                                    var t = $.Event("modalOpend"),
                                        i = this.getScopeElement();
                                    t.item = n;
                                    i.trigger(t)
                                },
                                show: function(n, t) {
                                    t.addClass("focus");
                                    n.addClass("show").removeClass("hide");
                                    this.onOpen(n);
                                    return n
                                },
                                init: function(t, i) {
                                    this.setScope(i);
                                    var i = this.getScope();
                                    this.setScopeElement(t);
                                    var r = n.find(".modal_display"),
                                        f = $(".modal_menu"),
                                        u = this;
                                    f.click(function(n) {
                                        n.stopPropagation()
                                    });
                                    r.click(function(n) {
                                        n.stopPropagation();
                                        var t = $(this).parent().data().itemTarget,
                                            f = i.find("." + t);
                                        u.closeAll();
                                        u.show(f, r)
                                    })
                                }
                            }
                        },
                        dropdown: function(n) {
                            return {
                                scope: {},
                                parent: {},
                                items: [],
                                item: function() {
                                    return {
                                        value: "",
                                        element: null,
                                        parentElement: null,
                                        isSelected: !1,
                                        scopeElement: {}
                                    }
                                },
                                displayDefault: {},
                                setItems: function(t) {
                                    for (var u = [], i = 0; i < t.length; i++) {
                                        var e = n.find(".dropdown_display").find(".selected").text(),
                                            f = $(t[i]).is("option"),
                                            r = new this.item(t[i]);
                                        r.scopeElement = this.getScopeElement();
                                        r.parentElement = this.getParentElement();
                                        r.element = t[i];
                                        r.value = f ? $(t[i]).text() : $(t[i]).find(".value").text();
                                        r.dataResource = f ? $(t[i]).attr("data-resource") : $(t[i]).find(".value").attr("data-resource");
                                        r.isSelected = (f ? $(t[i]).hasClass("selected") : $(t[i]).find(".value").hasClass("selected")) ? !0 : !1;
                                        r.value == e && (r.displayDefault = r);
                                        u.push(r)
                                    }
                                    return this.items = u, u
                                },
                                getItems: function() {
                                    return this.items
                                },
                                setWidth: function(n) {
                                    var t = 0,
                                        i = parseInt($(".dropdown .dropdown_menu .item .pb_icon").css("margin-right")),
                                        r = parseInt(n.css("padding-left")),
                                        u = parseInt(n.css("padding-right"));
                                    n.css({
                                        opacity: 0,
                                        display: "block"
                                    });
                                    t = n.width() + i + r + u;
                                    var f = {
                                        display: "none",
                                        opacity: 1,
                                        position: "absolute",
                                        width: t
                                    };
                                    n.css(f)
                                },
                                setScopeElement: function(n) {
                                    return this.scope = n, this.getScopeElement()
                                },
                                getScopeElement: function() {
                                    return this.scope
                                },
                                setParentElement: function(n) {
                                    return this.parent = n, this.getParentElement()
                                },
                                getParentElement: function() {
                                    return this.parent
                                },
                                getItemByValue: function(n, t) {
                                    for (var r = this.getItems(), i = 0; i < r.length; i++) {
                                        var u = t && t === r[i].dataResource,
                                            f = n && n == r[i].value;
                                        if (u || f) return r[i]
                                    }
                                },
                                itemToDisplay: function(n) {
                                    for (var i = {}, t = 0; t < n.length; t++)
                                        if (n[t].isSelected) {
                                            i = n[t];
                                            break
                                        } else i = this.displayDefault;
                                    return i
                                },
                                onChange: function(n) {
                                    var t = $.Event("dropdownChange"),
                                        i = this.getScopeElement();
                                    t.item = n;
                                    i.trigger(t)
                                },
                                onOpen: function(n) {
                                    var t = $.Event("dropdownOpen"),
                                        i = this.getScopeElement();
                                    t.item = n;
                                    i.trigger(t)
                                },
                                displayItem: function(t) {
                                    return n.find(".dropdown_display").find(".selected").text(t.value), t
                                },
                                closeAll: function() {
                                    $(".dropdown").removeClass("focus");
                                    $(".dropdown_menu").css("display", "none")
                                },
                                close: function(n) {
                                    n.removeClass("focus");
                                    n.find(".dropdown_menu").css("display", "none")
                                },
                                show: function(n) {
                                    n.addClass("focus");
                                    n.find(".dropdown_menu").css("display", "block");
                                    this.onOpen(n)
                                },
                                init: function(t, i) {
                                    var e = t.find(".dropdown_menu").find(".item");
                                    this.setScopeElement(t);
                                    this.setParentElement(i);
                                    this.setItems(e);
                                    var u = !1,
                                        r = this,
                                        e = this.getItems(),
                                        s = this.itemToDisplay(e),
                                        f = n.find(".dropdown_menu"),
                                        h = f.find(".item"),
                                        c = n.find(".dropdown_display");
                                    this.setWidth(f);
                                    this.displayItem(s);
                                    c.click(function(t) {
                                        t.stopPropagation();
                                        r.closeAll();
                                        u ? u = !1 : (r.show(n), u = !0)
                                    });
                                    $(document).click(function() {
                                        u && (r.closeAll(), u = !1)
                                    });

                                    function o(t, i, u) {
                                        var e = u ? i.text() : i.find(".value").text(),
                                            o = u ? i.attr("data-resource") : i.find(".value").attr("data-resource"),
                                            f = u ? i : r.getItemByValue(e, o);
                                        r.close(n);
                                        r.displayItem(f);
                                        r.onChange(f)
                                    }
                                    h.click(function(n) {
                                        o(n, $(this))
                                    });
                                    f.change(function(n) {
                                        o(n, $(this).children(":selected"), !0)
                                    })
                                }
                            }
                        },
                        filters: function(n) {
                            return {
                                scope: {},
                                parent: {},
                                items: [],
                                item: function() {
                                    return {
                                        value: "",
                                        element: null,
                                        parentElement: null,
                                        isSelected: !1,
                                        scopeElement: {}
                                    }
                                },
                                displayDefault: {},
                                itemToDisplay: {},
                                setItemToDisplayElement: function(n) {
                                    this.itemToDisplay = n
                                },
                                getItemToDisplayElement: function() {
                                    return this.itemToDisplay
                                },
                                setItems: function(t) {
                                    for (var u = [], i = 0; i < t.length; i++) {
                                        var e = n.find(".selected").text(),
                                            f = $(t[i]).is("option"),
                                            r = new this.item(t[i]);
                                        r.scopeElement = this.getScopeElement();
                                        r.parentElement = this.getParentElement();
                                        r.element = t[i];
                                        r.value = f ? $(t[i]).text() : $(t[i]).find(".value").text();
                                        r.dataResource = f ? $(t[i]).attr("data-resource") : $(t[i]).find(".value").attr("data-resource");
                                        r.isSelected = (f ? $(t[i]).hasClass("selected") : $(t[i]).find(".value").hasClass("selected")) ? !0 : !1;
                                        r.value == e && (r.displayDefault = r);
                                        u.push(r)
                                    }
                                    return this.items = u, u
                                },
                                getItems: function() {
                                    return this.items
                                },
                                setScopeElement: function(n) {
                                    return this.scope = n, this.getScopeElement()
                                },
                                getScopeElement: function() {
                                    return this.scope
                                },
                                setParentElement: function(n) {
                                    return this.parent = n, this.getParentElement()
                                },
                                getParentElement: function() {
                                    return this.parent
                                },
                                getItemByValue: function(n, t) {
                                    for (var r = this.getItems(), i = 0; i < r.length; i++) {
                                        var u = t && t === r[i].dataResource,
                                            f = n && n == r[i].value;
                                        if (u || f) return r[i]
                                    }
                                },
                                getItemToDisplay: function(n) {
                                    for (var i = {}, t = 0; t < n.length; t++)
                                        if (n[t].isSelected) {
                                            i = n[t];
                                            break
                                        } else i = this.displayDefault;
                                    return i
                                },
                                onChange: function(n) {
                                    var t = $.Event("filterChange"),
                                        i = this.getScopeElement();
                                    t.item = n;
                                    i.trigger(t)
                                },
                                markItem: function(n) {
                                    n.find(".value").addClass("selected")
                                },
                                removeMark: function(n) {
                                    n.find(".value").removeClass("selected")
                                },
                                markSelectedItem: function(n) {
                                    var t = $(n.element),
                                        i = $(this.getItemToDisplayElement().element),
                                        r = t.is("option");
                                    return r || (this.removeMark(i), this.markItem(t)), n
                                },
                                init: function(t, i) {
                                    var u = t.find(".filter");
                                    this.setScopeElement(t);
                                    this.setParentElement(i);
                                    this.setItems(u);
                                    var r = this,
                                        u = this.getItems(),
                                        o = this.getItemToDisplay(u);
                                    this.setItemToDisplayElement(o);
                                    var f = n,
                                        s = f.find(".filter");

                                    function e(n, t, i) {
                                        var f = i ? t.text() : t.find(".value").text(),
                                            e = i ? t.attr("data-resource") : t.find(".value").attr("data-resource"),
                                            u = r.getItemByValue(f, e);
                                        r.markSelectedItem(u);
                                        r.onChange(u);
                                        r.setItemToDisplayElement(u)
                                    }
                                    s.click(function(n) {
                                        e(n, $(this))
                                    });
                                    f.change(function(n) {
                                        e(n, $(this).children(":selected"), !0)
                                    })
                                }
                            }
                        },
                        accordion: function(n) {
                            return {
                                scope: {},
                                parent: {},
                                items: [],
                                item: function() {
                                    return {
                                        value: "",
                                        element: null,
                                        parentElement: null,
                                        isSelected: !1,
                                        scopeElement: {}
                                    }
                                },
                                displayDefault: {},
                                itemToDisplay: {},
                                setItemToDisplayElement: function(n) {
                                    this.itemToDisplay = n
                                },
                                getItemToDisplayElement: function() {
                                    return this.itemToDisplay
                                },
                                setItems: function(t) {
                                    for (var u = [], r = 0; r < t.length; r++) {
                                        var f = n.find(".selected").text(),
                                            i = new this.item(t[r]);
                                        i.scopeElement = this.getScopeElement();
                                        i.parentElement = this.getParentElement();
                                        i.element = t[r];
                                        i.value = $(t[r]).find(".value").text();
                                        i.dataResource = $(t[r]).find(".value").attr("data-resource");
                                        i.isSelected = $(t[r]).find(".value").hasClass("selected") ? !0 : !1;
                                        i.value == f && (i.displayDefault = i);
                                        u.push(i)
                                    }
                                    return this.items = u, u
                                },
                                getItems: function() {
                                    return this.items
                                },
                                setScopeElement: function(n) {
                                    return this.scope = n, this.getScopeElement()
                                },
                                getScopeElement: function() {
                                    return this.scope
                                },
                                setParentElement: function(n) {
                                    return this.parent = n, this.getParentElement()
                                },
                                getParentElement: function() {
                                    return this.parent
                                },
                                getItemByValue: function(n, t) {
                                    for (var r = this.getItems(), i = 0; i < r.length; i++) {
                                        var u = t && t === r[i].dataResource,
                                            f = n && n == r[i].value;
                                        if (u || f) return r[i]
                                    }
                                },
                                getItemToDisplay: function(n) {
                                    for (var i = {}, t = 0; t < n.length; t++)
                                        if (n[t].isSelected) {
                                            i = n[t];
                                            break
                                        } else i = this.displayDefault;
                                    return i
                                },
                                onChange: function(n) {
                                    var t = $.Event("accordionChange"),
                                        i = this.getScopeElement();
                                    t.item = n;
                                    i.trigger(t)
                                },
                                onCloseAll: function(n) {
                                    var t = $.Event("accordionCloseAll"),
                                        i = this.getScopeElement();
                                    t.item = n;
                                    i.trigger(t)
                                },
                                open: function(n) {
                                    n.addClass("open")
                                },
                                close: function(n) {
                                    if (n && n.element) {
                                        $(n.element).removeClass("open");
                                        this.onCloseAll(n)
                                    }
                                },
                                closeAll: function(n) {
                                    for (var t = 0; t < n.length; t++) this.close(n[t])
                                },
                                openSelectedItem: function(n) {
                                    var t = $(n.element),
                                        i = this.getItemToDisplayElement();
                                    return this.close(i), this.open(t), n
                                },
                                init: function(t, i) {
                                    var u = t.find(".accordion-item");
                                    this.setScopeElement(t);
                                    this.setParentElement(i);
                                    this.setItems(u);
                                    var r = this,
                                        u = this.getItems(),
                                        f = this.getItemToDisplay(u);
                                    this.open($(f.element));
                                    this.setItemToDisplayElement(f);
                                    var e = n,
                                        o = e.find(".accordion-menu .accordion-open");

                                    function s(n, t, i) {
                                        var u = t && t === r.itemToDisplay.dataResource,
                                            f = i && i === r.itemToDisplay.value;
                                        u || f ? (r.close(n), n = {}) : r.openSelectedItem(n);
                                        r.onChange(n);
                                        r.setItemToDisplayElement(n)
                                    }
                                    o.click(function(n) {
                                        n.preventDefault();
                                        n.stopPropagation();
                                        var t = $(this).closest(".accordion-menu"),
                                            i = t.find(".value").text(),
                                            u = t.find(".value").attr("data-resource"),
                                            f = r.getItemByValue(i, u);
                                        s(f, u, i)
                                    });
                                    $(document).on("randerComplete", function(n) {
                                        r.closeAll(n.items)
                                    })
                                }
                            }
                        },
                        bubble: function(n) {
                            return {
                                scope: {},
                                parent: {},
                                items: [],
                                item: function() {
                                    return {
                                        value: "",
                                        element: null,
                                        parentElement: null,
                                        isSelected: !1,
                                        scopeElement: {}
                                    }
                                },
                                displayDefault: {},
                                getItems: function() {
                                    return this.items
                                },
                                setScopeElement: function(n) {
                                    return this.scope = n, this.getScopeElement()
                                },
                                getScopeElement: function() {
                                    return this.scope
                                },
                                setParentElement: function(n) {
                                    return this.parent = n, this.getParentElement()
                                },
                                getParentElement: function() {
                                    return this.parent
                                },
                                close: function(n) {
                                    n.addClass("aniamte-off");
                                    n.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                                        n.addClass("hide")
                                    })
                                },
                                init: function(t, i) {
                                    var r = n.find(".bubble-close");
                                    this.setScopeElement(t);
                                    this.setParentElement(i);
                                    var u = this,
                                        f = this.getItems();
                                    r.click(function(t) {
                                        t.stopPropagation();
                                        u.close(n)
                                    })
                                }
                            }
                        },
                        tabs: function(n) {
                            return {
                                scope: {},
                                items: [],
                                item: function() {
                                    return {
                                        value: "",
                                        element: null,
                                        parentElement: null,
                                        isSelected: !1,
                                        scopeElement: {}
                                    }
                                },
                                setScope: function(n) {
                                    this.scope = n
                                },
                                getScope: function() {
                                    return this.scope
                                },
                                scopeElemnet: {},
                                getParentElement: function() {
                                    return this.parent
                                },
                                setParentElement: function(n) {
                                    return this.parent = n, this.getParentElement()
                                },
                                getItemByValue: function(n, t) {
                                    for (var r = this.getItems(), i = 0; i < r.length; i++) {
                                        var u = t && t === r[i].dataResource,
                                            f = n && n == r[i].value;
                                        if (u || f) return r[i]
                                    }
                                },
                                setItems: function(t) {
                                    for (var u = [], r = 0; r < t.length; r++) {
                                        var f = n.find(".focus").text(),
                                            i = new this.item(t[r]);
                                        i.scopeElement = this.getScopeElement();
                                        i.parentElement = this.getParentElement();
                                        i.element = t[r];
                                        i.value = $(t[r]).data().tabTarget;
                                        i.isSelected = $(t[r]).data().tabOpen ? !0 : !1;
                                        i.value == f && (i.displayDefault = i);
                                        u.push(i)
                                    }
                                    return this.items = u, u
                                },
                                getItems: function() {
                                    return this.items
                                },
                                getScopeElement: function() {
                                    return this.scopeElemnet
                                },
                                setScopeElement: function(n) {
                                    return this.scopeElemnet = n, this.getScopeElement()
                                },
                                checkForOpenTab: function(t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = $(t[i]),
                                            u = r.data().tabTarget,
                                            f = r.data().tabOpen,
                                            e = n.find("." + u);
                                        f && this.show(e, r)
                                    }
                                },
                                closeAll: function() {
                                    var t = n.find(".tab-display"),
                                        i = n.find(".tab-target");
                                    i.removeClass("show").addClass("hide");
                                    t.removeClass("focus")
                                },
                                onOpen: function(n) {
                                    var t = $.Event("tabOpend"),
                                        i = this.getScopeElement();
                                    t.item = n;
                                    i.trigger(t)
                                },
                                show: function(n, t) {
                                    $(t.element || t).addClass("focus");
                                    n.addClass("show").removeClass("hide");
                                    this.onOpen(t);
                                    return n
                                },
                                setWidth: function(n, t) {
                                    n.css({
                                        width: t
                                    })
                                },
                                init: function(t, i) {
                                    this.setScope(i);
                                    var i = this.getScope();
                                    this.setScopeElement(t);
                                    this.setParentElement(i);
                                    var r = n.find(".tab-display");
                                    this.setItems(r);
                                    var f = $(".tab-target"),
                                        u = this;
                                    this.checkForOpenTab(r);
                                    this.setWidth(f, n.width());
                                    f.click(function(n) {
                                        n.stopPropagation()
                                    });
                                    r.click(function(t) {
                                        t.stopPropagation();
                                        var i = $(this).data().tabTarget,
                                            r = n.find("." + i),
                                            f = u.getItemByValue(i);
                                        u.closeAll();
                                        u.show(r, f)
                                    })
                                }
                            }
                        },
                        carousel: function(n) {
                            return {
                                scope: {},
                                setScope: function(n) {
                                    this.scope = n
                                },
                                getScope: function() {
                                    return this.scope
                                },
                                scopeElemnet: {},
                                getScopeElement: function() {
                                    return this.scopeElemnet
                                },
                                setScopeElement: function(n) {
                                    return this.scopeElemnet = n, this.getScopeElement()
                                },
                                isAnimate: !1,
                                getItemWidth: function(n) {
                                    return parseInt(n.css("margin-right")) + n.width() + (n.css("border-right") !== "" && typeof n.css("border-right") == "string" ? parseInt(n.css("border-right")) : 0) + (n.css("border-right") !== "" && typeof n.css("border-left") == "string" ? parseInt(n.css("border-left")) : 0)
                                },
                                setCarouselWidth: function(t, i) {
                                    var r = t * i.length;
                                    n.find(".carousel-container").width(r)
                                },
                                show: function(n) {
                                    n.addClass("show")
                                },
                                hide: function(n) {
                                    n.removeClass("show")
                                },
                                next: function(n, t) {
                                    t.css({
                                        "margin-left": n + "px"
                                    })
                                },
                                back: function(n, t) {
                                    t.css({
                                        "margin-left": n + "px"
                                    })
                                },
                                move: function(t, i, r) {
                                    this.isAnimate = !0;
                                    var f = n.find(".carousel-container"),
                                        s = n.width(),
                                        h = Math.floor(s / t),
                                        u = parseInt(f.css("margin-left")),
                                        e = n.find(".back"),
                                        o = n.find(".next");
                                    i === "next" ? (u -= t, this.next(u, f), u === -(t * (r.length - h)) && this.hide(o), u < 0 ? this.show(e) : this.hide(e)) : (u += t, this.back(u, f), u === 0 && (this.hide(e), this.show(o)), u < 0 && this.show(o))
                                },
                                init: function(t, i) {
                                    this.setScope(i);
                                    var i = this.getScope();
                                    this.setScopeElement(t);
                                    var r = this,
                                        s = n.find(".back"),
                                        e = n.find(".next"),
                                        u = n.find(".carousel-item"),
                                        f = this.getItemWidth(u);
                                    this.setCarouselWidth(f, u);
                                    var h = n.parent().width(),
                                        c = Math.floor(h / f),
                                        o = n.find(".carousel-container"),
                                        l = parseInt(o.css("margin-left"));
                                    l !== -(f * (u.length - c)) && r.show(e);
                                    e.click(function() {
                                        r.isAnimate || r.move(f, "next", u)
                                    });
                                    s.click(function() {
                                        r.isAnimate || r.move(f, "back", u)
                                    });
                                    o.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                                        r.isAnimate = !1
                                    })
                                }
                            }
                        }
                    },
                    setItems: function(n) {
                        for (var t = 0; t < n.length; t++) this.items.push($(n[t]))
                    },
                    getItems: function() {
                        return this.items
                    },
                    createItems: function(n, t) {
                        for (var i = 0; i < n.length; i++) {
                            var r = n[i],
                                f = r.data().scopeItem,
                                u = {};
                            u = new this.ui[f](r);
                            u.init(r, t)
                        }
                    },
                    create: function(n) {
                        var t = this.getItems();
                        this.createItems(t, n)
                    }
                }
            },
            init: function(n) {
                for (var n = n ? n : $(".scope"), u = 0, t = 0; t < n.length; t++) {
                    var i = $(n[t]),
                        r = new this.scope(i),
                        f = i.find(".scope_item");
                    r.index = u;
                    r.setItems(f);
                    r.create(i);
                    u++
                }
            }
        }
    }
})(),
function() {
    "use strict";
    window.RegistrationHandler = function() {
        var o;

        function s() {
            var n = $(".login_popup_overlay");
            n.show();
            o = (new Spinner).spin(n[0]);
            $("body").css("overflow", "hidden")
        }

        function n() {
            $(".login_popup_overlay").hide();
            o.stop();
            $("body").css("overflow", "inherit")
        }

        function u() {
            $("#login_popup_container").hide()
        }

        function f() {
            BrowserDetect.browser == "Explorer" && BrowserDetect.version <= 9 && $(".login_popup_inner [placeholder]").attr("placeholder", "");
            $(".login_error").text("")
        }

        function t(n, t) {
            var i = $('[name="' + n + '"]').closest(".elogin_textfield_wrapper");
            i.find(".login_error").text(t)
        }

        function h(t, i) {
            i.origin !== "email" && (n(), u())
        }
        var r = "register";

        function i(n, t) {
            if (r = n, f(), $("[data-signin-form]").hide(), $('[data-signin-form~="' + n + '"]').show(), typeof t == "undefined" && (n === "register" || n === "login")) {
                var i = window.pb.analytics.handle.generatePageAction("loginpopup", n === "register" ? "gotosignup" : "gotosignin", "");
                window.pb.analytics.handle.sendEvent(i)
            }
        }

        function c() {
            n()
        }

        function l() {
            f();
            s()
        }

        function a() {
            var n = !0;
            return $("#login_popup_container input:visible").each(function() {
                var f = this.hasAttribute("data-required"),
                    i = this.getAttribute("name"),
                    u = this.getAttribute("pattern"),
                    r = this.getAttribute("minlength");
                if (f && this.value === "") n = !1, t(i, "Field is required");
                else if (r && this.value.length < r) n = !1, t(i, "Minimum " + r + " characters");
                else if (u) {
                    var e = new RegExp(u).test(this.value);
                    e || (n = !1, t(i, "Value is invalid"))
                } else if (i == "passwordConfirm") {
                    var o = $('input[name="password"]').val();
                    this.value != o && (n = !1, t(i, "Passwords don't match"))
                }
            }), $("#login_popup_container select:visible").each(function() {
                var i = this.value,
                    r = this.getAttribute("name");
                i || (n = !1, t(r, "Selection is required"))
            }), n
        }

        function e() {
            var n = {};
            return $("#login_popup_container input:visible, #login_popup_container select:visible").each(function() {
                var t = this.getAttribute("name");
                n[t] = this.value
            }), n
        }

        function v() {
            $(this).children("option:selected").val() != "" && $(this).children("option:selected").parent().addClass("form_select_selected")
        }
        $(document).on("performingLogin", l);
        $(document).on("loginFailed", c);
        $("select").on("change", v);
        return {
            show: function(o, c) {
                var p = o.startWithLogin || !1,
                    l = o.altMessage,
                    w = o.registeredFrom,
                    v = o.registerState || "register",
                    y = o.populateEmail,
                    b = window.pb.analytics.handle.generatePageAction("loginpopup", "prompt", "");
                window.pb.analytics.handle.sendEvent(b);
                window.registeredFrom = w;
                $(document).on("userLoggedIn", c);
                $(document).on("userLoggedIn", h);
                $('[name*="password"]').unbind().on("focus", function(n) {
                    $(n.target).attr("type", "password")
                });
                if (Tools.isMobile && $(".login_buttons .reg_right_side").text("Sign in"), $("#login_popup_container").find("input").val(""), $("#login_popup_container").show(), l && (l.register && $("#login_popup_container").find(".register-title").html(l.register), l.signin && $("#login_popup_container").find(".signin-title").html(l.signin)), y && $("input[name=email]").val(y), $("#elogin_email_field").unbind().blur(function() {
                        var t = $(this).val(),
                            n;
                        String.isNullOrEmpty(t) || (n = t.split("@")[0], n = n.split(".")[0]);
                        n && String.isNullOrEmpty($("#elogin_username_field").val()) && $("#elogin_username_field").val(n)
                    }), $(".login_link").unbind().click(function() {
                        r == v ? i("login") : i(v)
                    }), $(".forgot_password").unbind().click(function() {
                        i("forgot")
                    }), p ? i("login", !0) : i(v, !0), !Tools.isMobile) {
                    var k = $(".fb_large_login .reg_right_side").outerWidth();
                    $(".gp_large_login .reg_right_side").css("width", k - 1)
                }
                UserProfileWidget.cancelRedirectOnLogin = !0;
                $(".elogin_submit_button").unbind().click(function() {
                    f();
                    UserProfileWidget.sendLoginAttemptEvent("Email");
                    var h = a();
                    if (h)
                        if (s(), r == "login") Comm.login(e(), function(t) {
                            n();
                            u();
                            UserProfileWidget.onLogin(t, !0)
                        }, function() {
                            n();
                            t("email", "Couldn't log in... maybe type again?")
                        });
                        else if (r == "forgot") Comm.forgotPassword(e(), function() {
                        n();
                        i("forgot-result")
                    }, function() {
                        alert("Could not reset password. Please try again later.");
                        n()
                    });
                    else {
                        var o = e();
                        o.lastName || (o.lastName = "");
                        Comm.registerEmail(o, function(t) {
                            n();
                            i("register-result");
                            t.registeredFrom = window.registeredFrom;
                            t.isNewUser = !0;
                            UserProfileWidget.onLogin(t, !0)
                        }, function(i) {
                            n();
                            i.status == 406 ? t("email", "A user with this email already exists") : t("email", "Oh, man. So sorry, something went wrong...")
                        })
                    }
                });
                $(".close_popup_button").unbind().click(function() {
                    u()
                })
            }
        }
    }()
}();
$(document).ready(function() {
    $(".fb_large_login").click(function() {
        UserProfileWidget.facebookLogin()
    });
    $(".gp_large_login").click(function() {
        var n = googlepluskBridge.params;
        UserProfileWidget.googlePlusLogin(n)
    });
    var n = $(".user_signup_page"),
        t = typeof Tools != "undefined" ? Tools.getURLParam("token") : null;
    t != null && n.addClass("fromVerifyUser")
});
$(document).ready(function() {
    var o = $(".translate-btn-container"),
        t = "Translate",
        i = "",
        n = typeof Tools != "undefined" && Tools.isMobileNotTablet,
        r = $(".creator-details .dropdown_float .dropdown_menu .item");

    function f() {
        for (var i = {}, t = 0; t < r.length; t++) {
            var u = $(r[t]),
                c = n ? u : u.find(".value"),
                f = c.text();
            i[f] === undefined && (i[f] = []);
            i[f].push(u)
        }
        for (var l in i) {
            var e = i[l];
            if (e.length > 1)
                for (var o = 1, t = 0; t < e.length; t++) {
                    var s = e[t],
                        h = n ? s : s.find(".value"),
                        a = h.text();
                    h.text(a + " - " + o);
                    o++
                }
        }
        window.scopes().init()
    }
    f();

    function e(t) {
        if (n) document.location = t;
        else {
            var i = window.open(t, "_blank");
            i.focus()
        }
    }

    function u(n, t) {
        var i = {
            pageActionType: n,
            pageActionName: t
        };
        AwsBridge.pageAction(i)
    }
    $(document).on("dropdownOpen", function() {
        t = "expandLanguageOption";
        u(i, t)
    });
    $(document).on("dropdownChange", function(r) {
        var f = function() {
                return n ? $(r.item) : $(r.item.element).find("a")
            }(),
            o = f.length > 0 && f.data() ? f.data().href !== undefined ? f.data().href : "" : "";
        if (o !== "") {
            var h = f.length > 0 && f.data() ? f.data().language !== undefined ? f.data().language : "" : "",
                s = document.location.protocol + "//" + document.location.host + "/" + o;
            i = "changeArticleLanguage";
            u(i, t);
            e(s)
        }
    })
});
window.HTT = window.HTT || {},
    function(n) {
        var i = [],
            t = [],
            n = function() {
                r();
                u();
                t.length > 0 && this.fetchFoundTags(t)
            },
            r = function() {
                if (typeof gameData != "undefined" && typeof gameData.gameSpecificData != "undefined" && typeof gameData.gameSpecificData.results)
                    for (x in gameData.gameSpecificData.results)
                        if (gameData.gameSpecificData.results[x].text) {
                            var n = gameData.gameSpecificData.results[x].text.match(/{{#(.+?)}}/g);
                            for (tagFound in n) resStrip = n[tagFound].match("{{#(.+)}}")[1], t.indexOf(resStrip) == -1 && t.push("TagsList=%23" + resStrip)
                        }
            },
            u = function() {
                if (typeof pbItem != "undefined" && typeof pbItem.sections != "undefined") {
                    var n = document.createElement("div");
                    n.style.display = "block";
                    n.style.height = "1px";
                    n.style.width = "1px";
                    n.style.position = "absolute";
                    n.style.overflow = "hidden";
                    n.id = "hiddenHTTsWrapper";
                    for (x in pbItem.sections)
                        if (pbItem.sections[x][0].type == "paragraphSection") {
                            var i = pbItem.sections[x][0].text.ops[0].insert;
                            if (typeof i != "string") continue;
                            var r = i.match(/{{#(.+?)}}/g);
                            for (tagFound in r) resStrip = r[tagFound].match("{{#(.+)}}")[1], t.indexOf(resStrip) == -1 && (t.push("TagsList=%23" + resStrip), pbItem.sections[x][0].text.ops[0].insert = pbItem.sections[x][0].text.ops[0].insert.replace("{{#" + resStrip + "}}", ""), n.innerHTML += "{{#" + resStrip + "}}")
                        }
                    document.body.appendChild(n)
                }
            };
        n.prototype.fetchFoundTags = function(n) {
            var t = "/HTMLTemplateTags/HTMLTemplateTags/fetch?" + n.join("&");
            $.ajax({
                url: t,
                method: "GET"
            }).done(function(n) {
                if (Object.keys(n).length > 0) {
                    for (x in n) i[x] = n[x];
                    var t = jQuery.find("#hiddenHTTsWrapper");
                    t.length > 0 && window.HTT.renderTagsToHTML(t[0])
                }
            }).fail(function() {
                console.log("Failed to fetch tags from HTMLTemplateTags service")
            })
        };
        n.prototype.renderTagsToHTML = function(n) {
            var t = n.innerHTML.match(/{{#(.+?)}}/g);
            for (tagFound in t)
                if (resStrip = t[tagFound].match("{{#(.+)}}"), resNotStrip = resStrip[0], resStrip = resStrip[1], resStripNoHash = resStrip, resStrip = "#" + resStrip, typeof i[resStrip] != "undefined") {
                    n.innerHTML = n.innerHTML.replace(t[tagFound], '<div class="htmltagrender' + resStripNoHash + '"><\/div>');
                    try {
                        $(n).find(".htmltagrender" + resStripNoHash).html(i[resStrip])
                    } catch (r) {
                        console.log("there was an error in HTT script.", r)
                    }
                }
        };
        n.prototype.renderHTTsToPQ = function() {
            $container.find(".result_text_wrapper").each(function() {
                window.HTT.renderTagsToHTML(this)
            })
        };
        try {
            window.HTT = new n
        } catch (f) {
            console.log("HTT failed to initiate", f)
        }
    }(HTT);
var PlayBuzz = PlayBuzz || {};
PlayBuzz.loadingTrack = PlayBuzz.loadingTrack || {
    shouldTrackLoading: Math.random() < .1,
    pageLoadTrackerId: (Math.random() * 1e17).toString(),
    hostConnectStarted: null,
    scriptStarted: Date.now(),
    browserSupportsTiming: null,
    randUserId: (Math.random() * 1e17).toString(),
    iframeInjectionTime: []
};
window.performance && window.performance.timing && window.performance.timing.connectStart ? (PlayBuzz.loadingTrack.hostConnectStarted = window.performance.timing.connectStart, PlayBuzz.loadingTrack.browserSupportsTiming = !0) : (PlayBuzz.loadingTrack.hostConnectStarted = Date.now(), PlayBuzz.loadingTrack.browserSupportsTiming = !1),
    function() {
        if (!PlayBuzz.core) {
            var n = {
                    value: null
                },
                r = function() {
                    var n = document.location.search;
                    return n.indexOf("pb_debug=true") >= 0
                }();

            function t(t, i, r) {
                try {
                    return t.apply(i, r)
                } catch (u) {
                    return n.value = u, n
                }
            }
            var i = document.createElement("style");
            i.textContent = ".pb_p_logo{position:absolute;display:block;width:30px;margin:auto;top:0;left:0;}";
            document.querySelector("head").appendChild(i);
            PlayBuzz.core = function() {
                var e = {
                    init: function() {
                        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
                        this.OS = this.searchString(this.dataOS) || "an unknown OS"
                    },
                    searchString: function(n) {
                        for (var t = 0; t < n.length; t++) {
                            var i = n[t].string,
                                r = n[t].prop;
                            if (this.versionSearchString = n[t].versionSearch || n[t].identity, i) {
                                if (i.indexOf(n[t].subString) != -1) return n[t].identity
                            } else if (r) return n[t].identity
                        }
                    },
                    searchVersion: function(n) {
                        var t = n.indexOf(this.versionSearchString);
                        if (t != -1) return parseFloat(n.substring(t + this.versionSearchString.length + 1))
                    },
                    dataBrowser: [{
                        string: navigator.userAgent,
                        subString: "Chrome",
                        identity: "Chrome"
                    }, {
                        string: navigator.userAgent,
                        subString: "OmniWeb",
                        versionSearch: "OmniWeb/",
                        identity: "OmniWeb"
                    }, {
                        string: navigator.vendor,
                        subString: "Apple",
                        identity: "Safari",
                        versionSearch: "Version"
                    }, {
                        prop: window.opera,
                        identity: "Opera",
                        versionSearch: "Version"
                    }, {
                        string: navigator.vendor,
                        subString: "iCab",
                        identity: "iCab"
                    }, {
                        string: navigator.vendor,
                        subString: "KDE",
                        identity: "Konqueror"
                    }, {
                        string: navigator.userAgent,
                        subString: "Firefox",
                        identity: "Firefox"
                    }, {
                        string: navigator.vendor,
                        subString: "Camino",
                        identity: "Camino"
                    }, {
                        string: navigator.userAgent,
                        subString: "Netscape",
                        identity: "Netscape"
                    }, {
                        string: navigator.userAgent,
                        subString: "MSIE",
                        identity: "Explorer",
                        versionSearch: "MSIE"
                    }, {
                        string: navigator.userAgent,
                        subString: "Gecko",
                        identity: "Mozilla",
                        versionSearch: "rv"
                    }, {
                        string: navigator.userAgent,
                        subString: "Mozilla",
                        identity: "Netscape",
                        versionSearch: "Mozilla"
                    }],
                    dataOS: [{
                        string: navigator.platform,
                        subString: "Win",
                        identity: "Windows"
                    }, {
                        string: navigator.platform,
                        subString: "Mac",
                        identity: "Mac"
                    }, {
                        string: navigator.userAgent,
                        subString: "iPhone",
                        identity: "iPhone/iPod"
                    }, {
                        string: navigator.platform,
                        subString: "Linux",
                        identity: "Linux"
                    }]
                };
                e.init();
                var u = {},
                    f = function() {
                        var i = [];
                        return {
                            postMessage: function(i, r) {
                                function u() {
                                    if (window.postMessage) {
                                        if (i.postMessage) {
                                            i.postMessage(r, "*");
                                            return
                                        }
                                        if (i.contentWindow) {
                                            i.contentWindow.postMessage(r, "*");
                                            return
                                        }
                                    }
                                }

                                function f() {
                                    i.pbFrameListener(r)
                                }
                                var e = t(u);
                                e === n && t(f)
                            },
                            listen: function(n) {
                                window.postMessage ? o(window, "message", n) : i.push(n)
                            }
                        }
                    }();

                function h() {
                    var n = new Image;
                    return n.src = "data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs=", n.style.cssText = "position:absolute; left:50%; top:50%; marginLeft:-16px; marginTop:-16px;width:auto !important;height:auto !important;", n.className = "plbz_frame_spinner", n
                }

                function c(n, t) {
                    try {
                        return n.getElementsByClassName(t)
                    } catch (o) {
                        for (var u = [], f = new RegExp("(^| )" + t + "( |$)"), r = n.getElementsByTagName("div"), i = 0, e = r.length; i < e; i++) f.test(r[i].className) && u.push(r[i]);
                        return u
                    }
                }

                function o(n, t, i) {
                    n.addEventListener ? n.addEventListener(t, i) : n.attachEvent("on" + t, i)
                }

                function s(n, t) {
                    if (u[n])
                        for (var r = 0; r < u[n].length; r++) try {
                            typeof u[n][r] == "function" && u[n][r](t)
                        } catch (f) {
                            i.debugLog("speed-exception", f)
                        }
                }
                var i = {
                    browser: e,
                    isMobile: function() {
                        return navigator.userAgent.match("/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i")
                    }(),
                    debugLog: function() {
                        r && console.log(arguments)
                    },
                    UUID: function() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                            var t = Math.random() * 16 | 0,
                                i = n == "x" ? t : t & 3 | 8;
                            return i.toString(16)
                        })
                    },
                    getURLParam: function(n) {
                        if (!document.location.search.length) return null;
                        for (var r = {}, f = n && n.toLowerCase ? n.toLowerCase() : null, u = document.location.search.substring(1).toLowerCase().split("&"), e = u.length, t = null, i = 0; i < e; i++)
                            if (t = u[i].split("="), t.length > 1) {
                                if (f == t[0]) return t[1];
                                r[t[0]] = t[1]
                            }
                        return n == undefined ? r : null
                    },
                    getDivsByClassName: c,
                    dispatchEvent: s,
                    listen: function(n, t) {
                        u[n] || (u[n] = []);
                        u[n].push(t)
                    },
                    ajax: function(n, t, r, u, f) {
                        var c = !1,
                            e = function() {
                                var t = !1;
                                if ("withCredentials" in new XMLHttpRequest) try {
                                    t = new XMLHttpRequest
                                } catch (r) {
                                    i.debugLog("speed-exception", r);
                                    t = !1
                                } else if (typeof XDomainRequest != "undefined") try {
                                    t = new XDomainRequest;
                                    c = !0;
                                    t.onload = function() {
                                        e.readyState = 4;
                                        e.status = 200;
                                        e.onreadystatechange()
                                    };
                                    n = n.replace(/^https?:/, "");
                                    n = location.protocol + n
                                } catch (u) {
                                    i.debugLog("speed-exception", u);
                                    t = !1
                                } else if (typeof ActiveXObject != "undefined") try {
                                    t = new ActiveXObject("Msxml2.XMLHTTP")
                                } catch (r) {
                                    i.debugLog("speed-exception", r);
                                    try {
                                        t = new ActiveXObject("Microsoft.XMLHTTP")
                                    } catch (f) {
                                        t = !1
                                    }
                                } else console.log("Playbuzz: Cors ajax is not supported");
                                return t === !1 && console.log("Playbuzz: Couldn't send ajax request"), t
                            }();
                        if (e && n) {
                            e.overrideMimeType && e.overrideMimeType("text/xml");
                            var o = u || "text";
                            o = o.toLowerCase();
                            f = f || "GET";
                            var s = null;
                            if (f == "POST") {
                                var h = n.split("?");
                                n = h[0];
                                s = h[1]
                            }
                            var l = "uid=" + (new Date).getTime();
                            n += n.indexOf("?") + 1 ? "&" : "?";
                            n += l;
                            try {
                                e.open(f, n, !0)
                            } catch (a) {
                                i.debugLog("speed-exception", a);
                                return
                            }
                            f == "POST" && e.setRequestHeader !== undefined && e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            e.onreadystatechange = function() {
                                if (e.readyState == 4 && e.status == 200) {
                                    var n = "";
                                    e.responseText && (n = e.responseText);
                                    o.charAt(0) == "j" && (n = n.replace(/[\n\r]/g, ""), n = eval("(" + n + ")"));
                                    r && r(n, t)
                                }
                            };
                            e.send(s)
                        }
                    },
                    loadDiv: function(n, t, r) {
                        var u;
                        if (window.XDomainRequest) {
                            u = new XDomainRequest;
                            u.onerror = function() {};
                            u.onload = function() {
                                r && r(u, t, !0)
                            };
                            u.open("get", n);
                            u.send();
                            return
                        }
                        if (window.XMLHttpRequest) {
                            u = new XMLHttpRequest;
                            u.onreadystatechange = function() {
                                r && r(u, t)
                            };
                            try {
                                u.open("GET", n, !0);
                                u.send(null)
                            } catch (f) {
                                i.debugLog("speed-exception", f)
                            }
                        } else u = new ActiveXObject("Microsoft.XMLHTTP"), u && (u.onreadystatechange = function() {
                            r && r(u, t)
                        }, u.open("GET", n, !0), u.send());
                        return !1
                    },
                    render: function() {
                        PlayBuzz.Feed && PlayBuzz.Feed.renderFeed(!0);
                        PlayBuzz.Widget && PlayBuzz.Widget.renderWidget();
                        PlayBuzz.Hub && PlayBuzz.Hub.renderHub()
                    },
                    sendAnalyticsEvent: function(n) {
                        n.data.patternId = window.gameData && gameData.patternId;
                        PlayBuzz.core.sendMessageToParent({
                            name: "analyticsEvent",
                            event: n,
                            id: PlayBuzz.core.getURLParam("divId")
                        }, 1)
                    },
                    sendMessageToParent: function(n) {
                        try {
                            typeof n != "string" && (n.id || (n.id = PlayBuzz.core.getURLParam("divId")), n = JSON.stringify(n));
                            f.postMessage(parent, n)
                        } catch (t) {
                            i.debugLog("speed-exception", t)
                        }
                    },
                    sendMessageToIframe: function(n, t) {
                        try {
                            typeof n != "string" && (n = JSON.stringify(n));
                            var r = t || document.querySelectorAll(".pb_feed_iframe")[0];
                            f.postMessage(r, n, !0)
                        } catch (u) {
                            i.debugLog("speed-exception", u)
                        }
                    },
                    onFrameMessage: function(n) {
                        var r = n.data ? n.data : n;

                        function f() {
                            var n = JSON.parse(r);
                            switch (n.name) {
                                case "analyticsEvent":
                                    if (u.analyticsEvent)
                                        for (var t = 0; t < u.analyticsEvent.length; t++) u.analyticsEvent[t](n.event);
                                    break;
                                case "handshake":
                                    try {
                                        var f = PlayBuzz.Feed.getFeedContainer(n.id),
                                            e = f.querySelector("iframe");
                                        i.sendMessageToIframe({
                                            event: "handshakeResponse"
                                        }, e)
                                    } catch (o) {
                                        i.debugLog("speed-exception", o)
                                    }
                                    break;
                                case "documentReady":
                                    typeof PlayBuzzCallback == "function" && window.PlayBuzzCallback(n)
                            }
                        }
                        t(f);
                        s("onMessage", r)
                    },
                    spin: function(n) {
                        n && (n.spinner || (n.spinner = h(), n.appendChild(n.spinner), n.style.position == "" && (n.style.position = "relative")))
                    },
                    stopSpinner: function(n) {
                        if (n && n.spinner) {
                            var t = document.querySelector(".plbz_frame_spinner");
                            t && t.parentNode.removeChild(t);
                            n.spinner = null
                        }
                    }
                };
                return function() {
                    setTimeout(function() {
                        try {
                            i.render()
                        } catch (n) {
                            console.error(n)
                        }
                        PlayBuzz.Feed && PlayBuzz.Feed.setDOMListener()
                    })
                }(), document.addEventListener("DOMContentLoaded", function() {
                    setTimeout(function() {
                        try {
                            i.render()
                        } catch (n) {
                            i.debugLog("speed-exception", n);
                            o(window, "load", i.render)
                        }
                        PlayBuzz.Feed && PlayBuzz.Feed.setDOMListener()
                    })
                }), f.listen(i.onFrameMessage), i
            }()
        }
    }();
window.PlayBuzz || (window.PlayBuzz = {}),
    function() {
        PlayBuzz.Embed = PlayBuzz.Embed || {};
        PlayBuzz.Embed.shookHands = !1;
        PlayBuzz.Embed.hasScroll = !1;
        var t, n = {};

        function r() {
            $(document).ready(function() {
                window.Tools && window.displaySettings && (window.showShares = Tools.shouldShowShares(), window.displaySettings.showGameDetails.toLowerCase() == "true" ? ($(".gameDetailsExteralWrapper").css("display", "block"), $(".game_details_wrapper").css("display", "block"), $(".game_description_wrapper").css("display", "block")) : $("#feed-top-ad").css("margin-bottom", "20px"), Tools.shouldShowShares() ? $(".socialBar_above_the_game").css("min-height", 0) : ($(".feed_social_bar").css("display", "block"), $(".image_sharing_bar").remove()), window.displaySettings.showRecommendations.toLowerCase() == "true" && ($(".fb_mobile_comments").css("display", "block"), $("#editor_picks_container").find(".category_title").text("Playbuzz Picks")))
            })
        }

        function i() {
            PlayBuzz.iFrame = function() {
                var c = document.getElementById("pb_iframe_con") != null && document.getElementById("pb_iframe_con") != undefined,
                    u, r = 0;
                (function() {
                    try {
                        t = setTimeout(function() {
                            try {
                                PlayBuzz.Events.dispatch(PlayBuzz.Events.embedEvents.IFRAME_HANDSHAKE, {
                                    shookHands: !1
                                }, !0)
                            } catch (n) {
                                console.log("speed-exception", n)
                            }
                        }, 1e3);
                        var n = PlayBuzz.core.getURLParam("divId");
                        PlayBuzz.core.sendMessageToParent({
                            name: "handshake",
                            id: n
                        })
                    } catch (i) {
                        console.log("speed-exception", i)
                    }
                })();

                function e(n) {
                    r = $("body").height();
                    try {
                        PlayBuzz.core.getURLParam("height") == "auto" && PlayBuzz.core.sendMessageToParent({
                            resize_height: r,
                            id: PlayBuzz.core.getURLParam("divId")
                        });
                        window.parent.postMessage({
                            sentinel: "amp",
                            type: "embed-size",
                            height: r
                        }, "*")
                    } catch (t) {
                        n > 0 && setTimeout(function() {
                            e(n - 1);
                            1e3
                        })
                    }
                }

                function i() {
                    e(10)
                }
                var f = function() {
                    var n = !1,
                        t = 0,
                        i = 0,
                        r = 0,
                        u = null,
                        f = null,
                        e = null;

                    function o() {
                        n = !1;
                        $("#scorebar_container").css("top", t);
                        $("#scorebar_container").animate({
                            opacity: 1
                        }, 250, function() {})
                    }
                    return {
                        getRelativeTop: function(n) {
                            return $(".scorebar_container_wrapper").length <= 0 ? 0 : (e = $(".scorebar_container_wrapper").offset().top, f = n.offsetTop + e)
                        },
                        moveTo: function(f) {
                            f != t && ((t = f, i += 250, n) || (n = !0, $("#scorebar_container").css("position", "absolute"), $("#scorebar_container").stop().animate({
                                opacity: 0
                            }, 250, function() {
                                r = (new Date).getTime();
                                i = r + 250;
                                u = setInterval(function() {
                                    var n = (new Date).getTime();
                                    n >= i && (clearInterval(u), o())
                                }, 50)
                            })))
                        }
                    }
                }();

                function o(i) {
                    var r;
                    try {
                        r = JSON.parse(i)
                    } catch (i) {
                        r = {}
                    }
                    switch (r.event) {
                        case "queryScroll":
                            var u = r.queryId;
                            n.hasOwnProperty(u) && n[u].success(r.data);
                            break;
                        case "handshakeResponse":
                            clearInterval(t);
                            PlayBuzz.Embed.shookHands = !0;
                            try {
                                PlayBuzz.Events.dispatch(PlayBuzz.Events.embedEvents.IFRAME_HANDSHAKE, {
                                    shookHands: !0
                                }, !0)
                            } catch (i) {
                                console.log("speed-exception", i)
                            }
                            break;
                        case "scroll":
                        default:
                            s(i)
                    }
                }

                function s(n) {
                    if (!(n.search("scroll") < 0)) {
                        var h = function() {
                                var n = Tools.getURLParam("parameters"),
                                    t = Tools.extractParameters(decodeURIComponent(n));
                                try {
                                    if (t.isfb == "true") return !0
                                } catch (i) {
                                    console.log("speed-exception", i)
                                }
                                return !1
                            }(),
                            o = function() {
                                if (window.displaySettings) {
                                    var n = parseInt(window.displaySettings.marginTop);
                                    if (!isNaN(n)) return n
                                }
                                return 0
                            }(),
                            i = parseInt(PlayBuzz.core.getURLParam("marginTop")) || o,
                            c = i,
                            t = JSON.parse(n),
                            r = jQuery.Event("iframeScroll"),
                            u = {
                                scrollY: t.scroll,
                                offsetTop: t.offsetTop,
                                fbOffset: i,
                                windowHeight: t.windowHeight
                            };
                        jQuery.extend(r, u);
                        $(document).trigger(r);
                        typeof onIframeScroll == "function" && window.onIframeScroll(u);
                        PlayBuzz.Embed.hasScroll = !0;
                        var e = f.getRelativeTop(t),
                            s = t.scroll - e + i;
                        if (t.scroll <= e - i) {
                            f.moveTo(0);
                            return
                        }
                        f.moveTo(s)
                    }
                }
                window.addEventListener ? window.addEventListener("resize", i) : window.attachEvent("onresize", i);
                $(document).on("scrollParent", function(n) {
                    var t = "iframe_top";
                    n.scrollToPosition != undefined && (t = n.scrollToPosition);
                    var i = !isNaN(Tools.getURLParam("height"));
                    i || PlayBuzz.core.sendMessageToParent({
                        scroll_y: t,
                        id: PlayBuzz.core.getURLParam("divId")
                    })
                });
                window.onload = function() {
                    try {
                        u == undefined && (u = 0)
                    } catch (n) {
                        console.log("speed-exception", n)
                    }
                    i(10)
                };
                $(document).ready(function() {
                    try {
                        PlayBuzz.core.sendMessageToParent({
                            pageLoaded: !0,
                            id: PlayBuzz.core.getURLParam("divId")
                        })
                    } catch (n) {
                        console.log("speed-exception", n)
                    }
                });
                $(document).on("resizingComplete", function() {
                    setTimeout(function() {
                        i(10)
                    }, 1e3)
                });
                i(10);
                PlayBuzz.core.listen("onMessage", o);
                $(document).on("barTopSet", function() {
                    try {
                        u = $("#scorebar_container").offset().top
                    } catch (n) {
                        console.log("speed-exception", n)
                    }
                });
                setInterval(function() {
                    var n = $("body").height();
                    n != r && i(5)
                }, 250);
                var h = {
                    checkSize: function() {
                        i(10)
                    }
                };
                (function() {
                    PlayBuzz.core.getURLParam("height") == "auto" && $("html").css("overflow", "hidden")
                })();
                $(document).on("shareBarLoaded", function() {
                    showShares ? $(".feed_social_bar").css("display", "block") : ($(".feed_social_bar").remove(), $("#feed_result_screen").removeClass("isSocial").addClass("noSocial"), $(".final_result_social_wrapper").remove(), window.gameData && gameData.patternId == "Poll" && $(".share_container").remove(), $(".image_sharing_bar").remove())
                });
                return h
            }();
            r()
        }
        if (window.jQuery) i();
        else var u = setInterval(function() {
            window.jQuery && (i(), clearInterval(u))
        }, 100);
        (function() {
            if ((!window.gameData || gameData.patternId !== "TestYourself") && (!window.gameData || gameData.patternId !== "Story"))
                if (window.PlayBuzz && PlayBuzz.Events && !window.isErrorPage) PlayBuzz.Events.register(PlayBuzz.Events.loadEvents.DOM_READY, function() {
                    var n = PlayBuzz.core.getURLParam("divId");
                    PlayBuzz.core.sendMessageToParent({
                        name: "docReady",
                        id: n
                    })
                });
                else {
                    var n = PlayBuzz.core.getURLParam("divId");
                    PlayBuzz.core.sendMessageToParent({
                        name: "docReady",
                        id: n
                    })
                }
        })();

        function f(t) {
            this.id = Math.random();
            this.callback = t;
            this.timeout = null;
            this.error = !1;
            this.sendQuery = function() {
                PlayBuzz.core.sendMessageToParent({
                    name: "queryScroll",
                    queryId: this.id
                });
                this.timeout = setTimeout(function() {
                    this.error = !0;
                    typeof this.callback == "function" && this.callback({
                        result: "error"
                    });
                    this.stop()
                }.bind(this), 1e3)
            };
            this.stop = function() {
                clearTimeout(this.timeout);
                delete n[this.id];
                this.callback = null
            };
            this.success = function(n) {
                typeof this.callback == "function" && this.callback(n);
                this.stop()
            };
            n[this.id] = this
        }
        PlayBuzz.Embed.queryScrollParam = function(n) {
            var t = new f(n);
            t.sendQuery()
        };
        PlayBuzz.Events.dispatch(PlayBuzz.Events.embedEvents.IFRAME_SCRIPT_READY, null, !0)
    }();
window.ctaAnalytics = {
    trackImpressionEvent: function(n) {
        var t = {};
        t.pageActionType = "cta_impression";
        t.pageActionName = "bottom";
        t.pageActionLabel = n._data.text;
        t.frameworkProp1 = n._data.style["background-color"];
        t.frameworkProp2 = n._data.style.color;
        this.sendAnalyticsEvent(t)
    },
    trackClickEvent: function(n) {
        (function() {
            var t = {};
            t.pageActionType = "cta_click";
            t.pageActionName = "bottom";
            t.pageActionLabel = n._data.text;
            t.outboundLinkClickLocation = n._data.url;
            t.frameworkProp1 = n._data.style["background-color"];
            t.frameworkProp2 = n._data.style.color;
            t.patternId = window.gameData && window.gameData.patternId;
            window.ctaAnalytics.sendAnalyticsEvent(t)
        })()
    },
    sendAnalyticsEvent: function(n) {
        try {
            AwsBridge.pageAction(n)
        } catch (t) {
            console.log("Failed to send CTA sendAnalyticsEvent")
        }
    }
};
window.ImpactWidgetLoader = function(n, t, i, r) {
        var u = window.Tools && Tools.isGameCreator() && !Tools.isPreview();
        if (u) {
            f(Tools.isFeed(), n, t).done(o(r)).fail(h);

            function f(n, t, i) {
                var r = $.Deferred();
                return n ? (e(i), $.getScript(t).done(r.resolve).fail(function(n, t, i) {
                    r.reject(i)
                })) : r.resolve(), r.promise()
            }

            function e(n) {
                var t = $("<link>");
                $("head").append(t);
                t.attr({
                    rel: "stylesheet",
                    type: "text/css",
                    async: "true",
                    href: n
                })
            }

            function o(n) {
                return function() {
                    try {
                        window.pb.impactWidgetLoader.canUserSeeStatsWidgetAsync().done(s(n)).fail(c)
                    } catch (t) {
                        console.error("Error in loading stats-widget, error message: ", t)
                    }
                }
            }

            function s(n) {
                return function(t) {
                    t.payload.statsWidget && $(".item-stats").each(function() {
                        var t = this;
                        loadSingleItemStatsBarIntoElement(window.gameData.gameId, t, window.gameData.wasCreatedBeforeWeStartedCollectingEvents, i, n);
                        $(t).on("click", ".stats-site-button", function() {
                            window.StatsWidgetAnalytics.trackClickEvent({
                                patternId: window.gameData && window.gameData.patternId,
                                itemIndexInPage: 1,
                                pageActionType: "article_page"
                            })
                        })
                    })
                }
            }

            function h(n, t, i) {
                console.error("Error in loading stats-widget script, error message: ", i)
            }

            function c(n) {
                console.error("error in request should user see Impact-Widget. error:", n.error, ", error code:", n.status, ".")
            }
        }
    },
    function() {
        var t = ctaUtils;

        function n(n) {
            this._id = n;
            this._$container = $("#" + this._id);
            this._$container.addClass("cta-container");
            this._eventHandler = $("<div><\/div>");
            this._data = null;
            this._ctaElementId = "uuid-" + t.shortUUID()
        }
        n.prototype.setup = function(n) {
            this._type = n.data.type;
            this._preview = n.preview;
            (n.data.ctaDisplay || this._preview) && (this._preview || (this._redirectCallback = n.redirectCallback), this.load(n.data))
        };
        n.prototype.load = function(n) {
            this._data = $.extend(!0, {}, n);
            this._type = n.type;
            this._render()
        };
        n.prototype._render = function() {
            this._$container.empty();
            var i;
            i = this._type === "link" ? $("<a><\/a>") : $("<button><\/button>");
            i.html(this._data.text);
            var n = $.extend(!0, {}, this._data.style);
            this._data.url = this._data.url && this._data.url.indexOf("http") !== 0 ? "http://" + this._data.url : this._data.url;
            this._type === "link" ? (n["line-height"] = n["font-size"], i.html(this._data.text), i.attr("href", this._data.url), delete n["background-color"], n["text-decoration"] = "underline") : this._type === "button" && (n["line-height"] = "45px");
            delete n.float;
            i.attr("id", this._ctaElementId);
            var s = " #" + this._ctaElementId + t.style.jsonToCssString(n),
                r = Object.create(n);
            switch (this._type) {
                case "button":
                    r["background-color"] = n["background-color"] && t.color.colorLuminance(n["background-color"], .1);
                    break;
                case "link":
                    r.color = n.color && t.color.colorLuminance(n.color, .7)
            }
            var h = " #" + this._ctaElementId + ":hover, #" + this._ctaElementId + ":focus  " + t.style.jsonToCssString(r),
                o = $("<style type='text/css'>" + s + h + "<\/style>");
            o.attr("id", "cta-injected-style-" + this._ctaElementId);
            $("head").append(o);
            var u = $("head > #cta-injected-style-" + this._ctaElementId);
            u.length > 1 && u[0].parentNode.removeChild(u[0]);
            i.addClass("cta-element " + this._type);
            var f = this;
            i.on("click", function(n) {
                n.preventDefault();
                f._onClick(n, f)
            });
            var e = $("<div><\/div>").addClass("cta-element-wrapper");
            e.html(i);
            e.css({
                "text-align": n["text-align"]
            });
            this._$container.html(e);
            f._onImpression()
        };
        n.prototype._trigger = function(n) {
            this._eventHandler.trigger(n, this)
        };
        n.prototype._onClick = function() {
            this._trigger("click");
            !this._preview && window.ctaAnalytics && window.ctaAnalytics.trackClickEvent && (window.ctaAnalytics.trackClickEvent(this), pbMonetizationBridge.CtaClick());
            this._redirect()
        };
        n.prototype._redirect = function() {
            typeof this._redirectCallback != "function" ? window.open(this._data.url) : this._redirectCallback(this._data.url)
        };
        n.prototype._onImpression = function() {
            this._trigger("impression");
            window.ctaAnalytics && window.ctaAnalytics.trackImpressionEvent && window.ctaAnalytics.trackImpressionEvent(this)
        };
        n.prototype.on = function(n, t) {
            this._eventHandler.on(n, t)
        };
        window.Cta = n
    }();
var Tools = {
    articleCanonicalUrl: function() {
        return Tools.getURLParam("articleCanonicalUrl")
    },
    getBrowserLanguage: function() {
        var n = navigator.language || navigator.userLanguage;
        return n && n.toLowerCase()
    },
    articleCanonicalUrlExtended: function() {
        var n = null;
        if (Tools.isFeed()) {
            if (n = Tools.getURLParam("articleCanonicalUrl"), !n || n == "null") return null
        } else {
            if (typeof gameData != "object") return null;
            n = "http://" + document.location.host + "/" + gameData.creatorName + "/" + gameData.gameName
        }
        return n != null && (n = decodeURIComponent(n)), n
    },
    setUserLocation: function(n) {
        try {
            window.userlocation = n.country;
            window.localStorage && (window.localStorage.userLocation = window.userlocation)
        } catch (t) {
            console.log("speed-exception", t)
        }
    },
    getUserLocation: function() {
        return window.userlocation
    },
    isLoggedIn: function() {
        var n = $.cookie("playbuzz") && $.cookie("playbuzz").origin.toLowerCase() === "anonymous";
        return $.cookie("playbuzz") !== null && !n
    },
    loadCSS: function(n, t) {
        try {
            for (var o = document.getElementsByTagName("link"), s = document.getElementsByTagName("style"), i = [], f = 0; f < o.length; f++) i.push(o[f]);
            for (var e = 0; e < s.length; e++) i.push(s[e]);
            for (var r = 0; r < i.length; r++)
                if (i[r].hasOwnProperty("href") && i[r].href.indexOf(n) >= 0 || i[r].hasOwnProperty("id") && i[r].id == n) {
                    t != null && t({
                        result: "success"
                    });
                    return
                }
        } catch (h) {
            console.log("speed-exception", h)
        }
        if (BrowserDetect.browser != "Explorer") $.ajax({
            url: n,
            success: function(i) {
                var r = document.createElement("style");
                r.type = "text/css";
                r.id = n;
                r.innerHTML = i;
                document.getElementsByTagName("head")[0].appendChild(r);
                t != null && t({
                    result: "success"
                })
            },
            error: function() {
                t != null && t({
                    result: "error",
                    url: n
                })
            }
        });
        else {
            var u = document.createElement("link");
            u.rel = "stylesheet";
            u.type = "text/css";
            u.onload = function() {
                t != null && t({
                    result: "success"
                })
            };
            u.href = n;
            document.getElementsByTagName("head")[0].appendChild(u)
        }
    },
    shouldShowShares: function() {
        if (!Tools.isFeed()) return !0;
        var n = Tools.getURLParam("parentUrl");
        return n === null || typeof n == "undefined" ? !1 : n.indexOf("instant-article") >= 0 ? !1 : Tools.getURLParam("useShares") === "false" ? !1 : window.displaySettings && displaySettings.showShares.toLowerCase() == "true"
    },
    getImageUrl: function(n) {
        var t = "",
            r = document.location.protocol,
            i = function() {
                if (n.GameImage == "" || n.GameImage == null) return !1;
                var t = n.GameImage.split(".");
                return isMobile ? t[0] + "_295_125." + t[1] : t[0] + "_560_420." + t[1]
            }();
        if (!i) return !1;
        var u = "/" + n.GameId + "/" + i;
        return t = document.location.host.indexOf("localhost") >= 0 ? "teststorage" : "cdn", r + "/especiales/que-mujer-del-cine-o-television-eres/" + t + u
    },
    loadCSSList: function(n, t) {
        if (n.length == 0) {
            t && t();
            return
        }
        var i = n.pop();
        this.loadCSS(i, function() {
            tools.loadCSSList(n, t)
        })
    },
    createUUID: function() {
        for (var n = [], i = "0123456789abcdef", t = 0; t < 36; t++) n[t] = i.substr(Math.floor(Math.random() * 16), 1);
        n[14] = "4";
        n[19] = i.substr(n[19] & 3 | 8, 1);
        n[8] = n[13] = n[18] = n[23] = "-";
        return n.join("")
    },
    randomWord: function(n) {
        for (var i = "", r = 0; r < 16; r++) {
            var u = r % 2 == 0 ? "bcdfghjklmnpqrstvwxyz" : "aeiou",
                f = Math.floor(Math.random() * u.length),
                t = u.charAt(f);
            n && (t = Math.floor(Math.random() * 2) == 0 ? t : t.toUpperCase());
            i += t
        }
        return n && (i += (new Date).getTime()), i
    },
    getTimeFromMS: function(n) {
        var t = Math.floor(n / 36e5),
            r = n - t * 36e5,
            i = Math.floor(r / 6e4);
        r -= i * 6e4;
        var u = Math.floor(r / 1e3),
            f = t < 10 ? "0" + t : t;
        return f += ":" + (i < 10 ? "0" + i : i), f + (":" + (u < 10 ? "0" + u : u))
    },
    topMessage: function(n, t) {
        clearTimeout(Tools.topMessageTimer);
        t || $("#top_message_inner").empty();
        var i = $("<div><\/div>").html(n).addClass("top_message").appendTo("#top_message_inner");
        $("#top_message_container").css("display", "block");
        Tools.topMessageTimer = setTimeout(function() {
            $("#top_message_close_button").click()
        }, 5e3)
    },
    topMessageTimer: null,
    cancelEvent: function(n) {
        return n.preventDefault(), !1
    },
    isValidImage: function(n, t, i) {
        var r = ["png", "jpg", "jpeg", "gif"];
        t && i && r.pop();
        for (var f = !1, u = 0; u < r.length; u++) {
            var e = r[u];
            if (n.toLowerCase().indexOf(e) >= 0) {
                f = !0;
                break
            }
        }
        return f
    },
    formatTime: function(n) {
        var i = new Date(n),
            t = {
                year: i.getFullYear(),
                month: i.getMonth() + 1,
                day: i.getDate(),
                hours: i.getHours(),
                minutes: i.getMinutes(),
                seconds: i.getSeconds()
            };
        for (var r in t) t[r] < 10 && (t[r] = "0" + t[r]);
        return t.year + "-" + t.month + "-" + t.day + " " + t.hours + ":" + t.minutes + ":" + t.seconds
    },
    getDayOfTheYear: function(n) {
        var t = new Date(n.getFullYear(), 0, 0),
            i = new Date(n).setHours(12),
            r = i - t;
        return Math.floor(r / 864e5)
    },
    getPartOfDay: function(n) {
        var t = n.getHours();
        return t <= 5 ? 1 : t <= 12 ? 2 : t <= 18 ? 3 : 4
    },
    getYearDayAndPart: function() {
        var n = new Date;
        return n.setHours(n.getUTCHours() - 8), "_" + Tools.getDayOfTheYear(n) + "_" + Tools.getPartOfDay(n)
    },
    isValidYoutube: function(n) {
        if (!n) return null;
        var t = n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        return t && t[2].length == 11 ? t[2] : n.length == 11 ? n : !1
    },
    getURLParam: function(n, t) {
        n && (n = n.toLowerCase());
        var f = document.location.toString(),
            t = t === undefined && t !== null ? !0 : t,
            e = f.split("?");
        if (e.length <= 1) return null;
        var l = e[0],
            i = f.substr(l.length + 1);
        t && i.search("#") >= 0 && (i = i.split("#")[0]);
        var o = {};
        if (i) {
            var s = i.split("&");
            try {
                for (var r = 0; r < s.length; r++) {
                    var u = s[r].split("=");
                    if (u.length > 1) {
                        var h = u[0],
                            c = u[1];
                        if (n == h.toLowerCase()) return c;
                        o[h] = c
                    }
                }
            } catch (a) {
                console.log("speed-exception", a)
            }
        } else return null;
        return n == undefined || !n ? o : null
    },
    hasParam: function(n) {
        return n ? location.search.substr(1).split("&").some(function(t) {
            return t.split("=")[0].toLowerCase() === n.toLowerCase()
        }) : (console.warn("can't get empty param"), !1)
    },
    removeDecodedUrlParams: function(n, t) {
        for (var i = n, r = 0; r < t.length; r++) i = Tools.removeDecodedUrlParam(i, t[r]);
        return i
    },
    removeDecodedUrlParam: function(n, t) {
        if (typeof n == "undefined" || n === null) return "";
        if (!t || n.indexOf(t) < 0) return n;
        var i = n.split("?"),
            r = i.length > 1 ? i[1].split("&") : [],
            u = r.filter(function(n) {
                return n.split("=")[0] !== t
            }).join("&");
        return i[0] + "?" + u
    },
    extractParameters: function(n) {
        var u = {};

        function r(t) {
            while (n.search(t) >= 0) n = n.replace(t, "")
        }
        r("'");
        r("{");
        r("}");
        for (var i = n.split(","), t = 0; t < i.length; t++)
            if (i[t].search(":") > 0) {
                var f = i[t].split(":")[0],
                    e = i[t].split(":")[1];
                u[f] = e
            }
        return u
    },
    getUrlRightSide: function() {
        var n;
        try {
            var t = document.location.toString(),
                i = document.location.host,
                r = t.search(i) + i.length + 1;
            n = t.substr(r)
        } catch (u) {
            console.log("speed-exception", u)
        }
        return n
    },
    getCreatorName: function() {
        var n = Tools.getUrlRightSide();
        return n.split("/")[0]
    },
    getGameName: function() {
        var n = Tools.getUrlRightSide(),
            t = n.split("?")[0];
        return t.split("/")[1]
    },
    isGameCreator: function() {
        return window.gameData ? $.cookie("playbuzz").userId === window.gameData.creatorId : !1
    },
    isLoggedInUserOwnChannel: function() {
        return window.UserData ? $.cookie("playbuzz").userId === window.UserData.userId : !1
    },
    isIpad: function() {
        return navigator.userAgent.match(/iPad/i) ? !0 : !1
    }(),
    isIpadFBWebView: function() {
        return navigator.userAgent.match(/FBDV\/iPad/i) ? !0 : !1
    }(),
    asianLocalesRegEx: /^(zh-CN|zh-HK|ko-KR|ja-JP|id-ID)/,
    russianLocalesRegEx: /^(ru|uk)/,
    isMobile: function() {
        return navigator.userAgent.match(/^(mozilla\/5\.0\s\((android;|linux;)\su;\sandroid\s2\.1;\sen-us;\)\sapplewebkit\/525\.10\+{0,1}\s\(khtml,\slike\sgecko\))|(mozilla\/5\.0\s\(windows\snt\s6\.2;\sarm;\strident\/7\.0;\stouch;\srv:11\.0;\swpdesktop;\s(nokia;\s){0,1}lumia\s(1){0,1}\d{3}\)\slike\sgecko)$/i) ? !0 : (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && !navigator.userAgent.match(/iPad/i) ? !0 : !1
    }(),
    isMobileNotTablet: function() {
        return navigator.userAgent.match(/^(mozilla\/5\.0\s\((android;|linux;)\su;\sandroid\s2\.1;\sen-us;\)\sapplewebkit\/525\.10\+{0,1}\s\(khtml,\slike\sgecko\))|(mozilla\/5\.0\s\(windows\snt\s6\.2;\sarm;\strident\/7\.0;\stouch;\srv:11\.0;\swpdesktop;\s(nokia;\s){0,1}lumia\s(1){0,1}\d{3}\)\slike\sgecko)$/i) ? !0 : (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && navigator.userAgent.match(/Mobile/i) && !navigator.userAgent.match(/iPad/i) ? !0 : !1
    }(),
    storage: function() {
        if ($.store) {
            var n = {},
                u = new $.store,
                i, t = !1;

            function r() {
                if (window.gameData) i = "playbuzz/" + gameData.gameId;
                else return;
                t = !0
            }
            return n.set = function(f) {
                t || r();
                var e = f ? $.extend(!0, n.getData(), f) : null;
                u.set(i, e)
            }, n.getData = function() {
                return t || r(), u.get(i)
            }, n.resetData = function() {
                t || r();
                n.set(null)
            }, n
        }
    }(),
    linkify: function(n, t) {
        var i, r, u, f = t ? "data-src='" + t + "'" : "";
        for (r = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, i = n.replace(r, '<a onclick="onLinkifiedUrl(this)" {src} class="linkified_url" rel="nofollow" href="$1" target="_blank">$1<\/a>'), u = /(^|[^\/])(www\.[\S]+(\b|$))/gim, i = i.replace(u, '$1<a onclick="onLinkifiedUrl(this)" {src} class="linkified_url" rel="nofollow" href="http://$2" target="_blank">$2<\/a>'), i = i.replace("{src}", f); i.indexOf("__ht__") >= 0;) console.log("replacing!"), i = i.replace("__ht__", "http:");
        return i
    },
    isErez: function() {
        try {
            var n = $.cookie("playbuzz").nickname == "erezr",
                t = Tools.getURLParam("whatami") == "anIdiot";
            return n && t
        } catch (i) {
            return console.log("speed-exception", i), !1
        }
    },
    getURLParamString: function(n, t) {
        var n = n ? n : Tools.getURLParam(null, !1);
        t && n && n[t] !== undefined && delete n[t];
        var i = "?",
            u = "",
            r = 0;
        for (var f in n) {
            var e = decodeURI(n[f]);
            u = r === 0 ? "" : "&";
            i += u + f + "=" + encodeURI(e);
            r++
        }
        return r === 0 && (i = ""), i
    },
    intToString: function(n) {
        for (var t = Math.abs(n), r = n < 0 ? -1 : 1, i = 0; t / 1e3 >= 1;) i++, t /= 1e3;
        return t = t < 10 ? Math.round(t * 10) / 10 : Math.round(t), t * r + ["", "k", "m", "b", "t"][i]
    },
    isNullOrUndefined: function(n, t) {
        return t = t || "", n == undefined || n == null ? t : n
    },
    escape: function(n) {
        return encodeURIComponent(n).replace("!", "%21").replace("'", "%27").replace("~", "%7E").replace("(", "%28").replace(")", "%29").replace("-", "%2D")
    },
    sumTo: function(n, t) {
        var r = 0;
        if (isNaN(n) || isNaN(t)) return 0;
        for (var i = n; i <= t; i++) r += i;
        return r
    },
    isFeed: function() {
        return Tools.getURLParam("feed") == "true"
    },
    isPreview: function() {
        var i = document.location.host + "/",
            r = document.location.toString(),
            n = r.split(i)[1];
        if (n) {
            var t = n.split("/")[0];
            if (t && t.toLowerCase() == "previewgame") return !0
        }
        return !1
    },
    addParamToUrl: function(n, t, i) {
        var f = Tools.isFeed(),
            r = n,
            u = "";
        return r = f ? decodeURIComponent(n) : n, r.indexOf("?") > -1 ? (r.indexOf(t + "=") > -1 && (r = Tools.removeUrlParam(r, t), r = decodeURIComponent(r)), u = "&" + t + "=" + i) : u = "?" + t + "=" + i, encodeURIComponent(r + u)
    },
    replaceAll: function(n, t, i) {
        if (!t || !n) throw new Error("Please verify both arguments are defined");
        return n.split(t).join(i)
    },
    removeUrlParam: function(n, t) {
        n = decodeURIComponent(n);
        var u = n.split("?"),
            e = u[0],
            f = u[1];
        if (f)
            for (var i = f.split("&"), r = 0; r < i.length; r++)
                if (i[r].split("=")[0] == t) {
                    if (i.splice(r, 1), n = e, i.length >= 1) {
                        var o = i.join("&");
                        n += "?" + o
                    }
                    return encodeURIComponent(n)
                }
        return encodeURIComponent(n)
    },
    cleanUrlParamsForShare: function(n) {
        if (typeof n != "string") return n;
        var t = n,
            i = n.split("?");
        if (i.length > 1) {
            t = i[0] + "?";
            var r = i[1].split("&");
            $.each(r, function(n, i) {
                i.indexOf("fb_") !== 0 && i.indexOf("homepageItemLocation") !== 0 && i.indexOf("homepageFeedItemCategory") !== 0 && (t = t + i + "&")
            });
            t = t.substr(0, t.length - 1)
        }
        return t
    },
    parseURL: function(n) {
        var t = document.createElement("a");
        return t.href = n, {
            source: n,
            protocol: t.protocol.replace(":", ""),
            host: t.hostname,
            port: t.port,
            query: t.search,
            hash: t.hash.replace("#", ""),
            path: t.pathname.replace(/^([^/])/, "/$1")
        }
    },
    getUrlParameterByName: function(n) {
        var t = Tools.queryString.parse();
        return t[n]
    },
    queryString: {
        parse: function(n) {
            var i = {};
            if (n = n !== undefined ? n : window.location.search, typeof n == "string" && n.length > 0) {
                n[0] === "?" && (n = n.substring(1));
                n = n.split("&");
                for (var f = 0, o = n.length; f < o; f++) {
                    var u = n[f],
                        e = u.indexOf("="),
                        t, r;
                    e >= 0 ? (t = u.substr(0, e), r = u.substr(e + 1)) : (t = u, r = "");
                    r = decodeURIComponent(r);
                    i[t] === undefined ? i[t] = r : i[t] instanceof Array ? i[t].push(r) : i[t] = [i[t], r]
                }
            }
            return i
        }
    },
    isWinPhone: function() {
        try {
            return navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0
        } catch (n) {
            return console.log("speed-exception", n), !1
        }
    }(),
    isComingFromApp: function() {
        return document.location.toString().toLowerCase().search("frommobileapp") >= 0
    }(),
    isIPhone: function() {
        return navigator.userAgent.match(/iPhone/i) != null
    }(),
    isSafari: function() {
        var n = navigator.userAgent.toLowerCase();
        return n.indexOf("safari") !== -1 && n.indexOf("chrome") === -1 ? !0 : !1
    },
    redirectParent: function(n) {
        var i = window.location.search.toLowerCase().indexOf("parenthost=") !== -1;
        if (i) {
            var t = "openLink";
            window.ctaUtils.isSafari() && (t = "redirectPage");
            try {
                PlayBuzz.core.sendMessageToParent({
                    id: PlayBuzz.core.getURLParam("divId"),
                    name: "action",
                    action: t,
                    url: n
                })
            } catch (r) {
                console.log("failed sending page refresh to background");
                window.open(n)
            }
        } else window.open(n)
    },
    isIOs9AndHigher: function() {
        var n = navigator.userAgent.match(/OS (\d+)_/i);
        return !!n && n.length > 1 ? !isNaN(n[1]) && Number(n[1]) >= 9 : !1
    },
    safeCall: function(n, t, i, r) {
        if (!n) return console.error("Cannot watch non-object");
        if (!t) return console.error("Cannot call undefined");
        if (typeof n[t] == "function") n[t].apply(r || window, i);
        else try {
            Object.watch(n, function u() {
                typeof n[t] == "function" && n[t].apply(r || window, i);
                Object.unwatch(n, u)
            })
        } catch (f) {
            console.log("speed-exception", f);
            console.error("An error has occured while observing ", n)
        }
    },
    loadExternalScriptAndRenderHTML: function(n) {
        return n
    },
    isUrl: function(n) {
        var t = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
        return t.test(n)
    },
    isAlphaNumeric: function(n) {
        var t = n.charCodeAt(0);
        return !(t > 47 && t < 58) && !(t > 64 && t < 91) && !(t > 96 && t < 123) ? !1 : !0
    },
    isWordBreakChar: function(n) {
        return /[\s\t\n\r\.\?\!\)\]\|\\]/.test(n)
    },
    numberAddCommas: function(n) {
        n += "";
        x = n.split(".");
        x1 = x[0];
        x2 = x.length > 1 ? "." + x[1] : "";
        for (var t = /(\d+)(\d{3})/; t.test(x1);) x1 = x1.replace(t, "$1,$2");
        return x1 + x2
    },
    isElementVisible: function(n, t, i) {
        try {
            var u = t,
                f = u + i,
                r = n.offset().top,
                e = r + n.height() - n.height() * .15,
                o = r + n.height()
        } catch (s) {
            console.log("speed-exception", s)
        }
        return r >= u && e * .85 <= f || r <= u && o >= f ? !0 : !1
    },
    firstLetterToUpperCase: function(n) {
        return n ? n.charAt(0).toUpperCase() + n.slice(1) : ""
    },
    showImageBarIfElementIsVisible: function(n, t, i) {
        Tools.isElementVisible(n, t, i) ? n.find(".image_sharing_bar").css("display", "inline-block") : n.find(".image_sharing_bar").css("display", "none")
    },
    setupElementScrollBehavior: function(n, t) {
        if (t) $(document).on(t.type, function() {
            Tools.showImageBarIfElementIsVisible(n, $(window).scrollTop(), $(window).innerHeight())
        });
        else window.onload = function() {
            Tools.showImageBarIfElementIsVisible(n, $(window).scrollTop(), $(window).innerHeight())
        };
        $(window).scroll(function() {
            Tools.showImageBarIfElementIsVisible(n, $(window).scrollTop(), $(window).innerHeight())
        });
        $(document).on("iframeScroll", function(t) {
            var i = t.scrollY - t.offsetTop;
            Tools.showImageBarIfElementIsVisible(n, i, t.windowHeight)
        })
    },
    shuffleArray: function(n) {
        for (var t = n.length - 1; t > 0; t--) {
            var i = Math.floor(Math.random() * (t + 1)),
                r = n[t];
            n[t] = n[i];
            n[i] = r
        }
        return n
    }
};
window.userlocation = function() {
        try {
            return window.localStorage && window.localStorage.userLocation ? window.localStorage.userLocation : null
        } catch (n) {
            console.log("speed-exception", n)
        }
    }(),
    function(n) {
        var t = {},
            s = n.document,
            r = "localStorage",
            c = "script",
            i;
        t.disabled = !1;
        t.version = "1.3.17";
        t.set = function() {};
        t.get = function() {};
        t.has = function(n) {
            return t.get(n) !== undefined
        };
        t.remove = function() {};
        t.clear = function() {};
        t.transact = function(n, i, r) {
            r == null && (r = i, i = null);
            i == null && (i = {});
            var u = t.get(n, i);
            r(u);
            t.set(n, u)
        };
        t.getAll = function() {};
        t.forEach = function() {};
        t.serialize = function(n) {
            return JSON.stringify(n)
        };
        t.deserialize = function(n) {
            if (typeof n != "string") return undefined;
            try {
                return JSON.parse(n)
            } catch (t) {
                return n || undefined
            }
        };

        function l() {
            try {
                return r in n && n[r]
            } catch (t) {
                return !1
            }
        }
        if (l()) i = n[r], t.set = function(n, r) {
            return r === undefined ? t.remove(n) : (i.setItem(n, t.serialize(r)), r)
        }, t.get = function(n, r) {
            var u = t.deserialize(i.getItem(n));
            return u === undefined ? r : u
        }, t.remove = function(n) {
            i.removeItem(n)
        }, t.clear = function() {
            i.clear()
        }, t.getAll = function() {
            var n = {};
            return t.forEach(function(t, i) {
                n[t] = i
            }), n
        }, t.forEach = function(n) {
            for (var r = 0; r < i.length; r++) {
                var u = i.key(r);
                n(u, t.get(u))
            }
        };
        else if (s.documentElement.addBehavior) {
            var u, f;
            try {
                f = new ActiveXObject("htmlfile");
                f.open();
                f.write("<" + c + ">document.w=window<\/" + c + '><iframe src="/favicon.ico"><\/iframe>');
                f.close();
                u = f.w.frames[0].document;
                i = u.createElement("div")
            } catch (v) {
                i = s.createElement("div");
                u = s.body
            }
            var e = function(n) {
                    return function() {
                        var f = Array.prototype.slice.call(arguments, 0);
                        f.unshift(i);
                        u.appendChild(i);
                        i.addBehavior("#default#userData");
                        i.load(r);
                        var e = n.apply(t, f);
                        return u.removeChild(i), e
                    }
                },
                a = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

            function h(n) {
                return n.replace(/^d/, "___$&").replace(a, "___")
            }
            t.set = e(function(n, i, u) {
                return (i = h(i), u === undefined) ? t.remove(i) : (n.setAttribute(i, t.serialize(u)), n.save(r), u)
            });
            t.get = e(function(n, i, r) {
                i = h(i);
                var u = t.deserialize(n.getAttribute(i));
                return u === undefined ? r : u
            });
            t.remove = e(function(n, t) {
                t = h(t);
                n.removeAttribute(t);
                n.save(r)
            });
            t.clear = e(function(n) {
                var u = n.XMLDocument.documentElement.attributes;
                n.load(r);
                for (var t = 0, i; i = u[t]; t++) n.removeAttribute(i.name);
                n.save(r)
            });
            t.getAll = function() {
                var n = {};
                return t.forEach(function(t, i) {
                    n[t] = i
                }), n
            };
            t.forEach = e(function(n, i) {
                for (var f = n.XMLDocument.documentElement.attributes, u = 0, r; r = f[u]; ++u) i(r.name, t.deserialize(n.getAttribute(r.name)))
            })
        }
        try {
            var o = "__storejs__";
            t.set(o, o);
            t.get(o) != o && (t.disabled = !0);
            t.remove(o)
        } catch (v) {
            t.disabled = !0
        }
        t.enabled = !t.disabled;
        typeof module != "undefined" && module.exports && this.module !== module ? module.exports = t : typeof define == "function" && define.amd ? define(t) : n.store = t
    }(Function("return this")());
var Hogan = {};
(function(n) {
    n.Template = function(n, t, i, r) {
        n = n || {};
        this.r = n.code || this.r;
        this.c = i;
        this.options = r || {};
        this.text = t || "";
        this.partials = n.partials || {};
        this.subs = n.subs || {};
        this.buf = ""
    };
    n.Template.prototype = {
        r: function() {
            return ""
        },
        v: l,
        t: t,
        render: function(n, t, i) {
            return this.ri([n], t || {}, i)
        },
        ri: function(n, t, i) {
            return this.r(n, t, i)
        },
        ep: function(n, t) {
            var r = this.partials[n],
                i = t[r.name];
            if (r.instance && r.base == i) return r.instance;
            if (typeof i == "string") {
                if (!this.c) throw new Error("No compiler available.");
                i = this.c.compile(i, this.options)
            }
            if (!i) return null;
            if (this.partials[n].base = i, r.subs) {
                t.stackText || (t.stackText = {});
                for (key in r.subs) t.stackText[key] || (t.stackText[key] = this.activeSub !== undefined && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                i = u(i, r.subs, r.partials, this.stackSubs, this.stackPartials, t.stackText)
            }
            return this.partials[n].instance = i, i
        },
        rp: function(n, t, i, r) {
            var u = this.ep(n, i);
            return u ? u.ri(t, i, r) : ""
        },
        rs: function(n, t, r) {
            var u = n[n.length - 1];
            if (!i(u)) {
                r(n, t, this);
                return
            }
            for (var f = 0; f < u.length; f++) n.push(u[f]), r(n, t, this), n.pop()
        },
        s: function(n, t, r, u, f, e, o) {
            var s;
            return i(n) && n.length === 0 ? !1 : (typeof n == "function" && (n = this.ms(n, t, r, u, f, e, o)), s = !!n, !u && s && t && t.push(typeof n == "object" ? n : t[t.length - 1]), s)
        },
        d: function(n, t, u, f) {
            var o, s = n.split("."),
                e = this.f(s[0], t, u, f),
                l = this.options.modelGet,
                c = null;
            if (n === "." && i(t[t.length - 2])) e = t[t.length - 1];
            else
                for (var h = 1; h < s.length; h++) o = r(s[h], e, l), o !== undefined ? (c = e, e = o) : e = "";
            return f && !e ? !1 : (f || typeof e != "function" || (t.push(c), e = this.mv(e, t, u), t.pop()), e)
        },
        f: function(n, t, i, u) {
            for (var f = !1, o = null, s = !1, h = this.options.modelGet, e = t.length - 1; e >= 0; e--)
                if (o = t[e], f = r(n, o, h), f !== undefined) {
                    s = !0;
                    break
                }
            return s ? (u || typeof f != "function" || (f = this.mv(f, t, i)), f) : u ? !1 : ""
        },
        ls: function(n, i, r, u, f) {
            var e = this.options.delimiters;
            return this.options.delimiters = f, this.b(this.ct(t(n.call(i, u)), i, r)), this.options.delimiters = e, !1
        },
        ct: function(n, t, i) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(n, this.options).render(t, i)
        },
        b: function(n) {
            this.buf += n
        },
        fl: function() {
            var n = this.buf;
            return this.buf = "", n
        },
        ms: function(n, t, i, r, u, f, e) {
            var s, h = t[t.length - 1],
                o = n.call(h);
            return typeof o == "function" ? r ? !0 : (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(o, h, i, s.substring(u, f), e)) : o
        },
        mv: function(n, i, r) {
            var u = i[i.length - 1],
                f = n.call(u);
            return typeof f == "function" ? this.ct(t(f.call(u)), u, r) : f
        },
        sub: function(n, t, i, r) {
            var u = this.subs[n];
            u && (this.activeSub = n, u(t, i, this, r), this.activeSub = !1)
        }
    };

    function r(n, t, i) {
        var r;
        return t && typeof t == "object" && (t[n] !== undefined ? r = t[n] : i && t.get && typeof t.get == "function" && (r = t.get(n))), r
    }

    function u(n, t, i, r, u, f) {
        function s() {}
        s.prototype = n;

        function h() {}
        h.prototype = n.subs;
        var e, o = new s;
        o.subs = new h;
        o.subsText = {};
        o.buf = "";
        r = r || {};
        o.stackSubs = r;
        o.subsText = f;
        for (e in t) r[e] || (r[e] = t[e]);
        for (e in r) o.subs[e] = r[e];
        u = u || {};
        o.stackPartials = u;
        for (e in i) u[e] || (u[e] = i[e]);
        for (e in u) o.partials[e] = u[e];
        return o
    }
    var f = /&/g,
        e = /</g,
        o = />/g,
        s = /\'/g,
        h = /\"/g,
        c = /[&<>\"\']/;

    function t(n) {
        return String(n === null || n === undefined ? "" : n)
    }

    function l(n) {
        return n = t(n), c.test(n) ? n.replace(f, "&amp;").replace(e, "&lt;").replace(o, "&gt;").replace(s, "&#39;").replace(h, "&quot;") : n
    }
    var i = Array.isArray || function(n) {
        return Object.prototype.toString.call(n) === "[object Array]"
    }
})(typeof exports != "undefined" ? exports : Hogan),
function() {
    var n = function() {
        try {
            var n = Tools.getURLParam("socialQueries");
            if (n) {
                var t = {};
                n = decodeURIComponent(n);
                n = JSON.parse(n);
                for (var i in n) t[i.toLowerCase()] = n[i];
                return t
            }
            return {}
        } catch (r) {
            return console.log("speed-exception", r), {}
        }
    }();
    $(document).ready(function() {
        var o = 22,
            s = 140,
            r = Tools.isMobile,
            t = Tools.getURLParam("feed") == "true",
            u = Tools.getURLParam("fromMobileApp") != null;
        SC = {};
        SC.parentUrl = Tools.getURLParam("parentUrl") || document.location.toString();
        var f = Tools.getURLParam("socialUrl");
        f != "" && f != null && (SC.parentUrl = f);
        t || (SC.parentUrl = Tools.cleanUrlParamsForShare(SC.parentUrl));
        var h = Tools.getURLParam("shareParam");
        h == "null" && (h = null);
        var c = window.displaySettings || {},
            l = c.useFacebookUrlShare && c.useFacebookUrlShare.toLocaleLowerCase() == "true" || window.isFBWebView == !0 && t && Tools.isIpad || t && Tools.isIpadFBWebView;
        window.PBSharer = {};
        PBSharer.Facebook = {};
        PBSharer.Twitter = {};
        PBSharer.Pinterest = {};
        PBSharer.Tumblr = {};
        PBSharer.GooglePlus = {};
        PBSharer.Reddit = {};
        PBSharer.Whatsapp = {};
        PBSharer.Vkontakte = {};
        PBSharer.Email = {};
        PBSharer.Sms = {};
        PBSharer.Copy = {};
        var y = function() {
            var t = document.location.toString().split("?")[0],
                i = t.split("playbuzz.com/")[1],
                n = Tools.getURLParam("game") || Tools.getURLParam("pburl");
            return !n || n.indexOf(i) >= 0 ? !0 : !1
        }();

        function i(i, r) {
            t || (i = window.useFf == "true" ? p(i, r) : a(i));
            try {
                n && n[r.toLowerCase()] && (i += (i.indexOf("?") >= 0 ? "&" : "?") + n[r.toLowerCase()])
            } catch (u) {
                console.log("speed-exception", u)
            }
            return i
        }

        function p(n, t) {
            var f = {
                facebook: "facebook.com",
                twitter: "twitter.com",
                pinterest: "pinterest.com",
                whatsapp: "whatsapp",
                Copy: "copy",
                Email: "email",
                Sms: "sms"
            };
            if (n = decodeURIComponent(n), Object.keys(f).indexOf(t) >= 0) {
                var o = n.split("?")[0],
                    r = n.split("?")[1];
                if (o) {
                    if (n = o, r) {
                        var s = r.toLowerCase().indexOf("utm_source") >= 0,
                            h = r.toLowerCase().indexOf("utm_medium") >= 0,
                            c = r.toLowerCase().indexOf("utm_campaign") >= 0;
                        if (s || h || c) {
                            for (var u = r.split("&"), e = 0; e < u.length; e++) {
                                var i = u[e].split("=");
                                i[0] && i[0].toLowerCase && i[0].toLowerCase() == "utm_source" ? (i[1] = f[t], u[e] = i.join("=")) : i[0] && i[0].toLowerCase && (i[0].toLowerCase() == "utm_medium" || i[0].toLowerCase() == "utm_campaign") && i[1] != "ff" && i[1].indexOf("_ff") < 0 && (i[1] = i[1] + "_ff", u[e] = i.join("="))
                            }
                            s || u.push("utm_source=" + f[t]);
                            h || u.push("utm_medium=ff");
                            c || u.push("utm_campaign=ff");
                            u.length >= 1 && (r = u.join("&"))
                        } else r += "&utm_source=" + f[t] + "&utm_medium=ff&utm_campaign=ff"
                    } else r = "utm_source=" + f[t] + "&utm_medium=ff&utm_campaign=ff";
                    n += "?" + r
                }
            }
            return encodeURIComponent(n)
        }

        function a(n) {
            n = decodeURIComponent(n);
            var r = n.split("?")[0],
                u = n.split("?")[1];
            if (r && (n = r, u))
                for (var f = u.split("&"), i = 0; i < f.length; i++) {
                    var t = f[i].split("=");
                    t[0] && t[0].toLowerCase && t[0].toLowerCase() == "fb_ref" && (n += "?" + t[0] + "=" + t[1])
                }
            return encodeURIComponent(n)
        }
        window.sharingServices = {
            facebook: "fb",
            twitter: "tw",
            tumblr: "tu",
            pinterest: "pi",
            reddit: "re",
            googleplus: "gp",
            whatsapp: "wa"
        };
        window.numericSharingServices = {
            facebook: "1",
            twitter: "2",
            pinterest: "3",
            tumblr: "4",
            reddit: "5",
            googleplus: "6",
            whatsapp: "7"
        };

        function e(n) {
            if (n) {
                var i = n.split("?")[0],
                    r = n.split("?")[1];
                if (i) {
                    var t = i.split("http://");
                    t = t[1] ? t[1] : t[0];
                    t = t.split("/");
                    t[3] && t.splice(3, 1);
                    t = t.join("/");
                    n = "http://" + t
                }
                r && (n += "?" + r)
            }
            return n
        }

        function v() {
            return t && SC.parentUrl && !l ? "feed" : y ? "sharer" : "feed"
        }
        PBSharer.Facebook.share = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = n.url.replace("https://", "http://");
            n.url = t ? n.url : e(n.url);
            n.isShareingResult = !1;
            var i = v(n.isShareingResult);
            switch (i) {
                case "sharer":
                    PBSharer.Facebook.shareUrl(n);
                    break;
                case "feed":
                    PBSharer.Facebook.shareFeed(n)
            }
        };
        PBSharer.Facebook.shareUrl = function(n) {
            n.url = encodeURIComponent(n.url);
            n.url = i(n.url, "facebook");
            var t = decodeURIComponent(n.url);
            n.url = t.split("&").join("%26");
            var e = window.screen.height / 2 - 218,
                o = window.screen.width / 2 - 313;
            if (window.shareUsingSdk) $("#fb-root.fb_reset").css("display", "block"), Tools.isMobile || FB.Canvas.setSize({
                width: 626,
                height: 436
            }), FB.Canvas.setAutoGrow(!1), FB.ui({
                display: "popup",
                method: "share",
                href: n.url
            }, function(t) {
                $("#fb-root.fb_reset").css("display", "none");
                t && !t.error_code && Analytics.sendSocialEvent("facebook", n.url, null, n)
            });
            else {
                window.useSwipeShare != undefined && window.useSwipeShare == "true" ? n.dont_send_event || Analytics.sendSocialEvent("facebook", n.url, null, n) : Analytics.sendSocialEvent("facebook", n.url, null, n);
                var u = r ? "//m.facebook.com/sharer.php" : "//www.facebook.com/sharer/sharer.php",
                    f = window.open(u + "?u=" + n.url, "_blank", "toolbar=0,status=0,width=626,height=436,top=' + shareTop + ',left=' + shareLeft");
                likeHandler.showPopupOnWindowClose(f)
            }
        };
        PBSharer.Facebook.shareFeed = function(n) {
            if (n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url, n.url = i(n.url, "facebook"), n.isShareingResult == !0 && (n.game_type == "TestYourself" || n.game_type == "multipleChoice")) var u = n.title.replace(" - " + gameData.gameNameForShare, "").replace(gameData.gameNameForShare, "") + (n.description || ""),
                f = gameData.gameNameForShare,
                e = $("meta[property='og:image']").prop("content");
            else var u = n.description || gameData.gameDescription,
                f = n.title || gameData.gameNameForShare,
                e = n.media || $("meta[property='og:image']").prop("content");
            var t = {
                method: "feed",
                name: f,
                link: n.url,
                picture: e,
                description: u,
                display: "popup"
            };
            if (t.picture != "" && t.picture.indexOf("http") < 0 && (t.picture = document.location.protocol + t.picture), document.location.toString().toLowerCase().search("frommobileapp") >= 0) {
                n.url = window.getCleanUrl();
                t.rnd = Math.random().toFixed(3);
                var o = jsonify(JSON.stringify(t));
                n.url += "#fbsharecontent" + o;
                document.location.assign(n.url);
                return
            }
            $("#fb-root.fb_reset").css("display", "block");
            for (var r in t) r != "link" && (t[r] = encodeURIComponent(t[r]));
            var s = "//www.facebook.com/v2.7/dialog/feed?display=popup&app_id=527957123932456&link=" + t.link + "&redirect_uri=" + document.location.protocol + "//" + document.location.host + "/pages/sharecomplete.html&title=" + t.name + "&picture=" + t.picture + "&description=" + t.description,
                h = window.open(s, "_blank", "toolbar=0,status=0,width=630,height=300")
        };
        PBSharer.Facebook.shareResult = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            u && (n.url = n.url.split("?")[0]);
            n.url = n.url.replace("https://", "http://");
            n.isShareingResult = !0;
            var i = v(n.isShareingResult, n.game_type);
            !t && n.game_type && n.game_type.toLowerCase && n.game_type.toLowerCase() == "testyourself" && (n.url = e(n.url));
            switch (i) {
                case "sharer":
                    PBSharer.Facebook.shareUrl(n);
                    break;
                case "feed":
                    PBSharer.Facebook.shareFeed(n)
            }
        };
        PBSharer.Facebook.shareImage = function(n, u, f) {
            if (n = e(n), window.Analytics) {
                var o = {
                    itemIndex: f
                };
                Analytics.sendSocialEvent("facebook", u, !0, o)
            }
            if (t && SC.parentUrl && !l) {
                PBSharer.Facebook.shareFeed({
                    url: n,
                    media: u
                });
                return
            }
            SC.parentUrl && (n = SC.parentUrl);
            n = encodeURIComponent(n);
            n = i(n, "facebook");
            var c = window.screen.height / 2 - 218,
                a = window.screen.width / 2 - 313,
                s = r ? "//m.facebook.com/sharer.php" : "//www.facebook.com/sharer/sharer.php",
                h = window.open(s + "?u=" + n, "_blank", "toolbar=0,status=0,width=626,height=436,top=' + shareTop + ',left=' + shareLeft");
            likeHandler.showPopupOnWindowClose(h)
        };

        function w(n, t, i) {
            var r = n.title;
            try {
                var e = ("via " + t + " " + i).length + (document.location.protocol.length == 6 ? o + 1 : o) + 6;
                if (r.length + e > s) {
                    var u = s - e,
                        f = r.substr(0, u);
                    if (Tools.isWordBreakChar(r.substr(f.length, 1))) r = f;
                    else {
                        var h = f.lastIndexOf(" ");
                        u = h > 0 ? h : u;
                        r = f.substr(0, u)
                    }
                    r += "..."
                }
            } catch (c) {
                console.log("speed-exception", c)
            }
            return n.title = r, n
        }
        PBSharer.Twitter.share = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "twitter");
            var r = "//twitter.com/intent/tweet?";
            window.twitterViaText && window.twitterViaText.toLocaleLowerCase() != "none" && (r += "via=" + window.twitterViaText);
            n = w(n, window.twitterViaText, window.twitterExtraText);
            r += "&original_referer=" + n.url + "&text=" + Tools.escape(n.title);
            window.twitterExtraText && (r += encodeURIComponent(" " + window.twitterExtraText));
            r += "&url=" + n.url;
            r = r;
            var u = window.open(r, "_blank", "width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("twitter", n.url, null);
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Twitter.shareResult = function(n) {
            u && (n.url = n.url.split("?")[0]);
            var t = $.extend({}, n);
            PBSharer.Twitter.share(t);
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("twitter", n.url, null, {
                shareFinalResult: !0
            })
        };
        PBSharer.Twitter.shareImage = function(n, r, f, e) {
            n = SC.parentUrl || n;
            n = t ? n : encodeURIComponent(n);
            n = i(n, "twitter");
            f = f || "";
            window.twitterExtraText && (f += encodeURIComponent(" " + twitterExtraText));
            var o = f + "&hashtags=";
            if (window.twitterViaText && twitterViaText.toLocaleLowerCase() != "none" && (o += "&via=" + twitterViaText), o += "&url=" + n, u) {
                var n = getCleanUrl(),
                    s = {
                        tweet: o
                    };
                s.rnd = Math.random().toFixed(3);
                var h = jsonify(JSON.stringify(s));
                n += "#twittersharecontent" + h;
                document.location.assign(n);
                return
            }
            var c = window.screen.height / 2 - 218,
                l = window.screen.width / 2 - 313,
                a = window.open("https://twitter.com/intent/tweet?text=" + o, "", "toolbar=0,status=0,width=626,height=436,top=" + c + ",left=" + l);
            window.Analytics && Analytics.sendSocialEvent("twitter", n, r, {
                shareFinalResult: !1,
                itemIndex: e
            });
            likeHandler.showPopupOnWindowClose(a)
        };
        PBSharer.Pinterest.shareResult = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "pinterest");
            n.media = n.media.indexOf("http") > -1 ? n.media : "http:" + n.media;
            var r = "//www.pinterest.com/pin/create/button/?" + ("url=" + n.url + "&media=" + n.media + "&description=" + Tools.escape(n.title));
            var u = window.open(r, "_blank", "width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("pinterest", n.url, null, {
                shareFinalResult: !0
            });
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Pinterest.share = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "pinterest");
            n.media = n.media.indexOf("http") > -1 ? n.media : "http:" + n.media;
            var r = "//www.pinterest.com/pin/create/button/?" + ("url=" + n.url + "&media=" + n.media + "&description=" + Tools.escape(n.title));
            var u = window.open(r, "_blank", "width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("pinterest", n.url, null);
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Pinterest.shareImage = function(n, r, u, f) {
            n = SC.parentUrl || n;
            n = t ? n : encodeURIComponent(n);
            n = i(n, "pinterest");
            r = r.indexOf("http") > -1 ? r : "http:" + r;
            var e = "//www.pinterest.com/pin/create/button/?" + ("url=" + n + "&media=" + r + "&description=" + u);
            var o = window.open(e, "_blank", "width=640,height=300");
            if (window.Analytics) {
                var s = {
                    itemIndex: f
                };
                Analytics.sendSocialEvent("pinterest", r, !0, s)
            }
            likeHandler.showPopupOnWindowClose(o)
        };
        PBSharer.Tumblr.shareResult = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "tumblr");
            n.media = n.media.indexOf("http") > -1 ? n.media : "http:" + n.media;
            var r = "//www.tumblr.com/share/link?" + ("url=" + n.url + "&name=" + n.title + "&description=" + n.game_title);
            var u = window.open(r, "_blank", "width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("tumblr", n.url, null, {
                shareFinalResult: !0
            });
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Tumblr.share = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "tumblr");
            n.url.indexOf("http://") > -1 ? n.url = n.url.substring(7, n.url.length) : n.url.indexOf("https://") > -1 && (n.url = n.url.substring(8, n.url.length));
            var r = "//www.tumblr.com/share/link?" + ("url=" + n.url + "&name=" + n.title + "&description=" + n.description);
            var u = window.open(r, "_blank", "width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("tumblr", n.url, null);
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Tumblr.shareImage = function(n, r, u, f) {
            n = SC.parentUrl || n;
            n = t ? n : encodeURIComponent(n);
            n = i(n, "tumblr");
            r = r.indexOf("http") > -1 ? r : "http:" + r;
            u = u || "";
            var e = window.screen.height / 2 - 218,
                o = window.screen.width / 2 - 313,
                n = "//www.tumblr.com/share/photo?source=" + encodeURIComponent(r) + "&caption=" + encodeURIComponent(u) + "&click_thru=" + n,
                s = window.open(n, "_blank", "toolbar=0,status=0,width=626,height=436,top=" + e + ",left=" + o);
            if (window.Analytics) {
                var h = {
                    itemIndex: f
                };
                Analytics.sendSocialEvent("tumblr", r, !0, h)
            }
            likeHandler.showPopupOnWindowClose(s)
        };
        PBSharer.GooglePlus.shareResult = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "googleplus");
            var r = "//plus.google.com/share?url=" + n.url;
            var u = window.open(r, "_blank", "width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("googleplus", n.url, null, {
                shareFinalResult: !0
            });
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.GooglePlus.share = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "googleplus");
            var r = "//plus.google.com/share?url=" + n.url;
            var u = window.open(r, "_blank", "width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("googleplus", n.url, null);
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Reddit.shareResult = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "reddit");
            var r = "//www.reddit.com/submit?" + ("url=" + n.url + "&title=" + n.title);
            var u = window.open(r, "_blank", "scrollbars=1,width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("reddit", n.url, null, {
                shareFinalResult: !0
            });
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Reddit.share = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "reddit");
            var r = "//www.reddit.com/submit?" + ("url=" + n.url + "&title=" + n.title);
            var u = window.open(r, "_blank", "scrollbars=1,width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("reddit", n.url, null);
            likeHandler.showPopupOnWindowClose(u)
        };
        PBSharer.Whatsapp.share = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = i(n.url, "whatsapp");
            n.url = decodeURIComponent(n.url);
            n.title = n.title || "";
            var u = Tools.escape(n.title + " - " + n.url),
                r = "whatsapp://send?text=" + u;
            if (Tools.isIPhone && Tools.isIOs9AndHigher()) window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("whatsapp", n.url, null), t && Tools.isSafari() ? Tools.redirectParent(r) : location.href = r;
            else {
                var f = window.open(r, "_blank", "width=640,height=300");
                window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("whatsapp", n.url, null);
                likeHandler.showPopupOnWindowClose(f)
            }
        };
        PBSharer.Whatsapp.shareResult = function(n) {
            n.url = n.overridParentUrl ? n.url : SC.parentUrl || n.url;
            n.url = i(n.url, "whatsapp");
            n.url = decodeURIComponent(n.url);
            n.title = n.title || "";
            var u = Tools.escape(n.title + " - " + n.url),
                r = "whatsapp://send?text=" + u;
            if (Tools.isIPhone && Tools.isIOs9AndHigher()) window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("whatsapp", n.url, null, {
                shareFinalResult: !0
            }), t && Tools.isSafari() ? Tools.redirectParent(r) : location.href = r;
            else {
                var f = window.open(r, "_blank", "width=640,height=300");
                window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("whatsapp", n.url, null, {
                    shareFinalResult: !0
                });
                likeHandler.showPopupOnWindowClose(f)
            }
        };
        PBSharer.Vkontakte.share = function(n) {
            n.url = SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "vkontakte");
            var u = "//vkontakte.ru/share.php?";
            u += "url=" + n.url + "&noparse=true";
            r && (u += "&title=" + n.title + "&image=" + n.media + "&description=" + n.description);
            var f = window.open(u, "_blank", "scrollbars=1,width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("vkontakte", n.url, null)
        };
        PBSharer.Vkontakte.shareResult = function(n) {
            PBSharer.Vkontakte.share(n)
        };
        PBSharer.Email.share = function(n) {
            n.url = SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "Email");
            var r = "mailto:?";
            r += "subject=" + encodeURIComponent(n.title);
            r += "&body=" + encodeURIComponent("I saw this on Playbuzz and couldn't wait to share it with you! ") + n.url;
            var u = window.open(r, "_self", "scrollbars=1,width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("Email", n.url, null)
        };
        PBSharer.Email.shareResult = function(n) {
            PBSharer.Email.share(n)
        };
        PBSharer.Sms.share = function(n) {
            n.url = SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "Sms");
            var r = "sms:?" + ("&body=" + encodeURIComponent(n.title.replace("%", encodeURIComponent("%")) + " - ") + n.url);
            var u = window.open(r, "_blank", "scrollbars=1,width=640,height=300");
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("Sms", n.url, null)
        };
        PBSharer.Sms.shareResult = function(n) {
            PBSharer.Sms.share(n)
        };

        function b(n, t) {
            var i = t.find("#copiedLink");
            i.length == 0 && (i = $('<input type="text" id="copiedLink" value="' + n + '"/>'), i.css({
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            }), t.append(i));
            i.get(0).setAttribute("value", decodeURIComponent(n));
            i.get(0).select();
            document.execCommand("copy", !1, null)
        }

        function k(n) {
            var t = $(n.shareBarElement.children()).find('[data-type="Copy"]').children().first(),
                i = t.find('[class="icon"]');
            i.attr("src", "https://s3.amazonaws.com/playbuzz-cdn/content/images/social_buttons_icon_sprite_v1_2.png");
            var r = t.css("background"),
                u = t.find(".share_button_text").text(),
                f = t.css("color"),
                e = t.find('[class="icon"]').css("left"),
                o = t.find('[class="icon"]').attr("src"),
                s = t.css("border");
            t.hide();
            t.css("background", "#009cff");
            t.fadeIn(200);
            t.css("color", "white");
            t.css("border", "1px solid #009cff");
            t.find(".share_button_text").text("Copied");
            i.css("left", "-280px");
            setTimeout(function() {
                t.hide();
                t.css("background", r);
                t.css("border", s);
                t.fadeIn(200);
                t.find(".share_button_text").text(u);
                t.css("color", f);
                i.css("left", e);
                i.attr("src", o)
            }, 2e3)
        }
        PBSharer.Copy.share = function(n) {
            n.url = SC.parentUrl || n.url;
            n.url = t ? n.url : encodeURIComponent(n.url);
            n.url = i(n.url, "Copy");
            b(n.url, n.shareBarElement);
            k(n);
            window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("Copy", n.url, null)
        };
        PBSharer.Copy.shareResult = function(n) {
            PBSharer.Copy.share(n)
        }
    })
}();
var ShareToolsHelpers = {
    DefaultAvailableButtons: ["Email", "Facebook", "Vkontakte", "Twitter", "Pinterest", "Tumblr", "GooglePlus", "Reddit", "Whatsapp"],
    isAsianGame: function(n) {
        return n && Tools.isMobileNotTablet ? n.gameLocale.match(Tools.asianLocalesRegEx) !== null : !1
    },
    getURLParam: function(n) {
        n && (n = n.toLowerCase());
        var u = document.location.toString(),
            f = u.split("?");
        if (f.length <= 1) return null;
        var c = f[0],
            t = u.substr(c.length + 1);
        t.search("#") >= 0 && (t = t.split("#")[0]);
        var e = {};
        if (t) {
            var o = t.split("&");
            try {
                for (var i = 0; i < o.length; i++) {
                    var r = o[i].split("=");
                    if (r.length > 1) {
                        var s = r[0],
                            h = r[1].toLowerCase();
                        if (n == s.toLowerCase()) return h;
                        e[s] = h
                    }
                }
            } catch (l) {
                console.log("speed-exception", l)
            }
        } else return null;
        return n == undefined ? e : null
    },
    getUrlReferrer: function() {
        var i = ShareToolsHelpers.getURLParam("referral") == null ? document.referrer : decodeURIComponent(ShareToolsHelpers.getURLParam("referral")),
            t = i.match(/:\/\/(www.pinterest.com|www.facebook.com|t.co|plus.url.google.com|www.reddit.com|www.tumblr.com|www.whatsapp.com|vk.com)/),
            n = null;
        if (t != null && t.length == 2) switch (t[1]) {
            case "www.facebook.com":
                n = "Facebook";
                break;
            case "www.pinterest.com":
                n = "Pinterest";
                break;
            case "plus.url.google.com":
                n = "GooglePlus";
                break;
            case "www.reddit.com":
                n = "Reddit";
                break;
            case "t.co":
                n = "Twitter";
                break;
            case "www.tumblr.com":
                n = "Tumblr";
                break;
            case "www.whatsapp.com":
                n = "Whatsapp";
                break;
            case "vk.com":
                n = "Vkontakte"
        }
        return n
    },
    isMobile: function() {
        return navigator.userAgent.match(/^(mozilla\/5\.0\s\((android;|linux;)\su;\sandroid\s2\.1;\sen-us;\)\sapplewebkit\/525\.10\+{0,1}\s\(khtml,\slike\sgecko\))|(mozilla\/5\.0\s\(windows\snt\s6\.2;\sarm;\strident\/7\.0;\stouch;\srv:11\.0;\swpdesktop;\s(nokia;\s){0,1}lumia\s(1){0,1}\d{3}\)\slike\sgecko)$/i) ? !0 : navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
    }(),
    isMobileNotTablet: function() {
        return navigator.userAgent.match(/^(mozilla\/5\.0\s\((android;|linux;)\su;\sandroid\s2\.1;\sen-us;\)\sapplewebkit\/525\.10\+{0,1}\s\(khtml,\slike\sgecko\))|(mozilla\/5\.0\s\(windows\snt\s6\.2;\sarm;\strident\/7\.0;\stouch;\srv:11\.0;\swpdesktop;\s(nokia;\s){0,1}lumia\s(1){0,1}\d{3}\)\slike\sgecko)$/i) ? !0 : (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && navigator.userAgent.match(/Mobile/i) ? !0 : !1
    }(),
    isAndroid: function() {
        return navigator.userAgent.toLowerCase().indexOf("android") > -1
    }(),
    isWinPhone: function() {
        try {
            return navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0
        } catch (n) {
            return console.log("speed-exception", n), !1
        }
    }(),
    isComingFromApp: function() {
        return document.location.toString().toLowerCase().search("frommobileapp") >= 0
    }(),
    isFacebookApp: function() {
        return navigator.userAgent.toLowerCase().indexOf("fban") > -1 || navigator.userAgent.toLowerCase().indexOf("fb_iab") > -1
    }(),
    filterObjectsFromArray: function(n, t) {
        for (var i = n.length - 1; i >= 0; i--) $.inArray(n[i], t) > -1 && n.splice(i, 1);
        return n
    },
    toArray: function(n) {
        var t = [];
        for (var i in n) t.push(i);
        return t
    },
    getTopSharing: function(n, t, i, r) {
        var u = ShareToolsHelpers.toArray(n);
        u = filterOutIrellevant(u, n, i, r);
        var f = [];
        return u.length > 1 ? f = u.sort(function(t, i) {
            var r = n[i].shareRate[0] / n[i].shareRate[1] - n[t].shareRate[0] / n[t].shareRate[1];
            return r == 0 ? n[i].lastSharedDate - n[t].lastSharedDate : r
        }) : u.length == 1 && (f = u), f.length > 0 ? f.slice(0, Math.min(t, f.length)) : null
    },
    getLastValidReferral: function(n, t, i) {
        var r = ShareToolsHelpers.toArray(n);
        r = filterOutIrellevant(r, n, t, i, !0);
        var u = [];
        return r.length > 1 ? u = r.sort(function(t, i) {
            return n[i].lastReferredDate - n[t].lastReferredDate
        }) : r.length == 1 && (u = r), u.length > 0 ? u[0] : null
    }
};

function filterOutIrellevant(n, t, i, r, u) {
    for (var s = (new Date).getTime() - i, f, o = !1, e = n.length - 1; e >= 0; e--) o = !1, f = n[e], $.inArray(f, r) > -1 ? (n.splice(e, 1), o = !0) : u ? (t[f].lastReferredDate < s || t[f].lastReferredDate == 0) && (t[f].lastReferredDate = 0, n.splice(e, 1), o = !0) : (t[f].lastSharedDate < s || t[f].lastSharedDate == 0) && (t[f].lastSharedDate = 0, n.splice(e, 1), o = !0);
    return n
}!!window.templates || (window.templates = {});
window.templates.buttonsTemplates = new Hogan.Template({
    code: function(n, t, i) {
        var r = this;
        return r.b(i = i || ""), r.b("<div class='socialBar consolidated unselectable "), r.b(r.v(r.d("options.addedClasses", n, t, 0))), r.b("' data-game-type='"), r.b(r.v(r.d("options.game_type", n, t, 0))), r.b("'>\r"), r.b("\n" + i), r.b("    <div class='final_result_social_title'>"), r.b(r.t(r.d("options.shareText", n, t, 0))), r.b("<\/div>\r"), r.b("\n" + i), r.b("    <div class='buttons_only'>\r"), r.b("\n" + i), r.s(r.d("options.displayShowMoreButton", n, t, 1), n, t, 0, 263, 760, "{{ }}") && (r.rs(n, t, function(n, t, r) {
            r.b("        <div class='more_share_wrapper hide_more_share' title='More Shares'>\r");
            r.b("\n" + i);
            r.b("            <div class='more_share_button'>\r");
            r.b("\n" + i);
            r.b("                <span class='more_share_icon'>\r");
            r.b("\n" + i);
            r.b('                    <div class="background-size-polyfill">\r');
            r.b("\n" + i);
            r.b('                        <img class="icon" src="//cdn.playbuzz.com/content/images/social_buttons_icon_sprite_new.png" />\r');
            r.b("\n" + i);
            r.b("                    <\/div>\r");
            r.b("\n" + i);
            r.b("                <\/span>\r");
            r.b("\n" + i);
            r.b("            <\/div>\r");
            r.b("\n" + i);
            r.b("            <div class='more_share_popup_wrapper'><\/div>\r");
            r.b("\n" + i);
            r.b("        <\/div>\r");
            r.b("\n" + i);
            r.b("\r");
            r.b("\n" + i)
        }), n.pop()), r.b("\r"), r.b("\n" + i), r.b("        <div class='social_buttons_external_wrapper'>\r"), r.b("\n" + i), r.s(r.f("myButtons", n, t, 1), n, t, 0, 879, 1637, "{{ }}") && (r.rs(n, t, function(n, t, r) {
            r.b("            <div class='social_button_wrapper' data-url='");
            r.b(r.v(r.d("config.urlToShare", n, t, 0)));
            r.b("' data-type='");
            r.b(r.v(r.d("config.data_type", n, t, 0)));
            r.b("'>\r");
            r.b("\n" + i);
            r.b("                <div class='");
            r.b(r.v(r.d("config.cssClass", n, t, 0)));
            r.b(" social_button'>\r");
            r.b("\n" + i);
            r.b("                    <span class='");
            r.b(r.v(r.d("config.icon", n, t, 0)));
            r.b("'>\r");
            r.b("\n" + i);
            r.b('                        <div class="background-size-polyfill">\r');
            r.b("\n" + i);
            r.b('                            <img class="icon" src="//cdn.playbuzz.com/content/images/social_buttons_icon_sprite_new.png" />\r');
            r.b("\n" + i);
            r.b("                        <\/div>\r");
            r.b("\n" + i);
            r.b("                    <\/span>\r");
            r.b("\n" + i);
            r.b("                    <span class='share_button_text'>");
            r.b(r.t(r.d("config.share_button_text", n, t, 0)));
            r.b("<\/span>\r");
            r.b("\n" + i);
            r.b("                    <span class='share_long_txt'>");
            r.b(r.t(r.d("config.share_long_txt", n, t, 0)));
            r.b("<\/span>\r");
            r.b("\n" + i);
            r.b("                    <span class='shares_count'><\/span>\r");
            r.b("\n" + i);
            r.b("                <\/div>\r");
            r.b("\n" + i);
            r.b("            <\/div>\r");
            r.b("\n" + i)
        }), n.pop()), r.b("        <\/div>        \r"), r.b("\n" + i), r.b("    <\/div>\r"), r.b("\n" + i), r.b("<\/div>"), r.fl()
    },
    partials: {},
    subs: {}
});
var paramsInterval = setInterval(function() {
    window.shareBarParams && (store.enabled || store.disabled) && (clearInterval(paramsInterval), window.ShareTools = initShareTools(), window.shareBarLoaded = !0, $(document).trigger("shareToolsLoaded"))
}, 10);

function initShareTools() {
    var n = {},
        t = JSON.parse(window.shareBarParams.replace(/&quot;/g, '"'));
    n.createGameShareBarParams = function() {
        var r = ShareToolsHelpers.isMobile && !ShareToolsHelpers.isWinPhone,
            i = {
                isFeed: ShareTools.isFeed,
                game_type: window.gameData ? window.gameData.patternId : "",
                numVisible: 2,
                numVisibleMobile: 2,
                isMobile: r,
                isIphone: n.isIPhone
            };
        return $.extend(i, t), i
    };
    n.createShareResultsBarParams = function(n) {
        var r = ShareToolsHelpers.isMobile && !ShareToolsHelpers.isWinPhone,
            i = $.extend({
                isShareResults: !0,
                isFeed: ShareTools.isFeed,
                game_type: window.gameData ? window.gameData.patternId : "",
                numVisible: 2,
                numVisibleMobile: 2,
                isMobile: r,
                shareFunc: "shareResult",
                isIphone: ShareTools.isIPhone
            }, n);
        return $.extend(i, t), i
    };
    n.isFeed = function() {
        return ShareToolsHelpers.getURLParam("feed") == "true"
    }();
    n.isIPhone = function() {
        return navigator.userAgent.match(/iPhone/i)
    }();

    function i() {
        return {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        }
    }
    var r = {
        Facebook: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        },
        Twitter: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        },
        Tumblr: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        },
        Pinterest: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        },
        Reddit: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        },
        GooglePlus: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        },
        Whatsapp: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        },
        Vkontakte: {
            shareRate: [0, 0],
            lastSharedDate: 0,
            lastReferredDate: 0
        }
    };
    return n.userAdaptive = function() {
        var n = {};

        function u(n) {
            return n instanceof Object ? n : n instanceof String ? JSON.parse(n) : $.extend(!0, {}, r)
        }
        n.storage = function() {
            if (!store.enabled) return console.log("storage is not defined"), {
                set: function() {},
                getData: function() {
                    return u(null)
                },
                resetData: function() {}
            };
            var n = {},
                i = store,
                t, r = !1;

            function f() {
                if (window.gameData) t = "playbuzz/userAdaptiveData";
                else return;
                r = !0
            }
            return n.set = function(n) {
                r || f();
                var u = n ? $.extend(!0, i.get(t), n) : null;
                i.set(t, u)
            }, n.getData = function() {
                return r || f(), i.get(t) == null && n.set(u(null)), i.get(t)
            }, n.resetData = function() {
                r || f();
                i.remove(t);
                n.set(u(null))
            }, n
        }();
        ShareToolsHelpers.expiryDate = t.maxAnchorTimeInDays * 864e5;
        n.getVisibleButtons = function(i, r, u) {
            var o = n.storage.getData();
            r = r || ShareToolsHelpers.DefaultAvailableButtons;
            var f = t.staticButtons || [],
                y = i - f.length,
                s = t.maxAnchorTimeInDays * 864e5,
                h = ShareToolsHelpers.getTopSharing(o, y, s, t.staticButtons);
            if (h != null && (f = f.concat(h)), f.length < i) {
                var e = ShareToolsHelpers.getUrlReferrer();
                if (e == null) var e = ShareToolsHelpers.getLastValidReferral(o, s, t.staticButtons);
                e != null && $.inArray(e, f) == -1 && (f = f.concat(e))
            }
            if (u) i = f.length;
            else {
                var c = i - f.length;
                if (c > 0)
                    for (var l = 0; l < c; l++)
                        for (var a = !1; !a;) {
                            var v = Math.floor(Math.random() * 999999999 % r.length);
                            $.inArray(r[v], f) == -1 && (f = f.concat(r[v]), a = !0)
                        }
            }
            return r = ShareToolsHelpers.filterObjectsFromArray(r, f), f = f.concat(r), {
                buttons: f,
                numVisible: i
            }
        };
        n.updateImpressionsCount = function(t) {
            for (var f = n.storage.getData(), r = 0; r < t.length; r++) {
                var u = f[t[r]];
                u === undefined && (u = new i);
                u.shareRate[1]++;
                f[t[r]] = u
            }
            n.storage.set(f)
        };
        n.updateShareCount = function(t) {
            var i = n.storage.getData();
            i[t].shareRate[0]++;
            i[t].lastSharedDate = (new Date).getTime();
            n.storage.set(i)
        };
        var f = ShareToolsHelpers.getUrlReferrer();
        if (f != null) {
            var e = n.storage.getData();
            e[f].lastReferredDate = (new Date).getTime();
            n.storage.set(e)
        }
        return n
    }(), n
}

function BaseShareButton() {
    this.config = {};
    this.buttonElement = undefined
}
BaseShareButton.prototype.toString = function() {
    return this.config.data_type
};
BaseShareButton.prototype.toggleDisplay = function() {
    this.buttonElement.css("display") == "block" ? this.buttonElement.css("display", "none") : this.buttonElement.css("display", "block")
};
BaseShareButton.prototype.setWidth = function(n) {
    this.buttonElement && this.buttonElement.css("width", n)
};
BaseShareButton.prototype.addClass = function(n) {
    this.buttonElement && (this.buttonElement.hasClass(n) || this.buttonElement.addClass(n))
};

function formatShareText(n, t) {
    var i = 500;
    switch (t) {
        case "Facebook":
            i = 1e3;
            break;
        case "Whatsapp":
        case "Pintererst":
        case "Tumblr":
            i = 500;
            break;
        case "Twitter":
            i = 140
    }
    if (window.gameData && window.gameData.locale == "en-US") {
        var r = encodeURIComponent(n).substr(0, i - 3);
        if (r.length > i) {
            var u = r.lastIndexOf("%");
            r = encodeURIComponent(n).substr(0, u);
            n = decodeURIComponent(r)
        }
    }
    return n + (n.length >= i - 3 ? "..." : "")
}

function getShareObj() {
    return {
        shareBarElement: this.buttonElement.closest(".socialBar"),
        game_type: this.config.parentOptions.game_type,
        title: formatShareText(this.config.parentOptions.title, this.config.data_type),
        media: this.config.parentOptions.image,
        description: this.config.parentOptions.description,
        url: this.config.parentOptions.urlToShare,
        overridParentUrl: this.config.parentOptions.overridParentUrl,
        game_title: this.config.parentOptions.game_title,
        dont_send_event: !(window.shareUsingSdk == !0 && this.config.data_type == "Facebook" && !this.config.parentOptions.isComingFromApp)
    }
}

function getAnalyticsShareObj() {
    var n = {
        shareFinalResult: this.config.parentOptions.isShareResults ? !0 : !1,
        location: this.config.parentOptions.location
    };
    return this.config.parentOptions.isShareResults && this.config.parentOptions.finalResult != undefined && $.extend(n, {
        resultId: this.config.parentOptions.finalResult.id,
        resultText: this.config.parentOptions.finalResult.title
    }), n
}
BaseShareButton.prototype.init = function(n, t, i) {
    this.buttonElement = n;
    this.bootstrapButton(t, i)
};
$(document).ready(function() {
    window.isSwiping || (window.isSwiping = !1)
});
BaseShareButton.prototype.bootstrapButton = function(n, t) {
    this.config.wrapForApp && this.config.parentOptions.isComingFromApp && (window.android || this.buttonElement.find(".social_button").wrap('<a href="' + getAppShareParams({
        urlToShare: this.config.parentOptions.urlToShare
    }, this.config.data_type) + '" class="refresh_random_number"><\/a>'));
    $(document).on("touchcancel touchend", function(n) {
        if (window.newPoint = {
                y: n.originalEvent.changedTouches[0].screenY,
                x: n.originalEvent.changedTouches[0].screenX
            }, window.isSwiping == !0) {
            window.isSwiping = !1;
            return
        }
    });
    this.buttonElement.off().on(this.config.parentOptions.actionEventName, function() {
        var u = new Date;
        if (window.useSwipeShare != undefined && window.useSwipeShare == "true") {
            if (this.config.parentOptions.actionEventName == "touchend") {
                window.isSwiping || (this.config.data_type != "Facebook" || this.config.parentOptions.isComingFromApp || this.config.parentOptions.isFeed && (typeof displaySettings == "undefined" || displaySettings == null || !displaySettings.useFacebookUrlShare || displaySettings.useFacebookUrlShare.toLowerCase() == "false")) && Analytics.sendSocialEvent(this.config.data_type.toLowerCase(), this.config.parentOptions.urlToShare, null, getAnalyticsShareObj.apply(this));
                var n = undefined;
                if (this.shareFuncPerGame && (this.shareFuncPerGame[this.config.parentOptions.game_type] ? n = this.shareFuncPerGame[this.config.parentOptions.game_type].bind(this) : this.shareFuncPerGame[this.config.parentOptions.game_type + "_" + this.config.parentOptions.location] && (n = this.shareFuncPerGame[this.config.parentOptions.game_type + "_" + this.config.parentOptions.location].bind(this))), n = n || eval("PBSharer." + this.config.data_type + "." + this.config.parentOptions.shareFunc), this.config.parentOptions.game_type == "OpenList") {
                    var t = this.config.parentOptions.urlToShare;
                    t.indexOf("#") > 0 ? SC.parentUrl = Tools.isFeed() ? encodeURIComponent(t) : t : (SC.parentUrl = Tools.getURLParam("parentUrl") || t, Tools.isFeed() || (SC.parentUrl = Tools.cleanUrlParamsForShare(SC.parentUrl)))
                }
                if (this.config.parentOptions.isComingFromApp) this.config.wrapForApp && this.buttonElement.click(shareFromApp.apply(null, [this]));
                else {
                    var i = {};
                    $.extend(i, getShareObj.apply(this), getAnalyticsShareObj.apply(this));
                    this.config.data_type != "Facebook" || window.isSwiping || (i.dont_send_event = !1);
                    n(i)
                }
                var r = $.Event("shareClicked", {
                    data_type: this.config.data_type
                });
                $(this.config.container).trigger(r);
                window.ShareTools.userAdaptive.updateShareCount(this.config.data_type)
            }
            return
        }
        if (this.config.parentOptions.actionEventName == "touchend" && window.isSwiping) {
            window.isSwiping = !1;
            return
        }(this.config.data_type != "Facebook" || this.config.parentOptions.isComingFromApp || this.config.parentOptions.isFeed && (typeof displaySettings == "undefined" || displaySettings == null || !displaySettings.useFacebookUrlShare || displaySettings.useFacebookUrlShare.toLowerCase() == "false")) && Analytics.sendSocialEvent(this.config.data_type.toLowerCase(), this.config.parentOptions.urlToShare, null, getAnalyticsShareObj.apply(this));
        var n = undefined;
        if (this.shareFuncPerGame && (this.shareFuncPerGame[this.config.parentOptions.game_type] ? n = this.shareFuncPerGame[this.config.parentOptions.game_type].bind(this) : this.shareFuncPerGame[this.config.parentOptions.game_type + "_" + this.config.parentOptions.location] && (n = this.shareFuncPerGame[this.config.parentOptions.game_type + "_" + this.config.parentOptions.location].bind(this))), n = n || eval("PBSharer." + this.config.data_type + "." + this.config.parentOptions.shareFunc), this.config.parentOptions.game_type == "OpenList") {
            var t = this.config.parentOptions.urlToShare;
            t.indexOf("#") > 0 ? SC.parentUrl = Tools.isFeed() ? encodeURIComponent(t) : t : (SC.parentUrl = Tools.getURLParam("parentUrl") || t, Tools.isFeed() || (SC.parentUrl = Tools.cleanUrlParamsForShare(SC.parentUrl)))
        }
        if (this.config.parentOptions.isComingFromApp) this.config.wrapForApp && this.buttonElement.click(shareFromApp.apply(null, [this]));
        else {
            var i = {};
            $.extend(i, getShareObj.apply(this), getAnalyticsShareObj.apply(this));
            n(i)
        }
        var r = $.Event("shareClicked", {
            data_type: this.config.data_type
        });
        $(this.config.container).trigger(r);
        window.ShareTools.userAdaptive.updateShareCount(this.config.data_type)
    }.bind(this));
    $(document).on("touchmove", function(n) {
        window.newPoint = {
            y: n.originalEvent.changedTouches[0].screenY,
            x: n.originalEvent.changedTouches[0].screenX
        };
        window.isSwiping = !0
    });
    if (this.config.parentOptions.isMobile) this.buttonElement.on("touchstart", function(n) {
        window.touchPoint = {
            y: n.originalEvent.changedTouches[0].screenY,
            x: n.originalEvent.changedTouches[0].screenX
        };
        window.newPoint = null
    }.bind(this));
    typeof n == "function" && n(t)
};

function TwitterShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n, {
        share_button_text: $("<textarea/>").html(Localization.getResource("shareText5")).val(),
        share_long_txt: $("<textarea/>").html(Localization.getResource("shareText3")).val()
    })
}
TwitterShareButton.prototype = new BaseShareButton;
TwitterShareButton.prototype.constructor = TwitterShareButton;
TwitterShareButton.prototype.config = {
    icon: "twitter_button_icon",
    data_type: "Twitter",
    cssClass: "playbuzz_twitter_tweet_button",
    wrapForApp: !0
};

function FacebookShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n, {
        share_long_txt: $("<textarea/>").html(Localization.getResource("shareText2")).val()
    })
}
FacebookShareButton.prototype = new BaseShareButton;
FacebookShareButton.prototype.constructor = FacebookShareButton;
FacebookShareButton.prototype.config = {
    icon: "facebook_button_icon",
    data_type: "Facebook",
    cssClass: "playbuzz_facebook_share_button",
    wrapForApp: !0
};
FacebookShareButton.prototype.shareFuncPerGame = {
    OpenList_middle: function(n) {
        PBSharer.Facebook.shareFeed(n);
        Analytics.sendSocialEvent("facebook", n.url, null, n)
    },
    Swiper_middle: function(n) {
        PBSharer.Facebook.shareFeed(n);
        Analytics.sendSocialEvent("facebook", n.url, null, n)
    }
};

function TumblrShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n)
}
TumblrShareButton.prototype = new BaseShareButton;
TumblrShareButton.prototype.constructor = TumblrShareButton;
TumblrShareButton.prototype.config = {
    urlToShare: "",
    icon: "tumblr_button_icon",
    data_type: "Tumblr",
    cssClass: "playbuzz_tumblr_share_button",
    defaultGameImage: "",
    shareImage: ""
};

function PinterestShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n, {
        share_long_txt: $("<textarea/>").html(Localization.getResource("shareText6")).val()
    })
}
PinterestShareButton.prototype = new BaseShareButton;
PinterestShareButton.prototype.constructor = PinterestShareButton;
PinterestShareButton.prototype.config = {
    urlToShare: "",
    icon: "pinterest_button_icon",
    data_type: "Pinterest",
    cssClass: "playbuzz_pinterest_share_button",
    defaultGameImage: "",
    shareImage: ""
};
PinterestShareButton.prototype.shareFuncPerGame = {
    List: function(n) {
        $("img").not(".i_image").attr("data-pin-nopin", "true");
        $("img.i_image").attr("data-pin-url", document.location.protocol + decodeURIComponent(n.url).replace(/(http:|https:)/, ""));
        $("#pinmarklet").remove();
        var t = document.createElement("script");
        t.setAttribute("type", "text/javascript");
        t.setAttribute("charset", "UTF-8");
        t.setAttribute("id", "pinmarklet");
        t.setAttribute("src", "//assets.pinterest.com/js/pinmarklet.js?r=" + Math.random() * 99999999 + "&description=fsfs");
        document.body.appendChild(t);
        window.Analytics && n.dont_send_event != !0 && Analytics.sendSocialEvent("pinterest", decodeURIComponent(n.url), null)
    }
};

function WhatsappShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n)
}
WhatsappShareButton.prototype = new BaseShareButton;
WhatsappShareButton.prototype.constructor = WhatsappShareButton;
WhatsappShareButton.prototype.config = {
    urlToShare: "",
    icon: "whatsapp_button_icon",
    data_type: "Whatsapp",
    cssClass: "playbuzz_whatsapp_share_button"
};

function RedditShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n)
}
RedditShareButton.prototype = new BaseShareButton;
RedditShareButton.prototype.constructor = RedditShareButton;
RedditShareButton.prototype.config = {
    urlToShare: "",
    icon: "reddit_button_icon",
    data_type: "Reddit",
    cssClass: "playbuzz_reddit_share_button"
};

function GooglePlusShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n)
}
GooglePlusShareButton.prototype = new BaseShareButton;
GooglePlusShareButton.prototype.constructor = GooglePlusShareButton;
GooglePlusShareButton.prototype.config = {
    urlToShare: "",
    icon: "googlePlus_button_icon",
    data_type: "GooglePlus",
    cssClass: "playbuzz_googlePlus_share_button"
};

function VkontakteShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n, {
        share_button_text: $("<textarea/>").html(Localization.getResource("shareText7")).val(),
        share_long_txt: $("<textarea/>").html(Localization.getResource("shareText7")).val()
    })
}
VkontakteShareButton.prototype = new BaseShareButton;
VkontakteShareButton.prototype.constructor = VkontakteShareButton;
VkontakteShareButton.prototype.config = {
    urlToShare: "",
    icon: "vkontakte_button_icon",
    data_type: "Vkontakte",
    cssClass: "playbuzz_vkontakte_share_button",
    defaultGameImage: "",
    shareImage: ""
};

function EmailShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n, {
        share_button_text: $("<textarea/>").html(Localization.getResource("shareEmail")).val(),
        share_long_txt: $("<textarea/>").html(Localization.getResource("shareEmail")).val()
    })
}
EmailShareButton.prototype = new BaseShareButton;
EmailShareButton.prototype.constructor = EmailShareButton;
EmailShareButton.prototype.config = {
    urlToShare: "",
    icon: "email_button_icon",
    data_type: "Email",
    cssClass: "playbuzz_email_share_button",
    defaultGameImage: "",
    shareImage: "",
    share_button_text: "Email",
    share_long_txt: "Email"
};

function SmsShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n)
}
SmsShareButton.prototype = new BaseShareButton;
SmsShareButton.prototype.constructor = SmsShareButton;
SmsShareButton.prototype.config = {
    urlToShare: "",
    icon: "sms_button_icon",
    data_type: "Sms",
    cssClass: "playbuzz_sms_share_button",
    defaultGameImage: "",
    shareImage: "",
    share_button_text: "Sms",
    share_long_txt: "Sms"
};

function CopyShareButton(n) {
    this.config = $.extend({}, BaseShareButton.prototype.config, this.config, n, {
        share_button_text: $("<textarea/>").html(Localization.getResource("shareCopy")).val(),
        share_long_txt: $("<textarea/>").html(Localization.getResource("shareCopy")).val()
    })
}
CopyShareButton.prototype = new BaseShareButton;
CopyShareButton.prototype.constructor = CopyShareButton;
CopyShareButton.prototype.config = {
    urlToShare: "",
    icon: "copy_button_icon",
    data_type: "Copy",
    cssClass: "playbuzz_copy_share_button",
    defaultGameImage: "",
    shareImage: "",
    share_button_text: "Copy",
    share_long_txt: "Copy Link"
};
var buttonsDisplayPermissions = {
        Base: function(n, t) {
            return !t.parentOptions.isComingFromApp || t.wrapForApp
        },
        Whatsapp: function(n, t) {
            return ShareToolsHelpers.isMobileNotTablet && !t.parentOptions.isComingFromApp ? !0 : !1
        },
        Vkontakte: function(n, t) {
            return window.gameData && !t.parentOptions.isComingFromApp ? window.gameData.gameLocale.match(Tools.russianLocalesRegEx) !== null : !1
        },
        Copy: function() {
            return BrowserDetect.browser == "Safari" ? !1 : !0
        }
    },
    shareButtonFactory = function() {
        var n = {};
        return {
            registerShareButtonPlugin: function(t, i) {
                return n[t] || (n[t] = i), shareButtonFactory
            },
            createShareButton: function(t, i) {
                var r = n[t];
                return r ? new r(i) : null
            },
            shouldDisplayButton: function(t, i) {
                var r = n[t].prototype.config.wrapForApp;
                return (i.wrapForApp = r, buttonsDisplayPermissions.Base(t, i)) ? buttonsDisplayPermissions[t] ? buttonsDisplayPermissions[t](t, i) : !0 : !1
            }
        }
    }();
shareButtonFactory.registerShareButtonPlugin("Facebook", FacebookShareButton);
shareButtonFactory.registerShareButtonPlugin("Twitter", TwitterShareButton);
shareButtonFactory.registerShareButtonPlugin("GooglePlus", GooglePlusShareButton);
shareButtonFactory.registerShareButtonPlugin("Pinterest", PinterestShareButton);
shareButtonFactory.registerShareButtonPlugin("Reddit", RedditShareButton);
shareButtonFactory.registerShareButtonPlugin("Tumblr", TumblrShareButton);
shareButtonFactory.registerShareButtonPlugin("Whatsapp", WhatsappShareButton);
shareButtonFactory.registerShareButtonPlugin("Vkontakte", VkontakteShareButton);
shareButtonFactory.registerShareButtonPlugin("Email", EmailShareButton);
shareButtonFactory.registerShareButtonPlugin("Sms", SmsShareButton);
shareButtonFactory.registerShareButtonPlugin("Copy", CopyShareButton);
window.rndShareBar = null;
$(document).ready(function() {
    pageInit()
});

function pageInit() {
    try {} catch (n) {}
    if (window.documentReady = !0, window.shareBarLoaded == !0) window.getCleanUrl || ShareToolsHelpers.isComingFromApp != !0 || initMobileAppFuncs(), window.DSBloaded = !0, $(document).trigger("DSBloaded");
    else $(document).on("shareToolsLoaded", function() {
        window.getCleanUrl || ShareToolsHelpers.isComingFromApp != !0 || initMobileAppFuncs();
        window.DSBloaded = !0;
        $(document).trigger("DSBloaded")
    })
}
$(document).on("shareToolsLoaded", function() {
    window.shareBarLoaded = !0
});

function getFormatType() {
    return window.gameData && window.gameData.patternId ? window.gameData.patternId : null
}

function SelectShareBarVersion(n, t) {
    var r = n ? n : "v2",
        i = getFormatType();
    return i && i !== "PlayBuzzPoll" && i !== "SnapArticle" && i !== "undefined" && i !== "OpenList" && i !== "AbstractFormat" && i !== "Convo" || (r = "v1"), t.hasClass("swiper-result-share-bar") && (r = "v1"), t.hasClass("share_container") && (r = "v1"), r
}
var firstSharebarV2, secondSharebarV2;

function DynamicShareBar(n, t) {
    var r = SelectShareBarVersion(window.sharebarLoadingInfo ? window.sharebarLoadingInfo.sharebarVersion : "v2", n);
    if (r === "v2") PlayBuzz.ShareBarFactory.create(n).done(function(n) {
        firstSharebarV2 ? secondSharebarV2 = n : firstSharebarV2 = n
    });
    else try {
        if (Tools.shouldShowShares())
            if (n && n.length != 0)
                if (this.container = n, this.wrapper = undefined, this.myButtons = [], this.showingMoreButtons = !1, this.options = {
                        shareText: $("<textarea/>").html(Localization.getResource("share")).val(),
                        isComingFromApp: ShareToolsHelpers.isComingFromApp,
                        numVisible: 2,
                        numVisibleMobile: 2,
                        availableButtons: ShareToolsHelpers.DefaultAvailableButtons,
                        showMoreButton: !0,
                        isShareResults: !1,
                        shareFunc: "share",
                        overridParentUrl: !1
                    }, n.hasClass("swiper-result-share-bar") && (this.options.isShareResults = !0), window.shareBarLoaded == !0) this.init(t);
                else $(document).on("shareToolsLoaded", function() {
                    this.init(t)
                }.bind(this));
        else this.updateShareBarParams = function() {};
        else $(".social_bar_full_width").css("min-height", "0px"), this.updateShareBarParams = function() {}
    } catch (i) {
        console.log("speed-exception", i);
        console.log(i)
    }
}
DynamicShareBar.prototype.displayShowMoreButton = function() {
    return !this.options.isComingFromApp && this.options.showMoreButton && this.options.availableButtons.length > this.options.numVisible
};
DynamicShareBar.prototype.createButtonsParams = function() {
    return {
        container: this.container,
        parentOptions: this.options,
        share_long_txt: $("<textarea/>").html(Localization.getResource("shareText4")).val(),
        share_button_text: $("<textarea/>").html(Localization.getResource("shareText4")).val()
    }
};
DynamicShareBar.prototype.prepareUserAdaptive = function() {
    var n = [];
    window.userAdaptiveButtons ? (n = window.userAdaptiveButtons.buttons, this.options.numVisible = window.userAdaptiveButtons.numVisible) : (userAdaptiveObj = window.ShareTools.userAdaptive.getVisibleButtons(this.options.numVisible, this.options.availableButtons, !0), window.userAdaptiveButtons = userAdaptiveObj, n = userAdaptiveObj.buttons, this.options.numVisible = userAdaptiveObj.numVisible)
};
DynamicShareBar.prototype.init = function(n) {
    this.optionsFromServer = n != undefined && n.isShareResults ? window.ShareTools.createShareResultsBarParams() : window.ShareTools.createGameShareBarParams();
    $.extend(this.options, this.optionsFromServer, n);
    relocateWhatsappButtonForSpanish(this.options);
    rearrangeButtonsForAsian(this.options);
    ShareToolsHelpers.isFacebookApp && ShareToolsHelpers.isAndroid && removeButton(this.options.availableButtonsMobile, "Sms");
    ShareToolsHelpers.isMobileNotTablet && !this.options.isComingFromApp ? (this.options.numVisible = this.options.numVisibleMobile, this.options.availableButtons = this.options.availableButtonsMobile) : this.options.isComingFromApp && (this.options.numVisible = 2);
    this.options.userAdaptive && this.options.isComingFromApp == !1 && (this.prepareUserAdaptive(), this.options.availableButtons = window.userAdaptiveButtons.buttons);
    this.options.actionEventName = this.options.isMobile ? "touchend" : "click";
    this.options.urlToShare = this.options.urlToShare || (this.options.isFeed ? ShareToolsHelpers.getURLParam("parentUrl") : window.pbUrlToShare);
    this.options.title = this.options.title || gameData.gameNameForShare;
    this.options.image = this.options.image || $('meta[property="og:image"]').attr("content");
    this.options.game_title = this.options.title || gameData.gameName;
    this.options.description = this.options.description || gameData.gameDescription;
    this.buttonParams = this.createButtonsParams();
    for (var r = [], t = 0; t < this.options.availableButtons.length; t++) {
        var i = this.options.availableButtons[t];
        if (shareButtonFactory.shouldDisplayButton(i, this.buttonParams)) {
            var u = shareButtonFactory.createShareButton(i, this.buttonParams);
            this.myButtons.push(u);
            r.push(i)
        }
    }
    this.options.availableButtons = r;
    this.options.displayShowMoreButton = this.displayShowMoreButton();
    this.options.noFlexBox = function() {
        return window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version < 11 || $("body")[0].style.flex == undefined
    }();
    updateCssClasses.apply(this);
    var f = (new Date).getTime();
    this.initBar(this.initButtons.bind(this));
    var e = (new Date).getTime();
    window.updatedVisibleImpressions != !0 && (window.updatedVisibleImpressions = !0, window.ShareTools.userAdaptive.updateImpressionsCount(this.options.availableButtons.slice(0, this.options.numVisible)));
    fixWrapperWidth.apply(this);
    this.container.trigger("shareBarLoaded")
};

function removeButton(n, t) {
    var i = n.indexOf(t);
    i > -1 && n.splice(i, 1)
}

function bootstrapShareBar(n, t) {
    var r = new Date,
        i = getRendered(n, this),
        u = new Date,
        f = new Date;
    this.wrapper = $(i);
    this.container.append(this.wrapper);
    var e = new Date;
    typeof t == "function" && t()
}
DynamicShareBar.prototype.initBar = function(n) {
    var i = this,
        t = templates.buttonsTemplates;
    bootstrapShareBar.apply(this, [t, n])
};
DynamicShareBar.prototype.initButtons = function() {
    this.options.numVisible = Math.min(this.options.availableButtons.length, this.options.numVisible);
    var n = this.options.availableButtons.length - this.options.numVisible;
    n = n == 1 ? this.options.numVisible : n;
    window.shareBarLayout = "";
    for (var u = this.options.availableButtons, t = 0; t < u.length; t++) {
        var i = this.wrapper.find('.social_button_wrapper[data-type="' + u[t] + '"]');
        t < this.options.numVisible ? i.addClass("visableButton n" + this.options.numVisible) : i.addClass("hideButton n" + n);
        this.myButtons[t].init(i)
    }
    var r = this.container.attr("class");
    this.options.location = r ? r.indexOf("above") > -1 ? "top" : r.indexOf("social_bar_full_width") > -1 ? "bottom" : "middle" : "middle";
    window.shareBarLayout = this.myButtons.slice(0, this.options.numVisible).join(",") + (this.options.displayShowMoreButton ? "|more|" + this.myButtons.slice(this.options.numVisible, this.options.numVisible + n).join(",") : "");
    initMoreButton.apply(this)
};
DynamicShareBar.prototype.updateShareBarParams = function(n) {
    if (firstSharebarV2) {
        var t = jQuery.Event("share_bar_update");
        t.newOptions = n;
        $(document).trigger(t);
        firstSharebarV2.frameShareBarDivForResult()
    } else try {
        this.options.isShareResults == !1 && n.isShareResults && (toggleEmbedElement.apply(this), n.shareFunc = "shareResult");
        n.container && n.container != this.container && (this.container.detach(), this.container = n.container, this.wrapper.appendTo(this.container));
        $.extend(this.options, n);
        this.wrapper.removeClass(this.options.addedClasses);
        updateCssClasses.apply(this);
        this.wrapper.addClass(this.options.addedClasses)
    } catch (i) {
        console.log("speed-exception", i)
    }
};

function fixWrapperWidth() {
    if (this.wrapper) {
        var n = this.container.find(".embed_game_container");
        n.length == 0 && this.wrapper.css("width", "100%")
    }
}

function toggleEmbedElement() {
    var n = this.container.find(".embed_game_container");
    n.length > 0 && (n.css("display") == "block" ? n.css("display", "none") : n.css("display", "block"));
    fixWrapperWidth.apply(this)
}

function updateCssClasses() {
    var n = ShareToolsHelpers.isMobileNotTablet;
    this.options.addedClasses = [n && !Tools.isIpadFBWebView ? "mobile" : "desktop", !this.options.isComingFromApp && n && !Tools.isIpadFBWebView ? "mobile_not_from_app" : "app", this.options.isFeed ? "feed_social_bar" : "", this.options.isIphone && !Tools.isIpadFBWebView ? "iphoneClass" : "", this.options.isShareResults ? "shareResults" : "", this.options.displayShowMoreButton ? "showMoreButton" : "", this.options.noFlexBox ? "no_flexbox_container" : "", window.gameData ? window.gameData.gameLocale : "", this.options.addedClasses ? this.options.addedClasses : ""].join(" ");
    setCssAccordingToNumOfButtons(this.options);
    typeof this.options.display != "undefined" && this.container != undefined && this.container.css("display", this.options.display)
}

function setCssAccordingToNumOfButtons(n) {
    n.numVisible == 2 ? n.addedClasses = n.addedClasses.replace(/fb[\w]+\b/, "fb50_50") : n.numVisible == 3 && (n.addedClasses = n.addedClasses.replace(/fb[\w]+\b/, "fb33_33_33"))
}

function initMoreButton() {
    this.options.showMoreButton && (this.moreButton = new BaseShareButton, this.moreButton.buttonElement = this.wrapper.find(".more_share_wrapper"), this.moreButton.buttonElement.click(this.toggleMoreButtons.bind(this)))
}

function getRendered(n, t) {
    try {
        var i;
        if (typeof sessionStorage != "undefined" && window.gameData) {
            var r = JSON.stringify(t.options, removeGameSpecificProps);
            i = window.sessionStorage["template_" + r + "_" + gameData.gameLocale];
            i || (i = n.render(t), window.sessionStorage["template_" + r + "_" + gameData.gameLocale] = i)
        } else i = n.render(t)
    } catch (u) {
        console.log("speed-exception", u);
        var i = n.render(t)
    }
    return i
}

function removeGameSpecificProps(n, t) {
    switch (n) {
        case "game_title":
        case "description":
        case "image":
        case "title":
        case "html":
        case "urlToShare":
            return undefined;
        default:
            return t
    }
}
DynamicShareBar.prototype.toggleMoreButtons = function() {
    window.Analytics && !this.showingMoreButtons && Analytics.sendMoreSocialEvent(this.options.urlToShare, null, {
        shareFinalResult: this.options.isShareResults,
        location: this.options.location
    });
    $.each(this.myButtons, function(n, t) {
        t.toggleDisplay()
    });
    $(document).trigger("updateBackgroundImgPolly");
    this.showingMoreButtons = !this.showingMoreButtons;
    this.showingMoreButtons ? this.container.trigger("showHiddenButtons") : this.container.trigger("hideHiddenButtons");
    this.showingMoreButtons && window.updatedHiddenImpressions != !0 ? (window.updatedHiddenImpressions = !0, window.ShareTools.userAdaptive.updateImpressionsCount(this.options.availableButtons.slice(this.options.numVisible))) : window.updatedVisibleImpressions != !0 && (window.updatedVisibleImpressions = !0, window.ShareTools.userAdaptive.updateImpressionsCount(this.options.availableButtons.slice(0, this.options.numVisible)))
};

function initMobileAppFuncs() {
    if (ShareToolsHelpers.isComingFromApp) {
        window.getCleanUrl = function() {
            var n = document.location.toString();
            return n.split("#")[0]
        };

        function n(n, t, i) {
            while (i.indexOf(n) >= 0) i = i.replace(n, t);
            return i
        }
        window.jsonify = function(t) {
            return t = n("{", "=l=", t), t = n('"', "=q=", t), t = n("}", "=r=", t), t = n("-", "=d=", t), t = n("[", "=L=", t), n("]", "=R=", t)
        };
        window.dejsonify = function(t) {
            return t = n("=l=", "{", t), t = n("=r=", "}", t), t = n("=q=", '"', t), t = n("=d=", "-", t), t = n("=L=", "[", t), n("=R=", "]", t)
        };
        window.getAppShareParams = function(n, t) {
            var r = Math.random(),
                i = getCleanUrl();
            switch (t) {
                case "Facebook":
                    i += "#fbshare";
                    break;
                case "Twitter":
                    i += "#twittershare"
            }
            var u = "=l==q=link=q=:=q=" + document.location.protocol + n.urlToShare + "=q=,=q=rnd=q=:=q=" + r + "=q==r=";
            return i + u
        };
        window.getAppShareJson = function(n, t) {
            var i = {};
            return i.rnd = Math.random().toFixed(3), i.link = t || document.location.toString().split("?")[0], i.link = i.link.indexOf("http") == -1 ? "http:" + i.link : i.link, i.gameName = n.config.data_type == "Facebook" ? gameData.gameNameForShare || n.config.parentOptions.title : n.config.parentOptions.title, i.gameDescription = n.config.data_type == "Facebook" ? gameData.gameDescription || n.config.parentOptions.description : n.config.parentOptions.description, i.gameImage = n.config.data_type == "Facebook" ? gameData.gameImg || n.config.parentOptions.image : n.config.parentOptions.image, i
        };
        window.shareFromApp = function(n) {
            if (window.android) {
                var e = getAppShareJson(n, n.config.parentOptions.urlToShare);
                window.android.shareToService(n.config.data_type.toLowerCase(), JSON.stringify(e))
            } else {
                var r = n.buttonElement.find("a").attr("href"),
                    t = "",
                    u = r.indexOf("#fbshare"),
                    f = r.indexOf("#twittershare");
                if (u >= 0 && f >= 0 ? t = u < f ? "#fbshare" : "#twittershare" : (u >= 0 && (t = "#fbshare"), f >= 0 && (t = "#twittershare")), t == "") return;
                var o = r.split(t)[0],
                    i = JSON.parse(dejsonify(r.split(t).pop()));
                i.rnd = Math.random().toFixed(3);
                i.gameName = t == "#fbshare" ? gameData.gameNameForShare || n.config.parentOptions.title : n.config.parentOptions.title;
                i.gameDescription = gameData.gameDescription || n.config.parentOptions.description;
                i.gameImage = gameData.gameImg || n.config.parentOptions.image;
                var s = o + t + jsonify(JSON.stringify(i));
                n.buttonElement.find("a").attr("href", s)
            }
        }
    }
}

function rearrangeButtonsForAsian(n) {
    if (Tools.isMobileNotTablet && ShareToolsHelpers.isAsianGame(window.gameData)) {
        var t = n.availableButtonsMobile,
            i = t.indexOf("Facebook"),
            r = t.indexOf("Twitter");
        i > -1 && i != 0 && (t.splice(i, 1), t.splice(1, 0, "Facebook"));
        r > -1 && r != 1 && (t.splice(r, 1), t.splice(1, 0, "Twitter"));
        n.availableButtonsMobile = t;
        n.numVisibleMobile = 2
    }
}

function relocateWhatsappButtonForSpanish(n) {
    if (Tools.isMobileNotTablet && window.gameData && window.gameData.gameLocale == "es-ES") {
        var t = n.availableButtonsMobile,
            i = t.indexOf("Whatsapp");
        i > 0 && (t.splice(i, 1), t.splice(3, 0, "Whatsapp"));
        n.availableButtonsMobile = t;
        n.numVisibleMobile = 3
    }
    return n
}

function randomizeShareBar() {
    if (!Tools.isComingFromApp && !Tools.isFeed() && window.gameData && window.gameData.gameLocale.indexOf("en") > -1 && window.rndShareBar == null) {
        var r = Math.floor(Math.random() * 100),
            n = Tools.isMobileNotTablet ? shareBarVariations.mobileVars : shareBarVariations.desktopVars,
            t;
        for (var i in n)
            if (i <= r) t = i;
            else break;
        window.rndShareBar = n[t]
    }
    return window.rndShareBar
}
var PlayBuzz = PlayBuzz || {};
PlayBuzz.ShareBar = function(n) {
    function t(n) {
        r(n);
        $(n).addClass("new-share-bar")
    }

    function i(n) {
        var t = n.attr("class");
        return t ? t.indexOf("above") > -1 ? "top" : t.indexOf("social_bar_full_width") > -1 ? "bottom" : "middle" : "middle"
    }

    function r(n) {
        var t = {};
        t.location = i(n);
        n.prepend($('<div share-bar-directive class="share-bar-containder"><\/div>'));
        angular.element(document).ready(function() {
            angular.module("shareBarModule", ["pb.share-bar"]).config(["$locationProvider", function(n) {
                window.gameData && (window.gameData.patternId === "multipleChoice" || window.gameData.patternId === "TestYourself") && n.html5Mode({
                    enabled: !0,
                    requireBase: !1
                })
            }]).directive("shareBarDirective", u).controller("shareBarController", ["$scope", "$document", "pbShareBarService", "abTestService", "shareBarParams", "pbShareBarEventNames", function(n, t, i, r, u, f) {
                var e = this;
                e.sharebar = {
                    buttons: [],
                    num: 0
                };
                var h = o();
                e.text = h.itemDetails.text;
                e.url = h.itemDetails.url;
                e.media = h.itemDetails.media;
                e.description = h.itemDetails.description;
                e.isEmbedItem = h.itemDetails.isEmbedItem;
                var c;
                window.sharebarLoadingInfo && window.sharebarLoadingInfo.sharebarConfig ? (c = window.sharebarLoadingInfo.sharebarConfig, e.via = window.sharebarLoadingInfo.twitterViaText) : c = r.getRules();
                s(c);
                var l = i.getShareBarViewConfig(h, c);
                e.sharebar.buttons = l.buttons;
                e.sharebar.num = l.num;
                n.$on(f.ACTION.CLICKED, function(n, t) {
                    Analytics.sendSocialEvent(t.provider, t.sharedUrl, null, u);
                    pbMonetizationBridge.SocialShare()
                });
                t.bind("share_bar_update", function(n) {
                    a(n.newOptions)
                });

                function a(t) {
                    n.$apply(function() {
                        e.text = t.title;
                        e.media = t.image
                    })
                }
            }]).constant("shareBarParams", t);
            angular.bootstrap(n[0], ["shareBarModule"])
        })
    }

    function u() {
        return {
            restrict: "A",
            scope: {},
            controller: "shareBarController",
            controllerAs: "vm",
            bindToController: !0,
            template: '<div ng-if="vm.sharebar.buttons "pb-share-bar sorted-available-buttons-list="vm.sharebar.buttons" num-of-main-buttons="vm.sharebar.num" text="{{vm.text}}" media="{{vm.media}}" url="{{vm.url}}" description="{{vm.description}}" via="{{vm.via}}"is-embed="vm.isEmbedItem" > <\/div>'
        }
    }

    function f(t) {
        if (t) {
            var i = n.getURLParam("socialUrl");
            return i ? i : decodeURIComponent(n.getURLParam("parentUrl"))
        }
        return n.cleanUrlParamsForShare(window.location.href)
    }

    function e(n) {
        var i = n && n.patternData && n.patternData.gameShareImage,
            r = i && i.originalImageURL,
            t = i && i.croppedImageURL;
        if (t && t.indexOf("http") > -1) return t;
        if (r && t) {
            var u = r.lastIndexOf("/") + 1,
                f = u > 0 && u <= r.length;
            if (f) return r.substr(0, u) + t
        }
        return n && n.gameImg
    }

    function o() {
        var t;
        window.gameData && (t = window.gameData);
        var i = n.getURLParam("feed") === "true",
            r = {
                url: f(i),
                text: t ? t.gameNameForShare : null,
                description: t ? t.gameDescription : null,
                media: e(gameData),
                isEmbedItem: i
            };
        return {
            format: t ? t.patternId : null,
            locale: t ? t.locale : null,
            itemDetails: r
        }
    }

    function s(n) {
        window.shareBarLayout = n != null ? n.rulesSetName : "default,default"
    }
    return t.prototype.frameShareBarDivForResult = function() {
        window.gameData.patternId == "Gallery" ? $(".social_bar_full_width").addClass("share-result-container") : $(".social_bar_full_width").addClass("share-result-container background");
        var n = Localization.getResource("share");
        $(".social_bar_full_width").prepend('<div class="share-result-header">' + n + "<\/div>");
        $("#discussion").css({
            "padding-top": "0px"
        });
        $(".final_result_social_wrapper").remove();
        $(".noImage .final_result_social_wrapper").remove()
    }, {
        ctor: t
    }
}(Tools);
var PlayBuzz = PlayBuzz || {};
PlayBuzz.ShareBarFactory = function(n, t, i) {
    if (!t) {
        console.error("Sharebar must be loaded before its factory");
        return
    }
    if (i) {
        var r = {
                NOT_LOADED: "not-loaded",
                LOADING: "loading",
                LOADED: "loaded"
            },
            u = r.NOT_LOADED,
            f = [],
            e = i.sharebarWithAngularJs,
            h = i.sharebarNonAngularJs,
            c = i.sharebarCss;

        function l(n) {
            var i = $.Deferred(),
                r = window.location.hostname.indexOf("localhost.playbuzz") !== -1;
            return r ? y().fail(function() {
                s(n, i)
            }).done(function() {
                window.angular && i.resolve(new t.ctor(n));
                v().done(function() {
                    i.resolve(new t.ctor(n))
                }).fail(function() {
                    console.error("Failed to load angular from: " + window.sharebarJs, {
                        error: exception
                    });
                    i.reject(exception)
                })
            }) : s(n, i), i.promise()
        }

        function a(n, t) {
            f.push({
                elementToInit: n,
                deffered: t
            })
        }

        function o() {
            if (u !== r.LOADED) {
                console.error("Precondition failure: cannot handle resources before its loaded");
                return
            }
            while (f.length) {
                var n = f.pop(),
                    i = new t.ctor(n.elementToInit);
                n.deffered.resolve(i)
            }
        }

        function v() {
            return $.getScript("https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.4.7/angular-resource.min.js")
        }

        function s(t, i) {
            if (a(t, i), u !== r.LOADING) {
                if (u === r.LOADED) {
                    o();
                    return
                }
                u = r.LOADING;
                n.register(n.loadEvents.DOM_READY, function() {
                    p(c);
                    var n = window.angular ? h : e;
                    $.getScript(n).done(function() {
                        u = r.LOADED;
                        o()
                    }).fail(function(n, t, i) {
                        console.error("Failed to load scripts from: " + e, {
                            error: i
                        })
                    })
                }, !0)
            }
        }

        function y() {
            return $.get("https://localmodules.playbuzz.com:3012/share-bar.json")
        }

        function p(n) {
            var t = $("<link>");
            $("head").append(t);
            t.attr({
                rel: "stylesheet",
                type: "text/css",
                href: n
            })
        }
        return {
            create: l
        }
    }
}(PlayBuzz.Events, PlayBuzz.ShareBar, window.sharebarLoadingInfo ? window.sharebarLoadingInfo.scripts : undefined);
var SizeHandler = function() {
        var n = 1,
            t = 640,
            i = t,
            u = !0,
            f = !1,
            s = function() {
                var n = !1;
                try {
                    n = Tools.getURLParam("feed") == "true";
                    i = $(window).innerWidth();
                    n && Tools.getURLParam("height") != "auto" && (t -= 17, i -= 17)
                } catch (r) {
                    console.log("speed-exception", r)
                }
                return n
            }();

        function e() {
            if (!Tools.isMobile) {
                if (f = !1, !u) {
                    f = !0;
                    return
                }
                u = !1;
                var o = $(window).innerWidth();
                n = o < t ? o / t : 1;
                s && ($("#scorebar_container").css("width", i), $(".moreGames li").each(function() {
                    var t = Math.round(295 * n),
                        i = Math.round(125 * n),
                        u = Math.round(167 * n),
                        f = Math.round(4 * n);
                    $(this).css("margin-right", Math.round(parseInt($(this).css("margin-right")) * n));
                    $(this).css("margin-bottom", Math.round(parseInt($(this).css("margin-bottom")) * n));
                    $(this).css("margin-top", Math.round(parseInt($(this).css("margin-top")) * n));
                    $(this).find(".list_banner_image_badge").css("display", "none");
                    $(this).css("width", t);
                    $(this).css("height", u * 1.1);
                    $(this).find(".list_banner_text_container").css("padding-top", f);
                    $(this).find(".list_banner_image").css("height", i);
                    $(this).find("img").css({
                        width: t,
                        height: i
                    });
                    $(this).find(".list_banner_text").css({
                        "font-size": Math.max(Math.round($(this).css("font-size") * n * 1.1), 11),
                        "padding-left": r,
                        "padding-top": r
                    })
                }));
                var e = $("#gameImage"),
                    h = e.css("display") == "none" ? 0 : e.width() + parseInt(e.css("margin-right")) + parseInt(e.css("margin-left"));
                $(".single_question_container").css("margin-bottom", r),
                    function() {
                        var n = $(".fb-comments").width()
                    }();
                setTimeout(function() {
                    $(document).trigger("resizeCompleted")
                }, 10)
            }
        }
        $(window).resize(e);
        window.onload = e;

        function r(t, i) {
            return i.indexOf("%") >= 0 ? i : (i = parseInt(i), Math.round(i * n))
        }
        var o = {};
        return o.maxImageWidth = t, o
    }(),
    SlidingLabel = function() {
        var n = {};
        return n.addFunctionality = function(n, t) {
            var i = $(n),
                u = $(t),
                r = !0;
            i.click(function() {
                if ($(this).parent().hasClass("animated_gif")) return !1;
                if (r) {
                    r = !1;
                    var n = parseInt(i.css("width")),
                        t = parseInt(i.css("height"));
                    i.animate({
                        left: -n
                    });
                    u.animate({
                        opacity: 1
                    });
                    i.css("height", t);
                    i.css("width", n)
                } else r = !0, i.animate({
                    left: 0
                }), u.animate({
                    opacity: 0
                })
            })
        }, n
    }(),
    Slide = function(n, t) {
        var i = $(n),
            p = i.find(".question_assets "),
            e = [],
            a = {},
            o = $.Event("slideLoaded"),
            s = !1,
            h = null,
            c = null,
            v = !0,
            u, r, f = null,
            l = {};
        i.css({
            opacity: "0",
            display: "none"
        });
        try {
            window.pbads && window.pbads.loaded && $("#testyourself-inquestion").css({
                opacity: "0"
            })
        } catch (w) {
            console.log("speed-exception", w)
        }(function() {
            for (var n = 0; n < t.answers.length; n++) e.push(t.answers[n]), a[t.answers[n].id] = t.answers[n];
            i.find(".selectable_answer").each(function() {
                $(this).click(function(n) {
                    if (n.preventDefault(), !s && !v) {
                        s = !0;
                        $(this).addClass("active_answer");
                        var t = $(this).attr("id");
                        h = a[t].results;
                        c = t;
                        setTimeout(function() {
                            y()
                        }, 500)
                    }
                })
            })
        })();
        SlidingLabel.addFunctionality(i.find(".question_freetext"), i.find(".return_free_text_button"));
        this.reoderHeight = function() {
            setTimeout(function() {
                e.length >= 5 && $(i.find(".wrapper_w_images").get(3)).css("padding-left", 0)
            }, 10)
        };
        this.show = function() {
            if (s = !1, window.PlayBuzzSlideToRender = this, o.slideId = t.id, $(document).trigger(o), r) {
                var f = $("#q_video_" + t.id).find(".embed-container");
                f.append(r)
            }
            if (t.video && !u) {
                var n = i.find(".media_inner").find("iframe").attr("id"),
                    h = !1;
                try {
                    u = new YT.Player(n)
                } catch (c) {
                    console.log("speed-exception", c);
                    h = !0
                }
                r = r || $("#" + n)
            }
            if (isMobile) {
                i.css({
                    opacity: "1",
                    display: "block"
                });
                try {
                    window.pbads && window.pbads.loaded && $("#testyourself-inquestion").css({
                        opacity: "1",
                        display: "block"
                    })
                } catch (l) {
                    console.log("speed-exception", l)
                }
            } else i.css("display", "block").animate({
                opacity: 1
            }, function() {
                try {
                    window.pbads && window.pbads.loaded && $("#testyourself-inquestion").css({
                        opacity: "1",
                        display: "block"
                    })
                } catch (n) {
                    console.log("speed-exception", n)
                }
            });
            k();
            setTimeout(function() {
                e.length >= 5 && $(i.find(".wrapper_w_images").get(3)).css("padding-left", 0)
            }, 10);
            setTimeout(function() {
                v = !1
            }, 600);
            i.find("#q_video_b9fa8478-51ca-48b1-b3b1-bb648f96d78e").find("iframe").attr({
                width: SizeHandler.maxImageWidth,
                height: function() {
                    var n = SizeHandler.maxImageWidth / 640;
                    return n >= 1 ? 480 : 480 * n
                }()
            });
            d(p)
        };

        function y(n) {
            u && u.stopVideo && u.stopVideo();
            try {
                window.pbads && window.pbads.loaded && $("#testyourself-inquestion").css({
                    opacity: "0"
                })
            } catch (e) {
                console.log("speed-exception", e)
            }
            if (isMobile)
                if (i.css("display", "none"), r && r.remove(), $(".selectable_answer").removeClass("active_answer"), n) n();
                else {
                    var f = $.Event("questionHidden");
                    f.id = t.id;
                    f.results = h;
                    f.answerId = c;
                    $(document).trigger(f)
                }
            else i.animate({
                opacity: 0
            }, function() {
                if (r && r.remove(), n) n();
                else {
                    var u = $.Event("questionHidden");
                    u.id = t.id;
                    u.results = h;
                    u.answerId = c;
                    $(document).trigger(u)
                }
                i.css("display", "none");
                $(".selectable_answer").removeClass("active_answer")
            })
        }
        this.hide = y;
        try {
            (Tools.isIpad || Tools.isMobile && !Tools.isMobileNotTablet) && Tools.setupElementScrollBehavior(i.find(".question_assets_container"), o)
        } catch (b) {
            console.log("speed-exception", b)
        }

        function k() {
            if (Tools.getURLParam("noScroll") !== "true") {
                var u = $(document).scrollTop(),
                    n = $(".game_left_col").offset().top,
                    i = window.gameData && window.gameData.isBranded;
                if (u > n || i) {
                    if (i && window.Tools && window.Tools && window.Tools.isFeed() === !1) {
                        var r = $(document).height() - $(window).height() - 1e3;
                        r < 0 && $("#streach-min-height").height(Math.abs(r))
                    }
                    $("html, body").animate({
                        scrollTop: n
                    }, 300)
                }
                var t = jQuery.Event("scrollParent");
                t.offsetY = n;
                t.scrollToPosition = n;
                $(document).trigger(t)
            }
        }

        function d(n) {
            var t = n.find(".question_media_container").hasClass("media_container_text_only");
            t && g(n)
        }

        function g(n) {
            var r = $(n).parents(".single_question_container").attr("id"),
                t, i = n.find(".media_container_text_only").find(".question_freetext");
            l[r] ? t = l[r] : function() {
                var o = n.find(".media_container_text_only"),
                    e = 300,
                    s = o.height(),
                    u = i.text().split(" ").length,
                    h = parseInt(i.css("font-size"));
                n.css("max-height", e);
                f === null && (f = h);
                u <= 6 ? t = f : u <= 18 ? t = 30 : u <= 26 ? (t = 24, i.addClass("free_text_long")) : u <= 30 ? (t = 20, i.addClass("free_text_long")) : t = Math.floor(f * (e / s));
                l[r] = t
            }();
            i.css("font-size", t)
        }
    };
(function startQuiz() {
    if (!window.gameData || !window.Tools) {
        setTimeout(startQuiz, 100);
        return
    }
    window.onAmazonResultClicks = function(n, t, i) {
        var r = window.gameData && gameData.gameNameForShare;
        window.ga && ga("send", "event", r + " â€“ results", n, t);
        i && window.open(i)
    };
    window.TestYourself = function() {
        var rt = navigator.userAgent.toLocaleLowerCase().indexOf("ipad") > 0 || navigator.userAgent.toLocaleLowerCase().indexOf("android") > 0 && navigator.userAgent.toLocaleLowerCase().indexOf("mobile") > 0;
        rt && $(".play_main_container").removeClass("isHover");
        var r = [],
            e, o = [],
            f = {},
            i = 0,
            b = 640,
            k = [],
            u = !1,
            d, ut, wt = $(".question_boxes_inner").css("margin-left"),
            a = $(".question_box"),
            g = parseInt(a.css("width")) + parseInt(a.css("margin-right")) + parseInt(a.css("margin-left")),
            s = this,
            c = $(".score_arrow_right"),
            l = $(".score_arrow_left"),
            nt = $(".game_title").text(),
            n, ft = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1;
        if (!window.isMobile) {
            window.isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
            window.isMobile = window.isMobile || /^(mozilla\/5\.0\s\((android;|linux;)\su;\sandroid\s2\.1;\sen-us;\)\sapplewebkit\/525\.10\+{0,1}\s\(khtml,\slike\sgecko\))|(mozilla\/5\.0\s\(windows\snt\s6\.2;\sarm;\strident\/7\.0;\stouch;\srv:11\.0;\swpdesktop;\s(nokia;\s){0,1}lumia\s(1){0,1}\d{3}\)\slike\sgecko)$/i.test(navigator.userAgent)
        }
        var v = {
            answeredFirst: !1,
            "25%": !1,
            "50%": !1,
            "75%": !1,
            completed: !1
        };
        try {
            window.pbads && window.pbads.loaded && (window.srAsyncInit = function() {
                pbads.formats.testyourself.preload()
            })
        } catch (bt) {}
        $("body").append('<div id="streach-min-height"><\/div>');
        var tt = !1,
            h;
        document.location.toString().indexOf("previewGame") == -1 && $(document).ready(function() {
            var n = function() {
                h = Tools.isMobileNotTablet ? new DynamicShareBar($("#app_container .social_bar_full_width")) : new DynamicShareBar($(".multiple_items_display .social_bar_full_width"))
            };
            if (window.DSBloaded && window.shareBarLoaded && h == null) n();
            else $(document).on("DSBloaded shareToolsLoaded", function() {
                window.DSBloaded && window.shareBarLoaded && h == null && n()
            })
        });
        if (window.isFeed) $(document).on("iframeScroll", function(n) {
            t(n)
        });
        else AwsBridge.articleIn();
        this.resize = function() {
            var n = $(".game_left_col").width();
            n > 640 && (n = 640);
            ut = n - $(".progress_bar_arrows").width() - 2;
            s.checkArrows()
        };
        this.checkArrows = function() {
            var n = $(".question_boxes_inner").width() - $(".question_boxes_wrapper").width(),
                t = parseInt($(".question_boxes_inner").css("margin-left"));
            n > 0 ? (n + t >= 0 ? c.css("visibility", "visible") : c.css("visibility", "hidden"), t < 0 ? l.css("visibility", "visible") : l.css("visibility", "hidden")) : (c.css("visibility", "hidden"), l.css("visibility", "hidden"))
        };
        l.click(function() {
            u || (u = !0, $(".question_boxes_inner").animate({
                marginLeft: "+=" + g
            }, 400, function() {
                u = !1;
                s.checkArrows()
            }))
        });
        c.click(function() {
            u || (u = !0, $(".question_boxes_inner").animate({
                marginLeft: "-=" + g
            }, 400, function() {
                u = !1;
                s.checkArrows()
            }))
        });

        function y() {
            $(document).trigger("Game.End.Screen");
            var f = null,
                o = n.title,
                i = "";
            if (n.text ? i = n.text : ($(".result_bottom_section").addClass("noResultText"), i = $(".game_description_inner").text()), n.image) {
                f = Comm.APIs.baseImageUrl + gameData.gameId + "/" + n.image.croppedImageURL;
                var s = "";
                if (n.image.type == "img") {
                    var ut = SizeHandler.maxImageWidth,
                        c = SizeHandler.maxImageWidth / 640,
                        ft = c >= 1 ? 480 : 480 * c,
                        r = "//www.youtube.com/embed/" + n.image.clipID;
                    r += "?wmode=opaque&fs=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&autoplay=1";
                    r += "&start=" + Math.round(n.image.start) + "&end=" + Math.round(n.image.end);
                    r += "&origin=" + document.location.protocol + "//" + document.location.host;
                    var l = Math.min(Math.round(window.innerWidth * .95), 640),
                        p = Math.round(l / 640 * 480),
                        w = $("<div><\/div>").addClass("embed-container").appendTo("#result_image_wrapper"),
                        et = $("<iframe id='resultVideo' frameborder='0' width='" + l + "' height='" + p + "' src='" + r + "'><\/iframe>").appendTo(w)
                } else {
                    if (Tools.isMobileNotTablet && n.image.isAnimated) MobileGifHandler.setupImage($("#result_image_wrapper"), f);
                    else var u = "";
                    if (!n.title || (u = Tools.replaceAll(n.title, '"', "&quot;"), u = Tools.replaceAll(n.title, "'", "&#39;"), u = n.title.replace('"', "&quot;").replace("'", "&#39;")), $("#result_image_wrapper").empty().append("<img src=" + f + ' class="result_image" itemprop="image" width="100%" alt=' + u + " />"), n.image.credentials && n.image.credentials.value) {
                        var e = $("<div>");
                        if (Tools.isUrl(n.image.credentials.value)) {
                            var a = Tools.parseURL(n.image.credentials.value);
                            e.attr({
                                "class": "imageCredentials",
                                title: a.source
                            }).html(a.host)
                        } else e.attr({
                            "class": "imageCredentials",
                            title: n.image.credentials.value
                        }).html(n.image.credentials.value);
                        $("#result_image_wrapper").append(e)
                    }
                    s != "" && $("#result_image_wrapper").append(s)
                }
            }
            $container = $("#result_screen_container").css("opacity", 0);
            n.title === "null" && (n.title = "");
            $("#result_details").html(n.html);
            var t = Tools.loadExternalScriptAndRenderHTML(n.text);
            if (t = Tools.linkify(t != null ? t : "", "result"), t) {
                var v = 100;
                try {
                    while (t.search("\n") >= 0 && v > 0) v--, t = t.replace("\n", "<br />")
                } catch (b) {
                    console.log("speed-exception", b);
                    t = n.text
                }
            }(window.gameData.gameId == "0ceb68fd-049d-4782-92ba-28c68419a4b8" || window.gameData.gameId == "93957214-16b4-4610-92b8-f8d13f596648" || window.gameData.gameId == "2f31d392-d7bc-4b1a-ba4a-ce46e9b6075d") && (t = t.replace(/&(lt|gt|quot);/g, function(n, t) {
                switch (t) {
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return "'"
                }
            }));
            $container.find(".result_text_wrapper").html(t);
            try {
                window.HTT.renderHTTsToPQ()
            } catch (b) {
                console.log("failed to render HTT from result text")
            }
            try {
                i = i.replace(/{{#(.+?)}}/g, "");
                n.text = n.text.replace(/{{#(.+?)}}/g, "")
            } catch (st) {
                console.log("failed to removed HTT from result text")
            }
            if (window.gameData.isBranded && n.cta && n.cta.ctaDisplay) {
                var y = $container.find(".result_text_wrapper");
                n.cta.position == "top" ? y.prepend("<div id='ctabtnresult'><\/div>") : y.append("<div id='ctabtnresult'><\/div>");
                var k = new Cta("ctabtnresult"),
                    d = {
                        data: n.cta,
                        redirectCallback: window.ctaUtils.redirect
                    };
                k.setup(d)
            }
            $container.css("display", "block");
            var g = it(),
                tt = Localization.getResource("I_got") + o + "! " + nt.trim();
            if (document.location.toString().indexOf("previewGame") == -1) {
                var rt = {
                    title: tt,
                    description: i,
                    image: g,
                    isShareResults: !0,
                    finalResult: n
                };
                prepareResultsShareBar(h, rt)
            }
            if (ot(o, i), isMobile ? $container.css("opacity", "1") : $container.css("opacity", "1"), isMobile) $container.find(".play_again_button").on("touchstart", function() {
                $(this).addClass("active_button")
            });
            $(document).trigger("articleCompleted")
        }

        function et() {
            $(document).trigger("item_complete", {});
            try {
                if (window.pbads && window.pbads.loaded) {
                    var n = pbads.formats.testyourself.postroll();
                    if (typeof n != "undefined" && n.state() == "pending") {
                        $.when(n).then(function() {
                            $(".progress_bar_wrapper").css("display", "none");
                            $("#test_yourself_game").css("display", "none");
                            y()
                        });
                        return
                    }
                }
            } catch (t) {
                console.log("speed-exception", t)
            }
            if ($("#test_yourself_game").css("display", "none"), isMobile ? $(".calculating_wrapper").css({
                    opacity: "1",
                    display: "block"
                }) : $(".calculating_wrapper").css("display", "block").animate({
                    opacity: 1
                }), window.shouldShowPreroll = !1, window.shouldShowPreroll) {
                $(".calculating_inner").css("display", "block");
                var i = setTimeout(function() {
                    $(".preroll_container").remove();
                    p(!0)
                }, 3e3);
                window.onLiveRailAdStart = function() {
                    $(".calculating_inner").css("display", "none");
                    $(".preroll_top").css("display", "block");
                    clearTimeout(i)
                };
                setTimeout(function() {
                    var n = "//cdn-static.liverail.com/js/LiveRail.Interstitial-1.0.js?LR_PUBLISHER_ID=1331&LR_PARTNERS=762346&LR_SCHEMA=vast2-vpaid&LR_VIDEO_ID=7777&LR_TITLE=iron&LR_LAYOUT_SKIN_ID=2&LR_LAYOUT_SKIN_MESSAGE=AdDc&hideCompanion=1&LR_SKIP_MESSAGE=SKIP";
                    n += "&width=" + $(".calculating_wrapper").width();
                    n += "&height=" + (Math.max($(".calculating_wrapper").height(), 300) - 52);
                    n += "&target=preroll_video";
                    var t = document.createElement("script");
                    t.src = n;
                    t.type = "text/javascript";
                    window.onLiveRailPrerollComplete = function() {
                        p(!0)
                    };
                    $(".preroll_container").append(t)
                })
            } else p()
        }

        function p(n) {
            var i = (Math.round(Math.random() * 3) + 2) * 1e3,
                t = !1;
            n && (i = 0);
            setTimeout(function() {
                isMobile ? ($(".calculating_wrapper").css({
                    opacity: 0,
                    display: "none"
                }), y()) : $(".calculating_wrapper").animate({
                    opacity: 0
                }, function() {
                    y();
                    $(this).css("display", "none")
                });
                clearInterval(r)
            }, i);
            var r = setInterval(function() {
                t ? (t = !1, $(".calculating_square_wrapper").removeClass("replace_squares")) : (t = !0, $(".calculating_square_wrapper").addClass("replace_squares"))
            }, 500)
        }

        function it() {
            var t = $(".result_image").attr("src");
            return n.image && n.image.type == "video" && (t = "http://img.youtube.com/vi/" + n.image.clipID + "/0.jpg"), n.image && n.image.thumbs && n.image.thumbs.length > 0 && (t = Comm.APIs.baseImageUrl + gameData.gameId + "/" + n.image.thumbs[0].croppedImageURL), t
        }

        function ot(n, t) {
            var i = Localization.getResource("I_got") + n + "! " + nt,
                r = it();
            if (st(n, r, t), ht(n, i), Tools.getURLParam("fromMobileApp") != null) {
                var u = $(".final_result_social").find(".more_share_button").unbind();
                u.click(function() {
                    var i = {
                            url: $(".result_fb_share").attr("data-url"),
                            message: Localization.getResource("I_got") + n,
                            image: r,
                            rnd: Math.random().toFixed(3)
                        },
                        t = getCleanUrl(),
                        u = jsonify(JSON.stringify(i));
                    t += "#shareAll" + u;
                    document.location.assign(t)
                })
            }
            ct(n, r, i);
            lt(n, i)
        }

        function st(t, i, r) {
            var f = Localization.getResource("I_got") + t + "! ",
                s = r,
                e = function() {
                    try {
                        return navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0
                    } catch (n) {
                        return console.log("speed-exception", n), !1
                    }
                }(),
                u = Tools.isMobile && !e,
                o = u ? "touchend" : "click";
            $(".result_fb_share").unbind().on(o, function() {
                var t = $(this).attr("data-url");
                PBSharer.Facebook.shareResult({
                    url: t,
                    media: i,
                    title: f,
                    description: r
                });
                u || Analytics.sendSocialEvent("facebook", t, !0, {
                    shareFinalResult: !0,
                    resultId: n.id,
                    resultText: n.title
                })
            });
            if (u) $(".result_fb_share").on("touchstart", function() {
                var t = $(this).attr("data-url");
                Analytics.sendSocialEvent("facebook", t, !0, {
                    shareFinalResult: !0,
                    resultId: n.id,
                    resultText: n.title
                })
            })
        }

        function ht(n, t) {
            $(".result_twttr_share").unbind().click(function() {
                var n = $(this).attr("data-url");
                PBSharer.Twitter.shareResult({
                    url: n,
                    title: t
                })
            })
        }

        function ct(n, t, i) {
            $(".result_pinterest_share").unbind().click(function() {
                var n = $(this).attr("data-url").replace("//", "");
                PBSharer.Pinterest.shareResult({
                    url: n,
                    title: i,
                    media: t
                })
            })
        }

        function lt(n, t) {
            isMobile && !ft && $(".result_whatsapp_share").css("display", "none");
            $(".result_whatsapp_share").unbind().click(function() {
                var n = $(this).attr("data-url");
                PBSharer.Whatsapp.share({
                    url: n,
                    title: t
                })
            })
        }
        $(document).on("questionHidden", function(t) {
            u = !0;
            d = $(".game_left_col").offset().top;
            var h = 0;
            i++;
            Analytics.sendProgressEvent(i, r.length, {
                isReplay: tt
            });
            setTimeout(function() {
                $(document).trigger("Game.Question.Loaded")
            }, 100);
            i == r.length ? pbMonetizationBridge.CompletedItem() : (r.length != 0 && (h = i * 100 / r.length), h >= 50 && $(document).trigger("Game.Progress.50"), pbads.dfp.triggerRefreshEvents(h));
            var nt = r[i - 1],
                e = function() {
                    for (var i = gameData.gameSpecificData.questions, n = 0; n < i.length; n++)
                        if (i[n].id == t.id) return i[n]
                }(),
                o = e.selectedMedia != null ? e.selectedMedia : "text",
                c = function() {
                    for (var i = e.answers, n = 0; n < i.length; n++)
                        if (i[n].id == t.answerId) return i[n]
                }(),
                l = [];
            try {
                o && o != "html" && (o == "image" ? l.push(e.image.croppedImageURL) : l.push(e.video.clipID))
            } catch (t) {
                console.log("speed-exception", t)
            }
            try {
                var v = c.text ? c.text : c.image.croppedImageURL;
                AwsBridge.itemResult(t.id, i - 1, i, r.length, o != "html", o, t.answerId, e.answers.length, null, e.text, v, l, JSON.stringify(e))
            } catch (t) {
                console.log("speed-exception", t)
            }
            var s = $($(".question_box").get(i));
            if (s && s.length > 0) {
                s.addClass("question_box_done");
                var y = s.offset().left;
                b - y < s.width() && $(".question_boxes_inner").animate({
                    "margin-left": "-=37"
                })
            }
            for (var a in t.results) f[a].score += parseInt(t.results[a]), k.push(t.results);
            if (i < r.length) {
                try {
                    if (window.pbads && window.pbads.loaded) {
                        var p = Math.floor(r.length / 2);
                        p == i && pbads.formats.testyourself.midroll();
                        pbads.formats.testyourself.inquestionAdRefresh(h)
                    }
                } catch (t) {
                    console.log("speed-exception", t)
                }
                r[i].show();
                u = !1
            } else {
                n = function() {
                    var n = null;
                    for (var t in f) n == null ? n = f[t] : f[t].score > n.score && (n = f[t]);
                    $(document).on("Game.End.Screen", function() {
                        AwsBridge.articleResult(null, n.id)
                    });
                    return n
                }();
                try {
                    if (n.image && !n.image.type) {
                        var w = Comm.APIs.baseImageUrl + gameData.gameId + "/" + n.image.croppedImageURL,
                            g = new Image;
                        g.src = w
                    }
                } catch (t) {
                    console.log("speed-exception", t)
                }
                et();
                pt(d)
            }
        });
        $(".previous_question").click(function() {
            if (i != 0 && !u) {
                u = !0;
                var t = k.pop();
                for (var e in t) f[e].score -= parseInt(t[e]);
                var n = $($(".question_box").get(i));
                if (n && n.length > 0) {
                    var o = parseInt($(".question_boxes_inner").css("marginLeft"));
                    o < 0 && $(".question_boxes_inner").animate({
                        "margin-left": "+=37"
                    })
                }
                n.removeClass("question_box_done");
                r[i].hide(function() {
                    i--;
                    r[i].show();
                    u = !1
                })
            }
        });

        function w() {
            try {
                window.PlayBuzz && PlayBuzz.core && PlayBuzz.core.sendAnalyticsEvent({
                    eventName: "ClickPlay",
                    data: {
                        articleName: gameData.gameNameForShare
                    }
                })
            } catch (n) {
                console.log("speed-exception", n)
            }
            vt();
            try {
                window.pbads && window.pbads.loaded && pbads.formats.testyourself.preload()
            } catch (n) {
                console.log("speed-exception", n)
            }
            try {
                var t = Tools.getURLParam("coverScreen") === "false";
                if (window.pbads)
                    if (t) pbads.on("PBADS_READY", function() {
                        pbads.formats.testyourself.inquestion();
                        pbads.formats.testyourself.preroll()
                    });
                    else window.pbads.loaded && (pbads.formats.testyourself.inquestion(), pbads.formats.testyourself.preroll())
            } catch (n) {
                console.log("speed-exception", n)
            }
            r[0].show();
            $($(".question_box").get(i)).addClass("question_box_done");
            AwsBridge.pageAction({
                pageActionType: "pq",
                pageActionName: "lets_play"
            });
            pbMonetizationBridge.StartedItem();
            $(".feed_main_section #app_content").css("visibility", "visible");
            setTimeout(function() {
                $(document).trigger("Game.Question.Loaded")
            }, 900);
            $(document).trigger("item_start", {})
        }

        function at() {
            Tools.getURLParam("coverScreen") === "false" && w();
            window.playButtonReady = !0;
            $(".play_game_button").click(function() {
                $(this).addClass("active_button");
                try {
                    isMobile ? ($("#open_page_container").css("display", "none"), $("#test_yourself_game").css("display", "block"), w()) : ($(".show_cover").removeClass("show_cover").addClass("hide_cover"), $("#open_page_container").animate({
                        opacity: 0
                    }, function() {
                        $(this).css("display", "none");
                        $("#test_yourself_game").css("display", "block");
                        w()
                    }))
                } catch (n) {
                    console.log("speed-exception", n)
                }
            });
            u = !1;
            window.playButtonClicked && $(".play_game_button").click()
        }

        function vt() {
            if (window.questionImageArr) {
                for (var n = 0; n < questionImageArr.length; n++) yt(questionImageArr[n]);
                delete window.questionImageArr
            }
        }

        function yt(n) {
            if (n)
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i && $(i.parentDiv).append($(i.image))
                }
        }

        function pt(n) {
            var i = $(document).scrollTop(),
                r = window.gameData && window.gameData.isBranded;
            (i > n || r) && ($("#streach-min-height").height(0), $("html, body").animate({
                scrollTop: n
            }, 300));
            var t = jQuery.Event("scrollParent");
            t.offsetY = n;
            $(document).trigger(t)
        }
        return PlayBuzz.Events.register(PlayBuzz.Events.loadEvents.DOM_READY, function() {
            e = gameData.gameSpecificData;
            b = $(window).innerWidth(),
                function() {
                    o = e.results;
                    for (var n = 0; n < o.length; n++) o[n].score = 0, f[o[n].id] = o[n]
                }();
            $(".single_question_container").each(function() {
                var n = $(this).attr("id");
                try {
                    var t = function() {
                            for (var t = 0; t < e.questions.length; t++)
                                if (e.questions[t].id == n) return e.questions[t]
                        }(),
                        i = new Slide(this, t);
                    r.push(i)
                } catch (u) {
                    console.log("speed-exception", u)
                }
            });
            var n = 0;

            function t() {
                if (n < 10 && (!r || r.length == 0 || !r[0].show)) {
                    n++;
                    setTimeout(t, 100);
                    return
                }
                at()
            }
            t();
            s.resize();
            $(window).resize(function() {
                s.resize()
            })
        }, !0), {}
    }();
    var n = !1;

    function t(t) {
        t.offsetTop - t.scrollY <= t.windowHeight && !n && (n = !0, AwsBridge.articleIn())
    }
})();

function prepareResultsShareBar(n, t) {
    $.extend(t, {
        container: $(".result_right_col")
    });
    n.updateShareBarParams(t)
}
$(window).load(function() {
    var n = $(".stick"),
        u = n.length > 0,
        t = "fix",
        i = {};

    function f() {
        i = {
            divTop: n.offset().top - parseInt(n.css("margin-top")),
            scrollTop: function() {
                return $(window).scrollTop()
            },
            isFixed: function() {
                return n.hasClass(t)
            }
        }
    }

    function r() {
        i.scrollTop() > i.divTop ? n.addClass(t) : n.removeClass(t)
    }

    function e() {
        f();
        r();
        $(document).scroll(r)
    }
    u && e()
});

function createTranslationsDao(n) {
    var t = {
        defaultVersion: "4eeaedf",
        projectName: "creator"
    };

    function i(i, r) {
        var f = n && n.translationsVersion || t.defaultVersion,
            e = n && n.projectName || t.projectName,
            o = "https://cdn.playbuzz.com/translations/" + f + "/" + e + "/" + i + ".json",
            u = $.ajax({
                dataType: "json",
                url: o,
                ifModified: !0,
                cache: !0
            });
        return u.always(r), u.fail(function(n) {
            console.warn("Can't get locale resource, got error response", n)
        }), u
    }
    return {
        getByLocale: i
    }
}

function createLocalization(n, t, i) {
    var f, r = {};
    r._dictionary;
    r._defaultDictionary;
    r._defaultLocale = "";
    r._eventsObserver = $("<div><\/div>");
    r._isDebuggingMode = n.hasParam("showKeys");
    r.getBrowserLanguage = function() {
        return n && n.getBrowserLanguage()
    };
    r.getResource = function(n, t, i) {
        if (!n) return console.error("cant get locale translation value of undefined"), "";
        r._isDebuggingMode && t && r._bindDebugging(n, t);
        var s = !r._dictionary,
            h = r._dictionary,
            o = r._dictionary && r._dictionary[n],
            f = r._defaultDictionary && r._defaultDictionary[n];
        return o ? o : s && f ? f : h && !o && f ? (console.warn("missing data resource: ", n, ", locale: ", r.getLanguage(), " - using default locale (", r._defaultLocale, ")"), t && c(t), f) : h && !o && !f ? (console.error("missing data resource and default data resource: ", n, ", locale: ", r.getLanguage()), t && u(i) && e(t), u(i) ? n : i) : s && !f ? (console.error("missing default data resource: ", n, ", locale: ", r.getLanguage()), t && u(i) && e(t), u(i) ? n : i) : void 0
    };
    r._bindDebugging = function(n, t) {
        if (!i(t)) {
            t.css({
                border: "1px dashed red"
            }).hover(function() {
                var i = t.text().replace(/\[(.*?)\]\s/g, "");
                t.data("originalText", i);
                t.text("[" + n + "] " + i);
                t.css({
                    border: "1px solid Navy",
                    background: "LightSkyBlue",
                    color: "Navy"
                })
            }, function() {
                t.text(t.data("originalText"));
                t.removeAttr("style").css({
                    border: "1px dashed red"
                })
            });

            function i(n) {
                return n.data("originalText")
            }
        }
    };
    r.setDefaultResource = function(n) {
        this._defaultDictionary = n || {}
    };
    r.getLanguage = function() {
        return this._language
    };
    r.translate = function() {
        var n = jQuery.Deferred();
        return f.done(function() {
            $('[data-resource]:not([auto-translate="false"])').each(function(n, i) {
                var f = i.getAttribute("data-resource");
                if (i.localName === "input" || i.localName === "textarea") {
                    var e = i.getAttribute("placeholder"),
                        o = r.getResource(f, !t && $(i), e);
                    i.setAttribute("placeholder", o)
                } else {
                    for (var e = $(i).text(), u = 0; u < i.childNodes.length; u++) {
                        var s = i.childNodes[u].nodeType === 3;
                        s && i.removeChild(i.childNodes[u])
                    }
                    var o = r.getResource(f, !t && $(i), e),
                        h = document.createTextNode(o);
                    i.appendChild(h)
                }
            });
            n.resolve()
        }).fail(function(t) {
            var i = "Can't translate - without default dictionary";
            console.error(i);
            n.reject({
                error: t,
                message: i
            })
        }), n.promise()
    };
    r.loadDefaultDictionaryByLocale = function(n) {
        return i.getByLocale(n).done(function(t) {
            r._globalDicPromise.state() !== "resolved" && (r._defaultDictionary = t, r._defaultLocale = n, r._trigger("defaultDictionaryReady", r))
        })
    };
    r.loadResourceByLocale = function(n) {
        return i.getByLocale(n).done(function(t) {
            r._globalDicPromise.state() !== "resolved" && (r._dictionary = t, r._language = n, r._trigger("dictionaryReady", r))
        }).always(function() {
            console.info("Browser locale: ", r.getBrowserLanguage());
            console.info("default locale: ", r._defaultLocale);
            console.info("locale: ", r._language)
        })
    };
    r.setResourceSetByLanguage = function(n) {
        return r.loadResourceByLocale(n).done(function() {
            r.translate()
        })
    };
    var o = function(n) {
        while (n.indexOf("&quot;") >= 0) n = n.replace("&quot;", '"');
        return JSON.parse(n)
    };

    function s() {
        var n = $.Deferred();
        return $(document).ready(function() {
            var t = window.resourceSet;
            t ? (r._dictionary = typeof t == "string" ? o(t) : t, n.resolve(r._dictionary), r._trigger("globalDictionaryReady", r)) : n.reject("global dictionary not exists")
        }), n.promise()
    }
    r.on = function(n, t) {
        r._eventsObserver.on(n, t)
    };
    r._trigger = function(n, t) {
        r._eventsObserver.trigger(n, t)
    };

    function h() {
        r._globalDicPromise = s();
        f = r.loadDefaultDictionaryByLocale("en-us");
        r.on("globalDictionaryReady defaultDictionaryReady dictionaryReady", function(n, t) {
            r._trigger("ready", t)
        })
    }

    function u(n) {
        return typeof n == "string" || n instanceof String ? n.replace(/\s/g, "") === "" : !0
    }

    function c(n) {
        n.css("background", "Gold").css("color", "SaddleBrown").css("border", "5px dashed")
    }

    function e(n) {
        n.css("background", "IndianRed").css("color", "DarkRed").css("border", "5px dashed")
    }
    return h(), r
}

function createCreatorLocalizator(n, t) {
    var i = {
        formats: {
            multipleChoice: ["en-us", "pt-br", "es", "es-ar", "es-419", "es-mx", "es-es", "es-us", "zh-cn"],
            TestYourself: ["en-us", "es", "es-ar", "es-419", "es-mx", "es-es", "es-us"]
        }
    };

    function r() {
        t.getElementsByClassName("main_section")[0].className += " localized"
    }

    function u(n) {
        var t = i.formats[n.format] || [],
            u = chooseLanguage(t);
        return Localization.setResourceSetByLanguage(u).always(r)
    }
    return {
        LocalizeSupported: u
    }
}

function chooseLanguage(n) {
    var i = function(n) {
            return n.indexOf("es") === 0 ? "es-es" : n
        },
        r = Tools.getURLParam("language"),
        t = r || Localization.getBrowserLanguage(),
        t = i(t),
        u = n.indexOf(t) > -1;
    return u ? t : (console.warn("requested language not supported"), "en-us")
}
var Localization = function() {
    var n = createTranslationsDao(window.localizationConfig),
        t = !window.pb || !pb.environment || pb.environment.isProduction();
    return createLocalization(window.Tools, t, n)
}()