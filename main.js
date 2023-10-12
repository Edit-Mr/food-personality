let currentIndex = 0;
const itemsContainer = document.querySelector(".items");
let itemDivs;
const backwardButton = document.querySelector("button[onclick='backward()']");
const forwardButton = document.querySelector("button[onclick='foward()']");
function backward() {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToCurrentIndex();
    }
}

function foward() {
    if (currentIndex < itemDivs.length - 1) {
        currentIndex++;
        scrollToCurrentIndex();
    }
}
const hideButton = () => {
    if (currentIndex === 0) backwardButton.style.opacity = "0";
    else backwardButton.style.opacity = "1";
    if (currentIndex === itemDivs.length - 1) forwardButton.style.opacity = "0";
    else forwardButton.style.opacity = "1";

    forwardButton.disabled = !(document.getElementById("b" + (9 - currentIndex) + "a").classList.contains("selected") || document.getElementById("b" + (9 - currentIndex) + "b").classList.contains("selected"))
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
    "你在這個城市認識了個新的曖昧對象，這時對方邀請你去看電影，你會比較想看...": [
        "汪汪隊立大功：超級大電影。",
        "奧本海默。"],
    "突然，你看到了天空刮起暴風，這時隱約聽到有類似鳥鳴的聲音，你覺得會是...": [
        "超級巨鳥。",
        "叫聲像鳥的蟾蜍。"],
    "在路上走著走著，霎時，有三個男人將你圍住，他們開始圍圈跳舞唱歌，歌頌著你的到來，此時你會想...": [
        "（無言）我絕對要告他們性騷擾。",
        "哈哈哈太有意思了，太有意思了。"],
    "路上出現一位白髮蒼蒼的老畫家，他覺得你長的很酷，希望你駐足5小時並讓他幫你畫張肖像，而且會展覽在國家美術館。此時你會？": [
        "覺得這是十分新奇的體驗，想留下來看他最後完成的成品。",
        "什麼鬼，我的臉沒有那麼藝術吧。"],
    "一輛卡車從便利商店裡開出來撞向你，但即時煞住了，此時你會？": [
        "嚇到哭出來。",
        "大罵他怎麼這麼危險。"],
    "一位自稱章魚教領袖的傢伙向你傳教，希望你加入並且章魚教，每週禮拜八（因為章魚有八隻腳）都要去教會但去一個小時就給你888塊，你會回答...": [
        "嚴正的拒絕，你是無神論者，不會相信一個章魚的話。",
        "委婉的拒絕，說明你的時間寶貴，而且平常會吃章魚燒。"],
    "你看見了一位身體不便的老婦人在晾棉被，但因身材矮小被掉落的棉被壓住了，此時已經快要窒息，你會...": [
        "幫忙，老人難免需要幫忙。",
        "不理他，我有更重要的事。"],
    "你發現了一位老翁在講關於陳志忠參選的故事，但此時旁邊的阿姨在rap battle，你比較想參與哪邊的話題？": [
        " 我比較想和阿姨們討論怎麼寫flow比較帥。",
        "我更想了解陳致中的故事。"],
    "有位自稱會模仿的少年正在施展疑似毀滅世界的咒語，你會怎麼做？": [
        "雖然知道大概是假的，但為了確保世界不會毀滅，我還是趕快打他一頓。",
        "快步離開，不想靠近這個瘋子。"],
    "天氣驟變，這時一位全身裸體的人面青蛙仙人 邀請你去他家避雨你會答應嗎": [
        "會，如果長得好看的話。",
        "不會，感覺會被仙人跳，況且我不熟這地方。"],
    "一張上面充滿文字的白紙飄向你，你撿起了它，你覺得上面寫了什麼": [
        "泳慶房屋的廣告。上面有一個叉腰的房仲，長得非常討厭。",
        "音樂會的門票。截止日期在明天中午以前。"],
    "走著走著，終於走到了車站。你有兩輛車可以選擇，附近沒有任何告示牌表示何時發車，你也不知道任何一輛車什麼時候會啟動，但其中一輛車坐了很多雞，另一輛也亮著燈，但卻空無一物，這時你會搭上哪一輛車呢？": [
        "充滿雞的車。",
        "空無一人的車。"],
}
const leftElement = document.getElementById("left");
const start = () => {
    document.getElementById("start").classList.add("started");
    const keysArray = Object.keys(questions);
    const selectedKeys = [];
    while (selectedKeys.length < 10) {
        const randomIndex = Math.floor(Math.random() * keysArray.length);
        const randomKey = keysArray[randomIndex];
        if (!selectedKeys.includes(randomKey)) {
            selectedKeys.push(randomKey);
        }
    }

    for (let i = 0; i < selectedKeys.length; i++) {
        var divElement = document.createElement("div");
        divElement.innerHTML = `<h4>${selectedKeys[i]}</h4>
        <button id="b${i}a" onclick="select(${i}, 1)">${questions[selectedKeys[i]][0]}</button><button id="b${i}b" onclick="select(${i},0)">${questions[selectedKeys[i]][1]}</button>`
        leftElement.insertAdjacentElement("afterend", divElement);
    }
    itemDivs = document.querySelectorAll(".items div");
    //pick two random div
    
    const itemDivs = document.querySelectorAll(".items div");
const randomIndex1 = getRandomIndex();
let randomIndex2 = getRandomIndex(itemDivs.length);

// Make sure the two random indices are different
while (randomIndex2 === randomIndex1) {
    randomIndex2 = getRandomIndex(itemDivs.length);
}

// Now, you can access the selected divs using itemDivs[randomIndex1] and itemDivs[randomIndex2]
const randomDiv1 = itemDivs[randomIndex1];
const randomDiv2 = itemDivs[randomIndex2];

// You can now work with these two randomly selected divs as needed.

    
    
    scrollToCurrentIndex();
}

const select = (e, b) => {
    document.getElementById(`b${e}a`).classList.toggle("selected", b);
    document.getElementById(`b${e}b`).classList.toggle("selected", !b);
    foward()
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}