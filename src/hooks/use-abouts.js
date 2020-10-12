import { graphql, useStaticQuery} from 'gatsby';

const useAbouts = () => {
   const data = useStaticQuery(graphql`
      query {
         allMdx(filter: {fileAbsolutePath: {regex: "/abouts/"}}) {
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
   return data.allMdx.nodes.map(about => ({
      title: about.frontmatter.title,
      // image: post.frontmatter.image,
      excerpt: about.excerpt,
   }));
};

export default useAbouts;

