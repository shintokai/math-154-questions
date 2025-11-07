
function toggleMenu(){ document.getElementById('sidebar').classList.toggle('open'); }
document.addEventListener('keydown', (e)=>{ if(e.key==='m') toggleMenu(); });
