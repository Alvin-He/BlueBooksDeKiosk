
// let scriptElement = document.createElement('script');

// scriptElement.innerHTML = `
let scriptText = `
;
console.log('Run Time override load start');
if (chrome.runtime && chrome.runtime.sendMessage && chrome.runtime.connect) {
    function generateFunctionOverride(origionalRef) {
        return function(...args) {
            console.log('extension messaging called');
            console.log(args);  
            if (args[0] == "joaneffahikmmipmidpkeedopejmhbbm") {
                args[0] = "olhfiiijdacnibdopjidfinbdefocnpj"
            }
            return origionalRef(...args);
        }
    }

    let sendMessageRef = chrome.runtime.sendMessage;
    let connectRef = chrome.runtime.connect; 

    chrome.runtime.sendMessage = generateFunctionOverride(sendMessageRef); 
    chrome.runtime.connect = generateFunctionOverride(connectRef);
}
console.log('Run Time Override load finished');
// let oldChrome = chrome; 
// chrome = new Proxy(oldChrome, {
//     get(target,prop, receiver) {
//         debugger; 
//         return RV || target[prop]; 
//     }
// }); 
`;

// actual magic 
// imagine just going around a browser security policy 
new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type !== 'childList') continue;
        for (let i = 0; i < mutation.addedNodes.length; i++) {
            let node = mutation.addedNodes[i]; 
            if (node.nodeName == 'SCRIPT') {
                node.innerHTML = node.innerHTML + scriptText; 
                observer.disconnect();
                return;
            }
        }
    }
}).observe(document.getElementsByTagName('html')[0], { childList: true, subtree: true })