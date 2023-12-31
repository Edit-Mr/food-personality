let currentIndex = 0;
let sentTimes = 0;
const itemsContainer = document.querySelector(".items");
let itemDivs;
const backwardButton = document.querySelector("button[onclick='backward()']");
const forwardButton = document.querySelector("button[onclick='foward()']");
const current = document.querySelector(".current");

const a = () => {
    document.querySelector(".fei").classList.toggle("on");
}

function backward() {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToCurrentIndex();
    }
}

function foward() {
    if (currentIndex < itemDivs.length) {
        currentIndex++;
        scrollToCurrentIndex();
    }
}
const hideButton = () => {
    current.innerText = currentIndex < 12 ? `${currentIndex + 1}/12` : "";
    if (currentIndex === 0) backwardButton.style.opacity = "0";
    else backwardButton.style.opacity = "1";
    if (currentIndex === itemDivs.length - 1) forwardButton.style.opacity = "0";
    else {
        forwardButton.style.opacity = "1";
        forwardButton.disabled = !(document.getElementById("b" + (11 - currentIndex) + "a").classList.contains("selected") || document.getElementById("b" + (11 - currentIndex) + "b").classList.contains("selected"))
    }
}
function scrollToCurrentIndex() {
    const itemWidth = itemDivs[currentIndex].offsetWidth;
    const scrollPosition = itemWidth * currentIndex;
    itemsContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
    hideButton();
}

itemsContainer.addEventListener("scroll", function () {
    currentIndex = Math.round(itemsContainer.scrollLeft / itemDivs[0].offsetWidth);
    hideButton();
});

const questions = {
    "有個傳銷人員跑來市場調查，他問你喜歡喝雪碧還是可樂，你會回...": [
        "雪碧。",
        "可樂。", 0],
    "你在這個城市認識了個曖昧對象，對方邀請你去看電影，你會想看...": [
        "汪汪隊立大功：超級大電影。",
        "奧本海默。", 1],
    "天空刮起暴風，你隱約聽到有類似鳥鳴的聲音，這是...": [
        "超級巨鳥。",
        "叫聲像鳥的蟾蜍。", 2],
    "突然有三個男人將你圍住，他們開始圍圈跳舞唱歌，歌頌著你的到來...": [
        "我絕對要告他們性騷擾。",
        "哈哈哈太有意思了，太有意思了。", 3],
    "路上出現一位老畫家，他覺得很酷，希望他幫你畫張肖像且會展覽在國家美術館…": [
        "新奇的體驗，想留下來看成品。",
        "什麼鬼，我的臉沒那麼藝術吧。", 4],
    "一輛卡車從便利商店裡開出來撞向你，但即時煞住了，你會…": [
        "嚇到哭。",
        "大罵他。", 5],
    "章魚教領袖向你傳教，每週都要去教會但一個小時就有500塊，你會...": [
        "嚴正的拒絕，我不會相信一個章魚的話。",
        "委婉的拒絕，時間寶貴，而且我會吃章魚燒。", 6],
    "一位身體不便的老婦人被掉落的棉被壓住了，此時你會...": [
        "幫忙，老人難免需要幫忙。",
        "不理他，我有更重要的事。", 7],
    "一位老翁在講陳志忠參選的故事，旁邊的阿姨在rap battle…": [
        "我想和阿姨討論怎麼寫flow比較帥。",
        "我更想了解陳致中的故事。", 8],
    "有位少年正在施展疑似毀滅世界的咒語，你會…": [
        "雖然知道大概是假的，但我還是想打他一頓。",
        "快步離開，不想靠近這個瘋子。", 9],
    "一位全身裸體的人面青蛙仙人請你去他家避雨你會…": [
        "會，如果長得好看的話。",
        "不會，感覺會被仙人跳。", 10],
    "一張充滿文字白紙飄向你，你覺得是…": [
        "泳慶房屋的廣告。",
        "音樂會的門票。", 11],
    "有兩輛車可以選擇，其中一輛車坐了很多雞，另一輛卻空無一物，你會選擇…": [
        "有很多雞的車。",
        "空無一人的車。", 12],
}

const leftElement = document.getElementById("left");

