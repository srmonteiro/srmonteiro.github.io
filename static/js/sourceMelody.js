var data = [{
  values: [5, 35, 27, 14, 8 , 11 ],
  labels: ['Sacred', 'Annie Lisle', 'Original Composition', 'Folk Song', 'National Song', 'Romantic/Classical'],
  type: 'pie',
  hoverinfo: 'label+percent',
  textinfo: 'none',
}];

var layout = {
    title: {
        text:'Genre of Source Melody',
        font: {
          family: 'Courier New, monospace',
          size: 24
        },
        xref: 'paper',
        x: 0.05,
      },
    height: 500,
  width: 900
};

Plotly.newPlot('sourceMelody', data, layout);