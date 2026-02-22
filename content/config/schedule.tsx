import React from 'react';

export const baseTopics = [
  {
    id: 1,
    title: "Intro to the Web",
    description:
      "The web and the internet are interconnected systems that facilitate the exchange of data across computers worldwide. Web browsers communicate with servers using the HTTP/HTTPS protocol to fetch and display content, while the internet provides the infrastructure for this communication. Understanding IP addresses, DNS, and how websites are hosted provides a foundation for developing web applications.",
    meetings: [
      {
        date: "Mo, Jan 12",
        topic: "Intro to the Course",
        description: (
          <>
            <ul>
              <li>Course introduction and overview</li>
              <li>Understanding the web development landscape</li>
            </ul>
          </>
        ),
        activities: [
          { 
            title: "Slides", 
            url: "https://docs.google.com/presentation/d/1bExOA_cV_sO1vzJd18si3FogUr0mCXMU/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://roadmap.sh/frontend" target="_blank">Front-end developer roadmap</a> (plus <a href="https://roadmap.sh/javascript" target="_blank">JavaScript roadmap</a>)
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://roadmap.sh/backend" target="_blank">Back-end developer roadmap</a> (plus <a href="https://roadmap.sh/python" target="_blank">Python roadmap</a>)
              </>
            ),
          },
        ],
      },
      {
        date: "We, Jan 14",
        topic: "Web & Internet Infrastructure",
        description: (
          <>
            <ul>
              <li>Understanding the Internet and how it works</li>
              <li>Web infrastructure and protocols</li>
              <li>How browsers and servers communicate</li>
            </ul>
          </>
        ),
        activities: [
          { 
            title: "Slides", 
            url: "https://docs.google.com/presentation/d/1tvordwjI82vEB07Iyt_K1v2JHbpFd-mj/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          }
        ],
        readings: [
          {
            citation: (
              <>
                Intro to the Internet: Watch <a href="https://www.youtube.com/watch?v=VPToE8vwKew" target="_blank">How We Made the Internet</a>. 2022. Nation Squid
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.vox.com/2014/6/16/18076282/the-internet" target="_blank">The Internet Explained</a>. Timothy B. Lee, 2015.
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.vox.com/a/internet-maps" target="_blank">40 Maps That Explain the Internet</a>. Timothy B. Lee, 2014
              </>
            ),
          },
          {
            citation: (
              <>
                Intro to the Web: Watch <a href="https://www.youtube.com/watch?v=kBXQZMmiA4s" target="_blank">The Internet: HTTP & HTML</a>. Code.org
              </>
            ),
          },
        ],
      },
      {
        date: "Fr, Jan 16",
        topic: "The Internet & Society",
        description: (
          <>
            <ul>
              <li>Discussion of Internet and society issues</li>
              <li>Net neutrality, privacy, and current events</li>
            </ul>
          </>
        ),
        activities: [
          { 
            title: "Slides", 
            url: "https://docs.google.com/presentation/d/1iya_Gh6Nmnw3LwKf1ggHWBkcH8Elc7Ek/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          }
        ],
        readings: [
            {
              citation: (
                <>
                  Watch: Black Mirror. <a href="https://www.netflix.com/watch/80195733">Joan is Awful (2023), Season 6, Episode 1</a>. Netflix.
                  <ul>
                      <li>If you don't have Netflix, you can purchase the episode for $1.99 on Amazon.</li>
                      <li>Content warning: some profanity, nudity, and irreverent scenes. That said, the broader point of the piece surfaces many important socio-technical themes that are worth thinking about.</li>
                  </ul>
                </>
              ),
            },
           {
            citation: (
              <>
                NPR's All Things Considered (January 6, 2025): <a href="https://www.npr.org/2025/01/06/nx-s1-5247750/what-may-be-next-after-a-federal-court-struck-down-the-fccs-net-neutrality-rules" target="_blank">What may be next after a federal court struck down the FCC's net neutrality rules</a>
              </>
            ),
          },
          {
            citation: (
              <>
                NPR's All Things Considered (January 7, 2025): <a href="https://www.npr.org/2025/01/07/nx-s1-5251151/meta-fact-checking-mark-zuckerberg-trump" target="_blank">Meta says it will end fact checking as Silicon Valley prepares for Trump</a>
              </>
            ),
          }
        ],
        optionalReadings: [
          {
            citation: (
              <>
                NPR Podcast (26 minutes): <a href="https://www.npr.org/2022/11/18/1137657496/third-party-cookie-data-tracking-internet-user-privacy" target="_blank">The history and future of the cookie</a>
              </>
            ),
          },
          {
            citation: (
              <>
                NYT's Ezra Klein Show (1.5 hrs): "<a href="https://www.youtube.com/watch?v=8o9TQD5W1es" target="_blank">Will A.I. Break the Internet? Or Save It?</a>". Ezra Klein and Nilay Patel.
              </>
            ),
          },
          {
            citation: (
              <>
                Erik Hoel Opinion Piece (Feb, 2024): <a href="https://www.theintrinsicperspective.com/p/here-lies-the-internet-murdered-by" target="_blank">Here lies the internet, murdered by generative AI</a>
              </>
            ),
          },
          {
            citation: (
              <>
                Wall Street Journal (7 mins): <a href="https://www.wsj.com/video/how-advertisers-use-internet-cookies-to-track-you/92E525EB-9E4A-4399-817D-8C4E6EF68F93.html" target="_blank">Third-party cookies, explained</a>
              </>
            ),
          },
        ],
        assigned: {
          titleShort: "HW1",
          title: "The Internet and the News",
          url: "/assignments/hw01/",
          draft: 0,
        },
      },
    ],
  },

  {
    id: 2,
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) is the backbone of web content, structuring information on web pages. HTML can be used to create semantic, accessible layouts using elements like headings, paragraphs, lists, links, and media. This topic emphasizes the role of HTML in the broader web development process and how it integrates with CSS and JavaScript.",
    meetings: [
        { date: "Mo, Jan 19", topic: "MLK Day - No class", holiday: true },

      {
        date: "We, Jan 21",
        topic: "Introduction to HTML",
        description: (
          <>
            <ul>
              <li>HTML basics and structure</li>
              <li>Text markup, images, and media tags</li>
              <li>Form elements and compound tags</li>
            </ul>
          </>
        ),
        activities: [
          { 
            title: "Slides", 
            url: "https://docs.google.com/presentation/d/1FbBtEvrC31Jj-qg8hnhnnAwSnRojDbXV/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          },
          { 
            title: "Write your first HTML page", 
            url: "https://docs.google.com/document/d/1uV7vK9VrhuLGmLzaOCxf71jgsiQhsMOS/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-00-intro">HTML Resources</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-01-rules-of-thumb">Rules of Thumb</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-02-text">Text Markup Tags</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-04-images">Image Tags</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-05-media">Media Tags</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-06-lists-tables">Compound Tags</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-08-forms">Form Tags</a>
              </>
            ),
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                Tali Garsiel and Paul Irish. <a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank">How Browsers Work: Behind the scenes of modern web browsers</a>. html5rocks.com, 2011
              </>
            ),
          },
        ],
      },
      {
        date: "Fr, Jan 23",
        topic: "Introduction to HTML (Continued)",
        description: (
          <>
            <ul>
              <li>Hyperlinks and linking</li>
              <li>Semantic HTML tags</li>
              <li>Git and GitHub setup</li>
            </ul>
          </>
        ),
        activities: [
          { 
            title: "Slides", 
            url: "https://docs.google.com/presentation/d/1IUEju6-g-lXI_013KKnvACpYqsIahZLz/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          },
          { 
            title: "Linking (lecture files)", 
            url: "/course-files/lectures/lecture05.zip", 
            draft: 0
          },
          { 
            title: "Configure git and GitHub", 
            url: "/resources/sys-01-github", 
            draft: 0 
          },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-03-linking">Hyperlinks</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/html-07-semantic-tags">Semantic Tags</a>
              </>
            ),
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                Tali Garsiel and Paul Irish. <a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank">How Browsers Work: Behind the scenes of modern web browsers</a>. html5rocks.com, 2011
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://medium.com/the-underdog-writing-project/introduction-to-git-and-github-a5fdf5633923" target="_blank">Intro to git and GitHub</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://youtu.be/i_23KUAEtUM" target="_blank">Using GitHub with Visual Studio Code</a>
              </>
            ),
          },
        ],
      },
      
    ],
  },

  {
    id: 3,
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) is used to control the layout and visual presentation of HTML elements. It allows developers to define styles such as colors, fonts, and spacing, enhancing user experience. CSS also includes techniques like Flexbox and Grid for responsive, modern web designs.",
    meetings: [
      {
        date: "We, Jan 28",
        topic: "Introduction to CSS",
        description: (
          <>
            Introduction to CSS basics and selectors, color, fonts, and the box model for styling HTML elements.
          </>
        ),
        activities: [
          { title: "Slides", url: "https://docs.google.com/presentation/d/1ACte4_lPKk-Abrxjqz0UKld9ncFbxYKB/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 0 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-00-intro">Intro to CSS</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-01-rules-of-thumb">CSS Rules of Thumb</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-02-selectors">Selectors</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-03-color">Color</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-04-fonts">Text & fonts</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-05-box-model">The Box Model</a>
              </>
            ),
          },
        ],
      },
      {
        date: "Fri, Jan 30",
        topic: "CSS Layouts",
        description: (
          <>
            <ul>
              <li>CSS units and media queries</li>
              <li>Flexbox and CSS Grid</li>
              <li>Responsive design techniques</li>
            </ul>
          </>
        ),
        activities: [
          { 
            title: "Slides", 
            url: "https://docs.google.com/presentation/d/1gDkJZ400V28ibN9WeZs4x4GBdYzXctXY/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          },
          { title: "Lecture files", url: "/course-files/lectures/lecture07.zip", draft: 0 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-06-units">Units</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-09-media-queries">Media Queries</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-07-flexbox">CSS Flex</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/css-08-grid">CSS Grid</a>
              </>
            ),
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                <a href="https://university.webflow.com/lesson/flexbox-vs-grid" target="_blank">When to use Flex versus CSS Grid?</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks: A Complete Guide to Grid</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS Tricks: A Complete Guide to Flexbox</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">W3 Schools Flexbox Guide</a>
              </>
            ),
          },
        ],
        quizzes: [
          {
            quizName: "CSS Grid Garden (Complete at least the first 10 levels)",
            url: "https://cssgridgarden.com/",
          },
          {
            quizName: "Flexbox Froggy (Complete at least the first 10 levels)",
            url: "https://flexboxfroggy.com/",
          },
        ]
      },
    ],
  },

  {
    id: 4,
    title: "Design and Accessibility",
    description:
      "Design refers to the process of creating an aesthetically pleasing and functional user interface (UI) and user experience (UX). It encompasses layout, typography, color schemes, and interactivity to ensure the site is intuitive, visually appealing, and accessible. Good design is crucial for engaging users and meeting their needs effectively. While design is a huge topic in its own right, we will briefly review some important design principles, and take a quick look at some design tools and systems.",
    meetings: [
      {
        date: "We, Feb 4",
        topic: "Design with Accessibility in Mind",
        description: (
          <>
            <ul>
              <li>Design principles and visual design</li>
              <li>Accessibility best practices</li>
              <li>Color selection and style guides</li>
            </ul>
          </>
        ),
        activities: [
          { 
            title: "Slides", 
            url: "https://docs.google.com/presentation/d/1x3Jl24VkRICVy913N2Pf1LYEXM3sVpyq/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", 
            draft: 0 
          },
        ],
        readings: [
          {
            citation: (
              <>
                Williams, Robin (2015). <a href="https://drive.google.com/file/d/1lyeEZlnfo7QJ_SE059TrCgw8JUBiX6rV/view?usp=sharing" target="_blank">The Non-Designer's Design Book, Chapter 1</a>.
              </>
            ),
          },
          {
            citation: (
              <>
                Groves, Karl (Sept., 2013). <a href="https://karlgroves.com/the-6-simplest-web-accessibility-tests-anyone-can-do/" target="_blank">The 6 Simplest Web Accessibility Tests Anyone Can Do</a>.
              </>
            ),
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                Williams, Robin (2015). <a href="https://drive.google.com/file/d/1Ps9kGmRrj7Uw2B38KM_SoTKHtPhY-a3L/view?usp=sharing" target="_blank">The Non-Designer's Design Book, Chapter 2</a>.
              </>
            ),
          },
          {
            citation: (
              <>
                Please skim the <a href="/spring2026/resources/design-01-accessibility">Accessibility Resources</a>.
              </>
            ),
          },
        ],
      }
    ],
  },

  {
    id: 5,
    title: "Mockups & Wireframes",
    description:
      "Students will create mockups and wireframes for their PhotoApp project.",
    meetings: [
      {
        date: "Mo, Feb 9",
        topic: "UX/UI Design: Wireframing",
        description: (
          <>
            <p>Part 1 of a two-part tutorial on prototyping: Creating low-fidelity wireframes.</p>
          </>
        ),
        activities: [
            { title: "Slides", url: "https://docs.google.com/presentation/d/1AIWnVQGvImABnueI6yHqlD-8O9ZBFdH0/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 0 }
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://www.youtube.com/watch?v=iyrEStiTZh0" target="_blank">Figma Wireframe Tutorial for Beginners</a>. Aliena Cai
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.interaction-design.org/literature/topics/low-fidelity-prototypes" target="_blank">Low-Fidelity Prototypes</a>. Interaction Design Foundation
              </>
            ),
          },
        ],
      },
      {
        date: "We, Feb 11",
        topic: "UX/UI Design: High-Fidelity Prototypes",
        description: (
            <>
            <p>Part 2 of a two-part tutorial on prototyping: Creating high-fidelity prototypes in Figma.</p>
          </>
        ),
      },
      {
        date: "Fr, Feb 13",
        topic: "Exam 1 Review",
        description: (
          <>
            <p>
                Exam 1 will be completed during class on Monday, 2/16. It is due at the end of class.
            </p>
            <ul>
                <li><strong>1/3 of the exam will paper-based:</strong>
                    <ul>
                        <li>For this portion, you will not be able to use a computer, but you may bring a 1-page cheatsheet.</li>
                    </ul>
                </li>
                <li><strong>2/3 ot the exam will be coding exercises.</strong> For this portion of the quiz:
                    <ul>
                        <li>You MAY use the course website, as well as any notes, lecture files, or internet reference materials to complete the quiz.</li>
                        <li>You MAY NOT (a) use any Generative AI tools or (b) communicate with another human being during the quiz.</li>
                    </ul>
                </li>
            </ul>
          </>
        ),
        activities: [
          {
            title: "Study Guide",
            url: "https://docs.google.com/document/d/1tza9v5tG2HfPfI8id2xiIfd1MNamEMRH/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
            draft: 0
          },
          { 
            title: "Practice Exam 1: Coding Portion (Sample Exam 1)",
            url: "/exams/exam01-practice",
            draft: 0
          },
          { 
            title: "Practice Exam 1: Coding Portion (Sample Exam 2)",
            url: "/activities/exam01-practice-activity",
            draft: 0
          },
          {
            title: "Practice Exam 1: Written Portion",
            url: "https://docs.google.com/document/d/1W4dldHoWEA4h5533J5Gf1a0mkeDKa19s/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
            draft: 0
          },
          {
            title: "Practice Interactive Quizzes",
            url: "/quizzes",
            draft: 0
          }
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Exam 1: HTML/CSS/Web Architecture/Design",
    description:
      "Comprehensive exam covering web/internet architecture, HTML, CSS, design principles, and accessibility.",
    meetings: [
      {
        date: "Mo, Feb 16",
        topic: "Exam 1",
        description: (
          <p>
            A link to the exam will be posted here at the beginning of class. The first 1/3 of the exam will be written. The second 2/3 of the exam will be coding.
          </p>
        ),
      },
    ],
  },

  {
    id: 7,
    title: "JavaScript: DOM Programming",
    description:
      "In this unit, we will use JavaScript to manipulate the Document Object Model (DOM) and respond to user-initiated events. By the end of this section, you will know enough to start building simple, interactive web applications.",
    meetings: [
      {
        date: "We, Feb 18",
        topic: "Working with the DOM",
        description: (
          <>Introduction to  DOM Manipulation with JavaScrit
          </>
        ),
        activities: [
          { title: "Slides", url: "https://docs.google.com/presentation/d/1GXkBOYo2qAo58WBo_PEMepqMFKkUJI-z/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 0 },
          { title: "Lecture files", url: "/course-files/lectures/lecture09.zip", draft: 0 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom" target="_blank">Intro to the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom" target="_blank">How To Access Elements in the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom" target="_blank">How to Modify Attributes, Classes, and Styles in the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript" target="_blank">Understanding Events in JavaScript</a>. <em>Digital Ocean</em>
              </>
            ),
          },
          {
            citation: (
              <>
                Sarah's interactive <a href="/spring2026/course-files/activities/dom-tester/index.html" target="_blank">DOM manipulation worksheet</a>
              </>
            ),
          }
        ],
        optionalReadings: [
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/understanding-the-dom-tree-and-nodes" target="_blank">Understanding the DOM Tree and Nodes</a>. <em>Digital Ocean</em>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom" target="_blank">How to Traverse the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom" target="_blank">How to Make Changes to the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 8,
    title: "JavaScript: Intro to the Language & Programming Review",
    description:
      "Review of JavaScript programming fundamentals and introduction to object-oriented programming concepts in JavaScript.",
    meetings: [
      {
        date: "Mo, Feb 23",
        topic: "Intro to JavaScript + Programming Review",
        description: (
          <>
            <ul>
              <li>Review of JavaScript concepts covered so far</li>
              <li>Mapping Java concepts to JavaScript concepts</li>
              <li>Practice problems and exercises</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "https://docs.google.com/presentation/d/1oIedtmNZ_w0FM966tM4WjUj_eoUoMGno/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 0 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-01-java-comparison">JavaScript vs Java: Quick Reference</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-03-basic-programming">Basic Programming in JavaScript</a>
              </>
            ),
          },{
            citation: (
              <>
                <a href="/spring2026/resources/js-02-basic-programming-practice">Basic Programming practice problems</a>
              </>
            ),
          },
        ],
      },
      {
        date: "We, Feb 25",
        topic: "JavaScript Fundamentals: Functions & Control Structures Practice",
        description: (
          <>
            <ul>
              <li>Hands-on practice with functions and control structures</li>
              <li>Function declarations vs arrow functions</li>
              <li>DOM manipulation practice</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-02-basic-programming-practice">Basic Programming practice problems</a>
              </>
            ),
          },
        ],
      }
    ],
  },

  {
    id: 9,
    title: "JavaScript: Higher-Order Functions & Closures",
    description:
      "Functional programming concepts in JavaScript, including higher-order functions, closures, and working with data using map, filter, reduce, and forEach.",
    meetings: [
      {
        date: "Mo, Mar 2",
        topic: "Higher-Order Functions I: map, filter, reduce, forEach",
        description: (
          <>
            <ul>
              <li>Introduction to higher-order functions</li>
              <li>Working with arrays and data</li>
              <li>Practice with real data sets</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Array Methods Practice", url: "/spring2026/activities/js-05-array-methods-practice", draft: 0 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-06-higher-order-array-functions">Higher Order Array Functions</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-07-higher-order-practice">Higher Order Practice</a>
              </>
            ),
          },
        ],
      },
      {
        date: "We, Mar 4",
        topic: "Higher-Order Functions II: create your own + closures",
        description: (
          <>
            <ul>
              <li>Advanced higher-order function patterns</li>
              <li>Understanding closures</li>
              <li>Destructuring and spread operator</li>
              <li>Data manipulation practice</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Destructuring & Spread Practice", url: "/spring2026/activities/js-06-destructuring-practice", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-08-spread-operator-object-destructuring">Spread Operator & Object Destructuring</a>
              </>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 10,
    title: "Spring Break",
    description: "No class",
    meetings: [
      { date: "Mo, Mar 9", topic: "Spring Break - No class", holiday: true },
      { date: "We, Mar 11", topic: "Spring Break - No class", holiday: true },
      { date: "Fr, Mar 13", topic: "Spring Break - No class", holiday: true },
    ],
  },

  {
    id: 11,
    title: "JavaScript: Async/Await & Fetch",
    description:
      "The Fetch API is a modern JavaScript interface for making HTTP requests to servers and handling responses. Understanding how to use the Fetch API, handle response statuses, and work with data formats like JSON is key to building dynamic, data-driven web applications.",
    meetings: [
      {
        date: "Mo, Mar 16",
        topic: "Intro to HTTP & Fetch API",
        description: (
          <>
            <ul>
              <li>Introduction to HTTP protocol</li>
              <li>HTTP methods and status codes</li>
              <li>Using the Fetch API</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Tutorial 7", url: "/assignments/tutorial07", draft: 0 },
        ],
        assigned: {
          titleShort: "HW3",
          title: "Building a \"Vanilla\" JavaScript Client",
          url: "/assignments/hw03/",
          draft: 0,
        },
        readings: [
          {
            citation: (
              <>
                <a href="https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/" target="_blank">An introduction to HTTP: everything you need to know</a>. Free Code Camp
              </>
            ),
          },
        ],
      },
      {
        date: "We, Mar 18",
        topic: "Async/await + Fetch API Practice",
        description: (
          <>
            <ul>
              <li>Async/await vs Promises</li>
              <li>Making GET, POST, PUT, DELETE requests</li>
              <li>Error handling and response parsing</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Fetch Examples", url: "/course-files/lectures/lecture15.zip", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                Hughes, Noah (2023). <a href="https://dev.to/paperbyte/async-await-vs-fetchthen-20oe" target="_blank">Async Await vs Fetch.Then()</a>.
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-1-4-get-silvenleaf-21e2" target="_blank">fetch GET examples</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-2-4-post-by-silvenleaf-1kmh" target="_blank">fetch POST examples</a>
              </>
            ),
          },
        ],
      }
    ],
  },

  {
    id: 12,
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces, especially single-page applications (SPAs). It allows developers to create reusable components and manage the state of an application efficiently through a virtual DOM. React's declarative approach simplifies UI development and is widely adopted in modern web development.",
    meetings: [
      {
        date: "Mo, Mar 23",
        topic: "React I: Components, JSX, Props",
        description: (
          <>
            <ul>
              <li>Introduction to React</li>
              <li>Components and JSX</li>
              <li>Props and component composition</li>
              <li>Building user interfaces with React</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Hands-on React Activity", url: "/activities/react-activity", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://react.dev/learn/describing-the-ui" target="_blank">Describing the UI</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe" target="_blank">Tic Tac Toe</a>. You are strongly encouraged to do this on your own.
              </>
            ),
          },
        ],
      },
      {
        date: "We, Mar 25",
        topic: "React II: State & Effects",
        description: (
          <>
            <ul>
              <li>State management and component hierarchy</li>
              <li>useState and useEffect hooks</li>
              <li>Thinking in React</li>
            </ul>
          </>
        ),
        readings: [
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/thinking-in-react" target="_blank">Thinking in React</a>
              </>
            ),
          },
        ],
      },
      {
        date: "Mo, Mar 30",
        topic: "React III: Sharing State & Syncing with External Data",
        description: (
          <>
            <ul>
              <li>Sharing state between components</li>
              <li>Effects and side effects</li>
              <li>Syncing with external data sources</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/sharing-state-between-components" target="_blank">Sharing state between components</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/synchronizing-with-effects" target="_blank">Synchronizing with effects</a>
              </>
            ),
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/you-might-not-need-an-effect" target="_blank">You might not need an effect</a>
              </>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 13,
    title: "Exam 2: JavaScript & React",
    description:
      "Comprehensive exam covering JavaScript (DOM, higher-order functions, closures, async/await, Fetch API) and React (components, props, state, effects).",
    meetings: [
      {
        date: "We, Apr 1",
        topic: "Exam 2 Review",
        description: (
          <>
            <ul>
              <li>Review of JavaScript: DOM manipulation, event handlers</li>
              <li>Review of JavaScript: Higher-order functions, closures</li>
              <li>Review of JavaScript: Async/await and Fetch API</li>
              <li>Review of React: Components, props, state, effects</li>
            </ul>
          </>
        ),
      },
      {
        date: "Fr, Apr 3",
        topic: "Exam 2",
        description: (
          <>
            <ul>
              <li>JavaScript: DOM manipulation, event handlers</li>
              <li>JavaScript: Higher-order functions, closures</li>
              <li>JavaScript: Async/await and Fetch API</li>
              <li>React: Components, props, state, effects</li>
            </ul>
          </>
        ),
      },
    ],
  },

  {
    id: 14,
    title: "Servers & APIs",
    description:
      "Understanding how to design and build RESTful APIs, including HTTP methods, endpoint design, authentication, and security. Students will learn to create their own API endpoints using a config-driven approach.",
    meetings: [
      {
        date: "Mo, Apr 6",
        topic: "HTTP & REST Fundamentals",
        description: (
          <>
            <ul>
              <li>Server-side templates vs REST API</li>
              <li>Understanding REST architecture</li>
              <li>HTTP methods and RESTful design</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ],
        assigned: {
          titleShort: "HW3",
          title: "Building a \"Vanilla\" JavaScript Client",
          url: "/assignments/hw03/",
          draft: 0,
        },
        readings: [
          {
            citation: (
              <>
                <a href="https://nickjanetakis.com/blog/server-side-templates-vs-rest-api-and-javascript-front-end" target="_blank">Server Side Templates vs REST API and Javascript Front-End</a>. Janetakis, Nick (Oct., 2017).
              </>
            ),
          },
          {
            citation: (
              <>
                Avraham, Shif Ben (Sept. 5, 2017). <a href="https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f" target="_blank">What is REST — A Simple Explanation for Beginners</a>.
              </>
            ),
          },
        ],
      },
      {
        date: "We, Apr 8",
        topic: "Defining Endpoints: Config-Driven API Design",
        description: (
          <>
            <ul>
              <li>Introduction to config-driven API design</li>
              <li>Designing your own API endpoints</li>
              <li>Creating API configuration files</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ],
      },

    ],
  },
  {
    id: 15,
    title: "React + APIs Integration",
    description:
      "Integrating React applications with custom APIs, working with student-designed endpoints, and building full-stack applications.",
    meetings: [
      {
        date: "Mo, Apr 13",
        topic: "Final Project: API Design Workshop",
        description: (
          <>
            <ul>
              <li>Final project assigned</li>
              <li>API design workshop</li>
              <li>Designing your own API endpoints via config</li>
            </ul>
          </>
        ),
      },
      {
        date: "We, Apr 15",
        topic: "React with Custom APIs",
        description: (
          <>
            <ul>
              <li>Using student-designed endpoints in React</li>
              <li>Connecting React components to custom APIs</li>
              <li>Handling API responses and errors</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ],
      },
      {
        date: "Fr, Apr 17",
        topic: "Advanced React Patterns & Project Work",
        description: (
          <>
            <ul>
              <li>Advanced React patterns</li>
              <li>Final project work time</li>
              <li>API integration troubleshooting</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Tutorial 10", url: "/assignments/tutorial10", draft: 0 },
        ],
      },
      {
        date: "Mo, Apr 20",
        topic: "Final Project Work Day",
        description: (
          <>
            <ul>
              <li>In-class time to work on final project</li>
              <li>API endpoint testing and debugging</li>
              <li>Frontend-backend integration</li>
            </ul>
          </>
        ),
      },
    ],
  },

  {
    id: 16,
    title: "Final Project",
    description:
      "Students will design their own API endpoints using a config-driven approach and build a React application that consumes those endpoints. This project integrates all concepts learned throughout the course.",
    meetings: [
      {
        date: "Mo, Apr 22",
        topic: "Security & Authentication for APIs",
        description: (
          <>
            <ul>
              <li>Web security fundamentals</li>
              <li>Authentication headers and security</li>
              <li>JWT tokens and session management</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://www.youtube.com/watch?v=eHqbh0kyRYk" target="_blank">CSRF Explained | Understanding Cross Site Request Forgery | What is XSRF?</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://medium.com/@prashantramnyc/difference-between-session-cookies-vs-jwt-json-web-tokens-for-session-management-4be67d2f066e#:~:text=The%20JWT%20tokens%20are%20sometimes,by%20the%20%E2%80%9Csecret%20key%E2%80%9D." target="_blank">Difference between Session Cookies vs. JWT (JSON Web Tokens), for session management</a>
              </>
            ),
          },
        ],
      },
      {
        date: "We, Apr 24",
        topic: "Final Project Work Day",
        description: (
          <>
            <ul>
              <li>In-class time to work on final project</li>
              <li>Final touches and testing</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Tutorial 11", url: "/assignments/tutorial11", draft: 0 },
        ],
      },
      {
        date: "Mo, Apr 27",
        topic: "Final Project Due",
        description: (
          <>
            <ul>
              <li>Final project presentations</li>
              <li>Course reflection and synthesis</li>
            </ul>
          </>
        ),
      },
    ],
  },

  {
    id: 17,
    title: "Final Exam",
    description:
      "The final exam will take place from 11:30am to 2:30pm on May 6th in 008 Whitesides (same class as our regular classroom).",
    meetings: [
      {
        date: "We, May 6",
        topic: "Final Exam",
      },
    ],
  },
];
