(function() {
  const NotesFactory = function() {
    
      const factory = {};
      let notes = []
      let counter = 0
      let key = 1


      // get notes from local storage
      factory.getNotes = function() {
        notes = JSON.parse(localStorage.getItem("list"))
        notes == null ? notes = [] : notes
        console.log(notes)

        counter = JSON.parse(localStorage.getItem("counter"))
        key = JSON.parse(localStorage.getItem("key"))
        key == null ? key = 1 : key
        counter == null ? counter = 0 : counter

        
        return notes
      };

      // // if local storage is empty - initialize properties
      
      
      
  
      

      // factory.getNotes = function() {
      //   return notes
      // };

      factory.updateNotesStorage = function() {
        localStorage.setItem("list", JSON.stringify(notes));
        localStorage.setItem("counter", JSON.stringify(counter));
        localStorage.setItem("key", JSON.stringify(key));
      }

      factory.saveTitle = function(newTitle, noteId) {
        notes[noteId].title = newTitle

        factory.updateNotesStorage()        
      }

      //here
      factory.editNote = function(noteContent) {
        return console.log('edit')
      };
      factory.saveNote = function(newContent, noteId) {
        notes[noteId].content = newContent
        
        factory.updateNotesStorage()
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

        factory.updateNotesStorage()

        return console.log(notes)
      };

      factory.deleteNote = function(idNumber) {

        notes[idNumber] = notes[notes.length -1]
        notes[idNumber].id = idNumber
        notes.splice(-1,1)

        counter = counter - 1

        factory.updateNotesStorage()

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

