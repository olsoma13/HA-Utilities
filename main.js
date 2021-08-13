function callService(){
    var data = "{\r\n    \"entity_id\": \"light.attic_nook_overhead_2\",\r\n    \"brightness\": 50\r\n}";
    var localBearer = localStorage.getItem("bearer")
    var localURL = localStorage.getItem("url")

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState < 4)                         // while waiting response from server
            document.getElementById('status').innerHTML = "Loading...";
        else if (xhr.readyState === 4) {                // 4 = Response from server has been completely loaded.
            if (xhr.status == 200 && xhr.status < 300)  // http status between 200 to 299 are all successful
                document.getElementById('status').innerHTML = "success!";
            }
        }
    //xhr.addEventListener("readystatechange", function() {
    //if(this.readyState === 4) {
    //    console.log(this.responseText);
    //}
    //});

    xhr.open("POST", localURL);
    xhr.setRequestHeader("Authorization", localBearer);
    xhr.setRequestHeader("Content-Type", "text/plain");

    xhr.send(data);
}

function storeParams(){
    var aLocalURL = document.getElementById('url').value;
    var aLocalBearer = document.getElementById('bearer').value;
    
    window.localStorage.setItem("localURL",aLocalURL);
    window.localStorage.setItem("localBearer",aLocalBearer);
}

function closeTab(){ //closes the tab.
    window.close()
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

function onLoadActions(){
    return true
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("siteParams").onsubmit = storeParams
    document.getElementById("clearButton").onclick = clearStorage
}