type AdminGraphqlResponse<T> = {
  data?: T;
  // Shopify can return `errors` as an array of objects, but some responses
  // may include non-array values. Keep this flexible to prevent runtime crashes.
  errors?: unknown;
};

export async function shopifyAdminQuery<T>(
  env: Env | undefined,
  query: string,
  variables?: Record<string, unknown>,
) {
  const token = env?.SHOPIFY_ADMIN_API_TOKEN || process.env.SHOPIFY_ADMIN_API_TOKEN;

  if (!token) {
    throw new Error('SHOPIFY_ADMIN_API_TOKEN environment variable is not set');
  }

  const controller = new AbortController();
  const timeoutMs = 12000; // prevents server timeouts; adjust if needed
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const storeDomain = env?.PUBLIC_STORE_DOMAIN || process.env.PUBLIC_STORE_DOMAIN;
    
    if (!storeDomain) {
      throw new Error('PUBLIC_STORE_DOMAIN environment variable is not set');
    }

    const response = await fetch(
      `https://${storeDomain}/admin/api/2026-04/graphql.json`,
      {
        method: 'POST',
        headers: {
          'X-Shopify-Access-Token': token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({query, variables}),
        signal: controller.signal,
      },
    );

    const json = (await response.json()) as AdminGraphqlResponse<T>;

    const errors = json.errors;
    const normalizedErrors = Array.isArray(errors)
      ? errors
      : errors
        ? [errors]
        : [];

  if (!response.ok || normalizedErrors.length) {
    const messages = normalizedErrors
      .map((error: any) => error?.message)
      .filter(Boolean);

    // Include more context for debugging (auth/permissions/GraphQL schema issues)
    const contextInfo = {
      status: response.status,
      statusText: response.statusText,
      messages,
      // Do not dump the entire token; this is safe since json.errors never includes it.
      graphqlErrors: normalizedErrors,
    };

    throw new Error(
      messages.join(', ') ||
        `Shopify Admin API request failed with ${response.status} (${response.statusText}): ${JSON.stringify(contextInfo)}`,
    );
  }

    if (!json.data) {
      throw new Error('Shopify Admin API returned no data');
    }

    return json.data;
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      throw new Error(
        `Shopify Admin API request timed out after ${timeoutMs}ms`,
      );
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
