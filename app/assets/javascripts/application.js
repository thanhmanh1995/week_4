// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require_self
jQuery(document).ready(function($) {
	$('.logout a').click(function(event) {
		event.preventDefault();
		$.ajax({
			url: '/logout',
			type: 'DELETE',
			dataType: 'json',
			data: { authenticity_token: $('meta[name="csrf-token"]').attr('content')}
		})
		.always(function() {
			location.reload(false)
		});
	});
});