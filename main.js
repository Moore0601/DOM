// querySelector
var listItem = document.querySelector("li")

console.log(listItem)

var header = document.querySelector("h1")

console.log(header)

var para = document.querySelector("p")

console.log(para)

var headerThird = document.querySelector("h3")

console.log(headerThird)

var listItemX = document.querySelectorAll("li")

console.log(listItemX)

var moore = document.getElementById("dom-list")

console.log(moore)

var moores = document.getElementsByClassName('domList')

console.log(moores)

var lmao = document.getElementsByTagName('h3')

console.log(lmao)

var audioTag = document.querySelector('audio')

console.log(audioTag)

var audioAttribute = audioTag.getAttribute('controls')
console.log(audioAttribute)

audioTag.setAttribute('controls', 'true')

var videoTag = document.querySelector('video')

console.log(videoTag)

var videoAttribute = videoTag.getAttribute('controls')
console.log(videoAttribute)

videoTag.setAttribute('controls', 'true')