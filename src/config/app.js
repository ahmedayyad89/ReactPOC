const common = {
  captchaSiteKey: '6LeYG9AZAAAAAND6X5AlMh87E_icZ1ibE8DZ2Ia0',
  numverifyKey: 'b9890ccc20266331fa1e237562fb16be',
  universalApiToken: 'i648o79EQWzgORx5MkImy6QQ6pOugyz27DCtypOFe4RLniSKdD4Hzux7pvIH7IcfuK8',
  userEmailForUniversalApiToken: 'farhan.ansari@axline.com'
};

const dev = {
  LOGGER_ENABLE: true,
  API_BASE_URL: "http://localhost:3003/api/",
  RECAPTCHA_SECRET_KEY: "6LdQQNAZAAAAAF8gsh1KDrdnjq9EqgZ8rKiL1Vwv",
};

const prod = {
  LOGGER_ENABLE: false,
  API_BASE_URL: "production/api/",
  RECAPTCHA_SECRET_KEY: "6LdQQNAZAAAAAF8gsh1KDrdnjq9EqgZ8rKiL1Vwv"
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  ...common,
  ...config
};

