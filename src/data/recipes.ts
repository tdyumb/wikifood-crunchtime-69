
export const recipeData = [
  {
    id: '1',
    title: 'Ham and Cheese Omelet',
    description: 'A classic breakfast dish with ham and your choice of cheese.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'breakfast',
    dietaryRestrictions: [],
    cookTime: '10 mins',
    prepTime: '10 mins',
    servings: 1,
    ingredients: [
      '1 tablespoon butter',
      '3 large eggs',
      '3 tablespoons water',
      '1/8 teaspoon salt',
      '1/8 teaspoon pepper',
      '1/2 cup cubed or chopped meat of your choice (ex. ham, sausage, bacon, etc)',
      '1/4 cup shredded cheese of your choice (ex. cheddar cheese, cream cheese, Swiss cheese, etc)'
    ],
    instructions: [
      'Melt the butter over medium high heat and spread it around on the pan by tilting it.',
      'Whisk the eggs, water, salt, and pepper together until it froths.',
      'Pour the egg mixture into your pan and spread it around by tilting the pan.',
      'On one half of the pan, scatter the ham and cheese once the eggs are set evenly.',
      'Carefully fold the other half of the eggs over the filling.',
      'Slip the omelet onto a plate and serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 510,
      protein: "41g",
      carbs: "2g",
      fat: "37g",
      fiber: "0g"
    }
  },
  {
    id: '2',
    title: 'Rise and Shine Parfait',
    description: 'A delicious layered yogurt parfait with fruit and granola.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'breakfast',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '0 mins',
    prepTime: '15 mins',
    servings: 4,
    ingredients: [
      '4 cups of yogurt of your choice',
      '2 cups of each fruit of your choice, chopped',
      '1/2 cup granola or cereal'
    ],
    instructions: [
      'Layer the yogurt, fruit(s), and granola/cereal into a glass or cup.',
      'Repeat layers as necessary.',
      'Serve and enjoy!'
    ],
    nutritionInfo: {
      calories: 259,
      protein: "13g",
      carbs: "48g",
      fat: "3g",
      fiber: "7g"
    }
  },
  {
    id: '3',
    title: 'Banana Oatmeal Pancakes',
    description: 'Fluffy pancakes with banana, oats and walnuts.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'breakfast',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '5 mins',
    prepTime: '10 mins',
    servings: 8,
    ingredients: [
      '2 cups pancake mix of your choice',
      '1 large firm banana, finely chopped',
      '1/2 cup oats',
      '1/4 cup chopped walnuts',
      'Optional: fruits, sugar, and whipped cream as toppings'
    ],
    instructions: [
      'Prepared the pancake batter according to package instructions.',
      'Stir in the banana, oats, and walnuts to the batter.',
      'Pour batter by 1/4 cupfuls onto a hot griddle or a pan on the stove.',
      'Flip the pancake when bubbles form on top.',
      'Cook until the second side is golden brown.',
      'Slide the pancakes onto a plate and add chopped walnuts and toppings as desired. Enjoy!'
    ],
    nutritionInfo: {
      calories: 703,
      protein: "31g",
      carbs: "80g",
      fat: "30g",
      fiber: "8g"
    }
  },
  {
    id: '4',
    title: 'Marmalade French Toast Sandwiches',
    description: 'Delicious French toast sandwiches with cream cheese and marmalade.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'breakfast',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '10 mins',
    prepTime: '15 mins',
    servings: 6,
    ingredients: [
      '8 oz whipped cream cheese',
      '12 slices bread of your choice',
      '3/4 cup marmalade flavor of your choice',
      '4 large eggs',
      '2 tablespoons milk',
      'Maple syrup, optional'
    ],
    instructions: [
      'Spread cream cheese over 6 slices of bread.',
      'Top the bread with marmalade and another slice of bread.',
      'Whisk the eggs and milk together in a separate bowl.',
      'Heat a skillet or a griddle over medium heat.',
      'Dip both sides of the sandwiches into the egg mixture.',
      'Place sandwiches in the skillet/griddle and cook 2-3 minutes on each side until it\'s golden brown.',
      'Plate the sandwiches and serve. Add syrup if desired. Enjoy!'
    ],
    nutritionInfo: {
      calories: 447,
      protein: "13g",
      carbs: "65g",
      fat: "16g",
      fiber: "2g"
    }
  },
  {
    id: '5',
    title: 'Pizza Lava Toast',
    description: 'Creative toast with melted cheese and pizza toppings.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800',
    cuisineType: 'italian',
    mealType: 'lunch',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '10 mins',
    prepTime: '5 mins',
    servings: 1,
    ingredients: [
      '2 teaspoons butter',
      '2 slices bread of your choice',
      '1 1/2 oz sliced mozzarella cheese, divided',
      '1/2 oz sliced pepper jack cheese',
      '1 tablespoon pizza sauce',
      '1/4 teaspoon italian seasoning, divided',
      '5 slices pickled jalapeno (optional)',
      '5 slices pepperoni (optional)',
      'Crushed red pepper, to taste',
      'Ground black pepper, to taste'
    ],
    instructions: [
      'Preheat oven to 375°F.',
      'Line a sheet pan with parchment paper.',
      'Spread butter onto both sides of each slice of bread and place it on the pan.',
      'Bake the bread for around 8 minutes. Halfway through, flip the bread to the other side. Bake until the bread is lightly browned on both sides.',
      'Cover the perimeter of one bread slice with half of the mozzarella cheese, leaving the middle part of the bread empty. The, top with the other slice bread.',
      'Use the back of a spoon to make an indentation in the middle of the bread slices, pushing down firmly to reach the bottom slice.',
      'Add the pizza sauce to the indentation, and sprinkle alf the Italian seasoning over the top.',
      'Cover with the remaining 1/2 oz mozzarella cheese and pepper jack, followed by the jalapeno and pepperoni if desired.',
      'Sprinkle the remaining Italian seasoning, crushed red pepper, and black pepper.',
      'Bake for around 5 minutes until the cheese is melted and golden-brown.',
      'Slice the bread in half once done and serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 703,
      protein: "31g",
      carbs: "80g",
      fat: "30g",
      fiber: "8g"
    }
  },
  {
    id: '6',
    title: 'Chorizo Street Tacos',
    description: 'Flavorful street tacos with spicy chorizo sausage.',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800',
    cuisineType: 'mexican',
    mealType: 'lunch',
    dietaryRestrictions: [],
    cookTime: '10 mins',
    prepTime: '10 mins',
    servings: 2,
    ingredients: [
      '1 chorizo sausage link, casing removed and meat crumbled',
      '2 tablespoons chipotle peppers in adobo sauce',
      '4 tortillas',
      '2 tablespoons chopped onion, or to taste',
      '2 tablespoons chopped fresh cilantro, or to taste (optional)'
    ],
    instructions: [
      'Combine crumbled chorizo and chipotle peppers in adobo sauce in a bowl.',
      'Heat a skillet over medium-high heat; add chorizo mixture and cook until crisp, 5 to 7 minutes. Transfer to a plate, reserving grease into the skillet.',
      'Heat tortillas in reserved grease in the skillet over medium heat until warmed, 1 to 2 minutes per side.',
      'Stack 2 tortillas for each taco, then fill with chorizo, onion, and cilantro.',
      'Plate the tortillas and serve with toppings and sauces if desired. Enjoy!'
    ],
    nutritionInfo: {
      calories: 262,
      protein: "10g",
      carbs: "26g",
      fat: "13g",
      fiber: "4g"
    }
  },
  {
    id: '7',
    title: 'Grilled Turkey and Swiss Sandwich',
    description: 'Classic sandwich with turkey, Swiss cheese and spinach.',
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'lunch',
    dietaryRestrictions: [],
    cookTime: '5 mins',
    prepTime: '10 mins',
    servings: 1,
    ingredients: [
      '1 tablespoon mayonnaise',
      '2 slices bread of your choice',
      '2 slices Swiss cheese',
      '2 slices of turkey meat, or to taste',
      '1/4 cup baby spinach, or to taste'
    ],
    instructions: [
      'Set oven rack about 6 inches from the heat source and preheat the oven\'s broiler.',
      'Spread mayonnaise on 1 side of each bread slice.',
      'Layer Swiss cheese, turkey, and spinach ono the mayonnaise-side of 1 bread slice; top with second bread slice.',
      'Place sandwich on a baking sheet.',
      'Broil for about 5 minutes in the preheated oven until heated through and cheese is bubbling.',
      'Plate and serve! Enjoy!'
    ],
    nutritionInfo: {
      calories: 577,
      protein: "38g",
      carbs: "35g",
      fat: "32g",
      fiber: "4g"
    }
  },
  {
    id: '8',
    title: 'Simple Egg Salad',
    description: 'Quick and easy egg salad with cucumber and ranch dressing.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'lunch',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '0 mins',
    prepTime: '10 mins',
    servings: 4,
    ingredients: [
      '6 hard-cooked eggs, chopped',
      '1/4 cup chopped cucumber',
      '3 tablespoons ranch dressing',
      '1 tablespoon mustard',
      'Salt and ground black pepper to taste'
    ],
    instructions: [
      'Mix together eggs, cucumber, ranch dressing, mustard, salt, and black pepper in a large bowl until well combined.',
      'Plate and serve! Enjoy!'
    ],
    nutritionInfo: {
      calories: 176,
      protein: "10g",
      carbs: "2g",
      fat: "14g",
      fiber: "0g"
    }
  },
  {
    id: '9',
    title: 'Fettuccine Alfredo with Ham',
    description: 'Creamy pasta dish with ham and Parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800',
    cuisineType: 'italian',
    mealType: 'dinner',
    dietaryRestrictions: [],
    cookTime: '10 mins',
    prepTime: '5 mins',
    servings: 8,
    ingredients: [
      '1 pound dry fettuccine pasta',
      '1 tablespoon butter',
      '6 oz diced cooked ham',
      '2 cups heavy cream',
      '1 cup grated Parmesan cheese',
      'Lightly salted water'
    ],
    instructions: [
      'Pour some lightly salted water to a large pot to boil.',
      'Add pasta and cook for around 8 to 10 minutes or until al dente; drain water after.',
      'In a medium saucepan over medium heat, melt butter.',
      'Stir the ham into the butter and cook for 1 min.',
      'Stir in cream to the ham and butter and heat through.',
      'Stir in the Parmesan to the sauce and cook until thick and smooth.',
      'Toss with cooked pasta.',
      'Plate and serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 516,
      protein: "17g",
      carbs: "43g",
      fat: "32g",
      fiber: "2g"
    }
  },
  {
    id: '10',
    title: 'Easy Egg Fried Rice',
    description: 'Simple fried rice with egg, vegetables and soy sauce.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800',
    cuisineType: 'chinese',
    mealType: 'dinner',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '15 mins',
    prepTime: '5 mins',
    servings: 4,
    ingredients: [
      '1 cup water',
      '2 tablespoons soy sauce',
      '1/2 teaspoon salt',
      '1 cup uncooked instant rice',
      '1 teaspoon vegetable oil',
      '1/2 onion, finely chopped',
      '1/2 cup sliced green beans or peas',
      '1 large egg, lightly beaten',
      '1/4 teaspoon ground black pepper'
    ],
    instructions: [
      'Boil the water, soy sauce, and salt together in a medium saucepan.',
      'Stir in the instant rice and remove from heat. Cover and let stand for 5 minutes.',
      'Heat oil in a medium skillet or wok over medium heat. Saute onions and green beans or peas in the oil for 2 to 3 minutes.',
      'Pour in beaten egg and fry for 2 minutes, scrambling egg while it cooks.',
      'Add cooked rice to egg mixture; mix well.',
      'Season with pepper.',
      'Plate and serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 106,
      protein: "4g",
      carbs: "16g",
      fat: "3g",
      fiber: "2g"
    }
  },
  {
    id: '11',
    title: 'BBQ Chicken Chopped Salad',
    description: 'Fresh salad with BBQ chicken, beans, corn and more.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'dinner',
    dietaryRestrictions: [],
    cookTime: '1 min',
    prepTime: '20 mins',
    servings: 6,
    ingredients: [
      '1 head lettuce, chopped',
      '15 oz black beans, rinsed and drained',
      '15 oz sweet corn, drained',
      '1 red bell pepper, chopped',
      '1 cup jicama, peeled and shredded',
      '1 cup carrots, shredded',
      '4 scallions, thinly sliced',
      '1/4 cup fresh basil, chopped',
      '1/4 cup fresh cilantro, chopped',
      '3 limes, divided',
      '1 (6 oz) package cooked chicken breast strips',
      '2 tablespoons barbeque sauce',
      '1 avocado- peeled, pitted, and cubed',
      'Barbeque sauce'
    ],
    instructions: [
      'Mix lettuce, black beans, corn, red bell pepper, jicama, carrots, scallions, basil, and cilantro together in a large bowl.',
      'Juice 2 limes and drizzle juice over salad.',
      'Toss salad lightly.',
      'Combine chicken and barbeque sauce in a microwave-safe bowl; heat for around 45 seconds until chicken is warmed through.',
      'Arrange chicken and avocado on top of salad and squeeze remaining lime over salad.',
      'Serve and enjoy!'
    ],
    nutritionInfo: {
      calories: 280,
      protein: "16g",
      carbs: "41g",
      fat: "8g",
      fiber: "13g"
    }
  },
  {
    id: '12',
    title: 'Stuffed Peppers',
    description: 'Bell peppers stuffed with ground beef, rice and cheese.',
    image: 'https://images.unsplash.com/photo-1675257163553-7b47b7e28f4a?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'dinner',
    dietaryRestrictions: [],
    cookTime: '40 mins',
    prepTime: '15 mins',
    servings: 4,
    ingredients: [
      '4 large bell peppers (any color)',
      '1 lb lean ground beef',
      '2 tablespoons chopped onion',
      '1 cup cooked rice',
      '1 teaspoon salt',
      '1 clove garlic, finely chopped',
      '1 can (15 oz) tomato sauce',
      '3/4 cup shredded mozzarella cheese'
    ],
    instructions: [
      'Heat oven to 350°F.',
      'Cut a thin slice from the end of each bell pepper to remove the top of the pepper. Remove seeds and membranes, then rinse.',
      'In a pot, add enough water to cover peppers. Heat to boiling; add peppers. Cook for about 2 minutes, then drain.',
      'Cook beef and onion over medium heat in a skillet for 8 to 10 minutes. Stir occasionally until the beef is brown, then drain the water.',
      'Stir in rice, salt, garlic and 1 cup of the tomato sauce. Cook until heated through.',
      'Stand peppers upright in a glass baking dish. Stuff peppers with the beef mixture, then pour remaining tomato sauce over peppers.',
      'After covering tightly with foil, bake for 10 minutes. Uncover and bake about 15 minutes longer or until peppers are tender.',
      'Remove from oven; immediately sprinkle with cheese.',
      'Plate and serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 390,
      protein: "29g",
      carbs: "49g",
      fat: "17g",
      fiber: "4g"
    }
  },
  {
    id: '13',
    title: 'Vegan Chocolate Cupcakes',
    description: 'Fluffy vegan chocolate cupcakes with vanilla buttercream.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'dessert',
    dietaryRestrictions: ['vegetarian', 'vegan'],
    cookTime: '20 mins',
    prepTime: '10 mins',
    servings: 16,
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '3/4 cup unsweetened cocoa or cacao powder, sifted if needed',
      '1 1/2 teaspoons baking soda',
      '1/2 teaspoon fine sea salt',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '1/2 cup neutral oil or light and fruity olive oil',
      '2 tablespoons apple cider vinegar or white vinegar',
      '1 teaspoon vanilla extract',
      '1 1/2 cups hot water',
      '1 cup vegan butter stick, softened to room temperature',
      '4 cups powdered sugar',
      '2-4 tablespoons non-dairy milk at room temperature',
      '2 teaspoons pure vanilla extract',
      '1/8 teaspoon fine sea salt'
    ],
    instructions: [
      'Preheat the oven to 350°F. Line a muffin pan with 16 cupcake liners.',
      'In a medium bowl, whisk the flour, cocoa powder, baking soda and salt until well blended.',
      'In another medium bowl, whisk the sugars with the oil, vinegar, and vanilla extract.',
      'Add the dry ingredients into the second medium bowl. Gently stir until the two mixtures blend together and the batter is thick.',
      'Pour in the hot water and stir until blended and the batter is mostly smooth.',
      'Pour or spoon the batter into the liners, filling about 3/4 of the way to the top.',
      'Bake for around 20-25 minutes until the tops of the cupcakes are springy when touched and when a toothpick inserted into the center of the cake comes out clean.',
      'Cool cupcakes in the pan then top with frosting if desired.',
      'For the vanilla buttercream: Add vegan butter sticks to a bowl and beat until light and fluffy using a mixer.',
      'Sift the powdered sugar if it\'s lumpy.',
      'Add the vanilla, salt, and sugar until well incorporated and the frosting is fluffy. If it seems too thick, thin it out with a splash of non-dairy milk. If it seems too thin, add 1/4 to 1/2 cup more of powdered sugar.'
    ],
    nutritionInfo: {
      calories: 409,
      protein: "2g",
      carbs: "61g",
      fat: "19g",
      fiber: "2g"
    }
  },
  {
    id: '14',
    title: 'Perfect Easy Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies with a perfect chewy texture.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'dessert',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '15 mins',
    prepTime: '15 mins',
    servings: 18,
    ingredients: [
      '1 3/4 cups all-purpose flour, spoon and leveled',
      '1/2 teaspoon baking soda',
      '1/2 teaspoon fine sea salt',
      '10 tablespoons unsalted butter',
      '3/4 packed brown sugar',
      '1/2 cup white sugar',
      '1 large egg',
      '1 large egg yolk',
      '2 teaspoons vanilla extract',
      '1/2 teaspoon espresso powder, optional',
      '1 3/4 cups semisweet chocolate chips'
    ],
    instructions: [
      'Preheat the oven to 325°F. Line a baking sheet with parchment paper.',
      'Melt the butter in a pan. Remove it from the heat when the butter is light brown and smells nutty. Set aside while you prepare the reamining ingredients.',
      'Whisk the flour, baking soda, and salt together in a medium bowl. Set aside.',
      'In a large bowl, whisk the brown sugar, white sugar, whole egg, egg yolk, vanilla, and melted butter together. Whisk in the espresso powder (optional).',
      'Add the dry ingredients into the large bowl in 3 parts, stirring gently until they disappear. Fold in most of the chocolate chips, saving a handful for adding to the tops of each scooped cookie before baking.',
      'Roll 1 1/2 tablespoons of cookie dough into balls, or use a medium cookie scoop. Add to the baking sheets, leaving 2 inches between the cookies to allow for spreading.',
      'Press a few extra pieces of chocolate into the tops of each cookie dough mound.',
      'Bake the cookies for 12-16 minutes, rotating the baking sheet once during baking, until golden brown around the edges but light in the middle.',
      'Let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely.',
      'Top with toppings or icing if desired then serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 217,
      protein: "3g",
      carbs: "29g",
      fat: "11g",
      fiber: "1g"
    }
  },
  {
    id: '15',
    title: 'Mini Lemon Blueberry Tarts',
    description: 'Delicate tarts with ricotta, lemon and fresh blueberries.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=800',
    cuisineType: 'french',
    mealType: 'dessert',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '15 mins',
    prepTime: '10 mins',
    servings: 24,
    ingredients: [
      '3/4 cup whole milk ricotta cheese',
      '3 large eggs',
      '2 tablespoons honey or maple syrup',
      '3/4 teaspoon vanilla extract',
      '1 tablespoon lemon zest',
      '1 teaspoon lemon juice',
      'Pinch of salt',
      '24 mini phyllo shells',
      '1 cup blueberries',
      'A handful of pomegranate seeds as garnish (optional)'
    ],
    instructions: [
      'Preheat the oven to 350°F. Line a baking sheet with parchment paper. Set aside.',
      'Whisk together ricotta cheese with eggs, honey, vanilla extract, lemon zest, lemon juice, and salt in a medium bowl.',
      'Place the phyllo cups on the prepared pan and fill each cup wit 1 tablespoon filling.',
      'Bake them for about 14-15 minutes until the filling is warm and the shells turn lightly golden brown.',
      'Allow them to cool for a few minutes. Garnish with blueberries and pomegranate seeds (if using) and serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 43,
      protein: "10g",
      carbs: "5g",
      fat: "2g",
      fiber: "0.2g"
    }
  },
  {
    id: '16',
    title: 'Brownies',
    description: 'Rich, fudgy homemade brownies with chocolate chips.',
    image: 'https://images.unsplash.com/photo-1610611424854-5e07032143d8?auto=format&fit=crop&w=800',
    cuisineType: 'american',
    mealType: 'dessert',
    dietaryRestrictions: ['vegetarian'],
    cookTime: '45 mins',
    prepTime: '5 mins',
    servings: 16,
    ingredients: [
      '1 1/2 cups white sugar',
      '3/4 cup all-purpose flour',
      '2/3 cup cocoa powder, sifted if lumpy',
      '1/2 cup powdered sugar, sifted if lumpy',
      '1/2 cup dark chocolate chips',
      '3/4 teaspoons sea salt',
      '2 large eggs',
      '1/2 cup canola oil',
      '2 tablespoons water',
      '1/2 teaspoon vanilla'
    ],
    instructions: [
      'Heat oven to 325°F. Lightly spray an 8x8 baking dish with cooking spray and line it with parchment paper. Spray the parchment paper.',
      'In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.',
      'In a large bowl, whisk together the eggs, olive oil, water, and vanilla.',
      'Sprinkle the dry mix over the wet mix and stir until just combined.',
      'Pour the batter into the prepared pan then use a spatula to smooth the top. It\'s okay if the batter is thick.',
      'Bake for 40-48 minutes, or until a toothpick comes out with only a few crumbs attached.',
      'Let the brownies cool completely before slicing.',
      'Plate and serve. Enjoy!'
    ],
    nutritionInfo: {
      calories: 262,
      protein: "10g",
      carbs: "26g",
      fat: "13g",
      fiber: "4g"
    }
  }
];

