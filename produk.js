// ============================================================
//  FILE INI YANG ANDA EDIT SAJA. Tidak perlu menyentuh index.html
// ============================================================

const TOKO = {
  nama: "Toko Rekomendasi",
  logo:"logo.jpg",
  slogan: "Produk pilihan dengan harga terbaik. Masukkan kode produk untuk mencari.",
  // false = semua produk tampil. true = produk hanya tampil setelah kode diketik.
  hanyaTampilJikaKode: false,
};

// Untuk menambah produk: salin satu blok { ... }, tempel di bawahnya, lalu ubah isinya.
// Jangan lupa koma (,) di akhir setiap blok.
// foto: taruh gambar di folder "images" lalu tulis "images/namafile.jpg".
//       Kosongkan ("") untuk memakai emoji.
const PRODUK = [
  {
    kode: "A001",
    nama: "Contoh Produk 1",
    kategori: "Gadget",
    harga: 150000,
    deskripsi: "Ganti dengan deskripsi produk Anda.",
    link: "https://shopee.co.id",
    foto: "",
    emoji: "🎧",
  },
  {
    kode: "A002",
    nama: "Contoh Produk 2",
    kategori: "Fashion",
    harga: 89000,
    deskripsi: "Ganti dengan deskripsi produk Anda.",
    link: "https://shopee.co.id",
    foto: "",
    emoji: "👟",
  },
  {
    kode: "A003",
    nama: "Contoh Produk 3",
    kategori: "Rumah",
    harga: 65000,
    deskripsi: "Ganti dengan deskripsi produk Anda.",
    link: "https://shopee.co.id",
    foto: "",
    emoji: "🏠",
  },
  {
    kode: "A004",
    nama: "Contoh Produk 4",
    kategori: "Kecantikan",
    harga: 45000,
    deskripsi: "Ganti dengan deskripsi produk Anda.",
    link: "https://shopee.co.id",
    foto: "",
    emoji: "💄",
  },
];
