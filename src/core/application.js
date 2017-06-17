import {isPair} from './common-util';


export function isApplication(exp) {
  return isPair(exp);
}