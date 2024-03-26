sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("application.toyota.controller.lang_form", {

		on_language_select(oEvent)
		{
			let key_selected=oEvent.getParameter("selectedItem").getKey();
			console.log(key_selected);

			sap.ui.getCore().getConfiguration().setLanguage(key_selected);
		},
		

		
	}
	
	);
});