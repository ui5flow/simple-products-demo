sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		initDeviceModel: function() {
			let oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
	

		initGlobalPropertiesModel: function() {

			var oGlobalProperties = {
				"host": "."
			};

    	var oModel = new JSONModel(); 
    	oModel.setDefaultBindingMode("TwoWay");
    	oModel.setData(oGlobalProperties);
    	return oModel;
		}

	};

});