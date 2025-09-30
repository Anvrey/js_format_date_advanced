'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const fromSeparator = fromFormat[3];
  const toSeparator = toFormat[3];

  const parts = date.split(fromSeparator);

  let yyyy = '';
  let yy = '';
  let mm = '';
  let dd = '';

  for (let i = 0; i < 3; i++) {
    if (fromFormat[i] === 'YYYY') {
      yyyy = parts[i];
    } else if (fromFormat[i] === 'YY') {
      yy = parts[i];
    } else if (fromFormat[i] === 'MM') {
      mm = parts[i];
    } else if (fromFormat[i] === 'DD') {
      dd = parts[i];
    }
  }

  if (yyyy !== '' && toFormat.includes('YY')) {
    yy = yyyy.slice(2);
  }

  if (yy !== '' && toFormat.includes('YYYY')) {
    if (yy < '30') {
      yyyy = '20' + yy;
    } else {
      yyyy = '19' + yy;
    }
  }

  let result = '';

  for (let i = 0; i < 3; i++) {
    if (toFormat[i] === 'YYYY') {
      result += yyyy;
    } else if (toFormat[i] === 'YY') {
      result += yy;
    } else if (toFormat[i] === 'MM') {
      result += mm;
    } else if (toFormat[i] === 'DD') {
      result += dd;
    }

    if (i < 2) {
      result += toSeparator;
    }
  }

  return result;
}

module.exports = formatDate;
