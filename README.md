# TradeGPT - AI-Powered Trading Platform on Somnia

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Somnia Network](https://img.shields.io/badge/Network-Somnia-blueviolet)](https://somnia.network)

## Overview

TradeGPT is an innovative AI-powered trading platform built on the Somnia blockchain network. It combines conversational AI with decentralized finance (DeFi) to provide users with an intelligent trading assistant that can analyze markets, suggest trades, and execute transactions through smart accounts.

### Key Features

- **AI Trading Assistant**: Natural language interface powered by Google's Gemini AI
- **Smart Account Architecture**: Secure, EOA-controlled smart accounts for AI agent proposals
- **Real-time Market Analysis**: Live cryptocurrency price feeds and market data
- **Automated Trade Execution**: AI-suggested trades with user approval
- **Paper Trading Mode**: Practice trading without real funds
- **Multi-Token Support**: Trade USDC, WETH, WBTC, and WSOL
- **Portfolio Analytics**: Comprehensive tracking of trades and performance
- **Token Faucet**: Get free test tokens for experimentation

## Architecture

TradeGPT consists of three main components:

### 1. Smart Contracts (Solidity + Hardhat)
- **SomniaTradeFactory**: Deploys and manages smart account creation
- **SomniaTradeAccount**: User-controlled smart accounts with AI agent capabilities
- **SomniaDexRouter**: DEX integration for token swaps
- **MockERC20 Tokens**: Test tokens for trading (USDC, WETH, WBTC, WSOL)

### 2. Backend (Node.js + Express + TypeScript)
- RESTful API for chat and trade management
- Google Gemini AI integration for trade analysis
- Real-time market data fetching
- WebSocket support for live updates
- Trade state management and persistence

### 3. Frontend (React + Vite + TypeScript)
- Modern, responsive UI with Material-UI
- Web3 integration via wagmi and viem
- RainbowKit for wallet connectivity
- Real-time chart visualization
- Multi-tab interface for trading, analytics, and portfolio management

## Technology Stack

### Smart Contracts
- Solidity ^0.8.20
- Hardhat for development and testing
- OpenZeppelin contracts for security
- Ethers.js v6

### Backend
- Node.js + Express
- TypeScript
- Google Generative AI (Gemini)
- SQLite for data persistence
- WebSocket for real-time updates

### Frontend
- React 18 + Vite
- TypeScript
- wagmi + viem for Web3 interactions
- RainbowKit for wallet connections
- Material-UI (MUI) for components
- Lightweight Charts for data visualization

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git
- MetaMask or compatible Web3 wallet
- Somnia testnet STT tokens

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd SOMNIADEV
```

2. **Install dependencies**
```bash
# Install contracts dependencies
cd contracts
npm install

# Install backend dependencies
cd ../backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Configure environment variables**

Create `.env` files in each directory:

**contracts/.env**
```env
SOMNIA_RPC_URL=https://dream-rpc.somnia.network
PRIVATE_KEY=your_private_key_here
```

**backend/.env**
```env
PORT=4000
GEMINI_API_KEY=your_gemini_api_key
SOMNIA_FACTORY_ADDRESS=<deployed_factory_address>
SOMNIA_ROUTER_ADDRESS=<deployed_router_address>
SOMNIA_USDC_ADDRESS=<deployed_usdc_address>
SOMNIA_ETH_ADDRESS=<deployed_weth_address>
SOMNIA_BTC_ADDRESS=<deployed_wbtc_address>
SOMNIA_SOL_ADDRESS=<deployed_wsol_address>
```

**frontend/.env**
```env
VITE_BACKEND_URL=http://localhost:4000/api
VITE_SOMNIA_RPC=https://dream-rpc.somnia.network
VITE_SOMNIA_CHAIN_ID=50312
VITE_WALLETCONNECT_ID=your_walletconnect_project_id
VITE_FACTORY_ADDRESS=<deployed_factory_address>
VITE_ROUTER_ADDRESS=<deployed_router_address>
VITE_USDC_ADDRESS=<deployed_usdc_address>
VITE_WETH_ADDRESS=<deployed_weth_address>
VITE_WBTC_ADDRESS=<deployed_wbtc_address>
VITE_WSOL_ADDRESS=<deployed_wsol_address>
```

4. **Deploy contracts**
```bash
cd contracts
npx hardhat run scripts/deployAll.ts --network somniaTestnet
```

5. **Start the backend**
```bash
cd backend
npm run dev
```

6. **Start the frontend**
```bash
cd frontend
npm run dev
```

7. **Access the application**
Open your browser and navigate to `http://localhost:5173`

## Usage

### 1. Connect Your Wallet
Click "Connect Wallet" and connect your MetaMask or compatible wallet to the Somnia testnet.

### 2. Create Smart Account
On first visit, you'll be prompted to create a smart account. This is required for AI-powered trading.

### 3. Get Test Tokens
Navigate to the "Faucet" tab and claim free test tokens (USDC, WETH, WBTC, WSOL).

### 4. Deposit Funds
Go to the "Analytics" tab and deposit tokens from your wallet to your smart account.

### 5. Approve Router
Click "Approve Router for Trading" to allow the DEX router to execute trades on your behalf.

### 6. Start Trading
- Chat with the AI assistant about market analysis and trading strategies
- The AI will suggest trades based on your conversations
- Review trade parameters (collateral, leverage, stop-loss, take-profit)
- Execute trades with one click

### 7. Monitor Portfolio
Track your trade history, performance metrics, and portfolio analytics in real-time.

## Project Structure

```
SOMNIADEV/
├── contracts/              # Smart contracts
│   ├── contracts/         # Solidity source files
│   ├── scripts/          # Deployment scripts
│   ├── test/             # Contract tests
│   └── hardhat.config.ts # Hardhat configuration
├── backend/               # Backend server
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── index.ts      # Server entry point
│   └── package.json
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── api/          # API client
│   │   └── App.tsx       # Main app component
│   └── package.json
└── docs/                  # Documentation
```

## Smart Contract Addresses (Somnia Testnet)

All contracts are deployed and verified on Somnia Testnet. You can view them on the [Somnia Block Explorer](https://somnia-testnet.socialscan.io).

### Core Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| **SomniaTradeFactory** | `0xE1c29362B5e79697dc90db10D2C72A030b0CCa9f` | Factory for creating smart trading accounts |
| **SomniaDexRouter** | `0xB40C0e3Ddd3eF65B3CCe619cB48928E5a3E8fFA1` | DEX router for trade execution |
| **MockDexRouter** | `0xe92E87C8DAaEb3a176e78AD900058411116439d5` | Mock DEX for testnet swaps (1:1 rate) |

### Test Tokens

| Token | Address | Decimals | Faucet |
|-------|---------|----------|--------|
| **USDC** (Test USD Coin) | `0xdC58352930EfC7Eb13AFB281f6AbC6B26aC276dC` | 6 | 1,000 per claim |
| **WETH** (Wrapped ETH) | `0xF0cADD95ca96b492A0b27dA643170B5670e788eF` | 18 | 1,000 per claim |
| **WBTC** (Wrapped BTC) | `0xE3741dDBdC45403bEdf5E701800267BFf90e2deA` | 8 | 1,000 per claim |
| **WSOL** (Wrapped SOL) | `0xA9D7c1A16354AB5E54a2c9c28281E10c41C4D091` | 9 | 1,000 per claim |

### Quick Links

- **View Factory Contract**: https://somnia-testnet.socialscan.io/address/0xE1c29362B5e79697dc90db10D2C72A030b0CCa9f
- **View Router Contract**: https://somnia-testnet.socialscan.io/address/0xB40C0e3Ddd3eF65B3CCe619cB48928E5a3E8fFA1
- **Network Info**: Somnia Testnet (Chain ID: 50312)
- **RPC Endpoint**: https://dream-rpc.somnia.network
- **Block Explorer**: https://somnia-testnet.socialscan.io

### Getting Test Tokens

Use the built-in faucet in the application:
1. Navigate to the "Faucet" tab
2. Click "Get All Tokens" or select individual tokens
3. Each faucet call gives you 1,000 tokens
4. Free and unlimited for testing!

## Documentation

Detailed documentation is available in the `/docs` folder:

- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Setup Guide](./docs/SETUP.md)
- [Smart Contracts Documentation](./docs/SMART_CONTRACTS.md)
- [API Documentation](./docs/API.md)
- [User Guide](./docs/USER_GUIDE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## Features in Detail

### AI Trading Assistant
The AI assistant uses Google's Gemini to:
- Analyze market conditions and trends
- Provide trading suggestions based on technical analysis
- Explain trading concepts and strategies
- Generate trade setups with recommended parameters

### Smart Account System
- Each user has a dedicated smart account deployed from the factory
- Accounts are controlled by the user's EOA (Externally Owned Account)
- AI agents can propose trades, but only the owner can approve
- Supports token deposits, withdrawals, and DEX interactions

### Trade Execution Flow
1. User chats with AI about trading
2. AI analyzes market and suggests a trade
3. Trade parameters are displayed in the composer panel
4. User can adjust collateral, leverage, stop-loss, and take-profit
5. User clicks "Execute Trade" to approve
6. Smart account executes the trade via DEX router
7. Trade is recorded and tracked in the portfolio

### Paper Trading Mode
- Practice trading without risking real funds
- Simulates trade execution and portfolio tracking
- Perfect for learning and testing strategies
- Toggle between paper and live trading modes

## Security Features

- Smart accounts are non-custodial (user always in control)
- AI agents can only propose, not execute trades
- All transactions require explicit user approval
- Token approvals are scoped to specific contracts
- Environment variables keep sensitive data secure

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

### Smart Contracts
```bash
cd contracts
npx hardhat test
```

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## Troubleshooting

### Common Issues

**1. "gas limit is less than 21000"**
- Ensure you have enough STT tokens for gas fees
- Try increasing the gas limit in transaction parameters

**2. "execution reverted"**
- Check that tokens are approved for the router
- Ensure sufficient token balance in smart account
- Verify contract addresses in .env files

**3. Smart account not found**
- Clear browser cache and reconnect wallet
- Create a new smart account from the setup screen

**4. AI not responding**
- Check that backend server is running
- Verify GEMINI_API_KEY is set correctly
- Check network connectivity

## Roadmap

- [ ] Support for additional DEXes (Uniswap V3, Curve)
- [ ] Advanced charting with technical indicators
- [ ] Social trading features and leaderboards
- [ ] Mobile app (React Native)
- [ ] Integration with more AI models
- [ ] Advanced risk management tools
- [ ] Multi-chain support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built on [Somnia Network](https://somnia.network)
- Powered by [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- UI components by [Material-UI](https://mui.com/)
- Web3 integrations via [wagmi](https://wagmi.sh/) and [viem](https://viem.sh/)

## Support

For questions, issues, or support:
- Open an issue on GitHub
- Join our community Discord
- Check the documentation in `/docs`

## Disclaimer

This software is provided for educational and demonstration purposes. Trading cryptocurrencies carries risk. Always do your own research and never invest more than you can afford to lose. This is testnet software and should not be used with real funds without proper auditing.
