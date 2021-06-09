
  (function () {

    const NoteController = function ($scope, NotesFactory, $routeParams) {
  
      $scope.notes = NotesFactory.getNotes();

      const init = function(){
        for(let i=0 ; i < $scope.notes.length ; i++){
          if( $scope.notes[i].key === parseInt($routeParams.noteId) ){
            $scope.note = $scope.notes[i]
          }
        }
      }
      init()

      $scope.editNote = function(noteContent){
        NotesFactory.editNote(noteContent)
        $scope.readOnly = false
        $scope.editMode = true
      }

      $scope.saveNote = function(newContent, currentNoteId){
        NotesFactory.saveNote(newContent, currentNoteId)
        $scope.readOnly = true
        $scope.editMode = false
      }
      $scope.stopEditNote = function(oldContent, currentNoteId){
        NotesFactory.stopEditNote(oldContent, currentNoteId)
        $scope.readOnly = true
        $scope.editMode = false
        $scope.newContent = oldContent
      }

  }
  
    NoteController.$inject = ['$scope', 'NotesFactory', '$routeParams'];
  
  
  angular.module('notesApp')
    .controller('NoteController', NoteController);
  }());

