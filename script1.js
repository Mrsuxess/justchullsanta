
document.addEventListener('DOMContentLoaded', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
    });
});
