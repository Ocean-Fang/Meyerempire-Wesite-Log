const names = document.querySelectorAll(".select");
const info = document.querySelector(".about-info");
const nameTitle = document.querySelector(".name");
const credit = document.querySelector(".creds");
const contact = document.querySelector(".email-title");
const image = document.querySelector(".image");
const accordion = document.querySelector(".contentB");
const what = document.querySelector(".what");
const socials = document.querySelector(".socials-icons")

const evan = {
    name: "Evan Meyer",
    about: ` <p>Hey! My name's Evan and I'm an 18 year old based in Chicago. My journey kicked off 3 years ago when <strong>
    I founded the e-learning Young Tutors
    </strong>, as a way to help elementary students prepare for and test into top
    high schools. I fell in love with entrepreneurship and betting on myself, and have since been in a journey
    of trying to learn, expose myself to new people and industries, and challenge myself to pursue the
    uncomfortable.</p>
    <p>Following Young Tutors, I did a couple of internships in business and tech, with my most recent being
    11-months as a Data Analytics intern at LinkedIn</strong>. I then entered a gap year before college, where I looked
    to network, upskill, and portfolio/project build. I did a 4-month full-time Data bootcamp and got
    certified in advanced SQL, python, Tableau, Power BI, Excel, and more. When I graduated I visited the west
    coast for 2 weeks, driving down the coast, and received personal tours to each of the big-tech company
    headquarters, allowing me to learn a ton from people with my dream jobs! Finally, I got a data engineer
    role at a Fintech startup where, as the company's first data hire, I'm responsible for defining the data
    stack and how the company will use data to drive decisions going forward.</p>`,
    creds: "<p>Founder @16 | LinkedIn @17 | Data Enginneer @18<p/>",
    email: " <p>Email: evanmeyer1@gmail.com</p> ",
    image: "<img src='assets\\img\\4J4A8618 1.png' alt='A photo of me' class='photo'>",
    content: `<p><strong><a href="https://medium.com/@evanameyer1/the-nbas-biggest-disappointments-cbe1b6a7c441" target="_blank" > The NBA's Biggest Disappointments - </a></strong>
    Used python, SQL, and Tableau to webscrape, clean, analyze, and visualize live data to determine the most statistically ineffective NBA single season since 1996.</p>
    <p><strong><a href="https://medium.com/@evanameyer1/which-medical-specialty-is-the-best-f222d427c3ee" target="_blank" > Comparing Medical Specialties - </a></strong>
    Used python, SQL, and Tableau to clean, analyze, and visualize data, and score each medical specialty on adjusted compensation and personal happiness metrics, to determine the “best” and “worst” specialties</p>
    <p><strong>
    <a href="https://medium.com/@evanameyer1/the-cta-remodel-8a378f86e010" target="_blank" > Reworking Chicago's Public Transportation System - </a>
    </strong>
    Used Excel, SQL, and Tableau to determine the most dangerous and ineffective Chicago train stations, and make recommendations for how to increase daily ridership</p>
    <p><strong><a href="https://github.com/evanameyer1/Depop" target="_blank" > Depop Webscraping Project - </a></strong>
    Used python to dynamically login and webscrape data from desired Depop account, building a csv storing all of the data on clothing items both sold and unsold</p>
    <p><strong>NYT Crossword Tracker (ongoing) - </strong>
    Used python to webscrape the New York Times daily crossword, store and recreate the crossword in python
    Plan on using OpenAI’s API to automatically solve each crossword and store answers as well</p>
    <p><strong><a href="https://medium.com/@evanameyer1/using-excel-to-drive-airbnb-client-recommendations-eb8bb8075027" target="_blank" > Using Excel to Make Airbnb Recommendations - </a></strong>
    Used Excel and Power BI to analyzing trends on the Airbnb market and determine the most profitable home types, desired amenities, and more, then creating a Powerpoint presentation and presenting it to stakeholders</p>
    <p><strong><a href="https://medium.com/@evanameyer1/analyzing-the-wind-turbine-market-fda467c9e8e5" target="_blank" > Analyzing the Wind Turbine Market - </a></strong>
    Used python and Tableau to determine the feasibility of investment in the wind turbine industry, then presenting our findings and recommendations to stakeholders and interested investors</p>
    <p><strong><a href="https://medium.com/@evanameyer1/from-google-analytics-to-google-sheets-60b36b2b86d3" target="_blank" > Live Tracking App Data - </a></strong>
    Used python, Google Analytics/Drive APIs, Bigquery, and Data Studio to build live dashboards to visualize aggregated and cleaned data from client apps</p>
    <p><strong><a href="https://drive.google.com/drive/folders/174OorrzZ4daStdfyov-5xBqnZtBaeV2_?usp=sharing" target="_blank" > EdTech Tool Product Design - </a></strong> education tool (name pending) is aimed at helping underserved high school students that aren’t considering college build the self-confidence to pursue matriculation.</p>
    <p><strong>
    <a href="https://drive.google.com/drive/folders/1coxOG4kveDaEFxwc2cKwP3xBhd6mP8Yv?usp=sharing" target="_blank" > Circle Product Design - </a>
    </strong>Circle helps business and tech-inclined college students get over the barrier of networking, allowing them to take advantage of a simplified and personalized networking process.</p>
    <p><strong><a href="https://drive.google.com/drive/folders/1yUTF1Sw_VieTs4Ep_uzEqGeU7h5sMhpn?usp=sharing" target="_blank" > Scrap! Product Design - </a></strong>Scrap! provides artistically inclined and fashion interested teens and young adults with a consistent and comfortable place to explore and share all things related to fashion.</p>
    <p><strong><a href="https://medium.com/@evanameyer1/you-discover-an-old-time-machine-in-your-garage-whats-next-b8f20fd78042" target="_blank" > You discover an old time machine in your garage…what’s next? - </a></strong>A full-python choose your own adventure game where you play a character that has just stumbled across an old time machine - if you can manage to fix it up, the possibilities ahead are endless!</p>`,
    what: `
    <li>Data(analyzing, predictive, visualization, recommendations)</li>
    <li>All things AI</li>
    <li>All things machine learning</li>
    <li>A/B Testing and other psychology-based testing</li>
    <li>Automation</li>
    <li>Product design/research/development</li>`,
    s: `<a href="https://www.linkedin.com//evanameyer" target="_blank"><img class="linkedin" src="assets/img/linkedin.png" alt="LinkedIn"></a>
                <a href="https://www.github.com/evanameyer1" target="_blank"><img class="github" src="assets/img/github-mark.png"alt="GitHub"></a>
                <a href="https://medium.com/@evanameyer1" target="_blank"><img class="medium" src="assets/img/5279113_blog_medium_medium logo_icon.png" alt="Medium"></a>
    `,
    };

    const andrew = {
    name: "Andrew Ding",
    image: "<img src='assets\\img\\introduction-visual.png' alt='A photo of me' class='photo'>",
    about: `<p>
    He read about a hike called the incline in the guidebook. It said it was a strenuous hike and to bring plenty of water. “A beautiful hike to the clouds” described one review. “Not for the faint-hearted,” said another. “Not too bad of a workout”, bragged a third review. I thought I’d hike it when I fly in from Maryland on my day off from the senior citizen's wellness conference. I hiked 2 miles a day around the neighborhood so I could handle a 1.1-mile hike. What a foolish mistake that was for a 70-year-old low-lander.
    </p`,
    creds: "<p></p>",
    email: " <p>Email: Andrewjding@gmail.com</p> ",
    image: `<img src="./assets/img/introduction-visual.png" alt="A photo of me" class="photo">`,
    s: `
    <a>-</a>
    `,what: `
    <li>Computer Science</li>
    <li>AI</li>
    <li>Design</li>
    <li>Data Analysis</li>
    <li>Project Design</li>`,
    content:`<p><strong>Meyerempire Site Creation - </strong>Implemented the Team page of the Meyerempire Site
            using HTML, CSS, and JavaScript.</p>`
};

