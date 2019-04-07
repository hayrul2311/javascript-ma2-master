//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function person(name, age){
	this.name = name;
	this.age = age;
}
var person1 = new person('marthe', '23');

function dPt (pT){
	var pT = person.prototype;
	console.log(pT);
}
dPt();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
var newArray = numbers.slice(4,5);
		console.log(newArray);

//3. Delete the last number in the array that you created above.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
numbers.pop(9);
		console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.
<body>
	<script>
function swap(){
	var stringx = document.getElementById("stringx").innerHTML;
	var reDone = stringx.replace(/strawberry/g, "banana");
	document.getElementById("stringx").innerHTML = reDone;
}
		function swap2(){
			var stringx = document.getElementById("stringx").innerHTML;
			var reDone2 = stringx.replace(/strawberries/g, "bananas");
	document.getElementById("stringx").innerHTML = reDone2;
		}
	</script>
	<p id="stringx">Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.</p>
	<button onClick="swap(),swap2()">xxx</button>
</body>

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
<body>

 <button id="button" >push</button>
	<script type="text/javascript">
	var array= ["galatasaray", "besiktas", "fenerbahce", "yozgatspor"];
		console.log(array);

		document.getElementById("button").onclick = function (){
		var array = ["volvo", "renault", "saab", "fiat"];
		console.log(array);
	};


	</script>

</body>

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [{  name:"magnus", age:"12"},{ name:"marthe", age:"14"},{ name:"ali", age:"15"}];
	var ffilter = people.filter(function(person){
		return person.name == "ali";
	});
		console.log(ffilter);


//7. Create a simple function that logs the date.
var currentdate = new Date();
var datetime = "Current date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() ;

		console.log(datetime);
