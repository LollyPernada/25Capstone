// Fungsi untuk pendaftaran pengguna
function registerUser() {
    // Mengambil data dari form pendaftaran
    var newUsername = document.getElementById("newUsername").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;

    // Validasi input
    if (newUsername === "" || newEmail === "" || newPassword === "") {
        alert("Harap isi semua kolom input.");
    } else {
        // Simpan data pengguna ke localStorage (simpanan sementara, seharusnya menggunakan server atau database)
        var userData = {
            username: newUsername,
            email: newEmail,
            password: newPassword
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        // Setelah berhasil mendaftar, arahkan ke halaman info
        alert("Pendaftaran berhasil.");
        window.location.href = "info/info.html";
    }
}

// Fungsi untuk login pengguna
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;

    // Mengambil data pengguna yang sudah terdaftar dari localStorage
    var userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && inputUsername === userData.username && inputPassword === userData.password) {
        // Jika kredensial sesuai, arahkan ke halaman beranda setelah login berhasil
        alert("Login berhasil!");
        window.location.href = "main.html"; // Ganti "info.html" dengan halaman beranda 
    } else {
        // Jika kredensial tidak sesuai, tampilkan pesan kesalahan
        alert("Username atau Password yang Anda masukkan salah. Silakan periksa kembali input Anda.");
        // Mengosongkan password
        document.getElementById("password").value = "";
    }
});
