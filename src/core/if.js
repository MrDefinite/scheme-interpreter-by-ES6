import {IF} from './constant';
import {list, cadr, caddr, cadddr, cdddr} from './s-list';
import {isTaggedList, isNull} from './common-util';


export function isIf(exp) {
  return isTaggedList(exp, IF);
}

export function ifPredicate(exp) {
  return cadr(exp);
}

export function ifConsequent(exp) {
  return caddr(exp);
}

export function ifAlternative(exp) {
  if (!isNull(cdddr(exp))) {
    return cadddr(exp);
  } else {
    return false;
  }
}

export function makeIf(predicate, consequent, alternative) {
  return list(IF, predicate, consequent, alternative);
}
