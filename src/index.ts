#!/usr/bin/env ts-node

require('dotenv').config()


const OPENAI_AUTH = function(input):  { login: string, password: string }[] {
  const output: { login: string, password: string }[] = [];
  for (const key in input) {
    if (key.startsWith('OPENAI_LOGIN_')) {
      const login = input[key] as string;
      const passwordKey = key.replace('OPENAI_LOGIN_', 'OPENAI_PASS_');
      const password = input[passwordKey] as string;
      output.push({ login, password });
    }
  }
  return output
}(process.env)

console.log(OPENAI_AUTH);


const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log(hello("me"));