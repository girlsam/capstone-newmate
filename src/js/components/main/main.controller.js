(function () {
  'use strict'
  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController)

  mainController.$inject = ['$scope']

  function mainController ($scope) {
    this.greeting = 'Newmate -- Get a roommate'
  }
})()
