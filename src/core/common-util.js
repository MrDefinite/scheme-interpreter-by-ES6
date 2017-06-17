import {s_eval} from './eval';
import {cons, cadr, EMPTY_NODE} from './s-list';

export function getVarValue(exp, env) {

}

export function textOfQuotation(exp) {
  return cadr(exp);
}

export function makeProcedure(lambdaParams, lambdaBody, env) {

}

export function getLambdaParams(exp) {

}

export function getLambdaBody(exp) {

}

export function beginActions(exp) {

}

export function condToIf(exp) {

}

export function getOperator(exp) {

}

export function getAssignmentVar(exp) {

}

export function getAssignmentValue(exp) {

}

export function setVarValue(variable, value, env) {

}

export function getDefinitionVar(exp) {

}

export function getDefinitionValue(exp) {

}

export function defineVar(variable, value, env) {

}

export function listOfValues(exps, env) {
  if (noOperands(exps)) {
    return EMPTY_NODE;
  }

  return cons(s_eval(firstOperand(exps), env),
    listOfValues(restOperand(exps), env));
}

export function getOperands(exp) {

}

export function firstOperand(exp) {

}

export function restOperand(exp) {

}

export function noOperands(exp) {

}

export function isPrimitiveProcedure(procedure) {

}

export function isCompoundProcedure(procedure) {

}

export function procedureBody(procedure) {

}

export function extendEnv(procedureParams, args, procedureEnv) {

}

export function getProcedureParams(procedure) {

}

export function getProcedureEnv(procedure) {

}

export function isPair(exp) {

}

export function isEq(a, b) {

}

export function isNull(exp) {

}

export function getExpType(exp) {
  return '';
}

export function getFirstExp(exps) {

}

export function isLastExp(exps) {

}

export function getRestExps(exps) {

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

export function isVar(exp) {
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

