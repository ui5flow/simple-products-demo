sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/BusyDialog"
], function(Controller, History, BusyDialog) {
    "use strict";

    return Controller.extend("com.ui5flow.productsdemo.display.controller.BaseController", {

        globalBusyDialog: new BusyDialog(),

        onInit: function() {
            var oRouter, oTarget;
            oRouter = this.getRouter();
        },

        getRouter: function(oView) {
            return sap.ui.core.UIComponent.getRouterFor(oView);
        },

        onNavBack: function(oEvent) {
            var oHistory;
            var sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("List", {}, true /*no history*/ );
            }
        },

        getContentDensityClass: function() {
            if (!this.sContentDensityClass) {
                if (!sap.ui.Device.support.touch) {
                    this.sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this.sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this.sContentDensityClass;
        },

        getGlobalProperty: function(sPath) {
            return this.getOwnerComponent().getModel("globalProperties").getProperty(sPath);
        },

        setGlobalProperty: function(sPath, oValue) {
            this.getOwnerComponent().getModel("globalProperties").setProperty(sPath, oValue);
            return true;
        },

        getI18nText: function(text) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

            return resourceBundle.getText(text);
        },

        globalBusyOn: function() {
            if (!this.globalBusyDialog) {
                this.globalBusyDialog = new sap.m.BusyDialog();
            }
            this.globalBusyDialog.open();
        },

        globalBusyOff: function() {
            this.globalBusyDialog.close();
        }       

    });
});
