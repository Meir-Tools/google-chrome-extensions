(function() {
    if (document.getElementById("custom-tab-switcher")) return; // אם כבר קיים - לא להוסיף שוב

    // יצירת אלמנט תפריט
    let menu = document.createElement("div");
    menu.id = "custom-tab-switcher";
    menu.innerHTML = `
        <style>
            #custom-tab-switcher {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px;
                border-radius: 8px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            #custom-tab-switcher button {
                background: #ff9800;
                color: white;
                border: none;
                padding: 8px;
                cursor: pointer;
                border-radius: 5px;
            }
            #custom-tab-switcher button:hover {
                background: #e68900;
            }
        </style>
        <button id="prevTab">🔙 טאב קודם</button>
        <button id="nextTab">🔜 טאב הבא</button>
    `;

    document.body.appendChild(menu);

    // הוספת אירועים לכפתורים
    document.getElementById("prevTab").addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "previous_tab" });
    });

    document.getElementById("nextTab").addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "next_tab" });
    });
})();
