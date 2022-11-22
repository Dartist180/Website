function fensterOeffnen() { 
    window.open('https://copa-de-dartist.jimdofree.com/online-shop/ticket-shop/');
}



function fensterOeffnenBlade6() { 
    window.open('https://www.amazon.de/WINMAU-Professional-Bristle-Klassische-Dartboard/dp/B09HR1SV6C?keywords=winmau%2Bblade%2B6&qid=1649800308&sprefix=Winmau%2Caps%2C109&sr=8-11&th=1&linkCode=ll1&tag=dartist180-21&linkId=7cd924808833a8fd6e77511ad4e70e58&language=de_DE&ref_=as_li_ss_tl');
}

function fensterOeffnenDarts() { 
    window.open('https://www.amazon.de/Red-Dragon-Pegasus-Tungsten-DARTPFEILE/dp/B00H1Q5JGG?dchild=1&keywords=red%2Bdragon%2Bdarts&qid=1634486242&qsid=259-0521172-8993953&s=sports&sr=1-5&sres=B005ZSSNXS%2CB00I3HN8SI%2CB00I41DP18%2CB07B3XSHWN%2CB00H1Q5KLU%2CB005A3RYCY%2CB01N2124U7%2CB00HVY5T90%2CB01MT7O80H%2CB08RJ5BRHC%2CB00UTVL5TA%2CB07NGTC495%2CB07MPBMYSR%2CB079FZ9DP9%2CB079T62SL4%2CB08JXHC6HY%2CB01CSVZDKK%2CB00WMVJJDE%2CB079RJDW47%2CB078YTB3BC&th=1&linkCode=ll1&tag=dartist180-21&linkId=1a18dd84c58398f416e7bef621227e30&language=de_DE&ref_=as_li_ss_tl');
}

function fensterOeffnenWaschmaschine() { 
    window.open('https://www.amazon.de/dp/B08HL6KT8F?psc=1&pd_rd_w=HktKG&content-id=amzn1.sym.289b45a0-8ca0-4af2-9c85-5b0e57eb93c5&pf_rd_p=289b45a0-8ca0-4af2-9c85-5b0e57eb93c5&pf_rd_r=MG89F2H1T3Z23KTV91VH&pd_rd_wg=gwFoE&pd_rd_r=edf71d29-251e-4a83-a1ed-c4b2f733215e&s=appliances&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&linkCode=ll1&tag=dartist180-21&linkId=cec96a7b09ecf0841e31fda1038e4299&language=de_DE&ref_=as_li_ss_tl');
}

function fensterOeffnenCart() { 
    window.open('https://copa-de-dartist.jimdofree.com/j/checkout');
}

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

