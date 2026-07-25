import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from 'recharts';
import { useInView } from 'framer-motion';

// Yearly growth data for all 4 metrics
const zigzagPerformanceData = [
    { year: '2023', projects: 85, clients: 25, uptime: 98.5, rating: 4.2 },
    { year: '2024', projects: 190, clients: 60, uptime: 99.1, rating: 4.6 },
    { year: '2025', projects: 260, clients: 80, uptime: 98.9, rating: 4.5 },
    { year: '2026', projects: 370, clients: 110, uptime: 99.8, rating: 4.9 },
];

// --- Custom Tooltip Component for Unique Dynamic Text Colors ---
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#0f172a] border border-slate-700 p-4 rounded-xl shadow-2xl space-y-2 font-sans">
                <p className="text-white font-bold text-sm border-b border-slate-800 pb-1">
                    Year: {label}
                </p>
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} className="flex items-center gap-2 text-xs font-semibold">
                        <span
                            className="w-2.5 h-2.5 rounded-full inline-block"
                            style={{ backgroundColor: entry.color }}
                        ></span>
                        <span style={{ color: entry.color }}>
                            {entry.name}: {entry.value}
                            {entry.dataKey === 'uptime'
                                ? '%'
                                : entry.dataKey === 'projects' || entry.dataKey === 'clients'
                                    ? '+'
                                    : ' / 5.0'}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default function ProfessionalZigzagChart() {
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-50px' });

    // Custom Legend Formatter for Dynamic Matching Colors
    const renderColorfulLegendText = (value, entry) => {
        return (
            <span style={{ color: entry.color }} className="font-semibold text-sm mr-2">
                {value}
            </span>
        );
    };

    return (
        <section
            ref={containerRef}
            className="bg-[#050B14] p-6 sm:p-10 rounded-2xl border border-slate-800/80 text-white font-sans max-w-7xl mx-auto my-8 shadow-2xl"
        >
            {/* Header Section */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Company Growth & Quality Performance
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base">
                        Multi-metric performance trend (2023 – 2026) showing scale and quality standards.
                    </p>
                </div>
            </div>

            {/* Main Chart Box */}
            <div className="bg-[#0B132B]/80 border border-slate-800/80 p-6 rounded-xl shadow-xl">
                <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={zigzagPerformanceData}
                            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                        >
                            {/* Dark Grid Lines */}
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />

                            {/* X-Axis (Years) */}
                            <XAxis
                                dataKey="year"
                                stroke="#64748b"
                                tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 600 }}
                            />

                            {/* Left Y-Axis for Projects & Clients */}
                            <YAxis
                                yAxisId="left"
                                stroke="#64748b"
                                tick={{ fill: '#ffffff', fontSize: 12 }}
                                domain={[0, 400]}
                            />

                            {/* Right Y-Axis for Uptime & Rating */}
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                stroke="#64748b"
                                tick={{ fill: '#ffffff', fontSize: 12 }}
                                domain={[0, 100]}
                            />

                            {/* Custom Tooltip with Unique Dynamic Colors on Hover */}
                            <Tooltip
                                content={<CustomTooltip />}
                                cursor={{ stroke: '#334155', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />

                            {/* Dynamic Color Legend */}
                            <Legend
                                verticalAlign="top"
                                height={45}
                                wrapperStyle={{ paddingBottom: '10px' }}
                                formatter={renderColorfulLegendText}
                            />

                            {/* 1. Projects Delivered (Emerald Green) */}
                            <Line
                                yAxisId="left"
                                type="linear"
                                dataKey="projects"
                                name="Projects Delivered (370+)"
                                stroke="#00e5a3"
                                strokeWidth={3}
                                dot={{ fill: '#00e5a3', r: 5, strokeWidth: 2, stroke: '#050B14' }}
                                activeDot={{ r: 8, strokeWidth: 0 }}
                                isAnimationActive={isInView}
                                animationDuration={2000}
                                animationEasing="ease-out"
                            />

                            {/* 2. Enterprise Clients (Warm Amber/Yellow) */}
                            <Line
                                yAxisId="left"
                                type="linear"
                                dataKey="clients"
                                name="Enterprise Clients (110+)"
                                stroke="#ffb703"
                                strokeWidth={3}
                                dot={{ fill: '#ffb703', r: 5, strokeWidth: 2, stroke: '#050B14' }}
                                activeDot={{ r: 8, strokeWidth: 0 }}
                                isAnimationActive={isInView}
                                animationDuration={2200}
                                animationEasing="ease-out"
                            />

                            {/* 3. System Uptime SLA (Pure White) */}
                            <Line
                                yAxisId="right"
                                type="linear"
                                dataKey="uptime"
                                name="System Uptime SLA (99.8%)"
                                stroke="#ffffff"
                                strokeWidth={3}
                                dot={{ fill: '#ffffff', r: 5, strokeWidth: 2, stroke: '#050B14' }}
                                activeDot={{ r: 8, strokeWidth: 0 }}
                                isAnimationActive={isInView}
                                animationDuration={2400}
                                animationEasing="ease-out"
                            />

                            {/* 4. Client Rating (Cyan) */}
                            <Line
                                yAxisId="right"
                                type="linear"
                                dataKey="rating"
                                name="Client Rating (4.9 / 5.0)"
                                stroke="#22d3ee"
                                strokeWidth={3}
                                strokeDasharray="4 4"
                                dot={{ fill: '#22d3ee', r: 5, strokeWidth: 2, stroke: '#050B14' }}
                                activeDot={{ r: 8, strokeWidth: 0 }}
                                isAnimationActive={isInView}
                                animationDuration={2600}
                                animationEasing="ease-out"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}