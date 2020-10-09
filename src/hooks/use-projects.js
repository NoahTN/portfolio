import { graphql, useStaticQuery} from 'gatsby';

const useProjects = () => {
   const data = useStaticQuery(graphql`
      query {
         allMdx {
            nodes {
               frontmatter {
                  title
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
               excerpt
            }
         }
      }
   `)
   return data.allMdx.nodes.map(project => ({
      title: project.frontmatter.title,
      // image: post.frontmatter.image,
      excerpt: project.excerpt,
   }));
};

export default useProjects;

