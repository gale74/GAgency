let city = document.querySelector("title").textContent;
fetch("https://api.api-ninjas.com/v1/city?name=" + city, {
  headers: {
    "X-Api-Key": "dnVbIbknNq4wgV63Y/g6zA==II7Z3PyJsFkBKxC4",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //population
    let infoElement = document.createElement("p");
    infoElement.textContent = "City inhabitants today:";
    let infoText = document.createElement("span");
    infoText.textContent = ` ${data[0].population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
    infoElement.appendChild(infoText);
    document.querySelector(".destinationInfo").appendChild(infoElement);
    //population
    //cordinates
    let cordinatesContainer = document.createElement("div");
    cordinatesContainer.classList.add("cordinatesContainer");
    let infoElement2 = document.createElement("p");
    infoElement2.textContent = "City latitude:";
    let infoText2 = document.createElement("span");
    infoText2.textContent = ` ${data[0].latitude}`;
    infoElement2.appendChild(infoText2);
    cordinatesContainer.appendChild(infoElement2);
    let infoElement3 = document.createElement("p");
    infoElement3.textContent = "City longitude:";
    let infoText3 = document.createElement("span");
    infoText3.textContent = ` ${data[0].longitude}`;
    infoElement3.appendChild(infoText3);
    cordinatesContainer.appendChild(infoElement3);
    document.querySelector(".destinationInfo").appendChild(cordinatesContainer);
    //cordinates
  });
