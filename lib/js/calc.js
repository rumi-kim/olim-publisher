export function numberToString(number) {
  return number.toLocaleString('en-US');
}

export function numberFormatter(number) {
  const setting = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = setting.length - 1; i > 0; i--) {
    if (number >= setting[i].value) {
      break;
    }
  }
  return (
    (number / setting[i].value).toFixed(0).replace(rx, '$1') + setting[i].symbol
  );
}
