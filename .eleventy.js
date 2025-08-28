module.exports = function (config) {
  config.setServerOptions({
    https: {
      key: '/Users/rolivasarhelyi/ssl/localhost.key',
      cert: '/Users/rolivasarhelyi/ssl/localhost.crt',
    },
  });
  config.addPassthroughCopy('src/js');
  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
  };
};
