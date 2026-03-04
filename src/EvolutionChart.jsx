import React from 'react';
import { fmD } from './utils';

const EvolutionChart = ({ stats, color }) => {
    if (!stats || stats.length === 0) return null;

    const chartData = stats.slice(-7);
    const w = 320;
    const h = 140;
    const padX = 25;
    const padYTop = 30;
    const padYBot = 20;

    const weights = chartData.map(s => s.maxWeight);
    const minW = Math.max(0, Math.min(...weights) - 5);
    const maxW = Math.max(...weights) + 5;
    const range = maxW - minW || 1;

    const points = chartData.map((s, i) => {
        const x = padX + (i * ((w - padX * 2) / Math.max(chartData.length - 1, 1)));
        const y = h - padYBot - ((s.maxWeight - minW) / range) * (h - padYTop - padYBot);
        return { x, y, weight: s.maxWeight, date: fmD(s.date) };
    });

    if (points.length === 1) points[0].x = w / 2;

    const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
    const areaD = points.length > 1
        ? `${pathD} L ${points[points.length - 1].x},${h - padYBot} L ${points[0].x},${h - padYBot} Z`
        : '';

    return (
        <div className="w-full overflow-x-auto no-scrollbar pb-2">
            <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible drop-shadow-sm">
                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.0" />
                    </linearGradient>
                </defs>
                <line x1={padX} y1={h - padYBot} x2={w - padX} y2={h - padYBot} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                {points.length > 1 && <path d={areaD} fill="url(#chartGradient)" />}
                <path d={pathD} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {points.map((p, i) => (
                    <g key={i}>
                        <circle cx={p.x} cy={p.y} r="6" fill="#fff" stroke={color} strokeWidth="2.5" />
                        <text x={p.x} y={p.y - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill={color} className="select-none">
                            {p.weight}
                        </text>
                        <text x={p.x} y={h - 4} textAnchor="middle" fontSize="9" fontWeight="600" fill="#94a3b8" className="select-none">
                            {p.date}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default EvolutionChart;
