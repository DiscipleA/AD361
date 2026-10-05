import { test, expect } from "@jest/globals";

import {
    isEven,
    add,
    divide,
    palindrome,
    countVowels,
    findMax,
    removeDuplicates,
} from "../src/functions";

test("isEven return true for an even number", () =>  {
    expect(isEven(10)).toBe(true);
});

test("isEven return false for an odd numbewr", () => {
    expect(isEven(9)).toBe(false);
});

test("palindrome return true for palindrome", () => {
    expect(palindrome("tabitatibat")).toBe(true);
});

test("palindrome return false for non-palindrome", () => {
    expect(palindrome("taco")).toBe(false);
});

test("countVowels return true if vowels present", () => {
    expect(countVowels("Hi there!")).toBe(3);
});

test("countVowels return false if vowels absent", () => {
    expect(countVowels("my")).toBe(1);
});