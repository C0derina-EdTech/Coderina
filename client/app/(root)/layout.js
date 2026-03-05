import { PostProvider } from "../components/contexts/PostContext";
import { Providers } from "../Providers";
import { Cormorant_Garamond, DM_Sans, Roboto } from "next/font/google";

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Layout({ children }) {
  return <Providers>
     <div className={`${garamond.className} ${dmSans.className} ${roboto.className}`}>
      {children}
    </div>
    </Providers>;
}
