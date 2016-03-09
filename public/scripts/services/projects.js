'use strict'

angular.module('portfolioSite')

.service('projectService', function($http){

  this.getProjects = function(callback){
    $http.get('mock/projects.json')
    .then(callback)
  }

})
