sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "../view/formatters/formatter",
	"sap/ui/model/json/JSONModel"
	
], function(
	Controller,Text,formatter,JSONModel
) {
	"use strict";

	return Controller.extend("application.toyota.controller.cart_table", {

        formatter : formatter,

		onInit()
		{

			// this.byId("discount_hbox").addStyleClass("red_color")

		// 	const name_data=
		// 	{
		// 		name : "green_color"
		// 	};

		// 	const cls_model= new JSONModel(name_data);
		// 	this.getView().setModel(cls_model,"class_name_model");


		// var oModel=this.getView().getModel("class_name_model")
		// var name_property=oModel.getProperty("/name");


		// 	this.byId("discount_vbox").addStyleClass(name_property)

		// 	var new_discount=this.formatter.fndiscount(12.5);
		// 	console.log(new_discount);
		// 	debugger
		}

	});
});