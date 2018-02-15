"use strict"

const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
let quote;
let gotData;
let quoteArea = document.querySelector("#wisdom");


document.addEventListener("DOMContentLoaded", function(event){
	getNewQuote();
});

function getNewQuote(){
fetch(url)
	.then((resp) => resp.json())
	.then(function(data){
		gotData = data;
		console.log(data);
	});
}


document.querySelector("#quote-button").addEventListener("click", function(event){
	getNewQuote();
	quoteArea.innerText = gotData;
});