import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});



// if(Meteor.isServer){
// 	Meteor.methods({
		
// 		'cinsert_data':function(c_transId,c_accountId,c_status,c_amount) {
// 			// body...
// 			if (!Meteor.userId()) {
// 				throw new Meteor.Error('not authorized');
// 				return false;
// 			}
// 			else{
// 				alert("gand");

// 				var username = Meteor.user().username;
				
// 				var year = new Date().getFullYear();
// 				var month = new Date().getMonth()+1;
// 				var day = new Date().getDate();

// 				var date = (day + "/" + month +"/"+year).toString();

// 				console.log(username,Meteor.userId(),c_transId,c_accountId,date,c_status,c_amount);

// 				cusmtable.insert({

// 					author:username,
// 					userid:Meteor.userId(),
// 					c_transId:c_transId,
// 					c_accountId:c_accountId,
// 					c_date:date,
// 					c_status:c_status,
// 					c_amount:c_amount

// 				});

// 			}
// 		},

// 	});
// }else{
// 	Bert.alert("Not Server","danger","growl-top-right");
// }