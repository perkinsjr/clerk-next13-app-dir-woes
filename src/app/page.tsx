//app/page.tsx
import { SignedOut, SignedIn, UserButton, auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth()

  return (
    <div>
      <SignedIn>
        <>
          <UserButton />
          <div>
            <p>Hello {userId}</p>
          </div>
        </>
      </SignedIn>
      <SignedOut>
        <p>Hello Mate</p>
      </SignedOut>
    </div>
  );
}
