sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.table.sample.MultiHeader.controller.labour.BlockLabour", {
				onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{supplier: "Managers", description: "Chief executives, senior officials, and managers", street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Professionals", description: "Science, engineering, business, administration, and IT professionals", street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Technicians and associate professionals", description: "Science, engineering, business, administration, and IT associate professionals", street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Clerical support workers", description: "General and keyboard, customer services, numerical and material recording clerks", street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Service and sales workers", description: "Personal service, sales, personal care, and protective services workers",  street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Skilled agricultural, forestry and fishery workers", description: "Titanium", street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Craft and related trades workers", description: "Market-oriented skilled agricultural, forestry, and fishing workers", street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Plant and machine operators, and assemblers", description: "Building, metal, machinery, handicraft, electrical and electronic, and related trades workers",  street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Service and sales workers", description: "Stationary plant and machine operators, assemblers, drivers and mobile plant operators",  street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Elementary occupations", description: "Cleaners, helpers, labourers, and elementary workers", street: "0", city: "0", phone: "0", openOrders: "NA"},
					{supplier: "Armed forces occupations, and assemblers", description: "Commissioned/non-commissioned armed forces officers, and armed forces occupations",  street: "0", city: "0", phone: "0", openOrders: "NA"}
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