var character=document.getElementById("character");
var block=document.getElementById("block");
var cl=character.classList;
var gameState="playing";
var scr=0;
alert('Tip:Press jump once and then use the space bar or the enter key to jump.')
function jump() {
		if(cl!="animate"){
	 	cl.add("animate")
	 	setTimeout(function(){
	 		cl.remove("animate")
	 	},500)
	 }
 if(gameState=="start"){
 	block.classList.add("blockSlide");
	 var checkDeath=setInterval(function(){
	 	var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	 	var blockRight=parseInt(window.getComputedStyle(block).getPropertyValue("right"));
	 	var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	 if(blockLeft<30&&blockLeft>0){
		 if(characterTop>105&&gameState=="start"){
			alert('You Lose and Press the replay button and start button to play again.');
			block.classList.remove("blockSlide");
			gameState="end";
		 }
		
	 }
	 else{
	 	scr=scr+50;
	 }
	 })
 	}
 }
 	console.log(scr);
 	function replay(){
 		block.classList.add("blockSlide");
 		gameState="start";
 		}
 	function start(){
 	if(gameState=="playing"){
 		block.classList.add("blockSlide");
 		gameState="start"
 	}}