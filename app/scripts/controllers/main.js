'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')

	.controller('MasterCtrl', function($scope) {
		$scope.score = {value:0};
	})

  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.quiz = [
	    { 
	      "q": "Who is the best ping pong player at FSA?", 
	      'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
	      'answer': "Nimit",
	      'difficulty': 1,
	      'answered': false 
	    },
	    { "q": "Which robot name was chanted during Lego Mindstorms?", 
	      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
	      'answer':'noHope.js',
	      'difficulty': 3,
	      'answered': false 
	    },
	    { 
	      'q': "Out of the following frontend frameworks, which framework is most rails-like", 
	      'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
	      'answer':'Ember.js',
	      'difficulty': 2,
	      'answered': false 
	    },
	    { 
	      'q': "Which project used a local data store?", 
	      'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
	      'answer':'Twitter.js',
	      'difficulty': 1,
	      'answered': false 
	    }
	  ];

	  $scope.options = [];
	  $scope.addOption = function () {
	  	$scope.options.push({value:''});
	  };
	  $scope.addQuestion = function() {
	  	var newQuestion = {};
	  	newQuestion.q = $scope.q;
	  	newQuestion.answer = $scope.answer;
	  	newQuestion.options = $scope.options;
	  	newQuestion.difficulty = +$scope.difficulty;
	  	$scope.quiz.push(newQuestion);
	  }

	  $scope.valueToOrderBy = 'difficulty';

	  $scope.checkAnswer = function(selectedValue, question) {
	  	if(selectedValue === question.answer && question.answered !== true) {
	  		$scope.score.value++;
	  	}
  		question.answered = true;
	  };

	  // $scope.score = 0;
  });
