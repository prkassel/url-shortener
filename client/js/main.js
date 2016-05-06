$(document).ready(function() {
  var url = '/new/';
 $("#search").keyup(function() {
  var value = encodeURIComponent($(this).val());
    $('#link').attr('href', url + value);
  });
});