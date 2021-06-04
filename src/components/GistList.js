import Octicon from 'react-octicon';
import styled from "styled-components";
import React, {useEffect, useState} from 'react'

import Gist from './Gist';
import {getGistForUser, getPublicGists} from "../services/gistService";

function GistList(props) {
    const {username = ''} = props;

    const [gists, setGists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (username.length) {
            return
        }

        setIsLoading(true);
        getPublicGists().then((res) => {
            setGists(res.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        if (!username.length) {
            return;
        }

        setIsLoading(true);
        getGistForUser(username).then((res) => {
            setGists(res.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [username]);

    return (
        <Wrapper>
            {isLoading && (
                <LoadingGists>
                    <Octicon name="sync" mega spin/>
                </LoadingGists>
            )}
            {!isLoading && !!gists.length && (
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

const LoadingGists = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;

  .mega-octicon {
    width: 25px;
    height: 33px;
  }
`;

export default GistList
