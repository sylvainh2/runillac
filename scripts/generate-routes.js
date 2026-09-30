const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const indexFile = path.join(buildDir, "index.html");

// Routes React à rendre accessibles directement sur GitHub Pages
const routes = [
    "savoir",
    "partenaires",
    "contact",
    "cg"
];

// Création des index.html pour chaque route
routes.forEach((route) => {
    const routeDir = path.join(buildDir, route);

    fs.mkdirSync(routeDir, { recursive: true });

    fs.copyFileSync(
        indexFile,
        path.join(routeDir, "index.html")
    );

    console.log(`Route créée : /${route}/index.html`);
});

// On conserve également 404.html pour les URL inexistantes
fs.copyFileSync(
    indexFile,
    path.join(buildDir, "404.html")
);

console.log("404.html créé");
console.log("Routes GitHub Pages générées avec succès.");