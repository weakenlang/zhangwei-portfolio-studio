(function () {
  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  const state = {
    heroId: DATA.heroStage[0].id,
    flagshipId: DATA.flagships[0].id,
    flagshipGalleryIdx: 0,
    catFilter: "all",
    companyFilter: "all",
    modalGalleryIdx: 0
  };

  /* ---------- TOAST & COPY ---------- */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2200);
  }

  async function copyText(text, label) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    showToast(`已复制${label}：${text}`);
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      copyText(btn.dataset.copy, btn.dataset.copyLabel || "内容");
    });
  });

  /* ---------- MOBILE NAV ---------- */
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  function closeMobileNav() {
    if (!navLinks || !mobileBtn) return;
    navLinks.classList.remove("is-open");
    mobileBtn.setAttribute("aria-expanded", "false");
  }

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      mobileBtn.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMobileNav);
    });
  }

  /* ---------- SCROLL SPY ---------- */
  const navAnchors = Array.from(document.querySelectorAll(".nav-links a[data-section]"));
  const sections = navAnchors
    .map((a) => document.getElementById(a.dataset.section))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navAnchors.forEach((a) => {
              a.classList.toggle("is-active", a.dataset.section === id);
            });
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    sections.forEach((sec) => observer.observe(sec));
  }

  /* ---------- HERO INTERACTIVE STAGE ---------- */
  const heroTagEl = document.getElementById("hero-stage-tag");
  const heroCompanyEl = document.getElementById("hero-stage-company");
  const heroImgEl = document.getElementById("hero-stage-img");
  const heroTitleEl = document.getElementById("hero-stage-title");
  const heroKpisEl = document.getElementById("hero-stage-kpis");
  const heroDecisionEl = document.getElementById("hero-stage-decision");
  const heroJumpEl = document.getElementById("hero-stage-jump");
  const heroPills = Array.from(document.querySelectorAll(".switch-pill[data-hero-id]"));

  function renderHeroStage(id) {
    const item = DATA.heroStage.find((x) => x.id === id) || DATA.heroStage[0];
    state.heroId = item.id;
    heroTagEl.textContent = item.tag;
    heroCompanyEl.textContent = item.company;
    heroImgEl.src = item.image;
    heroImgEl.alt = `${item.title} 实机画面`;
    heroTitleEl.textContent = item.title;
    heroDecisionEl.textContent = item.decision;

    heroKpisEl.innerHTML = item.kpis
      .map(
        (k) => `
        <div class="stage-kpi-item">
          <strong>${k.value}</strong>
          <span>${k.label}</span>
        </div>`
      )
      .join("");

    heroPills.forEach((pill) => {
      const active = pill.dataset.heroId === item.id;
      pill.classList.toggle("is-active", active);
      pill.setAttribute("aria-selected", String(active));
    });
  }

  heroPills.forEach((pill) => {
    pill.addEventListener("click", () => renderHeroStage(pill.dataset.heroId));
  });

  if (heroJumpEl) {
    heroJumpEl.addEventListener("click", () => {
      if (DATA.flagships.some((f) => f.id === state.heroId)) {
        state.flagshipId = state.heroId;
        state.flagshipGalleryIdx = 0;
        renderFlagshipTabs();
        renderFlagshipPanel();
      }
    });
  }

  /* ---------- FLAGSHIP DEEP DIVES ---------- */
  const flagshipTabsEl = document.getElementById("flagship-tabs");
  const flagshipPanelEl = document.getElementById("flagship-panel");

  function renderBlueprintSvg(series) {
    const w = 290;
    const h = 112;
    const padX = 16;
    const maxEcpm = 340;
    const minEcpm = 160;
    const points = series.map((d, i) => {
      const x = padX + (i * (w - padX * 2)) / (series.length - 1);
      const y = h - 18 - ((d.ecpm - minEcpm) / (maxEcpm - minEcpm)) * (h - 34);
      return { x: x.toFixed(1), y: y.toFixed(1), ecpm: d.ecpm, ver: d.ver };
    });
    const poly = points.map((p) => `${p.x},${p.y}`).join(" ");
    const dots = points
      .map(
        (p) =>
          `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#f59e0b" stroke="#0b101a" stroke-width="1.5"/>`
      )
      .join("");
    const labels = points
      .map(
        (p) =>
          `<text x="${p.x}" y="${Number(p.y) - 9}" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">${Math.round(p.ecpm)}</text>`
      )
      .join("");

    return `
      <svg class="blueprint-svg" viewBox="0 0 ${w} ${h}" aria-label="小兵别嚣张各版本 ECPM 跃升趋势图">
        <line x1="${padX}" y1="${h - 18}" x2="${w - padX}" y2="${h - 18}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
        <polyline fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="${poly}"/>
        ${dots}
        ${labels}
      </svg>`;
  }

  function renderFlagshipTabs() {
    flagshipTabsEl.innerHTML = DATA.flagships
      .map((f) => {
        const active = f.id === state.flagshipId;
        return `
          <button
            class="flagship-tab ${active ? "is-active" : ""}"
            type="button"
            role="tab"
            aria-selected="${active}"
            data-flagship-id="${f.id}"
          >
            <div class="flagship-tab-top">
              <span class="flagship-tab-badge">${f.shortTag}</span>
              <span class="flagship-tab-year">${f.period.split("–")[0]}</span>
            </div>
            <strong>${f.name}</strong>
            <small>${f.company} · ${f.role}</small>
          </button>`;
      })
      .join("");

    flagshipTabsEl.querySelectorAll(".flagship-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.flagshipId = btn.dataset.flagshipId;
        state.flagshipGalleryIdx = 0;
        renderFlagshipTabs();
        renderFlagshipPanel();
      });
    });
  }

  function renderFlagshipPanel() {
    const f = DATA.flagships.find((x) => x.id === state.flagshipId) || DATA.flagships[0];
    let leftHtml = "";

    if (f.isBlueprint) {
      const rows = f.blueprintSeries
        .map(
          (r) => `
          <tr>
            <td>${r.ver}</td>
            <td>${r.d1.toFixed(1)}%</td>
            <td>${r.d7.toFixed(1)}%</td>
            <td>¥${r.arpu.toFixed(2)}</td>
            <td class="${r.ecpm >= 300 ? "hi" : ""}">${r.ecpm.toFixed(1)}</td>
          </tr>`
        )
        .join("");

      leftHtml = `
        <div class="flagship-media">
          <div class="blueprint-panel">
            <div class="blueprint-head">
              <span>真实版本演进数据蓝图</span>
              <small>ECPM 跃升 196 → 318</small>
            </div>
            ${renderBlueprintSvg(f.blueprintSeries)}
            <table class="blueprint-table">
              <thead>
                <tr>
                  <th>阶段</th>
                  <th>次留</th>
                  <th>周留</th>
                  <th>ARPU</th>
                  <th>ECPM</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
          <p class="flagship-caption">
            展示项目多轮迭代期间的留存、ARPU 与 ECPM 关键指标演进趋势（已做阶段脱敏）。
          </p>
        </div>`;
    } else {
      const current = f.gallery[state.flagshipGalleryIdx] || f.gallery[0];
      const thumbs = f.gallery
        .map(
          (g, idx) => `
          <button
            class="thumb-btn ${idx === state.flagshipGalleryIdx ? "is-active" : ""}"
            type="button"
            data-gallery-idx="${idx}"
            aria-label="查看截图 ${idx + 1}"
          >
            <img src="${g.src}" alt="${g.caption}" loading="lazy" />
          </button>`
        )
        .join("");

      leftHtml = `
        <div class="flagship-media">
          <div class="flagship-main-shot">
            <img src="${current.src}" alt="${current.caption}" />
            <button
              class="shot-zoom-btn"
              type="button"
              data-zoom-src="${current.src}"
              data-zoom-cap="${f.name} — ${current.caption}"
            >
              放大查看
            </button>
          </div>
          <p class="flagship-caption">${current.caption}</p>
          <div class="flagship-thumbs">${thumbs}</div>
        </div>`;
    }

    const kpisHtml = f.metrics
      .map(
        (m) => `
        <div class="kpi-card ${m.accent}">
          <strong>${m.value}</strong>
          <span>${m.label}</span>
        </div>`
      )
      .join("");

    const decisionsHtml = f.decisions.map((d) => `<li>${d}</li>`).join("");

    flagshipPanelEl.innerHTML = `
      ${leftHtml}
      <div class="flagship-info">
        <div class="flagship-head">
          <div>
            <h3>${f.name}</h3>
            <div class="meta-pills">
              <span class="meta-pill role">${f.role}</span>
              <span class="meta-pill">${f.company} · ${f.period}</span>
              <span class="meta-pill">${f.team}</span>
              <span class="meta-pill">${f.platformMarket}</span>
              <span class="meta-pill">${f.stage}</span>
            </div>
          </div>
        </div>
        <p class="flagship-summary">${f.summary}</p>
        <div class="kpi-grid">${kpisHtml}</div>
        <div class="detail-blocks">
          <div class="detail-card">
            <h4>核心难题</h4>
            <p>${f.challenge}</p>
          </div>
          <div class="detail-card emerald">
            <h4>关键决策与落地动作</h4>
            <ul>${decisionsHtml}</ul>
          </div>
          <div class="detail-card sky">
            <h4>一线复盘沉淀</h4>
            <p>${f.retrospective}</p>
          </div>
        </div>
        <div class="detail-footer-note">
          <span><strong>我的范围：</strong>${f.responsibilities}</span>
        </div>
      </div>`;

    flagshipPanelEl.querySelectorAll(".thumb-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.flagshipGalleryIdx = Number(btn.dataset.galleryIdx);
        renderFlagshipPanel();
      });
    });

    const zoomBtn = flagshipPanelEl.querySelector(".shot-zoom-btn");
    if (zoomBtn) {
      zoomBtn.addEventListener("click", () => {
        openLightbox(zoomBtn.dataset.zoomSrc, zoomBtn.dataset.zoomCap);
      });
    }
  }

  /* ---------- ARCHIVE MATRIX ---------- */
  const archiveGridEl = document.getElementById("archive-grid");
  const archiveCountEl = document.getElementById("archive-count");
  const companyFilterEl = document.getElementById("company-filter");
  const catButtons = Array.from(document.querySelectorAll(".filter-chip[data-cat]"));

  function renderArchive() {
    const filtered = DATA.archiveProjects.filter((p) => {
      const catMatch = state.catFilter === "all" || p.category === state.catFilter;
      const compMatch = state.companyFilter === "all" || p.company === state.companyFilter;
      return catMatch && compMatch;
    });

    archiveCountEl.textContent = `当前显示 ${filtered.length} / ${DATA.archiveProjects.length} 项`;

    if (!filtered.length) {
      archiveGridEl.innerHTML = `<div class="archive-empty">当前筛选组合下暂无项目，请切换公司或分类条件。</div>`;
      return;
    }

    archiveGridEl.innerHTML = filtered
      .map((p) => {
        const coverHtml = p.isBlueprint
          ? `<div class="card-cover">
              <div class="card-cover-blueprint">
                <span>核心商业指标</span>
                <div>
                  <strong>2 亿+</strong>
                  <small>次留 60.29% · ECPM 318</small>
                </div>
              </div>
              <span class="card-cat-tag">${p.categoryLabel}</span>
            </div>`
          : `<div class="card-cover ${p.isLandscape ? "is-landscape" : ""}">
              <img src="${p.image}" alt="${p.name} 游戏截图" loading="lazy" />
              <span class="card-cat-tag">${p.categoryLabel}</span>
            </div>`;

        return `
          <button class="project-card" type="button" data-project-id="${p.id}">
            ${coverHtml}
            <div class="card-body">
              <div class="card-meta">
                <span>${p.company}</span>
                <span>${p.period}</span>
              </div>
              <h3>${p.name}</h3>
              <p class="card-highlight">${p.highlight}</p>
              <div class="card-foot">
                <span>${p.role} · ${p.team}</span>
                <span>档案详情 ›</span>
              </div>
            </div>
          </button>`;
      })
      .join("");

    archiveGridEl.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", () => openProjectModal(card.dataset.projectId));
    });
  }

  catButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.catFilter = btn.dataset.cat;
      catButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
      renderArchive();
    });
  });

  if (companyFilterEl) {
    companyFilterEl.addEventListener("change", () => {
      state.companyFilter = companyFilterEl.value;
      renderArchive();
    });
  }

  /* ---------- INSIGHTS & TIMELINE ---------- */
  const insightsGridEl = document.getElementById("insights-grid");
  if (insightsGridEl) {
    insightsGridEl.innerHTML = DATA.insights
      .map(
        (item) => `
        <article class="insight-card">
          <div class="insight-top">
            <span class="insight-num">法则 ${item.index}</span>
            <span class="insight-tag">${item.tag}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>`
      )
      .join("");
  }

  const timelineGridEl = document.getElementById("timeline-grid");
  if (timelineGridEl) {
    timelineGridEl.innerHTML = DATA.timeline
      .map(
        (t, idx) => `
        <article class="timeline-card ${idx === DATA.timeline.length - 1 ? "is-latest" : ""}">
          <div class="timeline-period">${t.period}</div>
          <h3>${t.company}</h3>
          <span class="timeline-role">${t.role}</span>
          <div class="timeline-team">${t.team}</div>
          <p class="timeline-project">${t.project}</p>
          <p class="timeline-desc">${t.desc}</p>
        </article>`
      )
      .join("");
  }

  /* ---------- MODAL & LIGHTBOX ---------- */
  const modalEl = document.getElementById("project-modal");
  const modalBodyEl = document.getElementById("modal-body");
  const modalCloseBtn = document.getElementById("modal-close");

  const lightboxEl = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCap = document.getElementById("lightbox-caption");
  const lightboxCloseBtn = document.getElementById("lightbox-close");

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || "";
    lightboxCap.textContent = caption || "";
    lightboxEl.hidden = false;
    lightboxEl.setAttribute("aria-hidden", "false");
    lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    lightboxEl.hidden = true;
    lightboxEl.setAttribute("aria-hidden", "true");
    lightboxImg.removeAttribute("src");
  }

  function openProjectModal(projectId) {
    const p = DATA.archiveProjects.find((x) => x.id === projectId);
    if (!p) return;
    state.modalGalleryIdx = 0;

    const images = p.gallery && p.gallery.length ? p.gallery : p.image ? [p.image] : [];

    const renderModalVisual = () => {
      if (p.isBlueprint) {
        return `
          <div class="modal-visual">
            <div class="blueprint-panel">
              <div class="blueprint-head">
                <span>核心商业档案</span>
                <small>2 亿+ 流水</small>
              </div>
              <p style="margin:0;font-size:13px;color:var(--text-muted);">
                累计新增 500 万+，次日留存 60.29%，周留 21.21%，广告次数 20+，ECPM 最高 318。
              </p>
            </div>
          </div>`;
      }

      const activeSrc = images[state.modalGalleryIdx] || images[0];
      const thumbs =
        images.length > 1
          ? `<div class="flagship-thumbs">
              ${images
                .map(
                  (src, idx) => `
                  <button
                    class="thumb-btn ${idx === state.modalGalleryIdx ? "is-active" : ""}"
                    type="button"
                    data-modal-idx="${idx}"
                  >
                    <img src="${src}" alt="${p.name} 附图 ${idx + 1}" />
                  </button>`
                )
                .join("")}
            </div>`
          : "";

      return `
        <div class="modal-visual">
          <div class="modal-shot ${p.isLandscape ? "is-landscape" : ""}">
            <img id="modal-main-img" src="${activeSrc}" alt="${p.name} 游戏截图" />
          </div>
          ${thumbs}
        </div>`;
    };

    modalBodyEl.innerHTML = `
      <div class="modal-grid">
        ${renderModalVisual()}
        <div class="modal-content">
          <h3 id="modal-title">${p.name}</h3>
          <div class="meta-pills">
            <span class="meta-pill role">${p.role}</span>
            <span class="meta-pill">${p.company} · ${p.period}</span>
            <span class="meta-pill">${p.team}</span>
            <span class="meta-pill">${p.platform}</span>
            <span class="meta-pill">${p.status}</span>
          </div>
          <div class="modal-rows">
            <div class="modal-row">
              <strong>我负责的范围</strong>
              <p>${p.scope}</p>
            </div>
            <div class="modal-row">
              <strong>核心难点</strong>
              <p>${p.challenge}</p>
            </div>
            <div class="modal-row">
              <strong>关键决策与动作</strong>
              <p>${p.decision}</p>
            </div>
            <div class="modal-row">
              <strong>验证与商业结果</strong>
              <p>${p.result}</p>
            </div>
          </div>
        </div>
      </div>`;

    const bindThumbs = () => {
      modalBodyEl.querySelectorAll("[data-modal-idx]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.modalGalleryIdx = Number(btn.dataset.modalIdx);
          const mainImg = document.getElementById("modal-main-img");
          if (mainImg) mainImg.src = images[state.modalGalleryIdx];
          modalBodyEl.querySelectorAll("[data-modal-idx]").forEach((b) => {
            b.classList.toggle("is-active", Number(b.dataset.modalIdx) === state.modalGalleryIdx);
          });
        });
      });
    };
    bindThumbs();

    modalEl.hidden = false;
    modalEl.setAttribute("aria-hidden", "false");
    modalCloseBtn.focus();
  }

  function closeProjectModal() {
    modalEl.hidden = true;
    modalEl.setAttribute("aria-hidden", "true");
  }

  modalCloseBtn.addEventListener("click", closeProjectModal);
  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) closeProjectModal();
  });

  lightboxCloseBtn.addEventListener("click", closeLightbox);
  lightboxEl.addEventListener("click", (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!lightboxEl.hidden) closeLightbox();
      else if (!modalEl.hidden) closeProjectModal();
      else closeMobileNav();
    }
  });

  /* ---------- INIT ---------- */
  renderHeroStage(state.heroId);
  renderFlagshipTabs();
  renderFlagshipPanel();
  renderArchive();
})();
