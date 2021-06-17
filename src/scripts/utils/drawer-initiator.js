const DrawerInitiator = {
  init({
    button, navlist, navlink, hero, content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, navlist);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, navlist);
    });

    navlink.forEach((linkitem) => {
      linkitem.addEventListener('click', () => {
        button.classList.remove('open');
        navlist.classList.remove('open');
      });
    });

    hero.addEventListener('click', () => {
      button.classList.remove('open');
      navlist.classList.remove('open');
    });
  },

  _toggleDrawer(event, navlist) {
    event.stopPropagation();
    navlist.classList.toggle('open');
  },

  _closeDrawer(event, navlist) {
    event.stopPropagation();
    navlist.classList.remove('open');
  },
};

export default DrawerInitiator;
