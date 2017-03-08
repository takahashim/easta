'use strict';

const assert = require('assert');
const easta = require('../');

describe('easta', () => {
  it('is a function', () => {
    assert(typeof easta === 'function');
  });

  it('Narrow', () => {
    assert(easta('A') === 'Na');
  });

  it('Fullwidth', () => {
    assert(easta('Ａ') === 'F');
  });

  it('Wide', () => {
    assert(easta('あ') === 'W');
  });

  it('Halfwidth', () => {
    assert(easta('ｱ') === 'H');
  });

  it('Ambiguous', () => {
    assert(easta('α') === 'A');
  });

  it('Neutral', () => {
    assert(easta('À') === 'N');
    assert(easta('\u{0}') === 'N');
  });

  it('all', () => {
    assert(easta('\u{0}') === 'N');
    assert(easta('\u{1}') === 'N');
    assert(easta('\u{2}') === 'N');
    assert(easta('\u{3}') === 'N');
    assert(easta('\u{4}') === 'N');
    assert(easta('\u{1F}') === 'N');
    assert(easta('\u{20}') === 'Na');
    assert(easta('\u{21}') === 'Na');
    assert(easta('\u{23}') === 'Na');
    assert(easta('\u{24}') === 'Na');
  });

  it('22', () => {
    assert(easta('\u{22}') === 'Na');
  });
});
