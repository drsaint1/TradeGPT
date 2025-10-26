import cors from "cors";
import express from "express";
import http from "http";
import { appConfig, securityConfig } from "./config";
import { MarketDataService } from "./services/marketDataService";
import { AiRouter } from "./services/aiRouter";
import { TradeTransactionBuilder } from "./services/tradeTransactionBuilder";
import { StopLossMonitor } from "./services/stopLossMonitor";
import { TradeStore } from "./store/tradeStore";
import { ConversationStore } from "./store/conversationStore";
import { SocketHub } from "./websocket";
import { buildChatRouter } from "./routes/chat";
import { buildTradeRouter } from "./routes/trades";
import { buildAccountRouter } from "./routes/accounts";

const app = express();

app.use(
  cors({
    origin: securityConfig.corsOrigins.includes("*") ? true : securityConfig.corsOrigins,
    credentials: true,
  }),
);
app.use(express.json());

const marketData = new MarketDataService();
const aiRouter = new AiRouter(marketData);
const tradeStore = new TradeStore();
const conversations = new ConversationStore();
const sockets = new SocketHub();
const transactionBuilder = new TradeTransactionBuilder();

const stopLossMonitor = new StopLossMonitor(tradeStore, sockets, appConfig.somniaRpcUrl);
stopLossMonitor.start(15000);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/stop-loss/status", (_req, res) => {
  res.json(stopLossMonitor.getStatus());
});

app.use("/api/chat", buildChatRouter(aiRouter, conversations, tradeStore, sockets, transactionBuilder));
app.use("/api/trades", buildTradeRouter(tradeStore, sockets));
app.use("/api/accounts", buildAccountRouter());

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Request failed", err);
  if (err instanceof Error) {
    res.status(400).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Unknown error" });
  }
});

const server = http.createServer(app);
sockets.attach(server);

server.listen(appConfig.port, () => {
  console.log(`TradeGPT backend listening on port ${appConfig.port}`);
});
