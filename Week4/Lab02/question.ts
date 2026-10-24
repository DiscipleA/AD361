export function isValidQuestionTitle(titleLength: number): boolean {
  if (titleLength < 15) {
    return false;
  }

  if (titleLength > 150) {
    return false;
  }

  return true;
}

export function hasQuestionBody(body: string): boolean {
  if (body.trim().length === 0) {
    return false;
  }

  return true;
}

export function canSubmitQuestion(titleLength: number, body: string): boolean {
  if (!isValidQuestionTitle(titleLength)) {
    return false;
  }

  if (!hasQuestionBody(body)) {
    return false;
  }

  return true;
}
