import { useState } from "react";

export default function Forget() {
	const [email, setEmail] = useState("");
	const [sent, setSent] = useState(false);

	const submit = (event) => {
		event.preventDefault();
		setSent(true);
	};

	return (
		<main style={styles.page}>
			<section style={styles.card} aria-labelledby="forgot-title">
				<div style={styles.icon} aria-hidden="true">🔒</div>
				<h1 id="forgot-title" style={styles.title}>Forgot password?</h1>
				<p style={styles.description}>
					Enter your email address and we&apos;ll send you a link to reset your password.
				</p>

				{sent ? (
					<p style={styles.success} role="status">
						If an account exists for <strong>{email}</strong>, a reset link has been sent.
					</p>
				) : (
					<form onSubmit={submit}>
						<label htmlFor="forgot-email" style={styles.label}>Email address</label>
						<input
							id="forgot-email"
							type="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							placeholder="you@example.com"
							autoComplete="email"
							required
							style={styles.input}
						/>
						<button type="submit" style={styles.button}>Send reset link</button>
					</form>
				)}

				<a href="/login" style={styles.link}>← Back to login</a>
			</section>
		</main>
	);
}

const styles = {
	page: { minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f8fafc", fontFamily: "system-ui, sans-serif", color: "#172033" },
	card: { width: "100%", maxWidth: 420, boxSizing: "border-box", padding: 40, background: "white", border: "1px solid #e2e8f0", borderRadius: 16, boxShadow: "0 12px 30px rgba(15,23,42,.08)", textAlign: "center" },
	icon: { width: 52, height: 52, margin: "0 auto 20px", display: "grid", placeItems: "center", borderRadius: 14, background: "#dbeafe", fontSize: 25 },
	title: { margin: "0 0 12px", fontSize: 28 },
	description: { margin: "0 0 28px", color: "#64748b", lineHeight: 1.5 },
	label: { display: "block", marginBottom: 8, textAlign: "left", fontWeight: 600 },
	input: { width: "100%", boxSizing: "border-box", padding: "13px 14px", border: "1px solid #cbd5e1", borderRadius: 8, fontSize: 16 },
	button: { width: "100%", marginTop: 16, padding: 14, border: 0, borderRadius: 8, background: "#2563eb", color: "white", fontSize: 16, fontWeight: 600, cursor: "pointer" },
	success: { padding: 16, borderRadius: 8, background: "#ecfdf5", color: "#047857", lineHeight: 1.5, textAlign: "left" },
	link: { display: "inline-block", marginTop: 28, color: "#2563eb", fontWeight: 600, textDecoration: "none" },
};
