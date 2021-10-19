sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.supplierDevelopment.SupplierDevelopment", {
		onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{productive: "", companyBenefited: "", Dec18: "$0", total: "$28,07,942", mft: "YES", percent: "100%", ika: "$28,07,942"},
					{productive: "", companyBenefited: "", Dec18: "$0", total: "$0", mft: "YES", percent: "20%", ika: "$0"},
					{productive: "", companyBenefited: "", Dec18: "$0", total: "$0", mft: "YES", percent: "100%", ika: "$0"},
					{productive: "", companyBenefited: "", Dec18: "$0", total: "$0", mft: "YES", percent: "20%", ika: "$0"}
				]
			};
			var oView = this.getView();

			oModel.setData(oData);
			oView.setModel(oModel);
		},
		onAddRowContract:function(){
			var oAddc = {
					"supplier": "",
					"description": "",
					"street": "",
					"city": "",
					"phone":"",
					"openOrders":""
				};

				var oModel = this.getView().getModel("localModel");
				var aEntries = oModel.getData().oData;
				aEntries.push(oAddc);
				// oModel.setData({
				// 	ServiceRequest: aEntries
				// });
				oModel.setProperty("/oData", aEntries);
		}
	});
});