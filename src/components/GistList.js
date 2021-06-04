import styled from "styled-components";
import React, {useEffect, useState} from 'react'

import Gist from './Gist';
import {getPublicGists} from "../services/gistService";

function GistList() {
    const [gists, setGists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getPublicGists().then((res) => {
            setGists(res.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    return (
        <Wrapper>
            {isLoading && <div>Is Loading...</div>}
            {!!gists.length && (
                <GistListWrapper>
                    {gists.map((gist) => (
                        <GistListItemWrapper key={gist.id}>
                            <Gist gist={gist}/>
                        </GistListItemWrapper>
                    ))}
                </GistListWrapper>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: auto;
  width: 800px;
`;

const GistListWrapper = styled.ul`
  padding: 0;
  list-style: none;

  li:first-child {
    padding-top: 0;
  }

  li:last-child {
    border-bottom: 0;
  }
`;

const GistListItemWrapper = styled.li`
  padding: 36px 0;
  border-bottom: 1px solid #ccc;
`;

export default GistList
