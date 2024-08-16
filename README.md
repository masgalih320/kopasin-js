# KopasinJS

**kopasin-js** is a lightweight and customizable JavaScript library designed to add copy-paste functionality to your web projects. With `kopasin-js`, you can effortlessly enable users to copy and paste text with minimal setup and maximum flexibility. This library use 0% of JQuery.

![License](https://img.shields.io/npm/l/kopasin-js)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/masgalih320/kopasin-js/total)
![npm bundle size](https://img.shields.io/bundlephobia/min/kopasin-js)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/masgalih320/kopasin-js)

## Features

- **Simple Setup:** Easy to integrate with just a few lines of code.
- **Customizable:** Tailor the library to fit your specific needs.
- **Lightweight:** Minimal impact on your project's performance.
- **Cross-Browser Support:** Works seamlessly across modern web browsers.

##  Visits

- [Demo Site](https://kopasin-js.galih.me)
- [Portfolio](https://galih.me)
- [Galih Blogs](https://masgalih.net)

## Installation

To get started with `kopasin-js`, you can either include it via CDN or install it via npm.

### Using CDN

Add the following script to your HTML:

```html
# USING CDN
<script src="https://cdn.jsdelivr.net/npm/kopasin-js@latest/dist/kopasin-js.global.js"></script>
# OR
<script src="https://unpkg.com/kopasin-js@1.1.7/dist/kopasin-js.global.js"></script>

# USING DOWNLOADED FILES
<script src="dist/kopasin-js.global.js"></script>
```

## With Import

Install via NPM

```bash
npm i kopasin-js
```

And then import the library

```js
import KopasinJS from "kopasin-js"
```

## Example Usage

### Copying Text from an Input

To copy a value from input element, we need to create 2 element, which is the `<input />` element and `<button></button>` element

```html
<input type="text" id="copy-this" value="Copy Me" readonly>
<button type="button" id="copy-button">Copy</button>
```

After that, load KopasinJS like this

```js
new Kopasin({
  copy: {
    on: 'click',
    trigger: document.getElementById('copy-button'),
    source: document.getElementById('copy-this'),
    success: function () {
      console.log('Copied!')
    },
    error: function () {
      console.log('Failed to copy')
    }
  },
});
```

The `success` and `error` callback is optional, but you can use the `success` callback for improving the user experience with interactivity after copying is successful.

### Copying Text from an Element

To copy a value from an element (example: `<div>`), we also need to create 2 element, which is the `<div></div>` element and `<button></button>` element.

```html
<div id="copy-this">Copy Me</div> <!-- You can also use another element like <p>, <span> and anything -->
<button type="button" id="copy-button">Copy</button>
```

For the javascript code is still same.

```js
new Kopasin({
  copy: {
    on: 'click',
    trigger: document.getElementById('copy-button'),
    source: document.getElementById('copy-this'),
    success: function () {
      console.log('Copied!')
    },
    error: function () {
      console.log('Failed to copy')
    }
  },
});
```

## Options for `copy`

| Key     | Type        | Description                                                                                                            | Required | Default Value |
|---------|-------------|------------------------------------------------------------------------------------------------------------------------|----------|---------------|
| on      | String      | The event that will be used to trigger the element in the `trigger` option, must be valid event for `addEventListener` | yes      | click         |
| trigger | HTMLElement | This element will be used to trigger the copy process                                                                              | yes      |               |
| source  | HTMLElement | Element that you want to copy the value/text from                                                                      | yes      |               |
| success | Function    | Function that will fired after copying is done                                                                         | no       | () => {}      |
| error   | Function    | Function that will fired after copying is failed                                                                       | no       | () => {}      |

## Options for `paste`

| Key     | Type                            | Description                                                                                                            | Required | Default Value |
|---------|---------------------------------|------------------------------------------------------------------------------------------------------------------------|----------|---------------|
| on      | String                          | The event that will be used to trigger the element in the `trigger` option, must be valid event for `addEventListener` | yes      | click         |
| trigger | HTMLElement                     | This element will be used to trigger the pasting process                                                               | yes      |               |
| target  | HTMLInputElement \| HTMLElement | Target element that the value/text will replaced with a value from your clipboard                                      | yes      |               |
| success | Function                        | Function that will fired after pasting is done                                                                         | no       | () => {}      |
| error   | Function                        | This function will fired if pasting are failed                                                                         | no       | () => {}      |

## Donate

If you have used this library and it's useful for you, please consider to donate:

[Saweria](https://saweria.co/sukristyan)

## License

The KopasinJS is open-sourced software licensed under the [MIT license](/LICENSE.md).