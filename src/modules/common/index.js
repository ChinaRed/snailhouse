'use strict';

module.exports =
  angular.module('clearancefly.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
