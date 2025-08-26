const contentArray = [
  {
    title: "Mountain Trip",
    text: "Breathtaking views, fresh air, and adventures in the mountains.",
    imagePath: "./images/mountains.jpg",
    altText: "Image of mountains",
  },
  {
    title: "Sea and Beach",
    text: "Summer, sun, waves, and warm sand under your feet.",
    imagePath: "./images/sea.jpg",
    altText: "Image of the sea",
  },
  {
    title: "City at Night",
    text: "The lights of a big city impress with their unique atmosphere.",
    imagePath: "./images/nightcity.jpg",
    altText: "Image of the night city",
  },
  {
    title: "Blooming Fields",
    text: "Endless lavender fields and the scent of summer in the air.",
    imagePath: "./images/fields.jpg",
    altText: "Image of blooming fields",
  },
  {
    title: "Winter Wonderland",
    text: "Snowy landscapes, frosty air, and the coziness of a mountain cabin.",
    imagePath: "./images/forestwinter.jpg",
    altText: "Image of a winter landscape",
  },
  {
    title: "Forest Trail",
    text: "Quiet paths, birdsong, and the rustle of leaves underfoot.",
    imagePath: "./images/forestwilderness.jpg",
    altText: "Image of a forest",
  },
];

const FALLBACK_IMG =
  "https://dummyimage.com/600x400/eeeeee/555.png&text=No+image";

function ensureString(v, fallback = "") {
  return typeof v === "string" ? v : fallback;
}

// Create header
function createHeader() {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Tours & Travels";
  h1.classList.add("main-title");

  const subtitle = document.createElement("p");
  subtitle.textContent = "Choose your adventure";
  subtitle.classList.add("subtitle");

  header.appendChild(h1);
  header.appendChild(subtitle);

  document.body.prepend(header);
}

// Create main#cards
function ensureCardsContainer() {
  let container = document.getElementById("cards");
  if (!container) {
    container = document.createElement("main");
    container.id = "cards";
    document.body.appendChild(container);
  }
  return container;
}

// Generate article cards
function generateArticles(items) {
  const container = ensureCardsContainer();
  const frag = document.createDocumentFragment();

  items.forEach((item) => {
    const article = document.createElement("article");

    const header = document.createElement("h3");
    header.textContent = ensureString(item.title, "Untitled");

    const image = document.createElement("img");
    image.setAttribute("src", ensureString(item.imagePath, FALLBACK_IMG));
    image.setAttribute("alt", ensureString(item.altText, "Image"));
    image.setAttribute("loading", "lazy");

    image.onerror = () => {
      if (image.src !== FALLBACK_IMG) {
        image.src = FALLBACK_IMG;
        image.alt = "Image not available";
      }
    };

    const paragraph = document.createElement("p");
    paragraph.textContent = ensureString(
      item.text,
      "No description available."
    );

    // Button
    const button = document.createElement("button");
    button.textContent = "Learn More";
    button.classList.add("card-btn");
    button.addEventListener("click", () => {
      alert(`You selected: ${item.title}`);
    });

    article.appendChild(header);
    article.appendChild(image);
    article.appendChild(paragraph);
    article.appendChild(button);

    frag.appendChild(article);
  });

  container.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", () => {
  createHeader();
  generateArticles(contentArray);
});
