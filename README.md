# M. Chavez MD, SC

Next.js 16, TypeScript, Tailwind CSS v4

localhost:3001

## Run Dev Server

cd site && PORT=3001 npm run dev

## Run Agents

WORK=/Users/brandonhopkins/Projects/mchavezmd/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/mchavezmd/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/mchavezmd/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/mchavezmd/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
