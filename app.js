const DOMAIN = 'https://www.theaudiodb.com';
const API_KEY = 'https://www.theaudiodb.com/api/v1/json/1/';
const BASE_URL = `${DOMAIN}`;
const getOptions = async (artist) => {
  const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

       try {
          const response = await axios.get(url)
          const artist = response.data.artists[0]
          
        
           console.log(artist)
           
           const artistName = document.querySelector('#artist-name')
           const artistBio = document.querySelector(`#artist-bio`)
           const artistTwitter = document.querySelector(`#artist-twitter`)
           const artistFacebook = document.querySelector(`#artist-facebook`)
           const artistLogo = document.querySelector(`#artist-logo`)
           const artistWebsite = document.querySelector(`#artist-website`)
         

           artistName.textContent = artist.strArtist
           artistBio.textContent = artist.strBiographyEN
           artistLogo.src = artist.strArtistLogo
           artistTwitter.textContent = artist.strTwitter
           artistFacebook.textContent = artist.strArtist
           artistWebsite.textContent = artist.strWebsite
           console.log(artistName)
          
         
         
        

       } catch (error) {
          console.log(error)
       }
}




function getValue(event) {
  event.preventDefault()
  const optionValues = document.querySelector('#blank')
  getOptions(optionValues.value)
}

const form = document.querySelector('#search')
form.addEventListener('click', getValue)
