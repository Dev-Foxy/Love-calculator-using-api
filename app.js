const fnameInput = document.querySelector("input[name = 'fname']")
const fname = document.querySelector(".fname")
const snameInput = document.querySelector("input[name = 'sname']")
const sname = document.querySelector(".lname")
const percentage = document.querySelector(".percentage")
const result = document.querySelector(".result")
const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '17b753cb78msh6eb36def9a092d4p1bd087jsnbfb656273e2a',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${snameInput.value}&fname=${fnameInput.value}`, options)
        .then(response => response.json())
        .then(data =>{
            // fname.textContent = fnameInput.value
            // sname.textContent = snameInput.value
            // percentage.textContent = data.percentage + "%"
            // result.textContent = data.result
            document.querySelector(".response-section").innerHTML = `
                ${fnameInput.value} and ${snameInput.value} has ${data.percentage}% love strength. <br>${data.result}
            `
        })
        .catch(err => console.error(err));
})
