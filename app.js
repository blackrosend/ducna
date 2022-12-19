// const container = document.querySelector(".container");
// const coffees = [{
//         name: "Perspiciatis",
//         image: "public/images/coffee1.jpg"
//     },
//     {
//         name: "Voluptatem",
//         image: "public/images/coffee2.jpg"
//     },
//     {
//         name: "Explicabo",
//         image: "public/images/coffee3.jpg"
//     },
//     {
//         name: "Rchitecto",
//         image: "public/images/coffee4.jpg"
//     },
//     {
//         name: " Beatae",
//         image: "public/images/coffee5.jpg"
//     },
//     {
//         name: " Vitae",
//         image: "public/images/coffee6.jpg"
//     },
//     {
//         name: "Inventore",
//         image: "public/images/coffee7.jpg"
//     },
//     {
//         name: "Veritatis",
//         image: "public/images/coffee8.jpg"
//     },
//     {
//         name: "Accusantium",
//         image: "public/images/coffee9.jpg"
//     }
// ];
// const showCoffees = () => {
//     let output = "";
//     coffees.forEach(
//         ({ name, image }) =>
//         (output += `
//               <div class="card">
//                 <img class="card--avatar" src=${image} />
//                 <h1 class="card--title">${name}</h1>
//                 <a class="card--link" href="#">Taste</a>
//               </div>
//               `)
//     );
//     container.innerHTML = output;
// };

// document.addEventListener("DOMContentLoaded", showCoffees);
function initialize(news) {
    let news_doc = new window.DOMParser().parseFromString(news, "text/xml");

    //console.log(news_doc);
    const items = news_doc.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
        //console.log(el.querySelector("title").childNodes[0].nodeValue);
        html += `
    <article>
      <img src="${el.querySelector("image").innerHTML}" alt="">
      <h2><a href="${
        el.querySelector("link").innerHTML
      }" target="_blank" rel="noopener">
          ${el.querySelector("title").childNodes[0].nodeValue}
        </a></h2>
            </article>`;
    });
    $("#rss").html(html);
}

function showNews() {
    var rss_url = "https://thanhnien.vn/rss/the-thao-318.rss";
    fetch(rss_url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            //return response.json();
            return response.text();
        })
        .then(str => initialize(str))
        .catch(err => console.error(`Fetch problem: ${err.message}`));
}
document.addEventListener("DOMContentLoaded", showNews);

// Register the ServiceWorker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("./sw.js", { scope: "." })
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}
//importScripts("./public/assets/js/sw-v1");