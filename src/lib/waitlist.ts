export type WaitlistRequest = { email: string; interests: string[] };

export type WaitlistResult = { ok: true } | { ok: false; reason: 'not-connected' };

// Single boundary for early-access sign-ups. No storage or email provider is wired up yet,
// so nothing is saved and the form says so instead of implying a sign-up succeeded.
// Replace the body with a real endpoint or provider call once one is chosen.
export async function submitWaitlist(_request: WaitlistRequest): Promise<WaitlistResult> {
  return { ok: false, reason: 'not-connected' };
}
