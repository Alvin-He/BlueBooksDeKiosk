
// custome implenmentaions for enterprise apis that can't be used with out enrollment

chrome.enterprise = new Object; 
chrome.enterprise.deviceAttributes = new Object;
chrome.enterprise.hardwarePlatform = new Object;

function generateTemplateFun(defaultValue) {
    return function (callback = null) {
        if (callback){
            callback(defaultValue);
        } else {
            return new Promise(
                (resolve, reject) => {
                    resolve(defaultValue);
                }
            ); 
        }
    }
}

chrome.enterprise.deviceAttributes.getDeviceAssetId = generateTemplateFun('1789');
chrome.enterprise.deviceAttributes.getDeviceHostname = generateTemplateFun('sfusd.edu');
chrome.enterprise.deviceAttributes.getDeviceSerialNumber = generateTemplateFun('9840516475198'); // RNG
chrome.enterprise.deviceAttributes.getDirectoryDeviceId = generateTemplateFun('bd9923ad-c8a4-4c70-9a8a-a471048bfdd9')
chrome.enterprise.deviceAttributes.getDeviceAnnotatedLocation = generateTemplateFun('');

chrome.enterprise.hardwarePlatform.getHardwarePlatformInfo = function (callback = null) {
    let info = new Object();
    info.manufacturer = 'ASUS'; 
    info.model = 'ASUS ChromeBit CS10';
}

