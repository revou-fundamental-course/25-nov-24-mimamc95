function hitungBmi() {
    // console.log("Hitung BMI");

    // deklarasi variabel
    const options = document.getElementsByName('genderBmi');
    let beratBmi = document.getElementById("beratBmi");
    let usiaBmi = document.getElementById("usiaBmi");
    let tinggiBmi = document.getElementById("tinggiBmi");
    let bmi = parseInt(beratBmi.value) / (parseInt(tinggiBmi.value) / 100) ** 2;


    // pernyataan logic validasi
    if (beratBmi.value === "" || usiaBmi.value === "" || tinggiBmi.value == "") {
        console.log("Masukan inputan dengan benar!");
        alert("Inputan wajib diisi!");
        return;
    }


    // mengambil nilai radio button    
    let gender = '';
    for (const genderBmi of options) {
        if (genderBmi.checked) {
            gender = genderBmi.value;
            console.log(gender);
            break;
        }
    }


    // pernyataan kondisi logic perhitungan
    if (bmi < 18.5) {
        // console.log("Kekurangan berat badan");
        document.getElementById("hasil-singkat").innerHTML = "Kekurangan berat badan";
        document.getElementById("hasil-statement").innerHTML = "Anda memiliki berat badan yang kurang";
        document.getElementById("gender-usia").innerHTML = "Seorang" + " " + gender +" "+ "berusia" + " " + usiaBmi.value + " tahun.";
        document.getElementById("hasil-range").innerHTML = "Hasil BMI < 18.5";
        document.getElementById("hasil-artikel").innerHTML = "Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan kurang atau tergolong kurus. Hasil ini berdasarkan angka BMI Anda yang berada di bawah 18.5. Sebagai solusinya, Anda membutuhkan asupan kalori tambahan sebanyak 300-500 kkal per hari. Perbaiki juga pola makan dan pola hidup untuk mendapatkan berat badan ideal.";
    } else if (bmi > 18.5 && bmi < 24.9) {
        // console.log("Normal (Ideal)");
        document.getElementById("hasil-singkat").innerHTML = "Normal (Ideal)";
        document.getElementById("hasil-statement").innerHTML = "Anda memiliki berat badan yang sehat";
        document.getElementById("gender-usia").innerHTML = "Seorang" + " " + gender +" "+ "berusia" + " " + usiaBmi.value + " tahun.";
        document.getElementById("hasil-range").innerHTML = "Hasil BMI diantara 18.5 dan 24.9";
        document.getElementById("hasil-artikel").innerHTML = "Hasil perhitungan menunjukkan bahwa Anda memliki berat badan normal. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 18.5 sampai 24.9. Memiliki berat badan ideal bisa menjadi salah satu cara untuk menjaga kesehatan tubuh secara keseluruhan. Anda juga bisa terhindar dari berbagai risiko penyakit berbahaya. Cara menjaga berat badan ideal adalah dengan mengatur pola makan dan melakukan olahraga rutin. Pada intinya, Anda harus tetap menjalankan pola hidup sehat. Pastikan untuk selalu menyeimbangkan antara energi yang masuk dengan energi yang dikeluarkan";
    } else if (bmi > 24.9 && bmi < 29.9) {
        // console.log("Kelebihan berat badan");
        document.getElementById("hasil-singkat").innerHTML = "Kelebihan berat badan";
        document.getElementById("hasil-statement").innerHTML = "Anda memiliki berat badan yang berlebih";
        document.getElementById("gender-usia").innerHTML = "Seorang" + " " + gender +" "+ "berusia" + " " + usiaBmi.value + " tahun.";
        document.getElementById("hasil-range").innerHTML = "Hasil BMI diantara 24.9 dan 29.9";
        document.getElementById("hasil-artikel").innerHTML = "Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan berlebih atau gemuk. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 24.9 sampai 29.9. Sebagai solusinya, Anda harus mengurangi asupan asupan kalori harian sekitar 300-500 kkal. Mulai sekarang coba lebih perhatikan kalori dari makanan dan minuman yang Anda konsumsi. Mengurangi asupan kalori harian sekitar 500 kkal dapat membantu menurunkan berat badan sebesar 0,5-1 kg per minggu. Bukan hanya mengurangi asupan kalori, penurunan berat badan bisa tercapai dengan rutin berolahraga. Perlu diingat bahwa jangan konsumsi kalori di bawah 1.200 kkal per hari karena bisa berdampak buruk pada kesehatan";
    } else if (bmi > 29.9) {
        // console.log("Terlalu berat (Obesitas)");
        document.getElementById("hasil-singkat").innerHTML = "Terlalu berat (Obesitas)";
        document.getElementById("hasil-statement").innerHTML = "Anda memiliki berat badan yang berlebih (obesitas) segera lakukan olahraga rutin dan diet sehat";
        document.getElementById("gender-usia").innerHTML = "Seorang" + " " + gender +" "+ "berusia" + " " + usiaBmi.value + " tahun.";
        document.getElementById("hasil-range").innerHTML = "Hasil BMI > 29.9";
        document.getElementById("hasil-artikel").innerHTML = "Hasil perhitungan menunjukkan bahwa Anda tergolong obesitas. Hasil ini berdasarkan angka BMI Anda lebih dari 29.9. Perlu diketahui bahwa obesitas lebih parah daripada gemuk. Seseorang yang gemuk belum tentu obesitas, sedangkan seseorang yang obesitas sudah dipastikan gemuk. Jika dibiarkan, bisa berisiko menderita berbagai penyakit serius. Cara menurunkan berat badan yaitu dengan mengurangi asupan kalori harian sekitar 300-500 kkal. Cara ini dapat membantu menurunkan berat badan sebesar 0,5-1 kg per minggu. Mengurangi asupan kalori saja tidak cukup. Anda perlu melakukan olahraga rutin untuk mendapatkan berat badan ideal";
    }

    console.log(bmi)

    document.getElementById("hasil-kalkulasi").innerHTML = parseFloat(bmi.toFixed(1));
    // let x=60
    // let y=167
    // let z=x.value*y.value

}

function resetBmi() {
    // console.log("Reset BMI");

    document.getElementById('beratBmi').value = '';
    document.getElementById('usiaBmi').value = '';
    document.getElementById('tinggiBmi').value = '';
    document.getElementById('hasil-kalkulasi').innerHTML = '0';
}

// document.getElementById('resetBmi').addEventListener('click', function () {
//     console.log("Reset");
//     document.getElementById('beratBmi').value = '';
//     document.getElementById('usiaBmi').value = '';
//     document.getElementById('tinggiBmi').value = '';
//     document.getElementById('hasil-kalkulasi').innerHTML = '0';
// });