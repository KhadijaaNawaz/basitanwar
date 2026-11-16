// Exports the engineers clip to still frames for the scroll-scrubbed services scene
// (components/services/VideoJourney.js). Plays the video in headless Chrome and
// grabs frames with requestVideoFrameCallback (seeking was unreliable).
//
//   npm i --no-save puppeteer-core     # + a local Chrome at /usr/bin/google-chrome
//   npm run dev                         # serves /vedios/*.mp4 on :5173
//   node tools/extract-frames.mjs 90 720 0.78 public/frames/trades
//   (args: frames, width px, webp quality, output dir)
// Then set FRAMES in VideoJourney.js to the number of files written.
import puppeteer from 'puppeteer-core'
import fs from 'fs'
const N=+process.argv[2]||90, W=+process.argv[3]||720, Q=+process.argv[4]||0.78, OUT=process.argv[5]||'frames'
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:'new',args:['--no-sandbox','--autoplay-policy=no-user-gesture-required']})
const p=await b.newPage()
await p.goto('http://localhost:5173/',{waitUntil:'domcontentloaded',timeout:120000})
const res=await p.evaluate(async(N,W,Q)=>{
  const blob=await (await fetch('/vedios/Engineers_working_on_home_trades_94706f3f_1080p.mp4')).blob()
  const v=document.createElement('video');v.muted=true;v.playsInline=true;v.src=URL.createObjectURL(blob)
  await new Promise(r=>v.onloadeddata=r)
  const d=v.duration,H=Math.round(W*v.videoHeight/v.videoWidth)
  const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d')
  const out=[];let k=0;const T=i=>(d-0.05)*i/(N-1)
  await new Promise(done=>{
    const cb=(now,meta)=>{
      while(k<N && meta.mediaTime>=T(k)-0.001){ x.drawImage(v,0,0,W,H); out.push({t:+meta.mediaTime.toFixed(2),d:c.toDataURL('image/webp',Q)}); k++ }
      if(k>=N||v.ended) done(); else v.requestVideoFrameCallback(cb)}
    v.requestVideoFrameCallback(cb);v.onended=done;v.play()})
  return {d,out}},N,W,Q)
console.log('duration',res.d,'captured',res.out.length,'times',res.out.filter((_,i)=>i%15==0).map(o=>o.t).join(','))
fs.mkdirSync(OUT,{recursive:true})
res.out.forEach((o,i)=>fs.writeFileSync(`${OUT}/f_${String(i+1).padStart(3,'0')}.webp`,Buffer.from(o.d.split(',')[1],'base64')))
await b.close()
