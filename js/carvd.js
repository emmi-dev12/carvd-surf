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
con_k:'bauweise',con_h1:'du wählst die welle, wir den aufbau.',con_lede:'ein board nach mass ist kein sticker auf einem blank. wir wählen kern und aufbau passend zu shape und ride.',
c_pick_h:'wir wählen den aufbau',c_pick_p:'du wählst shape und länge. wir wählen die bauweise, die zum board, zu den wellen und zu deinem surfen passt.',
c_pu_h:'pu-kern',c_pu_p:'ein pu-schaumkern.',
c_eps_h:'eps / epoxy',c_eps_p:'ein handgeshapter eps-kern mit harter epoxy-unterseite. leicht, und du behältst performance-concaves, rocker, flex und rails.',
c_str_h:'bambus-inlay',c_str_p:'ein bambus-inlay im deck gibt festigkeit, wo die meisten schläge landen.',

c_glass_h:'soft-aufbau',c_glass_p:'für schulen und verleih: soft-eva-deck und rails über einem eps-kern, mit softer oder harter epoxy-unterseite. kein wachs nötig.',
c_fins_h:'finnen',c_fins_p:'futures-finnenboxen. softe oder harte finnen.',
c_art_h:'grafik',c_art_p:'dein artwork aufs board. vor der produktion bekommst du einen proof.',
g_board:'das board',g_design:'design',g_order:'bestellung',
f_custom_h:'was macht es custom?',f_custom_p:'jedes board wird für seine bestellung gemacht. keine lagerboards.',
f_shapes_h:'welche shapes?',f_shapes_p:'shortboard, fish, midlength und longboard. die länge legen wir mit dir fest.',
f_mat_h:'kann ich das material wählen?',f_mat_p:'nein. wir wählen den aufbau für deinen shape und deine wellen, damit das board so surft, wie es soll.',
f_len_h:'länge unklar?',f_len_p:'sag uns grösse, gewicht, level und welche wellen du surfst. wir schlagen dir in der antwort eine vor.',
f_files_h:'dateien',f_files_p:'png, jpg, svg, pdf, ai. am liebsten vektor. raster mit 300 dpi.',
f_nod_h:'kein design?',f_nod_p:'beschreib es. wir helfen und bestätigen es in der antwort.',
f_col_h:'farbe',f_col_p:'wir matchen die farben. bildschirm und druck können abweichen, darum schicken wir einen proof.',
f_how_h:'wie',f_how_p:'ein brief oder das startformular. wir antworten innert 48 stunden mit offerte und timeline.',
f_time_h:'bauzeit',f_time_p:'die timeline bestätigen wir mit der offerte.',
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

