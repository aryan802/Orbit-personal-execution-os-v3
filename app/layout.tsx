import type { Metadata, Viewport } from 'next';
import '@xyflow/react/dist/style.css';
import './globals.css';
export const metadata: Metadata = { title: 'Orbit V3 — Personal Graph Workspace', description: 'Local-first idea capture, planning, and connected graph thinking.' };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#fbfaf7' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
