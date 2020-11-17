var breadtype; //type of grain
var units; //number of units in a serving size
var weight; //weight of a serving size in grams
var submit; //submit button for form

function getValues() //function runs when user presses submit button
{
  breadtype = document.getElementById("grain_bread").value; //assigns the type of bread variable based on user input from html form
  units = document.getElementById("units").value; //assigns the number  units variable based on user input from html form
  weight = document.getElementById("weight").value; //assigns the weight per serving variable based on user input from html form
  console.log(breadtype);
  
  if ([ //array of food items (Group A)
       'Bread sticks (hard)',
       'Crackers, Savory (club, cheese, ritz, saltine)',
       'Croutons',
       'Chow mein noodles',
       'Pretzels (hard)',
       'Stuffing (dry) Note: weights apply to bread in stuffing.'
    ].indexOf(breadtype) >= 0) //checks breadtype selected by user in html form, runs calculation only if user has selected one of the items in the array
      {  //calculations to output ounce equivalency based on user input
        cal = Math.ceil(weight / units); //rounds up the result of weight variable divided by unit variable
        preschoolageresult = 11 / cal; //assigns ounce equivalency value for preschool aged child
        schoolageresult = 22 / cal;  //assigns ounce equivalency value for preschool aged child
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);  //update HTML table with preschool age ounce equivalency results of calculation
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult); //update HTML table with school age ounce equivalency results of calculation
     }
  
     //same logic repeats for each bread category type 
  else if ([ //array of food items (Group B)
      'Bagels',
      'Biscuits',
      'Bread sticks (soft)',
      'Breads (white, wheat, whole wheat, French, Italian)',
      'Buns (hamburger and hot dog)',
      'Crackers, Sweet (graham or animal) - all shapes',
      'English muffins',
      'Pita bread (white, wheat, whole wheat)',
      'Pizza crust','Pretzels (soft)',
      'Rolls (white, wheat, whole wheat, potato)',
      'Taco shells',
      'Tortilla chips (whole corn or enriched)',
      'Tortillas (wheat or corn)'
    ].indexOf(breadtype) >= 0)
      {
        cal = Math.ceil(weight / units);
        preschoolageresult = 14 / cal;
        schoolageresult = 28 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }


  
  else if ([ //array of food items (Group C)
      'Corn muffins',
      'Cornbread',
      'Croissants',
      'Pancakes',
      'Pie crusts (savory, meat/meat alternate pies)',
      'Waffles'
    ].indexOf(breadtype) >= 0)
      {
        cal = Math.ceil(weight / units);
        preschoolageresult = 17 / cal;
        schoolageresult = 34 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }

  else if ([ //array of food items (Group D)
      'Muffins (all, except corn)'
    ].indexOf(breadtype) >= 0) 
     {
        cal = Math.ceil(weight / units);
        preschoolageresult = 28 / cal;
        schoolageresult = 55 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }

  else if ([ //array of food items (Group E)
      'French toast'
    ].indexOf(breadtype) >= 0)
     {
        cal = Math.ceil(weight / units);
        preschoolageresult = 35 / cal;
        schoolageresult = 69 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }
  
  else if ([ //array of food items (Group H)
      'Breakfast cereals (cooked)',
      'Noodles (all varieties)',
      'Pasta (all shapes)',
      'Quinoa',
      'Rice (enriched white or brown)'
    ].indexOf(breadtype) >= 0) 
     {
        cal = Math.ceil(weight / units);
        preschoolageresult = 14 / cal;
        schoolageresult = 28 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }
  
  else if ([ //array of food items (Group I)
      'Breakfast cereals - Flakes (ready to eat)',
      'Breakfast cereals - Granola (ready to eat)',
      'Breakfast cereals - Puffed (ready to eat)',
      'Breakfast cereals - Rounds (ready to eat)'
    ].indexOf(breadtype) >= 0)  
     {
        cal = Math.ceil(weight / units);
        preschoolageresult = 17 / cal;
        schoolageresult = 34 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }
  
  else {console.log("No Value");} //returns only if item selected from dropdown has no ounce ounce equivalency converstion formula yet
  
};
