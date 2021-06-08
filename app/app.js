(function() {

    const app = angular.module('notesApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'NotesController', 
                templateUrl: 'app/views/notes.html' 
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());