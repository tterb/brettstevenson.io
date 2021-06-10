import styled from 'styled-components'


const H1 = styled.h1`
  color: rgba(0,0,0,0.8);
  font-family: 'TTNorms2', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  margin-top: 1.5rem;
  margin-bottom: 1.25rem;
  @media (max-width: 500px) {
    width: 90%;
    margin: 1.5rem auto 1.25rem;
  }
`

const H2 = styled.h2`
  color: rgba(0,0,0,0.8);
  font-family: 'TTNorms2', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    width: 90%;
    margin: 1.55rem auto 1rem;
  }
`

const H3 = styled.h3`
  color: rgba(0,0,0,0.8);
  font-family: 'TTNorms2', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.15;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  @media (max-width: 500px) {
    width: 90%;
    margin: 0.75rem auto 0.5rem;
  }
`

const H4 = styled.h4`
  color: rgba(0,0,0,0.8);
  font-family: 'TTNorms2', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  margin-top: 0.5rem;
  @media (max-width: 500px) {
    width: 90%;
    margin: 0.5rem auto inherit;
  }
`

const H5 = styled.h4`
  color: rgba(0,0,0,0.6);
  font-family: 'TTNorms2', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1;
  margin-top: 0.5rem;
  @media (max-width: 500px) {
    width: 90%;
    margin: 0.5rem auto inherit;
  }
`

const Headers = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
}

export default Headers
