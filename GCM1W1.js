
 function hieAll()
		{
			$(".GCVideo1").hide();
			$(".GCVideo2").hide();
			$(".GCVideo3").hide();
			$(".GCVideo4").hide();
			$(".GCVideo5").hide();
			$(".GCVideo6").hide();
			$(".GCVideo7").hide();
			$(".GCVideo8").hide();
			$(".GCVideo9").hide();
			$(".GCVideo10").hide();
			$(".GCVideo11").hide();
			$(".GCVideo12").hide();
			$(".GCVideo13").hide();
			$(".GCVideo14").hide();
			$(".GCVideo15").hide();
			$(".GCVideo16").hide();
			$(".GCVideo17").hide();
			$(".GCVideo18").hide();
			$(".GCVideo19").hide();
			$(".GCVideo20").hide();
			$(".GCVideo21").hide();
			$(".GCVideo22").hide();
			$(".GCVideo23").hide();
			$(".GCVideo24").hide();
			$(".GCVideo25").hide();
			$(".GCVideo26").hide();
			$(".GCVideo27").hide();
			$(".GCVideo28").hide();
			$(".GCVideo29").hide();
			$(".GCVideo30").hide();
			
			
			$(".GCLM1").hide();
			$(".GCLM2").hide();
			$(".GCLM3").hide();
			$(".GCLM4").hide();
			$(".GCLM5").hide();
			$(".GCLM6").hide();
			$(".GCLM7").hide();
		
		}	

	$(document).ready(hieAll);
	
   $(document).ready(function(){
      
		
		$(".GCLM1").show();
		$(".GCVideo1").show();
		
    // Tabs
	  $("#GCTab1").click(function(){
        $(document).ready(hieAll);
		$(".GCLM1").show();
		$(".GCVideo1").show();
         
    });
	
	 $("#GCTab2").click(function(){
       hieAll();
		$(".GCLM2").show();
		$(".GCVideo6").show();
    });
       

	$("#GCTab3").click(function(){
       hieAll();
		$(".GCLM3").show();
		$(".GCVideo11").show();
    });
	   
	// Video Tabs
    $("#GCVideo1But").click(function(){
        hieAll();
		$(".GCLM1").show();
		$(".GCVideo1").show();
        $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
		$('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
		$('#Video4C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
    
	$("#GCVideo2But").click(function(){
       hieAll();
		$(".GCLM1").show();
		$(".GCVideo2").show();
		$('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
		$('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
		$('#Video4C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });

	$("#GCVideo3But").click(function(){
		hieAll();
		$(".GCLM1").show();
		$(".GCVideo3").show();  
	
		$('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
		$('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
		$('#Video4C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });

	$("#GCVideo4But").click(function(){
        hieAll();
		$(".GCLM1").show();
		$(".GCVideo4").show();  
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo5But").click(function(){
         hieAll();
		$(".GCLM1").show();
		$(".GCVideo5").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo6But").click(function(){
         hieAll();
		$(".GCLM2").show();
		$(".GCVideo6").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo7But").click(function(){
         hieAll();
		$(".GCLM2").show();
		$(".GCVideo7").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo8But").click(function(){
         hieAll();
		$(".GCLM2").show();
		$(".GCVideo8").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo9But").click(function(){
         hieAll();
		$(".GCLM2").show();
		$(".GCVideo9").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo10But").click(function(){
         hieAll();
		$(".GCLM2").show();
		$(".GCVideo10").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	
	$("#GCVideo11But").click(function(){
         hieAll();
		$(".GCLM3").show();
		$(".GCVideo11").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo12But").click(function(){
         hieAll();
		$(".GCLM3").show();
		$(".GCVideo12").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	
	$("#GCVideo13But").click(function(){
         hieAll();
		$(".GCLM3").show();
		$(".GCVideo13").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo14But").click(function(){
         hieAll();
		$(".GCLM3").show();
		$(".GCVideo14").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo15But").click(function(){
         hieAll();
		$(".GCLM3").show();
		$(".GCVideo15").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo16But").click(function(){
         hieAll();
		$(".GCLM4").show();
		$(".GCVideo16").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo17But").click(function(){
         hieAll();
		$(".GCLM4").show();
		$(".GCVideo17").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo18But").click(function(){
         hieAll();
		$(".GCLM4").show();
		$(".GCVideo18").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo19But").click(function(){
         hieAll();
		$(".GCLM4").show();
		$(".GCVideo19").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	
	$("#GCVideo20But").click(function(){
         hieAll();
		$(".GCLM4").show();
		$(".GCVideo20").show();
 $('#Video1C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video2C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
 $('#Video3C')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    });
	

});
