function getEvidencia(id) {
  return CASO2.evidences.find(function(e) { return e.id === id; });
}

function getSospechoso(id) {
  return CASO2.suspects.find(function(s) { return s.id === id; });
}

/* ===== Lightbox ===== */
var lightboxZoom = 1;
var lightboxPanX = 0, lightboxPanY = 0;
var lightboxDragging = false, lightboxStartX, lightboxStartY, lightboxStartPanX, lightboxStartPanY;

function openLightbox(src) {
  var overlay = document.getElementById('lightboxOverlay');
  var img = document.getElementById('lightboxImage');
  if (!overlay || !img) return;
  img.src = src;
  lightboxZoom = 1;
  lightboxPanX = 0;
  lightboxPanY = 0;
  applyLightboxTransform(img);
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function applyLightboxTransform(img) {
  img.style.transform = 'translate(calc(-50% + ' + lightboxPanX + 'px), calc(-50% + ' + lightboxPanY + 'px)) scale(' + lightboxZoom + ')';
}

function lightboxWheel(e) {
  e.preventDefault();
  var img = document.getElementById('lightboxImage');
  var delta = e.deltaY > 0 ? -0.1 : 0.1;
  lightboxZoom = Math.max(0.5, Math.min(10, lightboxZoom + delta));
  applyLightboxTransform(img);
}

function lightboxMouseDown(e) {
  if (e.target.id !== 'lightboxImage') return;
  lightboxDragging = true;
  lightboxStartX = e.clientX;
  lightboxStartY = e.clientY;
  lightboxStartPanX = lightboxPanX;
  lightboxStartPanY = lightboxPanY;
  e.target.style.cursor = 'grabbing';
}

function lightboxMouseMove(e) {
  if (!lightboxDragging) return;
  lightboxPanX = lightboxStartPanX + (e.clientX - lightboxStartX);
  lightboxPanY = lightboxStartPanY + (e.clientY - lightboxStartY);
  applyLightboxTransform(document.getElementById('lightboxImage'));
}

function lightboxMouseUp() {
  lightboxDragging = false;
  var img = document.getElementById('lightboxImage');
  if (img) img.style.cursor = 'grab';
}

/* ===== Modal ===== */
function openModal(id, cardEl, num) {
  var s = getSospechoso(id);
  if (!s) return;

  var overlay = document.getElementById('modalOverlay');
  if (!overlay) return;

  if (cardEl) {
    var rect = cardEl.getBoundingClientRect();
    var originX = (rect.left + rect.width / 2) - window.innerWidth / 2;
    var originY = (rect.top + rect.height / 2) - window.innerHeight / 2;
    overlay.style.setProperty('--origin-x', originX + 'px');
    overlay.style.setProperty('--origin-y', originY + 'px');
  } else {
    overlay.style.setProperty('--origin-x', '0px');
    overlay.style.setProperty('--origin-y', '0px');
  }

  var imgSrc = 'assets/caso2/sospechosos/' + s.id + '.png';
  var avatarEl = document.getElementById('modalAvatar');
  avatarEl.src = imgSrc;
  avatarEl.alt = s.nombre;
  avatarEl.onclick = function() { openLightbox(imgSrc); };
  document.getElementById('modalName').textContent = s.nombre;
  document.getElementById('modalOcc').textContent = s.ocupacion;
  document.getElementById('modalEdad').textContent = s.edad + ' a\u00f1os';
  document.getElementById('modalCoartada').textContent = s.coartada;
  document.getElementById('modalRasgo').textContent = s.rasgo;
  var refEl = document.getElementById('modalSuspectRef');
  if (refEl) refEl.textContent = num || 'SUS-??';

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== Persistencia (localStorage) ===== */
function isUnlocked(evId) {
  return localStorage.getItem('caso2_ev_' + evId) === 'true';
}

function setUnlocked(evId) {
  localStorage.setItem('caso2_ev_' + evId, 'true');
}

/* ===== Vault ===== */
function setupVault(evId) {
  var ev = getEvidencia(evId);
  if (!ev) return;

  var vaultScreen = document.getElementById('vaultScreen');
  var contentArea = document.getElementById('evidenceContent');
  var input = document.getElementById('keywordInput');
  var btn = document.getElementById('unlockBtn');
  var errorEl = document.getElementById('vaultError');
  var lockIcon = document.querySelector('.vault .lock-icon');

  if (lockIcon) lockIcon.classList.add('pulse');

  if (isUnlocked(evId)) {
    vaultScreen.style.display = 'none';
    contentArea.classList.add('revealed');
    renderEvidence(ev, contentArea);
    return;
  }

  function tryUnlock() {
    var val = input ? input.value.trim().toUpperCase() : '';
    if (val === ev.keyword) {
      errorEl.classList.remove('show');
      setUnlocked(evId);
      vaultScreen.classList.add('glitch');
      showUnlockStamp();
      setTimeout(function() {
        vaultScreen.style.display = 'none';
        contentArea.classList.add('revealed');
        renderEvidence(ev, contentArea);
      }, 600);
    } else {
      errorEl.textContent = 'Palabra clave incorrecta';
      errorEl.classList.add('show');
      if (input) {
        input.classList.add('shake');
        setTimeout(function() { input.classList.remove('shake'); }, 500);
        input.value = '';
        input.focus();
      }
    }
  }

  if (btn) btn.addEventListener('click', tryUnlock);
  if (input) {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') { e.preventDefault(); tryUnlock(); }
    });
  }
}

