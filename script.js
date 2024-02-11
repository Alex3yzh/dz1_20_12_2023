$(document).ready(function () {
  $("#moveRectangle").click(function () {
    $("#rectangle").animate({ left: "250px" }, "slow");
    $("#rectangle").animate({ top: "250px" }, "slow");
    $("#rectangle").animate({ left: "50px" }, "slow");
    $("#rectangle").animate({ top: "50px" }, "slow");
  });

  $("#moveTriangle").click(function () {
    $("#rectangle").animate({ top: "250px", left: "50px" }, "slow");
    $("#rectangle").animate({ top: "50px", left: "200px" }, "slow");
    $("#rectangle").animate({ top: "50px", left: "50px" }, "slow");
  });

  let faded = false;
  $("#fadeInOut").click(function () {
    if (!faded) {
      $("#rectangle").animate(
        { width: "400px", height: "400px", opacity: "0" },
        "slow"
      );
      faded = true;
    } else {
      $("#rectangle").animate(
        { width: "50px", height: "50px", opacity: "1" },
        "slow"
      );
      faded = false;
    }
  });
});
