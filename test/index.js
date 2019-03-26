import { assert } from 'chai';
import { getUrls, getHTMLText } from '../src';

describe('test email.', () => {
  it('should test email', () => {
    const expected = getHTMLText('abc www.google.com');
    assert(expected === 'abc <a href="http://www.google.com">www.google.com</a>', 'Not Correct!');
  });

  it('should test email with options', () => {
    const expected = getHTMLText('abc www.google.com', { target: '__blank' });
    assert(expected === 'abc <a target="__blank" href="http://www.google.com">www.google.com</a>', 'Not Correct!');
  });

  it('should test urls list', () => {
    const expectedVal = ["http://www.google.com", "mailto:gmail@gmail.com"];
    const value = getUrls('aaa www.google.com gmail@gmail.com');
    assert(expectedVal.length == value.length, 'Not Correct!');
  });
});
