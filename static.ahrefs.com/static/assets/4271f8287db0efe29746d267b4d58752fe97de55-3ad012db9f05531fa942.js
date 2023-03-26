(self.webpackChunk_ahrefs_internal_static = self.webpackChunk_ahrefs_internal_static || []).push([
    [2712], {
        29830: function(e) {
            "use strict";
            var t = function(e) {
                return function(e) {
                    return !!e && "object" == typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === r
                    }(e)
                }(e)
            };
            var r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function n(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? u((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
                var r
            }

            function o(e, t, r) {
                return e.concat(t).map((function(e) {
                    return n(e, r)
                }))
            }

            function a(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return e.propertyIsEnumerable(t)
                    })) : []
                }(e))
            }

            function i(e, t) {
                try {
                    return t in e
                } catch (r) {
                    return !1
                }
            }

            function l(e, t, r) {
                var o = {};
                return r.isMergeableObject(e) && a(e).forEach((function(t) {
                    o[t] = n(e[t], r)
                })), a(t).forEach((function(a) {
                    (function(e, t) {
                        return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, a) || (i(e, a) && r.isMergeableObject(t[a]) ? o[a] = function(e, t) {
                        if (!t.customMerge) return u;
                        var r = t.customMerge(e);
                        return "function" == typeof r ? r : u
                    }(a, r)(e[a], t[a], r) : o[a] = n(t[a], r))
                })), o
            }

            function u(e, r, a) {
                (a = a || {}).arrayMerge = a.arrayMerge || o, a.isMergeableObject = a.isMergeableObject || t, a.cloneUnlessOtherwiseSpecified = n;
                var i = Array.isArray(r);
                return i === Array.isArray(e) ? i ? a.arrayMerge(e, r, a) : l(e, r, a) : n(r, a)
            }
            u.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, r) {
                    return u(e, r, t)
                }), {})
            };
            var c = u;
            e.exports = c
        },
        60824: function(e) {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function r(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, n, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                "function" == typeof n && (o = n, n = {}), n = n || {}, o = o || function() {}, i.type = n.type || "text/javascript", i.charset = n.charset || "utf8", i.async = !("async" in n) || !!n.async, i.src = e, n.attrs && function(e, t) {
                    for (var r in t) e.setAttribute(r, t[r])
                }(i, n.attrs), n.text && (i.text = "" + n.text), ("onload" in i ? t : r)(i, o), i.onload || t(i, o), a.appendChild(i)
            }
        },
        27933: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function o(e, t) {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++)
                    if (o = e[r], a = t[r], !(o === a || n(o) && n(a))) return !1;
                var o, a;
                return !0
            }
            t.default = function(e, t) {
                var r;
                void 0 === t && (t = o);
                var n, a = [],
                    i = !1;
                return function() {
                    for (var o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
                    return i && r === this && t(o, a) || (n = e.apply(this, o), i = !0, r = this, a = o), n
                }
            }
        },
        59717: function(e, t, r) {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            r(42045), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(32735)),
                i = (o = r(50617)) && o.__esModule ? o : {
                    default: o
                },
                l = r(71551),
                u = r(64994);

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, s.apply(this, arguments)
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t) {
                return d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, d(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function m(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(l, e);
                var t, r, n, o = y(l);

                function l() {
                    var e;
                    f(this, l);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return m(v(e = o.call.apply(o, [this].concat(r))), "mounted", !1), m(v(e), "isReady", !1), m(v(e), "isPlaying", !1), m(v(e), "isLoading", !0), m(v(e), "loadOnReady", null), m(v(e), "startOnPlay", !0), m(v(e), "seekOnPlay", null), m(v(e), "onDurationCalled", !1), m(v(e), "handlePlayerMount", (function(t) {
                        e.player = t, e.player.load(e.props.url), e.progress()
                    })), m(v(e), "getInternalPlayer", (function(t) {
                        return e.player ? e.player[t] : null
                    })), m(v(e), "progress", (function() {
                        if (e.props.url && e.player && e.isReady) {
                            var t = e.getCurrentTime() || 0,
                                r = e.getSecondsLoaded(),
                                n = e.getDuration();
                            if (n) {
                                var o = {
                                    playedSeconds: t,
                                    played: t / n
                                };
                                null !== r && (o.loadedSeconds = r, o.loaded = r / n), o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o), e.prevPlayed = o.playedSeconds, e.prevLoaded = o.loadedSeconds
                            }
                        }
                        e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
                    })), m(v(e), "handleReady", (function() {
                        if (e.mounted) {
                            e.isReady = !0, e.isLoading = !1;
                            var t = e.props,
                                r = t.onReady,
                                n = t.playing,
                                o = t.volume,
                                a = t.muted;
                            r(), a || null === o || e.player.setVolume(o), e.loadOnReady ? (e.player.load(e.loadOnReady, !0), e.loadOnReady = null) : n && e.player.play(), e.handleDurationCheck()
                        }
                    })), m(v(e), "handlePlay", (function() {
                        e.isPlaying = !0, e.isLoading = !1;
                        var t = e.props,
                            r = t.onStart,
                            n = t.onPlay,
                            o = t.playbackRate;
                        e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o), r(), e.startOnPlay = !1), n(), e.seekOnPlay && (e.seekTo(e.seekOnPlay), e.seekOnPlay = null), e.handleDurationCheck()
                    })), m(v(e), "handlePause", (function(t) {
                        e.isPlaying = !1, e.isLoading || e.props.onPause(t)
                    })), m(v(e), "handleEnded", (function() {
                        var t = e.props,
                            r = t.activePlayer,
                            n = t.loop,
                            o = t.onEnded;
                        r.loopOnEnded && n && e.seekTo(0), n || (e.isPlaying = !1, o())
                    })), m(v(e), "handleError", (function() {
                        var t;
                        e.isLoading = !1, (t = e.props).onError.apply(t, arguments)
                    })), m(v(e), "handleDurationCheck", (function() {
                        clearTimeout(e.durationCheckTimeout);
                        var t = e.getDuration();
                        t ? e.onDurationCalled || (e.props.onDuration(t), e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
                    })), m(v(e), "handleLoaded", (function() {
                        e.isLoading = !1
                    })), e
                }
                return t = l, r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        if (this.player) {
                            var r = this.props,
                                n = r.url,
                                o = r.playing,
                                a = r.volume,
                                l = r.muted,
                                c = r.playbackRate,
                                s = r.pip,
                                f = r.loop,
                                p = r.activePlayer,
                                d = r.disableDeferredLoading;
                            if (!(0, i.default)(e.url, n)) {
                                if (this.isLoading && !p.forceLoad && !d && !(0, u.isMediaStream)(n)) return console.warn("ReactPlayer: the attempt to load ".concat(n, " is being deferred until the player has loaded")), void(this.loadOnReady = n);
                                this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(n, this.isReady)
                            }
                            e.playing || !o || this.isPlaying || this.player.play(), e.playing && !o && this.isPlaying && this.player.pause(), !e.pip && s && this.player.enablePIP && this.player.enablePIP(), e.pip && !s && this.player.disablePIP && this.player.disablePIP(), e.volume !== a && null !== a && this.player.setVolume(a), e.muted !== l && (l ? this.player.mute() : (this.player.unmute(), null !== a && setTimeout((function() {
                                return t.player.setVolume(a)
                            })))), e.playbackRate !== c && this.player.setPlaybackRate && this.player.setPlaybackRate(c), e.loop !== f && this.player.setLoop && this.player.setLoop(f)
                        }
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.isReady ? this.player.getDuration() : null
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.isReady ? this.player.getCurrentTime() : null
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.isReady ? this.player.getSecondsLoaded() : null
                    }
                }, {
                    key: "seekTo",
                    value: function(e, t) {
                        var r = this;
                        if (this.isReady) {
                            if (t ? "fraction" === t : e > 0 && e < 1) {
                                var n = this.player.getDuration();
                                return n ? void this.player.seekTo(n * e) : void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")
                            }
                            this.player.seekTo(e)
                        } else 0 !== e && (this.seekOnPlay = e, setTimeout((function() {
                            r.seekOnPlay = null
                        }), 5e3))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.activePlayer;
                        return e ? a.default.createElement(e, s({}, this.props, {
                            onMount: this.handlePlayerMount,
                            onReady: this.handleReady,
                            onPlay: this.handlePlay,
                            onPause: this.handlePause,
                            onEnded: this.handleEnded,
                            onLoaded: this.handleLoaded,
                            onError: this.handleError
                        })) : null
                    }
                }], r && p(t.prototype, r), n && p(t, n), l
            }(a.Component);
            t.default = g, m(g, "displayName", "Player"), m(g, "propTypes", l.propTypes), m(g, "defaultProps", l.defaultProps)
        },
        65002: function(e, t, r) {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            r(42045), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        l && (l.get || l.set) ? Object.defineProperty(r, i, l) : r[i] = e[i]
                    }
                r.default = e, t && t.set(e, r);
                return r
            }(r(32735));

            function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function() {
                    return e
                }, e
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        h(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, t) {
                return s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, s(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? d(e) : t
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, y(e)
            }

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = "64px",
                b = {},
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && s(e, t)
                    }(i, e);
                    var t, r, n, a = f(i);

                    function i() {
                        var e;
                        u(this, i);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return h(d(e = a.call.apply(a, [this].concat(r))), "mounted", !1), h(d(e), "state", {
                            image: null
                        }), h(d(e), "handleKeyPress", (function(t) {
                            "Enter" !== t.key && " " !== t.key || e.props.onClick()
                        })), e
                    }
                    return t = i, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                r = t.url,
                                n = t.light;
                            e.url === r && e.light === n || this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "fetchImage",
                        value: function(e) {
                            var t = this,
                                r = e.url,
                                n = e.light,
                                o = e.oEmbedUrl;
                            if ("string" != typeof n) {
                                if (!b[r]) return this.setState({
                                    image: null
                                }), window.fetch(o.replace("{url}", r)).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    if (e.thumbnail_url && t.mounted) {
                                        var n = e.thumbnail_url.replace("height=100", "height=480");
                                        t.setState({
                                            image: n
                                        }), b[r] = n
                                    }
                                }));
                                this.setState({
                                    image: b[r]
                                })
                            } else this.setState({
                                image: n
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onClick,
                                r = e.playIcon,
                                n = e.previewTabIndex,
                                a = this.state.image,
                                i = {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                u = {
                                    preview: l({
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: a ? "url(".concat(a, ")") : void 0,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        cursor: "pointer"
                                    }, i),
                                    shadow: l({
                                        background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                                        borderRadius: v,
                                        width: v,
                                        height: v
                                    }, i),
                                    playIcon: {
                                        borderStyle: "solid",
                                        borderWidth: "16px 0 16px 26px",
                                        borderColor: "transparent transparent transparent white",
                                        marginLeft: "7px"
                                    }
                                },
                                c = o.default.createElement("div", {
                                    style: u.shadow,
                                    className: "react-player__shadow"
                                }, o.default.createElement("div", {
                                    style: u.playIcon,
                                    className: "react-player__play-icon"
                                }));
                            return o.default.createElement("div", {
                                style: u.preview,
                                className: "react-player__preview",
                                onClick: t,
                                tabIndex: n,
                                onKeyPress: this.handleKeyPress
                            }, r || c)
                        }
                    }]) && c(t.prototype, r), n && c(t, n), i
                }(o.Component);
            t.default = m
        },
        92800: function(e, t, r) {
            "use strict";
            r(42045), t.e = void 0;
            var n = j(r(32735)),
                o = s(r(29830)),
                a = s(r(27933)),
                i = s(r(50617)),
                l = r(71551),
                u = r(64994),
                c = s(r(59717));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        S(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function y() {
                return y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, y.apply(this, arguments)
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function g(e, t) {
                return g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function w(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }

            function P(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? O(e) : t
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _(e) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, _(e)
            }

            function S(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function k() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return k = function() {
                    return e
                }, e
            }

            function j(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== f(e) && "function" != typeof e) return {
                    default: e
                };
                var t = k();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                    }
                return r.default = e, t && t.set(e, r), r
            }
            var E = (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return j(r(65002))
                    }))
                })),
                A = "undefined" != typeof window && window.document,
                T = void 0 !== r.g && r.g.window && r.g.window.document,
                R = Object.keys(l.propTypes),
                C = A || T ? n.Suspense : function() {
                    return null
                },
                I = [];
            t.e = function(e, t) {
                var r, s;
                return s = r = function(r) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && g(e, t)
                    }(P, r);
                    var s, f, p, v = w(P);

                    function P() {
                        var r;
                        b(this, P);
                        for (var i = arguments.length, s = new Array(i), f = 0; f < i; f++) s[f] = arguments[f];
                        return S(O(r = v.call.apply(v, [this].concat(s))), "state", {
                            showPreview: !!r.props.light
                        }), S(O(r), "references", {
                            wrapper: function(e) {
                                r.wrapper = e
                            },
                            player: function(e) {
                                r.player = e
                            }
                        }), S(O(r), "handleClickPreview", (function(e) {
                            r.setState({
                                showPreview: !1
                            }), r.props.onClickPreview(e)
                        })), S(O(r), "showPreview", (function() {
                            r.setState({
                                showPreview: !0
                            })
                        })), S(O(r), "getDuration", (function() {
                            return r.player ? r.player.getDuration() : null
                        })), S(O(r), "getCurrentTime", (function() {
                            return r.player ? r.player.getCurrentTime() : null
                        })), S(O(r), "getSecondsLoaded", (function() {
                            return r.player ? r.player.getSecondsLoaded() : null
                        })), S(O(r), "getInternalPlayer", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                            return r.player ? r.player.getInternalPlayer(e) : null
                        })), S(O(r), "seekTo", (function(e, t) {
                            if (!r.player) return null;
                            r.player.seekTo(e, t)
                        })), S(O(r), "handleReady", (function() {
                            r.props.onReady(O(r))
                        })), S(O(r), "getActivePlayer", (0, a.default)((function(r) {
                            for (var n = 0, o = [].concat(I, h(e)); n < o.length; n++) {
                                var a = o[n];
                                if (a.canPlay(r)) return a
                            }
                            return t || null
                        }))), S(O(r), "getConfig", (0, a.default)((function(e, t) {
                            var n = r.props.config;
                            return o.default.all([l.defaultProps.config, l.defaultProps.config[t] || {}, n, n[t] || {}])
                        }))), S(O(r), "getAttributes", (0, a.default)((function(e) {
                            return (0, u.omit)(r.props, R)
                        }))), S(O(r), "renderActivePlayer", (function(e) {
                            if (!e) return null;
                            var t = r.getActivePlayer(e);
                            if (!t) return null;
                            var o = r.getConfig(e, t.key);
                            return n.default.createElement(c.default, y({}, r.props, {
                                key: t.key,
                                ref: r.references.player,
                                config: o,
                                activePlayer: t.lazyPlayer || t,
                                onReady: r.handleReady
                            }))
                        })), r
                    }
                    return s = P, f = [{
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return !(0, i.default)(this.props, e) || !(0, i.default)(this.state, t)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.light;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                    }, {
                        key: "renderPreview",
                        value: function(e) {
                            if (!e) return null;
                            var t = this.props,
                                r = t.light,
                                o = t.playIcon,
                                a = t.previewTabIndex,
                                i = t.oEmbedUrl;
                            return n.default.createElement(E, {
                                url: e,
                                light: r,
                                playIcon: o,
                                previewTabIndex: a,
                                oEmbedUrl: i,
                                onClick: this.handleClickPreview
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.url,
                                r = e.style,
                                o = e.width,
                                a = e.height,
                                i = e.fallback,
                                l = e.wrapper,
                                u = this.state.showPreview,
                                c = this.getAttributes(t);
                            return n.default.createElement(l, y({
                                ref: this.references.wrapper,
                                style: d(d({}, r), {}, {
                                    width: o,
                                    height: a
                                })
                            }, c), n.default.createElement(C, {
                                fallback: i
                            }, u ? this.renderPreview(t) : this.renderActivePlayer(t)))
                        }
                    }], f && m(s.prototype, f), p && m(s, p), P
                }(n.Component), S(r, "displayName", "ReactPlayer"), S(r, "propTypes", l.propTypes), S(r, "defaultProps", l.defaultProps), S(r, "addCustomPlayer", (function(e) {
                    I.push(e)
                })), S(r, "removeCustomPlayers", (function() {
                    I.length = 0
                })), S(r, "canPlay", (function(t) {
                    for (var r = 0, n = [].concat(I, h(e)); r < n.length; r++) {
                        if (n[r].canPlay(t)) return !0
                    }
                    return !1
                })), S(r, "canEnablePIP", (function(t) {
                    for (var r = 0, n = [].concat(I, h(e)); r < n.length; r++) {
                        var o = n[r];
                        if (o.canEnablePIP && o.canEnablePIP(t)) return !0
                    }
                    return !1
                })), s
            }
        },
        64034: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_KALTURA = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
            var n = r(64994);

            function o(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return a(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, l = !0,
                    u = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        u = !0, i = e
                    },
                    f: function() {
                        try {
                            l || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var i = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
            t.MATCH_URL_YOUTUBE = i;
            var l = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
            t.MATCH_URL_SOUNDCLOUD = l;
            var u = /vimeo\.com\/(?!progressive_redirect).+/;
            t.MATCH_URL_VIMEO = u;
            var c = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
            t.MATCH_URL_FACEBOOK = c;
            var s = /^https?:\/\/fb\.watch\/.+$/;
            t.MATCH_URL_FACEBOOK_WATCH = s;
            var f = /streamable\.com\/([a-z0-9]+)$/;
            t.MATCH_URL_STREAMABLE = f;
            var p = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
            t.MATCH_URL_WISTIA = p;
            var d = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
            t.MATCH_URL_TWITCH_VIDEO = d;
            var y = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
            t.MATCH_URL_TWITCH_CHANNEL = y;
            var h = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
            t.MATCH_URL_DAILYMOTION = h;
            var v = /mixcloud\.com\/([^/]+\/[^/]+)/;
            t.MATCH_URL_MIXCLOUD = v;
            var b = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
            t.MATCH_URL_VIDYARD = b;
            var m = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
            t.MATCH_URL_KALTURA = m;
            var g = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
            t.AUDIO_EXTENSIONS = g;
            var w = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
            t.VIDEO_EXTENSIONS = w;
            var P = /\.(m3u8)($|\?)/i;
            t.HLS_EXTENSIONS = P;
            var O = /\.(mpd)($|\?)/i;
            t.DASH_EXTENSIONS = O;
            var _ = /\.(flv)($|\?)/i;
            t.FLV_EXTENSIONS = _;
            var S = {
                youtube: function(e) {
                    return e instanceof Array ? e.every((function(e) {
                        return i.test(e)
                    })) : i.test(e)
                },
                soundcloud: function(e) {
                    return l.test(e) && !g.test(e)
                },
                vimeo: function(e) {
                    return u.test(e) && !w.test(e) && !P.test(e)
                },
                facebook: function(e) {
                    return c.test(e) || s.test(e)
                },
                streamable: function(e) {
                    return f.test(e)
                },
                wistia: function(e) {
                    return p.test(e)
                },
                twitch: function(e) {
                    return d.test(e) || y.test(e)
                },
                dailymotion: function(e) {
                    return h.test(e)
                },
                mixcloud: function(e) {
                    return v.test(e)
                },
                vidyard: function(e) {
                    return b.test(e)
                },
                kaltura: function(e) {
                    return m.test(e)
                },
                file: function e(t) {
                    if (t instanceof Array) {
                        var r, a = o(t);
                        try {
                            for (a.s(); !(r = a.n()).done;) {
                                var i = r.value;
                                if ("string" == typeof i && e(i)) return !0;
                                if (e(i.src)) return !0
                            }
                        } catch (l) {
                            a.e(l)
                        } finally {
                            a.f()
                        }
                        return !1
                    }
                    return !(!(0, n.isMediaStream)(t) && !(0, n.isBlobUrl)(t)) || (g.test(t) || w.test(t) || P.test(t) || O.test(t) || _.test(t))
                }
            };
            t.canPlay = S
        },
        41735: function(e, t, r) {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            r(42045), t.Z = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(32735)),
                a = r(64994),
                i = r(64034);

            function l() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        b(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, p(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function y(e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? h(e) : t
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, v(e)
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m = "wistia-player-",
                g = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && p(e, t)
                    }(u, e);
                    var t, r, n, l = d(u);

                    function u() {
                        var e;
                        s(this, u);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return b(h(e = l.call.apply(l, [this].concat(r))), "callPlayer", a.callPlayer), b(h(e), "playerID", e.props.config.playerId || "".concat(m).concat((0, a.randomString)())), b(h(e), "onPlay", (function() {
                            var t;
                            return (t = e.props).onPlay.apply(t, arguments)
                        })), b(h(e), "onPause", (function() {
                            var t;
                            return (t = e.props).onPause.apply(t, arguments)
                        })), b(h(e), "onSeek", (function() {
                            var t;
                            return (t = e.props).onSeek.apply(t, arguments)
                        })), b(h(e), "onEnded", (function() {
                            var t;
                            return (t = e.props).onEnded.apply(t, arguments)
                        })), b(h(e), "onPlaybackRateChange", (function() {
                            var t;
                            return (t = e.props).onPlaybackRateChange.apply(t, arguments)
                        })), b(h(e), "mute", (function() {
                            e.callPlayer("mute")
                        })), b(h(e), "unmute", (function() {
                            e.callPlayer("unmute")
                        })), e
                    }
                    return t = u, r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "load",
                        value: function(e) {
                            var t = this,
                                r = this.props,
                                n = r.playing,
                                o = r.muted,
                                i = r.controls,
                                l = r.onReady,
                                u = r.config,
                                s = r.onError;
                            (0, a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then((function(e) {
                                u.customControls && u.customControls.forEach((function(t) {
                                    return e.defineControl(t)
                                })), window._wq = window._wq || [], window._wq.push({
                                    id: t.playerID,
                                    options: c({
                                        autoPlay: n,
                                        silentAutoPlay: "allow",
                                        muted: o,
                                        controlsVisibleOnLoad: i,
                                        fullscreenButton: i,
                                        playbar: i,
                                        playbackRateControl: i,
                                        qualityControl: i,
                                        volumeControl: i,
                                        settingsControl: i,
                                        smallPlayButton: i
                                    }, u.options),
                                    onReady: function(e) {
                                        t.player = e, t.unbind(), t.player.bind("play", t.onPlay), t.player.bind("pause", t.onPause), t.player.bind("seek", t.onSeek), t.player.bind("end", t.onEnded), t.player.bind("playbackratechange", t.onPlaybackRateChange), l()
                                    }
                                })
                            }), s)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded), this.player.unbind("playbackratechange", this.onPlaybackRateChange)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.callPlayer("play")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.callPlayer("pause")
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.unbind(), this.callPlayer("remove")
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.callPlayer("time", e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.callPlayer("volume", e)
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.callPlayer("playbackRate", e)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.callPlayer("duration")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.callPlayer("time")
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.url,
                                t = e && e.match(i.MATCH_URL_WISTIA)[1],
                                r = "wistia_embed wistia_async_".concat(t);
                            return o.default.createElement("div", {
                                id: this.playerID,
                                key: t,
                                className: r,
                                style: {
                                    width: "100%",
                                    height: "100%"
                                }
                            })
                        }
                    }], r && f(t.prototype, r), n && f(t, n), u
                }(o.Component);
            t.Z = g, b(g, "displayName", "Wistia"), b(g, "canPlay", i.canPlay.wistia), b(g, "loopOnEnded", !0)
        },
        71551: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultProps = t.propTypes = void 0;
            var n, o = (n = r(60216)) && n.__esModule ? n : {
                default: n
            };
            var a = o.default.string,
                i = o.default.bool,
                l = o.default.number,
                u = o.default.array,
                c = o.default.oneOfType,
                s = o.default.shape,
                f = o.default.object,
                p = o.default.func,
                d = o.default.node,
                y = {
                    url: c([a, u, f]),
                    playing: i,
                    loop: i,
                    controls: i,
                    volume: l,
                    muted: i,
                    playbackRate: l,
                    width: c([a, l]),
                    height: c([a, l]),
                    style: f,
                    progressInterval: l,
                    playsinline: i,
                    pip: i,
                    stopOnUnmount: i,
                    light: c([i, a]),
                    playIcon: d,
                    previewTabIndex: l,
                    fallback: d,
                    oEmbedUrl: a,
                    wrapper: c([a, p, s({
                        render: p.isRequired
                    })]),
                    config: s({
                        soundcloud: s({
                            options: f
                        }),
                        youtube: s({
                            playerVars: f,
                            embedOptions: f,
                            onUnstarted: p
                        }),
                        facebook: s({
                            appId: a,
                            version: a,
                            playerId: a,
                            attributes: f
                        }),
                        dailymotion: s({
                            params: f
                        }),
                        vimeo: s({
                            playerOptions: f,
                            title: a
                        }),
                        file: s({
                            attributes: f,
                            tracks: u,
                            forceVideo: i,
                            forceAudio: i,
                            forceHLS: i,
                            forceDASH: i,
                            forceFLV: i,
                            hlsOptions: f,
                            hlsVersion: a,
                            dashVersion: a,
                            flvVersion: a
                        }),
                        wistia: s({
                            options: f,
                            playerId: a,
                            customControls: u
                        }),
                        mixcloud: s({
                            options: f
                        }),
                        twitch: s({
                            options: f,
                            playerId: a
                        }),
                        vidyard: s({
                            options: f
                        })
                    }),
                    onReady: p,
                    onStart: p,
                    onPlay: p,
                    onPause: p,
                    onBuffer: p,
                    onBufferEnd: p,
                    onEnded: p,
                    onError: p,
                    onDuration: p,
                    onSeek: p,
                    onPlaybackRateChange: p,
                    onProgress: p,
                    onClickPreview: p,
                    onEnablePIP: p,
                    onDisablePIP: p
                };
            t.propTypes = y;
            var h = function() {},
                v = {
                    playing: !1,
                    loop: !1,
                    controls: !1,
                    volume: null,
                    muted: !1,
                    playbackRate: 1,
                    width: "640px",
                    height: "360px",
                    style: {},
                    progressInterval: 1e3,
                    playsinline: !1,
                    pip: !1,
                    stopOnUnmount: !0,
                    light: !1,
                    fallback: null,
                    wrapper: "div",
                    previewTabIndex: 0,
                    oEmbedUrl: "https://noembed.com/embed?url={url}",
                    config: {
                        soundcloud: {
                            options: {
                                visual: !0,
                                buying: !1,
                                liking: !1,
                                download: !1,
                                sharing: !1,
                                show_comments: !1,
                                show_playcount: !1
                            }
                        },
                        youtube: {
                            playerVars: {
                                playsinline: 1,
                                showinfo: 0,
                                rel: 0,
                                iv_load_policy: 3,
                                modestbranding: 1
                            },
                            embedOptions: {},
                            onUnstarted: h
                        },
                        facebook: {
                            appId: "1309697205772819",
                            version: "v3.3",
                            playerId: null,
                            attributes: {}
                        },
                        dailymotion: {
                            params: {
                                api: 1,
                                "endscreen-enable": !1
                            }
                        },
                        vimeo: {
                            playerOptions: {
                                autopause: !1,
                                byline: !1,
                                portrait: !1,
                                title: !1
                            },
                            title: null
                        },
                        file: {
                            attributes: {},
                            tracks: [],
                            forceVideo: !1,
                            forceAudio: !1,
                            forceHLS: !1,
                            forceDASH: !1,
                            forceFLV: !1,
                            hlsOptions: {},
                            hlsVersion: "1.1.4",
                            dashVersion: "3.1.3",
                            flvVersion: "1.5.0"
                        },
                        wistia: {
                            options: {},
                            playerId: null,
                            customControls: null
                        },
                        mixcloud: {
                            options: {
                                hide_cover: 1
                            }
                        },
                        twitch: {
                            options: {},
                            playerId: null
                        },
                        vidyard: {
                            options: {}
                        }
                    },
                    onReady: h,
                    onStart: h,
                    onPlay: h,
                    onPause: h,
                    onBuffer: h,
                    onBufferEnd: h,
                    onEnded: h,
                    onError: h,
                    onDuration: h,
                    onSeek: h,
                    onPlaybackRateChange: h,
                    onProgress: h,
                    onClickPreview: h,
                    onEnablePIP: h,
                    onDisablePIP: h
                };
            t.defaultProps = v
        },
        64994: function(e, t, r) {
            "use strict";
            r(42045), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseStartTime = function(e) {
                return p(e, u)
            }, t.parseEndTime = function(e) {
                return p(e, c)
            }, t.randomString = function() {
                return Math.random().toString(36).substr(2, 5)
            }, t.queryString = function(e) {
                return Object.keys(e).map((function(t) {
                    return "".concat(t, "=").concat(e[t])
                })).join("&")
            }, t.getSDK = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                        return !0
                    },
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n.default,
                    i = d(t);
                if (i && o(i)) return Promise.resolve(i);
                return new Promise((function(n, o) {
                    if (y[e]) y[e].push({
                        resolve: n,
                        reject: o
                    });
                    else {
                        y[e] = [{
                            resolve: n,
                            reject: o
                        }];
                        var i = function(t) {
                            y[e].forEach((function(e) {
                                return e.resolve(t)
                            }))
                        };
                        if (r) {
                            var l = window[r];
                            window[r] = function() {
                                l && l(), i(d(t))
                            }
                        }
                        a(e, (function(n) {
                            n ? (y[e].forEach((function(e) {
                                return e.reject(n)
                            })), y[e] = null) : r || i(d(t))
                        }))
                    }
                }))
            }, t.getConfig = function(e, t) {
                return (0, o.default)(t.config, e.config)
            }, t.omit = function(e) {
                for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                for (var a = (t = []).concat.apply(t, n), i = {}, l = Object.keys(e), u = 0, c = l; u < c.length; u++) {
                    var s = c[u]; - 1 === a.indexOf(s) && (i[s] = e[s])
                }
                return i
            }, t.callPlayer = function(e) {
                var t;
                if (!this.player || !this.player[e]) {
                    var r = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c – ");
                    return this.player ? this.player[e] || (r += "The method was not available") : r += "The player was not available", console.warn(r, "font-weight: bold", ""), null
                }
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return (t = this.player)[e].apply(t, o)
            }, t.isMediaStream = function(e) {
                return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream
            }, t.isBlobUrl = function(e) {
                return /^blob:/.test(e)
            }, t.supportsWebKitPresentationMode = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video"),
                    t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t
            };
            var n = a(r(60824)),
                o = a(r(29830));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var u = /[?&#](?:start|t)=([0-9hms]+)/,
                c = /[?&#]end=([0-9hms]+)/,
                s = /(\d+)(h|m|s)/g,
                f = /^\d+$/;

            function p(e, t) {
                if (!(e instanceof Array)) {
                    var r = e.match(t);
                    if (r) {
                        var n = r[1];
                        if (n.match(s)) return function(e) {
                            var t = 0,
                                r = s.exec(e);
                            for (; null !== r;) {
                                var n = i(r, 3),
                                    o = n[1],
                                    a = n[2];
                                "h" === a && (t += 60 * parseInt(o, 10) * 60), "m" === a && (t += 60 * parseInt(o, 10)), "s" === a && (t += parseInt(o, 10)), r = s.exec(e)
                            }
                            return t
                        }(n);
                        if (f.test(n)) return parseInt(n)
                    }
                }
            }

            function d(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            var y = {}
        },
        50617: function(e, t, r) {
            r(42045);
            var n = "undefined" != typeof Element,
                o = "function" == typeof Map,
                a = "function" == typeof Set,
                i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function l(e, t) {
                if (e === t) return !0;
                if (e && t && "object" == typeof e && "object" == typeof t) {
                    if (e.constructor !== t.constructor) return !1;
                    var r, u, c, s;
                    if (Array.isArray(e)) {
                        if ((r = e.length) != t.length) return !1;
                        for (u = r; 0 != u--;)
                            if (!l(e[u], t[u])) return !1;
                        return !0
                    }
                    if (o && e instanceof Map && t instanceof Map) {
                        if (e.size !== t.size) return !1;
                        for (s = e.entries(); !(u = s.next()).done;)
                            if (!t.has(u.value[0])) return !1;
                        for (s = e.entries(); !(u = s.next()).done;)
                            if (!l(u.value[1], t.get(u.value[0]))) return !1;
                        return !0
                    }
                    if (a && e instanceof Set && t instanceof Set) {
                        if (e.size !== t.size) return !1;
                        for (s = e.entries(); !(u = s.next()).done;)
                            if (!t.has(u.value[0])) return !1;
                        return !0
                    }
                    if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
                        if ((r = e.length) != t.length) return !1;
                        for (u = r; 0 != u--;)
                            if (e[u] !== t[u]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
                    if ((r = (c = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (u = r; 0 != u--;)
                        if (!Object.prototype.hasOwnProperty.call(t, c[u])) return !1;
                    if (n && e instanceof Element) return !1;
                    for (u = r; 0 != u--;)
                        if (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u] || !e.$$typeof) && !l(e[c[u]], t[c[u]])) return !1;
                    return !0
                }
                return e != e && t != t
            }
            e.exports = function(e, t) {
                try {
                    return l(e, t)
                } catch (r) {
                    if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw r
                }
            }
        },
        37582: function(e, t, r) {
            var n = r(92800).e,
                o = r(41735).Z;
            e.exports = n([{
                key: "wistia",
                canPlay: o.canPlay,
                lazyPlayer: o
            }])
        },
        76742: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return S
                }
            });
            var n = r(99720),
                o = r(61699),
                a = r(32735),
                i = r(16568),
                l = r(2011),
                u = r(22642),
                c = r(82502);
            var s = c.Kq.getValue,
                f = l._1(u.ivY, {
                    hd: u.PS9("inlineRow"),
                    tl: {
                        hd: u.jfB("flex"),
                        tl: 0
                    }
                });

            function p(e, t, r) {
                return l._1(u.ivY, {
                    hd: u.oIA(c.pd(s(r))),
                    tl: {
                        hd: u.BC2(c.pU.tablet, {
                            hd: u.oIA(c.pd(s(t))),
                            tl: 0
                        }),
                        tl: {
                            hd: u.BC2(c.pU.mobile, {
                                hd: u.oIA(c.pd(s(e))),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                })
            }

            function d(e, t, r) {
                return l._1(u.ivY, {
                    hd: u.E9m(c.pd(s(r))),
                    tl: {
                        hd: u.BC2(c.pU.tablet, {
                            hd: u.E9m(c.pd(s(t))),
                            tl: 0
                        }),
                        tl: {
                            hd: u.BC2(c.pU.mobile, {
                                hd: u.E9m(c.pd(s(e))),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                })
            }
            var y = l._1(u.ivY, {
                hd: u.PS9("inlineRowWrap"),
                tl: {
                    hd: u.WOS("wrap"),
                    tl: 0
                }
            });

            function h(e) {
                return l._1(u.ivY, {
                    hd: u.PS9("inlineRowAlign"),
                    tl: {
                        hd: u.KlP("right" === e ? "flexEnd" : "center" === e ? "center" : "spaceBetween" === e ? "spaceBetween" : "flexStart"),
                        tl: 0
                    }
                })
            }

            function v(e) {
                return l._1(u.ivY, {
                    hd: u.PS9("inlineRowVAlign"),
                    tl: {
                        hd: u.cq$("stretch" === e ? "stretch" : "top" === e ? "flexStart" : "center" === e ? "center" : "baseline" === e ? "baseline" : "flexEnd"),
                        tl: 0
                    }
                })
            }
            var b = l._1(u.ivY, {
                    hd: u.PS9("inlineRowRelativePosition"),
                    tl: {
                        hd: u.FKU("relative"),
                        tl: 0
                    }
                }),
                m = l._1(u.ivY, {
                    hd: u.PS9("boxStretchDesktop"),
                    tl: 0
                }),
                g = l._1(u.ivY, {
                    hd: u.PS9("boxStretchMobile"),
                    tl: 0
                }),
                w = l._1(u.ivY, {
                    hd: u.PS9("box"),
                    tl: {
                        hd: u.jfB("flex"),
                        tl: {
                            hd: u.nZE("& > *", {
                                hd: u.L9u(1, 1, "auto"),
                                tl: 0
                            }),
                            tl: {
                                hd: u.Ka3(m)({
                                    hd: u.H78(1),
                                    tl: 0
                                }),
                                tl: {
                                    hd: u.Ka3(g)({
                                        hd: u.BC2(c.pU.mobile, {
                                            hd: u.H78(1),
                                            tl: 0
                                        }),
                                        tl: 0
                                    }),
                                    tl: 0
                                }
                            }
                        }
                    }
                });

            function P(e, t, r) {
                return l._1(u.ivY, {
                    hd: u.oIA(s(r)),
                    tl: {
                        hd: u.BC2(c.pU.tablet, {
                            hd: u.oIA(s(t)),
                            tl: 0
                        }),
                        tl: {
                            hd: u.BC2(c.pU.mobile, {
                                hd: u.oIA(s(e)),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                })
            }

            function O(e, t, r) {
                return l._1(u.ivY, {
                    hd: u.E9m(s(r)),
                    tl: {
                        hd: u.BC2(c.pU.tablet, {
                            hd: u.E9m(s(t)),
                            tl: 0
                        }),
                        tl: {
                            hd: u.BC2(c.pU.mobile, {
                                hd: u.E9m(s(e)),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                })
            }
            var _ = r(55056);
            var S = function(e) {
                var t = e.gap,
                    r = e.vGap,
                    l = e.align,
                    u = e.vAlign,
                    c = e.relativePosition,
                    s = e.stretchChildren,
                    S = e.wrapChildren,
                    k = e.children,
                    j = void 0 !== t ? t : {
                        TAG: 0,
                        _0: "none"
                    },
                    E = void 0 !== r ? r : {
                        TAG: 0,
                        _0: "sm"
                    },
                    A = void 0 !== c && c,
                    T = void 0 !== s ? s : {
                        TAG: 0,
                        _0: !1
                    },
                    R = void 0 === S || S,
                    C = _.$S(T),
                    I = C[1],
                    M = C[0],
                    D = _.Jn(j),
                    L = D[2],
                    U = D[1],
                    x = D[0],
                    N = _.Jn(E),
                    H = N[2],
                    V = N[1],
                    B = N[0];
                return a.createElement("div", {
                    className: o.RT(f, o.RT(p(x, U, L), o.RT(d(B, V, H), o.RT(n.rA(y, R), o.RT(n.e8(l, h), o.RT(n.e8(u, v), n.rA(b, A)))))))
                }, a.Children.map(k, (function(e, t) {
                    return i.hZ(e, null) ? null : a.createElement("div", {
                        key: String(t),
                        className: o.RT(w, o.RT(P(x, U, L), o.RT(O(B, V, H), o.RT(n.rA(m, I), n.rA(g, M)))))
                    }, e)
                })))
            }
        },
        42219: function(e, t, r) {
            "use strict";
            r.d(t, {
                Sy: function() {
                    return b
                }
            });
            var n = r(99720),
                o = r(2011),
                a = r(32735),
                i = r(71544),
                l = r(26402),
                u = r(22642),
                c = r(82502),
                s = o._1(u.ivY, {
                    hd: u.PS9("player"),
                    tl: {
                        hd: u.FKU("relative"),
                        tl: {
                            hd: u.bf$({
                                NAME: "percent",
                                VAL: 100
                            }),
                            tl: {
                                hd: u.EtG({
                                    NAME: "percent",
                                    VAL: 56.25
                                }),
                                tl: {
                                    hd: u.nZE("> div", {
                                        hd: u.FKU("absolute"),
                                        tl: {
                                            hd: u.wey("zero"),
                                            tl: {
                                                hd: u.t$v("zero"),
                                                tl: 0
                                            }
                                        }
                                    }),
                                    tl: 0
                                }
                            }
                        }
                    }
                }),
                f = o._1(u.ivY, {
                    hd: u.PS9("preview"),
                    tl: {
                        hd: u.jfB("flex"),
                        tl: {
                            hd: u.cq$("center"),
                            tl: {
                                hd: u.KlP("center"),
                                tl: {
                                    hd: u.FKU("absolute"),
                                    tl: {
                                        hd: u.wey("zero"),
                                        tl: {
                                            hd: u.F2z("zero"),
                                            tl: {
                                                hd: u.IaC("zero"),
                                                tl: {
                                                    hd: u.t$v("zero"),
                                                    tl: {
                                                        hd: u.G4q("cover"),
                                                        tl: {
                                                            hd: u.ocY("pointer"),
                                                            tl: 0
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            var p = o._1(u.ivY, {
                    hd: u.PS9("button"),
                    tl: {
                        hd: u.Czw(c.Il.Background.ghost),
                        tl: {
                            hd: u.Nv8({
                                NAME: "px",
                                VAL: 42
                            }),
                            tl: {
                                hd: u.d8w("nowrap"),
                                tl: {
                                    hd: u._JM("zero", {
                                        NAME: "px",
                                        VAL: 20
                                    }),
                                    tl: {
                                        hd: u.Ue2("bold"),
                                        tl: {
                                            hd: u.nZE("." + f + ":hover &", {
                                                hd: u.Czw(c.Il.Background.accent),
                                                tl: 0
                                            }),
                                            tl: 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                }),
                d = o._1(u.ivY, {
                    hd: u.PS9("play"),
                    tl: {
                        hd: u.JBY({
                            NAME: "px",
                            VAL: 15
                        }),
                        tl: 0
                    }
                }),
                y = r(16135),
                h = r(37582),
                v = r.n(h);
            var b = function(e) {
                var t, r = e.id,
                    c = e.preview,
                    h = e.inView,
                    b = e.autoPlay,
                    m = e.controls,
                    g = e.volume,
                    w = e.muted,
                    P = void 0 === h || h,
                    O = void 0 !== b && b,
                    _ = void 0 !== m && m,
                    S = a.useState((function() {
                        return P
                    })),
                    k = S[1],
                    j = a.useState((function() {
                        return !1
                    })),
                    E = j[1];
                if (a.useEffect((function() {
                        o._1(k, (function(e) {
                            return P
                        })), P || o._1(E, (function(e) {
                            return !1
                        }))
                    }), [P]), j[0] || O) {
                    var A = {
                        url: "https://fast.wistia.com/embed/" + r,
                        playing: S[0],
                        width: "100%",
                        height: "100%",
                        controls: _
                    };
                    void 0 !== g && (A.volume = l.xt(g)), void 0 !== w && (A.muted = l.xt(w)), t = a.createElement(v(), A)
                } else t = y.k7(c, null, (function(e) {
                    return a.createElement("div", {
                        className: n.Sy({
                            hd: f,
                            tl: {
                                hd: (t = e, o._1(u.ivY, {
                                    hd: u.PS9("previewUrl"),
                                    tl: {
                                        hd: u.NxW({
                                            NAME: "url",
                                            VAL: t
                                        }),
                                        tl: 0
                                    }
                                })),
                                tl: 0
                            }
                        }),
                        onClick: function(e) {
                            return o._1(E, (function(e) {
                                return !0
                            }))
                        }
                    }, a.createElement("div", {
                        className: p
                    }, a.createElement("span", {
                        className: d
                    }, i.s("▶ ")), i.s("Watch demo")));
                    var t
                }));
                return a.createElement("div", {
                    className: s
                }, t)
            }
        }
    }
]);