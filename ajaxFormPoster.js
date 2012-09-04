//Andres Gallo

/***HANDLE FORM REQUESTS*****/
$(document).on('submit','form',function(e){

	e.preventDefault();//Prevent submission without ajax
	
	var $form = $(this),
		formData = $form.serializeArray(),
		actionUrl = $form[0].getAttribute('action'),
		validationCheck = true;//Set to false in switch statement if needed
	
	var formName = this.name,
		successCallback = null;//Which callback function
		
	switch(formName){//This is the form name. The switch is in case each should have a different callback
		//Each case is a different callback for different forms.  The default case should handle all generic ajax forms
		
		case 'formA' ://IF <form name="formA"... is submitted
		successCallback = function(data){
			//Run success code here
		};
		break;
		
		case 'formB' ://IF <form name="formB"... is submitted
		successCallback = function(data){
			//Run success code here
		}
		break;
	
		default ://IF any other form is submitted
		successCallback = function(data){
			//Run success code here
		}
		break;
	}
	//console.log(hashData.val);
	
	var _successCallback = successCallback;//Append global callback pieces
	successCallback = function(data){
		_successCallback.apply(this,arguments);
		//Add overrides to success callback. This can be used to add extra functionality all ajax requests should follow. 
		//Great spot to add a loading message
	}

	$.ajax({
		url : actionUrl,
		type : 'POST',
		data : formData,
		dataType : 'json',
		success : successCallback,
		error : function(data){
			//Run error code here
		}
	});	
});