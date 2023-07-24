function myFunc() {
    
    const btn3 = document.getElementById('btn3');
    const mask = document.getElementById('mask');
    const modal = document.getElementById('modal');
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');

    mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
    });

    
}