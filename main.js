// إخفاء شاشة التحميل وعرض المحتوى
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
  });
  

ScrollReveal().reveal('section', {
    duration: 2000, // مدة الحركة
    origin: 'bottom', // اتجاه الحركة
    distance: '80px', // المسافة
    delay: 100 // التأخير
});

ScrollReveal().reveal('.c', {
    duration: 2000, // مدة الحركة
    origin:"bottom",
    distance: '10px', // المسافة
    delay: 1000 // التأخير
});

ScrollReveal().reveal('.h', {
    duration: 2000, // مدة الحركة
    origin: 'bottom', // اتجاه الحركة
    distance: '10px', // المسافة
    delay: 1500 // التأخير
});

ScrollReveal().reveal('.j', {
    duration: 2000, // مدة الحركة
    origin: 'bottom', // اتجاه الحركة
    distance: '10px', // المسافة
    delay: 2000 // التأخير
});
