// Encapsulated TypeScript Code to Prevent Global Scope Issues
(function () {
    var _a, _b, _c, _d, _e;
    // Collect data from inputs
    function collectResumeData() {
        var _a;
        var nameInput = document.getElementById("name-input");
        var name = (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || "No Name Provided";
        var emailInput = document.getElementById("email-input");
        var email = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || "No Email Provided";
        var phoneInput = document.getElementById("phone-input");
        var phone = (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) || "No Phone Provided";
        var imageInput = document.getElementById("image-input");
        var profilePicture = ((_a = imageInput === null || imageInput === void 0 ? void 0 : imageInput.files) === null || _a === void 0 ? void 0 : _a[0])
            ? URL.createObjectURL(imageInput.files[0])
            : null;
        var summaryInput = document.getElementById("summary-input");
        var summary = (summaryInput === null || summaryInput === void 0 ? void 0 : summaryInput.value) || "No Summary Provided";
        var educationInput = document.getElementById("education-input");
        var education = (educationInput === null || educationInput === void 0 ? void 0 : educationInput.value.split(",").map(function (edu) { return edu.trim(); }).filter(function (edu) { return edu.length > 0; })) || [];
        var jobTitleInput = document.getElementById("job-title-input");
        var companyInput = document.getElementById("company-input");
        var jobTitle = (jobTitleInput === null || jobTitleInput === void 0 ? void 0 : jobTitleInput.value) || "";
        var company = (companyInput === null || companyInput === void 0 ? void 0 : companyInput.value) || "";
        var skillsInput = document.getElementById("skills-input");
        var skills = (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value.split(",").map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill.length > 0; })) || [];
        return {
            name: name,
            email: email,
            phone: phone,
            profilePicture: profilePicture,
            summary: summary,
            education: education,
            experience: jobTitle && company ? [{ jobTitle: jobTitle, company: company }] : [],
            skills: skills,
        };
    }
    // Update resume display dynamically
    function updateResumeDisplay(data) {
        var resumeContainer = document.getElementById("resume-display");
        if (!resumeContainer) {
            console.error("Resume container not found!");
            return;
        }
        resumeContainer.innerHTML = "\n          <h2>".concat(data.name, "</h2>\n          <p><b>Email:</b> ").concat(data.email, "</p>\n          <p><b>Phone:</b> ").concat(data.phone, "</p>\n          <p><b>Summary:</b> ").concat(data.summary, "</p>\n          <h3>Education</h3>\n          <ul>").concat(data.education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "</ul>\n          <h3>Experience</h3>\n          <ul>").concat(data.experience.map(function (exp) { return "<li>".concat(exp.jobTitle, " at ").concat(exp.company, "</li>"); }).join(""), "</ul>\n          <h3>Skills</h3>\n          <ul>").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n      ");
        if (data.profilePicture) {
            resumeContainer.innerHTML += "<img src=\"".concat(data.profilePicture, "\" alt=\"Profile Picture\" style=\"max-width: 200px;\">");
        }
    }
    // Attach event listeners
    (_a = document.querySelector("button[type='submit']")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
        e.preventDefault();
        var data = collectResumeData();
        updateResumeDisplay(data);
    });
    (_b = document.getElementById("download-pdf")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var resumeContainer = document.getElementById("resume-display");
        var pdfContent = resumeContainer.innerHTML;
        alert("PDF Download feature to be integrated (e.g., using jsPDF).");
        console.log("PDF Content", pdfContent); // For now, logs the resume HTML
    });
    (_c = document.getElementById("update-education-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var data = collectResumeData();
        updateResumeDisplay(data);
    });
    (_d = document.getElementById("update-experience-btn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        var data = collectResumeData();
        updateResumeDisplay(data);
    });
    (_e = document.getElementById("update-skills-btn")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        var data = collectResumeData();
        updateResumeDisplay(data);
    });
})();
/*TypeScript Code for Resume Builder
// Ensure to compile it to JavaScript for browser compatibility
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    profilePicture: string | null; // Base64 or URL
    summary: string;
    education: string[];
    experience: { jobTitle: string; company: string }[];
    skills: string[];
  }
  
  // Collect data from inputs
  function collectResumeData(): ResumeData {
    const name = (document.getElementById("name-input") as HTMLInputElement).value;
    const email = (document.getElementById("email-input") as HTMLInputElement).value;
    const phone = (document.getElementById("phone-input") as HTMLInputElement).value;
  
    const imageInput = document.getElementById("image-input") as HTMLInputElement;
    const profilePicture = imageInput.files?.[0]
      ? URL.createObjectURL(imageInput.files[0])
      : null;
  
    const summary = (document.getElementById("summary-input") as HTMLTextAreaElement).value;
  
    const education = (document.getElementById("education-input") as HTMLInputElement)
      .value.split(",")
      .map((edu) => edu.trim());
  
    const jobTitle = (document.getElementById("job-title-input") as HTMLInputElement).value;
    const company = (document.getElementById("company-input") as HTMLInputElement).value;
  
    const skills = (document.getElementById("skills-input") as HTMLInputElement)
      .value.split(",")
      .map((skill) => skill.trim());
  
    return {
      name,
      email,
      phone,
      profilePicture,
      summary,
      education,
      experience: jobTitle && company ? [{ jobTitle, company }] : [],
      skills,
    };
  }
  
  // Update resume display dynamically
  function updateResumeDispaly(data: ResumeData) {
    const resumeContainer = document.getElementById("resume-display") as HTMLDivElement;
    resumeContainer.innerHTML = `
      <h2>${data.name}</h2>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Summary:</b> ${data.summary}</p>
      <h3>Education</h3>
      <ul>${data.education.map((edu) => `<li>${edu}</li>`).join("")}</ul>
      <h3>Experience</h3>
      <ul>${data.experience.map((exp) => `<li>${exp.jobTitle} at ${exp.company}</li>`).join("")}</ul>
      <h3>Skills</h3>
      <ul>${data.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
    `;
  
    if (data.profilePicture) {
      resumeContainer.innerHTML += `<img src="${data.profilePicture}" alt="Profile Picture" style="max-width: 200px;">`;
    }
  }
  
  // Generate resume button click event
  document.querySelector("button[type='submit']")?.addEventListener("click", (e) => {
    e.preventDefault();
    const data = collectResumeData();
    updateResumeDisplay(data);
  });
  
  // Shareable link generation (dummy implementation)
  const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
  document.getElementById("download-pdf")?.addEventListener("click", () => {
    const resumeContainer = document.getElementById("resume-display") as HTMLElement;
    const pdfContent = resumeContainer.innerHTML;
    alert("PDF Download feature to be integrated (e.g., using jsPDF).");
    console.log("PDF Content", pdfContent); // For now, logs the resume HTML
  });
  
  // Ensure dynamic updates for education, experience, and skills
  document.getElementById("update-education-btn")?.addEventListener("click", () => {
    const data = collectResumeData();
    updateResumeDisplay(data);
  });
  
  document.getElementById("update-experience-btn")?.addEventListener("click", () => {
    const data = collectResumeData();
    updateResumeDisplay(data);
  });
  
  document.getElementById("update-skills-btn")?.addEventListener("click", () => {
    const data = collectResumeData();
    updateResumeDisply(data);
  });*/
