sap.ui.define([
  "sap/ui/core/mvc/Controller",
"sap/ui/model/odata/v4/ODataModel"
], 
function (Controller,ODataModel) {
  "use strict";

  return Controller.extend("application.toyota.controller.list_model", {
    onInit: function () {
      this.byId("label_1").addStyleClass("label_style");


      // var omodel=new ODataModel("https://services.odata.org/northwind/northwind.svc/")
      // this.getView().setModel(omodel,"Products");

      // var oData=this.getView().getModel("Products");
      // oData.read("/Orders",{
      //   success: function(response){
      //     var odata_results=response.results;
      //     console.log(odata_results);
      //   },

      //   error : function(oError){

      //   }
      // })




    },

    book_service()
    {
        this.contact??=this.loadFragment(
            {
               name: "application.toyota.view.fragments.form"
            }
        );

        this.contact.then((odialog) => odialog.open())    
        console.log("Debugger is called")  
        debugger;
        
    
    },

    closeDialog()
		{
			this.byId("contactus_Dialog").close();
			
		},


  });
});
