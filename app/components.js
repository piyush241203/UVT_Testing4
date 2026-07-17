'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveClock = LiveClock;
exports.RelativeTime = RelativeTime;
exports.CountdownTimer = CountdownTimer;
exports.DynamicTokens = DynamicTokens;
exports.SkeletonLoader = SkeletonLoader;
exports.ProgressBar = ProgressBar;
exports.ChartBar = ChartBar;
exports.RandomAvatar = RandomAvatar;
exports.CanvasAnimation = CanvasAnimation;
exports.Modal = Modal;
exports.Drawer = Drawer;
const react_1 = __importStar(require("react"));
function LiveClock() {
    const [time, setTime] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        setTime(new Date().toLocaleTimeString());
        const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(t);
    }, []);
    return <span className="dynamic-time" data-uvt-dynamic="clock">{time}</span>;
}
function RelativeTime({ base }) {
    const [label, setLabel] = (0, react_1.useState)('just now');
    (0, react_1.useEffect)(() => {
        const baseMs = new Date(base).getTime();
        const update = () => {
            const diff = Math.floor((Date.now() - baseMs) / 1000);
            if (diff < 60)
                setLabel(`${diff}s ago`);
            else if (diff < 3600)
                setLabel(`${Math.floor(diff / 60)}m ago`);
            else
                setLabel(`${Math.floor(diff / 3600)}h ago`);
        };
        update();
        const t = setInterval(update, 5000);
        return () => clearInterval(t);
    }, [base]);
    return <span className="dynamic-reltime" data-uvt-dynamic="relative-time">{label}</span>;
}
function CountdownTimer({ seconds }) {
    const [rem, setRem] = (0, react_1.useState)(seconds);
    (0, react_1.useEffect)(() => {
        if (rem <= 0)
            return;
        const t = setInterval(() => setRem(r => Math.max(0, r - 1)), 1000);
        return () => clearInterval(t);
    }, [rem]);
    const m = String(Math.floor(rem / 60)).padStart(2, '0');
    const s = String(rem % 60).padStart(2, '0');
    return <span className="dynamic-countdown" data-uvt-dynamic="countdown">{m}:{s}</span>;
}
function DynamicTokens() {
    const uuid = (0, react_1.useRef)(`f81d4fae-7dec-11d0-a765-${Math.random().toString(16).substring(2, 14)}`);
    const sessionId = (0, react_1.useRef)(`sess_${Math.random().toString(36).substring(2, 18)}`);
    const requestId = (0, react_1.useRef)(`req-${Math.random().toString(36).substring(2, 10)}`);
    const token = (0, react_1.useRef)(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${Math.random().toString(36).substring(7)}`);
    const createdAt = (0, react_1.useRef)(new Date().toISOString());
    const updatedAt = (0, react_1.useRef)(new Date().toISOString());
    return (<div style={{ padding: '12px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '12px', fontSize: '12px' }}>
      <div><strong>UUID:</strong> <span className="dynamic-uuid" data-uvt-dynamic="uuid">{uuid.current}</span></div>
      <div><strong>Session:</strong> <span className="dynamic-session" data-uvt-dynamic="session-id">{sessionId.current}</span></div>
      <div><strong>Request ID:</strong> <span className="dynamic-requestid" data-uvt-dynamic="request-id">{requestId.current}</span></div>
      <div><strong>JWT:</strong> <span className="dynamic-token" data-uvt-dynamic="token" style={{ wordBreak: 'break-all' }}>{token.current}</span></div>
      <div><strong>Created At:</strong> <span className="dynamic-createdat" data-uvt-dynamic="timestamp">{createdAt.current}</span></div>
      <div><strong>Updated At:</strong> <span className="dynamic-updatedat" data-uvt-dynamic="timestamp">{updatedAt.current}</span></div>
    </div>);
}
function SkeletonLoader() {
    return (<div style={{ animation: 'skeletonPulse 1.4s ease-in-out infinite' }}>
      <div style={{ height: '16px', background: '#e0e0e0', borderRadius: '4px', marginBottom: '8px' }}/>
      <div style={{ height: '16px', background: '#e0e0e0', borderRadius: '4px', width: '80%', marginBottom: '8px' }}/>
      <div style={{ height: '16px', background: '#e0e0e0', borderRadius: '4px', width: '60%' }}/>
      <style>{`@keyframes skeletonPulse { 0%,100%{opacity:1} 50%{opacity:.5} }`}</style>
    </div>);
}
function ProgressBar({ value }) {
    const [progress, setProgress] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        const t = setInterval(() => setProgress(p => (p >= 100 ? 0 : p + 1)), 200);
        return () => clearInterval(t);
    }, []);
    return (<div>
      <div style={{ background: '#e0e0e0', borderRadius: '999px', height: '8px', overflow: 'hidden' }}>
        <div data-uvt-dynamic="progress-bar" style={{ width: `${progress}%`, height: '100%', background: '#646cff', transition: 'width 0.2s' }}/>
      </div>
      <small>{progress}% complete</small>
    </div>);
}
function ChartBar({ data, label }) {
    const max = Math.max(...data, 1);
    return (<div>
      <h5 style={{ marginBottom: '8px' }}>{label}</h5>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px' }}>
        {data.map((v, i) => (<div key={i} style={{
                width: '24px',
                height: `${(v / max) * 80}px`,
                background: `hsl(${(i * 40) % 360}, 60%, 55%)`,
                borderRadius: '3px 3px 0 0',
            }}/>))}
      </div>
    </div>);
}
function RandomAvatar({ seed }) {
    return <img src={`https://i.pravatar.cc/40?u=${seed}`} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%' }}/>;
}
function CanvasAnimation() {
    const canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        let animId;
        let x = 0;
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ff6480';
            ctx.beginPath();
            ctx.arc(x, 50, 20, 0, 2 * Math.PI);
            ctx.fill();
            x = (x + 2) % canvas.width;
            animId = requestAnimationFrame(render);
        };
        render();
        return () => cancelAnimationFrame(animId);
    }, []);
    return (<div style={{ margin: '12px 0' }}>
      <h5 style={{ margin: '0 0 6px' }}>Canvas Animation</h5>
      <canvas data-uvt-dynamic="canvas" ref={canvasRef} width="300" height="100" style={{ border: '1px solid #ccc', borderRadius: '4px' }}/>
    </div>);
}
function Modal() {
    const [open, setOpen] = (0, react_1.useState)(false);
    return (<div style={{ marginBottom: '16px' }}>
      <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Open Modal
      </button>
      {open && (<div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', minWidth: '300px' }}>
            <h3 style={{ marginTop: 0 }}>Modal Title</h3>
            <p>This is a dynamically generated modal overlay.</p>
            <DynamicTokens />
            <button onClick={() => setOpen(false)} style={{ marginTop: '16px', padding: '8px 16px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>)}
    </div>);
}
function Drawer() {
    const [open, setOpen] = (0, react_1.useState)(false);
    return (<div style={{ marginBottom: '16px' }}>
      <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Open Drawer
      </button>
      {open && (<div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} onClick={() => setOpen(false)}/>
          <div style={{ position: 'relative', background: '#fff', width: '300px', height: '100%', padding: '24px', boxShadow: '-4px 0 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginTop: 0 }}>Settings Drawer</h3>
            <p>Modify your preferences here.</p>
            <LiveClock />
            <div style={{ marginTop: '24px' }}>
              <button onClick={() => setOpen(false)} style={{ width: '100%', padding: '8px 16px', background: '#6b7280', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Close Drawer
              </button>
            </div>
          </div>
        </div>)}
    </div>);
}
//# sourceMappingURL=components.js.map