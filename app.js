let city = document.querySelector("title").textContent;
fetch("https://api.api-ninjas.com/v1/city?name=" + city, {
  headers: {
    "X-Api-Key": "dnVbIbknNq4wgV63Y/g6zA==II7Z3PyJsFkBKxC4",
  },
})
  .then((response) => response.json())
  .then((data) => {
    let infoElement = document.createElement("p");
    infoElement.textContent = "City inhabitants:";
    let infoText = document.createElement("span");
    infoText.textContent = ` ${data[0].population}`;
    infoElement.appendChild(infoText);
    document.querySelector(".destinationInfo").appendChild(infoElement);
  });
