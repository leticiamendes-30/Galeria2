// Seleção dos elementos do DOM
const cards = document.querySelectorAll('.card');
const lightbox = document.getElementById('lightbox');
const lightboxImgContainer = document.getElementById('lightbox-img-container');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxAuthor = document.getElementById('lightbox-author');
const closeBtn = document.querySelector('.close-btn');

// Abrir Modal
cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardImg = card.querySelector('img');
    const categoryEl = card.querySelector('.category');
    const titleEl = card.querySelector('.title');
    const authorEl = card.querySelector('.author');

    // Captura com fallback seguro para não travar
    const category = categoryEl ? categoryEl.innerText : '';
    const title = titleEl ? titleEl.innerText : 'Sem título';
    const author = authorEl ? authorEl.innerText : 'Por Letícia Mendes';

    // Se houver uma imagem no card, exibe-a na Lightbox
    if (cardImg && cardImg.src) {
      lightboxImgContainer.innerHTML = `<img src="${cardImg.src}" alt="${title}">`;
    } else {
      lightboxImgContainer.innerHTML = `
        <div class="placeholder-text" style="padding: 40px; text-align: center;">
          <span class="plus-icon" style="font-size: 3rem; display: block;">+</span>
          <p style="font-size: 0.9rem;">Espaço reservado para imagem</p>
        </div>
      `;
    }

    lightboxCategory.innerText = category;
    lightboxTitle.innerText = title;
    lightboxAuthor.innerText = author;

    lightbox.classList.add('active');
  });
});

// Fechar Lightbox
function closeLightbox() {
  lightbox.classList.remove('active');
}

closeBtn.addEventListener('click', closeLightbox);

// Fechar ao clicar no fundo escuro
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Fechar ao pressionar a tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});