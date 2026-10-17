export const TYPES=['K','Q','R','R','B','B','N','N',...Array(8).fill('P')];
export const NAMES={K:'King',Q:'Queen',R:'Rook',B:'Bishop',N:'Knight',P:'Pawn'};
export const opposite=c=>c==='white'?'black':'white';
export const coord=p=>'abcdefgh'[p%8]+(8-Math.floor(p/8));
const row=p=>Math.floor(p/8), col=p=>p%8;
export function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function newGame(variant=false){return {version:2,strikes:{white:0,black:0},audit:{},events:[],penalty:null,pendingWinner:null,phase:'setup',turn:'white',variant,ready:{white:false,black:false},pieces:['black','white'].flatMap(color=>shuffle(TYPES).map((type,i)=>({id:color[0]+i,color,type,pos:(color==='white'?48:0)+i,moved:false}))),captured:[],history:[],winner:null,last:null};}
export function arrange(g,color,layout){if(g.phase!=='setup'||g.ready[color])throw Error('Your army is already locked in.');const ps=g.pieces.filter(p=>p.color===color);const base=color==='white'?48:0;if(!Array.isArray(layout)||layout.length!==16||new Set(layout).size!==16||layout.some(id=>!ps.some(p=>p.id===id)))throw Error('Arrange all 16 pieces in your home two rows.');layout.forEach((id,i)=>{g.pieces.find(p=>p.id===id).pos=base+i;});return g;}
export function randomize(g,color){const p=g.pieces.filter(p=>p.color===color);return arrange(g,color,shuffle(p.map(p=>p.id)));}
export function classic(g,color){const order=['R','N','B','Q','K','B','N','R'];const ps=g.pieces.filter(p=>p.color===color);const used=new Set();const ids=(color==='white'?[...Array(8).fill('P'),...order]:[...order,...Array(8).fill('P')]).map(t=>{const p=ps.find(p=>p.type===t&&!used.has(p.id));used.add(p.id);return p.id;});return arrange(g,color,ids);}
export function lock(g,color){if(g.phase!=='setup')throw Error('The game has already started.');g.ready[color]=true;if(g.ready.white&&g.ready.black)g.phase='playing';return g;}
export function movesFor(g,id){const p=g.pieces.find(p=>p.id===id);if(!p||g.phase!=='playing')return [];const out=[];const at=n=>g.pieces.find(x=>x.pos===n);const add=(to,extra={})=>{if(to<0||to>63)return;const t=at(to);if(!t||t.color!==p.color)out.push({from:p.pos,to,id,...extra});};const ray=(dr,dc)=>{let r=row(p.pos)+dr,c=col(p.pos)+dc;while(r>=0&&r<8&&c>=0&&c<8){const n=r*8+c,t=at(n);add(n);if(t)break;r+=dr;c+=dc;}};
if(p.type==='P'){const d=p.color==='white'?-1:1,r=row(p.pos),c=col(p.pos),next=p.pos+d*8;if(next>=0&&next<64&&!at(next)){add(next);if((p.color==='white'?r>=6:r<=1)&&!at(next+d*8))add(next+d*8,{double:true});}for(const dc of [-1,1]){if(c+dc<0||c+dc>7)continue;const to=next+dc,t=at(to);if(t&&t.color!==p.color)add(to);if(!t&&g.last&&g.last.color!==p.color&&Math.abs(g.last.to-g.last.from)===16&&col(g.last.to)===c+dc&&row(g.last.to)===r&&at(g.last.to))add(to,{ep:g.last.id});}}
if(p.type==='N')for(const [dr,dc] of [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]){const r=row(p.pos)+dr,c=col(p.pos)+dc;if(r>=0&&r<8&&c>=0&&c<8)add(r*8+c);}
if(['R','Q'].includes(p.type))for(const [dr,dc]of [[1,0],[-1,0],[0,1],[0,-1]])ray(dr,dc);
if(['B','Q'].includes(p.type))for(const [dr,dc]of [[1,1],[1,-1],[-1,1],[-1,-1]])ray(dr,dc);
if(p.type==='K'){for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){if(!dr&&!dc)continue;const r=row(p.pos)+dr,c=col(p.pos)+dc;if(r>=0&&r<8&&c>=0&&c<8)add(r*8+c);}if(!p.moved){for(const rook of g.pieces.filter(x=>x.color===p.color&&x.type==='R'&&!x.moved&&row(x.pos)===row(p.pos))){const dir=Math.sign(rook.pos-p.pos),distance=Math.abs(rook.pos-p.pos);let clear=true;for(let n=p.pos+dir;n!==rook.pos;n+=dir)if(at(n))clear=false;if(clear)out.push({id,from:p.pos,to:p.pos+dir*Math.min(2,distance),castle:rook.id,rookTo:p.pos+dir*(distance===1?0:1)});}}}
return out;
}
export function allMoves(g,color){return g.pieces.filter(p=>p.color===color).flatMap(p=>movesFor(g,p.id));}
export function applyMove(g,action,color=g.turn){ensureChallengeState(g);if(g.phase!=='playing'||g.turn!==color)throw Error('Wait for your turn.');const p=g.pieces.find(p=>p.id===action.id&&p.color===color);if(!p)throw Error('Choose one of your pieces.');const legal=movesFor(g,p.id).find(m=>m.to===action.to&&(action.castle?m.castle===action.castle:!m.castle));if(!Number.isInteger(action.to)||action.to<0||action.to>63||action.to===p.pos)throw Error('Choose a different square on the board.');if(!legal&&(!action.bluff||action.castle))throw Error('That move is not allowed for this piece. Use Bluff move to risk a challenge.');if(!legal&&g.pieces.some(x=>x.pos===action.to&&x.color===color))throw Error('You cannot land on your own piece.');const m=legal||{id:p.id,from:p.pos,to:action.to};if(action.promotion&&!['Q','R','B','N'].includes(action.promotion))throw Error('Choose a queen, rook, bishop, or knight.');const from=p.pos;const proof={id:p.id,color,wasLegal:!!legal,type:p.type,capturedKing:null};let captured=null,failed=false;const remove=x=>{g.pieces=g.pieces.filter(y=>y.id!==x.id);g.captured.push({...x});captured=x.type;if(x.type==='K'){proof.capturedKing={...x};g.pendingWinner=color;g.phase='review';}};
if(m.castle){const rook=g.pieces.find(x=>x.id===m.castle);rook.pos=m.rookTo;rook.moved=true;}
else if(m.ep){const target=g.pieces.find(x=>x.id===m.ep);if(target.type==='P')remove(target);else{g.pieces=g.pieces.filter(x=>x.id!==p.id);g.captured.push({...p});failed=true;}}
else{const target=g.pieces.find(x=>x.pos===m.to);if(target)remove(target);}
p.pos=m.to;p.moved=true;let promotion=null;if(!failed&&p.type==='P'&&(row(p.pos)===0||row(p.pos)===7)){promotion=action.promotion||'Q';p.type=promotion;}
g.last={id:p.id,from,to:m.to,color};g.audit[g.history.length]=proof;g.history.push({id:p.id,auditable:true,color,from,to:m.to,captured,failed,castle:!!m.castle,promotion});g.turn=opposite(color);return g;}
export function viewFor(g,color){ensureChallengeState(g);const v=structuredClone(g);delete v.audit;v.pieces=v.pieces.filter(p=>g.phase!=='setup'||p.color===color||g.ready[p.color]).map(p=>({...p,type:p.color===color||(g.variant&&p.type==='K')||g.phase==='finished'?p.type:'?'}));v.legal=g.phase==='playing'&&g.turn===color?allMoves(g,color):[];return v;}
export function chooseComputerMove(g,color,level='club'){// Only own identities, public coordinates, and revealed kings inform the policy.
const view=viewFor(g,color),moves=allMoves(view,color);if(!moves.length)return null;const enemy=view.pieces.filter(p=>p.color!==color),ownKing=view.pieces.find(p=>p.color===color&&p.type==='K');const own=view.pieces.filter(p=>p.color===color);const value={K:20,Q:9,R:5,B:3,N:3,P:1};const score=m=>{const p=own.find(p=>p.id===m.id),target=enemy.find(p=>p.pos===m.to);let s=Math.random()*(level==='easy'?12:level==='club'?3:1);if(target)s+=target.type==='K'?100:5;if(p.type==='P')s+=(color==='white'?7-row(m.to):row(m.to))*.35;if(m.to>=24&&m.to<40)s+=.5;if(m.castle)s+=.4;if(m.ep)s-=.4;if(level!=='easy'){// Penalize exposure using observed positions, never an opponent identity.
const r=row(m.to),c=col(m.to);const near=enemy.reduce((n,e)=>n+(Math.max(Math.abs(row(e.pos)-r),Math.abs(col(e.pos)-c))===1?1:0),0);s-=near*(p.type==='K'?4:value[p.type]*.15);if(ownKing&&p.type!=='K'&&Math.max(Math.abs(row(m.to)-row(ownKing.pos)),Math.abs(col(m.to)-col(ownKing.pos)))<=1)s+=.3;}return s;};return moves.map(m=>({m,s:score(m)})).sort((a,b)=>b.s-a.s)[0].m;}

