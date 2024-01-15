'use client';

import { Button } from "antd"
import styles from "./global-error.module.css"
import { useRouter } from "next/navigation"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div style={{textAlign: "center"}}>
        <p className={styles.article}>
          There was a problem
        </p>
        <h1 className={error.message.length > 50 ? styles.smalltext : styles.text}>
          {error.message || 'Something went wrong'}
        </h1>
        <p className={styles.advice}>
          Please try again or <a href="https://t.me/bornToWhine">contact me</a>
        </p>
        <div className={styles.buttons}>
          <Button
            onClick={reset}
            size="large"
            type="primary"
          >
            Try again
          </Button>
          <Button
            size="large"
            onClick={() => router.push("/")}
          >
            Go back home
          </Button>
        </div>
      </div>
    </main>
  )
}
