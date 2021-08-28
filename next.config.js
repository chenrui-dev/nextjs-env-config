/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    GOOGLE_URL: process.env.GOOGLE_URL,
    MEETUP_HELP_URL: process.env.MEETUP_HELP_URL,
  },
}
