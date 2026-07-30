// Переключатель темы: три состояния не нужны — кнопка просто инвертирует текущую
// и запоминает выбор. Пока пользователь не нажал, работает prefers-color-scheme.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');

  function current() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem('fixbox-theme', next);
      } catch (e) {}
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
