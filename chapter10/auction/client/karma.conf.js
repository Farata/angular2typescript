module.exports = function (config) {
  config.set({
    browsers     : ['Chrome', 'Firefox'],
    frameworks   : ['jasmine'],
    reporters    : ['mocha'],
    singleRun    : true,
    preprocessors: {'./karma-test-runner.js': ['webpack']},
    files        : [{pattern: './karma-test-runner.js', watched: false}],
    webpack      : require('./webpack.test.config.js'),
    webpackServer: {noInfo: true}
  });
};
