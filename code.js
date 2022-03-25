var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bola = createSprite(50,250,10,10);

bola.velocityY = 6;
bola.velocityX = 7;

 var parede = createSprite(330,300,20,100);
 parede.shapeColor = "purple";
 
function draw() {
  background("white");
  if(bola.isTouching(parede)){
   bola.x = 10;
  }
  createEdgeSprites();
  bola.bounceOff(edges);
  
  if(keyDown(UP_ARROW)) {
    bola.velocityX = 0;
    bola.velocityY = -5;
  }
  if(keyDown(DOWN_ARROW)){
   bola.velocityX = 0;
   bola.velocityY = 5;   
  }
  if(keyDown(LEFT_ARROW)){
   bola.velocityX= -5;
   bola.velocityY= 0;
  }
  if(keyDown(RIGHT_ARROW)){
   bola.velocityX= 5;
   bola.velocityY= 0;
  }
  
  drawSprites();

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
