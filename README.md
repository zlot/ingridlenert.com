Website for ingridlenert.com

## Steps for TexturePacker
* Export out sprite anims as svg's. Export out at twice the size of what they will be actually displayed as.
* Texture format: PNG-8 if possible
* Scaling variants: generic @2x and apply
* Tick Detect identical sprites
* Publish sprite sheet

### In the resulting .png's and .css files:
* Open the 1x css file
* Change the background image to point to the @2x file
* Set a background-size property on .sprite to be the exact size of the 1x png file
* You're ready to rock n' roll

## License
Only the underlying source code used to format and display the content on ingridlenert.com is licensed under the [MIT license] http://opensource.org/licenses/mit-license.php)