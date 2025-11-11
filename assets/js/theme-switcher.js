// Theme Switcher, Font Size Control & User Preferences
// Saves preferences to localStorage

(function() {
  'use strict';

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeFontSize();
    setupEventListeners();
  });

  // Theme Management
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  }

  function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
        themeIcon.parentElement.setAttribute('title', 'Switch to Light Mode');
      } else {
        themeIcon.className = 'fas fa-moon';
        themeIcon.parentElement.setAttribute('title', 'Switch to Dark Mode');
      }
    }
  }

  // Font Size Management
  function initializeFontSize() {
    const savedSize = localStorage.getItem('fontSize') || 'medium';
    applyFontSize(savedSize);
  }

  function applyFontSize(size) {
    // Remove all size classes
    document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');

    // Add the selected size class
    document.documentElement.classList.add('font-' + size);

    // Save to localStorage
    localStorage.setItem('fontSize', size);

    // Update dropdown if it exists
    updateFontSizeDropdown(size);
  }

  function updateFontSizeDropdown(size) {
    const dropdown = document.getElementById('font-size-select');
    if (dropdown) {
      dropdown.value = size;
    }
  }

  // Event Listeners
  function setupEventListeners() {
    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });
    }

    // Font size dropdown
    const fontSizeSelect = document.getElementById('font-size-select');
    if (fontSizeSelect) {
      fontSizeSelect.addEventListener('change', function(e) {
        applyFontSize(e.target.value);
      });
    }
  }

  // Expose functions globally if needed
  window.themeManager = {
    toggle: toggleTheme,
    setTheme: applyTheme,
    setFontSize: applyFontSize
  };

})();
