/* ═══════════════════════════════════════════════════════════
   IDNTIK — EDITABLE CONFIG  (one place for every link & list)
   Replace any "[ADD_...]" value. Until replaced, the page shows
   a red dashed tag so nothing missing goes unnoticed.
   ═══════════════════════════════════════════════════════════ */
window.IDNTIK_CONFIG = {
  email:          "info@idntik.com",            // hello@idntik.com
  hrEmail:        "info@idntik.com",        // temporary — switch to hr@idntik.com when ready
  whatsappNumber: "201025600469",  // international, digits only: 2010XXXXXXXX
  whatsappDisplay:"+20 102 560 0469", // how the number is shown in the footer
  officeAddress:  "Fifth Settlement, New Cairo",
  mapsUrl:        "https://www.google.com/maps/search/?api=1&query=Idntik+Agency+New+Cairo",
  // Forms post JSON here (Formspree, Make/Zapier webhook, Google Apps Script → Sheets).
  // Leave as-is and each form hands its message to WhatsApp instead.
  formEndpoint:   "[ADD_FORM_ENDPOINT]",
  instagramUrl:   "https://www.instagram.com/idntikagency/",
  behanceUrl:     "https://www.behance.net/idntik",
  facebookUrl:    "https://www.facebook.com/IdntikAgency",

  /* Tally forms — paste each form's share link (https://tally.so/r/xxxx) */
  tallyInternUrl:        "[ADD_TALLY_INTERN]",          // Careers · Internship application
  tallyHiringUrl:        "[ADD_TALLY_HIRING]",          // Careers · Job application
  tallyIntakeUrl:        "[ADD_TALLY_INTAKE]",          // Contact · Idntik intake form
  tallyBrandingBriefUrl: "[ADD_TALLY_BRANDING_BRIEF]",  // Contact · Branding brief

  /* Home · "With who" — only clients who agreed. logo = path to transparent SVG/PNG */
  clients: [
    { name:"Calla Pharmacy", logo:"assets/clients/calla-pharmacy.webp" },
    { name:"Elite Construction", logo:"assets/clients/elite-construction.webp" },
    { name:"El Doha Urban Development", logo:"assets/clients/el-doha-urban-development.webp" },
    { name:"El Shehab Real Estate Development", logo:"assets/clients/el-shehab-real-estate-development.webp" },
    { name:"Gory", logo:"assets/clients/gory.webp" },
    { name:"Honna", logo:"assets/clients/honna.webp" },
    { name:"Luzán Real Estate Development", logo:"assets/clients/luzan-real-estate-development.webp" },
    { name:"Meshkat Al Balad", logo:"assets/clients/meshkat-al-balad.webp" },
    { name:"Organico", logo:"assets/clients/organico.webp" },
    { name:"Sala", logo:"assets/clients/sala.webp" },
    { name:"Waqf Alateeq", logo:"assets/clients/waqf-alateeq.webp" },
    { name:"Adwaa Albalad", logo:"assets/clients/adwaa-albalad.webp" },
    { name:"Tamken Alanfaa", logo:"assets/clients/tamken-alanfaa.webp" },
    { name:"Alamal Agricultural Projects", logo:"assets/clients/alamal-agricultural-projects.webp" },
    { name:"Maybe Coffee", logo:"assets/clients/maybe-coffee.webp" },
    { name:"Sonof", logo:"assets/clients/sonof.webp" },
    { name:"Sajan Law", logo:"assets/clients/sajan-law.webp" },
    { name:"Laboratoire Premier", logo:"assets/clients/laboratoire-premier.webp" },
    { name:"Mashariq Development", logo:"assets/clients/mashariq-development.webp" },
    { name:"SSEC", logo:"assets/clients/ssec.webp" }
  ],
  totalClients: "",   // optional, e.g. "060" shows 020/060; empty shows "020 brands"

  /* About · team. dept must match a key in DEPTS below. photo = Cuber character image */
  team: [
    { name:"Mohamed Sherif",   role:"Founder & CEO",              dept:"mgmt",     photo:"" },
    { name:"[ADD_NAME]",       role:"Account Manager",            dept:"client",   photo:"" },
    { name:"[ADD_NAME]",       role:"Brand Strategist",           dept:"client",   photo:"" },
    { name:"[ADD_NAME]",       role:"Traffic Manager",            dept:"ops",      photo:"" },
    { name:"[ADD_NAME]",       role:"Coordinator",                dept:"ops",      photo:"" },
    { name:"[ADD_NAME]",       role:"Art Director",               dept:"design",   photo:"" },
    { name:"[ADD_NAME]",       role:"Branding Designer",          dept:"design",   photo:"" },
    { name:"[ADD_NAME]",       role:"Graphic Designer",           dept:"design",   photo:"" },
    { name:"[ADD_NAME]",       role:"Senior Illustrator",         dept:"illus",    photo:"" },
    { name:"[ADD_NAME]",       role:"Illustrator Artist",         dept:"illus",    photo:"" },
    { name:"[ADD_NAME]",       role:"Motion Designer",            dept:"illus",    photo:"" },
    { name:"[ADD_NAME]",       role:"Marketing Manager",          dept:"mkt",      photo:"" },
    { name:"[ADD_NAME]",       role:"Content Creator & Copywriter", dept:"mkt",    photo:"" },
    { name:"[ADD_NAME]",       role:"Social Media Specialist",    dept:"mkt",      photo:"" },
    { name:"[ADD_NAME]",       role:"Performance Specialist",     dept:"mkt",      photo:"" },
    { name:"[ADD_NAME]",       role:"Media Buyer",                dept:"mkt",      photo:"" }
  ],

  /* Home · stage details (opened from "Explore the services" on a stage card).
     Add growth / management / expansion here in the same shape to enable their buttons. */
  stageDetails: {
    foundation: [
      { num:"01", group:"Strategy", items:[
        { en:"Brand Strategy", ar:"استراتيجية البراند",
          dEn:"We define the brand's direction, positioning, and approach to stand out and connect with its audience.",
          dAr:"نحدد اتجاه البراند ومكانته وطريقة ظهوره ليميز نفسه ويتواصل مع جمهوره." },
        { en:"Brand Naming", ar:"تسمية البراند",
          dEn:"We create distinctive brand names that reflect the brand's character and are easy to remember.",
          dAr:"نبتكر أسماء مميزة تعبر عن شخصية البراند وتكون سهلة التذكر والارتباط به." } ]},
      { num:"02", group:"Identity", items:[
        { en:"Brand Identity", ar:"هوية البراند",
          dEn:"We build a distinctive visual identity that gives the brand a clear and consistent presence.",
          dAr:"نبني هوية بصرية مميزة تمنح البراند حضورًا واضحًا ومتسقًا." },
        { en:"Brand Guideline", ar:"دليل الهوية",
          dEn:"We create clear guidelines that ensure the brand identity is applied consistently across every touchpoint.",
          dAr:"نضع قواعد واضحة تضمن تطبيق الهوية بشكل ثابت ومتسق عبر جميع نقاط التواصل." },
        { en:"Logo Design", ar:"تصميم الشعار",
          dEn:"We design distinctive logos that represent the brand and work effectively across different applications.",
          dAr:"نصمم شعارات مميزة تعبر عن البراند وتعمل بفعالية في مختلف الاستخدامات." } ]},
      { num:"03", group:"System", items:[
        { en:"Brand Assets", ar:"عناصر الهوية",
          dEn:"We develop the visual elements needed to extend the brand identity across its everyday communication.",
          dAr:"نطوّر العناصر البصرية اللازمة لتطبيق الهوية في مختلف استخدامات البراند اليومية." },
        { en:"Illustration", ar:"الرسوم التوضيحية",
          dEn:"We create custom illustrations that add personality and bring the brand's visual language to life.",
          dAr:"نصمم رسومًا توضيحية مخصصة تضيف شخصية للبراند وتطوّر لغته البصرية." },
        { en:"Brand Applications", ar:"تطبيقات الهوية",
          dEn:"We apply the brand identity across relevant touchpoints to create a consistent experience in the real world.",
          dAr:"نطبّق الهوية على مختلف نقاط التواصل لبناء تجربة متناسقة للبراند في الواقع." },
        { en:"Digital Assets", ar:"الأصول الرقمية",
          dEn:"We create digital assets that extend the brand identity across websites, social media, and digital platforms.",
          dAr:"نجهّز الأصول الرقمية لتطبيق الهوية بشكل متناسق عبر المواقع والسوشيال ميديا والمنصات الرقمية." } ]}
    ],
    growth: [
      { num:"01", group:"Content", items:[
        { en:"Social Media", ar:"إدارة محتوى سوشيال ميديا",
          dEn:"We develop and manage content that maintains the brand's presence and serves its goals across social platforms.",
          dAr:"نطوّر وندير محتوى يحافظ على حضور البراند ويخدم أهدافه عبر منصات السوشيال ميديا." },
        { en:"Content Production", ar:"إنتاج المحتوى",
          dEn:"We turn ideas into ready-to-publish content for the brand's digital channels.",
          dAr:"نحوّل الأفكار إلى محتوى جاهز للتنفيذ والنشر عبر قنوات البراند الرقمية." },
        { en:"Content Planning", ar:"تخطيط المحتوى",
          dEn:"We organize content into a clear plan aligned with the brand's goals and communication needs.",
          dAr:"نُنظّم المحتوى في خطة واضحة مرتبطة بأهداف البراند واحتياجاته التواصلية." },
        { en:"Content Writing", ar:"كتابة المحتوى",
          dEn:"We craft clear and engaging content that reflects the brand's voice and communicates its ideas effectively.",
          dAr:"نكتب محتوى واضحًا وجذابًا يعكس صوت البراند ويوصل أفكاره بفعالية." } ]},
      { num:"02", group:"Campaign", items:[
        { en:"Digital Campaign", ar:"حملات إعلانية رقمية",
          dEn:"We turn brand goals into creative campaigns that reach the right audience and achieve clear objectives.",
          dAr:"نحوّل أهداف البراند إلى حملات إبداعية تصل للجمهور المناسب وتحقق أهدافًا واضحة." },
        { en:"Creative Direction", ar:"توجيه إبداعي",
          dEn:"We define the creative direction that shapes the campaign's visual and communication style.",
          dAr:"نحدد التوجه الإبداعي الذي يشكل الشكل البصري وأسلوب التواصل للحملة." },
        { en:"Concepts", ar:"أفكار إبداعية",
          dEn:"We develop creative concepts that communicate the brand's message clearly and effectively.",
          dAr:"نطوّر أفكارًا إبداعية توصل رسالة البراند بوضوح وفعالية." },
        { en:"Copywriting", ar:"كتابة إعلانية",
          dEn:"We craft compelling messages and copy that communicate the idea and connect with the audience.",
          dAr:"نصيغ رسائل وكتابات إعلانية توصل الفكرة وتجذب الجمهور." } ]},
      { num:"03", group:"Motion", items:[
        { en:"Motion Design", ar:"الموشن ديزاين",
          dEn:"We transform brand visuals into engaging motion that makes communication more dynamic.",
          dAr:"نحوّل العناصر البصرية للبراند إلى حركة جذابة تجعل التواصل أكثر حيوية." },
        { en:"Animation", ar:"التحريك",
          dEn:"We use animation to bring ideas to life, simplify messages, and capture attention.",
          dAr:"نستخدم التحريك لإحياء الأفكار وتبسيط الرسائل وجذب الانتباه." },
        { en:"Video Editing", ar:"مونتاج الفيديوهات",
          dEn:"We edit video content to deliver clear, engaging stories that support the brand's goals.",
          dAr:"نقوم بمونتاج الفيديوهات لتقديم محتوى واضح وجذاب يدعم أهداف البراند." },
        { en:"Illustration", ar:"الرسوم التوضيحية",
          dEn:"We create custom illustrations that bring ideas to life across digital and visual content.",
          dAr:"نصمم رسومًا توضيحية مخصصة لتحويل الأفكار إلى محتوى بصري مميز." } ]}
    ],
    management: [
      { num:"01", group:"Audit", items:[
        { en:"Brand Audit", ar:"تقييم شامل للبراند",
          dEn:"We review the brand across all key areas to identify gaps, challenges, and opportunities for improvement.",
          dAr:"نراجع البراند بشكل شامل لتحديد نقاط الضعف والتحديات وفرص التطوير." },
        { en:"Touchpoints", ar:"تقييم نقاط تواصل البراند",
          dEn:"We review every touchpoint where the audience interacts with the brand.",
          dAr:"نراجع كل نقطة يتفاعل فيها الجمهور مع البراند." },
        { en:"Consistency", ar:"توحيد تجربة البراند",
          dEn:"We ensure the brand experience remains consistent across all communication touchpoints.",
          dAr:"نتأكد من اتساق تجربة البراند عبر جميع نقاط التواصل." } ]},
      { num:"02", group:"Review", items:[
        { en:"Brand Review", ar:"مراجعة وتطوير البراند",
          dEn:"We review the current brand and identify opportunities for improvement and development.",
          dAr:"نراجع حالة البراند الحالية ونحدد فرص التطوير والتحسين." },
        { en:"Brand Control", ar:"ضبط هوية البراند",
          dEn:"We ensure the brand is applied correctly and consistently across all touchpoints.",
          dAr:"نتأكد من تطبيق البراند بشكل صحيح ومتسق عبر جميع نقاط التواصل." },
        { en:"Performance", ar:"تقييم أداء البراند",
          dEn:"We review the brand's performance to identify what is working and where improvements are needed.",
          dAr:"نراجع أداء البراند لتحديد ما يعمل بشكل جيد وما يحتاج إلى تحسين." } ]},
      { num:"03", group:"Consultancy", items:[
        { en:"Design Consultancy", ar:"استشارات تصميمية",
          dEn:"We provide expert design guidance to help the brand communicate more effectively.",
          dAr:"نقدم توجيهًا متخصصًا في التصميم يساعد البراند على التواصل بشكل أفضل." },
        { en:"Marketing Consultancy", ar:"استشارات تسويقية",
          dEn:"We provide marketing guidance and recommendations to help the brand grow and communicate effectively.",
          dAr:"نقدم حلولًا وتوجيهات تسويقية تساعد البراند على النمو والتواصل بفعالية." },
        { en:"Strategic Advice", ar:"استشارات استراتيجية",
          dEn:"We provide strategic guidance to help the brand make clearer decisions and move toward its goals.",
          dAr:"نقدم رؤية واستشارات استراتيجية تساعد البراند على اتخاذ قرارات أوضح وتحقيق أهدافه." } ]}
    ]
  },

  /* Careers · open roles. Remove a role to hide it; empty list shows the open-application block only. */
  jobs: [
    { title:"Community Manager", titleAr:"مدير مجتمع",
      type:"Full-time", place:"Cairo",
      desc:"Own the conversation around our clients' brands: replies, moderation, and the insight that comes back from the audience.",
      descAr:"تدير الحوار حول علامات عملائنا: الردود والإشراف، وما يعود من الجمهور من رؤى.", applyUrl:"" },
    { title:"Media Buyer", titleAr:"مشتري إعلانات",
      type:"Full-time", place:"Cairo",
      desc:"Plan, launch, and optimize paid campaigns across Meta, TikTok, and Google for our clients' brands.",
      descAr:"تخطط وتطلق وتحسّن الحملات المدفوعة على ميتا وتيك توك وجوجل لعلامات عملائنا.", applyUrl:"" },
    { title:"Analytics & Reporting Specialist", titleAr:"أخصائي تحليلات وتقارير",
      type:"Full-time", place:"Cairo",
      desc:"Turn campaign and content data into monthly reports clients understand and decisions our team can act on.",
      descAr:"تحوّل بيانات الحملات والمحتوى إلى تقارير شهرية يفهمها العميل وقرارات ينفذها الفريق.", applyUrl:"" }
  ]
};

