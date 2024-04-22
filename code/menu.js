document.addEventListener("DOMContentLoaded", function() {
    const jogosMenu = document.getElementById('jogosMenu');
    const dlcMenu = document.getElementById('dlcMenu');
    const jogosContent = document.getElementById('jogosContent');
    const dlcContent = document.getElementById('dlcContent');
  
    jogosMenu.addEventListener('click', function() {
      // Ativa Jogos X DLC
      jogosMenu.classList.add('ativo');
      dlcMenu.classList.remove('ativo');
      jogosContent.classList.add('ativo');
      dlcContent.classList.remove('ativo');
      // Ocultar o conteúdo da aba de DLCs
      dlcContent.style.display = 'none';
    });
  
    dlcMenu.addEventListener('click', function() {
      // Ativa DLC X Jogos
      dlcMenu.classList.add('ativo');
      jogosMenu.classList.remove('ativo');
      dlcContent.classList.add('ativo');
      jogosContent.classList.remove('ativo');
      dlcContent.style.display = 'block';
    });
  
    // Aba Jogos ativa ao iniciar
    jogosMenu.click();
  });
  