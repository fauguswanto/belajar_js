let angka1, angka2;

// if (!angka1.trim() || !angka2.trim()) {
//     alert("Mohon masukkan angka terlebih dahulu!");
//     return;
// }

function add() {
    angka1 = document.getElementById("angka1").value;
    angka2=document.getElementById("angka2").value;

    if (!angka1.trim() || !angka2.trim()) {
        alert("Mohon isi kedua angka terlebih dahulu!");
        document.getElementById("result-area").innerHTML = '';

        return;
    }

    let hasil = parseInt(angka1) + parseInt(angka2);
    printHasil(hasil);
}

function substract() {
    angka1 = document.getElementById("angka1").value;
    angka2=document.getElementById("angka2").value;

    if (!angka1.trim() || !angka2.trim()) {
        alert("Mohon isi kedua angka terlebih dahulu!");
        document.getElementById("result-area").innerHTML = '';
        return;
    }

    let hasil = parseInt(angka1) - parseInt(angka2);
    printHasil(hasil);
}

function clearInputs() {
    document.getElementById("angka1").value = '';
    document.getElementById("angka2").value = '';

    document.getElementById("angka1").innerText = '';
    document.getElementById("angka2").innerText = '';
    document.getElementById("result-area").innerHTML = '';
}

function printHasil(hasil) {
    let resultDiv = document.createElement("div");
    resultDiv.textContent = "Hasil " + hasil;

    document.getElementById("result-area").innerHTML = '';
    document.getElementById("result-area").appendChild(resultDiv);
}