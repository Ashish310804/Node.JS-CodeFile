// Traffic Light Simulation in Terminal

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function trafficLight() {
    while (true) {

        console.clear();
        console.log("🚦 TRAFFIC LIGHT SIMULATION:\n");
        console.log("🔴 RED LIGHT - STOP");
        await sleep(3000);

        console.clear();
        console.log("🚦 TRAFFIC LIGHT SIMULATION:\n");
        console.log("🟡 YELLOW LIGHT - READY");
        await sleep(2000);

        console.clear();
        console.log("🚦 TRAFFIC LIGHT SIMULATION:\n");
        console.log("🟢 GREEN LIGHT - GO");
        await sleep(3000);
    }
}

trafficLight();
