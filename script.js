const arrayContainer = document.getElementById("array-container")
const generateBtn = document.getElementById("generate-btn")
const startingArray = document.getElementById("starting-array")
const sortBtn = document.getElementById("sort-btn")

const generateElement = () => { 
  return Math.floor(Math.random() * 100) + 1 
}

const generateArray = () => {
  const arr = []
  let n = 1
  while(n <= 5){
    const random = generateElement()
    arr.push(random)
    n++
  }

  return arr
}

// console.log(generateArray())

const generateContainer = () => {
  const div = document.createElement("div")
  return div
}

const fillArrContainer = (div, arr) => {
  div.innerHTML = ""
  arr.forEach((elem) => {
    const span = document.createElement("span")
    span.textContent = elem
    // console.log(span.textContent)  
    div.appendChild(span) 
  })


  console.log(div)
  return div
}

const isOrdered = (a, b) => {
  return (a <= b) ? true : false
}

const swapElements = (arr, idx) => {
  if (arr[idx] > arr[idx + 1]) {
    const temp = arr[idx]
    arr[idx] = arr[idx + 1]
    arr[idx + 1] = temp
  }
}

const highlightCurrentEls = (htmlElem, idx) => {
  const sp1 = htmlElem.querySelector(`span:nth-of-type(${idx+1})`)
  const sp2 = htmlElem.querySelector(`span:nth-of-type(${idx+2})`)
  if (sp1) sp1.style.border = "2px dashed red"
  if (sp2) sp2.style.border = "2px dashed red"
}

let arr = [] 
generateBtn.addEventListener("click", () => {
  arr = generateArray()
  startingArray.textContent = ""
  arrayContainer.innerHTML = "" 
  arrayContainer.appendChild(startingArray)
  startingArray.appendChild(fillArrContainer(generateContainer(), arr))

  sortBtn.style.display = "block"
}) 



sortBtn.addEventListener("click", () => {
  highlightCurrentEls(startingArray, 0)
  const tempArr = arr.slice()
  let swapped
  let first = true

  do {
    swapped = false
    for (let i = 0; i < tempArr.length - 1; i++) {
      
      const stepDiv = fillArrContainer(generateContainer(), tempArr)
      highlightCurrentEls(stepDiv, i = (first == true) ? 1 : i)
      first = false
      arrayContainer.appendChild(stepDiv)

      if (!isOrdered(tempArr[i], tempArr[i + 1])) {
        swapElements(tempArr, i)
        swapped = true
      }
    }
  } while (swapped)

  const finalDiv = fillArrContainer(generateContainer(), tempArr)
  finalDiv.style.border = "5px solid green"
  arrayContainer.appendChild(finalDiv)

  sortBtn.style.display = "none"
})
