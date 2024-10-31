<?php
// Jumlah baris segitiga
$rows = 5;

for ($i = 1; $i <= $rows; $i++) {
    // Cetak spasi
    for ($j = $i; $j < $rows; $j++) {
        echo "&nbsp;&nbsp;"; // Spasi dua kali untuk keseimbangan
    }
    
    // Cetak bintang
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    
    // Pindah ke baris berikutnya
    echo "<br>";
}
?>
