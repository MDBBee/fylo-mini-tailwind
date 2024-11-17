const btnToggle = document.getElementById('theme-toggle');
const iconDark = document.getElementById('theme-toggle-dark-icon');
const iconLight = document.getElementById('theme-toggle-light-icon');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  iconLight.classList.remove('hidden');
} else {
  iconDark.classList.remove('hidden');
}

btnToggle.addEventListener('click', toggleMode);

function toggleMode() {
  iconLight.classList.toggle('hidden');
  iconDark.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.querySelector('html').classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.querySelector('html').classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.querySelector('html').classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
}
