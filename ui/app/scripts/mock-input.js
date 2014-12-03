module.exports = exports = {
  suites: [
    {
      id: 'add.js:add(x, y)',
      title: 'add(x, y)',
      tests: [
        {
          id: 'add.js:add(x, y):add(1, 2) == 3',
          title: 'add(1, 2) == 3',
          level: 2,
          passing: true,
        },
        {
          id: 'add.js:add(x, y):add(10, 12) == 22',
          title: 'add(10, 12) == 22',
          level: 2,
          passing: false,
        },
      ],
      level: 1,
      suites: [],
    },
  ],
  tests: [
    {
      id: 'add.js:gets exposed',
      title: 'gets exposed',
      level: 1,
      passing: true,
    },
  ],
  files: [
    {
      name: 'add.js',
      coverage: 0.8
    },
    {
      name: 'something.js',
      coverage: 0.7
    },
  ],
};
