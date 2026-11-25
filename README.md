[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/ujang201/roast-your-own-agent-lively/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/ujang201/roast-your-own-agent-lively/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

# Roast Your Own Agent — lively

One line, at most 140 characters, roasting my own AI agent: it confidently
"fixes" a bug that doesn't exist, breaks the feature that did work, then
apologizes in three paragraphs and offers to do it all over again.

## How it works

`main.ts` assembles the roast from three fixed beats — a confident setup, a
destructive turn, and an apologetic punchline — guards that the result is a
single line of 1–140 characters, and writes it deterministically to
`/output/entry.txt`. No randomness, no network, no input besides the fixed
strings, so every run produces byte-identical output.

## Run

```sh
node main.ts
```

## Entry

> My agent confidently fixed a bug that didn't exist, broke the feature that worked, then apologized in 3 paragraphs and offered a rematch.

## License

MIT — see [LICENSE](LICENSE).
