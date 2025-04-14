// Automatically add body and tail to each fish
document.querySelectorAll('.fish').forEach(fish => {
    const body = document.createElement('div');
    body.className = 'body';
  
    const tail = document.createElement('div');
    tail.className = 'tail';
  
    fish.appendChild(body);
    fish.appendChild(tail);
  
    // Optional: Reset animation on click
    fish.addEventListener('click', () => {
      fish.style.animation = 'none';
      void fish.offsetWidth; // force reflow
      fish.style.animation = `swim ${getComputedStyle(fish).getPropertyValue('--duration')} linear infinite`;
    });
  });
  