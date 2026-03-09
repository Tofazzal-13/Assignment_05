const categoryContainer = document.getElementById("categoryContainer")
const issueCount = document.getElementById("issueCount")


// ACTIVE BUTTON
const setActiveButton = (id) => {

    document.getElementById("allBtn").classList.remove("btn-active")
    document.getElementById("openBtn").classList.remove("btn-active")
    document.getElementById("closedBtn").classList.remove("btn-active")

    document.getElementById(id).classList.add("btn-active")

}


// LOAD ALL ISSUES
const loadCategories = () => {

    setActiveButton("allBtn")

    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then(res => res.json()).then(data => console.log(data))


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


// DISPLAY CARDS
const displayIssue = (issues) => {

    categoryContainer.innerHTML = ""

    issueCount.innerText = issues.data.length

    issues.data.forEach(issue => {

        const card = document.createElement("div")

        card.innerHTML = `

           <div onclick="showDetails('${issue.id}')" class="card bg-base-100 shadow-xl border-t-4 ${issue.status === "open" ? "border-green-500" : "border-purple-500"}">
           
           <div class="card-body">
           
             <h2 class="card-title">${issue.title}</h2>
           
             <p>${issue.description}</p>
           
           <div class="flex gap-2">
           
             <div class="badge badge-error">${issue.label}</div>
           
             <div class="badge badge-warning">${issue.priority}</div>
           
           </div>
           
            <p class="text-sm opacity-60">#${issue.id} by ${issue.author}</p>
           
            <p class="text-sm opacity-60">${issue.createdAt}</p>
           
           </div>
           
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