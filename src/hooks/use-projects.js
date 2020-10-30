import { graphql, useStaticQuery} from 'gatsby';

const useProjects = () => {
   const data = useStaticQuery(graphql`
      query {
         allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: frontmatter___id}) {
            nodes {
               frontmatter {
                  title
                  skills
                  image {
                     sharp: childImageSharp {
                        fluid (
                           maxWidth: 481
                           maxHeight: 328
                           quality: 100
                         
                        ) {
                           ...GatsbyImageSharpFluid_withWebp
                        }
                     }
                  }
               }
               body
            }
         }
      }
   `)
   return data.allMdx.nodes.map(project => ({
      title: project.frontmatter.title,
      skills: project.frontmatter.skills,
      image: project.frontmatter.image,
      body: project.body,
   }));
};

export default useProjects;

