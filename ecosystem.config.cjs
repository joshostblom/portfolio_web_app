module.exports = {
  apps: [
    {
      name: "portfolio-web-app",
      script: "serve",
      args: "dist -s",
      cwd: "./",
      env: {
        PORT: 3000,
      },
    },
  ],
};
