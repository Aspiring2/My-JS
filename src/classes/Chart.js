
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width;
    myCanvas.height;

    var ctx = myCanvas.getContext("2d");

    function drawPieSlice(
        ctx,
        centerX,
        centerY,
        radius,
        startAngle,
        endAngle,
        color
    ) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }

    skill_value = {
        skill_val: 80,
        tot_val: 100,
    };
    skill_value.tot_val = 100 - skill_value.skill_val;

    function total_value() {
        var startAngle = 2 * Math.PI;
        var index_radius = 4;
        var color = "#aeaeae";
        for (el in skill_value) {
        val = skill_value[el];
        endAngle = (2 * Math.PI * val) / 100;

        drawPieSlice(
            ctx,
            myCanvas.width / 2,
            myCanvas.height / 2,
            myCanvas.width / index_radius,
            startAngle,
            (startAngle += endAngle),
            color
        );

        startAngle = endAngle;
        color = "#ffaa00";
        index_radius += 0.5;
        }

        //HoleChart
        drawPieSlice(
        ctx,
        myCanvas.width / 2,
        myCanvas.height / 2,
        myCanvas.width / 7,
        Math.PI,
        Math.PI * 4,
        "#fff"
        );

        ctx.fillStyle = "black";
        ctx.font = "bold 200% Arial";
        ctx.fillText(
        skill_value.skill_val + "%",
        myCanvas.width / 2 - 30,
        myCanvas.height / 2 + 13
        );
    }
    
    


total_value()