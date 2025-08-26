Interactive Travel Cards — Dynamic DOM Manipulation Project
Live Site URL: https://antonina-kachusova.github.io/Interactive-Travel-Cards-Dynamic-DOM-Manipulation-Project/

A simple yet stylish HTML + CSS + JavaScript project that dynamically generates travel cards on a webpage.
The cards are created programmatically from an array of objects using DOM manipulation.

*** Features

Dynamic card generation (title, image, description, and button)

Responsive design with CSS Grid

Hover effects for better interactivity

"Learn More" button on each card with a JavaScript event handler

Mobile-friendly layout with media queries

Non-selectable UI elements (no accidental text/image selection)

🛠️ Technologies

HTML5 for structure

CSS3 (Flexbox/Grid, transitions, responsive design)

Vanilla JavaScript for DOM creation and event handling

⚙️ Technical Details

⚡ Efficient rendering: all cards are first added to a DocumentFragment and then inserted into the DOM in one batch (reducing reflows and improving performance).

Lazy loading: images use loading="lazy" to improve page load performance.

Fallback images: if an image fails to load, a placeholder is displayed instead.

Event handling: buttons are generated dynamically with attached click events.

User experience: text selection is disabled for decorative elements (header, images, buttons) to prevent accidental highlighting.

🧩 DOM manipulation methods used:

document.createElement() — create new elements (article, h3, img, p, button)

textContent — insert text content into elements

setAttribute() — set attributes like src, alt, loading

appendChild() — build element structure inside each card

document.createDocumentFragment() — batch insert multiple cards efficiently

addEventListener() — attach click events to buttons

📂 Project Structure
index.html # Main HTML file
styles.css # Styling and layout
script.js # Dynamic card generation
images/ # Image assets (mountains, sea, city, etc.)

*** How It Works

The script.js file contains an array of objects (contentArray) with data for each travel card:

title — card title

text — description

imagePath — path to the image

altText — alternative text for accessibility

JavaScript dynamically generates the header and all cards inside <main id="cards">.

Each card contains:

<h3> title

<img> image with alt and lazy loading

<p> description

<button> "Learn More" with a click event
