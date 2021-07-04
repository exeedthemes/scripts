function clock() {
    var d = new Date;
    var hr = d.getMinutes();
    var replacedHtml = (d.getSeconds(), d.getHours());
    var ampm = "AM";
    if (12 > replacedHtml) {
        console.log("The time is " + replacedHtml + ":" + hr + " AM");
        replacedHtml = replacedHtml;
        ampm = "AM";
    }
    if (12 == replacedHtml) {
        console.log("The time is " + replacedHtml + ":" + hr + " PM");
        ampm = "PM";
    }
    if (24 == replacedHtml) {
        console.log("The time is " + (replacedHtml - 12) + ":" + hr + " AM");
        replacedHtml = 12;
        ampm = "AM";
    }
    if (replacedHtml > 12) {
        console.log("The time is " + (replacedHtml - 12) + ":" + hr + " PM");
        replacedHtml = replacedHtml - 12;
        ampm = "PM";
    }
    if (10 > hr) {
        hr = "0" + hr;
    }
    if (10 > replacedHtml) {
        replacedHtml = "0" + replacedHtml;
    }
    document.getElementById("hours").innerHTML = replacedHtml;
    document.getElementById("minutes").innerHTML = hr + ":" + ampm;
}
clock(), setInterval(clock, 1e3);
$(".sidebar-menu-close").on("click", function () {
    $(".sidebar-menu").addClass("sidebar-close");
}), $(".sidebar-menu-open").on("click", function () {
    $(".sidebar-menu").removeClass("sidebar-close");
});
var no_image = "https://goomsite.github.io/img/non.webp";
var month_format = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
$(function () {
    var gasSum = $(document).scrollTop();
    var formattedGradebookGrade = $(".header-fixed").outerHeight();
    $(window).scroll(function () {
        var formattedBestGrade = $(document).scrollTop();
        if ($(document).scrollTop() >= 50) {
            $(".header-fixed").css("position", "sticky");
        } else {
            $(".header-fixed").css("position", "sticky");
        }
        if (formattedBestGrade > formattedGradebookGrade) {
            $(".header-fixed").addClass("scroll");
        } else {
            $(".header-fixed").removeClass("scroll");
        }
        if (formattedBestGrade > gasSum) {
            $(".header-fixed").removeClass("no-scroll");
        } else {
            $(".header-fixed").addClass("no-scroll");
        }
        gasSum = $(document).scrollTop();
    });
});
$(".recent-goom .HTML .widget-content").each(function () {
    var l = $(this).find("span").attr("data-label");
    var river = ($(this).find("span").attr("data-no"), $(this).parent().attr("id"));
    var router = $(this).find("span").attr("data-type");
    if (router.match("recent")) {
        $.ajax({
            url: "/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=3",
            type: "get",
            dataType: "jsonp",
            success: function init(data) {
                var duotURL = "";
                var miss_badge = "<ul>";
                var i = 0;
                for (; i < data.feed.entry.length; i++) {
                    var j = 0;
                    for (; j < data.feed.entry[i].link.length; j++) {
                        if ("alternate" == data.feed.entry[i].link[j].rel) {
                            duotURL = data.feed.entry[i].link[j].href;
                            break;
                        }
                    }
                    var video1title = data.feed.entry[i].title.$t;
                    var term = data.feed.entry[i].category[0].term;
                    var id = data.feed.entry[i].content.$t;
                    var from_folder = $("<div>").html(id);
                    if (id.indexOf("//www.youtube.com/embed/") > -1) {
                        var height = data.feed.entry[i].media$thumbnail.url;
                        var whatToScale = height;
                    } else {
                        if (id.indexOf("<img") > -1) {
                            var width = from_folder.find("img:first").attr("src");
                            whatToScale = width;
                        } else {
                            whatToScale = no_image;
                        }
                    }
                    miss_badge = miss_badge + ('<li><div class="rmg"><a href="' + duotURL + '"><img alt="' + video1title + '" src="' + whatToScale + '" title="' + video1title + '"/></a></div><div class="recent-tag"><a class="icon ' + term + '" href="/search/label/' + term + '" title="' + term + '"></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + duotURL + '" title="' + video1title + '">' + video1title + '</a></h3></div><div class="clr"/></li>');
                }
                miss_badge = miss_badge + "</ul>";
                $(".recent-goom .HTML .widget-content").each(function () {
                    var stripTerrain = $(this).parent().attr("id");
                    if (stripTerrain == river) {
                        $(this).html(miss_badge);
                        $(this).parent().addClass("recent");
                        $(this).find(".rmg").each(function () {
                            $(this).attr("style", function (canCreateDiscussions, originalBaseURL) {
                                return originalBaseURL.replace("/default.jpg", "/mqdefault.jpg");
                            }).attr("style", function (canCreateDiscussions, originalBaseURL) {
                                return originalBaseURL.replace("s72-c", "s1600");
                            });
                        });
                    }
                });
            }
        });
    }
}), $("#related-posts").each(function () {
    var _0xc2f3x2 = $(this).text();
    $.ajax({
        url: "/feeds/posts/default/-/" + _0xc2f3x2 + "?alt=json-in-script&max-results=3",
        type: "get",
        dataType: "jsonp",
        success: function callback(data) {
            var duotURL = "";
            var miss_badge = '<div class="related-wrap">';
            var i = 0;
            for (; i < data.feed.entry.length; i++) {
                var j = 0;
                for (; j < data.feed.entry[i].link.length; j++) {
                    if ("alternate" == data.feed.entry[i].link[j].rel) {
                        duotURL = data.feed.entry[i].link[j].href;
                        break;
                    }
                }
                var video1title = data.feed.entry[i].title.$t;
                var level = (data.feed.entry[i].category[0].term, data.feed.entry[i].author[0].name.$t, data.feed.entry[i].content.$t);
                var container = $("<div>").html(level);
                if (level.indexOf("//www.youtube.com/embed/") > -1) {
                    var currentRelations = data.feed.entry[i].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
                    var interestingPoint = currentRelations;
                } else {
                    if (level.indexOf("<img") > -1) {
                        var viewportCenter = container.find("img:first").attr("src").replace("s72-c", "s1600");
                        interestingPoint = viewportCenter;
                    } else {
                        interestingPoint = no_image;
                    }
                }
                miss_badge = miss_badge + ('<li><div class="related-img"><a href="' + duotURL + '"><img alt="' + video1title + '" src="' + interestingPoint + '" title="' + video1title + '"/></a></div><div class="related-content"><h3 class="related-title"><a href="' + duotURL + '" title="' + video1title + '">' + video1title + "</a></h3></div></li>");
            }
            miss_badge = miss_badge + '</div><div class="clr"/>';
            $("#related-posts").html(miss_badge);
            $(this).find(".related-img").each(function () {
                $(this).attr("style", function (canCreateDiscussions, originalBaseURL) {
                    return originalBaseURL.replace("/default.jpg", "/mqdefault.jpg");
                }).attr("style", function (canCreateDiscussions, originalBaseURL) {
                    return originalBaseURL.replace("s72-c", "s1600");
                });
            });
        }
    });
});

function kirimWA(picSize) {
    var _0xc2f3x5 = true;
    if (jQuery("#" + picSize + " .wajib").each(function () {
            if (!("" != $.trim(jQuery(this).val()) && "default" != $.trim(jQuery(this).val()))) {
                jQuery(this).addClass("focus");
            }
        }), jQuery("#" + picSize + " .wajib").each(function () {
            return "" == $.trim(jQuery(this).val()) ? (_0xc2f3x5 = false, jQuery(this).parents("label").find(".validasi").addClass("show"), jQuery(this).focus(), false) : "default" == $.trim(jQuery(this).val()) ? (_0xc2f3x5 = false, jQuery(this).parents("label").find(".validasi").addClass("show"), false) : void 0;
        }), _0xc2f3x5 === true) {
        var itemDataUrl = "";
        var groupNamePrefix = "https://web.whatsapp.com/send";
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (groupNamePrefix = "whatsapp://send"), "konsultasi" === picSize) {
            var sitesowners = 91;
            var siteName = 9414157486;
            var self = "Admin";
            var givenName = "Hello";
            var data = (jQuery("#" + picSize + " .title-content").text(), jQuery("#" + picSize + " .pesan").val());
            itemDataUrl = groupNamePrefix + "?phone=" + sitesowners + siteName + "&text=*" + givenName + " " + self + "...* %0A%0A" + data;
        }
        jQuery(this).attr("href", itemDataUrl);
        var _0xc2f3x12 = 960;
        var _0xc2f3x10 = 540;
        var y = Number(screen.width / 2 - _0xc2f3x12 / 2);
        var enc_length = Number(screen.height / 2 - _0xc2f3x10 / 2);
        var url = window.open(this.href, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" + _0xc2f3x12 + ", height=" + _0xc2f3x10 + ", top=" + enc_length + ", left=" + y);
        return url.focus(), false;
    }
}
window.addEventListener("load", function () {
    var geoJSON_str = jQuery("title").text();
    jQuery(".waFix").on("click", function () {
        jQuery(this).removeClass("show");
        jQuery("title").text(geoJSON_str);
    });
    jQuery(".formWA input, .formWA textarea").on("keypress", function () {
        if (13 === event.keyCode) {
            jQuery(this).parents(".formWA").find(".submit").trigger("click");
        }
    });
    jQuery(".formWA .wajib").each(function () {
        title = jQuery(this).attr("placeholder");
        label = jQuery(this).parents("label");
        jQuery('<span class="validasi">(Required)</span>').appendTo(label);
    });
    jQuery(".formWA .wajib").keyup(function () {
        if ("" != jQuery(this).val()) {
            jQuery(this).removeClass("focus");
            jQuery(this).parents("label").find(".validasi").removeClass("show");
        }
    });
    jQuery(".formWA select").change(function () {
        jQuery(this).removeClass("focus");
        jQuery(this).parents("label").find(".validasi").removeClass("show");
    });
}, false), jQuery(".formWA .submit").on("click", function () {
    return kirimWA(jQuery(this).parents(".poptamv").attr("id")), false;
}), $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
}), $(document).on("click", ".nabil-live", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
});
var lazyadsense = false;
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop != 0 && lazyadsense === false || document.body.scrollTop != 0 && lazyadsense === false) {
        (function () {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            var wafCss = document.getElementsByTagName("script")[0];
            wafCss.parentNode.insertBefore(script, wafCss);
        })();
        lazyadsense = true;
    }
}, true);
(function ($) {
    $.fn.lazyload = function (option) {
        var settings = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window
        };
        if (option) {
            $.extend(settings, option);
        }
        var data = this;
        if ("scroll" == settings.event) {
            $(settings.container).bind("scroll", function (b) {
                var counter = 0;
                data.each(function () {
                    if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {} else {
                        if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
                            $(this).trigger("appear");
                        } else {
                            if (counter++ > settings.failurelimit) {
                                return false;
                            }
                        }
                    }
                });
                var blockXml = $.grep(data, function (testacular) {
                    return !testacular.loaded;
                });
                data = $(blockXml);
            });
        }
        this.each(function () {
            var element = this;
            if (undefined == $(element).attr("original")) {
                $(element).attr("original", $(element).attr("src"));
            }
            if ("scroll" != settings.event || undefined == $(element).attr("src") || settings.placeholder == $(element).attr("src") || $.abovethetop(element, settings) || $.leftofbegin(element, settings) || $.belowthefold(element, settings) || $.rightoffold(element, settings)) {
                if (settings.placeholder) {
                    $(element).attr("src", settings.placeholder);
                } else {
                    $(element).removeAttr("src");
                }
                element.loaded = false;
            } else {
                element.loaded = true;
            }
            $(element).one("appear", function () {
                if (!this.loaded) {
                    $("<img/>").bind("load", function () {
                        $(element).hide().attr("src", $(element).attr("original"))[settings.effect](settings.effectspeed);
                        element.loaded = true;
                    }).attr("src", $(element).attr("original"));
                }
            });
            if ("scroll" != settings.event) {
                $(element).bind(settings.event, function (canCreateDiscussions) {
                    if (!element.loaded) {
                        $(element).trigger("appear");
                    }
                });
            }
        });
        $(settings.container).trigger(settings.event);
        return this;
    };
    $.belowthefold = function (element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var d = $(window).height() + $(window).scrollTop();
        } else {
            d = $(settings.container).offset().top + $(settings.container).height();
        }
        return d <= $(element).offset().top - settings.threshold;
    };
    $.rightoffold = function (element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var d = $(window).width() + $(window).scrollLeft();
        } else {
            d = $(settings.container).offset().left + $(settings.container).width();
        }
        return d <= $(element).offset().left - settings.threshold;
    };
    $.abovethetop = function (element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var navWrapperStartPos = $(window).scrollTop();
        } else {
            navWrapperStartPos = $(settings.container).offset().top;
        }
        return navWrapperStartPos >= $(element).offset().top + settings.threshold + $(element).height();
    };
    $.leftofbegin = function (element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var currentTickPosition = $(window).scrollLeft();
        } else {
            currentTickPosition = $(settings.container).offset().left;
        }
        return currentTickPosition >= $(element).offset().left + settings.threshold + $(element).width();
    };
    $.extend($.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    });
})(jQuery);
$(function () {
    $("img").lazyload({
        placeholder: "https://1.bp.blogspot.com/-Q4QqdyWtLSI/XghECAoZUoI/AAAAAAAABs0/NFJsaHuy-PU6HIeIf960bwvdpEAXEJTZACLcBGAsYHQ/s1600/goom.gif",
        effect: "fadeIn",
        threshold: "-50"
    });
});
