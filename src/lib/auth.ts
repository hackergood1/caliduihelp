import { createHmac } from 'node:crypto';

export function signToken(secret: string): string {
	const expires = Date.now() + 8 * 60 * 60 * 1000;
	const payload = String(expires);
	const sig = createHmac('sha256', secret).update(payload).digest('hex');
	return `${payload}.${sig}`;
}

export function verifyToken(token: string, secret: string): boolean {
	try {
		const [payload, sig] = token.split('.');
		if (!payload || !sig) return false;
		const expected = createHmac('sha256', secret).update(payload).digest('hex');
		if (sig !== expected) return false;
		return Date.now() < parseInt(payload);
	} catch {
		return false;
	}
}
