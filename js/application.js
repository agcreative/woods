$(document).ready(function() {

	var gallery_stop = 0;
    var gallery_motion = 0;
    
    // SLIDE TRANSITIONS
    var pause_timer = 0; //seconds
    var bg_timer = 4; //seconds
    var bg_delay = 1; //seconds
    var current_slide = 1;
    var total_slides = $('#background .bg').length;
    
	$('#background .bg').hide();
	adjustBGSize();
	$('#background .bg:first').delay(pause_timer*1000).fadeIn(500);
	$('#navi a:first').addClass('current');

	//background
	function adjustBGSize(){
		//bgIMG
		//var bg = $('#background .bg');
		//var bgImage = $('#background > .bg > img');
		
		//windowRation
		//var winRatio = $(window).outerWidth()/$(window).height();
		//var imgRatio = (1200/800);
		
		//adjust Width + Height
		//if(winRatio > imgRatio){
			//$('#wrap').find('.scrollblock').css('height', $(window).height() + 'px');
			//bgImage.css('width', $(window).outerWidth() + 'px');
            //bgImage.css('height', $(window).outerWidth()/imgRatio + 'px');
            //bg.css('width', $(window).outerWidth() + 'px');
            //bg.css('height', $(window).outerWidth()/imgRatio + 'px');
            //bg.css('top', (($(window).height() - bgImage.height())/2) + 'px');
            //bg.css('left', '0px');
		//}else{
			//$('#wrap').find('.scrollblock').css('height', $(window).height() + 'px');
			//bgImage.css('height', $(window).height() + 'px');
            //bgImage.css('width', $(window).height()*imgRatio + 'px');
            //bg.css('height', $(window).height() + 'px');
            //bg.css('width', $(window).height()*imgRatio + 'px');
            //bg.css('left', (($(window).outerWidth() - bgImage.outerWidth())/2) + 'px');
            //bg.css('top', '0px');
		//}
	}
	
	// SLIDE PICKER
    $('#navi a').click(function() {
        if ( ($(this).hasClass('current')) || (gallery_motion == 1) ) {
            return false;
        } else {
            gallery_stop == 1;
            $('#navi a').removeClass('current');
            $(this).addClass('current');
            var dest = $(this).attr('data');
            
            var fade_next_bg = function() {
                $('#background .bg:first').hide();
                $('#background .bg'+dest).prependTo($('#background'));
            }
            
            $('#background .bg'+dest).fadeIn(500);
            setTimeout(fade_next_bg, 500);
            return false;
        }
        //console.info('click');
    });
	
	
	//refresh on resize
	$(window).bind('resize',function() {        
        window.location.href = window.location.href;
    });

	
	// initialize the plugin, pass in the class selector for the sections of content (blocks)
	var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
	
	
	// assign function to add behavior for onBlockChange event
	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		var k = scrollorama.settings.blocks.eq(i).attr('id');
		

		
		//$('#console')
			//.css('display','block')
			//.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
		
		$('#nav span').removeClass('selected');
		
		//selected state on nav by scrollevent
		$('#nav li').each(function( index ){			
			var index = index + 1;
			var index = 'scroll'+index;

			if( k == index){
				$(this).children().addClass('selected');
			}		
		});
		
		
		//jquery animation chapter 3
		//glowing lamp
		if(k == 'scroll3'){	
			lampLits();			
		}else{
			//do nothing
		}
		
		
		//jquery animation chapter 6
		if(k == 'scroll6'){
			smokeIt();
			smokeIt2();
			smokeIt3;
		}
		
		
		//jquery animation chapter 7
		if(k == 'scroll7'){
			wheelIt();
		}
		


		//jquery animation chapter 9
		if(k == 'scroll9'){
			$('#realguy').fadeIn(3000);		
		}else{
			$('#realguy').fadeOut();			
		}


					
	});
	
			//lamp
			function lampLits() {
			var lampnotlit = $("#lampnotlit");
				lampnotlit.animate({opacity: 0}, {duration: 1000})
				.animate({opacity: 1.0}, {duration: 2000, complete: lampLits})
				
				return false;
			}


		//wheel
		function wheelIt(){
		  var wheel = $("#wheel");
		  var random = Math.random()*720-360;	  
		  wheel.rotate({
			angle: $(this).getRotateAngle(), 
			animateTo: random,
			duration: 9000,
			callback: function(){ wheelIt(); }
		  });
		}
		

	  //jquery animation chapter 1
	  //compass animation
	  function runIt(){		  
	  	  var propeller = $('#propeller1');
		  var random = Math.random()*720-360;	  
		  propeller.rotate({
			angle: $(this).getRotateAngle(), 
			animateTo: random,
			duration: 6000,
			callback: function(){ runIt(); }
		  });
	  }
	  runIt();
	  
	  function smokeIt(){
		var smoke = $('#smoke');
			smoke.animate({
				right: 10,
				opacity: 1.0
			}, {duration: 4000})
			.animate({
				right: -10,
				opacity: 0
			}, { duration: 4000, complete: smokeIt })
	}
	
	function smokeIt2(){
		var smoke2 = $('#smoke2');
			smoke2.animate({
				right: -10,
				opacity: 1.0
			}, {duration: 4000})
			.animate({
				right: 10,
				opacity: 0
			}, { duration: 4000, complete: smokeIt2 })
	}
	
	function smokeIt3(){
		var smoke3 = $('#smoke3');
			smoke3.animate
			.animate({
				right: -10,
				opacity: 1.0
			}, {duration: 4000})
			.animate({
				right: 10,
				opacity: 0
			}, { duration: 4000, complete: smokeIt2 })
	}
	  
	
	//chapter 1
	var compass = $('#scroll1 .compass');	
	var propeller = $('#scroll1 .propeller');
	var c1frame1 = $('#scroll1 .frame1');
	
	compass.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'rotate', end: 360 })
			.animate($(this),{ delay: 200, duration: 400, property:'right', end: -1400 });
	});
	c1frame1.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'left', end: -1400 })
			.animate($(this),{ delay: 200, duration: 400, property:'rotate', end: Math.random()*720-360 });
	});
	propeller.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'right', end: -1400 });	
	});
	
	//chapter 3
	var lamplit = $('#scroll3 .lamplit');	
	var lampnotlit = $('#scroll3 .lampnotlit');
	var c3frame1 = $('#scroll3 .frame1');
	var video = $('#scroll3 .video');
	var bg3 = $('#bg3');
	
	lamplit.each(function(){
		scrollorama
			.animate($(this),{ delay: 500, duration: 100, property:'top', start: -900 });	
	});
	lampnotlit.each(function(){
		scrollorama
			.animate($(this),{ delay: 500, duration: 100, property:'top', start: -900 });	
	});
	
	c3frame1.each(function(){
		scrollorama
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
			.animate($(this),{ delay: 200, duration: 400, property:'top', start:-400 })
	});
	
	video.each(function(){
		scrollorama
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
			.animate($(this),{ delay: 400, duration: 200, property:'top', start:-400 })
	});
	
	bg3.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'top', end: 0 });
	});

	
	//chapter 6
	var gasmask = $('#scroll6 .gasmask');
	var c6frame2 = $('#scroll6 .frame2');
	var c6frame1 = $('#scroll6 .frame1');
	var bg6 = $('#bg6');
	
	gasmask.each(function(){
		scrollorama
			.animate($(this),{ duration: 600, property:'bottom', start: 1400 });
	});
	
	c6frame2.each(function(){
		scrollorama
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
			.animate($(this),{ delay: 200, duration: 400, property:'top', start:-400 });
		
	});
	
	c6frame1.each(function(){
		scrollorama
			.animate($(this),{ delay: 100, duration: 500, property:'top', start:-200 })
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 });
	});
	
	bg6.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'top', end: 0 });
	});
	
	
	//chapter 7
	var c7frame2 = $('#scroll7 .frame2');
	var c7frame1 = $('#scroll7 .frame1');
	var bg7 = $('#bg7');
	var wheel = $('#wheel');
	
	c7frame2.each(function(){
		scrollorama
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
			.animate($(this),{ delay: 200, duration: 400, property:'top', start:-400 })
	});
	
	c7frame1.each(function(){
		scrollorama
			.animate($(this),{ delay: 100, duration: 500, property:'top', start:-200 })
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
	});
	
	bg7.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'top', end: 0 });
	});
	
	wheel.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'right', start: -1400 });
	});


	//chapter 8
	var c8frame1 = $('#scroll8 .frame1');
	var bg8 = $('#bg8');
	
	c8frame1.each(function(){
		scrollorama
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
			.animate($(this),{ delay: 200, duration: 400, property:'left', start: -1400 })
	});
	
	bg8.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'top', end: 0 });
	});
	

	//chapter 9
	var c9frame2 = $('#scroll9 .frame2');
	var c9frame1 = $('#scroll9 .frame1');
	var bg9 = $('#bg9');
	
	c9frame2.each(function(){
		scrollorama
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
			.animate($(this),{ delay: 200, duration: 400, property:'top', start:-400 })
	});
	
	c9frame1.each(function(){
		scrollorama
			.animate($(this),{ delay: 100, duration: 500, property:'top', start:-200 })
			.animate($(this),{ duration: 600, property:'rotate', start: Math.random()*720-360 })
	});
	
	bg9.each(function(){
		scrollorama
			.animate($(this),{ delay: 200, duration: 400, property:'top', end: 0 });
	});

			
	//animate title to explode
	//scrollorama
		//.animate('#title',{ duration: 100, property:'zoom', end: 8 });
	
	//$('#title span').each(function(){
		//scrollorama
			//.animate($(this),{ duration: 400, property:'top', end: Math.random()*120-180 })
			//.animate($(this),{ duration: 300, property:'rotate', start:0, end: Math.random()*720-360, pin: true });
	//});
	
	//transitions	
	//scrollorama
		//.animate('#bg1',{ delay: 900, duration: 900, property:'opacity', start: 1, end: 0, pin: true });
	//scrollorama
		//.animate('#bg6',{ delay: 900, duration: 900, property:'opacity', start: 1, end: 0, pin: true });
		
		//.animate('#text',{ delay: 100, duration: 400, property:'opacity', start: 0, end: 1, pin: true });
		//.animate('#fly-in',{ delay: 200, duration: 600, property:'left', start: -1400, end: 0, pin: true })
		//.animate('#rotate',{ delay: 300, duration: 100, property:'rotate', start: 0, end: 720, pin: true })
		//.animate('#zoom-in',{ delay: 600, duration: 600, property:'zoom', start: 1, end: 8, pin: true })
		//.animate('#zoom-in',{ delay: 600, duration: 600, property:'opacity', start: 1, end: 0, pin: true })
		//.animate('#unpin',{ duration:500, property:'padding-top', start:400, pin:true });
		
	//paralax
	//scrollorama
		//.animate('#text2',{ delay: 900 , duration: 900, property:'opacity', start: 0, end: 1, pin: true })
		//.animate('#text2',{ delay: 900 , duration: 900, property:'opacity', start: 1, end: 0, pin: true });
		//.animate('#parallax2',{ delay: 400, duration: 600, property:'top', start:800, end:-800 })
		//.animate('#parallax3',{ delay: 200, duration: 1200, property:'top', start:500, end:-500 });
		
	//easing
	//easing_array = [
		//'easeOutBounce',
		//'easeOutQuad',
		//'easeOutQuart',
		//'easeOutQuint',
		//'easeOutExpor',
		//'easeOutBounce'
		//];
	//$('#easing span').each(function( idx, el ){
		//scrollorama
			//.animate($(this),{ delay: 100, duration: 600, property: 'top', end: 300, easing: easing_array[idx] });
	//});
	
	//navigation
	$('#nav span').click( function(){				
		$('html, body').stop().animate({
			scrollTop: $('#'+this.className).offset().top
		},2000);		
	});
	
	
	
	

});