const ocean = {
    name: "Ocean Fang",
    image: "<img src='assets\\img\\self1.jpg' alt='A photo of me' class='photo'>",
    about: `<p>My name is Ocean and I am currently studying Philosophy and Data Science at University of California San Diego. My mind has always been drawn to problem solving, and although that may sound broad, I’ve found to love that about the way I think. I apply my aptitude for critical thinking to any field I can get my hands on, whether I’m solving technical or theoretical problems.</P>
    <p>I begun my exploration at 16 as I worked as a lab assistant at the University of Chicago researching cardiovascular dysfunction, co-authoring an abstract on the topic 2 years later. Now, I challenge my brain with analytical issues through my Philosophy degree while keeping up my love for STEM, working for a decentralized organization built on synthetic biology called ValleyDAO. 
    This gave me a proper introduction to the world of Web3, as well as an opportunity to formally practice all of my computer science skills from data science to UI/UX design to web development.
    </p>`,
    creds: "<p>AI+Web3 | Phil+CS @ UCSD | Data Sci @ ValleyDAO</p>",
    email: " <p>Email: ocfang@ucsd.edu</p> ",
    content: `
    <p><strong>Kinin B1R Inhibitor Prevents Sepsis-Induced Cardiac Dysfunction and Promotes Survival in Mice - </strong>
    Collected data regarding cardiac functionality in mice by analyzing created heart slices, then performed a series of
    statistical techniques in order to draw meaningful results for presentation.</p>

    <p><strong>Medical Profession Return on Investment Analysis - </strong>
    Used python and SQL to clean and analyze data, in order to score each medical 
    specialty on adjusted compensation and personal happiness metrics, to determine the “best” and “worst” specialties.</p>

    <p><strong>Identifying Entrepreneurialy Active Synthetic Biology Researchers - </strong>
    Used pandas and Selenium to clean, scrape, and analyze a database of synbio patent submissions, to find the most relevant and entrepreneurial researchers in the field and increase dealflow.</p>

    <p><strong>Cell Passage Number Analysis on Hypothermic Cells - </strong>
    Created an experiment based on survival rate of hypothermia induced cells, then 
    performed statistical analysis on the collected data for presentation.</p>

    <p><strong>Meyerempire Site Creation - </strong>Designed all parts of the Meyerempire website, creating low to high-fidelity designs with different levels of detail,
    then used HTML, CSS, and JavaScript to create the actual site.</p>

    <p><strong>ValleyDAO Website Additions (Ongoing) - </strong>Using Figma to design an additional interactive funding page, then using Webflow to integrate.</p>

    <p><strong>NASA SLI Program - </strong>Helped design, create, and launch a 99.5 in high powered rocket to 4500 ft. over the course of 5 months with financial and advisory support from NASA.</p>

    <p><strong>Time Machine Game - </strong>A full-python choose your own adventure game
    where you play a character that has just stumbled across an old time machine - if you can manage to fix it up, the possibilities ahead are endless!</p>

    `,what: `
    <li>AI mitigating resource scarity</li>
    <li>Decentralization</li>
    <li>All things Web3</li>
    <li>Bridging philosophy and STEM</li>
    <li>Synthetic Biology</li>`,
    s: `  <a href="https://www.linkedin.com/in/ocean-fang" target="_blank"><img class="linkedin" src="assets/img/linkedin.png" alt="LinkedIn"></a>
                <a href="https://github.com/Ocean-Fang" target="_blank"><img class="github" src="assets/img/github-mark.png" alt="GitHub"></a>
                <a href="https://medium.com/@oceanrfang" target="_blank"><img class="medium" src="assets/img/5279113_blog_medium_medium logo_icon.png"alt="Medium"></a>`,
};

