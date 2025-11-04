/* Theme toggle */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  
  // Set the default theme to light
  if (!saved) {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  function setTheme(mode) {
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (toggle) toggle.textContent = '☀';
      localStorage.setItem('theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
      if (toggle) toggle.textContent = '☾';
      localStorage.setItem('theme', 'light');
    }
  }

  if (saved) setTheme(saved);
  
  if (toggle) {
    toggle.addEventListener('click', function () {
      const isDark = root.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

