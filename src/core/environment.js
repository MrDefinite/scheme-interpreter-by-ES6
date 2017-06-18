import {list, cdr, car, cons, setCar, setCdr, length, cadr} from "./s-list";
import {EMPTY_LIST, PRIMITIVE} from './constant';
import {isNull, isEq, map} from './common-util';

export function lookupVariableValue(variable, env) {
  function _envLoop(env) {
    function _scan(vars, vals) {
      if (isNull(vars)) {
        return _envLoop(enclosingEnvironment(env));
      } else if (isEq(variable, car((vars)))) {
        return car(vals);
      } else {
        return _scan(cdr(vars), cdr(vals));
      }
    }

    if (isEq(env, THE_EMPTY_ENVIRONMENT)) {
      throw 'Unbound variable var';
    }
    const frame = firstFrame(env);
    return _scan(frameVariables(frame), frameValues(frame));
  }

  return _envLoop(env);
}

export function extendEnvironment(vars, vals, baseEnv) {
  if (length(vals) === length(vars)) {
    return cons(makeFrame(vars, vals), baseEnv);
  } else {
    throw 'Number of vars and vals are not the same!';
  }
}

export function defineVariable(variable, value, env) {
  const frame = firstFrame(env);

  function _scan(vars, vals) {
    if (isNull(vars)) {
      return addBindingToFrame(variable, value, frame);
    } else if (isEq(variable, car((vars)))) {
      return setCar(vals, value);
    } else {
      return _scan(cdr(vars), cdr(vals));
    }
  }

  return _scan(frameVariables(frame), frameValues(frame));
}

export function setVariableValue(variable, value, env) {
  function _envLoop(env) {
    function _scan(vars, vals) {
      if (isNull(vars)) {
        return _envLoop(enclosingEnvironment(env));
      } else if (isEq(variable, car((vars)))) {
        return setCar(vals, value);
      } else {
        return _scan(cdr(vars), cdr(vals));
      }
    }

    if (isEq(env, THE_EMPTY_ENVIRONMENT)) {
      throw 'Unbound variable var';
    }
    const frame = firstFrame(env);
    return _scan(frameVariables(frame), frameValues(frame));
  }

  return _envLoop(env);
}

export function enclosingEnvironment(env) {
  return cdr(env);
}

export function firstFrame(env) {
  return car(env);
}

export function makeFrame(variables, values) {
  return cons(variables, values);
}

export function frameVariables(frame) {
  return car(frame);
}

export function frameValues(frame) {
  return cdr(frame);
}

export function addBindingToFrame(variable, value, frame) {
  setCar(frame, cons(variable, car(frame)));
  setCdr(frame, cons(value, cdr(frame)));
}

export function setupEnvironment() {
  const initialEnv = extendEnvironment(primitiveProcedureNames,
    primitiveProcedureObjects, THE_EMPTY_ENVIRONMENT);
  defineVariable('true', true, initialEnv);
  defineVariable('false', false, initialEnv);
  return initialEnv;
}

const primitiveProcedures = list(list('car', car), list('cdr', cdr), list('cons', cons));
const primitiveProcedureNames = map(car, primitiveProcedures);
const primitiveProcedureObjects = map(function(procedure) {
  return list(PRIMITIVE, cadr(procedure));
}, primitiveProcedures);
export const theGlobalEnvironment = setupEnvironment();

export const THE_EMPTY_ENVIRONMENT = EMPTY_LIST;




