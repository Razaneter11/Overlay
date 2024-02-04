function Show() {
    const showButton = document.querySelector(".showButton");
    const sidebar = document.getElementById('detaile');
    const closeButton = document.querySelector(".closeButton");
    const overlay = document.querySelector('.overlay');

    showButton.onclick = function (e) {
        e.preventDefault();
        sidebar.style.left = '0';
        overlay.style.display = 'block';
    };

    closeButton.onclick = function (e) {
        e.preventDefault();
        sidebar.style.left = '-250px';
        overlay.style.display = 'none';
    };

    overlay.onclick = function () {
        overlay.style.display = 'none';
    };
}

Show();

