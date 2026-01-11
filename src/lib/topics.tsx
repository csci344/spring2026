import { getAllPosts, PostData } from './markdown';
import React from 'react';

// Type definitions for topics structure
interface Activity {
  title: string;
  url?: string;
  draft?: number;
}

interface Assignment {
  titleShort: string;
  title: string;
  url?: string;
  draft?: number;
}

export interface Reading {
  citation: string | React.ReactElement;
  url?: string;
}

export interface Meeting {
  date: string;
  topic: string;
  description?: string | React.ReactElement;
  activities?: Activity[];
  readings?: Reading[];
  optionalReadings?: Reading[];
  holiday?: boolean;
  discussionQuestions?: string;
  assigned?: Assignment | string;
  due?: Assignment | string;
}

export interface Topic {
  id: number;
  title: string;
  description: string | React.ReactElement;
  meetings: Meeting[];
}

type TopicsArray = Topic[];

// Date parsing utilities
function parseMeetingDate(meetingDate: string): string | null {
  // Format: "Tu, Jan 13" -> "2026-01-13"
  // Assume year 2026 for semester dates
  const year = 2026;
  
  const monthMap: Record<string, number> = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
  };
  
  const match = meetingDate.match(/(\w+), (\w+) (\d+)/);
  if (!match) return null;
  
  const [, , monthAbbr, day] = match;
  const month = monthMap[monthAbbr];
  if (!month) return null;
  
  const monthStr = String(month).padStart(2, '0');
  const dayStr = String(parseInt(day)).padStart(2, '0');
  
  return `${year}-${monthStr}-${dayStr}`;
}

// Helper function to convert YYYY-MM-DD to "Mo, Jan 12" format
function formatDateToMeeting(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  
  return `${dayName}, ${monthName} ${day}`;
}

function normalizeDate(dateStr: string | undefined): string | null {
  if (!dateStr) return null;
  // Ensure YYYY-MM-DD format
  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return dateStr;
  }
  return null;
}

// Enrichment function
async function enrichTopicsWithMarkdown(baseTopics: TopicsArray): Promise<TopicsArray> {
  // Read all activities and assignments
  const allActivities = getAllPosts('activities');
  const allAssignments = getAllPosts('assignments');
  
  // Filter activities with start_date and assignments with assigned_date
  const activitiesWithDates = allActivities.filter(a => a.start_date);
  const assignmentsWithDates = allAssignments.filter(a => a.assigned_date);
  
  // Create maps for quick lookup by date
  const activitiesByDate = new Map<string, PostData[]>();
  const assignmentsByDate = new Map<string, PostData[]>();
  
  activitiesWithDates.forEach(activity => {
    const date = normalizeDate(activity.start_date);
    if (date) {
      if (!activitiesByDate.has(date)) {
        activitiesByDate.set(date, []);
      }
      activitiesByDate.get(date)!.push(activity);
    }
  });
  
  assignmentsWithDates.forEach(assignment => {
    const date = normalizeDate(assignment.assigned_date);
    if (date) {
      if (!assignmentsByDate.has(date)) {
        assignmentsByDate.set(date, []);
      }
      assignmentsByDate.get(date)!.push(assignment);
    }
  });
  
  // Clone baseTopics to avoid mutating the original
  // We need to preserve React elements in descriptions, so we do a shallow copy
  const enrichedTopics: TopicsArray = baseTopics.map((topic: Topic) => ({
    ...topic,
    meetings: topic.meetings.map((meeting: Meeting) => ({
      ...meeting,
      activities: meeting.activities ? [...meeting.activities] : undefined,
      assigned: meeting.assigned ? (typeof meeting.assigned === 'object' ? { ...meeting.assigned } : meeting.assigned) : undefined,
    }))
  }));
  
  // Enrich each meeting
  enrichedTopics.forEach((topic: Topic) => {
    topic.meetings.forEach((meeting: Meeting) => {
      const meetingDateStr = parseMeetingDate(meeting.date);
      if (!meetingDateStr) return;
      
      // Find matching activities
      const matchingActivities = activitiesByDate.get(meetingDateStr) || [];
      
      // Find matching assignments
      const matchingAssignments = assignmentsByDate.get(meetingDateStr) || [];
      
      // Create auto-populated activity entries
      const autoActivities = matchingActivities.map((activity: PostData) => ({
        title: activity.title,
        url: `/activities/${activity.id}/`,
        draft: activity.draft || 0
      }));
      
      // Create auto-populated assignment entry (take first match if multiple)
      const autoAssignment = matchingAssignments.length > 0 
        ? (() => {
            const assignment = matchingAssignments[0];
            // Format titleShort as "HW" + number (e.g., "HW0", "HW1")
            const titleShort = assignment.num ? `HW ${assignment.num}` : 'HW';
            return {
              titleShort: titleShort,
              title: assignment.title,
              url: `/assignments/${assignment.id}/`,
              draft: assignment.draft || 0
            };
          })()
        : null;
      
      // Merge activities: keep manual entries, add auto-populated ones
      if (autoActivities.length > 0) {
        const existingActivities = meeting.activities || [];
        // Check if auto-populated activities already exist (by URL) to avoid duplicates
        const existingUrls = new Set(existingActivities.map((a: Activity) => a.url));
        const newAutoActivities = autoActivities.filter((a: Activity) => !existingUrls.has(a.url));
        meeting.activities = [...existingActivities, ...newAutoActivities];
      }
      
      // Merge assignment: only set if not already set manually
      if (autoAssignment && !meeting.assigned) {
        meeting.assigned = autoAssignment;
      }
    });
  });
  
  return enrichedTopics;
}

