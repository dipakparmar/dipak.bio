export default async function handleWebhook(req, res) {
	console.log(`[Next.js] Webhook call received from ${req.headers.host}`);

	console.log(`[Next.js] Validating webhook...`);
	// Check for secret to confirm this is a valid request
  if (req.query.secret !== undefined && req.query.secret === process.env.NEXT_PUBLIC_WEBHOOK_SECRET) {
		console.log(`[Next.js] Webhook secret validated`);
    try {
			console.log(`[Next.js] Revalidating url /`);
			await res.revalidate('/')
			console.log(`[Next.js] Revalidated url /`);
			return res.json({ revalidated: true })
		} catch (err) {
			// If there was an error, Next.js will continue
			// to show the last successfully generated page
			console.log(`[Next.js] Error revalidating url /`);
			console.log(err);
			return res.status(500).send('Error revalidating')
		}
  }
	else {
		return res.status(401).json({ message: 'Invalid token' })
	}

}
