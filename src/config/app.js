const common = {
  captchaSiteKey: '6LeYG9AZAAAAAND6X5AlMh87E_icZ1ibE8DZ2Ia0',
  numverifyKey: '267e42d6523351db080a0800a3836be7',
  universalApiToken: 'i648o79EQWzgORx5MkImy6QQ6pOugyz27DCtypOFe4RLniSKdD4Hzux7pvIH7IcfuK8',
  userEmailForUniversalApiToken: 'farhan.ansari@axline.com'
};

const dev = {
  LOGGER_ENABLE: true,
  API_BASE_URL: "http://localhost:3003/api/"
};

const prod = {
  LOGGER_ENABLE: false,
  API_BASE_URL: "production/api/"
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  ...common,
  ...config
};

