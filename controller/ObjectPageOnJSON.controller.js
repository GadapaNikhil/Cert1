sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (MessageToast, JSONModel, Controller, MessageBox) {
	"use strict";
	return Controller.extend("sap.uxap.sample.ObjectPageOnJSON.controller.ObjectPageOnJSON", {
		onInit: function () {
			var oJsonModel = new JSONModel(sap.ui.require.toUrl("sap/uxap/sample/SharedJSONData/HRData.json"));
			this.getView().setModel(oJsonModel, "ObjectPageModel");
		},
		handleLink1Press: function () {
			var msg = 'Page 1 a very long link clicked';
			MessageToast.show(msg);
		},
		handleLink2Press: function () {
			var msg = 'Page 2 long link clicked';
			MessageToast.show(msg);
		},
		handleEditBtnPress: function () {
			var msg = 'An edit box should appear when you click on the "Edit header" button';
			MessageToast.show(msg);
		},
		toggleFooter: function () {
			var oObjectPageLayout = this.byId("ObjectPageLayout");
			oObjectPageLayout.setShowFooter(!oObjectPageLayout.getShowFooter());
		},
		
		onSuccessMessageBoxPress: function(){
			MessageBox.success("Certificate 1234567 was created");
		}
		
	});
});