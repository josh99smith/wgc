// var breadtype;    //type of grain   ---> these 4 aren't needed because I defined them in the function below and converted them to let. also 'var submit;' has no use. - ZO
// var units;    //number of units in a serving size
// var weight;    //weight of a serving size in grams
// var submit;    //submit button for form

const getValues = function () {    //function runs when user presses submit button
   let breadtype = document.getElementById("grain_bread").value;    //assigns the type of bread variable based on user input from html form
   let units = document.getElementById("units").value;    //assigns the number  units variable based on user input from html form
   let weight = document.getElementById("weight").value;    //assigns the weight per serving variable based on user input from html form

   if (['Bread sticks (hard)',   //array of food items (Group A)
      'Crackers, Savory (club, cheese, ritz, saltine)',
      'Croutons',
      'Chow mein noodles',
      'Pretzels (hard)',
      'Stuffing (dry) Note: weights apply to bread in stuffing.'
   ].indexOf(breadtype) >= 0) {    //checks breadtype selected by user in html form, runs calculation only if user has selected one of the items in the array
      preschoolOE = 11    //assigns ounce equivalency value based on USDA conversion for preschool aged child
      schoolAgeOE = 22    //assigns ounce equivalency value based on USDA conversion for preschool aged child

   } else if (['Bagels', //array of food items (Group B)
      'Biscuits',
      'Bread sticks (soft)',
      'Breads (white, wheat, whole wheat, French, Italian)',
      'Buns (hamburger and hot dog)',
      'Crackers, Sweet (graham or animal) - all shapes',
      'English muffins',
      'Pita bread (white, wheat, whole wheat)',
      'Pizza crust', 'Pretzels (soft)',
      'Rolls (white, wheat, whole wheat, potato)',
      'Taco shells',
      'Tortilla chips (whole corn or enriched)',
      'Tortillas (wheat or corn)'
   ].indexOf(breadtype) >= 0) {
      preschoolOE = 14    
      schoolAgeOE = 28    

   } else if ([   //array of food items (Group C)
      'Corn muffins',
      'Cornbread',
      'Croissants',
      'Pancakes',
      'Pie crusts (savory, meat/meat alternate pies)',
      'Waffles'
   ].indexOf(breadtype) >= 0) {
      preschoolOE = 17    
      schoolAgeOE = 34    

   } else if (['Muffins (all, except corn)'].indexOf(breadtype) >= 0) {    //array of food items (Group D)
      preschoolOE = 28    
      schoolAgeOE = 55    

   } else if (['French toast'].indexOf(breadtype) >= 0) {   //array of food items (Group E)
      preschoolOE = 35    
      schoolAgeOE = 69    

   } else if ([ //array of food items (Group H)
      'Breakfast cereals (cooked)',
      'Noodles (all varieties)',
      'Pasta (all shapes)',
      'Quinoa',
      'Rice (enriched white or brown)'
   ].indexOf(breadtype) >= 0) {
      preschoolOE = 14   
      schoolAgeOE = 28    

   } else if ([ //array of food items (Group I)
      'Breakfast cereals - Flakes (ready to eat)',
      'Breakfast cereals - Granola (ready to eat)',
      'Breakfast cereals - Puffed (ready to eat)',
      'Breakfast cereals - Rounds (ready to eat)'
   ].indexOf(breadtype) >= 0) {
      preschoolOE = 17
      schoolAgeOE = 34

   } else {
      console.log("No Value");    //returns only if item selected from dropdown has no ounce ounce equivalency converstion formula yet
   }

   //Calculations for
   cal = Math.ceil(weight / units);    //rounds up the result of weight variable divided by unit variable --- //calculations to output ounce equivalency based on user input
   preschoolAgeResult = preschoolOE / cal;    //assigns ounce equivalency value for preschool aged child
   schoolAgeResult = schoolAgeOE / cal;    //assigns ounce equivalency value for preschool aged child
   document.getElementById("15results").innerHTML = Math.ceil(preschoolAgeResult);        //update HTML table with preschool age ounce equivalency results of calculation
   document.getElementById("612results").innerHTML = Math.ceil(schoolAgeResult);       //update HTML table with school age ounce equivalency results of calculation

}