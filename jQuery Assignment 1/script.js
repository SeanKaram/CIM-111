$(document).ready(function(){
    $("#hide1").click(function(){
        $(".Step1").hide();
    });
    $("#show1").click(function(){
        $(".Step1").show();
    });
});

$(document).ready(function(){
    $("#hide2").click(function(){
        $(".Step2").hide();
    });
    $("#show2").click(function(){
        $(".Step2").show();
    });
});

$(document).ready(function(){
    $("#hide3").click(function(){
        $(".Step3").hide();
    });
    $("#show3").click(function(){
        $(".Step3").show();
    });
});

$(document).ready(function(){
    $("#hide4").click(function(){
        $(".Step4").hide();
    });
    $("#show4").click(function(){
        $(".Step4").show();
    });
});

$(document).ready(function(){
    $("#hide5").click(function(){
        $(".Step5").hide();
    });
    $("#show5").click(function(){
        $(".Step5").show();
    });
});

$(document).ready(function(){
    $("#warning").mouseenter(function(){
        $("#warningt").show();
    });
    $("#warning").mouseleave(function(){
        $("#warningt").hide();
    });
    $("#footer").click(function(){
        $("#backflipping").toggle(1000);
    });
});
