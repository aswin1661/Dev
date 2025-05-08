import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import styles from "./page.module.css";
export default function Home(){
  return (
     <ClerkProvider>
    <SignedIn>
    <div className={styles.page}>
      <h3>Hey you are now logged in</h3>
      <div className={styles.flex}>
      <SignOutButton />
      </div>
    </div>
    </SignedIn>
    <SignedOut>
      <div className={styles.page}>
      <h3>Hey please login.....</h3>
      <div className={styles.flex}>
        <SignInButton />
          <SignUpButton />
        </div>
    </div>
    </SignedOut>
         </ClerkProvider>
  );
}

