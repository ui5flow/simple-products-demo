sap.ui.define([], function() {
    "use strict";
    return {

        getI18nText: function(text) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            return resourceBundle.getText(text);
        },

        getFormattedDateTime: function(isoTimestamp) {
            if (isoTimestamp) {
                var date = new Date(isoTimestamp);
                var padNumber = function(number) {
                    number = number.toString();
                    if (number.length === 1) {
                        return "0" + number;
                    }
                    return number;
                };
                return padNumber(date.getDate()) + "/" + padNumber(date.getMonth() + 1) + "/" + date.getFullYear() + " " + padNumber(date.getHours()) + ":" + padNumber(date.getMinutes()) + ":" + padNumber(date.getSeconds());
            } else {
                return "";
            }

        },

        getFormattedDate: function(isoTimestamp) {
            if (isoTimestamp) {
                var date = new Date(isoTimestamp);
                var padNumber = function(number) {
                    number = number.toString();
                    if (number.length === 1) {
                        return "0" + number;
                    }
                    return number;
                };
                return padNumber(date.getDate()) + "." + padNumber(date.getMonth() + 1) + "." + date.getFullYear();
            } else {
                return "";
            }

        }
      

    };
});
