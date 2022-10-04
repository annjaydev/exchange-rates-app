export const getInitialConvertValue = (amount, exchangeRate) =>
  (amount * exchangeRate).toFixed(4)
