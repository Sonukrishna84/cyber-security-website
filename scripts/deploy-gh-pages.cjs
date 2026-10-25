const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const git = require('isomorphic-git');
const nodeHttp = require('isomorphic-git/http/node');

const customHttp = {
  request: (args) => {
    return nodeHttp.request({
      ...args,
      fetchOptions: {
        ...args.fetchOptions,
        timeout: 180000
      }
    });
  }
};

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

function getCredentials() {
  if (process.env.GH_TOKEN) {
    return { username: 'Sonukrishna84', password: process.env.GH_TOKEN };
  }
  const config = fs.readFileSync(path.join(rootDir, '.git/config'), 'utf8');
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

const repoUrl = 'https://github.com/Sonukrishna84/cyber-security-website.git';

async function deploy() {
  console.log('1. Building project for GitHub Pages...');
  cp.execSync('node node_modules/vite/bin/vite.js build', {
    cwd: rootDir,
    env: { ...process.env, NODE_ENV: 'production' },
    stdio: 'inherit'
  });

  console.log('2. Adding 404.html and .nojekyll for GitHub Pages...');
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

  console.log('3. Initializing fresh git repo in dist...');
  const distGit = path.join(distDir, '.git');
  if (fs.existsSync(distGit)) {
    fs.rmSync(distGit, { recursive: true, force: true });
  }

  await git.init({ fs, dir: distDir, defaultBranch: 'gh-pages' });
  await git.addRemote({
    fs,
    dir: distDir,
    remote: 'origin',
    url: repoUrl
  });
  
  // Recursively add all files in dist
  function getAllFiles(dir, base = '') {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name === '.git') continue;
      const rel = base ? `${base}/${e.name}` : e.name;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        results = results.concat(getAllFiles(full, rel));
      } else {
        results.push(rel);
      }
    }
    return results;
  }

  const files = getAllFiles(distDir);
  console.log(`Adding ${files.length} built files to git stage...`);
  for (const f of files) {
    await git.add({ fs, dir: distDir, filepath: f });
  }

  console.log('4. Creating commit for gh-pages...');
  const sha = await git.commit({
    fs,
    dir: distDir,
    message: 'Deploy built site to GitHub Pages',
    author: {
      name: 'Sonu Yadav',
      email: 'grihy236@gmail.com'
    }
  });
  console.log('Commit created on gh-pages:', sha);

  const pushResult = await git.push({
    fs,
    http: customHttp,
    dir: distDir,
    remote: 'origin',
    ref: 'gh-pages',
    force: true,
    onAuth: () => getCredentials()
  });

  console.log('Push Result:', JSON.stringify(pushResult, null, 2));
  console.log('==============================================');
  console.log('🎉 SUCCESSFULLY DEPLOYED TO GITHUB PAGES!');
  console.log('Live URL: https://sonukrishna84.github.io/cyber-security-website/');
  console.log('==============================================');
}

deploy().catch(err => {
  console.error('Deployment error:', err);
  process.exit(1);
});
