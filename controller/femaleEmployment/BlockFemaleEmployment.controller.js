sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.femaleEmployment.BlockFemaleEmployment", {
		onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{fem: "Female Payroll ", desc: "", tksa: "" }, 
					{fem: "Number of Saudi National Female Employees ", desc: "Headcounts should be taken from year end payroll report", tksa: "121" }, 
					{fem: "Total Female Saudi National Salaries, Wages and Benefits", desc: "Compensation amounts for the year including salaries & wages,bonuses, housing and transportation including compensation for all Saudis, Including expats.Excludes cost related to SPSP,interns and CO-OPS(these costs shuld be included in Training & Qualification", tksa: "$17,88,593" }, 
						{fem: "", desc: "Average Compensation/Saudi National", tksa: "$14,782" }, 
					{fem: " ", desc: "", tksa: "" }, 	
					{fem: "Training & Development of Female Workforce ", desc: "", tksa: "" }, 

					{fem: "Head Count", desc: "No of Saudi Females participating in technical training & qualification activities ( both IK & OOK ) ", tksa: "18" }, 
					{fem: "Trainig & QUlification Costs", desc: " Training & Qualification expenses related to Female Saudi Nationals", tksa: "$1,57,141" } 
					
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