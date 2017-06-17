import {
  isTaggedList,
  isNull,
  isLastExp,
  firstExp,
} from './common-util';
import {BEGIN} from './constant';
import {cons, cdr} from './s-list'

export function isBegin(exp) {
  return isTaggedList(exp, BEGIN);
}

export function beginActions(exp) {
  return cdr(exp);
}

export function makeBegin(seq) {
  return cons(BEGIN, seq);
}




