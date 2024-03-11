/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "application/toyota/model/models",
    "sap/ui/model/json/JSONModel",
  ],
  function (UIComponent, Device, models, JSONModel) {
    "use strict";

    return UIComponent.extend("application.toyota.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        const cars = {
          images: [
            
            { url: "https://global.toyota/pages/news/images/2021/08/02/1330/001.jpg"},
            
            { url: "https://www.hdwallpapers.in/download/car_toyota_gr_supra_rz_matte_white_edition_2022_4k_5k_hd_cars-HD.jpg"},
 
            { url: "https://gaadiwaadi.com/wp-content/uploads/2023/02/7-Seater-Toyota-Corolla-Cross-1.jpg"},

            { url: "https://w0.peakpx.com/wallpaper/827/74/HD-wallpaper-toyota-toyota-86-car-sport-car-white-car.jpg"},

            { url: "https://www.motorbeam.com/wp-content/uploads/Toyota-Fortuner-TRD-Limited-Edition.jpg"},

            { url: "https://images.hindustantimes.com/auto/img/2021/09/28/1600x900/The_new_Fortuner_1612434351774_1612434358960_1632807301099.JPG"},

            { url: "https://spn-sta.spinny.com/blog/20220921112908/Spinny-Assured-Toyota-Fortuner.jpg?compress=true&#38;quality=80&#38;w=1200&#38;dpr=2.6"},
          ],
        };

        const car_model = new JSONModel(cars);
        this.setModel(car_model, "cars");
      },
    });
  }
);
