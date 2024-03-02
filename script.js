const repositorios = document.querySelector("containerBox");

function getApi() {
  fetch("https://api.github.com/users/yblokman/repos").then(async (res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    let data = await res.json();
    console.log(data);
  });
}
getApi();
