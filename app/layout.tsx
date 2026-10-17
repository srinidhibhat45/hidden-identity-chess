import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Hidden Identity Chess',description:'Familiar moves. Hidden identities. A whole new game.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body style={{margin:0}}>{children}</body></html>;}
