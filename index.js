const string = "Hello"
function shout(string) {
    return "Hello".toUpperCase();   
}
"Hello".toUpperCase();
console.log(shout(string))


const whisperString = "Hello"
function whisper(string) {
    return "Hello".toLowerCase();
}
"Hello".toLowerCase();
console.log(whisper(string))


function logShout(string) {
    console.log(string.toUpperCase())
}
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase())
}
logWhisper("spy");

function sayHiToHeadphonedRoommate (string) {
    if ( string === string.toLowerCase()) {
      return "I can't hear you!"
    }
    else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!") {
      return "I would love to!"
    }
}












