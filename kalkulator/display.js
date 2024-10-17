let display = document.getElementById('display');
let lastValue = 0; // Menyimpan nilai terakhir
let operator = ''; // Menyimpan operator terakhir

function clearDisplay() {
    display.innerText = '0';
    lastValue = 0;
    operator = '';
}

function toggleSign() {
    if (display.innerText !== '0') {
        display.innerText = display.innerText.startsWith('-') ?
            display.innerText.slice(1) : '-' + display.innerText;
    }
}

function appendToDisplay(value) {
    if (display.innerText === '0' || display.innerText === 'Invalid') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    let currentValue = parseFloat(display.innerText);
    if (operator === '+') {
        display.innerText = (lastValue + currentValue).toString();
    } else if (operator === '-') {
        display.innerText = (lastValue - currentValue).toString();
    } else if (operator === '*') {
        display.innerText = (lastValue * currentValue).toString();
    } else if (operator === '/') {
        display.innerText = (lastValue / currentValue).toString();
    }
    operator = ''; // Reset operator setelah perhitungan
}

function calculatePercentage() {
    let currentValue = parseFloat(display.innerText);
    let percentageValue = currentValue / 100;

    // Tampilkan nilai persen
    display.innerText = percentageValue.toString(); // Tampilkan hasil persen (0.5 untuk 50%)
}

// Fungsi untuk menambahkan persentase ke nilai
function addPercentage() {
    let currentValue = parseFloat(display.innerText);
    let percentValue = currentValue / 100;
    display.innerText = (lastValue + (percentValue * lastValue)).toString(); // Tambahkan hasil persen ke nilai terakhir
}

// Mengubah fungsi appendToDisplay untuk menangani operator persen
function appendToDisplay(value) {
    if (value === '%') {
        calculatePercentage(); // Jika pengguna menekan '%', hitung persen
        return;
    }
    if (display.innerText === '0' || display.innerText === 'Invalid') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Fungsi untuk menyimpan nilai dan operator
function setOperator(op) {
    operator = op;
    lastValue = parseFloat(display.innerText);
    clearDisplay(); // Reset tampilan untuk nilai berikutnya
}

// Mengubah tombol operator untuk menyimpan nilai dan operator
function setAddition() {
    setOperator('+');
}

function setSubtraction() {
    setOperator('-');
}

function setMultiplication() {
    setOperator('*');
}

function setDivision() {
    setOperator('/');
}

// Fungsi untuk menghitung hasil akhir jika operator % digunakan setelah + 
function calculateFinal() {
    if (operator === '+') {
        addPercentage();
    } else {
        calculate();
    }
}
