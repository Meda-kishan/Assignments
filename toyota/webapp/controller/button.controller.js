sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(
	Controller,MessageToast
) {
	"use strict";

	return Controller.extend("application.toyota.controller.button", {
	
    
    call_frag()
    {
        this.dialog??=this.loadFragment(
            {
                name:"application.toyota.view.fragments.form"
            }
        );

        this.dialog.then((odialog) => odialog.open())
    },

    closeDialog()
    {
        this.dialog.then((odialog) => odialog.close())
      
    },

    onsubmit()
    {
        this.dialog.then((odialog) => odialog.close())
        MessageToast.show("Form submitted Successfully");

    },

    onimg_press()
    {
        window.open("https://www.google.com/maps/place/Incture+Technologies/@12.8434406,77.6626076,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae6c8634d83b39:0xc56f2a851f7b3ba4!8m2!3d12.8434406!4d77.6651825!16s%2Fg%2F1hm62knf2?entry=ttu")
    }

    });
});