const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Complete Project Proposal",
        taskDescription: "Draft and submit the project proposal by EOD.",
        taskCategory: "Documentation",
        taskDate: "2023-10-15"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the authentication issue on the login page.",
        taskCategory: "Development",
        taskDate: "2023-10-10"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project updates with the client.",
        taskCategory: "Meeting",
        taskDate: "2023-10-18"
      },
      {
        active: true,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Deploy Beta Version",
        taskDescription: "Push the latest build to the staging server.",
        taskCategory: "DevOps",
        taskDate: "2023-10-12"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      completed: 1,
      failed: 1,
      new: 2
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "UI Redesign",
        taskDescription: "Update the dashboard UI based on feedback.",
        taskCategory: "Design",
        taskDate: "2023-10-16"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Database Optimization",
        taskDescription: "Improve query performance for the reporting module.",
        taskCategory: "Backend",
        taskDate: "2023-10-14"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Cover all critical modules with unit tests.",
        taskCategory: "Testing",
        taskDate: "2023-10-08"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate the payment gateway API.",
        taskCategory: "Development",
        taskDate: "2023-10-05"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Team Sync",
        taskDescription: "Conduct a sprint planning meeting.",
        taskCategory: "Meeting",
        taskDate: "2023-10-17"
      }
    ]
  },
  {
    id: 3,
    name: "Rahul Singh",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Bug Fixes",
        taskDescription: "Address critical bugs from the last release.",
        taskCategory: "Development",
        taskDate: "2023-10-16"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from the team.",
        taskCategory: "Quality Assurance",
        taskDate: "2023-10-12"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Update Documentation",
        taskDescription: "Revise the API documentation.",
        taskCategory: "Documentation",
        taskDate: "2023-10-18"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Apply security patches to the production server.",
        taskCategory: "DevOps",
        taskDate: "2023-10-10"
      }
    ]
  },
  {
    id: 4,
    name: "Ananya Gupta",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Marketing Campaign",
        taskDescription: "Launch the new ad campaign on social media.",
        taskCategory: "Marketing",
        taskDate: "2023-10-20"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website ranking for target keywords.",
        taskCategory: "SEO",
        taskDate: "2023-10-15"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog posts for the company website.",
        taskCategory: "Content",
        taskDate: "2023-10-19"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Email Campaign",
        taskDescription: "Send out the monthly newsletter.",
        taskCategory: "Marketing",
        taskDate: "2023-10-12"
      }
    ]
  },
  {
    id: 5,
    name: "Vikram Joshi",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      completed: 1,
      failed: 1,
      new: 2
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Sales Report",
        taskDescription: "Prepare the monthly sales performance report.",
        taskCategory: "Finance",
        taskDate: "2023-10-18"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Customer Feedback",
        taskDescription: "Analyze feedback from recent surveys.",
        taskCategory: "Customer Support",
        taskDate: "2023-10-14"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Inventory Check",
        taskDescription: "Audit warehouse stock levels.",
        taskCategory: "Operations",
        taskDate: "2023-10-17"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Supplier Meeting",
        taskDescription: "Negotiate new contract terms.",
        taskCategory: "Procurement",
        taskDate: "2023-10-11"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Training Session",
        taskDescription: "Train new hires on company policies.",
        taskCategory: "HR",
        taskDate: "2023-10-19"
      }
    ]
  },
  {
    id: 6,
    name: "Neha Reddy",
    email: "employee6@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Mobile App Testing",
        taskDescription: "Test the new app version on different devices.",
        taskCategory: "QA",
        taskDate: "2023-10-16"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Bug Tracking",
        taskDescription: "Log and prioritize new bugs in JIRA.",
        taskCategory: "Development",
        taskDate: "2023-10-13"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Performance Review",
        taskDescription: "Evaluate team performance for Q3.",
        taskCategory: "HR",
        taskDate: "2023-10-20"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Database Backup",
        taskDescription: "Schedule automated backups.",
        taskCategory: "DevOps",
        taskDate: "2023-10-09"
      }
    ]
  },
  {
    id: 7,
    name: "Arjun Kapoor",
    email: "employee7@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      completed: 1,
      failed: 1,
      new: 2
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "UX Research",
        taskDescription: "Conduct user interviews for the new feature.",
        taskCategory: "Design",
        taskDate: "2023-10-17"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Prototype Design",
        taskDescription: "Create wireframes for the mobile app.",
        taskCategory: "UI/UX",
        taskDate: "2023-10-12"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "A/B Testing",
        taskDescription: "Test two versions of the landing page.",
        taskCategory: "Marketing",
        taskDate: "2023-10-19"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Analytics Setup",
        taskDescription: "Configure Google Analytics for the new site.",
        taskCategory: "SEO",
        taskDate: "2023-10-11"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Team Retrospective",
        taskDescription: "Discuss improvements from the last sprint.",
        taskCategory: "Meeting",
        taskDate: "2023-10-18"
      }
    ]
  },
  {
    id: 8,
    name: "Isha Choudhary",
    email: "employee8@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      completed: 1,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Legal Compliance",
        taskDescription: "Review GDPR compliance for the new feature.",
        taskCategory: "Legal",
        taskDate: "2023-10-20"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Contract Review",
        taskDescription: "Finalize the vendor agreement.",
        taskCategory: "Legal",
        taskDate: "2023-10-15"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Risk Assessment",
        taskDescription: "Identify potential risks for the new project.",
        taskCategory: "Management",
        taskDate: "2023-10-19"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Policy Update",
        taskDescription: "Revise company remote work policy.",
        taskCategory: "HR",
        taskDate: "2023-10-10"
      }
    ]
  },
  {
    id: 9,
    name: "Rohan Malhotra",
    email: "employee9@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      completed: 1,
      failed: 1,
      new: 2
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Data Migration",
        taskDescription: "Move customer data to the new database.",
        taskCategory: "Backend",
        taskDate: "2023-10-18"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "API Documentation",
        taskDescription: "Write Swagger docs for the new endpoints.",
        taskCategory: "Documentation",
        taskDate: "2023-10-14"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Security Audit",
        taskDescription: "Check for vulnerabilities in the system.",
        taskCategory: "Cybersecurity",
        taskDate: "2023-10-20"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Load Testing",
        taskDescription: "Test server performance under heavy traffic.",
        taskCategory: "DevOps",
        taskDate: "2023-10-11"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Code Refactoring",
        taskDescription: "Optimize legacy code for better performance.",
        taskCategory: "Development",
        taskDate: "2023-10-19"
      }
    ]
  },
  {
    id: 10,
    name: "Divya Nair",
    email: "employee10@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      completed: 1,
      failed: 1,
      new: 2
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Finalize Report",
        taskDescription: "Complete the quarterly performance report.",
        taskCategory: "Documentation",
        taskDate: "2023-10-20"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Training Session",
        taskDescription: "Conduct onboarding for new hires.",
        taskCategory: "HR",
        taskDate: "2023-10-09"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Budget Review",
        taskDescription: "Analyze department spending for Q3.",
        taskCategory: "Finance",
        taskDate: "2023-10-17"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Vendor Negotiation",
        taskDescription: "Renew contracts with key suppliers.",
        taskCategory: "Operations",
        taskDate: "2023-10-11"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Product Demo",
        taskDescription: "Present new features to stakeholders.",
        taskCategory: "Presentation",
        taskDate: "2023-10-19"
      }
    ]
  }
];
const admin = {
  id: 100,
  name: "Owais Nadaf", 
  email: "admin@me.com",
  password: "123",
};

export const setLocalStorage = () => {
 localStorage.setItem("admin",JSON.stringify(admin) );
 localStorage.setItem("employees", JSON.stringify(employees));
};
export const getLocalStorage = () => {
  const admin  = JSON.parse(localStorage.getItem("admin"))
  const employees  = JSON.parse(localStorage.getItem("employees"))
  return {admin,employees}
};
export const updateEmployees = (updatedEmployees) => {
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
};
