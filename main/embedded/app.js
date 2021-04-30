function JsI18n(){this.locale="",this.locales=[],this.detectLanguage=function(t,n){null!==navigator.globalization&&void 0!==navigator.globalization?navigator.globalization.getPreferredLanguage(function(e){t(e)},function(e){n(e)}):null!==window.navigator.language&&void 0!==window.navigator.language&&t(window.navigator.language)},this.processNode=function(e){if(null!=e){var t;1==e.nodeType&&null!=(t=e.attributes["data-trans"])&&function(e,t){if(-1==t.indexOf("="))a(e,t);else for(var n=t.toLowerCase().split(";"),s=0;s<n.length;s++){var o=n[s].split("="),r=o[0].replace(/\s*(\w+)\s*/gi,"$1"),o=o[1].replace(/\s*(\.+)\s*/gi,"$1");a("html"==r?e:e.attributes[r],o)}}(e,t.nodeValue);for(var n=e.childNodes,s=0;s<n.length;s++)this.processNode(n[s])}function a(t,n){n=jsI18n.t(n);if(null!=t&&null!=n)if(1==t.nodeType)try{t.innerHTML=n}catch(e){t.text=n}else 2==t.nodeType&&(t.value=n)}}}JsI18n.prototype.addLocale=function(e,t){this.locales[e.toString()]=t},JsI18n.prototype.setLocale=function(e){this.locale=e},JsI18n.prototype.t=function(e){var t=this.locales[this.locale];if(null!=t)return t[e.toString()]},JsI18n.prototype.translate=function(e){this.t(e)},JsI18n.prototype.processPage=function(){this.processNode(document.getElementsByTagName("html")[0])},jsI18n=new JsI18n,jsI18n.addLocale("en",{"m-dash":"Dashboard","m-file":"Files","m-set":"Settings","s-ap":"Wifi AP","s-cl":"Wifi Client","s-rec":"Receiver","m-lang":"Language","l-wap":"Wifi Access Point","l-saved":"Settings Saved","l-ssid":"SSID / Name","l-pass":"Password","l-auth":"Authentication","l-save":"Save","l-cancel":"Cancel","l-wcl":"Wifi Client","l-setup":"Receiver Setup","l-frew":"Frequency (Hz)","l-bw":"Bandwidth","l-sf":"Spreading factor","l-cr":"Coding rate","l-lnb":"LNB voltage","l-lo":"LO frequency (MHz)","l-loeng":"Enable LO","l-diseq":"Enable diseq (22kHz)","f-title":"File Viewer","f-nodata":"No data Yet...","l-close":"Close","d-welcome":"Welcome to Othernet","d-sub":"A BROADCAST FOR THE DIGITAL AGE","d-1":"Device Information","d-1-1":"Hardware Version","d-1-2":"Firmware Version","d-1-3":"IP Address","d-2":"Memory Status","d-2-1":"Free Heap","d-2-2":"Min Free heap","d-2-3":"Free SPIram","d-3":"SD Card Status","d-3-1":"Capacity","d-3-2":"Free","d-3-3":"Used","d-4":"CPU Load","d-5":"LNB Status","d-5-1":"LNB enabled","d-5-2":"LNB in range","d-5-3":"LNB connected","d-5-4":"LNB voltage","d-5-5":"FREQ offset","d-6":"Receiver Status","d-7":"Receiver Stats","d-7-1":"RSSI","d-7-2":"Packets Received","d-7-3":"CRC Errors","d-7-4":"Header Errors","d-8":"File info","d-8-1":"Name","d-8-2":"Progress","fb-title":"File Browser","fb-sub":"Browse All files you Downloaded from the Sky","fb-format":"Format SD Card",footer:"Contribute on Github"}),jsI18n.addLocale("de",{"m-dash":"Dashboard","m-file":"Dateien","m-set":"Einstellungen","s-ap":"WLAN Zugangspunkt","s-cl":"WLAN Client","s-rec":"Empfänger","m-lang":"Sprache","l-wap":"WLAN Zugangspunkt","l-saved":"Einstellungen gespeichert","l-ssid":"WLAN Name","l-pass":"Passwort","l-auth":"Verschlüsselung","l-save":"Speichern","l-cancel":"Abbrechen","l-wcl":"WLAN Client","l-setup":"Empfänger-Setup","l-frew":"Frequenz (Hz)","l-bw":"Bandbreite","l-sf":"Spreizfaktor (SF)","l-cr":"Kodierrate","l-lnb":"LNB-Spannung","l-lo":"Oszillator-Frequenz (MHz)","l-loeng":"Oszillator aktiv","l-diseq":"DISEq (22kHz) aktiv","f-title":"Datei-Betrachter","f-nodata":"Noch keine Daten...","l-close":"Schließen","d-welcome":"Willkommen bei Othernet","d-sub":"EINE ÜBERTRAGUNG FÜR DAS DIGITALE ZEITALTER","d-1":"Geräteinformationen","d-1-1":"Hardware-Version","d-1-2":"Firmware-Version","d-1-3":"IP-Adresse","d-2":"Speicherstatus","d-2-1":"Freier Heap","d-2-2":"Min. Freier Heap","d-2-3":"Freies SPIram","d-3":"SD-Kartenstatus","d-3-1":"Kapazität","d-3-2":"Frei","d-3-3":"Belegt","d-4":"CPU-Last","d-5":"LNB-Status","d-5-1":"LNB aktiviert","d-5-2":"LNB im Bereich","d-5-3":"LNB verbunden","d-5-4":"LNB-Spannung","d-5-5":"Frequenz-Versatz","d-6":"Status des Empfängers","d-7":"Empfänger-Statistiken","d-7-1":"RSSI","d-7-2":"Empfangene Pakete","d-7-3":"CRC-Fehler","d-7-4":"Header-Fehler","d-8":"Datei-Info","d-8-1":"Name","d-8-2":"Fortschritt","fb-title":"Datei-Browser","fb-sub":"Durchstöbern Sie alle Dateien, die vom Himmel heruntergeladen wurden","fb-format":"SD-Karte formatieren",footer:"Auf Github mitarbeiten"}),jsI18n.addLocale("fr",{"m-dash":"Tableau de bord","m-file":"Fichiers","m-set":"Paramètres","s-ap":"Wifi Point d'accès","s-cl":"Client Wifi","s-rec":"Récepteur","m-lang":"Langue","l-wap":"Wifi Access Point","l-saved":"Paramètres sauvegardés","l-ssid":"SSID / Nom","l-pass":"Mot de passe","l-auth":"Authentification","l-save":"Enregistrer","l-cancel":"Annuler","l-wcl":"Wifi Client","l-setup":"Configuration du récepteur","l-frew":"Fréquence (Hz)","l-bw":"Bande passante","l-sf":"Facteur d'étalement","l-cr":"Taux de codage","l-lnb":"Tension LNB","l-lo":"Fréquence oscillateur (MHz)","l-loeng":"Activation de l'oscillateur","l-diseq":"Activer diseq (22kHz)","f-title":"Visionneuse de fichiers","f-nodata":"Pas encore de données...","l-close":"Fermer","d-welcome":"Bienvenue chez Othernet","d-sub":"UNE ÉMISSION POUR L'ÂGE NUMÉRIQUE","d-1":"Informations sur le périphérique","d-1-1":"Version du matériel","d-1-2":"Version du firmware","d-1-3":"Adresse IP","d-2":"État de la mémoire","d-2-1":"Free Heap","d-2-2":"Min Free Heap","d-2-3":"SPIram libre","d-3":"État de la carte SD","d-3-1":"Capacité","d-3-2":"Free","d-3-3":"Used","d-4":"CPU Load","d-5":"LNB Status","d-5-1":"LNB activé","d-5-2":"LNB in range","d-5-3":"LNB connecté","d-5-4":"Tension LNB","d-5-5":"Décalage FREQ","d-6":"État du récepteur","d-7":"Stats du récepteur","d-7-1":"RSSI","d-7-2":"Paquets reçus","d-7-3":"Erreurs CRC","d-7-4":"Erreurs d'en-tête","d-8":"Info fichier","d-8-1":"Nom","d-8-2":"Progression","fb-title":"Navigateur de fichiers","fb-sub":"Parcourir tous les fichiers que vous avez téléchargés depuis le ciel","fb-format":"Formater la carte SD",footer:"Contribuer sur Github"});let myip="192.168.4.1",files_tree_json=[{path:"",dir:1,name:"Example Files",size:"0"},{path:"/tests/textFile.txt",dir:0,name:"textFile.txt",size:"123"},{path:"/tests/Othernet Satcalc by Tynet.eu min.html",dir:0,name:"Othernet Satcalc by Tynet.eu min.html",size:"13123"},{path:"/tests/ee1b-wikipedia-Ajla_Tomljanović.html.tbz2",dir:0,name:"ee1b-wikipedia-Ajla_Tomljanović.html.tbz2",size:"146461"}];function changeLocale(e){jsI18n.setLocale(e),jsI18n.processPage()}function getExt(e){return null!=e.match(/(?:.+..+[^\/]+$)/gi)?e.split(".").slice(-1):"file"}function toggleActive(e){document.getElementById(e).classList.toggle("is-active")}function toggleModal(e){document.getElementById(e).classList.toggle("is-active"),document.getElementById("html").classList.toggle("is-clipped")}function toggleTab(e,t,n,s){document.querySelectorAll(n).forEach(function(e){e.style.display="none"}),document.getElementById(s).style.display="block"}const xhr=new XMLHttpRequest;function getfilestree(e){console.log(e),xhr.open("GET",e+"/",!0),xhr.send()}function filestree(e){let l=document.getElementById("filestree");l.innerHTML="",console.log(e),e.forEach(n=>{let e=document.createElement("div"),t=document.createElement("div"),s=document.createElement("span"),o=document.createElement("p"),r=document.createElement("span"),a=document.createElement("span");e.classList="column is-6",t.classList="notification",a.classList="icon is-large",r.classList="icon-text",s.classList="p-3 is-size-5",s.textContent=n.name,o.classList="pt-3";let i=document.createElement("a");if(n.dir)"Up"==n.name?a.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>':"Refresh"==n.name?a.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>':a.innerHTML=' <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>',o.innerText="folder",i.href="#",i.target="_self",i.link=n.path,i.onclick=function(e){e.preventDefault(),getfilestree(n.path)};else{a.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>';let t=getExt(n.name);i.onclick=function(e){e.preventDefault(),toggleModal("md_fileview"),viewFile(n.path,t)},o.innerText=t+" - "+n.size+" bytes"}r.appendChild(a),r.appendChild(s),t.appendChild(r),t.appendChild(o),i.appendChild(t),e.appendChild(i),l.appendChild(e)})}function updateStats(e){document.getElementById("stats_fw").innerText=e.fw,document.getElementById("stats_hw").innerText=e.hw,document.getElementById("stats_cpu").innerText=e.cpu,document.getElementById("stats_cpubar").value=e.cpu,document.getElementById("stats_heap").innerText=Math.round(e.heap/1024*100)/100+" KB",document.getElementById("stats_minheap").innerText=Math.round(e.minheap/1024*100)/100+" KB",document.getElementById("stats_psram").innerText=Math.round(e.psram/1024*100)/100+" KB";var t=(e.max-e.used)/1048576;document.getElementById("stats_sdcap").innerText=Math.round(e.max/1048576*100)/100+" MB",document.getElementById("stats_sdfree").innerText=Math.round(100*t)/100+" MB",document.getElementById("stats_sdused").innerText=Math.round(e.used/1048576*100)/100+" MB",document.getElementById("stats_snr").innerText=e.snr,document.getElementById("stats_rssi").innerText=e.rssi,document.getElementById("stats_crc").innerText=e.crc,document.getElementById("stats_header").innerText=e.header,document.getElementById("stats_pkts").innerText=e.received;t=e.packet/e.packets*100;document.getElementById("stats_progress").innerText=Math.round(100*t)/100+"%",document.getElementById("stats_file").innerText=e.filename,document.getElementById("stats_lnben").innerText=0<(32&e.ldo)?"YES":"NO",document.getElementById("stats_lnbir").innerText=0<(1&e.ldo)?"YES":"NO",document.getElementById("stats_lnbcon").innerText=0<(2&e.ldo)?"YES":"NO",document.getElementById("stats_lnbv").innerText=e.volt,document.getElementById("stats_offset").innerText=e.offset}function saveReceiver(){var e=document.getElementById("rcv_freq").value,t=document.getElementById("rcv_bw").value,n=document.getElementById("rcv_sf").value,s=document.getElementById("rcv_cr").value,o=document.getElementById("lnb_volt").checked,r=document.getElementById("lo_en").checked,a=document.getElementById("diseq").checked,i=document.getElementById("rcv_loid").value;const l=new XMLHttpRequest;i="freq="+e+"&bw="+t+"&sf="+n+"&cr="+s+"&lnb="+o+"&lo="+r+"&diseq="+a+"&loid="+i;console.log(i);l.open("POST","/settings",!0),l.setRequestHeader("Content-type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){4==l.readyState&&200==l.status&&(console.log("settings set",l.responseText),document.getElementById("tag_saveRcv").classList.remove("is-hidden"),setTimeout(function(){document.getElementById("tag_saveRcv").classList.add("is-hidden")},5e3))},l.send(i)}function postWifiSettings(e,t,n,s,o){const r=new XMLHttpRequest;console.log(e);o="ssid="+t+"&pass="+n+"&ap="+s+"&auth="+o;console.log(o);return r.open("POST","/wifi",!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){if(4==r.readyState&&200==r.status)return console.log("credentials set",r.responseText),!0},r.send(o),!0}function saveWifiAp(){postWifiSettings("",document.getElementById("ap_ssid").value,document.getElementById("ap_pwd").value,1,document.getElementById("ap_auth").value)&&(document.getElementById("tag_saveAp").classList.remove("is-hidden"),setTimeout(function(){document.getElementById("tag_saveAp").classList.add("is-hidden")},5e3))}function saveWifiClient(){postWifiSettings("",document.getElementById("sta_ssid").value,document.getElementById("sta_pwd").value,0,0)&&(document.getElementById("tag_saveSta").classList.remove("is-hidden"),setTimeout(function(){document.getElementById("tag_saveSta").classList.add("is-hidden")},5e3))}function formatSd(){if(confirm("Do you want to format SD card?\nIt will take about 5 minutes!")){document.getElementById("btn_formatsd").classList.add("is-loading");const e=new XMLHttpRequest;e.open("POST","/format",!0),e.onreadystatechange=function(){4==e.readyState&&200==e.status&&console.log("sd card formatted",e.responseText),document.getElementById("btn_formatsd").classList.remove("is-loading")},e.send()}}xhr.responseType="json",xhr.addEventListener("load",e=>{200===xhr.status&&filestree(xhr.response)}),xhr.addEventListener("error",e=>{filestree(files_tree_json)}),xhr.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&404===this.status&&filestree(files_tree_json)};async function getTbz2(e){return fetch(e).then(e=>e.arrayBuffer()).then(e=>{let t=window.bz2.decompress(new Uint8Array(e));return t=t.slice(1024,t.length),new TextDecoder("utf8").decode(t)})}async function getText(e){return fetch(e).then(e=>e.text()).then(e=>e)}async function viewFile(e,t){document.getElementById("md_fileview_status").classList.add("loader");let n="File not Supported / Error while reading",s=document.getElementById("data");s.src="about:blank","tbz2"==t&&(console.log("tbz2 File"),n=await getTbz2(e)),"txt"!=t&&"json"!=t&&"html"!=t||(console.log("Text File"),n=await getText(e)),s.contentWindow.document.open(),s.contentWindow.document.write(n),s.contentWindow.document.close(),document.getElementById("md_fileview_status").classList.remove("loader")}document.addEventListener("DOMContentLoaded",e=>{getfilestree("/files"),document.getElementById("info_ip").innerText=myip;try{document.getElementById("rcv_freq").value=init_freq,document.getElementById("rcv_bw").value=init_bw,document.getElementById("rcv_sf").value=init_sf,document.getElementById("rcv_cr").value=init_cr,document.getElementById("lnb_volt").checked=init_lnb,document.getElementById("lo_en").checked=init_lo,document.getElementById("diseq").checked=init_diseq,document.getElementById("rcv_loid").value=init_loid}catch(e){}let t=new WebSocket("ws://"+window.location.host+"/ws");t.onopen=function(e){document.getElementById("con_status").classList="tag is-light is-success",document.getElementById("con_status").innerText="Connected",t.send("get stats")},t.onmessage=function(e){updateStats(JSON.parse(e.data)),setTimeout(function(){t.send("get stats")},5e3)},t.onerror=function(e){document.getElementById("con_status").classList="tag is-light is-danger",document.getElementById("con_status").innerText="Connection Error"}}),function(){"use strict";const R=[0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],q=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,-2147483648];var e={decompress:function(i,l=!1){let d=0,c=0,u=0;const m=e=>{if(32<=e){var t=e>>1;return m(t)*(1<<t)+m(e-t)}for(;u<e;)c=(c<<8)+i[d],d+=1,u+=8;var n=q[e],t=c>>u-e&n;return u-=e,c&=~(n<<u),t};if(16986!==m(16))throw new Error("Invalid magic");if(104!==m(8))throw new Error("Invalid method");let e=m(8);if(!(49<=e&&e<=57))throw new Error("Invalid blocksize");e-=48;let f=new Uint8Array(1.5*i.length),g=0,h=-1;for(;;){var p=m(48),v=0|m(32);if(54156738319193!==p){if(25779555029136!==p)throw new Error("Invalid bz2 blocktype");m(7&u);break}{if(m(1))throw new Error("do not support randomised");p=m(24);const k=[];var w=m(16);for(let e=32768;0<e;e>>=1)if(w&e){var E=m(16);for(let e=32768;0<e;e>>=1)k.push(!!(E&e))}else for(let e=0;e<16;e+=1)k.push(!1);var y=m(3);if(y<2||6<y)throw new Error("Invalid number of huffman groups");var I=m(15);const C=[],N=Array.from({length:y},(e,t)=>t);for(let e=0;e<I;e+=1){let t=0;for(;m(1);)if(t+=1,t>=y)throw new Error("MTF table out of range");var B=N[t];for(let e=t;0<e;N[e]=N[--e]);C.push(B),N[0]=B}var b=k.reduce((e,t)=>e+t,0)+2;const A=[];for(let e=0;e<y;e+=1){let t=m(5);const M=[];for(let e=0;e<b;e+=1){if(t<0||20<t)throw new Error("Huffman group length outside range");for(;m(1);)t-=2*m(1)-1;M.push(t)}A.push(function(t){const n=[];for(let e=0;e<t.length;e+=1)n.push([e,t[e]]);n.push([t.length,-1]);const s=[];let o=n[0][0],r=n[0][1];for(let e=0;e<n.length;e+=1){var a=n[e][0],i=n[e][1];if(r)for(let e=o;e<a;e+=1)s.push({code:e,bits:r,symbol:void 0});if(o=a,-1===(r=i))break}s.sort((e,t)=>e.bits-t.bits||e.code-t.code);let l=0,d=-1;const c=[];let u;for(let e=0;e<s.length;e+=1){const m=s[e];d+=1,m.bits!==l&&(d<<=m.bits-l,l=m.bits,u=c[l]={}),m.symbol=d,u[d]=m}return{table:s,fastAccess:c}}(M))}const F=[];for(let e=0;e<k.length-1;e+=1)k[e]&&F.push(e);let e=0,t=0,n,s,o=0,r=0;const z=[];for(;;){--e,e<=0&&(e=50,t<=C.length&&(n=A[C[t]],t+=1));for(const H in n.fastAccess)if(Object.prototype.hasOwnProperty.call(n.fastAccess,H)&&(u<H&&(c=(c<<8)+i[d],d+=1,u+=8),s=n.fastAccess[H][c>>u-H],s)){c&=q[u-=H],s=s.code;break}if(0<=s&&s<=1)0===o&&(r=1),o+=r<<s,r<<=1;else{for(var L=F[0];0<o;--o)z.push(L);if(s===b-1)break;var S=F[s-1];for(let e=s-1;0<e;F[e]=F[--e]);F[0]=S,z.push(S)}}var _=function(t,e){if(e<0||e>=t.length)throw RangeError("Out of bound");var n=t.slice();t.sort((e,t)=>e-t);const s={};for(let e=t.length-1;0<=e;--e)s[t[e]]=e;const o=[];for(let e=0;e<t.length;e+=1)o.push(s[n[e]]++);let r;e=t[r=e];const a=[];for(let e=1;e<t.length;e+=1){var i=t[r=o[r]];void 0===i?a.push(255):a.push(i)}return a.push(e),a.reverse(),a}(z,p);let a=0;for(;a<_.length;){var T,x=_[a];let t=1;a<_.length-4&&_[a+1]===x&&_[a+2]===x&&_[a+3]===x?(t=_[a+4]+4,a+=5):a+=1,g+t>=f.length&&(T=f,f=new Uint8Array(2*T.length),f.set(T));for(let e=0;e<t;e+=1)l&&(h=h<<8^R[255&(h>>24^x)]),f[g]=x,g+=1}if(l){p=-1^h;if(p!=v)throw new Error(`CRC mismatch: ${p} !== ${v}`);h=-1}}}return f.subarray(0,g)}};"undefined"!=typeof window?window.bz2=e:module.exports=e}();