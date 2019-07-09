$(document).ready(function() {

	// Timer

	let deadline = '2019-04-21';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( (t/(1000*60*60)) );

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds,
				};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours ;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				// clearInterval(timInterval);
				timer.innerHTML = 'Конец Акции!';
			}

		};

		updateClock();
		let timInterval = setInterval(updateClock, 1000);

	};

	setClock('first-timer', deadline);
	setClock('second-timer', deadline);

	// Modal

	function modal(result) {
		let modal = $('.modal');
		let close = $('.modal-close');

		if (result != " ") {
			modal.css('display', 'block');
		}

		close.on('click', function() {
			modal.css('display', 'none');
		})
	}

	//Main forms

	$(".main-form").submit(function(event) {

		event.preventDefault();

		let clickedForm = $(this);

		if ( !clickedForm.find("input[name=name]").val() || !clickedForm.find("input[name=phone]").val() || !clickedForm.find("input[name=email]").val() ) {
			alert("Заполните пожалуйста поля!")
		} else {
			$.ajax({
				type: $(this).attr('method'),
				url: $(this).attr('action'),
				data: new FormData(this),
				contentType: false,
				cache: false,
				processData: false,
				success: function(result) {
					modal(result);
				}
			});
		}

	});

	// Call-back forms

	$('.call-back').on('click', function() {
		$('.modal-callback').css('display', 'block');
	});

	$('.modal-close').on('click', function() {
		$('.modal-callback').css('display', 'none');
	});

	$(".call-back-form").submit(function(event) {

		event.preventDefault();

		let clickedForm = $(this);

		if ( !clickedForm.find("input[name=name]").val() || !clickedForm.find("input[name=phone]").val() ) {
			alert("Заполните пожалуйста поля!")
		} else {
			$.ajax({
				type: $(this).attr('method'),
				url: $(this).attr('action'),
				data: new FormData(this),
				contentType: false,
				cache: false,
				processData: false,
				success: function(result) {
					$('.modal-callback').css('display', 'none');
				}
			});
		}

	});

});