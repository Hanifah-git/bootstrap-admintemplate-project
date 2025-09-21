// Start Right Navbar

const getsitesettings = document.getElementById('sitesettings');

getsitesettings.addEventListener('click',function(){
    document.body.classList.toggle('show-nav');
})
// End Right Navbar



// Start Navbar

// start top navbar
function dropbtn(e){
    // console.log(e.target);
    // console.log(e.target.parentElement.nextElementSibling);
    e.target.parentElement.nextElementSibling.classList.toggle('show');
    
}
// end top navbar

// start sidebar
$(document).ready(function(){
    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    })
})
// end sidebar
// End Navbar

// Start Content
google.charts.load('current', {packages:['corechart']});

  // Register both chart callbacks
  google.charts.setOnLoadCallback(drawLineChart);
  google.charts.setOnLoadCallback(drawDonutChart);

  // Line Chart
  function drawLineChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,  400],
      ['2005',  1170,  460],
      ['2006',  660,   1120],
      ['2007',  1030,  540]
    ]);

    var options = {
      title: 'Sales Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(
      document.getElementById('curve_chart')
    );
    chart.draw(data, options);
  }

  // Donut Chart
  function drawDonutChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutchart')
    );
    chart.draw(data, options);
  }

//   end donut

// start gage

var gaugeusers = new JustGage({
            id: "gaugeusers", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

// update the value randomly
setInterval(() => {
  gaugeusers.refresh(Math.random() * 100);
}, 5000)

var gaugecustomers = new JustGage({
            id: "gaugecustomers", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

// update the value randomly
setInterval(() => {
  gaugecustomers.refresh(Math.random() * 100);
}, 5000)

var gaugeemployees = new JustGage({
            id: "gaugeemployees", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

// update the value randomly
setInterval(() => {
  gaugeemployees.refresh(Math.random() * 100);
}, 5000)

var gaugeinvestors = new JustGage({
            id: "gaugeinvestors", // the id of the html element
            value: 50,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: 0.6
        });

// update the value randomly
setInterval(() => {
  gaugeinvestors.refresh(Math.random() * 100);
}, 5000)


// end gage
// End Content



// Start Footer
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;
// End Footer