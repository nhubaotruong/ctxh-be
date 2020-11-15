module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5375),
  url: '18.141.200.176',
  admin: {
    url: '/',
    serveAdminPanel: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '17c75e525fc5b1c1a59c03206679a763'),
    },
  },
});
