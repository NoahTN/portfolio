import { graphql, useStaticQuery} from 'gatsby';

const useAbouts = () => {
   const data = useStaticQuery(graphql`
      query {
         allMdx(filter: {fileAbsolutePath: {regex: "/abouts/"}}, sort: {fields: frontmatter___id}) {
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
               body
            }
         }
      }
   `)
   return data.allMdx.nodes.map(about => ({
      title: about.frontmatter.title,
      // image: post.frontmatter.image,
      body: about.body,
   }));
};

export default useAbouts;

