const DOMAIN = 'https://www.theaudiodb.com';
//const API_KEY = 'https://www.theaudiodb.com'
//const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
const getOptions = async (title) => {
  const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artists}` //where we get the data f


        try {
          const response = await axios.get(url)
          const artistList = response.data.Search
          console.log(artistList)
          // const list = Object.keys(response.data.message)
           optionValues(artistList)

        } catch (error) {
          console.log(error)
        }
}
const renderList = (artistArray) => {
  return artistArray.forEach((artists) => {
    let artistInfo = `
    <a href="${BASE_URL}i=${artists.strArtist}">${artist.strArtist}</a>
  `;
    const listContainer = document.querySelector('.artist-list');
    listContainer.insertAdjacentHTML('beforeend', artistInfo);
  })
};


function optionValues(list) {
 
  const select = document.querySelector('#artistSlide')
  console.log(select)
  return list.forEach((artist) => {
    const option = document.createElement('p')
    option.value = `${artist}`
    
    option.textContent = `
     ${artists.strArtist} 
     ${artists.intFormedYear} 
     ${artists.istrLabel}
     ${artists.strBiographyEN}
     ${artists.strGenre}
     ${artists.strWebsite}
     `
    select.append(option)
  })
}


function getValue(event) {
  event.preventDefault()
  const optionValues = document.querySelector('#blank')
  getOptions(optionValues.value)
}

const form = document.querySelector('#search')
form.addEventListener('click', getValue)
