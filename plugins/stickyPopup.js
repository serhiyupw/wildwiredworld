// plugins/stickyPopup.js

// Define your sticker content and logic here
const stickerContent = `
<div id="sticky-popupcont">
  <div id="sticky-popup">
    <p>A tip: save the passwords for the correlating environments (or take photos of the banners) as you find them around the park! <br/> This way, you can also play on your desktop at home. <br/> It's the same https://www.wildwired.world/ link.</p>
    <button id="close-sticky-popup">Close</button>
  </div>
</div>
`;

// Check if the current route is the home page
const isHomePage = () => window.location.pathname === '/home'; // Adjust the path as needed

// Append the sticker to the body only on the home page
if (isHomePage()) {
  const stickerContainer = document.createElement('div');
  stickerContainer.innerHTML = stickerContent;
  document.body.appendChild(stickerContainer);

  // Close the sticker when the button is clicked
  document.getElementById('close-sticky-popup').addEventListener('click', () => {
    stickerContainer.style.display = 'none';
  });
}

export default () => {};
