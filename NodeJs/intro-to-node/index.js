//jshint esversion:6

console.log("i am here");

const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");