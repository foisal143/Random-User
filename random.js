const user = 'https://randomuser.me/api/?gender=female';
const country = 'https://restcountries.com/v3.1/all';
const countryCode = 'https://restcountries.com/v3.1/alpha/{code}';

const loadData = () => {
  fetch(user)
    .then(res => res.json())
    .then(data => showData(data));
};

const showData = datas => {
  const img = datas.results[0].picture.thumbnail;
  const name = datas.results[0].name.first + ' ' + datas.results[0].name.last;
  const email = datas.results[0].email;
  const cell = datas.results[0].cell;

  const container = document.getElementById('container');
  container.innerHTML = `
  <div class="card">
        <img src="${img}" alt="" class="img">
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${cell}</p>
      </div>
      <button onclick="loadData()" id="skip">Skip</button>`;
};

loadData();
