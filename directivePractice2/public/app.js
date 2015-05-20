// create a module called gemStore
  var app = angular.module('', []);

// create a controller called StoreController
  app.controller('', function(){

// set gems as a property of the controller, i.e. product will be a property of 'StoreController' (this means we can access the gems variable inside the controller)
    this. = ;
  });

// create a 'gems' variable inside our app.js
  var gems = [{
      name: 'Azurite',
      price: 2.95,
      canPurchase: true,
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      image: '/images/Azurite.jpg'
    },{
      name: 'Zircon',
      price: 5.95,
      canPurchase: true,
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      image: '/images/Zircon.jpg'
    }, {
    name: 'Malachite',
      price: 9.95,
      canPurchase: false,
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      image: '/images/Malachite.jpg'
    }];
