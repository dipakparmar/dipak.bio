export default async function handleWebhook(req, res) {
	console.log(`[Next.js] Webhook call received from ${req.headers.host}`);
	// Check for secret to confirm this is a valid request
  if (req.query.secret == process.env.NEXT_PUBLIC_WEBHOOK_SECRET) {
    try {
			console.log(`[Next.js] Revalidating /`);
			await res.unstable_revalidate('/')
			console.log(`[Next.js] Revalidated /`);
			return res.json({ revalidated: true })
		} catch (err) {
			// If there was an error, Next.js will continue
			// to show the last successfully generated page
			return res.status(500).send('Error revalidating')
		}
  }
	else {
		return res.status(401).json({ message: 'Invalid token' })
	}

}
