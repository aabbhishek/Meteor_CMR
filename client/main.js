import { Template } from 'meteor/templating';
import 'bootstrap/dist/css/bootstrap.css';
import { Meteor } from 'meteor/meteor';
import 'bootstrap';
import $ from 'jquery';


import './index.html';
import './login_lay.html';
import './model.html';
import './custm.html';
import './cinsert.html';


TempCollection = new Meteor.Collection('temp', {defineMutationMethods: false});

Meteor.subscribe('temp.query', 'queryParams');

cusmtable = new Mongo.Collection('cusmtable');
TempCollection.allow({
         insert: function () {
         return true;
         },
         update: function () {
         return true;
         },
         remove: function () {
         return true;
         }
         });
// _________________________________DATABASE_____________________________________________________


// if(Meteor.isClient){
	// Meteor.methods({
		
	// 	'cinsert_data':function(c_transId,c_accountId,c_status,c_amount) {
	// 		// body...
	// 		if (!Meteor.userId()) {
	// 			throw new Meteor.Error('not authorized');
	// 			return false;
	// 		}
	// 		else{
	// 			alert("gand");

	// 			v
	// 		}
	// 	},

	// });
// }else{
// 	Bert.alert("Not Server","danger","growl-top-right");
// }



// _________________________________END_DATABASE_____________________________________________________


Template.login_lay.events({
  'click .customer'(event) {
    // increment the counter when button is clicked
    $('.CL-W').fadeOut(500);
    $('.c-show-1-inner').animate({top:'100px'});
    $('.c-show-2').fadeIn(2500);

     $('.e-show-2').fadeOut(300);
      $('.e-show-1-inner').animate({top:'250px'});
     $('.EL-W').fadeIn(2500);

    $('.m-show-2').fadeOut(500);
    $('.m-show-1-inner').animate({top:'250px'});
	$('.ML-W').fadeIn(2500);  


  },

  'click .employe'(event) {
    // increment the counter when button is clicked
    $('.EL-W').fadeOut(500);
    $('.e-show-1-inner').animate({top:'100px'});
    $('.e-show-2').fadeIn(2500);

    $('.c-show-2').fadeOut(500);
    $('.c-show-1-inner').animate({top:'250px'});
    $('.CL-W').fadeIn(2500);

    $('.m-show-2').fadeOut(500);
    $('.m-show-1-inner').animate({top:'250px'});
	$('.ML-W').fadeIn(2500);    
    

  },


  'click .manager'(event) {
    // increment the counter when button is clicked
    $('.ML-W').fadeOut(500);
    $('.m-show-1-inner').animate({top:'100px'});
    $('.m-show-2').fadeIn(2500);

    $('.c-show-2').fadeOut(500);
    $('.c-show-1-inner').animate({top:'250px'});
    $('.CL-W').fadeIn(2500);

    $('.e-show-2').fadeOut(300);
    $('.e-show-1-inner').animate({top:'250px'});
    $('.EL-W').fadeIn(2500);
    

  },

   'click .registe-open'(event) {  $('.regs').show(); },

   'submit .cutomer_login'(event){
   	 	var customer_id = trimInput(event.target.customer_id.value);
   	 	var customer_pass =trimInput(event.target.customer_pass.value); 
   	 	// event.preventDefault();
   	 	 if(isNotEmpty(customer_id) && isNotEmpty(customer_pass)){
   	 	 	Meteor.loginWithPassword(customer_id,customer_pass,function(err){
   	 	 		console.log(customer_pass);
   	 	 		if(err){
   	 	 			Bert.alert(err.reason,"danger","growl-top-right");
   	 	 		}
   	 	 		else{
   	 	 			Bert.alert("Welcome, "+customer_id+" you are logged in","success","growl-top-right");

   	 	 			$('.cutomer-interface').css("display","block");

   	 	 			$('.cust_name').html(Meteor.user().username);
   	 	 			$('.cust_email').html(Meteor.user().emails[0].address);

   	 	 		}
   	 	 	});
   	 	 }
   	 	 return false;
   },

});

Template.model.rendered = function() {
	// body...
}


Template.model.events({
	'click .close'(event){
		$('.regs').hide();

		

	},

	'submit .reg_form'(event){
		var username=trimInput(event.target.username.value);
		var email=trimInput(event.target.email.value);
		var pass=trimInput(event.target.password.value);
		var cpass=trimInput(event.target.cpassword.value);
		var customer="customer";

 		
		
		if(isNotEmpty(username) && isNotEmpty(email) && isNotEmpty(pass) && isNotEmpty(cpass)
			 && areValidPassword(pass,cpass)){

				
				
				Accounts.createUser({
					username:username,
					email:email,
					password:pass,
					profile:{
						type:customer,
					}

				}, function(err){
					console.log(cpassword);
					if(err){
						Bert.alert(err.reason,"danger","growl-top-right");

					}else{
						Bert.alert(" Your Account is Created login","success","growl-top-right");
						$('.regs').hide();
						
						
						
						
						
						
					}
				});	
		}

		return false;
	},

});



Template.custm.events({

	'click .enter_value_custm'(event){
		$('.cinsert_data').show();
	}

});


Template.cinsert.events({

	'click .close'(event){
		$('.cinsert_data').hide();
	},

	'submit .cinter_from'(event){
		var c_transId = event.target.ctid.value;
		var c_accountId = event.target.caid.value;
		var c_status = event.target.cstat.value;
		var c_amount = event.target.camt.value;



		if(isNotEmpty(c_transId) && isNotEmpty(c_accountId) 
			&& isNotEmpty(c_status) && isNotEmpty(c_amount)){

				var username = Meteor.user().username;
				
				var year = new Date().getFullYear();
				var month = new Date().getMonth()+1;
				var day = new Date().getDate();

				var date = (day + "/" + month +"/"+year).toString();

				console.log(username,Meteor.userId(),c_transId,c_accountId,date,c_status,c_amount);

			
					// Meteor.publish('cusmtable', function () {
		   //         return cusmtable.find();
		   //         });

					cusmtable.insert({

								author:'abc',
								// userid:Meteor.userId(),
								// c_transId:c_transId,
								// c_accountId:c_accountId,
								// createdAt:date,
								// c_status:c_status,
								// c_amount:c_amount
							});


			// Meteor.call('cinsert_data');

			event.target.ctid.value="";
			event.target.caid.value="";
			event.target.cstat.value="";
			event.target.camt.value="";

			Bert.alert(" Data Inserted ","success","growl-top-right");

		}
		else{
			Bert.alert("There was Some error","danger","growl-top-right");
		}

		return false;
	},

});






var trimInput =function(val){
	return val.replace(/^s*|\s*/g,"");
};

var isNotEmpty = function(value){
	if(value && value != ''){
		return true;
	}
	Bert.alert("Please fill in all fields","danger","growl-top-right");
	return false;
};


var areValidPassword=function(password,confirm){
	if(password!=confirm){
		Bert.alert("Passwords do not match","danger","growl-top-right");
		return false;
	}
	return true;

};







