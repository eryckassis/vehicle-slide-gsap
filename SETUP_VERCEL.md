# 🚀 Setup Automação Vercel

## Informações do Projeto

```json
{
  "projectId": "prj_7tEljZZ9mKRUukwkuh85r0rFGf3o",
  "orgId": "team_eFWQAdjC1UCv40cauz2MKbI5",
  "projectName": "veicle-slide-gsap"
}
```

## 📝 Passo a Passo

### 1. Criar Token da Vercel

1. Acesse: https://vercel.com/account/tokens
2. Clique em **"Create Token"**
3. Configure:
   - **Token Name**: `GitHub Actions - vehicle-slide-gsap`
   - **Scope**: `Full Account`
   - **Expiration**: `No Expiration` (ou 1 year)
4. Clique em **"Create"**
5. **COPIE O TOKEN** (você só verá uma vez!)

### 2. Adicionar Secrets no GitHub

Acesse: https://github.com/eryckassis/vehicle-slide-gsap/settings/secrets/actions

Adicione os seguintes secrets:

#### Secret 1: VERCEL_TOKEN

- **Name**: `VERCEL_TOKEN`
- **Secret**: Cole o token que você copiou da Vercel

#### Secret 2: VERCEL_ORG_ID

- **Name**: `VERCEL_ORG_ID`
- **Secret**: `team_eFWQAdjC1UCv40cauz2MKbI5`

#### Secret 3: VERCEL_PROJECT_ID

- **Name**: `VERCEL_PROJECT_ID`
- **Secret**: `prj_7tEljZZ9mKRUukwkuh85r0rFGf3o`

### 3. Testar Workflow

Após adicionar os secrets, o workflow `.github/workflows/vercel-preview.yml` estará ativo e funcionando!

## 🎯 Como Funciona

### Deploy Automático em PRs

- Quando você abrir/atualizar uma PR, o GitHub Actions fará deploy automático na Vercel
- Você receberá um comentário na PR com o link do preview
- Cada commit novo na PR atualiza o preview automaticamente

### Deploy em Produção

- Quando você fizer merge na `main`, o deploy de produção acontece automaticamente
- URL de produção: https://veicle-slide-gsap.vercel.app (ou seu domínio customizado)

## 📦 Comandos Úteis no Terminal

```bash
# Deploy manual para preview
npm run deploy:preview

# Deploy manual para produção
npm run deploy:prod

# Ver logs do último deploy
npx vercel logs

# Ver lista de deployments
npx vercel ls

# Abrir dashboard da Vercel
npx vercel
```

## ✅ Verificar se está funcionando

1. Crie uma nova branch: `git checkout -b test/vercel-deploy`
2. Faça uma mudança pequena: `echo "test" >> README.md`
3. Commit: `git add . && git commit -m "test: vercel deploy automation"`
4. Push: `git push origin test/vercel-deploy`
5. Abra uma PR no GitHub
6. Aguarde o workflow rodar (≈2min)
7. Verifique o comentário com link do preview na PR

## 🔧 Troubleshooting

### Workflow não está rodando

- Verifique se os 3 secrets foram adicionados corretamente
- Confirme que o workflow está em `.github/workflows/vercel-preview.yml`
- Veja os logs em: https://github.com/eryckassis/vehicle-slide-gsap/actions

### Deploy falha

- Verifique se o `VERCEL_TOKEN` está correto
- Confirme que o token tem permissões de "Full Account"
- Veja os logs detalhados no GitHub Actions

### Preview URL não aparece

- Aguarde o workflow completar (pode levar 2-3 minutos)
- O comentário aparece automaticamente quando o deploy termina
- Verifique se o bot tem permissão para comentar na PR

## 🎨 Customização

Para customizar o comportamento do deploy, edite:

- `.github/workflows/vercel-preview.yml` - Workflow de preview/produção
- `vercel.json` - Configurações da Vercel (headers, rewrites, etc)
- `vite.config.ts` - Configurações do build

---

**Importante**: Nunca commite os valores dos secrets! Eles devem ficar apenas no GitHub Settings.
