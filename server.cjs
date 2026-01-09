// Entry point for Node.js email server (CommonJS)
// This file uses .cjs extension to work with package.json "type": "module"
// Run: node server.cjs

// Set default environment variables
process.env.PORT = process.env.PORT || "3001";
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Load and run the email server (which uses CommonJS)
require("./backend/email-server.js");
