document.getElementById('INU').addEventListener('click', function() {
    fetch('http://localhost:3000/web')
        .then(response => response.json())
        .then(web => {
            localStorage.setItem('web', JSON.stringify(web));
            show(web);
        })
        .catch(error => console.log('error:', error));
});

function show(data) {
    const show = document.getElementById('show');
    show.innerHTML = JSON.stringify(data, null, 2);
}