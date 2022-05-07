$(document).ready(function() {
	if (typeof(tinymce) != "undefined") {
		tinymce.init({
			selector: '.pconteno',
			images_upload_url: 'king-include/newsupload.php',
			images_upload_base_path: 'king-include/',
			images_upload_credentials: false,
			theme: 'inlite',
			plugins: 'image table link paste textpattern autolink',
			insert_toolbar: 'quickimage quicktable',
			selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
			inline: true,
			paste_data_images: false,
			relative_urls: false,
			remove_script_host: false
		});
		tinymce.init({
			selector: '.pcontentaws',
			images_upload_url: 'king-include/newsupload.php',
			images_upload_credentials: false,
			theme: 'inlite',
			plugins: 'image table link paste textpattern autolink',
			insert_toolbar: 'quickimage quicktable',
			selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
			inline: true,
			paste_data_images: false,
			relative_urls: false,
			remove_script_host: false
		});
	}
	$("#dropzone").sortable({
		items: '.dz-preview',
		cursor: 'move',
		opacity: 0.9,
		containment: "parent",
		distance: 20,
		tolerance: 'pointer',
	});
	$("div#dropzone").dropzone({
		url: 'king-include/multipleupload.php',
		thumbnailHeight: 160,
		thumbnailWidth: 160,
		addRemoveLinks: true,
		maxFiles: max_file_count,
		maxFilesize: max_img_upload,
		acceptedFiles: 'image/jpeg,image/png,image/gif',
		dictRemoveFile: '',
		dictCancelUpload: '<i class="far fa-stop-circle"></i>',
		previewTemplate: '<div class="dz-preview dz-file-preview"><img data-dz-thumbnail /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
		init: function() {
			this.on('success', function(file, response) {
				var e = JSON.parse(response);
				var inp = document.createElement("INPUT");
				var radio = document.createElement("INPUT");
				var label = document.createElement("label");
				inp.setAttribute("type", "hidden");
				inp.setAttribute("name", "submit_image[]");
				inp.setAttribute("id", "submit_image");
				inp.setAttribute("value", e.main);
				radio.setAttribute("value", e.thumb);
				radio.setAttribute("type", "radio");
				radio.setAttribute("name", "thumb");
				radio.setAttribute("id", "thumb_" + e.thumb);
				radio.setAttribute("class", "thumb-radio");
				radio.setAttribute("checked", true);
				label.setAttribute("title", "set as thumb");
				label.setAttribute("class", "thumb-radio-label");
				label.setAttribute("for", "thumb_" + e.thumb);
				file.previewElement.appendChild(inp);
				file.previewElement.appendChild(radio);
				file.previewElement.appendChild(label);
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
							'fileid': e.main,
							'thumbid': e.thumb
						},
						success: function(data) {
							file.previewElement.remove();
						}
					});
				});
				file.previewElement.appendChild(removeButton);
			});
		}
	});
	$("div#viddropzone").dropzone({
		url: 'king-include/videoupload.php',
		thumbnailHeight: 160,
		thumbnailWidth: 160,
		maxFiles: 1,
		timeout: 180000,
		maxFilesize: max_vid_upload,
		addRemoveLinks: true,
		dictRemoveFile: '',
		dictCancelUpload: '<i class="far fa-stop-circle"></i>',
		acceptedFiles: 'video/mp4, video/quicktime, audio/mp3, audio/mpeg',
		previewTemplate: '<div class="dz-preview dz-file-preview"><img data-dz-thumbnail /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
		init: function() {
			this.on('success', function(file, response) {
				var e = JSON.parse(response);
				var inp = document.createElement("INPUT");
				var inp2 = document.createElement("INPUT");
				inp.setAttribute("type", "hidden");
				inp.setAttribute("name", "extra");
				inp.setAttribute("id", "vcontent");
				inp.setAttribute("value", e.main);
				file.previewElement.appendChild(inp);
				inp2.setAttribute("type", "hidden");
				inp2.setAttribute("name", "submit_image");
				inp2.setAttribute("id", "thumb");
				inp2.setAttribute("value", e.thumb);
				file.previewElement.appendChild(inp2);
				if (e.prev) {
					file.previewElement.querySelector("img").src = 'king-include/' + e.prev;
				}
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
							'fileid': e.main,
							'thumbid': e.thumb
						},
						success: function(data) {
							file.previewElement.remove();
						}
					});
				});
				file.previewElement.appendChild(removeButton);
			});
		}
	});
	$("div#newsthumb").dropzone({
		url: 'king-include/newsupload.php',
		thumbnailHeight: 160,
		thumbnailWidth: 160,
		maxFiles: 1,
		maxFilesize: max_img_upload,
		addRemoveLinks: true,
		acceptedFiles: 'image/jpeg,image/png,image/gif',
		dictRemoveFile: '',
		dictCancelUpload: '<i class="far fa-stop-circle"></i>',
		previewTemplate: '<div class="dz-preview dz-file-preview"><img data-dz-thumbnail /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
		init: function() {
			this.on('success', function(file, response) {
				var e = JSON.parse(response);
				var inp = document.createElement("INPUT");
				inp.setAttribute("type", "hidden");
				inp.setAttribute("name", "news_thumb");
				inp.setAttribute("id", "news_thumb");
				inp.setAttribute("value", e.id);
				file.previewElement.appendChild(inp);
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
						}
					});
				});
				file.previewElement.appendChild(removeButton);
			});
		}
	});
$(document).on('click', '#dzremove', function() {
	$(this).parent('.dz-preview').remove();
});

});