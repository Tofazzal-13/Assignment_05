const categoryContainer = document.getElementById("categoryContainer")
const issueCount = document.getElementById("issueCount")



// ACTIVE BUTTON
const setActiveButton = (id) => {
    document.getElementById("allBtn").classList.remove("btn-active")
    document.getElementById("allBtn").classList.remove("btn-primary")
    document.getElementById("openBtn").classList.remove("btn-active")
    document.getElementById("openBtn").classList.remove("btn-primary")
    document.getElementById("closedBtn").classList.remove("btn-active")
    document.getElementById("closedBtn").classList.remove("btn-primary")

    document.getElementById(id).classList.add("btn-active")
    document.getElementById(id).classList.add("btn-primary")
    

  


}


// LOAD ALL ISSUES
const loadCategories = () => {

    setActiveButton("allBtn")

    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then(res => res.json())
    .then(data => displayIssue(data))


}


// OPEN ISSUES
const loadOpenIssues = async () => {

    setActiveButton("openBtn")

    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

    const res = await fetch(url)

    const data = await res.json()

    const openIssues = data.data.filter(issue => issue.status === "open")

    displayIssue({ data: openIssues })

}


// CLOSED ISSUES
const loadClosedIssues = async () => {

    setActiveButton("closedBtn")

    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

    const res = await fetch(url)

    const data = await res.json()

    const closedIssues=data.data.filter(issue=>issue.status==="closed")

    displayIssue({ data: closedIssues })

}

/* {
"id": 1,
"title": "Fix navigation menu on mobile devices",
"description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
"status": "open",
"labels": [
"bug",
"help wanted"
],
"priority": "high",
"author": "john_doe",
"assignee": "jane_smith",
"createdAt": "2024-01-15T10:30:00Z",
"updatedAt": "2024-01-15T10:30:00Z"
}, */

// DISPLAY CARDS
const displayIssue = (issues) => {

    categoryContainer.innerHTML = ""

    issueCount.innerText = issues.data.length

    issues.data.forEach(issue => {

        const card = document.createElement("div");
        
        card.innerHTML = `

           <div onclick="showDetails('${issue.id}')" class="card bg-base-100 shadow-xl border-t-4 h-full ${issue.status === "open" ? "border-green-500" : "border-purple-500"}">
           
            <div class="p-6 space-y-3">
                <div class="flex justify-between">
                    ${issue.status === "open" ? `<img src="./assets/Open-Status.png" alt="" class="h-[30px] w-[30px]">` : `<img src="./assets/Closed- Status .png" alt="" class="h-[30px] w-[30px]"> `}
                    
                    ${issue.priority === "high" ? `<button class="btn rounded-2xl bg-[#FEECEC] text-[#EF4444]">HIGH</button>` 
                        : issue.priority === "low" ? `<button class="btn rounded-2xl bg-[#EEEFF2] text-[#9CA3AF]">LOW</button>` 
                        : `<button class="btn rounded-2xl bg-[#FFF6D1] text-[#F59E0B]">MEDIUM</button>`}
                    
                    
                </div>
                <h2 class="font-bold text-2xl">${issue.title}</h2>
                <p class="text-gray-400">${issue.description}</p>
                <div class="flex gap-2">
                    ${issue.labels.map(label => `<button class="btn rounded-2xl bg-red-300 text-up uppercase"> ${label} </button>`).join("")}
          
                </div>
                <hr>
                <p>#1 by ${issue.author}</p>
                <p>${issue.createdAt.split("T")[0]}</p>
            </div>
           
           `

        categoryContainer.append(card)

    })

}


// ISSUE DETAILS
const showDetails = async (id) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`

    const res = await fetch(url)

    const data = await res.json()

    const issue = data.data

    document.getElementById("issueModal").showModal()

    document.getElementById("modalData").innerHTML = `

      <h2 class="text-xl font-bold mb-2">${issue.title}</h2>
      
      <p>${issue.description}</p>
      
      <div class="mt-3">
      
        <p>Status: ${issue.status}</p>
        <p>Author: ${issue.author}</p>
        <p>Priority: ${issue.priority}</p>
        <p>Label: ${issue.label}</p>
        <p>Date: ${issue.createdAt}</p>
      
      </div>

`

}


// CLOSE MODAL
const closeModal = () => {

    document.getElementById("issueModal").close()

}


// SEARCH
const searchIssue = async () => {

    const text = document.getElementById("searchInput").value

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`

    const res = await fetch(url)

    const data = await res.json()

    displayIssue(data)

}


// PAGE LOAD
loadCategories()