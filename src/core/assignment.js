import {ASSIGN} from './constant';
import {cadr, caddr} from './s-list';
import {isTaggedList} from './common-util';

export function isAssignment(exp) {
  return isTaggedList(exp, ASSIGN);
}

export function assignVar(exp) {
  return cadr(exp);
}

export function assignValue(exp) {
  return caddr(exp);
}