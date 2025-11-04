/* Theme toggle */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  function setTheme(mode) {
    if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
      if (toggle) toggle.textContent = '☾';
      localStorage.setItem('theme', 'light');
    } else {
      root.removeAttribute('data-theme');
      if (toggle) toggle.textContent = '☀';
      localStorage.setItem('theme', 'dark');
    }
  }
  if (saved) setTheme(saved);
  if (toggle) {
    toggle.addEventListener('click', function () {
      const isLight = root.getAttribute('data-theme') === 'light';
      setTheme(isLight ? 'dark' : 'light');
    });
  }
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

