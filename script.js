function Cat(breed, age, gender, color, name, photoUrl) {
  this.breed = breed;
  this.age = age;
  this.gender = gender;
  this.color = color;
  this.name = name;
  this.photoUrl = photoUrl;
  this.isSleeping = false;

  this.eat = function () {
    if (!this.isSleeping) {
      console.log(this.name + " is eating.");
    } else {
      console.log(this.name + " is sleeping and can't eat now.");
    }
  };

  this.sleep = function () {
    this.isSleeping = true;
    console.log(this.name + " is sleeping.");
  };

  this.wakeUp = function () {
    this.isSleeping = false;
    console.log(this.name + " woke up.");
  };
}

// Створення котиків
var cats = [
  new Cat(
    "Persian",
    3,
    "Male",
    "White",
    "Fluffy",
    "https://example.com/fluffy.jpg"
  ),
  new Cat(
    "Siamese",
    2,
    "Female",
    "Brown",
    "Mittens",
    "https://example.com/mittens.jpg"
  ),
  new Cat(
    "Maine Coon",
    4,
    "Male",
    "Black",
    "Shadow",
    "https://example.com/shadow.jpg"
  ),
  new Cat(
    "Sphynx",
    1,
    "Female",
    "Gray",
    "Sphinxie",
    "https://example.com/sphinxie.jpg"
  ),
];

// Відображення кнопок для котів
var catButtonsContainer = document.getElementById("cat-buttons");
cats.forEach(function (cat, index) {
  var button = document.createElement("button");
  button.textContent = cat.name;
  button.addEventListener("click", function () {
    showCatInfo(index);
  });
  catButtonsContainer.appendChild(button);
});

// Функція для відображення інформації про кота
function showCatInfo(index) {
  var catInfoContainer = document.getElementById("cat-info-container");
  catInfoContainer.innerHTML = "";

  var cat = cats[index];
  var catInfo = document.createElement("div");
  catInfo.className = "cat-info";
  catInfo.innerHTML = `
      <h3>${cat.name}</h3>
      <p>Порода: ${cat.breed}</p>
      <p>Вік: ${cat.age}</p>
      <p>Стать: ${cat.gender}</p>
      <p>Колір шерстки: ${cat.color}</p>
      <img src="${cat.photoUrl}" alt="${cat.name}">
      <button onclick="cats[${index}].eat()">Ask to Eat</button>
      <button onclick="cats[${index}].sleep()">Sleep</button>
      <button onclick="cats[${index}].wakeUp()">Wake Up</button>
    `;
  catInfoContainer.appendChild(catInfo);
}
