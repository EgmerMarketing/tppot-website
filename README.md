This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact form

The contact page (`/contact`) includes an inquiry form next to the strategy-call calendar. Submissions are emailed with [Resend](https://resend.com) from the server route `src/app/api/contact/route.ts`. The API key stays on the server.

Copy `.env.example` to `.env.local` for local development, and set the same variables in the Vercel project for both Preview and Production:

| Variable | Purpose | Default |
| --- | --- | --- |
| `RESEND_API_KEY` | Resend API key. If it is missing, the page still loads and the form shows a friendly error. | none |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries. | `hello@thepostpartumot.com` |
| `CONTACT_FROM_EMAIL` | From address on the email. | `The Postpartum OT <website@thepostpartumot.com>` |

The visitor's email is set as `Reply-To`, so a reply from the inbox goes straight to them.

### Verify the sending domain in Resend

Resend only delivers mail after the From domain is verified.

1. In the [Resend dashboard](https://resend.com/domains), add `thepostpartumot.com`.
2. Add the DNS records Resend shows (SPF, DKIM, and the return-path record) at the domain's DNS host.
3. Wait until Resend marks the domain as verified.
4. Keep `CONTACT_FROM_EMAIL` on that domain. `website@thepostpartumot.com` does not need its own mailbox; any address at the verified domain can be used as the From address.

Until the domain is verified, a submission fails with the form's error message and a Resend error in the server logs.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
