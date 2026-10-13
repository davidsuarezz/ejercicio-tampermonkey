// ==UserScript==
// @name         Wikipedia más cómoda
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Quita el banner de donaciones y añade un botón para volver arriba
// @match        https://es.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('#centralNotice, .frb, #frb-inline').forEach(el => el.remove());

    const boton = document.createElement('button');
    boton.textContent = '↑';
    boton.style.cssText = 'position:fixed; bottom:20px; right:20px; width:45px; height:45px; ' +
                          'font-size:22px; border:none; border-radius:50%; cursor:pointer; ' +
                          'background:#36c; color:white; z-index:9999;';
    boton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(boton);

    console.log('¡Funciona!');
})();