const jacob = {
    name: "Jacob Robins",
    image: "<img src='assets\\img\\jacobpic.png' alt='A photo of me' class='photo'>",
    about: `<p>
    Hey! My name is Jacob and I am a current University of Michigan student with a diverse set of interests. 
    I love learning about a wide variety of fields as it helps me solve problems from multiple perspectives. 
    I became interested in Computer Science after teaching myself Python in high school. Last summer, 
    I worked as a supervisor at Midtown Chicago in charge of developing a new STEM component for their summer camp.
    Unexpectedly, I got the opportunity to apply my Python knowledge to automate their roster generation process that was previously done by hand.

    After recognizing my passion for Software Engineering, I began to search for more opportunities to make things more efficient in my own life. I gained experience in Java, C++, MATLAB, and HTML/CSS through these personal projects. Finally, I obtained a position at the CME Group as a Software Engineering Fellow where I will be working this summer
    </p`,
    creds: "<p>CME Group SWE | U of M ChemE | Posse Scholar</p>",
    email: " <p>Email: jhrobins@umich.edu</p> ",
    content: `
    <p><strong>Automated Roster Generation for Midtown Chicago</strong>
    Used python to sort data from a master spreadsheet and create customized rosters unique to each day, counselor, and camper.</p>
    <p><strong>Trust Registration Automation Project</strong>
    Used python to automate the submission of tax forms based on user profiles for a Law Office</p>
    <p><strong>Modeling COVID-19 with MATLAB</strong>
    Used MATLAB to create a differential equation SIR (susceptible, infected, recovered) model for a COVID-19 like disease.
    Introduced parameter L (asymptomatic) and V (vaccinated) using real data to simulate real-world phenomena.</p>
    <p><strong>Optimizing Bridge Design with MATLAB</strong>
    Created a differential equation model for common bridge designs and the effects of different walking patterns on the stability of the structure.
    <p><strong>Finding Brain Tumors in MRI Scans</strong>
    Used C++ to recognize obvious brain tumors in real MRI brain scans.</p>
    <p><strong>EMT-B Certification</strong>
    Became a nationally registered and Michigan licensed EMT-Basic after passing the NREMT exam and completing a training course.</p>
    <p><strong>Chemical Engineering Research at The Min Research Lab</strong>
    Created a novel MOF/MXene structure through a layer-by-layer process for drug incorporation and tunable release.
    Ideally will be used to coat biological mplants to offer a more effective method of treating Prosthetic Joint Infections.</p>`,
    s: `  <a href="https://www.linkedin.com/in/jacob-robins-6238b8201/" target="_blank"><img class="linkedin" src="assets/img/linkedin.png" alt="LinkedIn"></a>`,
    what: `
    <li>Engineering</li>
    <li>All things CS</li>
    <li>Automation</li>
    <li>Startup Reachout</li>`,
};

