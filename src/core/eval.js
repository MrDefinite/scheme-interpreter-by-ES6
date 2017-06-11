import {getExpType, EXP_TYPE} from './exp-util';
import {
  getVarValue,
  textOfQuotation,
  evalAssignment,
  evalDefinition,
  evalIf,
  makeProcedure,
  getLambdaParams,
  getLambdaBody,
  beginActions,
  evalSequence,
  condToIf,
  getOperator,
  getOperands,
  listOfValues
} from 'common-util';
import {s_apply} from './apply';

export function s_eval(exp, env) {
  const type = getExpType(exp);

  switch (type) {
    case EXP_TYPE.SELF_EVALUATING:
      return exp;
    case EXP_TYPE.VAR:
      return getVarValue(exp, env);
    case EXP_TYPE.QUOTED:
      return textOfQuotation(exp);
    case EXP_TYPE.ASSIGNMENT:
      return evalAssignment(exp, env);
    case EXP_TYPE.DEFINITION:
      return evalDefinition(exp, env);
    case EXP_TYPE.IF:
      return evalIf(exp, env);
    case EXP_TYPE.LAMBDA:
      return makeProcedure(getLambdaParams(exp), getLambdaBody(exp), env);
    case EXP_TYPE.BEGIN:
      return evalSequence(beginActions(exp), env);
    case EXP_TYPE.COND:
      return s_eval(condToIf(exp), env);
    case EXP_TYPE.APPLICATION:
      return s_apply(s_eval(getOperator(exp), env),
        listOfValues(getOperands(exp), env));
    default:
      throw 'Unsupported exp type!';
  }
}


