var app = app || {};

define([
  'underscore',
  'backbone',
  'bootstrap',
  'd3'
], function(_, Backbone, bootstrap, d3){
  app.dispatcher = _.clone(Backbone.Events);

  _.templateSettings = {
      evaluate:    /\{\{(.+?)\}\}/g,
      interpolate: /\{\{=(.+?)\}\}/g,
      escape:      /\{\{-(.+?)\}\}/g
  };

  var initialize = function() {
    var self = this;

    function BuildChart(strClass, strTitle, strYAxis, data) {
      var svg = d3.select("svg." + strClass),
          margin = 200,
          width = svg.attr("width") - margin,
          height = svg.attr("height") - margin

      svg.append("text")
         .attr("transform", "translate(100,0)")
         .attr("x", 50)
         .attr("y", 50)
         .attr("font-size", "18px")
         .attr("font-family", "sans-serif")
         .text(strTitle)

      var xScale = d3.scaleBand().range([0, width]).padding(0.4),
          yScale = d3.scaleLinear().range([height, 0]);

      var g = svg.append("g")
                 .attr("transform", "translate(" + 100 + "," + 100 + ")");

      xScale.domain(data.map(function(d) { return d.key; }));
      yScale.domain([0, d3.max(data, function(d) { 
        return Number(d.value); })]);

      g.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(xScale))
       .append("text")
       .attr("y", height - 250)
       .attr("x", width - 100)
       .attr("text-anchor", "end")
       .attr("stroke", "black")
       .text("");

      g.append("g")
       .call(d3.axisLeft(yScale).tickFormat(function(d){
           return d;
       })
       .ticks(10))
       .append("text")
       .attr("transform", "rotate(-90)")
       .attr("y", 6)
       .attr("dy", "-5.1em")
       .attr("text-anchor", "end")
       .attr("stroke", "black")
       .attr("font-size", "14px")
       .attr("font-family", "sans-serif")
       .text(strYAxis);

      g.selectAll(".bar")
       .data(data)
       .enter().append("rect")
       .attr("class", "bar")
       .attr("x", function(d) { return xScale(d.key); })
       .attr("y", function(d) { return yScale(d.value); })
       .attr("width", xScale.bandwidth())
       .attr("height", function(d) { return height - yScale(d.value); });
    }

    function GetAndBuildChart(strClass, strTitle, strYAxis, strEndpoint, data) {
      var url = GAME_API_URL + 'campaign/' + CAMPAIGN_ID + '/kpi/' + strEndpoint;
//      console.log(url);
      $.getJSON(url, function(result){
        BuildChart(strClass, strTitle, strYAxis, result);
      });
    }

    GetAndBuildChart('game-chart', 'Challenges', 'Total', 'games');
    GetAndBuildChart('climber-chart', 'Climbers', 'Total', 'climbers');
    GetAndBuildChart('activity-chart', 'Activities', 'Total', 'activities');
    GetAndBuildChart('fundraising-chart', 'Fundraising', 'Total £', 'fundraising');
  };

  return { 
    initialize: initialize
  };
});

