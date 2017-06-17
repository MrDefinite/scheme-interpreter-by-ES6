import {
  extendEnvironment,
} from './environment';
import {
  isPrimitiveProcedure,
  isCompoundProcedure,
  procedureBody,
  procedureEnvironment,
  procedureParameters
} from './procedure';
import {evalSequence} from './eval';
import {applyPrimitiveProcedure} from './procedure';

export function s_apply(procedure, args) {
  if (isPrimitiveProcedure(procedure)) {
    return applyPrimitiveProcedure(procedure, args);
  } else if (isCompoundProcedure(procedure)) {
    return evalSequence(procedureBody(procedure),
      extendEnvironment(procedureParameters(procedure), args,
        procedureEnvironment(procedure)));
  }
  throw 'Unknown procedure type to apply!';
}




