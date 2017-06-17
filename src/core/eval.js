import {
  firstExp,
  isLastExp,
  restExps,
  isSelfEvaluating,
  isVariable,
  isQuoted,
  textOfQuotation,
  operator,
  operands,
  listOfValues
} from './common-util';
import {lookupVariableValue, setVariableValue} from './environment';
import {makeProcedure} from './procedure';
import {isAssignment, assignmentVariable, assignmentValue} from './assignment';
import {
  isDefinition,
  definitionVariable,
  definitionValue
} from './definition';
import {defineVariable} from './environment';
import {isLambda, lambdaParameters, lambdaBody} from './lambda';
import {isBegin, beginActions} from './begin';
import {isCond, condToIf} from './cond';
import {isApplication} from './application';

import {s_apply} from './apply';
import {isIf, ifAlternative, ifConsequent, ifPredicate} from './if';
import {OK_RETURN} from './constant';

export function s_eval(exp, env) {
  if (isSelfEvaluating(exp)) {
    return exp;
  } else if (isVariable(exp)) {
    return lookupVariableValue(exp, env);
  } else if (isQuoted(exp)) {
    return textOfQuotation(exp);
  } else if (isAssignment(exp)) {
    return evalAssignment(exp, env);
  } else if (isDefinition(exp)) {
    return evalDefinition(exp, env);
  } else if (isIf(exp)) {
    return evalIf(exp, env);
  } else if (isLambda(exp)) {
    return makeProcedure(lambdaParameters(exp), lambdaBody(exp), env);
  } else if (isBegin(exp)) {
    return evalSequence(beginActions(exp), env);
  } else if (isCond(exp)) {
    return s_eval(condToIf(exp), env);
  } else if (isApplication(exp)) {
    return s_apply(s_eval(operator(exp), env),
      listOfValues(operands(exp), env));
  } else {
    throw 'Unsupported exp type!';
  }
}

export function evalAssignment(exp, env) {
  setVariableValue(assignmentVariable(exp), s_eval(assignmentValue(exp)), env);
  return OK_RETURN;
}

export function evalDefinition(exp, env) {
  defineVariable(definitionVariable(exp), definitionValue(exp), env);
  return OK_RETURN;
}

export function evalIf(exp, env) {
  if (s_eval(ifPredicate(exp), env)) {
    return s_eval(ifConsequent(exp), env);
  } else {
    return s_eval(ifAlternative(exp), env);
  }
}

export function evalSequence(exps, env) {
  if (isLastExp(exps)) {
    return s_eval(firstExp(exps), env);
  } else {
    const s = s_eval(firstExp(exps), env);
    s(evalSequence(restExps(exps), env));
  }
}

