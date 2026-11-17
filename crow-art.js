'use strict';
// User-drawn images keep their shared 1600 × 1200 registration.
const crowArt=document.createElement('span');crowArt.className='crow-art';crowArt.setAttribute('aria-hidden','true');$('#crow').prepend(crowArt);
let talkingTimer,flightTimer,talkingInterval;
const crowSayBeforeArt=crowSay;crowSay=function(message){crowSayBeforeArt(message);if(state.crowBurned&&!state.crowRevived)return;clearTimeout(talkingTimer);clearInterval(talkingInterval);let open=true;crowArt.classList.add('talking');talkingInterval=setInterval(()=>{open=!open;crowArt.classList.toggle('talking',open)},320);talkingTimer=setTimeout(()=>{clearInterval(talkingInterval);crowArt.classList.remove('talking')},3200)};
const moveCrowBeforeArt=moveCrow;moveCrow=function(){const count=crowCount;moveCrowBeforeArt();if(crowCount===count)return;crowArt.classList.add('flying');clearTimeout(flightTimer);flightTimer=setTimeout(()=>crowArt.classList.remove('flying'),crowCount%3===0?3000:800)};
const originalWireGuests=wireGuests;wireGuests=function(){originalWireGuests();const bird=$('#partyBird');if(bird&&partyCrow){const face=bird.querySelector('span');face.textContent='';face.classList.add('guest-crow-art');const click=bird.onclick;bird.onclick=()=>{click();if(!partyCrow)face.classList.remove('guest-crow-art')}}};
const oldPartySay=partySay;partySay=function(message){oldPartySay(message);const face=party.querySelector('#partyBird .guest-crow-art');if(face&&partyCrow&&message.includes('乌鸦')){face.classList.add('talking');setTimeout(()=>face.isConnected&&face.classList.remove('talking'),1100)}};
const oldRenderCell=renderCell;renderCell=function(){oldRenderCell();const bird=$('#prisonCrow');if(bird){bird.textContent='';bird.classList.add('window-crow-art')}};
// Hat accompanies the existing feather outfit, which can still be removed normally.
const crowCursorHat=document.createElement('span');crowCursorHat.className='crow-cursor-hat';crowCursorHat.setAttribute('aria-hidden','true');garb.append(crowCursorHat);
