window.onload = function(){
    var name = document.getElementById('firstname');
    var pet = document.getElementById('typeOfAnimal');
    var leg = document.getElementById('legs');
    var form = document.getElementById('myForm');
    var abilities = document.getElementById('specialAbilities')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        console.log(name.value);
        
    })
}