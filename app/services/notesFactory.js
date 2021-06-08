(function() {
  const NotesFactory = function() {
  
      const factory = {};
      let notes = []
      
      factory.getNotes = function() {
          return notes
      };

      
      return factory;
  };
  
  // NotesFactory.$inject = [];

  
  angular.module('notesApp').factory('NotesFactory', NotesFactory);
                                         
}());