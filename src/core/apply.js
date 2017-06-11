import {
  isPrimitiveProcedure,
  isCompoundProcedure,
  evalSequence,
  procedureBody,
  extendEnv,
  getProcedureEnv,
  getProcedureParams
} from './common-util';


export function s_apply(procedure, args) {
  if (isPrimitiveProcedure(procedure)) {
    return applyPrimitiveProcedure(procedure, args);
  } else if (isCompoundProcedure(procedure)) {
    return evalSequence(procedureBody(procedure),
      extendEnv(getProcedureParams(procedure), args,
        getProcedureEnv(procedure)));
  }
  throw 'Unknown procedure type to apply!';
}

function applyPrimitiveProcedure(procedure) {

}


