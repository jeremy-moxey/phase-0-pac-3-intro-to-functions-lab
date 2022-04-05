function shout(string) {
    const stringUpper = string.toUpperCase()
    return stringUpper
}

function whisper(string) {
    const stringLower = string.toLowerCase()
    return stringLower
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    switch (true) {
        case string === string.toLowerCase():
            return "I can't hear you!"
            break;
        case string === string.toUpperCase():
            return "YES INDEED!"
            break
        case string === "Let's have dinner together!":
            return "I would love to!"
            break

    }
}