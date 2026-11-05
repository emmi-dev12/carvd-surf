/* carvd. surf preview: i18n, menu, start form */
(()=>{
const DE={skip:'zum inhalt',nav_home:'home',nav_boards:'boards',nav_brands:'für brands',nav_construct:'bauweise',nav_faq:'faq',nav_start:'board starten',
catch:'carvd: branded boards, gemacht fürs wasser',snow_link:'snowboards →',
hero_a1:'branded boards,',hero_a2:'gemacht fürs wasser.',hero_lede:'surfboards nach mass, mit deinem logo auf dem deck. du wählst den shape, wir den aufbau.',hero_see:'zu den boards',
boards_k:'surfboards',boards_h2:'dein shape. deine welle.',boards_p:'shortboard, fish, midlength oder longboard. du wählst shape und länge und bringst die grafik. den rest machen wir.',
w1_h:'der shape, der zu dir passt',w1_p:'shortboard, fish, midlength, longboard. nimm den, der zu deinen wellen passt.',
w2_h:'die länge, die sitzt',w2_p:'sag uns die länge, oder grösse, gewicht und level. wir helfen dir, sie zu finden.',
w3_h:'dein design, unser handwerk',w3_p:'deine grafik oder dein logo aufs deck. den aufbau wählen wir passend zum ride.',
brands_k:'für brands',brands_h2:'dein logo an bord, an jedem ort.',brands_p:'surfschulen, surfcamps, hotels, firmenteams. boards, die deinen namen ins wasser tragen, nicht an die wand.',
br1_h:'schulen & camps',br1_p:'eine flotte in deinen farben, jede session mit deinen gästen draussen.',
br2_h:'hotels & resorts',br2_p:'boards fürs rack am strand, die deinen gästen bleiben.',
br3_h:'teams & kleinserien',br3_p:'teamboards und kleine editionen unter deinem namen.',
cta_h2:'wähl den shape. den rest shapen wir.',cta_p:'ein board oder eine kleine serie. ein brief reicht. wir antworten innert 48 stunden.',con_more:'wie es gebaut ist →',faq_more:'faq →',
faq_h1:'fragen.',faq_lede:'die fakten zu einer bestellung nach mass. noch unsicher? nutz das <a class="inline" href="/start.html">startformular</a>.',
con_k:'bauweise',con_h1:'du wählst die welle, wir den aufbau.',con_lede:'ein board nach mass ist kein sticker auf einem blank. wir wählen schaum, harz und glas passend zu shape und ride.',
c_pick_h:'wir wählen den aufbau',c_pick_p:'du wählst shape und länge. wir wählen die bauweise, die zum board, zu den wellen und zu deinem surfen passt.',
c_pu_h:'pu / polyester',c_pu_p:'der klassiker: pu-blank mit holz-stringer, laminiert mit polyester. der flex und das feel, das die meisten kennen.',
c_eps_h:'eps / epoxy',c_eps_p:'ein kern aus expandiertem polystyrol, laminiert mit epoxidharz. leichter, mehr auftrieb, lebendiges feel. paddelt leicht, und die schale hält dings meist besser aus.',
c_str_h:'stringer',c_str_p:'ein holz-stringer oder ein bambus-inlay im deck gibt festigkeit und steuert den flex. wir wählen, was zum board passt.',
c_carb_h:'verstärkung',c_carb_p:'verstärkung nur dort, wo das board last nimmt und der ride es braucht. wir bestätigen es in der offerte.',
c_glass_h:'laminat',c_glass_p:'die glaslagen auf deck und bottom bestimmen, wie robust und wie schwer ein board ist. leichter für performance. für schulen und verleih geht\'s auch soft: eva-deck und rails über einem eps-kern.',
c_fins_h:'finnen',c_fins_p:'finnenboxen passend zum shape: thruster, quad, twin oder single, meist futures. softe oder harte finnen. wir bestätigen es in der offerte.',
c_art_h:'grafik',c_art_p:'dein artwork auf deck und bottom, unter dem laminat oder gesprayt. vor der produktion bekommst du einen proof.',
g_board:'das board',g_design:'design',g_order:'bestellung',
f_custom_h:'was macht es custom?',f_custom_p:'jedes board wird für seine bestellung gemacht. keine lagerboards.',
f_shapes_h:'welche shapes?',f_shapes_p:'shortboard, fish, midlength und longboard. jede länge, die zum shape passt.',
f_mat_h:'kann ich das material wählen?',f_mat_p:'nein. wir wählen den aufbau für deinen shape und deine wellen, damit das board so surft, wie es soll.',
f_len_h:'länge unklar?',f_len_p:'sag uns grösse, gewicht, level und welche wellen du surfst. wir schlagen dir in der antwort eine vor.',
f_files_h:'dateien',f_files_p:'png, jpg, svg, pdf, ai. am liebsten vektor. raster mit 300 dpi.',
f_nod_h:'kein design?',f_nod_p:'beschreib es. wir helfen und bestätigen es in der antwort.',
f_col_h:'farbe',f_col_p:'wir matchen die farben. bildschirm und druck können abweichen, darum schicken wir einen proof.',
f_how_h:'wie',f_how_p:'ein brief oder das startformular. wir antworten innert 48 stunden mit offerte und timeline.',
f_time_h:'bauzeit',f_time_p:'die timeline bestätigen wir mit der offerte. sie hängt von shape, menge und saison ab.',
f_dep_h:'anzahlung',f_dep_p:'50% zum start. der rest, bevor das board verschickt wird.',
f_chg_h:'änderungen',f_chg_p:'kein problem vor der produktion. shape und länge sind fix, sobald der blank geschnitten ist.',
start_k:'start',start_h1:'erzähl uns von deiner welle.',start_lede:'ein brief reicht. wir antworten innert 48 stunden mit einem vorschlag. timeline und anzahlung stehen in der <a class="inline" href="/faq.html">faq</a>.',
start_name:'name',start_email:'e-mail',start_type_label:'was suchst du?',ph:'wähl eins',t_personal:'ein board für mich',t_crew:'ein paar boards für freunde oder eine crew',t_brand:'eine kleinserie für meine brand oder firma',t_school:'eine flotte für surfschule, camp oder hotel',t_unsure:'noch unklar',t_unsure2:'noch unklar',
shape_ph:'shape (optional)',len_ph:"länge, z. b. 6'2",idea_ph:'grafik, logo, deine wellen, stückzahl…',submit:'anfrage senden',
danke_h1:'angekommen. wir melden uns bald.',danke_p:'wir antworten innert 48 stunden.'};
const EN={};
const q=s=>[...document.querySelectorAll(s)];
q('[data-i18n]').forEach(e=>EN[e.dataset.i18n]=e.textContent);
q('[data-i18n-html]').forEach(e=>EN[e.dataset.i18nHtml]=e.innerHTML);
q('[data-i18n-placeholder]').forEach(e=>EN[e.dataset.i18nPlaceholder]=e.placeholder);
const ttl=document.title,TDE={'carvd: branded boards meant to be surfed':'carvd: branded boards, gemacht fürs wasser'};
function apply(l){const d=l==='de'?DE:EN;document.documentElement.lang=l;
 q('[data-i18n]').forEach(e=>{const v=d[e.dataset.i18n];if(v!=null)e.textContent=v});
 q('[data-i18n-html]').forEach(e=>{const v=d[e.dataset.i18nHtml];if(v!=null)e.innerHTML=v});
 q('[data-i18n-placeholder]').forEach(e=>{const v=d[e.dataset.i18nPlaceholder];if(v!=null)e.placeholder=v});
 document.title=l==='de'&&TDE[ttl]?TDE[ttl]:ttl;
 q('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l))}
let s=null;try{s=new URLSearchParams(location.search).get('lang')||localStorage.getItem('carvd-lang')}catch(e){}
apply(s==='de'?'de':'en');
q('.lang button').forEach(b=>b.addEventListener('click',()=>{apply(b.dataset.lang);try{localStorage.setItem('carvd-lang',b.dataset.lang)}catch(e){}}));
const bur=document.querySelector('.burger'),mm=document.getElementById('mmenu');
if(bur&&mm){const set=o=>{mm.hidden=!o;bur.setAttribute('aria-expanded',o);document.body.classList.toggle('menu-open',o)};
 bur.addEventListener('click',()=>set(mm.hidden));mm.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
 addEventListener('keydown',e=>{if(e.key==='Escape')set(false)})}
})();

/* submit chain: web3forms -> formsubmit ajax -> mailto (failure only). orders dashboard via sendBeacon. */
(()=>{
const form=document.querySelector('form[data-carvd-form]');if(!form)return;
const W3='https://api.web3forms.com/submit',FS='https://formsubmit.co/ajax/custom%2Borders'+'@carvdboards.com',ORDERS='https://orders.carvd.workers.dev/api/intake';
const de=()=>document.documentElement.lang==='de';
const T={en:{sending:'sending…',fail:'sorry, sending did not work. please send it to us by email instead:',btn:'open email'},de:{sending:'wird gesendet…',fail:'sorry, das senden hat nicht geklappt. schick uns deine anfrage bitte per e-mail:',btn:'e-mail öffnen'}};
const post=(url,body)=>{const c=new AbortController(),t=setTimeout(()=>c.abort(),8000);
 return fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(body),signal:c.signal})
 .then(r=>r.json().then(j=>{if(!r.ok||!(j.success===true||j.success==='true'))throw new Error('fail');return j})).finally(()=>clearTimeout(t))};
const ot=form.querySelector('[name=order_type]'),nm=form.querySelector('[name=name]'),subj=form.querySelector('[name=subject]');
const mk=()=>'new surf board enquiry: '+((ot.value||'').split(':')[0]||'not chosen')+' from '+(nm.value||'').trim();
[ot,nm].forEach(e=>e.addEventListener('input',()=>subj.value=mk()));
form.addEventListener('submit',async e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const fd=Object.fromEntries(new FormData(form));if(fd.botcheck)return;
 const btn=form.querySelector('button[type=submit]'),lbl=btn.textContent,L=de()?T.de:T.en;
 btn.disabled=true;btn.textContent=L.sending;const old=document.getElementById('carvd-fail');if(old)old.remove();
 const subject=mk(),who=(fd.name||'').trim();
 const when=new Date().toLocaleString('de-CH',{timeZone:'Europe/Zurich',dateStyle:'medium',timeStyle:'short'})+' (Europe/Zurich)';
 const fields={'name':who,'email':fd.email,'sport':'surf',"what they're after":(fd.order_type||'').split(':').slice(1).join(':').trim(),'shape':fd.shape||'—','length':fd.length||'—','idea / message':fd.idee||'—','language':de()?'de':'en','page':location.origin+location.pathname,'submitted':when};
 const done=()=>{location.href='/danke.html'};
 try{const c=JSON.stringify({subject,...fields,sport:'surf',order_type:fd.order_type});
  if(!(navigator.sendBeacon&&navigator.sendBeacon(ORDERS,new Blob([c],{type:'text/plain'}))))fetch(ORDERS,{method:'POST',body:c,keepalive:true,mode:'no-cors'}).catch(()=>{})}catch(err){}
 try{await post(W3,{access_key:fd.access_key,subject,from_name:(who||'website')+' via carvd surf',replyto:fd.email,...fields});return done()}catch(err){}
 try{await post(FS,{...fields,_subject:subject,_replyto:fd.email,_template:'table',_captcha:'false',_honey:''});return done()}catch(err){}
 btn.disabled=false;btn.textContent=lbl;
 const body=Object.entries(fields).map(([k,v])=>k+': '+v).join('\n');
 const box=document.createElement('div');box.id='carvd-fail';box.setAttribute('role','alert');box.style.marginTop='1rem';
 const p=document.createElement('p');p.textContent=L.fail;const a=document.createElement('a');a.className='btn prim';a.textContent=L.btn;
 a.href='mailto:'+['custom','carvdboards.com'].join('@')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 box.append(p,a);form.after(box)});
})();
