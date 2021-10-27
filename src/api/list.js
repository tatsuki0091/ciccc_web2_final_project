const fetchSerieAUrl = 'http://api.football-data.org/v2/competitions/2019/';
const fetchMatchSerieAUrl =
  'http://api.football-data.org/v2/competitions/2019/matches';

const fetchLaLigaUrl = 'http://api.football-data.org/v2/competitions/2014/';
const fetchMatchLaLigaUrl =
  'http://api.football-data.org/v2/competitions/2014/matches';

const fetchCLUrl = 'http://api.football-data.org/v2/competitions/2001/';
const fetchMatchCLUrl =
  'http://api.football-data.org/v2/competitions/2001/matches';

export const fetchSA = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY },
  };

  const results = await fetch(fetchSerieAUrl, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      const res = { err };
      return res;
    });
  return results;
};

export const fetchResult = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY },
  };

  const results = await fetch(fetchMatchSerieAUrl, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      const res = { err };
      return res;
    });
  return results;
};

export const fetchLaLiga = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY },
  };

  const results = await fetch(fetchLaLigaUrl, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      const res = { err };
      return res;
    });
  return results;
};

export const fetchLaLigaResult = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY },
  };

  const results = await fetch(fetchMatchLaLigaUrl, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      const res = { err };
      return res;
    });
  return results;
};

export const fetchCL = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY },
  };

  const results = await fetch(fetchCLUrl, requestOptions)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => {
      const res = { err };
      return res;
    });
  return results;
};

export const fetchCLResult = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY },
  };

  const results = await fetch(fetchMatchCLUrl, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      const res = { err };
      return res;
    });
  return results;
};
