# 📝 Guia de Commits - Conventional Commits

## 🎯 Formato Padrão

```
<type>(<scope>): <subject>

[body opcional]

[footer opcional]
```

## 📚 Tipos Permitidos

| Tipo       | Emoji | Descrição                            | Exemplo                                            |
| ---------- | ----- | ------------------------------------ | -------------------------------------------------- |
| `feat`     | ✨    | Nova funcionalidade                  | `feat(slider): adiciona navegação por teclado`     |
| `fix`      | 🐛    | Correção de bug                      | `fix(animation): corrige timing do GSAP`           |
| `docs`     | 📝    | Documentação                         | `docs: atualiza README com instruções`             |
| `style`    | 💄    | Formatação, sem mudança de lógica    | `style: formata código com prettier`               |
| `refactor` | ♻️    | Refatoração sem mudar funcionalidade | `refactor(slider): simplifica lógica de navegação` |
| `perf`     | ⚡    | Melhoria de performance              | `perf: otimiza animações GSAP`                     |
| `test`     | ✅    | Adicionar/modificar testes           | `test: adiciona testes para slider`                |
| `build`    | 🔧    | Build system, dependências           | `build: atualiza vite para 7.1.7`                  |
| `ci`       | 👷    | CI/CD configs                        | `ci: adiciona github actions`                      |
| `chore`    | 🔨    | Tarefas diversas                     | `chore: atualiza gitignore`                        |
| `revert`   | ⏪    | Reverter commit anterior             | `revert: reverte commit abc123`                    |

## ✅ Exemplos CORRETOS

```bash
feat(slider): adiciona navegação por teclado
fix(gsap): corrige bug na timeline de animação
docs: adiciona documentação do projeto
style: formata código seguindo padrão eslint
refactor: remove classe desnecessária
perf(animation): otimiza performance do GSAP
test(slider): adiciona testes unitários
build: atualiza dependências do projeto
ci: configura github actions
```

## ❌ Exemplos INCORRETOS

```bash
❌ Update code           # Falta tipo
❌ Fixed stuff           # Falta tipo
❌ FEAT: nova feature    # Tipo em maiúscula
❌ feat add slider       # Falta dois pontos
❌ feat(): test          # Scope vazio
```

## 🔍 Regras

1. **Type obrigatório**: deve ser um dos tipos listados
2. **Subject obrigatório**: não pode estar vazio
3. **Subject lowercase**: sempre em minúsculas
4. **Máximo 100 caracteres**: no header
5. **Scope opcional**: mas recomendado quando aplicável

## 💡 Dicas

- Use **present tense**: "adiciona" não "adicionado"
- Seja **específico**: "corrige bug no slider" não "corrige bug"
- Use **scope** para indicar área: (slider), (animation), (docs)

## 🚀 Testando

Para testar sua mensagem antes de commitar:

```bash
echo "feat: nova feature" | npx commitlint
```

---

**🐕 Este padrão é validado automaticamente pelo Husky!**
