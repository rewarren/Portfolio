angular.module('portfolioSite')

.directive('projects', function(){
  return {
    templateUrl: "/templates/projects.html",
    replace: true
  }
})
