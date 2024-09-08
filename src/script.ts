document.addEventListener("DOMContentLoaded", () => {
	const toggleButton = document.getElementById(
		"toggle-skills"
	) as HTMLButtonElement;

	const skillsSection: HTMLElement | null = document.querySelector(".skills");

	const workExperienceSection: HTMLElement | null =
		document.querySelector(".work-experience");

	toggleButton?.addEventListener("click", () => {
		const isHidden: boolean = skillsSection?.style.display === "none";

		if (skillsSection && workExperienceSection) {
			skillsSection.style.display = isHidden ? "block" : "none";
			workExperienceSection.style.display = isHidden ? "block" : "none";
			toggleButton.innerText = isHidden ? "Show Less" : "Show More";
		}
	});
});
