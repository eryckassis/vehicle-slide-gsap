/**
 * Commitlint Configuration
 *
 * 📝 ANALOGIA: Este é o "Livro de Registros" do prédio
 * - Padroniza como cada entrada (commit) deve ser registrada
 * - Facilita geração de changelogs automáticos
 * - Permite que qualquer pessoa entenda o histórico
 *
 * 📚 PADRÃO: Conventional Commits
 * Formato: <type>(<scope>): <subject>
 *
 * Tipos permitidos:
 * - feat:     Nova funcionalidade (✨)
 * - fix:      Correção de bug (🐛)
 * - docs:     Documentação (📝)
 * - style:    Formatação, ponto e vírgula (💄)
 * - refactor: Refatoração sem mudar funcionalidade (♻️)
 * - perf:     Melhoria de performance (⚡)
 * - test:     Adicionar testes (✅)
 * - build:    Build system, dependências (🔧)
 * - ci:       CI/CD configs (👷)
 * - chore:    Tarefas diversas (🔨)
 * - revert:   Reverter commit (⏪)
 *
 * Exemplos:
 * ✅ feat(slider): adiciona navegação por teclado
 * ✅ fix(animation): corrige bug no GSAP timeline
 * ✅ docs: atualiza README com instruções
 * ❌ update code
 * ❌ fixed stuff
 */

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type obrigatório
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    // Subject não pode estar vazio
    'subject-empty': [2, 'never'],
    // Subject em lowercase
    'subject-case': [2, 'always', 'lower-case'],
    // Subject máximo 100 caracteres
    'subject-max-length': [2, 'always', 100],
    // Header máximo 100 caracteres
    'header-max-length': [2, 'always', 100],
    // Body com linha em branco
    'body-leading-blank': [1, 'always'],
    // Footer com linha em branco
    'footer-leading-blank': [1, 'always'],
  },
};
