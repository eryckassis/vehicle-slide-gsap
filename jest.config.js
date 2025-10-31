/**
 * Jest Configuration
 *
 * 🧪 ANALOGIA: Este é o manual do inspetor de qualidade
 * - Define como os testes serão executados
 * - Configura ambiente de testes (DOM simulado)
 * - Gera relatórios de cobertura
 *
 * @type {import('jest').Config}
 */

export default {
  // Preset para TypeScript
  preset: 'ts-jest',

  // Ambiente de testes (jsdom simula um navegador)
  testEnvironment: 'jsdom',

  // Diretório raiz dos testes
  roots: ['<rootDir>/src', '<rootDir>/tests'],

  // Extensões de arquivos de teste
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],

  // Transformação de arquivos TypeScript
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          target: 'ES2022',
          module: 'CommonJS',
          lib: ['ES2022', 'DOM', 'DOM.Iterable'],
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          skipLibCheck: true,
          verbatimModuleSyntax: false,
        },
      },
    ],
  },

  // Arquivos de setup
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],

  // Cobertura de código
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.ts', // Arquivo de entrada não precisa de teste
  ],

  // Limite mínimo de cobertura (meta profissional)
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },

  // Diretório de cobertura
  coverageDirectory: 'coverage',

  // Formato dos relatórios
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],

  // Módulos a ignorar
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/build/'],

  // Limpar mocks automaticamente entre testes
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,

  // Verbose output
  verbose: true,

  // Mock de assets estáticos
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/tests/__mocks__/fileMock.ts',
  },
};