const aaron = {
  name: "Aaron Zhang",
  image: "<img src='assets\\img\\aaronpic.png' alt='A photo of me' class='photo'>",
  about: `<p>Hi! My name is Aaron and I’m studying Computer Engineer at UIUC. My desire to be involved with tech originates back to the moment I built my first PC when was 10 years old. Since then, I’ve been challenging myself in rigorous STEM classes and becoming a self-taught programmer. My goal has always been to provide technological innovations to improve lives across the globe. 

  During COVID, I collaborated with VTO Tutors and taught classes such as Intro to Python and Intro to Computer Hardware. I’ve been a self-employed private tutor for over two years, tutoring and mentoring children in piano and math. Additionally, last December I was given the opportunity to have an internship at San Diego State University. There, I gained hands-on experience under professor, Wei Wang, as I lead an intern group to build a running watch capable of tracking GPS, elevation, and heart rate. I aspire to utilize my computer engineering skills to achieve dreams as ambitious as the first flying car or as essential as developing a monitoring system for senior citizens. 
  </p`,
  creds:
    "<p>Tenacious problem-solver | Engineering @ UIUC | Aspiring entrepreneur</p>",
  email: " <p>Email: aaron11886z@gmail.com</p> ",
  content: `
  <p><strong>SDSU Internship Running Watch</strong>
  Lead an intern group and conjoined the software and hardware aspects. Watch was used in several high school cross country teams.</p>
  <p><strong>Dropshipping business</strong>
  Resold surfboards and Apple devices such as iPads and iPhones on eBay and OfferUp</p>
  <p><strong>Helped Start and Maintain Website</strong>
  Used HTML, CSS, and Javascript to make Mei Yin Piano Studio website.</p>
  <p><strong>Jukebox Project</strong>
  Used Raspberry Pi and Spotify’s API to play selected music through speakers.</p>
  <p><strong>Spikeball Tournament</strong>
  Organized a Spikeball tournament based in SoCal with over 300 participants. The event lasted two days while generating over $2,500 in revenue.</p>`,
  what: `
  <li>Entrepreneurship</li>
  <li>Website Development</li>
  <li>Automation</li>
  <li>Machine Learning</li>
  <li>Conjoining software and hardware</li>`,
  s: `  <a href="https://www.linkedin.com/in/aaron-zhang-83284a276/" target="_blank"><img class="linkedin" src="assets/img/linkedin.png" alt="LinkedIn"></a>`,
};

console.log(names);

names.forEach((name) => {
  name.addEventListener("click", () => {
    names.forEach((name) => name.classList.remove("active"));
    accordion.classList.remove("active");
    what.classList.remove("active");
    name.classList.toggle("active");
    changeInfo(name.dataset.name);
  });
});

const changeInfo = (name) => {
    info.innerHTML = eval(name).about;
    nameTitle.innerHTML = eval(name).name;
    credit.innerHTML = eval(name).creds;
    contact.innerHTML = eval(name).email;
    socials.innerHTML = eval(name).s;
    accordion.innerHTML =
    `<div class="label">Cool Shit I've Done</div><div class="content">` +
    eval(name).content +
    `</div>`;
    if(eval(name).image)
        image.innerHTML = eval(name).image;
    else
        image.innerHTML = `<img src="https://placekitten.com/200/200" alt="A photo of me" class="photo">`;
    what.innerHTML = 
    `<div class="what-title">Whats On My Mind</div><div class="what-info">` +
    eval(name).what +
    `</div>`;
    socials.innerHTML = eval(name).social-icons;
};

accordion.addEventListener("click", () => {
  accordion.classList.toggle("active");
  what.classList.toggle("active");
});