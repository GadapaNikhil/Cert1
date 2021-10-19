sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.iktvaScore.BlockIktvaScore", {
		onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{score: "Catagory A:Goods & Services, Depriciation & Amortization ", sa1: "31-12-2019", sa2: "31-12-2020",tksa1: "31-12-2019", tksa2: "31-12-2020"},
					{score: "Goods & Services(Section 3)", sa1: "$19,37,61,296 ", sa2: "$16,53,85,259", tksa1: "$19,37,61,296", tksa2: "$16,53,85,259"},
					{score: "Depreciation(Section 6) ", sa1: "$26,63,075 ", sa2: "$32,16,042", tksa1: "$26,63,075", tksa2: "$32,16,042"},
					{score: "Expat Compensation (Section 4) ", sa1: "$2,53,21,447 ", sa2: "$2,98,02,205", tksa1: "$2,53,21,447", tksa2: "$2,98,02,205 "},
					{score: "Total Catagory A", sa1: "$22,17,45,818 ", sa2: "$19,84,03,506", tksa1: "22,17,45,818", tksa2: "$19,84,03,506"},
					{score: "Catagory B:Saudi Compensation(Section 4) ", sa1: "$2,10,11,099 ", sa2: "$2,60,81,490",  tksa1: "$2,10,11,099", tksa2: "$2,60,81,490 "},
					{score: "Catagory C:Training and Development of Saudis(Section 7) ", sa1: "$22,75,907 ", sa2: "$38,14,442,", tksa1: "$22,75,907", tksa2: "$38,14,442"},
					{score: "Catagory D:Supplier Development(Section 8) ", sa1: "$0", sa2: "$0",  tksa1: "$0", tksa2: "0%"},
					{score: "Catagory R:Supplier Development(Section 9) ", sa1: "$0 ", sa2: "$0",  tksa1: "$0", tksa2: "0% "},
					{score: "Total iktva Contribution ", sa1: "$24,50,32,824", sa2: "$22,82,99,439",  tksa1: "$24,50,32,824", tksa2: "$22,82,99,439 "},
					{score: "Catagory E:Total InKingdom Costs ", sa1: " ", sa2: " ",  tksa1: "", tksa2: ""},
					{score: "Local Costs(Section 12) ", sa1: "$44,04,74,384", sa2: "$38,53,27,623",  tksa1: "$44,04,74,824", tksa2: "$22,82,99,439"},
					{score: "Out of Kingdom Costs(Section 11) ", sa1: "$0 ", sa2: "$0",  tksa1: "$0", tksa2: "$0"},
					{score: "Total Catagory E ", sa1: "$44,04,74,384", sa2: "$38,53,27,623",  tksa1: "$44,04,74,384", tksa2: "$38,53,27,623"},
					{score: "Per-Export iktva ratio ", sa1: "56%", sa2: "59$",  tksa1: "56%", tksa2: "59% "},
					{score: "Catagory X: Export Revenues(Section 11) ", sa1: "0% ", sa2: "0%",  tksa1: "0%", tksa2: "0%"},
					{score: "Iktva Score % ", sa1: "56%", sa2: "59%",  tksa1: "56%", tksa2: "59% "}
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