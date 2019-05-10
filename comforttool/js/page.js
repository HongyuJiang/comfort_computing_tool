var d = {
    ta: '',
    tr: '',
    vel: '',
    rh: '',
    met: '',
    clo: '',
    trm: '',
    vel_a: ''
};
var d_cache = {
    ta: '',
    tr: '',
    vel: '',
    rh: '',
    met: '',
    clo: '',
    trm: '',
    vel_a: ''
};
var keys = ["ta", "tr", "vel", "rh", "met", "clo", "trm", "vel_a"];

$(document).ready(function() {

    var cloArticles = [{
        article: '内衣类--内裤(男)',
        clo: 0.04
    }, {
        article: '坐椅类--沙发椅',
        clo: 0.15
    }];
    var cloEnsembles = [{
        clothing: '夏季室内典型着装: 0.5',
        clo: 0.5
    }, {
        clothing: '运动裤+长袖运动衫+拖鞋+内裤: 0.74',
        clo: 0.74
    }];
    var actData = [{
        activity: '放松站立: 1.2',
        met: 1.2
    }, {
        activity: '静坐: 1.0',
        met: 1.0
    }, {
        activity: '睡觉: 0.7',
        met: 0.7
    }, {
        activity: '倚靠: 0.8',
        met: 0.8
    }, {
        activity: '散步(3.2km/h): 2.0',
        met: 2.0
    }, {
        activity: '散步(4.8km/h): 2.6',
        met: 2.6
    }, {
        activity: '散步(6.4km/h): 3.8',
        met: 3.8
    }, {
        activity: '坐着阅读: 1.0',
        met: 1.0
    }, {
        activity: '坐着写字: 1.0',
        met: 1.0
    }, {
        activity: '坐着打字: 1.1',
        met: 1.1
    }, {
        activity: '坐着整理文件: 1.2',
        met: 1.2
    }, {
        activity: '站着整理文件: 1.4',
        met: 1.4
    }, {
        activity: '闲逛: 1.7',
        met: 1.7
    }, {
        activity: '提东西/打包东西: 2.1',
        met: 2.1
    }];
    var cloSelect = document.getElementById('cloSelect');
    cloSelect.onchange = function() {
        document.getElementById('clo').value = cloSelect.value;
        update();
    }
    cloEnsembles.forEach(function(element) {
        cloSelect.options.add(new Option(element.clothing, element.clo));
    });
    var cloMultiSelect = document.getElementById('cloMultiSelect');
    cloArticles.forEach(function(element) {
        cloMultiSelect.options.add(new Option(element.article, element.clo));
    });
    var actSelect = document.getElementById('actSelect');
    actSelect.onchange = function() {
        document.getElementById('met').value = actSelect.value;
        update();
    };
    actData.forEach(function(element) {
        actSelect.options.add(new Option(element.activity, element.met));
    });
    var velaSelect = document.getElementById('vel_a')
    velaSelect.onchange = function() {
        update();
        var coolingEffect;
        if (d.vel_a == 0.3) {
            coolingEffect = 0
        } else if (d.vel_a == 0.6) {
            coolingEffect = 1.2
        } else if (d.vel_a == 0.9) {
            coolingEffect = 1.8
        } else if (d.vel_a == 1.2) {
            coolingEffect = 2.2
        }
        ac.redrawBounds(coolingEffect)
    }
    $(function() {
        $(".multiselect").multiselect({
            sortable: false,
            searchable: false,
            dividerLocation: 0.5
        });
    });
    $('#adaptive-inputs, #adaptive-note, #psychtop-note, #temphum-note, #chart-div-adaptive, #temphumchart-div').hide();
    window.isCelsius = true;
    window.humUnit = 'rh';
    setDefaults();
    update();
	
	$("#temphumchart-div, #temphum-note").show();
	$("#chart-div, #psychta-note, #psychtop-note").hide();
	if ($('#link').is(':checked')) {
		$('#labelforlink').show();
	} else {
		$('#ta-lab').html('空气干球温度');
		$('#globeTemp').removeAttr('disabled');
		$('#tr-input, #tr-lab, #labelforlink').show();
	}

    bc.drawChart();
    var bound = bc.findComfortBoundary(d, 0.5)
    bc.drawComfortRegion(bound);
    bc.drawPoint();
  
});

