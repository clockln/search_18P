const menubuttonclick = document.getElementById('menubutton_open')
menubuttonclick.onclick = menu_open;

const menu_screen = document.getElementById('menu')

const textArea = document.getElementById('display_area')

const dummy_function = document.getElementById('dummy_menu')

const displayJS = document.getElementById('name_display')
const searchJS = document.getElementById('search_image')

function menu_open(){
  console.log('click')
  //menu_screen.classList.toggle('menu_open');
  textArea.value = '仮更新：タップで透明度変更、URLにデータ保存'

  if(dummy_function.className == 'display_function'){
    dummy_function.classList.toggle('display_function');
    dummy_function.classList.toggle('search_function');
//    displayJS.disabled = true;
//    searchJS.disabled = false;
  }else{
    dummy_function.classList.toggle('display_function');
    dummy_function.classList.toggle('search_function');
//    displayJS.disabled = false;
//    searchJS.disabled = true;
  }
}