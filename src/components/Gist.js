import Octicon from 'react-octicon';
import styled from "styled-components";


function Gist(props) {
    const {gist} = props;

    return (
        <Wrapper>
            <GistMeta>
                <div className="meta-header">
                    <a href={`https://gist.github.com/${gist.owner.login}`} className="owner-info">
                        <img src={gist.owner.avatar_url} alt="avatar" className='avatar'/>
                        <div>{gist.owner.login}</div>
                    </a>
                    <ul>
                        <li>
                            <a href={gist.url}>
                                <Octicon name="code" mega/>
                                {Object.keys(gist.files).length} Files
                            </a>
                        </li>
                        <li>
                            <a href={gist.forks_url}>
                                <Octicon name="repo-forked" mega/>
                                Forks
                            </a>
                        </li>
                        <li>
                            <a href={gist.comments_url}>
                                <Octicon name="comment" mega/>
                                Comments
                            </a>
                        </li>
                        <li>
                            <a href={`https://gist.github.com/${gist.owner.login}/${gist.id}/stargazers`}>
                                <Octicon name="star" mega/>
                                Stars
                            </a>
                        </li>
                    </ul>
                </div>

                <ul>
                    <li>
                        Created at: {gist.created_at}
                    </li>
                    <li>
                        Last updated: {gist.updated_at}
                    </li>
                </ul>
            </GistMeta>

            <p className='description'>{gist.description}</p>

            <ul>
                {Object.entries(gist.files).map(([fileName, file], index) => (
                    <li key={index}>
                        <a href={file.raw_url}>
                            <Octicon name="file" mega/>
                            {fileName}
                        </a>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    .mega-octicon {
      font-size: 14px;
      margin-right: 4px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-block;

      :not(:last-child) {
        margin-right: 14px;
      }
    }
  }

  .description {
    font-size: 18px;
    margin: 0 0 14px;
  }
`;

const GistMeta = styled.div`
  margin-bottom: 14px;

  .meta-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    justify-content: space-between;

    .owner-info {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .avatar {
      width: 44px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
`;

export default Gist;
