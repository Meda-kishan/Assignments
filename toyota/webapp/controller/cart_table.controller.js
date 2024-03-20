sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "../view/formatters/formatter"
], function(
	Controller,Text,formatter
) {
	"use strict";

	return Controller.extend("application.toyota.controller.cart_table", {

        formatter : formatter

	});
});