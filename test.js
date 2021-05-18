// ==UserScript==
// @name        Download All Reports - libinsight.com
// @namespace   https://github.com/brooks1man
// @match       https://gsu.libinsight.com/dataseta.php
// @grant       none
// @version     1.0
// @author      -
// @description Adds a download all reports item to the admin menu when on a dataset page in LibInsight.
// @downloadURL 
// @homepageURL https://github.com/brooks1man/test
// ==/UserScript==

// START GET ALL REPORTS FUNCTION
var token = document.querySelector('input[name="csrf_token"]');

// Only if we find a CSRF token.
if(token) {
   li = document.createElement('li');
   li.innerHTML = '<a href="#" onclick="getAllReports()">Download All Reports</a>';
   ul = document.querySelector('#s-lg-admin-command-bar ul').children[6].children[1];
   ul.appendChild(li);
}

function getAllReports() {
   var url = "https://gsu.libinsight.com/dataseta.php?action=download&filter_sort=date-desc&uid=&from=1900-01-01&to=2200-12-31&filter=day_limit=21&hr_start=0&hr_end=24&uid=0&duration_op=&duration_min=0";
   url += "&csrf_token=" + token.value;
   const datasetIds = [
      4698,
      4878,
      5011,
      23318
   ];

   datasetIds.forEach(function(id){
      let a = document.createElement('a');
      a.href = url + '&id=' + id;
      document.body.appendChild(a);
      a.setAttribute('target', '_blank');
      a.click();
      a.remove();
   });
}
// END GET ALL REPORTS FUNCTION
