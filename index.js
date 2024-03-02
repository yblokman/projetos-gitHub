const repositorios = document.querySelector(".containerBox");

function getApi() {
  fetch("https://api.github.com/users/yblokman/repos").then(async (res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    let data = await res.json();

    data.map((item) => {
      let projectBox = document.createElement("div");

      let dataIso = item.created_at;
      let dataObject = new Date(dataIso);

      let day = dataObject.getDate();
      let month = dataObject.getMonth() + 1;
      let year = dataObject.getFullYear();

      let dataFormatada =
        day.toString().padStart(2, "0") +
        "/" +
        month.toString().padStart(2, "0") +
        "/" +
        year;

      projectBox.innerHTML = `
      <div class="projectBox">
      <div class="projectHeader">
        <img src="src/assets/folder_svg.svg" alt="folder" />
        <p class="projectName">${item.name}</p>
      </div>
      <p class="projectName">
        <a href="${item.homepage}" target="_blank">Visitar Projeto</a>
      </p>
      <div class="footerProject">
        <div class="communitProject">
            <p class="projectName">${"Criação: " + dataFormatada}</p>
        </div>
        <div class="techBox">
          <img
            src="src/assets/Ellipse 2.svg"
            alt="techEllipse"
            class="ellipseTech"
          />
          <p class="projectName">${item.language}</p>
        </div>
      </div>
    </div>`;
      repositorios.appendChild(projectBox);
    });
  });
}

getApi();
