import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import min from 'minimist'

let args = min(process.argv.slice(2));

if (args['number']) {
    console.log(coinFlips(args['number']))
    console.log(countFlips(coinFlips(args['number'])))
} else {
    console.log(coinFlips(1));
    console.log(countFlips(coinFlip(1)));
}
