let selectedGender;

        document.getElementById("genderPria").addEventListener("click", function () {
            selectedGender = "pria";
        });

        document.getElementById("genderWanita").addEventListener("click", function () {
            selectedGender = "wanita";
        });

        document.getElementById("calculate").addEventListener("click", function () {
            const berat = parseFloat(document.getElementById("berat").value);
            const tinggi = parseFloat(document.getElementById("tinggi").value);

            if (isNaN(berat) || isNaN(tinggi) || !selectedGender) {
                alert("Masukkan berat, tinggi, dan pilih jenis kelamin terlebih dahulu.");
                return;
            }

            localStorage.setItem("beratBadan", berat);
            localStorage.setItem("tinggiBadan", tinggi);
            localStorage.setItem("jenisKelamin", selectedGender);

            window.location.href = "#result";
        });
function changeButtonColor(buttonId) {
    var button = document.getElementById(buttonId);

    // Kembalikan warna semua tombol ke warna semula
    document.getElementById("genderPria").style.backgroundColor = "";
    document.getElementById("genderPria").style.color = ""; // Kembalikan warna tulisan menjadi default

    document.getElementById("genderWanita").style.backgroundColor = "";
    document.getElementById("genderWanita").style.color = ""; // Kembalikan warna tulisan menjadi default

    // Jika tombol "LAKI-LAKI" diklik, ubah warnanya menjadi abu-abu dan tulisannya menjadi hitam
    if (buttonId === "genderPria") {
        button.style.backgroundColor = "gray";
        button.style.color = "navy"; // Ubah warna tulisan menjadi hitam
        isGenderPriaClicked = true;
        isGenderWanitaClicked = false;
    }
    // Jika tombol "PEREMPUAN" diklik, ubah warnanya menjadi gray dan tulisannya menjadi hitam
    else if (buttonId === "genderWanita") {
        button.style.backgroundColor = "gray";
        button.style.color = "navy"; // Ubah warna tulisan menjadi kuning
        isGenderPriaClicked = false;
        isGenderWanitaClicked = true;
    }
}
