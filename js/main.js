class Cat {
  @addColor
  speak() {
    return `Meow Meow!`;
  }
}

function addColor(target) {
  target.color = 'black';
}

const a1 = new Cat();

console.log('a1 color is', a1.color);
