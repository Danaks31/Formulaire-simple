// On attend que le site soit chargé avant d'éxécuté le script
$( document ).ready(function() {
    // Les inputs
    $allInput = $('#subForm .input')
    $password = $('#subForm .password');
    $passwordCheck = $('#subForm .passwordCheck');
    $nickname = $('#subForm .nickname');
    $email = $('#subForm .email');

    console.log($allInput);

    // Les button
    $btnSubmit = $('#submit');
    $btnReset = $('#cancel');

    // On stock les méssage d'érreurs
    $passwordError = $('.errorMessage');
    $invalidLenghtNickname = $('.invalidLenghtNickname');
    $invalidLenghtPass = $('.invalidLenghtPass');
    $invalidLenghtPass2 = $('.invalidLenghtPass2');
    $lenghtIsNullPassword = $('.lengthNullpass');
    $lenghtIsNullPasswordCheck = $('.lengthNullpass2');
    $lenghtIsNullNickname = $('.lengthNullnickname');
    $lengthNullemail = $('.lengthNullemail');

    // On applique la fonction qui vérifie la longueur de nos champs et on affiche le message d'érreur
    verif($nickname, $invalidLenghtNickname);
    verif($password, $invalidLenghtPass);
    verif($passwordCheck, $invalidLenghtPass2);
    // On vérifie que les méssage d'érreur s'éfface
    clearError($nickname, $lenghtIsNullNickname);
    clearError($password, $lenghtIsNullPassword);
    clearError($passwordCheck, $lenghtIsNullPasswordCheck);
    clearError($email, $lengthNullemail);

    // Au clic sur le bouton submit, lancer toutes les fonction de vérification
    $($btnSubmit).on("click",function(event) {


        lengthNull($nickname, $lenghtIsNullNickname);
        lengthNull($password, $lenghtIsNullPassword);
        lengthNull($passwordCheck, $lenghtIsNullPasswordCheck);
        lengthNull($email, $lengthNullemail);
        // On vérifie si les deux mot de passe sont identique
        passwordCheck($passwordCheck, $password);

        event.preventDefault();
    })
    
    $($btnReset).on("click",function(event) {
        // On récupere les input dont on auras besoin et on les stock en variables
        erraseValue($nickname);
    })

    
}) // Site chargé

// Fonction qui vérifie la valeur entre deux input
function passwordCheck(password1, password2){
    if ( password1.val() !== password2.val()) {
        $('.errorMessage').css("display","block");
        $(password1).css("backgroundColor","red");
        $(password2).css("backgroundColor","red");
    } else if (password1.val() && password2.val() > 1) {
        $('.errorMessage').css("display","none");
        $(password1).css("backgroundColor","#90ee90");
        $(password2).css("backgroundColor","#90ee90");
    }
};
// Fonction qui vérifie si le champ est vide
function erraseValue(input){
        $(input).val()= "";
        $(input).css("background-color", 'red');
}
function lengthNull(input, errorMessage){
    if(input.val() == ""){
        $(input).css("background-color", "red");
        $(errorMessage).css("display","block");
    } else {
        $(errorMessage).css("display","none");
    }
}

// Fonction qui vérifie que les champ dépasse une longueur.
function verif(input, errorMessage) {
    $(input).on('keyup', function(event) {
        if($(input).val().length < 5) {
            event.preventDefault;
            // Si la valeur de l'input passer en argument est en dessous de 5
            // Changer la couleur du border ainsi que afficher le méssage d'érreur passé en argument
            $(input).css('borderColor', 'red');
            $(errorMessage).css('display', 'block');
        } else {
            // Sinon passer le border en vert et ne pas afficher le méssage
            $(input).css('borderColor', '#90ee90');
            $(errorMessage).css('display', 'none');
        }
    })
};

// Fonction qui éfface les méssage d'érreur séparément si l'input est remplie
function clearError(input, errorMessage) {
    $(input).on('keyup', function(event) {
        if($(input).val().length > 0) {
            event.preventDefault;
            // Si la valeur de l'input passer en argument est supérieur ou égal à 5
            // Désactiver le méssage d'érreur
            $(errorMessage).css('display', 'none');
        }   if ($(input).val().length >= 5 ) {
            $(input).css("background-color", "#90ee90");
        }
    })
};