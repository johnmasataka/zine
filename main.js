document.addEventListener("DOMContentLoaded", function() {
    
    const svg = d3.select(".background")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .style("position", "absolute") 
        .style("top", "0")
        .style("left", "0")
        .style("z-index", "10"); 

    
    const circleRadius = 10; 
    const buttonData = [
        { id: "circle1", x: 0.4, y: 0.3, url: './pages/page1.html' },
        { id: "circle2", x: 0.45, y: 0.5, url: './pages/page2.html' },
        { id: "circle3", x: 0.3, y: 0.8, url: './pages/page3.html' }
    ];

    
    svg.selectAll("circle")
        .data(buttonData)
        .enter()
        .append("circle")
        .attr("id", d => d.id)
        .attr("cx", d => d.x * svg.node().getBoundingClientRect().width)
        .attr("cy", d => d.y * svg.node().getBoundingClientRect().height)
        .attr("r", circleRadius)
        .attr("fill", "rgba(211, 211, 211, 0.8)")
        .attr("stroke", "black")
        .attr("stroke-width", "3px")
        .style("cursor", "pointer")
        .on("click", d => {
            console.log('Navigating to:', d.url); 
            window.location.href = d.url;
        });
    
    svg.selectAll("circle")
        .on("mouseover", function() {
            d3.select(this)
                .attr("fill", "rgba(169, 169, 169, 0.8)")
                .transition()
                .duration(300)
                .attr("r", circleRadius * 1.1);
        })
        .on("mouseout", function() {
            d3.select(this)
                .attr("fill", "rgba(211, 211, 211, 0.8)")
                .transition()
                .duration(300)
                .attr("r", circleRadius);
        });
});
