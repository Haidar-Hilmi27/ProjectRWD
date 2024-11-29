//soal 1
function hitungLingkaran(){
    var radius = document.getElementById("radius").value;
    if (radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").
        innerText = "Luas :" + luas + "cm², kelilinng :" + keliling + "cm²";
    }  else {
        document.getElementById("lingkaranOutput").
        innerText = "masukkan jari-jari yang valid!";
    }
}

//soal 2
function hitungRupiah(){
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0){
        var kurs = 15870;
        var dollar = rupiah / kurs;
        document.getElementById("hasilRupiah").innerText = "Nilai : $" + dollar.toFixed(2);
    } else {
        document.getElementById("hasilRupiah").innerText = "masukan nilai yang valid!"
    }
}

//soal 3
//function hitungpenjumlah(){
    //var bil1 = parseFloat(document.getElementById("bil1").value) || 0;
    //var bil2 = parseFloat(document.getElementById("bil2").value) || 0;

    //var jumlah = bil1 + bil2;
    //document.getElementById("hasiljumlah").innerText = "jumlah :" + jumlah.toFixed(2);
//}

function hitungpenjumlahan() {
    var bil1 = parseFloat(document.getElementById("bil1").value) || 0;
    var bil2 = parseFloat(document.getElementById("bil2").value) || 0;

    var jumlah = bil1 + bil2;
    document.getElementById("hasiljumlah").innerText = "Jumlah: " + jumlah.toFixed(2);
}
zz