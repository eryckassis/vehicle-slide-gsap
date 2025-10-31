#!/bin/bash

# 🚀 Script de Deploy Rápido - Vercel
# Use este script para fazer deploy direto do terminal

echo "🚀 Vercel Deploy Helper"
echo ""

# Verificar se está na pasta correta
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script na raiz do projeto"
    exit 1
fi

# Menu de opções
echo "Escolha uma opção:"
echo ""
echo "1) 🔍 Deploy Preview (Branch atual)"
echo "2) 🚀 Deploy Production (⚠️  Cuidado!)"
echo "3) 📋 Ver deployments recentes"
echo "4) 📊 Ver logs do último deploy"
echo "5) 🔗 Abrir dashboard da Vercel"
echo "6) ⚙️  Configurar secrets do GitHub"
echo ""
read -p "Digite o número da opção: " option

case $option in
    1)
        echo ""
        echo "📦 Fazendo deploy preview da branch atual..."
        echo ""
        npm run deploy:preview
        ;;
    2)
        echo ""
        read -p "⚠️  Tem certeza que quer fazer deploy em PRODUÇÃO? (s/N): " confirm
        if [ "$confirm" == "s" ] || [ "$confirm" == "S" ]; then
            echo ""
            echo "🚀 Fazendo deploy em PRODUÇÃO..."
            echo ""
            npm run deploy:prod
        else
            echo "❌ Deploy cancelado"
        fi
        ;;
    3)
        echo ""
        echo "📋 Deployments recentes:"
        echo ""
        npx vercel ls
        ;;
    4)
        echo ""
        echo "📊 Logs do último deploy:"
        echo ""
        npm run vercel:logs
        ;;
    5)
        echo ""
        echo "🔗 Abrindo dashboard da Vercel..."
        npx vercel
        ;;
    6)
        echo ""
        echo "⚙️  Configuração dos Secrets no GitHub"
        echo ""
        echo "📝 Passo 1: Criar Token da Vercel"
        echo "   → https://vercel.com/account/tokens"
        echo ""
        echo "📝 Passo 2: Adicionar Secrets no GitHub"
        echo "   → https://github.com/eryckassis/vehicle-slide-gsap/settings/secrets/actions"
        echo ""
        echo "Adicione estes 3 secrets:"
        echo ""
        echo "1️⃣  VERCEL_TOKEN = (token da Vercel)"
        echo "2️⃣  VERCEL_ORG_ID = team_eFWQAdjC1UCv40cauz2MKbI5"
        echo "3️⃣  VERCEL_PROJECT_ID = prj_7tEljZZ9mKRUukwkuh85r0rFGf3o"
        echo ""
        echo "📖 Para mais detalhes, veja: SETUP_VERCEL.md"
        ;;
    *)
        echo "❌ Opção inválida"
        exit 1
        ;;
esac

echo ""
echo "✅ Concluído!"