function ensureChallengeState(g){g.strikes??={white:0,black:0};g.audit??={};g.events??=[];g.penalty??=null;g.pendingWinner??=null;}
function finish(g,winner,reason){g.phase='finished';g.winner=winner;g.reason=reason;g.penalty=null;g.pendingWinner=null;}
function removeAsPenalty(g,p){g.pieces=g.pieces.filter(x=>x.id!==p.id);g.captured.push({...p,penalty:true});}
export function challengeMove(g,index,color=g.turn){
ensureChallengeState(g);
if(!['playing','review'].includes(g.phase)||g.turn!==color)throw Error('Challenge an opponent move on your turn.');
if(!Number.isInteger(index))throw Error('Choose a move from the move list.');
const h=g.history[index],proof=g.audit[index];
if(!h||h.color===color)throw Error('Choose an opponent move to challenge.');
if(!proof)throw Error('Moves made before this update cannot be challenged.');
if(h.challenge)throw Error('That move has already been checked.');
h.challenge=proof.wasLegal?'legal':'illegal';
g.events.push({kind:'challenge',index,by:color,result:h.challenge});
if(proof.wasLegal)return g;
g.strikes[proof.color]++;
const resumePhase=g.phase;const offender=g.pieces.find(p=>p.id===proof.id);
if(offender)removeAsPenalty(g,offender);
// An invalid king capture cannot decide the game. Restore that king after removing the offender.
let restored=false;
if(proof.capturedKing&&index===g.history.length-1&&g.pendingWinner===proof.color){
 const king=proof.capturedKing;g.captured=g.captured.filter(p=>p.id!==king.id);g.pieces.push({...king,pos:h.to});g.pendingWinner=null;restored=true;
}
if(offender?.type==='K'){finish(g,color,'illegal-king');return g;}
if(g.variant||g.strikes[proof.color]>=2){finish(g,color,g.variant?'revealed-king-offence':'second-offence');return g;}
const remaining=Math.min(offender?1:2,g.pieces.filter(p=>p.color===proof.color).length);
if(!remaining){finish(g,color,'illegal-move');return g;}
g.phase='penalty';g.penalty={by:color,offender:proof.color,remaining,total:remaining,resumePhase:restored?'playing':resumePhase,resumeTurn:color};
return g;
}
export function selectPenalty(g,id,color=g.turn){ensureChallengeState(g);const penalty=g.penalty;if(g.phase!=='penalty'||!penalty||penalty.by!==color||g.turn!==color)throw Error('There is no penalty for you to choose.');const p=g.pieces.find(p=>p.id===id&&p.color===penalty.offender);if(!p)throw Error('Choose one of the offending player’s remaining pieces.');removeAsPenalty(g,p);g.events.push({kind:'penalty',by:color,id:p.id,type:p.type,color:p.color});if(p.type==='K'){finish(g,color,'penalty-king');return g;}penalty.remaining--;if(penalty.remaining===0){g.phase=penalty.resumePhase;g.turn=penalty.resumeTurn;g.penalty=null;}return g;}
export function acceptKingCapture(g,color=g.turn){if(g.phase!=='review'||g.turn!==color||!g.pendingWinner)throw Error('There is no king capture to confirm.');finish(g,g.pendingWinner,'king-capture');return g;}
function plausibleTypes(h){const dr=row(h.to)-row(h.from),dc=col(h.to)-col(h.from),r=Math.abs(dr),c=Math.abs(dc),straight=(!r||!c),diagonal=r===c;return ['K','Q','R','B','N','P'].filter(t=>t==='K'?(h.castle||Math.max(r,c)===1):t==='Q'?(straight||diagonal):t==='R'?straight:t==='B'?diagonal:t==='N'?r*c===2:(dr===(h.color==='white'?-1:1)&&(h.captured?c===1:c===0))||(c===0&&dr===(h.color==='white'?-2:2)&&(h.color==='white'?row(h.from)>=6:row(h.from)<=1)));}
export function chooseComputerChallenge(g,color,level='club'){
// Only public move geometry and revealed captured identities enter suspicion. Never read g.audit.
const v=viewFor(g,color);if(!['playing','review'].includes(v.phase)||v.turn!==color)return null;
const candidates=v.history.map((h,index)=>({h,index})).filter(({h})=>h.color!==color&&h.auditable&&!h.challenge);
for(const candidate of [...candidates].reverse()){
 const prior=v.history.slice(0,candidate.index+1).filter(h=>h.id===candidate.h.id);let possible=['K','Q','R','B','N','P'];
 for(const h of prior){const shapes=plausibleTypes(h);possible=possible.filter(t=>shapes.includes(t));if(h.promotion)possible=[h.promotion];}
 const known=v.captured.find(p=>p.id===candidate.h.id);
 if(!possible.length||(known&&!candidate.h.promotion&&!plausibleTypes(candidate.h).includes(known.type)))return candidate.index;
}
const latest=candidates.at(-1);const chance=level==='easy'?.1:level==='club'?.22:.36;
return latest&&(v.phase==='review'||Math.random()<chance)?latest.index:null;
}
export function chooseComputerAction(g,color,level='club'){
const normal=chooseComputerMove(g,color,level);if(!normal)return null;
const chance=level==='easy'?.025:level==='club'?.05:.08;if(Math.random()>=chance)return normal;
const v=viewFor(g,color),own=v.pieces.filter(p=>p.color===color&&p.type!=='K');const possibilities=own.flatMap(p=>Array.from({length:64},(_,to)=>({id:p.id,from:p.pos,to,bluff:true})).filter(m=>m.to!==p.pos&&!v.pieces.some(x=>x.pos===m.to&&x.color===color)&&!movesFor(v,p.id).some(x=>x.to===m.to)&&plausibleTypes({color,from:p.pos,to:m.to,captured:v.pieces.some(x=>x.pos===m.to)?'?':null}).length));
if(!possibilities.length)return normal;
return possibilities.map(m=>({m,score:Math.random()+((v.pieces.some(p=>p.color!==color&&p.pos===m.to))?2:0)})).sort((a,b)=>b.score-a.score)[0].m;
}
export function chooseComputerPenalty(g,color){const v=viewFor(g,color);if(v.phase!=='penalty'||v.penalty?.by!==color)return null;const enemies=v.pieces.filter(p=>p.color!==color);return enemies.find(p=>p.type==='K')?.id||enemies[Math.floor(Math.random()*enemies.length)]?.id||null;}
