function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('Hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('Hello'.toLowerCase())
}

var string = "i love you, grandma."

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return ("I can't hear you!")
  }
}