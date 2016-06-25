var app = angular.module('ehealth', ['pouchdb']);
app.factory('pouch', function(pouchDB) {
  return pouchDB('name');
});
