export const STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

export const DATA = {
  CODE: '코드',
  CAPITAL: '수도',
  NAME: '이름',
  REGION: '대륙',
  CALL: '전화번호',
};

export const API_URL =
  'https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes';
