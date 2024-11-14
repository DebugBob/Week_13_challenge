import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [result, setResult] = useState<Candidate[]>([]);

  const [user, setUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [index, setIndex] = useState(0);
  
  //Searches for a user
  const userSearch  = async (user: string) => 
  {
    const data: Candidate = await searchGithubUser(user)
    setUser(data);
  }

  //Searches for random user id
  const randomSearch = async () =>
  {
    const data: Candidate[] = await searchGithub();

    setResult(data);

    await userSearch(data [index].login || '');
  }

  const makeDecision = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('savedCandidates');
      if (typeof savedCandidates === 'string') {
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates.push(user);
      localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    }
    if (index + 1 < result.length) {
      setIndex(index + 1);
      await userSearch(result[index + 1].login || '');
    } else {
      setIndex(0);
      await randomSearch();
    }
  };

  useEffect(() => {
    userSearch(user.login || '');
    randomSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <>
    <h1>CandidateSearch</h1>;
    <CandidateCard user={user} makeDecision={makeDecision} />
  </>
)
};

export default CandidateSearch;
