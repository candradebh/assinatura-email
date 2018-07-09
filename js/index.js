var app = new Vue({
	el: '#app',
	data: {
		empresa:'',
		fax:'',
		fullName: '',
		positionTitle: '',
		ramal: '',
		linkedInLink: '',
		mobilePhone: '',
		skypeAccount: '',
		profilePhoto: '',
		empresas : [ 
			{id:'010',name:'Empresa Construtora Brasil SA', site:'http://www.ecbsa.com.br', logo:'http://www.ecbsa.com.br/img/site/logo-2.png', tel: '(31) 3516-7922', certs:'assets/isologos.png'},
			{id:'290',name:'Consita', site:'http://www.consita.com.br', logo:'http://www.consita.com.br/wp-content/themes/consita/images/logo.png', tel: '(31) 2101-0422',certs:''}
		]
			
	},
	methods: {
		indexWhere(array, conditionFn) {
			const item = array.find(conditionFn)
			return array.indexOf(item)
		  }
	  },
});

function copySigCode() {
	var range = window.getSelection().getRangeAt(0);
	range.selectNode(document.getElementById("sigCode"));
	window.getSelection().addRange(range);
	document.execCommand("copy");
}