(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Web3Constants = {}));
}(this, (function (exports) { 'use strict';

  let CONSTANTS = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'ETH',
    CURRENCY: 'Ether',
    NAME: 'Ethereum',
    USD: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
  };

  let CONSTANTS$1 = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'BNB',
    CURRENCY: 'BNB',
    NAME: 'BNB Smart Chain',
    USD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  };

  let CONSTANTS$2 = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'MATIC',
    CURRENCY: 'Polygon',
    NAME: 'Polygon',
    USD: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
  };

  let CONSTANTS$3 = {};

  CONSTANTS$3['ethereum'] = CONSTANTS;
  CONSTANTS$3['bsc'] = CONSTANTS$1;
  CONSTANTS$3['polygon'] = CONSTANTS$2;

  exports.CONSTANTS = CONSTANTS$3;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
