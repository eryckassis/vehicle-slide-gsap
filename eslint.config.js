// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

/**
 * ESLint Configuration (Flat Config - ESLint 9.x)
 *
 * 📚 ANALOGIA: Este é o "Código de Obras" do nosso prédio
 * - Define as regras que TODO código deve seguir
 * - Previne bugs antes mesmo de rodar o código
 * - Mantém consistência entre diferentes desenvolvedores
 */

export default tseslint.config(
  // Ignora arquivos de build e dependências
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.vite/**',
      '**/coverage/**',
      '**/.husky/**',
      'eslint.config.js', // Ignora a própria config
      'commitlint.config.js', // Ignora config do commitlint
    ],
  },

  // Configuração base do ESLint
  eslint.configs.recommended,

  // Configuração TypeScript (strict)
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Configuração customizada
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // TypeScript Rules (Best Practices 2025)
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      // General JavaScript/TypeScript Rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],

      // Modern JS
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',
    },
  },

  // Prettier (sempre por último para sobrescrever regras de formatação)
  prettier,
);
