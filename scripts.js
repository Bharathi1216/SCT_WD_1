function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const pageId = item.getAttribute('href').substring(1);
    showPage(pageId);
  });
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Show the home page by default
showPage('home');
