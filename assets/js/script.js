const buttonSkills = document.querySelector("#button-skills");
const buttonCertificate = document.querySelector("#button-certificate");
const buttonProject = document.querySelector("#button-project");
const buttonExperience = document.querySelector("#button-experience");
const certificateContainer = document.querySelector("#certificate");
const skillsContainer = document.querySelector("#skills");
const experienceContainer = document.querySelector("#experience");
const projectContainer = document.querySelector("#project");

buttonSkills.addEventListener("click", function () {
  certificateContainer.classList.add("hidden");
  skillsContainer.classList.remove("hidden");
  experienceContainer.classList.add("hidden");
  projectContainer.classList.add("hidden");

  buttonProject.classList.remove("active");
  buttonExperience.classList.remove("active");
  buttonCertificate.classList.remove("active");
  buttonSkills.classList.add("active");
});
buttonCertificate.addEventListener("click", function () {
  certificateContainer.classList.remove("hidden");
  experienceContainer.classList.add("hidden");
  projectContainer.classList.add("hidden");
  skillsContainer.classList.add("hidden");

  buttonCertificate.classList.add("active");
  buttonSkills.classList.remove("active");
  buttonProject.classList.remove("active");
  buttonExperience.classList.remove("active");
});
buttonExperience.addEventListener("click", function () {
  certificateContainer.classList.add("hidden");
  experienceContainer.classList.remove("hidden");
  projectContainer.classList.add("hidden");
  skillsContainer.classList.add("hidden");

  buttonCertificate.classList.remove("active");
  buttonSkills.classList.remove("active");
  buttonProject.classList.remove("active");
  buttonExperience.classList.add("active");
});

buttonProject.addEventListener("click", function () {
  certificateContainer.classList.add("hidden");
  experienceContainer.classList.add("hidden");
  projectContainer.classList.remove("hidden");
  skillsContainer.classList.add("hidden");

  buttonCertificate.classList.remove("active");
  buttonSkills.classList.remove("active");
  buttonProject.classList.add("active");
  buttonExperience.classList.remove("active");
});
