sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,JSONModel
) {
	"use strict";

	return Controller.extend("application.toyota.controller.employeeList", {



		employee_clicked(oEvent)
		{
			let emp=oEvent.getSource();
			let orouter=this.getOwnerComponent().getRouter();
			orouter.navTo("employeedetail",
				{
					employeePath: window.encodeURIComponent(emp.getBindingContext("employee").getPath().substr(1))
				}
			);

			debugger;
		}

		
	});
});