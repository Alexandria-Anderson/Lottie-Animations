# Beaker Animation using Lottie, After Effects, and Javascript


## Demo: Dynamically edit the colors in a Lottie JSON file using Javascript. 

1. Download the [Bodymovin](https://exchange.adobe.com/apps/cc/12557/bodymovin) plugin for Adobe After Effects. This allows you to convert you AE composition into a Lottie JSON file, and other handy file formats!
   
3. After you export your JSON file, replace the default fields in main.js with the relative file path to your JSON file.
   
4. Storing your new color values:
   
   `let color_values = {
    0: [.1, .3, .98, 1], 
    1: [.1, .3, .98, 1],
    2: [.1, .3, .98, 1],
    3: [.1, .6, .6, 1],
    4: [.1, .6, .6, 1],
    5: [.1, .6, .6, 1],
    6: [.1, .6, .6, 1],
    7: [.1, .6, .6, 1],
    8: [.1, .5, .8, 1],
    9: [.1, .5, .8, 1]
}`
  **color_values** is where you will store your new color data. 
   The Lottie JSON expects a value between 1 and 0 (inclusive) to determine its rgba values. Convert your values from the 0...255 scale by simply dividing by 255.
   10 new values are listed here, each corresponding to the layer I want to edit in my animation. 
   
6. When **indexing** the JSON file, change the loop parameters to reflect the properties of your AE composition layers. The Bodymovin plugin perserves your layer names and order, so the loop's range will be unique to your composiiton. You can view each layer in the "layers" subfield of the JSON data. "nm" and "ind" show you the layer's name and index, respectively. The **ind** fields of your JSON data will help you determine your loop parameters.
   
8. To view the animation in a browser using VSCode, use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin. Once enabled, right click on the index.html file in the file explorer in VSCode. Click **Open with Live Server**, and your animation will update in a browser when **color_values** is changed!

   Note: Keep your animations simple. Lottie does not support certain AE special effects and transformation.
   
   Another note: This demo is meant to be integrated into a webpage, and the HTML element found in index.html can be embedded into any file. **color_values** can be edited however you want, as long as an array with four floats between 0 and 1 are passed to the JSON file! Additionally, you can change the height, width, and other style aspects directly in the HTML file.

For more information about Lottie, click [here](https://lottiefiles.com/blog/working-with-lottie-animations/how-to-add-lottie-animation-in-web-page-html/)!
