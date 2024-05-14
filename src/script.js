document.querySelectorAll('.simple-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        // Crear un modal para mostrar la imagen ampliada
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.innerHTML = `<img src="${img.src}" style="width:80%; max-height:90%; margin:auto;">`;
        modal.addEventListener('click', () => {
            modal.remove();
        });
        document.body.appendChild(modal);
    });
});
