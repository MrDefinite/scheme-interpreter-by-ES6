import {ASSIGN} from './constant';
import {cadr, caddr} from './s-list';
import {isTaggedList} from './common-util';

export function isAssignment(exp) {
  return isTaggedList(exp, ASSIGN);
}

export function assignmentVariable(exp) {
  return cadr(exp);
}

export function assignmentValue(exp) {
  return caddr(exp);
}