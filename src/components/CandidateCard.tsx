import Candidate from '../interfaces/Candidate.interface';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

type CandidateCardProps = {
  user: Candidate;
  makeDecision: (isSelected: boolean) => void;
};

const CandidateCard = ({ user, makeDecision }: CandidateCardProps) => {
  return (
    <section>
      {user?.login ? (
        <>
          {user?.avatar_url ? (
            <img
              src={`${user.avatar_url}`}
              alt={`Profile of ${user.login}`}
              style={{ width: '300px', borderRadius: '30px 30px 0 0' }}
            />
          ) : (
            <img
              src={'https://placehold.co/600x400'}
              alt={'Placeholder'}
              style={{ width: '300px', borderRadius: '30px 30px 0 0' }}
            />
          )}

          <section
            style={{
              backgroundColor: '#000',
              width: '280px',
              borderRadius: '0 0 30px 30px',
              padding: '0 10px 10px',
            }}
          >
            {user?.html_url && user?.login ? (
              <a href={user.html_url} target='_blank' rel='noreferrer'>
                <h2
                  style={{ padding: 0, margin: '-7px 0 0 0', color: 'white' }}
                >
                  {user.name}
                  <em>({user.login})</em>
                </h2>
              </a>
            ) : null}
            {user?.location ? (
              <p>Location: {user.location}</p>
            ) : null}
            {user?.email ? (
              <p>
                Email:{' '}
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
            ) : null}
            {user?.company ? (
              <p>Company: {user.company}</p>
            ) : null}
            {user?.bio ? <p>Bio: {user.bio}</p> : null}
          </section>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <IoRemoveCircle
              style={{
                color: 'red',
                fontSize: '80px',
                cursor: 'pointer',
              }}
              onClick={() => makeDecision(false)}
            />

            <IoAddCircle
              onClick={() => makeDecision(true)}
              style={{
                fontSize: '80px',
                color: 'green',
                cursor: 'pointer',
              }}
            />
          </section>
        </>
      ) : (
        <h2>No Candidates at this time</h2>
      )}
    </section>
  );
};

export default CandidateCard;
