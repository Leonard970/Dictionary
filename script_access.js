if (sessionStorage.getItem("loginSDK") !== "true") {
    window.location.replace("index.html");
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