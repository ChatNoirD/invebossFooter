const $telegBtn = document.querySelector('#telegBtn');
const $mailBtn = document.querySelector('#mailBtn');
// Including listeners to Telegram and e-mail submit buttons
$telegBtn.addEventListener('mouseenter', function(event) {    event.stopPropagation();    event.target.classList.add('hover_btn');});
$telegBtn.removeEventListener('mouseenter', function(event) {    event.target.classList.add('hover_btn');});
$mailBtn.addEventListener('mouseenter', function(event) {    event.stopPropagation();    event.target.classList.add('hover_btn');});
$mailBtn.removeEventListener('mouseenter', function(event) {    event.target.classList.add('hhover_btn');});

$telegBtn.addEventListener('mouseleave', function(event) {    event.stopPropagation();    event.target.classList.remove('hover_btn');});
$telegBtn.removeEventListener('mouseleave', function(event) {    event.target.classList.remove('hover_btn');});
$mailBtn.addEventListener('mouseleave', function(event) {    event.stopPropagation();    event.target.classList.remove('hover_btn');});
$mailBtn.removeEventListener('mouseleave', function(event) {    event.target.classList.remove('hover_btn');});
$telegBtn.addEventListener('mousedown', function(event) {    event.stopPropagation();    event.target.classList.add('clicked_btn');});
$telegBtn.removeEventListener('mousedown', function(event) {    event.target.classList.add('clicked_btn');});
$telegBtn.addEventListener('mouseup', function(event) {    event.stopPropagation();    event.target.classList.remove('clicked_btn');});
$telegBtn.removeEventListener('mouseup', function(event) {    event.target.classList.remove('clicked_btn');});
$mailBtn.addEventListener('mousedown', function(event) {    event.stopPropagation();    event.target.classList.add('clicked_btn');});
$mailBtn.removeEventListener('mousedown', function(event) {    event.target.classList.add('clicked_btn');});
$mailBtn.addEventListener('mouseup', function(event) {    event.stopPropagation();    event.target.classList.remove('clicked_btn');});
$mailBtn.removeEventListener('mouseup', function(event) {    event.target.classList.remove('clicked_btn');});

const mailInp = document.querySelector('#footEmail');
mailInp.addEventListener('input', function(event) {
  let inpText = event.target.value;
  if (inpText.length <= 19) {
      event.target.style.fontSize = 14 + "px";
  } else {
      event.target.style.fontSize = 12 + "px";
  }
});
mailInp.removeEventListener('input', function(event) {
    let inpText = event.target.value;
    if (inpText.length <= 19) {
        event.target.style.fontSize = 14 + "px";
    } else {
        event.target.style.fontSize = 12 + "px";
    }
  });