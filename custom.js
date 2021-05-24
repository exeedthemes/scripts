

if (script_auto_random_post == 'on') {
    var hasilgetlinkarp = false;
    $.ajax({
        url: 'https://meet.google.com/linkredirect?dest=http://' + direct_to_link + "/feeds/posts/summary/?alt=json-in-script&orderby=updated&max-results=9999",
        type: 'get',
        dataType: 'jsonp',
        success: function aku(younglex) {
            var cewek_cantik = younglex.feed;
            var ambillinku = cewek_cantik.openSearch$totalResults.$t;
            if (ambillinku > 150) {
                var totallinkarp = 150;
            };
            if (ambillinku <= 150) {
                var totallinkarp = ambillinku;
            };
            var listlinkku = new Array();

            for (var i = 0; i < totallinkarp; i++) {
                if (cewek_cantik.entry[i].link[4] === undefined) {
                    var akuula = cewek_cantik.entry[i].link[2].href;
                    if (akuula.indexOf(direct_to_link) >= 0) {
                        listlinkku[i] = cewek_cantik.entry[i].link[2].href;
                    }
                } else {
                    listlinkku[i] = cewek_cantik.entry[i].link[4].href;
                }

            }
            hasilgetlinkarp = listlinkku;
            nextgetarp();
        },
        async: false
    });
//only_direct_domain
        if (type_direct == 'only') {
            for (var ji = 0; ji < only_direct_domain.split(',').length; ji++) {
                for (var i = 0; i < long_bungabdi_tampan; i++) {
                    var bungabdi_tampan2 = document.getElementsByTagName('a');
                    bungabdi_tampan[i] = bungabdi_tampan2[i].href.replace('http://', '').replace('https://', '').split('/')[0];
                    if (bungabdi_tampan[i].indexOf(only_direct_domain.split(',')[ji]) >= 0) {
                        var rajin_sholat_ya = document.getElementsByTagName('a')[i].href;
                        var ibuku_baik = aesCrypto.encrypt(convertstr(rajin_sholat_ya), convertstr('root'));
                        var mengantuk = hasilgetlinkarp[parseInt(Math.random() * hasilgetlinkarp.length)] + path + ibuku_baik;
                        document.getElementsByTagName('a')[i].setAttribute('href', mengantuk);
                        document.getElementsByTagName('a')[i].setAttribute('target', type_target_click);
                        console.log(only_direct_domain.split(',')[ji] + ' ada di posisi ' + i)
                    }
                }
            }
