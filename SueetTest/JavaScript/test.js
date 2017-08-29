var check = document.getElementById("change").value;

$(document).ready(function() {

	$(".bars").on("click", function() {
		$(".menu").animate({
			top: "64px"
		})
    })

    $("#back").on("click", function () {
        $(".menu").animate({
            top: "-1920px"
        })
    })

    $(".caret").on("click", function () {
        $(".building").animate({
            top: "290px"
        })

        $(".headerText").text("Edificio Uno");

        $("#change").attr("Class", "fa fa-caret-up");
    })

    
})