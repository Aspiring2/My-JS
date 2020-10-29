function Chart(selector) {
    var $el = document.querySelector(selector)
   var circleChart = `<div class="col-circle">
                    <div class="circle">
                      <div class="chart-percentage">
                        <span>90%</span>
                      </div>
                      <div class="chart" data-percent="90">
                        
                        <canvas id="myCanvas"></canvas>                       
                        
                      </div>
                      <div class="name-circle">
                        <span>English</span>
                      </div>
                    </div>
                  </div>`
}