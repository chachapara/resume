import "./globals.css";

// import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.css";

const inter = { subsets: ["latin"] };

<script>
  
</script>

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/PlayfairDisplay/stylesheet.css" rel="stylesheet"></link>
        <link href="/SourceSansPro/stylesheet.css" rel="stylesheet"></link>
        <link href="/Poppins/stylesheet.css" rel="stylesheet"></link>
        <title>nTop</title>
        <meta property="og:title" content="nTop" name="og:title" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
