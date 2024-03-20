function loop() {
    var count = prompt("Masukkan Jumlah Perulangan");

    for(let i = 0; i < count; i++) {
        document.write("Perulangan ke " +(i+1) +"<br>");
    }
}