function travelDiscount(id, amount) {
  let priceSiswa = 20000;
  let priceKaryawan = 50000;
  let priceTotal = 0;
  let priceAwal = 0;
  let discountSiswa = 0.2;
  let discountKaryawan = 0.25;
  splitId = id.toUpperCase().split("");
  if (splitId[0] === "S" && splitId[1] === "T" && splitId[2] === "D") {
    if (amount > 20) {
      priceAwal = priceSiswa * amount;
      priceTotal = priceAwal - priceAwal * discountSiswa;
    } else {
      priceTotal = priceSiswa * amount;
    }
    return `Selamat! Voucher untuk STUDENT dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${priceTotal}.`;
  } else if (splitId[0] === "C" && splitId[1] === "O" && splitId[2] === "R" && splitId[3] === "P") {
    if (amount > 30) {
      priceAwal = priceKaryawan * amount;
      priceTotal = priceAwal - priceAwal * discountKaryawan;
    } else {
      priceTotal = priceKaryawan * amount;
    }
    return `Selamat! Voucher untuk CORPORATE dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${priceTotal}.`;
  } else {
    return `Maaf, voucher yang anda miliki tidak valid!`;
  }
}

console.log(travelDiscount("Std9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
