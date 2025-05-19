// 1. Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    const textElement = document.getElementById('text-target');
    textElement.textContent = "Text changed successfully!";
    textElement.style.color = "green";
});

// 2. Modify CSS styles via JavaScript
const styleTarget = document.getElementById('style-target');
document.getElementById('change-style-btn').addEventListener('click', function() {
    styleTarget.style.backgroundColor = '#ff9800';
    styleTarget.style.color = 'white';
    styleTarget.style.borderRadius = '20px';
    styleTarget.style.fontWeight = 'bold';
});

// 3. Add/remove element when button is clicked
document.getElementById('toggle-element-btn').addEventListener('click', function() {
    const element = document.getElementById('toggle-target');
    element.classList.toggle('hidden');
});