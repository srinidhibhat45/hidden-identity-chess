const button=document.querySelector('#repair'),status=document.querySelector('#status'),open=document.querySelector('#open');
button.addEventListener('click',async()=>{
 button.disabled=true;status.textContent='Downloading the updated game. Keep this page open for a moment.';
 try{
  if(!('serviceWorker' in navigator))throw Error('unsupported');
  const registration=await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('timeout')),30000);navigator.serviceWorker.register('/game/sw.js',{scope:'/game/',updateViaCache:'none'}).then(value=>{clearTimeout(timer);resolve(value);},error=>{clearTimeout(timer);reject(error);});});
  const worker=registration.installing||registration.waiting||registration.active;
  await new Promise((resolve,reject)=>{
   if(!worker)return reject(Error('unavailable'));
   if(worker.state==='activated')return resolve();
   const timeout=setTimeout(()=>{worker.removeEventListener('statechange',changed);reject(Error('timeout'));},30000);
   function changed(){if(['activated','redundant'].includes(worker.state)){clearTimeout(timeout);worker.removeEventListener('statechange',changed);worker.state==='activated'?resolve():reject(Error('interrupted'));}}
   worker.addEventListener('statechange',changed);changed();
  });
  status.textContent='Your offline files are refreshed. Open the game, then try your home-screen shortcut again.';button.hidden=true;open.hidden=false;
 }catch{status.textContent='The download did not finish. Check your connection, then try again. Your saved games have not been changed.';button.disabled=false;button.textContent='Try again';}
});
