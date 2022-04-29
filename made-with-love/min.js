document.addEventListener("DOMContentLoaded", () => {
  const head = document.querySelector("head");
  const body = document.querySelector("body");
  const linkToContacts = "https://frecautan.github.io/";

  const css = `<style type="text/css">@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);#mwl{font-family:"Open Sans",sans-serif;background:#ececec;display:flex;justify-content:center;padding:12px 20px;text-align:center}#mwl .mwl__text{color:#252525;font-size:14px;display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:4px;}#mwl .mwl__svg{vertical-align:middle; margin: 0 3px}#mwl .mwl__link{text-decoration:none;font-weight:600;color:#151515;transition:all .3s linear}#mwl .mwl__link:hover{color:#d62a2a}</style>`;
  const html = `<div id="mwl"><div class="mwl__center"><span class="mwl__text"><span>Designed & Developed with</span><svg class="mwl__svg" fill="#d62a2a" height="16" viewBox="0 0 303 303"><path d="M302 98c-1-21-10-40-25-55a79 79 0 0 0-55-23c-31 0-53 24-65 37l-6 6-4-5c-11-12-34-38-67-38-20 0-40 8-55 23A84 84 0 0 0 0 98c-1 21 4 39 17 59a597 597 0 0 0 106 110c18 14 24 16 28 16s11-2 29-16l39-36c29-28 56-58 66-74 9-14 19-32 17-59z"/></svg><span>by</span><a href=${linkToContacts} target="_blank" class="mwl__link">Igor Frecautan</a></span></div>`;

  head.insertAdjacentHTML("beforeend", css);
  body.insertAdjacentHTML("beforeend", html);
});
