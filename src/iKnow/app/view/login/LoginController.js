Ext.define('iKnow.view.login.LoginController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	onLoginClick: function(){
		localStorage.setItem('iKnowLoggedIn', true);
		this.getView().destroy();
		Ext.widget('app-main');
	}
})