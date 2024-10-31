<?php
// Jumlah baris segitiga
$rows = 5;

for ($i = $rows; $i >= 1; $i--) {
    // Cetak spasi
    for ($j = $rows; $j > $i; $j--) {
        echo "&nbsp;&nbsp;"; // Spasi dua kali
    }
    
    // Cetak bintang
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    
    // Pindah ke baris berikutnya
    echo "<br>";
}
?>