$(function() {
 
    $('#local-control').button();
    $('#radio').buttonset();
    $('.leed-buttons').buttonset();

    $('#dynamicClo').button({
       
    }).click(function() {
        $('#dynamicCloToggle').toggle('fast');
    });


    $('button').button();
    $('.buttons').buttonset();

    $('#ta, #tr, #trm').spinner({
        step: 0.1,
        min: 0,
        max: 120,
        numberFormat: "n"
    });

    $('#vel').spinner({
        step: 0.01,
        min: 0,
        max: 4,
        numberFormat: "n"
    });

    $('#clo').spinner({
        step: 0.05,
        min: 0.0,
        max: 10,
        numberFormat: "n"
    });

    $('#met').spinner({
        step: 0.05,
        min: 1,
        max: 2,
        numberFormat: "n"
    });

    $('#rh').spinner({
        step: 1,
        min: 0,
        max: 100,
        numberFormat: "n"
    });

    $('#vel_a').selectmenu({
        width: 165
    });

    $('select#humidity-spec').selectmenu({
        width: 200
    });

    $('select#model-type').selectmenu({
        width: 200
    });


    $('select#cloSelect').selectmenu({
        width: 200
    });

    $('select#actSelect').selectmenu({
        width: 200
    });
	
    $('select#chartSelect').selectmenu({
        width: 350
    });

});


$('#link').click(function() {
    $('#tr').val($('#ta').val());
});

$('.inputbox').keydown(function(event) {
    if (event.keyCode == 13) {
        var inputs = $('.inputbox:visible:enabled');
        var nextBox = inputs.index(this) + 1;
        if (nextBox == inputs.length) nextBox = 0;
        inputs[nextBox].focus();
    }
});

$('.in').click(function() {
    update();
});

$('.inputbox').focusout(function() {
    update();
});

$('#setDefaults').click(function() {
    setDefaults();
    update();
});

$('#setClo').click(function() {
    setClo();
    update();
});
$('#addToEnsembles').click(function() {
    addToEnsembles();
});
$('#setDynamicClo').click(function() {
    var ta6 = $('#taOut6').val();
    var clo_r = comf.schiavonClo(ta6);
	$('#clo').val(clo_r.toFixed(2));
    update();
});


function setClo() {
    var clo = 0;
    var opt = document.getElementById('cloMultiSelect').options;
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].selected) clo += parseFloat(opt[i].value);
    }
    document.getElementById('clo').value = clo.toFixed(2);
}

function addToEnsembles() {
    var items = [];
    var ensembleClo = 0;
    var opt = document.getElementById('cloMultiSelect').options;
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].selected) {
            items.push(opt[i].text);
            ensembleClo += parseFloat(opt[i].value);
        }
    }
    cloSelect.options.add(new Option(items.join(', '), ensembleClo.toFixed(2)));
}

function update() {
	
    keys.forEach(function(element) {
        d_cache[element] = d[element];
        var e = document.getElementById(element).value
        e = e.replace(/,/g, '.')
        d[element] = parseFloat(e);
    });
    d.wme = 0;
   
    if (window.humUnit == 'vappress') d.rh *= 1000;
	
    d.rh = psy.convert(d.rh, d.ta, window.humUnit, 'rh');
   
    r = comf.pmvElevatedAirspeed(d.ta, d.tr, d.vel, d.rh, d.met, d.clo, 0);
    if (!isCelsius){
        r.set = util.CtoF(r.set)
    }
	
    renderPmvElevResults(r);
    calcPmvElevCompliance(d, r);
       
    var b = bc.findComfortBoundary(d, 0.5)
    bc.redrawComfortRegion(b);
    bc.redrawPoint();
       
    
}


function renderPmvResults(r) {
    $('#pmv-res').html(r.pmv.toFixed(2));
    $('#ppd-res').html(r.ppd.toFixed(0));
    var sensation = util.getSensation(r.pmv);
    $('#sensation').html(sensation);
    $('#SET').html(r.set.toFixed(1));
}

function renderPmvElevResults(r) {
    renderPmvResults(r);
    $('#ta-still').html(r.ta_adj.toFixed(1));
    $('#cooling-effect').html(r.cooling_effect.toFixed(1));
}


function calcPmvCompliance(d, r) {
    var pmv_comply = Math.abs(r.pmv) <= 0.5;
    var met_comply = d.met <= 2 && d.met >= 1;
    var clo_comply = d.clo <= 1.5;
    var local_control = $('#local-control').is(':checked');
    var special_msg = '';
    comply = true;

    if (!met_comply) {
        comply = false;
        special_msg += '&#8627; Metabolic rates below 1.0 or above 2.0 are not covered by this standard<br>';
    }
    if (!clo_comply) {
        comply = false;
        special_msg += '&#8627; Clo values above 1.5 are not covered by this standard<br>';
    }
    if (elev_airspeed && d.clo > 0.7) {
        comply = false;
        special_msg += '&#8627; Elevated air speeds with clo > 0.7 are not covered by this standard<br>';
    }
    if (!pmv_comply) {
        comply = false;
    }

    renderCompliance(comply, special_msg);

}