/* ═══════════════════════════════════════════════════════════
   Shared behaviour — no edits needed below this line
   ═══════════════════════════════════════════════════════════ */
(function(){
  var C = window.IDNTIK_CONFIG, app = document.getElementById('app');
  var $ = function(s,r){ return (r||document).querySelector(s); };
  var $$ = function(s,r){ return Array.from((r||document).querySelectorAll(s)); };
  var isPh = function(v){ return !v || /^\[ADD_/.test(v); };
  var tag = function(v){ var s=document.createElement('span'); s.className='ph'; s.textContent=v; return s; };
  var lang = function(){ return app.className === 'lang-ar' ? 'ar' : 'en'; };
  var bi = function(en, ar){ return '<span class="en">'+en+'</span><span class="ar">'+(ar||en)+'</span>'; };
  var esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
  var waBase = isPh(C.whatsappNumber) ? null : 'https://wa.me/' + C.whatsappNumber.replace(/\D/g,'');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* links & text slots */
  $$('[data-link]').forEach(function(a){
    var v = C[a.getAttribute('data-link')];
    if (isPh(v)) { if (a.hasAttribute('data-tag')) { a.appendChild(document.createTextNode(' ')); a.appendChild(tag(v)); } a.addEventListener('click', function(e){ e.preventDefault(); }); return; }
    a.href = v; a.target = '_blank'; a.rel = 'noopener';
  });
  $$('[data-text]').forEach(function(el){
    var k = el.getAttribute('data-text'), v = C[k];
    if (isPh(v)) el.appendChild(tag(v)); else el.textContent = (k==='whatsappNumber' ? '+' : '') + v;
  });
  $$('[data-mail]').forEach(function(a){ if (!isPh(C.email)) a.href = 'mailto:' + C.email; });
  /* footer · Cairo live clock */
  (function(){
    var el = $('#ftClock'); if (!el) return;
    function tick(){
      var d = new Date(), o = {timeZone:'Africa/Cairo', hour:'numeric', minute:'2-digit', hour12:true};
      try { el.innerHTML = bi(d.toLocaleTimeString('en-US', o), d.toLocaleTimeString('ar-EG', o)); } catch(e){ el.textContent = ''; }
    }
    tick(); setInterval(tick, 20000);
  })();
  $$('[data-wa]').forEach(function(a){ if (waBase) { a.href = waBase; a.target='_blank'; a.rel='noopener'; } else a.addEventListener('click', function(e){ e.preventDefault(); }); });
  $$('[data-copy]').forEach(function(b){
    b.addEventListener('click', function(){
      var v = C[b.getAttribute('data-copy')]; if (isPh(v)) return;
      try { navigator.clipboard.writeText(v).then(function(){ b.innerHTML = bi('Copied','تم النسخ'); setTimeout(function(){ b.innerHTML = bi('Copy','نسخ'); }, 1800); }, function(){}); } catch(e){}
    });
  });

  /* current page in nav */
  var here = (location.pathname.split('/').pop() || 'index.html');
  $$('.nav a').forEach(function(a){ if (a.getAttribute('href') === here) a.setAttribute('aria-current','page'); });

  /* mobile menu */
  var nav = $('#nav'), mb = $('#menuBtn');
  if (mb) {
    mb.addEventListener('click', function(){ var o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); });
    $$('a', nav).forEach(function(a){ a.addEventListener('click', function(){ nav.classList.remove('open'); mb.setAttribute('aria-expanded', false); }); });
  }

  /* header hides on scroll down, returns on scroll up */
  var bar = $('.topbar'), lastY = window.scrollY;
  window.addEventListener('scroll', function(){
    var y = window.scrollY;
    if (nav && nav.classList.contains('open')) return;
    bar.classList.toggle('hide', y > lastY && y > 240);
    lastY = y;
  }, { passive:true });

  /* hero cover: gentle parallax */
  var hImg = $('#heroImg');
  if (hImg && !reduce) {
    var ticking = false;
    window.addEventListener('scroll', function(){
      if (ticking) return; ticking = true;
      requestAnimationFrame(function(){ var y = Math.min(window.scrollY, 900); hImg.style.setProperty('--py', (y * 0.12) + 'px'); ticking = false; });
    }, { passive:true });
  }

  /* marquee: duplicate content for a seamless loop */
  $$('.marquee-track').forEach(function(t){ t.innerHTML += t.innerHTML; });

  /* ── HOME ─────────────────────────────────────────── */
  var logos = $('#logos');
  if (logos) {
    C.clients.forEach(function(c){
      var d = document.createElement('div'); d.className = 'logo';
      if (c.logo) { var im = new Image(); im.src = c.logo; im.alt = c.name; im.loading='lazy'; d.appendChild(im); }
      else d.appendChild(tag(c.name));
      logos.appendChild(d);
    });
    var ctr = $('#clientCtr');
    ctr.innerHTML = '<b>' + String(C.clients.length).padStart(3,'0') + '</b>' + (C.totalClients ? '/' + C.totalClients : ' ' + bi('brands','علامة'));
  }

  var pairsEl = $('#pairs');
  if (pairsEl) {
    [['Systems','deliverables','الأنظمة','التسليمات'],['Strategy','decoration','الاستراتيجية','الزخرفة'],
     ['Consistency','trends','الاتساق','الموضة'],['Clarity','complexity','الوضوح','التعقيد'],
     ['Process','guesswork','المنهج','الاجتهاد'],['Growth','launch day','النمو','يوم الإطلاق'],
     ['Long-term','one-off','المدى الطويل','المرة الواحدة'],['Value','price','القيمة','السعر'],
     ['Partner','supplier','الشريك','المورّد']
    ].forEach(function(p){
      var r = document.createElement('div'); r.className = 'pair';
      r.innerHTML = '<span class="a">'+bi(p[0],p[2])+'</span><span class="o">'+bi('over','قبل')+'</span><span class="b">'+bi(p[1],p[3])+'</span>';
      pairsEl.appendChild(r);
    });
  }

  /* shared form submit: endpoint, else hand off to WhatsApp */
  function deliver(kind, data, text, onDone){
    if (isPh(C.formEndpoint)) return onDone(false);
    data.formType = kind;
    fetch(C.formEndpoint, { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(data) })
      .then(function(r){ if(!r.ok) throw 0; onDone(true); }).catch(function(){ onDone(false); });
  }
  function handoff(box, text){
    var actions = $('.done-actions', box), sum = $('.summary', box);
    sum.textContent = text; actions.innerHTML = '';
    if (waBase) { var a=document.createElement('a'); a.className='btn btn-primary'; a.href=waBase+'?text='+encodeURIComponent(text); a.target='_blank'; a.rel='noopener'; a.innerHTML=bi('Send on WhatsApp','أرسل عبر واتساب')+' <span class="arrow">→</span>'; actions.appendChild(a); }
    else actions.appendChild(tag(C.whatsappNumber));
    var cp = document.createElement('button'); cp.type='button'; cp.className='btn btn-ghost btn-sm'; cp.innerHTML=bi('Copy message','انسخ الرسالة');
    cp.addEventListener('click', function(){ try{ navigator.clipboard.writeText(text).then(function(){ cp.innerHTML=bi('Copied','تم النسخ'); }, function(){}); }catch(e){} });
    actions.appendChild(cp);
  }

  /* brief (5 steps) */
  var form = $('#briefForm');
  if (form) {
    var BUDGETS = { EGP:['< 50K EGP','50K – 150K EGP','150K – 350K EGP','350K+ EGP'], USD:['< $3K','$3K – $7K','$7K – $15K','$15K+'] };
    var renderBudget = function(){
      var cur = $('#market').value === 'Egypt' ? 'EGP' : 'USD';
      var prev = ($('input[name=budget]:checked')||{}).value, wrap = $('#budgetChips'); wrap.innerHTML = '';
      BUDGETS[cur].concat(['Not sure yet']).forEach(function(b,i){
        var lbl = document.createElement('label'); lbl.className='chip';
        lbl.innerHTML = '<input type="radio" name="budget" id="bd'+i+'" value="'+b+'"'+(b===prev?' checked':'')+'><span>'+(b==='Not sure yet'?bi('Not sure yet','غير محددة بعد'):b)+'</span>';
        wrap.appendChild(lbl);
      });
      $('#budgetHint').innerHTML = cur==='EGP' ? bi('Approximate, in Egyptian pounds.','تقريبية، بالجنيه المصري.') : bi('Approximate, in US dollars.','تقريبية، بالدولار الأمريكي.');
    };
    /* every country, Egypt first, the rest A–Z, names in English · Arabic */
    var ISO = 'AF AL DZ AD AO AG AR AM AU AT AZ BS BH BD BB BY BE BZ BJ BT BO BA BW BR BN BG BF BI CV KH CM CA CF TD CL CN CO KM CG CD CR CI HR CU CY CZ DK DJ DM DO EC SV GQ ER EE SZ ET FJ FI FR GA GM GE DE GH GR GD GT GN GW GY HT HN HK HU IS IN ID IR IQ IE IT JM JP JO KZ KE KI KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MR MU MX FM MD MC MN ME MA MZ MM NA NR NP NL NZ NI NE NG KP MK NO OM PK PW PS PA PG PY PE PH PL PT PR QA RO RU RW KN LC VC WS SM ST SA SN RS SC SL SG SK SI SB SO ZA KR SS ES LK SD SR SE CH SY TW TJ TZ TH TL TG TO TT TN TR TM TV UG UA AE GB US UY UZ VU VA VE VN YE ZM ZW'.split(' ');
    var dnEn = null, dnAr = null;
    try { dnEn = new Intl.DisplayNames(['en'], {type:'region'}); dnAr = new Intl.DisplayNames(['ar'], {type:'region'}); } catch(e){}
    var sel = $('#market');
    ISO.map(function(c){ return { en: dnEn ? dnEn.of(c) : c, ar: dnAr ? dnAr.of(c) : '' }; })
       .sort(function(a,b){ return a.en.localeCompare(b.en); })
       .forEach(function(c){ var o = document.createElement('option'); o.value = c.en; o.textContent = c.en + (c.ar ? ' · ' + c.ar : ''); sel.appendChild(o); });

    $('#market').addEventListener('change', renderBudget); renderBudget();

    var step = 1, TOTAL = 5, steps = $$('.step', form), err = $('#err');
    var back = $('#backBtn'), next = $('#nextBtn'), send = $('#sendBtn');
    var MSG = {1:['Pick at least one stage.','اختر مرحلة واحدة على الأقل.'],2:['Add your brand name and a line about what you need.','أضف اسم العلامة وسطرًا عمّا تحتاجه.'],
      3:['Pick a budget range, or "Not sure yet".','اختر نطاق الميزانية، أو "غير محددة بعد".'],4:['Pick a timeframe.','اختر التوقيت.'],5:['Add your name and an email or WhatsApp number.','أضف اسمك وبريدك أو رقم واتساب.']};
    var f = form.elements;
    var valid = function(n){
      if (n===1) return !!$('input[name=stage]:checked', form);
      if (n===2) return f.business.value.trim() && f.details.value.trim();
      if (n===3) return !!$('input[name=budget]:checked', form);
      if (n===4) return !!$('input[name=timeframe]:checked', form);
      return f.name.value.trim() && (/\S+@\S+\.\S+/.test(f.email.value) || f.phone.value.replace(/\D/g,'').length >= 8);
    };
    var show = function(n){
      step = n; err.textContent = '';
      steps.forEach(function(s){ s.classList.toggle('on', +s.dataset.step === n); });
      $('#stepNum').textContent = n; $$('#sqs i').forEach(function(q,i){ q.classList.toggle('on', i < n - 1); q.classList.toggle('cur', i === n - 1); });
      back.style.visibility = n===1 ? 'hidden' : 'visible'; next.hidden = n===TOTAL; send.hidden = n!==TOTAL;
    };
    var fail = function(){ err.textContent = MSG[step][lang()==='ar'?1:0]; };
    form._fail = function(){ if (err.textContent) fail(); };
    next.addEventListener('click', function(){ if (valid(step)) show(step+1); else fail(); });
    back.addEventListener('click', function(){ if (step>1) show(step-1); });
    form.addEventListener('keydown', function(e){ if (e.key==='Enter' && e.target.tagName!=='TEXTAREA'){ e.preventDefault(); (step<TOTAL?next:send).click(); } });
    var pick = function(n){ return $$('input[name='+n+']:checked', form).map(function(i){return i.value;}).join(', '); };
    form.addEventListener('submit', function(e){
      e.preventDefault(); if (!valid(5)) return fail();
      var d = { stage:pick('stage'), business:f.business.value.trim(), market:f.market.value, details:f.details.value.trim(), budget:pick('budget'), timeframe:pick('timeframe'),
                name:f.name.value.trim(), role:f.role.value.trim(), email:f.email.value.trim(), phone:f.phone.value.trim(), language:lang(), submittedAt:new Date().toISOString() };
      var text = 'New project brief — Idntik\n\nStage: '+d.stage+'\nBrand: '+d.business+'\nMarket: '+d.market+'\nNeed: '+d.details+'\nBudget: '+d.budget+'\nTimeframe: '+d.timeframe+
                 '\n\nName: '+d.name+(d.role?' ('+d.role+')':'')+'\nEmail: '+(d.email||'—')+'\nWhatsApp: '+(d.phone||'—');
      send.disabled = true;
      deliver('brief', d, text, function(ok){
        steps.forEach(function(s){ s.classList.remove('on'); }); $('#formNav').hidden = true; err.textContent='';
        $$('#sqs i').forEach(function(q){ q.classList.add('on'); q.classList.remove('cur'); }); $('#stepNum').textContent = TOTAL; var box = $('#done'); box.classList.add('on');
        $('#doneMsg').innerHTML = ok ? bi('Your Account Manager will reply within one working day.','سيرد عليك مدير الحساب خلال يوم عمل واحد.')
                                     : bi('One last tap: send this brief to us on WhatsApp.','خطوة أخيرة: أرسل هذا الطلب لنا عبر واتساب.');
        if (!ok) handoff(box, text);
      });
    });
    show(1);
  }

  /* ── HOME · stage detail drawer ───────────────────── */
  var detail = $('#stageDetail');
  if (detail) {
    var TITLES = { foundation:['Brand Foundation','We build the foundation your brand grows from.'], growth:['Brand Growth','We make your brand go further.'], management:['Brand Management','We keep your brand on track.'] };
    var scrim = document.createElement('div'); scrim.className = 'sd-scrim'; scrim.hidden = true; app.appendChild(scrim);
    app.appendChild(detail);
    detail.setAttribute('role','dialog'); detail.setAttribute('aria-modal','true'); detail.setAttribute('aria-labelledby','sdTitle');
    var lastBtn = null;
    function closeDrawer(){
      detail.classList.remove('open'); scrim.classList.remove('open'); document.documentElement.classList.remove('sd-lock');
      setTimeout(function(){ detail.hidden = true; scrim.hidden = true; }, reduce ? 0 : 450);
      if (lastBtn) { lastBtn.setAttribute('aria-expanded','false'); lastBtn.focus(); }
    }
    $$('.stage-open').forEach(function(b){
      if (!(C.stageDetails||{})[b.dataset.stage]) { b.hidden = true; return; }
      b.addEventListener('click', function(){
        var k = b.dataset.stage, groups = C.stageDetails[k], t = TITLES[k] || [k,''];
        detail.innerHTML = '<div class="sd-head"><div><span class="sd-kicker">'+bi('Services','الخدمات')+'</span>'
          + '<h2 class="sd-name" id="sdTitle">'+t[0]+'</h2><p class="sd-tag">'+t[1]+'</p></div>'
          + '<button class="sd-close" type="button" aria-label="Close">×</button></div>'
          + '<div class="sd-body">' + groups.map(function(g){
              return '<div class="sd-group"><h3 class="sd-title"><span class="sd-num">'+g.num+'</span>'+esc(g.group)+'</h3>'
                + g.items.map(function(it){
                    return '<div class="sd-item"><div class="sd-en" lang="en" dir="ltr"><h4>'+esc(it.en)+'</h4><p>'+esc(it.dEn)+'</p></div>'
                      + '<div class="sd-ar" lang="ar" dir="rtl"><h4>'+esc(it.ar)+'</h4><p>'+esc(it.dAr)+'</p></div></div>';
                  }).join('') + '</div>';
            }).join('')
          + '<a class="btn btn-primary sd-cta" href="#brief">'+bi('Start a project','ابدأ مشروعك')+' <span class="arrow">→</span></a></div>';
        lastBtn = b; b.setAttribute('aria-expanded','true');
        detail.hidden = false; scrim.hidden = false; detail.scrollTop = 0;
        document.documentElement.classList.add('sd-lock');
        requestAnimationFrame(function(){ requestAnimationFrame(function(){ detail.classList.add('open'); scrim.classList.add('open'); }); });
        $('.sd-close', detail).addEventListener('click', closeDrawer);
        $('.sd-cta', detail).addEventListener('click', function(){ closeDrawer(); });
        setTimeout(function(){ $('.sd-close', detail).focus(); }, 60);
      });
    });
    scrim.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !detail.hidden) closeDrawer(); });
  }

  /* ── ABOUT · team ─────────────────────────────────── */
  var team = $('#team');
  if (team) {
    var DEPTS = { all:['All','الكل'], mgmt:['Management','الإدارة'], client:['Client & Strategy','العملاء والاستراتيجية'], ops:['Operations & Traffic','التشغيل والترافيك'],
                  design:['Creative & Design','الإبداع والتصميم'], illus:['Illustration & Motion','الرسوم والموشن'], mkt:['Content & Marketing','المحتوى والتسويق'] };
    var fbar = $('#filters');
    Object.keys(DEPTS).forEach(function(k){
      if (k!=='all' && !C.team.some(function(m){return m.dept===k;})) return;
      var b = document.createElement('button'); b.type='button'; b.className='filter'; b.dataset.dept=k;
      b.setAttribute('aria-pressed', k==='all'); b.innerHTML = bi(DEPTS[k][0], DEPTS[k][1]); fbar.appendChild(b);
    });
    C.team.forEach(function(m){
      var el = document.createElement('div'); el.className='member'; el.dataset.dept = m.dept;
      var av = '<div class="avatar">' + (m.photo ? '<img src="'+esc(m.photo)+'" alt="'+esc(isPh(m.name)?m.role:m.name)+' — Cuber character" loading="lazy">' : '<div class="cube" aria-hidden="true"></div>') + '</div>';
      el.innerHTML = av + '<div class="m-name"></div><div class="m-role">'+esc(m.role)+'</div>';
      if (isPh(m.name)) $('.m-name', el).appendChild(tag(m.name)); else $('.m-name', el).textContent = m.name;
      if (!m.photo) $('.avatar', el).appendChild(tag('[ADD_CUBER_IMAGE]'));
      team.appendChild(el);
    });
    fbar.addEventListener('click', function(e){
      var b = e.target.closest('.filter'); if (!b) return;
      $$('.filter', fbar).forEach(function(x){ x.setAttribute('aria-pressed', x===b); });
      $$('.member', team).forEach(function(m){
        var on = b.dataset.dept==='all' || m.dataset.dept===b.dataset.dept;
        m.classList.toggle('out', !on);
        if (on && !reduce && m.animate) m.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}], {duration:350, easing:'cubic-bezier(.2,.7,.2,1)'});
      });
    });
  }

  /* ── CONTACT · form ───────────────────────────────── */
  var cform = $('#contactForm');
  if (cform) {
    var cerr = $('#cErr'), cf = cform.elements;
    cform.addEventListener('submit', function(e){
      e.preventDefault();
      var reason = ($('input[name=reason]:checked', cform)||{}).value || 'General';
      if (!cf.fullname.value.trim() || !(/\S+@\S+\.\S+/.test(cf.cemail.value) || cf.mobile.value.replace(/\D/g,'').length>=8) || !cf.message.value.trim()) {
        cerr.innerHTML = bi('Add your name, an email or mobile number, and a message.','أضف اسمك وبريدًا أو رقم موبايل ورسالة.'); return;
      }
      cerr.textContent = '';
      var d = { reason:reason, name:cf.fullname.value.trim(), company:cf.company.value.trim(), email:cf.cemail.value.trim(), mobile:cf.mobile.value.trim(), message:cf.message.value.trim(), language:lang(), submittedAt:new Date().toISOString() };
      var text = 'Message — Idntik website ('+d.reason+')\n\n'+d.message+'\n\nName: '+d.name+(d.company?'\nCompany: '+d.company:'')+'\nEmail: '+(d.email||'—')+'\nMobile: '+(d.mobile||'—');
      deliver('contact', d, text, function(ok){
        $('#cFields').hidden = true; var box = $('#cDone'); box.classList.add('on');
        $('#cDoneMsg').innerHTML = ok ? bi('Thanks. We reply within one working day.','شكرًا. نرد خلال يوم عمل واحد.') : bi('One last tap: send it to us on WhatsApp.','خطوة أخيرة: أرسلها لنا عبر واتساب.');
        if (!ok) handoff(box, text);
      });
    });
  }

  /* ── CAREERS · roles ──────────────────────────────── */
  var jobs = $('#jobs');
  if (jobs) {
    if (!C.jobs.length) { $('#jobsWrap').hidden = true; }
    C.jobs.forEach(function(j){
      var el = document.createElement('article'); el.className = 'job';
      var url = j.applyUrl || '';
      el.innerHTML = '<div><h3>'+bi(esc(j.title), esc(j.titleAr||j.title))+'</h3><div class="meta"><span>'+esc(j.type)+'</span><span>'+esc(j.place)+'</span></div></div>'
        + '<p>'+bi(esc(j.desc), esc(j.descAr||j.desc))+'</p>'
        + '<a class="btn btn-primary btn-sm" href="'+(url?esc(url):'#apply')+'"'+(url?' target="_blank" rel="noopener"':'')+'>'+bi('Apply now','قدّم الآن')+' <span class="arrow">→</span></a>';
      jobs.appendChild(el);
    });
  }

  /* ── language ─────────────────────────────────────── */
  var langBtn = $('#langBtn');
  function setLang(l){
    app.className = 'lang-' + l;
    document.documentElement.lang = l; document.documentElement.dir = l==='ar' ? 'rtl' : 'ltr';
    langBtn.textContent = l==='ar' ? 'EN' : 'عربي';
    if (form && form._fail) form._fail();
    try { localStorage.setItem('idntik-lang', l); } catch(e){}
  }
  langBtn.addEventListener('click', function(){ setLang(lang()==='ar' ? 'en' : 'ar'); });
  var saved = null; try { saved = localStorage.getItem('idntik-lang'); } catch(e){}
  setLang(saved==='ar' ? 'ar' : 'en');

  /* ── scroll reveal: only elements below the first screen, with a safety net ── */
  if (!reduce && 'IntersectionObserver' in window) {
    var targets = $$('[data-rv], [data-rv-kids] > *').filter(function(el){ return !el.closest('#jobs'); });
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin:'0px 0px -8% 0px' });
    var vh = window.innerHeight;
    targets.forEach(function(el){
      if (el.getBoundingClientRect().top < vh * .92) return;
      var p = el.parentElement;
      if (p && p.hasAttribute('data-rv-kids')) el.style.transitionDelay = (Array.prototype.indexOf.call(p.children, el) % 6) * 70 + 'ms';
      el.classList.add('rv'); io.observe(el);
    });
    setTimeout(function(){ $$('.rv').forEach(function(el){ el.classList.add('in'); }); }, 6000);
  }

  /* count-up on numbers marked data-count */
  if (!reduce && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (!e.isIntersecting) return; co.unobserve(e.target);
        var el = e.target, end = +el.dataset.count, t0 = performance.now();
        (function tick(t){ var k = Math.min(1,(t-t0)/900); el.textContent = Math.round(end*(1-Math.pow(1-k,3))); if (k<1) requestAnimationFrame(tick); })(t0);
      });
    }, { threshold:.6 });
    $$('[data-count]').forEach(function(el){ co.observe(el); });
  }
  /* ═══ Motion set ═══════════════════════════════════════════ */
  var store = { get:function(k){ try { return sessionStorage.getItem(k); } catch(e){ return null; } }, set:function(k,v){ try { sessionStorage.setItem(k,v); } catch(e){} } };
  function onView(el, fn, th){
    if (!el) return;
    if (reduce || !('IntersectionObserver' in window)) { fn(); return; }
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ fn(); io.unobserve(e.target); } }); }, { threshold: th || .35 });
    io.observe(el);
  }

  /* 1 · header logo: wordmark fades, red dots drop — once per visit */
  var hl = $('.topbar .logo-svg');
  if (hl && !reduce && !store.get('idntik-intro')) {
    store.set('idntik-intro','1');
    hl.classList.add('intro');
  }

  /* 2 · page transition: one red sweep between pages */
  var sweep = document.createElement('div'); sweep.className = 'sweep'; sweep.setAttribute('aria-hidden','true'); document.body.appendChild(sweep);
  if (!reduce && store.get('idntik-sweep')) {
    store.set('idntik-sweep','');
    sweep.classList.add('full');
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ sweep.classList.remove('full'); sweep.classList.add('leave'); setTimeout(function(){ sweep.className = 'sweep'; }, 420); }); });
  }
  if (!reduce) document.addEventListener('click', function(e){
    var a = e.target.closest('a[href]'); if (!a) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank' || a.hasAttribute('download')) return;
    var url; try { url = new URL(a.getAttribute('href'), location.href); } catch(err){ return; }
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname) return;            // same page (anchors) — no sweep
    e.preventDefault();
    store.set('idntik-sweep','1');
    sweep.className = 'sweep enter';
    setTimeout(function(){ location.href = url.href; }, 360);
  });
  window.addEventListener('pageshow', function(e){ if (e.persisted) sweep.className = 'sweep'; });

  /* 4 · manifesto: second word strikes itself in view */
  $$('#pairs .pair').forEach(function(row, i){ onView(row, function(){ setTimeout(function(){ row.classList.add('struck'); }, (i % 3) * 120); }, .6); });

  /* 5 · section labels: red dash draws in */
  $$('.label, .sd-kicker').forEach(function(l){ l.classList.add('dash'); onView(l, function(){ l.classList.add('drawn'); }, .8); });

  /* 6 · footer logo: dots drop when the footer arrives */
  var fl = $('.f-big .logo-svg');
  if (fl && !reduce) { fl.classList.add('await'); onView(fl, function(){ fl.classList.remove('await'); fl.classList.add('intro-dots'); }, .6); }

  /* 8 · client logos: one by one */
  var lg = $('#logos');
  if (lg && !reduce) {
    $$('.logo', lg).forEach(function(d, i){ d.style.transitionDelay = (i * 45) + 'ms'; });
    lg.classList.add('stagger');
    onView(lg, function(){ lg.classList.add('in'); setTimeout(function(){ $$('.logo', lg).forEach(function(d){ d.style.transitionDelay = ''; }); }, 2000); }, .15);
  }

  /* 9 · careers: role rows slide in */
  var jl = $('#jobs');
  if (jl && !reduce) {
    jl.removeAttribute('data-rv-kids');
    $$('.job', jl).forEach(function(r, i){ r.style.transitionDelay = (i * 140) + 'ms'; });
    jl.classList.add('slide');
    onView(jl, function(){ jl.classList.add('in'); }, .2);
  }
})();
