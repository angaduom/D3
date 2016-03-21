var React = require('react');

var App = React.createClass({

      componentDidMount: function() {
        var data = [12, 16, 10];

        var x = d3.scale.linear()
          .domain([0, d3.max(data)])
          .range([0, 420]);

        d3.select("#graph")
          .append("svg")
          .attr("width",this.props.width)
          .attr("height",this.props.height)
          .attr("class","svg");
          // .data(data)
          // .enter()
          // .append("div")
          // .attr("class", "chart-bar")
          // .style("width", function(d) {
          //   return x(d) + "px"
          // })
          // .text(function(d) {
          //   return d
          // });

      },
      render: function() {
        return ( < div id = "graph" >< /div>)
      }

})

module.exports = App;
