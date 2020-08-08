var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var response = JSON.parse(xhr.responseText);
    var responseHTML = "";
    for (var i = 0; i < response.length; i++) {
      if (response[i].isOnSale === true) {
        responseHTML += `<div class="eventListing" >
                    <h2>${response[i].name} </h2>
                    <img src="${response[i].imageUrl}" alt="The Event Image">
                    <h3>Duration: ${response[i].duration} minutes </h3>
                    <h3>Dates: ${response[i].instanceDates}</h3>
                    <h3>${response[i].attribute_EventTextExample}</h3>
                    <h3>${response[i].id.replace(/\D/g, "")}</h3>
                    </div>`;
      }
    }
    document.getElementById("resultList").innerHTML = responseHTML;
  }
};

// location to GET json from
xhr.open("GET", "url of GET");
xhr.send();
