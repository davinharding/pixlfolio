# Pixlfolio

> **Status: prototype, not maintained.** An early experiment from 2023, kept here for reference.

A wallet portfolio dApp for the **Pixlverse** ecosystem. Connect an Ethereum wallet to see your ERC-20 balances, your Pixlverse NFTs (Pixl Pets and Pixlverse Items), transaction history and transfers in one place.

## What's here

- Wallet sign-in with NextAuth + wagmi
- ERC-20 and NFT balance views, filtered to Pixlverse collections
- Transaction and transfer history pages
- Pixlverse branding over a Chakra UI layout

Started from the open-source [Moralis `ethereum-boilerplate`](https://github.com/ethereum-boilerplate/ethereum-boilerplate) and customized for Pixlverse.

## Run it

```bash
npm install
cp .env.local.example .env.local   # add a Moralis API key and NextAuth secret
npm run dev
```

## Stack

Next.js 13 · TypeScript · Chakra UI · wagmi · NextAuth · Moralis API

---

<sub>Built by [Davin Harding](https://davin.io) · More at [github.com/davinharding](https://github.com/davinharding)</sub>
