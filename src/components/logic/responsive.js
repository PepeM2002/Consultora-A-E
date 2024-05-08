document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logo')
    var nombre = document.getElementById('nombre')

    function responsive() {
        if (window.innerWidth < 526) {
            nombre.style.display = 'none';
            logo.style.marginLeft = '19px';
        } else {
            nombre.style.display = 'block';
            logo.style.marginLeft = '15px;'
        }
    }
    responsive()
    window.addEventListener('resize', responsive)
})


document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });

        function handleResize() {
            if (window.innerWidth < 433) {
                mobileMenu.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
            }
        }

        handleResize(); 
        window.addEventListener('resize', handleResize); 
    } else {
        console.error(
            "No se encontraron los elementos con los ID 'mobile-menu-toggle' o 'mobile-menu'"
        );
    }
});
