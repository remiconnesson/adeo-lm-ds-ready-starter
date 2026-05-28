# Handoff procedure

If the user asks for a handoff (or anything synonymous: "wrap this up", "summarise where we are", "I want to switch chats"), produce a handoff document so a fresh agent can continue the work. The rules below are the canonical version.

## What to produce

A single Markdown file at the repo root, named so it's obvious (`HANDOFF.md` or `handoff-YYYY-MM-DD.md`). **Don't commit it** — the user downloads it manually.

Tell the user how to download it after you write it.

## What to include

1. **One-paragraph summary** — what the user is trying to accomplish and the current state of the work.
2. **Where we are** — current branch / project, what's running, what just happened.
3. **Open questions** — anything the user still needs to decide.
4. **Next steps** — concrete actions the next agent should take, in order.
5. **References** — link to files by path (not content). Reference PRs, issues, commits, plan docs, or other artifacts already in the repo. Do **not** paste their content into the handoff.
6. **Suggested skills** — list relevant agent skills (e.g. `nextjs-codebase-audit`, `creating-diagrams`, `vercel:nextjs`) so the receiving agent can invoke them.

## What to redact

Any of these need to be scrubbed (or replaced with a placeholder) before saving:

- API keys, tokens, OAuth secrets
- Passwords
- Personally identifiable information (real names beyond the user themselves, emails, phone numbers, addresses)
- Internal URLs that include session IDs or query-string credentials

When in doubt, replace with `«REDACTED»` and note in the handoff what was removed.

## What NOT to do

- Don't re-explain things already captured in PR descriptions, plans, ADRs, issues, or commit messages — link to them instead.
- Don't dump conversation transcripts.
- Don't write Mozaic facts that are already in this `agent_docs/` directory; reference the relevant file.
