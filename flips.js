import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
//import minimist from './node_modules/minimist'
//import minimist from 'minimist'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
//USE CREATE REQUIRE


const args = require('minimist')(process.argv.slice(2))
//console.log(args);
//MAYBE???args['number']
let theNum = args['number']
//end new stuff

//let args = minimist(process.argv.slice(2));

//install node and minimist (and express for future)

//let theNum = args['number'];

//console.log(theNum);
var theFlips = []
//THIS DOESNT YET WORK GIVES ME UNDEFINED!


//let theNum = args.number;

//I think this logic is ok if I could get input to work

if (theNum == null || undefined) {
    //DEBUGGING
    console.log("UNDEF BRUH")
    //end debugging
    theFlips = coinFlip(1);
    console.log(theFlips);
    console.log(countFlips(theFlips));
} else {
    console.log(theNum)
    theFlips = coinFlips(theNum);
    console.log(theFlips);
    console.log(countFlips(theFlips))
}
