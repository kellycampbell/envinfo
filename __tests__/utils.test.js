const utils = require('../src/utils');
const cases = {
  mysql: {
    index: 1,
    string: 'mysql  Ver 14.14 Distrib 5.7.21, for osx10.13 (x86_64) using  EditLine wrapper',
    version: '5.7.21',
  },
  bash: {
    string: 'GNU bash, version 4.4.12(1)-release (x86_64-apple-darwin17.0.0)',
    version: '4.4.12',
  },
  php: {
    string: 'PHP 7.1.7 (cli) (built: Jul 15 2017 18:08:09) ( NTS )',
    version: '7.1.7',
  },
  docker: {
    string: 'Docker version 18.03.0-ce, build 0520e24',
    version: '18.03.0',
  },
  elixir: {
    regex: /[Elixir]+\s([\d+.[\d+|.]+)/,
    index: 1,
    string: `Erlang/OTP 20 [erts-9.2.1] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]
  Elixir 1.6.2 (compiled with OTP 20)`,
    version: '1.6.2',
  },
  sublime: {
    regex: /\d+/,
    string: 'Sublime Text Build 3143',
    version: '3143',
  },
  go: {
    string: 'go version go1.9.3 darwin/amd64',
    version: '1.9.3',
  },
  ruby: {
    string: 'ruby 2.3.3p222 (2016-11-21 revision 56859) [universal.x86_64-darwin17]',
    version: '2.3.3',
  },
  virtualbox: {
    string: '5.2.8r121009',
    version: '5.2.8',
  },
  xcodebuild: {
    string: `Xcode 9.0
  Build version 9A235`,
    version: '9.0',
  },
};

describe('Matching version strings against real world cases', () => {
  Object.keys(cases).map(c =>
    test(`${c} returns expected version`, () =>
      expect(utils.findVersion(cases[c].string, cases[c].regex, cases[c].index)).toEqual(
        cases[c].version
      ))
  );
});
