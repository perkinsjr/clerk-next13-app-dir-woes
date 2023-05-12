//app/page.tsx
import { SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <p>Hello Mate</p>
      </SignedOut>
    </div>
  );
}
