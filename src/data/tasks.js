// Rule-based task library
// Structure: goal category → energy level → time bucket → array of tasks

export const GOAL_TEMPLATES = [
  { id: 'internship', label: '🎯 Get an internship', category: 'internship' },
  { id: 'python', label: '🐍 Learn Python', category: 'python' },
  { id: 'fitness', label: '💪 Get fit', category: 'fitness' },
  { id: 'startup', label: '🚀 Build a project', category: 'startup' },
  { id: 'dsa', label: '🧩 Practice DSA', category: 'dsa' },
];

// time buckets: 'micro' = <15min, 'short' = 15-30min, 'medium' = 30-60min, 'deep' = 60+min
// energy: 'low', 'medium', 'high'

export const TASKS = {
  internship: {
    low: {
      micro: [
        'Bookmark 3 companies on LinkedIn you want to apply to.',
        'Update your LinkedIn headline to mention your skills.',
        'Read one job description and highlight keywords.',
      ],
      short: [
        'Write 2 bullet points for your most recent experience on your resume.',
        'Find and follow 5 engineers at companies you like on LinkedIn.',
        'Research one company — what do they build, what stack do they use?',
      ],
      medium: [
        'Rewrite your resume summary section from scratch.',
        'Look up 10 internship openings and save the ones that fit.',
        'Draft a cold message to send to a recruiter. Don\'t send yet, just draft.',
      ],
      deep: [
        'Build a one-page personal portfolio site with your projects listed.',
        'Complete your entire LinkedIn profile — every section filled.',
        'Apply to 5 internships end-to-end right now.',
      ],
    },
    medium: {
      micro: [
        'Message one person in tech and ask about their internship experience.',
        'Add one project to your resume with measurable results.',
        'Comment thoughtfully on 2 posts in a developer community.',
      ],
      short: [
        'Solve 1 easy LeetCode problem — pick one you\'ve seen before.',
        'Write a tailored cover letter for one specific company.',
        'Send a connection request to 3 alumni from your college on LinkedIn.',
      ],
      medium: [
        'Do a mock behavioral interview — answer STAR format for 3 questions.',
        'Refactor one project in your portfolio so it looks presentable.',
        'Solve 2 easy LeetCode problems back to back.',
      ],
      deep: [
        'Build a small CRUD project you can add to your portfolio today.',
        'Spend 1 hour on LeetCode — solve 2 mediums or 4 easies.',
        'Reach out to 5 people on LinkedIn with personalized messages.',
      ],
    },
    high: {
      micro: [
        'Solve the daily LeetCode challenge — no looking at hints.',
        'Write a cold email to a startup founder. Keep it under 5 lines.',
        'Identify the weakest part of your resume and fix it right now.',
      ],
      short: [
        'Solve 2 medium LeetCode problems back to back.',
        'Record yourself answering "Tell me about yourself" and watch it back.',
        'Pick a company and study their engineering blog for 20 minutes.',
      ],
      medium: [
        'Build a feature in your portfolio project and push it to GitHub.',
        'Complete one full mock interview round — 2 DSA problems, timed.',
        'Write a blog post about something you recently learned.',
      ],
      deep: [
        'Build and deploy a mini project using a new framework or tool.',
        'Do a full mock interview session — DSA + system design + behavioral.',
        'Apply to 10 internships with tailored resumes.',
      ],
    },
  },

  python: {
    low: {
      micro: [
        'Read the Python docs on one function you use but don\'t fully understand.',
        'Watch 10 minutes of a Python tutorial — just watch, no coding.',
        'Review your notes from the last Python topic you studied.',
      ],
      short: [
        'Read about one Python concept: list comprehensions, decorators, or generators.',
        'Watch a YouTube video on pandas basics.',
        'Skim through 5 solved Python problems on GeeksForGeeks.',
      ],
      medium: [
        'Watch a 30-min Python tutorial and take notes on the key concepts.',
        'Read about OOP in Python — classes, __init__, inheritance.',
        'Go through one chapter of "Automate the Boring Stuff".',
      ],
      deep: [
        'Watch a full Python project tutorial on YouTube (Django todo app, etc.).',
        'Read and understand a real Python open-source project on GitHub.',
        'Study one advanced topic: asyncio, metaclasses, or context managers.',
      ],
    },
    medium: {
      micro: [
        'Write a Python function that reverses a string without using [::-1].',
        'Open a Python REPL and experiment with one data structure for 10 mins.',
        'Fix one bug or improve one function in a script you\'ve written before.',
      ],
      short: [
        'Write a script that reads a CSV and prints the total of one column.',
        'Implement a stack and queue using a Python list.',
        'Solve 2 easy Python challenges on HackerRank.',
      ],
      medium: [
        'Build a Python script that scrapes a webpage and saves results to a file.',
        'Write a class-based Python project — e.g. a simple bank account system.',
        'Implement bubble sort and binary search from scratch without looking it up.',
      ],
      deep: [
        'Build a CLI tool in Python — e.g. a notes app or a weather fetcher.',
        'Complete one full Python project: URL shortener, quiz app, or expense tracker.',
        'Solve 5 medium Python problems on LeetCode.',
      ],
    },
    high: {
      micro: [
        'Solve a Python problem you previously couldn\'t — no hints this time.',
        'Refactor an old Python script to use list comprehensions throughout.',
        'Write unit tests for a function you built recently.',
      ],
      short: [
        'Implement a linked list in Python from scratch with insert and delete.',
        'Build a Python script using an API — OpenWeather or NewsAPI.',
        'Solve 2 medium Python LeetCode problems timed at 15 minutes each.',
      ],
      medium: [
        'Build a full REST API in Flask — at least 3 routes, using in-memory data.',
        'Implement a binary search tree with insert, search, and traversal.',
        'Build a data analysis script on a Kaggle dataset using pandas + matplotlib.',
      ],
      deep: [
        'Build and push a complete Python project to GitHub with a README.',
        'Solve 4 medium LeetCode problems in one session.',
        'Build a Python automation script that does something useful for you.',
      ],
    },
  },

  fitness: {
    low: {
      micro: [
        'Do 10 slow, controlled pushups. Focus on form, not speed.',
        'Stretch for 5 minutes — hips, hamstrings, shoulders.',
        'Take a 10-minute walk outside. That\'s the whole task.',
      ],
      short: [
        '3 rounds: 10 pushups, 15 squats, 20 second plank. Rest between sets.',
        'Do a 15-minute beginner yoga flow — find one on YouTube.',
        '5-minute walk + 10 minutes of full body stretching.',
      ],
      medium: [
        '4 rounds: 15 pushups, 20 squats, 10 lunges, 30 sec plank.',
        'Do a 30-minute beginner home workout on YouTube.',
        'Go for a 25-minute jog at a comfortable pace. No pressure.',
      ],
      deep: [
        '45-minute full body workout: push, pull, legs, core.',
        'Go for a long walk or easy run for 50–60 minutes.',
        'Do a full body stretch + foam roll session — 45 minutes.',
      ],
    },
    medium: {
      micro: [
        '3 sets of max pushups with 45-second rest between sets.',
        '50 jumping jacks, 20 squats, 10 burpees. Done.',
        'Hold a plank for as long as you can. Twice.',
      ],
      short: [
        'Tabata: 20 sec on, 10 sec off, 8 rounds of squats then pushups.',
        '4 sets of 15 squats, 12 pushups, 10 tricep dips.',
        '20-minute HIIT bodyweight circuit.',
      ],
      medium: [
        '5 rounds: 15 pushups, 20 squats, 15 lunges, 10 burpees, 1 min rest.',
        'Go for a 30-minute run, maintaining a pace you can hold a conversation at.',
        'Full upper body session: pushups, pike pushups, diamond pushups, plank variations.',
      ],
      deep: [
        '1 hour strength session: chest + triceps or back + biceps.',
        'Long run — 40 to 50 minutes, steady pace.',
        'Full body HIIT — 45 minutes, minimal rest.',
      ],
    },
    high: {
      micro: [
        '5 sets of max pushups to failure. Go.',
        '10 burpees every minute for 5 minutes.',
        '3 sets of pistol squat attempts — each leg.',
      ],
      short: [
        'EMOM 20 minutes: odd = 10 pushups, even = 15 squats.',
        '5 rounds for time: 10 burpees, 15 jump squats, 20 mountain climbers.',
        'Sprint 30 seconds, walk 90 seconds — repeat 6 times.',
      ],
      medium: [
        '5K run — push your pace, aim for a personal best.',
        '6 rounds: 15 pushups, 20 squats, 10 burpees, 10 dips, 1 min rest.',
        'Full body HIIT circuit, no rest between exercises, 2 min rest per round.',
      ],
      deep: [
        'Long run — 8 to 10 km at a challenging but sustainable pace.',
        '90-minute full body workout — strength + conditioning.',
        'Complete a full Calisthenics beginner program workout.',
      ],
    },
  },

  startup: {
    low: {
      micro: [
        'Write down 3 problems your app solves. Be specific.',
        'Read one article about your app\'s market or competitors.',
        'Draw a rough wireframe of your main screen on paper.',
      ],
      short: [
        'Write your app\'s one-line pitch: what it does and who it\'s for.',
        'List all features you want, then circle the 3 that matter for MVP.',
        'Read a postmortem from a startup that failed — what did you learn?',
      ],
      medium: [
        'Write a proper README for your project from scratch.',
        'Design your database schema on paper — all tables and relationships.',
        'Watch a talk or read a blog about a problem in your domain.',
      ],
      deep: [
        'Write a full product spec for your MVP — what it does, what it doesn\'t.',
        'Study one successful competitor in depth — their UX, pricing, and reviews.',
        'Plan your full sprint for the next 2 weeks.',
      ],
    },
    medium: {
      micro: [
        'Write one component or function — just one. Commit it.',
        'Fix that one bug you\'ve been avoiding.',
        'Add error handling to one part of your app that doesn\'t have it.',
      ],
      short: [
        'Build one screen of your app — just the UI, no logic yet.',
        'Set up your project repo with proper folder structure and README.',
        'Wire up one API endpoint end-to-end — request to response.',
      ],
      medium: [
        'Build the core feature of your app — the one without which it doesn\'t work.',
        'Set up auth — signup + login + session management.',
        'Build and test 3 API endpoints for your main resource.',
      ],
      deep: [
        'Complete one full feature: UI + API + database, working end-to-end.',
        'Deploy your app to a free host — Vercel, Railway, or Render.',
        'Build and ship the MVP — get it working enough to show someone.',
      ],
    },
    high: {
      micro: [
        'Refactor the messiest file in your codebase right now.',
        'Write tests for your most critical function.',
        'Optimize one slow query or API call.',
      ],
      short: [
        'Build one full feature from scratch in this session.',
        'Do a code review of your own work — find and fix 3 things.',
        'Implement one piece of feedback from someone who tested your app.',
      ],
      medium: [
        'Build + deploy a new feature live.',
        'Get 3 people to use your app and collect real feedback.',
        'Rewrite your worst code — the part you\'re most embarrassed by.',
      ],
      deep: [
        'Complete one major milestone for your project today.',
        'Build, test, and deploy an entire module of your app.',
        'Ship something new and post about it online.',
      ],
    },
  },

  dsa: {
    low: {
      micro: [
        'Read the editorial of a problem you couldn\'t solve yesterday.',
        'Watch a YouTube explanation of one data structure you\'re weak on.',
        'Review your notes on time and space complexity.',
      ],
      short: [
        'Read about one algorithm — understand it conceptually, no coding yet.',
        'Watch a 20-minute explanation of dynamic programming basics.',
        'Go through 5 solved array problems on GeeksForGeeks, reading solutions.',
      ],
      medium: [
        'Study graphs — what are they, BFS vs DFS, when to use each.',
        'Read about sorting algorithms and implement one on paper.',
        'Go through the NeetCode roadmap and identify your weakest topic.',
      ],
      deep: [
        'Study one full topic deeply — e.g. trees, graphs, or DP with examples.',
        'Watch and re-implement 5 solved problems from NeetCode.',
        'Read CLRS or a textbook chapter on one algorithm.',
      ],
    },
    medium: {
      micro: [
        'Solve 1 easy LeetCode problem — pick one from the arrays category.',
        'Re-implement binary search from memory without looking it up.',
        'Fix your solution to a problem you got wrong recently.',
      ],
      short: [
        'Solve 2 easy LeetCode problems back to back.',
        'Implement a linked list with insert, delete, and reverse.',
        'Solve 1 medium problem — give yourself 20 minutes before looking at hints.',
      ],
      medium: [
        'Solve 2 medium LeetCode problems from the sliding window category.',
        'Implement BFS and DFS on a graph from scratch.',
        'Solve 1 hard problem — spend 30 minutes before reading the solution.',
      ],
      deep: [
        'Solve 4–5 medium problems in one session.',
        'Complete one full NeetCode topic — all easy + medium problems.',
        'Do a timed mock: 2 problems in 45 minutes.',
      ],
    },
    high: {
      micro: [
        'Solve the LeetCode daily challenge — no hints, timed.',
        'Re-implement a sorting algorithm from scratch, optimized.',
        'Solve one problem you\'ve marked as "revisit" in your notes.',
      ],
      short: [
        'Solve 2 medium problems — 15 minutes each, no hints.',
        'Implement Dijkstra\'s algorithm from scratch.',
        'Solve 1 hard LeetCode problem.',
      ],
      medium: [
        'Solve 3 medium problems back to back, timed at 20 min each.',
        'Implement a full graph problem: detect cycle, shortest path.',
        'Do a full mock interview: 2 problems in 45 minutes, explain out loud.',
      ],
      deep: [
        'Complete a full timed contest — virtual contest on LeetCode.',
        'Solve 5 medium problems in 90 minutes.',
        'Pick your weakest topic and solve 6 problems from it today.',
      ],
    },
  },
};

export function getNextTask(goalCategory, energyLevel, availableMinutes) {
  let timeBucket;
  if (availableMinutes <= 15) timeBucket = 'micro';
  else if (availableMinutes <= 30) timeBucket = 'short';
  else if (availableMinutes <= 60) timeBucket = 'medium';
  else timeBucket = 'deep';

  const pool = TASKS[goalCategory]?.[energyLevel]?.[timeBucket];
  if (!pool || pool.length === 0) return 'Take 5 minutes to review your goal and plan your next small step.';

  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}