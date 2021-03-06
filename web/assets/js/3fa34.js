!(function (a) {
    "use strict";
    function b() {
        (mkdf.scroll = a(window).scrollTop()), mkdf.body.hasClass("mkdf-dark-header") && (mkdf.defaultHeaderStyle = "mkdf-dark-header"), mkdf.body.hasClass("mkdf-light-header") && (mkdf.defaultHeaderStyle = "mkdf-light-header");
    }
    function c() {}
    function d() {
        (mkdf.windowWidth = a(window).width()), (mkdf.windowHeight = a(window).height());
    }
    function e() {
        mkdf.scroll = a(window).scrollTop();
    }
    switch (
        ((window.mkdf = {}),
        (mkdf.modules = {}),
        (mkdf.scroll = 0),
        (mkdf.window = a(window)),
        (mkdf.document = a(document)),
        (mkdf.windowWidth = a(window).width()),
        (mkdf.windowHeight = a(window).height()),
        (mkdf.body = a("body")),
        (mkdf.html = a("html, body")),
        (mkdf.htmlEl = a("html")),
        (mkdf.menuDropdownHeightSet = !1),
        (mkdf.defaultHeaderStyle = ""),
        (mkdf.minVideoWidth = 1500),
        (mkdf.videoWidthOriginal = 1280),
        (mkdf.videoHeightOriginal = 720),
        (mkdf.videoRatio = 1280 / 720),
        (mkdf.mkdfOnDocumentReady = b),
        (mkdf.mkdfOnWindowLoad = c),
        (mkdf.mkdfOnWindowResize = d),
        (mkdf.mkdfOnWindowScroll = e),
        a(document).ready(b),
        a(window).load(c),
        a(window).resize(d),
        a(window).scroll(e),
        !0)
    ) {
        case mkdf.body.hasClass("mkdf-grid-1300"):
            mkdf.boxedLayoutWidth = 1350;
            break;
        case mkdf.body.hasClass("mkdf-grid-1200"):
            mkdf.boxedLayoutWidth = 1250;
            break;
        case mkdf.body.hasClass("mkdf-grid-1000"):
            mkdf.boxedLayoutWidth = 1050;
            break;
        case mkdf.body.hasClass("mkdf-grid-800"):
            mkdf.boxedLayoutWidth = 850;
            break;
        default:
            mkdf.boxedLayoutWidth = 1150;
    }
})(jQuery),
    (function (a) {
        "use strict";
        function b() {
            // f(), h(), i(), k(), l(), n(), F().init(), p(), q(), r(), j(), x(), y(), B(), A(), D();
            f(), h(), i(), k(), l(), n(), F().init(), p(), q(), r(), j(), y(), B(), A(), D();
        }
        function c() {
            m(), o(), C();
        }
        function d() {
            q(), y();
        }
        function e() {}
        function f() {
            g() && mkdf.body.addClass("mkd-no-animations-on-touch");
        }
        function g() {
            return Modernizr.touch && !mkdf.body.hasClass("mkd-no-animations-on-touch");
        }
        function h() {
            var a = navigator.appVersion.toLowerCase();
            a.indexOf("mac") > -1 && mkdf.body.hasClass("mkdf-smooth-scroll") && mkdf.body.removeClass("mkdf-smooth-scroll");
        }
        function i() {
            fluidvids.init({ selector: ["iframe"], players: ["www.youtube.com", "player.vimeo.com"] });
        }
        function j() {
            var b = a(".mkdf-owl-slider");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    b.hasClass("owl-carousel") || b.addClass("owl-carousel"),
                        b.waitForImages(function () {
                            b.css("visibility", "visible"), b.animate({ opacity: 1 });
                        }),
                        b.owlCarousel({
                            autoplay: !0,
                            autoplayHoverPause: !0,
                            loop: !0,
                            items: 1,
                            nav: !0,
                            autoHeight: !0,
                            dots: !1,
                            navText: ['<span class="mkdf-prev-icon"><i class="fa fa-angle-left"></i></span>', '<span class="mkdf-next-icon"><i class="fa fa-angle-right"></i></span>'],
                            smartSpeed: 200,
                            animateIn: "fadeIn",
                            animateOut: "fadeOut",
                        });
                });
        }
        function k() {
            a(".mkdf-preload-background").each(function () {
                var b = a(this);
                if ("" !== b.css("background-image") && "none" != b.css("background-image")) {
                    var c = b.attr("style");
                    if (((c = c.match(/url\(["']?([^'")]+)['"]?\)/)), (c = c ? c[1] : ""))) {
                        var d = new Image();
                        (d.src = c),
                            a(d).load(function () {
                                b.removeClass("mkdf-preload-background");
                            });
                    }
                } else
                    a(window).load(function () {
                        b.removeClass("mkdf-preload-background");
                    });
            });
        }
        function l() {
            var b =
                '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="lnr lnr-chevron-right"></span></a>                                             <a class="pp_previous" href="#"><span class="lnr lnr-chevron-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
            a("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: "data-rel",
                animation_speed: "normal",
                slideshow: !1,
                autoplay_slideshow: !1,
                opacity: 0.8,
                show_title: !0,
                allow_resize: !0,
                horizontal_padding: 0,
                default_width: 960,
                default_height: 540,
                counter_separator_label: "/",
                theme: "pp_default",
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                overlay_gallery: !1,
                keyboard_shortcuts: !0,
                deeplinking: !1,
                custom_markup: "",
                social_tools: !1,
                markup: b,
            });
        }
        function m() {
            if (a("[data-mkdf_header_style]").length > 0 && mkdf.body.hasClass("mkdf-header-style-on-scroll")) {
                var b = a(".mkdf-full-width-inner > .wpb_row.mkdf-section, .mkdf-full-width-inner > .mkdf-parallax-section-holder, .mkdf-container-inner > .wpb_row.mkdf-section, .mkdf-container-inner > .mkdf-parallax-section-holder"),
                    c = function (a) {
                        void 0 !== a.data("mkdf_header_style")
                            ? mkdf.body.removeClass("mkdf-dark-header mkdf-light-header").addClass(a.data("mkdf_header_style"))
                            : mkdf.body.removeClass("mkdf-dark-header mkdf-light-header").addClass("" + mkdf.defaultHeaderStyle);
                    };
                b.waypoint(
                    function (b) {
                        "down" === b && c(a(this.element));
                    },
                    { offset: 0 }
                ),
                    b.waypoint(
                        function (b) {
                            "up" === b && c(a(this.element));
                        },
                        {
                            offset: function () {
                                return -a(this.element).outerHeight();
                            },
                        }
                    );
            }
        }
        function n() {
            var b,
                c,
                d = a(".mkdf-no-animations-on-touch"),
                e = !0,
                f = a(
                    ".mkdf-grow-in, .mkdf-fade-in-down, .mkdf-element-from-fade, .mkdf-element-from-left, .mkdf-element-from-right, .mkdf-element-from-top, .mkdf-element-from-bottom, .mkdf-flip-in, .mkdf-x-rotate, .mkdf-z-rotate, .mkdf-y-translate, .mkdf-fade-in, .mkdf-fade-in-left-x-rotate"
                );
            d.length && (e = !1),
                f.length > 0 &&
                    e &&
                    f.each(function () {
                        a(this).appear(
                            function () {
                                (c = a(this).data("animation")), "undefined" != typeof c && "" !== c && ((b = c), a(this).addClass(b + "-on"));
                            },
                            { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                        );
                    });
        }
        function o() {
            a(".mkdf-parallax-section-holder").length &&
                a(".mkdf-parallax-section-holder").each(function () {
                    var b = a(this);
                    b.hasClass("mkdf-full-screen-height-parallax") && (b.height(mkdf.windowHeight), b.find(".mkdf-parallax-content-outer").css("padding", 0));
                    var c = 0.4 * b.data("mkdf-parallax-speed");
                    b.parallax("50%", c);
                });
        }
        function p() {
            a(".mkdf-section .mkdf-video-wrap .mkdf-video").mediaelementplayer({ enableKeyboard: !1, iPadUseNativeControls: !1, pauseOtherPlayers: !1, iPhoneUseNativeControls: !1, AndroidUseNativeControls: !1 }),
                navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (q(), a(".mkdf-section .mkdf-mobile-video-image").show(), a(".mkdf-section .mkdf-video-wrap").remove());
        }
        function q() {
            a(".mkdf-section .mkdf-video-wrap").each(function () {
                var b = a(this),
                    c = b.closest(".mkdf-section").outerWidth();
                b.width(c);
                var d = b.closest(".mkdf-section").outerHeight();
                (mkdf.minVideoWidth = mkdf.videoRatio * (d + 20)), b.height(d);
                var e = c / mkdf.videoWidthOriginal,
                    f = d / mkdf.videoHeightOriginal,
                    g = f;
                e > f && (g = e),
                    g * mkdf.videoWidthOriginal < mkdf.minVideoWidth && (g = mkdf.minVideoWidth / mkdf.videoWidthOriginal),
                    b.find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(g * mkdf.videoWidthOriginal + 2)),
                    b.find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(g * mkdf.videoHeightOriginal + 2)),
                    b.scrollLeft((b.find("video").width() - c) / 2),
                    b.find(".mejs-overlay, .mejs-poster").scrollTop((b.find("video").height() - d) / 2),
                    b.scrollTop((b.find("video").height() - d) / 2);
            });
        }
        function r() {
            var b = a(".mkdf-footer-uncover");
            b.length && a(".mkdf-content").css("margin-bottom", a(".mkdf-footer-inner").height());
        }
        function s() {
            window.addEventListener && window.addEventListener("DOMMouseScroll", u, !1), (window.onmousewheel = document.onmousewheel = u), (document.onkeydown = v);
        }
        function t() {
            window.removeEventListener && window.removeEventListener("DOMMouseScroll", u, !1), (window.onmousewheel = document.onmousewheel = document.onkeydown = null);
        }
        function u(a) {
            w(a);
        }
        function v(a) {
            for (var b = [37, 38, 39, 40], c = b.length; c--; ) if (a.keyCode === b[c]) return void w(a);
        }
        function w(a) {
            (a = a || window.event), a.preventDefault && a.preventDefault(), (a.returnValue = !1);
        }
        function x() {
            var b = a(".mkdf-self-hosted-video");
            b.mediaelementplayer({ audioWidth: "100%" });
        }
        function y() {
            a(".mkdf-self-hosted-video-holder .mkdf-video-wrap").each(function () {
                var b = a(this),
                    c = b.closest(".mkdf-self-hosted-video-holder").outerWidth(),
                    d = c / mkdf.videoRatio;
                navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (b.parent().width(c), b.parent().height(d)),
                    b.width(c),
                    b.height(d),
                    b.find("video, .mejs-overlay, .mejs-poster").width(c),
                    b.find("video, .mejs-overlay, .mejs-poster").height(d);
            });
        }
        function z(b) {
            var c = a("#mkdf-back-to-top");
            c.removeClass("off on"), "on" === b ? c.addClass("on") : c.addClass("off");
        }
        function A() {
            mkdf.window.scroll(function () {
                var b,
                    c = a(this).scrollTop(),
                    d = a(this).height();
                (b = c > 0 ? c + d / 2 : 1), z(b < 1e3 ? "off" : "on");
            });
        }
        function B() {
            var b = a("#mkdf-back-to-top");
            b.on("click", function (a) {
                a.preventDefault(), mkdf.html.animate({ scrollTop: 0 }, mkdf.window.scrollTop() / 2, "easeInOutQuint");
            });
        }
        function C() {
            var b = a("body > .mkdf-smooth-transition-loader.mkdf-mimic-ajax");
            b.length &&
                (b.fadeOut(500),
                a(window).bind("pageshow", function (a) {
                    a.originalEvent.persisted && b.fadeOut(500);
                }),
                a("a").click(function (c) {
                    var d = a(this);
                    1 == c.which &&
                        d.attr("href").indexOf(window.location.host) >= 0 &&
                        "undefined" == typeof d.data("rel") &&
                        "undefined" == typeof d.attr("rel") &&
                        ("undefined" == typeof d.attr("target") || "_self" === d.attr("target")) &&
                        d.attr("href").split("#")[0] !== window.location.href.split("#")[0] &&
                        (c.preventDefault(),
                        b.addClass("mkdf-hide-spinner"),
                        b.fadeIn(500, function () {
                            window.location = d.attr("href");
                        }));
                }));
        }
        function D() {
            var b,
                c,
                d = a(".mkdf-sidebar .widget_nav_menu .menu");
            d.length &&
                d.each(function () {
                    (c = a(this)),
                        (b = c.find("li.menu-item-has-children > a")),
                        b.length &&
                            b.each(function () {
                                var b = a(this);
                                b.on("click", function (a) {
                                    a.preventDefault();
                                    var c = b.parent().children(".sub-menu");
                                    c.is(":visible") ? (c.hide(), b.removeClass("mkdf-custom-menu-active")) : (c.show(), b.addClass("mkdf-custom-menu-active"));
                                });
                            });
                });
        }
        var E = {};
        (mkdf.modules.common = E),
            (E.mkdfIsTouchDevice = g),
            (E.mkdfDisableSmoothScrollForMac = h),
            (E.mkdfFluidVideo = i),
            (E.mkdfPreloadBackgrounds = k),
            (E.mkdfPrettyPhoto = l),
            (E.mkdfCheckHeaderStyleOnScroll = m),
            (E.mkdfInitParallax = o),
            (E.mkdfEnableScroll = t),
            (E.mkdfDisableScroll = s),
            (E.mkdfWheel = u),
            (E.mkdfKeydown = v),
            (E.mkdfPreventDefaultValue = w),
            (E.mkdfOwlSlider = j),
            (E.mkdfInitSelfHostedVideoPlayer = x),
            (E.mkdfSelfHostedVideoSize = y),
            (E.mkdfInitBackToTop = B),
            (E.mkdfBackButtonShowHide = A),
            (E.mkdfSmoothTransition = C),
            (E.mkdfInitCustomMenuDropdown = D),
            (E.mkdfOnDocumentReady = b),
            (E.mkdfOnWindowLoad = c),
            (E.mkdfOnWindowResize = d),
            (E.mkdfOnWindowScroll = e),
            (E.mkdfIsTouchDevice = g),
            a(document).ready(b),
            a(window).load(c),
            a(window).resize(d),
            a(window).scroll(e);
        var F = (mkdf.modules.common.mkdfInitAnchor = function () {
            var b = function (b) {
                    a(".mkdf-main-menu .mkdf-active-item, .mkdf-mobile-nav .mkdf-active-item, .mkdf-vertical-menu .mkdf-active-item").removeClass("mkdf-active-item"),
                        b.parent().addClass("mkdf-active-item"),
                        a(".mkdf-main-menu a, .mkdf-mobile-nav a, .mkdf-vertical-menu a").removeClass("current"),
                        b.addClass("current");
                },
                c = function () {
                    a("[data-mkdf-anchor]").waypoint(
                        function (c) {
                            "down" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("mkdf-anchor") + "']"));
                        },
                        { offset: "50%" }
                    ),
                        a("[data-mkdf-anchor]").waypoint(
                            function (c) {
                                "up" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("mkdf-anchor") + "']"));
                            },
                            {
                                offset: function () {
                                    return -(a(this.element).outerHeight() - 150);
                                },
                            }
                        );
                },
                d = function () {
                    var b = window.location.hash.split("#")[1];
                    if ("" !== b && a('[data-mkdf-anchor="' + b + '"]').length > 0) {
                        var c = window.location.href.split("#")[0] + "#" + b;
                        a("a[href='" + c + '"]').trigger("click");
                    }
                },
                e = function (a) {
                    "mkdf-sticky-header-on-scroll-down-up" == mkdf.modules.header.behaviour && (a > mkdf.modules.header.stickyAppearAmount ? (mkdf.modules.header.isStickyVisible = !0) : (mkdf.modules.header.isStickyVisible = !1)),
                        "mkdf-sticky-header-on-scroll-up" == mkdf.modules.header.behaviour && (a > mkdf.scroll ? (mkdf.modules.header.isStickyVisible = !1) : "");
                    var b = mkdf.modules.header.isStickyVisible ? mkdfGlobalVars.vars.mkdfStickyHeaderTransparencyHeight : mkdfPerPageVars.vars.mkdfHeaderTransparencyHeight;
                    return b;
                },
                f = function () {
                    mkdf.document.on("click", ".mkdf-main-menu a, .mkdf-vertical-menu a, .mkdf-btn, .mkdf-anchor, .mkdf-mobile-nav a", function () {
                        var c,
                            d = a(this),
                            f = d.prop("hash").split("#")[1];
                        if ("" !== f && a('[data-mkdf-anchor="' + f + '"]').length > 0) {
                            var g = a('[data-mkdf-anchor="' + f + '"]').offset().top;
                            return (
                                (c = a('[data-mkdf-anchor="' + f + '"]').offset().top - e(g)),
                                b(d),
                                mkdf.html.stop().animate({ scrollTop: Math.round(c) }, 1e3, function () {
                                    history.pushState && history.pushState(null, null, "#" + f);
                                }),
                                !1
                            );
                        }
                    });
                };
            return {
                init: function () {
                    a("[data-mkdf-anchor]").length &&
                        (f(),
                        c(),
                        a(window).load(function () {
                            d();
                        }));
                },
            };
        });
    })(jQuery),
    (function (a) {
        "use strict";
        function b() {
            f(), g(), h(), i(), j(), k(), l(), m();
        }
        function c() {}
        function d() {
            l();
        }
        function e() {}
        function f() {
            var b,
                c = a(".mkdf-page-header"),
                d = a(".mkdf-sticky-header"),
                e = a(".mkdf-fixed-wrapper"),
                f = a(".mkdf-page-header").find(".mkdf-fixed-wrapper").length ? a(".mkdf-page-header").find(".mkdf-fixed-wrapper").offset().top : null;
            switch (!0) {
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-up"):
                    mkdf.modules.header.behaviour = "mkdf-sticky-header-on-scroll-up";
                    var g = a(document).scrollTop();
                    b = mkdfGlobalVars.vars.mkdfTopBarHeight + mkdfGlobalVars.vars.mkdfLogoAreaHeight + mkdfGlobalVars.vars.mkdfMenuAreaHeight + mkdfGlobalVars.vars.mkdfStickyHeaderHeight;
                    var h = function () {
                        var c = a(document).scrollTop();
                        (c > g && c > b) || c < b
                            ? ((mkdf.modules.header.isStickyVisible = !1), d.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"))
                            : ((mkdf.modules.header.isStickyVisible = !0), d.addClass("header-appear")),
                            (g = a(document).scrollTop());
                    };
                    h(),
                        a(window).scroll(function () {
                            h();
                        });
                    break;
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-down-up"):
                    var i = function () {
                            var a;
                            (a = j()
                                ? mkdf.window.height()
                                : 0 !== mkdfPerPageVars.vars.mkdfStickyScrollAmount
                                ? mkdfPerPageVars.vars.mkdfStickyScrollAmount
                                : mkdfGlobalVars.vars.mkdfTopBarHeight + mkdfGlobalVars.vars.mkdfLogoAreaHeight + mkdfGlobalVars.vars.mkdfMenuAreaHeight),
                                (b = a);
                        },
                        j = function () {
                            var a = mkdfPerPageVars.vars.mkdfStickyScrollAmountFullScreen;
                            return "undefined" != typeof a && a === !0;
                        };
                    (mkdf.modules.header.behaviour = "mkdf-sticky-header-on-scroll-down-up"), i(), (mkdf.modules.header.stickyAppearAmount = b);
                    var h = function () {
                        mkdf.scroll < b
                            ? ((mkdf.modules.header.isStickyVisible = !1), d.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"))
                            : ((mkdf.modules.header.isStickyVisible = !0), d.addClass("header-appear"));
                    };
                    h(),
                        a(window).scroll(function () {
                            h();
                        });
                    break;
                case mkdf.body.hasClass("mkdf-fixed-on-scroll"):
                    mkdf.modules.header.behaviour = "mkdf-fixed-on-scroll";
                    var k = function () {
                        mkdf.scroll < f ? (e.removeClass("fixed"), c.css("margin-bottom", 0)) : (e.addClass("fixed"), c.css("margin-bottom", e.height()));
                    };
                    k(),
                        a(window).scroll(function () {
                            k();
                        });
            }
        }
        function g() {
            var b,
                c = a(".mkdf-wrapper"),
                d = a(".mkdf-side-menu"),
                e = a("a.mkdf-side-menu-button-opener"),
                f = !1,
                g = !1,
                h = !1;
            mkdf.body.hasClass("mkdf-side-menu-slide-from-right")
                ? ((b = "mkdf-right-side-menu-opened"), c.prepend('<div class="mkdf-cover"/>'), (f = !0))
                : mkdf.body.hasClass("mkdf-side-menu-slide-with-content")
                ? ((b = "mkdf-side-menu-open"), (g = !0))
                : mkdf.body.hasClass("mkdf-side-area-uncovered-from-content") && ((b = "mkdf-right-side-menu-opened"), (h = !0)),
                a("a.mkdf-side-menu-button-opener, a.mkdf-close-side-menu").click(function (i) {
                    if ((i.preventDefault(), e.hasClass("opened"))) {
                        if ((e.removeClass("opened"), mkdf.body.removeClass(b), h))
                            var j = setTimeout(function () {
                                d.css({ visibility: "hidden" }), clearTimeout(j);
                            }, 400);
                    } else {
                        e.addClass("opened"),
                            mkdf.body.addClass(b),
                            f &&
                                a(".mkdf-wrapper .mkdf-cover").click(function () {
                                    mkdf.body.removeClass("mkdf-right-side-menu-opened"), e.removeClass("opened");
                                }),
                            h && d.css({ visibility: "visible" });
                        var k = a(window).scrollTop();
                        a(window).scroll(function () {
                            if (Math.abs(mkdf.scroll - k) > 400 && (mkdf.body.removeClass(b), e.removeClass("opened"), h))
                                var a = setTimeout(function () {
                                    d.css({ visibility: "hidden" }), clearTimeout(a);
                                }, 400);
                        });
                    }
                    g &&
                        (i.stopPropagation(),
                        c.click(function () {
                            i.preventDefault(), e.removeClass("opened"), mkdf.body.removeClass("mkdf-side-menu-open");
                        }));
                });
        }
        function h() {
            var b = a(".mkdf-side-menu");
            b.length && b.niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: !1, horizrailenabled: !1 });
        }
        function i() {
            var b = a(".mkdf-mobile-header .mkdf-mobile-menu-opener"),
                c = a(".mkdf-mobile-header .mkdf-mobile-nav"),
                d = a('.mkdf-mobile-nav .mobile_arrow, .mkdf-mobile-nav h4, .mkdf-mobile-nav a[href*="#"]'),
                e = 200;
            b.length &&
                c.length &&
                b.on("tap click", function (a) {
                    a.stopPropagation(), a.preventDefault(), c.is(":visible") ? c.slideUp(e) : c.slideDown(e);
                }),
                d.length &&
                    d.each(function () {
                        a(this).on("tap click", function (b) {
                            var c = a(this).nextAll("ul").first();
                            if (c.length) {
                                b.preventDefault(), b.stopPropagation();
                                var d = a(this).parent("li");
                                c.is(":visible") ? (c.slideUp(e), d.removeClass("mkdf-opened")) : (c.slideDown(e), d.addClass("mkdf-opened"));
                            }
                        });
                    }),
                a(".mkdf-mobile-nav a, .mkdf-mobile-logo-wrapper a").on("click tap", function (b) {
                    "http://#" !== a(this).attr("href") && "#" !== a(this).attr("href") && c.slideUp(e);
                });
        }
        function j() {
            if (mkdf.body.hasClass("mkdf-sticky-up-mobile-header")) {
                var b,
                    c = a(".mkdf-mobile-header"),
                    d = a("#wpadminbar"),
                    e = c.length ? c.height() : 0,
                    f = d.length ? d.height() : 0,
                    g = a(document).scrollTop();
                (b = e + f),
                    a(window).scroll(function () {
                        var e = a(document).scrollTop();
                        e > b ? c.addClass("mkdf-animate-mobile-header") : c.removeClass("mkdf-animate-mobile-header"),
                            (e > g && e > b) || e < b
                                ? (c.removeClass("mobile-header-appear"), c.css("margin-bottom", 0), d.length && c.find(".mkdf-mobile-header-inner").css("top", 0))
                                : (c.addClass("mobile-header-appear"), c.css("margin-bottom", b)),
                            (g = a(document).scrollTop());
                    });
            }
        }
        function k() {
            var b = a(".mkdf-drop-down > ul > li.narrow");
            b.each(function (b) {
                var c = mkdf.windowWidth - 16,
                    d = a(this).offset().left,
                    e = a(this).find(".second .inner ul").width(),
                    f = 0;
                f = mkdf.body.hasClass("boxed") ? mkdf.boxedLayoutWidth - (d - (c - mkdf.boxedLayoutWidth) / 2) : c - d;
                var g;
                a(this).find("li.sub").length > 0 && (g = f - e), (f < e || g < e) && (a(this).find(".second").addClass("right"), a(this).find(".second .inner ul").addClass("right"));
            });
        }
        function l() {
            var b = a(".mkdf-drop-down > ul > li");
            b.each(function (c) {
                if (a(b[c]).find(".second").length > 0) {
                    var d = a(b[c]).find(".second");
                    if (a(b[c]).hasClass("wide")) {
                        var e = a(this).find(".inner > ul"),
                            f = parseInt(e.css("padding-left").slice(0, -2)) + parseInt(e.css("padding-right").slice(0, -2)),
                            g = e.outerWidth();
                        a(this).hasClass("left_position") || a(this).hasClass("right_position") || d.css("left", 0);
                        var h = 0;
                        if (
                            (a(this)
                                .find(".second > .inner > ul > li")
                                .each(function () {
                                    var b = a(this).height();
                                    b > h && (h = b);
                                }),
                            a(this).find(".second > .inner > ul > li").css("height", ""),
                            a(this).find(".second > .inner > ul > li").height(h),
                            !a(this).hasClass("left_position") && !a(this).hasClass("right_position"))
                        ) {
                            var i = (mkdf.windowWidth - 2 * (mkdf.windowWidth - e.offset().left)) / 2 + (g + f) / 2;
                            d.css("left", -i);
                        }
                    }
                    if ((mkdf.menuDropdownHeightSet || (a(b[c]).data("original_height", d.height() + "px"), d.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)))
                        a(b[c])
                            .on("touchstart mouseenter", function () {
                                d.css({ height: a(b[c]).data("original_height"), overflow: "visible", visibility: "visible", opacity: "1" });
                            })
                            .on("mouseleave", function () {
                                d.css({ height: "0px", overflow: "hidden", visibility: "hidden", opacity: "0" });
                            });
                    else if (mkdf.body.hasClass("mkdf-dropdown-animate-height"))
                        a(b[c])
                            .mouseenter(function () {
                                d.css({ visibility: "visible", height: "0px", opacity: "0" }),
                                    d.stop().animate({ height: a(b[c]).data("original_height"), opacity: 1 }, 200, function () {
                                        d.css("overflow", "visible");
                                    });
                            })
                            .mouseleave(function () {
                                d.stop().animate({ height: "0px" }, 0, function () {
                                    d.css({ overflow: "hidden", visibility: "hidden" });
                                });
                            });
                    else {
                        var j = {
                            interval: 0,
                            over: function () {
                                setTimeout(function () {
                                    d.addClass("mkdf-drop-down-start"), d.stop().css({ height: a(b[c]).data("original_height") });
                                }, 150);
                            },
                            timeout: 150,
                            out: function () {
                                d.stop().css({ height: "0px" }), d.removeClass("mkdf-drop-down-start");
                            },
                        };
                        a(b[c]).hoverIntent(j);
                    }
                }
            }),
                a(".mkdf-drop-down ul li.wide ul li a").on("click", function (b) {
                    if (1 == b.which) {
                        var c = a(this);
                        setTimeout(function () {
                            c.mouseleave();
                        }, 500);
                    }
                }),
                (mkdf.menuDropdownHeightSet = !0);
        }
        function m() {
            function b() {
                var b = a(".mkdf-fullscreen-search-holder"),
                    d = (a(".mkdf-fullscreen-search-overlay"), b.find(".mkdf-field-holder"));
                c.click(function (c) {
                    function e() {
                        mkdf.body.removeClass("mkdf-fullscreen-search-opened"),
                            mkdf.body.addClass("mkdf-search-fade-out"),
                            mkdf.body.removeClass("mkdf-search-fade-in"),
                            b.removeClass("mkdf-animate"),
                            d.find(".mkdf-search-field").blur().val("");
                    }
                    function f() {
                        mkdf.body.addClass("mkdf-fullscreen-search-opened"),
                            mkdf.body.removeClass("mkdf-search-fade-out"),
                            mkdf.body.addClass("mkdf-search-fade-in"),
                            b.addClass("mkdf-animate"),
                            setTimeout(function () {
                                d.find(".mkdf-search-field").focus();
                            }, 400);
                    }
                    c.preventDefault(),
                        b.hasClass("mkdf-animate") ? e() : f(),
                        a(document).mouseup(function (a) {
                            d.is(a.target) || 0 !== d.has(a.target).length || (a.preventDefault(), e());
                        }),
                        a(document).keyup(function (a) {
                            27 == a.keyCode && e();
                        });
                }),
                    a(".mkdf-fullscreen-search-holder .mkdf-search-field").focus(function () {
                        a(".mkdf-fullscreen-search-holder .mkdf-field-holder .mkdf-line").css("width", "100%");
                    }),
                    a(".mkdf-fullscreen-search-holder .mkdf-search-field").blur(function () {
                        a(".mkdf-fullscreen-search-holder .mkdf-field-holder .mkdf-line").css("width", "0");
                    });
            }
            var c = a("a.mkdf-search-opener"),
                d = !1;
            if ((a("html").hasClass("touch") && (d = !0), c.length > 0 && (b(), "undefined" != typeof c.data("hover-color")))) {
                var e = function (a) {
                        a.data.searchOpener.css("color", a.data.color);
                    },
                    f = c.css("color"),
                    g = c.data("hover-color");
                c.on("mouseenter", { searchOpener: c, color: g }, e), c.on("mouseleave", { searchOpener: c, color: f }, e);
            }
        }
        var n = {};
        (mkdf.modules.header = n),
            (n.isStickyVisible = !1),
            (n.stickyAppearAmount = 0),
            n.behaviour,
            (n.mkdfSideArea = g),
            (n.mkdfSideAreaScroll = h),
            (n.mkdfInitMobileNavigation = i),
            (n.mkdfMobileHeaderBehavior = j),
            (n.mkdfSetDropDownMenuPosition = k),
            (n.mkdfDropDownMenu = l),
            (n.mkdfSearch = m),
            (n.mkdfOnDocumentReady = b),
            (n.mkdfOnWindowLoad = c),
            (n.mkdfOnWindowResize = d),
            (n.mkdfOnWindowScroll = e),
            a(document).ready(b),
            a(window).load(c),
            a(window).resize(d),
            a(window).scroll(e);
    })(jQuery),
    (function (a) {
        "use strict";
        function b() {
            f();
        }
        function c() {}
        function d() {}
        function e() {}
        function f() {
            if (a(".mkdf-title.mkdf-has-parallax-background").length > 0 && 0 === a(".touch").length) {
                var b = a(".mkdf-title.mkdf-has-parallax-background"),
                    c = a(".mkdf-title.mkdf-has-parallax-background.mkdf-zoom-out"),
                    d = parseInt(b.data("background-width").match(/\d+/)),
                    e = b.data("height"),
                    f = (e / 1e4) * 7,
                    g = -(mkdf.scroll * f);
                b.css({ "background-position": "center " + (g + mkdfGlobalVars.vars.mkdfAddForAdminBar) + "px" }),
                    c.css({ "background-size": d - mkdf.scroll + "px auto" }),
                    a(window).scroll(function () {
                        (g = -(mkdf.scroll * f)), b.css({ "background-position": "center " + (g + mkdfGlobalVars.vars.mkdfAddForAdminBar) + "px" }), c.css({ "background-size": d - mkdf.scroll + "px auto" });
                    });
            }
        }
        var g = {};
        (mkdf.modules.title = g),
            (g.mkdfParallaxTitle = f),
            (g.mkdfOnDocumentReady = b),
            (g.mkdfOnWindowLoad = c),
            (g.mkdfOnWindowResize = d),
            (g.mkdfOnWindowScroll = e),
            a(document).ready(b),
            a(window).load(c),
            a(window).resize(d),
            a(window).scroll(e);
    })(jQuery),
    (function (a) {
        "use strict";
        function b() {
            f(), g(), h(), i();
        }
        function c() {}
        function d() {}
        function e() {}
        function f() {
            var b = a("audio.mkdf-blog-audio");
            b.mediaelementplayer({ audioWidth: "100%" });
        }
        function g() {
            var b = a(".mkdf-blog-holder.mkdf-blog-type-masonry");
            if (b.length) {
                b.waitForImages(function () {
                    b.isotope({ itemSelector: "article", resizable: !1, masonry: { columnWidth: ".mkdf-blog-masonry-grid-sizer", gutter: ".mkdf-blog-masonry-grid-gutter" } }),
                        setTimeout(function () {
                            b.isotope("layout");
                        }, 600);
                });
                var c = a(".mkdf-filter-blog-holder");
                a(".mkdf-filter").click(function () {
                    var d = a(this),
                        e = d.attr("data-filter");
                    return c.find(".mkdf-active").removeClass("mkdf-active"), d.addClass("mkdf-active"), b.isotope({ filter: e }), !1;
                });
            }
        }
        function h() {
            var b = a(".mkdf-blog-holder.mkdf-blog-type-masonry");
            if (b.length)
                if (b.hasClass("mkdf-masonry-pagination-infinite-scroll"))
                    b.infinitescroll(
                        {
                            navSelector: ".mkdf-blog-infinite-scroll-button",
                            nextSelector: ".mkdf-blog-infinite-scroll-button a",
                            itemSelector: "article",
                            loading: { finishedMsg: mkdfGlobalVars.vars.mkdfFinishedMessage, msgText: mkdfGlobalVars.vars.mkdfMessage },
                        },
                        function (c) {
                            b.append(c).isotope("appended", a(c)),
                                mkdf.modules.blog.mkdfInitAudioPlayer(),
                                mkdf.modules.common.mkdfOwlSlider(),
                                mkdf.modules.common.mkdfFluidVideo(),
                                setTimeout(function () {
                                    b.isotope("layout");
                                }, 400);
                        }
                    );
                else if (b.hasClass("mkdf-masonry-pagination-load-more")) {
                    var c = 1;
                    a(".mkdf-blog-load-more-button a").on("click", function (d) {
                        d.preventDefault();
                        var e = a(this),
                            f = e.attr("href"),
                            g = ".mkdf-masonry-pagination-load-more",
                            h = ".mkdf-blog-load-more-button a",
                            i = a(h).attr("href");
                        a.get(f + "", function (d) {
                            var f = a(g, d).wrapInner("").html();
                            (i = a(h, d).attr("href")),
                                b.append(f).isotope("reloadItems").isotope({ sortBy: "original-order" }),
                                mkdf.modules.blog.mkdfInitAudioPlayer(),
                                mkdf.modules.common.mkdfOwlSlider(),
                                mkdf.modules.common.mkdfFluidVideo(),
                                setTimeout(function () {
                                    a(".mkdf-masonry-pagination-load-more").isotope("layout");
                                }, 400),
                                e.parent().data("rel") > c ? e.attr("href", i) : e.parent().remove();
                        }),
                            c++;
                    });
                }
        }
        function i() {
            var b = a(".mkdf-blog-holder.mkdf-blog-load-more:not(.mkdf-blog-type-masonry)");
            b.length &&
                b.each(function () {
                    var b,
                        c,
                        d = a(this),
                        e = d.find(".mkdf-load-more-ajax-pagination .mkdf-btn");
                    (c = d.data("max-pages")),
                        e.on("click", function (f) {
                            f.preventDefault(), f.stopPropagation();
                            var g = j(d);
                            if (((b = g.nextPage), b <= c)) {
                                var h = k(g);
                                a.ajax({
                                    type: "POST",
                                    data: h,
                                    url: MikadofAjaxUrl,
                                    success: function (c) {
                                        b++, d.data("next-page", b);
                                        var e = a.parseJSON(c),
                                            f = e.html;
                                        d.waitForImages(function () {
                                            d.find("article:last").after(f),
                                                setTimeout(function () {
                                                    mkdf.modules.blog.mkdfInitAudioPlayer(), mkdf.modules.common.mkdfOwlSlider(), mkdf.modules.common.mkdfFluidVideo();
                                                }, 400);
                                        });
                                    },
                                });
                            }
                            b === c && e.hide();
                        });
                });
        }
        function j(a) {
            var b = {};
            return (
                (b.nextPage = ""),
                (b.number = ""),
                (b.category = ""),
                (b.blogType = ""),
                (b.archiveCategory = ""),
                (b.archiveAuthor = ""),
                (b.archiveTag = ""),
                (b.archiveDay = ""),
                (b.archiveMonth = ""),
                (b.archiveYear = ""),
                "undefined" != typeof a.data("next-page") && a.data("next-page") !== !1 && (b.nextPage = a.data("next-page")),
                "undefined" != typeof a.data("post-number") && a.data("post-number") !== !1 && (b.number = a.data("post-number")),
                "undefined" != typeof a.data("category") && a.data("category") !== !1 && (b.category = a.data("category")),
                "undefined" != typeof a.data("blog-type") && a.data("blog-type") !== !1 && (b.blogType = a.data("blog-type")),
                "undefined" != typeof a.data("archive-category") && a.data("archive-category") !== !1 && (b.archiveCategory = a.data("archive-category")),
                "undefined" != typeof a.data("archive-author") && a.data("archive-author") !== !1 && (b.archiveAuthor = a.data("archive-author")),
                "undefined" != typeof a.data("archive-tag") && a.data("archive-tag") !== !1 && (b.archiveTag = a.data("archive-tag")),
                "undefined" != typeof a.data("archive-day") && a.data("archive-day") !== !1 && (b.archiveDay = a.data("archive-day")),
                "undefined" != typeof a.data("archive-month") && a.data("archive-month") !== !1 && (b.archiveMonth = a.data("archive-month")),
                "undefined" != typeof a.data("archive-year") && a.data("archive-year") !== !1 && (b.archiveYear = a.data("archive-year")),
                b
            );
        }
        function k(a) {
            var b = {
                action: "gotravel_mikado_blog_load_more",
                nextPage: a.nextPage,
                number: a.number,
                category: a.category,
                blogType: a.blogType,
                archiveCategory: a.archiveCategory,
                archiveAuthor: a.archiveAuthor,
                archiveTag: a.archiveTag,
                archiveDay: a.archiveDay,
                archiveMonth: a.archiveMonth,
                archiveYear: a.archiveYear,
            };
            return b;
        }
        var l = {};
        (mkdf.modules.blog = l),
            (l.mkdfInitAudioPlayer = f),
            (l.mkdfOnDocumentReady = b),
            (l.mkdfOnWindowLoad = c),
            (l.mkdfOnWindowResize = d),
            (l.mkdfOnWindowScroll = e),
            a(document).ready(b),
            a(window).load(c),
            a(window).resize(d),
            a(window).scroll(e);
    })(jQuery),
    (function (a) {
        "use strict";
        function b() {
            f(), g(), h(), k(), K().init(), j(), l(), m(), o(), p(), r(), s(), t(), H(), M().init(), u(), v(), A(), G(), z(), w(), L().init(), N().init(), C().init(), D().init(), E().init(), F().init(), I().init();
        }
        function c() {
            B();
        }
        function d() {
            u(), v();
        }
        function e() {}
        function f() {
            var b = a(".mkdf-counter-holder");
            b.length &&
                b.each(function () {
                    var b = a(this),
                        c = b.find(".mkdf-counter");
                    b.appear(
                        function () {
                            if ((b.css("opacity", "1"), c.hasClass("mkdf-zero-counter"))) {
                                var a = parseFloat(c.text());
                                c.countTo({ from: 0, to: a, speed: 1500, refreshInterval: 100 });
                            } else c.absoluteCounter({ speed: 2e3, fadeInDelay: 1e3 });
                        },
                        { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                    );
                });
        }
        function g() {
            var b = a(".mkdf-elements-holder");
            b.length &&
                b.each(function () {
                    var b = a(this),
                        c = b.children(".mkdf-eh-item"),
                        d = "",
                        e = "";
                    c.each(function () {
                        var b = a(this),
                            c = "",
                            d = "",
                            f = "",
                            g = "",
                            h = "",
                            i = "",
                            j = "";
                        "undefined" != typeof b.data("item-class") && b.data("item-class") !== !1 && (c = b.data("item-class")),
                            "undefined" != typeof b.data("1280-1600") && b.data("1280-1600") !== !1 && (d = b.data("1280-1600")),
                            "undefined" != typeof b.data("1024-1280") && b.data("1024-1280") !== !1 && (f = b.data("1024-1280")),
                            "undefined" != typeof b.data("768-1024") && b.data("768-1024") !== !1 && (g = b.data("768-1024")),
                            "undefined" != typeof b.data("600-768") && b.data("600-768") !== !1 && (h = b.data("600-768")),
                            "undefined" != typeof b.data("480-600") && b.data("480-600") !== !1 && (i = b.data("480-600")),
                            "undefined" != typeof b.data("480") && b.data("480") !== !1 && (j = b.data("480")),
                            (d.length || f.length || g.length || h.length || i.length || j.length) &&
                                (d.length && (e += "@media only screen and (min-width: 1280px) and (max-width: 1600px) {.mkdf-eh-item-content." + c + " { padding: " + d + " !important; } }"),
                                f.length && (e += "@media only screen and (min-width: 1024px) and (max-width: 1280px) {.mkdf-eh-item-content." + c + " { padding: " + f + " !important; } }"),
                                g.length && (e += "@media only screen and (min-width: 768px) and (max-width: 1024px) {.mkdf-eh-item-content." + c + " { padding: " + g + " !important; } }"),
                                h.length && (e += "@media only screen and (min-width: 600px) and (max-width: 768px) {.mkdf-eh-item-content." + c + " { padding: " + h + " !important; } }"),
                                i.length && (e += "@media only screen and (min-width: 480px) and (max-width: 600px) {.mkdf-eh-item-content." + c + " { padding: " + i + " !important; } }"),
                                j.length && (e += "@media only screen and (max-width: 480px) {.mkdf-eh-item-content." + c + " { padding: " + j + " !important; } }"));
                    }),
                        e.length && (d = '<style type="text/css" data-type="gotravel_shortcodes_custom_css">' + e + "</style>"),
                        d.length && a("head").append(d);
                });
        }
        function h() {
            var b = a(".mkdf-progress-bar");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    b.appear(function () {
                        i(b);
                        var a = b.find(".mkdf-progress-content").data("percentage"),
                            c = b.find(".mkdf-progress-content"),
                            d = b.find(".mkdf-progress-number");
                        c.css("width", "0%"), c.animate({ width: a + "%" }, 1500), d.css("left", "0%"), d.animate({ left: a + "%" }, 1500);
                    });
                });
        }
        function i(b) {
            var c = parseFloat(b.find(".mkdf-progress-content").data("percentage")),
                d = b.find(".mkdf-progress-number .mkdf-percent");
            d.length &&
                d.each(function () {
                    var b = a(this);
                    b.parents(".mkdf-progress-number-wrapper").css("opacity", "1"), b.countTo({ from: 0, to: c, speed: 1500, refreshInterval: 50 });
                });
        }
        function j() {
            var b = a(".mkdf-message");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    b.find(".mkdf-close").click(function (b) {
                        b.preventDefault(), a(this).parent().parent().fadeOut(500);
                    });
                });
        }
        function k() {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = a(".mkdf-countdown");
            m.length &&
                m.each(function () {
                    function m() {
                        q.find(".countdown-amount").css({ "font-size": n + "px", "line-height": n + "px" }), q.find(".countdown-period").css({ "font-size": o + "px" });
                    }
                    var n,
                        o,
                        p = a(this).attr("id"),
                        q = a("#" + p);
                    (b = q.data("year")),
                        (c = q.data("month")),
                        (d = q.data("day")),
                        (e = q.data("hour")),
                        (f = q.data("minute")),
                        (g = q.data("timezone")),
                        (h = q.data("month-label")),
                        (i = q.data("day-label")),
                        (j = q.data("hour-label")),
                        (k = q.data("minute-label")),
                        (l = q.data("second-label")),
                        (n = q.data("digit-size")),
                        (o = q.data("label-size")),
                        q.countdown({ until: new Date(b, c - 1, d, e, f, 44), labels: ["Years", h, "Weeks", i, j, k, l], format: "ODHMS", timezone: g, padZeroes: !0, onTick: m });
                });
        }
        function l() {
            var b = a(".mkdf-testimonials.testimonials-slider");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    b.waitForImages(function () {
                        b.css("visibility", "visible");
                    });
                    var c = 400;
                    "undefined" != typeof b.data("animation-speed") && b.data("animation-speed") !== !1 && (c = b.data("animation-speed")),
                        b.hasClass("owl-carousel") || b.addClass("owl-carousel"),
                        b.owlCarousel({ items: 1, autoHeight: !0, autoplay: !0, autoplayTimeout: 3e3, autoplayHoverPause: !0, loop: !0, nav: !1, dots: !0, smartSpeed: c, animateIn: "fadeInRight", animateOut: "fadeOutLeft" });
                });
        }
        function m() {
            var b = a(".mkdf-masonry-gallery-holder"),
                c = b.children(".mkdf-mg-inner"),
                d = c.children(".mkdf-mg-grid-sizer");
            n(d.outerWidth(), c),
                b.length &&
                    (b.each(function () {
                        var b = a(this),
                            c = b.children(".mkdf-mg-inner");
                        c.waitForImages(function () {
                            c.animate({ opacity: 1 }), c.isotope({ layoutMode: "packery", itemSelector: ".mkdf-mg-item", percentPosition: !0, packery: { gutter: ".mkdf-mg-grid-gutter", columnWidth: ".mkdf-mg-grid-sizer" } });
                        });
                    }),
                    a(window).resize(function () {
                        n(d.outerWidth(), c), c.isotope("reloadItems");
                    }));
        }
        function n(a, b) {
            var c = b.find(".mkdf-mg-rectangle-portrait"),
                d = b.find(".mkdf-mg-rectangle-landscape"),
                e = b.find(".mkdf-mg-square-big"),
                f = b.find(".mkdf-mg-square-small");
            c.css("height", 2 * a), window.innerWidth <= 680 ? d.css("height", a / 2) : d.css("height", a), e.css("height", 2 * a), window.innerWidth <= 680 && e.css("height", e.width()), f.css("height", a);
        }
        function o() {
            var b,
                c,
                d = a(".mkdf-carousel-holder");
            d.length &&
                d.each(function () {
                    (b = a(this).find(".mkdf-carousel")), (c = b.data("items"));
                    var d = b.data("navigation");
                    (d = "undefined" != typeof d && "yes" === d),
                        b.waitForImages(function () {
                            b.css("visibility", "visible"),
                                b.hasClass("owl-carousel") || b.addClass("owl-carousel"),
                                b.owlCarousel({
                                    autoplayInterval: 3e3,
                                    autoplayHoverPause: !0,
                                    loop: !0,
                                    smartSpeed: 600,
                                    items: c,
                                    margin: 26,
                                    responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 1025: { items: c } },
                                    nav: d,
                                    dots: !1,
                                    navText: ['<span class="mkdf-prev-icon"><i class="lnr lnr-chevron-left"></i></span>', '<span class="mkdf-next-icon"><i class="lnr lnr-chevron-right"></i></span>'],
                                });
                        });
                });
        }
        function p() {
            var b = a(".mkdf-pie-chart-holder, .mkdf-pie-chart-with-icon-holder");
            b.length &&
                b.each(function () {
                    var b,
                        c,
                        d = a(this),
                        e = d.children(".mkdf-percentage, .mkdf-percentage-with-icon"),
                        f = 155;
                    "undefined" != typeof d.data("bar-color") && "" !== d.data("bar-color") && (b = d.data("bar-color")),
                        "undefined" != typeof d.data("track-color") && "" !== d.data("track-color") && (c = d.data("track-color")),
                        "undefined" != typeof d.data("size") && "" !== d.data("size") && (f = d.data("size")),
                        e.appear(
                            function () {
                                q(d), e.css("opacity", "1"), e.easyPieChart({ barColor: b, trackColor: c, scaleColor: !1, lineCap: "butt", lineWidth: 6, animate: 1500, size: f });
                            },
                            { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                        );
                });
        }
        function q(a) {
            a.css("opacity", "1");
            var b = a.find(".mkdf-to-counter"),
                c = parseFloat(b.text());
            b.countTo({ from: 0, to: c, speed: 1500, refreshInterval: 50 });
        }
        function r() {
            var b = a(".mkdf-pie-chart-doughnut-holder, .mkdf-pie-chart-pie-holder");
            b.each(function () {
                for (var b = a(this), c = b.find("canvas"), d = c.attr("id"), e = document.getElementById(d).getContext("2d"), f = [], g = a(e.canvas), h = 1; h <= 10; h++) {
                    var i,
                        j = g.data("value-" + h),
                        k = g.data("color-" + h);
                    "undefined" != typeof j && "undefined" != typeof k && ((i = { value: j, color: k }), f.push(i));
                }
                c.hasClass("mkdf-pie") ? new Chart(e).Pie(f, { segmentStrokeColor: "transparent" }) : new Chart(e).Doughnut(f, { segmentStrokeColor: "transparent" });
            });
        }
        function s() {
            var b = a(".mkdf-tabs");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    if (
                        (b.children(".mkdf-tab-container").each(function (b) {
                            b += 1;
                            var c = a(this),
                                d = c.attr("id"),
                                e = c.parent().find(".mkdf-tabs-nav li:nth-child(" + b + ") a"),
                                f = e.attr("href");
                            (d = "#" + d), d.indexOf(f) > -1 && e.attr("href", d);
                        }),
                        b.hasClass("mkdf-horizontal") || b.hasClass("mkdf-horizontal-boxed")
                            ? b.tabs()
                            : b.hasClass("mkdf-vertical") && (b.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"), b.find(".mkdf-tabs-nav > ul >li").removeClass("ui-corner-top").addClass("ui-corner-left")),
                        b.hasClass("mkdf-horizontal"))
                    ) {
                        var c = b.find("li"),
                            d = b.find(".mkdf-tab-line");
                        d.css({ width: c.first().find("> a").outerWidth() }),
                            d.css({ left: 0 }),
                            c.height() == c.parent("ul").height()
                                ? (c.each(function () {
                                      var b = a(this);
                                      b.mouseenter(function () {
                                          d.css({ width: b.find("> a").outerWidth() }), d.css({ left: b.offset().left - b.parent().offset().left });
                                      });
                                  }),
                                  b.find("> ul").mouseleave(function () {
                                      d.css({ width: c.filter(".ui-tabs-active").find("> a").outerWidth() }), d.css({ left: c.filter(".ui-tabs-active").find("> a").offset().left - c.filter(".ui-tabs-active").parent().offset().left });
                                  }))
                                : c.each(function () {
                                      d.css({ width: "100%" });
                                      var b = a(this);
                                      b.click(function () {
                                          d.css({ top: b.offset().top - b.parent().offset().top + b.height() - 3 });
                                      });
                                  });
                    }
                    if (b.hasClass("mkdf-vertical")) {
                        var c = b.find("li"),
                            e = b.find(".mkdf-tab-line");
                        e.css({ height: c.first().find("> a").outerHeight() }),
                            e.css({ top: 0 }),
                            c.each(function () {
                                var b = a(this);
                                b.mouseenter(function () {
                                    e.css({ height: b.find("> a").outerHeight() }), e.css({ top: b.find("> a").offset().top - b.parent().offset().top });
                                });
                            }),
                            b.find("> ul").mouseleave(function () {
                                e.css({ height: c.filter(".ui-tabs-active").find("> a").outerHeight() }), e.css({ top: c.filter(".ui-tabs-active").find("> a").offset().top - c.filter(".ui-tabs-active").parent().offset().top });
                            });
                    }
                });
        }
        function t() {
            var b = a(".mkdf-tab-container");
            b.length &&
                b.each(function () {
                    var b = a(this),
                        c = b.attr("id"),
                        d = "";
                    ("undefined" == typeof b.data("icon-html") && "false" === b.data("icon-html")) || (d = b.data("icon-html"));
                    var e = b.parents(".mkdf-tabs").find('.mkdf-tabs-nav > li > a[href="#' + c + '"]');
                    "undefined" != typeof e && e.children(".mkdf-icon-frame").append(d);
                });
        }
        function u() {
            var b = a(".mkdf-blog-list-holder.mkdf-masonry .mkdf-blog-list");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    b.animate({ opacity: 1 }), b.isotope({ itemSelector: ".mkdf-blog-list-masonry-item", masonry: { columnWidth: ".mkdf-blog-list-masonry-grid-sizer", gutter: ".mkdf-blog-list-masonry-grid-gutter" } });
                });
        }
        function v() {
            var b = a(".mkdf-custom-font-holder");
            b.length &&
                b.each(function () {
                    var b,
                        c,
                        d = a(this),
                        e = 1,
                        f = 1;
                    mkdf.windowWidth < 1200 && (e = 0.8),
                        mkdf.windowWidth < 1e3 && (e = 0.7),
                        mkdf.windowWidth < 768 && ((e = 0.6), (f = 0.7)),
                        mkdf.windowWidth < 600 && ((e = 0.5), (f = 0.6)),
                        mkdf.windowWidth < 480 && ((e = 0.4), (f = 0.5)),
                        "undefined" != typeof d.data("font-size") && d.data("font-size") !== !1 && ((b = parseInt(d.data("font-size"))), b > 70 ? (b = Math.round(b * e)) : b > 35 && (b = Math.round(b * f)), d.css("font-size", b + "px")),
                        "undefined" != typeof d.data("line-height") &&
                            d.data("line-height") !== !1 &&
                            ((c = parseInt(d.data("line-height"))), c > 70 && mkdf.windowWidth < 1200 ? (c = "1.2em") : c > 35 && mkdf.windowWidth < 768 ? (c = "1.2em") : (c += "px"), d.css("line-height", c));
                });
        }
        function w() {
            a(".mkdf-google-map").length &&
                a(".mkdf-google-map").each(function () {
                    var b,
                        c = a(this);
                    "undefined" != typeof c.data("custom-map-style") && (b = c.data("custom-map-style"));
                    var d;
                    "undefined" != typeof c.data("color-overlay") && c.data("color-overlay") !== !1 && (d = c.data("color-overlay"));
                    var e;
                    "undefined" != typeof c.data("saturation") && c.data("saturation") !== !1 && (e = c.data("saturation"));
                    var f;
                    "undefined" != typeof c.data("lightness") && c.data("lightness") !== !1 && (f = c.data("lightness"));
                    var g;
                    "undefined" != typeof c.data("zoom") && c.data("zoom") !== !1 && (g = c.data("zoom"));
                    var h;
                    "undefined" != typeof c.data("pin") && c.data("pin") !== !1 && (h = c.data("pin"));
                    var i;
                    "undefined" != typeof c.data("height") && c.data("height") !== !1 && (i = c.data("height"));
                    var j;
                    "undefined" != typeof c.data("unique-id") && c.data("unique-id") !== !1 && (j = c.data("unique-id"));
                    var k;
                    "undefined" != typeof c.data("scroll-wheel") && (k = c.data("scroll-wheel"));
                    var l;
                    "undefined" != typeof c.data("addresses") && c.data("addresses") !== !1 && (l = c.data("addresses"));
                    var m;
                    "undefined" != typeof c.data("location-map") && c.data("location-map") !== !1 && "yes" === c.data("location-map") && (m = !0);
                    var n = "map_" + j,
                        o = "geocoder_" + j,
                        p = "mkdf-map-" + j;
                    // x(b, d, e, f, k, g, p, i, h, n, o, l, m);
                });
        }
        // function x(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        //     if (m)
        //         var n = [
        //             { featureType: "landscape.natural", elementType: "geometry.fill", stylers: [{ visibility: "on" }, { color: "#e0efef" }] },
        //             { featureType: "poi", elementType: "geometry.fill", stylers: [{ visibility: "on" }, { hue: "#1900ff" }, { color: "#c0e8e8" }] },
        //             { featureType: "road", elementType: "geometry", stylers: [{ lightness: 100 }, { visibility: "simplified" }] },
        //             { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
        //             { featureType: "transit.line", elementType: "geometry", stylers: [{ visibility: "on" }, { lightness: 700 }] },
        //             { featureType: "water", elementType: "all", stylers: [{ color: "#7dcdcd" }] },
        //         ];
        //     else var n = [{ stylers: [{ hue: b }, { saturation: c }, { lightness: d }, { gamma: 1 }] }];
        //     var o;
        //     o = a ? "mkdf-style" : google.maps.MapTypeId.ROADMAP;
        //     var p = new google.maps.StyledMapType(n, { name: "Mikado Google Map" });
        //     k = new google.maps.Geocoder();
        //     var q = new google.maps.LatLng(-34.397, 150.644);
        //     isNaN(h) || (h += "px");
        //     var r = {
        //         zoom: f,
        //         scrollwheel: e,
        //         center: q,
        //         zoomControl: !0,
        //         zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL, position: google.maps.ControlPosition.RIGHT_CENTER },
        //         scaleControl: !1,
        //         scaleControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
        //         streetViewControl: !1,
        //         streetViewControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
        //         panControl: !1,
        //         panControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
        //         mapTypeControl: !1,
        //         mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkdf-style"], style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, position: google.maps.ControlPosition.LEFT_CENTER },
        //         mapTypeId: o,
        //     };
        //     (j = new google.maps.Map(document.getElementById(g), r)), j.mapTypes.set("mkdf-style", p);
        //     var s;
        //     for (s = 0; s < l.length; ++s) y(l[s], i, j, k);
        //     var t = document.getElementById(g);
        //     t.style.height = h;
        // }
        // function y(a, b, c, d) {
        //     if ("" !== a) {
        //         var e = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + a + "</p></div></div>",
        //             f = new google.maps.InfoWindow({ content: e });
        //         d.geocode({ address: a }, function (d, e) {
        //             if (e === google.maps.GeocoderStatus.OK) {
        //                 c.setCenter(d[0].geometry.location);
        //                 var g = new google.maps.Marker({ map: c, position: d[0].geometry.location, icon: b, title: a.store_title });
        //                 google.maps.event.addListener(g, "click", function () {
        //                     f.open(c, g);
        //                 }),
        //                     google.maps.event.addDomListener(window, "resize", function () {
        //                         c.setCenter(d[0].geometry.location);
        //                     });
        //             }
        //         });
        //     }
        // }
        function z() {
            var b = a(".mkdf-accordion-holder");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    if ((b.hasClass("mkdf-accordion") && b.accordion({ animate: "swing", collapsible: !1, active: 0, icons: "", heightStyle: "content" }), b.hasClass("mkdf-toggle"))) {
                        var c = a(this),
                            d = c.find(".mkdf-title-holder"),
                            e = d.next();
                        c.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"),
                            d.addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom"),
                            e.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
                            d.each(function () {
                                var b = a(this);
                                b.hover(function () {
                                    b.toggleClass("ui-state-hover");
                                }),
                                    b.on("click", function () {
                                        b.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), b.next().toggleClass("ui-accordion-content-active").slideToggle(400);
                                    });
                            });
                    }
                });
        }
        function A() {
            var b = a(".mkdf-image-gallery");
            b.length &&
                b.each(function () {
                    var b,
                        c,
                        d,
                        e = a(this).children(".mkdf-image-gallery-slider"),
                        f = !1,
                        g = e.data("autoplay"),
                        h = "yes" == e.data("navigation"),
                        i = "yes" == e.data("pagination");
                    "" !== g && (f = !0),
                        (b = "slide" == e.data("animation"))
                            ? ((c = "fadeInRight"), (d = "fadeOutLeft"))
                            : (b = "fade" == e.data("animation"))
                            ? ((c = "fadeIn"), (d = "fadeOut"))
                            : (b = "fadeUp" == e.data("animation"))
                            ? ((c = "fadeInUp"), (d = "fadeOutUp"))
                            : (b = "backSlide" == e.data("animation"))
                            ? ((c = "zoomInRight"), (d = "zoomOutLeft"))
                            : (b = "goDown" == e.data("animation")) && ((c = "slideInDown"), (d = "slideOutDown")),
                        e.hasClass("owl-carousel") || e.addClass("owl-carousel"),
                        e.waitForImages(function () {
                            e.css("visibility", "visible");
                        }),
                        e.owlCarousel({
                            items: 1,
                            autoplay: f,
                            autoplayInterval: 1e3 * g,
                            autoplayHoverPause: !0,
                            loop: !0,
                            nav: h,
                            dots: i,
                            transitionStyle: b,
                            autoHeight: !0,
                            smartSpeed: 600,
                            navText: ['<span class="mkdf-prev-icon"><i class="lnr lnr-chevron-left"></i></span>', '<span class="mkdf-next-icon"><i class="lnr lnr-chevron-right"></i></span>'],
                            animateIn: c,
                            animateOut: d,
                            onTranslate: function () {
                                e.find(".owl-nav > div").css({ "pointer-events": "none", cursor: "pointer" });
                            },
                            onTranslated: function () {
                                e.find(".owl-nav > div").css("pointer-events", "initial");
                            },
                        });
                });
        }
        function B() {
            var b = a(".mkdf-info-box-holder"),
                c = function (a) {
                    return !!a.length && a.height();
                },
                d = function () {
                    if (b.length) {
                        var d,
                            e = 0;
                        b.each(function () {
                            var b = a(this).find(".mkdf-ib-bottom-holder"),
                                f = a(this).find(".mkdf-ib-top-holder"),
                                g = c(b) + f.height();
                            (e = Math.max(e, g)), e <= g && ((d = a(this)), (e = g));
                        }),
                            b.height(e);
                    }
                },
                e = function (a) {
                    var b = new TimelineLite({ paused: !0 }),
                        d = a.find(".mkdf-ib-top-holder"),
                        e = a.find(".mkdf-ib-bottom-holder"),
                        f = c(e);
                    b.to(d, 0.6, { y: -(f / 2), ease: Back.easeInOut.config(2) }),
                        b.to(e, 0.4, { y: -(f / 2), opacity: 1, ease: Back.easeOut }, "-=0.3"),
                        a.hover(
                            function () {
                                b.restart();
                            },
                            function () {
                                b.reverse();
                            }
                        );
                };
            b.length &&
                (d(),
                a(mkdf.window).resize(function () {
                    d();
                }),
                b.each(function () {
                    var b = a(this);
                    e(b),
                        a(mkdf.window).resize(function () {
                            e(b);
                        });
                }));
        }
        function C() {
            var b = a(".mkdf-process-holder"),
                c = function (a) {
                    var b = a.find(".mkdf-process-item-holder"),
                        c = b.filter(".mkdf-pi-highlighted");
                    if (c.length)
                        if (1 === c.length) {
                            var d = c.nextAll();
                            d.length && d.addClass("mkdf-pi-push-right");
                        } else a.addClass("mkdf-process-multiple-highlights");
                },
                d = function (a) {
                    if (!mkdf.body.hasClass("mkdf-no-animations-on-touch")) {
                        var b = a.find(".mkdf-process-item-holder"),
                            c = a.find(".mkdf-process-bg-holder");
                        a.appear(
                            function () {
                                var a = new TimelineLite();
                                a.fromTo(c, 0.2, { y: 50, opacity: 0, delay: 0.1 }, { opacity: 1, y: 0, delay: 0.1 }),
                                    a.staggerFromTo(b, 0.3, { opacity: 0, y: 50, ease: Back.easeOut.config(2) }, { opacity: 1, y: 0, ease: Back.easeOut.config(2) }, 0.2);
                            },
                            { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                        );
                    }
                };
            return {
                init: function () {
                    b.length &&
                        b.each(function () {
                            c(a(this)), d(a(this));
                        });
                },
            };
        }
        function D() {
            var b = a(".mkdf-comparision-pricing-tables-holder"),
                c = function (b) {
                    var c = b.find(".mkdf-cpt-features-item"),
                        d = b.find(".mkdf-comparision-table-holder");
                    d.length &&
                        d.each(function () {
                            var b = a(this),
                                d = b.find(".mkdf-cpt-table-content li");
                            d.length &&
                                d.each(function (b) {
                                    var d = c[b],
                                        e = this,
                                        f = e.innerHTML;
                                    "undefined" != typeof d && (e.innerHTML = '<span class="mkdf-cpt-table-item-feature">' + a(d).text() + ": </span>" + f);
                                });
                        });
                };
            return {
                init: function () {
                    b.length &&
                        b.each(function () {
                            c(a(this));
                        });
                },
            };
        }
        function E() {
            var b = a(".mkdf-vertical-progress-bar-holder"),
                c = function (a) {
                    a.appear(
                        function () {
                            var b = a.find(".mkdf-vpb-bar"),
                                c = a.find(".mkdf-vpb-active-bar"),
                                d = b.data("percent");
                            c.animate({ height: d + "%" }, 1500);
                        },
                        { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                    );
                },
                d = function (a) {
                    a.appear(function () {
                        var b = a.find(".mkdf-vpb-bar"),
                            c = b.data("percent"),
                            d = a.find(".mkdf-vpb-percent-number");
                        d.countTo({ from: 0, to: c, speed: 1500, refreshInterval: 50 });
                    });
                };
            return {
                init: function () {
                    b.length &&
                        b.each(function () {
                            c(a(this)), d(a(this));
                        });
                },
            };
        }
        function F() {
            var b = a(".mkdf-icon-progress-bar"),
                c = function (b) {
                    var c = [];
                    b.appear(
                        function () {
                            var e = parseInt(b.data("number-of-active-icons")),
                                f = b.find(".mkdf-ipb-icon"),
                                g = b.data("icon-active-color");
                            "undefined" != typeof e &&
                                f.each(function (b) {
                                    if (b < e) {
                                        var h = 150 * (b + 1),
                                            i = a(this);
                                        c[b] = setTimeout(function () {
                                            d(i, g), a(f[b]).addClass("active");
                                        }, h);
                                    }
                                });
                        },
                        { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                    );
                },
                d = function (a, b) {
                    a.addClass("mkdf-ipb-active"), "undefined" != typeof b && "" !== b && a.find(".mkdf-ipb-icon-elem").css("color", b);
                };
            return {
                init: function () {
                    b.length &&
                        b.each(function () {
                            c(a(this));
                        });
                },
            };
        }
        function G() {
            var b = a(".mkdf-blog-slider-holder");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    b.hasClass("owl-carousel") || b.addClass("owl-carousel"),
                        b.owlCarousel({
                            items: 1,
                            nav: !0,
                            autoHeight: !0,
                            dots: !1,
                            smartSpeed: 600,
                            navText: ['<span class="mkdf-prev-icon"><i class="lnr lnr-chevron-left"></i></span>', '<span class="mkdf-next-icon"><i class="lnr lnr-chevron-right"></i></span>'],
                            animateIn: "fadeIn",
                            animateOut: "fadeOut",
                            onInitialized: function () {
                                b.css("opacity", 1);
                            },
                        });
                });
        }
        function H() {
            var b = a(".mkdf-blog-carousel");
            b.length &&
                b.each(function () {
                    var b = a(this);
                    b.hasClass("owl-carousel") || b.addClass("owl-carousel"),
                        b.waitForImages(function () {
                            b.animate({ opacity: 1 });
                        }),
                        b.owlCarousel({
                            autoplay: !0,
                            autoplayHoverPause: !0,
                            loop: !0,
                            responsive: { 0: { items: 1 }, 769: { items: 2 }, 1025: { items: 3 } },
                            dots: !1,
                            smartSpeed: 400,
                            nav: !0,
                            navText: ['<span class="mkdf-prev-icon"><i class="lnr lnr-chevron-left"></i></span>', '<span class="mkdf-next-icon"><i class="lnr lnr-chevron-right"></i></span>'],
                        });
                });
        }
        function I() {
            var b = a(".vc_empty_space"),
                c = { large_laptop: 1560, laptop: 1280, tablet_landscape: 1024, tablet_portrait: 768, phone_landscape: 600, phone_portrait: 480 },
                d =
                    ((function () {
                        var a = [];
                        for (var b in c) a.push(c[b]);
                        return a;
                    })(),
                    function (a) {
                        var b = {};
                        for (var d in c) {
                            var e = a.data(d);
                            "undefined" != typeof e && "" !== e && (b[d] = e);
                        }
                        return b;
                    }),
                e = function (a) {
                    var b = [];
                    for (var d in c) {
                        var e = a.data(d);
                        "undefined" != typeof e && "" !== e && b.push(c[d]);
                    }
                    return b;
                },
                f = function (a, b) {
                    if ("undefined" != typeof a) {
                        var d = b.data("original-height"),
                            f = e(b),
                            g = Math.max.apply(null, f);
                        for (var h in c) mkdf.windowWidth <= c[h] ? b.height(a[h]) : mkdf.windowWidth > g && b.height(d);
                    }
                };
            return {
                init: function () {
                    b.length &&
                        b.each(function () {
                            var b = d(a(this));
                            f(b, a(this));
                            var c = a(this);
                            a(window).resize(function () {
                                f(b, c);
                            });
                        });
                },
            };
        }
        var J = {};
        (mkdf.modules.shortcodes = J),
            (J.mkdfInitCounter = f),
            (J.mkdfInitProgressBars = h),
            (J.mkdfInitCountdown = k),
            (J.mkdfInitMessages = j),
            (J.mkdfInitTestimonials = l),
            (J.mkdfInitCarousels = o),
            (J.mkdfInitPieChart = p),
            (J.mkdfInitPieChartDoughnut = r),
            (J.mkdfInitTabs = s),
            (J.mkdfInitTabIcons = t),
            (J.mkdfInitBlogListMasonry = u),
            (J.mkdfCustomFontResize = v),
            (J.mkdfInitImageGallery = A),
            (J.mkdfInitAccordions = z),
            (J.mkdfShowGoogleMap = w),
            (J.mkdfInfoBox = B),
            (J.mkdfProcess = C),
            (J.blogCarousel = H),
            (J.mkdfComparisonPricingTables = D),
            (J.mkdfProgressBarVertical = E),
            (J.mkdfIconProgressBar = F),
            (J.mkdfBlogSlider = G),
            (J.mkdfOnDocumentReady = b),
            (J.mkdfOnWindowLoad = c),
            (J.mkdfOnWindowResize = d),
            (J.mkdfOnWindowScroll = e),
            (J.emptySpaceResponsive = I),
            a(document).ready(b),
            a(window).load(c),
            a(window).resize(d),
            a(window).scroll(e);
        var K = (mkdf.modules.shortcodes.mkdfIcon = function () {
                var b = a(".mkdf-icon-shortcode"),
                    c = function (a) {
                        a.hasClass("mkdf-icon-animation") &&
                            a.appear(
                                function () {
                                    a.parent(".mkdf-icon-animation-holder").addClass("mkdf-icon-animation-show");
                                },
                                { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                            );
                    },
                    d = function (a) {
                        if ("undefined" != typeof a.data("hover-color")) {
                            var b = function (a) {
                                    a.data.icon.css("color", a.data.color);
                                },
                                c = a.find(".mkdf-icon-element"),
                                d = a.data("hover-color"),
                                e = c.css("color");
                            "" !== d && (a.on("mouseenter", { icon: c, color: d }, b), a.on("mouseleave", { icon: c, color: e }, b));
                        }
                    },
                    e = function (a) {
                        if ("undefined" != typeof a.data("hover-background-color")) {
                            var b = function (a) {
                                    a.data.icon.css("background-color", a.data.color);
                                },
                                c = a.data("hover-background-color"),
                                d = a.css("background-color");
                            "" !== c && (a.on("mouseenter", { icon: a, color: c }, b), a.on("mouseleave", { icon: a, color: d }, b));
                        }
                    },
                    f = function (a) {
                        if ("undefined" != typeof a.data("hover-border-color")) {
                            var b = function (a) {
                                    a.data.icon.css("border-color", a.data.color);
                                },
                                c = a.data("hover-border-color"),
                                d = a.css("border-color");
                            "" !== c && (a.on("mouseenter", { icon: a, color: c }, b), a.on("mouseleave", { icon: a, color: d }, b));
                        }
                    };
                return {
                    init: function () {
                        b.length &&
                            b.each(function () {
                                c(a(this)), d(a(this)), e(a(this)), f(a(this));
                            });
                    },
                };
            }),
            L = (mkdf.modules.shortcodes.mkdfSocialIconWidget = function () {
                var b = a(".mkdf-social-icon-widget-holder"),
                    c = function (a) {
                        if ("undefined" != typeof a.data("hover-color")) {
                            var b = function (a) {
                                    a.data.icon.css("color", a.data.color);
                                },
                                c = a,
                                d = a.data("hover-color"),
                                e = c.css("color");
                            "" !== d && (a.on("mouseenter", { icon: c, color: d }, b), a.on("mouseleave", { icon: c, color: e }, b));
                        }
                    };
                return {
                    init: function () {
                        b.length &&
                            b.each(function () {
                                c(a(this));
                            });
                    },
                };
            }),
            M = (mkdf.modules.shortcodes.mkdfButton = function () {
                var b = a(".mkdf-btn"),
                    c = function (a) {
                        if ("undefined" != typeof a.data("hover-color")) {
                            var b = function (a) {
                                    a.data.button.css("color", a.data.color);
                                },
                                c = a.css("color"),
                                d = a.data("hover-color");
                            a.on("mouseenter", { button: a, color: d }, b), a.on("mouseleave", { button: a, color: c }, b);
                        }
                    },
                    d = function (a) {
                        if ("undefined" != typeof a.data("hover-bg-color")) {
                            var b = function (a) {
                                    a.data.button.css("background-color", a.data.color);
                                },
                                c = a.css("background-color"),
                                d = a.data("hover-bg-color");
                            a.on("mouseenter", { button: a, color: d }, b), a.on("mouseleave", { button: a, color: c }, b);
                        }
                    },
                    e = function (a) {
                        if ("undefined" != typeof a.data("hover-border-color")) {
                            var b = function (a) {
                                    a.data.button.css("border-color", a.data.color);
                                },
                                c = a.css("borderTopColor"),
                                d = a.data("hover-border-color");
                            a.on("mouseenter", { button: a, color: d }, b), a.on("mouseleave", { button: a, color: c }, b);
                        }
                    };
                return {
                    init: function () {
                        b.length &&
                            b.each(function () {
                                c(a(this)), d(a(this)), e(a(this));
                            });
                    },
                };
            }),
            N = (mkdf.modules.shortcodes.mkdfInitIconList = function () {
                var b = a(".mkdf-animate-list"),
                    c = function (a) {
                        setTimeout(function () {
                            a.appear(
                                function () {
                                    a.addClass("mkdf-appeared");
                                },
                                { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount }
                            );
                        }, 30);
                    };
                return {
                    init: function () {
                        b.length &&
                            b.each(function () {
                                c(a(this));
                            });
                    },
                };
            });
    })(jQuery),
    (function (a) {
        "use strict";
        function b() {
            f(), g();
        }
        function c() {}
        function d() {}
        function e() {}
        function f() {
            a(document).on("click", ".mkdf-quantity-minus, .mkdf-quantity-plus", function (b) {
                b.stopPropagation();
                var c,
                    d = a(this),
                    e = d.siblings(".mkdf-quantity-input"),
                    f = parseFloat(e.attr("step")),
                    g = parseFloat(e.attr("max")),
                    h = !1,
                    i = parseFloat(e.val());
                d.hasClass("mkdf-quantity-minus") && (h = !0), h ? ((c = i - f), c >= 1 ? e.val(c) : e.val(0)) : ((c = i + f), void 0 === g ? e.val(c) : c >= g ? e.val(g) : e.val(c)), e.trigger("change");
            });
        }
        function g() {
            a(".woocommerce-ordering .orderby").length && a(".woocommerce-ordering .orderby").select2({ minimumResultsForSearch: 1 / 0 }),
                a("#calc_shipping_country").length && a("#calc_shipping_country").select2(),
                a(".cart-collaterals .shipping select#calc_shipping_state").length && a(".cart-collaterals .shipping select#calc_shipping_state").select2();
        }
        var h = {};
        (mkdf.modules.woocommerce = h),
            (h.mkdfInitQuantityButtons = f),
            (h.mkdfInitSelect2 = g),
            (h.mkdfOnDocumentReady = b),
            (h.mkdfOnWindowLoad = c),
            (h.mkdfOnWindowResize = d),
            (h.mkdfOnWindowScroll = e),
            a(document).ready(b),
            a(window).load(c),
            a(window).resize(d),
            a(window).scroll(e);
    })(jQuery);
