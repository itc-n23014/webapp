# プロジェクトの内容
都市名を指定し、各地の天気、気温を表示し、その場所に関連する画像を背景画像として表示にするアプリ。

# 使用したAPI
①OpenWeatherMap(世界各地の天気のデータ)  
②Flickr(画像データ)  

# それぞれのコンポーネントの説明

## ImageFetcher.js (FlickrAPIを使用して指定された都市の画像を取得する)
1.useEffectを使用し、$cityNameが変更された、或いはマウントされた際に、
画像を取得する処理を実行。
2.fetchCityImage関数内で、指定された年に基づきAPIにリクエストを送信し、
画像情報を取得する。
3.画像データを元に構築されたURLをstateのsetCityImage関数で代入し、
親コンポーネントにURLを渡す。

## WeatherDataFetcher.js

## WeatherFetcher.js

## WeatherInfo.js

## header.js

weather.js
