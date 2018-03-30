// Description:
//   Example scripts for you to examine and try out.
//
// Commands:
//   hubot light <on/オン/つけて/off/オフ/けして/消して> - 電気をつけたり消したり
//   hubot heater <on/オン/つけて/off/オフ/けして/消して> - 暖房操作
//   hubot cooler <on/オン/つけて/off/オフ/けして/消して> - 冷房操作
//   hubot degree <up/上げて/あげて/down/下げて/さげて> - 温度の上下で操作
//   hubot degree <middle/default/デフォルト/普通/真ん中/ふつう/まんなか> - default
//   hubot degree <upper/高め/高くして/たかめ/たかくして> - 最高値を直接指定
//   hubot degree <lower/低め/低くして/ひくめ/ひくくして> - 最低値を直接指定

const doOnMessages = ["on", "オン", "つけて"];
const doOffMessages = ["off", "オフ", "けして", "消して"];
const doUpDegreeMessages = ["up", "上げて", "あげて"];
const doDownDegreeMessages = ["down", "下げて", "さげて"];
const heaterDegrees = { lower: "18", middle: "20", upper: "22" };
const coolerDegrees = { lower: "26", middle: "28", upper: "30" };
let degreeStatus = "middle";
let acStatus = "off";
const doChangeUpperDegreeMessages = ["upper", "高め", "高くして", "たかめ", "たかくして"];
const doChangeMiddleDegreeMessages = ["middle", "普通", "真ん中", "ふつう", "まんなか"];
const doChangeLowerDegreeMessages = ["lower", "低め", "低くして", "ひくめ", "ひくくして"];

module.exports = function(robot) {
  robot.respond(/light (.*)/i, function(msg){
    let action = msg.match[1].replace(/\s+/g, "");
    if ( doOnMessages.indexOf(action) >= 0 ) {
      msg.send("light on");
    } else if ( doOffMessages.indexOf(action) >= 0 ) {
      msg.send("light off");
    } else {
      msg.reply("I could not understand the order.");
    }

  });

  robot.respond(/heater (.*)/i, function(msg){
    let action = msg.match[1].replace(/\s+/g, "");
    if ( doOnMessages.indexOf(action) >= 0 ) {
      acStatus = "heater";
      degreeStatus = "middle";
      msg.send("heater on");
    } else if ( doOffMessages.indexOf(action) >= 0 ) {
      acStatus = "off";
      msg.send("heater off");
    } else {
      msg.reply("I could not understand the order.");
    }

  });

  robot.respond(/cooler (.*)/i, function(msg){
    let action = msg.match[1].replace(/\s+/g, "");
    if ( doOnMessages.indexOf(action) >= 0 ) {
      acStatus = "cooler";
      degreeStatus = "middle";
      msg.send("cooler on");
    } else if ( doOffMessages.indexOf(action) >= 0 ) {
      acStatus = "off";
      msg.send("cooler off");
    } else {
      msg.reply("I could not understand the order.");
    }
  });

  robot.respond(/degree (.*)/i, function(msg){
    let action = msg.match[1].replace(/\s+/g, "");
    if ( doUpDegreeMessages.indexOf(action) >= 0 ) {
      msg.send("light on");
    } else if ( doDownDegreeMessages.indexOf(action) >= 0 ) {
      acStatus = "off";
      msg.send("light off");
    } else {
      msg.reply("I could not understand the order.");
    }
  });

};
