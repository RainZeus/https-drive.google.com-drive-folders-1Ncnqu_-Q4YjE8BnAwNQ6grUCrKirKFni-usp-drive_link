const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let fontSizeNo = 18;
let fontSizeYes = 18;

noBtn.addEventListener('click', () => {
  fontSizeNo -= 2; // Decrease font size by 2 each time
  fontSizeYes += 2; // Increase font size by 2 each time
  
  noBtn.style.fontSize = `${fontSizeNo}px`;
  yesBtn.style.fontSize = `${fontSizeYes}px`;
});

yesBtn.addEventListener('click', () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>Yayyyyyyyy! Happy Valentine's Day!</h1>
      <img src="C:\Users\USER\Downloads\images.jpg">
</body>
</html>
">
    </div>
  `;
});
