import {QUOTE, ASSIGN, DEFINITION, IF} from './constant';
import {isPair, isEq, isNull} from './common-util';
import {car, cadr, caddr, caadr, cddr, cdadr, cdddr, cadddr} from './s-list';
import {makeLambda} from './lambda';

// export const EXP_TYPE = {
//   SELF_EVALUATING: 'SELF_EVALUATING',
//   VAR: 'VAR',
//   QUOTED: 'QUOTED',
//   ASSIGNMENT: 'ASSIGNMENT',
//   DEFINITION: 'DEFINITION',
//   IF: 'IF',
//   LAMBDA: 'LAMBDA',
//   BEGIN: 'BEGIN',
//   COND: 'COND',
//   APPLICATION: 'APPLICATION'
// };

// export function getExpType(exp) {
//   return '';
// }
//
// export function getFirstExp(exps) {
//
// }
//
// export function isLastExp(exps) {
//
// }
//
// export function getRestExps(exps) {
//
// }
//
// export function isSelfEvaluating(exp) {
//   if (isNumber(exp) || isString(exp)) {
//     return true;
//   }
//   return false;
// }
//
// export function isNumber(exp) {
//
// }
//
// export function isString(exp) {
//
// }
//
// export function isVar(exp) {
//   return isSymbol(exp);
// }
//
// export function isSymbol(exp) {
//
// }
//
// export function isQuoted(exp) {
//   return isTaggedList(exp, QUOTE);
// }
//
// export function isTaggedList(exp, tag) {
//   if (isPair(exp)) {
//     return isEq(car(exp), tag);
//   } else {
//     return false;
//   }
// }

// export function isAssignment(exp) {
//   return isTaggedList(exp, ASSIGN);
// }
//
// export function assignVar(exp) {
//   return cadr(exp);
// }
//
// export function assignValue(exp) {
//   return caddr(exp);
// }

// export function isDefinition(exp) {
//   return isTaggedList(exp, DEFINITION);
// }
//
// export function defineVar(exp) {
//   if (isSymbol(cadr(exp))) {
//     return cadr(exp);
//   } else {
//     return caadr(exp);
//   }
// }
//
// export function defineValue(exp) {
//   if (isSymbol(cadr(exp))) {
//     return caddr(exp);
//   }  else {
//     return makeLambda(cdadr(exp), cddr(exp));
//   }
// }

// export function isIf(exp) {
//   return isTaggedList(exp, IF);
// }
//
// export function ifPredicate(exp) {
//   return cadr(exp);
// }
//
// export function ifConsequent(exp) {
//   return caddr(exp);
// }
//
// export function ifAlternative(exp) {
//   if (!isNull(cdddr(exp))) {
//     return cadddr(exp);
//   } else {
//     return false;
//   }
// }


