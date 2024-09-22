document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll("li");

    // Delay the fade-in of each timeline item
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.5}s`;
    });
});
