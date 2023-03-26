"use strict";
(self.webpackChunk_ahrefs_internal_static = self.webpackChunk_ahrefs_internal_static || []).push([
    [925], {
        2364: function(t, e, l) {
            l.d(e, {
                S: function() {
                    return A
                }
            });
            var r = l(99720),
                n = l(32735),
                d = l(55056),
                o = l(2011),
                i = l(22642),
                a = l(90997),
                h = l(82502);

            function c(t) {
                return "desktopColumn" === t ? {
                    NAME: "px",
                    VAL: h.$u.desktopColumnWidth
                } : "desktopColumnThreeFourths" === t ? {
                    NAME: "px",
                    VAL: Math.imul(h.$u.desktopColumnWidth / 4 | 0, 3)
                } : h.Kq.getValue(t)
            }
            var u = o._1(i.ivY, {
                    hd: i.PS9("rowReverseOnMobile"),
                    tl: 0
                }),
                s = o._1(i.ivY, {
                    hd: i.PS9("row"),
                    tl: {
                        hd: i.bf$({
                            NAME: "percent",
                            VAL: 100
                        }),
                        tl: {
                            hd: i.jfB("grid"),
                            tl: {
                                hd: i.BaW("column"),
                                tl: {
                                    hd: i.BC2(h.pU.mobile, {
                                        hd: i.jfB("flex"),
                                        tl: {
                                            hd: i.Me8("column"),
                                            tl: {
                                                hd: i.Ka3(u)({
                                                    hd: i.Me8("columnReverse"),
                                                    tl: 0
                                                }),
                                                tl: 0
                                            }
                                        }
                                    }),
                                    tl: 0
                                }
                            }
                        }
                    }
                });

            function v(t) {
                return a.UI(t, (function(t) {
                    return {
                        NAME: "fr",
                        VAL: t
                    }
                }))
            }

            function f(t, e, l) {
                return o._1(i.ivY, {
                    hd: i.BC2(h.pU.desktop, {
                        hd: i.K$K(v(t)),
                        tl: {
                            hd: i.Ccm(c(e)),
                            tl: 0
                        }
                    }),
                    tl: {
                        hd: i.BC2(h.pU.mobile, {
                            hd: i.nZE("> *:not(:first-child)", {
                                hd: i.E9m(c(l)),
                                tl: 0
                            }),
                            tl: 0
                        }),
                        tl: {
                            hd: i.Ka3(u)({
                                hd: i.BC2(h.pU.mobile, {
                                    hd: i.nZE("> *:not(:first-child)", {
                                        hd: i.E9m("zero"),
                                        tl: {
                                            hd: i.yl7(c(l)),
                                            tl: 0
                                        }
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

            function p(t) {
                var e;
                switch (t) {
                    case 0:
                        e = "start";
                        break;
                    case 1:
                        e = "end_";
                        break;
                    case 2:
                        e = "center"
                }
                return o._1(i.ivY, {
                    hd: i.PS9("rowVAlign"),
                    tl: {
                        hd: i.cq$(e),
                        tl: {
                            hd: i.BC2(h.pU.mobile, {
                                hd: i.cq$("unset"),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                })
            }
            var A = function(t) {
                var e = t.layout,
                    l = t.gap,
                    o = t.vAlign,
                    i = t.reverseOnMobile,
                    a = t.children,
                    h = void 0 !== l ? l : {
                        TAG: 0,
                        _0: "none"
                    },
                    c = void 0 !== i && i,
                    v = d.$S(h);
                return n.createElement("div", {
                    className: r.Sy({
                        hd: s,
                        tl: {
                            hd: r.rA(u, c),
                            tl: {
                                hd: f(e, v[1], v[0]),
                                tl: {
                                    hd: r.e8(o, p),
                                    tl: 0
                                }
                            }
                        }
                    })
                }, a)
            }
        },
        70410: function(t, e, l) {
            l.d(e, {
                S: function() {
                    return o
                }
            });
            var r = l(2011),
                n = l(32735),
                d = l(33962);
            var o = function(t) {
                var e = t.threshold,
                    l = t.children,
                    o = d.D$(e, !0, void 0);
                return n.createElement("div", {
                    ref: o[0]
                }, r._1(l, o[1]))
            }
        },
        74814: function(t, e, l) {
            l.d(e, {
                S: function() {
                    return v
                }
            });
            var r = l(99720),
                n = l(61699),
                d = l(2011),
                o = l(32735),
                i = l(26402),
                a = l(4579),
                h = l(22642),
                c = l(82502),
                u = d._1(h.ivY, {
                    hd: h.PS9("buttonContentCentered"),
                    tl: 0
                }),
                s = d._1(h.ivY, {
                    hd: h.PS9("button"),
                    tl: {
                        hd: h.o3D("zero"),
                        tl: {
                            hd: h.e6$("zero"),
                            tl: {
                                hd: h.J4J("zero"),
                                tl: {
                                    hd: h.Czw("transparent"),
                                    tl: {
                                        hd: h.ocY("pointer"),
                                        tl: {
                                            hd: h.$_Y("currentColor"),
                                            tl: {
                                                hd: h.Ka3(u)({
                                                    hd: h.jfB("flex"),
                                                    tl: {
                                                        hd: h.KlP("center"),
                                                        tl: {
                                                            hd: h.cq$("center"),
                                                            tl: 0
                                                        }
                                                    }
                                                }),
                                                tl: {
                                                    hd: h.MrM({
                                                        hd: h.$_Y(c.Il.$$Text.accent),
                                                        tl: 0
                                                    }),
                                                    tl: {
                                                        hd: h.T_4({
                                                            hd: h.zuB("none"),
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
                });
            var v = function(t) {
                var e = t.inverted,
                    l = t.isContentCentered,
                    h = t.onClick,
                    c = void 0 !== l && l,
                    v = {};
                return void 0 !== e && (v.inverted = i.xt(e)), o.createElement("button", {
                    "aria-label": "Close menu",
                    className: n.RT(s, r.rA(u, c)),
                    onClick: function(t) {
                        return t.preventDefault(), d._1(h, void 0)
                    }
                }, o.createElement(a.S, v))
            }
        },
        86414: function(t, e, l) {
            l.d(e, {
                Sy: function() {
                    return k
                }
            });
            var r = l(99720),
                n = l(14971),
                d = l(61699),
                o = l(2011),
                i = l(72442),
                a = l(32735),
                h = l(26569),
                c = l(71544),
                u = l(74814),
                s = l(42717),
                v = l(89518),
                f = l(22642),
                p = l(82502),
                A = l(52273);

            function m(t) {
                switch (t) {
                    case 0:
                        return p.Il.Background.black;
                    case 1:
                        return p.Il.Background.academy;
                    case 2:
                        return p.Il.Background.whiteGrey;
                    case 3:
                        return p.Il.Background.vsBlue
                }
            }
            var E = o._1(f.ivY, {
                    hd: f.PS9("modalActive"),
                    tl: 0
                }),
                b = o._1(f.ivY, {
                    hd: f.PS9("modalNoPaddingMobile"),
                    tl: 0
                });
            var g = o._1(f.ivY, {
                    hd: f.PS9("closeButton"),
                    tl: {
                        hd: f.FKU("absolute"),
                        tl: {
                            hd: f.wey({
                                NAME: "px",
                                VAL: 32
                            }),
                            tl: {
                                hd: f.F2z({
                                    NAME: "px",
                                    VAL: 40
                                }),
                                tl: {
                                    hd: f.BC2(p.pU.mobile, {
                                        hd: f.wey({
                                            NAME: "px",
                                            VAL: 19
                                        }),
                                        tl: {
                                            hd: f.F2z({
                                                NAME: "px",
                                                VAL: 29
                                            }),
                                            tl: 0
                                        }
                                    }),
                                    tl: 0
                                }
                            }
                        }
                    }
                }),
                x = o._1(f.ivY, {
                    hd: f.PS9("closeButtonRoundBlue"),
                    tl: {
                        hd: f.Czw(p.Il.Background.blue),
                        tl: {
                            hd: f.bf$({
                                NAME: "px",
                                VAL: 60
                            }),
                            tl: {
                                hd: f.Cb8({
                                    NAME: "px",
                                    VAL: 60
                                }),
                                tl: {
                                    hd: f.E0l({
                                        NAME: "percent",
                                        VAL: 50
                                    }),
                                    tl: {
                                        hd: f.jfB("flex"),
                                        tl: {
                                            hd: f.KlP("center"),
                                            tl: {
                                                hd: f.cq$("center"),
                                                tl: {
                                                    hd: f.W5D(2),
                                                    tl: {
                                                        hd: f.BC2(p.pU.mobile, {
                                                            hd: f.wey({
                                                                NAME: "px",
                                                                VAL: 5
                                                            }),
                                                            tl: {
                                                                hd: f.F2z({
                                                                    NAME: "px",
                                                                    VAL: 17
                                                                }),
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
                }),
                C = o._1(f.ivY, {
                    hd: f.PS9("modalOpened"),
                    tl: {
                        hd: f.efO(f.txR("hidden")),
                        tl: 0
                    }
                }),
                B = o._1(f.ivY, {
                    hd: f.PS9("logo"),
                    tl: {
                        hd: f.FKU("absolute"),
                        tl: {
                            hd: f.wey({
                                NAME: "px",
                                VAL: 42
                            }),
                            tl: {
                                hd: f.t$v({
                                    NAME: "px",
                                    VAL: 40
                                }),
                                tl: {
                                    hd: f.BC2(p.pU.mobile, {
                                        hd: f.wey({
                                            NAME: "px",
                                            VAL: 24
                                        }),
                                        tl: {
                                            hd: f.t$v({
                                                NAME: "px",
                                                VAL: 32
                                            }),
                                            tl: 0
                                        }
                                    }),
                                    tl: 0
                                }
                            }
                        }
                    }
                }),
                M = v.Z;
            var k = function(t) {
                var e, l = t.isOpen,
                    v = t.backgroundColor,
                    k = t.noPaddingMobile,
                    N = t.withLogo,
                    _ = t.withRoundBlueCloseButton,
                    w = t.onClose,
                    L = t.children,
                    V = void 0 !== v ? v : 0,
                    S = void 0 !== k && k,
                    $ = void 0 !== N && N,
                    z = void 0 !== _ && _,
                    P = s.D(void 0);
                return a.useEffect((function() {
                    c.yK(C, l)
                }), [l]), a.useEffect((function() {
                    var t = function(t) {
                        return 4 !== h.t9.keyFromEventKey(t.key) ? void 0 : o._1(w, void 0)
                    };
                    return window.addEventListener("keydown", t),
                        function(e) {
                            window.removeEventListener("keydown", t)
                        }
                }), []), a.createElement("div", {
                    className: r.Sy({
                        hd: (e = V, o._1(f.ivY, {
                            hd: f.PS9("modal"),
                            tl: {
                                hd: f.FKU("fixed"),
                                tl: {
                                    hd: f.wey("zero"),
                                    tl: {
                                        hd: f.F2z("zero"),
                                        tl: {
                                            hd: f.IaC("zero"),
                                            tl: {
                                                hd: f.t$v("zero"),
                                                tl: {
                                                    hd: f.jfB("flex"),
                                                    tl: {
                                                        hd: f.cq$("center"),
                                                        tl: {
                                                            hd: f.Czw(m(e)),
                                                            tl: {
                                                                hd: f.$_Y(p.Il.Background.white),
                                                                tl: {
                                                                    hd: f.W5D(p.KN.modal),
                                                                    tl: {
                                                                        hd: f.o3D(p.Zv.mobilePadding),
                                                                        tl: {
                                                                            hd: f.vs({
                                                                                NAME: "translateX",
                                                                                VAL: {
                                                                                    NAME: "percent",
                                                                                    VAL: -100
                                                                                }
                                                                            }),
                                                                            tl: {
                                                                                hd: f.Ohi(0),
                                                                                tl: {
                                                                                    hd: f.zzh("hidden"),
                                                                                    tl: {
                                                                                        hd: f.pU1("auto"),
                                                                                        tl: {
                                                                                            hd: f.K47("-webkit-overflow-scrolling", "touch"),
                                                                                            tl: {
                                                                                                hd: f.pBE({
                                                                                                    hd: A.uTP.shorthand(300, 0, "ease", "opacity"),
                                                                                                    tl: {
                                                                                                        hd: A.uTP.shorthand(0, 300, "linear", "transform"),
                                                                                                        tl: 0
                                                                                                    }
                                                                                                }),
                                                                                                tl: {
                                                                                                    hd: f.Ka3(E)({
                                                                                                        hd: f.Ohi(1),
                                                                                                        tl: {
                                                                                                            hd: f.vs({
                                                                                                                NAME: "translateX",
                                                                                                                VAL: "zero"
                                                                                                            }),
                                                                                                            tl: {
                                                                                                                hd: f.pBE({
                                                                                                                    hd: A.uTP.shorthand(300, 0, "ease", "opacity"),
                                                                                                                    tl: {
                                                                                                                        hd: A.uTP.shorthand(0, 0, "linear", "transform"),
                                                                                                                        tl: 0
                                                                                                                    }
                                                                                                                }),
                                                                                                                tl: 0
                                                                                                            }
                                                                                                        }
                                                                                                    }),
                                                                                                    tl: {
                                                                                                        hd: f.Ka3(b)({
                                                                                                            hd: f.BC2(p.pU.mobile, {
                                                                                                                hd: f.o3D("zero"),
                                                                                                                tl: 0
                                                                                                            }),
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
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })),
                        tl: {
                            hd: r.rA(b, S),
                            tl: {
                                hd: r.rA(E, l),
                                tl: 0
                            }
                        }
                    })
                }, n.T($, a.createElement("a", {
                    className: B,
                    href: o._1(P, "/")
                }, a.createElement(i.S, {
                    size: {
                        TAG: 0,
                        _0: {
                            TAG: 0,
                            _0: {
                                width: 74,
                                height: 21
                            }
                        }
                    },
                    src: {
                        TAG: 0,
                        _0: M
                    }
                }))), a.createElement("div", {
                    className: d.RT(g, r.rA(x, z))
                }, a.createElement(u.S, {
                    inverted: !0,
                    isContentCentered: z,
                    onClick: function(t) {
                        return o._1(w, void 0)
                    }
                })), l ? L : null)
            }
        },
        72442: function(t, e, l) {
            l.d(e, {
                S: function() {
                    return k
                }
            });
            var r = l(99720),
                n = l(61699),
                d = l(32735),
                o = l(2011),
                i = l(22642),
                a = l(90997),
                h = l(82502),
                c = l(16135),
                u = l(52273),
                s = l(55056);

            function v(t, e) {
                return String(t) + " / " + String(e)
            }

            function f(t) {
                if (0 === t.TAG) {
                    var e = t._0,
                        l = e.height,
                        r = e.width;
                    return [{
                        NAME: "px",
                        VAL: r
                    }, {
                        NAME: "px",
                        VAL: l
                    }, v(r, l)]
                }
                var n = t._0;
                return [{
                    NAME: "percent",
                    VAL: 100
                }, "auto", v(n.width, n.height)]
            }

            function p(t) {
                switch (t) {
                    case 0:
                        return "initial";
                    case 1:
                        return "contain";
                    case 2:
                        return "fill";
                    case 3:
                        return "cover"
                }
            }
            var A = o._1(i.ivY, {
                hd: i.PS9("imageTabletResponsive"),
                tl: 0
            });

            function m(t, e) {
                var l = f(t[0]),
                    r = f(t[1]),
                    n = f(t[2]),
                    d = n[2],
                    a = p(e[0]),
                    c = p(e[1]),
                    u = p(e[2]);
                return o._1(i.ivY, {
                    hd: i.jfB("block"),
                    tl: {
                        hd: i.fXf(u),
                        tl: {
                            hd: i.bf$(n[0]),
                            tl: {
                                hd: i.Cb8(n[1]),
                                tl: {
                                    hd: i.K47("aspect-ratio", d),
                                    tl: {
                                        hd: i.BC2(h.pU.tablet, {
                                            hd: i.bf$(r[0]),
                                            tl: {
                                                hd: i.Cb8(r[1]),
                                                tl: {
                                                    hd: i.fXf(c),
                                                    tl: {
                                                        hd: i.K47("aspect-ratio", r[2]),
                                                        tl: 0
                                                    }
                                                }
                                            }
                                        }),
                                        tl: {
                                            hd: i.BC2(h.pU.mobile, {
                                                hd: i.bf$(l[0]),
                                                tl: {
                                                    hd: i.Cb8(l[1]),
                                                    tl: {
                                                        hd: i.fXf(a),
                                                        tl: {
                                                            hd: i.K47("aspect-ratio", l[2]),
                                                            tl: 0
                                                        }
                                                    }
                                                }
                                            }),
                                            tl: {
                                                hd: i.Ka3(A)({
                                                    hd: i.BC2(h.pU.tablet, {
                                                        hd: i.bf$({
                                                            NAME: "percent",
                                                            VAL: 100
                                                        }),
                                                        tl: {
                                                            hd: i.Cb8("auto"),
                                                            tl: {
                                                                hd: i.fXf(u),
                                                                tl: {
                                                                    hd: i.K47("aspect-ratio", d),
                                                                    tl: 0
                                                                }
                                                            }
                                                        }
                                                    }),
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
                })
            }

            function E(t) {
                return o._1(i.ivY, {
                    hd: i.PS9("imageZIndex"),
                    tl: {
                        hd: i.FKU("relative"),
                        tl: {
                            hd: i.W5D(t),
                            tl: 0
                        }
                    }
                })
            }

            function b(t) {
                return [{
                    NAME: "rotate",
                    VAL: {
                        NAME: "deg",
                        VAL: t[0]
                    }
                }, {
                    NAME: "rotate",
                    VAL: {
                        NAME: "deg",
                        VAL: t[1]
                    }
                }]
            }

            function g(t) {
                return [{
                    NAME: "translateY",
                    VAL: t[0]
                }, {
                    NAME: "translateY",
                    VAL: t[1]
                }]
            }

            function x(t) {
                var e = t[1],
                    l = t[0];
                return [{
                    NAME: "scale",
                    VAL: [l, l]
                }, {
                    NAME: "scale",
                    VAL: [e, e]
                }]
            }

            function C(t, e, l) {
                var r = s.rG(t),
                    n = s.rG(e),
                    d = s.rG(l),
                    u = a.Ri(a.DZ({
                        hd: c.UI(r, b),
                        tl: {
                            hd: c.UI(n, g),
                            tl: {
                                hd: c.UI(d, x),
                                tl: 0
                            }
                        }
                    }, (function(t) {
                        return t
                    })));
                return u[0] || u[1] ? o._1(i.ivY, {
                    hd: i.PS9("imageTransforms"),
                    tl: {
                        hd: i.Lol(u[1]),
                        tl: {
                            hd: i.BC2(h.pU.mobile, {
                                hd: i.Lol(u[0]),
                                tl: 0
                            }),
                            tl: 0
                        }
                    }
                }) : ""
            }

            function B(t) {
                var e;
                switch (t) {
                    case 0:
                        e = 0;
                        break;
                    case 1:
                        e = {
                            hd: i.CgR({
                                NAME: "px",
                                VAL: 1
                            }, "solid", h.Il.Border.line),
                            tl: 0
                        };
                        break;
                    case 2:
                        e = {
                            hd: i.LZf({
                                hd: u.jXB.box("zero", {
                                    NAME: "px",
                                    VAL: 3
                                }, "zero", "zero", !1, h.DE.grey),
                                tl: {
                                    hd: u.jXB.box("zero", h.$u.px32, {
                                        NAME: "px",
                                        VAL: 96
                                    }, "zero", !1, h.DE.black10a),
                                    tl: {
                                        hd: u.jXB.box("zero", h.$u.px8, h.$u.px32, "zero", !1, h.DE.black05a),
                                        tl: 0
                                    }
                                }
                            }),
                            tl: 0
                        };
                        break;
                    case 3:
                        e = {
                            hd: i.E0l(h.$u.px6),
                            tl: {
                                hd: h.P4.boxShadowWithInset,
                                tl: 0
                            }
                        };
                        break;
                    case 4:
                        e = {
                            hd: i.E0l(h.$u.px6),
                            tl: {
                                hd: i.Wnp(u.jXB.box("zero", "zero", "zero", h.$u.px4, !1, h.Il.Border.line)),
                                tl: {
                                    hd: i.BC2(h.pU.mobile, {
                                        hd: i.E0l(h.$u.px4),
                                        tl: 0
                                    }),
                                    tl: 0
                                }
                            }
                        };
                        break;
                    case 5:
                        e = {
                            hd: i.CgR({
                                NAME: "px",
                                VAL: 3
                            }, "solid", h.Il.Border.lineWhite),
                            tl: {
                                hd: i.E0l(h.$u.px6),
                                tl: 0
                            }
                        };
                        break;
                    case 6:
                        e = {
                            hd: i.E0l({
                                NAME: "px",
                                VAL: 4
                            }),
                            tl: {
                                hd: i.hXT(h.pt.$$default),
                                tl: 0
                            }
                        }
                }
                return o._1(i.ivY, e)
            }
            var M = l(26402);
            var k = function(t) {
                var e = t.size,
                    l = t.src,
                    o = t.alt,
                    i = t.rotation,
                    a = t.verticalOffset,
                    c = t.scale,
                    u = t.isTabletResponsive,
                    v = t.objectFit,
                    f = t.borderStyle,
                    p = t.zIndex,
                    b = void 0 !== u && u,
                    g = void 0 !== v ? v : {
                        TAG: 2,
                        _0: 0,
                        _1: 1,
                        _2: 1
                    },
                    x = s.$S(l),
                    k = s.Jn(e),
                    N = s.Jn(g),
                    _ = {
                        className: n.RT(m(k, N), n.RT(r.rA(A, b), n.RT(C(i, a, c), n.RT(r.e8(p, E), r.e8(f, B))))),
                        src: x[1]
                    };
                return void 0 !== o && (_.alt = M.xt(o)), d.createElement("picture", void 0, d.createElement("source", {
                    media: h.pU.mobile,
                    srcSet: x[0],
                    type: "image/jpeg"
                }), d.createElement("img", _))
            }
        },
        46527: function(t, e, l) {
            l.d(e, {
                S: function() {
                    return a
                }
            });
            var r = l(32735),
                n = l(36742),
                d = l(2242),
                o = l(26402),
                i = l(33713);
            var a = function(t) {
                var e = t.align,
                    l = t.color,
                    a = t.domRef,
                    h = t.hiddenOverflow,
                    c = t.id,
                    u = t.noSidePadding,
                    s = t.maxContentWidth,
                    v = t.height,
                    f = t.verticalPadding,
                    p = t.holderHorizontalPadding,
                    A = t.relativeInnerContainer,
                    m = t.stackGap,
                    E = t.children,
                    b = void 0 !== e ? e : {
                        TAG: 0,
                        _0: 1
                    },
                    g = void 0 !== s ? s : {
                        TAG: 0,
                        _0: 15
                    },
                    x = void 0 !== A && A,
                    C = void 0 !== m ? m : {
                        TAG: 0,
                        _0: "lg"
                    },
                    B = {
                        color: void 0 !== l ? l : "white",
                        verticalPadding: void 0 !== f ? f : {
                            TAG: 0,
                            _0: ["extraMedium", "extraMedium"]
                        },
                        holderHorizontalPadding: void 0 !== p ? p : {
                            TAG: 0,
                            _0: ["none", "none"]
                        },
                        noSidePadding: void 0 !== u && u,
                        hiddenOverflow: void 0 !== h && h,
                        children: r.createElement(i.S, {
                            maxWidth: g,
                            relativePosition: x,
                            align: b,
                            children: r.createElement(n.S, {
                                gap: C,
                                children: E
                            })
                        })
                    };
                return void 0 !== c && (B.id = o.xt(c)), void 0 !== a && (B.domRef = o.xt(a)), void 0 !== v && (B.height = o.xt(v)), r.createElement(d.S, B)
            }
        },
        65475: function(t, e, l) {
            l.d(e, {
                S: function() {
                    return A
                }
            });
            var r = l(99720),
                n = l(32735),
                d = l(55056),
                o = l(2011),
                i = l(22642),
                a = l(82502);
            var h = {
                    NAME: "px",
                    VAL: 57
                },
                c = {
                    NAME: "px",
                    VAL: 36
                };

            function u(t) {
                return "white" === t ? a.Il.Background.white : "lightestGrey" === t ? a.Il.Background.lightestGrey : "product" === t ? a.Il.Background.product : "academy" === t ? a.Il.Background.academy : "primary" === t ? a.Il.Background.primary : "accent" === t ? a.Il.Background.blue : "transparent" === t ? "transparent" : "lightOrange" === t ? a.Il.Background.selectedMutedHex : "vsDarkBlue" === t ? a.Il.Background.vsDarkBlue : a.Il.Background.black
            }
            var s = o._1(i.ivY, {
                    hd: i.PS9("separatorInView"),
                    tl: 0
                }),
                v = o._1(i.ivY, {
                    hd: i.PS9("separatorWithVerticalOffset"),
                    tl: 0
                }),
                f = o._1(i.ivY, {
                    hd: i.PS9("separatorCompactOnMobile"),
                    tl: 0
                });

            function p(t, e, l) {
                return o._1(i.ivY, {
                    hd: i.H78(1),
                    tl: {
                        hd: i.Czw(u(t[1])),
                        tl: {
                            hd: i.Cb8("zero"),
                            tl: {
                                hd: i.eRy(200, 100 * (3 - l) + e | 0, a.FK.easing, "height"),
                                tl: {
                                    hd: i.BC2(a.pU.mobile, {
                                        hd: i.Czw(u(t[0])),
                                        tl: 0
                                    }),
                                    tl: {
                                        hd: a.qm(s, {
                                            hd: i.Cb8({
                                                NAME: "px",
                                                VAL: 19 * l | 0
                                            }),
                                            tl: 0
                                        }),
                                        tl: {
                                            hd: a.qm(f, {
                                                hd: i.BC2(a.pU.mobile, {
                                                    hd: i.Cb8({
                                                        NAME: "px",
                                                        VAL: 12 * l | 0
                                                    }),
                                                    tl: 0
                                                }),
                                                tl: 0
                                            }),
                                            tl: 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }
            var A = function(t) {
                var e, l = t.from,
                    A = t.to_,
                    m = t.delay,
                    E = t.isVisible,
                    b = t.compactOnMobile,
                    g = t.withVerticalOffset,
                    x = void 0 !== m ? m : 0,
                    C = void 0 !== E && E,
                    B = void 0 !== b && b,
                    M = void 0 !== g && g,
                    k = d.$S(A);
                return n.createElement("div", {
                    className: r.Sy({
                        hd: (e = d.$S(l), o._1(i.ivY, {
                            hd: i.PS9("separator"),
                            tl: {
                                hd: i.jfB("flex"),
                                tl: {
                                    hd: i.cq$("flexEnd"),
                                    tl: {
                                        hd: i.Cb8(h),
                                        tl: {
                                            hd: i.Czw(u(e[1])),
                                            tl: {
                                                hd: i.BC2(a.pU.mobile, {
                                                    hd: i.Czw(u(e[0])),
                                                    tl: 0
                                                }),
                                                tl: {
                                                    hd: i.Ka3(f)({
                                                        hd: i.BC2(a.pU.mobile, {
                                                            hd: i.Cb8(c),
                                                            tl: 0
                                                        }),
                                                        tl: 0
                                                    }),
                                                    tl: {
                                                        hd: i.Ka3(v)({
                                                            hd: i.Lol({
                                                                hd: {
                                                                    NAME: "translateY",
                                                                    VAL: {
                                                                        NAME: "percent",
                                                                        VAL: -100
                                                                    }
                                                                },
                                                                tl: 0
                                                            }),
                                                            tl: {
                                                                hd: i.yl7(a.pd(h)),
                                                                tl: {
                                                                    hd: i.Ka3(f)({
                                                                        hd: i.BC2(a.pU.mobile, {
                                                                            hd: i.yl7(a.pd(c)),
                                                                            tl: 0
                                                                        }),
                                                                        tl: 0
                                                                    }),
                                                                    tl: 0
                                                                }
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
                        })),
                        tl: {
                            hd: r.rA(s, C),
                            tl: {
                                hd: r.rA(v, M),
                                tl: {
                                    hd: r.rA(f, B),
                                    tl: 0
                                }
                            }
                        }
                    })
                }, n.createElement("div", {
                    className: p(k, x, 0)
                }), n.createElement("div", {
                    className: p(k, x, 1)
                }), n.createElement("div", {
                    className: p(k, x, 2)
                }), n.createElement("div", {
                    className: p(k, x, 3)
                }))
            }
        },
        33962: function(t, e, l) {
            l.d(e, {
                D$: function() {
                    return c
                }
            });
            var r = l(14971),
                n = l(92674),
                d = l(2011),
                o = l(32735),
                i = l(26402),
                a = l(54644),
                h = l(16135);

            function c(t, e, l) {
                var c = void 0 !== t ? t : 1,
                    u = o.useRef(null),
                    s = o.useRef(void 0),
                    v = r.K1(void 0),
                    f = v[1];
                o.useEffect((function() {
                    var t = new IntersectionObserver((function(t) {
                        return d._1(f, a.U2(t, 0))
                    }), {
                        threshold: c,
                        rootMargin: "-100px 0px"
                    });
                    s.current = i.G(t)
                }), []), o.useEffect((function() {
                    var t = s.current;
                    if (void 0 !== t) {
                        var e = i.xt(t);
                        e.disconnect();
                        var l = n.Z$(u);
                        return void 0 !== l ? (e.observe(i.xt(l)), function(t) {
                            e.disconnect()
                        }) : void 0
                    }
                }), [u]);
                var p = h.tj(h.UI(v[0], (function(t) {
                    return t.isIntersecting
                })), !1);
                return o.useEffect((function() {
                    p && e && h.UI(s.current, (function(t) {
                        t.disconnect()
                    }))
                }), [p]), [u, p]
            }
        },
        4579: function(t, e, l) {
            l.d(e, {
                S: function() {
                    return o
                }
            });
            var r = l(32735),
                n = l(22642),
                d = l(82502);
            var o = function(t) {
                var e = t.inverted,
                    l = void 0 !== e && e ? d.Il.Background.white : d.Il.Background.black;
                return r.createElement("svg", {
                    height: "28",
                    width: "28",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("g", {
                    fill: "none",
                    stroke: n.Ukk(l),
                    strokeWidth: "3"
                }, r.createElement("path", {
                    d: "M1.167 1.167l25.666 25.666"
                }), r.createElement("path", {
                    d: "M26.833 1.167L1.167 26.833"
                })))
            }
        }
    }
]);