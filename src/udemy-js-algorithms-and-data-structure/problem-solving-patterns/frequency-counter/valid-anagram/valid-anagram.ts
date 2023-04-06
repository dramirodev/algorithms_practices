export function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const counter: Record<string, number> = {};

  for (const char of str1) {
    counter[char] ? counter[char] += 1 : counter[char] = 1;
  }

  for (const char of str2) {
    if (!counter[char]) {
      return false;
    } else {
      counter[char] -= 1;
    }
  }

  return true;
}
