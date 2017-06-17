import {DEFINITION} from './constant';
import {cadr, caddr, caadr, cdadr, cddr} from './s-list';
import {isTaggedList, isSymbol} from './common-util';
import {makeLambda} from './lambda';

export function isDefinition(exp) {
  return isTaggedList(exp, DEFINITION);
}

export function definitionVariable(exp) {
  if (isSymbol(cadr(exp))) {
    return cadr(exp);
  } else {
    return caadr(exp);
  }
}

export function definitionValue(exp) {
  if (isSymbol(cadr(exp))) {
    return caddr(exp);
  }  else {
    return makeLambda(cdadr(exp), cddr(exp));
  }
}