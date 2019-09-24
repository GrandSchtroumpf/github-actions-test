import { setFailed, getInput } from '@actions/core';
import { context, GitHub } from '@actions/github';

async function createFile() {
  try {
    const token = getInput('GITHUB_TOKEN');
    const octokit = new GitHub(token);
    const { data } = await octokit.repos.createOrUpdateFile({
      ...context.repo,
      content: 'Hello World',
      path: 'build/result.js',
      message: '[Action] build plugin list'
    });
    console.log(data.commit, data.content);
  } catch(err) {
    setFailed(err);
  }
}

createFile();