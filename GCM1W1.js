
 function hieAll()
		{
			for (i = 0; i < 50; i++) {
    				$(".GCVideo" + i).hide();
				$(".GCLM1" + i).hide();
				$("#GCTab1" + i).removeClass('CGButactive');
			}
		}	
		
	function changePage(pageNumber)
	{
		hieAll();
		$(".GCLM" + pageNumber).show();
		$("#GCTab" + pageNumber).addClass('CGButactive');
	}
		
	function changPageBut(pageNumber)
	{
	      hieAll();
	      $(".GCLM" + pageNumber).show();	
	      $("#GCTab" + pageNumber).addClass('CGButactive');
	}
	

	$(document).ready(hieAll);
	
	 $(document).ready(function()
   	{
		$(".GCLM1").show();
		$("#GCTab1").addClass('CGButactive');
	});
		
		
	/*	
		
    // Tabs
	  $("#GCTab1").click(function(){
        hieAll();
		$(".GCLM1").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 1;
	} else {
    // Sorry! No Web Storage support..
	}	
    });
	
	
	 $("#GCTab2").click(function(){
       hieAll();
		$(".GCLM2").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 2;
	} else {
    // Sorry! No Web Storage support..
	}	
    });
       
	   
	$("#GCTab3").click(function(){
       hieAll();
		$(".GCLM3").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 3;
	} else {
    // Sorry! No Web Storage support..
	}	
    });
	
	
	$("#GCTab4").click(function(){
       hieAll();
		$(".GCLM4").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 4;
	} else {
    // Sorry! No Web Storage support..
	}	
    });
	
	$("#GCTab5").click(function(){
       hieAll();
		$(".GCLM5").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 5;
	} else {
    // Sorry! No Web Storage support..
	}	
    });
	
	$("#GCTab6").click(function(){
       hieAll();
		$(".GCLM6").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 6;
	} else {
    // Sorry! No Web Storage support..
	}	
    });
	
	$("#GCTab7").click(function(){
		hieAll();
		$(".GCLM7").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 7;
	} else {
    // Sorry! No Web Storage support..
	}	
    });


	$("#GCTab8").click(function(){
		hieAll();
		$(".GCLM8").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 8;
	} else {
    // Sorry! No Web Storage support..
	}	
    });

	$("#GCTab9").click(function(){
		hieAll();
		$(".GCLM9").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 9;
	} else {
    // Sorry! No Web Storage support..
	}	
    });

	$("#GCTab10").click(function(){
		hieAll();
		$(".GCLM10").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 10;
	} else {
    // Sorry! No Web Storage support..
	}	
    });

	$("#GCTab11").click(function(){
		hieAll();
		$(".GCLM11").show();
		$(this).addClass('CGButactive');
		if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
		localStorage.currentTab = 11;
	} else {
    // Sorry! No Web Storage support..
	}	
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
	
*/
