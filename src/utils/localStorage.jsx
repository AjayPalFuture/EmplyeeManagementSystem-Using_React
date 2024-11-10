localStorage.clear();
    const employees= [
      {
        "id": 1,
        "name": "Alisha Haider",
        "email": "alisha@gmail.com",
        "password": "123",
        "taskCounts":{
              "active":2,
              "newTask":1,
              "completed":1,
              "failed":0
        },
        "tasks": [
          {
            "title": "Prepare Sales Report",
            "description": "Compile and analyze sales data for Q3 report.",
            "date": "2024-10-28",
            "category": "Sales",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Email Campaign",
            "description": "Draft and schedule email campaign for new product launch.",
            "date": "2024-10-30",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          
          {
            "title": "Customer Feedback Review",
            "description": "Review customer feedback for product improvements.",
            "date": "2024-11-01",
            "category": "Customer Support",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "name": "Tanish Gupta",
        "email": "tanish@gmail.com",
        "password": "123",
        "taskCounts":{
          "active":9,
          "newTask":2,
          "completed":9,
          "failed":2
    },
        "tasks": [
          {
            "title": "Product Design Meeting",
            "description": "Meet with the design team to finalize UI for new product.",
            "date": "2024-10-29",
            "category": "Product",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Prototype Testing",
            "description": "Conduct user tests for the latest prototype and gather feedback.",
            "date": "2024-11-02",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Documentation Update",
            "description": "Update the technical documentation with recent changes.",
            "date": "2024-11-03",
            "category": "Documentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "name": "Sumit Kumar",
        "email": "sumit@gmail.com",
        "password": "123",
        "taskCounts":{
          "active":7,
          "newTask":2,
          "completed":6,
          "failed":1
    },
        "tasks": [
          {
            "title": "Inventory Check",
            "description": "Perform a complete inventory audit for Q4.",
            "date": "2024-11-01",
            "category": "Operations",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Supplier Meeting",
            "description": "Discuss new terms with key suppliers.",
            "date": "2024-11-02",
            "category": "Procurement",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Budget Planning",
            "description": "Plan and propose the budget for the upcoming year.",
            "date": "2024-11-10",
            "category": "Finance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "name": "Amit Kumar",
        "email": "amit@gmail.com",
        "password": "123",
        "taskCounts":{
          "active":2,
          "newTask":5,
          "completed":3,
          "failed":1
    },
        "tasks": [
          {
            "title": "Market Analysis",
            "description": "Analyze competitors and update SWOT analysis.",
            "date": "2024-10-30",
            "category": "Marketing",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Product Launch Prep",
            "description": "Prepare materials for the upcoming product launch.",
            "date": "2024-11-02",
            "category": "Product",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Quarterly Review",
            "description": "Gather insights for the Q4 business review presentation.",
            "date": "2024-11-05",
            "category": "Management",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "name": "Pradeep Kumar",
        "email": "pradeep@gmail.com",
        "password": "123",
        "taskCounts":{
          "active":5,
          "newTask":4,
          "completed":4,
          "failed":2
    },
        "tasks": [
          {
            "title": "Customer Satisfaction Survey",
            "description": "Prepare and send out the end-of-year satisfaction survey.",
            "date": "2024-10-31",
            "category": "Customer Support",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Holiday Campaign Planning",
            "description": "Plan and outline the holiday marketing campaign.",
            "date": "2024-11-03",
            "category": "Marketing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Internal Training Session",
            "description": "Organize a training session for new hires.",
            "date": "2024-11-06",
            "category": "HR",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
    ];
    const admin= [{
      "id": 1,
      "name": "AjayPal Admin",
      "email": "ajay@gmail.com",
      "password": "123"
    }];

    export const setLocalStorage=()=>{0
        localStorage.setItem("employees",JSON.stringify(employees))
        localStorage.setItem("admin",JSON.stringify(admin))
    }
    export const getLocalStorage=()=>{
       const employees= JSON.parse(localStorage.getItem('employees'))
       const admin= JSON.parse(localStorage.getItem('admin'))
       return{employees,admin}

    }
  
  