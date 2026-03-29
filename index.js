// Select all counters
const counters = document.querySelectorAll('.counter');

// Function to start counting animation
const startCounters = () => {
  counters.forEach(counter => {
    let current = 0;
    const target = +counter.getAttribute('data-target'); // get number to count to
    const suffix = counter.getAttribute('data-suffix') || ''; // optional + or %

    const updateCounter = () => {
      const increment = target / 100; // smooth increment

      if (current < target) {
        current += increment;
        counter.innerText = Math.ceil(current) + suffix; // append suffix
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + suffix; // ensure final value is exact
      }
    };

    updateCounter();
  });
};

// Wait until DOM is loaded, then observe when .stats enters viewport
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      startCounters();
      observer.disconnect(); // only run once
    }
  });

  observer.observe(document.querySelector('.stats'));
});