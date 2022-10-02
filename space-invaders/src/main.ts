import './style.css'
import { Application, Graphics,Sprite,Texture } from "pixi.js"


//test button excode  https://pixijs.io/examples/#/interaction/interactivity.js
const app = new Application();

document.querySelector("#app")?.append(app.view);

// create a background...
const background = Sprite.from("/picture/background.jpg");
background.width = app.screen.width;
background.height = app.screen.height;


app.stage.addChild(background);

const soundbuttonoff = Texture.from("./picture/mute_rb.png");
const soundbuttonon = Texture.from("./picture/sound_rb.png");
const buttons = [];
const buttonPositions = [
  175, 75,
];


  const button = new Sprite(soundbuttonoff);
  button.width=200;
  button.height=200;
  button.anchor.set(0.5);
  button.x = buttonPositions[0];
  button.y = buttonPositions[1];
  // make the button interactive...
  button.interactive = true;
  button.buttonMode = true;

  button
  // Mouse & touch events are normalized into
  // the pointer* events for handling different
  // button events.
      .on('pointerdown', onButtonDown)
      .on('pointerup', onButtonUp)
      .on('pointerupoutside', onButtonUp)
      .on('pointerover', onButtonOver)
      .on('pointerout', onButtonOut);
  // Use mouse-only events
  // .on('mousedown', onButtonDown)
  // .on('mouseup', onButtonUp)
  // .on('mouseupoutside', onButtonUp)
  // .on('mouseover', onButtonOver)
  // .on('mouseout', onButtonOut)

  // Use touch-only events
  // .on('touchstart', onButtonDown)
  // .on('touchend', onButtonUp)
  // .on('touchendoutside', onButtonUp)

  // add it to the stage
  app.stage.addChild(button);

  // add button to array
  buttons.push(button);


// set some silly values...
buttons[0].scale.set(1.2);
buttons[2].rotation = Math.PI / 10;
buttons[3].scale.set(0.8);
buttons[4].scale.set(0.8, 1.2);
buttons[4].rotation = Math.PI;

function onButtonDown(this: any) {
  this.isdown = true;
  this.texture = soundbuttonoff;
  this.alpha = 1;
}

function onButtonUp(this: any) {
  this.isdown = false;
      this.texture = soundbuttonoff;
}

function onButtonOver(this: any) {
  this.isOver = true;
  if (this.isdown) {
      return;
  }
  this.texture = soundbuttonon;
}

function onButtonOut(this: any) {
  this.isOver = false;
  if (this.isdown) {
      return;
  }
  this.texture = soundbuttonon;
}
