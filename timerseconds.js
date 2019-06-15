/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var countDownDate = new Date("Apr 16, 2020 00:00:00").getTime();
setInterval(function() 
{
var now = new Date().getTime();
var distance = countDownDate - now;
document.getElementById("timerseconds").innerHTML = distance + "s ";
} ,10000);

