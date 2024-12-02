function hitungBmi() {
    console.log("Hitung BMI");

    // deklarasi variabel
    let beratBmi = document.getElementById("beratBmi");
    let usiaBmi = document.getElementById("usiaBmi");
    let tinggiBmi = document.getElementById("tinggiBmi");
    let bmi = parseInt(beratBmi.value) / (parseInt(tinggiBmi.value) / 100) ** 2;


    // // pernyataan kondisi
    if (bmi < 18.5) {
        console.log("Kekurangan berat badan");
        document.getElementById("hasil-singkat1").innerHTML = "Kekurangan berat badan";
        document.getElementById("hasil-singkat2").innerHTML = "Anda memiliki berat badan yang kurang";
    } else if (bmi > 18.5 && bmi < 24.9) {
        console.log("Normal (Ideal)");
        document.getElementById("hasil-singkat1").innerHTML = "Normal (Ideal)";
        document.getElementById("hasil-singkat2").innerHTML = "Anda memiliki berat badan yang sehat";
    } else if (bmi > 24.9 && bmi < 29.9) {
        console.log("Kelebihan berat badan");
        document.getElementById("hasil-singkat1").innerHTML = "Kelebihan berat badan";
        document.getElementById("hasil-singkat2").innerHTML = "Anda memiliki berat badan yang berlebih";
    } else if (bmi > 29.9) {
        console.log("Terlalu berat (Obesitas)");
        document.getElementById("hasil-singkat1").innerHTML = "Terlalu berat (Obesitas)";
        document.getElementById("hasil-singkat2").innerHTML = "Anda memiliki berat badan yang berlebih (obesitas) segera lakukan olahraga rutin dan diet sehat";
    }

    console.log(bmi)

    document.getElementById("hasil-kalkulasi").innerHTML = parseInt(bmi);
    // let x=60
    // let y=167
    // let z=x.value*y.value

}

function resetBmi() {
    console.log("Reset");
    // document.getElementById('resetBmi').reset();
}