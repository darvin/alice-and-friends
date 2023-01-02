import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

import { BNF, Parser, Compile, ParseError } from "bnf-parser";
const __filename = fileURLToPath(import.meta.url);
console.log(__filename)

// Read the EBNF grammar file from the filesystem
const myGrammar = fs.readFileSync(path.join(path.dirname(__filename), 'grammar.bnf'), 'utf8');

//console.log(myGrammar);

let result = BNF.parse(myGrammar);

  if (result instanceof ParseError) {
  	let error = result;
    // Extract the relevant part of the input text
    const start = error.ref.start.index;
    const end = error.ref.end.index+1;
    const relevantText = myGrammar.substring(start, end);
	const highlightedString =
	  myGrammar.substring(0, start) +
	  '\x1b[31m' +
	  myGrammar.substring(start, end) +
	  '\x1b[0m' +
	  myGrammar.substring(end);

    // Highlight the relevant part of the input text
    console.log("ERROR IN GRAMMAR: \n\n"+highlightedString);
  } 


let tree = Compile(result);
console.log(tree, result);

let msgs = [`To: Bob
Hello Bob! How are you today?
sdf

To: Brandon
Hi Brandon! Just wanted to let you know that the meeting has been moved to 2pm.
sdfdsf

To: Eve
Hi Eve, have you had a chance to review the reports I sent over yesterday?
sdfdsf
`,
`From: Bob
Hello Bob! How are you today?`,
`From: Bob
Hello Bob! How are you today?
sdfdf`
,
`From: Bob
Hello Bob! How are you today?
sdfdf
`,
`To: Bob
Hello Bob! How are you today?

To: Brandon
Hi Brandon! Just wanted to let you know that the meeting has been moved to 2pm.

{MORE}
`,
`From: Bob
Hello Bob! How are you today?

From: Brandon
Hi Brandon! Just wanted to let you know that the meeting has been moved to 2pm.
`];

for (var i = msgs.length - 1; i >= 0; i--) {
	console.log(tree.parse(msgs[i]).type);
}

// Define a function that generates random text based on the syntax tree
function generateRandomText(node) {
	//TODO: actually generate it
}

// Generate random text
const text = generateRandomText(tree);
// Print the generated text
console.log(text);

