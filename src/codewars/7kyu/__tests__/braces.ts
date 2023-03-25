import {validParentheses} from '../valid-parentheses/valid-parentheses';

describe("Sample tests", function () {
  it("Should return true for valid parentheses", function () {
    expect(validParentheses("()")).toBeTruthy();
    expect(validParentheses("((()))")).toBeTruthy();
    expect(validParentheses("()()()")).toBeTruthy();
    expect(validParentheses("(()())()")).toBeTruthy();
    expect(validParentheses("()(())((()))(())()")).toBeTruthy();
  });

  it("Should return false for invalid parentheses", function () {
    expect(validParentheses(")(")).toBeFalsy();
    expect(validParentheses("()()(")).toBeFalsy();
    expect(validParentheses("((())")).toBeFalsy();
    expect(validParentheses("())(()")).toBeFalsy();
    expect(validParentheses(")()")).toBeFalsy();
    expect(validParentheses(")")).toBeFalsy();
    expect(validParentheses("(()(()(())()((((()))))")).toBeFalsy();
    expect(validParentheses("()(()())((((())()(()((()))))(()(()())(()()()(()))))(())())((())())((()(()((()(()))))(()))()(")).toBeFalsy();
  });

  it("Should return true for empty strings", function () {
    expect(validParentheses("")).toBeTruthy();
  });
});