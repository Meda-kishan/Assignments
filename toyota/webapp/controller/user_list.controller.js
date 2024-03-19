sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "../view/formatters/formatter"
], function(
	Controller,Text,formatter
) {
	"use strict";

	return Controller.extend("application.toyota.controller.user_list", {
        formatter : formatter,
        
        onInit()
        {
            // console.log(this.getOwnerComponent().getModel("user_data").getData());


           
        }
        
	}
    );
});