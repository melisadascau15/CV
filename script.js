document.addEventListener('DOMContentLoaded', function() {
    const roBtn = document.getElementById('lang-ro-btn');
    const enBtn = document.getElementById('lang-en-btn');
    const body = document.body;

    let currentLang = localStorage.getItem('lang') || 'ro'; 

    function setLanguage(lang) {
        if (lang === 'en') {
            body.classList.add('lang-active');
            document.documentElement.lang = 'en';
        } else {
            body.classList.remove('lang-active');
            document.documentElement.lang = 'ro';
        }

        localStorage.setItem('lang', lang);
        currentLang = lang;
    }
    
    setLanguage(currentLang);

    roBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentLang !== 'ro') {
            setLanguage('ro');
        }
    });

    enBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentLang !== 'en') {
            setLanguage('en');
        }
    });
});