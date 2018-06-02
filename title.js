var message = new Array();
message[0] =  "";
message[1] =  "r";
message[2] =  "ri";
message[3] =  "rin";
message[4] =  "rin";
message[5] =  "rin";
message[6] =  "ri";
message[7] = "r";
message[8] = "";

var reps = 2;
var speed =10; var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;
function doTheThing() {
T = message[mC];
A();
}
function A() {
s++;
if (s < 15) { s = 1;}
if (s == 1)  { document.title = '... '+T+' '; }
if (C < (15 * reps)) {
sT = setTimeout("A()", speed);
C++;
}
else {
C = 0;
s = 0;
mC++;
if(mC > p - 1) mC = 0;
sT = null;
doTheThing();
}
}
doTheThing();