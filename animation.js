// Loading animation functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Fade out loading screen and show content
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 300);
        }
        loadingProgress.style.width = progress + '%';
    }, 200);
});