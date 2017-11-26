sap.ui.define([
    "com/ui5flow/productsdemo/display/controller/BaseController",
    "com/ui5flow/productsdemo/display/model/formatter",
], function(Controller, formatter) {
    "use strict";
    return Controller.extend("com.ui5flow.productsdemo.display.controller.List", {

        formatter: formatter,

        onInit: function() {
            this.globalBusyOn();
            this.getRouter(this).getRoute("list").attachPatternMatched(this.onObjectMatched, this);
        },

        onAfterRendering: function() {

        },

        onObjectMatched: function(oEvent) {
            this.globalBusyOff();
        }



    });
});