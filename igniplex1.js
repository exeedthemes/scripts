function vW() {
    Lz();
    gL();
    Dk();
    rC.b();
    otherScript();
    window.addEventListener ? window.addEventListener('load', nV()) : window.attachEvent && window.attachEvent('onload', nV());
    if (config.lazyads) {
        let _0x9c1fx2 = false;
        window.addEventListener('scroll', function () {
            (0 != document.documentElement.scrollTop && false === _0x9c1fx2 || 0 != document.body.scrollTop && !1 === _0x9c1fx2) && (! function () {
                    aB()
                }
                (), _0x9c1fx2 = true)
        }, true)
    } else {
        aB()
    };
    if ($('body').hasClass('isHomepage')) {
        sL()
    };
    if ($('body').hasClass('isMultiple')) {
        hH.j();
        let _0x9c1fx3 = false;
        window.addEventListener('scroll', function () {
            (0 != document.documentElement.scrollTop && false === _0x9c1fx3 || 0 != document.body.scrollTop && !1 === _0x9c1fx3) && (! function () {
                    mB.e()
                }
                (), _0x9c1fx3 = true)
        }, true)
    };
    if ($('body').hasClass('isPost')) {
        Po();
        PoO()
    };
    if ($('body').hasClass('isPost') && !$('body').hasClass('isPreview')) {
        let _0x9c1fx4 = false;
        window.addEventListener('scroll', function () {
            (0 != document.documentElement.scrollTop && false === _0x9c1fx4 || 0 != document.body.scrollTop && !1 === _0x9c1fx4) && (! function () {
                    rR.h()
                }
                (), _0x9c1fx4 = true)
        }, true)
    };
    if ($('body').hasClass('isSingle')) {
        Si()
    }
}


if (document.cookie.match(/_ign=(\d+)/) && document.cookie.match(/_ign=(\d+)/)[0]) {
    window.addEventListener ? window.addEventListener('load', vW) : window.attachEvent && window.attachEvent('onload', vW)
} else {
    a()
}
