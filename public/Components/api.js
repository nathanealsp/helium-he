const url = 'https://api.citybik.es/v2/';
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
