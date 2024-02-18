class Cat {
  constructor(
    catName,
    catAge,
    catType,
    catGender,
    catColor,
    catStatus,
    catPhoto,
    catPhotoSleep
  ) {
    this.name = catName;
    this.age = catAge;
    this.type = catType;
    this.gender = catGender;
    this.color = catColor;
    if (typeof catStatus == "string") {
      catStatus = false;
    }
    this.isSleep = catStatus;
    this.photo = catPhoto;
    this.photoS = catPhotoSleep;
  }

  sleep = function () {
    if (this.isSleep == true) {
      console.log(this.name, "is sleeping");
    } else {
      console.log(this.name, "went to sleep");
      this.isSleep = true;
    }
  };
  wakeUp = function () {
    if (this.isSleep == true) {
      console.log(this.name, "woke up");
      this.isSleep = false;
    } else {
      console.log(this.name, "no sleep now");
    }
  };
  eat = function () {
    if (this.isSleep == true) {
      console.log(this.name, "can't eat now");
    } else {
      console.log(this.name, "is eating");
    }
  };
}

let cats = [];

$(document).ready(function () {
  cats = [
    new Cat(
      "Monika",
      4,
      "Mix",
      "Male",
      "Red",
      true,
      "img/cat1.png",
      "img/cat1_sleep.jpeg"
    ),
    new Cat(
      "Alise",
      8,
      "Scottish lop-eared",
      "Male",
      "Gray",
      false,
      "img/cat2.jpg",
      "img/cat2_sleep.jpg"
    ),
    new Cat(
      "Murka",
      2,
      "Siamese",
      "Female",
      "White and Black",
      false,
      "img/cat3.png",
      "img/cat3_sleep.jpg"
    ),
  ];
});

$(".btns").click(function (e) {
  let cat_id = e.target.id;
  let btns = document.querySelectorAll(".btns input");
  btns.forEach((btn) => {
    btn.classList.remove("active_btn");
  });

  e.target.classList.add("active_btn");
  console.log("Cat number:", cat_id);
  console.log(cats[cat_id]);
  cat_id = parseInt(e.target.id) - 1;
  displayCat(cats[cat_id]);
});

function displayCat(cat) {
  $("#img").html(`<img src="${cat.isSleep ? cat.photoS : cat.photo}" alt="">`);
  $("#name").html("Name: " + cat.name);
  $("#age").html("Age: " + cat.age + " year");
  $("#race").html("Race: " + cat.type);
  $("#gender").html("Gender: " + cat.gender);
  $("#color").html("Color: " + cat.color);
  $("#status").html("Status: " + (cat.isSleep ? "Sleeping" : "No sleep"));
  nowCat = cat;
}
