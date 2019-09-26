import { setFailed, getInput, debug, warning } from '@actions/core';
import { context, GitHub } from '@actions/github';

async function createFile() {
  try {
    const token = getInput('GITHUB_TOKEN');

    debug('Inside try block');
  
    if (!token) {
      warning(`Github env with value ${token} is not provided`);
      throw new Error('Cannot find token');
    } else {
      const octokit = new GitHub(token);
      const { data } = await octokit.repos.createOrUpdateFile({
        ...context.repo,
        content: 'SGVsbG8gV29ybGQ=',
        path: 'build/result.js',
        message: '[Action] build plugin list'
      });
      console.log(data.commit, data.content);
    }
  } catch(err) {
    setFailed(err);
  }
}

createFile();