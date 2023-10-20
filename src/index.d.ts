import { CallEffect } from 'redux-saga/effects';

declare module 'redux-saga/effects' {
  export function call<A extends any[], R>(fn: (...args: A) => R, ...args: A): CallEffect<R>;
}