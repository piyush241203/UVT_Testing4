"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const react_1 = __importDefault(require("react"));
exports.metadata = {
    title: 'Next.js Demo App',
    description: 'Next.js App Router visual testing verification application'
};
function RootLayout({ children }) {
    return (<html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>);
}
//# sourceMappingURL=layout.js.map