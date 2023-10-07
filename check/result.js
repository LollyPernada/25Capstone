document.getElementById("calculate").addEventListener("click", function() {
    const selectedGender = localStorage.getItem("jenisKelamin");

    const beratElement = document.getElementById("berat");
    const tinggiElement = document.getElementById("tinggi");

    const berat = parseFloat(beratElement.value);
    const tinggi = parseFloat(tinggiElement.value);

    if (isNaN(berat) || isNaN(tinggi) || !selectedGender) {
        alert("Data tidak tersedia. Kembali ke halaman sebelumnya.");
        window.location.href = "#cek";
    } else {
        let beratBadanIdeal;
        if (selectedGender === "pria") {
            beratBadanIdeal = (tinggi - 100) - ((tinggi - 100) * 0.10);
        } else {
            beratBadanIdeal = (tinggi - 100) - ((tinggi - 100) * 0.15);
        }

        const tinggiMeters = tinggi / 100;
        const imt = berat / (tinggiMeters * tinggiMeters);

        let kategoriIMT;
        if (imt < 18.5) {
            kategoriIMT = "Kurus";
            kategoriIMT1 = "Anda harus meningkatkan asupan kalori dengan makan makanan nutrisi tinggi, berfokus pada protein dan lemak sehat, serta rutin berolahraga dengan latihan beban, sambil menjaga konsistensi dan berkonsultasi dengan ahli gizi atau pelatih pribadi.";
        } else if (imt >= 18.5 && imt <= 22.9) {
            kategoriIMT = "Normal";
            kategoriIMT1 = "Anda harus penting untuk menjaga pola makan seimbang, berolahraga secara teratur, tidur cukup, mengelola stres, dan menjaga gaya hidup sehat secara keseluruhan untuk mempertahankan kesehatan dan kebugaran optimal.";
        } else if (imt >= 23 && imt <= 27.5) {
            kategoriIMT = "Overweight (kelebihan berat badan)";
            kategoriIMT1 = " Anda Perlu mengatur pola makan seimbang, berolahraga secara teratur, mengendalikan porsi makan, dan mencari dukungan profesional jika diperlukan untuk mencapai dan menjaga berat badan yang sehat.";
        } else {
            kategoriIMT = "Obesitas";
            kategoriIMT1 = "Konsultasikan dengan profesional kesehatan, berolahraga secara teratur dengan panduan dari ahli olahraga, serta berkomitmen untuk perubahan gaya hidup jangka panjang yang seimbang guna mencapai dan menjaga berat badan yang lebih sehat.";
        }

        const resultElement = document.getElementById("hasil-result");

        resultElement.innerHTML = `Berat Badan Ideal : ${beratBadanIdeal.toFixed(2)} kg<br>IMT : ${imt.toFixed(2)}<br>Kategori IMT : ${kategoriIMT}<br>Saran : <br>${kategoriIMT1}`;
        
       
    }
});
