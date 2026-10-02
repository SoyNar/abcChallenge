 const abecedario = [
  { letter: 'A', type: 'vocal', word: 'Aguacate', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300' },
  { letter: 'B', type: 'consonante', word: 'Barco', image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=300' },
  { letter: 'C', type: 'consonante', word: 'Casa', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300' },
  { letter: 'D', type: 'consonante', word: 'Delfín', image: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=300' },
  { letter: 'E', type: 'vocal', word: 'Elefante', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=300' },
  { letter: 'F', type: 'consonante', word: 'Flor', image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=300' },
  { letter: 'G', type: 'consonante', word: 'Gato', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300' },
  { letter: 'H', type: 'consonante', word: 'Helado', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300' },
  { letter: 'I', type: 'vocal', word: 'Iglú', image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=300' },
  { letter: 'J', type: 'consonante', word: 'Jirafa', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=300' },
  { letter: 'K', type: 'consonante', word: 'Koala', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=300' },
  { letter: 'L', type: 'consonante', word: 'León', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=300' },
  { letter: 'M', type: 'consonante', word: 'Manzana', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300' },
  { letter: 'N', type: 'consonante', word: 'Nube', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=300' },
  { letter: 'O', type: 'vocal', word: 'Oso', image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=300' },
  { letter: 'P', type: 'consonante', word: 'Perro', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300' },
  { letter: 'Q', type: 'consonante', word: 'Queso', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300' },
  { letter: 'R', type: 'consonante', word: 'Rana', image: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=300' },
  { letter: 'S', type: 'consonante', word: 'Sol', image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=300' },
  { letter: 'T', type: 'consonante', word: 'Tigre', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300' },
  { letter: 'U', type: 'vocal', word: 'Uvas', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300' },
  { letter: 'V', type: 'consonante', word: 'Vaca', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=300' },
  { letter: 'W', type: 'consonante', word: 'Waffle', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=300' },
  { letter: 'X', type: 'consonante', word: 'Xilófono', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300' },
  { letter: 'Y', type: 'consonante', word: 'Yate', image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=300' },
  { letter: 'Z', type: 'consonante', word: 'Zorro', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300' }
];

const pastelColors = ['bg-pink','bg-cyan','bg-yellow']

function createCard(item, index){

    const colorClass = pastelColors[index % pastelColors.length];
    return `

    <div class="col-12 col-sm-6 col-md-4 col-lg-4 item-card" data-tipo="${item.type}">
      <div class="card ${colorClass} card-custom shadow-sm border-0 rounded-4 h-100 p-3" onclick="flipCard(this)">
        
        <!-- Frente  -->
        <div class=" card-front d-flex align-items-center justify-content-center text-center">
          <h1 class="display-1 fw-bold text-white mb-0">${item.letter}</h1>
        </div>

        <!-- Dorso /detras) -->
        <div class="card-back d-flex flex-column align-items-center justify-content-center text-center">
          <img src="${item.image}" alt="${item.word}" class="img-fluid rounded-3 mb-2 object-fit-cover" style="max-height: 110px; width: 100%;">
          <h3 class="h5 fw-bold text-white m-0">${item.word}</h3>
        </div>
      </div>
    </div>
    `
}

function renderCards() {
    const galery  = document.getElementById('galery');
    if(!galery) return;

    let html = '';
    abecedario.forEach((item,index) => {
        html += createCard(item,index)    
    });

    galery.innerHTML = html;
}
function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}
document.addEventListener('DOMContentLoaded', renderCards);