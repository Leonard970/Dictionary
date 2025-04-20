function login(){
  const inputPassword = document.getElementById("inpt1").value;
  const password = "Admin@leonard25";
  if (inputPassword === password) {
    window.location.href = "index2.html";
  } else {
    alert("Password Is not Correct!!")
  }
}
function isDesktopOrTabletButNotAndroid() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /Android/i.test(userAgent);
  const isMobile = /Mobi|Phone/i.test(userAgent);
  return !isAndroid && !isMobile;
}

if (isDesktopOrTabletButNotAndroid()) {
  document.body.style.display = "none";
  location.reload();
  alert("Desktop Detected!")
} else {
  console.log("Device is Android or mobile.");
}
