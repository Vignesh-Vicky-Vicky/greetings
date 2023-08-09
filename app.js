$(function () {
  const inputField = $(".login-page input");
  const loginBtn = $(".login-page a");

  inputField.on("input", function () {
    const value = $(this).val().trim().toLowerCase();

    if (value === "zinal" || value === "akdu") {
      $("body").addClass("active");
      $(this).val("").hide();
      loginBtn.show().siblings("p").show();
    }
  });
});
