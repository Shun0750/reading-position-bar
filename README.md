## What's Reading Position Bar?

Reading Position Bar is an advanced scroll bar which can indicate how much the user has read the website.  
  
By showing the user how long it will take to finish reading the article, it can be expected that the reading rate will increase.

## Spec
- Node.js 14.6
- webpack 5.1.3
- webpack-cli 4.0.0

## How to integrate
##### 1. Add the javascript file built as below to your site's <head> tag.
```
<script type="text/javascript" src="reading-position-bar.min.js"></script>
```

##### 2. Call the function as below
You can specify an HTML DOM element to which add a reading position bar.

- without options
```
<script>
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('main').addReadingPositionBar()
})
</script>
```

- with options
```
<script>
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('main').addReadingPositionBar({
    bgColor: "#A34",
    showText: true,
    barWidth: "15px",
    right: "8px"
  })
})
</script>
```

## Options
|name|explanation|type|default value|example|
|---|---|---|---|---|
|bgColor|Indicator bar's background color|string|"black"|"#A34"|
|showText|Configuration if shows text box|boolean|true|false|
|barWidth|Indicator bar's width[px]|string|"10px"|"15px"|
|right|Indicator bar's position from right edge|string|"0"|"10px"|
|zIndex|Indicator bar's z-index|integer|1000|10000|

## Develop
1. Clone this repository
2. Run `docker-compose up`
3. Open `./sample/index.html` and edit files in `src` directory.