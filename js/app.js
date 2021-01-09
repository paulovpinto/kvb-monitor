var base = "https://kvb-api-server.herokuapp.com"

function getData(){
    getTime()
    getStationName()
    getDepartures()
}

function getStationName() {
    fetch(base + "/stations/173").then(function(response) {
        response.json().then(function(json) {
           const h1 = document.querySelector('body h1');
           h1.innerHTML = json.name
        });
    });
  }

function getDepartures(){
    fetch(base + "/stations/173/departures").then(function(response) {
        response.json().then(function(json) {           
            generateMonitor(json);
        });
    });
}

function generateMonitor(data) {
    let div = document.querySelector("div");
    for (let element of data) {
      let p = document.createElement("p");
      let text = document.createTextNode(element.line_id + " " + element.direction + " " + element.wait_time);
      p.appendChild(text);
      div.appendChild(p);
    }
  }

function getTime() {
    const p = document.querySelector('body p');
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var datetime = date+'   - '+time+ ' Uhr';
    p.append(datetime)

}