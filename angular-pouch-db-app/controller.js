app.controller('TodoCtrl', function($scope,pouch) {
    var db = pouch;

    $scope.todos = [];
    var options = {
      include_docs: true,
      descending: true
    };

    refreshtodo(); 
    //add todo list to pouch db database
    $scope.addtodo = function() {
      var timestamp = new Date().getTime();
      db.put({
        _id: timestamp + 'A',
        date: new Date(timestamp).toDateString(),
        sample: $scope.add_to_pouch
      }).then(refreshtodo);
    };
    
    //remove todo list from pouch db database
    $scope.removetodo = function(todo_id) {
      db.get(todo_id).then(function(doc) {
        return db.remove(doc);
      }).then(refreshtodo).catch(function (err) {
      });
    };

//refresh the todo list view
    function refreshtodo(res) {
      //db.destroy();
      var db_data = db.allDocs(options).then(function(result){
       $scope.todos = result.rows;  
      });
     }
   
   

     


});
  