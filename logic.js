var breadtype; //type of grain
var units; //number of units in a serving size
var weight; //weight of a serving size in grams
var submit; //submit button for form

function getValues()
{
  breadtype = document.getElementById("grain_bread").value;
  units = document.getElementById("units").value;
  weight = document.getElementById("weight").value;
  console.log(breadtype);
  
  if ([
       'Bread sticks (hard)',
       'Crackers, Savory (club, cheese, ritz, saltine)',
       'Croutons',
       'Chow mein noodles',
       'Pretzels (hard)',
       'Stuffing (dry) Note: weights apply to bread in stuffing.'
    ].indexOf(breadtype) >= 0) 
      {
        cal = Math.ceil(weight / units);
        preschoolageresult = 11 / cal;
        schoolageresult = 22 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }
  
  else if ([
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


  
  else if ([
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

  else if ([
      'Muffins (all, except corn)'
    ].indexOf(breadtype) >= 0) 
     {
        cal = Math.ceil(weight / units);
        preschoolageresult = 28 / cal;
        schoolageresult = 55 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }
     
  else if ([
      'French toast'
    ].indexOf(breadtype) >= 0)
     {
        cal = Math.ceil(weight / units);
        preschoolageresult = 35 / cal;
        schoolageresult = 69 / cal;  
        document.getElementById("15results").innerHTML = Math.ceil(preschoolageresult);
        document.getElementById("612results").innerHTML = Math.ceil(schoolageresult);
     }
  
  else if ([
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
  
  else if ([
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
  
  else {console.log("No Value");}
  
};
