const jokeDiv = document.getElementsByClassName("app__bluepill-joke")[0];
const linkDiv = document.getElementsByClassName("app_redpill-link")[0];

function displayJoke() {
  const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw";

  jokeDiv.innerHTML = "Loading...";

  async function _fetchJoke() {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Could not fetch the joke!");
    }

    return response.json();
  }

  _fetchJoke()
    .then((jokeObj) => {
      if (jokeObj.type === "twopart") {
        jokeDiv.innerHTML =
          jokeObj.setup + "<br />" + jokeObj.delivery + "<br />" + "😁";
      } else {
        jokeDiv.innerHTML = jokeObj.joke + "<br />" + "😁";
      }
    })
    .catch(() => {
      jokeDiv.innerHTML = "Error!";
    });
}

function displayLink() {
  const a = document.createElement("a");
  var linkText = document.createTextNode("→→→");
  a.appendChild(linkText);
  a.title = "My site";
  a.href = "https://kishorneupane.com";
  linkDiv.appendChild(a);
}
