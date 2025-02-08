function ShowMenu() {
    x = document.getElementById('hidden-menu');
    if(x.className == "hidden-menu"){
        x.classList.remove('hidden-menu')
        x.classList.add('visible-menu')
    }else{
        x.classList.remove('visible-menu')
        x.classList.add('hidden-menu')
    }
}


function hide_menu_onresize(){

    if (window.innerWidth > 600){
        x = document.getElementById('hidden-menu');
        x.classList.remove('visible-menu')
        x.classList.add('hidden-menu')
    }

}

function init(){
    window.onresize = hide_menu_onresize;
}
