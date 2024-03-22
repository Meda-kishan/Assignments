sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("remoteservice.odata.controller.home", {
            onInit: function () {

            //    var odata_model=this.getOwnerComponent().getModel();

            //    odata_model.read("/Orders", {success: (data)=>console.log(data), error: ()=>console.log("error occured while getting data")});
               
            
            //     debugger
                this.get_data();


            },



            get_data: function()
            {
                let odata_model=this.getOwnerComponent().getModel();
                let ojson_model=this.getOwnerComponent().getModel("model_odata");

                odata_model.read("/Products" ,{
                    success(data)
                    {
                        console.log(data);
                        console.log(data.results)

                        
                        ojson_model.setProperty("/list_data",data.results);

                        console.log(ojson_model.getProperty("/list_data"),"model data")

                        console.log("ojson model:  ")
                        console.log(ojson_model.getData().list_data)
                        
                        debugger

                    },
                    error(err)
                    {
                        console.log(err);
                        debugger
                    }

                })
            }


        });
    });
