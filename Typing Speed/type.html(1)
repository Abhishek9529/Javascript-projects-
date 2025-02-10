let para = document.querySelector('#para')
let submit = document.querySelector('#submit')
let result = document.querySelector('#result')
let timerEl = document.querySelector('.timer')
let totalTimeEl = document.querySelector('#totalTime')
let timer = 0

let setense =''
  const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  async function getdata()
  {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const contentData = await data.data
      const content = contentData.content
     para.textContent = content
     setense = content
    //  console.log(content);
    } catch (error) {
      console.error(error);
    }
  }
  getdata()
  
  const form = document.querySelector('form');
  form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    clearInterval(interval);
    totalTimeEl.textContent = timer - 1
    //const data = new FormData(form)
   let content = document.getElementById('inputtext').value
   console.log(content)
   if (content === setense) {
     result.textContent = 'nice type'
     result.style.color = 'green'
     console.log('nice type')
   }
   else{
     result.textContent = 'bad type'
     result.style.color = 'red'
     console.log('bad type')
   }
  })

  const interval = setInterval(()=>{
    
  if (timer >= 0){
  timerEl.textContent = timer
   timer++;
  timerEl.style.color = 'red'
  }
  },1000)
 
 /** 
  function  clearinterval () {
    clearinterval(interval)
  }**/