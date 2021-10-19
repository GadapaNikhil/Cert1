sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.costReconciliation.BlockCostReconciliation", {
		onInit: function() {
			var oModel = new JSONModel();
			// this.localModel = new sap.ui.model.json.JSONModel();
			// this.getView().setModel(this.localModel, "localModel");
			// var items = [];
			// this.localModel.setProperty("/items", items);
			var oData = {
				"catalog": {
					"clothing": {
						"categories": [{
							"name": "Income Statement Line Items",
							"amount": "",
							"categories": [{
								"name": "Direct Costs",
								"amount": 16.99
							}, {
								"name": "General and Administrative Expenses",
								"amount": 16.99
							}, {
								"name": "Other Costs",
								"amount": 16.99
							}]
						}, {
							"name": "Total cost per audited financial statements",
							"categories": []
						}, {
							"name": "Deductions (if any, negative number)",
							"categories": []
						}, {
							"name": "Total Costs for Local Entity(ies)",
							"categories": []
						},{
							"name": "Additional Costs Included:",
							"amount": "",
							"categories": [{
								"name": "Saudi Expat Compensation",
								"amount": 16.99
							}, {
								"name": "IK Goods and Services for OOK Operations",
								"amount": 16.99
							}, {
								"name": "Other OOK Costs",
								"amount": 16.99
							}]
						}, {
							"name": "Total Costs Included:",
							"categories": []
						},{
							"name": "Less Eliminations (Negative Numbers)",
							"amount": "",
							"categories": [{
								"name": "Intercompany Costs",
								"amount": 16.99
							}, {
								"name": "Depreciation and Amortization",
								"amount": 16.99
							}, {
								"name": "G&S Purchased from OOK Suppliers",
								"amount": 16.99
							}, {
								"name": "Expat Salaries, Wages, & Benefits",
								"amount": 16.99
							}, {
								"name": "Saudi Salaries, Wages, & Benefits",
								"amount": 16.99
							}, {
								"name": "Saudi National Training Cost",
								"amount": 16.99
							}, {
								"name": "Supplier Development Costs",
								"amount": 16.99
							}, {
								"name": "Research & Development Costs",
								"amount": 16.99
							}]
						}]
					}

				},
				"sizes": [{
					"key": "XS",
					"value": "Extra Small"
				}, {
					"key": "S",
					"value": "Small"
				}, {
					"key": "M",
					"value": "Medium"
				}, {
					"key": "L",
					"value": "Large"
				}]
			};
			var oView = this.getView();
			
			oModel.setData(oData);
			oView.setModel(oModel);
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expandToLevel(1);
		},
		onAddRowContract: function() {
			var oAddc = {
				"supplier": "",
				"description": "",
				"street": "",
				"city": "",
				"phone": "",
				"openOrders": ""
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