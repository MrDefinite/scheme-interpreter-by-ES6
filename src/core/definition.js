import {DEFINITION} from './constant';
import {cadr, caddr, caadr, cdadr, cddr} from './s-list';
import {isTaggedList, isSymbol} from './common-util';
import {makeLambda} from './lambda';

export function isDefinition(exp) {
  return isTaggedList(exp, DEFINITION);
}

export function defineVar(exp) {
  if (isSymbol(cadr(exp))) {
    return cadr(exp);
  } else {
    return caadr(exp);
  }
}

export function defineValue(exp) {
  if (isSymbol(cadr(exp))) {
    return caddr(exp);
  }  else {
    return makeLambda(cdadr(exp), cddr(exp));
  }
}