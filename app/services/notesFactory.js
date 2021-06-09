(function() {
  const NotesFactory = function() {
  

      const factory = {};
      let notes = []
      let counter = 0
      let key = 1
      
      factory.getNotes = function() {
          return notes
      };

      factory.editNote = function(noteContent) {
        return console.log('edit')
      };
      factory.saveNote = function(newContent, noteId) {
        notes[noteId].content = newContent
        return console.log('saved')
      };
      factory.stopEditNote = function(oldContent, noteId) {
        notes[noteId].content = oldContent
        return console.log('canceled')
      };


      factory.addNote = function(title) {

        notes[counter] = {
          key: key,
          id : counter,
          title : title,
          date : Date.now(),
          content: ''
        }
        counter = counter + 1
        key = key + 1

        return console.log(notes)
      };

      factory.deleteNote = function(idNumber) {

        notes[idNumber] = notes[notes.length -1]
        notes[idNumber].id = idNumber
        notes.splice(-1,1)

        counter = counter - 1

        return console.log(notes)
      };

      factory.routeToNote = function(idNumber) {
        return console.log(notes[idNumber])
      };
      


      return factory;
  };
  
  // NotesFactory.$inject = [ ];

  
  angular.module('notesApp').factory('NotesFactory', NotesFactory);
                                         
}());