// Selecting the main centre div and navigation links
const centreDiv = document.querySelector(`.centre`);
const education = document.querySelector(`.education`);
const about = document.querySelector(`.about`);

// Event listener for the "About" link
about.onclick = () => {
  // Update the centre div with "About Me" content
  centreDiv.innerHTML = `
  <div class="centre">
      <div class="upper-part">
        <h1 class="centre-h1">ABOUT ME</h1>
        <p>I am a passionate and detail-oriented Full Stack Developer with expertise in frontend and backend technologies, including React, Tailwind, Node.js, Express.js, and MongoDB.</p>
      </div>
      <div class="middle-part">
        <h2 class="margin-top centre-h2">Bachelor's Degree, Software Engineering (2024-2027)</h2>
        <p>Currently pursuing a Bachelor's degree in Software Engineering, gaining expertise in full-stack development.</p>
        <h2 class="margin-top centre-h2">Certificate, UI/UX Design (2024)</h2>
        <p>Earned a certification in UI/UX Design, focusing on creating intuitive and visually appealing user interfaces. Gained hands-on experience with design tools, user research, wireframing, and prototyping.</p>
      </div>
      <div class="lower-part">
        <!-- Displaying soft skills with progress bars -->
        <p>Teamwork</p>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>  
        </div>
        <p>Problem Solving</p>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>  
        </div>
        <p>Critical Thinking</p>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>  
        </div>
        <p>Leadership</p>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>  
        </div>
        <p>Team Management</p>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>  
        </div>
      </div>
      <div class="centre-footer">
        <div class="centre-footer_p">
          <p>Full-Stack Engineer</p>
          <p class="work">Open For Work</p>
        </div>
      </div>
    </div>
  `;
  
  // Update the left sidebar
  document.querySelector('.left-side').innerHTML = `
  <div class="left-side font-styles">
      <div class="left-upper">
        <p class="left-upper_logo">CV</p>
      </div>
      <div class="left-middle rotate">
        EDUCATION
      </div>
      <div class="left-lower rotate">
        SOFT SKILLS
      </div>
      <div class="left-footer"></div>
    </div>
  `;
  
  // Update the right sidebar
  document.querySelector(`.right-side`).innerHTML = `
  <div class="right-side">
      <div class="right-upper">
        <img src="WhatsApp Image 2024-09-02 at 1.48.42 AM.jpeg" alt="cv photo" class="cv-photo">
      </div>
      <div class="right-middle">
        <h1 class="right-h2">Tapiwanashe</h1>
        <h1 class="right-h2">Marufu</h1>
        <p>Full Stack Developer</p>
      </div>
      <div class="right-lower">
        <h1 class="right-h2">HARD SKILLS</h1>
        <p>Adobe Photoshop</p>
        <div class="barr">
          <div class="bar1r"></div>
          <div class="bar2r"></div>  
        </div>
        <p>Adobe InDesign</p>
        <div class="barr">
          <div class="bar1r"></div>
          <div class="bar2r"></div>  
        </div>
        <p>Adobe Illustrator</p>
        <div class="barr">
          <div class="bar1r"></div>
          <div class="bar2r"></div>  
        </div>
        <p>Adobe XD</p>
        <div class="barr">
          <div class="bar1r"></div>
          <div class="bar2r"></div>  
        </div>
      </div>
    </div>
  `;
}

// Event listener for the "Education" link
education.onclick = () => {
  // Update the centre div with "Education" content
  centreDiv.innerHTML = `
  <section id="education" class="section">
    <h2>Education</h2>
  
    <div class="edu-item">
      <h3>Bachelor's Degree in Software Engineering (2024 - 2027)</h3>
      <p>
        Currently pursuing a degree in <strong>Software Engineering</strong>, gaining in-depth knowledge of 
        <strong>full-stack development, databases, software architecture, and UI/UX design</strong>. 
        My studies focus on building scalable applications, optimizing system performance, and mastering 
        modern technologies such as <strong>Laravel, Django, React, and Tailwind CSS</strong>.
      </p>
    </div>
  
    <div class="edu-item">
      <h3>Certificate in UI/UX Design (2024)</h3>
      <p>
        Earned a professional certification in <strong>UI/UX Design</strong>, specializing in 
        <strong>user research, wireframing, prototyping, and design thinking</strong>. 
        Learned to create intuitive and visually appealing interfaces using tools like 
        <strong>Adobe XD, Figma, and Photoshop</strong>.
      </p>
    </div>
  
    <div class="edu-item">
      <h3>Self-Taught Full-Stack Development (Ongoing)</h3>
      <p>
        Continuously improving my skills through online courses, projects, and real-world applications. 
        I have built multiple projects using <strong>SQL, PHP, JavaScript, Node.js, and Express.js</strong>, 
        combining backend efficiency with modern frontend frameworks.
      </p>
    </div>
  </section>  
  `;

  // Clear the left and right side sections
  document.querySelector('.left-side').innerHTML = ``;
  document.querySelector('.right-side').innerHTML = ``;
}

// Select the "Contact" link and the left sidebar
const contact = document.querySelector(`.contact`);
const leftSide = document.querySelector(`.left-side`);

// Event listener for the "Contact" link
contact.onclick = () => {
  // Update the centre div with the contact form
  centreDiv.innerHTML = `
  <section id="contact" class="section">
    <h2>Contact Me</h2>

    <form id="contactForm">
      <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" required>

      <label for="message">Message:</label>
      <textarea id="message" placeholder="Your message..." required></textarea>

      <button type="submit">Send</button>
    </form>

    <p id="responseMessage"></p>
  </section>
  `;

  // Handle form submission
  document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById("responseMessage").innerText = "Message Sent Successfully!"; // Display success message
  };

  // Clear the left and right side sections
  document.querySelector('.left-side').innerHTML = ``;
  document.querySelector('.right-side').innerHTML = ``;
};
