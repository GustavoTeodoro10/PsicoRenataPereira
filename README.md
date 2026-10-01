# Renata Pereira, Psicóloga infantil

Site one-page da psicóloga infantil Renata Pereira (CRP 06/64053), Shopping de Mauá. Redesign do site `psicologarenatapereira.com`.

Stack: HTML, CSS e JavaScript puros, com Tailwind CSS via CDN. Não precisa de build.

## Estrutura

```
.
├── index.html          # Página única (SEO, Open Graph, JSON-LD, seções)
├── css/styles.css      # Tokens de cor, botões, animações, ajustes de acessibilidade
├── js/main.js          # Links do WhatsApp por seção, menu, scroll-reveal, eventos de conversão
├── assets/
│   ├── logo.png / .webp        # Logo original (recorte do post do Instagram, sem a frase)
│   ├── favicon.ico, favicon-*.png
│   ├── og-image.jpg            # Prévia para WhatsApp/Instagram (1200x630)
│   ├── renata-1.webp / .jpg    # Foto da Renata (do site anterior)
│   └── original/               # Arquivo-fonte do logo, sem alterações
├── README.md
└── .gitignore
```

## Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta:

```bash
python -m http.server 5173
```

Depois acesse http://localhost:5173.

## Antes de publicar

1. **Analytics:** em `index.html`, descomente o bloco do Google Analytics e troque `G-XXXXXXXXXX` pelo ID real. Para Meta Pixel, cole o código no local indicado. Os cliques nos CTAs já enviam o evento `generate_lead` (GA4) e `Contact` (Pixel).
2. **Horário:** confirme com a Renata. Está como seg a sex 9h–19h e sáb 9h–13h. O site antigo dizia só sábado 8h–13h.
3. **Planos:** os cards (Sessão pontual, 90 dias, 180 dias) não têm preço nem inclusões, porque o site antigo não trazia esses dados. Preencha quando a Renata definir.
4. **Avaliações:** os textos foram copiados do Google Maps em out/2026. Os rótulos "há X meses" ficam desatualizados com o tempo; atualize de vez em quando.
5. **E-mail:** o cliente não tem e-mail público, então o rodapé não mostra essa linha. Adicione em `index.html` (rodapé e seção de contato) se houver.

## Deploy

Site estático, qualquer um serve.

**GitHub Pages**
1. Suba o repositório no GitHub.
2. Em Settings → Pages, escolha a branch `main` e a pasta `/ (root)`.
3. Para usar `psicologarenatapereira.com`, adicione um arquivo `CNAME` na raiz com o domínio e aponte o DNS.

**Netlify ou Vercel:** conecte o repositório, sem comando de build e com a raiz como pasta de publicação.

Depois do deploy, confira a prévia do link no WhatsApp (as imagens do Open Graph usam o domínio `psicologarenatapereira.com`).

## Domínio

O domínio `psicologarenatapereira.com` está hoje em outro negócio (título "Mentoria Psi15K", rodapé "Portal Baruck" e um botão que abre o WhatsApp de outra pessoa). Antes do deploy, é preciso recuperar o controle do domínio ou cadastrar a nova URL no perfil do Google da Renata.

---

Site desenvolvido por [TeoCode](https://teocode.com.br/).
