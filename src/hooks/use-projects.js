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
                           quality: 100
                        ) {
                           ...GatsbyImageSharpFluid
                        }
                     }
                  }
                  link
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
      link: project.frontmatter.link,
      body: project.body,
   }));
};

export default useProjects;

