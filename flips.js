import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from 'minimist'

let args = minimist(process.argv.slice(2));

let theNum = args['number'];
//args['number'];
console.log(theNum);
//args['theNum'];
//let theNum = args.number;


//if (theNum == null) {
   // let flip = coinFlip(1);
   // console.log(flip);
  //  console.log(countFlips(flip));
//} else {
    //let flips = coinFlips(theNum);
    //console.log(flips);
  //  console.log(countFlips(flips))
//}
