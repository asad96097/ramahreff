"use strict";
(self.webpackChunk_ahrefs_internal_static = self.webpackChunk_ahrefs_internal_static || []).push([
    [2840], {
        23441: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return v
                }
            });
            var r = n(32735);

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }
            var l = {
                    preventDefaultTouchmoveEvent: !1,
                    delta: 10,
                    rotationAngle: 0,
                    trackMouse: !1,
                    trackTouch: !0
                },
                i = {
                    xy: [0, 0],
                    swiping: !1,
                    eventData: void 0,
                    start: void 0
                },
                c = "mousemove",
                d = "mouseup";

            function o(e, t) {
                if (0 === t) return e;
                var n = Math.PI / 180 * t;
                return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)]
            }

            function u(e, t) {
                var n = function(t) {
                        t.touches && t.touches.length > 1 || e((function(e, n) {
                            n.trackMouse && (document.addEventListener(c, r), document.addEventListener(d, s));
                            var l = t.touches ? t.touches[0] : t,
                                u = o([l.clientX, l.clientY], n.rotationAngle);
                            return a({}, e, i, {
                                eventData: {
                                    initial: [].concat(u),
                                    first: !0
                                },
                                xy: u,
                                start: t.timeStamp || 0
                            })
                        }))
                    },
                    r = function(t) {
                        e((function(e, n) {
                            if (!e.xy[0] || !e.xy[1] || t.touches && t.touches.length > 1) return e;
                            var r = t.touches ? t.touches[0] : t,
                                l = o([r.clientX, r.clientY], n.rotationAngle),
                                i = l[0],
                                c = l[1],
                                d = e.xy[0] - i,
                                u = e.xy[1] - c,
                                s = Math.abs(d),
                                h = Math.abs(u),
                                v = (t.timeStamp || 0) - e.start,
                                f = Math.sqrt(s * s + h * h) / (v || 1);
                            if (s < n.delta && h < n.delta && !e.swiping) return e;
                            var m = function(e, t, n, r) {
                                    return e > t ? n > 0 ? "Left" : "Right" : r > 0 ? "Up" : "Down"
                                }(s, h, d, u),
                                A = a({}, e.eventData, {
                                    event: t,
                                    absX: s,
                                    absY: h,
                                    deltaX: d,
                                    deltaY: u,
                                    velocity: f,
                                    dir: m
                                });
                            n.onSwiping && n.onSwiping(A);
                            var M = !1;
                            return (n.onSwiping || n.onSwiped || n["onSwiped" + m]) && (M = !0), M && n.preventDefaultTouchmoveEvent && n.trackTouch && t.cancelable && t.preventDefault(), a({}, e, {
                                eventData: a({}, A, {
                                    first: !1
                                }),
                                swiping: !0
                            })
                        }))
                    },
                    l = function(t) {
                        e((function(e, n) {
                            var r;
                            return e.swiping && (r = a({}, e.eventData, {
                                event: t
                            }), n.onSwiped && n.onSwiped(r), n["onSwiped" + r.dir] && n["onSwiped" + r.dir](r)), a({}, e, i, {
                                eventData: r
                            })
                        }))
                    },
                    u = function() {
                        document.removeEventListener(c, r), document.removeEventListener(d, s)
                    },
                    s = function(e) {
                        u(), l(e)
                    },
                    h = function(e) {
                        if (e && e.addEventListener) {
                            var t = [
                                ["touchstart", n],
                                ["touchmove", r],
                                ["touchend", l]
                            ];
                            return t.forEach((function(t) {
                                    var n = t[0],
                                        r = t[1];
                                    return e.addEventListener(n, r)
                                })),
                                function() {
                                    return t.forEach((function(t) {
                                        var n = t[0],
                                            r = t[1];
                                        return e.removeEventListener(n, r)
                                    }))
                                }
                        }
                    },
                    v = {
                        ref: function(t) {
                            null !== t && e((function(e, n) {
                                if (e.el === t) return e;
                                var r = {};
                                return e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), r.cleanUpTouch = null), n.trackTouch && t && (r.cleanUpTouch = h(t)), a({}, e, {
                                    el: t
                                }, r)
                            }))
                        }
                    };
                return t.trackMouse && (v.onMouseDown = n), [v, h]
            }

            function s(e, t, n) {
                var r = {};
                return !t.trackTouch && e.cleanUpTouch ? (e.cleanUpTouch(), r.cleanUpTouch = null) : t.trackTouch && !e.cleanUpTouch && e.el && (r.cleanUpTouch = n(e.el)), a({}, e, r)
            }
            var h = function(e) {
                var t, n;

                function l(t) {
                    var n;
                    return (n = e.call(this, t) || this)._set = function(e) {
                        n.transientState = e(n.transientState, n.props)
                    }, n.transientState = a({}, i, {
                        type: "class"
                    }), n
                }
                return n = e, (t = l).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, l.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.style,
                        l = e.nodeName,
                        i = void 0 === l ? "div" : l,
                        c = e.innerRef,
                        d = e.children,
                        o = e.trackMouse,
                        h = u(this._set, {
                            trackMouse: o
                        }),
                        v = h[0],
                        f = h[1];
                    this.transientState = s(this.transientState, this.props, f);
                    var m = c ? function(e) {
                        return c(e), v.ref(e)
                    } : v.ref;
                    return r.createElement(i, a({}, v, {
                        className: t,
                        style: n,
                        ref: m
                    }), d)
                }, l
            }(r.PureComponent);
            h.defaultProps = l;
            var v = function(e) {
                var t = e.onSwipedLeft,
                    n = e.onSwipedRight,
                    a = e.children;
                return r.createElement(h, {
                    delta: 10,
                    preventDefaultTouchmoveEvent: !0,
                    trackMouse: !0,
                    onSwipedLeft: t,
                    onSwipedRight: n,
                    children: a
                })
            }
        },
        3565: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return Y
                }
            });
            var r = n(99720),
                a = n(61699),
                l = n(32735),
                i = n(2011),
                c = n(22642),
                d = n(82502),
                o = n(52273);

            function u(e) {
                switch (e) {
                    case 0:
                    case 2:
                    case 4:
                    case 8:
                    case 10:
                    case 12:
                    case 13:
                        return 0;
                    case 1:
                    case 3:
                    case 5:
                    case 6:
                    case 7:
                    case 9:
                    case 11:
                    case 14:
                    case 15:
                        return 1
                }
            }

            function s(e, t) {
                return e >= 5 ? 13 === e || 12 === e ? t : "zero" : e >= 2 ? t : "zero"
            }

            function h(e) {
                switch (e) {
                    case 0:
                        return "zero";
                    case 1:
                        return d.$u.px24;
                    case 2:
                        return {
                            NAME: "px",
                            VAL: 32
                        };
                    case 3:
                        return {
                            NAME: "px",
                            VAL: 64
                        };
                    case 4:
                        return {
                            NAME: "px",
                            VAL: 96
                        };
                    case 5:
                        return {
                            NAME: "px",
                            VAL: 128
                        };
                    case 6:
                        return {
                            NAME: "px",
                            VAL: 256
                        }
                }
            }
            var v = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.Ohi(0),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.Ohi(1),
                            tl: 0
                        }],
                        tl: 0
                    }
                }),
                f = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.Ohi(1),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.Ohi(0),
                            tl: 0
                        }],
                        tl: 0
                    }
                });

            function m(e) {
                return i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "translateY",
                            VAL: h(e)
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "translateY",
                                VAL: "zero"
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                })
            }

            function A(e) {
                return i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "translateY",
                            VAL: "zero"
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "translateY",
                                VAL: d.pd(h(e))
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                })
            }

            function M(e) {
                return i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "translateY",
                            VAL: "zero"
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "translateY",
                                VAL: h(e)
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                })
            }

            function p(e) {
                return i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "translateY",
                            VAL: d.pd(h(e))
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "translateY",
                                VAL: "zero"
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                })
            }
            var E = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "translateX",
                            VAL: "zero"
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "translateX",
                                VAL: {
                                    NAME: "px",
                                    VAL: 150
                                }
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                }),
                g = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "scale",
                            VAL: [.8, .8]
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "scale",
                                VAL: [1, 1]
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                }),
                T = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "scale",
                            VAL: [1.2, 1.2]
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "scale",
                                VAL: [1, 1]
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                }),
                N = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "scale",
                            VAL: [1, 1]
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "scale",
                                VAL: [1.2, 1.2]
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                }),
                _ = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs({
                            NAME: "scale",
                            VAL: [1, 1]
                        }),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs({
                                NAME: "scale",
                                VAL: [.8, .8]
                            }),
                            tl: 0
                        }],
                        tl: 0
                    }
                }),
                S = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs(c.iWO({
                            NAME: "percent",
                            VAL: 100
                        })),
                        tl: {
                            hd: c.Ohi(1),
                            tl: 0
                        }
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs(c.iWO("zero")),
                            tl: {
                                hd: c.Ohi(1),
                                tl: 0
                            }
                        }],
                        tl: 0
                    }
                }),
                y = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs(c.iWO(d.pd({
                            NAME: "percent",
                            VAL: 100
                        }))),
                        tl: {
                            hd: c.Ohi(1),
                            tl: 0
                        }
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs(c.iWO("zero")),
                            tl: {
                                hd: c.Ohi(1),
                                tl: 0
                            }
                        }],
                        tl: 0
                    }
                }),
                L = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs(c.iWO("zero")),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs(c.iWO(d.pd({
                                NAME: "percent",
                                VAL: 100
                            }))),
                            tl: 0
                        }],
                        tl: 0
                    }
                }),
                D = i._1(c.F4b, {
                    hd: [0, {
                        hd: c.vs(c.iWO("zero")),
                        tl: 0
                    }],
                    tl: {
                        hd: [100, {
                            hd: c.vs(c.iWO({
                                NAME: "percent",
                                VAL: 100
                            })),
                            tl: 0
                        }],
                        tl: 0
                    }
                });

            function b(e, t, n, r) {
                return o.fwF.shorthand(t, n, "normal", function(e) {
                    switch (e) {
                        case 0:
                            return d.FK.easing;
                        case 1:
                            return d.FK.slowDown;
                        case 2:
                            return d.FK.accelerate;
                        case 3:
                            return d.FK.back
                    }
                }(r), "forwards", "running", {
                    NAME: "count",
                    VAL: 1
                }, e)
            }

            function w(e, t, n, r, a) {
                switch (e) {
                    case 0:
                        return {
                            hd: b(v, t, n, a),
                            tl: 0
                        };
                    case 1:
                        return {
                            hd: b(f, t, n, a),
                            tl: 0
                        };
                    case 2:
                        return {
                            hd: b(v, t, n, a),
                            tl: {
                                hd: b(m(r), t, n, a),
                                tl: 0
                            }
                        };
                    case 3:
                        return {
                            hd: b(m(r), t, n, a),
                            tl: 0
                        };
                    case 4:
                        return {
                            hd: b(v, t, n, a),
                            tl: {
                                hd: b(p(r), t, n, a),
                                tl: 0
                            }
                        };
                    case 5:
                        return {
                            hd: b(f, t, n, a),
                            tl: {
                                hd: b(A(r), t, n, a),
                                tl: 0
                            }
                        };
                    case 6:
                        return {
                            hd: b(f, t, n, a),
                            tl: {
                                hd: b(M(r), t, n, a),
                                tl: 0
                            }
                        };
                    case 7:
                        return {
                            hd: b(E, t, n, a),
                            tl: 0
                        };
                    case 8:
                        return {
                            hd: b(v, t, n, a),
                            tl: {
                                hd: b(g, t, n, a),
                                tl: 0
                            }
                        };
                    case 9:
                        return {
                            hd: b(f, t, n, a),
                            tl: {
                                hd: b(N, t, n, a),
                                tl: 0
                            }
                        };
                    case 10:
                        return {
                            hd: b(v, t, n, a),
                            tl: {
                                hd: b(T, t, n, a),
                                tl: 0
                            }
                        };
                    case 11:
                        return {
                            hd: b(f, t, n, a),
                            tl: {
                                hd: b(_, t, n, a),
                                tl: 0
                            }
                        };
                    case 12:
                        return {
                            hd: b(S, t, n, a),
                            tl: 0
                        };
                    case 13:
                        return {
                            hd: b(y, t, n, a),
                            tl: 0
                        };
                    case 14:
                        return {
                            hd: b(L, t, n, a),
                            tl: 0
                        };
                    case 15:
                        return {
                            hd: b(D, t, n, a),
                            tl: 0
                        }
                }
            }
            var x = i._1(c.ivY, {
                hd: c.PS9("boxVisible"),
                tl: 0
            });

            function z(e, t, n, r, a, l) {
                return i._1(c.ivY, {
                    hd: c.Ohi(u(t)),
                    tl: {
                        hd: c.vs({
                            NAME: "translateY",
                            VAL: s(t, h(r))
                        }),
                        tl: {
                            hd: c.Ka3(x)({
                                hd: l ? d.Hl({
                                    hd: c.sFT(w(t, n, e, r, a)),
                                    tl: 0
                                }) : c.sFT(w(t, n, e, r, a)),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                })
            }
            var O = i._1(c.ivY, {
                hd: c.PS9("boxOverflow"),
                tl: {
                    hd: c.txR("hidden"),
                    tl: 0
                }
            });
            var Y = function(e) {
                var t = e.isVisible,
                    n = e.delay,
                    i = e.animation,
                    c = e.duration,
                    d = e.timingFunction,
                    o = e.verticalShift,
                    u = e.waitForFontsLoading,
                    s = e.children,
                    h = void 0 !== n ? n : 0,
                    v = void 0 !== i ? i : 2,
                    f = void 0 !== c ? c : 800,
                    m = void 0 !== d ? d : 0,
                    A = void 0 !== o ? o : 2,
                    M = void 0 === u || u,
                    p = l.createElement("div", {
                        className: a.RT(z(h, v, f, A, m, M), r.rA(x, t))
                    }, s);
                return v >= 12 ? l.createElement("div", {
                    className: O
                }, p) : p
            }
        },
        88489: function(e, t, n) {
            n.d(t, {
                Sy: function() {
                    return L
                }
            });
            var r = n(99720),
                a = n(14971),
                l = n(61699),
                i = n(32735),
                c = n(43848),
                d = n(36742),
                o = n(99190),
                u = n(2242),
                s = n(90997),
                h = n(76742),
                v = n(53774),
                f = n(70410),
                m = n(2011),
                A = n(22642),
                M = n(82502),
                p = n(52273),
                E = m._1(A.ivY, {
                    hd: A.PS9("logosRow"),
                    tl: {
                        hd: A.jfB("flex"),
                        tl: {
                            hd: A.txR("hidden"),
                            tl: {
                                hd: A.KlP("spaceBetween"),
                                tl: {
                                    hd: A.cq$("center"),
                                    tl: 0
                                }
                            }
                        }
                    }
                }),
                g = m._1(A.ivY, {
                    hd: A.PS9("animationBoxVisible"),
                    tl: 0
                }),
                T = m._1(A.ivY, {
                    hd: A.PS9("logos"),
                    tl: {
                        hd: A.FKU("relative"),
                        tl: 0
                    }
                }),
                N = m._1(A.ivY, {
                    hd: A.PS9("logosUnderlayer"),
                    tl: {
                        hd: A.FKU("absolute"),
                        tl: {
                            hd: A.t$v("zero"),
                            tl: {
                                hd: A.wey("zero"),
                                tl: {
                                    hd: A.F2z("zero"),
                                    tl: 0
                                }
                            }
                        }
                    }
                }),
                _ = m._1(A.F4b, {
                    hd: [0, {
                        hd: A.WDY("visible"),
                        tl: {
                            hd: A.vs({
                                NAME: "translateY",
                                VAL: M.$u.px32
                            }),
                            tl: 0
                        }
                    }],
                    tl: {
                        hd: [5, {
                            hd: A.vs({
                                NAME: "translateY",
                                VAL: "zero"
                            }),
                            tl: 0
                        }],
                        tl: {
                            hd: [50, {
                                hd: A.vs({
                                    NAME: "translateY",
                                    VAL: "zero"
                                }),
                                tl: 0
                            }],
                            tl: {
                                hd: [55, {
                                    hd: A.WDY("hidden"),
                                    tl: {
                                        hd: A.vs({
                                            NAME: "translateY",
                                            VAL: M.pd(M.$u.px32)
                                        }),
                                        tl: 0
                                    }
                                }],
                                tl: {
                                    hd: [100, {
                                        hd: A.WDY("hidden"),
                                        tl: {
                                            hd: A.vs({
                                                NAME: "translateY",
                                                VAL: M.pd(M.$u.px32)
                                            }),
                                            tl: 0
                                        }
                                    }],
                                    tl: 0
                                }
                            }
                        }
                    }
                });

            function S(e) {
                return m._1(A.ivY, {
                    hd: A.PS9("animationBox"),
                    tl: {
                        hd: A.vs({
                            NAME: "translateY",
                            VAL: M.$u.px32
                        }),
                        tl: {
                            hd: A.Ka3(g)({
                                hd: M.Hl({
                                    hd: A.sFT({
                                        hd: p.fwF.shorthand(8e3, e, "normal", "easeInOut", "forwards", "running", "infinite", _),
                                        tl: 0
                                    }),
                                    tl: 0
                                }),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                })
            }

            function y(e) {
                var t = e.index,
                    n = e.svg,
                    a = e.isVisible,
                    c = e.startFrom + Math.imul(t, 100) | 0;
                return i.createElement("div", {
                    className: l.RT(S(c), r.rA(g, a))
                }, i.createElement(v.TR.make, {
                    svg: n
                }))
            }
            var L = function(e) {
                var t = e.captionColor,
                    n = e.captionAlign,
                    r = void 0 !== t ? t : "invertedSecondary",
                    l = void 0 !== n ? n : {
                        TAG: 0,
                        _0: "left"
                    },
                    m = s.dp(v.kf);
                return i.createElement(u.S, {
                    color: "vsDarkBlue",
                    verticalPadding: {
                        TAG: 1,
                        _0: ["extraSmall", "medium"],
                        _1: ["medium", "extraMedium"]
                    },
                    holderHorizontalPadding: {
                        TAG: 2,
                        _0: ["small", "small"],
                        _1: ["medium", "medium"],
                        _2: ["large", "large"]
                    },
                    noSidePadding: !0,
                    children: i.createElement(d.S, {
                        gap: {
                            TAG: 0,
                            _0: "lg"
                        },
                        children: null
                    }, i.createElement(o.S, {
                        screens: {
                            hd: 2,
                            tl: 0
                        },
                        children: i.createElement("div", {
                            className: T
                        }, i.createElement(f.S, {
                            children: function(e) {
                                return i.createElement("div", {
                                    className: E
                                }, a.pb(s.Su((t = m / 2 | 0, n = v.kf, s.tP(0, t, n)), (function(t, n) {
                                    return i.createElement(y, {
                                        index: t,
                                        svg: n,
                                        isVisible: e,
                                        startFrom: 0,
                                        key: String(t)
                                    })
                                }))));
                                var t, n
                            }
                        }), i.createElement("div", {
                            className: N
                        }, i.createElement(f.S, {
                            children: function(e) {
                                return i.createElement("div", {
                                    className: E
                                }, a.pb(s.Su((t = m / 2 | 0, function(e) {
                                    var n = v.kf;
                                    return s.tP(t, e, n)
                                })(m), (function(t, n) {
                                    return i.createElement(y, {
                                        index: t,
                                        svg: n,
                                        isVisible: e,
                                        startFrom: 4e3,
                                        key: String(t)
                                    })
                                }))));
                                var t
                            }
                        })))
                    }), i.createElement(o.S, {
                        screens: {
                            hd: 1,
                            tl: {
                                hd: 0,
                                tl: 0
                            }
                        },
                        children: i.createElement(h.S, {
                            gap: {
                                TAG: 0,
                                _0: "sm"
                            },
                            align: "center",
                            vAlign: "center",
                            children: a.pb(s.Su(v.kf, (function(e, t) {
                                return i.createElement(v.TR.make, {
                                    svg: t,
                                    key: String(e)
                                })
                            })))
                        })
                    }), i.createElement(c.FE.P.make, {
                        size: {
                            TAG: 0,
                            _0: 3
                        },
                        color: "invertedSecondary",
                        fontWeight: {
                            TAG: 0,
                            _0: "normal"
                        },
                        children: i.createElement(v.YS.make, {
                            textColor: r,
                            textAlign: l
                        })
                    }))
                })
            }
        },
        86447: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return c
                }
            });
            var r = n(99720),
                a = n(32735),
                l = n(99190),
                i = n(21742);
            var c = function(e) {
                var t = e.symbol,
                    n = e.fontFamily,
                    c = e.fontWeight,
                    d = e.fontSize,
                    o = e.lineHeight,
                    u = e.color,
                    s = e.iconContainerWidthPx,
                    h = e.hiddenOnScreen,
                    v = void 0 !== u ? u : "orange",
                    f = a.createElement("span", {
                        className: r.Sy({
                            hd: i.qv,
                            tl: {
                                hd: i.e2(v),
                                tl: {
                                    hd: i.wj(t),
                                    tl: {
                                        hd: r.e8(s, i.Sv),
                                        tl: {
                                            hd: r.e8(n, i.wr),
                                            tl: {
                                                hd: r.e8(c, i.KY),
                                                tl: {
                                                    hd: r.e8(d, i.O$),
                                                    tl: {
                                                        hd: r.e8(o, i.Z2),
                                                        tl: 0
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    });
                return void 0 !== h ? a.createElement(l.S, {
                    screens: h,
                    wrapWithDiv: !1,
                    children: f
                }) : f
            }
        },
        48822: function(e, t, n) {
            n.d(t, {
                Sy: function() {
                    return h
                }
            });
            var r = n(61699),
                a = n(32735),
                l = n(4812),
                i = n(21296),
                c = n(26402),
                d = n(2011),
                o = n(22642),
                u = n(82502),
                s = d._1(o.ivY, {
                    hd: o.PS9("unpaddedButton"),
                    tl: {
                        hd: o.o3D("zero"),
                        tl: {
                            hd: o.$uf("none"),
                            tl: {
                                hd: o.J4J("zero"),
                                tl: {
                                    hd: o.Czw("transparent"),
                                    tl: {
                                        hd: o.ocY("pointer"),
                                        tl: {
                                            hd: o.JBY("inherit_"),
                                            tl: {
                                                hd: o.Nv8("inherit_"),
                                                tl: {
                                                    hd: o.MrM({
                                                        hd: o.$_Y(u.Il.$$Text.accent),
                                                        tl: 0
                                                    }),
                                                    tl: {
                                                        hd: o.T_4({
                                                            hd: o.zuB("none"),
                                                            tl: 0
                                                        }),
                                                        tl: {
                                                            hd: o.JUm({
                                                                hd: o.ocY("default"),
                                                                tl: {
                                                                    hd: o.kkJ("none"),
                                                                    tl: 0
                                                                }
                                                            }),
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
            var h = function(e) {
                var t = e.color,
                    n = e.tabIndex,
                    d = e.type_,
                    o = e.disabled,
                    u = e.onClick,
                    h = e.children,
                    v = void 0 !== t ? t : "link",
                    f = void 0 !== d ? d : 1,
                    m = {
                        className: r.RT(s, i.zP(v)),
                        type: l.eH(f)
                    };
                return void 0 !== n && (m.tabIndex = c.xt(n)), void 0 !== o && (m.disabled = c.xt(o)), void 0 !== u && (m.onClick = c.xt(u)), a.createElement("button", m, h)
            }
        },
        17203: function(e, t, n) {
            n.d(t, {
                Sy: function() {
                    return g
                }
            });
            var r = n(14971),
                a = n(2011),
                l = n(32735),
                i = n(43848),
                c = n(36742),
                d = n(16513),
                o = n(70344),
                u = n(3565),
                s = n(16316),
                h = n(2364),
                v = n(46527),
                f = n(97679),
                m = n(35931),
                A = n(75886),
                M = n(33713);

            function p(e) {
                var t, n, a = m.D(void 0);
                if (t = "number" != typeof a && 2 === a.TAG, "number" == typeof a || 2 !== a.TAG) n = null;
                else {
                    var h = a._0.count;
                    n = l.createElement(l.Fragment, void 0, l.createElement(i.Le.Span.make, {
                        display: {
                            TAG: 1,
                            _0: "inline",
                            _1: "block"
                        },
                        fontWeight: {
                            TAG: 0,
                            _0: "bold"
                        },
                        children: null
                    }, r.s(o.J7.format(h)), r.s(" "), l.createElement(A.Sy, {
                        item: {
                            id: "216bb2ee6425cf8d6b2e855d009fcc60",
                            defaultMessage: "{usersCount, plural, zero {user} one {user} other {users}}"
                        },
                        values: {
                            usersCount: h
                        }
                    }), r.s(" ")), l.createElement(i.Le.Span.make, {
                        display: {
                            TAG: 1,
                            _0: "inline",
                            _1: "block"
                        },
                        color: "invertedSecondary",
                        children: l.createElement(A.Sy, {
                            item: {
                                id: "7137452830b2f8ea256122e6863c3904",
                                defaultMessage: "joined{nbsp}Ahrefs in{nbsp}the{nbsp}last 7{nbsp}days"
                            },
                            values: {
                                nbsp: d.vk
                            }
                        })
                    }))
                }
                return l.createElement(u.S, {
                    isVisible: t,
                    delay: 100,
                    duration: 200,
                    children: l.createElement(c.S, {
                        gap: {
                            TAG: 1,
                            _0: "sm",
                            _1: "sm"
                        },
                        vAlign: "center",
                        direction: {
                            TAG: 2,
                            _0: 1,
                            _1: 0,
                            _2: 0
                        },
                        children: null
                    }, l.createElement(s.S, {
                        src: {
                            TAG: 0,
                            _0: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0OCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDIwLjAzODJMNDYuMDYwNiA0LjYyNDJMNDAuODY1OCA1LjYwNTFMNDAuMjQyNCAwTDI5Ljg1MjggMS4zMzEyMUwzMC40NzYyIDYuNTg1OTlMMjUuNjI3NyA3LjIxNjU2TDI2LjI1MTEgMTIuMTIxTDIxLjA1NjMgMTMuMTAxOUwyMC40MzI5IDcuODQ3MTNMMTQuODkxOCA4LjU0Nzc3TDE0LjYxNDcgMy4yOTI5OUw0LjIyNTExIDQuMjczODlMNC44NDg0OCA5LjgwODkyTDAgMTAuNTA5NkwxLjU5MzA3IDI1LjU3MzJMNi43ODc4OCAyNS4yOTNMNy40ODA1MiAzMC41NDc4TDEyLjY3NTMgMjkuODQ3MUwxMy4yOTg3IDM0Ljc1MTZMMTguMTQ3MiAzNC4xMjFMMTguODM5OCAzOS4zNzU4TDI0LjAzNDYgMzkuMDI1NUwyNS4wMDQzIDQ0TDI5Ljg1MjggNDMuMjk5NEwyOS4xNjAyIDM4LjA0NDZMMzQuMzU1IDM3Ljc2NDNMMzMuNzMxNiAzMi4xNTkyTDM4LjU4MDEgMzEuODA4OUwzNy45NTY3IDI2LjU1NDFMNDMuNDk3OCAyNS45MjM2TDQyLjUyODEgMjAuNjY4OEw0OCAyMC4wMzgyWiIgZmlsbD0iI0ZBODUwMSIvPgo8L3N2Zz4K"
                        },
                        width: {
                            hd: 48,
                            tl: 0
                        },
                        height: {
                            hd: 44,
                            tl: 0
                        },
                        noMargin: !0
                    }), l.createElement(M.S, {
                        maxWidth: {
                            TAG: 1,
                            _0: 19,
                            _1: 0
                        },
                        children: n
                    }))
                })
            }

            function E(e) {
                var t = e.ctaAccentTitle,
                    n = e.ctaTitle,
                    c = f.D(void 0)[1];
                return l.createElement(h.S, {
                    layout: {
                        hd: 8,
                        tl: {
                            hd: 1,
                            tl: {
                                hd: 1,
                                tl: 0
                            }
                        }
                    },
                    gap: {
                        TAG: 0,
                        _0: "sm"
                    },
                    children: null
                }, l.createElement(M.S, {
                    maxWidth: {
                        TAG: 2,
                        _0: 8,
                        _1: 8,
                        _2: 15
                    },
                    children: l.createElement(i.Le.Div.make, {
                        color: "primary",
                        children: null
                    }, l.createElement(i.Le.Span.make, {
                        size: {
                            TAG: 0,
                            _0: 13
                        },
                        display: {
                            TAG: 0,
                            _0: "inline"
                        },
                        color: "inverted",
                        fontWeight: {
                            TAG: 0,
                            _0: "bold"
                        },
                        children: a._1(c, t)
                    }), r.s(" "), l.createElement(i.Le.Span.make, {
                        size: {
                            TAG: 0,
                            _0: 13
                        },
                        display: {
                            TAG: 0,
                            _0: "inline"
                        },
                        color: "invertedSecondary",
                        children: a._1(c, n)
                    }))
                }), l.createElement("div", void 0), l.createElement(p, {}))
            }
            var g = function(e) {
                var t = e.ctaAccentTitle,
                    n = e.ctaTitle,
                    r = e.children;
                return l.createElement(v.S, {
                    color: "accent",
                    noSidePadding: !0,
                    maxContentWidth: {
                        TAG: 2,
                        _0: 6,
                        _1: 12,
                        _2: 19
                    },
                    verticalPadding: {
                        TAG: 0,
                        _0: ["large", "large"]
                    },
                    holderHorizontalPadding: {
                        TAG: 2,
                        _0: ["extraLarge", "extraLarge"],
                        _1: ["extraMedium", "extraMedium"],
                        _2: ["none", "none"]
                    },
                    children: l.createElement(c.S, {
                        gap: {
                            TAG: 1,
                            _0: "xl",
                            _1: "xl"
                        },
                        children: null
                    }, l.createElement(E, {
                        ctaAccentTitle: t,
                        ctaTitle: n
                    }), r)
                })
            }
        },
        1546: function(e, t, n) {
            n.d(t, {
                y5: function() {
                    return _
                },
                Sy: function() {
                    return S
                }
            });
            var r = n(14971),
                a = n(2011),
                l = n(53620),
                i = n(32735),
                c = n(97305),
                d = n(43848),
                o = n(4812),
                u = n(86447),
                s = n(26402),
                h = n(16135),
                v = n(2364),
                f = n(97679),
                m = n(17203),
                A = n(42717),
                M = n(75886),
                p = n(33713),
                E = n(22642),
                g = n(82502),
                T = a._1(E.ivY, {
                    hd: E.PS9("webmasterToolsTextWrapper"),
                    tl: {
                        hd: E.BC2(g.pU.mobile, {
                            hd: E.ydu("center"),
                            tl: {
                                hd: E.h9x("zero", "auto"),
                                tl: {
                                    hd: E.kkr({
                                        NAME: "px",
                                        VAL: 240
                                    }),
                                    tl: 0
                                }
                            }
                        }),
                        tl: 0
                    }
                });

            function N(e) {
                var t = f.D(void 0),
                    n = A.D(void 0);
                return i.createElement(p.S, {
                    maxWidth: {
                        TAG: 0,
                        _0: 8
                    },
                    children: i.createElement(v.S, {
                        layout: {
                            hd: 2,
                            tl: {
                                hd: 2,
                                tl: 0
                            }
                        },
                        gap: {
                            TAG: 1,
                            _0: "md2",
                            _1: "lg"
                        },
                        vAlign: 2,
                        children: null
                    }, i.createElement(o.Sy, {
                        href: a._1(n, l.y$.pricing),
                        size: {
                            TAG: 1,
                            _0: "large",
                            _1: "extraLarge"
                        },
                        width: {
                            TAG: 1,
                            _0: 2,
                            _1: 0
                        },
                        children: a._1(t[1], {
                            id: "a4f4c8f552144768091d208661e8979b",
                            defaultMessage: "See pricing"
                        })
                    }), i.createElement("div", {
                        className: T
                    }, i.createElement(p.S, {
                        maxWidth: {
                            TAG: 0,
                            _0: 2
                        },
                        children: i.createElement(d.FE.P.make, {
                            size: {
                                TAG: 0,
                                _0: 3
                            },
                            color: "invertedSecondary",
                            children: i.createElement(M.Sy, {
                                item: {
                                    id: "b4ab25e4fcf924ef72504d348999e976",
                                    defaultMessage: "Or get a free <a>Ahrefs Webmaster Tools</a> account →"
                                },
                                values: {
                                    a: function(e) {
                                        return i.createElement(c.S, {
                                            href: a._1(n, l.y$.webmasterTools),
                                            color: 5,
                                            children: null
                                        }, i.createElement(u.S, {
                                            symbol: " 𝄞",
                                            fontFamily: 1,
                                            color: "white"
                                        }), r.s(e))
                                    }
                                }
                            })
                        })
                    })))
                })
            }
            var _ = {
                make: N
            };
            var S = function(e) {
                var t = e.ctaAccentTitle,
                    n = e.ctaTitle,
                    r = e.crtButtonRef,
                    a = {},
                    l = h.UI(r, (function(e) {
                        return e
                    }));
                return void 0 !== l && (a.ref = s.xt(l)), i.createElement("div", a, i.createElement(m.Sy, {
                    ctaAccentTitle: t,
                    ctaTitle: n,
                    children: i.createElement(N, {})
                }))
            }
        },
        21454: function(e, t, n) {
            n.d(t, {
                hH: function() {
                    return d
                },
                vO: function() {
                    return u
                },
                v_: function() {
                    return o
                }
            });
            var r = n(92674),
                a = n(2011),
                l = n(32735),
                i = n(26402),
                c = n(45213);

            function d(e) {
                return e.getBoundingClientRect().top
            }

            function o(e) {
                var t = r.Z$(e);
                return void 0 !== t ? i.xt(t).getBoundingClientRect().top + window.pageYOffset | 0 : 0
            }

            function u(e) {
                var t = l.useState((function() {
                        return 0
                    })),
                    n = t[1],
                    r = o(e);
                return c.m((function(e) {
                    return a._1(n, (function(t) {
                        return e
                    }))
                })), t[0] - r | 0
            }
        },
        45213: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return l
                }
            });
            var r = n(2011),
                a = n(32735);

            function l(e) {
                a.useEffect((function() {
                    var t = window,
                        n = function(t) {
                            return r._1(e, 0 | window.scrollY)
                        },
                        a = function(e) {
                            requestAnimationFrame(n)
                        };
                    return t.addEventListener("scroll", a),
                        function(e) {
                            t.removeEventListener("scroll", a)
                        }
                }), [])
            }
        },
        35931: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return d
                }
            });
            var r = n(14971),
                a = n(2011),
                l = n(34055),
                i = n(32735),
                c = n(56289);

            function d(e) {
                var t = r.K1(0),
                    n = t[1];
                return i.useEffect((function() {
                    c.Ed(l.Rm(void 0), a.Dm(n))
                }), []), t[0]
            }
        },
        48465: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return M
                }
            });
            var r = n(99720),
                a = n(32735),
                l = n(21454),
                i = n(52926),
                c = n(96558),
                d = n(2011);

            function o(e) {
                return c.jU ? window.innerHeight : 0
            }

            function u(e, t, n) {
                var r, a = (t + n | 0) / (e + n | 0);
                return a < 0 ? 0 : a > 1 ? 1 : (r = a, Math.round(100 * r) / 100)
            }
            var s = n(22642),
                h = n(82502),
                v = n(52273),
                f = d._1(s.ivY, {
                    hd: s.PS9("navigationActive"),
                    tl: 0
                }),
                m = d._1(s.ivY, {
                    hd: s.PS9("navigation"),
                    tl: {
                        hd: s.FKU("fixed"),
                        tl: {
                            hd: s.wey("zero"),
                            tl: {
                                hd: s.F2z("zero"),
                                tl: {
                                    hd: s.W5D(100),
                                    tl: {
                                        hd: s.vs({
                                            NAME: "translateY",
                                            VAL: {
                                                NAME: "percent",
                                                VAL: -100
                                            }
                                        }),
                                        tl: {
                                            hd: s.Ohi(0),
                                            tl: {
                                                hd: s.jfB("flex"),
                                                tl: {
                                                    hd: s.pBE({
                                                        hd: v.uTP.shorthand(300, 0, "ease", "opacity"),
                                                        tl: {
                                                            hd: v.uTP.shorthand(0, 300, "linear", "transform"),
                                                            tl: 0
                                                        }
                                                    }),
                                                    tl: {
                                                        hd: s.Ka3(f)({
                                                            hd: s.Ohi(1),
                                                            tl: {
                                                                hd: s.vs({
                                                                    NAME: "translateY",
                                                                    VAL: "zero"
                                                                }),
                                                                tl: {
                                                                    hd: s.pBE({
                                                                        hd: v.uTP.shorthand(300, 0, "ease", "opacity"),
                                                                        tl: {
                                                                            hd: v.uTP.shorthand(0, 0, "linear", "transform"),
                                                                            tl: 0
                                                                        }
                                                                    }),
                                                                    tl: 0
                                                                }
                                                            }
                                                        }),
                                                        tl: {
                                                            hd: s.BC2(h.pU.mobile, {
                                                                hd: s.jfB("none"),
                                                                tl: 0
                                                            }),
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
                }),
                A = d._1(s.ivY, {
                    hd: s.PS9("startTrialButton"),
                    tl: {
                        hd: s.fSH(h.Zv.md2, h.Zv.lg, "zero", "auto"),
                        tl: 0
                    }
                });
            var M = function(e) {
                var t, n, c, s, h, v = e.showTriggerRef,
                    M = e.hideTriggerRef,
                    p = e.distanceInPxToShow,
                    E = void 0 !== p ? p : 0,
                    g = l.vO(v) > E,
                    T = (t = M, n = 0, c = a.useState((function() {
                        return o()
                    })), s = c[1], h = u(n, l.vO(t), c[0]), a.useEffect((function() {
                        var e = window,
                            t = function(e) {
                                return d._1(s, (function(e) {
                                    return o()
                                }))
                            };
                        return e.addEventListener("resize", t),
                            function(n) {
                                e.removeEventListener("resize", t)
                            }
                    }), []), h) > 0;
                return a.createElement("div", {
                    className: r.Sy({
                        hd: m,
                        tl: {
                            hd: r.rA(f, g && !T),
                            tl: 0
                        }
                    })
                }, a.createElement("span", {
                    className: A
                }, a.createElement(i.S, {
                    button: "signUp"
                })))
            }
        }
    }
]);