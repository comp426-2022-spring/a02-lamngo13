import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
//import minimist from './node_modules/minimist'
//import minimist from 'minimist'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
//USE CREATE REQUIRE


const args = require('minimist')(process.argv.slice(2))
//console.log(args);
args['number']
let theNum = args.number
//end new stuff

//let args = minimist(process.argv.slice(2));

//install node and minimist (and express for future)

//let theNum = args['number'];

console.log(theNum);

//THIS DOESNT YET WORK GIVES ME UNDEFINED!


//let theNum = args.number;

//I think this logic is ok if I could get input to work

if (theNum == null || undefined) {
    let flip = coinFlip(1);
    console.log(flip);
    console.log(countFlips(flip));
} else {
    let flips = coinFlips(theNum);
    console.log(flips);
    console.log(countFlips(flips))
}
