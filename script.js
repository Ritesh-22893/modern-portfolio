//for typed library to show auto typing text
var typed = new Typed('#element', {
  strings: ['Frontend Developer.', 'UI Designer.', 'Graphics Designer.'],
  typeSpeed: 80,
  loop: true,
  backSpeed: 90,

  showCursor: true
});

// to show selected item in navbar items

let activeMenu = document.querySelectorAll(".navbar-items a i");
console.log(activeMenu)
//here we use forEach but not addEventListener because queryselectorall returns a Nodelist, not a single element

activeMenu.forEach(menu => {

  menu.addEventListener("click", () => {

    // inorder to remove selected background color from all navbar menus
    activeMenu.forEach(menu => {
      menu.classList.remove("active");
    })


    //apply new properties to selected navbar menus
    menu.classList.add("active");

  })
});

//-----------------Resume -----------------
const resumeRight = document.querySelector(".resume-right");

// for skills btn
const skillsContent = ` <div class="skills-section">
              <div class="frontend-skills">
              <h2><span>Frontend</span> Skills</h2>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-react"></i>
              </div>
               <div class="backend-skills">
              <h2><span>Backend</span> Skills</h2>
              <i class="fa-brands fa-node"></i>
               </div>
            </div> `

const skillsBtn = document.querySelector('.skills-btn')
skillsBtn.addEventListener('click', () => {
  resumeRight.innerHTML = skillsContent;
  skillsBtn.classList.add('primary-btn')

  //remove classes from other button
  educationBtn.classList.remove('primary-btn')
  aboutmeBtn.classList.remove('primary-btn')
  experienceBtn.classList.remove('primary-btn')


})
// set skill content to default.
resumeRight.innerHTML = skillsContent;

//for education btn

const educationBtn = document.querySelector(".education-btn");
const educationContent = `<div class="education-section">
              <div id="secondary" class="education-level">
                <h3><span>Secondary</span> Level</h3>
                <h4>( 2019 - 2021 )</h4>
                <p>
                  Completed <span>SEE</span> with <span>4.00 GPA</span> from
                  <span> Shankarnagar Durgadutta School </span>
                  located at Rupandehi, Tilottama - 1
                </p>
              </div>
              <div id="highersecondary" class="education-level">
                <h3><span>Higher</span> Secondary Level</h3>
                <h4>( 2021 - 2023 )</h4>
                <p>
                  Completed <span>+2</span> with <span>3.36 GPA</span> from
                  <span> Tilottama Campus </span>
                  located at Rupandehi, Tilottama - 5
                </p>
              </div>
              <div id="bachelor" class="education-level">
                <h3><span>Bachelor</span> Level</h3>
                <h4>( 2023 - Present )</h4>
                <p>
                  Studying <span>Bsc. CSIT</span><span></span> from
                  <span> Butwal Multiple Campus </span>
                  located at Rupandehi, Butwal - Golpark
                </p>
              </div>
            </div>`

educationBtn.addEventListener('click', () => {
  resumeRight.innerHTML = educationContent;
  resumeRight.className = "resume-right"
  educationBtn.classList.add("primary-btn")

  //remove classes from other button
  skillsBtn.classList.remove('primary-btn')
  aboutmeBtn.classList.remove('primary-btn')
  experienceBtn.classList.remove('primary-btn')


})

const experienceBtn = document.querySelector('.experience-btn');
const experienceContent = `  <div class="experience-section">
              <div id="gracathon" class="experience-level">
                <h3><span>Gracathon</span> Event</h3>
                <img
                  src="./assets/certificates/gracathon.jpg"
                  alt="gracathon_certificate"
                />
                
                <p>
                  Participated in gracathon presenting<span>FOOD2HUNGER</span>
                  along with team members diving deep in the field of web
                  development.
                </p>
              </div>
            </div> `
experienceBtn.addEventListener('click', () => {
  resumeRight.innerHTML = experienceContent;
  resumeRight.className = "resume-right"
  experienceBtn.classList.add('primary-btn')

  //remove classes from other button
  aboutmeBtn.classList.remove('primary-btn');
  educationBtn.classList.remove("primary-btn");
  skillsBtn.classList.remove('primary-btn');


})



const aboutmeBtn = document.querySelector('.aboutme-btn');
const aboutmeContent = ` <div class="aboutme-section">
              <h2><span>About</span> Me</h2>
              <p class="heading">
                Born and live at <span>Butwal</span>, with keen interest in
                becoming a self-sustain, self-established personna.
              </p>
              <div class="aboutme-info">
                <div class="left">
                  <h4 class="properties"><span>Name</span> : Ritesh Pokhrel</h4>
                  <h4 class="properties">
                    <span>Experience</span> : 2+ yesars
                  </h4>
                  <h4 class="properties">
                    <span>language</span> : English, Nepali
                  </h4>
                  <h4 class="properties"><span>Nationality</span> : Nepal</h4>
                </div>
                <div class="right">
                  <h4 class="properties">
                    <span>Email</span> : riteshpokhrel73@gmail.com
                  </h4>
                  <h4 class="properties">
                    <span>Phone</span> : +977 9815461099, 9767611249
                  </h4>
                  <h4 class="properties">
                    <span>Linkdin</span> : Ritesh Pokhrel
                  </h4>
                  <h4 class="properties">
                    <span>Hobbies</span> : Exploring AI, Self-studying, Chess
                  </h4>
                </div>
              </div>
            </div> `
aboutmeBtn.addEventListener('click', () => {
  resumeRight.innerHTML = aboutmeContent;
  resumeRight.className = "resume-right"
  aboutmeBtn.classList.add('primary-btn')

  //remove classes from other button
  experienceBtn.classList.remove('primary-btn');
  educationBtn.classList.remove("primary-btn");
  skillsBtn.classList.remove('primary-btn');
})


// FQAs section


// const downarrow = document.querySelectorAll("down-arrow")
// const answer = document.querySelector("answer")
// //flag for toggle between up and down arrow
// let flag = 0;
// downarrow.forEach(arrow =>{

//   arrow.addEventListener("click", () => {
//     console.log("arrow")
//     if (flag == 0) {
//       arrow.innerHTML = `<i class="fa-solid fa-angle-up">`;
//       answer.style.display = "block";
//       flag = 1;
//     }
//     else {
//       arrow.innerHTML = `<i class="fa-solid fa-angle-down">`;
//       answer.style.display = "none";
//       flag = 0;
//     }
  
//   })
// })


const downarrows = document.querySelectorAll(".down-arrow");
const answers = document.querySelectorAll(".answer");

downarrows.forEach((arrow, index) => {
  let flag = 0; // Each arrow has its own flag

  arrow.addEventListener("click", () => {
    console.log("Arrow clicked!");

    if (flag === 0) {
      arrow.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
      arrow.classList.add(".answer")
      answers[index].style.display = "block"; // Show the corresponding answer
      flag = 1;
    } else {
      arrow.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
      answers[index].style.display = "none"; // Hide the corresponding answer
      flag = 0;
    }
  });
});


