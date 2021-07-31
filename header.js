document.write('\
<SCRIPT LANGUAGE="JavaScript">\
function getEmail(id,user,site) {\
tempEmail = "Email: " + user + "@" + site + "</a>";\
var tempDiv = document.getElementById(id);\
tempDiv.innerHTML = tempEmail;\
}\
function getPhone(id,areaCode,phone) {\
tempPhone = "Phone: (" + areaCode + ")" + phone + "</a>";\
var tempDiv = document.getElementById(id);\
tempDiv.innerHTML = tempPhone;\
} </SCRIPT>\
\
<TABLE width="95%" border="0" align="center">\
<TR>\
<TD><img src="images/Austin2.jpg" width="120"></TD>\
\
<TD>\
<b>Ching-yu (Austin) Huang, Ph.D.  黃清郁  博士</b>\
<br>\
Associate Professor, \
<a href="https://www.kean.edu/academics/programs/computer-science" target="_blank">School of Computer Science & Technology</a>, \
<a href="http://www.kean.edu" target="_blank">Kean University</a>\
<br>\
\
Office: Green Lane Academic Building (GLAB) 217,  \
Kean University, 1000 Morris Ave., Union, NJ 07083\
<div id="myphone">\
Phone: <a href="javascript:getPhone(\'myphone\',\'908\',\'737-6157\');">click to get phone number</a>\
</div>\
Fax: (908)737-6165\
<br> \
<div id="myemail">\
Email: <a href="javascript:getEmail(\'myemail\',\'chuang\',\'kean.edu\');">click to get email</a>\
</div>\
\
</TD>\
</TABLE>\
\
<TABLE width="95%" border="0" align="center">\
<TR><TD>\
<UL id="tabs">\
 <li id="about"> <a href="about.html"><b>About me</b></a></li>\
 <li id="teaching"> <a href="teaching.html"><b>Teaching</b></a></li>\
 <li id="research"> <a href="research.html"><b>Research</b></a></li>\
 <li id="publications"> <a href="publications.html"><b>Publications</b></a></li>\
 <li id="resource"> <a href="resource.html"><b>Resource</b></a></li>\
 <li id="newss"> <a href="news.html"><b>News</b></a></li>\
 <li id="presentations"> <a href="presentations.html"><b>Presentations</b></a></li>\
 <li id="services"> <a href="services.html"><b>Services</b></a></li>\
</UL>\
</TD>\
</TABLE>\
');

