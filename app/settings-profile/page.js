"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsProfilePage;
const react_1 = __importDefault(require("react"));
const components_1 = require("../components");
function SettingsProfilePage() {
    return (<div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Profile Settings</h1>
      
      <div className="flex items-center space-x-6 mb-8 p-4 bg-gray-50 rounded-lg">
        <components_1.RandomAvatar seed="user-1234"/>
        <div>
          <h2 className="text-xl font-bold">Jane Doe</h2>
          <p className="text-gray-500">jane.doe@example.com</p>
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input type="text" defaultValue="janedoe" className="w-full border rounded p-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Timezone</label>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-800">
            Current Local Time: <components_1.LiveClock />
          </div>
        </div>
        <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Save Changes
        </button>
      </form>
    </div>);
}
//# sourceMappingURL=page.js.map