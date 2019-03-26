
const linkExp = /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i;
const mailExp = /^mailto:/i;

// eslint-disable-next-line no-unused-vars
const parseTextHTML = (text, isHTML, options) => {
  if (typeof text !== 'string') { return null; }
  if (text === null || text === '') { return text; }
  let rawText = text;
  const html = [];
  const URLS = [];
  let match;
  let i;
  let url;
  // eslint-disable-next-line no-cond-assign
  while ((match = rawText.match(linkExp))) {
    [url] = match;
    if (!match[2] && !match[4]) {
      url = (match[3] ? 'http://' : 'mailto:') + url;
    }
    i = match.index;
    if (rawText.substr(0, i)) {
      html.push(rawText.substr(0, i));
    }
    html.push('<a ');
    if (options) {
      Object.keys(options).forEach((key) => {
        html.push(`${key}="${options[key]}" `);
      });
    }
    html.push('href="');
    URLS.push(url.replace(/"/g, '&quot;'));
    html.push(url.replace(/"/g, '&quot;'));
    html.push('">');

    if (match[0].replace(mailExp, '')) {
      html.push(match[0].replace(mailExp, ''));
    }
    html.push('</a>');
    rawText = rawText.substring(i + match[0].length);
  }
  if (rawText) {
    html.push(rawText);
  }
  return isHTML ? html.join('') : URLS;
};

const getUrls = text => parseTextHTML(text, false);

const getHTMLText = (text, options) => parseTextHTML(text, true, options);

export default { getUrls, getHTMLText };
