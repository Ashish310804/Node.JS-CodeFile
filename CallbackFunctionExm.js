//Callback Function Example

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched after 2 seconds";
        callback(data);
    }, 2000);   

}

function displayData(data) {
    console.log(data);
}   

fetchData(displayData);


                                   