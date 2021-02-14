
const partits = ['ERC', 'JxCat', 'PSC', 'Cs', 'ECP', 'CUP', 'PP', 'VOX', 'PdCat'];
const colors = ['RGBA(252, 195, 78, 0.7)',
'RGBA(0, 219, 137, 0.7)',
'RGBA(219, 8, 25, 0.7)',
'RGBA(233, 85, 13, 0.7)',
'RGBA(107, 31, 95, 0.7)',
'RGBA(254, 242, 0, 0.7)',
'RGBA(10, 172, 247, 0.7)',
'RGBA(120, 190, 32, 0.7)',
'RGBA(4, 66, 139, 0.7)'];
const hoverColors = [
    'RGBA(252, 195, 78, 1)',
    'RGBA(0, 219, 137, 1)',
    'RGBA(219, 8, 25, 1)',
    'RGBA(233, 85, 13, 1)',
    'RGBA(107, 31, 95, 1)',
    'RGBA(254, 242, 0, 1)',
    'RGBA(10, 172, 247, 1)',
    'RGBA(120, 190, 32, 1)',
    'RGBA(4, 66, 139, 1)'
];

var myChart = null;

function chart(){
    let ctx = document.getElementById('myChart').getContext("2d");

    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: partits,
            datasets: [{
                label: 'Escons',
                data: [32, 34, 17, 36, 8, 4, 4, 0, 0],
                backgroundColor: colors,
                borderColor: hoverColors,
                borderWidth: 1,
                borderAlign: 'inner',
            }]
        },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            title: {
                display: true,
                text: 'Eleccions Parlament Catalunya 2019',
                fontSize: 50
            },
            legend: {
                labels: {
                    fontSize: 25
                },
            },
            responsive: false,
            aspectRatio: 1,
            weight: 1
        }
    })
}

function updateData(chart, data){
    chart.options.title.text = 'Parlament Catalunya'
    chart.data.datasets.forEach((dataset, i) => {
        dataset.data = data;
    });
    chart.update();
}

function removeData(chart){
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });;
    chart.update();
}

document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();

    let erc = parseInt(document.getElementById('erc').value);
    let jxcat = parseInt(document.getElementById('jxcat').value);
    let psc = parseInt(document.getElementById('psc').value);
    let cs = parseInt(document.getElementById('cs').value);
    let ecp = parseInt(document.getElementById('ecp').value);
    let cup = parseInt(document.getElementById('cup').value);
    let pp = parseInt(document.getElementById('pp').value);
    let vox = parseInt(document.getElementById('vox').value);
    let pdcat = parseInt(document.getElementById('pdcat').value);

    let data = [erc, jxcat, psc, cs, ecp, cup, pp, vox, pdcat];

    let total = data.reduce((a, b) => a + b, 0);
    let error = document.getElementById('error');
    if(135-total === 0){
        error.innerHTML = '';
        removeData(myChart);
        updateData(myChart, data);
    } else {
        error.innerHTML = `Escons restants: ${135-total}`;
    }


    
});
    
chart();