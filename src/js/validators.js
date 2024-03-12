export function isValidInn(value) {
  return value.length >= 10 && value.length <= 12;
}

export function isValidCard(cardNumber) {
  const number = cardNumber.trim();
  if (!number) {
    return false;
  }

  const digits = cardNumber.trim().split('').map(Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    let digit = digits[i];
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
