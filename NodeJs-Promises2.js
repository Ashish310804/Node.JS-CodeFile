// Async and Await Example for Promises

function getdata() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received after 2 seconds");
        }, 2000);
    });
}

async function processdata() {
    const result = await getdata();
    console.log(result);
}

processdata();




