
let start; 
let totalElapsed = 0;  
let timer; 
const results = []; 

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


function startTimer() {
    start = Date.now() - totalElapsed;
    timer = setInterval(() => {
        totalElapsed = Date.now() - start;
        document.getElementById('timeDisplay').textContent = formatTime(totalElapsed);
    }, 1000);
    document.getElementById('stBtn').disabled = true;
    document.getElementById('sBtn').disabled = false;
}


function stopTimer() {
    clearInterval(timer);
    results.push(formatTime(totalElapsed));
    updateResults();
    document.getElementById('stBtn').disabled = false;
    document.getElementById('sBtn').disabled = true;
}


function resetTimer() {
    clearInterval(timer);
    totalElapsed = 0;
    document.getElementById('timeDisplay').textContent = "00:00:00";
    document.getElementById('stBtn').disabled = false;
    document.getElementById('sBtn').disabled = true;
}


function updateResults() {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    results.slice(-3).forEach((result) => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}


document.getElementById('stBtn').addEventListener('click', startTimer);
document.getElementById('sBtn').addEventListener('click', stopTimer);
document.getElementById('rBtn').addEventListener('click', resetTimer);
