! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], function(b) {
        a(b, window, document)
    }) : "object" == typeof module && module.exports ? module.exports = a(
        require("jquery"), window, document) : a(jQuery, window, document)
}(function(a, b, c, d) {
    "use strict";

    function e(b, c) {
        this.a = b, c && (a.extend(c, c, {
                a: c.autoFormat,
                h: c.autoHideDialCode,
                d: c.defaultCountry,
                i: c.ipinfoToken,
                n: c.nationalMode,
                t: c.numberType,
                o: c.onlyCountries,
                p: c.preferredCountries,
                v: c.preventInvalidNumbers,
                u: c.utilsScript
            })), this.b = a.extend({}, h, c), this.c = h, this.ns = "." +
            f + g++, this.d = Boolean(b.setSelectionRange), this.e =
            Boolean(a(b).attr("placeholder")), this.f = f
    }
    var f = "intlTelInput",
        g = 1,
        h = {
            allowExtensions: !1,
            a: !0,
            h: !0,
            autoPlaceholder: !0,
            d: "",
            dropdownContainer: !1,
            excludeCountries: [],
            geoIpLookup: null,
            n: !0,
            t: "MOBILE",
            o: [],
            p: ["us", "gb"],
            u: ""
        },
        i = {
            b: 38,
            c: 40,
            d: 13,
            e: 27,
            f: 43,
            A: 65,
            Z: 90,
            g: 48,
            h: 57,
            i: 32,
            Bi: 8,
            TAB: 9,
            k: 46,
            l: 17,
            m: 91,
            n: 224
        },
        j = !1;
    a(b).load(function() {
        j = !0
    }), e.prototype = {
        _init: function() {
            return this.b.n && (this.b.h = !1), navigator.userAgent
                .match(/IEMobile/i) && (this.b.a = !1), this.isMobile =
                /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                .test(navigator.userAgent), this.autoCountryDeferred =
                new a.Deferred, this.utilsScriptDeferred = new a.Deferred,
                this._b(), this._f(), this._h(), this._i(), this._initRequests(), [
                    this.autoCountryDeferred, this.utilsScriptDeferred
                ]
        },
        _b: function() {
            this._d(), this._e()
        },
        _c: function(a, b, c) {
            b in this.m || (this.m[b] = []);
            var d = c || 0;
            this.m[b][d] = a
        },
        processCountries: function(b, c) {
            var d;
            for (d = 0; d < b.length; d++) b[d] = b[d].toLowerCase();
            for (this.l = [], d = 0; d < k.length; d++) c(a.inArray(
                k[d].iso2, b)) && this.l.push(k[d])
        },
        _d: function() {
            this.b.o.length ? this.processCountries(this.b.o,
                function(a) {
                    return -1 != a
                }) : this.b.excludeCountries.length ? this.processCountries(
                this.b.excludeCountries, function(a) {
                    return -1 == a
                }) : this.l = k, this.m = {};
            for (var a = 0; a < this.l.length; a++) {
                var b = this.l[a];
                if (this._c(b.iso2, b.dialCode, b.priority), b.areaCodes)
                    for (var c = 0; c < b.areaCodes.length; c++)
                        this._c(b.iso2, b.dialCode + b.areaCodes[c])
            }
        },
        _e: function() {
            this.n = [];
            for (var a = 0; a < this.b.p.length; a++) {
                var b = this.b.p[a].toLowerCase(),
                    c = this._y(b, !1, !0);
                c && this.n.push(c)
            }
        },
        _f: function() {
            this.g = a(this.a), this.g.attr("autocomplete", "off"),
                this.g.wrap(a("<div>", {
                    "class": "intl-tel-input"
                })), this.flagsContainer = a("<div>", {
                    "class": "flag-container"
                }).insertBefore(this.g);
            var b = a("<div>", {
                tabindex: "0",
                "class": "selected-flag"
            }).appendTo(this.flagsContainer);
            this.h = a("<div>", {
                    "class": "iti-flag"
                }).appendTo(b), a("<div>", {
                    "class": "arrow"
                }).appendTo(b), this.isMobile ? this.i = a(
                    "<select>", {
                        "class": "iti-mobile-select"
                    }).appendTo(this.flagsContainer) : (this.i = a(
                    "<ul>", {
                        "class": "country-list hide"
                    }), this.n.length && !this.isMobile && (
                    this._g(this.n, "preferred"), a("<li>", {
                        "class": "divider"
                    }).appendTo(this.i))), this._g(this.l, ""),
                this.isMobile || (this.k = this.i.children(
                        ".country"), this.b.dropdownContainer ?
                    this.dropdown = a("<div>", {
                        "class": "intl-tel-input iti-container"
                    }).append(this.i) : this.i.appendTo(this.flagsContainer)
                )
        },
        _g: function(a, b) {
            for (var c = "", d = 0; d < a.length; d++) {
                var e = a[d];
                this.isMobile ? (c += "<option data-dial-code='" +
                    e.dialCode + "' value='" + e.iso2 + "'>", c +=
                    e.name + " +" + e.dialCode, c +=
                    "</option>") : (c += "<li class='country " +
                    b + "' data-dial-code='" + e.dialCode +
                    "' data-country-code='" + e.iso2 + "'>", c +=
                    "<div class='flag'><div class='iti-flag " +
                    e.iso2 + "'></div></div>", c +=
                    "<span class='country-name'>" + e.name +
                    "</span>", c += "<span class='dial-code'>+" +
                    e.dialCode + "</span>", c += "</li>")
            }
            this.i.append(c)
        },
        _h: function() {
            var a = this.g.val();
            this._af(a) ? this._v(a, !0) : "auto" != this.b.d && (
                this.b.d = this.b.d ? this._y(this.b.d.toLowerCase(), !
                    1, !1) : this.n.length ? this.n[0] : this.l[
                    0], this._z(this.b.d.iso2), a || this._ae(
                    this.b.d.dialCode, !1)), a && this._u(a)
        },
        _i: function() {
            var b = this;
            if (this._j(), (this.b.h || this.b.a) && this._l(),
                this.isMobile) this.i.on("change" + this.ns,
                function() {
                    b._ab(a(this).find("option:selected"))
                });
            else {
                var c = this.g.closest("label");
                c.length && c.on("click" + this.ns, function(a) {
                    b.i.hasClass("hide") ? b.g.focus() : a.preventDefault()
                });
                var d = this.h.parent();
                d.on("click" + this.ns, function() {
                    !b.i.hasClass("hide") || b.g.prop(
                        "disabled") || b.g.prop(
                        "readonly") || b._n()
                })
            }
            this.flagsContainer.on("keydown" + b.ns, function(a) {
                var c = b.i.hasClass("hide");
                !c || a.which != i.b && a.which != i.c && a
                    .which != i.i && a.which != i.d || (a.preventDefault(),
                        a.stopPropagation(), b._n()), a.which ==
                    i.TAB && b._ac()
            })
        },
        _initRequests: function() {
            var c = this;
            this.b.u ? j ? this.loadUtils() : a(b).load(function() {
                    c.loadUtils()
                }) : this.utilsScriptDeferred.resolve(), "auto" ==
                this.b.d ? this._loadAutoCountry() : this.autoCountryDeferred
                .resolve()
        },
        _loadAutoCountry: function() {
            var c = b.Cookies ? Cookies.get("itiAutoCountry") : "";
            c && (a.fn[f].autoCountry = c), a.fn[f].autoCountry ?
                this.autoCountryLoaded() : a.fn[f].startedLoadingAutoCountry ||
                (a.fn[f].startedLoadingAutoCountry = !0, "function" ==
                    typeof this.b.geoIpLookup && this.b.geoIpLookup(
                        function(c) {
                            a.fn[f].autoCountry = c.toLowerCase(),
                                b.Cookies && Cookies.set(
                                    "itiAutoCountry", a.fn[f].autoCountry, {
                                        path: "/"
                                    }), setTimeout(function() {
                                    a(".intl-tel-input input").intlTelInput(
                                        "autoCountryLoaded"
                                    )
                                })
                        }))
        },
        _j: function() {
            var a = this;
            this.b.a && this.g.on("keypress" + this.ns, function(c) {
                if (c.which >= i.i && !c.ctrlKey && !c.metaKey &&
                    b.intlTelInputUtils && !a.g.prop(
                        "readonly")) {
                    c.preventDefault();
                    var d = c.which >= i.g && c.which <= i.h ||
                        c.which == i.f,
                        e = a.g[0],
                        f = a.d && e.selectionStart == e.selectionEnd,
                        g = a.g.attr("maxlength"),
                        h = a.g.val(),
                        j = g ? h.length < g : !0;
                    if (j && (d || f)) {
                        var k = d ? String.fromCharCode(c.which) :
                            null;
                        a._k(k, !0, d), h != a.g.val() && a
                            .g.trigger("input")
                    }
                    d || a._handleInvalidKey()
                }
            }), this.g.on("cut" + this.ns + " paste" + this.ns,
                function() {
                    setTimeout(function() {
                        if (a.b.a && b.intlTelInputUtils) {
                            var c = a.d && a.g[0].selectionStart ==
                                a.g.val().length;
                            a._k(null, c), a._ensurePlus()
                        } else a._v(a.g.val())
                    })
                }), this.g.on("keyup" + this.ns, function(c) {
                if (c.which == i.d || a.g.prop("readonly"))
                ;
                else if (a.b.a && b.intlTelInputUtils) {
                    var d = a.d && a.g[0].selectionStart ==
                        a.g.val().length;
                    a.g.val() ? (c.which == i.k && !d || c.which ==
                        i.Bi) && a._k() : a._v(""), a._ensurePlus()
                } else a._v(a.g.val())
            })
        },
        _ensurePlus: function() {
            if (!this.b.n) {
                var a = this.g.val(),
                    b = this.g[0];
                if ("+" != a.charAt(0)) {
                    var c = this.d ? b.selectionStart + 1 : 0;
                    this.g.val("+" + a), this.d && b.setSelectionRange(
                        c, c)
                }
            }
        },
        _handleInvalidKey: function() {
            var a = this;
            this.g.trigger("invalidkey").addClass("iti-invalid-key"),
                setTimeout(function() {
                    a.g.removeClass("iti-invalid-key")
                }, 100)
        },
        _k: function(a, b, c) {
            var d, e = this.g.val(),
                f = (this._getClean(e), this.g[0]),
                g = 0;
            if (this.d ? (g = this._getDigitsOnRight(e, f.selectionEnd),
                a ? e = e.substr(0, f.selectionStart) + a + e.substring(
                    f.selectionEnd, e.length) : d = e.substr(f.selectionStart -
                    2, 2)) : a && (e += a), this.setNumber(e,
                null, b, !0, c), this.d) {
                var h;
                e = this.g.val(), g ? (h = this._getCursorFromDigitsOnRight(
                    e, g), a || (h = this._getCursorFromLeftChar(
                    e, h, d))) : h = e.length, f.setSelectionRange(
                    h, h)
            }
        },
        _getCursorFromLeftChar: function(b, c, d) {
            for (var e = c; e > 0; e--) {
                var f = b.charAt(e - 1);
                if (a.isNumeric(f) || b.substr(e - 2, 2) == d)
                    return e
            }
            return 0
        },
        _getCursorFromDigitsOnRight: function(b, c) {
            for (var d = b.length - 1; d >= 0; d--)
                if (a.isNumeric(b.charAt(d)) && 0 === --c) return d;
            return 0
        },
        _getDigitsOnRight: function(b, c) {
            for (var d = 0, e = c; e < b.length; e++) a.isNumeric(b
                .charAt(e)) && d++;
            return d
        },
        _l: function() {
            var a = this;
            this.b.h && this.g.on("mousedown" + this.ns, function(b) {
                a.g.is(":focus") || a.g.val() || (b.preventDefault(),
                    a.g.focus())
            }), this.g.on("focus" + this.ns, function() {
                var c = a.g.val();
                a.g.data("focusVal", c), a.b.h && !c && !a.g
                    .prop("readonly") && a.o.dialCode && (a
                        ._u("+" + a.o.dialCode, null, !0),
                        a.g.one("keypress.plus" + a.ns,
                            function(c) {
                                if (c.which == i.f) {
                                    var d = a.b.a && b.intlTelInputUtils ?
                                        "+" : "";
                                    a.g.val(d)
                                }
                            }), setTimeout(function() {
                            var b = a.g[0];
                            if (a.d) {
                                var c = a.g.val().length;
                                b.setSelectionRange(c,
                                    c)
                            }
                        }))
            }), this.g.on("blur" + this.ns, function() {
                if (a.b.h) {
                    var c = a.g.val(),
                        d = "+" == c.charAt(0);
                    if (d) {
                        var e = a._m(c);
                        e && a.o.dialCode != e || a.g.val(
                            "")
                    }
                    a.g.off("keypress.plus" + a.ns)
                }
                a.b.a && b.intlTelInputUtils && a.g.val() !=
                    a.g.data("focusVal") && a.g.trigger(
                        "change")
            })
        },
        _m: function(a) {
            return a.replace(/\D/g, "")
        },
        _getClean: function(a) {
            var b = "+" == a.charAt(0) ? "+" : "";
            return b + this._m(a)
        },
        _n: function() {
            this._o();
            var a = this.i.children(".active");
            a.length && this._x(a), a.length && this._ad(a), this._p(),
                this.h.children(".arrow").addClass("up")
        },
        _o: function() {
            var c = this.b.dropdownContainer && !this.isMobile;
            c && this.dropdown.appendTo(this.b.dropdownContainer),
                this.j = this.i.removeClass("hide").outerHeight();
            var d = this,
                e = this.g.offset(),
                f = e.top,
                g = a(b).scrollTop(),
                h = f + this.g.outerHeight() + this.j < g + a(b).height(),
                i = f - this.j > g;
            if (this.i.toggleClass("dropup", !h && i), c) {
                var j = !h && i ? 0 : this.g.innerHeight();
                this.dropdown.css({
                    top: f + j,
                    left: e.left
                }), a(b).on("scroll" + this.ns, function() {
                    d._ac()
                })
            }
        },
        _p: function() {
            var b = this;
            this.i.on("mouseover" + this.ns, ".country", function() {
                b._x(a(this))
            }), this.i.on("click" + this.ns, ".country",
                function() {
                    b._ab(a(this))
                });
            var d = !0;
            a("html").on("click" + this.ns, function() {
                d || b._ac(), d = !1
            });
            var e = "",
                f = null;
            a(c).on("keydown" + this.ns, function(a) {
                a.preventDefault(), a.which == i.b || a.which ==
                    i.c ? b._q(a.which) : a.which == i.d ?
                    b._r() : a.which == i.e ? b._ac() : (a.which >=
                        i.A && a.which <= i.Z || a.which ==
                        i.i) && (f && clearTimeout(f), e +=
                        String.fromCharCode(a.which), b._s(
                            e), f = setTimeout(function() {
                            e = ""
                        }, 1e3))
            })
        },
        _q: function(a) {
            var b = this.i.children(".highlight").first(),
                c = a == i.b ? b.prev() : b.next();
            c.length && (c.hasClass("divider") && (c = a == i.b ? c
                .prev() : c.next()), this._x(c), this._ad(c))
        },
        _r: function() {
            var a = this.i.children(".highlight").first();
            a.length && this._ab(a)
        },
        _s: function(a) {
            for (var b = 0; b < this.l.length; b++)
                if (this._t(this.l[b].name, a)) {
                    var c = this.i.children("[data-country-code=" +
                        this.l[b].iso2 + "]").not(".preferred");
                    this._x(c), this._ad(c, !0);
                    break
                }
        },
        _t: function(a, b) {
            return a.substr(0, b.length).toUpperCase() == b
        },
        _u: function(a, c, d, e, f) {
            var g;
            if (this.b.a && b.intlTelInputUtils && this.o) {
                g = "number" == typeof c && intlTelInputUtils.isValidNumber(
                        a, this.o.iso2) ? intlTelInputUtils.formatNumberByType(
                        a, this.o.iso2, c) : !e && this.b.n && "+" ==
                    a.charAt(0) && intlTelInputUtils.isValidNumber(
                        a, this.o.iso2) ? intlTelInputUtils.formatNumberByType(
                        a, this.o.iso2, intlTelInputUtils.numberFormat
                        .NATIONAL) : intlTelInputUtils.formatNumber(
                        a, this.o.iso2, d, this.b.allowExtensions,
                        f);
                var h = this.g.attr("maxlength");
                h && g.length > h && (g = g.substr(0, h))
            } else g = a;
            this.g.val(g)
        },
        _v: function(b, c) {
            b && this.b.n && this.o && "1" == this.o.dialCode &&
                "+" != b.charAt(0) && ("1" != b.charAt(0) && (b =
                    "1" + b), b = "+" + b);
            var d = this._af(b),
                e = null;
            if (d) {
                var f = this.m[this._m(d)],
                    g = this.o && -1 != a.inArray(this.o.iso2, f);
                if (!g || this._w(b, d))
                    for (var h = 0; h < f.length; h++)
                        if (f[h]) {
                            e = f[h];
                            break
                        }
            } else "+" == b.charAt(0) && this._m(b).length ? e = "" :
                b && "+" != b || (e = this.b.d.iso2);
            null !== e && this._z(e, c)
        },
        _w: function(a, b) {
            return "+1" == b && this._m(a).length >= 4
        },
        _x: function(a) {
            this.k.removeClass("highlight"), a.addClass("highlight")
        },
        _y: function(a, b, c) {
            for (var d = b ? k : this.l, e = 0; e < d.length; e++)
                if (d[e].iso2 == a) return d[e];
            if (c) return null;
            throw new Error("No country data for '" + a + "'")
        },
        _z: function(a, b) {
            this.o = a ? this._y(a, !1, !1) : {}, b && this.o.iso2 &&
                (this.b.d = {
                    iso2: this.o.iso2
                }), this.h.attr("class", "iti-flag " + a);
            var c = a ? this.o.name + ": +" + this.o.dialCode :
                "Unknown";
            this.h.parent().attr("title", c), this._aa(), this.isMobile ?
                this.i.val(a) : (this.k.removeClass("active"), a &&
                    this.k.find(".iti-flag." + a).first().closest(
                        ".country").addClass("active"))
        },
        _aa: function() {
            if (b.intlTelInputUtils && !this.e && this.b.autoPlaceholder &&
                this.o) {
                var a = this.o.iso2,
                    c = intlTelInputUtils.numberType[this.b.t ||
                        "FIXED_LINE"],
                    d = a ? intlTelInputUtils.getExampleNumber(a,
                        this.b.n, c) : "";
                "function" == typeof this.b.customPlaceholder && (d =
                        this.b.customPlaceholder(d, this.o)), this.g
                    .attr("placeholder", d)
            }
        },
        _ab: function(a) {
            var b = this.isMobile ? "value" : "data-country-code";
            if (this._z(a.attr(b), !0), this.isMobile || this._ac(),
                this._ae(a.attr("data-dial-code"), !0), this.g.trigger(
                    "change"), this.g.focus(), this.d) {
                var c = this.g.val().length;
                this.g[0].setSelectionRange(c, c)
            }
        },
        _ac: function() {
            this.i.addClass("hide"), this.h.children(".arrow").removeClass(
                    "up"), a(c).off(this.ns), a("html").off(this.ns),
                this.i.off(this.ns), this.b.dropdownContainer && !
                this.isMobile && (a(b).off("scroll" + this.ns),
                    this.dropdown.detach())
        },
        _ad: function(a, b) {
            var c = this.i,
                d = c.height(),
                e = c.offset().top,
                f = e + d,
                g = a.outerHeight(),
                h = a.offset().top,
                i = h + g,
                j = h - e + c.scrollTop(),
                k = d / 2 - g / 2;
            if (e > h) b && (j -= k), c.scrollTop(j);
            else if (i > f) {
                b && (j += k);
                var l = d - g;
                c.scrollTop(j - l)
            }
        },
        _ae: function(b, c) {
            var d, e = this.g.val();
            if (b = "+" + b, this.b.n && "+" != e.charAt(0)) d = e;
            else if (e) {
                var f = this._af(e);
                if (f.length > 1) d = e.replace(f, b);
                else {
                    var g = "+" != e.charAt(0) ? a.trim(e) : "";
                    d = b + g
                }
            } else d = !this.b.h || c ? b : "";
            this._u(d, null, c)
        },
        _af: function(b) {
            var c = "";
            if ("+" == b.charAt(0))
                for (var d = "", e = 0; e < b.length; e++) {
                    var f = b.charAt(e);
                    if (a.isNumeric(f) && (d += f, this.m[d] && (c =
                        b.substr(0, e + 1)), 4 == d.length)) break
                }
            return c
        },
        autoCountryLoaded: function() {
            "auto" == this.b.d && (this.b.d = a.fn[f].autoCountry,
                this._h(), this.autoCountryDeferred.resolve())
        },
        destroy: function() {
            this.isMobile || this._ac(), this.g.off(this.ns), this.isMobile ?
                this.i.off(this.ns) : (this.h.parent().off(this.ns),
                    this.g.closest("label").off(this.ns));
            var a = this.g.parent();
            a.before(this.g).remove()
        },
        getExtension: function() {
            return this.g.val().split(" ext. ")[1] || ""
        },
        getNumber: function(a) {
            return b.intlTelInputUtils ? intlTelInputUtils.formatNumberByType(
                this.g.val(), this.o.iso2, a) : ""
        },
        getNumberType: function() {
            return b.intlTelInputUtils ? intlTelInputUtils.getNumberType(
                this.g.val(), this.o.iso2) : -99
        },
        getSelectedCountryData: function() {
            return this.o || {}
        },
        getValidationError: function() {
            return b.intlTelInputUtils ? intlTelInputUtils.getValidationError(
                this.g.val(), this.o.iso2) : -99
        },
        isValidNumber: function() {
            var c = a.trim(this.g.val()),
                d = this.b.n ? this.o.iso2 : "";
            return b.intlTelInputUtils ? intlTelInputUtils.isValidNumber(
                c, d) : !1
        },
        loadUtils: function(b) {
            var c = b || this.b.u;
            c ? a.fn[f].loadedUtilsScript || (a.fn[f].loadedUtilsScript = !
                0, a.ajax({
                    url: c,
                    complete: function() {
                        a(".intl-tel-input input").intlTelInput(
                            "utilsRequestComplete")
                    },
                    dataType: "script",
                    cache: !0
                })) : this.utilsScriptDeferred.resolve()
        },
        selectCountry: function(a) {
            a = a.toLowerCase(), this.h.hasClass(a) || (this._z(a, !
                0), this._ae(this.o.dialCode, !1))
        },
        setNumber: function(a, b, c, d, e) {
            this.b.n || "+" == a.charAt(0) || (a = "+" + a), this._v(
                a), this._u(a, b, c, d, e)
        },
        utilsRequestComplete: function() {
            b.intlTelInputUtils && (this.b.a && this.g.val() &&
                    this._u(this.g.val()), this._aa()), this.utilsScriptDeferred
                .resolve()
        }
    }, a.fn[f] = function(b) {
        var c = arguments;
        if (b === d || "object" == typeof b) {
            var g = [];
            return this.each(function() {
                if (!a.data(this, "plugin_" + f)) {
                    var c = new e(this, b),
                        d = c._init();
                    g.push(d[0]), g.push(d[1]), a.data(this,
                        "plugin_" + f, c)
                }
            }), a.when.apply(null, g)
        }
        if ("string" == typeof b && "_" !== b[0]) {
            var h;
            return this.each(function() {
                var d = a.data(this, "plugin_" + f);
                d instanceof e && "function" == typeof d[b] &&
                    (h = d[b].apply(d, Array.prototype.slice.call(
                        c, 1))), "destroy" === b && a.data(this,
                        "plugin_" + f, null)
            }), h !== d ? h : this
        }
    }, a.fn[f].getCountryData = function() {
        return k
    }, a.fn[f].version = "6.4.3";
    for (var k = [
        ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
        ["Albania (Shqipëri)", "al", "355"],
        ["Algeria (‫الجزائر‬‎)", "dz", "213"],
        ["American Samoa", "as", "1684"],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1264"],
        ["Antigua and Barbuda", "ag", "1268"],
        ["Argentina", "ar", "54"],
        ["Armenia (Հայաստան)", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Australia", "au", "61", 0],
        ["Austria (Österreich)", "at", "43"],
        ["Azerbaijan (Azərbaycan)", "az", "994"],
        ["Bahamas", "bs", "1242"],
        ["Bahrain (‫البحرين‬‎)", "bh", "973"],
        ["Bangladesh (বাংলাদেশ)", "bd", "880"],
        ["Barbados", "bb", "1246"],
        ["Belarus (Беларусь)", "by", "375"],
        ["Belgium (België)", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin (Bénin)", "bj", "229"],
        ["Bermuda", "bm", "1441"],
        ["Bhutan (འབྲུག)", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba",
            "387"
        ],
        ["Botswana", "bw", "267"],
        ["Brazil (Brasil)", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1284"],
        ["Brunei", "bn", "673"],
        ["Bulgaria (България)", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi (Uburundi)", "bi", "257"],
        ["Cambodia (កម្ពុជា)", "kh", "855"],
        ["Cameroon (Cameroun)", "cm", "237"],
        ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250",
            "289", "306", "343", "365", "387", "403", "416",
            "418", "431", "437", "438", "450", "506", "514",
            "519", "548", "579", "581", "587", "604", "613",
            "639", "647", "672", "705", "709", "742", "778",
            "780", "782", "807", "819", "825", "867", "873",
            "902", "905"
        ]],
        ["Cape Verde (Kabu Verdi)", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1],
        ["Cayman Islands", "ky", "1345"],
        ["Central African Republic (République centrafricaine)",
            "cf", "236"
        ],
        ["Chad (Tchad)", "td", "235"],
        ["Chile", "cl", "56"],
        ["China (中国)", "cn", "86"],
        ["Christmas Island", "cx", "61", 2],
        ["Cocos (Keeling) Islands", "cc", "61", 1],
        ["Colombia", "co", "57"],
        ["Comoros (‫جزر القمر‬‎)", "km", "269"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd",
            "243"
        ],
        ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["Côte d’Ivoire", "ci", "225"],
        ["Croatia (Hrvatska)", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["Curaçao", "cw", "599", 0],
        ["Cyprus (Κύπρος)", "cy", "357"],
        ["Czech Republic (Česká republika)", "cz", "420"],
        ["Denmark (Danmark)", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1767"],
        ["Dominican Republic (República Dominicana)", "do", "1", 2, [
            "809", "829", "849"
        ]],
        ["Ecuador", "ec", "593"],
        ["Egypt (‫مصر‬‎)", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia (Eesti)", "ee", "372"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands (Islas Malvinas)", "fk", "500"],
        ["Faroe Islands (Føroyar)", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland (Suomi)", "fi", "358", 0],
        ["France", "fr", "33"],
        ["French Guiana (Guyane française)", "gf", "594"],
        ["French Polynesia (Polynésie française)", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia (საქართველო)", "ge", "995"],
        ["Germany (Deutschland)", "de", "49"],
        ["Ghana (Gaana)", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece (Ελλάδα)", "gr", "30"],
        ["Greenland (Kalaallit Nunaat)", "gl", "299"],
        ["Grenada", "gd", "1473"],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1671"],
        ["Guatemala", "gt", "502"],
        ["Guernsey", "gg", "44", 1],
        ["Guinea (Guinée)", "gn", "224"],
        ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong (香港)", "hk", "852"],
        ["Hungary (Magyarország)", "hu", "36"],
        ["Iceland (Ísland)", "is", "354"],
        ["India (भारत)", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran (‫ایران‬‎)", "ir", "98"],
        ["Iraq (‫العراق‬‎)", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Isle of Man", "im", "44", 2],
        ["Israel (‫ישראל‬‎)", "il", "972"],
        ["Italy (Italia)", "it", "39", 0],
        ["Jamaica", "jm", "1876"],
        ["Japan (日本)", "jp", "81"],
        ["Jersey", "je", "44", 3],
        ["Jordan (‫الأردن‬‎)", "jo", "962"],
        ["Kazakhstan (Казахстан)", "kz", "7", 1],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kuwait (‫الكويت‬‎)", "kw", "965"],
        ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
        ["Laos (ລາວ)", "la", "856"],
        ["Latvia (Latvija)", "lv", "371"],
        ["Lebanon (‫لبنان‬‎)", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya (‫ليبيا‬‎)", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania (Lietuva)", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau (澳門)", "mo", "853"],
        ["Macedonia (FYROM) (Македонија)", "mk", "389"],
        ["Madagascar (Madagasikara)", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
        ["Mauritius (Moris)", "mu", "230"],
        ["Mayotte", "yt", "262", 1],
        ["Mexico (México)", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova (Republica Moldova)", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia (Монгол)", "mn", "976"],
        ["Montenegro (Crna Gora)", "me", "382"],
        ["Montserrat", "ms", "1664"],
        ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
        ["Mozambique (Moçambique)", "mz", "258"],
        ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
        ["Namibia (Namibië)", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal (नेपाल)", "np", "977"],
        ["Netherlands (Nederland)", "nl", "31"],
        ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger (Nijar)", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
        ["Northern Mariana Islands", "mp", "1670"],
        ["Norway (Norge)", "no", "47", 0],
        ["Oman (‫عُمان‬‎)", "om", "968"],
        ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine (‫فلسطين‬‎)", "ps", "970"],
        ["Panama (Panamá)", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru (Perú)", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland (Polska)", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar (‫قطر‬‎)", "qa", "974"],
        ["Réunion (La Réunion)", "re", "262", 0],
        ["Romania (România)", "ro", "40"],
        ["Russia (Россия)", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1],
        ["Saint Helena", "sh", "290"],
        ["Saint Kitts and Nevis", "kn", "1869"],
        ["Saint Lucia", "lc", "1758"],
        ["Saint Martin (Saint-Martin (partie française))", "mf",
            "590", 2
        ],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
            "pm", "508"
        ],
        ["Saint Vincent and the Grenadines", "vc", "1784"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
        ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
        ["Senegal (Sénégal)", "sn", "221"],
        ["Serbia (Србија)", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1721"],
        ["Slovakia (Slovensko)", "sk", "421"],
        ["Slovenia (Slovenija)", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia (Soomaaliya)", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea (대한민국)", "kr", "82"],
        ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
        ["Spain (España)", "es", "34"],
        ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
        ["Sudan (‫السودان‬‎)", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Svalbard and Jan Mayen", "sj", "47", 1],
        ["Swaziland", "sz", "268"],
        ["Sweden (Sverige)", "se", "46"],
        ["Switzerland (Schweiz)", "ch", "41"],
        ["Syria (‫سوريا‬‎)", "sy", "963"],
        ["Taiwan (台灣)", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand (ไทย)", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad and Tobago", "tt", "1868"],
        ["Tunisia (‫تونس‬‎)", "tn", "216"],
        ["Turkey (Türkiye)", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks and Caicos Islands", "tc", "1649"],
        ["Tuvalu", "tv", "688"],
        ["U.S. Virgin Islands", "vi", "1340"],
        ["Uganda", "ug", "256"],
        ["Ukraine (Україна)", "ua", "380"],
        ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae",
            "971"
        ],
        ["United Kingdom", "gb", "44", 0],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City (Città del Vaticano)", "va", "39", 1],
        ["Venezuela", "ve", "58"],
        ["Vietnam (Việt Nam)", "vn", "84"],
        ["Wallis and Futuna", "wf", "681"],
        ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
        ["Yemen (‫اليمن‬‎)", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"],
        ["Åland Islands", "ax", "358", 1]
    ], l = 0; l < k.length; l++) {
        var m = k[l];
        k[l] = {
            name: m[0],
            iso2: m[1],
            dialCode: m[2],
            priority: m[3] || 0,
            areaCodes: m[4] || null
        }
    }
});;
jQuery(function($) {
    var $window = $(window);
    var $document = $(document);
    var $header_top = $('#header .top');
    var header_mobile_breakpoint = 1130;

    function get_url_parameter(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1]
            .replace(/\+/g, " "));
    }
    jQuery.support.placeholder = (function() {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();
    if (!$.support.placeholder) {
        jQuery.validator.addMethod('placeholder', function(value,
            element) {
            if ($(element).is('.required')) return (value != $(
                element).attr('placeholder'));
            else return true;
        }, jQuery.validator.messages.required);
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr(
                'placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    }
    jQuery.validator.addMethod('email', function(value, element) {
        var regex =
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(value);
    }, jQuery.validator.messages.email);
    jQuery.validator.addMethod('atLeastOneDate', function(value,
        element) {
        if (value == '' && $($(element).attr(
            'data-the-other-date')).val() == '') {
            return false;
        } else return true;
    }, enchanting.lang.at_least_one_date_error);
    jQuery.validator.addMethod('dateGreaterThan', function(value,
        element) {
        var start_date = $($(element).attr(
            'data-greater-than-date')).val();
        if (value == '' || start_date == '') return true;
        if (!$.support.placeholder) {
            if (value == $(element).attr('placeholder')) return
                true;
        }
        if (!/Invalid/.test(new Date(value))) return new Date(
            value) > new Date(start_date);
        return false;
    }, enchanting.lang.after_start_date_error);
    var dropdown_timeout = 0;
    var dropdown_close_timer = 0;
    var dropdown_menu_item = 0;

    function dropdown_open() {
        if ($window.width() < header_mobile_breakpoint) return;
        dropdown_cancel_timer();
        dropdown_close();
        dropdown_menu_item = $(this).find('.submenu').addClass(
            'visible').css('visibility', 'visible');
    }

    function dropdown_close() {
        if (dropdown_menu_item) {
            dropdown_menu_item.removeClass('visible').css(
                'visibility', 'hidden');
        }
    }

    function dropdown_timer() {
        if ($window.width() < header_mobile_breakpoint) return;
        dropdown_close_timer = window.setTimeout(dropdown_close,
            dropdown_timeout);
    }

    function dropdown_cancel_timer() {
        if (dropdown_close_timer) {
            window.clearTimeout(dropdown_close_timer);
            dropdown_close_timer = null;
        }
    }
    $('#header nav ul > li').bind('mouseover', dropdown_open);
    $('#header nav ul > li').bind('mouseleave', dropdown_timer);
    var submenus = $('#header .submenu');
    submenus.each(function() {
        var width = 0;
        var count = 0;
        $(this).find('ul').each(function() {
            count++;
            if (count > 1) width += parseInt($(this).css(
                    'margin-left').replace('px', '')) +
                5;
            width += $(this).outerWidth();
        });
        if (width > 0) $(this).width(width);
    });
    var mobile_menu = $('#mobile-menu-container');
    var whole_site = $('#site-wrap, #header .top');
    $('#header .mobile-menu-button').click(function() {
        $(this).toggleClass('open');
        var menu_width = mobile_menu.outerWidth();
        if (!mobile_menu.is('.open')) {
            whole_site.addClass('open').animate({
                marginLeft: '-=' + menu_width
            }, 400, 'easeInOutQuart');
            mobile_menu.addClass('open').animate({
                right: 0
            }, 400, 'easeInOutQuart');
        } else {
            whole_site.animate({
                marginLeft: '+=' + menu_width
            }, 400, 'easeInOutQuart', function() {
                whole_site.removeClass('open');
            });
            mobile_menu.animate({
                right: '-=' + menu_width
            }, 400, 'easeInOutQuart', function() {
                mobile_menu.removeClass('open');
            });
        }
        return false;
    });
    $window.resize(function() {
        if ($window.width() <= header_mobile_breakpoint) {
            mobile_menu.height(window.innerHeight ? window.innerHeight :
                $window.height());
            if (whole_site.is('.open')) {
                whole_site.css('margin-left', 0 - mobile_menu.outerWidth());
            }
        }
    });
    $('#header nav ul > li > a').click(function() {
        if ($window.width() > header_mobile_breakpoint || !$(
            this).parent().is('.menu-item-has-children')) return
        ;
        $(this).parent().toggleClass('active');
        $(this).siblings('.submenu').slideToggle({
            easing: 'easeInOutQuart'
        });
        return false;
    });
    $('#two-col .col-left .mobile-submenu select').change(function() {
        location.href = $(this).val();
    });
    $('#two-col .col-left .mobile-container .handle').click(function() {
        $(this).toggleClass('active').next('.content').slideToggle({
            easing: 'easeInOutQuart'
        });
        return false;
    });
    var fixed_share_icons = $('.blog-single .fixed-share');
    if (fixed_share_icons.length !== 0) {
        var fixed_share_icons_scroll_top;
        var fixed_share_icons_stop = fixed_share_icons.offset().top -
            20;
        var doc_body = document.documentElement || document.body.parentNode ||
            document.body;
        var fixed_share_icons_has_offset = window.pageYOffset !==
            undefined;
        var fixed_share_icons_left;
        $window.resize(function() {
            fixed_share_icons.removeClass('stuck').removeAttr(
                'style');
            fixed_share_icons_left = (fixed_share_icons.offset()
                .left - ($window.width() / 2));
        });
        $window.scroll(function(e) {
            if (!fixed_share_icons.is(':visible')) return;
            fixed_share_icons_scroll_top =
                fixed_share_icons_has_offset ? window.pageYOffset :
                doc_body.scrollTop;
            if (fixed_share_icons_scroll_top >=
                fixed_share_icons_stop) fixed_share_icons.addClass(
                'stuck').css('margin-left',
                fixed_share_icons_left);
            else fixed_share_icons.removeClass('stuck').removeAttr(
                'style');
        });
    }
    var sticky_left_col = $('#two-col .col-left > .sticky');
    if (sticky_left_col.length !== 0) {
        $document.ready(function() {
            var sticky_left_col_offset = 40,
                sticky_left_col_offset_top = $(
                    '#two-col .col-left').offset().top,
                sticky_left_col_width;
            $window.resize(function() {
                sticky_left_col_offset_top = $(
                    '#two-col .col-left').offset().top;
                sticky_left_col_width = $(
                    '#two-col .col-left').outerWidth();
                if (sticky_left_col.is('.stuck')) {
                    var sticky_height = $window.outerHeight() -
                        $header_top.outerHeight() +
                        sticky_left_col_offset;
                    sticky_left_col.css({
                        left: $(
                            '#two-col .wrap'
                        ).offset().left,
                        width: sticky_left_col_width +
                            'px'
                    });
                }
            });
            $window.scroll(function(e) {
                if ($window.scrollTop() + $header_top.outerHeight() -
                    sticky_left_col_offset >=
                    sticky_left_col_offset_top) {
                    if (!sticky_left_col.is('.stuck')) {
                        sticky_left_col.addClass(
                            'stuck');
                        $window.trigger('resize');
                    }
                } else {
                    sticky_left_col.css({
                        left: 'auto',
                        width: 'auto',
                        height: 'auto',
                        overflowY: 'visible'
                    }).removeClass('stuck');
                }
                if (sticky_left_col.outerHeight() +
                    $header_top.outerHeight() > $(
                        '#footer').offset().top -
                    $window.scrollTop()) {
                    sticky_left_col.addClass('bottom');
                } else {
                    sticky_left_col.removeClass(
                        'bottom');
                }
            });
        });
    }
    var col_left_page_nav = $('#two-col .col-left .page-nav');
    if (col_left_page_nav.length !== 0) {
        var col_left_page_nav_items = col_left_page_nav.find('a');
        $window.scroll(function(e) {
            var highest_index = 0;
            col_left_page_nav_items.each(function(index) {
                var url = $(this).prop('href');
                if ($window.scrollTop() >= $(url.substring(
                        url.indexOf('#'))).offset().top -
                    $header_top.outerHeight() - 5) {
                    if (index > highest_index) {
                        highest_index = index;
                    }
                }
            });
            col_left_page_nav.find('li').removeClass('active').find(
                '.extender').remove();
            col_left_page_nav.find('li:eq(' + highest_index +
                ')').addClass('active').prepend(
                '<span class="extender"></span>');
        });
        col_left_page_nav_items.click(function() {
            var target = $($(this).prop('href').substring($(
                this).prop('href').indexOf('#')));
            if (target.length !== 0) {
                $('html, body').animate({
                    scrollTop: target.offset().top -
                        $header_top.outerHeight()
                }, 1000, 'easeInOutQuart', function() {
                    if (target.is('.accordion')) {
                        if (!target.find('article').is(
                            '.open')) {
                            target.find(
                                'article > .handle'
                            ).click();
                        }
                    }
                });
            }
            return false;
        });
    }
    var search_container = $('#header .search-container');
    $('#header .search-button').click(function() {
        if (search_container.is(':visible')) {
            search_container.slideUp({
                easing: 'easeInOutQuart'
            });
        } else {
            search_container.slideDown({
                easing: 'easeInOutQuart'
            });
            search_container.find('input').focus();
        }
        return false;
    });
    $document.on('mouseup.search', function(e) {
        var target = search_container.find('.input');
        if (search_container.is(':visible') && !target.is(e.target) &&
            target.has(e.target).length === 0) search_container
            .slideUp({
                easing: 'easeInOutQuart'
            });
    });
    var language_selector = $('#header .language');
    language_selector.find('.selected').click(function() {
        $(this).parent().toggleClass('active');
        return false;
    });
    $document.on('mouseup.language-selector', function(e) {
        if (!language_selector.is(e.target) &&
            language_selector.has(e.target).length === 0 &&
            language_selector.is('.active')) language_selector.removeClass(
            'active');
    });
    if ($('#home-page').length !== 0) {
        var home_slider_container = $('.home-slider');
        if (home_slider_container.length !== 0) {
            var home_slider = home_slider_container.find('.royalSlider')
                .royalSlider({
                    loop: true,
                    transitionType: 'fade',
                    slidesSpacing: 0,
                    imageScalePadding: 0,
                    arrowsNavAutoHide: false,
                    imageScaleMode: 'fill',
                    autoPlay: {
                        enabled: true,
                        pauseOnHover: false,
                        stopAtAction: false,
                        delay: 5000
                    }
                }).data('royalSlider');
            home_slider_container.find('.rsNav').wrap(
                '<div class="slides-nav"><div class="nav-container"></div></div>'
            );
            $('.slides-nav .nav-container').append(
                home_slider_container.find('.rsArrow'));
        }
        $('.button-how-it-works').click(function() {
            $('.how-it-works').slideToggle({
                easing: 'easeInOutQuart'
            });
            return false;
        });
        if ($('.find-inspiration').length !== 0) {
            $('.find-inspiration a').mouseenter(function() {
                if ($window.width() > 767) $(this).find('p').stop()
                    .slideDown({
                        easing: 'easeInOutQuart'
                    });
            });
            $('.find-inspiration a').mouseleave(function() {
                $(this).find('p').stop().slideUp({
                    easing: 'easeInOutQuart'
                });
            });
        }
        var questionnaire = $('.questionnaire');
        if (questionnaire.length !== 0) {
            $('.questionnaire-button').click(function() {
                $('html, body').animate({
                    scrollTop: $('#questionnaire').offset()
                        .top - $header_top.outerHeight()
                }, 1000, 'easeInOutQuart');
                return false;
            });
            var questionnaire_slider = questionnaire.find(
                '.royalSlider').royalSlider({
                loop: false,
                transitionType: 'move',
                slidesSpacing: 0,
                arrowsNav: false,
                controlNavigation: 'none',
                autoHeight: true,
                navigateByClick: false,
                sliderDrag: false,
                easeInOut: 'easeInOutQuart'
            }).data('royalSlider');
            questionnaire.find('.items a').click(function() {
                $(this).next('.check-box').find(
                    'input[type=checkbox]').click();
                return false;
            });
            questionnaire.find('.next').click(function() {
                questionnaire_slider.next();
                return false;
            });
            questionnaire.find('.prev').click(function() {
                questionnaire_slider.prev();
                return false;
            });
            questionnaire_slider.ev.on('rsBeforeMove', function(event,
                type, userAction) {
                if ($window.width() < 768) {
                    window.setTimeout(function() {
                        $('html, body').animate({
                                scrollTop: (
                                    questionnaire
                                    .offset().top -
                                    $header_top
                                    .outerHeight()
                                )
                            }, 1000,
                            'easeInOutQuart');
                    }, 600);
                }
            });
            questionnaire.find('form').validate({
                errorElement: 'div',
                invalidHandler: function() {
                    questionnaire_slider.updateSliderSize(
                        true);
                },
                submitHandler: function(form) {
                    var submit_button = $(form).find(
                        '.finish');
                    submit_button.addClass('submitting').text(
                        submit_button.attr(
                            'data-loading-text')).attr(
                        'disabled', 'disabled');
                    return true;
                }
            });
            var questionnaire_images = questionnaire.find('img');
            var questionnaire_images_count = 0;
            questionnaire_images.load(function() {
                questionnaire_images_count++;
                if (questionnaire_images_count ==
                    questionnaire_images.length) {
                    questionnaire_slider.updateSliderSize(true);
                }
            });
        }
    }
    $('a.show-more').click(function() {
        if ($(this).is('.inline')) $(this).prev('.hidden').addClass(
            'open').css('opacity', 0).css('display',
            'inline').animate({
            opacity: 1
        }, 600, 'easeInOutQuart');
        else $(this).prev('.hidden').addClass('open').slideDown({
            easing: 'easeInOutQuart'
        });
        $(this).fadeOut();
        return false;
    });
    $('.accordion .handle').click(function() {
        $(this).next('.content').slideToggle({
            easing: 'easeInOutQuart'
        });
        $(this).parent().toggleClass('open');
        return false;
    });
    $('.special-offers-accordion .handle').click(function() {
        $(this).next('.content').slideToggle({
            easing: 'easeInOutQuart'
        });
        $(this).parent().toggleClass('open');
        return false;
    });
    $('.accordion-shortcode .handle').click(function() {
        $(this).parent().find('.content').slideToggle({
            easing: 'easeInOutQuart'
        });
        $(this).parent().toggleClass('open');
        return false;
    });
    if ('' != location.hash) {
        var anchor_element = $(location.hash);
        if (0 !== anchor_element.length) {
            anchor_element = anchor_element.first();
            $('html, body').scrollTop(anchor_element.offset().top -
                $header_top.height() + 1);
            if (anchor_element.parent().is('.accordion') && !
                anchor_element.find('.content').is(':visible')) {
                anchor_element.find('.handle').click();
            }
        }
    }
    var banner_slideshow = $('#banner.slideshow .royalSlider');
    if (banner_slideshow.length !== 0) {
        var banner_slideshow_has_count = false;
        if (banner_slideshow.find('.rsImg').length > 1)
            banner_slideshow_has_count = true;
        var banner_slider = banner_slideshow.royalSlider({
            loop: true,
            imageScalePadding: 0,
            imageScaleMode: 'fill',
            imageAlignCenter: true,
            slidesSpacing: 0,
            controlNavigation: 'none',
            controlsInside: false,
            arrowsNavAutoHide: false,
            transitionType: 'fade',
            globalCaption: true,
            autoPlay: {
                enabled: true,
                pauseOnHover: false,
                delay: 5000
            }
        }).data('royalSlider');
        $('#banner.slideshow .rsArrow').detach().prependTo(
            '#banner.slideshow .wrap .controls');
        if (banner_slideshow.parent().is('.has-captions')) $(
            '#banner.slideshow .rsGCaption').detach().appendTo(
            '#banner.slideshow .wrap .text');
        if (banner_slideshow_has_count) $(
            '#banner.slideshow .wrap .controls .count').html('1 / ' +
            banner_slider.numSlides);
        banner_slider.ev.on('rsBeforeAnimStart', function(e) {
            if (banner_slideshow_has_count) $(
                    '#banner.slideshow .wrap .controls .count')
                .html((banner_slider.currSlideId + 1) + ' / ' +
                    banner_slider.numSlides);
            if (banner_slideshow.parent().is('.has-captions')) $(
                '#banner.slideshow .wrap .text h3, #banner.slideshow .wrap .text p'
            ).css('opacity', 0).animate({
                opacity: 1
            }, 500, 'easeInOutQuart');
        });
    }
    var checkbox_fields;

    function trigger_form_fields() {
        checkbox_fields = $('.check-box input[type=checkbox]');
        if (checkbox_fields.length !== 0) {
            var checkbox_count = 0;
            checkbox_fields.each(function() {
                checkbox_count++;
                $(this).attr('id', 'checkbox-' +
                    checkbox_count).next('label').attr(
                    'for', 'checkbox-' + checkbox_count
                );
            });
            checkbox_fields.unbind('change.class_names');
            checkbox_fields.bind('change.class_names', function() {
                if ($(this).is(':checked')) $(this).addClass(
                    'checked');
                else $(this).removeClass('checked');
                $(this).blur();
            }).trigger('change.class_names');
        }
        radio_fields = $('.check-box input[type=radio]');
        if (radio_fields.length !== 0) {
            var radio_count = 0;
            radio_fields.each(function() {
                radio_count++;
                $(this).attr('id', 'radio-' +
                    radio_count).next('label').attr(
                    'for', 'radio-' + radio_count
                );
            });
            radio_fields.unbind('change.class_names');
            radio_fields.bind('change.class_names', function() {
                if ($(this).is(':checked')) {
                    $(this).parentsUntil('.qquestions').find('input[type=radio]').removeClass('checked');
                    $(this).addClass('checked');
                }
                else 
                    $(this).removeClass('checked');
                $(this).blur();
            }).trigger('change.class_names');
        }
        $('.select-box select').focus(function() {
            $(this).parent().addClass('focus');
        }).blur(function() {
            $(this).parent().removeClass('focus');
            if ('' != $(this).val()) {
                $(this).parent().addClass('not-empty');
            } else {
                $(this).parent().removeClass('not-empty');
            }
        });
        $('.range-slider').each(function() {
            if ($(this).find('.ui-widget').length !== 0) {
                return;
            }
            var slider = $(this).find('.slider'),
                values = $.map(slider.attr('data-values').split(
                    ','), function(value) {
                    return parseInt(value, 10);
                }),
                min = parseInt(slider.attr('data-min')),
                max = parseInt(slider.attr('data-max'));
            $(this).find('.min .value').html(values[0]);
            $(this).find('.max .value').html(values[1]);
            $(this).find('input[type=hidden]').prop('value',
                values[0] + ':' + values[1]);
            slider.slider({
                range: true,
                min: min,
                max: max,
                values: values,
                slide: function(event, ui) {
                    $(this).parent().find(
                        '.min .value').html(
                        ui.values[0]);
                    $(this).parent().find(
                        '.max .value').html(
                        ui.values[1]);
                    $(this).siblings(
                        'input[type=hidden]'
                    ).prop('value', ui.values[
                        0] + ':' + ui.values[
                        1]);
                },
                change: function(event, ui) {
                    $(this).parent().find(
                        '.min .value').html(
                        ui.values[0]);
                    $(this).parent().find(
                        '.max .value').html(
                        ui.values[1]);
                    $(this).siblings(
                        'input[type=hidden]'
                    ).prop('value', ui.values[
                        0] + ':' + ui.values[
                        1]);
                }
            });
            slider.draggable({
                containment: "parent"
            });
        });
        if ($('.input-phone').length !== 0) {
            $('.input-phone').each(function() {
                var default_country = '';
                var my_country = $(this).attr(
                    'data-default-country');
                if (typeof my_country !== typeof undefined &&
                    my_country !== false) {
                    default_country = my_country;
                }
                $(this).intlTelInput({
                    utilsScript: enchanting.template_url +
                        '/assets/js/jquery.intltelinput.utils.js',
                    preferredCountries: ['us', 'de',
                        'gb', 'ca', 'fr', 'au'
                    ],
                    nationalMode: false,
                    defaultCountry: default_country
                });
            });
        }
    }
    trigger_form_fields();
    if ($('.vacations-container').length !== 0) {
        var vacations = $('.vacations-container article');
        if (vacations.length !== 0) {
            vacations.bind('mouseenter.places_event', function() {
                if ($window.width() > 767) {
                    $(this).find('.places').stop().slideDown({
                        easing: 'easeInOutQuart'
                    });
                }
            });
            vacations.bind('mouseleave.places_event', function() {
                if ($window.width() > 767) {
                    $(this).find('.places').stop().slideUp({
                        easing: 'easeInOutQuart'
                    });
                }
            });
        }
    }
    if ($('.vacations-search').length !== 0) {
        function Vacations_Search() {
            var _this = this;
            this.filters = $('.vacations-search .filters');
            this.results_loading = $(
                '.vacations-search .results-loading');
            this.results = $('.vacations-search .results');
            this.load_more_link = $('.load-more-button');
            this.settings = enchanting_vacations_search;
            this.save_initial_state = false;
            this.initial_filter_values = {};
            this.prevent_ajax = false;
            $window.resize(function() {
                var new_height = $window.outerHeight() -
                    $header_top.outerHeight() - _this.filters
                    .find('.handle').outerHeight();
                _this.filters.find('.filters-container').css(
                    'height', new_height + 'px');
                if (!_this.filters.find('.filters-buttons')
                    .is(':visible')) {
                    $('body').css('overflow', 'auto');
                }
            });
            this.filters.find('.handle').click(function() {
                var filters_container = $(this).next(
                    '.filters-container');
                if (!filters_container.is(':visible')) {
                    $('body').css('overflow', 'hidden');
                } else {
                    $('body').css('overflow', 'auto');
                }
                $(this).toggleClass('active');
                filters_container.fadeToggle();
                _this.filters.find('.filter-buttons').fadeToggle();
                _this.filters.find('.select2-input').focus()
                    .blur();
                return false;
            });
            this.filters.find('select[multiple=multiple]').select2()
                .on('change', function(e) {
                    _this.trigger_filter();
                });
            this.filters.find('.destinations input[type=checkbox]')
                .click(function() {
                    var parent = $(this).closest(
                        '.destinations');
                    var siblings = parent.find(
                        'input[type=checkbox][value!="all"]'
                    );
                    var all_alone = parent.find(
                        'input[type=checkbox][value="all"]'
                    );
                    if ('all' == $(this).val()) {
                        siblings.prop('checked', false).removeClass(
                            'checked');
                    } else if (siblings.filter(':checked').length >
                        0 && all_alone.prop('checked')) {
                        all_alone.prop('checked', false).removeClass(
                            'checked');
                    } else if (siblings.filter(':checked').length ==
                        0 && !all_alone.prop('checked')) {
                        all_alone.prop('checked', true).addClass(
                            'checked');
                    }
                    _this.trigger_filter();
                });
            this.filters.find('.select-box select').change(function() {
                _this.trigger_filter();
            });
            this.filters.find('.range-slider .slider').on(
                'slidestop', function(event, ui) {
                    _this.trigger_filter();
                });
            this.filters.find('.interests a').click(function() {
                $(this).toggleClass('active');
                _this.trigger_filter();
                return false;
            });
            this.results.delegate(
                '.title-sort input[type=checkbox]', 'click',
                function() {
                    var all = $(this).parent().parent().find(
                        'input[type=checkbox][value="all"]'
                    );
                    var most_popular = $(this).parent().parent()
                        .find(
                            'input[type=checkbox][value!="all"]'
                        );
                    if ('all' != $(this).val()) {
                        all.prop('checked', false).removeClass(
                            'checked');
                    } else {
                        most_popular.prop('checked', false).removeClass(
                            'checked');
                    }
                    _this.filter_results();
                });
            this.results.delegate('.title-sort select', 'change',
                function() {
                    _this.filter_results();
                });
            this.filters.parent().delegate('a.reset-all', 'click',
                function() {
                    _this.prevent_ajax = true;
                    if (_this.save_initial_state) {
                        _this.filters.find(
                            '.destinations input[type=checkbox]'
                        ).prop('checked', false).removeClass(
                            'checked');
                        for (i = 0; i < _this.initial_filter_values
                            .destinations.length; i++) {
                            _this.filters.find(
                                '.destinations input[type=checkbox][value=' +
                                _this.initial_filter_values
                                .destinations[i] + ']').prop(
                                'checked', true).addClass(
                                'checked');
                        }
                        try {
                            _this.filters.find(
                                'select[multiple=multiple]'
                            ).select2('data', _this.initial_filter_values
                                .countries, true);
                        } catch (e) {}
                        _this.filters.find('.select-box select')
                            .val(_this.initial_filter_values.duration);
                        _this.filters.find(
                            '.range-slider .slider').slider(
                            'values', 0, _this.initial_filter_values
                            .price.min);
                        _this.filters.find(
                            '.range-slider .slider').slider(
                            'values', 1, _this.initial_filter_values
                            .price.max);
                        _this.filters.find(
                            '.range-slider .range-value').val(
                            _this.initial_filter_values.price
                            .value);
                        _this.filters.find(
                            '.interests a.active').removeClass(
                            'active');
                        $.each(_this.initial_filter_values.interests,
                            function(index, value) {
                                _this.filters.find(
                                    '.interests a[data-filter=' +
                                    value + ']').addClass(
                                    'active');
                            });
                    } else {
                        _this.filters.find(
                            '.destinations input[type=checkbox]'
                        ).prop('checked', false).removeClass(
                            'checked');
                        _this.filters.find(
                            '.destinations input[type=checkbox][value=all]'
                        ).prop('checked', true).addClass(
                            'checked');
                        try {
                            _this.filters.find(
                                'select[multiple=multiple]'
                            ).select2('data', null);
                        } catch (e) {}
                        _this.filters.find('.select-box select')
                            .val('');
                        var default_price = _this.filters.find(
                            '.range-slider .slider').attr(
                            'data-default-values').split(
                            ',');
                        _this.filters.find(
                            '.range-slider .slider').slider(
                            'values', 0, parseInt(
                                default_price[0]));
                        _this.filters.find(
                            '.range-slider .slider').slider(
                            'values', 1, parseInt(
                                default_price[1]));
                        _this.filters.find(
                            '.range-slider .range-value').val(
                            _this.filters.find(
                                '.range-slider .slider').attr(
                                'data-default-values'));
                        _this.filters.find(
                            '.interests a.active').removeClass(
                            'active');
                    }
                    _this.prevent_ajax = false;
                    _this.trigger_filter();
                    return false;
                });
            this.filters.find('.filter-buttons a').click(function() {
                if ($(this).is('.apply')) {
                    _this.filter_results();
                    $(this).parent().parent().scrollTop(0);
                    $window.scrollTop(0);
                }
                _this.filters.find('.handle').click();
                return false;
            });
            this.load_more_link.click(function() {
                $(this).html($(this).attr(
                    'data-loading-text'));
                _this.get_ajax_results($(this).prop('href'),
                    false);
                return false;
            });
            this.save_initial_filter_values = function() {
                this.initial_filter_values.destinations = [];
                this.filters.find(
                    '.destinations input[type=checkbox]:checked'
                ).each(function() {
                    _this.initial_filter_values.destinations
                        .push($(this).val());
                });
                this.initial_filter_values.countries = this.filters
                    .find('select[multiple=multiple]').select2(
                        'data');
                this.initial_filter_values.duration = this.filters
                    .find('.select-box select').val();
                this.initial_filter_values.price = {};
                this.initial_filter_values.price.value = this.filters
                    .find('.range-slider .range-value').val();
                this.initial_filter_values.price.min = this.filters
                    .find('.range-slider .slider').slider(
                        'values')[0];
                this.initial_filter_values.price.max = this.filters
                    .find('.range-slider .slider').slider(
                        'values')[1];
                this.initial_filter_values.interests = [];
                this.filters.find('.interests a.active').each(
                    function() {
                        _this.initial_filter_values.interests
                            .push($(this).attr(
                                'data-filter'));
                    });
                this.initial_filter_values.most_popular = this.results
                    .find(
                        '.title-sort input[type=checkbox]:checked'
                    ).first().val();
                this.initial_filter_values.sort = this.results.find(
                    '.title-sort select').val();
            }
            if (this.save_initial_state) {
                this.save_initial_filter_values();
            }
            this.trigger_filter = function() {
                if (!this.filters.find('.filter-buttons').is(
                    ':visible')) {
                    this.filter_results();
                }
            }
            this.filter_results = function() {
                var params = [];
                var places = this.filters.find('.places').val();
                if ('' != places) {
                    params.push('_' + this.settings.labels.places +
                        '=' + places);
                }
                var hotels = this.filters.find('.hotels').val();
                if ('' != hotels) {
                    params.push('_' + this.settings.labels.hotels +
                        '=' + hotels);
                }
                var destinations = [];
                this.filters.find(
                    '.destinations input[type=checkbox]:checked'
                ).each(function() {
                    if ('all' != $(this).val()) {
                        destinations.push($(this).val());
                    }
                });
                if (destinations.length !== 0) {
                    params.push('_' + this.settings.labels.destinations +
                        '=' + destinations.join(','));
                }
                var countries = this.filters.find(
                    'select[multiple=multiple]').select2(
                    'val');
                if ('' != countries) {
                    params.push('_' + this.settings.labels.countries +
                        '=' + countries);
                }
                var duration = this.filters.find(
                    '.select-box select').val();
                if ('' != duration) {
                    params.push('_' + this.settings.labels.duration +
                        '=' + duration);
                }
                var price = this.filters.find(
                    '.range-slider .range-value').val();
                if ('' != price) {
                    params.push('_' + this.settings.labels.price +
                        '=' + price.replace(':', ','));
                }
                var interests = [];
                this.filters.find('.interests a.active').each(
                    function() {
                        interests.push($(this).attr(
                            'data-filter'));
                    });
                if (interests.length !== 0) {
                    params.push('_' + this.settings.labels.interests +
                        '=' + interests.join(','));
                }
                var most_popular = this.results.find(
                    '.title-sort input[type=checkbox]:checked'
                ).first().val();
                if ('all' != most_popular && typeof most_popular !==
                    'undefined') {
                    params.push('_' + this.settings.labels.most_popular +
                        '=1');
                }
                var sort = this.results.find(
                    '.title-sort select').val();
                if ('' != sort && typeof sort !== 'undefined') {
                    params.push('_' + this.settings.labels.sort +
                        '=' + sort);
                }
                params = params.join('&');
                var url = this.settings.ajax_url;
                if ('' != params) {
                    url += '?' + params;
                    var locale_array = ['gb', 'au', 'ca'];
                    if ($.inArray(this.settings.locale,
                        locale_array) !== -1) {
                        url += '&_' + this.settings.labels.locale +
                            '=' + this.settings.locale;
                    }
                }
                try {
                    window.history.replaceState(null, "", url);
                } catch (e) {}
                this.get_ajax_results(url, true);
            }
            this.get_ajax_results = function(url, clear_results) {
                if (this.prevent_ajax) {
                    return;
                }
                if (clear_results) {
                    this.results.empty();
                    this.results_loading.show();
                    this.load_more_link.hide();
                }
                $.ajax({
                    url: url,
                    dataType: 'html',
                    cache: false,
                    success: function(result) {
                        if (clear_results) {
                            _this.results.empty();
                            var title_sort = $(
                                result).find(
                                '.vacations-search .results .title-sort'
                            );
                            if (title_sort.length !==
                                0) {
                                _this.results.append(
                                    title_sort);
                            }
                            trigger_form_fields();
                            _this.results.append(
                                '<div class="rows"></div>'
                            );
                            _this.results_loading.hide();
                        }
                        var new_rows = $(result).find(
                            '.vacations-search .results .rows .row'
                        );
                        if (new_rows.length !== 0) {
                            new_posts = new_rows.find(
                                'article');
                            new_posts.css('opacity',
                                0);
                            _this.results.find(
                                '.rows').append(
                                new_rows);
                            var show_delay = 0;
                            new_posts.each(function() {
                                var me = $(
                                    this
                                );
                                show_delay
                                    += 300;
                                setTimeout(
                                    function() {
                                        me
                                            .animate({
                                                    opacity: 1
                                                },
                                                300,
                                                'easeInOutQuart'
                                            );
                                    },
                                    show_delay
                                );
                            });
                        } else {
                            var no_results_found =
                                $(result).find(
                                    '.no-results-found'
                                );
                            if (no_results_found.length !==
                                0) {
                                _this.results.append(
                                    no_results_found
                                );
                            }
                        }
                        var more_results_link = $(
                            result).find(
                            '.load-more-button'
                        );
                        if (more_results_link.length !==
                            0 && more_results_link.css(
                                'display') !=
                            'none') {
                            _this.load_more_link.css(
                                'display',
                                'block').attr(
                                'href',
                                more_results_link
                                .attr('href')).html(
                                more_results_link
                                .html());
                        } else {
                            _this.load_more_link.css(
                                'display',
                                'none');
                        }
                        _this.prevent_ajax = false;
                        trigger_inquire_modal();
                    },
                    error: function(jqXHR, textStatus,
                        errorThrown) {
                        _this.prevent_ajax = false;
                        alert(enchanting.lang.ajax_error);
                    }
                });
            }
        }
        var $vacations_search = new Vacations_Search();
        $vacations_search.results.delegate('article > a', 'mouseenter',
            function() {
                $(this).find('.additional-info').stop().slideDown({
                    duration: 300,
                    easing: 'easeInOutQuart'
                });
            });
        $vacations_search.results.delegate('article > a', 'mouseleave',
            function() {
                $(this).find('.additional-info').stop().slideUp({
                    duration: 300,
                    easing: 'easeInOutQuart'
                });
            });
    }
    if ($('.vacations-single').length !== 0) {
        function Vacations_Single() {
            var _this = this;
            this.settings = enchanting_vacations_single;
            this.city_links = $('.vacations-single a.city-image');
            this.city_links.click(function() {
                if ($(this).find('.gallery').length !== 0 &&
                    $(this).find('.gallery').is(':visible')
                ) {
                    var place_id = $(this).find('.gallery')
                        .attr('data-place-id');
                    if (place_id in _this.settings.galleries) {
                        var images = _this.settings.galleries[
                            place_id];
                        if (images.length !== 0) {
                            for (i = 0; i < images.length; i++) {
                                $full_screen_gallery.add_image(
                                    images[i]);
                            }
                            $full_screen_gallery.run();
                        }
                    }
                    return false;
                }
            });
        }
        var $vacations_single = new Vacations_Single();
    }
    if ($('.full-screen-gallery').length !== 0) {
        function Full_Screen_Gallery() {
            var _this = this;
            this.container = $('.full-screen-gallery');
            this.close = this.container.find('.close');
            this.slider = this.container.find('.royalSlider');
            this.controls = this.container.find('.controls');
            this.slider_data = null;
            this.images = [];
            this.close.click(function() {
                _this.destroy();
                if (_this.images.length !== 0) {
                    _this.clear_images();
                }
                return false;
            });
            this.add_image = function(image_url) {
                this.images.push(image_url);
                this.slider.append('<img src="' + image_url +
                    '" class="rsImg">');
            }
            this.clear_images = function() {
                this.slider.html('');
            }
            this.run = function() {
                this.container.fadeIn();
                this.slider_data = this.slider.royalSlider({
                    loop: true,
                    imageScalePadding: 0,
                    imageScaleMode: 'fill',
                    imageAlignCenter: true,
                    slidesSpacing: 0,
                    controlNavigation: 'none',
                    controlsInside: false,
                    arrowsNavAutoHide: false,
                    transitionType: 'fade',
                    globalCaption: true,
                    autoPlay: {
                        enabled: true,
                        pauseOnHover: false,
                        delay: 5000
                    }
                }).data('royalSlider');
                this.slider.find('.rsArrow').detach().prependTo(
                    this.controls);
                this.controls.find('.count').html('1 / ' + this
                    .slider_data.numSlides);
                this.slider_data.ev.on('rsBeforeAnimStart',
                    function(e) {
                        _this.controls.find('.count').html(
                            (_this.slider_data.currSlideId +
                                1) + ' / ' + _this.slider_data
                            .numSlides);
                    });
            }
            this.destroy = function() {
                this.container.fadeOut();
                this.slider_data.destroy();
                this.controls.html('<div class="count"></div>');
            }
        }
        var $full_screen_gallery = new Full_Screen_Gallery();
    }
    var destination_map = $('.destination-landing-map');
    if (destination_map.length !== 0) {
        var main_map = destination_map.find('.main-map');
        var main_map_image = main_map.prop('src');
        var my_areas = destination_map.find('area');
        if (my_areas.length !== 0) {
            my_areas.mouseover(function() {
                main_map.prop('src', $(this).attr('data-image'));
            });
            my_areas.mouseleave(function() {
                main_map.prop('src', main_map_image);
            });
        }
    }
    var place_results_link = $('.region-single .more-places');
    place_results_link.click(function() {
        $(this).html($(this).attr('data-loading-text'));
        var url = $(this).attr('href');
        get_places_ajax_results(url);
        return false;
    });

    function get_places_ajax_results(url) {
        $.ajax({
            url: url,
            dataType: 'html',
            cache: false,
            success: function(result) {
                var new_rows = $(result).find(
                    '.places .row');
                if (new_rows.length !== 0) {
                    $('.region-single .places').append(
                        new_rows);
                }
                var more_results_link = $(result).find(
                    '.more-places');
                if (more_results_link.length !== 0)
                    place_results_link.css('display',
                        'block').attr('href',
                        more_results_link.attr('href'))
                    .html(more_results_link.html());
                else place_results_link.css('display',
                    'none');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(enchanting.lang.ajax_error);
            }
        });
    }
    var smart_search = $('.smart-search');
    var smart_search_input, smart_search_input_container,
        smart_seach_results, smart_search_keyword = '';

    function bind_smart_search_results_event() {
        smart_search_input.unbind('keyup.arrows');
        smart_search_results = smart_search_input_container.find(
            '.results');
        var results = smart_search_input_container.find(
            '.results li');
        var result_links = results.find('a');
        if (results.length !== 0) {
            result_links.unbind('click.smart_search');
            result_links.bind('click.smart_search', function() {
                smart_search_input.prop('value', $(this).text());
                smart_search_results.remove();
            });
            result_links.unbind('mouseover.smart_search');
            result_links.bind('mouseover.smart_search', function() {
                result_links.removeClass('hover');
                $(this).addClass('hover');
            });
            result_links.unbind('mouseout.smart_search');
            result_links.bind('mouseout.smart_search', function() {
                $(this).removeClass('hover');
            });
            smart_search_input.bind('keyup.arrows', function(e) {
                var selected_index = results.find('a.hover')
                    .parent().index();
                if (e.which == 38) {
                    selected_index--;
                    results.find('a').removeClass('hover');
                    results.eq(selected_index).find('a').addClass(
                        'hover');
                    e.preventDefault();
                } else if (e.which == 40) {
                    selected_index++;
                    results.find('a').removeClass('hover');
                    results.eq(selected_index).find('a').addClass(
                        'hover');
                    e.preventDefault();
                } else if (e.which == 13) {
                    if (selected_index === -1) return;
                    var my_link = results.eq(selected_index)
                        .find('a');
                    my_link.addClass('hover').click();
                    location.href = my_link.attr('href');
                } else if (e.which == 27) {
                    if (smart_search_results.is(':visible'))
                        smart_search_results.fadeOut();
                }
            });
            smart_search_input.on('focus.smart_search', function() {
                if (!smart_search_results.is(':visible'))
                    smart_search_results.fadeIn();
            });
            $document.on('mouseup.smart_search', function(e) {
                if (!smart_search_input_container.is(e.target) &&
                    smart_search_input_container.has(e.target)
                    .length === 0 && smart_search_results.is(
                        ':visible')) smart_search_results.fadeOut();
            });
        }
    }
    if (smart_search.length !== 0) {
        smart_search_input = smart_search.find('.input');
        smart_search_input_container = smart_search_input.parent();
        bind_smart_search_results_event();
        smart_search_input.keydown(function(e) {
            var allowed_array = [8, 13, 16, 17, 20, 32, 35, 36,
                37, 39, 45, 46
            ];
            for (var i = 65; i <= 90; i++) {
                allowed_array.push(i);
            }
            if ($.inArray(e.which, allowed_array) === -1) e.preventDefault();
        });
        smart_search_input.keyup(function(e) {
            if ($(this).val() == smart_search_keyword) return;
            smart_search_keyword = $(this).val();
            if (smart_search_keyword.length < 2) {
                smart_search_input_container.find('.results').remove();
                return;
            }
            smart_search_input_container.addClass('loading');
            $.ajax({
                url: enchanting.ajax_url,
                dataType: 'json',
                data: {
                    action: 'smart_search',
                    keyword: smart_search_keyword
                },
                method: 'post',
                cache: false,
                success: function(response) {
                    smart_search_input_container.removeClass(
                        'loading');
                    smart_search_input_container.find(
                        '.results').remove();
                    if (response.length === 0) {
                        bind_smart_search_results_event
                            ();
                        return;
                    } else if (response.status ==
                        'error') {
                        bind_smart_search_results_event
                            ();
                        alert(response.message);
                        return;
                    }
                    var results = $(
                        '<ul class="results"></ul>'
                    );
                    var re = new RegExp(
                        smart_search_keyword,
                        'gi');
                    if (response.results.length !==
                        0) {
                        for (i = 0; i < response.results
                            .length; i++) {
                            results.append(
                                '<li><a href="' +
                                response.results[
                                    i].url +
                                '">' + response
                                .results[i].label
                                .replace(re,
                                    '<strong>$&</strong>'
                                ) + '</a></li>'
                            );
                        }
                    }
                    if (results.find('li').length !==
                        0 && smart_search_input.val() !=
                        '') {
                        smart_search_input_container
                            .append(results);
                        smart_search_input_container
                            .find('.results li').first()
                            .find('a').addClass(
                                'hover');
                    }
                    bind_smart_search_results_event
                        ();
                },
                error: function(jqXHR, textStatus,
                    errorThrown) {
                    alert(enchanting.lang.ajax_error);
                }
            });
        });
    }
    if ($('.guest-reviews').length !== 0) {
        function Guest_Reviews() {
            var _this = this;
            this.filters = $('.guest-reviews .filters');
            this.results_loading = $(
                '.guest-reviews .results-loading');
            this.results = $('.guest-reviews .reviews');
            this.settings = enchanting_guest_reviews;
            this.prevent_ajax = false;
            $window.resize(function() {
                var new_height = $window.outerHeight() -
                    $header_top.outerHeight() - _this.filters
                    .find('.handle').outerHeight();
                _this.filters.find('.filters-container').css(
                    'height', new_height + 'px');
                if (!_this.filters.find('.filters-buttons')
                    .is(':visible')) {
                    $('body').css('overflow', 'auto');
                }
            });
            this.filters.find('.handle').click(function() {
                var filters_container = $(this).siblings(
                    '.filters-container');
                if (!filters_container.is(':visible')) {
                    $('body').css('overflow', 'hidden');
                } else {
                    $('body').css('overflow', 'auto');
                }
                $(this).toggleClass('active');
                filters_container.fadeToggle();
                _this.filters.find('.filter-buttons').fadeToggle();
                _this.filters.find('.select2-input').focus()
                    .blur();
                return false;
            });
            this.filters.find('select[multiple=multiple]').select2()
                .on('change', function(e) {
                    _this.trigger_filter();
                });
            this.filters.find('.destinations input[type=checkbox]')
                .click(function() {
                    var parent = $(this).closest(
                        '.destinations');
                    var siblings = parent.find(
                        'input[type=checkbox][value!="all"]'
                    );
                    var all_alone = parent.find(
                        'input[type=checkbox][value="all"]'
                    );
                    if ('all' == $(this).val()) {
                        siblings.prop('checked', false).removeClass(
                            'checked');
                    } else if (siblings.filter(':checked').length >
                        0 && all_alone.prop('checked')) {
                        all_alone.prop('checked', false).removeClass(
                            'checked');
                    } else if (siblings.filter(':checked').length ==
                        0 && !all_alone.prop('checked')) {
                        all_alone.prop('checked', true).addClass(
                            'checked');
                    }
                    _this.trigger_filter();
                });
            this.filters.find('.select-box select').change(function() {
                _this.trigger_filter();
            });
            this.filters.find('.filter-buttons a').click(function() {
                if ($(this).is('.apply')) {
                    _this.filter_results();
                    $(this).parent().parent().scrollTop(0);
                    _this.scroll_to_results_top();
                }
                _this.filters.find('.handle').click();
                return false;
            });
            this.filters.parent().delegate('a.reset-all', 'click',
                function() {
                    _this.prevent_ajax = true;
                    _this.filters.find(
                        '.destinations input[type=checkbox]'
                    ).prop('checked', false).removeClass(
                        'checked');
                    _this.filters.find(
                        '.destinations input[type=checkbox][value=all]'
                    ).prop('checked', true).addClass(
                        'checked');
                    try {
                        _this.filters.find(
                            'select[multiple=multiple]').select2(
                            'data', null);
                    } catch (e) {}
                    _this.filters.find('.select-box select').val(
                        '');
                    _this.prevent_ajax = false;
                    _this.trigger_filter();
                    return false;
                });
            this.trigger_filter = function() {
                if (!this.filters.find('.filter-buttons').is(
                    ':visible')) {
                    this.filter_results();
                }
            }
            $('.guest-reviews').delegate('.pagination a', 'click',
                function() {
                    _this.get_ajax_results($(this).prop('href'));
                    _this.scroll_to_results_top();
                    return false;
                });
            this.scroll_to_results_top = function() {
                if (this.filters.find('.handle').is(':visible')) {
                    $window.scrollTop(_this.results_loading.offset()
                        .top - $header_top.outerHeight() -
                        _this.filters.find('.handle').outerHeight() -
                        80);
                } else {
                    $window.scrollTop(_this.filters.offset().top -
                        $header_top.outerHeight());
                }
            }
            this.filter_results = function() {
                var params = [];
                var destinations = [];
                this.filters.find(
                    '.destinations input[type=checkbox]:checked'
                ).each(function() {
                    if ('all' != $(this).val()) {
                        destinations.push($(this).val());
                    }
                });
                if (destinations.length !== 0) {
                    params.push('_' + this.settings.labels.destinations +
                        '=' + destinations.join(','));
                }
                var regions = this.filters.find(
                    'select[multiple=multiple]').select2(
                    'val');
                if ('' != regions) {
                    params.push('_' + this.settings.labels.regions +
                        '=' + regions);
                }
                var country = this.filters.find(
                    'select.country').val();
                if ('' != country) {
                    params.push('_' + this.settings.labels.country +
                        '=' + country);
                }
                params = params.join('&');
                var url = this.settings.ajax_url;
                if ('' != params) {
                    url += '?' + params;
                }
                try {
                    window.history.replaceState(null, "", url);
                } catch (e) {}
                this.get_ajax_results(url);
            }
            this.get_ajax_results = function(url) {
                if (this.prevent_ajax) {
                    return;
                }
                this.results.html('');
                this.results_loading.show();
                $.ajax({
                    url: url,
                    dataType: 'html',
                    cache: false,
                    success: function(result) {
                        _this.results_loading.hide();
                        var results = $(result).find(
                            '.reviews');
                        if (results.length !== 0) {
                            _this.results.append(
                                results.html());
                        }
                        this.prevent_ajax = false;
                    },
                    error: function(jqXHR, textStatus,
                        errorThrown) {
                        alert(enchanting.lang.ajax_error);
                        this.prevent_ajax = false;
                    }
                });
            }
        }
        var $guest_reviews = new Guest_Reviews();
        var read_more_characters = 275;
        $('.guest-reviews .reviews .items p.review').each(function() {
            var content = $(this).html();
            if (content.length > read_more_characters) {
                var c = content.substr(0, read_more_characters);
                var h = content.substr(read_more_characters,
                    content.length - read_more_characters);
                var html = c +
                    '<span class="read-more-ellipses">...&nbsp;</span><span class="read-more-content"><span>' +
                    h +
                    '</span>&nbsp;&nbsp;<a href="#" class="read-more-link">' +
                    enchanting.lang.read_more + '</a></span>';
                $(this).html(html);
            }
        });
        $('.guest-reviews .reviews .items .read-more-link').click(
            function() {
                $(this).prev().toggle();
                $(this).parent().prev().toggle();
                $(this).toggle();
                return false;
            });
    }
    if ($('.plan-contact.plan-my-trip').length !== 0) {
        $('.plan-my-trip .destinations select').select2();
        $('.plan-my-trip .form-info').mouseenter(function() {
            var the_tooltip = $(this).find('.tooltip');
            the_tooltip.stop().css({
                visibility: 'visible',
                top: 0 - the_tooltip.outerHeight() - 5
            }).animate({
                opacity: 1,
                top: '-=10'
            });
        });
        $('.plan-my-trip .form-info').mouseleave(function() {
            var the_tooltip = $(this).find('.tooltip');
            the_tooltip.animate({
                opacity: 0
            }, function() {
                the_tooltip.css('visibility', 'hidden');
            });
        });
        var submit_button = $('.plan-my-trip form .submit');
        submit_button.removeAttr('disabled');
        $('.plan-my-trip form').validate({
            errorElement: 'div',
            errorPlacement: function(error, element) {
                if (element.attr('name') ==
                    'fields[travel_dates][]') error.insertAfter(
                    element.parent().parent().next(
                        '.row'));
                else error.insertAfter(element);
            },
            submitHandler: function(form) {
                if (!$.support.placeholder) {
                    $('.plan-my-trip form .placeholder').each(
                        function() {
                            if ($(this).val() == $(this)
                                .attr('placeholder')) $(
                                this).val('');
                        });
                }
                submit_button.text(submit_button.attr(
                    'data-loading-text')).attr(
                    'disabled', 'disabled');
                return true;
            }
        });
    }
    $('a[data-remodal-target="contact-modal"]').click(function() {
        $document.bind('opened.contact_modal', '.remodal',
            function() {
                var contact_form = $(
                    '.remodal-wrapper form');
                var submit_button = contact_form.find(
                    'button');
                contact_form.validate({
                    errorElement: 'div',
                    submitHandler: function(form) {
                        submit_button.text(
                            submit_button.attr(
                                'data-loading-text'
                            )).attr(
                            'disabled',
                            'disabled');
                        return true;
                    }
                });
                $document.unbind('opened.contact_modal');
            });
    });
    if ($('.plan-contact.contact-us').length !== 0) {
        var submit_button = $('.contact-us form .submit');
        submit_button.removeAttr('disabled');
        $('.contact-us form').validate({
            errorElement: 'div',
            submitHandler: function(form) {
                submit_button.text(submit_button.attr(
                    'data-loading-text')).attr(
                    'disabled', 'disabled');
                return true;
            }
        });
    }

    function trigger_inquire_modal() {
        $('a[data-remodal-target=inquire-modal]').unbind(
            'click.modal');
        $('a[data-remodal-target=inquire-modal]').bind(
            'click.modal', function() {
                var inquiry_title = $(this).attr('data-title'),
                    inquiry_url = $(this).attr('data-url');
                $document.on('opening', '.remodal', function() {
                    var my_modal = $('.remodal-wrapper')
                        .find('.inquire-modal');
                    if (my_modal.length !== 0) {
                        my_modal.find('h6').html(
                            inquiry_title);
                        my_modal.find('.inquiry-title')
                            .val(inquiry_title);
                        my_modal.find('.inquiry-url').val(
                            inquiry_url);
                    }
                    my_modal.find('form').validate({
                        errorElement: 'div',
                        errorPlacement: function(
                            error, element) {
                            if (element.is(
                                '.input-phone'
                            )) {
                                error.insertAfter(
                                    element
                                    .parent()
                                );
                            } else {
                                error.insertAfter(
                                    element
                                );
                            }
                        },
                        submitHandler: function(
                            form) {
                            var
                                submit_button =
                                $(form).find(
                                    'button[type=submit]'
                                );
                            submit_button.text(
                                submit_button
                                .attr(
                                    'data-loading-text'
                                )).attr(
                                'disabled',
                                'disabled'
                            );
                            return true;
                        }
                    });
                });
            });
    }
    trigger_inquire_modal();
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent
        .match(/AppleWebKit/)) {
        var all_remodals = $('.remodal-wrapper');
        if (all_remodals.length !== 0) {
            all_remodals.addClass('touch-device');
        }
    }
    var form_validate = $('.form-validate');
    if (form_validate.length !== 0) {
        form_validate.each(function() {
            $(this).find('form').validate({
                errorElement: 'div'
            });
        });
    }
    $('#footer .subscribe form').validate({
        errorElement: 'div',
        errorPlacement: function(error, element) {
            error.insertAfter(element.next('button'));
        },
        submitHandler: function(form) {
            var text_object = $(form).next('p');
            text_object.html($(form).attr(
                'data-loading-text'));
            $.ajax({
                url: enchanting.ajax_url,
                dataType: 'json',
                data: {
                    action: 'footer_newsletter_subscribe',
                    email: $(form).find(
                        'input[name=email]').val()
                },
                method: 'post',
                cache: false,
                success: function(result) {
                    switch (result.status) {
                        case 'success':
                            text_object.html(
                                result.message
                            );
                            break;
                        case 'already_subscribed':
                            text_object.html(
                                result.message
                            );
                            break;
                        case 'invalid_email':
                        case 'curl_error':
                        case 'unknown_error':
                        default:
                            text_object.html(
                                result.message
                            );
                            break;
                    }
                },
                error: function(jqXHR, textStatus,
                    errorThrown) {
                    alert(enchanting.lang.ajax_error);
                }
            });
            return false;
        }
    });
    var map;
    var styled_map_options_1 = [{
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#e0ddd3"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "color": "#e0ddd3"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#e4eaf0"
        }]
    }, {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#bdb9b2"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ccc6b3"
        }]
    }];
    var styled_map_options_2 = [{
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "invert_lightness": false
        }, {
            "color": "#66615c"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#d6d2c5"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#e0ddd3"
        }]
    }, {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#c4c0b2"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#b8b4a5"
        }]
    }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ccc6b3"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f2f0e9"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#6b6865"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#ada791"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#e0ddd3"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#d8e0c9"
        }]
    }, {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#e0ddd3"
        }]
    }, {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#e0ddd3"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#e4eaf0"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#a5b1bd"
        }]
    }];
    var map_bounds;

    function intitialize_single_vacation_map() {
        var map_options = {
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        var marker_array = enchanting_map.markers;
        map = new google.maps.Map($(
                '.vacations-single .map-container')[0],
            map_options);
        var styled_map = new google.maps.StyledMapType(
            styled_map_options_2, {
                name: 'Vacation'
            });
        map.mapTypes.set('styled_map', styled_map);
        map.setMapTypeId('styled_map');
        var my_window = new google.maps.InfoWindow({
            content: ''
        });
        var coord_list = new Array();
        var my_coord;
        var marker_z_index = 100;
        for (i = 0; i < marker_array.length; i++) {
            my_coord = new google.maps.LatLng(marker_array[i].lat,
                marker_array[i].lon);
            coord_list.push(my_coord);
            marker_z_index--;
            my_marker = new google.maps.Marker({
                map: map,
                draggable: false,
                position: my_coord,
                html: '<div class="info-label">' +
                    marker_array[i].title + '</div>',
                zIndex: marker_z_index,
                icon: enchanting.template_url +
                    '/assets/images/map-markers/' + String.fromCharCode(
                        97 + i) + '.png'
            });
            google.maps.event.addListener(my_marker, 'click',
                function() {
                    my_window.setContent(this.html);
                    my_window.open(map, this);
                });
        }
        var my_path = new google.maps.Polyline({
            path: coord_list,
            strokeColor: '#A47771',
            strokeOpacity: 1,
            strokeWeight: 3
        });
        my_path.setMap(map);
        map_bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < coord_list.length; i++) {
            map_bounds.extend(coord_list[i]);
        }
        map.fitBounds(map_bounds);
    }

    function initialize_single_region_map() {
        var map_options = {
            zoom: enchanting_map.zoom,
            center: new google.maps.LatLng(enchanting_map.center[
                0], enchanting_map.center[1]),
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            scrollwheel: false,
            panControl: false
        };
        map = new google.maps.Map($('.region-single .map-container')[
            0], map_options);
        var styled_map = new google.maps.StyledMapType(
            styled_map_options_1, {
                name: 'Region'
            });
        map.mapTypes.set('styled_map', styled_map);
        map.setMapTypeId('styled_map');
        if (typeof enchanting_map.polygon !== 'undefined' &&
            enchanting_map.polygon.length > 0) {
            var shape = [];
            for (i = 0; i < enchanting_map.polygon.length; i++) {
                shape[i] = new google.maps.LatLng(enchanting_map.polygon[
                    i][0], enchanting_map.polygon[i][1]);
            }
            polygon = new google.maps.Polygon({
                paths: shape,
                strokeColor: '#DE6E62',
                strokeOpacity: 0.3,
                strokeWeight: 3,
                fillColor: '#DE6E62',
                fillOpacity: 0.1
            });
            polygon.setMap(map);
        } else if (typeof enchanting_map.regions !== 'undefined') {
            var world_geometry = new google.maps.FusionTablesLayer({
                query: {
                    select: 'geometry',
                    from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
                    where: "Name IN ('" + enchanting_map.regions
                        .join("','") + "')"
                },
                map: map,
                suppressInfoWindows: true,
                styles: [{
                    polygonOptions: {
                        strokeColor: '#DE6E62',
                        strokeOpacity: 0.3,
                        strokeWeight: 3,
                        fillColor: '#DE6E62',
                        fillOpacity: 0.1
                    }
                }]
            });
        }
        var markerSize = {
            x: 22,
            y: 40
        };
        google.maps.Marker.prototype.setLabel = function(label) {
            this.label = new MarkerLabel({
                map: this.map,
                marker: this,
                text: label
            });
            this.label.bindTo('position', this, 'position');
        };
        var MarkerLabel = function(options) {
            this.setValues(options);
            this.span = document.createElement('span');
            this.span.className = 'map-marker-label';
        };
        MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
            onAdd: function() {
                this.getPanes().overlayImage.appendChild(
                    this.span);
                var self = this;
                this.listeners = [google.maps.event.addListener(
                    this, 'position_changed',
                    function() {
                        self.draw();
                    })];
            },
            draw: function() {
                var text = String(this.get('text'));
                var position = this.getProjection().fromLatLngToDivPixel(
                    this.get('position'));
                this.span.innerHTML = text;
                this.span.style.left = (position.x - (
                    markerSize.x / 2)) - (text.length *
                    3) + 10 + 'px';
                this.span.style.top = (position.y -
                    markerSize.y + 40) + 'px';
            }
        });
        if (enchanting_map.city_markers.length > 0) {
            var my_coord, my_marker;
            for (i = 0; i < enchanting_map.city_markers.length; i++) {
                my_coord = new google.maps.LatLng(enchanting_map.city_markers[
                    i].lat, enchanting_map.city_markers[i].lon);
                my_marker = new google.maps.Marker({
                    map: map,
                    draggable: false,
                    position: my_coord,
                    icon: enchanting.template_url +
                        '/assets/images/map-marker.png',
                    label: enchanting_map.city_markers[i].title,
                    link: enchanting_map.city_markers[i].link
                });
                google.maps.event.addListener(my_marker, 'click',
                    function() {
                        if (typeof this.link !== 'undefined')
                            location.href = this.link;
                    });
            }
        }
    }

    function initialize_region_marker_map() {
        if (enchanting_map.type == 'city') var zoom_control = true;
        else var zoom_control = false;
        var map_options = {
            zoom: enchanting_map.zoom,
            center: new google.maps.LatLng(enchanting_map.center[
                0], enchanting_map.center[1]),
            zoomControl: zoom_control,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            scrollwheel: false,
            panControl: false
        };
        map = new google.maps.Map($('.map-container')[0],
            map_options);
        if (enchanting_map.type == 'city') var styled_map = new google
            .maps.StyledMapType(styled_map_options_2, {
                name: 'Region'
            });
        else var styled_map = new google.maps.StyledMapType(
            styled_map_options_1, {
                name: 'Region'
            });
        map.mapTypes.set('styled_map', styled_map);
        map.setMapTypeId('styled_map');
        if (typeof enchanting_map.regions !== 'undefined') {
            var world_geometry = new google.maps.FusionTablesLayer({
                query: {
                    select: 'geometry',
                    from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
                    where: "Name IN ('" + enchanting_map.regions
                        .join("','") + "')"
                },
                map: map,
                suppressInfoWindows: true,
                styles: [{
                    polygonOptions: {
                        strokeColor: '#DE6E62',
                        strokeOpacity: 0.3,
                        strokeWeight: 3,
                        fillColor: '#DE6E62',
                        fillOpacity: 0.1
                    }
                }]
            });
        }
        if (enchanting_map.type != 'city') {
            var markerSize = {
                x: 22,
                y: 40
            };
            google.maps.Marker.prototype.setLabel = function(label) {
                this.label = new MarkerLabel({
                    map: this.map,
                    marker: this,
                    text: label
                });
                this.label.bindTo('position', this, 'position');
            };
            var MarkerLabel = function(options) {
                this.setValues(options);
                this.span = document.createElement('span');
                this.span.className = 'map-marker-label';
            };
            MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
                onAdd: function() {
                    this.getPanes().overlayImage.appendChild(
                        this.span);
                    var self = this;
                    this.listeners = [google.maps.event
                        .addListener(this,
                            'position_changed',
                            function() {
                                self.draw();
                            })
                    ];
                },
                draw: function() {
                    var text = String(this.get('text'));
                    var position = this.getProjection()
                        .fromLatLngToDivPixel(this.get(
                            'position'));
                    this.span.innerHTML = text;
                    this.span.style.left = (position.x -
                        (markerSize.x / 2)) - (text
                        .length * 3) + 10 + 'px';
                    this.span.style.top = (position.y -
                        markerSize.y + 40) + 'px';
                }
            });
        }
        if (typeof enchanting_map.markers !== 'undefined') {
            for (i = 0; i < enchanting_map.markers.length; i++) {
                my_coord = new google.maps.LatLng(enchanting_map.markers[
                    i].lat, enchanting_map.markers[i].lon);
                if (typeof enchanting_map.markers[i].marker !==
                    'undefined' && !enchanting_map.markers[i].marker
                ) show_marker = false;
                else show_marker = true;
                my_marker = new google.maps.Marker({
                    map: map,
                    draggable: false,
                    position: my_coord,
                    icon: show_marker ? enchanting.template_url +
                        '/assets/images/map-marker.png' : 'blah.png',
                    label: enchanting_map.markers[i].title,
                    link: enchanting_map.markers[i].link
                });
                google.maps.event.addListener(my_marker, 'click',
                    function() {
                        if (typeof this.link !== 'undefined')
                            location.href = this.link;
                    });
            }
        }
    }

    function initialize_hotel_map() {
        var map_options = {
            zoom: enchanting_map.zoom,
            center: new google.maps.LatLng(enchanting_map.center[
                0], enchanting_map.center[1]),
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            scrollwheel: false,
            panControl: false
        };
        map = new google.maps.Map($('.map-container')[0],
            map_options);
        var styled_map = new google.maps.StyledMapType(
            styled_map_options_2, {
                name: 'City'
            });
        map.mapTypes.set('styled_map', styled_map);
        map.setMapTypeId('styled_map');
        if (typeof enchanting_map.markers !== 'undefined') {
            my_coord = new google.maps.LatLng(enchanting_map.markers[
                0].lat, enchanting_map.markers[0].lon);
            my_marker = new google.maps.Marker({
                map: map,
                draggable: false,
                position: my_coord,
                icon: enchanting.template_url +
                    '/assets/images/map-marker.png'
            });
        }
    }

    function enchanting_resize_map() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    }
    if (typeof enchanting_map !== 'undefined') {
        switch (enchanting_map.type) {
            case 'single-vacation':
                intitialize_single_vacation_map();
                google.maps.event.addDomListener(window, 'resize',
                    enchanting_resize_map);
                break;
            case 'single-region':
                initialize_single_region_map();
                google.maps.event.addDomListener(window, 'resize',
                    enchanting_resize_map);
                $('.accordion .handle').on('click.regionmap', function() {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, 'resize');
                    map.setCenter(center);
                });
                break;
            case 'destination-region':
            case 'city':
                initialize_region_marker_map();
                google.maps.event.addDomListener(window, 'resize',
                    enchanting_resize_map);
                if (enchanting_map.type == 'city') {
                    $('.accordion .handle').on('click.citymap',
                        function() {
                            var center = map.getCenter();
                            google.maps.event.trigger(map, 'resize');
                            map.setCenter(center);
                        });
                }
                break;
            case 'hotel':
                initialize_hotel_map();
                google.maps.event.addDomListener(window, 'resize',
                    enchanting_resize_map);
                $('.accordion .handle').on('click.hotelmap', function() {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, 'resize');
                    map.setCenter(center);
                });
                break;
        }
    }
    var back_to_top = $('#back-to-top');
    $window.scroll(function() {
        if ($window.scrollTop() >= 100 && !back_to_top.is(
            ':visible')) back_to_top.show();
        else if ($window.scrollTop() < 100 && back_to_top.is(
            ':visible')) back_to_top.hide();
    });
    back_to_top.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutQuart');
        return false;
    });
    var smooth_scrollers = $('.smooth-scroll');
    if (smooth_scrollers.length !== 0) {
        smooth_scrollers.click(function() {
            var target = $($(this).attr('href'));
            if (target.length !== 0) {
                var target_top = target.offset().top -
                    $header_top.height() + 1;
                $('html, body').animate({
                    scrollTop: target_top
                }, 1000, 'easeInOutQuart');
            }
            return false;
        });
    }
    $('.hotel-single .review .review-text a').click(function() {
        $(this).parent().fadeOut('slow').prev('.more-text').css(
            'display', 'inline').css('opacity', 0).animate({
            opacity: 1
        }, 500, 'easeInOutQuart');;
        return false;
    });
    var $datepicker = $('.datepicker');
    if ($datepicker.length !== 0) {
        $datepicker.datepicker({
            dateFormat: 'yy/mm/dd',
            onClose: function() {
                $(this).trigger('blur');
            }
        });
    }
    $('.fancybox').fancybox();
    var destination_landing_map = $('.destination-landing-map');
    if (destination_landing_map.length !== 0) {
        destination_landing_map.find('img[usemap]').rwdImageMaps();
    }
    $window.resize();
});;
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf(
                    "MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content"),
                j = b.querySelectorAll("blockquote.wp-embedded-content");
            for (c = 0; c < j.length; c++) j[c].style.display = "none";
            for (c = 0; c < i.length; c++)
                if (d = i[c], d.style.display = "", !d.getAttribute(
                    "data-secret")) {
                    if (f = Math.random().toString(36).substr(2, 10), d.src +=
                        "#?secret=" + f, d.setAttribute("data-secret", f),
                        g || h) a = d.cloneNode(!0), a.removeAttribute(
                        "security"), d.parentNode.replaceChild(a, d)
                } else;
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
            var d = c.data;
            if (d.secret || d.message || d.value)
                if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                    var e, f, g, h, i, j = b.querySelectorAll(
                            'iframe[data-secret="' + d.secret + '"]'),
                        k = b.querySelectorAll('blockquote[data-secret="' +
                            d.secret + '"]');
                    for (e = 0; e < k.length; e++) k[e].style.display =
                        "none";
                    for (e = 0; e < j.length; e++)
                        if (f = j[e], c.source === f.contentWindow) {
                            if (f.style.display = "", "height" === d.message) {
                                if (g = parseInt(d.value, 10), g > 1e3) g =
                                    1e3;
                                else if (200 > ~~g) g = 200;
                                f.height = g
                            }
                            if ("link" === d.message)
                                if (h = b.createElement("a"), i = b.createElement(
                                        "a"), h.href = f.getAttribute("src"),
                                    i.href = d.value, i.host === h.host)
                                    if (b.activeElement === f) a.top.location
                                        .href = d.value
                        } else;
                }
        }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener(
            "DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);