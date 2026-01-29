const navbar = document.getElementById('nav');
const offScreen = document.getElementById('off-screen');

const filename = window.location.pathname.split("/").pop();

const test = document.createElement("test");

const pages = fetch("../assets/data/pages.json").split("/").pop();
test.innerHTML= `
<h1>${pages.replace(".html", "")}</h1>
`;

offScreen.appendChild(test);