function showUnlockStamp() {
  var stamp = document.querySelector('.unlock-stamp');
  if (!stamp) {
    stamp = document.createElement('div');
    stamp.className = 'unlock-stamp';
    stamp.textContent = 'Acceso concedido';
    document.body.appendChild(stamp);
  }
  stamp.textContent = 'Acceso concedido';
  stamp.classList.remove('active');
  void stamp.offsetWidth;
  stamp.classList.add('active');
  setTimeout(function() { stamp.classList.remove('active'); }, 800);
}

function renderEvidence(ev, container) {
  if (ev.type === 'email') renderEmail(ev, container);
  else if (ev.type === 'log') renderLog(ev, container);
  else if (ev.type === 'documento') renderDocumento(ev, container);
}

/* SVG icons */
function iconStar() {
  return '<svg viewBox="0 0 24 24" width="14" height="14" class="icon-svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
}

function iconReply() {
  return '<svg viewBox="0 0 24 24" width="14" height="14" class="icon-svg"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>';
}

function iconTrash() {
  return '<svg viewBox="0 0 24 24" width="14" height="14" class="icon-svg"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
}

function iconMore() {
  return '<svg viewBox="0 0 24 24" width="14" height="14" class="icon-svg"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>';
}

function iconWarning() {
  return '<svg viewBox="0 0 24 24" width="14" height="14" class="icon-svg"><path d="M12 2L2 22h20L12 2z"/><line x1="12" y1="10" x2="12" y2="16"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>';
}

function iconLock() {
  return '<svg viewBox="0 0 24 24" width="32" height="32" class="icon-svg"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
}

