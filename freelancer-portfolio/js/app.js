document.addEventListener('DOMContentLoaded', function () {
  loadPortfolio();
});

async function loadPortfolio() {
  const url = 'data.json';

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
