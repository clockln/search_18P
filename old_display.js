////Datalist + displayDatas

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

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
    const add_data = "<img src=\"" + folderName + "/" + element[3] + '.jpg\" class=\"' + Difficulty + '\" alt=\"' + element[1] + "/" + element[0] + '\"></img>'
    imglist[element[2]] += add_data;
  });

  for(let i=-1;i<=9;i++){
    const selectDiv = document.getElementById('imgcontainer' + String(i))
    const listKey = '18.' + String(i)
    console.log(selectDiv)
    console.log(listKey)
    selectDiv.innerHTML = '<p>' + imglist[listKey] + '</p>'
  }

});

const data = [
    ["","","18.-1","-"],
    ["","","18.0","0"],
    ["","","18.1","1"],
    ["","","18.2","2"],
    ["","","18.3","3"],
    ["","","18.4","4"],
    ["","","18.5","5"],
    ["","","18.6","6"],
    ["","","18.7","7"],
    ["","","18.8","8"],
    ["","","18.9","9"],
  // name           ini diff  waku imglink
  //  booth
  //  HVN
    ["Broken 8cmix","","18.6","01009h"],
    ["Evans VolteX Pf arrange","","18.4","01015h"],
    ["Onigo","お","18.5","01061h"],
    ["The world of sound","","18.7","01156h"],
    ["V.I.P.","","18.7","01107h"],
    ["金縛りの逢を","か","18.1","01146h"],
    ["腐れ外道とチョコレゐト","く","18.0","01102h"],
    ["幻想のサテライト","け","18.1","01089h"],
    ["孤独の番人","こ","18.3","01165h"],
  //  GRV
    ["Absurd Gaff","あ","18.6","01115g"],
    ["PANIC HOLIC","は","18.1","01120g"],
    ["Xepher Light and Darkness Dragon REMIX","","18.1","01030g"],
    ["魔理沙は大変なものを盗んでいきました","ま","18.6","01128g"],
  //  INF 
    ["croiX","く","18.6","01122i"],
    ["FLOWER REDALiCE Remix","ふ","18.4","01038i"],
    ["Max Burning!!","ま","18.5","01124i"],
    ["冥 Rockin' SWING REMIX","め","18.5","01034i"],
  //  II infinite infection
  //  VVD
    ["#Fairy_dancing_in_lake","","18.3","02091v"],
    ["Joyeuse","","18.9","02076v"],
    ["Sakura Reflection (P*Light Slayer Remix)","さ","18.3","02016v"],
    ["She is my wife すーぱーアイドル☆ミツル子Remixちゃん","","18.4","02017v"],
    ["Unicorn tail Dustboxxxx RMX","","18.1","02096v"],
    ["おお われら喜び讃うべし、主よ","お","18.2","02174v"],
    ["こちら、幸福安心委員会です。","こ","18.4","02047v"],
    ["ムーニャポヨポヨスッポコニャーゴ","む","18.5","02158v"],
    ["上海紅茶館～ Chinese Tea Orchid Remix","","18.1","02175v"],
  //  HVN
    ["C18H27NO3","","18.1","02062h"],
    ["Harpuia","","18.3","02214h"],
    ["Idola","","18.8","02257h"],
    ["Qubism","","18.4","02044h"],
    ["超越してしまった彼女と其を生み落した理由","","18.7","02170h"],
    ["魔境堕天録サリエル","","18.7","02035h"],
  // GRV
    ["CODE -CRiMSON-","","18.6","02294g"],
    ["Crack Traxxxx","","18.4","02122g"],
    ["Hellfire","","18.7","02171g"],
    ["Last Concerto","","18.8","02172g"],
    ["Wish upon Twin Stars","","18.9","02293g"],
    ["最終鬼畜妹フランドール・S","","18.3","02127g"],
  // EXH
    ["Bangin' Burst","","18.4","02169e"],
    ["Black Emperor","","18.6","02215e"],
    ["BLACK or WHITE?","","18.4","02173e"],
    ["For UltraPlayers","","18.6","02168e"],
    ["Growth Memories","","18.2","02295e"],
    ["INSECTICIDE","","18.3","02277e"],
    ["VALLIS-NERIA","","18.3","02045e"],
    ["VILE CAT","","18.4","02308e"],
    ["werewolf howls.","","18.4","02302e"],
  // III gravity wars
  // HVN
    ["Garakuta Doll Play","","18.3","03178h"],
  // GRV
    ["Angelic Jelly","","18.3","03364g"],
    ["Celestial stinger","","18.6","03353g"],
    ["Completeness Under Incompleteness","","18.5","03352g"],
    ["HAELE III ~Angel Worlds~","","18.9","03189g"],
    ["KAC 2012 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX-","","18.4","03074g"],
    ["NEO TREASON","","18.4","03358g"],
    ["Ok!! Hug Me","","18.3","03341g"],
    ["Opium and Purple haze","","18.1","03134g"],
    ["Renegade Fruits","","18.3","03277g"],
    ["Triple Counter","","18.5","03367g"],
    ["XROSS THE XOUL","","18.4","03273g"],
  // EXH
    ["↓↓↓","と","18.3","03381e"],
    ["ΑΩ","","18.3","03148e"],
    ["Angels And Demons","","18.4","03212e"],
    ["Blastix Riotz","","18.7","03149e"],
    ["Demise Quartet","","18.7","03262e"],
    ["EMPIRE OF FLAME","","18.5","03247e"],
    ["#Endroll","","18.1","03401e"],
    ["End to end","","18.5","03246e"],
    ["Endless GRAVITY","","18.5","03308e"],
    ["Firestorm","","18.6","03167e"],
    ["FLOWER","","18.2","03176e"],
    ["FLügeL《Λrp:ΣggyØ》","","18.4","03368e"],
    ["Fox4-Raize-","","18.4","03267e"],
    ["GEOMETRIA","","18.5","03380e"],
    ["gigadelic(かめりあ's ''The TERA'' RMX)","","18.6","03117e"],
    ["HAVOX","","18.7","03093e"],
    ["IKAROS DYNAMITE!!!!","","18.3","03382e"],
    ["INF-B《L-aste-R》","","18.7","03128e"],
    ["Invitation from Mr.C","","18.3","03062e"],
    ["JEHANNEDARC","","18.1","03257e"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Emperor Side","","18.4","03263e"],
    ["Lachryma《Re:Queen'M》","","18.5","03242e"],
    ["LegenD.","","18.6","03064e"],
    ["MG277","","18.7","03266e"],
    ["NEO GRAVITY","","18.4","03245e"],
    ["Ops:Code-Rapture-","","18.4","03146e"],
    ["Pon-Pon-Pompoko Dai-Sen-Saw!","","18.4","03115e"],
    ["Prayer","","18.3","03383e"],
    ["Preserved Valkyria","","18.3","03150e"],
    ["Quaint Echo","","18.9","03404e"],
    ["REVOLVER","","18.6","03268e"],
    ["Sayonara Planet Wars","","18.5","03079e"],
    ["Seraphim","","18.1","03200e"],
    ["Solar Storm","","18.6","03405e"],
    ["tricky trick","","18.4","03073e"],
    ["Ultimate Ascension","","18.3","03323e"],
    ["UnivEarth","","18.6","03145e"],
    ["veRtrageS","","18.6","03152e"],
    ["Warriors Aboot","","18.2","03170e"],
    ["World's end","","18.9","03065e"],
    ["XHAOS JUDGE","","18.7","03229e"],
    ["XyHATTE","","18.3","03151e"],
    ["アルティメットトゥルース -Phantasm-","","18.2","03390e"],
    ["きたさいたま2000","","18.6","03179e"],
    ["ドーパミン","","18.6","03188e"],
    ["マサカリブレイド","","18.3","03180e"],
    ["ムラサキグルマ","","18.2","03224e"],
    ["極圏","","18.6","03394e"],
    ["月光乱舞","","18.3","03198e"],
    ["混乱少女♥そふらんちゃん!!","","18.5","03077e"],
    ["侍Annihilate!!","","18.2","03307e"],
    ["灼熱Beach Side Bunny","","18.6","03139e"],
    ["消失","","18.6","03156e"],
    ["絶対零度","","18.3","03384e"],
    ["到達してしまった僕らと夢と希望の最之果","","18.1","03078e"],
    ["東方妖々夢 ULTIMATE MEDLEY","","18.2","03386e"],
    ["伐折羅-vajra-","","18.6","03253e"],
    ["冥天・ヘメロカリス","","18.3","03225e"],
  // IV heavenly heaven
  // MXM
    ["Akzeriyyuth","","18.0","04349m"],
    ["Be a Hero!","","18.4","04204m"],
    ["BEAST BASS BOMB","","18.5","04187m"],
    ["Beyond the BLUE","","18.3","04350m"],
    ["Black night","","18.1","04330m"],
    ["BLAZING_LAZER","","18.1","04300m"],
    ["BlueMoon Princess","","18.4","04245m"],
    ["Boss Rush","","18.2","04062m"],
    ["Breakin' Asia","","18.0","04341m"],
    ["Catch Our Fire!","","18.3","04376m"],
    ["Cepheus","","18.4","04082m"],
    ["CHERNOBOG","","18.3","04261m"],
    ["Cloud 9","","18.3","04233m"],
    ["Concertino in Blue","","18.8","04142m"],
    ["crossing blue","","18.3","04244m"],
    ["Destiny","","18.5","04404m"],
    ["Divine's:Bugscript","","18.9","04278m"],
    ["Divine's or Deal","","18.3","04377m"],
    ["Doppelganger","","18.7","04161m"],
    ["Dreadnought","","18.6","04016m"],
    ["DropZ-Line-","","18.2","04202m"],
    ["ECHIDNA","","18.5","04291m"],
    ["Evans","","18.2","04270m"],
    ["FIRE IN MY HEART","","18.2","04107m"],
    ["FLOOR INFECTION Medley from SOUND VOLTEX×jubeat","","18.2","04078m"],
    ["GAIA","","18.3","04366m"],
    ["Gamerz FestivaL","","18.6","04067m"],
    ["Gate of Atlantis","","18.5","04297m"],
    ["GERBERA","","18.8","04186m"],
    ["Ghost Trigger","","18.5","04158m"],
    ["Glitter Flatter Scatter","","18.4","04151m"],
    ["Goddess Bless you","","18.2","04196m"],
    ["Gorgetech","","18.4","04110m"],
    ["Grand-Guignol","","18.3","04146m"],
    ["HP:1","","18.4","04179m"],
    ["Hug!! Vs. Hug!!","","18.5","04191m"],
    ["ΗУМЛ","","18.6","04214m"],
    ["Juggler's Maddness","","18.4","04139m"],
    ["JUNKIE FLAVOR","","18.5","04127m"],
    ["Khionos TiARA","","18.4","04198m"],
    ["KIMIDORI Streak!!","","18.0","04293m"],
    ["LastΩmegA","","18.5","04282m"],
    ["Legendary Road","","18.9","04128m"],
    ["Levier'n NābYss","","18.6","04311m"],
    ["Lowermost revolt","","18.8","04206m"],
    ["Lunatic Sprinter","","18.3","04343m"],
    ["Make Magic","","18.4","04054m"],
    ["MeteorGlow Aftermath","","18.5","04298m"],
    ["Midnight City Warfare","","18.3","04374m"],
    ["Mirrorwall","","18.5","04138m"],
    ["MODEL FT4","","18.5","04387m"],
    ["MONOLITH","","18.1","04224m"],
    ["New Leaf","","18.0","04268m"],
    ["Night Rockin' Bird","","18.0","04355m"],
    ["Noisy Minority","","18.4","04038m"],
    ["Nostalgic Blood of the Strife","","18.5","04358m"],
    ["OPEN MY GATE","","18.3","04190m"],
    ["ouroboros -twin stroke of the end-","","18.6","04370m"],
    ["ΩVERSOUL","","18.7","04066m"],
    ["POLICY BREAK Medley from SOUND VOLTEX×jubeat","","18.4","04077m"],
    ["Prey","","18.5","04340m"],
    ["Puberty Dysthymia","","18.2","04339m"],
    ["PUPA","","18.5","04129m"],
    ["Re:End of a Dream","","18.7","04263m"],
    ["Яe's NoVǢ","","18.5","04246m"],
    ["Rebellio","","18.5","04065m"],
    ["Redshift","","18.2","04288m"],
    ["RHYZING BEAT","","18.3","04269m"],
    ["Sacrifice and Faith","","18.5","04234m"],
    ["SACRIFICE feat.ayame","","18.3","04119m"],
    ["SAtAN","","18.4","04277m"],
    ["Scarlet Lance","","18.5","04175m"],
    ["Sky High","","18.3","04260m"],
    ["#SpeedyCats","","18.7","04192m"],
    ["Spirit of the Beast","","18.5","04147m"],
    ["STULTI","","18.4","04367m"],
    ["SUPER SUMMER SALE","","18.2","04338m"],
    ["Sweet Requiem","","18.3","04118m"],
    ["Taiko Drum Monster","","18.4","04371m"],
    ["The Formula","","18.1","04084m"],
    ["The Golden Era","","18.1","04100m"],
    ["THE HEAVEN","","18.6","04405m"],
    ["Theme of Ricerca","","18.1","04131m"],
    ["Touch My Body","","18.1","04287m"],
    ["TRICKL4SH 220","","18.3","04020m"],
    ["ULTiMATE INFLATiON","","18.6","04133m"],
    ["ULTRAVELOCITY","","18.6","04407m"],
    ["V","","18.3","04399m"],
    ["Venomous Firefly","","18.9","04357m"],
    ["Victim of Nights","","18.0","04306m"],
    ["We Go Down","","18.3","04085m"],
    ["Wings of Glory","","18.4","04247m"],
    ["Xevel","","18.6","04372m"],
    ["Yum Yum Sweetie","","18.4","04386m"],
    ["お米の美味しい炊き方、そしてお米を食べることによるその効果。","","18.1","04365m"],
    ["オニユリ","","18.4","04320m"],
    ["キュリオシティ","","18.8","04039m"],
    ["サイコパスラビット","","18.6","04317m"],
    ["スラッシュ//シスターズ","","18.0","04318m"],
    ["セイクリッド ルイン","","18.2","04177m"],
    ["そして黄金郷へ","","18.5","04321m"],
    ["ドリームエンド・サバイバー","","18.2","04040m"],
    ["のぼれ八坂坂！","","18.2","04150m"],
    ["びいすと！","","18.0","04219m"],
    ["ファイナルレター","","18.5","04378m"],
    ["ホワイトパレード","","18.3","04310m"],
    ["メイビ～初恋！？ビスケット☆大作戦","","18.4","04216m"],
    ["ワールズエンド・ダンスホール","","18.0","04240m"],
    ["怒槌","","18.7","04176m"],
    ["永遠に幸せになる方法、見つけました。","","18.2","04033m"],
    ["壊Rave*it!! 壊Rave*it!!","","18.3","04060m"],
    ["神獄烙桜","","18.7","04136m"],
    ["恋歌疾風！かるたクイーンいろは","","18.1","04063m"],
    ["極彩天奏","","18.7","04211m"],
    ["祝福の色彩は想い結ぶ君たち迄","","18.6","04406m"],
    ["準備運動","","18.4","04041m"],
    ["神話に芽吹く","","18.9","04235m"],
    ["水簾ノ調","","18.0","04316m"],
    ["誰が為に兎は舞う＝狂速狂騒曲＝","","18.1","04281m"],
    ["超☆超☆光☆速☆出☆前☆最☆速!!! スピード★スター★かなで","","18.8","04068m"],
    ["†渚の小悪魔ラヴリィ～レイディオ†","","18.4","04373m"],
    ["光射す澪のユズリハ","","18.4","04319m"],
    ["雷鼓サンダービート","","18.0","04109m"],
  // GRV
    ["ALTONA","","18.3","04391g"],
    ["Nexta","","18.6","04289g"],
    ["PROVOES*PROPOSE <<êl fine>>","","18.7","04351g"],
    ["Reb∞t","","18.5","04302g"],
    ["REDO the NIGHT","","18.0","04389g"],
    ["She Turns Me On","","18.0","04388g"],
    ["まじかる生主＠りすなちゃん","","18.3","04326g"],
    ["業焔繚乱","","18.5","04253g"],
    ["真っ白な靴","","18.0","04390g"],
  // EXH
    ["ΣmbryØ","","18.4","04400e"],
    ["*Feels Seasickness...*","","18.7","04401e"],
    ["FIN4LE ～終止線の彼方へ～","","18.7","04141e"],
    ["Fin.ArcDeaR","","18.0","04056e"],
    ["I","","18.5","04238e"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Empress Side","","18.8","04205e"],
    ["WHITEOUT","","18.4","04140e"],
    ["Xronièr","","18.8","04325e"],
  // V vivid wave
  // VVD
    ["Electric Injury","","18.3","05233v"],
    ["Ichi-Go! DX Pancake!","","18.3","05230v"],
    ["Over The Top","","18.5","05212v"],
    ["Ring!Run!Nyan!!","","18.3","05269v"],
    ["SLEEPWALKER","","18.2","05264v"],
    ["World of Iris","","18.2","05214v"],
    ["おはようからおやすみまでかまってポメポメ","","18.2","05232v"],
    ["トマヨイ","","18.3","05210v"],
    ["月々紅花","","18.2","05235v"],
  // MXM
    ["Φnd:you","","18.3","05271m"],
    ["Aerial Fortress","","18.9","05116m"],
    ["apo:llioth","","18.1","05278m"],
    ["ARROW RAIN","","18.5","05022m"],
    ["Atropa bella-donna","","18.5","05072m"],
    ["Aurolla","","18.6","05060m"],
    ["Barbatos","","18.5","05073m"],
    ["Black Lotus","","18.3","05124m"],
    ["Blessing Bouquet","","18.2","05270m"],
    ["Bolérrot","","18.1","05199m"],
    ["Butterfly Twist","","18.1","05157m"],
    ["Call of the World","","18.5","05163m"],
    ["Cynical Joker","","18.2","05109m"],
    ["Defining Future","","18.2","05289m"],
    ["Dogeza Stairs","","18.4","05115m"],
    ["eighth-slave","","18.3","05111m"],
    ["Elemental Creation (kamome sano Remix)","","18.6","05185m"],
    ["Enchanté","","18.3","05066m"],
    ["eternite","","18.2","05292m"],
    ["Ethereal Lotus","","18.1","05262m"],
    ["FIRST：DREAMS","","18.3","05096m"],
    ["GALAXY BURST","","18.6","05017m"],
    ["GaLaXyEggPlanT","","18.4","05031m"],
    ["GEMINI LA2ER","","18.3","05246m"],
    ["Glorious Journey","","18.4","05062m"],
    ["Innocent","","18.2","05263m"],
    ["Jack-the-Ripper◆","","18.4","05016m"],
    ["Jacob’s Elevator","","18.3","05165m"],
    ["JǛPITΨR ♃ GЯÃVITÝ","","18.4","05097m"],
    ["Katharsis","","18.4","05190m"],
    ["L9","","18.3","05203m"],
    ["Lazurite","","18.2","05261m"],
    ["LECTORIA","","18.6","05114m"],
    ["Leviathan","","18.5","05251m"],
    ["lEyl","","18.2","05040m"],
    ["m1dy Deluxe","","18.3","05254m"],
    ["memento mori -intro-","","18.4","05248m"],
    ["METATRON","","18.0","05250m"],
    ["MeteorA","","18.4","05200m"],
    ["mqlo","","18.1","05113m"],
    ["Mynarco(Nagomu 2Step Remix)","","18.2","05202m"],
    ["Nebulas","","18.6","05209m"],
    ["New Decade","","18.2","05253m"],
    ["Nhelv","","18.6","05144m"],
    ["On take SUN","","18.1","05042m"],
    ["Our Love","","18.0","05206m"],
    ["ΩVERFLOW","","18.6","05121m"],
    ["PARTY TIME!","","18.1","05146m"],
    ["petits fours","","18.3","05123m"],
    ["pique","","18.7","05158m"],
    ["Pulsar","","18.5","05156m"],
    ["Re：Elemental Creation","","18.3","05225m"],
    ["Яe:son D'être","","18.8","05247m"],
    ["SAMURAI TIGER","","18.4","05192m"],
    ["SociuS","","18.6","05057m"],
    ["Sudden Visitor","","18.1","05120m"],
    ["Symphonic Tear","","18.1","05285m"],
    ["Teufel","","18.3","05159m"],
    ["Thank you for your playing music","","18.2","05288m"],
    ["To:BrandNewDeadline","","18.4","05092m"],
    ["Turn the story","","18.7","05162m"],
    ["Übertreffen","","18.5","05168m"],
    ["V Sen5eS","","18.2","05108m"],
    ["Valanga(polysha Remix)","","18.4","05176m"],
    ["Valkyrja ~Aldrlag~","","18.2","05274m"],
    ["Vividly Impromptu","","18.3","05172m"],
    ["With It This Heaven?","","18.5","05277m"],
    ["Xicholauncher","","18.1","05071m"],
    ["ZEИITH","","18.6","05191m"],
    ["αρχη","","18.4","05208m"],
    ["アオアラシ","あ","18.1","05063m"],
    ["ツマミ戦隊 タテレンジャー","つ","18.8","05075m"],
    ["び","ひ","18.9","05053m"],
    ["プログレなぞなぞクイズのテーマ","ふ","18.6","05276m"],
    ["ミッドナイト☆WAR","み","18.1","05141m"],
    ["ミュージックプレイヤー","み","18.2","05244m"],
    ["ランカーキラーガール","ら","18.2","05169m"],
    ["怪盗Ｆの台本～消えたダイヤの謎～","","18.3","05013m"],
    ["蛇神","","18.4","05167m"],
    ["狂水一華","","18.1","05255m"],
    ["最小三倍完全数","","18.1","05135m"],
    ["消失(Hommarju Remix)","","18.6","05010m"],
    ["翠雨の祷","","18.0","05058m"],
    ["諏訪大信仰","","18.2","05083m"],
    ["世界の果てに約束の凱歌を -VOLTEX Mix-","","18.4","05284m"],
    ["春告胡蝶","","18.1","05245m"],
    ["星の透る夏空に願う","","18.8","05122m"],
    ["無魎大数","","18.4","05054m"],
  // GRV
    ["Barbless Ego","","18.0","05094g"],
    ["Believe In Yourself","","18.0","05160g"],
    ["Cloud Crasher","","18.2","05095g"],
    ["Liar rain","","18.4","05103g"],
    ["OZONE","","18.0","05161g"],
    ["rE:Voltagers","","18.0","05102g"],
    ["Typhoon Craaash!!","","18.1","05132g"],
    ["タイムトラベル","","18.4","05152g"],
    ["ねこみみ(=ФωФ=)ぱんでみみっく","","18.1","05131g"],
  // EXH
    ["666","","18.4","05186e"],
    ["ΣgØ","","18.3","05117e"],
    ["* Erm, could it be a Spatiotemporal ShockWAVE Syndrome...?","","18.8","05153e"],
    ["MAYHEM","","18.2","05283e"], 
    ["VVelcome!!","","18.3","05240e"], 
  // VI exceed gear
  // VVD
    ["€omet popcorn","","18.2","06077v"],
    ["Hurt me plenty","","18.4","06081v"],
    ["PSYCHO+HEROES","","18.3","06079v"],
    ["Your SOUL Is Mine","","18.2","06082v"],
  // MXM
    ["Air","","18.2","06012m"],
    ["Cappuccino Hearts","","18.3","06086m"],
    ["Destr0yer","","18.4","06015m"],
    ["EGOISM 440 (Ange;art remix)","","18.2","06072m"],
    ["Elemental Creation -xiRemix-","","18.4","06051m"],
    ["EMERALDAS (Yuta Imai Remix)","","18.0","06003m"],
    ["#EmoCloche","","18.1","06004m"],
    ["FEEL THE FORCE","","18.2","06063m"],
    ["G4ME OVEЯ","","18.3","06091m"],
    ["Innocent Azure","","18.0","06032m"],
    ["Macuilxochitl (Latin Jazz Mix)","","18.6","06054m"],
    ["Metagame Matador","","18.1","06044m"],
    ["#Namescapes","","18.3","06056m"],
    ["nostos -ark remix-","","18.0","06052m"],
    ["POSSESSION (Aoi Q.E.D. RMX)","","18.4","06006m"],
    ["Pure Ruby","","18.-1","06098m"],
    ["Restless Waitress","","18.1","06096m"],
    ["Scars of FAUNA(ろひ Remix)","","18.1","06007m"],
    ["Souhait bleu","","18.2","06034m"],
    ["SuperMiracleEnsemble","","18.5","06042m"],
    ["Vallasotiena","","18.1","06090m"],
    ["Vanishing Eidos","","18.3","06040m"],
    ["Verflucht","","18.6","06059m"], 
    ["WARNING×WARNING×WARNING","","18.1","06019m"],
    ["カジノファイヤーことみちゃん","","18.-1","06104m"],
    ["ナミカレ","","18.2","06085m"],
    ["ばらんが!!!!","","18.3","06074m"],
    ["プナイプナイたいそう","","18.2","06018m"],
    ["ホイホイ☆幻想ホロイズム","","18.1","06070m"],
    ["ラヴ♡チャンス!!","","18.2","06039m"],
    ["りむむむむむむ","","18.2","06049m"],
    ["緋色月下、狂咲ノ絶 (nayuta 2017 ver)","","18.3","06022m"],
    ["恋愛♡悪戯！？まじかる☆ぱふゅ～む！！","","18.0","06048m"],
  ]