// eslint-disable-next-line import/prefer-default-export
export const fetchClientRegion = () =>
  fetch('https://extreme-ip-lookup.com/json/').then((res) => res.json());
