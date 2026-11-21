## Summary

<!--
Why, in 1-2 sentences. Then one visual if it helps, right after the sentence it supports:
- A `diff` code block sketching the tree that changed, with +/- lines
- A `mermaid` flowchart, sequenceDiagram, or stateDiagram-v2 for flow or state. Mark changed nodes with a classDef
Skip it for typos, config, or version bumps.
-->

## Evidence

<!-- The test that failed before and passes now, or command output. Say what you couldn't verify. -->

- **Before:**
- **After:**

## Merge Danger

<!-- Door: one-way (removed export, `exports` map change) or two-way (a revert undoes it). Blast radius: one word. -->

- **Door:**
- **Blast radius:**

## Checklist

- [ ] Test written first, Strict Mode covered
- [ ] `npm run test:coverage` stays at 100%
- [ ] Packaging change: `npm run check:package` passes
