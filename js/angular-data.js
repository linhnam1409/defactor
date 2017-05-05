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

	$scope.nationals = [
		{"ntnTitle":"Seoul, KOREA","ntnClass":"korea","ntnInfo":[
			"Headquarter",
			"R&D, Sample Room",
			"Design House, Show Room"
		]},
		{"ntnTitle":"Hochiminh, VIETNAM(Own)","ntnClass":"vietnam","ntnInfo":[
			"Total Owned 76 lines, 2.8mil/month",
			" - Knit 60 lines, 2.3mil/month",
			" - Woven 16lines, 0.5mil/month",
			" - Direct Employee 5,550"
		]},
		{"ntnTitle":"Shanghai, CHINA","ntnClass":"china","ntnInfo":[
			"Fabric and Trim Sourcing",
			"Fabric Inspection"
		]},
		{"ntnTitle":"New York, USA","ntnClass":"usa","ntnInfo":[
			"Servicing East Coast Customers"
		]},
		{"ntnTitle":"Sukabumi, INDONESIA(Own)","ntnClass":"indo","ntnInfo":[
			"Total Owned 94 lines, 0.4mil/month",
			" - Knit 54 lines, 2.9mil/month",
			" - Woven 40 lines, 1.3mil/month",
			" - Direct Employee 7,100"
		]}
	]
});