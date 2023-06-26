const Generate = document.querySelector('#Generate');
const ResultContainer = document.querySelector('#Result');
Generate.addEventListener('click',async ()=>{
    const CardContainer = document.createElement('div');
    const CardBody = document.createElement('div');
    const Type = document.createElement('small');
    const Title = document.createElement('p');
    const Sound = document.querySelector('.Sound');

    try {
     
        while(ResultContainer.hasChildNodes()){
            ResultContainer.removeChild(ResultContainer.firstChild);
        }
        const res = await fetch('https://www.boredapi.com/api/activity');
        const data = await res.json();
       

        Sound.currentTime = 0;
        Sound.play();
        CardContainer.className = 'card';
        CardContainer.style.width = 'auto';

        CardBody.className = 'card-body text-justify';

        Title.className = 'card-title fw-bold fs-3';
        Title.innerText = `" ${data.activity}. "`;
        Type.className = "fw-semibold text-success";
        Type.innerText = `Type : ${data.type}`;


        CardContainer.appendChild(CardBody);
        CardBody.append(Title);
        CardBody.append(Type);
        

      
        ResultContainer.appendChild(CardContainer);
    } catch (error) {
        console.log(error);
    }
   
})