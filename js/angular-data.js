var app = angular.module("app",[]);
app.controller("controller",function($scope){
	$scope.navs = [
		{"navTitle":"About","navDep1s":[
			{"depTitle":"Nobland CEO 인사말","depUrl":"#about1"},
			{"depTitle":"Noble Industry CEO 인사말","depUrl":"#about2"},
			{"depTitle":"연혁","depUrl":"#about3"},
			{"depTitle":"비전","depUrl":"#about4"},
			{"depTitle":"조직도","depUrl":"#about5"},
			{"depTitle":"해외법인","depUrl":"#about6"},
			{"depTitle":"오시는 길","depUrl":"#about7"}
		]},
		{"navTitle":"Customers","navDep1s":[
			{"depTitle":"Designers Brands","depUrl":"#"},
			{"depTitle":"Specialty Store Brands","depUrl":"#"},
			{"depTitle":"Department Store Brands","depUrl":"#"}
		]},
		{"navTitle":"R&D Center","navDep1s":[
			{"depTitle":"Design", "depUrl":"#"},
			{"depTitle":"Fabric R&D", "depUrl":"#"},
			{"depTitle":"LAB & Washing", "depUrl":"#"},
			{"depTitle":"New York R&D", "depUrl":"#"}
		]},
		{"navTitle":"Sustainability","navDep1s":[
			{"depTitle":"Overview", "depUrl":"#"},
			{"depTitle":"Award", "depUrl":"#"},
			{"depTitle":"Environmental Value", "depUrl":"#"},
			{"depTitle":"NB Sponsorship Program", "depUrl":"#"},
			{"depTitle":"CSR Report", "depUrl":"#"}
		]},
		{"navTitle":"Careers","navDep1s":[
			{"depTitle":"인사정보", "depUrl":"#"},
			{"depTitle":"채용안내", "depUrl":"#"},
			{"depTitle":"온라인 입사지원", "depUrl":"#"},
			{"depTitle":"입사지원결과", "depUrl":"#"}
		]},
		{"navTitle":"Community","navDep1s":[
			{"depTitle":"최근소식", "depUrl":"#"},
			{"depTitle":"자유게시판", "depUrl":"#"},
			{"depTitle":"직원전용", "depUrl":"#"},
			{"depTitle":"사이버 연수원", "depUrl":"#"}
		]}
	]

	$scope.fnCurActPage = function(v){
		$scope.curActPage= v;
	}

	
});