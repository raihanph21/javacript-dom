// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "#1e81b0";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Muhammad Raihan"; // innerHTML -> ganti teks

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0]; // -> karna getElementsByTagName akan mengembalikkan HTMLCollections
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript"; // cara 2 buat masukkin index [0]