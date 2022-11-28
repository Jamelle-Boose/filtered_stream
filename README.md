# Tweeety

The purpose of this Node CLI app is to stream tweets in real-time using the Twitter API v2. The filtered stream endpoint and Twitter annotations were used to filter tweets based on your own topics of interest. I made this because I was trading US equities and wanted real-time updates on a stock ticker. Filtered Steam resolves this issue.

# About

- Authors: see [LICENSE](LICENSE) file
- License: [The Unlicense](https://unlicense.org/)
- Bug reports: [Issues](https://github.com/Jamelle-Boose/filtered_stream/issues)

# Design Goals

- An easily maintainable Twitter CLI app in a high level language
- A quick way to stream, get, and search users/tweets
- OAuth 2.0 Bearer Token read-only access to public information
- Maintain Twitter data in compliance with the [Twitter Developer Agreement and Policy](https://developer.twitter.com/en/developer-terms/policy)

# Installation

- Obtain a [Twitter Developer Account](https://developer.twitter.com/en/apply-for-access) and create a [Twitter App](https://developer.twitter.com/en/apps)

- Copy the Twitter Bearer Token

- Clone the repo

- Add database:

  `npm run migrate`

- Start app:

  `npm run server`

# Environment Variables

The code relies on the following variables to be available, e.g. by using an `.env` file.

```
BEARER_TOKEN=<Twitter API v2 bearer token>
```
