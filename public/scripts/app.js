angular.module('portfolioSite',[])

.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log("hello world!! About me")
  }

  $scope.projects = function(){
    console.log("take me to projects!")
  }

  $scope.projects = [
    {
      "name":"Elephant Trivia",
      "applink":"http://rewarren.github.io/Elephant-Trivia/",
      "github":"https://github.com/rewarren/Elephant-Trivia",
      "blurb":"Built with HTML, CSS and jQuery, a fun and informative trivia quiz about, you guessed it, Elephants!",
      "photoUrl":"images/projects/eletrivia.jpg"
    },
    {
      "name":"Where Would Silvia Go",
      "applink":"https://wwsg.herokuapp.com/",
      "github":"https://github.com/rewarren/wwsg",
      "blurb":"a Ruby on Rails application inspired by my friend Silvia, who always had a restaurant recommendation ready for anyone who asked.",
      "photoUrl":"images/projects/wwsg.jpg"
    },
    {
      "name":"WiFinder",
      "applink":"https://wifinder-app.herokuapp.com/",
      "github":"https://github.com/rewarren/wifinder",
      "blurb":"Ever want to work on your laptop out of the house, but not sure where to go? WiFinder allows you to find, rate and comment on local spots with available wifi for those on-the-go needs. It was built in collaboration between WDI and UX students at General Assembly.",
      "photoUrl":"images/projects/wifinder.jpg"
    }
  ]


});
