// ImageFetcher.js
import { useEffect } from 'react'

const ImageFetcher = ({ cityName, setCityImage }) => {
  useEffect(() => {
    const fetchCityImage = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_FLICKR_API_KEY
        const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${cityName}&per_page=1`
        const response = await fetch(apiUrl)
        if (response.ok) {
          const data = await response.json()
          const photo = data.photos.photo[0]
          if (photo) {
            const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            setCityImage(imageUrl)
          } else {
            setCityImage(null)
            console.error('No image found for the city')
          }
        } else {
          setCityImage(null)
          console.error('Failed to fetch city image')
        }
      } catch (error) {
        console.error('Error fetching city image:', error)
      }
    }

    if (cityName.trim() !== '') {
      fetchCityImage()
    }
  }, [cityName, setCityImage])

  return null
}

export default ImageFetcher
