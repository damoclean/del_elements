
function getCurrentTabId()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        if(tabs.length){
            chrome.tabs.executeScript(tabs[0].id,{file:'js/excute.js'})
        }
    });
}


