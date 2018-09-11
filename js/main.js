$(document).ready(function() {
//menu mouseovr dropdown logic
	$('.dropdown').on('mouseover', function(){
		$(this).find('.dropdown-menu').show();
	});
	$('.dropdown').on('mouseout', function(){
		$(this).find('.dropdown-menu').hide();
	});

//home page in image on mouseover animation logic
    $(".img-container").on('mouseenter', function(){
		$(this).find('.overlay').css('display','block');
		var play=  $(this).find('.play-icon');
		var film=  $(this).find('.film');
		play.animate({
		top: '-20%'
		}, "fast");
		film.animate({
		top: '100%'
		}, "slow");
    });

    $(".img-container").on('mouseleave', function(){
		$(this).find('.overlay').css('display','none');
		var play=  $(this).find('.play-icon');
		var film=  $(this).find('.film');
		play.animate({
		top: '25%'
		}, "fast");
		film.animate({
		top: '60%'
		}, "slow");
	});

// Gets the video src from the data-src on each button
    var $imageSrc3;
	$('.modalvideo a').on('click',function() {
		var $this = $(this);
		$imageSrc3 = $(this).data('commvideo');

		//next and prev button's hide or show logic	
		if($this.next('.modalvideo a').attr('data-commvideo') === undefined)
		{
			$('#next-btn').hide();
			$('#prev-btn').hide();
		}
		else{
			$('#next-btn').show();
			$('#prev-btn').show();
		}
		if($this.data('num') == 'first'){
			$('#prev-btn').hide();
			$('#next-btn').show();
		}
		if($this.data('num') == 'last'){
			$('#next-btn').hide();
			$('#prev-btn').show();
		}

		// next click logic			
		$('#next-btn').on('click', function() {
			$next = $this.next('.modalvideo a').attr('data-commvideo');
			$this = $this.next('.modalvideo a');
			$('.modal-body #commimage').attr('src', $next+'?autoplay=1&showinfo=0&controls=0&autohide=1');
			if($this.data('num') == 'last'){
				$(this).hide();
				$('#prev-btn').show();
			}
			if($this.data('num') != 'last'){
				$(this).show();
				$('#prev-btn').show();
			}
		});

		// prev click logic
		$('#prev-btn').on('click', function() {
			$prev = $this.prev('.modalvideo a').attr('data-commvideo');
			$this = $this.prev('.modalvideo a');
			$('.modal-body #commimage').attr('src', $prev+'?autoplay=1&showinfo=0&controls=0&autohide=1');
			if($this.data('num') == 'first'){
				$(this).hide();
				$('#next-btn').show();
			}
			if($this.data('num') != 'first'){
				$(this).show();
				$('#next-btn').show();
			}
		});	
	});
	
// when the modal is opened autoplay it
    $('#commModal').on('shown.bs.modal', function (e) {
        var playvideo =  $("#commimage").attr('src', $imageSrc3+'?autoplay=1&showinfo=0&controls=0&autohide=1'  );
        console.log($imageSrc3);
	});
	
// reset the modal image
    $('#commModal').on('hide.bs.modal', function (e) {
        $("#commimage").attr('src','');
    })
});// document ready
