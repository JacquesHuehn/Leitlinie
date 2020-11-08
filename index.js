$(function() {
    $("input[name='chkPinNo']").click(function() {
      if ($("#chkYes").is(":checked")) {
        $("#OL1").show();
        $("#LV1").hide();
      } else {
        $("#OL1").hide();
        $("#LV1").show();

      }
    });
  });
 