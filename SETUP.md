# MiaCasa — Setup Guide

## Required Environment Variables

Set these in your hosting platform's environment variables:

| Variable | Description |
|---|---|
| `GOOGLE_SHEETS_URL` | Your Google Apps Script deployment URL |
| `ADMIN_USER` | Admin panel login email |
| `ADMIN_PASSWORD` | Admin panel password |
| `GAS_ADMIN_TOKEN` | The `ADMIN_TOKEN` value from your `Code.gs` file |

## What is GAS_ADMIN_TOKEN?

Open your `Code.gs` in Google Apps Script. Find this line near the top:

```js
const ADMIN_TOKEN = "super_secure_token_123";