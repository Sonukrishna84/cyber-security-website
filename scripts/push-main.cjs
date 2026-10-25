const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..');

function getCredentials() {
  if (process.env.GH_TOKEN) {
    return { username: 'Sonukrishna84', password: process.env.GH_TOKEN };
  }
  const config = fs.readFileSync(path.join(dir, '.git/config'), 'utf8');
  const match = config.match(/https:\/\/([^:@]+):([^@]+)@github\.com/);
  if (match) {
    return { username: match[1], password: match[2] };
  }
  const match2 = config.match(/https:\/\/([^@]+)@github\.com/);
  if (match2) {
    return { username: 'Sonukrishna84', password: match2[1] };
  }
  return { username: 'Sonukrishna84', password: '' };
}

async function main() {
  console.log('--- Checking Git Status on main ---');
  const matrix = await git.statusMatrix({ fs, dir });

  const toAdd = [];
  const toRemove = [];

  for (const [filepath, head, workdir, stage] of matrix) {
    if (filepath.startsWith('node_modules/') || filepath.startsWith('dist/')) continue;
    if (head === 1 && workdir === 0) {
      toRemove.push(filepath);
    } else if (workdir === 2) {
      toAdd.push(filepath);
    }
  }

  console.log(`Files to add: ${toAdd.length}`);
  console.log(`Files to remove: ${toRemove.length}`);
  console.log('Adding:', toAdd);

  for (const f of toRemove) {
    await git.remove({ fs, dir, filepath: f });
  }

  for (const f of toAdd) {
    await git.add({ fs, dir, filepath: f });
  }

  if (toAdd.length === 0 && toRemove.length === 0) {
    console.log('No changes to commit.');
    return;
  }

  console.log('--- Committing changes ---');
  const commitSha = await git.commit({
    fs,
    dir,
    message: 'Remove dark background from official logo to make it transparent PNG',
    author: {
      name: 'Sonu Yadav',
      email: 'grihy236@gmail.com'
    }
  });

  console.log(`Commit created: ${commitSha}`);

  console.log('--- Pushing to GitHub (main) ---');
  const creds = getCredentials();
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    onAuth: () => creds
  });

  console.log('Push Result:', JSON.stringify(pushResult, null, 2));
  console.log('SUCCESS: Pushed to GitHub main branch!');
}

main().catch(err => {
  console.error('Error pushing to main:', err);
  process.exit(1);
});
