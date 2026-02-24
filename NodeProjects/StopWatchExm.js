function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function StopWatch() {
    let i = 0;
    while (i<21) {
        console.clear();
        console.log("STOPWATCH STARTED:\n");
        console.log("⏳",i,"seconds");
        await sleep(1000);
        i++;
    }
    console.log("\nSTOPWATCH FINISHED:\n");
}

StopWatch();