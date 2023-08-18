const typeSystemSlider = document.body.querySelector("#systemSlider");
const typeSystemSliderValue = document.body.querySelector(
  "#order-slider__value"
);
typeSystemSliderValue.innerHTML = typeSystemSlider.value;

typeSystemSlider.oninput = function () {
  typeSystemSliderValue.innerHTML = this.value;
};

// form
function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Отправка!");

  const formData = new FormData(this);

  const jsonData = {};
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  fetch("https://example.com/api/endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error: " + response.status);
    })
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const orderForm = document.querySelector("#order-form");
orderForm.addEventListener("submit", handleFormSubmit);

// File upload
const fileInput = document.body.querySelector("#order-slider__file");

function showFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    console.log(reader.result);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };

  console.log(`File name: ${file.name}`); // например, my.png
  console.log(`Last modified: ${file.lastModified}`); // например, 1552830408824
}

showFile(fileInput);
