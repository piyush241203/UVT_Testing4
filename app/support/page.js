"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SupportPage;
const react_1 = __importDefault(require("react"));
const components_1 = require("../components");
function SupportPage() {
    return (<div className="p-10 bg-indigo-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-6">Support Center</h1>
      <p className="mb-6 text-lg text-indigo-700">How can we assist you today?</p>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit a Request</h2>
        <components_1.DynamicTokens />
      </div>
      <components_1.Modal />
    </div>);
}
//# sourceMappingURL=page.js.map