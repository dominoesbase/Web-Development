# Google Maps Embed ![Image](https://img.shields.io/pypi/status/Django.svg)

## Description
This feature aims to facilitate the incorporation of Google Maps on your website.

## Incorporate
In your HTML project you should add the following:
```html
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=[YOUR-API-KEY]"></script>
<script type="text/javascript" src="js/GoogleMapInfo.js"></script>
<script type="text/javascript" src="js/GoogleMap.js"></script>
```
Note: enter your Api Key. [Read More!](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Add your Information
Change the information on GoogleMapInfo.js according to your preferences.
```javascript
var mapsInfo = new Array(
                 38.729792, // latitude
                 -9.164625, // longitude
                 "url('./img/pin.png')", // image pin
                 'CHANGE ALERT TEXT', // alert user
                 true, // default UI
                 '40px', // width pin
                 '40px', // height pin
                 14); // zoom map
```
## Author
* [dominoesbase](https://twitter.com/jorgedominoes)
