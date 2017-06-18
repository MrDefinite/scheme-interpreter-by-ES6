import {list, caddr, cadddr, cadr} from './s-list';
import {PROCEDURE, PRIMITIVE} from './constant';
import {isTaggedList} from './common-util';

export function makeProcedure(parameters, body, env) {
  return list(PROCEDURE, parameters, body, env);
}

export function isPrimitiveProcedure(procedure) {
  return isTaggedList(procedure, PRIMITIVE);
}

export function primitiveImplementation(procedure) {
  return cadr(procedure);
}

export function applyPrimitiveProcedure(procedure, args) {
  return applyInUnderlyingScheme(primitiveImplementation(procedure), args);
}

export function applyInUnderlyingScheme(proc, args) {

}

export function isCompoundProcedure(procedure) {
  return isTaggedList(procedure, PROCEDURE);
}

export function procedureBody(procedure) {
  return caddr(procedure);
}

export function procedureParameters(procedure) {
  return cadr(procedure);
}

export function procedureEnvironment(procedure) {
  return cadddr(procedure);
}


