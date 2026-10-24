import {
  canSubmitQuestion,
  hasQuestionBody,
  isValidQuestionTitle,
} from "./question";

describe("Stack Overflow Question Title", () => {
  test("EP01: 14 characters are rejected", () => {
    expect(isValidQuestionTitle(14)).toBe(false);
  });

  test("EP02: 50 characters are accepted", () => {
    expect(isValidQuestionTitle(50)).toBe(true);
  });

  test("EP03: 151 characters are rejected", () => {
    expect(isValidQuestionTitle(151)).toBe(false);
  });
});

describe("Stack Overflow Question Body", () => {
  test("EP04: a body with text is accepted", () => {
    expect(hasQuestionBody("I need help.")).toBe(true);
  });

  test("EP05: an empty body is rejected", () => {
    expect(hasQuestionBody("   ")).toBe(false);
  });
});

describe("Decision Table", () => {
  test("DT01: valid title and body can be submitted", () => {
    expect(canSubmitQuestion(50, "I need help.")).toBe(true);
  });

  test("DT02: invalid title cannot be submitted", () => {
    expect(canSubmitQuestion(14, "I need help.")).toBe(false);
  });

  test("DT03: empty body cannot be submitted", () => {
    expect(canSubmitQuestion(50, "")).toBe(false);
  });

  test("DT04: valid title and body are ready before Submit", () => {
    expect(canSubmitQuestion(50, "I need help.")).toBe(true);
  });
});

describe("State Transitions", () => {
  test("ST01: a short title remains invalid", () => {
    expect(isValidQuestionTitle(10)).toBe(false);
  });

  test("ST02: a valid title and body become ready to submit", () => {
    expect(canSubmitQuestion(50, "I need help.")).toBe(true);
  });

  test("ST03: a valid title and body can be submitted", () => {
    expect(canSubmitQuestion(50, "I need help.")).toBe(true);
  });

  test("ST04: an empty form cannot be submitted", () => {
    expect(canSubmitQuestion(0, "")).toBe(false);
  });
});
