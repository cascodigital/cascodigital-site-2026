<div align="center">

# Casco Digital — Site 2026

**Site institucional e Central de Suporte da Casco Digital.**

![Status](https://img.shields.io/badge/Status-Active-16A34A?style=flat-square)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-E34F26?style=flat-square&logo=html5&logoColor=white)

</div>

---

Estetica technical brutalism, paginas unicas responsivas, imagens WebP e fontes woff2
subsetadas. Duas entregas, **hospedagens diferentes**:

| Pasta | Vai para | Como publica |
|---|---|---|
| `site/` | `cascodigital.com.br` | Cloudflare Pages, projeto `site-casco-digital` |
| `suporte/` | `suporte.cascodigital.com.br` | container `suporte-remoto-web` no servidor `.46` |

## Estrutura

```
cascodigital-site-2026/
├── site/
│   ├── index.html          # Pagina unica, responsiva (desktop + mobile)
│   ├── diagnostico.html    # Guardian (SPF/DMARC) + PC Inspector
│   ├── 404.html
│   ├── robots.txt / sitemap.xml
│   ├── favicon.ico / apple-touch-icon.png
│   └── assets/             # fontes woff2, imagens WebP, og-image
└── suporte/
    ├── index.html          # Central de Suporte: download do agente remoto
    ├── favicon.ico / apple-touch-icon.png
    └── assets/
```

O agente de atendimento remoto (`suporte_casco.exe`, ~37 MB, TeamViewer QuickSupport
customizado) **nao e versionado** — ele e gerado no painel do TeamViewer e vive em
`/dados/dockers/suporte/` no `.46`.

## Deploy

### site/ — Cloudflare Pages

O projeto **nao builda a partir do Git**: a publicacao e sempre por `wrangler`.

```bash
source ~/.secrets/cloudflare.env
CLOUDFLARE_API_TOKEN=$CF_TOKEN_PAGES CLOUDFLARE_ACCOUNT_ID=$CF_ACCOUNT_ID \
  npx wrangler pages deploy site --project-name=site-casco-digital
```

Exige Node >= 22. O dominio chega ao Pages por CNAME (`cascodigital.com.br` e `www` →
`site-casco-digital.pages.dev`).

### suporte/ — servidor .46

```bash
rsync -a --chmod=F644 suporte/ h46:/dados/dockers/suporte/
```

O nginx do container le como outro usuario: arquivo com modo `700` responde **403 na
origem**. Por isso o `--chmod=F644`.

## Notas de producao

- Sem `404.html`, o Pages responde **200 com a home** em qualquer rota errada (soft 404).
- `/pagina.html` responde **308** para a URL limpa `/pagina` — links internos, `canonical`
  e `sitemap.xml` usam a forma sem `.html`.
- Fontes: 1,73 MB de TTF viraram 105 KB de woff2 subsetado (latin), via `pyftsubset`.

---

Desenvolvido com 🐢 (e cafe) por **Casco Digital**.
