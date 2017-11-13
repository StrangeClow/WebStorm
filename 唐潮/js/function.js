// JavaScript Document
$(function(){
		$('#dowebok').fullpage({
		scrollingSpeed:500,
		navigation: true,
		anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8','page9'],
		menu: '#menu',
		slidesNavigation: true,
		
		onLeave: function (index, nextIndex, direction) {
			if (nextIndex == 1) {
				$('.header').removeClass('active')
			} else {
				$('.header').addClass('active')
			}
			
		},

	});	
	
	
	
	//侧边栏上下翻页
	$('.slide_nav .down').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
	$('.slide_nav .up').click(function(){
		$.fn.fullpage.moveSectionUp();
	})
	
	
	//合作伙伴，鼠标触发效果
	$('.page8 .bg3 li').hover(function(){
		$('.page8 .bg').show()
		var X = $(this).position().top;
		var Y = $(this).position().left;
		$(this).find('div').css({
			'margin-top':'-150px'
		})
		var h = "-150px";
		if ($('.page8 .bg').css('display') == 'block'){
			$('.page8 .bg').stop();
			$('.page8 .bg').animate({
				"top":X,
				"left":Y
			}, { easing: "easeOutQuint" })
		}else{
			$('.page8 .bg').css({
				"top":X,
				"left":Y
			})
		}
	},function(){
		$('.page8 .bg').hide()
		$(this).find('div').css({
			'margin-top':'0'
		})
	})
	
	//小尺寸下，导航显示/隐藏
	$('.nav_btn').click(function(){
		$('#menu').fadeToggle(100)
	})

});