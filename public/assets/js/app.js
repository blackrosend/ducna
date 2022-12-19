const container = document.querySelector(".container");
const coffees = [{
        name: "Perspiciatis",
        image: "public/images/coffee1.jpg"
    },
    {
        name: "Voluptatem",
        image: "public/images/coffee2.jpg"
    },
    {
        name: "Explicabo",
        image: "public/images/coffee3.jpg"
    },
    {
        name: "Rchitecto",
        image: "public/images/coffee4.jpg"
    },
    {
        name: " Beatae",
        image: "public/images/coffee5.jpg"
    },
    {
        name: " Vitae",
        image: "public/images/coffee6.jpg"
    },
    {
        name: "Inventore",
        image: "public/images/coffee7.jpg"
    },
    {
        name: "Veritatis",
        image: "public/images/coffee8.jpg"
    },
    {
        name: "Accusantium",
        image: "public/images/coffee9.jpg"
    }
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, image }) =>
        (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

// Register the ServiceWorker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("./sw.js", { scope: "." })
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}