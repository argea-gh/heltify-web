function checkout(product){
  const name = prompt('Masukkan Nama Anda:');
  const address = prompt('Masukkan Alamat Pengiriman:');
  const phone = prompt('Masukkan No HP:');

  if(!name || !address || !phone){
    alert('Lengkapi semua data!');
    return;
  }

  const message = 
    `Halo, saya ingin memesan:%0A` +
    `Produk: ${product}%0A` +
    `Nama: ${name}%0A` +
    `Alamat: ${address}%0A` +
    `No HP: ${phone}`;

  window.open("https://wa.me/6281234567890?text=" + message);
}
