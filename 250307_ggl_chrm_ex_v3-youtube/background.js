chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
            let newIndex;
            if (request.action === "next_tab") {
                newIndex = (activeTab[0].index + 1) % tabs.length;
            } else if (request.action === "previous_tab") {
                newIndex = (activeTab[0].index - 1 + tabs.length) % tabs.length;
            } else {
                return;
            }
            chrome.tabs.update(tabs[newIndex].id, { active: true });
        });
    });
});
