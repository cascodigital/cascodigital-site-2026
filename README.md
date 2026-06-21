<div align="center">

# Casco Digital — Site 2026

**Institutional website for Casco Digital, built for Cloudflare Pages.**

![Status](https://img.shields.io/badge/Status-Active-16A34A?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-2563EB?style=flat-square)
![Casco Digital](https://img.shields.io/badge/Casco-Digital-111827?style=flat-square)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-E34F26?style=flat-square&logo=html5&logoColor=white)

</div>

---

Redesign 2026 do site institucional da Casco Digital. Estética technical brutalism com imagens WebP otimizadas, versão mobile dedicada e Cloudflare Worker integrado.

**Producao:** [cascodigital.com.br](https://cascodigital.com.br)

## Estrutura

```
cascodigital-site-2026/
├── index.html              # Pagina principal (desktop)
├── mobile/
│   └── index.html          # Versao mobile dedicada
├── diagnostico.html        # The Lab — diagnostico de hardware
├── assets/
│   ├── fonts/              # Exo2, FiraCode, Inter, Rajdhani
│   ├── turtle-hero.webp    # Imagens otimizadas em WebP
│   └── redondo.webp
├── _worker.js              # Cloudflare Worker
└── README.md
```

## Deploy

### Cloudflare Pages

1. Conecte este repositorio em **Cloudflare Pages** > **Create a project** > **Connect to Git**
2. Configuracao de build:
   - Framework preset: **None**
   - Build command: (vazio)
   - Build output directory: `/`

## Diferencas em relacao ao site anterior

- Imagens convertidas para **WebP** (reducao de ~60% no tamanho)
- Versao mobile como pagina dedicada (`/mobile`)
- Cloudflare Worker para logica server-side
- Estetica technical brutalism (tipografia, grid, contrastes)

---

Desenvolvido com 🐢 (e cafe) por **Casco Digital**.
