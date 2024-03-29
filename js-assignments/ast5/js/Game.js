'use strict';

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class Game {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.element = this.createElement();
    this.parentElement.appendChild(this.element);

    this.isSpaceBarPressed = false;
    this.currentState = Game.states.START_SCREEN;
  }
  static get width() {
    return 480;
  }
  static get height() {
    return 640;
  }
  static get states() {
    return GAME_STATES;
  }
  init() {
    this.createElement();
    this.createGameLayers();
    this.render();
  }

  createElement() {
    const element = document.createElement('div');
    element.classList.add('game');
    element.style.width = Game.width + 'px';
    element.style.height = Game.height + 'px';
    return element;
  }

  createGameLayers() {
    this.background = new Background(this);
    this.gameLayer = new GameLayer(this);
  }

  render() {
    this.background.draw();
  }

}


const game = new Game(document.getElementById('app'));
game.init();