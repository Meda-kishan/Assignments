sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator,Sorter) {
        "use strict";

        return Controller.extend("remoteservice.odata.controller.home", {
            onInit: function () {

            //    var odata_model=this.getOwnerComponent().getModel();

            //    odata_model.read("/Orders", {success: (data)=>console.log(data), error: ()=>console.log("error occured while getting data")});
               
                // this.get_data();

                this.get_data();


            },




            get_data()
            {
                let odata_model=this.getOwnerComponent().getModel();
                let json_model=this.getOwnerComponent().getModel("model_odata");


                //Filter to find the productName that starts with 'c'
                let ofilter=new Filter(
                    {
                        path : 'ProductName',
                        operator : 'StartsWith',
                        value1 : 'C'
                    }
                );

                //Filter to find the productName that starts with 'A'
                let ofilter_A=new Filter(
                    {
                        path : 'ProductName',
                        operator : 'StartsWith',
                        value1 : 'A'
                    }
                );


                
                //Sorter function to arrangr the productID in ascedding order
                let sort=new Sorter(
                    {
                        path : 'ProductID',
                        bdescending : true

                    }
                );


                odata_model.read("/Products",
                    {
                    
                        filters : [ofilter,ofilter_A],

                        sorters : [sort],

                        success(data)
                        {

                            json_model.setProperty("/list_data",data.results);

                        },
                        error(err)
                        {
                            console.log(err);
                        }

                        
                    }
                )
            }


        });
    });
