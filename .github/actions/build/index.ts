import { setFailed, getInput } from '@actions/core';
import { context, GitHub } from '@actions/github';

try {
  const token = getInput('GITHUB_TOKEN');
  const octokit = new GitHub(token);
  octokit.repos.updateFile({
    ...context.repo,
    content: 'Hello World',
    path: 'build/result.js',
    message: '[Action] build plugin list'
  });
} catch(err) {
  setFailed(err);
}