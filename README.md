# mithril-bootstrap-carousel
Mithril component for a bootsrap image carousel

## Example usage
```
var m = require("mithril");
var carousel = require("../mithril-carousel");

module.exports = {
    images = [
      {path: "img/welcome_01.jpg", caption: "Welcome 01"},
      {path: "img/welcome_02.jpg", caption: "Welcome 02"},
      {path: "img/welcome_03.jpg", caption: "Welcome 03"}
    ],
    view: (vnode)=>{
      return m(".container", m(carousel,{ images: this.images, indicator: true, control: true } ) )
    }
}
```

## Options
images: An array of image object where only **path** is required.

indicator: Boolean to display or not the indicators.

control: Boolean to display or not the controls.
