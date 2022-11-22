// // DOM Selection

// // document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "20px";
// p4.style.fontWeight = "Bold";

// const li2 = document.querySelector("section#b ul li:nth-child(2");
// li2.style.backgroundColor = "orange";

// // document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//     p[i].innerHTML = "Ini diubah melalui javascript"
//     p[i].style.backgroundColor = "lightblue"
// }

// mengubah node root
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "yellow";

// atau 
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "lightyellow";