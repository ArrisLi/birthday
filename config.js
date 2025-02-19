// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我最爱的宝宝",
        "今天是你的生日",
        "也这是我们在一起的",
        "第一个生日",
        "这半年的时间",
        "过的很快",
        "我们有过笑有过泪",
        "有过苦也有过甜",
        "很幸运能够遇到你",
        "谢谢你带给我的快乐",
        "我们拥有了彼此",
        "原本空荡的心就满了",
        "我会一直陪着你",
        "一起过今后的每一个生日",
        "你说好不好呀我的宝儿～"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        // "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "->点我点我!",
        play: "音乐走起～",
        bannar_coming: "加点装饰",
        balloons_flying: "还少点东西？",
        cake_fadein: "来个蛋糕如何？",
        light_candle: "再来个蜡烛～",
        wish_message: "染二宝，生日快乐呀！",
        story: "我想对你说",
    }
};
