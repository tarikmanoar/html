Dropzone.autoDiscover = false;
var app = angular.module('dropzone', []);
app.directive('dropzone', function() {
	return function(scope, element, attrs) {
		element.dropzone({
			url: 'king-include/newsupload.php',
			thumbnailHeight: 160,
			thumbnailWidth: 160,
			addRemoveLinks: true,
			maxFiles: 1,
			acceptedFiles: 'image/jpeg,image/png,image/gif',
			dictRemoveFile: '',
			dictCancelUpload: '<i class="far fa-stop-circle"></i>',
			previewTemplate: '<div class="dz-preview dz-file-preview"><img data-dz-thumbnail /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
			init: function() {
				this.on('success', function(file, response) {
					var e = JSON.parse(response);
					scope.$apply(function() {
						scope.input.img = e.id;
					});
					scope.$apply(function() {
						scope.columnimg = e.id;
					});
					scope.$apply(function() {
						scope.result.img = e.id;
					});
					var removeButton = Dropzone.createElement('<a class="d-remove"><i class="fas fa-trash-alt"></i></a>');
					var _this = this;
					removeButton.addEventListener("click", function(a) {
						a.preventDefault();
						a.stopPropagation();
						_this.removeFile(file);
						$.ajax({
							type: 'POST',
							url: 'king-include/multipledelete.php',
							data: {
								'fileid': e.id,
								'thumbid': ''
							},
							success: function(data) {
								file.previewElement.remove();
								scope.$apply(function() {
									scope.input.img = '';
								});
								scope.$apply(function() {
									scope.columnimg = '';
								});
								scope.$apply(function() {
									scope.result.img = '';
								});
							}
						});
					});
					file.previewElement.appendChild(removeButton);
				});
			}
		});
	}
});
app.directive('dropzonemusic', function() {
	return function(scope, element, attrs) {
		element.dropzone({
			url: 'king-include/videoupload.php',
			thumbnailHeight: 160,
			thumbnailWidth: 160,
			addRemoveLinks: true,
			maxFiles: 1,
			acceptedFiles: 'audio/mp3, audio/mpeg',
			dictRemoveFile: '',
			dictCancelUpload: '<i class="far fa-stop-circle"></i>',
			previewTemplate: '<div class="dz-preview dz-file-preview"><img data-dz-thumbnail /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
			init: function() {
				this.on('success', function(file, response) {
					var e = JSON.parse(response);
					scope.$apply(function() {
						scope.input.columnimg = e.id;
					});
					var removeButton = Dropzone.createElement('<a class="d-remove"><i class="fas fa-trash-alt"></i></a>');
					var _this = this;
					removeButton.addEventListener("click", function(a) {
						a.preventDefault();
						a.stopPropagation();
						_this.removeFile(file);
						$.ajax({
							type: 'POST',
							url: 'king-include/multipledelete.php',
							data: {
								'fileid': e.id,
								'thumbid': ''
							},
							success: function(data) {
								file.previewElement.remove();
								scope.$apply(function() {
									scope.input.columnimg = '';
								});
							}
						});
					});
					file.previewElement.appendChild(removeButton);
				});
			}
		});
	}
});
angular.module('plunker', ['ui.sortable', 'dropzone']);
angular.module('plunker').controller('MyCtrl', ['$scope', function($scope) {
	$scope.sortableOptions = {
		handle: 'div .listhandle',
		axis: 'y'
	}
	$scope.sortableOptions2 = {
		handle: 'div .gridhandle'
	}
	$scope.columns = [{
		inputs: [{
			choices: '',
			tabz: 'grid1',
			correct: 'correct1'
		}]
	}];
	$scope.inputs = [{
		choices: ''

	}];
	$scope.results = [{

	}];
	$scope.addResult = function(index) {
		$scope.results.push({});
	}
	$scope.addInput = function(index) {
		$scope.columns[index].inputs.push({
			choices: ''
		});
	}
	$scope.addColumns = function() {
		$scope.columns.push({
			inputs: [{
				choices: '',
				tabz: 'grid1',
				correct: 'correct1'
			}]
		});
	}
	$scope.addList = function() {
		$scope.inputs.push({
			polltab: 'grid1',
		});
	}
$scope.removeInput = function(array, index) { 
  array.splice(index, 1);     
}
	$scope.removeColumn = function(index) {
		$scope.columns.splice(index, 1);
	}
	
}]);