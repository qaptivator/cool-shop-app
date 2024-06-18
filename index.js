document.querySelector('#menu-button').onclick = function (event) {
  document.querySelector('#menu-sidebar').classList.toggle('closed-sidebar');
};

/*
  const CLOSED_CLASS_NAME = 'closed-sidebar';

  const menuSidebar = document.querySelector('.menu-sidebar');
  const menuSidebarOpened = !menuSidebar.classList.contains(CLOSED_CLASS_NAME);

  if (menuSidebarOpened) {
    menuSidebar.classList.add(CLOSED_CLASS_NAME);
  } else {
    menuSidebar.classList.remove(CLOSED_CLASS_NAME);
  }
};

/*
document.getElementById('menu-button').onclick = function (event) {
  const CLOSED_CLASS_NAME = 'closed-sidebar';

  const menuSidebar = document.getElementById('menu-sidebar');

  const menuSidebarOpened = !menuSidebar.classList.contains(CLOSED_CLASS_NAME);

  if (menuSidebarOpened) {
    menuSidebar.classList.add(CLOSED_CLASS_NAME);
    menuSidebar.style.marginLeft = '-' + menuSidebar.clientWidth + 'px;';
  } else {
    menuSidebar.classList.remove(CLOSED_CLASS_NAME);
    menuSidebar.style.marginLeft = '0px;';
  }
};*/
