// Encapsulated TypeScript Code to Prevent Global Scope Issues
(() => {
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
      const nameInput = document.getElementById("name-input") as HTMLInputElement | null;
      const name = nameInput?.value || "No Name Provided";

      const emailInput = document.getElementById("email-input") as HTMLInputElement | null;
      const email = emailInput?.value || "No Email Provided";

      const phoneInput = document.getElementById("phone-input") as HTMLInputElement | null;
      const phone = phoneInput?.value || "No Phone Provided";

      const imageInput = document.getElementById("image-input") as HTMLInputElement | null;
      const profilePicture = imageInput?.files?.[0]
          ? URL.createObjectURL(imageInput.files[0])
          : null;

      const summaryInput = document.getElementById("summary-input") as HTMLTextAreaElement | null;
      const summary = summaryInput?.value || "No Summary Provided";

      const educationInput = document.getElementById("education-input") as HTMLInputElement | null;
      const education = educationInput?.value
          .split(",")
          .map((edu) => edu.trim())
          .filter((edu) => edu.length > 0) || [];

      const jobTitleInput = document.getElementById("job-title-input") as HTMLInputElement | null;
      const companyInput = document.getElementById("company-input") as HTMLInputElement | null;
      const jobTitle = jobTitleInput?.value || "";
      const company = companyInput?.value || "";

      const skillsInput = document.getElementById("skills-input") as HTMLInputElement | null;
      const skills = skillsInput?.value
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill.length > 0) || [];

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
  function updateResumeDisplay(data: ResumeData) {
      const resumeContainer = document.getElementById("resume-display") as HTMLDivElement;
      if (!resumeContainer) {
          console.error("Resume container not found!");
          return;
      }

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

  // Attach event listeners
  document.querySelector("button[type='submit']")?.addEventListener("click", (e) => {
      e.preventDefault();
      const data = collectResumeData();
      updateResumeDisplay(data);
  });

  document.getElementById("download-pdf")?.addEventListener("click", () => {
      const resumeContainer = document.getElementById("resume-display") as HTMLElement;
      const pdfContent = resumeContainer.innerHTML;
      alert("PDF Download feature to be integrated (e.g., using jsPDF).");
      console.log("PDF Content", pdfContent); // For now, logs the resume HTML
  });

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
      updateResumeDisplay(data);
  });
})();


  





