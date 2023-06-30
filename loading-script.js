
let week_selection= document.querySelector(".week-container");
let close_week=document.querySelector(".close-icon");
let days = document.querySelectorAll(".day");
let cars = [];
let movie_name;
         

function week_selection_visible(name){
  movie_name=name;
  week_selection.style.visibility="visible";   
  division.forEach(function(item, index){
    division[index].style.display="none";
  });
}



close_week.addEventListener("click", function(){
  division.forEach(function(item, index){
    division[index].style.display="block";
  });
  week_selection.style.visibility="hidden";
});

days.forEach(function(item,index){
  days[index].addEventListener("click", function(){
    
    // let day=days[index].innerText;

    switch (index) {
      case 0:
        startAnimation(4);
        break;
      case 1:
        startAnimation(1);
        break;
      case 2:
        startAnimation(1);
        break;
        case 3:
        startAnimation(2);
        break;
        case 4:
        startAnimation(3);
        break;
        case 5:
        startAnimation(3);
        break;
        case 6:
        startAnimation(4);
        break;
    }
    setTimeout(function(){
        window.location.href = "seat.html#next";
    },2000);
  });
});



        
        function startAnimation(num_of_cars) {
            let container = document.querySelector(".container-road");
            let road = document.querySelector("#road");
            cars=[];

            for (let i = 1; i <= num_of_cars; i++) {
                let car = document.createElement("img");
                car.classList.add("cars");
                car.src = "images/car-" + i + ".png";
                container.appendChild(car);
                cars.push(car);
            }
            cars.forEach(function(car,index) {
                accelerate(index);
            });
        }
        
        function accelerate(index) { 
        if (index % 2 == 0) {
            setTimeout(function() {
                cars[index].style.visibility="visible";
                cars[index].style.animationName = "move-left";
                cars[index].style.animationDuration = "1.5s";
                setTimeout(function() {
                    cars[index].remove();
                }, 1500);
            }, 360*(index));
        } else {
            setTimeout(function() {
            cars[index].style.visibility="visible";
            cars[index].style.animationName = "move-right";
            cars[index].style.animationDuration = "1.5s";
            setTimeout(function() {
                cars[index].remove();
            }, 1500);
            }, 360 * (index)); 
        }
        }