chrome.storage.sync.get(
  ["blockedDomains"],
  (result) => {

    // デフォルト設定
    const blocked =
      result.blockedDomains ||
      ["youtube.com"];

    const hostname =
      window.location.hostname;

    const matched =
      blocked.some(domain =>
        hostname.includes(domain)
      );

    // iframe除外 + 対象外サイトなら終了
    if (
      window !== window.top ||
      !matched
    ) {
      return;
    }

    // ===== overlay処理 =====

    const overlay =
      document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";

    overlay.style.width = "100vw";
    overlay.style.height = "100vh";

    overlay.style.background = "black";
    overlay.style.color = "white";

    overlay.style.fontFamily =
      "monospace";

    overlay.style.fontSize =
      "80px";

    overlay.style.display =
      "flex";

    overlay.style.justifyContent =
      "center";

    overlay.style.alignItems =
      "center";

    overlay.style.zIndex =
      "2147483647";

    document.documentElement
      .appendChild(overlay);

    let count = 20;

    overlay.textContent = count;

    const timer = setInterval(() => {

      count--;

      overlay.textContent = count;

      if (count <= 0) {

        clearInterval(timer);

        overlay.remove();

      }

    }, 1000);

});