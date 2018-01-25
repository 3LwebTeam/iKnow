Ext.define('iKnow.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',
	requires: [
		'iKnow.view.login.LoginController'
		// 'Ext.form.panel'
	],
	controller: 'login',
	bodyPadding: 10,
	title: 'Login Window',
	closable: false,
	autoShow: true,

	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'Username',
			allowBlank: false
		},{
			xtype: 'textfield',
			name: 'password',
			inputType: 'password',
			fieldLabel: 'password',
			allowBlank: false
		},{
			xtype: 'displayfield',
			hideEmptyLabel: false,
			value: 'Enter any non-blank password'
		}],
		buttons: [{
			text: 'Login',
			formBind: true,
			listeners: {
				click: 'onLoginClick'
			}
		}]
	}
});