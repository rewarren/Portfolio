angular.module('portfolioSite',[])

.controller('mainCtrl', function($scope, projectService){
  $scope.helloWorld = function(){
    console.log("hello world!! About me")
  }

  // $scope.projects = function(){
  //   console.log("take me to projects!")
  // }

  projectService.getProjects(function(response){
    console.log(response.data)
    var projects = response.data
    $scope.projects = projects;
  })

})

.service('projectService', function($http){

  this.getProjects = function(callback){
    $http.get('mock/projects.json')
    .then(callback)
  }

})
