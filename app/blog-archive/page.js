"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogArchivePage;
const react_1 = __importDefault(require("react"));
const components_1 = require("../components");
function BlogArchivePage() {
    return (<div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Blog Archive</h1>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map(id => (<div key={id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-bold">Post #{id}</h2>
            <p className="text-gray-500 mb-2">
              Published <components_1.RelativeTime base={new Date(Date.now() - id * 86400000).toISOString()}/>
            </p>
            <p>This is a summary of blog post #{id}.</p>
          </div>))}
      </div>
      <div className="mt-8">
        <components_1.Drawer />
      </div>
    </div>);
}
//# sourceMappingURL=page.js.map