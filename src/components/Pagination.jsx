import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

class Pagination extends React.component {
  
  render() {
    const currentPage = this.props.currentPage
    const numPages = this.props.numPages
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <>
      <AniLink cover bg="#23262b" duration={1} to={nextPage} rel="prev">← Previous Page</AniLink>

      <AniLink cover bg="#23262b" duration={1} to={nextPage} rel="next">Next Page →</AniLink>
      </>
    )
  }
}

export default Pagination