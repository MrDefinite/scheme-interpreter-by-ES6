import {isTaggedList, isEq, isNull, sequenceToExp} from './common-util';
import {COND, ELSE} from './constant';
import {cdr, car} from './s-list';
import {makeIf} from './if';

export function isCond(exp) {
  return isTaggedList(exp, COND);
}

export function condToIf(exp) {
  return expandClauses(condClauses(exp));
}

export function condClauses(exp) {
  return cdr(exp);
}

export function isCondElseClause(clause) {
  return isEq(condPredicate(clause), ELSE);
}

export function condActions(clause) {
  return cdr(clause);
}

export function condPredicate() {

}

export function expandClauses(clauses) {
  if (isNull(clauses)) {
    return false
  }

  const first = car(clauses);
  const rest = cdr(clauses);
  if (isCondElseClause(first)) {
    if (isNull(rest)) {
      return sequenceToExp(condActions(first));
    } else {
      throw 'ELSE clause isn\'t last -- condToIf ' + clauses;
    }
  } else {
    return makeIf(condPredicate(first), sequenceToExp(condActions(first)),
      expandClauses(rest));
  }


}








