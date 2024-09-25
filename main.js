/* You can view this by using the Liver Server plugin in VSCode. There are different ways to run this including with Node.js, but I will let you decide what works best. The Lottie library is pretty well documented, so you shouldn't have a problem.*/
import Lottie from 'https://cdn.skypack.dev/lottie-web';
/*Put the rgba values you want to use in here. if the value is 0-255, just divide by 255. Lottie expects a color value of 0-1.*/
let color_values = {
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
};

// Fetch the JSON data
fetch('beaker_animated.json')
  .then(response => response.json())
  .then(data => {
    let beaker_animated = data;
    let x = 0;

    /*This is the indexing you use to get to the color values in the JSON file. If you want to dig through the JSON file, the layers that you want to change are labeled "slot _". You only want to acess every-other index 121 - 101. For example: 121, 119, 117, ... , 103, 101. These correspond to each of the 10 liquid layers. */
    
   for (let i = 103; i < 122; i += 2){
    beaker_animated.layers[i].shapes[0].it[1].c.k = color_values[x];
    x++;
   }
    console.log(beaker_animated.layers[117].shapes[0].it[1].c.k);

    // Rendering the animation
    Lottie.loadAnimation({
        container: document.getElementById('animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: beaker_animated 
    });
  })
  .catch(error => console.error('Error loading the JSON file:', error));
