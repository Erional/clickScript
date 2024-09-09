function clickElementByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const element = result.singleNodeValue;
    if (element) {
        element.click();
        console.log('Clicked element.');
    } else {
        console.log('Element not found!');
    }
}

function startClicking(xpath) {
    let clickCount = 0;
    const clickInterval = setInterval(function() {
        clickElementByXPath(xpath);
        clickCount++;

        if (clickCount >= 2) {  // 点击 30 次后停止
            clearInterval(clickInterval);
            console.log('Pausing for 5 seconds...');

            setTimeout(function() {
                console.log('Resuming clicking...');
                startClicking(xpath);  // 休眠 15 秒后重新开始
            }, 30000);  // 15000 毫秒 = 15 秒

            clickCount = 0;  // 重置计数器
        }
    }, 1000);  // 每秒点击一次
}

// 开始点击指定的 XPath 元素
startClicking('//div[@id="live-control-goods-list-container"]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/button[1]');  // 将此 XPath 替换为实际的 XPath