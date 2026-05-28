# Content design (UX writing)

Mozaic's content design principles are codified at https://mozaic.adeo.cloud/foundations/content-design/principles/. Apply them to every user-facing string in this starter — button labels, empty states, error messages, modal copy, demo descriptions in the registries.

## The five principles

1. **Clarity** — Comprehensible to every user, no matter their domain knowledge. Avoid jargon and acronyms unless the audience is internal and shares context.
2. **Conciseness** — Every word earns its place. Strip filler. Prefer "Cancel order" to "Click here to cancel your order".
3. **Utility** — Speak only when it adds value. Don't narrate the obvious; do guide next steps.
4. **Empathy** — Anticipate what the user is feeling. An error message should explain *what happened*, *what they can do*, and *not blame them*.
5. **Human first** — Mozaic's tone mirrors an in-store advisor: warm, helpful, never robotic. Greetings, confirmations, and apologies are written as exchanges, not announcements.

## Applying them when generating copy

When you (the agent) write UI strings, do the following before settling on a final version:

- Read the sentence aloud. Does it sound like something a Leroy Merlin advisor would say?
- Replace abstract nouns with verbs where you can ("the deletion was completed" → "we deleted your draft").
- Cut every "please" that doesn't actually soften something.
- For errors: state the problem, the cause if known, and a clear next step.
- For empty states: explain *why* it's empty and what creates content.
- For destructive confirms: name the consequence explicitly ("This will permanently delete 3 items").

## Localisation notes

The brand is multi-country (France, Italy, Spain, Poland, Russia, Brazil, …). Mozaic ships Cyrillic and Polish font subsets for that reason. When drafting copy:

- Avoid idioms that don't translate.
- Keep variable interpolation explicit (`{count} items selected`, not `{count} items selected from your basket`).
- Don't assume "free shipping" or other commercial terms; ask the user first if the project targets a specific country.

## Where the live docs go deeper

The website has sub-sections beyond Principles (e.g. error messages, empty states, microcopy patterns). When writing a meaningful chunk of copy, fetch the relevant page rather than guessing:

```
https://mozaic.adeo.cloud/foundations/content-design/
```
