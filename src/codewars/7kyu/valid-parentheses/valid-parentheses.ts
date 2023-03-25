export function validParentheses(parenStr: string) {
  if (!parenStr.length) {
    return true;
  }

  if (parenStr.length % 2 !== 0) {
    return false;
  }

  const open = '(';
  const close = ')';

  const stack: string[] = [];

  for (const char of parenStr) {
    if (char === open) {
      stack.push(close);
    } else if (stack.pop() !== close) {
      return false;
    }

  }

  return !stack.length;
}

