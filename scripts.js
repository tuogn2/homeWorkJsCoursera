document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsSection = document.getElementById('results');

    resultsSection.innerHTML = ''; // Clear previous results

    if (query.includes('beach')) {
        resultsSection.innerHTML += `
            <div class="result-item">
                <h2>Beach 1</h2>
                <img src="https://via.placeholder.com/150" alt="Beach 1">
                <p>Description of Beach 1.</p>
            </div>
            <div class="result-item">
                <h2>Beach 2</h2>
                <img src="https://via.placeholder.com/150" alt="Beach 2">
                <p>Description of Beach 2.</p>
            </div>
        `;
    } else if (query.includes('temple')) {
        resultsSection.innerHTML += `
            <div class="result-item">
                <h2>Temple 1</h2>
                <img src="https://via.placeholder.com/150" alt="Temple 1">
                <p>Description of Temple 1.</p>
            </div>
            <div class="result-item">
                <h2>Temple 2</h2>
                <img src="https://via.placeholder.com/150" alt="Temple 2">
                <p>Description of Temple 2.</p>
            </div>
        `;
    } else if (query.includes('country')) {
        resultsSection.innerHTML += `
            <div class="result-item">
                <h2>Country 1</h2>
                <img src="https://via.placeholder.com/150" alt="Country 1">
                <p>Description of Country 1.</p>
            </div>
            <div class="result-item">
                <h2>Country 2</h2>
                <img src="https://via.placeholder.com/150" alt="Country 2">
                <p>Description of Country 2.</p>
            </div>
        `;
    } else {
        resultsSection.innerHTML = '<p>No results found.</p>';
    }
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('search-bar').value = '';
    document.getElementById('results').innerHTML = '';
});
