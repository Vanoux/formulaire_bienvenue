// !! FAIT EN ÉQUIPE AVEC SANDRINE !!


console.log('have fun !');

/* 
Récuperez les valeurs des champs du formulaire et en faire un joli objet qui sera affiché dans la console.
Concaténez les champs firs_name et last_name et dites bonjour à notre cher visiteur dans le titre en replacant le contenu du span #username
*/ 

    
    $("input").on("keyup", function(){
/*.on(keyup)= Liez un gestionnaire d'événement à l'événement JavaScript "keyup" ou déclenchez cet événement sur un élément.
Donc si j'ai bien compris j'envoi l'input à l'événement keyup lorsque l'utilisateur relâche une touche sur le clavier.
*/
        
        var firstName= $("#first_name").val();
// .val() => pour obtenir la valeur actuelle de l'élément (s'utilse pour obtenir les valeurs des élements de formulaires tel que input, select et textarea).
        console.log(firstName);
        
        var lastName= $("#last_name").val();
        console.log(lastName);
        
        var city= $("#city").val();
        console.log(city);
        
    $("#username").text(firstName + " " + lastName); // .text => pour obtenir le contenu textuel combiné de chaque élément de l'ensemble des éléments correspondants.

    })
  