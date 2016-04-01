var React = require('react');

var App = React.createClass({

      componentDidMount: function() {
        var data = [{
          "sale": "202",
          "year": "2000"
        }, {
          "sale": "215",
          "year": "2001"
        }, {
          "sale": "179",
          "year": "2002"
        }, {
          "sale": "199",
          "year": "2003"
        }, {
          "sale": "176",
          "year": "2010"
        }];


        var vis = d3.select("#graph")

        var MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 40
        }
        var x = d3.scale.linear()
          .range([MARGINS.left, this.props.width - MARGINS.right])
          .domain([2000, 2010]);

        var y = d3.scale.linear()
          .range([this.props.height - MARGINS.top, MARGINS.bottom])
          .domain([170, 220]);
        var xAxis = d3.svg.axis().scale(x);
        var yAxis = d3.svg.axis().scale(y).orient("left");

        var  area = d3.svg.area()
        	.x(function(d) {
            return x(d.year); })
        	.y0(this.props.height)
        	.y1(function(d) { return y(d.sale); });

        vis.append("svg:g")
          .attr("transform", "translate(0," + (this.props.height - MARGINS.bottom) + ")")
          .call(xAxis);

        vis.append("svg:g")
          .attr("transform", "translate(" + MARGINS.left + ",0)")
          .call(yAxis);

        var lineGen = d3.svg.line()
          .x(function(d) {
            return (x(d.year));
          })
          .y(function(d) {
            return (y(d.sale));
          });

        vis.append('path')
          .attr('d', lineGen(data))
          .attr('stroke', '#678906')
          .attr('stroke-width', 2)
          .attr('fill', 'none');

          vis.append("path")
             .attr("class", "area")
             .attr("d", area(data));


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
        return ( < svg id = "graph"
          width = {
            this.props.width
          }
          height = {
            this.props.height
          } > < /svg>)
        }

      })

    module.exports = App;
