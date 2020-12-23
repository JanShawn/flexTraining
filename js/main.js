// 對象
let lines = document.querySelector('.lines');
let closer = document.querySelector('.close');
// 事件
let mobileMenuHandler = function (e) {
  document.querySelector('.mobileMenu').style.display = (e.currentTarget.className == 'lines') ? "block" : "none";
}
// 監聽
lines.addEventListener('click', mobileMenuHandler, false);
closer.addEventListener('click', mobileMenuHandler, false);

