import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
//import minimist from './node_modules/minimist'
import minimist from 'minimist'

let args = minimist(process.argv.slice(2));

let theNum = args['number'];
//args['number'];
console.log(theNum);

const num = args.number;
console.log(num)
//THIS DOESNT YET WORK :(


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
