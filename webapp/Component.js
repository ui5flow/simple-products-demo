sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "com/ui5flow/productsdemo/display/model/models"  
], function (UIComponent, JSONModel, models) {
   "use strict";
   return UIComponent.extend("com.ui5flow.productsdemo.display.Component", {

      metadata : {
            manifest: "json"
      },

      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
 
         // set the device model
         this.setModel(models.initDeviceModel(), "device");

         // set global properties model
         this.setModel(models.initGlobalPropertiesModel(), "globalProperties");

         // initialize router
         this.getRouter().initialize();        
	}
   });
});