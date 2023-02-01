const items = document.querySelectorAll('.list');

items.forEach((item, idx) => {  
  item.addEventListener('click', () => {   
    ToggleActive(item,idx);
  });
});

function ToggleActive(el,index) {
  el.classList.toggle('active');
  items.forEach((item,idx) => {
    if(idx !== index){
      item.classList.remove("active");
    }
  });
}