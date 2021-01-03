$(document).ready(function(){
    $("#design").click(function(){
        $("#design-p").toggle()
        $("#design").toggle()
    });
});
$(document).ready(function(){
    $("#design-p").click(function(){
        $("#design").toggle()
        $("#design-p").toggle()
    });
});


$(document).ready(function(){
    $("#development").click(function(){
        $("#development-p").toggle()
    $("#development").toggle()
    });
});
$(document).ready(function(){
    $("#development-p").click(function(){
        $("#development").toggle()
        $("#development-p").toggle()
    });
});
$(document).ready(function(){
    $("#product").click(function(){
        $("#product-p").toggle()
        $("#product").hide()
    });
});
$(document).ready(function(){
    $("#product-p").click(function(){
        $("#product").toggle()
        $("#product-p").toggle()
    });
});
 

  
$(document).ready(function getResponse(){
    var name = document.getElementById("#name").value();
    $("button#submit").click(function(){
        alert("Hi, " + name + " .Your message has been received!")
    })
    event.preventDefault()
 
})

$(document).ready(function(){
    $("#wrap1").hover(function(){
        $("#hide-1").toggle();
    })
    $("#wrap2").hover(function(){
        $("#hide-2").toggle();
    })
    $("#wrap3").hover(function(){
        $("#hide-3").toggle();
    })
    $("#wrap4").hover(function(){
        $("#hide-4").toggle();
    })
    $("#wrap5").hover(function(){
        $("#hide-5").toggle();
    })
    $("#wrap6").hover(function(){
        $("#hide-6").toggle();
    })
    $("#wrap7").hover(function(){
        $("#hide-7").toggle();
    })
    $("#wrap8").hover(function(){
        $("#hide-8").toggle();
    })
});
