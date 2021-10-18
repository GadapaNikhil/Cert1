sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.kingdomSuppliers.BlockCapitalExpenditure", {
		onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{Ksa: "2059000133", SupplierName: "MOHD AL MARAE MODERN EST.B", SME: "NO", Descrition: "Construction work", Business: "Civil Construction", Produced: "NA - SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "2050054798", SupplierName: "DIRHAM MUJAHID ALSALAH EST.", SME: "NO", Descrition: "Cut, Fill & Leveing & Compaction of Existing Material", Business: "Civil Construction", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "2050083231", SupplierName: "GREEN SHOPPING CENTER  CO.", SME: "NO", Descrition: "Food Provider", Business: "Food Industry & Catering", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "2251007095", SupplierName: "AL SAMAH EST FOR CONTRACTING & RENT OF EQUIPMENTS.", SME: "NO", Descrition: "Rental of Equipment Loader & Supply of aggregate ", Business: "Industrial Services", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "2051038400", SupplierName: "QAWASY PIPE COATING FACTORY.", SME: "NO", Descrition: "supply & installation of HDPE tite liner  systems", Business: "Fuel Services/Gas stations", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "2252016794", SupplierName: "ALSAADOUN CONTRACTING EST.", SME: "NO", Descrition: "Fuel and Disel", Business: "Civil Construction", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "2050004970", SupplierName: "TAMIMI GLOBAL CO. LTD.", SME: "NO", Descrition: "Catring ", Business: "Manpower Suppliers", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$32,05,847.56", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "2251002699", SupplierName: "ALAWADH COMPANY FOR TRADING & CONT.", SME: "NO", Descrition: "Construction of Cathodic Protection & O/H Power lines for Various wells", Business: "Car/Truck/Equipment Rental ", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$29,19,88.00", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "1010898775", SupplierName: "GULF CHARITY  CONTRACTING  EST.", SME: "NO", Descrition: "manpower", Business: "Car/Truck/Equipment Rental ", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"30%", total:"$28,28,725.52", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" }
				
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