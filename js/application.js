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
		

		
		$('#console')
			.css('display','block')
			.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
		
		$('#nav span').removeClass('selected');
		
		//selected state on nav by scrollevent
		$('#nav li').each(function( index ){			
			var index = index + 1;
			var index = 'scroll'+index;

			if( k == index){
				$(this).children().addClass('selected');
			}							
		});
		
		if( k == 'scroll9'){
			$('#realguy').fadeIn();
		}else{
			$('#realguy').fadeOut();
		}
					
	});
	
	//chapter 1
	scrollorama
		.animate('#propeller1',{duration: 600, property:'rotate', start:0, end: 360, pin: true})
		.animate('#frame1',{duration: 600, property:'left', end: -1400 });
	
	//chapter 8
	scrollorama
		.animate('#bg8',{ duration: 600, property:'top', end: 0 });
		
	//chapter 9
	scrollorama
		.animate('#bg9',{ duration: 600, property:'top', end: 0 });
	
	
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



