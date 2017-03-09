$(function()  {
	
	var trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            label: "Traffic",
			fillColor: "rgba(116, 121, 189, .5)",
			strokeColor: "#7479bd",
			pointColor: "#fff",
			BorderColor: "#7479bd",
			BorderWidth: 2,
			pointStrokeColor: "#7479bd",
			pointRadius: 10,
            pointBorderColor: '#7479bd',
			pointHighlightFill: "#fff",
			pointHighlightStroke: "#7479bd",
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
        }
    ],
	
};
	var trafficOption = {
					bezierCurve: false,
        scaleOverride : true,
        scaleSteps : 5,
        scaleStepWidth : 500,
        scaleStartValue : 0
				};
	var trafficCtx = document.getElementById("lineChart").getContext("2d");
	var myLineChart = new Chart(trafficCtx).Line(trafficData, trafficOption);

	//barChart

	var dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Traffic",
			fillColor: "#7479bd",
            data: [50, 100, 175, 125, 225, 200, 100]
        }
    ],
	
};

var dailyTrafficOption = {
        scaleOverride : true,
        scaleSteps : 5,
        scaleStepWidth : 50,
        scaleStartValue : 0
				};

	var dailyTrafficCtx = document.getElementById("barChart").getContext("2d");
	var myBarChart = new Chart(dailyTrafficCtx).Bar(dailyTrafficData, dailyTrafficOption);


    

	var mobileData = [
		
		{
			value: 50,
			color: "#83c891",
			label: "Tablet"
		},
		{
			value: 40,
			color: "#75b1be",
			label: "Phones"
		},
		{
			value: 270,
			color: "#7479bd",
			label: "Desktop"
		}
	];

	var mobileCtx = document.getElementById("pieChart").getContext("2d");
	var myDoughnutChart = new Chart(mobileCtx).Doughnut(mobileData);
});

function signUp() {
	var send = document.getElementById("Message-For-User").value;
	var search = document.getElementById("Search-User").value;	
	if (send.length < 1 || search.length < 1)
		alert("Enter a username and message.");
	else
		alert("Message sent!");
}

function hideAlert() {
	document.querySelector(".alert").innerHTML = "";
	document.querySelector(".alert").style.padding = 0;
	document.getElementById("circle").style.background = "#7479bd";
}
