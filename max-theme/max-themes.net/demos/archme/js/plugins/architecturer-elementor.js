function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}

( function( $ ) {
	// Make sure you run this code under Elementor..
	$( window ).on( 'elementor/frontend/init', function() {
		
		jQuery("img.lazy").each(function() {
			var currentImg = jQuery(this);
			
			jQuery(this).Lazy({
				onFinishedAll: function() {
					currentImg.parent("div.post_img_hover").removeClass("lazy");
					currentImg.parent('.tg_gallery_lightbox').parent("div.gallery_grid_item").removeClass("lazy");
		        }
			});
		});
		
		//Start execute javascript for blog posts
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-blog-posts.default', function( $scope ) {
			jQuery(function( $ ) {
				jQuery("img.lazy").each(function() {
					var currentImg = jQuery(this);
					
					jQuery(this).Lazy({
						onFinishedAll: function() {
							currentImg.parent("div.post_img_hover").removeClass("lazy");
				        },
					});
				});
				
				if(!is_touch_device())
				{
					var scaleTilt = 1.05;
					if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
						scaleTilt = 1;
					}
					
					jQuery(".blog-tilt").tilt({
					    scale: scaleTilt,
					    perspective: 2500
					});
				}
				
				jQuery(".layout_masonry").each(function() {
					var grid = jQuery(this);
					
					grid.imagesLoaded().progress( function() {
						grid.masonry({
							itemSelector: ".blog-posts-masonry",
							columnWidth: ".blog-posts-masonry",
							gutter : 45
						});
						
						jQuery(".layout_masonry .blog-posts-masonry").each(function(index) {
						    setTimeout(function() {
						      	jQuery(".layout_masonry .blog-posts-masonry").eq(index).addClass("is-showing");
						    }, 250 * index);
						 });
					});
					
					jQuery(".layout_masonry img.lazy_masonry").each(function() {
						var currentImg = jQuery(this);
						currentImg.parent("div.post_img_hover").removeClass("lazy");
						
						jQuery(this).Lazy({
							onFinishedAll: function() {
								grid.masonry({
									itemSelector: ".blog-posts-masonry",
									columnWidth: ".blog-posts-masonry",
									gutter : 45
								});
					        },
						});
					});
				});
				
				jQuery(".layout_metro_masonry").each(function() {
					var grid = jQuery(this);
					
					grid.imagesLoaded().progress( function() {
						grid.masonry({
							itemSelector: ".blog-posts-metro",
							columnWidth: ".blog-posts-metro",
							gutter : 40
						});
						
						jQuery(".layout_metro_masonry .blog-posts-metro").each(function(index) {
						    setTimeout(function() {
						      	jQuery(".layout_metro_masonry .blog-posts-metro").eq(index).addClass("is-showing");
						    }, 100 * index);
						});
					});
					
					jQuery(".post_metro_left_wrapper img.lazy_masonry, .layout_metro_masonry img.lazy_masonry").each(function() {
						var currentImg = jQuery(this);
						currentImg.parent("div.post_img_hover").removeClass("lazy");
						
						jQuery(this).Lazy({
							onFinishedAll: function() {
								grid.masonry({
									itemSelector: ".blog-posts-metro",
									columnWidth: ".blog-posts-metro",
									gutter : 40
								});
					        },
						});
					});
				});
				
				var menuLayout = jQuery('#pp_menu_layout').val();
				if(menuLayout != 'leftmenu')
				{
					jQuery(".post_metro_left_wrapper").stick_in_parent({ offset_top: 120 });
				}
				else
				{
					jQuery(".post_metro_left_wrapper").stick_in_parent({ offset_top: 40 });
				}
	
				if(jQuery(window).width() < 768 || is_touch_device())
				{
					jQuery(".post_metro_left_wrapper").trigger("sticky_kit:detach");
				}
			});
		} );
		//End execute javascript for blog posts
		
		//Start execute javascript for gallery grid
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-gallery-grid.default', function( $scope ) {
			jQuery("img.lazy").each(function() {
				var currentImg = jQuery(this);
				
				jQuery(this).Lazy({
					onFinishedAll: function() {
						currentImg.parent("div.post_img_hover").removeClass("lazy");
						currentImg.parent('.tg_gallery_lightbox').parent("div.gallery_grid_item").removeClass("lazy");
						currentImg.parent("div.gallery_grid_item").removeClass("lazy");
			        }
				});
			});
			
			jQuery(function( $ ) {
				if(!is_touch_device())
				{
					var scaleTilt = 1.1;
					if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
						scaleTilt = 1;
					}
					jQuery(".gallery-grid-tilt").tilt({
					    scale: scaleTilt,
					    perspective: 2500
					});
				}
			});
		} );
		//End execute javascript for gallery grid
		
		//Start execute javascript for gallery masonry
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-gallery-masonry.default', function( $scope ) {
			jQuery(function( $ ) {
				if(!is_touch_device())
				{
					var scaleTilt = 1.1;
					if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
						scaleTilt = 1;
					}
					jQuery(".gallery-grid-tilt").tilt({
					    scale: scaleTilt,
					    perspective: 2500
					});
				}
				
				jQuery(".gallery_grid_content_wrapper.do_masonry").each(function() {
					var grid = jQuery(this);
					var cols = grid.attr('data-cols');
					
					if(!grid.hasClass('has_no_space'))
					{
						var gutter = 40;
						if(cols > 4)
						{
							gutter = 30;
						}
					}
					else
					{
						gutter = 0;
					}
					
					grid.imagesLoaded().progress( function() {
						grid.masonry({
							itemSelector: ".gallery_grid_item",
							columnWidth: ".gallery_grid_item",
							gutter : gutter
						});
						
						jQuery(".gallery_grid_content_wrapper.do_masonry .gallery_grid_item").each(function(index) {
						    setTimeout(function() {
						      	jQuery(".do_masonry .gallery_grid_item").eq(index).addClass("is-showing");
						    }, 100 * index);
						 });
					});
					
					jQuery(".gallery_grid_content_wrapper.do_masonry img.lazy_masonry").each(function() {
						var currentImg = jQuery(this);
						currentImg.parent("div.post_img_hover").removeClass("lazy");
						
						var cols = grid.attr('data-cols');
						
						if(!grid.hasClass('has_no_space'))
						{
							var gutter = 40;
							if(cols > 4)
							{
								gutter = 30;
							}
						}
						else
						{
							gutter = 0;
						}
						
						jQuery(this).Lazy({
							onFinishedAll: function() {
								grid.masonry({
									itemSelector: ".gallery_grid_item",
									columnWidth: ".gallery_grid_item",
									gutter : gutter
								});
					        },
						});
					});
				});
			});
		} );
		//End execute javascript for gallery masonry
		
		//Start execute javascript for gallery justified
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-gallery-justified.default', function( $scope ) {
			jQuery(function( $ ) {
				if(!is_touch_device())
				{
					var scaleTilt = 1.1;
					if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
						scaleTilt = 1;
					}
					jQuery(".gallery-grid-tilt").tilt({
					    scale: scaleTilt,
					    perspective: 2500
					});
				}
				
				jQuery("img.lazy").each(function() {
					var currentImg = jQuery(this);
					
					jQuery(this).Lazy({
						onFinishedAll: function() {
							currentImg.parent("div.post_img_hover").removeClass("lazy");
				        }
					});
				});
				
				jQuery(".gallery_grid_content_wrapper.do_justified").each(function() {
					var grid = jQuery(this);
					var rowHeight = grid.attr('data-row_height');
					var margin = grid.attr('data-margin');
					var justifyLastRow = grid.attr('data-justify_last_row');
					var justifyLastRowStr = 'nojustify';
					if(justifyLastRow == 'yes')
					{
						justifyLastRowStr = 'justify';
					}
					
					grid.imagesLoaded().always( function() {
						grid.justifiedGallery({
							rowHeight:  rowHeight,
							margins: margin,
							lastRow: justifyLastRowStr
						});
					});
				});
			});
		} );
		//End execute javascript for gallery justified
		
		//Start execute javascript for gallery fullscreen
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-gallery-fullscreen.default', function( $scope ) {
			jQuery(function( $ ) {
				jQuery('body').addClass('elementor-fullscreen');
				
				var slideshow = jQuery('.tg_fullscreen_gallery');
				var autoPlay = slideshow.attr('data-autoplay');
				var autoPlayArr = false;
				if (typeof autoPlay != "undefined"){
					autoPlayArr = {
						delay: autoPlay
					};
				}
				
				var effect = slideshow.attr('data-effect');
				if (typeof effect == "undefined"){
					effect = 'slide';
				}
				
				var speed = slideshow.attr('data-speed');
				if (typeof speed == "undefined"){
					speed = 400;
				}

				var galleryTop = new Swiper('.tg_fullscreen_gallery', {
				   navigation: {
				      nextEl: '.swiper-button-next',
				      prevEl: '.swiper-button-prev',
				    },
				   spaceBetween: 0,
				   keyboardControl: true,
				   speed: parseInt(speed),
				   loop: true,
				   effect: effect,
				   grabCursor: true,
				   preloadImages: false,
				   lazy: {
				    loadPrevNext: true,
				  },
				  autoplay: autoPlayArr
				});
			});
		} );
		//End execute javascript for gallery fullscreen
		
		//Start execute javascript for vertical parallax
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-vertical-parallax.default', function( $scope ) {
			jQuery(function( $ ) {
				jQuery('body').addClass('elementor-fullscreen');
				
				var ticking = false;
				var isFirefox = /Firefox/i.test(navigator.userAgent);
				var isIe = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent);
				var scrollSensitivitySetting = 30;
				var slideDurationSetting =800;
				var currentSlideNumber = 0;
				var totalSlideNumber = jQuery('.tg_parallax_slide_background').length;
				function parallaxScroll(evt) {
				    if (isFirefox) {
				        delta = evt.detail * -120;
				    } else if (isIe) {
				        delta = -evt.deltaY;
				    } else {
				        delta = evt.wheelDelta;
				    }
				    if (ticking != true) {
				        if (delta <= -scrollSensitivitySetting) {
				            ticking = true;
				            if (currentSlideNumber !== totalSlideNumber - 1) {
				                currentSlideNumber++;
				                nextItem();
				            }
				            slideDurationTimeout(slideDurationSetting);
				        }
				        if (delta >= scrollSensitivitySetting) {
				            ticking = true;
				            if (currentSlideNumber !== 0) {
				                currentSlideNumber--;
				            }
				            previousItem();
				            slideDurationTimeout(slideDurationSetting);
				        }
				    }
				}
				function slideDurationTimeout(slideDuration) {
				    setTimeout(function () {
				        ticking = false;
				    }, slideDuration);
				}
				var mousewheelEvent = isFirefox ? 'DOMMouseScroll' : 'wheel';
				window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
				function nextItem() {
				    var $previousSlide = jQuery('.tg_parallax_slide_background').eq(currentSlideNumber - 1);
				    $previousSlide.css('transform', 'translate3d(0,-130vh,0)').find('.tg_parallax_slide_content_wrapper').css('transform', 'translateY(40vh)');
				    currentSlideTransition();
				}
				function previousItem() {
				    var $previousSlide = jQuery('.tg_parallax_slide_background').eq(currentSlideNumber + 1);
				    $previousSlide.css('transform', 'translate3d(0,30vh,0)').find('.tg_parallax_slide_content_wrapper').css('transform', 'translateY(30vh)');
				    currentSlideTransition();
				}
				function currentSlideTransition() {
				    var $currentSlide = jQuery('.tg_parallax_slide_background').eq(currentSlideNumber);
				    $currentSlide.css('transform', 'translate3d(0,-15vh,0)').find('.tg_parallax_slide_content_wrapper').css('transform', 'translateY(15vh)');
				    ;
				}
				
				jQuery('body').on('touchmove', function(e){
				  e.preventDefault();
				  e.stopPropagation();
				  
				  return false;
				});
				
				var ts;
				jQuery(document).bind('touchstart', function (e){
				   ts = e.originalEvent.touches[0].clientY;
				});
				
				jQuery(document).bind('touchend', function (e){
				   var te = e.originalEvent.changedTouches[0].clientY;
				   if(ts > te+5){
				      if (currentSlideNumber !== totalSlideNumber - 1) {
				          currentSlideNumber++;
				          nextItem();
				      }
				      slideDurationTimeout(slideDurationSetting);
				   }else if(ts < te-5){
				      if (currentSlideNumber !== 0) {
				          currentSlideNumber--;
				      }
				      previousItem();
				      slideDurationTimeout(slideDurationSetting);
				   }
				});
			});
		} );
		//End execute javascript for gallery vertical parallax
		
		//Start execute javascript for gallery horizontal
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-gallery-horizontal.default', function( $scope ) {
			jQuery('body').addClass('gallery-horizontal');
			
			jQuery(".tg_horizontal_gallery_wrapper").each(function() {
				var $carousel = jQuery(this);
				var timer = $carousel.attr('data-autoplay');
				if(timer == 0)
				{
					timer = false;
				}
				
				var loop = $carousel.attr('data-loop');
				var navigation = $carousel.attr('data-navigation');
				if(navigation == 0)
				{
					navigation = false;
				}
				
				var pagination = $carousel.attr('data-pagination');
				if(pagination == 0)
				{
					pagination = false;
				}
				
				$carousel.flickity({
					percentPosition: false,
					imagesLoaded: true,
					selectedAttraction: 0.01,
					friction: 0.2,
					lazyLoad: 5,
					pauseAutoPlayOnHover: true,
					autoPlay: timer,
					contain: true,
					prevNextButtons: navigation,
					pageDots: pagination
				});
				
				var parallax = $carousel.attr('data-parallax');
				if(parallax == 1)
				{
					var $imgs = $carousel.find('.tg_horizontal_gallery_cell img');
	
					var docStyle = document.documentElement.style;
					var transformProp = typeof docStyle.transform == 'string' ?
					  'transform' : 'WebkitTransform';
	
					var flkty = $carousel.data('flickity');
					
					$carousel.on( 'scroll.flickity', function() {
					  flkty.slides.forEach( function( slide, i ) {
					    var img = $imgs[i];
					    var x = ( slide.target + flkty.x ) * -1/3;
					    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
					  });
					});
				}
				
				var fullscreen = $carousel.attr('data-fullscreen');
				if(fullscreen != 0)
				{
					jQuery('body').addClass('elementor-fullscreen');
					
					//Get menu element height
					var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
					var documentHeight = jQuery(window).innerHeight();
					var sliderHeight = parseInt(documentHeight - menuHeight);
					
					$carousel.find('.tg_horizontal_gallery_cell').css('height', sliderHeight+'px');
					$carousel.find('.tg_horizontal_gallery_cell_img').css('height', sliderHeight+'px');
					$carousel.flickity('resize');
					
					jQuery( window ).resize(function() {
						var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
						var documentHeight = jQuery(window).innerHeight();
						var sliderHeight = parseInt(documentHeight - menuHeight);
						
						$carousel.find('.tg_horizontal_gallery_cell').css('height', sliderHeight+'px');
						$carousel.find('.tg_horizontal_gallery_cell_img').css('height', sliderHeight+'px');
						$carousel.flickity('resize');
					});
				}
			});
		} );
		//End execute javascript for gallery horizontal
		
		//Start execute javascript for slider horizontal
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-horizontal.default', function( $scope ) {
			jQuery(".tg_horizontal_slider_wrapper").each(function() {
				var $carousel = jQuery(this);
				var timer = $carousel.attr('data-autoplay');
				if(timer == 0)
				{
					timer = false;
				}
				
				var loop = $carousel.attr('data-loop');
				var navigation = $carousel.attr('data-navigation');
				if(navigation == 0)
				{
					navigation = false;
				}
				
				var pagination = $carousel.attr('data-pagination');
				if(pagination == 0)
				{
					pagination = false;
				}
				
				$carousel.flickity({
					percentPosition: false,
					imagesLoaded: true,
					pauseAutoPlayOnHover: true,
					autoPlay: timer,
					contain: true,
					prevNextButtons: navigation,
					pageDots: pagination
				});
				
				var fullscreen = $carousel.attr('data-fullscreen');
				if(fullscreen != 0)
				{
					jQuery('body').addClass('elementor-fullscreen');
					
					//Get menu element height
					var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
					var documentHeight = jQuery(window).innerHeight();
					var sliderHeight = parseInt(documentHeight - menuHeight);
					
					$carousel.find('.tg_horizontal_slider_cell').css('height', sliderHeight+'px');
					$carousel.flickity('resize');
					
					jQuery( window ).resize(function() {
						var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
						var documentHeight = jQuery(window).innerHeight();
						var sliderHeight = parseInt(documentHeight - menuHeight);
						
						$carousel.find('.tg_horizontal_slider_cell').css('height', sliderHeight+'px');
						$carousel.flickity('resize');
					});
				}
			});
		} );
		//End execute javascript for slider horizontal
		
		//Start execute javascript for slider animated frame
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-animated-frame.default', function( $scope ) {
			function debounce(func, wait, immediate) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					var later = function() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
		    };
		    
		    class Slideshow {
		        constructor(el) {
		            this.DOM = {};
		            this.DOM.el = el;
		            this.settings = {
		                animation: {
		                    slides: {
		                        duration: 600,
		                        easing: 'easeOutQuint'
		                    },
		                    shape: {
		                        duration: 300,
		                        easing: {in: 'easeOutQuint', out: 'easeOutQuad'}
		                    }
		                },
		                frameFill: slideshowFrameColor
		            }
		            this.init();
		        }
		        init() {
			        if(this.DOM.el)
			        {
		            	this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slides > .slide'));
		            	this.slidesTotal = this.DOM.slides.length;
		            	this.DOM.nav = this.DOM.el.querySelector('.slidenav');
			            this.DOM.nextCtrl = this.DOM.nav.querySelector('.slidenav__item--next');
			            this.DOM.prevCtrl = this.DOM.nav.querySelector('.slidenav__item--prev');
			            this.current = 0;
			            this.createFrame(); 
			            this.initEvents();
		            }
		        }
		        createFrame() {
		            this.rect = this.DOM.el.getBoundingClientRect();
		            this.frameSize = this.rect.width/12;
		            this.paths = {
		                initial: this.calculatePath('initial'),
		                final: this.calculatePath('final')
		            };
		            this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		            this.DOM.svg.setAttribute('class', 'shape');
		            this.DOM.svg.setAttribute('width','100%');
		            this.DOM.svg.setAttribute('height','100%');
		            this.DOM.svg.setAttribute('viewbox',`0 0 ${this.rect.width} ${this.rect.height}`);
		            this.DOM.svg.innerHTML = `<path fill="${this.settings.frameFill}" d="${this.paths.initial}"/>`;
		            this.DOM.el.insertBefore(this.DOM.svg, this.DOM.nav);
		            this.DOM.shape = this.DOM.svg.querySelector('path');
		        }
		        updateFrame() {
		            this.paths.initial = this.calculatePath('initial');
		            this.paths.final = this.calculatePath('final');
		            this.DOM.svg.setAttribute('viewbox',`0 0 ${this.rect.width} ${this.rect.height}`);
		            this.DOM.shape.setAttribute('d', this.isAnimating ? this.paths.final : this.paths.initial);
		        }
		        calculatePath(path = 'initial') {
		            return path === 'initial' ?
		                    `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M 0,0 ${this.rect.width},0 ${this.rect.width},${this.rect.height} 0,${this.rect.height} Z` :
		                    `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M ${this.frameSize},${this.frameSize} ${this.rect.width-this.frameSize},${this.frameSize} ${this.rect.width-this.frameSize},${this.rect.height-this.frameSize} ${this.frameSize},${this.rect.height-this.frameSize} Z`;
		        }
		        initEvents() {
		            this.DOM.nextCtrl.addEventListener('click', () => this.navigate('next'));
		            this.DOM.prevCtrl.addEventListener('click', () => this.navigate('prev'));
		            
		            window.addEventListener('resize', debounce(() => {
		                this.rect = this.DOM.el.getBoundingClientRect();
		                this.updateFrame();
		            }, 20));
		            
		            document.addEventListener('keydown', (ev) => {
		                const keyCode = ev.keyCode || ev.which;
		                if ( keyCode === 37 ) {
		                    this.navigate('prev');
		                }
		                else if ( keyCode === 39 ) {
		                    this.navigate('next');
		                }
		            });
		        }
		        navigate(dir = 'next') {
		            if ( this.isAnimating ) return false;
		            this.isAnimating = true;
		
		            const animateShapeIn = anime({
		                targets: this.DOM.shape,
		                duration: this.settings.animation.shape.duration,
		                easing: this.settings.animation.shape.easing.in,
		                d: this.paths.final
		            });
		
		            const animateSlides = () => {
		                return new Promise((resolve, reject) => {
		                    const currentSlide = this.DOM.slides[this.current];
		                    anime({
		                        targets: currentSlide,
		                        duration: this.settings.animation.slides.duration,
		                        easing: this.settings.animation.slides.easing,
		                        translateX: dir === 'next' ? -1*this.rect.width : this.rect.width,
		                        complete: () => {
		                            currentSlide.classList.remove('slide--current');
		                            resolve();
		                        }
		                    });
		        
		                    this.current = dir === 'next' ? 
		                        this.current < this.slidesTotal-1 ? this.current + 1 : 0 :
		                        this.current > 0 ? this.current - 1 : this.slidesTotal-1; 
		                    
		                    const newSlide = this.DOM.slides[this.current];
		                    newSlide.classList.add('slide--current');
		                    anime({
		                        targets: newSlide,
		                        duration: this.settings.animation.slides.duration,
		                        easing: this.settings.animation.slides.easing,
		                        translateX: [dir === 'next' ? this.rect.width : -1*this.rect.width,0]
		                    });
		        
		                    const newSlideImg = newSlide.querySelector('.slide__img');
		                    anime.remove(newSlideImg);
		                    anime({
		                        targets: newSlideImg,
		                        duration: this.settings.animation.slides.duration*4,
		                        easing: this.settings.animation.slides.easing,
		                        translateX: [dir === 'next' ? 200 : -200, 0]
		                    });
		        
		                    anime({
		                        targets: [newSlide.querySelector('.slide__title'), newSlide.querySelector('.slide__desc'), newSlide.querySelector('.slide__link')],
		                        duration: this.settings.animation.slides.duration*2,
		                        easing: this.settings.animation.slides.easing,
		                        delay: (t,i) => i*100+100,
		                        translateX: [dir === 'next' ? 300 : -300,0],
		                        opacity: [0,1]
		                    });
		                });
		            };
		
		            const animateShapeOut = () => {
		                anime({
		                    targets: this.DOM.shape,
		                    duration: this.settings.animation.shape.duration,
		                    delay: 150,
		                    easing: this.settings.animation.shape.easing.out,
		                    d: this.paths.initial,
		                    complete: () => this.isAnimating = false
		                });
		            }
		
		            animateShapeIn.finished.then(animateSlides).then(animateShapeOut);
		        }
		    };
		
			var slideshow = document.querySelector('.slideshow');
			if(slideshow)
			{
				var slideshowFrameColor = slideshow.getAttribute('data-background');
			    new Slideshow(slideshow);
			    imagesLoaded('.slide__img', { background: true });
			}
		} );
		//End execute javascript for slider animated frame
		
		//Start execute javascript for slider 3d room
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-room.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			jQuery('body').addClass('room');
			
			function debounce(func, wait, immediate) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					var later = function() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			};
		
			function getMousePos(e) {
				var posx = 0;
				var posy = 0;
				if (!e) var e = window.event;
				if (e.pageX || e.pageY) 	{
					posx = e.pageX;
					posy = e.pageY;
				}
				else if (e.clientX || e.clientY) 	{
					posx = e.clientX + document.body.scrollLeft
						+ document.documentElement.scrollLeft;
					posy = e.clientY + document.body.scrollTop
						+ document.documentElement.scrollTop;
				}
				return {
					x : posx,
					y : posy
				}
			}
		
			var DOM = {};
			// The loader.
			DOM.loader = document.querySelector('.tg_room_slider_wrapper .overlay--loader');
			// The room wrapper. This will be the element to be transformed in order to move around.
			DOM.scroller = document.querySelector('.tg_room_slider_wrapper .container > .scroller');
			// The rooms.
			if (DOM.scroller)
			{
				DOM.rooms = [].slice.call(DOM.scroller.querySelectorAll('.room'));
			}
			else
			{
				DOM.rooms = {};
			}
		
			// The content wrapper.
			DOM.content = document.querySelector('.tg_room_slider_wrapper .content');
			if (DOM.content)
			{
				// Rooms navigation controls.
				DOM.nav = {
					leftCtrl : DOM.content.querySelector('.tg_room_slider_wrapper nav > .btn--nav-left'),
					rightCtrl : DOM.content.querySelector('.tg_room_slider_wrapper nav > .btn--nav-right')
				};
				// Content slides.
				DOM.slides = [].slice.call(DOM.content.querySelectorAll('.slides > .slide'));
			}
		
			var	currentRoom = 0,
				// Total number of rooms.
				totalRooms = DOM.rooms.length,
				// Initial transform.
				initTransform = { translateX : 0, translateY : 0, translateZ : '500px', rotateX : 0, rotateY : 0, rotateZ : 0 },
				// Reset transform.
				resetTransform = { translateX : 0, translateY : 0, translateZ : 0, rotateX : 0, rotateY : 0, rotateZ : 0 },
				// View from top.
				menuTransform = { translateX : 0, translateY : '150%', translateZ : 0, rotateX : '15deg', rotateY : 0, rotateZ : 0 },
				menuTransform = { translateX : 0, translateY : '50%', translateZ : 0, rotateX : '-10deg', rotateY : 0, rotateZ : 0 },
				// Info view transform.
				infoTransform = { translateX : 0, translateY : 0, translateZ : '200px', rotateX : '2deg', rotateY : 0, rotateZ : '4deg' },
				// Room initial moving transition.
				initTransition = { speed: '0.9s', easing: 'ease' },
				// Room moving transition.
				roomTransition = { speed: '0.4s', easing: 'ease' },
				// View from top transition.
				menuTransition = { speed: '1.5s', easing: 'cubic-bezier(0.2,1,0.3,1)' },
				// Info transition.
				infoTransition = { speed: '15s', easing: 'cubic-bezier(0.3,1,0.3,1)' },
				// Tilt transition
				tiltTransition = { speed: '0.2s', easing: 'ease-out' },
				tilt = false,
				// How much to rotate when the mouse moves.
				tiltRotation = {
					rotateX : 1, // a relative rotation of -1deg to 1deg on the x-axis
					rotateY : -3  // a relative rotation of -3deg to 3deg on the y-axis
				},
				// Transition end event handler.
				onEndTransition = function(el, callback) {
					var onEndCallbackFn = function(ev) {
						this.removeEventListener('transitionend', onEndCallbackFn);
						if( callback && typeof callback === 'function' ) { callback.call(); }
					};
					el.addEventListener('transitionend', onEndCallbackFn);
				},
				// Window sizes.
				win = {width: window.innerWidth, height: window.innerHeight},
				// Check if moving inside the room and check if navigating.
				isMoving, isNavigating;
		
			function init() {
				// Move into the current room.
				move({transition: initTransition, transform: initTransform}).then(function() {
					initTilt();
				});
				// Animate the current slide in.
				showSlide(100);
				// Init/Bind events.
				initEvents();
			}
		
			function initTilt() {
				applyRoomTransition(tiltTransition);
				tilt = true;
			}
		
			function removeTilt() {
				tilt = false;
			}
			
			function move(opts) {
				return new Promise(function(resolve, reject) {
					if( isMoving && !opts.stopTransition ) {
						return false;
					}
					isMoving = true;
		
					if( opts.transition ) {
						applyRoomTransition(opts.transition);
					}
		
					if( opts.transform ) {
						applyRoomTransform(opts.transform);
						var onEndFn = function() {
							isMoving = false;
							resolve();
						};
						onEndTransition(DOM.scroller, onEndFn);
					}
					else {
						resolve();
					}
					
				});
			}
		
			function initEvents() {
				// Mousemove event / Tilt functionality.
				var onMouseMoveFn = function(ev) {
						requestAnimationFrame(function() {
							if( !tilt ) return false;
		
		
							var mousepos = getMousePos(ev),
								// transform values
								rotX = tiltRotation.rotateX ? initTransform.rotateX -  (2 * tiltRotation.rotateX / win.height * mousepos.y - tiltRotation.rotateX) : 0,
								rotY = tiltRotation.rotateY ? initTransform.rotateY -  (2 * tiltRotation.rotateY / win.width * mousepos.x - tiltRotation.rotateY) : 0;
					
							// apply transform
							applyRoomTransform({
								'translateX' : initTransform.translateX, 
								'translateY' : initTransform.translateY, 
								'translateZ' : initTransform.translateZ, 
								'rotateX' : rotX + 'deg', 
								'rotateY' : rotY + 'deg',
								'rotateZ' : initTransform.rotateZ
							});
						});
					},
					// Window resize.
					debounceResizeFn = debounce(function() {
						win = {width: window.innerWidth, height: window.innerHeight};
					}, 10);
				
				document.addEventListener('mousemove', onMouseMoveFn);
				window.addEventListener('resize', debounceResizeFn);
		
				// Room navigation.
				var onNavigatePrevFn = function() { navigate('prev'); },
					onNavigateNextFn = function() { navigate('next'); };
		
				if(DOM.nav.leftCtrl && DOM.nav.rightCtrl)
				{
					DOM.nav.leftCtrl.addEventListener('click', onNavigatePrevFn);
					DOM.nav.rightCtrl.addEventListener('click', onNavigateNextFn);
				}
			}
		
			function applyRoomTransform(transform) {
				DOM.scroller.style.transform = 'translate3d(' + transform.translateX + ', ' + transform.translateY + ', ' + transform.translateZ + ') ' +
											   'rotate3d(1,0,0,' + transform.rotateX + ') rotate3d(0,1,0,' + transform.rotateY + ') rotate3d(0,0,1,' + transform.rotateZ + ')';
			}
		
			function applyRoomTransition(transition) {
				DOM.scroller.style.transition = transition === 'none' ? transition : 'transform ' + transition.speed + ' ' + transition.easing;
			}
		
			function toggleSlide(dir, delay) {
				var slide = DOM.slides[currentRoom],
					// Slide's name.
					name = slide.querySelector('.slide__name'),
					// Slide's title and date elements.
					title = slide.querySelector('.slide__title'),
					date = slide.querySelector('.slide__date');
		
				delay = delay !== undefined ? delay : 0;
		
				anime.remove([name, title, date]);
				var animeOpts = {
					targets: [name, title, date],
					duration: dir === 'in' ? 400 : 400,
					//delay: 0,//dir === 'in' ? 150 : 0,
					delay: function(t, i, c) {
						return delay + 75+i*75;
					},
					easing: [0.25,0.1,0.25,1],
					opacity: {
						value: dir === 'in' ? [0,1] : [1,0],
						duration: dir === 'in' ? 550 : 250
					},
					translateY: function(t, i) {
						return dir === 'in' ? [150,0] : [0,-150];
					}	
				};
				if( dir === 'in' ) {
					animeOpts.begin = function() {
						slide.classList.add('slide--current');
					};
				}
				else {
					animeOpts.complete = function() {
						slide.classList.remove('slide--current');
					};
				}
				anime(animeOpts);
			}
		
			function showSlide(delay) {
				toggleSlide('in', delay);
			}
		
			function hideSlide(delay) {
				toggleSlide('out', delay);
			}
		
			function navigate(dir) {
				if( isMoving || isNavigating ) {
					return false;
				}
				isNavigating = true;
				
				var room = DOM.rooms[currentRoom];
				
				// Remove tilt.
				removeTilt();
				// Animate the current slide out - animate the name, title and date elements.
				hideSlide();
		
				// Update currentRoom.
				if( dir === 'next' ) {
					currentRoom = currentRoom < totalRooms - 1 ? currentRoom + 1 : 0;
				}
				else {
					currentRoom = currentRoom > 0 ? currentRoom - 1 : totalRooms - 1;
				}
		
				// Position the next room.
				var nextRoom = DOM.rooms[currentRoom];
				nextRoom.style.transform = 'translate3d(' + (dir === 'next' ? 100 : -100) + '%,0,0) translate3d(' + (dir === 'next' ? 1 : -1) + 'px,0,0)' ;
				nextRoom.style.opacity = 1;
				
				// Move back.
				move({transition: roomTransition, transform: resetTransform})
				.then(function() {
					// Move left or right.
					return move({transform: { translateX : (dir === 'next' ? -100 : 100) + '%', translateY : 0, translateZ : 0, rotateX : 0, rotateY : 0, rotateZ : 0 }});
				})
				.then(function() {
					// Update current room class.
					nextRoom.classList.add('room--current');
					room.classList.remove('room--current');
					room.style.opacity = 0;
		
					// Show the next slide.
					showSlide();
		
					// Move into room.
					// Update final transform state:
					return move({transform: { translateX : (dir === 'next' ? -100 : 100) + '%', translateY : 0, translateZ : '500px', rotateX : 0, rotateY : 0, rotateZ : 0 }});
				})
				.then(function() {
					// Reset positions.
					applyRoomTransition('none');
					nextRoom.style.transform = 'translate3d(0,0,0)';
					applyRoomTransform(initTransform);
					
					setTimeout(function() {
						initTilt();
					}, 60);
					isNavigating = false;
				});
			}
		
			function addAdjacentRooms() {
				// Current room.
				var room = DOM.rooms[currentRoom],
					// Adjacent rooms.
					nextRoom = DOM.rooms[currentRoom < totalRooms - 1 ? currentRoom + 1 : 0],
					prevRoom = DOM.rooms[currentRoom > 0 ? currentRoom - 1 : totalRooms - 1];
		
				// Position the adjacent rooms.
				nextRoom.style.transform = 'translate3d(100%,0,0) translate3d(3px,0,0)';
				nextRoom.style.opacity = 1;
				prevRoom.style.transform = 'translate3d(-100%,0,0) translate3d(-3px,0,0)';
				prevRoom.style.opacity = 1;
			}
		
			function removeAdjacentRooms() {
				// Current room.
				var room = DOM.rooms[currentRoom],
					// Adjacent rooms.
					nextRoom = DOM.rooms[currentRoom < totalRooms - 1 ? currentRoom + 1 : 0],
					prevRoom = DOM.rooms[currentRoom > 0 ? currentRoom - 1 : totalRooms - 1];
		
				// Position the adjacent rooms.
				nextRoom.style.transform = 'none';
				nextRoom.style.opacity = 0;
				prevRoom.style.transform = 'none';
				prevRoom.style.opacity = 0;
			}
		
			// Preload all the images.
			if(DOM.scroller)
			{
				imagesLoaded(DOM.scroller, function() {
					var extradelay = 1000;
					// Slide out loader.
					anime({
						targets: DOM.loader,
						duration: 600,
						easing: 'easeInOutCubic',
						delay: extradelay,
						translateY: '-100%',
						begin: function() {
							init();
						},
						complete: function() {
							DOM.loader.classList.remove('overlay--active');
						}
					});
				});
			}
		} );
		//End execute javascript for slider 3d room
		
		
		//Start execute javascript for slider multi layouts
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-multi-layouts.default', function( $scope ) {
			document.documentElement.className = 'js';
			
			var slideshow = new MLSlideshow(document.querySelector('.slideshow'));
			
			if(document.querySelector('#next-slide'))
			{
				document.querySelector('#next-slide').addEventListener('click', function() {
					slideshow.next();
				});
			}
	
			if(document.querySelector('#prev-slide'))
			{
				document.querySelector('#prev-slide').addEventListener('click', function() {
					slideshow.prev();
				});
			}
		} );
		//End execute javascript for slider multi layouts
		
		//Start execute javascript for slider velo
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-velo.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			
			/**
			 * Velocity Effects
			 *
			 * First, A few Registered effects for velocity's ui kit.
			 * Actual slider stuff below
			 */
			
			var scaleDownAmnt = 0.7;
			var boxShadowAmnt = '40px';
			
			$.Velocity.RegisterEffect("translateUp", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '-100%'
			    }, 1]
			  ]
			});
			$.Velocity.RegisterEffect("translateDown", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '100%'
			    }, 1]
			  ]
			});
			$.Velocity.RegisterEffect("translateNone", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '0',
			      opacity: '1',
			      scale: '1',
			 
			    }, 1]
			  ]
			});
			//scale down
			$.Velocity.RegisterEffect("scaleDown", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      opacity: '0',
			      scale: '0.7',
			 
			    }, 1]
			  ]
			});
			
			//gallery
			$.Velocity.RegisterEffect("scaleDown.moveUp", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '0%',
			      scale: scaleDownAmnt,
			 
			    }, 0.20],
			    [{
			      translateY: '-100%'
			    }, 0.60],
			    [{
			      translateY: '-100%',
			      scale: '1',
			      // boxShadowBlur: '0'
			    }, 0.20]
			  ]
			});
			$.Velocity.RegisterEffect("scaleDown.moveUp.scroll", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '-100%',
			      scale: scaleDownAmnt,
			 
			    }, 0.60],
			    [{
			      translateY: '-100%',
			      scale: '1',
			      // boxShadowBlur: '0'
			    }, 0.40]
			  ]
			});
			$.Velocity.RegisterEffect("scaleUp.moveUp", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '90%',
			      scale: scaleDownAmnt,
			      // boxShadowBlur: boxShadowAmnt     
			    }, 0.20],
			    [{
			      translateY: '0%'
			    }, 0.60],
			    [{
			      translateY: '0%',
			      scale: '1',
			      // boxShadowBlur: '0'
			    }, 0.20]
			  ]
			});
			$.Velocity.RegisterEffect("scaleUp.moveUp.scroll", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '0%',
			      scale: scaleDownAmnt,
			      // boxShadowBlur: boxShadowAmnt
			    }, 0.60],
			    [{
			      translateY: '0%',
			      scale: '1',
			      // boxShadowBlur: '0'
			    }, 0.40]
			  ]
			});
			$.Velocity.RegisterEffect("scaleDown.moveDown", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '0%',
			      scale: scaleDownAmnt,
			      // boxShadowBlur: boxShadowAmnt
			    }, 0.20],
			    [{
			      translateY: '100%'
			    }, 0.60],
			    [{
			      translateY: '100%',
			      scale: '1',
			      // boxShadowBlur: '0'
			    }, 0.20]
			  ]
			});
			$.Velocity.RegisterEffect("scaleDown.moveDown.scroll", {
			  defaultDuration: 1,
			  calls: [
			    [{
			
			    }, 0.60],
			    [{
			      translateY: '100%',
			      scale: '1',
			      // boxShadowBlur: '0'
			    }, 0.40]
			  ]
			});
			$.Velocity.RegisterEffect("scaleUp.moveDown", {
			  defaultDuration: 1,
			  calls: [
			    [{
			      translateY: '-90%',
			      scale: scaleDownAmnt,
			      // boxShadowBlur: boxShadowAmnt
			    }, 0.20],
			    [{
			      translateY: '0%'
			    }, 0.60],
			    [{
			      translateY: '0%',
			      scale: '1',
			      // boxShadowBlur: '0'
			    }, 0.20]
			  ]
			});
			
			
			
			/**
			 * Velo Slider
			 * A Custom Slider using Velocity and Velocity UI effects
			 */
			
			var VeloSlider = (function() {
			
			  /**
			   * Global Settings 
			   */
			  var settings = {
			    veloInit: $('.velo-slides').data('velo-slider'),
			    $veloSlide: $('.velo-slide'),
			    veloSlideBg: '.velo-slide__bg',
			    navPrev:  $('.velo-slides-nav').find('a.js-velo-slides-prev'),
			    navNext:  $('.velo-slides-nav').find('a.js-velo-slides-next'),
			    veloBtn:   $('.velo-slide__btn'),
			    delta: 0,
			    scrollThreshold: 7,
			    currentSlide: 1,
			    animating: false,
			    animationDuration: 2000
			  };
			
			
			  // Flags
			  var delta = 0,
			      animating = false;
			
			  return {
			   
			      /**
			       * Init 
			       */
			      init: function() {
			        this.bind();
			      },
			    
			    /**
			     * Bind our click, scroll, key events
			     */
			    bind: function(){
			 
			      //  Add active to first slide to set it off
			      settings.$veloSlide.first().addClass('is-active');
			
			      //  Init with a data attribute, 
			      //  Binding the animation to scroll, arrows, keys
			      if (settings.veloInit == 'on') {
			        VeloSlider.initScrollJack();
			        $(window).on('DOMMouseScroll mousewheel', VeloSlider.scrollJacking);
			      }
			
			      // Arrow / Click Nav
			      settings.navPrev.on('click', VeloSlider.prevSlide);
			      settings.navNext.on('click', VeloSlider.nextSlide);
			    
			      // Key Nav
			      $(document).on('keydown', function(e) {
			        var keyNext = (e.which == 39 || e.which == 40),
			            keyPrev = (e.which == 37 || e.which == 38);
			
			        if (keyNext && !settings.navNext.hasClass('inactive')) {
			          e.preventDefault();
			          VeloSlider.nextSlide();
			
			        } else if (keyPrev && (!settings.navPrev.hasClass('inactive'))) {
			          e.preventDefault();
			          VeloSlider.prevSlide();
			        }
			      });
			      
			      jQuery('body').on('touchmove', function(e){
					  e.preventDefault();
					  e.stopPropagation();
					  
					  return false;
					});
				    
				    var ts;
					jQuery(document).bind('touchstart', function (e){
					   ts = e.originalEvent.touches[0].clientY;
					});
					
					jQuery(document).bind('touchend', function (e){
					   var te = e.originalEvent.changedTouches[0].clientY;
					   if(ts > te+5){
					      VeloSlider.nextSlide();
					   }else if(ts < te-5){
					      VeloSlider.prevSlide();
					   }
					});
			    
			      //set navigation arrows visibility
			      VeloSlider.checkNavigation();
			
			      // Call Button Hover animation
			      VeloSlider.hoverAnimation();
			     
			    },
			
			    /**
			     * Hover Animation
			     * Adds 'is-hovering' class to the current slide
			     * when hovering over the button.
			     */
			    hoverAnimation: function(){
			      settings.veloBtn.hover(function (){
			        $(this).closest(settings.$veloSlide).toggleClass('is-hovering');
			      });
			    },
			
			    /** 
			     * Set Animation
			     * Defines the animation sequence, calling our registered velocity effects
			     * @see js/components/_velocity-effects.js
			     */
			    setAnimation: function(midStep, direction) {
			      
			      // Vars for our velocity effects
			      var animationVisible = 'translateNone',
			          animationTop = 'translateUp',
			          animationBottom = 'translateDown',
			          easing = 'ease',
			          animDuration = settings.animationDuration;
			
			      // Middle Step
			      if (midStep) {
			        animationVisible = 'scaleUp.moveUp.scroll';
			        animationTop = 'scaleDown.moveUp.scroll';
			        animationBottom = 'scaleDown.moveDown.scroll';
			      
			      } else {
			        animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
			        animationTop = 'scaleDown.moveUp';
			        animationBottom = 'scaleDown.moveDown';
			      }
			
			      return [animationVisible, animationTop, animationBottom, animDuration, easing];
			    },
			
			    /** 
			     * Init Scroll Jaclk
			     */
			    initScrollJack: function() {
			
			      var visibleSlide = settings.$veloSlide.filter('.is-active'),
			          topSection = visibleSlide.prevAll(settings.$veloSlide),
			          bottomSection = visibleSlide.nextAll(settings.$veloSlide),
			          animationParams = VeloSlider.setAnimation(false),
			          animationVisible = animationParams[0],
			          animationTop = animationParams[1],
			          animationBottom = animationParams[2];
			          console.log(animationParams);
			          console.log(animationParams[4]);
			
			      visibleSlide.children('div').velocity(animationVisible, 1, function() {
			        visibleSlide.css('opacity', 1);
			        topSection.css('opacity', 1);
			        bottomSection.css('opacity', 1);
			      });
			
			      topSection.children('div').velocity(animationTop, 0);
			      bottomSection.children('div').velocity(animationBottom, 0);
			    },
			
			    /**
			     * Scroll Jack
			     * On Mouse Scroll
			     */
			    scrollJacking: function(e) {
				    if(!jQuery('body').hasClass('js_nav'))
				    {
				      if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
				        delta--;
				        (Math.abs(delta) >= settings.scrollThreshold) && VeloSlider.prevSlide();
				      } else {
				        delta++;
				        (delta >= settings.scrollThreshold) && VeloSlider.nextSlide();
				      }
				      return false;
					}
			    },
			
			    /**
			     * Previous Slide
			     */
			    prevSlide: function(e) {
			      //go to previous section
			      typeof e !== 'undefined' && e.preventDefault();
			      
			      var visibleSlide = settings.$veloSlide.filter('.is-active'),
			          animationParams = VeloSlider.setAnimation(midStep, 'prev'),
			          midStep = false;
			      
			      visibleSlide = midStep ? visibleSlide.next(settings.$veloSlide) : visibleSlide;
			
			      console.log(midStep);
			
			      if (!animating && !visibleSlide.is(":first-child")) {
			        animating = true;
			        
			        visibleSlide
			          .removeClass('is-active')
			          .children(settings.veloSlideBg)
			          .velocity(animationParams[2], animationParams[3], animationParams[4])
			          .end()
			          .prev(settings.$veloSlide)
			          .addClass('is-active')
			          .children(settings.veloSlideBg)
			          .velocity(animationParams[0], animationParams[3], animationParams[4], function() {
			            animating = false;
			          });
			        currentSlide = settings.currentSlide - 1;
			      }
			      VeloSlider.resetScroll();
			    },
			
			
			    /** 
			     * Next Slide
			     */
			    nextSlide: function(e) {
			      
			      //go to next section
			      typeof e !== 'undefined' && e.preventDefault();
			      
			      var visibleSlide = settings.$veloSlide.filter('.is-active'),
			          animationParams = VeloSlider.setAnimation(midStep, 'next'),
			          midStep = false;
			
			      if (!animating && !visibleSlide.is(":last-of-type")) {
			        animating = true;
			
			        visibleSlide.removeClass('is-active')
			          .children(settings.veloSlideBg)
			          .velocity(animationParams[1], animationParams[3])
			          .end()
			          .next(settings.$veloSlide)
			          .addClass('is-active')
			          .children(settings.veloSlideBg)
			          .velocity(animationParams[0], animationParams[3], function() {
			            animating = false;
			        });
			        currentSlide = settings.currentSlide + 1;
			      }
			      VeloSlider.resetScroll();
			    },
			
			    /**
			     * Reset SCroll
			     */
			    resetScroll: function() {
			      delta = 0;
			      VeloSlider.checkNavigation();
			    },
			
			    /**
			     * Check Nav
			     * Adds / hides nav based on first/last slide
			     * @todo - loop slides, without cloning if possible
			     */
			    checkNavigation: function() {
			      //update navigation arrows visibility
			      (settings.$veloSlide.filter('.is-active').is(':first-of-type')) ? settings.navPrev.addClass('inactive'): settings.navPrev.removeClass('inactive');
			      (settings.$veloSlide.filter('.is-active').is(':last-of-type')) ? settings.navNext.addClass('inactive'): settings.navNext.removeClass('inactive');
			
			    },
			  };
			})();
			
			// INIT
			VeloSlider.init();
		} );
		//End execute javascript for slider velo
		
		//Start execute javascript for slider popout
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-popout.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			
			function goToSlide(number){
			  $('.slider__slide').removeClass('slider__slide--active');
			  $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
			}
			
			$('.slider__next, .go-to-next').on('click', function(){
			  var currentSlide = Number($('.slider__slide--active').data('slide'));
			  var totalSlides = $('.slider__slide').length;
			  currentSlide++
			  if (currentSlide > totalSlides){
			    currentSlide = 1;
			  }
			  goToSlide(currentSlide);
			});
			
			for (var i=1; i <= $('.slider__slide').length; i++){
			    $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
			  }
			  setTimeout(function(){
			    $('.slider__wrap').addClass('slider__wrap--hacked');
			  }, 1000);
		} );
		//End execute javascript for slider popout
		
		
		//Start execute javascript for slider clip path
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-clip-path.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			
			(function() {
			  var $slides = document.querySelectorAll('.slide');
			  var $controls = document.querySelectorAll('.slider__control');
			  var numOfSlides = $slides.length;
			  var slidingAT = 1300; // sync this with scss variable
			  var slidingBlocked = false;
			
			  [].slice.call($slides).forEach(function($el, index) {
			    var i = index + 1;
			    $el.classList.add('slide-' + i);
			    $el.dataset.slide = i;
			  });
			
			  [].slice.call($controls).forEach(function($el) {
			    $el.addEventListener('click', controlClickHandler);
			  });
			
			  function controlClickHandler() {
			    if (slidingBlocked) return;
			    slidingBlocked = true;
			
			    var $control = this;
			    var isRight = $control.classList.contains('m--right');
			    var $curActive = document.querySelector('.slide.s--active');
			    var index = +$curActive.dataset.slide;
			    (isRight) ? index++ : index--;
			    if (index < 1) index = numOfSlides;
			    if (index > numOfSlides) index = 1;
			    var $newActive = document.querySelector('.slide-' + index);
			
			    $control.classList.add('a--rotation');
			    $curActive.classList.remove('s--active', 's--active-prev');
			    document.querySelector('.slide.s--prev').classList.remove('s--prev');
			    
			    $newActive.classList.add('s--active');
			    if (!isRight) $newActive.classList.add('s--active-prev');
			    
			
			    var prevIndex = index - 1;
			    if (prevIndex < 1) prevIndex = numOfSlides;
			
			    document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
			
			    setTimeout(function() {
			      $control.classList.remove('a--rotation');
			      slidingBlocked = false;
			    }, slidingAT*0.75);
			  };
			}());
		} );
		//End execute javascript for slider clip path
		
		//Start execute javascript for gallery preview
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-gallery-preview.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			jQuery('body').addClass('photographer-gallery-preview');
			
			var $slider = $('.slider');
			var $slickTrack = $('.slick-track');
			var $slickCurrent = $('.slick-current');
			
			var slideDuration = 900;
			
			//RESET ANIMATIONS
			// On init slide change
			$slider.on('init', function(slick){
			  TweenMax.to($('.slick-track'), 0.9, {
			    marginLeft: 0
			  });
			  TweenMax.to($('.slick-active'), 0.9, {
			    x: 0,
			    zIndex: 2
			  });
			});
			// On before slide change
			$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			  TweenMax.to($('.slick-track'), 0.9, {
			    marginLeft: 0
			  });
			  TweenMax.to($('.slick-active'), 0.9, {
			    x: 0
			  });
			});
			
			// On after slide change
			$slider.on('afterChange', function(event, slick, currentSlide){
			  TweenMax.to($('.slick-track'), 0.9, {
			    marginLeft: 0
			  });
			  $('.slick-slide').css('z-index','1');
			  TweenMax.to($('.slick-active'), 0.9, {
			    x: 0,
			    zIndex: 2
			  });
			});
			
			var $sliderPagination = $('.slider').attr('data-pagination');
			var dotsVar = false;
			if($sliderPagination == 'yes')
			{
				dotsVar = true;
			}
			
			var $sliderNavigation = $('.slider').attr('data-navigation');
			var arrowsVar = false;
			if($sliderNavigation == 'yes')
			{
				arrowsVar = true;
			}
			
			var $sliderAutoPlay = $('.slider').attr('data-autoplay');
			var autoPlayVar = false;
			var autoPlayTimeVar = 0;
			if (typeof $sliderAutoPlay != "undefined"){
				autoPlayVar = true;
				autoPlayTimeVar = $sliderAutoPlay;
			}
			
			//SLICK INIT
			$slider.slick({
			  speed: slideDuration,
			  touchMove: true,
			  dots: dotsVar,
			  arrows: arrowsVar,
			  waitForAnimate: true,
			  useTransform: true,
			  autoplay: autoPlayVar,
			  autoplaySpeed: autoPlayTimeVar,
			  cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
			})
			
			//PREV
			$('.slick-prev').on('mouseenter', function(){
			                TweenMax.to($('.slick-track'), 0.6, {
			                  marginLeft: "180px",
			                  ease: Quad.easeOut
			                });
			                TweenMax.to($('.slick-current'), 0.6, {
			                  x: -100,
			                  ease: Quad.easeOut
			                });
			            });
			
			$('.slick-prev').on('mouseleave', function(){
			                TweenMax.to($('.slick-track'), 0.4, {
			                  marginLeft: 0,
			                  ease: Sine.easeInOut
			                });
			                TweenMax.to($('.slick-current'), 0.4, {
			                  x: 0,
			                  ease: Sine.easeInOut
			                });
			            });
			
			//NEXT
			$('.slick-next').on('mouseenter', function(){
			  
			                TweenMax.to($('.slick-track'), 0.6, {
			                  marginLeft: "-180px",
			                  ease: Quad.easeOut
			                });
			                TweenMax.to($('.slick-current'), 0.6, {
			                  x: 100,
			                  ease: Quad.easeOut
			                });
			            });
			
			$('.slick-next').on('mouseleave', function(){
			                TweenMax.to($('.slick-track'), 0.4, {
			                  marginLeft: 0,
			                  ease: Quad.easeInOut
			                });
			                TweenMax.to($('.slick-current'), 0.4, {
			                  x: 0,
			                  ease: Quad.easeInOut
			                });
			            });
		} );
		//End execute javascript for gallery preview
		
		//Start execute javascript for slider split slick
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-split-slick.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			
			var $slider = $('.slideshow .slider'),
			  maxItems = $('.item', $slider).length,
			  dragging = false,
			  tracking,
			  rightTracking;
			
			$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));
			
			rightItems = $('.item', $sliderRight).toArray();
			reverseItems = rightItems.reverse();
			$('.slider', $sliderRight).html('');
			for (i = 0; i < maxItems; i++) {
			  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
			}
			
			$slider.addClass('slideshow-left');
			$('.slideshow-left').slick({
			  vertical: true,
			  verticalSwiping: true,
			  arrows: false,
			  infinite: true,
			  dots: true,
			  speed: 1000,
			  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
			}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			
			  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
			    $('.slideshow-right .slider').slick('slickGoTo', -1);
			    $('.slideshow-text').slick('slickGoTo', maxItems);
			  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
			    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
			    $('.slideshow-text').slick('slickGoTo', -1);
			  } else {
			    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
			    $('.slideshow-text').slick('slickGoTo', nextSlide);
			  }
			}).on("mousewheel", function(event) {
			  event.preventDefault();
			  if (event.deltaX > 0 || event.deltaY < 0) {
			    $(this).slick('slickNext');
			  } else if (event.deltaX < 0 || event.deltaY > 0) {
			    $(this).slick('slickPrev');
			  };
			}).on('mousedown touchstart', function(){
			  dragging = true;
			  tracking = $('.slick-track', $slider).css('transform');
			  tracking = parseInt(tracking.split(',')[5]);
			  rightTracking = $('.slideshow-right .slick-track').css('transform');
			  rightTracking = parseInt(rightTracking.split(',')[5]);
			}).on('mousemove touchmove', function(){
			  if (dragging) {
			    newTracking = $('.slideshow-left .slick-track').css('transform');
			    newTracking = parseInt(newTracking.split(',')[5]);
			    diffTracking = newTracking - tracking;
			    $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
			  }
			}).on('mouseleave touchend mouseup', function(){
			  dragging = false;
			});
			
			$('.slideshow-right .slider').slick({
			  swipe: false,
			  vertical: true,
			  arrows: false,
			  infinite: true,
			  speed: 950,
			  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			  initialSlide: maxItems - 1
			});
			$('.slideshow-text').slick({
			  swipe: false,
			  vertical: true,
			  arrows: false,
			  infinite: true,
			  speed: 900,
			  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
			});
		} );
		//End execute javascript for slider split slick
		
		//Start execute javascript for slider transitions
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-transitions.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			
			var mySwiper = new Swiper(".swiper-container", {
			  direction: "vertical",
			  loop: true,
			  pagination: {
				  el: '.swiper-pagination',
				  type: 'bullets',
				  clickable: true
			  },
			  keyboard: {
			    enabled: true,
			    onlyInViewport: false,
			  },
			  grabCursor: true,
			  speed: 1000,
			  paginationClickable: true,
			  parallax: true,
			  autoplay: false,
			  effect: "slide",
			  mousewheel: {
			    invert: false,
			  },
			});
		} );
		//End execute javascript for slider transitions
		
		//Start execute javascript for album grid
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-album-grid.default', function( $scope ) {
			jQuery(function( $ ) {
				var tiltSettings = [
				{},
				{
					movement: {
						imgWrapper : {
							translation : {x: 10, y: 10, z: 30},
							rotation : {x: 0, y: -10, z: 0},
							reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
						},
						lines : {
							translation : {x: 10, y: 10, z: [0,70]},
							rotation : {x: 0, y: 0, z: -2},
							reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
						},
						caption : {
							rotation : {x: 0, y: 0, z: 2},
							reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
						},
						overlay : {
							translation : {x: 10, y: -10, z: 0},
							rotation : {x: 0, y: 0, z: 2},
							reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
						},
						shine : {
							translation : {x: 100, y: 100, z: 0},
							reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
						}
					}
				},
				{
					movement: {
						imgWrapper : {
							rotation : {x: -5, y: 10, z: 0},
							reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
						},
						caption : {
							translation : {x: 30, y: 30, z: [0,40]},
							rotation : {x: [0,15], y: 0, z: 0},
							reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
						},
						overlay : {
							translation : {x: 10, y: 10, z: [0,20]},
							reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
						},
						shine : {
							translation : {x: 100, y: 100, z: 0},
							reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
						}
					}
				},
				{
					movement: {
						imgWrapper : {
							rotation : {x: -5, y: 10, z: 0},
							reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
						},
						caption : {
							translation : {x: 20, y: 20, z: 0},
							reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
						},
						overlay : {
							translation : {x: 5, y: -5, z: 0},
							rotation : {x: 0, y: 0, z: 6},
							reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
						},
						shine : {
							translation : {x: 50, y: 50, z: 0},
							reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
						}
					}
				},
				{
					movement: {
						imgWrapper : {
							translation : {x: 0, y: -8, z: 0},
							rotation : {x: 3, y: 3, z: 0},
							reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
						},
						lines : {
							translation : {x: 15, y: 15, z: [0,15]},
							reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
						},
						overlay : {
							translation : {x: 0, y: 8, z: 0},
							reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
						},
						caption : {
							translation : {x: 10, y: -15, z: 0},
							reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
						},
						shine : {
							translation : {x: 50, y: 50, z: 0},
							reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
						}
					}
				},
				{
					movement: {
						lines : {
							translation : {x: -5, y: 5, z: 0},
							reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
						},
						caption : {
							translation : {x: 15, y: 15, z: 0},
							rotation : {x: 0, y: 0, z: 3},
							reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
						},
						overlay : {
							translation : {x: 15, y: -15, z: 0},
							reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
						},
						shine : {
							translation : {x: 50, y: 50, z: 0},
							reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
						}
					}
				},
				{
					movement: {
						imgWrapper : {
							translation : {x: 5, y: 5, z: 0},
							reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
						},
						caption : {
							translation : {x: 10, y: 10, z: [0,50]},
							reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
						},
						shine : {
							translation : {x: 50, y: 50, z: 0},
							reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
						}
					}
				},
				{
					movement: {
						lines : {
							translation : {x: 40, y: 40, z: 0},
							reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
						},
						caption : {
							translation : {x: 20, y: 20, z: 0},
							rotation : {x: 0, y: 0, z: -5},
							reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
						},
						overlay : {
							translation : {x: -30, y: -30, z: 0},
							rotation : {x: 0, y: 0, z: 3},
							reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
						},
						shine : {
							translation : {x: 100, y: 100, z: 0},
							reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
						}
					}
				}];
	
				function init() {
					var idx = 0;
					[].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
						idx = pos%2 === 0 ? idx+1 : idx;
						new TiltFx(el, tiltSettings[idx-1]);
					});
				}
	
				init();
			});
		} );
		//End execute javascript for album grid
		
		
		//Start execute javascript for slider property clip
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-property-clip.default', function( $scope ) {
			jQuery(".tg_slider_property_clip_wrapper").each(function() {
				var slider = jQuery(this).find(".slider"),
					slides = slider.find('li'),
					nav = slider.find('nav');
			
				slides.eq(0).addClass('current');
			
				nav.children('a').eq(0).addClass('current_dot');
			
				nav.on('click', 'a', function(event) {
					event.preventDefault();
					$(this).addClass('current_dot').siblings().removeClass('current_dot');
					slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
					slides.eq($(this).index()).prevAll().addClass('prev');
					slides.eq($(this).index()).nextAll().removeClass('prev');
				});
			});
		} );
		//End execute javascript for slider property clip
		
		//Start execute javascript for slider slice
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-slice.default', function( $scope ) {
			jQuery(".tg_slice_slide_container").each(function() {
				var slide = jQuery('.slide');
				var navPrev = jQuery('.js-prev');
				var navNext = jQuery('.js-next');
				var SliceSlider = {
    
			    /**
			     * Settings Object
			     */
			    settings: {
			      delta:              0,
			      currentSlideIndex:  0,
			      scrollThreshold:    40,
			      slides:             slide,
			      numSlides:          slide.length,
			      navPrev:            navPrev,
			      navNext:            navNext,
			    },
			    
			    /**
			     * Init
			     */
			    init: function() {
			      s = this.settings;
			      this.bindEvents();
			    },
			    
			    /**
			     * Bind our click, scroll, key events
			     */
			    bindEvents: function(){
			      
			      // Scrollwheel & trackpad
			      /*s.slides.on({
			        'DOMMouseScroll mousewheel' : SliceSlider.handleScroll
			      });*/
			      // On click prev
			      s.navPrev.on({
			        'click' : SliceSlider.prevSlide
			      });
			      // On click next
			      s.navNext.on({
			        'click' : SliceSlider.nextSlide
			      });
			      // On Arrow keys
			      $(document).keyup(function(e) {
			        // Left or back arrows
			        if ((e.which === 37) ||  (e.which === 38)){
			          SliceSlider.prevSlide();
			        }
			        // Down or right
			        if ((e.which === 39) ||  (e.which === 40)) {
			          SliceSlider.nextSlide();
			        }
			      });
			    },
			    
			    /** 
			     * Interept scroll direction
			     */
			    handleScroll: function(e){
			
			      // Scrolling up
			      if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
			
			        s.delta--;
			     
			        if ( Math.abs(s.delta) >= s.scrollThreshold) {
			          SliceSlider.prevSlide();
			        }
			      }
			 
			      // Scrolling Down
			      else {
			 
			        s.delta++;
			 
			        if (s.delta >= s.scrollThreshold) {
			          SliceSlider.nextSlide();
			        }
			      }
			 
			      // Prevent page from scrolling
			      return false;
			    },
			
			    /**
			     * Show Slide
			     */
			    showSlide: function(){ 
			      // reset
			      s.delta = 0;
			      // Bail if we're already sliding
			      if ($('body').hasClass('is-sliding')){
			        return;
			      }
			      // Loop through our slides
			      s.slides.each(function(i, slide) {
			
			        // Toggle the is-active class to show slide
			        $(slide).toggleClass('is-active', (i === s.currentSlideIndex)); 
			        $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1)); 
			        $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1)); 
			        
			        // Add and remove is-sliding class
			        $('body').addClass('is-sliding');
			
			        setTimeout(function(){
			            $('body').removeClass('is-sliding');
			        }, 1000);
			      });
			    },
			
			    /**
			     * Previous Slide
			     */
			    prevSlide: function(){
			      
			      // If on first slide, loop to last
			      if (s.currentSlideIndex <= 0) {
			        s.currentSlideIndex = s.numSlides;
			      }
			      s.currentSlideIndex--;
			      
			      SliceSlider.showSlide();
			    },
			
			    /**
			     * Next Slide
			     */
			    nextSlide: function(){
			      
			      s.currentSlideIndex++;
			   
			      // If on last slide, loop to first
			      if (s.currentSlideIndex >= s.numSlides) { 
			        s.currentSlideIndex = 0;
			      }
			 
			      SliceSlider.showSlide();
			    },
			  };
			  SliceSlider.init();
			});
		} );
		//End execute javascript for slider slice
		
		//Start execute javascript for slider flip
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-flip.default', function( $scope ) {
			jQuery('body').addClass('elementor-fullscreen');
			jQuery('body').addClass('elementor-overflow');
			
			var Gallery = (function() {
			    var scrollTimeId;
			    var posLeft = 0;
			
			    function Gallery(config) {
			        this.list = $(config.list);
			        this.items = this.list.find('li');
			        this.itemWidth = this.items.outerWidth();
			    };
			
			    Gallery.prototype = {
			        constructor: Gallery,
			
			        init: function() {
			            this.setGalleryWidth();
			            this.eventManager();
			
			            return this;
			        },
			
			        eventManager: function() {
			            var _this = this;
			
			            $("html, body").on('mousewheel', function(event) {
			                clearTimeout(scrollTimeId);
			                scrollTimeId = setTimeout(onScrollEventHandler.bind(this, event, _this.itemWidth), 0);
			            });
			        },
			
			        setGalleryWidth: function() {
			            this.list.css('width', this.getGalleryWidth());
			            this.list.css('overflow', 'scroll');
			        },
			
			        getGalleryWidth: function() {
			            var width = 0;
			
			            this.items.each(function(index, item) {
			                width += $(this).outerWidth();
			            });
			
			            return width;
			        }
			    };
			
			    function onScrollEventHandler(event, width) {
			      if (event.deltaY > 0) {
			        this.scrollLeft -= width / 20;
			      } else {
			        this.scrollLeft += width / 20;
			      }
			
			      event.preventDefault();
			    };
			
			    return Gallery;
			})();
			
			
			$(document).ready(function() {
			    var gallery = new Gallery({
			        list: '.tg_flip_slide_container .container .gallery'
			    }).init();
			    
			    jQuery('.tg_flip_slide_container').css('overflow', 'scroll');
			    jQuery('body').css('overflow', 'scroll');
			});
		} );
		//End execute javascript for slider flip
		
		//Start execute javascript for slider split carousel
		elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-slider-split-carousel.default', function( $scope ) {
			jQuery(".tg_split_carousel_slider_wrapper").each(function() {
				var $carousel = jQuery(this);
			
				var fullscreen = $carousel.attr('data-fullscreen');
				if(fullscreen != 0)
				{
					jQuery('body').addClass('elementor-fullscreen');
					
					//Get menu element height
					var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
					var documentHeight = jQuery(window).innerHeight();
					var sliderHeight = parseInt(documentHeight - menuHeight);
					
					$carousel.css('height', sliderHeight+'px');
					
					jQuery( window ).resize(function() {
						var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
						var documentHeight = jQuery(window).innerHeight();
						var sliderHeight = parseInt(documentHeight - menuHeight);
						
						$carousel.css('height', sliderHeight+'px');
					});
				}
				
				var activeIndex = 0;
				var limit = 0;
				var disabled = false;
				var $stage = void 0;
				var $controls = void 0;
				var canvas = false;
				
				var SPIN_FORWARD_CLASS = 'js-spin-fwd';
				var SPIN_BACKWARD_CLASS = 'js-spin-bwd';
				var DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';
				var SPIN_DUR = 1000;
				
				var appendControls = function appendControls() {
				    for (var i = 0; i < limit; i++) {
				        $('.carousel__control').append('<a href="#" data-index="' + i + '"></a>');
				    }
				    var height = $('.carousel__control').children().last().outerHeight();
				
				    $('.carousel__control').css('height', 30 + limit * height);
				    $controls = $('.carousel__control').children();
				    $controls.eq(activeIndex).addClass('active');
				};
				
				var setIndexes = function setIndexes() {
				    $('.spinner').children().each(function (i, el) {
				        $(el).attr('data-index', i);
				        limit++;
				    });
				};
				
				var duplicateSpinner = function duplicateSpinner() {
				    var $el = $('.spinner').parent();
				    var html = $('.spinner').parent().html();
				    $el.append(html);
				    $('.spinner').last().addClass('spinner--right');
				    $('.spinner--right').removeClass('spinner--left');
				};
				
				var paintFaces = function paintFaces() {
				    $('.spinner__face').each(function (i, el) {
				        var $el = $(el);
				        var color = $(el).attr('data-bg');
				        $el.children().css('backgroundImage', 'url(' + getBase64PixelByColor(color) + ')');
				    });
				};
				
				var getBase64PixelByColor = function getBase64PixelByColor(hex) {
				    if (!canvas) {
				        canvas = document.createElement('canvas');
				        canvas.height = 1;
				        canvas.width = 1;
				    }
				    if (canvas.getContext) {
				        var ctx = canvas.getContext('2d');
				        ctx.fillStyle = hex;
				        ctx.fillRect(0, 0, 1, 1);
				        return canvas.toDataURL();
				    }
				    return false;
				};
				
				var prepareDom = function prepareDom() {
				    setIndexes();
				    paintFaces();
				    duplicateSpinner();
				    appendControls();
				};
				
				var spin = function spin() {
				    var inc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
				
				    if (disabled) return;
				    if (!inc) return;
				    activeIndex += inc;
				    disabled = true;
				
				    if (activeIndex >= limit) {
				        activeIndex = 0;
				    }
				
				    if (activeIndex < 0) {
				        activeIndex = limit - 1;
				    }
				
				    var $activeEls = $('.spinner__face.js-active');
				    var $nextEls = $('.spinner__face[data-index=' + activeIndex + ']');
				    $nextEls.addClass('js-next');
				
				    if (inc > 0) {
				        $stage.addClass(SPIN_FORWARD_CLASS);
				    } else {
				        $stage.addClass(SPIN_BACKWARD_CLASS);
				    }
				
				    $controls.removeClass('active');
				    $controls.eq(activeIndex).addClass('active');
				
				    setTimeout(function () {
				        spinCallback(inc);
				    }, SPIN_DUR, inc);
				};
				
				var spinCallback = function spinCallback(inc) {
				
				    $('.js-active').removeClass('js-active');
				    $('.js-next').removeClass('js-next').addClass('js-active');
				    $stage.addClass(DISABLE_TRANSITIONS_CLASS).removeClass(SPIN_FORWARD_CLASS).removeClass(SPIN_BACKWARD_CLASS);
				
				    $('.js-active').each(function (i, el) {
				        var $el = $(el);
				        $el.prependTo($el.parent());
				    });
				    setTimeout(function () {
				        $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
				        disabled = false;
				    }, 100);
				};
				
				var attachListeners = function attachListeners() {
				
				    document.onkeyup = function (e) {
				        switch (e.keyCode) {
				            case 38:
				                spin(-1);
				                break;
				            case 40:
				                spin(1);
				                break;
				        }
				    };
				    
				    $carousel.bind('DOMMouseScroll', function(e){
					     if(e.originalEvent.detail > 0) {
					         //scroll down
					         spin(1);
					     }else {
					         //scroll up
					         spin(-1);
					     }
					
					     //prevent page fom scrolling
					     return false;
					 });
					
					 //IE, Opera, Safari
					 $carousel.bind('mousewheel', function(e){
					     if(e.originalEvent.wheelDelta < 0) {
					         //scroll down
					         spin(1);
					     }else {
					         //scroll up
					         spin(-1);
					     }
					
					     //prevent page fom scrolling
					     return false;
					 });
				    
				    jQuery('body').on('touchmove', function(e){
					  e.preventDefault();
					  e.stopPropagation();
					  
					  return false;
					});
				    
				    var ts;
					$carousel.bind('touchstart', function (e){
					   ts = e.originalEvent.touches[0].clientY;
					});
					
					$carousel.bind('touchend', function (e){
					   var te = e.originalEvent.changedTouches[0].clientY;
					   if(ts > te+5){
					      spin(1);
					   }else if(ts < te-5){
					      spin(-1);
					   }
					});
				
				    $controls.on('click', function (e) {
				        e.preventDefault();
				        if (disabled) return;
				        var $el = $(e.target);
				        var toIndex = parseInt($el.attr('data-index'), 10);
				        spin(toIndex - activeIndex);
				    });
				};
				
				var assignEls = function assignEls() {
				    $stage = $('.carousel__stage');
				};
				
				var init = function init() {
				    assignEls();
				    prepareDom();
				    attachListeners();
				};
				
				$(function () {
				    init();
				});
			});
		} );
		//End execute javascript for slider split carousel
		
		//Start execute javascript for horizontal timeline
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-horizontal-timeline.default', function( $scope ) {
			var timelines = jQuery('.cd-horizontal-timeline'),
			eventsMinDistance = 60;
	
		(timelines.length > 0) && initTimeline(timelines);
	
		function initTimeline(timelines) {
			timelines.each(function(){
				var timeline = jQuery(this),
					timelineComponents = {};
				//cache timeline components 
				timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
				timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
				timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
				timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
				timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
				timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
				timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
				timelineComponents['eventsContent'] = timeline.children('.events-content');
	
				//assign a left postion to the single events along the timeline
				setDatePosition(timelineComponents, eventsMinDistance);
				//assign a width to the timeline
				var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
				//the timeline has been initialize - show it
				timeline.addClass('loaded');
	
				//detect click on the next arrow
				timelineComponents['timelineNavigation'].on('click', '.next', function(event){
					event.preventDefault();
					updateSlide(timelineComponents, timelineTotWidth, 'next');
				});
				//detect click on the prev arrow
				timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
					event.preventDefault();
					updateSlide(timelineComponents, timelineTotWidth, 'prev');
				});
				//detect click on the a single event - show new event content
				timelineComponents['eventsWrapper'].on('click', 'a', function(event){
					event.preventDefault();
					timelineComponents['timelineEvents'].removeClass('selected');
					jQuery(this).addClass('selected');
					updateOlderEvents(jQuery(this));
					updateFilling(jQuery(this), timelineComponents['fillingLine'], timelineTotWidth);
					updateVisibleContent(jQuery(this), timelineComponents['eventsContent']);
				});
	
				//on swipe, show next/prev event content
				timelineComponents['eventsContent'].on('swipeleft', function(){
					var mq = checkMQ();
					( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
				});
				timelineComponents['eventsContent'].on('swiperight', function(){
					var mq = checkMQ();
					( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
				});
	
				//keyboard navigation
				jQuery(document).keyup(function(event){
					if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
						showNewContent(timelineComponents, timelineTotWidth, 'prev');
					} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
						showNewContent(timelineComponents, timelineTotWidth, 'next');
					}
				});
			});
		}
	
		function updateSlide(timelineComponents, timelineTotWidth, string) {
			//retrieve translateX value of timelineComponents['eventsWrapper']
			var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
				wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
			//translate the timeline to the left('next')/right('prev') 
			(string == 'next') 
				? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
				: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
		}
	
		function showNewContent(timelineComponents, timelineTotWidth, string) {
			//go from one event to the next/previous one
			var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
				newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();
	
			if ( newContent.length > 0 ) { //if there's a next/prev event - show it
				var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
					newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
				
				updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
				updateVisibleContent(newEvent, timelineComponents['eventsContent']);
				newEvent.addClass('selected');
				selectedDate.removeClass('selected');
				updateOlderEvents(newEvent);
				updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
			}
		}
	
		function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
			//translate timeline to the left/right according to the position of the selected event
			var eventStyle = window.getComputedStyle(event.get(0), null),
				eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
				timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
				timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
			var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);
	
	        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
	        	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
	        }
		}
	
		function translateTimeline(timelineComponents, value, totWidth) {
			var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
			value = (value > 0) ? 0 : value; //only negative translate value
			value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
			setTransformValue(eventsWrapper, 'translateX', value+'px');
			//update navigation arrows visibility
			(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
			(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
		}
	
		function updateFilling(selectedEvent, filling, totWidth) {
			//change .filling-line length according to the selected event
			var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
				eventLeft = eventStyle.getPropertyValue("left"),
				eventWidth = eventStyle.getPropertyValue("width");
			eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
			var scaleValue = eventLeft/totWidth;
			setTransformValue(filling.get(0), 'scaleX', scaleValue);
		}
	
		function setDatePosition(timelineComponents, min) {
			for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
			    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
			    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
			    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
			}
		}
	
		function setTimelineWidth(timelineComponents, width) {
			var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
				timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
				timeSpanNorm = Math.round(timeSpanNorm) + 4,
				totalWidth = timeSpanNorm*width;
			timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
			updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
		
			return totalWidth;
		}
	
		function updateVisibleContent(event, eventsContent) {
			var eventDate = event.data('date'),
				visibleContent = eventsContent.find('.selected'),
				selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
				selectedContentHeight = selectedContent.height();
	
			if (selectedContent.index() > visibleContent.index()) {
				var classEnetering = 'selected enter-right',
					classLeaving = 'leave-left';
			} else {
				var classEnetering = 'selected enter-left',
					classLeaving = 'leave-right';
			}
	
			selectedContent.attr('class', classEnetering);
			visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				visibleContent.removeClass('leave-right leave-left');
				selectedContent.removeClass('enter-left enter-right');
			});
			eventsContent.css('height', selectedContentHeight+'px');
		}
	
		function updateOlderEvents(event) {
			event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
		}
	
		function getTranslateValue(timeline) {
			var timelineStyle = window.getComputedStyle(timeline.get(0), null),
				timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
	         		timelineStyle.getPropertyValue("-moz-transform") ||
	         		timelineStyle.getPropertyValue("-ms-transform") ||
	         		timelineStyle.getPropertyValue("-o-transform") ||
	         		timelineStyle.getPropertyValue("transform");
	
	        if( timelineTranslate.indexOf('(') >=0 ) {
	        	var timelineTranslate = timelineTranslate.split('(')[1];
	    		timelineTranslate = timelineTranslate.split(')')[0];
	    		timelineTranslate = timelineTranslate.split(',');
	    		var translateValue = timelineTranslate[4];
	        } else {
	        	var translateValue = 0;
	        }
	
	        return Number(translateValue);
		}
	
		function setTransformValue(element, property, value) {
			element.style["-webkit-transform"] = property+"("+value+")";
			element.style["-moz-transform"] = property+"("+value+")";
			element.style["-ms-transform"] = property+"("+value+")";
			element.style["-o-transform"] = property+"("+value+")";
			element.style["transform"] = property+"("+value+")";
		}
	
		//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
		function parseDate(events) {
			var dateArrays = [];
			events.each(function(){
				var dateComp = jQuery(this).data('date').split('/'),
					newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
				dateArrays.push(newDate);
			});
		    return dateArrays;
		}
	
		function parseDate2(events) {
			var dateArrays = [];
			events.each(function(){
				var singleDate = jQuery(this),
					dateComp = singleDate.data('date').split('T');
				if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
					var dayComp = dateComp[0].split('/'),
						timeComp = dateComp[1].split(':');
				} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
					var dayComp = ["2000", "0", "0"],
						timeComp = dateComp[0].split(':');
				} else { //only DD/MM/YEAR
					var dayComp = dateComp[0].split('/'),
						timeComp = ["0", "0"];
				}
				var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
				dateArrays.push(newDate);
			});
		    return dateArrays;
		}
	
		function daydiff(first, second) {
		    return Math.round((second-first));
		}
	
		function minLapse(dates) {
			//determine the minimum distance among events
			var dateDistances = [];
			for (i = 1; i < dates.length; i++) { 
			    var distance = daydiff(dates[i-1], dates[i]);
			    dateDistances.push(distance);
			}
			return Math.min.apply(null, dateDistances);
		}
	
		/*
			How to tell if a DOM element is visible in the current viewport?
			http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
		*/
		function elementInViewport(el) {
			var top = el.offsetTop;
			var left = el.offsetLeft;
			var width = el.offsetWidth;
			var height = el.offsetHeight;
	
			while(el.offsetParent) {
			    el = el.offsetParent;
			    top += el.offsetTop;
			    left += el.offsetLeft;
			}
	
			return (
			    top < (window.pageYOffset + window.innerHeight) &&
			    left < (window.pageXOffset + window.innerWidth) &&
			    (top + height) > window.pageYOffset &&
			    (left + width) > window.pageXOffset
			);
		}
	
		function checkMQ() {
			//check if mobile or desktop device
			return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
		}
		} );
		//End execute javascript for horizontal timeline
		
		
		//Start execute javascript for background list
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-background-list.default', function( $scope ) {
			jQuery(".tg_background_list_wrapper").each(function() {
				var parentDiv = jQuery(this);
				
				parentDiv.children('.tg_background_list_column').hover(function () {
					parentDiv.find('.tg_background_img').removeClass('hover');
				    jQuery(this).next('.tg_background_img').addClass('hover');
				});
			});
		} );
		//End execute javascript for background list
		
		
		//Start execute javascript for portfolio masonry
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-portfolio-masonry.default', function( $scope ) {
			jQuery(function( $ ) {
				
				jQuery(".portfolio_masonry_content_wrapper.do_masonry").each(function() {
					var grid = jQuery(this);
					var cols = grid.attr('data-cols');
					cols = parseInt(cols);
					
					var gutter = 70;
					switch(cols)
					{
						case 2:
					        gutter = 70;
					        break;
					    case 3:
					        gutter = 60;
					        break;
					    case 4:
					        gutter = 50;
					        break;
					    case 5:
					        gutter = 40;
					        break;
					}
					
					grid.imagesLoaded().progress( function() {
						grid.masonry({
							itemSelector: ".gallery_grid_item",
							columnWidth: ".gallery_grid_item",
							gutter : gutter
						});
						
						jQuery(".portfolio_masonry_content_wrapper.do_masonry .gallery_grid_item").each(function(index) {
						    setTimeout(function() {
						      	jQuery(".do_masonry .gallery_grid_item").eq(index).addClass("is-showing");
						    }, 100 * index);
						 });
					});
					
					jQuery(".portfolio_masonry_content_wrapper.do_masonry img.lazy_masonry").each(function() {
						var currentImg = jQuery(this);
						currentImg.parent("div.post_img_hover").removeClass("lazy");
						
						var cols = grid.attr('data-cols');
						
						var gutter = 70;
						switch(cols)
						{
							case 2:
						        gutter = 70;
						        break;
						    case 3:
						        gutter = 60;
						        break;
						    case 4:
						        gutter = 50;
						        break;
						    case 5:
						        gutter = 40;
						        break;
						}
						
						jQuery(this).Lazy({
							onFinishedAll: function() {
								grid.masonry({
									itemSelector: ".gallery_grid_item",
									columnWidth: ".gallery_grid_item",
									gutter : gutter
								});
					        },
						});
					});
					
					jQuery(".portfolio_masonry_container").each(function() {
						var containderDiv = jQuery(this);
						var selectedClass = "";
						
						containderDiv.find(".filter_tag_btn").on('click', function(){
							containderDiv.find(".filter_tag_btn").removeClass("active");
							jQuery(this).addClass("active");
							selectedClass = jQuery(this).attr("data-rel"); 
							
							var gridDiv = containderDiv.find(".portfolio_masonry_content_wrapper.do_masonry");
							gridDiv.find(".portfolio_masonry_grid_wrapper").not("."+selectedClass).fadeOut().removeClass('scale-anm');
							
						    setTimeout(function() {
						      jQuery("."+selectedClass).fadeIn().addClass('scale-anm');
						      
						      gridDiv.masonry('destroy');
						      var $grid = gridDiv.masonry({
									itemSelector: ".gallery_grid_item.scale-anm",
									columnWidth: ".gallery_grid_item.scale-anm",
									gutter : gutter
							  });
							  
							  $grid.masonry('reloadItems');
		
						    }, 300);
					    });
					});
				});
			});
		} );
		//End execute javascript for portfolio masonry
		
		
		//Start execute javascript for portfolio timeline
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-portfolio-timeline.default', function( $scope ) {
			var timelines = jQuery('.cd-horizontal-timeline'),
			eventsMinDistance = 60;
	
		(timelines.length > 0) && initTimeline(timelines);
	
		function initTimeline(timelines) {
			timelines.each(function(){
				var timeline = jQuery(this),
					timelineComponents = {};
				//cache timeline components 
				timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
				timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
				timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
				timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
				timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
				timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
				timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
				timelineComponents['eventsContent'] = timeline.children('.events-content');
	
				//assign a left postion to the single events along the timeline
				setDatePosition(timelineComponents, eventsMinDistance);
				//assign a width to the timeline
				var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
				//the timeline has been initialize - show it
				timeline.addClass('loaded');
	
				//detect click on the next arrow
				timelineComponents['timelineNavigation'].on('click', '.next', function(event){
					event.preventDefault();
					updateSlide(timelineComponents, timelineTotWidth, 'next');
				});
				//detect click on the prev arrow
				timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
					event.preventDefault();
					updateSlide(timelineComponents, timelineTotWidth, 'prev');
				});
				//detect click on the a single event - show new event content
				timelineComponents['eventsWrapper'].on('click', 'a', function(event){
					event.preventDefault();
					timelineComponents['timelineEvents'].removeClass('selected');
					jQuery(this).addClass('selected');
					updateOlderEvents(jQuery(this));
					updateFilling(jQuery(this), timelineComponents['fillingLine'], timelineTotWidth);
					updateVisibleContent(jQuery(this), timelineComponents['eventsContent']);
				});
	
				//on swipe, show next/prev event content
				timelineComponents['eventsContent'].on('swipeleft', function(){
					var mq = checkMQ();
					( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
				});
				timelineComponents['eventsContent'].on('swiperight', function(){
					var mq = checkMQ();
					( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
				});
	
				//keyboard navigation
				jQuery(document).keyup(function(event){
					if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
						showNewContent(timelineComponents, timelineTotWidth, 'prev');
					} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
						showNewContent(timelineComponents, timelineTotWidth, 'next');
					}
				});
			});
		}
	
		function updateSlide(timelineComponents, timelineTotWidth, string) {
			//retrieve translateX value of timelineComponents['eventsWrapper']
			var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
				wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
			//translate the timeline to the left('next')/right('prev') 
			(string == 'next') 
				? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
				: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
		}
	
		function showNewContent(timelineComponents, timelineTotWidth, string) {
			//go from one event to the next/previous one
			var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
				newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();
	
			if ( newContent.length > 0 ) { //if there's a next/prev event - show it
				var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
					newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
				
				updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
				updateVisibleContent(newEvent, timelineComponents['eventsContent']);
				newEvent.addClass('selected');
				selectedDate.removeClass('selected');
				updateOlderEvents(newEvent);
				updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
			}
		}
	
		function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
			//translate timeline to the left/right according to the position of the selected event
			var eventStyle = window.getComputedStyle(event.get(0), null),
				eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
				timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
				timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
			var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);
	
	        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
	        	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
	        }
		}
	
		function translateTimeline(timelineComponents, value, totWidth) {
			var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
			value = (value > 0) ? 0 : value; //only negative translate value
			value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
			setTransformValue(eventsWrapper, 'translateX', value+'px');
			//update navigation arrows visibility
			(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
			(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
		}
	
		function updateFilling(selectedEvent, filling, totWidth) {
			//change .filling-line length according to the selected event
			var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
				eventLeft = eventStyle.getPropertyValue("left"),
				eventWidth = eventStyle.getPropertyValue("width");
			eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
			var scaleValue = eventLeft/totWidth;
			setTransformValue(filling.get(0), 'scaleX', scaleValue);
		}
	
		function setDatePosition(timelineComponents, min) {
			for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
			    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
			    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
			    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
			}
		}
	
		function setTimelineWidth(timelineComponents, width) {
			var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
				timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
				timeSpanNorm = Math.round(timeSpanNorm) + 4,
				totalWidth = timeSpanNorm*width;
			timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
			updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
		
			return totalWidth;
		}
	
		function updateVisibleContent(event, eventsContent) {
			var eventDate = event.data('date'),
				visibleContent = eventsContent.find('.selected'),
				selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
				selectedContentHeight = selectedContent.height();
	
			if (selectedContent.index() > visibleContent.index()) {
				var classEnetering = 'selected enter-right',
					classLeaving = 'leave-left';
			} else {
				var classEnetering = 'selected enter-left',
					classLeaving = 'leave-right';
			}
	
			selectedContent.attr('class', classEnetering);
			visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				visibleContent.removeClass('leave-right leave-left');
				selectedContent.removeClass('enter-left enter-right');
			});
			eventsContent.css('height', selectedContentHeight+'px');
		}
	
		function updateOlderEvents(event) {
			event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
		}
	
		function getTranslateValue(timeline) {
			var timelineStyle = window.getComputedStyle(timeline.get(0), null),
				timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
	         		timelineStyle.getPropertyValue("-moz-transform") ||
	         		timelineStyle.getPropertyValue("-ms-transform") ||
	         		timelineStyle.getPropertyValue("-o-transform") ||
	         		timelineStyle.getPropertyValue("transform");
	
	        if( timelineTranslate.indexOf('(') >=0 ) {
	        	var timelineTranslate = timelineTranslate.split('(')[1];
	    		timelineTranslate = timelineTranslate.split(')')[0];
	    		timelineTranslate = timelineTranslate.split(',');
	    		var translateValue = timelineTranslate[4];
	        } else {
	        	var translateValue = 0;
	        }
	
	        return Number(translateValue);
		}
	
		function setTransformValue(element, property, value) {
			element.style["-webkit-transform"] = property+"("+value+")";
			element.style["-moz-transform"] = property+"("+value+")";
			element.style["-ms-transform"] = property+"("+value+")";
			element.style["-o-transform"] = property+"("+value+")";
			element.style["transform"] = property+"("+value+")";
		}
	
		//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
		function parseDate(events) {
			var dateArrays = [];
			events.each(function(){
				var dateComp = jQuery(this).data('date').split('/'),
					newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
				dateArrays.push(newDate);
			});
		    return dateArrays;
		}
	
		function parseDate2(events) {
			var dateArrays = [];
			events.each(function(){
				var singleDate = jQuery(this),
					dateComp = singleDate.data('date').split('T');
				if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
					var dayComp = dateComp[0].split('/'),
						timeComp = dateComp[1].split(':');
				} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
					var dayComp = ["2000", "0", "0"],
						timeComp = dateComp[0].split(':');
				} else { //only DD/MM/YEAR
					var dayComp = dateComp[0].split('/'),
						timeComp = ["0", "0"];
				}
				var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
				dateArrays.push(newDate);
			});
		    return dateArrays;
		}
	
		function daydiff(first, second) {
		    return Math.round((second-first));
		}
	
		function minLapse(dates) {
			//determine the minimum distance among events
			var dateDistances = [];
			for (i = 1; i < dates.length; i++) { 
			    var distance = daydiff(dates[i-1], dates[i]);
			    dateDistances.push(distance);
			}
			return Math.min.apply(null, dateDistances);
		}
	
		/*
			How to tell if a DOM element is visible in the current viewport?
			http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
		*/
		function elementInViewport(el) {
			var top = el.offsetTop;
			var left = el.offsetLeft;
			var width = el.offsetWidth;
			var height = el.offsetHeight;
	
			while(el.offsetParent) {
			    el = el.offsetParent;
			    top += el.offsetTop;
			    left += el.offsetLeft;
			}
	
			return (
			    top < (window.pageYOffset + window.innerHeight) &&
			    left < (window.pageXOffset + window.innerWidth) &&
			    (top + height) > window.pageYOffset &&
			    (left + width) > window.pageXOffset
			);
		}
	
		function checkMQ() {
			//check if mobile or desktop device
			return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
		}
		} );
		//End execute javascript for portfolio timeline vertical
		
		
		//Start execute javascript for background list
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-portfolio-timeline-vertical.default', function( $scope ) {
			jQuery(".portfolio_timeline_vertical_content_wrapper").each(function() {
				var slideshow = jQuery(this);
				var autoPlay = slideshow.attr('data-autoplay');
				var autoPlayArr = false;
				if (typeof autoPlay != "undefined"){
					autoPlayArr = {
						delay: autoPlay
					};
				}
				
				var speed = slideshow.attr('data-speed');
				if (typeof speed == "undefined"){
					speed = 1600;
				}
				
				var timelineSwiper = new Swiper ('.portfolio_timeline_vertical_content_wrapper .timeline .swiper-container', {
				  direction: 'vertical',
				  loop: false,
				  speed: parseInt(speed),
				  autoplay: autoPlayArr,
				  pagination: {
				    el: '.swiper-pagination',
				    type: 'bullets',
				    renderBullet: function (index, className) {
					    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
						return '<span class="' + className + '">' + year + '</span>';;
					},
					clickable: true
				  },
				  navigation: {
				    nextEl: '.swiper-button-next',
				    prevEl: '.swiper-button-prev',
				  },
				  breakpoints: {
				    768: {
				      direction: 'horizontal',
				    }
				  }
				});
			});
		} );
		//End execute javascript for portfolio timeline vertical
		
		//Start execute javascript for slider parallax
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-slider-parallax.default', function( $scope ) {
			
			var slideshow=jQuery('.slider_parallax_wrapper');
			var timer = slideshow.attr('data-autoplay');
			var autoplay = true;
			
			if(timer == 0)
			{
				timer = false;
				autoplay = false;
			}
			
			var pagination = slideshow.attr('data-pagination');
			if(pagination == 0)
			{
				var pagination = false;
			}
			else
			{
				var pagination = true;
			}
			
			var navigation = slideshow.attr('data-navigation');
			if(navigation == 0)
			{
				var navigation = false;
			}
			else
			{
				var navigation = true;
			}
			
			var slideshowDuration = timer;
			
			function slideshowSwitch(slideshow,index,auto){
			  if(slideshow.data('wait')) return;
			
			  var slides = slideshow.find('.slide');
			  var pages = slideshow.find('.pagination');
			  var activeSlide = slides.filter('.is-active');
			  var activeSlideImage = activeSlide.find('.image-container');
			  var newSlide = slides.eq(index);
			  var newSlideImage = newSlide.find('.image-container');
			  var newSlideContent = newSlide.find('.slide-content');
			  var newSlideElements=newSlide.find('.caption > *');
			  if(newSlide.is(activeSlide))return;
			
			  newSlide.addClass('is-new');
			  var timeout=slideshow.data('timeout');
			  clearTimeout(timeout);
			  slideshow.data('wait',true);
			  var transition=slideshow.attr('data-transition');
			  if(transition=='fade'){
			    newSlide.css({
			      display:'block',
			      zIndex:2
			    });
			    newSlideImage.css({
			      opacity:0
			    });
			
			    TweenMax.to(newSlideImage,1,{
			      alpha:1,
			      onComplete:function(){
			        newSlide.addClass('is-active').removeClass('is-new');
			        activeSlide.removeClass('is-active');
			        newSlide.css({display:'',zIndex:''});
			        newSlideImage.css({opacity:''});
			        slideshow.find('.pagination').trigger('check');
			        slideshow.data('wait',false);
			        if(auto){
			          timeout=setTimeout(function(){
			            slideshowNext(slideshow,false,true);
			          },slideshowDuration);
			          slideshow.data('timeout',timeout);}}});
			  } else {
			    if(newSlide.index()>activeSlide.index()){
			      var newSlideRight=0;
			      var newSlideLeft='auto';
			      var newSlideImageRight=-slideshow.width()/8;
			      var newSlideImageLeft='auto';
			      var newSlideImageToRight=0;
			      var newSlideImageToLeft='auto';
			      var newSlideContentLeft='auto';
			      var newSlideContentRight=0;
			      var activeSlideImageLeft=-slideshow.width()/4;
			    } else {
			      var newSlideRight='';
			      var newSlideLeft=0;
			      var newSlideImageRight='auto';
			      var newSlideImageLeft=-slideshow.width()/8;
			      var newSlideImageToRight='';
			      var newSlideImageToLeft=0;
			      var newSlideContentLeft=0;
			      var newSlideContentRight='auto';
			      var activeSlideImageLeft=slideshow.width()/4;
			    }
			
			    newSlide.css({
			      display:'block',
			      width:0,
			      right:newSlideRight,
			      left:newSlideLeft
			      ,zIndex:2
			    });
			
			    newSlideImage.css({
			      width:slideshow.width(),
			      right:newSlideImageRight,
			      left:newSlideImageLeft
			    });
			
			    newSlideContent.css({
			      width:slideshow.width(),
			      left:newSlideContentLeft,
			      right:newSlideContentRight
			    });
			
			    activeSlideImage.css({
			      left:0
			    });
			
			    TweenMax.set(newSlideElements,{y:20,force3D:true});
			    TweenMax.to(activeSlideImage,1,{
			      left:activeSlideImageLeft,
			      ease:Power3.easeInOut
			    });
			
			    TweenMax.to(newSlide,1,{
			      width:slideshow.width(),
			      ease:Power3.easeInOut
			    });
			
			    TweenMax.to(newSlideImage,1,{
			      right:newSlideImageToRight,
			      left:newSlideImageToLeft,
			      ease:Power3.easeInOut
			    });
			
			    TweenMax.staggerFromTo(newSlideElements,0.8,{alpha:0,y:60},{alpha:1,y:0,ease:Power3.easeOut,force3D:true,delay:0.6},0.1,function(){
			      newSlide.addClass('is-active').removeClass('is-new');
			      activeSlide.removeClass('is-active');
			      newSlide.css({
			        display:'',
			        width:'',
			        left:'',
			        zIndex:''
			      });
			
			      newSlideImage.css({
			        width:'',
			        right:'',
			        left:''
			      });
			
			      newSlideContent.css({
			        width:'',
			        left:''
			      });
			
			      newSlideElements.css({
			        opacity:'',
			        transform:''
			      });
			
			      activeSlideImage.css({
			        left:''
			      });
			
			      slideshow.find('.pagination').trigger('check');
			      slideshow.data('wait',false);
			      if(auto){
			        timeout=setTimeout(function(){
			          slideshowNext(slideshow,false,true);
			        },slideshowDuration);
			        slideshow.data('timeout',timeout);
			      }
			    });
			  }
			}
			
			function slideshowNext(slideshow,previous,auto){
			  var slides=slideshow.find('.slide');
			  var activeSlide=slides.filter('.is-active');
			  var newSlide=null;
			  if(previous){
			    newSlide=activeSlide.prev('.slide');
			    if(newSlide.length === 0) {
			      newSlide=slides.last();
			    }
			  } else {
			    newSlide=activeSlide.next('.slide');
			    if(newSlide.length==0)
			      newSlide=slides.filter('.slide').first();
			  }
			
			  slideshowSwitch(slideshow,newSlide.index(),auto);
			}
			
			function homeSlideshowParallax(){
			  var scrollTop=jQuery(window).scrollTop();
			  if(scrollTop>windowHeight) return;
			  var inner=slideshow.find('.slideshow-inner');
			  var newHeight=windowHeight-(scrollTop/2);
			  var newTop=scrollTop*0.8;
			
			  inner.css({
			    transform:'translateY('+newTop+'px)',height:newHeight
			  });
			}
			
			jQuery(document).ready(function() {
			 jQuery('.slider_parallax_wrapper .slide').addClass('is-loaded');
			
			 jQuery('.slider_parallax_wrapper .arrows .arrow').on('click',function(){
			  slideshowNext(jQuery(this).closest('.slider_parallax_wrapper'),jQuery(this).hasClass('prev'));
			});
			
			 jQuery('.slider_parallax_wrapper .pagination .item').on('click',function(){
			  slideshowSwitch(jQuery(this).closest('.slider_parallax_wrapper'),jQuery(this).index());
			});
			
			 jQuery('.slider_parallax_wrapper .pagination').on('check',function(){
			  var slideshow=jQuery(this).closest('.slider_parallax_wrapper');
			  var pages=jQuery(this).find('.item');
			  var index=slideshow.find('.slider_parallax_slides .is-active').index();
			  pages.removeClass('is-active');
			  pages.eq(index).addClass('is-active');
			});
			
			if(autoplay)
			{
				var timeout=setTimeout(function(){
				  slideshowNext(slideshow,false,true);
				},slideshowDuration);
				
				slideshow.data('timeout',timeout);
			}
			});
		} );
		//End execute javascript for slider parallax
		
		
		//Start execute javascript for distortion grid
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-distortion-grid.default', function( $scope ) {
			Array.from(document.querySelectorAll('.distortion_grid_item-img')).forEach((el) => {
				const imgs = Array.from(el.querySelectorAll('img'));
				new hoverEffect({
					parent: el,
					intensity: el.dataset.intensity || undefined,
					speedIn: el.dataset.speedin || undefined,
					speedOut: el.dataset.speedout || undefined,
					easing: el.dataset.easing || undefined,
					hover: el.dataset.hover || undefined,
					image1: imgs[0].getAttribute('src'),
					image2: imgs[1].getAttribute('src'),
					displacementImage: el.dataset.displacement
				});
			});
		} );
		//End execute javascript for distortion grid
		
		
		//Start execute javascript for slider animated
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-slider-animated.default', function( $scope ) {
			var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

			function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
			
			var $window = jQuery(window);
			var $body = jQuery('body');
			
			var Slideshow = function () {
			    function Slideshow() {
			        var _this = this;
			
			        var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			
			        _classCallCheck(this, Slideshow);
			
			        var defaultOptions = {
			            $el: jQuery('.tg_animated_slider_wrapper'),
			            showArrows: false,
			            showPagination: true,
			            duration: 10000,
			            autoplay: true
			        };
			
			        var options = Object.assign({}, defaultOptions, userOptions);
			
			        this.$el = options.$el;
			        this.maxSlide = this.$el.find(jQuery('.js-slider-home-slide')).length;
			        this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
			        this.showPagination = options.showPagination;
			        this.currentSlide = 1;
			        this.isAnimating = false;
			        this.animationDuration = 1200;
			        this.autoplaySpeed = options.duration;
			        this.interval;
			        this.$controls = this.$el.find('.js-slider-home-button');
			        this.autoplay = this.maxSlide > 1 ? options.autoplay : false;
			        this.autoplay = false;
			
			        this.$el.on('click', '.js-slider-home-next', function (event) {
			            return _this.nextSlide();
			        });
			        this.$el.on('click', '.js-slider-home-prev', function (event) {
			            return _this.prevSlide();
			        });
			        this.$el.on('click', '.js-pagination-item', function (event) {
			            if (!_this.isAnimating) {
			                _this.preventClick();
			                _this.goToSlide(event.target.dataset.slide);
			            }
			        });
			
			        this.init();
			    }
			
			    _createClass(Slideshow, [{
			        key: 'init',
			        value: function init() {
			            this.goToSlide(1);
			
			            if (this.autoplay) {
			                this.startAutoplay();
			            }
			
			            if (this.showPagination) {
			                var paginationNumber = this.maxSlide;
			                var pagination = '<div class="pagination"><div class="container">';
			
			                for (var i = 0; i < this.maxSlide; i++) {
			                    var item = '<span class="pagination__item js-pagination-item ' + (i === 0 ? 'is-current' : '') + '" data-slide=' + (i + 1) + '>' + (i + 1) + '</span>';
			                    pagination = pagination + item;
			                }
			
			                pagination = pagination + '</div></div>';
			
			                this.$el.append(pagination);
			            }
			        }
			    }, {
			        key: 'preventClick',
			        value: function preventClick() {
			            var _this2 = this;
			
			            this.isAnimating = true;
			            this.$controls.prop('disabled', true);
			            clearInterval(this.interval);
			
			            setTimeout(function () {
			                _this2.isAnimating = false;
			                _this2.$controls.prop('disabled', false);
			                if (_this2.autoplay) {
			                    _this2.startAutoplay();
			                }
			            }, this.animationDuration);
			        }
			    }, {
			        key: 'goToSlide',
			        value: function goToSlide(index) {
			            this.currentSlide = parseInt(index);
			
			            if (this.currentSlide > this.maxSlide) {
			                this.currentSlide = 1;
			            }
			
			            if (this.currentSlide === 0) {
			                this.currentSlide = this.maxSlide;
			            }
			
			            var newCurrent = this.$el.find('.js-slider-home-slide[data-slide="' + this.currentSlide + '"]');
			            var newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
			            var newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');
			
			            this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
			            this.$el.find('.js-pagination-item').removeClass('is-current');
			
			            if (this.maxSlide > 1) {
			                newPrev.addClass('is-prev');
			                newNext.addClass('is-next');
			            }
			
			            newCurrent.addClass('is-current');
			            this.$el.find('.js-pagination-item[data-slide="' + this.currentSlide + '"]').addClass('is-current');
			        }
			    }, {
			        key: 'nextSlide',
			        value: function nextSlide() {
			            this.preventClick();
			            this.goToSlide(this.currentSlide + 1);
			        }
			    }, {
			        key: 'prevSlide',
			        value: function prevSlide() {
			            this.preventClick();
			            this.goToSlide(this.currentSlide - 1);
			        }
			    }, {
			        key: 'startAutoplay',
			        value: function startAutoplay() {
			            var _this3 = this;
			
			            this.interval = setInterval(function () {
			                if (!_this3.isAnimating) {
			                    _this3.nextSlide();
			                }
			            }, this.autoplaySpeed);
			        }
			    }, {
			        key: 'destroy',
			        value: function destroy() {
			            this.$el.off();
			        }
			    }]);
			
			    return Slideshow;
			}();
			
			(function () {
			    var loaded = false;
			    var maxLoad = 3000;
			
			    function load() {
			        var options = {
			            showPagination: true
			        };
			
			        var slideShow = new Slideshow(options);
			    }
			
			    function addLoadClass() {
			        $body.addClass('is-loaded');
			
			        setTimeout(function () {
			            $body.addClass('is-animated');
			        }, 600);
			    }
			
			    $window.on('load', function () {
			        if (!loaded) {
			            loaded = true;
			            load();
			        }
			    });
			
			    setTimeout(function () {
			        if (!loaded) {
			            loaded = true;
			            load();
			        }
			    }, maxLoad);
			
			    addLoadClass();
			})();
		} );
		//End execute javascript for slider animated
	
	
		//Start execute javascript for fade up slider
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-slider-fadeup.default', function( $scope ) {
			function init(item) {
				var items = item.querySelectorAll('li'),
		        current = 0,
		        autoUpdate = true;
		        
				//create nav
				var nav = document.createElement('nav');
				nav.className = 'nav_arrows';
		
				//create button prev
				var prevbtn = document.createElement('button');
				prevbtn.className = 'prev';
				prevbtn.setAttribute('aria-label', 'Prev');
		
				//create button next
				var nextbtn = document.createElement('button');
				nextbtn.className = 'next';
				nextbtn.setAttribute('aria-label', 'Next');
		
				//create counter
				var counter = document.createElement('div');
				counter.className = 'counter';
				counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";
		
				if (items.length > 1) {
					nav.appendChild(prevbtn);
					nav.appendChild(counter);
					nav.appendChild(nextbtn);
					item.appendChild(nav);
				}
		
				items[current].className = "current";
				if (items.length > 1) items[items.length-1].className = "prev_slide";
		
				var navigate = function(dir) {
					items[current].className = "";
		
					if (dir === 'right') {
						current = current < items.length-1 ? current + 1 : 0;
					} else {
						current = current > 0 ? current - 1 : items.length-1;
					}
		
					var	nextCurrent = current < items.length-1 ? current + 1 : 0,
						prevCurrent = current > 0 ? current - 1 : items.length-1;
		
					items[current].className = "current";
					items[prevCurrent].className = "prev_slide";
					items[nextCurrent].className = "";
		
					//update counter
					counter.firstChild.textContent = current + 1;
				}
		    
		    item.addEventListener('mouseenter', function() {
					autoUpdate = false;
				});
		
				item.addEventListener('mouseleave', function() {
					autoUpdate = true;
				});
		    
				prevbtn.addEventListener('click', function() {
					navigate('left');
				});
		
				nextbtn.addEventListener('click', function() {
					navigate('right');
				});
		
				//keyboard navigation
				document.addEventListener('keydown', function(ev) {
					var keyCode = ev.keyCode || ev.which;
					switch (keyCode) {
						case 37:
							navigate('left');
							break;
						case 39:
							navigate('right');
							break;
					}
				});
		
				// swipe navigation
				// from http://stackoverflow.com/a/23230280
				item.addEventListener('touchstart', handleTouchStart, false);        
				item.addEventListener('touchmove', handleTouchMove, false);
				var xDown = null;
				var yDown = null;
				function handleTouchStart(evt) {
					xDown = evt.touches[0].clientX;
					yDown = evt.touches[0].clientY;
				};
				function handleTouchMove(evt) {
					if ( ! xDown || ! yDown ) {
						return;
					}
		
					var xUp = evt.touches[0].clientX;
					var yUp = evt.touches[0].clientY;
		
					var xDiff = xDown - xUp;
					var yDiff = yDown - yUp;
		
					if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
						if ( xDiff > 0 ) {
							/* left swipe */
							navigate('right');
						} else {
							navigate('left');
						}
					} 
					/* reset values */
					xDown = null;
					yDown = null;
				};
		
		
			}
		
			[].slice.call(document.querySelectorAll('.tg_fadeup_slider_wrapper')).forEach( function(item) {
				init(item);
			});
		} );
		//End execute javascript for fade up slider
		
		
		//Start execute javascript for motion reveal slider
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-slider-motion-reveal.default', function( $scope ) {
			// The Slide class.
		    class Slide {
		        constructor(el) {
					this.DOM = {el: el};
					// The image conteiner.
					this.DOM.imgWrap = this.DOM.el.querySelector('.slide__img-wrap');
					// The revealer element (the element with the same color of the body that covers the image).
					this.DOM.revealer = this.DOM.imgWrap.querySelector('.slide__img-reveal');
					// The title element.
					this.DOM.title = this.DOM.el.querySelector('.slide__title');
					// The slide´s number element
					this.DOM.number = this.DOM.el.querySelector('.slide__number');
					// The large preview elements (also an image and revealer for the cover/uncover effect)
					this.DOM.preview = {
						imgWrap: this.DOM.el.querySelector('.preview__img-wrap'),
						revealer: this.DOM.el.querySelector('.preview__img-wrap > .preview__img-reveal'),
						title: this.DOM.el.querySelector('.preview__title'),
						content: this.DOM.el.querySelector('.preview__content')
					};
		
					// Some config values.
		            this.config = {
		                animation: {
		                    duration: 0.6,
		                    ease: Expo.easeOut
						}
		            };
				}
				// Sets the current class.
				setCurrent(isCurrent = true) {
					this.DOM.el.classList[isCurrent ? 'add' : 'remove']('slide--current');
				}
		        // Hide the slide.
		        hide(direction) {
					return this.toggle('hide', direction);
		        }
		        // Show the slide.
		        show(direction) {
		            return this.toggle('show', direction);
		        }
		        // Show/Hide the slide.
		        toggle(action, direction) {
					// Hide/Show revealer on top of the image and move the image, title and number.
		            return new Promise((resolve, reject) => {
						let revealerOpts = {
							delay: action === 'hide' ? 0 : this.config.animation.duration/2,
							ease: this.config.animation.ease,
							onComplete: resolve
						};
		
						const commonOpts = {
							delay: action === 'hide' ? 0 : this.config.animation.duration/2,
							ease: this.config.animation.ease,
							opacity: action === 'hide' ? 0 : 1
						};
						let imgOpts = Object.assign({},commonOpts);
						let numberOpts = Object.assign({},commonOpts);
						let titleOpts = Object.assign({},commonOpts);
		
						if ( direction === 'left' || direction === 'right' ) {
							revealerOpts.startAt = action === 'hide' ? {x: direction === 'left' ? '-100%' : '100%', y:'0%'} : {x: '0%', y:'0%'};
							revealerOpts.x = action === 'hide' ? '0%' : direction === 'left' ? '100%' : '-100%';
							imgOpts.startAt = action === 'show' ? {opacity: 0, x: direction === 'left' ? '-20%' : '20%'} : {};
							imgOpts.x = action === 'hide' ? direction === 'left' ? '20%' : '-20%' : '0%';
							titleOpts.startAt = action === 'show' ? {opacity: 1, scale: 0.2, x: direction === 'left' ? '-200%' : '200%'} : {};
							titleOpts.x = action === 'hide' ? direction === 'left' ? '200%' : '-200%' : '0%';
							titleOpts.scale = action === 'hide' ? 0.2 : 1;
							numberOpts.startAt = action === 'show' ? {opacity: 1, x: direction === 'left' ? '-50%' : '50%'} : {};
							numberOpts.x = action === 'hide' ? direction === 'left' ? '50%' : '-50%' : '0%';
						}
						else {
							revealerOpts.startAt = action === 'hide' ? {x:'0%', y: direction === 'down' ? '-100%' : '100%'} : {x:'0%', y: '0%'};
							revealerOpts.y = action === 'hide' ? '0%' : direction === 'down' ? '100%' : '-100%';
							imgOpts.startAt = action === 'show' ? {opacity: 1, y: direction === 'down' ? '-10%' : '10%'} : {};
							imgOpts.y = action === 'hide' ? direction === 'down' ? '10%' : '-10%' : '0%';
							titleOpts.ease = this.config.animation.ease,
							titleOpts.startAt = action === 'show' ? {opacity: 1, y: direction === 'down' ? '-100%' : '100%'} : {};
							titleOpts.y = action === 'hide' ? direction === 'down' ? '100%' : '-100%' : '0%';
						}
		
						// Toggling the revealer.
						TweenMax.to(this.DOM.revealer, this.config.animation.duration, revealerOpts);
						// Moving & fading the image (wrappper).
						TweenMax.to(this.DOM.imgWrap, this.config.animation.duration, imgOpts);
						// Moving & fading the title and number.
						TweenMax.to(this.DOM.title, this.config.animation.duration*1.5, titleOpts);
						TweenMax.to(this.DOM.number, this.config.animation.duration, numberOpts);
		            });
				}
				// Hide the preview element.
				hidePreview(delay) {
					return this.togglePreview('hide');
				}
				// Show the preview element.
				showPreview(delay) {
					return this.togglePreview('show');
				}
				// Show/Hide the preview.
				togglePreview(action) {
					return new Promise((resolve, reject) => {
						// Hide/Show revealer.
						TweenMax.to(this.DOM.preview.revealer, this.config.animation.duration, {
							delay: action === 'hide' ? 0 : this.config.animation.duration/2,
							ease: this.config.animation.ease,
							startAt: action === 'hide' ? {x:'0%', y:'-100%'} : {x:'0%', y:'0%'},
							y: action === 'hide' ? '0%' : '-100%',
							onComplete: resolve
						});
						// Move and fade the image wrapper.
						TweenMax.to(this.DOM.preview.imgWrap, this.config.animation.duration, {
							delay: action === 'hide' ? 0 : this.config.animation.duration/2,
							ease: this.config.animation.ease,
							startAt: action === 'hide' ? {} : {opacity: 0, y: '20%'},
							y: action === 'hide' ? '20%' : '0%',
							opacity: action === 'hide' ? 0 : 1
						});
						// Move and fade the title and content.
						TweenMax.to([this.DOM.preview.title,this.DOM.preview.content], this.config.animation.duration, {
							delay: action === 'hide' ? 0 : this.config.animation.duration/2,
							ease: this.config.animation.ease,
							startAt: action === 'hide' ? {} : {opacity: 0, y: '200%'},
							y: action === 'hide' ? '200%' : '0%',
							opacity: action === 'hide' ? 0 : 1
						});
					});
				}
		    }
		
		    // The Slideshow class.
		    class Slideshow {
		        constructor(el) {
					this.DOM = {el: el};
					// Navigation controls (prev, next and preview ctrls)
					this.DOM.prevCtrl = this.DOM.el.querySelector('.slidenav__item--prev');
					this.DOM.nextCtrl = this.DOM.el.querySelector('.slidenav__item--next');
					this.DOM.previewCtrl = this.DOM.el.querySelector('.slidenav__preview');
					// The slides.
		            this.slides = [];
		            Array.from(this.DOM.el.querySelectorAll('.slide')).forEach(slideEl => this.slides.push(new Slide(slideEl)));
		            // The total number of slides.
		            this.slidesTotal = this.slides.length;
		            // Current slide position.
		            this.current = 0;
					// initialize the slideshow.
					this.init();
				}
				// init: set the current slide and initialize some events..
		        init() {
					this.slides[this.current].setCurrent();
					this.initEvents();
				}
				initEvents() {
					this.DOM.prevCtrl.addEventListener('click', () => this.prev());
					this.DOM.nextCtrl.addEventListener('click', () => this.next());
					this.DOM.previewCtrl.addEventListener('click', (ev) => {
						if ( this.isAnimating ) return;
						if ( ev.target.classList.contains('slidenav__preview--open') ) {
							ev.target.classList.remove('slidenav__preview--open');
							this.exitPreview();
						}
						else {
							ev.target.classList.add('slidenav__preview--open')
							this.enterPreview();
						}
					});
				}
				prev() {
					this.navigate('left');
				}
				next() {
					this.navigate('right');
				}
				enterPreview() {
					this.togglePreview('enter');
				}
				exitPreview() {
					this.togglePreview('exit');
				}
				togglePreview(action) {
					// If animating return.
		            if ( this.isAnimating ) return;
					this.isAnimating = true;
					
					const processing = action === 'enter' ? 
							[this.slides[this.current].hide('up'), this.slides[this.current].showPreview()] :
							[this.slides[this.current].show('down'), this.slides[this.current].hidePreview()];
		
					// Hide the next/prev controls.
					this.toggleNavCtrls(action);
		
					Promise.all(processing).then(() => this.isAnimating = false);
				}
				toggleNavCtrls(action) {
					TweenMax.to([this.DOM.prevCtrl, this.DOM.nextCtrl], 0.5, {
						ease: 'Expo.easeOut',
						opacity: action === 'enter' ? 0 : 1,
						onStart: () => this.DOM.prevCtrl.style.pointerEvents = this.DOM.nextCtrl.style.pointerEvents = action === 'enter' ? 'none' : 'auto'
					});
				}
				// Navigate the slideshow.
		        navigate(direction) {
		            // If animating return.
		            if ( this.isAnimating ) return;
		            this.isAnimating = true;
		
		            const nextSlidePos = direction === 'right' ? 
		                    this.current < this.slidesTotal-1 ? this.current+1 : 0 :
		                    this.current > 0 ? this.current-1 : this.slidesTotal-1;
					
					Promise.all([this.slides[this.current].hide(direction), this.slides[nextSlidePos].show(direction)])
						   .then(() => {
								// Update current.
								this.slides[this.current].setCurrent(false);
								this.current = nextSlidePos;
								this.isAnimating = false;
								this.slides[this.current].setCurrent();
						   });
				}
		    }
		
			const slideshow = new Slideshow(document.querySelector('.tg_motion_reveal_slider_wrapper.slideshow'));
		} );
		//End execute javascript for motion reveal slider
		
		
		//Start execute javascript for testimonials card
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-testimonial-card.default', function( $scope ) {
			var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};(function ($) {
  $.extend({
		    Mod2Slider: function Mod2Slider(options) {
		
		      // make sure either an object with all of our options is passed in or nothing at all
		      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
		        throw new Error('Invalid parameter. You must pass in an object!');
		      } else {
		
		        /**
		               * Setup all of our options
		               *
		               * 1. NameSpace is going to to be the id of the main section containing the slider. If nothing is passed in then the body tag will be used as the namespace, meaning if you have more than one slider on the page then only the first will be found.
		               * 2. beginningSlide is going to be which slide you want the slider to start out on, first, middle, or last.
		               * 3. slideDirection sets the slider to be either horizontal or vertical
		               * 4. overflow sets the css overflow property of the slider ul. If overflow is hidden then only the active slide will be visible, else if overflow is set to visible then all the slides will be visible in a row.
		               * 5. bulletNav takes in a boolean that if true appends a bullet list nav to the slider.
		               * 6. navigateBySlide takes in a boolen that if true allows users to navigate to a slide by clicking on it.
		               *
		               */
		
		        var nameSpace = options.sectionId || 'body .tg_testimonials_card_wrapper';
		        var beginningSlide = options.beginningSlide || 'second';
		        var sliderDirection = options.sliderDirection || 'horizontal';
		        var overflow = options.overflow || 'hidden';
		        var bulletNav = options.bulletNav;
		        var navigateBySlide = options.navigateBySlide || false;
		        var positionUnit = options.positionUnit || 'px';
		
		        // cache frequently called dom elements
		        var slides = jQuery(nameSpace + ' .slider li');
		        var sliderUl = jQuery(nameSpace + ' .slider > ul');
		        var sliderContainer = jQuery(nameSpace + ' .slider');
		        var sliderNav = void 0;
		        var sliderNavBtns = void 0;
		        var direction = void 0;
		
		        // initialize slider
		        var initSlider = function initSlider() {
		          // set which slide to start on
		          var x = void 0;
		
		          switch (beginningSlide) {
		            case 'first':
		              x = 0;
		              break;
					case 'second':
		              x = 1;
		              break;
		            case 'middle':
		              x = Math.floor(slides.length / 2);
		              break;
		            case 'last':
		              x = slides.length - 1;
		              break;}
		
		
		          // give slides a data attribute containing their index number
		          jQuery(slides).each(function (i) {
		            jQuery(this).attr('data', i);
		          });
		
		          // style slider and position slides
		          styleSlider();
		          positionSlides(x);
				  
		          // initialize slider nav if bulletNav true
		          if (bulletNav) {
		            sliderNavInit(x);
		          }
		
		          // initialize the click listener function for slides if navigateBySlide is true
		          if (navigateBySlide) {
		            jQuery(slides).hover().css({
		              cursor: 'pointer' });
		
		            slideListener();
		          }
		
		        };
		
		        // setup necessary styles for the slider, this is called when first initializing
		        var styleSlider = function styleSlider() {
		          /**
		                                                   * Set the height of the slider to the height of the tallest slide.
		                                                   * This is done to avoid the slider pushing or pulling the elements below it during a slide transition.
		                                                   */
		          var slideHeights = [];
		          jQuery(slides).each(function () {
		            slideHeights.push(jQuery(this).outerHeight());
		          });
		
		          jQuery(sliderUl).css('min-height', Math.max.apply(Math, slideHeights));
		
		          // set the overflow of the slider
		          sliderUl.css('overflow', overflow);
		
		          // set the direction of the slider
		          if (sliderDirection === 'vertical') {
		            direction = 'top';
		          } else if (sliderDirection === 'horizontal') {
		            direction = 'left';
		          }
		        };
		
		        // position slides, takes in an integer which indicates the slide index to make active
		        var positionSlides = function positionSlides(index) {
		
		          // check to make sure the index parameter is valid
		          if (index < 0 || index > slides.length) {
		            throw new Error('Invalid index parameter.');
		            return;
		          } else {
		            var activeSlide = jQuery(slides[index]);
		            var fullSlideWidth = jQuery(slides[index]).outerWidth(true);
		            var unitCalc = void 0;
		
		            if (positionUnit === 'px') {
		              unitCalc = fullSlideWidth;
		            } else if (positionUnit === '%') {
		              unitCalc = 100;
		            }
		
		            // set the slider ul to the active slide width
		            jQuery(sliderUl).css('width', fullSlideWidth);
		
		            // set the position of the active slide and all previous + next slides
		            activeSlide.css(direction, '0');
		
		            activeSlide.prevAll().each(function (i) {
		              jQuery(this).css(direction, '-' + unitCalc * (i + 1) + positionUnit);
		            });
		
		            activeSlide.nextAll().each(function (i) {
		              jQuery(this).css(direction, unitCalc * (i + 1) + positionUnit);
		            });
		          }
		        };
		
		        // initialize the slider nav, takes in an integer which indicates the current active slide
		        var sliderNavInit = function sliderNavInit(x) {
		          // append nav to slider and save the reference to sliderNav variable
		          sliderContainer.append('<nav class="slider-nav"><ul></ul></nav>');
		          sliderNav = jQuery(nameSpace + ' .slider-nav');
		
		          // append an li for each slide to the slider nav ul
		          for (var i = 0; i < slides.length; i++) {
		            if (i < x || i > x) {
		              jQuery(sliderNav).find('ul').append('<li class="bullet" data="' + i + '"></li>');
		            } else if (i === x) {
		              jQuery(sliderNav).find('ul').append('<li class="active-bullet bullet" data="' + i + '"></li>');
		            }
		          }
		
		          // save reference to nav btns in a varible
		          sliderNavBtns = jQuery(nameSpace + ' li[class*="bullet"]');
		
		          // call the click handeler function
		          navListener();
		        };
		
		        // navigate to slide when clicking on nav bullets
		        var navListener = function navListener() {
		          sliderNav.click(function (e) {
		
		            // we only care about clicks on the li's
		            if (e.target.tagName === 'LI') {
		
		              // get the value of the data attribute from the clicked li and conver to an integer
		              var index = parseInt(jQuery(e.target).attr('data'));
		
		              // style active button
		              sliderNavBtns.each(function () {
		                jQuery(this).removeClass('active-bullet');
		              });
		
		              jQuery(e.target).addClass('active-bullet');
		
		              // position the slides
		              positionSlides(index);
		            }
		          });
		        };
		
		        // called if navigateBySlide is true
		        var slideListener = function slideListener() {
		          sliderContainer.click(function (e) {
		
		            // filter out clicks that are on the container
		            var slideClicked = e.target.tagName !== 'DIV' ? true : false;
		
		            if (slideClicked) {
		              // get the data attribute value of the clicked li and convert to an integer
		              var index = parseInt(jQuery(e.target).closest('li').attr('data'));
		
		              // if a bullet nav exists, update the button styles
		              if (sliderNav) {
		                sliderNavBtns.each(function () {
		                  jQuery(this).removeClass('active-bullet');
		                });
		
		                jQuery(sliderNavBtns[index]).addClass('active-bullet');
		              }
		
		              // position the slides
		              positionSlides(index);
		            }
		          });
		        };
		
		        initSlider();
		      }
		
		    } });
		
		})(jQuery);
		
		jQuery(".tg_testimonials_card_wrapper").each(function() {
			var slideshow = jQuery(this).parent('.elementor-widget-container').parent('.elementor-widget-architecturer-testimonial-card');
			var slideshowNameSpace = '#'+slideshow.attr('data-id')+' .tg_testimonials_card_wrapper';
			var slideshowBeginningSlide = jQuery(this).attr('data-beginning-slide');
			var slideshowPagination = jQuery(this).attr('data-pagination');

			new $.Mod2Slider({
			  nameSpace: slideshowNameSpace,
			  beginningSlide: slideshowBeginningSlide,
			  bulletNav: Boolean(Number(slideshowPagination)),
			  overflow: 'visible',
			  navigateBySlide: true,
			  positionUnit: 'px' });
			} );
		});
		//End execute javascript for testimonials card
		
		
		//Start execute javascript for slider image carousel
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-slider-image-carousel.default', function( $scope ) {
			jQuery(".tg_image_carousel_slider_wrapper").each(function() {
				  jQuery(this).find('.carousel-item').eq(0).addClass('active');
				  var total = jQuery(this).find('.carousel-item').length;
				  var current = 0;
				  var slideObj = jQuery(this);

				  jQuery(this).find('#moveRight').on('click', function(){
				    var next=current;
				    current= current+1;
				    setSlide(next, current, slideObj);
				  });
				  jQuery(this).find('#moveLeft').on('click', function(){ 
				    var prev=current;
				    current = current- 1;
				    setSlide(prev, current, slideObj);
				  });
				  function setSlide(prev, next, slideObj){
				    var slide= current;
				    if(next>total-1){
				     slide=0;
				      current=0;
				    }
				    if(next<0){
				      slide=total - 1;
				      current=total - 1;
				    }

				           slideObj.find('.carousel-item').eq(prev).removeClass('active');
				           slideObj.find('.carousel-item').eq(slide).addClass('active');
						   setTimeout(function(){
				
				      },800);
				  }
			});
		} );
		//End execute javascript for slider image carousel
		
		
		//Start execute javascript for portfolio grid
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-portfolio-grid.default', function( $scope ) {
			jQuery(".portfolio_grid_container").each(function() {
				var containderDiv = jQuery(this);
				var selectedClass = "";
				
				containderDiv.find(".filter_tag_btn").on('click', function(){
					containderDiv.find(".filter_tag_btn").removeClass("active");
					jQuery(this).addClass("active");
					selectedClass = jQuery(this).attr("data-rel"); 
					column = jQuery(this).attr("data-cols");
					
					var gridDiv = containderDiv.find(".portfolio_grid_content_wrapper");
					gridDiv.fadeTo(100, 0);
					gridDiv.find(".portfolio_grid_wrapper").not("."+selectedClass).fadeOut().removeClass('scale-anm');
					
				    setTimeout(function() {
				      jQuery("."+selectedClass).fadeIn().addClass('scale-anm');
				      gridDiv.find(".portfolio_grid_wrapper.last").removeClass('last');
				      var count = gridDiv.find(".portfolio_grid_wrapper.scale-anm").length;
				      
				      gridDiv.find(".portfolio_grid_wrapper.scale-anm").each(function(index){
					      var lastIndex = parseInt(index+1);
						  if(lastIndex%column == 0)
						  {
							  jQuery(this).addClass('last');
						  }
						  
						  if(lastIndex == count)
						  {
							  setTimeout(function() {
							  	gridDiv.fadeTo(300, 1);
							  }, 300);
						  }
					  });

				    }, 300);
			    });
			});
		} );
		//End execute javascript for portfolio grid
		
		
		//Start execute javascript for portfolio classic
		elementorFrontend.hooks.addAction( 'frontend/element_ready/architecturer-portfolio-classic.default', function( $scope ) {
			jQuery(".portfolio_classic_container").each(function() {
				var containderDiv = jQuery(this);
				var selectedClass = "";
				
				containderDiv.find(".filter_tag_btn").on('click', function(){
					containderDiv.find(".filter_tag_btn").removeClass("active");
					jQuery(this).addClass("active");
					selectedClass = jQuery(this).attr("data-rel"); 
					column = jQuery(this).attr("data-cols");
					
					var gridDiv = containderDiv.find(".portfolio_classic_content_wrapper");
					gridDiv.fadeTo(100, 0);
					gridDiv.find(".portfolio_classic_grid_wrapper").not("."+selectedClass).fadeOut().removeClass('scale-anm');
					
				    setTimeout(function() {
				      jQuery("."+selectedClass).fadeIn().addClass('scale-anm');
				      gridDiv.find(".portfolio_classic_grid_wrapper.last").removeClass('last');
				      var count = gridDiv.find(".portfolio_classic_grid_wrapper.scale-anm").length;
				      
				      gridDiv.find(".portfolio_classic_grid_wrapper.scale-anm").each(function(index){
					      var lastIndex = parseInt(index+1);
						  if(lastIndex%column == 0)
						  {
							  jQuery(this).addClass('last');
						  }
						  
						  if(lastIndex == count)
						  {
							  setTimeout(function() {
							  	gridDiv.fadeTo(300, 1);
							  }, 300);
						  }
					  });

				    }, 300);
			    });
			});
		} );
		//End execute javascript for portfolio classic
		
	} );
	
} )( jQuery );
