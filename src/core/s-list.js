class Node {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
}

export function cons(a, b) {
  return new Node(a, b);
}

export function list() {
  const head = new Node(arguments[0], null);
  let pre = head;
  for (let i = 1; i < arguments.length; i++) {
    let n = new Node(arguments[i], null);
    pre.second = n;
    pre = n;
  }

  return head;
}

export function setCar(list, value) {
  const head = list;
  head.first = value;
}

export function setCdr(list, value) {
  const head = list;
  head.second = value;
}

export function length(list) {
  if (!list) {
    return 0;
  }

  let l = 1;
  let cur = list;
  while (cur.second !== null) {
    l++;
    cur = cur.second;
  }
  return l;
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

