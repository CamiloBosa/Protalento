let drinks=[];
let div_drinks = document.getElementById('drinks');
let whisky = document.getElementById('whisky');
let vodka= document.getElementById('vodka');
//console.log("Iniciando el programa");
/*Fetch)
let consulta = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tequila')
                    .then(response =>{
                        return response.json()
                    })
                    .then((data)=>{
                        //console.log(data.drinks[0].strDrinkThumb) Para recordadr
                        //console.log(data.drinks)
                        data.drinks.forEach(element => {
                           // hola(element.strDrink);P
                            //console.log(element.strDrink);P
                            drinks.push(element.strDrink)
                            
                        });
                            
                        console.log(drinks)
                    })*/
/*Practicando
function hola(drink){
    if (drink === "Tequila Surprise"){
       console.log("Hola") 
    }
}
otro:
 console.log(consulta) 
*/
function holaw(){
    div_drinks.innerHTML =""
    peticion("whisky").then((response) =>{
        response.drinks.forEach(element => {
            drinks.push(element.strDrink);
            div_drinks.innerHTML += "<h1>"+element.strDrink+"</h1><br>"
            div_drinks.innerHTML += "<h4>"+element.strInstructions+"</h4><br>"
            div_drinks.innerHTML += `<img src='${element.strDrinkThumb}' ><br>`
        });
    //nota: Acá en vez de los innerHTML se puede crear elementos html y que al div se le vayan agregando hijos
        console.log(drinks) 
    });
    //console.log("fin")  
      
}

function vodka_res(){
    div_drinks.innerHTML = ""
    peticion("vodka ").then((response) =>{
        response.drinks.forEach(element => {
            drinks.push(element.strDrink);
            div_drinks.innerHTML += "<h1>"+element.strDrink+"</h1><br>"
            div_drinks.innerHTML += "<h4>"+element.strInstructions+"</h4><br>"
            div_drinks.innerHTML += `<img src='${element.strDrinkThumb}' ><br>`
        });
        console.log(drinks) 
    });    
}




async function peticion(drink){
    //try catch
    let response;
    let data;
    try{
        response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        data = await response.json();
    }catch(error){
        console.log(error.message)//
    }
    
   //console.log(data)
    console.log("Después de la petición")
    return data
}
