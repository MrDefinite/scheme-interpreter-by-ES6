import {s_eval} from './eval';
import {cons, car, cadr, cdr} from './s-list';
import {EMPTY_LIST, QUOTE} from './constant';
import {makeBegin} from './begin';


export function textOfQuotation(exp) {
  return cadr(exp);
}

export function listOfValues(exps, env) {
  if (isNoOperands(exps)) {
    return EMPTY_LIST;
  }

  return cons(s_eval(firstOperand(exps), env),
    listOfValues(restOperands(exps), env));
}

export function operator(exp) {
  return car(exp);
}

export function operands(exp) {
  return cdr(exp);
}

export function firstOperand(ops) {
  return car(ops);
}

export function restOperands(ops) {
  return cdr(ops);
}

export function isNoOperands(ops) {
  return isNull(ops);
}

export function isPair(exp) {

}

export function isEq(a, b) {

}

export function isNull(exp) {

}

export function firstExp(seq) {
  return car(seq);
}

export function isLastExp(seq) {
  return isNull(cdr(seq));
}

export function restExps(seq) {
  return cdr(seq);
}

export function isSelfEvaluating(exp) {
  if (isNumber(exp) || isString(exp)) {
    return true;
  }
  return false;
}

export function isNumber(exp) {

}

export function isString(exp) {

}

export function isVariable(exp) {
  return isSymbol(exp);
}

export function isSymbol(exp) {

}

export function isQuoted(exp) {
  return isTaggedList(exp, QUOTE);
}

export function isTaggedList(exp, tag) {
  if (isPair(exp)) {
    return isEq(car(exp), tag);
  } else {
    return false;
  }
}



export function sequenceToExp(seq) {
  if (isNull(seq)) {
    return seq;
  } else if (isLastExp(seq)) {
    return firstExp(seq);
  } else {
    return makeBegin(seq);
  }
}

export function isTrue(x) {
  // TODO
}

export function isFalse(x) {
  // TODO
}