addEventListener('click', function (e){
    let t = e.target;
    if (t.closest('.tab')){
        document.querySelectorAll('.tab').forEach(i=>{
            i.classList.remove('active')
        })
        t.closest('.tab').classList.add('active');
        let tabName = t.closest('.tab').dataset.tab;
        document.querySelectorAll('.tabs-item').forEach(i=>{
            i.classList.add('none')
        })
        document.getElementById(tabName).classList.remove('none')
    }
})