"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills");
    const skillsSection = document.querySelector(".skills");
    const workExperienceSection = document.querySelector(".work-experience");
    toggleButton?.addEventListener("click", () => {
        const isHidden = skillsSection?.style.display === "none";
        if (skillsSection && workExperienceSection) {
            skillsSection.style.display = isHidden ? "block" : "none";
            workExperienceSection.style.display = isHidden ? "block" : "none";
            toggleButton.innerText = isHidden ? "Show Less" : "Show More";
        }
    });
});
