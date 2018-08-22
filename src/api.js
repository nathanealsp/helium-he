async componentDidMount() {
  const res = await fetch('https://api.citybik.es/v2/networks');
  const cityBikes = await res.json();

  console.log('cityBikes.networks', cityBikes.networks);
  console.log('cityBikes', cityBikes.networks);
  console.table(cityBikes.networks.filter(item => item.location.city === 'Boston, MA'));
}

// await fetch('https://api.citybik.es/v2/networks/hubway').then(results =>
//   results.json().then(cityBikes => {
//     console.log(cityBikes.networks);
//     console.log(cityBikes);
//     // console.log(cityBikes.networks.filter(item => item.location.city === 'Boston, MA'));
//   })
//     ));

// }