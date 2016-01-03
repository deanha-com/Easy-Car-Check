
// Toggles to hide motHistory iframe and show motStatus when clicked											
$(document).ready(function(){
$("#msBtn").click(function(){
	$("#motHistory").hide();
   $("#motStatus").show();
  });
});

// Toggles to hide motStatus iframe and show motHistory when clicked	
$(document).ready(function(){
$("#mhBtn").click(function(){
	$("#motStatus").hide();
  $("#motHistory").show();
  });
});

// Toggles to hide all iframes when other tabs are clicked	
$(document).ready(function(){
$("#hmBtn,#upBtn,#setBtn").click(function(){
  $("#motHistory").hide();
  $("#motStatus").hide();
  });
});