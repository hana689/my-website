// Butonlara tıklama olayı ekleyebilirsiniz
const klasikSanat = document.getElementById('klasikSanat');
const dijitalSanat = document.getElementById('dijitalSanat');
const body = document.body;

// Orijinal arka plan ayarları
const originalBackground = {
    gradient: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    size: '400% 400%',
    animation: 'gradientBG 15s ease infinite'
};

// Arka planı orijinal haline döndüren fonksiyon
function resetBackground() {
    body.style.background = originalBackground.gradient;
    body.style.backgroundSize = originalBackground.size;
    body.style.animation = originalBackground.animation;
}

// Klasik Sanat butonu için hover efektleri
klasikSanat.addEventListener('mouseenter', () => {
    body.style.background = 'linear-gradient(45deg, #800020, #000000)';
    body.style.animation = 'none';
});

klasikSanat.addEventListener('mouseleave', resetBackground);

// Dijital Sanat butonu için hover efektleri
dijitalSanat.addEventListener('mouseenter', () => {
    body.style.background = 'linear-gradient(45deg, #00bfff, #00ff00, #ffff00)';
    body.style.animation = 'none';
});

dijitalSanat.addEventListener('mouseleave', resetBackground);

// Tıklama olayları
klasikSanat.addEventListener('click', () => {
    console.log('Klasik Sanat butonuna tıklandı');
    // Buraya istediğiniz işlevi ekleyebilirsiniz
});

dijitalSanat.addEventListener('click', () => {
    console.log('Dijital Sanat butonuna tıklandı');
    // Buraya istediğiniz işlevi ekleyebilirsiniz
}); 