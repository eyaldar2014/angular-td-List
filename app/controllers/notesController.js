(function () {

  const NotesController = function ($scope, NotesFactory, appSettings) {

    

    $scope.appSettings = appSettings;
    
    $scope.notes = NotesFactory.getNotes();

    $scope.routeToNote = NotesFactory.routeToNote

    $scope.sortBy = 'date';
    $scope.reverse = false;

    $scope.deleteNote = NotesFactory.deleteNote

    $scope.addNote = function(noteTitle){
      NotesFactory.addNote(noteTitle)
      $scope.noteTitle = ''
    }

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;

    };
  

}

  NotesController.$inject = ['$scope', 'NotesFactory', 'appSettings'];


angular.module('notesApp')
  .controller('NotesController', NotesController);
}());