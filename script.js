
window.addEventListener('DOMContentLoaded', () => {
document.querySelector('.more-button').addEventListener('click', function () {
   document.querySelector('.list-container').classList.toggle('active');
 });

 document.querySelector('.more-button').addEventListener('click', function(){
   document.querySelector('.list-content').classList.toggle('active-list');
 });



 

        const  modalTrigger = document.querySelectorAll('.data-modal'),
           modal = document.querySelector('.modal'),
           modalCloseBtn = document.querySelector('[data-close]');


           
      
      function openModal() {
       modal.classList.add('show');
       modal.classList.remove('hide');
       document.body.style.overflow = 'hidden';
      //  modal.classList.toggle('show'); 

      clearInterval(modalTimeId);
      }

      modalTrigger.forEach(btn =>{
      btn.addEventListener('click', openModal);
      });


           
       function closeModal() {
          // modal.classList.add('hide');
            // modal.classList.remove('show'); 
      modal.classList.toggle('show'); 
      document.body.style.overflow = '';
       }

          



modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
   if (e.target === modal){
      closeModal();
   }
});
         
      document.addEventListener('keydown', (e) => {
         if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
         }
      });
         

///basket
const buys= document.querySelectorAll('.buy');
const  buyCount = document.querySelector('.buyCount');

count = 0;
for(let btn of buys) {  
   console.log(btn);
 btn.onclick = function() {
   count += 1;
   buyCount.innerHTML =  count;
 }; 
 }
});
