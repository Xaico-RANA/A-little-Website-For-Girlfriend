function showLoveMessage() {
    let messages = [
        "তুমি আমার জীবনের সবচেয়ে মূল্যবান মানুষ!❤️‍🩹",
        "আমি তোমাকে সারাজীবন ভালোবাসবো! ❤️‍🩹",
        "তোমার হাসি আমার পৃথিবী আলোকিত করে! 😊",
        "তুমি ছাড়া জীবন কল্পনা করাও অসম্ভব! ❤️"
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("loveMessage").innerText = randomMessage;
}
