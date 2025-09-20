// home.js

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// ---------- Masonry placeholders (8 tiles) ----------
// Replace each "" with the local image file names
const IG_TILES = [
  "IMG_6770.jpg",
  "IMG_6771.jpg",
  "IMG_6772.jpg",
  "IMG_6773.jpg",
  "IMG_6774.jpg",
  "IMG_6775.jpg",
  "IMG_6776.jpg",
  "IMG_6777.jpg"
];

// Heights used only for grey placeholders (ignored when an image exists)
const PLACEHOLDER_HEIGHTS = [220, 280, 190, 240, 320, 210, 260, 230];

const masonry = document.getElementById('ig-masonry');
if (masonry) {
  IG_TILES.slice(0,8).forEach((src, i) => {
    const pin = document.createElement('div');
    pin.className = 'ig-pin';

    const link = document.createElement('a');
    link.href = 'https://instagram.com/pilatesbyari';
    link.target = '_blank';
    link.rel = 'noopener';

    if (src && src.trim() !== "") {
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.alt = '';
      img.src = src;   // uses local file in same folder
      img.onerror = () => {
        pin.style.height = PLACEHOLDER_HEIGHTS[i % PLACEHOLDER_HEIGHTS.length] + 'px';
      };
      link.appendChild(img);
    } else {
      pin.style.height = PLACEHOLDER_HEIGHTS[i % PLACEHOLDER_HEIGHTS.length] + 'px';
    }

    pin.appendChild(link);
    masonry.appendChild(pin);
  });
}