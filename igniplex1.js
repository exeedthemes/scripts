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

function a() {
    if (!document.body.classList.contains('isPreview')) {
        let _0x9c1fx6 = new XMLHttpRequest();
        _0x9c1fx6.open('GET', 'https://source.igniel.com/graph.php?token=' + document.getElementsByClassName('igniplexLicense')[0].innerHTML + '&domain=igniplex.blogspot.com&id=ign&ver=2.6', true);
        _0x9c1fx6.onreadystatechange = function () {
            if (_0x9c1fx6.readyState == 4 && _0x9c1fx6.status == 200) {
                let _0x9c1fx7 = _0x9c1fx6.responseText;
                if (_0x9c1fx7 === 'true') {
                    cK.a();
                    vW()
                } else {
                    if (document.cookie.match(/_ign=(\d+)/) && document.cookie.match(/_ign=(\d+)/)[0]) {
                        cK.c();
                        if (except.indexOf(parent) == -1 || document.querySelector('ad-settings-preview')) {
                            setTimeout(function () {
                                window.location.href = 'https://bit.ly/igniplexxx?ref=' + window.location.host
                            }, 1000)
                        }
                    } else {
                        if (except.indexOf(parent) == -1 || document.querySelector('ad-settings-preview')) {
                            setTimeout(function () {
                                window.location.href = 'https://bit.ly/igniplexxx?ref=' + window.location.host
                            }, 1000)
                        }
                    }
                }
            }
        };
        _0x9c1fx6.send()
    }
}
if (document.cookie.match(/_ign=(\d+)/) && document.cookie.match(/_ign=(\d+)/)[0]) {
    window.addEventListener ? window.addEventListener('load', vW) : window.attachEvent && window.attachEvent('onload', vW)
} else {
    a()
}
