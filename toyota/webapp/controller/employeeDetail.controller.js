sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,JSONModel
) {
	"use strict";

	return Controller.extend("application.toyota.controller.employeeDetail", {

		onInit()
		{
			const oRouter=this.getOwnerComponent().getRouter();

			 oRouter.getRoute("employeedetail").attachPatternMatched(this.onObjectMatched,this);
			// console.log(oRouter.getRoute("employeedetail"));

		},

		onObjectMatched(oEvent) {
            console.log("oevent",oEvent)
            debugger
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").employeePath),
				model: "employee"

			});
			const path=oEvent.getParameter("arguments").employeePath
			const model=this.getView().getModel("employee")
			const data=model.getProperty("/"+path)
			console.log(data)
			console.log("Data from model")


			// var oModel=new JSONModel(

			// 	{
			// 		HTML  : 
			// 		"<span  style=\"color : Red \" > Mobile Name : </span>" + `<span> ${data.Name} </span>`+"<br />"+"<br />"+
			// 		"<span style=\"color : Red \"> Mobile Model : </span>" + `<span> ${data.Department} </span>`+"<br />"+"<br />"+
			// 		"<span  style=\"color : Red \"> Mobile Color : </span>" + `<span> ${data.Gender} </span>`+"<br />"+"<br />"+
			// 		"<span  style=\"color : Red \"> Mobile Size : </span>" + `<span> ${data.Name} </span>`+"<br />"+"<br />"+
			// 		"<span style=\"color : Red \"> Mobile Camera : </span>" + `<span> ${data.Name} </span>`+"<br />"+"<br />"+
			// 		"<span  style=\"color : Red \"> Mobile size : </span>" + `<span> ${data.size} </span>`+"<br />"+"<br />"+
			// 		"<span  style=\"color : Red \"> Mobile Description : </span>" + `<span> ${data.Name} </span>`+"<br />"+"<br />"+
			// 		"<h5 style=\"color: Red\">PRICE</h5>"+`<h3>${data.Name} $</h3>`
	
					
				
					
			// 	}
			// );
			// this.getView().setModel(oModel);

		},




	});
});