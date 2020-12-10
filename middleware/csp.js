// This module defines a Content Security Policy (CSP) to disallow
// inline scripts and content from untrusted sources.

const { contentSecurityPolicy } = require('helmet')

module.exports = contentSecurityPolicy({
  directives: {
    defaultSrc: ["'none'"],
    connectSrc: [
      "'self'",
      '*.algolia.net',
      '*.algolianet.com',
      '*.google-analytics.com/*',
      'sc.lfeeder.com/*',
      'www.google-analytics.com/'
    ],
    fontSrc: [
      "'self'",
      'data:',
      'github-images.s3.amazonaws.com'
    ],
    imgSrc: [
      "'self'",
      'github.githubassets.com',
      'github-images.s3.amazonaws.com',
      'octodex.github.com',
      'www.googletagmanager.com',
      'tr.lfeeder.com',
      'placehold.it'
    ],
    objectSrc: [
      "'self'"
    ],
    scriptSrc: [
      "'self'",
      'data:',
      "www.googletagmanager.com",
      "static.ads-twitter.com",
      "sc.lfeeder.com/lftracker_v1_lYNOR8xK1oqaWQJZ.js",
      "'unsafe-eval'", // exception for Algolia instantsearch
      "'unsafe-inline'"
    ],
    frameSrc: [ // exceptions for GraphQL Explorer
      'https://www.googletagmanager.com', // production env
      'http://localhost:3000' // development env
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'"
    ],
    childSrc: [
      "'self'" // exception for search in deprecated GHE versions
    ]
  }
})
