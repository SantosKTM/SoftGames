function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
  
    if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
    } else {
      sidebar.style.width = '250px';
    }
  
    adjustContentMargin();
  }
  
  function adjustContentMargin() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
  
    if (sidebar.style.width === '250px') {
      main.style.marginLeft = '250px';
    } else {
      main.style.marginLeft = '0';
    }
  }
  
  // Ajusta a margem inicialmente para lidar com a largura do menu lateral se estiver aberto por padrão
  window.addEventListener('load', adjustContentMargin);
  window.addEventListener('resize', adjustContentMargin);

function closeMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '0';
    adjustContentMargin();
}
  