export const personalData = {
  name: "Munna Kumar",
  role: "Web Developer",
  tagline: "Crafting beautiful, interactive web experiences",
  email: "munnakumar32990@gmail.com",
  phone: "+91 6207693788",
  location: "India",
  profileImage: "./profile.png",

  education: [
  {
    year: "2018–2020",
    title: "Matriculation",
    description: "Completed 10th grade from Notre Dame Public School, Bettiah, scoring 76% in the final board examinations."
  },
  {
    year: "2020–2022",
    title: "Intermediate (PCM Stream)",
    description: "Completed higher secondary education with Physics, Chemistry, and Mathematics, scoring 81% in the final board exams."
  },
  {
    year: "2023–present",
    title: "Bachelor of Technology in Computer Science",
    description: "Pursuing B.Tech at KL University, Vijayawada, with a current CGPA of 9.55."
  }
],
  
  about: {
    description: `Detail-oriented Full Stack Developer with robust expertise in Python, JavaScript, Java, and C. Solved 130+ algorithmic
problems on LeetCode, showcasing strong analytical and problem-solving abilities. Proficient in developing scalable, secure
web applications using Django, React.js, and the MERN stack. Experienced with deploying cloud-native solutions leveraging
AWS services. Passionate about AI integration and cloud infrastructure, aiming to contribute meaningfully to dynamic and
innovative development teams.`,
  
    timeline : [
      {
        year: "2024",
        title: "Social Internship(HealthCare and Safety Domain)",
        description: "Analyzed health data for 50+ households to identify trends driving strategic resource planning Automated reporting tasks using Python scripts, saving 15+ manual work hours per week Boosted community engagement by 25% via targeted outreach and awareness campaigns."
      },
      {
        year: "2025",
        title: "AWS AI and ML Internship",
        description: "Built and deployed a cost-optimization ML model on AWS SageMaker, reducing cloud resource expenses by 18% Designed automated ETL pipelines using AWS Lambda and Step Functions, processing over 10,000 records daily Enhanced model accuracy from 82% to 94% through advanced feature engineering."
      },
      
    ],
    

},

  projects: [
    {
      id: 1,
      title: "Real Time Chat Application",
      description: "A real-time chat application with user authentication and message history",
      image: "./chat.png",
      tags: ["React", "Node.js", "MongoDB", "Full Stack","Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/Chat-App",
      details: " • Engineered a real-time chat platform supporting 100+ concurrent users with Socket.io integration"
    },
    {
      id: 2,
      title: "AI-Powered Resume Builder",
      description: "An AI-driven resume builder that generates personalized resumes based on user input",
      image: "./airesume.png",
      tags: ["React", " Node.js", "OpenAI API ","Express", "Puppeteer"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/AI-Resume-Builder",
      details: "Developed an AI-powered resume builder that generates personalized resumes using OpenAI API, enhancing user experience with automated content generation and formatting."
    },
    {
      id: 3,
      title: "Employee Management System",
      description: "A comprehensive employee management system with role-based access control",
      image: "./employee.png",
      tags: ["React", "node.js", "Express", "MongoDB", "Redux","jwt","Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/EmployeeManagementSystem",
      details: " Developed a full-stack employee management system with role-based access control, enabling efficient management of employee data and permissions."
    }
  ],

  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 85 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 }
    ]
  },

  certifications: [
  {
    id: 1,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    image: "Azure.png",
    link: "#",
    category: "cloud"
  },
  {
    id: 2,
    title: "NPTEL Programming in Java",
    issuer: "NPTEL",
    date: "2024",
    image: "java.png",
    link: "#",
    category: "development"
  },
  {
    id: 3,
    title: "NPTEL Operating System Fundamentals",
    issuer: "NPTEL",
    date: "2024",
    image: "os.png",
    link: "#",
    category: "computer-science"
  },
  {
    id: 4,
    title: "LinguaSkill English Language Proficiency",
    issuer: "Cambridge University Press",
    date: "2024",
    image: "lingua.png",
    link: "#",
    category: "language"
  },
  {
    id: 5,
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2024",
    image: "salesforce.png",
    link: "#",
    category: "ai"

  }
],


  codingPlatforms: [
    {
      name: "GitHub",
      username: "munnakumar32990",
      stats: "20+ repositories",
      icon: "Github",
      url: "https://github.com/munnakumar32990"
    },
    {
      name: "LeetCode",
      username: "munnakumar",
      stats: "132+ problems solved",
      icon: "Code",
      url: "https://leetcode.com/u/KLU2300032990/"
    },
    {
      name: "HackerRank",
      username: "munnakumar",
      stats: "Gold badge",
      icon: "Trophy",
      url: "https://www.hackerrank.com/profile/h2300032990"
    },
    {
      name: "Codeforces",
      username: "munna_kumar",
      icon: "Zap",
      url: "https://codeforces.com/profile/KLU2300032990"
    },
    {
      name: "CodeChef",
      username: "munnakumar32990",
      stats: "1-star rating",
      icon: "Code",
      url: "https://www.codechef.com/users/kl2300032990"
    },
  ]
};