////Datalist + displayDatas

// display.js - script.js 連携用
let ret_arraydata = {};

function ret_array(){
  return ret_arraydata;
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  data.forEach(element => {
    ret_arraydata[element[3]] = 0;
  });

  console.log(ret_arraydata);
  console.log(Object.keys(ret_arraydata).length)

  // パラメータ復元部
  const param = location.search;
  if(param.length > 1){
    const data_param = inflate(param.split('?')[1]);
    const param_array = data_param.split(',')
    console.log(param_array)
    param_array.forEach(element => {
      if(element.length <= 1){
        return true;
      }
      const param_key = element.split(':')[0]
      const param_value = element.split(':')[1]
      ret_arraydata[param_key] = Number(param_value)
    });
  }

  // 各難易度用div
  for(let i=9;i>=-1;i--){
    const newDiv = document.createElement('div')
    const addId = 'imgcontainer' + String(i)
    newDiv.setAttribute('id',addId)
    const add_Div_temp = document.getElementById('maincontainer')
    add_Div_temp.appendChild(newDiv);
  }

  let imglist = {'18.-2': '','18.-1': '','18.0': '','18.1': '','18.2': '','18.3': '','18.4': '','18.5': '','18.6': '','18.7': '','18.8': '','18.9': ''};
  const folderName = 'jackets';
  data.forEach(element => {
    const imageleng = element[3].length;

    // 難易度→枠色　変換部
    let Difficulty = 'other'
    if(element[3][imageleng-1] === 'e'){
      Difficulty = 'EXH'
    }else if(element[3][imageleng-1] === 'i'){
      Difficulty = 'INF'
    }else if(element[3][imageleng-1] === 'g'){
      Difficulty = 'GRV'
    }else if(element[3][imageleng-1] === 'h'){
      Difficulty = 'HVN'
    }else if(element[3][imageleng-1] === 'v'){
      Difficulty = 'VVD'
    }else if(element[3][imageleng-1] === 'm'){
      Difficulty = 'MXM'
    }

    // パラメータ→opacity変換部
    let opacity = ''
    if(ret_arraydata[element[3]] == 1){
      opacity = ' opa1'
    }else if(ret_arraydata[element[3]] == 2){
      opacity = ' opa2'
    }

    // データを連想配列に格納
    const add_data = "<img src=\"" + folderName + "/" + element[3] + '.jpg\" class=\"' + Difficulty + opacity + '\" alt=\"' + element[1] + "/" + element[0] + '\"></img>'
    imglist[element[2]] += add_data;
  });

  // htmlを書き換え
  for(let i=-1;i<=9;i++){
    const selectDiv = document.getElementById('imgcontainer' + String(i))
    const listKey = '18.' + String(i)
    console.log(selectDiv)
    console.log(listKey)
    selectDiv.innerHTML = '<p>' + imglist[listKey] + '</p>'
  }

});

// 圧縮関数 (要deflate.js)
function deflate(val) {
  val = encodeURIComponent(val); // UTF16 → UTF8
  val = zip_deflate(val); // 圧縮
  val = btoa(val); // base64エンコード
  return val;
}

// 復号関数 (要inflate.js)
function inflate(val) {
  val = atob(val); // base64デコード
  val = zip_inflate(val); // 復号
  val = decodeURIComponent(val); // UTF8 → UTF16
  return val;
}

