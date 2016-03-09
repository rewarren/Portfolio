angular.module('portfolioSite',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/intro.html',
    controller: 'mainCtrl'
  })
  .when('/about', {
    templateUrl: 'templates/about.html',
    controller: 'mainCtrl'
  })
  .when('/projects', {
    templateUrl: 'templates/projects.html',
    controller: 'mainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
}])


.controller('mainCtrl', function($scope, projectService, $http){

  projectService.getProjects(function(response){
    console.log(response.data)
    var projects = response.data
    $scope.projects = projects;
  })

})
