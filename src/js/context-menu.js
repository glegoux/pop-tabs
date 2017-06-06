(function () {

    'use strict';

    chrome.contextMenus.removeAll();

    chrome.contextMenus.create({
        id: "merge-all-windows",
        title: "Merge all windows       Ctrl+Shift+U",
        contexts: ["page_action"],
        onclick: function () {
            Main.mergeAllWindows();
        }
    });

}());
