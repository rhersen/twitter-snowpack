import { fetchAndShowTweets } from './fetchAndShowTweets';

interface LastRead {
  id_str: string;
}

iife().then(
  () => {
    console.log('done');
  },
  () => {
    console.log('fail');
  },
);

async function iife() {
  setStatus('fauna GET');
  const faunaResp = await fetch(`/.netlify/functions/fauna`);

  if (!faunaResp.ok) {
    setStatus(`fauna GET error: ${await faunaResp.text()}`);
    return;
  }

  const { id_str } = (await faunaResp.json()) as LastRead;
  setStatus('twitter GET');
  // await fetchAndShowTweets(id_str, document.getElementById('tweets'));
}

function setStatus(s: string) {
  let elementById = document.getElementById('status');
  if (elementById) elementById.innerHTML = s;
}
