function validateAndCalculate() {
    var bil1 = document.getElementById('bilangan1').value;
    var bil2 = document.getElementById('bilangan2').value;

    // Validasi untuk memastikan input tidak kosong
    if (bil1 === "" || bil2 === "") {
        alert("Harap masukkan kedua bilangan!");
        return;
    }

    // Jika lolos validasi, lakukan perhitungan
    var hasil = parseFloat(bil1) + parseFloat(bil2);
    document.getElementById('hasil').innerHTML = "Hasil: " + hasil;
}

function reset() {
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
    document.getElementById('hasil').innerHTML = "Hasil: 0";
}
