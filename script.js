let jobs = [
  {id:1,companyName:"Google",position:"Frontend Developer",location:"USA",type:"Full-Time",salary:"$120k",description:"Build modern UI applications.",status:"All"},
  {id:2,companyName:"Microsoft",position:"Backend Engineer",location:"Canada",type:"Full-Time",salary:"$110k",description:"Develop APIs and services.",status:"All"},
  {id:3,companyName:"Amazon",position:"Cloud Engineer",location:"UK",type:"Remote",salary:"$115k",description:"Work on cloud infrastructure.",status:"All"},
  {id:4,companyName:"Tesla",position:"Software Engineer",location:"Germany",type:"Full-Time",salary:"$125k",description:"Automotive software systems.",status:"All"},
  {id:5,companyName:"Spotify",position:"Mobile Developer",location:"Sweden",type:"Hybrid",salary:"$105k",description:"Music streaming mobile apps.",status:"All"},
  {id:6,companyName:"Netflix",position:"UI Designer",location:"USA",type:"Remote",salary:"$95k",description:"Design engaging interfaces.",status:"All"},
  {id:7,companyName:"Airbnb",position:"Full Stack Dev",location:"France",type:"Hybrid",salary:"$100k",description:"Booking platform development.",status:"All"},
  {id:8,companyName:"Meta",position:"React Developer",location:"USA",type:"Full-Time",salary:"$130k",description:"Social media platform UI.",status:"All"},
];

let currentTab = "All";

function renderJobs(){
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  let filtered = currentTab === "All"
    ? jobs
    : jobs.filter(job => job.status === currentTab);

  document.getElementById("tabCount").innerText = filtered.length + " Jobs";

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="empty-state">
        <img src="img/jobs.png"/>
        <h3>No jobs Available</h3>
        <p>Cheak back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job=>{
    container.innerHTML += `
      <div class="card">
        <div>
          <div class="card-header">
          <h3>${job.position}</h3>
          <div class="delete-btn-container">
          <button class="delete-btn-top" onclick="deleteJob(${job.id})"><img src="img/delete.png" alt="Delete"/></button>
          </div>
          </div>
          <p><strong>${job.companyName}</strong></p>
          <p>${job.location} | ${job.type}</p>
          <p>Salary: ${job.salary}</p>
<span class="badge ${
  job.status === "Interview" ? "interview" :
  job.status === "Rejected" ? "rejected" :
  "not-applied"
}">
  ${
    job.status === "Interview" ? "Interview" :
    job.status === "Rejected" ? "Rejected" :
    "NOT APPLIED"
  }
</span>
<p>${job.description}</p>
          
        </div>
        <div>
          <div class="card-buttons">
            <button class="interview-btn" onclick="updateStatus(${job.id}, 'Interview')">INTERVIEW</button>
            <button class="reject-btn" onclick="updateStatus(${job.id}, 'Rejected')">REJECTED</button>
          </div>
        </div>
      </div>
    `;
  });

  updateDashboard();
}

function updateStatus(id,status){
  let job = jobs.find(j=>j.id===id);
  if(job.status === status){
    job.status = "All";
  } else {
    job.status = status;
  }
  renderJobs();
}

function deleteJob(id){
  jobs = jobs.filter(job=>job.id!==id);
  renderJobs();
}

function updateDashboard(){
  let interview = jobs.filter(j=>j.status==="Interview").length;
  let rejected = jobs.filter(j=>j.status==="Rejected").length;

  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
  document.getElementById("allCount").innerText = jobs.length;
}

function switchTab(event, tab){
  currentTab = tab;

  document.querySelectorAll(".tab").forEach(t =>
    t.classList.remove("active")
  );

  event.target.classList.add("active");

  renderJobs();
}

renderJobs();