import {s_eval} from './eval';

export function getVarValue(exp, env) {

}

export function textOfQuotation(exp) {

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

export function listOfValues(exps, env) {
  if (noOperands(exps)) {
    return [];
  }

  return [s_eval(firstOperand(exps), env)].concat(
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


