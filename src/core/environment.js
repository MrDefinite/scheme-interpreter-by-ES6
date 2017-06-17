import {cdr, car, cons, setCar, setCdr, length} from "./s-list";
import {EMPTY_LIST} from './constant';
import {isNull, isEq} from './common-util';

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

export function defineVariable() {

}

export function setVariableValue(variable, value, env) {

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

export const THE_EMPTY_ENVIRONMENT = EMPTY_LIST;


