sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.capitalExpenditure.BlockCapitalExpenditure", {
		onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{productive: "Land", ex: "Real Estate, Unimproved property", total: "$28,07,942", mft: "YES", percent: "100%", ika: "$28,07,942"},
					{productive: "Land Improvements", ex: "Site Improvements,Utilities,fencing,paving,grading,concrete,infrastructure", total: "$0", mft: "YES", percent: "20%", ika: "$0"},
					{productive: "Buildings", ex: "Open/enclosed sheds,office buildings,manufacturing facilities,warehouses,camps,portables", total: "$0", mft: "YES", percent: "100%", ika: "$0"},
					{productive: "Building Improvements", ex: "Water treatment, Water heating,compressed air system,air conditioning,process cooling water,major", total: "$0", mft: "YES", percent: "20%", ika: "$0"},
					{productive: "Furniture & Fixtures", ex: "Office furniture, desks,cubicles,office chairs etc", total: "$15,07,245", mft: "YES", percent: "100%", ika: "$3,01,449"},
					{productive: "Appliances", ex: "Refrigerators,ovens,washers/dryers", total: "$0", mft: "YES", percent: "20%", ika: "$0"},
					{productive: "Manufacturing Equipmpent", ex: "Lathes/milling machines,CNC,grinders,rolling mills,welders,coating equipment,tooling etc", total: "$0", mft: "YES", percent: "100%", ika: "$0"},
					{productive: "IT & Telecom Equipment", ex: "Computers,copiers,telephones,PBX Switches,VOIP Equipment", total: "$0", mft: "YES", percent: "20%", ika: "$0"},
					{productive: "Software", ex: "Computer Software", total: "$0", mft: "YES", percent: "100%", ika: "$0"},
					{productive: "Vehicles", ex: "Trucks,Vans,Cars,Trailers,Fork Lifts,Construction equipment,earth movers,semi's,Mobile Cranes etc", total: "$0", mft: "YES", percent: "20%", ika: "$0"},
					{productive: "Other Equipment", ex: "Vessels,Pumps,tanks,compressors,heat transfer,furnace,cranes,stands,dollies,racks,testing etc", total: "$3,60,497", mft: "YES", percent: "100%", ika: "$72,099"},
					{productive: "Drilling", ex: "Onshore & Offshore Rigs", total: "$0", mft: "YES", percent: "20%", ika: "$0"}
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