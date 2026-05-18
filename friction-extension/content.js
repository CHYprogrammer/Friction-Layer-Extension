if (window === window.top) {

  const hostname = window.location.hostname;

  if (hostname.includes("youtube.com")) {

    // overlay
    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";

    overlay.style.background = "black";

    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";

    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    overlay.style.zIndex = "2147483647";

    // progress bar
    const progress = document.createElement("div");

    progress.style.width = "400px";
    progress.style.height = "20px";

    progress.style.border = "1px solid white";

    // inner bar
    const fill = document.createElement("div");

    fill.style.width = "100%";
    fill.style.height = "100%";

    fill.style.background = "lime";

    progress.appendChild(fill);

    // message
    const message = document.createElement("div");

    message.textContent = "勉強してないお前の顔 ↑";

    message.style.color = "white";
    message.style.marginTop = "40px";

    message.style.fontSize = "24px";
    message.style.fontFamily = "monospace";

    overlay.appendChild(progress);
    overlay.appendChild(message);

    document.documentElement.appendChild(overlay);

    // timer
    const totalSeconds = 20;

    let elapsed = 0;

    const timer = setInterval(() => {

      elapsed++;

      const percent =
        100 - (elapsed / totalSeconds * 100);

      fill.style.width = percent + "%";

      if (elapsed >= totalSeconds) {

        clearInterval(timer);

        overlay.remove();

      }

    }, 1000);

  }

}
