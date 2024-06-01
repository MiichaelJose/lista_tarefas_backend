import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: ["error", "always"],       // Exige ponto e vírgula no final das declarações
      quotes: ["error", "double"]      // Exige o uso de aspas duplas para strings
    }
  },
  ...tseslint.configs.recommended,
];