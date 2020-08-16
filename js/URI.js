function goToURLres() {
    var sr = $('#stateRes').val();
    $('#stateRes').val(sr);

    var cr = $('#cityRes').val();
    $('#cityRes').val(cr);

    var br = $('#budRes').val();
    $('#budRes').val(br);

    var ar = $('#adultRes').val();
    $('#adultRes').val(ar);

    var chr = $('#childRes').val();
    $('#childRes').val(chr);

    var pr = $('#purposeRes').val();
    $('#purposeRes').val(pr);

    var QString = "?city=" + cr + "&state=" + sr + "&budget=" + br + "&numberofadults=" + ar+"&numberofchildren="+chr+"&purpose="+pr;
    window.location = "matchpage.html" + QString;
}

function goToURLcom() {

    var sc = $('#stateCom').val();
    $('#stateCom').val(sc);

    var cc = $('#cityCom').val();
    $('#cityCom').val(cc);

    var bc = $('#budCom').val();
    $('#budCom').val(bc);

    var nc = $('#roomCom').val();
    $('#roomCom').val(nc);

    var pc = $('#purposeCom').val();
    $('#purposeCom').val(pc);

    var QString = "?city=" + cc + "&state=" + sc + "&budget=" + bc + "&numberofrooms=" + nc+"&purpose="+pc;
    window.location = "commercialpropertymatch.html" + QString;
}
function goToURLland() {

    var sl = $('#stateLand').val();
    $('#stateLand').val(sl);

    var cl = $('#cityLand').val();
    $('#cityLand').val(cl);

    var bl = $('#budLand').val();
    $('#budLand').val(bl);

    var al = $('#areaLand').val();
    $('#areaLand').val(al);

    var pl = $('#purposeLand').val();
    $('#purposeLand').val(pl);

    var QString = "?city=" + cl + "&state=" + sl + "&budget=" + bl + "&areaLand=" + al+"&purpose="+pl;
    window.location = "landpropertymatch.html" + QString;
}


var state_arr = new Array("Lagos", "Abuja");
// States
var s_a = new Array();
s_a[0] = "";
s_a[1] = "Alimosho|Ajeromi-Ifelodun|Kosofe|Mushin|Oshodi-Isolo|Ojo|Ikorodu|Surulere|Ifako-Ijaiye|Somolu|Amuwo-Odofin|Lagos Mainland|Ikeja|Eti-Osa|Badagry|Apapa|Lagos Island|Epe|Ibeju-Lekki";
s_a[2] = "Asokoro|Bamburu|Mararaba|Gwarinpa|Wuse|Maitama|Abuja Airport|Garki|Karu|Kubwa|Kurunduma|Jikwoyi|Masaka|Eketahuna|New Nyanya|Karshi|Yoba|Zuba";


function populateCity(stateElementId, cityElementId) {

    var selectedStateIndex = document.getElementById(stateElementId).selectedIndex;

    var cityElement = document.getElementById(cityElementId);

    cityElement.length = 0; // Fixed by Julian Woods
    cityElement.options[0] = new Option('Select City', '');
    cityElement.selectedIndex = 0;

    var state_arr = s_a[selectedStateIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        cityElement.options[cityElement.length] = new
        Option(state_arr[i], state_arr[i]);
    }
}

function populateStates(stateElementId, cityElementId) {
    // given the id of the <select> tag as function argument, it inserts
    //<option> tags
    var stateElement = document.getElementById(stateElementId);
    stateElement.length = 0;
    stateElement.options[0] = new Option('Select State', '-1');
    stateElement.selectedIndex = 0;
    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (cityElementId) {
        stateElement.onchange = function() {
            populateCity(stateElementId, cityElementId);
        };
    }
}
populateStates("stateRes", "cityRes"); // first parameter is id of country
populateStates("stateCom", "cityCom"); // first parameter is id of country
populateStates("stateLand", "cityLand"); // first parameter is id of country