const baseTopics = [
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1JdVt_AVQLOv6SPNCSnOCAG4TIgf4nYyX/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 0 },
          { title: "Pre-course assessment questions & answers", url: "/activities/pre-course-assessment", draft: 0 },
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1vOZvK4tq4ApRtzza6-lKKkKt7UsKFtt_/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 0 },
          { title: "Analyze a website", url: "https://docs.google.com/document/d/1yKOwkE8hyltWnhMJo0UDgqIVIxwtL1oWTEvvlYfOSNs/edit", draft: 0 },
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
                Intro to the Web: Watch <a href="https://www.youtube.com/watch?v=kBXQZMmiA4s" target="_blank">The Internet: HTTP & HTML</a>. Code.org
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1fAUlJgp9mez7DDm9Y0hEMGgsfYF0CNKZ/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 0 },
          { title: "The Internet and Society: Discussion Questions", url: "https://docs.google.com/document/d/1cmc07CHLTmd9b5SzmC_y6I9kHtTdVXE81YoJKzJNick/edit?usp=sharing", draft: 0 },
        ],
        readings: [
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
          },
          {
            citation: (
              <>
                NPR's All Things Considered (January 10, 2025): <a href="https://www.npr.org/2025/01/10/nx-s1-5250165/tiktok-will-ask-the-supreme-court-to-strike-down-a-law-that-could-ban-the-app-in-days" target="_blank">TikTok will ask the Supreme Court to strike down a law that could ban the app in days</a>
              </>
            ),
          },
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
      {
        date: "Mo, Jan 21",
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1R_TTREM7v18VvzuWYZqFGCGvD2-weoSf/edit#slide=id.p1", draft: 1 },
          { title: "Write your first HTML page", url: "https://docs.google.com/document/d/1Vu_bVKlnzeQceoxp7hRTXdyTeCcLDQIz/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/resources/html-resources" target="_blank">HTML Resources</a>
              </>
            ),
            url: "/resources/html-resources",
          },
          {
            citation: (
              <>
                <a href="/resources/html-rules-of-thumb" target="_blank">Rules of Thumb</a>
              </>
            ),
            url: "/resources/html-rules-of-thumb",
          },
          {
            citation: (
              <>
                <a href="/resources/text-tags" target="_blank">Text Markup Tags</a>
              </>
            ),
            url: "/resources/text-tags",
          },
          {
            citation: (
              <>
                <a href="/resources/image-tags" target="_blank">Image Tags</a>
              </>
            ),
            url: "/resources/image-tags",
          },
          {
            citation: (
              <>
                <a href="/resources/media-tags" target="_blank">Media Tags</a>
              </>
            ),
            url: "/resources/media-tags",
          },
          {
            citation: (
              <>
                <a href="/resources/complex-tags" target="_blank">Compound Tags</a>
              </>
            ),
            url: "/resources/complex-tags",
          },
          {
            citation: (
              <>
                <a href="/resources/form-tags" target="_blank">Form Tags</a>
              </>
            ),
            url: "/resources/form-tags",
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                Tali Garsiel and Paul Irish. <a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank">How Browsers Work: Behind the scenes of modern web browsers</a>. html5rocks.com, 2011
              </>
            ),
            url: "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/",
          },
        ],
      },
      {
        date: "We, Jan 23",
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1kNOqFQyWuWcKUhh_XUjOXk0SASBDeWLO/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
          { title: "Linking (lecture files)", url: "/course-files/lectures/lecture05.zip", draft: 1 },
          { title: "Configure git and GitHub", url: "/activities/github", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/resources/linking" target="_blank">Hyperlinks</a>
              </>
            ),
            url: "/resources/linking",
          },
          {
            citation: (
              <>
                <a href="/resources/semantic-tags" target="_blank">Semantic Tags</a>
              </>
            ),
            url: "/resources/semantic-tags",
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                Tali Garsiel and Paul Irish. <a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank">How Browsers Work: Behind the scenes of modern web browsers</a>. html5rocks.com, 2011
              </>
            ),
            url: "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/",
          },
          {
            citation: (
              <>
                <a href="https://medium.com/the-underdog-writing-project/introduction-to-git-and-github-a5fdf5633923" target="_blank">Intro to git and GitHub</a>
              </>
            ),
            url: "https://medium.com/the-underdog-writing-project/introduction-to-git-and-github-a5fdf5633923",
          },
          {
            citation: (
              <>
                <a href="https://youtu.be/i_23KUAEtUM" target="_blank">Using GitHub with Visual Studio Code</a>
              </>
            ),
            url: "https://youtu.be/i_23KUAEtUM",
          },
        ],
      },
      {
        date: "Fr, Jan 25",
        topic: "Lab"
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
        date: "Mo, Jan 28",
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1JZVw7Z2TlChdp4YD2KMDl_2y5o-Fvoko/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
          { title: "Design a Photo Gallery", url: "/activities/intro-css", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/resources/css-reference" target="_blank">Intro to CSS</a>
              </>
            ),
            url: "/resources/css-reference",
          },
          {
            citation: (
              <>
                <a href="/resources/css-rules-of-thumb" target="_blank">CSS Rules of Thumb</a>
              </>
            ),
            url: "/resources/css-rules-of-thumb",
          },
          {
            citation: (
              <>
                <a href="/resources/selectors/" target="_blank">Selectors</a>
              </>
            ),
            url: "/resources/selectors/",
          },
          {
            citation: (
              <>
                <a href="/resources/color/" target="_blank">Color</a>
              </>
            ),
            url: "/resources/color/",
          },
          {
            citation: (
              <>
                <a href="/resources/fonts/" target="_blank">Text & fonts</a>
              </>
            ),
            url: "/resources/fonts/",
          },
          {
            citation: (
              <>
                <a href="/resources/box-model/" target="_blank">The Box Model</a>
              </>
            ),
            url: "/resources/box-model/",
          },
        ],
      },
      {
        date: "We, Jan 30",
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1LYXPi2izZ5ulCT8uJPQADP4uKqu7MlKt/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
          { title: "Lecture files", url: "/course-files/lectures/lecture07.zip", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="/resources/units/" target="_blank">Units</a>
              </>
            ),
            url: "/resources/units/",
          },
          {
            citation: (
              <>
                <a href="/resources/media-queries/" target="_blank">Media Queries</a>
              </>
            ),
            url: "/resources/media-queries/",
          },
          {
            citation: (
              <>
                <a href="/resources/flexbox/" target="_blank">CSS Flex</a>
              </>
            ),
            url: "/resources/flexbox/",
          },
          {
            citation: (
              <>
                <a href="/resources/css-grid/" target="_blank">CSS Grid</a>
              </>
            ),
            url: "/resources/css-grid/",
          },
          {
            citation: (
              <>
                <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> (Complete at least the first 10 levels)
              </>
            ),
            url: "https://cssgridgarden.com/",
          },
          {
            citation: (
              <>
                <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> (Complete at least the first 10 levels)
              </>
            ),
            url: "https://flexboxfroggy.com/",
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                <a href="https://university.webflow.com/lesson/flexbox-vs-grid" target="_blank">When to use Flex versus CSS Grid?</a>
              </>
            ),
            url: "https://university.webflow.com/lesson/flexbox-vs-grid",
          },
          {
            citation: (
              <>
                <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks: A Complete Guide to Grid</a>
              </>
            ),
            url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
          },
          {
            citation: (
              <>
                <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS Tricks: A Complete Guide to Flexbox</a>
              </>
            ),
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          },
          {
            citation: (
              <>
                <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">W3 Schools Flexbox Guide</a>
              </>
            ),
            url: "https://www.w3schools.com/css/css3_flexbox.asp",
          },
        ],
      },
      {
        date: "Fr, Feb 1",
        topic: "Lab"
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1JkWpMpOrohF30GFrM3zdyz-rqiOKGCsU/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                Williams, Robin (2015). <a href="https://drive.google.com/file/d/1lyeEZlnfo7QJ_SE059TrCgw8JUBiX6rV/view?usp=sharing" target="_blank">The Non-Designer's Design Book, Chapter 1</a>.
              </>
            ),
            url: "https://drive.google.com/file/d/1lyeEZlnfo7QJ_SE059TrCgw8JUBiX6rV/view?usp=sharing",
          },
          {
            citation: (
              <>
                Groves, Karl (Sept., 2013). <a href="https://karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do" target="_blank">The 6 Simplest Web Accessibility Tests Anyone Can Do</a>.
              </>
            ),
            url: "https://karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do",
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                Williams, Robin (2015). <a href="https://drive.google.com/file/d/1Ps9kGmRrj7Uw2B38KM_SoTKHtPhY-a3L/view?usp=sharing" target="_blank">The Non-Designer's Design Book, Chapter 2</a>.
              </>
            ),
            url: "https://drive.google.com/file/d/1Ps9kGmRrj7Uw2B38KM_SoTKHtPhY-a3L/view?usp=sharing",
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
        topic: "Lab"
      },
      {
        date: "Fr, Feb 8",
        topic: "Lab"
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1tiK0vmA9JXhalSs2OQc6mlX9LEJAE6DI/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
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
        topic: "Lab"
      },
      {
        date: "Fr, Feb 13",
        topic: "Lab"
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1C0fzNWN-FpGB7h3FZ7D0jUbvjQHgR_7U/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
          { title: "DOM manipulation practice (part 1)", url: "/course-files/lectures/lecture10.zip", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom" target="_blank">Intro to the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
            url: "https://www.digitalocean.com/community/tutorials/introduction-to-the-dom",
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom" target="_blank">How To Access Elements in the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
            url: "https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom",
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom" target="_blank">How to Modify Attributes, Classes, and Styles in the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
            url: "https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom",
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
          { title: "Slides", url: "https://docs.google.com/presentation/d/1aoopafEiFjdhPdBbp5c711qxoudSHL2K/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
          { title: "DOM manipulation practice (part 2)", url: "/course-files/lectures/lecture11.zip", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript" target="_blank">Understanding Events in JavaScript</a>. <em>Digital Ocean</em>
              </>
            ),
            url: "https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript",
          },
        ],
        optionalReadings: [
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/understanding-the-dom-tree-and-nodes" target="_blank">Understanding the DOM Tree and Nodes</a>. <em>Digital Ocean</em>
              </>
            ),
            url: "https://www.digitalocean.com/community/tutorials/understanding-the-dom-tree-and-nodes",
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom" target="_blank">How to Traverse the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
            url: "https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom",
          },
          {
            citation: (
              <>
                <a href="https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom" target="_blank">How to Make Changes to the DOM</a>. <em>Digital Ocean</em>
              </>
            ),
            url: "https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom",
          },
        ],
      },
      {
        date: "Fr, Feb 20",
        topic: "JavaScript Review",
        description: (
          <>
            <ul>
              <li>Review of JavaScript concepts covered so far</li>
              <li>Practice problems and exercises</li>
            </ul>
          </>
        ),
        activities: [
          { title: "Slides", url: "https://docs.google.com/presentation/d/1BsGKdRM09ZHerZyn6LGcs5nNNLhd9wn7/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true", draft: 1 },
          { title: "JavaScript Review So Far", url: "/activities/practice-quiz02a", draft: 1 },
        ],
        readings: [
          {
            citation: (
              <>
                <a href="../resources/01-basic-programming/" target="_blank">Basic Programming in JavaScript</a>: Know this material well.
              </>
            ),
            url: "../resources/01-basic-programming/",
          },
          {
            citation: (
              <>
                <a href="../resources/02-basic-programming-practice/" target="_blank">Basic programming practice problems</a>
              </>
            ),
            url: "../resources/02-basic-programming-practice/",
          },
          {
            citation: (
              <>
                <a href="../resources/03-the-dom/" target="_blank">Working with the DOM</a>
              </>
            ),
            url: "../resources/03-the-dom/",
          },
          {
            citation: (
              <>
                <a href="../resources/04-dom-practice/" target="_blank">DOM practice problems</a>
              </>
            ),
            url: "../resources/04-dom-practice/",
          },
        ],
      },
    ],
  },

  {
    id: 7,
    title: "UX, Prototyping, and Revisiting Assumptions",
    description:
      "Introduce HCD and low-fidelity prototyping once technical fluency exists. Use critique to surface mismatches between user intent and current implementation.",
    meetings: [
      {
        date: "Mo, Feb 23",
        topic: "Human-centered design + low-fi prototyping",
        description: (
          <>
            <ul>
              <li>Intro to HCD</li>
              <li>Create low-fidelity prototypes (paper or Figma) for a targeted flow</li>
              <li>Studio critique: identify mismatches between current UI/system behavior and user goals</li>
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
                Krug, S. (2014). <em>Don’t Make Me Think</em>. (Ch. 1–2 -- selected)
              </>
            ),
            url: "https://www.sensible.com/dmmt.html",
          },
          {
            citation: (
              <>
                Nielsen Norman Group. <em>10 Usability Heuristics</em>. (selected)
              </>
            ),
            url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
          },
        ],
      },
      {
        date: "We, Feb 25",
        topic: "Iterate based on prototype + review focus on assumptions",
        description: (
          <>
            <ul>
              <li>Studio: revise a flow or UI element based on prototype critique</li>
              <li>Review focus shifts: assess user assumptions and flow clarity (not code style)</li>
            </ul>
          </>
        ),
        assigned: {
          titleShort: "HW6",
          title: "Low-Fi + Hi-Fi Prototypes + UX Implementation",
          url: "/assignments/hw06-lowfi-prototype/",
          draft: 1,
        },
      },
      {
        date: "Fr, Feb 27",
        topic: "Lab"
      },
    ],
  },

  {
    id: 8,
    title: "Design Synthesis + Sprint 1 Demo + Phase 1 Reflection",
    description:
      "Synthesize design work, stabilize Phase 1 contributions, and demo. Prepare for the Phase 2 shift from exploration to shared ownership.",
    meetings: [
      {
        date: "Mo, Mar 2",
        topic: "High-fi prototyping + demo prep",
        description: (
          <>
            <ul>
              <li>High-fidelity prototyping and alignment: confirm prototype behaviors map to system behaviors</li>
              <li>Studio: prepare Sprint 1 demos and ensure PRs are reviewable and rebased (linear history)</li>
            </ul>
          </>
        ),
        readings: [
          {
            citation: (
              <>
                Short reading: <em>Agile Overview</em> (forward-looking; prepares for Phase 2)
              </>
            ),
            url: "/readings/agile-overview/",
          },
        ],
      },
      {
        date: "We, Mar 4",
        topic: "Sprint 1 demos + Phase 1 retrospective",
        description: (
          <>
            <ul>
              <li>Sprint 1 demos</li>
              <li>Phase 1 retrospective: what improved (tests, reviews, design clarity), what remained hard, and what will change in Phase 2 (shared repo, vertical slices)</li>
            </ul>
          </>
        ),
        assigned: {
          titleShort: "HW7",
          title: "Phase 1 Reflection + Phase 2 Preparation",
          url: "/assignments/hw07-phase1-reflection/",
          draft: 1,
        },
      },
      {
        date: "Fr, Mar 6",
        topic: "Lab"
      },
    ],
  },

  // Keep everything after Week 8 as-is from your original file
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
    title: "Phase 2: Agile and Vertical Features",
    description: "Introduction to Agile. Form vertical teams. Begin feature development in shared repo.",
    meetings: [
      {
        date: "Mo, Mar 16",
        topic: "Agile introduction + vertical team formation",
        description: (
          <>
            <ul>
              <li>Agile principles: iterations, user stories, sprints</li>
              <li>Form vertical teams: backend + web + mobile developers</li>
              <li>Team working agreement for Phase 2 (collaboration, communication)</li>
              <li>Discussion: "How is Phase 2 different? What skills do we need?"</li>
            </ul>
          </>
        ),
        readings: [
          {
            citation: "Schwaber, K., & Sutherland, J. The Scrum Guide.",
            url: "https://scrumguides.org/scrum-guide.html",
          },
        ],
      },
      {
        date: "We, Mar 18",
        topic: "Sprint 1 planning + feature assignment",
        description: (
          <>
            <ul>
              <li>Review shared repo structure and workflow</li>
              <li>Assign features to vertical teams</li>
              <li>Sprint 1 planning: break features into user stories and tasks</li>
              <li>Define API contracts (shared types)</li>
              <li>Set up feature branches</li>
              <li>Team reflection: "What are our goals? What are we worried about?"</li>
            </ul>
          </>
        ),
      },
    ],
  },

  {
    id: 11,
    title: "Feature Development Sprint 1",
    description: "Build first vertical feature. Practice daily standups, PRs, code review across teams. Reflect on collaboration challenges.",
    meetings: [
      {
        date: "Mo, Mar 23",
        topic: "Feature development kickoff + daily standup protocol",
        description: (
          <>
            <ul>
              <li>Teams begin feature work</li>
              <li>Daily standup protocol: what did you do, what will you do, blockers</li>
              <li>Pair programming: backend + frontend developers work together</li>
              <li>Discussion: "How do we coordinate? What's hard about shared codebase?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "We, Mar 25",
        topic: "Feature work + PR workflow + code review",
        description: (
          <>
            <ul>
              <li>Teams continue feature work</li>
              <li>Open PRs, practice code review across teams</li>
              <li>Resolve merge conflicts, coordinate API changes</li>
              <li>Team reflection: "What's working? What's challenging? How are we communicating?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "Mo, Mar 30",
        topic: "Sprint 1 continued: feature development",
        description: (
          <>
            <ul>
              <li>Teams continue Sprint 1 feature work</li>
              <li>Daily standups</li>
              <li>Pair programming and collaboration</li>
              <li>Team check-in: "What progress have we made? What blockers do we have?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "We, Apr 1",
        topic: "Sprint 1 continued: integration and testing",
        description: (
          <>
            <ul>
              <li>Teams continue feature work</li>
              <li>Integration testing across components</li>
              <li>Code review and PR refinement</li>
              <li>Team reflection: "What's working well? What needs improvement?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "Fr, Mar 27",
        topic: "Lab"
      },
      {
        date: "Fr, Apr 3",
        topic: "Lab"
      },
    ],
  },

  {
    id: 12,
    title: "Feature Development Sprint 2",
    description: "Continue feature development. Sprint review and retrospective. Plan next sprint.",
    meetings: [
      {
        date: "Mo, Apr 6",
        topic: "Sprint 1 review + sprint 2 planning",
        description: (
          <>
            <ul>
              <li>Sprint 1 demos: teams show what they built</li>
              <li>Sprint retrospective: what worked, what didn't, what to improve</li>
              <li>Sprint 2 planning: next features, user stories, tasks</li>
              <li>Reflection: "How did Sprint 1 go? What did we learn about teamwork?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "We, Apr 8",
        topic: "Sprint 2 feature development kickoff",
        description: (
          <>
            <ul>
              <li>Teams begin Sprint 2 features</li>
              <li>Continue daily standups</li>
              <li>Practice cross-team coordination</li>
              <li>Team reflection: "How are we improving? What's still hard?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "Mo, Apr 13",
        topic: "Sprint 2 continued: feature development",
        description: (
          <>
            <ul>
              <li>Teams continue Sprint 2 feature work</li>
              <li>Daily standups</li>
              <li>Integration and testing</li>
              <li>Team check-in: "What progress have we made?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "We, Apr 15",
        topic: "Sprint 2 continued: refinement and testing",
        description: (
          <>
            <ul>
              <li>Teams continue feature work</li>
              <li>Code review and PR refinement</li>
              <li>Integration testing</li>
              <li>Team reflection: "What's working? What needs improvement?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "Fr, Apr 10",
        topic: "Lab"
      },
      {
        date: "Fr, Apr 17",
        topic: "Lab"
      },
    ],
  },

  {
    id: 13,
    title: "Feature Development Sprint 3",
    description: "Final feature sprint. Integration testing. Polish and refinement.",
    meetings: [
      {
        date: "Mo, Apr 20",
        topic: "Sprint 2 review + final sprint planning",
        description: (
          <>
            <ul>
              <li>Sprint 2 demos</li>
              <li>Sprint retrospective</li>
              <li>Final sprint planning: polish, integration, testing</li>
              <li>Discussion: "What features are complete? What needs polish?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "We, Apr 22",
        topic: "Sprint 3 feature development kickoff",
        description: (
          <>
            <ul>
              <li>Teams begin final sprint features</li>
              <li>Polish existing features, fix bugs</li>
              <li>Write integration tests</li>
              <li>Team reflection: "What are we proud of? What needs work?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "Mo, Apr 27",
        topic: "Sprint 3 continued: integration and polish",
        description: (
          <>
            <ul>
              <li>Teams continue final sprint work</li>
              <li>Cross-team integration: ensure features work together</li>
              <li>Bug fixes and polish</li>
              <li>Team check-in: "What's left to do?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "We, Apr 29",
        topic: "Sprint 3 continued: final refinement",
        description: (
          <>
            <ul>
              <li>Teams finalize features</li>
              <li>Final integration testing</li>
              <li>Code review and PR refinement</li>
              <li>Team reflection: "What are we proud of? What would we do differently?"</li>
            </ul>
          </>
        ),
      },
      {
        date: "Fr, Apr 24",
        topic: "Lab"
      },
      {
        date: "Fr, May 1",
        topic: "Lab"
      },
    ],
  },

  {
    id: 14,
    title: "Final Delivery and Reflection",
    description: "Final integration, testing, and polish. Course reflection and celebration.",
    meetings: [
      {
        date: "Mo, May 2",
        topic: "Final integration and testing",
        description: (
          <>
            <ul>
              <li>Final integration testing: all features work together</li>
              <li>Bug fixes and polish</li>
              <li>Prepare for final demo</li>
              <li>Team reflection: "What did we accomplish? What are we proud of?"</li>
            </ul>
          </>
        ),
        readings: [
          {
            citation: "Martin, R. C. (2011). The Clean Coder. (Ch. 12-13)",
            url: "#",
          },
        ],
      },
      {
        date: "We, May 4",
        topic: "Final demos + course reflection",
        description: (
          <>
            <ul>
              <li>Final team demos: showcase completed features</li>
              <li>Course reflection: "How did we grow? What did we learn?"</li>
              <li>Celebration and wrap-up</li>
            </ul>
          </>
        ),
      },
      {
        date: "Fr, May 8",
        topic: "Lab"
      },
    ],
  },
];

// Export async function to get enriched topics
export async function getTopics() {
  return await enrichTopicsWithMarkdown(baseTopics);
}

// Export base topics for backward compatibility during transition
export { baseTopics };

// Default export: for now, return base topics (components will be updated to use getTopics())
export default baseTopics;

