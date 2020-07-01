const gcd = (num1, num2, divisor = Math.min(num1, num2)) => {
  const isGcd = num1 % divisor === 0 && num2 % divisor === 0;
  if (isGcd) {
    return divisor;
  }
  return gcd(num1, num2, divisor - 1);
};

export default gcd;
