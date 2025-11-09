// casual collection
// card1
let casualcollections = [
  {
    name: "Lawn",
    price: 600,
    image: "lawnbg.jpg",
    img1:"lawn1.webp",
    img2:"lawn2.webp",
    img3:"lawn3.jpg"
  },
  // card2
  {
    name: "Embroidered",
    price: 500,
    image: "embroideredbg.webp"
    ,img1:"embroidered1.jpg",
    img2:"embroidered2.webp",
    img3:"embroidered3.jpg"
  },
  // card3
  {
    name: "Jersey",
    price: 650,
    image: "jerseybg.jpg"
    ,img1:"jersey1.jpg",
    img2:"jersey2.webp",
    img3:"jersey3.webp"
  
  },
  // card4

  {
    name: "Chiffon",
    price: 650,
    image: "chifonbg.webp"
   , img1:"chifon1.webp",
    img2:"chifon2.webp",
    img3:"chifon3.webp"
  }


];
// festive collection
    // card1
let festiveCollections = [
      { name: "Silk ", 
        price: 900,
        image: "silkbg.webp" ,
        img1:"silk1.webp",
        img2:"silk2.webp",
        img3:"silk3.webp"
        },

    // card2
        { name: "Stone Silk", 
          price: 1200,
          image:"stonebg.webp",
          img1:"stone1.webp",
          img2:"stone2.webp",
          img3:"stone3.webp"
          },
          // card3
        { name: "Organza", 
          price: 900,
           image: "organzabg.jpg",
           img1:"organza1.webp",
            img2:"organza2.webp",
            img3:"organza3.jpg"
          },

];
// winter collection
    let winterCollections = [
      // card1
    { name: "Cashmere"
      , price: 800,
       image: "cashmerebg.webp" ,
        img1:"cashmere1.webp",
        img2:"cashmere2.webp",
        img3:"cashmere3.webp"
       },
      //  card2
    { name: "Printed", 
      price: 1100, 
      image: "printbg.jpg",
    img1:"print1.jpg",
    img2:"print2.webp",
    img3:"print3.jpg"
     },
    //  card3
    { name: "Woolen"
      , price: 1100,
       image: "woolenbg.jpg",
      img1:"woolen1.jpg",
      img2:"woolen2.webp",
      img3:"woolen3.webp"
       },
  ];



function renderCards(selector, items) {
  let container = document.querySelector(selector);
  container.innerHTML = ''; // Clear old items first

  items.forEach(c => {
    let card = document.createElement("div");
    card.className = "cardclass";

    let overlayImgs = `
      <div class="overlay-images">
        <img src="${c.img1}" alt="${c.name}">
      <img src="${c.img2}" alt="${c.name}">
      <img src="${c.img3}" alt="${c.name}">
      </div>
    `;

    card.innerHTML = `
      <div class="bg-image" style="background-image: url('${c.image}')"></div>
      ${overlayImgs}
      <div class="info">
        <h3>${c.name}</h3>
        <p>${c.price} PKR</p>
        <button class="addtocart">Add to Cart</button>
      </div>
    `;

    container.appendChild(card);
  });
}
renderCards('.casual_wear', casualcollections);
renderCards('.festive_wear', festiveCollections);
renderCards('.winter_wear', winterCollections);




