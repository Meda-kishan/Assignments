sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/ui/core/Popup",
    "sap/m/MessageToast"
], function(
	Controller,Text,popup,MessageToast
) {
	"use strict";

	return Controller.extend("application.toyota.controller.popup", {

        open_popup(oEvent)
        {
            MessageToast.show("popup opened")
         


            this.dialog??=this.loadFragment(
                {
                    name : "application.toyota.view.fragments.btn_click"
                }
            );

            this.dialog.then((response) => response.open())           
            
        },

        close_popup()
        {
            this.byId("pop_dialog").close()
        }
	});
});