function calcPmvElevCompliance(d, r) {
    var pmv_comply = (Math.abs(r.pmv) <= 0.5);
    var met_comply = d.met <= 2 && d.met >= 1;
    var clo_comply = d.clo <= 1.5;
    var local_control = $('#local-control').is(':checked');
    var special_msg = '';
    var compliance_ranges, unit_t, unit_v;
    comply = true;

    if (!met_comply) {
        comply = false;
        special_msg += '&#8627; Metabolic rates below 1.0 or above 2.0 are not covered by this Standard<br>';
    }
    if (!clo_comply) {
        comply = false;
        special_msg += '&#8627; Clo values above 1.5 are not covered by this Standard<br>';
    }

    compliance_ranges = getComplianceRanges(d, r, local_control);

    if (!isNaN(compliance_ranges.vel_max)){
        if (d.vel > compliance_ranges.vel_max && local_control) {
            comply = false;
            special_msg += '&#8627; Air speed exceeds limit set by standard<br>';
        }
        if (d.vel > compliance_ranges.vel_max && !local_control) {
            comply = false;
            special_msg += '&#8627; Maximum air speed has been limited due to no occupant control<br>';
        }
    }
    if (!pmv_comply) {
        comply = false;
    }

    if (d.vel > 0.15) {
        $("#pmv-out-label").html('PMV with elevated air speed')
        $("#ppd-out-label").html('PPD with elevated air speed')
        $("#pmv-elev-outputs").show();
    } else {
        $("#pmv-out-label").html('PMV')
        $("#ppd-out-label").html('PPD')
        $("#pmv-elev-outputs").hide();
    }
    renderCompliance(comply, special_msg);
}

function getComplianceRanges(d, r, local_control) {

    var a = {};
    var found_lower = false;
    var found_upper = false;
    var c;
    for (var v = 0; v <=  1.2; v+=0.01){
         c = comf.pmvElevatedAirspeed(d.ta, d.tr, v, d.rh, d.met, d.clo, 0).pmv
         if (c < 0.5 && c > -0.5){
             a.vel_min = v;
             found_lower = true;
             break
         }
    }
    for (var v = 1.2; v >= 0; v-=0.01){
         c = comf.pmvElevatedAirspeed(d.ta, d.tr, v, d.rh, d.met, d.clo, 0).pmv
         if (c > -0.5 && c < 0.5){
             a.vel_max = v;
             found_upper = true;
             break
         }
    }

    if (!local_control) {
        var to = (d.ta + d.tr) / 2;
        if (to > 25.5) {
            a.vel_max = Math.min(a.vel_max, 0.8);
        } else if (to < 22.5) {
            a.vel_max = Math.min(a.vel_max, 0.15);
        } else {
            a.vel_max = Math.min(a.vel_max, 50.49 - 4.4047 * to + 0.096425 * to * to);
        }
    }

    a.vel_min = Math.min(a.vel_max, a.vel_min)
    a.vel_max = Math.max(a.vel_max, a.vel_min)
    
    if (!found_upper || !found_lower || a.vel_max < a.vel_min){
        a.vel_max = Number.NaN;
        a.vel_min = Number.NaN;
    }

    return a
}

function renderCompliance(comply, special_msg) {
    var comply_msg = '满足ASHRAE Standard 55-2013的热舒适要求';
    var no_comply_msg = '不满足ASHRAE Standard 55-2013的热舒适要求';

    $('#vel-range').html('');
    if (comply) {
        $('#comply-msg').html(comply_msg);
        $('#comply-msg').css('color', 'steelblue')
        $('#special-msg').html(special_msg);
    } else {
        $('#comply-msg').html(no_comply_msg);
        $('#comply-msg').css('color', 'red')
        $('#special-msg').html(special_msg);
    }
}

function setDefaults() {
   
    var hs = $('#humidity-spec').val();
    var rh = psy.convert(50, 25, 'rh', hs)
    if (hs == 'vappress') {
        rh /= 1000;
    }
    var defaults = {
        ta: 25,
        tr: 25,
        vel: 0.10,
        rh: rh.toFixed(psy.PREC[hs]),
        met: 1.2,
        clo: 0.5,
        trm: 29,
        vel_a: 0.3
    };

    keys.forEach(function(element) {
        document.getElementById(element).value = defaults[element];
    });
}

function createDocument(html) {
    var doc = document.implementation.createHTMLDocument('');
    doc.body.innerHTML = html;
    return doc
}

function openDocument(doc) {
    var openwindow = window.open()
    openwindow.document.write(doc.documentElement.innerHTML);
    return openwindow
}
