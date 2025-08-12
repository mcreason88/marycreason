// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "mcreason88";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

export const linkedinUrl = "https://www.linkedin.com/in/mary-creason-73775b22/";

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As a Cloud-Native Architect at Wellsky, She is passionate about using technology to make a difference in Healthcare. With 15 years in software engineering, She brings a wealth of experience in Kubernetes, DevOps, and application integration, building robust CI/CD pipelines for cloud-native solutions. She is excited to share her insights on building scalable and reliable systems.y learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API. I also hold the Associate Cloud Engineer Certification.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    category: "Cloud",
    skills: [
      {
        id: 1,
        skill: <Icon icon="logos:aws" className="display-4" />,
        name: "AWS",
      },
      {
        id: 2,
        skill: <Icon icon="logos:google-cloud" className="display-4" />,
        name: "Google Cloud",
      },
    ],
  },
  {
    category: "Programming & Development",
    skills: [
      {
        id: 3,
        skill: <Icon icon="teenyicons:c-sharp-solid" className="display-4" />,
        name: "C# (.Net Core)",
      },
      {
        id: 4,
        skill: <Icon icon="devicon:ruby" className="display-4" />,
        name: "Ruby",
      },
      {
        id: 5,
        skill: <Icon icon="logos:rails" className="display-4" />,
        name: "Ruby on Rails",
      },
      {
        id: 6,
        skill: <Icon icon="logos:python" className="display-4" />,
        name: "Python",
      },
      {
        id: 7,
        skill: <Icon icon="fa6-brands:js" className="display-4" />,
        name: "JavaScript",
      },
      {
        id: 8,
        skill: <Icon icon="logos:angular-icon" className="display-4" />,
        name: "Angular",
      },
      {
        id: 9,
        skill: <Icon icon="logos:vue" className="display-4" />,
        name: "Vue.js",
      },
      {
        id: 10,
        skill: <Icon icon="logos:nuxt-icon" className="display-4" />,
        name: "Nuxt",
      },
      {
        id: 11,
        skill: <Icon icon="eos-icons:api" className="display-4" />,
        name: "RESTful Web Services",
      },
      {
        id: 12,
        skill: <Icon icon="devicon:jquery" className="display-4" />,
        name: "jQuery",
      },
      {
        id: 13,
        skill: <Icon icon="devicon:microsoftsqlserver" className="display-4" />,
        name: "SQL",
      },
      {
        id: 14,
        skill: <Icon icon="devicon:microsoftsqlserver" className="display-4" />,
        name: "PL/SQL",
      },
      {
        id: 15,
        skill: <Icon icon="mdi:database" className="display-4" />,
        name: "NoSQL",
      },
      {
        id: 16,
        skill: <Icon icon="logos:terraform-icon" className="display-4" />,
        name: "Terraform",
      },
      {
        id: 17,
        skill: <Icon icon="logos:aws-cloudformation" className="display-4" />,
        name: "Cloudformation",
      },
      {
        id: 18,
        skill: <Icon icon="logos:aws-cdk" className="display-4" />,
        name: "AWS CDK",
      },
      {
        id: 19,
        skill: <Icon icon="logos:helm" className="display-4" />,
        name: "Helm",
      },
      {
        id: 20,
        skill: <Icon icon="mdi:design" className="display-4" />,
        name: "OODD",
      },
      {
        id: 21,
        skill: <Icon icon="mdi:test-tube" className="display-4" />,
        name: "TDD",
      },
      {
        id: 22,
        skill: <Icon icon="logos:perl" className="display-4" />,
        name: "Perl",
      },
      {
        id: 23,
        skill: <Icon icon="mdi:database-search" className="display-4" />,
        name: "XQuery",
      },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      {
        id: 24,
        skill: <Icon icon="flat-color-icons:linux" className="display-4" />,
        name: "Linux",
      },
      {
        id: 25,
        skill: <Icon icon="devicon:windows8" className="display-4" />,
        name: "Windows",
      },
      {
        id: 26,
        skill: <Icon icon="devicon:apple" className="display-4" />,
        name: "OSX",
      },
    ],
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["gcp-pubsub-demo", "RubyonRailsCheatsheets"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "gcp-pubsub-demo",
    image: Logo,
  },
  {
    name: "RubyonRailsCheatsheets",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