/* ===== Gmail-style email ===== */
function renderEmail(ev, container) {
  var mainEmail = ev.entries[0];
  var html = '<div class="gmail-view">';
  html += '<div class="gmail-sidebar">';
  html += '<div class="gmail-compose">Redactar</div>';
  html += '<div class="gmail-folder active"><svg class="gmail-folder-icon" viewBox="0 0 16 16" width="14" height="14"><path d="M2 13.5V4l3-2.5h6L14 4v9.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M2 4h12v2L8 10 2 6V4z" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>Recibidos</div>';
  html += '<div class="gmail-folder">Destacados</div>';
  html += '<div class="gmail-folder">Enviados</div>';
  html += '<div class="gmail-folder">Papelera</div>';
  html += '</div>';
  html += '<div class="gmail-main">';
  html += '<div class="gmail-toolbar">';
  html += '<label class="gmail-check"><input type="checkbox"></label>';
  html += '<span class="gmail-toolbar-btn">' + iconReply() + '</span>';
  html += '<span class="gmail-toolbar-btn">' + iconMore() + '</span>';
  html += '</div>';
  html += '<div class="gmail-split">';
  html += '<div class="gmail-list">';
  ev.entries.forEach(function(e) {
    var name = e.from.split('@')[0].replace(/\./g, ' ');
    var shortName = name.split(' ').map(function(w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ');
    var date = e.time.split(',')[0];
    html += '<div class="gmail-list-item' + (e === mainEmail ? ' active' : '') + '">';
    html += '<span class="gmail-star">' + iconStar() + '</span>';
    html += '<div class="gmail-item-from">' + shortName + '</div>';
    html += '<div class="gmail-item-subject">' + e.subject + '</div>';
    html += '<div class="gmail-item-date">' + date + '</div>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div class="gmail-detail">';
  var first = ev.entries[0];
  html += '<div class="gmail-detail-header">';
  html += '<h3 class="gmail-detail-subject">' + first.subject + '</h3>';
  html += '<div class="gmail-detail-actions"><span>' + iconStar() + '</span><span>' + iconReply() + '</span><span>' + iconTrash() + '</span><span>' + iconMore() + '</span></div>';
  html += '</div>';
  html += '<div class="gmail-detail-from">';
  html += '<span class="gmail-avatar">' + first.from.charAt(0).toUpperCase() + '</span>';
  html += '<div><strong>' + first.from.split('@')[0].replace(/\./g, ' ') + '</strong><br><span class="gmail-detail-addr">' + first.from + '</span></div>';
  html += '<div class="gmail-detail-time">' + first.time + '</div>';
  html += '</div>';
  html += '<div class="gmail-detail-body">' + first.body.replace(/\n/g, '<br>') + '</div>';
  if (ev.entries.length > 1) {
    var rest = ev.entries.slice(1);
    rest.forEach(function(r) {
      html += '<div class="gmail-reply-chain">';
      html += '<div class="gmail-reply-header">' + r.time + ' \u2014 ' + r.from.split('@')[0].replace(/\./g, ' ') + '</div>';
      html += '<div class="gmail-reply-body">' + r.body.replace(/\n/g, '<br>') + '</div>';
      html += '</div>';
    });
  }
  html += '</div></div></div></div>';
  container.innerHTML = html;
}

/* ===== Log table ===== */
function renderLog(ev, container) {
  var html = '<div class="log-view">';
  html += '<div class="log-table-header">';
  html += '<div class="log-title-group">';
  html += '<span class="log-institution">' + ev.title + '</span>';
  html += '<span class="log-subtitle">' + ev.subtitle + '</span>';
  html += '</div>';
  html += '<span class="log-badge">LIVE</span>';
  html += '</div>';
  html += '<table class="log-table">';
  html += '<thead><tr>';
  ev.columns.forEach(function(c) {
    html += '<th>' + c + '</th>';
  });
  html += '</tr></thead>';
  html += '<tbody>';
  ev.rows.forEach(function(row) {
    if (row.gap) {
      html += '<tr class="log-gap-row"><td colspan="' + ev.columns.length + '"><span class="log-gap-icon">' + iconWarning() + '</span> ' + row.gapLabel + '</td></tr>';
    }
    var cls = row.alert ? ' class="log-alert-row"' : '';
    html += '<tr' + cls + '>';
    row.cells.forEach(function(cell, i) {
      var cls2 = i === 0 ? ' class="log-cell-time"' : '';
      html += '<td' + cls2 + '>' + cell + '</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
}

/* ===== Wikipedia-style document ===== */
function renderDocumento(ev, container) {
  var html = '<div class="wiki-view">';
  html += '<div class="wiki-top-notice">Documento interno \u2014 no circula fuera de la investigaci\u00f3n</div>';
  html += '<div class="wiki-header">';
  html += '<h1 class="wiki-title">' + ev.title + '</h1>';
  html += '<div class="wiki-subtitle">' + ev.subtitle + '</div>';
  html += '</div>';
  html += '<div class="wiki-body">';
  html += '<div class="wiki-sidebar">';
  if (ev.infobox) {
    html += '<div class="wiki-infobox">';
    html += '<div class="infobox-title">Ficha del documento</div>';
    for (var key in ev.infobox) {
      var label = key.replace(/_/g, ' ');
      label = label.charAt(0).toUpperCase() + label.slice(1);
      html += '<div class="infobox-row"><span class="infobox-label">' + label + '</span><span class="infobox-value">' + ev.infobox[key] + '</span></div>';
    }
    html += '</div>';
  }
  html += '</div>';
  html += '<div class="wiki-content">';
  ev.sections.forEach(function(section) {
    html += '<div class="wiki-section">';
    html += '<h2 class="wiki-section-heading">' + section.heading + '</h2>';
    if (section.annotations) {
      html += '<div class="wiki-annotation-badge">Documento con anotaciones</div>';
    }
    if (section.highlight) {
      html += '<div class="wiki-highlight-box">';
      html += '<p>' + section.content.replace(/\n/g, '<br>') + '</p>';
      html += '</div>';
    } else if (section.content) {
      html += '<p>' + section.content.replace(/\n/g, '<br>') + '</p>';
    }
    if (section.table) {
      html += '<div class="wiki-table-wrap">';
      html += '<table class="wiki-table">';
      html += '<thead><tr>';
      section.table.columns.forEach(function(c) {
        html += '<th>' + c + '</th>';
      });
      html += '</tr></thead>';
      html += '<tbody>';
      section.table.rows.forEach(function(row, ri) {
        var isDup = ri > 0 && section.table.rows[ri - 1] && row[0] === section.table.rows[ri - 1][0];
        html += '<tr' + (isDup ? ' class="wiki-row-duplicate"' : '') + '>';
        row.forEach(function(cell) {
          html += '<td>' + cell + '</td>';
        });
        html += '</tr>';
      });
      html += '</tbody></table>';
      html += '</div>';
    }
    html += '</div>';
  });
  html += '</div>';
  html += '</div>';
  html += '<div class="wiki-footer">';
  html += '<span>Fuente: Repositorio interno de la investigaci\u00f3n</span>';
  html += '<span>Uso exclusivo del caso</span>';
  html += '</div>';
  html += '</div>';
  container.innerHTML = html;
}

/* ===== Inject environment details ===== */
(function() {
  if (document.querySelector('.scanlines')) return;
  var sl = document.createElement('div');
  sl.className = 'scanlines';
  document.body.appendChild(sl);

  for (var i = 0; i < 6; i++) {
    var m = document.createElement('div');
    m.className = 'dust-mote';
    document.body.appendChild(m);
  }

  var cctv = document.createElement('div');
  cctv.className = 'cctv-stamp flicker';
  var d = new Date();
  var pad = function(n) { return n < 10 ? '0' + n : n; };
  cctv.textContent = 'CAM-' + pad(1 + Math.floor(Math.random() * 8)) + '  ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  document.body.appendChild(cctv);

  /* Typewriter effect on back-links */
  setTimeout(function() {
    var links = document.querySelectorAll('.back-link');
    links.forEach(function(el) {
      var txt = el.textContent;
      el.textContent = '';
      var i = 0;
      (function type() {
        if (i < txt.length) {
          el.textContent += txt.charAt(i);
          i++;
          setTimeout(type, 30 + Math.random() * 20);
        }
      })();
    });
  }, 600);
})();

/* ===== Console easter egg ===== */
console.log('%c[ARCHIVO DEL CASO]', 'color:#8b2020;font-weight:bold;font-size:13px;');
console.log('%cExpediente N° 002 — Unidad Centinela', 'color:#5a4a2a;font-style:italic;font-size:11px;');
console.log('%cNOTA: El cambio de turno en la bit\u00e1cora (Evidencia 3) no coincide con el horario habitual.', 'color:#2a1a0a;font-size:11px;');

/* ===== Easter egg NOCHAP ===== */
(function() {
  var buf = [], scOverlay = null, scAudio = null;

  document.addEventListener('keydown', function(e) {
    if (e.key.length === 1) {
      buf.push(e.key.toUpperCase());
      if (buf.length > 6) buf.shift();
      if (buf.join('') === 'NOCHAP') {
        buf = [];
        triggerJumpscare();
      }
    }
  });

  function triggerJumpscare() {
    if (!scOverlay) {
      scOverlay = document.createElement('div');
      scOverlay.className = 'jumpscare-overlay';
      scOverlay.innerHTML =
        '<div class="jumpscare-inner">' +
        '<div class="jumpscare-face">' +
        '<svg viewBox="0 0 240 280" width="240" height="280">' +
        '<ellipse cx="120" cy="140" rx="110" ry="130" fill="#0a0000" stroke="#8b0000" stroke-width="3"/>' +
        '<ellipse cx="120" cy="100" rx="80" ry="70" fill="#0a0000" stroke="#8b0000" stroke-width="2"/>' +
        '<ellipse cx="75" cy="85" rx="28" ry="32" fill="#000"/>' +
        '<ellipse cx="165" cy="85" rx="28" ry="32" fill="#000"/>' +
        '<circle cx="78" cy="88" r="12" fill="#ff0000" opacity="0.9"/>' +
        '<circle cx="162" cy="88" r="12" fill="#ff0000" opacity="0.9"/>' +
        '<circle cx="78" cy="88" r="5" fill="#fff" opacity="0.4"/>' +
        '<circle cx="162" cy="88" r="5" fill="#fff" opacity="0.4"/>' +
        '<path d="M50 160 Q75 145 100 160 Q120 170 140 160 Q165 145 190 160" stroke="#8b0000" stroke-width="3" fill="none"/>' +
        '<path d="M60 130 Q90 120 120 130 Q150 140 180 130" stroke="#5a0000" stroke-width="2" fill="none"/>' +
        '<rect x="80" y="190" width="80" height="25" rx="4" fill="#8b0000" opacity="0.3"/>' +
        '<text x="120" y="208" text-anchor="middle" fill="#fff" font-family="Courier New,monospace" font-size="14" font-weight="bold">NOCHAP</text>' +
        '</svg></div></div>';
      document.body.appendChild(scOverlay);
    }

    playScream();
    scOverlay.classList.add('active');
    setTimeout(function() { scOverlay.classList.remove('active'); }, 1000);
  }

  function playScream() {
    try {
      if (!scAudio) scAudio = new (window.AudioContext || window.webkitAudioContext)();
      if (scAudio.state === 'suspended') scAudio.resume();

      var now = scAudio.currentTime;
      var osc1 = scAudio.createOscillator();
      var osc2 = scAudio.createOscillator();
      var gain = scAudio.createGain();
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(scAudio.destination);

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(900, now);
      osc1.frequency.exponentialRampToValueAtTime(80, now + 0.85);

      osc2.type = 'square';
      osc2.frequency.setValueAtTime(600, now);
      osc2.frequency.exponentialRampToValueAtTime(50, now + 0.85);

      gain.gain.setValueAtTime(0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.95);
      osc2.stop(now + 0.95);
    } catch(e) {}
  }
})();
