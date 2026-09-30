const trips = [
{id:'T-SUM-2026',tab:'Summer 2026',name:'Montreal · Paris · London · Brussels · Madeira',start:'2026-06-28',end:'2026-08-29',nights:62,dest:'Montreal, Paris, London, Brussels, Madeira',status:'Complete',cash:0,open:0,conf:0,mix:'—',upcoming:false,rows:[{date:'',type:'Note',act:'Tab is empty after the trip completed',cash:0,pts:'',status:'Complete',itin:true}]},
{id:'T-DC-2026',tab:'DC 2026',name:'Washington DC PA Day',start:'2026-11-20',end:'2026-11-22',nights:2,dest:'Washington DC',status:'Confirmed',cash:582,open:8,conf:3,mix:'22,000 Aeroplan · 68,000 CIBC Aventura',upcoming:true,rows:[
{date:'2026-11-20',type:'Flight',act:'AC 8780 YYZ 07:20 → DCA 08:58',cash:582,pts:'22,000 Aeroplan',status:'Confirmed',itin:false},
{date:'2026-11-20',type:'Hotel',act:'Residence Inn Dupont Circle — 2 free night certificates',cash:0,pts:'Marriott certificate',status:'Confirmed',itin:false},
{date:'2026-11-20',type:'Activity',act:'American History + Mall',cash:0,pts:'',status:'Researching',itin:true},
{date:'2026-11-21',type:'Activity',act:'Air and Space / Natural History / White House exterior',cash:0,pts:'',status:'Researching',itin:true},
{date:'2026-11-22',type:'Attraction',act:'International Spy Museum tickets — price lives on this row',cash:0,pts:'',status:'Researching',itin:true},
{date:'2026-11-22',type:'Activity',act:'Spy Museum visit (uses B-DC-04)',cash:0,pts:'',status:'Researching',itin:true},
{date:'2026-11-22',type:'Flight',act:'AC 8539 IAD 17:15 → YTZ 18:45',cash:0,pts:'68,000 CIBC Aventura',status:'Confirmed',itin:false},
{date:'',type:'Activity',act:'Capitol / Supreme Court — undated ideas',cash:0,pts:'',status:'Researching',itin:true}
]},
{id:'T-XMAS-2026',tab:'Xmas 2026',name:'Lisbon · Madeira · Barcelona · Andorra',start:'2026-12-11',end:'2027-01-09',nights:29,dest:'Lisbon, Funchal, Barcelona, Andorra',status:'Confirmed',cash:3544.33,open:34,conf:0,mix:'330,000 Aeroplan · 87,500 Flying Blue · 45,800 TD',upcoming:true,rows:[
{date:'2026-12-11',type:'Flight',act:'YYZ → CDG → LIS (AF)',cash:809,pts:'87,500 Flying Blue',status:'Pending',itin:false},
{date:'2026-12-12',type:'Hotel',act:'Moxy Lisbon · 2 nights',cash:0,pts:'',status:'Researching',itin:true},
{date:'2026-12-14',type:'Flight',act:'LIS → FNC TAP cash',cash:379,pts:'',status:'Pending',itin:false},
{date:'2026-12-15',type:'Work',act:'WFH + free days in Funchal through Dec 30',cash:0,pts:'',status:'Researching',itin:true},
{date:'2026-12-31',type:'Hotel',act:'Quinta Mirabela NYE',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-01-01',type:'Flight',act:'FNC → OPO → LIS → BCN',cash:510,pts:'100,000 Aeroplan',status:'Pending',itin:false},
{date:'2027-01-01',type:'Hotel',act:"Carrer d'Alí Bei, Barcelona · 3 nights",cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-01-02',type:'Attraction',act:'Sagrada Família tickets',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-01-04',type:'Hotel',act:'Pas de la Casa lodging · 4 nights',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-01-04',type:'Car',act:'Centauro Barcelona / Andorra €328',cash:528,pts:'',status:'Researching',itin:false},
{date:'2027-01-05',type:'Attraction',act:'Grandvalira 3-day pass 2 adults + 2 juniors',cash:940,pts:'',status:'Researching',itin:false},
{date:'2027-01-05',type:'Activity',act:'Ski days 1–3 (uses B-XM-11)',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-01-08',type:'Hotel',act:'Barcelona Jan 8 option · Catalonia Diagonal / TD',cash:228.33,pts:'45,800 TD',status:'Researching',itin:false},
{date:'2027-01-09',type:'Flight',act:'BCN → YYZ',cash:150,pts:'230,000 Aeroplan',status:'Pending',itin:false}
]},
{id:'T-CUN-2027',tab:'Cancun 2027',name:'Cancun Family Day',start:'2027-02-12',end:'2027-02-15',nights:3,dest:'Cancun',status:'Confirmed',cash:1828.30,open:6,conf:0,mix:'114,800 Flying Blue · 69,000 Hyatt',upcoming:true,rows:[
{date:'2027-02-12',type:'Flight',act:'YYZ 07:40 → CUN 12:10 award 1',cash:639,pts:'57,400 Flying Blue',status:'Pending',itin:false},
{date:'2027-02-12',type:'Flight',act:'CUN 20:20 → YYZ 00:20 award 2',cash:369,pts:'57,400 Flying Blue',status:'Pending',itin:false},
{date:'2027-02-12',type:'Hotel',act:'Dreams Sapphire · 3 nights',cash:670.80,pts:'69,000 Hyatt',status:'Pending',itin:false},
{date:'2027-02-12',type:'Transfer',act:'Airport transfers',cash:149.50,pts:'',status:'Researching',itin:false},
{date:'2027-02-13',type:'Free',act:'Resort days (uses hotel row)',cash:0,pts:'',status:'Pending',itin:true}
]},
{id:'T-ITA-2027',tab:'Italy 2027',name:'Italy March Break',start:'2027-03-13',end:'2027-03-28',nights:15,dest:'Milan, Venice, Genoa, Rome',status:'Researching',cash:2128,open:17,conf:0,mix:'175,000 Flying Blue',upcoming:true,rows:[
{date:'2027-03-13',type:'Flight',act:'YYZ → MXP working award (2 pax shown)',cash:2128,pts:'175,000 Flying Blue',status:'Researching',itin:false},
{date:'2027-03-14',type:'Hotel',act:'Via Plinio 14, Milan · 8 nights',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-03-16',type:'Hotel',act:'Venice AC Hotel · 2 nights',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-03-19',type:'Activity',act:'Genoa day trip',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-03-22',type:'Hotel',act:'Via Antonio Baiamonti, Rome · 6 nights WFH',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-03-23',type:'Attraction',act:'Vatican / Sistine timed entry',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-03-23',type:'Activity',act:'Vatican day (uses ticket row)',cash:0,pts:'',status:'Researching',itin:true}
]},
{id:'T-SUM-2027',tab:'Summer 2027',name:'London · Madeira',start:'2027-07-29',end:'2027-08-28',nights:30,dest:'London, Brighton, Funchal',status:'Researching',cash:1040,open:30,conf:0,mix:'66,000 Avios · 87,500 Flying Blue',upcoming:true,rows:[
{date:'2027-07-29',type:'Flight',act:'YYZ → CDG → LHR',cash:1020,pts:'87,500 Flying Blue',status:'Researching',itin:false},
{date:'2027-08-03',type:'Activity',act:'Brighton',cash:0,pts:'',status:'Researching',itin:true},
{date:'2027-08-07',type:'Flight',act:'LHR → FNC',cash:20,pts:'66,000 Avios',status:'Researching',itin:false},
{date:'2027-08-16',type:'Activity',act:'Clube Naval block in Funchal',cash:0,pts:'',status:'Researching',itin:true}
]},
{id:'T-XMAS-2027',tab:'Xmas 2027',name:'Christmas 2027',start:'2027-12-21',end:'2028-01-05',nights:15,dest:'TBD',status:'Idea',cash:0,open:0,conf:0,mix:'—',upcoming:true,rows:[
{date:'',type:'Note',act:'Placeholder from Master Plan — no rows on the tab yet',cash:0,pts:'',status:'Idea',itin:true}
]}
];
const money = n => '$' + Number(n||0).toLocaleString('en-CA',{minimumFractionDigits:2,maximumFractionDigits:2});
const list = document.getElementById('list');
list.innerHTML = trips.map((t,i)=>`<article class="trip" data-i="${i}"><div><strong>${t.start} →</strong><div class="note">${t.end} · ${t.nights} nights</div></div><div><div class="tname">${t.name}</div><div class="note">${t.dest} · ${t.tab}${t.upcoming?'':' · not upcoming'}</div></div><div style="text-align:right">${money(t.cash)}<div class="note">${t.open} open</div><span class="badge ${t.status}">${t.status}</span></div></article>`).join('');
function show(i){
  const t = trips[i];
  const el = document.getElementById('detail');
  el.hidden = false;
  el.innerHTML = `<h3 style="font-family:Fraunces,serif;margin:0 0 6px">${t.name}</h3><div class="note">${t.start} → ${t.end} · ${t.dest} · Santiago, Marlene, Andrew, Catharine</div><p>${money(t.cash)} cash_cad · ${t.open} open · ${t.conf} confirmed rows · ${t.mix}</p><table><thead><tr><th>Date</th><th>Type</th><th>Activity</th><th>Points</th><th>Cash CAD</th><th>Status</th></tr></thead><tbody>${t.rows.map(r=>`<tr><td>${r.date||'—'}</td><td>${r.type} ${r.itin?'<span class="it">itinerary</span>':'<span class="pd">paid row</span>'}</td><td>${r.act}</td><td>${r.pts||'—'}</td><td>${r.cash?money(r.cash):'—'}</td><td><span class="badge ${r.status}">${r.status}</span></td></tr>`).join('')}</tbody></table>`;
  el.scrollIntoView({behavior:'smooth'});
}
list.querySelectorAll('.trip').forEach(el=>el.onclick=()=>show(el.dataset.i));
show(1);
