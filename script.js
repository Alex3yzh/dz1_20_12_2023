$(document).ready(function () {
  function getAstronauts(agency) {
    $.ajax({
      url: "https://api.spacexdata.com/v4/crew",
      success: function (data) {
        $("#astronauts-list").empty();
        data.forEach(function (astronaut) {
          if (agency === "all" || astronaut.agency === agency) {
            $("#astronauts-list").append(`
                          <div class="col-md-4 mb-4">
                              <div class="card">
                                  <img src="${astronaut.image}" class="card-img-top" alt="${astronaut.name}">
                                  <div class="card-body">
                                      <h5 class="card-title">${astronaut.name}</h5>
                                      <p class="card-text">Agency: ${astronaut.agency}</p>
                                      <a href="${astronaut.wikipedia}" class="btn btn-primary">Wikipedia</a>
                                  </div>
                              </div>
                          </div>
                      `);
          }
        });
      },
    });
  }

  getAstronauts("all");

  $(".filter-btn").click(function () {
    var agency = $(this).data("agency");
    getAstronauts(agency);
  });
});
