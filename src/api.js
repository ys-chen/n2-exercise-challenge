const TEAM_API = 'https://script.google.com/macros/s/AKfycbwXFdcsmA5c_-O30lfN5Ks3OGYboXzrH09gdnwGUCUXXiUe_TKfPKmCYo2QZIPrO4LQ/exec';
const ACTIVITY_API = 'https://script.google.com/macros/s/AKfycbwCyqKtYQLS01kuRsciL3E03-Tl-Y_0ZwDWHV_u_WuPiUllwSzpdyTC6lmovHyNAfla/exec';

/**
 * Append search parameters after the URL.
 * @param {string} url - The URL used to append search parameters (query string).
 * @param {Object} params - The object of search parameters.
 * @example appendSearchParams('/data/posts', { author: 'nine-knives', since: '2000-01-01' })
 * // return '/data/posts?author=nine-knives&since=2000-01-01'
 * @returns {string} - The URL with search parameters.
 */
export const appendSearchParams = (url, params) => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) searchParams.set(key, value);
  }
  return `${url}?${searchParams.toString()}`;
}

export const asyncFetch = async (...args) => {
  const response = await fetch(...args);
  const json = await response.json();
  if (json?.response?.result === 'fail') {
    const { response: { message } } = json;
    throw new Error(message);
  }
  return json;
}

export const goTo = (url) => { window.location.href = url; }

export const getMemberList = () => asyncFetch(`${TEAM_API}?request=memberList`);

export const postRegister = (params) => {
  let url = ACTIVITY_API;
  if (params) url = appendSearchParams(url, params);
  return asyncFetch(url, { method: 'POST' });
}
