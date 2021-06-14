function isLetter(str: string): boolean {
  return str.length === 1 && /[a-z]/i.test(str);
}

export function isModifier(e: React.KeyboardEvent<HTMLInputElement>): boolean {
  const modifierKeys = [
    "Alt",
    "AltGraph",
    "CapsLock",
    "Control",
    "Fn",
    "FnLock",
    "Hyper",
    "Meta",
    "NumLock",
    "OS",
    "ScrollLock",
    "Shift",
    "Super",
    "Symbol",
    "SymbolLock",
  ];
  let isModifier = false;
  modifierKeys.forEach((modifier) => {
    if (e.key === modifier) {
      isModifier = true;
    }
  });
  return isModifier;
}

export function spongebobify(prevLetter: string, currLetter: string): string {
  // first letter in sentence
  if (!prevLetter) return currLetter.toLowerCase();

  if (!isLetter(currLetter.slice(-1))) return currLetter;

  // normal cases
  if (prevLetter.toUpperCase() === prevLetter) {
    return currLetter.toLowerCase();
  } else if (prevLetter.toLowerCase() === prevLetter) {
    return currLetter.toUpperCase();
  }

  throw new Error("Shouldn't have gotten to here!");
}
