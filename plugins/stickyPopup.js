// plugins/stickyPopup.js

// Define your sticker content and logic here
const stickerContent = `
<div id="sticky-popupcont">
  <div id="sticky-popup">
    <p>You can also play at home on desktop now that you have the magic passwords!</p>
    <button id="close-sticky-popup">Close</button>
  </div>
</div>
`;

// Append the sticker to the body
const stickerContainer = document.createElement('div');
stickerContainer.innerHTML = stickerContent;
document.body.appendChild(stickerContainer);

// Close the sticker when the button is clicked
document.getElementById('close-sticky-popup').addEventListener('click', () => {
  stickerContainer.style.display = 'none';
});

export default () => {};
