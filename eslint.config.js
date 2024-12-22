import js from "@eslint/js";

export default [
    js.configs.recommended,

   {
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn",
           "semi": ["error", "always"]
       },
       
       "env": {
        "browser": true,
        "node": false
        }
    
   }
];