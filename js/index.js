function showCopyright() {
  var NewPopup = document.createElement("div");
  var NewWrapper = document.createElement("div");
  NewPopup.innerHTML = `<h3>Copyright</h3>
  Icons by Flaticon.com, from various users:
  <br>
  <ul>
    <li>Sittipat Tojarean</li>
    <li>Graphiqa</li>
  </ul>`;
  NewPopup.setAttribute("style", `
  position: fixed;
  width: calc(100% / 3);
  height: calc(100% / 3);
  top: calc(100% / 3);
  left: calc(100% / 3);
  z-index: 65538;
  background: var(--colorScheme3);
  `);

  NewWrapper.setAttribute("style", `
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000D0;
    z-index: 65537;
    border-radius: 0;
  `);
  NewWrapper.onclick = function(event) {
    NewPopup.remove();
    NewWrapper.remove();
  };

  document.body.appendChild(NewWrapper)
  document.body.appendChild(NewPopup);
}