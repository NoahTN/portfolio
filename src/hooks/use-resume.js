import { graphql, useStaticQuery} from 'gatsby';

const useResume = () => {
   const data = useStaticQuery(graphql`
      query {
         allFile(filter: { extension: { eq: "pdf" } }) {
            edges {
               node {
                  publicURL
               }
            }
         }
      }
   `)
   return data.allFile.edges[0];
};

export default useResume;

