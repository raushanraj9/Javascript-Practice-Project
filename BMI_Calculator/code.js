const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
     e.preventDefault();
     const height=document.getElementById("height").value;
     const weight=document.querySelector("#weight").value;
    //  console.log(height)
     const result=document.querySelector("#results");
     if(height==='' || height<0 || isNaN(height))
     {
        result.innerHTML=`please give a valid height ${height}`;
     }
     else if(weight==='' || weight<0 || isNaN(weight))
     {
        result.innerHTML=`please give a valid weight ${weight}`;
     }
     else
     {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML= `<span>${bmi}</span>`;
        const weightguide=document.getElementById("weight-guide");
        if(bmi<18.6)
        {
            const newElement=document.createElement("h1");
            newElement.textContent="Under weight";
            weightguide.appendChild(newElement);
        }
        else if(bmi>18.6 && bmi<24.9)
        {
            const newElement=document.createElement("h1");
            newElement.textContent="Normal";
            weightguide.appendChild(newElement);
        }
        else{
            const newElement=document.createElement("h1");
            newElement.textContent="Over weight";
            weightguide.appendChild(newElement);
        }
     }
})

