import {LAMBDA} from './constant';
import {isTaggedList} from './common-util';
import {cons, cadr, cddr} from './s-list';

export function isLambda(exp) {
  return isTaggedList(exp, LAMBDA);
}

export function lambdaParameters(exp) {
  return cadr(exp);
}

export function lambdaBody(exp) {
  return cddr(exp);
}

export function makeLambda(params, body) {
  return cons(LAMBDA, cons(params, body));
}

