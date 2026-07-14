export const myProjects = [
  {
    id: 1,
    title: "Brain Tumor Segmentation",
    description:
      "A deep learning-powered web application that performs automatic brain tumor segmentation from MRI scans using a 3D U-Net model.",
    subDescription: [
      "Developed a 3D U-Net segmentation model using PyTorch and MONAI, achieving a Dice Score of 0.73 on the BraTS 2021 dataset.",
      "Built a React and Tailwind CSS frontend that allows users to upload MRI scans and visualize segmentation results in real time.",
      "Integrated model inference with an interactive interface for seamless medical image analysis.",
      "Deployed the application on Vercel with a responsive UI and optimized user experience.",
    ],
    href: "https://tumor-segmentation-unet.vercel.app/",
    logo: "",
    image: "/assets/projects/tumor.png", // Update with your image path
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "PyTorch",
        path: "/assets/logos/pytorch.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "LC Tracker",
    description:
      "A full-stack MERN application with a Chrome Extension that automatically tracks and visualizes LeetCode progress.",
    subDescription: [
      "Built a Chrome Extension that automatically syncs accepted LeetCode submissions without manual input.",
      "Implemented secure JWT authentication and REST APIs using Node.js, Express.js, and MongoDB.",
      "Designed an analytics dashboard with heatmaps, streak tracking, topic-wise insights, and submission history using Recharts.",
      "Deployed the frontend on Vercel and integrated it with a scalable backend for real-time tracking.",
    ],
    href: "https://leetcode-tracker-nu-one.vercel.app/",
    logo: "",
    image: "/assets/projects/LC.png", // Update with your image path
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node-js-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/logos/icons8-express-js.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 5,
        name: "Chrome Extension",
        path: "/assets/logos/chrome.svg",
      },
    ],
  },
];

export const mySocials = [

  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aditya-kumar-39baa2249/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Aditya847353",
    icon: "/assets/socials/icons8-github (1).svg",
  },
];

export const experiences = [
{
    title: "Web Developer Intern",
    job: "AD Infocom Systems (Remote)",
    date: "June – July 2025",
    contents: [
      "Developed a full-stack project using React.js, Node.js, Express.js, and Tailwind CSS.",
      "Built responsive and interactive UI components focusing on clean design and performance.",
      "Gained deployment experience and collaborated remotely with a development team.",
    ],
  },
{
  title: "B.Tech in Information Technology",
  job: "NIT Jalandhar",
  date: "2023 – Present",
  contents: [
    "Currently pursuing Bachelor of Technology in Information Technology (4rth Year) at Dr BR Ambedkar National Institute of technology Jalandhar , Punjab.",
  ],
}
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
