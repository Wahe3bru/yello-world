//display today and tommorow, need to learn css & html niceness

var url1 = "http://muslimsalat.com/capetown/"
var times = "weekly";
var date = "/07-11-2016"
var url2 = "/false/5.json?key=5e502de485f8bcb103035818b584551d"
var url = url1 + times + /*date +*/ url2;
var solaahT;

function preload() {
  loadJSON(url, gotData, 'jsonp');
}

function setup() {
  createP("Todays prayer times")
  createP("Fajr: " + solaahT.items[0].fajr);
  createP("shurooq: " + solaahT.items[0].shurooq);
  createP("thuhr: " + solaahT.items[0].dhuhr);
  createP("asr: " + solaahT.items[0].asr);
  createP("maghrib: " + solaahT.items[0].maghrib);
  createP("isha: " + solaahT.items[0].isha);
  createP("Fajr: " + solaahT.items[1].fajr);
  createP("Tommorows prayer times")
  createP("shurooq: " + solaahT.items[1].shurooq);
  createP("thuhr: " + solaahT.items[1].dhuhr);
  createP("asr: " + solaahT.items[1].asr);
  createP("maghrib: " + solaahT.items[1].maghrib);
  createP("isha: " + solaahT.items[1].isha);
}

function gotData(data) {
  solaahT = data;
}
