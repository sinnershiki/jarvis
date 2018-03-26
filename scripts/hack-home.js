// Description:
//   Example scripts for you to examine and try out.
//
// Commands:
//   hubot light <on/off> - 電気をつけたり消したり
//   hubot heating <on/off/upper/middle/lower> - エアコン操作
//   hubot cooling <on/off/upper/middle/lower> - エアコン操作

module.exports = function(robot) {
  robot.respond(/light (.*)/i, function(msg){
    let action = msg.match[1];

  });

  robot.respond(/heater (on|off|upper|middle|lower)/i, function(msg){
    let action = msg.match[1];

  });

  robot.respond(/heater (on|off|upper|middle|lower)/i, function(msg){
    let action = msg.match[1];

  });
};
