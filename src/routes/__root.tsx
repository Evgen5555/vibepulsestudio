import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>VibePulse Studio — Высокоскоростная AI-разработка</title>
        <meta name="description" content="Создание премиальных сайтов на базе AI за 3–7 дней, умных Telegram-ботов и автоворонок под ключ. Автоматизация бизнес-процессов для экспертов и брендов." />
        <meta name="author" content="Lovable" />
        <meta property="og:title" content="VibePulse Studio — Высокоскоростная AI-разработка" />
        <meta property="og:description" content="Создание премиальных сайтов на базе AI за 3–7 дней, умных Telegram-ботов и автоворонок под ключ. Автоматизация бизнес-процессов для экспертов и брендов." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Lovable" />
        <meta name="twitter:title" content="VibePulse Studio — Высокоскоростная AI-разработка" />
        <meta name="twitter:description" content="Создание премиальных сайтов на базе AI за 3–7 дней, умных Telegram-ботов и автоворонок под ключ. Автоматизация бизнес-процессов для экспертов и брендов." />
        <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9beac194-7724-4e05-8dc4-dc3da8ff7afe/id-preview-b0bfaffc--ede0ed0f-0e94-4847-96ad-1adcb108c474.lovable.app-1779637982686.png" />
        <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9beac194-7724-4e05-8dc4-dc3da8ff7afe/id-preview-b0bfaffc--ede0ed0f-0e94-4847-96ad-1adcb108c474.lovable.app-1779637982686.png" />
        <link rel="stylesheet" href={appCss} />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </body>
    </html>
  );
}
