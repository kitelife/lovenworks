// !Initialize

var duration = 1200;
var easing = 'easeInOutCubic';
var highest_page = 0;
$(document)
		.ready(
				function() {

					// !Initialize view
					$('.back-to-top').hide();
					// $('.active').find('.page-number').show();

					// !Initialize layout
					if (window.location.hash) {
						// determine active page
						var active_page = $(window.location.hash);
						var active_link = $(
								'.menu-item a[rel=' + window.location.hash
										+ ']').closest('li');
						var now_position = 7 - active_page.nextAll().length;

						now_position++;
						if (now_position != 7) {
							now_position = now_position % 7;
						}
						var next_page = $('.page:nth-child(' + now_position
								+ ')');
						var next_link = $('.menu-item:nth-child('
								+ now_position + ')');
						now_position++;
						if (now_position != 7) {
							now_position = now_position % 7;
						}
						var next2_page = $('.page:nth-child(' + now_position
								+ ')');
						var next2_link = $('.menu-item:nth-child('
								+ now_position + ')');
						now_position++;
						if (now_position != 7) {
							now_position = now_position % 7;
						}
						var next3_page = $('.page:nth-child(' + now_position
								+ ')');
						var next3_link = $('.menu-item:nth-child('
								+ now_position + ')');
						now_position++;
						if (now_position != 7) {
							now_position = now_position % 7;
						}
						var prev_page = $('.page:nth-child(' + now_position
								+ ')');
						var prev_link = $('.menu-item:nth-child('
								+ now_position + ')');
						now_position++;
						if (now_position != 7) {
							now_position = now_position % 7;
						}
						var prev2_page = $('.page:nth-child(' + now_position
								+ ')');
						var prev2_link = $('.menu-item:nth-child('
								+ now_position + ')');
						now_position++;
						if (now_position != 7) {
							now_position = now_position % 7;
						}
						var prev3_page = $('.page:nth-child(' + now_position
								+ ')');
						var prev3_link = $('.page:nth-child(' + now_position
								+ ')');

						// update classes
						$('.page, .menu-item').removeClass('active')
								.removeClass('next').removeClass('next2')
								.removeClass('next3').removeClass('previous')
								.removeClass('previous2').removeClass(
										'previous3');

						active_page.addClass('active');
						active_link.addClass('active');

						next_page.addClass('next');
						next_link.addClass('next');
						next2_page.addClass('next2');
						next2_link.addClass('next2');
						next3_page.addClass('next3');
						next3_link.addClass('next3');

						prev_page.addClass('previous');
						prev_link.addClass('previous');
						prev2_page.addClass('previous2');
						prev2_link.addClass('previous2');
						prev3_page.addClass('previous3');
						prev3_link.addClass('previous3');
						// update dom
						$('#content').prepend(active_page).prepend(next_page)
								.prepend(next2_page).prepend(next3_page);
						// active_page.find('.page-number').show();
						$('#navigation').append(active_link).append(next_link)
								.append(next2_link).append(next3_link);
					}
					$('body').show();

					// !Back to Top
					$('.back-to-top').live('click', function(event) {
						$('body,html').animate({
							scrollTop : 0
						}, duration);
						return false;
					});

					$(window).scroll(function() {
						if ($(this).scrollTop() > 100) {
							$('.back-to-top').fadeIn();
						} else {
							$('.back-to-top').fadeOut();
						}
					});

					// !Next page
					$('#home .next')
							.live(
									'click',
									function(event) {
										if (!$(this).is(':animated')) {
											// Initialize
											$('.back-to-top').fadeOut();

											$('#content .previous3').addClass('next4').removeClass('previous3');
											$('#content .previous2').animate({'left': '-229%'}, duration, easing,
													function() {
														$(this).addClass('previous3').removeClass('previous2');
											});
											$('#content .previous').animate({'left': '-151%'}, duration, easing,
													function(){
														$(this).addClass('previous2').removeClass('previous');
											});
											$('#content .active').animate({'left' : '-73%', 'margin-right' : '0%', 'margin-left' : '0%', 'backgroundColor' : '#EFF0F1'}, duration, easing,
													function() {
														$(this).addClass('previous').removeClass('active');
													}
											).find('.page-number').fadeOut().find('.back-to-top').fadeOut();
											$('#content .next').animate({'left' : '5%', 'margin-right' : '6%', 'margin-left' : '6%', 'backgroundColor' : '#FFFFFF' }, duration, easing,
													function() {
														$(this).addClass('active').removeClass('next');
													}
											).find('.back-to-top').fadeIn();
											$('#content .next2').animate({'left': '95%'}, duration, easing,
													function(){
														$(this).addClass('next').removeClass('next2');
											});
											$('#content .next3').animate({'left': '173%'}, duration, easing,
													function(){
														$(this).addClass('next2').removeClass('next3');
											});
											$('#content .next4').css({'left' : '-229%'}).animate({'left' : '251%'}, duration, easing, 
													function() {
														$(this).remove();
													}
											).clone().addClass('next3').removeClass('next4').appendTo('#content').css({'left' : '251%'}).animate({'left' : '-229%'}, duration);
											
											// animate menu
											$('#navigation').css('text-align', 'left');
											$('#navigation .previous3').addClass('next4').removeClass('previous3');
											$('#navigation .previous2').addClass('previous3').removeClass('previous2');
											$('#navigation .previous').addClass('previous2').removeClass('previous');
											$('#navigation .active').addClass('previous').removeClass('active');
											$('#navigation .next').addClass('active').removeClass('next');
											$('#navigation .next2').addClass('next').removeClass('next2');
											$('#navigation .next3').addClass('next2').removeClass('next3');
											$('#navigation .next4').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).addClass('next3').removeClass('next4').appendTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
													}
											);
											event.stopPropagation();
											return false;

											// Button up
											$('.back-to-top').fadeIn();
										}
									});

					$('#home .next2')
							.live(
									'click',
									function(event) {
										if (!$(this).is(':animated')) {
											// Initialize
											$('.back-to-top').fadeOut();

											$('#content .previous3').addClass('next4').removeClass('previous3');
											$('#content .previous2').addClass('next5').removeClass('previous2');
											$('#content .previous').animate({'left' : '-229%'}, duration, easing,
													function(){
														$(this).addClass('previous3').removeClass('previous');
													}
											);
											$('#content .active').animate({'left' : '-151%', 'margin-right' : '0%', 'margin-left' : '0%', 'backgroundColor' : '#EFF0F1'}, duration, easing,
													function() {
														$(this).addClass('previous2').removeClass('active');
													}
											).find('.page-number').fadeOut().find('.back-to-top').fadeOut();
											
											$('#content .next').animate({'left': '-73%'}, duration, easing,
													function(){
														$(this).addClass('previous').removeClass('next');
												}
											);
											
											$('#content .next2').animate({'left' : '5%', 'margin-right' : '6%', 'margin-left' : '6%', 'backgroundColor' : '#FFFFFF'}, duration, easing,
													function() {
														$(this).addClass('active').removeClass('next2');
													}
											).find('.back-to-top').fadeIn();
											$('#content .next3').animate({'left': '95%'}, duration, easing,
													function(){
														$(this).addClass('next').removeClass('next3');
													}
											);
											$('#content .next4').css({'left': '-229%'}).animate({'left': '173%'}, duration, easing,
													function(){
														$(this).remove();
													}
											).clone().addClass('next2').removeClass('next4').appendTo('#content').css({'left': '173%'}).animate({'left': '-229%'}, duration);
											
											$('#content .next5').css({'left': '-151%'}).animate({'left': '251%'}, duration, easing,
													function(){
														$(this).remove();
													}
											).clone().addClass('next3').removeClass('next5').appendTo('#content').css({'left': '251%'}).animate({'left': '-151%'}, duration);

											// animate menu
											$('#navigation').css('text-align', 'left');
											$('#navigation .previous3').addClass('next4').removeClass('previous3');
											$('#navigation .previous2').addClass('next5').removeClass('previous2');
											
											$('#navigation .previous').addClass('previous3').removeClass('previous');
											$('#navigation .active').addClass('previous2').removeClass('active');
											$('#navigation .next').addClass('previous').removeClass('next');
											$('#navigation .next2').addClass('active').removeClass('next2');
											$('#navigation .next3').addClass('next').removeClass('next3');
											$('#navigation .next4').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('next2').removeClass('next4').appendTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											$('#navigation .next5').animate({'width': '0', 'opacity': '0'}, duration, easing,
													function(){
														$(this).remove();
													}
											).clone().addClass('next3').removeClass('next5').appendTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											event.stopPropagation();
											return false;

											// Button up
											$('.back-to-top').fadeIn();
										}
									});
					$('#home .next3')
							.live(
									'click',
									function(event) {
										if (!$(this).is(':animated')) {
											// Initialize
											$('.back-to-top').fadeOut();

											// animate next to active
											$('#content .previous3').addClass('next4').removeClass('previous3');
											$('#content .previous2').addClass('next5').removeClass('previous2');
											$('#content .previous').addClass('next6').removeClass('previous');
											
											$('#content .active').animate({'left': '-229%', 'margin-right' : '0%', 'margin-left' : '0%', 'backgroundColor' : '#EFF0F1'},duration, easing,
													function(){
														$(this).addClass('previous3').removeClass('active');
													}
											).find('.page-number').fadeOut().find('.back-to-top').fadeOut();;
											$('#content .next').animate({'left': '-151%'}, duration, easing,
													function(){
														$(this).addClass('previous2').removeClass('next');
											});
											$('#content .next2').animate({'left': '-73%'}, duration, easing, 
													function(){
														$(this).addClass('previous').removeClass('next2');
											});
											$('#content .next3').animate({'left' : '5%', 'margin-right' : '6%', 'margin-left' : '6%', 'backgroundColor' : '#FFFFFF'}, duration, easing,
													function() {
														$(this).addClass('active').removeClass('next3');
												}
											).find('.back-to-top').fadeIn();
											$('#content .next4').css({'left': '-229%'}).animate({'left': '95%'}, duration, easing,
													function(){
														$(this).remove();
													}
											).clone().addClass('next').removeClass('next4').appendTo('#content').css({'left': '95%'}).animate({'left': '-229%'}, duration);
											$('#content .next5').css({'left': '-151%'}).animate({'left': '173%'}, duration, easing, 
													function(){
														$(this).remove();
													}
											).clone().addClass('next2').removeClass('next5').appendTo('#content').css({'left': '173%'}).animate({'left': '-151%'}, duration);
											$('#content .next6').css({'left': '-73%'}).animate({'left': '251%'}, duration, easing, 
													function(){
														$(this).remove();
													}
											).clone().addClass('next3').removeClass('next6').appendTo('#content').css({'left': '251%'}).animate({'left': '-73%'}, duration);
											// animate menu
											$('#navigation').css('text-align', 'left');
											$('#navigation .previous3').addClass('next4').removeClass('previous3');
											$('#navigation .previous2').addClass('next5').removeClass('previous2');
											$('#navigation .previous').addClass('next6').removeClass('previous');
											
											$('#navigation .active').addClass('previous3').removeClass('active');
											$('#navigation .next').addClass('previous2').removeClass('next');
											$('#navigation .next2').addClass('previous').removeClass('next2');
											$('#navigation .next3').addClass('active').removeClass('next3');
											
											$('#navigation .next4').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('next').removeClass('next4').appendTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											$('#navigation .next5').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('next2').removeClass('next5').appendTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											$('#navigation .next6').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('next3').removeClass('next6').appendTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											
											event.stopPropagation();
											return false;

											// Button up
											$('.back-to-top').fadeIn();
										}
									});

					// !Prev page
					$('#home .previous')
							.live(
									'click',
									function(event) {
										if (!$(this).is(':animated')) {
											// Initialize
											$('.back-to-top').fadeOut();

											$('#content .next3').addClass('previous4').removeClass('next3');
											$('#content .next2').animate({'left': '251%'}, duration, easing,
													function(){
														$(this).addClass('next3').removeClass('next2');
													}
											);
											$('#content .next').animate({'left': '173%'}, duration, easing,
													function(){
														$(this).addClass('next2').removeClass('next');
													}
											);
											$('#content .active').animate({'left': '95%', 'margin-right' : '0%', 'margin-left' : '0%', 'backgroundColor' : '#EFF0F1'},duration, easing,
													function(){
														$(this).addClass('next').removeClass('active');
													}
											).find('.page-number').fadeOut().find('.back-to-top').fadeOut();
											$('#content .previous').animate({'left' : '5%', 'margin-right' : '6%', 'margin-left' : '6%', 'backgroundColor' : '#FFFFFF'}, duration, easing,
													function() {
														$(this).addClass('active').removeClass('previous');
											}
											).find('.back-to-top').fadeIn();
											$('#content .previous2').animate({'left': '-73%'}, duration, easing, 
													function(){
														$(this).addClass('previous').removeClass('previous2');
													}
											);
											$('#content .previous3').animate({'left': '-151%'}, duration, easing,
													function(){
														$(this).addClass('previous2').removeClass('previous3');
													}
											);
											$('#content .previous4').css({'left': '251%'}).animate({'left': '-229%'}, duration, easing, 
													function(){
														$(this).remove();
													}
											).clone().addClass('previous3').removeClass('previous4').prependTo('#content').css({'left': '-229%'}).animate({'left': '251%'}, duration);

											// animate menu
											$('#navigation').css('text-align', 'right');
											$('#navigation .next3').addClass('previous4').removeClass('next3');
											
											$('#navigation .next2').addClass('next3').removeClass('next2');
											$('#navigation .next').addClass('next2').removeClass('next');
											$('#navigation .active').addClass('next').removeClass('active');
											$('#navigation .previous').addClass('active').removeClass('previous');
											$('#navigation .previous2').addClass('previous').removeClass('previous2');
											$('#navigation .previous3').addClass('previous2').removeClass('previous3');
											$('#navigation .previous4').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('previous3').removeClass('previous4').prependTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											event.stopPropagation();
											return false;

											// Button up
											$('.back-to-top').fadeIn();
										}
									});
					$('#home .previous2')
							.live(
									'click',
									function(event) {
										if (!$(this).is(':animated')) {
											// Initialize
											$('.back-to-top').fadeOut();
											$('#content .next3').addClass('previous4').removeClass('next3');
											$('#content .next2').addClass('previous5').removeClass('next2');
											
											$('#content .next').animate({'left': '251%'}, duration, easing,
													function(){
														$(this).addClass('next3').removeClass('next');
													}
											);
											$('#content .active').animate({'left': '173%', 'margin-right' : '0%', 'margin-left' : '0%', 'backgroundColor' : '#EFF0F1'}, duration, easing,
													function(){
														$(this).addClass('next2').removeClass('active');
													}
											).find('.page-number').fadeOut().find('.back-to-top').fadeOut();
											$('#content .previous').animate({'left': '95%'}, duration, easing,
													function(){
														$(this).addClass('next').removeClass('previous');
													}
											);
											$('#content .previous2').animate({'left' : '5%', 'margin-right' : '6%', 'margin-left' : '6%', 'backgroundColor' : '#FFFFFF'}, duration, easing,
													function(){
														$(this).addClass('active').removeClass('previous2');
													}
											).find('.back-to-top').fadeIn();
											$('#content .previous3').animate({'left': '-73%'}, duration, easing,
													function(){
														$(this).addClass('previous').removeClass('previous3');
													}
											);
											$('#content .previous4').css({'left': '251%'}).animate({'left': '-151%'}, duration, easing, 
													function(){
														$(this).remove();
													}
											).clone().addClass('previous2').removeClass('previous4').prependTo('#content').css({'left': '-151%'}).animate({'left': '251%'}, duration);
											$('#content .previous5').css({'left': '173%'}).animate({'left': '-229%'}, duration, easing,
													function(){
														$(this).remove();
													}
											).clone().addClass('previous3').removeClass('previous5').prependTo('#content').css({'left': '-229%'}).animate({'left': '173%'}, duration);
											
											// animate menu
											$('#navigation').css('text-align', 'left');
											$('#navigation .next3').addClass('previous4').removeClass('next3');
											$('#navigation .next2').addClass('previous5').removeClass('next2');
											
											$('#navigation .next').addClass('next3').removeClass('next');
											$('#navigation .active').addClass('next2').removeClass('active');
											$('#navigation .previous').addClass('next').removeClass('previous');
											$('#navigation .previous2').addClass('active').removeClass('previous2');
											$('#navigation .previous3').addClass('previous').removeClass('previous3');
											
											$('#navigation .previous4').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('previous2').removeClass('previous4').prependTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											
											$('#navigation .previous5').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('previous3').removeClass('previous5').prependTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											event.stopPropagation();
											return false;

											// Button up
											$('.back-to-top').fadeIn();
										}
									});

					$('#home .previous3')
							.live(
									'click',
									function(event) {
										if (!$(this).is(':animated')) {
											// Initialize
											$('.back-to-top').fadeOut();
											$('#content .next3').addClass('previous4').removeClass('next3');
											$('#content .next2').addClass('previous5').removeClass('next2');
											$('#content .next').addClass('previous6').removeClass('next');
											
											$('#content .active').animate({'left': '251%', 'margin-right' : '0%', 'margin-left' : '0%', 'backgroundColor' : '#EFF0F1'}, duration, easing,
													function(){
														$(this).addClass('next3').removeClass('active');
													}
											).find('.page-number').fadeOut().find('.back-to-top').fadeOut();
											$('#content .previous').animate({'left': '173%'}, duration, easing,
													function(){
														$(this).addClass('next2').removeClass('previous');
													}
											);
											$('#content .previous2').animate({'left': '95%'}, duration, easing,
													function(){
														$(this).addClass('next').removeClass('previous2');
													}
											);
											$('#content .previous3').animate({'left': '5%', 'margin-right' : '6%', 'margin-left' : '6%', 'backgroundColor' : '#FFFFFF'}, duration, easing,
													function(){
														$(this).addClass('active').removeClass('previous3');
													}
											).find('.back-to-top').fadeIn();
											$('#content .previous4').css({'left': '251%'}).animate({'left': '-73%'}, duration, easing, 
													function(){
														$(this).remove();
													}
											).clone().addClass('previous').removeClass('previous4').prependTo('#content').css({'left': '-73%'}).animate({'left': '251%'}, duration);
											$('#content .previous5').css({'left': '173%'}).animate({'left': '-151%'}, duration, easing, 
													function(){
														$(this).remove();
													}
											).clone().addClass('previous2').removeClass('previous5').prependTo('#content').css({'left': '-151%'}).animate({'left': '173%'}, duration);
											$('#content .previous6').css({'left': '95%'}).animate({'left': '-229%'}, duration, easing, 
													function(){
														$(this).remove();
													}
											).clone().addClass('previous3').removeClass('previous6').prependTo('#content').css({'left': '-229%'}).animate({'left': '95%'}, duration);
											
											// animate menu
											$('#navigation').css('text-align', 'left');
											$('#navigation .next3').addClass('previous4').removeClass('next3');
											$('#navigation .next2').addClass('previous5').removeClass('next2');
											$('#navigation .next').addClass('previous6').removeClass('next');
											
											$('#navigation .active').addClass('next3').removeClass('active');
											$('#navigation .previous').addClass('next2').removeClass('previous');
											$('#navigation .previous2').addClass('next').removeClass('previous2');
											$('#navigation .previous3').addClass('active').removeClass('previous3');
											
											$('#navigation .previous4').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('previous').removeClass('previous4').prependTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											
											$('#navigation .previous5').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('previous2').removeClass('previous5').prependTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											
											$('#navigation .previous6').animate({'width' : '0', 'opacity' : '0'}, duration, easing,
													function() {
														$(this).remove();
													}
											).clone().addClass('previous3').removeClass('previous6').prependTo('#navigation').css({'width' : '14%'}).fadeTo(duration, 1);
											event.stopPropagation();
											return false;

											// Button up
											$('.back-to-top').fadeIn();
										}
									});
				});