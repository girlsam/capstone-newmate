(function () {
  'use strict'
  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController)

  mainController.$inject = ['$scope']

  function mainController ($scope) {
    this.greeting = 'Hello World!'
  }
})()
