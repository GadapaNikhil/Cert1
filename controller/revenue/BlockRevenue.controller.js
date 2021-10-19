sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.table.sample.MultiHeader.controller.revenue.BlockRevenue", {
		onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{space: "IK Based Customers Served by IK Operations", desc: "Sales to all IK Customers(KSA incluse sales to Saudi Aramco) from operations based IK", sa: "$46,59,38,988", tksa: "$46,59,38,988"},
					{space: "IK Based Customers Served by Out-Of-Kingdom(OOK) Operations", desc: "Sales to all IK Customers from operations based OOK", sa: "$0", tksa: "$0"},
					{space: "Export Sales", desc: "Sales from IK Customers to OOK Customers (end user OOK)", sa: "", tksa: "$0"},
					{space: "Total Revemue", desc: "", sa: "$46,59,38,988", tksa: "$46,59,38,988.00"},
					{space: "Export Revenue Factor(Catagory X)", desc: "", sa: "0.0%", tksa: "0.0%"}
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