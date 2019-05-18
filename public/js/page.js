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
    },{
        article: '内衣类--内裤(女)',
        clo: 0.03
    }, {
        article: '内衣类--胸罩',
        clo: 0.01
    }, {
        article: '内衣类--T恤',
        clo: 0.08
    }, {
        article: '内衣类--长衬裙',
        clo: 0.16
    }, {
        article: '内衣类--短衬裙',
        clo: 0.14
    }, {
        article: '内衣类--秋衣',
        clo: 0.2
    }, {
        article: '内衣类--秋裤',
        clo: 0.15
    }, {
        article: '鞋袜类--踝袜(短袜)',
        clo: 0.02
    }, {
        article: '鞋袜类--小腿袜(中袜)',
        clo: 0.03
    }, {
        article: '鞋袜类--厚膝袜(厚长袜)',
        clo: 0.06
    }, {
        article: '鞋袜类--丝袜裤(女)',
        clo: 0.02
    }, {
        article: '鞋袜类--人字拖',
        clo: 0.02
    }, {
        article: '鞋袜类--普通拖鞋',
        clo: 0.03
    }, {
        article: '鞋袜类--皮靴',
        clo: 0.1
    }, {
        article: '衬衣类--无袖圆领衬衫(女)',
        clo: 0.12
    }, {
        article: '衬衣类--短袖衬衫(正装)',
        clo: 0.19
    }, {
        article: '衬衣类--长袖衬衫(正装)',
        clo: 0.25
    }, {
        article: '衬衣类--长袖绒衫',
        clo: 0.34
    }, {
        article: '衬衣类--短袖针织衫',
        clo: 0.17
    }, {
        article: '衬衣类--长袖运动衫',
        clo: 0.34
    }, {
        article: '裤子类--短裤',
        clo: 0.06
    }, {
        article: '裤子类--休闲短裤',
        clo: 0.08
    }, {
        article: '裤子类--直筒长裤(薄)',
        clo: 0.15
    }, {
        article: '裤子类--直筒长裤(厚)',
        clo: 0.24
    }, {
        article: '裤子类--运动裤',
        clo: 0.28
    }, {
        article: '裤子类--挂肩工装裤',
        clo: 0.30
    }, {
        article: '裤子类--连衣工装裤',
        clo: 0.49
    }, {
        article: '西服类--单排扣上衣(薄)',
        clo: 0.36
    }, {
        article: '西服类--单排扣上衣(厚)',
        clo: 0.44
    }, {
        article: '西服类--双排扣上衣(薄)',
        clo: 0.42
    }, {
        article: '西服类--双排扣上衣(厚)',
        clo: 0.48
    }, {
        article: '西服类--马甲/背心(薄)',
        clo: 0.1
    }, {
        article: '西服类--马甲/背心(厚)',
        clo: 0.17
    }, {
        article: '毛衣类--马甲/背心(薄)',
        clo: 0.13
    }, {
        article: '毛衣类--马甲/背心(厚)',
        clo: 0.22
    }, {
        article: '毛衣类--长袖毛衣(薄)',
        clo: 0.25
    }, {
        article: '毛衣类--长袖毛衣(厚)',
        clo: 0.36
    }, {
        article: '裙子类--长裙(薄)',
        clo: 0.14
    }, {
        article: '裙子类--长裙(厚)',
        clo: 0.23
    }, {
        article: '裙子类--长袖连衣裙(薄)',
        clo: 0.33
    }, {
        article: '裙子类--长袖连衣裙(厚)',
        clo: 0.47
    }, {
        article: '裙子类--短袖连衣裙(薄)',
        clo: 0.29
    }, {
        article: '裙子类--无袖圆连衣裙(薄)',
        clo: 0.23
    }, {
        article: '裙子类--无袖圆连衣裙(厚)',
        clo: 0.27
    }, {
        article: '睡衣类--无袖短睡裙(薄,女)',
        clo: 0.18
    }, {
        article: '睡衣类--无袖长睡裙(薄,女)',
        clo: 0.2
    }, {
        article: '睡衣类--短袖长睡裙(薄,女)',
        clo: 0.31
    }, {
        article: '睡衣类--长袖长睡裙(厚,女)',
        clo: 0.46
    }, {
        article: '睡衣类--长袖睡衣(厚)',
        clo: 0.57
    }, {
        article: '睡衣类--短袖睡衣(薄)',
        clo: 0.42
    }, {
        article: '睡衣类--长袖长袍(厚)',
        clo: 0.69
    }, {
        article: '睡衣类--长袖短袍(厚)',
        clo: 0.48
    }, {
        article: '睡衣类--短袖短袍(薄)',
        clo: 0.34
    }, {
        article: '坐椅类--金属椅',
        clo: 0.00
    }, {
        article: '坐椅类--木板凳',
        clo: 0.01
    }, {
        article: '坐椅类--普通办公椅',
        clo: 0.10
    }, {
        article: '坐椅类--沙发椅',
        clo: 0.15
    }];
    var cloEnsembles = [{
        clothing: '夏季室内典型着装: 0.5',
        clo: 0.5
    }, {
        clothing: '冬季室内典型着装: 1.0',
        clo: 1.0
    }, {
        clothing: '薄裤+短袖衬衫+袜+鞋+内裤: 0.57',
        clo: 0.57
    }, {
        clothing: '薄裤+长袖衬衫+袜+鞋+内裤: 0.61',
        clo: 0.61
    }, {
        clothing: '薄裤+长袖衬衫+西服上衣+袜+鞋+内裤: 0.96',
        clo: 0.96
    }, {
        clothing: '短裙+短袖衬衫+拖鞋+内裤: 0.54',
        clo: 0.54
    }, {
        clothing: '短裙+长袖衬衫+拖鞋+长衬裙+内裤: 0.67',
        clo: 0.67
    }, {
        clothing: '休闲短裤+短袖衬衫+拖鞋+内裤: 0.36',
        clo: 0.36
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
    }, {
        activity: '开轿车: 1.5',
        met: 1.5
    }, {
        activity: '开民航飞机: 1.2',
        met: 1.2
    }, {
        activity: '开战斗机: 2.4',
        met: 2.4
    }, {
        activity: '开大型汽车: 3.2',
        met: 3.2
    }, {
        activity: '做饭: 1.8',
        met: 1.8
    }, {
        activity: '打扫卫生: 2.7',
        met: 2.7
    }, {
        activity: '坐着做重型肢体运动: 2.2',
        met: 2.2
    }, {
        activity: '锯工: 1.8',
        met: 1.8
    }, {
        activity: '轻型器械工作: 2.2',
        met: 2.2
    }, {
        activity: '重型器械工作: 4.0',
        met: 4.0
    }, {
        activity: '举起45kg的物体: 4.0',
        met: 4.0
    }, {
        activity: '体力挖掘工作: 4.4',
        met: 4.4
    }, {
        activity: '跳舞: 3.4',
        met: 3.4
    }, {
        activity: '做健美操/体操: 3.5',
        met: 3.5
    }, {
        activity: '打网球: 3.8',
        met: 3.8
    }, {
        activity: '打篮球: 6.3',
        met: 6.3
    }, {
        activity: '摔跤: 7.8',
        met: 7.8
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
	
	
    $('#relative-humidity .input').button().click(function(d){

        let humidity = $(d.target).val()

        $('#rh').val(humidity)

        update();

    })
	
	$('#customClo').button({
        icons: {
            primary: 'ui-icon-person'
        }
    }).click(function() {
        $('#customCloToggle').toggle('fast');
        if ($('#leedInterface').is(':checked')) {
            $('#leedInterfaceToggle').toggle('fast');
            $('#leedInterface').removeAttr('checked');
            $('#leedInterface').button('refresh');
            $('#unitsToggle').removeAttr('disabled');
        }
    });

    $('#dynamicClo').button({
       
    }).click(function() {
        $('#dynamicCloToggle').toggle('fast');
    });

    $('#link').click(function() {
        $('#tr').val($('#ta').val());
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

    $('#addCloth').click(function(d){

        let clothName = $('#cloth').val()
        let clo = parseFloat($('#clo').val())

        if(clothName != '' && clothName != undefined){

            if (!clo.isNaN){

               // alert('添加服装<'+ clothName +'>成功')

                $.ajax({
                    type: "POST",
                    url: './addCloth',
                    data: JSON.stringify({'name':clothName,'warm':clo}),
                    success: d=>{alert('添加服装<'+ clothName +'>成功')},
                    contentType: 'application/json'
                  });

            }
        }  
    });

    $('#addPosture').click(function(d){

        let postureName = $('#postureName').val()
        let met = parseFloat($('#met').val())

        if(postureName != '' && postureName != undefined){

            if (!met.isNaN){

               // alert('添加服装<'+ postureName +'>成功')

                $.ajax({
                    type: "POST",
                    url: './addPosture',
                    data: JSON.stringify({'name':postureName,'met':met}),
                    success: d=>{alert('添加姿态<'+ postureName +'>成功')},
                    contentType: 'application/json'
                  });

            }
        }  
    });


});


$('#link').click(function() {
    $('#tr').val($('#ta').val());
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
