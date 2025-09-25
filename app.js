const Z = document.getElementById('z');
const B = document.getElementById('b');
const I = document.getElementById('i');
const codeEl = document.getElementById('code');
const scoreEl = document.getElementById('score');
const tierEl = document.getElementById('tier');
const zv = document.getElementById('zv');
const bv = document.getElementById('bv');
const iv = document.getElementById('iv');

const TIERS = [
  { range:[0,2], title:"Ideal Wife Material", class:"green", details:["Very modest dress / respectful","Family‑oriented","Low conflict risk"]},
  { range:[3,5], title:"Good Wife Material (with conditions)", class:"yellow", details:["Decent/modest dress","Normal behavior","Compatibility depends"]},
  { range:[6,7], title:"Maybe / Casual Only", class:"orange", details:["More liberal","Possible lifestyle clashes"]},
  { range:[8,10], title:"Not Wife Material", class:"red", details:["Extreme dress / vulgar","High conflict risk"]}
];

function update() {
  const z = parseInt(Z.value);
  const b = parseInt(B.value);
  const i = parseInt(I.value);
  const total = z + b + i;

  codeEl.textContent = `Z${z}-B${b}-I${i}`;
  scoreEl.textContent = total;
  zv.textContent = z; bv.textContent = b; iv.textContent = i;

  const tier = TIERS.find(t => total >= t.range[0] && total <= t.range[1]);
  if (tier) {
    tierEl.style.display = 'block';
    tierEl.className = `tier ${tier.class}`;
    tierEl.innerHTML = `<h3 style="margin:0 0 6px">${tier.title}</h3>
      <ul style="margin:.25rem 0 0; padding-left:1.25rem">${tier.details.map(d=>`<li>${d}</li>`).join('')}</ul>`;
  } else {
    tierEl.style.display = 'none';
  }
}

function resetForm(){
  Z.value = 1; B.value = 1; I.value = 1;
  update();
  window.scrollTo({top:0, behavior:'smooth'});
}

Z.addEventListener('change', update);
B.addEventListener('change', update);
I.addEventListener('change', update);
update();

// Make resetForm available for onclick in HTML
window.resetForm = resetForm;
