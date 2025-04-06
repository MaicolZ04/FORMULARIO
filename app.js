// Función mejorada para mostrar el modal
function showCustomAlert() {
  const modal = document.getElementById('customAlert');
  modal.classList.add('modal-show');
  
  // Efecto de vibración para el campo vacío
  const otroInput = document.querySelector('input[name="entry.224575700.other_option_response"]');
  otroInput.style.animation = 'shake 0.5s';
  setTimeout(() => {
    otroInput.style.animation = '';
    otroInput.focus();
  }, 500);
}

// Cerrar modal al hacer clic en la "X"
document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('customAlert').classList.remove('modal-show');
});

// Cerrar modal al hacer clic en el botón "Entendido"
document.querySelector('.accept-btn').addEventListener('click', () => {
  document.getElementById('customAlert').classList.remove('modal-show');
});

// Modifica tu evento submit
document.querySelector('form').addEventListener('submit', function(e) {
  const otroRadio = document.getElementById('otroRadio');
  const otroInput = document.querySelector('input[name="entry.224575700.other_option_response"]');
  
  if (otroRadio.checked && !otroInput.value.trim()) {
    e.preventDefault();
    showCustomAlert();
  }
});

// Animación de shake para el input
const style = document.createElement('style');
style.innerHTML = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});