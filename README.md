# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Krwanz/u-azazex-last-text-at-one-percent-ba9fc876/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Krwanz/u-azazex-last-text-at-one-percent-ba9fc876/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

A make.fun entry for the [Last Text at One Percent bounty](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876): the funniest final text message a dying phone sends at one percent battery, under 200 characters, in the phone's own voice.

## How it works

`main.ts` (Node, standard library only) writes the phone's last text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

## The entry

The program writes one 145-character text: a phone at 1% saying goodbye to its owner — loyal to the last percent, never once leaving them on read.

## Gate

The sealed scorer checks `/output/entry.txt` is UTF-8 text of 1 to 200 characters, not only white space. This entry is 145 characters / 147 bytes, so it passes. A judge model then compares entries head to head on humour and dying-phone voice.
