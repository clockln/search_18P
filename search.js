
window.onload = function(){
  //----------------------------------------------------------------------
  const imgs = document.querySelectorAll('img')
  const texts = document.getElementById('display_area')

  texts.addEventListener("input",function(){
    const search_text = this.value.toUpperCase()
    
    for(let i=0;i<imgs.length;i++){
      const alt_text = imgs[i].getAttribute('alt')
      if(alt_text == '' || alt_text == null) continue
      const tempAlt = alt_text.split('/')
      const musicName = tempAlt[1]
      if(musicName == '') continue
      if(search_text == ""){
        imgs[i].className = imgs[i].className.replace('Q','')
      }else if(alt_text.toUpperCase().indexOf(search_text) > -1){
        imgs[i].className = imgs[i].className.replace('EXHQ','EXH').replace('INFQ','INF').replace('GRVQ','GRV').replace('HVNQ','HVN').replace('VVDQ','VVD').replace('MXMQ','MXM')
      }else{
        imgs[i].className = imgs[i].className.replace('EXHQ','EXH').replace('INFQ','INF').replace('GRVQ','GRV').replace('HVNQ','HVN').replace('VVDQ','VVD').replace('MXMQ','MXM')
        imgs[i].className = imgs[i].className.replace('EXH','EXHQ').replace('INF','INFQ').replace('GRV','GRVQ').replace('HVN','HVNQ').replace('VVD','VVDQ').replace('MXM','MXMQ')
      }
    }
    
  })
  
  
  //----------------------------------------------------------------------
  }
  