const DOMAIN = 'https://www.theaudiodb.com';
const API_KEY = 'https://www.theaudiodb.com/api/v1/json/1/';
const BASE_URL = `${DOMAIN}`;
const getOptions = async (artist) => {
  const url = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artists}';

       // try {
          //const response = await axios.get(url,)
          //const artistList = response.data.Search
          //console.log(artistList)
          //const list = Object.keys(response.data.message)
          // optionValues(artistList)

       // } catch (error) {
          //console.log(error)
      //  }
}
response.forEach((artist) => {
 // console.log(artist)

  const artistDiv = document.querySelector('.artist')
  console.log(artistDiv)
  //const artistReturn = document.createElement('div')
  artistDiv.className = `artist-data`
  artistDiv.append(artistsReturn)

  const name = document.createElement('p')
  const artistName = artist.strArtist
  name.textContent = `${artistName}`
  artistDiv.append(name)


  const img = document.createElement('img')
  img.setAttribute('src', artist.artistLogo)
  personDiv.append(img)
  
  const bio = document.createElement('bio')
  const artistBio = artist.bio
  bio.textContent = artistBio
  artistDiv.append(bio)

  //const ageTag = document.createElement('age')
  //ageTag.textContent = "age": ${person.dob.age}
  //personDiv.append(ageTag)


});



function getValue(event) {
  event.preventDefault()
  const optionValues = document.querySelector('#blank')
  getOptions(optionValues.value)
}

const form = document.querySelector('#search')
form.addEventListener('click', getValue)
