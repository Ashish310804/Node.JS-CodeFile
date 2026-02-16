function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function SongsLyrics(){
    const lyrics = [
        "Kuch Soch Ke Bola Hoga Tumne...",
        "Yeh Pyar Bhi Taula Hoga Tumne...",
        "Ab Na H Toh Firr Na Shii Dilbar...",
        "Iss Dil Ko Yeh Smjha Liya Humne..."
    ];
    for(let i = 0 ; i < lyrics.length ; i++){
                console.clear();
                console.log(lyrics[i]);
                await sleep(5000);
    }
};

SongsLyrics();