const data = [
    ["","未","18.-1","00000-"],
    ["","18.0","18.0","000000"],
    ["","18.1","18.1","000001"],
    ["","18.2","18.2","000002"],
    ["","18.3","18.3","000003"],
    ["","18.4","18.4","000004"],
    ["","18.5","18.5","000005"],
    ["","18.6","18.6","000006"],
    ["","18.7","18.7","000007"],
    ["","18.8","18.8","000008"],
    ["","18.9","18.9","000009"],
  // name           ini diff  waku imglink
  //  18.9
    ["World's end","","18.9","03065e"],
    ["Wish upon Twin Stars","う","18.9","02293g"],
    ["HAELE III ~Angel Worlds~","","18.9","03189g"],
    ["Quaint Echo","く","18.9","03404e"],
    ["Legendary Road","","18.9","04128m"],
    ["神話に芽吹く","し","18.9","04235m"],
    ["Divine's:Bugscript","","18.9","04278m"],
    ["Venomous Firefly","う","18.9","04357m"],
    ["Joyeuse","し","18.9","02076v"],
    ["び","ひ","18.9","05053m"],
    ["Aerial Fortress","え","18.9","05116m"],
  //  18.8
    ["Last Concerto","","18.8","02172g"],
    ["キュリオシティ","き","18.8","04039m"],
    ["超☆超☆光☆速☆出☆前☆最☆速!!! スピード★スター★かなで","ち","18.8","04068m"],
    ["GERBERA","か","18.8","04186m"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Empress Side","け","18.8","04205e"],
    ["Lowermost revolt","","18.8","04206m"],
    ["Concertino in Blue","こ","18.8","04142m"],
    ["Xronièr","く","18.8","04325e"],
    ["Idola","い","18.8","02257h"],
    ["ツマミ戦隊 タテレンジャー","つ","18.8","05075m"],
    ["星の透る夏空に願う","","18.8","05122m"],
    ["* Erm, could it be a Spatiotemporal ShockWAVE Syndrome...?","え","18.8","05153e"],
    ["Яe:son D'être","","18.8","05247m"],
  //  18.7
    ["HAVOX","","18.7","03093e"],
    ["INF-B《L-aste-R》","い","18.7","03128e"],
    ["Blastix Riotz","","18.7","03149e"],
    ["XHAOS JUDGE","か","18.7","03229e"],
    ["Demise Quartet","","18.7","03262e"],
    ["MG277","え","18.7","03266e"],
    ["Hellfire","","18.7","02171g"],
    ["The world of sound","さ","18.7","01156h"],
    ["ΩVERSOUL","お","18.7","04066m"],
    ["魔境堕天録サリエル","","18.7","02035h"],
    ["V.I.P.","","18.7","01107h"],
    ["神獄烙桜","か","18.7","04136m"],
    ["FIN4LE ～終止線の彼方へ～","","18.7","04141e"],
    ["Doppelganger","","18.7","04161m"],
    ["超越してしまった彼女と其を生み落した理由","ち","18.7","02170h"],
    ["怒槌","い","18.7","04176m"],
    ["#SpeedyCats","す","18.7","04192m"],
    ["極彩天奏","こ","18.7","04211m"],
    ["Re:End of a Dream","","18.7","04263m"],
    ["PROVOES*PROPOSE <<êl fine>>","","18.7","04351g"],
    ["*Feels Seasickness...*","","18.7","04401e"],
    ["pique","","18.7","05158m"],
    ["Turn the story","た","18.7","05162m"],
  //  18.6
    ["For UltraPlayers","","18.6","02168e"],
    ["Black Emperor","","18.6","02215e"],
    ["croiX","く","18.6","01122i"],
    ["Absurd Gaff","あ","18.6","01115g"],
    ["LegenD.","","18.6","03064e"],
    ["gigadelic(かめりあ's ''The TERA'' RMX)","き","18.6","03117e"],
    ["灼熱Beach Side Bunny","し","18.6","03139e"],
    ["UnivEarth","","18.6","03145e"],
    ["veRtrageS","う","18.6","03152e"],
    ["消失","し","18.6","03156e"],
    ["Firestorm","","18.6","03167e"],
    ["きたさいたま2000","き","18.6","03179e"],
    ["ドーパミン","","18.6","03188e"],
    ["魔理沙は大変なものを盗んでいきました","ま","18.6","01128g"],
    ["REVOLVER","","18.6","03268e"],
    ["Celestial stinger","せ","18.6","03353g"],
    ["CODE -CRiMSON-","こ","18.6","02294g"],
    ["伐折羅-vajra-","","18.6","03253e"],
    ["極圏","き","18.6","03394e"],
    ["Solar Storm","そ","18.6","03405e"],
    ["Broken 8cmix","","18.6","01009h"],
    ["Dreadnought","","18.6","04016m"],
    ["Gamerz FestivaL","け","18.6","04067m"],
    ["ULTiMATE INFLATiON","あ","18.6","04133m"],
    ["ΗУМЛ","","18.6","04214m"],
    ["Nexta","","18.6","04289g"],
    ["Levier'n NābYss","","18.6","04311m"],
    ["サイコパスラビット","さ","18.6","04317m"],
    ["ouroboros -twin stroke of the end-","う","18.6","04370m"],
    ["Xevel","せ","18.6","04372m"],
    ["THE HEAVEN","さ","18.6","04405m"],
    ["祝福の色彩は想い結ぶ君たち迄","し","18.6","04406m"],
    ["ULTRAVELOCITY","う","18.6","04407m"],
    ["GALAXY BURST","き","18.6","05017m"],
    ["消失(Hommarju Remix)","し","18.6","05010m"],
    ["SociuS","そ","18.6","05057m"],
    ["Aurolla","お","18.6","05060m"],
    ["LECTORIA","","18.6","05114m"],
    ["ΩVERFLOW","お","18.6","05121m"],
    ["Nhelv","","18.6","05144m"],
    ["Elemental Creation (kamome sano Remix)","え","18.6","05185m"],
    ["ZEИITH","せ","18.6","05191m"],
    ["Nebulas","","18.6","05209m"],
    ["プログレなぞなぞクイズのテーマ","ふ","18.6","05276m"],
    ["Macuilxochitl (Latin Jazz Mix)","","18.6","06054m"],
    ["Verflucht","","18.6","06059m"], 
  //  18.5
    ["冥 Rockin' SWING REMIX","め","18.5","01034i"],
    ["Max Burning!!","ま","18.5","01124i"],
    ["混乱少女♥そふらんちゃん!!","こ","18.5","03077e"],
    ["Sayonara Planet Wars","さ","18.5","03079e"],
    ["End to end","え","18.5","03246e"],
    ["EMPIRE OF FLAME","え","18.5","03247e"],
    ["Lachryma《Re:Queen'M》","","18.5","03242e"],
    ["Endless GRAVITY","え","18.5","03308e"],
    ["Completeness Under Incompleteness","こ","18.5","03352g"],
    ["Triple Counter","","18.5","03367g"],
    ["GEOMETRIA","し","18.5","03380e"],
    ["Onigo","お","18.5","01061h"],
    ["Rebellio","","18.5","04065m"],
    ["JUNKIE FLAVOR","し","18.5","04127m"],
    ["PUPA","","18.5","04129m"],
    ["Mirrorwall","","18.5","04138m"],
    ["Spirit of the Beast","す","18.5","04147m"],
    ["Ghost Trigger","こ","18.5","04158m"],
    ["Scarlet Lance","す","18.5","04175m"],
    ["BEAST BASS BOMB","","18.5","04187m"],
    ["Hug!! Vs. Hug!!","","18.5","04191m"],
    ["I","あ","18.5","04238e"],
    ["Sacrifice and Faith","さ","18.5","04234m"],
    ["Яe's NoVǢ","","18.5","04246m"],
    ["業焔繚乱","こ","18.5","04253g"],
    ["LastΩmegA","","18.5","04282m"],
    ["ECHIDNA","え","18.5","04291m"],
    ["Gate of Atlantis","け","18.5","04297m"],
    ["MeteorGlow Aftermath","","18.5","04298m"],
    ["Reb∞t","","18.5","04302g"],
    ["そして黄金郷へ","そ","18.5","04321m"],
    ["Prey","","18.5","04340m"],
    ["Nostalgic Blood of the Strife","","18.5","04358m"],
    ["ファイナルレター","","18.5","04378m"],
    ["MODEL FT4","","18.5","04387m"],
    ["Destiny","","18.5","04404m"],
    ["ARROW RAIN","あ","18.5","05022m"],
    ["Atropa bella-donna","あ","18.5","05072m"],
    ["Barbatos","","18.5","05073m"],
    ["Pulsar","","18.5","05156m"],
    ["Call of the World","こ","18.5","05163m"],
    ["Übertreffen","","18.5","05168m"],
    ["ムーニャポヨポヨスッポコニャーゴ","む","18.5","02158v"],
    ["Over The Top","お","18.5","05212v"],
    ["Leviathan","","18.5","05251m"],
    ["With It This Heaven?","う","18.5","05277m"],
    ["SuperMiracleEnsemble","す","18.5","06042m"],
  //  18.4
    ["BLACK or WHITE?","","18.4","02173e"],
    ["Bangin' Burst","","18.4","02169e"],
    ["FLOWER REDALiCE Remix","ふ","18.4","01038i"],
    ["werewolf howls.","う","18.4","02302e"],
    ["VILE CAT","う","18.4","02308e"],
    ["tricky trick","","18.4","03073e"],
    ["KAC 2012 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX-","け","18.4","03074g"],
    ["Ops:Code-Rapture-","お","18.4","03146e"],
    ["Angels And Demons","え","18.4","03212e"],
    ["Pon-Pon-Pompoko Dai-Sen-Saw!","","18.4","03115e"],
    ["NEO GRAVITY","","18.4","03245e"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Emperor Side","け","18.4","03263e"],
    ["Fox4-Raize-","","18.4","03267e"],
    ["XROSS THE XOUL","く","18.4","03273g"],
    ["NEO TREASON","","18.4","03358g"],
    ["Crack Traxxxx","く","18.4","02122g"],
    ["FLügeL《Λrp:ΣggyØ》","","18.4","03368e"],
    ["Noisy Minority","","18.4","04038m"],
    ["準備運動","し","18.4","04041m"],
    ["Make Magic","","18.4","04054m"],
    ["Cepheus","せ","18.4","04082m"],
    ["Gorgetech","こ","18.4","04110m"],
    ["Juggler's Maddness","し","18.4","04139m"],
    ["WHITEOUT","","18.4","04140e"],
    ["Glitter Flatter Scatter","く","18.4","04151m"],
    ["POLICY BREAK Medley from SOUND VOLTEX×jubeat","","18.4","04077m"],
    ["HP:1","え","18.4","04179m"],
    ["Khionos TiARA","き","18.4","04198m"],
    ["Be a Hero!","","18.4","04204m"],
    ["メイビ～初恋！？ビスケット☆大作戦","","18.4","04216m"],
    ["BlueMoon Princess","","18.4","04245m"],
    ["Wings of Glory","う","18.4","04247m"],
    ["SAtAN","さ","18.4","04277m"],
    ["オニユリ","お","18.4","04320m"],
    ["光射す澪のユズリハ","","18.4","04319m"],
    ["Qubism","き","18.4","02044h"],
    ["STULTI","す","18.4","04367m"],
    ["Taiko Drum Monster","た","18.4","04371m"],
    ["†渚の小悪魔ラヴリィ～レイディオ†","","18.4","04373m"],
    ["Yum Yum Sweetie","","18.4","04386m"],
    ["ΣmbryØ","え","18.4","04400e"],
    ["Evans VolteX Pf arrange","え","18.4","01015h"],
    ["Jack-the-Ripper◆","し","18.4","05016m"],
    ["こちら、幸福安心委員会です。","こ","18.4","02047v"],
    ["GaLaXyEggPlanT","き","18.4","05031m"],
    ["無魎大数","","18.4","05054m"],
    ["Glorious Journey","く","18.4","05062m"],
    ["To:BrandNewDeadline","","18.4","05092m"],
    ["JǛPITΨR ♃ GЯÃVITÝ","し","18.4","05097m"],
    ["Liar rain","","18.4","05103g"],
    ["Dogeza Stairs","","18.4","05115m"],
    ["タイムトラベル","た","18.4","05152g"],
    ["蛇神","","18.4","05167m"],
    ["Valanga(polysha Remix)","う","18.4","05176m"],
    ["SAMURAI TIGER","さ","18.4","05192m"],
    ["666","し","18.4","05186e"],
    ["Katharsis","か","18.4","05190m"],
    ["She is my wife すーぱーアイドル☆ミツル子Remixちゃん","し","18.4","02017v"],
    ["MeteorA","","18.4","05200m"],
    ["αρχη","あ","18.4","05208m"],
    ["memento mori -intro-","","18.4","05248m"],
    ["世界の果てに約束の凱歌を -VOLTEX Mix-","せ","18.4","05284m"],
    ["Destr0yer","","18.4","06015m"],
    ["POSSESSION (Aoi Q.E.D. RMX)","","18.4","06006m"],
    ["Elemental Creation -xiRemix-","え","18.4","06051m"],
    ["Hurt me plenty","","18.4","06081v"],
  //  18.3
    ["VALLIS-NERIA","う","18.3","02045e"],
    ["INSECTICIDE","い","18.3","02277e"],
    ["Invitation from Mr.C","い","18.3","03062e"],
    ["ΑΩ","あ","18.3","03148e"],
    ["XyHATTE","さ","18.3","03151e"],
    ["Preserved Valkyria","","18.3","03150e"],
    ["最終鬼畜妹フランドール・S","さ","18.3","02127g"],
    ["マサカリブレイド","","18.3","03180e"],
    ["月光乱舞","け","18.3","03198e"],
    ["冥天・ヘメロカリス","","18.3","03225e"],
    ["Renegade Fruits","","18.3","03277g"],
    ["Ultimate Ascension","あ","18.3","03323e"],
    ["Ok!! Hug Me","お","18.3","03341g"],
    ["Angelic Jelly","え","18.3","03364g"],
    ["↓↓↓","と","18.3","03381e"],
    ["IKAROS DYNAMITE!!!!","い","18.3","03382e"],
    ["Prayer","","18.3","03383e"],
    ["絶対零度","せ","18.3","03384e"],
    ["壊Rave*it!! 壊Rave*it!!","こ","18.3","04060m"],
    ["Garakuta Doll Play","か","18.3","03178h"],
    ["TRICKL4SH 220","","18.3","04020m"],
    ["We Go Down","う","18.3","04085m"],
    ["Harpuia","","18.3","02214h"],
    ["Sweet Requiem","す","18.3","04118m"],
    ["SACRIFICE feat.ayame","さ","18.3","04119m"],
    ["Grand-Guignol","く","18.3","04146m"],
    ["OPEN MY GATE","お","18.3","04190m"],
    ["孤独の番人","こ","18.3","01165h"],
    ["Cloud 9","く","18.3","04233m"],
    ["crossing blue","く","18.3","04244m"],
    ["CHERNOBOG","ち","18.3","04261m"],
    ["Midnight City Warfare","","18.3","04374m"],
    ["Sky High","す","18.3","04260m"],
    ["RHYZING BEAT","","18.3","04269m"],
    ["ホワイトパレード","","18.3","04310m"],
    ["まじかる生主＠りすなちゃん","","18.3","04326g"],
    ["Lunatic Sprinter","","18.3","04343m"],
    ["Beyond the BLUE","","18.3","04350m"],
    ["GAIA","か","18.3","04366m"],
    ["Catch Our Fire!","き","18.3","04376m"],
    ["Divine's or Deal","","18.3","04377m"],
    ["ALTONA","あ","18.3","04391g"],
    ["V","","18.3","04399m"],
    ["怪盗Ｆの台本～消えたダイヤの謎～","か","18.3","05013m"],
    ["Sakura Reflection (P*Light Slayer Remix)","さ","18.3","02016v"],
    ["FIRST：DREAMS","","18.3","05096m"],
    ["eighth-slave","え","18.3","05111m"],
    ["Enchanté","あ","18.3","05066m"],
    ["ΣgØ","え","18.3","05117e"],
    ["petits fours","","18.3","05123m"],
    ["Black Lotus","","18.3","05124m"],
    ["Teufel","","18.3","05159m"],
    ["Jacob’s Elevator","","18.3","05165m"],
    ["Vividly Impromptu","","18.3","05172m"],
    ["#Fairy_dancing_in_lake","","18.3","02091v"],
    ["L9","え","18.3","05203m"],
    ["トマヨイ","","18.3","05210v"],
    ["Re：Elemental Creation","","18.3","05225m"],
    ["Ichi-Go! DX Pancake!","い","18.3","05230v"],
    ["VVelcome!!","う","18.3","05240e"], 
    ["GEMINI LA2ER","し","18.3","05246m"],
    ["Electric Injury","え","18.3","05233v"],
    ["m1dy Deluxe","","18.3","05254m"],
    ["Ring!Run!Nyan!!","","18.3","05269v"],
    ["Φnd:you","","18.3","05271m"],
    ["緋色月下、狂咲ノ絶 (nayuta 2017 ver)","","18.3","06022m"],
    ["Vanishing Eidos","う","18.3","06040m"],
    ["#Namescapes","","18.3","06056m"],
    ["ばらんが!!!!","","18.3","06074m"],
    ["PSYCHO+HEROES","さ","18.3","06079v"],
    ["Cappuccino Hearts","か","18.3","06086m"],
    ["G4ME OVEЯ","け","18.3","06091m"],
  //  18.2
    ["Growth Memories","く","18.2","02295e"],
    ["Warriors Aboot","う","18.2","03170e"],
    ["FLOWER","","18.2","03176e"],
    ["侍Annihilate!!","さ","18.2","03307e"],
    ["ムラサキグルマ","","18.2","03224e"],
    ["アルティメットトゥルース -Phantasm-","あ","18.2","03390e"],
    ["東方妖々夢 ULTIMATE MEDLEY","","18.2","03386e"],
    ["永遠に幸せになる方法、見つけました。","え","18.2","04033m"],
    ["ドリームエンド・サバイバー","","18.2","04040m"],
    ["Boss Rush","","18.2","04062m"],
    ["FIRE IN MY HEART","","18.2","04107m"],
    ["のぼれ八坂坂！","","18.2","04150m"],
    ["セイクリッド ルイン","せ","18.2","04177m"],
    ["Redshift","","18.2","04288m"],
    ["Goddess Bless you","こ","18.2","04196m"],
    ["FLOOR INFECTION Medley from SOUND VOLTEX×jubeat","","18.2","04078m"],
    ["Evans","え","18.2","04270m"],
    ["SUPER SUMMER SALE","す","18.2","04338m"],
    ["Puberty Dysthymia","","18.2","04339m"],
    ["DropZ-Line-","","18.2","04202m"],
    ["lEyl","","18.2","05040m"],
    ["諏訪大信仰","す","18.2","05083m"],
    ["Cloud Crasher","く","18.2","05095g"],
    ["V Sen5eS","","18.2","05108m"],
    ["Cynical Joker","し","18.2","05109m"],
    ["ランカーキラーガール","ら","18.2","05169m"],
    ["おお われら喜び讃うべし、主よ","お","18.2","02174v"],
    ["Mynarco(Nagomu 2Step Remix)","","18.2","05202m"],
    ["World of Iris","","18.2","05214v"],
    ["おはようからおやすみまでかまってポメポメ","お","18.2","05232v"],
    ["ミュージックプレイヤー","み","18.2","05244m"],
    ["月々紅花","け","18.2","05235v"],
    ["New Decade","","18.2","05253m"],
    ["Innocent","い","18.2","05263m"],
    ["Lazurite","","18.2","05261m"],
    ["SLEEPWALKER","す","18.2","05264v"],
    ["Valkyrja ~Aldrlag~","う","18.2","05274m"],
    ["MAYHEM","","18.2","05283e"], 
    ["Blessing Bouquet","","18.2","05270m"],
    ["Defining Future","","18.2","05289m"],
    ["eternite","え","18.2","05292m"],
    ["Thank you for your playing music","さ","18.2","05288m"],
    ["Air","え","18.2","06012m"],
    ["プナイプナイたいそう","","18.2","06018m"],
    ["Souhait bleu","す","18.2","06034m"],
    ["ラヴ♡チャンス!!","","18.2","06039m"],
    ["りむむむむむむ","","18.2","06049m"],
    ["FEEL THE FORCE","","18.2","06063m"],
    ["EGOISM 440 (Ange;art remix)","え","18.2","06072m"],
    ["€omet popcorn","こ","18.2","06077v"],
    ["Your SOUL Is Mine","","18.2","06082v"],
    ["ナミカレ","","18.2","06085m"],
  //  18.1
    ["PANIC HOLIC","は","18.1","01120g"],
    ["Xepher Light and Darkness Dragon REMIX","せ","18.1","01030g"],
    ["到達してしまった僕らと夢と希望の最之果","","18.1","03078e"],
    ["Opium and Purple haze","お","18.1","03134g"],
    ["Seraphim","せ","18.1","03200e"],
    ["JEHANNEDARC","し","18.1","03257e"],
    ["#Endroll","え","18.1","03401e"],
    ["金縛りの逢を","か","18.1","01146h"],
    ["The Formula","さ","18.1","04084m"],
    ["The Golden Era","さ","18.1","04100m"],
    ["幻想のサテライト","け","18.1","01089h"],
    ["Theme of Ricerca","","18.1","04131m"],
    ["恋歌疾風！かるたクイーンいろは","こ","18.1","04063m"],
    ["C18H27NO3","か","18.1","02062h"],
    ["誰が為に兎は舞う＝狂速狂騒曲＝","た","18.1","04281m"],
    ["Touch My Body","た","18.1","04287m"],
    ["BLAZING_LAZER","","18.1","04300m"],
    ["Black night","","18.1","04330m"],
    ["MONOLITH","","18.1","04224m"],
    ["お米の美味しい炊き方、そしてお米を食べることによるその効果。","お","18.1","04365m"],
    ["On take SUN","お","18.1","05042m"],
    ["アオアラシ","あ","18.1","05063m"],
    ["Unicorn tail Dustboxxxx RMX","","18.1","02096v"],
    ["Xicholauncher","さ","18.1","05071m"],
    ["mqlo","","18.1","05113m"],
    ["Sudden Visitor","さ","18.1","05120m"],
    ["ねこみみ(=ФωФ=)ぱんでみみっく","","18.1","05131g"],
    ["Typhoon Craaash!!","た","18.1","05132g"],
    ["最小三倍完全数","さ","18.1","05135m"],
    ["ミッドナイト☆WAR","み","18.1","05141m"],
    ["PARTY TIME!","","18.1","05146m"],
    ["Butterfly Twist","","18.1","05157m"],
    ["上海紅茶館～ Chinese Tea Orchid Remix","し","18.1","02175v"],
    ["Bolérrot","","18.1","05199m"],
    ["春告胡蝶","","18.1","05245m"],
    ["狂水一華","き","18.1","05255m"],
    ["apo:llioth","あ","18.1","05278m"],
    ["Ethereal Lotus","え","18.1","05262m"],
    ["Symphonic Tear","し","18.1","05285m"],
    ["#EmoCloche","え","18.1","06004m"],
    ["Scars of FAUNA(ろひ Remix)","す","18.1","06007m"],
    ["WARNING×WARNING×WARNING","","18.1","06019m"],
    ["Metagame Matador","","18.1","06044m"],
    ["ホイホイ☆幻想ホロイズム","","18.1","06070m"],
    ["Vallasotiena","う","18.1","06090m"],
    ["Restless Waitress","","18.1","06096m"],
  //  18.0
    ["Fin.ArcDeaR","","18.0","04056e"],
    ["腐れ外道とチョコレゐト","く","18.0","01102h"],
    ["雷鼓サンダービート","","18.0","04109m"],
    ["びいすと！","","18.0","04219m"],
    ["ワールズエンド・ダンスホール","","18.0","04240m"],
    ["New Leaf","","18.0","04268m"],
    ["KIMIDORI Streak!!","き","18.0","04293m"],
    ["Victim of Nights","う","18.0","04306m"],
    ["スラッシュ//シスターズ","す","18.0","04318m"],
    ["水簾ノ調","す","18.0","04316m"],
    ["Breakin' Asia","","18.0","04341m"],
    ["Night Rockin' Bird","","18.0","04355m"],
    ["翠雨の祷","す","18.0","05058m"],
    ["Akzeriyyuth","あ","18.0","04349m"],
    ["REDO the NIGHT","","18.0","04389g"],
    ["She Turns Me On","し","18.0","04388g"],
    ["真っ白な靴","","18.0","04390g"],
    ["Barbless Ego","","18.0","05094g"],
    ["rE:Voltagers","","18.0","05102g"],
    ["Believe In Yourself","","18.0","05160g"],
    ["OZONE","お","18.0","05161g"],
    ["Our Love","あ","18.0","05206m"],
    ["METATRON","","18.0","05250m"],
    ["Innocent Azure","い","18.0","06032m"],
    ["EMERALDAS (Yuta Imai Remix)","え","18.0","06003m"],
    ["恋愛♡悪戯！？まじかる☆ぱふゅ～む！！","","18.0","06048m"],
    ["nostos -ark remix-","","18.0","06052m"],

  //  hoka
    ["Pure Ruby","","18.-1","06098m"],
    ["カジノファイヤーことみちゃん","か","18.-1","06104m"],
    ["End of Guilty","","18.-1","000000m"],
    ["Puni Puni Parade","","18.-1","000001m"],
    ["ユメブキ","","18.-1","000002m"],
  ]

