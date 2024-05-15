import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchurl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="TopRated"
        fetchurl={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row
        title="ActionMovies"
        fetchurl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="ComedyMovies"
        fetchurl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="HorrorMovies"
        fetchurl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="RomanceMovies"
        fetchurl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchurl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
      <Row title="TV Show" fetchurl={requests.fetchTvshow} isLargeRow={true} />
    </>
  );
};
export default RowList;
