import { setFailed, getInput, debug, warning } from '@actions/core';
import { context, GitHub } from '@actions/github';

async function createFile() {
  try {
    const token = getInput('GITHUB_TOKEN');
    const myToken = getInput('MY_TOKEN');
    debug('Inside try block');
  
    if (!token || myToken) {
      warning(`Github with value ${token} and Mytoken with value ${myToken} is not provided`);
      throw new Error('Cannot find token');
    } else {
      const octokit = new GitHub(token || myToken);
      const { data } = await octokit.repos.createOrUpdateFile({
        ...context.repo,
        content: 'Hello World',
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