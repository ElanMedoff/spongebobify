function isLetter(str: string): boolean {
  return str.length === 1 && /[a-z]/i.test(str);
}

export function spongebobify(prevLetter: string, currLetter: string): string {
  // first letter in sentence
  if (!prevLetter) return currLetter.toLowerCase();

  // special characters
  if (!isLetter(currLetter.slice(-1))) return currLetter;

  // normal cases
  if (prevLetter.toUpperCase() === prevLetter) {
    return currLetter.toLowerCase();
  } else if (prevLetter.toLowerCase() === prevLetter) {
    return currLetter.toUpperCase();
  }

  throw new Error("Shouldn't have gotten to here!");
}
