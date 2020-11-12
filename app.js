const DOMAIN = 'https://www.theaudiodb.com';
const API_KEY = 'https://www.theaudiodb.com/api/v1/json/1/search.php?';
const BASE_URL = `${DOMAIN}`;
const getOptions = async (artist) => {
  const url = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artists}';

        try {
          const response = await axios.get(url)
          const artistList = response.data.Search
          //console.log(artistList)
          //const list = Object.keys(response.data.message)
           optionValues(artistList)

        } catch (error) {
          //console.log(error)
        }
}
const renderList = (artistArray) => {
  return artistArray.forEach((artists) => {
    let artistInfo = `
    <a href="${BASE_URL}i=${artists.strArtist}">${artist.strArtist}</a>
  `;
    const listContainer = document.querySelector('.artist-info');
    listContainer.insertAdjacentHTML('beforeend', artistInfo);
  })
};


function optionValues(artistList) {
 
  const select = document.querySelector('#artistData')
  console.log(select)
  return artistList.forEach((artistList) => {
    const option = document.createElement('div')
    //option.value = `${artist}`
    
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
