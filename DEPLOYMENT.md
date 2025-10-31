# 🚀 Deployment & Coverage Setup Guide

Este guia explica como configurar **Vercel** e **CodeCov** para o projeto.

---

## 📊 **CODECOV - Cobertura de Testes**

### 1️⃣ Criar Conta no CodeCov

1. Acesse: https://codecov.io/
2. Faça login com sua conta do GitHub
3. Autorize o CodeCov a acessar seus repositórios

### 2️⃣ Adicionar o Repositório

1. No dashboard do CodeCov, clique em **"Add new repository"**
2. Selecione: `eryckassis/vehicle-slide-gsap`
3. Copie o **CODECOV_TOKEN** gerado

### 3️⃣ Configurar Secret no GitHub

1. Vá em: `https://github.com/eryckassis/vehicle-slide-gsap/settings/secrets/actions`
2. Clique em **"New repository secret"**
3. Nome: `CODECOV_TOKEN`
4. Valor: Cole o token copiado do CodeCov
5. Clique em **"Add secret"**

### ✅ Pronto!

Agora o CI vai enviar automaticamente os relatórios de cobertura para o CodeCov!

**Visualizar cobertura em:**

- https://app.codecov.io/gh/eryckassis/vehicle-slide-gsap

---

## 🚀 **VERCEL - Deploy Automático**

### Opção 1: Integração Direta (Recomendado)

1. **Acesse:** https://vercel.com/
2. **Login** com sua conta do GitHub
3. **Import Project:**
   - Clique em "Add New Project"
   - Selecione `vehicle-slide-gsap`
   - Configure:
     - Framework Preset: `Vite`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Deploy!

4. **Configurar Deploy Automático:**
   - Vercel detecta automaticamente pushes
   - Cada push na `main`/`master` = Deploy em produção
   - Cada PR = Deploy de preview

**URL de Produção:** `https://vehicle-slide-gsap.vercel.app`

### Opção 2: Workflow do GitHub Actions (Avançado)

Se quiser usar o workflow que criamos (`vercel-preview.yml`), configure os secrets:

1. **Instale Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Login e obtenha os tokens:**

   ```bash
   vercel login
   vercel link
   ```

3. **Obtenha as variáveis:**

   ```bash
   cat .vercel/project.json
   ```

   Copie `projectId` e `orgId`

4. **Adicione os Secrets no GitHub:**
   - `VERCEL_TOKEN`: Token de acesso (gere em https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: Organization ID
   - `VERCEL_PROJECT_ID`: Project ID

---

## 🎯 **Resultado Final**

Após configurar tudo:

### **CodeCov:**

- ✅ Badge de cobertura no README
- ✅ Relatórios detalhados de cobertura
- ✅ Comentários automáticos em PRs

### **Vercel:**

- ✅ Deploy automático em cada push
- ✅ Preview deployments em PRs
- ✅ URL de produção rápida e global
- ✅ HTTPS automático
- ✅ CDN global

---

## 📝 **Comandos Úteis**

```bash
# Testar build localmente
npm run build
npm run preview

# Testar cobertura
npm run test:coverage

# Ver cobertura no navegador
open coverage/lcov-report/index.html
```

---

## 🔗 **Links Importantes**

- **Projeto no Vercel:** https://vercel.com/dashboard
- **CodeCov Dashboard:** https://app.codecov.io/
- **GitHub Actions:** https://github.com/eryckassis/vehicle-slide-gsap/actions
- **Documentação Vercel:** https://vercel.com/docs
- **Documentação CodeCov:** https://docs.codecov.com/

---

## 💡 **Dicas**

1. **Badge do CodeCov no README:**

   ```markdown
   [![codecov](https://codecov.io/gh/eryckassis/vehicle-slide-gsap/branch/master/graph/badge.svg)](https://codecov.io/gh/eryckassis/vehicle-slide-gsap)
   ```

2. **Badge do Vercel no README:**

   ```markdown
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eryckassis/vehicle-slide-gsap)
   ```

3. **Ambiente de Variáveis:**
   - Configure env vars no Vercel Dashboard
   - Nunca commite secrets no código!
