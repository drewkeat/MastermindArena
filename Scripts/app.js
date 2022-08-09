import * as Ele from "./elements.js"

const appState = {
	colors: [ "palegreen", "paleturquoise", "palevioletred", "peachpuff", "green"
	]
}

const selectRandomColor=(ele)=>{
	let choiceNum = Math.floor(Math.random()*5)
	ele.css("backgroundColor", appState.colors[choiceNum])
}

Ele.board.load("./Fragments/board.html #board-inject")