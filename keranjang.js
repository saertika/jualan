let keranjang = [];

function tambahKeKeranjang() {
  const select = document.getElementById("itemSelect");
  const harga = parseInt(select.value);
  const nama = select.options[select.selectedIndex].text.split(" - ")[0];

  if (harga === 0) return alert("Silakan pilih produk terlebih dahulu.");

  // Cek apakah produk sudah ada di keranjang
  const existing = keranjang.find(item => item.nama === nama);
  if (existing) {
    existing.jumlah += 1;
    existing.total = existing.jumlah * existing.harga;
  } else {
    keranjang.push({
      nama: nama,
      harga: harga,
      jumlah: 1,
      total: harga
    });
  }

  updateTabel();
}

function updateTabel() {
  const tbody = document.getElementById("keranjangBody");
  tbody.innerHTML = "";

  let totalHarga = 0;

  keranjang.forEach((item, index) => {
    totalHarga += item.total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.nama}</td>
      <td>Rp${item.harga}</td>
      <td>${item.jumlah}</td>
      <td>Rp${item.total}</td>
      <td><button onclick="hapusItem(${index})">Hapus</button></td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("totalHarga").textContent = totalHarga;

  // Simpan ke localStorage
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  localStorage.setItem("totalHarga", totalHarga);
}

function hapusItem(index) {
  keranjang.splice(index, 1);
  updateTabel();
}

// Muat ulang keranjang dari localStorage saat halaman dibuka
window.onload = function () {
  const data = localStorage.getItem("keranjang");
  if (data) {
    keranjang = JSON.parse(data);
    updateTabel();
  }
};