document.getElementById("nextTab").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "next_tab" });
});

document.getElementById("prevTab").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "previous_tab" });
});
