var nums = require("./names");


var add = () => console.log( nums.num1+nums.num2);

var sub = ()=> console.log(nums.num1>nums.num2 ? nums.num1-nums.num2 : nums.num2-nums.num1);

add();
sub();