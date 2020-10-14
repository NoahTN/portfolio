import { graphql, useStaticQuery} from 'gatsby';

const useProjects = () => {
   const data = useStaticQuery(graphql`
      query {
         allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: frontmatter___id}) {
            nodes {
               frontmatter {
                  title
                  skills
                  # image {
                  #    sharp: childImageSharp {
                  #       fluid (
                  #          maxWidth: 100
                  #          maxHeight: 100
                  #          duotone: { shadow: "#663399", highlight: "#ddbbff"}
                  #       ) {
                  #          ...GatsbyImageSharpFluid_withWebp
                  #       }
                  #    }
                  # }
               }
               body
            }
         }
      }
   `)
   return data.allMdx.nodes.map(project => ({
      title: project.frontmatter.title,
      // image: post.frontmatter.image,
      body: project.body,
   }));
};

export default useProjects;

