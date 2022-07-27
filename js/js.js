

let currentPlayer = "x";
$(".form-control").css("background-color","SeaShell");
function getWinner (){
    console.log('getWinner', currentPlayer);
    if (currentPlayer === 'x'){
        alert('The winner is x');
    } else {
        alert('The winner is O');
    }
    $(".form-control").prop('disabled', true);
    $("#curent-player-ui").hide();
    alert("jocul s-a terminat");

}


$(".form-control").click( function(){




     if( $(this).val() !== ''){
         alert("That space is already occupied.");
         return;
     }

        $(this).val(currentPlayer);




        const C11 = $('.C11 .form-control').val();
        const C12 = $('.C12 .form-control').val();
        const C13 = $('.C13 .form-control').val();
        const C21 = $('.C21 .form-control').val();
        const C22 = $('.C22 .form-control').val();
        const C23 = $('.C23 .form-control').val();
        const C31 = $('.C31 .form-control').val();
        const C32 = $('.C32 .form-control').val();
        const C33 = $('.C33 .form-control').val();

     if( (C11 === C12 && C12 === C13) && C11!=='' ){
         getWinner();

         $('.C11 .form-control').addClass('winner');
         $('.C12 .form-control').addClass('winner');
         $('.C13 .form-control').addClass('winner');

         console.log('C11 === C12 && C12 === C13', currentPlayer);
     } else if ( (C21 === C22 && C22 === C23) && C21!==''){
         getWinner();

         $('.C21 .form-control').addClass('winner');
         $('.C22 .form-control').addClass('winner');
         $('.C23 .form-control').addClass('winner');


     } else if((C31 === C32 && C32 === C33) && C31!=='' ){
         getWinner();

         $('.C31 .form-control').addClass('winner');
         $('.C32 .form-control').addClass('winner');
         $('.C33 .form-control').addClass('winner');

     }else if((C11 === C21 && C21 === C31) && C11!==''){
         getWinner();

         $('.C11 .form-control').addClass('winner');
         $('.C21 .form-control').addClass('winner');
         $('.C31 .form-control').addClass('winner');

     }else if((C12 === C22 && C22 === C32) && C12!=='') {
         getWinner();

         $('.C12 .form-control').addClass('winner');
         $('.C22 .form-control').addClass('winner');
         $('.C32 .form-control').addClass('winner');

     } else if((C13 === C23 && C23 === C33) && C13!==''){
         getWinner();

         $('.C13 .form-control').addClass('winner');
         $('.C23 .form-control').addClass('winner');
         $('.C33 .form-control').addClass('winner');

     } else if((C11 === C22 && C22 === C33) && C11!==''){
         getWinner();

         $('.C11 .form-control').addClass('winner');
         $('.C22 .form-control').addClass('winner');
         $('.C33 .form-control').addClass('winner');

     }else if((C13 === C22 && C22 === C31)&& C13!==''){
         getWinner();

         $('.C13 .form-control').addClass('winner');
         $('.C22 .form-control').addClass('winner');
         $('.C31 .form-control').addClass('winner');

     }else if (C11 !=="" && C12!=="" && C13!=="" && C21!=="" && C22!=="" && C23!=="" && C31!=="" && C32!=="" && C33!=="" ){
         $(".form-control").prop('disabled', true);
            alert("Jocul s-a terminat! Nu exista castigator");
            $(".form-control").css("background-color","LightPink");
     }

    if(currentPlayer === "x") {
        currentPlayer= "0";
    } else {
        currentPlayer ="x";
    }


$("#curent-player-ui").text("The current player is : " + currentPlayer);

});