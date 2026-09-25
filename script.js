// Portfolio interactions
document.addEventListener('DOMContentLoaded', () => {
  // Keep the portfolio visible even when opened directly as a local HTML file.
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('show');
  });
});
