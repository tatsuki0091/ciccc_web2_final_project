import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { fetchLaLiga, fetchLaLigaResult } from '../../api/list';
import { Table } from 'react-bootstrap';
import { Img, Head, Th, ThirdHead, P } from './listStyle';
import Paginator from 'react-hooks-paginator';

const LaLigaList = () => {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMatchList, setCurrentMatchList] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const fetchData = async () => {
    // Take league info
    const data = await fetchLaLiga();
    // Take current match day
    const currentMatchday = data.currentSeason.currentMatchday;
    // Take matches info
    const schedule = await fetchLaLigaResult();

    let array = [];
    schedule.matches.forEach((sche) => {
      if (currentMatchday <= sche.matchday) {
        array.push(sche);
      }
    });
    // setMatchResult(schedule);
    setCurrentMatchList(array);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentData(currentMatchList.slice(offset, offset + 20));
  }, [offset, currentMatchList]);
  return (
    <>
      <Header />
      <div>
        <Head>
          <img alt="league logo" width="200" height="200" src="/laliga.jpg" />
        </Head>
      </div>
      <Table bordered className="mb-5">
        <thead>
          <tr>
            <Th>HOME</Th>
            <Th>DATE</Th>
            <Th>AWAY</Th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((currentMatch) => (
            <tr>
              <td>
                <Img
                  alt="team logo"
                  src={`https://crests.football-data.org/${currentMatch.homeTeam.id}.svg`}
                />
                <br />
                <ThirdHead>{currentMatch.homeTeam.name}</ThirdHead>
              </td>
              <td>
                <P>
                  {new Date(currentMatch.utcDate).toLocaleDateString('en-US')}
                </P>
              </td>
              <td>
                <Img
                  alt="team logo"
                  src={`https://crests.football-data.org/${currentMatch.awayTeam.id}.svg`}
                />
                <br />
                <ThirdHead>{currentMatch.awayTeam.name}</ThirdHead>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Paginator
        totalRecords={currentMatchList.length}
        pageLimit={20}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Footer />
    </>
  );
};

export default LaLigaList;
