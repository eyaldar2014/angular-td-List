(function() {
    
  const NotesController = function ($scope, NotesFactory, appSettings) {

      $scope.notes = NotesFactory.getNotes();
      $scope.appSettings = appSettings;

      // checking factory :
      console.log($scope.notes)

  }

  NotesController.$inject = ['$scope', 'NotesFactory', 'appSettings'];

  
  angular.module('notesApp')
    .controller('NotesController', NotesController);
}());