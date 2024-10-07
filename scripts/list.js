const showView = (view)=>{
    const divs = document.querySelectorAll('.view');
    divs.forEach(div => {
        div.style.display = 'none';

    });
    const btns = document.querySelectorAll('.view-btn');
    btns.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-text');

    });
    const selectedDiv = document.getElementById(view);
    if (selectedDiv) {
        selectedDiv.style.display = view == 'map-view' ? "block" : "flex";
        document.getElementById(view+'-btn').classList.add('btn-primary','text-black')
    }
}