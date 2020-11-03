(function (C, U) {

  var palettes = {
    honeybee: {"popup": {"background": '#07dabf',"text":"#ffffff"},"button": {"background": '#6156ce',"text":"#ffffff"}},
    blurple: {"popup": {"background": '#9960ea',"text":"#ffffff"},"button": {"background": '#00d1c1',"text":"#ffffff"}},
    mono: {"popup":{"background":"#24ccda","text":"#ffffff"},"button":{"background": "transparent","border":"#fff","text":"#fff"}},
    nuclear: {"popup":{"background":"#3b3f5c","text":"#ffffff"},"button":{"background":"#888ea8","text":"#ffdddd"}},
    cosmo: {"popup":{"background":"#e95f2b","text":"#ffffff"},"button":{"background":"#3b3f5c"}},
    neon: {"popup":{"background":"#3232b7"},"button":{"background":"#f8538d","text":"#ffffff"}},
    corporate: {"popup":{"background":"#f1f3f9","text":"#3b3f5c"},"button":{"background":"#d3d3d3"}}
  };

  cookiePopups = U.initialisePopupSelector({
    cookieconsent: C,
    selector: document.querySelector('.example-selector'),
    popups: {
      'Default': {
        type: 'info',
        position: 'bottom',
        palette: palettes.mono,
      },
      'Topbar': {
        type: 'info',
        position: 'top',
        palette: palettes.honeybee,
      },
      'Blurple': {
        type: 'opt-out',
        position: 'bottom-left',
        palette: palettes.blurple,
        content: {
          "message": "You can override the text that appears in an alert too.",
          "dismiss": "Awesome"
        }
      },
      'Nuclear': {
        type: 'info',
        position: 'bottom-right',
        theme: "edgeless",
        palette: palettes.nuclear,
        content: {
          "dismiss": "I accept"
        }
      },
      'Cosmo': {
        type: 'opt-out',
        position: 'bottom',
        palette: palettes.cosmo,
      },
      'Neon': {
        type: 'info',
        theme: "classic",
        position: 'bottom-left',
        palette: palettes.neon,
      },
      'Simple': {
        type: 'info',
        position: 'bottom',
        palette: palettes.corporate,
        content: {
          "dismiss": "Dismiss"
        }
      }
    },
  });
} (window.cookieconsent, window.cookieconsent_example_util));