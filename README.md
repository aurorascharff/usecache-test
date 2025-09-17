# Next.js C## Summary

- **Production Build** (`npm run build` + `npm run start`): ✅ Static data cached correctly (does not refetch on refresh)
- **Vercel Deployment** ([live site](https://my-app-2-xi.vercel.app/123)): ❌ Static data cache not working (refetches on every refresh)or Demonstration

This project demonstrates a difference in caching behavior between local development and deployed environments when using `"use cache"` directive with `cacheLife("max")`.

## Project Structure

The application has:

- **Static Data Component**: Uses `"use cache"` with `cacheLife("max")` - should be cached and not refetch
- **Dynamic Data Component**: Regular data fetching - should refetch on each request

## Expected Behavior (Production Build)

In development (`localhost:3000`), the static data is properly cached and does **not** rerun when you refresh the page:

![Local Development - Static data cached correctly](local.gif)

## Actual Behavior (Vercel Deployment)

When deployed to Vercel at [https://my-app-2-xi.vercel.app/123](https://my-app-2-xi.vercel.app/123), the static data **incorrectly reruns** and refetches on every page refresh:

![Production Build - Static data NOT cached](deployed.gif)

### Network Headers Show Cache Hit

Interestingly, the network tab shows cache-related headers indicating the content should be cached:

```http
X-Vercel-Cache: HIT
X-Nextjs-Stale-Time: 300
X-Nextjs-Prerender: 1
```

- `X-Vercel-Cache: HIT` - Indicates a cache hit
- `X-Nextjs-Prerender: 1` - Shows content was prerendered
- `X-Nextjs-Stale-Time: 300` - Cache stale time configuration

Despite these headers suggesting caching is working, the static data still refetches on every refresh.
