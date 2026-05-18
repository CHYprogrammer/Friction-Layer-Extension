if (window === window.top) {

  const hostname = window.location.hostname;

  if (hostname.includes("youtube.com")) {

    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";

    overlay.style.background = "black";
    overlay.style.color = "white";

    overlay.style.fontFamily = "monospace";
    overlay.style.fontSize = "24px";

    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    overlay.style.zIndex = "999999";

    document.documentElement.appendChild(overlay);

    let count = 21;

    overlay.textContent = count;

    const timer = setInterval(() => {

      count--;

      overlay.textContent = count;

      if (count <= 0) {
        clearInterval(timer);
        overlay.remove();
      }

    }, 1000);

  }

}
