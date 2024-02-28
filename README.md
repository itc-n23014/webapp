# プロジェクトの内容
都市名を指定し、各地の天気、気温を表示し、その場所に関連する画像を背景画像として表示にするアプリ。

# 使用したAPI
①OpenWeatherMap(世界各地の天気のデータ)  
②Flickr(画像データ)  

# それぞれのコンポーネントの説明

## ImageFetcher.js (FlickrAPIを使用して指定された都市の画像を取得する)
1.useEffectを使用し、$cityNameが変更された、或いはマウントされた際に、
画像を取得する処理を実行。
2.fetchCityImage関数内で、指定された都市に基づきAPIにリクエストを送信し、
画像情報を取得する。
3.画像データを元に構築されたURLをstateのsetCityImage関数で代入し、
親コンポーネントにURLを渡す。

## WeatherFetcher.js
1.useEffectを使用し、$cityNameが変更された際に、フェッチが実行される。
2.fetchWeatherData関数内で、APIを使用し、都市の天気データを取得する。データは
setWeatherData関数を介し親コンポーネントに渡される。

## WeatherInfo.js(受け取った天気情報と都市の画像を使いページの表示を行う)
1.weatherDataは天気情報が含まれるオブジェクト型データです。cityImageは背景画像としてもってきた画像のURLです。
2.JSX内に、ページに表示される情報であるcityImageとweatherDataが書かれています。
3.天気のアイコンはWeatherIconコンポーネントにより表示されます。

## header.js
特になし

## weather.js (天気の状態に応じて異なる天気アイコンを表示する, ※外部CSS）
1.Weather Iconsというアイコンライブラリから提供されているCSSクラスを使用。
（OpenWeatherMapのデフォルトの写真が小さすぎて表示できなかったため）
2.


