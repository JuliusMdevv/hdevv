const navbar = document.getElementById('nav');
const offScreen = document.getElementById('off-screen');

const filename = window.location.pathname.split("/").pop();

const test = document.createElement("test");
test.innerHTML= `
<h1>${filename.replace(".html", "")}</h1>
`;

offScreen.appendChild(test);