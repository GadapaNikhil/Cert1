sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.table.sample.MultiHeader.Controller", {
		onInit: function() {
			var oModel = new JSONModel();
			var oData = {
				modelData: [{
					supplier: "Managers",
					description: "Chief executives, senior officials, and managers",
					street: "0",
					city: "0",
					phone: "0",
					openOrders: "NA"
				}]
			};
			var oView = this.getView();

			oModel.setData(oData);
			oView.setModel(oModel);
		},

		createEntry: function() {
			return {
					supplier: "",
					description: "",
					street: "0",
					city: "0",
					phone: "0",
					openOrders: "NA"
			};
		},

		onAddPress: function() {
			var model = this.getView().getModel();
			var currentRows = model.getProperty("/modelData");
			var newRows = currentRows.concat(this.createEntry());
			model.setProperty("/modelData", newRows);
		}
	});
});