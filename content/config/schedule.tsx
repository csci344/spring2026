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
          { title: "Slides", url: "#", draft: 1 },
          { title: "Write your first HTML page", url: "https://docs.google.com/document/d/1Vu_bVKlnzeQceoxp7hRTXdyTeCcLDQIz/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
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
          { title: "Slides", url: "#", draft: 1 },
          { title: "Linking (lecture files)", url: "/course-files/lectures/lecture05.zip", draft: 1 },
          { title: "Configure git and GitHub", url: "/resources/sys-01-github", draft: 1 },
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
        date: "Mo, Jan 26",
        topic: "Tutorial 1"
      },
      {
        date: "We, Jan 28",
        topic: "Introduction to CSS",
        description: (
          <>
            <ul>
              <li>CSS basics and selectors</li>
              <li>Color, fonts, and the box model</li>
              <li>Styling HTML elements</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Design a Photo Gallery", url: "/activities/intro-css", draft: 1 },
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
          { title: "Slides", url: "#", draft: 1 },
          { title: "Lecture files", url: "/course-files/lectures/lecture07.zip", draft: 1 },
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
          {
            citation: (
              <>
                <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> (Complete at least the first 10 levels)
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> (Complete at least the first 10 levels)
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
        date: "Mo, Feb 4",
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
          { title: "Slides", url: "#", draft: 1 },
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
                Groves, Karl (Sept., 2013). <a href="https://karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do" target="_blank">The 6 Simplest Web Accessibility Tests Anyone Can Do</a>.
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
                Please skim the <a href="/spring2026/resources/accessibility" target="_blank">Accessibility Resources</a>.
              </>
            ),
            url: "/spring2026/resources/accessibility",
          },
        ],
      },
      {
        date: "We, Feb 6",
        topic: "Tutorial"
      },
      {
        date: "Fr, Feb 8",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 5,
    title: "JavaScript: Foundational Concepts & Programming Review",
    description:
      "JavaScript is a versatile, high-level programming language that runs in web browsers, enabling interactivity and dynamic content. In this unit, we will review basic programming concepts using JavaScript.",
    meetings: [
      {
        date: "Mo, Feb 9",
        topic: "Intro to JavaScript",
        description: (
          <>
            <ul>
              <li>JavaScript basics and syntax</li>
              <li>Variables, functions, and control structures</li>
              <li>Programming fundamentals review</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Intro to the language", url: "/course-files/lectures/lecture09.zip", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                Please read the <a href="/spring2026/resources/programming-review" target="_blank">Intro to Programming with JavaScript</a> page.
              </>
            ),
            url: "/spring2026/resources/programming-review",
          },
        ],
      },
      {
        date: "We, Feb 11",
        topic: "Tutorial"
      },
      {
        date: "Fr, Feb 13",
        topic: "Exam 1: Web Architecture, HTML, CSS, and Accessibility",
        exam: true,
      },
    ],
  },

  {
    id: 6,
    title: "JavaScript: Interacting with the DOM (Document Object Model)",
    description:
      "In this unit, we will use JavaScript to manipulate the Document Object Model (DOM) and respond to user-initiated events, and dynamically generate content from data. By the end of this section, you will know enough to start building simple, interactive web applications.",
    meetings: [
      {
        date: "Mo, Feb 16",
        topic: "Working with the DOM: Part I",
        description: (
          <>
            <ul>
              <li>Introduction to the DOM</li>
              <li>Accessing and modifying DOM elements</li>
              <li>DOM manipulation basics</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "DOM manipulation practice (part 1)", url: "/course-files/lectures/lecture10.zip", draft: 1 },
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
        ],
        optionalReadings: [
          {
            citation: (
              <>
                Sarah's interactive <a href="/spring2026/course-files/activities/dom-tester" target="_blank">DOM manipulation worksheet</a>
              </>
            ),
            url: "/spring2026/course-files/activities/dom-tester",
          },
        ],
      },
      {
        date: "We, Feb 18",
        topic: "Working with the DOM: Part II",
        description: (
          <>
            <ul>
              <li>Event handling in JavaScript</li>
              <li>DOM traversal and manipulation</li>
              <li>Creating and modifying DOM elements dynamically</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "DOM manipulation practice (part 2)", url: "/course-files/lectures/lecture11.zip", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript" target="_blank">Understanding Events in JavaScript</a>. <em>Digital Ocean</em>
              </>
            ),
          },
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
      {
        date: "Fri, Feb 20",
        topic: "Tutorial"
      },
      {
        date: "Mo, Feb 23",
        topic: "Overview of the JavaScript Language + Basic Programming",
        description: (
          <>
            <ul>
              <li>Review of JavaScript concepts covered so far</li>
              <li>Practice problems and exercises</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "JavaScript Review So Far", url: "/activities/practice-quiz02a", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-01-basic-programming">Basic Programming in JavaScript</a>: Know this material well.
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-02-basic-programming-practice">Basic programming practice problems</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-03-the-dom">Working with the DOM</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="/spring2026/resources/js-04-dom-practice">DOM practice problems</a>
              </>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 7,
    title: "Functional Programming",
    description:
      "Functional programming is a programming paradigm that emphasizes immutability, pure functions, and composition over state and side effects. In this unit, we will explore the principles of functional programming and how they can be applied to JavaScript.",
    meetings: [
      {
        date: "We, Feb 25",
        topic: "Higher Order Functions",
        description: (
          <>
            <ul>
              <li>Intro to functional programming</li>
              <li>Higher order functions</li>
              <li>forEach, map, filter, reduce</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ]
      },
      {
        date: "Fr, Feb 27",
        topic: "Tutorial 6: Higher Order Functions"
      },
    ],
  },

  {
    id: 8,
    title: "JavaScript: HTTP requests and the Fetch API",
    description:
      "The Fetch API is a modern JavaScript interface for making HTTP requests to servers and handling responses. It simplifies fetching resources like JSON data, files, or text from external APIs or web services using promises for asynchronous operations. Understanding how to use the Fetch API, handle response statuses, and work with data formats like JSON is key to building dynamic, data-driven web applications.",
    meetings: [
      {
        date: "Mo, Mar 2",
        topic: "Tutorial 6 Wrap; Intro to HTTP",
        description: (
          <>
            <ul>
              <li>Introduction to HTTP protocol</li>
              <li>HTTP methods and status codes</li>
              <li>Using Postman for API testing</li>
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
                <a href="https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/" target="_blank">An introduction to HTTP: everything you need to know</a>. Free Code Camp
              </>
            ),
          },
          {
            citation: (
              <>
                Sign for and download <a href="https://identity.getpostman.com/signup" target="_blank">Postman</a>.
              </>
            ),
          },
        ],
      },
      {
        date: "We, Mar 4",
        topic: "Asynchronous Functions and the JavaScript Fetch API",
        description: (
          <>
            <ul>
              <li>Async/await vs Promises</li>
              <li>Using the Fetch API</li>
              <li>Making GET, POST, PUT, DELETE requests</li>
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
                <a href="https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-1-4-get-silvenleaf-21e2" target="_blank">fetch GET examples</a>. Note: this example (and subsequent ones) demonstrate both "then" "async/await" techniques.
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
          {
            citation: (
              <>
                <a href="https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-3-4-put-by-silvenleaf-3oe8" target="_blank">fetch PUT examples</a>. Note: PATCH works the same way as PUT. Recall that PATCH only updates specific attributes of a resource while PUT replaces the entire resource with a new version.
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-4-4-delete-by-silvenleaf-4376" target="_blank">fetch DELETE examples</a>.
              </>
            ),
          },
        ],
      },
      {
        date: "Fr, Mar 6",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 9,
    title: "Spring Break",
    description: "No class",
    meetings: [
      { date: "Mo, Mar 9", topic: "Spring Break - No class", holiday: true },
      { date: "We, Mar 11", topic: "Spring Break - No class", holiday: true },
      { date: "Fr, Mar 13", topic: "Spring Break - No class", holiday: true },
    ],
  },

  {
    id: 10,
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces, especially single-page applications (SPAs). It allows developers to create reusable components and manage the state of an application efficiently through a virtual DOM. React's declarative approach simplifies UI development and is widely adopted in modern web development.",
    meetings: [
      {
        date: "Mo, Mar 20",
        topic: "React I",
        description: (
          <>
            <ul>
              <li>Introduction to React</li>
              <li>Components and JSX</li>
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
        date: "We, Mar 23",
        topic: "React II",
        description: (
          <>
            <ul>
              <li>Thinking in React</li>
              <li>State management and component hierarchy</li>
              <li>Sharing state between components</li>
              <li>Effects and side effects</li>
            </ul>
          </>
        ),
        readings: [
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/thinking-in-react" target="_blank">Thinking in React</a>. Make note of the steps: Break the UI into a component hierarchy, Build a static version in React, Find the minimal but complete representation of UI state (noting the difference between "props" and "state"), Identify where your state should live, Adding "inverse data flow"
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/sharing-state-between-components" target="_blank">Sharing state between components</a>
              </>
            ),
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/synchronizing-with-effects" target="_blank">Synchronizing with effects</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://beta.reactjs.org/learn/you-might-not-need-an-effect" target="_blank">You might not need an effect</a>
              </>
            ),
          },
        ],
      },
      {
        date: "Fr, Mar 25",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 11,
    title: "JavaScript Review",
    description:
      "Today's class will be dedicated to JavaScript programming review. Please review the study guide and practice problems, and come prepared to ask questions!",
    meetings: [
      {
        date: "Mo, Mar 27",
        topic: "JavaScript Review",
        description: (
          <>
            <ul>
              <li>Review of JavaScript language features</li>
              <li>DOM manipulation review</li>
              <li>Event handlers review</li>
              <li>Higher-order functions review</li>
              <li>Promises and async/await review</li>
              <li>HTTP Requests using JavaScript review</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
        ],
        readings: [
          {
            citation: "Language features",
            url: "#",
          },
          {
            citation: "DOM manipulation",
            url: "#",
          },
          {
            citation: "Event handlers",
            url: "#",
          },
          {
            citation: "Higher-order functions",
            url: "#",
          },
          {
            citation: "Promises",
            url: "#",
          },
          {
            citation: "HTTP Requests using JavaScript",
            url: "#",
          },
          {
            citation: "Passing functions as objects",
            url: "#",
          },
        ],
      },
      {
        date: "We, Mar 29",
        topic: "Tutorial"
      },
      {
        date: "Fr, Apr 1",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 12,
    title: "Python",
    description:
      "Python is a versatile programming language widely used for web development, data analysis, and scripting. Students will learn the basics of Python syntax, functions, and libraries like Flask or FastAPI for server-side development. This topic bridges the gap between front-end and back-end development.",
    meetings: [
      {
        date: "Mo, Apr 3",
        topic: "Python Primer",
        description: (
          <>
            <ul>
              <li>Introduction to Python</li>
              <li>Python syntax and basics</li>
              <li>Functions and libraries</li>
              <li>Preparing for server-side development</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Lecture files", url: "/course-files/lectures/lecture19.zip", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://books.trinket.io/pfe/index.html" target="_blank">Python for Everybody Textbook</a>, by Charles Severance (if you're new to Python)
              </>
            ),
          },
        ],
      },
      {
        date: "We, Apr 5",
        topic: "Tutorial"
      },
      {
        date: "Fr, Apr 7",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 13,
    title: "Servers",
    description:
      "Server-side architectures define how web applications process requests and serve responses from the server. This includes understanding client-server models, HTTP request-response cycles, and technologies like RESTful APIs and GraphQL. A solid grasp of server-side architecture is essential for building scaTutorialle and efficient web applications.",
    meetings: [
      {
        date: "Mo, Apr 6",
        topic: "HTTP & REST",
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
          {
            citation: (
              <>
                Fielding, Roy (2000). <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm" target="_blank">Roy Fielding's original paper</a>. For your reference.
              </>
            ),
          },
        ],
      },
      {
        date: "We, Apr 8",
        topic: "Tutorial"
      },
      {
        date: "Fr, Apr 10",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 14,
    title: "Databases & Object-Relational Mappings",
    description:
      "Databases store and organize data used by web applications, while Object-Relational Mapping (ORM) tools allow developers to interact with databases using object-oriented programming. ORMs like SQLAlchemy simplify the process of querying, updating, and managing data in relational databases. Learning about databases and ORMs is crucial for building data-driven web applications.",
    meetings: [
      {
        date: "Mo, Apr 13",
        topic: "Intro to Databases",
        description: (
          <>
            <ul>
              <li>Introduction to PostgreSQL</li>
              <li>Database queries and operations</li>
              <li>SQL basics: SELECT, INSERT, UPDATE, DELETE</li>
              <li>Joins and relationships</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "Get started on Tutorial 10", url: "/assignments/tutorial10", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://www.postgresql.org/about/" target="_blank">About PostgreSQL</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.postgresqltutorial.com/psql-commands/" target="_blank">psql commands</a> (command line)
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.postgresql.org/docs/current/tutorial-select.html" target="_blank">Querying a Table</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.postgresql.org/docs/current/tutorial-join.html" target="_blank">Joins Between Tables</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.postgresql.org/docs/current/tutorial-populate.html" target="_blank">Inserts</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.postgresql.org/docs/current/tutorial-update.html" target="_blank">Updates</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.postgresql.org/docs/current/tutorial-delete.html" target="_blank">Deletions</a>
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.postgresql.org/docs/current/tutorial-agg.html" target="_blank">Aggregate Functions</a>
              </>
            ),
          },
        ],
      },
      {
        date: "We, Apr 17",
        topic: "Intro to Object-Relational Mappings (ORMs)",
        description: (
          <>
            <ul>
              <li>Introduction to ORMs</li>
              <li>SQLAlchemy basics</li>
              <li>Mapping database tables to Python objects</li>
              <li>Querying with ORMs</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "#", draft: 1 },
          { title: "SQL Alchemy & Object-Relational Mappings", url: "/activities/intro-sql-alchemy", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://docs.sqlalchemy.org/en/20/orm/queryguide/index.html" target="_blank">SQL Alchemy Documentation</a>
              </>
            ),
          },
        ],
      },
      {
        date: "Fr, Apr 19",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 15,
    title: "Security & Authentication",
    description:
      "Web security ensures the protection of applications from common vulnerabilities like XSS, CSRF, and SQL injection. Authentication is the process of verifying user identity so that the application can tailor content and functionality while maintaining data privacy. In this unit, you will learn learn to identify risks and implement best practices such as input validation, secure authentication, and encryption. You will also learn about authentication strategies (e.g., JWT) in order to implement a secure login system.",
    meetings: [
      {
        date: "Mo, Apr 22",
        topic: "Security & Authentication",
        description: (
          <>
            <ul>
              <li>Web security fundamentals</li>
              <li>Common vulnerabilities (XSS, CSRF, SQL injection)</li>
              <li>Authentication strategies</li>
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
        topic: "Tutorial"
      },
      {
        date: "Fr, Apr 26",
        topic: "Tutorial"
      },
    ],
  },

  {
    id: 16,
    title: "Course Synthesis",
    description:
      "In this unit, we will reflect on the concepts and skills learned throughout the course, including integrating frontend and backend technologies, ensuring security, and employing best practices in design and coding. We will also discuss some of the considerations not covered in this course and consider some next steps if you want to enhance your learning.",
    meetings: [
      {
        date: "Mo, Apr 27",
        topic: "Reflection & Next Steps",
        description: (
          <>
            <ul>
              <li>Course reflection and synthesis</li>
              <li>Integrating frontend and backend technologies</li>
              <li>Best practices in design and coding</li>
              <li>Next steps for continued learning</li>
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
                <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f" target="_blank">How it feels to learn JavaScript in 2016</a>. Jose Aguinaga
              </>
            ),
          },
          {
            citation: (
              <>
                <a href="https://www.youtube.com/watch?v=Uo3cL4nrGOk" target="_blank">Interview with Senior JS Developer</a> (Parody)
              </>
            ),
          },
        ],
      },
      {
        date: "We, Apr 29",
        topic: "Tutorial"
      },
      {
        date: "Fr, May 1",
        topic: "Tutorial"
      },
    ],
  },
];
