/**
 * Asserts that a condition holds, narrowing its type for the rest of the scope.
 *
 * Use for *impossible* states that your own code guarantees — not for user
 * input. User input is validated with Zod (a 400); a failed invariant is a
 * bug in our code (a 500).
 *
 * @example
 * const stage = stages[0];            // Stage | undefined
 * invariant(stage, "board must have at least one stage");
 * stage.name;                         // Stage — narrowed
 */
export function invariant(
  condition: unknown,
  message: string
): asserts condition {
  if (condition) return;

  throw new Error(
    process.env.NODE_ENV === "production"
      ? "Invariant failed"
      : `Invariant failed: ${message}`
  );
}
