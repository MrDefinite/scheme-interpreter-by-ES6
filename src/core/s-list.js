import {EMPTY_LIST} from './constant';

class Node {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
}

export function cons(a, b) {
  return new Node(a, b);
}

// 0
export function car(node) {
  return node.first;
}

// rest from 1
export function cdr(node) {
  return node.second;
}

// 1
export function cadr(node) {
  return node.second.first;
}

export function cdar(node) {
  return node.first.second;
}

// 2
export function caddr(node) {
  return node.second.second.first;
}

export function caadr(node) {
  return node.second.first.first;
}

// rest from 2
export function cddr(node) {
  return node.second.second;
}

export function cdadr(node) {
  return node.second.first.second;
}

// rest from 3
export function cdddr(node) {
  return node.second.second.second;
}

// 3
export function cadddr(node) {
  return node.second.second.second.first;
}

export const EMPTY_NODE = EMPTY_LIST;