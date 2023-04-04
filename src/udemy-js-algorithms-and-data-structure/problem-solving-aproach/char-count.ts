function isAlphaNumeric (char: string): boolean {
  const code = char.charCodeAt(0);
  return !(!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123));
}

export function charCount (str: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of str) {
    if (isAlphaNumeric(char)) {
      const lowerCaseChar = char.toLowerCase();
      result[lowerCaseChar] = ++result[lowerCaseChar] || 1;
    }
  }

  return result;
}
