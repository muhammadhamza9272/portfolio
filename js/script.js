$(document).ready(function () {
	$(window).on("scroll" , function (){
		$(".skill_bar").each(function (index, skill_bar){
			var condition = $(skill_bar).find(".conditioner");

			var progressPercent = parseInt($(skill_bar).attr("data-percentage"));

			var progressTitleHolder = $(skill_bar).find(".progress-title-holder");
			var progressWrapper = $(progressTitleHolder).find(".progress-wrapper");
			var progressMark = $(progressWrapper).find(".progress-mark");

			var percent = $(progressMark).find(".percent");
			var progressOutter = $(skill_bar).find(".progress-outter");
			var progressContent = $(skill_bar).find(".progress-content");

			if ($(window).scrollTop() > $(skill_bar).offset().top - 600){
				$(progressMark).css('left', progressPercent + '%');
				for(var i = 1; i <= progressPercent; i++)
				{
					$(progressContent).css('width', i + '%');
				}

				if($(condition).text() == 'yes'){
					$(percent).prop('Counter',0).animate({
					        Counter: progressPercent
					    }, {
					        duration: 2000,
					        easing: 'swing',
					        step: function (now) {
					            $(this).text(Math.ceil(now));
					        }
					    });
					$(condition).text('no');
				}
			}
		});
	});

	$('#videoModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var str = button.data('whatever') // Extract info from data-* attributes

	  var res = str.split(",");
	  var modal = $(this)
	  modal.find('.modal-title').text(res[0])

	  var video = $('.modal-body video')[0];
	  video.src = res[1];
	  video.load();
	  video.play();
	});

	$("#videoModal").on("hidden.bs.modal", function() {
		var video = $('.modal-body video')[0];
		video.pause();
	});
});

