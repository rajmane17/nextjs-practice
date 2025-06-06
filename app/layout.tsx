import '@/app/ui/global.css';
import {inter} from "./ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* its not necessary to add antialiased class, but it smooth outs the font */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
