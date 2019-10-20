function setResult(first, second, destination){

	// get the value from item1
	var selector = document.getElementById(first);
    var valueOne = selector[selector.selectedIndex].value;
    var nameOne = selector[selector.selectedIndex].text;

	// get the value from item2
	selector = document.getElementById(second);
    var valueTwo = selector[selector.selectedIndex].value;
    var nameTwo = selector[selector.selectedIndex].text;


	// do maths 
	var result = valueTwo/valueOne;

 	// construct sentence
	var sentence = "There's " + result + " " + pluralize(nameOne, result) + " in a " + nameTwo ;

	// set sentence
	u("#"+destination).text(sentence);

}

u('#lengthButton').on('click', function(){setResult("length1", "length2", "lengthResult") });
u('#areaButton').on('click', function(){setResult("area1", "area2", "areaResult") });
u('#weightButton').on('click', function(){setResult("weight1", "weight2", "weightResult") });