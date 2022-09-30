const buttonSkills = document.querySelector("#button-skills");
const buttonCertificate = document.querySelector("#button-certificate");
const buttonProject = document.querySelector("#button-project");
const buttonExperience = document.querySelector("#button-experience");
const certificateContainer = document.querySelector("#certificate");
const skillsContainer = document.querySelector("#skills");
const experienceContainer = document.querySelector("#experience");
const projectContainer = document.querySelector("#project");
const darkToogle = document.querySelector("#dark-toogle");
const headProfile = document.querySelector("#head-profile");
const contactLogo = document.querySelector("#contact-logo");
const buttonContainer = document.querySelector("#button-container");
const toogleSection = document.querySelector("#toogle-section");
const bodyHtml = document.querySelector(".body");
const footerHtml = document.querySelector(".footer");
const particlesLight = document.querySelector("#particles-js");
const particlesDark = document.querySelector("#particles-dark");
const profilePicture = document.querySelector("#profile-picture");

// Pop up image
profilePicture.addEventListener("click", function () {
  Swal.fire({
    imageUrl: "../assets/image/my-profile.png",
    imageHeight: 250,
    imageAlt: "Profile Picture",
    showConfirmButton: false,
  });
});

// Dark Mode
darkToogle.addEventListener("click", function () {
  if (darkToogle.checked) {
    bodyHtml.classList.add("dark");
    headProfile.classList.add("dark");
    contactLogo.classList.add("dark");
    buttonContainer.classList.add("dark");
    toogleSection.classList.add("dark");
    footerHtml.classList.add("dark");
    particlesDark.classList.remove("hidden");
    particlesLight.classList.add("hidden");
  } else {
    bodyHtml.classList.remove("dark");
    headProfile.classList.remove("dark");
    contactLogo.classList.remove("dark");
    buttonContainer.classList.remove("dark");
    toogleSection.classList.remove("dark");
    footerHtml.classList.remove("dark");
    particlesDark.classList.add("hidden");
    particlesLight.classList.remove("hidden");
  }
});

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
