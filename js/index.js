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
			{id:'290',name:'Consita', site:'http://www.consita.com.br', logo:'assets/consita.png', tel: '(31) 2101-0422',certs:''},
			{id:'010',name:'Empresa Construtora Brasil SA', site:'http://www.ecbsa.com.br', logo:'assets/ecbsa.png', tel: '(31) 3516-7922', certs:'assets/isologos.png'},
			{id:'010',name:'Empresa Construtora Brasil / Grupo Mota-Engil ', site:'http://www.ecbsa.com.br', logo:'assets/ecbmota.png', tel: '(31) 3516-7922', certs:'assets/ecbmota.png'},
			{id:'240',name:'Tracevia do Brasil', site:'http://www.tracevia.com.br', logo:'assets/tracevia.png', tel: '(31) 3516-7922',certs:''}
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