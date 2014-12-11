var documentTexts = {     
	overview: [
		"jsonHTML allows you to grant "+
		"the powers of javaScript to your dreaded static HTML. If you find writing HTML "+
		'to be boring, or just need more flexibility and power to dynamically alter, '+
		'manipulate, or duplicate HTML objects as if it were javaScript objects, this '+
		'is for you. jsonHTML was created in a rush for one of my own projects, in '+
		'which virtually none of my div objects, or much of any HTML could have been '+
		'written traditionally, thus, I will release new versions, and improve '+
		'functionality as my projects require more. jsonHTML was not written for '+
		'performance, therefore it may not be best for very large projects, but it is '+
		'good if you need to write code quickly, and dynamically alter objects in a '+
		'more intuitive manner. Basically, the goal of the jsonHTML project is if you '+
		"want to do something in javaScript, you will be able to reflect it in HTML.",

		"Before this, to achieve the flexibility required for my projects, I had to "+
		'write out the HTML as a string, and use jQuery to add them or manipulate them '+
		'by parsing that string. This was tedious, especially compared to manipulating '+
		'JSON objects as an abstraction layer. Basically put, by creating a JSON object '+
		'to reflect what you want, jsonHTML takes your object and creates the string to '+
		'pass to jQuery, then jQuery handles the rest. Think of jsonHTML as a compiler, '+
		'or a jQuery shell, it takes javaScript (JSON) objects and compiles them down '+
		'to HTML, where it is passed to jQuery, implemented into the DOM and the '+
		'browser deals with them traditionally. It is also good to note, that if you '+
		"are coming from a '.Net' environment to the Free Software society of the web, "+
		'it may be easier to transition to the structured design of jsonHTML, rather '+
		'than the fragmented world of developing for the web. jsonHTML definately helps '+
		'to unify the common concepts of developing on the web, in an easy to use '+
		"syntax.",

		"If you are a more experienced programmer, you may notice that most of "+
		'the example code below does not look like pure JSON, and in truth, '+
		"you are correct! So why is this project called 'jsonHTML?' Basically, "+
		'what you see below is due to the functionality that the $jConstruct '+
		'contstructor gives you, without this you will have to write code in '+
		'pure JSON. You can view the heart and soul of jsonHTML with the code '+
		"examples near the bottom of this documentation.",

		'So, if you would like to follow along, make sure to download the '+
		'latest release, unpack, and give jsonHTML a try! It is assumed that '+
		'you know the concepts of HTML, and javaScript. Having an '+
		'understanding of jQuery is helpful, as jsonHTML largely depends on '+
		'this library, but this understanding is not not mandatory. The documentation '+
		'is still pretty basic as jsonHTML was not originally created to be '+
		'released to the public, but as I moved the project to github, it '+
		'became exposed to the public, and I have decided that it would be '+
		'helpful to the free software coding community if my code was '+
		'documented.',

	]
};