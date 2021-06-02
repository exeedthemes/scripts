function clock() {
    var _0xc2f3x2 = new Date,
        _0xc2f3x3 = _0xc2f3x2.getMinutes(),
        _0xc2f3x4 = (_0xc2f3x2.getSeconds(), _0xc2f3x2.getHours()),
        _0xc2f3x5 = 'AM';
    12 > _0xc2f3x4 && (console.log('The time is ' + _0xc2f3x4 + ':' + _0xc2f3x3 + ' AM'), _0xc2f3x4 = _0xc2f3x4, _0xc2f3x5 = 'AM'), 12 == _0xc2f3x4 && (console.log('The time is ' + _0xc2f3x4 + ':' + _0xc2f3x3 + ' PM'), _0xc2f3x5 = 'PM'), 24 == _0xc2f3x4 && (console.log('The time is ' + (_0xc2f3x4 - 12) + ':' + _0xc2f3x3 + ' AM'), _0xc2f3x4 = 12, _0xc2f3x5 = 'AM'), _0xc2f3x4 > 12 && (console.log('The time is ' + (_0xc2f3x4 - 12) + ':' + _0xc2f3x3 + ' PM'), _0xc2f3x4 -= 12, _0xc2f3x5 = 'PM'), 10 > _0xc2f3x3 && (_0xc2f3x3 = '0' + _0xc2f3x3), 10 > _0xc2f3x4 && (_0xc2f3x4 = '0' + _0xc2f3x4), document.getElementById('hours').innerHTML = _0xc2f3x4, document.getElementById('minutes').innerHTML = _0xc2f3x3 + ':' + _0xc2f3x5
}
clock(), setInterval(clock, 1e3);
$('.sidebar-menu-close').on('click', function () {
    $('.sidebar-menu').addClass('sidebar-close')
}), $('.sidebar-menu-open').on('click', function () {
    $('.sidebar-menu').removeClass('sidebar-close')
});
var no_image = 'https://goomsite.github.io/img/non.webp';
var month_format = [, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
$(function () {
    var _0xc2f3x2 = $(document).scrollTop(),
        _0xc2f3x3 = $('.header-fixed').outerHeight();
    $(window).scroll(function () {
        var _0xc2f3x8 = $(document).scrollTop();
        $(document).scrollTop() >= 50 ? $('.header-fixed').css('position', 'sticky') : $('.header-fixed').css('position', 'sticky'), _0xc2f3x8 > _0xc2f3x3 ? $('.header-fixed').addClass('scroll') : $('.header-fixed').removeClass('scroll'), _0xc2f3x8 > _0xc2f3x2 ? $('.header-fixed').removeClass('no-scroll') : $('.header-fixed').addClass('no-scroll'), _0xc2f3x2 = $(document).scrollTop()
    })
});
$('.recent-goom .HTML .widget-content').each(function () {
    var _0xc2f3x2 = $(this).find('span').attr('data-label'),
        _0xc2f3x5 = ($(this).find('span').attr('data-no'), $(this).parent().attr('id')),
        _0xc2f3x9 = $(this).find('span').attr('data-type');
    _0xc2f3x9.match('recent') && $.ajax({
        url: '/feeds/posts/default/-/' + _0xc2f3x2 + '?alt=json-in-script&max-results=3',
        type: 'get',
        dataType: 'jsonp',
        success: function (_0xc2f3x2) {
            for (var _0xc2f3x9 = '', _0xc2f3xa = '<ul>', _0xc2f3x4 = 0; _0xc2f3x4 < _0xc2f3x2.feed.entry.length; _0xc2f3x4++) {
                for (var _0xc2f3xb = 0; _0xc2f3xb < _0xc2f3x2.feed.entry[_0xc2f3x4].link.length; _0xc2f3xb++) {
                    if ('alternate' == _0xc2f3x2.feed.entry[_0xc2f3x4].link[_0xc2f3xb].rel) {
                        _0xc2f3x9 = _0xc2f3x2.feed.entry[_0xc2f3x4].link[_0xc2f3xb].href;
                        break
                    }
                };
                var _0xc2f3xc = _0xc2f3x2.feed.entry[_0xc2f3x4].title.$t,
                    _0xc2f3x8 = _0xc2f3x2.feed.entry[_0xc2f3x4].category[0].term,
                    _0xc2f3xd = _0xc2f3x2.feed.entry[_0xc2f3x4].content.$t,
                    _0xc2f3xe = $('<div>').html(_0xc2f3xd);
                if (_0xc2f3xd.indexOf('//www.youtube.com/embed/') > -1) {
                    var _0xc2f3xf = _0xc2f3x2.feed.entry[_0xc2f3x4].media$thumbnail.url,
                        _0xc2f3x3 = _0xc2f3xf
                } else {
                    if (_0xc2f3xd.indexOf('<img') > -1) {
                        var _0xc2f3x10 = _0xc2f3xe.find('img:first').attr('src'),
                            _0xc2f3x3 = _0xc2f3x10
                    } else {
                        var _0xc2f3x3 = no_image
                    }
                };
                _0xc2f3xa += '<li><div class="rmg"><a href="' + _0xc2f3x9 + '"><img alt="' + _0xc2f3xc + '" src="' + _0xc2f3x3 + '" title="' + _0xc2f3xc + '"/></a></div><div class="recent-tag"><a class="icon ' + _0xc2f3x8 + '" href="/search/label/' + _0xc2f3x8 + '" title="' + _0xc2f3x8 + '"></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + _0xc2f3x9 + '" title="' + _0xc2f3xc + '">' + _0xc2f3xc + '</a></h3></div><div class="clr"/></li>'
            };
            _0xc2f3xa += '</ul>', $('.recent-goom .HTML .widget-content').each(function () {
                var _0xc2f3x2 = $(this).parent().attr('id');
                _0xc2f3x2 == _0xc2f3x5 && ($(this).html(_0xc2f3xa), $(this).parent().addClass('recent'), $(this).find('.rmg').each(function () {
                    $(this).attr('style', function (_0xc2f3x2, _0xc2f3x5) {
                        return _0xc2f3x5.replace('/default.jpg', '/mqdefault.jpg')
                    }).attr('style', function (_0xc2f3x2, _0xc2f3x5) {
                        return _0xc2f3x5.replace('s72-c', 's1600')
                    })
                }))
            })
        }
    })
}), $('#related-posts').each(function () {
    var _0xc2f3x2 = $(this).text();
    $.ajax({
        url: '/feeds/posts/default/-/' + _0xc2f3x2 + '?alt=json-in-script&max-results=3',
        type: 'get',
        dataType: 'jsonp',
        success: function (_0xc2f3x2) {
            for (var _0xc2f3x5 = '', _0xc2f3x9 = '<div class="related-wrap">', _0xc2f3xa = 0; _0xc2f3xa < _0xc2f3x2.feed.entry.length; _0xc2f3xa++) {
                for (var _0xc2f3x4 = 0; _0xc2f3x4 < _0xc2f3x2.feed.entry[_0xc2f3xa].link.length; _0xc2f3x4++) {
                    if ('alternate' == _0xc2f3x2.feed.entry[_0xc2f3xa].link[_0xc2f3x4].rel) {
                        _0xc2f3x5 = _0xc2f3x2.feed.entry[_0xc2f3xa].link[_0xc2f3x4].href;
                        break
                    }
                };
                var _0xc2f3xb = _0xc2f3x2.feed.entry[_0xc2f3xa].title.$t,
                    _0xc2f3xc = (_0xc2f3x2.feed.entry[_0xc2f3xa].category[0].term, _0xc2f3x2.feed.entry[_0xc2f3xa].author[0].name.$t, _0xc2f3x2.feed.entry[_0xc2f3xa].content.$t),
                    _0xc2f3x8 = $('<div>').html(_0xc2f3xc);
                if (_0xc2f3xc.indexOf('//www.youtube.com/embed/') > -1) {
                    var _0xc2f3xd = _0xc2f3x2.feed.entry[_0xc2f3xa].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg'),
                        _0xc2f3xe = _0xc2f3xd
                } else {
                    if (_0xc2f3xc.indexOf('<img') > -1) {
                        var _0xc2f3xf = _0xc2f3x8.find('img:first').attr('src').replace('s72-c', 's1600'),
                            _0xc2f3xe = _0xc2f3xf
                    } else {
                        var _0xc2f3xe = no_image
                    }
                };
                _0xc2f3x9 += '<li><div class="related-img"><a href="' + _0xc2f3x5 + '"><img alt="' + _0xc2f3xb + '" src="' + _0xc2f3xe + '" title="' + _0xc2f3xb + '"/></a></div><div class="related-content"><h3 class="related-title"><a href="' + _0xc2f3x5 + '" title="' + _0xc2f3xb + '">' + _0xc2f3xb + '</a></h3></div></li>'
            };
            _0xc2f3x9 += '</div><div class="clr"/>', $('#related-posts').html(_0xc2f3x9), $(this).find('.related-img').each(function () {
                $(this).attr('style', function (_0xc2f3x2, _0xc2f3x5) {
                    return _0xc2f3x5.replace('/default.jpg', '/mqdefault.jpg')
                }).attr('style', function (_0xc2f3x2, _0xc2f3x5) {
                    return _0xc2f3x5.replace('s72-c', 's1600')
                })
            })
        }
    })
});

function kirimWA(_0xc2f3x2) {
    var _0xc2f3x5 = !0;
    if (jQuery('#' + _0xc2f3x2 + ' .wajib').each(function () {
            '' != $.trim(jQuery(this).val()) && 'default' != $.trim(jQuery(this).val()) || jQuery(this).addClass('focus')
        }), jQuery('#' + _0xc2f3x2 + ' .wajib').each(function () {
            return '' == $.trim(jQuery(this).val()) ? (_0xc2f3x5 = !1, jQuery(this).parents('label').find('.validasi').addClass('show'), jQuery(this).focus(), !1) : 'default' == $.trim(jQuery(this).val()) ? (_0xc2f3x5 = !1, jQuery(this).parents('label').find('.validasi').addClass('show'), !1) : void(0)
        }), _0xc2f3x5 === !0) {
        var _0xc2f3xb = '',
            _0xc2f3x9 = 'https://web.whatsapp.com/send';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (_0xc2f3x9 = 'whatsapp://send'), 'konsultasi' === _0xc2f3x2) {
            var _0xc2f3x8 = 91,
                _0xc2f3xa = 9414157486,
                _0xc2f3x4 = 'Admin',
                _0xc2f3x3 = 'Hello',
                _0xc2f3xc = (jQuery('#' + _0xc2f3x2 + ' .title-content').text(), jQuery('#' + _0xc2f3x2 + ' .pesan').val()),
                _0xc2f3xb = _0xc2f3x9 + '?phone=' + _0xc2f3x8 + _0xc2f3xa + '&text=*' + _0xc2f3x3 + ' ' + _0xc2f3x4 + '...* %0A%0A' + _0xc2f3xc
        };
        jQuery(this).attr('href', _0xc2f3xb);
        var _0xc2f3x12 = 960,
            _0xc2f3x10 = 540,
            _0xc2f3xe = Number(screen.width / 2 - _0xc2f3x12 / 2),
            _0xc2f3xd = Number(screen.height / 2 - _0xc2f3x10 / 2),
            _0xc2f3x13 = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + _0xc2f3x12 + ', height=' + _0xc2f3x10 + ', top=' + _0xc2f3xd + ', left=' + _0xc2f3xe);
        return _0xc2f3x13.focus(), !1
    }
}
window.addEventListener('load', function () {
    var _0xc2f3x2 = jQuery('title').text();
    jQuery('.waFix').on('click', function () {
        jQuery(this).removeClass('show'), jQuery('title').text(_0xc2f3x2)
    }), jQuery('.formWA input, .formWA textarea').on('keypress', function () {
        13 === event.keyCode && jQuery(this).parents('.formWA').find('.submit').trigger('click')
    }), jQuery('.formWA .wajib').each(function () {
        title = jQuery(this).attr('placeholder'), label = jQuery(this).parents('label'), jQuery('<span class="validasi">(Required)</span>').appendTo(label)
    }), jQuery('.formWA .wajib').keyup(function () {
        '' != jQuery(this).val() && (jQuery(this).removeClass('focus'), jQuery(this).parents('label').find('.validasi').removeClass('show'))
    }), jQuery('.formWA select').change(function () {
        jQuery(this).removeClass('focus'), jQuery(this).parents('label').find('.validasi').removeClass('show')
    })
}, !1), jQuery('.formWA .submit').on('click', function () {
    return kirimWA(jQuery(this).parents('.poptamv').attr('id')), !1
}), $(document).on('click', '.close-chat', function () {
    $('#whatsapp-chat').addClass('hide').removeClass('show')
}), $(document).on('click', '.nabil-live', function () {
    $('#whatsapp-chat').addClass('show').removeClass('hide')
});
var lazyadsense = false;
window.addEventListener("scroll", function () {
    if ((document.documentElement.scrollTop != 0 && lazyadsense === false) || (document.body.scrollTop != 0 && lazyadsense === false)) {
        (function () {
            var ad = document.createElement('script');
            ad.type = 'text/javascript';
            ad.async = true;
            ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            var sc = document.getElementsByTagName('script')[0];
            sc.parentNode.insertBefore(ad, sc);
        })();
        lazyadsense = true;
    }
}, true);
(function (a) {
    a.fn.lazyload = function (b) {
        var c = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window
        };
        if (b) {
            a.extend(c, b)
        }
        var d = this;
        if ("scroll" == c.event) {
            a(c.container).bind("scroll", function (b) {
                var e = 0;
                d.each(function () {
                    if (a.abovethetop(this, c) || a.leftofbegin(this, c)) {} else if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) {
                        a(this).trigger("appear")
                    } else {
                        if (e++ > c.failurelimit) {
                            return false
                        }
                    }
                });
                var f = a.grep(d, function (a) {
                    return !a.loaded
                });
                d = a(f)
            })
        }
        this.each(function () {
            var b = this;
            if (undefined == a(b).attr("original")) {
                a(b).attr("original", a(b).attr("src"))
            }
            if ("scroll" != c.event || undefined == a(b).attr("src") || c.placeholder == a(b).attr("src") || a.abovethetop(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.rightoffold(b, c)) {
                if (c.placeholder) {
                    a(b).attr("src", c.placeholder)
                } else {
                    a(b).removeAttr("src")
                }
                b.loaded = false
            } else {
                b.loaded = true
            }
            a(b).one("appear", function () {
                if (!this.loaded) {
                    a("<img/>").bind("load", function () {
                        a(b).hide().attr("src", a(b).attr("original"))[c.effect](c.effectspeed);
                        b.loaded = true
                    }).attr("src", a(b).attr("original"))
                }
            });
            if ("scroll" != c.event) {
                a(b).bind(c.event, function (c) {
                    if (!b.loaded) {
                        a(b).trigger("appear")
                    }
                })
            }
        });
        a(c.container).trigger(c.event);
        return this
    };
    a.belowthefold = function (b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).height() + a(window).scrollTop()
        } else {
            var d = a(c.container).offset().top + a(c.container).height()
        }
        return d <= a(b).offset().top - c.threshold
    };
    a.rightoffold = function (b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).width() + a(window).scrollLeft()
        } else {
            var d = a(c.container).offset().left + a(c.container).width()
        }
        return d <= a(b).offset().left - c.threshold
    };
    a.abovethetop = function (b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).scrollTop()
        } else {
            var d = a(c.container).offset().top
        }
        return d >= a(b).offset().top + c.threshold + a(b).height()
    };
    a.leftofbegin = function (b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).scrollLeft()
        } else {
            var d = a(c.container).offset().left
        }
        return d >= a(b).offset().left + c.threshold + a(b).width()
    };
    a.extend(a.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
})(jQuery);
$(function () {
    $("img").lazyload({
        placeholder: "https://1.bp.blogspot.com/-Q4QqdyWtLSI/XghECAoZUoI/AAAAAAAABs0/NFJsaHuy-PU6HIeIf960bwvdpEAXEJTZACLcBGAsYHQ/s1600/goom.gif",
        effect: "fadeIn",
        threshold: "-50"
    })
});
