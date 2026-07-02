// Инициализация графика
const chart = LightweightCharts.createChart(document.getElementById('chart'), {
    layout: { background: { type: 'solid', color: '#141822' }, textColor: '#8a94a6' },
});
const candleSeries = chart.addCandlestickSeries();

// Пример данных
candleSeries.setData([
    { time: '2026-07-01', open: 1.05, high: 1.06, low: 1.04, close: 1.055 },
    { time: '2026-07-02', open: 1.055, high: 1.07, low: 1.05, close: 1.065 }
]);

// Обработка логина
function handleCredentialResponse(response) {
    console.log("ID Token:", response.credential);
    alert("Успешная авторизация!");
}
