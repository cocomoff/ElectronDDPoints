'use strict';

const fs = require("fs");
const SVG = require("svg.js");
const readline = require("readline");
const holder = document.getElementById("holder");
const fileText = document.getElementById("text");

document.ondragover = document.ondrop = function(e) {
  e.preventDefault();
}

/** hoverエリアにドロップされた */
holder.ondrop = function (e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];

  // clear old draw example and preapre
  var svghtml = document.getElementById("svg");
  while (svghtml.lastChild) {
    svg.removeChild(svghtml.lastChild);
  }
  console.log(svghtml);
  var draw = SVG('svg').size(400, 400);
  var r = 10;

  // read local file
  var x = [], y = [];
  try {
    var rs = fs.createReadStream(file.path, "utf-8");
    var rl = readline.createInterface(rs, {});
    rl.on('line', function(line) {
      var sp = line.split(",");
      var x = sp[0], y = sp[1];
      draw.circle(r).attr({fill: "#f06"}).cx(x * 200 + 100).cy(y * 200 + 100);
    });
  } catch (err) {
    alert("Invalid file input");
    return false;
  }

  return false;
};
