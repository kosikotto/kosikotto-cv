const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

if (isFirefox) {
  document.documentElement.classList.add("firefoxBrowser");
} else {
  document.documentElement.classList.add("nonFirefoxBrowser");
}