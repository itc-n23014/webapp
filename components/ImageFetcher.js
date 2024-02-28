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
          const photo = data.photos.photo[0] // ネストされた構造のため、必要な処理
          if (photo) {
            const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            setCityImage(imageUrl) // URLの構築
          } else {
            setCityImage(null)
            console.error('写真が見つかりませんでした')
          }
        } else {
          setCityImage(null)
          console.error('写真の読み込みに失敗しますた')
        }
      } catch (error) {
        console.error('写真が見つかりませんでした:', error)
      }
    }

    if (cityName.trim() !== '') {
      fetchCityImage()
    }
  }, [cityName, setCityImage])

  return null
}

export default ImageFetcher
