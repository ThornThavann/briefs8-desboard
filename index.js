function getanswer() {
    fetch(
      "https://wmad-survey-backend.vercel.app/api/form-answers/question/2/answers?search_created_by=Group 2&answer=email",
      {
        method: "GET",
        headers: {
          "x-secret-key":
            "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let num = data.length;
        console.log(num);
        document.getElementById("respon").innerHTML += `
         <div class="getGmai">
              <p class="response">Number of responses</p>
              <div class="responses">${num}</div>
            </div>
  
           
         `;
      });
    fetch(
      "https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers?search_created_by=Group 2&search_answer=yes",
      {
        method: "GET",
        headers: {
          "x-secret-key":
            "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let num = data.length;
        console.log(num);
        document.getElementById("experian").innerHTML += `
           <div class="getGmai">
              <p class="response" > Students with previous experience in Web Development</p>
              <div class="responses">${num}</div>
            </div>
    
             
           `;
      })
  
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  getanswer();
  
  function myGrade() {
    let grades = document.getElementById("selectGrade").value;
    fetch(
      "https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers?search_created_by=Group 2&search_answer=" +
        grades,
      {
        method: "GET",
        headers: {
          "x-secret-key":
            "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let grade = data.length;
        console.log(grade);
        document.getElementById("gradeAnswer").innerHTML = grade;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  myGrade();
  
  function mySchool() {
    let schoolTypes = document.getElementById("selectSchool").value;
    fetch(
      "https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=Group 2&search_answer=" +
        schoolTypes,
      {
        method: "GET",
        headers: {
          "x-secret-key":
            "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let school = data.length;
        console.log(school);
        document.getElementById("schoolAnswer").innerHTML = school;
      })
  
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  mySchool();
  