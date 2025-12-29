<!-- src/routes/+page.svelte -->
<script>
  import { fade } from "svelte/transition";
  import { resolve } from "$app/paths";
</script>

<header class="parallax" in:fade={{ duration: 600 }}>
  <div class="header-content">
    <div class="intro">
      <h1>I'M BRIDGER BELYEA</h1>
      <p>Full Stack Developer</p>
      <a href={resolve("/contact")} class="button">Contact Me</a>
    </div>
    <img src="/bridger.png" alt="Bridger Belyea Portrait" class="portrait" />
  </div>
</header>

<section id="about" class="parallax" in:fade={{ duration: 600, delay: 200 }}>
  <div class="about-container">
    <h2>About</h2>
    <div class="about-content">
      <p>
        I'm a full-stack developer based in Provo, Utah, specializing in modern
        web applications and cloud solutions. With a unique background in both
        business and technology, I understand how to build software that
        actually solves problems and drives results.
      </p>
      <p>
        I work with modern JavaScript frameworks and deploy on the industry's
        leading cloud platforms to create everything from customer-facing
        websites to complex data management systems. Whether you need a new
        application built from scratch or want to improve an existing system, I
        focus on delivering clean, scalable solutions that work reliably for
        your business.
      </p>
    </div>
  </div>
</section>

<section id="skills" class="parallax" in:fade={{ duration: 600, delay: 400 }}>
  <h2>My Skills</h2>
  <div class="skills-grid">
    <div class="skill">
      <i class="devicon-typescript-plain"></i>
      <span>TypeScript</span>
    </div>
    <div class="skill">
      <i class="devicon-react-original"></i>
      <span>React</span>
    </div>
    <div class="skill">
      <i class="devicon-svelte-plain"></i>
      <span>Svelte</span>
    </div>
    <div class="skill">
      <i class="devicon-nixos-plain"></i>
      <span>Nix</span>
    </div>
    <div class="skill">
      <i class="devicon-linux-plain"></i>
      <span>Linux</span>
    </div>
    <div class="skill">
      <i class="devicon-git-plain"></i>
      <span>Git</span>
    </div>
    <div class="skill">
      <i class="devicon-bash-plain"></i>
      <span>Bash</span>
    </div>
    <div class="skill">
      <i class="devicon-html5-plain"></i>
      <span>HTML</span>
    </div>
    <div class="skill">
      <i class="devicon-css3-plain"></i>
      <span>CSS</span>
    </div>
    <div class="skill">
      <i class="devicon-nodejs-plain"></i>
      <span>Node</span>
    </div>
    <div class="skill">
      <i class="devicon-postgresql-plain"></i>
      <span>SQL</span>
    </div>
    <div class="skill">
      <i class="devicon-github-plain"></i>
      <span>GitHub</span>
    </div>
    <div class="skill">
      <i class="devicon-googlecloud-plain"></i>
      <span>GCP</span>
    </div>
    <div class="skill">
      <i class="devicon-amazonwebservices-plain-wordmark"></i>
      <span>AWS</span>
    </div>
    <div class="skill">
      <i class="devicon-docker-plain"></i>
      <span>Docker</span>
    </div>
    <div class="skill">
      <i class="devicon-jira-plain"></i>
      <span>Jira</span>
    </div>
    <div class="skill">
      <i class="devicon-python-plain"></i>
      <span>Python</span>
    </div>
    <div class="skill">
      <i class="devicon-express-original"></i>
      <span>Express</span>
    </div>
    <div class="skill">
      <i class="devicon-markdown-plain"></i>
      <span>Markdown</span>
    </div>
    <div class="skill">
      <i class="devicon-javascript-plain"></i>
      <span>JavaScript</span>
    </div>
  </div>
</section>
