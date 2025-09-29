// Base Animal class
class Animal {
  constructor(species) {
    this._species = species; // store species privately
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  // Cat specific method
  purr() {
    console.log("purr");
  }
}

// Dog class extending Animal
class Dog extends Animal {
  // Dog specific method
  bark() {
    console.log("woof");
  }
}

// Example usage:
// const myCat = new Cat("Siamese");
// myCat.makeSound(); // The Siamese makes a sound
// myCat.purr();      // purr

// const myDog = new Dog("Golden Retriever");
// myDog.makeSound(); // The Golden Retriever makes a sound
// myDog.bark();      // woof

