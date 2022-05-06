var $user_name = document.querySelectorAll('input')

function onFocus(e) {
  e.target.parentElement.classList.add("on");
  console.log(e.target.value);

}

function onBlur(e) {
  if (e.target.value == "") {
    e.target.parentElement.classList.remove("on");
  }
}

for (i = 0; i < $user_name.length; i++) {
  $user_name[i].addEventListener('focus', onFocus);
  $user_name[i].addEventListener('blur', onBlur);
}