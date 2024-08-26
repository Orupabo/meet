let icon = document.getElementById("icon");
icon.onclick = function name(params) {
  document.body.classList.toggle("darktheme");
  if (document.body.classList.contains("darktheme")) {
    icon.src = "moon.png";
  } else {
    icon.src = "sun.png";
  }
};

const btnSearch = document.querySelector(".btnSearch");
function searchDev() {
  const input = document.querySelector("#searchInput").value;

  fetch("https://api.github.com/users/" + input)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("name_user").innerHTML = `${data.name}`;
      document.getElementById("username").innerHTML = `${data.login}`;
      document.getElementById("date").innerHTML = `${
        data.created_at.split("T")[0]
      }`;
      document.getElementById("bio").innerHTML = `${data.bio}`;
      document.getElementById("repo").innerHTML = `${data.public_repos}`;
      document.getElementById("followers").innerHTML = `${data.followers}`;
      document.getElementById("following").innerHTML = `${data.following}`;
      document.getElementById("location").innerHTML = `${data.location}`;
      let userX = data.twitter_username;
      if (userX !== null) {
        document.getElementById(
          "twitter"
        ).innerHTML = `<a target="_blank"   href="https://x.com/${data.twitter_username}">${data.twitter_username}</a>`;
      } else {
        document.getElementById("twitter").innerHTML = "Not Available";
      }

    document.getElementById("profilePic").innerHTML = `<img  style="width:100px" src="${data.avatar_url}" alt="${data.name}">`;
    });
}

btnSearch.addEventListener("click", searchDev);
