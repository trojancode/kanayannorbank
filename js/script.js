var ctx = document.getElementById('myChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Votes',
            data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
            fill: false,
            borderColor: [
                '#00B9FF',
            ],
            borderWidth: 1,
            lineTension: 0,


        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {}
            }],
            yAxes: [{
                gridLines: {
                    // display:false
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: function (t, d) {
                    var xLabel = d.datasets[t.datasetIndex].label;
                    var yLabel = d.datasets[t.datasetIndex].data[t.index];
                    return xLabel + ': $' + yLabel;
                }
            }
        }
    }


});

(function ($) {
    $(document).ready(function () {
        var sliderTestimonial = tns({
            container: '.My-carousel-testimonial',
            items: 1,
            axis: "horizontal",
            swipeAngle: false,
            speed: 900,
            autoplay: true,
            autoplayTimeout: 4000,
            controls:false,
            autoplayButtonOutput:false,
            navPosition:'bottom',
            touch:false,

          });
        var sliderBanner = tns({
            container: '.slider-banner',
            items: 1,
            axis: "horizontal",
            swipeAngle: false,
            speed: 400,
            autoplay: true,
            autoplayTimeout: 3000,
            controls:false,
            nav:false,
            autoplayButtonOutput:false,
          });
        var sliderNews = tns({
            container: '.My-carousel-vertical-news',
            items: 3,
            axis: "vertical",
            swipeAngle: false,
            speed: 400,
            autoplay: true,
            autoplayTimeout: 3000,
            controls:false,
            nav:false,
            autoplayButtonOutput:false,
          });
        var sliderInerestRate = tns({
            container: '.My-carousel-vertical-interesr-rate',
            items: 3,
            axis: "vertical",
            swipeAngle: false,
            speed: 400,
            autoplay: true,
            autoplayTimeout: 3000,
            controls:false,
            nav:false,
            autoplayButtonOutput:false,
          });
    });
})(jQuery);