/* carvd glossary: hover/tap/focus definitions; strings are i18n (gl_*) */
(()=>{
const GL_I18N={"en": {"gl_shape": "the board's outline and form", "gl_fish": "short, wide board with split tail for small waves", "gl_midlength": "between shortboard and longboard: paddles easy, still turns", "gl_blank": "the foam block a board is shaped from", "gl_pu": "polyurethane foam, the classic surfboard core", "gl_eps": "expanded polystyrene foam: lighter and floatier than pu", "gl_epoxy": "tough resin that seals the core", "gl_concaves": "channels under the board that steer water for speed", "gl_rocker": "the curve of the board from nose to tail", "gl_flex": "how much the board bends and springs back", "gl_rails": "the board's side edges", "gl_inlay": "thin bamboo layer in the deck for strength", "gl_eva": "soft, grippy foam rubber: no wax needed", "gl_futures": "a common fin box system: fins slide in, screw tight"}, "de": {"gl_shape": "umriss und form des boards", "gl_fish": "kurzes, breites board mit split-tail für kleine wellen", "gl_midlength": "zwischen short- und longboard: paddelt leicht, dreht trotzdem", "gl_blank": "der schaumblock, aus dem das board entsteht", "gl_pu": "polyurethan-schaum, der klassische surfboard-kern", "gl_eps": "expandiertes polystyrol: leichter, mehr auftrieb als pu", "gl_epoxy": "robustes harz, das den kern versiegelt", "gl_concaves": "mulden unter dem board, lenken wasser für mehr speed", "gl_rocker": "die biegung des boards von nose bis tail", "gl_flex": "wie stark das board sich biegt und zurückfedert", "gl_rails": "die seitenkanten des boards", "gl_inlay": "dünne bambusschicht im deck für mehr festigkeit", "gl_eva": "weicher, griffiger schaumgummi: kein wachs nötig", "gl_futures": "verbreitetes finnenboxen-system: finne einschieben, festschrauben"}};
const TERMS=[{"k": "shape", "re": "shape"}, {"k": "fish", "re": "fish"}, {"k": "midlength", "re": "midlength"}, {"k": "blank", "re": "blank"}, {"k": "pu", "re": "pu"}, {"k": "eps", "re": "eps"}, {"k": "epoxy", "re": "epoxy"}, {"k": "concaves", "re": "concaves"}, {"k": "rocker", "re": "rocker"}, {"k": "flex", "re": "flex"}, {"k": "rails", "re": "rails"}, {"k": "inlay", "re": "bamboo deck inlay|bambus-inlay"}, {"k": "eva", "re": "eva"}, {"k": "futures", "re": "futures"}];
const css=document.createElement('style');css.textContent=`.gl{border-bottom:1px dotted #1E6BFF;cursor:help;outline:none;border-radius:2px}.gl:focus-visible{box-shadow:0 0 0 2px #1E6BFF}#gl-tip{position:fixed;z-index:9999;max-width:min(260px,calc(100vw - 16px));background:#141414;color:#f2f2f2;border:1px solid rgba(255,255,255,.12);border-left:3px solid #1E6BFF;border-radius:10px;padding:8px 11px;font-size:13px;line-height:1.35;font-weight:400;text-transform:none;letter-spacing:0;box-shadow:0 8px 24px rgba(0,0,0,.45);pointer-events:none;opacity:0;transition:opacity .12s}#gl-tip.on{opacity:1}`;document.head.appendChild(css);
const tip=document.createElement('div');tip.id='gl-tip';tip.setAttribute('role','tooltip');document.body.appendChild(tip);
let cur=null;
const L=()=>document.documentElement.lang==='de'?'de':'en';
function show(el){cur=el;tip.textContent=GL_I18N[L()]['gl_'+el.dataset.gl]||'';el.setAttribute('aria-describedby','gl-tip');tip.classList.add('on');
 const r=el.getBoundingClientRect(),w=tip.offsetWidth,h=tip.offsetHeight,vw=document.documentElement.clientWidth;
 let x=Math.min(Math.max(8,r.left+r.width/2-w/2),vw-w-8),y=r.top-h-8;if(y<8)y=r.bottom+8;tip.style.left=x+'px';tip.style.top=y+'px'}
function hide(){if(cur)cur.removeAttribute('aria-describedby');cur=null;tip.classList.remove('on')}
const SKIP='a,button,nav,header,footer,select,option,label,form,.gl,#gl-tip,script,style';
function wrap(){
 document.querySelectorAll('.gl').forEach(s=>s.replaceWith(document.createTextNode(s.textContent)));
 const seen=new Map();
 document.querySelectorAll('[data-i18n],[data-i18n-html]').forEach(el=>{
  if(el.closest(SKIP))return;
  const sec=el.closest('section')||el.closest('main')||document.body;if(!seen.has(sec))seen.set(sec,new Set());const S=seen.get(sec);
  const tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(tw.nextNode())nodes.push(tw.currentNode);
  nodes.forEach(n=>{if(n.parentElement.closest(SKIP))return;
   while(n&&n.nodeType===3){let best=null;
    for(const t of TERMS){if(S.has(t.k))continue;const m=new RegExp('(^|[^a-zäöü0-9])('+t.re+')(?![a-zäöü0-9])','i').exec(n.data);if(m&&(!best||m.index+m[1].length<best.i))best={t,i:m.index+m[1].length,len:m[2].length}}
    if(!best)break;S.add(best.t.k);const after=n.splitText(best.i);after.splitText(best.len);
    const s=document.createElement('span');s.className='gl';s.tabIndex=0;s.dataset.gl=best.t.k;s.textContent=after.data;after.replaceWith(s);n=s.nextSibling}
  });
 });
}
document.addEventListener('mouseover',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g)show(g)});
document.addEventListener('mouseout',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g&&!g.contains(e.relatedTarget)&&document.activeElement!==g)hide()});
document.addEventListener('focusin',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g)show(g)});
document.addEventListener('focusout',e=>{if(e.target.closest&&e.target.closest('.gl'))hide()});
document.addEventListener('click',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g){g.focus();show(g)}else hide()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
addEventListener('scroll',hide,{passive:true});
const run=()=>{hide();wrap()};
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setTimeout(run,0)));
run();window.__carvdGlossary=run;
})();
