// SIDEBAR

const menuItem = document.querySelectorAll('.menu-item');

//messages********************************

const messagesNotification = document.querySelector('#message-notification');


const messages = document.querySelector('.messages');

const message = document.querySelector('.message');

const messagesSearch = document.querySelector('#message-search');

//theme************************************************************************************************

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');


const paletteColor =document.querySelectorAll('.choose-color span');

const root = document.querySelectorAll(':root');








// to remouve all fonction active by menuItem

const chargeActiveItem = () => {

    menuItem.forEach(item => {
        item.remove('active');
    
    })
}

menuItem.forEach(item => {
    item.addEventListener('click', () =>{
        chargeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display = 'none'; 
        } else{

            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})
//  Message tchat********************************************************************

const searchMessage = () => {
     const val = messagesSearch.value.tolowerCase();
    message.forEach(chat =>{
    
        let name = chat.querySelectorAll(h5).textContent.tolocaleLowerCase();
    
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display ='none';
        }
    })
}

// MESSAGES****************************************************************************************
messagesSearch.addEventListener('keyup', searchMessage);


//******************hihgling when the message as beeing clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// display cusmisation...................................open a modal*****************************************

const openThemeModal = () =>{
      themeModal.style.display = 'grid';
      
}

//close modal function.................................................

const closeThemeModal = (e) => {
  
 if(e.target.classList.contains('customize-theme')){
    themeModal.classList.style.display = 'none';
 }else{
    themeModal.classList.style.display = 'grid';
 }
  }

//closez the modal *****************************************************************************/
themeModal.addEventListener('click', closeThemeModal());
//themeModal.addEventListener('click', closeThemeModal());



theme.addEventListener('click', openThemeModal());


// fonfside function..........................................................................................
paletteColor.forEach(color =>{
    color.addEventListener('click', () => {
        if(color.classList.contains('color-1')){
            primaryHue = 252;  
        } else if
            (color.classList.contains('color-2')){
                primaryHue = 352;
            }  else if
            (color.classList.contains('color-2')){
            primaryHue = 152;
               
            }else if (color.classList.contains('color-2')){
            primaryHue = 202;
        }
           
        
        root.style.setProperty('primary-color-hue, primaryHue');
    })
})