const start = () => {
    document.getElementById("start").classList.add("too");
    const ahhhh = document.querySelector(".ahhhh");
    const keysArray = Object.keys(questions);
    const selectedKeys = [];
    while (selectedKeys.length < 12) {
        const randomIndex = getRandomIndex(keysArray.length)
        const randomKey = keysArray[randomIndex];
        if (!selectedKeys.includes(randomKey)) selectedKeys.push(randomKey);
    }
    for (let i = 0; i < selectedKeys.length; i++) {
        var divElement = document.createElement("div");
        divElement.innerHTML = `<h4>${selectedKeys[i]}</h4>
        <button id="b${i}a" onclick="select(${i}, 1)" class="q${questions[selectedKeys[i]][2]}">${questions[selectedKeys[i]][0]}</button><button id="b${i}b" onclick="select(${i},0)">${questions[selectedKeys[i]][1]}</button>`
        leftElement.insertAdjacentElement("afterend", divElement);
    }
    itemDivs = document.querySelectorAll(".items div");
    const randomIndex1 = getRandomIndex(itemDivs.length - 1);
    let randomIndex2 = getRandomIndex(itemDivs.length - 1);
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = getRandomIndex(itemDivs.length - 1);
    }
    itemDivs[randomIndex1].innerHTML = `<h4>你在飯店裡感覺很無聊，這時你會...</h4><button class="what" id="b${11 - randomIndex1}a" onclick="select(${11 - randomIndex1}, 1)" class="q13">看電影、閱讀小說或欣賞藝術作品。</button><button id="b${11 - randomIndex1}b" onclick="select(${11 - randomIndex1},0)">研究新知識、進行邏輯思考或解決問題。</button>`;
    itemDivs[randomIndex2].innerHTML = `<h4>走進了一個酒吧，裡面的人想和你聊天，這時你會...</h4><button class="the" id="b${11 - randomIndex2}a" onclick="select(${11 - randomIndex2}, 1)" class="q14">主動與他人交談，分享生活趣事或情感經歷。</button><button id="b${11 - randomIndex2}b" onclick="select(${11 - randomIndex2},0)">聆聽他人的想法，進行深度討論或探討具體主題。</button>`;
    const randomDiv2 = itemDivs[randomIndex2];

    scrollToCurrentIndex();
    ahhhh.innerText = "."
    setTimeout(function () {
        ahhhh.innerText = ".."
    }, 1000);
    setTimeout(function () {
        ahhhh.innerText = "..."
    }, 1500);
    setTimeout(function () {
        document.getElementById("start").classList.remove("too");
        document.getElementById("start").classList.add("started");
    }, 2000);
}

