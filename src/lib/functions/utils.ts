

export const formatAmount = (
  amount: number | string,
  currency = '₦',
  decimals = 2,
) => {
  // Remove leading zeros and non-numeric characters
  const numericAmount = parseFloat(
    amount
      ?.toString()
      .replace(/(?!^-)[^0-9.]/g, '')
      .replace(/^(-?)0+(?=\d)/, '$1'),
  );

  // Check for NaN and return 0 in that case
  if (isNaN(numericAmount)) {
    return `${currency} 0.00`;
  }

  // Split the amount into integer and decimal parts
  const [integerPart, decimalPart] = numericAmount.toFixed(decimals).split('.');

  // Format the integer part with commas
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine integer and decimal parts
  const formattedAmount = `${currency} ${formattedInteger}${
    decimalPart ? '.' + decimalPart : ''
  }`;

  return formattedAmount;
};




export function formatDate(dateString: Date | string, full?: boolean) {
  const date = new Date(dateString);

  if (!full) {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // timeZoneName: 'short',
    });
  } else {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
  }
}