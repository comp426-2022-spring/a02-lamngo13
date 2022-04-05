import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from 'minimist'

//take one argument from cmd line named --call 
//that will only accpet (heads or tails I think)

//if no argument is given, or something other than
//heads or tails, return an error message

//compare the call with a flip and report the result to STDOUT
