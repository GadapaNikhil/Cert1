sap.ui.define([
	"sap/base/Log",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/format/DateFormat",
	"sap/ui/thirdparty/jquery"
], function(Log, Controller, JSONModel, MessageToast, DateFormat, jQuery) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.possibleInquiries.BlockPossibleInquiries", {
		onInit: function() {
			var oModel = new JSONModel();
				// this.localModel = new sap.ui.model.json.JSONModel();
				// this.getView().setModel(this.localModel, "localModel");
				// var items = [];
				// this.localModel.setProperty("/items", items);
			var oData = {
				modelData: [
					{Ksa: "Question is not applicable", SupplierName: "MOHD AL MARAE MODERN EST.B", SME: "NO", Descrition: "Construction work", Business: "Civil Construction", Produced: "NA - SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "DIRHAM MUJAHID ALSALAH EST.", SME: "NO", Descrition: "Cut, Fill & Leveing & Compaction of Existing Material", Business: "Civil Construction", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "GREEN SHOPPING CENTER  CO.", SME: "NO", Descrition: "Food Provider", Business: "Food Industry & Catering", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "AL SAMAH EST FOR CONTRACTING & RENT OF EQUIPMENTS.", SME: "NO", Descrition: "Rental of Equipment Loader & Supply of aggregate ", Business: "Industrial Services", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "QAWASY PIPE COATING FACTORY.", SME: "NO", Descrition: "supply & installation of HDPE tite liner  systems", Business: "Fuel Services/Gas stations", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "ALSAADOUN CONTRACTING EST.", SME: "NO", Descrition: "Fuel and Disel", Business: "Civil Construction", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$1,63,11,131.63", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "TAMIMI GLOBAL CO. LTD.", SME: "NO", Descrition: "Catring ", Business: "Manpower Suppliers", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$32,05,847.56", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "ALAWADH COMPANY FOR TRADING & CONT.", SME: "NO", Descrition: "Construction of Cathodic Protection & O/H Power lines for Various wells", Business: "Car/Truck/Equipment Rental ", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"50%", total:"$29,19,88.00", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" },
					{Ksa: "Question is not applicable", SupplierName: "GULF CHARITY  CONTRACTING  EST.", SME: "NO", Descrition: "manpower", Business: "Car/Truck/Equipment Rental ", Produced: "NA- SERVICE", Certified:"", Segment:"50%", Selected:"30%", total:"$28,28,725.52", Inkingdom:"$81,55,566", Saudi:"100%", SaudiPortion:"$81,55,566" }
				
				]
			};
			var oView = this.getView();

			oModel.setData(oData);
			oView.setModel(oModel);
		},

		initSampleDataModel : function() {
			var oModel = new JSONModel();

			var oDateFormat = DateFormat.getDateInstance({source: {pattern: "timestamp"}, pattern: "dd/MM/yyyy"});

			jQuery.ajax(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"), {
				dataType: "json",
				success: function(oData) {
					var aTemp1 = [];
					var aTemp2 = [];
					var aSuppliersData = [];
					var aCategoryData = [];
					for (var i = 0; i < oData.ProductCollection.length; i++) {
						var oProduct = oData.ProductCollection[i];
						if (oProduct.SupplierName && aTemp1.indexOf(oProduct.SupplierName) < 0) {
							aTemp1.push(oProduct.SupplierName);
							aSuppliersData.push({Name: oProduct.SupplierName});
						}
						if (oProduct.Category && aTemp2.indexOf(oProduct.Category) < 0) {
							aTemp2.push(oProduct.Category);
							aCategoryData.push({Name: oProduct.Category});
						}
						oProduct.DeliveryDate = (new Date()).getTime() - (i % 10 * 4 * 24 * 60 * 60 * 1000);
						oProduct.DeliveryDateStr = oDateFormat.format(new Date(oProduct.DeliveryDate));
						oProduct.Heavy = oProduct.WeightMeasure > 1000 ? "true" : "false";
						oProduct.Available = oProduct.Status == "Available" ? true : false;
					}

					oData.Suppliers = aSuppliersData;
					oData.Categories = aCategoryData;

					oModel.setData(oData);
				},
				error: function() {
					Log.error("failed to load json");
				}
			});

			return oModel;
		},

		updateMultipleSelection: function(oEvent) {
			var oMultiInput = oEvent.getSource(),
				sTokensPath = oMultiInput.getBinding("tokens").getContext().getPath() + "/" + oMultiInput.getBindingPath("tokens"),
				aRemovedTokensKeys = oEvent.getParameter("removedTokens").map(function(oToken) {
					return oToken.getKey();
				}),
				aCurrentTokensData = oMultiInput.getTokens().map(function(oToken) {
					return {"Key" : oToken.getKey(), "Name" : oToken.getText()};
				});

			aCurrentTokensData = aCurrentTokensData.filter(function(oToken){
				return aRemovedTokensKeys.indexOf(oToken.Key) === -1;
			});

			oMultiInput.getModel().setProperty(sTokensPath, aCurrentTokensData);
		},

		formatAvailableToObjectState : function(bAvailable) {
			return bAvailable ? "Success" : "Error";
		},

		formatAvailableToIcon : function(bAvailable) {
			return bAvailable ? "sap-icon://accept" : "sap-icon://decline";
		},

		handleDetailsPress : function(oEvent) {
			MessageToast.show("Details for product with id " + this.getView().getModel().getProperty("ProductId", oEvent.getSource().getBindingContext()));
		},

		onPaste: function(oEvent) {
			var aData = oEvent.getParameter("data");
			MessageToast.show("Pasted Data: " + aData);
		}
	});
});