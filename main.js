// Node Module Mastery Homework

/*************************

// ## Part 1
// Write a program that prints "Hello World" to the console. For example,
// if you called your script `main.js`, you should be able to type `node
// main.js` at your terminal, and it should print "Hello World" on the next
// line.

function printHello(){
  console.log('Hello World');
};

return printHello();

***************************/



// ## Part 2
// Write a program that accepts one or more numbers as command-line
// arguments and prints the sum of those numbers to the console (stdout).
// For example, if you called your script `sum.js`, you should be able to
// type `node sum.js 1 2 3` at your terminal, and it should print "6" on
// the next line.

// var nums = 0;
// for(var i = 2; i < process.argv.length; i++) {
// 	nums = nums + Number(process.argv[i]);
// }

// console.log(nums);




// ## Part 3
// Create a text file called 'notes.md' which contains several lines of
// text. Write a program that accepts a filename as a command-line
// argument, reads that file using `fs.readFileSync` from the file-system
// module, and prints the number of newlines (`\n`) in that file. For
// example, if you called your script `lineCount.js`, you should be able to
// type `node lineCount.js notes.md` at your terminal, and it should print
// "7" at your terminal, assuming that the 'notes.md' contained exactly 7
// lines.

// var fs = require('fs');

// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);


/**************************

// ## Part 4
// Repeat part 3, except using `fs.readFile` instead of `fs.readFileSync`.
// The main difference between these two methods is that `fs.readFileSync`
// is synchronous, which means that it blocks the rest of the program from
// running until it returns a value, whereas `fs.readFile` is asynchronous,
// which means that it does not return a value, but it does accept a
// callback function which gives you access to the file's contents.


var fs = require('fs');
 
var notes = fs.readFilySync(progres.argv[2], 'utf-8')

notes.split('');
var lineCount = 0;
for (var i in notes) {
	if (notes[i] == '\n') {
		lineCount++;
	}
}

console.log("LineCount: " + lineCount)







