function header(){
	var header = "";
	header += "<div id='header'>";
	header += "	<div class='logo'>";
	header += "		<a href='#'><img src='../images/logo.png' alt=''></a>";
	header += "	</div>";
	header += "	<label class='menu' for='chkShowNav' onclick='$(this).toggleClass(\"active\");'>";
	header += "		<div class='lines'>";
	header += "			<span class='line'></span>";
	header += "			<span class='line'></span>";
	header += "			<span class='line'></span>";
	header += "		</div>";
	header += "	</label>";
	header += "	<input type='checkbox' class='hide' id='chkShowNav'/>";
	header += "	<ul class='nav'>";
	header += "		<li class='gapNav'>";
	header += "		</li>";
	header += "		<li class='lang'>";
	header += "			<label><input type='radio' name='lang' class='hide' checked/><p>KOREAN</p></label>";
	header += "			<label><input type='radio' name='lang' class='hide'/><p>ENGLISH</p></label>";
	header += "		</li>";
	header += "		<li ng-repeat='nav in navs'>";
	header += "			<a href='#' onclick='fnShowSubNav(this);'>{{nav.navTitle}}</a>";
	header += "			<dl class='subNav'>";
	header += "				<dt>{{nav.navTitle}}</dt>";
	header += "				<dd ng-repeat='navDep1 in nav.navDep1s'><a href='{{navDep1.depUrl}}'>{{navDep1.depTitle}}</a></dd>";
	header += "			</dl>";
	header += "			<div class='navBg'></div>";
	header += "		</li>";
	header += "	</ul>";
	header += "</div>";
	document.write(header);
}