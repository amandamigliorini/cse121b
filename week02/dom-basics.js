const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImg = document.createElement("img")
newImg.setAttribute("alt", "path/to/image")
newImg.setAttribute("src", "https://picsum.photos/200")
document.body.appendChild(newImg)
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
const homeWard = 3
const ward = `<strong>Home Ward: ${homeWard}</strong>`;
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
const newPara = document.createElement("p");
newH2.innerHTML = "CSE 121b";
newPara.innerText = ward;
newSection.appendChild(newH2);
newSection.appendChild(newPara);
document.body.appendChild(newSection);