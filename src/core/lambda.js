import {LAMBDA} from './constant';
import {isTaggedList} from './exp-util';
import {cons, cadr, cddr} from './s-list';

export function isLambda(exp) {
  return isTaggedList(exp, LAMBDA);
}

export function getLambdaParams(exp) {
  return cadr(exp);
}

export function getLambdaBody(exp) {
  return cddr(exp);
}

export function makeLambda(params, body) {
  return cons(LAMBDA, cons(params, body));
}

