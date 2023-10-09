// Fungsi untuk pendaftaran pengguna
function registerUser() {
    // Mengambil data dari form pendaftaran
    const newUsername = document.getElementById("newUsername").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;

    // Validasi input
    if (newUsername === "" || newEmail === "" || newPassword === "") {
        alert("Harap isi semua kolom input.");
    } else {
        // Simpan data pengguna ke localStorage (simpanan sementara, seharusnya menggunakan server atau database)
        const userData = {
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
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    // Mengambil data pengguna yang sudah terdaftar dari localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && inputUsername === userData.username && inputPassword === userData.password) {
        // Jika kredensial sesuai, arahkan ke halaman beranda setelah login berhasil
        alert("Login berhasil!");
        window.location.href = "index.html"; // Ganti "info.html" dengan halaman beranda Anda
    } else {
        // Jika kredensial tidak sesuai, tampilkan pesan kesalahan
        alert("Username atau Password yang Anda masukkan salah. Silakan periksa kembali input Anda.");
        // Mengosongkan password
        document.getElementById("password").value = "";
    }
});
