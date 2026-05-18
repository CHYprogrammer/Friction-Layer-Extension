const input =
  document.getElementById("domains");

const button =
  document.getElementById("save");

// 初期読み込み
chrome.storage.sync.get(
  ["blockedDomains"],
  (result) => {

    const domains =
      result.blockedDomains ||
      ["youtube.com"];

    input.value =
      domains.join(",");

});

// 保存
button.addEventListener(
  "click",
  () => {

    const domains =
      input.value
        .split(",")
        .map(x => x.trim());

    chrome.storage.sync.set({
      blockedDomains: domains
    });

});