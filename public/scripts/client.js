const dateNow = Date.now();
let dateNowLeave;
let timeOnPage;
// Validar con expresiones regulares las palabras soeces.
const regex = /\b(bug(ger)?|cunt|(god)?damn(it)?|bastards?|shit(ty)?|ass(es|holes?)?|dick|bitch(es)?|suck(ers?)?|fuck(er|ing)?s?u?|chup(ona?|ones)?a?s?|penes?(otes?)?|vagina?s?(otas?|itas?)?|(so|re|recontra|gran)?put(o|a|e)?s?|pendej(o|a)?s?|pipis?|cagad(a|o|er(o|a)?)?s?|asqueros(o|a)?s?|vomitiv(a|o)?s?|mugros(a|o)?s?|maldit(a|o)?s?|diarre(os(a|o)|a|s)?s?|inmund(a|o)s?|(q|cu)?l(ead(a|o))o?s?|verg(a|o)(nes|nas)?s?|mierda|h(ijue)?pu?(ta)?s?|perr(a|o)?s?|malparid(a|o)?s?|gono(rrea)?s?|malna(s|c)id(a|o)s?|mari(k|c)o?n?(es)?a?s?|(gu|hu)?e(v|b)on(es)?a?|(k|ca)bron(es)?a?s?|tarad(o|a)s?|(c|k)ancer((i|í)gen(a|o))s?|(a|re)t(rasad(a|o)|ardad(o|a))s?|in(u|ú)til(es)?|m(o|ó)ngol(a|o)s?|jodid(a|o)s?|burd(a|o)s?|e?st(u|ú)pid(a|o)?s?|insuls(o|a)s?|putrefact(a|o)s?|chupapo(ll|y)as?|po(ll|y)as?|sopla(hu|gu)evos?|(hu|gu)ele(q|cu)los?|cerd(o|a)?(ote)?s?|nau(s|c)ea(bund(o|a))?s?|(v|b)erduler(o|a)s?|(z|s)afias?|lel(o|a)s?|ruin(es)?|rastrer(o|a)s?|des?cerebrad(a|o)s?|(so|zo)penc(a|o)s?|(c|k)retin(a|o)s?|engre(i|í)d(a|o)s?|ramer(a|o)s?|granulent(o|a)s?|infeli(c|z|s)?e?(z|s)?|calamitos(o|a)s?|profan(o|a)s?|encamad(a|o)s?|(ji|gi)lipo(y|ll)(as|esca)|(c|k)o(j|g)on(a|es)?|pelotud(a|o)s?|calienta(hu|gu)e(b|v)os?|petard(a|o)s?|escupepitos?|necrof(i|í)lic?(a|o)s?|(k|c)oños?|(q|cu)lorot(a|o)s?|nalgas?|(z|s)o(q|k)u?etes?|masturba(r|d)o?r?(a|e)?s?|ojetes?|paj(u|ú)d??a?s?|(c|k)a?ra\s?de\s?(k|c)onchas?|a?mam(a|á)(gu|hu)e(v|b)os?)\b/gi;

async function getDatabase(){
  const response = await fetch('/api');
  const data = await response.json();
  const divElement = document.getElementById("namesAndScores");

  for(item of data){
    const createUser = document.createElement('span');
    createUser.classList.add("userPlusScore");
    const createScore = document.createElement('span');
    createUser.innerText = item.name + " ";
    createScore.innerText = "(" + item.score + ")";
    createUser.append(createScore);
    divElement.append(createUser);
   } 
}

getDatabase().catch(error => {
  console.error(error);
});