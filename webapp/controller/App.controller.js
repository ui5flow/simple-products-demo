sap.ui.define([
   "com/ui5flow/productsdemo/display/controller/BaseController"
], function (Controller) {
   "use strict";
   return Controller.extend("com.ui5flow.productsdemo.display.controller.App", {
      
      onInit : function () {
      	this.getView().addStyleClass(this.getContentDensityClass());   
      },

   });
});