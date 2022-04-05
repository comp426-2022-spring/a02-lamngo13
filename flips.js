import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import min from 'minimist'

let args = min(process.argv.slice(2));
args['number'];
let theNum = args.number;

if (theNum == null) {
    let flip = coinFlip(1);
    console.log(flip);
    console.log(countFlips(flip));
} else {
    let flips = coinFlips(theNum);
    console.log(flips);
    console.log(countFlips(flips))
}
