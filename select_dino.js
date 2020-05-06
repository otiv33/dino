$(document).ready(function (){

    var chosenDino = "lenart";
    var path1 = "assets/default_100_percent/";
    var path2 = "assets/default_200_percent/";
    var def1 = "100-offline-sprite.png";
    var def2 = "100-offline-sprite.png";

    $('input[type=radio]').change(function() {
        chosenDino = this.value;
    });

    $(document).on('click','#dino-option-btn', function (){
        $("#dino-options").attr("style","visibility:hidden");
        $("#t").attr("style","visibility:visible");
        if(chosenDino == "lenart"){
            defineSrc(def1,"200-offline-sprite_lenart.png");
        }else if (chosenDino == "ziva"){
            defineSrc(def1,"200-offline-sprite_ziva.png");
        }else if (chosenDino == "siro"){
            defineSrc(def1,"200-offline-sprite_siro.png");
        }else if (chosenDino == "geps"){
            defineSrc(def1,"200-offline-sprite_geps.png");
        }else if (chosenDino == "neti"){
            defineSrc(def1,"200-offline-sprite_neti.png");
        }else if (chosenDino == "vito"){
            defineSrc(def1,"200-offline-sprite_vito.png");
        }else{
            alert("ne dewa");
        }
        alert("Press the UP arrow to start\n Also zoom window to 200% for the best viewing experience");
    })

    function defineSrc (x1,x2){
        $("#offline-resources-1x").attr("src",path1+x1)
        $("#offline-resources-2x").attr("src",path2+x2)
    }
})