
'use client'

import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import dynamic from 'next/dynamic'


const Menu = dynamic(() => import('../components/layout/Menu'))
const SubMenu = dynamic(() => import('../components/layout/SubMenu'))


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Menu/>
        <SubMenu/>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
