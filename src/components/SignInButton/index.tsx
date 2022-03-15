import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./styles.module.scss";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="var(--cyan-500)" />
      {session.user.name}
      <FiX color="#888" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => signIn("github")}>
      <FaGithub color="#daa520" />
      Sign In with GitHub
    </button>
  );
}
