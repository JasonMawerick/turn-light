const bulb = document.getElementById('bulb');
let turn='off';
bulb.addEventListener('click',function(){
    if( turn=='off'){
        bulb.innerHTML='<img src="images/pic_bulbon.gif"  alt="">';
        turn ='on';
    } else {
        bulb.innerHTML='<img src="images/pic_bulboff.gif"  alt="">';
        turn ='off';
    }
})
