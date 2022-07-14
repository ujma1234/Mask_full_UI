const wrap = document.querySelector('main');
const btns = wrap.querySelectorAll('#navi li');
const panels = wrap.querySelectorAll('section article');

btns.forEach((btn, index)=>{
    btn.addEventListener('click', e=> {
        for(let i=0; i<btns.length; i++) {
            btns[i].classList.remove('on');
            
            if(panels[i].classList.contains('on')) {
                panels[i].classList.add('mask');
            }
        }

        btns[index].classList.add('on');
        panels[index].classList.add('lower');

        setTimeout(()=>{
            for(let j=0; j<panels.length; j++) {
                if(panels[j].classList.contains('on')) {
                    panels[j].classList.remove('on');
                    panels[j].classList.remove('mask');
                }
            }

            panels[index].classList.remove('lower');
            panels[index].classList.add('on');
        },1400);
    })
})

