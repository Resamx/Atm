let bakiye = 50;
let nakitpara = 20;

document.getElementById("paramiktar").innerHTML = "<b>" + bakiye + "</b>";
document.getElementById("paranakit").innerHTML = "<b>" + nakitpara + "</b>";

let parayatırbtn = document.querySelector("#parayatır");
parayatırbtn.onclick = function () {
    let yatirmiktar = Number(prompt("Yatirmak istediğiniz miktar"));
    if (yatirmiktar <= nakitpara) {
        nakitpara = nakitpara - yatirmiktar
        bakiye = yatirmiktar + bakiye
        document.getElementById("paramiktar").innerHTML = "<b>" + bakiye + "</b>";
        document.getElementById("paranakit").innerHTML = "<b>" + nakitpara + "</b>";
    } else {
        alert("yetersiz bakiye");
    }
}

let paracekbtn = document.querySelector("#paracek");
paracekbtn.onclick = function () {
    let cekmiktar = Number(prompt("Çekmek istediğiniz miktar"));
    if (bakiye >= cekmiktar) {
        bakiye = bakiye - cekmiktar
        nakitpara = nakitpara + cekmiktar
        document.getElementById("paramiktar").innerHTML = "<b>" + bakiye + "</b>";
        document.getElementById("paranakit").innerHTML = "<b>" + nakitpara + "</b>";
    } else {
        alert("yetersiz bakiye");
    }
}