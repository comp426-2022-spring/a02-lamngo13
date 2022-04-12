import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2))
let theCall = args['call']

//test
//console.log(theCall)
//take one argument from cmd line named --call 
//that will only accpet (heads or tails I think)

//if no argument is given, or something other than
//heads or tails, return an error message

//compare the call with a flip and report the result to STDOUT

//IF NO ARG OR NOT HEADS OR TAILS, RETURN ERROR


console.log(theCall)
if (theCall==null ||theCall == undefined || ((theCall!="heads")&&(theCall!="tails"))) {
    console.log("Error: no input.")
} else {
    let theFlip = flipACoin(theCall)
    console.log(theFlip)
}