const select = (e, b) => {
    document.getElementById(`b${e}a`).classList.toggle("selected", b);
    document.getElementById(`b${e}b`).classList.toggle("selected", !b);
    foward()
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
let user = "";
const resultPage = document.getElementById("result");
const sendTo = (url) => {
    var delay = 0;
    sentTimes++;
    if (sentTimes === 1) {
        resultPage.innerHTML = `<h4 class="loading">分析中<br>太有意思了</h4>`;
    }
    else if (sentTimes > 2) {
        resultPage.innerHTML = `<h4 class="loading">同時太多人了，5秒後重試第${sentTimes}次</h4>`;
        delay = 5000;
    }
    console.log(delay);
    setTimeout(function () {
        resultPage.innerHTML = `<h4 class="loading">分析中</h4>`;
        var domain = sentTimes > 1 ? "https://script.google.com/macros/s/AKfycbyE3M7Cv434c6JhT-415IUA1pWaUi8w1OP8vom62txO8Pcof3eLta3_DISRUbFEa55qlg/exec?mode=form&" : "https://script.google.com/macros/s/AKfycbyQmYIJHvA2ZUHNAorgn3NAvkLbM1XRYEWQZWcteB08u3QvFXXx8z2XUleUhk-7CZ-e/exec?mode=form&";
        fetch(domain + url)
            .then(response => response.json())
            .then(response => {
                var text = response.message;
                resultPage.innerHTML = `<div class="wrap"><img id="image" src="/img/${text}.webp" alt="你是${text}">
            <canvas id="canvas"></canvas><div class="container"><a id="download-button"></a><p id="download-text">長按以下載圖片</p><h2>你覺得有多準</h2>
                <input type="range" id="rangeInput" min="0" max="10" step="1" value="10">
                <span id="output">10</span>
                <button onclick="feedback()" id="feedback">提交</button><a href="/credit" class="credit">@2023 food-personality.com<br>製作人員</a></div></div>`;
                const image = document.getElementById("image");
                const canvas = document.getElementById("canvas");
                var finished = false;
                image.onload = function () {
                    if (finished) return;
                    finished = true;
                    const ctx = canvas.getContext("2d");
                    canvas.width = 1080;
                    canvas.height = 1920;
                    ctx.drawImage(image, 0, 0, 1080, 1920);
                    ctx.font = `bold 70px system-ui`;
                    ctx.fillStyle = "#000";
                    ctx.fillText(user, 150, 370);
                    const imageWithText = new Image();
                    imageWithText.src = canvas.toDataURL("image/png");
                    image.src = imageWithText.src;
                    document.querySelector(".container").style.display = "flex";
                    if (!/(iPhone|iPad)/.test(navigator.userAgent)) {
                        const downloadLink = document.getElementById("download-button");
                        downloadLink.href = imageWithText.src;
                        downloadLink.download = user + "的食物探悉.png";
                        downloadLink.innerText = "下載圖片";
                        document.getElementById("download-text").innerText = navigator.userAgent.includes("Win") ? "亦可右鍵下載圖片" : "亦可長按下載圖片";
                        document.getElementById("download-text").classList.add("small");
                        const rangeInput = document.getElementById('rangeInput');
                        const output = document.getElementById('output');
                    } else document.getElementById("download-button").style.display = "none";
                    rangeInput.addEventListener('input', function () {
                        output.textContent = rangeInput.value;
                    });
                    rangeInput.addEventListener('touchmove', function () {
                        output.textContent = rangeInput.value;
                    });
                }
            })
            .catch(function (error) {
                sendTo(url);
                console.warn(error)
            });
    }, delay)
}
const end = () => {
    user = document.getElementById("name").value;
    if (user === "") {
        alert("你爸媽有給你取名子吧?至少取個陳家豪吧?");
        return;
    }
    let allAns = [];
    resultPage.innerHTML = `<h4 class="loading">分析中</h4>`;
    document.getElementById("start").classList.add("end");
    document.getElementById("start").classList.remove("started");
    const what = 0 + document.querySelector(".what").classList.contains("selected");
    const the = 0 + document.querySelector(".the").classList.contains("selected");
    let a = 0;
    var pass = "okay";
    var desiredClass;
    for (let i = 0; i < 12; i++) {
        var aList = document.getElementById(`b${i}a`).classList;
        for (var ii = 0; ii < aList.length; ii++) {
            if (aList[ii].startsWith('q')) {
                desiredClass = aList[ii].slice(1);
                break;
            }
        }
        if (aList.contains("selected")) {
            a++;
            allAns[desiredClass] = "A";
        }
        else {
            allAns[desiredClass] = "B";
            if (!document.getElementById(`b${i}b`).classList.contains("selected")) pass = i;
        }
    }
    if (pass !== "okay") {
        alert(`請回答完第${12 - pass}題`);
        document.getElementById("start").classList.remove("end");
        document.getElementById("start").classList.add("started");
        return;
    }
    console.log(allAns);
    if (user == "蘇裔非") document.querySelector(".fei").classList.add("on");
    let url = `name=${user}&userAgent=${navigator.userAgent}&what=${what}&the=${the}&a=${a}&allAns=${allAns}`;
    sendTo(url);
}

const feedback = () => {
    var feedback = document.getElementById("feedback");
    feedback.innerText = "提交中";
    feedback.disabled = true;
    const url = `https://script.google.com/macros/s/AKfycbyQmYIJHvA2ZUHNAorgn3NAvkLbM1XRYEWQZWcteB08u3QvFXXx8z2XUleUhk-7CZ-e/exec?mode=score&score=${document.getElementById("rangeInput").value}&name=${user}&userAgent=${navigator.userAgent}`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            feedback.innerText = "提交成功，感謝您的參與";
        })
        .catch(function (error) {
            alert("錯誤，請再試一次: " + error)
            feedback.disabled = false;
            feedback.innerText = "提交";
        });
}

if (Math.random() < 1 / 500) {
    document.querySelector(".fei").classList.add("on");
} else {
    console.log("運氣不是很好喔");
}

document.getElementById("name").addEventListener("input", function () {
    var full = this.value.match(/[^\x00-\x80]/g);
    if (this.value.length + full.length > 12) this.value = this.value.slice(0, this.value.length - 1);
})