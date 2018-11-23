if(Meteor.isServer){
	Meteor.methods({

		cinsert_data:function(c_transId,c_accountId,c_status,c_amount) {
			// body...
			if (!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			}
			else{
				var username = Meteor.user().username;
				
				var year = new Date().getFullYear();
				var month = new Date().getMonth()+1;
				var day = new Date().getDate();

				var date = (day + "/" + month +"/"+year).toString();

				cusmtable.insert({

					author:username,
					userid:Meteor.userid,
					c_transId:c_transId,
					c_accountId:c_accountId,
					c_date:date,
					c_status:c_status,
					c_amount:c_amount

				});

			}
		},

	});
}