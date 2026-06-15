import "./globals.css";

export const metadata = {
  title: "CEHS View",
  description: "CEHS View",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
